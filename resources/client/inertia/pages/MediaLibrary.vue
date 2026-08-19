<script setup lang="ts">
/** Media library shell. Props from MediaLibraryPage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    folder?: string
    folders?: string[]
    items?: { id: number; name: string; mime?: string | null; size?: number }[]
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Media library'" />
    <div class="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Media library' }}</h1>
        <p v-if="!items?.length" class="text-sm text-muted-foreground">No files in this folder.</p>
        <ul v-else class="divide-y rounded-md border text-sm">
            <li v-for="row in items" :key="row.id" class="px-3 py-2">{{ row.name }}</li>
        </ul>
    </div>
</template>
