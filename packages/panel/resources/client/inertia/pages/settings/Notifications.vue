<script setup lang="ts">
import { Head, useForm, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import {
    PkButton as Button,
    PkHeading as Heading,
} from '@alxtexh-enterprise/panel'

type Props = {
    categories: string[]
    preferences: Record<
        string,
        {
            toast_enabled: boolean
            digest_enabled: boolean
        }
    >
}

const props = defineProps<Props>()

const page = usePage()

const base = computed(() => (page.props.panel as { path?: string } | undefined)?.path ?? '')
const at = (path: string) => `${base.value === '/' ? '' : base.value}${path}`

const form = useForm({
    preferences: props.preferences,
})

function submit() {
    form.put(at('/settings/notifications'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Notification preferences saved.')
        },
    })
}

defineOptions({
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Notification preferences', href: '' }],
    },
})
</script>

<template>
    <Head title="Notification preferences" />

    <h1 class="sr-only">Notification preferences</h1>

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <Heading
            variant="small"
            title="Notifications"
            description="Control toast and digest delivery by category."
        />

        <div class="rounded-lg border bg-card">
            <div class="p-4">
                <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm">
                        <thead>
                            <tr class="text-muted-foreground">
                                <th class="pb-3 pr-6 font-medium">Category</th>
                                <th class="pb-3 pr-6 font-medium">Toast</th>
                                <th class="pb-3 font-medium">Digest</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in props.categories" :key="category" class="border-t">
                                <td class="py-3 pr-6 font-medium capitalize">{{ category }}</td>
                                <td class="py-3">
                                    <label class="flex cursor-pointer items-center gap-2">
                                        <input
                                            type="checkbox"
                                            class="size-4 accent-primary"
                                            v-model="form.preferences[category].toast_enabled"
                                            :name="`preferences.${category}.toast_enabled`"
                                        />
                                        <span class="text-muted-foreground">Enable</span>
                                    </label>
                                </td>
                                <td class="py-3">
                                    <label class="flex cursor-pointer items-center gap-2">
                                        <input
                                            type="checkbox"
                                            class="size-4 accent-primary"
                                            v-model="form.preferences[category].digest_enabled"
                                            :name="`preferences.${category}.digest_enabled`"
                                        />
                                        <span class="text-muted-foreground">Enable</span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="mt-4 text-xs text-muted-foreground">
                    Digests are delivered by `panel:notifications-digest` and grouped daily or
                    weekly per category.
                </p>
            </div>
        </div>

        <div class="flex items-center justify-end gap-2">
            <Button :disabled="form.processing" type="button" @click="submit">
                Save
            </Button>
        </div>
    </div>
</template>

