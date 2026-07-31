# What PanelKit's interface is built on, and why

Part G.8. The question asked was direct: Nuxt UI, Naive UI, Reka (Radix Vue),
Headless UI or Ark UI — which is the **Enterprise Ready Workhorse**, and which
is the **Lightweight High Performance Pick**?

The answer for this codebase is that **one choice is both**, and we are already
most of the way into it.

## The constraint that decides it

PanelKit is **Vue 3 + Inertia + Laravel. It is not Nuxt.** That is not a
preference, it is the architecture: pages are served by Laravel controllers and
mounted by Inertia, there is no Nuxt server, no Nitro, no `app.vue`, no
auto-imports and no module system to install a Nuxt module into.

That single fact rules on half the list before any comparison of components:

| Library | Verdict here |
| --- | --- |
| **Nuxt UI** | Its Vue-without-Nuxt mode exists, but the value of Nuxt UI is the Nuxt integration — modules, auto-imports, app config theming. Taking it without Nuxt means importing a large component library and leaving most of what you paid for on the table. Its **templates** are still worth reading for landing-page composition (G.9). |
| **Naive UI** | Genuinely good, genuinely complete, and a whole design language with its own runtime and its own theming system. Adopting it means our Tailwind tokens stop being the source of truth and every existing screen gets rebuilt to match somebody else's look. That is a rewrite, not an upgrade. |
| **Headless UI** | Correct instinct — behaviour without appearance — but the Vue port is the smaller sibling of the React one, and its component set stops well short of what a panel needs (no combobox parity, no date primitives, no toast). |
| **Ark UI** | Excellent state-machine primitives (Zag), framework-agnostic, and the closest genuine rival. It is heavier in concept than we need and would be a second primitive layer beside the one already in place. |
| **Reka UI** (Radix Vue) | **This is our foundation, and it already is.** |

## The decision

**Reka UI primitives + shadcn-style components we own + Tailwind tokens,
all living in `@panelkit/ui`.**

It is the **Enterprise Workhorse** because:

- accessibility is in the primitive, not in our review checklist — focus
  traps, roving tabindex, `aria-*` wiring, dismiss behaviour;
- **we own the markup.** Every component is a file in this repo. There is no
  vendor release that changes how a panel looks, and no upstream deprecation
  that strands a screen;
- theming is Tailwind tokens, so a tenant's brand colour flows through
  everything without a second theming system to teach it;
- there is no runtime design language to fight when a customer wants their own.

It is simultaneously the **Lightweight High Performance Pick** because
headless primitives ship behaviour, not a component runtime: the bytes are the
components we actually use, tree-shaken, with no global CSS bundle and no
theme engine loaded on first paint.

## The rule this creates

**One copy of every shared component, in `@panelkit/ui`.** Not a copy in the
playground, not a near-copy in a generated portal. Where a component exists in
both places today, the package version is the survivor and the application
imports it. The same rule holds for shared functions: a helper that two screens
need lives in the package, not in whichever page needed it first.

The reason is the one the user gave, and it is the correct one: duplicated
copies drift, and drift is invisible until the day two screens disagree in
front of a customer.

**Status:** the primitive/foundation decision is settled and recorded here.
The mechanical de-duplication sweep — moving every remaining shared component
out of `apps/playground/resources/js/components/ui` and into the package — is
tracked separately, because it touches many files and deserves its own
verification pass rather than being smuggled into a decision document.
