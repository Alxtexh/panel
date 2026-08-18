<script setup lang="ts">
/** Onboarding wizard shell. Props from OnboardingPage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    steps?: { key: string; label: string; done: boolean; href?: string | null }[]
    dismissed?: boolean
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Get started'" />
    <div class="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Get started' }}</h1>
        <p v-if="!steps?.length" class="text-sm text-muted-foreground">Override steps() on your page class.</p>
        <ol v-else class="space-y-3 text-sm">
            <li v-for="step in steps" :key="step.key" class="flex gap-2">
                <span>{{ step.done ? '✓' : '○' }}</span>
                <span>{{ step.label }}</span>
            </li>
        </ol>
    </div>
</template>
