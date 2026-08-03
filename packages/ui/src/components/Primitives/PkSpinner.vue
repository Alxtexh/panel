<script setup lang="ts">
/**
 * The busy indicator, at the size the reference app uses.
 *
 * AN INLINE SVG RATHER THAN `@lucide/vue`'s `Loader2Icon`, for the reason every
 * other icon in this package is inline: an icon set is a dependency, and this is
 * two paths.
 */
defineProps<{ class?: unknown }>()
</script>

<template>
    <svg
        role="status"
        aria-label="Loading"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        :class="['size-4 animate-spin', $props.class]"
    >
        <circle cx="12" cy="12" r="9" class="opacity-25" />
        <path d="M21 12a9 9 0 0 0-9-9" />
    </svg>
</template>
