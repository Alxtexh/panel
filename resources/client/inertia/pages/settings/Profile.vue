<script setup lang="ts">
/**
 * The account's own name and email address.
 *
 * MOVED FROM THE REFERENCE APPLICATION. `DeleteUser` has shipped in this package
 * since 0.6 with nothing outside the demo mounting it - the same gap the
 * security screen closes.
 *
 * SEPARATE FROM SECURITY ON PURPOSE. Changing a display name is routine;
 * changing what can get into the account is not, and that screen asks for the
 * current password first. Together, either the routine thing sits behind a
 * password prompt or the serious one does not. Getting into this account -
 * password, two-factor, passkeys, connected accounts, signed-in devices -
 * all lives on Security; this screen is only the name and email printed on
 * the account.
 *
 * NO TWO-FACTOR STATUS HERE EITHER, not any more. This screen used to report
 * (not manage) the second factor as a discoverability nudge - the ACTION was
 * always a link to Security - but once both screens had their own bordered
 * cards, a "Two-factor authentication" card here read as the same section
 * Security already owns, shown a second time. Security is the one place for
 * it now; the settings hub's own "Security" entry is the discoverability
 * this card used to be standing in for.
 *
 * TWO CARDS, NOT ONE FLAT STACK - `useGroupedSettingsCards()`, the same
 * `Panel::groupedSettingsCards()` toggle `Security.vue` reads. A page with no
 * visual seam between "change your name" and "delete everything" reads as
 * one undifferentiated form, and at a glance is easy to mistake for whatever
 * other settings screen was open last.
 *
 * URLS COME FROM `panel.path`, not from generated route helpers - see the note
 * on Security.vue.
 */
import { Form, Head, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import {
    PkButton as Button,
    PkFieldLabel as Label,
    PkHeading as Heading,
    PkTextInput as Input,
} from '@alxtexh-enterprise/panel'
import AuthInputError from '../../components/AuthInputError.vue'
import DeleteUser from '../../components/DeleteUser.vue'
import { useGroupedSettingsCards } from '../../composables/useGroupedSettingsCards'

const { sectionClass, wrapClass } = useGroupedSettingsCards()
const page = usePage()
/**
 * TYPED, NOT `Record<string, unknown>`. The shared `auth.user` payload is JSON,
 * so the checker has nothing to go on - and an untyped read means `:default-value`
 * receives `unknown`, which fails the build rather than at runtime. These three
 * are what SharePanelProps sends.
 */
type AccountUser = {
    name?: string
    email?: string
    email_verified_at?: string | null
}

const user = computed<AccountUser>(
    () => (page.props.auth as { user?: AccountUser } | undefined)?.user ?? {},
)

const base = computed(() => (page.props.panel as { path?: string } | undefined)?.path ?? '')

const at = (path: string) => `${base.value === '/' ? '' : base.value}${path}`

defineOptions({
    // Page props arrive as attributes and this root is a fragment.
    inheritAttrs: false,
    layout: {
        breadcrumbs: [{ title: 'Profile settings', href: '' }],
    },
})
</script>

<template>
    <Head title="Profile settings" />

    <h1 class="sr-only">Profile settings</h1>

    <div class="flex flex-col" :class="sectionClass">
        <Heading variant="small" title="Profile" description="Update your name and email address" />

        <Form
            :action="at('/profile')"
            method="patch"
            class="space-y-6"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input
                    id="name"
                    class="mt-1 block w-full"
                    name="name"
                    :default-value="user.name"
                    required
                    autocomplete="name"
                    placeholder="Full name"
                />
                <AuthInputError class="mt-2" :message="errors.name" />
            </div>

            <div class="grid gap-2">
                <Label for="email">Email address</Label>
                <Input
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    name="email"
                    :default-value="user.email"
                    required
                    autocomplete="username"
                    placeholder="Email address"
                />
                <AuthInputError class="mt-2" :message="errors.email" />
            </div>

            <div v-if="page.props.mustVerifyEmail && !user.email_verified_at">
                <p class="-mt-4 text-sm text-muted-foreground">
                    Your email address is unverified.
                    <!--
                        `/email/verification-notification` IS FORTIFY'S OWN
                        ROUTE, outside the panel prefix, because verification is
                        an application-wide fact rather than a per-panel one.
                    -->
                    <Link
                        href="/email/verification-notification"
                        method="post"
                        as="button"
                        class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-if="page.props.status === 'verification-link-sent'"
                    class="mt-2 text-sm font-medium text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <div class="flex items-center gap-4">
                <Button :disabled="processing" data-test="update-profile-button"> Save </Button>
            </div>
        </Form>
    </div>

    <!--
        THE ACTION IS PASSED, not left to default. `DeleteUser` falls back to a
        bare `/settings/profile`, which is right only for a panel mounted at the
        root - on any other prefix the delete button would post to a URL that
        does not exist, and a confirmation dialog that 404s on submit is worse
        than no dialog.
    -->
    <div class="mt-6" :class="wrapClass">
        <DeleteUser :action="at('/profile')" />
    </div>
</template>
