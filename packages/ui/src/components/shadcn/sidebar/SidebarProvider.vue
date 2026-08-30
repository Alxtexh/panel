<script setup lang="ts">
import { defaultDocument, useEventListener, useMediaQuery, useVModel } from '@vueuse/core'
import { TooltipProvider } from 'reka-ui'
import type { HTMLAttributes, Ref } from 'vue'
import { computed, ref } from 'vue'
import { cn } from '../../../lib/cn'
import {
    provideSidebarContext,
    SIDEBAR_COOKIE_MAX_AGE,
    SIDEBAR_COOKIE_NAME,
    SIDEBAR_KEYBOARD_SHORTCUT,
    SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_ICON,
} from './utils'

const props = withDefaults(
    defineProps<{
        defaultOpen?: boolean
        open?: boolean
        class?: HTMLAttributes['class']
    }>(),
    {
        defaultOpen: !defaultDocument?.cookie.includes(`${SIDEBAR_COOKIE_NAME}=false`),
        open: undefined,
    },
)

const emits = defineEmits<{
    'update:open': [open: boolean]
}>()

/**
 * Match Tailwind `md` (min-width 768px). `max-width: 768px` would treat 768px
 * as both mobile (this query) and desktop (`md:`), so the sheet and the rail
 * could show together.
 */
const isMobile = useMediaQuery('(max-width: 767px)')
const openMobile = ref(false)

const open = useVModel(props, 'open', emits, {
    defaultValue: props.defaultOpen ?? false,
    passive: (props.open === undefined) as false,
}) as Ref<boolean>

function setOpen(value: boolean) {
    open.value = value // emits('update:open', value)

    // This sets the cookie to keep the sidebar state.
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
}

function setOpenMobile(value: boolean) {
    openMobile.value = value
}

// Helper to toggle the sidebar.
function toggleSidebar() {
    return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value)
}

useEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
    }
})

// We add a state so that we can do data-state="expanded" or "collapsed".
// This makes it easier to style the sidebar with Tailwind classes.
//
// PHONES ARE NEVER THE ICON RAIL. `open` is the desktop collapse cookie; the
// mobile drawer uses `openMobile`. Leaving `state` collapsed on a phone made
// AppSidebar render flyout icons with no labels inside the overlay sheet.
const state = computed(() => (isMobile.value || open.value ? 'expanded' : 'collapsed'))

provideSidebarContext({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
})
</script>

<template>
    <TooltipProvider :delay-duration="0">
        <div
            data-slot="sidebar-wrapper"
            :style="{
                '--sidebar-width': SIDEBAR_WIDTH,
                '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            }"
            :class="
                cn(
                    'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden',
                    props.class,
                )
            "
            v-bind="$attrs"
        >
            <slot />
        </div>
    </TooltipProvider>
</template>
