<?php

declare(strict_types=1);

namespace PanelKit\Panel\Resources;

/**
 * Several resources presented as ONE navigation item - roadmap 4.1.
 *
 * WHAT A GROUP CANNOT SAY. A navigation group is a heading: every member is
 * still its own entry, permanently visible, each occupying a line of the
 * column somebody scans all day. That is right when the members are peers a
 * person jumps between from anywhere - and wrong when they are facets of one
 * subject that only make sense together. Plans and routers are both "the
 * network"; a person thinking about the network wants one word in the sidebar
 * and the facets laid out once they arrive.
 *
 * SO A CLUSTER IS ONE ENTRY OUTSIDE AND A SUB-NAVIGATION INSIDE. The sidebar
 * shows the cluster's own label and icon, linking to its first member the
 * signed-in person may actually open; every member's list page then carries a
 * strip of links to its siblings. Nothing about routing, policies or schemas
 * changes - membership is a NAVIGATION fact, exactly as `showsInNavigation()`
 * is, and a resource in a cluster is reachable at the same URL it always was.
 *
 * MEMBERSHIP IS DECLARED ON THE RESOURCE (`protected static ?string $cluster`),
 * not listed here, for the same reason resources declare their own group: the
 * registry is discovered, and a list on the cluster would have to be edited in
 * step with it. What the cluster declares is only what nothing else can: its
 * name, its icon, where it sits, and any NON-resource screens that belong in
 * the sub-navigation - a workspace, a report - which have no class of their
 * own to declare membership on.
 */
abstract class Cluster
{
    protected static string $icon = 'package';

    protected static ?string $group = null;

    protected static ?int $sort = null;

    /** `NetworkCluster` becomes `network` - the same convention as resources. */
    public static function key(): string
    {
        return str(class_basename(static::class))->beforeLast('Cluster')->kebab()->value();
    }

    public static function label(): string
    {
        return str(class_basename(static::class))->beforeLast('Cluster')->headline()->value();
    }

    public static function icon(): string
    {
        return static::$icon;
    }

    /** The heading the cluster's single entry sits under, if any. */
    public static function group(): ?string
    {
        return static::$group;
    }

    public static function navigationSort(): int
    {
        return static::$sort ?? 0;
    }

    /**
     * Non-resource screens that belong in this cluster's sub-navigation.
     *
     * A cluster about "the network" is not only its two resource tables - the
     * connections workspace is the same subject. Pages have no class in the
     * resource registry to declare membership on, so the cluster names them.
     * They appear after the resource members, in this order.
     *
     * @return list<array{title: string, href: string}>
     */
    public static function pages(): array
    {
        return [];
    }
}
