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
    <div class="relative min-h-0 w-full min-w-0 flex-1 overflow-auto rounded-lg border">
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
                        class="bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
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
                        class="bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
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
