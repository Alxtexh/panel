export declare function useWidgetOrder<T extends {
    key: string;
}>(storageKey: string, items: () => T[]): {
    ordered: import("vue").ComputedRef<T[]>;
    dragging: import("vue").Ref<number | null, number | null>;
    dragOver: import("vue").Ref<number | null, number | null>;
    onDragStart: (index: number, event: DragEvent) => void;
    onDragOver: (index: number, event: DragEvent) => void;
    onDrop: (index: number) => void;
    onDragEnd: () => void;
    reset: () => void;
};
