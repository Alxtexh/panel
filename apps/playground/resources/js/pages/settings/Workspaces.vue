<script setup lang="ts">
/**
 * The workspaces this person belongs to - roadmap 5.6.
 *
 * SWITCHING IS A FORM, NOT A LINK. It changes which organisation every
 * subsequent request reads, so it is a PUT the server authorises against the
 * membership pivot - a GET that switched state would be a link that changes
 * reality when a crawler or a prefetch touches it.
 */
import { Head, router, useForm } from '@inertiajs/vue3';
import { PkButton as Button } from '@panelkit/ui';
import { toast } from 'vue-sonner';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Workspace {
    id: number;
    name: string;
    current: boolean;
    suspended: boolean;
}

defineProps<{
    workspaces: Workspace[];
    canManageMembers: boolean;
}>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Workspaces', href: '/settings/workspaces' }],
    },
});

const creating = useForm({ name: '' });

function create() {
    creating.post('/settings/workspaces', {
        onSuccess: () => toast.success('Workspace created — you are now in it'),
    });
}

const switching = useForm<{ workspace: number | null }>({ workspace: null });

function switchTo(workspace: Workspace) {
    switching.workspace = workspace.id;
    switching.put('/settings/workspaces/current', {
        onSuccess: () => toast.success(`Switched to ${workspace.name}`),
        onError: (errors) => {
            if (errors.workspace) {
                toast.error(errors.workspace);
            }
        },
    });
}
</script>

<template>
    <Head title="Workspaces" />

    <h1 class="sr-only">Workspaces</h1>

    <div class="flex flex-col space-y-6">
        <Heading
            variant="small"
            title="Workspaces"
            description="The organisations you belong to, and which one you are working in"
        />

        <ul class="divide-y rounded-md border">
            <li
                v-for="workspace in workspaces"
                :key="workspace.id"
                class="flex items-center justify-between gap-3 px-3 py-2.5"
            >
                <div class="min-w-0">
                    <span class="text-sm font-medium">{{
                        workspace.name
                    }}</span>
                    <span
                        v-if="workspace.current"
                        class="ml-2 text-xs font-medium text-primary"
                    >
                        Current
                    </span>
                    <span
                        v-else-if="workspace.suspended"
                        class="ml-2 text-xs text-muted-foreground"
                    >
                        Suspended
                    </span>
                </div>

                <!--
                    The current workspace gets no button rather than a disabled
                    one: "switch to where you already are" is not an action
                    someone is waiting to become possible.
                -->
                <Button
                    v-if="!workspace.current && !workspace.suspended"
                    type="button"
                    variant="outline"
                    size="sm"
                    :disabled="switching.processing"
                    @click="switchTo(workspace)"
                >
                    Switch
                </Button>
            </li>
        </ul>

        <p v-if="canManageMembers" class="text-sm text-muted-foreground">
            Who is in the current workspace, and what they may do, lives in
            <button
                type="button"
                class="text-foreground underline underline-offset-4"
                @click="router.visit('/user-management')"
            >
                User management</button
            >.
        </p>

        <form class="space-y-4 border-t pt-6" @submit.prevent="create">
            <Heading
                variant="small"
                title="New workspace"
                description="Starts empty, with you as its administrator, and becomes your current workspace"
            />

            <div class="grid gap-2">
                <Label for="workspace-name">Name</Label>
                <Input
                    id="workspace-name"
                    v-model="creating.name"
                    type="text"
                    maxlength="60"
                    placeholder="Nairobi Fibre West"
                />
                <InputError :message="creating.errors.name" />
            </div>

            <Button
                type="submit"
                :disabled="creating.processing || !creating.name"
            >
                {{ creating.processing ? 'Creating…' : 'Create workspace' }}
            </Button>
        </form>
    </div>
</template>
