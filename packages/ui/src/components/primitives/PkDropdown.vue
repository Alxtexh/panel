<script setup lang="ts">
/**
 * Minimal dropdown: trigger slot, panel slot, click-outside and Escape to close.
 *
 * Written rather than pulled from a component library on purpose. packages/ui
 * has to be droppable into any Vue app (spec §4), and taking a hard dependency
 * on the consuming app's component kit - or on reka-ui, or on shadcn-vue's exact
 * file layout - is what would stop that.
 *
 * THE PANEL IS TELEPORTED TO <body> AND POSITIONED FIXED. This is the whole
 * reason the file is longer than it looks like it should be.
 *
 * An absolutely-positioned panel is laid out inside the nearest positioned
 * ancestor and CLIPPED by the nearest scroll container. The data table is a
 * `overflow-auto` box, so a row-actions menu opened near the bottom edge was
 * cut off at the table boundary and then scrolled away with the rows - it
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
        /**
         * A width class for the panel.
         *
         * A MINIMUM BY DEFAULT, NOT A FIXED SIZE, and that distinction is the
         * whole bug this replaced. It used to be `w-56` and applied literally,
         * so a menu holding one "Delete" was 224 pixels wide - the panel never
         * measured what was in it, and every short menu looked like a mistake.
         *
         * AN ARBITRARY VALUE, NOT A SCALE STEP, and that is not fussiness. The
         * first fix used `min-w-44`, which generated NO CSS at all - so the only
         * rule that survived was `w-max` and the panel hugged its text with no
         * minimum whatsoever. A menu that had been too wide became too tight,
         * and nothing reported either. `min-w-[13rem]` cannot be silently
         * dropped, and the built stylesheet is checked for it.
         *
         * 10rem IS A JUDGEMENT, and the two wrong answers either side of it are
         * on record: 13rem is exactly the old `w-52` that made a one-word menu
         * look like an empty box, and no minimum at all made the same menu look
         * cramped. It is one constant - move it if the eye disagrees.
         *
         * Pass a `w-…` class where a fixed width is genuinely wanted: the filter
         * panel is a form, and a form that reflows as its contents change is
         * worse than one that does not.
         */
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
        /** Open on hover as well as click - right for a nav rail, wrong for a menu. */
        hoverable?: boolean
        /**
         * Whether a click inside the panel dismisses it.
         *
         * TRUE IS RIGHT FOR A MENU and wrong for a FORM, and this component is
         * used as both. A menu item is a command: giving it should close the
         * menu. A filter panel is a small form with its own Apply button, and
         * dismissing it mid-edit throws away the draft - which is exactly what
         * happened when the Status field, whose trigger is a button rather than
         * a native control, was read as "a command has been given".
         *
         * The `input, select, textarea, label` exemption below was an attempt to
         * tell the two apart by guessing from the element. It cannot: a custom
         * control is a button, and so is a menu item.
         */
        dismissOnPanelClick?: boolean
    }>(),
    {
        align: 'end',
        width: 'min-w-[10rem] max-w-sm',
        offset: 4,
        placement: 'bottom',
        hoverable: false,
        dismissOnPanelClick: true,
    },
)

const open = ref(false)
const root = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)
const position = ref({ top: 0, left: 0, minWidth: 0 })

/**
 * A pointer position to open at, instead of the trigger's box.
 *
 * This is what makes a right-click context menu the SAME menu rather than a
 * second implementation of one. A context menu differs from a dropdown in
 * exactly one respect - what it is anchored to - and everything else it needs
 * (teleporting out of the table's clip context, flipping near an edge, closing
 * on outside-click and Escape) is already solved here. Duplicating the file to
 * change an anchor would mean fixing every future positioning bug twice.
 */
const pointAnchor = ref<{ x: number; y: number } | null>(null)

let closeTimer: ReturnType<typeof setTimeout> | null = null

/**
 * A menu item ACTS, so the menu closes.
 *
 * Leaving it open was a real bug rather than a missing nicety: choosing Delete
 * opened the confirmation dialog and left the row menu sitting on top of the
 * dimmed backdrop, so the screen showed a modal asking a question and, beside
 * it, the still-live menu the question came from. Both looked interactive and
 * only one was.
 *
 * CLICKS ON A CONTROL ARE EXEMPT. A panel is not always a list of commands -
 * the column picker holds checkboxes, and closing after each tick would mean
 * reopening the menu to hide a second column. Anything that is a checkbox, a
 * radio, a text field or a label wrapping one leaves the menu open; everything
 * else is treated as a command that has now been given.
 */
function onPanelClick(event: MouseEvent) {
    if (!props.dismissOnPanelClick) {
        return
    }

    const target = event.target as HTMLElement | null

    if (target?.closest('input, select, textarea, label, [data-keep-open]')) {
        return
    }

    close()
}

/** Open without toggling - hover must not close an already-open panel. */
async function openNow() {
    if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
    }

    if (open.value) {
        return
    }

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
    // A click on the trigger always means "anchor to the trigger", even if the
    // last opening was a right-click somewhere else.
    pointAnchor.value = null
    open.value = !open.value

    if (open.value) {
        // Position after the panel exists, so its real height decides whether
        // it opens downward or flips up.
        await nextTick()
        place()
    }
}

