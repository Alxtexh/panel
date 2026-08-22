import type { Ref } from 'vue';
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
export declare function useReveal(): {
    el: Ref<HTMLElement | null>;
    shown: Ref<boolean>;
};
