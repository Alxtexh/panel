<script setup lang="ts">
/*
 * The panel's ResourceWorkflow screen, from @alxtexh-enterprise/panel/inertia.
 *
 * Written when a resource opts in via Resource::workflow(). panel:update also
 * mirrors this for hosts that upgrade into the feature.
 */
import ResourceWorkflow from '@alxtexh-enterprise/panel/pages/ResourceWorkflow.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <ResourceWorkflow v-bind="$attrs as any" />
</template>
