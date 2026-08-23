<script setup lang="ts">
/**
 * Inertia catalog: CatalogBrowser plus a visit on tile click.
 *
 * Pass `tabs`, or the older `products` + `units` pair the demo still sends.
 */
import { computed } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import { CatalogBrowser } from '@alxtexh-enterprise/panel'
import type { CatalogBrowserTab, CatalogItem } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    tabs?: CatalogBrowserTab[]
    products?: CatalogItem[]
    units?: CatalogItem[]
    itemPath?: string
    pageSize?: number
}>()

const tabs = computed<CatalogBrowserTab[]>(() => {
    if (props.tabs?.length) {
        return props.tabs
    }

    const next: CatalogBrowserTab[] = []

    if (props.products) {
        next.push({
            key: 'products',
            label: 'Products',
            items: props.products,
            searchPlaceholder: 'Search products…',
            filterTitle: 'Filter products',
        })
    }

    if (props.units) {
        next.push({
            key: 'units',
            label: 'Units',
            items: props.units,
            searchPlaceholder: 'Search units…',
            filterTitle: 'Filter units',
        })
    }

    return next
})

function openItem(key: string): void {
    const base = (props.itemPath ?? '/catalog').replace(/\/$/, '')
    router.visit(`${base}/${key}`)
}
</script>

<template>
    <Head :title="pageHeading ?? 'Catalog'" />

    <div class="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
        <CatalogBrowser
            :title="pageHeading ?? 'Catalog'"
            :description="pageDescription"
            :tabs="tabs"
            :page-size="pageSize ?? 8"
            @select="openItem"
            @cart="openItem"
        />
    </div>
</template>
