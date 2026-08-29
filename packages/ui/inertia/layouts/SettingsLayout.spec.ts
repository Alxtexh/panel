import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { vi } from 'vitest'

const page = vi.hoisted(() => ({ props: {} as Record<string, unknown>, url: '/security' }))

vi.mock('@inertiajs/vue3', () => ({
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
    usePage: () => page,
}))

vi.mock('../composables/useCurrentUrl', () => ({
    useCurrentUrl: () => ({
        isCurrentOrParentUrl: (href: string) => href === page.url,
    }),
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    PAGE_SHELL: '',
    PkHeading: {
        props: ['title', 'description'],
        template: '<div><h1>{{ title }}</h1><p data-test="description">{{ description }}</p></div>',
    },
    PkSubNav: { props: ['items', 'ariaLabel'], template: '<div />' },
}))

const { default: SettingsLayout } = await import('./SettingsLayout.vue')

/**
 * `PkHeading`'s description used to be one hardcoded ternary: Profile's own
 * text, or - for EVERY other tab, Security included - the same generic
 * "Organisation, roles, payments and the rest of this portal.", regardless
 * of which settings screen was actually open. The server already sends a
 * real, per-entry description in `settingsNav` (the same list the settings
 * index page reads); this only had to be read.
 */
describe('SettingsLayout', () => {
    it("shows the current tab's own description, not the generic fallback", () => {
        page.url = '/security'
        page.props = {
            settingsNav: [
                { key: 'profile', title: 'Profile', href: '/profile', description: 'Profile text' },
                {
                    key: 'security',
                    title: 'Security',
                    href: '/security',
                    description: 'Password, two-factor authentication, passkeys and signed-in devices.',
                },
            ],
        }

        const wrapper = mount(SettingsLayout, { slots: { default: '' } })

        expect(wrapper.find('[data-test="description"]').text()).toBe(
            'Password, two-factor authentication, passkeys and signed-in devices.',
        )
        expect(wrapper.text()).not.toContain('Organisation, roles, payments and the rest of this portal.')
    })

    it('falls back to a generic description only when the entry supplies none', () => {
        page.url = '/security'
        page.props = {
            settingsNav: [{ key: 'security', title: 'Security', href: '/security' }],
        }

        const wrapper = mount(SettingsLayout, { slots: { default: '' } })

        expect(wrapper.find('[data-test="description"]').text()).toBe(
            'Organisation, roles, payments and the rest of this portal.',
        )
    })
})
