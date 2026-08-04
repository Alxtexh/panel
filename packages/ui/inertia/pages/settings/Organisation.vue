<script setup lang="ts">
/**
 * The organisation's name and mark.
 *
 * NOT PART OF PROFILE, deliberately. A profile is one person and changing it
 * affects nobody else; this changes what every colleague sees in the sidebar of
 * every page. Putting them on one screen is how somebody renames the company
 * while trying to rename themselves.
 *
 * THE LOGO USES THE SAME CONTROL AND THE SAME VETTING as any other upload -
 * uploaded ahead of the form, checked against its bytes, stored privately. It
 * is the one file the panel serves INLINE rather than as an attachment, because
 * it has to render in an `<img>`; that is exactly why the accepted set here is
 * raster-only and excludes SVG, which executes script and would land on every
 * page of the panel at once.
 */
// Generated from the routes: a renamed endpoint breaks the build rather
// than leaving this form posting at a 404.
import { Head, router, useForm } from '@inertiajs/vue3'
import type { UploadedFileValue } from '@alxtexh-enterprise/panel'
import { PkFileUpload } from '@alxtexh-enterprise/panel'
import { PkButton as Button } from '@alxtexh-enterprise/panel'
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import {
    PkFieldLabel as Label,
    PkHeading as Heading,
    PkTextInput as Input,
} from '@alxtexh-enterprise/panel'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import AuthInputError from '../../components/AuthInputError.vue'
/*
 * GENERATED, NOT TYPED OUT - the same rule the account menu follows.
 *
 * The module path moved when `OrganisationPage` took over the routing, because
 * Wayfinder derives it from route NAMES. The URLs did not move: the page
 * declares `settings/organisation` precisely so adopting the mechanism does not
 * relocate a screen people have bookmarked.
 */
const page = usePage()

/**
 * THE PANEL'S PREFIX. The demo imported generated route helpers; a packaged
 * screen has none to import, and the panel may be mounted anywhere. These are
 * the three URLs `OrganisationPage` declares: the save sits on the page's own
 * address, and the logo endpoints hang off it.
 */
const base = computed(() => (page.props.panel as { path?: string } | undefined)?.path ?? '')

const at = (path: string) => `${base.value === '/' ? '' : base.value}${path}`

const props = defineProps<{
    organisation: {
        name: string
        logo: (UploadedFileValue & { value: string }) | null
    }
}>()

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Organisation', href: '' }],
    },
})

const form = useForm({
    name: props.organisation.name,
    /*
     * `keep` rather than a path.
     *
     * The form has to be able to say "unchanged" without ever holding a storage
     * location - a client that knows where a file lives is a client that can
     * try to name a different one. So the three states are: `keep`, a fresh
     * upload handle, or null for remove.
     */
    logo: props.organisation.logo ? 'keep' : null,
})

const logo = ref<UploadedFileValue | null>(props.organisation.logo)

/*
 * Resynced after a save, because the value CHANGES MEANING at that point.
 *
 * Before saving it is a fresh upload handle with no url, which is what makes
 * the control say "not saved yet"; afterwards the server sends back `keep` and
 * a download url. Without this the logo stayed marked unsaved forever after
 * being saved successfully - the one moment the user is looking for
 * confirmation that it worked.
 */
watch(
    () => props.organisation.logo,
    (next) => {
        logo.value = next
        form.logo = next ? 'keep' : null
        form.defaults({
            name: props.organisation.name,
            logo: next ? 'keep' : null,
        })
    },
)

function submit() {
    form.logo = logo.value ? logo.value.value : null

    form.put(at('/settings/organisation'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Organisation updated')
            // The sidebar mark is rendered from shared props, so the whole page
            // has to hear about a new logo - a partial reload of this form
            // alone would leave the old one in the corner of the screen.
            router.reload()
        },
    })
}

/**
 * Uploads the logo and returns the handle the form will carry.
 *
 * XHR rather than fetch, because fetch still cannot report UPLOAD progress.
 */
function upload(file: File, onProgress: (percent: number) => void): Promise<UploadedFileValue> {
    return new Promise((resolve, reject) => {
        const body = new FormData()

        body.append('file', file)

        const request = new XMLHttpRequest()

        request.open('POST', at('/settings/organisation/logo/upload'))
        request.setRequestHeader('Accept', 'application/json')
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        request.setRequestHeader('X-XSRF-TOKEN', csrf())
        request.withCredentials = true

        request.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                onProgress(Math.round((event.loaded / event.total) * 100))
            }
        }

        request.onload = () => {
            let parsed: any = null

            try {
                parsed = JSON.parse(request.responseText)
            } catch {
                // Left null; the status decides below.
            }

            if (request.status === 201 && parsed) {
                resolve({
                    value: parsed.handle,
                    name: parsed.name,
                    size: parsed.size,
                })

                return
            }

            // The server's own reason - "the file's contents do not match its
            // .png extension" is actionable, "upload failed" is not.
            reject(new Error(parsed?.message ?? 'The upload failed.'))
        }

        request.onerror = () => reject(new Error('The upload failed.'))

        request.send(body)
    })
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
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
                    :accept="['png', 'jpg', 'jpeg', 'webp']"
                    :max-kilobytes="2048"
                    image
                    :upload="upload"
                />

                <AuthInputError :message="form.errors.logo" />
                <p class="text-xs text-muted-foreground">
                    A square mark reads best. When a logo is set it replaces the organisation name
                    in the sidebar, so the two never compete for the same space.
                </p>
            </div>

            <div class="flex items-center gap-4">
                <Button type="submit" :disabled="form.processing">Save changes</Button>
            </div>
        </form>
    </div>
</template>
