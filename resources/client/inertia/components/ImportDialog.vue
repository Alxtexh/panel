<script setup lang="ts">
/**
 * Import records from a CSV. The client half of `ImportController` - which
 * has always taken a file, a mapping and a dry-run flag, with no page ever
 * sending them. Roadmap 3.8 gave it one, in the same step language the
 * wizard FIELD already draws (`PkStepIndicator`, pulled out of it), because
 * three screens - upload, map, review - are exactly what a wizard is for.
 *
 * NO COLUMN IS EVER GUESSED. `ImportController`'s own note is the reason:
 * matching "Mobile" to "phone" by string similarity is right often enough to
 * be trusted and wrong often enough to import phone numbers into the name
 * field. Every mapping starts as "don't import this column" and stays there
 * until the operator picks something.
 *
 * THE PREVIEW IS THE SAME REQUEST AS THE REAL ONE, `dryRun` true instead of
 * false - see `Importer`'s own note on why that is not a separate check.
 * Nothing is imported until the operator has seen the exact rows that would
 * fail and chosen to go back rather than proceed.
 */
import { computed, ref, watch } from 'vue'
import { PkButton as Button, PkModal, PkStepIndicator } from '@alxtexh-enterprise/panel'
import { useImport } from '../composables/useImport'
import type { ImportField, ImportRunResult } from '../composables/useImport'

const props = defineProps<{
    open: boolean
    /** The resource's base URL, e.g. `/clients` - import routes hang off it. */
    baseUrl: string
    resourceLabel: string
    /** Excel is optional: Resource::excelImport() plus phpoffice/phpspreadsheet. */
    excel?: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
    (e: 'imported', written: number): void
}>()

const { busy, error, inspect, run } = useImport(props.baseUrl)

const steps = computed(() => [
    {
        label: 'Upload',
        description: props.excel ? 'Choose a CSV or Excel file' : 'Choose a CSV file',
    },
    { label: 'Map columns', description: 'Match each column to a field' },
    { label: 'Review', description: 'Check before writing anything' },
])

const activeStep = ref(0)
const file = ref<File | null>(null)
const headers = ref<string[]>([])
const fields = ref<ImportField[]>([])
/** file header => field key, or '' for "don't import this column". */
const mapping = ref<Record<string, string>>({})
const dryRunResult = ref<ImportRunResult | null>(null)

function reset(): void {
    activeStep.value = 0
    file.value = null
    headers.value = []
    fields.value = []
    mapping.value = {}
    dryRunResult.value = null
    error.value = null
}

watch(
    () => props.open,
    (open) => {
        if (open) {
            reset()
        }
    },
)

const requiredUnmapped = computed(() =>
    fields.value.filter((f) => f.required && !Object.values(mapping.value).includes(f.key)),
)

/**
 * Required fields first, in their own `<optgroup>` - the server sends one
 * flat, declaration-ordered list, which mixed twelve fields into one menu
 * with no way to tell "must map this" from "only if you have it" without
 * reading each `*`. Split once here rather than in the template, which
 * would recompute the same filter for every one of the file's columns.
 */
const requiredFields = computed(() => fields.value.filter((f) => f.required))
const optionalFields = computed(() => fields.value.filter((f) => !f.required))

const chosenMapping = computed(() =>
    Object.fromEntries(Object.entries(mapping.value).filter(([, field]) => field !== '')),
)

async function chooseFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement
    const chosen = input.files?.[0] ?? null

    if (!chosen) {
        return
    }

    file.value = chosen

    const result = await inspect(chosen)

    if (error.value) {
        return
    }

    headers.value = result.headers
    fields.value = result.fields
    mapping.value = Object.fromEntries(result.headers.map((h) => [h, '']))
    activeStep.value = 1
}

async function runDryRun(): Promise<void> {
    if (!file.value) {
        return
    }

    const result = await run(file.value, chosenMapping.value, true)

    if (error.value) {
        return
    }

    dryRunResult.value = result
    activeStep.value = 2
}

async function confirmImport(): Promise<void> {
    if (!file.value) {
        return
    }

    const result = await run(file.value, chosenMapping.value, false)

    if (error.value) {
        return
    }

    if ((result.failed ?? 0) > 0 || result.message) {
        /*
         * `result.message` ALONE (WITH `failed` STILL 0) IS THE WRITE-TIME
         * CASE, not the validation one above. A backend that writes in one
         * all-or-nothing batch (`apps/playground`'s bulk insert) can refuse
         * the whole import with `written: 0` and a top-level `message`
         * while `failed` stays 0 - nothing THIS validator checks changed,
         * only a database constraint neither validator can see. Falling
         * through to `emit('imported', 0)` there would close the dialog
         * claiming success on nothing written, with the actual reason -
         * "this access code already exists" - never shown. An empty file
         * legitimately writes 0 rows with no `message` at all, which is why
         * this does not key off `written` alone.
         */
        dryRunResult.value = result

        return
    }

    emit('imported', result.written ?? 0)
}
</script>

