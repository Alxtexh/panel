import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * How far an element has travelled through the viewport, as 0..1.
 *
 * 0 when its top reaches the bottom of the screen, 1 when its bottom leaves the
 * top. That range is what makes a sticky section animate across its own scroll
 * distance rather than snapping when it happens to cross a threshold.
 *
 * WRITTEN TO A CSS CUSTOM PROPERTY, never to reactive state - the same reason
 * `usePointer` does: a ref would re-render the component on every scroll frame
 * for a value only CSS consumes, and scroll fires far more often than pointer
 * move. The variable is set on the node and the compositor takes it from there.
 *
 * READ INSIDE `requestAnimationFrame`, and only when the element is actually on
 * screen. `getBoundingClientRect` forces layout; doing that synchronously in a
 * scroll handler is the classic way to make a page janky while looking
 * perfectly reasonable. An IntersectionObserver gates the listener so an
 * off-screen section costs nothing at all.
 *
 * NOTHING HAPPENS UNDER REDUCED MOTION: the variable is pinned at its end state
 * so the section renders as though it had been scrolled through, which is the
 * readable version of the same content.
 */
export function useScrollProgress(): { el: Ref<HTMLElement | null> } {
    const el = ref<HTMLElement | null>(null)

    let node: HTMLElement | null = null
    let observer: IntersectionObserver | null = null
    let ticking = false
    let visible = false

    function measure() {
        ticking = false

        if (!node || !visible) {
            return
        }

        const rect = node.getBoundingClientRect()
        const travel = rect.height + window.innerHeight

        // Guard a zero-height element: dividing by it yields Infinity and the
        // section pins itself at one end for no visible reason.
        const progress = travel <= 0 ? 0 : (window.innerHeight - rect.top) / travel

        node.style.setProperty('--pk-progress', String(Math.min(Math.max(progress, 0), 1)))
    }

    function onScroll() {
        if (!ticking) {
            ticking = true
            requestAnimationFrame(measure)
        }
    }

    onMounted(() => {
        const reduced =
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (!el.value) {
            return
        }

        node = el.value

        if (reduced || typeof IntersectionObserver === 'undefined') {
            node.style.setProperty('--pk-progress', '1')

            return
        }

        node.style.setProperty('--pk-progress', '0')

        observer = new IntersectionObserver((entries) => {
            visible = entries.some((entry) => entry.isIntersecting)

            if (visible) {
                onScroll()
            }
        })

        observer.observe(node)

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll, { passive: true })
        onScroll()
    })

    onBeforeUnmount(() => {
        observer?.disconnect()
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
    })

    return { el }
}
