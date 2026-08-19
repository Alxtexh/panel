import { h, type VNode } from 'vue'
import { router } from '@inertiajs/vue3'
import { toast } from 'vue-sonner'

/**
 * Buttons on an Inertia flash toast or a bell row.
 *
 * Props in from PHP (`Action::toNotificationSchema()`). The client follows
 * `href` or POSTs it. Closures never leave the server.
 */
export type NotificationAction = {
    key: string
    label: string
    href?: string | null
    icon?: string | null
    newTab?: boolean
    method?: string
}

export type FlashToast = {
    type?: string
    message?: string
    body?: string
    actions?: NotificationAction[]
}

export function notificationActionIsPost(action: NotificationAction): boolean {
    return (action.method ?? 'get').toLowerCase() === 'post'
}

export function followNotificationAction(action: NotificationAction): void {
    if (!action.href) {
        return
    }

    if (notificationActionIsPost(action)) {
        router.post(action.href)

        return
    }

    if (action.newTab) {
        window.open(action.href, '_blank', 'noopener,noreferrer')

        return
    }

    window.location.assign(action.href)
}

export function linkedNotificationActions(actions: NotificationAction[] | undefined): NotificationAction[] {
    return (actions ?? []).filter((action) => typeof action.href === 'string' && action.href !== '')
}

/**
 * Vue nodes the toast description can mount: body text plus real hrefs.
 */
export function flashToastDescription(data: FlashToast): VNode | undefined {
    const actions = linkedNotificationActions(data.actions)
    const children: VNode[] = []

    if (data.body) {
        children.push(h('p', data.body))
    }

    if (actions.length > 0) {
        children.push(
            h(
                'span',
                { class: 'mt-1 flex flex-wrap gap-2' },
                actions.map((action) =>
                    notificationActionIsPost(action)
                        ? h(
                              'button',
                              {
                                  type: 'button',
                                  class: 'underline',
                                  'data-toast-action': action.key,
                                  onClick: () => followNotificationAction(action),
                              },
                              action.label,
                          )
                        : h(
                              'a',
                              {
                                  href: action.href,
                                  class: 'underline',
                                  'data-toast-action': action.key,
                                  target: action.newTab ? '_blank' : undefined,
                                  rel: action.newTab ? 'noopener noreferrer' : undefined,
                              },
                              action.label,
                          ),
                ),
            ),
        )
    }

    if (children.length === 0) {
        return undefined
    }

    return h('div', children)
}

export function showFlashToast(data: FlashToast | null | undefined): void {
    if (!data?.message) {
        return
    }

    const type = data.type === 'danger' ? 'error' : (data.type ?? 'info')
    const fn =
        type === 'success'
            ? toast.success
            : type === 'error'
              ? toast.error
              : type === 'warning'
                ? toast.warning
                : toast.info

    const description = flashToastDescription(data)

    if (description) {
        fn(data.message, { description })

        return
    }

    fn(data.message)
}

function collectHrefs(node: unknown): string[] {
    if (node === null || typeof node !== 'object') {
        return []
    }

    const vnode = node as { props?: { href?: string }; children?: unknown }
    const href = typeof vnode.props?.href === 'string' ? [vnode.props.href] : []
    const kids = Array.isArray(vnode.children) ? vnode.children : []

    return [...href, ...kids.flatMap(collectHrefs)]
}

/** Test helper: hrefs the flash description would put on the toast. */
export function flashToastHrefs(data: FlashToast): string[] {
    return collectHrefs(flashToastDescription(data))
}
