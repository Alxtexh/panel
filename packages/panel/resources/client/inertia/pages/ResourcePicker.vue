<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component.
 */
defineOptions({ inheritAttrs: false })

/**
 * Table-backed picker. A dedicated page that reuses ListQuery, not a modal.
 *
 * Filament TableSelect without Livewire. The rows are the related resource's
 * table. Choosing one returns to the form with the id on the query string.
 */
import { Head, Link, router } from '@inertiajs/vue3'
import { ref } from 'vue'
import { PkButton as Button, buttonClasses } from '@alxtexh-enterprise/panel'
import type { SchemaColumn } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        table: { columns: SchemaColumn[] }
    }
    field: string
    chooseBase: string
    returnUrl: string
    records: Record<string, any>[]
    search: string
    breadcrumbs: { title: string; href: string }[]
}>()

const term = ref(props.search ?? '')

function runSearch(): void {
    router.get(
        window.location.pathname,
        { search: term.value, return: props.returnUrl },
        { preserveState: true, replace: true },
    )
}

function chooseHref(id: string | number): string {
    return `${props.chooseBase}/${id}?return=${encodeURIComponent(props.returnUrl)}`
}

function cell(row: Record<string, any>, column: SchemaColumn): string {
    const value = row[column.key]

    if (value === null || value === undefined || value === '') {
        return '-'
    }

    return String(value)
}
</script>

<template>
    <Head :title="`Choose ${schema.label}`" />

    <div class="mx-auto flex w-full max-w-5xl flex-col gap-4 p-3 pb-24 sm:p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="min-w-0">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                    Choose {{ schema.label }}
                </h1>
                <p class="text-muted-foreground text-sm">
                    A page, not a dialog. The list is the same query the related
                    resource uses.
                </p>
            </div>
            <Link :href="returnUrl" :class="buttonClasses({ variant: 'outline', size: 'sm' })">
                Back
            </Link>
        </div>

        <form class="flex gap-2" @submit.prevent="runSearch">
            <input
                v-model="term"
                type="search"
                class="border-input bg-background focus-visible:ring-ring h-9 min-w-0 flex-1 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
                placeholder="Search"
            />
            <Button type="submit" variant="outline" size="sm">Search</Button>
        </form>

        <div class="bg-card overflow-x-auto rounded-lg border">
            <table class="w-full text-sm">
                <thead class="bg-muted/40 text-muted-foreground text-left text-xs">
                    <tr>
                        <th
                            v-for="column in schema.table.columns"
                            :key="column.key"
                            class="px-3 py-2 font-medium"
                        >
                            {{ column.label }}
                        </th>
                        <th class="px-3 py-2 font-medium"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="records.length === 0">
                        <td
                            class="text-muted-foreground px-3 py-6 text-center"
                            :colspan="schema.table.columns.length + 1"
                        >
                            No matching records.
                        </td>
                    </tr>
                    <tr
                        v-for="row in records"
                        :key="row.id"
                        class="hover:bg-muted/30 border-t"
                    >
                        <td
                            v-for="column in schema.table.columns"
                            :key="column.key"
                            class="px-3 py-2"
                        >
                            {{ cell(row, column) }}
                        </td>
                        <td class="px-3 py-2 text-right">
                            <Link
                                :href="chooseHref(row.id)"
                                :class="buttonClasses({ size: 'sm' })"
                            >
                                Select
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
