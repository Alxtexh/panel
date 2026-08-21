<script setup lang="ts">
/**
 * Create/edit a plan: Plan Details vs Plan Perks.
 *
 * Modules are tags. Numeric limits use -1 for Unlimited. Extra perks are a
 * free-form key/value repeater. The page persists; this emits `save`.
 */
import { PAGE_SHELL } from '../../lib/pageShell'
import { computed, reactive, watch } from 'vue'
import PkButton from '../primitives/PkButton.vue'
import PkFieldLabel from '../primitives/PkFieldLabel.vue'
import PkTextInput from '../primitives/PkTextInput.vue'
import PkMultiSelect from '../primitives/PkMultiSelect.vue'
import { Switch } from '../shadcn/switch'
import { iconPath } from '../primitives/icons'
import type { ExtraPerk, PlanLimitField, PlanModuleOption, PlanRecord } from './planTypes'

const emptyPlan = (): PlanRecord => ({
    id: '',
    name: '',
    shortDescription: '',
    description: '',
    days: 30,
    price: 0,
    featured: false,
    recommended: false,
    trial: false,
    trialDays: 0,
    active: true,
    perks: {},
    extraPerks: [],
})

const props = withDefaults(
    defineProps<{
        plan?: PlanRecord | null
        modules?: PlanModuleOption[]
        limits?: PlanLimitField[]
        mode?: 'create' | 'edit'
        processing?: boolean
        embedded?: boolean
    }>(),
    {
        plan: null,
        modules: () => [],
        limits: () => [],
        mode: 'create',
        processing: false,
        embedded: true,
    },
)

const emit = defineEmits<{
    save: [plan: PlanRecord]
    cancel: []
}>()

const draft = reactive<PlanRecord>(emptyPlan())

function perkValue(key: string, fallback: number | boolean | string[]): number | boolean | string[] {
    const current = draft.perks?.[key]?.value

    if (current === undefined || current === null) {
        return fallback
    }

    return current as number | boolean | string[]
}

function setPerk(key: string, value: number | boolean | string[], overview?: string) {
    const existing = draft.perks?.[key]
    draft.perks = {
        ...(draft.perks ?? {}),
        [key]: {
            value,
            overview: overview ?? existing?.overview ?? '',
        },
    }
}

function setOverview(key: string, overview: string) {
    const existing = draft.perks?.[key]
    draft.perks = {
        ...(draft.perks ?? {}),
        [key]: {
            value: existing?.value ?? (key === 'modules' ? [] : 0),
            overview,
        },
    }
}

function hydrate(source: PlanRecord | null | undefined) {
    const next = source ? { ...emptyPlan(), ...source } : emptyPlan()
    draft.id = next.id
    draft.name = next.name
    draft.shortDescription = next.shortDescription ?? ''
    draft.description = next.description ?? ''
    draft.days = next.days
    draft.price = next.price
    draft.featured = next.featured ?? false
    draft.recommended = next.recommended ?? false
    draft.trial = next.trial ?? false
    draft.trialDays = next.trialDays ?? 0
    draft.active = next.active ?? true
    draft.perks = { ...(next.perks ?? {}) }
    draft.extraPerks = [...(next.extraPerks ?? [])]

    if (!draft.perks.modules) {
        setPerk('modules', [])
    }
}

hydrate(props.plan)

watch(
    () => props.plan,
    (plan) => hydrate(plan),
    { deep: true },
)

const moduleKeys = computed({
    get: () => {
        const value = perkValue('modules', [])
        return Array.isArray(value) ? value.map(String) : []
    },
    set: (keys: (string | number)[]) => {
        setPerk('modules', withRequiredParents(keys.map(String)), draft.perks?.modules?.overview ?? '')
    },
})

const moduleOptions = computed(() =>
    props.modules.map((mod) => ({ value: mod.key, label: mod.label })),
)

