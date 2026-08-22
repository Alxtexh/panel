export declare function useColumnWidths(storageKey: string): {
    widths: import("vue").Ref<Record<string, number>, Record<string, number>>;
    setWidth: (key: string, width: number) => void;
    setWidths: (next: Record<string, number>) => void;
    reset: () => void;
};
