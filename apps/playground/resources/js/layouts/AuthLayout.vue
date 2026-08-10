<script setup lang="ts">
/*
 * The packaged auth frame, from `@alxtexh-enterprise/panel/inertia`.
 *
 * THIS APPLICATION'S COPY IS GONE. `AuthSimpleLayout.vue` and the packaged
 * `AuthLayout.vue` were the same markup down to the Tailwind class strings -
 * the package's own docblock says it was PROMOTED FROM THE REFERENCE APP, and
 * the reference app kept its original, so the promotion made two.
 *
 * THE PROMOTION HAD DROPPED TWO THINGS, which is why this is a swap rather than
 * a deletion: the link home around the product name, and the `sr-only` title
 * that gives that link an accessible name. Both went back into the packaged
 * layout first, so nothing is lost by pointing at it.
 *
 * `AuthCardLayout.vue` AND `AuthSplitLayout.vue` WENT TOO. Neither had a single
 * importer - they were alternative frames nothing ever selected.
 */
import { AuthLayout } from '@alxtexh-enterprise/panel/inertia';

const { title = '', description = '' } = defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <AuthLayout :title="title" :description="description">
        <slot />
    </AuthLayout>
</template>
