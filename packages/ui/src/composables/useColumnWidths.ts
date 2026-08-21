import { onMounted, ref, watch } from 'vue'

/**
 * Column widths in pixels, persisted per user in localStorage.
 *
 * Same SSR-safe pattern as `useColumnVisibility`: read immediately when
 * localStorage exists, re-read on mount, never throw on quota / private mode.
 */
function readStored(storageKey: string): Record<string, number> {
    if (typeof localStorage === 'undefined') {
        return {}
    }

    try {
        const saved = localStorage.getItem(storageKey)

        if (!saved) {
            return {}
        }

        const parsed = JSON.parse(saved) as Record<string, unknown>
        const out: Record<string, number> = {}

        for (const [key, value] of Object.entries(parsed)) {
            if (typeof value === 'number' && value >= 48 && value <= 1200) {
                out[key] = value
            }
        }

        return out
    } catch {
        return {}
    }
}

export function useColumnWidths(storageKey: string) {
    const widths = ref<Record<string, number>>(readStored(storageKey))

    onMounted(() => {
        widths.value = readStored(storageKey)
    })

    watch(
        widths,
        (value) => {
            try {
                localStorage.setItem(storageKey, JSON.stringify(value))
            } catch {
                // Private mode / quota. Non-fatal.
            }
        },
        { deep: true, flush: 'sync' },
    )

    function setWidth(key: string, width: number) {
        const px = Math.min(1200, Math.max(48, Math.round(width)))
        widths.value = { ...widths.value, [key]: px }
    }

    function setWidths(next: Record<string, number>) {
        const cleaned: Record<string, number> = {}

        for (const [key, value] of Object.entries(next)) {
            if (typeof value === 'number' && value >= 48 && value <= 1200) {
                cleaned[key] = Math.round(value)
            }
        }

        widths.value = cleaned
    }

    function reset() {
        widths.value = {}
    }

    return { widths, setWidth, setWidths, reset }
}
