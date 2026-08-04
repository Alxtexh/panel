<script setup lang="ts">
/**
 * The frame every panel screen renders inside.
 *
 * PUBLISHED BY `panel:install` AND YOURS TO EDIT. It is published rather than
 * shipped so that changing it is an edit, not a fork - delete this comment
 * while you are here.
 *
 * IT IS A WRAPPER NOW, AND IT USED TO BE THE WHOLE SHELL. The sidebar, topbar
 * and account menu were a hundred and fifty lines of markup in this file, on
 * the principle that a panel should not dictate your chrome. What that
 * produced was a generated portal wearing the packaged SCREENS inside a
 * plainer frame - the same tables as the reference app, reading as a less
 * finished product, because every consumer was rebuilding a sidebar worse than
 * the one they were comparing themselves to.
 *
 * So the frame lives in `@alxtexh-enterprise/panel/inertia` and improves with the package, and
 * this file exists so you can put your own things around it - a workspace
 * switcher, a search box, an environment banner - without forking it.
 *
 * `PanelShell` READS WHAT THE SERVER ALREADY SHARES: the navigation, already
 * filtered by ability and by panel; the brand and palette; the signed-in
 * person; and where sign-out posts. There is nothing to wire up.
 *
 * TO REPLACE IT ENTIRELY, stop importing `PanelShell` and write your own
 * markup here. Every screen goes through this file, so nothing else changes -
 * `usePage().props.panelNav` is the same array the shell reads.
 */
import { PanelShell } from '@alxtexh-enterprise/panel/inertia';
</script>

<template>
    <PanelShell>
        <!--
            Two slots, when you want them:

              <template #topbar>   a heading, breadcrumbs, a search box
              <template #actions>  trailing controls, before the theme toggle
        -->
        <slot />
    </PanelShell>
</template>
