<script setup lang="ts">
/**
 * The account's passkeys: a list, a way to remove one, and a way to add one.
 *
 * MOVED FROM THE REFERENCE APP. One substitution: it imported Wayfinder's
 * `destroy` helper for the delete URL, and a package cannot know a consuming
 * application's route names.
 *
 * `deleteUrl` DEFAULTS TO WHAT `laravel/passkeys` REGISTERS, so an installation
 * that took the package's routes as they came needs to pass nothing at all.
 * One that mounted them elsewhere passes its own builder.
 *
 * THE WHOLE SECTION HIDES ON `canManagePasskeys`, decided by the server. A
 * panel without the package installed would otherwise offer a button whose
 * endpoint does not exist.
 */
import { router } from '@inertiajs/vue3'
import { KeyRound } from '@lucide/vue'
import { PkHeading as Heading, PkPasskeyRegister } from '@panelkit/panel'
import type { Passkey } from '../../types'
import PasskeyItem from './PasskeyItem.vue'

export type Props = {
    canManagePasskeys?: boolean
    passkeys?: Passkey[]
    /** Where a removal posts, per passkey. */
    deleteUrl?: (id: number) => string
}

const props = withDefaults(defineProps<Props>(), {
    canManagePasskeys: false,
    passkeys: () => [],
    deleteUrl: (id: number) => `/user/passkeys/${id}`,
})

const handleDelete = (id: number, onError: () => void) => {
    router.delete(props.deleteUrl(id), {
        preserveScroll: true,
        onError,
    })
}

const handleRegisterSuccess = () => {
    router.reload()
}
</script>

<template>
    <div v-if="canManagePasskeys" class="space-y-6">
        <Heading
            variant="small"
            title="Passkeys"
            description="Manage your passkeys for passwordless sign-in"
        />

        <div class="border-border overflow-hidden rounded-lg border">
            <template v-if="passkeys.length">
                <PasskeyItem
                    v-for="passkey in passkeys"
                    :key="passkey.id"
                    :passkey="passkey"
                    @remove="handleDelete"
                />
            </template>

            <div v-else class="p-8 text-center">
                <div
                    class="bg-muted mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                >
                    <KeyRound class="text-muted-foreground h-7 w-7" />
                </div>
                <p class="font-medium">No passkeys yet</p>
                <p class="text-muted-foreground mt-1 text-sm">
                    Add a passkey to sign in without a password
                </p>
            </div>
        </div>

        <PkPasskeyRegister @success="handleRegisterSuccess" />
    </div>
</template>
