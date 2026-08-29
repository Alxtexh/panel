import { type RecordActionGroup, type RecordActionItem } from './RecordActions.vue';
type __VLS_Props = {
    groups: RecordActionGroup[];
    title: string;
    busy?: string | null;
};
declare function openContextMenu(event: MouseEvent): void;
declare const _default: import("vue").DefineComponent<__VLS_Props, {
    openContextMenu: typeof openContextMenu;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    run: (action: RecordActionItem) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRun?: ((action: RecordActionItem) => any) | undefined;
}>, {
    busy: string | null;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
