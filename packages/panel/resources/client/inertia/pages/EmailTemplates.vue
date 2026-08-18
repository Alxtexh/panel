<script setup lang="ts">
/** Email templates shell. Props from EmailTemplatePage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    templates?: { key: string; subject: string }[]
    selected?: { key: string; subject: string; body: string } | null
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Email templates'" />
    <div class="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Email templates' }}</h1>
        <p v-if="!templates?.length" class="text-sm text-muted-foreground">No templates yet.</p>
        <ul v-else class="divide-y rounded-md border text-sm">
            <li v-for="row in templates" :key="row.key" class="px-3 py-2">{{ row.key }}: {{ row.subject }}</li>
        </ul>
    </div>
</template>
