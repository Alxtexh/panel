<script setup lang="ts">
/**
 * The frame every panel screen sits in: sidebar, topbar, content.
 *
 * IT TAKES NO PROPS BY DEFAULT and reads what `SharePanelProps` already puts on
 * every panel response - the navigation, the panel's identity and palette, and
 * the signed-in person. An application that renders panel screens under its own
 * routing can pass them explicitly instead; nothing here fetches.
 *
 * THE PALETTE IS APPLIED AS BARE CUSTOM PROPERTIES, without the `--color-`
 * prefix, and that distinction is not cosmetic. Tailwind's `@theme` declares
 * `--color-primary: var(--primary)` and resolves it at BUILD time, so
 * `bg-primary` compiles to `var(--primary)` - setting the prefixed name at
 * runtime writes a property nothing reads, which is exactly how per-tenant
 * branding shipped for a release doing nothing at all.
 *
 * COLLAPSE IS PERSISTED, because it is a preference about how somebody works
 * and re-expanding it on every page load is the panel forgetting them. It is
 * read once on mount rather than during setup: this component renders on the
 * server too, where `localStorage` does not exist and touching it is a 500.
 */
import { usePage } from '@inertiajs/vue3'
import { ThemeToggle } from '@panelkit/ui'
import { computed, onMounted, ref, watch } from 'vue'

import PanelAccountMenu from './PanelAccountMenu.vue'
import PanelCommandPalette from './PanelCommandPalette.vue'
import PanelNotificationBell from './PanelNotificationBell.vue'
import PanelSidebar from './PanelSidebar.vue'
import type { NavItem } from './types'

/*
 * THE SHAPE IS INLINE HERE TOO - see `types.ts`. Importing `NavItem` into
 * `defineProps` sent the SFC compiler looking for TypeScript in the consuming
 * project, and a fresh Laravel app has none.
 */
const props = defineProps<{
    /** Overrides for an application not using the packaged middleware. */
    nav?: {
        key: string
        title: string
        href: string
        icon?: string | null
        group?: string | null
    }[]
    brand?: string
}>()

defineSlots<{
    /** The page. */
    default(): unknown
    /** Between the menu button and the account menu - a heading, a search. */
    topbar(): unknown
    /** Trailing topbar controls, before the theme toggle. */
    actions(): unknown
}>()

const page = usePage()

const shared = computed(() => page.props as Record<string, any>)

const nav = computed<NavItem[]>(() => props.nav ?? shared.value.panelNav ?? [])
const panel = computed(() => shared.value.panel ?? null)
const user = computed(() => shared.value.auth?.user ?? null)

const brand = computed<string>(() => props.brand ?? panel.value?.brand ?? 'Panel')
const home = computed<string>(() => panel.value?.path ?? '/')

/** See the class note: bare names, because `@theme` already resolved the rest. */
const palette = computed<Record<string, string>>(() =>
    Object.fromEntries(
        Object.entries((panel.value?.colors ?? {}) as Record<string, string>).map(([k, v]) => [
            `--${k}`,
            v,
        ]),
    ),
)

const STORAGE_KEY = 'panelkit.sidebar.collapsed'

const collapsed = ref(false)
const drawerOpen = ref(false)

onMounted(() => {
    collapsed.value = window.localStorage.getItem(STORAGE_KEY) === '1'
})

watch(collapsed, (value) => window.localStorage.setItem(STORAGE_KEY, value ? '1' : '0'))

/*
 * THE MOBILE DRAWER CLOSES ON NAVIGATION. Inertia swaps the page without
 * unmounting this component, so a drawer left open covers the screen somebody
 * just asked for - and on a phone that reads as a link that did nothing.
 */
watch(
    () => page.url,
    () => {
        drawerOpen.value = false
    },
)
</script>

<template>
    <div class="bg-background text-foreground flex min-h-svh" :style="palette">
        <aside
            class="border-border hidden shrink-0 border-r transition-[width] duration-200 md:block"
            :class="collapsed ? 'w-14' : 'w-60'"
        >
            <PanelSidebar
                :items="nav"
                :brand="brand"
                :home="home"
                :current="page.url"
                :collapsed="collapsed"
            />
        </aside>

        <!-- The same sidebar as an overlay, for a viewport with no room for a column. -->
        <div v-if="drawerOpen" class="fixed inset-0 z-40 md:hidden">
            <div
                class="absolute inset-0 bg-black/40"
                aria-hidden="true"
                @click="drawerOpen = false"
            />

            <aside class="bg-background border-border absolute inset-y-0 left-0 w-64 border-r">
                <PanelSidebar :items="nav" :brand="brand" :home="home" :current="page.url" />
            </aside>
        </div>

        <div class="flex min-w-0 flex-1 flex-col">
            <header class="border-border flex items-center gap-3 border-b px-3 py-2.5 sm:px-4">
                <button
                    type="button"
                    class="hover:bg-muted rounded-md p-1.5 md:hidden"
                    aria-label="Open navigation"
                    @click="drawerOpen = true"
                >
                    <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <button
                    type="button"
                    class="hover:bg-muted hidden rounded-md p-1.5 md:block"
                    :aria-label="collapsed ? 'Expand navigation' : 'Collapse navigation'"
                    @click="collapsed = !collapsed"
                >
                    <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M9 4v16" />
                    </svg>
                </button>

                <div class="min-w-0 flex-1">
                    <slot name="topbar" />
                </div>

                <!--
                    THE PALETTE SITS BEFORE THE PAGE'S OWN CONTROLS, because it
                    is the panel's and they are the screen's - and because it is
                    the one control that is in the same place on every screen,
                    which is what makes a keyboard habit possible.
                -->
                <PanelCommandPalette />

                <slot name="actions" />

                <!--
                    THE BELL IS THE PANEL'S TOO, and sits with the palette rather
                    than with the account menu: what needs attention is about the
                    system, not about who is signed in.
                -->
                <PanelNotificationBell />

                <ThemeToggle />

                <PanelAccountMenu :user="user" :logout="panel?.logout ?? null" />
            </header>

            <main class="min-w-0 flex-1 p-4 sm:p-6">
                <slot />
            </main>
        </div>
    </div>
</template>
