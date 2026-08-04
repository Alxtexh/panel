<script setup lang="ts">
/**
 * The panel's navigation column.
 *
 * WHY THIS IS IN THE PACKAGE AT ALL. Until now the package shipped the screens
 * and published a scaffold for the frame around them, on the principle that
 * "the shell stays yours". The cost showed up the first time somebody put a
 * generated portal beside the reference app: the same tables, in a plainer
 * frame, reading as a less finished product. A sidebar is not
 * business-specific - every panel has one, and every consumer was rebuilding
 * it worse.
 *
 * IT READS `panelNav`, WHICH THE SERVER ALREADY SHARES. Nothing here decides
 * what is in the menu: `PanelNavigation::build()` filters by ability and by
 * panel, so a screen somebody may not open is absent rather than hidden - the
 * same rule the dashboard widgets follow, and for the same reason.
 *
 * COLLAPSED IS ICONS, NOT NOTHING. A rail with no labels is only usable if
 * each entry still says what it is on hover, so the title attribute stays and
 * the icon is never dropped. An entry with no icon falls back to its initial
 * rather than vanishing, because a menu with holes in it looks broken.
 */
import { Link } from '@inertiajs/vue3'
import { iconPath } from '@alxtexh-enterprise/panel'
import { computed } from 'vue'

import type { NavItem } from './types'

/*
 * THE SHAPE IS INLINE, NOT IMPORTED. `defineProps` with a type from another
 * file makes the SFC compiler load TypeScript from the CONSUMING project to
 * resolve it - which a fresh Laravel app does not have, and the build dies with
 * "Failed to load TypeScript". See `types.ts`, which names the same shape for
 * anyone who wants it in their own code.
 */
const props = withDefaults(
    defineProps<{
        /** From the server. Already filtered to this panel and this person. */
        items?: {
            key: string
            title: string
            href: string
            icon?: string | null
            group?: string | null
        }[]
        /** Where the brand links to, and what it says. */
        brand?: string
        home?: string
        /** The current path, for the active state. */
        current?: string
        collapsed?: boolean
    }>(),
    { items: () => [], brand: 'Panel', home: '/', current: '/', collapsed: false },
)

/**
 * Grouped, preserving the ORDER THE SERVER SENT.
 *
 * `PanelNavigation` sorts by an explicit `sort` then by title, and rebuilding
 * that here - or sorting the group names alphabetically - would quietly
 * overrule a resource that declared where it wanted to be.
 */
const groups = computed<[string, NavItem[]][]>(() => {
    const map = new Map<string, NavItem[]>()

    for (const item of props.items) {
        const key = item.group ?? ''

        map.set(key, [...(map.get(key) ?? []), item])
    }

    return [...map.entries()]
})

/**
 * THE LONGEST MATCHING HREF WINS, which matters on a panel mounted at `/`.
 *
 * A plain `startsWith` marks the dashboard active on every page when its href
 * is `/`, and marks `/clients` active while you are on `/clients-archive`. So:
 * an exact match, or a match followed by a separator, and the most specific
 * one of those.
 */
const activeKey = computed<string | null>(() => {
    const path = props.current

    const matches = props.items.filter(
        (item) => path === item.href || path.startsWith(item.href.replace(/\/$/, '') + '/'),
    )

    return matches.sort((a, b) => b.href.length - a.href.length)[0]?.key ?? null
})
</script>

<template>
    <div class="flex h-full flex-col gap-4 overflow-y-auto p-3">
        <Link
            :href="home"
            class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold tracking-tight"
            :title="brand"
        >
            <span
                class="bg-primary text-primary-foreground flex size-6 shrink-0 items-center justify-center rounded text-xs font-bold"
                aria-hidden="true"
            >
                {{ brand.slice(0, 1).toUpperCase() }}
            </span>

            <span v-if="!collapsed" class="truncate">{{ brand }}</span>
        </Link>

        <nav class="flex flex-col gap-5">
            <div v-for="[group, entries] in groups" :key="group" class="flex flex-col gap-0.5">
                <p
                    v-if="group && !collapsed"
                    class="text-muted-foreground px-2 pb-1 text-xs font-medium tracking-wide uppercase"
                >
                    {{ group }}
                </p>

                <!--
                    A DIVIDER STANDS IN FOR THE HEADING WHEN COLLAPSED. Dropping
                    the label and nothing else runs every group together into
                    one list, which is worse than the labels being gone.
                -->
                <div v-else-if="group && collapsed" class="border-border mx-2 mb-1 border-t" />

                <Link
                    v-for="item in entries"
                    :key="item.key"
                    :href="item.href"
                    :title="item.title"
                    :aria-current="item.key === activeKey ? 'page' : undefined"
                    class="group/nav relative flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors"
                    :class="
                        item.key === activeKey
                            ? 'bg-muted text-foreground font-medium'
                            : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    "
                >
                    <svg
                        class="size-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(item.icon ?? 'dot')" />
                    </svg>

                    <span v-if="!collapsed" class="truncate">{{ item.title }}</span>

                    <!--
                        THE FLYOUT, WHICH IS WHAT MAKES THE RAIL USABLE.

                        Collapsed, the only thing distinguishing two entries is a
                        16px glyph, and the native `title` tooltip takes about a
                        second to appear - long enough that people expand the
                        sidebar again rather than wait, which is the whole
                        feature undone.

                        CSS-ONLY, on hover AND focus, so it works for a keyboard
                        as well as a mouse and costs no listener per entry.
                        `pointer-events-none` because it is a label rather than a
                        menu: a floating box that swallowed the click next to it
                        would be worse than no label.
                    -->
                    <span
                        v-if="collapsed"
                        data-nav-flyout
                        class="bg-popover text-popover-foreground pointer-events-none invisible absolute left-full z-50 ml-2 rounded-md border px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-md transition-opacity group-focus-visible/nav:visible group-focus-visible/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100"
                    >
                        {{ item.title }}
                    </span>
                </Link>
            </div>

            <!--
                AN EMPTY MENU SAYS WHAT TO DO. A blank column reads as a broken
                panel; this reads as the next step, which is what it is -
                discovery registers a resource the moment its class exists.
            -->
            <p v-if="items.length === 0 && !collapsed" class="text-muted-foreground px-2 text-sm">
                No screens yet. Generate one with
                <code class="text-xs">make:panel-resource</code>.
            </p>
        </nav>
    </div>
</template>
