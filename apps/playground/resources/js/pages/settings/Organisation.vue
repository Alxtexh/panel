<script setup lang="ts">
/*
 * The panel's Organisation screen, from @alxtexh-enterprise/panel/inertia.
 *
 * IT MOVED WITHOUT BEING CHANGED. The controller already named no model - it
 * resolves whichever organisation the request is in through `TenantContext`,
 * the same resolution every tenant-scoped query uses - so it lived here only
 * because nothing had moved it.
 */
import Organisation from '@alxtexh-enterprise/panel/pages/settings/Organisation.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Organisation v-bind="$attrs as any" />
</template>
