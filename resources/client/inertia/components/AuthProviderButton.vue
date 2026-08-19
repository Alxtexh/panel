<script setup lang="ts">
/**
 * One social sign-in button. Renders a label plus a small mark for providers
 * people recognise; an unknown key still gets a usable button rather than a
 * blank.
 *
 * A LINK, NOT A FETCH. The provider redirect leaves the application, so this
 * has to be a real navigation.
 */
defineProps<{
    provider: { key: string; label: string; url: string }
}>()
</script>

<template>
    <a
        :href="provider.url"
        :data-test="`social-${provider.key}`"
        class="bg-background hover:bg-accent inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors"
    >
        <svg
            v-if="provider.key === 'google'"
            class="size-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                fill="#4285F4"
                d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.48a5.54 5.54 0 0 1-2.4 3.64v3.02h3.88c2.26-2.08 3.53-5.14 3.53-8.9Z"
            />
            <path
                fill="#34A853"
                d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3.02c-1.08.73-2.46 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.11A12 12 0 0 0 12 24Z"
            />
            <path
                fill="#FBBC05"
                d="M5.27 14.27A7.21 7.21 0 0 1 4.89 12c0-.79.14-1.55.38-2.27V6.62H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.38l3.99-3.11Z"
            />
            <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.62l3.99 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
            />
        </svg>
        <svg
            v-else-if="provider.key === 'github'"
            class="size-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M12 .3A12 12 0 0 0 8.21 23.7c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3Z"
            />
        </svg>
        <svg
            v-else-if="provider.key === 'microsoft'"
            class="size-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M13 1h10v10H13z" />
            <path fill="#00A4EF" d="M1 13h10v10H1z" />
            <path fill="#FFB900" d="M13 13h10v10H13z" />
        </svg>
        <svg
            v-else-if="provider.key === 'apple'"
            class="size-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M16.37 12.63c.03 3.27 2.87 4.36 2.9 4.37-.02.08-.45 1.55-1.5 3.07-1.9 1.3-2.28 1.27-2.76 1.27-.48 0-1.23-.12-2.18-.12-.95 0-1.76.13-2.25.13-.47 0-.9.03-2.76-1.32-1.1-1.58-1.55-3.12-1.57-3.2.4-.12 2.33-.9 2.31-3.38-.02-2.12 1.73-3.13 1.81-3.18-1-1.47-2.55-1.64-3.1-1.66 0 0 1.7-2.1 3.74-1.85.7.03 1.34.26 1.9.5.55.23 1.05.47 1.52.46.45 0 .97-.25 1.56-.49.6-.24 1.3-.53 2.13-.5 1.82.07 3.19.98 3.82 2.36-1.7 1.03-1.43 3.32.03 4.24Z"
            />
        </svg>
        <svg
            v-else-if="provider.key === 'facebook'"
            class="size-4"
            viewBox="0 0 24 24"
            fill="#1877F2"
            aria-hidden="true"
        >
            <path
                d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.54-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.27h3.34l-.53 3.49h-2.81V24C19.61 23.09 24 18.1 24 12.07Z"
            />
        </svg>
        Continue with {{ provider.label }}
    </a>
</template>
