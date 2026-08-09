import { DOMWrapper, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import PkDropdown from './PkDropdown.vue'

/**
 * A menu is as wide as what is in it.
 *
 * WHY THIS TEST EXISTS. The panel used to take a `width` prop and apply it
 * literally - `w-56` by default, `w-52` from the row and bulk menus - so a menu
 * holding a single "Delete" rendered 208 pixels wide with the word floating in
 * it. Nothing ever measured the content. It looked like a layout bug on every
 * short menu in the panel, and it was one line.
 *
 * The fix is a distinction between a MINIMUM and a fixed size, and the thing
 * worth pinning is that the default never reintroduces the second.
 */
/**
 * THE PANEL IS TELEPORTED TO `<body>`, so `wrapper.find` never sees it - only
 * the real DOM does. `attachTo` is what makes jsdom's Teleport target exist at
 * all. The first version of this file queried the wrapper and failed four times
 * over on an empty DOMWrapper, which says nothing about widths.
 */
const open = async (props: Record<string, unknown> = {}) => {
    const wrapper = mount(PkDropdown, {
        props,
        slots: {
            trigger: '<button type="button">Open</button>',
            panel: '<button type="button">Delete</button>',
        },
        attachTo: document.body,
    })

    await wrapper.find('button').trigger('click')

    return new DOMWrapper(document.body).find('[data-pk-overlay]')
}

describe('PkDropdown sizing', () => {
    /*
     * A TELEPORTED PANEL OUTLIVES ITS TEST. Each mount leaves one in `body`, so
     * `find` returned the FIRST - an earlier test's panel - and the fixed-width
     * case failed against a default-width leftover. Clearing between cases is
     * what makes each assertion about the panel it just opened.
     */
    afterEach(() => {
        document.body.innerHTML = ''
    })

    it('does not pin the panel to a fixed width by default', async () => {
        const panel = await open()

        expect(panel.exists()).toBe(true)

        const classes = panel.classes()

        /*
         * A `w-<n>` class is the bug. `w-max` is the fix - it is what lets the
         * panel take its content's width - so it is allowed and everything else
         * of that shape is not.
         */
        const fixed = classes.filter((c) => /^w-\d/.test(c))

        expect(fixed, `panel carries a fixed width: ${fixed.join(' ')}`).toEqual([])
        expect(classes).toContain('w-max')
    })

    /*
     * THE MINIMUM IS AN INLINE STYLE, NOT A CLASS, and this test only exists
     * because the two were both present and the class lost. An inline
     * `min-width` beats a class, so a 30-pixel icon trigger set
     * `min-width: 30px` and cancelled a perfectly valid `min-w-[10rem]` sitting
     * right beside it. The menu rendered at 96 pixels with the correct class on
     * it, which is exactly why a class assertion could not catch it.
     *
     * jsdom gives every element a zero-size box, so the computed floor here is
     * the constant rather than a trigger measurement - which is the half worth
     * pinning: that the constant is applied at all.
     */
    it('sets its minimum width as a style rather than a class', async () => {
        const panel = await open()

        expect(panel.classes().filter((c) => c.startsWith('min-w-'))).toEqual([])
        expect(panel.attributes('style')).toContain('min-width: 160px')
    })

    it('caps the width so a long label cannot stretch it across the screen', async () => {
        expect((await open()).classes()).toContain('max-w-sm')
    })

    /**
     * A FIXED WIDTH IS STILL AVAILABLE, because one caller genuinely wants it:
     * the filter panel is a form, and a form that reflows as its contents change
     * is worse than one that does not.
     */
    it('honours an explicit fixed width when a caller asks for one', async () => {
        expect((await open({ width: 'w-80' })).classes()).toContain('w-80')
    })
})
