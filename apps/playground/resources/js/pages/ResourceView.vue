<script setup lang="ts">
/**
 * Read-only detail page for any resource.
 *
 * Driven entirely by the schema's columns, so no resource contributes Vue. A
 * dedicated page rather than a modal for the same reasons as the form: it is
 * linkable, survives a refresh, and is what an operator pastes into a ticket.
 *
 * Fields render through the same semantic mapping the table uses — badge
 * colours from the schema's intent map, dates by column type — so a value never
 * looks one way in the list and another here.
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { InfoNode, useSchemaColumns, type SchemaColumn } from '@panelkit/ui'
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, toRef } from 'vue'
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
    }
    record: Record<string, any>
    can: { update: boolean; delete: boolean }
    breadcrumbs: { title: string; href: string }[]
}>()


/**
 * Layout when the resource declares one; a flat list of its table columns
 * otherwise — which is what every resource had before layout existed, so
 * nothing that has not opted in changes.
 */
const hasLayout = computed(() => (props.schema.infolist?.length ?? 0) > 0)

const schemaColumns = toRef(() => props.schema.table.columns)
const { byKey, badgeVariant } = useSchemaColumns(schemaColumns)

const title = computed(() => String(props.record.name ?? `#${props.record.id}`))

const dateFormats: Record<string, Intl.DateTimeFormatOptions> = {
    date: { year: 'numeric', month: 'long', day: 'numeric' },
    datetime: { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' },
}

function render(key: string): string {
    const column = byKey.value[key]
    const value = props.record[key]

    if (value === null || value === undefined || value === '') return '—'

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

        <div>
            <Button as-child variant="ghost" size="sm">
                <Link :href="schema.routes.index">← Back to {{ schema.labelPlural }}</Link>
            </Button>
        </div>
    </div>
</template>
