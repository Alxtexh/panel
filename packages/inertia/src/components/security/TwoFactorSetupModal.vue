<script setup lang="ts">
/**
 * Enrolling an authenticator: the QR code, the manual key, and the confirmation.
 *
 * MOVED FROM THE REFERENCE APP. Two substitutions: Wayfinder's `confirm` helper
 * became a prop, and its `vue-input-otp` code field became `PkOtpInput`, which
 * is the same six boxes with the same slot classes and no dependency.
 *
 * THE QR CODE IS INVERTED IN DARK MODE rather than re-rendered. The server sends
 * one SVG; a code drawn dark-on-light stops scanning on a dark background, and
 * `invert(1) brightness(1.5)` is cheaper than a second endpoint.
 *
 * CONFIRMATION IS A SEPARATE STEP AND ONLY WHERE FORTIFY ASKS FOR IT. Somebody
 * who scans the code but never proves it works has an account that is about to
 * lock them out at the next sign-in.
 */
import { Form } from '@inertiajs/vue3'
import { Check, Copy, ScanLine } from '@lucide/vue'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    PkButton as Button,
    PkAlertError as AlertError,
    PkOtpInput,
    Spinner,
    isDark,
    useAppearance,
} from '@panelkit/ui'
import { useClipboard } from '@vueuse/core'
import { computed, nextTick, ref, useTemplateRef, watch } from 'vue'
import type { TwoFactorRoutes } from '../../composables/useTwoFactorAuth'
import { useTwoFactorAuth } from '../../composables/useTwoFactorAuth'
import type { TwoFactorConfigContent } from '../../types'
import AuthInputError from '../AuthInputError.vue'

type Props = {
    requiresConfirmation: boolean
    twoFactorEnabled: boolean
    routes: TwoFactorRoutes
    /** Where the six-digit confirmation posts. */
    confirmUrl: string
}

const props = defineProps<Props>()
const isOpen = defineModel<boolean>('isOpen')

const { appearance } = useAppearance()

/*
 * DARK IS ASKED OF THE PACKAGE rather than read off a `resolvedAppearance`
 * field the reference app's composable had and this one does not - "system"
 * only resolves against the media query, which `isDark` already owns.
 */
const dark = computed(() => isDark(appearance.value))
const { copy, copied } = useClipboard()
const { qrCodeSvg, manualSetupKey, clearSetupData, fetchSetupData, errors } = useTwoFactorAuth(
    props.routes,
)

const showVerificationStep = ref(false)
const code = ref<string>('')

const pinInputContainerRef = useTemplateRef('pinInputContainerRef')

const modalConfig = computed<TwoFactorConfigContent>(() => {
    if (props.twoFactorEnabled) {
        return {
            title: 'Two-factor authentication enabled',
            description:
                'Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.',
            buttonText: 'Close',
        }
    }

    if (showVerificationStep.value) {
        return {
            title: 'Verify authentication code',
            description: 'Enter the 6-digit code from your authenticator app',
            buttonText: 'Continue',
        }
    }

    return {
        title: 'Enable two-factor authentication',
        description:
            'To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app',
        buttonText: 'Continue',
    }
})

const handleModalNextStep = () => {
    if (props.requiresConfirmation) {
        showVerificationStep.value = true

        nextTick(() => {
            pinInputContainerRef.value?.querySelector('input')?.focus()
        })

        return
    }

    clearSetupData()
    isOpen.value = false
}

const resetModalState = () => {
    if (props.twoFactorEnabled) {
        clearSetupData()
    }

    showVerificationStep.value = false
    code.value = ''
}

watch(
    () => isOpen.value,
    async (open) => {
        if (!open) {
            resetModalState()

            return
        }

        if (!qrCodeSvg.value) {
            await fetchSetupData()
        }
    },
)
</script>

