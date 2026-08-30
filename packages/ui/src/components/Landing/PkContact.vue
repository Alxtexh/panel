<script setup lang="ts">
/**
 * How to reach you: display contact, not a packaged form endpoint.
 *
 * A real POST handler is the application's job (spam, CSRF, mail). This section
 * shows mailto / phone / address so the marketing page closes without inventing
 * a contact API every host would have to tear out.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    email?: string
    phone?: string
    address?: string
    label?: string
    href?: string
}>()
</script>

<template>
    <PkSection muted>
        <div class="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <PkSectionHeading :title="title" :body="body" />

            <div class="flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8">
                <dl class="grid gap-4 text-sm">
                    <div v-if="email" class="grid gap-1">
                        <dt
                            class="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                        >
                            Email
                        </dt>
                        <dd>
                            <a
                                :href="`mailto:${email}`"
                                class="font-medium text-foreground underline-offset-4 hover:underline"
                            >
                                {{ email }}
                            </a>
                        </dd>
                    </div>

                    <div v-if="phone" class="grid gap-1">
                        <dt
                            class="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                        >
                            Phone
                        </dt>
                        <dd>
                            <a
                                :href="`tel:${phone.replace(/\s+/g, '')}`"
                                class="font-medium text-foreground underline-offset-4 hover:underline"
                            >
                                {{ phone }}
                            </a>
                        </dd>
                    </div>

                    <div v-if="address" class="grid gap-1">
                        <dt
                            class="text-xs font-medium uppercase tracking-wide text-muted-foreground"
                        >
                            Address
                        </dt>
                        <dd class="text-pretty text-muted-foreground">{{ address }}</dd>
                    </div>
                </dl>

                <a
                    v-if="label"
                    :href="href ?? (email ? `mailto:${email}` : '#')"
                    class="inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                    {{ label }}
                </a>
            </div>
        </div>
    </PkSection>
</template>
