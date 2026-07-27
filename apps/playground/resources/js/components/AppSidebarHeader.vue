<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import CommandPalette from '@/components/CommandPalette.vue';
import { AppearanceMenu } from '@panelkit/ui';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        breadcrumbs?: BreadcrumbItem[];
    }>(),
    {
        breadcrumbs: () => [],
    },
);

const page = usePage();

/**
 * Static layout options first, page props second.
 *
 * A bespoke page declares its trail through defineOptions, which is evaluated
 * once at definition time. The generic resource page cannot — it does not know
 * which resource it is until the props arrive — so it ships the trail as a prop
 * instead and this falls through to it.
 */
const trail = computed<BreadcrumbItem[]>(() =>
    props.breadcrumbs.length
        ? props.breadcrumbs
        : ((page.props.breadcrumbs as BreadcrumbItem[] | undefined) ?? []),
);
</script>

<template>
    <header
        class="border-sidebar-border/70 flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:px-6 md:px-4"
    >
        <div class="flex min-w-0 items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <!-- Breadcrumbs are the first thing to give up on a phone; the
                 search trigger earns that space more. -->
            <template v-if="trail.length > 0">
                <Breadcrumbs :breadcrumbs="trail" class="hidden sm:flex" />
            </template>
        </div>

        <div class="ml-auto flex items-center gap-2">
            <CommandPalette />
            <!-- Appearance belongs where you can see what it changes. -->
            <AppearanceMenu />
        </div>
    </header>
</template>
