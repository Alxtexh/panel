<script setup lang="ts">
/**
 * Markdown, with a preview beside it - roadmap 4.5.
 *
 * THE PREVIEW IS NOT THE VALUE. What is stored is exactly what is typed;
 * this renders a reading of it so somebody can check their asterisks landed.
 * That is why the preview may be crude without being wrong - it is a
 * courtesy, and the real rendering happens wherever the text is finally
 * displayed, against that surface's own rules.
 *
 * THE PREVIEW ESCAPES FIRST, THEN FORMATS. Markdown source can contain HTML,
 * and a preview that injected it would execute a colleague's paste inside
 * the panel. Text is escaped, then a small set of inline patterns is turned
 * into markup - so anything not on that list shows up as the characters
 * that were typed, which is also what a preview should do.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue?: string | null
        rows?: number
        toolbar?: string[]
        disabled?: boolean
        id?: string
    }>(),
    { modelValue: '', rows: 12, disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const showPreview = ref(false)

const text = computed(() => props.modelValue ?? '')

function escape(s: string): string {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

/**
 * A DELIBERATELY SMALL SUBSET: headings, bold, italic, inline code, links
 * and list items. Enough to answer "did my formatting work"; not an attempt
 * to be a markdown engine, which would be a second renderer to keep in step
 * with whatever finally displays the text.
 */
const preview = computed(() =>
    escape(text.value)
        .replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>')
        .replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>')
        .replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/(^|[^*])\*([^*]+?)\*/g, '$1<em>$2</em>')
        .replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>')
        .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>')
        .replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>')
        .replace(/\n{2,}/g, '<br><br>')
        .replace(/\n/g, '<br>'),
)

/** Wrap the selection, which is what every one of these buttons does. */
function wrap(before: string, after = before) {
    const el = document.getElementById(props.id ?? '') as HTMLTextAreaElement | null

    if (el === null) return

    const start = el.selectionStart
    const end = el.selectionEnd
    const selected = text.value.slice(start, end)

    emit(
        'update:modelValue',
        `${text.value.slice(0, start)}${before}${selected}${after}${text.value.slice(end)}`,
    )
}

const ACTIONS: Record<string, { label: string; run: () => void }> = {
    bold: { label: 'B', run: () => wrap('**') },
    italic: { label: 'I', run: () => wrap('*') },
    code: { label: '</>', run: () => wrap('`') },
    heading: { label: 'H', run: () => wrap('## ', '') },
    list: { label: '•', run: () => wrap('- ', '') },
    link: { label: '🔗', run: () => wrap('[', '](https://)') },
}

const buttons = computed(() =>
    (props.toolbar ?? Object.keys(ACTIONS)).filter((key) => key in ACTIONS),
)
</script>

<template>
    <div class="space-y-1">
        <div class="flex items-center gap-1">
            <button
                v-for="key in buttons"
                :key="key"
                type="button"
                :disabled="disabled"
                :title="key"
                :aria-label="key"
                class="hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50"
                @click="ACTIONS[key].run()"
            >
                {{ ACTIONS[key].label }}
            </button>

            <button
                type="button"
                class="hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs"
                :aria-pressed="showPreview"
                @click="showPreview = !showPreview"
            >
                Preview
            </button>
        </div>

        <textarea
            v-if="!showPreview"
            :id="id"
            :value="text"
            :rows="rows"
            :disabled="disabled"
            class="bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none"
            @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        />

        <!--
            `v-html` ON ESCAPED-THEN-FORMATTED TEXT. The source was escaped
            before any markup was added, so nothing a user typed can become a
            tag - see `escape()` above, which is what makes this safe rather
            than the usual mistake it looks like.
        -->
        <div v-else class="bg-card min-h-32 rounded-md border px-3 py-2 text-sm" v-html="preview" />
    </div>
</template>
