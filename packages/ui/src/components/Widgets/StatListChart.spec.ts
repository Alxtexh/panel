import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import StatListChart from './StatListChart.vue'

describe('StatListChart', () => {
    it('places values opposite labels and colours a tone', () => {
        const wrapper = mount(StatListChart, {
            props: {
                rows: [
                    { key: 'online', label: 'Online', value: '12', tone: 'success' },
                    { key: 'never', label: 'Last backup', value: 'Never', tone: 'danger' },
                ],
            },
        })

        expect(wrapper.text()).toContain('Online')
        expect(wrapper.text()).toContain('12')
        expect(wrapper.text()).toContain('Never')
        expect(wrapper.get('.text-destructive').text()).toBe('Never')
    })

    it('renders a subsection heading without a value', () => {
        const wrapper = mount(StatListChart, {
            props: {
                rows: [
                    { key: 'finance', label: 'Finance', heading: true, tone: 'info' },
                    { key: 'current', label: 'Current month', value: '8' },
                ],
            },
        })

        expect(wrapper.get('[data-heading="true"]').text()).toBe('Finance')
        expect(wrapper.text()).toContain('Current month')
    })

    it('draws used and free bar segments', () => {
        const wrapper = mount(StatListChart, {
            props: {
                rows: [
                    {
                        key: 'disk',
                        label: 'Disk',
                        value: '10 GB (Free 40%)',
                        bar: {
                            segments: [
                                { label: 'Used', value: 60, tone: 'warning' },
                                { label: 'Free', value: 40, tone: 'success' },
                            ],
                            total: 100,
                        },
                    },
                ],
            },
        })

        const segments = wrapper.findAll('[role="img"] span')
        expect(segments).toHaveLength(2)
        expect(segments[0].classes()).toContain('bg-warning')
        expect(segments[1].classes()).toContain('bg-success')
    })
})
