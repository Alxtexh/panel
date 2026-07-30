<script setup lang="ts">
/**
 * The control for `VisualSelectField` - one choice, every option drawn as itself.
 *
 * A REAL `<input type="radio">` GROUP UNDER THE TILES, for the same reason
 * `PkRadioGroup` uses one: arrow keys move between options, the group is one tab
 * stop, and a screen reader announces "2 of 6". A grid of divs with click
 * handlers gets none of that, and a visual picker is precisely where somebody
 * navigating by keyboard has the least other information to go on.
 *
 * THE INPUT IS VISUALLY HIDDEN RATHER THAN ABSENT. `sr-only` keeps it in the
 * accessibility tree and focusable; `display: none` or `hidden` would remove it
 * from both, leaving a control that looks operable and cannot be reached. The
 * focus ring is drawn on the tile via `peer-focus-visible`, so what is focused
 * and what is outlined are the same thing.
 *
 * WHAT THIS COMPONENT DOES NOT KNOW is what any option looks like. It draws a
 * tile, a selected state and a label; the option's appearance comes from a
 * renderer resolved by name out of `useOptionPreviews`. That is the whole design:
 * this file never grows a case for the seventh code-box style.
 */
import { computed } from 'vue'
import { optionPreview, registeredOptionPreviews } from '../../composables/useOptionPreviews'

defineOptions({ inheritAttrs: false })

interface Option {
    value: string | number
    label: string
}

