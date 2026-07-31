<script setup lang="ts">
/**
 * Console's backdrop: a terminal, and it behaves like one.
 *
 * THE THIRD DESIGN HAS TO BE THIRD. Aurora drifts, Editorial sits still on
 * paper - so this one is dark chrome, a dot grid and a caret that blinks,
 * because the audience it is written for reads a prompt all day and recognises
 * one instantly.
 *
 * THE SCANLINE IS FAINT ON PURPOSE. The reference is a CRT; the execution is
 * not, because a strong scanline over body text is unreadable and reads as a
 * novelty rather than as a product.
 */
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <!-- A dot grid: the graph paper of terminals and design tools alike. -->
        <div
            class="absolute inset-0 opacity-[0.18] dark:opacity-[0.14]"
            style="
                background-image: radial-gradient(currentColor 1px, transparent 1px);
                background-size: 22px 22px;
                mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent 80%);
            "
        />

        <!-- A single cool wash from the top, like a screen's own glow. -->
        <div
            class="absolute inset-x-0 top-0 h-[36rem]"
            style="
                background: radial-gradient(
                    ellipse 60% 100% at 50% 0%,
                    var(--pk-console-glow),
                    transparent 70%
                );
            "
        />

        <div class="pk-scanlines absolute inset-0" />
    </div>
</template>

<style>
:root {
    --pk-console-glow: oklch(0.72 0.14 200 / 0.22);
}

:root.dark,
.dark {
    --pk-console-glow: oklch(0.6 0.16 200 / 0.28);
}

.pk-scanlines {
    background-image: repeating-linear-gradient(
        to bottom,
        currentColor 0px,
        currentColor 1px,
        transparent 1px,
        transparent 3px
    );
    opacity: 0.04;
    animation: pk-scan 8s linear infinite;
}

@keyframes pk-scan {
    from {
        background-position-y: 0;
    }
    to {
        background-position-y: 3px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-scanlines {
        animation: none;
    }
}
</style>
