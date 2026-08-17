<script setup lang="ts">
/**
 * Account deletion uses the packaged action URL.
 *
 * Profile destroy is the kit's `settings/profile` route. Pass no override when
 * the packaged Profile screen already posts there.
 */
import { DeleteUser } from '@alxtexh-enterprise/panel/inertia';
</script>

<template>
    <DeleteUser />
</template>