function withRequiredParents(keys: string[]): string[] {
    const byKey = Object.fromEntries(props.modules.map((mod) => [mod.key, mod]))
    const selected = new Set(keys)

    for (const mod of props.modules) {
        if (!selected.has(mod.key)) {
            for (const child of mod.children ?? []) {
                selected.delete(child)
            }
        }
    }

    let changed = true
    while (changed) {
        changed = false
        for (const key of [...selected]) {
            for (const parent of byKey[key]?.requires ?? []) {
                if (!selected.has(parent)) {
                    selected.add(parent)
                    changed = true
                }
            }
        }
    }

    return [...selected]
}

function addExtra() {
    draft.extraPerks = [...(draft.extraPerks ?? []), { key: '', value: '' }]
}

function removeExtra(index: number) {
    draft.extraPerks = (draft.extraPerks ?? []).filter((_, i) => i !== index)
}

function submit() {
    emit('save', {
        ...draft,
        extraPerks: (draft.extraPerks ?? []).filter((row) => row.key.trim() !== ''),
    })
}

const inputClass =
    'file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const areaClass =
    'placeholder:text-muted-foreground dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'
</script>

<template>
    <form
        class="w-full space-y-6"
        :class="embedded ? '' : PAGE_SHELL"
        data-slot="plan-editor"
        @submit.prevent="submit"
    >
        <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">
                    {{ mode === 'edit' ? 'Edit plan' : 'Create plan' }}
                </h1>
                <p class="text-muted-foreground mt-1 text-sm">
                    Plans are organisation-wide. Charge a recurring amount. Perks are modules and
                    numeric limits (-1 is Unlimited).
                </p>
            </div>
            <PkButton type="button" variant="outline" @click="emit('cancel')">Cancel</PkButton>
        </header>

        <div class="flex flex-col-reverse items-start gap-6 lg:flex-row">
            <section class="bg-card w-full flex-1 space-y-4 rounded-lg border p-5">
                <h2 class="font-semibold">Plan details</h2>

                <div class="space-y-1.5">
                    <PkFieldLabel for="plan-name">Plan name</PkFieldLabel>
                    <PkTextInput id="plan-name" v-model="draft.name" required />
                </div>

                <div class="space-y-1.5">
                    <PkFieldLabel for="plan-short">Short description (optional)</PkFieldLabel>
                    <PkTextInput
                        id="plan-short"
                        v-model="draft.shortDescription as string"
                        placeholder="For an organisation getting started"
                    />
                </div>

                <div class="space-y-1.5">
                    <PkFieldLabel for="plan-description">Plan description</PkFieldLabel>
                    <textarea
                        id="plan-description"
                        v-model="draft.description as string"
                        required
                        placeholder="Shown on the company-wide catalogue"
                        :class="areaClass"
                    />
                </div>

                <div class="space-y-1.5">
                    <PkFieldLabel for="plan-days">Duration</PkFieldLabel>
                    <select id="plan-days" v-model.number="draft.days" :class="inputClass">
                        <option :value="30">Monthly</option>
                        <option :value="365">Yearly</option>
                        <option :value="999999">Lifetime</option>
                    </select>
                </div>

                <div class="space-y-1.5">
                    <PkFieldLabel for="plan-price">Price</PkFieldLabel>
                    <PkTextInput
                        id="plan-price"
                        :model-value="draft.price"
                        type="number"
                        step="any"
                        required
                        @update:model-value="draft.price = Number($event)"
                    />
                </div>

                <label class="flex items-center gap-3 text-sm">
                    <Switch :checked="!!draft.featured" @update:checked="draft.featured = $event" />
                    Featured
                </label>
                <label class="flex items-center gap-3 text-sm">
                    <Switch
                        :checked="!!draft.recommended"
                        @update:checked="draft.recommended = $event"
                    />
                    Recommended
                </label>
                <label class="flex items-center gap-3 text-sm">
                    <Switch :checked="!!draft.trial" @update:checked="draft.trial = $event" />
                    Offer a trial
                </label>
                <div v-if="draft.trial" class="space-y-1.5">
                    <PkFieldLabel for="plan-trial-days">Trial days</PkFieldLabel>
                    <PkTextInput
                        id="plan-trial-days"
                        :model-value="draft.trialDays ?? 0"
                        type="number"
                        required
                        @update:model-value="draft.trialDays = Number($event)"
                    />
                </div>
                <label class="flex items-center gap-3 text-sm">
                    <Switch :checked="draft.active !== false" @update:checked="draft.active = $event" />
                    Active
                </label>

                <PkButton type="submit" :disabled="processing">
                    {{ mode === 'edit' ? 'Save plan' : 'Create plan' }}
                </PkButton>
            </section>

            <section class="bg-card w-full flex-1 space-y-4 rounded-lg border p-5">
                <h2 class="font-semibold">Plan perks</h2>

                <div class="space-y-1.5">
                    <PkFieldLabel>Modules access</PkFieldLabel>
                    <PkMultiSelect
                        v-model="moduleKeys"
                        :options="moduleOptions"
                        placeholder="Select modules"
                    />
                    <PkFieldLabel for="plan-modules-overview">Overview</PkFieldLabel>
                    <textarea
                        id="plan-modules-overview"
                        :value="draft.perks?.modules?.overview ?? ''"
                        :class="areaClass"
                        @input="
                            setOverview(
                                'modules',
                                ($event.target as HTMLTextAreaElement).value,
                            )
                        "
                    />
                </div>

                <div v-for="field in limits" :key="field.key" class="space-y-1.5">
                    <template v-if="field.kind === 'toggle'">
                        <label class="flex items-center gap-3 text-sm">
                            <Switch
                                :checked="Boolean(perkValue(field.key, false))"
                                @update:checked="
                                    setPerk(
                                        field.key,
                                        $event,
                                        draft.perks?.[field.key]?.overview ?? '',
                                    )
                                "
                            />
                            {{ field.label }}
                        </label>
                    </template>
                    <template v-else>
                        <PkFieldLabel :for="`plan-limit-${field.key}`">
                            {{ field.label }}
                        </PkFieldLabel>
                        <p v-if="field.hint" class="text-muted-foreground text-xs">
                            {{ field.hint }}
                        </p>
                        <PkTextInput
                            :id="`plan-limit-${field.key}`"
                            :model-value="Number(perkValue(field.key, 0))"
                            type="number"
                            :step="field.step ?? 1"
                            required
                            @update:model-value="
                                setPerk(
                                    field.key,
                                    Number($event),
                                    draft.perks?.[field.key]?.overview ?? '',
                                )
                            "
                        />
                        <p class="text-muted-foreground text-xs">Use -1 for Unlimited.</p>
                    </template>
                    <PkFieldLabel :for="`plan-overview-${field.key}`">Overview</PkFieldLabel>
                    <textarea
                        :id="`plan-overview-${field.key}`"
                        :value="draft.perks?.[field.key]?.overview ?? ''"
                        :class="areaClass"
                        @input="
                            setOverview(
                                field.key,
                                ($event.target as HTMLTextAreaElement).value,
                            )
                        "
                    />
                </div>

                <div class="space-y-2">
                    <p class="text-sm font-semibold">Extra perks</p>
                    <div
                        v-for="(row, index) in draft.extraPerks ?? []"
                        :key="index"
                        class="flex items-center gap-2"
                    >
                        <PkTextInput v-model="row.key" placeholder="Label" />
                        <PkTextInput v-model="row.value" placeholder="Value" />
                        <PkButton
                            type="button"
                            variant="destructive"
                            size="icon"
                            aria-label="Remove perk"
                            @click="removeExtra(index)"
                        >
                            <svg
                                class="size-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath('x')" />
                            </svg>
                        </PkButton>
                    </div>
                    <PkButton type="button" variant="outline" size="sm" @click="addExtra">
                        Add extra perk
                    </PkButton>
                </div>
            </section>
        </div>
    </form>
</template>
