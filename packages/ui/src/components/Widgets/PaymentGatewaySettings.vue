<script setup lang="ts">
/**
 * Organisation payment-gateway chrome: search, cards, enable/disable/default.
 *
 * DESIGN CHROME, NOT PROCESSORS. The page owns persistence. This component
 * v-models the gateway list and never talks to a bank.
 */
import { computed, ref } from 'vue'
import PkButton from '../primitives/PkButton.vue'
import PkHeading from '../primitives/PkHeading.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import PkTextInput from '../primitives/PkTextInput.vue'
import PkSlideover from '../Overlay/PkSlideover.vue'
import { iconPath } from '../primitives/icons'
import PaymentGateways from './PaymentGateways.vue'
import type { PaymentGateway } from './PaymentGateways.vue'

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string | null
        headingVariant?: 'default' | 'small'
    }>(),
    {
        title: 'Payment gateways',
        description: null,
        headingVariant: 'default',
    },
)

const rows = defineModel<PaymentGateway[]>('gateways', { default: () => [] })
const selectedKey = ref<string | null>(null)
const query = ref('')

const selected = computed(
    () => rows.value.find((gateway) => gateway.key === selectedKey.value) ?? null,
)

const filtered = computed(() => {
    const needle = query.value.trim().toLowerCase()

    if (needle === '') {
        return rows.value
    }

    return rows.value.filter((gateway) => {
        const haystack = [gateway.key, gateway.label, gateway.caption, ...gateway.methods]
            .join(' ')
            .toLowerCase()

        return haystack.includes(needle)
    })
})

function offered(gateway: PaymentGateway): boolean {
    return gateway.connected && gateway.enabled !== false
}

function patch(key: string, next: Partial<PaymentGateway>): void {
    rows.value = rows.value.map((gateway) =>
        gateway.key === key ? { ...gateway, ...next } : gateway,
    )
}

function configure(key: string): void {
    selectedKey.value = key
}

function toggle(key: string): void {
    const gateway = rows.value.find((row) => row.key === key)

    if (!gateway) {
        return
    }

    const connected = !gateway.connected

    patch(key, {
        connected,
        mode: connected ? (gateway.mode ?? 'test') : null,
        enabled: connected,
        isDefault: false,
    })
}

function setEnabled(key: string, enabled: boolean): void {
    const gateway = rows.value.find((row) => row.key === key)

    if (!gateway?.connected) {
        return
    }

    patch(key, { enabled, isDefault: enabled ? gateway.isDefault : false })
}

function setDefault(key: string): void {
    const target = rows.value.find((gateway) => gateway.key === key)

    if (!target || !offered(target)) {
        return
    }

    rows.value = rows.value.map((gateway) => ({
        ...gateway,
        isDefault: gateway.key === key,
    }))
}

function setMode(mode: 'test' | 'live'): void {
    const key = selectedKey.value

    if (!key) {
        return
    }

    const gateway = rows.value.find((row) => row.key === key)

    if (!gateway?.connected) {
        return
    }

    patch(key, { mode })
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <PkHeading
            :variant="headingVariant"
            :title="title"
            :description="description ?? undefined"
        />

        <div class="relative">
            <svg
                class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
            >
                <path :d="iconPath('search')" />
            </svg>
            <PkTextInput
                v-model="query"
                type="search"
                class="pl-9"
                placeholder="Search gateways…"
                aria-label="Search payment gateways"
            />
        </div>

        <PaymentGateways
            v-if="filtered.length > 0"
            :gateways="filtered"
            @configure="configure"
            @toggle="toggle"
        />
        <p v-else class="text-muted-foreground text-sm font-normal">
            No gateways match “{{ query.trim() }}”.
        </p>
    </div>

    <PkSlideover
        :open="selected !== null"
        :title="selected?.label ?? 'Gateway'"
        description="Showcase fields only. Values are not sent anywhere."
        size="md"
        @close="selectedKey = null"
    >
        <div v-if="selected" class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-2">
                <PkStatusBadge :status="selected.connected ? 'connected' : 'disconnected'">
                    {{ selected.connected ? 'Connected' : 'Not connected' }}
                </PkStatusBadge>
                <PkStatusBadge
                    v-if="selected.connected && selected.enabled !== false"
                    status="offered"
                >
                    Offered
                </PkStatusBadge>
                <PkStatusBadge v-else-if="selected.connected" status="disabled">
                    Disabled
                </PkStatusBadge>
                <PkStatusBadge v-if="selected.isDefault" status="default">
                    Default
                </PkStatusBadge>
                <PkStatusBadge v-if="selected.connected && selected.mode" :status="selected.mode">
                    {{ selected.mode }}
                </PkStatusBadge>
            </div>

            <p class="text-muted-foreground text-sm font-normal">{{ selected.caption }}</p>

            <label class="flex flex-col gap-1 text-sm">
                Display name
                <input
                    class="border-input h-9 rounded-md border bg-transparent px-3 text-sm"
                    :value="selected.label"
                    readonly
                />
            </label>

            <label class="flex flex-col gap-1 text-sm">
                Merchant / till (placeholder)
                <input
                    class="border-input h-9 rounded-md border bg-transparent px-3 text-sm"
                    placeholder="Not stored, demo field"
                    autocomplete="off"
                />
            </label>

            <div v-if="selected.connected" class="flex flex-col gap-2">
                <p class="text-sm font-medium">Checkout</p>
                <p class="text-muted-foreground text-xs font-normal">
                    Disabled gateways stay connected but are not offered at checkout.
                    Only one gateway can be the default tender.
                </p>
                <div class="flex flex-wrap items-center gap-2">
                    <PkButton
                        size="sm"
                        :variant="selected.enabled !== false ? 'default' : 'outline'"
                        @click="setEnabled(selected.key, true)"
                    >
                        Enable
                    </PkButton>
                    <PkButton
                        size="sm"
                        :variant="selected.enabled === false ? 'default' : 'outline'"
                        @click="setEnabled(selected.key, false)"
                    >
                        Disable
                    </PkButton>
                    <PkButton
                        size="sm"
                        :variant="selected.isDefault ? 'default' : 'outline'"
                        :disabled="!offered(selected)"
                        @click="setDefault(selected.key)"
                    >
                        Use as default
                    </PkButton>
                </div>
            </div>

            <div v-if="selected.connected" class="flex items-center gap-2">
                <PkButton
                    size="sm"
                    :variant="selected.mode === 'test' ? 'default' : 'outline'"
                    @click="setMode('test')"
                >
                    Test
                </PkButton>
                <PkButton
                    size="sm"
                    :variant="selected.mode === 'live' ? 'default' : 'outline'"
                    @click="setMode('live')"
                >
                    Live
                </PkButton>
            </div>
        </div>

        <template #footer>
            <PkButton variant="outline" size="sm" @click="selectedKey = null">Close</PkButton>
            <PkButton v-if="selected" size="sm" @click="toggle(selected.key)">
                {{ selected.connected ? 'Disconnect' : 'Mark connected' }}
            </PkButton>
        </template>
    </PkSlideover>
</template>
