<script setup lang="ts">
/**
 * Read-only detail page for any resource.
 *
 * Driven entirely by the schema's columns, so no resource contributes Vue. A
 * dedicated page rather than a modal for the same reasons as the form: it is
 * linkable, survives a refresh, and is what an operator pastes into a ticket.
 *
 * Fields render through the same semantic mapping the table uses - badge
 * colours from the schema's intent map, dates by column type - so a value never
 * looks one way in the list and another here.
 */
import { PkBadge as Badge } from '@panelkit/ui'
import AuditTimeline from '../components/AuditTimeline.vue'
import { PkButton as Button } from '@panelkit/ui'
import { InfoNode, RelationPanel, useSchemaColumns, type SchemaColumn } from '@panelkit/ui'
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, ref, toRef } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string }
        table: { columns: SchemaColumn[] }
        /** Optional layout tree. Falls back to a flat list when empty. */
        infolist: any[]
        /** Related lists. Structure only - rows arrive on demand. */
        relations?: {
            key: string
            label: string
            icon: string | null
            table: { columns: SchemaColumn[] }
        }[]
    }
    record: Record<string, any>
    can: { update: boolean; delete: boolean }
    breadcrumbs: { title: string; href: string }[]
}>()


/**
 * Layout when the resource declares one; a flat list of its table columns
 * otherwise - which is what every resource had before layout existed, so
 * nothing that has not opted in changes.
 */
const hasLayout = computed(() => (props.schema.infolist?.length ?? 0) > 0)

const schemaColumns = toRef(() => props.schema.table.columns)
const { byKey, badgeVariant } = useSchemaColumns(schemaColumns)

const title = computed(() => String(props.record.name ?? `#${props.record.id}`))

/* ---------------------------------------------------------------------------
 * Related lists
 *
 * FETCHED WHEN A TAB IS OPENED, never with the record. A page with four
 * relations must not run four list queries to show one, and eager-loading a
 * relation reads every related row to render the ten a person looks at - which
 * is fine for the client the developer tested with and ruinous for the one with
 * forty thousand sessions.
 *
 * Each tab keeps its own rows and cursor, so switching back to a tab does not
 * refetch what is already there.
 * ------------------------------------------------------------------------- */

interface RelationState {
    rows: Record<string, any>[]
    cursor: string | null
    loading: boolean
    loaded: boolean
}

const relations = computed(() => props.schema.relations ?? [])
const activeRelation = ref<string | null>(relations.value[0]?.key ?? null)

const state = ref<Record<string, RelationState>>({})

function relationState(key: string): RelationState {
    if (!state.value[key]) {
        state.value = { ...state.value, [key]: { rows: [], cursor: null, loading: false, loaded: false } }
    }

    return state.value[key]
}

async function loadRelation(key: string, cursor: string | null = null) {
    const current = relationState(key)

    // Already have the first page and nothing more was asked for.
    if (current.loaded && cursor === null) return

    current.loading = true

    try {
        const query = cursor ? `?cursor=${encodeURIComponent(cursor)}` : ''

        const response = await fetch(
            `${props.schema.routes.index}/${props.record.id}/relations/${key}${query}`,
            { headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, credentials: 'same-origin' },
        )

        if (!response.ok) throw new Error(String(response.status))

        const data = await response.json()

        // Appended, not replaced: "load more" continues the list rather than
        // jumping to a page, which is what a keyset cursor expresses.
        current.rows = cursor ? [...current.rows, ...data.records] : data.records
        current.cursor = data.nextCursor ?? null
        current.loaded = true
    } catch {
        current.loaded = true
    } finally {
        current.loading = false
    }
}

function openRelation(key: string) {
    activeRelation.value = key
    loadRelation(key)
}

// The first tab loads once the page is up, because it is the one being looked
// at; the rest wait to be asked for.
if (activeRelation.value) loadRelation(activeRelation.value)

const dateFormats: Record<string, Intl.DateTimeFormatOptions> = {
    date: { year: 'numeric', month: 'long', day: 'numeric' },
    datetime: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' },
}

