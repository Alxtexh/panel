<script setup lang="ts">
/**
 * The band every landing section sits in.
 *
 * ONE PLACE DECIDES VERTICAL RHYTHM AND WIDTH. Sections were three separate
 * pages before this, each choosing its own padding, so composing a page from
 * them produced gaps that grew and shrank for no reason a reader could see.
 * Rhythm is a property of the PAGE, not of the section that happens to be in
 * it, so it lives here and a section never sets its own outer spacing.
 */
import PkReveal from './PkReveal.vue'

withDefaults(
    defineProps<{
        /** A tinted band, for alternating sections without a border. */
        muted?: boolean
        /** Narrow, for prose-shaped sections like FAQ. */
        narrow?: boolean
        id?: string
    }>(),
    { muted: false, narrow: false },
)
</script>

<template>
    <section
        :id="id"
        class="pk-landing-section w-full px-4 sm:px-6"
        :class="muted ? 'bg-muted/40' : ''"
    >
        <div class="mx-auto w-full" :class="narrow ? 'max-w-3xl' : 'max-w-6xl'">
            <!--
                REVEAL LIVES HERE, ONCE, rather than in nine sections. A section
                is about its own content; that it arrives with a lift is a
                property of the page it is scrolled through.
            -->
            <PkReveal>
                <slot />
            </PkReveal>
        </div>
    </section>
</template>
