<script setup lang="ts">
/**
 * A field's validation message.
 *
 * MOVED FROM THE REFERENCE APP verbatim - `components/InputError.vue`. It is
 * four lines and it is used by five auth screens; leaving it behind was the
 * reason those screens could not move.
 *
 * `v-show` RATHER THAN `v-if`, as the original has it: the element keeps its
 * place in the layout, so a form does not jump by a line the moment a message
 * appears under a field somebody is still typing in.
 */
defineProps<{ message?: string }>()
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-red-600 dark:text-red-500">
            {{ message }}
        </p>
    </div>
</template>
