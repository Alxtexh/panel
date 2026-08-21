interface MapSchema {
    key: string;
    defaultCenter?: {
        lat: number;
        lng: number;
    };
    zoom?: number;
    height?: number;
    latKey?: string;
    lngKey?: string;
    [key: string]: unknown;
}
type __VLS_Props = {
    field: MapSchema;
    modelValue: unknown;
    disabled?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: unknown) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown) => any) | undefined;
}>, {
    disabled: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
