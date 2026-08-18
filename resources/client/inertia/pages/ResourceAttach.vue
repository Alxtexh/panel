<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component.
 */
defineOptions({ inheritAttrs: false })

/**
 * Attach existing related records. A dedicated page, not a modal.
 *
 * BelongsToMany nested resources pick rows that already exist. Create still
 * makes a new one. Detach is a row action on the nested index.
 */
import { Head, Link, useForm } from '@inertiajs/vue3'
import { PkButton as Button, buttonClasses } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    schema: {
        key: string
        label: string
        labelPlural: string
        routes: { index: string; attach?: string }
    }
    options: { value: string | number; label: string }[]
    breadcrumbs: { title: string; href: string }[]
}>()

const form = useForm<{ ids: Array<string | number> }>({ ids: [] })

function toggle(id: string | number) {
    if (form.ids.map(String).includes(String(id))) {
        form.ids = form.ids.filter((value) => String(value) !== String(id))

        return
    }

    form.ids = [...form.ids, id]
}

function submit() {
    form.post(props.schema.routes.attach ?? `${props.schema.routes.index}/attach`)
}
</script>

<template>
    <Head :title="`Attach ${schema.labelPlural}`" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-4 p-3 pb-24 sm:p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="min-w-0">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                    Attach {{ schema.labelPlural }}
                </h1>
                <p class="text-muted-foreground text-sm">Pick existing records. This is a page, not a dialog.</p>
            </div>
            <Link :href="schema.routes.index" :class="buttonClasses({ variant: 'outline', size: 'sm' })">
                Back
            </Link>
        </div>

        <form class="bg-card flex flex-col gap-3 rounded-lg border p-4 sm:p-6" @submit.prevent="submit">
            <p v-if="options.length === 0" class="text-muted-foreground text-sm">
                Nothing left to attach.
            </p>
            <label
                v-for="option in options"
                :key="option.value"
                class="flex items-center gap-2 text-sm"
            >
                <input
                    type="checkbox"
                    :checked="form.ids.map(String).includes(String(option.value))"
                    :disabled="form.processing"
                    @change="toggle(option.value)"
                />
                {{ option.label }}
            </label>

            <div class="flex justify-end gap-2 pt-2">
                <Button type="submit" :disabled="form.processing || form.ids.length === 0">
                    Attach
                </Button>
            </div>
        </form>
    </div>
</template>
