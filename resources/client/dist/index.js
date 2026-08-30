import './ui.css';
import { defineComponent as L, useSlots as Gt, openBlock as t, createElementBlock as a, normalizeClass as _, unref as x, renderSlot as G, createElementVNode as o, toDisplayString as c, createCommentVNode as k, computed as y, normalizeStyle as se, Fragment as P, renderList as j, ref as q, watch as fe, useId as da, withModifiers as ve, createTextVNode as H, createVNode as E, createStaticVNode as rt, createBlock as D, createSlots as it, withCtx as O, nextTick as De, onBeforeUnmount as ke, Teleport as ct, Transition as Qe, onMounted as ge, withDirectives as pe, vModelText as _e, resolveDynamicComponent as Ae, resolveComponent as Wt, vModelSelect as Ze, vModelDynamic as ua, mergeProps as re, normalizeProps as Le, guardReactiveProps as Ne, defineAsyncComponent as mn, inject as xt, vShow as Ke, withKeys as Tt, onUnmounted as ca, isRef as fa, useTemplateRef as ma, onErrorCaptured as pa, provide as It, reactive as dt, useModel as ft, mergeModels as Fe, markRaw as va, shallowRef as ga, watchEffect as ha } from "vue";
import { useForwardPropsEmits as be, DialogRoot as _n, DialogOverlay as Zt, DialogPortal as Jt, DialogContent as Yt, DialogClose as Xe, CheckboxRoot as ba, CheckboxIndicator as ya, SwitchRoot as xa, SwitchThumb as ka, DialogDescription as zn, DialogTitle as Pn, DialogTrigger as Ln, createContext as $a, Primitive as et, TooltipRoot as wa, TooltipPortal as Ca, TooltipContent as Sa, TooltipArrow as Ma, TooltipProvider as On, TooltipTrigger as Ba, Separator as Aa, DropdownMenuRoot as _a, DropdownMenuCheckboxItem as za, DropdownMenuItemIndicator as jn, DropdownMenuPortal as Pa, DropdownMenuContent as La, DropdownMenuGroup as Oa, useForwardProps as Oe, DropdownMenuItem as ja, DropdownMenuLabel as Va, DropdownMenuRadioGroup as Da, DropdownMenuRadioItem as Ta, DropdownMenuSeparator as Ia, DropdownMenuSub as Ea, DropdownMenuSubContent as Fa, DropdownMenuSubTrigger as Na, DropdownMenuTrigger as Ra, AvatarRoot as Ua, AvatarFallback as Ha, AvatarImage as Ka, NavigationMenuViewport as qa, NavigationMenuRoot as Ga, NavigationMenuContent as Wa, NavigationMenuIndicator as Za, NavigationMenuItem as Ja, NavigationMenuLink as Ya, NavigationMenuList as Qa, NavigationMenuTrigger as Xa, Label as el } from "reka-ui";
import { DropdownMenuPortal as dS } from "reka-ui";
import { X as Qt, Check as Vn, AlertCircle as tl, EyeOff as nl, Eye as al, PanelLeftOpen as ll, PanelLeftClose as ol, Circle as sl, ChevronRight as Dn, MoreHorizontal as rl, ChevronDown as il, Loader2Icon as dl } from "@lucide/vue";
import { reactiveOmit as me, useVModel as Tn, useMediaQuery as ul, useEventListener as cl, defaultDocument as fl } from "@vueuse/core";
import { clsx as ml } from "clsx";
import { twMerge as pl } from "tailwind-merge";
import { usePage as Xt, Link as Et } from "@inertiajs/vue3";
import { cva as en } from "class-variance-authority";
const yt = {
  /* -------------------------------------------------- state and feedback */
  check: "M20 6 9 17l-5-5",
  x: "M18 6 6 18M6 6l12 12",
  dot: "M12 12h.01",
  alert: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  clock: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
  star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
  pause: "M10 4v16M14 4v16",
  play: "m5 3 14 9-14 9V3Z",
  /* ------------------------------------------------------------ network */
  wifi: "M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01M2 8.8a15 15 0 0 1 20 0",
  "wifi-off": "M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.6M2 8.8a15 15 0 0 1 4.2-2.5M22 8.8a15 15 0 0 0-6-3.4M12 20h.01",
  plus: "M5 12h14M12 5v14",
  minus: "M5 12h14",
  search: "M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14",
  /* ------------------------------------------------------------ actions */
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "eye-off": "M10.7 5.1A11 11 0 0 1 12 5c7 0 10 7 10 7a13 13 0 0 1-1.6 2.4M9.9 4.2 2 2l20 20M6.7 6.7C3.4 8.8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4.4-1M9.9 9.9a3 3 0 0 0 4.2 4.2",
  pencil: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z",
  trash: "M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6",
  copy: "M9 9h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z M5 15H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1",
  ban: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M4.9 4.9l14.2 14.2",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  // `undo` was declared by the Restore action and had no path here, so it
  // silently rendered the fallback dot - a bulk action that looked unfinished
  // rather than one whose icon was missing.
  undo: "M3 7v6h6M3.5 13a9 9 0 1 0 2.1-9.4L3 7",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  "user-check": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M16 11l2 2 4-4",
  upload: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  refresh: "M21 2v6h-6M3 22v-6h6M3.5 9a9 9 0 0 1 14.9-3.4L21 8M21 15a9 9 0 0 1-14.9 3.4L3 16",
  send: "m22 2-7 20-4-9-9-4Z M22 2 11 13",
  cart: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0",
  key: "M15.5 2a6.5 6.5 0 1 0-5.6 9.8L2 19.7V22h2.3l1-1v-2h2v-2h2l1.9-1.9A6.5 6.5 0 0 0 15.5 2Z M17 7h.01",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
  archive: "M21 8v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8M2 4h20v4H2zM10 12h4",
  /* ------------------------------------------------------------ chrome */
  "more-horizontal": "M12 12h.01M19 12h.01M5 12h.01",
  // Vertical, because the actions column is narrow and a horizontal glyph
  // reads as "more columns this way" next to a scrollable table.
  "more-vertical": "M12 12h.01M12 19h.01M12 5h.01",
  "chevron-right": "m9 18 6-6-6-6",
  "chevron-down": "m6 9 6 6 6-6",
  /* -------------------------------------------------------- destinations */
  /*
   * THE NAVIGATION SET, AND ITS ABSENCE WAS VISIBLE ON EVERY PHONE.
   *
   * Everything above is an ACTION - the vocabulary of a row menu and a
   * confirmation dialog - because that is all this registry was ever asked
   * for. Then the bottom bar started drawing the same navigation the sidebar
   * draws, and the sidebar resolves its icons through Lucide components while
   * this resolves them through these paths. Every name the server sends -
   * `users`, `router`, `mail`, `home` - was missing, `iconPath()` fell back to
   * the dot for all of them, and the bar rendered five identical specks above
   * five labels.
   *
   * Nothing failed. The fallback is deliberate and correct, and it made an
   * entirely unusable navigation look like a design choice.
   *
   * NAMES MATCH THE SERVER'S VOCABULARY, not Lucide's file names, because a
   * resource says `->icon('router')` and neither half should have to know what
   * the other calls it.
   */
  home: "M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z M9 21v-8h6v8",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
  package: "M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z m3.3 7L12 12l8.7-5 M12 22V12 m7.5 4.3 9 5.1",
  router: "M2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z M6.01 17H6 M10.01 17H10 M15 10v2 M17.8 7.2a4 4 0 0 0-5.6 0 M20.7 4.3a8 8 0 0 0-11.4 0",
  mail: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z m22 6-10 7L2 6",
  bell: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0",
  chat: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  "book-open": "M12 7v14 M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z",
  smartphone: "M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z M12 18h.01",
  lock: "M7 11V7a5 5 0 0 1 10 0v4 M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z",
  // Same gap as the rest of this section: the sidebar's Settings row
  // resolves through `panelIcons.ts` (Lucide components) and had its own
  // matching miss there. This is that icon's path data, copied from
  // `@lucide/vue`'s `settings.mjs` rather than hand-drawn, so the bottom
  // bar's gear is pixel-identical to the sidebar's.
  settings: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915 M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  gauge: "m12 14 4-4 M3.3 19a10 10 0 1 1 17.4 0",
  "file-text": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M14 2v4a2 2 0 0 0 2 2h4 M16 13H8 M16 17H8 M10 9H8",
  "file-question": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z M15 2v5h5 M10 11a2 2 0 1 1 2 2v1 M12 17h.01",
  "server-crash": "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2 M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2 M6 6h.01 M6 18h.01 M13 6l-3 5h4l-3 5",
  "shield-alert": "M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1 1 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z M12 8v4 M12 16h.01",
  "timer-off": "M10 2h4 M12 12v-2 M4.6 11a8 8 0 0 0 10.4 10.4 M7.4 7.4a8 8 0 0 1 11.2 11.2 M2 2l20 20",
  wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9Z",
  // Configuring the SHAPE of something rather than repairing it, which is
  // what `wrench` already says - the custom-fields screen decides which
  // fields a resource has, and sliders read as "adjust these settings".
  sliders: "M21 4h-7 M10 4H3 M21 12h-9 M8 12H3 M21 20h-5 M12 20H3 M12 2v4 M6 10v4 M14 18v4",
  menu: "M4 6h16M4 12h16M4 18h16",
  /*
   * NINE MORE OF THE SAME GAP - `DeclaredIconsExistTest` names every icon
   * `app/Panel/Pages.php` declares and checks each has a path here; these
   * nine did not, so the reference app's own nav fell back to the dot on
   * a phone the same way `undo` and the row-menu names above once did.
   * Copied from `@lucide/vue`'s icon sources (`node_modules/@lucide/vue/
   * dist/esm/icons/*.mjs`), including converting each icon's `<rect rx>`
   * primitive into the equivalent rounded-corner path by hand - this
   * registry holds `<path d>` strings only, no nested shape elements.
   *
   * A LOWERCASE `m` STARTING A LATER SUBPATH IS NOT ABSOLUTE, and joining
   * several Lucide icons' separate `<path>` elements into one `d` string
   * hits this the moment one of them originally started with lowercase
   * `m`. SVG only treats the very FIRST moveto in an entire path string as
   * absolute either way; every subsequent `m` is relative to wherever the
   * previous subpath ended, not a fresh (0,0) - `panel-left-close`'s
   * chevron and `chevrons-up-down`'s second arrow both silently moved
   * off-canvas as a result. Capitalising that `m` to `M` is only HALF the
   * fix: an SVG moveto's own trailing coordinate pairs are implicit
   * linetos in the SAME case as the moveto, so `M16 15-3-3 3-3` draws an
   * ABSOLUTE line out to (-3,-3) - nowhere near the chevron. The pairs
   * after the first need their own explicit lowercase `l` to stay
   * relative: `M16 15l-3-3 3-3`. Caught by actually rendering these to
   * PNG and looking, not by reading the coordinates.
   */
  "panel-left": "M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3Z M9 3v18",
  "panel-left-close": "M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3Z M9 3v18 M16 15l-3-3 3-3",
  square: "M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3Z",
  layers: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12 M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
  "app-window": "M4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4Z M10 4v4 M2 8h20 M6 4v4",
  "app-window-mac": "M4 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4Z M6 8h.01 M10 8h.01 M14 8h.01",
  "chevrons-up-down": "m7 15 5 5 5-5 M7 9l5-5 5 5",
  "folder-tree": "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z M3 5a2 2 0 0 0 2 2h3 M3 3v13a2 2 0 0 0 2 2h3",
  calendar: "M8 2v3 M16 2v3 M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3Z M3 9h18",
  /*
   * ROW-MENU VOCABULARY that hosts declare without always shipping a path.
   *
   * `log-in` / `impersonate` and `coins` / `wallet` / `recharge` are the
   * names that turned into the fallback `dot` on Users row menus: a coloured
   * speck beside "Recharge Credits" and "Log in as user", while Delete
   * looked finished because the destructive branch hard-coded `trash`.
   */
  "log-in": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3",
  wallet: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3V5a2 2 0 0 1 2-2",
  coins: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8 M12 18V6",
  "credit-card": "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z M2 10h20",
  // Hollow ring: used when a coloured action still has no semantic glyph, so
  // the tone paints a readable mark instead of a one-pixel speck.
  circle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
  info: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 16v-4 M12 8h.01"
}, vl = {
  login: "log-in",
  "login-as": "log-in",
  "log-in-as": "log-in",
  impersonate: "log-in",
  "user-check": "user-check",
  recharge: "coins",
  credits: "coins",
  "recharge-credits": "coins",
  "currency-dollar": "coins",
  "currency-euro": "coins",
  banknotes: "wallet",
  "heroicon-o-currency-dollar": "coins",
  "heroicon-m-currency-dollar": "coins",
  "heroicon-o-wallet": "wallet",
  "heroicon-o-arrow-left-on-rectangle": "log-in",
  "arrow-left-on-rectangle": "log-in",
  "arrow-right-on-rectangle": "log-in"
}, pn = {
  delete: "trash",
  __delete: "trash",
  destroy: "trash",
  "force-delete": "trash",
  forceDelete: "trash",
  force_delete: "trash",
  impersonate: "log-in",
  "login-as": "log-in",
  "log-in-as": "log-in",
  "log-in-as-user": "log-in",
  login_as: "log-in",
  loginAs: "log-in",
  recharge: "coins",
  "recharge-credits": "coins",
  recharge_credits: "coins",
  credits: "coins",
  view: "eye",
  edit: "pencil",
  restore: "undo",
  replicate: "copy",
  duplicate: "copy",
  export: "download",
  download: "download",
  suspend: "ban",
  activate: "play",
  ban: "ban"
}, vn = {
  success: "coins",
  danger: "trash",
  warning: "alert",
  primary: "activity",
  info: "info",
  gray: "circle"
};
function ce(e) {
  if (!e)
    return yt.dot;
  const l = vl[e] ?? e;
  return yt[l] ?? yt.dot;
}
function Te(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== yt.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = pn[l] ?? pn[l.replace(/_/g, "-")];
    if (s)
      return ce(s);
  }
  const n = gl(e.label);
  if (n)
    return ce(n);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && vn[r] ? ce(vn[r]) : ce("circle");
}
function gl(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const hl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, bl = ["d"], yl = { class: "flex max-w-sm flex-col gap-1" }, xl = {
  key: 0,
  class: "text-sm font-normal"
}, kl = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Ft = /* @__PURE__ */ L({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Gt();
    return (n, r) => (t(), a("div", {
      "data-slot": "empty-state",
      class: _(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(l).illustration ? (t(), a("div", hl, [
        G(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: _(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        G(n.$slots, "icon", {}, () => [
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: _(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: x(ce)(e.icon)
            }, null, 8, bl)
          ], 2))
        ])
      ], 2)),
      o("div", yl, [
        o("p", {
          class: _(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), a("p", xl, c(e.description), 1)) : k("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", kl, [
        G(n.$slots, "actions")
      ])) : k("", !0)
    ], 2));
  }
}), $l = ["aria-label"], Pe = /* @__PURE__ */ L({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const l = e, n = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = y(() => n[l.variant] ?? n.text), s = y(() => Math.max(1, Math.min(l.count, 50)));
    function i(d) {
      if (!(l.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), a("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(P, null, j(s.value, (m) => (t(), a("span", {
        key: m,
        "aria-hidden": "true",
        class: _(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(m - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, $l));
  }
}), wl = { class: "w-full border-collapse text-sm" }, Cl = { class: "bg-background sticky top-0 z-10" }, Sl = {
  key: 0,
  class: "bg-muted/40"
}, Ml = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Bl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Al = ["colspan"], _l = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, zl = { class: "bg-muted/50" }, Pl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Ll = ["id", "checked", "indeterminate"], Ol = ["onClick"], jl = {
  key: 0,
  class: "text-xs"
}, Vl = {
  key: 1,
  class: "text-xs opacity-40"
}, Dl = { key: 1 }, Tl = ["aria-label", "onPointerdown"], Il = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, El = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Fl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Nl = {
  key: 1,
  class: "px-3 py-2.5"
}, Rl = {
  key: 2,
  class: "px-2 py-2.5"
}, Ul = {
  key: 0,
  class: "bg-muted/40"
}, Hl = ["colspan"], Kl = ["aria-expanded", "dusk", "onClick"], ql = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Gl = {
  key: 1,
  dusk: "group-header"
}, Wl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Zl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Jl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Yl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Ql = ["aria-label", "onClick"], Xl = { class: "text-xs" }, eo = {
  key: 1,
  class: "text-muted-foreground"
}, to = { key: 2 }, no = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, ao = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, lo = { key: 0 }, oo = { class: "text-muted-foreground block text-[10px] font-medium" }, so = { class: "font-semibold tabular-nums" }, ro = { key: 1 }, io = 40, uo = /* @__PURE__ */ L({
  __name: "DataTable",
  props: {
    columns: {},
    rows: {},
    groupBy: {},
    collapsedGroupsByDefault: { type: Boolean, default: !1 },
    reordering: { type: Boolean },
    rowClickable: { type: Boolean },
    rowKey: { default: "id" },
    sort: {},
    direction: { default: "desc" },
    loading: { type: Boolean, default: !1 },
    hidden: {},
    selectable: { type: Boolean, default: !1 },
    selected: {},
    filtered: { type: Boolean, default: !1 },
    emptyTitle: { default: "Nothing here yet" },
    emptyHint: {},
    emptyIcon: { default: "package" },
    summaries: { default: null },
    summaryValues: { default: null },
    framed: { type: Boolean, default: !0 },
    striped: { type: Boolean, default: !1 },
    stickyFirst: { type: Boolean, default: !1 },
    resizable: { type: Boolean, default: !1 },
    columnWidths: { default: () => ({}) }
  },
  emits: ["sort", "toggle-row", "toggle-page", "reorder", "row-contextmenu", "row-click", "resize"],
  setup(e, { emit: l }) {
    const n = e;
    function r(X) {
      if (!X || !n.groupBy)
        return "";
      if (X.__group !== void 0 && X.__group !== null)
        return String(X.__group);
      const le = X[n.groupBy.key];
      return le == null || le === "" ? "" : String(le);
    }
    function s(X) {
      return n.groupBy ? X === 0 ? !0 : r(n.rows[X]) !== r(n.rows[X - 1]) : !1;
    }
    function i(X) {
      if (X.__groupTitle)
        return String(X.__groupTitle);
      const le = n.groupBy ? X[n.groupBy.key] : null, te = le == null || le === "" ? "None" : String(le);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? te : `${n.groupBy.label}: ${te}`;
    }
    const d = q(/* @__PURE__ */ new Set()), u = q(/* @__PURE__ */ new Set());
    function m(X) {
      return n.groupBy?.collapsible ? d.value.has(X) : !1;
    }
    function v(X) {
      if (!n.groupBy?.collapsible)
        return;
      const le = new Set(u.value);
      le.add(X), u.value = le;
      const te = new Set(d.value);
      te.has(X) ? te.delete(X) : te.add(X), d.value = te;
    }
    function p(X) {
      return n.groupBy?.collapsible ? !m(r(n.rows[X])) : !0;
    }
    fe(
      () => n.rows,
      (X) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const le = new Set(d.value);
        for (const te of X) {
          const ue = r(te);
          ue !== "" && !u.value.has(ue) && le.add(ue);
        }
        d.value = le;
      },
      { immediate: !0 }
    );
    const h = q(null), $ = q(null);
    function b(X, le) {
      h.value = X, le.dataTransfer?.setData("text/plain", String(X)), le.dataTransfer && (le.dataTransfer.effectAllowed = "move");
    }
    function C() {
      h.value = null, $.value = null;
    }
    function S(X) {
      return h.value === null || $.value !== X ? "" : h.value > X ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function B(X, le) {
      h.value !== null && (le.preventDefault(), $.value = X);
    }
    function A(X) {
      const le = h.value;
      if (h.value = null, $.value = null, le === null || le === X)
        return;
      const te = n.rows.map((ie) => ie[n.rowKey]), [ue] = te.splice(le, 1);
      te.splice(X, 0, ue), M("reorder", te);
    }
    const M = l;
    function f(X, le) {
      !n.rowClickable || n.reordering || le.button !== 0 || le.metaKey || le.ctrlKey || le.shiftKey || le.altKey || le.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || M("row-click", X);
    }
    const g = q(null), z = da(), T = y(() => n.columns.filter((X) => !n.hidden?.has(X.key))), F = y(() => {
      const X = T.value.find((le) => le.sticky);
      return X ? X.key : n.stickyFirst && T.value.length > 0 ? T.value[0].key : null;
    });
    function Y(X) {
      return F.value === X.key;
    }
    function N() {
      return n.selectable && !n.reordering ? `${io}px` : "0";
    }
    function W(X) {
      const le = n.columnWidths?.[X.key];
      return typeof le == "number" ? le : X.width;
    }
    function Z(X) {
      const le = W(X), te = Y(X), ue = {};
      return le !== void 0 && (ue.width = `${le}px`, ue.minWidth = `${le}px`, ue.maxWidth = `${le}px`), te && (ue.left = N()), Object.keys(ue).length ? ue : void 0;
    }
    function J(X) {
      return n.resizable ? X.resizable !== !1 : !1;
    }
    function K(X, le) {
      if (!J(X))
        return;
      le.preventDefault(), le.stopPropagation();
      const te = le.clientX, ue = W(X) ?? 160, ie = le.currentTarget;
      try {
        ie.setPointerCapture(le.pointerId);
      } catch {
      }
      function qe(at) {
        const Pt = ue + (at.clientX - te);
        M("resize", X.key, Math.min(1200, Math.max(48, Pt)));
      }
      function Re(at) {
        try {
          ie.releasePointerCapture(at.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", qe), ie.removeEventListener("pointerup", Re), ie.removeEventListener("pointercancel", Re);
      }
      ie.addEventListener("pointermove", qe), ie.addEventListener("pointerup", Re), ie.addEventListener("pointercancel", Re);
    }
    const U = y(() => T.value.some((X) => !!X.group)), R = y(() => {
      const X = [];
      for (const le of T.value) {
        const te = le.group ?? null, ue = X[X.length - 1];
        ue && ue.label === te ? ue.span += 1 : X.push({ label: te, span: 1, key: `${te ?? "loose"}-${le.key}` });
      }
      return X;
    });
    function w(X) {
      const le = X[n.rowKey];
      return le == null || le === "" ? null : le;
    }
    function I(X) {
      const le = w(X);
      return le !== null && !!n.selected?.has(le);
    }
    const V = q(null);
    function Q(X) {
      return n.rows.findIndex((le) => {
        const te = w(le);
        return te !== null && te === X;
      });
    }
    function he(X, le) {
      const te = w(X);
      if (te === null)
        return;
      const ue = le.shiftKey, ie = !!n.selected?.has(te);
      if (ue && V.value !== null && V.value !== te) {
        const qe = Q(V.value), Re = Q(te);
        if (qe !== -1 && Re !== -1) {
          const at = Math.min(qe, Re), Pt = Math.max(qe, Re), ia = !ie;
          for (let ht = at; ht <= Pt; ht++) {
            if (!p(ht))
              continue;
            const Lt = w(n.rows[ht]);
            if (Lt === null)
              continue;
            !!n.selected?.has(Lt) !== ia && M("toggle-row", Lt);
          }
          V.value = te;
          return;
        }
      }
      M("toggle-row", te), V.value = te;
    }
    const ye = y(
      () => n.rows.map((X) => w(X)).filter((X) => X !== null)
    ), oe = y(
      () => ye.value.length > 0 && ye.value.every((X) => n.selected?.has(X))
    ), ee = y(
      () => !oe.value && ye.value.some((X) => n.selected?.has(X))
    );
    function ae(X) {
      return X.sortKey ?? X.key;
    }
    function Ce(X) {
      return n.sort === ae(X);
    }
    async function cn(X, le, te) {
      try {
        await navigator.clipboard.writeText(String(te)), g.value = `${X}-${le.key}`, setTimeout(() => g.value = null, 1200);
      } catch {
      }
    }
    const sa = y(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function fn(X) {
      return n.summaries?.[X] ?? null;
    }
    function ra(X) {
      const le = n.summaries?.[X], te = n.summaryValues?.[X];
      if (!le)
        return "";
      if (te == null)
        return "None";
      const ue = le.divideBy ? te / le.divideBy : te, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: le.decimals,
        maximumFractionDigits: le.decimals
      }).format(ue);
      return `${le.prefix ?? ""}${ie}${le.suffix ?? ""}`;
    }
    return (X, le) => (t(), a("div", {
      class: _(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", wl, [
        o("thead", Cl, [
          U.value ? (t(), a("tr", Sl, [
            e.reordering ? (t(), a("th", Ml)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Bl)) : k("", !0),
            (t(!0), a(P, null, j(R.value, (te) => (t(), a("th", {
              key: te.key,
              colspan: te.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(te.label ?? ""), 9, Al))), 128)),
            X.$slots.actions ? (t(), a("th", _l)) : k("", !0)
          ])) : k("", !0),
          o("tr", zl, [
            e.reordering ? (t(), a("th", Pl)) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("th", {
              key: 1,
              class: _(["w-10 border-b px-3 py-2.5", F.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${x(z)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: oe.value,
                indeterminate: ee.value,
                "aria-label": "Select all rows on this page",
                onClick: le[0] || (le[0] = ve(() => {
                }, ["stop"])),
                onChange: le[1] || (le[1] = ve((te) => M("toggle-page", !oe.value), ["stop"]))
              }, null, 40, Ll)
            ], 2)) : k("", !0),
            (t(!0), a(P, null, j(T.value, (te) => (t(), a("th", {
              key: te.key,
              class: _([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                Y(te) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(Z(te))
            }, [
              te.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => M("sort", ae(te))
              }, [
                H(c(te.label) + " ", 1),
                Ce(te) ? (t(), a("span", jl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Vl, "↕"))
              ], 8, Ol)) : (t(), a("span", Dl, c(te.label), 1)),
              J(te) ? (t(), a("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${te.label}`,
                onPointerdown: (ue) => K(te, ue)
              }, null, 40, Tl)) : k("", !0)
            ], 6))), 128)),
            X.$slots.actions ? (t(), a("th", Il, [...le[2] || (le[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : k("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", El, [
          (t(), a(P, null, j(6, (te) => o("tr", {
            key: `skel-${te}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Fl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : k("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Nl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : k("", !0),
            (t(!0), a(P, null, j(T.value, (ue) => (t(), a("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              E(Pe, { variant: "text" })
            ]))), 128)),
            X.$slots.actions ? (t(), a("td", Rl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : k("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: _(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, j(e.rows, (te, ue) => (t(), a(P, {
            key: w(te) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), a("tr", Ul, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !m(r(te)),
                  dusk: `group-header-${r(te) || "none"}`,
                  onClick: (ie) => v(r(te))
                }, [
                  o("span", ql, c(m(r(te)) ? "▸" : "▾"), 1),
                  H(" " + c(i(te)), 1)
                ], 8, Kl)) : (t(), a("span", Gl, c(i(te)), 1))
              ], 8, Hl)
            ])) : k("", !0),
            p(ue) ? (t(), a("tr", {
              key: 1,
              class: _(["group pk-row border-b transition-colors hover:bg-muted/50", [
                I(te) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                h.value === ue ? "opacity-40" : "",
                S(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => b(ue, ie),
              onDragover: (ie) => B(ue, ie),
              onDrop: ve((ie) => A(ue), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => M("row-contextmenu", te, ie),
              onClick: (ie) => f(te, ie)
            }, [
              e.reordering ? (t(), a("td", Zl, [...le[3] || (le[3] = [
                rt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : k("", !0),
              e.selectable && !e.reordering ? (t(), a("td", {
                key: 1,
                class: _(["px-3 py-2", F.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${x(z)}-row-${w(te) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: w(te) ?? void 0,
                  checked: I(te),
                  disabled: w(te) === null,
                  "aria-label": w(te) === null ? "This row has no id and cannot be selected" : `Select row ${w(te)}`,
                  onClick: ve((ie) => he(te, ie), ["stop"])
                }, null, 8, Jl)
              ], 2)) : k("", !0),
              (t(!0), a(P, null, j(T.value, (ie) => (t(), a("td", {
                key: ie.key,
                class: _(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  Y(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: se(Z(ie))
              }, [
                G(X.$slots, `cell:${ie.key}`, {
                  row: te,
                  value: te[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), a("span", Yl, [
                    H(c(te[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (qe) => cn(String(te[e.rowKey]), ie, te[ie.key])
                    }, [
                      o("span", Xl, c(g.value === `${te[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Ql)
                  ])) : te[ie.key] == null || te[ie.key] === "" ? (t(), a("span", eo, "None")) : (t(), a("span", to, c(te[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              X.$slots.actions ? (t(), a("td", no, [
                G(X.$slots, "actions", { row: te }, void 0, !0)
              ])) : k("", !0)
            ], 42, Wl)) : k("", !0)
          ], 64))), 128))
        ], 2)),
        sa.value ? (t(), a("tfoot", ao, [
          o("tr", null, [
            e.selectable ? (t(), a("td", lo)) : k("", !0),
            (t(!0), a(P, null, j(e.columns, (te) => (t(), a(P, {
              key: `s-${te.key}`
            }, [
              e.hidden?.has(te.key) ? k("", !0) : (t(), a("td", {
                key: 0,
                class: _(["px-3 py-2 align-top text-sm whitespace-nowrap", te.cellClass])
              }, [
                fn(te.key) ? (t(), a(P, { key: 0 }, [
                  o("span", oo, c(fn(te.key).label), 1),
                  o("span", so, c(ra(te.key)), 1)
                ], 64)) : k("", !0)
              ], 2))
            ], 64))), 128)),
            X.$slots.actions ? (t(), a("td", ro)) : k("", !0)
          ])
        ])) : k("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), D(Ft, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, it({ _: 2 }, [
        X.$slots["clear-filters"] ? {
          name: "actions",
          fn: O(() => [
            G(X.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), D(Ft, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, it({ _: 2 }, [
        X.$slots["empty-actions"] ? {
          name: "actions",
          fn: O(() => [
            G(X.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : k("", !0)
    ], 2));
  }
}), Bt = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, co = /* @__PURE__ */ Bt(uo, [["__scopeId", "data-v-c0f7d40f"]]), tt = "w-full min-w-0 px-4 py-6 sm:px-6", J3 = "w-full min-w-0 p-3 sm:p-4", Y3 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", fo = "w-full max-w-7xl", mo = "px-4 py-4", In = "w-full min-w-0", po = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, lt = "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", kt = {
  /** Short confirmations with no fields (~24rem). */
  sm: `${lt} max-w-md`,
  /** The long-standing default: confirmations and short copy (~32rem). */
  confirm: `${lt} max-w-lg`,
  /** Wider than confirm when an action form needs more room than confirm copy (~36rem). */
  form: `${lt} max-w-xl`,
  /** A field stack too wide for `form` without becoming a page (~42rem). */
  lg: `${lt} max-w-2xl`,
  /** The widest dense modal offers - past this, use PkSlideover instead (~56rem). */
  xl: `${lt} max-w-4xl`
}, Q3 = kt.confirm, X3 = kt.form, vo = ["aria-busy", "aria-label"], go = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, ho = { class: "text-base font-semibold" }, bo = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, yo = {
  key: 0,
  class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3"
}, ut = /* @__PURE__ */ L({
  __name: "PkModal",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    busy: { type: Boolean, default: !1 },
    size: { default: "confirm" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null);
    let i = null;
    const d = q(!1), u = y(() => kt[n.size] ?? kt.confirm);
    function m(h) {
      d.value = h.target === h.currentTarget;
    }
    function v(h) {
      d.value && h.target === h.currentTarget && !n.busy && r("close"), d.value = !1;
    }
    function p(h) {
      if (!n.open)
        return;
      if (h.key === "Escape" && !n.busy) {
        h.stopPropagation(), r("close");
        return;
      }
      if (h.key !== "Tab" || !s.value)
        return;
      const $ = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if ($.length === 0)
        return;
      const b = $[0], C = $[$.length - 1];
      h.shiftKey && document.activeElement === b ? (h.preventDefault(), C.focus()) : !h.shiftKey && document.activeElement === C && (h.preventDefault(), b.focus());
    }
    return fe(
      () => n.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", p), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (h, $) => (t(), D(ct, { to: "body" }, [
      E(Qe, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: m,
            onPointerup: v
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-busy": e.busy ? "true" : void 0,
              "aria-label": e.title,
              class: _(u.value)
            }, [
              o("div", go, [
                o("h2", ho, c(e.title), 1),
                e.description ? (t(), a("p", bo, c(e.description), 1)) : k("", !0)
              ]),
              o("div", {
                class: _(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", x(In)])
              }, [
                G(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), a("div", yo, [
                G(h.$slots, "footer")
              ])) : k("", !0)
            ], 10, vo)
          ], 32)) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), xo = 160, He = /* @__PURE__ */ L({
  __name: "PkDropdown",
  props: {
    align: { default: "end" },
    width: { default: "max-w-sm" },
    offset: { default: 4 },
    placement: { default: "bottom" },
    hoverable: { type: Boolean, default: !1 },
    dismissOnPanelClick: { type: Boolean, default: !0 }
  },
  setup(e, { expose: l }) {
    const n = e, r = q(!1), s = q(null), i = q(null), d = q({ top: 0, left: 0, minWidth: 0 }), u = q(null);
    let m = null;
    function v(f) {
      !n.dismissOnPanelClick || f.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function p() {
      m && (clearTimeout(m), m = null), !r.value && (r.value = !0, await De(), S());
    }
    function h() {
      m = setTimeout(C, 180);
    }
    async function $() {
      u.value = null, r.value = !r.value, r.value && (await De(), S());
    }
    async function b(f, g) {
      u.value = { x: f, y: g }, r.value = !0, await De(), S();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function S() {
      const f = s.value, g = i.value;
      if (!f || !g)
        return;
      const z = g.getBoundingClientRect(), T = 8, F = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : f.getBoundingClientRect();
      let Y, N;
      if (n.placement === "bottom")
        Y = F.bottom + n.offset, Y + z.height > window.innerHeight - T && F.top - z.height - n.offset > T && (Y = F.top - z.height - n.offset), N = n.align === "end" && !u.value ? F.right - z.width : F.left;
      else {
        Y = F.top;
        const W = n.placement === "right", Z = F.right + n.offset + z.width < window.innerWidth - T, J = F.left - n.offset - z.width > T;
        N = (W ? Z || !J : !J && Z) ? F.right + n.offset : F.left - n.offset - z.width;
      }
      N = Math.min(Math.max(T, N), window.innerWidth - z.width - T), Y = Math.min(Math.max(T, Y), window.innerHeight - z.height - T), d.value = { top: Y, left: N, minWidth: Math.max(F.width, xo) };
    }
    function B(f) {
      if (!r.value)
        return;
      const g = f.target;
      s.value?.contains(g) || i.value?.contains(g) || (g instanceof Element ? g : g.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function A(f) {
      f.key === "Escape" && r.value && (f.stopPropagation(), C());
    }
    function M() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        S();
      }
    }
    return ge(() => {
      document.addEventListener("pointerdown", B), document.addEventListener("keydown", A), window.addEventListener("scroll", M, !0), window.addEventListener("resize", M);
    }), ke(() => {
      m && clearTimeout(m), document.removeEventListener("pointerdown", B), document.removeEventListener("keydown", A), window.removeEventListener("scroll", M, !0), window.removeEventListener("resize", M);
    }), l({ close: C, openAt: b }), (f, g) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: g[2] || (g[2] = (z) => e.hoverable && p()),
      onPointerleave: g[3] || (g[3] = (z) => e.hoverable && h())
    }, [
      o("div", { onClick: $ }, [
        G(f.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(ct, { to: "body" }, [
        E(Qe, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            r.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: _([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: se({
                top: `${d.value.top}px`,
                left: `${d.value.left}px`,
                /*
                 * AT LEAST AS WIDE AS WHAT OPENED IT. A menu narrower
                 * than its own trigger reads as a different control
                 * belonging to something else.
                 *
                 * This was computed on every open and never applied -
                 * the template set only `top` and `left` - so the
                 * measurement existed and did nothing.
                 */
                minWidth: `${d.value.minWidth}px`
              }),
              "data-pk-overlay": "",
              role: "menu",
              onPointerenter: g[0] || (g[0] = (z) => e.hoverable && p()),
              onPointerleave: g[1] || (g[1] = (z) => e.hoverable && h()),
              onClick: v
            }, [
              G(f.$slots, "panel", { close: C })
            ], 38)) : k("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), ko = ["disabled"], $o = { class: "py-0.5" }, wo = ["disabled", "onClick"], Co = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, So = ["d"], Mo = { class: "min-w-0 flex-1 truncate" }, Bo = ["disabled"], Ao = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _o = ["d"], zo = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Po = ["disabled", "onClick"], Lo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oo = ["d"], jo = { class: "min-w-0 flex-1 truncate" }, Vo = { class: "text-muted-foreground text-sm font-normal" }, Do = { class: "text-foreground font-medium tabular-nums" }, To = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Io = ["disabled"], Eo = { class: "text-muted-foreground text-sm font-normal" }, Fo = { class: "text-foreground font-medium tabular-nums" }, No = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Ro = ["disabled"], e8 = /* @__PURE__ */ L({
  __name: "BulkActions",
  props: {
    actions: {},
    count: {},
    allMatching: { type: Boolean },
    total: {},
    busy: { type: Boolean, default: !1 },
    canExport: { type: Boolean, default: !0 }
  },
  emits: ["run", "export"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(!1), d = y(() => n.allMatching ? n.total : n.count), u = y(() => d.value !== void 0), m = y(() => u.value && d.value === 0), v = y(() => n.actions.filter((A) => !A.destructive)), p = y(() => n.actions.filter((A) => A.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function $(A) {
      return h[A.color ?? "gray"] ?? h.gray;
    }
    function b(A) {
      if (A.confirmation) {
        s.value = A;
        return;
      }
      r("run", A.key);
    }
    function C() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function S() {
      i.value = !1, r("export");
    }
    const B = (A) => new Intl.NumberFormat().format(A);
    return (A, M) => (t(), a(P, null, [
      E(He, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...M[5] || (M[5] = [
            H(" Bulk actions ", -1),
            o("svg", {
              class: "size-3.5",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              o("path", { d: "m6 9 6 6 6-6" })
            ], -1)
          ])], 8, ko)
        ]),
        panel: O(() => [
          o("div", $o, [
            (t(!0), a(P, null, j(v.value, (f) => (t(), a("button", {
              key: f.key,
              type: "button",
              role: "menuitem",
              class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", $(f)]),
              disabled: e.busy,
              onClick: (g) => b(f)
            }, [
              (t(), a("svg", Co, [
                o("path", {
                  d: x(Te)(f)
                }, null, 8, So)
              ])),
              o("span", Mo, c(f.label), 1)
            ], 10, wo))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: M[0] || (M[0] = (f) => i.value = !0)
            }, [
              (t(), a("svg", Ao, [
                o("path", {
                  d: x(ce)("download")
                }, null, 8, _o)
              ])),
              M[6] || (M[6] = H(" Export CSV ", -1))
            ], 8, Bo)) : k("", !0),
            p.value.length ? (t(), a("div", zo, [
              (t(!0), a(P, null, j(p.value, (f) => (t(), a("button", {
                key: f.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (g) => b(f)
              }, [
                (t(), a("svg", Lo, [
                  o("path", {
                    d: x(Te)({ ...f, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", jo, c(f.label), 1)
              ], 8, Po))), 128))
            ])) : k("", !0)
          ])
        ]),
        _: 1
      }),
      E(ut, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: M[2] || (M[2] = (f) => s.value = null)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: M[1] || (M[1] = (f) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: _([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || m.value,
            onClick: C
          }, c(s.value?.label), 11, Io)
        ]),
        default: O(() => [
          o("p", Vo, [
            M[7] || (M[7] = H(" This will affect ", -1)),
            o("span", Do, [
              u.value ? (t(), a(P, { key: 1 }, [
                H(c(B(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                H("…")
              ], 64))
            ]),
            M[8] || (M[8] = H(" . ", -1))
          ]),
          m.value ? (t(), a("p", To, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(ut, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: M[4] || (M[4] = (f) => i.value = !1)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: M[3] || (M[3] = (f) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || m.value,
            onClick: S
          }, " Export CSV ", 8, Ro)
        ]),
        default: O(() => [
          o("p", Eo, [
            M[9] || (M[9] = H(" This will export ", -1)),
            o("span", Fo, [
              u.value ? (t(), a(P, { key: 1 }, [
                H(c(B(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                H("…")
              ], 64))
            ]),
            M[10] || (M[10] = H(". ", -1))
          ]),
          m.value ? (t(), a("p", No, " Nothing matches the current filters - there is nothing to export. ")) : k("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Uo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Ho = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Ko = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, qo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Go = /* @__PURE__ */ L({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Uo, [
      l.$slots.tabs ? (t(), a("div", Ho, [
        G(l.$slots, "tabs")
      ])) : k("", !0),
      l.$slots.title ? (t(), a("div", Ko, [
        G(l.$slots, "title")
      ])) : k("", !0),
      l.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: _(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        G(l.$slots, "toolbar")
      ], 2)) : k("", !0),
      G(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", qo, [
        G(l.$slots, "pagination")
      ])) : k("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", gn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", t8 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Wo = ["aria-expanded"], Zo = ["aria-label", "onClick"], Jo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Yo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Qo = {
  key: 0,
  class: "border-b p-1"
}, Xo = ["placeholder"], es = { class: "max-h-60 overflow-y-auto p-1" }, ts = ["aria-selected", "onMouseenter", "onClick"], ns = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, tn = /* @__PURE__ */ L({
  __name: "PkMultiSelect",
  props: {
    modelValue: {},
    options: {},
    placeholder: { default: "Select…" },
    searchPlaceholder: { default: "Start typing to search..." },
    searchable: { type: [Boolean, null], default: null },
    disabled: { type: Boolean, default: !1 },
    max: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(null), d = q(null), u = q(!1), m = q(""), v = q(0), p = q({ top: 0, left: 0, width: 0 }), h = y(
      () => n.modelValue.map(
        (N) => n.options.find((W) => W.value === N) ?? {
          value: N,
          label: String(N)
        }
      ).filter(Boolean)
    ), $ = y(() => n.searchable ?? n.options.length > 6), b = y(() => {
      const N = new Set(n.modelValue), W = m.value.trim().toLowerCase();
      return n.options.filter((Z) => !N.has(Z.value)).filter((Z) => W ? Z.label.toLowerCase().includes(W) : !0);
    }), C = y(() => n.max !== null && n.modelValue.length >= n.max);
    function S() {
      const N = s.value, W = i.value;
      if (!N || !W)
        return;
      const Z = N.getBoundingClientRect(), J = W.getBoundingClientRect(), K = 8;
      let U = Z.bottom + 4;
      U + J.height > window.innerHeight - K && Z.top - J.height - 4 > K && (U = Z.top - J.height - 4), p.value = {
        top: U,
        left: Math.min(Math.max(K, Z.left), window.innerWidth - Z.width - K),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function B() {
      n.disabled || u.value || (u.value = !0, m.value = "", v.value = 0, await De(), S(), d.value?.focus());
    }
    function A() {
      u.value = !1, m.value = "";
    }
    function M() {
      u.value ? A() : B();
    }
    function f(N) {
      C.value || (r("update:modelValue", [...n.modelValue, N.value]), m.value = "", v.value = 0, De(() => {
        S(), d.value?.focus();
      }));
    }
    function g(N) {
      r(
        "update:modelValue",
        n.modelValue.filter((W) => W !== N)
      ), De(S);
    }
    function z() {
      r("update:modelValue", []), De(S);
    }
    function T(N) {
      if (!n.disabled) {
        if (N.key === "Escape" && u.value) {
          N.stopPropagation(), A();
          return;
        }
        if (N.key === "Backspace" && m.value === "" && n.modelValue.length > 0) {
          g(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (N.key === "ArrowDown" || N.key === "Enter")) {
          N.preventDefault(), B();
          return;
        }
        if (u.value) {
          if (N.key === "ArrowDown")
            N.preventDefault(), v.value = Math.min(v.value + 1, b.value.length - 1);
          else if (N.key === "ArrowUp")
            N.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (N.key === "Enter") {
            N.preventDefault();
            const W = b.value[v.value];
            W && f(W);
          }
        }
      }
    }
    function F(N) {
      if (!u.value)
        return;
      const W = N.target;
      s.value?.contains(W) || i.value?.contains(W) || A();
    }
    function Y() {
      u.value && S();
    }
    return fe(b, (N) => {
      v.value > N.length - 1 && (v.value = Math.max(0, N.length - 1));
    }), ge(() => {
      document.addEventListener("pointerdown", F), window.addEventListener("scroll", Y, !0), window.addEventListener("resize", Y);
    }), ke(() => {
      document.removeEventListener("pointerdown", F), window.removeEventListener("scroll", Y, !0), window.removeEventListener("resize", Y);
    }), (N, W) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: T
    }, [
      o("div", {
        class: _(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: M
      }, [
        (t(!0), a(P, null, j(h.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          H(c(Z.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: ve((J) => g(Z.value), ["stop"])
          }, [...W[1] || (W[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Zo)
        ]))), 128)),
        h.value.length === 0 ? (t(), a("span", Jo, c(e.placeholder), 1)) : k("", !0),
        o("span", Yo, [
          h.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ve(z, ["stop"])
          }, " Clear ")) : k("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: _(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Wo),
      (t(), D(ct, { to: "body" }, [
        E(Qe, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            u.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: se({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              $.value ? (t(), a("div", Qo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (Z) => m.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: T
                }, null, 40, Xo), [
                  [_e, m.value]
                ])
              ])) : k("", !0),
              o("div", es, [
                (t(!0), a(P, null, j(b.value, (Z, J) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: _(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", J === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": J === v.value,
                  onMouseenter: (K) => v.value = J,
                  onClick: (K) => f(Z)
                }, c(Z.label), 43, ts))), 128)),
                b.value.length === 0 ? (t(), a("p", ns, [
                  C.value ? (t(), a(P, { key: 0 }, [
                    H("You have selected the maximum.")
                  ], 64)) : m.value ? (t(), a(P, { key: 1 }, [
                    H("Nothing matches “" + c(m.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    H("Everything is selected.")
                  ], 64))
                ])) : k("", !0)
              ])
            ], 4)) : k("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
  }
}), as = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ls = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, os = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function st(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [as, ls[l], os[n], e.class].filter(Boolean).join(" ");
}
const de = /* @__PURE__ */ L({
  __name: "PkButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    as: { default: "button" },
    class: {},
    disabled: { type: Boolean },
    type: { default: "button" }
  },
  setup(e) {
    const l = e, n = y(
      () => st({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(Ae(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: _(n.value)
    }, {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), ss = { class: "flex items-center gap-2" }, rs = ["onUpdate:modelValue", "onChange"], is = ["value"], ds = ["onUpdate:modelValue"], us = ["value"], cs = ["onUpdate:modelValue"], fs = ["onUpdate:modelValue", "multiple"], ms = ["value"], ps = ["onUpdate:modelValue", "type"], vs = ["aria-label", "onClick"], gs = { class: "flex items-center gap-2" }, hs = /* @__PURE__ */ L({
  __name: "PkQueryBuilder",
  props: {
    modelValue: {},
    fields: {},
    operators: {},
    maxDepth: { default: 5 },
    depth: { default: 0 },
    root: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "apply"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = q(n.modelValue ? structuredClone(n.modelValue) : s());
    fe(
      () => n.modelValue,
      (M) => {
        i.value = M ? structuredClone(M) : s();
      }
    );
    const d = (M) => "rules" in M, u = y(() => Object.keys(n.fields));
    function m(M) {
      const f = M ? n.fields[M]?.kind : void 0;
      return f ? n.operators[f] ?? [] : [];
    }
    const v = {
      is: "is",
      is_not: "is not",
      is_any_of: "is any of",
      is_none_of: "is none of",
      before: "is before",
      after: "is after",
      between: "is between"
    };
    function p() {
      r("update:modelValue", i.value);
    }
    function h() {
      const M = u.value[0];
      i.value.rules.push({
        field: M,
        operator: m(M)[0],
        value: void 0
      }), p();
    }
    function $() {
      i.value.rules.push(s()), p();
    }
    function b(M) {
      i.value.rules.splice(M, 1), p();
    }
    function C(M) {
      M.operator = m(M.field)[0], M.value = void 0, p();
    }
    const S = y(() => n.depth + 1 < n.maxDepth);
    function B() {
      i.value = s(), p(), r("apply", null);
    }
    function A() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (M, f) => {
      const g = Wt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: _(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", ss, [
          pe(o("select", {
            "onUpdate:modelValue": f[0] || (f[0] = (z) => i.value.logic = z),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...f[1] || (f[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ze, i.value.logic]
          ]),
          f[2] || (f[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, j(i.value.rules, (z, T) => (t(), a("div", {
          key: T,
          class: "flex items-start gap-2"
        }, [
          d(z) ? (t(), D(g, {
            key: 0,
            modelValue: i.value.rules[T],
            "onUpdate:modelValue": [(F) => i.value.rules[T] = F, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (F) => z.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => C(z)
            }, [
              (t(!0), a(P, null, j(u.value, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, is))), 128))
            ], 40, rs), [
              [Ze, z.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (F) => z.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(P, null, j(m(z.field), (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(v[F] ?? F), 9, us))), 128))
            ], 40, ds), [
              [Ze, z.operator]
            ]),
            z.field && e.fields[z.field]?.kind === "boolean" ? pe((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (F) => z.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...f[3] || (f[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, cs)), [
              [Ze, z.value]
            ]) : z.field && e.fields[z.field]?.options?.length ? pe((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (F) => z.value = F,
              multiple: e.fields[z.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(P, null, j(e.fields[z.field].options, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(F), 9, ms))), 128))
            ], 40, fs)), [
              [Ze, z.value]
            ]) : pe((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (F) => z.value = F,
              type: z.field && e.fields[z.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, ps)), [
              [ua, z.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(z) ? "group" : "rule"}`,
            onClick: (F) => b(T)
          }, " × ", 8, vs)
        ]))), 128)),
        o("div", gs, [
          E(de, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...f[4] || (f[4] = [
              H("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), D(de, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: $
          }, {
            default: O(() => [...f[5] || (f[5] = [
              H(" Add group ", -1)
            ])]),
            _: 1
          })) : k("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            f[8] || (f[8] = o("span", { class: "flex-1" }, null, -1)),
            E(de, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: B
            }, {
              default: O(() => [...f[6] || (f[6] = [
                H(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(de, {
              type: "button",
              size: "sm",
              onClick: A
            }, {
              default: O(() => [...f[7] || (f[7] = [
                H(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : k("", !0)
        ])
      ], 2);
    };
  }
}), nn = /* @__PURE__ */ L({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(_n), re({ "data-slot": "sheet" }, x(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
});
function ne(...e) {
  return pl(ml(e));
}
function n8(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const bs = /* @__PURE__ */ L({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Zt), re({
      "data-slot": "sheet-overlay",
      class: x(ne)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), an = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    side: { default: "right" },
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class", "side"), i = be(s, r);
    return (d, u) => (t(), D(x(Jt), null, {
      default: O(() => [
        E(bs),
        E(x(Yt), re({
          "data-slot": "sheet-content",
          class: x(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: O(() => [
            G(d.$slots, "default"),
            E(x(Xe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                E(x(Qt), { class: "size-4" }),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ys = { class: "flex flex-col gap-2" }, xs = { class: "flex items-center gap-2 md:hidden" }, ks = { class: "relative min-w-0 flex-1" }, $s = ["placeholder", "title", "aria-label"], ws = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Cs = { class: "flex max-h-[85vh] flex-col" }, Ss = { class: "flex-1 overflow-y-auto px-4 py-3" }, Ms = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Bs = { class: "text-xs font-medium" }, As = ["value", "onChange"], _s = ["value"], zs = { class: "mb-4" }, Ps = { class: "flex flex-col gap-1" }, Ls = ["disabled", "onClick"], Os = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, js = {
  key: 1,
  class: "mb-4"
}, Vs = { class: "flex flex-col gap-1" }, Ds = ["onClick"], Ts = { class: "border-t p-4" }, Is = ["disabled"], Es = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Fs = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Ns = ["placeholder", "title", "aria-label"], Rs = ["aria-label"], Us = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Hs = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Ks = { class: "text-xs font-medium" }, qs = ["value", "onChange"], Gs = ["value"], Ws = { class: "grid grid-cols-2 gap-2" }, Zs = ["value", "onChange"], Js = ["value", "onChange"], Ys = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Qs = ["value", "onChange"], Xs = ["value", "onChange"], er = {
  key: 4,
  class: "flex items-center gap-2"
}, tr = ["aria-checked", "onClick"], nr = { class: "text-xs" }, ar = ["onClick"], lr = ["value", "onChange"], or = ["value"], sr = ["disabled", "onClick"], rr = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, ir = ["disabled", "onClick"], dr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ur = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, cr = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, fr = ["aria-pressed", "aria-label", "title", "onClick"], mr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, pr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, vr = ["aria-pressed", "aria-label", "title"], gr = ["aria-label", "title"], hr = { class: "flex flex-col gap-0.5 p-1" }, br = ["onClick"], yr = ["onClick"], xr = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, kr = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, $r = ["dusk"], wr = ["aria-label", "onClick"], Cr = /* @__PURE__ */ L({
  __name: "TableToolbar",
  props: {
    search: {},
    searchPlaceholder: { default: "Search…" },
    searchHint: {},
    filterSchema: {},
    filters: {},
    columns: {},
    hidden: {},
    loading: { type: Boolean, default: !1 },
    reorderable: { type: Boolean, default: !1 },
    reordering: { type: Boolean, default: !1 },
    groups: { default: () => [] },
    groupBy: { default: null },
    indicators: { default: () => [] },
    layouts: { default: () => [] },
    layout: { default: "table" }
  },
  emits: ["update:search", "apply-filters", "apply-columns", "clear", "toggle-reorder", "group", "clear-filter", "clear-filters", "layout"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!1), i = q(n.search);
    fe(
      () => n.search,
      (R) => {
        R !== i.value && (i.value = R);
      }
    );
    let d;
    fe(i, (R) => {
      clearTimeout(d), d = setTimeout(() => {
        R !== n.search && r("update:search", R);
      }, 250);
    });
    const u = q({ ...n.filters });
    fe(
      () => n.filters,
      (R) => {
        u.value = { ...R };
      },
      { deep: !0 }
    );
    const m = y(
      () => n.filterSchema.filter(
        (R) => n.filters[R.key] !== null && n.filters[R.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = y(() => n.search !== "" || m.value > 0), h = y(() => n.indicators.length ? n.indicators : n.filterSchema.filter((R) => n.filters[R.key] !== null && n.filters[R.key] !== void 0).map((R) => ({
      key: R.key,
      label: `${R.label}: ${String(n.filters[R.key])}`,
      removable: !0
    })));
    function $(R) {
      r("group", R);
    }
    function b(R) {
      r("clear-filter", R);
    }
    function C(R) {
      return R.type === "multiselect";
    }
    function S(R) {
      const w = u.value[R.key];
      return Array.isArray(w) ? w : w == null ? [] : [w];
    }
    function B(R) {
      return S(R).filter(
        (w) => typeof w == "string" || typeof w == "number"
      );
    }
    function A(R) {
      return N(R).flatMap(
        (w) => typeof w.value == "string" || typeof w.value == "number" ? [{ value: w.value, label: w.label }] : []
      );
    }
    function M(R, w) {
      u.value = { ...u.value, [R.key]: w === "" ? null : w };
    }
    function f(R, w) {
      const I = u.value[R.key];
      if (typeof I != "string" || !I.includes(".."))
        return "";
      const [V, Q] = I.split("..");
      return w === "from" ? V ?? "" : Q ?? "";
    }
    function g(R, w, I) {
      const V = w === "from" ? I : f(R, "from"), Q = w === "to" ? I : f(R, "to");
      u.value = {
        ...u.value,
        [R.key]: V && Q ? `${V}..${Q}` : null
      };
    }
    function z(R, w, I) {
      const V = w === "from" ? I : f(R, "from"), Q = w === "to" ? I : f(R, "to");
      u.value = {
        ...u.value,
        [R.key]: V || Q ? `${V}..${Q}` : null
      };
    }
    function T(R) {
      r("apply-filters", { ...u.value }), R();
    }
    function F(R, w) {
      u.value[R] = w, r("apply-filters", { ...u.value });
    }
    function Y() {
      u.value = Object.fromEntries(n.filterSchema.map((R) => [R.key, null]));
    }
    function N(R) {
      return R.type === "boolean" ? [
        { value: !0, label: R.trueLabel ?? "Yes" },
        { value: !1, label: R.falseLabel ?? "No" }
      ] : R.type === "daterange" ? Object.entries(R.presets ?? {}).map(([w, I]) => ({
        value: w,
        label: I
      })) : (R.options ?? []).map(
        (w) => typeof w == "object" && w !== null && "value" in w ? { value: w.value, label: w.label } : { value: w, label: String(w) }
      );
    }
    const W = q(new Set(n.hidden));
    fe(
      () => n.hidden,
      (R) => {
        W.value = new Set(R);
      },
      { deep: !0 }
    );
    function Z(R) {
      const w = new Set(W.value);
      w.has(R) ? w.delete(R) : w.add(R), W.value = w, r("apply-columns", [...w]);
    }
    function J() {
      W.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function K() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function U() {
      i.value = "", r("clear");
    }
    return (R, w) => (t(), a("div", ys, [
      o("div", xs, [
        o("div", ks, [
          w[9] || (w[9] = o("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            o("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            o("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          pe(o("input", {
            "onUpdate:modelValue": w[0] || (w[0] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: _(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, $s), [
            [_e, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: w[1] || (w[1] = (I) => s.value = !0)
        }, [
          w[10] || (w[10] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          w[11] || (w[11] = H(" Tools ", -1)),
          m.value ? (t(), a("span", ws, c(m.value), 1)) : k("", !0)
        ]),
        E(nn, {
          open: s.value,
          "onUpdate:open": w[4] || (w[4] = (I) => s.value = I)
        }, {
          default: O(() => [
            E(an, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", Cs, [
                  w[16] || (w[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Ss, [
                    e.filterSchema.length ? (t(), a("div", Ms, [
                      o("div", { class: "flex items-center justify-between" }, [
                        w[12] || (w[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: Y
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, j(e.filterSchema, (I) => (t(), a("div", {
                        key: `mobile-${I.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Bs, c(I.label), 1),
                        I.type !== "multiselect" && I.type !== "querybuilder" && I.type !== "daterange" && I.type !== "numberrange" && I.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[I.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => M(I, V.target.value)
                        }, [
                          w[13] || (w[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, j(N(I), (V) => (t(), a("option", {
                            key: String(V.value),
                            value: V.value
                          }, c(V.label), 9, _s))), 128))
                        ], 40, As)) : k("", !0)
                      ]))), 128))
                    ])) : k("", !0),
                    o("div", zs, [
                      w[14] || (w[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ps, [
                        (t(!0), a(P, null, j(e.columns, (I) => (t(), a("button", {
                          key: `mobile-col-${I.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: I.locked,
                          onClick: (V) => Z(I.key)
                        }, [
                          o("span", null, c(I.label), 1),
                          W.value.has(I.key) ? k("", !0) : (t(), a("span", Os, "On"))
                        ], 8, Ls))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", js, [
                      w[15] || (w[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Vs, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: w[2] || (w[2] = (I) => {
                            $(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, j(e.groups, (I) => (t(), a("button", {
                          key: I.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            $(I.key), s.value = !1;
                          }
                        }, c(I.label), 9, Ds))), 128))
                      ])
                    ])) : k("", !0)
                  ]),
                  o("div", Ts, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: K
                    }, " Apply filters ", 8, Is)) : k("", !0),
                    p.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: w[3] || (w[3] = (I) => {
                        U(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : k("", !0)
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      o("div", Es, [
        o("div", Fs, [
          w[18] || (w[18] = o("svg", {
            class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round"
          }, [
            o("circle", {
              cx: "11",
              cy: "11",
              r: "7"
            }),
            o("path", { d: "m20 20-3.5-3.5" })
          ], -1)),
          pe(o("input", {
            "onUpdate:modelValue": w[5] || (w[5] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: _(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, Ns), [
            [_e, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: w[6] || (w[6] = (I) => i.value = "")
          }, [...w[17] || (w[17] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])])) : k("", !0)
        ]),
        e.filterSchema.length ? (t(), D(He, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", m.value ? "border-primary text-primary" : ""]),
              "aria-label": m.value ? `Filters (${m.value} active)` : "Filters",
              title: "Filters"
            }, [
              w[19] || (w[19] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              m.value ? (t(), a("span", Us, c(m.value), 1)) : k("", !0)
            ], 10, Rs)
          ]),
          panel: O(({ close: I }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              w[20] || (w[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: Y
              }, " Reset ")
            ]),
            w[23] || (w[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Hs, [
              (t(!0), a(P, null, j(e.filterSchema, (V) => (t(), a("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Ks, c(V.label), 1),
                C(V) ? (t(), D(tn, {
                  key: 0,
                  "model-value": B(V),
                  options: A(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Q) => u.value[V.key] = Q.length ? Q : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), D(hs, {
                  key: 1,
                  "model-value": u.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (Q) => F(V.key, Q)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[V.key] == "string" && !String(u.value[V.key]).includes("..") ? u.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Q) => M(V, Q.target.value)
                  }, [
                    w[21] || (w[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, j(N(V), (Q) => (t(), a("option", {
                      key: String(Q.value),
                      value: Q.value
                    }, c(Q.label), 9, Gs))), 128))
                  ], 40, qs),
                  o("div", Ws, [
                    o("input", {
                      type: "date",
                      value: f(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => g(
                        V,
                        "from",
                        Q.target.value
                      )
                    }, null, 40, Zs),
                    o("input", {
                      type: "date",
                      value: f(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => g(
                        V,
                        "to",
                        Q.target.value
                      )
                    }, null, 40, Js)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), a("div", Ys, [
                  o("input", {
                    type: "number",
                    value: f(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => z(
                      V,
                      "from",
                      Q.target.value
                    )
                  }, null, 40, Qs),
                  o("input", {
                    type: "number",
                    value: f(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => z(
                      V,
                      "to",
                      Q.target.value
                    )
                  }, null, 40, Xs)
                ])) : V.type === "boolean" ? (t(), a("div", er, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: _([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Q) => M(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: _(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, tr),
                  o("span", nr, c(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: _([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Q) => M(V, u.value[V.key] === !1 ? null : !1)
                  }, c(V.falseLabel ?? "No") + " only ", 11, ar)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Q) => M(V, Q.target.value)
                }, [
                  w[22] || (w[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, j(N(V), (Q) => (t(), a("option", {
                    key: String(Q.value),
                    value: Q.value
                  }, c(Q.label), 9, or))), 128))
                ], 40, lr))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (V) => T(I)
            }, " Apply filters ", 8, sr)
          ]),
          _: 1
        })) : k("", !0),
        E(He, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...w[24] || (w[24] = [
            o("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
              "aria-label": "Toggle columns",
              title: "Columns"
            }, [
              o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4 shrink-0",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                o("rect", {
                  x: "3",
                  y: "4",
                  width: "18",
                  height: "16",
                  rx: "2"
                }),
                o("path", { d: "M9 4v16M15 4v16" })
              ])
            ], -1)
          ])]),
          panel: O(() => [
            w[27] || (w[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", rr, [
              (t(!0), a(P, null, j(e.columns, (I) => (t(), a("button", {
                key: I.key,
                type: "button",
                class: _(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", I.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: I.locked,
                onClick: (V) => Z(I.key)
              }, [
                W.value.has(I.key) ? (t(), a("span", ur)) : (t(), a("svg", dr, [...w[25] || (w[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                H(" " + c(I.label), 1)
              ], 10, ir))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: J
              }, [...w[26] || (w[26] = [
                o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4 shrink-0",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  o("path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
                  o("path", { d: "M3 3v5h5" })
                ], -1),
                H(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), a("div", cr, [
          (t(!0), a(P, null, j(e.layouts, (I) => (t(), a("button", {
            key: I,
            type: "button",
            class: _(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === I ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === I,
            "aria-label": I === "cards" ? "Card layout" : "Table layout",
            title: I === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", I)
          }, [
            I === "table" ? (t(), a("svg", mr, [...w[28] || (w[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), a("svg", pr, [...w[29] || (w[29] = [
              o("rect", {
                x: "3",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
              }, null, -1),
              o("rect", {
                x: "14",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
              }, null, -1),
              o("rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
              }, null, -1),
              o("rect", {
                x: "14",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
              }, null, -1)
            ])]))
          ], 10, fr))), 128))
        ])) : k("", !0),
        e.reorderable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: w[7] || (w[7] = (I) => r("toggle-reorder"))
        }, [...w[30] || (w[30] = [
          o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            o("path", { d: "m3 16 4 4 4-4M7 20V4m14 4-4-4-4 4m4-4v16" })
          ], -1)
        ])], 10, vr)) : k("", !0),
        e.groups.length ? (t(), D(He, {
          key: 3,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: _(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...w[31] || (w[31] = [
              o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M4 6h16M4 12h10M4 18h7" })
              ], -1)
            ])], 10, gr)
          ]),
          panel: O(({ close: I }) => [
            o("div", hr, [
              o("button", {
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  $(null), I();
                }
              }, " No grouping ", 10, br),
              (t(!0), a(P, null, j(e.groups, (V) => (t(), a("button", {
                key: V.key,
                type: "button",
                class: _(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (Q) => {
                  $(V.key), I();
                }
              }, c(V.label), 11, yr))), 128))
            ])
          ]),
          _: 1
        })) : k("", !0),
        p.value ? (t(), a("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: U
        }, " Clear ")) : k("", !0),
        e.loading ? (t(), a("span", xr, "Loading…")) : k("", !0)
      ]),
      h.value.length ? (t(), a("div", kr, [
        (t(!0), a(P, null, j(h.value, (I) => (t(), a("span", {
          key: I.key + I.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${I.key}`
        }, [
          H(c(I.label) + " ", 1),
          I.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${I.label}`,
            onClick: (V) => b(I.key)
          }, [...w[32] || (w[32] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, wr)) : k("", !0)
        ], 8, $r))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: w[8] || (w[8] = (I) => r("clear-filters"))
        }, " Clear all ")) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), Sr = { class: "min-w-0" }, Mr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Br = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Ar = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, _r = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, zr = { class: "w-full border-collapse text-sm" }, Pr = { class: "bg-muted/40" }, Lr = { class: "divide-y" }, Or = ["href"], jr = {
  key: 1,
  class: "text-muted-foreground"
}, Vr = {
  key: 0,
  class: "flex justify-center"
}, Dr = ["disabled"], Tr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Ir = ["href"], a8 = /* @__PURE__ */ L({
  __name: "RelationPanel",
  props: {
    columns: {},
    rows: {},
    loading: { type: Boolean, default: !1 },
    nextCursor: { default: null },
    capped: { type: Boolean, default: !1 },
    loaded: { type: Boolean, default: !1 },
    title: { default: null },
    emptyTitle: { default: "Nothing here yet" },
    emptyText: { default: "Related records will show up here once they exist." },
    indexHref: { default: null },
    recordBase: { default: null },
    filterSchema: { default: () => [] },
    filters: { default: () => ({}) },
    search: { default: "" },
    indicators: { default: () => [] }
  },
  emits: ["load", "update:search", "apply-filters", "clear-filters", "clear-filter"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = Gt(), i = y(() => n.columns.filter(($) => $.type !== "image")), d = y(() => !!s.actions), u = y(() => !!n.title || d.value), m = y(() => n.filterSchema.length > 0), v = y(
      () => n.columns.map(($) => ({ key: $.key, label: $.label, locked: !0 }))
    );
    function p($, b) {
      return b == null || b === "" ? "None" : $.type === "date" || $.type === "datetime" ? new Date(String(b)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...$.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof b == "number" ? new Intl.NumberFormat().format(b) : String(b);
    }
    function h($) {
      return $ == null || $ === "";
    }
    return ($, b) => (t(), D(Go, null, it({
      default: O(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Ar, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), D(Ft, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, it({ _: 2 }, [
          $.$slots.illustration ? {
            name: "illustration",
            fn: O(() => [
              G($.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          $.$slots["empty-actions"] ? {
            name: "actions",
            fn: O(() => [
              G($.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", _r, [
          o("table", zr, [
            o("thead", Pr, [
              o("tr", null, [
                (t(!0), a(P, null, j(i.value, (C) => (t(), a("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", Lr, [
              (t(!0), a(P, null, j(e.rows, (C, S) => (t(), a("tr", {
                key: C.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, j(i.value, (B) => (t(), a("td", {
                  key: B.key,
                  class: _(["px-3 whitespace-nowrap", [
                    B.mono ? "font-mono text-xs" : "",
                    B.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  G($.$slots, `cell:${B.key}`, {
                    row: C,
                    value: C[B.key],
                    column: B
                  }, () => [
                    e.recordBase && C.id != null && B === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(p(B, C[B.key])), 9, Or)) : h(C[B.key]) ? (t(), a("span", jr, " None ")) : (t(), a(P, { key: 2 }, [
                      H(c(p(B, C[B.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : k("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: O(() => [
          o("div", Sr, [
            e.title ? (t(), a("h3", Mr, c(e.title), 1)) : k("", !0)
          ]),
          d.value ? (t(), a("div", Br, [
            G($.$slots, "actions")
          ])) : k("", !0)
        ]),
        key: "0"
      } : void 0,
      m.value ? {
        name: "toolbar",
        fn: O(() => [
          E(Cr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": b[0] || (b[0] = (C) => r("update:search", C)),
            onApplyFilters: b[1] || (b[1] = (C) => r("apply-filters", C)),
            onClearFilters: b[2] || (b[2] = (C) => r("clear-filters")),
            onClearFilter: b[3] || (b[3] = (C) => r("clear-filter", C)),
            onClear: b[4] || (b[4] = (C) => r("clear-filters")),
            onApplyColumns: b[5] || (b[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: O(() => [
          e.nextCursor ? (t(), a("div", Vr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[6] || (b[6] = (C) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Dr)
          ])) : e.capped ? (t(), a("p", Tr, [
            H(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Ir)) : (t(), a(P, { key: 1 }, [
              H("Open the full list to search or filter the rest.")
            ], 64))
          ])) : k("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Er = { class: "flex items-center gap-2 overflow-x-auto" }, Fr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rr = { class: "flex flex-col" }, Ur = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Hr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Kr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, qr = /* @__PURE__ */ L({
  __name: "PkStepIndicator",
  props: {
    steps: {},
    activeStep: {},
    hasError: { type: Function, default: () => !1 },
    failedStep: { default: null },
    interactive: { type: Boolean, default: !0 }
  },
  emits: ["update:activeStep"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(m) {
      return n.failedStep !== null && m === n.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : n.failedStep !== null && m > n.failedStep ? "" : m < n.activeStep ? "bg-primary text-primary-foreground border-primary" : m === n.activeStep ? "border-primary text-primary" : "";
    }
    function i(m) {
      if (n.failedStep !== null) {
        if (m === n.failedStep)
          return "text-destructive font-medium";
        if (m > n.failedStep)
          return "text-muted-foreground/60";
      }
      return m === n.activeStep ? "text-foreground font-medium" : m < n.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(m) {
      return n.failedStep !== null ? m < n.failedStep : m < n.activeStep;
    }
    function u(m) {
      return n.failedStep === m;
    }
    return (m, v) => (t(), a("ol", Er, [
      (t(!0), a(P, null, j(e.steps, (p, h) => (t(), a("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Ae(e.interactive ? "button" : "div"), re({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: ($) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: O(() => [
            o("span", {
              class: _(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), a("svg", Fr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", Nr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                H(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Rr, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), a("span", Ur, c(p.description), 1)) : k("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", Hr)) : k("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", Kr)) : k("", !0)
      ]))), 128))
    ]));
  }
}), mt = /* @__PURE__ */ new Map();
function xe(e, l) {
  mt.set(e, l);
}
function Gr(e) {
  return mt.get(e);
}
function l8(e) {
  return mt.has(e);
}
function o8() {
  return [...mt.keys()].sort();
}
function s8() {
  mt.clear();
}
class Wr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function r8(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[n] = s);
  }
  return l;
}
function Zr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Jr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const i8 = "text-sm text-muted-foreground font-normal", d8 = "text-xs text-muted-foreground font-normal", bt = "text-xs text-muted-foreground font-normal leading-snug", Yr = "text-foreground font-normal", Qr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Yr} ${Qr}`, Xr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, ei = /* @__PURE__ */ L({
  __name: "CreateOptionDialog",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: void 0 },
    fields: {},
    processing: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    generalError: { default: null }
  },
  emits: ["close", "submit"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q({});
    fe(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), D(ut, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: u[1] || (u[1] = (m) => r("close"))
    }, {
      footer: O(() => [
        E(de, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (m) => r("close"))
        }, {
          default: O(() => [...u[2] || (u[2] = [
            H(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            H(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", Xr, c(e.generalError), 1)) : k("", !0),
          (t(!0), a(P, null, j(e.fields, (m) => (t(), D(Ge, {
            key: m.key,
            field: m,
            value: s.value[m.key],
            error: e.errors[m.key],
            processing: e.processing,
            onChange: (v) => s.value[m.key] = v
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), ti = /* @__PURE__ */ L({
  __name: "Checkbox",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    value: {},
    id: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(ba), re({ "data-slot": "checkbox" }, x(i), {
      class: x(ne)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O((m) => [
        E(x(ya), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            G(d.$slots, "default", Le(Ne(m)), () => [
              E(x(Vn), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Je = /* @__PURE__ */ L({
  __name: "Switch",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    id: {},
    value: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = be(me(n, "class"), r);
    return (i, d) => (t(), D(x(xa), re({ "data-slot": "switch" }, x(s), {
      class: x(ne)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O(() => [
        E(x(ka), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ni = ["accept", "disabled"], ai = { class: "text-sm font-medium" }, li = { key: 0 }, oi = { key: 1 }, si = { class: "text-muted-foreground text-xs font-normal" }, ri = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ii = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, di = ["src"], ui = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ci = { class: "min-w-0 flex-1" }, fi = { class: "block truncate text-sm font-medium" }, mi = { class: "text-muted-foreground text-xs font-normal" }, pi = ["href"], vi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, En = /* @__PURE__ */ L({
  __name: "PkFileUpload",
  props: {
    modelValue: {},
    accept: { default: () => [] },
    maxKilobytes: { default: 10240 },
    image: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    upload: {},
    discard: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(!1), d = q(null), u = q(null), m = q(null), v = y(() => n.accept.map((f) => `.${f}`).join(",")), p = y(() => m.value ?? n.modelValue?.url ?? null), h = y(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${$(n.maxKilobytes * 1024)}`);
    function $(f) {
      if (!f)
        return "";
      const g = ["B", "KB", "MB", "GB"];
      let z = f, T = 0;
      for (; z >= 1024 && T < g.length - 1; )
        z /= 1024, T++;
      return `${z.toFixed(z < 10 && T > 0 ? 1 : 0)} ${g[T]}`;
    }
    function b(f) {
      return f.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(f) {
      return n.accept.length && !n.accept.includes(b(f.name)) ? `${b(f.name).toUpperCase() || "That"} files are not accepted here.` : f.size > n.maxKilobytes * 1024 ? `That file is ${$(f.size)}; the limit is ${$(n.maxKilobytes * 1024)}.` : null;
    }
    async function S(f) {
      const g = f?.[0];
      if (!(!g || n.disabled) && (u.value = C(g), !u.value)) {
        B(), n.image && g.type.startsWith("image/") && (m.value = URL.createObjectURL(g)), d.value = 0;
        try {
          const z = await n.upload(g, (T) => {
            d.value = T;
          });
          r("update:modelValue", z);
        } catch (z) {
          u.value = z instanceof Error ? z.message : "The upload failed.", B();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function B() {
      m.value && URL.revokeObjectURL(m.value), m.value = null;
    }
    async function A() {
      const f = n.modelValue;
      B(), u.value = null, r("update:modelValue", null), f && !f.url && n.discard && await n.discard(f.value).catch(() => {
      });
    }
    function M(f) {
      i.value = !1, S(f.dataTransfer?.files ?? null);
    }
    return (f, g) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ii, [
        e.image && p.value ? (t(), a("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, di)) : (t(), a("span", ui, c(b(e.modelValue.name) || "file"), 1)),
        o("span", ci, [
          o("span", fi, c(e.modelValue.name), 1),
          o("span", mi, [
            H(c($(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              g[4] || (g[4] = H(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, pi)
            ], 64)) : (t(), a(P, { key: 1 }, [
              H(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: A
        }, [...g[5] || (g[5] = [
          o("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), a("label", {
        key: 0,
        class: _(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: g[1] || (g[1] = ve((z) => i.value = !0, ["prevent"])),
        onDragleave: g[2] || (g[2] = ve((z) => i.value = !1, ["prevent"])),
        onDrop: ve(M, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: g[0] || (g[0] = (z) => S(z.target.files))
        }, null, 40, ni),
        g[3] || (g[3] = o("svg", {
          class: "text-muted-foreground size-6",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          o("path", { d: "M12 16V4" }),
          o("path", { d: "m7 9 5-5 5 5" }),
          o("path", { d: "M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" })
        ], -1)),
        o("span", ai, [
          d.value === null ? (t(), a("span", li, "Drop a file or click to choose")) : (t(), a("span", oi, "Uploading…"))
        ]),
        o("span", si, c(h.value), 1),
        d.value !== null ? (t(), a("span", ri, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : k("", !0)
      ], 34)),
      u.value ? (t(), a("p", vi, c(u.value), 1)) : k("", !0)
    ]));
  }
}), gi = { class: "flex flex-col gap-2" }, hi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, bi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, yi = { class: "flex flex-col gap-1" }, xi = ["onUpdate:modelValue", "disabled", "aria-label"], ki = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, $i = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, wi = ["onUpdate:modelValue", "disabled", "aria-label"], Ci = ["disabled", "aria-label", "onClick"], Si = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Mi = { class: "flex items-center gap-3" }, Bi = ["disabled"], Ai = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, _i = /* @__PURE__ */ L({
  __name: "PkKeyValue",
  props: {
    modelValue: {},
    keyLabel: { default: "Key" },
    valueLabel: { default: "Value" },
    maxPairs: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = q(u(n.modelValue));
    function u(S) {
      return S ? Object.entries(S).map(([B, A]) => ({
        uid: i++,
        key: B,
        value: A ?? ""
      })) : [];
    }
    fe(
      () => n.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(m()) && (d.value = u(S));
      }
    );
    function m() {
      const S = {};
      for (const B of d.value) {
        const A = B.key.trim();
        A !== "" && (S[A] = B.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function v() {
      r("update:modelValue", m());
    }
    const p = y(() => {
      const S = /* @__PURE__ */ new Map();
      for (const B of d.value) {
        const A = B.key.trim();
        A !== "" && S.set(A, (S.get(A) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, B]) => B > 1).map(([B]) => B));
    }), h = y(
      () => new Set(
        d.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), $ = y(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function b() {
      $.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(S) {
      d.value = d.value.filter((B) => B.uid !== S), v();
    }
    return (S, B) => (t(), a("div", gi, [
      d.value.length ? (t(), a("div", hi, [
        o("div", bi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          B[0] || (B[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, j(d.value, (A) => (t(), a("div", {
          key: A.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", yi, [
            pe(o("input", {
              "onUpdate:modelValue": (M) => A.key = M,
              type: "text",
              class: _([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(A.key.trim()) || h.value.has(A.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, xi), [
              [_e, A.key]
            ]),
            h.value.has(A.key.trim()) ? (t(), a("p", ki, " Letters, numbers, underscores and dashes only. ")) : p.value.has(A.key.trim()) ? (t(), a("p", $i, " Used twice - only the last value will be saved. ")) : k("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (M) => A.value = M,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, wi), [
            [_e, A.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${A.key || "this entry"}`,
            onClick: (M) => C(A.uid)
          }, [...B[1] || (B[1] = [
            o("svg", {
              class: "size-4",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "aria-hidden": "true"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Ci)
        ]))), 128))
      ])) : (t(), a("p", Si, " Nothing here yet. ")),
      o("div", Mi, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || $.value,
          onClick: b
        }, [
          B[2] || (B[2] = o("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          H(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Bi),
        e.maxPairs !== null ? (t(), a("p", Ai, c(d.value.length) + " of " + c(e.maxPairs), 1)) : k("", !0)
      ])
    ]));
  }
}), zi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Pi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Li = ["disabled", "title", "aria-label", "onClick"], Oi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ji = ["d"], Vi = ["disabled"], Di = ["contenteditable", "data-placeholder"], Ti = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Ii = /* @__PURE__ */ L({
  __name: "PkRichEditor",
  props: {
    modelValue: {},
    toolbar: { default: () => ["bold", "italic", "heading", "list", "link"] },
    maxLength: { default: null },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: "Write a note…" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null);
    let i = null;
    const d = [
      {
        id: "bold",
        label: "Bold",
        command: "bold",
        path: "M6 4h6a4 4 0 0 1 0 8H6zM6 12h7a4 4 0 0 1 0 8H6z"
      },
      {
        id: "italic",
        label: "Italic",
        command: "italic",
        path: "M19 4h-9M14 20H5M15 4 9 20"
      },
      {
        id: "underline",
        label: "Underline",
        command: "underline",
        path: "M6 4v6a6 6 0 0 0 12 0V4M4 21h16"
      },
      {
        id: "strike",
        label: "Strikethrough",
        command: "strikeThrough",
        path: "M16 4H9a3 3 0 0 0-2 5M14 12a4 4 0 0 1 0 8H6M4 12h16"
      },
      {
        id: "heading",
        label: "Heading",
        command: "formatBlock",
        argument: "h2",
        path: "M6 12h12M6 4v16M18 4v16"
      },
      {
        id: "list",
        label: "Bulleted list",
        command: "insertUnorderedList",
        path: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
      },
      {
        id: "quote",
        label: "Quote",
        command: "formatBlock",
        argument: "blockquote",
        path: "M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6h4M15 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6h4"
      },
      {
        id: "code",
        label: "Code",
        command: "formatBlock",
        argument: "pre",
        path: "m16 18 6-6-6-6M8 6l-6 6 6 6"
      }
    ], u = y(() => d.filter((C) => n.toolbar.includes(C.id))), m = y(() => n.toolbar.includes("link")), v = q(0);
    function p() {
      const C = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      v.value = S.length;
      const B = S === "" ? null : C;
      i = B, r("update:modelValue", B);
    }
    function h(C) {
      n.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), p());
    }
    function $() {
      if (n.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), p());
    }
    function b(C) {
      C.preventDefault();
      const S = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), p();
    }
    return ge(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (C, S) => (t(), a("div", zi, [
      o("div", Pi, [
        (t(!0), a(P, null, j(u.value, (B) => (t(), a("button", {
          key: B.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: B.label,
          "aria-label": B.label,
          onMousedown: S[0] || (S[0] = ve(() => {
          }, ["prevent"])),
          onClick: (A) => h(B)
        }, [
          (t(), a("svg", Oi, [
            o("path", {
              d: B.path
            }, null, 8, ji)
          ]))
        ], 40, Li))), 128)),
        m.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: S[1] || (S[1] = ve(() => {
          }, ["prevent"])),
          onClick: $
        }, [...S[2] || (S[2] = [
          o("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" })
          ], -1)
        ])], 40, Vi)) : k("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: _(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: b
      }, null, 42, Di),
      e.maxLength !== null ? (t(), a("div", Ti, c(v.value) + " / " + c(e.maxLength), 1)) : k("", !0)
    ]));
  }
}), Ei = /* @__PURE__ */ Bt(Ii, [["__scopeId", "data-v-32c63bc7"]]), Fi = ["role"], Ni = ["title"], Ri = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Ui = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hi = ["d"], Ki = { key: 1 }, qi = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Fn = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkToggleButtons",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => !!n.field.multiple), i = y(() => !!n.field.grouped), d = y(() => !!n.field.hiddenLabels), u = y(() => n.field.inline !== !1), m = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function v(f) {
      return s.value ? m.value.some((g) => g == f.value) : n.modelValue != null && f.value == n.modelValue;
    }
    function p(f) {
      if (!n.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            v(f) ? m.value.filter((g) => g != f.value) : [...m.value, f.value]
          );
          return;
        }
        r("update:modelValue", f.value);
      }
    }
    function h(f) {
      return n.field.colors?.[String(f.value)] ?? "primary";
    }
    function $(f) {
      const g = n.field.icons?.[String(f.value)];
      return g ? ce(g) : null;
    }
    function b(f) {
      return n.field.tooltips?.[String(f.value)] ?? f.label;
    }
    const C = {
      primary: "border-primary bg-primary text-primary-foreground",
      success: "border-success bg-success text-white",
      warning: "border-warning bg-warning text-white",
      danger: "border-destructive bg-destructive text-white",
      info: "border-info bg-info text-white",
      neutral: "border-foreground bg-foreground text-background"
    }, S = {
      primary: "border-input hover:border-primary/60 hover:bg-primary/5",
      success: "border-input hover:border-success/60 hover:bg-success/5",
      warning: "border-input hover:border-warning/60 hover:bg-warning/5",
      danger: "border-input hover:border-destructive/60 hover:bg-destructive/5",
      info: "border-input hover:border-info/60 hover:bg-info/5",
      neutral: "border-input hover:border-foreground/40 hover:bg-muted"
    };
    function B(f) {
      const g = h(f), z = v(f);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        z ? C[g] ?? C.primary : S[g] ?? S.primary,
        n.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const A = y(() => {
      if (!(u.value || i.value) && n.field.columns && n.field.columns > 1)
        return { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` };
    }), M = y(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (f, g) => (t(), a("div", {
      role: s.value ? "group" : "radiogroup",
      class: _(M.value),
      style: se(A.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), a(P, null, j(e.options, (z) => (t(), a("label", {
        key: String(z.value),
        class: _(B(z)),
        title: b(z)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: z.value,
          checked: v(z),
          disabled: e.disabled,
          "aria-label": d.value ? z.label : void 0,
          onChange: (T) => p(z)
        }, null, 40, Ri),
        $(z) ? (t(), a("svg", Ui, [
          o("path", {
            d: $(z)
          }, null, 8, Hi)
        ])) : k("", !0),
        d.value ? k("", !0) : (t(), a("span", Ki, c(z.label), 1))
      ], 10, Ni))), 128)),
      e.options.length === 0 ? (t(), a("p", qi, " Nothing to choose from yet. ")) : k("", !0)
    ], 14, Fi));
  }
}), Gi = {
  key: 1,
  class: "flex flex-col gap-2"
}, Wi = { class: "flex items-center justify-between gap-2" }, Zi = ["for"], Ji = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Yi = ["aria-label", "disabled"], Qi = {
  key: 7,
  class: "flex flex-col gap-2"
}, Xi = ["id", "value", "disabled"], ed = ["value"], td = {
  key: 2,
  class: "relative"
}, nd = ["disabled"], ad = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ld = { class: "max-h-56 overflow-y-auto p-1" }, od = ["onClick"], sd = {
  key: 8,
  class: "relative"
}, rd = ["disabled", "aria-invalid"], id = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, dd = { class: "max-h-56 overflow-y-auto p-1" }, ud = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, cd = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, fd = ["onClick"], md = ["id", "value", "disabled", "aria-invalid"], pd = ["value"], vd = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, gd = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, hd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], bd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, yd = ["aria-label", "disabled"], xd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], kd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, $d = ["aria-label", "disabled"], wd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Cd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Sd = ["aria-label", "disabled"], Md = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Bd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Ad = ["aria-label", "disabled"], _d = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, zd = ["disabled", "aria-pressed", "onClick"], Pd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Ld = ["title", "disabled", "onClick"], Od = ["href"], jd = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, Ge = /* @__PURE__ */ L({
  __name: "FormFieldControl",
  props: {
    field: {},
    value: {},
    error: {},
    options: { default: () => [] },
    processing: { type: Boolean, default: !1 },
    searchOptions: {},
    upload: {},
    discard: {},
    errors: { default: () => ({}) },
    childOptions: { default: () => ({}) },
    values: {}
  },
  emits: ["change", "affix-action"],
  setup(e, { emit: l }) {
    const n = mn(() => import("./PkRepeater-J84jGe3T.js")), r = mn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = q(!1), u = q(""), m = q([]), v = q(!1), p = q(null);
    let h;
    fe(u, (oe) => {
      s.searchOptions && (clearTimeout(h), v.value = !0, h = setTimeout(async () => {
        try {
          m.value = await s.searchOptions(oe);
        } catch {
        } finally {
          v.value = !1;
        }
      }, 200));
    });
    async function $() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, m.value.length === 0 && s.searchOptions)) {
        v.value = !0;
        try {
          m.value = await s.searchOptions("");
        } finally {
          v.value = !1;
        }
      }
    }
    function b(oe) {
      p.value = oe.label, i("change", oe.value), d.value = !1, u.value = "";
    }
    function C() {
      p.value = null, i("change", null);
    }
    const S = xt("panelPicker", null), B = xt("panelCreateOption", null), A = q(!1), M = q(!1), f = q({}), g = q(null), z = y(() => Zr(s.field)), T = y(() => Jr(s.field));
    function F() {
      f.value = {}, g.value = null, A.value = !0, d.value = !1;
    }
    function Y() {
      M.value || (A.value = !1, f.value = {}, g.value = null);
    }
    async function N(oe) {
      if (B) {
        M.value = !0, f.value = {}, g.value = null;
        try {
          const ee = await B.run(s.field.key, { ...oe });
          b(ee), A.value = !1;
        } catch (ee) {
          ee instanceof Wr ? (f.value = ee.fieldErrors, g.value = Object.keys(ee.fieldErrors).length === 0 ? ee.message : null) : g.value = ee instanceof Error ? ee.message : "Could not create that option.";
        } finally {
          M.value = !1;
        }
      }
    }
    const W = y(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const oe = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(oe)}`;
    }), Z = y(() => s.field.morphTo ?? []), J = y(() => {
      const oe = s.value;
      return oe && typeof oe == "object" && !Array.isArray(oe) ? oe : { type: void 0, id: void 0 };
    });
    function K(oe) {
      i("change", { type: oe || null, id: null });
    }
    function U(oe) {
      i("change", { type: J.value.type ?? null, id: oe });
    }
    function R(oe) {
      p.value = oe.label, U(oe.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const w = y(() => Gr(s.field.type)), I = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function V(oe) {
      if (oe) {
        if (oe.copy) {
          const ee = s.value == null ? "" : String(s.value);
          ee !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(ee);
          return;
        }
        if (oe.url && typeof window < "u") {
          window.open(oe.url, "_blank", "noopener,noreferrer");
          return;
        }
        oe.key && i("affix-action", oe.key);
      }
    }
    const Q = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ue} ${Se}`, he = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ue}`;
    function ye(oe) {
      const ee = document.getElementById(`f-${s.field.key}`);
      if (!(ee instanceof HTMLTextAreaElement) && !(ee instanceof HTMLInputElement))
        return;
      const ae = ee.selectionStart ?? ee.value.length, Ce = ee.selectionEnd ?? ae;
      ee.setRangeText(oe, ae, Ce, "end"), ee.dispatchEvent(new Event("input", { bubbles: !0 })), ee.focus();
    }
    return (oe, ee) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", Gi, [
        o("div", Wi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: _(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            H(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Ji, "*")) : k("", !0)
          ], 10, Zi),
          e.field.hint ? (t(), a("span", {
            key: 0,
            class: _(["flex items-center gap-1", x(bt)])
          }, [
            H(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: ee[0] || (ee[0] = (ae) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Yi)) : k("", !0)
          ], 2)) : k("", !0)
        ]),
        w.value ? (t(), D(Ae(w.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[1] || (ee[1] = (ae) => i("change", ae))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(En, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": ee[2] || (ee[2] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(x(n), {
          key: 2,
          "model-value": e.value ?? null,
          children: e.field.children ?? [],
          "field-key": e.field.key,
          "item-label": e.field.itemLabel ?? "Item",
          "min-items": e.field.minItems ?? null,
          "max-items": e.field.maxItems ?? null,
          collapsible: e.field.collapsible ?? !1,
          addable: e.field.addable ?? !0,
          deletable: e.field.deletable ?? !0,
          cloneable: e.field.cloneable ?? !1,
          table: e.field.table ?? !1,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": ee[3] || (ee[3] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "addable", "deletable", "cloneable", "table", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": ee[4] || (ee[4] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Ei, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[5] || (ee[5] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(_i, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[6] || (ee[6] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(tn, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": ee[7] || (ee[7] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", Qi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(Fn, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": J.value.type ?? null,
            options: Z.value.map((ae) => ({ value: ae.value, label: ae.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ee[8] || (ee[8] = (ae) => K(ae == null ? "" : String(ae)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), a("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: J.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: _(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Se)]),
            onChange: ee[9] || (ee[9] = (ae) => K(ae.target.value))
          }, [
            ee[25] || (ee[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, j(Z.value, (ae) => (t(), a("option", {
              key: ae.value,
              value: ae.value
            }, c(ae.label), 9, ed))), 128))
          ], 42, Xi)),
          J.value.type && e.searchOptions ? (t(), a("div", td, [
            o("button", {
              type: "button",
              class: _(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: $
            }, [
              o("span", {
                class: _(p.value || J.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (J.value.id ? String(J.value.id) : "Search…")), 3)
            ], 10, nd),
            d.value ? (t(), a("div", ad, [
              pe(o("input", {
                "onUpdate:modelValue": ee[10] || (ee[10] = (ae) => u.value = ae),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [_e, u.value]
              ]),
              o("div", ld, [
                (t(!0), a(P, null, j(m.value, (ae) => (t(), a("button", {
                  key: String(ae.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => R(ae)
                }, c(ae.label), 9, od))), 128))
              ])
            ])) : k("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: ee[11] || (ee[11] = (ae) => d.value = !1)
            })) : k("", !0)
          ])) : k("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", sd, [
          o("button", {
            type: "button",
            class: _(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: $
          }, [
            o("span", {
              class: _(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ve(C, ["stop"])
            }, " ✕ ")) : k("", !0)
          ], 10, rd),
          d.value ? (t(), a("div", id, [
            pe(o("input", {
              "onUpdate:modelValue": ee[12] || (ee[12] = (ae) => u.value = ae),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [_e, u.value]
            ]),
            o("div", dd, [
              v.value ? (t(), a("p", ud, " Searching… ")) : m.value.length === 0 ? (t(), a("p", cd, " No matches ")) : k("", !0),
              (t(!0), a(P, null, j(m.value, (ae) => (t(), a("button", {
                key: String(ae.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => b(ae)
              }, c(ae.label), 9, fd))), 128)),
              e.field.createOption && x(B) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                ee[26] || (ee[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                H(" " + c(T.value), 1)
              ])) : k("", !0)
            ])
          ])) : k("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: ee[13] || (ee[13] = (ae) => d.value = !1)
          })) : k("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: _(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Se)]),
          onChange: ee[14] || (ee[14] = (ae) => i("change", ae.target.value || null))
        }, [
          ee[27] || (ee[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, j(e.options, (ae) => (t(), a("option", {
            key: String(ae.value),
            value: ae.value
          }, c(ae.label), 9, pd))), 128))
        ], 42, md)) : e.field.type === "toggle" ? (t(), a("label", vd, [
          E(x(Je), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ee[15] || (ee[15] = (ae) => i("change", ae))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: _(x(bt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), a("label", gd, [
          E(x(ti), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ee[16] || (ee[16] = (ae) => i("change", ae === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: _(x(bt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !I.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: _(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x(Ue), x(Se)]),
          onInput: ee[17] || (ee[17] = (ae) => i("change", ae.target.value))
        }, null, 42, hd)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: _([
            "border-input flex overflow-hidden rounded-md border",
            x(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", bd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ee[18] || (ee[18] = (ae) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, yd)) : k("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: _(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", x(Ue)]),
            onInput: ee[19] || (ee[19] = (ae) => i("change", ae.target.value))
          }, null, 42, xd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", kd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ee[20] || (ee[20] = (ae) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, $d)) : k("", !0)
        ], 2)) : I.value ? (t(), a("div", {
          key: 15,
          class: _([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Cd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : k("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ee[22] || (ee[22] = (ae) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Sd)) : k("", !0),
          o("input", {
            id: `f-${e.field.key}`,
            type: e.field.type === "number" ? "number" : e.field.type === "date" ? "date" : e.field.type === "datetime" ? "datetime-local" : e.field.type === "password" ? "password" : e.field.inputType ?? "text",
            value: e.value ?? "",
            placeholder: e.field.placeholder,
            autocomplete: e.field.type === "password" ? "new-password" : void 0,
            min: e.field.min,
            max: e.field.max,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: _(he),
            onInput: ee[23] || (ee[23] = (ae) => i("change", ae.target.value))
          }, null, 40, Md),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Bd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : k("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ee[24] || (ee[24] = (ae) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Ad)) : k("", !0)
        ], 2)) : (t(), a("input", {
          key: 14,
          id: `f-${e.field.key}`,
          type: e.field.type === "number" ? "number" : e.field.type === "date" ? "date" : e.field.type === "datetime" ? "datetime-local" : e.field.type === "password" ? "password" : e.field.inputType ?? "text",
          value: e.value ?? "",
          placeholder: e.field.placeholder,
          autocomplete: e.field.type === "password" ? "new-password" : void 0,
          min: e.field.min,
          max: e.field.max,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: _(Q),
          onInput: ee[21] || (ee[21] = (ae) => i("change", ae.target.value))
        }, null, 40, wd)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", _d, [
          (t(!0), a(P, null, j(e.field.presets, (ae) => (t(), a("button", {
            key: ae,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: _([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ae ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ae
            ),
            onClick: (Ce) => i("change", String(ae))
          }, c(ae), 11, zd))), 128))
        ])) : k("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Pd, [
          (t(!0), a(P, null, j(e.field.chips, (ae, Ce) => (t(), a("button", {
            key: Ce,
            type: "button",
            title: ae,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (cn) => ye(String(Ce))
          }, c(Ce), 9, Ld))), 128))
        ])) : k("", !0),
        W.value ? (t(), a("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Od)) : k("", !0),
        e.error ? (t(), a("p", jd, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", {
          key: 20,
          class: _(x(bt))
        }, c(e.field.help), 3)) : k("", !0)
      ])),
      e.field.createOption && x(B) ? (t(), D(ei, {
        key: 2,
        open: A.value,
        title: z.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: M.value,
        errors: f.value,
        "general-error": g.value,
        onClose: Y,
        onSubmit: N
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : k("", !0)
    ], 64));
  }
}), Vd = { class: "flex min-w-0 items-start gap-2.5" }, Dd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Td = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Id = ["d"], Ed = { class: "min-w-0" }, Fd = { class: "text-sm font-semibold" }, Nd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Rd = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Ud = { class: "border-b px-4 py-3.5 sm:px-5" }, Hd = { class: "text-sm font-semibold" }, Kd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, qd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Gd = {
  key: 7,
  class: "flex flex-col gap-3"
}, Wd = { class: "text-sm font-medium" }, Zd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Jd = {
  key: 0,
  class: "mb-1 font-medium"
}, Yd = ["onClick"], Qd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Xd = { class: "flex items-center justify-between gap-3 border-t p-4" }, eu = ["disabled"], Nn = /* @__PURE__ */ L({
  __name: "SchemaNode",
  props: {
    node: {},
    values: {},
    errors: { default: () => ({}) },
    options: { default: () => ({}) },
    processing: { type: Boolean, default: !1 },
    searchOptions: {},
    upload: {},
    discard: {},
    depth: { default: 0 }
  },
  emits: ["change", "affix-action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!n.node.collapsed);
    function i() {
      const f = n.node.persistInQueryString;
      if (!f || typeof window > "u")
        return 0;
      const g = new URLSearchParams(window.location.search).get(f), z = g === null ? NaN : Number.parseInt(g, 10), T = n.node.children?.length ?? 0;
      return Number.isInteger(z) && z >= 0 && z < T ? z : 0;
    }
    const d = q(n.node.component === "tabs" ? i() : 0), u = q(n.node.component === "wizard" ? i() : 0);
    function m(f, g) {
      if (!f || typeof window > "u")
        return;
      const z = new URL(window.location.href);
      z.searchParams.set(f, String(g)), window.history.replaceState(window.history.state, "", z);
    }
    fe(d, (f) => m(n.node.persistInQueryString, f)), fe(u, (f) => m(n.node.persistInQueryString, f));
    const v = y(
      () => (n.node.children ?? []).map((f) => ({
        label: f.label ?? "",
        description: f.description
      }))
    ), p = y(() => n.depth === 0), h = y(() => {
      const f = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, g = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        f[n.node.align ?? "start"] ?? "items-start",
        g[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), $ = y(() => {
      const f = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return f[n.node.tone ?? "info"] ?? f.info;
    }), b = y(() => {
      const f = n.node.columns ?? 1;
      return f >= 3 ? "sm:grid-cols-3" : f === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(f) {
      const g = f.children?.length ?? 1;
      return g >= 3 ? "md:grid-cols-3" : g === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function S(f = 1) {
      return f >= 4 ? "md:col-span-4" : f === 3 ? "md:col-span-3" : f === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function B(f) {
      const g = [], z = (T) => {
        T.component === "field" && T.key && g.push(T.key), T.children?.forEach(z);
      };
      return z(f), g.some((T) => n.errors[T]);
    }
    function A(f) {
      if (f.hidden)
        return !1;
      const g = f.visibleWhen;
      return g ? n.values[g.field] == g.value : !0;
    }
    function M(f) {
      if (n.upload)
        return (g, z) => n.upload(f, g, z);
    }
    return (f, g) => {
      const z = Wt("SchemaNode", !0);
      return e.node.component === "field" && A(e.node) ? (t(), D(Ge, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (T) => e.searchOptions(e.node.key, T) : void 0,
        upload: M(e.node.key),
        discard: e.discard,
        onChange: g[0] || (g[0] = (T) => r("change", e.node.key, T)),
        onAffixAction: g[1] || (g[1] = (T) => r("affix-action", e.node.key, T))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && A(e.node) ? (t(), a("section", {
        key: 1,
        class: _(p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: _(["flex items-start justify-between gap-3", [
            p.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: g[2] || (g[2] = (T) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Vd, [
            e.node.icon ? (t(), a("div", Dd, [
              (t(), a("svg", Td, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, Id)
              ]))
            ])) : k("", !0),
            o("div", Ed, [
              o("h3", Fd, c(e.node.label), 1),
              e.node.description ? (t(), a("p", Nd, c(e.node.description), 1)) : k("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: _(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...g[24] || (g[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : k("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: _(["grid grid-cols-1 gap-4", [b.value, p.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
            key: F,
            node: T,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: _(T.span && T.span >= 2 ? "sm:col-span-2" : ""),
            onChange: g[3] || (g[3] = (Y, N) => r("change", Y, N)),
            onAffixAction: g[4] || (g[4] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "card" && A(e.node) ? (t(), a("section", Rd, [
        o("header", Ud, [
          o("h3", Hd, c(e.node.title), 1),
          e.node.description ? (t(), a("p", Kd, c(e.node.description), 1)) : k("", !0)
        ]),
        o("div", {
          class: _(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
            key: F,
            node: T,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[5] || (g[5] = (Y, N) => r("change", Y, N)),
            onAffixAction: g[6] || (g[6] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && A(e.node) ? (t(), a("div", {
        key: 3,
        class: _(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
          key: F,
          node: T,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: _(T.component === "column" ? S(T.span) : ""),
          onChange: g[7] || (g[7] = (Y, N) => r("change", Y, N)),
          onAffixAction: g[8] || (g[8] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && A(e.node) ? (t(), a("div", qd, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
          key: F,
          node: T,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: g[9] || (g[9] = (Y, N) => r("change", Y, N)),
          onAffixAction: g[10] || (g[10] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && A(e.node) ? (t(), a("div", {
        key: 5,
        class: _(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
          key: F,
          node: T,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: g[11] || (g[11] = (Y, N) => r("change", Y, N)),
          onAffixAction: g[12] || (g[12] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && A(e.node) ? (t(), a("div", {
        key: 6,
        class: _(["flex", h.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
          key: F,
          node: T,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: g[13] || (g[13] = (Y, N) => r("change", Y, N)),
          onAffixAction: g[14] || (g[14] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && A(e.node) ? (t(), a("fieldset", Gd, [
        o("legend", Wd, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Zd, c(e.node.description), 1)) : k("", !0),
        o("div", {
          class: _(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(z, {
            key: F,
            node: T,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[15] || (g[15] = (Y, N) => r("change", Y, N)),
            onAffixAction: g[16] || (g[16] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && A(e.node) ? (t(), a("div", {
        key: 8,
        role: "note",
        class: _(["rounded-lg border px-4 py-3 text-sm", $.value])
      }, [
        e.node.title ? (t(), a("p", Jd, c(e.node.title), 1)) : k("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && A(e.node) ? (t(), a("div", {
        key: 9,
        class: _(p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: _(["bg-muted/30 flex gap-1 overflow-x-auto p-1", p.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), a("button", {
            key: F,
            type: "button",
            class: _([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              d.value === F ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (Y) => d.value = F
          }, [
            H(c(T.label) + " ", 1),
            B(T) ? (t(), a("span", Qd)) : k("", !0)
          ], 10, Yd))), 128))
        ], 2),
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => pe((t(), a("div", {
          key: F,
          class: _(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(T.children ?? [], (Y, N) => (t(), D(z, {
            key: N,
            node: Y,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[17] || (g[17] = (W, Z) => r("change", W, Z)),
            onAffixAction: g[18] || (g[18] = (W, Z) => r("affix-action", W, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ke, d.value === F]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && A(e.node) ? (t(), a("div", {
        key: 10,
        class: _(p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        E(qr, {
          class: _(["p-4", p.value ? "border-b" : ""]),
          steps: v.value,
          "active-step": u.value,
          "has-error": (T) => B((e.node.children ?? [])[T]),
          "onUpdate:activeStep": g[19] || (g[19] = (T) => u.value = T)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => pe((t(), a("div", {
          key: F,
          class: _(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(T.children ?? [], (Y, N) => (t(), D(z, {
            key: N,
            node: Y,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[20] || (g[20] = (W, Z) => r("change", W, Z)),
            onAffixAction: g[21] || (g[21] = (W, Z) => r("affix-action", W, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ke, u.value === F]
        ])), 128)),
        o("div", Xd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: g[22] || (g[22] = (T) => u.value--)
          }, " Back ", 8, eu),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: g[23] || (g[23] = (T) => u.value++)
          }, " Next ")) : k("", !0)
        ])
      ], 2)) : k("", !0);
    };
  }
}), u8 = /* @__PURE__ */ L({
  __name: "RelationCreateDialog",
  props: {
    open: { type: Boolean },
    title: { default: "Add" },
    form: { default: null },
    formOptions: { default: () => ({}) },
    processing: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    searchOptions: { type: Function, default: void 0 }
  },
  emits: ["close", "submit"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q({});
    fe(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), D(ut, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: u[2] || (u[2] = (m) => r("close"))
    }, {
      footer: O(() => [
        E(de, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (m) => r("close"))
        }, {
          default: O(() => [...u[3] || (u[3] = [
            H(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            H(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: ve(i, ["prevent"])
        }, [
          (t(!0), a(P, null, j(e.form?.nodes ?? [], (m, v) => (t(), D(Nn, {
            key: v,
            node: m,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (p, h) => s.value[p] = h)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), tu = ["title"], nu = ["aria-label"], au = ["d"], lu = { class: "sr-only" }, ou = /* @__PURE__ */ L({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const l = e, n = {
      check: "M20 6 9 17l-5-5",
      x: "M18 6 6 18M6 6l12 12",
      dot: "M12 12h.01",
      wifi: "M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01M2 8.8a15 15 0 0 1 20 0",
      "wifi-off": "M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 5-2.6M2 8.8a15 15 0 0 1 4.2-2.5M22 8.8a15 15 0 0 0-6-3.4M12 20h.01",
      alert: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
      clock: "M12 6v6l4 2M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
      star: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
      pause: "M10 4v16M14 4v16"
    }, r = {
      success: "text-emerald-600 dark:text-emerald-400",
      danger: "text-rose-600 dark:text-rose-400",
      warning: "text-amber-600 dark:text-amber-400",
      neutral: "text-muted-foreground"
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => n[i.value] ?? n.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), m = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: m.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: _(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": m.value
      }, [
        o("path", { d: d.value }, null, 8, au)
      ], 10, nu)),
      o("span", lu, c(m.value), 1)
    ], 8, tu));
  }
}), su = ["aria-label"], ru = ["fill"], c8 = /* @__PURE__ */ L({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const l = e, n = y(() => Math.max(1, Math.min(10, Number(l.max ?? 5)))), r = y(() => {
      const s = Number(l.value);
      return Number.isFinite(s) ? Math.max(0, Math.min(n.value, s)) : 0;
    });
    return (s, i) => (t(), a("span", {
      class: "inline-flex items-center gap-0.5 text-amber-500",
      "aria-label": `${r.value} of ${n.value}`,
      "data-test": "rating-cell"
    }, [
      (t(!0), a(P, null, j(n.value, (d) => (t(), a("svg", {
        key: d,
        class: "size-3.5",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, [
        o("path", {
          d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
          fill: r.value >= d ? "currentColor" : "none",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linejoin": "round"
        }, null, 8, ru)
      ]))), 128))
    ], 8, su));
  }
}), iu = ["src"], du = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, uu = /* @__PURE__ */ L({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, n = q(!1);
    fe(
      () => l.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = y(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = y(() => {
      const d = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), a("span", {
      class: _(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (m) => n.value = !0)
      }, null, 40, iu)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        H(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", du, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : k("", !0)
    ], 2));
  }
}), cu = {
  key: 0,
  class: "text-muted-foreground"
}, fu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, mu = {
  key: 0,
  class: "font-mono text-xs"
}, pu = {
  key: 1,
  class: "sr-only"
}, vu = /* @__PURE__ */ L({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = y(() => {
      const s = (l.value ?? "").trim();
      return n.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), a("span", cu, "-")) : (t(), a("span", fu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", mu, c(r.value), 1)) : (t(), a("span", pu, c(r.value), 1))
    ]));
  }
}), gu = { class: "inline-flex items-center" }, hu = ["checked", "aria-label"], bu = { class: "sr-only" }, f8 = /* @__PURE__ */ L({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, n = y(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = y(
      () => n.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), a("span", gu, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, hu),
      o("span", bu, c(r.value), 1)
    ]));
  }
}), yu = {
  key: 0,
  class: "text-muted-foreground"
}, xu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, m8 = /* @__PURE__ */ L({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", xu, c(n.value), 1)) : (t(), a("span", yu, "—"));
  }
}), ku = {
  key: 0,
  class: "font-mono text-xs"
}, $u = {
  key: 1,
  class: "text-muted-foreground"
}, wu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, p8 = /* @__PURE__ */ L({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", ku, c(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", $u, "—")) : (t(), a("span", wu, c(n.value.length) + " " + c(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Cu = ["data-variant"], Su = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ L({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const l = e, n = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = y(
      () => [Su, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: _(r.value)
    }, [
      G(s.$slots, "default")
    ], 10, Cu));
  }
}), Mu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Bu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, v8 = /* @__PURE__ */ L({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const l = e;
    function n(d, u) {
      if (d == null || d === "")
        return [];
      if (Array.isArray(d))
        return d.map((m) => m == null ? "" : String(m).trim()).filter((m) => m !== "");
      if (typeof d == "string") {
        const m = d.trim();
        if (m.startsWith("["))
          try {
            const v = JSON.parse(m);
            if (Array.isArray(v))
              return n(v, u);
          } catch {
          }
        return m.split(u).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(d)];
    }
    const r = y(() => n(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Mu, "None")) : (t(), a("span", Bu, [
      (t(!0), a(P, null, j(s.value, (m) => (t(), D(We, {
        key: m,
        variant: "secondary"
      }, {
        default: O(() => [
          H(c(m), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), D(We, {
        key: 0,
        variant: "outline"
      }, {
        default: O(() => [
          H("+" + c(i.value), 1)
        ]),
        _: 1
      })) : k("", !0)
    ]));
  }
}), Au = ["aria-checked", "aria-label", "title", "disabled"], _u = ["value", "placeholder", "disabled"], zu = ["value", "disabled"], Pu = ["value"], g8 = /* @__PURE__ */ L({
  __name: "EditableCell",
  props: {
    type: {},
    value: {},
    options: { default: () => ({}) },
    busy: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    onLabel: { default: null },
    offLabel: { default: null },
    placeholder: { default: null }
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.value === !0 || n.value === 1 || n.value === "1"), i = y(() => n.busy || n.disabled), d = y(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function m($) {
      const b = $.target.value;
      b !== String(n.value ?? "") && r("change", b);
    }
    function v($) {
      const C = $.target.value;
      C !== String(n.value ?? "") && r("change", C);
    }
    function p($) {
      $.target.blur();
    }
    function h($) {
      const b = $.target;
      b.value = String(n.value ?? ""), b.blur();
    }
    return ($, b) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: _(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ve(u, ["stop"])
    }, [
      o("span", {
        class: _(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Au)) : e.type === "text" ? (t(), a("input", {
      key: 1,
      type: "text",
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      placeholder: e.placeholder ?? void 0,
      disabled: i.value,
      onClick: b[0] || (b[0] = ve(() => {
      }, ["stop"])),
      onBlur: v,
      onKeydown: [
        Tt(p, ["enter"]),
        Tt(h, ["esc"])
      ]
    }, null, 40, _u)) : (t(), a("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: b[1] || (b[1] = ve(() => {
      }, ["stop"])),
      onChange: m
    }, [
      (t(!0), a(P, null, j(e.options, (C, S) => (t(), a("option", {
        key: S,
        value: S
      }, c(C), 9, Pu))), 128))
    ], 40, zu));
  }
}), ln = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Lu(e) {
  return e != null && e !== "";
}
function Ou(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function h8(e) {
  const l = y(
    () => e.value.map((s) => ({
      key: s.key,
      label: s.label,
      sortable: s.sortable,
      sortKey: s.sortKey,
      locked: s.locked,
      sticky: s.sticky,
      width: s.width,
      resizable: s.resizable,
      copyable: s.copyable,
      cellClass: Ou(s),
      group: s.group
    }))
  ), n = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), m = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return ln[m] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const ju = ["disabled", "aria-label", "aria-busy"], Vu = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Du = ["d"], Tu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Iu = ["disabled", "onClick"], Eu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Fu = ["d"], Nu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, b8 = /* @__PURE__ */ L({
  __name: "BadgeResolver",
  props: {
    value: {},
    options: { default: () => ({}) },
    colors: { default: () => ({}) },
    defaultColor: { default: "neutral" },
    label: { default: "value" },
    busy: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.busy || n.disabled), i = y(() => String(n.value ?? "")), d = y(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function m(h) {
      const $ = n.colors[u(h)] ?? n.defaultColor ?? "neutral";
      return ln[$] ?? "outline";
    }
    function v(h) {
      return n.options[h] ?? h;
    }
    function p(h, $) {
      if (s.value || h === i.value) {
        $();
        return;
      }
      r("change", h), $();
    }
    return (h, $) => (t(), a("div", {
      onClick: $[0] || ($[0] = ve(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(We, {
        key: 1,
        variant: m(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          H(c(v(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(He, {
        key: 0,
        align: "start"
      }, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": d.value,
            "aria-busy": e.busy
          }, [
            E(We, {
              variant: m(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                H(c(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Vu, [
              o("path", {
                d: x(ce)("chevron-down")
              }, null, 8, Du)
            ]))
          ], 8, ju)
        ]),
        panel: O(({ close: b }) => [
          o("div", Tu, c(d.value), 1),
          (t(!0), a(P, null, j(e.options, (C, S) => (t(), a("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (B) => p(String(S), b)
          }, [
            E(We, {
              variant: m(S),
              class: "capitalize"
            }, {
              default: O(() => [
                H(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), a("svg", Eu, [
              o("path", {
                d: x(ce)("check")
              }, null, 8, Fu)
            ])) : (t(), a("span", Nu))
          ], 8, Iu))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), hn = {
  primary: "text-primary",
  gray: "text-foreground",
  success: "text-emerald-600 dark:text-emerald-400",
  warning: "text-amber-600 dark:text-amber-500",
  danger: "text-destructive",
  info: "text-sky-600 dark:text-sky-400"
};
function Ru(e) {
  return hn[e ?? "gray"] ?? hn.gray;
}
const Uu = { class: "flex items-center justify-end" }, Hu = ["aria-label"], Ku = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, qu = ["d"], Gu = ["href"], Wu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zu = ["d"], Ju = { class: "min-w-0 flex-1 truncate" }, Yu = ["disabled", "onClick"], Qu = ["d"], Xu = { class: "min-w-0 flex-1 truncate" }, ec = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, tc = ["disabled", "onClick"], nc = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ac = ["d"], lc = { class: "min-w-0 flex-1 truncate" }, oc = /* @__PURE__ */ L({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(null), d = q(null), u = y(() => r.groups.flatMap((A) => A.actions)), m = y(() => u.value.filter((A) => !A.destructive)), v = y(() => u.value.filter((A) => A.destructive));
    function p(A) {
      return Ru(A.color);
    }
    const h = y(() => u.value.length === 0);
    function $(A) {
      s("run", A);
    }
    function b(A) {
      if (r.busy !== A.key) {
        if (A.link) {
          A.url && window.location.assign(A.url);
          return;
        }
        $(A);
      }
    }
    function C(A, M) {
      const f = M.toLowerCase().split("+").map((T) => T.trim()), g = f.at(-1);
      return !g || A.key.toLowerCase() !== g ? !1 : (A.ctrlKey || A.metaKey) === f.includes("mod") && A.shiftKey === f.includes("shift") && A.altKey === f.includes("alt");
    }
    function S(A) {
      h.value || (A.preventDefault(), i.value?.openAt(A.clientX, A.clientY));
    }
    function B(A) {
      const M = u.value.find(
        (F) => (F.keyBindings ?? []).some((Y) => C(A, Y))
      );
      if (M) {
        A.preventDefault(), b(M);
        return;
      }
      if (A.key !== "ArrowDown" && A.key !== "ArrowUp")
        return;
      const f = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (f.length === 0)
        return;
      A.preventDefault();
      const g = f.indexOf(document.activeElement), z = A.key === "ArrowDown" ? 1 : -1, T = (g + z + f.length) % f.length;
      f[T]?.focus();
    }
    return l({ openContextMenu: S }), (A, M) => (t(), a("div", Uu, [
      h.value ? k("", !0) : (t(), D(He, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none",
            "aria-label": `Actions for ${e.title}`,
            "aria-haspopup": "menu"
          }, [
            (t(), a("svg", Ku, [
              o("path", {
                d: x(ce)("more-vertical")
              }, null, 8, qu)
            ]))
          ], 8, Hu)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: B
          }, [
            (t(!0), a(P, null, j(m.value, (f) => (t(), a(P, {
              key: f.key
            }, [
              f.link ? (t(), a("a", {
                key: 0,
                href: f.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", p(f)])
              }, [
                (t(), a("svg", Wu, [
                  o("path", {
                    d: x(Te)(f)
                  }, null, 8, Zu)
                ])),
                o("span", Ju, c(f.label), 1)
              ], 10, Gu)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", p(f)]),
                disabled: e.busy === f.key,
                onClick: (g) => $(f)
              }, [
                (t(), a("svg", {
                  class: _(["size-4 shrink-0", e.busy === f.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: x(Te)(f)
                  }, null, 8, Qu)
                ], 2)),
                o("span", Xu, c(f.label), 1)
              ], 10, Yu))
            ], 64))), 128)),
            v.value.length ? (t(), a("div", ec, [
              (t(!0), a(P, null, j(v.value, (f) => (t(), a("button", {
                key: f.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === f.key,
                onClick: (g) => $(f)
              }, [
                (t(), a("svg", nc, [
                  o("path", {
                    d: x(Te)({ ...f, destructive: !0 })
                  }, null, 8, ac)
                ])),
                o("span", lc, c(f.label), 1)
              ], 8, tc))), 128))
            ])) : k("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), sc = { class: "flex items-center justify-end gap-1" }, rc = { class: "hidden items-center gap-1 sm:flex" }, ic = ["href"], dc = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uc = ["d"], cc = ["disabled", "onClick"], fc = ["d"], mc = {
  type: "button",
  class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors",
  "aria-haspopup": "menu"
}, pc = {
  key: 0,
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vc = ["d"], gc = { class: "py-0.5" }, hc = ["href"], bc = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yc = ["d"], xc = { class: "min-w-0 flex-1 truncate" }, kc = ["disabled", "onClick"], $c = ["d"], wc = { class: "min-w-0 flex-1 truncate" }, y8 = /* @__PURE__ */ L({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(null), d = y(() => r.groups.filter((A) => !A.label)), u = y(() => r.groups.filter((A) => A.label)), m = y(() => d.value.flatMap((A) => A.actions)), v = y(() => m.value.filter((A) => !A.destructive)), p = y(() => m.value.filter((A) => A.destructive)), h = y(() => r.groups.every((A) => A.actions.length === 0)), $ = {
      primary: "text-primary",
      gray: "text-muted-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(A) {
      return $[A.color ?? "gray"] ?? $.gray;
    }
    function C(A) {
      s("run", A);
    }
    function S(A) {
      r.busy !== A.key && C(A);
    }
    function B(A) {
      h.value || i.value?.openContextMenu(A);
    }
    return l({ openContextMenu: B }), (A, M) => (t(), a("div", sc, [
      o("div", rc, [
        (t(!0), a(P, null, j([...v.value, ...p.value], (f) => (t(), a(P, {
          key: f.key
        }, [
          f.link ? (t(), a("a", {
            key: 0,
            href: f.url ?? "#",
            class: _(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", b(f)])
          }, [
            (t(), a("svg", dc, [
              o("path", {
                d: x(Te)(f)
              }, null, 8, uc)
            ])),
            o("span", null, c(f.label), 1)
          ], 10, ic)) : (t(), a("button", {
            key: 1,
            type: "button",
            class: _(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", b(f)]),
            disabled: e.busy === f.key,
            onClick: (g) => S(f)
          }, [
            (t(), a("svg", {
              class: _(["size-3.5 shrink-0", e.busy === f.key && "animate-pulse"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              o("path", {
                d: x(Te)(f)
              }, null, 8, fc)
            ], 2)),
            o("span", null, c(f.label), 1)
          ], 10, cc))
        ], 64))), 128)),
        (t(!0), a(P, null, j(u.value, (f) => (t(), D(He, {
          key: f.label,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", mc, [
              f.icon ? (t(), a("svg", pc, [
                o("path", {
                  d: x(ce)(f.icon)
                }, null, 8, vc)
              ])) : k("", !0),
              o("span", null, c(f.label), 1)
            ])
          ]),
          panel: O(() => [
            o("div", gc, [
              (t(!0), a(P, null, j([
                ...f.actions.filter((g) => !g.destructive),
                ...f.actions.filter((g) => g.destructive)
              ], (g) => (t(), a(P, {
                key: g.key
              }, [
                g.link ? (t(), a("a", {
                  key: 0,
                  href: g.url ?? "#",
                  role: "menuitem",
                  class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g.destructive ? "text-destructive" : b(g)])
                }, [
                  (t(), a("svg", bc, [
                    o("path", {
                      d: x(Te)(g)
                    }, null, 8, yc)
                  ])),
                  o("span", xc, c(g.label), 1)
                ], 10, hc)) : (t(), a("button", {
                  key: 1,
                  type: "button",
                  role: "menuitem",
                  class: _(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g.destructive ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10" : b(g)]),
                  disabled: e.busy === g.key,
                  onClick: (z) => C(g)
                }, [
                  (t(), a("svg", {
                    class: _(["size-4 shrink-0", e.busy === g.key && "animate-pulse"]),
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "aria-hidden": "true"
                  }, [
                    o("path", {
                      d: x(Te)({ ...g, destructive: g.destructive })
                    }, null, 8, $c)
                  ], 2)),
                  o("span", wc, c(g.label), 1)
                ], 10, kc))
              ], 64))), 128))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      E(oc, {
        ref_key: "fallback",
        ref: i,
        class: "sm:hidden",
        groups: e.groups,
        title: e.title,
        busy: e.busy,
        onRun: M[0] || (M[0] = (f) => s("run", f))
      }, null, 8, ["groups", "title", "busy"])
    ]));
  }
}), Nt = {
  slate: {
    label: "Slate",
    value: "oklch(0.32 0.02 260)",
    foreground: "oklch(0.98 0 0)"
  },
  emerald: {
    label: "Emerald",
    value: "oklch(0.60 0.14 163)",
    foreground: "oklch(0.99 0 0)"
  },
  green: {
    label: "Green",
    value: "oklch(0.63 0.17 145)",
    foreground: "oklch(0.99 0 0)"
  },
  lime: {
    label: "Lime",
    value: "oklch(0.72 0.18 130)",
    foreground: "oklch(0.20 0 0)"
  },
  orange: {
    label: "Orange",
    value: "oklch(0.68 0.18 45)",
    foreground: "oklch(0.99 0 0)"
  },
  amber: {
    label: "Amber",
    value: "oklch(0.75 0.15 75)",
    foreground: "oklch(0.20 0 0)"
  },
  yellow: {
    label: "Yellow",
    value: "oklch(0.82 0.16 95)",
    foreground: "oklch(0.20 0 0)"
  },
  teal: {
    label: "Teal",
    value: "oklch(0.62 0.11 190)",
    foreground: "oklch(0.99 0 0)"
  },
  cyan: {
    label: "Cyan",
    value: "oklch(0.68 0.12 215)",
    foreground: "oklch(0.20 0 0)"
  },
  sky: {
    label: "Sky",
    value: "oklch(0.63 0.15 240)",
    foreground: "oklch(0.99 0 0)"
  },
  blue: {
    label: "Blue",
    value: "oklch(0.55 0.20 262)",
    foreground: "oklch(0.99 0 0)"
  },
  indigo: {
    label: "Indigo",
    value: "oklch(0.51 0.22 277)",
    foreground: "oklch(0.99 0 0)"
  },
  violet: {
    label: "Violet",
    value: "oklch(0.56 0.24 295)",
    foreground: "oklch(0.99 0 0)"
  },
  fuchsia: {
    label: "Fuchsia",
    value: "oklch(0.63 0.26 320)",
    foreground: "oklch(0.99 0 0)"
  },
  pink: {
    label: "Pink",
    value: "oklch(0.63 0.22 355)",
    foreground: "oklch(0.99 0 0)"
  },
  rose: {
    label: "Rose",
    value: "oklch(0.62 0.22 15)",
    foreground: "oklch(0.99 0 0)"
  }
}, Rt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, $t = 12, wt = 20, Cc = [0, 0.25, 0.5, 0.75, 1], on = "alxtexhpanel.appearance", Be = {
  // LIGHT, NOT THE OPERATING SYSTEM'S. See the Theme type - this is the whole
  // of the "mandatory light default": there is no branch that can produce
  // anything else before somebody chooses it.
  theme: "light",
  density: "comfortable",
  fontSize: 16,
  sidebarSide: "left",
  cardStyle: "transparent",
  // Matches the static `--radius: 0.5rem` app.css already shipped, so
  // nobody's panel visibly changes shape the first time this loads.
  radius: 0.5,
  contentLayout: "full",
  menuStyle: "collapsible",
  primary: "slate",
  // Untouched. `reset()` restores these defaults, so Reset is also the way
  // back to the organisation's colour.
  primaryChosen: !1,
  surface: "neutral"
}, Ve = q({ ...Be });
let Ye = !1;
const Rn = "alxtexhpanel.appearance.vars", Ut = "pk-appearance";
function nt() {
  return typeof window > "u" ? null : window;
}
let Ct = null;
function Un(e) {
  return JSON.stringify({
    theme: e.theme,
    density: e.density,
    fontSize: e.fontSize,
    sidebarSide: e.sidebarSide,
    cardStyle: e.cardStyle,
    radius: e.radius,
    contentLayout: e.contentLayout,
    menuStyle: e.menuStyle,
    primary: e.primary,
    primaryChosen: !!e.primaryChosen,
    surface: e.surface
  });
}
function Hn(e) {
  const l = nt();
  l && (l.__panelAppearance = { ...e });
}
function Sc(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Ut);
  l || (l = document.createElement("style"), l.id = Ut, document.head.appendChild(l));
  const n = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${n} }`;
}
function x8() {
  Ye = !1, Ct = null, Ve.value = { ...Be };
  const e = nt();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Ut)?.remove();
}
function sn(e) {
  return e.theme === "dark";
}
const bn = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, yn = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Kn(e) {
  const l = Nt[e.primary] ?? Nt.slate, n = Rt[e.surface] ?? Rt.neutral, r = n.chroma, s = n.hue, d = sn(e) ? {
    "--background": `oklch(0.15 ${r} ${s})`,
    "--card": `oklch(${e.cardStyle === "filled" ? 0.19 : 0.15} ${r} ${s})`,
    "--popover": `oklch(0.18 ${r} ${s})`,
    "--muted": `oklch(0.24 ${r} ${s})`,
    "--accent": `oklch(0.24 ${r} ${s})`,
    "--border": `oklch(0.27 ${r} ${s})`,
    "--input": `oklch(0.27 ${r} ${s})`
  } : {
    "--background": "oklch(1 0 0)",
    "--card": `oklch(${e.cardStyle === "filled" ? 0.985 : 1} ${r} ${s})`,
    "--popover": "oklch(1 0 0)",
    "--muted": `oklch(0.965 ${r} ${s})`,
    "--accent": `oklch(0.965 ${r} ${s})`,
    "--border": `oklch(0.925 ${r} ${s})`,
    "--input": `oklch(0.90 ${r} ${s})`
  };
  return {
    "--primary": l.value,
    "--primary-foreground": l.foreground,
    "--ring": l.value,
    ...d,
    "--pk-font-size": `${e.fontSize}px`,
    "--radius": `${e.radius}rem`,
    /*
     * A LOOKUP, not a ternary chain. The two-level version was
     * `compact ? a : b`, which silently treats every unrecognised value as
     * comfortable - including a third level added later, which is exactly
     * what happened. A map with an explicit fallback fails visibly instead:
     * the row simply does not change, rather than changing to something
     * plausible.
     */
    "--pk-row-padding": bn[e.density] ?? bn.comfortable,
    "--pk-form-gap": yn[e.density] ?? yn.comfortable
  };
}
function Mc(e) {
  return {
    dark: sn(e),
    theme: e.theme,
    vars: Kn(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function rn() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(on);
    if (!e)
      return { ...Be };
    const l = { ...Be, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Be.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Be.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < $t || l.fontSize > wt) && (l.fontSize = Be.fontSize), l;
  } catch {
    return { ...Be };
  }
}
function Bc() {
  const e = nt();
  if (!e)
    return null;
  const l = e.__panelAppearance;
  if (l && typeof l == "object")
    return l;
  try {
    const n = document.getElementById("app")?.dataset.page;
    if (!n)
      return null;
    const r = JSON.parse(n)?.props?.appearance;
    return r && typeof r == "object" ? r : null;
  } catch {
    return null;
  }
}
function qn(e) {
  const l = rn(), n = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Un(n);
  if (Ve.value = n, Ye = !0, e) {
    Hn(n);
    try {
      localStorage.setItem(on, JSON.stringify(n));
    } catch {
    }
  }
  const d = nt()?.__panelAppearanceApplied === !0;
  if (Ct !== s) {
    if (r && d && e) {
      Ct = s;
      try {
        const u = Mc(n);
        localStorage.setItem(Rn, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Ht(n);
  }
}
function k8() {
  qn(Bc());
}
function $8(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && qn(l);
}
let Gn = null;
function w8(e) {
  Gn = e;
}
let Wn = {};
function Ac(e) {
  if (Wn = e, !(typeof document > "u") && !rn().primaryChosen)
    for (const [l, n] of Object.entries(e))
      document.documentElement.style.setProperty(l, n);
}
function Ht(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, n = Kn(e), r = { ...n, ...e.primaryChosen ? {} : Wn }, s = {
    dark: sn(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, Sc(n), Hn(e), Ct = Un(e);
  const i = nt();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Rn, JSON.stringify(s));
  } catch {
  }
}
function Zn() {
  function e(r) {
    Ht(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ve.value = { ...Ve.value, ...r, ...s };
    try {
      localStorage.setItem(on, JSON.stringify(Ve.value));
    } catch {
    }
    e(Ve.value), Gn?.({ ...r, ...s });
  }
  function n() {
    l({ ...Be });
  }
  return ge(() => {
    if (Ye || nt()?.__panelAppearanceApplied) {
      Ye = !0;
      return;
    }
    Ye = !0, Ve.value = rn(), Ht(Ve.value);
  }), {
    appearance: y(() => Ve.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: Nt,
    SURFACE_TINTS: Rt,
    FONT_SIZE_MIN: $t,
    FONT_SIZE_MAX: wt,
    RADIUS_OPTIONS: Cc
  };
}
const _c = ["aria-busy", "aria-label"], zc = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, Pc = { class: "min-w-0" }, Lc = { class: "text-base font-semibold" }, Oc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, jc = { class: "flex shrink-0 items-center gap-2" }, Vc = ["disabled"], Dc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, Tc = {
  key: 0,
  class: "bg-muted/30 flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
}, At = /* @__PURE__ */ L({
  __name: "PkSlideover",
  props: {
    open: { type: Boolean },
    title: {},
    description: { default: null },
    side: { default: "right" },
    size: { default: "sm" },
    width: { default: null },
    busy: { type: Boolean, default: !1 },
    padded: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null);
    let i = null, d = "";
    const u = q(!1), m = y(() => n.width ?? po[n.size]), v = y(
      () => [In, n.padded ? mo : ""].filter(Boolean).join(" ")
    );
    function p(b) {
      u.value = b.target === b.currentTarget;
    }
    function h(b) {
      u.value && b.target === b.currentTarget && !n.busy && r("close"), u.value = !1;
    }
    function $(b) {
      if (!n.open)
        return;
      if (b.key === "Escape") {
        if (n.busy)
          return;
        b.stopPropagation(), r("close");
        return;
      }
      if (b.key !== "Tab" || !s.value)
        return;
      const C = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (C.length === 0)
        return;
      const S = C[0], B = C[C.length - 1];
      b.shiftKey && document.activeElement === S ? (b.preventDefault(), B.focus()) : !b.shiftKey && document.activeElement === B && (b.preventDefault(), S.focus());
    }
    return fe(
      () => n.open,
      async (b) => {
        if (b) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", $), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", $), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", $), document.body.style.overflow = d;
    }), (b, C) => (t(), D(ct, { to: "body" }, [
      E(Qe, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]",
            onPointerdown: p,
            onPointerup: h
          }, null, 32)) : k("", !0)
        ]),
        _: 1
      }),
      E(Qe, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: O(() => [
          e.open ? (t(), a("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: _(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [m.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", zc, [
              o("div", Pc, [
                o("h2", Lc, c(e.title), 1),
                e.description ? (t(), a("p", Oc, c(e.description), 1)) : k("", !0)
              ]),
              o("div", jc, [
                G(b.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: C[0] || (C[0] = (S) => r("close"))
                }, [...C[1] || (C[1] = [
                  o("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    o("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])], 8, Vc)
              ])
            ]),
            o("div", Dc, [
              o("div", {
                class: _(v.value)
              }, [
                G(b.$slots, "default")
              ], 2)
            ]),
            b.$slots.footer ? (t(), a("footer", Tc, [
              G(b.$slots, "footer")
            ])) : k("", !0)
          ], 10, _c)) : k("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Ic = { class: "flex flex-col gap-5 px-4 py-4" }, Ec = { class: "flex flex-col gap-2" }, Fc = { class: "grid grid-cols-8 gap-2" }, Nc = ["title", "aria-label", "aria-pressed", "onClick"], Rc = { class: "flex flex-col gap-2" }, Uc = { class: "grid grid-cols-8 gap-2" }, Hc = ["title", "aria-label", "aria-pressed", "onClick"], Kc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, qc = { class: "flex flex-col gap-2" }, Gc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Wc = ["aria-pressed", "aria-label", "onClick"], Zc = { class: "text-sm font-semibold" }, Jc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Yc = ["onClick"], Qc = { class: "flex flex-col gap-2" }, Xc = { class: "flex items-center justify-between" }, ef = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, tf = { class: "flex items-center gap-2" }, nf = ["disabled"], af = ["min", "max", "value"], lf = ["disabled"], C8 = /* @__PURE__ */ L({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Zn(), u = q(!1), m = y(() => l.value.sidebarSide === "right"), v = y(() => m.value ? "left" : "right"), p = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], h = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], $ = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], b = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], S = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function B(A, M) {
      return `oklch(0.72 ${M * 3} ${A})`;
    }
    return (A, M) => (t(), a(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: M[0] || (M[0] = (f) => u.value = !0)
      }, [...M[6] || (M[6] = [
        rt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      E(At, {
        open: u.value,
        title: "Settings",
        side: v.value,
        width: "w-80",
        padded: !1,
        onClose: M[5] || (M[5] = (f) => u.value = !1)
      }, {
        "header-actions": O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: M[1] || (M[1] = //@ts-ignore
            (...f) => x(r) && x(r)(...f))
          }, " Reset ")
        ]),
        default: O(() => [
          o("div", Ic, [
            o("section", Ec, [
              M[8] || (M[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", Fc, [
                (t(!0), a(P, null, j(x(s), (f, g) => (t(), a("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: f.value }),
                  title: f.label,
                  "aria-label": f.label,
                  "aria-pressed": x(l).primary === g,
                  onClick: (z) => x(n)({ primary: g })
                }, [
                  x(l).primary === g ? (t(), a("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: f.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...M[7] || (M[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : k("", !0)
                ], 12, Nc))), 128))
              ])
            ]),
            o("section", Rc, [
              M[10] || (M[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", Uc, [
                (t(!0), a(P, null, j(x(i), (f, g) => (t(), a("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: B(f.hue, f.chroma) }),
                  title: f.label,
                  "aria-label": f.label,
                  "aria-pressed": x(l).surface === g,
                  onClick: (z) => x(n)({ surface: g })
                }, [
                  x(l).surface === g ? (t(), a("svg", Kc, [...M[9] || (M[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : k("", !0)
                ], 12, Hc))), 128))
              ])
            ]),
            o("section", qc, [
              M[11] || (M[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Gc, [
                (t(!0), a(P, null, j(x(d), (f) => (t(), a("button", {
                  key: f,
                  type: "button",
                  class: _([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    x(l).radius === f ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": x(l).radius === f,
                  "aria-label": `${f}rem radius`,
                  onClick: (g) => x(n)({ radius: f })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(f, 0.5)}rem` })
                  }, null, 4),
                  H(" " + c(f), 1)
                ], 10, Wc))), 128))
              ])
            ]),
            (t(!0), a(P, null, j([
              { label: "Color scheme", key: "theme", options: p },
              { label: "Card style", key: "cardStyle", options: $ },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: b },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: S }
            ], (f) => (t(), a("section", {
              key: f.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Zc, c(f.label), 1),
              o("div", Jc, [
                (t(!0), a(P, null, j(f.options, (g) => (t(), a("button", {
                  key: String(g.value),
                  type: "button",
                  class: _([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    x(l)[f.key] === g.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (z) => x(n)({ [f.key]: g.value })
                }, c(g.label), 11, Yc))), 128))
              ])
            ]))), 128)),
            o("section", Qc, [
              o("div", Xc, [
                M[12] || (M[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", ef, c(x(l).fontSize) + "px", 1)
              ]),
              o("div", tf, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: x(l).fontSize <= x($t),
                  "aria-label": "Decrease font size",
                  onClick: M[2] || (M[2] = (f) => x(n)({ fontSize: x(l).fontSize - 1 }))
                }, " − ", 8, nf),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: x($t),
                  max: x(wt),
                  value: x(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: M[3] || (M[3] = (f) => x(n)({
                    fontSize: Number(f.target.value)
                  }))
                }, null, 40, af),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: x(l).fontSize >= x(wt),
                  "aria-label": "Increase font size",
                  onClick: M[4] || (M[4] = (f) => x(n)({ fontSize: x(l).fontSize + 1 }))
                }, " + ", 8, lf)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["open", "side"])
    ], 64));
  }
}), of = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, sf = { class: "flex items-stretch" }, rf = ["href", "aria-current"], df = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, uf = ["d"], cf = { class: "w-full truncate text-center" }, ff = {
  key: 0,
  class: "flex-1"
}, mf = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, pf = ["d"], vf = { class: "w-full truncate text-center" }, Ot = 5, S8 = /* @__PURE__ */ L({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.items.length <= Ot ? n.items : n.items.slice(0, Ot - 1)
    ), i = y(() => n.items.length > Ot);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, m) => (t(), a("nav", of, [
      o("ul", sf, [
        (t(!0), a(P, null, j(s.value, (v) => (t(), a("li", {
          key: v.key,
          class: "flex-1"
        }, [
          o("a", {
            href: v.href,
            class: _([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(v.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(v.href) ? "page" : void 0
          }, [
            (t(), a("svg", df, [
              o("path", {
                d: x(ce)(v.icon)
              }, null, 8, uf)
            ])),
            o("span", cf, c(v.title), 1)
          ], 10, rf)
        ]))), 128)),
        i.value ? (t(), a("li", ff, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: m[0] || (m[0] = (v) => r("more"))
          }, [
            (t(), a("svg", mf, [
              o("path", {
                d: x(ce)("more-horizontal")
              }, null, 8, pf)
            ])),
            o("span", vf, c(e.moreLabel), 1)
          ])
        ])) : k("", !0)
      ])
    ]));
  }
}), gf = { class: "lg:shrink-0 lg:self-start" }, hf = { class: "lg:hidden" }, bf = ["aria-expanded", "aria-label"], yf = { class: "flex min-w-0 items-center gap-2" }, xf = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, kf = ["d"], $f = { class: "truncate" }, wf = ["aria-label"], Cf = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Sf = ["d"], Mf = { class: "flex-1" }, Bf = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Af = ["d"], _f = { class: "sticky top-6 hidden w-60 shrink-0 self-start lg:block" }, zf = ["aria-label"], Pf = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Lf = ["d"], M8 = /* @__PURE__ */ L({
  __name: "PkSubNav",
  props: {
    items: {},
    ariaLabel: { default: "Section" },
    fallbackIcon: { default: "sliders" }
  },
  setup(e) {
    const l = e, n = Xt();
    function r(u) {
      if (!u.startsWith("http"))
        return u;
      try {
        return new URL(u).pathname;
      } catch {
        return u;
      }
    }
    function s(u) {
      const m = r(n.url.split("?")[0]), v = r(u);
      return m === v || m.startsWith(`${v}/`);
    }
    const i = y(
      () => l.items.find((u) => s(u.href)) ?? l.items[0]
    );
    function d(u) {
      return u?.icon ?? l.fallbackIcon;
    }
    return (u, m) => (t(), a("div", gf, [
      o("div", hf, [
        E(He, { align: "start" }, {
          trigger: O(({ open: v }) => [
            o("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm shadow-xs",
              "aria-expanded": v,
              "aria-haspopup": "listbox",
              "aria-label": e.ariaLabel
            }, [
              o("span", yf, [
                (t(), a("svg", xf, [
                  o("path", {
                    d: x(ce)(d(i.value))
                  }, null, 8, kf)
                ])),
                o("span", $f, c(i.value?.title), 1)
              ]),
              m[0] || (m[0] = o("svg", {
                class: "text-muted-foreground size-4 shrink-0 opacity-70",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "aria-hidden": "true"
              }, [
                o("path", { d: "m7 15 5 5 5-5M7 9l5-5 5 5" })
              ], -1))
            ], 8, bf)
          ]),
          panel: O(() => [
            o("div", {
              class: "flex flex-col",
              role: "listbox",
              "aria-label": e.ariaLabel
            }, [
              (t(!0), a(P, null, j(e.items, (v) => (t(), D(x(Et), {
                key: v.href,
                href: v.href,
                role: "option",
                "aria-selected": s(v.href),
                class: _([
                  "flex items-center gap-2 rounded-sm px-2 py-2 text-sm",
                  s(v.href) ? "bg-muted font-medium" : "hover:bg-muted/70"
                ])
              }, {
                default: O(() => [
                  (t(), a("svg", Cf, [
                    o("path", {
                      d: x(ce)(d(v))
                    }, null, 8, Sf)
                  ])),
                  o("span", Mf, c(v.title), 1),
                  s(v.href) ? (t(), a("svg", Bf, [
                    o("path", {
                      d: x(ce)("check")
                    }, null, 8, Af)
                  ])) : k("", !0)
                ]),
                _: 2
              }, 1032, ["href", "aria-selected", "class"]))), 128))
            ], 8, wf)
          ]),
          _: 1
        })
      ]),
      o("aside", _f, [
        o("nav", {
          class: "flex flex-col space-y-1",
          "aria-label": e.ariaLabel
        }, [
          (t(!0), a(P, null, j(e.items, (v) => (t(), D(x(Et), {
            key: v.href,
            href: v.href,
            class: _([
              x(st)({ variant: "ghost" }),
              "w-full justify-start",
              s(v.href) ? "bg-primary/10 text-foreground font-medium ring-1 ring-primary/15" : ""
            ])
          }, {
            default: O(() => [
              (t(), a("svg", Pf, [
                o("path", {
                  d: x(ce)(d(v))
                }, null, 8, Lf)
              ])),
              H(" " + c(v.title), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"]))), 128))
        ], 8, zf)
      ])
    ]));
  }
}), Of = ["value"], we = /* @__PURE__ */ L({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = `file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ${Ue}`;
    return (i, d) => (t(), a("input", {
      "data-slot": "input",
      value: n.modelValue ?? n.defaultValue,
      class: _([s, n.class]),
      onInput: d[0] || (d[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Of));
  }
}), jf = ["for"], ze = /* @__PURE__ */ L({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: _([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      G(l.$slots, "default")
    ], 10, jf));
  }
}), B8 = /* @__PURE__ */ L({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: _(["size-4 animate-spin", l.$props.class])
    }, [...n[0] || (n[0] = [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      o("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), Vf = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Df = ["id", "name", "value", "disabled", "maxlength"], Tf = ["data-active"], If = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Ef = /* @__PURE__ */ L({
  __name: "PkOtpInput",
  props: {
    modelValue: { default: "" },
    length: { default: 6 },
    disabled: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    name: {},
    id: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!1), i = q(null), d = q("");
    ge(() => {
      n.autofocus && i.value?.focus();
    });
    const u = y(
      () => Array.from({ length: n.length }, (A, M) => n.modelValue[M] ?? "")
    ), m = y(() => Math.min(n.modelValue.length, n.length - 1));
    function v(A) {
      return A.replace(/\D/g, "").slice(0, n.length);
    }
    function p(A) {
      n.disabled || A.length !== n.length || d.value !== A && (d.value = A, r("complete", A));
    }
    function h(A) {
      const M = v(A);
      M !== n.modelValue && r("update:modelValue", M), p(M);
    }
    function $(A) {
      h(A.target.value);
    }
    function b(A) {
      h(A.target.value);
    }
    function C() {
      h(i.value?.value ?? "");
    }
    function S(A) {
      A.animationName === "pkOtpAutofillStart" && C();
    }
    fe(
      () => n.modelValue,
      (A) => {
        A.length < n.length ? d.value = "" : p(A);
      }
    );
    let B;
    return ge(() => {
      B = window.setInterval(() => {
        if (n.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), ca(() => {
      B !== void 0 && window.clearInterval(B);
    }), (A, M) => (t(), a("div", Vf, [
      o("input", {
        ref_key: "field",
        ref: i,
        id: n.id,
        name: n.name,
        value: n.modelValue,
        disabled: n.disabled,
        inputmode: "numeric",
        autocomplete: "one-time-code",
        maxlength: n.length,
        class: "pk-otp-input absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: $,
        onChange: b,
        onAnimationstart: S,
        onFocus: M[0] || (M[0] = (f) => s.value = !0),
        onBlur: M[1] || (M[1] = (f) => s.value = !1)
      }, null, 40, Df),
      (t(!0), a(P, null, j(u.value, (f, g) => (t(), a("div", {
        key: g,
        "data-slot": "input-otp-slot",
        "data-active": s.value && g === m.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        H(c(f) + " ", 1),
        s.value && g === m.value && f === "" ? (t(), a("div", If, [...M[2] || (M[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : k("", !0)
      ], 8, Tf))), 128))
    ]));
  }
}), A8 = /* @__PURE__ */ Bt(Ef, [["__scopeId", "data-v-560616ac"]]), Ff = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ie = /* @__PURE__ */ L({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, n) => (t(), a("header", {
      class: _(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: _(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), a("p", Ff, c(e.description), 1)) : k("", !0)
    ], 2));
  }
}), Nf = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Rf = { class: "min-w-0 space-y-1" }, Uf = { class: "flex flex-wrap items-center gap-2.5" }, Hf = { class: "text-2xl font-semibold tracking-tight" }, Kf = {
  key: 0,
  class: "flex items-center gap-2"
}, qf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Gf = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, _8 = /* @__PURE__ */ L({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, n) => (t(), a("header", Nf, [
      o("div", Rf, [
        o("div", Uf, [
          o("h1", Hf, c(e.title), 1),
          l.$slots.status ? (t(), a("div", Kf, [
            G(l.$slots, "status")
          ])) : k("", !0)
        ]),
        e.purpose ? (t(), a("p", qf, c(e.purpose), 1)) : k("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", Gf, [
        G(l.$slots, "actions")
      ])) : k("", !0)
    ]));
  }
}), Wf = /* @__PURE__ */ L({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: _(x(ne)(x(Yf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Zf = /* @__PURE__ */ L({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: _(x(ne)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Jf = /* @__PURE__ */ L({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: _(x(ne)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Yf = en(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Qf = { class: "list-inside list-disc text-sm" }, z8 = /* @__PURE__ */ L({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(x(Wf), { variant: "destructive" }, {
      default: O(() => [
        E(x(tl), { class: "size-4" }),
        E(x(Jf), null, {
          default: O(() => [
            H(c(e.title), 1)
          ]),
          _: 1
        }),
        E(x(Zf), null, {
          default: O(() => [
            o("ul", Qf, [
              (t(!0), a(P, null, j(n.value, (i, d) => (t(), a("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Jn = /* @__PURE__ */ L({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, s = Tn(n, "modelValue", l, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => pe((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => fa(s) ? s.value = u : null),
      "data-slot": "input",
      class: _(
        x(ne)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          x(Ue),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [_e, x(s)]
    ]);
  }
}), Xf = { class: "relative" }, em = ["aria-label"], P8 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = q(!1), s = ma("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", Xf, [
      E(x(Jn), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(ne)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: _(
          x(ne)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), D(x(nl), {
          key: 0,
          class: "size-4"
        })) : (t(), D(x(al), {
          key: 1,
          class: "size-4"
        }))
      ], 10, em)
    ]));
  }
}), Yn = "@container min-w-0", tm = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", L8 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", nm = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function am(e) {
  if (e === void 0)
    return 1;
  if (typeof e == "number")
    return e;
  if (e.lg !== void 0)
    return e.lg;
  if (e.default !== void 0)
    return e.default;
  const l = Object.values(e);
  return l.length > 0 ? Math.max(...l) : 1;
}
function O8(e, l) {
  const n = Math.max(1, Math.floor(l));
  if (e.length === 0)
    return [];
  if (n === 1)
    return [{ type: "columns", columns: [[...e]] }];
  const r = [];
  let s = [];
  const i = () => {
    if (s.length === 0)
      return;
    const d = Array.from({ length: n }, () => []);
    s.forEach((u, m) => {
      d[m % n].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    am(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function xn(e, l) {
  return `${e}:${l}`;
}
function j8(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Kt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function V8(e, l, n, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: n }
  ], i = /* @__PURE__ */ new Map();
  for (const m of s)
    for (const v of m.items)
      i.set(xn(m.kind, v.key), {
        kind: m.kind,
        source: v
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const m of r?.widgets ?? []) {
    const v = m.id.toLowerCase(), p = i.get(v);
    p && (u.add(v), d.push({
      id: v,
      kind: p.kind,
      key: p.source.key,
      span: Kt(m.span),
      hidden: !!m.hidden,
      source: p.source
    }));
  }
  for (const m of s)
    for (const v of m.items) {
      const p = xn(m.kind, v.key);
      u.has(p) || d.push({
        id: p,
        kind: m.kind,
        key: v.key,
        span: Kt(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function D8(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Kt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Qn = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", lm = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", om = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function sm(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function rm(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function im(e) {
  const l = URL.createObjectURL(e);
  try {
    const n = await dm(l), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(n, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let m = 3; m < u.length; m += 4)
      if ((u[m] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function dm(e) {
  return new Promise((l, n) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function um(e) {
  if (sm(e))
    throw new Error(om);
  if (!rm(e))
    throw new Error(Qn);
  if (!await im(e))
    throw new Error(lm);
}
const T8 = /* @__PURE__ */ L({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Xe), re({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ L({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(zn), re({
      "data-slot": "sheet-description",
      class: x(ne)("text-sm text-muted-foreground font-normal", l.class)
    }, x(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), I8 = /* @__PURE__ */ L({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: _(x(ne)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), fm = /* @__PURE__ */ L({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: _(x(ne)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), mm = /* @__PURE__ */ L({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Pn), re({
      "data-slot": "sheet-title",
      class: x(ne)("text-foreground font-semibold", l.class)
    }, x(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), E8 = /* @__PURE__ */ L({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ln), re({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kn = "sidebar_state", pm = 3600 * 24 * 7, vm = "16rem", gm = "18rem", hm = "3rem", bm = "b", [_t, ym] = $a("Sidebar"), xm = { class: "flex h-full w-full flex-col" }, km = ["data-state", "data-collapsible", "data-variant", "data-side"], $m = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, F8 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = _t();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: x(ne)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      G(d.$slots, "default")
    ], 16)) : x(n) ? (t(), D(x(nn), re({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: O(() => [
        E(x(an), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": x(gm)
          })
        }, {
          default: O(() => [
            E(fm, { class: "sr-only" }, {
              default: O(() => [
                E(mm, null, {
                  default: O(() => [...u[0] || (u[0] = [
                    H("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(cm, null, {
                  default: O(() => [...u[1] || (u[1] = [
                    H("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", xm, [
              G(d.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (t(), a("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": x(r),
      "data-collapsible": x(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: _(
          x(ne)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: x(ne)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", $m, [
          G(d.$slots, "default")
        ])
      ], 16)
    ], 8, km));
  }
}), N8 = /* @__PURE__ */ L({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: _(
        x(ne)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), R8 = /* @__PURE__ */ L({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: _(x(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), U8 = /* @__PURE__ */ L({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: _(x(ne)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), H8 = /* @__PURE__ */ L({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        x(ne)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), K8 = /* @__PURE__ */ L({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: _(x(ne)("w-full text-sm", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), q8 = /* @__PURE__ */ L({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: _(
        x(ne)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), G8 = /* @__PURE__ */ L({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: _(x(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), W8 = /* @__PURE__ */ L({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Jn), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: _(x(ne)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Z8 = /* @__PURE__ */ L({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: _(
        x(ne)(
          "bg-background relative flex min-h-0 w-full flex-1 flex-col overflow-y-auto",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm",
          // Side-aware insets. The upstream component hardcodes ml-0, so with the
          // sidebar on the right the content kept a left gutter it did not need and
          // reserved nothing on the right - the panel then overlapped the table.
          "md:peer-data-[variant=inset]:peer-data-[side=left]:ml-0 md:peer-data-[variant=inset]:peer-data-[side=left]:peer-data-[state=collapsed]:ml-2",
          "md:peer-data-[variant=inset]:peer-data-[side=right]:mr-0 md:peer-data-[variant=inset]:peer-data-[side=right]:peer-data-[state=collapsed]:mr-2",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), J8 = /* @__PURE__ */ L({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: _(x(ne)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Y8 = /* @__PURE__ */ L({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: _(
        x(ne)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          e.showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
          l.class
        )
      ),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), Q8 = /* @__PURE__ */ L({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: _(
        x(ne)(
          "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
          "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
          "peer-data-[size=sm]/menu-button:top-1",
          "peer-data-[size=default]/menu-button:top-1.5",
          "peer-data-[size=lg]/menu-button:top-2.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), wm = /* @__PURE__ */ L({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(wa), re({ "data-slot": "tooltip" }, x(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Ca), null, {
      default: O(() => [
        E(x(Sa), re({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(ne)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: O(() => [
            G(d.$slots, "default"),
            E(x(Ma), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), X8 = /* @__PURE__ */ L({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 0 },
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean },
    content: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(On), Le(Ne(l)), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ L({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ba), re({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $n = /* @__PURE__ */ L({
  __name: "SidebarMenuButtonChild",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(ne)(x(Bm)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), eC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(e) {
    const l = e, { isMobile: n, state: r } = _t(), s = me(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(x(wm), { key: 1 }, {
      default: O(() => [
        E(x(Sm), { "as-child": "" }, {
          default: O(() => [
            E($n, Le(Ne({ ...x(s), ...i.$attrs })), {
              default: O(() => [
                G(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(x(Cm), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(n)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), a(P, { key: 0 }, [
              H(c(e.tooltip), 1)
            ], 64)) : (t(), D(Ae(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D($n, Le(re({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: O(() => [
        G(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tC = /* @__PURE__ */ L({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: _(x(ne)("group/menu-item relative", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), wn = "animate-pulse rounded-md bg-primary/10", nC = /* @__PURE__ */ L({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = y(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: _(x(ne)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: _(x(ne)(wn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : k("", !0),
      o("div", {
        class: _(x(ne)(wn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), aC = /* @__PURE__ */ L({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: _(
        x(ne)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ L({
  __name: "SidebarMenuSubButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: _(
        x(ne)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "data-[active=true]:bg-primary/10 data-[active=true]:text-primary",
          e.size === "sm" && "text-xs",
          e.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), oC = /* @__PURE__ */ L({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: _(x(ne)("group/menu-sub-item relative", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ L({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !fl?.cookie.includes(`${kn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = ul("(max-width: 767px)"), i = q(!1), d = Tn(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${kn}=${d.value}; path=/; max-age=${pm}`;
    }
    function m(h) {
      i.value = h;
    }
    function v() {
      return s.value ? m(!i.value) : u(!d.value);
    }
    cl("keydown", (h) => {
      h.key === bm && (h.metaKey || h.ctrlKey) && (h.preventDefault(), v());
    });
    const p = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return ym({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: m,
      toggleSidebar: v
    }), (h, $) => (t(), D(x(On), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(vm),
            "--sidebar-width-icon": x(hm)
          },
          class: x(ne)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, h.$attrs), [
          G(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), rC = /* @__PURE__ */ L({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = _t();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: _(
        x(ne)(
          "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
          "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          l.class
        )
      ),
      onClick: s[0] || (s[0] = //@ts-ignore
      (...i) => x(n) && x(n)(...i))
    }, [
      G(r.$slots, "default")
    ], 2));
  }
}), Mm = /* @__PURE__ */ L({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Aa), re({ "data-slot": "separator" }, x(n), {
      class: x(ne)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), iC = /* @__PURE__ */ L({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Mm), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: _(x(ne)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dC = /* @__PURE__ */ L({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = _t();
    return (i, d) => (t(), D(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: _(x(ne)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: O(() => [
        x(n) || x(r) === "collapsed" ? (t(), D(x(ll), { key: 0 })) : (t(), D(x(ol), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Bm = en(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-primary/10 data-[active=true]:font-medium data-[active=true]:text-primary data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), uC = /* @__PURE__ */ L({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(_a), re({ "data-slot": "dropdown-menu" }, x(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), Am = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, cC = /* @__PURE__ */ L({
  __name: "DropdownMenuCheckboxItem",
  props: {
    modelValue: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select", "update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(za), re({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", Am, [
          E(x(jn), null, {
            default: O(() => [
              G(d.$slots, "indicator-icon", {}, () => [
                E(x(Vn), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        G(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Pa), null, {
      default: O(() => [
        E(x(La), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(ne)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: O(() => [
            G(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), mC = /* @__PURE__ */ L({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Oa), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pC = /* @__PURE__ */ L({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(e) {
    const l = e, n = me(l, "inset", "variant", "class"), r = Oe(n);
    return (s, i) => (t(), D(x(ja), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(ne)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), vC = /* @__PURE__ */ L({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = me(l, "class", "inset"), r = Oe(n);
    return (s, i) => (t(), D(x(Va), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(ne)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), gC = /* @__PURE__ */ L({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(Da), re({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: O(() => [
        G(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, hC = /* @__PURE__ */ L({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Ta), re({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", _m, [
          E(x(jn), null, {
            default: O(() => [
              G(d.$slots, "indicator-icon", {}, () => [
                E(x(sl), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        G(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bC = /* @__PURE__ */ L({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Ia), re({ "data-slot": "dropdown-menu-separator" }, x(n), {
      class: x(ne)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), yC = /* @__PURE__ */ L({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: _(x(ne)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), xC = /* @__PURE__ */ L({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(Ea), re({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), kC = /* @__PURE__ */ L({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    memoDependencies: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Fa), re({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(ne)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: O(() => [
        G(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $C = /* @__PURE__ */ L({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = me(l, "class", "inset"), r = Oe(n);
    return (s, i) => (t(), D(x(Na), re({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(ne)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        G(s.$slots, "default"),
        E(x(Dn), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), wC = /* @__PURE__ */ L({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Oe(e);
    return (r, s) => (t(), D(x(Ra), re({ "data-slot": "dropdown-menu-trigger" }, x(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), CC = /* @__PURE__ */ L({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ua), {
      "data-slot": "avatar",
      class: _(x(ne)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), SC = /* @__PURE__ */ L({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Ha), re({ "data-slot": "avatar-fallback" }, x(n), {
      class: x(ne)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), MC = /* @__PURE__ */ L({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ka), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), BC = /* @__PURE__ */ L({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: _(l.class)
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), AC = /* @__PURE__ */ L({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: _(x(ne)("flex size-9 items-center justify-center", l.class))
    }, [
      G(n.$slots, "default", {}, () => [
        E(x(rl), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), _C = /* @__PURE__ */ L({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: _(x(ne)("inline-flex items-center gap-1.5", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), zC = /* @__PURE__ */ L({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(et), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: _(x(ne)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), PC = /* @__PURE__ */ L({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: _(
        x(ne)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), LC = /* @__PURE__ */ L({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: _(x(ne)("text-foreground font-normal", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), OC = /* @__PURE__ */ L({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: _(x(ne)("[&>svg]:size-3.5", l.class))
    }, [
      G(n.$slots, "default", {}, () => [
        E(x(Dn))
      ])
    ], 2));
  }
}), zm = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Pm = /* @__PURE__ */ L({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), a("div", zm, [
      E(x(qa), re({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(ne)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), jC = /* @__PURE__ */ L({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    viewport: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class", "viewport"), i = be(s, r);
    return (d, u) => (t(), D(x(Ga), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(ne)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: O((m) => [
        G(d.$slots, "default", Le(Ne(m))),
        e.viewport ? (t(), D(Pm, { key: 0 })) : k("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), VC = /* @__PURE__ */ L({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Wa), re({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(ne)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: O(() => [
        G(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DC = /* @__PURE__ */ L({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(x(Za), re({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(ne)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: O(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), TC = /* @__PURE__ */ L({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Ja), re({ "data-slot": "navigation-menu-item" }, x(n), {
      class: x(ne)("relative", l.class)
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IC = /* @__PURE__ */ L({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Ya), re({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(ne)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        G(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), EC = /* @__PURE__ */ L({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(x(Qa), re({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(ne)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FC = /* @__PURE__ */ L({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(x(Xa), re({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(ne)(x(Lm)(), "group", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default"),
        E(x(il), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lm = en(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), NC = /* @__PURE__ */ L({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(x(_n), re({ "data-slot": "dialog" }, x(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), RC = /* @__PURE__ */ L({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Xe), re({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ L({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(Zt), re({ "data-slot": "dialog-overlay" }, x(n), {
      class: x(ne)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !0 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Jt), null, {
      default: O(() => [
        E(Om),
        E(x(Yt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: O(() => [
            G(d.$slots, "default"),
            e.showCloseButton ? (t(), D(x(Xe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                E(x(Qt)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : k("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), HC = /* @__PURE__ */ L({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(x(zn), re({ "data-slot": "dialog-description" }, x(r), {
      class: x(ne)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), KC = /* @__PURE__ */ L({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: _(x(ne)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      G(n.$slots, "default"),
      e.showCloseButton ? (t(), D(x(Xe), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          E(de, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              H(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : k("", !0)
    ], 2));
  }
}), qC = /* @__PURE__ */ L({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: _(x(ne)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), GC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "DialogScrollContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = me(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(x(Jt), null, {
      default: O(() => [
        E(x(Zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            E(x(Yt), re({
              class: x(ne)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (m) => {
                const v = m.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && m.preventDefault();
              })
            }), {
              default: O(() => [
                G(d.$slots, "default"),
                E(x(Xe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    E(x(Qt), { class: "w-4 h-4" }),
                    u[1] || (u[1] = o("span", { class: "sr-only" }, "Close", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 3
            }, 16, ["class"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), WC = /* @__PURE__ */ L({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(x(Pn), re({ "data-slot": "dialog-title" }, x(r), {
      class: x(ne)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZC = /* @__PURE__ */ L({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(Ln), re({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), JC = /* @__PURE__ */ L({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(x(el), re({ "data-slot": "label" }, x(n), {
      class: x(ne)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), YC = /* @__PURE__ */ L({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(x(dl), {
      role: "status",
      "aria-label": "Loading",
      class: _(x(ne)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), QC = /* @__PURE__ */ L({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: _(
        x(ne)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), XC = /* @__PURE__ */ L({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: _(x(ne)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), e6 = /* @__PURE__ */ L({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: _(x(ne)("px-6", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), t6 = /* @__PURE__ */ L({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: _(x(ne)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), n6 = /* @__PURE__ */ L({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: _(x(ne)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), a6 = /* @__PURE__ */ L({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: _(
        x(ne)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), l6 = /* @__PURE__ */ L({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: _(x(ne)("leading-none font-semibold", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), jm = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Vm = { class: "flex items-start gap-3" }, Dm = { class: "min-w-0 flex-1" }, Tm = { class: "text-foreground text-sm font-medium" }, Im = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, o6 = /* @__PURE__ */ L({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(!1), d = q(null), u = q(0);
    pa((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function m() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: m }), (v, p) => (t(), a("div", {
      class: _(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", jm, [
        o("div", Vm, [
          p[1] || (p[1] = o("svg", {
            class: "text-destructive mt-0.5 size-4 shrink-0",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" })
          ], -1)),
          o("div", Dm, [
            o("p", Tm, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", Im, c(d.value), 1)) : k("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: m
            }, [...p[0] || (p[0] = [
              o("svg", {
                class: "size-3",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                o("path", { d: "M21 2v6h-6M3.5 9a9 9 0 0 1 14.9-3.4L21 8" })
              ], -1),
              H(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? k("", !0) : G(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), Em = { class: "bg-card rounded-lg border" }, Fm = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Nm = { class: "min-w-0" }, Rm = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Um = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Hm = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Km = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, s6 = /* @__PURE__ */ L({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => (t(), a("section", Em, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), a("header", Fm, [
        o("div", Nm, [
          G(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Rm, c(e.title), 1)) : k("", !0),
            e.description ? (t(), a("p", Um, c(e.description), 1)) : k("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Hm, [
          G(l.$slots, "actions")
        ])) : k("", !0)
      ])) : k("", !0),
      o("div", {
        class: _(e.padded ? "p-4" : "")
      }, [
        G(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Km, [
        G(l.$slots, "footer")
      ])) : k("", !0)
    ]));
  }
}), Xn = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function r6() {
  const e = Xt(), l = y(() => e.props.panel?.pageFooter === !0);
  return It(Xn, l), l;
}
const qm = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Gm = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Wm = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, i6 = /* @__PURE__ */ L({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Xt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = y(() => {
      const m = n.props.panel;
      return Array.isArray(m?.footerLinks) ? m.footerLinks : [];
    }), d = xt(Xn, y(() => !1)), u = y(() => !l.host && x(d) === !0);
    return (m, v) => u.value ? k("", !0) : (t(), a("footer", qm, [
      o("div", Gm, [
        o("p", null, "© " + c(x(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", Wm, [
          (t(!0), a(P, null, j(i.value, (p) => (t(), D(x(Et), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              H(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : k("", !0)
      ])
    ]));
  }
}), Zm = { class: "flex shrink-0 flex-col items-center" }, Jm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, d6 = /* @__PURE__ */ L({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, n = y(() => l.kind === "laptop"), r = y(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = y(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", Zm, [
      o("div", {
        class: _(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Jm)) : k("", !0),
        o("div", {
          class: _(["size-full overflow-hidden bg-white", s.value])
        }, [
          G(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(P, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: se({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: se({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : k("", !0)
    ]));
  }
}), Ym = {
  key: 0,
  class: "flex justify-end"
}, Qm = {
  key: 1,
  class: "flex flex-col gap-2"
}, Xm = ["onDrop"], ep = ["aria-label", "onDragstart"], tp = ["onClick"], np = { class: "font-medium" }, ap = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, lp = {
  key: 2,
  class: "min-w-0 flex-1"
}, op = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, sp = ["aria-label", "onClick"], rp = ["disabled", "aria-label", "onClick"], ip = ["disabled", "aria-label", "onClick"], dp = ["disabled", "title", "aria-label", "onClick"], up = ["disabled", "title", "aria-label", "onClick"], cp = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, fp = ["disabled"], mp = {
  key: 2,
  class: "flex flex-col gap-2"
}, pp = {
  key: 0,
  class: "overflow-x-auto rounded-md border"
}, vp = { class: "w-full text-sm" }, gp = { class: "bg-muted/40" }, hp = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, bp = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, yp = ["onDrop"], xp = {
  key: 0,
  class: "px-2 py-1.5 align-top"
}, kp = ["aria-label", "onDragstart"], $p = { class: "px-2 py-1.5 align-top" }, wp = { class: "mt-0.5 flex items-center gap-0.5" }, Cp = ["disabled", "aria-label", "onClick"], Sp = ["disabled", "aria-label", "onClick"], Mp = ["disabled", "title", "aria-label", "onClick"], Bp = ["disabled", "title", "aria-label", "onClick"], Ap = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, _p = ["disabled"], u6 = /* @__PURE__ */ L({
  __name: "PkRepeater",
  props: {
    modelValue: {},
    children: {},
    itemLabel: { default: "Item" },
    minItems: { default: null },
    maxItems: { default: null },
    collapsible: { type: Boolean, default: !1 },
    addable: { type: Boolean, default: !0 },
    deletable: { type: Boolean, default: !0 },
    cloneable: { type: Boolean, default: !1 },
    table: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    fieldKey: {},
    childOptions: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    let s = 0;
    const i = q(d(n.modelValue));
    function d(J) {
      return Array.isArray(J) ? J.map((K) => ({ uid: s++, data: { ...K } })) : [];
    }
    fe(
      () => n.modelValue,
      (J) => {
        JSON.stringify(J ?? null) !== JSON.stringify(u()) && (i.value = d(J));
      }
    );
    function u() {
      const J = [];
      for (const K of i.value) {
        const U = {};
        let R = !1;
        for (const w of n.children) {
          const I = K.data[w.key] ?? null;
          U[w.key] = I, I !== null && I !== "" && !(Array.isArray(I) && I.length === 0) && (R = !0);
        }
        R && J.push(U);
      }
      return J.length ? J : null;
    }
    function m() {
      r("update:modelValue", u());
    }
    const v = y(() => n.maxItems !== null && i.value.length >= n.maxItems), p = y(() => n.minItems !== null && i.value.length <= n.minItems), h = y(() => n.children.length === 1);
    function $() {
      if (v.value || n.disabled || !n.addable)
        return;
      const J = {};
      for (const K of n.children)
        J[K.key] = null;
      i.value.push({ uid: s++, data: J });
    }
    function b(J) {
      i.value = i.value.filter((K) => K.uid !== J), m();
    }
    function C(J) {
      if (v.value || n.disabled || !n.cloneable)
        return;
      const K = i.value.findIndex((I) => I.uid === J);
      if (K < 0)
        return;
      const U = i.value[K], R = {};
      for (const I of n.children) {
        const V = U.data[I.key];
        R[I.key] = Array.isArray(V) ? [...V] : V;
      }
      const w = [...i.value];
      w.splice(K + 1, 0, { uid: s++, data: R }), i.value = w, m();
    }
    function S(J, K) {
      const U = J + K;
      if (U < 0 || U >= i.value.length)
        return;
      const R = [...i.value], [w] = R.splice(J, 1);
      R.splice(U, 0, w), i.value = R, m();
    }
    function B(J, K, U) {
      const R = i.value.find((w) => w.uid === J);
      R && (R.data[K] = U, m());
    }
    function A(J, K) {
      return n.errors[`${n.fieldKey}.${J}.${K}`];
    }
    const M = q(/* @__PURE__ */ new Set());
    function f(J) {
      return n.collapsible && M.value.has(J);
    }
    function g(J) {
      const K = new Set(M.value);
      K.has(J) ? K.delete(J) : K.add(J), M.value = K;
    }
    const z = y(
      () => i.value.length > 0 && i.value.every((J) => M.value.has(J.uid))
    );
    function T() {
      M.value = z.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((J) => J.uid));
    }
    function F(J) {
      const K = n.children[0];
      if (!K)
        return "";
      const U = J.data[K.key];
      if (typeof U != "string" && typeof U != "number")
        return "";
      const R = String(U).trim();
      return R === "" || R.length > 60 ? "" : R;
    }
    const Y = q(null);
    function N(J, K) {
      if (n.disabled) {
        K.preventDefault();
        return;
      }
      Y.value = J, K.dataTransfer?.setData("text/plain", String(J)), K.dataTransfer && (K.dataTransfer.effectAllowed = "move");
    }
    function W() {
      Y.value = null;
    }
    function Z(J, K) {
      K.preventDefault();
      const U = Y.value;
      if (Y.value = null, n.disabled || U === null || U === J)
        return;
      const R = [...i.value], w = R.findIndex((Q) => Q.uid === U), I = R.findIndex((Q) => Q.uid === J);
      if (w < 0 || I < 0)
        return;
      const [V] = R.splice(w, 1);
      R.splice(I, 0, V), i.value = R, m();
    }
    return (J, K) => (t(), a(P, null, [
      !e.table && e.collapsible && i.value.length > 1 ? (t(), a("div", Ym, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: T
        }, c(z.value ? "Expand all" : "Collapse all"), 1)
      ])) : k("", !0),
      e.table ? (t(), a("div", mp, [
        i.value.length ? (t(), a("div", pp, [
          o("table", vp, [
            o("thead", null, [
              o("tr", gp, [
                e.disabled ? k("", !0) : (t(), a("th", hp, [...K[9] || (K[9] = [
                  o("span", { class: "sr-only" }, "Reorder", -1)
                ])])),
                (t(!0), a(P, null, j(e.children, (U) => (t(), a("th", {
                  key: U.key,
                  class: "text-muted-foreground border-b px-2 py-1.5 text-left text-xs font-medium"
                }, [
                  H(c(U.label) + " ", 1),
                  U.required ? (t(), a("span", bp, "*")) : k("", !0)
                ]))), 128)),
                K[10] || (K[10] = o("th", { class: "border-b px-2 py-1.5" }, [
                  o("span", { class: "sr-only" }, "Row actions")
                ], -1))
              ])
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, j(i.value, (U, R) => (t(), a("tr", {
                key: U.uid,
                class: _(["border-b last:border-b-0", Y.value === U.uid ? "opacity-40" : ""]),
                onDragover: K[1] || (K[1] = ve(() => {
                }, ["prevent"])),
                onDrop: (w) => Z(U.uid, w)
              }, [
                e.disabled ? k("", !0) : (t(), a("td", xp, [
                  o("button", {
                    type: "button",
                    class: "text-muted-foreground/60 hover:text-muted-foreground mt-0.5 flex size-6 cursor-grab items-center justify-center active:cursor-grabbing",
                    draggable: "true",
                    "aria-label": `Drag to reorder ${e.itemLabel} ${R + 1}`,
                    onDragstart: (w) => N(U.uid, w),
                    onDragend: W
                  }, [...K[11] || (K[11] = [
                    rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
                  ])], 40, kp)
                ])),
                (t(!0), a(P, null, j(e.children, (w) => (t(), a("td", {
                  key: w.key,
                  class: "min-w-[8rem] px-2 py-1.5 align-top"
                }, [
                  E(Ge, {
                    field: { ...w, disabled: w.disabled || e.disabled, labelHidden: !0 },
                    value: U.data[w.key],
                    error: A(R, w.key),
                    options: e.childOptions[w.key] ?? [],
                    onChange: (I) => B(U.uid, w.key, I)
                  }, null, 8, ["field", "value", "error", "options", "onChange"])
                ]))), 128)),
                o("td", $p, [
                  o("div", wp, [
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || R === 0,
                      "aria-label": `Move ${e.itemLabel} ${R + 1} up`,
                      onClick: (w) => S(R, -1)
                    }, [...K[12] || (K[12] = [
                      o("svg", {
                        class: "size-3.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "aria-hidden": "true"
                      }, [
                        o("path", { d: "m18 15-6-6-6 6" })
                      ], -1)
                    ])], 8, Cp),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || R === i.value.length - 1,
                      "aria-label": `Move ${e.itemLabel} ${R + 1} down`,
                      onClick: (w) => S(R, 1)
                    }, [...K[13] || (K[13] = [
                      o("svg", {
                        class: "size-3.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "aria-hidden": "true"
                      }, [
                        o("path", { d: "m6 9 6 6 6-6" })
                      ], -1)
                    ])], 8, Sp),
                    e.cloneable ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || v.value,
                      title: v.value ? `At most ${e.maxItems} allowed` : void 0,
                      "aria-label": `Duplicate ${e.itemLabel} ${R + 1}`,
                      onClick: (w) => C(U.uid)
                    }, [...K[14] || (K[14] = [
                      o("svg", {
                        class: "size-3.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "aria-hidden": "true"
                      }, [
                        o("rect", {
                          x: "8",
                          y: "8",
                          width: "12",
                          height: "12",
                          rx: "2"
                        }),
                        o("path", { d: "M4 16V6a2 2 0 0 1 2-2h10" })
                      ], -1)
                    ])], 8, Mp)) : k("", !0),
                    e.deletable ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || p.value,
                      title: p.value ? `At least ${e.minItems} required` : void 0,
                      "aria-label": `Remove ${e.itemLabel} ${R + 1}`,
                      onClick: (w) => b(U.uid)
                    }, [...K[15] || (K[15] = [
                      o("svg", {
                        class: "size-3.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "aria-hidden": "true"
                      }, [
                        o("path", { d: "M18 6 6 18M6 6l12 12" })
                      ], -1)
                    ])], 8, Bp)) : k("", !0)
                  ])
                ])
              ], 42, yp))), 128))
            ])
          ])
        ])) : (t(), a("p", Ap, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)),
        !v.value && e.addable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: $
        }, [
          K[16] || (K[16] = o("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          H(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, _p)) : k("", !0)
      ])) : (t(), a("div", Qm, [
        (t(!0), a(P, null, j(i.value, (U, R) => (t(), a("div", {
          key: U.uid,
          class: _(["flex items-start gap-2", Y.value === U.uid ? "opacity-40" : ""]),
          onDragover: K[0] || (K[0] = ve(() => {
          }, ["prevent"])),
          onDrop: (w) => Z(U.uid, w)
        }, [
          e.disabled ? k("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: _(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${R + 1}`,
            onDragstart: (w) => N(U.uid, w),
            onDragend: W
          }, [...K[2] || (K[2] = [
            rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, ep)),
          o("span", {
            class: _(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(R + 1), 3),
          f(U.uid) ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (w) => g(U.uid)
          }, [
            o("span", np, c(e.itemLabel) + " " + c(R + 1), 1),
            F(U) ? (t(), a("span", ap, c(F(U)), 1)) : k("", !0)
          ], 8, tp)) : (t(), a("div", lp, [
            h.value ? (t(), D(Ge, {
              key: 0,
              field: {
                ...e.children[0],
                disabled: e.children[0].disabled || e.disabled,
                labelHidden: !0
              },
              value: U.data[e.children[0].key],
              error: A(R, e.children[0].key),
              options: e.childOptions[e.children[0].key] ?? [],
              onChange: (w) => B(U.uid, e.children[0].key, w)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", op, [
              (t(!0), a(P, null, j(e.children, (w) => (t(), D(Ge, {
                key: w.key,
                field: { ...w, disabled: w.disabled || e.disabled },
                value: U.data[w.key],
                error: A(R, w.key),
                options: e.childOptions[w.key] ?? [],
                onChange: (I) => B(U.uid, w.key, I)
              }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
            ]))
          ])),
          o("div", {
            class: _(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
          }, [
            e.collapsible ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": f(U.uid) ? `Expand ${e.itemLabel} ${R + 1}` : `Collapse ${e.itemLabel} ${R + 1}`,
              onClick: (w) => g(U.uid)
            }, [
              (t(), a("svg", {
                class: _(["size-3.5 transition-transform", f(U.uid) ? "" : "rotate-180"]),
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [...K[3] || (K[3] = [
                o("path", { d: "m6 9 6 6 6-6" }, null, -1)
              ])], 2))
            ], 8, sp)) : k("", !0),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || R === 0,
              "aria-label": `Move ${e.itemLabel} ${R + 1} up`,
              onClick: (w) => S(R, -1)
            }, [...K[4] || (K[4] = [
              o("svg", {
                class: "size-3.5",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                o("path", { d: "m18 15-6-6-6 6" })
              ], -1)
            ])], 8, rp),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || R === i.value.length - 1,
              "aria-label": `Move ${e.itemLabel} ${R + 1} down`,
              onClick: (w) => S(R, 1)
            }, [...K[5] || (K[5] = [
              o("svg", {
                class: "size-3.5",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                o("path", { d: "m6 9 6 6 6-6" })
              ], -1)
            ])], 8, ip),
            e.cloneable ? (t(), a("button", {
              key: 1,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || v.value,
              title: v.value ? `At most ${e.maxItems} allowed` : void 0,
              "aria-label": `Duplicate ${e.itemLabel} ${R + 1}`,
              onClick: (w) => C(U.uid)
            }, [...K[6] || (K[6] = [
              o("svg", {
                class: "size-3.5",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                o("rect", {
                  x: "8",
                  y: "8",
                  width: "12",
                  height: "12",
                  rx: "2"
                }),
                o("path", { d: "M4 16V6a2 2 0 0 1 2-2h10" })
              ], -1)
            ])], 8, dp)) : k("", !0),
            e.deletable ? (t(), a("button", {
              key: 2,
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || p.value,
              title: p.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${R + 1}`,
              onClick: (w) => b(U.uid)
            }, [...K[7] || (K[7] = [
              o("svg", {
                class: "size-3.5",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "aria-hidden": "true"
              }, [
                o("path", { d: "M18 6 6 18M6 6l12 12" })
              ], -1)
            ])], 8, up)) : k("", !0)
          ], 2)
        ], 42, Xm))), 128)),
        i.value.length === 0 ? (t(), a("p", cp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : k("", !0),
        !v.value && e.addable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: $
        }, [
          K[8] || (K[8] = o("svg", {
            class: "size-3.5",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "M12 5v14M5 12h14" })
          ], -1)),
          H(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, fp)) : k("", !0)
      ]))
    ], 64));
  }
}), zp = { class: "space-y-1" }, Pp = { class: "flex items-center gap-1" }, Lp = ["disabled", "title", "aria-label", "onClick"], Op = ["aria-pressed"], jp = ["id", "value", "rows", "disabled"], Vp = ["innerHTML"], Dp = /* @__PURE__ */ L({
  __name: "PkMarkdownInput",
  props: {
    modelValue: { default: "" },
    rows: { default: 12 },
    toolbar: {},
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!1), i = y(() => n.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function m(h, $ = h) {
      const b = document.getElementById(n.id ?? "");
      if (b === null)
        return;
      const C = b.selectionStart, S = b.selectionEnd, B = i.value.slice(C, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${B}${$}${i.value.slice(S)}`
      );
    }
    const v = {
      bold: { label: "B", run: () => m("**") },
      italic: { label: "I", run: () => m("*") },
      code: { label: "</>", run: () => m("`") },
      heading: { label: "H", run: () => m("## ", "") },
      list: { label: "•", run: () => m("- ", "") },
      link: { label: "🔗", run: () => m("[", "](https://)") }
    }, p = y(
      () => (n.toolbar ?? Object.keys(v)).filter((h) => h in v)
    );
    return (h, $) => (t(), a("div", zp, [
      o("div", Pp, [
        (t(!0), a(P, null, j(p.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          disabled: e.disabled,
          title: b,
          "aria-label": b,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => v[b].run()
        }, c(v[b].label), 9, Lp))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: $[0] || ($[0] = (b) => s.value = !s.value)
        }, " Preview ", 8, Op)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Vp)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: $[1] || ($[1] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, jp))
    ]));
  }
}), Tp = { class: "space-y-1" }, Ip = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Ep = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Fp = ["id", "value", "rows", "disabled"], Np = { class: "text-muted-foreground text-xs font-normal" }, Rp = {
  key: 0,
  class: "text-destructive text-xs"
}, Up = /* @__PURE__ */ L({
  __name: "PkCodeInput",
  props: {
    modelValue: { default: "" },
    language: { default: "plain" },
    rows: { default: 14 },
    disabled: { type: Boolean, default: !1 },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(!0), d = y(() => n.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), m = y(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function v(h) {
      r("update:modelValue", h.target.value);
    }
    function p(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const $ = h.target, b = $.selectionStart, C = $.selectionEnd, S = `${d.value.slice(0, b)}    ${d.value.slice(C)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        $.selectionStart = $.selectionEnd = b + 4;
      });
    }
    return (h, $) => (t(), a("div", Tp, [
      o("div", Ip, [
        o("div", Ep, [
          (t(!0), a(P, null, j(u.value, (b) => (t(), a("div", { key: b }, c(b), 1))), 128))
        ]),
        o("textarea", {
          id: e.id,
          ref_key: "area",
          ref: s,
          value: d.value,
          rows: e.rows,
          disabled: e.disabled,
          spellcheck: "false",
          autocapitalize: "off",
          autocomplete: "off",
          autocorrect: "off",
          class: "w-full resize-y bg-transparent px-3 py-2 leading-5 outline-none",
          onInput: v,
          onKeydown: p
        }, null, 40, Fp)
      ]),
      o("p", Np, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      m.value ? (t(), a("p", Rp, c(m.value), 1)) : k("", !0)
    ]));
  }
}), Hp = { class: "space-y-3" }, Kp = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, qp = { class: "text-sm font-medium" }, Gp = { class: "flex items-center gap-1" }, Wp = ["disabled", "onClick"], Zp = ["disabled", "onClick"], Jp = ["disabled", "onClick"], Yp = { class: "space-y-3 p-3" }, Qp = { class: "flex flex-wrap items-center gap-2" }, Xp = ["disabled", "onClick"], ev = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, c6 = /* @__PURE__ */ L({
  __name: "PkBuilder",
  props: {
    modelValue: { default: null },
    blocks: { default: () => [] },
    maxBlocks: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.modelValue ?? []), i = y(
      () => Object.fromEntries(n.blocks.map(($) => [$.type, $]))
    ), d = y(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u($) {
      r("update:modelValue", $);
    }
    function m($) {
      d.value || u([...s.value, { type: $, data: {} }]);
    }
    function v($) {
      u(s.value.filter((b, C) => C !== $));
    }
    function p($, b) {
      const C = $ + b;
      if (C < 0 || C >= s.value.length)
        return;
      const S = [...s.value], [B] = S.splice($, 1);
      S.splice(C, 0, B), u(S);
    }
    function h($, b, C) {
      u(
        s.value.map(
          (S, B) => B === $ ? { ...S, data: { ...S.data, [b]: C } } : S
        )
      );
    }
    return ($, b) => (t(), a("div", Hp, [
      (t(!0), a(P, null, j(s.value, (C, S) => (t(), a("div", {
        key: `${C.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Kp, [
          o("span", qp, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Gp, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (B) => p(S, -1)
            }, " ↑ ", 8, Wp),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (B) => p(S, 1)
            }, " ↓ ", 8, Zp),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (B) => v(S)
            }, " Remove ", 8, Jp)
          ])
        ]),
        o("div", Yp, [
          (t(!0), a(P, null, j(i.value[C.type]?.fields ?? [], (B) => (t(), D(Ge, {
            key: B.key,
            field: B,
            value: C.data[B.key] ?? null,
            error: e.errors?.[B.key],
            processing: e.disabled,
            onChange: (A) => h(S, B.key, A)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Qp, [
        (t(!0), a(P, null, j(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => m(C.type)
        }, " + " + c(C.label), 9, Xp))), 128)),
        d.value ? (t(), a("span", ev, c(e.maxBlocks) + " is the maximum here. ", 1)) : k("", !0)
      ])
    ]));
  }
}), tv = ["name", "value", "checked", "disabled", "onChange"], nv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, av = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkRadioGroup",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(i) {
      return n.modelValue != null && i.value == n.modelValue;
    }
    return (i, d) => (t(), a("div", {
      role: "radiogroup",
      class: _(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, j(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: _(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (m) => r("update:modelValue", u.value)
        }, null, 40, tv),
        H(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", nv, " Nothing to choose from yet. ")) : k("", !0)
    ], 2));
  }
}), lv = ["value", "checked", "disabled", "onChange"], ov = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, sv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkCheckboxList",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function i(m) {
      return s.value.some((v) => v == m.value);
    }
    function d(m) {
      r(
        "update:modelValue",
        i(m) ? s.value.filter((v) => v != m.value) : [...s.value, m.value]
      );
    }
    const u = y(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (m, v) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), a(P, null, j(e.options, (p) => (t(), a("label", {
        key: String(p.value),
        class: _(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => d(p)
        }, null, 40, lv),
        H(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", ov, " Nothing to choose from yet. ")) : k("", !0)
    ], 4));
  }
}), rv = { class: "flex flex-col gap-1.5" }, iv = ["aria-label", "onClick"], dv = ["placeholder", "disabled", "maxlength"], uv = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, cv = ["onClick"], fv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, mv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(""), i = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = y(() => i.value.length >= (n.field.max ?? 25)), u = y(
      () => (n.field.suggestions ?? []).filter(
        (h) => !i.value.some(($) => $.toLowerCase() === h.toLowerCase())
      )
    );
    function m(h) {
      const $ = h.trim().slice(0, n.field.maxLength ?? 40);
      if ($ === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((b) => b.toLowerCase() === $.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, $]), s.value = "";
    }
    function v(h) {
      r(
        "update:modelValue",
        i.value.filter(($, b) => b !== h)
      );
    }
    function p(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), m(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (h, $) => (t(), a("div", rv, [
      o("div", {
        class: _(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, j(i.value, (b, C) => (t(), a("span", {
          key: `${b}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          H(c(b) + " ", 1),
          e.disabled ? k("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${b}`,
            onClick: (S) => v(C)
          }, " × ", 8, iv))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (b) => s.value = b),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: $[1] || ($[1] = (b) => m(s.value))
        }, null, 40, dv), [
          [_e, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", uv, [
        $[2] || ($[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), a(P, null, j(u.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => m(b)
        }, c(b), 9, cv))), 128))
      ])) : k("", !0),
      d.value ? (t(), a("p", fv, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : k("", !0)
    ]));
  }
}), pv = 4.5, Cn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ea(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function jt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function qt(e) {
  const [l, n, r] = ea(e);
  return 0.2126 * jt(l) + 0.7152 * jt(n) + 0.0722 * jt(r);
}
function ta(e, l) {
  const n = qt(e), r = qt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function vv(e, l, n) {
  if (!Cn.test(e) || !Cn.test(l))
    return e;
  const r = qt(l) > 0.5, s = r ? 0 : 255;
  let i = ea(e);
  for (let d = 0; d <= 20; d++) {
    const u = gv(i);
    if (ta(u, l) >= n)
      return u;
    i = i.map((m) => m + (s - m) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function gv(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const hv = { class: "flex flex-col gap-2" }, bv = { class: "flex items-center gap-2" }, yv = {
  key: 0,
  class: "border-input size-9 shrink-0 rounded-md border",
  style: { "background-image": `linear-gradient(45deg, #ccc 25%, transparent 25%),
                        linear-gradient(-45deg, #ccc 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, #ccc 75%),
                        linear-gradient(-45deg, transparent 75%, #ccc 75%)`, "background-size": "8px 8px", "background-position": `0 0,
                        0 4px,
                        4px -4px,
                        -4px 0` },
  "aria-hidden": "true"
}, xv = ["value", "disabled", "aria-label"], kv = ["value", "disabled", "placeholder"], $v = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, wv = ["aria-label", "title", "onClick"], Cv = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Sv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof n.modelValue == "string" ? n.modelValue : ""), d = y(() => s.test(i.value));
    function u(b) {
      const C = b.trim();
      if (C === "")
        return "";
      const S = C.startsWith("#") ? C : `#${C}`;
      return s.test(S) ? S.toLowerCase() : C;
    }
    function m(b) {
      r("update:modelValue", u(b.target.value));
    }
    const v = y(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ta(i.value, n.field.contrastBackground)), p = y(() => n.field.contrastMinRatio ?? pv), h = y(() => v.value !== null && v.value < p.value);
    function $() {
      n.field.contrastBackground && r(
        "update:modelValue",
        vv(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (b, C) => (t(), a("div", hv, [
      o("div", bv, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, xv)) : (t(), a("span", yv)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: m
        }, null, 40, kv)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", $v, [
        (t(!0), a(P, null, j(e.field.presets, (S) => (t(), a("button", {
          key: S,
          type: "button",
          class: _(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (B) => r("update:modelValue", S.toLowerCase())
        }, null, 14, wv))), 128))
      ])) : k("", !0),
      h.value ? (t(), a("p", Cv, [
        o("span", null, " This fails contrast at " + c(v.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? k("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: $
        }, " Use a readable shade "))
      ])) : k("", !0)
    ]));
  }
}), Mv = ["aria-disabled"], Bv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkMap",
  props: {
    modelValue: { default: null },
    markers: { default: () => [] },
    center: { default: null },
    zoom: { default: 12 },
    height: { default: 280 },
    latKey: { default: "lat" },
    lngKey: { default: "lng" },
    disabled: { type: Boolean, default: !1 },
    pickable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null);
    let i = null, d = null, u = null;
    const m = y(() => {
      const $ = n.modelValue?.[n.latKey], b = n.modelValue?.[n.lngKey];
      return typeof $ == "number" && typeof b == "number" ? { lat: $, lng: b } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const $ = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = $, i = $.map(s.value).setView([m.value.lat, m.value.lng], n.zoom), $.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), h(), n.pickable && !n.disabled && i.on("click", (b) => {
        r("update:modelValue", {
          [n.latKey]: Number(b.latlng.lat.toFixed(6)),
          [n.lngKey]: Number(b.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const $ of n.markers) {
          const b = u.circleMarker([$.lat, $.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          ($.label || $.popup) && b.bindPopup(`<strong>${$.label ?? ""}</strong>${$.popup ? `<br>${$.popup}` : ""}`);
        }
    }
    function h() {
      if (!i || !u)
        return;
      const $ = n.modelValue?.[n.latKey], b = n.modelValue?.[n.lngKey];
      if (typeof $ != "number" || typeof b != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([$, b]) : d = u.circleMarker([$, b], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([$, b], i.getZoom());
    }
    return ge(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), fe(
      () => n.modelValue,
      () => h(),
      { deep: !0 }
    ), ($, b) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Mv));
  }
}), Av = { class: "flex flex-col gap-2" }, _v = { class: "text-muted-foreground text-xs font-normal" }, zv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.modelValue && typeof n.modelValue == "object" ? n.modelValue : null), i = y(() => n.field.latKey ?? "lat"), d = y(() => n.field.lngKey ?? "lng");
    return (u, m) => (t(), a("div", Av, [
      E(Bv, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": m[0] || (m[0] = (v) => r("update:modelValue", v))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", _v, [
        H(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), a(P, { key: 0 }, [
          H(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : k("", !0)
      ])
    ]));
  }
}), Pv = { class: "flex flex-col gap-2" }, Lv = ["width", "height"], Ov = ["value", "disabled"], jv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Vv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkQrCode",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = y(() => {
      if (n.field.from) {
        const m = n.values?.[n.field.from];
        return m == null ? "" : String(m);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), d = y(() => n.field.size ?? 160);
    async function u() {
      if (!s.value)
        return;
      const m = i.value;
      if (m === "") {
        s.value.getContext("2d")?.clearRect(0, 0, d.value, d.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, m, {
        width: d.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return ge(() => {
      u();
    }), fe(i, () => {
      u();
    }), (m, v) => (t(), a("div", Pv, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Lv),
      e.field.from ? (t(), a("p", jv, "From " + c(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, Ov))
    ]));
  }
}), Dv = { class: "flex flex-col gap-2" }, Tv = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Iv = ["aria-label"], Ev = {
  key: 0,
  class: "text-destructive text-xs"
}, Fv = ["value", "disabled"], Nv = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Rv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkBarcode",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(null), d = y(() => {
      if (n.field.from) {
        const v = n.values?.[n.field.from];
        return v == null ? "" : String(v);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), u = y(() => (n.field.format ?? "CODE128").toUpperCase());
    async function m() {
      if (!s.value)
        return;
      const v = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (v !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, v, {
            format: u.value,
            height: n.field.height ?? 80,
            width: n.field.width ?? 2,
            displayValue: n.field.displayValue !== !1,
            margin: 8,
            background: "#ffffff",
            lineColor: "#0f172a",
            fontSize: 14
          });
        } catch (p) {
          i.value = p instanceof Error ? p.message : "Could not render barcode";
        }
    }
    return ge(() => {
      m();
    }), fe([d, u], () => {
      m();
    }), (v, p) => (t(), a("div", Dv, [
      o("div", Tv, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Iv))
      ]),
      i.value ? (t(), a("p", Ev, c(i.value), 1)) : k("", !0),
      e.field.from ? (t(), a("p", Nv, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Fv))
    ]));
  }
}), Uv = { class: "mr-2 inline-block w-3 opacity-60" }, Hv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Kv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkDiff",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    values: { default: () => ({}) }
  },
  setup(e) {
    const l = e;
    function n(d) {
      if (d == null)
        return "";
      if (typeof d == "string")
        return d;
      if (typeof d == "object")
        try {
          return JSON.stringify(d, null, 2);
        } catch {
          return String(d);
        }
      return String(d);
    }
    const r = y(() => {
      if (l.field.originalKey)
        return n(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return n(d?.original);
    }), s = y(() => {
      if (l.field.modifiedKey)
        return n(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return n(d?.modified);
    }), i = y(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), m = Math.max(d.length, u.length), v = [];
      for (let p = 0; p < m; p++) {
        const h = d[p], $ = u[p];
        if (h === $) {
          h !== void 0 && v.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && v.push({ kind: "del", text: h }), $ !== void 0 && v.push({ kind: "add", text: $ });
      }
      return v;
    });
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(P, null, j(i.value, (m, v) => (t(), a("div", {
        key: v,
        class: _(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": m.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": m.kind === "add",
          "text-muted-foreground": m.kind === "same"
        }])
      }, [
        o("span", Uv, c(m.kind === "add" ? "+" : m.kind === "del" ? "-" : " "), 1),
        H(" " + c(m.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", Hv, "No differences.")) : k("", !0)
    ], 4));
  }
}), qv = { class: "flex flex-col gap-3" }, Gv = { class: "flex items-center justify-between gap-2" }, Wv = { class: "text-sm font-medium" }, Zv = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Jv = { class: "grid grid-cols-7 gap-1" }, Yv = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Qv = ["title"], f6 = /* @__PURE__ */ L({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = q(/* @__PURE__ */ new Date()), r = y(() => n.value.getFullYear()), s = y(() => n.value.getMonth()), i = y(
      () => n.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const $ = p.get(h.date) ?? [];
        $.push(h), p.set(h.date, $);
      }
      return p;
    }), u = y(() => {
      const h = new Date(r.value, s.value, 1).getDay(), $ = new Date(r.value, s.value + 1, 0).getDate(), b = [];
      for (let C = 0; C < h; C++)
        b.push({ day: null, key: `pad-${C}`, events: [] });
      for (let C = 1; C <= $; C++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(C).padStart(2, "0")}`;
        b.push({ day: C, key: S, events: d.value.get(S) ?? [] });
      }
      return b;
    });
    function m() {
      n.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      n.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), a("div", qv, [
      o("div", Gv, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: m
        }, " Prev "),
        o("p", Wv, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", Zv, [
        (t(), a(P, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ($) => o("span", { key: $ }, c($), 1)), 64))
      ]),
      o("div", Jv, [
        (t(!0), a(P, null, j(u.value, ($) => (t(), a("div", {
          key: $.key,
          class: _(["border-border/60 min-h-16 rounded-md border p-1", $.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          $.day ? (t(), a("p", Yv, c($.day), 1)) : k("", !0),
          (t(!0), a(P, null, j($.events.slice(0, 3), (b, C) => (t(), a("p", {
            key: `${$.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: b.label
          }, c(b.label), 9, Qv))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Xv = { class: "flex items-center gap-3" }, eg = ["min", "max", "step", "value", "disabled", "aria-label"], tg = { class: "flex shrink-0 items-center gap-1" }, ng = ["min", "max", "step", "value", "disabled"], ag = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, lg = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.field.min ?? 0), i = y(() => n.field.max ?? 100), d = y(() => n.field.step ?? 1), u = y(() => {
      const p = Number(n.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), m = y(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function v(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), a("div", Xv, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = ($) => v($.target.value))
      }, null, 40, eg),
      o("div", tg, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: m.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = ($) => v($.target.value))
        }, null, 40, ng),
        e.field.unit ? (t(), a("span", ag, c(e.field.unit), 1)) : k("", !0)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ new Map();
function Vt(e, l) {
  pt.set(e, l);
}
function og(e) {
  return pt.get(e);
}
function m6(e) {
  return pt.has(e);
}
function sg() {
  return [...pt.keys()].sort();
}
function p6() {
  pt.clear();
}
const rg = ["name", "value", "checked", "disabled", "onChange"], ig = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, dg = { class: "whitespace-nowrap" }, ug = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, cg = ["name", "value", "checked", "disabled", "onChange"], fg = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, mg = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, pg = { class: "text-center text-xs font-medium" }, vg = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, gg = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, hg = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkVisualSelect",
  props: {
    field: {},
    modelValue: {},
    options: { default: () => [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.field.preview ? og(n.field.preview) : void 0
    ), i = y(() => !!n.field.preview && !s.value), d = y(() => n.field.layout === "segmented"), u = y(() => {
      switch (n.field.columns ?? 3) {
        case 1:
          return "grid-cols-1";
        case 2:
          return "grid-cols-1 sm:grid-cols-2";
        case 4:
          return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";
        case 5:
          return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
        case 6:
          return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";
        default:
          return "grid-cols-2 sm:grid-cols-3";
      }
    });
    function m(v) {
      return n.modelValue != null && v.value == n.modelValue;
    }
    return (v, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: _(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: _(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          m(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: ($) => r("update:modelValue", h.value)
        }, null, 40, rg),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", ig, [
          (t(), D(Ae(s.value), {
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : k("", !0),
        o("span", dg, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", ug, " Nothing to choose from yet. ")) : k("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: _(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: _(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          m(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: m(h),
          disabled: e.disabled,
          onChange: ($) => r("update:modelValue", h.value)
        }, null, 40, cg),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", fg, [
          s.value ? (t(), D(Ae(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: m(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", mg, " no preview ")) : k("", !0)
        ]),
        o("span", pg, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", vg, " Nothing to choose from yet. ")) : k("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", gg, [
        p[2] || (p[2] = H(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        H(". Registered: " + c(x(sg)().join(", ") || "none") + ". ", 1)
      ])) : k("", !0)
    ], 2));
  }
}), bg = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, yg = /* @__PURE__ */ L({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", bg, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), xg = { class: "flex flex-col items-center gap-1 text-center" }, kg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, na = /* @__PURE__ */ L({
  __name: "PkCodeBox",
  props: {
    code: {},
    caption: { default: "" },
    style: { default: "dashed" },
    accent: { default: "#0f172a" },
    mono: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = y(() => l.mono ? "#000000" : l.accent), r = y(() => {
      switch (l.style) {
        case "solid":
          return "border-2 border-solid rounded-md";
        case "ticket":
          return "border-2 border-solid rounded-none [clip-path:polygon(0_14%,6%_0,94%_0,100%_14%,100%_86%,94%_100%,6%_100%,0_86%)]";
        case "pill":
          return "border rounded-full";
        case "stamp":
          return "border-4 border-double rounded-sm";
        case "minimal":
          return "border-0 border-b-2 rounded-none";
        default:
          return "border-2 border-dashed rounded-md";
      }
    });
    return (s, i) => (t(), a("div", xg, [
      o("div", {
        class: _(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", kg, c(e.caption), 1)) : k("", !0)
    ]));
  }
}), $g = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, wg = { class: "flex items-center gap-3" }, Cg = ["src"], Sg = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Mg = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Bg = {
  key: 0,
  class: "text-right text-sm"
}, Ag = { class: "text-neutral-500" }, _g = { class: "tabular-nums" }, zg = { key: 1 }, Pg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Lg = { class: "mt-2 font-medium" }, Og = { key: 2 }, jg = { class: "w-full text-sm" }, Vg = { class: "w-full py-3 pr-2" }, Dg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Tg = { key: 0 }, Ig = ["colspan"], Eg = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Fg = { class: "w-64 text-sm" }, Ng = { class: "tabular-nums" }, Rg = {
  key: 3,
  class: "py-2"
}, Ug = { key: 4 }, Hg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Kg = { class: "mt-2 flex flex-col gap-1 text-sm" }, qg = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Gg = { key: 0 }, Wg = {
  key: 1,
  class: "mt-1"
}, Zg = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Jg = /* @__PURE__ */ L({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function n() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
    }
    function r(m) {
      return m.meta ?? [];
    }
    function s(m) {
      return m.rows ?? [];
    }
    function i(m) {
      return m.totals ?? [];
    }
    function d(m) {
      return m ?? [];
    }
    function u(m) {
      return m ?? "";
    }
    return (m, v) => (t(), a("article", $g, [
      o("div", wg, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Cg)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, j(e.document.blocks, (p, h) => (t(), a(P, { key: h }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: n() })
            }, c(p.title), 5),
            p.subtitle ? (t(), a("p", Sg, c(p.subtitle), 1)) : k("", !0),
            p.reference ? (t(), a("p", Mg, c(p.reference), 1)) : k("", !0)
          ]),
          r(p).length ? (t(), a("dl", Bg, [
            (t(!0), a(P, null, j(r(p), ($, b) => (t(), a("div", {
              key: b,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Ag, c($.label), 1),
              o("dd", _g, c($.value), 1)
            ]))), 128))
          ])) : k("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", zg, [
          o("h2", Pg, c(p.heading), 1),
          o("p", Lg, c(p.name), 1),
          (t(!0), a(P, null, j(d(p.lines), ($, b) => (t(), a("p", {
            key: b,
            class: "text-sm text-neutral-600"
          }, c($), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Og, [
          o("table", jg, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: n() })
              }, [
                (t(!0), a(P, null, j(d(p.columns), ($, b) => (t(), a("th", {
                  key: b,
                  class: _(["pb-2 font-medium", b > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c($), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, j(s(p), ($, b) => (t(), a("tr", {
                key: b,
                class: "border-b border-neutral-200"
              }, [
                o("td", Vg, [
                  o("p", null, c($.description), 1),
                  $.detail ? (t(), a("p", Dg, c($.detail), 1)) : k("", !0)
                ]),
                (t(!0), a(P, null, j($.cells, (C, S) => (t(), a("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Tg, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Ig)
              ])) : k("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Eg, [
            o("dl", Fg, [
              (t(!0), a(P, null, j(i(p), ($, b) => (t(), a("div", {
                key: b,
                class: _([
                  "flex justify-between py-1",
                  $.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se($.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: _($.strong ? "" : "text-neutral-600")
                }, c($.label), 3),
                o("dd", Ng, c($.value), 1)
              ], 6))), 128))
            ])
          ])) : k("", !0)
        ])) : p.type === "code" ? (t(), a("section", Rg, [
          E(na, {
            code: u(p.code),
            caption: u(p.caption),
            style: se(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Ug, [
          o("h2", Hg, c(p.heading), 1),
          o("ol", Kg, [
            (t(!0), a(P, null, j(d(p.items), ($, b) => (t(), a("li", {
              key: b,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: n() })
              }, c(b + 1) + ".", 5),
              o("span", null, c($), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: _(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: n() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), a("footer", qg, [
          p.text ? (t(), a("p", Gg, c(p.text), 1)) : k("", !0),
          d(p.contacts).length ? (t(), a("p", Wg, c(d(p.contacts).join(" · ")), 1)) : k("", !0)
        ])) : (t(), a("p", Zg, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Yg = ["aria-label", "title"], Qg = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Xg = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, v6 = /* @__PURE__ */ L({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = Zn(), r = y(() => l.value.theme === "dark");
    function s() {
      n({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), a("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), a("svg", Qg, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", Xg))
      ]))
    ], 8, Yg));
  }
}), eh = ["width", "height"], th = { key: 0 }, nh = ["x1", "x2", "y1", "y2"], ah = ["x", "y"], lh = ["x1", "x2", "y1", "y2"], oh = ["x", "y"], sh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], rh = ["x", "y", "width", "height", "fill", "fill-opacity"], ih = ["x", "y"], dh = ["x", "y"], uh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, ch = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, fh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, mh = { class: "text-xs font-semibold tabular-nums" }, ph = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, vh = { class: "text-muted-foreground" }, Sn = 5.6, g6 = /* @__PURE__ */ L({
  __name: "BarChart",
  props: {
    data: {},
    series: {},
    height: { default: 220 },
    orientation: { default: "vertical" },
    stacked: { type: Boolean, default: !1 },
    format: {},
    showAxis: { type: Boolean, default: !0 },
    showLegend: { type: Boolean, default: !1 },
    thresholds: { default: null },
    aboveColor: { default: "var(--chart-2)" },
    maxValue: { default: null }
  },
  setup(e) {
    const l = e, n = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(w) {
      return n[w] ?? w;
    }
    function s(w, I) {
      if (!l.thresholds?.length)
        return I;
      const V = l.thresholds.find((Q) => w < Q.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = q(null), d = q(560), u = q(null);
    let m = null;
    ge(() => {
      m = new ResizeObserver((w) => {
        d.value = Math.max(160, w[0].contentRect.width);
      }), i.value && m.observe(i.value);
    }), ke(() => m?.disconnect());
    const v = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, V) => ({
      ...I,
      color: I.color ?? v[V % v.length]
    }))), h = y(() => p.value[0]?.points.map((w) => w.label) ?? []), $ = y(() => h.value.length), b = y(() => l.orientation === "horizontal"), C = y(() => Math.max(0, ...h.value.map((w) => w.length))), S = y(() => {
      if (!b.value)
        return l.showAxis ? 44 : 8;
      const w = C.value * Sn + 16;
      return Math.round(Math.min(Math.max(60, w), d.value * 0.4));
    }), B = y(() => Math.max(4, Math.floor((S.value - 16) / Sn)));
    function A(w) {
      return w.length <= B.value ? w : `${w.slice(0, B.value - 1)}…`;
    }
    const M = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), f = y(() => ({
      w: Math.max(1, d.value - M.value.left - M.value.right),
      h: Math.max(1, l.height - M.value.top - M.value.bottom)
    })), g = (w) => l.format ? l.format(w) : z(w);
    function z(w) {
      return Math.abs(w) >= 1e6 ? `${(w / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(w) >= 1e3 ? `${(w / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(w * 100) / 100);
    }
    const T = y(() => {
      const w = h.value.map(
        (he, ye) => l.stacked ? p.value.reduce((oe, ee) => oe + Math.max(0, ee.points[ye]?.value ?? 0), 0) : Math.max(...p.value.map((oe) => oe.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const I = Math.max(...w, 0);
      if (I <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((he) => I <= he * V) ?? 10) * V;
    }), F = y(
      () => (b.value ? f.value.h : f.value.w) / Math.max(1, $.value)
    ), Y = y(() => F.value * 0.68), N = y(
      () => l.stacked || p.value.length <= 1 ? Y.value : Y.value / p.value.length
    ), W = y(() => {
      const w = [], I = new Array($.value).fill(0);
      return p.value.forEach((V, Q) => {
        V.points.forEach((he, ye) => {
          const ee = Math.max(0, he.value) / T.value * (b.value ? f.value.w : f.value.h), ae = (b.value ? M.value.top : M.value.left) + ye * F.value + (F.value - Y.value) / 2, Ce = l.stacked ? 0 : Q * N.value;
          w.push(
            b.value ? {
              x: M.value.left + I[ye],
              y: ae + Ce,
              w: ee,
              h: Math.max(0, N.value - 2),
              color: s(he.value, V.color),
              label: he.label,
              name: V.name,
              value: he.value,
              index: ye
            } : {
              x: ae + Ce,
              y: M.value.top + f.value.h - ee - I[ye],
              w: Math.max(0, N.value - 2),
              h: ee,
              color: s(he.value, V.color),
              label: he.label,
              name: V.name,
              value: he.value,
              index: ye
            }
          ), l.stacked && (I[ye] += ee);
        });
      }), w;
    }), Z = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((w) => ({
        value: T.value * (b.value ? w : 1 - w),
        x: M.value.left + f.value.w * w,
        y: M.value.top + f.value.h * w
      }))
    ), J = y(() => Math.max(1, Math.ceil($.value / (b.value ? 14 : 10))));
    function K(w) {
      return w === $.value - 1 || w % J.value === 0;
    }
    function U(w) {
      return (b.value ? M.value.top : M.value.left) + w * F.value + F.value / 2;
    }
    const R = y(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: p.value.map((w) => ({
        name: w.name,
        color: w.color,
        value: w.points[u.value]?.value ?? 0
      }))
    });
    return (w, I) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      $.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: I[0] || (I[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", th, [
            b.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: M.value.top,
                y2: M.value.top + f.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, nh))), 128)),
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(z(V.value)), 9, ah))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.y}`,
                x1: M.value.left,
                x2: d.value - M.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, lh))), 128)),
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.y}`,
                x: M.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(z(V.value)), 9, oh))), 128))
            ], 64))
          ])) : k("", !0),
          (t(!0), a(P, null, j(h.value, (V, Q) => (t(), a("rect", {
            key: `hit-${Q}`,
            x: b.value ? M.value.left : M.value.left + Q * F.value,
            y: b.value ? M.value.top + Q * F.value : M.value.top,
            width: b.value ? f.value.w : F.value,
            height: b.value ? F.value : f.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Q ? 0.4 : 0,
            onMouseenter: (he) => u.value = Q
          }, null, 40, sh))), 128)),
          (t(!0), a(P, null, j(W.value, (V, Q) => (t(), a("rect", {
            key: `b-${Q}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": u.value === null || u.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, rh))), 128)),
          b.value ? (t(!0), a(P, { key: 1 }, j(h.value, (V, Q) => pe((t(), a("text", {
            key: `c-${Q}`,
            x: M.value.left - 8,
            y: U(Q) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            H(c(A(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, ih)), [
            [Ke, K(Q)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, j(h.value, (V, Q) => pe((t(), a("text", {
            key: `c-${Q}`,
            x: U(Q),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, dh)), [
            [Ke, K(Q)]
          ])), 128))
        ], 40, eh)),
        R.value ? (t(), a("div", uh, [
          o("p", ch, c(R.value.label), 1),
          (t(!0), a(P, null, j(R.value.rows, (V, Q) => (t(), a("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", fh, c(V.name || "Value"), 1),
            o("span", mh, c(g(V.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", ph, [
          (t(!0), a(P, null, j(p.value, (V, Q) => (t(), a("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", vh, c(V.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), gh = ["width", "height"], hh = ["id"], bh = ["stop-color"], yh = ["stop-color"], xh = { key: 0 }, kh = ["x1", "x2", "y1", "y2"], $h = ["x", "y"], wh = ["x", "y"], Ch = ["x1", "x2", "y1", "y2"], Sh = ["d", "fill"], Mh = ["d", "stroke", "stroke-dasharray"], Bh = ["cx", "cy", "fill"], Ah = { key: 1 }, _h = ["x1", "x2", "y1", "y2"], zh = ["cx", "cy", "fill"], Ph = ["x", "y"], Lh = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Oh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, jh = { class: "text-xs font-semibold tabular-nums" }, Vh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Dh = { class: "text-muted-foreground" }, Th = /* @__PURE__ */ L({
  __name: "LineChart",
  props: {
    data: {},
    series: {},
    height: { default: 220 },
    type: { default: "area" },
    format: {},
    showAxis: { type: Boolean, default: !0 },
    showLegend: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = y(() => v.value.some((w) => w.axis === "right")), r = q(null), s = q(560), i = q(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((w) => {
        s.value = Math.max(160, w[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], m = Math.random().toString(36).slice(2, 9), v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, V) => ({
      ...I,
      color: I.color ?? u[V % u.length]
    }))), p = y(() => v.value[0]?.points.map((w) => w.label) ?? []), h = y(() => p.value.length), $ = y(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), b = (w) => l.format ? l.format(w) : C(w);
    function C(w) {
      return Math.abs(w) >= 1e6 ? `${(w / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(w) >= 1e3 ? `${(w / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(w * 100) / 100);
    }
    function S(w) {
      const I = Math.max(...w, 0);
      if (I <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((he) => I <= he * V) ?? 10) * V;
    }
    const B = y(
      () => S(
        v.value.filter((w) => w.axis !== "right").flatMap((w) => w.points.map((I) => I.value))
      )
    ), A = y(
      () => S(
        v.value.filter((w) => w.axis === "right").flatMap((w) => w.points.map((I) => I.value))
      )
    ), M = y(() => ({
      w: Math.max(1, s.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function f(w) {
      return $.value.left + (h.value <= 1 ? 0 : w / (h.value - 1) * M.value.w);
    }
    function g(w, I = "left") {
      const V = I === "right" ? A.value : B.value;
      return $.value.top + M.value.h - w / V * M.value.h;
    }
    const z = y(
      () => v.value.map((w) => {
        const I = w.points.map((Q, he) => ({
          ...Q,
          x: f(he),
          y: g(Q.value, w.axis ?? "left")
        })), V = w.stepped ? T(I) : F(I);
        return { ...w, pts: I, line: V, area: Y(V, I) };
      })
    );
    function T(w) {
      if (w.length === 0)
        return "";
      let I = `M${w[0].x.toFixed(2)},${w[0].y.toFixed(2)}`;
      for (let V = 1; V < w.length; V++)
        I += ` L${w[V].x.toFixed(2)},${w[V - 1].y.toFixed(2)} L${w[V].x.toFixed(2)},${w[V].y.toFixed(2)}`;
      return I;
    }
    function F(w) {
      const I = w.length;
      if (I === 0)
        return "";
      if (I === 1)
        return `M${w[0].x},${w[0].y}`;
      const V = [], Q = [];
      for (let oe = 0; oe < I - 1; oe++)
        V[oe] = w[oe + 1].x - w[oe].x, Q[oe] = V[oe] === 0 ? 0 : (w[oe + 1].y - w[oe].y) / V[oe];
      const he = [Q[0]];
      for (let oe = 1; oe < I - 1; oe++)
        if (Q[oe - 1] * Q[oe] <= 0)
          he[oe] = 0;
        else {
          const ee = 2 * V[oe] + V[oe - 1], ae = V[oe] + 2 * V[oe - 1];
          he[oe] = (ee + ae) / (ee / Q[oe - 1] + ae / Q[oe]);
        }
      he[I - 1] = Q[I - 2];
      let ye = `M${w[0].x.toFixed(2)},${w[0].y.toFixed(2)}`;
      for (let oe = 0; oe < I - 1; oe++) {
        const ee = V[oe] / 3;
        ye += ` C${(w[oe].x + ee).toFixed(2)},${(w[oe].y + he[oe] * ee).toFixed(2)} ${(w[oe + 1].x - ee).toFixed(2)},${(w[oe + 1].y - he[oe + 1] * ee).toFixed(2)} ${w[oe + 1].x.toFixed(2)},${w[oe + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function Y(w, I) {
      if (I.length === 0)
        return "";
      const V = $.value.top + M.value.h;
      return `${w} L${I[I.length - 1].x.toFixed(2)},${V} L${I[0].x.toFixed(2)},${V} Z`;
    }
    const N = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((w) => ({
        y: $.value.top + M.value.h * w,
        value: B.value * (1 - w)
      }))
    ), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((w) => ({
        y: $.value.top + M.value.h * w,
        value: A.value * (1 - w)
      }))
    ), Z = y(() => Math.max(1, Math.ceil(h.value / 8)));
    function J(w) {
      return w === h.value - 1 || w % Z.value === 0;
    }
    function K(w) {
      const I = w.currentTarget.getBoundingClientRect(), V = w.clientX - I.left - $.value.left, Q = h.value <= 1 ? 1 : M.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / Q)));
    }
    const U = y(() => {
      if (i.value === null || h.value === 0)
        return null;
      const w = i.value;
      return {
        i: w,
        x: f(w),
        label: p.value[w],
        rows: z.value.map((I) => ({
          name: I.name,
          color: I.color,
          value: I.points[w]?.value ?? 0,
          y: I.pts[w]?.y ?? 0
        }))
      };
    }), R = y(() => {
      if (!U.value)
        return {};
      const w = U.value.x > s.value * 0.6;
      return {
        left: `${U.value.x}px`,
        top: "8px",
        transform: w ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (w, I) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: K,
          onMouseleave: I[0] || (I[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(P, null, j(z.value, (V, Q) => (t(), a("linearGradient", {
              id: `pk-fill-${x(m)}-${Q}`,
              key: Q,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, bh),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, yh)
            ], 8, hh))), 128))
          ]),
          e.showAxis ? (t(), a("g", xh, [
            (t(!0), a(P, null, j(N.value, (V) => (t(), a("line", {
              key: V.y,
              x1: $.value.left,
              x2: s.value - $.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, kh))), 128)),
            (t(!0), a(P, null, j(N.value, (V) => (t(), a("text", {
              key: `t-${V.y}`,
              x: $.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, $h))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, j(W.value, (V) => (t(), a("text", {
              key: `rt-${V.y}`,
              x: s.value - $.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, wh))), 128)) : k("", !0)
          ])) : k("", !0),
          (t(!0), a(P, null, j(p.value, (V, Q) => pe((t(), a("line", {
            key: `v-${Q}`,
            x1: f(Q),
            x2: f(Q),
            y1: $.value.top,
            y2: $.value.top + M.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Ch)), [
            [Ke, J(Q)]
          ])), 128)),
          (t(!0), a(P, null, j(z.value, (V, Q) => (t(), a("g", {
            key: `s-${Q}`
          }, [
            V.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${x(m)}-${Q})`
            }, null, 8, Sh)) : k("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Mh),
            V.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Bh)) : k("", !0)
          ]))), 128)),
          U.value ? (t(), a("g", Ah, [
            o("line", {
              x1: U.value.x,
              x2: U.value.x,
              y1: $.value.top,
              y2: $.value.top + M.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, _h),
            (t(!0), a(P, null, j(U.value.rows, (V, Q) => (t(), a("circle", {
              key: `d-${Q}`,
              cx: U.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, zh))), 128))
          ])) : k("", !0),
          (t(!0), a(P, null, j(p.value, (V, Q) => pe((t(), a("text", {
            key: `x-${Q}`,
            x: f(Q),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, Ph)), [
            [Ke, J(Q)]
          ])), 128))
        ], 40, gh)),
        U.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(R.value)
        }, [
          o("p", Lh, c(U.value.label), 1),
          (t(!0), a(P, null, j(U.value.rows, (V, Q) => (t(), a("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Oh, c(V.name || "Value"), 1),
            o("span", jh, c(b(V.value)), 1)
          ]))), 128))
        ], 4)) : k("", !0),
        e.showLegend && v.value.length > 1 ? (t(), a("div", Vh, [
          (t(!0), a(P, null, j(z.value, (V, Q) => (t(), a("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Dh, c(V.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Ih = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Eh = { class: "text-muted-foreground text-[11px] capitalize" }, Fh = { class: "text-sm font-semibold tabular-nums" }, Nh = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, vt = /* @__PURE__ */ L({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Ih, [
      o("p", Eh, c(e.label), 1),
      o("p", Fh, [
        H(c(e.value) + " ", 1),
        e.share ? (t(), a("span", Nh, " (" + c(e.share) + ") ", 1)) : k("", !0)
      ])
    ]));
  }
}), Rh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Uh = ["width", "height", "viewBox", "aria-label"], Hh = ["d", "fill", "fill-opacity", "onMouseenter"], Kh = ["x", "y"], qh = ["x", "y"], Gh = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Wh = ["onMouseenter"], Zh = { class: "min-w-0 flex-1 truncate capitalize" }, Jh = { class: "tabular-nums font-medium" }, Yh = { class: "text-muted-foreground w-9 text-right tabular-nums" }, h6 = /* @__PURE__ */ L({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = y(() => l.data.reduce((B, A) => B + A.value, 0)), s = q(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function m(B) {
      return n[B % n.length];
    }
    function v(B) {
      return 1 - Math.min(0.55, Math.floor(B / n.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const B = i.value / 2;
      let A = -Math.PI / 2;
      return l.data.map((M, f) => {
        const g = M.value / r.value, z = g * Math.PI * 2, T = A, F = A + z;
        return A = F, {
          ...M,
          share: g,
          colour: m(f),
          opacity: v(f),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: g >= 0.9999 ? b(B) : $(B, T, F, d.value, u.value)
        };
      });
    });
    function h(B, A, M) {
      return `${(B + Math.cos(A) * M).toFixed(2)},${(B + Math.sin(A) * M).toFixed(2)}`;
    }
    function $(B, A, M, f, g) {
      const z = M - A > Math.PI ? 1 : 0;
      return g <= 0 ? `M${B},${B} L${h(B, A, f)} A${f},${f} 0 ${z} 1 ${h(B, M, f)} Z` : [
        `M${h(B, A, f)}`,
        `A${f},${f} 0 ${z} 1 ${h(B, M, f)}`,
        `L${h(B, M, g)}`,
        `A${g},${g} 0 ${z} 0 ${h(B, A, g)}`,
        "Z"
      ].join(" ");
    }
    function b(B) {
      const A = d.value, M = u.value, f = [
        `M${B - A},${B}`,
        `A${A},${A} 0 1 1 ${B + A},${B}`,
        `A${A},${A} 0 1 1 ${B - A},${B}`,
        "Z"
      ];
      return M <= 0 ? f.join(" ") : [
        ...f,
        `M${B - M},${B}`,
        `A${M},${M} 0 1 0 ${B + M},${B}`,
        `A${M},${M} 0 1 0 ${B - M},${B}`,
        "Z"
      ].join(" ");
    }
    const C = (B) => l.format ? l.format(B) : new Intl.NumberFormat().format(B), S = (B) => `${(B * 100).toFixed(B < 0.01 ? 2 : 0)}%`;
    return (B, A) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Rh, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), a(P, null, j(p.value, (M, f) => (t(), a("path", {
          key: f,
          d: M.path,
          fill: M.colour,
          "fill-opacity": s.value === null || s.value === f ? M.opacity : M.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (g) => s.value = f,
          onMouseleave: A[0] || (A[0] = (g) => s.value = null)
        }, null, 40, Hh))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : p.value[s.value].value)), 9, Kh),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, qh)
        ], 64)) : k("", !0)
      ], 8, Uh)),
      o("ul", Gh, [
        (t(!0), a(P, null, j(p.value, (M, f) => (t(), a("li", {
          key: f,
          class: _(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === f ? "bg-muted" : ""]),
          onMouseenter: (g) => s.value = f,
          onMouseleave: A[1] || (A[1] = (g) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: M.colour, opacity: M.opacity })
          }, null, 4),
          o("span", Zh, c(M.label), 1),
          o("span", Jh, c(C(M.value)), 1),
          o("span", Yh, c(S(M.share)), 1)
        ], 42, Wh))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(vt, {
        key: 0,
        label: p.value[s.value].label,
        value: C(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), Qh = ["width", "height", "viewBox", "aria-label"], Xh = { class: "text-border" }, e1 = ["x1", "x2", "y1", "y2", "stroke-dasharray"], t1 = { class: "fill-muted-foreground text-[10px]" }, n1 = ["x", "y"], a1 = ["x", "y"], l1 = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], o1 = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, b6 = /* @__PURE__ */ L({
  __name: "ScatterChart",
  props: {
    data: {},
    series: {},
    height: { default: 260 },
    xLabel: {},
    yLabel: {},
    formatX: {},
    formatY: {},
    showLegend: { type: Boolean, default: !1 },
    maxRadius: { default: 22 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = q(null), s = q(560), i = q(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((Z) => {
        const J = Z[0]?.contentRect.width ?? 0;
        J > 0 && (s.value = J);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), m = (Z, J) => J.color ?? n[Z % n.length], v = y(() => u.value.flatMap((Z) => Z.points)), p = y(() => v.value.some((Z) => typeof Z.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, $ = y(() => Math.max(10, s.value - h.left - h.right)), b = y(() => Math.max(10, l.height - h.top - h.bottom));
    function C(Z) {
      if (Z.length === 0)
        return [0, 1];
      const J = Math.min(...Z), K = Math.max(...Z), U = K - J || Math.abs(K) || 1;
      return [J - U * 0.08, K + U * 0.08];
    }
    const S = y(() => C(v.value.map((Z) => Z.x))), B = y(() => C(v.value.map((Z) => Z.y))), A = (Z) => {
      const [J, K] = S.value;
      return h.left + (Z - J) / (K - J) * $.value;
    }, M = (Z) => {
      const [J, K] = B.value;
      return h.top + b.value - (Z - J) / (K - J) * b.value;
    }, f = y(() => Math.max(...v.value.map((Z) => Z.r ?? 0), 0));
    function g(Z) {
      if (!p.value || !f.value)
        return 4;
      const J = Math.max(0, Z.r ?? 0) / f.value;
      return 3 + Math.sqrt(J) * (l.maxRadius - 3);
    }
    function z([Z, J]) {
      return Array.from({ length: 5 }, (K, U) => Z + (J - Z) / 4 * U);
    }
    const T = y(() => z(S.value)), F = y(() => z(B.value)), Y = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), N = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), W = y(() => {
      if (!i.value)
        return null;
      const Z = u.value[i.value.s], J = Z?.points[i.value.p];
      return J ? { series: Z, point: J } : null;
    });
    return (Z, J) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "w-full"
    }, [
      (t(), a("svg", {
        width: s.value,
        height: e.height,
        viewBox: `0 0 ${s.value} ${e.height}`,
        class: "overflow-visible",
        role: "img",
        "aria-label": p.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", Xh, [
          (t(!0), a(P, null, j(F.value, (K, U) => (t(), a("line", {
            key: `gy-${U}`,
            x1: h.left,
            x2: h.left + $.value,
            y1: M(K),
            y2: M(K),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": U === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, e1))), 128))
        ]),
        o("g", t1, [
          (t(!0), a(P, null, j(F.value, (K, U) => (t(), a("text", {
            key: `ty-${U}`,
            x: h.left - 8,
            y: M(K) + 3,
            "text-anchor": "end"
          }, c(N(K)), 9, n1))), 128)),
          (t(!0), a(P, null, j(T.value, (K, U) => (t(), a("text", {
            key: `tx-${U}`,
            x: A(K),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(Y(K)), 9, a1))), 128))
        ]),
        (t(!0), a(P, null, j(u.value, (K, U) => (t(), a("g", {
          key: `s-${U}`
        }, [
          (t(!0), a(P, null, j(K.points, (R, w) => (t(), a("circle", {
            key: `p-${U}-${w}`,
            cx: A(R.x),
            cy: M(R.y),
            r: g(R),
            fill: m(U, K),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: m(U, K),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== U || i.value.p !== w) ? 0.35 : 1,
            onMouseenter: (I) => i.value = { s: U, p: w },
            onMouseleave: J[0] || (J[0] = (I) => i.value = null)
          }, null, 40, l1))), 128))
        ]))), 128))
      ], 8, Qh)),
      W.value ? (t(), D(vt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${N(W.value.point.y)}`,
        share: p.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : k("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", o1, [
        (t(!0), a(P, null, j(u.value, (K, U) => (t(), a("span", {
          key: `l-${U}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: m(U, K) }),
            "aria-hidden": "true"
          }, null, 4),
          H(" " + c(K.name), 1)
        ]))), 128))
      ])) : k("", !0)
    ], 512));
  }
}), s1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, r1 = ["width", "height", "viewBox"], i1 = ["points"], d1 = ["x1", "y1", "x2", "y2"], u1 = ["points", "fill", "stroke"], c1 = ["cx", "cy", "fill", "onMouseenter"], f1 = ["x", "y", "text-anchor"], m1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, p1 = { class: "truncate" }, y6 = /* @__PURE__ */ L({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = y(
      () => l.series.map((M, f) => ({
        ...M,
        color: M.color ?? n[f % n.length]
      }))
    ), s = y(() => r.value[0]?.points.map((M) => M.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), m = y(() => d.value / 2 - 34), v = y(() => {
      const M = Math.max(...r.value.flatMap((z) => z.points.map((T) => T.value)), 0);
      if (M <= 0)
        return 1;
      const f = 10 ** Math.floor(Math.log10(M));
      return ([1, 2, 2.5, 5, 10].find((z) => M <= z * f) ?? 10) * f;
    });
    function p(M) {
      return M / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(M, f) {
      const g = p(M);
      return {
        x: u.value + Math.cos(g) * m.value * f,
        y: u.value + Math.sin(g) * m.value * f
      };
    }
    function $(M) {
      return Array.from({ length: i.value }, (f, g) => {
        const z = h(g, M);
        return `${z.x.toFixed(2)},${z.y.toFixed(2)}`;
      }).join(" ");
    }
    const b = y(() => [0.25, 0.5, 0.75, 1].map((M) => ({ f: M, points: $(M) }))), C = y(
      () => r.value.map((M) => {
        const f = M.points.map((g) => Math.max(0, g.value) / v.value);
        return {
          name: M.name,
          color: M.color,
          values: M.points,
          outline: f.map((g, z) => {
            const T = h(z, g);
            return `${T.x.toFixed(2)},${T.y.toFixed(2)}`;
          }).join(" "),
          dots: f.map((g, z) => h(z, g))
        };
      })
    ), S = y(
      () => s.value.map((M, f) => {
        const g = p(f), z = u.value + Math.cos(g) * (m.value + 14), T = u.value + Math.sin(g) * (m.value + 14), F = Math.cos(g);
        return {
          label: M,
          x: z,
          y: T + 3,
          anchor: Math.abs(F) < 0.2 ? "middle" : F > 0 ? "start" : "end"
        };
      })
    ), B = q(null), A = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M);
    return (M, f) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", s1, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, j(b.value, (g) => (t(), a("polygon", {
          key: g.f,
          points: g.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, i1))), 128)),
        (t(!0), a(P, null, j(s.value, (g, z) => (t(), a("line", {
          key: `spoke-${z}`,
          x1: u.value,
          y1: u.value,
          x2: h(z, 1).x,
          y2: h(z, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, d1))), 128)),
        (t(!0), a(P, null, j(C.value, (g, z) => (t(), a("g", {
          key: `s-${z}`
        }, [
          o("polygon", {
            points: g.outline,
            fill: g.color,
            "fill-opacity": "0.16",
            stroke: g.color,
            "stroke-width": "2"
          }, null, 8, u1),
          (t(!0), a(P, null, j(g.dots, (T, F) => (t(), a("circle", {
            key: F,
            cx: T.x,
            cy: T.y,
            r: "3",
            fill: g.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Y) => B.value = {
              series: g.name,
              axis: s.value[F],
              value: g.values[F]?.value ?? 0
            },
            onMouseleave: f[0] || (f[0] = (Y) => B.value = null)
          }, null, 40, c1))), 128))
        ]))), 128)),
        (t(!0), a(P, null, j(S.value, (g, z) => (t(), a("text", {
          key: `l-${z}`,
          x: g.x,
          y: g.y,
          "text-anchor": g.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(g.label), 9, f1))), 128))
      ], 8, r1)),
      e.showLegend ? (t(), a("ul", m1, [
        (t(!0), a(P, null, j(r.value, (g, z) => (t(), a("li", {
          key: z,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: g.color })
          }, null, 4),
          o("span", p1, c(g.name), 1)
        ]))), 128))
      ])) : k("", !0),
      B.value ? (t(), D(vt, {
        key: 1,
        label: `${B.value.series} — ${B.value.axis}`,
        value: A(B.value.value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), v1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, g1 = ["width", "height", "viewBox"], h1 = ["cx", "cy", "r"], b1 = ["d", "fill", "fill-opacity", "onMouseenter"], y1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, x1 = { class: "min-w-0 flex-1 truncate capitalize" }, k1 = { class: "font-medium tabular-nums" }, x6 = /* @__PURE__ */ L({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = q(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map(($) => Math.max(0, $.value)), 0)), m = y(() => {
      const $ = l.data.length;
      if ($ === 0 || u.value <= 0)
        return [];
      const b = Math.PI * 2 / $;
      return l.data.map((C, S) => {
        const B = Math.sqrt(Math.max(0, C.value) / u.value), A = d.value * B, M = S * b - Math.PI / 2, f = M + b;
        return {
          ...C,
          color: n[S % n.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: v(i.value, M, f, A)
        };
      });
    });
    function v($, b, C, S) {
      if (S <= 0)
        return "";
      if (C - b >= Math.PI * 2 - 1e-6)
        return `M${$ - S},${$} A${S},${S} 0 1 1 ${$ + S},${$} A${S},${S} 0 1 1 ${$ - S},${$} Z`;
      const B = C - b > Math.PI ? 1 : 0, A = $ + Math.cos(b) * S, M = $ + Math.sin(b) * S, f = $ + Math.cos(C) * S, g = $ + Math.sin(C) * S;
      return `M${$},${$} L${A.toFixed(2)},${M.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${B} 1 ${f.toFixed(2)},${g.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map(($) => d.value * $)), h = ($) => l.format ? l.format($) : new Intl.NumberFormat().format($);
    return ($, b) => m.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", v1, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, j(p.value, (C) => (t(), a("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, h1))), 128)),
        (t(!0), a(P, null, j(m.value, (C, S) => (t(), a("path", {
          key: S,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (B) => r.value = S,
          onMouseleave: b[0] || (b[0] = (B) => r.value = null)
        }, null, 40, b1))), 128))
      ], 8, g1)),
      e.showLegend ? (t(), a("ul", y1, [
        (t(!0), a(P, null, j(m.value, (C, S) => (t(), a("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", x1, c(C.label), 1),
          o("span", k1, c(h(C.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      r.value !== null ? (t(), D(vt, {
        key: 1,
        label: m.value[r.value].label,
        value: h(m.value[r.value].value)
      }, null, 8, ["label", "value"])) : k("", !0)
    ]));
  }
}), $1 = ["width", "height"], w1 = ["x1", "x2", "y1", "y2"], C1 = ["x", "y"], S1 = ["x", "y"], M1 = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], B1 = ["x", "y", "width", "height", "fill", "fill-opacity"], A1 = ["d", "stroke"], _1 = ["cx", "cy", "fill"], z1 = ["x", "y"], P1 = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, L1 = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, O1 = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, j1 = { class: "text-xs font-semibold tabular-nums" }, V1 = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, D1 = { class: "text-muted-foreground" }, k6 = /* @__PURE__ */ L({
  __name: "ComboChart",
  props: {
    bars: {},
    lines: {},
    height: { default: 240 },
    lineAxis: { default: "left" },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = q(null), r = q(560), s = q(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((U) => {
        r.value = Math.max(160, U[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], m = y(
      () => l.bars.map((U, R) => ({
        ...U,
        color: U.color ?? d[R % d.length]
      }))
    ), v = y(
      () => l.lines.map((U, R) => ({
        ...U,
        color: U.color ?? u[R % u.length]
      }))
    ), p = y(
      () => m.value[0]?.points.map((U) => U.label) ?? v.value[0]?.points.map((U) => U.label) ?? []
    ), h = y(() => p.value.length), $ = y(() => l.lineAxis === "right"), b = y(() => ({
      top: 12,
      right: $.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = y(() => ({
      w: Math.max(1, r.value - b.value.left - b.value.right),
      h: Math.max(1, l.height - b.value.top - b.value.bottom)
    }));
    function S(U) {
      const R = Math.max(...U, 0);
      if (R <= 0)
        return 1;
      const w = 10 ** Math.floor(Math.log10(R));
      return ([1, 2, 2.5, 5, 10].find((V) => R <= V * w) ?? 10) * w;
    }
    const B = y(
      () => S([
        ...m.value.flatMap((U) => U.points.map((R) => R.value)),
        ...$.value ? [] : v.value.flatMap((U) => U.points.map((R) => R.value))
      ])
    ), A = y(
      () => $.value ? S(v.value.flatMap((U) => U.points.map((R) => R.value))) : B.value
    ), M = y(() => C.value.w / Math.max(1, h.value)), f = y(() => M.value * 0.6), g = y(() => f.value / Math.max(1, m.value.length));
    function z(U) {
      return b.value.left + U * M.value + M.value / 2;
    }
    const T = y(
      () => m.value.flatMap(
        (U, R) => U.points.map((w, I) => {
          const V = Math.max(0, w.value) / B.value * C.value.h;
          return {
            x: z(I) - f.value / 2 + R * g.value,
            y: b.value.top + C.value.h - V,
            w: Math.max(0, g.value - 2),
            h: V,
            color: U.color,
            index: I,
            name: U.name,
            value: w.value,
            label: w.label
          };
        })
      )
    ), F = y(
      () => v.value.map((U) => {
        const R = U.points.map((w, I) => ({
          x: z(I),
          y: b.value.top + C.value.h - Math.max(0, w.value) / A.value * C.value.h,
          value: w.value
        }));
        return {
          ...U,
          pts: R,
          d: R.map((w, I) => `${I === 0 ? "M" : "L"}${w.x.toFixed(2)},${w.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((U) => ({
        y: b.value.top + C.value.h * U,
        left: B.value * (1 - U),
        right: A.value * (1 - U)
      }))
    ), N = y(() => Math.max(1, Math.ceil(h.value / 10)));
    function W(U) {
      return U === h.value - 1 || U % N.value === 0;
    }
    const Z = (U) => l.format ? l.format(U) : J(U);
    function J(U) {
      return Math.abs(U) >= 1e6 ? `${(U / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(U) >= 1e3 ? `${(U / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(U * 100) / 100);
    }
    const K = y(() => {
      if (s.value === null)
        return null;
      const U = s.value;
      return {
        label: p.value[U],
        rows: [
          ...m.value.map((R) => ({
            name: R.name,
            color: R.color,
            value: R.points[U]?.value ?? 0
          })),
          ...v.value.map((R) => ({
            name: R.name,
            color: R.color,
            value: R.points[U]?.value ?? 0
          }))
        ]
      };
    });
    return (U, R) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: R[0] || (R[0] = (w) => s.value = null)
        }, [
          (t(!0), a(P, null, j(Y.value, (w) => (t(), a("line", {
            key: `g-${w.y}`,
            x1: b.value.left,
            x2: r.value - b.value.right,
            y1: w.y,
            y2: w.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, w1))), 128)),
          (t(!0), a(P, null, j(Y.value, (w) => (t(), a("text", {
            key: `lt-${w.y}`,
            x: b.value.left - 8,
            y: w.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(J(w.left)), 9, C1))), 128)),
          $.value ? (t(!0), a(P, { key: 0 }, j(Y.value, (w) => (t(), a("text", {
            key: `rt-${w.y}`,
            x: r.value - b.value.right + 8,
            y: w.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(J(w.right)), 9, S1))), 128)) : k("", !0),
          (t(!0), a(P, null, j(p.value, (w, I) => (t(), a("rect", {
            key: `hit-${I}`,
            x: b.value.left + I * M.value,
            y: b.value.top,
            width: M.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === I ? 0.4 : 0,
            onMouseenter: (V) => s.value = I
          }, null, 40, M1))), 128)),
          (t(!0), a(P, null, j(T.value, (w, I) => (t(), a("rect", {
            key: `b-${I}`,
            x: w.x,
            y: w.y,
            width: w.w,
            height: w.h,
            fill: w.color,
            "fill-opacity": s.value === null || s.value === w.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, B1))), 128)),
          (t(!0), a(P, null, j(F.value, (w, I) => (t(), a("g", {
            key: `l-${I}`
          }, [
            o("path", {
              d: w.d,
              fill: "none",
              stroke: w.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, A1),
            s.value !== null && w.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: w.pts[s.value].x,
              cy: w.pts[s.value].y,
              r: "4",
              fill: w.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, _1)) : k("", !0)
          ]))), 128)),
          (t(!0), a(P, null, j(p.value, (w, I) => pe((t(), a("text", {
            key: `x-${I}`,
            x: z(I),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(w), 9, z1)), [
            [Ke, W(I)]
          ])), 128))
        ], 40, $1)),
        K.value ? (t(), a("div", P1, [
          o("p", L1, c(K.value.label), 1),
          (t(!0), a(P, null, j(K.value.rows, (w, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: w.color })
            }, null, 4),
            o("span", O1, c(w.name), 1),
            o("span", j1, c(Z(w.value)), 1)
          ]))), 128))
        ])) : k("", !0),
        e.showLegend ? (t(), a("div", V1, [
          (t(!0), a(P, null, j([...m.value, ...v.value], (w, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: w.color })
            }, null, 4),
            o("span", D1, c(w.name), 1)
          ]))), 128))
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), T1 = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, I1 = { class: "text-muted-foreground" }, E1 = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, F1 = ["width", "height"], N1 = ["x", "y"], R1 = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], U1 = ["x", "y"], H1 = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, K1 = { class: "text-[11px] font-medium capitalize" }, q1 = { class: "text-muted-foreground text-[11px] capitalize" }, G1 = { class: "text-sm font-semibold tabular-nums" }, W1 = { class: "text-muted-foreground text-xs font-normal" }, $6 = /* @__PURE__ */ L({
  __name: "HeatmapChart",
  props: {
    series: {},
    buckets: { default: () => [
      { max: 1, label: "0" },
      { max: 11, label: "1-10" },
      { max: 31, label: "11-30" },
      { max: 61, label: "31-60" },
      { label: "61+" }
    ] },
    height: { default: 240 },
    format: {},
    showColumnLabels: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = q(null), r = q(560), s = q(null);
    let i = null;
    ge(() => {
      i = new ResizeObserver((f) => {
        r.value = Math.max(160, f[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((f) => f.label) ?? []), u = y(() => l.series.length), m = y(() => d.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - v.value - 8)), h = y(() => p.value / Math.max(1, m.value)), $ = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function b(f) {
      if (f === 0)
        return "var(--muted)";
      const g = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(f / g * 100)}%, var(--muted))`;
    }
    function C(f) {
      for (let g = 0; g < l.buckets.length; g++) {
        const z = l.buckets[g].max;
        if (z === void 0 || f < z)
          return g;
      }
      return l.buckets.length - 1;
    }
    const S = y(
      () => l.series.flatMap(
        (f, g) => f.points.map((z, T) => {
          const F = C(z.value);
          return {
            row: g,
            col: T,
            x: v.value + T * h.value,
            y: 4 + g * $.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, $.value - 4),
            colour: b(F),
            label: z.label,
            value: z.value,
            rowName: f.name,
            bucketLabel: l.buckets[F].label
          };
        })
      )
    ), B = y(() => h.value < 2), A = y(() => s.value ? S.value.find((f) => f.row === s.value.row && f.col === s.value.col) ?? null : null), M = (f) => l.format ? l.format(f) : new Intl.NumberFormat().format(f);
    return (f, g) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        o("div", T1, [
          (t(!0), a(P, null, j(e.buckets, (z, T) => (t(), a("span", {
            key: T,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: b(T) })
            }, null, 4),
            o("span", I1, c(z.label), 1)
          ]))), 128))
        ]),
        B.value ? (t(), a("p", E1, c(m.value) + " columns - too many to label individually ", 1)) : k("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: g[0] || (g[0] = (z) => s.value = null)
        }, [
          (t(!0), a(P, null, j(e.series, (z, T) => (t(), a("text", {
            key: `r-${T}`,
            x: v.value - 10,
            y: 4 + T * $.value + $.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(z.name), 9, N1))), 128)),
          (t(!0), a(P, null, j(S.value, (z, T) => (t(), a("rect", {
            key: T,
            x: z.x,
            y: z.y,
            width: z.w,
            height: z.h,
            fill: z.colour,
            "fill-opacity": s.value === null || s.value.row === z.row && s.value.col === z.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (F) => s.value = { row: z.row, col: z.col }
          }, null, 40, R1))), 128)),
          e.showColumnLabels && !B.value ? (t(!0), a(P, { key: 0 }, j(d.value, (z, T) => (t(), a("text", {
            key: `c-${T}`,
            x: v.value + T * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(z), 9, U1))), 128)) : k("", !0)
        ], 40, F1)),
        A.value ? (t(), a("div", H1, [
          o("p", K1, c(A.value.label), 1),
          o("p", q1, c(A.value.rowName), 1),
          o("p", G1, [
            H(c(M(A.value.value)) + " ", 1),
            o("span", W1, "(" + c(A.value.bucketLabel) + ")", 1)
          ])
        ])) : k("", !0)
      ], 64))
    ], 512));
  }
}), Z1 = ["viewBox"], J1 = { key: 0 }, Y1 = ["id"], Q1 = ["stop-color"], X1 = ["stop-color"], eb = ["d", "fill"], tb = ["d", "stroke"], Mn = 100, ot = 30, zt = /* @__PURE__ */ L({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = Math.random().toString(36).slice(2, 9), r = y(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const m = Math.min(...u), p = Math.max(...u) - m || 1;
      return u.map((h, $) => ({
        x: $ / (u.length - 1) * Mn,
        y: ot - (h - m) / p * (ot - 4) - 2
      }));
    });
    function s(u) {
      const m = u.length;
      if (m < 2)
        return "";
      const v = [], p = [];
      for (let b = 0; b < m - 1; b++)
        v[b] = u[b + 1].x - u[b].x, p[b] = v[b] === 0 ? 0 : (u[b + 1].y - u[b].y) / v[b];
      const h = [p[0]];
      for (let b = 1; b < m - 1; b++)
        if (p[b - 1] * p[b] <= 0)
          h[b] = 0;
        else {
          const C = 2 * v[b] + v[b - 1], S = v[b] + 2 * v[b - 1];
          h[b] = (C + S) / (C / p[b - 1] + S / p[b]);
        }
      h[m - 1] = p[m - 2];
      let $ = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let b = 0; b < m - 1; b++) {
        const C = v[b] / 3;
        $ += ` C${(u[b].x + C).toFixed(2)},${(u[b].y + h[b] * C).toFixed(2)} ${(u[b + 1].x - C).toFixed(2)},${(u[b + 1].y - h[b + 1] * C).toFixed(2)} ${u[b + 1].x.toFixed(2)},${u[b + 1].y.toFixed(2)}`;
      }
      return $;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((m, v) => `${v === 0 ? "M" : "L"}${m.x.toFixed(2)},${m.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${ot} L${u[0].x.toFixed(2)},${ot} Z`;
    });
    return (u, m) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Mn} ${ot}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", J1, [
        o("linearGradient", {
          id: `pk-spark-${x(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Q1),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, X1)
        ], 8, Y1)
      ])) : k("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(n)})`
      }, null, 8, eb)) : k("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, tb)
    ], 12, Z1)) : k("", !0);
  }
}), nb = { class: "flex items-center gap-1 text-xs" }, ab = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, lb = {
  key: 0,
  class: "text-muted-foreground truncate"
}, aa = /* @__PURE__ */ L({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = y(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = y(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = y(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = y(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), a("span", nb, [
      o("span", {
        class: _(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", ab, c(s.value), 1),
        H(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", lb, c(e.comparison), 1)) : k("", !0)
    ]));
  }
}), ob = ["data-collapsed"], sb = { class: "flex flex-wrap items-start justify-between gap-2" }, rb = { class: "flex min-w-0 items-start gap-2" }, ib = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, db = ["d"], ub = { class: "min-w-0" }, cb = { class: "text-sm font-medium" }, fb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, mb = { class: "flex shrink-0 items-center gap-1.5" }, pb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, vb = ["aria-pressed", "onClick"], gb = ["aria-expanded", "aria-label", "title"], hb = ["aria-label"], bb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, yb = ["d"], xb = /* @__PURE__ */ L({
  __name: "ChartCard",
  props: {
    label: {},
    description: { default: null },
    periods: { default: null },
    period: {},
    loading: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    bodyHeight: { default: 220 },
    fitBody: { type: Boolean, default: !1 },
    collapsible: { type: Boolean, default: !0 },
    defaultCollapsed: { type: Boolean, default: !1 },
    hideable: { type: Boolean, default: !1 },
    icon: { default: null }
  },
  emits: ["update:period", "hide"],
  setup(e) {
    const l = e, n = Gt(), r = q(l.defaultCollapsed), s = y(() => !!l.icon && !n.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: _(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", sb, [
        o("div", rb, [
          G(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", ib, [
              o("path", {
                d: x(ce)(e.icon)
              }, null, 8, db)
            ])) : k("", !0)
          ]),
          o("div", ub, [
            o("p", cb, c(e.label), 1),
            e.description ? (t(), a("p", fb, c(e.description), 1)) : k("", !0),
            G(d.$slots, "trend")
          ])
        ]),
        o("div", mb, [
          G(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", pb, [
            (t(!0), a(P, null, j(e.periods, (m) => (t(), a("button", {
              key: m.value,
              type: "button",
              class: _([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === m.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === m.value,
              onClick: (v) => d.$emit("update:period", m.value)
            }, c(m.label), 11, vb))), 128))
          ])) : k("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (m) => r.value = !r.value)
          }, [
            (t(), a("svg", {
              class: _(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [...u[2] || (u[2] = [
              o("path", { d: "m6 9 6 6 6-6" }, null, -1)
            ])], 2))
          ], 8, gb)) : k("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (m) => d.$emit("hide"))
          }, [
            (t(), a("svg", bb, [
              o("path", {
                d: x(ce)("eye-off")
              }, null, 8, yb)
            ]))
          ], 8, hb)) : k("", !0)
        ])
      ]),
      r.value ? k("", !0) : (t(), a("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), a("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: se({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : G(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, ob));
  }
}), kb = ["aria-pressed", "aria-label", "title"], $b = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wb = ["d"], Cb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Sb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Mb = ["href"], Bb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ab = ["d"], _b = ["aria-label", "onClick"], zb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pb = ["d"], Lb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ob = ["d"], jb = {
  key: 0,
  class: "flex flex-col gap-1"
}, Vb = ["onClick"], Db = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tb = ["d"], Ib = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Eb = /* @__PURE__ */ L({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!1), i = q(!1), d = y(
      () => n.catalog.filter((v) => !n.items.some((p) => p.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== v)
      );
    }
    function m(v) {
      r("update:items", [...n.items, v]), i.value = !1;
    }
    return (v, p) => (t(), a(P, null, [
      E(xb, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", $b, [
              o("path", {
                d: x(ce)(s.value ? "check" : "pencil")
              }, null, 8, wb)
            ]))
          ], 8, kb)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), a("div", Cb, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...p[6] || (p[6] = [
                H("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Sb, [
            (t(!0), a(P, null, j(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Bb, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, Ab)
                ])),
                H(" " + c(h.label), 1)
              ], 8, Mb),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: ($) => u(h.id)
              }, [
                (t(), a("svg", zb, [
                  o("path", {
                    d: x(ce)("x")
                  }, null, 8, Pb)
                ]))
              ], 8, _b)) : k("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", Lb, [
                o("path", {
                  d: x(ce)("plus")
                }, null, 8, Ob)
              ])),
              p[8] || (p[8] = H(" Add ", -1))
            ])) : k("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(ut, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: O(() => [
          E(de, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...p[9] || (p[9] = [
              H("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          d.value.length ? (t(), a("ul", jb, [
            (t(!0), a(P, null, j(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: ($) => m(h)
              }, [
                (t(), a("svg", Db, [
                  o("path", {
                    d: x(ce)(h.icon)
                  }, null, 8, Tb)
                ])),
                H(" " + c(h.label), 1)
              ], 8, Vb)
            ]))), 128))
          ])) : (t(), a("p", Ib, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Fb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Nb = { class: "flex flex-1 flex-col gap-1 p-4" }, Rb = { class: "text-muted-foreground relative text-xs font-medium" }, Ub = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Hb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Kb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, qb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, w6 = /* @__PURE__ */ L({
  __name: "StatCard",
  props: {
    label: {},
    description: { default: null },
    value: {},
    trend: { default: null },
    comparison: {},
    sparkline: { default: null },
    loading: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = (n) => typeof n == "number" ? new Intl.NumberFormat().format(n) : String(n ?? "-");
    return (n, r) => (t(), a("div", Fb, [
      o("div", Nb, [
        o("p", Rb, c(e.label), 1),
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Ub, " Could not load ")) : (t(), a("span", Hb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(aa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Kb, c(e.description), 1)) : k("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", qb, [
        E(zt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : k("", !0)
    ]));
  }
}), Gb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Wb = { class: "flex flex-col gap-1 p-4" }, Zb = { class: "flex items-start justify-between gap-2" }, Jb = { class: "text-sm font-medium" }, Yb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Qb = { class: "mt-1 flex flex-wrap items-center gap-2" }, Xb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, ey = {
  key: 0,
  class: "-mb-px"
}, St = /* @__PURE__ */ L({
  __name: "MiniStatCard",
  props: {
    label: {},
    value: {},
    caption: { default: null },
    delta: { default: null },
    inverted: { type: Boolean, default: !1 },
    series: { default: null },
    color: { default: "var(--primary)" },
    loading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = y(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = y(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), a("div", Gb, [
      o("div", Wb, [
        o("div", Zb, [
          o("p", Jb, c(e.label), 1),
          G(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", Yb, c(e.caption), 1)) : k("", !0),
        o("div", Qb, [
          e.loading ? (t(), D(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", Xb, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: _(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : k("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", ey, [
        E(zt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : k("", !0)
    ]));
  }
}), ty = { class: "relative flex flex-col gap-2" }, ny = ["aria-label"], ay = ["onMouseenter"], ly = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, oy = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, sy = { class: "truncate" }, ry = { class: "text-sm font-semibold tabular-nums" }, C6 = /* @__PURE__ */ L({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const l = e, n = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = y(() => l.segments.reduce((v, p) => v + Math.max(0, p.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
      () => l.segments.map((v, p) => {
        const h = Math.max(0, v.value) / s.value;
        return {
          ...v,
          color: v.color ?? n[p % n.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: v.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), u = q(null), m = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), a("div", ty, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, j(i.value, (h, $) => (t(), a("span", {
          key: $,
          class: _(["h-full transition-all", [
            $ === 0 ? "rounded-l-full" : "",
            $ === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === $ ? 1 : 0.4
          }),
          onMouseenter: (b) => u.value = $,
          onMouseleave: p[0] || (p[0] = (b) => u.value = null)
        }, null, 46, ay))), 128))
      ], 12, ny),
      e.showLegend ? (t(), a("div", ly, [
        (t(!0), a(P, null, j(i.value, (h, $) => (t(), a("div", {
          key: $,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", oy, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", sy, c(h.label), 1)
          ]),
          o("span", ry, c(d(h.value)), 1)
        ]))), 128))
      ])) : k("", !0),
      u.value !== null ? (t(), D(vt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: m(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : k("", !0)
    ]));
  }
}), iy = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, dy = ["data-heading"], uy = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, cy = { class: "text-muted-foreground truncate" }, fy = ["aria-label"], S6 = /* @__PURE__ */ L({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const l = e, n = {
      success: "text-success",
      warning: "text-warning",
      danger: "text-destructive",
      info: "text-info",
      neutral: ""
    }, r = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, s = y(
      () => l.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((m, v) => m + Math.max(0, v.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
        return {
          ...i,
          segments: i.bar.segments.map((m) => ({
            ...m,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: m.value > 0 ? `max(2px, ${(Math.max(0, m.value) / u * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, d) => (t(), a("div", iy, [
      (t(!0), a(P, null, j(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: _(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), a("div", uy, [
          o("span", cy, c(u.label), 1),
          o("span", {
            class: _(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, c(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((m) => `${m.label} ${m.value}`).join(", ")
        }, [
          (t(!0), a(P, null, j(u.segments, (m, v) => (t(), a("span", {
            key: v,
            class: _(["h-full transition-all", r[m.tone ?? "neutral"]]),
            style: se({ width: m.width })
          }, null, 6))), 128))
        ], 8, fy)) : k("", !0)
      ], 8, dy))), 128))
    ]));
  }
}), my = {
  online: "success",
  paid: "success",
  active: "success",
  available: "success",
  occupied: "success",
  instock: "success",
  "in-stock": "success",
  in_stock: "success",
  fulfilled: "success",
  pending: "warning",
  reserved: "warning",
  low: "warning",
  due: "warning",
  degraded: "warning",
  offline: "danger",
  unpaid: "danger",
  overdue: "danger",
  failed: "danger",
  outofstock: "danger",
  "out-of-stock": "danger",
  out_of_stock: "danger",
  expired: "danger",
  vacant: "info",
  processing: "info",
  draft: "info",
  ending: "warning",
  connected: "success",
  disconnected: "neutral",
  live: "success",
  test: "info",
  enabled: "success",
  offered: "success",
  disabled: "neutral",
  default: "info"
}, py = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function vy(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function gy(e, l) {
  return l || (e ? my[vy(e)] ?? "neutral" : "neutral");
}
function hy(e, l) {
  return py[gy(e, l)];
}
const $e = /* @__PURE__ */ L({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = y(() => hy(l.status, l.tone));
    return (r, s) => (t(), D(We, {
      variant: n.value,
      class: _(l.class)
    }, {
      default: O(() => [
        G(r.$slots, "default", {}, () => [
          H(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), by = ["data-layout"], yy = ["src", "alt"], xy = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, ky = ["src"], $y = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, wy = ["onMouseenter"], Cy = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Sy = { class: "min-w-0" }, My = { class: "truncate text-sm font-medium" }, By = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Ay = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, _y = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, zy = { class: "min-w-0" }, Py = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Ly = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Oy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jy = ["d"], Vy = ["aria-label"], Dy = /* @__PURE__ */ L({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: l }) {
    const n = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = l, i = q(0);
    function d(S) {
      if (typeof S != "string")
        return null;
      const B = S.trim();
      return B === "" ? null : /^(https?:)?\/\//i.test(B) ? B : null;
    }
    const u = y(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((B) => B !== null);
      return [...new Set(S)];
    }), m = y(() => u.value[i.value] ?? u.value[0] ?? null), v = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const B = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / B * 100)).toFixed(2)}%`;
    }), h = y(() => u.value.length > 1 ? u.value[1] : null), $ = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), b = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, B) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: _(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: B[0] || (B[0] = (A) => s("select", e.item.key)),
      onKeydown: B[1] || (B[1] = Tt(ve((A) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: B[2] || (B[2] = (A) => i.value = 0)
    }, [
      o("div", {
        class: _([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        m.value ? (t(), a("img", {
          key: 0,
          src: m.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, yy)) : (t(), a("span", xy, c(v.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, ky)) : k("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", $y, [
          (t(!0), a(P, null, j(u.value, (A, M) => (t(), a("span", {
            key: M,
            class: _(["size-1.5 rounded-full", M === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (f) => i.value = M
          }, null, 42, wy))), 128))
        ])) : k("", !0)
      ], 2),
      o("div", {
        class: _(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Cy, [
          o("div", Sy, [
            o("p", My, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", By, c(e.item.caption), 1)) : k("", !0),
            e.item.facts?.length ? (t(), a("p", Ay, c(e.item.facts.join(" · ")), 1)) : k("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : k("", !0)
        ]),
        o("div", _y, [
          o("div", zy, [
            e.item.price ? (t(), a("p", Py, c(e.item.price), 1)) : k("", !0),
            b.value ? (t(), a("p", Ly, c(b.value), 1)) : k("", !0)
          ]),
          $.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", Oy, [
              o("path", {
                d: x(ce)("cart")
              }, null, 8, jy)
            ]))
          ])) : k("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: _(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: p.value })
          }, null, 6)
        ], 8, Vy)) : k("", !0)
      ], 2)
    ], 42, by));
  }
});
function Ty(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Iy(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Ey(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Fy = ["data-featured", "data-recommended"], Ny = { class: "flex flex-col gap-1" }, Ry = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Uy = { key: 0 }, Hy = { key: 1 }, Ky = { key: 2 }, qy = { key: 3 }, Gy = { class: "text-sm font-semibold" }, Wy = { class: "flex items-baseline gap-1" }, Zy = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Jy = { class: "text-muted-foreground text-sm font-normal" }, Yy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, Qy = { class: "text-muted-foreground mt-1 text-xs" }, Xy = { class: "flex flex-1 flex-col gap-2 text-sm" }, ex = { class: "flex min-w-0 items-start gap-2" }, tx = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, nx = ["d"], ax = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, lx = ["d"], ox = { class: "capitalize" }, sx = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, rx = { class: "text-foreground font-medium" }, ix = { class: "mt-auto flex gap-2 pt-2" }, dx = /* @__PURE__ */ L({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = y(
      () => !!(n.plan.featured || n.plan.recommended)
    ), d = y(() => {
      const m = n.plan.perks ?? {};
      return Object.entries(m).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: Ey(p.value),
        display: Iy(p.value)
      }));
    }), u = y(() => n.plan.extraPerks ?? []);
    return (m, v) => (t(), a("article", {
      class: _(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Ny, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Ry, [
          e.plan.recommended ? (t(), a("span", Uy, "Recommended")) : e.plan.featured ? (t(), a("span", Hy, "Featured")) : k("", !0),
          e.plan.trial ? (t(), a("span", Ky, "Trial")) : k("", !0),
          e.plan.active === !1 ? (t(), a("span", qy, "Inactive")) : k("", !0)
        ])) : k("", !0),
        o("h3", Gy, c(e.plan.name), 1),
        o("p", Wy, [
          o("span", Zy, c(s.value), 1),
          o("span", Jy, c(x(Ty)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Yy, c(e.plan.shortDescription), 1)) : k("", !0),
        o("p", Qy, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", Xy, [
        (t(!0), a(P, null, j(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", ex, [
            o("span", {
              class: _(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", tx, [
                o("path", {
                  d: x(ce)("check")
                }, null, 8, nx)
              ])) : (t(), a("svg", ax, [
                o("path", {
                  d: x(ce)("x")
                }, null, 8, lx)
              ]))
            ], 2),
            o("span", ox, c(p.label), 1)
          ]),
          p.display ? (t(), a("span", sx, c(p.display), 1)) : k("", !0)
        ]))), 128)),
        (t(!0), a(P, null, j(u.value, (p, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", rx, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", ix, [
        E(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: O(() => [...v[2] || (v[2] = [
            H(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: O(() => [...v[3] || (v[3] = [
            H(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Fy));
  }
}), ux = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, cx = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, fx = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, mx = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, px = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, M6 = /* @__PURE__ */ L({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: l }) {
    const n = l;
    return (r, s) => (t(), a("div", {
      class: _(["w-full space-y-6", e.embedded ? "" : x(tt)]),
      "data-slot": "plan-grid"
    }, [
      o("header", ux, [
        o("div", null, [
          e.title ? (t(), a("h1", cx, c(e.title), 1)) : k("", !0),
          e.description ? (t(), a("p", fx, c(e.description), 1)) : k("", !0)
        ]),
        E(de, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: O(() => [...s[3] || (s[3] = [
            H("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", mx, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", px, [
        (t(!0), a(P, null, j(e.plans, (i) => (t(), D(dx, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), vx = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, gx = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, hx = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, bx = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, yx = { class: "space-y-1.5" }, xx = { class: "space-y-1.5" }, kx = { class: "space-y-1.5" }, $x = { class: "space-y-1.5" }, wx = { class: "space-y-1.5" }, Cx = { class: "flex items-center gap-3 text-sm" }, Sx = { class: "flex items-center gap-3 text-sm" }, Mx = { class: "flex items-center gap-3 text-sm" }, Bx = {
  key: 0,
  class: "space-y-1.5"
}, Ax = { class: "flex items-center gap-3 text-sm" }, _x = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, zx = { class: "space-y-1.5" }, Px = ["value"], Lx = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Ox = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, jx = ["id", "value", "onInput"], Vx = { class: "space-y-2" }, Dx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Tx = ["d"], B6 = /* @__PURE__ */ L({
  __name: "PlanEditor",
  props: {
    plan: { default: null },
    modules: { default: () => [] },
    limits: { default: () => [] },
    mode: { default: "create" },
    processing: { type: Boolean, default: !1 },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["save", "cancel"],
  setup(e, { emit: l }) {
    const n = () => ({
      id: "",
      name: "",
      shortDescription: "",
      description: "",
      days: 30,
      price: 0,
      featured: !1,
      recommended: !1,
      trial: !1,
      trialDays: 0,
      active: !0,
      perks: {},
      extraPerks: []
    }), r = e, s = l, i = dt(n());
    function d(M, f) {
      const g = i.perks?.[M]?.value;
      return g ?? f;
    }
    function u(M, f, g) {
      const z = i.perks?.[M];
      i.perks = {
        ...i.perks ?? {},
        [M]: {
          value: f,
          overview: g ?? z?.overview ?? ""
        }
      };
    }
    function m(M, f) {
      const g = i.perks?.[M];
      i.perks = {
        ...i.perks ?? {},
        [M]: {
          value: g?.value ?? (M === "modules" ? [] : 0),
          overview: f
        }
      };
    }
    function v(M) {
      const f = M ? { ...n(), ...M } : n();
      i.id = f.id, i.name = f.name, i.shortDescription = f.shortDescription ?? "", i.description = f.description ?? "", i.days = f.days, i.price = f.price, i.featured = f.featured ?? !1, i.recommended = f.recommended ?? !1, i.trial = f.trial ?? !1, i.trialDays = f.trialDays ?? 0, i.active = f.active ?? !0, i.perks = { ...f.perks ?? {} }, i.extraPerks = [...f.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    v(r.plan), fe(
      () => r.plan,
      (M) => v(M),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const M = d("modules", []);
        return Array.isArray(M) ? M.map(String) : [];
      },
      set: (M) => {
        u("modules", $(M.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = y(
      () => r.modules.map((M) => ({ value: M.key, label: M.label }))
    );
    function $(M) {
      const f = Object.fromEntries(r.modules.map((T) => [T.key, T])), g = new Set(M);
      for (const T of r.modules)
        if (!g.has(T.key))
          for (const F of T.children ?? [])
            g.delete(F);
      let z = !0;
      for (; z; ) {
        z = !1;
        for (const T of [...g])
          for (const F of f[T]?.requires ?? [])
            g.has(F) || (g.add(F), z = !0);
      }
      return [...g];
    }
    function b() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(M) {
      i.extraPerks = (i.extraPerks ?? []).filter((f, g) => g !== M);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((M) => M.key.trim() !== "")
      });
    }
    const B = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`, A = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`;
    return (M, f) => (t(), a("form", {
      class: _(["w-full space-y-6", e.embedded ? "" : x(tt)]),
      "data-slot": "plan-editor",
      onSubmit: ve(S, ["prevent"])
    }, [
      o("header", vx, [
        o("div", null, [
          o("h1", gx, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          f[13] || (f[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(de, {
          type: "button",
          variant: "outline",
          onClick: f[0] || (f[0] = (g) => s("cancel"))
        }, {
          default: O(() => [...f[14] || (f[14] = [
            H("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", hx, [
        o("section", bx, [
          f[26] || (f[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", yx, [
            E(ze, { for: "plan-name" }, {
              default: O(() => [...f[15] || (f[15] = [
                H("Plan name", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": f[1] || (f[1] = (g) => i.name = g),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", xx, [
            E(ze, { for: "plan-short" }, {
              default: O(() => [...f[16] || (f[16] = [
                H("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": f[2] || (f[2] = (g) => i.shortDescription = g),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", kx, [
            E(ze, { for: "plan-description" }, {
              default: O(() => [...f[17] || (f[17] = [
                H("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": f[3] || (f[3] = (g) => i.description = g),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: _(A)
            }, null, 512), [
              [_e, i.description]
            ])
          ]),
          o("div", $x, [
            E(ze, { for: "plan-days" }, {
              default: O(() => [...f[18] || (f[18] = [
                H("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": f[4] || (f[4] = (g) => i.days = g),
              class: _(B)
            }, [...f[19] || (f[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ze,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", wx, [
            E(ze, { for: "plan-price" }, {
              default: O(() => [...f[20] || (f[20] = [
                H("Price", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": f[5] || (f[5] = (g) => i.price = Number(g))
            }, null, 8, ["model-value"])
          ]),
          o("label", Cx, [
            E(x(Je), {
              checked: !!i.featured,
              "onUpdate:checked": f[6] || (f[6] = (g) => i.featured = g)
            }, null, 8, ["checked"]),
            f[21] || (f[21] = H(" Featured ", -1))
          ]),
          o("label", Sx, [
            E(x(Je), {
              checked: !!i.recommended,
              "onUpdate:checked": f[7] || (f[7] = (g) => i.recommended = g)
            }, null, 8, ["checked"]),
            f[22] || (f[22] = H(" Recommended ", -1))
          ]),
          o("label", Mx, [
            E(x(Je), {
              checked: !!i.trial,
              "onUpdate:checked": f[8] || (f[8] = (g) => i.trial = g)
            }, null, 8, ["checked"]),
            f[23] || (f[23] = H(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Bx, [
            E(ze, { for: "plan-trial-days" }, {
              default: O(() => [...f[24] || (f[24] = [
                H("Trial days", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": f[9] || (f[9] = (g) => i.trialDays = Number(g))
            }, null, 8, ["model-value"])
          ])) : k("", !0),
          o("label", Ax, [
            E(x(Je), {
              checked: i.active !== !1,
              "onUpdate:checked": f[10] || (f[10] = (g) => i.active = g)
            }, null, 8, ["checked"]),
            f[25] || (f[25] = H(" Active ", -1))
          ]),
          E(de, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              H(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", _x, [
          f[33] || (f[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", zx, [
            E(ze, null, {
              default: O(() => [...f[27] || (f[27] = [
                H("Modules access", -1)
              ])]),
              _: 1
            }),
            E(tn, {
              modelValue: p.value,
              "onUpdate:modelValue": f[11] || (f[11] = (g) => p.value = g),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(ze, { for: "plan-modules-overview" }, {
              default: O(() => [...f[28] || (f[28] = [
                H("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: _(A),
              onInput: f[12] || (f[12] = (g) => m(
                "modules",
                g.target.value
              ))
            }, null, 40, Px)
          ]),
          (t(!0), a(P, null, j(e.limits, (g) => (t(), a("div", {
            key: g.key,
            class: "space-y-1.5"
          }, [
            g.kind === "toggle" ? (t(), a("label", Lx, [
              E(x(Je), {
                checked: !!d(g.key, !1),
                "onUpdate:checked": (z) => u(
                  g.key,
                  z,
                  i.perks?.[g.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              H(" " + c(g.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              E(ze, {
                for: `plan-limit-${g.key}`
              }, {
                default: O(() => [
                  H(c(g.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              g.hint ? (t(), a("p", Ox, c(g.hint), 1)) : k("", !0),
              E(we, {
                id: `plan-limit-${g.key}`,
                "model-value": Number(d(g.key, 0)),
                type: "number",
                step: g.step ?? 1,
                required: "",
                "onUpdate:modelValue": (z) => u(
                  g.key,
                  Number(z),
                  i.perks?.[g.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              f[29] || (f[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(ze, {
              for: `plan-overview-${g.key}`
            }, {
              default: O(() => [...f[30] || (f[30] = [
                H("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${g.key}`,
              value: i.perks?.[g.key]?.overview ?? "",
              class: _(A),
              onInput: (z) => m(
                g.key,
                z.target.value
              )
            }, null, 40, jx)
          ]))), 128)),
          o("div", Vx, [
            f[32] || (f[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, j(i.extraPerks ?? [], (g, z) => (t(), a("div", {
              key: z,
              class: "flex items-center gap-2"
            }, [
              E(we, {
                modelValue: g.key,
                "onUpdate:modelValue": (T) => g.key = T,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(we, {
                modelValue: g.value,
                "onUpdate:modelValue": (T) => g.value = T,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (T) => C(z)
              }, {
                default: O(() => [
                  (t(), a("svg", Dx, [
                    o("path", {
                      d: x(ce)("x")
                    }, null, 8, Tx)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: b
            }, {
              default: O(() => [...f[31] || (f[31] = [
                H(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Ix = ["data-current", "data-recommended"], Ex = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, Fx = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, Nx = { class: "text-sm font-semibold" }, Rx = { class: "flex items-baseline gap-1" }, Ux = { class: "text-4xl font-bold tracking-tight tabular-nums" }, Hx = { class: "text-muted-foreground text-sm font-normal" }, Kx = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, qx = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, Gx = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, Wx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Zx = ["d"], Jx = { class: "text-muted-foreground" }, Yx = {
  key: 3,
  class: "flex-1"
}, Qx = {
  key: 4,
  class: "mt-auto pt-2"
}, A6 = /* @__PURE__ */ L({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.annual && n.plan.annualPrice !== void 0 ? n.plan.annualPriceFormatted ?? String(n.plan.annualPrice) : n.plan.priceFormatted ?? String(n.plan.price)), i = y(() => n.annual && n.plan.annualPrice !== void 0 ? "year" : n.plan.interval ?? "month"), d = y(() => !!n.plan.recommended && !n.plan.current);
    return (u, m) => (t(), a("article", {
      class: _([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), a("span", Ex, " Most popular ")) : e.plan.current ? (t(), a("span", Fx, " Current plan ")) : k("", !0),
      o("header", {
        class: _(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", Nx, c(e.plan.name), 1),
        o("p", Rx, [
          o("span", Ux, c(s.value), 1),
          o("span", Hx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), a("p", Kx, c(e.plan.description), 1)) : k("", !0)
      ], 2),
      e.plan.features?.length ? (t(), a("ul", qx, [
        (t(!0), a(P, null, j(e.plan.features, (v, p) => (t(), a("li", {
          key: p,
          class: "flex items-start gap-2"
        }, [
          o("span", Gx, [
            (t(), a("svg", Wx, [
              o("path", {
                d: x(ce)("check")
              }, null, 8, Zx)
            ]))
          ]),
          o("span", Jx, c(v), 1)
        ]))), 128))
      ])) : (t(), a("div", Yx)),
      e.plan.current ? k("", !0) : (t(), a("footer", Qx, [
        E(de, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: m[0] || (m[0] = (v) => r("choose", e.plan.id))
        }, {
          default: O(() => [
            H(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, Ix));
  }
}), Xx = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, e0 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, t0 = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, n0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, a0 = ["d"], l0 = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, o0 = ["aria-pressed"], s0 = ["aria-pressed"], r0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, i0 = ["aria-label"], d0 = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, u0 = ["aria-pressed", "onClick"], c0 = ["aria-label"], f0 = { class: "text-muted-foreground mr-1 text-xs font-medium" }, m0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, p0 = ["data-slot"], v0 = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, g0 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, h0 = { class: "flex items-center gap-2" }, b0 = ["disabled"], y0 = ["disabled"], dn = /* @__PURE__ */ L({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Fe({
    items: {},
    searchable: { type: Boolean, default: !1 },
    searchPlaceholder: { default: "Search…" },
    facets: { default: () => [] },
    layoutToggle: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    pageSize: { default: null }
  }, {
    modelValue: { default: "grid" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(""), i = ft(e, "modelValue"), d = dt({}), u = dt({});
    fe(s, () => h());
    function m(F) {
      const Y = F.trim();
      if (Y === "")
        return null;
      const N = Number(Y);
      return Number.isFinite(N) ? N : null;
    }
    function v() {
      const F = {};
      for (const [Y, N] of Object.entries(u))
        F[Y] = { min: m(N.min), max: m(N.max) };
      return F;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function h() {
      r("filter", p());
    }
    function $(F, Y) {
      d[F] = d[F] === Y ? null : Y, h();
    }
    function b(F) {
      return u[F] ?? { min: "", max: "" };
    }
    function C(F, Y, N) {
      const W = u[F] ?? { min: "", max: "" };
      u[F] = { ...W, [Y]: N }, h();
    }
    function S(F) {
      F.key === "Enter" && (F.preventDefault(), r("scan", s.value.trim()));
    }
    const B = y(() => n.facets.filter((F) => (F.kind ?? "chips") === "chips")), A = y(() => n.facets.filter((F) => F.kind === "range")), M = y(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), f = q(1);
    fe(
      () => n.items.map((F) => F.key).join(","),
      () => {
        f.value = 1;
      }
    );
    const g = y(() => {
      const F = n.pageSize;
      return !F || F < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / F));
    }), z = y(() => {
      const F = n.pageSize;
      if (!F || F < 1)
        return n.items;
      const Y = (f.value - 1) * F;
      return n.items.slice(Y, Y + F);
    });
    function T(F) {
      f.value = Math.min(g.value, Math.max(1, F));
    }
    return (F, Y) => (t(), a("div", {
      class: _(["flex flex-col gap-4", x(Yn)])
    }, [
      M.value ? (t(), a("div", Xx, [
        o("div", e0, [
          e.searchable ? (t(), a("div", t0, [
            (t(), a("svg", n0, [
              o("path", {
                d: x(ce)("search")
              }, null, 8, a0)
            ])),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (N) => s.value = N),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : k("", !0),
          G(F.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", l0, [
            o("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (N) => i.value = "grid")
            }, " Tiles ", 10, o0),
            o("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (N) => i.value = "list")
            }, " List ", 10, s0)
          ])) : k("", !0)
        ]),
        B.value.length || A.value.length ? (t(), a("div", r0, [
          (t(!0), a(P, null, j(B.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key
          }, [
            N.label ? (t(), a("span", d0, c(N.label), 1)) : k("", !0),
            (t(!0), a(P, null, j(N.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: _([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[N.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[N.key] === W.value ? "true" : "false",
              onClick: (Z) => $(N.key, W.value)
            }, c(W.label), 11, u0))), 128))
          ], 8, i0))), 128)),
          (t(!0), a(P, null, j(A.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key,
            "data-slot": "catalog-range"
          }, [
            o("span", f0, c(N.label ?? N.key), 1),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${N.label ?? N.key} from`,
              "model-value": b(N.key).min,
              "onUpdate:modelValue": (W) => C(N.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            Y[7] || (Y[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${N.label ?? N.key} to`,
              "model-value": b(N.key).max,
              "onUpdate:modelValue": (W) => C(N.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, c0))), 128))
        ])) : k("", !0)
      ])) : k("", !0),
      e.items.length === 0 ? (t(), a("p", m0, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: _(
          i.value === "list" ? "flex flex-col gap-3" : x(nm)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, j(z.value, (N) => (t(), D(Dy, {
          key: N.key,
          item: N,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (W) => r("select", W)),
          onCart: Y[4] || (Y[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, p0)),
      e.pageSize && g.value > 1 ? (t(), a("div", v0, [
        o("p", g0, " Page " + c(f.value) + " of " + c(g.value), 1),
        o("div", h0, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: f.value <= 1,
            onClick: Y[5] || (Y[5] = (N) => T(f.value - 1))
          }, " Previous ", 8, b0),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: f.value >= g.value,
            onClick: Y[6] || (Y[6] = (N) => T(f.value + 1))
          }, " Next ", 8, y0)
        ])
      ])) : k("", !0)
    ], 2));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function x0(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function k0(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function un(e, l) {
  const n = l.query.trim().toLowerCase();
  if (n !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(n))
    return !1;
  for (const [r, s] of Object.entries(l.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(l.ranges ?? {}))
    if (!k0(x0(e, r), s))
      return !1;
  return !0;
}
function $0(e, l) {
  const n = l.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function Mt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const w0 = { class: "flex flex-col gap-6" }, C0 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, S0 = { class: "text-sm font-semibold" }, M0 = { class: "flex flex-wrap items-center gap-1.5" }, B0 = ["aria-pressed", "onClick"], A0 = { class: "text-sm font-semibold" }, _0 = { class: "flex flex-wrap items-center gap-1.5" }, z0 = { key: 0 }, la = /* @__PURE__ */ L({
  __name: "CatalogFilterSheet",
  props: {
    open: { type: Boolean },
    title: { default: "Filters" },
    searchPlaceholder: { default: "Search…" },
    hideSearch: { type: Boolean, default: !1 },
    facets: {},
    applied: {},
    description: { default: "" }
  },
  emits: ["close", "apply", "reset"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(""), i = dt({}), d = dt({}), u = y(
      () => n.facets.filter((g) => (g.kind ?? "chips") === "chips")
    ), m = y(() => n.facets.filter((g) => g.kind === "range"));
    function v(g) {
      return g == null ? "" : String(g);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const g of Object.keys(i))
        delete i[g];
      for (const [g, z] of Object.entries(n.applied.selected ?? {}))
        i[g] = z;
      for (const g of Object.keys(d))
        delete d[g];
      for (const [g, z] of Object.entries(n.applied.ranges ?? {}))
        d[g] = { min: v(z.min), max: v(z.max) };
    }
    fe(
      () => n.open,
      (g) => {
        g && p();
      }
    );
    function h(g) {
      const z = g.trim();
      if (z === "")
        return null;
      const T = Number(z);
      return Number.isFinite(T) ? T : null;
    }
    function $() {
      const g = {};
      for (const [z, T] of Object.entries(d))
        g[z] = { min: h(T.min), max: h(T.max) };
      return g;
    }
    function b() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: $()
      };
    }
    const C = y(() => {
      let g = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const z of Object.values(i))
        z && (g += 1);
      for (const z of Object.values($()))
        (z.min !== null || z.max !== null) && (g += 1);
      return g;
    });
    function S(g, z) {
      i[g] = i[g] === z ? null : z;
    }
    function B(g) {
      return d[g] ?? { min: "", max: "" };
    }
    function A(g, z, T) {
      const F = d[g] ?? { min: "", max: "" };
      d[g] = { ...F, [z]: T };
    }
    function M() {
      r("apply", b());
    }
    function f() {
      s.value = "";
      for (const g of Object.keys(i))
        i[g] = null;
      for (const g of Object.keys(d))
        d[g] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ...Ee(), query: n.applied.query } : Ee()
      );
    }
    return (g, z) => (t(), D(At, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: z[2] || (z[2] = (T) => r("close"))
    }, {
      footer: O(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: f
        }, " Reset all "),
        E(de, {
          variant: "outline",
          size: "sm",
          onClick: z[1] || (z[1] = (T) => r("close"))
        }, {
          default: O(() => [...z[5] || (z[5] = [
            H("Cancel", -1)
          ])]),
          _: 1
        }),
        E(de, {
          size: "sm",
          onClick: M
        }, {
          default: O(() => [
            z[6] || (z[6] = H(" Apply", -1)),
            C.value ? (t(), a("span", z0, " (" + c(C.value) + ")", 1)) : k("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", w0, [
          e.hideSearch ? k("", !0) : (t(), a("label", C0, [
            z[3] || (z[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": z[0] || (z[0] = (T) => s.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, j(u.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", S0, c(T.label ?? T.key), 1),
            o("div", M0, [
              (t(!0), a(P, null, j(T.options ?? [], (F) => (t(), a("button", {
                key: F.value,
                type: "button",
                class: _([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[T.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[T.key] === F.value ? "true" : "false",
                onClick: (Y) => S(T.key, F.value)
              }, c(F.label), 11, B0))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, j(m.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", A0, c(T.label ?? T.key), 1),
            o("div", _0, [
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${T.label ?? T.key} from`,
                "model-value": B(T.key).min,
                "onUpdate:modelValue": (F) => A(T.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              z[4] || (z[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${T.label ?? T.key} to`,
                "model-value": B(T.key).max,
                "onUpdate:modelValue": (F) => A(T.key, "max", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), P0 = ["aria-disabled"], L0 = ["disabled"], O0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, j0 = ["d"], V0 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, D0 = ["disabled"], T0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, I0 = ["d"], E0 = /* @__PURE__ */ L({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Fe({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const n = ft(e, "modelValue"), r = l, s = y(() => n.value <= e.min), i = y(() => e.max !== null && n.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const m = n.value + u;
      m < e.min || e.max !== null && m > e.max || (n.value = m, u < 0 ? r("decrease", m) : r("increase", m));
    }
    return (u, m) => (t(), a("div", {
      class: "inline-flex h-8 items-center rounded-md border",
      "data-slot": "qty-stepper",
      role: "group",
      "aria-disabled": e.disabled ? "true" : void 0
    }, [
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || s.value,
        "aria-label": "Decrease quantity",
        onClick: m[0] || (m[0] = (v) => d(-1))
      }, [
        (t(), a("svg", O0, [
          o("path", {
            d: x(ce)("minus")
          }, null, 8, j0)
        ]))
      ], 8, L0),
      o("span", V0, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: m[1] || (m[1] = (v) => d(1))
      }, [
        (t(), a("svg", T0, [
          o("path", {
            d: x(ce)("plus")
          }, null, 8, I0)
        ]))
      ], 8, D0)
    ], 8, P0));
  }
}), F0 = { class: "divide-border flex flex-col divide-y" }, N0 = { class: "min-w-0" }, R0 = { class: "truncate text-sm font-medium" }, U0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, H0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, K0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, q0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, G0 = ["aria-label", "onClick"], W0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Z0 = ["d"], J0 = /* @__PURE__ */ L({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: l }) {
    const n = l;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (s, i) => (t(), a("div", F0, [
      (t(!0), a(P, null, j(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", N0, [
          o("p", R0, c(d.label), 1),
          d.detail ? (t(), a("p", U0, c(d.detail), 1)) : k("", !0)
        ]),
        o("div", H0, [
          e.editable ? (t(), D(E0, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", K0, " ×" + c(d.qty), 1)) : k("", !0),
          d.amount ? (t(), a("span", q0, c(d.amount), 1)) : k("", !0),
          d.status ? (t(), D($e, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : k("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => n("remove", d.key)
          }, [
            (t(), a("svg", W0, [
              o("path", {
                d: x(ce)("trash")
              }, null, 8, Z0)
            ]))
          ], 8, G0)) : k("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Y0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Q0 = { class: "border-b px-4 py-3" }, X0 = { class: "text-sm font-medium" }, e2 = { class: "flex-1 px-4 py-3" }, t2 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, n2 = { class: "text-foreground block font-medium" }, a2 = { class: "mt-1 block" }, l2 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, o2 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, s2 = { class: "tabular-nums" }, r2 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, i2 = { class: "text-muted-foreground" }, d2 = {
  key: 0,
  class: "tabular-nums"
}, u2 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, c2 = { class: "text-muted-foreground" }, f2 = { class: "tabular-nums" }, m2 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, p2 = { class: "tabular-nums" }, v2 = {
  key: 4,
  class: "pt-1"
}, g2 = /* @__PURE__ */ L({
  __name: "CartPanel",
  props: {
    items: {},
    title: { default: "Cart" },
    emptyTitle: { default: "Cart is empty" },
    emptyDescription: { default: "Select a product to add it." },
    subtotal: { default: null },
    discountLabel: { default: "Discount" },
    discount: { default: null },
    taxLabel: { default: "Tax" },
    tax: { default: null },
    total: { default: null }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: l }) {
    const n = l;
    return (r, s) => (t(), a("aside", Y0, [
      o("header", Q0, [
        o("h2", X0, c(e.title), 1)
      ]),
      o("div", e2, [
        e.items.length === 0 ? (t(), a("p", t2, [
          o("span", n2, c(e.emptyTitle), 1),
          o("span", a2, c(e.emptyDescription), 1)
        ])) : (t(), D(J0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", l2, [
        e.subtotal ? (t(), a("div", o2, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", s2, c(e.subtotal), 1)
        ])) : k("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", r2, [
          o("span", i2, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", d2, c(e.discount), 1)) : k("", !0),
          G(r.$slots, "discount")
        ])) : k("", !0),
        e.tax ? (t(), a("div", u2, [
          o("span", c2, c(e.taxLabel), 1),
          o("span", f2, c(e.tax), 1)
        ])) : k("", !0),
        e.total ? (t(), a("div", m2, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", p2, c(e.total), 1)
        ])) : k("", !0),
        r.$slots.pay ? (t(), a("div", v2, [
          G(r.$slots, "pay")
        ])) : k("", !0)
      ])) : k("", !0)
    ]));
  }
}), h2 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, b2 = { class: "flex flex-col gap-4" }, y2 = { class: "flex flex-wrap items-start justify-between gap-3" }, x2 = { class: "flex items-center gap-2" }, k2 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, _6 = /* @__PURE__ */ L({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Fe({
    items: {},
    facets: { default: () => [] },
    shelfTitle: { default: "Shelf" },
    shelfDescription: { default: "Tap a product, or type a SKU and press Enter." },
    searchPlaceholder: { default: "Search or scan SKU…" },
    cartTitle: { default: "Cart" },
    taxRate: { default: 0 },
    taxLabel: { default: "Tax" },
    discountRate: { default: 0 },
    discountLabel: { default: "Discount" },
    formatMoney: { type: Function, default: (e) => new Intl.NumberFormat(void 0, { maximumFractionDigits: 0 }).format(
      Math.round(e)
    ) },
    parsePrice: { type: Function, default: (e) => Number(String(e.price ?? "").replace(/[^\d.]/g, "")) || 0 }
  }, {
    cart: { default: () => [] },
    cartModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(Ee()), i = q(!1), d = ft(e, "cart"), u = q(!1), m = y(
      () => n.items.filter((N) => un(N, s.value))
    );
    function v(N) {
      s.value = { ...s.value, query: N.query };
    }
    function p(N) {
      s.value = {
        ...s.value,
        selected: N.selected,
        ranges: N.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function h(N) {
      return N ? n.parsePrice(N) : 0;
    }
    function $(N, W, Z) {
      return {
        ...N,
        qty: W,
        amount: n.formatMoney(Z * W)
      };
    }
    function b(N) {
      const W = $0(n.items, N);
      W && C(W.key);
    }
    function C(N) {
      const W = n.items.find((K) => K.key === N);
      if (!W || W.status === "out-of-stock")
        return;
      u.value = !1;
      const Z = h(W);
      if (d.value.find((K) => K.key === N)) {
        d.value = d.value.map(
          (K) => K.key === N ? $(K, Number(K.qty ?? 1) + 1, Z) : K
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: W.key,
          label: W.label,
          detail: W.caption ?? null,
          qty: 1,
          amount: n.formatMoney(Z)
        }
      ];
    }
    function S(N, W) {
      const Z = n.items.find((K) => K.key === N), J = h(Z);
      d.value = d.value.map(
        (K) => K.key === N ? $(K, W, J) : K
      );
    }
    function B(N) {
      d.value = d.value.filter((W) => W.key !== N);
    }
    const A = y(
      () => d.value.reduce((N, W) => {
        const Z = n.items.find((J) => J.key === W.key);
        return N + h(Z) * Number(W.qty ?? 1);
      }, 0)
    ), M = y(
      () => n.discountRate > 0 ? Math.round(A.value * n.discountRate) : 0
    ), f = y(
      () => Math.round((A.value - M.value) * n.taxRate)
    ), g = y(
      () => d.value.length ? n.formatMoney(A.value) : null
    ), z = y(
      () => d.value.length && M.value > 0 ? `−${n.formatMoney(M.value)}` : null
    ), T = y(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(f.value) : null
    ), F = y(
      () => d.value.length ? n.formatMoney(
        A.value - M.value + f.value
      ) : null
    );
    function Y() {
      u.value = !0, r("pay", d.value);
    }
    return (N, W) => (t(), a(P, null, [
      o("div", h2, [
        o("section", b2, [
          o("div", y2, [
            E(Ie, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", x2, [
              x(Mt)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (Z) => s.value = {
                  ...x(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : k("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: W[1] || (W[1] = (Z) => i.value = !0)
              }, [
                W[5] || (W[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                W[6] || (W[6] = H(" Filters ", -1)),
                x(Mt)(s.value) ? (t(), a("span", k2, " on ")) : k("", !0)
              ])) : k("", !0)
            ])
          ]),
          E(dn, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: m.value,
            onFilter: v,
            onSelect: W[2] || (W[2] = (Z) => r("select", Z)),
            onCart: C,
            onScan: b
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(g2, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: g.value,
          "discount-label": e.discountLabel,
          discount: z.value,
          "tax-label": e.taxLabel,
          tax: T.value,
          total: F.value,
          onQty: S,
          onRemove: B
        }, {
          pay: O(() => [
            G(N.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: Y
            }, () => [
              E(de, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: Y
              }, {
                default: O(() => [
                  H(c(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      E(la, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: W[4] || (W[4] = (Z) => s.value = { ...x(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), $2 = {
  key: 0,
  class: "flex flex-col gap-5"
}, w2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, C2 = ["src", "alt"], S2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, M2 = ["src"], B2 = { class: "flex items-start justify-between gap-3" }, A2 = { class: "text-lg font-semibold tabular-nums" }, _2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, z2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, P2 = { class: "grid grid-cols-2 gap-3" }, L2 = { class: "flex flex-col gap-2" }, O2 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, z6 = /* @__PURE__ */ L({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(p) {
      let h = 0;
      for (const $ of p)
        h = h * 31 + $.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, C) => ({
        label: b,
        value: Math.max(0, Math.round(p + Math.sin(C + h) * p * 0.18))
      }));
    }
    const d = y(() => n.item?.kind === "unit"), u = y(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), m = y(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), v = y(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), D(At, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = ($) => r("close"))
    }, it({
      default: O(() => [
        e.item ? (t(), a("div", $2, [
          o("div", w2, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, C2)) : k("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", S2, [
            (t(!0), a(P, null, j(e.item.images, ($, b) => (t(), a("img", {
              key: b,
              src: $,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, M2))), 128))
          ])) : k("", !0),
          o("div", B2, [
            o("div", null, [
              o("p", A2, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", _2, c(e.item.stock) + " in stock ", 1)) : k("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", z2, c(e.item.facts.join(" · ")), 1)) : k("", !0),
          o("div", P2, [
            E(St, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? m.value : u.value
            }, null, 8, ["label", "value", "series"]),
            E(St, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", L2, [
            o("p", O2, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(zt, {
              data: d.value ? m.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : k("", !0)
      ]),
      _: 2
    }, [
      v.value && e.item ? {
        name: "footer",
        fn: O(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: h[0] || (h[0] = ($) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), j2 = { class: "flex flex-col gap-10" }, V2 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, D2 = { class: "flex flex-col gap-3" }, T2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, I2 = ["src", "alt"], E2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, F2 = ["aria-label", "aria-pressed", "onClick"], N2 = ["src"], R2 = { class: "flex flex-col gap-5" }, U2 = { class: "flex flex-wrap items-start justify-between gap-3" }, H2 = { class: "min-w-0" }, K2 = { class: "text-2xl font-semibold tracking-tight" }, q2 = { class: "text-muted-foreground mt-1 text-sm" }, G2 = { class: "text-2xl font-semibold tabular-nums" }, W2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Z2 = { class: "grid grid-cols-2 gap-3 text-sm" }, J2 = {
  key: 0,
  class: "rounded-lg border p-3"
}, Y2 = { class: "mt-1 font-medium" }, Q2 = { class: "rounded-lg border p-3" }, X2 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, ek = { class: "mt-1 font-medium" }, tk = { class: "flex flex-col gap-4" }, nk = { class: "grid gap-4 sm:grid-cols-2" }, ak = { class: "bg-card rounded-lg border p-4" }, lk = { class: "mb-3 text-sm font-medium" }, ok = /* @__PURE__ */ L({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(b) {
      let C = 0;
      for (const S of b)
        C = C * 31 + S.charCodeAt(0) >>> 0;
      return C;
    }
    function i(b, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((B, A) => ({
        label: B,
        value: Math.max(0, Math.round(b + Math.sin(A + C) * b * 0.18))
      }));
    }
    const d = y(() => n.item.kind === "unit"), u = y(() => {
      const b = [n.item.image, ...n.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(b)];
    }), m = q(0), v = y(() => {
      const b = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(n.item.key) % 7);
    }), p = y(() => {
      const b = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(n.item.key) % 5 + 1);
    }), h = y(() => d.value ? p.value : v.value), $ = y(() => !d.value && n.item.status !== "out-of-stock");
    return (b, C) => (t(), a("div", j2, [
      o("div", V2, [
        o("div", D2, [
          o("div", T2, [
            u.value[m.value] ? (t(), a("img", {
              key: 0,
              src: u.value[m.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, I2)) : k("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", E2, [
            (t(!0), a(P, null, j(u.value, (S, B) => (t(), a("button", {
              key: S,
              type: "button",
              class: _(["size-16 shrink-0 overflow-hidden rounded-md border", B === m.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${B + 1}`,
              "aria-pressed": B === m.value ? "true" : "false",
              onClick: (A) => m.value = B
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, N2)
            ], 10, F2))), 128))
          ])) : k("", !0)
        ]),
        o("div", R2, [
          o("div", U2, [
            o("div", H2, [
              o("h1", K2, c(e.item.label), 1),
              o("p", q2, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : k("", !0)
          ]),
          o("p", G2, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", W2, c(e.item.facts.join(" · ")), 1)) : k("", !0),
          o("dl", Z2, [
            e.item.sku ? (t(), a("div", J2, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", Y2, c(e.item.sku), 1)
            ])) : k("", !0),
            o("div", Q2, [
              o("dt", X2, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", ek, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          $.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : k("", !0)
        ])
      ]),
      o("section", tk, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", nk, [
          E(St, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(St, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", ak, [
          o("p", lk, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(Th, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), sk = ["href"], P6 = /* @__PURE__ */ L({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = l;
    return (r, s) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-8", e.embedded ? "" : x(tt)])
    }, [
      o("a", {
        href: e.catalogHref,
        class: "text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1.5 text-sm"
      }, [
        s[1] || (s[1] = o("svg", {
          class: "size-4",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          o("path", { d: "m15 18-6-6 6-6" })
        ], -1)),
        H(" " + c(e.backLabel), 1)
      ], 8, sk),
      E(ok, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), rk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, ik = ["aria-selected", "onClick"], dk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, uk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, ck = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, fk = ["aria-pressed"], mk = ["aria-pressed"], L6 = /* @__PURE__ */ L({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Fe({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Fe(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(n.tabs[0]?.key ?? ""), i = ft(e, "layout"), d = q({}), u = q(!1);
    fe(
      () => n.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function m(S) {
      return d.value[S] ?? Ee();
    }
    const v = y(
      () => n.tabs.find((S) => S.key === s.value) ?? n.tabs[0] ?? null
    ), p = y(
      () => v.value ? m(v.value.key) : Ee()
    ), h = y(() => {
      const S = v.value;
      return S ? S.items.filter((B) => un(B, m(S.key))) : [];
    });
    function $(S) {
      const B = v.value?.key;
      B && (d.value = {
        ...d.value,
        [B]: { ...m(B), query: S }
      });
    }
    function b() {
      const S = v.value?.key;
      S && (d.value = { ...d.value, [S]: Ee() });
    }
    function C(S) {
      const B = v.value?.key;
      B && (d.value = { ...d.value, [B]: S }, u.value = !1);
    }
    return (S, B) => (t(), a(P, null, [
      o("div", {
        class: _(["flex w-full flex-col gap-8", e.embedded ? "" : x(tt)])
      }, [
        E(Ie, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", rk, [
          (t(!0), a(P, null, j(e.tabs, (A) => (t(), a("button", {
            key: A.key,
            type: "button",
            class: _([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === A.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === A.key ? "true" : "false",
            onClick: (M) => s.value = A.key
          }, c(A.label), 11, ik))), 128))
        ])) : k("", !0),
        o("div", dk, [
          E(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": B[0] || (B[0] = (A) => $(String(A)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x(Mt)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: b
          }, " Clear ")) : k("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: B[1] || (B[1] = (A) => u.value = !0)
          }, [
            B[8] || (B[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            B[9] || (B[9] = H(" Filters ", -1)),
            x(Mt)(p.value) ? (t(), a("span", uk, " on ")) : k("", !0)
          ])) : k("", !0),
          o("div", ck, [
            o("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: B[2] || (B[2] = (A) => i.value = "grid")
            }, " Tiles ", 10, fk),
            o("button", {
              type: "button",
              class: _([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: B[3] || (B[3] = (A) => i.value = "list")
            }, " List ", 10, mk)
          ])
        ]),
        E(dn, {
          layout: i.value,
          "onUpdate:layout": B[4] || (B[4] = (A) => i.value = A),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: B[5] || (B[5] = (A) => r("select", A)),
          onCart: B[6] || (B[6] = (A) => r("cart", A))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(la, {
        open: u.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: p.value,
        onClose: B[7] || (B[7] = (A) => u.value = !1),
        onApply: C,
        onReset: b
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), pk = { class: "flex flex-col gap-4" }, vk = { class: "flex flex-col gap-4" }, O6 = /* @__PURE__ */ L({
  __name: "CatalogRegister",
  props: {
    title: { default: "Register" },
    description: { default: null },
    cardsTitle: { default: "Units" },
    cardsDescription: { default: null },
    tableTitle: { default: "Register" },
    tableDescription: { default: null },
    cards: { default: () => [] },
    facets: { default: () => [] },
    rows: { default: () => [] },
    columns: { default: () => [] },
    searchPlaceholder: { default: "Search…" },
    emptyTitle: { default: "Nothing here" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["select", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(Ee()), i = y(
      () => n.cards.filter((d) => un(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : x(tt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", pk, [
        E(Ie, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(dn, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: u[0] || (u[0] = (m) => s.value = m),
          onSelect: u[1] || (u[1] = (m) => r("select", m)),
          onCart: u[2] || (u[2] = (m) => r("cart", m))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", vk, [
        E(Ie, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(co, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: m }) => [
            E($e, {
              status: String(m)
            }, {
              default: O(() => [
                H(c(m), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), gk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, hk = { class: "text-sm font-medium" }, bk = ["width", "height", "aria-label"], yk = { class: "flex items-center gap-2" }, xk = /* @__PURE__ */ L({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(null), i = q(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function m(S) {
      const B = s.value;
      if (!B)
        return null;
      const A = B.getBoundingClientRect(), M = B.width / A.width, f = B.height / A.height;
      return {
        x: (S.clientX - A.left) * M,
        y: (S.clientY - A.top) * f
      };
    }
    function v(S) {
      n.disabled || (i.value = !0, d = m(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || n.disabled)
        return;
      const B = u(), A = m(S);
      !B || !A || !d || (B.strokeStyle = "#111827", B.lineWidth = 2.4, B.lineCap = "round", B.lineJoin = "round", B.beginPath(), B.moveTo(d.x, d.y), B.lineTo(A.x, A.y), B.stroke(), d = A);
    }
    function h() {
      i.value = !1, d = null;
    }
    function $() {
      const S = s.value, B = u();
      !S || !B || (B.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function b() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function C() {
      const S = s.value, B = u();
      !S || !B || (B.fillStyle = "#ffffff", B.fillRect(0, 0, S.width, S.height));
    }
    return ge(C), ke(() => {
      i.value = !1;
    }), (S, B) => (t(), a("div", gk, [
      o("p", hk, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: _(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ve(v, ["prevent"]),
        onPointermove: ve(p, ["prevent"]),
        onPointerup: ve(h, ["prevent"]),
        onPointerleave: ve(h, ["prevent"])
      }, null, 42, bk),
      o("div", yk, [
        E(de, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: O(() => [...B[0] || (B[0] = [
            H(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: b
        }, {
          default: O(() => [...B[1] || (B[1] = [
            H("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), kk = { class: "grid gap-8 lg:grid-cols-2" }, $k = { class: "flex flex-col gap-3" }, wk = { class: "text-muted-foreground text-xs font-normal" }, Ck = {
  key: 0,
  class: "flex flex-col gap-3"
}, Sk = { class: "flex flex-wrap gap-3" }, Mk = ["onClick"], Bk = ["src", "alt"], Ak = {
  key: 1,
  class: "flex flex-col gap-3"
}, _k = { class: "flex flex-wrap gap-3" }, zk = ["onClick"], Pk = ["src", "alt"], Lk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Ok = { class: "flex flex-wrap items-center gap-2" }, jk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Vk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Dk = { class: "flex flex-col gap-2" }, Tk = ["src"], Ik = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Ek = ["src"], j6 = /* @__PURE__ */ L({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = q([]), r = q([]), s = q(null), i = q(null), d = q(null), u = q(l.documents[0]?.key ?? "");
    function m(S) {
      try {
        const B = localStorage.getItem(S), A = B ? JSON.parse(B) : [];
        return Array.isArray(A) ? A : [];
      } catch {
        return [];
      }
    }
    ge(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = m(`${l.storageKey}.signatures`), r.value = m(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), fe(
      n,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(S));
      },
      { deep: !0 }
    ), fe(
      r,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(S));
      },
      { deep: !0 }
    );
    function v(S) {
      const B = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: S
      };
      n.value = [B, ...n.value].slice(0, 8), s.value = B.id;
    }
    async function p(S, B) {
      await um(S), B(40);
      const A = await new Promise((M, f) => {
        const g = new FileReader();
        g.onload = () => M(String(g.result)), g.onerror = () => f(new Error("Could not read the file")), g.readAsDataURL(S);
      });
      return B(100), { value: A, name: S.name, size: S.size, url: A };
    }
    function h() {
      const S = d.value?.url ?? d.value?.value;
      if (!S)
        return;
      const B = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [B, ...r.value].slice(0, 8), i.value = B.id;
    }
    const $ = y(
      () => n.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), b = y(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), C = y(() => {
      const S = l.documents.find((A) => A.key === u.value)?.document ?? l.documents[0]?.document ?? {}, B = {
        ...S?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...S,
        branding: B
      };
    });
    return (S, B) => (t(), a("div", {
      class: _(["flex w-full flex-col gap-10", e.embedded ? "" : x(tt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", kk, [
        E(xk, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", $k, [
          B[2] || (B[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", wk, c(x(Qn)), 1),
          E(En, {
            modelValue: d.value,
            "onUpdate:modelValue": B[0] || (B[0] = (A) => d.value = A),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          E(de, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: O(() => [...B[1] || (B[1] = [
              H(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Ck, [
        E(Ie, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Sk, [
          (t(!0), a(P, null, j(n.value, (A) => (t(), a("button", {
            key: A.id,
            type: "button",
            class: _(["rounded-md border p-2", A.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (M) => s.value = A.id
          }, [
            o("img", {
              src: A.dataUrl,
              alt: A.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Bk)
          ], 10, Mk))), 128))
        ])
      ])) : k("", !0),
      r.value.length ? (t(), a("section", Ak, [
        E(Ie, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", _k, [
          (t(!0), a(P, null, j(r.value, (A) => (t(), a("button", {
            key: A.id,
            type: "button",
            class: _(["rounded-md border p-2", A.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (M) => i.value = A.id
          }, [
            o("img", {
              src: A.dataUrl,
              alt: A.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Pk)
          ], 10, zk))), 128))
        ])
      ])) : k("", !0),
      e.documents.length ? (t(), a("section", Lk, [
        o("div", Ok, [
          (t(!0), a(P, null, j(e.documents, (A) => (t(), D(de, {
            key: A.key,
            size: "sm",
            variant: u.value === A.key ? "default" : "outline",
            onClick: (M) => u.value = A.key
          }, {
            default: O(() => [
              H(c(A.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", jk, [
          E(Jg, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", Vk, [
            o("div", Dk, [
              B[3] || (B[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              $.value ? (t(), a("img", {
                key: 0,
                src: $.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Tk)) : (t(), a("p", Ik, "Draw and save a signature"))
            ]),
            b.value ? (t(), a("img", {
              key: 0,
              src: b.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Ek)) : k("", !0)
          ])
        ])
      ])) : k("", !0)
    ], 2));
  }
}), V6 = "panel.dashboard.hiddenWidgets", Fk = /* @__PURE__ */ Symbol("dashboardHide"), Nk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, D6 = /* @__PURE__ */ L({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = xt(Fk, null), r = q(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = q(!1);
    ge(() => {
      if (n?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(l.storageKey);
        if (d) {
          const u = JSON.parse(d);
          Array.isArray(u) && (r.value = u.filter(
            (m) => typeof m?.id == "string" && typeof m.label == "string" && typeof m.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), fe(
      r,
      (d) => {
        if (!(!s.value || !l.storageKey))
          try {
            localStorage.setItem(l.storageKey, JSON.stringify(d));
          } catch {
          }
      },
      { deep: !0 }
    );
    const i = y(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? k("", !0) : (t(), a("div", Nk, [
      E(Eb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (m) => r.value = m),
        onHide: u[1] || (u[1] = (m) => x(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Rk = { class: "flex flex-col gap-3" }, Uk = ["data-slot"], Hk = ["aria-pressed", "aria-label", "title"], Kk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Gk = { class: "flex h-8 items-center" }, Wk = ["aria-label", "title", "onClick"], Zk = ["aria-label", "title", "onClick"], Jk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Yk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, T6 = /* @__PURE__ */ L({
  __name: "StatStrip",
  props: {
    segments: {},
    columns: { default: 4 },
    maskable: { type: Boolean, default: !0 },
    hidden: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(n.maskable ? !n.hidden : !0), i = q(/* @__PURE__ */ new Set());
    function d(M) {
      return n.maskable && (M.sensitive ?? !0);
    }
    function u(M) {
      return d(M) && !s.value && !i.value.has(M.key);
    }
    const m = y(() => n.segments.some(u)), v = y(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => p[n.columns] ?? p[4]), $ = y(() => {
      const M = n.columns ?? 4, f = Math.floor(n.segments.length / M) * M;
      return n.segments.slice(0, f);
    }), b = y(() => {
      const M = n.columns ?? 4, f = Math.floor(n.segments.length / M) * M;
      return n.segments.slice(f);
    }), C = y(() => {
      const M = [];
      return $.value.length > 0 && M.push({ key: "packed", joined: !0, segments: $.value }), b.value.length > 0 && M.push({ key: "leftover", joined: !1, segments: b.value }), M;
    });
    function S() {
      const M = m.value === !1;
      s.value = !M, i.value = /* @__PURE__ */ new Set(), r("toggle", M);
    }
    function B(M) {
      if (!d(M))
        return;
      const f = new Set(i.value);
      if (u(M))
        f.add(M.key);
      else if (f.delete(M.key), s.value) {
        s.value = !1;
        for (const g of n.segments)
          g.key !== M.key && d(g) && f.add(g.key);
      }
      i.value = f, r("toggle", m.value);
    }
    function A(M) {
      return typeof M == "number" ? new Intl.NumberFormat().format(M) : M;
    }
    return (M, f) => (t(), a("div", Rk, [
      (t(!0), a(P, null, j(C.value, (g) => (t(), a("div", {
        key: g.key,
        class: _(["relative shrink-0", g.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": g.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && g.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": m.value,
          "aria-label": m.value ? "Show all values" : "Hide all values",
          title: m.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), a("svg", Kk, [
            m.value ? (t(), a(P, { key: 0 }, [
              f[0] || (f[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              f[1] || (f[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              f[2] || (f[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              f[3] || (f[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              f[4] || (f[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              f[5] || (f[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Hk)) : k("", !0),
        o("div", {
          class: _(["grid", [g.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(P, null, j(g.segments, (z) => (t(), a("div", {
            key: z.key,
            class: _(["bg-card flex flex-col gap-2 p-4", g.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", qk, c(z.label), 1),
            o("div", Gk, [
              e.loading ? (t(), D(Pe, {
                key: 0,
                variant: "number"
              })) : u(z) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${z.label} hidden. Show it.`,
                title: `Show ${z.label}`,
                onClick: (T) => B(z)
              }, [
                (t(), a(P, null, j(5, (T) => o("span", {
                  key: T,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Wk)) : d(z) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${z.label}, ${A(z.value)}. Hide it.`,
                title: `Hide ${z.label}`,
                onClick: (T) => B(z)
              }, c(A(z.value)), 9, Zk)) : (t(), a("span", Jk, c(A(z.value)), 1)),
              z.trend && !e.loading && !u(z) ? (t(), D(aa, {
                key: 4,
                direction: z.trend.direction,
                percentage: z.trend.percentage,
                inverted: z.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : k("", !0)
            ]),
            z.sparkline?.length && !e.loading && !u(z) ? (t(), D(zt, {
              key: 0,
              data: z.sparkline,
              height: 24
            }, null, 8, ["data"])) : k("", !0),
            z.caption || z.comparison && z.trend ? (t(), a("p", Yk, c(z.caption ?? z.comparison), 1)) : k("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Uk))), 128))
    ]));
  }
}), Qk = ["aria-label"], Xk = { class: "flex items-center justify-between gap-3" }, e$ = ["aria-valuenow", "aria-label"], t$ = { class: "flex items-center gap-3" }, n$ = { class: "min-w-0 flex-1 text-sm" }, a$ = { class: "font-medium" }, l$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 block text-xs sm:mt-0 sm:inline sm:before:content-[':_']"
}, o$ = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, s$ = { class: "flex items-center justify-between gap-2" }, r$ = { class: "text-sm font-semibold" }, i$ = { class: "flex items-center gap-3" }, d$ = ["href"], u$ = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, c$ = { class: "flex min-w-0 flex-col gap-0.5" }, f$ = { class: "text-sm font-medium" }, m$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, p$ = {
  key: 1,
  class: "flex flex-col gap-2"
}, v$ = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, g$ = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, h$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, I6 = /* @__PURE__ */ L({
  __name: "SetupChecklist",
  props: {
    items: {},
    reportHref: { default: null },
    heading: { default: "Setup checklist" },
    skipLabel: { default: null },
    linkComponent: { default: "a" },
    variant: { default: "doctor" }
  },
  emits: ["skip"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.items.find((b) => !b.done) ?? null), i = y(() => n.items.filter((b) => b.key !== s.value?.key)), d = y(() => n.items.length), u = y(() => n.items.filter((b) => b.done).length), m = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), v = y(() => {
      const b = n.linkComponent;
      return typeof b == "string" ? b : va(b);
    }), p = st({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), h = st({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), $ = st({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (b, C) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "flex flex-col gap-2.5 rounded-md border bg-card p-3",
      "aria-label": e.heading
    }, [
      o("div", Xk, [
        o("div", {
          class: "flex flex-1 items-center gap-1",
          role: "progressbar",
          "aria-valuenow": m.value,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-label": `${e.heading}, ${m.value} percent complete`
        }, [
          (t(!0), a(P, null, j(e.items, (S, B) => (t(), a("span", {
            key: S.key,
            class: _(["h-1.5 flex-1 rounded-sm transition-colors duration-300", B < u.value ? "bg-amber-500" : "bg-muted"])
          }, null, 2))), 128))
        ], 8, e$),
        e.skipLabel ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: C[0] || (C[0] = (S) => r("skip"))
        }, c(e.skipLabel), 1)) : k("", !0)
      ]),
      o("div", t$, [
        o("p", n$, [
          o("span", a$, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", l$, c(s.value.detail), 1)) : k("", !0)
        ]),
        s.value?.href ? (t(), D(Ae(v.value), {
          key: 0,
          href: s.value.href,
          class: _(x(h))
        }, {
          default: O(() => [
            H(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : k("", !0)
      ])
    ], 8, Qk)) : e.items.length ? (t(), a("section", o$, [
      o("div", s$, [
        o("h2", r$, c(e.heading), 1),
        o("div", i$, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: C[1] || (C[1] = (S) => r("skip"))
          }, c(e.skipLabel), 1)) : k("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, d$)) : k("", !0)
        ])
      ]),
      s.value ? (t(), a("div", u$, [
        C[2] || (C[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", c$, [
          o("p", f$, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", m$, c(s.value.detail), 1)) : k("", !0),
          s.value.href ? (t(), D(Ae(v.value), {
            key: 1,
            href: s.value.href,
            class: _(x(p))
          }, {
            default: O(() => [
              H(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : k("", !0)
        ])
      ])) : k("", !0),
      i.value.length ? (t(), a("ul", p$, [
        (t(!0), a(P, null, j(i.value, (S) => (t(), a("li", {
          key: S.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: _([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              S.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            S.done ? (t(), a("svg", v$, [...C[3] || (C[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : k("", !0)
          ], 2),
          o("div", g$, [
            o("p", {
              class: _(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(S.title), 3),
            !S.done && S.detail ? (t(), a("p", h$, c(S.detail), 1)) : k("", !0)
          ]),
          !S.done && S.href ? (t(), D(Ae(v.value), {
            key: 0,
            href: S.href,
            class: _(x($))
          }, {
            default: O(() => [
              H(c(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : k("", !0)
        ]))), 128))
      ])) : k("", !0)
    ])) : k("", !0);
  }
}), b$ = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, y$ = { class: "hidden items-center gap-2 md:flex" }, x$ = { class: "md:hidden" }, k$ = { class: "border-b px-4 py-3" }, $$ = { class: "text-muted-foreground text-xs font-normal" }, w$ = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, C$ = { class: "font-medium tabular-nums" }, S$ = { class: "ml-auto flex items-center gap-3" }, E6 = /* @__PURE__ */ L({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = q(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", b$, [
      o("div", y$, [
        G(i.$slots, "actions")
      ]),
      o("div", x$, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        E(nn, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: O(() => [
            E(an, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", k$, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", $$, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", w$, [
                  G(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", C$, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          H(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          H(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", S$, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => n("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : k("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), M$ = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, B$ = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, A$ = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, _$ = ["value"], z$ = ["value"], P$ = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, L$ = ["disabled"], O$ = ["disabled"], j$ = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, V$ = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, D$ = ["disabled"], F6 = /* @__PURE__ */ L({
  __name: "TablePagination",
  props: {
    page: {},
    perPage: {},
    perPageOptions: { default: () => [10, 25, 50] },
    rowsOnPage: {},
    hasNext: { type: Boolean },
    hasPrevious: { type: Boolean },
    total: {},
    loading: { type: Boolean, default: !1 }
  },
  emits: ["next", "previous", "first", "update:perPage"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = (m) => new Intl.NumberFormat().format(m), i = y(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = y(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = y(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (m, v) => (t(), a("div", M$, [
      o("p", B$, [
        H(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          H("of " + c(s(e.total)), 1)
        ], 64)) : k("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", A$, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(P, null, j(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, c(p), 9, z$))), 128))
        ], 40, _$)
      ])) : k("", !0),
      o("nav", P$, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: v[1] || (v[1] = (p) => r("first"))
        }, [...v[5] || (v[5] = [
          o("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "m17 18-6-6 6-6M11 18l-6-6 6-6" })
          ], -1)
        ])], 8, L$),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: v[2] || (v[2] = (p) => r("previous"))
        }, [...v[6] || (v[6] = [
          o("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "m15 18-6-6 6-6" })
          ], -1)
        ])], 8, O$),
        o("span", j$, c(e.page), 1),
        u.value !== null ? (t(), a("span", V$, " of " + c(s(u.value)), 1)) : k("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: v[3] || (v[3] = (p) => r("next"))
        }, [...v[7] || (v[7] = [
          o("svg", {
            class: "size-4",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            o("path", { d: "m9 18 6-6-6-6" })
          ], -1)
        ])], 8, D$)
      ])
    ]));
  }
}), T$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, I$ = ["aria-current"], E$ = ["title"], F$ = ["aria-current", "onClick"], N$ = ["title"], R$ = /* @__PURE__ */ L({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = l;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), a("div", T$, [
      o("button", {
        type: "button",
        class: _([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = H(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: _([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, E$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, I$),
      (t(!0), a(P, null, j(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: _([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        H(c(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: _([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, N$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, F$))), 128))
    ]));
  }
}), N6 = /* @__PURE__ */ Bt(R$, [["__scopeId", "data-v-3967c945"]]), U$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, H$ = { class: "grid gap-2" }, K$ = {
  key: 0,
  class: "text-destructive text-sm"
}, q$ = { class: "flex gap-2" }, R6 = /* @__PURE__ */ L({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = q((() => {
      const $ = navigator.userAgent, b = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: S }) => S.test($))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: S }) => S.test($))?.name;
      return [b, C].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), d = ga(null), u = y(() => d.value?.isLoading.value ?? !1), m = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
    ge(async () => {
      try {
        const { usePasskeyRegister: $ } = await import("@laravel/passkeys/vue");
        d.value = $({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const p = async ($) => {
      $.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return ($, b) => v.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", H$, [
        b[3] || (b[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": b[1] || (b[1] = (C) => s.value = C),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [_e, s.value]
        ]),
        b[4] || (b[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      m.value ? (t(), a("p", K$, c(m.value), 1)) : k("", !0),
      o("div", q$, [
        E(de, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: O(() => [
            H(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: O(() => [...b[5] || (b[5] = [
            H(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(de, {
      key: 1,
      variant: "outline",
      onClick: b[0] || (b[0] = (C) => i.value = !0)
    }, {
      default: O(() => [...b[2] || (b[2] = [
        H(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", U$, " Passkeys are not supported in this browser. "));
  }
}), G$ = { class: "pk-form-stack" }, W$ = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, U6 = /* @__PURE__ */ L({
  __name: "RecordForm",
  props: {
    nodes: { default: () => [] },
    fields: { default: () => [] },
    columns: { default: 1 },
    modelValue: {},
    errors: { default: () => ({}) },
    options: { default: () => ({}) },
    processing: { type: Boolean, default: !1 },
    searchOptions: {},
    upload: {},
    discard: {},
    pickerBase: {},
    returnUrl: {},
    createOption: {}
  },
  emits: ["change", "affix-action"],
  setup(e, { emit: l }) {
    const n = e;
    It("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), It("panelCreateOption", {
      run(m, v) {
        return n.createOption ? n.createOption(m, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => n.nodes.length > 0), i = y(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => n.errors._conflict);
    function u(m) {
      if (n.upload)
        return (v, p) => n.upload(m, v, p);
    }
    return (m, v) => (t(), a("div", G$, [
      d.value ? (t(), a("p", W$, c(d.value), 1)) : k("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, j(e.nodes, (p, h) => (t(), D(Nn, {
        key: h,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = ($, b) => r("change", $, b)),
        onAffixAction: v[1] || (v[1] = ($, b) => r("affix-action", $, b))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: _(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, j(e.fields, (p) => (t(), D(Ge, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (h) => e.searchOptions(p.key, h) : void 0,
          upload: u(p.key),
          discard: e.discard,
          class: _(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), Z$ = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, J$ = ["disabled"], Y$ = ["disabled"], Q$ = ["disabled"], X$ = ["disabled"], H6 = /* @__PURE__ */ L({
  __name: "UnsavedBar",
  props: {
    show: { type: Boolean },
    processing: { type: Boolean, default: !1 },
    message: { default: "Unsaved changes" },
    saveLabel: { default: "Save" },
    cancelLabel: { default: "Cancel" },
    discardLabel: {},
    extraLabel: {}
  },
  emits: ["save", "cancel", "discard", "extra"],
  setup(e) {
    const l = q(!1);
    ge(() => {
      l.value = !!document.getElementById("pk-main");
    });
    const n = y(() => l.value ? "#pk-main" : "body"), r = y(() => !l.value), s = y(
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 px-3 pb-3 sm:bottom-0 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 px-3 pb-3 sm:bottom-0 sm:px-4 sm:pb-4"
    ), i = { opacity: "0", transform: "translateY(0.75rem)" }, d = { opacity: "1", transform: "translateY(0)" };
    function u(v, p) {
      const h = v;
      Object.assign(h.style, i, { transition: "none" }), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          h.style.transition = "opacity 200ms ease-out, transform 200ms ease-out", Object.assign(h.style, d);
        });
      }), setTimeout(p, 200);
    }
    function m(v, p) {
      const h = v;
      Object.assign(h.style, d, { transition: "opacity 150ms ease-in, transform 150ms ease-in" }), requestAnimationFrame(() => {
        Object.assign(h.style, i);
      }), setTimeout(p, 150);
    }
    return (v, p) => (t(), D(ct, {
      to: n.value,
      disabled: r.value
    }, [
      E(Qe, {
        css: !1,
        onEnter: u,
        onLeave: m
      }, {
        default: O(() => [
          e.show ? (t(), a("div", {
            key: 0,
            class: _(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: _([
                x(fo),
                "pointer-events-auto flex items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10"
              ])
            }, [
              p[4] || (p[4] = o("span", {
                class: "text-amber-600 dark:text-amber-400",
                "aria-hidden": "true"
              }, [
                o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9"
                  }),
                  o("path", { d: "M12 8v4M12 16h.01" })
                ])
              ], -1)),
              o("span", Z$, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[0] || (p[0] = (h) => v.$emit("discard"))
              }, c(e.discardLabel), 9, J$)) : k("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[1] || (p[1] = (h) => v.$emit("cancel"))
              }, c(e.cancelLabel), 9, Y$),
              e.extraLabel ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[2] || (p[2] = (h) => v.$emit("extra"))
              }, c(e.extraLabel), 9, Q$)) : k("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: p[3] || (p[3] = (h) => v.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, X$)
            ], 2)
          ], 2)) : k("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function K6(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = q(Dt(e.value)), s = y(() => Dt(e.value) !== r.value);
  function i() {
    r.value = Dt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(m) {
    s.value && (m.preventDefault(), m.returnValue = "");
  }
  return ge(() => {
    n && window.addEventListener("beforeunload", u);
  }), ke(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function Dt(e) {
  return JSON.stringify(e, (l, n) => n === void 0 ? null : n === null || typeof n != "object" || Array.isArray(n) ? n : Object.fromEntries(
    Object.entries(n).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const gt = /* @__PURE__ */ new Map();
function q6(e, l) {
  gt.set(e, l);
}
function ew(e) {
  return gt.get(e);
}
function G6(e) {
  return gt.has(e);
}
function tw() {
  return [...gt.keys()].sort();
}
function W6() {
  gt.clear();
}
const nw = {
  key: 0,
  class: "flex flex-col gap-1"
}, aw = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, lw = { class: "text-foreground text-sm font-medium" }, ow = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, sw = {
  key: 5,
  class: "max-w-full font-normal"
}, rw = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, iw = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, dw = {
  key: 6,
  class: "font-normal"
}, uw = {
  key: 0,
  class: "divide-y rounded-md border"
}, cw = { class: "text-muted-foreground truncate font-medium" }, fw = { class: "text-foreground col-span-2 break-words" }, mw = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, pw = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, vw = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, gw = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, hw = ["href"], bw = { class: "flex min-w-0 items-start gap-2.5" }, yw = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, xw = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, kw = ["d"], $w = { class: "min-w-0" }, ww = { class: "flex flex-wrap items-center gap-2" }, Cw = { class: "text-sm font-semibold" }, Sw = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Mw = ["onClick"], Z6 = /* @__PURE__ */ L({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!n.node.collapsed), i = q(0), d = y(() => n.depth === 0), u = y(() => {
      const B = n.node.columns ?? (n.node.component === "section" ? 2 : 1);
      return B >= 3 ? "sm:grid-cols-3" : B === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), m = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = y(() => n.node.key ? n.record[n.node.key] : null), p = y(() => {
      const B = v.value;
      return B == null || B === "";
    }), h = y(() => {
      if (p.value)
        return "None";
      const B = Number(v.value);
      if (Number.isNaN(B))
        return "None";
      const A = n.node.divideBy ?? 100, M = B / A, f = n.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: f }).format(M);
      } catch {
        return `${f} ${M.toFixed(2)}`;
      }
    }), $ = y(() => {
      if (p.value)
        return "None";
      const B = v.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(B)).toLocaleDateString(void 0, m[n.node.type]);
      if (n.node.type === "money")
        return h.value;
      let A = String(B);
      return n.node.transform === "upper" && (A = A.toUpperCase()), n.node.transform === "lower" && (A = A.toLowerCase()), [n.node.prefix, A, n.node.suffix].filter(Boolean).join(" ");
    }), b = y(() => {
      const B = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), A = n.node.colors?.[B] ?? n.node.defaultColor ?? "neutral";
      return ln[A] ?? "outline";
    }), C = y(() => {
      const B = typeof n.node.view == "string" ? n.node.view : "";
      return B ? ew(B) : void 0;
    }), S = y(() => {
      const B = typeof n.node.view == "string" ? n.node.view : "";
      if (!B)
        return "ViewEntry has no view name.";
      const A = tw(), M = A.length > 0 ? A.join(", ") : "(none)";
      return `No entry view for [${B}]; registered: ${M}`;
    });
    return (B, A) => {
      const M = Wt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", nw, [
        o("dt", aw, c(e.node.label), 1),
        o("dd", lw, [
          e.node.type === "badge" && x(Lu)(v.value) ? (t(), D(We, {
            key: 0,
            variant: b.value,
            class: "capitalize"
          }, {
            default: O(() => [
              H(c(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", ow, "None")) : e.node.type === "icon" ? (t(), D(ou, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(uu, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(vu, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", sw, [
            e.node.language ? (t(), a("p", rw, c(e.node.language), 1)) : k("", !0),
            o("pre", iw, [
              o("code", null, c(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", dw, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), a("dl", uw, [
              (t(!0), a(P, null, j(v.value, (f, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", cw, c(g), 1),
                o("dd", fw, c(f), 1)
              ]))), 128))
            ])) : (t(), a("span", mw, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", pw, [
            (t(!0), a(P, null, j(Array.isArray(v.value) ? v.value : [], (f, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, j(e.node.entries ?? [], (z, T) => (t(), D(M, {
                key: T,
                node: z,
                record: f,
                depth: e.depth + 1,
                onAction: A[0] || (A[0] = (F) => r("action", F))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), a("span", vw, "None")) : k("", !0)
          ])) : e.node.type === "money" ? (t(), a("span", {
            key: 8,
            class: _(p.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), D(Ae(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: v.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), a("p", gw, c(S.value), 1)) : e.node.url && !p.value ? (t(), a("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c($.value), 9, hw)) : (t(), a("span", {
            key: 12,
            class: _([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c($.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: A[1] || (A[1] = (f) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : k("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: _(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: _(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: A[2] || (A[2] = (f) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", bw, [
            e.node.icon ? (t(), a("div", yw, [
              (t(), a("svg", xw, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, kw)
              ]))
            ])) : k("", !0),
            o("div", $w, [
              o("div", ww, [
                o("h3", Cw, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : k("", !0)
              ]),
              e.node.description ? (t(), a("p", Sw, c(e.node.description), 1)) : k("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: _(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (f, g) => (t(), D(M, {
            key: g,
            node: f,
            record: e.record,
            depth: e.depth + 1,
            onAction: A[3] || (A[3] = (z) => r("action", z))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : k("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: _(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (f, g) => (t(), D(M, {
          key: g,
          node: f,
          record: e.record,
          depth: e.depth + 1,
          onAction: A[4] || (A[4] = (z) => r("action", z))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: _(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: _(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (f, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: _([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (z) => i.value = g
          }, c(f.label), 11, Mw))), 128))
        ], 2),
        (t(!0), a(P, null, j(e.node.children ?? [], (f, g) => pe((t(), a("div", {
          key: g,
          class: _(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(f.children ?? [], (z, T) => (t(), D(M, {
            key: T,
            node: z,
            record: e.record,
            depth: e.depth + 1,
            onAction: A[5] || (A[5] = (F) => r("action", F))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ke, i.value === g]
        ])), 128))
      ], 2)) : k("", !0);
    };
  }
}), Bw = { class: "text-muted-foreground text-sm font-normal" }, Aw = { class: "flex items-start gap-3" }, _w = { class: "min-w-0 flex-1" }, zw = { class: "flex flex-wrap items-center gap-2" }, Pw = { class: "truncate text-sm font-medium" }, Lw = { class: "text-muted-foreground mt-0.5 text-xs" }, Ow = { class: "text-muted-foreground text-xs font-normal" }, jw = { class: "mt-auto flex items-center gap-2" }, Vw = /* @__PURE__ */ L({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", {
      class: _(["flex flex-col gap-4", x(Yn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", Bw, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: _(x(tm))
      }, [
        (t(!0), a(P, null, j(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Aw, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", _w, [
              o("div", zw, [
                o("h3", Pw, c(u.label), 1),
                E($e, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    H(c(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D($e, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...d[0] || (d[0] = [
                    H(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D($e, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...d[1] || (d[1] = [
                    H(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                u.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...d[2] || (d[2] = [
                    H(" Default ", -1)
                  ])]),
                  _: 1
                })) : k("", !0),
                u.connected && u.mode ? (t(), D($e, {
                  key: 3,
                  status: u.mode
                }, {
                  default: O(() => [
                    H(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : k("", !0)
              ]),
              o("p", Lw, c(u.caption), 1)
            ])
          ]),
          o("p", Ow, c(u.methods.join(" · ")), 1),
          o("div", jw, [
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: (m) => r("configure", u.key)
            }, {
              default: O(() => [...d[3] || (d[3] = [
                H(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(de, {
              size: "sm",
              variant: "ghost",
              onClick: (m) => r("toggle", u.key)
            }, {
              default: O(() => [
                H(c(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Dw = { class: "flex flex-col gap-6" }, Tw = { class: "relative" }, Iw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Ew = ["d"], Fw = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Nw = {
  key: 0,
  class: "flex flex-col gap-4"
}, Rw = { class: "flex flex-wrap items-center gap-2" }, Uw = { class: "text-muted-foreground text-sm font-normal" }, Hw = { class: "flex flex-col gap-1 text-sm" }, Kw = ["value"], qw = {
  key: 0,
  class: "flex flex-col gap-2"
}, Gw = { class: "flex flex-wrap items-center gap-2" }, Ww = {
  key: 1,
  class: "flex items-center gap-2"
}, J6 = /* @__PURE__ */ L({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Fe({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = ft(e, "gateways"), n = q(null), r = q(""), s = y(
      () => l.value.find((b) => b.key === n.value) ?? null
    ), i = y(() => {
      const b = r.value.trim().toLowerCase();
      return b === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(b));
    });
    function d(b) {
      return b.connected && b.enabled !== !1;
    }
    function u(b, C) {
      l.value = l.value.map(
        (S) => S.key === b ? { ...S, ...C } : S
      );
    }
    function m(b) {
      n.value = b;
    }
    function v(b) {
      const C = l.value.find((B) => B.key === b);
      if (!C)
        return;
      const S = !C.connected;
      u(b, {
        connected: S,
        mode: S ? C.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p(b, C) {
      const S = l.value.find((B) => B.key === b);
      S?.connected && u(b, { enabled: C, isDefault: C ? S.isDefault : !1 });
    }
    function h(b) {
      const C = l.value.find((S) => S.key === b);
      !C || !d(C) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === b
      })));
    }
    function $(b) {
      const C = n.value;
      !C || !l.value.find((B) => B.key === C)?.connected || u(C, { mode: b });
    }
    return (b, C) => (t(), a(P, null, [
      o("div", Dw, [
        E(Ie, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", Tw, [
          (t(), a("svg", Iw, [
            o("path", {
              d: x(ce)("search")
            }, null, 8, Ew)
          ])),
          E(we, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(Vw, {
          key: 0,
          gateways: i.value,
          onConfigure: m,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), a("p", Fw, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      E(At, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (S) => n.value = null)
      }, {
        footer: O(() => [
          E(de, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (S) => n.value = null)
          }, {
            default: O(() => [...C[21] || (C[21] = [
              H("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(de, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (S) => v(s.value.key))
          }, {
            default: O(() => [
              H(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : k("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), a("div", Nw, [
            o("div", Rw, [
              E($e, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  H(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D($e, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [...C[9] || (C[9] = [
                  H(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D($e, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [...C[10] || (C[10] = [
                  H(" Disabled ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.isDefault ? (t(), D($e, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...C[11] || (C[11] = [
                  H(" Default ", -1)
                ])]),
                _: 1
              })) : k("", !0),
              s.value.connected && s.value.mode ? (t(), D($e, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  H(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : k("", !0)
            ]),
            o("p", Uw, c(s.value.caption), 1),
            o("label", Hw, [
              C[12] || (C[12] = H(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Kw)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              H(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", qw, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", Gw, [
                E(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (S) => p(s.value.key, !0))
                }, {
                  default: O(() => [...C[13] || (C[13] = [
                    H(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (S) => p(s.value.key, !1))
                }, {
                  default: O(() => [...C[14] || (C[14] = [
                    H(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(de, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: C[3] || (C[3] = (S) => h(s.value.key))
                }, {
                  default: O(() => [...C[15] || (C[15] = [
                    H(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : k("", !0),
            s.value.connected ? (t(), a("div", Ww, [
              E(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (S) => $("test"))
              }, {
                default: O(() => [...C[18] || (C[18] = [
                  H(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (S) => $("live"))
              }, {
                default: O(() => [...C[19] || (C[19] = [
                  H(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : k("", !0)
          ])) : k("", !0)
        ]),
        _: 1
      }, 8, ["open", "title"])
    ], 64));
  }
});
function Bn(e) {
  if (typeof localStorage > "u")
    return /* @__PURE__ */ new Set();
  try {
    const l = localStorage.getItem(e);
    if (l)
      return new Set(JSON.parse(l));
  } catch {
  }
  return /* @__PURE__ */ new Set();
}
function Y6(e) {
  const l = q(Bn(e));
  ge(() => {
    l.value = Bn(e);
  }), fe(
    l,
    (u) => {
      try {
        localStorage.setItem(e, JSON.stringify([...u]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function n(u) {
    const m = new Set(l.value);
    m.has(u) ? m.delete(u) : m.add(u), l.value = m;
  }
  function r(u) {
    const m = new Set(l.value);
    m.add(u), l.value = m;
  }
  function s(u) {
    const m = new Set(l.value);
    m.delete(u), l.value = m;
  }
  function i(u) {
    l.value = new Set(u);
  }
  function d() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: n, hide: r, show: s, setHidden: i, reset: d };
}
function An(e) {
  if (typeof localStorage > "u")
    return {};
  try {
    const l = localStorage.getItem(e);
    if (!l)
      return {};
    const n = JSON.parse(l), r = {};
    for (const [s, i] of Object.entries(n))
      typeof i == "number" && i >= 48 && i <= 1200 && (r[s] = i);
    return r;
  } catch {
    return {};
  }
}
function Q6(e) {
  const l = q(An(e));
  ge(() => {
    l.value = An(e);
  }), fe(
    l,
    (i) => {
      try {
        localStorage.setItem(e, JSON.stringify(i));
      } catch {
      }
    },
    { deep: !0, flush: "sync" }
  );
  function n(i, d) {
    const u = Math.min(1200, Math.max(48, Math.round(d)));
    l.value = { ...l.value, [i]: u };
  }
  function r(i) {
    const d = {};
    for (const [u, m] of Object.entries(i))
      typeof m == "number" && m >= 48 && m <= 1200 && (d[u] = Math.round(m));
    l.value = d;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: n, setWidths: r, reset: s };
}
function X6(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = q(
    l.driver === "none" ? "off" : "connecting"
  ), m = q(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), p, h, $, b = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function S(W, Z) {
    v.set(W, { ...v.get(W) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, B();
    }, l.batchMs));
  }
  function B() {
    if (v.size === 0)
      return;
    const W = v;
    v = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [J, K] of W) {
      const U = n.value.find((R) => R[r] === J);
      if (!U) {
        d?.(J, K);
        continue;
      }
      Object.assign(U, K), Z.add(J);
    }
    Z.size !== 0 && (m.value = /* @__PURE__ */ new Set([...m.value, ...Z]), setTimeout(() => {
      const J = new Set(m.value);
      Z.forEach((K) => J.delete(K)), m.value = J;
    }, 1500));
  }
  async function A() {
    if (!(!s || n.value.length === 0)) {
      $?.abort(), $ = new AbortController();
      try {
        const W = n.value.map((K) => K[r]), { records: Z, at: J } = await s(W, b);
        b = J, u.value = "live";
        for (const K of Z)
          S(K[r], K);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function M() {
    f(), u.value = "live", h = setInterval(A, l.intervalMs);
  }
  function f() {
    clearInterval(h), h = void 0, $?.abort();
  }
  function g() {
    return window.Echo ?? null;
  }
  function z() {
    const W = g();
    if (!W || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const Z = W.private(l.channel);
    for (const J of l.events)
      Z.listen(J, (K) => {
        K?.[r] !== void 0 && S(K[r], K);
      });
    u.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function T() {
    C && (g()?.leave(C), C = null);
  }
  function F() {
    l.driver === "poll" && M(), l.driver === "broadcast" && z();
  }
  function Y() {
    f(), T(), clearTimeout(p), p = void 0, v = /* @__PURE__ */ new Map();
  }
  function N() {
    l.pauseWhenHidden && (document.hidden ? (Y(), u.value = "paused") : (b = (/* @__PURE__ */ new Date()).toISOString(), F(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", N));
  }), ke(() => {
    document.removeEventListener("visibilitychange", N), Y();
  }), { status: u, recentlyChanged: m, applyPatch: S, flush: B, pollOnce: A };
}
const Zw = /^[a-z0-9-]+$/, Jw = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function eS(e) {
  ha(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !Zw.test(n) || typeof r != "string" || !Jw.test(r) || (l[`--${n}`] = r);
    Ac(l);
  });
}
const Yw = { class: "flex items-center gap-0.5" }, Qw = /* @__PURE__ */ L({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Yw, [
      String(e.value) === "mono" ? (t(), a(P, { key: 0 }, [
        n[0] || (n[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(P, { key: 1 }, [
        n[3] || (n[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), Xw = /* @__PURE__ */ L({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), D(na, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), e4 = { class: "flex flex-col gap-2" }, t4 = { class: "bg-card rounded-lg border p-4" }, n4 = { class: "text-muted-foreground truncate text-xs" }, a4 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, l4 = /* @__PURE__ */ L({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const l = e, n = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = y(() => ({ ...n, ...l.field.limits ?? {} })), s = y(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = y(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = y(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = y(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? d.value : `${d.value} › ${C.split("/").join(" › ")}`;
    });
    function m(C, S) {
      return C.length <= S ? C : `${C.slice(0, S - 1).trimEnd()}…`;
    }
    const v = y(() => m(s.value, r.value.titleMax)), p = y(() => m(i.value, r.value.descriptionMax));
    function h(C, S, B) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > B ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const $ = y(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), b = y(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, S) => (t(), a("div", e4, [
      o("div", t4, [
        o("p", n4, c(u.value), 1),
        o("p", {
          class: _(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, c(v.value || "Untitled page"), 3),
        o("p", {
          class: _(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", a4, [
        o("span", {
          class: _($.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c($.value.note), 3),
        o("span", {
          class: _(b.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(b.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), o4 = ["value", "placeholder", "disabled"], s4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => typeof n.modelValue == "string" ? n.modelValue : "");
    function i(d) {
      const u = d.target.value;
      r("update:modelValue", u === "" ? null : u.trim());
    }
    return (d, u) => (t(), a("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: _(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", x(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, o4));
  }
}), r4 = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, i4 = ["aria-selected", "disabled", "title", "onClick"], d4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.field.icons ?? []), i = y(() => typeof n.modelValue == "string" ? n.modelValue : "");
    function d(u) {
      n.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, m) => (t(), a("div", r4, [
      (t(!0), a(P, null, j(s.value, (v) => (t(), a("button", {
        key: v,
        type: "button",
        role: "option",
        class: _(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [x(Se), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (p) => d(v)
      }, c(v), 11, i4))), 128))
    ]));
  }
}), u4 = {
  class: "relative",
  "data-test": "tree-select-field"
}, c4 = ["disabled"], f4 = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, m4 = ["onClick"], p4 = ["onClick"], v4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(""), i = q(!1), d = y(() => n.field.options ?? []);
    function u(h, $) {
      return !$ || h.label.toLowerCase().includes($) ? !0 : (h.children ?? []).some((b) => u(b, $));
    }
    const m = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter(($) => u($, h)) : d.value;
    }), v = y(() => {
      const h = ($) => {
        for (const b of $) {
          if (b.value === n.modelValue)
            return b.label;
          const C = h(b.children ?? []);
          if (C)
            return C;
        }
        return null;
      };
      return h(d.value);
    });
    function p(h) {
      n.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, $) => (t(), a("div", u4, [
      o("button", {
        type: "button",
        class: _(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
        disabled: e.disabled,
        onClick: $[0] || ($[0] = (b) => i.value = !i.value)
      }, [
        o("span", {
          class: _(v.value ? "" : "text-muted-foreground")
        }, c(v.value ?? "Select…"), 3),
        $[2] || ($[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, c4),
      i.value ? (t(), a("div", f4, [
        e.field.searchable ? pe((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": $[1] || ($[1] = (b) => s.value = b),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [_e, s.value]
        ]) : k("", !0),
        (t(!0), a(P, null, j(m.value, (b) => (t(), a(P, {
          key: String(b.value)
        }, [
          o("button", {
            type: "button",
            class: _(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === b.value ? "bg-accent" : ""]),
            onClick: (C) => p(b.value)
          }, c(b.label), 11, m4),
          (t(!0), a(P, null, j(b.children ?? [], (C) => (t(), a("button", {
            key: String(C.value),
            type: "button",
            class: _(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => p(C.value)
          }, c(C.label), 11, p4))), 128))
        ], 64))), 128))
      ])) : k("", !0)
    ]));
  }
}), g4 = ["aria-label"], h4 = ["disabled", "aria-label", "aria-pressed", "onClick"], b4 = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, y4 = { key: 0 }, x4 = ["id"], k4 = ["fill"], $4 = ["disabled"], w4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => Math.max(1, Math.min(10, Number(n.field.max ?? 5)))), i = y(() => !!n.field.allowHalf), d = y(() => {
      const v = Number(n.modelValue);
      return Number.isFinite(v) ? v : 0;
    });
    function u(v) {
      n.disabled || r("update:modelValue", v);
    }
    function m(v) {
      return d.value >= v ? "full" : i.value && d.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), a("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), a(P, null, j(s.value, (h) => (t(), a("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: ($) => u(h)
      }, [
        (t(), a("svg", b4, [
          m(h) === "half" ? (t(), a("defs", y4, [
            o("linearGradient", {
              id: `half-${e.field.key}-${h}`,
              x1: "0",
              x2: "1",
              y1: "0",
              y2: "0"
            }, [...p[1] || (p[1] = [
              o("stop", {
                offset: "50%",
                "stop-color": "currentColor"
              }, null, -1),
              o("stop", {
                offset: "50%",
                "stop-color": "transparent",
                "stop-opacity": "1"
              }, null, -1)
            ])], 8, x4)
          ])) : k("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: m(h) === "full" ? "currentColor" : m(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, k4)
        ]))
      ], 8, h4))), 128)),
      d.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, $4)) : k("", !0)
    ], 8, g4));
  }
});
function C4() {
  xe("radio", av), xe("toggle-buttons", Fn), xe("checkboxlist", sv), xe("tags", mv), xe("colour", Sv), xe("slider", lg), xe("rating", w4), xe("phone", s4), xe("icon-picker", d4), xe("tree-select", v4), xe("visual-select", hg), xe("markdown", Dp), xe("code", Up), xe("map", zv), xe("qrcode", Vv), xe("barcode", Rv), xe("diff", Kv), xe("seo-preview", l4), Vt("swatch", yg), Vt("voucher-code-box", Xw), Vt("document-colour-mode", Qw);
}
function oa() {
  const e = q(null), l = q(!1);
  let n = null;
  return ge(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      l.value = !0;
      return;
    }
    n = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (l.value = !0, n?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), n.observe(e.value);
  }), ke(() => n?.disconnect()), { el: e, shown: l };
}
const S4 = /* @__PURE__ */ L({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = oa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: _(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      G(r.$slots, "default")
    ], 6));
  }
}), M4 = ["id"], Me = /* @__PURE__ */ L({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: _(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: _(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(S4, null, {
          default: O(() => [
            G(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, M4));
  }
}), B4 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, A4 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, _4 = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, je = /* @__PURE__ */ L({
  __name: "PkSectionHeading",
  props: {
    eyebrow: {},
    title: {},
    body: {},
    centred: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => e.title || e.body || e.eyebrow ? (t(), a("div", {
      key: 0,
      class: _(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", B4, c(e.eyebrow), 1)) : k("", !0),
      e.title ? (t(), a("h2", A4, c(e.title), 1)) : k("", !0),
      e.body ? (t(), a("p", _4, c(e.body), 1)) : k("", !0)
    ], 2)) : k("", !0);
  }
}), z4 = { class: "flex flex-col gap-10" }, P4 = { class: "grid gap-4 md:grid-cols-3" }, L4 = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, O4 = { class: "text-sm font-semibold text-balance" }, j4 = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, V4 = /* @__PURE__ */ L({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", z4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", P4, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", { key: s }, [
              (t(), D(Ae(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: O(() => [
                  r.meta ? (t(), a("p", L4, c(r.meta), 1)) : k("", !0),
                  o("h3", O4, c(r.title), 1),
                  r.body ? (t(), a("p", j4, c(r.body), 1)) : k("", !0)
                ]),
                _: 2
              }, 1032, ["href"]))
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function D4() {
  const e = q(null);
  let l = null;
  function n(s) {
    if (!l)
      return;
    const i = l.getBoundingClientRect();
    l.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), l.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    l?.style.setProperty("--pk-px", "0.5"), l?.style.setProperty("--pk-py", "0.5");
  }
  return ge(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", n, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", n), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const T4 = { class: "pk-tilt-inner relative h-full" }, I4 = /* @__PURE__ */ L({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = D4();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", T4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        G(n.$slots, "default")
      ])
    ], 512));
  }
}), E4 = { class: "flex flex-col gap-10" }, F4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, N4 = { class: "text-base font-semibold" }, R4 = { class: "text-sm text-pretty text-muted-foreground" }, U4 = /* @__PURE__ */ L({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(n) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[n ?? ""] ?? "";
    }
    return (n, r) => (t(), D(Me, null, {
      default: O(() => [
        o("div", E4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", F4, [
            (t(!0), a(P, null, j(e.items ?? [], (s, i) => (t(), D(I4, {
              key: i,
              class: _(l(s.span))
            }, {
              default: O(() => [
                o("div", {
                  class: _([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", N4, c(s.title), 1),
                  o("p", R4, c(s.body), 1)
                ], 2)
              ]),
              _: 2
            }, 1032, ["class"]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), H4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, K4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, q4 = { class: "grid gap-4 text-sm" }, G4 = {
  key: 0,
  class: "grid gap-1"
}, W4 = ["href"], Z4 = {
  key: 1,
  class: "grid gap-1"
}, J4 = ["href"], Y4 = {
  key: 2,
  class: "grid gap-1"
}, Q4 = { class: "text-pretty text-muted-foreground" }, X4 = ["href"], e5 = /* @__PURE__ */ L({
  __name: "PkContact",
  props: {
    title: {},
    body: {},
    email: {},
    phone: {},
    address: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { muted: "" }, {
      default: O(() => [
        o("div", H4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", K4, [
            o("dl", q4, [
              e.email ? (t(), a("div", G4, [
                n[0] || (n[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, W4)
                ])
              ])) : k("", !0),
              e.phone ? (t(), a("div", Z4, [
                n[1] || (n[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, J4)
                ])
              ])) : k("", !0),
              e.address ? (t(), a("div", Y4, [
                n[2] || (n[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", Q4, c(e.address), 1)
              ])) : k("", !0)
            ]),
            e.label ? (t(), a("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, X4)) : k("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), t5 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, n5 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, a5 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, l5 = ["href"], o5 = /* @__PURE__ */ L({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", t5, [
          o("h2", n5, c(e.title), 1),
          e.body ? (t(), a("p", a5, c(e.body), 1)) : k("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, l5)) : k("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), s5 = { class: "flex flex-col gap-8" }, r5 = { class: "divide-y rounded-lg border" }, i5 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, d5 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, u5 = /* @__PURE__ */ L({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { narrow: "" }, {
      default: O(() => [
        o("div", s5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", r5, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", i5, [
                H(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", d5, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), c5 = { class: "flex flex-col gap-10" }, f5 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, m5 = { class: "text-sm font-semibold" }, p5 = { class: "text-sm text-pretty text-muted-foreground" }, v5 = /* @__PURE__ */ L({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", c5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", f5, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", m5, c(r.title), 1),
              o("p", p5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), g5 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, h5 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, b5 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, y5 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, x5 = ["href"], k5 = ["href"], $5 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, w5 = /* @__PURE__ */ L({
  __name: "PkHero",
  props: {
    brand: {},
    eyebrow: {},
    title: {},
    body: {},
    primaryLabel: {},
    primaryHref: {},
    secondaryLabel: {},
    secondaryHref: {},
    note: {},
    variant: { default: "centered" }
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", {
          class: _(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), a("p", g5, c(e.brand), 1)) : k("", !0),
          e.eyebrow ? (t(), a("p", h5, c(e.eyebrow), 1)) : k("", !0),
          o("h1", {
            class: _([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), a("p", b5, c(e.body), 1)) : k("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", y5, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, x5)) : k("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, k5)) : k("", !0)
          ])) : k("", !0),
          e.note ? (t(), a("p", $5, c(e.note), 1)) : k("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), C5 = { class: "flex flex-col items-center gap-6" }, S5 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, M5 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, B5 = /* @__PURE__ */ L({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { muted: "" }, {
      default: O(() => [
        o("div", C5, [
          e.title ? (t(), a("p", S5, c(e.title), 1)) : k("", !0),
          o("ul", M5, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), A5 = { class: "flex flex-col gap-10" }, _5 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, z5 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, P5 = ["aria-pressed"], L5 = ["aria-pressed"], O5 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, j5 = { class: "grid gap-4 md:grid-cols-3" }, V5 = { class: "flex flex-col gap-1" }, D5 = { class: "text-sm font-semibold" }, T5 = { class: "flex items-baseline gap-1" }, I5 = { class: "text-3xl font-semibold tracking-tight" }, E5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, F5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, N5 = { class: "flex flex-col gap-2 text-sm" }, R5 = { class: "text-muted-foreground" }, U5 = ["href"], H5 = /* @__PURE__ */ L({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = q(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(Me, { muted: "" }, {
      default: O(() => [
        o("div", A5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", _5, [
            o("div", z5, [
              o("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, P5),
              o("button", {
                type: "button",
                class: _([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, L5)
            ]),
            e.annualNote ? (t(), a("p", O5, c(e.annualNote), 1)) : k("", !0)
          ])) : k("", !0),
          o("ul", j5, [
            (t(!0), a(P, null, j(e.items ?? [], (u, m) => (t(), a("li", {
              key: m,
              class: _(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", V5, [
                o("h3", D5, c(u.name), 1),
                o("p", T5, [
                  o("span", I5, c(s(u)), 1),
                  u.period ? (t(), a("span", E5, c(u.period), 1)) : k("", !0)
                ]),
                u.body ? (t(), a("p", F5, c(u.body), 1)) : k("", !0)
              ]),
              o("ul", N5, [
                (t(!0), a(P, null, j(u.features ?? [], (v, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", R5, c(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: _([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, U5)) : k("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function K5() {
  const e = q(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), m = u.height + window.innerHeight, v = m <= 0 ? 0 : (window.innerHeight - u.top) / m;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(v, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ge(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((m) => {
        s = m.some((v) => v.isIntersecting), s && d();
      }), n.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const q5 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, G5 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, W5 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, Z5 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, J5 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, Y5 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, Q5 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, X5 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, e3 = { class: "ml-3 truncate text-xs text-muted-foreground" }, t3 = { class: "flex" }, n3 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, a3 = { class: "min-w-0 flex-1 p-4" }, l3 = { class: "flex flex-col divide-y rounded-md border" }, o3 = /* @__PURE__ */ L({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = K5();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", q5, [
        o("div", G5, [
          o("div", W5, [
            o("h2", Z5, c(e.title), 1),
            e.body ? (t(), a("p", J5, c(e.body), 1)) : k("", !0)
          ]),
          o("div", Y5, [
            o("div", Q5, [
              o("div", X5, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", e3, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", t3, [
                o("div", n3, [
                  (t(), a(P, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", a3, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", l3, [
                    (t(!0), a(P, null, j(e.rows, (s) => (t(), a("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: se({ "--pk-row": String(s) })
                    }, [...r[3] || (r[3] = [
                      o("span", { class: "size-6 shrink-0 rounded-full bg-foreground/10" }, null, -1),
                      o("span", { class: "h-2.5 flex-1 rounded bg-foreground/10" }, null, -1),
                      o("span", { class: "hidden h-2.5 w-24 rounded bg-foreground/[0.07] sm:block" }, null, -1),
                      o("span", { class: "h-5 w-14 rounded-full bg-emerald-500/20" }, null, -1)
                    ])], 4))), 128))
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ], 512));
  }
}), s3 = /* @__PURE__ */ L({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = oa(), s = q(0);
    return fe(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), m = (v) => {
        const p = Math.min((v - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(m) : s.value = l.to;
      };
      requestAnimationFrame(m);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), r3 = { class: "flex flex-col gap-10" }, i3 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, d3 = { class: "order-2 text-sm text-muted-foreground" }, u3 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, c3 = /* @__PURE__ */ L({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(n) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((n ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (n, r) => (t(), D(Me, { muted: "" }, {
      default: O(() => [
        o("div", r3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", i3, [
            (t(!0), a(P, null, j(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", d3, c(s.label), 1),
              o("dd", u3, [
                l(s.value) ? (t(), D(s3, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(P, { key: 1 }, [
                  H(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), f3 = { class: "flex flex-col gap-10" }, m3 = { class: "grid gap-6 md:grid-cols-3" }, p3 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, v3 = { class: "text-sm font-semibold" }, g3 = { class: "text-sm text-pretty text-muted-foreground" }, h3 = /* @__PURE__ */ L({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", f3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", m3, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", p3, c(s + 1), 1),
              o("h3", v3, c(r.title), 1),
              o("p", g3, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b3 = { class: "flex flex-col gap-10" }, y3 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, x3 = ["src"], k3 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, $3 = { class: "min-w-0" }, w3 = { class: "truncate text-sm font-semibold" }, C3 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, S3 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, M3 = /* @__PURE__ */ L({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", b3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", y3, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), a("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, x3)) : (t(), a("span", k3, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", $3, [
                o("h3", w3, c(r.name), 1),
                r.role ? (t(), a("p", C3, c(r.role), 1)) : k("", !0)
              ]),
              r.bio ? (t(), a("p", S3, c(r.bio), 1)) : k("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), B3 = { class: "flex flex-col gap-10" }, A3 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, _3 = { class: "text-pretty text-sm leading-relaxed" }, z3 = { class: "mt-auto flex items-center gap-3" }, P3 = ["src"], L3 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, O3 = { class: "min-w-0" }, j3 = { class: "block truncate text-sm font-medium" }, V3 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, D3 = /* @__PURE__ */ L({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", B3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", A3, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", _3, " “" + c(r.quote) + "” ", 1),
              o("figcaption", z3, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, P3)) : (t(), a("span", L3, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", O3, [
                  o("span", j3, c(r.name), 1),
                  r.role ? (t(), a("span", V3, c(r.role), 1)) : k("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), tS = /* @__PURE__ */ L({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: w5,
      logos: B5,
      features: v5,
      bento: U4,
      showcase: o3,
      steps: h3,
      stats: c3,
      testimonials: D3,
      team: M3,
      articles: V4,
      contact: e5,
      pricing: H5,
      faq: u5,
      cta: o5
    }, s = y(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), a(P, null, j(s.value, (u) => (t(), D(Ae(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), T3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, nS = /* @__PURE__ */ L({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", T3, [
      o("div", {
        class: _([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: _([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: _([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      n[0] || (n[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), I3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, aS = /* @__PURE__ */ L({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", I3, [...n[0] || (n[0] = [
      rt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), E3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, lS = /* @__PURE__ */ L({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", E3, [...n[0] || (n[0] = [
      o("div", {
        class: "absolute inset-0 opacity-[0.18] dark:opacity-[0.14]",
        style: { "background-image": "radial-gradient(currentColor 1px, transparent 1px)", "background-size": "22px 22px", "mask-image": "radial-gradient(ellipse 90% 70% at 50% 0%, black, transparent 80%)" }
      }, null, -1),
      o("div", {
        class: "absolute inset-x-0 top-0 h-[36rem]",
        style: { background: `radial-gradient(
                    ellipse 60% 100% at 50% 0%,
                    var(--pk-console-glow),
                    transparent 70%
                )` }
      }, null, -1),
      o("div", { class: "pk-scanlines absolute inset-0" }, null, -1)
    ])]));
  }
}), F3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, oS = /* @__PURE__ */ L({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", F3, [...n[0] || (n[0] = [
      o("div", {
        class: "pk-studio-grid absolute inset-0",
        style: { "background-image": `linear-gradient(to right, var(--pk-studio-grid-major) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--pk-studio-grid-major) 1px, transparent 1px),
                    linear-gradient(to right, var(--pk-studio-grid-minor) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--pk-studio-grid-minor) 1px, transparent 1px)`, "background-size": `80px 80px,
                    80px 80px,
                    20px 20px,
                    20px 20px`, "mask-image": "radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent 70%)" }
      }, null, -1),
      o("div", {
        class: "absolute top-16 left-1/2 -translate-x-1/2",
        style: { width: "36rem", height: "36rem", "border-radius": "50%", border: "1px solid var(--pk-studio-arc)" }
      }, null, -1),
      o("div", {
        class: "absolute inset-x-0 top-0 h-[32rem]",
        style: { background: `radial-gradient(
                    ellipse 70% 90% at 50% 0%,
                    var(--pk-studio-wash),
                    transparent 70%
                )` }
      }, null, -1)
    ])]));
  }
});
C4();
const sS = "0.0.1";
export {
  pn as ACTION_KEY_ICONS,
  Ut as APPEARANCE_STYLE_ID,
  Wf as Alert,
  Zf as AlertDescription,
  Jf as AlertTitle,
  i6 as AppPageFooter,
  C8 as AppearanceDrawer,
  CC as Avatar,
  SC as AvatarFallback,
  MC as AvatarImage,
  ln as BADGE_VARIANTS,
  b8 as BadgeResolver,
  g6 as BarChart,
  BC as Breadcrumb,
  AC as BreadcrumbEllipsis,
  _C as BreadcrumbItem,
  zC as BreadcrumbLink,
  PC as BreadcrumbList,
  LC as BreadcrumbPage,
  OC as BreadcrumbSeparator,
  e8 as BulkActions,
  Yn as CATALOGUE_CONTAINER,
  tm as CATALOGUE_GRID,
  L8 as CATALOGUE_GRID_TIGHT,
  nm as CATALOGUE_GRID_TILES,
  QC as Card,
  XC as CardAction,
  e6 as CardContent,
  t6 as CardDescription,
  n6 as CardFooter,
  a6 as CardHeader,
  l6 as CardTitle,
  g2 as CartPanel,
  L6 as CatalogBrowser,
  Dy as CatalogCard,
  la as CatalogFilterSheet,
  dn as CatalogGrid,
  z6 as CatalogInspect,
  ok as CatalogItemDetail,
  P6 as CatalogItemView,
  O6 as CatalogRegister,
  _6 as CatalogTill,
  xb as ChartCard,
  vt as ChartTooltip,
  ti as Checkbox,
  f8 as CheckboxCell,
  m8 as CodeCell,
  vu as ColourCell,
  k6 as ComboChart,
  ei as CreateOptionDialog,
  Wr as CreateOptionError,
  V6 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Fk as DASHBOARD_HIDE_KEY,
  D6 as DashboardShortcuts,
  co as DataTable,
  NC as Dialog,
  RC as DialogClose,
  UC as DialogContent,
  HC as DialogDescription,
  KC as DialogFooter,
  qC as DialogHeader,
  Om as DialogOverlay,
  GC as DialogScrollContent,
  WC as DialogTitle,
  ZC as DialogTrigger,
  uC as DropdownMenu,
  cC as DropdownMenuCheckboxItem,
  fC as DropdownMenuContent,
  mC as DropdownMenuGroup,
  pC as DropdownMenuItem,
  vC as DropdownMenuLabel,
  dS as DropdownMenuPortal,
  gC as DropdownMenuRadioGroup,
  hC as DropdownMenuRadioItem,
  bC as DropdownMenuSeparator,
  yC as DropdownMenuShortcut,
  xC as DropdownMenuSub,
  kC as DropdownMenuSubContent,
  $C as DropdownMenuSubTrigger,
  wC as DropdownMenuTrigger,
  g8 as EditableCell,
  Se as FOCUS_RING,
  t8 as FOCUS_RING_SOFT,
  gn as FOCUS_RING_WITHIN,
  fo as FORM_MEASURE,
  Ge as FormFieldControl,
  $6 as HeatmapChart,
  vl as ICON_ALIASES,
  yt as ICON_PATHS,
  Ue as INPUT_COPY,
  Qr as INPUT_PLACEHOLDER,
  Yr as INPUT_TEXT,
  ou as IconCell,
  uu as ImageCell,
  Z6 as InfoNode,
  y8 as InlineRecordActions,
  om as JPEG_IMAGE_ERROR,
  p8 as KeyValueCell,
  JC as Label,
  Th as LineChart,
  J0 as LineItems,
  Q3 as MODAL_PANEL,
  X3 as MODAL_PANEL_FORM,
  kt as MODAL_WIDTH,
  i8 as MUTED_COPY,
  bt as MUTED_COPY_SNUG,
  d8 as MUTED_COPY_XS,
  St as MiniStatCard,
  jC as NavigationMenu,
  VC as NavigationMenuContent,
  DC as NavigationMenuIndicator,
  TC as NavigationMenuItem,
  IC as NavigationMenuLink,
  EC as NavigationMenuList,
  FC as NavigationMenuTrigger,
  Pm as NavigationMenuViewport,
  lm as OPAQUE_IMAGE_ERROR,
  In as OVERLAY_FORM_MEASURE,
  tt as PAGE_SHELL,
  J3 as PAGE_SHELL_COMPACT,
  Y3 as PAGE_SHELL_STACK,
  J6 as PaymentGatewaySettings,
  Vw as PaymentGateways,
  h6 as PieChart,
  z8 as PkAlertError,
  V4 as PkArticles,
  nS as PkAuroraBackdrop,
  We as PkBadge,
  Rv as PkBarcode,
  U4 as PkBento,
  S8 as PkBottomNav,
  o6 as PkBoundary,
  c6 as PkBuilder,
  de as PkButton,
  f6 as PkCalendar,
  s6 as PkCard,
  sv as PkCheckboxList,
  na as PkCodeBox,
  Up as PkCodeInput,
  Sv as PkColourPicker,
  lS as PkConsoleBackdrop,
  e5 as PkContact,
  s3 as PkCountUp,
  o5 as PkCta,
  d6 as PkDeviceFrame,
  Kv as PkDiff,
  Jg as PkDocument,
  He as PkDropdown,
  aS as PkEditorialBackdrop,
  Ft as PkEmptyState,
  u5 as PkFaq,
  v5 as PkFeatureGrid,
  ze as PkFieldLabel,
  En as PkFileUpload,
  Ie as PkHeading,
  w5 as PkHero,
  _i as PkKeyValue,
  tS as PkLandingSections,
  B5 as PkLogoCloud,
  Bv as PkMap,
  zv as PkMapField,
  Dp as PkMarkdownInput,
  ut as PkModal,
  tn as PkMultiSelect,
  A8 as PkOtpInput,
  _8 as PkPageHeader,
  R6 as PkPasskeyRegister,
  P8 as PkPasswordInput,
  H5 as PkPricing,
  Vv as PkQrCode,
  E0 as PkQtyStepper,
  hs as PkQueryBuilder,
  av as PkRadioGroup,
  u6 as PkRepeater,
  S4 as PkReveal,
  Ei as PkRichEditor,
  Me as PkSection,
  je as PkSectionHeading,
  o3 as PkShowcase,
  xk as PkSignaturePad,
  Pe as PkSkeleton,
  At as PkSlideover,
  lg as PkSlider,
  B8 as PkSpinner,
  c3 as PkStats,
  $e as PkStatusBadge,
  qr as PkStepIndicator,
  h3 as PkSteps,
  oS as PkStudioBackdrop,
  M8 as PkSubNav,
  yg as PkSwatchPreview,
  mv as PkTagsInput,
  M3 as PkTeam,
  D3 as PkTestimonials,
  we as PkTextInput,
  I4 as PkTiltCard,
  Fn as PkToggleButtons,
  hg as PkVisualSelect,
  dx as PlanCard,
  B6 as PlanEditor,
  M6 as PlanGrid,
  A6 as PlanPurchaseCard,
  x6 as PolarAreaChart,
  y6 as RadarChart,
  c8 as RatingCell,
  oc as RecordActions,
  U6 as RecordForm,
  u8 as RelationCreateDialog,
  a8 as RelationPanel,
  mo as SLIDEOVER_BODY,
  po as SLIDEOVER_WIDTH,
  my as STATUS_TONES,
  b6 as ScatterChart,
  Nn as SchemaNode,
  C6 as SegmentedBar,
  E6 as SelectionBar,
  Mm as Separator,
  I6 as SetupChecklist,
  Jn as ShadcnInput,
  nn as Sheet,
  T8 as SheetClose,
  an as SheetContent,
  cm as SheetDescription,
  I8 as SheetFooter,
  fm as SheetHeader,
  mm as SheetTitle,
  E8 as SheetTrigger,
  Eb as ShortcutsWidget,
  F8 as Sidebar,
  N8 as SidebarContent,
  R8 as SidebarFooter,
  U8 as SidebarGroup,
  H8 as SidebarGroupAction,
  K8 as SidebarGroupContent,
  q8 as SidebarGroupLabel,
  G8 as SidebarHeader,
  W8 as SidebarInput,
  Z8 as SidebarInset,
  J8 as SidebarMenu,
  Y8 as SidebarMenuAction,
  Q8 as SidebarMenuBadge,
  eC as SidebarMenuButton,
  tC as SidebarMenuItem,
  nC as SidebarMenuSkeleton,
  aC as SidebarMenuSub,
  lC as SidebarMenuSubButton,
  oC as SidebarMenuSubItem,
  sC as SidebarProvider,
  rC as SidebarRail,
  iC as SidebarSeparator,
  dC as SidebarTrigger,
  j6 as SignatureStudio,
  zt as Sparkline,
  YC as Spinner,
  w6 as StatCard,
  S6 as StatListChart,
  T6 as StatStrip,
  Je as Switch,
  Qn as TRANSPARENT_IMAGE_HELP,
  F6 as TablePagination,
  Go as TableShell,
  N6 as TableTabs,
  Cr as TableToolbar,
  v8 as TagsCell,
  v6 as ThemeToggle,
  wm as Tooltip,
  Cm as TooltipContent,
  X8 as TooltipProvider,
  Sm as TooltipTrigger,
  aa as TrendBadge,
  H6 as UnsavedBar,
  Ru as actionColorTone,
  Yf as alertVariants,
  Mc as appearancePayload,
  Kn as appearanceVars,
  Ht as applyAppearance,
  um as assertTransparentImage,
  k8 as bootstrapAppearance,
  st as buttonClasses,
  Mt as catalogFiltersActive,
  ne as cn,
  Jr as createOptionActionLabel,
  Zr as createOptionTitle,
  Ty as cycleLabel,
  Ee as emptyCatalogFilters,
  ew as entryView,
  Gr as fieldControl,
  r8 as fieldErrorsFromPayload,
  $0 as findExactSku,
  Iy as formatPerkValue,
  Lu as hasBadgeValue,
  G6 as hasEntryView,
  l8 as hasFieldControl,
  m6 as hasOptionPreview,
  ce as iconPath,
  im as imageHasTransparency,
  qn as initializeAppearance,
  sn as isDark,
  un as matchCatalogItem,
  V8 as mergeLayoutItems,
  Lm as navigationMenuTriggerStyle,
  og as optionPreview,
  O8 as packWidgetColumns,
  j8 as parseWidgetId,
  Ey as perkGranted,
  rn as readAppearance,
  Bc as readServerAppearance,
  C4 as registerBuiltInFieldControls,
  q6 as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  tw as registeredEntryViews,
  o8 as registeredFieldTypes,
  sg as registeredOptionPreviews,
  x8 as resetAppearanceBootstrapForTests,
  W6 as resetEntryViews,
  s8 as resetFieldControls,
  p6 as resetOptionPreviews,
  Te as resolveActionIcon,
  w8 as setAppearancePersister,
  Bm as sidebarMenuButtonVariants,
  hy as statusBadgeVariant,
  gy as statusTone,
  $8 as syncAppearanceFromInertiaPage,
  D8 as toPersistedLayout,
  n8 as toUrl,
  Zn as useAppearance,
  Y6 as useColumnVisibility,
  Q6 as useColumnWidths,
  X6 as useLiveUpdates,
  D4 as usePointer,
  oa as useReveal,
  h8 as useSchemaColumns,
  K5 as useScrollProgress,
  r6 as useShellPageFooter,
  _t as useSidebar,
  eS as useTenantTheme,
  K6 as useUnsavedChanges,
  sS as version,
  xn as widgetId
};
//# sourceMappingURL=index.js.map
