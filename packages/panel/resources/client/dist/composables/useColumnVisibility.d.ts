/**
 * Column visibility, persisted per user in localStorage (spec §8).
 *
 * No Inertia, no fetch - it is browser state, so it belongs in the UI package.
 *
 * Reading happens in onMounted rather than at setup time so this stays safe
 * under server-side rendering, where `localStorage` does not exist. Every access
 * is guarded: private mode and quota-exceeded both throw, and a table that
 * refuses to render because it could not remember a column preference would be
 * a bad trade.
 */
export declare function useColumnVisibility(storageKey: string): {
    hidden: import("vue").Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
    toggle: (key: string) => void;
    setHidden: (keys: Set<string>) => void;
    reset: () => void;
};
