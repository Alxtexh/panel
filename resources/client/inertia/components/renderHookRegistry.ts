import type { Component } from 'vue'

/**
 * The components an application is willing to let a plugin mount - 4.4.
 *
 * A REGISTRY, NOT A NAME FROM THE SERVER. A hook arrives as the string
 * `BillingTrialNotice`; what that resolves to is decided here, at build
 * time, by the application. Without this a plugin could name any component
 * in the bundle and have the panel mount it on a screen of its choosing -
 * the same class of hole the landing designs close by validating `?design=`.
 *
 * EMPTY BY DEFAULT. A fresh installation renders no plugin markup until it
 * has said which components are allowed, which is the safe direction: a
 * missing registration shows nothing, rather than showing anything.
 */
const registry: Record<string, Component> = {}

export function registerRenderHookComponent(name: string, component: Component): void {
    registry[name] = component
}

export function resolveRenderHookComponent(name: string): Component | undefined {
    return registry[name]
}