interface VisualSelectSchema {
    key: string
    preview?: string | null
    columns?: number
    /** `tiles` (default) or `segmented` — a shape, never a class list. */
    layout?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: VisualSelectSchema
        modelValue: unknown
        options?: Option[]
        disabled?: boolean
    }>(),
    { options: () => [], disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

/**
 * Resolved once for the whole group, not per option - every tile in a field uses
 * the same renderer, and looking it up six times to get the same answer is six
 * chances for the answer to differ mid-render.
 */
const renderer = computed(() => (props.field.preview ? optionPreview(props.field.preview) : undefined))

/**
 * NAMED A RENDERER, GOT NOTHING. Distinguished from "declared no renderer",
 * which is a legitimate mode: a plain grid of labelled tiles is still the right
 * control for six choices worth seeing.
 *
 * Naming one that nothing registered is a wiring bug, and falling back quietly
 * would make it look exactly like the deliberate case - a picker somebody
 * decided to keep plain. So the tile says so, and says what IS registered,
 * because the usual cause is a typo or an entry point that never ran.
 */
const missing = computed(() => Boolean(props.field.preview) && !renderer.value)

/**
 * ONE PILL WITH SEGMENTS, for a choice with two answers.
 *
 * Two large cards for colour-versus-monochrome read as six options of which four
 * went missing, and take a quarter of the form for something that is essentially
 * a switch. The segments keep their renderers - small and inline - so the
 * appearance is still shown, which is the entire reason this control exists.
 */
const segmented = computed(() => props.field.layout === 'segmented')

/**
 * A COUNT TURNED INTO A CLASS HERE, not in PHP. The schema said "three across";
 * what three means at 390px is the client's problem, and the answer is two, then
 * one. Written out rather than interpolated because Tailwind scans for whole
 * class names - `grid-cols-${n}` is a class that exists in no build.
 */
const gridClass = computed(() => {
    switch (props.field.columns ?? 3) {
        case 1:
            return 'grid-cols-1'
        case 2:
            return 'grid-cols-1 sm:grid-cols-2'
        case 4:
            return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        case 5:
            return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
        case 6:
            return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
        default:
            return 'grid-cols-2 sm:grid-cols-3'
    }
})

/**
 * COMPARED LOOSELY, deliberately - an option value arrives from JSON as the
 * number `3` while the record's value came back from a form round trip as the
 * string `"3"`, and strict equality then shows nothing selected on a form that
 * has a perfectly good value.
 */
function isChosen(option: Option): boolean {
    // eslint-disable-next-line eqeqeq
    return props.modelValue != null && option.value == (props.modelValue as never)
}
</script>

<template>
    <!-- ------------------------------------------------------------ segmented -->
    <div
        v-if="segmented"
        role="radiogroup"
        class="bg-muted/60 inline-flex w-fit max-w-full items-stretch gap-1 rounded-lg p-1"
        :class="disabled ? 'opacity-50' : ''"
    >
        <label
            v-for="option in options"
            :key="String(option.value)"
            class="relative flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
            :class="[
                isChosen(option)
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                disabled ? '' : 'cursor-pointer',
            ]"
        >
            <input
                type="radio"
                class="peer sr-only"
                :name="`f-${field.key}`"
                :value="option.value"
                :checked="isChosen(option)"
                :disabled="disabled"
                @change="emit('update:modelValue', option.value)"
            />

            <span
                class="ring-ring pointer-events-none absolute inset-0 rounded-md peer-focus-visible:ring-2"
                aria-hidden="true"
            />

            <!-- The renderer, inline and small. `scale` rather than a second set
                 of sizes in every renderer: one component draws the option and
                 the layout decides how big it is. -->
            <span v-if="renderer" class="flex shrink-0 scale-75 items-center" aria-hidden="true">
                <component :is="renderer" :value="option.value" :label="option.label" :selected="isChosen(option)" />
            </span>

            <span class="whitespace-nowrap">{{ option.label }}</span>
        </label>

        <p v-if="options.length === 0" class="text-muted-foreground px-2 py-1 text-xs">
            Nothing to choose from yet.
        </p>
    </div>

    <!-- ---------------------------------------------------------------- tiles -->
    <div v-else role="radiogroup" class="grid gap-3" :class="gridClass">
        <label
            v-for="option in options"
            :key="String(option.value)"
            class="group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors"
            :class="[
                isChosen(option)
                    ? 'border-primary ring-primary/30 bg-primary/5 ring-2'
                    : 'border-border hover:border-muted-foreground/40',
                disabled ? 'opacity-50' : 'cursor-pointer',
            ]"
        >
            <input
                type="radio"
                class="peer sr-only"
                :name="`f-${field.key}`"
                :value="option.value"
                :checked="isChosen(option)"
                :disabled="disabled"
                @change="emit('update:modelValue', option.value)"
            />

            <!-- The ring the keyboard sees. Drawn on the tile, driven by the
                 input's own focus state, so focus and outline cannot disagree. -->
            <span
                class="ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2"
                aria-hidden="true"
            />

            <!-- A FIXED-HEIGHT STAGE, so a grid of six renderers that each
                 measure differently still lines up. Without it the tallest
                 option sets the row height and the rest float. -->
            <span
                class="bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded"
                aria-hidden="true"
            >
                <component
                    :is="renderer"
                    v-if="renderer"
                    :value="option.value"
                    :label="option.label"
                    :selected="isChosen(option)"
                />
                <span v-else-if="missing" class="text-destructive px-1 text-center text-[10px] leading-tight">
                    no preview
                </span>
            </span>

            <span class="text-center text-xs font-medium">{{ option.label }}</span>
        </label>

        <!-- An empty option list is a real state - a tenant-scoped list that
             resolved to nothing - and saying so beats an invisible control. -->
        <p v-if="options.length === 0" class="text-muted-foreground col-span-full text-sm">
            Nothing to choose from yet.
        </p>

        <!-- Said ONCE for the group rather than in six identical tiles, and it
             names what is registered because the cause is nearly always a typo
             or an entry point that never ran. -->
        <p v-if="missing && options.length > 0" class="text-muted-foreground col-span-full text-xs">
            No preview registered for <code>{{ field.preview }}</code
            >. Registered: {{ registeredOptionPreviews().join(', ') || 'none' }}.
        </p>
    </div>
</template>
