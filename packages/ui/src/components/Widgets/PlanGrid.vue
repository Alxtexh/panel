<script setup lang="ts">
/**
 * Index of PlanCards. Create is a page action; this only emits.
 */
import PlanCard from './PlanCard.vue'
import PkButton from '../primitives/PkButton.vue'
import type { PlanRecord } from './planTypes'

const props = defineProps<{
    plans: PlanRecord[]
    title?: string
    description?: string | null
    /** Drop page padding so this can sit on a settings or dashboard screen. */
    embedded?: boolean
}>()

const emit = defineEmits<{
    create: []
    edit: [id: string]
    delete: [id: string]
}>()
</script>

<template>
    <div
        class="w-full space-y-6"
        :class="embedded ? '' : 'mx-auto max-w-5xl px-4 py-6 sm:px-6'"
        data-slot="plan-grid"
    >
        <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 v-if="title" class="text-xl font-semibold tracking-tight sm:text-2xl">
                    {{ title }}
                </h1>
                <p v-if="description" class="text-muted-foreground mt-1 text-sm">
                    {{ description }}
                </p>
            </div>
            <PkButton type="button" @click="emit('create')">Create plan</PkButton>
        </header>

        <p
            v-if="plans.length === 0"
            class="text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
        >
            No plans yet. Create one to offer organisations a bundle of modules and limits.
        </p>

        <div
            v-else
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
            <PlanCard
                v-for="plan in plans"
                :key="plan.id"
                :plan="plan"
                @edit="emit('edit', $event)"
                @delete="emit('delete', $event)"
            />
        </div>
    </div>
</template>
