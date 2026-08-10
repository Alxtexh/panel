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
 * The eye covers every sensitive segment at once, because putting a strip back
 * the way it was should be one click rather than four - and hidden is the state
 * anyone who wanted it hidden wants again a minute later. Starting hidden is the
 * same argument from the other end: a strip that opens revealed has already
 * shown the number by the time you decide you did not want it shown.
 *
 * WHICH SEGMENTS ARE SENSITIVE IS DECLARED, NOT ASSUMED.
 *
 * This used to mask all four or none, on the reasoning that a strip is one
 * metric over four windows, so covering "this month" while "last 7 days" shows
 * hides nothing. That is true of THAT strip and is not a property of the
 * component: a strip pairing revenue with a device count has one cell worth
 * covering and three that are noise to cover. `sensitive` on a segment says
 * which is which, and the default is every segment - so a strip that declares
 * nothing behaves exactly as it always did.
 *
 * THE VALUE ITSELF IS THE CONTROL, not only the eye. Reaching for a 16px icon
 * in the corner to read the cell you are already looking at is a detour; the
 * dots are a button, and clicking them reveals that one cell. Clicking it again
 * puts it back. The eye remains the way to do all of them at once.
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
    /**
     * Whether this cell is one of the ones worth covering.
     *
     * OMITTED MEANS SENSITIVE. The alternative default - "cover nothing unless
     * asked" - turns every existing strip into one that shows its numbers
     * immediately, which is the exact failure the closed-by-default rule exists
     * to prevent, and it would happen silently on upgrade.
     */
    sensitive?: boolean;
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
