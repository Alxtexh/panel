<script setup lang="ts">
/**
 * One framing option in the voucher designer's picker.
 *
 * IT IS THE PRINTED COMPONENT AT A SMALLER SIZE, not a drawing of it. That is
 * the entire value: an option tile that approximates the real thing can be
 * wrong, and the way you discover it is a batch of two hundred vouchers that do
 * not look like the one you picked. Here the tile and the paper cannot disagree,
 * because they are the same file.
 *
 * A REAL-LOOKING CODE, not the option's name. "Ticket" in a ticket-shaped frame
 * tells you the word; `ABCD-1234` in a ticket-shaped frame tells you what a
 * voucher will look like.
 */
import PkCodeBox from './PkCodeBox.vue'

defineProps<{
    value: string | number
    label?: string
    selected?: boolean
}>()
</script>

<template>
    <!--
        A SHORT CODE, not a full one. `ABCD-1234-EFGH` in a tile either wraps -
        showing a shape no voucher will ever have - or shrinks the frame until
        the framing itself is unreadable, which is the one thing the tile exists
        to show. Six characters still reads unmistakably as a code.
    -->
    <PkCodeBox code="AB-1234" :style="String(value)" compact />
</template>
