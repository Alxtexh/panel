<script setup lang="ts">
/**
 * Mounts the idle timer and the "you will be locked" warning.
 *
 * Absent `panelIdleLock`, this renders nothing. PanelShell mounts it once so
 * an application does not have to remember.
 */
import { PkModal } from '@alxtexh-enterprise/panel'
import { usePanelIdleLock } from '../../composables/usePanelIdleLock'
import { useTranslations } from '../../composables/useTranslations'

const { warningOpen, warningSecondsLeft, dismissWarning } = usePanelIdleLock()
const { t } = useTranslations()
</script>

<template>
    <PkModal
        :open="warningOpen"
        :title="t('auth.idle.title')"
        :description="t('auth.idle.description', { seconds: warningSecondsLeft })"
        @close="dismissWarning"
    >
        <p class="text-sm text-muted-foreground">
            {{ t('auth.idle.body') }}
        </p>

        <template #footer>
            <button
                type="button"
                class="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
                @click="dismissWarning"
            >
                {{ t('auth.idle.stay') }}
            </button>
        </template>
    </PkModal>
</template>
