<script setup lang="ts">
/**
 * The bar that appears when rows are selected.
 *
 * §8 requires "select-all-matching-filter, not just select-all-on-page", and the
 * distinction is the whole point: the header checkbox selects the ten rows you
 * can see, while the operator's intent is usually "all 3,243 expired clients".
 * Offering only the first silently under-applies a bulk action — it reports
 * success having done a fraction of the work.
 *
 * So the bar always states WHICH of the two is selected, and offers the other
 * explicitly. "Select all N" and "Deselect all" sit together, because someone
 * who over-selects needs the way back to be as obvious as the way in.
 *
 * Actions come through the slot. This owns the selection surface, never what an
 * action does — it does not fetch (spec §4 rule 2).
 */
withDefaults(
    defineProps<{
        count: number
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
        class="bg-primary/5 border-primary/20 flex flex-wrap items-center gap-3 rounded-lg border px-3 py-2 text-sm"
        role="status"
    >
        <!-- Actions first, because that is why anyone selected anything. -->
        <div class="flex items-center gap-2">
            <slot name="actions" />
        </div>

        <span class="font-medium tabular-nums">
            <template v-if="allMatching">
                All {{ total !== undefined ? format(total) : '' }} records selected
            </template>
            <template v-else>{{ format(count) }} records selected</template>
        </span>

        <div class="ml-auto flex items-center gap-3">
            <button
                v-if="!allMatching && total !== undefined && total > count"
                type="button"
                class="text-primary text-xs font-medium hover:underline"
                @click="emit('select-all-matching')"
            >
                Select all {{ format(total) }}
            </button>

            <button type="button" class="text-destructive text-xs font-medium hover:underline" @click="emit('clear')">
                Deselect all
            </button>
        </div>
    </div>
</template>
