<script setup lang="ts">
/**
 * Same-page additions for Help, FAQ, What's new and About.
 *
 * Hidden unless the server sent `support.canEdit`. Superadmin clicks Add;
 * packaged defaults stay in code and never appear in this form. Database rows
 * (operator-added) can be edited or removed here. The built-in copy cannot.
 */
import { router, useForm } from '@inertiajs/vue3'
import { Plus, Trash2, X } from '@lucide/vue'
import { ref, watch } from 'vue'

export type SupportKind = 'article' | 'faq' | 'release' | 'about'

export type SupportEntry = {
    id?: number | null
    category: string
    title: string
    body: string
    meta: Record<string, unknown>
    sort: number
    published: boolean
}

export type SupportProps = {
    canEdit: boolean
    kind: SupportKind
    saveUrl?: string | null
    githubUrl?: string | null
    githubRepo?: string | null
    entries: SupportEntry[]
}

const props = defineProps<{
    support?: SupportProps | null
}>()

const editing = ref(false)

function blank(kind: SupportKind): SupportEntry {
    return {
        id: null,
        category: kind === 'article' ? 'panel' : '',
        title: '',
        body: '',
        meta:
            kind === 'release'
                ? { added: [], changed: [], fixed: [] }
                : kind === 'about'
                  ? { links: [] }
                  : { keywords: '' },
        sort: 0,
        published: true,
    }
}

function cloneEntries(_kind: SupportKind, entries: SupportEntry[]): SupportEntry[] {
    return entries.map((entry, index) => ({
        id: entry.id ?? null,
        category: entry.category ?? '',
        title: entry.title ?? '',
        body: entry.body ?? '',
        meta: { ...(entry.meta ?? {}) },
        sort: entry.sort ?? index,
        published: entry.published !== false,
    }))
}

const form = useForm<{ kind: SupportKind; entries: SupportEntry[] }>({
    kind: props.support?.kind ?? 'faq',
    entries: cloneEntries(props.support?.kind ?? 'faq', props.support?.entries ?? []),
})

watch(
    () => props.support,
    (next) => {
        if (! next) {
            return
        }

        form.kind = next.kind
        form.entries = cloneEntries(next.kind, next.entries ?? [])
        form.clearErrors()
    },
)

function startAdd() {
    if (! props.support) {
        return
    }

    form.kind = props.support.kind
    form.entries = cloneEntries(props.support.kind, props.support.entries ?? [])
    form.entries.push(blank(form.kind))
    editing.value = true
}

const addLabel: Record<SupportKind, string> = {
    article: 'Add a help article',
    faq: 'Add a question',
    release: 'Add a release note',
    about: 'Add extra details',
}

function cancel() {
    editing.value = false
    form.reset()
    form.entries = cloneEntries(props.support?.kind ?? 'faq', props.support?.entries ?? [])
}

function addEntry() {
    form.entries.push(blank(form.kind))
}

function removeEntry(index: number) {
    form.entries.splice(index, 1)
}

function metaLines(entry: SupportEntry, key: string): string {
    const value = entry.meta[key]

    return Array.isArray(value) ? value.join('\n') : String(value ?? '')
}

function setMetaLines(entry: SupportEntry, key: string, raw: string) {
    entry.meta[key] = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
}

function links(entry: SupportEntry): { label: string; href: string }[] {
    const value = entry.meta.links

    return Array.isArray(value) ? (value as { label: string; href: string }[]) : []
}

function addLink(entry: SupportEntry) {
    entry.meta.links = [...links(entry), { label: '', href: '' }]
}

function removeLink(entry: SupportEntry, index: number) {
    entry.meta.links = links(entry).filter((_, i) => i !== index)
}

function save() {
    if (! props.support?.saveUrl) {
        return
    }

    form.put(props.support.saveUrl, {
        preserveScroll: true,
        onSuccess: () => {
            editing.value = false
        },
    })
}

function syncGithub() {
    if (! props.support?.githubUrl) {
        return
    }

    router.post(props.support.githubUrl, {}, { preserveScroll: true })
}

const fieldClass =
    'border-input bg-background focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none'
</script>

