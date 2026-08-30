import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
    MODAL_PANEL,
    MODAL_PANEL_FORM,
    MODAL_WIDTH,
    OVERLAY_FORM_MEASURE,
} from '../../lib/pageShell'
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
        expect(panel!.className).toContain(
            MODAL_PANEL.split(' ').find((c) => c.startsWith('max-w-'))!,
        )
        expect(panel!.textContent).toContain('Bulk update')
        expect(panel!.textContent).toContain('Long form body')
        expect(panel!.textContent).toContain('Run')

        const bands = Array.from(panel!.children) as HTMLElement[]

        expect(bands).toHaveLength(3)
        expect(bands[0].className).toContain('sticky')
        expect(bands[0].className).toContain('top-0')
        expect(bands[1].className).toContain('overflow-y-auto')
        expect(bands[1].className).toContain(OVERLAY_FORM_MEASURE.split(' ')[0])
        expect(bands[2].className).toContain('sticky')
        expect(bands[2].className).toContain('bottom-0')

        wrapper.unmount()
    })

    it('widens for form size without becoming a page', () => {
        const wrapper = mount(PkModal, {
            props: {
                open: true,
                title: 'Refund',
                size: 'form',
            },
            slots: {
                default: '<p>Amount</p>',
                footer: '<button type="button">Refund</button>',
            },
            attachTo: document.body,
        })

        const panel = document.body.querySelector('[role="dialog"]') as HTMLElement

        expect(panel.className).toContain(
            MODAL_PANEL_FORM.split(' ').find((c) => c.startsWith('max-w-'))!,
        )
        expect(panel.className).not.toContain('max-w-7xl')

        wrapper.unmount()
    })

    /**
     * `sm`/`lg`/`xl` are new - `RecordAction::modalWidth()` needed somewhere
     * to land other than the two sizes `confirm`/`form` were sized for.
     */
    it.each(['sm', 'lg', 'xl'] as const)('supports the new %s size', (size) => {
        const wrapper = mount(PkModal, {
            props: { open: true, title: 'Wide action', size },
            slots: { default: '<p>Body</p>' },
            attachTo: document.body,
        })

        const panel = document.body.querySelector('[role="dialog"]') as HTMLElement

        expect(panel.className).toContain(
            MODAL_WIDTH[size].split(' ').find((c) => c.startsWith('max-w-'))!,
        )

        wrapper.unmount()
    })

    it('falls back to the confirm width for an unrecognised size', () => {
        const wrapper = mount(PkModal, {
            props: { open: true, title: 'X', size: 'not-a-real-size' as never },
            slots: { default: '<p>Body</p>' },
            attachTo: document.body,
        })

        const panel = document.body.querySelector('[role="dialog"]') as HTMLElement

        expect(panel.className).toContain(
            MODAL_PANEL.split(' ').find((c) => c.startsWith('max-w-'))!,
        )

        wrapper.unmount()
    })
})