/** Open anchored to a point - viewport coordinates, as from a MouseEvent. */
async function openAt(x: number, y: number) {
    pointAnchor.value = { x, y }
    open.value = true
    await nextTick()
    place()
}

function close() {
    open.value = false
    pointAnchor.value = null
}

/**
 * Put the panel next to its trigger, flipping and clamping to stay on screen.
 *
 * Viewport coordinates, because the panel is `fixed`. Adding scroll offsets
 * here is the classic mistake - it makes the menu drift by exactly the scroll
 * distance on any page that is not at the top.
 */
function place() {
    const trigger = root.value
    const menu = panel.value

    if (!trigger || !menu) {
        return
    }

    const size = menu.getBoundingClientRect()
    const margin = 8

    /*
     * A point is a zero-sized box at the cursor.
     *
     * Expressing it that way rather than branching means the flip and clamp
     * logic below is shared verbatim: a context menu opened near the bottom of
     * the window flips up for exactly the same reason a dropdown does, and it
     * would be a second bug to fix if this were a separate path.
     */
    const anchor = pointAnchor.value
        ? new DOMRect(pointAnchor.value.x, pointAnchor.value.y, 0, 0)
        : trigger.getBoundingClientRect()

    let top: number
    let left: number

    if (props.placement === 'bottom') {
        top = anchor.bottom + props.offset

        // Flip above when there is no room below but there is above. A menu
        // that renders off the bottom of the window is unreachable, since the
        // page itself may not scroll.
        if (
            top + size.height > window.innerHeight - margin &&
            anchor.top - size.height - props.offset > margin
        ) {
            top = anchor.top - size.height - props.offset
        }

        // A context menu always opens down-and-right from the cursor, the way
        // every desktop menu does, regardless of the trigger's own alignment.
        // `align: end` on a zero-width anchor would open it to the LEFT of the
        // pointer, which reads as the menu belonging to whatever is over there.
        left = props.align === 'end' && !pointAnchor.value ? anchor.right - size.width : anchor.left
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
    if (!open.value) {
        return
    }

    const target = e.target as Node

    // The panel is no longer a DOM descendant of the trigger, so a click inside
    // it is "outside" as far as the root element is concerned. Both have to be
    // checked or selecting a menu item would close the menu before its own
    // handler ran.
    if (root.value?.contains(target) || panel.value?.contains(target)) {
        return
    }

    /*
     * A CLICK INSIDE ANY OTHER TELEPORTED OVERLAY IS NOT "OUTSIDE".
     *
     * The filter panel contains a PkMultiSelect, whose option list teleports to
     * <body> exactly as this one does. So opening the Status field put its list
     * outside both `root` and `panel`, this handler called it an outside click,
     * and the whole filter panel closed the instant you reached for a value -
     * with the half-built filter draft going with it.
     *
     * The check is "inside SOME overlay" rather than "inside a CHILD overlay",
     * which is the honest trade: telling a descendant from a sibling would mean
     * threading a parent/child registry through every overlay. The cost is that
     * two overlays open at once no longer dismiss each other - and they cannot
     * be, because opening the second one means clicking its trigger, which is
     * ordinary DOM and closes the first.
     */
    // Reaching here already means the target is not in THIS panel, so a plain
    // `closest` can only match some other overlay. `target` may be a text node,
    // which has no `closest` of its own.
    const el = target instanceof Element ? target : target.parentElement

    if (el?.closest('[data-pk-overlay]')) {
        return
    }

    close()
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open.value) {
        e.stopPropagation()
        close()
    }
}

function reposition() {
    if (!open.value) {
        return
    }

    // A point anchor stops meaning anything once the content under it moves.
    // Following the cursor position would leave the menu pointing at a
    // different row than the one it acts on, which is worse than dismissing.
    if (pointAnchor.value) {
        close()

        return
    }

    place()
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
    if (closeTimer) {
        clearTimeout(closeTimer)
    }

    document.removeEventListener('pointerdown', onDocumentPointerDown)
    document.removeEventListener('keydown', onKeydown)
    window.removeEventListener('scroll', reposition, true)
    window.removeEventListener('resize', reposition)
})

defineExpose({ close, openAt })
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
                        'bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg',
                        width,
                    ]"
                    :style="{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        /*
                         * AT LEAST AS WIDE AS WHAT OPENED IT. A menu narrower
                         * than its own trigger reads as a different control
                         * belonging to something else.
                         *
                         * This was computed on every open and never applied -
                         * the template set only `top` and `left` - so the
                         * measurement existed and did nothing.
                         */
                        minWidth: `${position.minWidth}px`,
                    }"
                    data-pk-overlay
                    role="menu"
                    @pointerenter="hoverable && openNow()"
                    @pointerleave="hoverable && scheduleClose()"
                    @click="onPanelClick"
                >
                    <slot name="panel" :close="close" />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
