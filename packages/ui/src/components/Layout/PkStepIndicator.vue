<script setup lang="ts">
/**
 * The numbered-circle step strip the wizard form field drew for itself,
 * pulled out so a page header can show the same "step 2 of 4" language for
 * a flow the schema layer never sees - an import dialog, a restore that
 * runs in phases on the server. `SchemaNode.vue`'s wizard branch is this
 * component now, not a second copy of it.
 *
 * A TAB STRIP SAYS "these are equally available"; A STEPPER SAYS "this
 * comes after that" - see the wizard field's own note. Earlier steps stay
 * clickable so going back to correct something is always allowed; later
 * ones are not, because they may depend on an answer not given yet. Set
 * `interactive` to false for a passive status display - restore's progress
 * has no "go back", it is reporting what already happened.
 */
export interface Step {
    label: string
    description?: string
}

const props = withDefaults(
    defineProps<{
        steps: Step[]
        activeStep: number
        /** True marks a step's circle with an error dot instead of hiding it behind a click. */
        hasError?: (index: number) => boolean
        /**
         * The step that failed outright, if any. Rendered with a destructive
         * cross rather than a tick; every step after it is treated as never
         * reached rather than "upcoming", because a failure does not resume
         * where it left off.
         */
        failedStep?: number | null
        /** False for a read-only progress display: no buttons, no click-back. */
        interactive?: boolean
    }>(),
    { hasError: () => false, failedStep: null, interactive: true },
)

const emit = defineEmits<{ (e: 'update:activeStep', index: number): void }>()

function circleClass(i: number): string {
    if (props.failedStep !== null && i === props.failedStep) {
        return 'bg-destructive text-destructive-foreground border-destructive'
    }

    if (props.failedStep !== null && i > props.failedStep) {
        return ''
    }

    if (i < props.activeStep) {
        return 'bg-primary text-primary-foreground border-primary'
    }

    if (i === props.activeStep) {
        return 'border-primary text-primary'
    }

    return ''
}

function labelClass(i: number): string {
    if (props.failedStep !== null) {
        if (i === props.failedStep) {
            return 'text-destructive font-medium'
        }

        if (i > props.failedStep) {
            return 'text-muted-foreground/60'
        }
    }

    if (i === props.activeStep) {
        return 'text-foreground font-medium'
    }

    return i < props.activeStep
        ? 'text-muted-foreground hover:text-foreground'
        : 'text-muted-foreground/60'
}

function isDone(i: number): boolean {
    if (props.failedStep !== null) {
        return i < props.failedStep
    }

    return i < props.activeStep
}

function isFailed(i: number): boolean {
    return props.failedStep === i
}
</script>

<template>
    <ol class="flex items-center gap-2 overflow-x-auto">
        <li v-for="(step, i) in steps" :key="i" class="flex shrink-0 items-center gap-2">
            <component
                :is="interactive ? 'button' : 'div'"
                :type="interactive ? 'button' : undefined"
                class="flex items-center gap-2 text-left text-sm"
                :class="[
                    interactive ? 'transition-colors disabled:cursor-default' : '',
                    labelClass(i),
                ]"
                v-bind="interactive ? { disabled: i > activeStep } : {}"
                @click="interactive && i <= activeStep && emit('update:activeStep', i)"
            >
                <span
                    class="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums"
                    :class="circleClass(i)"
                >
                    <svg
                        v-if="isFailed(i)"
                        class="size-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    <!-- A tick for a step already passed; its number otherwise. -->
                    <svg
                        v-else-if="isDone(i)"
                        class="size-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <template v-else>{{ i + 1 }}</template>
                </span>

                <span class="flex flex-col">
                    <span>{{ step.label }}</span>
                    <span v-if="step.description" class="text-muted-foreground text-xs font-normal">
                        {{ step.description }}
                    </span>
                </span>

                <!-- An error on a step you are not looking at is invisible. -->
                <span
                    v-if="hasError(i)"
                    class="bg-destructive size-1.5 shrink-0 rounded-full"
                    aria-label="has errors"
                />
            </component>

            <span
                v-if="i < steps.length - 1"
                class="bg-border h-px w-6 shrink-0"
                aria-hidden="true"
            />
        </li>
    </ol>
</template>
