<script setup lang="ts">
/**
 * Keyset pagination controls.
 *
 * FOUR CONTROLS, NOT FIVE. First, previous, the current page, next - and no
 * "last".
 *
 * That omission is the architecture, not an oversight. Jumping to an arbitrary
 * page requires OFFSET, and `OFFSET 100000` makes the database walk 100,000
 * rows it then throws away, so page 2,000 gets steadily slower while page 1
 * stays instant. §10 names this as the single largest source of slow admin
 * tables. A keyset seek (`WHERE (sort_col, id) < (?, ?)`) uses the index, so
 * page 2,000 costs exactly what page 1 costs - and the price of that is that
 * the only pages reachable in one step are the adjacent ones.
 *
 * "Last" could be served by flipping the sort and taking the first page, which
 * is index-friendly and honest. It is not here because it is a different query
 * shape through the whole stack for a button whose main use on a 200,000-row
 * table is to find out how many rows there are - which the count already says.
 *
 * FIRST IS FREE, which is why it IS here: it clears the cursor trail rather
 * than seeking anywhere.
 *
 * THE PAGE-SIZE CONTROL SITS IN THE MIDDLE, between the count and the steps.
 *
 * It was removed once for being cramped against the arrows on the right, where
 * it read as a fourth pagination button. Centred, it is plainly a different
 * kind of control - a setting rather than a step - and the two ends of the row
 * stay what they are: what you are looking at on the left, how to move through
 * it on the right.
 *
 * The total arrives late (it is a deferred prop), so the "of N" half renders
 * only once the count lands. The controls are fully usable before then.
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
        /** Deferred - undefined until the count request resolves. */
        total?: number
        loading?: boolean
    }>(),
    { perPageOptions: () => [10, 25, 50], loading: false },
)

const emit = defineEmits<{
    (e: 'next'): void
    (e: 'previous'): void
    (e: 'first'): void
    (e: 'update:perPage', value: number): void
}>()

const format = (n: number) => new Intl.NumberFormat().format(n)

const from = computed(() => (props.rowsOnPage === 0 ? 0 : (props.page - 1) * props.perPage + 1))
const to = computed(() => (props.page - 1) * props.perPage + props.rowsOnPage)

/**
 * How many pages there are, when the count is in.
 *
 * Shown beside the current page rather than as a row of clickable numbers: the
 * numbers would be links to pages this pagination cannot seek to, and a control
 * that looks clickable and is not is worse than no control.
 */
const pages = computed(() =>
    props.total === undefined ? null : Math.max(1, Math.ceil(props.total / props.perPage)),
)
</script>

<template>
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-muted-foreground text-xs tabular-nums">
            Showing {{ format(from) }}-{{ format(to) }}
            <template v-if="total !== undefined">of {{ format(total) }}</template>
        </p>

        <!--
            A SETTING, not a step. Centred so it reads as neither the summary on
            the left nor the movement on the right.
        -->
        <label class="text-muted-foreground flex items-center gap-2 text-xs">
            <span>Per page</span>
            <select
                :value="perPage"
                class="border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs"
                @change="emit('update:perPage', Number(($event.target as HTMLSelectElement).value))"
            >
                <option v-for="option in perPageOptions" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
        </label>

        <!--
            One connected group rather than separated buttons: they are steps
            along a single axis, and spacing them apart makes them read as
            unrelated choices.
        -->
        <nav class="flex items-center gap-1" aria-label="Pagination">
            <button
                type="button"
                class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30"
                :disabled="!hasPrevious || loading"
                aria-label="First page"
                title="First page"
                @click="emit('first')"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="m17 18-6-6 6-6M11 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                type="button"
                class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30"
                :disabled="!hasPrevious || loading"
                aria-label="Previous page"
                title="Previous page"
                @click="emit('previous')"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            <!--
                The current page, as a state rather than a button. It is where
                you are, so there is nothing to click.
            -->
            <span
                class="bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums"
                aria-current="page"
            >
                {{ page }}
            </span>

            <span v-if="pages !== null" class="text-muted-foreground px-1 text-xs tabular-nums">
                of {{ format(pages) }}
            </span>

            <button
                type="button"
                class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30"
                :disabled="!hasNext || loading"
                aria-label="Next page"
                title="Next page"
                @click="emit('next')"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </nav>
    </div>
</template>
