import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { INPUT_COPY } from '../../../lib/inputClasses'
import Input from './Input.vue'

describe('Input', () => {
    it('renders placeholder copy with muted normal weight classes', () => {
        const wrapper = mount(Input, {
            props: { modelValue: '', placeholder: 'Password' },
            attrs: { placeholder: 'Password' },
        })

        const input = wrapper.get('input')
        for (const token of INPUT_COPY.split(' ')) {
            expect(input.classes()).toContain(token)
        }
    })
})
