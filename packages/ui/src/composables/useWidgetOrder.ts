import { computed, ref } from 'vue'

/**
 * Drag-reorder for dashboard widgets, persisted in localStorage.
 *
 * Uses the same native HTML5 drag approach as DataTable reordering.
 * The order is stored as an array of widget keys; widgets not in the
 * stored order appear at the end in their declared position.
 */
function readOrder(storageKey: string): string[] {
    if (typeof localStorage === 'undefined') {
        return []
    }

    try {
        const saved = localStorage.getItem(storageKey)
        if (saved) {
            return JSON.parse(saved) as string[]
        }
    } catch {
        // Corrupt or unavailable storage.
    }

    return []
}

function writeOrder(storageKey: string, order: string[]): void {
    try {
        localStorage.setItem(storageKey, JSON.stringify(order))
    } catch {
        // Private mode / quota.
    }
}

export function useWidgetOrder<T extends { key: string }>(storageKey: string, items: () => T[]) {
    const storedOrder = ref<string[]>(readOrder(storageKey))

    const ordered = computed<T[]>(() => {
        const source = items()
        if (storedOrder.value.length === 0) {
            return source
        }

        const byKey = new Map(source.map((item) => [item.key, item]))
        const result: T[] = []

        for (const key of storedOrder.value) {
            const item = byKey.get(key)
            if (item) {
                result.push(item)
                byKey.delete(key)
            }
        }

        for (const item of byKey.values()) {
            result.push(item)
        }

        return result
    })

    const dragging = ref<number | null>(null)
    const dragOver = ref<number | null>(null)

    function onDragStart(index: number, event: DragEvent) {
        dragging.value = index
        event.dataTransfer?.setData('text/plain', String(index))
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move'
        }
    }

    function onDragOver(index: number, event: DragEvent) {
        event.preventDefault()
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move'
        }
        dragOver.value = index
    }

    function onDrop(index: number) {
        if (dragging.value === null || dragging.value === index) {
            onDragEnd()
            return
        }

        const current = ordered.value.map((item) => item.key)
        const [moved] = current.splice(dragging.value, 1)
        current.splice(index, 0, moved)

        storedOrder.value = current
        writeOrder(storageKey, current)
        onDragEnd()
    }

    function onDragEnd() {
        dragging.value = null
        dragOver.value = null
    }

    function reset() {
        storedOrder.value = []
        try {
            localStorage.removeItem(storageKey)
        } catch {
            // Non-fatal.
        }
    }

    return { ordered, dragging, dragOver, onDragStart, onDragOver, onDrop, onDragEnd, reset }
}
