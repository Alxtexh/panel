import { describe, expect, it, beforeEach } from 'vitest'
import { useColumnWidths } from './useColumnWidths'

describe('useColumnWidths', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('persists a resized width and clamps extremes', () => {
        const { widths, setWidth } = useColumnWidths('test.widths')

        setWidth('name', 220)
        expect(widths.value.name).toBe(220)
        expect(JSON.parse(localStorage.getItem('test.widths') ?? '{}')).toEqual({ name: 220 })

        setWidth('name', 10)
        expect(widths.value.name).toBe(48)

        setWidth('name', 5000)
        expect(widths.value.name).toBe(1200)
    })

    it('replaces the map via setWidths', () => {
        const { widths, setWidths } = useColumnWidths('test.widths.replace')

        setWidths({ name: 180, status: 20, drop: Number.NaN as unknown as number })
        expect(widths.value).toEqual({ name: 180 })
    })
})
