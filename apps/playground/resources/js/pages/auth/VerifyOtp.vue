<script setup lang="ts">
import TurnstileField from '@/components/TurnstileField.vue';
/**
 * A one-time code, entered as separate boxes.
 *
 * SEPARATE BOXES ARE NOT DECORATION. A six-digit code in one text field is
 * entered wrong constantly: people paste it with a space, lose their place
 * halfway, and cannot see at a glance whether they have typed five digits or
 * six. Boxes make the length visible and each digit individually correctable.
 *
 * THE COST OF BOXES IS PASTE, and that is what most implementations get wrong -
 * codes arrive by SMS and get pasted as a whole string, which a naive
 * per-box input drops all but the first character of. So paste is handled
 * explicitly: the whole value is distributed across the boxes wherever it was
 * pasted.
 *
 * `inputmode="numeric"` gets the number pad on a phone, and `autocomplete`
 * `one-time-code` lets iOS and Android offer the code from the message
 * directly - the single biggest reduction in typing errors available here, and
 * it costs one attribute.
 *
 * IT SUBMITS ITSELF once the last box is filled. Somebody who has just typed
 * six digits has finished; making them find a button is asking them to confirm
 * something they already did.
 */
import { Head, Form, Link } from '@inertiajs/vue3'
import { computed, nextTick, ref } from 'vue'
import { Button } from '@/components/ui/button'
import InputError from '@/components/InputError.vue'
import { ThemeToggle } from '@panelkit/ui'

const props = withDefaults(
    defineProps<{
        /** Where the code was sent, for the reminder line. Masked already. */
        sentTo?: string | null
        length?: number
        status?: string
    }>(),
    { sentTo: null, length: 6 },
)

const digits = ref<string[]>(Array.from({ length: props.length }, () => ''))
const boxes = ref<HTMLInputElement[]>([])
const form = ref<HTMLFormElement | null>(null)

const code = computed(() => digits.value.join(''))
const complete = computed(() => code.value.length === props.length)

function focusBox(index: number) {
    nextTick(() => boxes.value[index]?.focus())
}

function onInput(index: number, event: Event) {
    const raw = (event.target as HTMLInputElement).value

    // Digits only, and only the last one typed - so overtyping a filled box
    // replaces it rather than being ignored.
    const digit = raw.replace(/\D/g, '').slice(-1)

    digits.value[index] = digit
    ;(event.target as HTMLInputElement).value = digit

    if (digit && index < props.length - 1) focusBox(index + 1)
    if (digit && index === props.length - 1) submitWhenComplete()
}

/**
 * Backspace in an EMPTY box steps back and clears the previous one.
 *
 * Without this, correcting a mistake means clicking the box you meant - which
 * is exactly the friction boxes were supposed to remove.
 */
function onKeydown(index: number, event: KeyboardEvent) {
    if (event.key === 'Backspace' && !digits.value[index] && index > 0) {
        event.preventDefault()
        digits.value[index - 1] = ''

        if (boxes.value[index - 1]) boxes.value[index - 1].value = ''

        focusBox(index - 1)
    }

    if (event.key === 'ArrowLeft' && index > 0) focusBox(index - 1)
    if (event.key === 'ArrowRight' && index < props.length - 1) focusBox(index + 1)
}

/** A pasted code fills every box from wherever it landed. */
function onPaste(index: number, event: ClipboardEvent) {
    event.preventDefault()

    const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '')

    if (!pasted) return

    for (let i = 0; i < pasted.length && index + i < props.length; i++) {
        digits.value[index + i] = pasted[i]!

        if (boxes.value[index + i]) boxes.value[index + i]!.value = pasted[i]!
    }

    const next = Math.min(index + pasted.length, props.length - 1)

    focusBox(next)
    submitWhenComplete()
}

function submitWhenComplete() {
    nextTick(() => {
        if (complete.value) form.value?.requestSubmit()
    })
}
</script>

<template>
    <Head title="Verify your code" />

    <div
        class="bg-background relative flex min-h-svh flex-col items-center justify-center gap-6 p-6"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm text-center">
            <h1 class="text-xl font-medium">Enter your verification code</h1>
            <p class="text-muted-foreground mt-2 text-sm">
                <template v-if="sentTo"
                    >We sent a {{ length }}-digit code to {{ sentTo }}.</template
                >
                <template v-else>Enter the {{ length }}-digit code we sent you.</template>
            </p>

            <p
                v-if="status"
                class="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
            >
                {{ status }}
            </p>

            <Form
                ref="form"
                method="post"
                action="/verify-otp"
                class="mt-8 space-y-6"
                v-slot="{ errors, processing }"
            >
                <!-- The assembled value is what actually submits; the boxes are
                     the input surface. -->
                <input type="hidden" name="code" :value="code" />

                <div class="flex justify-center gap-2" role="group" aria-label="Verification code">
                    <input
                        v-for="(_, i) in digits"
                        :key="i"
                        :ref="
                            (el) => {
                                if (el) boxes[i] = el as HTMLInputElement
                            }
                        "
                        type="text"
                        inputmode="numeric"
                        :autocomplete="i === 0 ? 'one-time-code' : 'off'"
                        maxlength="1"
                        :aria-label="`Digit ${i + 1}`"
                        :autofocus="i === 0"
                        class="border-input bg-background focus:border-primary focus:ring-primary/30 size-12 rounded-lg border text-center text-lg font-semibold tabular-nums focus:ring-2 focus:outline-none"
                        @input="onInput(i, $event)"
                        @keydown="onKeydown(i, $event)"
                        @paste="onPaste(i, $event)"
                    />
                </div>

                <InputError :message="errors.code" class="text-center" />

                <!-- Renders nothing when Turnstile is off; the server refuses

                     without a token either way. -->

                <TurnstileField name="cf-turnstile-response" />


                <Button type="submit" class="w-full" :disabled="!complete || processing">
                    Verify
                </Button>
            </Form>

            <p class="text-muted-foreground mt-6 text-sm">
                Did not get it?
                <Link
                    href="/verify-otp/resend"
                    method="post"
                    as="button"
                    class="underline underline-offset-4"
                >
                    Send another code
                </Link>
            </p>
        </div>
    </div>
</template>
