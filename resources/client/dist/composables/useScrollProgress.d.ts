import type { Ref } from 'vue';
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
export declare function useScrollProgress(): {
    el: Ref<HTMLElement | null>;
};
