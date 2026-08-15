<script setup lang="ts">
import { SettingsLayout } from '@alxtexh-enterprise/panel/inertia';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <SettingsLayout v-bind="$attrs as any">
        <slot />
    </SettingsLayout>
</template>
