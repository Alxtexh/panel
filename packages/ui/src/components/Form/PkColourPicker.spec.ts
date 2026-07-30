import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkColourPicker from './PkColourPicker.vue'

describe('PkColourPicker - contrast warning', () => {
    it('shows nothing when the field declares no background to check against', () => {
        const wrapper = mount(PkColourPicker, {
            props: { field: { key: 'accent' }, modelValue: '#dbe9f8' },
        })

        expect(wrapper.text()).not.toContain('fails contrast')
    })

    it('warns with the real ratio when the colour fails against the declared background', () => {
        const wrapper = mount(PkColourPicker, {
            props: {
                field: { key: 'accent', contrastBackground: '#ffffff' },
                modelValue: '#dbe9f8',
            },
        })

        expect(wrapper.text()).toContain('fails contrast')
        expect(wrapper.text()).toContain('4.5:1')
    })

    it('shows nothing when the colour already passes', () => {
        const wrapper = mount(PkColourPicker, {
            props: {
                field: { key: 'accent', contrastBackground: '#ffffff' },
                modelValue: '#0f766e',
            },
        })

        expect(wrapper.text()).not.toContain('fails contrast')
    })

    it('respects a custom minimum ratio', () => {
        const wrapper = mount(PkColourPicker, {
            props: {
                field: { key: 'accent', contrastBackground: '#ffffff', contrastMinRatio: 21 },
                modelValue: '#0f766e',
            },
        })

        expect(wrapper.text()).toContain('fails contrast')
    })

    it('emits a passing shade when "Use a readable shade" is clicked', async () => {
        const wrapper = mount(PkColourPicker, {
            props: {
                field: { key: 'accent', contrastBackground: '#ffffff' },
                modelValue: '#dbe9f8',
            },
        })

        await wrapper.find('button.underline').trigger('click')

        const emitted = wrapper.emitted('update:modelValue')
        expect(emitted).toBeTruthy()
        const shade = emitted![0][0] as string
        expect(shade).toMatch(/^#[0-9a-f]{6}$/)
    })

    it('hides the fix button when disabled', () => {
        const wrapper = mount(PkColourPicker, {
            props: {
                field: { key: 'accent', contrastBackground: '#ffffff' },
                modelValue: '#dbe9f8',
                disabled: true,
            },
        })

        expect(wrapper.find('button.underline').exists()).toBe(false)
    })
})
