<script setup lang="ts">
/**
 * A one-time code, as separate boxes.
 *
 * THE SLOT CLASSES ARE THE REFERENCE APP'S, VERBATIM, so a two-factor challenge
 * in a generated portal looks like the one in the demo. What is NOT the same is
 * the machinery: the demo's version composes `vue-input-otp`, `reka-ui` and
 * `@vueuse/core`, and this package has no dependencies but Vue.
 *
 * ONE REAL INPUT, LAID OVER THE BOXES. That is what the library does too, and
 * it is the only approach that keeps paste, autofill, the software keyboard and
 * `autocomplete="one-time-code"` working - six separate inputs break all four,
 * and break them worst on the phone where a texted code arrives.
 *
 * THE CARET IS DRAWN, because the real one is invisible: the input is
 * transparent, so a blinking bar in the active box is the only feedback that
 * typing will land there.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        modelValue?: string
        length?: number
        disabled?: boolean
        autofocus?: boolean
        name?: string
        id?: string
    }>(),
    { modelValue: '', length: 6, disabled: false, autofocus: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const focused = ref(false)

const characters = computed(() =>
    Array.from({ length: props.length }, (_, i) => props.modelValue[i] ?? ''),
)

/** The box that will receive the next keystroke, clamped to the last one. */
const activeIndex = computed(() => Math.min(props.modelValue.length, props.length - 1))

function onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value

    // DIGITS ONLY AND NEVER LONGER THAN THE CODE. A pasted "123 456" should
    // work, and a pasted paragraph should not fill the boxes with nonsense.
    emit('update:modelValue', raw.replace(/\D/g, '').slice(0, props.length))
}
</script>

<template>
    <div class="relative flex items-center gap-2 has-disabled:opacity-50">
        <input
            :id="props.id"
            :name="props.name"
            :value="props.modelValue"
            :disabled="props.disabled"
            :autofocus="props.autofocus"
            inputmode="numeric"
            autocomplete="one-time-code"
            :maxlength="props.length"
            class="absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed"
            @input="onInput"
            @focus="focused = true"
            @blur="focused = false"
        />

        <div
            v-for="(character, index) in characters"
            :key="index"
            data-slot="input-otp-slot"
            :data-active="focused && index === activeIndex"
            class="data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
        >
            {{ character }}

            <div
                v-if="focused && index === activeIndex && character === ''"
                class="pointer-events-none absolute inset-0 flex items-center justify-center"
            >
                <div class="bg-foreground h-4 w-px animate-pulse duration-1000" />
            </div>
        </div>
    </div>
</template>