<template>
    <div class="flex flex-col gap-6">
        <div
            v-if="support?.canEdit"
            class="flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3"
        >
            <div class="flex flex-col gap-0.5">
                <p class="text-sm font-medium">
                    {{ addLabel[support.kind] }}
                </p>
                <p class="text-muted-foreground text-sm">
                    Built-in copy stays as shipped. You can add items of your own, and remove those additions later.
                </p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
            <template v-if="!editing">
                <button
                    v-if="support.githubUrl"
                    type="button"
                    class="rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                    @click="syncGithub"
                >
                    Sync from GitHub{{ support.githubRepo ? ` (${support.githubRepo})` : '' }}
                </button>
                <button
                    type="button"
                    class="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                    @click="startAdd"
                >
                    <Plus class="size-4" />
                    Add
                </button>
            </template>
            <template v-else>
                <button
                    type="button"
                    class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                    @click="cancel"
                >
                    <X class="size-3.5" />
                    Cancel
                </button>
                <button
                    type="button"
                    class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    :disabled="form.processing"
                    @click="save"
                >
                    Save
                </button>
            </template>
            </div>
        </div>

        <p v-if="form.hasErrors" class="text-destructive text-sm">
            {{ form.errors.kind || form.errors.entries || 'Check the fields below.' }}
        </p>

        <form v-if="editing" class="flex flex-col gap-4" @submit.prevent="save">
            <div
                v-for="(entry, index) in form.entries"
                :key="entry.id ?? `new-${index}`"
                class="flex flex-col gap-3 rounded-lg border bg-card p-4"
            >
                <div class="flex items-center justify-between gap-2">
                    <p class="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {{
                            form.kind === 'faq'
                                ? 'Question'
                                : form.kind === 'article'
                                  ? 'Article'
                                  : form.kind === 'release'
                                    ? 'Release'
                                    : 'Extra'
                        }}
                    </p>
                    <button
                        type="button"
                        class="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive"
                        @click="removeEntry(index)"
                    >
                        <Trash2 class="size-3.5" />
                        Remove
                    </button>
                </div>

                <label v-if="form.kind === 'faq'" class="flex flex-col gap-1 text-sm">
                    Group
                    <input v-model="entry.category" :class="fieldClass" placeholder="Using the panel" />
                </label>
                <label v-if="form.kind === 'article'" class="flex flex-col gap-1 text-sm">
                    Category key
                    <input v-model="entry.category" :class="fieldClass" placeholder="panel" />
                </label>
                <label v-if="form.kind === 'release'" class="flex flex-col gap-1 text-sm">
                    Date
                    <input v-model="entry.category" :class="fieldClass" placeholder="15 August 2026" />
                </label>

                <label class="flex flex-col gap-1 text-sm">
                    {{
                        form.kind === 'faq'
                            ? 'Question'
                            : form.kind === 'release'
                              ? 'Version'
                              : 'Title'
                    }}
                    <input v-model="entry.title" required :class="fieldClass" />
                </label>

                <label class="flex flex-col gap-1 text-sm">
                    {{
                        form.kind === 'faq'
                            ? 'Answer'
                            : form.kind === 'release'
                              ? 'Highlight'
                              : 'Body'
                    }}
                    <textarea v-model="entry.body" rows="4" :class="fieldClass" />
                </label>

                <label v-if="form.kind === 'article'" class="flex flex-col gap-1 text-sm">
                    Keywords
                    <input
                        :class="fieldClass"
                        :value="String(entry.meta.keywords ?? '')"
                        @input="entry.meta.keywords = ($event.target as HTMLInputElement).value"
                    />
                </label>

                <template v-if="form.kind === 'release'">
                    <label v-for="key in ['added', 'changed', 'fixed']" :key="key" class="flex flex-col gap-1 text-sm">
                        {{ key.charAt(0).toUpperCase() + key.slice(1) }} (one per line)
                        <textarea
                            rows="3"
                            :class="fieldClass"
                            :value="metaLines(entry, key)"
                            @input="setMetaLines(entry, key, ($event.target as HTMLTextAreaElement).value)"
                        />
                    </label>
                </template>

                <template v-if="form.kind === 'about'">
                    <div class="flex flex-col gap-2">
                        <div class="flex items-center justify-between">
                            <p class="text-sm">Links</p>
                            <button type="button" class="inline-flex items-center gap-1 text-sm" @click="addLink(entry)">
                                <Plus class="size-3.5" />
                                Add link
                            </button>
                        </div>
                        <div v-for="(link, li) in links(entry)" :key="li" class="grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                            <input
                                :class="fieldClass"
                                placeholder="Label"
                                :value="link.label"
                                @input="links(entry)[li].label = ($event.target as HTMLInputElement).value"
                            />
                            <input
                                :class="fieldClass"
                                placeholder="https://"
                                :value="link.href"
                                @input="links(entry)[li].href = ($event.target as HTMLInputElement).value"
                            />
                            <button type="button" class="text-sm text-muted-foreground" @click="removeLink(entry, li)">
                                Remove
                            </button>
                        </div>
                    </div>
                </template>
            </div>

            <button
                type="button"
                class="inline-flex items-center justify-center gap-1.5 rounded-md border border-dashed px-3 py-2 text-sm font-medium hover:bg-accent"
                @click="addEntry"
            >
                <Plus class="size-3.5" />
                Add another
            </button>
        </form>

        <slot />
    </div>
</template>
