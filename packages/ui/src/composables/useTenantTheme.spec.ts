import { beforeEach, describe, expect, it } from 'vitest'
import { ref } from 'vue'
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
         * `--ring` IS SET, by the appearance defaults - so the assertion is
         * that the REJECTED value did not land, not that the property is
         * unset. Checking for emptiness here would pass for the wrong reason
         * and go red the day appearance stopped setting a ring colour.
         */
        expect(style.cssText).not.toContain('example.test')
        expect(style.getPropertyValue('--ring')).not.toContain('url(')

        // A bad neighbour does not stop a good one: the panel still themes.
        expect(style.getPropertyValue('--primary')).toBe('#00ff00')
    })

    /**
     * WITH NO BRAND COLOUR, THE PERSONAL ACCENT STANDS. The appearance vars are
     * still written - this composable now hands its overrides to
     * `applyAppearance` rather than writing them itself, so "no overrides"
     * means the accent is untouched rather than that nothing happens.
     */
    it('leaves the accent alone when a tenant has set no colours', () => {
        const style = apply({})

        expect(style.getPropertyValue('--primary')).toBe('oklch(0.32 0.02 260)')
    })

    /** And a brand colour beats the personal accent, deliberately. */
    it('overrides the accent rather than losing to it', () => {
        expect(apply({ primary: '#b91c1c' }).getPropertyValue('--primary')).toBe('#b91c1c')
    })
})
