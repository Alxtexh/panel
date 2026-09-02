<script setup lang="ts">
/**
 * The screen after the last step of `PkSetupWizard`'s host page - a summary
 * of what was set up, not a form.
 *
 * `linkComponent`, THE SAME PATTERN `SetupChecklist`/`Onboarding.vue` ALREADY
 * USE: this package ships no HTTP client, so an Inertia `Link` (or any other
 * router-aware anchor) is handed in by the consuming page rather than
 * imported here.
 *
 * SECTIONS DISAPPEAR RATHER THAN RENDER EMPTY. `nextSteps`/`actions` come
 * from server closures that may resolve to nothing for a given install - an
 * empty "Next steps" heading over a blank list is a dead control, the thing
 * DESIGN_RULES.md rule 5 exists to keep out.
 */
import { buttonClasses } from '../primitives/buttonClasses'

withDefaults(
    defineProps<{
        heading: string
        summary?: { label: string; detail?: string }[]
        nextSteps?: { label: string; href: string }[]
        actions?: { label: string; href: string; primary?: boolean }[]
        linkComponent?: string | object
    }>(),
    {
        summary: () => [],
        nextSteps: () => [],
        actions: () => [],
        linkComponent: 'a',
    },
)
</script>

<template>
    <div class="flex flex-col gap-6 text-center sm:text-left">
        <h1 class="text-foreground text-xl font-semibold">{{ heading }}</h1>

        <ul v-if="summary.length" class="flex flex-col gap-2">
            <li
                v-for="(item, index) in summary"
                :key="index"
                class="flex items-baseline gap-2 text-sm"
            >
                <span class="text-foreground font-medium">{{ item.label }}</span>
                <span v-if="item.detail" class="text-muted-foreground">– {{ item.detail }}</span>
            </li>
        </ul>

        <div v-if="nextSteps.length" class="flex flex-col gap-2">
            <p class="text-foreground text-sm font-medium">Next steps</p>
            <ul class="flex flex-col gap-1">
                <li v-for="(step, index) in nextSteps" :key="index">
                    <component
                        :is="linkComponent"
                        :href="step.href"
                        class="text-primary text-sm hover:underline"
                    >
                        {{ step.label }}
                    </component>
                </li>
            </ul>
        </div>

        <div v-if="actions.length" class="flex flex-wrap justify-center gap-2 sm:justify-start">
            <component
                :is="linkComponent"
                v-for="(action, index) in actions"
                :key="index"
                :href="action.href"
                :class="buttonClasses({ variant: action.primary ? 'default' : 'outline' })"
            >
                {{ action.label }}
            </component>
        </div>
    </div>
</template>
