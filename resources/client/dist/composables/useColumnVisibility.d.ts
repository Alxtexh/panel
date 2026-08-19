export declare function useColumnVisibility(storageKey: string): {
    hidden: import("vue").Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
    toggle: (key: string) => void;
    hide: (key: string) => void;
    show: (key: string) => void;
    setHidden: (keys: Set<string>) => void;
    reset: () => void;
};
