<?php

declare(strict_types=1);

namespace App\Panel\Clusters;

use PanelKit\Panel\Resources\Cluster;

/**
 * The network, as ONE word in the sidebar - roadmap 4.1.
 *
 * WHAT THIS REPLACES: a "Network" heading holding three permanent entries -
 * Plans, Routers, Connections. Those are not three subjects a person jumps
 * between from anywhere; they are three facets of the same one, and each was
 * costing a line of the column somebody scans all day. Now the sidebar says
 * "Network" once, and the facets appear as a sub-navigation on every screen
 * inside - which is also where somebody thinking about the network actually
 * wants them.
 *
 * Plans and Routers declare their membership on themselves (`$cluster`); the
 * Connections workspace has no resource class to declare it on, so the
 * cluster names it here.
 */
final class NetworkCluster extends Cluster
{
    protected static string $icon = 'router';

    public static function pages(): array
    {
        return [
            ['title' => 'Connections', 'href' => '/workspaces/connections'],
        ];
    }
}
