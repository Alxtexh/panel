<script setup lang="ts">
/**
 * Code in a table cell: one line, monospace, truncated.
 *
 * NOT THE WHOLE BLOB. A stored config or payload is routinely forty lines, and
 * a row that renders all of them destroys the table for every other column. The
 * full text is on the record page; this is the "is there something here, and
 * roughly what" that a list is actually asked.
 *
 * NEWLINES COLLAPSE TO SPACES rather than being trimmed at the first one - the
 * first line of a JSON object is `{`, which would make every row identical.
 */
import { computed } from 'vue'

const props = defineProps<{ value: unknown }>()

const oneLine = computed(() =>
    String(props.value ?? '')
        .replace(/\s+/g, ' ')
        .trim(),
)
</script>

<template>
    <span v-if="!oneLine" class="text-muted-foreground">—</span>
    <code v-else class="block max-w-[28rem] truncate font-mono text-xs">{{ oneLine }}</code>
</template>
