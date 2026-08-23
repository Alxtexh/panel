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
 * Create and edit, as a REAL PAGE for every resource.
 *
 * WHY A PAGE AND NOT A MODAL. This is Filament's convention and the reasons are
 * practical: a page is linkable and shareable, survives a refresh, gets its own
 * browser-history entry so Back means "back", and has room for a form a dialog
 * cannot hold without scrolling. The modal path still exists for quick inline
 * actions, which is what a modal is genuinely good at.
 *
 * Nothing here names a resource. Fields come from the schema, option lists from
 * the payload, and the same file serves create and edit - the only difference is
 * whether `record` is null.
 */
import { Head, Link, router, useForm } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { PkButton as Button } from '@alxtexh-enterprise/panel'
import { RecordForm, UnsavedBar, buttonClasses } from '@alxtexh-enterprise/panel'
import type { FormField, UploadedFileValue } from '@alxtexh-enterprise/panel'
import DefineFieldDialog from '../components/DefineFieldDialog.vue'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string }
        /**
         * Places to go from this screen - normally the thing it configures.
         *
         * A SETTINGS SCREEN THAT CANNOT SHOW YOU WHAT IT CHANGES is guesswork
         * with a Save button. `external` opens in a new tab and renders as a
         * plain anchor rather than an Inertia `Link`, because a `Link` to a
         * page Inertia does not serve shows the reader raw JSON.
         */
        links?: { label: string; href: string; external?: boolean }[]
        /*
         * `fields` IS LOOSE HERE ON PURPOSE. `FormField` is recursive
         * (`children?: FormField[]`), so it cannot be written inline - and
         * importing it into `defineProps` makes the SFC compiler load
         * TypeScript from the consuming project. It arrives as server JSON and
         * is typed where it is USED: `RecordForm` declares `FormField[]`, and
         * the template casts to it below.
         */
        form: { columns: number; nodes?: any[]; fields?: Record<string, any>[] }
    }
    record: { id: number | string; label: string } | null
    values: Record<string, any>
    formOptions: Record<string, { value: any; label: string }[]>
    breadcrumbs: { title: string; href: string }[]
    /**
     * Null unless this resource has custom-field storage AND this user may
     * define fields - see ResourceController::customFieldSupport(). The
     * affordance renders only when acting on it can succeed.
     */
    customFieldSupport?: {
        resource: string
        label: string
        types: string[]
        endpoint: string
    } | null
}>()

const isEdit = computed(() => props.record !== null)

const definingField = ref(false)

const form = useForm<Record<string, any>>({ ...withDownloadUrls(props.values) })

const liveOptions = ref({ ...props.formOptions })

watch(
    () => props.formOptions,
    (next) => {
        liveOptions.value = { ...next }
    },
)

/**
 * Attaches a download URL to each stored file.
 *
 * Composed here rather than sent by the server because the URL needs the
 * resource and the record id, and this is the side that knows both - the form
 * layer is handed a column value and has no idea what is looking at it.
 *
 * A file that is only a pending handle gets NO url, which is what makes the
 * control say "not saved yet" instead of offering a download that would 404.
 *
 * @param values The server's values, untouched on a create page.
 */
function withDownloadUrls(values: Record<string, any>): Record<string, any> {
    if (!props.record) {
        return values
    }

    const out = { ...values }

    for (const key of fileFieldKeys()) {
        const file = out[key]

        if (file && typeof file === 'object' && file.value) {
            out[key] = {
                ...file,
                url: `${props.schema.routes.index}/${props.record.id}/file/${key}`,
            }
        }
    }

    return out
}

const formValues = computed<Record<string, any>>(() => ({ ...form.data() }))

/**
 * File fields hold an OBJECT in form state and submit a STRING.
 *
 * The control needs the name and size to render something a person recognises;
 * the column stores a handle or a path. Flattening happens once, here, on the
 * way out - the alternative is teaching the server to accept both shapes, which
 * means the validation rule can no longer just say `string`.
 */
function payload(): Record<string, any> {
    const out: Record<string, any> = { ...form.data() }

    for (const key of fileFieldKeys()) {
        const value = out[key]

        out[key] = value && typeof value === 'object' ? value.value : (value ?? null)
    }

    return out
}

