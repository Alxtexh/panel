<script setup lang="ts">
/**
 * A landing page, rendered from stored blocks.
 *
 * THIS IS THE WHOLE POINT OF THE LIBRARY. The three shipped designs used to be
 * three hand-written pages, so a fourth meant writing a fourth file and editing
 * one meant a deploy. A page is now an ORDERED LIST OF SECTIONS, authored in the
 * panel through a builder field, and this maps each `type` onto the component
 * that draws it.
 *
 * AN UNKNOWN TYPE IS SKIPPED, NEVER THROWN. Blocks are stored data written by an
 * editor and read by a deploy that may be older or newer than they are; a
 * section renamed in a release must leave the rest of the page standing rather
 * than take the front door down. In development it says so, because silently
 * dropping a section somebody just authored is its own kind of lie.
 */
import { computed } from 'vue'
import type { LandingSection } from './types'
import PkCta from './PkCta.vue'
import PkFaq from './PkFaq.vue'
import PkFeatureGrid from './PkFeatureGrid.vue'
import PkHero from './PkHero.vue'
import PkLogoCloud from './PkLogoCloud.vue'
import PkPricing from './PkPricing.vue'
import PkStats from './PkStats.vue'
import PkSteps from './PkSteps.vue'
import PkTestimonials from './PkTestimonials.vue'

const props = withDefaults(
    defineProps<{ sections?: LandingSection[]; warnOnUnknown?: boolean }>(),
    {
        warnOnUnknown: false,
    },
)

/** The registry. One entry per block type the panel offers. */
const REGISTRY: Record<string, unknown> = {
    hero: PkHero,
    logos: PkLogoCloud,
    features: PkFeatureGrid,
    steps: PkSteps,
    stats: PkStats,
    testimonials: PkTestimonials,
    pricing: PkPricing,
    faq: PkFaq,
    cta: PkCta,
}

const resolved = computed(() =>
    (props.sections ?? [])
        .map((section, index) => ({
            key: `${section.type}-${index}`,
            component: REGISTRY[section.type],
            type: section.type,
            data: section.data ?? {},
        }))
        .filter((entry) => {
            if (!entry.component && props.warnOnUnknown) {
                // eslint-disable-next-line no-console
                console.warn(`[panelkit] Unknown landing section "${entry.type}" - skipped.`)
            }

            return !!entry.component
        }),
)

defineExpose({ known: Object.keys(REGISTRY) })
</script>

<template>
    <component
        :is="entry.component"
        v-for="entry in resolved"
        :key="entry.key"
        v-bind="entry.data"
    />
</template>
