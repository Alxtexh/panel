import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkLandingSections from './PkLandingSections.vue'
import PkPricing from './PkPricing.vue'

/**
 * The renderer is the seam the whole CMS rests on: blocks in, page out.
 *
 * So what is asserted is mostly what happens to blocks it does NOT recognise -
 * because those arrive from a database written by an editor who may be a
 * release ahead of the deploy reading them, and the front door has to survive
 * that rather than 500.
 */
describe('PkLandingSections', () => {
    it('renders sections in the order they are stored', () => {
        const wrapper = mount(PkLandingSections, {
            props: {
                sections: [
                    { type: 'hero', data: { title: 'First thing' } },
                    { type: 'cta', data: { title: 'Last thing' } },
                ],
            },
        })

        const text = wrapper.text()

        expect(text).toContain('First thing')
        expect(text).toContain('Last thing')
        expect(text.indexOf('First thing')).toBeLessThan(text.indexOf('Last thing'))
    })

    it('skips an unknown section instead of taking the page down', () => {
        const wrapper = mount(PkLandingSections, {
            props: {
                sections: [
                    { type: 'a-section-from-the-future', data: { title: 'Nope' } },
                    { type: 'hero', data: { title: 'Still here' } },
                ],
            },
        })

        expect(wrapper.text()).not.toContain('Nope')
        expect(wrapper.text()).toContain('Still here')
    })

    it('renders nothing at all rather than failing when there are no sections', () => {
        expect(mount(PkLandingSections, { props: {} }).text()).toBe('')
    })

    it('draws team, articles and contact sections used by marketing landings', () => {
        const wrapper = mount(PkLandingSections, {
            props: {
                sections: [
                    {
                        type: 'team',
                        data: { title: 'Crew', items: [{ name: 'Ada', role: 'CEO' }] },
                    },
                    {
                        type: 'articles',
                        data: { title: 'Notes', items: [{ title: 'Ship it', meta: 'Guide' }] },
                    },
                    {
                        type: 'contact',
                        data: { title: 'Reach us', email: 'hello@example.com', label: 'Email' },
                    },
                ],
            },
        })

        expect(wrapper.text()).toContain('Ada')
        expect(wrapper.text()).toContain('Ship it')
        expect(wrapper.text()).toContain('hello@example.com')
    })

    it('exposes every registry key the PHP presets may name', () => {
        const wrapper = mount(PkLandingSections, { props: { sections: [] } })
        const known = (wrapper.vm as { known: string[] }).known

        expect(known).toEqual(
            expect.arrayContaining([
                'hero',
                'logos',
                'features',
                'bento',
                'showcase',
                'steps',
                'stats',
                'testimonials',
                'team',
                'articles',
                'contact',
                'pricing',
                'faq',
                'cta',
            ]),
        )
    })
})

/**
 * The pricing toggle is the one section with state, and the rule it encodes -
 * no control that cannot do anything - is the panel's own design rule applied
 * to the front door.
 */
describe('PkPricing', () => {
    it('offers no annual switch when no tier has an annual price', () => {
        const wrapper = mount(PkPricing, {
            props: { items: [{ name: 'Solo', price: '$10' }] },
        })

        expect(wrapper.findAll('button')).toHaveLength(0)
    })

    it('switches every tier to its annual price together', async () => {
        const wrapper = mount(PkPricing, {
            props: {
                items: [
                    { name: 'Solo', price: '$10', annualPrice: '$100' },
                    { name: 'Team', price: '$30', annualPrice: '$300' },
                ],
            },
        })

        expect(wrapper.text()).toContain('$10')

        await wrapper.findAll('button')[1].trigger('click')

        expect(wrapper.text()).toContain('$100')
        expect(wrapper.text()).toContain('$300')
        expect(wrapper.text()).not.toContain('$10\n')
    })
})
