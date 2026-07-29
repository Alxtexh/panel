<script setup lang="ts">
/**
 * The control for `ColourField`.
 *
 * TWO WAYS IN, ONE VALUE. The native swatch is how somebody picks a colour they
 * are choosing; the text box is how somebody enters a colour they already have -
 * a brand hex from a document, which is the more common case in a panel and the
 * one a colour wheel makes needlessly hard.
 *
 * THE TEXT BOX IS FORGIVING ON THE WAY IN AND STRICT ON THE WAY OUT. People
 * paste `1E90FF`, `#1e90ff` and `1e90ff ` - all obviously the same intent - so
 * the `#` is added and whitespace trimmed here. Anything that is still not a
 * valid hex is passed through UNCHANGED rather than silently corrected, because
 * the server's rule is the authority and a client that quietly rewrote the value
 * would hide the mistake rather than report it.
 *
 * `type="color"` CANNOT SHOW AN EMPTY STATE - it renders black for null, which
 * looks like a choice somebody made. So the swatch is only bound when there is a
 * value, and the absence is shown as a chequerboard instead.
 */
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

interface ColourSchema {
    key: string
    presets?: string[]
    placeholder?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: ColourSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

const value = computed(() => (typeof props.modelValue === 'string' ? props.modelValue : ''))

const valid = computed(() => HEX.test(value.value))

function normalise(raw: string): string {
    const trimmed = raw.trim()

    if (trimmed === '') return ''

    const withHash = trimmed.startsWith('#') ? trimmed : `#${trimmed}`

    // Only lower-cased when it IS a colour; an invalid string is somebody's
    // half-typed input and rewriting it moves their cursor.
    return HEX.test(withHash) ? withHash.toLowerCase() : trimmed
}

function onText(event: Event) {
    emit('update:modelValue', normalise((event.target as HTMLInputElement).value))
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
            <!-- The chequerboard is the "no colour yet" state; a black swatch
                 would read as a colour somebody chose. -->
            <span
                v-if="!valid"
                class="border-input size-9 shrink-0 rounded-md border"
                style="
                    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
                        linear-gradient(-45deg, #ccc 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, #ccc 75%),
                        linear-gradient(-45deg, transparent 75%, #ccc 75%);
                    background-size: 8px 8px;
                    background-position: 0 0, 0 4px, 4px -4px, -4px 0;
                "
                aria-hidden="true"
            />

            <input
                v-else
                type="color"
                class="border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent"
                :value="value"
                :disabled="disabled"
                :aria-label="`Colour for ${field.key}`"
                @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />

            <input
                type="text"
                class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                :value="value"
                :disabled="disabled"
                :placeholder="field.placeholder ?? '#1e90ff'"
                spellcheck="false"
                @input="onText"
            />
        </div>

        <div v-if="(field.presets ?? []).length > 0 && !disabled" class="flex flex-wrap gap-1.5">
            <button
                v-for="preset in field.presets"
                :key="preset"
                type="button"
                class="size-6 rounded border"
                :class="value.toLowerCase() === preset.toLowerCase() ? 'ring-ring ring-2' : ''"
                :style="{ backgroundColor: preset }"
                :aria-label="preset"
                :title="preset"
                @click="emit('update:modelValue', preset.toLowerCase())"
            />
        </div>
    </div>
</template>
