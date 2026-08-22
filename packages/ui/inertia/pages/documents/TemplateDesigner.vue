<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component -
 * declared props bind as props, and the shared ones (panelNav, auth,
 * locale, and every deferred prop as it lands) arrive as plain
 * attributes with nowhere to go. Vue then warns once per prop, per
 * visit, which reads exactly like the page reloading in a loop.
 */
defineOptions({ inheritAttrs: false })

/**
 * Designing a document, with the document beside the form.
 *
 * WHY THIS SCREEN EXISTS AND A BRANDING SCREEN DOES NOT. A settings form for how
 * the panel looks already has its own preview: the panel is right there, and it
 * repaints. A document has nothing. It is printed, handed over and kept, and the
 * first chance anybody gets to see whether it was right is after a hundred came
 * out of a printer wrong. That gap is the only thing a live preview is for.
 *
 * THE PREVIEW IS RENDERED BY THE SERVER, not assembled here. It would have been
 * less code to interpolate the form values into a local template - and it would
 * have produced a preview that agrees with the printer only for as long as
 * nobody edits either half. The document comes back from the same
 * `DocumentRenderer` the print route uses, so "what I saw" and "what printed"
 * cannot become different questions.
 *
 * THE PREVIEW IS DEBOUNCED AND SEQUENCED. Debounced because a keystroke per
 * request would put a request per character on the wire; sequenced because they
 * can land out of order, and a preview showing the state from two keystroke ago
 * is worse than one that is briefly stale - it is wrong in a way that looks
 * settled.
 */
import { Head, router, useForm } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { PkButton as Button, PkDocument, RecordForm } from '@alxtexh-enterprise/panel'

interface DocumentPayload {
    blocks: { type: string; [key: string]: unknown }[]
    branding: { company: string; logoUrl?: string | null; accent: string; mono: boolean }
    version: number
    sample: boolean
    recordId: number | string | null
}

const props = defineProps<{
    prefix: string
    kind: { id: string; label: string; description: string; variables: Record<string, string> }
    schema: { columns?: number; nodes?: any[] }
    options: Record<string, { value: any; label: string }[]>
    values: Record<string, any>
    template: { exists: boolean; version: number }
    records: { id: number | string; label: string }[]
    document: DocumentPayload
}>()

const form = useForm<Record<string, any>>({ ...props.values })

/*
 * A COMPUTED, not `form.data()` called from the template.
 *
 * `data()` builds a NEW object every time it runs, so binding it directly makes
 * every render produce a fresh identity - which re-triggers the deep watcher
 * below and turns one keystroke into an endless preview loop.
 */
/*
 * `liveValues`, NOT `values` - that is the prop this derives from. Sharing the
 * name meant the template's `:model-value="values"` could resolve to the prop's
 * INITIAL data rather than the live form, so the preview would stop following
 * what was being typed.
 */
const liveValues = computed<Record<string, any>>(() => ({ ...form.data() }))

/** The record the preview is drawn against; empty means sample data. */
const record = ref<string>('')

const preview = ref<DocumentPayload>(props.document)
const previewing = ref(false)

const base = computed(
    () => `${props.prefix === '/' ? '' : props.prefix}/documents/${props.kind.id}`,
)

/*
 * SEQUENCING. Every request carries a ticket; a response whose ticket is not the
 * latest is dropped. Without this, a slow request for "Acm" can land after a
 * fast one for "Acme" and the preview settles on the older text - which reads as
 * the preview having missed a keystroke rather than as a race.
 */
let ticket = 0
let timer: ReturnType<typeof setTimeout> | undefined

