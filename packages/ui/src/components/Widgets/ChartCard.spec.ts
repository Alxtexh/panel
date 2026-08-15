import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ChartCard from './ChartCard.vue'

describe('ChartCard', () => {
    it('collapses the body without unmounting it', async () => {
        const wrapper = mount(ChartCard, {
            props: { label: 'Sessions' },
            slots: { default: '<p>plot</p>' },
        })

        expect(wrapper.text()).toContain('plot')

        await wrapper.get('[aria-label="Collapse Sessions"]').trigger('click')

        expect(wrapper.get('[aria-label="Expand Sessions"]').exists()).toBe(true)
        expect(wrapper.get('[data-slot="chart-card-body"]').isVisible()).toBe(false)
        expect(wrapper.text()).toContain('plot')
    })

    it('emits hide when hideable', async () => {
        const wrapper = mount(ChartCard, {
            props: { label: 'Sessions', hideable: true },
        })

        await wrapper.get('[aria-label="Hide Sessions"]').trigger('click')

        expect(wrapper.emitted('hide')).toHaveLength(1)
    })

    it('does not offer hide unless asked', () => {
        const wrapper = mount(ChartCard, { props: { label: 'Sessions' } })

        expect(wrapper.find('[aria-label="Hide Sessions"]').exists()).toBe(false)
    })
})
