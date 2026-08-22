import type { Ref } from 'vue';
/**
 * Is this state different from the last saved version of it?
 *
 * REPORTED FROM A REAL PORT: `UnsavedBar` ships and is exported, and a custom
 * page still could not use it - because the bar draws a decision it does not
 * make. `RecordForm` knows it is dirty; a page holding its own state has to
 * work that out for itself, and what it writes is a snapshot, a comparison, and
 * a `beforeunload` handler somebody has to remember to remove.
 *
 * THE COMPARISON IS KEY-ORDER-INSENSITIVE, which is the part a hand-rolled
 * version gets wrong. `JSON.stringify` preserves insertion order, so state
 * rebuilt from a response - same values, keys in a different order - compares
 * as changed. The page then shows "unsaved changes" for a save that just
 * succeeded, which teaches people to ignore the bar.
 *
 * IT DOES NOT SAVE. Like the bar it draws, this owns no request: `commit()`
 * says a save succeeded, `discard()` puts the last committed version back, and
 * what happens in between belongs to the page.
 */
export declare function useUnsavedChanges<T>(state: Ref<T>, options?: {
    warnOnUnload?: boolean;
}): {
    dirty: import("vue").ComputedRef<boolean>;
    commit: () => void;
    discard: () => void;
    baseline: Ref<string, string>;
};
