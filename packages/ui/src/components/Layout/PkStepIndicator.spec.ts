import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkStepIndicator from './PkStepIndicator.vue'

const steps = [{ label: 'Upload' }, { label: 'Map columns' }, { label: 'Review' }]

describe('PkStepIndicator', () => {
    it('marks steps before the active one as done and disables the rest', () => {
        const wrapper = mount(PkStepIndicator, { props: { steps, activeStep: 1 } })

        const buttons = wrapper.findAll('button')

        expect(buttons[0].attributes('disabled')).toBeUndefined()
        expect(buttons[1].attributes('disabled')).toBeUndefined()
        expect(buttons[2].attributes('disabled')).toBeDefined()
    })

    it('emits update:activeStep when an earlier step is clicked', async () => {
        const wrapper = mount(PkStepIndicator, { props: { steps, activeStep: 2 } })

        await wrapper.findAll('button')[0].trigger('click')

        expect(wrapper.emitted('update:activeStep')?.[0]).toEqual([0])
    })

    it('does not emit when a disabled, not-yet-reached step is clicked', async () => {
        const wrapper = mount(PkStepIndicator, { props: { steps, activeStep: 0 } })

        await wrapper.findAll('button')[2].trigger('click')

        expect(wrapper.emitted('update:activeStep')).toBeUndefined()
    })

    it('renders a cross on the failed step and treats later steps as never reached', () => {
        const wrapper = mount(PkStepIndicator, {
            props: { steps, activeStep: 1, failedStep: 1, interactive: false },
        })

        // The failed step's circle carries the cross path; a done step's tick
        // path never appears once a failure has happened.
        expect(wrapper.html()).toContain('M18 6 6 18M6 6l12 12')
    })

    it('renders as non-interactive plain elements when told to', () => {
        const wrapper = mount(PkStepIndicator, {
            props: { steps, activeStep: 1, interactive: false },
        })

        expect(wrapper.findAll('button').length).toBe(0)
    })

    it('shows an error dot only for the step hasError names', () => {
        const wrapper = mount(PkStepIndicator, {
            props: { steps, activeStep: 2, hasError: (i: number) => i === 1 },
        })

        const items = wrapper.findAll('li')

        expect(items[0].find('[aria-label="has errors"]').exists()).toBe(false)
        expect(items[1].find('[aria-label="has errors"]').exists()).toBe(true)
    })
})
