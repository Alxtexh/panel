<script setup lang="ts">
/**
 * A nested and/or rule tree, composed in the UI.
 *
 * IT OFFERS ONLY WHAT THE SERVER SENT. `fields` comes from the resource's own
 * filters - the server derives it, this renders it - so a field the resource
 * does not filter on cannot be selected here, and a rule naming one is refused
 * by the endpoint anyway. The client is not the boundary; it just does not
 * present the impossible.
 *
 * RECURSIVE THROUGH ITSELF, and the depth cap is enforced on both sides. Here
 * it hides the "add group" button, which is a courtesy; the server refuses a
 * tree that exceeds it, which is the actual limit. A client-side cap alone is
 * a suggestion.
 *
 * NOTHING IS APPLIED UNTIL `apply` IS EMITTED. A tree that re-queried on every
 * keystroke would run a half-written condition against the table - "status is"
 * with no value is a query for everything, and on a large resource it is an
 * expensive one that the operator did not ask for.
 */
import { computed, ref, watch } from 'vue'
import PkButton from '../primitives/PkButton.vue'

export interface QueryField {
    kind: 'select' | 'multiselect' | 'boolean' | 'daterange'
    label: string
    options?: string[]
}

export interface QueryRule {
    field?: string
    operator?: string
    value?: unknown
}

export interface QueryGroup {
    logic: 'and' | 'or'
    rules: (QueryRule | QueryGroup)[]
}

const props = withDefaults(
    defineProps<{
        modelValue?: QueryGroup | null
        fields: Record<string, QueryField>
        operators: Record<string, string[]>
        maxDepth?: number
        depth?: number
        /** The root renders the apply/clear bar; nested groups do not. */
        root?: boolean
    }>(),
    { maxDepth: 5, depth: 0, root: true },
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: QueryGroup | null): void
    (e: 'apply', value: QueryGroup | null): void
}>()

const empty = (): QueryGroup => ({ logic: 'and', rules: [] })

const group = ref<QueryGroup>(props.modelValue ? structuredClone(props.modelValue) : empty())

watch(
    () => props.modelValue,
    (next) => {
        group.value = next ? structuredClone(next) : empty()
    },
)

const isGroup = (rule: QueryRule | QueryGroup): rule is QueryGroup => 'rules' in rule

const fieldNames = computed(() => Object.keys(props.fields))

/** The operators this field's kind allows, straight from the server's map. */
function operatorsFor(field?: string): string[] {
    const kind = field ? props.fields[field]?.kind : undefined

    return kind ? (props.operators[kind] ?? []) : []
}

/**
 * A HUMAN LABEL FOR AN OPERATOR, mapped rather than prettified.
 *
 * `is_any_of`.replace('_', ' ') gives "is any of", which happens to read well
 * and would give "is none of" for `is_none_of` and nonsense for anything less
 * lucky. A map is a sentence somebody chose.
 */
const OPERATOR_LABELS: Record<string, string> = {
    is: 'is',
    is_not: 'is not',
    is_any_of: 'is any of',
    is_none_of: 'is none of',
    before: 'is before',
    after: 'is after',
    between: 'is between',
}

function changed(): void {
    emit('update:modelValue', group.value)
}

function addRule(): void {
    const field = fieldNames.value[0]

    group.value.rules.push({
        field,
        operator: operatorsFor(field)[0],
        value: undefined,
    })

    changed()
}

function addGroup(): void {
    group.value.rules.push(empty())
    changed()
}

function remove(index: number): void {
    group.value.rules.splice(index, 1)
    changed()
}

/**
 * Changing the field RESETS the operator and value.
 *
 * Keeping them would leave `created_at is_any_of ['gold']` on screen - an
 * operator the new field does not allow and a value from the old one, which
 * the server refuses and which reads to the operator like the builder is
 * broken rather than like they changed something.
 */
function fieldChanged(rule: QueryRule): void {
    rule.operator = operatorsFor(rule.field)[0]
    rule.value = undefined
    changed()
}

const canNest = computed(() => props.depth + 1 < props.maxDepth)