/**
 * The keys of every file field, from EITHER form shape.
 *
 * A flat form carries `fields`; a form with sections or tabs carries a `nodes`
 * tree and no flat list at all. Reading only `fields` threw on every sectioned
 * form - and because this runs inside Inertia's `transform`, the throw did not
 * surface as an error, it just meant the visit never happened and the Save
 * button appeared to do nothing.
 */
function fileFieldKeys(): string[] {
    const keys: string[] = []

    const walk = (node: any) => {
        if (!node) {
            return
        }

        if (node.type === 'file' && node.key) {
            keys.push(node.key)
        }

        node.children?.forEach(walk)
    }

    ;(props.schema.form.fields ?? []).forEach(walk)
    ;(props.schema.form.nodes ?? []).forEach(walk)

    return keys
}

/**
 * True while a save is in flight, from the click until the visit finishes.
 *
 * The navigation guard needs to tell a SAVE apart from LEAVING, and
 * `form.processing` cannot do it: Inertia fires its global `before` event and
 * only then starts the visit, so `processing` is still false at the moment the
 * guard runs. The guard therefore saw a dirty form navigating and asked "leave
 * without saving?" on every save - and a user who answered Cancel had their
 * save silently dropped, which is the exact outcome the prompt exists to
 * prevent.
 */
let saving = false

/**
 * True while an explicit Cancel is navigating away.
 *
 * CANCEL IS ALREADY THE ANSWER to "leave without saving?", so prompting on top
 * of it asks the same question twice - and the second dialogue is the confusing
 * one, because it appears to be about a different decision. Worse, a browser
 * that auto-dismisses the confirm turns the button into a no-op: it visibly does
 * nothing, which reads as broken rather than as guarded.
 *
 * Same mechanism as `saving`, and for the same reason: Inertia fires its global
 * `before` hook before the visit starts, so the guard cannot tell a deliberate
 * departure from an accidental one without being told.
 */
let cancelling = false

function submit() {
    saving = true

    const onSuccess = () => {
        toast.success(`${props.schema.label} ${isEdit.value ? 'updated' : 'created'}`)
        router.visit(props.schema.routes.index)
    }

    // `transform` rather than a second form object, so the visit still carries
    // this form's errors and processing state back to the same controls.
    const submitting = form.transform(() => payload())

    // Cleared however the visit ends: a validation failure leaves the user on
    // a dirty form that must prompt again if they then try to leave.
    const onFinish = () => {
        saving = false
    }

    if (isEdit.value) {
        submitting.put(`${props.schema.routes.index}/${props.record!.id}`, { onSuccess, onFinish })
    } else {
        submitting.post(props.schema.routes.index, { onSuccess, onFinish })
    }
}

/**
 * Uploads a file and returns the handle the form will carry.
 *
 * Lives here rather than in the control for the same reason `searchOptions`
 * does: @alxtexh-enterprise/panel ships no HTTP client. XHR rather than fetch, because
 * fetch still cannot report UPLOAD progress - and on a 4 MB scan over a phone
 * connection, an indeterminate spinner is the difference between waiting and
 * pressing the button again.
 */
function upload(
    field: string,
    file: File,
    onProgress: (percent: number) => void,
): Promise<UploadedFileValue> {
    return new Promise((resolve, reject) => {
        const body = new FormData()

        body.append('file', file)
        body.append('field', field)

        const request = new XMLHttpRequest()

        request.open('POST', `${props.schema.routes.index}/uploads`)
        request.setRequestHeader('Accept', 'application/json')
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        request.setRequestHeader('X-XSRF-TOKEN', csrf())
        request.withCredentials = true

        request.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                onProgress(Math.round((event.loaded / event.total) * 100))
            }
        }

        request.onload = () => {
            let parsed: any = null

            try {
                parsed = JSON.parse(request.responseText)
            } catch {
                // Left null; the status decides below.
            }

            if (request.status === 201 && parsed) {
                resolve({ value: parsed.handle, name: parsed.name, size: parsed.size })

                return
            }

            // The server's own reason, when it gave one: "the file's contents
            // do not match its .pdf extension" is actionable, "upload failed"
            // is not.
            reject(new Error(parsed?.message ?? 'The upload failed.'))
        }

        request.onerror = () => reject(new Error('The upload failed.'))

        request.send(body)
    })
}

