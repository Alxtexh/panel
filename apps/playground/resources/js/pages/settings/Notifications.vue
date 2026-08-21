<script setup lang="ts">
/*
 * The panel's Notifications preferences screen, from @alxtexh-enterprise/panel/inertia.
 */
import Notifications from '@alxtexh-enterprise/panel/pages/settings/Notifications.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <Notifications v-bind="$attrs as any" />
</template>
