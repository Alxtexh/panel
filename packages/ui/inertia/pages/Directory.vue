<script setup lang="ts">
/**
 * Inertia wrapper for DirectoryPage. Sections come from a DirectoryPage PHP class.
 */
import { Head, Link } from '@inertiajs/vue3'
import { markRaw } from 'vue'
import { DirectoryPage } from '@alxtexh-enterprise/panel'
import type { DirectorySection } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const InertiaLink = markRaw(Link)

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
        :link-component="InertiaLink"
    />
</template>
