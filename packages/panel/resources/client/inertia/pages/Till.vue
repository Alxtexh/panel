<script setup lang="ts">
/**
 * Packaged till: CatalogTill plus header widgets. Tax defaults to 0.
 *
 * Items, facets and taxRate come from TillPage. No jurisdiction is assumed.
 */
import {
    PAGE_SHELL, CatalogTill } from '@alxtexh-enterprise/panel'
import type { CatalogFacet, CatalogItem } from '@alxtexh-enterprise/panel'
import { PanelWidgets } from '@alxtexh-enterprise/panel/inertia'
import { Head, router } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        items?: CatalogItem[]
        facets?: CatalogFacet[]
        taxRate?: number
        taxLabel?: string
        itemPath?: string | null
    }>(),
    {
        items: () => [],
        facets: () => [],
        taxRate: 0,
        taxLabel: 'Tax',
        itemPath: null,
    },
)

function openItem(key: string): void {
    const base = (props.itemPath ?? '').replace(/\/$/, '')

    if (!base) {
        return
    }

    router.visit(`${base}/${key}`)
}
</script>

<template>
    <Head :title="pageHeading ?? 'Till'" />

    <div :class="[PAGE_SHELL, 'flex flex-col gap-10']">
        <header v-if="pageHeading" class="space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground font-normal">
                {{ pageDescription }}
            </p>
        </header>

        <PanelWidgets />

        <CatalogTill
            :items="items"
            :facets="facets"
            :tax-rate="taxRate"
            :tax-label="taxLabel"
            @select="openItem"
        />
    </div>
</template>
