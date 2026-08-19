import { useHttp } from '@inertiajs/vue3'
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'

/**
 * The two-factor setup data, fetched on demand rather than shared with the page.
 *
 * MOVED FROM THE REFERENCE APP. One substitution: it imported Wayfinder's
 * `qrCode`, `secretKey` and `recoveryCodes` route helpers, and a package cannot
 * - a consuming application's route names are its own. The three URLs are
 * passed in instead.
 *
 * THE STATE IS MODULE-LEVEL, DELIBERATELY. The QR code, the manual key and the
 * recovery codes are fetched by the setup modal and read by the card behind it;
 * per-instance state would refetch a secret every time the modal remounted, and
 * a secret fetched twice is a secret that existed in two places.
 *
 * NOTHING HERE THROWS. Every failure pushes a sentence somebody can read and
 * clears the value it was fetching - a half-populated setup screen is worse than
 * an empty one with an explanation, because the QR code that did arrive still
 * scans and enrols an authenticator the server will not accept.
 */
export type TwoFactorRoutes = {
    qrCode: string
    secretKey: string
    recoveryCodes: string
}

export type UseTwoFactorAuthReturn = {
    qrCodeSvg: Ref<string | null>
    manualSetupKey: Ref<string | null>
    recoveryCodesList: Ref<string[]>
    errors: Ref<string[]>
    hasSetupData: ComputedRef<boolean>
    clearSetupData: () => void
    clearErrors: () => void
    clearTwoFactorAuthData: () => void
    fetchQrCode: () => Promise<void>
    fetchSetupKey: () => Promise<void>
    fetchSetupData: () => Promise<void>
    fetchRecoveryCodes: () => Promise<void>
}

const errors = ref<string[]>([])
const manualSetupKey = ref<string | null>(null)
const qrCodeSvg = ref<string | null>(null)
const recoveryCodesList = ref<string[]>([])

const hasSetupData = computed<boolean>(
    () => qrCodeSvg.value !== null && manualSetupKey.value !== null,
)

export const useTwoFactorAuth = (routes: TwoFactorRoutes): UseTwoFactorAuthReturn => {
    const http = useHttp()

    const fetchQrCode = async (): Promise<void> => {
        try {
            const { svg } = (await http.submit({ url: routes.qrCode, method: 'get' })) as {
                svg: string
                url: string
            }

            qrCodeSvg.value = svg
        } catch {
            errors.value.push('Failed to fetch QR code')
            qrCodeSvg.value = null
        }
    }

    const fetchSetupKey = async (): Promise<void> => {
        try {
            const { secretKey: key } = (await http.submit({
                url: routes.secretKey,
                method: 'get',
            })) as { secretKey: string }

            manualSetupKey.value = key
        } catch {
            errors.value.push('Failed to fetch a setup key')
            manualSetupKey.value = null
        }
    }

    const clearErrors = (): void => {
        errors.value = []
    }

    const clearSetupData = (): void => {
        manualSetupKey.value = null
        qrCodeSvg.value = null
        clearErrors()
    }

    const clearTwoFactorAuthData = (): void => {
        clearSetupData()
        clearErrors()
        recoveryCodesList.value = []
    }

    const fetchRecoveryCodes = async (): Promise<void> => {
        try {
            clearErrors()
            recoveryCodesList.value = (await http.submit({
                url: routes.recoveryCodes,
                method: 'get',
            })) as string[]
        } catch {
            errors.value.push('Failed to fetch recovery codes')
            recoveryCodesList.value = []
        }
    }

    const fetchSetupData = async (): Promise<void> => {
        try {
            clearErrors()
            await Promise.all([fetchQrCode(), fetchSetupKey()])
        } catch {
            qrCodeSvg.value = null
            manualSetupKey.value = null
        }
    }

    return {
        qrCodeSvg,
        manualSetupKey,
        recoveryCodesList,
        errors,
        hasSetupData,
        clearSetupData,
        clearErrors,
        clearTwoFactorAuthData,
        fetchQrCode,
        fetchSetupKey,
        fetchSetupData,
        fetchRecoveryCodes,
    }
}
