<script setup lang="ts">
/**
 * Mounts the idle timer and the "you will be locked" warning.
 *
 * Absent `panelIdleLock`, this renders nothing. PanelShell mounts it once so
 * an application does not have to remember.
 */
import { PkModal } from '@alxtexh-enterprise/panel'
import { usePanelIdleLock } from '../../composables/usePanelIdleLock'

const { warningOpen, warningSecondsLeft, dismissWarning } = usePanelIdleLock()
</script>

<template>
    <PkModal
        :open="warningOpen"
        title="Still there?"
        :description="`You will be locked in ${warningSecondsLeft} seconds.`"
        @close="dismissWarning"
    >
        <p class="text-sm text-muted-foreground font-normal">
            Move the mouse or press a key to stay signed in. If nobody does, the panel locks and
            asks for your password.
        </p>

        <template #footer>
            <button
                type="button"
                class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
                @click="dismissWarning"
            >
                Stay signed in
            </button>
        </template>
    </PkModal>
</template>
