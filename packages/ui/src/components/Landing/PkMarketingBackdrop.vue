<script setup lang="ts">
/**
 * Atmosphere for the marketing landing: warm earth and deep teal, not purple SaaS.
 *
 * Full-bleed colour plane behind the first viewport. CSS only, same posture as
 * Aurora: compositor-friendly blurs, reduced-motion pauses the drift.
 */
withDefaults(defineProps<{ intensity?: 'soft' | 'full' }>(), { intensity: 'full' })
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
            class="pk-mkt-plane absolute inset-0"
            style="
                background:
                    radial-gradient(ellipse 90% 70% at 10% 0%, var(--pk-mkt-1), transparent 55%),
                    radial-gradient(ellipse 70% 60% at 90% 10%, var(--pk-mkt-2), transparent 50%),
                    linear-gradient(180deg, var(--pk-mkt-wash) 0%, transparent 55%);
            "
        />
        <div
            class="pk-mkt-blob absolute -top-24 left-1/4 size-[36rem] rounded-full blur-3xl"
            :class="intensity === 'full' ? 'opacity-50 dark:opacity-35' : 'opacity-25 dark:opacity-15'"
            style="background: radial-gradient(circle, var(--pk-mkt-3), transparent 70%)"
        />
        <div
            class="absolute inset-0 opacity-[0.12] dark:opacity-[0.07]"
            style="
                background-image: radial-gradient(currentColor 1px, transparent 1px);
                background-size: 28px 28px;
                mask-image: radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent 70%);
            "
        />
    </div>
</template>

<style>
:root {
    --pk-mkt-1: oklch(0.78 0.09 75);
    --pk-mkt-2: oklch(0.72 0.08 200);
    --pk-mkt-3: oklch(0.7 0.1 155);
    --pk-mkt-wash: oklch(0.96 0.02 85);
}

.dark {
    --pk-mkt-1: oklch(0.45 0.07 75);
    --pk-mkt-2: oklch(0.4 0.06 200);
    --pk-mkt-3: oklch(0.42 0.08 155);
    --pk-mkt-wash: oklch(0.22 0.02 240);
}

.pk-mkt-blob {
    animation: pk-mkt-drift 28s ease-in-out infinite alternate;
    will-change: transform;
}

@keyframes pk-mkt-drift {
    0% {
        transform: translate3d(0, 0, 0) scale(1);
    }
    100% {
        transform: translate3d(5%, 4%, 0) scale(1.08);
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-mkt-blob {
        animation: none;
    }
}
</style>
