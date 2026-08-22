<script setup lang="ts">
/**
 * A map, summarised. "3 entries", not its JSON.
 *
 * A ROW HAS ONE LINE AND A MAP HAS AS MANY AS SOMEBODY PASTED. Expanding the
 * pairs into a table cell pushes every other column off the screen to show
 * data nobody is scanning a list for - the pairs belong on the record page,
 * where there is room and where somebody has already chosen this record.
 *
 * A NON-MAP VALUE IS SHOWN AS ITSELF. A column pointed at the wrong attribute
 * should reveal that rather than reporting "0 entries", which reads like a
 * record nobody has finished configuring.
 */
import { computed } from 'vue'

const props = defineProps<{ value: unknown }>()

const pairs = computed(() =>
    props.value && typeof props.value === 'object' && !Array.isArray(props.value)
        ? Object.keys(props.value as Record<string, unknown>)
        : null,
)
</script>

<template>
    <span v-if="pairs === null && value != null" class="font-mono text-xs">{{ value }}</span>
    <span v-else-if="!pairs || pairs.length === 0" class="text-muted-foreground">—</span>
    <span v-else class="text-muted-foreground text-sm font-normal">
        {{ pairs.length }} {{ pairs.length === 1 ? 'entry' : 'entries' }}
    </span>
</template>
