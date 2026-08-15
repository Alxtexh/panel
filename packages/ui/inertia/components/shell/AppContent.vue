<script setup lang="ts">
/**
 * The main column, in whichever shell is around it.
 *
 * MOVED FROM THE REFERENCE APP, including the accessibility note that is the
 * only interesting thing about it.
 */
import { computed } from 'vue'
import { SidebarInset, useAppearance } from '@alxtexh-enterprise/panel'
import AppPageFooter from './AppPageFooter.vue'

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
 */
const { appearance } = useAppearance()
const centered = computed(() => appearance.value.contentLayout === 'centered')
</script>

<template>
    <!--
        `id` and `tabindex="-1"` on BOTH branches, because the skip link targets
        this and a skip link that lands on a non-focusable element moves the
        viewport without moving focus - so the next Tab returns to the navigation
        the person was trying to skip. `-1` makes it programmatically focusable
        without adding it to the tab order.

        THE INNER COLUMN IS THE FOOTER FIX. The inset is the scrollport
        (`overflow-y-auto`, a definite height). A page that declares `h-full`
        then fills that scrollport. Putting the copyright as a flex sibling of
        that page pinned it to the first viewport, and dashboard widgets
        overflowed over it, which is how "© 20…" sat under the doughnut instead
        of under the page. `min-h-full` (not `h-full`, not `flex-1`) lets this
        column grow with the page so the footer is after the widgets; on a short
        screen it still fills the scrollport and `mt-auto` on the footer holds
        the bottom edge.
    -->
    <SidebarInset v-if="props.variant === 'sidebar'" id="pk-main" tabindex="-1" :class="className">
        <div data-slot="app-content-column" class="flex min-h-full flex-col">
            <div v-if="centered" class="mx-auto w-full max-w-7xl flex-1">
                <slot />
            </div>
            <div v-else class="flex-1">
                <slot />
            </div>
            <slot name="footer">
                <AppPageFooter />
            </slot>
        </div>
    </SidebarInset>
    <main
        v-else
        id="pk-main"
        tabindex="-1"
        class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
        :class="className"
    >
        <div data-slot="app-content-column" class="flex min-h-full flex-1 flex-col">
            <div class="flex-1">
                <slot />
            </div>
            <slot name="footer">
                <AppPageFooter />
            </slot>
        </div>
    </main>
</template>
