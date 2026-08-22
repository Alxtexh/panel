<script setup lang="ts">
/**
 * The control for `TagsField` - free-form labels somebody types.
 *
 * ENTER AND COMMA BOTH COMMIT, because people type both and only one of them is
 * ever documented. A control that swallows a comma into the middle of a tag
 * produces "vip, night shift" as a single label, which then never matches
 * anything and is invisible until somebody filters on it.
 *
 * BACKSPACE ON AN EMPTY INPUT REMOVES THE LAST TAG. It is the behaviour every
 * other token field has, and without it the only way to undo a mistake is to
 * find a small × with the mouse.
 *
 * DUPLICATES ARE DROPPED SILENTLY, and that is the right kind of silence: adding
 * a tag that is already there is not an error, it is a no-op, and telling
 * somebody off for it would be noise. Case is preserved as typed but compared
 * case-insensitively, so "VIP" and "vip" do not both end up on the record.
 *
 * THE LIMITS COME FROM THE SERVER because they are enforced there. Showing a
 * count of 23/25 is only honest if 25 is the number the validator uses, and the
 * field puts it in the schema for exactly that reason.
 */
import { computed, ref } from 'vue'

defineOptions({ inheritAttrs: false })

interface TagsSchema {
    key: string
    max?: number
    maxLength?: number
    suggestions?: string[]
    placeholder?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: TagsSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const draft = ref('')

const tags = computed<string[]>(() =>
    Array.isArray(props.modelValue) ? (props.modelValue as string[]) : [],
)

const full = computed(() => tags.value.length >= (props.field.max ?? 25))

/** Suggestions that are not already on the record. */
const available = computed(() =>
    (props.field.suggestions ?? []).filter(
        (suggestion) => !tags.value.some((tag) => tag.toLowerCase() === suggestion.toLowerCase()),
    ),
)

function add(raw: string) {
    const tag = raw.trim().slice(0, props.field.maxLength ?? 40)

    if (tag === '' || full.value) {
        draft.value = ''

        return
    }

    if (tags.value.some((existing) => existing.toLowerCase() === tag.toLowerCase())) {
        draft.value = ''

        return
    }

    emit('update:modelValue', [...tags.value, tag])
    draft.value = ''
}

function remove(index: number) {
    emit(
        'update:modelValue',
        tags.value.filter((_, i) => i !== index),
    )
}

function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ',') {
        // Enter inside a form would SUBMIT it, saving a record because somebody
        // finished typing a tag.
        event.preventDefault()
        add(draft.value)

        return
    }

    if (event.key === 'Backspace' && draft.value === '' && tags.value.length > 0) {
        remove(tags.value.length - 1)
    }
}
</script>

<template>
    <div class="flex flex-col gap-1.5">
        <div
            class="border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5"
            :class="disabled ? 'opacity-50' : ''"
        >
            <span
                v-for="(tag, index) in tags"
                :key="`${tag}-${index}`"
                class="bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
            >
                {{ tag }}
                <button
                    v-if="!disabled"
                    type="button"
                    class="text-muted-foreground hover:text-foreground"
                    :aria-label="`Remove ${tag}`"
                    @click="remove(index)"
                >
                    ×
                </button>
            </span>

            <input
                v-model="draft"
                type="text"
                class="min-w-24 flex-1 bg-transparent text-sm outline-none"
                :placeholder="full ? '' : (field.placeholder ?? 'Add a tag…')"
                :disabled="disabled || full"
                :maxlength="field.maxLength ?? 40"
                @keydown="onKeydown"
                @blur="add(draft)"
            />
        </div>

        <div
            v-if="available.length > 0 && !full && !disabled"
            class="flex flex-wrap items-center gap-1.5"
        >
            <span class="text-muted-foreground text-xs font-normal">Suggestions:</span>
            <button
                v-for="suggestion in available"
                :key="suggestion"
                type="button"
                class="hover:bg-accent rounded border px-2 py-0.5 text-xs"
                @click="add(suggestion)"
            >
                {{ suggestion }}
            </button>
        </div>

        <p v-if="full" class="text-muted-foreground text-xs font-normal">
            That is the maximum of {{ field.max ?? 25 }} tags.
        </p>
    </div>
</template>
