<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Validation\ValidationException;
use InvalidArgumentException;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\EditableColumn;
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
        $record = new $model();

        // Only declared keys. Nothing else can reach the model.
        $record->forceFill($form->sanitize($validated));

        // From context, never from input.
        $this->applyTenant($record);

        $record->save();

        return back()->with('success', $class::label() . ' created.');
    }

    public function update(Request $request, string $resource, string $id): RedirectResponse
    {
        $class = $this->resolve($resource);

        $record = $this->findScoped($class, $id);

        abort_unless($class::can('update', $record), 403);

        $form = $class::formDefinition();
        $validated = $request->validate($form->rules());

        $this->assertNotStale($request, $record);

        $record->forceFill($form->sanitize($validated));
        $record->save();

        return back()->with('success', $class::label() . ' updated.');
    }

    /**
     * Write ONE cell, from an editable column in the list.
     *
     * A cell edit is a full write with a smaller control, so it goes through
     * every gate a form submission does — scoped lookup, per-record policy
     * check, staleness check — and adds one more that forms do not need:
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

        return back()->with('success', $class::label() . ' deleted.');
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

        return back()->with('success', $class::label() . ' restored.');
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

        return back()->with('success', $class::label() . ' permanently deleted.');
    }

    /**
     * Find a record INCLUDING trashed ones, still tenant-scoped.
     *
     * `withTrashed()` lifts only the soft-delete scope; every other global
     * scope — tenancy above all — still applies, so another organisation's
     * deleted record is as unreachable as its live ones.
     */
    private function findTrashed(string $class, string $id): Model
    {
        $model = $class::model();

        abort_unless(
            in_array(\Illuminate\Database\Eloquent\SoftDeletes::class, class_uses_recursive($model), true),
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
                . 'Reload to see the current values, or save again to overwrite them.',
        ]);
    }

    private function applyTenant(Model $record): void
    {
        $context = app(\PanelKit\Panel\Support\TenantContext::class);

        if (! $context->shouldScopeByColumn()) {
            // Dedicated-database tenancy: the connection is the boundary and the
            // column does not exist. Writing one would throw.
            return;
        }

        $key = $context->currentKey();

        // No tenant is always a bug in a panel, never a valid state
        // (antipatterns §1.2). Fail loudly rather than write an unowned row.
        abort_if($key === null, 403, 'No tenant resolved; refusing to write an unscoped record.');

        $record->setAttribute($context->column(), $key);
    }

    /** @return class-string<Resource> */
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
     * which is the correct answer — confirming existence would itself leak.
     *
     * @param  class-string<Resource>  $class
     */
    private function findScoped(string $class, string $id): Model
    {
        $model = $class::model();

        return $model::query()->findOrFail($id);
    }
}
