import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Toaster from './Toaster.vue'

/**
 * The toast outlet, and the one behaviour that changed when it stopped
 * importing its prop type.
 *
 * WHY IT CHANGED. `defineProps<ToasterProps>()` with `ToasterProps` imported
 * from `vue-sonner` made the PUBLISHED package unbuildable: `inertia/` ships as
 * source, a consumer compiles this file out of `node_modules`, and
 * `@vue/compiler-sfc` cannot resolve a type across a package boundary from
 * there. `scripts/verify-install.sh` catches that; this file catches the
 * regression the fix could have introduced.
 *
 * THE RISK WAS SILENT PROP LOSS. The component used to forward everything with
 * `v-bind="props"`. Declaring only `class` means everything else now arrives as
 * a FALLTHROUGH ATTRIBUTE, which Vue applies to a single component root by
 * itself - so the forwarding still happens, by a different mechanism. If that
 * assumption were wrong, `position`, `duration` and `richColors` would simply
 * stop working, with no error anywhere and toasts still appearing.
 */
describe('Toaster', () => {
    it('renders the sonner outlet', () => {
        expect(mount(Toaster).html()).toContain('data-sonner-toaster')
    })

    /**
     * THE ASSERTION THE FIX RESTS ON. Vue forwards undeclared attributes to a
     * single component root, so a caller's sonner options still reach `Sonner`
     * without this component naming any of them.
     *
     * COMPARED AGAINST THE DEFAULT RENDER RATHER THAN A LITERAL, for two
     * reasons. Sonner does not echo `position` back - it splits the value into
     * `data-y-position` and `data-x-position` - so asserting the string
     * `top-center` fails against markup that honoured it perfectly. And
     * asserting a fixed pair would pass if that pair happened to be the
     * default, which proves nothing about forwarding at all.
     */
    it('forwards options it does not declare', () => {
        const withDefault = mount(Toaster).html()
        const withPosition = mount(Toaster, { props: { position: 'top-center' } }).html()

        expect(withPosition).toContain('data-y-position="top"')
        expect(withPosition).toContain('data-x-position="center"')
        expect(withPosition).not.toBe(withDefault)
    })

    /**
     * `class` IS THE ONE PROP IT DECLARES, because it merges rather than
     * replaces - the outlet's own `toaster group` has to survive a caller
     * passing their own class. Declaring it also removes it from the
     * fallthrough attributes, so it cannot be applied twice.
     */
    it('merges a caller class with its own', () => {
        const html = mount(Toaster, { props: { class: 'my-outlet' } }).html()

        expect(html).toContain('my-outlet')
        expect(html).toContain('toaster')
    })
})
