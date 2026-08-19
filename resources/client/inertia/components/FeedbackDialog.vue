<script setup lang="ts">
/**
 * Filing a feature request or a bug report without leaving the panel.
 *
 * THE CONTEXT IS CAPTURED, NEVER ASKED FOR. Page URL, user agent and viewport
 * are read at submit time. They are shown before send. Severity is for bugs
 * only; the server enforces that.
 *
 * Mount on What's new (`Changelog`). Not in the shell or account menu.
 */
import { PkButton, PkModal } from '@alxtexh-enterprise/panel'
import { useForm } from '@inertiajs/vue3'
import { computed, ref, watch } from 'vue'

const open = defineModel<boolean>('open', { required: true })

const props = withDefaults(
    defineProps<{
        kind?: 'feature' | 'bug'
        action?: string
    }>(),
    {
        kind: 'feature',
        action: '/feedback',
    },
)

const form = useForm({
    kind: props.kind as 'feature' | 'bug',
    severity: 'medium' as string | null,
    subject: '',
    body: '',
    page_url: '',
    viewport: '',
})

const isBug = computed(() => form.kind === 'bug')
const bodyRef = ref<HTMLTextAreaElement | null>(null)

watch(open, (isOpen) => {
    if (!isOpen) {
        return
    }

    form.clearErrors()
    form.kind = props.kind
    form.page_url = window.location.href
    form.viewport = `${window.innerWidth}x${window.innerHeight}`
})

watch(isBug, (bug) => {
    form.severity = bug ? 'medium' : null
})

const SEVERITIES = [
    { value: 'low', label: 'Minor' },
    { value: 'medium', label: 'Normal' },
    { value: 'high', label: 'Blocking' },
]

function submit(): void {
    form.post(props.action, {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('subject', 'body')
            open.value = false
        },
        onError: () => bodyRef.value?.focus(),
    })
}
</script>

<template>
    <PkModal
        :open="open"
        title="Send feedback"
        description="Requests and reports go to the team maintaining this panel."
        :busy="form.processing"
        @close="open = false"
    >
        <form class="flex flex-col gap-4" @submit.prevent="submit">
            <div class="grid grid-cols-2 gap-2">
                <button
                    v-for="option in [
                        { value: 'feature', label: 'Feature request' },
                        { value: 'bug', label: 'Bug report' },
                    ]"
                    :key="option.value"
                    type="button"
                    class="rounded-md border p-3 text-sm transition-colors"
                    :class="
                        form.kind === option.value
                            ? 'border-primary bg-primary/5 font-medium'
                            : 'text-muted-foreground hover:bg-accent'
                    "
                    :aria-pressed="form.kind === option.value"
                    @click="form.kind = option.value as 'feature' | 'bug'"
                >
                    {{ option.label }}
                </button>
            </div>

            <div class="flex flex-col gap-1.5">
                <label for="pk-fb-subject" class="text-sm font-medium">Summary</label>
                <input
                    id="pk-fb-subject"
                    v-model="form.subject"
                    maxlength="150"
                    class="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    :placeholder="isBug ? 'The export button does nothing' : 'Let me pin a column'"
                />
                <p v-if="form.errors.subject" class="text-xs text-destructive">
                    {{ form.errors.subject }}
                </p>
            </div>

            <div v-if="isBug" class="flex flex-col gap-1.5">
                <p class="text-sm font-medium">How badly is it affecting you?</p>
                <div class="flex gap-2">
                    <button
                        v-for="s in SEVERITIES"
                        :key="s.value"
                        type="button"
                        class="flex-1 rounded-md border px-3 py-1.5 text-xs"
                        :class="
                            form.severity === s.value
                                ? 'border-primary bg-primary/5 font-medium'
                                : 'text-muted-foreground'
                        "
                        @click="form.severity = s.value"
                    >
                        {{ s.label }}
                    </button>
                </div>
            </div>

            <div class="flex flex-col gap-1.5">
                <label for="pk-fb-body" class="text-sm font-medium">
                    {{ isBug ? 'What happened?' : 'What would it do?' }}
                </label>
                <textarea
                    id="pk-fb-body"
                    ref="bodyRef"
                    v-model="form.body"
                    rows="5"
                    maxlength="5000"
                    class="min-h-24 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <p v-if="form.errors.body" class="text-xs text-destructive">
                    {{ form.errors.body }}
                </p>
            </div>

            <div class="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground">
                <p class="mb-1 font-medium text-foreground">Sent with this report</p>
                <p class="truncate">{{ form.page_url || '-' }}</p>
                <p>{{ form.viewport }} · your browser and version</p>
            </div>
        </form>

        <template #footer>
            <PkButton type="button" variant="ghost" @click="open = false">Cancel</PkButton>
            <PkButton type="button" :disabled="form.processing" @click="submit">
                {{ form.processing ? 'Sending…' : 'Send' }}
            </PkButton>
        </template>
    </PkModal>
</template>
