import { describe, expect, it } from 'vitest'
import {
    CATALOGUE_GRID,
    CATALOGUE_GRID_TIGHT,
    CATALOGUE_GRID_TILES,
} from './catalogueGrid'

describe('catalogueGrid', () => {
    it('scales to three columns on wide desktops', () => {
        expect(CATALOGUE_GRID).toBe('grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3')
        expect(CATALOGUE_GRID_TIGHT).toBe('grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3')
        expect(CATALOGUE_GRID_TILES).toBe('grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3')
        expect(CATALOGUE_GRID).toMatch(/xl:grid-cols-3/)
        expect(CATALOGUE_GRID_TIGHT).toMatch(/xl:grid-cols-3/)
        expect(CATALOGUE_GRID_TILES).toMatch(/xl:grid-cols-3/)
        expect(CATALOGUE_GRID).not.toMatch(/mx-auto/)
    })
})
