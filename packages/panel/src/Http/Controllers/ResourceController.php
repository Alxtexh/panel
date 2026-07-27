<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
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
 *   (antipatterns §3.1: 500–950 ms per page, of which 1–16 ms was the database).
 *
 *   `filterOptions` travels WITH the data, not inside the schema, because a
 *   tenant's routers are tenant data (addendum Part A).
 */
final class ResourceController extends Controller
{
    /**
     * Rows that changed, for the poll driver.
     *
     * Lean JSON, never an Inertia render. The whole point is that staying fresh
     * costs an indexed lookup rather than a page render — antipatterns S3.1
     * measured the system being replaced at 500-950ms per page of which 1-16ms
     * was the database, and repeating that on a timer is what makes polling a
     * bad word.
     *
     * Returns 204 when nothing changed, which is the common case, so the
     * client does no work and the response is empty.
     */
    public function updates(Request $request, string $resource): \Illuminate\Http\JsonResponse
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
            // The server's clock, not the client's — a client whose clock is
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
            'live' => \PanelKit\Panel\Live\LiveConfig::fromConfig()->toArray(),
            'breadcrumbs' => $this->trail($class, (string) ($record->name ?? "#{$record->getKey()}")),
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
                // Carried so a stale save is rejected rather than silently
                // overwriting another admin (addendum C).
                '_updated_at' => $record->updated_at?->toIso8601String(),
            ],
            'formOptions' => $form->resolveOptions(),
            'breadcrumbs' => $this->trail($class, 'Edit'),
        ]);
    }

    /** @return list<array{title: string, href: string}> */
    private function trail(string $class, string $leaf): array
    {
        return [
            ['title' => $class::pluralLabel(), 'href' => '/' . $class::key()],
            ['title' => $leaf, 'href' => '#'],
        ];
    }

    /** @return class-string<Resource> */
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
        // item 5 — a hidden link is not a control, the URL is still typeable.
        if (! $class::isEnabled()) {
            throw new NotFoundHttpException("Resource [{$resource}] is not enabled for this tenant.");
        }

        abort_unless($class::can('viewAny'), 403);

        /** @var class-string<Resource> $class */
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
            // This is also the ONLY place filter option closures run — never at
            // definition time (antipatterns §3.3).
            'filterOptions' => $definition->resolveFilterOptions(),

            // Form option lists are tenant data too, and resolving them HERE is
            // what lets a modal open with no network request at all
            // (antipatterns S3.0.3 — a Filament action modal fetches its form on
            // open, so a confirmation dialog has latency in front of it).
            'formOptions' => $class::formDefinition()->resolveOptions(),

            // UI hints only. Every write re-authorizes server-side (S9 item 3).
            'can' => $class::permissions(),

            // The transport, so the client knows how to stay fresh without any
            // page or component knowing which driver is configured.
            'live' => \PanelKit\Panel\Live\LiveConfig::fromConfig()->toArray(),

            // Deferred: neither the total nor the tab counts may sit in front of
            // the rows (§10, addendum C1).
            'total' => Inertia::defer($result->total),
            ...($result->tabCounts ? ['tabCounts' => Inertia::defer($result->tabCounts)] : []),
        ]);
    }
}
