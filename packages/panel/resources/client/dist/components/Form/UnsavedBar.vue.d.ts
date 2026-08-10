/**
 * The floating "Unsaved changes" bar.
 *
 * WHY THIS EXISTS ALONGSIDE THE BROWSER GUARDS. `beforeunload` and the
 * navigation confirm are both REACTIVE - they only speak up once the user is
 * already leaving, and by then the question ("save or lose it?") is being asked
 * at the worst possible moment. A persistent bar makes the state visible while
 * there is still nothing at stake, so the interruption is rarely reached at all.
 *
 * IT DOES NOT FETCH (§4 rule 2): it emits `save` and `cancel`, and the page owns
 * both. It also does not decide when it is shown - dirtiness belongs to the
 * form, not to a bar that draws it.
 *
 * THE SECONDARY ACTION IS CANCEL, NOT RESET, and the difference is what somebody
 * actually wants. "Reset" clears the form and leaves you sitting on it - which
 * on a CREATE page means staring at the empty fields you just emptied, and on an
 * edit page is a thing people ask for perhaps once. What somebody who has
 * decided against a form wants is to be somewhere else.
 *
 * It also stops the bar contradicting the form: the buttons at the foot of the
 * page are already Cancel and Save, and a floating bar offering Reset and Save
 * gave two different answers to "how do I get out of this".
 *
 * FIXED TO THE VIEWPORT, not to the end of the form. A long form scrolls the
 * save button off screen exactly when someone has made the most changes; the
 * whole point is that the controls stay reachable from wherever they are.
 * `pointer-events-none` on the positioning wrapper keeps the strip either side
 * of the bar clickable, so it does not become an invisible barrier across the
 * page.
 */
type __VLS_Props = {
    show: boolean;
    processing?: boolean;
    message?: string;
    saveLabel?: string;
    cancelLabel?: string;
    discardLabel?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    cancel: () => any;
    discard: () => any;
    save: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onDiscard?: (() => any) | undefined;
    onSave?: (() => any) | undefined;
}>, {
    message: string;
    processing: boolean;
    saveLabel: string;
    cancelLabel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
