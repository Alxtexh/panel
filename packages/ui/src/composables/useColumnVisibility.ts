import { onMounted, ref, watch } from 'vue'

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
function readStored(storageKey: string): Set<string> {
    if (typeof localStorage === 'undefined') {
        return new Set()
    }

    try {
        const saved = localStorage.getItem(storageKey)

        if (saved) {
            return new Set(JSON.parse(saved) as string[])
        }
    } catch {
        // Corrupt or unavailable storage must never break the table.
    }

    return new Set()
}

export function useColumnVisibility(storageKey: string, defaults?: Set<string>) {
    /*
     * READ NOW, not in onMounted. Dashboard charts that stay hidden must not
     * mount on the first paint: Inertia still fetches every deferred group on
     * the page, and a ChartCard that appears then hides still inits echarts.
     * SSR has no localStorage, so the set starts empty there.
     *
     * When no preference has been stored yet, `defaults` supplies the schema-
     * declared hidden columns (toggleable with isToggledHiddenByDefault).
     */
    const stored = readStored(storageKey)
    const hasStored = typeof localStorage !== 'undefined' && localStorage.getItem(storageKey) !== null
    const hidden = ref<Set<string>>(hasStored ? stored : (defaults ?? new Set()))

    onMounted(() => {
        hidden.value = readStored(storageKey)
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

        if (next.has(key)) {
            next.delete(key)
        } else {
            next.add(key)
        }

        hidden.value = next
    }

    function hide(key: string) {
        const next = new Set(hidden.value)
        next.add(key)
        hidden.value = next
    }

    function show(key: string) {
        const next = new Set(hidden.value)
        next.delete(key)
        hidden.value = next
    }

    /** Replace the whole set at once, for a panel that stages its choices. */
    function setHidden(keys: Set<string>) {
        hidden.value = new Set(keys)
    }

    function reset() {
        hidden.value = new Set()
    }

    return { hidden, toggle, hide, show, setHidden, reset }
}
