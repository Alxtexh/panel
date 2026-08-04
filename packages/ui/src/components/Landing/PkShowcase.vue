<script setup lang="ts">
/**
 * A product window that assembles itself as you scroll past it.
 *
 * THE SECTION IS TALL AND THE FRAME IS STICKY, which is what turns scrolling
 * into a timeline: the reader's own movement drives the animation over a
 * distance they control, rather than watching something play at them. It lifts
 * out of perspective, straightens, and fills with rows.
 *
 * IT DRAWS A PANEL RATHER THAN LOADING A SCREENSHOT. A picture of the product
 * goes stale the day the product changes and costs a request on the one page
 * that must be fast; this is markup, so it is sharp at any density, themed by
 * the same tokens as everything else, and cannot be out of date.
 *
 * The progress arrives as `--pk-progress` - see `useScrollProgress` for why it
 * is a CSS variable and not reactive state.
 */
import { useScrollProgress } from '../../composables/useScrollProgress'

withDefaults(defineProps<{ title?: string; body?: string; rows?: number; caption?: string }>(), {
    rows: 6,
})

const { el } = useScrollProgress()
</script>

<template>
    <section ref="el" class="pk-showcase relative w-full px-4 sm:px-6">
        <!-- Tall enough to give the sticky frame a runway to animate across. -->
        <div class="mx-auto h-[190vh] w-full max-w-6xl">
            <div class="sticky top-[12vh] flex flex-col items-center gap-8">
                <div class="flex max-w-2xl flex-col items-center gap-3 text-center">
                    <h2 class="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                        {{ title }}
                    </h2>
                    <p v-if="body" class="text-pretty text-muted-foreground">{{ body }}</p>
                </div>

                <div class="pk-showcase-stage w-full [perspective:1400px]">
                    <div
                        class="pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl"
                    >
                        <!-- Window chrome: three dots and an address, like the thing it depicts. -->
                        <div class="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
                            <span class="size-2.5 rounded-full bg-red-400/70" />
                            <span class="size-2.5 rounded-full bg-amber-400/70" />
                            <span class="size-2.5 rounded-full bg-emerald-400/70" />
                            <span class="ml-3 truncate text-xs text-muted-foreground">
                                {{ caption ?? 'yourpanel.example / records' }}
                            </span>
                        </div>

                        <div class="flex">
                            <!-- A suggestion of a sidebar: shape, not content. -->
                            <div class="hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex">
                                <span
                                    v-for="n in 6"
                                    :key="n"
                                    class="h-2.5 rounded bg-foreground/10"
                                    :style="{ width: `${55 + ((n * 13) % 40)}%` }"
                                />
                            </div>

                            <div class="min-w-0 flex-1 p-4">
                                <div class="mb-3 flex gap-2">
                                    <span class="h-7 w-28 rounded-md bg-foreground/[0.07]" />
                                    <span class="h-7 w-20 rounded-md bg-foreground/[0.07]" />
                                    <span class="ml-auto h-7 w-24 rounded-md bg-primary/25" />
                                </div>

                                <!--
                                    THE ROWS ARRIVE IN SEQUENCE, each one keyed off
                                    the same scroll progress with its own offset - so
                                    the table fills as the reader descends rather
                                    than appearing all at once.
                                -->
                                <div class="flex flex-col divide-y rounded-md border">
                                    <div
                                        v-for="n in rows"
                                        :key="n"
                                        class="pk-showcase-row flex items-center gap-3 px-3 py-2.5"
                                        :style="{ '--pk-row': String(n) }"
                                    >
                                        <span
                                            class="size-6 shrink-0 rounded-full bg-foreground/10"
                                        />
                                        <span class="h-2.5 flex-1 rounded bg-foreground/10" />
                                        <span
                                            class="hidden h-2.5 w-24 rounded bg-foreground/[0.07] sm:block"
                                        />
                                        <span class="h-5 w-14 rounded-full bg-emerald-500/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.pk-showcase-frame {
    /*
     * Lifts out of perspective and straightens across the first two thirds of
     * the section, then simply holds - so the last third is reading time rather
     * than more movement.
     */
    --pk-t: clamp(0, calc(var(--pk-progress, 0) * 1.6), 1);

    transform: rotateX(calc((1 - var(--pk-t)) * 26deg)) scale(calc(0.9 + var(--pk-t) * 0.1));
    opacity: calc(0.35 + var(--pk-t) * 0.65);
    transform-origin: 50% 0%;
    will-change: transform, opacity;
}

.pk-showcase-row {
    /* Each row waits its turn, then fades and slides into place. */
    --pk-row-t: clamp(0, calc((var(--pk-progress, 0) - 0.28 - var(--pk-row, 1) * 0.055) * 12), 1);

    opacity: var(--pk-row-t);
    transform: translateY(calc((1 - var(--pk-row-t)) * 0.5rem));
}

@media (prefers-reduced-motion: reduce) {
    .pk-showcase-frame,
    .pk-showcase-row {
        transform: none;
        opacity: 1;
    }
}
</style>
