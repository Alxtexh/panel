import { describe, expect, it } from 'vitest'
import {
    CATALOGUE_CONTAINER,
    CATALOGUE_GRID,
    CATALOGUE_GRID_TIGHT,
    CATALOGUE_GRID_TILES,
} from './catalogueGrid'

describe('catalogueGrid', () => {
    it('scales columns from content pane width via container queries', () => {
        expect(CATALOGUE_CONTAINER).toBe('@container min-w-0')
        expect(CATALOGUE_GRID).toBe(
            'grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3',
        )
        expect(CATALOGUE_GRID_TIGHT).toBe(
            'grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3',
        )
        expect(CATALOGUE_GRID_TILES).toBe(
            'grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3',
        )
        expect(CATALOGUE_GRID).toMatch(/@3xl:grid-cols-3/)
        expect(CATALOGUE_GRID_TIGHT).toMatch(/@3xl:grid-cols-3/)
        expect(CATALOGUE_GRID_TILES).toMatch(/@3xl:grid-cols-3/)
        expect(CATALOGUE_GRID).toMatch(/@lg:grid-cols-2/)
        expect(CATALOGUE_GRID).not.toMatch(/\bsm:grid-cols-2\b/)
        expect(CATALOGUE_GRID).not.toMatch(/\bxl:grid-cols-3\b/)
        expect(CATALOGUE_GRID).not.toMatch(/mx-auto/)
    })
})
