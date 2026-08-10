<script setup lang="ts">
/**
 * A password field with a reveal toggle.
 *
 * MOVED FROM THE REFERENCE APP, verbatim.
 *
 * THE TOGGLE IS `tabindex="-1"` ON PURPOSE. Tab from the password field should
 * reach the submit button, not an eye icon - somebody typing a password and
 * pressing Tab-Enter expects to sign in.
 *
 * IT FORWARDS `$attrs` AND EXPOSES `focus`, because it stands in for an input:
 * `name`, `autocomplete`, `required` and `autofocus` all belong to the caller,
 * and a form that focuses its first field must be able to reach through.
 */
import { Eye, EyeOff } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { ref, useTemplateRef } from 'vue'
import { cn } from '../../lib/cn'
import { Input } from '../shadcn/input'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const showPassword = ref(false)
const inputRef = useTemplateRef<any>('inputRef')

defineExpose({
    $el: inputRef,
    focus: () => inputRef.value?.$el?.focus(),
})
</script>

<template>
    <div class="relative">
        <Input
            ref="inputRef"
            :type="showPassword ? 'text' : 'password'"
            :class="cn('pr-10', props.class)"
            v-bind="$attrs"
        />
        <button
            type="button"
            :class="
                cn(
                    'text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none',
                )
            "
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
            :tabindex="-1"
            @click="showPassword = !showPassword"
        >
            <EyeOff v-if="showPassword" class="size-4" />
            <Eye v-else class="size-4" />
        </button>
    </div>
</template>
