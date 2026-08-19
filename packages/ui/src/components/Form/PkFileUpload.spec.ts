import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import PkFileUpload from './PkFileUpload.vue'

const mockUpload = vi.fn(async (file: File, onProgress: (p: number) => void) => {
    onProgress(50)
    onProgress(100)
    return { value: 'handle-123', name: file.name, size: file.size }
})

describe('PkFileUpload', () => {
    it('renders the drop zone when no value', () => {
        const wrapper = mount(PkFileUpload, {
            props: { modelValue: null, upload: mockUpload },
        })

        expect(wrapper.text()).toContain('Drop a file or click to choose')
        expect(wrapper.find('input[type="file"]').exists()).toBe(true)
    })

    it('shows file info when a value is present', () => {
        const wrapper = mount(PkFileUpload, {
            props: {
                modelValue: { value: 'path/abc', name: 'report.pdf', size: 1024 },
                upload: mockUpload,
            },
        })

        expect(wrapper.text()).toContain('report.pdf')
        expect(wrapper.text()).toContain('1')
    })

    it('shows remove button when not disabled', () => {
        const wrapper = mount(PkFileUpload, {
            props: {
                modelValue: { value: 'x', name: 'file.png', size: 512 },
                upload: mockUpload,
            },
        })

        expect(wrapper.find('button[aria-label="Remove file"]').exists()).toBe(true)
    })

    it('emits null on remove', async () => {
        const wrapper = mount(PkFileUpload, {
            props: {
                modelValue: { value: 'x', name: 'file.png', size: 512, url: '/download/x' },
                upload: mockUpload,
            },
        })

        await wrapper.find('button[aria-label="Remove file"]').trigger('click')

        const emitted = wrapper.emitted('update:modelValue')
        expect(emitted).toBeTruthy()
        expect(emitted![0][0]).toBeNull()
    })

    it('rejects files exceeding maxKilobytes', async () => {
        const wrapper = mount(PkFileUpload, {
            props: { modelValue: null, upload: mockUpload, maxKilobytes: 1 },
        })

        const input = wrapper.find('input[type="file"]')
        const bigFile = new File(['x'.repeat(2048)], 'big.txt', { type: 'text/plain' })

        Object.defineProperty(input.element, 'files', { value: [bigFile], writable: false })
        await input.trigger('change')

        expect(wrapper.text()).toContain('limit')
        expect(mockUpload).not.toHaveBeenCalled()
    })

    it('rejects files with unaccepted extensions', async () => {
        const wrapper = mount(PkFileUpload, {
            props: { modelValue: null, upload: mockUpload, accept: ['pdf'] },
        })

        const input = wrapper.find('input[type="file"]')
        const badFile = new File(['data'], 'bad.exe', { type: 'application/octet-stream' })

        Object.defineProperty(input.element, 'files', { value: [badFile], writable: false })
        await input.trigger('change')

        expect(wrapper.text()).toContain('not accepted')
        expect(mockUpload).not.toHaveBeenCalled()
    })

    it('renders image preview when image prop is set and file has url', () => {
        const wrapper = mount(PkFileUpload, {
            props: {
                modelValue: { value: 'img/1', name: 'photo.jpg', size: 2048, url: '/img/1.jpg' },
                upload: mockUpload,
                image: true,
            },
        })

        const img = wrapper.find('img')
        expect(img.exists()).toBe(true)
        expect(img.attributes('src')).toBe('/img/1.jpg')
    })

    it('displays accepted types and size hint', () => {
        const wrapper = mount(PkFileUpload, {
            props: { modelValue: null, upload: mockUpload, accept: ['pdf', 'docx'], maxKilobytes: 5120 },
        })

        expect(wrapper.text()).toContain('PDF, DOCX')
        expect(wrapper.text()).toContain('5')
    })
})
