<script setup lang="ts">
/**
 * The account menu's items are the package's now.
 *
 * THE 299 LINES THAT WERE HERE MOVED, not disappeared - every item, its icon,
 * its gating and its ordering now live in `DefaultAccountMenuItems`, driven by
 * urls the server shares per panel (`SharePanelProps`) instead of by Wayfinder
 * helpers only this application generates. That move is what lets a portal
 * `make:panel` created this morning open the same menu this demo does.
 *
 * The wrapper file survives for the same reason every page shim does: it is
 * where THIS application overrides the menu when it wants to - point the
 * import somewhere else, or put items directly in the template, and nothing
 * else changes.
 *
 * `user` IS STILL ACCEPTED so existing `<UserMenuContent :user="user" />`
 * call sites keep compiling; the packaged menu reads the same person from the
 * shared props, which is the only source the server actually vouches for.
 */
import type { User } from '@alxtexh-enterprise/panel/inertia';
import { DefaultAccountMenuItems } from '@alxtexh-enterprise/panel/inertia';

defineProps<{ user?: User | null }>();
</script>

<template>
    <DefaultAccountMenuItems />
</template>
