<script setup lang="ts">
/**
 * Account deletion is the package's now.
 *
 * This application's own destroy route is passed in, because the packaged
 * component defaults to Laravel's `/settings/profile` and this one is generated
 * from a controller that could be renamed.
 */
import { DeleteUser } from '@panelkit/panel/inertia';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
</script>

<template>
    <DeleteUser :action="ProfileController.destroy.url()" />
</template>
