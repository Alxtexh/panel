<script setup lang="ts">
/**
 * Per-category toast and digest preferences.
 *
 * Digests are delivered by `panel:notifications-digest`. This screen only
 * stores the operator's choices; the command reads them when it runs.
 */
import { Head, useForm, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { toast } from 'vue-sonner'
import {
    PkButton as Button,
    PkHeading as Heading,
} from '@alxtexh-enterprise/panel'
import { useGroupedSettingsCards } from '../../composables/useGroupedSettingsCards'

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
const { sectionClass } = useGroupedSettingsCards()

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

    <div class="flex flex-col" :class="sectionClass">
        <Heading
            variant="small"
            title="Notifications"
            description="Control toast and digest delivery by category."
        />

        <div class="bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <div class="p-4 sm:p-5">
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
                            <tr
                                v-for="category in props.categories"
                                :key="category"
                                class="border-t"
                            >
                                <td class="py-3 pr-6 font-medium capitalize">{{ category }}</td>
                                <td class="py-3 pr-6">
                                    <label class="flex cursor-pointer items-center gap-2">
                                        <input
                                            v-model="form.preferences[category].toast_enabled"
                                            type="checkbox"
                                            class="accent-primary size-4"
                                            :name="`preferences.${category}.toast_enabled`"
                                        />
                                        <span class="text-muted-foreground">Enable</span>
                                    </label>
                                </td>
                                <td class="py-3">
                                    <label class="flex cursor-pointer items-center gap-2">
                                        <input
                                            v-model="form.preferences[category].digest_enabled"
                                            type="checkbox"
                                            class="accent-primary size-4"
                                            :name="`preferences.${category}.digest_enabled`"
                                        />
                                        <span class="text-muted-foreground">Enable</span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="text-muted-foreground mt-4 text-xs">
                    Digests are delivered by `panel:notifications-digest` and grouped daily or
                    weekly per category.
                </p>
            </div>
        </div>

        <div class="flex items-center justify-end gap-2">
            <Button :disabled="form.processing" type="button" @click="submit">Save</Button>
        </div>
    </div>
</template>
