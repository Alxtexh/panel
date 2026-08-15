<script setup lang="ts">
/**
 * Inertia host for PlanSetupPage: grid on the index, editor on create/edit.
 */
import { computed } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import { PlanEditor, PlanGrid } from '@alxtexh-enterprise/panel'
import type { PlanLimitField, PlanModuleOption, PlanRecord } from '@alxtexh-enterprise/panel'

defineOptions({
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Subscription plans', href: '' }],
    },
})

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    plans?: PlanRecord[]
    modules?: PlanModuleOption[]
    limits?: PlanLimitField[]
    editing?: PlanRecord | null
    mode?: 'index' | 'create' | 'edit'
    indexHref?: string
    saveHref?: string
    destroyHref?: string
}>()

const mode = computed(() => props.mode ?? (props.editing ? 'edit' : 'index'))

function visitIndex() {
    router.visit(props.indexHref ?? '/settings/plans')
}

function visitCreate() {
    const base = (props.indexHref ?? '/settings/plans').replace(/\/$/, '')
    router.visit(`${base}?plan=new`)
}

function visitEdit(id: string) {
    const base = (props.indexHref ?? '/settings/plans').replace(/\/$/, '')
    router.visit(`${base}?plan=${encodeURIComponent(id)}`)
}

function save(plan: PlanRecord) {
    router.post(props.saveHref ?? `${props.indexHref ?? '/settings/plans'}/save`, { plan } as any, {
        preserveScroll: true,
    })
}

function destroy(id: string) {
    router.post(props.destroyHref ?? `${props.indexHref ?? '/settings/plans'}/destroy`, { id }, {
        preserveScroll: true,
    })
}
</script>

<template>
    <Head :title="pageHeading ?? 'Plans'" />

    <div class="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
        <PlanEditor
            v-if="mode === 'create' || mode === 'edit'"
            :plan="editing ?? undefined"
            :modules="modules ?? []"
            :limits="limits ?? []"
            :mode="mode === 'edit' ? 'edit' : 'create'"
            @save="save"
            @cancel="visitIndex"
        />

        <PlanGrid
            v-else
            :title="pageHeading ?? 'Plans'"
            :description="pageDescription"
            :plans="plans ?? []"
            @create="visitCreate"
            @edit="visitEdit"
            @delete="destroy"
        />
    </div>
</template>
