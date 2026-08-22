<script setup lang="ts">
/**
 * A card of links the operator reaches for every day.
 *
 * PRESENTATIONAL. Persistence, the catalog of routes, and whether the card
 * is hidden live on the page. This draws the wrapped icon+link row, the
 * pencil that enters edit mode, and the picker that adds from a catalog.
 */
import { computed, ref } from 'vue'
import ChartCard from './ChartCard.vue'
import PkModal from '../Overlay/PkModal.vue'
import PkButton from '../primitives/PkButton.vue'
import { iconPath } from '../primitives/icons'

export interface ShortcutItem {
    id: string
    label: string
    href: string
    icon: string
}

const props = withDefaults(
    defineProps<{
        items: ShortcutItem[]
        catalog: ShortcutItem[]
        hideable?: boolean
    }>(),
    { hideable: false },
)

const emit = defineEmits<{
    (e: 'update:items', value: ShortcutItem[]): void
    (e: 'hide'): void
}>()

const editing = ref(false)
const picking = ref(false)

const unused = computed(() =>
    props.catalog.filter((entry) => !props.items.some((item) => item.id === entry.id)),
)

function remove(id: string) {
    emit(
        'update:items',
        props.items.filter((item) => item.id !== id),
    )
}

function add(entry: ShortcutItem) {
    emit('update:items', [...props.items, entry])
    picking.value = false
}
</script>

<template>
    <ChartCard
        label="Shortcuts"
        icon="star"
        :hideable="hideable"
        :fit-body="true"
        :body-height="72"
        @hide="emit('hide')"
    >
        <template #actions>
            <button
                type="button"
                class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors"
                :aria-pressed="editing"
                :aria-label="editing ? 'Done editing shortcuts' : 'Edit shortcuts'"
                :title="editing ? 'Done' : 'Edit'"
                @click="editing = !editing"
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
                    <path :d="iconPath(editing ? 'check' : 'pencil')" />
                </svg>
            </button>
        </template>

        <div v-if="items.length === 0" class="flex flex-col items-start gap-2 py-1" data-slot="shortcuts-empty">
            <p class="text-muted-foreground text-sm font-normal">No shortcuts yet.</p>
            <PkButton size="sm" variant="outline" @click="picking = true">Add shortcut</PkButton>
        </div>

        <div v-else class="flex flex-wrap items-center gap-x-5 gap-y-2">
            <div v-for="item in items" :key="item.id" class="inline-flex items-center gap-1">
                <a
                    :href="item.href"
                    class="text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
                >
                    <svg
                        class="size-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(item.icon)" />
                    </svg>
                    {{ item.label }}
                </a>
                <button
                    v-if="editing"
                    type="button"
                    class="text-muted-foreground hover:text-destructive rounded p-0.5"
                    :aria-label="`Remove ${item.label}`"
                    @click="remove(item.id)"
                >
                    <svg
                        class="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('x')" />
                    </svg>
                </button>
            </div>

            <button
                v-if="editing"
                type="button"
                class="text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
                @click="picking = true"
            >
                <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path :d="iconPath('plus')" />
                </svg>
                Add
            </button>
        </div>
    </ChartCard>

    <PkModal
        :open="picking"
        title="Add a shortcut"
        description="Pick a screen this dashboard already knows."
        @close="picking = false"
    >
        <ul v-if="unused.length" class="flex flex-col gap-1">
            <li v-for="entry in unused" :key="entry.id">
                <button
                    type="button"
                    class="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm"
                    @click="add(entry)"
                >
                    <svg
                        class="text-muted-foreground size-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath(entry.icon)" />
                    </svg>
                    {{ entry.label }}
                </button>
            </li>
        </ul>
        <p v-else class="text-muted-foreground text-sm font-normal">Every catalog shortcut is already on the card.</p>

        <template #footer>
            <PkButton variant="outline" @click="picking = false">Cancel</PkButton>
        </template>
    </PkModal>
</template>
