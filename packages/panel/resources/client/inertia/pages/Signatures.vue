<script setup lang="ts">
/**
 * Inertia signatures studio. Documents are props; marks stay in this browser.
 */
import { Head } from '@inertiajs/vue3'
import { computed } from 'vue'
import { PAGE_SHELL, SignatureStudio } from '@alxtexh-enterprise/panel'
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

    <div :class="PAGE_SHELL">
        <SignatureStudio
            :title="pageHeading ?? 'Signatures'"
            :description="pageDescription"
            :documents="documents"
            :storage-key="storageKey ?? 'panel.signatures'"
        />
    </div>
</template>
