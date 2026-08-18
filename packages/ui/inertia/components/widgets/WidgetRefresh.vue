<script setup lang="ts">
/**
 * Starts Echo or HTTP poll for one widget group. Renders nothing.
 *
 * Reverb when Echo and `live` are set. Poll when they are not. Never both.
 */
import { useWidgetPoll } from '../../composables/useWidgetPoll'

const props = defineProps<{
    keys: string[]
    poll?: number | null
    live?: string | null
}>()

useWidgetPoll(
    () => props.keys,
    () => props.poll ?? null,
    () => props.live ?? null,
)
</script>

<template>
    <span v-if="false" />
</template>
