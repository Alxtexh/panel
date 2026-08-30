<script setup lang="ts">
/**
 * A labelled input with its error, for the packaged sign-in screens.
 *
 * WHY THIS EXISTS RATHER THAN `Input` AND `Label` SEPARATELY. The reference
 * app's auth screens compose four shadcn components and a `cn()` helper per
 * field. Those are the APPLICATION's - a consumer installing Alxtexhpanel has no
 * `@/components/ui/input` - and vendoring shadcn into the package to serve
 * three screens would be a second component library nobody asked for.
 *
 * SO THE CLASSES ARE THE SAME AND THE PACKAGING IS NOT. What renders is the
 * same markup the demo's `Input` and `Label` produce, which is what keeps a
 * generated login looking like the one in the reference app.
 *
 * THE ERROR SLOT IS PART OF THE FIELD, not left to each screen. A validation
 * message rendered by the caller is one a caller can forget, and the failure -
 * a form that refuses a submission and says nothing - is the worst kind on a
 * login screen, because the person cannot tell whether they typed the password
 * wrong or the button is broken.
 */
import { computed, ref } from 'vue'
import { INPUT_COPY } from '@alxtexh-enterprise/panel'

const props = withDefaults(
    defineProps<{
        id: string
        name: string
        label: string
        type?: string
        error?: string
        autocomplete?: string
        placeholder?: string
        required?: boolean
        autofocus?: boolean
        /**
         * `defaultValue` rather than `value`, deliberately: the field stays
         * uncontrolled and therefore editable. A bound value with no handler
         * puts the seeded text back on every keystroke.
         */
        defaultValue?: string
        /**
         * Safari's password-generation hint, passed straight through.
         *
         * THE SERVER COMPOSES IT from the panel's own policy. A browser that
         * generates a password the server then rejects is the most annoying
         * possible first impression, and this is the only way to prevent it.
         */
        passwordRules?: string
    }>(),
    { type: 'text', required: false, autofocus: false },
)

/**
 * A password field reveals, and this is the field's job rather than each
 * screen's.
 *
 * THE REASON IS FAILED SIGN-INS, not convenience. A panel that enforces a
 * password policy hands people long generated strings, and typing one blind on
 * a phone keyboard fails often enough that "wrong password" stops meaning
 * anything. The reference app had this on every password input and the packaged
 * screens did not, which is exactly the sort of difference that makes a
 * generated portal feel cheaper than the demo it was copied from.
 *
 * THE TYPE IS SWAPPED, NOT THE COMPONENT. Re-rendering a different input would
 * drop what was typed - and dropping a half-typed password when somebody asks
 * to see it is worse than not offering the button.
 */
const revealed = ref(false)

const isPassword = computed(() => props.type === 'password')

const inputType = computed(() => (isPassword.value && revealed.value ? 'text' : props.type))

/**
 * What is in the field, tracked - and this is not the ceremony it looks like.
 *
 * IT WAS WRITTEN WITHOUT THIS AND THE REVEAL CLEARED THE PASSWORD. Vue treats
 * `:value` on an input as a DOM PROPERTY, so every re-render assigns it - and
 * toggling the type IS a re-render. Binding the prop directly meant the patch
 * wrote `defaultValue` (usually undefined, so an empty string) over whatever had
 * been typed, at the exact moment somebody asked to check their typing.
 *
 * The browser test asserted the value survived and failed on the first run,
 * which is the only reason this is not still shipping.
 *
 * SEEDED FROM `defaultValue`, NOT BOUND TO IT. A prefill fills the field once;
 * after that the field is the person's.
 */
const value = ref(props.defaultValue ?? '')

const inputClass = `border-input selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 ${INPUT_COPY}`
</script>

<template>
    <div class="grid gap-2">
        <!--
            ONE LABEL, AND THE ROW AROUND IT IS THE SLOT.

            The password field wants "Forgot password?" on the same line as its
            label, and the first version of this let the CALLER draw that label
            while this component rendered a second, screen-reader-only one for
            the same input. Two labels pointing at one field is not a style
            problem: the accessible name becomes "Password Password", and
            nothing visual shows it.
        -->
        <div class="flex items-center justify-between">
            <label
                :for="id"
                class="flex items-center gap-2 text-sm leading-none font-medium select-none"
            >
                {{ label }}
            </label>

            <slot name="labelSuffix" />
        </div>

        <div class="relative">
            <input
                :id="id"
                :name="name"
                :type="inputType"
                :required="required"
                :autofocus="autofocus"
                :autocomplete="autocomplete"
                :placeholder="placeholder"
                :passwordrules="passwordRules"
                :value="value"
                :aria-invalid="error ? 'true' : undefined"
                @input="value = ($event.target as HTMLInputElement).value"
                :aria-describedby="error ? `${id}-error` : undefined"
                :class="[inputClass, isPassword ? 'pr-10' : '']"
            />

            <!--
                `tabindex="-1"` DELIBERATELY. Tab from the password field should
                reach the submit button, which is where somebody typing is
                going; a reveal toggle in that path is a keystroke between every
                sign-in and the thing that completes it.
            -->
            <button
                v-if="isPassword"
                type="button"
                tabindex="-1"
                class="text-muted-foreground hover:text-foreground absolute inset-y-0 right-0 flex w-10 items-center justify-center transition-colors"
                :aria-label="revealed ? 'Hide password' : 'Show password'"
                :aria-pressed="revealed"
                @click="revealed = !revealed"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <template v-if="revealed">
                        <path
                            d="M10.7 5.1A9.8 9.8 0 0 1 12 5c5 0 9 4.5 10 7a15 15 0 0 1-3 4M6.6 6.6A15 15 0 0 0 2 12c1 2.5 5 7 10 7a9.7 9.7 0 0 0 5.4-1.6"
                        />
                        <path d="m2 2 20 20" />
                        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                    </template>
                    <template v-else>
                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
                        <circle cx="12" cy="12" r="3" />
                    </template>
                </svg>
            </button>
        </div>

        <p v-if="error" :id="`${id}-error`" class="text-sm text-destructive">
            {{ error }}
        </p>
    </div>
</template>
