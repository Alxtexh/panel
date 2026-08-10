import type { Ref } from 'vue';
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
    driver: 'none' | 'poll' | 'broadcast';
    intervalMs: number;
    batchMs: number;
    channel: string | null;
    events: string[];
    pauseWhenHidden: boolean;
}
export interface LiveUpdateOptions {
    config: LiveConfig;
    rows: Ref<Record<string, any>[]>;
    rowKey?: string;
    /**
     * Poll driver only. Given the visible ids and a timestamp, return the rows
     * that changed. The caller owns the request, so this package stays free of
     * any HTTP client.
     */
    fetchChanges?: (ids: (string | number)[], since: string) => Promise<{
        records: Record<string, any>[];
        at: string;
    }>;
    /** Called after a resume or reconnect - refetch the current page. */
    onResync?: () => void;
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
    onInsert?: (id: string | number, changes: Record<string, unknown>) => void;
}
export declare function useLiveUpdates(options: LiveUpdateOptions): {
    status: Ref<"off" | "live" | "connecting" | "paused", "off" | "live" | "connecting" | "paused">;
    recentlyChanged: Ref<Set<string | number> & Omit<Set<string | number>, keyof Set<any>>, Set<string | number> | (Set<string | number> & Omit<Set<string | number>, keyof Set<any>>)>;
    applyPatch: (id: string | number, changes: Record<string, unknown>) => void;
    flush: () => void;
    pollOnce: () => Promise<void>;
};
