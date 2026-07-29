<script setup lang="ts">
/**
 * A pure-CSS device frame around whatever is put inside it.
 *
 * A COMPONENT, NOT A PAGE. The frame is the reusable part - anything that wants
 * to show a mobile layout in context can wrap it, and there is no workbench, no
 * page picker and no code editor attached. Those were a tool built around the
 * frame; the frame is the thing.
 *
 * PURE CSS, NO DEVICE IMAGE. A bitmap bezel has to be sourced per device, ships
 * as an asset, and stops lining up the moment the frame is resized. A border, a
 * radius and a notch cost nothing and scale exactly.
 *
 * IT IS CHROME, NOT A VIEWPORT, and the distinction has to be stated because it
 * is the one thing people assume. Content in the slot is part of the OUTER
 * document, so `sm:` and every other media query still resolve against the
 * browser window - a two-column grid inside a 390px frame will happily render
 * two columns. The frame makes something LOOK like it is on a phone; it does not
 * make it BE on one.
 *
 * For a genuine viewport, put an `<iframe>` in the slot: an iframe has its own
 * window, so `@media (max-width: 640px)` means what it says. That is a heavier
 * thing to reach for, which is why it is a choice rather than the default.
 *
 * `box-content` so the bezel does not eat into the declared width - Tailwind's
 * default `box-border` made a frame asked for 390 deliver 370, and for anything
 * claiming a device width that is the one measurement that must not lie.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        width?: number
        height?: number
        /** A phone has one; a tablet does not. Ignored on a laptop. */
        notch?: boolean
        /**
         * The kind of chrome to draw.
         *
         * A LAPTOP IS NOT A LARGE PHONE, and drawing one as a 1440px rounded
         * rectangle with a notch reads as a tablet nobody makes. The bezel is
         * thin, the corners are barely rounded, and there is a base underneath -
         * which is also the cue that tells somebody at a glance which width they
         * are looking at, without reading the number.
         */
        kind?: 'phone' | 'laptop'
    }>(),
    { width: 390, height: 844, notch: true, kind: 'phone' },
)

const isLaptop = computed(() => props.kind === 'laptop')

/*
 * THE PHONE'S BEZEL IS THICK AND THE LAPTOP'S IS NOT, and the inner radius has
 * to follow the outer one or the screen corners cut across the bezel.
 */
const shell = computed(() =>
    isLaptop.value
        ? 'rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700'
        : 'rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700',
)

const screen = computed(() => (isLaptop.value ? 'rounded-sm' : 'rounded-[2rem]'))
</script>

<template>
    <div class="flex shrink-0 flex-col items-center">
        <div
            class="relative box-content shadow-2xl"
            :class="shell"
            :style="{ width: `${width}px`, height: `${height}px` }"
        >
            <div
                v-if="notch && !isLaptop"
                class="absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700"
                aria-hidden="true"
            />

            <!--
                `overflow-hidden` with the inner radius, so content cannot escape
                the rounded corners - which is what makes a scrolling list inside
                the frame look like a screen rather than a rectangle with a border.
            -->
            <div class="size-full overflow-hidden bg-white" :class="screen">
                <slot />
            </div>
        </div>

        <!--
            THE BASE, and it is what makes a laptop read as a laptop. Wider than
            the screen and shallow, with the hinge notch at the front - the same
            trick as the phone's notch, done with two divs and no asset.

            `aria-hidden`, because it is decoration: a screen reader announcing
            "image, laptop base" between the frame and its content adds nothing.
        -->
        <template v-if="isLaptop">
            <div
                class="h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600"
                :style="{ width: `${width + 60}px` }"
                aria-hidden="true"
            />
            <div
                class="h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50"
                :style="{ width: `${Math.round(width / 6)}px` }"
                aria-hidden="true"
            />
        </template>
    </div>
</template>
