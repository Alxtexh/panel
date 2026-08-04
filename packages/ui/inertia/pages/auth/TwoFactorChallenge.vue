<script setup lang="ts">
/**
 * The second factor.
 *
 * MOVED FROM THE REFERENCE APP. Two modes in one screen - the authenticator
 * code, and the recovery code somebody falls back to when their phone is gone -
 * because they are the same decision at the same moment, and splitting them into
 * two routes means the person who needs the second one has to find it while
 * locked out.
 *
 * THE HEADING CHANGES WITH THE MODE, which is why it is not the layout's job
 * here: the demo used `setLayoutProps` for exactly this, and the packaged screen
 * owns its layout, so it simply passes the current title down.
 *
 * THE CODE IS A HIDDEN FIELD as well as the visible boxes, because the boxes are
 * a rendering of one input and the form posts `code` either way.
 */
import { Form, Head } from '@inertiajs/vue3'
import { PkButton as Button, PkOtpInput, PkSpinner as Spinner } from '@alxtexh-enterprise/panel'
import { computed, ref } from 'vue'
import AuthInputError from '../../components/AuthInputError.vue'
import AuthField from '../../components/AuthField.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where the code posts. */
    action: string
}>()

const recovery = ref(false)
const code = ref('')

const content = computed(() =>
    recovery.value
        ? {
              title: 'Recovery code',
              description:
                  'Please confirm access to your account by entering one of your emergency recovery codes.',
              buttonText: 'login using an authentication code',
          }
        : {
              title: 'Authentication code',
              description:
                  'Enter the authentication code provided by your authenticator application.',
              buttonText: 'login using a recovery code',
          },
)

function toggle(clearErrors: () => void): void {
    recovery.value = !recovery.value
    clearErrors()
    code.value = ''
}
</script>

<template>
    <AuthLayout :title="content.title" :description="content.description">
        <Head title="Two-factor authentication" />

        <div class="space-y-6">
            <Form
                :action="props.action"
                method="post"
                class="space-y-4"
                reset-on-error
                @error="code = ''"
                #default="{ errors, processing, clearErrors }"
            >
                <template v-if="!recovery">
                    <input type="hidden" name="code" :value="code" />

                    <div class="flex flex-col items-center justify-center space-y-3 text-center">
                        <div class="flex w-full items-center justify-center">
                            <PkOtpInput
                                id="otp"
                                v-model="code"
                                :length="6"
                                :disabled="processing"
                                autofocus
                            />
                        </div>

                        <AuthInputError :message="errors.code" />
                    </div>
                </template>

                <template v-else>
                    <AuthField
                        id="recovery_code"
                        name="recovery_code"
                        label="Recovery code"
                        placeholder="Enter a recovery code"
                        autocomplete="one-time-code"
                        required
                        autofocus
                        :error="errors.recovery_code"
                    />
                </template>

                <Button type="submit" class="w-full" :disabled="processing">
                    <Spinner v-if="processing" />
                    Continue
                </Button>

                <div class="text-center text-sm">
                    <span class="text-muted-foreground">or you can </span>
                    <button
                        type="button"
                        class="underline underline-offset-4"
                        @click="toggle(clearErrors)"
                    >
                        {{ content.buttonText }}
                    </button>
                </div>
            </Form>
        </div>
    </AuthLayout>
</template>
