<script setup lang="ts">
/*
 * The passkey enrolment control, from @panelkit/ui.
 *
 * IT MOVED INTO THE PACKAGE, unchanged in behaviour. It worked here for a long
 * time, which was exactly the problem: a fresh install of PanelKit had no
 * passkey support and nothing to suggest it was a solved problem.
 *
 * This file stays as the seam - point the import at your own component and
 * nothing else has to change.
 */
import { PkPasskeyRegister } from '@panelkit/ui';

defineEmits<{ success: [] }>();
</script>

<template>
    <PkPasskeyRegister @success="$emit('success')" />
</template>
