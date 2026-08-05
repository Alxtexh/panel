<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\ValidationException;
use InvalidArgumentException;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\CustomFields\CustomFieldFactory;
use PanelKit\Panel\Http\NestedContext;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Support\TenantContext;
use PanelKit\Panel\Tables\Columns\EditableColumn;
use PanelKit\Panel\Tables\Reorderer;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Create, update and delete for every resource.
 *
 * FOUR GUARANTEES, each guarding a failure that is otherwise silent:
 *
 * 1. AUTHORIZE ON EVERY WRITE. The schema's permission booleans only hide UI
 *    (spec §9 item 3). A client that lies gets a 403, not a mutation.
 *
 * 2. MASS ASSIGNMENT CLOSED. Only keys the form declares survive `sanitize()`,
 *    so a request cannot write `tenant_id` and move a record into another
 *    tenant. `$request->all()` never reaches a model.
 *
 * 3. THE TENANT IS SET FROM CONTEXT, NEVER FROM INPUT. It is not a form field
 *    and cannot be one.
 *
 * 4. OPTIMISTIC CONCURRENCY. The form carries the record's `updated_at`; the
 *    save compares it and rejects a stale write with 409 rather than
 *    last-write-wins (addendum C). Two admins editing one client is normal in an
 *    ISP back office, and silent overwrite loses real work with no trace.
 */
final class RecordController extends Controller
{
    public function store(Request $request, string $resource): RedirectResponse
    {
        $class = $this->resolve($resource);

        abort_unless($class::can('create'), 403);

        $form = $class::formDefinition();
        abort_if($form->fields() === [], 404, "Resource [{$resource}] has no form.");

        // The single source of validation truth. The client holds no copy, so
        // the two cannot drift apart.
        $validated = $request->validate($form->rules());

        $model = $class::model();
        $record = new $model;

        // Only declared keys. Nothing else can reach the model.
        $record->forceFill($this->foldCustomFields($class::key(), $form->sanitize($validated), $record));

        // From context, never from input.
        $this->applyTenant($record);

        /*
         * NESTED - roadmap 4.2: the parent comes from the URL, resolved and
         * authorised in NestedContext, and is stamped AFTER the form data so
         * a request body claiming a different parent is overwritten rather
         * than honoured. Same posture as the tenant, for the same reason.
         */
        $parent = NestedContext::parent($request, $class);

        if ($parent !== null) {
            $record->setAttribute($class::parentColumn(), $parent->getKey());
        }

        $this->save($record);

        return back()->with('success', $class::label().' created.');
    }

    public function update(Request $request, string $resource, string $id): RedirectResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findScoped($class, $id);

        abort_unless($class::can('update', $record), 403);

        $form = $class::formDefinition();
        $validated = $request->validate($form->rules());

        $this->assertNotStale($request, $record);

        $record->forceFill($this->foldCustomFields($class::key(), $form->sanitize($validated), $record));
        $this->save($record);

