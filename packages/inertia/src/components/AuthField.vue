<script setup lang="ts">
/**
 * A labelled input with its error, for the packaged sign-in screens.
 *
 * WHY THIS EXISTS RATHER THAN `Input` AND `Label` SEPARATELY. The reference
 * app's auth screens compose four shadcn components and a `cn()` helper per
 * field. Those are the APPLICATION's - a consumer installing PanelKit has no
 * `@/components/ui/input` - and vendoring shadcn into the package to serve
 * three screens would be a second component library nobody asked for.
 *
 * SO THE CLASSES ARE THE SAME AND THE PACKAGING IS NOT. What renders is the
 * same markup the demo's `Input` and `Label` produce, which is what keeps a
 * generated login looking like the one in the reference app.
 *
 * THE ERROR SLOT IS PART OF THE FIELD, not left to each screen. A validation
 * message rendered by the caller is one a caller can forget, and the failure -
 * a form that refuses a submission and says nothing - is the worst kind on a
 * login screen, because the person cannot tell whether they typed the password
 * wrong or the button is broken.
 */
withDefaults(
    defineProps<{
        id: string
        name: string
        label: string
        type?: string
        error?: string
        autocomplete?: string
        placeholder?: string
        required?: boolean
        autofocus?: boolean
        /**
         * `defaultValue` rather than `value`, deliberately: the field stays
         * uncontrolled and therefore editable. A bound value with no handler
         * puts the seeded text back on every keystroke.
         */
        defaultValue?: string
    }>(),
    { type: 'text', required: false, autofocus: false },
)
</script>

<template>
    <div class="grid gap-2">
        <!--
            ONE LABEL, AND THE ROW AROUND IT IS THE SLOT.

            The password field wants "Forgot password?" on the same line as its
            label, and the first version of this let the CALLER draw that label
            while this component rendered a second, screen-reader-only one for
            the same input. Two labels pointing at one field is not a style
            problem: the accessible name becomes "Password Password", and
            nothing visual shows it.
        -->
        <div class="flex items-center justify-between">
            <label
                :for="id"
                class="flex items-center gap-2 text-sm leading-none font-medium select-none"
            >
                {{ label }}
            </label>

            <slot name="labelSuffix" />
        </div>

        <input
            :id="id"
            :name="name"
            :type="type"
            :required="required"
            :autofocus="autofocus"
            :autocomplete="autocomplete"
            :placeholder="placeholder"
            :value="defaultValue"
            :aria-invalid="error ? 'true' : undefined"
            :aria-describedby="error ? `${id}-error` : undefined"
            class="border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40"
        />

        <p v-if="error" :id="`${id}-error`" class="text-sm text-destructive">
            {{ error }}
        </p>
    </div>
</template>
