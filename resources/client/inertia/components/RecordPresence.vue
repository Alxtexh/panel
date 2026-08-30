<script setup lang="ts">
/**
 * Avatars of colleagues currently on this record (Echo presence).
 *
 * Renders nothing without Echo or when presence is off in shared props.
 */
import { usePage } from '@inertiajs/vue3'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { echoClient } from '../composables/useWidgetPoll'

type Member = { id: number | string; name: string }

const props = defineProps<{
    resource: string
    recordId: string | number
    tenantId?: string | number | null
}>()

const page = usePage()
const others = ref<Member[]>([])

const enabled = computed(() => Boolean((page.props as any).presence?.enabled))
const selfId = computed(() => (page.props as any).auth?.user?.id)

const visible = computed(() =>
    others.value.filter((m) => String(m.id) !== String(selfId.value ?? '')),
)

let channel: {
    leave?: () => void
    here?: (callback: (members: Member[]) => void) => void
    joining?: (callback: (member: Member) => void) => void
    leaving?: (callback: (member: Member) => void) => void
} | null = null

onMounted(() => {
    if (!enabled.value || props.tenantId == null || props.tenantId === '') {
        return
    }

    const echo = echoClient()

    if (!echo || typeof (echo as any).join !== 'function') {
        return
    }

    const name = `tenant.${props.tenantId}.${props.resource}.${props.recordId}`
    channel = (echo as any).join(name)

    channel?.here?.((members: Member[]) => {
        others.value = members
    })
    channel?.joining?.((member: Member) => {
        if (!others.value.some((m) => String(m.id) === String(member.id))) {
            others.value = [...others.value, member]
        }
    })
    channel?.leaving?.((member: Member) => {
        others.value = others.value.filter((m) => String(m.id) !== String(member.id))
    })
})

onBeforeUnmount(() => {
    channel?.leave?.()
    channel = null
})
</script>

<template>
    <div
        v-if="visible.length > 0"
        class="flex items-center gap-1.5"
        data-test="record-presence"
        :aria-label="`${visible.length} viewing`"
    >
        <span
            v-for="member in visible.slice(0, 5)"
            :key="String(member.id)"
            class="bg-muted text-muted-foreground inline-flex size-7 items-center justify-center rounded-full text-xs font-semibold"
            :title="member.name"
        >
            {{ member.name.slice(0, 1).toUpperCase() }}
        </span>
        <span v-if="visible.length > 5" class="text-muted-foreground text-xs font-normal">
            +{{ visible.length - 5 }}
        </span>
    </div>
</template>
