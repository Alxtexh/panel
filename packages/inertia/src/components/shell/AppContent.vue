<script setup lang="ts">
/**
 * The main column, in whichever shell is around it.
 *
 * MOVED FROM THE REFERENCE APP, including the accessibility note that is the
 * only interesting thing about it.
 */
import { SidebarInset } from '@panelkit/ui'
import { computed } from 'vue'

type Props = {
    variant?: 'sidebar' | 'header'
    class?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'sidebar',
})

const className = computed(() => props.class)
</script>

<template>
    <!--
        `id` and `tabindex="-1"` on BOTH branches, because the skip link targets
        this and a skip link that lands on a non-focusable element moves the
        viewport without moving focus - so the next Tab returns to the navigation
        the person was trying to skip. `-1` makes it programmatically focusable
        without adding it to the tab order.
    -->
    <SidebarInset v-if="props.variant === 'sidebar'" id="pk-main" tabindex="-1" :class="className">
        <slot />
    </SidebarInset>
    <main
        v-else
        id="pk-main"
        tabindex="-1"
        class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl"
        :class="className"
    >
        <slot />
    </main>
</template>
