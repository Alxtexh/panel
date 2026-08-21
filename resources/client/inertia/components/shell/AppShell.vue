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
 *
 * SIDEBAR LAYOUT FAMILIES (`panel.sidebarLayout` / `forceSidebarLayout`):
 * - `icon` prefers collapsed (server shares sidebarOpen false when no cookie)
 * - `header` wraps the provider under a sticky site header (sidebar-16)
 */
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { SidebarProvider } from '@alxtexh-enterprise/panel'
import { useSidebarLayout } from '../../composables/useSidebarLayout'
import SidebarSiteHeader from './SidebarSiteHeader.vue'

type Props = {
    variant?: 'sidebar' | 'header'
}

withDefaults(defineProps<Props>(), {
    variant: 'sidebar',
})

const page = usePage()
const { chrome } = useSidebarLayout()

const cookieOpen = computed(() => page.props.sidebarOpen as boolean | undefined)

/**
 * Gallery force for `icon` always starts collapsed so the sample is honest
 * even when the browser still holds an expanded cookie from elsewhere.
 */
const isOpen = computed(() => {
    if (page.props.forceSidebarLayout === 'icon') {
        return false
    }

    return cookieOpen.value
})
</script>

<template>
    <div v-if="variant === 'header'" class="flex min-h-screen w-full flex-col">
        <slot />
    </div>
    <div
        v-else-if="chrome.siteHeader"
        class="flex h-svh w-full flex-col overflow-hidden"
        style="--header-height: 3.5rem"
    >
        <SidebarSiteHeader />
        <SidebarProvider class="h-full min-h-0 flex-1" :default-open="isOpen">
            <slot />
        </SidebarProvider>
    </div>
    <SidebarProvider v-else :default-open="isOpen">
        <slot />
    </SidebarProvider>
</template>
