<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { ThemeToggle } from '@panelkit/ui';

import { computed } from 'vue';

defineProps<{
    title?: string;
    description?: string;
}>();

const appName = computed(() => String(usePage().props.name ?? 'Panel'));
</script>

<template>
    <div
        class="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
    >
        <!--
            LIGHT OR DARK ONLY, before sign-in.

            The full appearance drawer used to be here, and it promised a
            personalisation with nowhere to live: accent, density, sidebar side
            and font size are saved against an ACCOUNT, so choosing them on a
            login screen writes them to this browser alone and they vanish the
            moment the same person signs in elsewhere. That reads as the panel
            forgetting what it was told.

            Light-versus-dark stays because the reason for it is physical rather
            than organisational - nobody on a dark-adapted screen at night
            should have to be blinded by a sign-in form first - and because the
            operating system already has an opinion the browser can read without
            an account.
        -->
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-4">
                    <Link
                        href="/"
                        class="flex flex-col items-center gap-2 font-medium"
                    >
                        <!--
                            THE PRODUCT'S NAME, NOT A FRAMEWORK BADGE.

                            There is no tenant before sign-in - the hostname
                            might identify one, but a shared sign-in screen does
                            not - so there is no organisation logo to show and
                            nothing tenant-specific to say. What belongs here is
                            whoever operates the panel, which is `APP_NAME`.

                            The framework's mark was actively wrong: it told
                            every customer whose software this is, which is the
                            one fact a white-labelled panel exists to not
                            volunteer.
                        -->
                        <span class="mb-1 text-lg font-semibold tracking-tight">
                            {{ appName }}
                        </span>
                        <span class="sr-only">{{ title }}</span>
                    </Link>
                    <div class="space-y-2 text-center">
                        <h1 class="text-xl font-medium">{{ title }}</h1>
                        <p class="text-center text-sm text-muted-foreground">
                            {{ description }}
                        </p>
                    </div>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>
