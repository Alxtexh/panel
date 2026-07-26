import { watchEffect, type Ref } from 'vue'

/**
 * Applies per-tenant branding as CSS custom properties on :root.
 *
 * Spec §8: branding overrides tokens at RUNTIME. Never compile a per-tenant CSS
 * bundle — that turns a colour change into a deploy, and multiplies build output
 * by the tenant count.
 *
 * Values are written through UNCHANGED. antipatterns §6.2 is the failure to
 * avoid: a token was wrapped in `rgb()` on the assumption it held a
 * space-separated triple, it actually held a complete colour, the result was
 * invalid CSS, and the element rendered transparent — invisible in light mode
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
        if (typeof document === 'undefined') return

        const root = document.documentElement

        for (const [token, value] of Object.entries(colors.value ?? {})) {
            if (!SAFE_TOKEN.test(token) || typeof value !== 'string' || !SAFE_VALUE.test(value)) {
                // Skip silently rather than throw: a malformed brand colour must
                // not take the panel down, and the default token still applies.
                continue
            }

            root.style.setProperty(`--color-${token}`, value)
        }
    })
}
