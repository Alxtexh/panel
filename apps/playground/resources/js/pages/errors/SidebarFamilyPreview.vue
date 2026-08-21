<script setup lang="ts">
/**
 * Forced sidebar-layout gallery for the demo nav.
 *
 * UNDER `errors/` so AppLayout does not wrap a second shell around PanelShell
 * (see ShellPreview). `forceSidebarLayout` wins inside AppSidebar / AppShell
 * over the live panel's shared layout so each sample rearranges chrome live.
 */
import { computed } from 'vue'
import { Head, Link } from '@inertiajs/vue3'
import { PAGE_SHELL } from '@alxtexh-enterprise/panel'
import { PanelShell } from '@alxtexh-enterprise/panel/inertia'

type SidebarLayout = 'inset' | 'sidebar' | 'floating' | 'icon' | 'header'

const LAYOUTS: SidebarLayout[] = ['inset', 'sidebar', 'floating', 'icon', 'header']

const LAYOUT_META: Record<
    SidebarLayout,
    { label: string; blurb: string; shadcn: string }
> = {
    inset: {
        label: 'Inset',
        blurb: 'Inset rail with secondary footer nav (default).',
        shadcn: 'sidebar-08',
    },
    sidebar: {
        label: 'Edge',
        blurb: 'Edge-flush grouped navigation.',
        shadcn: 'sidebar-01',
    },
    floating: {
        label: 'Floating',
        blurb: 'Floating card rail beside the inset.',
        shadcn: 'sidebar-04',
    },
    icon: {
        label: 'Icon rail',
        blurb: 'Collapses to icons by default.',
        shadcn: 'sidebar-07',
    },
    header: {
        label: 'Site header',
        blurb: 'Sticky site header above the rail, with search.',
        shadcn: 'sidebar-16',
    },
}

const props = defineProps<{
    forceSidebarLayout: SidebarLayout
    layoutLabel: string
}>()

const siblings = computed(() =>
    LAYOUTS.map((layout) => ({
        layout,
        href: `/screens/sidebar/${layout}`,
        label: LAYOUT_META[layout].label,
        current: layout === props.forceSidebarLayout,
    })),
)

const meta = computed(() => LAYOUT_META[props.forceSidebarLayout])
</script>

<template>
    <div>
        <Head :title="`Sidebar: ${layoutLabel}`" />

        <PanelShell>
            <template #topbar>
                <h1 class="text-sm font-medium">{{ layoutLabel }} sidebar</h1>
            </template>

            <div :class="[PAGE_SHELL, 'space-y-4 py-6']">
                <div
                    class="flex flex-wrap items-center gap-2 rounded-lg border bg-background/95 px-3 py-2 text-xs shadow-sm"
                >
                    <span class="font-medium text-muted-foreground">{{ layoutLabel }}</span>
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
                </div>

                <div class="rounded-lg border bg-card p-6">
                    <p class="text-sm font-medium">{{ meta.blurb }}</p>
                    <p class="mt-2 text-sm text-muted-foreground">
                        Live PanelKit shell. shadcn-vue block pattern:
                        <code class="rounded bg-muted px-1 py-0.5 text-xs">{{ meta.shadcn }}</code>
                        via
                        <code class="rounded bg-muted px-1 py-0.5 text-xs"
                            >Panel::sidebarLayout('{{ forceSidebarLayout }}')</code
                        >.
                    </p>
                    <p class="mt-4 text-sm text-muted-foreground">
                        Collapse the rail, switch families above, and confirm the chrome
                        rearranges. This is not a screenshot.
                    </p>
                </div>
            </div>
        </PanelShell>
    </div>
</template>
