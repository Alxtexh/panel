<script setup lang="ts">
/**
 * The bell is the package's now.
 *
 * WHAT IS LEFT HERE IS THE ONE THING THAT IS THIS APPLICATION'S: which edge the
 * panel slides from, which follows this demo's sidebar-side preference. The
 * tabs, the two streams, the badge and the four endpoints all moved into
 * `@panelkit/inertia` and `PanelKit\Panel\Http\Controllers\NotificationController`,
 * and the conditions this ISP watches are declared in `AlertServiceProvider`.
 *
 * KEPT AS A FILE RATHER THAN EDITING BOTH CALL SITES, because a wrapper this
 * thin is also the proof: if the packaged bell regresses, the demo's own screens
 * show it.
 */
import { PanelNotificationBell } from '@panelkit/inertia';
import { useAppearance } from '@panelkit/ui';
import { computed } from 'vue';

const { appearance } = useAppearance();

/** Opposite the sidebar, like the appearance drawer. */
const side = computed<'left' | 'right'>(() =>
    appearance.value.sidebarSide === 'right' ? 'left' : 'right',
);
</script>

<template>
    <PanelNotificationBell :side="side" />
</template>
