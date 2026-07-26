<script setup lang="ts">
/**
 * Keyset pagination controls.
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
 * Everything else people actually want from pagination IS here: where am I, how
 * many are there, next, previous, and how many per page.
 *
 * "Previous" costs no extra server work — the consuming page keeps a stack of
 * the cursors it has already used and walks back down it.
 *
 * The total arrives late (it is a deferred prop), so `of N` and the last-page
 * boundary render only once it lands. The controls are fully usable before then.
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
    { perPageOptions: () => [25, 50, 100, 250], loading: false },
)

const emit = defineEmits<{
    (e: 'next'): void
    (e: 'previous'): void
    (e: 'update:perPage', value: number): void
}>()

const format = (n: number) => new Intl.NumberFormat().format(n)

/** 1-based index of the first row on this page. */
const from = computed(() => (props.rowsOnPage === 0 ? 0 : (props.page - 1) * props.perPage + 1))
const to = computed(() => (props.page - 1) * props.perPage + props.rowsOnPage)

const lastPage = computed(() =>
    props.total === undefined ? undefined : Math.max(1, Math.ceil(props.total / props.perPage)),
)
</script>

<template>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-muted-foreground flex items-center gap-3 text-xs">
            <span class="tabular-nums">
                {{ format(from) }}–{{ format(to) }}
                <template v-if="total !== undefined">of {{ format(total) }}</template>
            </span>

            <label class="flex items-center gap-1.5">
                <span class="sr-only sm:not-sr-only">Per page</span>
                <select
                    :value="perPage"
                    class="border-input bg-background h-7 rounded-md border px-1.5 text-xs"
                    aria-label="Rows per page"
                    @change="emit('update:perPage', Number(($event.target as HTMLSelectElement).value))"
                >
                    <option v-for="opt in perPageOptions" :key="opt" :value="opt">{{ opt }}</option>
                </select>
            </label>
        </div>

        <div class="flex items-center gap-2">
            <span class="text-muted-foreground text-xs tabular-nums">
                Page {{ format(page) }}
                <template v-if="lastPage !== undefined">of {{ format(lastPage) }}</template>
            </span>

            <button
                type="button"
                class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center rounded-md border px-2.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50"
                :disabled="!hasPrevious || loading"
                @click="emit('previous')"
            >
                ‹ <span class="ml-1 hidden sm:inline">Previous</span>
            </button>

            <button
                type="button"
                class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 items-center rounded-md border px-2.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50"
                :disabled="!hasNext || loading"
                @click="emit('next')"
            >
                <span class="mr-1 hidden sm:inline">Next</span> ›
            </button>
        </div>
    </div>
</template>
