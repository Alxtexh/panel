<script setup lang="ts">
/**
 * Email templates list + editor. Props from EmailTemplatePage.
 * Save and send-test post to page actions; no client-side fetch.
 */
import { Head, router, useForm, usePage } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'
import {
    FORM_MEASURE,
    PAGE_SHELL_STACK,
    PkButton as Button,
    PkEmptyState,
    PkPageHeader,
    TableShell,
} from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

interface TemplateRow {
    key: string
    subject: string
    variables?: string[]
}

interface SelectedTemplate {
    key: string
    subject: string
    body: string
    variables?: string[]
}

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        templates?: TemplateRow[]
        selected?: SelectedTemplate | null
        saveHref?: string
        sendTestHref?: string
    }>(),
    {
        templates: () => [],
        selected: null,
        saveHref: '/apps/email-templates/save',
        sendTestHref: '/apps/email-templates/send-test',
    },
)

const page = usePage()
const showPreview = ref(false)
const showCreate = ref(false)

const indexHref = computed(() => {
    const url = String(page.url ?? '/apps/email-templates')
    const q = url.indexOf('?')

    return q === -1 ? url : url.slice(0, q)
})

const form = useForm<{
    key: string
    subject: string
    body: string
    variables: string[]
}>({
    key: props.selected?.key ?? '',
    subject: props.selected?.subject ?? '',
    body: props.selected?.body ?? '',
    variables: [...(props.selected?.variables ?? [])],
})

const testForm = useForm<{ key: string; to: string }>({
    key: props.selected?.key ?? '',
    to: '',
})

watch(
    () => props.selected,
    (next) => {
        form.key = next?.key ?? ''
        form.subject = next?.subject ?? ''
        form.body = next?.body ?? ''
        form.variables = [...(next?.variables ?? [])]
        testForm.key = next?.key ?? ''
        showCreate.value = false
        showPreview.value = false
    },
)

function openTemplate(key: string) {
    router.get(indexHref.value, { key }, { preserveState: true, preserveScroll: true })
}

function startCreate() {
    showCreate.value = true
    form.key = ''
    form.subject = ''
    form.body = ''
    form.variables = []
    testForm.key = ''
}

function submitSave() {
    form.post(props.saveHref ?? '/apps/email-templates/save', {
        preserveScroll: true,
        onSuccess: () => {
            if (form.key) {
                openTemplate(form.key)
            }

            showCreate.value = false
        },
    })
}

function submitTest() {
    testForm.key = form.key
    testForm.post(props.sendTestHref ?? '/apps/email-templates/send-test', {
        preserveScroll: true,
    })
}
</script>

