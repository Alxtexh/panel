<script setup lang="ts">
/**
 * Code, kept exactly as typed - roadmap 4.5.
 *
 * THREE THINGS A TEXTAREA GETS WRONG about a config snippet, all fixed here:
 * a monospace font so columns line up, TAB THAT INDENTS rather than moving
 * focus, and line numbers so "the error is on line 14" means something.
 *
 * TAB IS TRAPPED ONLY WHILE TYPING CODE, and Escape releases it. A field that
 * swallows Tab is a field a keyboard user cannot leave - so the trap is
 * announced in the hint, and Escape restores normal focus movement before
 * Tab is pressed again.
 *
 * VALIDATION HERE IS A COURTESY. A `json` field says so beside the cursor;
 * the server rule is what actually refuses the save, because there is no
 * client-side check an attacker cannot skip.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue?: string | null
        language?: string
        rows?: number
        disabled?: boolean
        id?: string
    }>(),
    { modelValue: '', language: 'plain', rows: 14, disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const area = ref<HTMLTextAreaElement | null>(null)

/** Released by Escape so the field never becomes a keyboard trap. */
const tabIndents = ref(true)

const text = computed(() => props.modelValue ?? '')

const lines = computed(() => Math.max(text.value.split('\n').length, 1))

/** Only for languages where "malformed" is a thing this control can see. */
const problem = computed(() => {
    if (props.language !== 'json' || text.value.trim() === '') {
        return null
    }

    try {
        JSON.parse(text.value)

        return null
    } catch (e) {
        return e instanceof Error ? e.message : 'Not valid JSON.'
    }
})

function onInput(event: Event) {
    emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        tabIndents.value = false

        return
    }

    // Any other key means they are typing code again.
    if (event.key !== 'Tab') {
        tabIndents.value = true
    }

    if (event.key !== 'Tab' || !tabIndents.value) {
        return
    }

    event.preventDefault()

    const el = event.target as HTMLTextAreaElement
    const start = el.selectionStart
    const end = el.selectionEnd
    const next = `${text.value.slice(0, start)}    ${text.value.slice(end)}`

    emit('update:modelValue', next)

    // Restore the caret after Vue has written the new value back.
    requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 4
    })
}
</script>

<template>
    <div class="space-y-1">
        <div class="bg-card flex overflow-hidden rounded-md border font-mono text-xs">
            <!-- Line numbers. `aria-hidden`: a screen reader reading "one two
                 three" down the side of a code block helps nobody. -->
            <div
                aria-hidden="true"
                class="text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
            >
                <div v-for="n in lines" :key="n">{{ n }}</div>
            </div>

            <textarea
                :id="id"
                ref="area"
                :value="text"
                :rows="rows"
                :disabled="disabled"
                spellcheck="false"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                class="w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none"
                @input="onInput"
                @keydown="onKeydown"
            />
        </div>

        <p class="text-muted-foreground text-xs">
            {{ language === 'plain' ? 'Plain text' : language.toUpperCase() }}. Tab indents; press
            Escape first to move focus out.
        </p>

        <p v-if="problem" class="text-destructive text-xs">{{ problem }}</p>
    </div>
</template>
