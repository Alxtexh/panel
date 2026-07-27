<script setup lang="ts">
/**
 * The brand mark.
 *
 * A LOGO REPLACES THE NAME; it does not sit beside it. Filament works this way
 * and the reason is spatial rather than stylistic: the topbar has to hold
 * navigation, search, a bell, settings and an avatar, and a wordmark next to an
 * icon is the one element there that carries no information the icon does not
 * already carry. On the horizontal layout it was the difference between a menu
 * that fitted and one that scrolled.
 *
 * `showName` exists for the places where the icon alone is not enough — an
 * expanded sidebar has the room, and the name doubles as a reminder of which
 * tenant you are in.
 */
import { usePage } from '@inertiajs/vue3';
import AppLogoIcon from '@/components/AppLogoIcon.vue';

withDefaults(defineProps<{ showName?: boolean }>(), { showName: false });

const name = usePage().props.name;
</script>

<template>
    <div class="flex items-center gap-2">
        <div
            class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-md"
            :title="String(name)"
        >
            <AppLogoIcon class="size-5 fill-current text-white dark:text-black" />
        </div>

        <span v-if="showName" class="truncate text-sm leading-tight font-semibold">{{ name }}</span>
    </div>
</template>
