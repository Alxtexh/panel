<script setup lang="ts">
/**
 * Renders one node of a form schema tree, recursing into its children.
 *
 * The tree mixes layout components and fields, discriminated by `component`.
 * Recursion is what lets a Section hold a Grid hold a Field at any depth without
 * the renderer knowing the shapes in advance.
 *
 * ONLY THE OUTERMOST LAYOUT NODE DRAWS A FRAME. A Section inside Tabs inside a
 * page card renders three nested bordered boxes - each individually reasonable,
 * collectively a set of Russian dolls that eats horizontal space and makes the
 * actual inputs look like a footnote. `depth` is how a node knows whether it is
 * the container or the contained.
 *
 * Layout carries only SEMANTIC values - `columns: 2`, `collapsible: true` - and
 * this file decides what those look like. PHP never emits a class
 * (antipatterns §6.1).
 */
import { computed, ref } from 'vue'
import FormFieldControl from './FormFieldControl.vue'
import type { UploadedFileValue } from './PkFileUpload.vue'
import type { FormField } from './types'

export interface SchemaNode {
    component: 'field' | 'section' | 'grid' | 'tabs' | 'tab' | 'wizard' | 'step'
    children?: SchemaNode[]
    label?: string
    description?: string
    columns?: number
    collapsible?: boolean
    collapsed?: boolean
    icon?: string | null
    [key: string]: any
}

const props = withDefaults(
    defineProps<{
        node: SchemaNode
        values: Record<string, any>
        errors?: Record<string, string>
        options?: Record<string, { value: any; label: string }[]>
        processing?: boolean
        /** Supplied by the page; @panelkit/ui ships no HTTP client. */
        searchOptions?: (field: string, term: string) => Promise<{ value: any; label: string }[]>
        /** Performs an upload for a file field. See PkFileUpload. */
        upload?: (
            field: string,
            file: File,
            onProgress: (percent: number) => void,
        ) => Promise<UploadedFileValue>
        discard?: (handle: string) => Promise<void>
        /** 0 is the outermost layout node - the only one that draws a frame. */
        depth?: number
    }>(),
    { errors: () => ({}), options: () => ({}), processing: false, depth: 0 },
)

const emit = defineEmits<{
    (e: 'change', key: string, value: unknown): void
}>()

const open = ref(!props.node.collapsed)
const activeTab = ref(0)

/** Which wizard step is showing. Separate from `activeTab`: one node is one or the other. */
const activeStep = ref(0)

const isRoot = computed(() => props.depth === 0)

const gridClass = computed(() => {
    const columns = props.node.columns ?? 1

    return columns >= 3 ? 'sm:grid-cols-3' : columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
})

/**
 * Whether a tab contains a field with an error.
 *
 * Without this, submitting an invalid form can highlight nothing at all: the
 * offending field sits behind an inactive tab, so the user sees a rejected save
 * and no reason for it.
 */
function tabHasError(tab: SchemaNode): boolean {
    const keys: string[] = []

    const walk = (node: SchemaNode) => {
        if (node.component === 'field' && node.key) {
            keys.push(node.key)
        }

        node.children?.forEach(walk)
    }

    walk(tab)

    return keys.some((key) => props.errors[key])
}

/**
 * Binds the field key into the page's upload function.
 *
 * A small indirection so the template does not have to carry an annotated
 * arrow - inline type annotations inside a template expression do not parse,
 * and the resulting error points at the attribute rather than at the cause.
 */
/**
 * Whether a conditional field's controlling value currently matches.
 *
 * LOOSE COMPARISON on purpose. A toggle's value is `true` in the form state and
 * the condition may have been declared as `1` on the PHP side - strict equality
 * would silently never match, and the field would simply never appear, which
 * looks like a missing field rather than a comparison bug.
 */
function conditionMet(node: Record<string, any>): boolean {
    const condition = node.visibleWhen

    if (!condition) {
        return true
    }

    // eslint-disable-next-line eqeqeq
    return props.values[condition.field] == condition.value
}

function uploadFor(key: string) {
    if (!props.upload) {
        return undefined
    }

    return (file: File, onProgress: (percent: number) => void) =>
        props.upload!(key, file, onProgress)
}
</script>

