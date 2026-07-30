<script setup lang="ts">
/**
 * The illustration on an error page.
 *
 * WHY THERE IS ONE AT ALL. A page whose loudest element is a number set in the
 * body font reads as an unhandled failure - the thing you see when something
 * broke before anyone styled it. That is the exact impression an error page
 * must not give, because most of these statuses are recoverable and the reader
 * needs to believe the panel is still working.
 *
 * DEPTH IS BUILT FROM LAYERS, NOT FROM A BITMAP. A soft radial bloom, a tilted
 * plate, a glyph, and a highlight - four elements that overlap, each with its
 * own gradient. That is what makes it read as dimensional, and it costs a few
 * hundred bytes of inline SVG rather than a raster asset per status, per theme,
 * per pixel density.
 *
 * THEME-AWARE BY CONSTRUCTION. Every colour is `currentColor` at varying
 * opacity over the page background, so the art follows the accent and the
 * light/dark setting without a second copy. A hardcoded palette would need one
 * illustration per theme and would drift the moment somebody changed the accent.
 *
 * THE GLYPH SAYS WHAT THE NUMBER MEANS. A padlock reads as "not for you" before
 * the sentence is read; a magnifier reads as "not here". That is the whole job
 * of the picture - the words underneath do the rest.
 */
import { computed } from 'vue';

const props = defineProps<{ status: number }>();

/**
 * Status → tone and glyph.
 *
 * Amber for "you asked for the wrong thing", rose for "we broke something",
 * slate for "it is temporary" - the same tone the heading uses, so the glance
 * and the read agree.
 */
const ART = {
    denied: { tone: 'text-amber-500', glyph: 'lock' },
    missing: { tone: 'text-sky-500', glyph: 'search' },
    broken: { tone: 'text-rose-500', glyph: 'alert' },
    waiting: { tone: 'text-slate-400', glyph: 'wrench' },
} as const;

const art = computed(() => {
    if (props.status >= 500 && props.status !== 503) {
        return ART.broken;
    }

    if (props.status === 503) {
        return ART.waiting;
    }

    if (props.status === 403 || props.status === 429) {
        return ART.denied;
    }

    return ART.missing;
});
</script>

<template>
    <div
        class="relative flex h-44 w-full items-center justify-center"
        :class="art.tone"
    >
        <!--
            The bloom. Sits behind everything and is what stops the plate
            looking pasted onto a flat page.
        -->
        <div
            class="absolute size-40 rounded-full opacity-20 blur-2xl"
            style="
                background: radial-gradient(
                    circle,
                    currentColor 0%,
                    transparent 70%
                );
            "
            aria-hidden="true"
        ></div>

        <svg
            class="relative size-40"
            viewBox="0 0 160 160"
            fill="none"
            role="img"
            :aria-label="`Error ${status}`"
        >
            <defs>
                <!-- Top-left light, bottom-right shadow: one consistent source,
                     which is most of what makes a flat shape read as solid. -->
                <linearGradient
                    :id="`plate-${status}`"
                    x1="0"
                    y1="0"
                    x2="0.7"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="currentColor"
                        stop-opacity="0.28"
                    />
                    <stop
                        offset="100%"
                        stop-color="currentColor"
                        stop-opacity="0.08"
                    />
                </linearGradient>

                <linearGradient
                    :id="`rim-${status}`"
                    x1="0"
                    y1="0"
                    x2="0.6"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stop-color="currentColor"
                        stop-opacity="0.55"
                    />
                    <stop
                        offset="100%"
                        stop-color="currentColor"
                        stop-opacity="0.15"
                    />
                </linearGradient>

                <linearGradient
                    :id="`sheen-${status}`"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop offset="0%" stop-color="white" stop-opacity="0.35" />
                    <stop offset="100%" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>

            <!-- The shadow the plate casts, offset down and right from the same
                 light source. -->
            <ellipse
                cx="80"
                cy="132"
                rx="46"
                ry="8"
                fill="currentColor"
                opacity="0.12"
            />

            <!-- The plate: a rounded square rotated slightly, so it reads as an
                 object sitting in space rather than an icon on a grid. -->
            <g transform="rotate(-8 80 74)">
                <rect
                    x="30"
                    y="24"
                    width="100"
                    height="100"
                    rx="30"
                    :fill="`url(#plate-${status})`"
                    :stroke="`url(#rim-${status})`"
                    stroke-width="1.5"
                />

                <!-- The highlight along the top edge. Small, and it does most of
                     the work - without it the plate is a flat translucent
                     square. -->
                <path
                    d="M52 26h56a24 24 0 0 1 20 11c-14-5-30-7-48-7s-34 2-48 7A24 24 0 0 1 52 26Z"
                    :fill="`url(#sheen-${status})`"
                />
            </g>

            <!-- The glyph, upright rather than rotated with the plate: a tilted
                 padlock reads as broken. -->
            <g
                transform="translate(80 72)"
                stroke="currentColor"
                stroke-width="4.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                opacity="0.9"
            >
                <template v-if="art.glyph === 'lock'">
                    <rect x="-18" y="-4" width="36" height="26" rx="6" />
                    <path d="M-10-4v-9a10 10 0 0 1 20 0v9" />
                </template>

                <template v-else-if="art.glyph === 'search'">
                    <circle cx="-4" cy="-4" r="15" />
                    <path d="m8 8 12 12" />
                </template>

                <template v-else-if="art.glyph === 'alert'">
                    <path d="M0-18 20 16H-20Z" />
                    <path d="M0-4v8" />
                    <path d="M0 10h.01" />
                </template>

                <template v-else>
                    <path
                        d="M14-14a10 10 0 0 0-13 13L-16 16a4 4 0 0 0 6 6L7 3a10 10 0 0 0 13-13l-7 7-6-1-1-6Z"
                    />
                </template>
            </g>
        </svg>
    </div>
</template>
