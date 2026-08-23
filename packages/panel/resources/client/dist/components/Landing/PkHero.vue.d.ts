type __VLS_Props = {
    brand?: string;
    eyebrow?: string;
    title?: string;
    body?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    note?: string;
    /** centered = short band; bleed = dominant first viewport */
    variant?: 'centered' | 'bleed';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    variant: "centered" | "bleed";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
