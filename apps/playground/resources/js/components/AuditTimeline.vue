<script setup lang="ts">
/**
 * What has happened to this record, newest first.
 *
 * FETCHED ON DEMAND, not shipped with the page. History is the least-read part
 * of a detail page and potentially the largest - a subscriber edited daily for a
 * year has hundreds of entries - so loading it with every page view would make
 * the common case pay for the rare one.
 *
 * IT SHOWS BEFORE AND AFTER, because "updated" on its own is not an audit trail.
 * The question actually asked is "what did it say before", usually by somebody
 * trying to undo something, and an entry that cannot answer it is a timestamp
 * with a name attached.
 *
 * REDACTED VALUES ARRIVE ALREADY REDACTED. The server never sends the real value
 * of a password or a token - see `AuditRecorder`. This component renders what it
 * is given and has no idea which fields were sensitive, which is the correct
 * arrangement: a client that could un-redact would mean the value had travelled.
 */
import { Button } from '@/components/ui/button'
import { History } from '@lucide/vue'
import { useTranslations } from '@/composables/useTranslations'
import { ref } from 'vue'

const props = defineProps<{ resource: string; recordId: string | number }>()

const { t, locale } = useTranslations()

interface Change {
    field: string
    from: string
    to: string
}

interface Entry {
    id: number
    event: string
    actor: string
    at: string
    ip: string | null
    changes: Change[]
}

const entries = ref<Entry[]>([])
const page = ref(0)
const hasMore = ref(true)
const loading = ref(false)
const failed = ref(false)
const opened = ref(false)

async function load(): Promise<void> {
    if (loading.value || !hasMore.value) {
        return
    }

    loading.value = true
    failed.value = false

    try {
        const next = page.value + 1
        const response = await fetch(`/${props.resource}/${props.recordId}/audit?page=${next}`, {
            headers: { Accept: 'application/json' },
        })

        if (!response.ok) {
            throw new Error(String(response.status))
        }

        const data = await response.json()

        entries.value.push(...data.entries)
        hasMore.value = data.hasMore
        page.value = next
    } catch {
        /*
         * A FAILURE IS SHOWN, not swallowed into an empty list. "No history" and
         * "the history could not be loaded" look identical and mean opposite
         * things - one says nothing happened, the other hides that something
         * did.
         */
        failed.value = true
    } finally {
        loading.value = false
    }
}

function open(): void {
    opened.value = true

    if (entries.value.length === 0) {
        void load()
    }
}

/**
 * TRANSLATED, and looked up rather than switched on, so an event the server
 * grows later renders its own name instead of nothing.
 */
function eventLabel(event: string): string {
    const key = `history.${event}`
    const label = t(key)

    // `t` returns the key when there is no translation - see useTranslations.
    return label === key ? event : label
}

/**
 * FORMATTED IN THE PANEL'S LOCALE, not the browser's.
 *
 * `undefined` here means "whatever the browser is set to", which is frequently
 * the language of the country the laptop was bought in - so an Arabic panel
 * would show English dates, and two colleagues looking at the same record would
 * read different ones.
 */
function when(iso: string): string {
    return new Date(iso).toLocaleString(locale.value, {
        dateStyle: 'medium',
        timeStyle: 'short',
    })
}
</script>

<template>
    <section class="bg-card rounded-lg border">
        <button
            type="button"
            class="hover:bg-accent/50 flex w-full items-center gap-2 p-4 text-left transition-colors"
            :aria-expanded="opened"
            aria-controls="audit-timeline"
            @click="opened ? (opened = false) : open()"
        >
            <History class="text-muted-foreground size-4 shrink-0" />
            <span class="text-sm font-medium">{{ t('history.title') }}</span>
            <span class="text-muted-foreground ml-auto text-xs">
                {{ opened ? 'Hide' : 'Show' }}
            </span>
        </button>

        <div v-if="opened" id="audit-timeline" class="border-t p-4">
            <p v-if="failed" class="text-destructive text-sm">
                {{ t('history.failed') }}
                <button type="button" class="underline underline-offset-2" @click="load">
                    {{ t('actions.retry') }}
                </button>
            </p>

            <p v-else-if="loading && entries.length === 0" class="text-muted-foreground text-sm">
                Loading…
            </p>

            <p v-else-if="entries.length === 0" class="text-muted-foreground text-sm">
                {{ t('history.empty') }}
            </p>

            <!--
                A LIST, marked up as one. A timeline is a sequence of events and
                a screen reader should be told how many there are and where it is
                in them - a stack of divs says none of that.
            -->
            <ol v-else class="flex flex-col gap-4">
                <li v-for="entry in entries" :key="entry.id" class="flex gap-3">
                    <!-- The rail, drawn once per row rather than as a border on
                         the list, so the last entry's line stops at its dot. -->
                    <div class="flex flex-col items-center">
                        <span class="bg-primary mt-1.5 size-2 shrink-0 rounded-full" aria-hidden="true" />
                        <span class="bg-border w-px grow" aria-hidden="true" />
                    </div>

                    <div class="min-w-0 flex-1 pb-1">
                        <p class="text-sm">
                            <span class="font-medium">{{ entry.actor }}</span>
                            {{ eventLabel(entry.event) }}
                        </p>

                        <p class="text-muted-foreground text-xs">
                            <time :datetime="entry.at">{{ when(entry.at) }}</time>
                            <template v-if="entry.ip"> · from {{ entry.ip }}</template>
                        </p>

                        <dl v-if="entry.changes.length" class="mt-2 flex flex-col gap-1">
                            <div
                                v-for="change in entry.changes"
                                :key="change.field"
                                class="text-xs"
                            >
                                <dt class="text-muted-foreground inline capitalize">
                                    {{ change.field }}:
                                </dt>
                                <dd class="inline">
                                    <span class="text-muted-foreground line-through">{{ change.from }}</span>
                                    <span aria-hidden="true"> → </span>
                                    <span class="font-medium">{{ change.to }}</span>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </li>
            </ol>

            <div v-if="hasMore && entries.length > 0" class="mt-4">
                <Button variant="ghost" size="sm" :disabled="loading" @click="load">
                    {{ loading ? '…' : t('history.earlier') }}
                </Button>
            </div>
        </div>
    </section>
</template>
