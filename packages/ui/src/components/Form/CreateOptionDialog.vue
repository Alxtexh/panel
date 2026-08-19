<script setup lang="ts">
/**
 * Inline create for SelectField::createOption().
 *
 * Props in, events out. The page owns the POST via panelCreateOption; this
 * dialog only collects values and emits them back. Not resource CRUD.
 */
import { ref, watch } from 'vue'
import PkModal from '../Overlay/PkModal.vue'
import PkButton from '../primitives/PkButton.vue'
import FormFieldControl from './FormFieldControl.vue'
import type { FormField } from './types'

const props = withDefaults(
    defineProps<{
        open: boolean
        title: string
        description?: string
        fields: FormField[]
        processing?: boolean
        errors?: Record<string, string>
        generalError?: string | null
    }>(),
    {
        description: undefined,
        processing: false,
        errors: () => ({}),
        generalError: null,
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
    <PkModal :open="open" :title="title" :description="description" :busy="processing" @close="emit('close')">
        <form class="flex flex-col gap-4" @submit.prevent="submit">
            <p v-if="generalError" class="text-destructive text-sm" role="alert">
                {{ generalError }}
            </p>

            <FormFieldControl
                v-for="child in fields"
                :key="child.key"
                :field="child"
                :value="values[child.key]"
                :error="errors[child.key]"
                :processing="processing"
                @change="(next) => (values[child.key] = next)"
            />
        </form>

        <template #footer>
            <PkButton type="button" variant="outline" :disabled="processing" @click="emit('close')">
                Cancel
            </PkButton>
            <PkButton type="button" :disabled="processing" @click="submit">
                {{ processing ? 'Creating…' : 'Create' }}
            </PkButton>
        </template>
    </PkModal>
</template>
