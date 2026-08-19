<script setup lang="ts">
/**
 * Generic page shell for PHP-declared layout blocks.
 *
 * Renders `pageLayout.nodes` with the same SchemaNode tree as resource forms.
 * Custom content from `data()` still lands in the default slot below the layout.
 */
import { computed } from 'vue'
import { Head } from '@inertiajs/vue3'
import { SchemaNode } from '@alxtexh-enterprise/panel'
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
    }>(),
    {
        pageLayout: null,
        values: () => ({}),
        errors: () => ({}),
        options: () => ({}),
    },
)

const nodes = computed(() => props.pageLayout?.nodes ?? [])
</script>

<template>
    <Head :title="pageHeading ?? 'Page'" />

    <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 p-4 sm:p-6">
        <header v-if="pageHeading" class="space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground">
                {{ pageDescription }}
            </p>
        </header>

        <PanelWidgets />

        <div v-if="nodes.length" class="flex flex-col gap-4">
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
