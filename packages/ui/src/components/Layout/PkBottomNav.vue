<script setup lang="ts">
/**
 * The navigation a phone actually gets.
 *
 * A SIDEBAR IS THE WRONG SHAPE ON A HANDSET. Collapsed, it is an icon rail with
 * flyout submenus - a pattern that needs hover and precision, and has neither on
 * a touch screen. Expanded, it covers the page you were reading. Either way the
 * common destinations are two taps away behind a hamburger, at the top of the
 * screen, which is the part of a phone a thumb reaches least.
 *
 * THIS IS NOT A COSMETIC CHOICE FOR THIS PANEL. Field technicians work from
 * phones - standing at a pole, in a van, one-handed - and they are the users
 * least able to fight the interface. Bottom placement puts the destinations in
 * the thumb arc; the rest of the panel stays exactly where it is on a desktop.
 *
 * FIVE ITEMS, HARD LIMIT. Past five the targets fall below the ~44px that a
 * thumb can hit reliably, and a nav people mis-tap is worse than a menu. The
 * fifth slot is "More", which opens the full navigation rather than pretending
 * the list fits.
 *
 * IT HIDES AT `sm` AND UP, where the sidebar is the better answer and this would
 * be a second navigation competing with it.
 */
import { computed } from 'vue'
import { iconPath } from '../primitives/icons'

export interface BottomNavItem {
    key: string
    title: string
    href: string
    icon?: string
}

const props = withDefaults(
    defineProps<{
        items: BottomNavItem[]
        /** The current path, so the active item can be marked. */
        current?: string
        /** Shown on the fifth slot when there are more destinations than fit. */
        moreLabel?: string
    }>(),
    { current: '', moreLabel: 'More' },
)

const emit = defineEmits<{ (e: 'more'): void }>()

/**
 * Four destinations plus More, or five destinations when they all fit.
 *
 * Slicing rather than scrolling: a horizontally scrollable nav bar hides items
 * off-screen with no indication, which is the same problem as a menu with worse
 * ergonomics.
 */
const MAX = 5

const visible = computed(() =>
    props.items.length <= MAX ? props.items : props.items.slice(0, MAX - 1),
)

const needsMore = computed(() => props.items.length > MAX)

/**
 * Longest-prefix match, not equality.
 *
 * `/clients/42/edit` belongs to Clients, and an exact comparison would leave the
 * bar showing nothing selected on every page except the index - so the person
 * two levels deep has no idea which section they are in.
 */
function isActive(href: string): boolean {
    if (href === '/') return props.current === '/'

    return props.current === href || props.current.startsWith(`${href}/`)
}
</script>

<template>
    <nav
        class="bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden"
        aria-label="Primary"
        :style="{ paddingBottom: 'env(safe-area-inset-bottom)' }"
    >
        <ul class="flex items-stretch">
            <li v-for="item in visible" :key="item.key" class="flex-1">
                <!--
                    A real anchor, so the browser's own affordances work: long
                    press to copy, open in a new tab, and back/forward behaving
                    as expected. A div with a click handler has none of that.
                -->
                <a
                    :href="item.href"
                    class="flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors"
                    :class="
                        isActive(item.href)
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                    "
                    :aria-current="isActive(item.href) ? 'page' : undefined"
                >
                    <svg
                        class="size-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(item.icon)" />
                    </svg>

                    <!-- Truncated rather than wrapped: a two-line label makes
                         one cell taller than its neighbours. -->
                    <span class="w-full truncate text-center">{{ item.title }}</span>
                </a>
            </li>

            <li v-if="needsMore" class="flex-1">
                <button
                    type="button"
                    class="text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors"
                    @click="emit('more')"
                >
                    <svg
                        class="size-5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('more-horizontal')" />
                    </svg>
                    <span class="w-full truncate text-center">{{ moreLabel }}</span>
                </button>
            </li>
        </ul>
    </nav>
</template>
