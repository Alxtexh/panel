<script setup lang="ts">
/**
 * MapField control: click-to-set lat/lng on a Leaflet map.
 */
import { computed } from 'vue'
import PkMap from './PkMap.vue'

defineOptions({ inheritAttrs: false })

interface MapSchema {
    key: string
    defaultCenter?: { lat: number; lng: number }
    zoom?: number
    height?: number
    latKey?: string
    lngKey?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: MapSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const value = computed(() => {
    if (props.modelValue && typeof props.modelValue === 'object') {
        return props.modelValue as Record<string, number>
    }

    return null
})

const latKey = computed(() => props.field.latKey ?? 'lat')
const lngKey = computed(() => props.field.lngKey ?? 'lng')
</script>

<template>
    <div class="flex flex-col gap-2">
        <PkMap
            :model-value="value"
            :center="field.defaultCenter ?? null"
            :zoom="field.zoom ?? 12"
            :height="field.height ?? 280"
            :lat-key="latKey"
            :lng-key="lngKey"
            :disabled="disabled"
            pickable
            @update:model-value="(next) => emit('update:modelValue', next)"
        />
        <p class="text-muted-foreground text-xs">
            Click the map to set
            {{ latKey }} / {{ lngKey }}
            <template v-if="value">
                ({{ value[latKey]?.toFixed?.(5) ?? value[latKey] }},
                {{ value[lngKey]?.toFixed?.(5) ?? value[lngKey] }})
            </template>
        </p>
    </div>
</template>
