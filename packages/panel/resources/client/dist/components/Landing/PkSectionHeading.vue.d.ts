/**
 * A section's title and its one supporting line.
 *
 * THE EYEBROW IS OPTIONAL AND THE BODY IS ONE SENTENCE, because a landing
 * section that needs a paragraph to explain its own heading is a section whose
 * heading is wrong. Centring is the default for marketing bands and the
 * exception for anything a person reads left to right, so it is a prop.
 */
type __VLS_Props = {
    eyebrow?: string;
    title?: string;
    body?: string;
    centred?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    centred: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