async function discardUpload(handle: string): Promise<void> {
    await fetch(`${props.schema.routes.index}/uploads`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ handle }),
    })
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

/**
 * Fetches options for a searchable select.
 *
 * Lives here because @alxtexh-enterprise/panel may not import an HTTP client - the same rule
 * that keeps the live-update composable transport-agnostic.
 */
async function searchOptions(
    field: string,
    term: string,
): Promise<{ value: any; label: string }[]> {
    const query = new URLSearchParams({
        field,
        q: term,
        form: JSON.stringify(form.data()),
    })
    const res = await fetch(`${props.schema.routes.index}/field-options?${query}`, {
        headers: { Accept: 'application/json' },
    })

    if (!res.ok) {
        throw new Error(String(res.status))
    }

    return (await res.json()).options
}

function cancel() {
    cancelling = true

    router.visit(props.schema.routes.index, {
        // Cleared however the visit ends, so a failed navigation leaves the
        // guard armed rather than permanently disabled.
        onFinish: () => {
            cancelling = false
        },
    })
}

/**
 * Discard edits without leaving the page.
 *
 * `form.reset()` restores the values the form was CONSTRUCTED with, which are
 * the record's saved values on an edit page and the empty defaults on a create
 * page - so one call is correct for both. Errors are cleared too: an error
 * about a field that has just been reverted is describing a value that no
 * longer exists.
 */
/*
 * THE CAST LIVES IN SCRIPT, not in the template.
 *
 * `:fields="schema.form.fields as FormField[] | undefined"` is valid and the
 * linter reads the `|` as a Vue 2 filter pipe - a rule that cannot be argued
 * with from inside an expression. Hoisting it is clearer anyway: template
 * expressions are not where type surgery belongs.
 */
const formFields = computed(() => props.schema.form.fields as FormField[] | undefined)

function fieldIsLive(key: string): boolean {
    if ((formFields.value ?? []).some((field) => field.key === key && field.live)) {
        return true
    }

    return nodeHasLiveField(props.schema.form.nodes, key)
}

function nodeHasLiveField(nodes: any[] | undefined, key: string): boolean {
    if (!nodes) {
        return false
    }

    for (const node of nodes) {
        if (node?.component === 'field' && node.key === key && node.live) {
            return true
        }

        if (nodeHasLiveField(node?.children, key) || nodeHasLiveField(node?.fields, key)) {
            return true
        }
    }

    return false
}

async function onFieldChange(key: string, value: any): Promise<void> {
    ;(form as any)[key] = value

    if (!fieldIsLive(key)) {
        return
    }

    const res = await fetch(`${props.schema.routes.index}/form-state`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ field: key, values: form.data() }),
    })

    if (!res.ok) {
        return
    }

    const payload = await res.json()

    if (payload.options && typeof payload.options === 'object') {
        liveOptions.value = { ...liveOptions.value, ...payload.options }
    }
}

function discard() {
    form.reset()
    form.clearErrors()
}

/**
 * Unsaved-changes guard (addendum C).
 *
 * Trivial in an SPA and genuinely useful on a full-page form, where a stray
 * Back or a closed tab loses everything typed. Only guards a form that is
 * actually dirty, so it never nags on a page someone merely looked at.
 */
function onBeforeUnload(e: BeforeUnloadEvent) {
    if (form.isDirty && !form.processing) {
        e.preventDefault()
        e.returnValue = ''
    }
}

let removeNavigationGuard: (() => void) | undefined

