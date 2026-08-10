<script setup lang="ts">
/**
 * The text input every packaged form field draws.
 *
 * THE CLASSES ARE THE REFERENCE APP'S, VERBATIM. This is a MOVE, not a redesign
 * - the demo's `ui/input/Input.vue` is where they come from, and copying them
 * character for character is the whole point: a generated portal that renders a
 * slightly different input is a portal that looks slightly cheaper for a reason
 * nobody can name.
 *
 * WITHOUT `cn`, `reka-ui` OR `@vueuse/core`. This package has no dependencies
 * but Vue, and adding three to merge a class string would put them in every
 * consumer's bundle. An array binding is what Vue does with `:class` anyway; the
 * conflict resolution `tailwind-merge` adds is not needed when the caller is
 * appending rather than overriding.
 */
const props = defineProps<{
    defaultValue?: string | number
    modelValue?: string | number
    class?: unknown
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string | number): void }>()

const BASE =
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
</script>

<template>
    <input
        data-slot="input"
        :value="props.modelValue ?? props.defaultValue"
        :class="[BASE, props.class]"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
</template>