<template>
    <PkModal
        :open="open"
        :title="`Import ${resourceLabel}`"
        description="From a CSV file, mapped column by column."
        size="form"
        :busy="busy"
        @close="emit('close')"
    >
        <div class="flex flex-col gap-4">
            <PkStepIndicator :steps="steps" :active-step="activeStep" :interactive="false" />

            <p v-if="error" class="text-destructive text-sm">{{ error }}</p>

            <!-- Step 0: upload -->
            <div v-if="activeStep === 0" class="flex flex-col gap-2">
                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">{{ excel ? 'CSV or Excel file' : 'CSV file' }}</span>
                    <input
                        type="file"
                        :accept="excel ? '.csv,text/csv,.xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel' : '.csv,text/csv'"
                        class="rounded-md border border-input bg-background px-3 py-1.5 text-sm"
                        :disabled="busy"
                        @change="chooseFile"
                    />
                </label>
                <p class="text-muted-foreground text-xs font-normal">
                    Up to 20 MB, and its first row must be a header.
                </p>
            </div>

            <!-- Step 1: map columns -->
            <div v-else-if="activeStep === 1" class="flex flex-col gap-3">
                <div class="rounded-md border">
                    <div
                        class="text-muted-foreground grid grid-cols-[1fr_1.4fr] gap-3 border-b px-3 py-1.5 text-xs font-medium"
                    >
                        <span>CSV column</span>
                        <span>Import as</span>
                    </div>

                    <div
                        v-for="header in headers"
                        :key="header"
                        class="grid grid-cols-[1fr_1.4fr] items-center gap-3 border-b px-3 py-2 text-sm last:border-b-0"
                    >
                        <span class="truncate font-mono text-xs" :title="header">{{ header }}</span>
                        <select
                            v-model="mapping[header]"
                            class="w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm"
                        >
                            <option value="">Don't import this column</option>
                            <optgroup label="Required">
                                <option v-for="f in requiredFields" :key="f.key" :value="f.key">
                                    {{ f.label }}
                                </option>
                            </optgroup>
                            <optgroup v-if="optionalFields.length" label="Optional">
                                <option v-for="f in optionalFields" :key="f.key" :value="f.key">
                                    {{ f.label }}
                                </option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <p
                    v-if="requiredUnmapped.length"
                    class="text-xs text-amber-600 dark:text-amber-500"
                >
                    Required and not yet mapped:
                    {{ requiredUnmapped.map((f) => f.label).join(', ') }}
                </p>
            </div>

            <!-- Step 2: review -->
            <div v-else class="flex flex-col gap-3 text-sm">
                <p>
                    <strong>{{ dryRunResult?.importable ?? 0 }}</strong> row{{
                        dryRunResult?.importable === 1 ? '' : 's'
                    }}
                    ready to import.
                    <template v-if="dryRunResult?.failed">
                        <strong class="text-destructive">{{ dryRunResult.failed }}</strong>
                        would fail.
                    </template>
                </p>

                <p v-if="dryRunResult?.message" class="text-destructive text-xs">
                    {{ dryRunResult.message }}
                </p>

                <ul
                    v-if="dryRunResult?.failures.length"
                    class="flex flex-col gap-1 rounded-md border p-2 text-xs"
                >
                    <li v-for="f in dryRunResult.failures" :key="f.line">
                        <span class="font-mono">Row {{ f.line }}</span> - {{ f.messages.join(' ') }}
                    </li>
                    <li v-if="dryRunResult?.truncated" class="text-muted-foreground">
                        …and more. Fix these first.
                    </li>
                </ul>

                <a
                    v-if="dryRunResult?.failuresDownload"
                    :href="dryRunResult.failuresDownload"
                    class="text-sm underline-offset-2 hover:underline"
                >
                    Download failed rows
                </a>
            </div>
        </div>

        <template #footer>
            <Button variant="ghost" size="sm" :disabled="busy" @click="emit('close')"
                >Cancel</Button
            >

            <Button
                v-if="activeStep === 1"
                size="sm"
                :disabled="busy || requiredUnmapped.length > 0"
                @click="runDryRun"
            >
                Preview
            </Button>

            <Button
                v-if="activeStep === 2"
                size="sm"
                :disabled="busy || (dryRunResult?.failed ?? 0) > 0"
                @click="confirmImport"
            >
                Import {{ dryRunResult?.importable ?? 0 }} row{{
                    dryRunResult?.importable === 1 ? '' : 's'
                }}
            </Button>
        </template>
    </PkModal>
</template>
