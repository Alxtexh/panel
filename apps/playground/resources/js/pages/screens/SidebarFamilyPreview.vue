<script setup lang="ts">
/**
 * Forced sidebar-layout gallery for the demo nav.
 *
 * Renders INSIDE the live AppLayout shell (not under `errors/` + PanelShell).
 * `forceSidebarLayout` and shared `panel.sidebarLayout` rearrange the real
 * chrome so each sample is distinct: accordion, file-tree, calendar, dialog,
 * header, inset, and the rest.
 */
import { PAGE_SHELL } from '@alxtexh-enterprise/panel';
import { Head, Link } from '@inertiajs/vue3';
import { computed } from 'vue';

type SidebarLayout =
    | 'inset'
    | 'sidebar'
    | 'floating'
    | 'icon'
    | 'header'
    | 'accordion'
    | 'file-tree'
    | 'calendar'
    | 'dialog';

const LAYOUTS: SidebarLayout[] = [
    'inset',
    'sidebar',
    'floating',
    'icon',
    'header',
    'accordion',
    'file-tree',
    'calendar',
    'dialog',
];

const LAYOUT_META: Record<
    SidebarLayout,
    { label: string; blurb: string; lookFor: string; shadcn: string }
> = {
    inset: {
        label: 'Inset',
        blurb: 'Inset rail with a secondary footer nav group (kit default).',
        lookFor: 'Rounded inset rail, account menu in the sidebar footer.',
        shadcn: 'sidebar-08',
    },
    sidebar: {
        label: 'Edge',
        blurb: 'Edge-flush grouped navigation against the viewport edge.',
        lookFor: 'Flush left rail (no inset gap), same footer account menu.',
        shadcn: 'sidebar-01',
    },
    floating: {
        label: 'Floating',
        blurb: 'Floating card rail beside the inset content pane.',
        lookFor: 'Rail floats as a card with gap around it.',
        shadcn: 'sidebar-04',
    },
    icon: {
        label: 'Icon rail',
        blurb: 'Starts collapsed to icons; expand to read labels.',
        lookFor: 'Narrow icon-only rail on first paint.',
        shadcn: 'sidebar-07',
    },
    header: {
        label: 'Site header',
        blurb: 'Sticky full-width site header above a nav-only rail.',
        lookFor:
            'Brand + search + lock + avatar on the TOP site header. No second fake header in the page body.',
        shadcn: 'sidebar-16',
    },
    accordion: {
        label: 'Accordion',
        blurb: 'Plus/Minus collapsible nav groups with rail search.',
        lookFor: 'Search in the rail header; +/- group triggers.',
        shadcn: 'sidebar-05 / sidebar-06',
    },
    'file-tree': {
        label: 'File tree',
        blurb: 'Nested folder and file tree navigation.',
        lookFor: 'Folder/file tree chevrons instead of flat groups.',
        shadcn: 'sidebar-11',
    },
    calendar: {
        label: 'Calendar',
        blurb: 'Mini calendar chrome with the account menu in the rail header.',
        lookFor: 'Month grid above the nav; avatar in the rail header.',
        shadcn: 'sidebar-12',
    },
    dialog: {
        label: 'Dialog',
        blurb: 'Overlay / offcanvas dialog-style sidebar (starts closed).',
        lookFor: 'Rail hidden until you open it from the top bar trigger.',
        shadcn: 'sidebar-13',
    },
};

const props = defineProps<{
    forceSidebarLayout: SidebarLayout;
    layoutLabel: string;
}>();

const siblings = computed(() =>
    LAYOUTS.map((layout) => ({
        layout,
        href: `/screens/sidebar/${layout}`,
        label: LAYOUT_META[layout].label,
        current: layout === props.forceSidebarLayout,
    })),
);

const meta = computed(() => LAYOUT_META[props.forceSidebarLayout]);
</script>

<template>
    <div>
        <Head :title="`Sidebar: ${layoutLabel}`" />

        <div :class="[PAGE_SHELL, 'space-y-4 py-6']">
            <nav
                class="flex flex-wrap items-center gap-2 text-xs"
                aria-label="Sidebar layout samples"
            >
                <span class="font-medium text-muted-foreground">{{
                    layoutLabel
                }}</span>
                <span class="text-muted-foreground/50">|</span>
                <Link
                    v-for="item in siblings"
                    :key="item.layout"
                    :href="item.href"
                    class="rounded px-1.5 py-0.5 font-medium transition-colors"
                    :class="
                        item.current
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    "
                >
                    {{ item.label }}
                </Link>
            </nav>

            <div class="space-y-3">
                <h1 class="text-lg font-semibold tracking-tight">
                    {{ meta.label }} sidebar
                </h1>
                <p class="text-sm text-muted-foreground">{{ meta.blurb }}</p>
                <p class="text-sm text-foreground">
                    <span class="font-medium">What to look for:</span>
                    {{ meta.lookFor }}
                </p>
                <p class="text-sm text-muted-foreground">
                    Live AppLayout shell. shadcn-vue block
                    <code class="rounded bg-muted px-1 py-0.5 text-xs">{{
                        meta.shadcn
                    }}</code>
                    via
                    <code class="rounded bg-muted px-1 py-0.5 text-xs"
                        >Panel::sidebarLayout('{{ forceSidebarLayout }}')</code
                    >.
                </p>
                <p
                    v-if="forceSidebarLayout === 'dialog'"
                    class="text-sm text-muted-foreground"
                >
                    Use the sidebar trigger in the top bar to open the overlay
                    rail. This family starts closed on purpose.
                </p>
                <p v-else class="text-sm text-muted-foreground">
                    Collapse the rail, switch families above, and confirm the
                    chrome rearranges. This page is content only; it does not
                    draw a second shell.
                </p>
            </div>
        </div>
    </div>
</template>
