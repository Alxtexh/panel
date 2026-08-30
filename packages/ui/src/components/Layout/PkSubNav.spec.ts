import { DOMWrapper, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

const page = { props: {} as Record<string, unknown>, url: '/settings/security' }

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

const { default: PkSubNav } = await import('./PkSubNav.vue')

const items = [
    { key: 'profile', title: 'Profile', href: '/settings/profile' },
    { key: 'security', title: 'Security', href: '/settings/security' },
]

const body = () => new DOMWrapper(document.body)

afterEach(() => {
    document.body.innerHTML = ''
})

/**
 * `SettingsLayout` had this mobile-dropdown-or-desktop-sidebar behaviour
 * hand-written inline, which is exactly the kind of thing a second screen
 * skips under deadline. Pulling it into its own component makes the dropdown
 * the only way ANY screen gets a secondary nav - these tests are what proves
 * both halves render, not just the one somebody remembered to click through.
 */
describe('PkSubNav', () => {
    it('shows the current item on the mobile trigger', () => {
        page.url = '/settings/security'

        const wrapper = mount(PkSubNav, { props: { items } })

        expect(wrapper.find('[aria-haspopup="listbox"]').text()).toContain('Security')
    })

    it('renders every item in the mobile dropdown panel', async () => {
        page.url = '/settings/security'

        const wrapper = mount(PkSubNav, { props: { items }, attachTo: document.body })

        await wrapper.find('[aria-haspopup="listbox"]').trigger('click')

        const options = body().findAll('[role="option"]')
        expect(options.map((o) => o.text())).toEqual(['Profile', 'Security'])
        expect(body().find('[role="option"][aria-selected="true"]').text()).toBe('Security')
    })

    it('renders every item in the always-present desktop sidebar', () => {
        const wrapper = mount(PkSubNav, { props: { items } })

        const nav = wrapper.find('nav[aria-label="Section"]')
        expect(nav.findAll('a').map((a) => a.text())).toEqual(['Profile', 'Security'])
    })

    it('marks the current item active by prefix, not exact match', () => {
        page.url = '/settings/security/devices'

        const wrapper = mount(PkSubNav, { props: { items } })

        const links = wrapper.find('nav[aria-label="Section"]').findAll('a')
        const security = links.find((a) => a.text() === 'Security')
        expect(security?.classes()).toContain('bg-primary/10')
    })

    it('matches an absolute-URL href against the current path', () => {
        page.url = '/settings/smtp'

        const wrapper = mount(PkSubNav, {
            props: {
                items: [
                    {
                        key: 'profile',
                        title: 'Profile',
                        href: 'http://example.test/settings/profile',
                    },
                    { key: 'smtp', title: 'SMTP', href: 'http://example.test/settings/smtp' },
                ],
            },
        })

        expect(wrapper.find('[aria-haspopup="listbox"]').text()).toContain('SMTP')
    })

    it('takes a caller-supplied aria-label for both surfaces', () => {
        const wrapper = mount(PkSubNav, { props: { items, ariaLabel: 'Workspace sections' } })

        expect(wrapper.find('[aria-label="Workspace sections"]').exists()).toBe(true)
    })
})
