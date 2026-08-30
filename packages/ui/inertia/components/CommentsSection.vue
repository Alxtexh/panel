<script setup lang="ts">
/**
 * Threaded comments on a resource record page.
 *
 * Opt-in per resource via `Resource::comments()`. Fetches on mount so records
 * with long threads do not ship every comment in the initial Inertia payload.
 */
import { computed, onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import { PkButton as Button } from '@alxtexh-enterprise/panel'

const props = defineProps<{
    label: string
    url: string
    canCreate: boolean
}>()

const emit = defineEmits<{
    loaded: [count: number]
    created: [id: number | string]
}>()

type Comment = {
    id: number | string
    body: string
    mentions: (number | string)[]
    author: { id: number | string | null; name: string }
    createdAt: string | null
}

const comments = ref<Comment[]>([])
const loading = ref(true)
const failed = ref(false)
const canCreate = ref(props.canCreate)
const body = ref('')
const sending = ref(false)

const empty = computed(() => !loading.value && comments.value.length === 0)

async function load() {
    loading.value = true
    failed.value = false

    try {
        const response = await fetch(props.url, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })

        if (!response.ok) {
            throw new Error(String(response.status))
        }

        const data = await response.json()

        comments.value = data.comments ?? []
        canCreate.value = Boolean(data.canCreate)
        emit('loaded', comments.value.length)
    } catch {
        failed.value = true
    } finally {
        loading.value = false
    }
}

onMounted(load)

function formatTime(value: string | null): string {
    if (!value) {
        return ''
    }

    try {
        return new Intl.DateTimeFormat(undefined, {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(new Date(value))
    } catch {
        return value
    }
}

function submit() {
    const text = body.value.trim()

    if (text === '' || sending.value || !canCreate.value) {
        return
    }

    sending.value = true

    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? ''

    fetch(props.url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token,
            'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ body: text }),
    })
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(String(response.status))
            }

            const data = await response.json()
            const comment = data.comment as Comment | undefined

            body.value = ''

            if (comment) {
                comments.value = [...comments.value, comment]
                emit('created', comment.id)
            } else {
                await load()
            }
        })
        .catch(() => toast.error('That comment was not saved.'))
        .finally(() => {
            sending.value = false
        })
}
</script>

<template>
    <section class="flex flex-col gap-3" aria-labelledby="comments-heading">
        <h2 id="comments-heading" class="text-lg font-semibold tracking-tight">
            {{ label }}
        </h2>

        <p v-if="loading" class="text-muted-foreground text-sm font-normal">Loading comments…</p>

        <p v-else-if="failed" class="text-destructive text-sm">
            Comments could not be loaded. Refresh the page to try again.
        </p>

        <template v-else>
            <p v-if="empty" class="text-muted-foreground text-sm font-normal">
                No comments yet. Be the first to leave a note.
            </p>

            <ul v-else class="flex flex-col gap-3">
                <li
                    v-for="comment in comments"
                    :key="comment.id"
                    class="border-border bg-muted/20 rounded-lg border p-3"
                >
                    <div class="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span class="text-sm font-medium">{{ comment.author.name }}</span>
                        <time
                            v-if="comment.createdAt"
                            class="text-muted-foreground text-xs font-normal"
                            :datetime="comment.createdAt"
                        >
                            {{ formatTime(comment.createdAt) }}
                        </time>
                    </div>
                    <p class="text-sm whitespace-pre-wrap">{{ comment.body }}</p>
                </li>
            </ul>

            <form v-if="canCreate" class="flex flex-col gap-2" @submit.prevent="submit">
                <label class="sr-only" for="comment-body">Add a comment</label>
                <textarea
                    id="comment-body"
                    v-model="body"
                    rows="3"
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    placeholder="Write a comment. Mention someone with @username or @email."
                    :disabled="sending"
                />
                <div class="flex justify-end">
                    <Button type="submit" size="sm" :disabled="sending || body.trim() === ''">
                        {{ sending ? 'Saving…' : 'Post comment' }}
                    </Button>
                </div>
            </form>
        </template>
    </section>
</template>
