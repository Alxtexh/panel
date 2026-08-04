<script setup lang="ts">
/*
 * The panel's Workspaces screen, from @alxtexh-enterprise/panel/inertia.
 *
 * THIS APPLICATION'S COPY AND ITS CONTROLLER ARE GONE. The packaged one
 * resolves the organisation model and the membership relation through
 * `Tenants`, so this app's `Tenant` and its `memberships()` are still what it
 * reads - without the package naming either.
 */
import Workspaces from '@alxtexh-enterprise/panel/pages/settings/Workspaces.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Workspaces v-bind="$attrs as any" />
</template>
