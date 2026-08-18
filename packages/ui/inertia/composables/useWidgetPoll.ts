import { onMounted, onUnmounted, watch, type MaybeRefOrGetter, toValue } from 'vue'
import { router } from '@inertiajs/vue3'

/**
 * Reload one or more deferred Inertia props on an interval.
 *
 * Pauses while the tab is hidden (same rule as Monitoring). A widget that did
 * not declare `poll` passes null and this is a no-op.
 */
export function useWidgetPoll(
    keys: MaybeRefOrGetter<string[]>,
    intervalMs: MaybeRefOrGetter<number | null | undefined>,
): void {
    let timer: ReturnType<typeof setInterval> | null = null

    function stop(): void {
        if (timer !== null) {
            clearInterval(timer)
            timer = null
        }
    }

    function tick(): void {
        if (typeof document !== 'undefined' && document.hidden) {
            return
        }

        const only = toValue(keys).filter(Boolean)

        if (only.length === 0) {
            return
        }

        router.reload({ only, preserveState: true, preserveScroll: true })
    }

    function start(): void {
        stop()

        const ms = toValue(intervalMs)

        if (!ms || ms < 1000) {
            return
        }

        timer = setInterval(tick, ms)
    }

    function onVisibility(): void {
        if (typeof document !== 'undefined' && document.hidden) {
            stop()
        } else {
            start()
        }
    }

    onMounted(() => {
        start()
        document.addEventListener('visibilitychange', onVisibility)
    })

    onUnmounted(() => {
        stop()
        document.removeEventListener('visibilitychange', onVisibility)
    })

    watch(() => toValue(intervalMs), start)
}
