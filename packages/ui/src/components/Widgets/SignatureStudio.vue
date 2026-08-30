<script setup lang="ts">
/**
 * Draw a signature, keep logos/stamps, preview them on documents.
 *
 * LOCAL STATE ON PURPOSE unless the page v-models marks. PkFileUpload still
 * runs: the "upload" is a FileReader, not a processor. Stamps must be
 * transparent PNG/WebP (`assertTransparentImage`).
 */
import { computed, onMounted, ref, watch } from 'vue'
import { PAGE_SHELL } from '../../lib/pageShell'
import { TRANSPARENT_IMAGE_HELP, assertTransparentImage } from '../../lib/transparentImage'
import PkDocument from '../Document/PkDocument.vue'
import PkFileUpload from '../Form/PkFileUpload.vue'
import type { UploadedFileValue } from '../Form/PkFileUpload.vue'
import PkButton from '../primitives/PkButton.vue'
import PkHeading from '../primitives/PkHeading.vue'
import PkSignaturePad from '../primitives/PkSignaturePad.vue'

export type SavedMark = { id: string; name: string; dataUrl: string }

export type StudioDocument = {
    key: string
    label: string
    document: Record<string, unknown>
}

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string | null
        documents?: StudioDocument[]
        storageKey?: string | null
        embedded?: boolean
    }>(),
    {
        title: 'Signatures',
        description: null,
        documents: () => [],
        storageKey: null,
        embedded: true,
    },
)

const signatures = ref<SavedMark[]>([])
const stamps = ref<SavedMark[]>([])
const activeSignature = ref<string | null>(null)
const activeStamp = ref<string | null>(null)
const logo = ref<UploadedFileValue | null>(null)
const kind = ref(props.documents[0]?.key ?? '')

function loadList(key: string): SavedMark[] {
    try {
        const raw = localStorage.getItem(key)
        const parsed = raw ? JSON.parse(raw) : []

        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

onMounted(() => {
    if (!props.storageKey || typeof localStorage === 'undefined') {
        return
    }

    signatures.value = loadList(`${props.storageKey}.signatures`)
    stamps.value = loadList(`${props.storageKey}.stamps`)
    activeSignature.value = signatures.value[0]?.id ?? null
    activeStamp.value = stamps.value[0]?.id ?? null
})

watch(
    signatures,
    (value) => {
        if (!props.storageKey || typeof localStorage === 'undefined') {
            return
        }

        localStorage.setItem(`${props.storageKey}.signatures`, JSON.stringify(value))
    },
    { deep: true },
)

watch(
    stamps,
    (value) => {
        if (!props.storageKey || typeof localStorage === 'undefined') {
            return
        }

        localStorage.setItem(`${props.storageKey}.stamps`, JSON.stringify(value))
    },
    { deep: true },
)

function saveSignature(dataUrl: string): void {
    const mark: SavedMark = {
        id: `sig-${Date.now()}`,
        name: `Signature ${signatures.value.length + 1}`,
        dataUrl,
    }

    signatures.value = [mark, ...signatures.value].slice(0, 8)
    activeSignature.value = mark.id
}

async function readLocal(
    file: File,
    onProgress: (percent: number) => void,
): Promise<UploadedFileValue> {
    await assertTransparentImage(file)

    onProgress(40)

    const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(String(reader.result))
        reader.onerror = () => reject(new Error('Could not read the file'))
        reader.readAsDataURL(file)
    })

    onProgress(100)

    return { value: dataUrl, name: file.name, size: file.size, url: dataUrl }
}

function keepStamp(): void {
    const url = logo.value?.url ?? logo.value?.value

    if (!url) {
        return
    }

    const mark: SavedMark = {
        id: `stamp-${Date.now()}`,
        name: logo.value?.name ?? 'Stamp',
        dataUrl: url,
    }

    stamps.value = [mark, ...stamps.value].slice(0, 8)
    activeStamp.value = mark.id
}

const signatureSrc = computed(
    () => signatures.value.find((item) => item.id === activeSignature.value)?.dataUrl ?? null,
)

const stampSrc = computed(
    () => stamps.value.find((item) => item.id === activeStamp.value)?.dataUrl ?? null,
)

const preview = computed(() => {
    const source =
        props.documents.find((item) => item.key === kind.value)?.document ??
        props.documents[0]?.document ??
        {}
    const branding = {
        ...((source?.branding as Record<string, unknown> | undefined) ?? {}),
        logoUrl: logo.value?.url ?? null,
    }

    return {
        ...source,
        branding,
    }
})
</script>

<template>
    <div class="flex w-full flex-col gap-10" :class="embedded ? '' : PAGE_SHELL">
        <PkHeading :title="title" :description="description ?? undefined" />

        <section class="grid gap-8 lg:grid-cols-2">
            <PkSignaturePad label="Draw a signature" @save="saveSignature" />

            <div class="flex flex-col gap-3">
                <p class="text-sm font-medium">Company logo / stamp</p>
                <p class="text-muted-foreground text-xs font-normal">
                    {{ TRANSPARENT_IMAGE_HELP }}
                </p>
                <PkFileUpload
                    v-model="logo"
                    image
                    :accept="['png', 'webp']"
                    :max-kilobytes="2048"
                    :upload="readLocal"
                />
                <PkButton size="sm" variant="outline" :disabled="!logo" @click="keepStamp">
                    Save as stamp
                </PkButton>
            </div>
        </section>

        <section v-if="signatures.length" class="flex flex-col gap-3">
            <PkHeading variant="small" title="Saved signatures" />
            <div class="flex flex-wrap gap-3">
                <button
                    v-for="item in signatures"
                    :key="item.id"
                    type="button"
                    class="rounded-md border p-2"
                    :class="item.id === activeSignature ? 'ring-ring ring-2' : ''"
                    @click="activeSignature = item.id"
                >
                    <img
                        :src="item.dataUrl"
                        :alt="item.name"
                        class="h-12 w-40 bg-white object-contain"
                    />
                </button>
            </div>
        </section>

        <section v-if="stamps.length" class="flex flex-col gap-3">
            <PkHeading variant="small" title="Saved stamps" />
            <div class="flex flex-wrap gap-3">
                <button
                    v-for="item in stamps"
                    :key="item.id"
                    type="button"
                    class="rounded-md border p-2"
                    :class="item.id === activeStamp ? 'ring-ring ring-2' : ''"
                    @click="activeStamp = item.id"
                >
                    <img
                        :src="item.dataUrl"
                        :alt="item.name"
                        class="size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
                    />
                </button>
            </div>
        </section>

        <section v-if="documents.length" class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center gap-2">
                <PkButton
                    v-for="item in documents"
                    :key="item.key"
                    size="sm"
                    :variant="kind === item.key ? 'default' : 'outline'"
                    @click="kind = item.key"
                >
                    {{ item.label }}
                </PkButton>
            </div>

            <div class="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm">
                <PkDocument :document="preview as any" />
                <div class="flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black">
                    <div class="flex flex-col gap-2">
                        <p class="text-xs tracking-wider text-neutral-500 uppercase">Signed</p>
                        <img
                            v-if="signatureSrc"
                            :src="signatureSrc"
                            alt="Signature"
                            class="h-16 w-48 object-contain"
                        />
                        <p v-else class="text-sm text-neutral-400">Draw and save a signature</p>
                    </div>
                    <img
                        v-if="stampSrc"
                        :src="stampSrc"
                        alt="Stamp"
                        class="h-20 w-20 object-contain"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
