type __VLS_Props = {
    heading: string;
    summary?: {
        label: string;
        detail?: string;
    }[];
    nextSteps?: {
        label: string;
        href: string;
    }[];
    actions?: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
    linkComponent?: string | object;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    summary: {
        label: string;
        detail?: string;
    }[];
    actions: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
    nextSteps: {
        label: string;
        href: string;
    }[];
    linkComponent: string | object;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