        return back()->with('success', $class::label().' updated.');
    }

    /**
     * Run ONE declared record action against ONE record.
     *
     * Every gate a form submission passes, and one more that forms do not need:
     *
     *   THE ACTION MUST BE DECLARED ON THIS RESOURCE'S TABLE. The request names
     *   a key, and only a key the table declared resolves - so the endpoint can
     *   never be talked into calling a method the resource did not offer.
     *
     *   THE ABILITY IS THE ACTION'S OWN, checked against THIS record. Replicate
     *   asks for `create`, not `update`: it produces a new row, and somebody who
     *   may edit clients but not add them must not add one through a menu item.
     *
     *   `visible()` IS RE-EVALUATED. It exists to hide "Restore" on a row that
     *   was never deleted, and hiding is not enforcement - a client that skips
     *   the UI and posts the key still has to satisfy it.
     */
    public function runAction(Request $request, string $resource, string $id): JsonResponse
    {
        $validated = $request->validate([
            'action' => ['required', 'string', 'max:64'],
        ]);

        $class = $this->resolve($resource);
        $record = $this->findScoped($class, $id);

        $action = $class::definition()->recordAction($validated['action']);

        if ($action === null) {
            throw new NotFoundHttpException(
                "No record action [{$validated['action']}] on [{$resource}]."
            );
        }

        abort_unless($class::can($action->ability(), $record), 403);

        abort_unless(
            $action->appliesTo($record->getAttributes()),
            422,
            'That action does not apply to this record.',
        );

        $action->run($record, $this->actionInput($request, $action));

        return response()->json(['ok' => true]);
    }

    /**
     * The values a form action collected, validated and reduced to its own keys.
     *
     * THE DECLARATION IS THE AUTHORITY, not the request. Rules come from the
     * fields the RESOURCE declared, and `sanitize()` drops everything else - so
     * a request that names a column the form never offered has that key
     * discarded rather than passed to `handle()` and written. That is the same
     * allow-list posture the record form takes, and it is the whole reason a
     * form action is not a mass-assignment endpoint with a nicer label.
     *
     * NESTED UNDER `data`, so an action key and a field called `action` cannot
     * collide - which they would, on any resource with an `action` column.
     *
     * AN ACTION WITH NO FORM IGNORES INPUT ENTIRELY. Reading `data` for one
     * would let a caller submit values to an action that declared none, and
     * whether anything came of that would depend on what its `handle()` did
     * with a second argument it never expected.
     *
     * @return array<string, mixed>
     */
    private function actionInput(Request $request, RecordAction $action): array
    {
        $form = $action->formDefinition();

        if ($form === null) {
            return [];
        }

        $validated = validator(
            (array) $request->input('data', []),
            $form->rules(),
        )->validate();

        return $form->sanitize($validated);
    }

    /**
     * Apply a new display order to the rows of one page.
     *
     * THE SCOPED QUERY IS THE AUTHORITY on which rows exist. Ids the caller
     * cannot already see are dropped before anything is written, so a request
     * naming another organisation's row reorders nothing rather than reordering
     * something it should not know about.
     *
     * IT IS AN UPDATE, so it needs `update` - checked once for the resource
     * rather than per row, because a reorder is one act on a set. A per-row
     * policy check here would be N calls to answer a question about a list.
     *
     * BOUNDED BY THE PAGE. The request carries the ids of one page in their new
     * order; anything longer is refused. Reordering is a gesture on what is
     * visible, and accepting an arbitrary list would make this an endpoint for
     * rewriting the whole table's order in one request.
     */
    public function reorder(Request $request, string $resource): JsonResponse
    {
        $class = $this->resolve($resource);

        abort_unless($class::can('update'), 403);

        $table = $class::definition();
        $column = $table->getReorderColumn();

        if ($column === null) {
            throw new NotFoundHttpException("[{$resource}] is not reorderable.");
        }

        $validated = $request->validate([
            'ids' => ['required', 'array', 'min:1', 'max:'.$table->largestPage()],
            'ids.*' => ['required', 'integer'],
        ]);

        $model = $class::model();

        $written = (new Reorderer($column))->apply(
            $model::query(),
            $validated['ids'],
        );

        return response()->json(['ok' => true, 'moved' => $written]);
    }

    /**
     * Write ONE cell, from an editable column in the list.
     *
     * A cell edit is a full write with a smaller control, so it goes through
     * every gate a form submission does - scoped lookup, per-record policy
     * check, staleness check - and adds one more that forms do not need:
     *
     *   THE COLUMN MUST BE A DECLARED EditableColumn ON THIS TABLE. The request
     *   names a column, and only a column the resource declared as editable is
     *   accepted. Without that check this endpoint writes any attribute on any
     *   record the operator can see, which is a mass-assignment hole wearing an
     *   inline-edit costume.
     *
     * The VALUE is then validated by the column itself: a select accepts only
     * its own options, a toggle only a real boolean. Most enum columns have no
     * database constraint behind them, so this is the only thing standing
     * between a crafted request and a row with an unroutable status.
     *
     * JSON, not a redirect: the row updates in place and the page must not
     * navigate.
     */
    public function updateCell(Request $request, string $resource, string $id): JsonResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findScoped($class, $id);

        abort_unless($class::can('update', $record), 403);

        $validated = $request->validate([
            'column' => ['required', 'string', 'max:64'],
            'value' => ['present'],
        ]);

        $column = null;

        foreach ($class::definition()->getColumns() as $candidate) {
            if ($candidate->key === $validated['column'] && $candidate instanceof EditableColumn) {
                $column = $candidate;
                break;
            }
        }

        if ($column === null) {
            throw new NotFoundHttpException("[{$validated['column']}] is not an editable column on [{$resource}].");
        }

        try {
            $value = $column->castValue($validated['value']);
        } catch (InvalidArgumentException $e) {
            throw ValidationException::withMessages(['value' => $e->getMessage()]);
        }

        $this->assertNotStale($request, $record);

        // forceFill is safe HERE and only here: the attribute name came from the
        // resource's own column declaration, not from the request. The request
        // chose which declared column, never which attribute.
        $record->forceFill([$column->writableColumn() => $value]);
        $record->save();

        return response()->json([
            'id' => $record->getKey(),
            'column' => $column->key,
            'value' => $value,
            // Echoed so the row's staleness guard stays armed for the next edit
            // without a full reload.
            'updated_at' => $record->updated_at?->toIso8601String(),
        ]);
    }

    public function destroy(Request $request, string $resource, string $id): RedirectResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findScoped($class, $id);

        abort_unless($class::can('delete', $record), 403);

        $record->delete();

        return back()->with('success', $class::label().' deleted.');
    }

    /**
     * Bring a soft-deleted record back.
     *
     * Deliberately its own route rather than a flag on update: restoring is not
     * an edit, it carries a different permission, and it is the one action whose
     * whole purpose is to be reachable after a mistake. Burying it in a form
     * would mean opening the record to undo deleting it.
     */
    public function restore(Request $request, string $resource, string $id): RedirectResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findTrashed($class, $id);

        // `restore` and not `update`: a policy may well let someone edit records
        // without letting them resurrect one.
        abort_unless($class::can('restore', $record), 403);

        $record->restore();

        return back()->with('success', $class::label().' restored.');
    }

    /**
     * Delete permanently.
     *
     * Separate from destroy() because they are different acts: destroy() is
     * reversible and this is not. Sharing a route would mean one confirmation
     * dialog standing in front of two very different outcomes.
     */
    public function forceDestroy(Request $request, string $resource, string $id): RedirectResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findTrashed($class, $id);

        abort_unless($class::can('forceDelete', $record), 403);

        $record->forceDelete();

        return back()->with('success', $class::label().' permanently deleted.');
    }

    /**
     * Find a record INCLUDING trashed ones, still tenant-scoped.
     *
     * `withTrashed()` lifts only the soft-delete scope; every other global
     * scope - tenancy above all - still applies, so another organisation's
     * deleted record is as unreachable as its live ones.
     */
    private function findTrashed(string $class, string $id): Model
    {
        $model = $class::model();

        abort_unless(
            in_array(SoftDeletes::class, class_uses_recursive($model), true),
            404,
            "Resource [{$class::key()}] does not support soft deletes.",
        );

        return $model::query()->withTrashed()->findOrFail($id);
    }

    /**
     * Rejects a write against a record that changed since the form was opened.
     *
     * Thrown as a validation error rather than a bare 409 so the SPA surfaces it
     * inline with everything else, instead of the frozen-page failure
     * antipatterns §2.2 describes, where a JSON-expecting request took an abort
     * branch and the page simply sat there.
     */
    private function assertNotStale(Request $request, Model $record): void
    {
        $submitted = $request->input('_updated_at');

        if ($submitted === null || $record->updated_at === null) {
            return;
        }

        if ($record->updated_at->toIso8601String() === $submitted) {
            return;
        }

        throw ValidationException::withMessages([
            '_conflict' => 'This record was changed by someone else while you were editing. '
                .'Reload to see the current values, or save again to overwrite them.',
        ]);
    }

    private function applyTenant(Model $record): void
    {
        $context = app(TenantContext::class);

        if (! $context->shouldScopeByColumn()) {
            // Dedicated-database tenancy: the connection is the boundary and the
            // column does not exist. Writing one would throw.
            return;
        }

        /*
         * A RECORD WHOSE OWN TABLE HAS NO TENANT COLUMN IS NOT TENANT DATA,
         * whatever the tenancy mode. `CustomField` (roadmap 5.1) is the
         * first of these - an installation-wide definition, not something a
         * single tenant owns (see the migration's and the model's own
         * notes) - so its table was never given one. Writing it anyway would
         * throw the same way a dedicated-database write would.
         */
        if (! Schema::hasColumn($record->getTable(), $context->column())) {
            return;
        }

        $key = $context->currentKey();

        // No tenant is always a bug in a panel, never a valid state
        // (antipatterns §1.2). Fail loudly rather than write an unowned row.
        abort_if($key === null, 403, 'No tenant resolved; refusing to write an unscoped record.');

        $record->setAttribute($context->column(), $key);
    }

    /**
     * Saves a record, turning a unique-constraint collision into a field
     * error instead of a 500.
     *
     * GENERIC ON PURPOSE - roadmap 5.1 is what needed this first (two custom
     * field definitions both called `notes` on `clients`, caught by the
     * migration's own `unique(['resource', 'key'])`), but nothing about it is
     * specific to that table. Every resource's `store()`/`update()` already
     * runs through here, so any declared unique constraint - present or
     * future - gets the same friendly rejection rather than a stack trace,
     * without every resource needing its own `Rule::unique()` wired up by
     * hand (which would also need `->ignore()` on update, and nothing in the
     * form layer today has the current record's id at schema-build time to
     * give it).
     */
    private function save(Model $record): void
    {
        try {
            $record->save();
        } catch (UniqueConstraintViolationException) {
            throw ValidationException::withMessages([
                '_conflict' => 'This would duplicate a record that already exists.',
            ]);
        }
    }

    /**
     * Moves each sanitized `custom_{key}` entry into the record's `custom`
     * JSON column, unprefixed - roadmap 5.1.
     *
     * READS THE RECORD'S OWN EXISTING `custom` FIRST, because a definition
     * can be hidden by its own `visibleWhen` (Form::sanitize already dropped
     * it from `$sanitized` in that case) or simply absent from an older
     * client's payload. Starting from `[]` every time would erase a value
     * the operator never had a chance to see, let alone change - the same
     * "declared but not submitted keeps its stored value" guarantee
     * `Form::sanitize()` already gives every real column.
     *
     * FROM `CustomField::forResource()`, NOT the schema's already-serialised
     * `customFields()`: this needs both the prefixed form key (to find the
     * value in `$sanitized`) and the bare stored key (to write into
     * `custom`) for the same definition, and the schema array only kept the
     * prefixed one - re-deriving the bare key by stripping `custom_` would
     * be re-encoding a fact `CustomFieldFactory` already owns.
     *
     * A NO-OP FOR EVERY RESOURCE WITHOUT DEFINITIONS - the common case - so
     * `$sanitized['custom']` is never set, and a model with no `custom`
     * column (nothing has defined one for it yet) is never asked to save
     * one.
     *
     * @param  array<string, mixed>  $sanitized
     * @return array<string, mixed>
     */
    private function foldCustomFields(string $resource, array $sanitized, Model $record): array
    {
        $definitions = CustomField::forResource($resource);

        if ($definitions->isEmpty()) {
            return $sanitized;
        }

        $custom = $record->getAttribute('custom') ?? [];

        foreach ($definitions as $definition) {
            $formKey = CustomFieldFactory::formKey($definition);

            if (! array_key_exists($formKey, $sanitized)) {
                continue;
            }

            $custom[$definition->key] = $sanitized[$formKey];
            unset($sanitized[$formKey]);
        }

        $sanitized['custom'] = $custom;

        return $sanitized;
    }

    /** @return class-string<resource> */
    private function resolve(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        return $class;
    }

    /**
     * The tenant global scope makes this a 404 for another tenant's record,
     * which is the correct answer - confirming existence would itself leak.
     *
     * @param  class-string<resource>  $class
     */
    private function findScoped(string $class, string $id): Model
    {
        $model = $class::model();

        $query = $model::query();

        /*
         * NESTED - roadmap 4.2. The URL claims this record belongs to a
         * specific parent, so the FETCH carries the claim: a mismatched
         * pairing is a 404 from `findOrFail`, indistinguishable from a
         * record that does not exist. In here rather than per action, so
         * update, destroy, restore, actions and cell edits all get it from
         * the one place none of them can forget.
         */
        $parent = NestedContext::parent(request(), $class);

        if ($parent !== null) {
            $query->where($class::parentColumn(), $parent->getKey());
        }

        return $query->findOrFail($id);
    }
}
