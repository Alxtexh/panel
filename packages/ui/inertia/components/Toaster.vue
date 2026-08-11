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

/**
 * `class` ONLY, AND EVERYTHING ELSE FALLS THROUGH - which is not a narrowing.
 *
 * THIS USED TO BE `defineProps<ToasterProps>()` WITH THE TYPE IMPORTED FROM
 * `vue-sonner`, AND IT MADE THE PUBLISHED PACKAGE UNBUILDABLE. `inertia/` ships
 * as SOURCE, so a consumer's Vite compiles this file out of `node_modules` -
 * and `@vue/compiler-sfc` cannot resolve a type imported across a package
 * boundary from there. It fails the build outright:
 *
 *     No fs option provided to `compileScript` in non-Node environment.
 *     File system access is required for resolving imported types.
 *
 * NOTHING IN THIS REPOSITORY COULD SEE IT. The playground compiles the same
 * file from `packages/ui/inertia` via a Vite alias, where it is ordinary source
 * rather than a dependency, and type resolution works. So `npm run build` here
 * passed while every consumer's build failed - which is exactly the blind spot
 * `scripts/verify-install.sh` exists to close, and the first thing it caught.
 *
 * IT IS THE ONLY FILE THAT DID THIS. The other eleven components using a typed
 * `defineProps` declare the interface in the same file, which the compiler
 * resolves without touching the filesystem.
 *
 * BEHAVIOUR IS UNCHANGED. This is a pass-through wrapper: `class` is the one
 * prop it reads, and every other attribute a caller passes now reaches `Sonner`
 * as a fallthrough attribute instead of through `v-bind="props"`. Vue applies
 * those to a single component root automatically, so `position`, `duration`,
 * `richColors` and the rest arrive exactly as before.
 */
const props = defineProps<{ class?: string }>()
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
