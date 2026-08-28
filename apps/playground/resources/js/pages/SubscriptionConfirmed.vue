<script setup lang="ts">
/**
 * The dedicated confirmation page `ClientPanelProvider`'s demo checkout
 * closure sends the browser to - the "no live processor yet" alternative to
 * an external Stripe/Paddle checkout page. Fully custom, host-owned: see
 * `SubscriptionConfirmedPage`'s own docblock for why this is not a package
 * screen.
 */
import { Head, Link } from '@inertiajs/vue3'
import {
    PAGE_SHELL_COMPACT,
    PkPageHeader,
    buttonClasses,
} from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

defineProps<{
    plan: { name: string; priceFormatted: string } | null
    subscriptionHref: string
}>()
</script>

<template>
    <Head title="Subscription request received" />

    <div :class="[PAGE_SHELL_COMPACT, 'flex flex-col gap-4']">
        <PkPageHeader title="Request received" />

        <div class="bg-card flex flex-col gap-3 rounded-xl border p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <p v-if="plan" class="text-sm">
                We've noted your request to switch to
                <span class="font-medium">{{ plan.name }}</span>
                (<span class="font-medium">{{ plan.priceFormatted }}</span> / month).
            </p>
            <p v-else class="text-sm">We've noted your subscription request.</p>

            <p class="text-muted-foreground text-sm font-normal">
                This demo has no live payment processor wired up, so nothing was
                charged. A real host points
                <code class="bg-muted rounded px-1 py-0.5 text-xs">Panel::planCatalog()</code>
                at a Stripe/Paddle/etc checkout session instead of this page - see
                <code class="bg-muted rounded px-1 py-0.5 text-xs">docs/13-billing-adapters.md</code>.
            </p>

            <div class="pt-2">
                <Link :href="subscriptionHref" :class="buttonClasses({ size: 'sm' })">
                    Back to subscription
                </Link>
            </div>
        </div>
    </div>
</template>
