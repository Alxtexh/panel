<script setup lang="ts">
/**
 * The frame every packaged sign-in screen renders inside.
 *
 * FIVE PUBLIC LAYOUTS, matching shadcn/vue login-01..05, selected with
 * `Panel::loginLayout()`. Default `simple` is the previous centred form so
 * existing apps do not jump. `showcase` remains only when a panel still calls
 * `authLayout('showcase')`.
 *
 * | kit id  | shadcn    | chrome                                      |
 * | simple  | login-01  | centred form on the page background         |
 * | split   | login-02  | form column + full-height cover             |
 * | muted   | login-03  | centred form on a muted canvas              |
 * | card    | login-04  | form + image inside one card                |
 * | email   | login-05  | same chrome as simple (email-first fields)  |
 *
 * THE PRODUCT'S NAME, NOT A FRAMEWORK BADGE. There is no tenant before sign-in,
 * so this heading is `Panel::brandName()` falling through to `APP_NAME`.
 *
 * LIGHT OR DARK ONLY. Accent and density are saved against an account, so
 * choosing them here would write them to this browser alone.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { GalleryVerticalEnd } from '@lucide/vue'
import { computed } from 'vue'
import { ThemeToggle } from '@alxtexh-enterprise/panel'

defineProps<{
    title?: string
    description?: string
}>()

const LOGIN_LAYOUTS = ['simple', 'split', 'muted', 'card', 'email', 'showcase'] as const

type LoginLayout = (typeof LOGIN_LAYOUTS)[number]

const appName = computed(() => {
    const props = usePage().props
    const brand = props.panel && typeof props.panel === 'object'
        ? (props.panel as Record<string, unknown>).brand
        : null

    return String(brand || props.name || 'Panel')
})

const loginLayout = computed((): LoginLayout => {
    const props = usePage().props
    const panel = props.panel && typeof props.panel === 'object'
        ? (props.panel as Record<string, unknown>)
        : null

    const requested = panel?.loginLayout
    if (typeof requested === 'string' && (LOGIN_LAYOUTS as readonly string[]).includes(requested)) {
        return requested as LoginLayout
    }

    const legacy = panel?.authLayout
    if (legacy === 'split' || legacy === 'showcase') {
        return legacy
    }

    return 'simple'
})

/** `Panel::authTestimonial()`, or null when the panel declared none. */
const testimonial = computed((): { quote: string; author: string; role: string | null } | null => {
    const props = usePage().props
    const value = props.panel && typeof props.panel === 'object'
        ? (props.panel as Record<string, unknown>).authTestimonial
        : null

    return value && typeof value === 'object' ? (value as { quote: string; author: string; role: string | null }) : null
})
</script>

