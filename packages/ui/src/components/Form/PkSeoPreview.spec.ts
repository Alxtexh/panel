import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PkSeoPreview from './PkSeoPreview.vue'

/**
 * The preview reads its SIBLINGS, which is the whole reason it exists and the
 * one thing a `v-model` control cannot do. Everything here is about that
 * relationship and about truncation being honest.
 */
describe('PkSeoPreview', () => {
    const field = {
        watch: { title: 'seo_title', description: 'seo_description' },
        siteUrl: 'https://example.test',
        path: '/plans/fibre-20',
        limits: { titleMax: 60, titleMin: 30, descriptionMax: 160, descriptionMin: 70 },
    }

    const mountWith = (values: Record<string, unknown>) =>
        mount(PkSeoPreview, { props: { field, values } })

    it('renders the sibling title rather than its own value', () => {
        const wrapper = mountWith({ seo_title: 'Fibre 20 Mbps home broadband' })

        expect(wrapper.text()).toContain('Fibre 20 Mbps home broadband')
    })

    /**
     * THE POINT OF A PREVIEW OVER A COUNTER. 74 characters is a number; seeing
     * the sentence stop mid-word is the fact.
     */
    it('truncates a title past the limit, without exceeding it', () => {
        const title = 'a'.repeat(80)
        const wrapper = mountWith({ seo_title: title })

        expect(wrapper.text()).toContain('…')
        expect(wrapper.text()).not.toContain(title)
    })

    it('leaves a title inside the limit untouched', () => {
        const title = 'Fibre 20 Mbps home broadband, installed free'
        const wrapper = mountWith({ seo_title: title })

        expect(wrapper.text()).toContain(title)
        // No ellipsis on a title that fits.
        expect(wrapper.find('p.text-lg').text()).not.toContain('…')
    })

    /** An engine never prints the scheme, so neither does the breadcrumb. */
    it('draws the breadcrumb without a scheme', () => {
        const wrapper = mountWith({})

        expect(wrapper.text()).toContain('example.test')
        expect(wrapper.text()).not.toContain('https://')
    })

    it('says what an empty page will look like rather than rendering blank', () => {
        const wrapper = mountWith({})

        expect(wrapper.text()).toContain('Untitled page')
        expect(wrapper.text()).toContain('No description')
    })

    /**
     * THE BUDGET WORDS ARE THE SEVERITY, and `short` must not read as an error -
     * a page called "Contact" is legitimately short. Only over-length is amber.
     */
    it('marks an over-length description as truncated and a short one as short', () => {
        expect(mountWith({ seo_description: 'x'.repeat(200) }).text()).toContain('truncated')
        expect(mountWith({ seo_description: 'Too short.' }).text()).toContain('short')
    })

    it('marks a well-sized title as good', () => {
        const wrapper = mountWith({ seo_title: 'Fibre 20 Mbps home broadband, installed free' })

        expect(wrapper.text()).toContain('good')
    })

    /**
     * THE LIMITS ARE THE SERVER'S. A component that fell back to its own numbers
     * when the field omitted them would disagree with the analyser silently, so
     * the fallback exists but the supplied value must win.
     */
    it('uses the limits the field supplies rather than its defaults', () => {
        const wrapper = mount(PkSeoPreview, {
            props: {
                field: { ...field, limits: { ...field.limits, titleMax: 10 } },
                values: { seo_title: 'This is definitely longer than ten' },
            },
        })

        expect(wrapper.text()).toContain('/10')
        expect(wrapper.text()).toContain('truncated')
    })
})
