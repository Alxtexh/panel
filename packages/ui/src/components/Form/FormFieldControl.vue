<script setup lang="ts">
/*
 * A COMMENT MUST NEVER SIT BETWEEN `v-else-if` AND `v-else` in the template
 * below. Vue requires them to be ADJACENT siblings, and a comment node between
 * them breaks the chain - the whole component then fails to compile, with an
 * error naming the file and not the comment. This note lives here for that
 * reason, and it is why the following one does too.
 *
 * `autocomplete="new-password"` on a password field is not a nicety. Without it
 * the browser offers the SIGNED-IN ADMINISTRATOR's own saved credentials on a
 * form that edits a colleague's account - so accepting the autofill silently
 * sets somebody else's password to yours.
 */
/**
 * One field control.
 *
 * Extracted so the flat renderer and the recursive tree renderer share exactly
 * one implementation - two copies would drift, and the copy that drifts is
 * always the one you are not looking at.
 *
 * Emits its value only. The parent owns state; this never mutates anything.
 */

import { computed, defineAsyncComponent, onBeforeUnmount, ref, watch } from 'vue'
import { fieldControl } from '../../composables/useFieldControls'
import PkMultiSelect from '../primitives/PkMultiSelect.vue'
import { Checkbox } from '../shadcn/checkbox'
import { Switch } from '../shadcn/switch'
import PkFileUpload from './PkFileUpload.vue'
import type { UploadedFileValue } from './PkFileUpload.vue'
import PkKeyValue from './PkKeyValue.vue'
import PkRichEditor from './PkRichEditor.vue'
import type { FormField } from './types'

/**
 * Async ONLY to break a module cycle, not to defer loading.
 *
 * A repeater renders its children through this component, and this component
 * renders a repeater - so a static import is circular and one of the two
 * resolves to `undefined` at module-evaluation time, depending on which file
 * the bundler reaches first. That failure is silent and looks like a broken
 * field. `defineAsyncComponent` defers the resolution to render time, by which
 * point both modules exist.
 *
 * The cycle is bounded: the server refuses a repeater nested inside a repeater,
 * so the recursion is at most one level deep.
 */
const PkRepeater = defineAsyncComponent(() => import('./PkRepeater.vue'))

// Same cycle, same fix: a builder renders this component for each block's
// fields, so the import must be deferred to render time (roadmap 4.5).
const PkBuilder = defineAsyncComponent(() => import('./PkBuilder.vue'))

