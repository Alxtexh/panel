import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import StatStrip from './StatStrip.vue'

/**
 * The strip covers what it was told to cover, and opens where you click.
 *
 * TWO RULES ARE EASY TO BREAK BY ACCIDENT and neither shows up as an error:
 * a default that stops covering anything, and a per-cell toggle that mutates a
 * `Set` in place so the data changes and the DOM does not. Both render a strip
 * that looks fine and behaves wrongly, which is why they are asserted here
 * rather than left to the eye.
 */
const SEGMENTS = [
    { key: 'today', label: 'Today', value: 10 },
    { key: 'week', label: 'Last 7 days', value: 20 },
]

/** The dots are a button; a plain value is not. */
const maskedCells = (w: ReturnType<typeof mount>) =>
    w.findAll('button').filter((b) => (b.attributes('aria-label') ?? '').includes('hidden'))

describe('StatStrip', () => {
    it('covers every segment by default, so an upgrade cannot silently reveal one', () => {
        const wrapper = mount(StatStrip, { props: { segments: SEGMENTS } })

        expect(maskedCells(wrapper)).toHaveLength(2)
        expect(wrapper.text()).not.toContain('10')
    })

    /**
     * THE POINT OF `sensitive`: one cell covered, the rest readable. Before it
     * existed the strip was all-or-nothing, so a strip pairing one private
     * number with three public ones had to cover all four.
     */
    it('covers only the segments declared sensitive', () => {
        const wrapper = mount(StatStrip, {
            props: {
                segments: [
                    { ...SEGMENTS[0], sensitive: true },
                    { ...SEGMENTS[1], sensitive: false },
                ],
            },
        })

        expect(maskedCells(wrapper)).toHaveLength(1)
        // The insensitive one is readable immediately; the sensitive one is not.
        expect(wrapper.text()).toContain('20')
        expect(wrapper.text()).not.toContain('10')
    })

    it('offers no eye when nothing is sensitive', () => {
        const wrapper = mount(StatStrip, {
            props: { segments: SEGMENTS.map((s) => ({ ...s, sensitive: false })) },
        })

        const eyes = wrapper
            .findAll('button')
            .filter((b) => (b.attributes('aria-label') ?? '').includes('all values'))

        expect(eyes).toHaveLength(0)
        expect(wrapper.text()).toContain('10')
    })

    /** Clicking the cell is the gesture people try first, so it must work. */
    it('reveals one segment when its value is clicked, leaving the other covered', async () => {
        const wrapper = mount(StatStrip, { props: { segments: SEGMENTS } })

        await maskedCells(wrapper)[0].trigger('click')

        expect(wrapper.text()).toContain('10')
        expect(wrapper.text()).not.toContain('20')
        expect(maskedCells(wrapper)).toHaveLength(1)
    })

    it('hides that segment again when the revealed value is clicked', async () => {
        const wrapper = mount(StatStrip, { props: { segments: SEGMENTS } })

        await maskedCells(wrapper)[0].trigger('click')
        const revealed = wrapper
            .findAll('button')
            .filter((b) => (b.attributes('aria-label') ?? '').includes('Hide it'))

        expect(revealed).toHaveLength(1)

        await revealed[0].trigger('click')

        expect(wrapper.text()).not.toContain('10')
        expect(maskedCells(wrapper)).toHaveLength(2)
    })

    /** The eye is still the one click that does all of them. */
    it('reveals and re-hides everything from the eye', async () => {
        const wrapper = mount(StatStrip, { props: { segments: SEGMENTS } })

        const eye = () =>
            wrapper
                .findAll('button')
                .filter((b) => (b.attributes('aria-label') ?? '').includes('all values'))[0]

        await eye().trigger('click')

        expect(wrapper.text()).toContain('10')
        expect(wrapper.text()).toContain('20')

        await eye().trigger('click')

        expect(maskedCells(wrapper)).toHaveLength(2)
    })

    /**
     * RE-HIDING ONE CELL WHILE "SHOW ALL" IS ON must not leave that cell
     * instantly revealed again by the master switch, nor drag the others down
     * with it.
     */
    it('keeps the other segments visible when one is re-hidden after showing all', async () => {
        const wrapper = mount(StatStrip, { props: { segments: SEGMENTS } })

        const eye = wrapper
            .findAll('button')
            .filter((b) => (b.attributes('aria-label') ?? '').includes('all values'))[0]

        await eye.trigger('click')

        const first = wrapper
            .findAll('button')
            .filter((b) => (b.attributes('aria-label') ?? '').includes('Today'))[0]

        await first.trigger('click')

        expect(wrapper.text()).not.toContain('10')
        expect(wrapper.text()).toContain('20')
    })

    it('does not stretch a leftover stat across the empty track', () => {
        const wrapper = mount(StatStrip, {
            props: {
                columns: 6,
                maskable: false,
                segments: [
                    { key: 'a', label: 'A', value: 1, sensitive: false },
                    { key: 'b', label: 'B', value: 2, sensitive: false },
                    { key: 'c', label: 'C', value: 3, sensitive: false },
                    { key: 'd', label: 'D', value: 4, sensitive: false },
                    { key: 'e', label: 'E', value: 5, sensitive: false },
                    { key: 'f', label: 'F', value: 6, sensitive: false },
                    { key: 'g', label: 'Routers online', value: 7, sensitive: false },
                ],
            },
        })

        expect(wrapper.find('[data-slot="stat-packed"]').exists()).toBe(true)
        expect(wrapper.find('[data-slot="stat-leftover"]').exists()).toBe(true)
        expect(wrapper.find('[data-slot="stat-leftover"]').text()).toContain('Routers online')
        expect(wrapper.find('[data-slot="stat-packed"]').text()).not.toContain('Routers online')
    })
})