function render(key: string): string {
    const column = byKey.value[key]
    const value = props.record[key]

    if (value === null || value === undefined || value === '') return '-'

    if (column?.type === 'date' || column?.type === 'datetime') {
        return new Date(String(value)).toLocaleDateString(undefined, dateFormats[column.type])
    }

    // Same transform the table applies, so a value never reads one way in the
    // list and another here.
    let text = String(value)
    if (column?.transform === 'upper') text = text.toUpperCase()
    if (column?.transform === 'lower') text = text.toLowerCase()

    return [column?.prefix, text, column?.suffix].filter(Boolean).join(' ')
}

function destroy() {
    if (!window.confirm(`Delete ${title.value}? This cannot be undone.`)) return

    router.delete(`${props.schema.routes.index}/${props.record.id}`, {
        onSuccess: () => {
            toast.success(`${props.schema.label} deleted`)
            router.visit(props.schema.routes.index)
        },
        onError: () => toast.error('Could not delete this record'),
    })
}
</script>

<template>
    <Head :title="title" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">{{ title }}</h1>
                <p class="text-muted-foreground text-sm">{{ schema.label }}</p>
            </div>

            <div class="flex items-center gap-2">
                <Button v-if="can.update" as-child size="sm">
                    <Link :href="`${schema.routes.index}/${record.id}/edit`">Edit</Link>
                </Button>
                <Button v-if="can.delete" variant="outline" size="sm" @click="destroy">Delete</Button>
            </div>
        </div>

        <!-- Layout tree: tabs and sections, same components the form uses. -->
        <template v-if="hasLayout">
            <InfoNode v-for="(node, i) in schema.infolist" :key="i" :node="node" :record="record" />
        </template>

        <!-- Fallback: a definition list. One record's attributes read better as
             labelled pairs than as a table row turned on its side. -->
        <dl v-else class="bg-card divide-y rounded-lg border">
            <div
                v-for="column in schema.table.columns"
                :key="column.key"
                class="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4"
            >
                <dt class="text-muted-foreground text-sm font-medium">{{ column.label }}</dt>
                <dd class="text-sm sm:col-span-2">
                    <Badge
                        v-if="column.type === 'badge'"
                        :variant="badgeVariant(column.key, record[column.key]) as any"
                        class="capitalize"
                    >
                        {{ record[column.key] }}
                    </Badge>
                    <span v-else :class="column.mono ? 'font-mono text-xs' : ''">{{ render(column.key) }}</span>
                </dd>
            </div>
        </dl>

        <!-- Related lists. -->
        <section v-if="relations.length" class="flex flex-col gap-3">
            <div class="bg-muted/40 flex w-fit gap-1 rounded-md p-1">
                <button
                    v-for="relation in relations"
                    :key="relation.key"
                    type="button"
                    class="rounded px-3 py-1.5 text-sm transition-colors"
                    :class="
                        activeRelation === relation.key
                            ? 'bg-background text-foreground font-medium shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                    "
                    @click="openRelation(relation.key)"
                >
                    {{ relation.label }}
                </button>
            </div>

            <template v-for="relation in relations" :key="relation.key">
                <RelationPanel
                    v-if="activeRelation === relation.key"
                    :columns="relation.table.columns"
                    :rows="relationState(relation.key).rows"
                    :loading="relationState(relation.key).loading"
                    :loaded="relationState(relation.key).loaded"
                    :next-cursor="relationState(relation.key).cursor"
                    :empty-text="`No ${relation.label.toLowerCase()} for this ${schema.label.toLowerCase()}.`"
                    @load="(cursor) => loadRelation(relation.key, cursor)"
                />
            </template>
        </section>

        <!--
            History last, and collapsed. It is the least-read part of a detail
            page and the most likely to be long, so it sits below the record
            rather than competing with it.
        -->
        <AuditTimeline :resource="schema.key" :record-id="record.id" />

        <div>
            <Button as-child variant="ghost" size="sm">
                <Link :href="schema.routes.index">← Back to {{ schema.labelPlural }}</Link>
            </Button>
        </div>
    </div>
</template>
