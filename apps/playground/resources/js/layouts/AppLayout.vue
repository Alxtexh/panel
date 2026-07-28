<script setup lang="ts">
/**
 * Picks the shell from the user's navigation preference.
 *
 * Switching here rather than in each page is what keeps `defineOptions({ layout })`
 * unchanged across all three modes - a page declares its breadcrumbs and never
 * learns which chrome is wrapping it.
 *
 * The layout component genuinely swaps, so the page remounts when the preference
 * changes. That is the honest cost of three real layouts rather than one layout
 * with CSS trickery: the vertical and horizontal shells have different DOM, not
 * different styling.
 */
import { computed, ref, watch } from 'vue'
import { router, usePage } from '@inertiajs/vue3'
import { PkBottomNav, PkModal, useAppearance, type BottomNavItem } from '@panelkit/ui'
import AppSidebarLayout from '@/layouts/app/AppSidebarLayout.vue'
import AppHorizontalLayout from '@/layouts/app/AppHorizontalLayout.vue'
import type { BreadcrumbItem } from '@/types'
import SessionExpired from '@/components/SessionExpired.vue'

const { breadcrumbs = [] } = defineProps<{
    breadcrumbs?: BreadcrumbItem[]
}>()

const { appearance } = useAppearance()

const page = usePage()

/** Null unless somebody is wearing another account. Shared on every response. */
/**
 * The handset navigation.
 *
 * BUILT FROM THE SAME SHARED PROPS THE SIDEBAR USES, so a screen added in PHP
 * appears in both without anybody editing a Vue file - and the two can never
 * disagree about what exists or what it is called.
 *
 * IT READ ONLY `panelNav` UNTIL NOW, which meant the resources were there and
 * everything else was not: the connections workspace, mail, chat, the API
 * reference. On a handset the bottom bar IS the navigation, so a screen missing
 * from it is a screen a field technician cannot reach at all - which is the same
 * disappearing-page problem the server-side declaration was built to end, left
 * standing in the one layout that needed it most.
 *
 * Dashboard is prepended because it is not a resource and is the destination
 * people return to most.
 */
const bottomNavItems = computed<BottomNavItem[]>(() => {
    const fromProps = (key: string) =>
        ((page.props[key] as any[]) ?? [])
            // `#`-prefixed entries are client-side triggers, not destinations -
            // a bottom bar has nothing to navigate to.
            .filter((item) => !String(item.href).startsWith('#'))
            .map((item) => ({
                key: item.key ?? item.href,
                title: item.title,
                href: item.href,
                icon: item.icon,
            }))

    return [
        { key: 'dashboard', title: 'Home', href: '/dashboard', icon: 'home' },
        ...fromProps('panelNav'),
        ...fromProps('panelPages'),
    ]
})

/**
 * "More" opens the full navigation rather than pretending the list fits.
 *
 * IT USED TO NAVIGATE TO THE DASHBOARD, which is not "more" - it is somewhere
 * else. Five slots hold four destinations and a way out; sending somebody home
 * when they asked to see the rest is the interface answering a different
 * question, and on a handset there is no sidebar to fall back on.
 */
const showAllNav = ref(false)

function openFullNav() {
    showAllNav.value = true
}

const shell = computed(() =>
    appearance.value.sidebarSide === 'horizontal' ? AppHorizontalLayout : AppSidebarLayout,
)
/**
 * What the live region says after a navigation.
 *
 * TAKEN FROM THE DOCUMENT TITLE, which every page already sets and which is
 * exactly the sentence a screen reader announces on a full page load. Reusing it
 * means the SPA behaves like the document navigation it is imitating, rather
 * than inventing a second vocabulary for the same event.
 *
 * SET AFTER THE DOM IS SWAPPED, on Inertia's `success`, because the title is
 * only correct once the new page has rendered. Announcing on `start` would read
 * out the page being left.
 *
 * It is CLEARED and re-set rather than assigned once: a live region only speaks
 * when its content CHANGES, so navigating twice to pages with the same title
 * would be silent the second time.
 */
const announcement = ref('')

router.on('success', () => {
    announcement.value = ''

    requestAnimationFrame(() => {
        announcement.value = `${document.title} - page loaded`
    })
})

</script>

<template>
    <!--
        FIRST IN THE DOCUMENT, because that is the only position that works. A
        skip link placed anywhere else is reached after the thing it exists to
        skip.
    -->
    <a href="#pk-main" class="pk-skip-link bg-background rounded-md border px-3 py-2 text-sm shadow-lg">
        Skip to content
    </a>

    <!--
        PADDING FOR THE BAR, so the last row of a table is not permanently
        underneath it. `sm:pb-0` because the bar itself disappears there.
    -->
    <div class="pb-14 sm:pb-0">
        <component :is="shell" :breadcrumbs="breadcrumbs">
            <slot />
        </component>
    </div>

    <PkBottomNav
        :items="bottomNavItems"
        :current="page.url"
        @more="openFullNav"
    />

    <!--
        EVERY DESTINATION, when four slots are not enough.

        A sheet rather than a page: "more" is a disclosure, and navigating away
        to a menu loses the page somebody was reading. It closes on selection
        because the browser is about to replace the view anyway.
    -->
    <PkModal
        v-if="showAllNav"
        :open="showAllNav"
        title="Go to"
        @close="showAllNav = false"
    >
        <nav class="flex flex-col">
            <a
                v-for="item in bottomNavItems"
                :key="item.key"
                :href="item.href"
                class="hover:bg-muted -mx-2 rounded-md px-2 py-2 text-sm"
                :class="page.url === item.href ? 'text-primary font-medium' : ''"
            >{{ item.title }}</a>
        </nav>

        <template #footer>
            <button
                type="button"
                class="text-muted-foreground hover:text-foreground text-sm"
                @click="showAllNav = false"
            >Close</button>
        </template>
    </PkModal>

    <!--
        SPA NAVIGATION IS SILENT to a screen reader: the URL changes, the DOM is
        replaced, and nothing is announced - so somebody who cannot see the page
        has no idea it changed. A polite live region carrying the page title is
        the standard remedy.

        `polite` rather than `assertive` because a navigation is not an
        emergency; assertive would interrupt whatever is being read mid-word.
    -->
    <div class="sr-only" role="status" aria-live="polite">{{ announcement }}</div>

    <!--
        Mounted once, for every panel page, rather than per screen.

        A stale session can be discovered on any click anywhere, so the dialog
        that reports it has to already exist wherever that click happened. It
        renders nothing until the router hook in `app.ts` trips it.
    -->
    <SessionExpired />
</template>
