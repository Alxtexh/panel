<script setup lang="ts">
/**
 * Faces behind the product: a marketing team grid.
 *
 * INITIALS WHEN THERE IS NO PHOTO. Shipping placeholder headshots from another
 * project's assets would put strangers on every install's front door; an
 * initial is honest about what the host still needs to replace.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    items?: { name?: string; role?: string; bio?: string; avatar?: string }[]
}>()
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <li
                    v-for="(item, i) in items ?? []"
                    :key="i"
                    class="flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <img
                        v-if="item.avatar"
                        :src="item.avatar"
                        alt=""
                        class="mx-auto size-16 rounded-full object-cover"
                    />
                    <span
                        v-else
                        class="mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold"
                        aria-hidden="true"
                    >
                        {{ (item.name ?? '?').slice(0, 1) }}
                    </span>

                    <div class="min-w-0">
                        <h3 class="truncate text-sm font-semibold">{{ item.name }}</h3>
                        <p v-if="item.role" class="truncate text-xs text-muted-foreground">
                            {{ item.role }}
                        </p>
                    </div>

                    <p v-if="item.bio" class="text-pretty text-xs text-muted-foreground">
                        {{ item.bio }}
                    </p>
                </li>
            </ul>
        </div>
    </PkSection>
</template>
