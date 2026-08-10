<script setup lang="ts">
/*
 * A PANEL'S OWN Login screen, from @alxtexh-enterprise/panel/inertia.
 *
 * WHY THIS IS `panel/auth/` AND NOT `auth/`. Inertia resolves a page name by
 * globbing this directory, and this application already has an `auth/Login`
 * written for its OWN controller - a different prop contract entirely. A
 * portal rendering `auth/Login` therefore got the application's screen fed
 * the package's props: on the sign-in form that meant a social button
 * captioned with raw JSON and the panel's configured heading dropped, with
 * nothing erroring, because a page that renders is a page that looks like it
 * works.
 *
 * So a portal's screens live under a name no application owns. This
 * application keeps `auth/Login` for its own front door.
 *
 * IT IS ALSO WHERE YOU OVERRIDE IT - point the import at your own component,
 * or name one with `Panel::loginComponent()`.
 *
 * KEEP THE TEMPLATE. An SFC with only a script block renders nothing at all,
 * silently, in a production build.
 */
import { Login } from '@alxtexh-enterprise/panel/inertia';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <!-- The cast is deliberate - see `pages/ResourceIndex.vue`. -->
    <Login v-bind="$attrs as any" />
</template>