/**
 * Clear empties the tree AND applies it.
 *
 * Emptying without applying leaves the list still filtered by the tree the
 * operator just deleted from the screen - the panel showing one thing and the
 * data showing another, which reads as a bug in the list rather than as an
 * unapplied change.
 */
function clear(): void {
    group.value = empty()
    changed()
    emit('apply', null)
}

function apply(): void {
    emit('apply', group.value.rules.length ? group.value : null)
}
</script>

<template>
    <div
        class="flex flex-col gap-2 rounded-lg border p-3"
        :class="depth > 0 ? 'bg-muted/30' : 'bg-card'"
    >
        <div class="flex items-center gap-2">
            <select
                v-model="group.logic"
                class="border-input bg-background rounded-md border px-2 py-1 text-xs"
                aria-label="Match all or any"
                @change="changed"
            >
                <option value="and">Match all</option>
                <option value="or">Match any</option>
            </select>

            <span class="text-muted-foreground text-xs">of the following</span>
        </div>

        <div v-for="(rule, i) in group.rules" :key="i" class="flex items-start gap-2">
            <PkQueryBuilder
                v-if="isGroup(rule)"
                v-model="group.rules[i] as QueryGroup"
                :fields="fields"
                :operators="operators"
                :max-depth="maxDepth"
                :depth="depth + 1"
                :root="false"
                class="flex-1"
                @update:model-value="changed"
            />

            <template v-else>
                <select
                    v-model="rule.field"
                    class="border-input bg-background rounded-md border px-2 py-1 text-sm"
                    aria-label="Field"
                    @change="fieldChanged(rule)"
                >
                    <option v-for="name in fieldNames" :key="name" :value="name">
                        {{ fields[name].label }}
                    </option>
                </select>

                <select
                    v-model="rule.operator"
                    class="border-input bg-background rounded-md border px-2 py-1 text-sm"
                    aria-label="Operator"
                    @change="changed"
                >
                    <option v-for="op in operatorsFor(rule.field)" :key="op" :value="op">
                        {{ OPERATOR_LABELS[op] ?? op }}
                    </option>
                </select>

                <!-- The value editor follows the FIELD's kind, not the operator's. -->
                <select
                    v-if="rule.field && fields[rule.field]?.kind === 'boolean'"
                    v-model="rule.value"
                    class="border-input bg-background rounded-md border px-2 py-1 text-sm"
                    aria-label="Value"
                    @change="changed"
                >
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                </select>

                <select
                    v-else-if="rule.field && fields[rule.field]?.options?.length"
                    v-model="rule.value"
                    :multiple="fields[rule.field].kind === 'multiselect'"
                    class="border-input bg-background rounded-md border px-2 py-1 text-sm"
                    aria-label="Value"
                    @change="changed"
                >
                    <option
                        v-for="option in fields[rule.field].options"
                        :key="option"
                        :value="option"
                    >
                        {{ option }}
                    </option>
                </select>

                <input
                    v-else
                    v-model="rule.value"
                    :type="rule.field && fields[rule.field]?.kind === 'daterange' ? 'date' : 'text'"
                    class="border-input bg-background rounded-md border px-2 py-1 text-sm"
                    aria-label="Value"
                    @change="changed"
                />
            </template>

            <button
                type="button"
                class="text-muted-foreground hover:text-destructive px-1 py-1 text-sm"
                :aria-label="`Remove ${isGroup(rule) ? 'group' : 'rule'}`"
                @click="remove(i)"
            >
                ×
            </button>
        </div>

        <div class="flex items-center gap-2">
            <PkButton type="button" variant="outline" size="sm" @click="addRule">Add rule</PkButton>

            <!--
                HIDDEN AT THE CAP RATHER THAN DISABLED. A disabled control asks
                the reader to work out why; an absent one says the tree is as
                deep as it goes. The server refuses beyond this regardless -
                this is the courtesy, not the limit.
            -->
            <PkButton v-if="canNest" type="button" variant="ghost" size="sm" @click="addGroup">
                Add group
            </PkButton>

            <template v-if="root">
                <span class="flex-1" />

                <PkButton type="button" variant="ghost" size="sm" @click="clear"> Clear </PkButton>

                <PkButton type="button" size="sm" @click="apply"> Apply </PkButton>
            </template>
        </div>
    </div>
</template>