<template>
    <!-- login-01 simple / login-05 email: centred form on the page background -->
    <div
        v-if="loginLayout === 'simple' || loginLayout === 'email'"
        :data-login-layout="loginLayout"
        class="relative flex min-h-svh w-full flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-6">
                <Link href="/" class="flex items-center gap-2 self-center font-medium">
                    <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd class="size-4" />
                    </div>
                    <span class="text-lg font-semibold tracking-tight">{{ appName }}</span>
                    <span class="sr-only">{{ title }}</span>
                </Link>

                <div class="flex flex-col gap-6">
                    <div class="space-y-2 text-center">
                        <h1 class="text-xl font-medium">{{ title }}</h1>
                        <p v-if="description" class="text-center text-sm text-muted-foreground">
                            {{ description }}
                        </p>
                    </div>

                    <slot />
                </div>
            </div>
        </div>
    </div>

    <!-- login-03 muted: same stack on a muted canvas -->
    <div
        v-else-if="loginLayout === 'muted'"
        data-login-layout="muted"
        class="bg-muted relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="flex w-full max-w-sm flex-col gap-6">
            <Link href="/" class="flex items-center gap-2 self-center font-medium">
                <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                    <GalleryVerticalEnd class="size-4" />
                </div>
                <span>{{ appName }}</span>
                <span class="sr-only">{{ title }}</span>
            </Link>

            <div class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
                <div class="space-y-2 text-center">
                    <h1 class="text-xl font-medium">{{ title }}</h1>
                    <p v-if="description" class="text-center text-sm text-muted-foreground">
                        {{ description }}
                    </p>
                </div>

                <slot />
            </div>
        </div>
    </div>

    <!-- login-04 card: form + image inside one card on a muted canvas -->
    <div
        v-else-if="loginLayout === 'card'"
        data-login-layout="card"
        class="bg-muted relative flex min-h-svh flex-col items-center justify-center p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm md:max-w-4xl">
            <div class="bg-card text-card-foreground overflow-hidden rounded-xl border shadow-sm">
                <div class="grid md:grid-cols-2">
                    <div class="flex flex-col gap-6 p-6 md:p-8">
                        <Link href="/" class="flex items-center gap-2 font-medium">
                            <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                                <GalleryVerticalEnd class="size-4" />
                            </div>
                            <span>{{ appName }}</span>
                            <span class="sr-only">{{ title }}</span>
                        </Link>

                        <div class="flex flex-col gap-1.5">
                            <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
                            <p v-if="description" class="text-sm text-muted-foreground">
                                {{ description }}
                            </p>
                        </div>

                        <slot />
                    </div>

                    <div class="bg-muted relative hidden min-h-[280px] md:block">
                        <slot name="image">
                            <div class="absolute inset-0 bg-muted dark:brightness-[0.8]" />
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- login-02 split: form column, full-height cover on large screens -->
    <div
        v-else-if="loginLayout === 'split'"
        data-login-layout="split"
        class="grid min-h-svh lg:grid-cols-2"
    >
        <div class="flex flex-col gap-4 p-6 md:p-10">
            <div class="flex items-center justify-between gap-2">
                <Link href="/" class="flex items-center gap-2 font-medium">
                    <div class="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                        <GalleryVerticalEnd class="size-4" />
                    </div>
                    <span>{{ appName }}</span>
                    <span class="sr-only">{{ title }}</span>
                </Link>
                <ThemeToggle />
            </div>

            <div class="flex flex-1 items-center justify-center">
                <div class="w-full max-w-xs">
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-1.5">
                            <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
                            <p v-if="description" class="text-sm text-muted-foreground">
                                {{ description }}
                            </p>
                        </div>

                        <slot />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-muted relative hidden lg:block">
            <slot name="image">
                <div class="absolute inset-0 bg-muted object-cover dark:brightness-[0.2] dark:grayscale" />
            </slot>
        </div>
    </div>

    <!-- Legacy showcase: form left, preview + optional testimonial right -->
    <div
        v-else
        data-login-layout="showcase"
        class="relative flex min-h-svh flex-col justify-center lg:grid lg:grid-cols-2"
    >
        <div class="flex flex-col bg-background">
            <div class="flex items-center justify-between border-b px-6 py-4 lg:hidden">
                <Link href="/" class="text-base font-semibold tracking-tight">
                    {{ appName }}
                </Link>
                <ThemeToggle />
            </div>

            <div class="relative flex flex-1 flex-col items-center justify-center p-6 md:p-12">
                <div class="absolute top-4 right-4 hidden lg:block">
                    <ThemeToggle />
                </div>

                <div class="w-full max-w-sm">
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-1.5">
                            <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
                            <p v-if="description" class="text-sm text-muted-foreground">
                                {{ description }}
                            </p>
                        </div>

                        <slot />
                    </div>
                </div>
            </div>
        </div>

        <div class="relative hidden flex-col bg-muted lg:flex">
            <div class="p-10">
                <Link href="/" class="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-80">
                    <span class="text-lg font-semibold tracking-tight">{{ appName }}</span>
                </Link>
            </div>

            <div class="flex flex-1 flex-col items-center justify-center gap-10 p-10">
                <slot name="image">
                    <div class="flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/25 text-muted-foreground/40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="size-16"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                </slot>

                <div v-if="testimonial" class="max-w-md">
                    <p class="text-lg leading-relaxed font-medium text-foreground">
                        "{{ testimonial.quote }}"
                    </p>
                    <p class="mt-4 text-sm text-muted-foreground">
                        <span class="font-medium text-foreground">{{ testimonial.author }}</span>
                        <template v-if="testimonial.role"> - {{ testimonial.role }}</template>
                    </p>
                </div>
            </div>

            <div class="p-10" />
        </div>
    </div>
</template>