<template>
    <Head :title="pageHeading ?? 'Email templates'" />

    <div :class="PAGE_SHELL_STACK">
        <PkPageHeader
            :title="pageHeading ?? 'Email templates'"
            :purpose="
                pageDescription ??
                'Subject and body templates with variables. Hosts override deliverTest() to send mail.'
            "
        >
            <template #actions>
                <Button type="button" variant="outline" @click="startCreate"> New template </Button>
            </template>
        </PkPageHeader>

        <PkEmptyState
            v-if="templates.length === 0 && !showCreate && !selected"
            title="No templates yet"
            description="Create a template key, or seed panel_email_templates for this tenant. Send-test stays a host hook until deliverTest() is wired."
            icon="mail"
        >
            <template #actions>
                <Button type="button" @click="startCreate">New template</Button>
            </template>
        </PkEmptyState>

        <div v-else class="grid gap-4 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
            <TableShell>
                <template #title>
                    <p class="text-sm font-medium">Templates</p>
                </template>
                <ul class="divide-y text-sm">
                    <li
                        v-if="templates.length === 0"
                        class="text-muted-foreground px-3 py-4 text-xs"
                    >
                        None saved yet.
                    </li>
                    <li v-for="row in templates" :key="row.key">
                        <button
                            type="button"
                            class="hover:bg-muted/50 flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left"
                            :class="(selected?.key ?? form.key) === row.key ? 'bg-muted/60' : ''"
                            @click="openTemplate(row.key)"
                        >
                            <span class="font-mono text-xs font-medium">{{ row.key }}</span>
                            <span class="text-muted-foreground truncate text-xs">
                                {{ row.subject }}
                            </span>
                        </button>
                    </li>
                </ul>
            </TableShell>

            <div :class="[FORM_MEASURE, 'space-y-4']">
                <form
                    v-if="showCreate || selected || form.key"
                    class="space-y-4 rounded-xl border bg-card p-4"
                    @submit.prevent="submitSave"
                >
                    <div>
                        <label class="text-sm font-medium" for="tpl-key">Key</label>
                        <input
                            id="tpl-key"
                            v-model="form.key"
                            type="text"
                            class="mt-1 w-full rounded-md border bg-background px-3 py-2 font-mono text-sm"
                            :readonly="!!selected && !showCreate"
                            placeholder="welcome"
                        />
                        <p v-if="form.errors.key" class="mt-1 text-xs text-destructive">
                            {{ form.errors.key }}
                        </p>
                    </div>

                    <div>
                        <label class="text-sm font-medium" for="tpl-subject">Subject</label>
                        <input
                            id="tpl-subject"
                            v-model="form.subject"
                            type="text"
                            class="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                        />
                        <p v-if="form.errors.subject" class="mt-1 text-xs text-destructive">
                            {{ form.errors.subject }}
                        </p>
                    </div>

                    <div>
                        <label class="text-sm font-medium" for="tpl-body">Body</label>
                        <textarea
                            id="tpl-body"
                            v-model="form.body"
                            rows="12"
                            class="mt-1 w-full rounded-md border bg-background px-3 py-2 font-mono text-sm"
                        />
                        <p v-if="form.errors.body" class="mt-1 text-xs text-destructive">
                            {{ form.errors.body }}
                        </p>
                    </div>

                    <p
                        v-if="(selected?.variables ?? form.variables).length"
                        class="text-muted-foreground text-xs font-normal"
                    >
                        Variables:
                        <span class="font-mono">
                            {{ (selected?.variables ?? form.variables).join(', ') }}
                        </span>
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <Button type="submit" :disabled="form.processing">Save</Button>
                        <Button type="button" variant="outline" @click="showPreview = !showPreview">
                            {{ showPreview ? 'Hide preview' : 'Preview' }}
                        </Button>
                    </div>
                </form>

                <section
                    v-if="showPreview && (form.subject || form.body)"
                    class="space-y-2 rounded-xl border bg-muted/20 p-4"
                >
                    <p class="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Preview
                    </p>
                    <p class="text-sm font-semibold">{{ form.subject || '(no subject)' }}</p>
                    <pre
                        class="bg-background max-h-64 overflow-auto rounded-md border p-3 text-xs whitespace-pre-wrap"
                        >{{ form.body || '(empty body)' }}</pre>
                </section>

                <form
                    v-if="form.key"
                    class="space-y-3 rounded-xl border bg-card p-4"
                    @submit.prevent="submitTest"
                >
                    <p class="text-sm font-medium">Send test</p>
                    <p class="text-muted-foreground text-xs font-normal">
                        Posts to send-test. Packaged deliverTest() is a no-op until the host wires
                        Mail.
                    </p>
                    <div>
                        <label class="text-sm font-medium" for="tpl-to">To</label>
                        <input
                            id="tpl-to"
                            v-model="testForm.to"
                            type="email"
                            class="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
                            placeholder="you@example.com"
                        />
                        <p v-if="testForm.errors.to" class="mt-1 text-xs text-destructive">
                            {{ testForm.errors.to }}
                        </p>
                    </div>
                    <Button type="submit" variant="outline" :disabled="testForm.processing">
                        Queue test email
                    </Button>
                </form>

                <p
                    v-if="!showCreate && !selected && templates.length > 0"
                    class="text-muted-foreground text-sm font-normal"
                >
                    Select a template from the list, or create a new one.
                </p>
            </div>
        </div>
    </div>
</template>
