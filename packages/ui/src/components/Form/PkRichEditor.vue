<script setup lang="ts">
/**
 * Formatted prose - the control for `RichEditorField`.
 *
 * THIS COMPONENT IS NOT A SECURITY BOUNDARY, and saying so plainly matters more
 * than anything else in the file. It produces markup and hands it to the server,
 * which parses it against an allowlist and stores whatever survives. Nothing
 * here is trusted: an attacker skips this file entirely and posts to the
 * endpoint. Treating the toolbar as a constraint is how a rich editor becomes an
 * XSS hole.
 *
 * `execCommand` IS DEPRECATED AND USED ANYWAY. It is the only API that gives
 * correct selection-aware formatting across browsers without a 40kB editor
 * library, and @alxtexh-enterprise/panel takes no runtime dependencies (spec §4). The
 * deprecation is documented rather than dangerous - no browser has removed it,
 * and the day one does, this file changes and nothing else does, because the
 * value crossing the boundary is plain HTML.
 *
 * THE CONTENT IS SET ONCE AND NOT RE-SET ON EVERY KEYSTROKE. Writing `innerHTML`
 * from a watcher while somebody is typing collapses the caret to the start of
 * the field after each character - the classic contenteditable bug. The element
 * owns its own DOM; the model is updated from it, never the other way round,
 * except on a genuine external reset.
 */
import { computed, onMounted, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue: string | null
        toolbar?: string[]
        maxLength?: number | null
        disabled?: boolean
        placeholder?: string
    }>(),
    {
        toolbar: () => ['bold', 'italic', 'heading', 'list', 'link'],
        maxLength: null,
        disabled: false,
        placeholder: 'Write a note…',
    },
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void
}>()

const editor = ref<HTMLElement | null>(null)

/** What this component last emitted, so an echo does not reset the caret. */
let lastEmitted: string | null = null

interface Control {
    id: string
    label: string
    path: string
    command: string
    argument?: string
}

const CONTROLS: Control[] = [
    {
        id: 'bold',
        label: 'Bold',
        command: 'bold',
        path: 'M6 4h6a4 4 0 0 1 0 8H6zM6 12h7a4 4 0 0 1 0 8H6z',
    },
    {
        id: 'italic',
        label: 'Italic',
        command: 'italic',
        path: 'M19 4h-9M14 20H5M15 4 9 20',
    },
    {
        id: 'underline',
        label: 'Underline',
        command: 'underline',
        path: 'M6 4v6a6 6 0 0 0 12 0V4M4 21h16',
    },
    {
        id: 'strike',
        label: 'Strikethrough',
        command: 'strikeThrough',
        path: 'M16 4H9a3 3 0 0 0-2 5M14 12a4 4 0 0 1 0 8H6M4 12h16',
    },
    {
        id: 'heading',
        label: 'Heading',
        command: 'formatBlock',
        argument: 'h2',
        path: 'M6 12h12M6 4v16M18 4v16',
    },
    {
        id: 'list',
        label: 'Bulleted list',
        command: 'insertUnorderedList',
        path: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
    },
    {
        id: 'quote',
        label: 'Quote',
        command: 'formatBlock',
        argument: 'blockquote',
        path: 'M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6h4M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6h4',
    },
    {
        id: 'code',
        label: 'Code',
        command: 'formatBlock',
        argument: 'pre',
        path: 'm16 18 6-6-6-6M8 6l-6 6 6 6',
    },
]

const visibleControls = computed(() => CONTROLS.filter((c) => props.toolbar.includes(c.id)))

const showLink = computed(() => props.toolbar.includes('link'))

/**
 * Characters of visible text, for the counter. Not the stored length.
 *
 * A REF UPDATED ON WRITE, NOT A COMPUTED OVER THE DOM. The first version read
 * `editor.value.innerText` inside a `computed`, which never recomputed: the
 * element's text is mutated by the browser during typing, not by Vue, so there
 * is no reactive dependency to invalidate. The counter sat at 0 while the field
 * filled up - a control that silently stops counting is worse than none, since
 * it reads as "plenty of room left" right up to the limit.
 */
const textLength = ref(0)

function publish() {
    const html = editor.value?.innerHTML ?? ''
    const text = (editor.value?.innerText ?? '').trim()

    textLength.value = text.length

    // An "empty" contenteditable is rarely an empty string - browsers leave a
    // `<br>` behind. Emitting that as content would make a pristine form dirty.
    const next = text === '' ? null : html

    lastEmitted = next
    emit('update:modelValue', next)
}

