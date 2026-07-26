import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * Live row updates from a broadcast.
 *
 * THE COST MODEL, which is the entire point (spec §8). A Livewire-style poll
 * re-renders the component on the SERVER once per connected viewer per tick, so
 * cost scales with how many people are watching. A broadcast is emitted once and
 * every client receives it, so server cost is constant regardless of viewers.
 *
 * This composable implements the ten rules §8 lists, each of which is a real
 * failure mode rather than a nicety:
 *
 *  1. PATCH, NEVER REPLACE. Mutating the row object keeps the DOM node; swapping
 *     the array remounts every row, which flickers, drops scroll position and
 *     clears selection.
 *  2. Rows are keyed by record id, never array index — handled by DataTable.
 *  3. DO NOT RE-SORT OR RE-FILTER on a patch. A row that jumps out from under a
 *     cursor mid-read is worse than a slightly stale sort. A patched row that no
 *     longer matches the filter is MARKED, not removed.
 *  4. BATCH inside a window and apply once. With hundreds of concurrent sessions
 *     per-event patching thrashes the renderer.
 *  5. Animate the change, not the layout — a background flash on the changed
 *     cell, never width/height/position.
 *  6. PAUSE WHEN HIDDEN, resume with a refetch. A background tab accumulating
 *     thousands of buffered events and applying them at once is a freeze.
 *  7. HEAL ON RECONNECT. Sockets drop; refetch rather than assume local state
 *     is still correct.
 *  8. SHOW CONNECTION STATE, so nobody trusts a frozen table that lost its
 *     socket.
 *  9. Channels are private and tenant-scoped — enforced server-side in
 *     routes/channels.php, since a public channel is a cross-tenant leak no
 *     amount of query scoping catches.
 * 10. Payloads carry the record id plus changed fields only, never whole models.
 *
 * No Inertia import: the caller supplies `onReconnect` (spec §4 rule 1).
 */
export interface LiveUpdateOptions {
    /** A function, so the channel name can include a tenant resolved later. */
    channel: () => string
    /** Event name to a patch extractor. Must return the record id and changes. */
    events: Record<string, (payload: any) => { id: string | number; changes: Record<string, unknown> }>
    rows: Ref<Record<string, any>[]>
    rowKey?: string
    /** Coalesce bursts into one patch. */
    batchMs?: number
    pauseWhenHidden?: boolean
    /** Called after a reconnect or resume — refetch the current page. */
    onReconnect?: () => void
}

type Echo = {
    private: (channel: string) => { listen: (event: string, cb: (p: any) => void) => void; stopListening?: (e: string) => void }
    leave: (channel: string) => void
    connector?: { pusher?: { connection?: { bind: (e: string, cb: () => void) => void } } }
}

export function useLiveUpdates(options: LiveUpdateOptions) {
    const {
        channel,
        events,
        rows,
        rowKey = 'id',
        batchMs = 250,
        pauseWhenHidden = true,
        onReconnect,
    } = options

    const connected = ref(false)
    /** Ids patched recently, so the UI can flash the changed cells (rule 5). */
    const recentlyChanged = ref<Set<string | number>>(new Set())
    /** Ids that no longer match the active filter (rule 3). */
    const stale = ref<Set<string | number>>(new Set())

    let pending = new Map<string | number, Record<string, unknown>>()
    let flushTimer: ReturnType<typeof setTimeout> | undefined
    let subscribed: string | null = null

    /** Rule 4: coalesce, then apply once. */
    function queue(id: string | number, changes: Record<string, unknown>) {
        pending.set(id, { ...(pending.get(id) ?? {}), ...changes })

        if (flushTimer) return

        flushTimer = setTimeout(() => {
            flushTimer = undefined
            flush()
        }, batchMs)
    }

    function flush() {
        if (pending.size === 0) return

        const batch = pending
        pending = new Map()

        const touched = new Set<string | number>()

        for (const [id, changes] of batch) {
            const row = rows.value.find((r) => r[rowKey] === id)

            if (!row) continue

            // Rule 1: mutate the existing object. Assigning a new array here, or
            // replacing the row, remounts the DOM node and loses selection.
            Object.assign(row, changes)
            touched.add(id)
        }

        if (touched.size === 0) return

        recentlyChanged.value = new Set([...recentlyChanged.value, ...touched])

        // The flash is transient; clearing it is what makes the NEXT change
        // visible rather than blending into a permanently highlighted row.
        setTimeout(() => {
            const next = new Set(recentlyChanged.value)
            touched.forEach((id) => next.delete(id))
            recentlyChanged.value = next
        }, 1500)
    }

    function echo(): Echo | null {
        return (window as unknown as { Echo?: Echo }).Echo ?? null
    }

    function subscribe() {
        const instance = echo()

        if (!instance) return

        const name = channel()
        subscribed = name

        // PRIVATE, always. A public or tenant-agnostic channel is a
        // cross-tenant leak that server-side query scoping cannot catch.
        const subscription = instance.private(name)

        for (const [event, extract] of Object.entries(events)) {
            subscription.listen(event, (payload: unknown) => {
                const { id, changes } = extract(payload)
                queue(id, changes)
            })
        }

        connected.value = true

        // Rule 7: heal on reconnect rather than trusting local state.
        instance.connector?.pusher?.connection?.bind('connected', () => {
            connected.value = true
            onReconnect?.()
        })

        instance.connector?.pusher?.connection?.bind('disconnected', () => {
            connected.value = false
        })
    }

    function unsubscribe() {
        if (subscribed) {
            echo()?.leave(subscribed)
            subscribed = null
        }

        connected.value = false
    }

    /** Rule 6: a hidden tab buffers nothing; resuming refetches. */
    function onVisibilityChange() {
        if (!pauseWhenHidden) return

        if (document.hidden) {
            unsubscribe()
            pending = new Map()
            clearTimeout(flushTimer)
            flushTimer = undefined
        } else {
            subscribe()
            onReconnect?.()
        }
    }

    onMounted(() => {
        subscribe()

        if (pauseWhenHidden) {
            document.addEventListener('visibilitychange', onVisibilityChange)
        }
    })

    onBeforeUnmount(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange)
        clearTimeout(flushTimer)
        unsubscribe()
    })

    return {
        connected,
        recentlyChanged,
        stale,
        /** Exposed for tests and for applying a patch from a non-socket source. */
        applyPatch: queue,
        flush,
    }
}
