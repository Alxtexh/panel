<script setup lang="ts">
/** Webhook endpoints shell. Props from WebhookEndpointsPage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    eventsCatalog?: string[]
    endpoints?: { id: number; url: string; events: string[]; enabled: boolean }[]
    selectedEndpointId?: number | null
    deliveries?: { id: number; event: string; status_code?: number | null; error?: string | null }[]
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Webhooks'" />
    <div class="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
        <header>
            <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Webhooks' }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground">{{ pageDescription }}</p>
        </header>
        <p v-if="!endpoints?.length" class="text-sm text-muted-foreground">
            No endpoints. Enable webhooks on the panel and POST to save.
        </p>
        <ul v-else class="divide-y rounded-md border text-sm">
            <li v-for="row in endpoints" :key="row.id" class="px-3 py-2">
                <p class="font-medium">{{ row.url }}</p>
                <p class="text-muted-foreground text-xs">{{ row.events.join(', ') }}</p>
            </li>
        </ul>
    </div>
</template>
