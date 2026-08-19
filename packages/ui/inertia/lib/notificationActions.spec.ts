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

const { flashToastHrefs, linkedNotificationActions, showFlashToast } = await import(
    './notificationActions'
)
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
})
