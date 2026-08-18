import { onMounted, onUnmounted, watch, type MaybeRefOrGetter, toValue } from 'vue'
import { router } from '@inertiajs/vue3'

/**
 * Keep one widget's deferred prop fresh.
 *
 * Priority, and why:
 *
 *   1. Reverb / Echo when `window.Echo` exists AND the widget declared
 *      `->live('dashboard.stats')`. Push, no periodic HTTP, scales to many
 *      open dashboards. The kit never constructs Echo; a stock install with
 *      Echo undefined is fine.
 *
 *   2. HTTP poll when Echo is absent (or no channel is set) and `->poll()`
 *      gave an interval. Works everywhere. Cost is N widgets times the
 *      interval in requests. Pauses while the tab is hidden.
 *
 * Never both for the same widget. Redis is not a UI transport: use it as
 * Laravel's cache / queue / broadcast backend when the host already runs it.
 *
 * A refresh is an Inertia partial (`router.reload({ only })`), JSON for those
 * props, not a full visit. There is no Livewire.
 *
 * The host broadcasts; this only subscribes. Default event: `.WidgetUpdated`.
 */
export const WIDGET_LIVE_EVENT = 'WidgetUpdated'

type EchoChannel = {
    listen: (event: string, cb: () => void) => unknown
}

type EchoLike = {
    private?: (channel: string) => EchoChannel
    channel?: (channel: string) => EchoChannel
    leave?: (channel: string) => void
}

export function echoClient(): EchoLike | null {
    if (typeof window === 'undefined') {
        return null
    }

    const value = (window as unknown as { Echo?: unknown }).Echo

    if (value === null || value === undefined || typeof value !== 'object') {
        return null
    }

    const client = value as EchoLike

    if (typeof client.private !== 'function' && typeof client.channel !== 'function') {
        return null
    }

    return client
}

export function canUseEcho(channel: string | null | undefined): boolean {
    const name = channel?.trim()

    return Boolean(name && echoClient())
}

function subscribe(instance: EchoLike, name: string): EchoChannel | null {
    try {
        const sub = instance.private?.(name) ?? instance.channel?.(name)

        if (!sub || typeof sub.listen !== 'function') {
            return null
        }

        return sub
    } catch {
        return null
    }
}

export function useWidgetPoll(
    keys: MaybeRefOrGetter<string[]>,
    intervalMs: MaybeRefOrGetter<number | null | undefined>,
    liveChannel: MaybeRefOrGetter<string | null | undefined> = null,
): void {
    let timer: ReturnType<typeof setInterval> | null = null
    let subscribed: string | null = null

    function stopPoll(): void {
        if (timer !== null) {
            clearInterval(timer)
            timer = null
        }
    }

    function stopEcho(): void {
        if (subscribed !== null) {
            echoClient()?.leave?.(subscribed)
            subscribed = null
        }
    }

    function stop(): void {
        stopPoll()
        stopEcho()
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

    function startEcho(channel: string): boolean {
        const instance = echoClient()

        if (!instance) {
            return false
        }

        const sub = subscribe(instance, channel)

        if (!sub) {
            return false
        }

        sub.listen(`.${WIDGET_LIVE_EVENT}`, tick)
        subscribed = channel

        return true
    }

    function startPoll(ms: number): void {
        timer = setInterval(tick, ms)
    }

    function start(): void {
        stop()

        const channel = toValue(liveChannel)?.trim() || null

        if (channel && startEcho(channel)) {
            return
        }

        const ms = toValue(intervalMs)

        if (!ms || ms < 1000) {
            return
        }

        startPoll(ms)
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

    watch(
        () => [toValue(intervalMs), toValue(liveChannel), toValue(keys).join('\0')] as const,
        start,
    )
}

/**
 * One composable, many Echo channels: a dashboard strip cannot call
 * `useWidgetPoll` in a loop. Poll fallback stays on `useWidgetPoll`.
 */
export function useWidgetChannels(
    entries: MaybeRefOrGetter<Array<{ keys: string[]; channel: string | null | undefined }>>,
): void {
    let subscribed: string[] = []

    function stop(): void {
        const instance = echoClient()

        for (const name of subscribed) {
            instance?.leave?.(name)
        }

        subscribed = []
    }

    function tickKeys(only: string[]): void {
        if (typeof document !== 'undefined' && document.hidden) {
            return
        }

        const keys = only.filter(Boolean)

        if (keys.length === 0) {
            return
        }

        router.reload({ only: keys, preserveState: true, preserveScroll: true })
    }

    function start(): void {
        stop()

        const instance = echoClient()

        if (!instance) {
            return
        }

        const grouped = new Map<string, string[]>()

        for (const entry of toValue(entries)) {
            const channel = entry.channel?.trim()

            if (!channel) {
                continue
            }

            grouped.set(channel, [...(grouped.get(channel) ?? []), ...entry.keys.filter(Boolean)])
        }

        for (const [channel, keys] of grouped) {
            const sub = subscribe(instance, channel)

            if (!sub) {
                continue
            }

            sub.listen(`.${WIDGET_LIVE_EVENT}`, () => tickKeys(keys))
            subscribed.push(channel)
        }
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

    watch(
        () =>
            toValue(entries)
                .map((entry) => `${entry.channel ?? ''}:${entry.keys.join(',')}`)
                .join('|'),
        start,
    )
}
