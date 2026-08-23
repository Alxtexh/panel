<script setup lang="ts">
import { computed } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@alxtexh-enterprise/panel'
import { useInitials } from '../../composables/useInitials'
import type { User } from '../../types'

type Props = {
    user: User
    showEmail?: boolean
    /** When false, only the avatar is rendered (header trigger, compact chrome). */
    showName?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    showEmail: false,
    showName: true,
})

const { getInitials } = useInitials()

const showAvatar = computed(() => Boolean(props.user.avatar && props.user.avatar !== ''))

/**
 * Initials from the name, then the email, then a question mark.
 *
 * A PANEL USER MAY HAVE NO NAME, so an empty fallback used to look like a
 * missing icon (or a silhouette) rather than a person. The email's first
 * character stands in; "?" stands in for that.
 */
const initials = computed(() => {
    const fromName = getInitials(props.user.name)

    if (fromName) {
        return fromName
    }

    const email = props.user.email?.trim()

    if (email) {
        return email[0]!.toUpperCase()
    }

    return '?'
})
</script>

<template>
    <Avatar
        class="size-8 overflow-hidden rounded-full"
        data-slot="user-avatar"
        :aria-hidden="!showName"
    >
        <AvatarImage v-if="showAvatar" :src="user.avatar!" :alt="user.name" />
        <AvatarFallback class="rounded-full bg-muted text-xs font-medium">
            {{ initials }}
        </AvatarFallback>
    </Avatar>

    <div v-if="showName" class="grid min-w-0 flex-1 text-left text-sm leading-tight">
        <span class="truncate font-medium">{{ user.name ?? user.email }}</span>
        <span v-if="showEmail" class="truncate text-xs text-muted-foreground">{{
            user.email
        }}</span>
    </div>
</template>
