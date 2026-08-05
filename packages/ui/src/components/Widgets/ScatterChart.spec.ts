import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ScatterChart from './ScatterChart.vue'

/**
 * The two Filament chart types this closes, and the one thing charts get wrong.
 *
 * WHAT IS WORTH TESTING HERE IS THE ARITHMETIC, not that an SVG appeared. A
 * scatter that renders every mark in the same place still renders; a bubble
 * chart that maps value onto radius still draws circles. Both look like charts
 * and both are lying, which is exactly the class of bug a screenshot review
 * passes.
 */
const circles = (wrapper: ReturnType<typeof mount>) =>
    wrapper.findAll('circle').map((c) => ({
        cx: Number(c.attributes('cx')),
        cy: Number(c.attributes('cy')),
        r: Number(c.attributes('r')),
    }))

describe('ScatterChart - positions', () => {
    /**
     * BOTH AXES ARE MEASURED, which is the only reason to use this chart. A
     * LineChart places points by their turn in the list, so ten a day apart and
     * ten a year apart draw identically. Here the gaps carry information.
     */
    it('spaces points by value, not by index', () => {
        const wrapper = mount(ScatterChart, {
            props: {
                data: [
                    { x: 0, y: 0 },
                    { x: 1, y: 0 },
                    { x: 100, y: 0 },
                ],
            },
        })

        const [a, b, c] = circles(wrapper)

        // The third point is far from the second; the first two are close.
        expect(b.cx - a.cx).toBeLessThan((c.cx - b.cx) / 10)
    })

    /** SVG y grows downward and the reader expects up. */
    it('draws a larger y higher on the page', () => {
        const wrapper = mount(ScatterChart, {
            props: {
                data: [
                    { x: 0, y: 10 },
                    { x: 1, y: 90 },
                ],
            },
        })

        const [low, high] = circles(wrapper)

        expect(high.cy).toBeLessThan(low.cy)
    })

    /**
     * A COLUMN OF IDENTICAL VALUES gives a zero-width range. Divided through,
     * every mark stacks at one coordinate or becomes NaN and vanishes - and an
     * empty chart reads as "no data" rather than as a bug.
     */
    it('survives every point sharing a value', () => {
        const wrapper = mount(ScatterChart, {
            props: {
                data: [
                    { x: 5, y: 5 },
                    { x: 5, y: 5 },
                ],
            },
        })

        for (const circle of circles(wrapper)) {
            expect(Number.isFinite(circle.cx)).toBe(true)
            expect(Number.isFinite(circle.cy)).toBe(true)
        }
    })

    it('survives a single point', () => {
        const wrapper = mount(ScatterChart, { props: { data: [{ x: 42, y: 42 }] } })
        const [only] = circles(wrapper)

        expect(Number.isFinite(only.cx)).toBe(true)
        expect(Number.isFinite(only.cy)).toBe(true)
    })
})

describe('ScatterChart - bubbles', () => {
    /**
     * THE ONE THAT MATTERS. Mapping the value straight onto the radius
     * quadruples the ink for twice the quantity, so a reader comparing two
     * marks by eye reads a doubling as a quadrupling. Scaling by AREA is the
     * difference between a chart and a misleading one.
     *
     * Asserted as a ratio rather than as pixels: four times the value must
     * produce about twice the radius, whatever the max radius is set to.
     */
    it('scales bubbles by area, so twice the value is not twice the radius', () => {
        const wrapper = mount(ScatterChart, {
            props: {
                data: [
                    { x: 0, y: 0, r: 25 },
                    { x: 1, y: 1, r: 100 },
                ],
                maxRadius: 43,
            },
        })

        const [small, large] = circles(wrapper)

        // sqrt(25/100) = 0.5, sqrt(100/100) = 1 -> radii 3+0.5*40=23 and 3+40=43.
        expect(small.r).toBeCloseTo(23, 5)
        expect(large.r).toBeCloseTo(43, 5)

        // And emphatically NOT linear, which would have given 10 and 40.
        expect(small.r / large.r).toBeGreaterThan(0.5)
    })

    /** Without a radius on any point it is a scatter, and marks are uniform. */
    it('draws uniform marks when no point carries a size', () => {
        const wrapper = mount(ScatterChart, {
            props: {
                data: [
                    { x: 0, y: 0 },
                    { x: 1, y: 5 },
                ],
            },
        })

        const [a, b] = circles(wrapper)

        expect(a.r).toBe(b.r)
    })

    it('announces itself as a bubble chart when sized', () => {
        const wrapper = mount(ScatterChart, { props: { data: [{ x: 0, y: 0, r: 3 }] } })

        expect(wrapper.find('svg').attributes('aria-label')).toBe('Bubble chart')
    })

    it('announces itself as a scatter chart otherwise', () => {
        const wrapper = mount(ScatterChart, { props: { data: [{ x: 0, y: 0 }] } })

        expect(wrapper.find('svg').attributes('aria-label')).toBe('Scatter chart')
    })
})
