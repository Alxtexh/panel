<script setup lang="ts">
/**
 * Minimal dropdown: trigger slot, panel slot, click-outside and Escape to close.
 *
 * Written rather than pulled from a component library on purpose. packages/ui
 * has to be droppable into any Vue app (spec §4), and taking a hard dependency
 * on the consuming app's component kit — or on reka-ui, or on shadcn-vue's exact
 * file layout — is what would stop that.
 *
 * THE PANEL IS TELEPORTED TO <body> AND POSITIONED FIXED. This is the whole
 * reason the file is longer than it looks like it should be.
 *
 * An absolutely-positioned panel is laid out inside the nearest positioned
 * ancestor and CLIPPED by the nearest scroll container. The data table is a
 * `overflow-auto` box, so a row-actions menu opened near the bottom edge was
 * cut off at the table boundary and then scrolled away with the rows — it
 * looked like the menu was rendering *inside* the table. `z-index` cannot fix
 * that: clipping happens before stacking is considered, so no value is high
 * enough. Leaving the clip context is the only fix.
 *
 * The cost of teleporting is that layout no longer follows the trigger, so the
 * position is measured and re-measured on scroll and resize.
 */
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        align?: 'start' | 'end'
        width?: string
        /** Gap between trigger and panel, in px. */
        offset?: number
        /**
         * Which side of the trigger to open on.
         *
         * `right`/`left` are what a COLLAPSED SIDEBAR needs: an icon rail has no
         * room to expand a group downward into, so the group opens as a flyout
         * beside the rail. Both flip to the opposite side when there is no room,
         * so the same setting works whichever edge the sidebar is on.
         */
        placement?: 'bottom' | 'right' | 'left'
        /** Open on hover as well as click — right for a nav rail, wrong for a menu. */
        hoverable?: boolean
    }>(),
    { align: 'end', width: 'w-56', offset: 4, placement: 'bottom', hoverable: false },
)

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)
const position = ref({ top: 0, left: 0, minWidth: 0 })

let closeTimer: ReturnType<typeof setTimeout> | null = null

/** Open without toggling — hover must not close an already-open panel. */
async function openNow() {
    if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
    }

    if (open.value) return

    open.value = true
    await nextTick()
    place()
}

/**
 * A grace period before a hover-opened panel closes.
 *
 * The panel is teleported to <body>, so travelling from the trigger to it
 * crosses a gap that belongs to neither element. Closing on the first
 * pointerleave makes a flyout impossible to actually click into.
 */
function scheduleClose() {
    closeTimer = setTimeout(close, 180)
}

async function toggle() {
    open.value = !open.value

    if (open.value) {
        // Position after the panel exists, so its real height decides whether
        // it opens downward or flips up.
        await nextTick()
        place()
    }
}

function close() {
    open.value = false
}

/**
 * Put the panel next to its trigger, flipping and clamping to stay on screen.
 *
 * Viewport coordinates, because the panel is `fixed`. Adding scroll offsets
 * here is the classic mistake — it makes the menu drift by exactly the scroll
 * distance on any page that is not at the top.
 */
function place() {
    const trigger = root.value
    const menu = panel.value

    if (!trigger || !menu) return

    const anchor = trigger.getBoundingClientRect()
    const size = menu.getBoundingClientRect()
    const margin = 8

    let top: number
    let left: number

    if (props.placement === 'bottom') {
        top = anchor.bottom + props.offset

        // Flip above when there is no room below but there is above. A menu
        // that renders off the bottom of the window is unreachable, since the
        // page itself may not scroll.
        if (top + size.height > window.innerHeight - margin && anchor.top - size.height - props.offset > margin) {
            top = anchor.top - size.height - props.offset
        }

        left = props.align === 'end' ? anchor.right - size.width : anchor.left
    } else {
        // Aligned to the trigger's top edge, so a flyout lines up with the icon
        // that opened it rather than floating at an arbitrary height.
        top = anchor.top

        const wantsRight = props.placement === 'right'
        const roomRight = anchor.right + props.offset + size.width < window.innerWidth - margin
        const roomLeft = anchor.left - props.offset - size.width > margin

        // Flip only when the preferred side genuinely does not fit.
        const goRight = wantsRight ? roomRight || !roomLeft : !roomLeft && roomRight

        left = goRight ? anchor.right + props.offset : anchor.left - props.offset - size.width
    }

    // Clamp horizontally so an edge-of-screen trigger does not push the panel
    // out of view.
    left = Math.min(Math.max(margin, left), window.innerWidth - size.width - margin)
    top = Math.min(Math.max(margin, top), window.innerHeight - size.height - margin)

    position.value = { top, left, minWidth: anchor.width }
}

function onDocumentPointerDown(e: PointerEvent) {
    if (!open.value) return

    const target = e.target as Node

    // The panel is no longer a DOM descendant of the trigger, so a click inside
    // it is "outside" as far as the root element is concerned. Both have to be
    // checked or selecting a menu item would close the menu before its own
    // handler ran.
    if (root.value?.contains(target) || panel.value?.contains(target)) return

    close()
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open.value) {
        e.stopPropagation()
        close()
    }
}

function reposition() {
    if (open.value) place()
}

onMounted(() => {
    document.addEventListener('pointerdown', onDocumentPointerDown)
    document.addEventListener('keydown', onKeydown)
    // Capture phase: the trigger's own scroll container scrolls without
    // bubbling a scroll event to the window.
    window.addEventListener('scroll', reposition, true)
    window.addEventListener('resize', reposition)
})

onBeforeUnmount(() => {
    if (closeTimer) clearTimeout(closeTimer)
    document.removeEventListener('pointerdown', onDocumentPointerDown)
    document.removeEventListener('keydown', onKeydown)
    window.removeEventListener('scroll', reposition, true)
    window.removeEventListener('resize', reposition)
})

defineExpose({ close })
</script>

<template>
    <div
        ref="root"
        class="relative"
        @pointerenter="hoverable && openNow()"
        @pointerleave="hoverable && scheduleClose()"
    >
        <div @click="toggle">
            <slot name="trigger" :open="open" />
        </div>

        <Teleport to="body">
            <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="opacity-0 scale-95"
                leave-active-class="transition duration-75 ease-in"
                leave-to-class="opacity-0 scale-95"
            >
                <div
                    v-if="open"
                    ref="panel"
                    :class="[
                        'bg-popover text-popover-foreground fixed z-[100] overflow-hidden rounded-md border p-1 shadow-lg',
                        width,
                    ]"
                    :style="{ top: `${position.top}px`, left: `${position.left}px` }"
                    role="menu"
                    @pointerenter="hoverable && openNow()"
                    @pointerleave="hoverable && scheduleClose()"
                >
                    <slot name="panel" :close="close" />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
