<script setup lang="ts">
/**
 * The code screen is the package's now.
 *
 * WHAT THIS APPLICATION STILL DECIDES is where the code posts and where "send
 * another" posts - two URLs it happens to own. The boxes, the paste handling,
 * the mobile keyboard hints and the Turnstile field all live in the package,
 * because none of that is specific to who is asking for a code.
 */
import { VerifyOtp } from '@panelkit/panel/inertia';

defineProps<{
    sentTo?: string | null;
    length?: number;
    status?: string;
    turnstileSiteKey?: string | null;
}>();
</script>

<template>
    <VerifyOtp
        action="/verify-otp"
        resend-url="/verify-otp/resend"
        :sent-to="sentTo"
        :length="length"
        :status="status"
        :turnstile-site-key="turnstileSiteKey"
    />
</template>
