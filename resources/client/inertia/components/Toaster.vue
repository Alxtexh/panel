<script lang="ts" setup>
/**
 * The toast outlet, themed with the panel's own tokens.
 *
 * MOVED FROM THE REFERENCE APP, unchanged apart from where `cn` comes from -
 * one copy of every shared component, in the package (UI_FOUNDATION.md). It
 * moved because `PanelShell` now mounts it: a generated portal whose actions
 * fired toasts had nowhere to show them, so every success message worked in
 * the demo and silently vanished in a consumer's panel.
 *
 * `vue-sonner` is already a peer dependency - the auth screens toast through
 * it - so packaging the outlet adds no weight a consumer was not carrying.
 */
import type { ToasterProps } from 'vue-sonner'
import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon,
    XIcon,
} from '@lucide/vue'
import { Toaster as Sonner } from 'vue-sonner'
import { cn } from '@alxtexh-enterprise/panel'

import 'vue-sonner/style.css'

const props = defineProps<ToasterProps>()
</script>

<template>
    <Sonner
        :class="cn('toaster group', props.class)"
        :style="{
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)',
        }"
        v-bind="props"
    >
        <template #success-icon>
            <CircleCheckIcon class="size-4" />
        </template>
        <template #info-icon>
            <InfoIcon class="size-4" />
        </template>
        <template #warning-icon>
            <TriangleAlertIcon class="size-4" />
        </template>
        <template #error-icon>
            <OctagonXIcon class="size-4" />
        </template>
        <template #loading-icon>
            <div>
                <Loader2Icon class="size-4 animate-spin" />
            </div>
        </template>
        <template #close-icon>
            <XIcon class="size-4" />
        </template>
    </Sonner>
</template>
