<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CommandPalette from '@/components/CommandPalette.vue';
import { AppearanceDrawer, useAppearance } from '@panelkit/ui';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItem[];
    }>(),
    {
        breadcrumbs: () => [],
    },
);

const page = usePage();

/**
 * The topbar MIRRORS the sidebar.
 *
 * Leaving the collapse trigger and breadcrumbs on the left while the sidebar
 * sits on the right splits the navigation across both edges — the trigger ends
 * up as far as possible from the thing it collapses. Flipping the row keeps
 * them adjacent whichever side is chosen.
 */
const { appearance } = useAppearance();

const mirrored = computed(() => appearance.value.sidebarSide === 'right');

/**
 * Static layout options first, page props second.
 *
 * A bespoke page declares its trail through defineOptions, which is evaluated
 * once at definition time. The generic resource page cannot — it does not know
 * which resource it is until the props arrive — so it ships the trail as a prop
 * instead and this falls through to it.
 */
const trail = computed<BreadcrumbItem[]>(() =>
    props.breadcrumbs.length
        ? props.breadcrumbs
        : ((page.props.breadcrumbs as BreadcrumbItem[] | undefined) ?? []),
);
</script>

<template>
    <!--
        SPACING COMES FROM justify-between, NOT FROM ml-auto ON THE SECOND GROUP.

        `ml-auto` only reads as "push to the far end" while the main axis runs
        left-to-right. Under flex-row-reverse the axis is inverted, so an auto
        LEFT margin absorbs the free space on the item's left and drags it
        toward its sibling — both groups ended up jammed into the right corner
        with the whole left half empty.

        justify-between has no handedness: it pins the first child to one edge
        and the last to the other, and reversing the row swaps which edge is
        which. That is the mirror, rather than a second hardcoded layout.
    -->
    <header
        class="border-sidebar-border/70 flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:px-6 md:px-4"
        :class="mirrored ? 'flex-row-reverse' : ''"
    >
        <div class="flex min-w-0 items-center gap-2" :class="mirrored ? 'flex-row-reverse' : ''">
            <SidebarTrigger :class="mirrored ? '-mr-1' : '-ml-1'" />
            <!-- Breadcrumbs are the first thing to give up on a phone; the
                 search trigger earns that space more. -->
            <template v-if="trail.length > 0">
                <Breadcrumbs :breadcrumbs="trail" class="hidden sm:flex" />
            </template>
        </div>

        <div class="flex items-center gap-2" :class="mirrored ? 'flex-row-reverse' : ''">
            <CommandPalette />
            <!-- Appearance belongs where you can see what it changes. -->
            <AppearanceDrawer />
        </div>
    </header>
</template>
