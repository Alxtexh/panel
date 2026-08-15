<script setup lang="ts">
/**
 * The organisation's name and mark — playground copy so the logo must blend.
 *
 * PNG / WebP WITH ALPHA. A JPEG (or a flattened PNG) stamps a white box on
 * invoices. The packaged screen still accepts JPEG; this demo refuses it.
 */
import { Head, router, useForm, usePage } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
import { toast } from 'vue-sonner';
import type { UploadedFileValue } from '@alxtexh-enterprise/panel';
import {
    PkButton as Button,
    PkFieldLabel as Label,
    PkFileUpload,
    PkHeading as Heading,
    PkTextInput as Input,
    TRANSPARENT_IMAGE_HELP,
    assertTransparentImage,
} from '@alxtexh-enterprise/panel';
import AuthInputError from '@alxtexh-enterprise/panel/components/AuthInputError.vue';

const page = usePage();

const base = computed(() => (page.props.panel as { path?: string } | undefined)?.path ?? '');

const at = (path: string) => `${base.value === '/' ? '' : base.value}${path}`;

const props = defineProps<{
    organisation: {
        name: string;
        logo: (UploadedFileValue & { value: string }) | null;
    };
}>();

defineOptions({
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Organisation', href: '' }],
    },
});

const form = useForm({
    name: props.organisation.name,
    logo: props.organisation.logo ? 'keep' : null,
});

const logo = ref<UploadedFileValue | null>(props.organisation.logo);

watch(
    () => props.organisation.logo,
    (next) => {
        logo.value = next;
        form.logo = next ? 'keep' : null;
        form.defaults({
            name: props.organisation.name,
            logo: next ? 'keep' : null,
        });
    },
);

function submit() {
    form.logo = logo.value ? logo.value.value : null;

    form.put(at('/settings/organisation'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Organisation updated');
            router.reload();
        },
    });
}

async function upload(file: File, onProgress: (percent: number) => void): Promise<UploadedFileValue> {
    await assertTransparentImage(file);

    return new Promise((resolve, reject) => {
        const body = new FormData();

        body.append('file', file);

        const request = new XMLHttpRequest();

        request.open('POST', at('/settings/organisation/logo/upload'));
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        request.setRequestHeader('X-XSRF-TOKEN', csrf());
        request.withCredentials = true;

        request.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                onProgress(Math.round((event.loaded / event.total) * 100));
            }
        };

        request.onload = () => {
            let parsed: any = null;

            try {
                parsed = JSON.parse(request.responseText);
            } catch {
                // Left null; the status decides below.
            }

            if (request.status === 201 && parsed) {
                resolve({
                    value: parsed.handle,
                    name: parsed.name,
                    size: parsed.size,
                });

                return;
            }

            reject(new Error(parsed?.message ?? 'The upload failed.'));
        };

        request.onerror = () => reject(new Error('The upload failed.'));

        request.send(body);
    });
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

    return match ? decodeURIComponent(match[1]) : '';
}
</script>

<template>
    <Head title="Organisation" />

    <h1 class="sr-only">Organisation settings</h1>

    <div class="flex flex-col space-y-6">
        <Heading
            variant="small"
            title="Organisation"
            description="The name and logo everyone in this organisation sees"
        />

        <form class="space-y-6" @submit.prevent="submit">
            <div class="grid gap-2">
                <Label for="org-name">Name</Label>
                <Input id="org-name" v-model="form.name" required autocomplete="organization" />
                <AuthInputError :message="form.errors.name" />
                <p class="text-xs text-muted-foreground">
                    Shown in the sidebar and on every page of the panel.
                </p>
            </div>

            <div class="grid gap-2">
                <Label for="org-logo">Logo</Label>

                <PkFileUpload
                    v-model="logo"
                    :accept="['png', 'webp']"
                    :max-kilobytes="2048"
                    image
                    :upload="upload"
                />

                <AuthInputError :message="form.errors.logo" />
                <p class="text-xs text-muted-foreground">
                    {{ TRANSPARENT_IMAGE_HELP }}
                    When a logo is set it replaces the organisation name in the sidebar.
                </p>
            </div>

            <div class="flex items-center gap-4">
                <Button type="submit" :disabled="form.processing">Save changes</Button>
            </div>
        </form>
    </div>
</template>
