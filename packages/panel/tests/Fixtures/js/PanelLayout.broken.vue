<script setup lang="ts">
const title = 'Custom chrome'
</script>

<template>
    <div>
        <header>{{ title }}</header>
        <slot />
    </div>
</template>