async function refresh(): Promise<void> {
    const mine = ++ticket
    previewing.value = true

    try {
        const response = await fetch(`${base.value}/preview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN':
                    document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ??
                    '',
            },
            body: JSON.stringify({ settings: form.data(), record: record.value || null }),
        })

        if (!response.ok) {
            return
        }

        const next = (await response.json()) as DocumentPayload

        if (mine === ticket) {
            preview.value = next
        }
    } catch {
        /*
         * A FAILED PREVIEW LEAVES THE LAST GOOD ONE ON SCREEN, deliberately.
         * Nothing is saved and nothing is lost; blanking the panel on a dropped
         * request would make a flaky network look like a broken template.
         */
    } finally {
        if (mine === ticket) {
            previewing.value = false
        }
    }
}

watch(
    () => [liveValues.value, record.value],
    () => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(refresh, 250)
    },
    { deep: true },
)

onBeforeUnmount(() => {
    if (timer) {
        clearTimeout(timer)
    }
})

function save(): void {
    form.put(`${base.value}`, {
        preserveScroll: true,
        onSuccess: () => toast.success(`${props.kind.label} template saved.`),
    })
}

/**
 * Printing opens the SAVED template, which is why it warns about unsaved work.
 *
 * The print route deliberately refuses to take settings from a query string - a
 * printable document assembled from arbitrary input is one nobody can trace back
 * to a stored template. So "Preview PDF" on an edited form would silently print
 * the previous version, and saying so beats printing the wrong thing.
 */
function print(): void {
    if (form.isDirty) {
        toast.info('Save first - printing uses the saved template.')

        return
    }

    router.visit(`${base.value}/print${record.value ? `?record=${record.value}` : ''}`)
}

/** Insert a variable at the cursor of whichever text field has focus. */
function insert(token: string): void {
    const el = window.document.activeElement

    if (!(el instanceof HTMLInputElement) && !(el instanceof HTMLTextAreaElement)) {
        toast.info('Put the cursor in a text field first, then pick a variable.')

        return
    }

    const start = el.selectionStart ?? el.value.length
    const end = el.selectionEnd ?? start

    el.setRangeText(token, start, end, 'end')

    // `setRangeText` mutates the element without telling Vue, so the model would
    // keep the pre-insert value and the next keystroke would wipe the token.
    el.dispatchEvent(new Event('input', { bubbles: true }))
}
</script>

<template>
    <Head :title="`${kind.label} template`" />

    <div class="flex flex-col gap-4 p-4">
        <header class="flex flex-wrap items-start justify-between gap-3">
            <div>
                <h1 class="text-xl font-semibold tracking-tight">{{ kind.label }} template</h1>
                <p class="text-muted-foreground text-sm font-normal">
                    {{ kind.description }} The preview on the right updates as you type.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <span v-if="template.exists" class="text-muted-foreground text-xs font-normal">
                    Version {{ template.version }}
                </span>
                <span v-else class="text-muted-foreground text-xs font-normal">
                    Still on the shipped defaults
                </span>

                <Button variant="outline" size="sm" @click="print">Preview PDF</Button>
                <Button size="sm" :disabled="form.processing" @click="save">Save template</Button>
            </div>
        </header>

        <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <!-- ------------------------------------------------------ form -->
            <div class="flex flex-col gap-4">
                <!--
                    THE VARIABLES ARE WHERE THE WRITING HAPPENS, not in
                    documentation. A list of tokens on a help page is one nobody
                    opens while typing a footer.

                    They come from the KIND, so this cannot list a variable the
                    document does not have - which is the failure mode of writing
                    them into a help string by hand.
                -->
                <section
                    v-if="Object.keys(kind.variables).length"
                    class="bg-card flex flex-wrap items-center gap-1.5 rounded-lg border p-3"
                >
                    <span class="text-muted-foreground mr-1 text-xs">Variables:</span>
                    <button
                        v-for="(meaning, token) in kind.variables"
                        :key="token"
                        type="button"
                        class="border-input hover:bg-muted focus-visible:ring-ring rounded-md border px-2 py-0.5 font-mono text-xs focus-visible:ring-2 focus-visible:outline-none"
                        :title="meaning"
                        @click="insert(token)"
                    >
                        {{ token }}
                    </button>
                </section>

                <!--
                    `@change`, NOT `@update:model-value`.

                    `RecordForm` emits `change(key, value)` - one field at a time.
                    Binding `update:model-value` type-checks, builds, and silently
                    does nothing: the radio inside the control flips, the DOM says
                    `checked`, and the form never hears about it. Every symptom
                    points at the control rather than at the wiring.
                -->
                <RecordForm
                    :nodes="schema.nodes"
                    :columns="schema.columns ?? 1"
                    :model-value="liveValues"
                    :errors="form.errors as Record<string, string>"
                    :options="options"
                    :processing="form.processing"
                    @change="(key: string, value: any) => ((form as any)[key] = value)"
                />
            </div>

            <!-- --------------------------------------------------- preview -->
            <aside class="flex flex-col gap-2 lg:sticky lg:top-4 lg:self-start">
                <div class="flex items-center justify-between gap-2">
                    <!--
                        THE RECORD PICKER IS THE POINT OF THE WHOLE PREVIEW.
                        Sample data never has a 40-character company name, a zero
                        total or fourteen line items - which are exactly the
                        things that break a layout. Previewing against a real
                        record is the difference between a template that looks
                        right and one that IS right.
                    -->
                    <select
                        v-if="records.length"
                        v-model="record"
                        dusk="preview-record"
                        class="border-input bg-background h-8 rounded-md border px-2 text-xs"
                        aria-label="Preview against"
                    >
                        <option value="">Sample data</option>
                        <option v-for="r in records" :key="r.id" :value="String(r.id)">
                            {{ r.label }}
                        </option>
                    </select>
                    <span v-else class="text-muted-foreground text-xs font-normal">Sample data</span>

                    <span v-if="previewing" class="text-muted-foreground text-xs font-normal">Updating…</span>
                </div>

                <div class="overflow-hidden rounded-lg border shadow-sm">
                    <PkDocument :document="preview" />
                </div>

                <!--
                    SAID EVERY TIME SAMPLE DATA IS SHOWING. A preview that
                    silently displays invented figures is one somebody will quote
                    back at you - and on a document about money that is a real
                    conversation to have to have.
                -->
                <p v-if="preview.sample" class="text-muted-foreground text-xs font-normal">
                    Sample data shown for layout only — the real values come from each record when
                    printed.
                </p>
                <p v-else class="text-muted-foreground text-xs font-normal">
                    Real data from the selected record. Nothing here is saved to it.
                </p>
            </aside>
        </div>
    </div>
</template>
