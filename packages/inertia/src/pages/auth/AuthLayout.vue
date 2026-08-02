<script setup lang="ts">
/**
 * The frame every packaged sign-in screen renders inside.
 *
 * PROMOTED FROM THE REFERENCE APP, where it was the one part of authentication
 * that had nothing application-specific in it: a centred card, the product's
 * name, a theme toggle. Everything else about auth was Fortify's or the demo's.
 *
 * THE PRODUCT'S NAME, NOT A FRAMEWORK BADGE. There is no tenant before sign-in
 * - the hostname might identify one, a shared sign-in screen does not - so
 * there is no organisation logo to show and nothing tenant-specific to say.
 * What belongs here is whoever operates the panel, which is `APP_NAME`. A
 * framework mark would tell every customer whose software this is, which is the
 * one fact a white-labelled panel exists to not volunteer.
 *
 * LIGHT OR DARK ONLY, AND NOT THE APPEARANCE DRAWER. Accent, density, sidebar
 * side and font size are saved against an ACCOUNT, so choosing them on a login
 * screen writes them to this browser alone and they vanish the moment the same
 * person signs in elsewhere - which reads as the panel forgetting what it was
 * told. Light-versus-dark stays because the reason for it is physical rather
 * than organisational: nobody on a dark-adapted screen at night should be
 * blinded by a sign-in form first.
 */
import { usePage } from '@inertiajs/vue3'
import { ThemeToggle } from '@panelkit/ui'
import { computed } from 'vue'

defineProps<{
    title?: string
    description?: string
}>()

/**
 * `name` is shared by Inertia's HandleInertiaRequests middleware in a stock
 * Laravel application. The fallback is not decoration - a panel whose header
 * says "Panel" is odd, and one that renders an empty heading looks broken.
 */
const appName = computed(() => String(usePage().props.name ?? 'Panel'))
</script>

<template>
    <div
        class="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-4">
                    <span class="mb-1 text-lg font-semibold tracking-tight">
                        {{ appName }}
                    </span>

                    <div class="space-y-2 text-center">
                        <h1 class="text-xl font-medium">{{ title }}</h1>
                        <p v-if="description" class="text-center text-sm text-muted-foreground">
                            {{ description }}
                        </p>
                    </div>
                </div>

                <slot />
            </div>
        </div>
    </div>
</template>
