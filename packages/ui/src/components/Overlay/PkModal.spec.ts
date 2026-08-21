import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkModal from './PkModal.vue'

describe('PkModal', () => {
    it('keeps header and footer sticky while the body scrolls', () => {
        const wrapper = mount(PkModal, {
            props: {
                open: true,
                title: 'Bulk update',
                description: 'Apply to the selected rows.',
            },
            slots: {
                default: '<p>Long form body</p>',
                footer: '<button type="button">Run</button>',
            },
            attachTo: document.body,
        })

        const panel = document.body.querySelector('[role="dialog"]') as HTMLElement | null

        expect(panel).not.toBeNull()
        expect(panel!.className).toContain('max-h-[min(85vh,720px)]')
        expect(panel!.className).toContain('flex-col')
        expect(panel!.textContent).toContain('Bulk update')
        expect(panel!.textContent).toContain('Long form body')
        expect(panel!.textContent).toContain('Run')

        const bands = Array.from(panel!.children) as HTMLElement[]

        expect(bands).toHaveLength(3)
        expect(bands[0].className).toContain('sticky')
        expect(bands[0].className).toContain('top-0')
        expect(bands[1].className).toContain('overflow-y-auto')
        expect(bands[2].className).toContain('sticky')
        expect(bands[2].className).toContain('bottom-0')

        wrapper.unmount()
    })
})
