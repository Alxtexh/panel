import { mount, flushPromises } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const page = {
    props: {
        notificationCount: 1,
        panel: { path: '/' },
    },
}

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    router: { post: vi.fn() },
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    PkSlideover: {
        props: ['open', 'side', 'title', 'width'],
        template: '<div v-if="open"><slot /><slot name="footer" /></div>',
    },
}))

const { default: PanelNotificationBell } = await import('./PanelNotificationBell.vue')

describe('PanelNotificationBell', () => {
    beforeEach(() => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({
                ok: true,
                json: async () => ({
                    alerts: [],
                    unread: 1,
                    canAnnounce: false,
                    notifications: [
                        {
                            id: 'n1',
                            title: 'Invoice posted',
                            body: 'INV-12',
                            href: '/invoices/12',
                            severity: 'success',
                            read: false,
                            at: 'now',
                            actions: [
                                { key: 'view', label: 'View', href: '/invoices/12' },
                                {
                                    key: 'download',
                                    label: 'Download',
                                    href: '/invoices/12.pdf',
                                    newTab: true,
                                },
                            ],
                        },
                    ],
                }),
            })),
        )
    })

    it('renders action hrefs on an inbox row', async () => {
        const wrapper = mount(PanelNotificationBell)

        await wrapper.get('[data-notification-bell]').trigger('click')
        await flushPromises()

        const inbox = wrapper.findAll('button').find((button) => button.text().includes('Inbox'))
        await inbox?.trigger('click')

        const hrefs = wrapper
            .findAll('[data-notification-action]')
            .map((el) => el.attributes('href'))

        expect(hrefs).toEqual(['/invoices/12', '/invoices/12.pdf'])
    })

    it('still renders a row that has no actions', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({
                ok: true,
                json: async () => ({
                    alerts: [],
                    unread: 0,
                    canAnnounce: false,
                    notifications: [
                        {
                            id: 'n2',
                            title: 'Ready',
                            body: 'Exported.',
                            href: null,
                            severity: 'info',
                            read: true,
                            at: null,
                        },
                    ],
                }),
            })),
        )

        const wrapper = mount(PanelNotificationBell)

        await wrapper.get('[data-notification-bell]').trigger('click')
        await flushPromises()

        const inbox = wrapper.findAll('button').find((button) => button.text().includes('Inbox'))
        await inbox?.trigger('click')

        expect(wrapper.text()).toContain('Ready')
        expect(wrapper.findAll('[data-notification-action]')).toHaveLength(0)
    })
})
