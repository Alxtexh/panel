<?php

declare(strict_types=1);

namespace App\Panel\Clusters;

use PanelKit\Panel\Resources\Cluster;

/**
 * The network, as ONE word in the sidebar - roadmap 4.1.
 *
 * WHAT THIS REPLACES: a "Network" heading holding permanent entries for
 * Plans and Routers. Those are not two subjects a person jumps between from
 * anywhere; they are facets of the same one, and each was costing a line of
 * the column somebody scans all day. Now the sidebar says "Network" once,
 * and the facets appear as a sub-navigation on every screen inside - which
 * is also where somebody thinking about the network actually wants them.
 *
 * Members declare their membership on themselves (`$cluster`).
 */
final class NetworkCluster extends Cluster
{
    protected static string $icon = 'router';
}
