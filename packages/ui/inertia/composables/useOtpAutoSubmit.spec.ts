import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, ref } from 'vue'
import { useOtpAutoSubmit } from './useOtpAutoSubmit'

describe('useOtpAutoSubmit', () => {
    it('submits the form once when a full code arrives', async () => {
        const submit = vi.fn()
        const formRef = ref<{ submit: () => void; processing: boolean } | null>({
            submit,
            processing: false,
        })

        const Harness = defineComponent({
            setup() {
                const { onOtpComplete } = useOtpAutoSubmit(formRef)
                return { onOtpComplete }
            },
            template: '<button type="button" @click="onOtpComplete(\'123456\')">go</button>',
        })

        const wrapper = mount(Harness)

        await wrapper.find('button').trigger('click')
        await wrapper.find('button').trigger('click')

        expect(submit).toHaveBeenCalledTimes(1)
    })

    it('does not submit while processing or when the guard fails', async () => {
        const submit = vi.fn()
        const formRef = ref<{ submit: () => void; processing: boolean } | null>({
            submit,
            processing: true,
        })

        const Harness = defineComponent({
            setup() {
                const { onOtpComplete } = useOtpAutoSubmit(formRef, {
                    guard: () => false,
                })
                return { onOtpComplete }
            },
            template: '<button type="button" @click="onOtpComplete(\'123456\')">go</button>',
        })

        const wrapper = mount(Harness)

        await wrapper.find('button').trigger('click')

        expect(submit).not.toHaveBeenCalled()
    })
})
