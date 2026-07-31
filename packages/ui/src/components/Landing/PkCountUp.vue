<script setup lang="ts">
/**
 * A number that counts up once, when it arrives.
 *
 * THE SUFFIX AND PREFIX ARE SEPARATE from the number, because "250k" and
 * "99.9%" are not numbers - parsing them back out of a string to animate them
 * is how a stat ends up reading "99.9" for a second and then jumping. The
 * caller says what the parts are; this animates only the part that is numeric.
 *
 * REDUCED MOTION GETS THE FINAL VALUE IMMEDIATELY - see `useReveal`. A counter
 * is decoration on top of a fact, and the fact is what was promised.
 */
import { ref, watch } from 'vue'
import { useReveal } from '../../composables/useReveal'

const props = withDefaults(
    defineProps<{
        to: number
        prefix?: string
        suffix?: string
        decimals?: number
        duration?: number
    }>(),
    { duration: 1400, decimals: 0 },
)

const { el, shown } = useReveal()
const current = ref(0)

watch(shown, (visible) => {
    if (!visible) {
        return
    }

    const reduced =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof requestAnimationFrame === 'undefined') {
        current.value = props.to

        return
    }

    const started = performance.now()

    const step = (now: number) => {
        const progress = Math.min((now - started) / props.duration, 1)

        // Ease out: fast at first, settling rather than stopping dead.
        current.value = props.to * (1 - Math.pow(1 - progress, 3))

        if (progress < 1) {
            requestAnimationFrame(step)
        } else {
            current.value = props.to
        }
    }

    requestAnimationFrame(step)
})
</script>

<template>
    <span ref="el">{{ prefix ?? '' }}{{ current.toFixed(decimals) }}{{ suffix ?? '' }}</span>
</template>
