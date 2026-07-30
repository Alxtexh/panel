<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\CustomFields\CustomFieldFactory;
use PanelKit\Panel\CustomFields\CustomFieldStorage;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Live\LiveConfig;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Serves every resource list. One controller, not one per screen.
 *
 * The transport split is visible here and is the whole architecture:
 *
 *   `schema` is sent on the FIRST load only. Every subsequent interaction is a
 *   partial reload whose `only:` list omits it, so filtering, sorting and paging
 *   move rows and nothing else. That is the difference from a server-rendered
 *   panel, where the whole component tree re-renders per interaction
 *   (antipatterns §3.1: 500-950 ms per page, of which 1-16 ms was the database).
 *
 *   `filterOptions` travels WITH the data, not inside the schema, because a
 *   tenant's routers are tenant data (addendum Part A).
 */
final class ResourceController extends Controller
{
    /**
     * Options for a searchable select.
     *
     * Lean JSON, capped, and tenant-scoped by whatever model the field's query
     * touches. This is what lets a relation with 100k rows be pickable at all -
     * the alternative was shipping every row to the browser as an option
     * element, which is a correctness problem rather than a slow one.
     */
    public function fieldOptions(Request $request, string $resource): JsonResponse
    {
        $class = $this->guard($resource);

        abort_unless($class::can('create') || $class::can('update'), 403);

        $key = (string) $request->query('field', '');
        $term = trim((string) $request->query('q', ''));

        foreach ($class::formDefinition()->fields() as $field) {
            if ($field->key !== $key) {
                continue;
            }

            // Only a field that OPTED IN may be queried this way. Otherwise the
            // endpoint becomes a way to enumerate any option list on demand.
            if (! $field instanceof SelectField || ! $field->isSearchable()) {
                break;
            }

            return response()->json(['options' => array_slice($field->search($term), 0, 25)]);
        }

        return response()->json(['options' => []]);
    }

    /**
     * Rows that changed, for the poll driver.
     *
     * Lean JSON, never an Inertia render. The whole point is that staying fresh
     * costs an indexed lookup rather than a page render - antipatterns S3.1
     * measured the system being replaced at 500-950ms per page of which 1-16ms
     * was the database, and repeating that on a timer is what makes polling a
     * bad word.
     *
     * Returns 204 when nothing changed, which is the common case, so the
     * client does no work and the response is empty.
     */
    public function updates(Request $request, string $resource): JsonResponse
    {
        $class = $this->guard($resource);

        abort_unless($class::can('viewAny'), 403);

        $ids = array_filter(explode(',', (string) $request->query('ids', '')));
        $since = (string) $request->query('since', '');

        if ($ids === [] || $since === '') {
            return response()->json(['records' => [], 'at' => now()->toIso8601String()]);
        }

        // Bounded: a caller cannot ask about more ids than a page can hold.
        $max = (int) config('panel.pagination.per_page_options.3', 100);
        $ids = array_slice($ids, 0, $max);

        $changed = $class::definition()->toListQuery($class::model())->changedSince($ids, $since);

        return response()->json([
            'records' => $changed,
            // The server's clock, not the client's - a client whose clock is
            // slow would otherwise re-request the same window forever, and one
            // whose clock is fast would skip changes entirely.
            'at' => now()->toIso8601String(),
        ]);
    }

    /**
     * Create form. A REAL PAGE, not a modal.
     *
     * Filament routes create, view and edit as their own pages, and the reasons
     * are practical rather than stylistic: a page is linkable, survives a
     * refresh, gets its own browser-history entry, and has room for a form that
     * a dialog cannot hold. The modal remains for quick inline actions, which is
     * what a modal is actually good at.
     */
    public function create(Request $request, string $resource): Response
    {
        $class = $this->guard($resource);

        abort_unless($class::can('create'), 403);
        abort_if($class::formDefinition()->fields() === [], 404, "Resource [{$resource}] has no form.");

        return Inertia::render('ResourceForm', [
            'schema' => $class::schema(),
            'record' => null,
            'values' => $class::formDefinition()->valuesFor(null),
            'formOptions' => $class::formDefinition()->resolveOptions(),
            'breadcrumbs' => $this->trail($class, 'New'),
            'customFieldSupport' => $this->customFieldSupport($class),
        ]);
    }

