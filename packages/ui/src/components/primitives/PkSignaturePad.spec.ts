import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkSignaturePad from './PkSignaturePad.vue'

describe('PkSignaturePad', () => {
    it('exposes clear and save, and save emits a data URL', async () => {
        const wrapper = mount(PkSignaturePad)
        const canvas = wrapper.get('canvas').element as HTMLCanvasElement

        canvas.toDataURL = () => 'data:image/png;base64,abc'

        expect(wrapper.get('canvas').exists()).toBe(true)

        await wrapper.get('button:last-child').trigger('click')

        const save = wrapper.emitted('save')
        expect(save).toBeTruthy()
        expect(String(save?.[0]?.[0] ?? '')).toMatch(/^data:image\/png/)
    })
})
