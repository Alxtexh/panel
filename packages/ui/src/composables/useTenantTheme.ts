import { watchEffect } from 'vue'
import type { Ref } from 'vue'
import { setTenantVars } from './useAppearance'

/**
 * Applies per-tenant branding as CSS custom properties on :root.
 *
 * Spec §8: branding overrides tokens at RUNTIME. Never compile a per-tenant CSS
 * bundle - that turns a colour change into a deploy, and multiplies build output
 * by the tenant count.
 *
 * IT WRITES `--primary`, NOT `--color-primary`, AND THAT IS THE WHOLE FEATURE.
 *
 * This composable spent its entire life setting `--color-{token}` and branding
 * never once applied. The stylesheet declares `--color-primary: var(--primary)`
 * inside `@theme`, and Tailwind resolves that at BUILD time - `bg-primary`
 * compiles to `background-color: var(--primary)`. So `--color-primary` is a
 * property with no reader: setting it succeeds, computes, inherits down the
 * whole tree, and changes nothing.
 *
 * Measured rather than reasoned about, on a probe element in the live panel:
 *
 *     before                     oklch(0.32 0.02 260)
 *     with --color-primary set   oklch(0.32 0.02 260)   <- no effect
 *     with --primary set         rgb(0, 0, 255)         <- applies
 *
 * `useAppearance` writes the unprefixed names and has always worked, which is
 * what made this survivable for so long: the panel was visibly themeable, just
 * never BY A TENANT. Seeded organisations carried brand colours that rendered
 * nowhere.
 *
 * Values are written through UNCHANGED. antipatterns §6.2 is the failure to
 * avoid: a token was wrapped in `rgb()` on the assumption it held a
 * space-separated triple, it actually held a complete colour, the result was
 * invalid CSS, and the element rendered transparent - invisible in light mode
 * and apparently fine in dark, so it shipped.
 *
 * Only keys matching a strict pattern are applied. The values arrive from a
 * database column an administrator can edit, and writing arbitrary strings into
 * a style attribute is how CSS injection happens.
 */
const SAFE_TOKEN = /^[a-z0-9-]+$/
const SAFE_VALUE = /^[a-zA-Z0-9\s.,()%#/-]+$/

export function useTenantTheme(colors: Ref<Record<string, string> | undefined>) {
    watchEffect(() => {
        if (typeof document === 'undefined') {
            return
        }

        const root = document.documentElement
        const vars: Record<string, string> = {}

        for (const [token, value] of Object.entries(colors.value ?? {})) {
            if (!SAFE_TOKEN.test(token) || typeof value !== 'string' || !SAFE_VALUE.test(value)) {
                // Skip silently rather than throw: a malformed brand colour must
                // not take the panel down, and the default token still applies.
                continue
            }

            vars[`--${token}`] = value
            root.style.setProperty(`--${token}`, value)
        }

        /*
         * WRITTEN HERE, RECORDED THERE. The properties are set directly - this
         * effect runs after boot, so the brand lands on top of the accent
         * without anything having to be re-applied.
         *
         * The registry is what keeps it there. `applyAppearance` merges these
         * last, so the next visit to the appearance drawer restyles everything
         * else and leaves the organisation's colour alone.
         */
        setTenantVars(vars)
    })
}
