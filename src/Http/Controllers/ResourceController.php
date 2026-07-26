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

            // Deferred: neither the total nor the tab counts may sit in front of
            // the rows (§10, addendum C1).
            'total' => Inertia::defer($result->total),
            ...($result->tabCounts ? ['tabCounts' => Inertia::defer($result->tabCounts)] : []),
        ]);
    }
}
