import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

/**
 * Keeps rows fresh, WITHOUT caring how the change arrives.
 *
 * An earlier version hardcoded Laravel Echo, which meant live updates needed a
 * Reverb process running before anything moved on screen - a dependency
 * masquerading as a feature. The ten §8 rules are about APPLYING a change, not
 * receiving one, so the transport is now a driver and the rules are shared:
 *
 *   none       off
 *   poll       default; zero infrastructure, works on plain PHP-FPM
 *   broadcast  Reverb / Pusher / Ably; true push, constant server cost
 *
 * Swapping drivers is a config change. Nothing in a page or component knows
 * which is active, so `poll` in development and `broadcast` in production is a
 * deployment decision rather than a rewrite.
 *
 * THE RULES, applied identically whichever driver is in use:
 *
 *  1. PATCH, NEVER REPLACE - mutate the row object. Replacing the array
 *     remounts every row, which flickers, drops scroll and clears selection.
 *  2. Key by record id, never array index (DataTable's job).
 *  3. DO NOT RE-SORT OR RE-FILTER on a patch. A row jumping out from under a
 *     cursor mid-read is worse than a slightly stale sort.
 *  4. BATCH inside a window and apply once.
 *  5. Animate the CHANGE, not the layout - a background flash, never geometry.
 *  6. PAUSE WHEN HIDDEN, resume with a refetch.
 *  7. HEAL ON RECONNECT rather than trusting local state.
 *  8. SHOW CONNECTION STATE, so nobody trusts a frozen table.
 *  9. Channels private and tenant-scoped (enforced server-side).
 * 10. Lean payloads: id plus changed fields, never whole models.
 *
 * Imports no Inertia - the caller supplies `fetchChanges` and `onResync`.
 */
export interface LiveConfig {
    driver: 'none' | 'poll' | 'broadcast'
    intervalMs: number
    batchMs: number
    channel: string | null
    events: string[]
    pauseWhenHidden: boolean
}

export interface LiveUpdateOptions {
    config: LiveConfig
    rows: Ref<Record<string, any>[]>
    rowKey?: string
    /**
     * Poll driver only. Given the visible ids and a timestamp, return the rows
     * that changed. The caller owns the request, so this package stays free of
     * any HTTP client.
     */
    fetchChanges?: (
        ids: (string | number)[],
        since: string,
    ) => Promise<{ records: Record<string, any>[]; at: string }>
    /** Called after a resume or reconnect - refetch the current page. */
    onResync?: () => void
    /**
     * A change arrived for a record that is NOT on the page.
     *
     * WITHOUT THIS, A NEW RECORD IS SILENTLY DROPPED. `flush()` patches rows it
     * can find and skips the rest, which is correct for a paged table - a row
     * created on page 40 must not appear on page 1 and push everything down.
     *
     * It is exactly wrong for the two cases where arrival IS the event: a chat
     * thread, where a new message is the whole point, and a live "currently
     * online" list, where a session appearing is what somebody is watching for.
     * Those pass a handler; everything else keeps the old behaviour, which is
     * the safe default rather than an oversight.
     */
    onInsert?: (id: string | number, changes: Record<string, unknown>) => void
}

type EchoLike = {
    private: (channel: string) => {
        listen: (event: string, cb: (p: any) => void) => void
    }
    leave: (channel: string) => void
    connector?: {
        pusher?: { connection?: { bind: (e: string, cb: () => void) => void } }
    }
}

