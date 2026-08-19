import type { PlanLimitField, PlanModuleOption, PlanRecord } from './planTypes';
type __VLS_Props = {
    plan?: PlanRecord | null;
    modules?: PlanModuleOption[];
    limits?: PlanLimitField[];
    mode?: 'create' | 'edit';
    processing?: boolean;
    embedded?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    cancel: () => any;
    save: (plan: PlanRecord) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onCancel?: (() => any) | undefined;
    onSave?: ((plan: PlanRecord) => any) | undefined;
}>, {
    mode: "create" | "edit";
    processing: boolean;
    embedded: boolean;
    plan: PlanRecord | null;
    modules: PlanModuleOption[];
    limits: PlanLimitField[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
