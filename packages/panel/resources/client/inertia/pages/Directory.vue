<script setup lang="ts">
/**
 * Inertia wrapper for DirectoryPage. Sections come from a DirectoryPage PHP class.
 */
import { Head, Link } from '@inertiajs/vue3'
import { markRaw } from 'vue'
import { DirectoryPage } from '@alxtexh-enterprise/panel'
import type { DirectorySection } from '@alxtexh-enterprise/panel'
import { useTranslations } from '../composables/useTranslations'

defineOptions({ inheritAttrs: false })

const InertiaLink = markRaw(Link)
const { t } = useTranslations()

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    sections?: DirectorySection[]
}>()
</script>

<template>
    <Head :title="pageHeading ?? t('directory.title')" />

    <div class="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
        <DirectoryPage
            :title="pageHeading ?? t('directory.title')"
            :description="pageDescription"
            :sections="sections ?? []"
            :link-component="InertiaLink"
        />
    </div>
</template>
