export interface BulkActionSchema {
    key: string;
    label: string;
    icon: string | null;
    destructive: boolean;
    confirmation: string | null;
    /** Filament's palette: primary | gray | success | warning | danger | info. */
    color?: string | null;
    /**
     * Fields to collect before running, sent WITH the action.
     *
     * The page opens the dialog; this component emits `run` either way, so a
     * form action and a plain one look identical from here.
     */
    form?: {
        nodes: unknown[];
    } | null;
    /**
     * When true, ResourceIndex opens the bulk form in PkSlideover instead of
     * the dense PkModal. Opt-in via BulkAction::slideOver().
     */
    slideOver?: boolean;
}
type __VLS_Props = {
    actions: BulkActionSchema[];
    /** How many records the action would touch, for the confirmation copy. */
    count: number;
    allMatching: boolean;
    /** The current filtered view's exact row count - deferred, so undefined until it lands. */
    total?: number;
    busy?: boolean;
    canExport?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    export: () => any;
    run: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onExport?: (() => any) | undefined;
    onRun?: ((key: string) => any) | undefined;
}>, {
    busy: boolean;
    canExport: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
