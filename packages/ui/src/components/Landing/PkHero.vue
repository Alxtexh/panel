<script setup lang="ts">
/**
 * The first screen: what this is, and the one thing to do about it.
 *
 * TWO ACTIONS AT MOST, and the primary is last - the same rule the panel's
 * headers follow (DESIGN_RULES 1 and 2). A hero offering four equal buttons is
 * a page asking the visitor to make a decision instead of making one for them.
 *
 * BRAND FIRST ON MARKETING LANDINGS. When `brand` is set it is a hero-level
 * signal, not a nav-only label. `variant="bleed"` makes the first viewport a
 * full-bleed composition rather than a short centered band.
 */
import PkSection from './PkSection.vue'

withDefaults(
    defineProps<{
        brand?: string
        eyebrow?: string
        title?: string
        body?: string
        primaryLabel?: string
        primaryHref?: string
        secondaryLabel?: string
        secondaryHref?: string
        note?: string
        /** centered = short band; bleed = dominant first viewport */
        variant?: 'centered' | 'bleed'
    }>(),
    { variant: 'centered' },
)
</script>

<template>
    <PkSection>
        <div
            class="flex flex-col items-center gap-6 text-center"
            :class="variant === 'bleed' ? 'min-h-[70vh] justify-center py-8 sm:py-12' : ''"
        >
            <p
                v-if="brand"
                class="pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
            >
                {{ brand }}
            </p>

            <p
                v-if="eyebrow"
                class="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
            >
                {{ eyebrow }}
            </p>

            <h1
                class="max-w-3xl font-semibold tracking-tight text-balance"
                :class="
                    brand
                        ? 'text-2xl sm:text-3xl md:text-4xl'
                        : 'text-4xl sm:text-5xl'
                "
            >
                {{ title }}
            </h1>

            <p v-if="body" class="max-w-2xl text-lg text-pretty text-muted-foreground">
                {{ body }}
            </p>

            <div
                v-if="primaryLabel || secondaryLabel"
                class="flex flex-wrap items-center justify-center gap-3"
            >
                <a
                    v-if="secondaryLabel"
                    :href="secondaryHref ?? '#'"
                    class="inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
                >
                    {{ secondaryLabel }}
                </a>

                <a
                    v-if="primaryLabel"
                    :href="primaryHref ?? '#'"
                    class="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                    {{ primaryLabel }}
                </a>
            </div>

            <!-- "No card required" belongs here, small, not as a third button. -->
            <p v-if="note" class="text-xs font-normal text-muted-foreground">{{ note }}</p>
        </div>
    </PkSection>
</template>
