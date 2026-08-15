import type { PlanRecord } from './planTypes';
type __VLS_Props = {
    plans: PlanRecord[];
    title?: string;
    description?: string | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    delete: (id: string) => any;
    edit: (id: string) => any;
    create: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDelete?: ((id: string) => any) | undefined;
    onEdit?: ((id: string) => any) | undefined;
    onCreate?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
