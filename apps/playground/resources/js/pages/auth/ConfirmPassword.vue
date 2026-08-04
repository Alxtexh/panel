<script setup lang="ts">
/**
 * The screen is the package's; the ROUTES are this application's.
 *
 * The packaged page takes where-to-post as a prop rather than importing a route
 * module, because a fresh installation mounts its panel wherever it likes and
 * has no Wayfinder output to import from. This application knows its own URLs,
 * so it fills them in here.
 */
import { ConfirmPassword } from '@panelkit/panel/inertia';
import {
    index as confirmOptions,
    store as confirmStore,
} from '@/actions/Laravel/Passkeys/Http/Controllers/PasskeyConfirmationController';
import { store } from '@/routes/password/confirm';

const passkeys = {
    options: confirmOptions().url,
    verify: confirmStore().url,
};
</script>

<template>
    <ConfirmPassword :action="store().url" :passkeys="passkeys" />
</template>
