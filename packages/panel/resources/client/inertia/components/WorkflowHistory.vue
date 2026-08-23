<script setup lang="ts">
/**
 * Dedicated timeline of `state_transition` audit events for one record.
 *
 * Shown only when the resource declared a workflow. The general audit drawer
 * still lists every event; this strip answers "how did status get here".
 */
import { computed } from 'vue'
import { useTranslations } from '../composables/useTranslations'

export interface WorkflowHistoryEntry {
    id: number | string
    actor: string | null
    at: string | null
    column: string | null
    from: string | null
    to: string | null
}

const props = defineProps<{
    entries: WorkflowHistoryEntry[]
    states?: Record<string, { label: string; color?: string }>
}>()

const { t, locale } = useTranslations()

const hasEntries = computed(() => props.entries.length > 0)

function labelFor(value: string | null): string {
    if (value === null || value === '') {
        return '—'
    }

    return props.states?.[value]?.label ?? value
}

function when(iso: string | null): string {
    if (!iso) {
        return ''
    }

    return new Date(iso).toLocaleString(locale.value, {
        dateStyle: 'medium',
        timeStyle: 'short',
    })
}
</script>

<template>
    <section class="bg-card rounded-lg border">
        <header class="flex items-center gap-2 border-b px-3 py-2.5">
            <span class="text-sm font-medium">{{ t('workflow.history_title') }}</span>
            <span class="text-muted-foreground ml-auto text-xs font-normal">
                {{ entries.length }}
            </span>
        </header>

        <div class="px-3 py-2.5">
            <p v-if="!hasEntries" class="text-muted-foreground text-sm font-normal">
                {{ t('workflow.history_empty') }}
            </p>

            <ol v-else class="flex flex-col gap-2">
                <li v-for="entry in entries" :key="entry.id" class="flex gap-2.5">
                    <div class="flex flex-col items-center">
                        <span
                            class="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
                            aria-hidden="true"
                        />
                        <span class="bg-border w-px grow" aria-hidden="true" />
                    </div>

                    <div class="min-w-0 flex-1 pb-1">
                        <p class="text-sm leading-snug">
                            <span class="font-medium">{{ entry.actor ?? t('workflow.system') }}</span>
                            {{ t('workflow.history_moved') }}
                            <span class="font-medium">{{ labelFor(entry.from) }}</span>
                            <span aria-hidden="true"> → </span>
                            <span class="font-medium">{{ labelFor(entry.to) }}</span>
                        </p>
                        <p class="text-muted-foreground text-xs font-normal leading-snug">
                            <time v-if="entry.at" :datetime="entry.at">{{ when(entry.at) }}</time>
                            <template v-if="entry.column"> · {{ entry.column }}</template>
                        </p>
                    </div>
                </li>
            </ol>
        </div>
    </section>
</template>
