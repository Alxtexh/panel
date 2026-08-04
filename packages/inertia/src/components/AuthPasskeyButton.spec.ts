import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import AuthPasskeyButton from './AuthPasskeyButton.vue'

/**
 * The passkey button, driven the way a person drives it: by clicking.
 *
 * THIS FILE EXISTS BECAUSE THE BUTTON SHIPPED BROKEN. It was checked by looking
 * at the sign-in screen and seeing a button, which proves only that a button
 * renders. Clicking it threw `Cannot read properties of undefined (reading
 * 'replace')` - a message naming neither the field nor the endpoint - because
 * of two shape mismatches with `laravel/passkeys`:
 *
 *   - it returns the options NESTED under `options`, and this read the top level
 *   - its verification request wants the credential WRAPPED in `credential`,
 *     and this posted the fields at the top level
 *
 * Neither is visible in a screenshot, a type check or a build. Both are one
 * click away, so the test clicks.
 *
 * WEBAUTHN IS STUBBED, not simulated. What is asserted is the two ends this
 * component owns - what it reads out of the options response, and what it posts
 * to the verification endpoint. The cryptography between them is the browser's
 * and Fortify's, and both have their own tests.
 */
const OPTIONS = {
    challenge: 'F0o0LvgH0PyIAZRmn-iHv7ptC4ERbLNGCYXZhcWbd_Q',
    timeout: 60000,
    rpId: 'localhost',
    allowCredentials: [],
    userVerification: 'required',
}

/** A credential shaped like the one `navigator.credentials.get()` resolves. */
function fakeCredential() {
    const bytes = new Uint8Array([1, 2, 3]).buffer

    return {
        id: 'credential-id',
        rawId: bytes,
        type: 'public-key',
        response: {
            clientDataJSON: bytes,
            authenticatorData: bytes,
            signature: bytes,
            userHandle: null,
        },
    }
}

let posted: { url: string; body: any } | null = null

beforeEach(() => {
    posted = null

    // The button hides itself without this - see `supported`.
    ;(globalThis as any).PublicKeyCredential = class {}
    ;(globalThis as any).navigator = {
        credentials: { get: vi.fn().mockResolvedValue(fakeCredential()) },
    }
    /*
     * A SUCCESSFUL SIGN-IN NAVIGATES, and jsdom cannot - so each passing test
     * logs "Not implemented: navigation" to stderr. That noise is left alone
     * deliberately: `window.location` is non-configurable in this jsdom, and
     * spying on it made all four tests fail. A tidy log is not worth a stub
     * that breaks the thing it was tidying.
     */
    ;(globalThis as any).btoa = (s: string) => Buffer.from(s, 'binary').toString('base64')
    ;(globalThis as any).atob = (s: string) => Buffer.from(s, 'base64').toString('binary')

    vi.stubGlobal(
        'fetch',
        vi.fn(async (url: string, init?: any) => {
            if (init?.method === 'POST') {
                posted = { url, body: JSON.parse(init.body) }

                return { ok: true, json: async () => ({ redirect: '/dashboard' }) }
            }

            // `laravel/passkeys` nests them. Reading the top level is the bug.
            return { ok: true, json: async () => ({ options: OPTIONS }) }
        }),
    )
})

afterEach(() => {
    vi.unstubAllGlobals()
})

const routes = { options: '/passkeys/login/options', verify: '/passkeys/login' }

describe('AuthPasskeyButton', () => {
    it('reads the challenge out of a nested options response', async () => {
        const wrapper = mount(AuthPasskeyButton, { props: { routes } })

        await wrapper.find('button').trigger('click')
        await vi.waitFor(() => expect(posted).not.toBeNull())

        // Reaching the POST at all means the challenge decoded: the button
        // cannot call `navigator.credentials.get()` without it.
        expect((globalThis as any).navigator.credentials.get).toHaveBeenCalled()
        expect(wrapper.text()).not.toContain('undefined')
    })

    it('posts the credential WRAPPED, which is what the endpoint validates', async () => {
        const wrapper = mount(AuthPasskeyButton, { props: { routes } })

        await wrapper.find('button').trigger('click')
        await vi.waitFor(() => expect(posted).not.toBeNull())

        expect(posted!.url).toBe('/passkeys/login')

        /*
         * THE ASSERTION THAT WOULD HAVE CAUGHT IT. Posting these at the top
         * level fails validation rather than the signature check, so the reader
         * is told the passkey was rejected when it was never read.
         */
        expect(posted!.body).toHaveProperty('credential')
        expect(posted!.body.credential.id).toBe('credential-id')
        expect(posted!.body.credential.type).toBe('public-key')
        expect(posted!.body.credential.response).toHaveProperty('clientDataJSON')
    })

    it('renders nothing when the routes are explicitly off', () => {
        const wrapper = mount(AuthPasskeyButton, { props: { routes: null } })

        expect(wrapper.find('button').exists()).toBe(false)
    })

    it('says so when the server returns no challenge', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(async () => ({ ok: true, json: async () => ({}) })),
        )

        const wrapper = mount(AuthPasskeyButton, { props: { routes } })

        await wrapper.find('button').trigger('click')
        await vi.waitFor(() => expect(wrapper.text()).toContain('challenge'))
    })
})