<template>
    <Dialog :open="isOpen" @update:open="isOpen = $event">
        <DialogContent class="sm:max-w-md">
            <DialogHeader class="flex items-center justify-center">
                <div class="border-border bg-card mb-3 w-auto rounded-full border p-0.5 shadow-sm">
                    <div
                        class="border-border bg-muted relative overflow-hidden rounded-full border p-2.5"
                    >
                        <div class="absolute inset-0 grid grid-cols-5 opacity-50">
                            <div
                                v-for="i in 5"
                                :key="`col-${i}`"
                                class="border-border border-r last:border-r-0"
                            />
                        </div>
                        <div class="absolute inset-0 grid grid-rows-5 opacity-50">
                            <div
                                v-for="i in 5"
                                :key="`row-${i}`"
                                class="border-border border-b last:border-b-0"
                            />
                        </div>
                        <ScanLine class="text-foreground relative z-20 size-6" />
                    </div>
                </div>
                <DialogTitle>{{ modalConfig.title }}</DialogTitle>
                <DialogDescription class="text-center">
                    {{ modalConfig.description }}
                </DialogDescription>
            </DialogHeader>

            <div class="relative flex w-auto flex-col items-center justify-center space-y-5">
                <template v-if="!showVerificationStep">
                    <AlertError v-if="errors?.length" :errors="errors" />
                    <template v-else>
                        <div class="relative mx-auto flex max-w-md items-center overflow-hidden">
                            <div
                                class="border-border relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border"
                            >
                                <div
                                    v-if="!qrCodeSvg"
                                    class="bg-background absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center"
                                >
                                    <Spinner class="size-6" />
                                </div>
                                <div v-else class="relative z-10 overflow-hidden border p-5">
                                    <div
                                        class="flex aspect-square size-full items-center justify-center"
                                        :style="{
                                            filter:
                                                dark
                                                    ? 'invert(1) brightness(1.5)'
                                                    : undefined,
                                        }"
                                        v-html="qrCodeSvg"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="flex w-full items-center space-x-5">
                            <Button class="w-full" @click="handleModalNextStep">
                                {{ modalConfig.buttonText }}
                            </Button>
                        </div>

                        <div class="relative flex w-full items-center justify-center">
                            <div class="bg-border absolute inset-0 top-1/2 h-px w-full" />
                            <span class="bg-card relative px-2 py-1">
                                or, enter the code manually
                            </span>
                        </div>

                        <div class="flex w-full items-center justify-center space-x-2">
                            <div
                                class="border-border flex w-full items-stretch overflow-hidden rounded-xl border"
                            >
                                <div
                                    v-if="!manualSetupKey"
                                    class="bg-muted flex h-full w-full items-center justify-center p-3"
                                >
                                    <Spinner />
                                </div>
                                <template v-else>
                                    <input
                                        type="text"
                                        readonly
                                        :value="manualSetupKey"
                                        class="bg-background text-foreground h-full w-full p-3"
                                    />
                                    <button
                                        class="border-border hover:bg-muted relative block h-auto border-l px-3"
                                        @click="copy(manualSetupKey || '')"
                                    >
                                        <Check v-if="copied" class="w-4 text-green-500" />
                                        <Copy v-else class="w-4" />
                                    </button>
                                </template>
                            </div>
                        </div>
                    </template>
                </template>

                <template v-else>
                    <Form
                        :action="props.confirmUrl"
                        method="post"
                        error-bag="confirmTwoFactorAuthentication"
                        reset-on-error
                        v-slot="{ errors: formErrors, processing }"
                        @finish="code = ''"
                        @success="isOpen = false"
                    >
                        <input type="hidden" name="code" :value="code" />
                        <div ref="pinInputContainerRef" class="relative w-full space-y-3">
                            <div
                                class="flex w-full flex-col items-center justify-center space-y-3 py-2"
                            >
                                <PkOtpInput
                                    id="otp"
                                    v-model="code"
                                    :length="6"
                                    :disabled="processing"
                                    autofocus
                                />
                                <AuthInputError :message="formErrors?.code" />
                            </div>

                            <div class="flex w-full items-center space-x-5">
                                <Button
                                    type="button"
                                    variant="outline"
                                    class="w-auto flex-1"
                                    :disabled="processing"
                                    @click="showVerificationStep = false"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    class="w-auto flex-1"
                                    :disabled="processing || code.length < 6"
                                >
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </Form>
                </template>
            </div>
        </DialogContent>
    </Dialog>
</template>
