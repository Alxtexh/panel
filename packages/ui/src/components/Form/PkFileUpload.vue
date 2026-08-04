<script setup lang="ts">
/**
 * A file control: drop zone, progress, preview, remove.
 *
 * IT UPLOADS BEFORE THE FORM IS SUBMITTED, and holds a handle. That is not a
 * performance choice - it is what stops a validation error elsewhere on the
 * form from silently emptying the file input, which is the behaviour that makes
 * people re-pick a 4 MB scan because a phone number was too short.
 *
 * IT DOES NOT FETCH ON ITS OWN. @panelkit/panel ships no HTTP client (spec §4
 * rule 2), so the actual transfer is a function the page passes in. That is
 * also what keeps progress reportable: the page owns the request, so it owns
 * the progress events.
 *
 * THE CLIENT-SIDE CHECKS ARE COURTESY, NOT SECURITY. Extension and size are
 * checked here so the user hears "too big" instantly instead of after
 * uploading, but the server checks the same things against the file's actual
 * BYTES and is the only opinion that counts. Nothing here is load-bearing.
 */
import { computed, ref } from 'vue'

export interface UploadedFileValue {
    /** A pending handle, or a stored path on an existing record. */
    value: string
    name: string
    size?: number
    /** Where an already-stored file can be downloaded from. */
    url?: string | null
}

const props = withDefaults(
    defineProps<{
        modelValue: UploadedFileValue | null
        accept?: string[]
        maxKilobytes?: number
        image?: boolean
        disabled?: boolean
        /** Performs the transfer. Resolves to the handle and display name. */
        upload: (file: File, onProgress: (percent: number) => void) => Promise<UploadedFileValue>
        /** Discards a pending upload the user removed. */
        discard?: (handle: string) => Promise<void>
    }>(),
    {
        accept: () => [],
        maxKilobytes: 10240,
        image: false,
        disabled: false,
        discard: undefined,
    },
)

const emit = defineEmits<{
    (e: 'update:modelValue', value: UploadedFileValue | null): void
}>()

const input = ref<HTMLInputElement | null>(null)
const dragging = ref(false)
const progress = ref<number | null>(null)
const error = ref<string | null>(null)
/** An object URL for a just-picked image, revoked when it is replaced. */
const localPreview = ref<string | null>(null)

const acceptAttribute = computed(() => props.accept.map((e) => `.${e}`).join(','))

const previewUrl = computed(() => localPreview.value ?? props.modelValue?.url ?? null)

const hint = computed(() => {
    const kinds = props.accept.length ? props.accept.join(', ').toUpperCase() : 'Any file'

    return `${kinds} · up to ${formatSize(props.maxKilobytes * 1024)}`
})

function formatSize(bytes: number | undefined): string {
    if (!bytes) {
        return ''
    }

    const units = ['B', 'KB', 'MB', 'GB']
    let size = bytes
    let unit = 0

    while (size >= 1024 && unit < units.length - 1) {
        size /= 1024
        unit++
    }

    return `${size.toFixed(size < 10 && unit > 0 ? 1 : 0)} ${units[unit]}`
}

function extensionOf(name: string): string {
    return name.split('.').pop()?.toLowerCase() ?? ''
}

/** Courtesy checks. The server repeats both against the bytes. */
function reject(file: File): string | null {
    if (props.accept.length && !props.accept.includes(extensionOf(file.name))) {
        return `${extensionOf(file.name).toUpperCase() || 'That'} files are not accepted here.`
    }

    if (file.size > props.maxKilobytes * 1024) {
        return `That file is ${formatSize(file.size)}; the limit is ${formatSize(props.maxKilobytes * 1024)}.`
    }

    return null
}

