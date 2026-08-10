/**
 * Status tabs with counts.
 *
 * Rendered as a SEGMENTED CONTROL rather than underlined text. The underline
 * version read as a row of links with grey numbers after them - the counts
 * looked like stray text rather than part of the tab, and nothing said "these
 * are selectable". A filled pill for the active tab and a bordered count badge
 * on every tab makes both facts obvious at a glance.
 *
 * Counts arrive from ONE grouped aggregate query on the server (addendum C1:
 * "N tabs must never produce N queries") and are deferred, so they land after
 * the rows rather than in front of them.
 *
 * While counts are in flight each tab shows a placeholder, not a zero. A zero
 * that later becomes 47 reads as data changing under the operator; a
 * placeholder reads as "still counting", which is the truth.
 */
type __VLS_Props = {
    tabs: string[];
    active: string | null;
    /** Deferred - undefined until the grouped count query resolves. */
    counts?: Record<string, number>;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    select: (tab: string | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSelect?: ((tab: string | null) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
