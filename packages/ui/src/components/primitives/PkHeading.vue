<script setup lang="ts">
/**
 * A section heading, and its `small` variant.
 *
 * MOVED FROM THE REFERENCE APP, verbatim. It is the heading every settings
 * section here uses, so the packaged security screens looked subtly unlike the
 * demo's until it came too.
 */
type Props = {
    title: string
    description?: string
    variant?: 'default' | 'small'
}

withDefaults(defineProps<Props>(), {
    variant: 'default',
})
</script>

<template>
    <header :class="variant === 'small' ? '' : 'mb-8 space-y-0.5'">
        <h2
            :class="
                variant === 'small'
                    ? 'mb-0.5 text-base font-medium'
                    : 'text-xl font-semibold tracking-tight'
            "
        >
            {{ title }}
        </h2>
        <p v-if="description" class="text-muted-foreground text-sm">
            {{ description }}
        </p>
    </header>
</template>
