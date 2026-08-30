import { nextTick } from 'vue'
import type { Ref } from 'vue'

export type OtpFormHandle = {
    submit: () => void
    processing: boolean
}

/**
 * Submit an Inertia `<Form>` once a one-time code is complete.
 *
 * Guards against double submit while a visit is in flight and ignores repeat
 * `complete` events for the same code until the field is cleared.
 */
export function useOtpAutoSubmit(
    formRef: Ref<OtpFormHandle | null>,
    options?: { guard?: () => boolean },
) {
    let lastSubmittedCode = ''

    async function onOtpComplete(code: string): Promise<void> {
        const form = formRef.value

        if (!form || form.processing) {
            return
        }

        if (options?.guard && !options.guard()) {
            return
        }

        if (lastSubmittedCode === code) {
            return
        }

        lastSubmittedCode = code
        await nextTick()
        form.submit()
    }

    function resetAutoSubmitGuard(): void {
        lastSubmittedCode = ''
    }

    return { onOtpComplete, resetAutoSubmitGuard }
}
