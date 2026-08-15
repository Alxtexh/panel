import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import PkQtyStepper from './PkQtyStepper.vue'

describe('PkQtyStepper', () => {
    it('increases and decreases within bounds', async () => {
        const qty = ref(2)
        const wrapper = mount(PkQtyStepper, {
            props: {
                modelValue: qty.value,
                min: 1,
                max: 3,
                'onUpdate:modelValue': (value: number) => {
                    qty.value = value
                },
            },
        })

        await wrapper.get('[aria-label="Increase quantity"]').trigger('click')
        expect(qty.value).toBe(3)

        await wrapper.setProps({ modelValue: qty.value })
        expect(
            (wrapper.get('[aria-label="Increase quantity"]').element as HTMLButtonElement).disabled,
        ).toBe(true)

        await wrapper.get('[aria-label="Decrease quantity"]').trigger('click')
        expect(qty.value).toBe(2)
    })
})
