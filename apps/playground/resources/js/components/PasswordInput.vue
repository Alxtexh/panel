<script setup lang="ts">
/** The reveal-toggle password field is the package's now. */
import { PkPasswordInput } from '@panelkit/panel';
import type { HTMLAttributes } from 'vue';
import { ref, useTemplateRef } from 'vue';

defineOptions({ inheritAttrs: false });

defineProps<{ class?: HTMLAttributes['class'] }>();

const inner = useTemplateRef<InstanceType<typeof PkPasswordInput>>('inner');

defineExpose({
    $el: ref(null),
    focus: () => inner.value?.focus(),
});
</script>

<template>
    <PkPasswordInput ref="inner" :class="$props.class" v-bind="$attrs" />
</template>
