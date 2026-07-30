<script setup lang="ts">
/**
 * Colour or black-and-white, shown as colour or black-and-white.
 *
 * Most offices print without colour, and an operator who picks an accent on a
 * screen has no way of knowing what their carefully chosen teal becomes on the
 * office laser printer. Two swatches answer that before the first print run
 * rather than after it.
 */
defineProps<{
    value: string | number
    label?: string
    selected?: boolean
}>()
</script>

<template>
    <span class="flex items-center gap-1">
        <template v-if="String(value) === 'mono'">
            <span class="size-6 rounded-sm border border-neutral-400 bg-black" />
            <span class="size-6 rounded-sm border border-neutral-400 bg-neutral-500" />
            <span class="size-6 rounded-sm border border-neutral-400 bg-white" />
        </template>
        <template v-else>
            <span class="size-6 rounded-sm border border-neutral-400 bg-sky-600" />
            <span class="size-6 rounded-sm border border-neutral-400 bg-amber-500" />
            <span class="size-6 rounded-sm border border-neutral-400 bg-emerald-600" />
        </template>
    </span>
</template>
