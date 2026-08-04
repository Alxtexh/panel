import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { ref, watch, nextTick } from 'vue'
import { useLiveUpdates, type LiveConfig } from './useLiveUpdates'

/**
 * Event batching: a hundred events must become one render, not a hundred.
 *
 * GETTING THE MEASUREMENT RIGHT WAS MOST OF THE WORK, and two earlier versions
 * of this file measured the wrong thing in opposite directions. Both are the
 * obvious way to write it, so both are worth recording.
 *
 *   A DEFAULT WATCHER FIRING ON SYNCHRONOUS PATCHES MEASURES VUE, NOT US. Vue
 *   coalesces watcher callbacks within a tick, so a hundred patches applied in
 *   one loop fire it once whether or not anything batched them. Deleting the
 *   batcher entirely left five of six tests green.
 *
 *   `flush: 'sync'` OVERCORRECTS. It observes every individual property write,
 *   so `Object.assign(row, {a, b})` counts twice and a burst touching two rows
 *   counts at least twice - with the batcher working perfectly. Three tests then
 *   failed against correct code.
 *
 * THE HONEST SIMULATION IS SEPARATE TICKS. Real events arrive as separate
 * WebSocket messages, each in its own tick - which is exactly the case a batcher
 * exists for, and exactly what a synchronous loop fails to reproduce. So every
 * patch below is awaited, and the render count is Vue's own per-tick coalescing:
 * as close to "times the table re-rendered" as a unit test gets.
 *
 * THIS IS THE FIRST TEST IN `@alxtexh-enterprise/panel`. The package had none - every test in
 * the project was PHPUnit, so nothing client-side had ever been asserted.
 */
describe('useLiveUpdates batching', () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    function setup(overrides: Partial<LiveConfig> = {}) {
        const rows = ref<Record<string, any>[]>([
            { id: 1, name: 'Amina', status: 'active' },
            { id: 2, name: 'Brian', status: 'active' },
        ])

        const config: LiveConfig = {
            driver: 'broadcast',
            intervalMs: 5000,
            batchMs: 250,
            channel: null,
            events: [],
            pauseWhenHidden: false,
            ...overrides,
        }

        /*
         * Deep, because `flush()` mutates rows in place - replacing them would
         * lose DOM nodes and selection, so a shallow watcher never fires.
         *
         * Default scheduling on purpose: one callback per tick is what a render
         * is. See the note above for why sync is wrong here.
         */
        let renders = 0
        watch(
            rows,
            () => {
                renders += 1
            },
            { deep: true },
        )

        const live = useLiveUpdates({ config, rows })

        return { rows, live, renders: () => renders }
    }

    /** One event, arriving in its own tick, as a WebSocket message does. */
    async function arrive(
        live: ReturnType<typeof useLiveUpdates>,
        id: string | number,
        changes: Record<string, unknown>,
    ) {
        live.applyPatch(id, changes)
        await nextTick()
    }

    it('turns a hundred separately-arriving events into a single render', async () => {
        const { live, renders, rows } = setup()

        for (let i = 0; i < 100; i++) {
            await arrive(live, 1, { status: i % 2 === 0 ? 'active' : 'suspended' })
        }

        // The window is still open - a hundred events in, nothing applied.
        expect(renders()).toBe(0)

        vi.advanceTimersByTime(300)
        await nextTick()

        expect(renders()).toBe(1)
        expect(rows.value[0].status).toBe('suspended')
    })

    /**
     * THE LAST VALUE WINS, per field. A burst about one record is usually that
     * record changing repeatedly, and applying every intermediate state renders
     * a row flickering through values that were true for milliseconds.
     */
    it('coalesces repeated changes to one record, keeping the last', async () => {
        const { live, rows, renders } = setup()

        await arrive(live, 1, { status: 'suspended' })
        await arrive(live, 1, { status: 'expired' })
        await arrive(live, 1, { name: 'Amina O.' })

        vi.advanceTimersByTime(300)
        await nextTick()

        // Three events, one render.
        expect(renders()).toBe(1)
        expect(rows.value[0].status).toBe('expired')
        // A field mentioned once survives the merge rather than being dropped by
        // a later patch that did not mention it.
        expect(rows.value[0].name).toBe('Amina O.')
    })

    it('applies a burst spanning several records in one render', async () => {
        const { live, renders, rows } = setup()

        await arrive(live, 1, { status: 'suspended' })
        await arrive(live, 2, { status: 'expired' })

        vi.advanceTimersByTime(300)
        await nextTick()

        expect(renders()).toBe(1)
        expect(rows.value[0].status).toBe('suspended')
        expect(rows.value[1].status).toBe('expired')
    })

    /**
     * THE WINDOW IS A CEILING, NOT A RESET. Each patch must not push the flush
     * further out - under a sustained stream that is indistinguishable from
     * never flushing, and the table sits frozen while events pour in. A
     * leading-edge timer bounds the wait at `batchMs` however long the burst
     * lasts.
     */
    it('does not let a continuous stream postpone the flush forever', async () => {
        const { live, rows, renders } = setup({ batchMs: 100 })

        for (let i = 0; i < 10; i++) {
            live.applyPatch(1, { status: `step-${i}` })
            vi.advanceTimersByTime(50)
            await nextTick()
        }

        /*
         * 500ms of continuous events against a 100ms window: it has flushed
         * several times - not once (starved) and not ten (not batching). A range
         * rather than a number, because where the timer boundaries fall relative
         * to the events is not a property worth pinning.
         */
        expect(renders()).toBeGreaterThan(1)
        expect(renders()).toBeLessThan(10)
        expect(rows.value[0].status).toMatch(/^step-/)
    })

    /**
     * Each burst gets its own render, and each burst is SEVERAL events - one
     * event per burst would give two renders with no batching at all, which is
     * what made an earlier version of this test vacuous.
     */
    it('renders once per burst, not once per event', async () => {
        const { live, renders } = setup()

        await arrive(live, 1, { status: 'suspended' })
        await arrive(live, 2, { status: 'expired' })
        vi.advanceTimersByTime(300)
        await nextTick()

        await arrive(live, 1, { status: 'active' })
        await arrive(live, 2, { status: 'active' })
        vi.advanceTimersByTime(300)
        await nextTick()

        expect(renders()).toBe(2)
    })

    /**
     * A change for a record NOT on this page is dropped rather than inserted - a
     * row created on page 40 must not appear on page 1 and push everything down.
     * Callers that want arrivals pass `onInsert`.
     */
    it('does not render for a record that is not on the page', async () => {
        const { live, renders } = setup()

        await arrive(live, 999, { status: 'suspended' })

        vi.advanceTimersByTime(300)
        await nextTick()

        expect(renders()).toBe(0)
    })
})
