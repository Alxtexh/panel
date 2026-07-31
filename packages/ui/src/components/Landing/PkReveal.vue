<script setup lang="ts">
/**
 * Fades and lifts its content the first time it is scrolled to.
 *
 * A WRAPPER RATHER THAN A DIRECTIVE ON EVERY SECTION, so a section stays a
 * component about its own content and knows nothing about scrolling. The delay
 * is what makes a grid arrive as a sequence rather than as one block - small
 * enough to read as one movement, not as items queueing.
 */
import { useReveal } from '../../composables/useReveal'

withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const { el, shown } = useReveal()
</script>

<template>
    <div
        ref="el"
        class="transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none"
        :class="shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
        :style="{ transitionDelay: `${delay}ms` }"
    >
        <slot />
    </div>
</template>
