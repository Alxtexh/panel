<script setup lang="ts">
/**
 * The horizontal layout: navigation across the top, no vertical rail.
 *
 * NO SidebarProvider. The provider exists to share collapse state between the
 * rail, its spacer and the trigger, none of which exist here - mounting it
 * anyway would leave a hidden fixed-position panel and a spacer reserving space
 * for a sidebar that is not rendered.
 */
import { AppPageFooter, useShellPageFooter } from '@alxtexh-enterprise/panel';
import AppTopNav from '@/components/AppTopNav.vue';
import { Toaster } from '@/components/ui/sonner';
import type { BreadcrumbItem } from '@/types';

withDefaults(defineProps<{ breadcrumbs?: BreadcrumbItem[] }>(), {
    breadcrumbs: () => [],
});

const pageFooter = useShellPageFooter();
</script>

<template>
    <div class="flex min-h-0 w-full flex-1 flex-col overflow-y-auto bg-sidebar">
        <ImpersonationBanner />

        <AppTopNav :breadcrumbs="breadcrumbs" />

        <!-- The same rounded content surface the inset sidebar variant uses, so
             switching layouts does not change how a page looks inside. -->
        <main
            id="pk-main"
            tabindex="-1"
            class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-background md:m-2 md:rounded-xl md:border"
        >
            <div
                data-slot="app-content-column"
                class="flex min-h-full w-full shrink-0 flex-col"
            >
                <slot />
                <AppPageFooter v-if="pageFooter" host />
            </div>
        </main>

        <Toaster />
    </div>
</template>