const props = withDefaults(
    defineProps<{
        field: FormField
        value: unknown
        error?: string
        options?: { value: any; label: string }[]
        processing?: boolean
        /**
         * Supplied only for a SEARCHABLE select. The component never fetches
         * itself - @alxtexh-enterprise/panel ships no HTTP client (spec §4 rule 2).
         */
        searchOptions?: (term: string) => Promise<{ value: any; label: string }[]>
        /**
         * Performs an upload for a file field. Supplied by the page for the
         * same reason `searchOptions` is: this package ships no HTTP client.
         */
        upload?: (file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>
        discard?: (handle: string) => Promise<void>
        /**
         * The whole form's errors, keyed by dotted path.
         *
         * A repeater needs these rather than the single `error` above, because
         * Laravel reports a child failure at `contacts.2.phone` and only the
         * repeater knows which row that is. Every other control uses `error`.
         */
        errors?: Record<string, string>
        /** Option lists for a repeater's child selects, keyed by child key. */
        childOptions?: Record<string, { value: any; label: string }[]>
    }>(),
    {
        options: () => [],
        processing: false,
        errors: () => ({}),
        childOptions: () => ({}),
    },
)

const emit = defineEmits<{ (e: 'change', value: unknown): void }>()

/* ----------------------------------------------------- searchable select */

const open = ref(false)
const term = ref('')
const results = ref<{ value: any; label: string }[]>([])
const searching = ref(false)
/** The chosen option's label, kept so the closed control shows a name not an id. */
const chosenLabel = ref<string | null>(null)

let debounce: ReturnType<typeof setTimeout> | undefined

watch(term, (value) => {
    if (!props.searchOptions) {
        return
    }

    clearTimeout(debounce)
    searching.value = true

    debounce = setTimeout(async () => {
        try {
            results.value = await props.searchOptions!(value)
        } catch {
            // A failed lookup leaves the previous results rather than blanking
            // the list, which would read as "no such plan exists".
        } finally {
            searching.value = false
        }
    }, 200)
})

async function openSearch() {
    if (props.processing || props.field.disabled) {
        return
    }

    open.value = true

    if (results.value.length === 0 && props.searchOptions) {
        searching.value = true

        try {
            results.value = await props.searchOptions('')
        } finally {
            searching.value = false
        }
    }
}

function pick(option: { value: any; label: string }) {
    chosenLabel.value = option.label
    emit('change', option.value)
    open.value = false
    term.value = ''
}

function clearChoice() {
    chosenLabel.value = null
    emit('change', null)
}

onBeforeUnmount(() => clearTimeout(debounce))

/* ------------------------------------------------------- registered controls */

/**
 * A control somebody registered for this field's type.
 *
 * CONSULTED BEFORE THE BUILT-INS, which is what makes the registry an extension
 * point rather than a fallback: an application can register its own control for
 * `select` and have it used everywhere, rather than being able to add types and
 * never replace one.
 *
 * `computed` because a repeater reuses one instance of this component across
 * rows of different shapes - resolving once on setup would draw the second row
 * with the first row's control.
 */
const registered = computed(() => fieldControl(props.field.type))

/* ------------------------------------------------------------------- chips */

/**
 * Insert a token at the cursor in THIS field's own textarea.
 *
 * FOUND BY ID, not `document.activeElement`. The document designer's own
 * chip strip (the first version of this idea) reads whatever element
 * currently has focus, which is fine when there is exactly one chip-bearing
 * field on the page - a repeater or a form with two message fields would
 * make a chip ambiguous about which field it is offering to fill. Reaching
 * for `#f-${field.key}` targets THIS control specifically, whether or not it
 * happens to be focused.
 *
 * `setRangeText`, not string concatenation - it inserts at the cursor (or
 * replaces a selection) rather than always appending, and it is what the
 * browser itself uses for typed input, so undo/redo keeps working.
 */
function insertChip(token: string) {
    const el = document.getElementById(`f-${props.field.key}`)

    if (!(el instanceof HTMLTextAreaElement) && !(el instanceof HTMLInputElement)) {
        return
    }

    const start = el.selectionStart ?? el.value.length
    const end = el.selectionEnd ?? start

    el.setRangeText(token, start, end, 'end')
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.focus()
}
</script>

<template>
    <!--
        A HIDDEN FIELD RENDERS NOTHING AT ALL - not an empty wrapper, not an
        `sr-only` label. It leaves the parent's `gap` to collapse over it, and a
        screen reader announces no control, because there is none to reach.

        Its value still travels: the form's model already holds it, so the
        submit carries it whether or not anything drew it.
    -->
    <template v-if="field.type === 'hidden'" />

    <div v-else class="flex flex-col gap-1.5">
        <!-- `sr-only`, never removed: the input keeps its accessible name
             when a container hides a visually redundant label (see
             FormField.labelHidden). -->
        <label
            :for="`f-${field.key}`"
            class="text-sm font-medium"
            :class="{ 'sr-only': field.labelHidden }"
        >
            {{ field.label }}
            <span v-if="field.required" class="text-destructive" aria-hidden="true">*</span>
        </label>

        <!--
            A REGISTERED CONTROL WINS. Everything below is a built-in; this is
            how a field type the package has never heard of - or a replacement
            for one it has - gets drawn without editing this file. The contract
            is plain `v-model`, so such a control is an ordinary Vue component
            rather than something shaped for this switch.
        -->
        <component
            :is="registered"
            v-if="registered"
            :field="field"
            :model-value="value"
            :options="options"
            :errors="errors"
            :disabled="field.disabled || processing"
            @update:model-value="(next: unknown) => emit('change', next)"
        />

        <!--
            Searchable select. Options are fetched on demand rather than rendered
            inline, which is what makes a relation with 100k rows pickable at all
            - the alternative ships 100,000 option elements to every browser.
        -->
        <!-- Several values: the same token field the filters use, so "choose
             several of these" looks identical wherever it appears. -->
        <!-- A file is uploaded ahead of the form and held as a handle, so a
             validation error elsewhere never empties the input. -->
        <PkFileUpload
            v-else-if="field.type === 'file' && upload"
            :model-value="(value as UploadedFileValue | null) ?? null"
            :accept="field.accept ?? []"
            :max-kilobytes="field.maxKilobytes ?? 10240"
            :image="field.image ?? false"
            :disabled="field.disabled || processing"
            :upload="upload"
            :discard="discard"
            @update:model-value="(next) => emit('change', next)"
        />

        <PkRepeater
            v-else-if="field.type === 'repeater'"
            :model-value="(value as Record<string, unknown>[] | null) ?? null"
            :children="field.children ?? []"
            :field-key="field.key"
            :item-label="field.itemLabel ?? 'Item'"
            :min-items="field.minItems ?? null"
            :max-items="field.maxItems ?? null"
            :disabled="field.disabled || processing"
            :errors="errors"
            :child-options="childOptions"
            @update:model-value="(next) => emit('change', next)"
        />

        <!--
            ROADMAP 4.5. A builder is blocks of DIFFERENT shapes in a chosen
            order - see PkBuilder for why that is not a repeater. It renders
            its blocks' fields through this very component, so a field type
            works identically inside a block and outside one.
        -->
        <PkBuilder
            v-else-if="field.type === 'builder'"
            :model-value="(value as any) ?? null"
            :blocks="(field.blocks as any) ?? []"
            :max-blocks="field.maxBlocks ?? null"
            :disabled="field.disabled || processing"
            :errors="errors"
            @update:model-value="(next) => emit('change', next)"
        />

        <PkRichEditor
            v-else-if="field.type === 'richtext'"
            :model-value="(value as string | null) ?? null"
            :toolbar="field.toolbar ?? ['bold', 'italic', 'heading', 'list', 'link']"
            :max-length="field.maxLength ?? null"
            :placeholder="field.placeholder ?? 'Write a note…'"
            :disabled="field.disabled || processing"
            @update:model-value="(next) => emit('change', next)"
        />

        <PkKeyValue
            v-else-if="field.type === 'keyvalue'"
            :model-value="(value as Record<string, string> | null) ?? null"
            :key-label="field.keyLabel ?? 'Key'"
            :value-label="field.valueLabel ?? 'Value'"
            :max-pairs="field.maxPairs ?? null"
            :disabled="field.disabled || processing"
            @update:model-value="(next) => emit('change', next)"
        />

        <PkMultiSelect
            v-else-if="field.type === 'multiselect'"
            :model-value="(Array.isArray(value) ? value : []) as (string | number)[]"
            :options="(options ?? []) as any"
            :disabled="field.disabled || processing"
            :max="(field as any).max ?? null"
            :placeholder="field.placeholder ?? 'Select…'"
            @update:model-value="(next) => emit('change', next)"
        />

        <div v-else-if="field.type === 'select' && searchOptions" class="relative">
            <button
                type="button"
                class="border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                :disabled="field.disabled || processing"
                :aria-invalid="!!error"
                @click="openSearch"
            >
                <span :class="chosenLabel || value ? '' : 'text-muted-foreground'">
                    {{ chosenLabel ?? (value ? String(value) : 'Search…') }}
                </span>
                <span
                    v-if="value"
                    class="text-muted-foreground hover:text-foreground ml-2 text-xs"
                    role="button"
                    aria-label="Clear selection"
                    @click.stop="clearChoice"
                >
                    ✕
                </span>
            </button>

            <div
                v-if="open"
                class="bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
            >
                <input
                    v-model="term"
                    type="search"
                    class="h-9 w-full border-b bg-transparent px-3 text-sm outline-none"
                    placeholder="Type to search…"
                    autofocus
                />

                <div class="max-h-56 overflow-y-auto p-1">
                    <p v-if="searching" class="text-muted-foreground px-2 py-2 text-xs">
                        Searching…
                    </p>
                    <p
                        v-else-if="results.length === 0"
                        class="text-muted-foreground px-2 py-2 text-xs"
                    >
                        No matches
                    </p>
                    <button
                        v-for="opt in results"
                        :key="String(opt.value)"
                        type="button"
                        class="hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm"
                        @click="pick(opt)"
                    >
                        {{ opt.label }}
                    </button>
                </div>
            </div>

            <!-- Closes on an outside click without a global listener. -->
            <div v-if="open" class="fixed inset-0 z-40" @click="open = false" />
        </div>

        <select
            v-else-if="field.type === 'select'"
            :id="`f-${field.key}`"
            :value="value ?? ''"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @change="emit('change', ($event.target as HTMLSelectElement).value || null)"
        >
            <option value="">-</option>
            <option v-for="opt in options" :key="String(opt.value)" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>

        <!--
            A SWITCH FOR `toggle`, A BOX FOR `checkbox`, and they are not the
            same control. This drew a bare `<input type="checkbox">` for
            `toggle`, so the field was called one thing and rendered another -
            and there was no way to ask for an actual checkbox at all.

            A switch reads as state ("Notifications: on"); a checkbox reads as
            an assertion you tick while filling a form in ("I confirm this").
            Same column, same boolean, different sentence beside it.
        -->
        <label v-else-if="field.type === 'toggle'" class="flex items-center gap-2 text-sm">
            <Switch
                :id="`f-${field.key}`"
                :model-value="!!value"
                :disabled="field.disabled || processing"
                @update:model-value="(checked: boolean) => emit('change', checked)"
            />
            <span class="text-muted-foreground">{{ field.help ?? 'Enabled' }}</span>
        </label>

        <label v-else-if="field.type === 'checkbox'" class="flex items-center gap-2 text-sm">
            <Checkbox
                :id="`f-${field.key}`"
                :model-value="!!value"
                :disabled="field.disabled || processing"
                @update:model-value="(checked) => emit('change', checked === true)"
            />
            <span class="text-muted-foreground">{{ field.help ?? field.label }}</span>
        </label>

        <textarea
            v-else-if="field.type === 'textarea'"
            :id="`f-${field.key}`"
            :value="(value as string) ?? ''"
            :rows="field.rows ?? 3"
            :placeholder="field.placeholder"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @input="emit('change', ($event.target as HTMLTextAreaElement).value)"
        />

        <input
            v-else
            :id="`f-${field.key}`"
            :type="
                field.type === 'number'
                    ? 'number'
                    : field.type === 'date'
                      ? 'date'
                      : field.type === 'datetime'
                        ? 'datetime-local'
                        : field.type === 'password'
                          ? 'password'
                          : (field.inputType ?? 'text')
            "
            :value="value ?? ''"
            :placeholder="field.placeholder"
            :autocomplete="field.type === 'password' ? 'new-password' : undefined"
            :min="field.min"
            :max="field.max"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @input="emit('change', ($event.target as HTMLInputElement).value)"
        />

        <!--
            THE PRESETS SIT BESIDE THE INPUT, not instead of it. Most answers to
            "how many days" are one of four; occasionally the answer really is 47
            because a contract says so, and a control that made that
            unrepresentable would be worse than the bare box it replaced.

            BUTTONS, NOT A RADIO GROUP, because these are shortcuts that WRITE
            INTO the input rather than a separate choice - the field's value is
            still whatever the input holds. A radio group here would be a second
            control claiming the same value, and the two would disagree the
            moment somebody typed.

            `type="button"` is load-bearing: the default inside a form is
            `submit`, so without it every chip saves the form.
        -->
        <div
            v-if="field.type === 'number' && (field.presets as number[] | undefined)?.length"
            class="flex flex-wrap gap-1.5"
        >
            <button
                v-for="preset in field.presets as number[]"
                :key="preset"
                type="button"
                :disabled="field.disabled || processing"
                class="focus-visible:ring-ring rounded-md border px-2.5 py-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                :class="
                    // eslint-disable-next-line eqeqeq
                    value != null && value == preset
                        ? 'border-primary bg-primary/10 text-primary font-medium'
                        : 'border-input hover:bg-muted'
                "
                :aria-pressed="
                    // eslint-disable-next-line eqeqeq
                    value != null && value == preset
                "
                @click="emit('change', String(preset))"
            >
                {{ preset }}
            </button>
        </div>

        <!--
            CHIPS SIT BESIDE THE FIELD for the same reason presets do above: a
            chip WRITES INTO the textarea rather than being a second control
            with its own value, so it belongs next to what it edits rather
            than in place of it.
        -->
        <div
            v-if="field.type === 'textarea' && field.chips && Object.keys(field.chips).length"
            class="flex flex-wrap gap-1.5"
        >
            <button
                v-for="(meaning, token) in field.chips"
                :key="token"
                type="button"
                :title="meaning"
                :disabled="field.disabled || processing"
                class="border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50"
                @click="insertChip(String(token))"
            >
                {{ token }}
            </button>
        </div>

        <p v-if="error" class="text-destructive text-xs" role="alert">
            {{ error }}
        </p>
        <p v-else-if="field.help && field.type !== 'toggle'" class="text-muted-foreground text-xs">
            {{ field.help }}
        </p>
    </div>
</template>
