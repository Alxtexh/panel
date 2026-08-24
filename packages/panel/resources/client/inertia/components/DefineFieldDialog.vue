<script setup lang="ts">
/**
 * "+ Add a field to every {resource}", from the record form itself.
 *
 * WHERE THE NEED ARISES IS WHERE THE DOOR IS. The operator thinking "we
 * should track the fibre node" is looking at a client's form when the
 * thought occurs - a definitions screen under Configuration is where
 * definitions are MANAGED, not where the need shows up, and someone who has
 * never opened it will never find it. So the form offers the door, and the
 * Custom Fields screen stays the place to list, reorder and remove.
 *
 * THE RISK OF THIS PLACEMENT IS SAYING IT QUIETLY. A field defined here
 * appears on EVERY record of the resource - every colleague's create and
 * edit form, and the list - and an operator who thought they were adding a
 * note to one client has been handed a schema migration. The banner at the
 * top is not decoration; it is the whole reason this dialog may exist.
 *
 * POSTS THROUGH THE SAME VALIDATED PATH the Custom Fields screen uses -
 * `RecordController::store` for the custom-fields resource - so the rules,
 * the duplicate-key rejection and the authorization are one implementation,
 * not a copy. On success the page fully reloads: the schema fingerprint
 * changed, and a partial reload would keep serving the cached shape without
 * the new field.
 */
import { router } from '@inertiajs/vue3'
import { reactive, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { PkButton as Button, PkModal } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    open: boolean
    /** The resource key the definition targets, e.g. `clients`. */
    resource: string
    /** Its SINGULAR label, for the copy: "every client". */
    label: string
    /** The types an operator may choose - `CustomFieldFactory::types()`. */
    types: string[]
    /** Where definitions are created, e.g. `/custom-fields`. */
    endpoint: string
}>()

const emit = defineEmits<{ (e: 'close'): void }>()

const busy = ref(false)
const errors = ref<Record<string, string>>({})

const draft = reactive({
    type: 'text',
    key: '',
    label: '',
    required: false,
})

/** value/label pairs for a `select` field's choices. */
const choices = ref<{ value: string; label: string }[]>([])

watch(
    () => props.open,
    (open) => {
        if (open) {
            draft.type = 'text'
            draft.key = ''
            draft.label = ''
            draft.required = false
            choices.value = []
            errors.value = {}
        }
    },
)

/**
 * The key is derived from the label until somebody edits it deliberately -
 * "Account manager" becomes `account_manager` without asking the operator to
 * invent an identifier, while still leaving it correctable.
 */
const keyTouched = ref(false)

function syncKey() {
    if (!keyTouched.value) {
        draft.key = draft.label
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '_')
            .replace(/^_+|_+$/g, '')
            .slice(0, 64)
    }
}

function submit() {
    const options: Record<string, string> = {}

    for (const pair of choices.value) {
        if (pair.value.trim() !== '') {
            options[pair.value.trim()] = pair.label.trim() || pair.value.trim()
        }
    }

    busy.value = true
    errors.value = {}

    router.post(
        props.endpoint,
        {
            resource: props.resource,
            type: draft.type,
            key: draft.key,
            label: draft.label,
            required: draft.required,
            options: draft.type === 'select' ? options : null,
        },
        {
            preserveState: true,
            onError: (bag) => {
                errors.value = bag as Record<string, string>
                busy.value = false
            },
            onSuccess: () => {
                busy.value = false
                emit('close')
                toast.success(`The field is now on every ${props.label.toLowerCase()} form.`)
                // FULL reload, not partial: the schema fingerprint changed,
                // and only a fresh page carries the new field.
                router.reload()
            },
        },
    )
}
</script>

<template>
    <PkModal
        :open="open"
        title="Add a field"
        :description="`A new field on the ${label.toLowerCase()} form.`"
        size="form"
        :busy="busy"
        @close="emit('close')"
    >
        <div class="flex flex-col gap-4">
            <!-- The whole reason this dialog may exist - see the docblock. -->
            <p
                class="border-primary/30 bg-primary/5 rounded-md border px-3 py-2 text-sm"
                role="note"
            >
                This adds the field to <strong>every {{ label.toLowerCase() }}</strong> — everyone's
                create and edit forms, and the list. It is not a note on this record alone.
            </p>

            <p v-if="errors._conflict" class="text-destructive text-sm">{{ errors._conflict }}</p>

            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">Label</span>
                    <input
                        v-model="draft.label"
                        type="text"
                        maxlength="80"
                        placeholder="Account manager"
                        class="border-input bg-background rounded-md border px-3 py-1.5 text-sm"
                        :disabled="busy"
                        @input="syncKey"
                    />
                    <span v-if="errors.label" class="text-destructive text-xs">{{
                        errors.label
                    }}</span>
                </label>

                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">Type</span>
                    <select
                        v-model="draft.type"
                        class="border-input bg-background rounded-md border px-3 py-1.5 text-sm capitalize"
                        :disabled="busy"
                    >
                        <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
                    </select>
                    <span v-if="errors.type" class="text-destructive text-xs">{{
                        errors.type
                    }}</span>
                </label>

                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">Key</span>
                    <input
                        v-model="draft.key"
                        type="text"
                        maxlength="64"
                        class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                        :disabled="busy"
                        @input="keyTouched = true"
                    />
                    <span class="text-muted-foreground text-xs font-normal">
                        How the value is stored. Cannot change once records use it.
                    </span>
                    <span v-if="errors.key" class="text-destructive text-xs">{{ errors.key }}</span>
                </label>

                <label class="flex items-center gap-2 self-end pb-1.5 text-sm">
                    <input
                        v-model="draft.required"
                        type="checkbox"
                        class="accent-primary size-4"
                        :disabled="busy"
                    />
                    Required
                </label>
            </div>

            <div v-if="draft.type === 'select'" class="flex flex-col gap-2">
                <span class="text-xs font-medium">Choices</span>

                <div v-for="(pair, index) in choices" :key="index" class="flex items-center gap-2">
                    <input
                        v-model="pair.value"
                        type="text"
                        placeholder="stored value"
                        class="border-input bg-background w-1/2 rounded-md border px-3 py-1.5 font-mono text-xs"
                        :disabled="busy"
                    />
                    <input
                        v-model="pair.label"
                        type="text"
                        placeholder="What the operator sees"
                        class="border-input bg-background w-1/2 rounded-md border px-3 py-1.5 text-sm"
                        :disabled="busy"
                    />
                    <button
                        type="button"
                        class="text-muted-foreground hover:text-destructive shrink-0"
                        :aria-label="`Remove choice ${index + 1}`"
                        :disabled="busy"
                        @click="choices.splice(index, 1)"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="size-3.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        >
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    class="w-fit"
                    :disabled="busy"
                    @click="choices.push({ value: '', label: '' })"
                >
                    Add choice
                </Button>
                <span v-if="errors.options" class="text-destructive text-xs">{{
                    errors.options
                }}</span>
            </div>
        </div>

        <template #footer>
            <Button variant="ghost" size="sm" :disabled="busy" @click="emit('close')">
                Cancel
            </Button>
            <Button size="sm" :disabled="busy || !draft.label || !draft.key" @click="submit">
                {{ busy ? 'Adding…' : `Add to every ${label.toLowerCase()}` }}
            </Button>
        </template>
    </PkModal>
</template>
