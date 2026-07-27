<script setup lang="ts">
/**
 * The horizontal navigation bar — the third layout option.
 *
 * SAME NAV MODEL AS THE SIDEBAR, different rendering. Groups that are
 * collapsible sections in the rail become dropdown menus here, which is the
 * only honest translation: a top bar has no vertical room to expand into.
 *
 * THE DROPDOWNS TELEPORT (PkDropdown). A nav dropdown in a bar that sits above
 * a scrolling region has exactly the clipping problem the table row menu had —
 * `overflow` on any ancestor cuts it off, and no z-index rescues it.
 *
 * THE BAR SCROLLS HORIZONTALLY rather than wrapping. A wrapping nav changes the
 * page's chrome height as the window narrows, so the content jumps; scrolling
 * keeps the bar exactly one row tall at every width.
 */
import { Link } from '@inertiajs/vue3';
import { AppearanceDrawer, PkDropdown } from '@panelkit/ui';
import AppLogo from '@/components/AppLogo.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CommandPalette from '@/components/CommandPalette.vue';
import NotificationBell from '@/components/NotificationBell.vue';
import TopNavUser from '@/components/TopNavUser.vue';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { usePanelNav } from '@/composables/usePanelNav';
import type { BreadcrumbItem } from '@/types';

withDefaults(defineProps<{ breadcrumbs?: BreadcrumbItem[] }>(), { breadcrumbs: () => [] });

const { nav, supportItems } = usePanelNav();
const { isCurrentUrl } = useCurrentUrl();

/** A group is active when any of its children is the current page. */
function groupIsActive(items: { href: string }[]): boolean {
    return items.some((i) => isCurrentUrl(i.href));
}
</script>

<template>
    <header class="border-sidebar-border/70 bg-background sticky top-0 z-30 border-b">
        <div class="flex h-14 items-center gap-3 px-3 sm:px-4">
            <Link :href="nav.primary[0].href" class="shrink-0">
                <AppLogo />
            </Link>

            <nav class="pk-scroll flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto">
                <Link
                    v-for="item in nav.primary"
                    :key="item.title"
                    :href="item.href"
                    class="hover:bg-accent flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors"
                    :class="isCurrentUrl(item.href) ? 'bg-accent text-foreground font-medium' : 'text-muted-foreground'"
                >
                    <component :is="item.icon" class="size-4" />
                    {{ item.title }}
                </Link>

                <PkDropdown v-for="group in nav.groups" :key="group.name" align="start" width="w-52">
                    <template #trigger>
                        <button
                            type="button"
                            class="hover:bg-accent flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors"
                            :class="
                                groupIsActive(group.items)
                                    ? 'bg-accent text-foreground font-medium'
                                    : 'text-muted-foreground'
                            "
                        >
                            {{ group.name }}
                            <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </template>

                    <template #panel="{ close }">
                        <Link
                            v-for="item in group.items"
                            :key="item.title"
                            :href="item.href"
                            class="hover:bg-accent flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                            :class="isCurrentUrl(item.href) ? 'text-foreground font-medium' : ''"
                            @click="close()"
                        >
                            <component :is="item.icon" class="size-4 shrink-0" />
                            {{ item.title }}
                        </Link>
                    </template>
                </PkDropdown>

                <PkDropdown align="start" width="w-44">
                    <template #trigger>
                        <button
                            type="button"
                            class="text-muted-foreground hover:bg-accent flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition-colors"
                        >
                            Support
                            <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </template>
                    <template #panel="{ close }">
                        <Link
                            v-for="item in supportItems"
                            :key="item.title"
                            :href="item.href"
                            class="hover:bg-accent flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm"
                            @click="close()"
                        >
                            <component :is="item.icon" class="size-4 shrink-0" />
                            {{ item.title }}
                        </Link>
                    </template>
                </PkDropdown>
            </nav>

            <!--
                The right-hand group is allowed to SHRINK, and the nav is not.
                Reversing that is what produced the crush in the first place: a
                fixed-width search box pushed the menu into a scrolling strip
                while sitting at its full size, so the thing that lost room was
                the thing people actually use.
            -->
            <div class="flex min-w-0 shrink items-center gap-1.5">
                <CommandPalette />
                <NotificationBell />
                <AppearanceDrawer />
                <TopNavUser />
            </div>
        </div>

        <!-- Breadcrumbs get their own strip: there is no room for them beside a
             full menu, and dropping them entirely loses the sense of place the
             sidebar layouts keep in the topbar. -->
        <!--
            The strip appears ONLY when there is a real hierarchy to show.

            On the dashboard the trail was a single "Dashboard" crumb, sitting
            directly beneath a nav item reading "Dashboard" and directly above a
            page heading reading "Dashboard" — the same word three times in
            eighty pixels. A one-item trail tells you nothing the highlighted
            nav item has not already said; "Clients › New" does.
        -->
        <div
            v-if="breadcrumbs.length > 1"
            class="border-sidebar-border/70 hidden border-t px-3 py-2 sm:block sm:px-4"
        >
            <Breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
    </header>
</template>
