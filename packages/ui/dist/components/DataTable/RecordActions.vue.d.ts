export interface RecordActionItem {
    key: string;
    label: string;
    icon?: string;
    destructive?: boolean;
    confirmation?: string;
    link?: boolean;
    removesRow?: boolean;
    /**
     * Fields to collect before running, sent WITH the action.
     *
     * The shape `SchemaNode` renders. Present only for a form action; the page
     * opens its own modal on it, so this component neither renders nor knows
     * about the dialog - it emits `run` exactly as before.
     */
    form?: {
        nodes: unknown[];
    };
    url?: string;
    /** Filament's palette: primary | gray | success | warning | danger | info. */
    color?: string;
}
export interface RecordActionGroup {
    label?: string;
    icon?: string;
    actions: RecordActionItem[];
}
type __VLS_Props = {
    /** Already filtered server-side for this record and this user. */
    groups: RecordActionGroup[];
    /** What the record is called, for the menu heading and aria labels. */
    title: string;
    /** Key of an action currently running, so its control can disable. */
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
