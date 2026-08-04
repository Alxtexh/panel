<script setup lang="ts">
/**
 * Filing a feature request or a bug report without leaving the panel.
 *
 * THE CONTEXT IS CAPTURED, NEVER ASKED FOR. "Which page were you on, and which
 * browser?" is the first reply to almost every bug report, and it costs a round
 * trip that can take a day. The page URL, the user agent and the viewport are
 * read at submit time, so the report arrives already answering them.
 *
 * IT SHOWS THE USER WHAT IT IS SENDING. A dialog that silently harvests the
 * current URL is doing the right thing in the wrong way - people paste record
 * ids and search terms into URLs, and a bug report from a filtered client list
 * carries that filter. The captured values are displayed, plainly, before the
 * submit button. Nothing is hidden and nothing needs to be guessed at.
 *
 * SEVERITY IS FOR BUGS ONLY, and the server enforces that rather than trusting
 * this component: a feature request carrying a severity sorts above real bugs in
 * any triage list ordered by it.
 */
import { useForm } from '@inertiajs/vue3';
import { Bug, Lightbulb } from '@lucide/vue';
import { PkButton as Button } from '@panelkit/panel';
import { computed, ref, watch } from 'vue';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const open = defineModel<boolean>('open', { required: true });

const props = withDefaults(defineProps<{ kind?: 'feature' | 'bug' }>(), {
    kind: 'feature',
});

const form = useForm({
    kind: props.kind as 'feature' | 'bug',
    severity: 'medium' as string | null,
    subject: '',
    body: '',
    page_url: '',
    viewport: '',
});

const isBug = computed(() => form.kind === 'bug');

/**
 * Read afresh on every open, not once on mount.
 *
 * This dialog lives in the app shell, so it is mounted once and survives every
 * navigation. Capturing on mount would attach the FIRST page of the session to
 * a report filed forty pages later - context that is worse than none, because
 * it is confidently wrong.
 */
watch(open, (isOpen) => {
    if (!isOpen) {
        return;
    }

    form.clearErrors();
    form.kind = props.kind;
    form.page_url = window.location.href;
    form.viewport = `${window.innerWidth}x${window.innerHeight}`;
});

// Severity is meaningless on a feature request, and the server rejects it there.
watch(isBug, (bug) => {
    form.severity = bug ? 'medium' : null;
});

const SEVERITIES = [
    { value: 'low', label: 'Minor' },
    { value: 'medium', label: 'Normal' },
    { value: 'high', label: 'Blocking' },
];

const bodyRef = ref<HTMLTextAreaElement | null>(null);

function submit(): void {
    form.post('/feedback', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('subject', 'body');
            open.value = false;
        },
        // Errors stay on screen with the dialog open - closing it on a
        // validation failure would discard what the person just typed.
        onError: () => bodyRef.value?.focus(),
    });
}
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>Send feedback</DialogTitle>
                <DialogDescription>
                    Requests and reports go to the team maintaining this panel.
                </DialogDescription>
            </DialogHeader>

            <form class="flex flex-col gap-4" @submit.prevent="submit">
                <!-- Two buttons rather than a select: there are exactly two, and
                     which one you want is the first decision, not a hidden one. -->
                <div class="grid grid-cols-2 gap-2">
                    <button
                        v-for="option in [
                            {
                                value: 'feature',
                                label: 'Feature request',
                                icon: Lightbulb,
                            },
                            { value: 'bug', label: 'Bug report', icon: Bug },
                        ]"
                        :key="option.value"
                        type="button"
                        class="flex items-center justify-center gap-2 rounded-md border p-3 text-sm transition-colors"
                        :class="
                            form.kind === option.value
                                ? 'border-primary bg-primary/5 font-medium text-foreground'
                                : 'text-muted-foreground hover:bg-accent'
                        "
                        :aria-pressed="form.kind === option.value"
                        @click="form.kind = option.value as 'feature' | 'bug'"
                    >
                        <component :is="option.icon" class="size-4" />
                        {{ option.label }}
                    </button>
                </div>

                <div class="flex flex-col gap-1.5">
                    <Label for="fb-subject">Summary</Label>
                    <Input
                        id="fb-subject"
                        v-model="form.subject"
                        maxlength="150"
                        :placeholder="
                            isBug
                                ? 'The export button does nothing'
                                : 'Let me pin a column'
                        "
                    />
                    <p
                        v-if="form.errors.subject"
                        class="text-xs text-destructive"
                    >
                        {{ form.errors.subject }}
                    </p>
                </div>

                <div v-if="isBug" class="flex flex-col gap-1.5">
                    <Label>How badly is it affecting you?</Label>
                    <div class="flex gap-2">
                        <button
                            v-for="s in SEVERITIES"
                            :key="s.value"
                            type="button"
                            class="flex-1 rounded-md border px-3 py-1.5 text-xs transition-colors"
                            :class="
                                form.severity === s.value
                                    ? 'border-primary bg-primary/5 font-medium'
                                    : 'text-muted-foreground hover:bg-accent'
                            "
                            @click="form.severity = s.value"
                        >
                            {{ s.label }}
                        </button>
                    </div>
                </div>

                <div class="flex flex-col gap-1.5">
                    <Label for="fb-body">{{
                        isBug ? 'What happened?' : 'What would it do?'
                    }}</Label>
                    <textarea
                        id="fb-body"
                        ref="bodyRef"
                        v-model="form.body"
                        rows="5"
                        maxlength="5000"
                        class="min-h-24 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
                        :placeholder="
                            isBug
                                ? 'What you did, what you expected, and what happened instead.'
                                : 'What you are trying to do, and why the current way does not work.'
                        "
                    />
                    <p v-if="form.errors.body" class="text-xs text-destructive">
                        {{ form.errors.body }}
                    </p>
                </div>

                <!--
                    SHOWN, NOT HIDDEN. See the note at the top: a URL can carry a
                    search term or a record id, so the person filing gets to see
                    what travels with their report.
                -->
                <div
                    class="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground"
                >
                    <p class="mb-1 font-medium text-foreground">
                        Sent with this report
                    </p>
                    <p class="truncate">{{ form.page_url || '-' }}</p>
                    <p>{{ form.viewport }} · your browser and version</p>
                </div>

                <DialogFooter>
                    <Button type="button" variant="ghost" @click="open = false"
                        >Cancel</Button
                    >
                    <Button type="submit" :disabled="form.processing">
                        {{ form.processing ? 'Sending…' : 'Send' }}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>
