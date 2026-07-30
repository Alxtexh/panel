import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkDocument from './PkDocument.vue'

function branding(overrides: Partial<{ company: string; accent: string; mono: boolean }> = {}) {
    return { company: 'Nairobi Fibre', logoUrl: null, accent: '#0f766e', mono: false, ...overrides }
}

describe('PkDocument', () => {
    /**
     * THE PROPERTY THE WHOLE FEATURE RESTS ON, restated as a unit test: this
     * component is the ONLY renderer, used by the designer's live preview and
     * the print page alike. It knows nothing about invoices - it dispatches on
     * `block.type` - so a kind a plugin registers renders correctly here without
     * this file changing.
     */
    it('renders a header, its title, and its reference', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [{ type: 'header', title: 'Invoice', reference: 'INV-000001', meta: [] }],
                    branding: branding(),
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.find('h1').text()).toBe('Invoice')
        expect(wrapper.text()).toContain('INV-000001')
    })

    it('renders a code block through PkCodeBox, with the document accent', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [{ type: 'code', code: 'ABCD-1234', style: 'pill', caption: '' }],
                    branding: branding({ accent: '#c2410c' }),
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.text()).toContain('ABCD-1234')
        expect(wrapper.find('.rounded-full').exists()).toBe(true)
    })

    /**
     * AN UNKNOWN BLOCK TYPE IS SHOWN, not silently dropped. This is what makes a
     * plugin's newer kind fail LOUDLY against an older renderer instead of
     * producing a document that is missing a section with nothing anywhere
     * saying so - the failure mode the component's own comment calls out.
     */
    it('shows an unknown block type rather than skipping it', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [{ type: 'signature-pad', data: 'whatever' }],
                    branding: branding(),
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.text()).toContain('signature-pad')
        expect(wrapper.text()).toContain('cannot draw')
    })

    /**
     * `mono` IS BLACK, NOT A DIMMER ACCENT. This is the exact property that
     * looked broken from the outside: an operator's accent has to visibly turn
     * black, or the control reads as doing nothing.
     */
    it('paints the heading and the header rule black when mono is set', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [{ type: 'header', title: 'Invoice', reference: '', meta: [] }],
                    branding: branding({ accent: '#c2410c', mono: true }),
                    version: 1,
                    sample: true,
                },
            },
        })

        /*
         * `rgb(0, 0, 0)`, NOT `#000000` - jsdom normalises an inline hex colour
         * to its `rgb()` form when it reflects the style attribute back, the
         * same way a real browser's `getComputedStyle` would. Asserting the hex
         * literal here would be asserting how the component's source is
         * written, not what the browser actually renders.
         */
        const h1 = wrapper.find('h1')
        expect(h1.attributes('style')).toContain('color: rgb(0, 0, 0)')

        const header = wrapper.find('header')
        expect(header.attributes('style')).toContain('border-color: rgb(0, 0, 0)')
    })

    it('uses the accent, not black, when mono is off', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [{ type: 'header', title: 'Invoice', reference: '', meta: [] }],
                    branding: branding({ accent: '#c2410c', mono: false }),
                    version: 1,
                    sample: true,
                },
            },
        })

        // #c2410c is rgb(194, 65, 12) - see the note on the mono assertion above.
        expect(wrapper.find('h1').attributes('style')).toContain('color: rgb(194, 65, 12)')
    })

    /**
     * A MISSING LOGO FALLS BACK TO THE NAME, not a gap in the corner. This is
     * deliberately not "the branding renders the company name" in general - it
     * is the specific fallback path, which only fires when `logoUrl` is falsy.
     */
    it('shows the company name as a wordmark when there is no logo', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [],
                    branding: branding({ company: 'Nairobi Fibre' }),
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.find('img').exists()).toBe(false)
        expect(wrapper.text()).toContain('Nairobi Fibre')
    })

    it('shows the logo image instead of the wordmark when one is set', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [],
                    branding: { ...branding(), logoUrl: 'https://example.test/logo.png' },
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.find('img').attributes('src')).toBe('https://example.test/logo.png')
    })

    /**
     * THE SECOND BUG, at unit scale. `pl-3 text-right whitespace-nowrap` on every
     * column but the first is what stops `1`, `100,000.00` and `100,000.00`
     * running together into `1100,000.00100,000.00`. This asserts the class is
     * present on a real lines block rather than trusting the browser test alone
     * to catch a regression - a unit test runs in milliseconds and every commit.
     */
    it('gives every line-item column but the first room to breathe', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [
                        {
                            type: 'lines',
                            columns: ['Description', 'Qty', 'Unit', 'Amount'],
                            rows: [
                                {
                                    description: '100Mbps Home',
                                    detail: '',
                                    cells: ['1', '100,000.00', '100,000.00'],
                                },
                            ],
                            empty: 'Nothing to bill.',
                            totals: [],
                        },
                    ],
                    branding: branding(),
                    version: 1,
                    sample: true,
                },
            },
        })

        const dataCells = wrapper.findAll('tbody td').slice(1) // skip the description cell
        expect(dataCells.length).toBe(3)

        for (const cell of dataCells) {
            expect(cell.classes()).toContain('pl-3')
            expect(cell.classes()).toContain('whitespace-nowrap')
        }
    })

    it('shows the empty-lines message when there are no rows', () => {
        const wrapper = mount(PkDocument, {
            props: {
                document: {
                    blocks: [
                        {
                            type: 'lines',
                            columns: ['Description'],
                            rows: [],
                            empty: 'Nothing to bill on this invoice.',
                            totals: [],
                        },
                    ],
                    branding: branding(),
                    version: 1,
                    sample: true,
                },
            },
        })

        expect(wrapper.text()).toContain('Nothing to bill on this invoice.')
    })
})
