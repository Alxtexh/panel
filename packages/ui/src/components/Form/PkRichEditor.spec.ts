import { mount } from '@vue/test-utils'
import { afterEach, beforeAll, describe, expect, it } from 'vitest'
import PkRichEditor from './PkRichEditor.vue'

beforeAll(() => {
    if (!('innerText' in HTMLElement.prototype)) {
        Object.defineProperty(HTMLElement.prototype, 'innerText', {
            get() {
                return this.textContent ?? ''
            },
            set(v: string) {
                this.textContent = v
            },
        })
    }
})

const mountEditor = (props: Record<string, unknown> = {}) =>
    mount(PkRichEditor, {
        props: { modelValue: null, ...props },
        attachTo: document.body,
    })

describe('PkRichEditor', () => {
    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('renders contenteditable with default toolbar', () => {
        const wrapper = mountEditor()

        const editable = wrapper.find('[contenteditable="true"]')
        expect(editable.exists()).toBe(true)

        const buttons = wrapper.findAll('button[type="button"]')
        // 5 toolbar items (bold, italic, heading, list, link)
        expect(buttons.length).toBeGreaterThanOrEqual(5)
    })

    it('renders initial HTML content', () => {
        const wrapper = mountEditor({ modelValue: '<p>Hello <strong>world</strong></p>' })

        const editable = wrapper.find('[contenteditable="true"]')
        expect(editable.html()).toContain('Hello')
        expect(editable.html()).toContain('<strong>')
    })

    it('emits null for empty content', async () => {
        const wrapper = mountEditor({ modelValue: '<p>text</p>' })

        const editable = wrapper.find('[contenteditable="true"]')
        ;(editable.element as HTMLElement).innerHTML = ''
        await editable.trigger('input')

        const emitted = wrapper.emitted('update:modelValue')
        expect(emitted).toBeTruthy()
        expect(emitted![emitted!.length - 1][0]).toBeNull()
    })

    it('respects custom toolbar', () => {
        const wrapper = mountEditor({ toolbar: ['bold', 'italic'] })

        const buttons = wrapper.findAll('button[type="button"]')
        // 2 toolbar controls, no link button
        expect(buttons.length).toBe(2)
    })

    it('shows character counter when maxLength is set', () => {
        const wrapper = mountEditor({ maxLength: 200 })

        expect(wrapper.text()).toContain('/ 200')
    })

    it('disables editing when disabled prop is true', () => {
        const wrapper = mountEditor({ disabled: true })

        const editable = wrapper.find('[contenteditable="false"]')
        expect(editable.exists()).toBe(true)
    })
})
