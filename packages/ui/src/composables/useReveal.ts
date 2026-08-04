import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

/**
 * Reveal an element the first time it is scrolled into view.
 *
 * AN OBSERVER RATHER THAN A SCROLL HANDLER. A scroll listener runs on every
 * frame of every scroll for every element that registered one; an
 * IntersectionObserver is told once and then says nothing until the browser
 * decides something crossed. On a landing page with a dozen sections that is
 * the difference between smooth and a page that stutters on a cheap phone.
 *
 * IT UNOBSERVES AFTER THE FIRST CROSSING, because a reveal that replays every
 * time you scroll back up is not an entrance, it is a flicker.
 *
 * REDUCED MOTION IS HONOURED BY REVEALING IMMEDIATELY, not by animating faster.
 * Somebody who has asked their system for less motion has usually asked because
 * motion makes them ill, and the content is what they came for - so they get it
 * at once, in its final position, with no transition at all.
 */
export function useReveal(): { el: Ref<HTMLElement | null>; shown: Ref<boolean> } {
    const el = ref<HTMLElement | null>(null)
    const shown = ref(false)

    let observer: IntersectionObserver | null = null

    onMounted(() => {
        const reduced =
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches

        // No observer support (jsdom, older engines) is treated the same as
        // reduced motion: show it. Content must never depend on an animation.
        if (reduced || typeof IntersectionObserver === 'undefined' || !el.value) {
            shown.value = true

            return
        }

        observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        shown.value = true
                        observer?.disconnect()
                    }
                }
            },
            // A little before it arrives, so the motion finishes as it lands
            // rather than starting once the reader is already looking at it.
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
        )

        observer.observe(el.value)
    })

    onBeforeUnmount(() => observer?.disconnect())

    return { el, shown }
}
