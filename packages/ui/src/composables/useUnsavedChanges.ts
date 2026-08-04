import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

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
export function useUnsavedChanges<T>(state: Ref<T>, options: { warnOnUnload?: boolean } = {}) {
    const { warnOnUnload = true } = options

    const baseline = ref(serialise(state.value))

    const dirty = computed(() => serialise(state.value) !== baseline.value)

    /** The current state is now the saved state. Call after a save succeeds. */
    function commit(): void {
        baseline.value = serialise(state.value)
    }

    /**
     * Put the last committed version back.
     *
     * PARSED FROM THE SNAPSHOT rather than held as a second reference, so the
     * restored value shares nothing with what the page has been mutating - a
     * baseline holding the same object graph would be edited along with it and
     * `dirty` would never become true.
     */
    function discard(): void {
        state.value = JSON.parse(baseline.value) as T
    }

    /*
     * THE BROWSER GUARD IS THE LAST LINE, not the first. It only speaks once
     * somebody is already leaving, and it cannot be styled, delayed or
     * explained - which is why the bar exists. It is still worth having for the
     * closed tab, which no in-app guard can see.
     */
    function beforeUnload(event: BeforeUnloadEvent): void {
        if (!dirty.value) {
            return
        }

        event.preventDefault()

        // Assigning returnValue is what old browsers act on; modern ones need
        // only preventDefault. Both are set because neither alone covers both.
        event.returnValue = ''
    }

    onMounted(() => {
        if (warnOnUnload) {
            window.addEventListener('beforeunload', beforeUnload)
        }
    })

    onBeforeUnmount(() => {
        window.removeEventListener('beforeunload', beforeUnload)
    })

    return { dirty, commit, discard, baseline }
}

/**
 * A stable string for a value, whatever order its keys arrived in.
 *
 * `undefined` VALUES ARE KEPT AS NULL. `JSON.stringify` drops a key whose value
 * is `undefined`, so clearing a field to `undefined` would compare equal to
 * never having had it - a real change that reads as none.
 */
function serialise(value: unknown): string {
    return JSON.stringify(value, (_key, item: unknown) => {
        if (item === undefined) {
            return null
        }

        if (item === null || typeof item !== 'object' || Array.isArray(item)) {
            return item
        }

        return Object.fromEntries(
            Object.entries(item as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b)),
        )
    })
}
