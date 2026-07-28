<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Panel\Workspaces\ConnectionsWorkspace;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Renders a workspace: several independent tables on one page.
 *
 * THE PROP SHAPE IS WHAT MAKES THE TABLES INDEPENDENT. Each table's rows land
 * under its own key - `tables.live`, `tables.history` - so a partial reload can
 * name one of them and move one table's data. Flattening them into a shared
 * `records` prop would mean every sort on either table refetched both, which is
 * exactly the coupling the namespaced query string exists to remove.
 *
 * TOTALS ARE DEFERRED PER TABLE, for the same reason a resource index defers
 * its own: counting a tenant's sessions must not sit in front of the ten rows
 * on screen, and doing it twice on one page would be twice as wrong.
 */
final class WorkspaceController extends Controller
{
    /**
     * Registered workspaces.
     *
     * An explicit map rather than filesystem discovery: there are two of them,
     * and a `{workspace}` route segment that resolves anything found on disk is
     * a larger surface than this needs. Discovery is worth it for resources
     * because generating one is meant to be a thirty-second job; a workspace is
     * a considered page.
     *
     * @var array<string, class-string>
     */
    private const WORKSPACES = [
        'connections' => ConnectionsWorkspace::class,
    ];

    public function show(Request $request, string $workspace): Response
    {
        $class = self::WORKSPACES[$workspace] ?? null;

        if ($class === null) {
            throw new NotFoundHttpException("No workspace registered for [{$workspace}].");
        }

        $definition = $class::definition();
        $results = $definition->results($request);

        $tables = [];
        $totals = [];

        foreach ($results as $name => $result) {
            $tables[$name] = $result->toProps();

            // The total is a SIBLING prop, not part of the table's own props.
            // Inertia resolves a deferred prop at the top level; nesting one
            // inside a normal array would serialise the closure rather than
            // defer it, so the page would receive something unusable and no
            // error would say so.
            $totals[$name] = $result->total;
        }

        return Inertia::render('Workspace', [
            'schema' => $definition->toSchema(),
            'breadcrumbs' => [[
                'title' => $definition->toSchema()['heading'],
                'href' => "/workspaces/{$workspace}",
            ]],
            'tables' => $tables,
            // One deferred prop per table, so a slow count on one does not hold
            // up the other's.
            ...collect($totals)
                ->mapWithKeys(fn (mixed $total, string $name): array => [
                    "total_{$name}" => Inertia::defer($total, "total_{$name}"),
                ])
                ->all(),
        ]);
    }
}
