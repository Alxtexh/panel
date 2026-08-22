export type MapMarker = {
    lat: number;
    lng: number;
    label?: string;
    popup?: string;
};
type __VLS_Props = {
    modelValue?: {
        [key: string]: number;
    } | null;
    markers?: MapMarker[];
    center?: {
        lat: number;
        lng: number;
    } | null;
    zoom?: number;
    height?: number;
    latKey?: string;
    lngKey?: string;
    disabled?: boolean;
    pickable?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: Record<string, number> | null) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Record<string, number> | null) => any) | undefined;
}>, {
    height: number;
    disabled: boolean;
    center: {
        lat: number;
        lng: number;
    } | null;
    modelValue: {
        [key: string]: number;
    } | null;
    markers: MapMarker[];
    zoom: number;
    latKey: string;
    lngKey: string;
    pickable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
