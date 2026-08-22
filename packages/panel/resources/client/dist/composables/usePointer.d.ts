import type { Ref } from 'vue';
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
export declare function usePointer(): {
    el: Ref<HTMLElement | null>;
};
