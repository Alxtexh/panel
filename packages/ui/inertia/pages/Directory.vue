<script setup lang="ts">
/**
 * Inertia wrapper for DirectoryPage. Sections come from a DirectoryPage PHP class.
 */
import { Head } from '@inertiajs/vue3'
import { DirectoryPage } from '@alxtexh-enterprise/panel'
import type { DirectorySection } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    sections?: DirectorySection[]
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Directory'" />

    <DirectoryPage
        :title="pageHeading ?? 'Directory'"
        :description="pageDescription"
        :sections="sections ?? []"
    />
</template>
