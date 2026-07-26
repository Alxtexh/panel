<script setup lang="ts">
/**
 * Keyset pagination controls.
 *
 * ONE count line, not three. An earlier version showed a row range, a total, a
 * page number and a page total all at once, which is four numbers describing the
 * same fact and reads as clutter rather than information.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO: jump to an arbitrary page.
 *
 * That is not an oversight. Page numbers as links require OFFSET, and
 * `OFFSET 100000` makes the database walk 100,000 rows it then discards — so
 * page 2,000 gets steadily slower while page 1 stays instant. §10 names this as
 * the single largest source of slow admin tables. A keyset seek
 * (`WHERE (sort_col, id) < (?, ?)`) uses the index, so page 2,000 costs exactly
 * what page 1 costs.
 *
 * "Previous" costs no extra server work — the consuming page keeps a stack of
 * the cursors it has already used and walks back down it.
 *
 * The total arrives late (it is a deferred prop), so the "of N results" half
 * renders only once the count lands. The controls are fully usable before then.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        page: number
        perPage: number
        perPageOptions?: number[]
        rowsOnPage: number
        hasNext: boolean
        hasPrevious: boolean
        /** Deferred — undefined until the count request resolves. */
        total?: number
        loading?: boolean
    }>(),
    { perPageOptions: () => [10, 25, 50, 100], loading: false },
)

const emit = defineEmits<{
    (e: 'next'): void
    (e: 'previous'): void
    (e: 'update:perPage', value: number): void
}>()

const format = (n: number) => new Intl.NumberFormat().format(n)

const from = computed(() => (props.rowsOnPage === 0 ? 0 : (props.page - 1) * props.perPage + 1))
const to = computed(() => (props.page - 1) * props.perPage + props.rowsOnPage)
</script>

<template>
    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-muted-foreground text-xs tabular-nums">
            Showing {{ format(from) }} to {{ format(to) }}
            <template v-if="total !== undefined">of {{ format(total) }} results</template>
        </p>

        <div class="flex items-center gap-2">
            <select
                :value="perPage"
                class="border-input bg-background text-muted-foreground h-7 rounded-md border px-1.5 text-xs"
                aria-label="Rows per page"
                @change="emit('update:perPage', Number(($event.target as HTMLSelectElement).value))"
            >
                <option v-for="opt in perPageOptions" :key="opt" :value="opt">{{ opt }} / page</option>
            </select>

            <button
                type="button"
                class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-7 items-center rounded-md border px-2 text-xs transition-colors disabled:pointer-events-none disabled:opacity-40"
                :disabled="!hasPrevious || loading"
                @click="emit('previous')"
            >
                ‹<span class="ml-1 hidden sm:inline">Prev</span>
            </button>

            <button
                type="button"
                class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-7 items-center rounded-md border px-2 text-xs transition-colors disabled:pointer-events-none disabled:opacity-40"
                :disabled="!hasNext || loading"
                @click="emit('next')"
            >
                <span class="mr-1 hidden sm:inline">Next</span>›
            </button>
        </div>
    </div>
</template>
