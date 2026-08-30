<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component.
 */
defineOptions({ inheritAttrs: false })

/**
 * Attach existing related records. A dedicated page, not a modal.
 *
 * BelongsToMany nested resources pick rows that already exist. Create still
 * makes a new one. Detach is a row action on the nested index.
 */
import { Head, Link, useForm } from '@inertiajs/vue3'
import {
    FORM_MEASURE,
    PAGE_SHELL_COMPACT,
    PkButton as Button,
    PkPageHeader,
    SchemaNode,
    buttonClasses,
} from '@alxtexh-enterprise/panel'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string; attach?: string }
    }
    options: { value: string | number; label: string }[]
    // Extra pivot-table columns, collected once and applied to every id in
    // this submission - not one form per selected row.
    pivotForm?: { nodes?: unknown[] } | null
    breadcrumbs: { title: string; href: string }[]
}>()

const form = useForm<{ ids: Array<string | number>; pivot: Record<string, unknown> }>({
    ids: [],
    pivot: {},
})

function toggle(id: string | number) {
    if (form.ids.map(String).includes(String(id))) {
        form.ids = form.ids.filter((value) => String(value) !== String(id))

        return
    }

    form.ids = [...form.ids, id]
}

function submit() {
    form.post(props.schema.routes.attach ?? `${props.schema.routes.index}/attach`)
}
</script>

<template>
    <Head :title="`Attach ${schema.labelPlural}`" />

    <div :class="[PAGE_SHELL_COMPACT, 'flex flex-col gap-4 pb-24']">
        <PkPageHeader
            :title="`Attach ${schema.labelPlural}`"
            purpose="Pick existing records. This is a page, not a dialog."
        >
            <template #actions>
                <Link
                    :href="schema.routes.index"
                    :class="buttonClasses({ variant: 'outline', size: 'sm' })"
                >
                    Back
                </Link>
            </template>
        </PkPageHeader>

        <form
            :class="[
                FORM_MEASURE,
                'bg-card flex flex-col gap-3 rounded-xl border p-4 shadow-sm ring-1 ring-black/5 sm:p-6 dark:ring-white/10',
            ]"
            @submit.prevent="submit"
        >
            <p v-if="options.length === 0" class="text-muted-foreground text-sm font-normal">
                Nothing left to attach.
            </p>
            <label
                v-for="option in options"
                :key="option.value"
                class="flex items-center gap-2 text-sm"
            >
                <input
                    type="checkbox"
                    :checked="form.ids.map(String).includes(String(option.value))"
                    :disabled="form.processing"
                    @change="toggle(option.value)"
                />
                {{ option.label }}
            </label>

            <div v-if="pivotForm?.nodes?.length" class="flex flex-col gap-4 border-t pt-4">
                <p class="text-muted-foreground text-sm font-normal">
                    Applied to every record attached below.
                </p>
                <SchemaNode
                    v-for="(node, index) in pivotForm.nodes"
                    :key="index"
                    :node="node as any"
                    :values="form.pivot"
                    :errors="form.errors"
                    :processing="form.processing"
                    @change="(key: string, value: unknown) => (form.pivot[key] = value)"
                />
            </div>

            <div class="flex justify-end gap-2 pt-2">
                <Button type="submit" :disabled="form.processing || form.ids.length === 0">
                    Attach
                </Button>
            </div>
        </form>
    </div>
</template>
