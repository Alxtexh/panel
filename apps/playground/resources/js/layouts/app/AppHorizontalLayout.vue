<script setup lang="ts">
/**
 * The horizontal layout: navigation across the top, no vertical rail.
 *
 * NO SidebarProvider. The provider exists to share collapse state between the
 * rail, its spacer and the trigger, none of which exist here - mounting it
 * anyway would leave a hidden fixed-position panel and a spacer reserving space
 * for a sidebar that is not rendered.
 */
import AppTopNav from '@/components/AppTopNav.vue';
import { Toaster } from '@/components/ui/sonner';
import type { BreadcrumbItem } from '@/types';

withDefaults(defineProps<{ breadcrumbs?: BreadcrumbItem[] }>(), { breadcrumbs: () => [] });
</script>

<template>
    <div class="bg-sidebar flex min-h-screen w-full flex-col">
        <ImpersonationBanner />

        <AppTopNav :breadcrumbs="breadcrumbs" />

        <!-- The same rounded content surface the inset sidebar variant uses, so
             switching layouts does not change how a page looks inside. -->
        <main class="bg-background flex min-h-0 flex-1 flex-col md:m-2 md:rounded-xl md:border">
            <slot />
        </main>

        <Toaster />
    </div>
</template>
