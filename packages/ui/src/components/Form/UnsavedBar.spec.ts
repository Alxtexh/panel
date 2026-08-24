import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { FORM_MEASURE } from '../../lib/pageShell'
import UnsavedBar from './UnsavedBar.vue'

describe('UnsavedBar', () => {
    it('pins inside #pk-main with FORM_MEASURE, not full-viewport body chrome', async () => {
        const shell = document.createElement('main')
        shell.id = 'pk-main'
        document.body.appendChild(shell)

        const wrapper = mount(UnsavedBar, {
            props: { show: true, message: 'New client', saveLabel: 'Create Client' },
            attachTo: document.body,
        })
        await nextTick(); await nextTick()
        const frame = document.querySelector('[data-slot="unsaved-bar"]') as HTMLElement | null
        expect(frame).not.toBeNull()
        expect(shell.contains(frame)).toBe(true)
        expect(frame!.className).toContain('fixed')
        expect(frame!.className).not.toContain('sticky')
        const chrome = frame!.firstElementChild as HTMLElement
        expect(chrome.className).toContain('max-w-7xl')
        expect(chrome.className).toContain(FORM_MEASURE.split(' ')[0])
        wrapper.unmount(); shell.remove()
    })

    it('falls back to sticky in-tree when the panel shell is absent', async () => {
        document.getElementById('pk-main')?.remove()
        const wrapper = mount(UnsavedBar, { props: { show: true }, attachTo: document.body })
        await nextTick(); await nextTick()
        const frame = wrapper.find('[data-slot="unsaved-bar"]')
        expect(frame.classes()).toContain('sticky')
        expect(frame.classes()).not.toContain('fixed')
        wrapper.unmount()
    })
})
