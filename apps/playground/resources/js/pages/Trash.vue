<script setup lang="ts">
/**
 * Everything that was deleted, and how long is left to change your mind.
 *
 * IT EXISTS BECAUSE A DELETE HAD NOWHERE TO GO. Soft deletes, restore and
 * force-delete were all implemented and all reachable only through a `Deleted`
 * option on one table's filter panel - so a removed subscriber sat inside the
 * live list under a control nobody opens, and the endpoint that could bring it
 * back had no button anywhere. The mechanism worked; there was no way to use it.
 *
 * DELETED RECORDS ARE NOT IN THE LISTS ANY MORE, which is the other half of the
 * change. A table that can include deleted rows is a table where every count,
 * every filter and every export has to be read twice - "43 live, or 43 including
 * the ones somebody removed?" - and the answer depended on a filter most people
 * never touch.
 *
 * THE DEADLINE IS ON EVERY ROW. A bin that empties on a schedule nobody
 * published is a bin people learn not to trust; "3 days left" is what makes it
 * something you can plan around, and it is computed from the same retention the
 * pruner uses rather than from a sentence in a heading.
 *
 * DELETE FOREVER ASKS FIRST, AND IN THE PAGE. `window.confirm` is suppressed in
 * embedded browsers - it returns false without showing anything - so the one
 * irreversible action in the panel would silently do nothing for some people and
 * everything for others. The dialog is a component.
 */
import { Head, router } from '@inertiajs/vue3'
import { Button } from '@/components/ui/button'
import { PkModal } from '@panelkit/ui'
import { RotateCcw, Trash2, TriangleAlert } from '@lucide/vue'
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'

interface TrashedRecord {
    id: number | string
    title: string
    deletedAt: string
    purgesAt: string
    canRestore: boolean
    canForceDelete: boolean
}

interface TrashGroup {
    key: string
    label: string
    icon: string
    total: number
    records: TrashedRecord[]
}

const props = defineProps<{
    groups: TrashGroup[]
    prefix: string
    retentionDays: number
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Trash', href: '/trash' }] } })

const confirming = ref<{ group: TrashGroup; record: TrashedRecord } | null>(null)

const total = computed(() => props.groups.reduce((sum, g) => sum + g.total, 0))

/** `/reseller` + `/clients` + `/12`, never assembled from the resource alone. */
function path(group: TrashGroup, record: TrashedRecord, suffix: string): string {
    const prefix = props.prefix === '/' ? '' : props.prefix

    return `${prefix}/${group.key}/${record.id}/${suffix}`
}

function restore(group: TrashGroup, record: TrashedRecord) {
    router.post(
        path(group, record, 'restore'),
        {},
        {
            preserveScroll: true,
            onSuccess: () => toast.success(`${record.title} restored`),
            onError: () => toast.error('That could not be restored.'),
        },
    )
}

function destroyForever() {
    const pending = confirming.value

    if (!pending) return

    router.delete(path(pending.group, pending.record, 'force'), {
        preserveScroll: true,
        onSuccess: () => toast.success(`${pending.record.title} deleted permanently`),
        onError: () => toast.error('That could not be deleted.'),
        onFinish: () => (confirming.value = null),
    })
}

/**
 * "3 days left", not a timestamp.
 *
 * The question somebody has when looking at this screen is whether they still
 * have time, and a date makes them do the arithmetic. The exact moment is on the
 * title attribute for anyone who wants it.
 */
function remaining(purgesAt: string): string {
    const ms = new Date(purgesAt).getTime() - Date.now()

    if (ms <= 0) return 'due to be removed'

    const days = Math.floor(ms / 86_400_000)

    if (days >= 1) return `${days} day${days === 1 ? '' : 's'} left`

    const hours = Math.max(1, Math.floor(ms / 3_600_000))

    return `${hours} hour${hours === 1 ? '' : 's'} left`
}

function deletedOn(value: string): string {
    return new Date(value.replace(' ', 'T')).toLocaleString()
}
</script>

<template>
    <Head title="Trash" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-1">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">Trash</h1>
            <p class="text-muted-foreground text-sm">
                Deleted records are kept for {{ retentionDays }} days and then removed permanently.
                Until then they can be restored from here.
            </p>
        </header>

        <!-- An empty bin is the normal state, and should read as reassurance
             rather than as a screen that failed to load. -->
        <div
            v-if="total === 0"
            class="bg-card flex flex-col items-center gap-2 rounded-lg border p-10 text-center"
        >
            <Trash2 class="text-muted-foreground size-6" />
            <p class="text-sm font-medium">The trash is empty</p>
            <p class="text-muted-foreground text-sm">
                Anything you delete will wait here for {{ retentionDays }} days.
            </p>
        </div>

        <section v-for="group in groups" :key="group.key" class="flex flex-col gap-2">
            <h2 class="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                {{ group.label }}
                <span class="text-muted-foreground/70 normal-case">({{ group.total }})</span>
            </h2>

            <div class="bg-card divide-y overflow-hidden rounded-lg border">
                <div
                    v-for="record in group.records"
                    :key="`${group.key}-${record.id}`"
                    class="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
                >
                    <div class="min-w-0">
                        <p class="truncate text-sm font-medium">{{ record.title }}</p>
                        <p class="text-muted-foreground text-xs" :title="record.purgesAt">
                            Deleted {{ deletedOn(record.deletedAt) }} · {{ remaining(record.purgesAt) }}
                        </p>
                    </div>

                    <div class="flex shrink-0 items-center gap-2">
                        <Button
                            v-if="record.canRestore"
                            type="button"
                            variant="outline"
                            size="sm"
                            @click="restore(group, record)"
                        >
                            <RotateCcw class="size-3.5" />
                            Restore
                        </Button>

                        <Button
                            v-if="record.canForceDelete"
                            type="button"
                            variant="ghost"
                            size="sm"
                            class="text-destructive hover:text-destructive"
                            @click="confirming = { group, record }"
                        >
                            <Trash2 class="size-3.5" />
                            Delete forever
                        </Button>
                    </div>
                </div>
            </div>

            <!-- The list is a page of the count, so say so rather than letting
                 somebody believe the bin holds twenty-five things. -->
            <p v-if="group.total > group.records.length" class="text-muted-foreground text-xs">
                Showing the {{ group.records.length }} most recently deleted of {{ group.total }}.
            </p>
        </section>
    </div>

    <PkModal
        :open="confirming !== null"
        title="Delete permanently?"
        @close="confirming = null"
    >
        <div class="flex flex-col gap-3">
            <p class="flex items-start gap-2 text-sm">
                <TriangleAlert class="text-destructive mt-0.5 size-4 shrink-0" />
                <span>
                    <strong>{{ confirming?.record.title }}</strong> will be removed for good. This
                    cannot be undone, and nothing else in the panel will be able to bring it back.
                </span>
            </p>

            <div class="flex justify-end gap-2">
                <Button type="button" variant="outline" size="sm" @click="confirming = null">
                    Cancel
                </Button>
                <Button type="button" variant="destructive" size="sm" @click="destroyForever">
                    Delete forever
                </Button>
            </div>
        </div>
    </PkModal>
</template>