    /** Read-only detail page. */
    public function show(Request $request, string $resource, string $id): Response
    {
        $class = $this->guard($resource);

        $record = $class::model()::query()->findOrFail($id);

        abort_unless($class::can('view', $record), 403);

        // Fetched through the TABLE's select and joins, so joined columns like
        // plan_name are present. The raw model carries only its own attributes,
        // and a missing joined value renders as an em dash that reads like real
        // data rather than an omission.
        $row = $class::definition()->toListQuery($class::model())->find($id) ?? $record->toArray();

        return Inertia::render('ResourceView', [
            'schema' => $class::schema(),
            'record' => [...$row, 'id' => $record->getKey()],
            'can' => $class::permissions(),

            // The transport, so the client knows how to stay fresh without any
            // page or component knowing which driver is configured.
            'live' => LiveConfig::fromConfig()->toArray(),
            'breadcrumbs' => $this->trail($class, (string) ($record->name ?? "#{$record->getKey()}")),
        ]);
    }

    /**
     * Rows for one related list.
     *
     * LEAN JSON, and fetched on demand. The alternative - eager-loading the
     * relation with the parent - reads every related row to render the twenty
     * a person looks at, which is fine for the client the developer tested with
     * and ruinous for the one with 40,000 sessions.
     *
     * Authorized against the PARENT record, because that is what the operator
     * is looking at: permission to view a client is what grants sight of that
     * client's sessions, and a separate policy per relation would be a second
     * place to forget.
     */
    public function relation(Request $request, string $resource, string $id, string $relation): JsonResponse
    {
        $class = $this->guard($resource);

        $record = $class::model()::query()->findOrFail($id);

        $manager = $class::relation($relation);

        if ($manager === null) {
            throw new NotFoundHttpException("No relation [{$relation}] on [{$resource}].");
        }

        abort_unless($class::can($manager->getAbility(), $record), 403);

        $result = $manager->rows($request, $record->getKey());

        return response()->json([
            'records' => $result->records,
            // Keyset, like every other list: page 40 of a client's sessions
            // costs what page 1 costs. No total - a related list does not need
            // a blocking count in front of its rows any more than a table does.
            'nextCursor' => $result->nextCursor,
            'perPage' => $result->perPage,
        ]);
    }

    /** Edit form. A real page, for the same reasons as create. */
    public function edit(Request $request, string $resource, string $id): Response
    {
        $class = $this->guard($resource);

        $record = $class::model()::query()->findOrFail($id);

        abort_unless($class::can('update', $record), 403);

        $form = $class::formDefinition();
        abort_if($form->fields() === [], 404, "Resource [{$resource}] has no form.");

        return Inertia::render('ResourceForm', [
            'schema' => $class::schema(),
            'record' => ['id' => $record->getKey(), 'label' => (string) ($record->name ?? "#{$record->getKey()}")],
            'values' => [
                ...$form->valuesFor($record),
                // `valuesFor()` read `custom_{key}` as a plain attribute and
                // found nothing - the value actually lives unprefixed inside
                // `custom`. Overriding those keys here, after the spread, is
                // cheaper than teaching the generic form layer about one
                // resource-specific storage convention (see
                // RecordController::foldCustomFields()'s own note).
                ...$this->customFieldValues($class::key(), $record),
                // Carried so a stale save is rejected rather than silently
                // overwriting another admin (addendum C).
                '_updated_at' => $record->updated_at?->toIso8601String(),
            ],
            'formOptions' => $form->resolveOptions(),
            'breadcrumbs' => $this->trail($class, 'Edit'),
            'customFieldSupport' => $this->customFieldSupport($class),
        ]);
    }

    /**
     * Whether THIS form offers "+ Add a field to every {resource}", and what
     * the dialog needs if it does.
     *
     * The operator adding "one more thing we track" is LOOKING AT the record
     * form when the thought occurs - a definition screen under Configuration
     * is where definitions are managed, not where the need arises. So the
     * form itself carries the entry point, and this decides whether it may:
     * null - no affordance at all - unless the resource has custom-field
     * storage AND a CustomField resource is registered AND this user may
     * create definitions. A user who cannot define fields must not see the
     * button; hiding is not enforcement (the write path re-authorizes), but
     * offering a control that can only 403 teaches people the panel lies.
     *
     * @param  class-string<Resource>  $class
     * @return array{resource: string, labelPlural: string, types: list<string>, endpoint: string}|null
     */
    private function customFieldSupport(string $class): ?array
    {
        if (! in_array($class::key(), CustomFieldStorage::resources(), true)) {
            return null;
        }

        $definitions = app(PanelManager::class)->resource('custom-fields');

        if ($definitions === null || ! $definitions::can('create')) {
            return null;
        }

        return [
            'resource' => $class::key(),
            // Singular, for "every client" - "every clients" is what plural
            // copy reads as, and the operator will read this sentence at the
            // exact moment they are deciding whether to commit a schema
            // change.
            'label' => $class::label(),
            'types' => CustomFieldFactory::types(),
            'endpoint' => '/custom-fields',
        ];
    }

