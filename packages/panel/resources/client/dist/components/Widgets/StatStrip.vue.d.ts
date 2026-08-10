/**
 * One card, split into metric segments.
 *
 * WHY THIS IS NOT A ROW OF CARDS. Four separate cards say "four things"; one
 * card split by hairlines says "one thing, measured four ways" - which is what
 * a set of windows over the same metric actually is. The segments here are
 * meant to share a subject, and the container is what asserts that.
 *
 * THE DIVIDERS ARE GAPS, NOT BORDERS, and that is what makes it work on a
 * phone. A bordered variant has to know which edge to draw on, which changes
 * with the column count, so every breakpoint needs its own set of rules and a
 * `last:` exception to stop a trailing line. A `gap-px` grid over a coloured
 * background draws the hairlines wherever cells happen to meet - four across on
 * a desktop, two-by-two on a phone - with no per-breakpoint rules at all and no
 * edge line to suppress.
 *
 * ONE SWITCH FOR THE WHOLE STRIP, and it starts CLOSED.
 *
 * A per-segment eye was the wrong model twice over. These segments are one
 * metric over four windows, so revealing "this month" while "last 7 days" stays
 * dotted hides nothing - the sensitive thing is the magnitude, and any one
 * window gives it away. And four toggles means four clicks to put the strip
 * back the way it was, which is the state anyone who wanted it hidden wants
 * again a minute later.
 *
 * Starting hidden is the same argument from the other end: a strip that opens
 * revealed has already shown the number by the time you decide you did not want
 * it shown.
 *
 * THE MASK IS PRESENTATIONAL, NOT A SECURITY BOUNDARY. The value is in the DOM
 * either way; this is shoulder-surfing courtesy. Anything that must not reach
 * the browser must not be sent to it.
 */
export interface StatSegment {
    key: string;
    label: string;
    value: string | number;
    /** Small muted line under the value. */
    caption?: string | null;
}
type __VLS_Props = {
    segments: StatSegment[];
    /**
     * Columns at the widest breakpoint.
     *
     * It never falls below TWO. A strip is a comparison, and a single
     * column stops being one - four stacked cells read as four unrelated
     * numbers you have to scroll between, which is the row of separate
     * cards this exists to avoid. Two-by-two keeps every value on screen
     * together on a phone.
     */
    columns?: 2 | 3 | 4 | 5 | 6;
    /** Offer the reveal control at all. */
    maskable?: boolean;
    /** Whether the strip starts masked. Hidden unless told otherwise. */
    hidden?: boolean;
    loading?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    toggle: (hidden: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onToggle?: ((hidden: boolean) => any) | undefined;
}>, {
    columns: 2 | 3 | 4 | 5 | 6;
    loading: boolean;
    hidden: boolean;
    maskable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
