import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import SocialLoginButtons from './SocialLoginButtons.vue'

vi.mock('./AuthProviderButton.vue', () => ({
    default: {
        props: ['provider'],
        template: '<a :data-test="`social-${provider.key}`">{{ provider.label }}</a>',
    },
}))

const page = vi.hoisted(() => ({ props: {} as Record<string, unknown> }))

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
}))

describe('SocialLoginButtons', () => {
    it('renders nothing when shared socialProviders is empty', () => {
        page.props = { socialProviders: [] }

        const wrapper = mount(SocialLoginButtons)

        expect(wrapper.find('[data-test="social-login-buttons"]').exists()).toBe(false)
    })

    it('reads providers from SharePanelProps when no prop is passed', () => {
        page.props = {
            socialProviders: [
                { key: 'google', label: 'Google', url: '/auth/google/redirect', configured: true },
            ],
        }

        const wrapper = mount(SocialLoginButtons)

        expect(wrapper.find('[data-test="social-google"]').text()).toBe('Google')
    })

    it('prefers an explicit providers prop over shared props', () => {
        page.props = {
            socialProviders: [
                { key: 'google', label: 'Google', url: '/auth/google/redirect', configured: true },
            ],
        }

        const wrapper = mount(SocialLoginButtons, {
            props: {
                providers: [
                    { key: 'github', label: 'GitHub', url: '/auth/github/redirect', configured: true },
                ],
            },
        })

        expect(wrapper.find('[data-test="social-github"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="social-google"]').exists()).toBe(false)
    })
})
