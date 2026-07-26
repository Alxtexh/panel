import { onMounted, ref, watch } from 'vue'

/**
 * Column visibility, persisted per user in localStorage (spec §8).
 *
 * No Inertia, no fetch — it is browser state, so it belongs in the UI package.
 *
 * Reading happens in onMounted rather than at setup time so this stays safe
 * under server-side rendering, where `localStorage` does not exist. Every access
 * is guarded: private mode and quota-exceeded both throw, and a table that
 * refuses to render because it could not remember a column preference would be
 * a bad trade.
 */
export function useColumnVisibility(storageKey: string) {
    const hidden = ref<Set<string>>(new Set())

    onMounted(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            if (saved) hidden.value = new Set(JSON.parse(saved) as string[])
        } catch {
            // Corrupt or unavailable storage must never break the table.
        }
    })

    watch(
        hidden,
        (value) => {
            try {
                localStorage.setItem(storageKey, JSON.stringify([...value]))
            } catch {
                // Private mode / quota. Non-fatal.
            }
        },
        { deep: true },
    )

    function toggle(key: string) {
        const next = new Set(hidden.value)
        next.has(key) ? next.delete(key) : next.add(key)
        hidden.value = next
    }

    function reset() {
        hidden.value = new Set()
    }

    return { hidden, toggle, reset }
}
