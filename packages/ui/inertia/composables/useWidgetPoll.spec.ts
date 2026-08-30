import { router } from '@inertiajs/vue3'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { defineComponent, h } from 'vue'
import { useWidgetPoll } from './useWidgetPoll'

vi.mock('@inertiajs/vue3', () => ({
    router: {
        reload: vi.fn(),
    },
}))

type EchoMock = {
    private: ReturnType<typeof vi.fn>
    leave: ReturnType<typeof vi.fn>
}

function mountPoll(keys: string[], intervalMs: number | null, live: string | null) {
    return mount(
        defineComponent({
            setup() {
                useWidgetPoll(keys, intervalMs, live)

                return () => h('div')
            },
        }),
    )
}

describe('useWidgetPoll', () => {
    beforeEach(() => {
        vi.useFakeTimers()
        vi.mocked(router.reload).mockReset()
        delete (window as unknown as { Echo?: EchoMock }).Echo
    })

    afterEach(() => {
        vi.useRealTimers()
        delete (window as unknown as { Echo?: EchoMock }).Echo
    })

    it('polls when Echo is absent', () => {
        const interval = vi.spyOn(globalThis, 'setInterval')
        const wrapper = mountPoll(['stat_online'], 10_000, null)

        expect(interval).toHaveBeenCalled()
        vi.advanceTimersByTime(10_000)
        expect(router.reload).toHaveBeenCalledWith({
            only: ['stat_online'],
        })

        wrapper.unmount()
        interval.mockRestore()
    })

    it('polls when a live channel is set but Echo is absent', () => {
        const interval = vi.spyOn(globalThis, 'setInterval')
        const wrapper = mountPoll(['stat_online'], 10_000, 'dashboard.stats')

        expect(interval).toHaveBeenCalled()
        vi.advanceTimersByTime(10_000)
        expect(router.reload).toHaveBeenCalledTimes(1)

        wrapper.unmount()
        interval.mockRestore()
    })

    it('does not start an interval when Echo and a channel are present', () => {
        const listen = vi.fn()
        const leave = vi.fn()
        const echo = {
            private: vi.fn(() => ({ listen })),
            leave,
        }
        ;(window as unknown as { Echo: EchoMock }).Echo = echo

        const interval = vi.spyOn(globalThis, 'setInterval')
        const wrapper = mountPoll(['stat_online'], 10_000, 'dashboard.stats')

        expect(interval).not.toHaveBeenCalled()
        expect(echo.private).toHaveBeenCalledWith('dashboard.stats')
        expect(listen).toHaveBeenCalled()
        expect(router.reload).not.toHaveBeenCalled()

        vi.advanceTimersByTime(30_000)
        expect(router.reload).not.toHaveBeenCalled()

        wrapper.unmount()
        expect(leave).toHaveBeenCalledWith('dashboard.stats')
        interval.mockRestore()
    })

    it('refreshes the widget payload when the Echo channel fires', () => {
        let handler: (() => void) | undefined
        ;(window as unknown as { Echo: EchoMock }).Echo = {
            private: vi.fn(() => ({
                listen: vi.fn((_event: string, cb: () => void) => {
                    handler = cb
                }),
            })),
            leave: vi.fn(),
        }

        const interval = vi.spyOn(globalThis, 'setInterval')
        const wrapper = mountPoll(['stat_online'], 10_000, 'dashboard.stats')

        expect(interval).not.toHaveBeenCalled()
        expect(handler).toBeTypeOf('function')
        handler?.()
        expect(router.reload).toHaveBeenCalledTimes(1)
        expect(router.reload).toHaveBeenCalledWith({
            only: ['stat_online'],
        })

        wrapper.unmount()
        interval.mockRestore()
    })

    it('does nothing when Echo is absent and no poll interval is set', () => {
        const interval = vi.spyOn(globalThis, 'setInterval')
        const wrapper = mountPoll(['stat_online'], null, 'dashboard.stats')

        expect(interval).not.toHaveBeenCalled()
        expect(router.reload).not.toHaveBeenCalled()

        wrapper.unmount()
        interval.mockRestore()
    })
})
