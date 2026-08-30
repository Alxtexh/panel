<script setup lang="ts">
/**
 * Former Kit payments URL. Gateways are organisation settings now.
 */
import { router } from '@inertiajs/vue3';
import { onMounted } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
    redirectTo?: string;
}>();

onMounted(() => {
    router.replace(props.redirectTo ?? '/settings/payments');
});
</script>

<template>
    <p class="p-4 text-sm text-muted-foreground">Opening payment settings…</p>
</template>
