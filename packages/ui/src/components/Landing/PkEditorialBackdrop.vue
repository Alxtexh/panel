<script setup lang="ts">
/**
 * Editorial's backdrop: paper, not weather.
 *
 * DELIBERATELY NOT AURORA. Aurora drifts because it is selling a product;
 * Editorial is selling a way of thinking, and a magazine page does not move
 * behind the type. What it has instead is TEXTURE and a MEASURE - a faint grain
 * and a pair of column rules - so the page reads as printed rather than as a
 * document with nothing behind it.
 *
 * THE ONE THING THAT MOVES is a slow tonal wash, far too slow to notice while
 * reading and just enough that the page is not dead. Everything else here is
 * static by choice, which is the choice that makes the design different rather
 * than the same design in another colour.
 */
</script>

<template>
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <!-- A very slow tonal wash - the only motion in this design. -->
        <div class="pk-wash absolute inset-0" />

        <!-- The measure: two hairlines marking a classical text column. -->
        <div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block">
            <div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]" />
            <div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]" />
        </div>

        <!-- Grain, so large flat areas are not perfectly flat. -->
        <div
            class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
            style="
                background-image: url(&quot;data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>&quot;);
            "
        />
    </div>
</template>

<style>
.pk-wash {
    background: linear-gradient(180deg, oklch(0.97 0.02 85 / 0.55), transparent 45%);
    animation: pk-wash 40s ease-in-out infinite alternate;
}

:root.dark .pk-wash,
.dark .pk-wash {
    background: linear-gradient(180deg, oklch(0.3 0.03 260 / 0.5), transparent 45%);
}

@keyframes pk-wash {
    from {
        opacity: 0.75;
    }
    to {
        opacity: 1;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pk-wash {
        animation: none;
    }
}
</style>
