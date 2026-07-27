<script setup lang="ts">
/**
 * Create and edit, as a REAL PAGE for every resource.
 *
 * WHY A PAGE AND NOT A MODAL. This is Filament's convention and the reasons are
 * practical: a page is linkable and shareable, survives a refresh, gets its own
 * browser-history entry so Back means "back", and has room for a form a dialog
 * cannot hold without scrolling. The modal path still exists for quick inline
 * actions, which is what a modal is genuinely good at.
 *
 * Nothing here names a resource. Fields come from the schema, option lists from
 * the payload, and the same file serves create and edit — the only difference is
 * whether `record` is null.
 */
import { Button } from '@/components/ui/button'
import { RecordForm, type FormField } from '@panelkit/ui'
import { Head, router, useForm } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { toast } from 'vue-sonner'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string }
        form: { columns: number; nodes: any[]; fields: FormField[] }
    }
    record: { id: number | string; label: string } | null
    values: Record<string, any>
    formOptions: Record<string, { value: any; label: string }[]>
    breadcrumbs: { title: string; href: string }[]
}>()


const isEdit = computed(() => props.record !== null)

const form = useForm<Record<string, any>>({ ...props.values })

const formValues = computed<Record<string, any>>(() => ({ ...form.data() }))

function submit() {
    const onSuccess = () => {
        toast.success(`${props.schema.label} ${isEdit.value ? 'updated' : 'created'}`)
        router.visit(props.schema.routes.index)
    }

    if (isEdit.value) {
        form.put(`${props.schema.routes.index}/${props.record!.id}`, { onSuccess })
    } else {
        form.post(props.schema.routes.index, { onSuccess })
    }
}

function cancel() {
    router.visit(props.schema.routes.index)
}

/**
 * Unsaved-changes guard (addendum C).
 *
 * Trivial in an SPA and genuinely useful on a full-page form, where a stray
 * Back or a closed tab loses everything typed. Only guards a form that is
 * actually dirty, so it never nags on a page someone merely looked at.
 */
function onBeforeUnload(e: BeforeUnloadEvent) {
    if (form.isDirty && !form.processing) {
        e.preventDefault()
        e.returnValue = ''
    }
}

let removeNavigationGuard: (() => void) | undefined

onMounted(() => {
    window.addEventListener('beforeunload', onBeforeUnload)

    removeNavigationGuard = router.on('before', (event) => {
        // A submit navigates too; only an unrelated navigation should prompt.
        if (!form.isDirty || form.processing) return

        if (!window.confirm('You have unsaved changes. Leave without saving?')) {
            event.preventDefault()
        }
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', onBeforeUnload)
    removeNavigationGuard?.()
})
</script>

<template>
    <Head :title="`${isEdit ? 'Edit' : 'New'} ${schema.label}`" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-4 p-3 sm:p-4">
        <div>
            <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                {{ isEdit ? `Edit ${schema.label}` : `New ${schema.label}` }}
            </h1>
            <p v-if="record" class="text-muted-foreground text-sm">{{ record.label }}</p>
        </div>

        <!--
            No card here when the schema declares layout: Section and Tabs draw
            their own frame, and wrapping them puts a border around a border.
            The flat fallback has no frame of its own, so it still gets one.
        -->
        <div :class="schema.form.nodes?.length ? '' : 'bg-card rounded-lg border p-4 sm:p-6'">
            <RecordForm
                :model-value="formValues"
                :nodes="schema.form.nodes"
                :fields="schema.form.fields"
                :columns="schema.form.columns"
                :errors="form.errors as any"
                :options="formOptions"
                :processing="form.processing"
                @change="(key: string, value: any) => ((form as any)[key] = value)"
            />
        </div>

        <div class="flex items-center justify-end gap-2">
            <Button variant="ghost" :disabled="form.processing" @click="cancel">Cancel</Button>
            <Button :disabled="form.processing" @click="submit">
                {{ form.processing ? 'Saving…' : isEdit ? 'Save changes' : `Create ${schema.label}` }}
            </Button>
        </div>
    </div>
</template>