export function useLiveUpdates(options: LiveUpdateOptions) {
    const { config, rows, rowKey = 'id', fetchChanges, onResync, onInsert } = options

    /** 'live' | 'connecting' | 'paused' | 'off' - surfaced so a frozen table is never silently trusted (rule 8). */
    const status = ref<'live' | 'connecting' | 'paused' | 'off'>(
        config.driver === 'none' ? 'off' : 'connecting',
    )
    const recentlyChanged = ref<Set<string | number>>(new Set())

    let pending = new Map<string | number, Record<string, unknown>>()
    let flushTimer: ReturnType<typeof setTimeout> | undefined
    let pollTimer: ReturnType<typeof setInterval> | undefined
    let inFlight: AbortController | undefined
    let since = new Date().toISOString()
    let subscribed: string | null = null

    /** Rule 4: coalesce a burst, apply once. */
    function queue(id: string | number, changes: Record<string, unknown>) {
        pending.set(id, { ...(pending.get(id) ?? {}), ...changes })

        if (flushTimer) {
            return
        }

        flushTimer = setTimeout(() => {
            flushTimer = undefined
            flush()
        }, config.batchMs)
    }

    function flush() {
        if (pending.size === 0) {
            return
        }

        const batch = pending
        pending = new Map()
        const touched = new Set<string | number>()

        for (const [id, changes] of batch) {
            const row = rows.value.find((r) => r[rowKey] === id)

            if (!row) {
                // Not on the page. Only a caller that WANTS arrivals hears
                // about it - see `onInsert`.
                onInsert?.(id, changes)

                continue
            }

            // Rule 1. Mutating keeps the DOM node; replacing loses selection.
            // Rule 3: no re-sort, no re-filter - position is left alone.
            Object.assign(row, changes)
            touched.add(id)
        }

        if (touched.size === 0) {
            return
        }

        recentlyChanged.value = new Set([...recentlyChanged.value, ...touched])

        // Rule 5. Clearing the flag is what makes the NEXT change visible
        // rather than leaving a permanently highlighted row.
        setTimeout(() => {
            const next = new Set(recentlyChanged.value)
            touched.forEach((id) => next.delete(id))
            recentlyChanged.value = next
        }, 1500)
    }

    /* ---------------------------------------------------------------- poll */

    async function pollOnce() {
        if (!fetchChanges || rows.value.length === 0) {
            return
        }

        // A slow response must never overwrite a newer one.
        inFlight?.abort()
        inFlight = new AbortController()

        try {
            const ids = rows.value.map((r) => r[rowKey] as string | number)
            const { records, at } = await fetchChanges(ids, since)

            // The SERVER's clock. A client whose clock runs slow would re-ask
            // for the same window forever; one running fast would skip changes.
            since = at
            status.value = 'live'

            for (const record of records) {
                queue(record[rowKey], record)
            }
        } catch {
            // A failed poll is not fatal - the table is simply as fresh as its
            // last success. Surfaced through status rather than thrown.
            status.value = 'connecting'
        }
    }

    function startPolling() {
        stopPolling()
        status.value = 'live'
        pollTimer = setInterval(pollOnce, config.intervalMs)
    }

    function stopPolling() {
        clearInterval(pollTimer)
        pollTimer = undefined
        inFlight?.abort()
    }

    /* ----------------------------------------------------------- broadcast */

    function echo(): EchoLike | null {
        return (window as unknown as { Echo?: EchoLike }).Echo ?? null
    }

    function startBroadcast() {
        const instance = echo()

        if (!instance || !config.channel) {
            // Configured for broadcast but Echo is absent. Say so rather than
            // sitting silently on a table that will never update.
            status.value = 'connecting'
            console.warn(
                '[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.',
            )

            return
        }

        subscribed = config.channel

        // Rule 9: private, always. A public channel is a cross-tenant leak that
        // server-side query scoping cannot catch.
        const subscription = instance.private(config.channel)

        for (const event of config.events) {
            subscription.listen(event, (payload: Record<string, any>) => {
                // Rule 10: the payload carries an id and changed fields only.
                if (payload?.[rowKey] !== undefined) {
                    queue(payload[rowKey], payload)
                }
            })
        }

        status.value = 'live'

        instance.connector?.pusher?.connection?.bind('connected', () => {
            status.value = 'live'
            onResync?.() // Rule 7.
        })

        instance.connector?.pusher?.connection?.bind('disconnected', () => {
            status.value = 'connecting'
        })
    }

    function stopBroadcast() {
        if (subscribed) {
            echo()?.leave(subscribed)
            subscribed = null
        }
    }

    /* -------------------------------------------------------------- shared */

    function start() {
        if (config.driver === 'poll') {
            startPolling()
        }

        if (config.driver === 'broadcast') {
            startBroadcast()
        }
    }

    function stop() {
        stopPolling()
        stopBroadcast()
        clearTimeout(flushTimer)
        flushTimer = undefined
        pending = new Map()
    }

    /** Rule 6: a hidden tab buffers nothing; resuming refetches. */
    function onVisibilityChange() {
        if (!config.pauseWhenHidden) {
            return
        }

        if (document.hidden) {
            stop()
            status.value = 'paused'
        } else {
            since = new Date().toISOString()
            start()
            onResync?.()
        }
    }

    onMounted(() => {
        if (config.driver === 'none') {
            return
        }

        start()

        if (config.pauseWhenHidden) {
            document.addEventListener('visibilitychange', onVisibilityChange)
        }
    })

    onBeforeUnmount(() => {
        document.removeEventListener('visibilitychange', onVisibilityChange)
        stop()
    })

    return { status, recentlyChanged, applyPatch: queue, flush, pollOnce }
}
