/**
 * A section heading, and its `small` variant.
 *
 * MOVED FROM THE REFERENCE APP, verbatim. It is the heading every settings
 * section here uses, so the packaged security screens looked subtly unlike the
 * demo's until it came too.
 */
type Props = {
    title: string;
    description?: string;
    variant?: 'default' | 'small';
};
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    variant: "default" | "small";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
