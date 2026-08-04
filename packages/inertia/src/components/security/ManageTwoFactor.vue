<script setup lang="ts">
/**
 * The two-factor card: enable, disable, and the recovery codes underneath.
 *
 * MOVED FROM THE REFERENCE APP. Wayfinder's `enable` and `disable` helpers
 * became props, alongside the three the composable fetches from.
 *
 * IT RESUMES AN INTERRUPTED SETUP. `hasSetupData` means a QR code was already
 * fetched, so somebody who closed the modal half way is offered "Continue
 * setup" rather than "Enable 2FA" - which would enable it a second time and
 * hand them a different secret than the one already in their authenticator.
 *
 * THE SETUP DATA IS CLEARED ON UNMOUNT, because it is a secret and the
 * composable holds it at module level so the modal and this card can share it.
 * Navigating away should not leave it in memory for the next screen.
 */
import { Form } from '@inertiajs/vue3'
import { ShieldCheck } from '@lucide/vue'
import { PkButton as Button, PkHeading as Heading } from '@panelkit/ui'
import { onUnmounted, ref } from 'vue'
import type { TwoFactorRoutes } from '../../composables/useTwoFactorAuth'
import { useTwoFactorAuth } from '../../composables/useTwoFactorAuth'
import TwoFactorRecoveryCodes from './TwoFactorRecoveryCodes.vue'
import TwoFactorSetupModal from './TwoFactorSetupModal.vue'

export type Props = {
    canManageTwoFactor?: boolean
    requiresConfirmation?: boolean
    twoFactorEnabled?: boolean
    /** Where the setup data is fetched from. Defaults to Fortify's own routes. */
    routes?: TwoFactorRoutes
    enableUrl?: string
    disableUrl?: string
    confirmUrl?: string
    regenerateUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
    canManageTwoFactor: false,
    requiresConfirmation: false,
    twoFactorEnabled: false,
    routes: () => ({
        qrCode: '/user/two-factor-qr-code',
        secretKey: '/user/two-factor-secret-key',
        recoveryCodes: '/user/two-factor-recovery-codes',
    }),
    enableUrl: '/user/two-factor-authentication',
    disableUrl: '/user/two-factor-authentication',
    confirmUrl: '/user/confirmed-two-factor-authentication',
    regenerateUrl: '/user/two-factor-recovery-codes',
})

const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth(props.routes)
const showSetupModal = ref<boolean>(false)

onUnmounted(() => clearTwoFactorAuthData())
</script>

<template>
    <div v-if="canManageTwoFactor" class="space-y-6">
        <Heading
            variant="small"
            title="Two-factor authentication"
            description="Manage your two-factor authentication settings"
        />

        <div v-if="!twoFactorEnabled" class="flex flex-col items-start justify-start space-y-4">
            <p class="text-muted-foreground text-sm">
                When you enable two-factor authentication, you will be prompted for a secure pin
                during login. This pin can be retrieved from a TOTP-supported application on your
                phone.
            </p>

            <div>
                <Button v-if="hasSetupData" @click="showSetupModal = true">
                    <ShieldCheck />Continue setup
                </Button>
                <Form
                    v-else
                    :action="props.enableUrl"
                    method="post"
                    #default="{ processing }"
                    @success="showSetupModal = true"
                >
                    <Button type="submit" :disabled="processing">Enable 2FA</Button>
                </Form>
            </div>
        </div>

        <div v-else class="flex flex-col items-start justify-start space-y-4">
            <p class="text-muted-foreground text-sm">
                You will be prompted for a secure, random pin during login, which you can retrieve
                from the TOTP-supported application on your phone.
            </p>

            <div class="relative inline">
                <Form :action="props.disableUrl" method="delete" #default="{ processing }">
                    <Button variant="destructive" type="submit" :disabled="processing">
                        Disable 2FA
                    </Button>
                </Form>
            </div>

            <TwoFactorRecoveryCodes :routes="props.routes" :regenerate-url="props.regenerateUrl" />
        </div>

        <TwoFactorSetupModal
            v-model:isOpen="showSetupModal"
            :requires-confirmation="requiresConfirmation"
            :two-factor-enabled="twoFactorEnabled"
            :routes="props.routes"
            :confirm-url="props.confirmUrl"
        />
    </div>
</template>
