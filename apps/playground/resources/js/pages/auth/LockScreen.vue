<script setup lang="ts">
/**
 * The panel, locked.
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
 * IT IS NOT A SECURITY BOUNDARY BY ITSELF. Anything reachable behind it is
 * still reachable by anyone holding the session cookie; this stops the person
 * standing at the desk, which is the threat it is for. Real protection for an
 * unattended machine is the operating system's lock, and this does not pretend
 * otherwise.
 */
import { Head, Form, Link, usePage } from '@inertiajs/vue3';
import { ThemeToggle } from '@panelkit/ui';
import { computed } from 'vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

defineProps<{ status?: string }>();

const page = usePage();

const user = computed(() => (page.props.auth as any)?.user ?? null);

const initials = computed(() =>
    String(user.value?.name ?? '?')
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part: string) => part[0]!.toUpperCase())
        .join(''),
);
</script>

<template>
    <Head title="Locked" />

    <div
        class="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col items-center gap-3">
                <!-- The account being unlocked, shown rather than asked for. -->
                <span
                    class="flex size-16 items-center justify-center rounded-full bg-accent text-lg font-semibold text-muted-foreground"
                >
                    {{ initials }}
                </span>

                <div class="text-center">
                    <h1 class="text-xl font-medium">
                        {{ user?.name ?? 'Locked' }}
                    </h1>
                    <p class="text-sm text-muted-foreground">
                        Enter your password to pick up where you left off.
                    </p>
                </div>
            </div>

            <Form
                method="post"
                action="/unlock"
                class="mt-8 space-y-4"
                v-slot="{ errors, processing }"
            >
                <div class="grid gap-2">
                    <Label for="password" class="sr-only">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        placeholder="Password"
                        autofocus
                        required
                    />
                    <InputError :message="errors.password" />
                </div>

                <Button type="submit" class="w-full" :disabled="processing"
                    >Unlock</Button
                >
            </Form>

            <p class="mt-6 text-center text-sm text-muted-foreground">
                Not you?
                <Link
                    href="/logout"
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
