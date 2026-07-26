<script setup lang="ts">
/**
 * Appears when rows are selected. Holds bulk actions.
 *
 * §8 requires "select-all-matching-filter, not just select-all-on-page", and the
 * distinction is the entire point: a checkbox in the header selects the ten rows
 * you can see, while the operator's intent is usually "all 11,111 suspended
 * clients". Offering only the first silently under-applies a bulk action, which
 * is the worst kind of failure — it reports success having done a fraction of
 * the work.
 *
 * So the bar always states WHICH of the two is currently selected, and offers
 * the other explicitly.
 *
 * Actions come in through the `actions` slot. This component owns the selection
 * surface, never what the actions do — it does not fetch (spec §4 rule 2).
 */
withDefaults(
    defineProps<{
        pageCount: number
        /** True when the selection means "everything matching the filters". */
        allMatching: boolean
        /** Deferred — undefined until the count lands. */
        total?: number
    }>(),
    {},
)

const emit = defineEmits<{
    (e: 'select-all-matching'): void
    (e: 'clear'): void
}>()

const format = (n: number) => new Intl.NumberFormat().format(n)
</script>

<template>
  <div
    class="bg-primary/10 border-primary/30 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm"
    role="status"
  >
    <span class="font-medium tabular-nums">
      <template v-if="allMatching">
        All {{ total !== undefined ? format(total) : '' }} matching rows selected
      </template>
      <template v-else> {{ format(pageCount) }} selected on this page </template>
    </span>

    <button
      v-if="!allMatching && total !== undefined && total > pageCount"
      type="button"
      class="text-primary text-xs underline underline-offset-2"
      @click="emit('select-all-matching')"
    >
      Select all {{ format(total) }} matching
    </button>

    <div class="ml-auto flex items-center gap-2">
      <slot name="actions" />
      <button
        type="button"
        class="text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        @click="emit('clear')"
      >
        Clear
      </button>
    </div>
  </div>
</template>
