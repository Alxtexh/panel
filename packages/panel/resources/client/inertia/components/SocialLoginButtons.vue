<script setup lang="ts">
/**
 * The packaged social sign-in row.
 *
 * READS `SharePanelProps` BY DEFAULT so auth screens, the landing page, and the
 * auth-family gallery do not each maintain their own provider list. Pass
 * `providers` only when a preview or test needs to override the shared payload.
 */
import { computed } from 'vue'
import AuthProviderButton from './AuthProviderButton.vue'
import { useSocialProviders, type SocialProvider } from '../composables/useSocialProviders'

const props = withDefaults(
    defineProps<{
        providers?: SocialProvider[] | null
        /** Divider copy between the form and the buttons. Empty hides the rule. */
        divider?: string
        /** Tighter grid for the landing nav bar. */
        compact?: boolean
    }>(),
    {
        divider: 'or continue with',
        compact: false,
    },
)

const providers = useSocialProviders(props.providers)
const visible = computed(() => providers.value.length > 0)
</script>

<template>
    <div v-if="visible" class="flex flex-col gap-3" data-test="social-login-buttons">
        <div v-if="divider" class="flex items-center gap-3">
            <span class="bg-border h-px flex-1" />
            <span class="text-muted-foreground text-xs">{{ divider }}</span>
            <span class="bg-border h-px flex-1" />
        </div>

        <div
            class="grid gap-2"
            :class="
                !compact && providers.length > 1 ? 'grid-cols-2 sm:grid-cols-3' : ''
            "
        >
            <AuthProviderButton
                v-for="provider in providers"
                :key="provider.key"
                :provider="provider"
            />
        </div>
    </div>
</template>
