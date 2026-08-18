<script setup lang="ts">
/**
 * One stat tile, with optional poll of its deferred prop.
 *
 * Chart and table widgets already poll. Stats use the same CanPoll JSON and
 * pause while the tab is hidden.
 */
import { Deferred } from '@inertiajs/vue3'
import { PkBoundary, StatCard } from '@alxtexh-enterprise/panel'
import { useWidgetPoll } from '../../composables/useWidgetPoll'
import type { StatDefinition, StatValue } from './types'

const props = defineProps<{
    prefix: string
    widget: StatDefinition
    value?: StatValue
}>()

const dataKey = `${props.prefix}_stat_${props.widget.key}`

useWidgetPoll(() => [dataKey], () => props.widget.poll ?? null)
</script>

<template>
    <PkBoundary :label="widget.label" fill>
        <Deferred :data="`${prefix}_stat_${widget.key}`">
            <template #fallback>
                <StatCard :label="widget.label" :description="widget.description" loading />
            </template>

            <template #default>
                <StatCard
                    :label="widget.label"
                    :description="widget.description"
                    :value="value?.value"
                    :trend="value?.trend"
                    :sparkline="value?.sparkline"
                    :error="value?.error"
                />
            </template>
        </Deferred>
    </PkBoundary>
</template>