onMounted(() => {
    window.addEventListener('beforeunload', onBeforeUnload)

    removeNavigationGuard = router.on('before', (event) => {
        // A submit and an explicit Cancel both navigate; only an UNRELATED
        // navigation should prompt.
        if (saving || cancelling || !form.isDirty || form.processing) {
            return
        }

        if (!window.confirm('You have unsaved changes. Leave without saving?')) {
            event.preventDefault()
        }
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', onBeforeUnload)
    removeNavigationGuard?.()
})
</script>

<template>
    <Head :title="`${isEdit ? 'Edit' : 'New'} ${schema.label}`" />

    <!--
        `pb-24` CLEARS THE FLOATING SAVE BAR. The bar is fixed to the bottom
        of the viewport, so without reserved space it sits ON the last section
        of a scrolled-to-bottom form - covering the exact fields somebody is
        trying to fill (the user hit this on the announcement toggles). The
        padding means fully scrolled content ends above the bar, always.
    -->
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-4 p-3 pb-24 sm:p-4 sm:pb-24">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="min-w-0">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                    {{ isEdit ? `Edit ${schema.label}` : `New ${schema.label}` }}
                </h1>
                <p v-if="record" class="text-muted-foreground text-sm">{{ record.label }}</p>
            </div>

            <div v-if="schema.links?.length" class="flex items-center gap-2">
                <template v-for="link in schema.links" :key="link.href">
                    <a
                        v-if="link.external"
                        :href="link.href"
                        target="_blank"
                        rel="noopener"
                        :class="buttonClasses({ variant: 'outline', size: 'sm' })"
                    >
                        {{ link.label }}
                        <svg
                            viewBox="0 0 24 24"
                            class="ml-1 size-3.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <path d="M15 3h6v6M10 14 21 3" />
                        </svg>
                    </a>
                    <Link
                        v-else
                        :href="link.href"
                        :class="buttonClasses({ variant: 'outline', size: 'sm' })"
                    >
                        {{ link.label }}
                    </Link>
                </template>
            </div>
        </div>

        <!--
            No card here when the schema declares layout: Section and Tabs draw
            their own frame, and wrapping them puts a border around a border.
            The flat fallback has no frame of its own, so it still gets one.
        -->
        <div :class="schema.form.nodes?.length ? '' : 'bg-card rounded-lg border p-4 sm:p-6'">
            <RecordForm
                :model-value="formValues"
                :nodes="schema.form.nodes"
                :fields="formFields"
                :columns="schema.form.columns"
                :errors="form.errors as any"
                :options="liveOptions"
                :processing="form.processing"
                :search-options="searchOptions"
                :upload="upload"
                :discard="discardUpload"
                @change="onFieldChange"
            />
        </div>

        <!--
            THE DOOR TO A NEW FIELD IS ON THE FORM, because that is where the
            need arises - see DefineFieldDialog's own note, and Part D of the
            plan. A ghost button, deliberately quiet: defining a field is an
            occasional act, not part of filling this form in.
        -->
        <div v-if="customFieldSupport" class="flex justify-start">
            <Button
                variant="ghost"
                size="sm"
                class="text-muted-foreground"
                :disabled="form.processing"
                @click="definingField = true"
            >
                + Add a field to every {{ customFieldSupport.label.toLowerCase() }}
            </Button>
        </div>

        <!--
            THE BAR IS THE ONLY SAVE UI. There used to be a second Cancel/Save
            pair at the bottom of the form, and with the bar floating above it
            the same two buttons rendered twice on every dirty form - two
            controls claiming the same act, one of them half-hidden behind the
            other. The floating bar is the reliable one (visible wherever the
            scroll is), so the inline pair is gone.

            ON EDIT it appears when there is something to lose, so a page
            merely looked at stays quiet. ON CREATE it is always there -
            a create form's entire purpose is the submit, and a screen whose
            only save control appears after the first keystroke reads as
            broken for exactly one keystroke too long.
        -->
        <UnsavedBar
            :show="isEdit ? form.isDirty : true"
            :processing="form.processing"
            :message="isEdit ? 'Unsaved changes' : `New ${schema.label.toLowerCase()}`"
            :save-label="isEdit ? 'Save changes' : `Create ${schema.label}`"
            :discard-label="form.isDirty ? 'Discard' : undefined"
            @save="submit"
            @cancel="cancel"
            @discard="discard"
        />

        <DefineFieldDialog
            v-if="customFieldSupport"
            :open="definingField"
            :resource="customFieldSupport.resource"
            :label="customFieldSupport.label"
            :types="customFieldSupport.types"
            :endpoint="customFieldSupport.endpoint"
            @close="definingField = false"
        />
    </div>
</template>
