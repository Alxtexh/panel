<script setup lang="ts">
/**
 * The option renderer for a visual select whose values are colours.
 *
 * `->preview('swatch')` on a field whose option values are CSS colours - hex,
 * `oklch()`, a custom property, anything the browser accepts. Naming a colour
 * ("Terracotta", "Slate") tells somebody nothing about whether it works next to
 * their logo; a block of it tells them immediately.
 *
 * IT SHIPS WITH THE PACKAGE FOR THE SAME REASON THE BUILT-IN FIELD CONTROLS GO
 * THROUGH THE REGISTRY: an extension point nothing uses is one nobody has
 * exercised, and the first person to write an option renderer would discover it
 * does not work. This is the proof that it does.
 *
 * THE VALUE GOES INTO A STYLE, NOT A CLASS. `bg-[${value}]` is a class that
 * exists in no build - Tailwind scans for whole literal class names and an
 * interpolated one is invisible to it. An inline `background` is also the only
 * form that can carry a colour the application invented at runtime.
 */
defineProps<{
    value: string | number
    label?: string
    selected?: boolean
}>()
</script>

<template>
    <!--
        TWO LAYERS, because a colour that failed to parse is the case this
        component exists to catch and one layer cannot show it. `background-image`
        paints ABOVE `background-color`, so a checkerboard and a colour on the
        same element gives every swatch a checkerboard. The pattern goes on the
        outer element and the colour on an inner one, which puts the colour on
        top where it belongs - and leaves an unparseable value showing the
        pattern through rather than reading as a deliberate white.
    -->
    <span
        class="border-border size-10 overflow-hidden rounded-md border"
        :style="{
            backgroundImage:
                'linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 4px 4px',
        }"
    >
        <span class="block size-full" :style="{ backgroundColor: String(value) }" />
    </span>
</template>
