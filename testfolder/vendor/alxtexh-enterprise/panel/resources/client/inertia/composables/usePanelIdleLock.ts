import { router, usePage } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

/**
 * Client idle timer for a panel that shared `panelIdleLock`.
 *
 * ACTIVITY EVENTS reset the clock: mousedown, keydown, touchstart, scroll,
 * click. A background tab uses visibilitychange so returning after the idle
 * window locks immediately rather than waiting for the next interval tick.
 *
 * THE TIMER DOES NOT RUN on the lock screen or other auth pages. Locking the
 * lock screen is a loop, and a signed-out form has no session to protect.
 */

export type PanelIdleLockShared = {
    idleMinutes: number
    warningSeconds: number
    lockUrl: string
}

export function usePanelIdleLock() {
    const page = usePage()

    const config = computed((): PanelIdleLockShared | null => {
        const value = (page.props as { panelIdleLock?: PanelIdleLockShared | null }).panelIdleLock

        return value?.lockUrl ? value : null
    })

    const warningSecondsLeft = ref(0)
    const warningOpen = computed(() => warningSecondsLeft.value > 0)

    let lastActivity = Date.now()
    let interval: ReturnType<typeof setInterval> | null = null
    let locking = false

    function isAuthPage(): boolean {
        const component = String(page.component ?? '')
        const url = String(page.url ?? '')

        if (/auth\//i.test(component) || /LockScreen/i.test(component)) {
            return true
        }

        return /\/(login|register|forgot-password|reset-password|two-factor|screens\/locked)(\/|$|\?)/i.test(
            url,
        )
    }

    function enabled(): boolean {
        return config.value !== null && !isAuthPage()
    }

    function resetActivity(): void {
        lastActivity = Date.now()
        warningSecondsLeft.value = 0
        locking = false
    }

    function lockNow(): void {
        const url = config.value?.lockUrl

        if (!url || locking) {
            return
        }

        locking = true
        warningSecondsLeft.value = 0
        router.post(url)
    }

    function elapsedMs(): number {
        return Date.now() - lastActivity
    }

    function tick(): void {
        if (!enabled()) {
            warningSecondsLeft.value = 0

            return
        }

        const idleMs = config.value!.idleMinutes * 60_000
        const warnMs = Math.max(0, config.value!.warningSeconds) * 1000
        const remaining = idleMs - elapsedMs()

        if (remaining <= 0) {
            lockNow()

            return
        }

        if (warnMs > 0 && remaining <= warnMs) {
            warningSecondsLeft.value = Math.max(1, Math.ceil(remaining / 1000))

            return
        }

        warningSecondsLeft.value = 0
    }

    function onVisibility(): void {
        if (document.visibilityState !== 'visible' || !enabled()) {
            return
        }

        tick()
    }

    const activityEvents = ['mousedown', 'keydown', 'touchstart', 'scroll', 'click'] as const

    function onActivity(): void {
        if (!enabled()) {
            return
        }

        resetActivity()
    }

    function start(): void {
        stop()

        if (!enabled()) {
            return
        }

        resetActivity()

        for (const event of activityEvents) {
            window.addEventListener(event, onActivity, { passive: true })
        }

        document.addEventListener('visibilitychange', onVisibility)
        interval = setInterval(tick, 1000)
    }

    function stop(): void {
        for (const event of activityEvents) {
            window.removeEventListener(event, onActivity)
        }

        document.removeEventListener('visibilitychange', onVisibility)

        if (interval !== null) {
            clearInterval(interval)
            interval = null
        }

        warningSecondsLeft.value = 0
    }

    onMounted(start)

    watch(
        () => [config.value?.lockUrl, page.component, page.url],
        () => start(),
    )

    onBeforeUnmount(stop)

    return {
        config,
        warningOpen,
        warningSecondsLeft,
        lockNow,
        dismissWarning: resetActivity,
    }
}
