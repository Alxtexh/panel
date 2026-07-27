<script setup lang="ts">
/**
 * Picks the shell from the user's navigation preference.
 *
 * Switching here rather than in each page is what keeps `defineOptions({ layout })`
 * unchanged across all three modes — a page declares its breadcrumbs and never
 * learns which chrome is wrapping it.
 *
 * The layout component genuinely swaps, so the page remounts when the preference
 * changes. That is the honest cost of three real layouts rather than one layout
 * with CSS trickery: the vertical and horizontal shells have different DOM, not
 * different styling.
 */
import { computed } from 'vue';
import { useAppearance } from '@panelkit/ui';
import AppSidebarLayout from '@/layouts/app/AppSidebarLayout.vue';
import AppHorizontalLayout from '@/layouts/app/AppHorizontalLayout.vue';
import type { BreadcrumbItem } from '@/types';

const { breadcrumbs = [] } = defineProps<{
    breadcrumbs?: BreadcrumbItem[];
}>();

const { appearance } = useAppearance();

const shell = computed(() =>
    appearance.value.sidebarSide === 'horizontal' ? AppHorizontalLayout : AppSidebarLayout,
);
</script>

<template>
    <component :is="shell" :breadcrumbs="breadcrumbs">
        <slot />
    </component>
</template>
