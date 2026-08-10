export interface InfoNode {
    component: 'entry' | 'section' | 'grid' | 'tabs' | 'tab';
    children?: InfoNode[];
    key?: string;
    label?: string;
    description?: string;
    columns?: number;
    collapsible?: boolean;
    collapsed?: boolean;
    type?: string;
    mono?: boolean;
    muted?: boolean;
    transform?: 'upper' | 'lower';
    prefix?: string;
    suffix?: string;
    colors?: Record<string, string>;
    defaultColor?: string;
    [key: string]: any;
}
type __VLS_Props = {
    node: InfoNode;
    record: Record<string, any>;
    /** 0 is the outermost layout node - the only one that draws a frame. */
    depth?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    depth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
