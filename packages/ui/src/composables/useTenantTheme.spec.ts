import { beforeEach, describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { applyAppearance, readAppearance } from './useAppearance'
import { useTenantTheme } from './useTenantTheme'

/**
 * Per-tenant branding, and the property name that decides whether it exists.
 *
 * WHY THIS TEST EXISTS. This composable set `--color-{token}` for its whole
 * life and branding never applied once. The stylesheet declares
 * `--color-primary: var(--primary)` inside `@theme`, which Tailwind resolves at
 * BUILD time - `bg-primary` compiles to `background-color: var(--primary)`. So
 * `--color-primary` had no reader: setting it succeeded, computed, inherited
 * down the entire tree, and changed nothing.
 *
 * A TEST ASSERTING "the property was set" WOULD HAVE PASSED THE WHOLE TIME.
 * That is the trap this file is written against: the observable behaviour of a
 * custom property nothing reads is identical to one that works, right up to the
 * screenshot. So what is pinned here is the NAME, against the names
 * `useAppearance` writes - the ones demonstrably wired to the stylesheet.
 *
 * Measured in the live panel before changing it, on a probe element:
 *
 *     before                     oklch(0.32 0.02 260)
 *     with --color-primary set   oklch(0.32 0.02 260)   <- no effect
 *     with --primary set         rgb(0, 0, 255)         <- applies
 */
describe('useTenantTheme', () => {
    beforeEach(() => {
        document.documentElement.removeAttribute('style')
    })

    const apply = (colors: Record<string, string>) => {
        useTenantTheme(ref(colors))

        return document.documentElement.style
    }

    it('writes the token the stylesheet actually reads', () => {
        const style = apply({ primary: '#b91c1c' })

        expect(style.getPropertyValue('--primary')).toBe('#b91c1c')
    })

    /**
     * AND NOT THE ONE IT DOES NOT. Kept as its own case because this is the
     * regression: the prefixed name is not merely redundant, it is the bug.
     */
    it('does not write the prefixed name, which nothing consumes', () => {
        const style = apply({ primary: '#b91c1c' })

        expect(style.getPropertyValue('--color-primary')).toBe('')
    })

    /**
     * VALUES PASS THROUGH UNCHANGED - antipatterns §6.2. A token was once
     * wrapped in `rgb()` on the assumption it held a space-separated triple; it
     * held a complete colour, the result was invalid CSS, and the element
     * rendered transparent: invisible in light mode, fine in dark, so it
     * shipped.
     */
    it('passes a value through exactly as stored', () => {
        expect(apply({ primary: 'oklch(0.55 0.22 300)' }).getPropertyValue('--primary')).toBe(
            'oklch(0.55 0.22 300)',
        )
    })

    /*
     * THE VALUES COME FROM A DATABASE COLUMN AN ADMINISTRATOR EDITS, so they
     * are attacker-adjacent input on their way into a style attribute.
     */
    it('skips a token or value that could inject CSS', () => {
        const style = apply({
            'primary;color': '#fff',
            ring: 'red; background: url(https://example.test/x)',
            primary: '#00ff00',
        })

        /*
         * `--ring` HAS A VALUE - the appearance defaults set one - so what is
         * asserted is that the REJECTED string did not land, not that the
         * property is empty. Checking for emptiness would pass for the wrong
         * reason and go red the day the accent stopped setting a ring colour.
         */
        expect(style.cssText).not.toContain('example.test')
        expect(style.getPropertyValue('--ring')).not.toContain('url(')

        // A bad neighbour does not stop a good one: the panel still themes.
        expect(style.getPropertyValue('--primary')).toBe('#00ff00')
    })

    it('writes nothing when a tenant has set no colours', () => {
        expect(apply({}).cssText).toBe('')
    })

    /**
     * THE BRAND SURVIVES THE NEXT APPEARANCE CHANGE, which is the whole reason
     * the two are connected at all.
     *
     * Writing `--primary` here would be enough on its own - this effect runs
     * after boot - but only until somebody opens the drawer and picks an
     * accent. `applyAppearance` rewrites every token from the preference, so
     * without the registry the organisation's colour would vanish on a click
     * that had nothing to do with it.
     *
     * ASSERTED BY ACTUALLY CALLING IT, not by inspecting the registry. A test
     * that checked the variable was recorded would pass whether or not
     * anything merged it.
     */
    it('survives an accent change made in the drawer', () => {
        apply({ primary: '#b91c1c' })

        applyAppearance({ ...readAppearance(), primary: 'emerald' })

        const style = document.documentElement.style

        expect(style.getPropertyValue('--primary')).toBe('#b91c1c')

        // And the rest of the preference still applies - only the brand is held.
        expect(style.getPropertyValue('--pk-font-size')).not.toBe('')
    })
})
