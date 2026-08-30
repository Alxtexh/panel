<script setup lang="ts">
/**
 * Forced auth-family gallery for the demo sidebar.
 *
 * UNDER `errors/` so AppLayout does not wrap the packaged AuthLayout. The
 * page receives `forceAuthLayout` from the route; AuthLayout prefers that
 * over the live panel's shared family so each sample renders independently.
 */
import { Login, Register, VerifyOtp } from '@alxtexh-enterprise/panel/inertia';
import { Head, Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    forceAuthLayout: string;
    screen: 'login' | 'register' | 'otp';
    familyLabel: string;
}>();

const title = computed(() => {
    if (props.screen === 'register') {
        return 'Register';
    }

    if (props.screen === 'otp') {
        return 'OTP challenge';
    }

    return 'Sign in';
});

const siblings = computed(() =>
    (['login', 'register', 'otp'] as const).map((screen) => ({
        screen,
        href: `/screens/auth/${props.forceAuthLayout}/${screen}`,
        label:
            screen === 'otp'
                ? 'OTP'
                : screen.charAt(0).toUpperCase() + screen.slice(1),
        current: screen === props.screen,
    })),
);
</script>

<template>
    <div>
        <Head :title="`${familyLabel}: ${title}`" />

        <!--
            Sample switcher sits above the auth composition so operators can
            walk login → register → OTP without leaving the family.
        -->
        <div
            class="fixed top-4 left-4 z-50 flex flex-wrap items-center gap-2 rounded-lg border bg-background/95 px-3 py-2 text-xs shadow-sm backdrop-blur"
        >
            <span class="font-medium text-muted-foreground">{{
                familyLabel
            }}</span>
            <span class="text-muted-foreground/50">|</span>
            <Link
                v-for="item in siblings"
                :key="item.screen"
                :href="item.href"
                class="rounded px-1.5 py-0.5 font-medium transition-colors"
                :class="
                    item.current
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                "
            >
                {{ item.label }}
            </Link>
        </div>

        <Login
            v-if="screen === 'login'"
            action="/login"
            forgot-url="/forgot-password"
            :register-url="`/screens/auth/${forceAuthLayout}/register`"
        />

        <Register
            v-else-if="screen === 'register'"
            action="/register"
            :login-url="`/screens/auth/${forceAuthLayout}/login`"
        />

        <VerifyOtp
            v-else
            action="/two-factor-challenge"
            resend-url="/two-factor-challenge/resend"
            sent-to="a•••@example.com"
            :length="6"
        />
    </div>
</template>
