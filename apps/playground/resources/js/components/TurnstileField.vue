<script setup lang="ts">
/**
 * The Cloudflare Turnstile widget, as a form field.
 *
 * IT RENDERS NOTHING WHEN TURNSTILE IS OFF, which is what lets every auth form
 * include it unconditionally. The alternative - a `v-if` at each call site - is
 * five places to remember, and the one that gets forgotten is an unprotected
 * door that looks exactly like the others.
 *
 * THE SCRIPT LOADS ONCE, LAZILY. Cloudflare's loader is fetched the first time a
 * form that needs it mounts, not on every page of the panel: an admin panel is
 * mostly pages behind the login, and none of them should pay for a third-party
 * script they will never use.
 *
 * ITS ABSENCE IS NOT A PASS. If the script fails to load the field stays empty,
 * no token is produced, and the server refuses - see `Turnstile::verify`. That
 * is the correct direction to fail: a blocked script means somebody cannot sign
 * in, not that anybody can.
 */
import { usePage } from '@inertiajs/vue3';
import { onMounted, ref, watch } from 'vue';

const props = defineProps<{
    /** Bound to the form so the token travels with the submission. */
    modelValue?: string | null;
}>();

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const page = usePage();
const container = ref<HTMLElement | null>(null);

const siteKey = () => (page.props as any).turnstileSiteKey as string | null;

const SCRIPT_ID = 'cf-turnstile-script';

function loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any).turnstile) {
            resolve();

            return;
        }

        const existing = document.getElementById(SCRIPT_ID);

        if (existing) {
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', () => reject());

            return;
        }

        const script = document.createElement('script');

        script.id = SCRIPT_ID;
        script.src =
            'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject();

        document.head.appendChild(script);
    });
}

onMounted(async () => {
    if (!siteKey() || !container.value) {
        return;
    }

    try {
        await loadScript();
    } catch {
        // Deliberately silent to the visitor and fatal to the submission: the
        // server refuses without a token, which is the honest outcome.
        return;
    }

    (window as any).turnstile?.render(container.value, {
        sitekey: siteKey(),
        callback: (token: string) => emit('update:modelValue', token),
        /*
         * A TOKEN IS SINGLE-USE AND EXPIRES. Clearing the bound value when
         * either happens means a stale token is never submitted - the server
         * would refuse it, and the visitor would see "please verify" next to a
         * widget showing a green tick, which is the most confusing possible
         * failure.
         */
        'expired-callback': () => emit('update:modelValue', ''),
        'error-callback': () => emit('update:modelValue', ''),
    });
});

// A failed submission re-renders the form; the spent token must not linger.
watch(
    () => props.modelValue,
    (value) => {
        if (value === '' && container.value && (window as any).turnstile) {
            (window as any).turnstile.reset(container.value);
        }
    },
);
</script>

<template>
    <div v-if="siteKey()" ref="container" class="my-2" />
</template>
