<script setup lang="ts">
/**
 * Generic page shell for PHP-declared layout blocks.
 *
 * Renders `pageLayout.nodes` with the same SchemaNode tree as resource forms.
 * Custom content from `data()` still lands in the default slot below the layout.
 */
import { computed, watch } from 'vue'
import { Head, useForm } from '@inertiajs/vue3'
import {
    PAGE_SHELL, SchemaNode } from '@alxtexh-enterprise/panel'
import type { SchemaNode as SchemaNodeType } from '@alxtexh-enterprise/panel'
import { PanelWidgets } from '@alxtexh-enterprise/panel/inertia'

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        pageLayout?: {
            nodes?: SchemaNodeType[]
            fields?: SchemaNodeType[]
        } | null
        values?: Record<string, unknown>
        errors?: Record<string, string>
        options?: Record<string, { value: unknown; label: string }[]>
        saveHref?: string | null
        saveMethod?: string | null
    }>(),
    {
        pageLayout: null,
        values: () => ({}),
        errors: () => ({}),
        options: () => ({}),
        saveHref: null,
        saveMethod: 'post',
    },
)

const nodes = computed(() => props.pageLayout?.nodes ?? [])

const form = useForm<Record<string, unknown>>({ ...props.values })

watch(
    () => props.values,
    (values) => {
        Object.assign(form, values)
    },
    { deep: true },
)

const canSave = computed(() => Boolean(props.saveHref))

function onFieldChange(key: string, value: unknown) {
    ;(form as Record<string, unknown>)[key] = value
}

function submitLayout() {
    if (!props.saveHref) {
        return
    }

    const method = (props.saveMethod ?? 'post').toLowerCase()

    if (method === 'put') {
        form.put(props.saveHref)
        return
    }

    if (method === 'patch') {
        form.patch(props.saveHref)
        return
    }

    form.post(props.saveHref)
}
</script>

<template>
    <Head :title="pageHeading ?? 'Page'" />

    <div :class="[PAGE_SHELL, 'flex flex-col gap-6']">
        <header v-if="pageHeading" class="space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground">
                {{ pageDescription }}
            </p>
        </header>

        <PanelWidgets />

        <form v-if="nodes.length && canSave" class="flex flex-col gap-4" @submit.prevent="submitLayout">
            <SchemaNode
                v-for="(node, index) in nodes"
                :key="index"
                :node="node"
                :values="form.data()"
                :errors="form.errors"
                :options="options"
                :depth="0"
                @change="onFieldChange"
            />

            <div class="flex justify-end">
                <button
                    type="submit"
                    class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4 text-sm font-medium disabled:opacity-50"
                    :disabled="form.processing"
                >
                    Save
                </button>
            </div>
        </form>

        <div v-else-if="nodes.length" class="flex flex-col gap-4">
            <SchemaNode
                v-for="(node, index) in nodes"
                :key="index"
                :node="node"
                :values="values"
                :errors="errors"
                :options="options"
                :depth="0"
            />
        </div>

        <slot />
    </div>
</template>
