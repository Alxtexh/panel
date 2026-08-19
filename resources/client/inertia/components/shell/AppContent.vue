<script setup lang="ts">
/**
 * The main column, in whichever shell is around it.
 *
 * MOVED FROM THE REFERENCE APP, including the accessibility note that is the
 * only interesting thing about it.
 */
import { computed } from 'vue'
import { AppPageFooter, SidebarInset, useAppearance, useShellPageFooter } from '@alxtexh-enterprise/panel'

type Props = {
    variant?: 'sidebar' | 'header'
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'sidebar',
})

const className = computed(() => props.class)

/*
 * THE SAME `max-w-7xl mx-auto` THE `header` VARIANT BELOW ALREADY USES,
 * offered as a per-user choice for the `sidebar` variant too - a wide monitor
 * showing a form at full bleed is a line length nobody reads in one pass.
 * Only this inner wrapper narrows; `SidebarInset` itself keeps stretching to
 * fill the space beside the rail, or the background stops at the text instead
 * of the window edge.
 *
 * CENTERING MUST NOT WRAP THE FOOTER. A max-w wrapper that includes the
 * copyright makes the bar sit in the first content cell on a dashboard.
 */
const { appearance } = useAppearance()
const centered = computed(() => appearance.value.contentLayout === 'centered')
const pageFooter = useShellPageFooter()
</script>

<template>
    <!--
        `id` and `tabindex="-1"` on BOTH branches, because the skip link targets
        this and a skip link that lands on a non-focusable element moves the
        viewport without moving focus - so the next Tab returns to the navigation
        the person was trying to skip. `-1` makes it programmatically focusable
        without adding it to the tab order.

        THE SCROLLPORT IS `#pk-main`. The page and the footer are block siblings
        inside a column that is allowed to grow (`shrink-0 min-h-full`, never
        `h-full`). Wrapping the page in `flex-1` (flex-basis 0%) made this
        column resolve to the first screen. `mt-auto` then pinned the copyright
        to that screen while dashboard widgets overflowed over it.

        Do not put `flex-1` or `h-full` on the page slot. Short pages still pin
        the footer with `mt-auto` because the column is at least as tall as the
        scrollport and the page is only as tall as its content.
    -->
    <SidebarInset v-if="props.variant === 'sidebar'" id="pk-main" tabindex="-1" :class="className">
        <div data-slot="app-content-column" class="flex min-h-full w-full shrink-0 flex-col">
            <div v-if="centered" class="mx-auto w-full max-w-7xl">
                <slot />
            </div>
            <slot v-else />
            <AppPageFooter v-if="pageFooter" host />
        </div>
    </SidebarInset>
    <main
        v-else
        id="pk-main"
        tabindex="-1"
        class="mx-auto w-full max-w-7xl flex-1 overflow-y-auto rounded-xl"
        :class="className"
    >
        <div data-slot="app-content-column" class="flex min-h-full w-full shrink-0 flex-col">
            <slot />
            <AppPageFooter v-if="pageFooter" host />
        </div>
    </main>
</template>
