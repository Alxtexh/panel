<script setup lang="ts">
/**
 * The dashboard filter panel.
 *
 * IT DOES NOT FETCH and it does not own the applied state - it emits `apply`
 * with a filter object and the page turns that into a visit. The applied
 * filters live in the URL, which is what makes a filtered dashboard
 * shareable, bookmarkable and survivable across a reload.
 *
 * THE DRAFT IS LOCAL UNTIL APPLIED. Editing three fields must not cost three
 * round trips, and a half-set range ("from" chosen, "to" not yet) is not a
 * question worth asking the server. This is the same staged pattern the table
 * filters use.
 *
 * PRESETS WRITE INTO THE DATE FIELDS rather than being a separate mode. A
 * preset that stores "last 7 days" as a token would silently mean something
 * different tomorrow, and a shared link would show the recipient a different
 * window than the sender saw.
 */
import { PkMultiSelect, PkSlideover } from '@panelkit/ui';
import { computed, ref, watch } from 'vue';

interface Option {
    value: number;
    label: string;
}

const props = defineProps<{
    open: boolean;
    /** Currently applied, from the URL. */
    from: string | null;
    to: string | null;
    routers: number[];
    routerOptions: Option[];
}>();

const emit = defineEmits<{
    (e: 'close'): void;
    (
        e: 'apply',
        filters: { from: string | null; to: string | null; routers: number[] },
    ): void;
    (e: 'reset'): void;
}>();

const draft = ref({ from: '', to: '', routers: [] as number[] });

// Re-seed whenever the panel opens, so a cancelled edit does not linger.
watch(
    () => props.open,
    (isOpen) => {
        if (!isOpen) {
            return;
        }

        draft.value = {
            from: props.from ?? '',
            to: props.to ?? '',
            routers: [...props.routers],
        };
    },
    { immediate: true },
);

function iso(date: Date): string {
    // Local date parts, not toISOString(): that converts to UTC first, so
    // anywhere east of Greenwich "today" becomes yesterday after midnight UTC.
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function preset(days: number) {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - (days - 1));

    draft.value.from = iso(start);
    draft.value.to = iso(end);
}

function thisMonth() {
    const now = new Date();

    draft.value.from = iso(new Date(now.getFullYear(), now.getMonth(), 1));
    draft.value.to = iso(now);
}

const presets = [
    { label: 'Last 7 days', apply: () => preset(7) },
    { label: 'Last 30 days', apply: () => preset(30) },
    { label: 'Last 90 days', apply: () => preset(90) },
    { label: 'This month', apply: thisMonth },
];

/** A range with only an end is meaningless - "until then, from when?" */
const invalid = computed(
    () => draft.value.to !== '' && draft.value.from === '',
);

const changeCount = computed(
    () => (draft.value.from ? 1 : 0) + (draft.value.routers.length > 0 ? 1 : 0),
);

function apply() {
    if (invalid.value) {
        return;
    }

    emit('apply', {
        from: draft.value.from || null,
        to: draft.value.to || null,
        routers: draft.value.routers,
    });
}
</script>

<template>
    <PkSlideover
        :open="open"
        title="Filter dashboard"
        description="Applies to every widget on this page"
        width="w-[22rem]"
        @close="emit('close')"
    >
        <div class="flex flex-col gap-6 p-4">
            <section class="flex flex-col gap-2">
                <h3 class="text-sm font-semibold">Date range</h3>

                <div class="flex flex-wrap gap-1.5">
                    <button
                        v-for="p in presets"
                        :key="p.label"
                        type="button"
                        class="rounded-full border bg-background px-2.5 py-1 text-xs font-medium transition-colors hover:bg-accent"
                        @click="p.apply()"
                    >
                        {{ p.label }}
                    </button>
                </div>

                <div class="mt-1 grid grid-cols-2 gap-2">
                    <label class="flex flex-col gap-1">
                        <span class="text-xs text-muted-foreground">From</span>
                        <input
                            v-model="draft.from"
                            type="date"
                            class="rounded-md border bg-background px-2 py-1.5 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    </label>
                    <label class="flex flex-col gap-1">
                        <span class="text-xs text-muted-foreground">To</span>
                        <input
                            v-model="draft.to"
                            type="date"
                            class="rounded-md border bg-background px-2 py-1.5 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    </label>
                </div>

                <p v-if="invalid" class="text-xs text-destructive">
                    Choose a start date as well.
                </p>
                <p
                    v-else-if="draft.from && !draft.to"
                    class="text-xs text-muted-foreground"
                >
                    Leaving “To” empty means everything since that date.
                </p>
                <p v-else-if="draft.from" class="text-xs text-muted-foreground">
                    While a range is set, the per-chart period buttons are
                    hidden - every widget covers the same window.
                </p>
            </section>

            <section v-if="routerOptions.length" class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                    <h3 class="text-sm font-semibold">Routers</h3>
                    <button
                        v-if="draft.routers.length"
                        type="button"
                        class="text-xs text-muted-foreground hover:underline"
                        @click="draft.routers = []"
                    >
                        Clear {{ draft.routers.length }}
                    </button>
                </div>

                <!-- The same token field the table filters use, so "choose
                     several of these" looks identical everywhere in the panel. -->
                <PkMultiSelect
                    v-model="draft.routers"
                    :options="routerOptions"
                    placeholder="All routers"
                    search-placeholder="Start typing to search..."
                />
            </section>
        </div>

        <template #footer>
            <button
                type="button"
                class="mr-auto text-xs text-muted-foreground hover:underline"
                @click="emit('reset')"
            >
                Reset all
            </button>
            <button
                type="button"
                class="rounded-md border bg-background px-3 py-1.5 text-sm hover:bg-accent"
                @click="emit('close')"
            >
                Cancel
            </button>
            <button
                type="button"
                class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                :disabled="invalid"
                @click="apply"
            >
                Apply<span v-if="changeCount"> ({{ changeCount }})</span>
            </button>
        </template>
    </PkSlideover>
</template>
