<script setup lang="ts">
/**
 * The generic list table, extracted in Phase 3 from three hardcoded screens.
 *
 * TWO RULES this component exists to honour (spec §4):
 *
 *   1. It does not import Inertia. It has no idea how data arrives.
 *   2. It never fetches. Props in, events out. The consuming page decides what
 *      a sort click means.
 *
 * Everything §8 requires of the table lives here once, so no screen can forget:
 * sticky header, frozen actions column, rows keyed by record id, dim-don't-
 * unmount on reload, and three distinct empty states.
 *
 * Per-cell rendering is a SLOT (`cell:<key>`), not a format enum. Three screens
 * needed badges, formatted dates, currency and units, and an enum would have
 * grown a case per screen forever. A slot is the escape hatch that keeps this
 * generic while letting any consuming app render anything.
 */
import { computed, ref } from 'vue'
import type { SortDirection, TableColumn } from './types'

const props = withDefaults(
    defineProps<{
        columns: TableColumn[]
        rows: Record<string, any>[]
        rowKey?: string
        sort?: string
        direction?: SortDirection
        loading?: boolean
        hidden?: Set<string>
        /** Distinguishes "nothing here" from "nothing matches your filters". */
        filtered?: boolean
        emptyTitle?: string
        emptyHint?: string
    }>(),
    {
        rowKey: 'id',
        direction: 'desc',
        loading: false,
        filtered: false,
        emptyTitle: 'Nothing here yet',
    },
)

const emit = defineEmits<{ (e: 'sort', key: string): void }>()

const copied = ref<string | null>(null)

const visibleColumns = computed(() =>
    props.columns.filter((c) => !props.hidden?.has(c.key)),
)

function sortKeyOf(column: TableColumn): string {
    return column.sortKey ?? column.key
}

function isSortedBy(column: TableColumn): boolean {
    return props.sort === sortKeyOf(column)
}

async function copy(rowId: string, column: TableColumn, value: unknown) {
    try {
        await navigator.clipboard.writeText(String(value))
        copied.value = `${rowId}-${column.key}`
        setTimeout(() => (copied.value = null), 1200)
    } catch {
        // Clipboard needs a secure context; failing silently beats throwing.
    }
}
</script>

<template>
    <!-- min-h-0 / min-w-0: without them a flex child refuses to shrink below its
         content size, so a wide table pushes the layout wider instead of
         scrolling inside its own container. -->
    <div class="pk-scroll relative min-h-0 w-full min-w-0 flex-1 overflow-auto rounded-lg border">
        <table class="w-full border-collapse text-sm">
            <thead class="bg-background sticky top-0 z-10">
                <tr class="bg-muted/50">
                    <th
                        v-for="col in visibleColumns"
                        :key="col.key"
                        class="text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
                    >
                        <button
                            v-if="col.sortable"
                            class="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                            @click="emit('sort', sortKeyOf(col))"
                        >
                            {{ col.label }}
                            <span v-if="isSortedBy(col)" class="text-xs">{{ direction === 'desc' ? '↓' : '↑' }}</span>
                            <span v-else class="text-xs opacity-40">↕</span>
                        </button>
                        <span v-else>{{ col.label }}</span>
                    </th>

                    <!-- Frozen actions column. The shadow is not decoration:
                         without a depth cue a pinned column overlaying scrolled
                         content reads as a rendering bug, most obviously on a
                         phone. -->
                    <th
                        v-if="$slots.actions"
                        class="pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                    >
                        <span class="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>

            <!-- Dimmed, never unmounted — scroll position and selection survive
                 a reload (§10). -->
            <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                <tr
                    v-for="row in rows"
                    :key="row[rowKey]"
                    class="hover:bg-muted/40 group border-b transition-colors"
                >
                    <td
                        v-for="col in visibleColumns"
                        :key="col.key"
                        class="px-3 py-2 whitespace-nowrap"
                        :class="col.cellClass"
                    >
                        <!-- Per-column override. Falls through to the default
                             rendering when the page does not provide one. -->
                        <slot :name="`cell:${col.key}`" :row="row" :value="row[col.key]" :column="col">
                            <span v-if="col.copyable" class="inline-flex items-center gap-1.5">
                                {{ row[col.key] }}
                                <button
                                    type="button"
                                    class="text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100"
                                    :aria-label="`Copy ${col.label.toLowerCase()}`"
                                    @click="copy(String(row[rowKey]), col, row[col.key])"
                                >
                                    <span class="text-xs">{{
                                        copied === `${row[rowKey]}-${col.key}` ? '✓' : '⧉'
                                    }}</span>
                                </button>
                            </span>
                            <span v-else>{{ row[col.key] ?? '—' }}</span>
                        </slot>
                    </td>

                    <td
                        v-if="$slots.actions"
                        class="pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                    >
                        <slot name="actions" :row="row" />
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- "No results for your filter" and "no data at all" are different
             problems with different fixes, so they are different states (§8). -->
        <div v-if="rows.length === 0 && filtered" class="text-muted-foreground p-10 text-center">
            <p class="font-medium">Nothing matches these filters</p>
            <slot name="clear-filters" />
        </div>
        <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
            <p class="font-medium">{{ emptyTitle }}</p>
            <p v-if="emptyHint" class="text-sm">{{ emptyHint }}</p>
        </div>
    </div>
</template>

<style scoped>
/**
 * Near-invisible scrollbars.
 *
 * A fixed shell means the table scrolls internally, which on the default
 * browser styling produces two heavy grey bars framing the data — visual weight
 * that competes with the content and reads as chrome rather than affordance.
 *
 * These are thin, transparent-tracked, and only tint on hover over the table.
 * Deliberately NOT `scrollbar-width: none`: hiding a scrollbar outright removes
 * the only cue that there is more content sideways, and leaves keyboard and
 * trackpad users guessing.
 */
.pk-scroll {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 150ms ease;
}

.pk-scroll:hover,
.pk-scroll:focus-within {
    scrollbar-color: color-mix(in oklch, currentColor 25%, transparent) transparent;
}

/* WebKit needs the same expressed the long way round. */
.pk-scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.pk-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.pk-scroll::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 9999px;
    transition: background 150ms ease;
}

.pk-scroll:hover::-webkit-scrollbar-thumb,
.pk-scroll:focus-within::-webkit-scrollbar-thumb {
    background: color-mix(in oklch, currentColor 22%, transparent);
}

.pk-scroll::-webkit-scrollbar-corner {
    background: transparent;
}

/**
 * The frozen actions column must sit above every other cell.
 *
 * Without an explicit stacking order a later sticky cell can paint over the
 * actions column while the table is scrolled horizontally, which makes the row
 * menu unclickable even though it is plainly visible — a failure that looks like
 * a dead button rather than a layering bug.
 */
:deep(td.pk-actions),
:deep(th.pk-actions) {
    z-index: 2;
}
</style>
