<script setup lang="ts">
/**
 * Create, edit or view a record in a slide-over when the resource opts into modal
 * presentation via createUsing / editUsing / viewUsing('modal').
 *
 * Default CRUD remains dedicated pages. This surface is opt-in only.
 */
import { useForm } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import {
    InfoNode,
    OVERLAY_FORM_MEASURE,
    PkButton as Button,
    PkSlideover,
    RecordForm,
    fieldErrorsFromPayload,
    useSchemaColumns,
} from '@alxtexh-enterprise/panel'
import type { FormField } from '@alxtexh-enterprise/panel'
import { formatMoney } from '../lib/money'

type CrudMode = 'create' | 'edit' | 'view'

const props = defineProps<{
    open: boolean
    mode: CrudMode
    baseUrl: string
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string; store?: string; update?: string }
        form: { columns: number; nodes?: any[]; fields?: FormField[] }
        table: { columns: any[] }
        infolist?: any[]
    }
    recordId?: string | number | null
}>()

const emit = defineEmits<{ (e: 'close'): void; (e: 'saved'): void }>()

const loading = ref(false)
const viewRecord = ref<Record<string, any> | null>(null)
const liveOptions = ref<Record<string, { value: any; label: string }[]>>({})
const formSchema = ref(props.schema.form)

const form = useForm<Record<string, any>>({})

const formValues = computed(() => ({ ...form.data() }))
const formFields = computed(() => formSchema.value.fields ?? [])
const busy = computed(() => loading.value || form.processing)

const title = computed(() => {
    if (props.mode === 'create') {
        return `New ${props.schema.label}`
    }

    if (props.mode === 'view') {
        return String(viewRecord.value?.name ?? viewRecord.value?.title ?? `#${props.recordId}`)
    }

    return `Edit ${props.schema.label}`
})

const schemaColumns = computed(() => props.schema.table.columns)
useSchemaColumns(schemaColumns)

watch(
    () => [props.open, props.mode, props.recordId] as const,
    async ([open, mode, id]) => {
        if (!open) {
            viewRecord.value = null
            form.reset()
            form.clearErrors()

            return
        }

        loading.value = true

        try {
            const suffix =
                mode === 'create'
                    ? '/forms/create'
                    : mode === 'edit'
                      ? `/${id}/forms/edit`
                      : `/${id}/forms/view`

            const response = await fetch(`${props.baseUrl}${suffix}`, {
                headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
                credentials: 'same-origin',
            })

            if (!response.ok) {
                throw new Error(`Could not load ${mode} form.`)
            }

            const payload = await response.json()

            if (mode === 'view') {
                viewRecord.value = payload.record

                return
            }

            liveOptions.value = payload.formOptions ?? {}
            form.defaults(payload.values ?? {})
            form.reset()
            form.clearErrors()
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'Could not open form.')
            emit('close')
        } finally {
            loading.value = false
        }
    },
    { immediate: true },
)

const hasLayout = computed(() => (props.schema.infolist?.length ?? 0) > 0)

function onFieldChange(key: string, value: unknown) {
    form.setData(key, value)
}

function submit() {
    const url =
        props.mode === 'create'
            ? (props.schema.routes.store ?? props.baseUrl)
            : `${props.baseUrl}/${props.recordId}`

    const method = props.mode === 'create' ? 'post' : 'put'

    form[method](url, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success(`${props.schema.label} saved.`)
            emit('saved')
            emit('close')
        },
        onError: (errors) => {
            form.setError(fieldErrorsFromPayload(errors))
        },
    })
}

function formatCell(column: any, row: Record<string, any>): string {
    const value = row[column.key]

    if (value === null || value === undefined || value === '') {
        return '-'
    }

    if (column.type === 'money') {
        return formatMoney(column, value, row)
    }

    return String(value)
}
</script>

<template>
    <PkSlideover :open="open" :title="title" size="xl" :busy="busy" @close="emit('close')">
        <div v-if="loading" class="text-muted-foreground text-sm">Loading…</div>

        <form
            v-else-if="mode !== 'view'"
            id="pk-crud-modal-form"
            :class="[OVERLAY_FORM_MEASURE, 'flex flex-col gap-4']"
            @submit.prevent="submit"
        >
            <div :class="formSchema.nodes?.length ? '' : 'bg-card rounded-lg border p-4 sm:p-6'">
                <RecordForm
                    :model-value="formValues"
                    :nodes="formSchema.nodes"
                    :fields="formFields"
                    :columns="formSchema.columns"
                    :errors="form.errors as any"
                    :options="liveOptions"
                    :processing="form.processing"
                    @change="onFieldChange"
                />
            </div>
        </form>

        <div v-else-if="viewRecord" :class="[OVERLAY_FORM_MEASURE, 'space-y-4']">
            <template v-if="hasLayout">
                <InfoNode
                    v-for="(node, index) in schema.infolist ?? []"
                    :key="index"
                    :node="node"
                    :record="viewRecord"
                />
            </template>

            <dl v-else class="divide-y rounded-lg border">
                <div
                    v-for="column in schema.table.columns"
                    :key="column.key"
                    class="grid gap-1 px-4 py-3 sm:grid-cols-3"
                >
                    <dt class="text-muted-foreground text-sm font-medium">{{ column.label }}</dt>
                    <dd class="sm:col-span-2 text-sm">{{ formatCell(column, viewRecord) }}</dd>
                </div>
            </dl>
        </div>

        <template #footer>
            <template v-if="mode !== 'view'">
                <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    :disabled="busy"
                    @click="emit('close')"
                >
                    Cancel
                </Button>
                <Button size="sm" type="submit" form="pk-crud-modal-form" :disabled="busy">
                    {{ form.processing ? 'Saving…' : 'Save' }}
                </Button>
            </template>
            <Button v-else variant="ghost" size="sm" type="button" @click="emit('close')"
                >Close</Button
            >
        </template>
    </PkSlideover>
</template>
