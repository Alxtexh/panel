<script setup lang="ts">
/**
 * Inline create for a relation manager tab.
 *
 * Props in, events out. The page owns the POST; this dialog only collects
 * values and emits them back.
 */
import { ref, watch } from 'vue'
import PkModal from '../Overlay/PkModal.vue'
import PkButton from '../primitives/PkButton.vue'
import SchemaNode from '../Form/SchemaNode.vue'

const props = withDefaults(
    defineProps<{
        open: boolean
        title?: string
        form?: { nodes?: unknown[] } | null
        formOptions?: Record<string, { value: any; label: string }[]>
        processing?: boolean
        errors?: Record<string, string>
        searchOptions?: (field: string, term: string) => Promise<{ value: any; label: string }[]>
    }>(),
    {
        title: 'Add',
        form: null,
        formOptions: () => ({}),
        processing: false,
        errors: () => ({}),
        searchOptions: undefined,
    },
)

const emit = defineEmits<{
    close: []
    submit: [values: Record<string, unknown>]
}>()

const values = ref<Record<string, unknown>>({})

watch(
    () => props.open,
    (open) => {
        if (open) {
            values.value = {}
        }
    },
)

function submit() {
    emit('submit', { ...values.value })
}
</script>

<template>
    <PkModal :open="open" :title="title" size="form" :busy="processing" @close="emit('close')">
        <form class="flex flex-col gap-4" @submit.prevent="submit">
            <SchemaNode
                v-for="(node, index) in form?.nodes ?? []"
                :key="index"
                :node="node as any"
                :values="values"
                :errors="errors"
                :processing="processing"
                :options="formOptions"
                :search-options="searchOptions"
                @change="(key: string, value: unknown) => (values[key] = value)"
            />
        </form>

        <template #footer>
            <PkButton variant="ghost" size="sm" :disabled="processing" @click="emit('close')">
                Cancel
            </PkButton>
            <PkButton size="sm" :disabled="processing" @click="submit">
                {{ processing ? 'Saving…' : title }}
            </PkButton>
        </template>
    </PkModal>
</template>
