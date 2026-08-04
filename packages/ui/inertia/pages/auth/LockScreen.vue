<script setup lang="ts">
/**
 * The panel, locked.
 *
 * MOVED FROM THE REFERENCE APP, comments and all, because the reasoning is the
 * feature:
 *
 * NOT A SIGN-OUT. The distinction is the entire point: the session is still
 * valid, the work is still open, and the person who walked away wants to come
 * back to where they were rather than to an empty dashboard. Signing out to
 * protect an unattended screen loses unsaved state and makes people avoid
 * locking at all.
 *
 * SO IT ASKS FOR A PASSWORD, NOT AN EMAIL. Who is signed in is not in question;
 * whether the person at the keyboard is them is. Showing the account being
 * unlocked is what makes that clear - and it is also the honest way to say "if
 * this is not you, sign in as yourself instead".
 *
 * IT IS NOT A SECURITY BOUNDARY BY ITSELF. Anything reachable behind it is still
 * reachable by anyone holding the session cookie; this stops the person standing
 * at the desk, which is the threat it is for.
 *
 * IT DRAWS ITS OWN PAGE rather than using `AuthLayout`, because the layout's
 * job is to introduce the product to somebody signed out - and this person is
 * signed in. The account is the heading here.
 */
import { Form, Head, Link, usePage } from '@inertiajs/vue3'
import { PkButton as Button, ThemeToggle } from '@panelkit/panel'
import { computed } from 'vue'
import AuthInputError from '../../components/AuthInputError.vue'
import AuthField from '../../components/AuthField.vue'

const props = defineProps<{
    /** Where the password posts. */
    action: string
    /** Where "sign in as someone else" posts, or null when not routed. */
    logoutUrl?: string | null
    status?: string | null
}>()

const page = usePage()

const user = computed(() => (page.props as any)?.auth?.user ?? null)

const initials = computed(() =>
    String(user.value?.name ?? '?')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part: string) => part[0]!.toUpperCase())
        .join(''),
)
</script>

<template>
    <Head title="Locked" />

    <div
        class="bg-background relative flex min-h-svh flex-col items-center justify-center gap-6 p-6"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col items-center gap-3">
                <!-- The account being unlocked, shown rather than asked for. -->
                <span
                    class="bg-accent text-muted-foreground flex size-16 items-center justify-center rounded-full text-lg font-semibold"
                >
                    {{ initials }}
                </span>

                <div class="text-center">
                    <h1 class="text-xl font-medium">{{ user?.name ?? 'Locked' }}</h1>
                    <p class="text-muted-foreground text-sm">
                        Enter your password to pick up where you left off.
                    </p>
                </div>
            </div>

            <Form
                method="post"
                :action="props.action"
                class="mt-8 space-y-4"
                v-slot="{ errors, processing }"
            >
                <AuthField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    autocomplete="current-password"
                    required
                    autofocus
                    :error="errors.password"
                />

                <Button type="submit" class="w-full" :disabled="processing">Unlock</Button>
            </Form>

            <p class="text-muted-foreground mt-6 text-center text-sm" v-if="props.logoutUrl">
                Not you?
                <Link
                    :href="props.logoutUrl"
                    method="post"
                    as="button"
                    class="underline underline-offset-4"
                >
                    Sign in as someone else
                </Link>
            </p>
        </div>
    </div>
</template>
