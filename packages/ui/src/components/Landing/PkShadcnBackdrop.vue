<script setup lang="ts">
/**
 * Quiet product backdrop for the shadcn-inspired landing, on kit tokens.
 *
 * Adapted from the shadcn-vue landing pattern (hero glow + soft grid) without
 * the magenta-to-primary gradient cliche. Uses slate and teal from the kit.
 */
withDefaults(defineProps<{ intensity?: 'soft' | 'full' }>(), { intensity: 'full' })
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
            class="absolute inset-x-0 top-0 h-[70vh]"
            style="
                background: radial-gradient(
                    ellipse 80% 55% at 50% -10%,
                    var(--pk-shadcn-glow),
                    transparent 70%
                );
            "
            :class="intensity === 'full' ? 'opacity-100' : 'opacity-60'"
        />
        <div
            class="pk-shadcn-ring absolute top-[18%] left-1/2 size-[42rem] -translate-x-1/2 rounded-full blur-3xl"
            :class="intensity === 'full' ? 'opacity-40 dark:opacity-25' : 'opacity-20 dark:opacity-12'"
            style="background: radial-gradient(circle, var(--pk-shadcn-ring), transparent 68%)"
        />
        <div
            class="absolute inset-0 opacity-[0.1] dark:opacity-[0.06]"
            style="
                background-image:
                    linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px);
                background-size: 48px 48px;
                mask-image: linear-gradient(to bottom, black 0%, transparent 65%);
            "
        />
    </div>
</template>

<style>
:root {
    --pk-shadcn-glow: oklch(0.88 0.04 200);
    --pk-shadcn-ring: oklch(0.72 0.08 195);
}

.dark {
    --pk-shadcn-glow: oklch(0.35 0.04 220);
    --pk-shadcn-ring: oklch(0.45 0.07 195);
}

.pk-shadcn-ring {
    animation: pk-shadcn-pulse 22s ease-in-out infinite alternate;
    will-change: transform, opacity;
}

@keyframes pk-shadcn-pulse {
    0% {
        transform: translate(-50%, 0) scale(1);
        opacity: 0.35;
    }
    100% {
        transform: translate(-50%, 3%) scale(1.06);
        opacity: 0.5;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-shadcn-ring {
        animation: none;
    }
}
</style>
