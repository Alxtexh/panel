import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import CreateOptionDialog from './CreateOptionDialog.vue'
import type { FormField } from './types'

const fields: FormField[] = [
    { key: 'title', label: 'Title', type: 'text', required: true },
    { key: 'status', label: 'Status', type: 'text' },
]

function bodyText(): string {
    return document.body.textContent ?? ''
}

function clickNamed(label: string): void {
    const button = [...document.body.querySelectorAll('button')].find(
        (el) => el.textContent?.trim() === label,
    )
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
}

describe('CreateOptionDialog', () => {
    it('renders child fields from the schema', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()

        expect(bodyText()).toContain('Title')
        expect(bodyText()).toContain('Status')

        wrapper.unmount()
    })

    it('emits submit with entered values', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()

        const inputs = document.body.querySelectorAll('input')
        ;(inputs[0] as HTMLInputElement).value = 'Fresh article'
        inputs[0].dispatchEvent(new Event('input', { bubbles: true }))
        ;(inputs[1] as HTMLInputElement).value = 'draft'
        inputs[1].dispatchEvent(new Event('input', { bubbles: true }))

        clickNamed('Create')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('submit')?.[0]).toEqual([
            { title: 'Fresh article', status: 'draft' },
        ])

        wrapper.unmount()
    })

    it('emits close when Cancel is clicked', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()
        clickNamed('Cancel')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('close')).toHaveLength(1)

        wrapper.unmount()
    })

    it('shows field-level validation errors', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
                errors: { title: 'The title field is required.' },
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()

        expect(bodyText()).toContain('The title field is required.')

        wrapper.unmount()
    })

    it('shows a general error when no field errors are present', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
                generalError: 'Could not create that option.',
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()

        expect(bodyText()).toContain('Could not create that option.')

        wrapper.unmount()
    })

    it('disables actions while processing', async () => {
        const wrapper = mount(CreateOptionDialog, {
            props: {
                open: true,
                title: 'Create article',
                fields,
                processing: true,
            },
            attachTo: document.body,
        })

        await wrapper.vm.$nextTick()

        const create = [...document.body.querySelectorAll('button')].find(
            (el) => el.textContent?.trim() === 'Creating…',
        )

        expect(create?.hasAttribute('disabled')).toBe(true)

        wrapper.unmount()
    })
})

describe('FormFieldControl - createOption', () => {
    it('opens the dialog from the searchable select action', async () => {
        const FormFieldControl = (await import('./FormFieldControl.vue')).default
        const run = vi.fn().mockResolvedValue({ value: 1, label: 'New row' })

        const wrapper = mount(FormFieldControl, {
            props: {
                field: {
                    key: 'article_id',
                    label: 'Article',
                    type: 'select',
                    searchable: true,
                    createOption: [{ key: 'title', label: 'Title', type: 'text', required: true }],
                } as FormField,
                value: null,
                searchOptions: vi.fn().mockResolvedValue([]),
            },
            global: {
                provide: {
                    panelCreateOption: { run },
                },
            },
            attachTo: document.body,
        })

        await wrapper.find('button[type="button"]').trigger('click')
        await wrapper.vm.$nextTick()

        clickNamed('Create article')
        await wrapper.vm.$nextTick()

        expect(bodyText()).toContain('Create article')

        wrapper.unmount()
    })
})