    /**
     * Current custom field values for one record, keyed by their PREFIXED
     * form key so the result drops straight into the form's `values` payload.
     *
     * @return array<string, mixed>
     */
    private function customFieldValues(string $resource, Model $record): array
    {
        $definitions = CustomField::forResource($resource);

        if ($definitions->isEmpty()) {
            return [];
        }

        $custom = $record->getAttribute('custom') ?? [];

        return $definitions
            ->mapWithKeys(static fn (CustomField $d): array => [
                CustomFieldFactory::formKey($d) => $custom[$d->key] ?? null,
            ])
            ->all();
    }

    /** @return list<array{title: string, href: string}> */
    private function trail(string $class, string $leaf): array
    {
        return [
            ['title' => $class::pluralLabel(), 'href' => '/'.$class::key()],
            ['title' => $leaf, 'href' => '#'],
        ];
    }

    /** @return class-string<resource> */
    private function guard(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        if (! $class::isEnabled()) {
            throw new NotFoundHttpException("Resource [{$resource}] is not enabled for this tenant.");
        }

        return $class;
    }

    public function index(Request $request, string $resource): Response
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        // A disabled feature 404s, it does not merely hide its link. Spec S9
        // item 5 - a hidden link is not a control, the URL is still typeable.
        if (! $class::isEnabled()) {
            throw new NotFoundHttpException("Resource [{$resource}] is not enabled for this tenant.");
        }

        abort_unless($class::can('viewAny'), 403);

        /** @var class-string<resource> $class */
        // Built ONCE and reused for both the query and the option lists.
        $definition = $class::definition();
        $result = $class::data($request, $definition);

        $schema = $class::schema();

        return Inertia::render('ResourceIndex', [
            // Cached, tenant-independent, sent once per session.
            'schema' => $schema,

            // A generic page cannot declare its breadcrumb statically the way a
            // bespoke page did, so it comes from the schema instead.
            'breadcrumbs' => [['title' => $schema['labelPlural'], 'href' => $schema['routes']['index']]],

            ...$result->toProps(),

            // Tenant data, so it rides with the records rather than the schema.
            // This is also the ONLY place filter option closures run - never at
            // definition time (antipatterns §3.3).
            'filterOptions' => $definition->resolveFilterOptions(),

            // Form option lists are tenant data too, and resolving them HERE is
            // what lets a modal open with no network request at all
            // (antipatterns S3.0.3 - a Filament action modal fetches its form on
            // open, so a confirmation dialog has latency in front of it).
            'formOptions' => $class::formDefinition()->resolveOptions(),

            // UI hints only. Every write re-authorizes server-side (S9 item 3).
            'can' => $class::permissions(),

            /*
             * This person's saved views for this resource.
             *
             * NOT DEFERRED, and not cached with the schema. Not deferred because
             * it is a handful of rows on one indexed key and the picker is part
             * of the toolbar rather than something that fills in later. Not in
             * the schema because it is per USER - the schema is shared across
             * everyone with the same permissions, which is most of why it can be
             * cached at all.
             */
            'savedViews' => $this->savedViewsFor($resource),

            // The transport, so the client knows how to stay fresh without any
            // page or component knowing which driver is configured.
            'live' => LiveConfig::fromConfig()->toArray(),

            // Deferred: neither the total nor the tab counts may sit in front of
            // the rows (§10, addendum C1).
            'total' => Inertia::defer($result->total),

            // Deferred for the same reason the total is: aggregating a tenant's
            // 200,000 rows must not sit in front of the ten on screen.
            ...($result->summary ? ['summary' => Inertia::defer($result->summary, 'summary')] : []),
            ...($result->tabCounts ? ['tabCounts' => Inertia::defer($result->tabCounts)] : []),
        ]);
    }

    /**
     * The acting user's views, newest first with the default pinned on top.
     *
     * Returns an empty list when the host application has no `saved_views`
     * table, because saved views are an APPLICATION feature the panel offers
     * rather than one it requires. A kit that hard-failed on a missing optional
     * table would make its own optional features mandatory.
     *
     * @return list<array<string, mixed>>
     */
    private function savedViewsFor(string $resource): array
    {
        $model = config('panel.saved_views.model');

        if ($model === null || ! class_exists($model)) {
            return [];
        }

        return $model::query()
            ->where('user_id', Auth::id())
            ->where('resource', $resource)
            ->orderByDesc('is_default')
            ->orderBy('name')
            ->get(['id', 'name', 'state', 'is_default'])
            ->map(static fn ($view): array => [
                'id' => $view->id,
                'name' => $view->name,
                'state' => $view->state,
                'isDefault' => (bool) $view->is_default,
            ])
            ->all();
    }
}
