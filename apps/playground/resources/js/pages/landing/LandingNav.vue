<script setup lang="ts">
/**
 * The bar every landing design shares - Part G.9.
 *
 * ONE COMPONENT RATHER THAN THREE COPIES, for the reason the whole
 * centralization push exists: a sign-in link that differs between designs is
 * a sign-in link that is wrong in two of them.
 *
 * IT KNOWS WHETHER YOU ARE SIGNED IN. A marketing page that offers "Sign in"
 * to somebody already holding a session sends them through a form to land
 * exactly where a single link would have.
 */
import { Link, usePage } from '@inertiajs/vue3';
import { buttonClasses } from '@panelkit/ui';
import { login, register } from '@/routes';

defineProps<{
    /** Design name, shown in the switcher so the demo is self-explaining. */
    design: string;
}>();

const page = usePage();
</script>

<template>
    <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div
            class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        >
            <Link href="/" class="text-base font-semibold tracking-tight">
                PanelKit
            </Link>

            <!--
                THE SWITCHER IS PART OF THE DEMONSTRATION, not decoration.
                Several designs ship, so the reference app has to make trying
                them one click rather than an edit-and-reload.
            -->
            <nav class="hidden items-center gap-1 text-sm md:flex">
                <Link
                    v-for="d in ['aurora', 'editorial', 'console']"
                    :key="d"
                    :href="`/preview/${d}`"
                    class="rounded-md px-2.5 py-1 capitalize transition-colors"
                    :class="
                        d === design
                            ? 'bg-muted font-medium text-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    "
                >
                    {{ d }}
                </Link>
            </nav>

            <div class="flex items-center gap-2">
                <Link
                    v-if="page.props.auth?.user"
                    href="/dashboard"
                    :class="buttonClasses({ size: 'sm' })"
                >
                    Dashboard
                </Link>
                <template v-else>
                    <Link
                        :href="login()"
                        :class="buttonClasses({ variant: 'ghost', size: 'sm' })"
                    >
                        Sign in
                    </Link>
                    <Link
                        :href="register()"
                        :class="buttonClasses({ size: 'sm' })"
                    >
                        Get started
                    </Link>
                </template>
            </div>
        </div>
    </header>
</template>
