/**
 * The dashboard checklist. Purely presentational - see `SetupChecklist` in
 * `panelkit/panel` (packages/panel/src/Support/SetupChecklist.php) for where
 * `items` actually comes from and why "done" can un-happen.
 *
 * ONE ITEM IS HIGHLIGHTED, THE REST ARE A LIST. A page with six equally-loud
 * cards asks an operator to triage; this asks them to read one thing. `items`
 * arrives already ordered - every undone item first, done ones after - so
 * the first entry is the highlighted one and nothing here re-sorts.
 *
 * DONE ITEMS ARE STRUCK THROUGH, NOT REMOVED. A card that only ever shows
 * problems reads as "still broken" even seconds after the last one clears;
 * seeing yesterday's fixed items is what makes an empty problem list read as
 * "fixed", not "empty because nobody has looked yet".
 */
export interface SetupChecklistItem {
    key: string;
    title: string;
    detail: string;
    done: boolean;
}
type __VLS_Props = {
    items: SetupChecklistItem[];
    /** Where "see the full report" points - the panel's own monitoring page, typically. */
    reportHref?: string | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
