<script setup lang="ts">
/**
 * Organisation payment gateways. Fake connected state unless the page persists.
 */
import { onMounted, ref, watch } from 'vue'
import { Head } from '@inertiajs/vue3'
import { PaymentGatewaySettings } from '@alxtexh-enterprise/panel'
import type { PaymentGateway } from '@alxtexh-enterprise/panel'

defineOptions({
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Payment gateways', href: '' }],
    },
})

const STORAGE_KEY = 'panel.payment-gateways'

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    gateways?: PaymentGateway[]
    persist?: boolean
}>()

function seedRows(): PaymentGateway[] {
    return (props.gateways ?? []).map((gateway) => ({
        ...gateway,
        enabled: gateway.connected ? gateway.enabled !== false : false,
        isDefault: Boolean(gateway.isDefault),
    }))
}

function loadStored(): Partial<
    Record<string, Pick<PaymentGateway, 'connected' | 'mode' | 'enabled' | 'isDefault'>>
> {
    if (typeof localStorage === 'undefined') {
        return {}
    }

    try {
        const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')

        return parsed && typeof parsed === 'object' ? parsed : {}
    } catch {
        return {}
    }
}

function mergeSeed(): PaymentGateway[] {
    const stored = loadStored()

    return seedRows().map((gateway) => {
        const saved = stored[gateway.key]

        if (!saved) {
            return gateway
        }

        const connected = saved.connected ?? gateway.connected

        return {
            ...gateway,
            connected,
            mode: connected ? (saved.mode ?? gateway.mode ?? 'test') : null,
            enabled: connected ? (saved.enabled ?? true) : false,
            isDefault: connected && saved.enabled !== false && Boolean(saved.isDefault),
        }
    })
}

const rows = ref<PaymentGateway[]>(seedRows())
const hydrated = ref(false)

onMounted(() => {
    rows.value = props.persist === false ? seedRows() : mergeSeed()
    hydrated.value = true
})

watch(
    rows,
    (value) => {
        if (!hydrated.value || props.persist === false || typeof localStorage === 'undefined') {
            return
        }

        const snapshot: Record<
            string,
            Pick<PaymentGateway, 'connected' | 'mode' | 'enabled' | 'isDefault'>
        > = {}

        for (const gateway of value) {
            snapshot[gateway.key] = {
                connected: gateway.connected,
                mode: gateway.mode,
                enabled: gateway.enabled !== false,
                isDefault: Boolean(gateway.isDefault),
            }
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
    },
    { deep: true },
)
</script>

<template>
    <Head :title="pageHeading ?? 'Payment gateways'" />

    <PaymentGatewaySettings
        heading-variant="small"
        :title="pageHeading ?? 'Payment gateways'"
        :description="pageDescription"
        v-model:gateways="rows"
    />
</template>
