<script setup lang="ts">
/**
 * A form label, with the reference app's classes.
 *
 * A NATIVE `<label>` RATHER THAN `reka-ui`'s. What that component adds over the
 * element is click-forwarding to a nested control, which the native element does
 * by itself through `for` - and it would cost this package its only-Vue
 * dependency list.
 */
defineProps<{ for?: string; class?: unknown }>()
</script>

<template>
    <label
        data-slot="label"
        :for="$props.for"
        :class="[
            'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            $props.class,
        ]"
    >
        <slot />
    </label>
</template>