async function accept(files: FileList | null) {
    const file = files?.[0]

    if (!file || props.disabled) {
        return
    }

    error.value = reject(file)

    if (error.value) {
        return
    }

    releasePreview()

    if (props.image && file.type.startsWith('image/')) {
        localPreview.value = URL.createObjectURL(file)
    }

    progress.value = 0

    try {
        const result = await props.upload(file, (percent) => {
            progress.value = percent
        })

        emit('update:modelValue', result)
    } catch (e) {
        // The server's reason, when it gave one - it is more specific than
        // anything guessable here, and it is the reason the file was refused.
        error.value = e instanceof Error ? e.message : 'The upload failed.'
        releasePreview()
    } finally {
        progress.value = null

        // Cleared so re-picking the SAME file fires `change` again; without
        // this, removing a file and choosing it once more does nothing.
        if (input.value) {
            input.value.value = ''
        }
    }
}

function releasePreview() {
    if (localPreview.value) {
        URL.revokeObjectURL(localPreview.value)
    }

    localPreview.value = null
}

async function remove() {
    const current = props.modelValue

    releasePreview()
    error.value = null
    emit('update:modelValue', null)

    // A pending upload is discarded server-side; a stored file is NOT deleted
    // here. Clearing the field is a change to the form, and it becomes real
    // when the form is saved - deleting on click would destroy the file even if
    // the user then abandoned the edit.
    if (current && !current.url && props.discard) {
        await props.discard(current.value).catch(() => {})
    }
}

function onDrop(event: DragEvent) {
    dragging.value = false
    accept(event.dataTransfer?.files ?? null)
}
</script>

<template>
    <div>
        <!--
            The drop zone is a LABEL, so a click opens the picker and the
            control is reachable by keyboard without a tabindex or a key
            handler - the native element already does both correctly.
        -->
        <label
            v-if="!modelValue"
            class="flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors"
            :class="[
                dragging ? 'border-primary bg-primary/5' : 'hover:bg-accent/40',
                disabled ? 'pointer-events-none opacity-50' : '',
            ]"
            @dragover.prevent="dragging = true"
            @dragleave.prevent="dragging = false"
            @drop.prevent="onDrop"
        >
            <input
                ref="input"
                type="file"
                class="sr-only"
                :accept="acceptAttribute"
                :disabled="disabled"
                @change="accept(($event.target as HTMLInputElement).files)"
            />

            <svg
                class="text-muted-foreground size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path d="M12 16V4" />
                <path d="m7 9 5-5 5 5" />
                <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>

            <span class="text-sm font-medium">
                <span v-if="progress === null">Drop a file or click to choose</span>
                <span v-else>Uploading…</span>
            </span>

            <span class="text-muted-foreground text-xs">{{ hint }}</span>

            <!-- Determinate, because "it is working" is not the question when
                 the file is large; "how much longer" is. -->
            <span
                v-if="progress !== null"
                class="bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
            >
                <span
                    class="bg-primary block h-full transition-[width] duration-150"
                    :style="{ width: `${progress}%` }"
                ></span>
            </span>
        </label>

        <div v-else class="flex items-center gap-3 rounded-lg border p-3">
            <img
                v-if="image && previewUrl"
                :src="previewUrl"
                alt=""
                class="bg-muted size-12 shrink-0 rounded object-cover"
            />

            <span
                v-else
                class="bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
            >
                {{ extensionOf(modelValue.name) || 'file' }}
            </span>

            <span class="min-w-0 flex-1">
                <span class="block truncate text-sm font-medium">{{ modelValue.name }}</span>
                <span class="text-muted-foreground text-xs">
                    {{ formatSize(modelValue.size) }}
                    <template v-if="modelValue.url">
                        ·
                        <a :href="modelValue.url" class="hover:underline">Download</a>
                    </template>
                    <template v-else> · not saved yet</template>
                </span>
            </span>

            <button
                v-if="!disabled"
                type="button"
                class="text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5"
                aria-label="Remove file"
                @click="remove"
            >
                <svg
                    class="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </button>
        </div>

        <p v-if="error" class="text-destructive mt-1.5 text-xs">{{ error }}</p>
    </div>
</template>
