import { mount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'

import { useUnsavedChanges } from './useUnsavedChanges'

/**
 * Dirty tracking for a page that is not a record form.
 *
 * THE COMPOSABLE NEEDS A COMPONENT because it registers and removes a
 * `beforeunload` listener on mount and unmount - calling it bare would work and
 * would leak the listener into every later test, which is exactly the bug it
 * exists to spare a consumer.
 */
/*
 * EVERY MOUNT IS UNMOUNTED AFTERWARDS, and finding out why is the reason the
 * last test in this file is worth having. A component left mounted keeps its
 * `beforeunload` listener, and a DIRTY one goes on cancelling the event for the
 * rest of the run - so the test asserting the listener was removed failed
 * because of listeners belonging to the four tests before it. That is precisely
 * the leak a consumer would get, arriving here first.
 */
const mounted: VueWrapper[] = []

afterEach(() => {
    while (mounted.length > 0) {
        mounted.pop()?.unmount()
    }
})

function harness<T>(initial: T) {
    let api!: ReturnType<typeof useUnsavedChanges<T>>
    let state!: Ref<T>

    const wrapper = mount(
        defineComponent({
            setup() {
                state = ref(initial) as Ref<T>
                api = useUnsavedChanges(state)

                return () => null
            },
        }),
    )

    mounted.push(wrapper)

    return { api, state, wrapper }
}

describe('useUnsavedChanges', () => {
    it('starts clean and notices a change', async () => {
        const { api, state } = harness({ name: 'Acme' })

        expect(api.dirty.value).toBe(false)

        state.value = { name: 'Acme Ltd' }

        expect(api.dirty.value).toBe(true)
    })

    it('is clean again after a commit', () => {
        const { api, state } = harness({ name: 'Acme' })

        state.value = { name: 'Acme Ltd' }
        api.commit()

        expect(api.dirty.value).toBe(false)
    })

    it('puts the committed version back on discard', () => {
        const { api, state } = harness({ name: 'Acme', plan: 'basic' })

        state.value = { name: 'Changed', plan: 'basic' }
        api.discard()

        expect(state.value).toEqual({ name: 'Acme', plan: 'basic' })
        expect(api.dirty.value).toBe(false)
    })

    /**
     * THE ONE A HAND-ROLLED VERSION GETS WRONG.
     *
     * `JSON.stringify` preserves insertion order, so state rebuilt from a
     * response - identical values, keys in a different order - compares as
     * changed. The page then shows "unsaved changes" immediately after a save
     * that succeeded, and people learn to ignore the bar.
     */
    it('does not call reordered keys a change', () => {
        const { api, state } = harness<Record<string, unknown>>({ name: 'Acme', plan: 'basic' })

        state.value = { plan: 'basic', name: 'Acme' }

        expect(api.dirty.value).toBe(false)
    })

    /**
     * AND CLEARING A FIELD IS A CHANGE. `JSON.stringify` drops a key whose
     * value is `undefined`, so a cleared field would serialise identically to
     * one that was never there - a real edit reading as none.
     */
    it('counts a field cleared to undefined', () => {
        const { api, state } = harness<Record<string, unknown>>({ note: 'keep' })

        state.value = { note: undefined }

        expect(api.dirty.value).toBe(true)
    })

    it('removes its unload listener when the page goes away', () => {
        const { wrapper, state } = harness({ name: 'Acme' })

        state.value = { name: 'Changed' }
        wrapper.unmount()

        const event = new Event('beforeunload', { cancelable: true })
        window.dispatchEvent(event)

        expect(event.defaultPrevented).toBe(false)
    })
})
