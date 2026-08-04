<script setup lang="ts">
/**
 * The PACKAGED shell, rendered so a browser test can prove it draws.
 *
 * WHY IT LIVES UNDER `errors/`. This application applies `AppLayout` to every
 * page by name, and `errors/*` is the one prefix that resolves to NO layout -
 * see `app.ts`. Anywhere else, the packaged shell renders INSIDE the demo's
 * own shell: two sidebars, two account menus, and a browser test that clicks
 * the wrong one. That happened, and this is the fix rather than a coincidence.
 *
 * IT IS NOT AN ERROR SCREEN, and it is not in any menu. It exists because the
 * reference app has its own chrome, so it is the one place that cannot
 * otherwise demonstrate the chrome the PACKAGE ships.
 */
import { PanelShell } from '@panelkit/panel/inertia';
</script>

<template>
    <PanelShell>
        <template #topbar>
            <h1 class="text-sm font-medium">Subscribers</h1>
        </template>

        <div class="rounded-lg border bg-card p-6">
            <p class="text-sm">A page rendered inside the packaged shell.</p>
        </div>
    </PanelShell>
</template>
