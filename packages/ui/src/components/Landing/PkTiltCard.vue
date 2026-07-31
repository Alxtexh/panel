<script setup lang="ts">
/**
 * A card that leans toward the pointer, with a highlight that follows it.
 *
 * THE TILT IS SMALL - six degrees at the corners. A card that swings through
 * twenty looks like a toy and makes the text inside it hard to read while it
 * moves; the effect is meant to register as depth, not as a trick.
 *
 * The pointer position arrives as CSS variables - see `usePointer` for why that
 * is not reactive state.
 */
import { usePointer } from '../../composables/usePointer'

const { el } = usePointer()
</script>

<template>
    <div ref="el" class="pk-tilt group/tilt">
        <div class="pk-tilt-inner relative h-full">
            <!-- The highlight, following the pointer across the surface. -->
            <span
                class="pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg"
                aria-hidden="true"
            />
            <slot />
        </div>
    </div>
</template>

<style>
.pk-tilt {
    perspective: 900px;
}

.pk-tilt-inner {
    transform: rotateX(calc((var(--pk-py, 0.5) - 0.5) * -6deg))
        rotateY(calc((var(--pk-px, 0.5) - 0.5) * 6deg));
    transition: transform 250ms ease-out;
    transform-style: preserve-3d;
    will-change: transform;
}

.pk-tilt-glow {
    background: radial-gradient(
        18rem circle at calc(var(--pk-px, 0.5) * 100%) calc(var(--pk-py, 0.5) * 100%),
        color-mix(in oklch, var(--color-primary, oklch(0.6 0.2 290)) 22%, transparent),
        transparent 60%
    );
    opacity: 0;
    transition: opacity 250ms ease-out;
}

.pk-tilt:hover .pk-tilt-glow {
    opacity: 1;
}

@media (prefers-reduced-motion: reduce), (hover: none) {
    .pk-tilt-inner {
        transform: none;
        transition: none;
    }

    .pk-tilt-glow {
        display: none;
    }
}
</style>
