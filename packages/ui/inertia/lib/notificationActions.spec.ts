import { describe, expect, it, vi } from 'vitest'

vi.mock('@inertiajs/vue3', () => ({
    router: { post: vi.fn() },
}))

vi.mock('vue-sonner', () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
        warning: vi.fn(),
        info: vi.fn(),
    },
}))

const { flashToastHrefs, linkedNotificationActions, showFlashToast } =
    await import('./notificationActions')
const { toast } = await import('vue-sonner')

describe('notification actions', () => {
    it('keeps a toast without actions working', () => {
        showFlashToast({ type: 'success', message: 'Saved' })

        expect(toast.success).toHaveBeenCalledWith('Saved')
    })

    it('puts action hrefs on the toast description', () => {
        const hrefs = flashToastHrefs({
            message: 'Invoice posted',
            actions: [
                { key: 'view', label: 'View', href: '/invoices/1' },
                {
                    key: 'download',
                    label: 'Download',
                    href: '/invoices/1.pdf',
                    newTab: true,
                },
            ],
        })

        expect(hrefs).toEqual(['/invoices/1', '/invoices/1.pdf'])
    })

    it('drops actions that have no href', () => {
        expect(
            linkedNotificationActions([
                { key: 'view', label: 'View', href: '/invoices/1' },
                { key: 'noop', label: 'Nope' },
            ]),
        ).toEqual([{ key: 'view', label: 'View', href: '/invoices/1' }])
    })

    it('passes duration through to sonner', () => {
        showFlashToast({ type: 'info', message: 'Building', duration: 8000 })

        expect(toast.info).toHaveBeenCalledWith('Building', { duration: 8000 })
    })

    it('maps persistent to an infinite duration, ignoring a duration alongside it', () => {
        showFlashToast({
            type: 'warning',
            message: 'Action needed',
            persistent: true,
            duration: 8000,
        })

        expect(toast.warning).toHaveBeenCalledWith('Action needed', {
            duration: Number.POSITIVE_INFINITY,
        })
    })

    it('overrides the icon colour independently of type', () => {
        showFlashToast({ type: 'info', message: 'Heads up', iconColor: 'danger' })

        const options = vi.mocked(toast.info).mock.calls.at(-1)?.[1] as { icon?: unknown }

        expect(options?.icon).toBeDefined()
    })

    it('sends no options object when nothing needs one', () => {
        showFlashToast({ type: 'success', message: 'Plain' })

        expect(toast.success).toHaveBeenCalledWith('Plain')
    })
})
