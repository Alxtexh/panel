/**
 * The readout a chart shows for whatever the cursor is over.
 *
 * WHY THIS IS A COMPONENT RATHER THAN THREE COPIES. `PieChart` worked this out
 * first and wrote the reason down - "the tooltip is rendered, not an SVG
 * `<title>`" - and then the polar area, radar and segmented bar each shipped
 * with `<title>` anyway, because each was written after the pie and nobody
 * carried the decision across. Four charts, one rule, one chart following it.
 *
 * A NATIVE `title` IS NOT A CHEAP VERSION OF THIS. It is drawn by the browser
 * rather than the page, so it ignores the panel's theme entirely - a flat dark
 * box beside three styled cards - appears after about a second wherever the
 * operating system decides, cannot be positioned or dismissed, and DOES NOT
 * EXIST ON TOUCH. Three of the dashboard's charts simply had no tooltip on a
 * phone, which is invisible from a desktop.
 *
 * PINNED, NOT FOLLOWING THE CURSOR. A card chasing the pointer over a small
 * chart covers the thing being read, and on a pie it covers the neighbouring
 * slice you were about to compare against. The corner is always legible and
 * never in the way; `PieChart` chose that and this keeps it.
 *
 * `pointer-events-none` MATTERS: without it the card sits between the cursor
 * and the segment, the hover ends, the card disappears, the hover starts again
 * - a flicker that reads as a rendering bug.
 */
type __VLS_Props = {
    /** What is being pointed at - a series name, a slice, a band. */
    label: string;
    /** Already formatted by the caller, which owns its own number format. */
    value: string;
    /** A share of the whole, when the chart has one. Pass nothing when it does not. */
    share?: string | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    share: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
