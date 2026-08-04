import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkOtpInput from './PkOtpInput.vue'

/**
 * The code field, which is one input pretending to be six boxes.
 *
 * THE AUTOFOCUS TEST IS THE POINT OF THIS FILE. `:autofocus` was bound as an
 * attribute, and a browser only honours that attribute while it PARSES the
 * document - this input is created by Vue afterwards, so the binding set a
 * property nothing read. The screen looked perfect and the caret was simply
 * never there, which on a code screen means the code somebody just received
 * gets typed into no field at all.
 *
 * Nothing else could catch it: it renders, it types, it submits, and every
 * screenshot of it is correct.
 */
describe('PkOtpInput', () => {
    it('focuses itself when asked, rather than trusting the attribute', () => {
        const wrapper = mount(PkOtpInput, {
            props: { autofocus: true },
            attachTo: document.body,
        })

        expect(document.activeElement).toBe(wrapper.find('input').element)

        wrapper.unmount()
    })

    it('leaves focus alone when it was not asked for', () => {
        const wrapper = mount(PkOtpInput, { attachTo: document.body })

        expect(document.activeElement).not.toBe(wrapper.find('input').element)

        wrapper.unmount()
    })

    it('renders one box per digit of the code length', () => {
        const wrapper = mount(PkOtpInput, { props: { length: 4 } })

        expect(wrapper.findAll('[data-slot="input-otp-slot"]')).toHaveLength(4)
    })

    it('keeps only digits, and never more than the code length', async () => {
        const wrapper = mount(PkOtpInput, { props: { length: 6 } })

        // A code pasted out of a text message, spaces and all.
        await wrapper.find('input').setValue('12 34 5678')

        expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual(['123456'])
    })

    it('shows each character in its own box', () => {
        const wrapper = mount(PkOtpInput, {
            props: { modelValue: '42', length: 4 },
        })

        const boxes = wrapper.findAll('[data-slot="input-otp-slot"]')

        expect(boxes.map((box) => box.text())).toEqual(['4', '2', '', ''])
    })
})
