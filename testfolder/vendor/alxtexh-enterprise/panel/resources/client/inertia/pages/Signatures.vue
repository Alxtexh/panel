<script setup lang="ts">
/**
 * Inertia signatures studio. Documents are props; marks stay in this browser.
 */
import { computed } from 'vue'
import { Head } from '@inertiajs/vue3'
import { SignatureStudio } from '@alxtexh-enterprise/panel'
import type { StudioDocument } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    documents?: StudioDocument[]
    invoice?: Record<string, unknown>
    contract?: Record<string, unknown>
    storageKey?: string
}>()

const documents = computed<StudioDocument[]>(() => {
    if (props.documents?.length) {
        return props.documents
    }

    const next: StudioDocument[] = []

    if (props.invoice) {
        next.push({ key: 'invoice', label: 'Invoice', document: props.invoice })
    }

    if (props.contract) {
        next.push({ key: 'contract', label: 'Lease', document: props.contract })
    }

    return next
})
</script>

<template>
    <Head :title="pageHeading ?? 'Signatures'" />

    <div class="mx-auto w-full max-w-6xl p-4 sm:p-6">
        <SignatureStudio
            :title="pageHeading ?? 'Signatures'"
            :description="pageDescription"
            :documents="documents"
            :storage-key="storageKey ?? 'panel.signatures'"
        />
    </div>
</template>
