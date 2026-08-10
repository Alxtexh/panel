<script setup lang="ts">
/**
 * A list of things that went wrong, as one destructive alert.
 *
 * MOVED FROM THE REFERENCE APP. It DE-DUPLICATES, which is the whole reason it
 * exists rather than a `v-for` at each call site: two failed fetches that both
 * push "Failed to fetch a setup key" is one problem, and printing it twice
 * reads as two.
 */
import { AlertCircle } from '@lucide/vue'
import { computed } from 'vue'
import { Alert, AlertDescription, AlertTitle } from '../shadcn/alert'

type Props = {
    errors: string[]
    title?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Something went wrong.',
})

const uniqueErrors = computed(() => Array.from(new Set(props.errors)))
</script>

<template>
    <Alert variant="destructive">
        <AlertCircle class="size-4" />
        <AlertTitle>{{ title }}</AlertTitle>
        <AlertDescription>
            <ul class="list-inside list-disc text-sm">
                <li v-for="(error, index) in uniqueErrors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </AlertDescription>
    </Alert>
</template>