<template>
    <!--
        Field: a leaf.

        A CONDITIONAL FIELD IS NOT RENDERED when its condition is unmet, rather
        than rendered and hidden with CSS. A hidden-but-present control is still
        focusable by keyboard and still submits its value, so `display: none` on
        a form field is a way of sending data nobody can see.

        This is presentation only. The server derives `required_if` from the same
        declaration, so what is enforced does not depend on what was drawn.
    -->
    <FormFieldControl
        v-if="node.component === 'field' && conditionMet(node)"
        :field="node as unknown as FormField"
        :value="values[node.key]"
        :error="errors[node.key]"
        :errors="errors"
        :options="options[node.key]"
        :child-options="options"
        :processing="processing"
        :search-options="
            node.searchable && searchOptions
                ? (term: string) => searchOptions!(node.key, term)
                : undefined
        "
        :upload="uploadFor(node.key)"
        :discard="discard"
        @change="(value: unknown) => emit('change', node.key, value)"
    />

    <!--
        Section. Framed at the root, a plain labelled group when nested.

        A CONDITIONAL SECTION IS NOT RENDERED when its condition is unmet,
        the same choice made for a conditional field above and for the same
        reason - a disabled-but-present group still occupies the page and
        still submits whatever is in it. `Form::sanitize()` is the actual
        enforcement, from the same declaration; this is what makes a hidden
        section look like what it is on the server.
    -->
    <section
        v-else-if="node.component === 'section' && conditionMet(node)"
        :class="isRoot ? 'bg-card rounded-lg border' : ''"
    >
        <header
            class="flex items-start justify-between gap-3"
            :class="[
                isRoot ? 'px-4 py-3' : 'pb-2',
                node.collapsible ? 'cursor-pointer select-none' : '',
            ]"
            @click="node.collapsible && (open = !open)"
        >
            <div>
                <h3 class="text-sm font-semibold">{{ node.label }}</h3>
                <p v-if="node.description" class="text-muted-foreground mt-0.5 text-xs">
                    {{ node.description }}
                </p>
            </div>

            <svg
                v-if="node.collapsible"
                viewBox="0 0 24 24"
                class="text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform"
                :class="open ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            >
                <path d="m6 9 6 6 6-6" />
            </svg>
        </header>

        <div
            v-if="open"
            class="grid grid-cols-1 gap-4"
            :class="[gridClass, isRoot ? 'border-t px-4 py-4' : '']"
        >
            <SchemaNode
                v-for="(child, i) in node.children ?? []"
                :key="i"
                :node="child"
                :values="values"
                :errors="errors"
                :options="options"
                :processing="processing"
                :search-options="searchOptions"
                :upload="upload"
                :discard="discard"
                :depth="depth + 1"
                :class="child.span && child.span >= 2 ? 'sm:col-span-2' : ''"
                @change="(key: string, value: unknown) => emit('change', key, value)"
            />
        </div>
    </section>

    <!-- Grid: layout with no heading, so it never draws a frame. -->
    <div v-else-if="node.component === 'grid'" class="grid grid-cols-1 gap-4" :class="gridClass">
        <SchemaNode
            v-for="(child, i) in node.children ?? []"
            :key="i"
            :node="child"
            :values="values"
            :errors="errors"
            :options="options"
            :processing="processing"
            :search-options="searchOptions"
            :upload="upload"
            :discard="discard"
            :depth="depth + 1"
            @change="(key: string, value: unknown) => emit('change', key, value)"
        />
    </div>

    <!-- Tabs. -->
    <div v-else-if="node.component === 'tabs'" :class="isRoot ? 'bg-card rounded-lg border' : ''">
        <div
            class="bg-muted/30 flex gap-1 overflow-x-auto p-1"
            :class="isRoot ? 'rounded-t-lg border-b' : 'rounded-md'"
        >
            <button
                v-for="(tab, i) in node.children ?? []"
                :key="i"
                type="button"
                class="flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors"
                :class="
                    activeTab === i
                        ? 'bg-background text-foreground font-medium shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                "
                @click="activeTab = i"
            >
                {{ tab.label }}
                <!-- An error behind an inactive tab is otherwise invisible. -->
                <span
                    v-if="tabHasError(tab)"
                    class="bg-destructive size-1.5 rounded-full"
                    aria-label="has errors"
                />
            </button>
        </div>

        <!--
            Every tab stays MOUNTED, hidden with v-show rather than v-if.

            v-if would destroy the inputs in inactive tabs, so switching tabs
            would discard anything typed in them, and a field with a validation
            error would unmount before the user could read it.
        -->
        <div
            v-for="(tab, i) in node.children ?? []"
            v-show="activeTab === i"
            :key="i"
            class="flex flex-col gap-5"
            :class="isRoot ? 'p-4' : 'pt-4'"
        >
            <SchemaNode
                v-for="(child, j) in tab.children ?? []"
                :key="j"
                :node="child"
                :values="values"
                :errors="errors"
                :options="options"
                :processing="processing"
                :search-options="searchOptions"
                :upload="upload"
                :discard="discard"
                :depth="depth + 1"
                @change="(key: string, value: unknown) => emit('change', key, value)"
            />
        </div>
    </div>

    <!--
        Wizard: the same tree as tabs, walked in order.

        THE STEPPER IS NOT A TAB STRIP. A tab strip says "these are equally
        available"; a stepper says "this comes after that", which is the only
        reason to use a wizard rather than tabs. So earlier steps are reachable
        by clicking - going back to correct something is always allowed - and
        later ones are not, because they are the ones that may depend on
        answers not yet given.

        EVERY STEP STAYS MOUNTED, for the same reason every tab does: v-if would
        destroy the inputs on the step you just left, so going back to fix a
        value would find it gone.
    -->
    <div v-else-if="node.component === 'wizard'" :class="isRoot ? 'bg-card rounded-lg border' : ''">
        <ol class="flex items-center gap-2 overflow-x-auto p-4" :class="isRoot ? 'border-b' : ''">
            <li
                v-for="(step, i) in node.children ?? []"
                :key="i"
                class="flex shrink-0 items-center gap-2"
            >
                <button
                    type="button"
                    class="flex items-center gap-2 text-left text-sm transition-colors disabled:cursor-default"
                    :class="
                        activeStep === i
                            ? 'text-foreground font-medium'
                            : i < activeStep
                              ? 'text-muted-foreground hover:text-foreground'
                              : 'text-muted-foreground/60'
                    "
                    :disabled="i > activeStep"
                    @click="activeStep = i"
                >
                    <span
                        class="flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums"
                        :class="
                            i < activeStep
                                ? 'bg-primary text-primary-foreground border-primary'
                                : activeStep === i
                                  ? 'border-primary text-primary'
                                  : ''
                        "
                    >
                        <!-- A tick for a step already passed; its number otherwise. -->
                        <svg
                            v-if="i < activeStep"
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
                        <span v-if="step.description" class="text-muted-foreground text-xs">
                            {{ step.description }}
                        </span>
                    </span>

                    <!-- An error on a step you are not looking at is invisible. -->
                    <span
                        v-if="tabHasError(step)"
                        class="bg-destructive size-1.5 shrink-0 rounded-full"
                        aria-label="has errors"
                    />
                </button>

                <span
                    v-if="i < (node.children ?? []).length - 1"
                    class="bg-border h-px w-6 shrink-0"
                    aria-hidden="true"
                />
            </li>
        </ol>

        <div
            v-for="(step, i) in node.children ?? []"
            v-show="activeStep === i"
            :key="i"
            class="flex flex-col gap-5"
            :class="isRoot ? 'p-4' : 'pt-4'"
        >
            <SchemaNode
                v-for="(child, j) in step.children ?? []"
                :key="j"
                :node="child"
                :values="values"
                :errors="errors"
                :options="options"
                :processing="processing"
                :search-options="searchOptions"
                :upload="upload"
                :discard="discard"
                :depth="depth + 1"
                @change="(key: string, value: unknown) => emit('change', key, value)"
            />
        </div>

        <div class="flex items-center justify-between gap-3 border-t p-4">
            <button
                type="button"
                class="text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40"
                :disabled="activeStep === 0"
                @click="activeStep--"
            >
                Back
            </button>

            <!--
                NEXT IS NOT DISABLED ON ERRORS, deliberately.

                Blocking the button leaves somebody stuck with no explanation of
                what is wrong - the classic "the button does nothing" wizard.
                Advancing is allowed; the step keeps its error dot, and the
                submit at the end validates everything server-side regardless.
            -->
            <button
                v-if="activeStep < (node.children ?? []).length - 1"
                type="button"
                class="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90"
                @click="activeStep++"
            >
                Next
            </button>
        </div>
    </div>
</template>
