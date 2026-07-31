<script setup lang="ts">
/**
 * The drifting mesh-gradient behind the Aurora design.
 *
 * CSS AND THREE DIVS, not a canvas or a WebGL scene. The effect is four blurred
 * radial gradients on slow, offset loops - which the compositor can run on the
 * GPU without a main-thread frame, costs nothing to parse, and degrades to a
 * flat tint where `filter: blur` is unsupported. A canvas here would be a
 * second render loop competing with the page for the same frame budget, for an
 * effect nobody can tell apart.
 *
 * `aria-hidden` AND `pointer-events-none`: it is decoration. A screen reader
 * announcing "image" here would be describing a mood.
 *
 * IT STOPS MOVING WHEN ASKED. `prefers-reduced-motion` pauses the drift rather
 * than hiding the colour, so the page keeps its identity for somebody who
 * cannot tolerate movement.
 */
withDefaults(defineProps<{ intensity?: 'soft' | 'full' }>(), { intensity: 'full' })
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
            class="pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl"
            :class="
                intensity === 'full' ? 'opacity-60 dark:opacity-40' : 'opacity-30 dark:opacity-20'
            "
            style="
                background: radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%);
                animation-delay: 0s;
            "
        />
        <div
            class="pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl"
            :class="
                intensity === 'full' ? 'opacity-50 dark:opacity-35' : 'opacity-25 dark:opacity-15'
            "
            style="
                background: radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%);
                animation-delay: -7s;
            "
        />
        <div
            class="pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl"
            :class="
                intensity === 'full' ? 'opacity-40 dark:opacity-30' : 'opacity-20 dark:opacity-10'
            "
            style="
                background: radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%);
                animation-delay: -14s;
            "
        />

        <!-- A faint grid, so the colour has something to sit against. -->
        <div
            class="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
            style="
                background-image:
                    linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px);
                background-size: 64px 64px;
                mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%);
            "
        />
    </div>
</template>

<style>
:root {
    --pk-aurora-1: oklch(0.72 0.19 300);
    --pk-aurora-2: oklch(0.75 0.16 240);
    --pk-aurora-3: oklch(0.78 0.14 190);
}

.pk-blob {
    animation: pk-drift 26s ease-in-out infinite alternate;
    will-change: transform;
}

@keyframes pk-drift {
    0% {
        transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
        transform: translate3d(4%, 6%, 0) scale(1.12);
    }
    100% {
        transform: translate3d(-3%, -4%, 0) scale(0.95);
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-blob {
        animation: none;
    }
}
</style>
