<script setup lang="ts">
/**
 * Editable dashboard shortcuts with optional localStorage.
 *
 * THE LIST IS PER BROWSER unless the page v-models items. A real panel can
 * persist per user; this is enough to prove add, edit and remove.
 */
import { computed, inject, onMounted, ref, watch } from 'vue'
import { DASHBOARD_HIDE_KEY } from '../../composables/dashboardHide'
import ShortcutsWidget from './ShortcutsWidget.vue'
import type { ShortcutItem } from './ShortcutsWidget.vue'

const props = withDefaults(
    defineProps<{
        catalog: ShortcutItem[]
        defaults?: string[]
        storageKey?: string | null
    }>(),
    {
        defaults: () => [],
        storageKey: 'panel.dashboard.shortcuts',
    },
)

const hide = inject(DASHBOARD_HIDE_KEY, null)
const items = ref<ShortcutItem[]>(
    props.catalog.filter((entry) => props.defaults.includes(entry.id)),
)
const hydrated = ref(false)

onMounted(() => {
    hide?.register('shortcuts', 'Shortcuts')

    if (!props.storageKey) {
        hydrated.value = true

        return
    }

    try {
        const raw = localStorage.getItem(props.storageKey)

        if (raw) {
            const parsed = JSON.parse(raw) as ShortcutItem[]

            if (Array.isArray(parsed)) {
                items.value = parsed.filter(
                    (item) =>
                        typeof item?.id === 'string' &&
                        typeof item.label === 'string' &&
                        typeof item.href === 'string',
                )
            }
        }
    } catch {
        // Corrupt storage must not blank the dashboard.
    }

    hydrated.value = true
})

watch(
    items,
    (value) => {
        if (!hydrated.value || !props.storageKey) {
            return
        }

        try {
            localStorage.setItem(props.storageKey, JSON.stringify(value))
        } catch {
            // Private mode / quota.
        }
    },
    { deep: true },
)

const hidden = computed(() => hide?.hidden.value.has('shortcuts') ?? false)
</script>

<template>
    <div v-if="!hidden" class="w-full" data-slot="dashboard-shortcuts">
        <ShortcutsWidget
            :items="items"
            :catalog="catalog"
            hideable
            @update:items="items = $event"
            @hide="hide?.hide('shortcuts', 'Shortcuts')"
        />
    </div>
</template>
