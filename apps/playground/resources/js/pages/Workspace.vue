<script setup lang="ts">
/**
 * A workspace: several independent tables on one page.
 *
 * THE INDEPENDENCE IS THE FEATURE, and it is carried in three places that must
 * agree: each table reads `?{name}[page]=2` from the URL, receives its rows as
 * `tables.{name}`, and reloads with `only: ['tables.{name}']`. All three derive
 * from one declared name on the server, so they cannot drift.
 *
 * WHY NOT REUSE `useListTable`: that composable owns the whole query string -
 * it writes `?page=`, `?sort=`, `?search=` flat - which is correct for a
 * resource index, where the table IS the page. Two of them on one page would
 * fight over every parameter, and the last one to write would win. The state
 * here is deliberately smaller: no selection, no bulk actions, no cursor stack.
 * A workspace table is for reading.
 *
 * EACH TABLE IS ITS OWN BOUNDARY. One failing query costs one panel, not the
 * page - the same reasoning as the dashboard widgets.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { DataTable, PkBoundary, TablePagination, useSchemaColumns } from '@panelkit/ui'
import { Head, router, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

interface TableProps {
    records: Record<string, any>[]
    sort: string
    direction: 'asc' | 'desc'
    nextCursor: string | null
    perPage: number
    perPageOptions: number[]
    search: string
    filters: Record<string, unknown>
}

const props = defineProps<{
    schema: {
        key: string
        heading: string
        description: string | null
        tables: Record<string, { name: string; title: string; columns: any[] }>
    }
    tables: Record<string, TableProps>
    breadcrumbs: { title: string; href: string }[]
}>()

defineOptions({ layout: AppLayout })

const page = usePage()

const names = computed(() => Object.keys(props.schema.tables))

/**
 * The cursor trail PER TABLE.
 *
 * Keyset pagination only walks forward, so going back means re-issuing the
 * cursor that produced the previous page. Keyed by table name because the two
 * tables are at different pages and always will be.
 */
const trails = ref<Record<string, string[]>>({})

function trail(name: string): string[] {
    return trails.value[name] ?? []
}

function pageNumber(name: string): number {
    return trail(name).length + 1
}

/** A deferred total arrives as its own top-level prop, one per table. */
function total(name: string): number | undefined {
    return (page.props as Record<string, any>)[`total_${name}`]
}

/**
 * Reload ONE table.
 *
 * `only` names just this table's prop, so the other table's rows never travel -
 * which is the whole point of the namespacing. The existing query string is
 * preserved and only this table's slice is replaced, so sorting the history
 * cannot reset the live list to page 1.
 */
function request(name: string, state: Record<string, string | number>) {
    const current = new URLSearchParams(window.location.search)
    const params: Record<string, any> = {}

    // Carry every OTHER table's state through untouched. Rebuilding the query
    // string from only this table's params would silently drop the other's.
    for (const [key, value] of current.entries()) {
        const match = key.match(/^([a-z][a-z0-9_]*)\[(.+)\]$/)

        if (match && match[1] !== name) {
            params[match[1]] ??= {}
            params[match[1]][match[2]] = value
        }
    }

    params[name] = state

    router.get(window.location.pathname, params, {
        only: [`tables.${name}`, `total_${name}`],
        preserveState: true,
        preserveScroll: true,
        replace: true,
    })
}

function sortBy(name: string, key: string) {
    const table = props.tables[name]
    const direction = table.sort === key && table.direction === 'asc' ? 'desc' : 'asc'

    // A sort describes a different result set, so the cursor trail is void.
    trails.value = { ...trails.value, [name]: [] }
    request(name, { sort: key, direction })
}

function nextPage(name: string) {
    const cursor = props.tables[name].nextCursor

    if (!cursor) return

    trails.value = { ...trails.value, [name]: [...trail(name), cursor] }
    request(name, { ...currentState(name), cursor })
}

function previousPage(name: string) {
    const stack = trail(name)

    if (stack.length === 0) return

    const next = stack.slice(0, -1)
    trails.value = { ...trails.value, [name]: next }

    const cursor = next[next.length - 1]
    request(name, cursor ? { ...currentState(name), cursor } : currentState(name))
}

function firstPage(name: string) {
    trails.value = { ...trails.value, [name]: [] }
    request(name, currentState(name))
}

function currentState(name: string): Record<string, string | number> {
    const table = props.tables[name]

    return { sort: table.sort, direction: table.direction, perPage: table.perPage }
}

/** Column definitions come from the schema, exactly as a resource index does. */
const columnsFor = (name: string) =>
    useSchemaColumns(computed(() => props.schema.tables[name].columns as any)).columns
</script>

<template>
    <Head :title="schema.heading" />

    <div class="flex flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">{{ schema.heading }}</h1>
            <p v-if="schema.description" class="text-muted-foreground text-sm">
                {{ schema.description }}
            </p>
        </div>

        <!--
            A FLEX COLUMN WITH A REAL HEIGHT, and both halves are load-bearing.

            DataTable's scroll wrapper is `min-h-0 shrink grow-0 overflow-auto`,
            written for the resource index where it is the flex child that
            absorbs the page's remaining height. Two attempts got this wrong
            before this one:

            A flex column with no height of its own made the wrapper shrink to
            whatever the siblings left - 132px of a 349px table, all ten rows
            rendered and three visible.

            Removing the flex made it size to content, which sounds right and
            broke the sticky header: with no scroll container to be sticky
            WITHIN, the header escaped the panel and floated over the table
            below it.

            The component wants a bounded scroll region, so it gets one. A
            workspace is several tables at once, which is also the case where a
            panel of fixed height reads better than three full-length tables
            stacked down a very long page.
        -->
        <PkBoundary
            v-for="name in names"
            :key="name"
            :label="schema.tables[name].title"
            class="bg-card flex h-[26rem] flex-col gap-3 rounded-lg border p-3"
        >
            <div>
                <h2 class="text-sm font-medium">{{ schema.tables[name].title }}</h2>
            </div>

            <DataTable
                :columns="columnsFor(name).value"
                :rows="tables[name].records"
                :sort="tables[name].sort"
                :direction="tables[name].direction"
                row-key="id"
                @sort="(key: string) => sortBy(name, key)"
            />

            <TablePagination
                :page="pageNumber(name)"
                :per-page="tables[name].perPage"
                :per-page-options="tables[name].perPageOptions"
                :rows-on-page="tables[name].records.length"
                :has-next="!!tables[name].nextCursor"
                :has-previous="pageNumber(name) > 1"
                :total="total(name)"
                @next="nextPage(name)"
                @previous="previousPage(name)"
                @first="firstPage(name)"
                @update:per-page="
                    (value: number) => {
                        trails[name] = []
                        request(name, { ...currentState(name), perPage: value })
                    }
                "
            />
        </PkBoundary>
    </div>
</template>
