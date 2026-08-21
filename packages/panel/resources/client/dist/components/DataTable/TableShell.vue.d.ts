/**
 * One card around everything a table is - DESIGN_RULES rule 4.
 *
 * Tabs, toolbar (or the selection bar that replaces it), the rows and the
 * pagination used to render as four sibling cards with gaps between them,
 * each with its own border - so the controls read as separate widgets that
 * happened to be nearby rather than as parts of the object they act on.
 * This shell owns the ONE border, the rounding and the dividers; the bands
 * inside it own nothing but their content.
 *
 * THE ROWS BAND IS THE ONLY ONE THAT SCROLLS. The shell is a flex column
 * with the same hug-then-shrink sizing DataTable's root documents
 * (min-h-0 + shrink + grow-0): tabs, toolbar and pagination keep their
 * natural height, and the default slot - the table - shrinks and scrolls
 * when the page genuinely cannot hold it.
 *
 * SLOTS, NOT PROPS. The shell knows nothing about what a toolbar or a tab
 * strip is - Trash's list and a resource index share this frame while
 * filling it with entirely different controls.
 *
 * `toolbarTint` softens the toolbar band while selection or reorder is
 * active, so the mode reads as a temporary state of the table card rather
 * than a second floating widget.
 */
type __VLS_Props = {
    toolbarTint?: 'none' | 'muted';
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    tabs?: (props: typeof __VLS_1) => any;
} & {
    toolbar?: (props: typeof __VLS_3) => any;
} & {
    default?: (props: typeof __VLS_5) => any;
} & {
    pagination?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    toolbarTint: "none" | "muted";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
