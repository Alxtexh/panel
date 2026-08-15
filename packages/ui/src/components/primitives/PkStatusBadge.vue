<script setup lang="ts">
/**
 * A status pill whose colour is dedicated, not branded.
 *
 * `PkBadge` already has `success` / `warning` / `info` tokens that a tenant
 * theme cannot rewrite. This is the lookup in front of that: pass a stored
 * status (`paid`, `vacant`, `in-stock`) and the tone is chosen here, so a POS
 * stock flag and a rental occupancy flag do not each grow a colour map.
 *
 * PASS `tone` TO OVERRIDE. The built-in map is vocabulary, not a closed set.
 */
import { computed } from 'vue'
import PkBadge from './PkBadge.vue'
import { statusBadgeVariant, type SemanticTone } from './statusTone'

const props = withDefaults(
    defineProps<{
        status?: string | null
        tone?: SemanticTone | null
        class?: string
    }>(),
    { status: null, tone: null },
)

const variant = computed(() => statusBadgeVariant(props.status, props.tone))
</script>

<template>
    <PkBadge :variant="variant" :class="props.class">
        <slot>{{ status }}</slot>
    </PkBadge>
</template>
