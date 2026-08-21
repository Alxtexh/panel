<script setup lang="ts">
/**
 * Leaflet map control for MapField / MapWidget.
 *
 * DYNAMIC IMPORT on mount so forms and dashboards without a map never load
 * Leaflet. OSM tiles by default; host apps can theme later.
 */
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

defineOptions({ inheritAttrs: false })

export type MapMarker = {
    lat: number
    lng: number
    label?: string
    popup?: string
}

const props = withDefaults(
    defineProps<{
        modelValue?: { [key: string]: number } | null
        markers?: MapMarker[]
        center?: { lat: number; lng: number } | null
        zoom?: number
        height?: number
        latKey?: string
        lngKey?: string
        disabled?: boolean
        pickable?: boolean
    }>(),
    {
        modelValue: null,
        markers: () => [],
        center: null,
        zoom: 12,
        height: 280,
        latKey: 'lat',
        lngKey: 'lng',
        disabled: false,
        pickable: true,
    },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: Record<string, number> | null): void }>()

const root = ref<HTMLElement | null>(null)
let map: import('leaflet').Map | null = null
let pickMarker: import('leaflet').CircleMarker | null = null
let Lref: typeof import('leaflet') | null = null

const resolvedCenter = computed(() => {
    const lat = props.modelValue?.[props.latKey]
    const lng = props.modelValue?.[props.lngKey]

    if (typeof lat === 'number' && typeof lng === 'number') {
        return { lat, lng }
    }

    if (props.center) {
        return props.center
    }

    if (props.markers.length > 0) {
        return { lat: props.markers[0].lat, lng: props.markers[0].lng }
    }

    return { lat: 0, lng: 0 }
})

async function boot(): Promise<void> {
    if (!root.value || map) {
        return
    }

    const leaflet = await import('leaflet')
    // CSS side-effect; Vite resolves the asset, types do not.
    // @ts-expect-error leaflet CSS has no module declaration
    await import('leaflet/dist/leaflet.css')
    Lref = leaflet

    // Vite/bundlers sometimes miss default marker icons; use CDN-free circle markers.
    map = leaflet.map(root.value).setView([resolvedCenter.value.lat, resolvedCenter.value.lng], props.zoom)

    leaflet
        .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap',
            maxZoom: 19,
        })
        .addTo(map)

    syncMarkers()
    syncPick()

    if (props.pickable && !props.disabled) {
        map.on('click', (event: import('leaflet').LeafletMouseEvent) => {
            emit('update:modelValue', {
                [props.latKey]: Number(event.latlng.lat.toFixed(6)),
                [props.lngKey]: Number(event.latlng.lng.toFixed(6)),
            })
        })
    }
}

function syncMarkers(): void {
    if (!map || !Lref) {
        return
    }

    for (const marker of props.markers) {
        const pin = Lref.circleMarker([marker.lat, marker.lng], {
            radius: 7,
            color: 'hsl(var(--primary))',
            fillColor: 'hsl(var(--primary))',
            fillOpacity: 0.85,
        }).addTo(map)

        if (marker.label || marker.popup) {
            pin.bindPopup(`<strong>${marker.label ?? ''}</strong>${marker.popup ? `<br>${marker.popup}` : ''}`)
        }
    }
}

function syncPick(): void {
    if (!map || !Lref) {
        return
    }

    const lat = props.modelValue?.[props.latKey]
    const lng = props.modelValue?.[props.lngKey]

    if (typeof lat !== 'number' || typeof lng !== 'number') {
        if (pickMarker) {
            map.removeLayer(pickMarker)
            pickMarker = null
        }

        return
    }

    if (!pickMarker) {
        pickMarker = Lref.circleMarker([lat, lng], {
            radius: 8,
            color: '#0f172a',
            fillColor: '#38bdf8',
            fillOpacity: 1,
            weight: 2,
        }).addTo(map)
    } else {
        pickMarker.setLatLng([lat, lng])
    }

    map.setView([lat, lng], map.getZoom())
}

onMounted(() => {
    void boot()
})

onBeforeUnmount(() => {
    map?.remove()
    map = null
    pickMarker = null
})

watch(
    () => props.modelValue,
    () => syncPick(),
    { deep: true },
)
</script>

<template>
    <div
        ref="root"
        class="border-input bg-muted/20 w-full overflow-hidden rounded-md border"
        :style="{ height: `${height}px` }"
        :aria-disabled="disabled || undefined"
    />
</template>
