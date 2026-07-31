<script setup lang="ts">
/** The footer every landing design shares - Part G.9. */
import { Link } from '@inertiajs/vue3';

const year = new Date().getFullYear();
</script>

<template>
    <footer class="border-t">
        <div
            class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
            <p class="text-muted-foreground">
                © {{ year }} PanelKit. Built with Laravel, Inertia and Vue.
            </p>

            <nav class="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                <Link href="/help" class="hover:text-foreground">Help</Link>
                <Link href="/about" class="hover:text-foreground">About</Link>
                <Link href="/faq" class="hover:text-foreground">FAQ</Link>
            </nav>
        </div>
    </footer>
</template>
