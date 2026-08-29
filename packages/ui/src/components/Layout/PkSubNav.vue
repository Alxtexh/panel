<script setup lang="ts">
/**
 * The secondary sidebar every settings-shaped screen needs - Settings today,
 * whatever comes next tomorrow.
 *
 * MANDATORY, NOT A CHOICE A PAGE MAKES. `SettingsLayout.vue` had this exact
 * dropdown-on-mobile, sidebar-on-desktop behaviour hand-written inline, which
 * meant the NEXT screen that needed a secondary nav - a cluster's own
 * settings, a wizard's section list - would either copy forty lines of markup
 * by hand or, more likely, skip the mobile treatment entirely and ship a
 * sidebar that a phone has to scroll past to reach the content. Pulling it out
 * once and importing it everywhere makes the dropdown the ONLY way a page can
 * get this pattern, so "did they remember the mobile case" stops being a
 * per-screen question.
 *
 * READS THE CURRENT PATH ITSELF, via `usePage()`, the same way
 * `AppPageFooter` already does - a caller hands over items and gets active-
 * state highlighting for free, rather than wiring a `current` prop through
 * every page that mounts this.
 *
 * PREFIX MATCH, NOT EQUALITY - `PkBottomNav`'s same reasoning. `/settings/
 * roles/42` belongs to the Roles entry, and an exact comparison would leave
 * both the dropdown trigger and the desktop rail showing nothing selected the
 * moment a settings screen has a sub-route of its own.
 */
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { iconPath } from '../primitives/icons'
import PkDropdown from '../primitives/PkDropdown.vue'
import { buttonClasses } from '../primitives/buttonClasses'

/*
 * THE RAIL BELOW SWITCHES ON AT `lg` (1024px), NOT `md` (768px) - one
 * breakpoint later than the app's own primary sidebar.
 *
 * Both used to switch at 768px, because 768px is what "desktop" means to a
 * component that has never met the other one. Together they do not fit: the
 * primary sidebar is 16rem, this rail is another 15rem (w-60), plus the
 * layout's own md:gap-12 - three-quarters of a 768px viewport is nav before a
 * single settings field renders, so the surviving space truncated the email
 * input to a few characters and force-wrapped the page heading. Found on an
 * actual settings page at 784px, not assumed from the classes.
 *
 * A phone is unaffected: the primary sidebar is ALSO collapsed below 768px,
 * so the dropdown below only ever shares the screen with a bottom nav bar.
 */

export interface SubNavItem {
    key: string
    title: string
    href: string
    icon?: string
    description?: string
}

const props = withDefaults(
    defineProps<{
        items: SubNavItem[]
        /** Read by both the mobile trigger and the desktop `<nav>`. */
        ariaLabel?: string
        /** Icon shown when an item declares none. */
        fallbackIcon?: string
    }>(),
    { ariaLabel: 'Section', fallbackIcon: 'sliders' },
)

const page = usePage()

/**
 * `href` MAY BE ABSOLUTE. `SettingsIndex::entries()` builds its list from
 * `route()`, which returns a full URL, not a path - so an item's `href` can
 * be either shape depending on where the list came from. Both are reduced
 * to a bare path before comparing; skipping this for the absolute case is
 * exactly the bug that shipped once already (`useCurrentUrl.ts` has the
 * same branch, for the same reason).
 */
function pathOf(url: string): string {
    if (!url.startsWith('http')) {
        return url
    }

    try {
        return new URL(url).pathname
    } catch {
        return url
    }
}

function isCurrent(href: string): boolean {
    const path = pathOf(page.url.split('?')[0])
    const itemPath = pathOf(href)

    return path === itemPath || path.startsWith(`${itemPath}/`)
}

const currentItem = computed(
    () => props.items.find((item) => isCurrent(item.href)) ?? props.items[0],
)

function iconFor(item?: SubNavItem): string {
    return item?.icon ?? props.fallbackIcon
}
</script>

<template>
    <div class="lg:shrink-0 lg:self-start">
        <div class="lg:hidden">
            <PkDropdown align="start">
                <template #trigger="{ open }">
                    <button
                        type="button"
                        class="border-input bg-background hover:bg-accent flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm shadow-xs"
                        :aria-expanded="open"
                        aria-haspopup="listbox"
                        :aria-label="ariaLabel"
                    >
                        <span class="flex min-w-0 items-center gap-2">
                            <svg
                                class="text-muted-foreground size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(iconFor(currentItem))" />
                            </svg>
                            <span class="truncate">{{ currentItem?.title }}</span>
                        </span>
                        <svg
                            class="text-muted-foreground size-4 shrink-0 opacity-70"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
                        </svg>
                    </button>
                </template>
                <template #panel>
                    <div class="flex flex-col" role="listbox" :aria-label="ariaLabel">
                        <Link
                            v-for="item in items"
                            :key="item.href"
                            :href="item.href"
                            role="option"
                            :aria-selected="isCurrent(item.href)"
                            :class="[
                                'flex items-center gap-2 rounded-sm px-2 py-2 text-sm',
                                isCurrent(item.href) ? 'bg-muted font-medium' : 'hover:bg-muted/70',
                            ]"
                        >
                            <svg
                                class="text-muted-foreground size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(iconFor(item))" />
                            </svg>
                            <span class="flex-1">{{ item.title }}</span>
                            <svg
                                v-if="isCurrent(item.href)"
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath('check')" />
                            </svg>
                        </Link>
                    </div>
                </template>
            </PkDropdown>
        </div>

        <aside class="sticky top-6 hidden w-60 shrink-0 self-start lg:block">
            <nav class="flex flex-col space-y-1" :aria-label="ariaLabel">
                <Link
                    v-for="item in items"
                    :key="item.href"
                    :href="item.href"
                    :class="[
                        buttonClasses({ variant: 'ghost' }),
                        'w-full justify-start',
                        isCurrent(item.href)
                            ? 'bg-primary/10 text-foreground font-medium ring-1 ring-primary/15'
                            : '',
                    ]"
                >
                    <svg
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(iconFor(item))" />
                    </svg>
                    {{ item.title }}
                </Link>
            </nav>
        </aside>
    </div>
</template>
