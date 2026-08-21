<script setup lang="ts">
/*
 * The panel's ResourceKanban screen, from @alxtexh-enterprise/panel/inertia.
 *
 * Written when a resource opts in via Resource::board(). panel:update also
 * mirrors this for hosts that upgrade into the feature.
 */
import ResourceKanban from '@alxtexh-enterprise/panel/pages/ResourceKanban.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <ResourceKanban v-bind="$attrs as any" />
</template>
