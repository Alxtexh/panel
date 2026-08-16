import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AuthLayout from './AuthLayout.vue'

/**
 * Which name a sign-in screen puts at the top of itself.
 *
 * IT SHOWED THE WRONG ONE FOR AS LONG AS PORTALS HAVE HAD BRANDS.
 * `SharePanelProps` has always shared `panel.brand` - `Panel::brandName()`,
 * resolved per request - and this layout read only `name`, the application-wide
 * `APP_NAME`. The reference application declares five distinct brands across
 * five portals and every one of their sign-in screens said "Alxtexhpanel".
 *
 * NOTHING WOULD HAVE REPORTED IT. A sign-in page showing the product's name is
 * not obviously wrong; it is wrong only beside the portal it belongs to, and
 * nobody opens two sign-in screens at once. It was found by reading the props
 * the server actually sends and noticing one of them was going nowhere.
 *
 * THE FALLBACK CHAIN IS THE PART WORTH TESTING, not the lookup. A tenant portal
 * resolves its brand from the signed-in tenant, and a sign-in screen is by
 * definition the one place where nobody is signed in - so `null` is that
 * portal's NORMAL state here, not an edge case, and it has to land on the
 * application name rather than on a blank heading.
 */
vi.mock('@alxtexh-enterprise/panel', () => ({
    // The theme toggle reaches for appearance storage; this file is about a heading.
    ThemeToggle: { template: '<div />' },
}))

const page = vi.hoisted(() => ({ props: {} as Record<string, unknown> }))

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    Link: { template: '<a><slot /></a>' },
}))

function heading(props: Record<string, unknown>): string {
    page.props = props

    return mount(AuthLayout, { props: { title: 'Log in' } })
        .get('a span')
        .text()
}

describe('AuthLayout', () => {
    it('shows the portal brand when the panel declares one', () => {
        expect(heading({ name: 'Acme', panel: { brand: 'Acme — Client' } })).toBe('Acme — Client')
    })

    /**
     * A TENANT PORTAL BEFORE SIGN-IN. Its brand is the tenant's name and there
     * is no tenant yet, so this is the state it is always in on this screen.
     */
    it('falls back to the application name when the brand resolves null', () => {
        expect(heading({ name: 'Acme', panel: { brand: null } })).toBe('Acme')
    })

    /**
     * `??` WOULD NOT HAVE CAUGHT THIS. An empty string is falsy but not nullish,
     * so nullish coalescing passes it straight through and the heading renders
     * blank - which reads as a broken page rather than as an unset option.
     */
    it('falls back when the brand resolves to an empty string', () => {
        expect(heading({ name: 'Acme', panel: { brand: '' } })).toBe('Acme')
    })

    /** A screen outside any panel group - Fortify's own - shares no `panel`. */
    it('uses the application name when there is no panel at all', () => {
        expect(heading({ name: 'Acme' })).toBe('Acme')
    })

    /**
     * Last resort. A heading that renders nothing looks broken, and a stock
     * Laravel application that never shared `name` would produce exactly that.
     */
    it('never renders an empty heading', () => {
        expect(heading({})).toBe('Panel')
    })

    describe('split layout', () => {
        function splitWrapper(props: Record<string, unknown>) {
            page.props = props
            return mount(AuthLayout, { props: { title: 'Log in', description: 'Enter your details' } })
        }

        it('renders the split layout when panel.authLayout is split', () => {
            const wrapper = splitWrapper({ name: 'Acme', panel: { brand: 'Acme', authLayout: 'split' } })
            // The muted image panel renders.
            expect(wrapper.find('.bg-muted').exists()).toBe(true)
            // The form title renders as h1.
            expect(wrapper.find('h1').text()).toBe('Log in')
        })

        it('shows the brand name in the split form column', () => {
            const wrapper = splitWrapper({ name: 'Acme', panel: { brand: 'Acme — Admin', authLayout: 'split' } })
            expect(wrapper.find('[data-login-layout="split"] a span').text()).toBe('Acme — Admin')
        })

        it('shows the form description in split layout', () => {
            const wrapper = splitWrapper({ name: 'Acme', panel: { brand: 'Acme', authLayout: 'split' } })
            expect(wrapper.find('[data-login-layout="split"] p').text()).toBe('Enter your details')
        })

        it('falls back to simple when authLayout is absent', () => {
            const wrapper = splitWrapper({ name: 'Acme', panel: { brand: 'Acme' } })
            expect(wrapper.find('[data-login-layout="simple"]').exists()).toBe(true)
            expect(wrapper.find('.bg-muted').exists()).toBe(false)
        })
    })

    describe('loginLayout variants', () => {
        function mountLayout(loginLayout: string) {
            page.props = { name: 'Acme', panel: { brand: 'Acme', loginLayout } }
            return mount(AuthLayout, { props: { title: 'Log in', description: 'Enter your details' } })
        }

        it('marks simple chrome as login-01', () => {
            const wrapper = mountLayout('simple')
            expect(wrapper.find('[data-login-layout="simple"]').exists()).toBe(true)
            expect(wrapper.find('[data-login-layout="simple"]').classes()).toContain('bg-background')
        })

        it('marks split chrome as login-02 two-column cover', () => {
            const wrapper = mountLayout('split')
            expect(wrapper.find('[data-login-layout="split"]').exists()).toBe(true)
            expect(wrapper.find('[data-login-layout="split"]').classes()).toContain('lg:grid-cols-2')
            expect(wrapper.find('.bg-muted').exists()).toBe(true)
        })

        it('marks muted chrome as login-03', () => {
            const wrapper = mountLayout('muted')
            expect(wrapper.find('[data-login-layout="muted"]').exists()).toBe(true)
            expect(wrapper.find('[data-login-layout="muted"]').classes()).toContain('bg-muted')
        })

        it('marks card chrome as login-04 form plus image card', () => {
            const wrapper = mountLayout('card')
            expect(wrapper.find('[data-login-layout="card"]').exists()).toBe(true)
            expect(wrapper.find('[data-login-layout="card"]').classes()).toContain('bg-muted')
            expect(wrapper.find('.md\\:max-w-4xl').exists()).toBe(true)
            expect(wrapper.find('.md\\:grid-cols-2').exists()).toBe(true)
        })

        it('marks email chrome as login-05, same stack as simple', () => {
            const wrapper = mountLayout('email')
            expect(wrapper.find('[data-login-layout="email"]').exists()).toBe(true)
            expect(wrapper.find('[data-login-layout="email"]').classes()).toContain('bg-background')
            expect(wrapper.find('.max-w-sm').exists()).toBe(true)
        })
    })
})
