<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { AppearanceDrawer, PkSiteHeader, useAppearance } from '@alxtexh-enterprise/panel'
import type { BreadcrumbItem } from '../../types'
import AssistantDrawer from './AssistantDrawer.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import PanelCommandPalette from './PanelCommandPalette.vue'
import NotificationBell from './PanelNotificationBell.vue'
import PanelLockButton from './PanelLockButton.vue'

const props = withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItem[]
    }>(),
    {
        breadcrumbs: () => [],
    },
)

defineSlots<{
    /**
     * Replaces the breadcrumb trail - a heading, a search box. The fallback is
     * the trail, so a screen that passes nothing gets where-you-are instead of
     * a gap. This is the same contract `PanelShell` has always published, kept
     * here so `PanelLayout` files written against it keep working.
     */
    topbar?(): unknown
    /** Trailing controls, between the bell and the appearance drawer. */
    actions?(): unknown
}>()

const page = usePage()

/**
 * The topbar MIRRORS the sidebar.
 *
 * Leaving the collapse trigger and breadcrumbs on the left while the sidebar
 * sits on the right splits the navigation across both edges - the trigger ends
 * up as far as possible from the thing it collapses. Flipping the row keeps
 * them adjacent whichever side is chosen.
 */
const { appearance } = useAppearance()

const mirrored = computed(() => appearance.value.sidebarSide === 'right')

/**
 * Static layout options first, page props second.
 *
 * A bespoke page declares its trail through defineOptions, which is evaluated
 * once at definition time. The generic resource page cannot - it does not know
 * which resource it is until the props arrive - so it ships the trail as a prop
 * instead and this falls through to it.
 */
const trail = computed<BreadcrumbItem[]>(() =>
    props.breadcrumbs.length
        ? props.breadcrumbs
        : ((page.props.breadcrumbs as BreadcrumbItem[] | undefined) ?? []),
)
</script>

<template>
    <PkSiteHeader :mirrored="mirrored">
        <slot name="topbar">
            <!-- Breadcrumbs are the first thing to give up on a phone; the
                 search trigger earns that space more. -->
            <template v-if="trail.length > 0">
                <Breadcrumbs :breadcrumbs="trail" class="hidden sm:flex" />
            </template>
        </slot>

        <template #trailing>
            <div class="flex items-center gap-2">
                <PanelLockButton />
                <PanelCommandPalette />
            </div>
            <!-- Beside search, because a question about a record is the same
                 kind of interruption as looking one up - and it opens over the
                 screen you are on rather than navigating away from it. -->
            <AssistantDrawer />
            <NotificationBell />
            <slot name="actions" />
            <!-- Appearance belongs where you can see what it changes. -->
            <AppearanceDrawer />
        </template>
    </PkSiteHeader>
</template>
