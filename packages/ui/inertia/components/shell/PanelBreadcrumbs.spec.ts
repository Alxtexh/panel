import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The trail, which is derived rather than sent.
 *
 * WHY THESE ARE UNIT TESTS AND THE REST OF THE SHELL IS NOT. Everything else in
 * this directory is proved in a real browser, correctly: it reads `usePage()`,
 * navigates and persists state, none of which jsdom exercises honestly. The
 * trail is the opposite - a pure function of the navigation and the URL, with
 * four rules that are cheap to enumerate here and expensive to enumerate by
 * driving a browser to four different screens.
 *
 * THE RULES, EACH BECAUSE GETTING IT WRONG IS SILENT: longest match wins (or
 * every page becomes a child of the home entry), a group is not a link (or the
 * trail sends somebody to a URL that was never routed), a numeric segment is a
 * record (or a trail ends in a bare number that reads as a page number), and the
 * panel root renders nothing (or every dashboard says "Dashboard" twice).
 */
const page = { props: {} as Record<string, unknown>, url: '/' }

vi.mock('@inertiajs/vue3', () => ({
    usePage: () => page,
    // A stub that keeps `href` in the markup, which is what the tests read.
    Link: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
    },
}))

const { default: PanelBreadcrumbs } = await import('./PanelBreadcrumbs.vue')

const NAV = [
    { key: 'clients', title: 'Subscribers', href: '/clients', group: 'Operations' },
    { key: 'routers', title: 'Routers', href: '/routers', group: 'Operations' },
    { key: 'home', title: 'Dashboard', href: '/' },
]

function at(url: string, nav: unknown[] = NAV, panelPath = '/') {
    page.url = url
    page.props = { panelNav: nav, panel: { path: panelPath } }

    return mount(PanelBreadcrumbs)
}

describe('PanelBreadcrumbs', () => {
    beforeEach(() => {
        page.props = {}
        page.url = '/'
    })

    /** Nothing at the root: a crumb reading "Dashboard" under a heading reading
     * "Dashboard" is furniture. */
    it('renders nothing at the panel root', () => {
        expect(at('/').find('[data-breadcrumbs]').exists()).toBe(false)
    })

    it('renders nothing for a path the navigation does not cover', () => {
        expect(at('/shell-preview').find('[data-breadcrumbs]').exists()).toBe(false)
    })

    /**
     * ON A SECTION'S OWN SCREEN the section is the page, so it does not link -
     * and the group above it never does.
     */
    it('names the group and the section, neither of them linked', () => {
        const wrapper = at('/clients')

        expect(wrapper.text()).toContain('Operations')
        expect(wrapper.text()).toContain('Subscribers')
        expect(wrapper.findAll('a')).toHaveLength(0)
    })

    /**
     * THE LONGEST MATCH WINS. `/` is in this navigation and prefixes everything;
     * taking the first match would file every screen under Dashboard.
     */
    it('files a record under its section rather than under the home entry', () => {
        const wrapper = at('/clients/42')

        expect(wrapper.text()).toContain('Subscribers')
        expect(wrapper.text()).not.toContain('Dashboard')

        // The section links now, because it is no longer the page you are on.
        const links = wrapper.findAll('a')
        expect(links).toHaveLength(1)
        expect(links[0].attributes('href')).toBe('/clients')
    })

    /** A numeric segment is a record id, and reads as one. */
    it('renders a record id as #42 rather than 42', () => {
        expect(at('/clients/42').text()).toContain('#42')
    })

    it('humanises a named segment', () => {
        expect(at('/clients/42/edit-profile').text()).toContain('Edit profile')
    })

    /**
     * A SIBLING WHOSE NAME STARTS THE SAME IS NOT A PARENT. `/clients` must not
     * claim `/clients-archive`, which is the bug a bare `startsWith` produces.
     */
    it('does not claim a path that merely starts with a section href', () => {
        const nav = [{ key: 'clients', title: 'Subscribers', href: '/clients', group: null }]

        expect(at('/clients-archive', nav).find('[data-breadcrumbs]').exists()).toBe(false)
    })

    /** A query string is not part of the route, and must not become a crumb. */
    it('ignores the query string', () => {
        const wrapper = at('/clients?status=active&page=3')

        expect(wrapper.text()).toContain('Subscribers')
        expect(wrapper.text()).not.toContain('status')
    })

    /** The panel prefix is the root for a portal mounted under one. */
    it('renders nothing at the root of a prefixed panel', () => {
        const nav = [{ key: 'home', title: 'Home', href: '/reseller', group: null }]

        expect(at('/reseller', nav, '/reseller').find('[data-breadcrumbs]').exists()).toBe(false)
    })

    /**
     * AN EXPLICIT TRAIL WINS ENTIRELY. A record page knows the record's name,
     * which no amount of URL reading will produce.
     */
    it('uses supplied items in place of the derived trail', () => {
        page.url = '/clients/42'
        page.props = { panelNav: NAV, panel: { path: '/' } }

        const wrapper = mount(PanelBreadcrumbs, {
            props: {
                items: [
                    { title: 'Subscribers', href: '/clients' },
                    { title: 'Amina Achieng', href: null },
                ],
            },
        })

        expect(wrapper.text()).toContain('Amina Achieng')
        expect(wrapper.text()).not.toContain('#42')
    })
})
