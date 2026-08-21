<script setup lang="ts">
/**
 * Dedicated catalog item chrome: back link plus CatalogItemDetail.
 *
 * THE HREF IS A STRING. This package does not import Inertia, so the back
 * control is a plain link. The page owns cart: emit, then visit a till.
 */
import CatalogItemDetail from './CatalogItemDetail.vue'
import { PAGE_SHELL } from '../../lib/pageShell'
import type { CatalogItem } from './CatalogCard.vue'

const props = withDefaults(
    defineProps<{
        item: CatalogItem
        catalogHref?: string
        backLabel?: string
        embedded?: boolean
    }>(),
    {
        catalogHref: '/catalog',
        backLabel: 'Back to catalog',
        embedded: true,
    },
)

const emit = defineEmits<{
    cart: [key: string]
}>()
</script>

<template>
    <div
        class="flex w-full flex-col gap-8"
        :class="embedded ? '' : PAGE_SHELL"
    >
        <a
            :href="catalogHref"
            class="text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm"
        >
            <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
            {{ backLabel }}
        </a>

        <CatalogItemDetail :item="item" @cart="emit('cart', $event)" />
    </div>
</template>
