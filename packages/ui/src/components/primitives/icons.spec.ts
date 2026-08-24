import { describe, expect, it } from 'vitest'
import { ICON_PATHS, iconPath, resolveActionIcon } from './icons'

describe('resolveActionIcon', () => {
    it('uses a declared icon when the path is known', () => {
        expect(resolveActionIcon({ key: 'x', icon: 'trash' })).toBe(ICON_PATHS.trash)
    })

    it('maps Filament-shaped aliases onto kit paths', () => {
        expect(resolveActionIcon({ key: 'pay', icon: 'currency-dollar' })).toBe(ICON_PATHS.coins)
        expect(resolveActionIcon({ key: 'swap', icon: 'impersonate' })).toBe(ICON_PATHS['log-in'])
    })

    it('defaults common keys when the host omitted icon', () => {
        expect(resolveActionIcon({ key: 'recharge-credits', label: 'Recharge Credits' })).toBe(
            ICON_PATHS.coins,
        )
        expect(resolveActionIcon({ key: 'impersonate', label: 'Log in as user' })).toBe(
            ICON_PATHS['log-in'],
        )
        expect(resolveActionIcon({ key: 'delete', destructive: true })).toBe(ICON_PATHS.trash)
    })

    it('reads the label when the key is custom and icon is missing', () => {
        expect(
            resolveActionIcon({
                key: 'topup',
                label: 'Recharge Credits',
                color: 'success',
            }),
        ).toBe(ICON_PATHS.coins)

        expect(
            resolveActionIcon({
                key: 'become',
                label: 'Log in as user',
            }),
        ).toBe(ICON_PATHS['log-in'])
    })

    it('never returns the microscopic dot for a coloured menu action', () => {
        const path = resolveActionIcon({
            key: 'mystery',
            label: 'Do something',
            color: 'success',
        })

        expect(path).not.toBe(ICON_PATHS.dot)
        expect(path).toBe(ICON_PATHS.coins)
    })

    it('falls back to a hollow circle rather than a speck', () => {
        expect(resolveActionIcon({ key: 'mystery', label: 'Odd thing' })).toBe(ICON_PATHS.circle)
    })
})

describe('iconPath', () => {
    it('still uses the deliberate speck for a truly unknown chrome name', () => {
        expect(iconPath('not-a-real-glyph')).toBe(ICON_PATHS.dot)
    })
})
