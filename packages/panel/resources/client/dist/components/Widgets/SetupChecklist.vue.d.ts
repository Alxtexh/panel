import type { Component } from 'vue';
export interface SetupChecklistItem {
    key: string;
    title: string;
    detail: string;
    done: boolean;
    href?: string | null;
    actionLabel?: string | null;
}
type __VLS_Props = {
    items: SetupChecklistItem[];
    /** Where "see the full report" points - the panel's own monitoring page, typically. */
    reportHref?: string | null;
    heading?: string;
    skipLabel?: string | null;
    /** Inertia `<Link>`, or any router link. Defaults to a plain `<a>`. */
    linkComponent?: string | Component;
    /** Compact stepper for first-run onboarding; full list for doctor findings. */
    variant?: 'doctor' | 'onboarding';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    skip: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSkip?: (() => any) | undefined;
}>, {
    variant: "doctor" | "onboarding";
    heading: string;
    linkComponent: string | Component;
    reportHref: string | null;
    skipLabel: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
