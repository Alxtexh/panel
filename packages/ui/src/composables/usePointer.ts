import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

/**
 * Where the pointer is over an element, as 0..1 on each axis.
 *
 * ONE LISTENER ON THE ELEMENT, not on the window. A window-level pointermove
 * fires for every card on the page and each one then works out whether it cares;
 * bound to the element, the browser has already answered that question.
 *
 * WRITTEN STRAIGHT TO CSS CUSTOM PROPERTIES rather than through reactive state.
 * A ref would re-render the component on every pointer frame - sixty times a
 * second, for a value only CSS consumes. Setting a variable on the node skips
 * Vue entirely and lets the compositor do the work, which is the difference
 * between a card that tilts and a page that stutters while you move the mouse.
 *
 * IT DOES NOTHING UNDER REDUCED MOTION and nothing on touch, where there is no
 * hover state to track and a "tilt" would only fire on tap.
 */
export function usePointer(): { el: Ref<HTMLElement | null> } {
    const el = ref<HTMLElement | null>(null)

    let node: HTMLElement | null = null

    function onMove(event: PointerEvent) {
        if (!node) {
            return
        }

        const rect = node.getBoundingClientRect()

        node.style.setProperty('--pk-px', String((event.clientX - rect.left) / rect.width))
        node.style.setProperty('--pk-py', String((event.clientY - rect.top) / rect.height))
    }

    function onLeave() {
        // Back to centre, so the card settles rather than freezing mid-tilt.
        node?.style.setProperty('--pk-px', '0.5')
        node?.style.setProperty('--pk-py', '0.5')
    }

    onMounted(() => {
        const reduced =
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                !window.matchMedia('(hover: hover)').matches)

        if (reduced || !el.value) {
            return
        }

        node = el.value
        onLeave()
        node.addEventListener('pointermove', onMove, { passive: true })
        node.addEventListener('pointerleave', onLeave, { passive: true })
    })

    onBeforeUnmount(() => {
        node?.removeEventListener('pointermove', onMove)
        node?.removeEventListener('pointerleave', onLeave)
    })

    return { el }
}
