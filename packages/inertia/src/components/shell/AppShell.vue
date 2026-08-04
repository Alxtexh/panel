<script setup lang="ts">
/**
 * The outermost frame, and the one decision it makes: sidebar or header.
 *
 * MOVED FROM THE REFERENCE APP. The `header` variant deliberately mounts NO
 * `SidebarProvider` - the horizontal layout has no sidebar to provide, and a
 * provider with nothing under it is a context that misleads the next reader.
 *
 * THE OPEN STATE COMES FROM THE SERVER, from a cookie it read. Deciding it in
 * the browser means the sidebar renders open and then snaps shut on hydration,
 * on every single page load.
 */
import { usePage } from '@inertiajs/vue3'
import { SidebarProvider } from '@panelkit/ui'

type Props = {
    variant?: 'sidebar' | 'header'
}

withDefaults(defineProps<Props>(), {
    variant: 'sidebar',
})

const isOpen = usePage().props.sidebarOpen as boolean | undefined
</script>

<template>
    <div v-if="variant === 'header'" class="flex min-h-screen w-full flex-col">
        <slot />
    </div>
    <SidebarProvider v-else :default-open="isOpen">
        <slot />
    </SidebarProvider>
</template>
