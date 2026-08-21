<script setup lang="ts">
/**
 * A settings strip of payment methods: logos, connected or not, test/live.
 *
 * DESIGN CHROME, NOT PROCESSORS. Cards look like M-Pesa, a card rail, cash
 * and a bank transfer so a copier can see the layout. Clicking Configure
 * emits; the page owns fake connected, enabled, and default state. No API
 * keys leave this file.
 */
import { computed } from 'vue'
import { CATALOGUE_CONTAINER, CATALOGUE_GRID } from '../../lib/catalogueGrid'
import PkButton from '../primitives/PkButton.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'

export interface PaymentGateway {
    key: string
    label: string
    caption: string
    mark: string
    color: string
    connected: boolean
    mode: 'test' | 'live' | null
    methods: string[]
    /** Connected but not offered at checkout when false. */
    enabled?: boolean
    /** At most one gateway is the default tender. */
    isDefault?: boolean
}

const props = defineProps<{
    gateways: PaymentGateway[]
}>()

const emit = defineEmits<{
    configure: [key: string]
    toggle: [key: string]
}>()

const connectedCount = computed(
    () => props.gateways.filter((gateway) => gateway.connected).length,
)
</script>

<template>
    <div
        :class="['flex flex-col gap-4', CATALOGUE_CONTAINER]"
        data-slot="payment-gateways"
    >
        <p class="text-muted-foreground text-sm">
            {{ connectedCount }} of {{ gateways.length }} connected, showcase only, no live
            processors.
        </p>

        <div :class="CATALOGUE_GRID">
            <article
                v-for="gateway in gateways"
                :key="gateway.key"
                class="bg-background flex flex-col gap-4 rounded-lg border p-4"
            >
                <div class="flex items-start gap-3">
                    <span
                        class="flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white"
                        :style="{ background: gateway.color }"
                        aria-hidden="true"
                    >
                        {{ gateway.mark }}
                    </span>
                    <div class="min-w-0 flex-1">
                        <div class="flex flex-wrap items-center gap-2">
                            <h3 class="truncate text-sm font-medium">{{ gateway.label }}</h3>
                            <PkStatusBadge :status="gateway.connected ? 'connected' : 'disconnected'">
                                {{ gateway.connected ? 'Connected' : 'Not connected' }}
                            </PkStatusBadge>
                            <PkStatusBadge
                                v-if="gateway.connected && gateway.enabled !== false"
                                status="offered"
                            >
                                Offered
                            </PkStatusBadge>
                            <PkStatusBadge
                                v-else-if="gateway.connected"
                                status="disabled"
                            >
                                Disabled
                            </PkStatusBadge>
                            <PkStatusBadge v-if="gateway.isDefault" status="default">
                                Default
                            </PkStatusBadge>
                            <PkStatusBadge
                                v-if="gateway.connected && gateway.mode"
                                :status="gateway.mode"
                            >
                                {{ gateway.mode }}
                            </PkStatusBadge>
                        </div>
                        <p class="text-muted-foreground mt-0.5 text-xs">{{ gateway.caption }}</p>
                    </div>
                </div>

                <p class="text-muted-foreground text-xs">
                    {{ gateway.methods.join(' · ') }}
                </p>

                <div class="mt-auto flex items-center gap-2">
                    <PkButton size="sm" variant="outline" @click="emit('configure', gateway.key)">
                        Configure
                    </PkButton>
                    <PkButton size="sm" variant="ghost" @click="emit('toggle', gateway.key)">
                        {{ gateway.connected ? 'Disconnect' : 'Connect' }}
                    </PkButton>
                </div>
            </article>
        </div>
    </div>
</template>
