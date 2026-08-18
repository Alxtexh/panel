<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3'
import { computed } from 'vue'
import { PkStatusBadge } from '@alxtexh-enterprise/panel'
import { useTranslations } from '../composables/useTranslations'

defineOptions({
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Subscription access', href: '' }],
    },
})

type BillingPlan = {
    name?: string | null
    price?: string | null
    interval?: string | null
}

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    status?: string
    statusLabel?: string
    title?: string
    body?: string
    reason?: string | null
    dueMessage?: string | null
    renewalMessage?: string | null
    billingHref?: string | null
    billingLabel?: string | null
    logoutHref?: string | null
    logoutLabel?: string | null
    supportEmail?: string | null
    plan?: BillingPlan | null
}>()

const { t } = useTranslations()

const tone = computed(() => {
    switch (props.status) {
        case 'active':
            return 'success'
        case 'past_due':
            return 'warning'
        case 'suspended':
        case 'canceled':
        case 'expired':
            return 'danger'
        default:
            return 'neutral'
    }
})

const planMeta = computed(() => {
    const parts = [props.plan?.price, props.plan?.interval].filter(Boolean)

    return parts.length > 0 ? parts.join(' / ') : null
})

function logout(): void {
    if (!props.logoutHref) {
        return
    }

    router.post(props.logoutHref)
}
</script>

<template>
    <Head :title="pageHeading ?? title ?? t('billing.heading')" />

    <div class="mx-auto flex w-full max-w-3xl px-4 py-8 sm:px-6">
        <div class="w-full rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
            <div class="flex flex-col gap-4">
                <PkStatusBadge
                    :status="statusLabel ?? t('billing.status.fallback')"
                    :tone="tone"
                    class="w-fit"
                />

                <div class="space-y-2">
                    <h1 class="text-2xl font-semibold tracking-tight text-foreground">
                        {{ title ?? pageHeading ?? t('billing.title.limited') }}
                    </h1>
                    <p class="text-sm leading-6 text-muted-foreground">
                        {{ body ?? pageDescription ?? t('billing.body.attention') }}
                    </p>
                </div>

                <div class="grid gap-4 rounded-2xl border bg-muted/30 p-4 sm:grid-cols-2">
                    <div class="space-y-1">
                        <p class="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            {{ t('billing.plan') }}
                        </p>
                        <p class="text-sm font-medium text-foreground">
                            {{ plan?.name ?? t('billing.current_subscription') }}
                        </p>
                        <p v-if="planMeta" class="text-sm text-muted-foreground">
                            {{ planMeta }}
                        </p>
                    </div>

                    <div class="space-y-1">
                        <p class="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                            {{ t('billing.status_heading') }}
                        </p>
                        <p class="text-sm font-medium text-foreground">
                            {{ statusLabel ?? t('billing.status.fallback') }}
                        </p>
                        <p v-if="dueMessage || renewalMessage" class="text-sm text-muted-foreground">
                            {{ dueMessage ?? renewalMessage }}
                        </p>
                    </div>
                </div>

                <div v-if="reason" class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                    {{ reason }}
                </div>

                <div class="flex flex-col gap-3 sm:flex-row">
                    <a
                        v-if="billingHref"
                        :href="billingHref"
                        class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-95"
                    >
                        {{ billingLabel ?? t('billing.actions.manage_subscription') }}
                    </a>

                    <button
                        v-if="logoutHref"
                        type="button"
                        class="inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
                        @click="logout"
                    >
                        {{ logoutLabel ?? t('billing.actions.logout') }}
                    </button>
                </div>

                <p v-if="supportEmail" class="text-sm text-muted-foreground">
                    {{ t('billing.need_help') }}
                    <a :href="`mailto:${supportEmail}`" class="font-medium text-foreground underline underline-offset-4">
                        {{ supportEmail }}
                    </a>
                    .
                </p>
            </div>
        </div>
    </div>
</template>
