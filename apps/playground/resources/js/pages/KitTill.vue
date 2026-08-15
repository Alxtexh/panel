<script setup lang="ts">
/**
 * Kit till demo: fake SKUs into CatalogTill. Header ChartWidgets stay here.
 */
import { computed, ref } from 'vue';
import {
    CatalogTill,
    PkButton,
    PkHeading,
    PkStatusBadge,
} from '@alxtexh-enterprise/panel';
import type { CatalogFacet, CatalogItem } from '@alxtexh-enterprise/panel';
import { PanelWidgets } from '@alxtexh-enterprise/panel/inertia';
import { Head, router } from '@inertiajs/vue3';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
    pageHeading?: string;
    pageDescription?: string | null;
    products?: CatalogItem[];
    statuses?: string[];
    itemPath?: string;
}>();

const tenOff = ref(false);

const productFacets: CatalogFacet[] = [
    {
        key: 'category',
        label: 'Category',
        options: [
            { value: 'coffee', label: 'Coffee' },
            { value: 'supplies', label: 'Supplies' },
            { value: 'merch', label: 'Merch' },
        ],
    },
    {
        key: 'stock',
        label: 'Stock',
        options: [
            { value: 'in-stock', label: 'In stock' },
            { value: 'low', label: 'Low' },
            { value: 'out-of-stock', label: 'Out of stock' },
        ],
    },
];

function formatKes(amount: number): string {
    return `KES ${new Intl.NumberFormat('en-KE').format(Math.round(amount))}`;
}

function openItem(key: string): void {
    const base = (props.itemPath ?? '/kit-catalog').replace(/\/$/, '');
    router.visit(`${base}/${key}`);
}

const discountRate = computed(() => (tenOff.value ? 0.1 : 0));
</script>

<template>
    <Head :title="pageHeading ?? 'Till'" />

    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 p-4 sm:p-6">
        <PkHeading
            :title="pageHeading ?? 'Till'"
            :description="pageDescription ?? undefined"
        />

        <PanelWidgets />

        <CatalogTill
            :items="products ?? []"
            :facets="productFacets"
            :tax-rate="0.16"
            tax-label="VAT 16%"
            :discount-rate="discountRate"
            :format-money="formatKes"
            @select="openItem"
        >
            <template #pay="{ cart, paid, pay }">
                <div class="flex flex-col gap-2">
                    <PkButton
                        class="w-full"
                        variant="outline"
                        :disabled="cart.length === 0"
                        @click="tenOff = !tenOff"
                    >
                        {{ tenOff ? 'Remove 10% off' : '10% off' }}
                    </PkButton>
                    <PkButton
                        class="w-full"
                        :disabled="cart.length === 0"
                        @click="pay()"
                    >
                        {{ paid ? 'Paid' : 'Pay' }}
                    </PkButton>
                </div>
            </template>
        </CatalogTill>

        <section class="flex flex-col gap-3">
            <PkHeading
                variant="small"
                title="Status strip"
                description="Dedicated colours: success, warning, danger, info. Not brand."
            />
            <div class="flex flex-wrap gap-2">
                <PkStatusBadge
                    v-for="status in statuses ?? []"
                    :key="status"
                    :status="status"
                />
            </div>
        </section>
    </div>
</template>
