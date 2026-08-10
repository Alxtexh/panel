/**
 * A panel of content: a border, a surface, and somewhere to put a heading.
 *
 * REPORTED FROM A REAL PORT: `StatCard` and `ChartCard` cover the dashboard,
 * and a page wanting an ordinary block of content had nothing - so every screen
 * hand-rolled `rounded-lg border bg-card` on a div. Fifteen copies of that
 * string exist in the reference app, which is the measurement that decided this
 * was worth a component rather than a line in the design rules.
 *
 * WHAT IT IS NOT is a layout system. There is no `variant`, no tone, no
 * elevation scale: those grow one prop at a time until the component is a
 * styling language nobody can read, and a card that needs a red border can take
 * one through `class`, which merges. What it standardises is the SHAPE - the
 * radius, the border, the surface and the padding rhythm - because those are
 * what drift apart across screens and what nobody notices drifting.
 *
 * PADDING IS OPTIONAL AND ON BY DEFAULT, because the exception is specific and
 * obvious: a table fills its card edge to edge, and every other kind of content
 * wants breathing room. `:padded="false"` and the body is yours.
 *
 * THE HEADER APPEARS ONLY IF ASKED FOR. A card with an empty header row is a
 * card with a stray line across the top of it, so both the element and its
 * bottom border depend on there being something to put there.
 */
type __VLS_Props = {
    /** Heading text. Use the `header` slot instead when it is not just text. */
    title?: string;
    /** A line under the title - what this block is, when that is not obvious. */
    description?: string;
    /** Off for content that fills the card, a table above all. */
    padded?: boolean;
};
type __VLS_Slots = {
    default(): unknown;
    /** Replaces title/description entirely. */
    header(): unknown;
    /** Trailing controls on the header row. */
    actions(): unknown;
    /** A footer with its own top border - totals, a save button, a count. */
    footer(): unknown;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    padded: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