function run(control: Control) {
    if (props.disabled) {
        return
    }

    editor.value?.focus()
    document.execCommand(control.command, false, control.argument)
    publish()
}

/**
 * A link, asked for rather than typed as markup.
 *
 * `window.prompt` deliberately: a modal for this would need focus management
 * that steals and restores the SELECTION, and losing the selection is what makes
 * the inserted link land in the wrong place. The prompt keeps the selection
 * intact because it never touches the document.
 */
function insertLink() {
    if (props.disabled) {
        return
    }

    const url = window.prompt('Link address')

    if (!url) {
        return
    }

    editor.value?.focus()
    document.execCommand('createLink', false, url)
    publish()
}

/**
 * A paste is inserted as PLAIN TEXT.
 *
 * Pasting from a word processor or a web page carries a document's worth of
 * markup - fonts, colours, classes, sometimes scripts. The server strips all of
 * it anyway, so allowing it through would only mean the operator watches
 * formatting appear and then vanish on save. Taking the text is honest about
 * what will be kept.
 */
function onPaste(event: ClipboardEvent) {
    event.preventDefault()

    const text = event.clipboardData?.getData('text/plain') ?? ''

    document.execCommand('insertText', false, text)
    publish()
}

onMounted(() => {
    if (!editor.value) {
        return
    }

    editor.value.innerHTML = props.modelValue ?? ''
    // Seed the counter from existing content, or editing a saved note starts
    // the count at zero and undercounts until the first keystroke.
    textLength.value = editor.value.innerText.trim().length
})

watch(
    () => props.modelValue,
    (incoming) => {
        // Only a genuine external change - a Discard, or a fresh record. An
        // echo of our own emit would move the caret to the start.
        if (incoming === lastEmitted) {
            return
        }

        if (!editor.value) {
            return
        }

        editor.value.innerHTML = incoming ?? ''
        textLength.value = editor.value.innerText.trim().length
    },
)
</script>

<template>
    <div
        class="border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2"
    >
        <div class="bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1">
            <button
                v-for="control in visibleControls"
                :key="control.id"
                type="button"
                class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40"
                :disabled="disabled"
                :title="control.label"
                :aria-label="control.label"
                @mousedown.prevent
                @click="run(control)"
            >
                <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path :d="control.path" />
                </svg>
            </button>

            <button
                v-if="showLink"
                type="button"
                class="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40"
                :disabled="disabled"
                title="Link"
                aria-label="Link"
                @mousedown.prevent
                @click="insertLink"
            >
                <svg
                    class="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path
                        d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"
                    />
                </svg>
            </button>
        </div>

        <!--
            `pk-prose` rather than utility classes on every tag: the content is
            authored HTML, so its `<h2>` and `<ul>` need styling that no class
            in this template can reach.
        -->
        <div
            ref="editor"
            class="pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none"
            :class="disabled ? 'pointer-events-none opacity-60' : ''"
            :contenteditable="!disabled"
            role="textbox"
            aria-multiline="true"
            :data-placeholder="placeholder"
            @input="publish"
            @blur="publish"
            @paste="onPaste"
        />

        <div
            v-if="maxLength !== null"
            class="text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
        >
            {{ textLength }} / {{ maxLength }}
        </div>
    </div>
</template>

<style scoped>
/*
 * An empty contenteditable has no placeholder of its own - the attribute does
 * nothing on a div. `:empty` plus a pseudo-element is the only way to get one,
 * and `pointer-events: none` keeps it from swallowing the click that focuses
 * the field.
 */
.pk-prose:empty::before {
    content: attr(data-placeholder);
    color: var(--color-muted-foreground);
    pointer-events: none;
}

.pk-prose :where(h2) {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0.6em 0 0.3em;
}

.pk-prose :where(h3) {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0.5em 0 0.25em;
}

.pk-prose :where(p) {
    margin: 0.35em 0;
}

.pk-prose :where(ul, ol) {
    margin: 0.35em 0;
    padding-left: 1.25rem;
}

.pk-prose :where(ul) {
    list-style: disc;
}

.pk-prose :where(ol) {
    list-style: decimal;
}

.pk-prose :where(blockquote) {
    border-left: 2px solid var(--color-border);
    padding-left: 0.75rem;
    margin: 0.5em 0;
    color: var(--color-muted-foreground);
}

.pk-prose :where(pre, code) {
    font-family: ui-monospace, monospace;
    font-size: 0.85em;
}

.pk-prose :where(pre) {
    background: var(--color-muted);
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    overflow-x: auto;
}

.pk-prose :where(a) {
    color: var(--color-primary);
    text-decoration: underline;
}
</style>
