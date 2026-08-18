<script setup lang="ts">
/** Onboarding wizard shell. Props from OnboardingPage. */
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, markRaw } from 'vue'
import { SetupChecklist } from '@alxtexh-enterprise/panel'
import type { SetupChecklistItem } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const InertiaLink = markRaw(Link)

const props = defineProps<{
    pageHeading?: string
    steps?: { key: string; label: string; done: boolean; href?: string | null; description?: string; actionLabel?: string }[]
    dismissed?: boolean
}>()

const items = computed<SetupChecklistItem[]>(() =>
    (props.steps ?? []).map((step) => ({
        key: step.key,
        title: step.label,
        detail: step.description ?? '',
        done: step.done,
        href: step.href,
        actionLabel: step.actionLabel ?? 'Open',
    })),
)

function skipRemaining() {
    router.post('dismiss')
}
</script>

<template>
    <Head :title="pageHeading ?? 'Get started'" />
    <div class="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
        <SetupChecklist
            :items="items"
            :heading="pageHeading ?? 'Get started'"
            skip-label="Skip remaining"
            :link-component="InertiaLink"
            @skip="skipRemaining"
        />
        <p v-if="!steps?.length" class="text-sm text-muted-foreground">
            Override steps() on your page class, or open the dashboard setup guide.
        </p>
    </div>
</template>
