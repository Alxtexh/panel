<script setup lang="ts">
/**
 * What other people say, which is the section this kit was missing entirely.
 *
 * ATTRIBUTED OR ABSENT. An unattributed quote reads as copywriting, and the
 * whole value of the section is that somebody put their name to it - so the
 * name and role render even when the avatar is missing, and a quote with no
 * name is still rendered rather than silently dropped, because hiding an
 * author's data is a worse failure than an anonymous card.
 */
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

defineProps<{
    title?: string
    body?: string
    items?: { quote?: string; name?: string; role?: string; avatar?: string }[]
}>()
</script>

<template>
    <PkSection>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="(item, i) in items ?? []"
                    :key="i"
                    class="flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <blockquote class="text-pretty text-sm leading-relaxed">
                        “{{ item.quote }}”
                    </blockquote>

                    <figcaption class="mt-auto flex items-center gap-3">
                        <img
                            v-if="item.avatar"
                            :src="item.avatar"
                            alt=""
                            class="size-9 shrink-0 rounded-full object-cover"
                        />
                        <span
                            v-else
                            class="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium"
                            aria-hidden="true"
                        >
                            {{ (item.name ?? '?').slice(0, 1) }}
                        </span>

                        <span class="min-w-0">
                            <span class="block truncate text-sm font-medium">{{ item.name }}</span>
                            <span
                                v-if="item.role"
                                class="block truncate text-xs text-muted-foreground"
                            >
                                {{ item.role }}
                            </span>
                        </span>
                    </figcaption>
                </li>
            </ul>
        </div>
    </PkSection>
</template>
