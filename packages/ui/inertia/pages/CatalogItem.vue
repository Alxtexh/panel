<script setup lang="ts">
/**
 * Inertia catalog item. Cart visits `cartHref` (a till, a quote, a basket).
 */
import { Head, router } from '@inertiajs/vue3'
import { CatalogItemView } from '@alxtexh-enterprise/panel'
import type { CatalogItem } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    item: CatalogItem
    catalogHref?: string
    cartHref?: string
}>()

function addToCart(): void {
    router.visit(props.cartHref ?? '/till')
}
</script>

<template>
    <Head :title="item.label" />

    <CatalogItemView
        :item="item"
        :catalog-href="catalogHref ?? '/catalog'"
        @cart="addToCart"
    />
</template>
