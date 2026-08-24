<script setup lang="ts">
/**
 * Studio's backdrop: a workshop drafting surface.
 *
 * THE FOURTH DESIGN MUST FEEL FOURTH. Aurora drifts colour, Editorial sits on
 * paper grain, Console glows like a terminal. Studio is a drafting table: warm
 * graphite with a precise construction grid, a faint compass arc and a subtle
 * vignette. The reference is technical drawing on good paper, not a screen.
 *
 * WARM GRAPHITE, NOT PURPLE. The product is an operator tool, and a workshop
 * communicates precision and craft rather than AI spectacle. The palette leans
 * warm-neutral in light mode and cool-slate in dark mode.
 *
 * THE GRID IS CONSTRUCTION, NOT DECORATION. The lines are the kind you would
 * find on an architect's vellum: a fine square grid with a heavier module line
 * every fourth cell. The compass arc anchors the hero visually without moving.
 */
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <!-- Fine construction grid: 20px cells, heavier module at 80px. -->
        <div
            class="pk-studio-grid absolute inset-0"
            style="
                background-image:
                    linear-gradient(to right, var(--pk-studio-grid-major) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--pk-studio-grid-major) 1px, transparent 1px),
                    linear-gradient(to right, var(--pk-studio-grid-minor) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--pk-studio-grid-minor) 1px, transparent 1px);
                background-size:
                    80px 80px,
                    80px 80px,
                    20px 20px,
                    20px 20px;
                mask-image: radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent 70%);
            "
        />

        <!-- A single compass arc, anchoring the composition to the top centre. -->
        <div
            class="absolute top-16 left-1/2 -translate-x-1/2"
            style="
                width: 36rem;
                height: 36rem;
                border-radius: 50%;
                border: 1px solid var(--pk-studio-arc);
            "
        />

        <!-- Warm vignette wash from the top. -->
        <div
            class="absolute inset-x-0 top-0 h-[32rem]"
            style="
                background: radial-gradient(
                    ellipse 70% 90% at 50% 0%,
                    var(--pk-studio-wash),
                    transparent 70%
                );
            "
        />
    </div>
</template>

<style>
:root {
    --pk-studio-grid-major: oklch(0.3 0.01 60 / 0.09);
    --pk-studio-grid-minor: oklch(0.3 0.01 60 / 0.04);
    --pk-studio-arc: oklch(0.4 0.02 60 / 0.12);
    --pk-studio-wash: oklch(0.85 0.03 70 / 0.35);
}

:root.dark,
.dark {
    --pk-studio-grid-major: oklch(0.7 0.01 240 / 0.1);
    --pk-studio-grid-minor: oklch(0.7 0.01 240 / 0.04);
    --pk-studio-arc: oklch(0.6 0.02 240 / 0.14);
    --pk-studio-wash: oklch(0.35 0.03 250 / 0.4);
}

.pk-studio-grid {
    animation: pk-studio-fade 1.2s ease-out both;
}

@keyframes pk-studio-fade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-studio-grid {
        animation: none;
    }
}
</style>
