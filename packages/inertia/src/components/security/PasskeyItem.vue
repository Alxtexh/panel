<script setup lang="ts">
/**
 * One registered passkey, with a confirm-before-removing dialog.
 *
 * MOVED FROM THE REFERENCE APP, verbatim - the shadcn dialog it uses moved into
 * `@panelkit/ui` with it.
 *
 * REMOVAL IS CONFIRMED because it is not undoable and the thing being destroyed
 * is a way in. Somebody with one passkey and no password who taps the bin by
 * accident has locked themselves out of the panel.
 *
 * THE PARENT OWNS THE REQUEST, and hands back `onError` so this row can stop
 * showing "Removing..." for a deletion that failed. A row that spins forever is
 * how a refused delete looks like a slow one.
 */
import { KeyRound, Trash2 } from '@lucide/vue'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
    PkButton as Button,
} from '@panelkit/ui'
import { ref } from 'vue'
import type { Passkey } from '../../types'

const props = defineProps<{
    passkey: Passkey
}>()

const emit = defineEmits<{
    remove: [id: number, onError: () => void]
}>()

const isDeleting = ref(false)

const handleDelete = () => {
    isDeleting.value = true
    emit('remove', props.passkey.id, () => {
        isDeleting.value = false
    })
}
</script>

<template>
    <div class="flex items-center justify-between border-b p-4 last:border-b-0">
        <div class="flex items-center gap-4">
            <div class="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <KeyRound class="text-muted-foreground h-5 w-5" />
            </div>
            <div class="space-y-1">
                <div class="flex items-center gap-2.5">
                    <p class="font-medium tracking-tight">{{ passkey.name }}</p>
                    <span
                        v-if="passkey.authenticator"
                        class="bg-muted text-muted-foreground ring-border inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase ring-1 ring-inset"
                    >
                        {{ passkey.authenticator }}
                    </span>
                </div>
                <p class="text-muted-foreground text-sm">
                    Added {{ passkey.created_at_diff }}
                    <template v-if="passkey.last_used_at_diff">
                        <span class="text-muted-foreground/50 mx-1">/</span>
                        Last used {{ passkey.last_used_at_diff }}
                    </template>
                </p>
            </div>
        </div>

        <Dialog>
            <DialogTrigger as-child>
                <Button
                    variant="ghost"
                    size="sm"
                    class="text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                    <Trash2 class="h-4 w-4" />
                    <span class="sr-only">Remove</span>
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogTitle>Remove passkey</DialogTitle>
                <DialogDescription>
                    Are you sure you want to remove the "{{ passkey.name }}" passkey? You will no
                    longer be able to use it to sign in.
                </DialogDescription>
                <DialogFooter class="gap-2">
                    <DialogClose as-child>
                        <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive" :disabled="isDeleting" @click="handleDelete">
                        {{ isDeleting ? 'Removing...' : 'Remove passkey' }}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
</template>
