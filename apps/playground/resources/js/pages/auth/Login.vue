<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { PkButton as Button } from '@panelkit/ui';
import { computed } from 'vue';
import InputError from '@/components/InputError.vue';
import PasskeyVerify from '@/components/PasskeyVerify.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import TurnstileField from '@/components/TurnstileField.vue';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

defineOptions({
    layout: {
        title: 'Log in to your account',
        description: 'Enter your email and password below to log in',
    },
});

const props = defineProps<{
    status?: string;
    canResetPassword: boolean;
    /** Provider key => human name. Empty when none are configured. */
    socialProviders?: Record<string, string>;
}>();

const providers = computed(() => Object.entries(props.socialProviders ?? {}));
</script>

<template>
    <Head title="Log in" />

    <div
        v-if="status"
        class="mb-4 text-center text-sm font-medium text-green-600"
    >
        {{ status }}
    </div>

    <PasskeyVerify />

    <Form
        v-bind="store.form()"
        :reset-on-success="['password']"
        v-slot="{ errors, processing }"
        class="flex flex-col gap-6"
    >
        <div class="grid gap-6">
            <div class="grid gap-2">
                <Label for="email">Email address</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autofocus
                    autocomplete="email"
                    placeholder="email@example.com"
                />
                <InputError :message="errors.email" />
            </div>

            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                    <Label for="password">Password</Label>
                    <TextLink
                        v-if="canResetPassword"
                        :href="request()"
                        class="text-sm"
                    >
                        Forgot your password?
                    </TextLink>
                </div>
                <PasswordInput
                    id="password"
                    name="password"
                    required
                    autocomplete="current-password"
                    placeholder="Password"
                />
                <InputError :message="errors.password" />
            </div>

            <div class="flex items-center justify-between">
                <Label for="remember" class="flex items-center space-x-3">
                    <Checkbox id="remember" name="remember" />
                    <span>Remember me</span>
                </Label>
            </div>

            <!-- Renders nothing when Turnstile is off; the server refuses

                 without a token either way. -->

            <TurnstileField name="cf-turnstile-response" />

            <Button
                type="submit"
                class="mt-4 w-full"
                :disabled="processing"
                data-test="login-button"
            >
                <Spinner v-if="processing" />
                Log in
            </Button>
        </div>

        <!--
            THE PROVIDER BUTTONS SIT AFTER THE PASSWORD FORM, not before it.
            Putting them first pushes the field most people use below a row of
            alternatives, and an operator signing in to a work panel is
            overwhelmingly using their password.

            NOTHING RENDERS WHEN NONE ARE CONFIGURED - not a divider, not an
            empty row. An installation without social sign-in should look like
            one that never offered it.
        -->
        <div v-if="providers.length > 0" class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <span class="h-px flex-1 bg-border" />
                <span class="text-xs text-muted-foreground"
                    >or continue with</span
                >
                <span class="h-px flex-1 bg-border" />
            </div>

            <div
                class="grid gap-2"
                :class="providers.length > 1 ? 'sm:grid-cols-2' : ''"
            >
                <!--
                    A LINK, NOT A FETCH. The provider redirect leaves the app
                    entirely, so this has to be a real navigation; an XHR would
                    be answered with an opaque redirect the page cannot follow.
                -->
                <a
                    v-for="[key, label] in providers"
                    :key="key"
                    :href="`/auth/${key}/redirect`"
                    class="inline-flex h-10 items-center justify-center gap-2 rounded-md border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
                >
                    {{ label }}
                </a>
            </div>
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Don't have an account?
            <TextLink :href="register()">Sign up</TextLink>
        </div>
    </Form>
</template>
