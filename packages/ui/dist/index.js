import './ui.css';
import { defineComponent as L, useSlots as Gt, openBlock as t, createElementBlock as n, normalizeClass as A, unref as k, renderSlot as q, createElementVNode as o, toDisplayString as c, createCommentVNode as x, computed as y, normalizeStyle as ie, Fragment as z, renderList as j, ref as K, watch as pe, useId as ua, withModifiers as he, createTextVNode as U, createVNode as I, createStaticVNode as rt, createBlock as D, createSlots as it, withCtx as O, nextTick as De, onBeforeUnmount as ke, Teleport as ct, Transition as Xe, onMounted as be, withDirectives as ge, vModelText as _e, mergeProps as de, normalizeProps as Le, guardReactiveProps as Ne, resolveDynamicComponent as Ce, resolveComponent as Wt, vModelSelect as Ze, vModelDynamic as ca, defineAsyncComponent as mn, inject as xt, vShow as Ke, withKeys as Tt, onUnmounted as fa, isRef as ma, useTemplateRef as pa, onErrorCaptured as va, provide as It, reactive as dt, useModel as ft, mergeModels as Fe, markRaw as ga, shallowRef as ha, getCurrentInstance as _n, watchEffect as ba } from "vue";
import { useForwardPropsEmits as ye, DialogRoot as zn, DialogOverlay as Zt, DialogPortal as Jt, DialogContent as Yt, DialogClose as et, CheckboxRoot as ya, CheckboxIndicator as xa, SwitchRoot as ka, SwitchThumb as $a, DialogDescription as Pn, DialogTitle as Ln, DialogTrigger as On, createContext as wa, Primitive as tt, TooltipRoot as Ca, TooltipPortal as Sa, TooltipContent as Ma, TooltipArrow as Ba, TooltipProvider as jn, TooltipTrigger as Aa, Separator as _a, DropdownMenuRoot as za, DropdownMenuCheckboxItem as Pa, DropdownMenuItemIndicator as Vn, DropdownMenuPortal as La, DropdownMenuContent as Oa, DropdownMenuGroup as ja, useForwardProps as Oe, DropdownMenuItem as Va, DropdownMenuLabel as Da, DropdownMenuRadioGroup as Ta, DropdownMenuRadioItem as Ia, DropdownMenuSeparator as Ea, DropdownMenuSub as Fa, DropdownMenuSubContent as Na, DropdownMenuSubTrigger as Ra, DropdownMenuTrigger as Ua, AvatarRoot as Ha, AvatarFallback as Ka, AvatarImage as qa, NavigationMenuViewport as Ga, NavigationMenuRoot as Wa, NavigationMenuContent as Za, NavigationMenuIndicator as Ja, NavigationMenuItem as Ya, NavigationMenuLink as Qa, NavigationMenuList as Xa, NavigationMenuTrigger as el, Label as tl } from "reka-ui";
import { DropdownMenuPortal as xS } from "reka-ui";
import { X as Qt, Check as Dn, AlertCircle as nl, EyeOff as al, Eye as ll, PanelLeftOpen as ol, PanelLeftClose as sl, Circle as rl, ChevronRight as Tn, MoreHorizontal as il, ChevronDown as dl, Loader2Icon as ul } from "@lucide/vue";
import { reactiveOmit as ve, useVModel as In, useMediaQuery as cl, useEventListener as fl, defaultDocument as ml } from "@vueuse/core";
import { clsx as pl } from "clsx";
import { twMerge as vl } from "tailwind-merge";
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
}, gl = {
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
function me(e) {
  if (!e)
    return yt.dot;
  const l = gl[e] ?? e;
  return yt[l] ?? yt.dot;
}
function Te(e) {
  if (e.icon) {
    const s = me(e.icon);
    if (s !== yt.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = pn[l] ?? pn[l.replace(/_/g, "-")];
    if (s)
      return me(s);
  }
  const a = hl(e.label);
  if (a)
    return me(a);
  if (e.destructive)
    return me("trash");
  const r = e.color ?? "";
  return r && vn[r] ? me(vn[r]) : me("circle");
}
function hl(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const bl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, yl = ["d"], xl = { class: "flex max-w-sm flex-col gap-1" }, kl = {
  key: 0,
  class: "text-sm font-normal"
}, $l = {
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
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: A(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), n("div", bl, [
        q(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: A(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        q(a.$slots, "icon", {}, () => [
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: A(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: k(me)(e.icon)
            }, null, 8, yl)
          ], 2))
        ])
      ], 2)),
      o("div", xl, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), n("p", kl, c(e.description), 1)) : x("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", $l, [
        q(a.$slots, "actions")
      ])) : x("", !0)
    ], 2));
  }
}), wl = ["aria-label"], Pe = /* @__PURE__ */ L({
  __name: "PkSkeleton",
  props: {
    variant: { default: "text" },
    count: { default: 1 },
    height: {},
    label: { default: "Loading" }
  },
  setup(e) {
    const l = e, a = {
      text: "h-4 w-full",
      number: "h-6 w-24",
      badge: "h-4 w-7",
      block: "h-full w-full",
      row: "h-9 w-full",
      circle: "size-8 rounded-full"
    }, r = y(() => a[l.variant] ?? a.text), s = y(() => Math.max(1, Math.min(l.count, 50)));
    function i(d) {
      if (!(l.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: ie(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, j(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ie({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, wl));
  }
}), Cl = { class: "w-full border-collapse text-sm" }, Sl = { class: "bg-background sticky top-0 z-10" }, Ml = {
  key: 0,
  class: "bg-muted/40"
}, Bl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Al = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, _l = ["colspan"], zl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Pl = { class: "bg-muted/50" }, Ll = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Ol = ["id", "checked", "indeterminate"], jl = ["onClick"], Vl = {
  key: 0,
  class: "text-xs"
}, Dl = {
  key: 1,
  class: "text-xs opacity-40"
}, Tl = { key: 1 }, Il = ["aria-label", "onPointerdown"], El = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Fl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Nl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Rl = {
  key: 1,
  class: "px-3 py-2.5"
}, Ul = {
  key: 2,
  class: "px-2 py-2.5"
}, Hl = {
  key: 0,
  class: "bg-muted/40"
}, Kl = ["colspan"], ql = ["aria-expanded", "dusk", "onClick"], Gl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Wl = {
  key: 1,
  dusk: "group-header"
}, Zl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Jl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Yl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Ql = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Xl = ["aria-label", "onClick"], eo = { class: "text-xs" }, to = {
  key: 1,
  class: "text-muted-foreground"
}, no = { key: 2 }, ao = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, lo = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, oo = { key: 0 }, so = { class: "text-muted-foreground block text-[10px] font-medium" }, ro = { class: "font-semibold tabular-nums" }, io = { key: 1 }, uo = 40, co = /* @__PURE__ */ L({
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
    const a = e;
    function r(X) {
      if (!X || !a.groupBy)
        return "";
      if (X.__group !== void 0 && X.__group !== null)
        return String(X.__group);
      const re = X[a.groupBy.key];
      return re == null || re === "" ? "" : String(re);
    }
    function s(X) {
      return a.groupBy ? X === 0 ? !0 : r(a.rows[X]) !== r(a.rows[X - 1]) : !1;
    }
    function i(X) {
      if (X.__groupTitle)
        return String(X.__groupTitle);
      const re = a.groupBy ? X[a.groupBy.key] : null, ae = re == null || re === "" ? "None" : String(re);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? ae : `${a.groupBy.label}: ${ae}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function f(X) {
      return a.groupBy?.collapsible ? d.value.has(X) : !1;
    }
    function v(X) {
      if (!a.groupBy?.collapsible)
        return;
      const re = new Set(u.value);
      re.add(X), u.value = re;
      const ae = new Set(d.value);
      ae.has(X) ? ae.delete(X) : ae.add(X), d.value = ae;
    }
    function p(X) {
      return a.groupBy?.collapsible ? !f(r(a.rows[X])) : !0;
    }
    pe(
      () => a.rows,
      (X) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const re = new Set(d.value);
        for (const ae of X) {
          const fe = r(ae);
          fe !== "" && !u.value.has(fe) && re.add(fe);
        }
        d.value = re;
      },
      { immediate: !0 }
    );
    const h = K(null), $ = K(null);
    function b(X, re) {
      h.value = X, re.dataTransfer?.setData("text/plain", String(X)), re.dataTransfer && (re.dataTransfer.effectAllowed = "move");
    }
    function w() {
      h.value = null, $.value = null;
    }
    function C(X) {
      return h.value === null || $.value !== X ? "" : h.value > X ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function M(X, re) {
      h.value !== null && (re.preventDefault(), $.value = X);
    }
    function B(X) {
      const re = h.value;
      if (h.value = null, $.value = null, re === null || re === X)
        return;
      const ae = a.rows.map((ue) => ue[a.rowKey]), [fe] = ae.splice(re, 1);
      ae.splice(X, 0, fe), S("reorder", ae);
    }
    const S = l;
    function m(X, re) {
      !a.rowClickable || a.reordering || re.button !== 0 || re.metaKey || re.ctrlKey || re.shiftKey || re.altKey || re.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || S("row-click", X);
    }
    const g = K(null), _ = ua(), T = y(() => a.columns.filter((X) => !a.hidden?.has(X.key))), F = y(() => {
      const X = T.value.find((re) => re.sticky);
      return X ? X.key : a.stickyFirst && T.value.length > 0 ? T.value[0].key : null;
    });
    function J(X) {
      return F.value === X.key;
    }
    function N() {
      return a.selectable && !a.reordering ? `${uo}px` : "0";
    }
    function G(X) {
      const re = a.columnWidths?.[X.key];
      return typeof re == "number" ? re : X.width;
    }
    function Z(X) {
      const re = G(X), ae = J(X), fe = {};
      return re !== void 0 && (fe.width = `${re}px`, fe.minWidth = `${re}px`, fe.maxWidth = `${re}px`), ae && (fe.left = N()), Object.keys(fe).length ? fe : void 0;
    }
    function W(X) {
      return a.resizable ? X.resizable !== !1 : !1;
    }
    function H(X, re) {
      if (!W(X))
        return;
      re.preventDefault(), re.stopPropagation();
      const ae = re.clientX, fe = G(X) ?? 160, ue = re.currentTarget;
      try {
        ue.setPointerCapture(re.pointerId);
      } catch {
      }
      function qe(lt) {
        const Pt = fe + (lt.clientX - ae);
        S("resize", X.key, Math.min(1200, Math.max(48, Pt)));
      }
      function Re(lt) {
        try {
          ue.releasePointerCapture(lt.pointerId);
        } catch {
        }
        ue.removeEventListener("pointermove", qe), ue.removeEventListener("pointerup", Re), ue.removeEventListener("pointercancel", Re);
      }
      ue.addEventListener("pointermove", qe), ue.addEventListener("pointerup", Re), ue.addEventListener("pointercancel", Re);
    }
    const R = y(() => T.value.some((X) => !!X.group)), ee = y(() => {
      const X = [];
      for (const re of T.value) {
        const ae = re.group ?? null, fe = X[X.length - 1];
        fe && fe.label === ae ? fe.span += 1 : X.push({ label: ae, span: 1, key: `${ae ?? "loose"}-${re.key}` });
      }
      return X;
    });
    function P(X) {
      const re = X[a.rowKey];
      return re == null || re === "" ? null : re;
    }
    function Y(X) {
      const re = P(X);
      return re !== null && !!a.selected?.has(re);
    }
    const V = K(null);
    function E(X) {
      return a.rows.findIndex((re) => {
        const ae = P(re);
        return ae !== null && ae === X;
      });
    }
    function te(X, re) {
      const ae = P(X);
      if (ae === null)
        return;
      const fe = re.shiftKey, ue = !!a.selected?.has(ae);
      if (fe && V.value !== null && V.value !== ae) {
        const qe = E(V.value), Re = E(ae);
        if (qe !== -1 && Re !== -1) {
          const lt = Math.min(qe, Re), Pt = Math.max(qe, Re), da = !ue;
          for (let ht = lt; ht <= Pt; ht++) {
            if (!p(ht))
              continue;
            const Lt = P(a.rows[ht]);
            if (Lt === null)
              continue;
            !!a.selected?.has(Lt) !== da && S("toggle-row", Lt);
          }
          V.value = ae;
          return;
        }
      }
      S("toggle-row", ae), V.value = ae;
    }
    const le = y(
      () => a.rows.map((X) => P(X)).filter((X) => X !== null)
    ), Q = y(
      () => le.value.length > 0 && le.value.every((X) => a.selected?.has(X))
    ), ne = y(
      () => !Q.value && le.value.some((X) => a.selected?.has(X))
    );
    function se(X) {
      return X.sortKey ?? X.key;
    }
    function Se(X) {
      return a.sort === se(X);
    }
    async function cn(X, re, ae) {
      try {
        await navigator.clipboard.writeText(String(ae)), g.value = `${X}-${re.key}`, setTimeout(() => g.value = null, 1200);
      } catch {
      }
    }
    const ra = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function fn(X) {
      return a.summaries?.[X] ?? null;
    }
    function ia(X) {
      const re = a.summaries?.[X], ae = a.summaryValues?.[X];
      if (!re)
        return "";
      if (ae == null)
        return "None";
      const fe = re.divideBy ? ae / re.divideBy : ae, ue = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: re.decimals,
        maximumFractionDigits: re.decimals
      }).format(fe);
      return `${re.prefix ?? ""}${ue}${re.suffix ?? ""}`;
    }
    return (X, re) => (t(), n("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", Cl, [
        o("thead", Sl, [
          R.value ? (t(), n("tr", Ml, [
            e.reordering ? (t(), n("th", Bl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Al)) : x("", !0),
            (t(!0), n(z, null, j(ee.value, (ae) => (t(), n("th", {
              key: ae.key,
              colspan: ae.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(ae.label ?? ""), 9, _l))), 128)),
            X.$slots.actions ? (t(), n("th", zl)) : x("", !0)
          ])) : x("", !0),
          o("tr", Pl, [
            e.reordering ? (t(), n("th", Ll)) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: A(["w-10 border-b px-3 py-2.5", F.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${k(_)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: Q.value,
                indeterminate: ne.value,
                "aria-label": "Select all rows on this page",
                onClick: re[0] || (re[0] = he(() => {
                }, ["stop"])),
                onChange: re[1] || (re[1] = he((ae) => S("toggle-page", !Q.value), ["stop"]))
              }, null, 40, Ol)
            ], 2)) : x("", !0),
            (t(!0), n(z, null, j(T.value, (ae) => (t(), n("th", {
              key: ae.key,
              class: A([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                J(ae) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: ie(Z(ae))
            }, [
              ae.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (fe) => S("sort", se(ae))
              }, [
                U(c(ae.label) + " ", 1),
                Se(ae) ? (t(), n("span", Vl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Dl, "↕"))
              ], 8, jl)) : (t(), n("span", Tl, c(ae.label), 1)),
              W(ae) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${ae.label}`,
                onPointerdown: (fe) => H(ae, fe)
              }, null, 40, Il)) : x("", !0)
            ], 6))), 128)),
            X.$slots.actions ? (t(), n("th", El, [...re[2] || (re[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : x("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", Fl, [
          (t(), n(z, null, j(6, (ae) => o("tr", {
            key: `skel-${ae}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Nl, [
              I(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Rl, [
              I(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            (t(!0), n(z, null, j(T.value, (fe) => (t(), n("td", {
              key: fe.key,
              class: "px-3 py-2.5"
            }, [
              I(Pe, { variant: "text" })
            ]))), 128)),
            X.$slots.actions ? (t(), n("td", Ul, [
              I(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : x("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, j(e.rows, (ae, fe) => (t(), n(z, {
            key: P(ae) ?? `row-${fe}`
          }, [
            e.groupBy && s(fe) ? (t(), n("tr", Hl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(ae)),
                  dusk: `group-header-${r(ae) || "none"}`,
                  onClick: (ue) => v(r(ae))
                }, [
                  o("span", Gl, c(f(r(ae)) ? "▸" : "▾"), 1),
                  U(" " + c(i(ae)), 1)
                ], 8, ql)) : (t(), n("span", Wl, c(i(ae)), 1))
              ], 8, Kl)
            ])) : x("", !0),
            p(fe) ? (t(), n("tr", {
              key: 1,
              class: A(["group pk-row border-b transition-colors hover:bg-muted/50", [
                Y(ae) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && fe % 2 === 1 ? "bg-muted/20" : "",
                h.value === fe ? "opacity-40" : "",
                C(fe),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ue) => b(fe, ue),
              onDragover: (ue) => M(fe, ue),
              onDrop: he((ue) => B(fe), ["prevent"]),
              onDragend: w,
              onContextmenu: (ue) => S("row-contextmenu", ae, ue),
              onClick: (ue) => m(ae, ue)
            }, [
              e.reordering ? (t(), n("td", Jl, [...re[3] || (re[3] = [
                rt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-3bdfd7b5><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-3bdfd7b5><circle cx="9" cy="6" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="6" r="1.5" data-v-3bdfd7b5></circle><circle cx="9" cy="12" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="12" r="1.5" data-v-3bdfd7b5></circle><circle cx="9" cy="18" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="18" r="1.5" data-v-3bdfd7b5></circle></svg></span>', 1)
              ])])) : x("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: A([
                  "px-3 py-2",
                  F.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""
                ])
              }, [
                o("input", {
                  id: `${k(_)}-row-${P(ae) ?? fe}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: P(ae) ?? void 0,
                  checked: Y(ae),
                  disabled: P(ae) === null,
                  "aria-label": P(ae) === null ? "This row has no id and cannot be selected" : `Select row ${P(ae)}`,
                  onClick: he((ue) => te(ae, ue), ["stop"])
                }, null, 8, Yl)
              ], 2)) : x("", !0),
              (t(!0), n(z, null, j(T.value, (ue) => (t(), n("td", {
                key: ue.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  ue.cellClass,
                  J(ue) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: ie(Z(ue))
              }, [
                q(X.$slots, `cell:${ue.key}`, {
                  row: ae,
                  value: ae[ue.key],
                  column: ue
                }, () => [
                  ue.copyable ? (t(), n("span", Ql, [
                    U(c(ae[ue.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ue.label.toLowerCase()}`,
                      onClick: (qe) => cn(String(ae[e.rowKey]), ue, ae[ue.key])
                    }, [
                      o("span", eo, c(g.value === `${ae[e.rowKey]}-${ue.key}` ? "✓" : "⧉"), 1)
                    ], 8, Xl)
                  ])) : ae[ue.key] == null || ae[ue.key] === "" ? (t(), n("span", to, "None")) : (t(), n("span", no, c(ae[ue.key]), 1))
                ], !0)
              ], 6))), 128)),
              X.$slots.actions ? (t(), n("td", ao, [
                q(X.$slots, "actions", { row: ae }, void 0, !0)
              ])) : x("", !0)
            ], 42, Zl)) : x("", !0)
          ], 64))), 128))
        ], 2)),
        ra.value ? (t(), n("tfoot", lo, [
          o("tr", null, [
            e.selectable ? (t(), n("td", oo)) : x("", !0),
            (t(!0), n(z, null, j(e.columns, (ae) => (t(), n(z, {
              key: `s-${ae.key}`
            }, [
              e.hidden?.has(ae.key) ? x("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", ae.cellClass])
              }, [
                fn(ae.key) ? (t(), n(z, { key: 0 }, [
                  o("span", so, c(fn(ae.key).label), 1),
                  o("span", ro, c(ia(ae.key)), 1)
                ], 64)) : x("", !0)
              ], 2))
            ], 64))), 128)),
            X.$slots.actions ? (t(), n("td", io)) : x("", !0)
          ])
        ])) : x("", !0)
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
            q(X.$slots, "clear-filters", {}, void 0, !0)
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
            q(X.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : x("", !0)
    ], 2));
  }
}), Bt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, fo = /* @__PURE__ */ Bt(co, [["__scopeId", "data-v-3bdfd7b5"]]), nt = "w-full min-w-0 px-4 py-6 sm:px-6", s8 = "w-full min-w-0 p-3 sm:p-4", r8 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", mo = "w-full max-w-7xl", po = "px-4 py-4", En = "w-full min-w-0", vo = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, ot = "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", kt = {
  /** Short confirmations with no fields (~24rem). */
  sm: `${ot} max-w-md`,
  /** The long-standing default: confirmations and short copy (~32rem). */
  confirm: `${ot} max-w-lg`,
  /** Wider than confirm when an action form needs more room than confirm copy (~36rem). */
  form: `${ot} max-w-xl`,
  /** A field stack too wide for `form` without becoming a page (~42rem). */
  lg: `${ot} max-w-2xl`,
  /** The widest dense modal offers - past this, use PkSlideover instead (~56rem). */
  xl: `${ot} max-w-4xl`
}, i8 = kt.confirm, d8 = kt.form, go = ["aria-busy", "aria-label"], ho = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, bo = { class: "text-base font-semibold" }, yo = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, xo = {
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
    const a = e, r = l, s = K(null);
    let i = null;
    const d = K(!1), u = y(() => kt[a.size] ?? kt.confirm);
    function f(h) {
      d.value = h.target === h.currentTarget;
    }
    function v(h) {
      d.value && h.target === h.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function p(h) {
      if (!a.open)
        return;
      if (h.key === "Escape" && !a.busy) {
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
      const b = $[0], w = $[$.length - 1];
      h.shiftKey && document.activeElement === b ? (h.preventDefault(), w.focus()) : !h.shiftKey && document.activeElement === w && (h.preventDefault(), b.focus());
    }
    return pe(
      () => a.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", p), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (h, $) => (t(), D(ct, { to: "body" }, [
      I(Xe, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: f,
            onPointerup: v
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-busy": e.busy ? "true" : void 0,
              "aria-label": e.title,
              class: A(u.value)
            }, [
              o("div", ho, [
                o("h2", bo, c(e.title), 1),
                e.description ? (t(), n("p", yo, c(e.description), 1)) : x("", !0)
              ]),
              o("div", {
                class: A([
                  "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4",
                  k(En)
                ])
              }, [
                q(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), n("div", xo, [
                q(h.$slots, "footer")
              ])) : x("", !0)
            ], 10, go)
          ], 32)) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ko = 160, He = /* @__PURE__ */ L({
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
    const a = e, r = K(!1), s = K(null), i = K(null), d = K({ top: 0, left: 0, minWidth: 0 }), u = K(null);
    let f = null;
    function v(m) {
      !a.dismissOnPanelClick || m.target?.closest("input, select, textarea, label, [data-keep-open]") || w();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await De(), C());
    }
    function h() {
      f = setTimeout(w, 180);
    }
    async function $() {
      u.value = null, r.value = !r.value, r.value && (await De(), C());
    }
    async function b(m, g) {
      u.value = { x: m, y: g }, r.value = !0, await De(), C();
    }
    function w() {
      r.value = !1, u.value = null;
    }
    function C() {
      const m = s.value, g = i.value;
      if (!m || !g)
        return;
      const _ = g.getBoundingClientRect(), T = 8, F = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : m.getBoundingClientRect();
      let J, N;
      if (a.placement === "bottom")
        J = F.bottom + a.offset, J + _.height > window.innerHeight - T && F.top - _.height - a.offset > T && (J = F.top - _.height - a.offset), N = a.align === "end" && !u.value ? F.right - _.width : F.left;
      else {
        J = F.top;
        const G = a.placement === "right", Z = F.right + a.offset + _.width < window.innerWidth - T, W = F.left - a.offset - _.width > T;
        N = (G ? Z || !W : !W && Z) ? F.right + a.offset : F.left - a.offset - _.width;
      }
      N = Math.min(Math.max(T, N), window.innerWidth - _.width - T), J = Math.min(Math.max(T, J), window.innerHeight - _.height - T), d.value = { top: J, left: N, minWidth: Math.max(F.width, ko) };
    }
    function M(m) {
      if (!r.value)
        return;
      const g = m.target;
      s.value?.contains(g) || i.value?.contains(g) || (g instanceof Element ? g : g.parentElement)?.closest("[data-pk-overlay]") || w();
    }
    function B(m) {
      m.key === "Escape" && r.value && (m.stopPropagation(), w());
    }
    function S() {
      if (r.value) {
        if (u.value) {
          w();
          return;
        }
        C();
      }
    }
    return be(() => {
      document.addEventListener("pointerdown", M), document.addEventListener("keydown", B), window.addEventListener("scroll", S, !0), window.addEventListener("resize", S);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", B), window.removeEventListener("scroll", S, !0), window.removeEventListener("resize", S);
    }), l({ close: w, openAt: b }), (m, g) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: g[3] || (g[3] = (_) => e.hoverable && p()),
      onPointerleave: g[4] || (g[4] = (_) => e.hoverable && h())
    }, [
      o("div", {
        onClick: g[0] || (g[0] = (_) => e.hoverable ? p() : $())
      }, [
        q(m.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(ct, { to: "body" }, [
        I(Xe, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            r.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: A([
                "bg-popover text-popover-foreground fixed z-[100] w-max overflow-hidden rounded-md border p-1.5 shadow-lg",
                e.width
              ]),
              style: ie({
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
              onPointerenter: g[1] || (g[1] = (_) => e.hoverable && p()),
              onPointerleave: g[2] || (g[2] = (_) => e.hoverable && h()),
              onClick: v
            }, [
              q(m.$slots, "panel", { close: w })
            ], 38)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), $o = ["disabled"], wo = { class: "py-0.5" }, Co = ["disabled", "onClick"], So = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mo = ["d"], Bo = { class: "min-w-0 flex-1 truncate" }, Ao = ["disabled"], _o = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zo = ["d"], Po = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Lo = ["disabled", "onClick"], Oo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jo = ["d"], Vo = { class: "min-w-0 flex-1 truncate" }, Do = { class: "text-muted-foreground text-sm font-normal" }, To = { class: "text-foreground font-medium tabular-nums" }, Io = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Eo = ["disabled"], Fo = { class: "text-muted-foreground text-sm font-normal" }, No = { class: "text-foreground font-medium tabular-nums" }, Ro = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Uo = ["disabled"], u8 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null), i = K(!1), d = y(() => a.allMatching ? a.total : a.count), u = y(() => d.value !== void 0), f = y(() => u.value && d.value === 0), v = y(() => a.actions.filter((B) => !B.destructive)), p = y(() => a.actions.filter((B) => B.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function $(B) {
      return h[B.color ?? "gray"] ?? h.gray;
    }
    function b(B) {
      if (B.confirmation) {
        s.value = B;
        return;
      }
      r("run", B.key);
    }
    function w() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function C() {
      i.value = !1, r("export");
    }
    const M = (B) => new Intl.NumberFormat().format(B);
    return (B, S) => (t(), n(z, null, [
      I(He, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...S[5] || (S[5] = [
            U(" Bulk actions ", -1),
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
          ])], 8, $o)
        ]),
        panel: O(() => [
          o("div", wo, [
            (t(!0), n(z, null, j(v.value, (m) => (t(), n("button", {
              key: m.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", $(m)]),
              disabled: e.busy,
              onClick: (g) => b(m)
            }, [
              (t(), n("svg", So, [
                o("path", {
                  d: k(Te)(m)
                }, null, 8, Mo)
              ])),
              o("span", Bo, c(m.label), 1)
            ], 10, Co))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: S[0] || (S[0] = (m) => i.value = !0)
            }, [
              (t(), n("svg", _o, [
                o("path", {
                  d: k(me)("download")
                }, null, 8, zo)
              ])),
              S[6] || (S[6] = U(" Export CSV ", -1))
            ], 8, Ao)) : x("", !0),
            p.value.length ? (t(), n("div", Po, [
              (t(!0), n(z, null, j(p.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (g) => b(m)
              }, [
                (t(), n("svg", Oo, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, jo)
                ])),
                o("span", Vo, c(m.label), 1)
              ], 8, Lo))), 128))
            ])) : x("", !0)
          ])
        ]),
        _: 1
      }),
      I(ut, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: S[2] || (S[2] = (m) => s.value = null)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: S[1] || (S[1] = (m) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || f.value,
            onClick: w
          }, c(s.value?.label), 11, Eo)
        ]),
        default: O(() => [
          o("p", Do, [
            S[7] || (S[7] = U(" This will affect ", -1)),
            o("span", To, [
              u.value ? (t(), n(z, { key: 1 }, [
                U(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            S[8] || (S[8] = U(" . ", -1))
          ]),
          f.value ? (t(), n("p", Io, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : x("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(ut, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: S[4] || (S[4] = (m) => i.value = !1)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: S[3] || (S[3] = (m) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || f.value,
            onClick: C
          }, " Export CSV ", 8, Uo)
        ]),
        default: O(() => [
          o("p", Fo, [
            S[9] || (S[9] = U(" This will export ", -1)),
            o("span", No, [
              u.value ? (t(), n(z, { key: 1 }, [
                U(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                U("…")
              ], 64))
            ]),
            S[10] || (S[10] = U(". ", -1))
          ]),
          f.value ? (t(), n("p", Ro, " Nothing matches the current filters - there is nothing to export. ")) : x("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ho = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Ko = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, qo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Go = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Wo = /* @__PURE__ */ L({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Ho, [
      l.$slots.tabs ? (t(), n("div", Ko, [
        q(l.$slots, "tabs")
      ])) : x("", !0),
      l.$slots.title ? (t(), n("div", qo, [
        q(l.$slots, "title")
      ])) : x("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(l.$slots, "toolbar")
      ], 2)) : x("", !0),
      q(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Go, [
        q(l.$slots, "pagination")
      ])) : x("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", gn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", c8 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Zo = ["aria-expanded"], Jo = ["aria-label", "onClick"], Yo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Qo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Xo = {
  key: 0,
  class: "border-b p-1"
}, es = ["placeholder"], ts = { class: "max-h-60 overflow-y-auto p-1" }, ns = ["aria-selected", "onMouseenter", "onClick"], as = {
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
    const a = e, r = l, s = K(null), i = K(null), d = K(null), u = K(!1), f = K(""), v = K(0), p = K({ top: 0, left: 0, width: 0 }), h = y(
      () => a.modelValue.map(
        (N) => a.options.find((G) => G.value === N) ?? {
          value: N,
          label: String(N)
        }
      ).filter(Boolean)
    ), $ = y(() => a.searchable ?? a.options.length > 6), b = y(() => {
      const N = new Set(a.modelValue), G = f.value.trim().toLowerCase();
      return a.options.filter((Z) => !N.has(Z.value)).filter((Z) => G ? Z.label.toLowerCase().includes(G) : !0);
    }), w = y(() => a.max !== null && a.modelValue.length >= a.max);
    function C() {
      const N = s.value, G = i.value;
      if (!N || !G)
        return;
      const Z = N.getBoundingClientRect(), W = G.getBoundingClientRect(), H = 8;
      let R = Z.bottom + 4;
      R + W.height > window.innerHeight - H && Z.top - W.height - 4 > H && (R = Z.top - W.height - 4), p.value = {
        top: R,
        left: Math.min(Math.max(H, Z.left), window.innerWidth - Z.width - H),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function M() {
      a.disabled || u.value || (u.value = !0, f.value = "", v.value = 0, await De(), C(), d.value?.focus());
    }
    function B() {
      u.value = !1, f.value = "";
    }
    function S() {
      u.value ? B() : M();
    }
    function m(N) {
      w.value || (r("update:modelValue", [...a.modelValue, N.value]), f.value = "", v.value = 0, De(() => {
        C(), d.value?.focus();
      }));
    }
    function g(N) {
      r(
        "update:modelValue",
        a.modelValue.filter((G) => G !== N)
      ), De(C);
    }
    function _() {
      r("update:modelValue", []), De(C);
    }
    function T(N) {
      if (!a.disabled) {
        if (N.key === "Escape" && u.value) {
          N.stopPropagation(), B();
          return;
        }
        if (N.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          g(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (N.key === "ArrowDown" || N.key === "Enter")) {
          N.preventDefault(), M();
          return;
        }
        if (u.value) {
          if (N.key === "ArrowDown")
            N.preventDefault(), v.value = Math.min(v.value + 1, b.value.length - 1);
          else if (N.key === "ArrowUp")
            N.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (N.key === "Enter") {
            N.preventDefault();
            const G = b.value[v.value];
            G && m(G);
          }
        }
      }
    }
    function F(N) {
      if (!u.value)
        return;
      const G = N.target;
      s.value?.contains(G) || i.value?.contains(G) || B();
    }
    function J() {
      u.value && C();
    }
    return pe(b, (N) => {
      v.value > N.length - 1 && (v.value = Math.max(0, N.length - 1));
    }), be(() => {
      document.addEventListener("pointerdown", F), window.addEventListener("scroll", J, !0), window.addEventListener("resize", J);
    }), ke(() => {
      document.removeEventListener("pointerdown", F), window.removeEventListener("scroll", J, !0), window.removeEventListener("resize", J);
    }), (N, G) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: T
    }, [
      o("div", {
        class: A(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: S
      }, [
        (t(!0), n(z, null, j(h.value, (Z) => (t(), n("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          U(c(Z.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${Z.label}`,
            onClick: he((W) => g(Z.value), ["stop"])
          }, [...G[1] || (G[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Jo)
        ]))), 128)),
        h.value.length === 0 ? (t(), n("span", Yo, c(e.placeholder), 1)) : x("", !0),
        o("span", Qo, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(_, ["stop"])
          }, " Clear ")) : x("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...G[2] || (G[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Zo),
      (t(), D(ct, { to: "body" }, [
        I(Xe, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: O(() => [
            u.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: ie({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              $.value ? (t(), n("div", Xo, [
                ge(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => f.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: T
                }, null, 40, es), [
                  [_e, f.value]
                ])
              ])) : x("", !0),
              o("div", ts, [
                (t(!0), n(z, null, j(b.value, (Z, W) => (t(), n("button", {
                  key: Z.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === v.value,
                  onMouseenter: (H) => v.value = W,
                  onClick: (H) => m(Z)
                }, c(Z.label), 43, ns))), 128)),
                b.value.length === 0 ? (t(), n("p", as, [
                  w.value ? (t(), n(z, { key: 0 }, [
                    U("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    U("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    U("Everything is selected.")
                  ], 64))
                ])) : x("", !0)
              ])
            ], 4)) : x("", !0)
          ]),
          _: 1
        })
      ]))
    ], 544));
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
    const s = ye(e, l);
    return (i, d) => (t(), D(k(zn), de({ "data-slot": "sheet" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
});
function oe(...e) {
  return vl(pl(e));
}
function f8(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const ls = /* @__PURE__ */ L({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Zt), de({
      "data-slot": "sheet-overlay",
      class: k(oe)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(a)), {
      default: O(() => [
        q(r.$slots, "default")
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
    const a = e, r = l, s = ve(a, "class", "side"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        I(ls),
        I(k(Yt), de({
          "data-slot": "sheet-content",
          class: k(oe)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...k(i) }), {
          default: O(() => [
            q(d.$slots, "default"),
            I(k(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                I(k(Qt), { class: "size-4" }),
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
}), os = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ss = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, rs = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ye(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [os, ss[l], rs[a], e.class].filter(Boolean).join(" ");
}
const ce = /* @__PURE__ */ L({
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
    const l = e, a = y(
      () => Ye({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(Ce(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(a.value)
    }, {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), is = { class: "flex items-center gap-2" }, ds = ["onUpdate:modelValue", "onChange"], us = ["value"], cs = ["onUpdate:modelValue"], fs = ["value"], ms = ["onUpdate:modelValue"], ps = ["onUpdate:modelValue", "multiple"], vs = ["value"], gs = ["onUpdate:modelValue", "type"], hs = ["aria-label", "onClick"], bs = { class: "flex items-center gap-2" }, ys = /* @__PURE__ */ L({
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = K(a.modelValue ? structuredClone(a.modelValue) : s());
    pe(
      () => a.modelValue,
      (S) => {
        i.value = S ? structuredClone(S) : s();
      }
    );
    const d = (S) => "rules" in S, u = y(() => Object.keys(a.fields));
    function f(S) {
      const m = S ? a.fields[S]?.kind : void 0;
      return m ? a.operators[m] ?? [] : [];
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
      const S = u.value[0];
      i.value.rules.push({
        field: S,
        operator: f(S)[0],
        value: void 0
      }), p();
    }
    function $() {
      i.value.rules.push(s()), p();
    }
    function b(S) {
      i.value.rules.splice(S, 1), p();
    }
    function w(S) {
      S.operator = f(S.field)[0], S.value = void 0, p();
    }
    const C = y(() => a.depth + 1 < a.maxDepth);
    function M() {
      i.value = s(), p(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (S, m) => {
      const g = Wt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", is, [
          ge(o("select", {
            "onUpdate:modelValue": m[0] || (m[0] = (_) => i.value.logic = _),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...m[1] || (m[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ze, i.value.logic]
          ]),
          m[2] || (m[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, j(i.value.rules, (_, T) => (t(), n("div", {
          key: T,
          class: "flex items-start gap-2"
        }, [
          d(_) ? (t(), D(g, {
            key: 0,
            modelValue: i.value.rules[T],
            "onUpdate:modelValue": [(F) => i.value.rules[T] = F, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            ge(o("select", {
              "onUpdate:modelValue": (F) => _.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => w(_)
            }, [
              (t(!0), n(z, null, j(u.value, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, us))), 128))
            ], 40, ds), [
              [Ze, _.field]
            ]),
            ge(o("select", {
              "onUpdate:modelValue": (F) => _.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, j(f(_.field), (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(v[F] ?? F), 9, fs))), 128))
            ], 40, cs), [
              [Ze, _.operator]
            ]),
            _.field && e.fields[_.field]?.kind === "boolean" ? ge((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (F) => _.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...m[3] || (m[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, ms)), [
              [Ze, _.value]
            ]) : _.field && e.fields[_.field]?.options?.length ? ge((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (F) => _.value = F,
              multiple: e.fields[_.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, j(e.fields[_.field].options, (F) => (t(), n("option", {
                key: F,
                value: F
              }, c(F), 9, vs))), 128))
            ], 40, ps)), [
              [Ze, _.value]
            ]) : ge((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (F) => _.value = F,
              type: _.field && e.fields[_.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, gs)), [
              [ca, _.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(_) ? "group" : "rule"}`,
            onClick: (F) => b(T)
          }, " × ", 8, hs)
        ]))), 128)),
        o("div", bs, [
          I(ce, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...m[4] || (m[4] = [
              U("Add rule", -1)
            ])]),
            _: 1
          }),
          C.value ? (t(), D(ce, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: $
          }, {
            default: O(() => [...m[5] || (m[5] = [
              U(" Add group ", -1)
            ])]),
            _: 1
          })) : x("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            m[8] || (m[8] = o("span", { class: "flex-1" }, null, -1)),
            I(ce, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: O(() => [...m[6] || (m[6] = [
                U(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(ce, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: O(() => [...m[7] || (m[7] = [
                U(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : x("", !0)
        ])
      ], 2);
    };
  }
}), xs = { class: "flex flex-col gap-2" }, ks = { class: "flex items-center gap-2 md:hidden" }, $s = { class: "relative min-w-0 flex-1" }, ws = ["placeholder", "title", "aria-label"], Cs = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, Ss = { class: "flex max-h-[85vh] flex-col" }, Ms = { class: "flex-1 overflow-y-auto px-4 py-3" }, Bs = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, As = { class: "text-xs font-medium" }, _s = ["value", "onChange"], zs = ["value"], Ps = { class: "mb-4" }, Ls = { class: "flex flex-col gap-1" }, Os = ["disabled", "onClick"], js = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Vs = {
  key: 1,
  class: "mb-4"
}, Ds = { class: "flex flex-col gap-1" }, Ts = ["onClick"], Is = { class: "border-t p-4" }, Es = ["disabled"], Fs = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Ns = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Rs = ["placeholder", "title", "aria-label"], Us = ["aria-label"], Hs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Ks = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, qs = { class: "text-xs font-medium" }, Gs = ["value", "onChange"], Ws = ["value"], Zs = { class: "grid grid-cols-2 gap-2" }, Js = ["value", "onChange"], Ys = ["value", "onChange"], Qs = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Xs = ["value", "onChange"], er = ["value", "onChange"], tr = {
  key: 4,
  class: "flex items-center gap-2"
}, nr = ["aria-checked", "onClick"], ar = { class: "text-xs" }, lr = ["onClick"], or = ["value", "onChange"], sr = ["value"], rr = ["disabled", "onClick"], ir = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, dr = ["disabled", "onClick"], ur = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, cr = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, fr = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, mr = ["aria-pressed", "aria-label", "title", "onClick"], pr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, vr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, gr = ["aria-pressed", "aria-label", "title"], hr = ["aria-label", "title"], br = { class: "flex flex-col gap-0.5 p-1" }, yr = ["onClick"], xr = ["onClick"], kr = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, $r = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, wr = ["dusk"], Cr = ["aria-label", "onClick"], Sr = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(!1), i = K(a.search);
    pe(
      () => a.search,
      (V) => {
        V !== i.value && (i.value = V);
      }
    );
    let d;
    pe(i, (V) => {
      clearTimeout(d), d = setTimeout(() => {
        V !== a.search && r("update:search", V);
      }, 250);
    });
    const u = K({ ...a.filters });
    pe(
      () => a.filters,
      (V) => {
        u.value = { ...V };
      },
      { deep: !0 }
    );
    const f = y(
      () => a.filterSchema.filter(
        (V) => a.filters[V.key] !== null && a.filters[V.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = y(() => a.search !== "" || f.value > 0), h = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((V) => a.filters[V.key] !== null && a.filters[V.key] !== void 0).map((V) => ({
      key: V.key,
      label: `${V.label}: ${String(a.filters[V.key])}`,
      removable: !0
    })));
    function $(V) {
      r("group", V);
    }
    function b(V) {
      $(V), s.value = !1;
    }
    function w(V, E) {
      $(V), E();
    }
    function C(V) {
      r("clear-filter", V);
    }
    function M(V) {
      return V.type === "multiselect";
    }
    function B(V) {
      const E = u.value[V.key];
      return Array.isArray(E) ? E : E == null ? [] : [E];
    }
    function S(V) {
      return B(V).filter(
        (E) => typeof E == "string" || typeof E == "number"
      );
    }
    function m(V) {
      return Z(V).flatMap(
        (E) => typeof E.value == "string" || typeof E.value == "number" ? [{ value: E.value, label: E.label }] : []
      );
    }
    function g(V, E) {
      u.value = { ...u.value, [V.key]: E === "" ? null : E };
    }
    function _(V, E) {
      const te = u.value[V.key];
      if (typeof te != "string" || !te.includes(".."))
        return "";
      const [le, Q] = te.split("..");
      return E === "from" ? le ?? "" : Q ?? "";
    }
    function T(V, E, te) {
      const le = E === "from" ? te : _(V, "from"), Q = E === "to" ? te : _(V, "to");
      u.value = {
        ...u.value,
        [V.key]: le && Q ? `${le}..${Q}` : null
      };
    }
    function F(V, E, te) {
      const le = E === "from" ? te : _(V, "from"), Q = E === "to" ? te : _(V, "to");
      u.value = {
        ...u.value,
        [V.key]: le || Q ? `${le}..${Q}` : null
      };
    }
    function J(V) {
      r("apply-filters", { ...u.value }), V();
    }
    function N(V, E) {
      u.value[V] = E, r("apply-filters", { ...u.value });
    }
    function G() {
      u.value = Object.fromEntries(a.filterSchema.map((V) => [V.key, null]));
    }
    function Z(V) {
      return V.type === "boolean" ? [
        { value: !0, label: V.trueLabel ?? "Yes" },
        { value: !1, label: V.falseLabel ?? "No" }
      ] : V.type === "daterange" ? Object.entries(V.presets ?? {}).map(([E, te]) => ({
        value: E,
        label: te
      })) : (V.options ?? []).map(
        (E) => typeof E == "object" && E !== null && "value" in E ? { value: E.value, label: E.label } : { value: E, label: String(E) }
      );
    }
    const W = K(new Set(a.hidden));
    pe(
      () => a.hidden,
      (V) => {
        W.value = new Set(V);
      },
      { deep: !0 }
    );
    function H(V) {
      const E = new Set(W.value);
      E.has(V) ? E.delete(V) : E.add(V), W.value = E, r("apply-columns", [...E]);
    }
    function R() {
      W.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ee() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function P() {
      i.value = "", r("clear");
    }
    function Y() {
      P(), s.value = !1;
    }
    return (V, E) => (t(), n("div", xs, [
      o("div", ks, [
        o("div", $s, [
          E[8] || (E[8] = o("svg", {
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
          ge(o("input", {
            "onUpdate:modelValue": E[0] || (E[0] = (te) => i.value = te),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A([
              "border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors",
              k(Me)
            ])
          }, null, 10, ws), [
            [_e, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: E[1] || (E[1] = (te) => s.value = !0)
        }, [
          E[9] || (E[9] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          E[10] || (E[10] = U(" Tools ", -1)),
          f.value ? (t(), n("span", Cs, c(f.value), 1)) : x("", !0)
        ]),
        I(nn, {
          open: s.value,
          "onUpdate:open": E[3] || (E[3] = (te) => s.value = te)
        }, {
          default: O(() => [
            I(an, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", Ss, [
                  E[15] || (E[15] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, " Filters, columns, and grouping ")
                  ], -1)),
                  o("div", Ms, [
                    e.filterSchema.length ? (t(), n("div", Bs, [
                      o("div", { class: "flex items-center justify-between" }, [
                        E[11] || (E[11] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: G
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, j(e.filterSchema, (te) => (t(), n("div", {
                        key: `mobile-${te.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", As, c(te.label), 1),
                        te.type !== "multiselect" && te.type !== "querybuilder" && te.type !== "daterange" && te.type !== "numberrange" && te.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[te.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (le) => g(
                            te,
                            le.target.value
                          )
                        }, [
                          E[12] || (E[12] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, j(Z(te), (le) => (t(), n("option", {
                            key: String(le.value),
                            value: le.value
                          }, c(le.label), 9, zs))), 128))
                        ], 40, _s)) : x("", !0)
                      ]))), 128))
                    ])) : x("", !0),
                    o("div", Ps, [
                      E[13] || (E[13] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ls, [
                        (t(!0), n(z, null, j(e.columns, (te) => (t(), n("button", {
                          key: `mobile-col-${te.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: te.locked,
                          onClick: (le) => H(te.key)
                        }, [
                          o("span", null, c(te.label), 1),
                          W.value.has(te.key) ? x("", !0) : (t(), n("span", js, "On"))
                        ], 8, Os))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", Vs, [
                      E[14] || (E[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Ds, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: E[2] || (E[2] = (te) => b(null))
                        }, " No grouping "),
                        (t(!0), n(z, null, j(e.groups, (te) => (t(), n("button", {
                          key: te.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (le) => b(te.key)
                        }, c(te.label), 9, Ts))), 128))
                      ])
                    ])) : x("", !0)
                  ]),
                  o("div", Is, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ee
                    }, " Apply filters ", 8, Es)) : x("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: Y
                    }, " Clear search and filters ")) : x("", !0)
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      o("div", Fs, [
        o("div", Ns, [
          E[17] || (E[17] = o("svg", {
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
          ge(o("input", {
            "onUpdate:modelValue": E[4] || (E[4] = (te) => i.value = te),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A([
              "border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors",
              k(Me)
            ])
          }, null, 10, Rs), [
            [_e, i.value]
          ]),
          i.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: E[5] || (E[5] = (te) => i.value = "")
          }, [...E[16] || (E[16] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3.5",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])])) : x("", !0)
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
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", f.value ? "border-primary text-primary" : ""]),
              "aria-label": f.value ? `Filters (${f.value} active)` : "Filters",
              title: "Filters"
            }, [
              E[18] || (E[18] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              f.value ? (t(), n("span", Hs, c(f.value), 1)) : x("", !0)
            ], 10, Us)
          ]),
          panel: O(({ close: te }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              E[19] || (E[19] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: G
              }, " Reset ")
            ]),
            E[22] || (E[22] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Ks, [
              (t(!0), n(z, null, j(e.filterSchema, (le) => (t(), n("div", {
                key: le.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", qs, c(le.label), 1),
                M(le) ? (t(), D(tn, {
                  key: 0,
                  "model-value": S(le),
                  options: m(le),
                  placeholder: `Any ${le.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Q) => u.value[le.key] = Q.length ? Q : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : le.type === "querybuilder" ? (t(), D(ys, {
                  key: 1,
                  "model-value": u.value[le.key] ?? null,
                  fields: le.fields ?? {},
                  operators: le.operators ?? {},
                  "max-depth": le.maxDepth ?? 5,
                  onApply: (Q) => N(le.key, Q)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : le.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[le.key] == "string" && !String(u.value[le.key]).includes("..") ? u.value[le.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Q) => g(le, Q.target.value)
                  }, [
                    E[20] || (E[20] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, j(Z(le), (Q) => (t(), n("option", {
                      key: String(Q.value),
                      value: Q.value
                    }, c(Q.label), 9, Ws))), 128))
                  ], 40, Gs),
                  o("div", Zs, [
                    o("input", {
                      type: "date",
                      value: _(le, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => T(
                        le,
                        "from",
                        Q.target.value
                      )
                    }, null, 40, Js),
                    o("input", {
                      type: "date",
                      value: _(le, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => T(
                        le,
                        "to",
                        Q.target.value
                      )
                    }, null, 40, Ys)
                  ])
                ], 64)) : le.type === "numberrange" ? (t(), n("div", Qs, [
                  o("input", {
                    type: "number",
                    value: _(le, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => F(
                      le,
                      "from",
                      Q.target.value
                    )
                  }, null, 40, Xs),
                  o("input", {
                    type: "number",
                    value: _(le, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => F(
                      le,
                      "to",
                      Q.target.value
                    )
                  }, null, 40, er)
                ])) : le.type === "boolean" ? (t(), n("div", tr, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[le.key] === !0,
                    class: A([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[le.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Q) => g(le, u.value[le.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: A([
                        "bg-background absolute top-0.5 size-4 rounded-full transition-all",
                        u.value[le.key] === !0 ? "left-4.5" : "left-0.5"
                      ])
                    }, null, 2)
                  ], 10, nr),
                  o("span", ar, c(le.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[le.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Q) => g(le, u.value[le.key] === !1 ? null : !1)
                  }, c(le.falseLabel ?? "No") + " only ", 11, lr)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[le.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Q) => g(le, Q.target.value)
                }, [
                  E[21] || (E[21] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, j(Z(le), (Q) => (t(), n("option", {
                    key: String(Q.value),
                    value: Q.value
                  }, c(Q.label), 9, sr))), 128))
                ], 40, or))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (le) => J(te)
            }, " Apply filters ", 8, rr)
          ]),
          _: 1
        })) : x("", !0),
        I(He, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...E[23] || (E[23] = [
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
            E[26] || (E[26] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", ir, [
              (t(!0), n(z, null, j(e.columns, (te) => (t(), n("button", {
                key: te.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", te.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: te.locked,
                onClick: (le) => H(te.key)
              }, [
                W.value.has(te.key) ? (t(), n("span", cr)) : (t(), n("svg", ur, [...E[24] || (E[24] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                U(" " + c(te.label), 1)
              ], 10, dr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: R
              }, [...E[25] || (E[25] = [
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
                U(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), n("div", fr, [
          (t(!0), n(z, null, j(e.layouts, (te) => (t(), n("button", {
            key: te,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === te ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === te,
            "aria-label": te === "cards" ? "Card layout" : "Table layout",
            title: te === "cards" ? "Cards" : "Table",
            onClick: (le) => r("layout", te)
          }, [
            te === "table" ? (t(), n("svg", pr, [...E[27] || (E[27] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", vr, [...E[28] || (E[28] = [
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
          ], 10, mr))), 128))
        ])) : x("", !0),
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: E[6] || (E[6] = (te) => r("toggle-reorder"))
        }, [...E[29] || (E[29] = [
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
        ])], 10, gr)) : x("", !0),
        e.groups.length ? (t(), D(He, {
          key: 3,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...E[30] || (E[30] = [
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
            ])], 10, hr)
          ]),
          panel: O(({ close: te }) => [
            o("div", br, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (le) => w(null, te)
              }, " No grouping ", 10, yr),
              (t(!0), n(z, null, j(e.groups, (le) => (t(), n("button", {
                key: le.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === le.key ? "text-primary font-medium" : ""]),
                onClick: (Q) => w(le.key, te)
              }, c(le.label), 11, xr))), 128))
            ])
          ]),
          _: 1
        })) : x("", !0),
        p.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: P
        }, " Clear ")) : x("", !0),
        e.loading ? (t(), n("span", kr, "Loading…")) : x("", !0)
      ]),
      h.value.length ? (t(), n("div", $r, [
        (t(!0), n(z, null, j(h.value, (te) => (t(), n("span", {
          key: te.key + te.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${te.key}`
        }, [
          U(c(te.label) + " ", 1),
          te.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${te.label}`,
            onClick: (le) => C(te.key)
          }, [...E[31] || (E[31] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Cr)) : x("", !0)
        ], 8, wr))), 128)),
        h.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: E[7] || (E[7] = (te) => r("clear-filters"))
        }, " Clear all ")) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), Mr = { class: "min-w-0" }, Br = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Ar = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, _r = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, zr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, Pr = { class: "w-full border-collapse text-sm" }, Lr = { class: "bg-muted/40" }, Or = { class: "divide-y" }, jr = ["href"], Vr = {
  key: 1,
  class: "text-muted-foreground"
}, Dr = {
  key: 0,
  class: "flex justify-center"
}, Tr = ["disabled"], Ir = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Er = ["href"], m8 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = Gt(), i = y(() => a.columns.filter(($) => $.type !== "image")), d = y(() => !!s.actions), u = y(() => !!a.title || d.value), f = y(() => a.filterSchema.length > 0), v = y(
      () => a.columns.map(($) => ({ key: $.key, label: $.label, locked: !0 }))
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
    return ($, b) => (t(), D(Wo, null, it({
      default: O(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", _r, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), D(Ft, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, it({ _: 2 }, [
          $.$slots.illustration ? {
            name: "illustration",
            fn: O(() => [
              q($.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          $.$slots["empty-actions"] ? {
            name: "actions",
            fn: O(() => [
              q($.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", zr, [
          o("table", Pr, [
            o("thead", Lr, [
              o("tr", null, [
                (t(!0), n(z, null, j(i.value, (w) => (t(), n("th", {
                  key: w.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(w.label), 1))), 128))
              ])
            ]),
            o("tbody", Or, [
              (t(!0), n(z, null, j(e.rows, (w, C) => (t(), n("tr", {
                key: w.id ?? C,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, j(i.value, (M) => (t(), n("td", {
                  key: M.key,
                  class: A(["px-3 whitespace-nowrap", [
                    M.mono ? "font-mono text-xs" : "",
                    M.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  q($.$slots, `cell:${M.key}`, {
                    row: w,
                    value: w[M.key],
                    column: M
                  }, () => [
                    e.recordBase && w.id != null && M === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${w.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(p(M, w[M.key])), 9, jr)) : h(w[M.key]) ? (t(), n("span", Vr, " None ")) : (t(), n(z, { key: 2 }, [
                      U(c(p(M, w[M.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : x("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: O(() => [
          o("div", Mr, [
            e.title ? (t(), n("h3", Br, c(e.title), 1)) : x("", !0)
          ]),
          d.value ? (t(), n("div", Ar, [
            q($.$slots, "actions")
          ])) : x("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: O(() => [
          I(Sr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": b[0] || (b[0] = (w) => r("update:search", w)),
            onApplyFilters: b[1] || (b[1] = (w) => r("apply-filters", w)),
            onClearFilters: b[2] || (b[2] = (w) => r("clear-filters")),
            onClearFilter: b[3] || (b[3] = (w) => r("clear-filter", w)),
            onClear: b[4] || (b[4] = (w) => r("clear-filters")),
            onApplyColumns: b[5] || (b[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: O(() => [
          e.nextCursor ? (t(), n("div", Dr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[6] || (b[6] = (w) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Tr)
          ])) : e.capped ? (t(), n("p", Ir, [
            U(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Er)) : (t(), n(z, { key: 1 }, [
              U("Open the full list to search or filter the rest.")
            ], 64))
          ])) : x("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Fr = { class: "flex items-center gap-2 overflow-x-auto" }, Nr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ur = { class: "flex flex-col" }, Hr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Kr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, qr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Gr = /* @__PURE__ */ L({
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
    const a = e, r = l;
    function s(f) {
      return a.failedStep !== null && f === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && f > a.failedStep ? "" : f < a.activeStep ? "bg-primary text-primary-foreground border-primary" : f === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(f) {
      if (a.failedStep !== null) {
        if (f === a.failedStep)
          return "text-destructive font-medium";
        if (f > a.failedStep)
          return "text-muted-foreground/60";
      }
      return f === a.activeStep ? "text-foreground font-medium" : f < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(f) {
      return a.failedStep !== null ? f < a.failedStep : f < a.activeStep;
    }
    function u(f) {
      return a.failedStep === f;
    }
    return (f, v) => (t(), n("ol", Fr, [
      (t(!0), n(z, null, j(e.steps, (p, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Ce(e.interactive ? "button" : "div"), de({
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
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), n("svg", Nr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), n("svg", Rr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                U(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Ur, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), n("span", Hr, c(p.description), 1)) : x("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Kr)) : x("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", qr)) : x("", !0)
      ]))), 128))
    ]));
  }
}), mt = /* @__PURE__ */ new Map();
function xe(e, l) {
  mt.set(e, l);
}
function Wr(e) {
  return mt.get(e);
}
function p8(e) {
  return mt.has(e);
}
function v8() {
  return [...mt.keys()].sort();
}
function g8() {
  mt.clear();
}
const h8 = "text-sm text-muted-foreground font-normal", b8 = "text-xs text-muted-foreground font-normal", bt = "text-xs text-muted-foreground font-normal leading-snug";
class Zr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function y8(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Jr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Yr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const Qr = "text-foreground font-normal", Xr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Qr} ${Xr}`, ei = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(ya), de({ "data-slot": "checkbox" }, k(i), {
      class: k(oe)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O((f) => [
        I(k(xa), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            q(d.$slots, "default", Le(Ne(f)), () => [
              I(k(Dn), { class: "size-3.5" })
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
    const a = e, r = l, s = ye(ve(a, "class"), r);
    return (i, d) => (t(), D(k(ka), de({ "data-slot": "switch" }, k(s), {
      class: k(oe)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: O(() => [
        I(k($a), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ti = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, ni = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K({});
    pe(
      () => a.open,
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
      onClose: u[1] || (u[1] = (f) => r("close"))
    }, {
      footer: O(() => [
        I(ce, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (f) => r("close"))
        }, {
          default: O(() => [...u[2] || (u[2] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(ce, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            U(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", ti, c(e.generalError), 1)) : x("", !0),
          (t(!0), n(z, null, j(e.fields, (f) => (t(), D(Ge, {
            key: f.key,
            field: f,
            value: s.value[f.key],
            error: e.errors[f.key],
            processing: e.processing,
            onChange: (v) => s.value[f.key] = v
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), ai = ["accept", "disabled"], li = { class: "text-sm font-medium" }, oi = { key: 0 }, si = { key: 1 }, ri = { class: "text-muted-foreground text-xs font-normal" }, ii = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, di = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ui = ["src"], ci = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, fi = { class: "min-w-0 flex-1" }, mi = { class: "block truncate text-sm font-medium" }, pi = { class: "text-muted-foreground text-xs font-normal" }, vi = ["href"], gi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Fn = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null), i = K(!1), d = K(null), u = K(null), f = K(null), v = y(() => a.accept.map((m) => `.${m}`).join(",")), p = y(() => f.value ?? a.modelValue?.url ?? null), h = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${$(a.maxKilobytes * 1024)}`);
    function $(m) {
      if (!m)
        return "";
      const g = ["B", "KB", "MB", "GB"];
      let _ = m, T = 0;
      for (; _ >= 1024 && T < g.length - 1; )
        _ /= 1024, T++;
      return `${_.toFixed(_ < 10 && T > 0 ? 1 : 0)} ${g[T]}`;
    }
    function b(m) {
      return m.split(".").pop()?.toLowerCase() ?? "";
    }
    function w(m) {
      return a.accept.length && !a.accept.includes(b(m.name)) ? `${b(m.name).toUpperCase() || "That"} files are not accepted here.` : m.size > a.maxKilobytes * 1024 ? `That file is ${$(m.size)}; the limit is ${$(a.maxKilobytes * 1024)}.` : null;
    }
    async function C(m) {
      const g = m?.[0];
      if (!(!g || a.disabled) && (u.value = w(g), !u.value)) {
        M(), a.image && g.type.startsWith("image/") && (f.value = URL.createObjectURL(g)), d.value = 0;
        try {
          const _ = await a.upload(g, (T) => {
            d.value = T;
          });
          r("update:modelValue", _);
        } catch (_) {
          u.value = _ instanceof Error ? _.message : "The upload failed.", M();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function M() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function B() {
      const m = a.modelValue;
      M(), u.value = null, r("update:modelValue", null), m && !m.url && a.discard && await a.discard(m.value).catch(() => {
      });
    }
    function S(m) {
      i.value = !1, C(m.dataTransfer?.files ?? null);
    }
    return (m, g) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", di, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ui)) : (t(), n("span", ci, c(b(e.modelValue.name) || "file"), 1)),
        o("span", fi, [
          o("span", mi, c(e.modelValue.name), 1),
          o("span", pi, [
            U(c($(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              g[4] || (g[4] = U(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, vi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              U(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? x("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: B
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
      ])) : (t(), n("label", {
        key: 0,
        class: A(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: g[1] || (g[1] = he((_) => i.value = !0, ["prevent"])),
        onDragleave: g[2] || (g[2] = he((_) => i.value = !1, ["prevent"])),
        onDrop: he(S, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: g[0] || (g[0] = (_) => C(_.target.files))
        }, null, 40, ai),
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
        o("span", li, [
          d.value === null ? (t(), n("span", oi, "Drop a file or click to choose")) : (t(), n("span", si, "Uploading…"))
        ]),
        o("span", ri, c(h.value), 1),
        d.value !== null ? (t(), n("span", ii, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: ie({ width: `${d.value}%` })
          }, null, 4)
        ])) : x("", !0)
      ], 34)),
      u.value ? (t(), n("p", gi, c(u.value), 1)) : x("", !0)
    ]));
  }
}), hi = { class: "flex flex-col gap-2" }, bi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, yi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, xi = { class: "flex flex-col gap-1" }, ki = ["onUpdate:modelValue", "disabled", "aria-label"], $i = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, wi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, Ci = ["onUpdate:modelValue", "disabled", "aria-label"], Si = ["disabled", "aria-label", "onClick"], Mi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Bi = { class: "flex items-center gap-3" }, Ai = ["disabled"], _i = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, zi = /* @__PURE__ */ L({
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
    const a = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = K(u(a.modelValue));
    function u(C) {
      return C ? Object.entries(C).map(([M, B]) => ({
        uid: i++,
        key: M,
        value: B ?? ""
      })) : [];
    }
    pe(
      () => a.modelValue,
      (C) => {
        JSON.stringify(C ?? null) !== JSON.stringify(f()) && (d.value = u(C));
      }
    );
    function f() {
      const C = {};
      for (const M of d.value) {
        const B = M.key.trim();
        B !== "" && (C[B] = M.value);
      }
      return Object.keys(C).length ? C : null;
    }
    function v() {
      r("update:modelValue", f());
    }
    const p = y(() => {
      const C = /* @__PURE__ */ new Map();
      for (const M of d.value) {
        const B = M.key.trim();
        B !== "" && C.set(B, (C.get(B) ?? 0) + 1);
      }
      return new Set([...C.entries()].filter(([, M]) => M > 1).map(([M]) => M));
    }), h = y(
      () => new Set(
        d.value.map((C) => C.key.trim()).filter((C) => C !== "" && !s.test(C))
      )
    ), $ = y(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function b() {
      $.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function w(C) {
      d.value = d.value.filter((M) => M.uid !== C), v();
    }
    return (C, M) => (t(), n("div", hi, [
      d.value.length ? (t(), n("div", bi, [
        o("div", yi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, j(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", xi, [
            ge(o("input", {
              "onUpdate:modelValue": (S) => B.key = S,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(B.key.trim()) || h.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, ki), [
              [_e, B.key]
            ]),
            h.value.has(B.key.trim()) ? (t(), n("p", $i, " Letters, numbers, underscores and dashes only. ")) : p.value.has(B.key.trim()) ? (t(), n("p", wi, " Used twice - only the last value will be saved. ")) : x("", !0)
          ]),
          ge(o("input", {
            "onUpdate:modelValue": (S) => B.value = S,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, Ci), [
            [_e, B.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${B.key || "this entry"}`,
            onClick: (S) => w(B.uid)
          }, [...M[1] || (M[1] = [
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
          ])], 8, Si)
        ]))), 128))
      ])) : (t(), n("p", Mi, " Nothing here yet. ")),
      o("div", Bi, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || $.value,
          onClick: b
        }, [
          M[2] || (M[2] = o("svg", {
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
          U(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Ai),
        e.maxPairs !== null ? (t(), n("p", _i, c(d.value.length) + " of " + c(e.maxPairs), 1)) : x("", !0)
      ])
    ]));
  }
}), Pi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Li = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Oi = ["disabled", "title", "aria-label", "onClick"], ji = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vi = ["d"], Di = ["disabled"], Ti = ["contenteditable", "data-placeholder"], Ii = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Ei = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null);
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
    ], u = y(() => d.filter((w) => a.toolbar.includes(w.id))), f = y(() => a.toolbar.includes("link")), v = K(0);
    function p() {
      const w = s.value?.innerHTML ?? "", C = (s.value?.innerText ?? "").trim();
      v.value = C.length;
      const M = C === "" ? null : w;
      i = M, r("update:modelValue", M);
    }
    function h(w) {
      a.disabled || (s.value?.focus(), document.execCommand(w.command, !1, w.argument), p());
    }
    function $() {
      if (a.disabled)
        return;
      const w = window.prompt("Link address");
      w && (s.value?.focus(), document.execCommand("createLink", !1, w), p());
    }
    function b(w) {
      w.preventDefault();
      const C = w.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, C), p();
    }
    return be(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), pe(
      () => a.modelValue,
      (w) => {
        w !== i && s.value && (s.value.innerHTML = w ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (w, C) => (t(), n("div", Pi, [
      o("div", Li, [
        (t(!0), n(z, null, j(u.value, (M) => (t(), n("button", {
          key: M.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: M.label,
          "aria-label": M.label,
          onMousedown: C[0] || (C[0] = he(() => {
          }, ["prevent"])),
          onClick: (B) => h(M)
        }, [
          (t(), n("svg", ji, [
            o("path", {
              d: M.path
            }, null, 8, Vi)
          ]))
        ], 40, Oi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: C[1] || (C[1] = he(() => {
          }, ["prevent"])),
          onClick: $
        }, [...C[2] || (C[2] = [
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
        ])], 40, Di)) : x("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: A(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: b
      }, null, 42, Ti),
      e.maxLength !== null ? (t(), n("div", Ii, c(v.value) + " / " + c(e.maxLength), 1)) : x("", !0)
    ]));
  }
}), Fi = /* @__PURE__ */ Bt(Ei, [["__scopeId", "data-v-32c63bc7"]]), Ni = ["role"], Ri = ["title"], Ui = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Hi = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ki = ["d"], qi = { key: 1 }, Gi = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Nn = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(() => !!a.field.multiple), i = y(() => !!a.field.grouped), d = y(() => !!a.field.hiddenLabels), u = y(() => a.field.inline !== !1), f = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function v(m) {
      return s.value ? f.value.some((g) => g == m.value) : a.modelValue != null && m.value == a.modelValue;
    }
    function p(m) {
      if (!a.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            v(m) ? f.value.filter((g) => g != m.value) : [...f.value, m.value]
          );
          return;
        }
        r("update:modelValue", m.value);
      }
    }
    function h(m) {
      return a.field.colors?.[String(m.value)] ?? "primary";
    }
    function $(m) {
      const g = a.field.icons?.[String(m.value)];
      return g ? me(g) : null;
    }
    function b(m) {
      return a.field.tooltips?.[String(m.value)] ?? m.label;
    }
    const w = {
      primary: "border-primary bg-primary text-primary-foreground",
      success: "border-success bg-success text-white",
      warning: "border-warning bg-warning text-white",
      danger: "border-destructive bg-destructive text-white",
      info: "border-info bg-info text-white",
      neutral: "border-foreground bg-foreground text-background"
    }, C = {
      primary: "border-input hover:border-primary/60 hover:bg-primary/5",
      success: "border-input hover:border-success/60 hover:bg-success/5",
      warning: "border-input hover:border-warning/60 hover:bg-warning/5",
      danger: "border-input hover:border-destructive/60 hover:bg-destructive/5",
      info: "border-input hover:border-info/60 hover:bg-info/5",
      neutral: "border-input hover:border-foreground/40 hover:bg-muted"
    };
    function M(m) {
      const g = h(m), _ = v(m);
      return [
        Me,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        _ ? w[g] ?? w.primary : C[g] ?? C.primary,
        a.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const B = y(() => {
      if (!(u.value || i.value) && a.field.columns && a.field.columns > 1)
        return { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` };
    }), S = y(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (m, g) => (t(), n("div", {
      role: s.value ? "group" : "radiogroup",
      class: A(S.value),
      style: ie(B.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), n(z, null, j(e.options, (_) => (t(), n("label", {
        key: String(_.value),
        class: A(M(_)),
        title: b(_)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: _.value,
          checked: v(_),
          disabled: e.disabled,
          "aria-label": d.value ? _.label : void 0,
          onChange: (T) => p(_)
        }, null, 40, Ui),
        $(_) ? (t(), n("svg", Hi, [
          o("path", {
            d: $(_)
          }, null, 8, Ki)
        ])) : x("", !0),
        d.value ? x("", !0) : (t(), n("span", qi, c(_.label), 1))
      ], 10, Ri))), 128)),
      e.options.length === 0 ? (t(), n("p", Gi, " Nothing to choose from yet. ")) : x("", !0)
    ], 14, Ni));
  }
}), Wi = {
  key: 1,
  class: "flex flex-col gap-2"
}, Zi = { class: "flex items-center justify-between gap-2" }, Ji = ["for"], Yi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Qi = ["aria-label", "disabled"], Xi = {
  key: 7,
  class: "flex flex-col gap-2"
}, ed = ["id", "value", "disabled"], td = ["value"], nd = {
  key: 2,
  class: "relative"
}, ad = ["disabled"], ld = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, od = { class: "max-h-56 overflow-y-auto p-1" }, sd = ["onClick"], rd = {
  key: 8,
  class: "relative"
}, id = ["disabled", "aria-invalid"], dd = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ud = { class: "max-h-56 overflow-y-auto p-1" }, cd = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, fd = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, md = ["onClick"], pd = ["id", "value", "disabled", "aria-invalid"], vd = ["value"], gd = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, hd = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, bd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], yd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, xd = ["aria-label", "disabled"], kd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], $d = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, wd = ["aria-label", "disabled"], Cd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Sd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Md = ["aria-label", "disabled"], Bd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Ad = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, _d = ["aria-label", "disabled"], zd = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Pd = ["disabled", "aria-pressed", "onClick"], Ld = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Od = ["title", "disabled", "onClick"], jd = ["href"], Vd = {
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
    const a = mn(() => import("./PkRepeater-J84jGe3T.js")), r = mn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = K(!1), u = K(""), f = K([]), v = K(!1), p = K(null);
    let h;
    pe(u, (Q) => {
      s.searchOptions && (clearTimeout(h), v.value = !0, h = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(Q);
        } catch {
        } finally {
          v.value = !1;
        }
      }, 200));
    });
    async function $() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, f.value.length === 0 && s.searchOptions)) {
        v.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          v.value = !1;
        }
      }
    }
    function b(Q) {
      p.value = Q.label, i("change", Q.value), d.value = !1, u.value = "";
    }
    function w() {
      p.value = null, i("change", null);
    }
    const C = xt("panelPicker", null), M = xt("panelCreateOption", null), B = K(!1), S = K(!1), m = K({}), g = K(null), _ = y(() => Jr(s.field)), T = y(() => Yr(s.field));
    function F() {
      m.value = {}, g.value = null, B.value = !0, d.value = !1;
    }
    function J() {
      S.value || (B.value = !1, m.value = {}, g.value = null);
    }
    async function N(Q) {
      if (M) {
        S.value = !0, m.value = {}, g.value = null;
        try {
          const ne = await M.run(s.field.key, { ...Q });
          b(ne), B.value = !1;
        } catch (ne) {
          ne instanceof Zr ? (m.value = ne.fieldErrors, g.value = Object.keys(ne.fieldErrors).length === 0 ? ne.message : null) : g.value = ne instanceof Error ? ne.message : "Could not create that option.";
        } finally {
          S.value = !1;
        }
      }
    }
    const G = y(() => {
      if (!s.field.tableSelect || !C?.base)
        return;
      const Q = C.returnUrl || "/";
      return `${C.base}/pick/${s.field.key}?return=${encodeURIComponent(Q)}`;
    }), Z = y(() => s.field.morphTo ?? []), W = y(() => {
      const Q = s.value;
      return Q && typeof Q == "object" && !Array.isArray(Q) ? Q : { type: void 0, id: void 0 };
    });
    function H(Q) {
      i("change", { type: Q || null, id: null });
    }
    function R(Q) {
      i("change", { type: W.value.type ?? null, id: Q });
    }
    function ee(Q) {
      p.value = Q.label, R(Q.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const P = y(() => Wr(s.field.type)), Y = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function V(Q) {
      if (Q) {
        if (Q.copy) {
          const ne = s.value == null ? "" : String(s.value);
          ne !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(ne);
          return;
        }
        if (Q.url && typeof window < "u") {
          window.open(Q.url, "_blank", "noopener,noreferrer");
          return;
        }
        Q.key && i("affix-action", Q.key);
      }
    }
    const E = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ue} ${Me}`, te = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ue}`;
    function le(Q) {
      const ne = document.getElementById(`f-${s.field.key}`);
      if (!(ne instanceof HTMLTextAreaElement) && !(ne instanceof HTMLInputElement))
        return;
      const se = ne.selectionStart ?? ne.value.length, Se = ne.selectionEnd ?? se;
      ne.setRangeText(Q, se, Se, "end"), ne.dispatchEvent(new Event("input", { bubbles: !0 })), ne.focus();
    }
    return (Q, ne) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Wi, [
        o("div", Zi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            U(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Yi, "*")) : x("", !0)
          ], 10, Ji),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: A(["flex items-center gap-1", k(bt)])
          }, [
            U(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: ne[0] || (ne[0] = (se) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Qi)) : x("", !0)
          ], 2)) : x("", !0)
        ]),
        P.value ? (t(), D(Ce(P.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ne[1] || (ne[1] = (se) => i("change", se))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Fn, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": ne[2] || (ne[2] = (se) => i("change", se))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(k(a), {
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
          relationship: e.field.relationship ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": ne[3] || (ne[3] = (se) => i("change", se))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "addable", "deletable", "cloneable", "table", "relationship", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": ne[4] || (ne[4] = (se) => i("change", se))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Fi, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ne[5] || (ne[5] = (se) => i("change", se))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(zi, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ne[6] || (ne[6] = (se) => i("change", se))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(tn, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": ne[7] || (ne[7] = (se) => i("change", se))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), n("div", Xi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(Nn, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": W.value.type ?? null,
            options: Z.value.map((se) => ({ value: se.value, label: se.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[8] || (ne[8] = (se) => H(se == null ? "" : String(se)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), n("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: W.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: A([
              "border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50",
              k(Me)
            ]),
            onChange: ne[9] || (ne[9] = (se) => H(se.target.value))
          }, [
            ne[25] || (ne[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, j(Z.value, (se) => (t(), n("option", {
              key: se.value,
              value: se.value
            }, c(se.label), 9, td))), 128))
          ], 42, ed)),
          W.value.type && e.searchOptions ? (t(), n("div", nd, [
            o("button", {
              type: "button",
              class: A([
                "border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50",
                k(Me)
              ]),
              disabled: e.field.disabled || e.processing,
              onClick: $
            }, [
              o("span", {
                class: A(p.value || W.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (W.value.id ? String(W.value.id) : "Search…")), 3)
            ], 10, ad),
            d.value ? (t(), n("div", ld, [
              ge(o("input", {
                "onUpdate:modelValue": ne[10] || (ne[10] = (se) => u.value = se),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [_e, u.value]
              ]),
              o("div", od, [
                (t(!0), n(z, null, j(f.value, (se) => (t(), n("button", {
                  key: String(se.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Se) => ee(se)
                }, c(se.label), 9, sd))), 128))
              ])
            ])) : x("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: ne[11] || (ne[11] = (se) => d.value = !1)
            })) : x("", !0)
          ])) : x("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", rd, [
          o("button", {
            type: "button",
            class: A([
              "border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50",
              k(Me)
            ]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: $
          }, [
            o("span", {
              class: A(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(w, ["stop"])
            }, " ✕ ")) : x("", !0)
          ], 10, id),
          d.value ? (t(), n("div", dd, [
            ge(o("input", {
              "onUpdate:modelValue": ne[12] || (ne[12] = (se) => u.value = se),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [_e, u.value]
            ]),
            o("div", ud, [
              v.value ? (t(), n("p", cd, " Searching… ")) : f.value.length === 0 ? (t(), n("p", fd, " No matches ")) : x("", !0),
              (t(!0), n(z, null, j(f.value, (se) => (t(), n("button", {
                key: String(se.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Se) => b(se)
              }, c(se.label), 9, md))), 128)),
              e.field.createOption && k(M) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                ne[26] || (ne[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                U(" " + c(T.value), 1)
              ])) : x("", !0)
            ])
          ])) : x("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: ne[13] || (ne[13] = (se) => d.value = !1)
          })) : x("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A([
            "border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50",
            k(Me)
          ]),
          onChange: ne[14] || (ne[14] = (se) => i("change", se.target.value || null))
        }, [
          ne[27] || (ne[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, j(e.options, (se) => (t(), n("option", {
            key: String(se.value),
            value: se.value
          }, c(se.label), 9, vd))), 128))
        ], 42, pd)) : e.field.type === "toggle" ? (t(), n("label", gd, [
          I(k(Je), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[15] || (ne[15] = (se) => i("change", se))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(k(bt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", hd, [
          I(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[16] || (ne[16] = (se) => i("change", se === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(k(bt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !Y.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A([
            "border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50",
            k(Ue),
            k(Me)
          ]),
          onInput: ne[17] || (ne[17] = (se) => i("change", se.target.value))
        }, null, 42, bd)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            k(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", yd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ne[18] || (ne[18] = (se) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, xd)) : x("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: A([
              "min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none",
              k(Ue)
            ]),
            onInput: ne[19] || (ne[19] = (se) => i("change", se.target.value))
          }, null, 42, kd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", $d, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ne[20] || (ne[20] = (se) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, wd)) : x("", !0)
        ], 2)) : Y.value ? (t(), n("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", Sd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ne[22] || (ne[22] = (se) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Md)) : x("", !0),
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
            class: A(te),
            onInput: ne[23] || (ne[23] = (se) => i("change", se.target.value))
          }, null, 40, Bd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Ad, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ne[24] || (ne[24] = (se) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, _d)) : x("", !0)
        ], 2)) : (t(), n("input", {
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
          class: A(E),
          onInput: ne[21] || (ne[21] = (se) => i("change", se.target.value))
        }, null, 40, Cd)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", zd, [
          (t(!0), n(z, null, j(e.field.presets, (se) => (t(), n("button", {
            key: se,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: A([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              k(Me),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == se ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == se
            ),
            onClick: (Se) => i("change", String(se))
          }, c(se), 11, Pd))), 128))
        ])) : x("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Ld, [
          (t(!0), n(z, null, j(e.field.chips, (se, Se) => (t(), n("button", {
            key: Se,
            type: "button",
            title: se,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (cn) => le(String(Se))
          }, c(Se), 9, Od))), 128))
        ])) : x("", !0),
        G.value ? (t(), n("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, jd)) : x("", !0),
        e.error ? (t(), n("p", Vd, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: A(k(bt))
        }, c(e.field.help), 3)) : x("", !0)
      ])),
      e.field.createOption && k(M) ? (t(), D(ni, {
        key: 2,
        open: B.value,
        title: _.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: S.value,
        errors: m.value,
        "general-error": g.value,
        onClose: J,
        onSubmit: N
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : x("", !0)
    ], 64));
  }
}), Dd = { class: "flex min-w-0 items-start gap-2.5" }, Td = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Id = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Ed = ["d"], Fd = { class: "min-w-0" }, Nd = { class: "text-sm font-semibold" }, Rd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Ud = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Hd = { class: "border-b px-4 py-3.5 sm:px-5" }, Kd = { class: "text-sm font-semibold" }, qd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Gd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Wd = {
  key: 7,
  class: "flex flex-col gap-3"
}, Zd = { class: "text-sm font-medium" }, Jd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Yd = {
  key: 0,
  class: "mb-1 font-medium"
}, Qd = ["onClick"], Xd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, eu = { class: "flex items-center justify-between gap-3 border-t p-4" }, tu = ["disabled"], Rn = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(!a.node.collapsed);
    function i() {
      const m = a.node.persistInQueryString;
      if (!m || typeof window > "u")
        return 0;
      const g = new URLSearchParams(window.location.search).get(m), _ = g === null ? NaN : Number.parseInt(g, 10), T = a.node.children?.length ?? 0;
      return Number.isInteger(_) && _ >= 0 && _ < T ? _ : 0;
    }
    const d = K(a.node.component === "tabs" ? i() : 0), u = K(a.node.component === "wizard" ? i() : 0);
    function f(m, g) {
      if (!m || typeof window > "u")
        return;
      const _ = new URL(window.location.href);
      _.searchParams.set(m, String(g)), window.history.replaceState(window.history.state, "", _);
    }
    pe(d, (m) => f(a.node.persistInQueryString, m)), pe(u, (m) => f(a.node.persistInQueryString, m));
    const v = y(
      () => (a.node.children ?? []).map((m) => ({
        label: m.label ?? "",
        description: m.description
      }))
    ), p = y(() => a.depth === 0), h = y(() => {
      const m = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, g = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        m[a.node.align ?? "start"] ?? "items-start",
        g[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), $ = y(() => {
      const m = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return m[a.node.tone ?? "info"] ?? m.info;
    }), b = y(() => {
      const m = a.node.columns ?? 1;
      return m >= 3 ? "sm:grid-cols-3" : m === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function w(m) {
      const g = m.children?.length ?? 1;
      return g >= 3 ? "md:grid-cols-3" : g === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function C(m = 1) {
      return m >= 4 ? "md:col-span-4" : m === 3 ? "md:col-span-3" : m === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function M(m) {
      const g = [], _ = (T) => {
        T.component === "field" && T.key && g.push(T.key), T.children?.forEach(_);
      };
      return _(m), g.some((T) => a.errors[T]);
    }
    function B(m) {
      if (m.hidden)
        return !1;
      const g = m.visibleWhen;
      return g ? a.values[g.field] == g.value : !0;
    }
    function S(m) {
      if (a.upload)
        return (g, _) => a.upload(m, g, _);
    }
    return (m, g) => {
      const _ = Wt("SchemaNode", !0);
      return e.node.component === "field" && B(e.node) ? (t(), D(Ge, {
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
        upload: S(e.node.key),
        discard: e.discard,
        onChange: g[0] || (g[0] = (T) => r("change", e.node.key, T)),
        onAffixAction: g[1] || (g[1] = (T) => r("affix-action", e.node.key, T))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && B(e.node) ? (t(), n("section", {
        key: 1,
        class: A(
          p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            p.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: g[2] || (g[2] = (T) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Dd, [
            e.node.icon ? (t(), n("div", Td, [
              (t(), n("svg", Id, [
                o("path", {
                  d: k(me)(e.node.icon)
                }, null, 8, Ed)
              ]))
            ])) : x("", !0),
            o("div", Fd, [
              o("h3", Nd, c(e.node.label), 1),
              e.node.description ? (t(), n("p", Rd, c(e.node.description), 1)) : x("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...g[24] || (g[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : x("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [b.value, p.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), n("div", {
            key: F,
            class: A(T.span && T.span >= 2 ? "sm:col-span-2" : "")
          }, [
            I(_, {
              node: T,
              values: e.values,
              errors: e.errors,
              options: e.options,
              processing: e.processing,
              "search-options": e.searchOptions,
              upload: e.upload,
              discard: e.discard,
              depth: e.depth + 1,
              onChange: g[3] || (g[3] = (J, N) => r("change", J, N)),
              onAffixAction: g[4] || (g[4] = (J, N) => r("affix-action", J, N))
            }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"])
          ], 2))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "card" && B(e.node) ? (t(), n("section", Ud, [
        o("header", Hd, [
          o("h3", Kd, c(e.node.title), 1),
          e.node.description ? (t(), n("p", qd, c(e.node.description), 1)) : x("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            onChange: g[5] || (g[5] = (J, N) => r("change", J, N)),
            onAffixAction: g[6] || (g[6] = (J, N) => r("affix-action", J, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && B(e.node) ? (t(), n("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), n("div", {
          key: F,
          class: A(T.component === "column" ? C(T.span) : "")
        }, [
          I(_, {
            node: T,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[7] || (g[7] = (J, N) => r("change", J, N)),
            onAffixAction: g[8] || (g[8] = (J, N) => r("affix-action", J, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"])
        ], 2))), 128))
      ], 2)) : e.node.component === "column" && B(e.node) ? (t(), n("div", Gd, [
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: g[9] || (g[9] = (J, N) => r("change", J, N)),
          onAffixAction: g[10] || (g[10] = (J, N) => r("affix-action", J, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && B(e.node) ? (t(), n("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: g[11] || (g[11] = (J, N) => r("change", J, N)),
          onAffixAction: g[12] || (g[12] = (J, N) => r("affix-action", J, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && B(e.node) ? (t(), n("div", {
        key: 6,
        class: A(["flex", h.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: g[13] || (g[13] = (J, N) => r("change", J, N)),
          onAffixAction: g[14] || (g[14] = (J, N) => r("affix-action", J, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && B(e.node) ? (t(), n("fieldset", Wd, [
        o("legend", Zd, c(e.node.label), 1),
        e.node.description ? (t(), n("p", Jd, c(e.node.description), 1)) : x("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            onChange: g[15] || (g[15] = (J, N) => r("change", J, N)),
            onAffixAction: g[16] || (g[16] = (J, N) => r("affix-action", J, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && B(e.node) ? (t(), n("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", $.value])
      }, [
        e.node.title ? (t(), n("p", Yd, c(e.node.title), 1)) : x("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && B(e.node) ? (t(), n("div", {
        key: 9,
        class: A(
          p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", p.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => (t(), n("button", {
            key: F,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              d.value === F ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (J) => d.value = F
          }, [
            U(c(T.label) + " ", 1),
            M(T) ? (t(), n("span", Xd)) : x("", !0)
          ], 10, Qd))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => ge((t(), n("div", {
          key: F,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(T.children ?? [], (J, N) => (t(), D(_, {
            key: N,
            node: J,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[17] || (g[17] = (G, Z) => r("change", G, Z)),
            onAffixAction: g[18] || (g[18] = (G, Z) => r("affix-action", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ke, d.value === F]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && B(e.node) ? (t(), n("div", {
        key: 10,
        class: A(
          p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        I(Gr, {
          class: A(["p-4", p.value ? "border-b" : ""]),
          steps: v.value,
          "active-step": u.value,
          "has-error": (T) => M((e.node.children ?? [])[T]),
          "onUpdate:activeStep": g[19] || (g[19] = (T) => u.value = T)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, j(e.node.children ?? [], (T, F) => ge((t(), n("div", {
          key: F,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(T.children ?? [], (J, N) => (t(), D(_, {
            key: N,
            node: J,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: g[20] || (g[20] = (G, Z) => r("change", G, Z)),
            onAffixAction: g[21] || (g[21] = (G, Z) => r("affix-action", G, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ke, u.value === F]
        ])), 128)),
        o("div", eu, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: g[22] || (g[22] = (T) => u.value--)
          }, " Back ", 8, tu),
          u.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: g[23] || (g[23] = (T) => u.value++)
          }, " Next ")) : x("", !0)
        ])
      ], 2)) : x("", !0);
    };
  }
}), x8 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K({});
    pe(
      () => a.open,
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
      onClose: u[2] || (u[2] = (f) => r("close"))
    }, {
      footer: O(() => [
        I(ce, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (f) => r("close"))
        }, {
          default: O(() => [...u[3] || (u[3] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(ce, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            U(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), n(z, null, j(e.form?.nodes ?? [], (f, v) => (t(), D(Rn, {
            key: v,
            node: f,
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
}), nu = ["title"], au = ["aria-label"], lu = ["d"], ou = { class: "sr-only" }, su = /* @__PURE__ */ L({
  __name: "IconCell",
  props: {
    value: {},
    icons: { default: () => ({}) },
    colors: { default: () => ({}) },
    labels: { default: () => ({}) },
    defaultIcon: { default: "dot" }
  },
  setup(e) {
    const l = e, a = {
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => a[i.value] ?? a.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: A(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: d.value }, null, 8, lu)
      ], 10, au)),
      o("span", ou, c(f.value), 1)
    ], 8, nu));
  }
}), ru = ["aria-label"], iu = ["fill"], k8 = /* @__PURE__ */ L({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const l = e, a = y(() => Math.max(1, Math.min(10, Number(l.max ?? 5)))), r = y(() => {
      const s = Number(l.value);
      return Number.isFinite(s) ? Math.max(0, Math.min(a.value, s)) : 0;
    });
    return (s, i) => (t(), n("span", {
      class: "inline-flex items-center gap-0.5 text-amber-500",
      "aria-label": `${r.value} of ${a.value}`,
      "data-test": "rating-cell"
    }, [
      (t(!0), n(z, null, j(a.value, (d) => (t(), n("svg", {
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
        }, null, 8, iu)
      ]))), 128))
    ], 8, ru));
  }
}), du = ["src"], uu = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, cu = /* @__PURE__ */ L({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, a = K(!1);
    pe(
      () => l.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = y(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = y(() => {
      const d = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), n("span", {
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (f) => a.value = !0)
      }, null, 40, du)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        U(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", uu, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : x("", !0)
    ], 2));
  }
}), fu = {
  key: 0,
  class: "text-muted-foreground"
}, mu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, pu = {
  key: 0,
  class: "font-mono text-xs"
}, vu = {
  key: 1,
  class: "sr-only"
}, gu = /* @__PURE__ */ L({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = y(() => {
      const s = (l.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", fu, "-")) : (t(), n("span", mu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: ie({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", pu, c(r.value), 1)) : (t(), n("span", vu, c(r.value), 1))
    ]));
  }
}), hu = { class: "inline-flex items-center" }, bu = ["checked", "aria-label"], yu = { class: "sr-only" }, $8 = /* @__PURE__ */ L({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, a = y(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = y(
      () => a.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), n("span", hu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, bu),
      o("span", yu, c(r.value), 1)
    ]));
  }
}), xu = {
  key: 0,
  class: "text-muted-foreground"
}, ku = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, w8 = /* @__PURE__ */ L({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", ku, c(a.value), 1)) : (t(), n("span", xu, "—"));
  }
}), $u = {
  key: 0,
  class: "font-mono text-xs"
}, wu = {
  key: 1,
  class: "text-muted-foreground"
}, Cu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, C8 = /* @__PURE__ */ L({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", $u, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", wu, "—")) : (t(), n("span", Cu, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), Su = ["data-variant"], Mu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ L({
  __name: "PkBadge",
  props: {
    variant: { default: "default" },
    class: {}
  },
  setup(e) {
    const l = e, a = {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      destructive: "border-transparent bg-destructive text-white dark:bg-destructive/60",
      outline: "text-foreground",
      success: "border-transparent bg-success text-success-foreground",
      warning: "border-transparent bg-warning text-warning-foreground",
      info: "border-transparent bg-info text-info-foreground"
    }, r = y(
      () => [Mu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, Su));
  }
}), Bu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Au = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, S8 = /* @__PURE__ */ L({
  __name: "TagsCell",
  props: {
    value: {},
    limit: { default: null },
    separator: { default: "," }
  },
  setup(e) {
    const l = e;
    function a(d, u) {
      if (d == null || d === "")
        return [];
      if (Array.isArray(d))
        return d.map((f) => f == null ? "" : String(f).trim()).filter((f) => f !== "");
      if (typeof d == "string") {
        const f = d.trim();
        if (f.startsWith("["))
          try {
            const v = JSON.parse(f);
            if (Array.isArray(v))
              return a(v, u);
          } catch {
          }
        return f.split(u).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(d)];
    }
    const r = y(() => a(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), n("span", Bu, "None")) : (t(), n("span", Au, [
      (t(!0), n(z, null, j(s.value, (f) => (t(), D(We, {
        key: f,
        variant: "secondary"
      }, {
        default: O(() => [
          U(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), D(We, {
        key: 0,
        variant: "outline"
      }, {
        default: O(() => [
          U("+" + c(i.value), 1)
        ]),
        _: 1
      })) : x("", !0)
    ]));
  }
}), _u = ["aria-checked", "aria-label", "title", "disabled"], zu = ["value", "placeholder", "disabled"], Pu = ["value", "disabled"], Lu = ["value"], M8 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(() => a.value === !0 || a.value === 1 || a.value === "1"), i = y(() => a.busy || a.disabled), d = y(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function f($) {
      const b = $.target.value;
      b !== String(a.value ?? "") && r("change", b);
    }
    function v($) {
      const w = $.target.value;
      w !== String(a.value ?? "") && r("change", w);
    }
    function p($) {
      $.target.blur();
    }
    function h($) {
      const b = $.target;
      b.value = String(a.value ?? ""), b.blur();
    }
    return ($, b) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(u, ["stop"])
    }, [
      o("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, _u)) : e.type === "text" ? (t(), n("input", {
      key: 1,
      type: "text",
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      placeholder: e.placeholder ?? void 0,
      disabled: i.value,
      onClick: b[0] || (b[0] = he(() => {
      }, ["stop"])),
      onBlur: v,
      onKeydown: [
        Tt(p, ["enter"]),
        Tt(h, ["esc"])
      ]
    }, null, 40, zu)) : (t(), n("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: b[1] || (b[1] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, j(e.options, (w, C) => (t(), n("option", {
        key: C,
        value: C
      }, c(w), 9, Lu))), 128))
    ], 40, Pu));
  }
}), ln = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Ou(e) {
  return e != null && e !== "";
}
function ju(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function B8(e) {
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
      cellClass: ju(s),
      group: s.group
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return ln[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const Vu = ["disabled", "aria-label", "aria-busy"], Du = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tu = ["d"], Iu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Eu = ["disabled", "onClick"], Fu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Nu = ["d"], Ru = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, A8 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(() => a.busy || a.disabled), i = y(() => String(a.value ?? "")), d = y(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function f(h) {
      const $ = a.colors[u(h)] ?? a.defaultColor ?? "neutral";
      return ln[$] ?? "outline";
    }
    function v(h) {
      return a.options[h] ?? h;
    }
    function p(h, $) {
      if (s.value || h === i.value) {
        $();
        return;
      }
      r("change", h), $();
    }
    return (h, $) => (t(), n("div", {
      onClick: $[0] || ($[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(We, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          U(c(v(i.value) || "-"), 1)
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
            I(We, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                U(c(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Du, [
              o("path", {
                d: k(me)("chevron-down")
              }, null, 8, Tu)
            ]))
          ], 8, Vu)
        ]),
        panel: O(({ close: b }) => [
          o("div", Iu, c(d.value), 1),
          (t(!0), n(z, null, j(e.options, (w, C) => (t(), n("button", {
            key: C,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => p(String(C), b)
          }, [
            I(We, {
              variant: f(C),
              class: "capitalize"
            }, {
              default: O(() => [
                U(c(w), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(C) === i.value ? (t(), n("svg", Fu, [
              o("path", {
                d: k(me)("check")
              }, null, 8, Nu)
            ])) : (t(), n("span", Ru))
          ], 8, Eu))), 128))
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
function Uu(e) {
  return hn[e ?? "gray"] ?? hn.gray;
}
const Hu = { class: "flex items-center justify-end" }, Ku = ["aria-label"], qu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Gu = ["d"], Wu = ["href"], Zu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ju = ["d"], Yu = { class: "min-w-0 flex-1 truncate" }, Qu = ["disabled", "onClick"], Xu = ["d"], ec = { class: "min-w-0 flex-1 truncate" }, tc = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, nc = ["disabled", "onClick"], ac = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lc = ["d"], oc = { class: "min-w-0 flex-1 truncate" }, sc = /* @__PURE__ */ L({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = K(null), d = K(null), u = y(() => r.groups.flatMap((B) => B.actions)), f = y(() => u.value.filter((B) => !B.destructive)), v = y(() => u.value.filter((B) => B.destructive));
    function p(B) {
      return Uu(B.color);
    }
    const h = y(() => u.value.length === 0);
    function $(B) {
      s("run", B);
    }
    function b(B) {
      if (r.busy !== B.key) {
        if (B.link) {
          B.url && window.location.assign(B.url);
          return;
        }
        $(B);
      }
    }
    function w(B, S) {
      const m = S.toLowerCase().split("+").map((T) => T.trim()), g = m.at(-1);
      return !g || B.key.toLowerCase() !== g ? !1 : (B.ctrlKey || B.metaKey) === m.includes("mod") && B.shiftKey === m.includes("shift") && B.altKey === m.includes("alt");
    }
    function C(B) {
      h.value || (B.preventDefault(), i.value?.openAt(B.clientX, B.clientY));
    }
    function M(B) {
      const S = u.value.find(
        (F) => (F.keyBindings ?? []).some((J) => w(B, J))
      );
      if (S) {
        B.preventDefault(), b(S);
        return;
      }
      if (B.key !== "ArrowDown" && B.key !== "ArrowUp")
        return;
      const m = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (m.length === 0)
        return;
      B.preventDefault();
      const g = m.indexOf(document.activeElement), _ = B.key === "ArrowDown" ? 1 : -1, T = (g + _ + m.length) % m.length;
      m[T]?.focus();
    }
    return l({ openContextMenu: C }), (B, S) => (t(), n("div", Hu, [
      h.value ? x("", !0) : (t(), D(He, {
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
            (t(), n("svg", qu, [
              o("path", {
                d: k(me)("more-vertical")
              }, null, 8, Gu)
            ]))
          ], 8, Ku)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(z, null, j(f.value, (m) => (t(), n(z, {
              key: m.key
            }, [
              m.link ? (t(), n("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", p(m)])
              }, [
                (t(), n("svg", Zu, [
                  o("path", {
                    d: k(Te)(m)
                  }, null, 8, Ju)
                ])),
                o("span", Yu, c(m.label), 1)
              ], 10, Wu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", p(m)]),
                disabled: e.busy === m.key,
                onClick: (g) => $(m)
              }, [
                (t(), n("svg", {
                  class: A(["size-4 shrink-0", e.busy === m.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: k(Te)(m)
                  }, null, 8, Xu)
                ], 2)),
                o("span", ec, c(m.label), 1)
              ], 10, Qu))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", tc, [
              (t(!0), n(z, null, j(v.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (g) => $(m)
              }, [
                (t(), n("svg", ac, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, lc)
                ])),
                o("span", oc, c(m.label), 1)
              ], 8, nc))), 128))
            ])) : x("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), rc = { class: "flex items-center justify-end gap-1" }, ic = { class: "hidden items-center gap-1 sm:flex" }, dc = ["href"], uc = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cc = ["d"], fc = ["disabled", "onClick"], mc = ["d"], pc = {
  type: "button",
  class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors",
  "aria-haspopup": "menu"
}, vc = {
  key: 0,
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, gc = ["d"], hc = { class: "py-0.5" }, bc = ["href"], yc = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, xc = ["d"], kc = { class: "min-w-0 flex-1 truncate" }, $c = ["disabled", "onClick"], wc = ["d"], Cc = { class: "min-w-0 flex-1 truncate" }, _8 = /* @__PURE__ */ L({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = K(null), d = y(() => r.groups.filter((B) => !B.label)), u = y(() => r.groups.filter((B) => B.label)), f = y(() => d.value.flatMap((B) => B.actions)), v = y(() => f.value.filter((B) => !B.destructive)), p = y(() => f.value.filter((B) => B.destructive)), h = y(() => r.groups.every((B) => B.actions.length === 0)), $ = {
      primary: "text-primary",
      gray: "text-muted-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(B) {
      return $[B.color ?? "gray"] ?? $.gray;
    }
    function w(B) {
      s("run", B);
    }
    function C(B) {
      r.busy !== B.key && w(B);
    }
    function M(B) {
      h.value || i.value?.openContextMenu(B);
    }
    return l({ openContextMenu: M }), (B, S) => (t(), n("div", rc, [
      o("div", ic, [
        (t(!0), n(z, null, j([...v.value, ...p.value], (m) => (t(), n(z, {
          key: m.key
        }, [
          m.link ? (t(), n("a", {
            key: 0,
            href: m.url ?? "#",
            class: A(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", b(m)])
          }, [
            (t(), n("svg", uc, [
              o("path", {
                d: k(Te)(m)
              }, null, 8, cc)
            ])),
            o("span", null, c(m.label), 1)
          ], 10, dc)) : (t(), n("button", {
            key: 1,
            type: "button",
            class: A(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", b(m)]),
            disabled: e.busy === m.key,
            onClick: (g) => C(m)
          }, [
            (t(), n("svg", {
              class: A(["size-3.5 shrink-0", e.busy === m.key && "animate-pulse"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-hidden": "true"
            }, [
              o("path", {
                d: k(Te)(m)
              }, null, 8, mc)
            ], 2)),
            o("span", null, c(m.label), 1)
          ], 10, fc))
        ], 64))), 128)),
        (t(!0), n(z, null, j(u.value, (m) => (t(), D(He, {
          key: m.label,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", pc, [
              m.icon ? (t(), n("svg", vc, [
                o("path", {
                  d: k(me)(m.icon)
                }, null, 8, gc)
              ])) : x("", !0),
              o("span", null, c(m.label), 1)
            ])
          ]),
          panel: O(() => [
            o("div", hc, [
              (t(!0), n(z, null, j([
                ...m.actions.filter((g) => !g.destructive),
                ...m.actions.filter((g) => g.destructive)
              ], (g) => (t(), n(z, {
                key: g.key
              }, [
                g.link ? (t(), n("a", {
                  key: 0,
                  href: g.url ?? "#",
                  role: "menuitem",
                  class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g.destructive ? "text-destructive" : b(g)])
                }, [
                  (t(), n("svg", yc, [
                    o("path", {
                      d: k(Te)(g)
                    }, null, 8, xc)
                  ])),
                  o("span", kc, c(g.label), 1)
                ], 10, bc)) : (t(), n("button", {
                  key: 1,
                  type: "button",
                  role: "menuitem",
                  class: A([
                    "hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    g.destructive ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10" : b(g)
                  ]),
                  disabled: e.busy === g.key,
                  onClick: (_) => w(g)
                }, [
                  (t(), n("svg", {
                    class: A(["size-4 shrink-0", e.busy === g.key && "animate-pulse"]),
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "aria-hidden": "true"
                  }, [
                    o("path", {
                      d: k(Te)({
                        ...g,
                        destructive: g.destructive
                      })
                    }, null, 8, wc)
                  ], 2)),
                  o("span", Cc, c(g.label), 1)
                ], 10, $c))
              ], 64))), 128))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      I(sc, {
        ref_key: "fallback",
        ref: i,
        class: "sm:hidden",
        groups: e.groups,
        title: e.title,
        busy: e.busy,
        onRun: S[0] || (S[0] = (m) => s("run", m))
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
}, $t = 12, wt = 20, Sc = [0, 0.25, 0.5, 0.75, 1], on = "alxtexhpanel.appearance", Ae = {
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
}, Ve = K({ ...Ae });
let Qe = !1;
const Un = "alxtexhpanel.appearance.vars", Ut = "pk-appearance";
function at() {
  return typeof window > "u" ? null : window;
}
let Ct = null;
function Hn(e) {
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
function Kn(e) {
  const l = at();
  l && (l.__panelAppearance = { ...e });
}
function Mc(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Ut);
  l || (l = document.createElement("style"), l.id = Ut, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function z8() {
  Qe = !1, Ct = null, Ve.value = { ...Ae };
  const e = at();
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
function qn(e) {
  const l = Nt[e.primary] ?? Nt.slate, a = Rt[e.surface] ?? Rt.neutral, r = a.chroma, s = a.hue, d = sn(e) ? {
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
function Bc(e) {
  return {
    dark: sn(e),
    theme: e.theme,
    vars: qn(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function rn() {
  if (typeof window > "u")
    return { ...Ae };
  try {
    const e = localStorage.getItem(on);
    if (!e)
      return { ...Ae };
    const l = { ...Ae, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Ae.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Ae.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < $t || l.fontSize > wt) && (l.fontSize = Ae.fontSize), l;
  } catch {
    return { ...Ae };
  }
}
function Ac() {
  const e = at();
  if (!e)
    return null;
  const l = e.__panelAppearance;
  if (l && typeof l == "object")
    return l;
  try {
    const a = document.getElementById("app")?.dataset.page;
    if (!a)
      return null;
    const r = JSON.parse(a)?.props?.appearance;
    return r && typeof r == "object" ? r : null;
  } catch {
    return null;
  }
}
function Gn(e) {
  const l = rn(), a = e ? { ...Ae, ...l, ...e } : { ...Ae, ...l }, r = !Qe, s = Hn(a);
  if (Ve.value = a, Qe = !0, e) {
    Kn(a);
    try {
      localStorage.setItem(on, JSON.stringify(a));
    } catch {
    }
  }
  const d = at()?.__panelAppearanceApplied === !0;
  if (Ct !== s) {
    if (r && d && e) {
      Ct = s;
      try {
        const u = Bc(a);
        localStorage.setItem(Un, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Ht(a);
  }
}
function P8() {
  Gn(Ac());
}
function L8(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Gn(l);
}
let Wn = null;
function O8(e) {
  Wn = e;
}
let Zn = {};
function _c(e) {
  if (Zn = e, !(typeof document > "u") && !rn().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Ht(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = qn(e), r = { ...a, ...e.primaryChosen ? {} : Zn }, s = {
    dark: sn(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, Mc(a), Kn(e), Ct = Hn(e);
  const i = at();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Un, JSON.stringify(s));
  } catch {
  }
}
function Jn() {
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
    e(Ve.value), Wn?.({ ...r, ...s });
  }
  function a() {
    l({ ...Ae });
  }
  return be(() => {
    if (Qe || at()?.__panelAppearanceApplied) {
      Qe = !0;
      return;
    }
    Qe = !0, Ve.value = rn(), Ht(Ve.value);
  }), {
    appearance: y(() => Ve.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: Nt,
    SURFACE_TINTS: Rt,
    FONT_SIZE_MIN: $t,
    FONT_SIZE_MAX: wt,
    RADIUS_OPTIONS: Sc
  };
}
const zc = ["aria-busy", "aria-label"], Pc = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, Lc = { class: "min-w-0" }, Oc = { class: "text-base font-semibold" }, jc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Vc = { class: "flex shrink-0 items-center gap-2" }, Dc = ["disabled"], Tc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, Ic = {
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
    const a = e, r = l, s = K(null);
    let i = null, d = "";
    const u = K(!1), f = y(() => a.width ?? vo[a.size]), v = y(
      () => [En, a.padded ? po : ""].filter(Boolean).join(" ")
    );
    function p(b) {
      u.value = b.target === b.currentTarget;
    }
    function h(b) {
      u.value && b.target === b.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function $(b) {
      if (!a.open)
        return;
      if (b.key === "Escape") {
        if (a.busy)
          return;
        b.stopPropagation(), r("close");
        return;
      }
      if (b.key !== "Tab" || !s.value)
        return;
      const w = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (w.length === 0)
        return;
      const C = w[0], M = w[w.length - 1];
      b.shiftKey && document.activeElement === C ? (b.preventDefault(), M.focus()) : !b.shiftKey && document.activeElement === M && (b.preventDefault(), C.focus());
    }
    return pe(
      () => a.open,
      async (b) => {
        if (b) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", $), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", $), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", $), document.body.style.overflow = d;
    }), (b, w) => (t(), D(ct, { to: "body" }, [
      I(Xe, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]",
            onPointerdown: p,
            onPointerup: h
          }, null, 32)) : x("", !0)
        ]),
        _: 1
      }),
      I(Xe, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: O(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: A(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", Pc, [
              o("div", Lc, [
                o("h2", Oc, c(e.title), 1),
                e.description ? (t(), n("p", jc, c(e.description), 1)) : x("", !0)
              ]),
              o("div", Vc, [
                q(b.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: w[0] || (w[0] = (C) => r("close"))
                }, [...w[1] || (w[1] = [
                  o("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    o("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])], 8, Dc)
              ])
            ]),
            o("div", Tc, [
              o("div", {
                class: A(v.value)
              }, [
                q(b.$slots, "default")
              ], 2)
            ]),
            b.$slots.footer ? (t(), n("footer", Ic, [
              q(b.$slots, "footer")
            ])) : x("", !0)
          ], 10, zc)) : x("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Ec = { class: "flex flex-col gap-5 px-4 py-4" }, Fc = { class: "flex flex-col gap-2" }, Nc = { class: "grid grid-cols-8 gap-2" }, Rc = ["title", "aria-label", "aria-pressed", "onClick"], Uc = { class: "flex flex-col gap-2" }, Hc = { class: "grid grid-cols-8 gap-2" }, Kc = ["title", "aria-label", "aria-pressed", "onClick"], qc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Gc = { class: "flex flex-col gap-2" }, Wc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zc = ["aria-pressed", "aria-label", "onClick"], Jc = { class: "text-sm font-semibold" }, Yc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Qc = ["onClick"], Xc = { class: "flex flex-col gap-2" }, ef = { class: "flex items-center justify-between" }, tf = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, nf = { class: "flex items-center gap-2" }, af = ["disabled"], lf = ["min", "max", "value"], of = ["disabled"], j8 = /* @__PURE__ */ L({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Jn(), u = K(!1), f = y(() => l.value.sidebarSide === "right"), v = y(() => f.value ? "left" : "right"), p = [
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
    ], w = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], C = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function M(B, S) {
      return `oklch(0.72 ${S * 3} ${B})`;
    }
    return (B, S) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: S[0] || (S[0] = (m) => u.value = !0)
      }, [...S[6] || (S[6] = [
        rt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      I(At, {
        open: u.value,
        title: "Settings",
        side: v.value,
        width: "w-80",
        padded: !1,
        onClose: S[5] || (S[5] = (m) => u.value = !1)
      }, {
        "header-actions": O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: S[1] || (S[1] = //@ts-ignore
            (...m) => k(r) && k(r)(...m))
          }, " Reset ")
        ]),
        default: O(() => [
          o("div", Ec, [
            o("section", Fc, [
              S[8] || (S[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", Nc, [
                (t(!0), n(z, null, j(k(s), (m, g) => (t(), n("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: ie({ background: m.value }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).primary === g,
                  onClick: (_) => k(a)({ primary: g })
                }, [
                  k(l).primary === g ? (t(), n("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: ie({ color: m.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...S[7] || (S[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : x("", !0)
                ], 12, Rc))), 128))
              ])
            ]),
            o("section", Uc, [
              S[10] || (S[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", Hc, [
                (t(!0), n(z, null, j(k(i), (m, g) => (t(), n("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: ie({ background: M(m.hue, m.chroma) }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).surface === g,
                  onClick: (_) => k(a)({ surface: g })
                }, [
                  k(l).surface === g ? (t(), n("svg", qc, [...S[9] || (S[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : x("", !0)
                ], 12, Kc))), 128))
              ])
            ]),
            o("section", Gc, [
              S[11] || (S[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Wc, [
                (t(!0), n(z, null, j(k(d), (m) => (t(), n("button", {
                  key: m,
                  type: "button",
                  class: A([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === m,
                  "aria-label": `${m}rem radius`,
                  onClick: (g) => k(a)({ radius: m })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: ie({ borderRadius: `${Math.min(m, 0.5)}rem` })
                  }, null, 4),
                  U(" " + c(m), 1)
                ], 10, Zc))), 128))
              ])
            ]),
            (t(!0), n(z, null, j([
              { label: "Color scheme", key: "theme", options: p },
              { label: "Card style", key: "cardStyle", options: $ },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: b },
              { label: "Content layout", key: "contentLayout", options: w },
              { label: "Menu style", key: "menuStyle", options: C }
            ], (m) => (t(), n("section", {
              key: m.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Jc, c(m.label), 1),
              o("div", Yc, [
                (t(!0), n(z, null, j(m.options, (g) => (t(), n("button", {
                  key: String(g.value),
                  type: "button",
                  class: A([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[m.key] === g.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (_) => k(a)({ [m.key]: g.value })
                }, c(g.label), 11, Qc))), 128))
              ])
            ]))), 128)),
            o("section", Xc, [
              o("div", ef, [
                S[12] || (S[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", tf, c(k(l).fontSize) + "px", 1)
              ]),
              o("div", nf, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize <= k($t),
                  "aria-label": "Decrease font size",
                  onClick: S[2] || (S[2] = (m) => k(a)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, af),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k($t),
                  max: k(wt),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: S[3] || (S[3] = (m) => k(a)({
                    fontSize: Number(m.target.value)
                  }))
                }, null, 40, lf),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k(wt),
                  "aria-label": "Increase font size",
                  onClick: S[4] || (S[4] = (m) => k(a)({ fontSize: k(l).fontSize + 1 }))
                }, " + ", 8, of)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["open", "side"])
    ], 64));
  }
}), sf = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, rf = { class: "flex items-stretch" }, df = ["href", "aria-current"], uf = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, cf = ["d"], ff = { class: "w-full truncate text-center" }, mf = {
  key: 0,
  class: "flex-1"
}, pf = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, vf = ["d"], gf = { class: "w-full truncate text-center" }, Ot = 5, V8 = /* @__PURE__ */ L({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= Ot ? a.items : a.items.slice(0, Ot - 1)
    ), i = y(() => a.items.length > Ot);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), n("nav", sf, [
      o("ul", rf, [
        (t(!0), n(z, null, j(s.value, (v) => (t(), n("li", {
          key: v.key,
          class: "flex-1"
        }, [
          o("a", {
            href: v.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(v.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(v.href) ? "page" : void 0
          }, [
            (t(), n("svg", uf, [
              o("path", {
                d: k(me)(v.icon)
              }, null, 8, cf)
            ])),
            o("span", ff, c(v.title), 1)
          ], 10, df)
        ]))), 128)),
        i.value ? (t(), n("li", mf, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (v) => r("more"))
          }, [
            (t(), n("svg", pf, [
              o("path", {
                d: k(me)("more-horizontal")
              }, null, 8, vf)
            ])),
            o("span", gf, c(e.moreLabel), 1)
          ])
        ])) : x("", !0)
      ])
    ]));
  }
}), hf = { class: "lg:shrink-0 lg:self-start" }, bf = { class: "lg:hidden" }, yf = ["aria-expanded", "aria-label"], xf = { class: "flex min-w-0 items-center gap-2" }, kf = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, $f = ["d"], wf = { class: "truncate" }, Cf = ["aria-label"], Sf = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Mf = ["d"], Bf = { class: "flex-1" }, Af = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, _f = ["d"], zf = { class: "sticky top-6 hidden w-60 shrink-0 self-start lg:block" }, Pf = ["aria-label"], Lf = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Of = ["d"], D8 = /* @__PURE__ */ L({
  __name: "PkSubNav",
  props: {
    items: {},
    ariaLabel: { default: "Section" },
    fallbackIcon: { default: "sliders" }
  },
  setup(e) {
    const l = e, a = Xt();
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
      const f = r(a.url.split("?")[0]), v = r(u);
      return f === v || f.startsWith(`${v}/`);
    }
    const i = y(
      () => l.items.find((u) => s(u.href)) ?? l.items[0]
    );
    function d(u) {
      return u?.icon ?? l.fallbackIcon;
    }
    return (u, f) => (t(), n("div", hf, [
      o("div", bf, [
        I(He, { align: "start" }, {
          trigger: O(({ open: v }) => [
            o("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm shadow-xs",
              "aria-expanded": v,
              "aria-haspopup": "listbox",
              "aria-label": e.ariaLabel
            }, [
              o("span", xf, [
                (t(), n("svg", kf, [
                  o("path", {
                    d: k(me)(d(i.value))
                  }, null, 8, $f)
                ])),
                o("span", wf, c(i.value?.title), 1)
              ]),
              f[0] || (f[0] = o("svg", {
                class: "text-muted-foreground size-4 shrink-0 opacity-70",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "aria-hidden": "true"
              }, [
                o("path", { d: "m7 15 5 5 5-5M7 9l5-5 5 5" })
              ], -1))
            ], 8, yf)
          ]),
          panel: O(() => [
            o("div", {
              class: "flex flex-col",
              role: "listbox",
              "aria-label": e.ariaLabel
            }, [
              (t(!0), n(z, null, j(e.items, (v) => (t(), D(k(Et), {
                key: v.href,
                href: v.href,
                role: "option",
                "aria-selected": s(v.href),
                class: A([
                  "flex items-center gap-2 rounded-sm px-2 py-2 text-sm",
                  s(v.href) ? "bg-muted font-medium" : "hover:bg-muted/70"
                ])
              }, {
                default: O(() => [
                  (t(), n("svg", Sf, [
                    o("path", {
                      d: k(me)(d(v))
                    }, null, 8, Mf)
                  ])),
                  o("span", Bf, c(v.title), 1),
                  s(v.href) ? (t(), n("svg", Af, [
                    o("path", {
                      d: k(me)("check")
                    }, null, 8, _f)
                  ])) : x("", !0)
                ]),
                _: 2
              }, 1032, ["href", "aria-selected", "class"]))), 128))
            ], 8, Cf)
          ]),
          _: 1
        })
      ]),
      o("aside", zf, [
        o("nav", {
          class: "flex flex-col space-y-1",
          "aria-label": e.ariaLabel
        }, [
          (t(!0), n(z, null, j(e.items, (v) => (t(), D(k(Et), {
            key: v.href,
            href: v.href,
            class: A([
              k(Ye)({ variant: "ghost" }),
              "w-full justify-start",
              s(v.href) ? "bg-primary/10 text-foreground font-medium ring-1 ring-primary/15" : ""
            ])
          }, {
            default: O(() => [
              (t(), n("svg", Lf, [
                o("path", {
                  d: k(me)(d(v))
                }, null, 8, Of)
              ])),
              U(" " + c(v.title), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"]))), 128))
        ], 8, Pf)
      ])
    ]));
  }
}), jf = ["value"], we = /* @__PURE__ */ L({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = `file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ${Ue}`;
    return (i, d) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: A([s, a.class]),
      onInput: d[0] || (d[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, jf));
  }
}), Vf = ["for"], ze = /* @__PURE__ */ L({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: A([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      q(l.$slots, "default")
    ], 10, Vf));
  }
}), T8 = /* @__PURE__ */ L({
  __name: "PkSpinner",
  props: {
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("svg", {
      role: "status",
      "aria-label": "Loading",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      class: A(["size-4 animate-spin", l.$props.class])
    }, [...a[0] || (a[0] = [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        class: "opacity-25"
      }, null, -1),
      o("path", { d: "M21 12a9 9 0 0 0-9-9" }, null, -1)
    ])], 2));
  }
}), Df = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Tf = ["id", "name", "value", "disabled", "maxlength"], If = ["data-active"], Ef = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Ff = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(!1), i = K(null), d = K("");
    be(() => {
      a.autofocus && i.value?.focus();
    });
    const u = y(
      () => Array.from({ length: a.length }, (B, S) => a.modelValue[S] ?? "")
    ), f = y(() => Math.min(a.modelValue.length, a.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function p(B) {
      a.disabled || B.length !== a.length || d.value !== B && (d.value = B, r("complete", B));
    }
    function h(B) {
      const S = v(B);
      S !== a.modelValue && r("update:modelValue", S), p(S);
    }
    function $(B) {
      h(B.target.value);
    }
    function b(B) {
      h(B.target.value);
    }
    function w() {
      h(i.value?.value ?? "");
    }
    function C(B) {
      B.animationName === "pkOtpAutofillStart" && w();
    }
    pe(
      () => a.modelValue,
      (B) => {
        B.length < a.length ? d.value = "" : p(B);
      }
    );
    let M;
    return be(() => {
      M = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && w();
      }, 250);
    }), fa(() => {
      M !== void 0 && window.clearInterval(M);
    }), (B, S) => (t(), n("div", Df, [
      o("input", {
        ref_key: "field",
        ref: i,
        id: a.id,
        name: a.name,
        value: a.modelValue,
        disabled: a.disabled,
        inputmode: "numeric",
        autocomplete: "one-time-code",
        maxlength: a.length,
        class: "pk-otp-input absolute inset-0 z-10 w-full cursor-default bg-transparent text-transparent caret-transparent outline-none disabled:cursor-not-allowed",
        onInput: $,
        onChange: b,
        onAnimationstart: C,
        onFocus: S[0] || (S[0] = (m) => s.value = !0),
        onBlur: S[1] || (S[1] = (m) => s.value = !1)
      }, null, 40, Tf),
      (t(!0), n(z, null, j(u.value, (m, g) => (t(), n("div", {
        key: g,
        "data-slot": "input-otp-slot",
        "data-active": s.value && g === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        U(c(m) + " ", 1),
        s.value && g === f.value && m === "" ? (t(), n("div", Ef, [...S[2] || (S[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : x("", !0)
      ], 8, If))), 128))
    ]));
  }
}), I8 = /* @__PURE__ */ Bt(Ff, [["__scopeId", "data-v-0fdf60b6"]]), Nf = {
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
    return (l, a) => (t(), n("header", {
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), n("p", Nf, c(e.description), 1)) : x("", !0)
    ], 2));
  }
}), Rf = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Uf = { class: "min-w-0 space-y-1" }, Hf = { class: "flex flex-wrap items-center gap-2.5" }, Kf = { class: "text-2xl font-semibold tracking-tight" }, qf = {
  key: 0,
  class: "flex items-center gap-2"
}, Gf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Wf = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, E8 = /* @__PURE__ */ L({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", Rf, [
      o("div", Uf, [
        o("div", Hf, [
          o("h1", Kf, c(e.title), 1),
          l.$slots.status ? (t(), n("div", qf, [
            q(l.$slots, "status")
          ])) : x("", !0)
        ]),
        e.purpose ? (t(), n("p", Gf, c(e.purpose), 1)) : x("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Wf, [
        q(l.$slots, "actions")
      ])) : x("", !0)
    ]));
  }
}), Zf = /* @__PURE__ */ L({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(k(oe)(k(Qf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Jf = /* @__PURE__ */ L({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(
        k(oe)(
          "col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Yf = /* @__PURE__ */ L({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(k(oe)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Qf = en(
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
), Xf = { class: "list-inside list-disc text-sm" }, F8 = /* @__PURE__ */ L({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(Zf), { variant: "destructive" }, {
      default: O(() => [
        I(k(nl), { class: "size-4" }),
        I(k(Yf), null, {
          default: O(() => [
            U(c(e.title), 1)
          ]),
          _: 1
        }),
        I(k(Jf), null, {
          default: O(() => [
            o("ul", Xf, [
              (t(!0), n(z, null, j(a.value, (i, d) => (t(), n("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Yn = /* @__PURE__ */ L({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = In(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => ge((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ma(s) ? s.value = u : null),
      "data-slot": "input",
      class: A(
        k(oe)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          k(Ue),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [_e, k(s)]
    ]);
  }
}), em = { class: "relative" }, tm = ["aria-label"], N8 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = K(!1), s = pa("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", em, [
      I(k(Yn), de({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(oe)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: A(
          k(oe)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), D(k(al), {
          key: 0,
          class: "size-4"
        })) : (t(), D(k(ll), {
          key: 1,
          class: "size-4"
        }))
      ], 10, tm)
    ]));
  }
}), Qn = "@container min-w-0", nm = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", R8 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", am = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function lm(e) {
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
function U8(e, l) {
  const a = Math.max(1, Math.floor(l));
  if (e.length === 0)
    return [];
  if (a === 1)
    return [{ type: "columns", columns: [[...e]] }];
  const r = [];
  let s = [];
  const i = () => {
    if (s.length === 0)
      return;
    const d = Array.from({ length: a }, () => []);
    s.forEach((u, f) => {
      d[f % a].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    lm(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function xn(e, l) {
  return `${e}:${l}`;
}
function H8(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Kt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function K8(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const v of f.items)
      i.set(xn(f.kind, v.key), {
        kind: f.kind,
        source: v
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const f of r?.widgets ?? []) {
    const v = f.id.toLowerCase(), p = i.get(v);
    p && (u.add(v), d.push({
      id: v,
      kind: p.kind,
      key: p.source.key,
      span: Kt(f.span),
      hidden: !!f.hidden,
      source: p.source
    }));
  }
  for (const f of s)
    for (const v of f.items) {
      const p = xn(f.kind, v.key);
      u.has(p) || d.push({
        id: p,
        kind: f.kind,
        key: v.key,
        span: Kt(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function q8(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Kt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Xn = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", om = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", sm = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function rm(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function im(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function dm(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await um(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(a, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let f = 3; f < u.length; f += 4)
      if ((u[f] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function um(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function cm(e) {
  if (rm(e))
    throw new Error(sm);
  if (!im(e))
    throw new Error(Xn);
  if (!await dm(e))
    throw new Error(om);
}
const G8 = /* @__PURE__ */ L({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), de({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ L({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Pn), de({
      "data-slot": "sheet-description",
      class: k(oe)("text-sm text-muted-foreground font-normal", l.class)
    }, k(a)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W8 = /* @__PURE__ */ L({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(k(oe)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), mm = /* @__PURE__ */ L({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(k(oe)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), pm = /* @__PURE__ */ L({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Ln), de({
      "data-slot": "sheet-title",
      class: k(oe)("text-foreground font-semibold", l.class)
    }, k(a)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Z8 = /* @__PURE__ */ L({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(On), de({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kn = "sidebar_state", vm = 3600 * 24 * 7, gm = "16rem", hm = "18rem", bm = "3rem", ym = "b", [_t, xm] = wa("Sidebar"), km = { class: "flex h-full w-full flex-col" }, $m = ["data-state", "data-collapsible", "data-variant", "data-side"], wm = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, J8 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = _t();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", de({
      key: 0,
      "data-slot": "sidebar",
      class: k(oe)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : k(a) ? (t(), D(k(nn), de({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: O(() => [
        I(k(an), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ie({
            "--sidebar-width": k(hm)
          })
        }, {
          default: O(() => [
            I(mm, { class: "sr-only" }, {
              default: O(() => [
                I(pm, null, {
                  default: O(() => [...u[0] || (u[0] = [
                    U("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(fm, null, {
                  default: O(() => [...u[1] || (u[1] = [
                    U("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", km, [
              q(d.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (t(), n("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": k(r),
      "data-collapsible": k(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: A(
          k(oe)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", de({
        class: k(oe)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", wm, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, $m));
  }
}), Y8 = /* @__PURE__ */ L({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: A(
        k(oe)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Q8 = /* @__PURE__ */ L({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(k(oe)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), X8 = /* @__PURE__ */ L({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(k(oe)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ L({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(tt), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        k(oe)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), tC = /* @__PURE__ */ L({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(k(oe)("w-full text-sm", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), nC = /* @__PURE__ */ L({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(tt), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        k(oe)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), aC = /* @__PURE__ */ L({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(k(oe)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ L({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Yn), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(k(oe)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oC = /* @__PURE__ */ L({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        k(oe)(
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
      q(a.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ L({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(k(oe)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), rC = /* @__PURE__ */ L({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(tt), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        k(oe)(
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
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), iC = /* @__PURE__ */ L({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: A(
        k(oe)(
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
      q(a.$slots, "default")
    ], 2));
  }
}), Cm = /* @__PURE__ */ L({
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
    const s = ye(e, l);
    return (i, d) => (t(), D(k(Ca), de({ "data-slot": "tooltip" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), Sm = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Sa), null, {
      default: O(() => [
        I(k(Ma), de({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(oe)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: O(() => [
            q(d.$slots, "default"),
            I(k(Ba), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dC = /* @__PURE__ */ L({
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
    return (a, r) => (t(), D(k(jn), Le(Ne(l)), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ L({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Aa), de({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        q(a.$slots, "default")
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
    return (a, r) => (t(), D(k(tt), de({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: k(oe)(k(Am)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), uC = /* @__PURE__ */ L({
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
    const l = e, { isMobile: a, state: r } = _t(), s = ve(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(k(Cm), { key: 1 }, {
      default: O(() => [
        I(k(Mm), { "as-child": "" }, {
          default: O(() => [
            I($n, Le(Ne({ ...k(s), ...i.$attrs })), {
              default: O(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(k(Sm), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(a)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              U(c(e.tooltip), 1)
            ], 64)) : (t(), D(Ce(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D($n, Le(de({ key: 0 }, { ...k(s), ...i.$attrs })), {
      default: O(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cC = /* @__PURE__ */ L({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(k(oe)("group/menu-item relative", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), wn = "animate-pulse rounded-md bg-primary/10", fC = /* @__PURE__ */ L({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = y(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: A(k(oe)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(k(oe)(wn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : x("", !0),
      o("div", {
        class: A(k(oe)(wn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ie({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), mC = /* @__PURE__ */ L({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: A(
        k(oe)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ L({
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
    return (a, r) => (t(), D(k(tt), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        k(oe)(
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
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), vC = /* @__PURE__ */ L({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(k(oe)("group/menu-sub-item relative", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), gC = /* @__PURE__ */ L({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ml?.cookie.includes(`${kn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = cl("(max-width: 767px)"), i = K(!1), d = In(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${kn}=${d.value}; path=/; max-age=${vm}`;
    }
    function f(h) {
      i.value = h;
    }
    function v() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    fl("keydown", (h) => {
      h.key === ym && (h.metaKey || h.ctrlKey) && (h.preventDefault(), v());
    });
    const p = y(() => s.value || d.value ? "expanded" : "collapsed");
    return xm({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: v
    }), (h, $) => (t(), D(k(jn), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", de({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(gm),
            "--sidebar-width-icon": k(bm)
          },
          class: k(oe)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, h.$attrs), [
          q(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), hC = /* @__PURE__ */ L({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = _t();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: A(
        k(oe)(
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
      (...i) => k(a) && k(a)(...i))
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), Bm = /* @__PURE__ */ L({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(_a), de({ "data-slot": "separator" }, k(a), {
      class: k(oe)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), bC = /* @__PURE__ */ L({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Bm), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(k(oe)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), yC = /* @__PURE__ */ L({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = _t();
    return (i, d) => (t(), D(ce, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(k(oe)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: O(() => [
        k(a) || k(r) === "collapsed" ? (t(), D(k(ol), { key: 0 })) : (t(), D(k(sl), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Am = en(
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
), xC = /* @__PURE__ */ L({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(za), de({ "data-slot": "dropdown-menu" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), _m = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, kC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Pa), de({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        o("span", _m, [
          I(k(Vn), null, {
            default: O(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(k(Dn), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $C = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(La), null, {
      default: O(() => [
        I(k(Oa), de({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(oe)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: O(() => [
            q(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), wC = /* @__PURE__ */ L({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(ja), de({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), CC = /* @__PURE__ */ L({
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
    const l = e, a = ve(l, "inset", "variant", "class"), r = Oe(a);
    return (s, i) => (t(), D(k(Va), de({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, k(r), {
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), SC = /* @__PURE__ */ L({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = ve(l, "class", "inset"), r = Oe(a);
    return (s, i) => (t(), D(k(Da), de({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, k(r), {
      class: k(oe)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), MC = /* @__PURE__ */ L({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(Ta), de({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: O(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zm = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, BC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Ia), de({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        o("span", zm, [
          I(k(Vn), null, {
            default: O(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                I(k(rl), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AC = /* @__PURE__ */ L({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Ea), de({ "data-slot": "dropdown-menu-separator" }, k(a), {
      class: k(oe)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), _C = /* @__PURE__ */ L({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(k(oe)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), zC = /* @__PURE__ */ L({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(Fa), de({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), PC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Na), de({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(oe)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LC = /* @__PURE__ */ L({
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
    const l = e, a = ve(l, "class", "inset"), r = Oe(a);
    return (s, i) => (t(), D(k(Ra), de({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        q(s.$slots, "default"),
        I(k(Tn), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), OC = /* @__PURE__ */ L({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Oe(e);
    return (r, s) => (t(), D(k(Ua), de({ "data-slot": "dropdown-menu-trigger" }, k(a)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jC = /* @__PURE__ */ L({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Ha), {
      "data-slot": "avatar",
      class: A(k(oe)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), VC = /* @__PURE__ */ L({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Ka), de({ "data-slot": "avatar-fallback" }, k(a), {
      class: k(oe)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), DC = /* @__PURE__ */ L({
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
    return (a, r) => (t(), D(k(qa), de({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), TC = /* @__PURE__ */ L({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: A(l.class)
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), IC = /* @__PURE__ */ L({
  __name: "BreadcrumbEllipsis",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      class: A(k(oe)("flex size-9 items-center justify-center", l.class))
    }, [
      q(a.$slots, "default", {}, () => [
        I(k(il), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), EC = /* @__PURE__ */ L({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(k(oe)("inline-flex items-center gap-1.5", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ L({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(tt), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(k(oe)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), NC = /* @__PURE__ */ L({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        k(oe)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), RC = /* @__PURE__ */ L({
  __name: "BreadcrumbPage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: A(k(oe)("text-foreground font-normal", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), UC = /* @__PURE__ */ L({
  __name: "BreadcrumbSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      class: A(k(oe)("[&>svg]:size-3.5", l.class))
    }, [
      q(a.$slots, "default", {}, () => [
        I(k(Tn))
      ])
    ], 2));
  }
}), Pm = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Lm = /* @__PURE__ */ L({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), n("div", Pm, [
      I(k(Ga), de({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(oe)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), HC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class", "viewport"), i = ye(s, r);
    return (d, u) => (t(), D(k(Wa), de({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(oe)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: O((f) => [
        q(d.$slots, "default", Le(Ne(f))),
        e.viewport ? (t(), D(Lm, { key: 0 })) : x("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), KC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Za), de({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(oe)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qC = /* @__PURE__ */ L({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), D(k(Ja), de({ "data-slot": "navigation-menu-indicator" }, k(r), {
      class: k(oe)(
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
}), GC = /* @__PURE__ */ L({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Ya), de({ "data-slot": "navigation-menu-item" }, k(a), {
      class: k(oe)("relative", l.class)
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WC = /* @__PURE__ */ L({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Qa), de({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(oe)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZC = /* @__PURE__ */ L({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), D(k(Xa), de({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(oe)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), JC = /* @__PURE__ */ L({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), D(k(el), de({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(oe)(k(Om)(), "group", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default"),
        I(k(dl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Om = en(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), YC = /* @__PURE__ */ L({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(zn), de({ "data-slot": "dialog" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), QC = /* @__PURE__ */ L({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), de({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ L({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(Zt), de({ "data-slot": "dialog-overlay" }, k(a), {
      class: k(oe)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XC = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        I(jm),
        I(k(Yt), de({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(oe)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: O(() => [
            q(d.$slots, "default"),
            e.showCloseButton ? (t(), D(k(et), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                I(k(Qt)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : x("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), e6 = /* @__PURE__ */ L({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), D(k(Pn), de({ "data-slot": "dialog-description" }, k(r), {
      class: k(oe)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t6 = /* @__PURE__ */ L({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(k(oe)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      q(a.$slots, "default"),
      e.showCloseButton ? (t(), D(k(et), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          I(ce, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              U(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : x("", !0)
    ], 2));
  }
}), n6 = /* @__PURE__ */ L({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(k(oe)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), a6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = ve(a, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        I(k(Zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            I(k(Yt), de({
              class: k(oe)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const v = f.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: O(() => [
                q(d.$slots, "default"),
                I(k(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    I(k(Qt), { class: "w-4 h-4" }),
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
}), l6 = /* @__PURE__ */ L({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class"), r = Oe(a);
    return (s, i) => (t(), D(k(Ln), de({ "data-slot": "dialog-title" }, k(r), {
      class: k(oe)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o6 = /* @__PURE__ */ L({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(On), de({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), s6 = /* @__PURE__ */ L({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = ve(l, "class");
    return (r, s) => (t(), D(k(tl), de({ "data-slot": "label" }, k(a), {
      class: k(oe)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r6 = /* @__PURE__ */ L({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(ul), {
      role: "status",
      "aria-label": "Loading",
      class: A(k(oe)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), i6 = /* @__PURE__ */ L({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        k(oe)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), d6 = /* @__PURE__ */ L({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(k(oe)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), u6 = /* @__PURE__ */ L({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(k(oe)("px-6", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), c6 = /* @__PURE__ */ L({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(k(oe)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), f6 = /* @__PURE__ */ L({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(k(oe)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), m6 = /* @__PURE__ */ L({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        k(oe)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), p6 = /* @__PURE__ */ L({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(k(oe)("leading-none font-semibold", l.class))
    }, [
      q(a.$slots, "default")
    ], 2));
  }
}), Vm = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Dm = { class: "flex items-start gap-3" }, Tm = { class: "min-w-0 flex-1" }, Im = { class: "text-foreground text-sm font-medium" }, Em = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, v6 = /* @__PURE__ */ L({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = K(!1), d = K(null), u = K(0);
    va((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (v, p) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Vm, [
        o("div", Dm, [
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
          o("div", Tm, [
            o("p", Im, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Em, c(d.value), 1)) : x("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
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
              U(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? x("", !0) : q(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), Fm = { class: "bg-card rounded-lg border" }, Nm = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Rm = { class: "min-w-0" }, Um = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Hm = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Km = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, qm = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, g6 = /* @__PURE__ */ L({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Fm, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Nm, [
        o("div", Rm, [
          q(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Um, c(e.title), 1)) : x("", !0),
            e.description ? (t(), n("p", Hm, c(e.description), 1)) : x("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Km, [
          q(l.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        q(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", qm, [
        q(l.$slots, "footer")
      ])) : x("", !0)
    ]));
  }
}), ea = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function h6() {
  const e = Xt(), l = y(() => e.props.panel?.pageFooter === !0);
  return It(ea, l), l;
}
const Gm = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Wm = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Zm = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, b6 = /* @__PURE__ */ L({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = Xt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = xt(
      ea,
      y(() => !1)
    ), u = y(() => !l.host && k(d) === !0);
    return (f, v) => u.value ? x("", !0) : (t(), n("footer", Gm, [
      o("div", Wm, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", Zm, [
          (t(!0), n(z, null, j(i.value, (p) => (t(), D(k(Et), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              U(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : x("", !0)
      ])
    ]));
  }
}), Jm = { class: "flex shrink-0 flex-col items-center" }, Ym = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, y6 = /* @__PURE__ */ L({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, a = y(() => l.kind === "laptop"), r = y(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = y(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", Jm, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: ie({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Ym)) : x("", !0),
        o("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(z, { key: 0 }, [
        o("div", {
          class: "h-3 rounded-b-xl bg-neutral-700 dark:bg-neutral-600",
          style: ie({ width: `${e.width + 60}px` }),
          "aria-hidden": "true"
        }, null, 4),
        o("div", {
          class: "h-1 rounded-b-full bg-neutral-500/60 dark:bg-neutral-400/50",
          style: ie({ width: `${Math.round(e.width / 6)}px` }),
          "aria-hidden": "true"
        }, null, 4)
      ], 64)) : x("", !0)
    ]));
  }
}), Qm = { class: "flex flex-col gap-6 text-center sm:text-left" }, Xm = { class: "text-foreground text-xl font-semibold" }, ep = {
  key: 0,
  class: "flex flex-col gap-2"
}, tp = { class: "text-foreground font-medium" }, np = {
  key: 0,
  class: "text-muted-foreground"
}, ap = {
  key: 1,
  class: "flex flex-col gap-2"
}, lp = { class: "flex flex-col gap-1" }, op = {
  key: 2,
  class: "flex flex-wrap justify-center gap-2 sm:justify-start"
}, x6 = /* @__PURE__ */ L({
  __name: "PkSetupWizardCompletion",
  props: {
    heading: {},
    summary: { default: () => [] },
    nextSteps: { default: () => [] },
    actions: { default: () => [] },
    linkComponent: { default: "a" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Qm, [
      o("h1", Xm, c(e.heading), 1),
      e.summary.length ? (t(), n("ul", ep, [
        (t(!0), n(z, null, j(e.summary, (r, s) => (t(), n("li", {
          key: s,
          class: "flex items-baseline gap-2 text-sm"
        }, [
          o("span", tp, c(r.label), 1),
          r.detail ? (t(), n("span", np, "– " + c(r.detail), 1)) : x("", !0)
        ]))), 128))
      ])) : x("", !0),
      e.nextSteps.length ? (t(), n("div", ap, [
        a[0] || (a[0] = o("p", { class: "text-foreground text-sm font-medium" }, "Next steps", -1)),
        o("ul", lp, [
          (t(!0), n(z, null, j(e.nextSteps, (r, s) => (t(), n("li", { key: s }, [
            (t(), D(Ce(e.linkComponent), {
              href: r.href,
              class: "text-primary text-sm hover:underline"
            }, {
              default: O(() => [
                U(c(r.label), 1)
              ]),
              _: 2
            }, 1032, ["href"]))
          ]))), 128))
        ])
      ])) : x("", !0),
      e.actions.length ? (t(), n("div", op, [
        (t(!0), n(z, null, j(e.actions, (r, s) => (t(), D(Ce(e.linkComponent), {
          key: s,
          href: r.href,
          class: A(k(Ye)({ variant: r.primary ? "default" : "outline" }))
        }, {
          default: O(() => [
            U(c(r.label), 1)
          ]),
          _: 2
        }, 1032, ["href", "class"]))), 128))
      ])) : x("", !0)
    ]));
  }
}), sp = {
  key: 0,
  class: "flex justify-end"
}, rp = {
  key: 1,
  class: "flex flex-col gap-2"
}, ip = ["onDrop"], dp = ["aria-label", "onDragstart"], up = ["onClick"], cp = { class: "font-medium" }, fp = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, mp = {
  key: 2,
  class: "min-w-0 flex-1"
}, pp = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, vp = ["aria-label", "onClick"], gp = ["disabled", "aria-label", "onClick"], hp = ["disabled", "aria-label", "onClick"], bp = ["disabled", "title", "aria-label", "onClick"], yp = ["disabled", "title", "aria-label", "onClick"], xp = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, kp = ["disabled"], $p = {
  key: 2,
  class: "flex flex-col gap-2"
}, wp = {
  key: 0,
  class: "overflow-x-auto rounded-md border"
}, Cp = { class: "w-full text-sm" }, Sp = { class: "bg-muted/40" }, Mp = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Bp = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ap = ["onDrop"], _p = {
  key: 0,
  class: "px-2 py-1.5 align-top"
}, zp = ["aria-label", "onDragstart"], Pp = { class: "px-2 py-1.5 align-top" }, Lp = { class: "mt-0.5 flex items-center gap-0.5" }, Op = ["disabled", "aria-label", "onClick"], jp = ["disabled", "aria-label", "onClick"], Vp = ["disabled", "title", "aria-label", "onClick"], Dp = ["disabled", "title", "aria-label", "onClick"], Tp = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ip = ["disabled"], k6 = /* @__PURE__ */ L({
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
    relationship: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    fieldKey: {},
    childOptions: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    let s = 0;
    const i = K(d(a.modelValue));
    function d(W) {
      return Array.isArray(W) ? W.map((H) => ({ uid: s++, data: { ...H } })) : [];
    }
    pe(
      () => a.modelValue,
      (W) => {
        JSON.stringify(W ?? null) !== JSON.stringify(u()) && (i.value = d(W));
      }
    );
    function u() {
      const W = [];
      for (const H of i.value) {
        const R = {};
        let ee = !1;
        a.relationship && H.data._id !== void 0 && (R._id = H.data._id);
        for (const P of a.children) {
          const Y = H.data[P.key] ?? null;
          R[P.key] = Y, Y !== null && Y !== "" && !(Array.isArray(Y) && Y.length === 0) && (ee = !0);
        }
        ee && W.push(R);
      }
      return W.length ? W : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const v = y(() => a.maxItems !== null && i.value.length >= a.maxItems), p = y(() => a.minItems !== null && i.value.length <= a.minItems), h = y(() => a.children.length === 1);
    function $() {
      if (v.value || a.disabled || !a.addable)
        return;
      const W = {};
      for (const H of a.children)
        W[H.key] = null;
      i.value.push({ uid: s++, data: W });
    }
    function b(W) {
      i.value = i.value.filter((H) => H.uid !== W), f();
    }
    function w(W) {
      if (v.value || a.disabled || !a.cloneable)
        return;
      const H = i.value.findIndex((Y) => Y.uid === W);
      if (H < 0)
        return;
      const R = i.value[H], ee = {};
      for (const Y of a.children) {
        const V = R.data[Y.key];
        ee[Y.key] = Array.isArray(V) ? [...V] : V;
      }
      const P = [...i.value];
      P.splice(H + 1, 0, { uid: s++, data: ee }), i.value = P, f();
    }
    function C(W, H) {
      const R = W + H;
      if (R < 0 || R >= i.value.length)
        return;
      const ee = [...i.value], [P] = ee.splice(W, 1);
      ee.splice(R, 0, P), i.value = ee, f();
    }
    function M(W, H, R) {
      const ee = i.value.find((P) => P.uid === W);
      ee && (ee.data[H] = R, f());
    }
    function B(W, H) {
      return a.errors[`${a.fieldKey}.${W}.${H}`];
    }
    const S = K(/* @__PURE__ */ new Set());
    function m(W) {
      return a.collapsible && S.value.has(W);
    }
    function g(W) {
      const H = new Set(S.value);
      H.has(W) ? H.delete(W) : H.add(W), S.value = H;
    }
    const _ = y(
      () => i.value.length > 0 && i.value.every((W) => S.value.has(W.uid))
    );
    function T() {
      S.value = _.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((W) => W.uid));
    }
    function F(W) {
      const H = a.children[0];
      if (!H)
        return "";
      const R = W.data[H.key];
      if (typeof R != "string" && typeof R != "number")
        return "";
      const ee = String(R).trim();
      return ee === "" || ee.length > 60 ? "" : ee;
    }
    const J = K(null);
    function N(W, H) {
      if (a.disabled) {
        H.preventDefault();
        return;
      }
      J.value = W, H.dataTransfer?.setData("text/plain", String(W)), H.dataTransfer && (H.dataTransfer.effectAllowed = "move");
    }
    function G() {
      J.value = null;
    }
    function Z(W, H) {
      H.preventDefault();
      const R = J.value;
      if (J.value = null, a.disabled || R === null || R === W)
        return;
      const ee = [...i.value], P = ee.findIndex((E) => E.uid === R), Y = ee.findIndex((E) => E.uid === W);
      if (P < 0 || Y < 0)
        return;
      const [V] = ee.splice(P, 1);
      ee.splice(Y, 0, V), i.value = ee, f();
    }
    return (W, H) => (t(), n(z, null, [
      !e.table && e.collapsible && i.value.length > 1 ? (t(), n("div", sp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: T
        }, c(_.value ? "Expand all" : "Collapse all"), 1)
      ])) : x("", !0),
      e.table ? (t(), n("div", $p, [
        i.value.length ? (t(), n("div", wp, [
          o("table", Cp, [
            o("thead", null, [
              o("tr", Sp, [
                e.disabled ? x("", !0) : (t(), n("th", Mp, [...H[9] || (H[9] = [
                  o("span", { class: "sr-only" }, "Reorder", -1)
                ])])),
                (t(!0), n(z, null, j(e.children, (R) => (t(), n("th", {
                  key: R.key,
                  class: "text-muted-foreground border-b px-2 py-1.5 text-left text-xs font-medium"
                }, [
                  U(c(R.label) + " ", 1),
                  R.required ? (t(), n("span", Bp, "*")) : x("", !0)
                ]))), 128)),
                H[10] || (H[10] = o("th", { class: "border-b px-2 py-1.5" }, [
                  o("span", { class: "sr-only" }, "Row actions")
                ], -1))
              ])
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, j(i.value, (R, ee) => (t(), n("tr", {
                key: R.uid,
                class: A(["border-b last:border-b-0", J.value === R.uid ? "opacity-40" : ""]),
                onDragover: H[1] || (H[1] = he(() => {
                }, ["prevent"])),
                onDrop: (P) => Z(R.uid, P)
              }, [
                e.disabled ? x("", !0) : (t(), n("td", _p, [
                  o("button", {
                    type: "button",
                    class: "text-muted-foreground/60 hover:text-muted-foreground mt-0.5 flex size-6 cursor-grab items-center justify-center active:cursor-grabbing",
                    draggable: "true",
                    "aria-label": `Drag to reorder ${e.itemLabel} ${ee + 1}`,
                    onDragstart: (P) => N(R.uid, P),
                    onDragend: G
                  }, [...H[11] || (H[11] = [
                    rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
                  ])], 40, zp)
                ])),
                (t(!0), n(z, null, j(e.children, (P) => (t(), n("td", {
                  key: P.key,
                  class: "min-w-[8rem] px-2 py-1.5 align-top"
                }, [
                  I(Ge, {
                    field: {
                      ...P,
                      disabled: P.disabled || e.disabled,
                      labelHidden: !0
                    },
                    value: R.data[P.key],
                    error: B(ee, P.key),
                    options: e.childOptions[P.key] ?? [],
                    onChange: (Y) => M(R.uid, P.key, Y)
                  }, null, 8, ["field", "value", "error", "options", "onChange"])
                ]))), 128)),
                o("td", Pp, [
                  o("div", Lp, [
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || ee === 0,
                      "aria-label": `Move ${e.itemLabel} ${ee + 1} up`,
                      onClick: (P) => C(ee, -1)
                    }, [...H[12] || (H[12] = [
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
                    ])], 8, Op),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || ee === i.value.length - 1,
                      "aria-label": `Move ${e.itemLabel} ${ee + 1} down`,
                      onClick: (P) => C(ee, 1)
                    }, [...H[13] || (H[13] = [
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
                    ])], 8, jp),
                    e.cloneable ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || v.value,
                      title: v.value ? `At most ${e.maxItems} allowed` : void 0,
                      "aria-label": `Duplicate ${e.itemLabel} ${ee + 1}`,
                      onClick: (P) => w(R.uid)
                    }, [...H[14] || (H[14] = [
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
                    ])], 8, Vp)) : x("", !0),
                    e.deletable ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || p.value,
                      title: p.value ? `At least ${e.minItems} required` : void 0,
                      "aria-label": `Remove ${e.itemLabel} ${ee + 1}`,
                      onClick: (P) => b(R.uid)
                    }, [...H[15] || (H[15] = [
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
                    ])], 8, Dp)) : x("", !0)
                  ])
                ])
              ], 42, Ap))), 128))
            ])
          ])
        ])) : (t(), n("p", Tp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)),
        !v.value && e.addable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: $
        }, [
          H[16] || (H[16] = o("svg", {
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
          U(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, Ip)) : x("", !0)
      ])) : (t(), n("div", rp, [
        (t(!0), n(z, null, j(i.value, (R, ee) => (t(), n("div", {
          key: R.uid,
          class: A(["flex items-start gap-2", J.value === R.uid ? "opacity-40" : ""]),
          onDragover: H[0] || (H[0] = he(() => {
          }, ["prevent"])),
          onDrop: (P) => Z(R.uid, P)
        }, [
          e.disabled ? x("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: A(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${ee + 1}`,
            onDragstart: (P) => N(R.uid, P),
            onDragend: G
          }, [...H[2] || (H[2] = [
            rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, dp)),
          o("span", {
            class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(ee + 1), 3),
          m(R.uid) ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (P) => g(R.uid)
          }, [
            o("span", cp, c(e.itemLabel) + " " + c(ee + 1), 1),
            F(R) ? (t(), n("span", fp, c(F(R)), 1)) : x("", !0)
          ], 8, up)) : (t(), n("div", mp, [
            h.value ? (t(), D(Ge, {
              key: 0,
              field: {
                ...e.children[0],
                disabled: e.children[0].disabled || e.disabled,
                labelHidden: !0
              },
              value: R.data[e.children[0].key],
              error: B(ee, e.children[0].key),
              options: e.childOptions[e.children[0].key] ?? [],
              onChange: (P) => M(R.uid, e.children[0].key, P)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", pp, [
              (t(!0), n(z, null, j(e.children, (P) => (t(), D(Ge, {
                key: P.key,
                field: { ...P, disabled: P.disabled || e.disabled },
                value: R.data[P.key],
                error: B(ee, P.key),
                options: e.childOptions[P.key] ?? [],
                onChange: (Y) => M(R.uid, P.key, Y)
              }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
            ]))
          ])),
          o("div", {
            class: A(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
          }, [
            e.collapsible ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": m(R.uid) ? `Expand ${e.itemLabel} ${ee + 1}` : `Collapse ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => g(R.uid)
            }, [
              (t(), n("svg", {
                class: A(["size-3.5 transition-transform", m(R.uid) ? "" : "rotate-180"]),
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [...H[3] || (H[3] = [
                o("path", { d: "m6 9 6 6 6-6" }, null, -1)
              ])], 2))
            ], 8, vp)) : x("", !0),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || ee === 0,
              "aria-label": `Move ${e.itemLabel} ${ee + 1} up`,
              onClick: (P) => C(ee, -1)
            }, [...H[4] || (H[4] = [
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
            ])], 8, gp),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || ee === i.value.length - 1,
              "aria-label": `Move ${e.itemLabel} ${ee + 1} down`,
              onClick: (P) => C(ee, 1)
            }, [...H[5] || (H[5] = [
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
            ])], 8, hp),
            e.cloneable ? (t(), n("button", {
              key: 1,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || v.value,
              title: v.value ? `At most ${e.maxItems} allowed` : void 0,
              "aria-label": `Duplicate ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => w(R.uid)
            }, [...H[6] || (H[6] = [
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
            ])], 8, bp)) : x("", !0),
            e.deletable ? (t(), n("button", {
              key: 2,
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || p.value,
              title: p.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => b(R.uid)
            }, [...H[7] || (H[7] = [
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
            ])], 8, yp)) : x("", !0)
          ], 2)
        ], 42, ip))), 128)),
        i.value.length === 0 ? (t(), n("p", xp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : x("", !0),
        !v.value && e.addable ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: $
        }, [
          H[8] || (H[8] = o("svg", {
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
          U(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, kp)) : x("", !0)
      ]))
    ], 64));
  }
}), Ep = { class: "space-y-1" }, Fp = { class: "flex items-center gap-1" }, Np = ["disabled", "title", "aria-label", "onClick"], Rp = ["aria-pressed"], Up = ["id", "value", "rows", "disabled"], Hp = ["innerHTML"], Kp = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(!1), i = y(() => a.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, $ = h) {
      const b = document.getElementById(a.id ?? "");
      if (b === null)
        return;
      const w = b.selectionStart, C = b.selectionEnd, M = i.value.slice(w, C);
      r(
        "update:modelValue",
        `${i.value.slice(0, w)}${h}${M}${$}${i.value.slice(C)}`
      );
    }
    const v = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = y(
      () => (a.toolbar ?? Object.keys(v)).filter((h) => h in v)
    );
    return (h, $) => (t(), n("div", Ep, [
      o("div", Fp, [
        (t(!0), n(z, null, j(p.value, (b) => (t(), n("button", {
          key: b,
          type: "button",
          disabled: e.disabled,
          title: b,
          "aria-label": b,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (w) => v[b].run()
        }, c(v[b].label), 9, Np))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: $[0] || ($[0] = (b) => s.value = !s.value)
        }, " Preview ", 8, Rp)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Hp)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: $[1] || ($[1] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, Up))
    ]));
  }
}), qp = { class: "space-y-1" }, Gp = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Wp = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Zp = ["id", "value", "rows", "disabled"], Jp = { class: "text-muted-foreground text-xs font-normal" }, Yp = {
  key: 0,
  class: "text-destructive text-xs"
}, Qp = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null), i = K(!0), d = y(() => a.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), f = y(() => {
      if (a.language !== "json" || d.value.trim() === "")
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
      const $ = h.target, b = $.selectionStart, w = $.selectionEnd, C = `${d.value.slice(0, b)}    ${d.value.slice(w)}`;
      r("update:modelValue", C), requestAnimationFrame(() => {
        $.selectionStart = $.selectionEnd = b + 4;
      });
    }
    return (h, $) => (t(), n("div", qp, [
      o("div", Gp, [
        o("div", Wp, [
          (t(!0), n(z, null, j(u.value, (b) => (t(), n("div", { key: b }, c(b), 1))), 128))
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
        }, null, 40, Zp)
      ]),
      o("p", Jp, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Yp, c(f.value), 1)) : x("", !0)
    ]));
  }
}), Xp = { class: "space-y-3" }, ev = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, tv = { class: "text-sm font-medium" }, nv = { class: "flex items-center gap-1" }, av = ["disabled", "onClick"], lv = ["disabled", "onClick"], ov = ["disabled", "onClick"], sv = { class: "space-y-3 p-3" }, rv = { class: "flex flex-wrap items-center gap-2" }, iv = ["disabled", "onClick"], dv = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, $6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(() => a.modelValue ?? []), i = y(
      () => Object.fromEntries(a.blocks.map(($) => [$.type, $]))
    ), d = y(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u($) {
      r("update:modelValue", $);
    }
    function f($) {
      d.value || u([...s.value, { type: $, data: {} }]);
    }
    function v($) {
      u(s.value.filter((b, w) => w !== $));
    }
    function p($, b) {
      const w = $ + b;
      if (w < 0 || w >= s.value.length)
        return;
      const C = [...s.value], [M] = C.splice($, 1);
      C.splice(w, 0, M), u(C);
    }
    function h($, b, w) {
      u(
        s.value.map(
          (C, M) => M === $ ? { ...C, data: { ...C.data, [b]: w } } : C
        )
      );
    }
    return ($, b) => (t(), n("div", Xp, [
      (t(!0), n(z, null, j(s.value, (w, C) => (t(), n("div", {
        key: `${w.type}-${C}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", ev, [
          o("span", tv, c(i.value[w.type]?.label ?? w.type), 1),
          o("div", nv, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || C === 0,
              "aria-label": "Move up",
              onClick: (M) => p(C, -1)
            }, " ↑ ", 8, av),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || C === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => p(C, 1)
            }, " ↓ ", 8, lv),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => v(C)
            }, " Remove ", 8, ov)
          ])
        ]),
        o("div", sv, [
          (t(!0), n(z, null, j(i.value[w.type]?.fields ?? [], (M) => (t(), D(Ge, {
            key: M.key,
            field: M,
            value: w.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (B) => h(C, M.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", rv, [
        (t(!0), n(z, null, j(e.blocks, (w) => (t(), n("button", {
          key: w.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (C) => f(w.type)
        }, " + " + c(w.label), 9, iv))), 128)),
        d.value ? (t(), n("span", dv, c(e.maxBlocks) + " is the maximum here. ", 1)) : x("", !0)
      ])
    ]));
  }
}), uv = ["name", "value", "checked", "disabled", "onChange"], cv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, fv = /* @__PURE__ */ L({
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
    const a = e, r = l;
    function s(i) {
      return a.modelValue != null && i.value == a.modelValue;
    }
    return (i, d) => (t(), n("div", {
      role: "radiogroup",
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, j(e.options, (u) => (t(), n("label", {
        key: String(u.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", u.value)
        }, null, 40, uv),
        U(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", cv, " Nothing to choose from yet. ")) : x("", !0)
    ], 2));
  }
}), mv = ["value", "checked", "disabled", "onChange"], pv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, vv = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function i(f) {
      return s.value.some((v) => v == f.value);
    }
    function d(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((v) => v != f.value) : [...s.value, f.value]
      );
    }
    const u = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, v) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ie(u.value)
    }, [
      (t(!0), n(z, null, j(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => d(p)
        }, null, 40, mv),
        U(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", pv, " Nothing to choose from yet. ")) : x("", !0)
    ], 4));
  }
}), gv = { class: "flex flex-col gap-1.5" }, hv = ["aria-label", "onClick"], bv = ["placeholder", "disabled", "maxlength"], yv = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, xv = ["onClick"], kv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, $v = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = K(""), i = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = y(() => i.value.length >= (a.field.max ?? 25)), u = y(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some(($) => $.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
      const $ = h.trim().slice(0, a.field.maxLength ?? 40);
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
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (h, $) => (t(), n("div", gv, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, j(i.value, (b, w) => (t(), n("span", {
          key: `${b}-${w}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          U(c(b) + " ", 1),
          e.disabled ? x("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${b}`,
            onClick: (C) => v(w)
          }, " × ", 8, hv))
        ]))), 128)),
        ge(o("input", {
          "onUpdate:modelValue": $[0] || ($[0] = (b) => s.value = b),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: $[1] || ($[1] = (b) => f(s.value))
        }, null, 40, bv), [
          [_e, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", yv, [
        $[2] || ($[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, j(u.value, (b) => (t(), n("button", {
          key: b,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (w) => f(b)
        }, c(b), 9, xv))), 128))
      ])) : x("", !0),
      d.value ? (t(), n("p", kv, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : x("", !0)
    ]));
  }
}), wv = 4.5, Cn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function ta(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function jt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function qt(e) {
  const [l, a, r] = ta(e);
  return 0.2126 * jt(l) + 0.7152 * jt(a) + 0.0722 * jt(r);
}
function na(e, l) {
  const a = qt(e), r = qt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Cv(e, l, a) {
  if (!Cn.test(e) || !Cn.test(l))
    return e;
  const r = qt(l) > 0.5, s = r ? 0 : 255;
  let i = ta(e);
  for (let d = 0; d <= 20; d++) {
    const u = Sv(i);
    if (na(u, l) >= a)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Sv(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Mv = { class: "flex flex-col gap-2" }, Bv = { class: "flex items-center gap-2" }, Av = {
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
}, _v = ["value", "disabled", "aria-label"], zv = ["value", "disabled", "placeholder"], Pv = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Lv = ["aria-label", "title", "onClick"], Ov = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, jv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = y(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = y(() => s.test(i.value));
    function u(b) {
      const w = b.trim();
      if (w === "")
        return "";
      const C = w.startsWith("#") ? w : `#${w}`;
      return s.test(C) ? C.toLowerCase() : w;
    }
    function f(b) {
      r("update:modelValue", u(b.target.value));
    }
    const v = y(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : na(i.value, a.field.contrastBackground)), p = y(() => a.field.contrastMinRatio ?? wv), h = y(() => v.value !== null && v.value < p.value);
    function $() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Cv(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (b, w) => (t(), n("div", Mv, [
      o("div", Bv, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: w[0] || (w[0] = (C) => r("update:modelValue", C.target.value))
        }, null, 40, _v)) : (t(), n("span", Av)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, zv)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Pv, [
        (t(!0), n(z, null, j(e.field.presets, (C) => (t(), n("button", {
          key: C,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === C.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ie({ backgroundColor: C }),
          "aria-label": C,
          title: C,
          onClick: (M) => r("update:modelValue", C.toLowerCase())
        }, null, 14, Lv))), 128))
      ])) : x("", !0),
      h.value ? (t(), n("p", Ov, [
        o("span", null, " This fails contrast at " + c(v.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? x("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: $
        }, " Use a readable shade "))
      ])) : x("", !0)
    ]));
  }
}), Vv = ["aria-disabled"], Dv = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null);
    let i = null, d = null, u = null;
    const f = y(() => {
      const $ = a.modelValue?.[a.latKey], b = a.modelValue?.[a.lngKey];
      return typeof $ == "number" && typeof b == "number" ? { lat: $, lng: b } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const $ = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = $, i = $.map(s.value).setView([f.value.lat, f.value.lng], a.zoom), $.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), h(), a.pickable && !a.disabled && i.on("click", (b) => {
        r("update:modelValue", {
          [a.latKey]: Number(b.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(b.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const $ of a.markers) {
          const b = u.circleMarker([$.lat, $.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          ($.label || $.popup) && b.bindPopup(
            `<strong>${$.label ?? ""}</strong>${$.popup ? `<br>${$.popup}` : ""}`
          );
        }
    }
    function h() {
      if (!i || !u)
        return;
      const $ = a.modelValue?.[a.latKey], b = a.modelValue?.[a.lngKey];
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
    return be(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), pe(
      () => a.modelValue,
      () => h(),
      { deep: !0 }
    ), ($, b) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: ie({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Vv));
  }
}), Tv = { class: "flex flex-col gap-2" }, Iv = { class: "text-muted-foreground text-xs font-normal" }, Ev = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.modelValue && typeof a.modelValue == "object" ? a.modelValue : null), i = y(() => a.field.latKey ?? "lat"), d = y(() => a.field.lngKey ?? "lng");
    return (u, f) => (t(), n("div", Tv, [
      I(Dv, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": f[0] || (f[0] = (v) => r("update:modelValue", v))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", Iv, [
        U(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          U(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : x("", !0)
      ])
    ]));
  }
}), Fv = { class: "flex flex-col gap-2" }, Nv = ["width", "height"], Rv = ["value", "disabled"], Uv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Hv = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null), i = y(() => {
      if (a.field.from) {
        const f = a.values?.[a.field.from];
        return f == null ? "" : String(f);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = y(() => a.field.size ?? 160);
    async function u() {
      if (!s.value)
        return;
      const f = i.value;
      if (f === "") {
        s.value.getContext("2d")?.clearRect(0, 0, d.value, d.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, f, {
        width: d.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return be(() => {
      u();
    }), pe(i, () => {
      u();
    }), (f, v) => (t(), n("div", Fv, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Nv),
      e.field.from ? (t(), n("p", Uv, "From " + c(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, Rv))
    ]));
  }
}), Kv = { class: "flex flex-col gap-2" }, qv = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Gv = ["aria-label"], Wv = {
  key: 0,
  class: "text-destructive text-xs"
}, Zv = ["value", "disabled"], Jv = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Yv = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(null), i = K(null), d = y(() => {
      if (a.field.from) {
        const v = a.values?.[a.field.from];
        return v == null ? "" : String(v);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = y(() => (a.field.format ?? "CODE128").toUpperCase());
    async function f() {
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
            height: a.field.height ?? 80,
            width: a.field.width ?? 2,
            displayValue: a.field.displayValue !== !1,
            margin: 8,
            background: "#ffffff",
            lineColor: "#0f172a",
            fontSize: 14
          });
        } catch (p) {
          i.value = p instanceof Error ? p.message : "Could not render barcode";
        }
    }
    return be(() => {
      f();
    }), pe([d, u], () => {
      f();
    }), (v, p) => (t(), n("div", Kv, [
      o("div", qv, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Gv))
      ]),
      i.value ? (t(), n("p", Wv, c(i.value), 1)) : x("", !0),
      e.field.from ? (t(), n("p", Jv, " From " + c(e.field.from) + " (" + c(u.value) + ") ", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Zv))
    ]));
  }
}), Qv = { class: "mr-2 inline-block w-3 opacity-60" }, Xv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, eg = /* @__PURE__ */ L({
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
    function a(d) {
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
        return a(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return a(d?.original);
    }), s = y(() => {
      if (l.field.modifiedKey)
        return a(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return a(d?.modified);
    }), i = y(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), f = Math.max(d.length, u.length), v = [];
      for (let p = 0; p < f; p++) {
        const h = d[p], $ = u[p];
        if (h === $) {
          h !== void 0 && v.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && v.push({ kind: "del", text: h }), $ !== void 0 && v.push({ kind: "add", text: $ });
      }
      return v;
    });
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: ie({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, j(i.value, (f, v) => (t(), n("div", {
        key: v,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", Qv, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        U(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Xv, "No differences.")) : x("", !0)
    ], 4));
  }
}), tg = { class: "flex flex-col gap-3" }, ng = { class: "flex items-center justify-between gap-2" }, ag = { class: "text-sm font-medium" }, lg = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, og = { class: "grid grid-cols-7 gap-1" }, sg = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, rg = ["title"], w6 = /* @__PURE__ */ L({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = K(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const $ = p.get(h.date) ?? [];
        $.push(h), p.set(h.date, $);
      }
      return p;
    }), u = y(() => {
      const h = new Date(r.value, s.value, 1).getDay(), $ = new Date(r.value, s.value + 1, 0).getDate(), b = [];
      for (let w = 0; w < h; w++)
        b.push({ day: null, key: `pad-${w}`, events: [] });
      for (let w = 1; w <= $; w++) {
        const C = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(w).padStart(2, "0")}`;
        b.push({ day: w, key: C, events: d.value.get(C) ?? [] });
      }
      return b;
    });
    function f() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), n("div", tg, [
      o("div", ng, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", ag, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", lg, [
        (t(), n(z, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ($) => o("span", { key: $ }, c($), 1)), 64))
      ]),
      o("div", og, [
        (t(!0), n(z, null, j(u.value, ($) => (t(), n("div", {
          key: $.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", $.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          $.day ? (t(), n("p", sg, c($.day), 1)) : x("", !0),
          (t(!0), n(z, null, j($.events.slice(0, 3), (b, w) => (t(), n("p", {
            key: `${$.key}-${w}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: b.label
          }, c(b.label), 9, rg))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), ig = { class: "flex items-center gap-3" }, dg = ["min", "max", "step", "value", "disabled", "aria-label"], ug = { class: "flex shrink-0 items-center gap-1" }, cg = ["min", "max", "step", "value", "disabled"], fg = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, mg = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.field.min ?? 0), i = y(() => a.field.max ?? 100), d = y(() => a.field.step ?? 1), u = y(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), f = y(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function v(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), n("div", ig, [
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
      }, null, 40, dg),
      o("div", ug, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = ($) => v($.target.value))
        }, null, 40, cg),
        e.field.unit ? (t(), n("span", fg, c(e.field.unit), 1)) : x("", !0)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ new Map();
function Vt(e, l) {
  pt.set(e, l);
}
function pg(e) {
  return pt.get(e);
}
function C6(e) {
  return pt.has(e);
}
function vg() {
  return [...pt.keys()].sort();
}
function S6() {
  pt.clear();
}
const gg = ["name", "value", "checked", "disabled", "onChange"], hg = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, bg = { class: "whitespace-nowrap" }, yg = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, xg = ["name", "value", "checked", "disabled", "onChange"], kg = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, $g = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, wg = { class: "text-center text-xs font-medium" }, Cg = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Sg = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Mg = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(
      () => a.field.preview ? pg(a.field.preview) : void 0
    ), i = y(() => !!a.field.preview && !s.value), d = y(() => a.field.layout === "segmented"), u = y(() => {
      switch (a.field.columns ?? 3) {
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
    function f(v) {
      return a.modelValue != null && v.value == a.modelValue;
    }
    return (v, p) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, j(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(h) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: f(h),
          disabled: e.disabled,
          onChange: ($) => r("update:modelValue", h.value)
        }, null, 40, gg),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", hg, [
          (t(), D(Ce(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : x("", !0),
        o("span", bg, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", yg, " Nothing to choose from yet. ")) : x("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, j(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(h) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: h.value,
          checked: f(h),
          disabled: e.disabled,
          onChange: ($) => r("update:modelValue", h.value)
        }, null, 40, xg),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", kg, [
          s.value ? (t(), D(Ce(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", $g, " no preview ")) : x("", !0)
        ]),
        o("span", wg, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Cg, " Nothing to choose from yet. ")) : x("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Sg, [
        p[2] || (p[2] = U(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        U(". Registered: " + c(k(vg)().join(", ") || "none") + ". ", 1)
      ])) : x("", !0)
    ], 2));
  }
}), Bg = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Ag = /* @__PURE__ */ L({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Bg, [
      o("span", {
        class: "block size-full",
        style: ie({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), _g = { class: "flex flex-col items-center gap-1 text-center" }, zg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, aa = /* @__PURE__ */ L({
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
    const l = e, a = y(() => l.mono ? "#000000" : l.accent), r = y(() => {
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
    return (s, i) => (t(), n("div", _g, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ie({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", zg, c(e.caption), 1)) : x("", !0)
    ]));
  }
}), Pg = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Lg = { class: "flex items-center gap-3" }, Og = ["src"], jg = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Vg = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Dg = {
  key: 0,
  class: "text-right text-sm"
}, Tg = { class: "text-neutral-500" }, Ig = { class: "tabular-nums" }, Eg = { key: 1 }, Fg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Ng = { class: "mt-2 font-medium" }, Rg = { key: 2 }, Ug = { class: "w-full text-sm" }, Hg = { class: "w-full py-3 pr-2" }, Kg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, qg = { key: 0 }, Gg = ["colspan"], Wg = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Zg = { class: "w-64 text-sm" }, Jg = { class: "tabular-nums" }, Yg = {
  key: 3,
  class: "py-2"
}, Qg = { key: 4 }, Xg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, eh = { class: "mt-2 flex flex-col gap-1 text-sm" }, th = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, nh = { key: 0 }, ah = {
  key: 1,
  class: "mt-1"
}, lh = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, oh = /* @__PURE__ */ L({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function a() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
    }
    function r(f) {
      return f.meta ?? [];
    }
    function s(f) {
      return f.rows ?? [];
    }
    function i(f) {
      return f.totals ?? [];
    }
    function d(f) {
      return f ?? [];
    }
    function u(f) {
      return f ?? "";
    }
    return (f, v) => (t(), n("article", Pg, [
      o("div", Lg, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Og)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ie({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, j(e.document.blocks, (p, h) => (t(), n(z, { key: h }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ie({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ie({ color: a() })
            }, c(p.title), 5),
            p.subtitle ? (t(), n("p", jg, c(p.subtitle), 1)) : x("", !0),
            p.reference ? (t(), n("p", Vg, c(p.reference), 1)) : x("", !0)
          ]),
          r(p).length ? (t(), n("dl", Dg, [
            (t(!0), n(z, null, j(r(p), ($, b) => (t(), n("div", {
              key: b,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Tg, c($.label), 1),
              o("dd", Ig, c($.value), 1)
            ]))), 128))
          ])) : x("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", Eg, [
          o("h2", Fg, c(p.heading), 1),
          o("p", Ng, c(p.name), 1),
          (t(!0), n(z, null, j(d(p.lines), ($, b) => (t(), n("p", {
            key: b,
            class: "text-sm text-neutral-600"
          }, c($), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", Rg, [
          o("table", Ug, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ie({ borderColor: a() })
              }, [
                (t(!0), n(z, null, j(d(p.columns), ($, b) => (t(), n("th", {
                  key: b,
                  class: A(["pb-2 font-medium", b > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c($), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, j(s(p), ($, b) => (t(), n("tr", {
                key: b,
                class: "border-b border-neutral-200"
              }, [
                o("td", Hg, [
                  o("p", null, c($.description), 1),
                  $.detail ? (t(), n("p", Kg, c($.detail), 1)) : x("", !0)
                ]),
                (t(!0), n(z, null, j($.cells, (w, C) => (t(), n("td", {
                  key: C,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(w), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", qg, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Gg)
              ])) : x("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Wg, [
            o("dl", Zg, [
              (t(!0), n(z, null, j(i(p), ($, b) => (t(), n("div", {
                key: b,
                class: A([
                  "flex justify-between py-1",
                  $.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ie($.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: A($.strong ? "" : "text-neutral-600")
                }, c($.label), 3),
                o("dd", Jg, c($.value), 1)
              ], 6))), 128))
            ])
          ])) : x("", !0)
        ])) : p.type === "code" ? (t(), n("section", Yg, [
          I(aa, {
            code: u(p.code),
            caption: u(p.caption),
            style: ie(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Qg, [
          o("h2", Xg, c(p.heading), 1),
          o("ol", eh, [
            (t(!0), n(z, null, j(d(p.items), ($, b) => (t(), n("li", {
              key: b,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ie({ color: a() })
              }, c(b + 1) + ".", 5),
              o("span", null, c($), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ie(p.emphasis ? { color: a() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), n("footer", th, [
          p.text ? (t(), n("p", nh, c(p.text), 1)) : x("", !0),
          d(p.contacts).length ? (t(), n("p", ah, c(d(p.contacts).join(" · ")), 1)) : x("", !0)
        ])) : (t(), n("p", lh, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), sh = ["aria-label", "title"], rh = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ih = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, M6 = /* @__PURE__ */ L({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Jn(), r = y(() => l.value.theme === "dark");
    function s() {
      a({ theme: r.value ? "light" : "dark" });
    }
    return (i, d) => (t(), n("button", {
      type: "button",
      class: "text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2 transition-colors",
      "aria-label": r.value ? "Switch to light theme" : "Switch to dark theme",
      title: r.value ? "Light theme" : "Dark theme",
      onClick: s
    }, [
      (t(), n("svg", rh, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", ih))
      ]))
    ], 8, sh));
  }
}), dh = ["width", "height"], uh = { key: 0 }, ch = ["x1", "x2", "y1", "y2"], fh = ["x", "y"], mh = ["x1", "x2", "y1", "y2"], ph = ["x", "y"], vh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], gh = ["x", "y", "width", "height", "fill", "fill-opacity"], hh = ["x", "y"], bh = ["x", "y"], yh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, xh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, kh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, $h = { class: "text-xs font-semibold tabular-nums" }, wh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Ch = { class: "text-muted-foreground" }, Sn = 5.6, B6 = /* @__PURE__ */ L({
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
    const l = e, a = {
      danger: "var(--destructive)",
      warning: "var(--chart-4)",
      success: "var(--chart-2)",
      neutral: "var(--muted-foreground)"
    };
    function r(P) {
      return a[P] ?? P;
    }
    function s(P, Y) {
      if (!l.thresholds?.length)
        return Y;
      const V = l.thresholds.find((E) => P < E.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = K(null), d = K(560), u = K(null);
    let f = null;
    be(() => {
      f = new ResizeObserver((P) => {
        d.value = Math.max(160, P[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ke(() => f?.disconnect());
    const v = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Y, V) => ({
      ...Y,
      color: Y.color ?? v[V % v.length]
    }))), h = y(() => p.value[0]?.points.map((P) => P.label) ?? []), $ = y(() => h.value.length), b = y(() => l.orientation === "horizontal"), w = y(() => Math.max(0, ...h.value.map((P) => P.length))), C = y(() => {
      if (!b.value)
        return l.showAxis ? 44 : 8;
      const P = w.value * Sn + 16;
      return Math.round(Math.min(Math.max(60, P), d.value * 0.4));
    }), M = y(() => Math.max(4, Math.floor((C.value - 16) / Sn)));
    function B(P) {
      return P.length <= M.value ? P : `${P.slice(0, M.value - 1)}…`;
    }
    const S = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: C.value
    })), m = y(() => ({
      w: Math.max(1, d.value - S.value.left - S.value.right),
      h: Math.max(1, l.height - S.value.top - S.value.bottom)
    })), g = (P) => l.format ? l.format(P) : _(P);
    function _(P) {
      return Math.abs(P) >= 1e6 ? `${(P / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(P) >= 1e3 ? `${(P / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(P * 100) / 100);
    }
    const T = y(() => {
      const P = h.value.map(
        (te, le) => l.stacked ? p.value.reduce((Q, ne) => Q + Math.max(0, ne.points[le]?.value ?? 0), 0) : Math.max(...p.value.map((Q) => Q.points[le]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const Y = Math.max(...P, 0);
      if (Y <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(Y));
      return ([1, 2, 2.5, 5, 10].find((te) => Y <= te * V) ?? 10) * V;
    }), F = y(
      () => (b.value ? m.value.h : m.value.w) / Math.max(1, $.value)
    ), J = y(() => F.value * 0.68), N = y(
      () => l.stacked || p.value.length <= 1 ? J.value : J.value / p.value.length
    ), G = y(() => {
      const P = [], Y = new Array($.value).fill(0);
      return p.value.forEach((V, E) => {
        V.points.forEach((te, le) => {
          const ne = Math.max(0, te.value) / T.value * (b.value ? m.value.w : m.value.h), se = (b.value ? S.value.top : S.value.left) + le * F.value + (F.value - J.value) / 2, Se = l.stacked ? 0 : E * N.value;
          P.push(
            b.value ? {
              x: S.value.left + Y[le],
              y: se + Se,
              w: ne,
              h: Math.max(0, N.value - 2),
              color: s(te.value, V.color),
              label: te.label,
              name: V.name,
              value: te.value,
              index: le
            } : {
              x: se + Se,
              y: S.value.top + m.value.h - ne - Y[le],
              w: Math.max(0, N.value - 2),
              h: ne,
              color: s(te.value, V.color),
              label: te.label,
              name: V.name,
              value: te.value,
              index: le
            }
          ), l.stacked && (Y[le] += ne);
        });
      }), P;
    }), Z = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((P) => ({
        value: T.value * (b.value ? P : 1 - P),
        x: S.value.left + m.value.w * P,
        y: S.value.top + m.value.h * P
      }))
    ), W = y(() => Math.max(1, Math.ceil($.value / (b.value ? 14 : 10))));
    function H(P) {
      return P === $.value - 1 || P % W.value === 0;
    }
    function R(P) {
      return (b.value ? S.value.top : S.value.left) + P * F.value + F.value / 2;
    }
    const ee = y(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: p.value.map((P) => ({
        name: P.name,
        color: P.color,
        value: P.points[u.value]?.value ?? 0
      }))
    });
    return (P, Y) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      $.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: Y[0] || (Y[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", uh, [
            b.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, j(Z.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: S.value.top,
                y2: S.value.top + m.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ch))), 128)),
              (t(!0), n(z, null, j(Z.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, fh))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, j(Z.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: S.value.left,
                x2: d.value - S.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, mh))), 128)),
              (t(!0), n(z, null, j(Z.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: S.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, ph))), 128))
            ], 64))
          ])) : x("", !0),
          (t(!0), n(z, null, j(h.value, (V, E) => (t(), n("rect", {
            key: `hit-${E}`,
            x: b.value ? S.value.left : S.value.left + E * F.value,
            y: b.value ? S.value.top + E * F.value : S.value.top,
            width: b.value ? m.value.w : F.value,
            height: b.value ? F.value : m.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === E ? 0.4 : 0,
            onMouseenter: (te) => u.value = E
          }, null, 40, vh))), 128)),
          (t(!0), n(z, null, j(G.value, (V, E) => (t(), n("rect", {
            key: `b-${E}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": u.value === null || u.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, gh))), 128)),
          b.value ? (t(!0), n(z, { key: 1 }, j(h.value, (V, E) => ge((t(), n("text", {
            key: `c-${E}`,
            x: S.value.left - 8,
            y: R(E) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            U(c(B(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, hh)), [
            [Ke, H(E)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, j(h.value, (V, E) => ge((t(), n("text", {
            key: `c-${E}`,
            x: R(E),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, bh)), [
            [Ke, H(E)]
          ])), 128))
        ], 40, dh)),
        ee.value ? (t(), n("div", yh, [
          o("p", xh, c(ee.value.label), 1),
          (t(!0), n(z, null, j(ee.value.rows, (V, E) => (t(), n("div", {
            key: E,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", kh, c(V.name || "Value"), 1),
            o("span", $h, c(g(V.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", wh, [
          (t(!0), n(z, null, j(p.value, (V, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", Ch, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Sh = ["width", "height"], Mh = ["id"], Bh = ["stop-color"], Ah = ["stop-color"], _h = { key: 0 }, zh = ["x1", "x2", "y1", "y2"], Ph = ["x", "y"], Lh = ["x", "y"], Oh = ["x1", "x2", "y1", "y2"], jh = ["d", "fill"], Vh = ["d", "stroke", "stroke-dasharray"], Dh = ["cx", "cy", "fill"], Th = { key: 1 }, Ih = ["x1", "x2", "y1", "y2"], Eh = ["cx", "cy", "fill"], Fh = ["x", "y"], Nh = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Rh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Uh = { class: "text-xs font-semibold tabular-nums" }, Hh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Kh = { class: "text-muted-foreground" }, qh = /* @__PURE__ */ L({
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
    const l = e, a = y(() => v.value.some((P) => P.axis === "right")), r = K(null), s = K(560), i = K(null);
    let d = null;
    be(() => {
      d = new ResizeObserver((P) => {
        s.value = Math.max(160, P[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((Y, V) => ({
      ...Y,
      color: Y.color ?? u[V % u.length]
    }))), p = y(() => v.value[0]?.points.map((P) => P.label) ?? []), h = y(() => p.value.length), $ = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), b = (P) => l.format ? l.format(P) : w(P);
    function w(P) {
      return Math.abs(P) >= 1e6 ? `${(P / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(P) >= 1e3 ? `${(P / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(P * 100) / 100);
    }
    function C(P) {
      const Y = Math.max(...P, 0);
      if (Y <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(Y));
      return ([1, 2, 2.5, 5, 10].find((te) => Y <= te * V) ?? 10) * V;
    }
    const M = y(
      () => C(
        v.value.filter((P) => P.axis !== "right").flatMap((P) => P.points.map((Y) => Y.value))
      )
    ), B = y(
      () => C(
        v.value.filter((P) => P.axis === "right").flatMap((P) => P.points.map((Y) => Y.value))
      )
    ), S = y(() => ({
      w: Math.max(1, s.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    }));
    function m(P) {
      return $.value.left + (h.value <= 1 ? 0 : P / (h.value - 1) * S.value.w);
    }
    function g(P, Y = "left") {
      const V = Y === "right" ? B.value : M.value;
      return $.value.top + S.value.h - P / V * S.value.h;
    }
    const _ = y(
      () => v.value.map((P) => {
        const Y = P.points.map((E, te) => ({
          ...E,
          x: m(te),
          y: g(E.value, P.axis ?? "left")
        })), V = P.stepped ? T(Y) : F(Y);
        return { ...P, pts: Y, line: V, area: J(V, Y) };
      })
    );
    function T(P) {
      if (P.length === 0)
        return "";
      let Y = `M${P[0].x.toFixed(2)},${P[0].y.toFixed(2)}`;
      for (let V = 1; V < P.length; V++)
        Y += ` L${P[V].x.toFixed(2)},${P[V - 1].y.toFixed(2)} L${P[V].x.toFixed(2)},${P[V].y.toFixed(2)}`;
      return Y;
    }
    function F(P) {
      const Y = P.length;
      if (Y === 0)
        return "";
      if (Y === 1)
        return `M${P[0].x},${P[0].y}`;
      const V = [], E = [];
      for (let Q = 0; Q < Y - 1; Q++)
        V[Q] = P[Q + 1].x - P[Q].x, E[Q] = V[Q] === 0 ? 0 : (P[Q + 1].y - P[Q].y) / V[Q];
      const te = [E[0]];
      for (let Q = 1; Q < Y - 1; Q++)
        if (E[Q - 1] * E[Q] <= 0)
          te[Q] = 0;
        else {
          const ne = 2 * V[Q] + V[Q - 1], se = V[Q] + 2 * V[Q - 1];
          te[Q] = (ne + se) / (ne / E[Q - 1] + se / E[Q]);
        }
      te[Y - 1] = E[Y - 2];
      let le = `M${P[0].x.toFixed(2)},${P[0].y.toFixed(2)}`;
      for (let Q = 0; Q < Y - 1; Q++) {
        const ne = V[Q] / 3;
        le += ` C${(P[Q].x + ne).toFixed(2)},${(P[Q].y + te[Q] * ne).toFixed(2)} ${(P[Q + 1].x - ne).toFixed(2)},${(P[Q + 1].y - te[Q + 1] * ne).toFixed(2)} ${P[Q + 1].x.toFixed(2)},${P[Q + 1].y.toFixed(2)}`;
      }
      return le;
    }
    function J(P, Y) {
      if (Y.length === 0)
        return "";
      const V = $.value.top + S.value.h;
      return `${P} L${Y[Y.length - 1].x.toFixed(2)},${V} L${Y[0].x.toFixed(2)},${V} Z`;
    }
    const N = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((P) => ({
        y: $.value.top + S.value.h * P,
        value: M.value * (1 - P)
      }))
    ), G = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((P) => ({
        y: $.value.top + S.value.h * P,
        value: B.value * (1 - P)
      }))
    ), Z = y(() => Math.max(1, Math.ceil(h.value / 8)));
    function W(P) {
      return P === h.value - 1 || P % Z.value === 0;
    }
    function H(P) {
      const Y = P.currentTarget.getBoundingClientRect(), V = P.clientX - Y.left - $.value.left, E = h.value <= 1 ? 1 : S.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / E)));
    }
    const R = y(() => {
      if (i.value === null || h.value === 0)
        return null;
      const P = i.value;
      return {
        i: P,
        x: m(P),
        label: p.value[P],
        rows: _.value.map((Y) => ({
          name: Y.name,
          color: Y.color,
          value: Y.points[P]?.value ?? 0,
          y: Y.pts[P]?.y ?? 0
        }))
      };
    }), ee = y(() => {
      if (!R.value)
        return {};
      const P = R.value.x > s.value * 0.6;
      return {
        left: `${R.value.x}px`,
        top: "8px",
        transform: P ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (P, Y) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: H,
          onMouseleave: Y[0] || (Y[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, j(_.value, (V, E) => (t(), n("linearGradient", {
              id: `pk-fill-${k(f)}-${E}`,
              key: E,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, Bh),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Ah)
            ], 8, Mh))), 128))
          ]),
          e.showAxis ? (t(), n("g", _h, [
            (t(!0), n(z, null, j(N.value, (V) => (t(), n("line", {
              key: V.y,
              x1: $.value.left,
              x2: s.value - $.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, zh))), 128)),
            (t(!0), n(z, null, j(N.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: $.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(V.value)), 9, Ph))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, j(G.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - $.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(V.value)), 9, Lh))), 128)) : x("", !0)
          ])) : x("", !0),
          (t(!0), n(z, null, j(p.value, (V, E) => ge((t(), n("line", {
            key: `v-${E}`,
            x1: m(E),
            x2: m(E),
            y1: $.value.top,
            y2: $.value.top + S.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Oh)), [
            [Ke, W(E)]
          ])), 128)),
          (t(!0), n(z, null, j(_.value, (V, E) => (t(), n("g", {
            key: `s-${E}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${k(f)}-${E})`
            }, null, 8, jh)) : x("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Vh),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Dh)) : x("", !0)
          ]))), 128)),
          R.value ? (t(), n("g", Th, [
            o("line", {
              x1: R.value.x,
              x2: R.value.x,
              y1: $.value.top,
              y2: $.value.top + S.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Ih),
            (t(!0), n(z, null, j(R.value.rows, (V, E) => (t(), n("circle", {
              key: `d-${E}`,
              cx: R.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Eh))), 128))
          ])) : x("", !0),
          (t(!0), n(z, null, j(p.value, (V, E) => ge((t(), n("text", {
            key: `x-${E}`,
            x: m(E),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, Fh)), [
            [Ke, W(E)]
          ])), 128))
        ], 40, Sh)),
        R.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ie(ee.value)
        }, [
          o("p", Nh, c(R.value.label), 1),
          (t(!0), n(z, null, j(R.value.rows, (V, E) => (t(), n("div", {
            key: E,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", Rh, c(V.name || "Value"), 1),
            o("span", Uh, c(b(V.value)), 1)
          ]))), 128))
        ], 4)) : x("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", Hh, [
          (t(!0), n(z, null, j(_.value, (V, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", Kh, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Gh = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Wh = { class: "text-muted-foreground text-[11px] capitalize" }, Zh = { class: "text-sm font-semibold tabular-nums" }, Jh = {
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
    return (l, a) => (t(), n("div", Gh, [
      o("p", Wh, c(e.label), 1),
      o("p", Zh, [
        U(c(e.value) + " ", 1),
        e.share ? (t(), n("span", Jh, " (" + c(e.share) + ") ", 1)) : x("", !0)
      ])
    ]));
  }
}), Yh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Qh = ["width", "height", "viewBox", "aria-label"], Xh = ["d", "fill", "fill-opacity", "onMouseenter"], e1 = ["x", "y"], t1 = ["x", "y"], n1 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, a1 = ["onMouseenter"], l1 = { class: "min-w-0 flex-1 truncate capitalize" }, o1 = { class: "tabular-nums font-medium" }, s1 = { class: "text-muted-foreground w-9 text-right tabular-nums" }, A6 = /* @__PURE__ */ L({
  __name: "PieChart",
  props: {
    data: {},
    height: { default: 220 },
    type: { default: "doughnut" },
    format: {}
  },
  setup(e) {
    const l = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = y(() => l.data.reduce((M, B) => M + B.value, 0)), s = K(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(M) {
      return a[M % a.length];
    }
    function v(M) {
      return 1 - Math.min(0.55, Math.floor(M / a.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const M = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((S, m) => {
        const g = S.value / r.value, _ = g * Math.PI * 2, T = B, F = B + _;
        return B = F, {
          ...S,
          share: g,
          colour: f(m),
          opacity: v(m),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: g >= 0.9999 ? b(M) : $(M, T, F, d.value, u.value)
        };
      });
    });
    function h(M, B, S) {
      return `${(M + Math.cos(B) * S).toFixed(2)},${(M + Math.sin(B) * S).toFixed(2)}`;
    }
    function $(M, B, S, m, g) {
      const _ = S - B > Math.PI ? 1 : 0;
      return g <= 0 ? `M${M},${M} L${h(M, B, m)} A${m},${m} 0 ${_} 1 ${h(M, S, m)} Z` : [
        `M${h(M, B, m)}`,
        `A${m},${m} 0 ${_} 1 ${h(M, S, m)}`,
        `L${h(M, S, g)}`,
        `A${g},${g} 0 ${_} 0 ${h(M, B, g)}`,
        "Z"
      ].join(" ");
    }
    function b(M) {
      const B = d.value, S = u.value, m = [
        `M${M - B},${M}`,
        `A${B},${B} 0 1 1 ${M + B},${M}`,
        `A${B},${B} 0 1 1 ${M - B},${M}`,
        "Z"
      ];
      return S <= 0 ? m.join(" ") : [
        ...m,
        `M${M - S},${M}`,
        `A${S},${S} 0 1 0 ${M + S},${M}`,
        `A${S},${S} 0 1 0 ${M - S},${M}`,
        "Z"
      ].join(" ");
    }
    const w = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M), C = (M) => `${(M * 100).toFixed(M < 0.01 ? 2 : 0)}%`;
    return (M, B) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Yh, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${w(r.value)}`
      }, [
        (t(!0), n(z, null, j(p.value, (S, m) => (t(), n("path", {
          key: m,
          d: S.path,
          fill: S.colour,
          "fill-opacity": s.value === null || s.value === m ? S.opacity : S.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (g) => s.value = m,
          onMouseleave: B[0] || (B[0] = (g) => s.value = null)
        }, null, 40, Xh))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(w(s.value === null ? r.value : p.value[s.value].value)), 9, e1),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, t1)
        ], 64)) : x("", !0)
      ], 8, Qh)),
      o("ul", n1, [
        (t(!0), n(z, null, j(p.value, (S, m) => (t(), n("li", {
          key: m,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === m ? "bg-muted" : ""]),
          onMouseenter: (g) => s.value = m,
          onMouseleave: B[1] || (B[1] = (g) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: S.colour, opacity: S.opacity })
          }, null, 4),
          o("span", l1, c(S.label), 1),
          o("span", o1, c(w(S.value)), 1),
          o("span", s1, c(C(S.share)), 1)
        ], 42, a1))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(vt, {
        key: 0,
        label: p.value[s.value].label,
        value: w(p.value[s.value].value),
        share: C(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), r1 = ["width", "height", "viewBox", "aria-label"], i1 = { class: "text-border" }, d1 = ["x1", "x2", "y1", "y2", "stroke-dasharray"], u1 = { class: "fill-muted-foreground text-[10px]" }, c1 = ["x", "y"], f1 = ["x", "y"], m1 = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], p1 = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, _6 = /* @__PURE__ */ L({
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
    const l = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = K(null), s = K(560), i = K(null);
    let d = null;
    be(() => {
      d = new ResizeObserver((Z) => {
        const W = Z[0]?.contentRect.width ?? 0;
        W > 0 && (s.value = W);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (Z, W) => W.color ?? a[Z % a.length], v = y(() => u.value.flatMap((Z) => Z.points)), p = y(() => v.value.some((Z) => typeof Z.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, $ = y(() => Math.max(10, s.value - h.left - h.right)), b = y(() => Math.max(10, l.height - h.top - h.bottom));
    function w(Z) {
      if (Z.length === 0)
        return [0, 1];
      const W = Math.min(...Z), H = Math.max(...Z), R = H - W || Math.abs(H) || 1;
      return [W - R * 0.08, H + R * 0.08];
    }
    const C = y(() => w(v.value.map((Z) => Z.x))), M = y(() => w(v.value.map((Z) => Z.y))), B = (Z) => {
      const [W, H] = C.value;
      return h.left + (Z - W) / (H - W) * $.value;
    }, S = (Z) => {
      const [W, H] = M.value;
      return h.top + b.value - (Z - W) / (H - W) * b.value;
    }, m = y(() => Math.max(...v.value.map((Z) => Z.r ?? 0), 0));
    function g(Z) {
      if (!p.value || !m.value)
        return 4;
      const W = Math.max(0, Z.r ?? 0) / m.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function _([Z, W]) {
      return Array.from({ length: 5 }, (H, R) => Z + (W - Z) / 4 * R);
    }
    const T = y(() => _(C.value)), F = y(() => _(M.value)), J = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), N = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = y(() => {
      if (!i.value)
        return null;
      const Z = u.value[i.value.s], W = Z?.points[i.value.p];
      return W ? { series: Z, point: W } : null;
    });
    return (Z, W) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "w-full"
    }, [
      (t(), n("svg", {
        width: s.value,
        height: e.height,
        viewBox: `0 0 ${s.value} ${e.height}`,
        class: "overflow-visible",
        role: "img",
        "aria-label": p.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", i1, [
          (t(!0), n(z, null, j(F.value, (H, R) => (t(), n("line", {
            key: `gy-${R}`,
            x1: h.left,
            x2: h.left + $.value,
            y1: S(H),
            y2: S(H),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": R === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, d1))), 128))
        ]),
        o("g", u1, [
          (t(!0), n(z, null, j(F.value, (H, R) => (t(), n("text", {
            key: `ty-${R}`,
            x: h.left - 8,
            y: S(H) + 3,
            "text-anchor": "end"
          }, c(N(H)), 9, c1))), 128)),
          (t(!0), n(z, null, j(T.value, (H, R) => (t(), n("text", {
            key: `tx-${R}`,
            x: B(H),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(J(H)), 9, f1))), 128))
        ]),
        (t(!0), n(z, null, j(u.value, (H, R) => (t(), n("g", {
          key: `s-${R}`
        }, [
          (t(!0), n(z, null, j(H.points, (ee, P) => (t(), n("circle", {
            key: `p-${R}-${P}`,
            cx: B(ee.x),
            cy: S(ee.y),
            r: g(ee),
            fill: f(R, H),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(R, H),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== R || i.value.p !== P) ? 0.35 : 1,
            onMouseenter: (Y) => i.value = { s: R, p: P },
            onMouseleave: W[0] || (W[0] = (Y) => i.value = null)
          }, null, 40, m1))), 128))
        ]))), 128))
      ], 8, r1)),
      G.value ? (t(), D(vt, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${J(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${N(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : x("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", p1, [
        (t(!0), n(z, null, j(u.value, (H, R) => (t(), n("span", {
          key: `l-${R}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ie({ backgroundColor: f(R, H) }),
            "aria-hidden": "true"
          }, null, 4),
          U(" " + c(H.name), 1)
        ]))), 128))
      ])) : x("", !0)
    ], 512));
  }
}), v1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, g1 = ["width", "height", "viewBox"], h1 = ["points"], b1 = ["x1", "y1", "x2", "y2"], y1 = ["points", "fill", "stroke"], x1 = ["cx", "cy", "fill", "onMouseenter"], k1 = ["x", "y", "text-anchor"], $1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, w1 = { class: "truncate" }, z6 = /* @__PURE__ */ L({
  __name: "RadarChart",
  props: {
    series: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], r = y(
      () => l.series.map((S, m) => ({
        ...S,
        color: S.color ?? a[m % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((S) => S.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), f = y(() => d.value / 2 - 34), v = y(() => {
      const S = Math.max(...r.value.flatMap((_) => _.points.map((T) => T.value)), 0);
      if (S <= 0)
        return 1;
      const m = 10 ** Math.floor(Math.log10(S));
      return ([1, 2, 2.5, 5, 10].find((_) => S <= _ * m) ?? 10) * m;
    });
    function p(S) {
      return S / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(S, m) {
      const g = p(S);
      return {
        x: u.value + Math.cos(g) * f.value * m,
        y: u.value + Math.sin(g) * f.value * m
      };
    }
    function $(S) {
      return Array.from({ length: i.value }, (m, g) => {
        const _ = h(g, S);
        return `${_.x.toFixed(2)},${_.y.toFixed(2)}`;
      }).join(" ");
    }
    const b = y(() => [0.25, 0.5, 0.75, 1].map((S) => ({ f: S, points: $(S) }))), w = y(
      () => r.value.map((S) => {
        const m = S.points.map((g) => Math.max(0, g.value) / v.value);
        return {
          name: S.name,
          color: S.color,
          values: S.points,
          outline: m.map((g, _) => {
            const T = h(_, g);
            return `${T.x.toFixed(2)},${T.y.toFixed(2)}`;
          }).join(" "),
          dots: m.map((g, _) => h(_, g))
        };
      })
    ), C = y(
      () => s.value.map((S, m) => {
        const g = p(m), _ = u.value + Math.cos(g) * (f.value + 14), T = u.value + Math.sin(g) * (f.value + 14), F = Math.cos(g);
        return {
          label: S,
          x: _,
          y: T + 3,
          anchor: Math.abs(F) < 0.2 ? "middle" : F > 0 ? "start" : "end"
        };
      })
    ), M = K(null), B = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S);
    return (S, m) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", v1, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(b.value, (g) => (t(), n("polygon", {
          key: g.f,
          points: g.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, h1))), 128)),
        (t(!0), n(z, null, j(s.value, (g, _) => (t(), n("line", {
          key: `spoke-${_}`,
          x1: u.value,
          y1: u.value,
          x2: h(_, 1).x,
          y2: h(_, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, b1))), 128)),
        (t(!0), n(z, null, j(w.value, (g, _) => (t(), n("g", {
          key: `s-${_}`
        }, [
          o("polygon", {
            points: g.outline,
            fill: g.color,
            "fill-opacity": "0.16",
            stroke: g.color,
            "stroke-width": "2"
          }, null, 8, y1),
          (t(!0), n(z, null, j(g.dots, (T, F) => (t(), n("circle", {
            key: F,
            cx: T.x,
            cy: T.y,
            r: "3",
            fill: g.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (J) => M.value = {
              series: g.name,
              axis: s.value[F],
              value: g.values[F]?.value ?? 0
            },
            onMouseleave: m[0] || (m[0] = (J) => M.value = null)
          }, null, 40, x1))), 128))
        ]))), 128)),
        (t(!0), n(z, null, j(C.value, (g, _) => (t(), n("text", {
          key: `l-${_}`,
          x: g.x,
          y: g.y,
          "text-anchor": g.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(g.label), 9, k1))), 128))
      ], 8, g1)),
      e.showLegend ? (t(), n("ul", $1, [
        (t(!0), n(z, null, j(r.value, (g, _) => (t(), n("li", {
          key: _,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: g.color })
          }, null, 4),
          o("span", w1, c(g.name), 1)
        ]))), 128))
      ])) : x("", !0),
      M.value ? (t(), D(vt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: B(M.value.value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), C1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, S1 = ["width", "height", "viewBox"], M1 = ["cx", "cy", "r"], B1 = ["d", "fill", "fill-opacity", "onMouseenter"], A1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, _1 = { class: "min-w-0 flex-1 truncate capitalize" }, z1 = { class: "font-medium tabular-nums" }, P6 = /* @__PURE__ */ L({
  __name: "PolarAreaChart",
  props: {
    data: {},
    height: { default: 240 },
    format: {},
    showLegend: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)",
      "var(--chart-1)"
    ], r = K(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map(($) => Math.max(0, $.value)), 0)), f = y(() => {
      const $ = l.data.length;
      if ($ === 0 || u.value <= 0)
        return [];
      const b = Math.PI * 2 / $;
      return l.data.map((w, C) => {
        const M = Math.sqrt(Math.max(0, w.value) / u.value), B = d.value * M, S = C * b - Math.PI / 2, m = S + b;
        return {
          ...w,
          color: a[C % a.length],
          share: u.value === 0 ? 0 : w.value / u.value,
          path: v(i.value, S, m, B)
        };
      });
    });
    function v($, b, w, C) {
      if (C <= 0)
        return "";
      if (w - b >= Math.PI * 2 - 1e-6)
        return `M${$ - C},${$} A${C},${C} 0 1 1 ${$ + C},${$} A${C},${C} 0 1 1 ${$ - C},${$} Z`;
      const M = w - b > Math.PI ? 1 : 0, B = $ + Math.cos(b) * C, S = $ + Math.sin(b) * C, m = $ + Math.cos(w) * C, g = $ + Math.sin(w) * C;
      return `M${$},${$} L${B.toFixed(2)},${S.toFixed(2)} A${C.toFixed(2)},${C.toFixed(2)} 0 ${M} 1 ${m.toFixed(2)},${g.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map(($) => d.value * $)), h = ($) => l.format ? l.format($) : new Intl.NumberFormat().format($);
    return ($, b) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", C1, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(p.value, (w) => (t(), n("circle", {
          key: w,
          cx: i.value,
          cy: i.value,
          r: w,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, M1))), 128)),
        (t(!0), n(z, null, j(f.value, (w, C) => (t(), n("path", {
          key: C,
          d: w.path,
          fill: w.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === C ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = C,
          onMouseleave: b[0] || (b[0] = (M) => r.value = null)
        }, null, 40, B1))), 128))
      ], 8, S1)),
      e.showLegend ? (t(), n("ul", A1, [
        (t(!0), n(z, null, j(f.value, (w, C) => (t(), n("li", {
          key: C,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: w.color })
          }, null, 4),
          o("span", _1, c(w.label), 1),
          o("span", z1, c(h(w.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      r.value !== null ? (t(), D(vt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), P1 = ["width", "height"], L1 = ["x1", "x2", "y1", "y2"], O1 = ["x", "y"], j1 = ["x", "y"], V1 = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], D1 = ["x", "y", "width", "height", "fill", "fill-opacity"], T1 = ["d", "stroke"], I1 = ["cx", "cy", "fill"], E1 = ["x", "y"], F1 = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, N1 = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, R1 = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, U1 = { class: "text-xs font-semibold tabular-nums" }, H1 = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, K1 = { class: "text-muted-foreground" }, L6 = /* @__PURE__ */ L({
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
    const l = e, a = K(null), r = K(560), s = K(null);
    let i = null;
    be(() => {
      i = new ResizeObserver((R) => {
        r.value = Math.max(160, R[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = y(
      () => l.bars.map((R, ee) => ({
        ...R,
        color: R.color ?? d[ee % d.length]
      }))
    ), v = y(
      () => l.lines.map((R, ee) => ({
        ...R,
        color: R.color ?? u[ee % u.length]
      }))
    ), p = y(
      () => f.value[0]?.points.map((R) => R.label) ?? v.value[0]?.points.map((R) => R.label) ?? []
    ), h = y(() => p.value.length), $ = y(() => l.lineAxis === "right"), b = y(() => ({
      top: 12,
      right: $.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), w = y(() => ({
      w: Math.max(1, r.value - b.value.left - b.value.right),
      h: Math.max(1, l.height - b.value.top - b.value.bottom)
    }));
    function C(R) {
      const ee = Math.max(...R, 0);
      if (ee <= 0)
        return 1;
      const P = 10 ** Math.floor(Math.log10(ee));
      return ([1, 2, 2.5, 5, 10].find((V) => ee <= V * P) ?? 10) * P;
    }
    const M = y(
      () => C([
        ...f.value.flatMap((R) => R.points.map((ee) => ee.value)),
        ...$.value ? [] : v.value.flatMap((R) => R.points.map((ee) => ee.value))
      ])
    ), B = y(
      () => $.value ? C(v.value.flatMap((R) => R.points.map((ee) => ee.value))) : M.value
    ), S = y(() => w.value.w / Math.max(1, h.value)), m = y(() => S.value * 0.6), g = y(() => m.value / Math.max(1, f.value.length));
    function _(R) {
      return b.value.left + R * S.value + S.value / 2;
    }
    const T = y(
      () => f.value.flatMap(
        (R, ee) => R.points.map((P, Y) => {
          const V = Math.max(0, P.value) / M.value * w.value.h;
          return {
            x: _(Y) - m.value / 2 + ee * g.value,
            y: b.value.top + w.value.h - V,
            w: Math.max(0, g.value - 2),
            h: V,
            color: R.color,
            index: Y,
            name: R.name,
            value: P.value,
            label: P.label
          };
        })
      )
    ), F = y(
      () => v.value.map((R) => {
        const ee = R.points.map((P, Y) => ({
          x: _(Y),
          y: b.value.top + w.value.h - Math.max(0, P.value) / B.value * w.value.h,
          value: P.value
        }));
        return {
          ...R,
          pts: ee,
          d: ee.map((P, Y) => `${Y === 0 ? "M" : "L"}${P.x.toFixed(2)},${P.y.toFixed(2)}`).join(" ")
        };
      })
    ), J = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((R) => ({
        y: b.value.top + w.value.h * R,
        left: M.value * (1 - R),
        right: B.value * (1 - R)
      }))
    ), N = y(() => Math.max(1, Math.ceil(h.value / 10)));
    function G(R) {
      return R === h.value - 1 || R % N.value === 0;
    }
    const Z = (R) => l.format ? l.format(R) : W(R);
    function W(R) {
      return Math.abs(R) >= 1e6 ? `${(R / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(R) >= 1e3 ? `${(R / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(R * 100) / 100);
    }
    const H = y(() => {
      if (s.value === null)
        return null;
      const R = s.value;
      return {
        label: p.value[R],
        rows: [
          ...f.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[R]?.value ?? 0
          })),
          ...v.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[R]?.value ?? 0
          }))
        ]
      };
    });
    return (R, ee) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: ee[0] || (ee[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, j(J.value, (P) => (t(), n("line", {
            key: `g-${P.y}`,
            x1: b.value.left,
            x2: r.value - b.value.right,
            y1: P.y,
            y2: P.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, L1))), 128)),
          (t(!0), n(z, null, j(J.value, (P) => (t(), n("text", {
            key: `lt-${P.y}`,
            x: b.value.left - 8,
            y: P.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(P.left)), 9, O1))), 128)),
          $.value ? (t(!0), n(z, { key: 0 }, j(J.value, (P) => (t(), n("text", {
            key: `rt-${P.y}`,
            x: r.value - b.value.right + 8,
            y: P.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(P.right)), 9, j1))), 128)) : x("", !0),
          (t(!0), n(z, null, j(p.value, (P, Y) => (t(), n("rect", {
            key: `hit-${Y}`,
            x: b.value.left + Y * S.value,
            y: b.value.top,
            width: S.value,
            height: w.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === Y ? 0.4 : 0,
            onMouseenter: (V) => s.value = Y
          }, null, 40, V1))), 128)),
          (t(!0), n(z, null, j(T.value, (P, Y) => (t(), n("rect", {
            key: `b-${Y}`,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.color,
            "fill-opacity": s.value === null || s.value === P.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, D1))), 128)),
          (t(!0), n(z, null, j(F.value, (P, Y) => (t(), n("g", {
            key: `l-${Y}`
          }, [
            o("path", {
              d: P.d,
              fill: "none",
              stroke: P.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, T1),
            s.value !== null && P.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: P.pts[s.value].x,
              cy: P.pts[s.value].y,
              r: "4",
              fill: P.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, I1)) : x("", !0)
          ]))), 128)),
          (t(!0), n(z, null, j(p.value, (P, Y) => ge((t(), n("text", {
            key: `x-${Y}`,
            x: _(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(P), 9, E1)), [
            [Ke, G(Y)]
          ])), 128))
        ], 40, P1)),
        H.value ? (t(), n("div", F1, [
          o("p", N1, c(H.value.label), 1),
          (t(!0), n(z, null, j(H.value.rows, (P, Y) => (t(), n("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: P.color })
            }, null, 4),
            o("span", R1, c(P.name), 1),
            o("span", U1, c(Z(P.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend ? (t(), n("div", H1, [
          (t(!0), n(z, null, j([...f.value, ...v.value], (P, Y) => (t(), n("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: P.color })
            }, null, 4),
            o("span", K1, c(P.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), q1 = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, G1 = { class: "text-muted-foreground" }, W1 = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Z1 = ["width", "height"], J1 = ["x", "y"], Y1 = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Q1 = ["x", "y"], X1 = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, eb = { class: "text-[11px] font-medium capitalize" }, tb = { class: "text-muted-foreground text-[11px] capitalize" }, nb = { class: "text-sm font-semibold tabular-nums" }, ab = { class: "text-muted-foreground text-xs font-normal" }, O6 = /* @__PURE__ */ L({
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
    const l = e, a = K(null), r = K(560), s = K(null);
    let i = null;
    be(() => {
      i = new ResizeObserver((m) => {
        r.value = Math.max(160, m[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((m) => m.label) ?? []), u = y(() => l.series.length), f = y(() => d.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - v.value - 8)), h = y(() => p.value / Math.max(1, f.value)), $ = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function b(m) {
      if (m === 0)
        return "var(--muted)";
      const g = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(m / g * 100)}%, var(--muted))`;
    }
    function w(m) {
      for (let g = 0; g < l.buckets.length; g++) {
        const _ = l.buckets[g].max;
        if (_ === void 0 || m < _)
          return g;
      }
      return l.buckets.length - 1;
    }
    const C = y(
      () => l.series.flatMap(
        (m, g) => m.points.map((_, T) => {
          const F = w(_.value);
          return {
            row: g,
            col: T,
            x: v.value + T * h.value,
            y: 4 + g * $.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, $.value - 4),
            colour: b(F),
            label: _.label,
            value: _.value,
            rowName: m.name,
            bucketLabel: l.buckets[F].label
          };
        })
      )
    ), M = y(() => h.value < 2), B = y(() => s.value ? C.value.find((m) => m.row === s.value.row && m.col === s.value.col) ?? null : null), S = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, g) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", q1, [
          (t(!0), n(z, null, j(e.buckets, (_, T) => (t(), n("span", {
            key: T,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ie({ background: b(T) })
            }, null, 4),
            o("span", G1, c(_.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), n("p", W1, c(f.value) + " columns - too many to label individually ", 1)) : x("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: g[0] || (g[0] = (_) => s.value = null)
        }, [
          (t(!0), n(z, null, j(e.series, (_, T) => (t(), n("text", {
            key: `r-${T}`,
            x: v.value - 10,
            y: 4 + T * $.value + $.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(_.name), 9, J1))), 128)),
          (t(!0), n(z, null, j(C.value, (_, T) => (t(), n("rect", {
            key: T,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.colour,
            "fill-opacity": s.value === null || s.value.row === _.row && s.value.col === _.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (F) => s.value = { row: _.row, col: _.col }
          }, null, 40, Y1))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), n(z, { key: 0 }, j(d.value, (_, T) => (t(), n("text", {
            key: `c-${T}`,
            x: v.value + T * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(_), 9, Q1))), 128)) : x("", !0)
        ], 40, Z1)),
        B.value ? (t(), n("div", X1, [
          o("p", eb, c(B.value.label), 1),
          o("p", tb, c(B.value.rowName), 1),
          o("p", nb, [
            U(c(S(B.value.value)) + " ", 1),
            o("span", ab, "(" + c(B.value.bucketLabel) + ")", 1)
          ])
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), lb = ["viewBox"], ob = { key: 0 }, sb = ["id"], rb = ["stop-color"], ib = ["stop-color"], db = ["d", "fill"], ub = ["d", "stroke"], Mn = 100, st = 30, zt = /* @__PURE__ */ L({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = Math.random().toString(36).slice(2, 9), r = y(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const f = Math.min(...u), p = Math.max(...u) - f || 1;
      return u.map((h, $) => ({
        x: $ / (u.length - 1) * Mn,
        y: st - (h - f) / p * (st - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const v = [], p = [];
      for (let b = 0; b < f - 1; b++)
        v[b] = u[b + 1].x - u[b].x, p[b] = v[b] === 0 ? 0 : (u[b + 1].y - u[b].y) / v[b];
      const h = [p[0]];
      for (let b = 1; b < f - 1; b++)
        if (p[b - 1] * p[b] <= 0)
          h[b] = 0;
        else {
          const w = 2 * v[b] + v[b - 1], C = v[b] + 2 * v[b - 1];
          h[b] = (w + C) / (w / p[b - 1] + C / p[b]);
        }
      h[f - 1] = p[f - 2];
      let $ = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let b = 0; b < f - 1; b++) {
        const w = v[b] / 3;
        $ += ` C${(u[b].x + w).toFixed(2)},${(u[b].y + h[b] * w).toFixed(2)} ${(u[b + 1].x - w).toFixed(2)},${(u[b + 1].y - h[b + 1] * w).toFixed(2)} ${u[b + 1].x.toFixed(2)},${u[b + 1].y.toFixed(2)}`;
      }
      return $;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((f, v) => `${v === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${st} L${u[0].x.toFixed(2)},${st} Z`;
    });
    return (u, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${Mn} ${st}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ie({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", ob, [
        o("linearGradient", {
          id: `pk-spark-${k(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, rb),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, ib)
        ], 8, sb)
      ])) : x("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(a)})`
      }, null, 8, db)) : x("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, ub)
    ], 12, lb)) : x("", !0);
  }
}), cb = { class: "flex items-center gap-1 text-xs" }, fb = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, mb = {
  key: 0,
  class: "text-muted-foreground truncate"
}, la = /* @__PURE__ */ L({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = y(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = y(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = y(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = y(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), n("span", cb, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", fb, c(s.value), 1),
        U(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", mb, c(e.comparison), 1)) : x("", !0)
    ]));
  }
}), pb = ["data-collapsed"], vb = { class: "flex flex-wrap items-start justify-between gap-2" }, gb = { class: "flex min-w-0 items-start gap-2" }, hb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bb = ["d"], yb = { class: "min-w-0" }, xb = { class: "text-sm font-medium" }, kb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, $b = { class: "flex shrink-0 items-center gap-1.5" }, wb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Cb = ["aria-pressed", "onClick"], Sb = ["aria-expanded", "aria-label", "title"], Mb = ["aria-label"], Bb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ab = ["d"], _b = /* @__PURE__ */ L({
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
    const l = e, a = Gt(), r = K(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", vb, [
        o("div", gb, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", hb, [
              o("path", {
                d: k(me)(e.icon)
              }, null, 8, bb)
            ])) : x("", !0)
          ]),
          o("div", yb, [
            o("p", xb, c(e.label), 1),
            e.description ? (t(), n("p", kb, c(e.description), 1)) : x("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        o("div", $b, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", wb, [
            (t(!0), n(z, null, j(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (v) => d.$emit("update:period", f.value)
            }, c(f.label), 11, Cb))), 128))
          ])) : x("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (f) => r.value = !r.value)
          }, [
            (t(), n("svg", {
              class: A(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, Sb)) : x("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), n("svg", Bb, [
              o("path", {
                d: k(me)("eye-off")
              }, null, 8, Ab)
            ]))
          ], 8, Mb)) : x("", !0)
        ])
      ]),
      r.value ? x("", !0) : (t(), n("div", {
        key: 0,
        style: ie(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: ie({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : q(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, pb));
  }
}), zb = ["aria-pressed", "aria-label", "title"], Pb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lb = ["d"], Ob = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, jb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Vb = ["href"], Db = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tb = ["d"], Ib = ["aria-label", "onClick"], Eb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fb = ["d"], Nb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rb = ["d"], Ub = {
  key: 0,
  class: "flex flex-col gap-1"
}, Hb = ["onClick"], Kb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qb = ["d"], Gb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Wb = /* @__PURE__ */ L({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = K(!1), i = K(!1), d = y(
      () => a.catalog.filter((v) => !a.items.some((p) => p.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== v)
      );
    }
    function f(v) {
      r("update:items", [...a.items, v]), i.value = !1;
    }
    return (v, p) => (t(), n(z, null, [
      I(_b, {
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
            (t(), n("svg", Pb, [
              o("path", {
                d: k(me)(s.value ? "check" : "pencil")
              }, null, 8, Lb)
            ]))
          ], 8, zb)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), n("div", Ob, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            I(ce, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...p[6] || (p[6] = [
                U("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", jb, [
            (t(!0), n(z, null, j(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Db, [
                  o("path", {
                    d: k(me)(h.icon)
                  }, null, 8, Tb)
                ])),
                U(" " + c(h.label), 1)
              ], 8, Vb),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: ($) => u(h.id)
              }, [
                (t(), n("svg", Eb, [
                  o("path", {
                    d: k(me)("x")
                  }, null, 8, Fb)
                ]))
              ], 8, Ib)) : x("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Nb, [
                o("path", {
                  d: k(me)("plus")
                }, null, 8, Rb)
              ])),
              p[8] || (p[8] = U(" Add ", -1))
            ])) : x("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(ut, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: O(() => [
          I(ce, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...p[9] || (p[9] = [
              U("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          d.value.length ? (t(), n("ul", Ub, [
            (t(!0), n(z, null, j(d.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: ($) => f(h)
              }, [
                (t(), n("svg", Kb, [
                  o("path", {
                    d: k(me)(h.icon)
                  }, null, 8, qb)
                ])),
                U(" " + c(h.label), 1)
              ], 8, Hb)
            ]))), 128))
          ])) : (t(), n("p", Gb, " Every catalog shortcut is already on the card. "))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Zb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Jb = { class: "flex flex-1 flex-col gap-1 p-4" }, Yb = { class: "text-muted-foreground relative text-xs font-medium" }, Qb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Xb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, ey = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ty = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, j6 = /* @__PURE__ */ L({
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
    const l = (a) => typeof a == "number" ? new Intl.NumberFormat().format(a) : String(a ?? "-");
    return (a, r) => (t(), n("div", Zb, [
      o("div", Jb, [
        o("p", Yb, c(e.label), 1),
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Qb, " Could not load ")) : (t(), n("span", Xb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(la, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", ey, c(e.description), 1)) : x("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", ty, [
        I(zt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : x("", !0)
    ]));
  }
}), ny = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, ay = { class: "flex flex-col gap-1 p-4" }, ly = { class: "flex items-start justify-between gap-2" }, oy = { class: "text-sm font-medium" }, sy = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, ry = { class: "mt-1 flex flex-wrap items-center gap-2" }, iy = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, dy = {
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
    const l = e, a = y(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = y(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = y(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", ny, [
      o("div", ay, [
        o("div", ly, [
          o("p", oy, c(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", sy, c(e.caption), 1)) : x("", !0),
        o("div", ry, [
          e.loading ? (t(), D(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", iy, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : x("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", dy, [
        I(zt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : x("", !0)
    ]));
  }
}), uy = { class: "relative flex flex-col gap-2" }, cy = ["aria-label"], fy = ["onMouseenter"], my = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, py = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, vy = { class: "truncate" }, gy = { class: "text-sm font-semibold tabular-nums" }, V6 = /* @__PURE__ */ L({
  __name: "SegmentedBar",
  props: {
    segments: {},
    total: { default: null },
    format: {},
    showLegend: { type: Boolean, default: !0 },
    height: { default: 8 }
  },
  setup(e) {
    const l = e, a = [
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
          color: v.color ?? a[p % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: v.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), u = K(null), f = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), n("div", uy, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ie({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, j(i.value, (h, $) => (t(), n("span", {
          key: $,
          class: A(["h-full transition-all", [
            $ === 0 ? "rounded-l-full" : "",
            $ === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: ie({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === $ ? 1 : 0.4
          }),
          onMouseenter: (b) => u.value = $,
          onMouseleave: p[0] || (p[0] = (b) => u.value = null)
        }, null, 46, fy))), 128))
      ], 12, cy),
      e.showLegend ? (t(), n("div", my, [
        (t(!0), n(z, null, j(i.value, (h, $) => (t(), n("div", {
          key: $,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", py, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: h.color })
            }, null, 4),
            o("span", vy, c(h.label), 1)
          ]),
          o("span", gy, c(d(h.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      u.value !== null ? (t(), D(vt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), hy = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, by = ["data-heading"], yy = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, xy = { class: "text-muted-foreground truncate" }, ky = ["aria-label"], D6 = /* @__PURE__ */ L({
  __name: "StatListChart",
  props: {
    rows: {}
  },
  setup(e) {
    const l = e, a = {
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
        const d = i.bar.segments.reduce((f, v) => f + Math.max(0, v.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
        return {
          ...i,
          segments: i.bar.segments.map((f) => ({
            ...f,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: f.value > 0 ? `max(2px, ${(Math.max(0, f.value) / u * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, d) => (t(), n("div", hy, [
      (t(!0), n(z, null, j(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), n("div", yy, [
          o("span", xy, c(u.label), 1),
          o("span", {
            class: A(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, c(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(z, null, j(u.segments, (f, v) => (t(), n("span", {
            key: v,
            class: A(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: ie({ width: f.width })
          }, null, 6))), 128))
        ], 8, ky)) : x("", !0)
      ], 8, by))), 128))
    ]));
  }
}), $y = {
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
}, wy = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function Cy(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Sy(e, l) {
  return l || (e ? $y[Cy(e)] ?? "neutral" : "neutral");
}
function My(e, l) {
  return wy[Sy(e, l)];
}
const $e = /* @__PURE__ */ L({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => My(l.status, l.tone));
    return (r, s) => (t(), D(We, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: O(() => [
        q(r.$slots, "default", {}, () => [
          U(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), By = ["data-layout"], Ay = ["src", "alt"], _y = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, zy = ["src"], Py = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Ly = ["onMouseenter"], Oy = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, jy = { class: "min-w-0" }, Vy = { class: "truncate text-sm font-medium" }, Dy = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Ty = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Iy = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Ey = { class: "min-w-0" }, Fy = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Ny = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Ry = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Uy = ["d"], Hy = ["aria-label"], Ky = /* @__PURE__ */ L({
  __name: "CatalogCard",
  props: {
    item: {},
    layout: { default: "grid" }
  },
  emits: ["select", "cart"],
  setup(e, { emit: l }) {
    const a = {
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-destructive",
      info: "bg-info",
      neutral: "bg-muted-foreground/40"
    }, r = e, s = l, i = K(0);
    function d(C) {
      if (typeof C != "string")
        return null;
      const M = C.trim();
      return M === "" ? null : /^(https?:)?\/\//i.test(M) ? M : null;
    }
    const u = y(() => {
      const C = [r.item.image, ...r.item.images ?? []].map(d).filter((M) => M !== null);
      return [...new Set(C)];
    }), f = y(() => u.value[i.value] ?? u.value[0] ?? null), v = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((C) => C[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const C = r.item.progress;
      if (!C)
        return null;
      const M = Math.max(C.total ?? 100, C.value, 1);
      return `${Math.min(100, Math.max(0, C.value / M * 100)).toFixed(2)}%`;
    }), h = y(() => u.value.length > 1 ? u.value[1] : null), $ = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), b = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function w(C) {
      C.stopPropagation(), s("cart", r.item.key);
    }
    return (C, M) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: M[0] || (M[0] = (B) => s("select", e.item.key)),
      onKeydown: M[1] || (M[1] = Tt(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: M[2] || (M[2] = (B) => i.value = 0)
    }, [
      o("div", {
        class: A([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        f.value ? (t(), n("img", {
          key: 0,
          src: f.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, Ay)) : (t(), n("span", _y, c(v.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, zy)) : x("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", Py, [
          (t(!0), n(z, null, j(u.value, (B, S) => (t(), n("span", {
            key: S,
            class: A(["size-1.5 rounded-full", S === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (m) => i.value = S
          }, null, 42, Ly))), 128))
        ])) : x("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Oy, [
          o("div", jy, [
            o("p", Vy, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", Dy, c(e.item.caption), 1)) : x("", !0),
            e.item.facts?.length ? (t(), n("p", Ty, c(e.item.facts.join(" · ")), 1)) : x("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : x("", !0)
        ]),
        o("div", Iy, [
          o("div", Ey, [
            e.item.price ? (t(), n("p", Fy, c(e.item.price), 1)) : x("", !0),
            b.value ? (t(), n("p", Ny, c(b.value), 1)) : x("", !0)
          ]),
          $.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: w
          }, [
            (t(), n("svg", Ry, [
              o("path", {
                d: k(me)("cart")
              }, null, 8, Uy)
            ]))
          ])) : x("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: A(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: ie({ width: p.value })
          }, null, 6)
        ], 8, Hy)) : x("", !0)
      ], 2)
    ], 42, By));
  }
});
function qy(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Gy(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Wy(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Zy = ["data-featured", "data-recommended"], Jy = { class: "flex flex-col gap-1" }, Yy = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Qy = { key: 0 }, Xy = { key: 1 }, ex = { key: 2 }, tx = { key: 3 }, nx = { class: "text-sm font-semibold" }, ax = { class: "flex items-baseline gap-1" }, lx = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, ox = { class: "text-muted-foreground text-sm font-normal" }, sx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, rx = { class: "text-muted-foreground mt-1 text-xs" }, ix = { class: "flex flex-1 flex-col gap-2 text-sm" }, dx = { class: "flex min-w-0 items-start gap-2" }, ux = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, cx = ["d"], fx = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, mx = ["d"], px = { class: "capitalize" }, vx = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, gx = { class: "text-foreground font-medium" }, hx = { class: "mt-auto flex gap-2 pt-2" }, bx = /* @__PURE__ */ L({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.plan.priceFormatted ?? String(a.plan.price)), i = y(() => !!(a.plan.featured || a.plan.recommended)), d = y(() => {
      const f = a.plan.perks ?? {};
      return Object.entries(f).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: Wy(p.value),
        display: Gy(p.value)
      }));
    }), u = y(() => a.plan.extraPerks ?? []);
    return (f, v) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Jy, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Yy, [
          e.plan.recommended ? (t(), n("span", Qy, "Recommended")) : e.plan.featured ? (t(), n("span", Xy, "Featured")) : x("", !0),
          e.plan.trial ? (t(), n("span", ex, "Trial")) : x("", !0),
          e.plan.active === !1 ? (t(), n("span", tx, "Inactive")) : x("", !0)
        ])) : x("", !0),
        o("h3", nx, c(e.plan.name), 1),
        o("p", ax, [
          o("span", lx, c(s.value), 1),
          o("span", ox, c(k(qy)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", sx, c(e.plan.shortDescription), 1)) : x("", !0),
        o("p", rx, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", ix, [
        (t(!0), n(z, null, j(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", dx, [
            o("span", {
              class: A(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", ux, [
                o("path", {
                  d: k(me)("check")
                }, null, 8, cx)
              ])) : (t(), n("svg", fx, [
                o("path", {
                  d: k(me)("x")
                }, null, 8, mx)
              ]))
            ], 2),
            o("span", px, c(p.label), 1)
          ]),
          p.display ? (t(), n("span", vx, c(p.display), 1)) : x("", !0)
        ]))), 128)),
        (t(!0), n(z, null, j(u.value, (p, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", gx, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", hx, [
        I(ce, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: O(() => [...v[2] || (v[2] = [
            U(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(ce, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: O(() => [...v[3] || (v[3] = [
            U(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Zy));
  }
}), yx = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, xx = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, kx = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, $x = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, wx = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, T6 = /* @__PURE__ */ L({
  __name: "PlanGrid",
  props: {
    plans: {},
    title: {},
    description: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["create", "edit", "delete"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, s) => (t(), n("div", {
      class: A(["w-full space-y-6", e.embedded ? "" : k(nt)]),
      "data-slot": "plan-grid"
    }, [
      o("header", yx, [
        o("div", null, [
          e.title ? (t(), n("h1", xx, c(e.title), 1)) : x("", !0),
          e.description ? (t(), n("p", kx, c(e.description), 1)) : x("", !0)
        ]),
        I(ce, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: O(() => [...s[3] || (s[3] = [
            U("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", $x, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", wx, [
        (t(!0), n(z, null, j(e.plans, (i) => (t(), D(bx, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Cx = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Sx = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Mx = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Bx = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ax = { class: "space-y-1.5" }, _x = { class: "space-y-1.5" }, zx = { class: "space-y-1.5" }, Px = { class: "space-y-1.5" }, Lx = { class: "space-y-1.5" }, Ox = { class: "flex items-center gap-3 text-sm" }, jx = { class: "flex items-center gap-3 text-sm" }, Vx = { class: "flex items-center gap-3 text-sm" }, Dx = {
  key: 0,
  class: "space-y-1.5"
}, Tx = { class: "flex items-center gap-3 text-sm" }, Ix = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ex = { class: "space-y-1.5" }, Fx = ["value"], Nx = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Rx = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ux = ["id", "value", "onInput"], Hx = { class: "space-y-2" }, Kx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, qx = ["d"], I6 = /* @__PURE__ */ L({
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
    const a = () => ({
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
    }), r = e, s = l, i = dt(a());
    function d(S, m) {
      const g = i.perks?.[S]?.value;
      return g ?? m;
    }
    function u(S, m, g) {
      const _ = i.perks?.[S];
      i.perks = {
        ...i.perks ?? {},
        [S]: {
          value: m,
          overview: g ?? _?.overview ?? ""
        }
      };
    }
    function f(S, m) {
      const g = i.perks?.[S];
      i.perks = {
        ...i.perks ?? {},
        [S]: {
          value: g?.value ?? (S === "modules" ? [] : 0),
          overview: m
        }
      };
    }
    function v(S) {
      const m = S ? { ...a(), ...S } : a();
      i.id = m.id, i.name = m.name, i.shortDescription = m.shortDescription ?? "", i.description = m.description ?? "", i.days = m.days, i.price = m.price, i.featured = m.featured ?? !1, i.recommended = m.recommended ?? !1, i.trial = m.trial ?? !1, i.trialDays = m.trialDays ?? 0, i.active = m.active ?? !0, i.perks = { ...m.perks ?? {} }, i.extraPerks = [...m.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    v(r.plan), pe(
      () => r.plan,
      (S) => v(S),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const S = d("modules", []);
        return Array.isArray(S) ? S.map(String) : [];
      },
      set: (S) => {
        u(
          "modules",
          $(S.map(String)),
          i.perks?.modules?.overview ?? ""
        );
      }
    }), h = y(
      () => r.modules.map((S) => ({ value: S.key, label: S.label }))
    );
    function $(S) {
      const m = Object.fromEntries(r.modules.map((T) => [T.key, T])), g = new Set(S);
      for (const T of r.modules)
        if (!g.has(T.key))
          for (const F of T.children ?? [])
            g.delete(F);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (const T of [...g])
          for (const F of m[T]?.requires ?? [])
            g.has(F) || (g.add(F), _ = !0);
      }
      return [...g];
    }
    function b() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function w(S) {
      i.extraPerks = (i.extraPerks ?? []).filter((m, g) => g !== S);
    }
    function C() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((S) => S.key.trim() !== "")
      });
    }
    const M = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`;
    return (S, m) => (t(), n("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : k(nt)]),
      "data-slot": "plan-editor",
      onSubmit: he(C, ["prevent"])
    }, [
      o("header", Cx, [
        o("div", null, [
          o("h1", Sx, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          m[13] || (m[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        I(ce, {
          type: "button",
          variant: "outline",
          onClick: m[0] || (m[0] = (g) => s("cancel"))
        }, {
          default: O(() => [...m[14] || (m[14] = [
            U("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Mx, [
        o("section", Bx, [
          m[26] || (m[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Ax, [
            I(ze, { for: "plan-name" }, {
              default: O(() => [...m[15] || (m[15] = [
                U("Plan name", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": m[1] || (m[1] = (g) => i.name = g),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", _x, [
            I(ze, { for: "plan-short" }, {
              default: O(() => [...m[16] || (m[16] = [
                U("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": m[2] || (m[2] = (g) => i.shortDescription = g),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", zx, [
            I(ze, { for: "plan-description" }, {
              default: O(() => [...m[17] || (m[17] = [
                U("Plan description", -1)
              ])]),
              _: 1
            }),
            ge(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": m[3] || (m[3] = (g) => i.description = g),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(B)
            }, null, 512), [
              [_e, i.description]
            ])
          ]),
          o("div", Px, [
            I(ze, { for: "plan-days" }, {
              default: O(() => [...m[18] || (m[18] = [
                U("Duration", -1)
              ])]),
              _: 1
            }),
            ge(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": m[4] || (m[4] = (g) => i.days = g),
              class: A(M)
            }, [...m[19] || (m[19] = [
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
          o("div", Lx, [
            I(ze, { for: "plan-price" }, {
              default: O(() => [...m[20] || (m[20] = [
                U("Price", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": m[5] || (m[5] = (g) => i.price = Number(g))
            }, null, 8, ["model-value"])
          ]),
          o("label", Ox, [
            I(k(Je), {
              checked: !!i.featured,
              "onUpdate:checked": m[6] || (m[6] = (g) => i.featured = g)
            }, null, 8, ["checked"]),
            m[21] || (m[21] = U(" Featured ", -1))
          ]),
          o("label", jx, [
            I(k(Je), {
              checked: !!i.recommended,
              "onUpdate:checked": m[7] || (m[7] = (g) => i.recommended = g)
            }, null, 8, ["checked"]),
            m[22] || (m[22] = U(" Recommended ", -1))
          ]),
          o("label", Vx, [
            I(k(Je), {
              checked: !!i.trial,
              "onUpdate:checked": m[8] || (m[8] = (g) => i.trial = g)
            }, null, 8, ["checked"]),
            m[23] || (m[23] = U(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", Dx, [
            I(ze, { for: "plan-trial-days" }, {
              default: O(() => [...m[24] || (m[24] = [
                U("Trial days", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": m[9] || (m[9] = (g) => i.trialDays = Number(g))
            }, null, 8, ["model-value"])
          ])) : x("", !0),
          o("label", Tx, [
            I(k(Je), {
              checked: i.active !== !1,
              "onUpdate:checked": m[10] || (m[10] = (g) => i.active = g)
            }, null, 8, ["checked"]),
            m[25] || (m[25] = U(" Active ", -1))
          ]),
          I(ce, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              U(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Ix, [
          m[33] || (m[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Ex, [
            I(ze, null, {
              default: O(() => [...m[27] || (m[27] = [
                U("Modules access", -1)
              ])]),
              _: 1
            }),
            I(tn, {
              modelValue: p.value,
              "onUpdate:modelValue": m[11] || (m[11] = (g) => p.value = g),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            I(ze, { for: "plan-modules-overview" }, {
              default: O(() => [...m[28] || (m[28] = [
                U("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(B),
              onInput: m[12] || (m[12] = (g) => f("modules", g.target.value))
            }, null, 40, Fx)
          ]),
          (t(!0), n(z, null, j(e.limits, (g) => (t(), n("div", {
            key: g.key,
            class: "space-y-1.5"
          }, [
            g.kind === "toggle" ? (t(), n("label", Nx, [
              I(k(Je), {
                checked: !!d(g.key, !1),
                "onUpdate:checked": (_) => u(
                  g.key,
                  _,
                  i.perks?.[g.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              U(" " + c(g.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              I(ze, {
                for: `plan-limit-${g.key}`
              }, {
                default: O(() => [
                  U(c(g.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              g.hint ? (t(), n("p", Rx, c(g.hint), 1)) : x("", !0),
              I(we, {
                id: `plan-limit-${g.key}`,
                "model-value": Number(d(g.key, 0)),
                type: "number",
                step: g.step ?? 1,
                required: "",
                "onUpdate:modelValue": (_) => u(
                  g.key,
                  Number(_),
                  i.perks?.[g.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              m[29] || (m[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Use -1 for Unlimited. ", -1))
            ], 64)),
            I(ze, {
              for: `plan-overview-${g.key}`
            }, {
              default: O(() => [...m[30] || (m[30] = [
                U("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${g.key}`,
              value: i.perks?.[g.key]?.overview ?? "",
              class: A(B),
              onInput: (_) => f(g.key, _.target.value)
            }, null, 40, Ux)
          ]))), 128)),
          o("div", Hx, [
            m[32] || (m[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, j(i.extraPerks ?? [], (g, _) => (t(), n("div", {
              key: _,
              class: "flex items-center gap-2"
            }, [
              I(we, {
                modelValue: g.key,
                "onUpdate:modelValue": (T) => g.key = T,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(we, {
                modelValue: g.value,
                "onUpdate:modelValue": (T) => g.value = T,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(ce, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (T) => w(_)
              }, {
                default: O(() => [
                  (t(), n("svg", Kx, [
                    o("path", {
                      d: k(me)("x")
                    }, null, 8, qx)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            I(ce, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: b
            }, {
              default: O(() => [...m[31] || (m[31] = [
                U(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Gx = ["data-current", "data-recommended"], Wx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, Zx = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, Jx = { class: "text-sm font-semibold" }, Yx = { class: "flex items-baseline gap-1" }, Qx = { class: "text-4xl font-bold tracking-tight tabular-nums" }, Xx = { class: "text-muted-foreground text-sm font-normal" }, e0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, t0 = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, n0 = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, a0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, l0 = ["d"], o0 = { class: "text-muted-foreground" }, s0 = {
  key: 3,
  class: "flex-1"
}, r0 = {
  key: 4,
  class: "mt-auto pt-2"
}, E6 = /* @__PURE__ */ L({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.annual && a.plan.annualPrice !== void 0 ? a.plan.annualPriceFormatted ?? String(a.plan.annualPrice) : a.plan.priceFormatted ?? String(a.plan.price)), i = y(() => a.annual && a.plan.annualPrice !== void 0 ? "year" : a.plan.interval ?? "month"), d = y(() => !!a.plan.recommended && !a.plan.current);
    return (u, f) => (t(), n("article", {
      class: A([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), n("span", Wx, " Most popular ")) : e.plan.current ? (t(), n("span", Zx, " Current plan ")) : x("", !0),
      o("header", {
        class: A(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", Jx, c(e.plan.name), 1),
        o("p", Yx, [
          o("span", Qx, c(s.value), 1),
          o("span", Xx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), n("p", e0, c(e.plan.description), 1)) : x("", !0)
      ], 2),
      e.plan.features?.length ? (t(), n("ul", t0, [
        (t(!0), n(z, null, j(e.plan.features, (v, p) => (t(), n("li", {
          key: p,
          class: "flex items-start gap-2"
        }, [
          o("span", n0, [
            (t(), n("svg", a0, [
              o("path", {
                d: k(me)("check")
              }, null, 8, l0)
            ]))
          ]),
          o("span", o0, c(v), 1)
        ]))), 128))
      ])) : (t(), n("div", s0)),
      e.plan.current ? x("", !0) : (t(), n("footer", r0, [
        I(ce, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: f[0] || (f[0] = (v) => r("choose", e.plan.id))
        }, {
          default: O(() => [
            U(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, Gx));
  }
}), i0 = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, d0 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, u0 = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, c0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, f0 = ["d"], m0 = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, p0 = ["aria-pressed"], v0 = ["aria-pressed"], g0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, h0 = ["aria-label"], b0 = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, y0 = ["aria-pressed", "onClick"], x0 = ["aria-label"], k0 = { class: "text-muted-foreground mr-1 text-xs font-medium" }, $0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, w0 = ["data-slot"], C0 = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, S0 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, M0 = { class: "flex items-center gap-2" }, B0 = ["disabled"], A0 = ["disabled"], dn = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(""), i = ft(e, "modelValue"), d = dt({}), u = dt({});
    pe(s, () => h());
    function f(F) {
      const J = F.trim();
      if (J === "")
        return null;
      const N = Number(J);
      return Number.isFinite(N) ? N : null;
    }
    function v() {
      const F = {};
      for (const [J, N] of Object.entries(u))
        F[J] = { min: f(N.min), max: f(N.max) };
      return F;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function h() {
      r("filter", p());
    }
    function $(F, J) {
      d[F] = d[F] === J ? null : J, h();
    }
    function b(F) {
      return u[F] ?? { min: "", max: "" };
    }
    function w(F, J, N) {
      const G = u[F] ?? { min: "", max: "" };
      u[F] = { ...G, [J]: N }, h();
    }
    function C(F) {
      F.key === "Enter" && (F.preventDefault(), r("scan", s.value.trim()));
    }
    const M = y(
      () => a.facets.filter((F) => (F.kind ?? "chips") === "chips")
    ), B = y(() => a.facets.filter((F) => F.kind === "range")), S = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), m = K(1);
    pe(
      () => a.items.map((F) => F.key).join(","),
      () => {
        m.value = 1;
      }
    );
    const g = y(() => {
      const F = a.pageSize;
      return !F || F < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / F));
    }), _ = y(() => {
      const F = a.pageSize;
      if (!F || F < 1)
        return a.items;
      const J = (m.value - 1) * F;
      return a.items.slice(J, J + F);
    });
    function T(F) {
      m.value = Math.min(g.value, Math.max(1, F));
    }
    return (F, J) => (t(), n("div", {
      class: A(["flex flex-col gap-4", k(Qn)])
    }, [
      S.value ? (t(), n("div", i0, [
        o("div", d0, [
          e.searchable ? (t(), n("div", u0, [
            (t(), n("svg", c0, [
              o("path", {
                d: k(me)("search")
              }, null, 8, f0)
            ])),
            I(we, {
              modelValue: s.value,
              "onUpdate:modelValue": J[0] || (J[0] = (N) => s.value = N),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: C
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : x("", !0),
          q(F.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", m0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: J[1] || (J[1] = (N) => i.value = "grid")
            }, " Tiles ", 10, p0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: J[2] || (J[2] = (N) => i.value = "list")
            }, " List ", 10, v0)
          ])) : x("", !0)
        ]),
        M.value.length || B.value.length ? (t(), n("div", g0, [
          (t(!0), n(z, null, j(M.value, (N) => (t(), n("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key
          }, [
            N.label ? (t(), n("span", b0, c(N.label), 1)) : x("", !0),
            (t(!0), n(z, null, j(N.options ?? [], (G) => (t(), n("button", {
              key: G.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[N.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[N.key] === G.value ? "true" : "false",
              onClick: (Z) => $(N.key, G.value)
            }, c(G.label), 11, y0))), 128))
          ], 8, h0))), 128)),
          (t(!0), n(z, null, j(B.value, (N) => (t(), n("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key,
            "data-slot": "catalog-range"
          }, [
            o("span", k0, c(N.label ?? N.key), 1),
            I(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${N.label ?? N.key} from`,
              "model-value": b(N.key).min,
              "onUpdate:modelValue": (G) => w(N.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            J[7] || (J[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            I(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${N.label ?? N.key} to`,
              "model-value": b(N.key).max,
              "onUpdate:modelValue": (G) => w(N.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, x0))), 128))
        ])) : x("", !0)
      ])) : x("", !0),
      e.items.length === 0 ? (t(), n("p", $0, " No matching items. ")) : (t(), n("div", {
        key: 2,
        class: A(i.value === "list" ? "flex flex-col gap-3" : k(am)),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, j(_.value, (N) => (t(), D(Ky, {
          key: N.key,
          item: N,
          layout: i.value,
          onSelect: J[3] || (J[3] = (G) => r("select", G)),
          onCart: J[4] || (J[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, w0)),
      e.pageSize && g.value > 1 ? (t(), n("div", C0, [
        o("p", S0, " Page " + c(m.value) + " of " + c(g.value), 1),
        o("div", M0, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value <= 1,
            onClick: J[5] || (J[5] = (N) => T(m.value - 1))
          }, " Previous ", 8, B0),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value >= g.value,
            onClick: J[6] || (J[6] = (N) => T(m.value + 1))
          }, " Next ", 8, A0)
        ])
      ])) : x("", !0)
    ], 2));
  }
}), _0 = ["aria-disabled"], z0 = ["disabled"], P0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, L0 = ["d"], O0 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, j0 = ["disabled"], V0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, D0 = ["d"], T0 = /* @__PURE__ */ L({
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
    const a = ft(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const f = a.value + u;
      f < e.min || e.max !== null && f > e.max || (a.value = f, u < 0 ? r("decrease", f) : r("increase", f));
    }
    return (u, f) => (t(), n("div", {
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
        onClick: f[0] || (f[0] = (v) => d(-1))
      }, [
        (t(), n("svg", P0, [
          o("path", {
            d: k(me)("minus")
          }, null, 8, L0)
        ]))
      ], 8, z0),
      o("span", O0, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (v) => d(1))
      }, [
        (t(), n("svg", V0, [
          o("path", {
            d: k(me)("plus")
          }, null, 8, D0)
        ]))
      ], 8, j0)
    ], 8, _0));
  }
}), I0 = { class: "divide-border flex flex-col divide-y" }, E0 = { class: "min-w-0" }, F0 = { class: "truncate text-sm font-medium" }, N0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, R0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, U0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, H0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, K0 = ["aria-label", "onClick"], q0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, G0 = ["d"], W0 = /* @__PURE__ */ L({
  __name: "LineItems",
  props: {
    items: {},
    editable: { type: Boolean, default: !1 }
  },
  emits: ["qty", "remove"],
  setup(e, { emit: l }) {
    const a = l;
    function r(s) {
      const i = s.qty;
      if (typeof i == "number" && Number.isFinite(i))
        return i;
      const d = Number(i);
      return Number.isFinite(d) && d > 0 ? d : 1;
    }
    return (s, i) => (t(), n("div", I0, [
      (t(!0), n(z, null, j(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", E0, [
          o("p", F0, c(d.label), 1),
          d.detail ? (t(), n("p", N0, c(d.detail), 1)) : x("", !0)
        ]),
        o("div", R0, [
          e.editable ? (t(), D(T0, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", U0, " ×" + c(d.qty), 1)) : x("", !0),
          d.amount ? (t(), n("span", H0, c(d.amount), 1)) : x("", !0),
          d.status ? (t(), D($e, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : x("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => a("remove", d.key)
          }, [
            (t(), n("svg", q0, [
              o("path", {
                d: k(me)("trash")
              }, null, 8, G0)
            ]))
          ], 8, K0)) : x("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Z0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, J0 = { class: "border-b px-4 py-3" }, Y0 = { class: "text-sm font-medium" }, Q0 = { class: "flex-1 px-4 py-3" }, X0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, e2 = { class: "text-foreground block font-medium" }, t2 = { class: "mt-1 block" }, n2 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, a2 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, l2 = { class: "tabular-nums" }, o2 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, s2 = { class: "text-muted-foreground" }, r2 = {
  key: 0,
  class: "tabular-nums"
}, i2 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, d2 = { class: "text-muted-foreground" }, u2 = { class: "tabular-nums" }, c2 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, f2 = { class: "tabular-nums" }, m2 = {
  key: 4,
  class: "pt-1"
}, p2 = /* @__PURE__ */ L({
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
    const a = l;
    return (r, s) => (t(), n("aside", Z0, [
      o("header", J0, [
        o("h2", Y0, c(e.title), 1)
      ]),
      o("div", Q0, [
        e.items.length === 0 ? (t(), n("p", X0, [
          o("span", e2, c(e.emptyTitle), 1),
          o("span", t2, c(e.emptyDescription), 1)
        ])) : (t(), D(W0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", n2, [
        e.subtotal ? (t(), n("div", a2, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", l2, c(e.subtotal), 1)
        ])) : x("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", o2, [
          o("span", s2, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", r2, c(e.discount), 1)) : x("", !0),
          q(r.$slots, "discount")
        ])) : x("", !0),
        e.tax ? (t(), n("div", i2, [
          o("span", d2, c(e.taxLabel), 1),
          o("span", u2, c(e.tax), 1)
        ])) : x("", !0),
        e.total ? (t(), n("div", c2, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", f2, c(e.total), 1)
        ])) : x("", !0),
        r.$slots.pay ? (t(), n("div", m2, [
          q(r.$slots, "pay")
        ])) : x("", !0)
      ])) : x("", !0)
    ]));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function v2(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function g2(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function un(e, l) {
  const a = l.query.trim().toLowerCase();
  if (a !== "" && ![
    e.key,
    e.sku ?? "",
    e.label,
    e.caption ?? "",
    ...e.facts ?? []
  ].join(" ").toLowerCase().includes(a))
    return !1;
  for (const [r, s] of Object.entries(l.selected ?? {}))
    if (s && (e.facets?.[r] ?? null) !== s)
      return !1;
  for (const [r, s] of Object.entries(l.ranges ?? {}))
    if (!g2(v2(e, r), s))
      return !1;
  return !0;
}
function h2(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function Mt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const b2 = { class: "flex flex-col gap-6" }, y2 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, x2 = { class: "text-sm font-semibold" }, k2 = { class: "flex flex-wrap items-center gap-1.5" }, $2 = ["aria-pressed", "onClick"], w2 = { class: "text-sm font-semibold" }, C2 = { class: "flex flex-wrap items-center gap-1.5" }, S2 = { key: 0 }, oa = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(""), i = dt({}), d = dt({}), u = y(
      () => a.facets.filter((g) => (g.kind ?? "chips") === "chips")
    ), f = y(() => a.facets.filter((g) => g.kind === "range"));
    function v(g) {
      return g == null ? "" : String(g);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const g of Object.keys(i))
        delete i[g];
      for (const [g, _] of Object.entries(a.applied.selected ?? {}))
        i[g] = _;
      for (const g of Object.keys(d))
        delete d[g];
      for (const [g, _] of Object.entries(a.applied.ranges ?? {}))
        d[g] = { min: v(_.min), max: v(_.max) };
    }
    pe(
      () => a.open,
      (g) => {
        g && p();
      }
    );
    function h(g) {
      const _ = g.trim();
      if (_ === "")
        return null;
      const T = Number(_);
      return Number.isFinite(T) ? T : null;
    }
    function $() {
      const g = {};
      for (const [_, T] of Object.entries(d))
        g[_] = { min: h(T.min), max: h(T.max) };
      return g;
    }
    function b() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: $()
      };
    }
    const w = y(() => {
      let g = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const _ of Object.values(i))
        _ && (g += 1);
      for (const _ of Object.values($()))
        (_.min !== null || _.max !== null) && (g += 1);
      return g;
    });
    function C(g, _) {
      i[g] = i[g] === _ ? null : _;
    }
    function M(g) {
      return d[g] ?? { min: "", max: "" };
    }
    function B(g, _, T) {
      const F = d[g] ?? { min: "", max: "" };
      d[g] = { ...F, [_]: T };
    }
    function S() {
      r("apply", b());
    }
    function m() {
      s.value = "";
      for (const g of Object.keys(i))
        i[g] = null;
      for (const g of Object.keys(d))
        d[g] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ee(), query: a.applied.query } : Ee()
      );
    }
    return (g, _) => (t(), D(At, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: _[2] || (_[2] = (T) => r("close"))
    }, {
      footer: O(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: m
        }, " Reset all "),
        I(ce, {
          variant: "outline",
          size: "sm",
          onClick: _[1] || (_[1] = (T) => r("close"))
        }, {
          default: O(() => [..._[5] || (_[5] = [
            U("Cancel", -1)
          ])]),
          _: 1
        }),
        I(ce, {
          size: "sm",
          onClick: S
        }, {
          default: O(() => [
            _[6] || (_[6] = U(" Apply", -1)),
            w.value ? (t(), n("span", S2, " (" + c(w.value) + ")", 1)) : x("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", b2, [
          e.hideSearch ? x("", !0) : (t(), n("label", y2, [
            _[3] || (_[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(we, {
              modelValue: s.value,
              "onUpdate:modelValue": _[0] || (_[0] = (T) => s.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, j(u.value, (T) => (t(), n("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", x2, c(T.label ?? T.key), 1),
            o("div", k2, [
              (t(!0), n(z, null, j(T.options ?? [], (F) => (t(), n("button", {
                key: F.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[T.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[T.key] === F.value ? "true" : "false",
                onClick: (J) => C(T.key, F.value)
              }, c(F.label), 11, $2))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, j(f.value, (T) => (t(), n("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", w2, c(T.label ?? T.key), 1),
            o("div", C2, [
              I(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${T.label ?? T.key} from`,
                "model-value": M(T.key).min,
                "onUpdate:modelValue": (F) => B(T.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              _[4] || (_[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              I(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${T.label ?? T.key} to`,
                "model-value": M(T.key).max,
                "onUpdate:modelValue": (F) => B(T.key, "max", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), M2 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, B2 = { class: "flex flex-col gap-4" }, A2 = { class: "flex flex-wrap items-start justify-between gap-3" }, _2 = { class: "flex items-center gap-2" }, z2 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, F6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(Ee()), i = K(!1), d = ft(e, "cart"), u = K(!1), f = y(
      () => a.items.filter((N) => un(N, s.value))
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
      return N ? a.parsePrice(N) : 0;
    }
    function $(N, G, Z) {
      return {
        ...N,
        qty: G,
        amount: a.formatMoney(Z * G)
      };
    }
    function b(N) {
      const G = h2(a.items, N);
      G && w(G.key);
    }
    function w(N) {
      const G = a.items.find((H) => H.key === N);
      if (!G || G.status === "out-of-stock")
        return;
      u.value = !1;
      const Z = h(G);
      if (d.value.find((H) => H.key === N)) {
        d.value = d.value.map(
          (H) => H.key === N ? $(H, Number(H.qty ?? 1) + 1, Z) : H
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: G.key,
          label: G.label,
          detail: G.caption ?? null,
          qty: 1,
          amount: a.formatMoney(Z)
        }
      ];
    }
    function C(N, G) {
      const Z = a.items.find((H) => H.key === N), W = h(Z);
      d.value = d.value.map((H) => H.key === N ? $(H, G, W) : H);
    }
    function M(N) {
      d.value = d.value.filter((G) => G.key !== N);
    }
    const B = y(
      () => d.value.reduce((N, G) => {
        const Z = a.items.find((W) => W.key === G.key);
        return N + h(Z) * Number(G.qty ?? 1);
      }, 0)
    ), S = y(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), m = y(
      () => Math.round((B.value - S.value) * a.taxRate)
    ), g = y(() => d.value.length ? a.formatMoney(B.value) : null), _ = y(
      () => d.value.length && S.value > 0 ? `−${a.formatMoney(S.value)}` : null
    ), T = y(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(m.value) : null
    ), F = y(
      () => d.value.length ? a.formatMoney(B.value - S.value + m.value) : null
    );
    function J() {
      u.value = !0, r("pay", d.value);
    }
    return (N, G) => (t(), n(z, null, [
      o("div", M2, [
        o("section", B2, [
          o("div", A2, [
            I(Ie, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", _2, [
              k(Mt)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...k(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : x("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: G[1] || (G[1] = (Z) => i.value = !0)
              }, [
                G[5] || (G[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                G[6] || (G[6] = U(" Filters ", -1)),
                k(Mt)(s.value) ? (t(), n("span", z2, " on ")) : x("", !0)
              ])) : x("", !0)
            ])
          ]),
          I(dn, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: v,
            onSelect: G[2] || (G[2] = (Z) => r("select", Z)),
            onCart: w,
            onScan: b
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(p2, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: g.value,
          "discount-label": e.discountLabel,
          discount: _.value,
          "tax-label": e.taxLabel,
          tax: T.value,
          total: F.value,
          onQty: C,
          onRemove: M
        }, {
          pay: O(() => [
            q(N.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: J
            }, () => [
              I(ce, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: J
              }, {
                default: O(() => [
                  U(c(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      I(oa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: G[3] || (G[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (Z) => s.value = { ...k(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), P2 = {
  key: 0,
  class: "flex flex-col gap-5"
}, L2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, O2 = ["src", "alt"], j2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, V2 = ["src"], D2 = { class: "flex items-start justify-between gap-3" }, T2 = { class: "text-lg font-semibold tabular-nums" }, I2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, E2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, F2 = { class: "grid grid-cols-2 gap-3" }, N2 = { class: "flex flex-col gap-2" }, R2 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, N6 = /* @__PURE__ */ L({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let h = 0;
      for (const $ of p)
        h = h * 31 + $.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, w) => ({
        label: b,
        value: Math.max(0, Math.round(p + Math.sin(w + h) * p * 0.18))
      }));
    }
    const d = y(() => a.item?.kind === "unit"), u = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), f = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), v = y(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), D(At, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = ($) => r("close"))
    }, it({
      default: O(() => [
        e.item ? (t(), n("div", P2, [
          o("div", L2, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, O2)) : x("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", j2, [
            (t(!0), n(z, null, j(e.item.images, ($, b) => (t(), n("img", {
              key: b,
              src: $,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, V2))), 128))
          ])) : x("", !0),
          o("div", D2, [
            o("div", null, [
              o("p", T2, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", I2, c(e.item.stock) + " in stock ", 1)) : x("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", E2, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("div", F2, [
            I(St, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            I(St, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", N2, [
            o("p", R2, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(zt, {
              data: d.value ? f.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : x("", !0)
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
}), U2 = { class: "flex flex-col gap-10" }, H2 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, K2 = { class: "flex flex-col gap-3" }, q2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, G2 = ["src", "alt"], W2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Z2 = ["aria-label", "aria-pressed", "onClick"], J2 = ["src"], Y2 = { class: "flex flex-col gap-5" }, Q2 = { class: "flex flex-wrap items-start justify-between gap-3" }, X2 = { class: "min-w-0" }, ek = { class: "text-2xl font-semibold tracking-tight" }, tk = { class: "text-muted-foreground mt-1 text-sm" }, nk = { class: "text-2xl font-semibold tabular-nums" }, ak = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, lk = { class: "grid grid-cols-2 gap-3 text-sm" }, ok = {
  key: 0,
  class: "rounded-lg border p-3"
}, sk = { class: "mt-1 font-medium" }, rk = { class: "rounded-lg border p-3" }, ik = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, dk = { class: "mt-1 font-medium" }, uk = { class: "flex flex-col gap-4" }, ck = { class: "grid gap-4 sm:grid-cols-2" }, fk = { class: "bg-card rounded-lg border p-4" }, mk = { class: "mb-3 text-sm font-medium" }, pk = /* @__PURE__ */ L({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(b) {
      let w = 0;
      for (const C of b)
        w = w * 31 + C.charCodeAt(0) >>> 0;
      return w;
    }
    function i(b, w) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((M, B) => ({
        label: M,
        value: Math.max(0, Math.round(b + Math.sin(B + w) * b * 0.18))
      }));
    }
    const d = y(() => a.item.kind === "unit"), u = y(() => {
      const b = [a.item.image, ...a.item.images ?? []].filter(
        (w) => typeof w == "string" && w !== ""
      );
      return [...new Set(b)];
    }), f = K(0), v = y(() => {
      const b = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(a.item.key) % 7);
    }), p = y(() => {
      const b = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(a.item.key) % 5 + 1);
    }), h = y(() => d.value ? p.value : v.value), $ = y(() => !d.value && a.item.status !== "out-of-stock");
    return (b, w) => (t(), n("div", U2, [
      o("div", H2, [
        o("div", K2, [
          o("div", q2, [
            u.value[f.value] ? (t(), n("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, G2)) : x("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", W2, [
            (t(!0), n(z, null, j(u.value, (C, M) => (t(), n("button", {
              key: C,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", M === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${M + 1}`,
              "aria-pressed": M === f.value ? "true" : "false",
              onClick: (B) => f.value = M
            }, [
              o("img", {
                src: C,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, J2)
            ], 10, Z2))), 128))
          ])) : x("", !0)
        ]),
        o("div", Y2, [
          o("div", Q2, [
            o("div", X2, [
              o("h1", ek, c(e.item.label), 1),
              o("p", tk, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          o("p", nk, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", ak, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("dl", lk, [
            e.item.sku ? (t(), n("div", ok, [
              w[1] || (w[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", sk, c(e.item.sku), 1)
            ])) : x("", !0),
            o("div", rk, [
              o("dt", ik, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", dk, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          $.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: w[0] || (w[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")) : x("", !0)
        ])
      ]),
      o("section", uk, [
        w[2] || (w[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", ck, [
          I(St, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          I(St, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", fk, [
          o("p", mk, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(qh, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), vk = ["href"], R6 = /* @__PURE__ */ L({
  __name: "CatalogItemView",
  props: {
    item: {},
    catalogHref: { default: "/catalog" },
    backLabel: { default: "Back to catalog" },
    embedded: { type: Boolean, default: !0 }
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = l;
    return (r, s) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : k(nt)])
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
        U(" " + c(e.backLabel), 1)
      ], 8, vk),
      I(pk, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), gk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, hk = ["aria-selected", "onClick"], bk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, yk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, xk = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, kk = ["aria-pressed"], $k = ["aria-pressed"], U6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(a.tabs[0]?.key ?? ""), i = ft(e, "layout"), d = K({}), u = K(!1);
    pe(
      () => a.tabs.map((C) => C.key).join(","),
      (C) => {
        C.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(C) {
      return d.value[C] ?? Ee();
    }
    const v = y(
      () => a.tabs.find((C) => C.key === s.value) ?? a.tabs[0] ?? null
    ), p = y(
      () => v.value ? f(v.value.key) : Ee()
    ), h = y(() => {
      const C = v.value;
      return C ? C.items.filter((M) => un(M, f(C.key))) : [];
    });
    function $(C) {
      const M = v.value?.key;
      M && (d.value = {
        ...d.value,
        [M]: { ...f(M), query: C }
      });
    }
    function b() {
      const C = v.value?.key;
      C && (d.value = { ...d.value, [C]: Ee() });
    }
    function w(C) {
      const M = v.value?.key;
      M && (d.value = { ...d.value, [M]: C }, u.value = !1);
    }
    return (C, M) => (t(), n(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : k(nt)])
      }, [
        I(Ie, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", gk, [
          (t(!0), n(z, null, j(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: A(["px-3 py-1.5 text-sm transition-colors", s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (S) => s.value = B.key
          }, c(B.label), 11, hk))), 128))
        ])) : x("", !0),
        o("div", bk, [
          I(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (B) => $(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(Mt)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: b
          }, " Clear ")) : x("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: M[1] || (M[1] = (B) => u.value = !0)
          }, [
            M[8] || (M[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            M[9] || (M[9] = U(" Filters ", -1)),
            k(Mt)(p.value) ? (t(), n("span", yk, " on ")) : x("", !0)
          ])) : x("", !0),
          o("div", xk, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, kk),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (B) => i.value = "list")
            }, " List ", 10, $k)
          ])
        ]),
        I(dn, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (B) => r("select", B)),
          onCart: M[6] || (M[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(oa, {
        open: u.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: p.value,
        onClose: M[7] || (M[7] = (B) => u.value = !1),
        onApply: w,
        onReset: b
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), wk = { class: "flex flex-col gap-4" }, Ck = { class: "flex flex-col gap-4" }, H6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(Ee()), i = y(
      () => a.cards.filter((d) => un(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : k(nt)])
    }, [
      I(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", wk, [
        I(Ie, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(dn, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: u[0] || (u[0] = (f) => s.value = f),
          onSelect: u[1] || (u[1] = (f) => r("select", f)),
          onCart: u[2] || (u[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", Ck, [
        I(Ie, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(fo, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: f }) => [
            I($e, {
              status: String(f)
            }, {
              default: O(() => [
                U(c(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), Sk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Mk = { class: "text-sm font-medium" }, Bk = ["width", "height", "aria-label"], Ak = { class: "flex items-center gap-2" }, _k = /* @__PURE__ */ L({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = K(null), i = K(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(C) {
      const M = s.value;
      if (!M)
        return null;
      const B = M.getBoundingClientRect(), S = M.width / B.width, m = M.height / B.height;
      return {
        x: (C.clientX - B.left) * S,
        y: (C.clientY - B.top) * m
      };
    }
    function v(C) {
      a.disabled || (i.value = !0, d = f(C), s.value?.setPointerCapture(C.pointerId));
    }
    function p(C) {
      if (!i.value || a.disabled)
        return;
      const M = u(), B = f(C);
      !M || !B || !d || (M.strokeStyle = "#111827", M.lineWidth = 2.4, M.lineCap = "round", M.lineJoin = "round", M.beginPath(), M.moveTo(d.x, d.y), M.lineTo(B.x, B.y), M.stroke(), d = B);
    }
    function h() {
      i.value = !1, d = null;
    }
    function $() {
      const C = s.value, M = u();
      !C || !M || (M.clearRect(0, 0, C.width, C.height), r("clear"));
    }
    function b() {
      const C = s.value;
      C && r("save", C.toDataURL("image/png"));
    }
    function w() {
      const C = s.value, M = u();
      !C || !M || (M.fillStyle = "#ffffff", M.fillRect(0, 0, C.width, C.height));
    }
    return be(w), ke(() => {
      i.value = !1;
    }), (C, M) => (t(), n("div", Sk, [
      o("p", Mk, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, Bk),
      o("div", Ak, [
        I(ce, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: O(() => [...M[0] || (M[0] = [
            U(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(ce, {
          size: "sm",
          disabled: e.disabled,
          onClick: b
        }, {
          default: O(() => [...M[1] || (M[1] = [
            U("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), zk = { class: "grid gap-8 lg:grid-cols-2" }, Pk = { class: "flex flex-col gap-3" }, Lk = { class: "text-muted-foreground text-xs font-normal" }, Ok = {
  key: 0,
  class: "flex flex-col gap-3"
}, jk = { class: "flex flex-wrap gap-3" }, Vk = ["onClick"], Dk = ["src", "alt"], Tk = {
  key: 1,
  class: "flex flex-col gap-3"
}, Ik = { class: "flex flex-wrap gap-3" }, Ek = ["onClick"], Fk = ["src", "alt"], Nk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Rk = { class: "flex flex-wrap items-center gap-2" }, Uk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Hk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Kk = { class: "flex flex-col gap-2" }, qk = ["src"], Gk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Wk = ["src"], K6 = /* @__PURE__ */ L({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = K([]), r = K([]), s = K(null), i = K(null), d = K(null), u = K(l.documents[0]?.key ?? "");
    function f(C) {
      try {
        const M = localStorage.getItem(C), B = M ? JSON.parse(M) : [];
        return Array.isArray(B) ? B : [];
      } catch {
        return [];
      }
    }
    be(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), pe(
      a,
      (C) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(C));
      },
      { deep: !0 }
    ), pe(
      r,
      (C) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(C));
      },
      { deep: !0 }
    );
    function v(C) {
      const M = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: C
      };
      a.value = [M, ...a.value].slice(0, 8), s.value = M.id;
    }
    async function p(C, M) {
      await cm(C), M(40);
      const B = await new Promise((S, m) => {
        const g = new FileReader();
        g.onload = () => S(String(g.result)), g.onerror = () => m(new Error("Could not read the file")), g.readAsDataURL(C);
      });
      return M(100), { value: B, name: C.name, size: C.size, url: B };
    }
    function h() {
      const C = d.value?.url ?? d.value?.value;
      if (!C)
        return;
      const M = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: C
      };
      r.value = [M, ...r.value].slice(0, 8), i.value = M.id;
    }
    const $ = y(
      () => a.value.find((C) => C.id === s.value)?.dataUrl ?? null
    ), b = y(
      () => r.value.find((C) => C.id === i.value)?.dataUrl ?? null
    ), w = y(() => {
      const C = l.documents.find((B) => B.key === u.value)?.document ?? l.documents[0]?.document ?? {}, M = {
        ...C?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...C,
        branding: M
      };
    });
    return (C, M) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : k(nt)])
    }, [
      I(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", zk, [
        I(_k, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", Pk, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", Lk, c(k(Xn)), 1),
          I(Fn, {
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = (B) => d.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          I(ce, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: O(() => [...M[1] || (M[1] = [
              U(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", Ok, [
        I(Ie, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", jk, [
          (t(!0), n(z, null, j(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (S) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Dk)
          ], 10, Vk))), 128))
        ])
      ])) : x("", !0),
      r.value.length ? (t(), n("section", Tk, [
        I(Ie, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", Ik, [
          (t(!0), n(z, null, j(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (S) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Fk)
          ], 10, Ek))), 128))
        ])
      ])) : x("", !0),
      e.documents.length ? (t(), n("section", Nk, [
        o("div", Rk, [
          (t(!0), n(z, null, j(e.documents, (B) => (t(), D(ce, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (S) => u.value = B.key
          }, {
            default: O(() => [
              U(c(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Uk, [
          I(oh, {
            document: w.value
          }, null, 8, ["document"]),
          o("div", Hk, [
            o("div", Kk, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              $.value ? (t(), n("img", {
                key: 0,
                src: $.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, qk)) : (t(), n("p", Gk, "Draw and save a signature"))
            ]),
            b.value ? (t(), n("img", {
              key: 0,
              src: b.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Wk)) : x("", !0)
          ])
        ])
      ])) : x("", !0)
    ], 2));
  }
}), q6 = "panel.dashboard.hiddenWidgets", Zk = /* @__PURE__ */ Symbol("dashboardHide"), Jk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, G6 = /* @__PURE__ */ L({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = xt(Zk, null), r = K(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = K(!1);
    be(() => {
      if (a?.register("shortcuts", "Shortcuts"), !l.storageKey) {
        s.value = !0;
        return;
      }
      try {
        const d = localStorage.getItem(l.storageKey);
        if (d) {
          const u = JSON.parse(d);
          Array.isArray(u) && (r.value = u.filter(
            (f) => typeof f?.id == "string" && typeof f.label == "string" && typeof f.href == "string"
          ));
        }
      } catch {
      }
      s.value = !0;
    }), pe(
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
    const i = y(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? x("", !0) : (t(), n("div", Jk, [
      I(Wb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Yk = { class: "flex flex-col gap-3" }, Qk = ["data-slot"], Xk = ["aria-pressed", "aria-label", "title"], e$ = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, t$ = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, n$ = { class: "flex h-8 items-center" }, a$ = ["aria-label", "title", "onClick"], l$ = ["aria-label", "title", "onClick"], o$ = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, s$ = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, W6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = K(a.maskable ? !a.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function d(S) {
      return a.maskable && (S.sensitive ?? !0);
    }
    function u(S) {
      return d(S) && !s.value && !i.value.has(S.key);
    }
    const f = y(() => a.segments.some(u)), v = y(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => p[a.columns] ?? p[4]), $ = y(() => {
      const S = a.columns ?? 4, m = Math.floor(a.segments.length / S) * S;
      return a.segments.slice(0, m);
    }), b = y(() => {
      const S = a.columns ?? 4, m = Math.floor(a.segments.length / S) * S;
      return a.segments.slice(m);
    }), w = y(() => {
      const S = [];
      return $.value.length > 0 && S.push({ key: "packed", joined: !0, segments: $.value }), b.value.length > 0 && S.push({ key: "leftover", joined: !1, segments: b.value }), S;
    });
    function C() {
      const S = f.value === !1;
      s.value = !S, i.value = /* @__PURE__ */ new Set(), r("toggle", S);
    }
    function M(S) {
      if (!d(S))
        return;
      const m = new Set(i.value);
      if (u(S))
        m.add(S.key);
      else if (m.delete(S.key), s.value) {
        s.value = !1;
        for (const g of a.segments)
          g.key !== S.key && d(g) && m.add(g.key);
      }
      i.value = m, r("toggle", f.value);
    }
    function B(S) {
      return typeof S == "number" ? new Intl.NumberFormat().format(S) : S;
    }
    return (S, m) => (t(), n("div", Yk, [
      (t(!0), n(z, null, j(w.value, (g) => (t(), n("div", {
        key: g.key,
        class: A(["relative shrink-0", g.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": g.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && g.key === w.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: C
        }, [
          (t(), n("svg", e$, [
            f.value ? (t(), n(z, { key: 0 }, [
              m[0] || (m[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              m[1] || (m[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              m[2] || (m[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              m[3] || (m[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              m[4] || (m[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              m[5] || (m[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Xk)) : x("", !0),
        o("div", {
          class: A(["grid", [g.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, j(g.segments, (_) => (t(), n("div", {
            key: _.key,
            class: A(["bg-card flex flex-col gap-2 p-4", g.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", t$, c(_.label), 1),
            o("div", n$, [
              e.loading ? (t(), D(Pe, {
                key: 0,
                variant: "number"
              })) : u(_) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${_.label} hidden. Show it.`,
                title: `Show ${_.label}`,
                onClick: (T) => M(_)
              }, [
                (t(), n(z, null, j(5, (T) => o("span", {
                  key: T,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, a$)) : d(_) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${_.label}, ${B(_.value)}. Hide it.`,
                title: `Hide ${_.label}`,
                onClick: (T) => M(_)
              }, c(B(_.value)), 9, l$)) : (t(), n("span", o$, c(B(_.value)), 1)),
              _.trend && !e.loading && !u(_) ? (t(), D(la, {
                key: 4,
                direction: _.trend.direction,
                percentage: _.trend.percentage,
                inverted: _.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : x("", !0)
            ]),
            _.sparkline?.length && !e.loading && !u(_) ? (t(), D(zt, {
              key: 0,
              data: _.sparkline,
              height: 24
            }, null, 8, ["data"])) : x("", !0),
            _.caption || _.comparison && _.trend ? (t(), n("p", s$, c(_.caption ?? _.comparison), 1)) : x("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Qk))), 128))
    ]));
  }
}), r$ = ["aria-label"], i$ = { class: "flex items-center justify-between gap-3" }, d$ = ["aria-valuenow", "aria-label"], u$ = { class: "flex items-center gap-3" }, c$ = { class: "min-w-0 flex-1 text-sm" }, f$ = { class: "font-medium" }, m$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 block text-xs sm:mt-0 sm:inline sm:before:content-[':_']"
}, p$ = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, v$ = { class: "flex items-center justify-between gap-2" }, g$ = { class: "text-sm font-semibold" }, h$ = { class: "flex items-center gap-3" }, b$ = ["href"], y$ = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, x$ = { class: "flex min-w-0 flex-col gap-0.5" }, k$ = { class: "text-sm font-medium" }, $$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, w$ = {
  key: 1,
  class: "flex flex-col gap-2"
}, C$ = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, S$ = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, M$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Z6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = y(() => a.items.find((b) => !b.done) ?? null), i = y(() => a.items.filter((b) => b.key !== s.value?.key)), d = y(() => a.items.length), u = y(() => a.items.filter((b) => b.done).length), f = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), v = y(() => {
      const b = a.linkComponent;
      return typeof b == "string" ? b : ga(b);
    }), p = Ye({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), h = Ye({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), $ = Ye({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (b, w) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
      key: 0,
      class: "flex flex-col gap-2.5 rounded-md border bg-card p-3",
      "aria-label": e.heading
    }, [
      o("div", i$, [
        o("div", {
          class: "flex flex-1 items-center gap-1",
          role: "progressbar",
          "aria-valuenow": f.value,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-label": `${e.heading}, ${f.value} percent complete`
        }, [
          (t(!0), n(z, null, j(e.items, (C, M) => (t(), n("span", {
            key: C.key,
            class: A(["h-1.5 flex-1 rounded-sm transition-colors duration-300", M < u.value ? "bg-amber-500" : "bg-muted"])
          }, null, 2))), 128))
        ], 8, d$),
        e.skipLabel ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: w[0] || (w[0] = (C) => r("skip"))
        }, c(e.skipLabel), 1)) : x("", !0)
      ]),
      o("div", u$, [
        o("p", c$, [
          o("span", f$, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", m$, c(s.value.detail), 1)) : x("", !0)
        ]),
        s.value?.href ? (t(), D(Ce(v.value), {
          key: 0,
          href: s.value.href,
          class: A(k(h))
        }, {
          default: O(() => [
            U(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : x("", !0)
      ])
    ], 8, r$)) : e.items.length ? (t(), n("section", p$, [
      o("div", v$, [
        o("h2", g$, c(e.heading), 1),
        o("div", h$, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: w[1] || (w[1] = (C) => r("skip"))
          }, c(e.skipLabel), 1)) : x("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, b$)) : x("", !0)
        ])
      ]),
      s.value ? (t(), n("div", y$, [
        w[2] || (w[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", x$, [
          o("p", k$, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", $$, c(s.value.detail), 1)) : x("", !0),
          s.value.href ? (t(), D(Ce(v.value), {
            key: 1,
            href: s.value.href,
            class: A(k(p))
          }, {
            default: O(() => [
              U(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : x("", !0)
        ])
      ])) : x("", !0),
      i.value.length ? (t(), n("ul", w$, [
        (t(!0), n(z, null, j(i.value, (C) => (t(), n("li", {
          key: C.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              C.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            C.done ? (t(), n("svg", C$, [...w[3] || (w[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : x("", !0)
          ], 2),
          o("div", S$, [
            o("p", {
              class: A(["text-sm", C.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(C.title), 3),
            !C.done && C.detail ? (t(), n("p", M$, c(C.detail), 1)) : x("", !0)
          ]),
          !C.done && C.href ? (t(), D(Ce(v.value), {
            key: 0,
            href: C.href,
            class: A(k($))
          }, {
            default: O(() => [
              U(c(C.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : x("", !0)
        ]))), 128))
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), B$ = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, A$ = { class: "hidden items-center gap-2 md:flex" }, _$ = { class: "md:hidden" }, z$ = { class: "border-b px-4 py-3" }, P$ = { class: "text-muted-foreground text-xs font-normal" }, L$ = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, O$ = { class: "font-medium tabular-nums" }, j$ = { class: "ml-auto flex items-center gap-3" }, J6 = /* @__PURE__ */ L({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", B$, [
      o("div", A$, [
        q(i.$slots, "actions")
      ]),
      o("div", _$, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        I(nn, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: O(() => [
            I(an, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", z$, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", P$, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", L$, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", O$, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          U(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          U(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", j$, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : x("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), V$ = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, D$ = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, T$ = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, I$ = ["value"], E$ = ["value"], F$ = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, N$ = ["disabled"], R$ = ["disabled"], U$ = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, H$ = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, K$ = ["disabled"], Y6 = /* @__PURE__ */ L({
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
    const a = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = y(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = y(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = y(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, v) => (t(), n("div", V$, [
      o("p", D$, [
        U(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          U("of " + c(s(e.total)), 1)
        ], 64)) : x("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", T$, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, j(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, c(p), 9, E$))), 128))
        ], 40, I$)
      ])) : x("", !0),
      o("nav", F$, [
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
        ])], 8, N$),
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
        ])], 8, R$),
        o("span", U$, c(e.page), 1),
        u.value !== null ? (t(), n("span", H$, " of " + c(s(u.value)), 1)) : x("", !0),
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
        ])], 8, K$)
      ])
    ]));
  }
}), q$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, G$ = ["aria-current"], W$ = ["title"], Z$ = ["aria-current", "onClick"], J$ = ["title"], Y$ = /* @__PURE__ */ L({
  __name: "TableTabs",
  props: {
    tabs: {},
    active: {},
    counts: {}
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = l;
    function r(s) {
      return s >= 1e6 ? (s / 1e6).toFixed(s % 1e6 === 0 ? 0 : 1) + "M" : s >= 1e4 ? Math.round(s / 1e3) + "k" : new Intl.NumberFormat().format(s);
    }
    return (s, i) => (t(), n("div", q$, [
      o("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = U(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, W$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, G$),
      (t(!0), n(z, null, j(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        U(c(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, J$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Z$))), 128))
    ]));
  }
}), Q6 = /* @__PURE__ */ Bt(Y$, [["__scopeId", "data-v-3967c945"]]), Q$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, X$ = { class: "grid gap-2" }, ew = {
  key: 0,
  class: "text-destructive text-sm"
}, tw = { class: "flex gap-2" }, X6 = /* @__PURE__ */ L({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = K((() => {
      const $ = navigator.userAgent, b = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: C }) => C.test($))?.name, w = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: C }) => C.test($))?.name;
      return [b, w].filter(Boolean).join(" on ") || "";
    })()), i = K(!1), d = ha(null), u = y(() => d.value?.isLoading.value ?? !1), f = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
    be(async () => {
      try {
        const { usePasskeyRegister: $ } = await import("@laravel/passkeys/vue");
        d.value = $({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
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
    return ($, b) => v.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", X$, [
        b[3] || (b[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        ge(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": b[1] || (b[1] = (w) => s.value = w),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [_e, s.value]
        ]),
        b[4] || (b[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", ew, c(f.value), 1)) : x("", !0),
      o("div", tw, [
        I(ce, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: O(() => [
            U(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        I(ce, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: O(() => [...b[5] || (b[5] = [
            U(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(ce, {
      key: 1,
      variant: "outline",
      onClick: b[0] || (b[0] = (w) => i.value = !0)
    }, {
      default: O(() => [...b[2] || (b[2] = [
        U(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", Q$, " Passkeys are not supported in this browser. "));
  }
}), nw = { class: "pk-form-stack" }, aw = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, eS = /* @__PURE__ */ L({
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
    const a = e;
    It("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), It("panelCreateOption", {
      run(f, v) {
        return a.createOption ? a.createOption(f, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => a.errors._conflict);
    function u(f) {
      if (a.upload)
        return (v, p) => a.upload(f, v, p);
    }
    return (f, v) => (t(), n("div", nw, [
      d.value ? (t(), n("p", aw, c(d.value), 1)) : x("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, j(e.nodes, (p, h) => (t(), D(Rn, {
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
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, j(e.fields, (p) => (t(), n("div", {
          key: p.key,
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : "")
        }, [
          I(Ge, {
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
            onChange: (h) => r("change", p.key, h),
            onAffixAction: (h) => r("affix-action", p.key, h)
          }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "onChange", "onAffixAction"])
        ], 2))), 128))
      ], 2))
    ]));
  }
}), lw = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, ow = ["disabled"], sw = ["disabled"], rw = ["disabled"], iw = ["disabled"], tS = /* @__PURE__ */ L({
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
    const l = K(!1);
    be(() => {
      l.value = !!document.getElementById("pk-main");
    });
    const a = y(() => l.value ? "#pk-main" : "body"), r = y(() => !l.value), s = y(
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
    function f(v, p) {
      const h = v;
      Object.assign(h.style, d, {
        transition: "opacity 150ms ease-in, transform 150ms ease-in"
      }), requestAnimationFrame(() => {
        Object.assign(h.style, i);
      }), setTimeout(p, 150);
    }
    return (v, p) => (t(), D(ct, {
      to: a.value,
      disabled: r.value
    }, [
      I(Xe, {
        css: !1,
        onEnter: u,
        onLeave: f
      }, {
        default: O(() => [
          e.show ? (t(), n("div", {
            key: 0,
            class: A(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: A([
                k(mo),
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
              o("span", lw, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[0] || (p[0] = (h) => v.$emit("discard"))
              }, c(e.discardLabel), 9, ow)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[1] || (p[1] = (h) => v.$emit("cancel"))
              }, c(e.cancelLabel), 9, sw),
              e.extraLabel ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[2] || (p[2] = (h) => v.$emit("extra"))
              }, c(e.extraLabel), 9, rw)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: p[3] || (p[3] = (h) => v.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, iw)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function nS(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = K(Dt(e.value)), s = y(() => Dt(e.value) !== r.value);
  function i() {
    r.value = Dt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
  }
  return be(() => {
    a && window.addEventListener("beforeunload", u);
  }), ke(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function Dt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const gt = /* @__PURE__ */ new Map();
function aS(e, l) {
  gt.set(e, l);
}
function dw(e) {
  return gt.get(e);
}
function lS(e) {
  return gt.has(e);
}
function uw() {
  return [...gt.keys()].sort();
}
function oS() {
  gt.clear();
}
const cw = {
  key: 0,
  class: "flex flex-col gap-1"
}, fw = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, mw = { class: "text-foreground text-sm font-medium" }, pw = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, vw = {
  key: 5,
  class: "max-w-full font-normal"
}, gw = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, hw = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, bw = {
  key: 6,
  class: "font-normal"
}, yw = {
  key: 0,
  class: "divide-y rounded-md border"
}, xw = { class: "text-muted-foreground truncate font-medium" }, kw = { class: "text-foreground col-span-2 break-words" }, $w = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, ww = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, Cw = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Sw = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, Mw = ["href"], Bw = { class: "flex min-w-0 items-start gap-2.5" }, Aw = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, _w = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, zw = ["d"], Pw = { class: "min-w-0" }, Lw = { class: "flex flex-wrap items-center gap-2" }, Ow = { class: "text-sm font-semibold" }, jw = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Vw = ["onClick"], sS = /* @__PURE__ */ L({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = K(!a.node.collapsed), i = K(0), d = y(() => a.depth === 0), u = y(() => {
      const M = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return M >= 3 ? "sm:grid-cols-3" : M === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = y(() => a.node.key ? a.record[a.node.key] : null), p = y(() => {
      const M = v.value;
      return M == null || M === "";
    }), h = y(() => {
      if (p.value)
        return "None";
      const M = Number(v.value);
      if (Number.isNaN(M))
        return "None";
      const B = a.node.divideBy ?? 100, S = M / B, m = a.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: m }).format(S);
      } catch {
        return `${m} ${S.toFixed(2)}`;
      }
    }), $ = y(() => {
      if (p.value)
        return "None";
      const M = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[a.node.type]);
      if (a.node.type === "money")
        return h.value;
      let B = String(M);
      return a.node.transform === "upper" && (B = B.toUpperCase()), a.node.transform === "lower" && (B = B.toLowerCase()), [a.node.prefix, B, a.node.suffix].filter(Boolean).join(" ");
    }), b = y(() => {
      const M = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), B = a.node.colors?.[M] ?? a.node.defaultColor ?? "neutral";
      return ln[B] ?? "outline";
    }), w = y(() => {
      const M = typeof a.node.view == "string" ? a.node.view : "";
      return M ? dw(M) : void 0;
    }), C = y(() => {
      const M = typeof a.node.view == "string" ? a.node.view : "";
      if (!M)
        return "ViewEntry has no view name.";
      const B = uw(), S = B.length > 0 ? B.join(", ") : "(none)";
      return `No entry view for [${M}]; registered: ${S}`;
    });
    return (M, B) => {
      const S = Wt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", cw, [
        o("dt", fw, c(e.node.label), 1),
        o("dd", mw, [
          e.node.type === "badge" && k(Ou)(v.value) ? (t(), D(We, {
            key: 0,
            variant: b.value,
            class: "capitalize"
          }, {
            default: O(() => [
              U(c(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", pw, "None")) : e.node.type === "icon" ? (t(), D(su, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(cu, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(gu, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", vw, [
            e.node.language ? (t(), n("p", gw, c(e.node.language), 1)) : x("", !0),
            o("pre", hw, [
              o("code", null, c(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", bw, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", yw, [
              (t(!0), n(z, null, j(v.value, (m, g) => (t(), n("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", xw, c(g), 1),
                o("dd", kw, c(m), 1)
              ]))), 128))
            ])) : (t(), n("span", $w, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", ww, [
            (t(!0), n(z, null, j(Array.isArray(v.value) ? v.value : [], (m, g) => (t(), n("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, j(e.node.entries ?? [], (_, T) => (t(), D(S, {
                key: T,
                node: _,
                record: m,
                depth: e.depth + 1,
                onAction: B[0] || (B[0] = (F) => r("action", F))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", Cw, "None")) : x("", !0)
          ])) : e.node.type === "money" ? (t(), n("span", {
            key: 8,
            class: A(p.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && w.value ? (t(), D(Ce(w.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: v.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), n("p", Sw, c(C.value), 1)) : e.node.url && !p.value ? (t(), n("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c($.value), 9, Mw)) : (t(), n("span", {
            key: 12,
            class: A([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c($.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: B[1] || (B[1] = (m) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : x("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: A(
          d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: B[2] || (B[2] = (m) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Bw, [
            e.node.icon ? (t(), n("div", Aw, [
              (t(), n("svg", _w, [
                o("path", {
                  d: k(me)(e.node.icon)
                }, null, 8, zw)
              ]))
            ])) : x("", !0),
            o("div", Pw, [
              o("div", Lw, [
                o("h3", Ow, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : x("", !0)
              ]),
              e.node.description ? (t(), n("p", jw, c(e.node.description), 1)) : x("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (m, g) => (t(), D(S, {
            key: g,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: B[3] || (B[3] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (m, g) => (t(), D(S, {
          key: g,
          node: m,
          record: e.record,
          depth: e.depth + 1,
          onAction: B[4] || (B[4] = (_) => r("action", _))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: A(
          d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (m, g) => (t(), n("button", {
            key: g,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (_) => i.value = g
          }, c(m.label), 11, Vw))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (m, g) => ge((t(), n("div", {
          key: g,
          class: A(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(m.children ?? [], (_, T) => (t(), D(S, {
            key: T,
            node: _,
            record: e.record,
            depth: e.depth + 1,
            onAction: B[5] || (B[5] = (F) => r("action", F))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ke, i.value === g]
        ])), 128))
      ], 2)) : x("", !0);
    };
  }
}), Dw = { class: "text-muted-foreground text-sm font-normal" }, Tw = { class: "flex items-start gap-3" }, Iw = { class: "min-w-0 flex-1" }, Ew = { class: "flex flex-wrap items-center gap-2" }, Fw = { class: "truncate text-sm font-medium" }, Nw = { class: "text-muted-foreground mt-0.5 text-xs" }, Rw = { class: "text-muted-foreground text-xs font-normal" }, Uw = { class: "mt-auto flex items-center gap-2" }, Hw = /* @__PURE__ */ L({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.gateways.filter((i) => i.connected).length);
    return (i, d) => (t(), n("div", {
      class: A(["flex flex-col gap-4", k(Qn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", Dw, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(k(nm))
      }, [
        (t(!0), n(z, null, j(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Tw, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ie({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", Iw, [
              o("div", Ew, [
                o("h3", Fw, c(u.label), 1),
                I($e, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    U(c(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D($e, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...d[0] || (d[0] = [
                    U(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D($e, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...d[1] || (d[1] = [
                    U(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...d[2] || (d[2] = [
                    U(" Default ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.connected && u.mode ? (t(), D($e, {
                  key: 3,
                  status: u.mode
                }, {
                  default: O(() => [
                    U(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : x("", !0)
              ]),
              o("p", Nw, c(u.caption), 1)
            ])
          ]),
          o("p", Rw, c(u.methods.join(" · ")), 1),
          o("div", Uw, [
            I(ce, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: O(() => [...d[3] || (d[3] = [
                U(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(ce, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", u.key)
            }, {
              default: O(() => [
                U(c(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Kw = { class: "flex flex-col gap-6" }, qw = { class: "relative" }, Gw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Ww = ["d"], Zw = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Jw = {
  key: 0,
  class: "flex flex-col gap-4"
}, Yw = { class: "flex flex-wrap items-center gap-2" }, Qw = { class: "text-muted-foreground text-sm font-normal" }, Xw = { class: "flex flex-col gap-1 text-sm" }, e4 = ["value"], t4 = {
  key: 0,
  class: "flex flex-col gap-2"
}, n4 = { class: "flex flex-wrap items-center gap-2" }, a4 = {
  key: 1,
  class: "flex items-center gap-2"
}, rS = /* @__PURE__ */ L({
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
    const l = ft(e, "gateways"), a = K(null), r = K(""), s = y(
      () => l.value.find((b) => b.key === a.value) ?? null
    ), i = y(() => {
      const b = r.value.trim().toLowerCase();
      return b === "" ? l.value : l.value.filter((w) => [w.key, w.label, w.caption, ...w.methods].join(" ").toLowerCase().includes(b));
    });
    function d(b) {
      return b.connected && b.enabled !== !1;
    }
    function u(b, w) {
      l.value = l.value.map(
        (C) => C.key === b ? { ...C, ...w } : C
      );
    }
    function f(b) {
      a.value = b;
    }
    function v(b) {
      const w = l.value.find((M) => M.key === b);
      if (!w)
        return;
      const C = !w.connected;
      u(b, {
        connected: C,
        mode: C ? w.mode ?? "test" : null,
        enabled: C,
        isDefault: !1
      });
    }
    function p(b, w) {
      const C = l.value.find((M) => M.key === b);
      C?.connected && u(b, { enabled: w, isDefault: w ? C.isDefault : !1 });
    }
    function h(b) {
      const w = l.value.find((C) => C.key === b);
      !w || !d(w) || (l.value = l.value.map((C) => ({
        ...C,
        isDefault: C.key === b
      })));
    }
    function $(b) {
      const w = a.value;
      !w || !l.value.find((M) => M.key === w)?.connected || u(w, { mode: b });
    }
    return (b, w) => (t(), n(z, null, [
      o("div", Kw, [
        I(Ie, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", qw, [
          (t(), n("svg", Gw, [
            o("path", {
              d: k(me)("search")
            }, null, 8, Ww)
          ])),
          I(we, {
            modelValue: r.value,
            "onUpdate:modelValue": w[0] || (w[0] = (C) => r.value = C),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(Hw, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", Zw, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      I(At, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: w[8] || (w[8] = (C) => a.value = null)
      }, {
        footer: O(() => [
          I(ce, {
            variant: "outline",
            size: "sm",
            onClick: w[6] || (w[6] = (C) => a.value = null)
          }, {
            default: O(() => [...w[21] || (w[21] = [
              U("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(ce, {
            key: 0,
            size: "sm",
            onClick: w[7] || (w[7] = (C) => v(s.value.key))
          }, {
            default: O(() => [
              U(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : x("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), n("div", Jw, [
            o("div", Yw, [
              I($e, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  U(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D($e, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [...w[9] || (w[9] = [
                  U(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D($e, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [...w[10] || (w[10] = [
                  U(" Disabled ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.isDefault ? (t(), D($e, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...w[11] || (w[11] = [
                  U(" Default ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.connected && s.value.mode ? (t(), D($e, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  U(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : x("", !0)
            ]),
            o("p", Qw, c(s.value.caption), 1),
            o("label", Xw, [
              w[12] || (w[12] = U(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, e4)
            ]),
            w[20] || (w[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              U(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", t4, [
              w[16] || (w[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              w[17] || (w[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", n4, [
                I(ce, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: w[1] || (w[1] = (C) => p(s.value.key, !0))
                }, {
                  default: O(() => [...w[13] || (w[13] = [
                    U(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(ce, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: w[2] || (w[2] = (C) => p(s.value.key, !1))
                }, {
                  default: O(() => [...w[14] || (w[14] = [
                    U(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(ce, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: w[3] || (w[3] = (C) => h(s.value.key))
                }, {
                  default: O(() => [...w[15] || (w[15] = [
                    U(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : x("", !0),
            s.value.connected ? (t(), n("div", a4, [
              I(ce, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: w[4] || (w[4] = (C) => $("test"))
              }, {
                default: O(() => [...w[18] || (w[18] = [
                  U(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(ce, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: w[5] || (w[5] = (C) => $("live"))
              }, {
                default: O(() => [...w[19] || (w[19] = [
                  U(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : x("", !0)
          ])) : x("", !0)
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
function iS(e) {
  const l = K(Bn(e));
  be(() => {
    l.value = Bn(e);
  }), pe(
    l,
    (u) => {
      try {
        localStorage.setItem(e, JSON.stringify([...u]));
      } catch {
      }
    },
    { deep: !0 }
  );
  function a(u) {
    const f = new Set(l.value);
    f.has(u) ? f.delete(u) : f.add(u), l.value = f;
  }
  function r(u) {
    const f = new Set(l.value);
    f.add(u), l.value = f;
  }
  function s(u) {
    const f = new Set(l.value);
    f.delete(u), l.value = f;
  }
  function i(u) {
    l.value = new Set(u);
  }
  function d() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: s, setHidden: i, reset: d };
}
function An(e) {
  if (typeof localStorage > "u")
    return {};
  try {
    const l = localStorage.getItem(e);
    if (!l)
      return {};
    const a = JSON.parse(l), r = {};
    for (const [s, i] of Object.entries(a))
      typeof i == "number" && i >= 48 && i <= 1200 && (r[s] = i);
    return r;
  } catch {
    return {};
  }
}
function dS(e) {
  const l = K(An(e));
  _n() && be(() => {
    l.value = An(e);
  }), pe(
    l,
    (i) => {
      try {
        localStorage.setItem(e, JSON.stringify(i));
      } catch {
      }
    },
    { deep: !0, flush: "sync" }
  );
  function a(i, d) {
    const u = Math.min(1200, Math.max(48, Math.round(d)));
    l.value = { ...l.value, [i]: u };
  }
  function r(i) {
    const d = {};
    for (const [u, f] of Object.entries(i))
      typeof f == "number" && f >= 48 && f <= 1200 && (d[u] = Math.round(f));
    l.value = d;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: a, setWidths: r, reset: s };
}
function uS(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
    l.driver === "none" ? "off" : "connecting"
  ), f = K(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), p, h, $, b = (/* @__PURE__ */ new Date()).toISOString(), w = null;
  function C(G, Z) {
    v.set(G, { ...v.get(G) ?? {}, ...Z }), !p && (p = setTimeout(() => {
      p = void 0, M();
    }, l.batchMs));
  }
  function M() {
    if (v.size === 0)
      return;
    const G = v;
    v = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [W, H] of G) {
      const R = a.value.find((ee) => ee[r] === W);
      if (!R) {
        d?.(W, H);
        continue;
      }
      Object.assign(R, H), Z.add(W);
    }
    Z.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...Z]), setTimeout(() => {
      const W = new Set(f.value);
      Z.forEach((H) => W.delete(H)), f.value = W;
    }, 1500));
  }
  async function B() {
    if (!(!s || a.value.length === 0)) {
      $?.abort(), $ = new AbortController();
      try {
        const G = a.value.map((H) => H[r]), { records: Z, at: W } = await s(G, b);
        b = W, u.value = "live";
        for (const H of Z)
          C(H[r], H);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function S() {
    m(), u.value = "live", h = setInterval(B, l.intervalMs);
  }
  function m() {
    clearInterval(h), h = void 0, $?.abort();
  }
  function g() {
    return window.Echo ?? null;
  }
  function _() {
    const G = g();
    if (!G || !l.channel) {
      u.value = "connecting", console.warn(
        "[alxtexhpanel] broadcast driver configured but window.Echo is unavailable."
      );
      return;
    }
    w = l.channel;
    const Z = G.private(l.channel);
    for (const W of l.events)
      Z.listen(W, (H) => {
        H?.[r] !== void 0 && C(H[r], H);
      });
    u.value = "live", G.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), G.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function T() {
    w && (g()?.leave(w), w = null);
  }
  function F() {
    l.driver === "poll" && S(), l.driver === "broadcast" && _();
  }
  function J() {
    m(), T(), clearTimeout(p), p = void 0, v = /* @__PURE__ */ new Map();
  }
  function N() {
    l.pauseWhenHidden && (document.hidden ? (J(), u.value = "paused") : (b = (/* @__PURE__ */ new Date()).toISOString(), F(), i?.()));
  }
  return _n() && (be(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", N));
  }), ke(() => {
    document.removeEventListener("visibilitychange", N), J();
  })), { status: u, recentlyChanged: f, applyPatch: C, flush: M, pollOnce: B };
}
const l4 = /^[a-z0-9-]+$/, o4 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function cS(e) {
  ba(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !l4.test(a) || typeof r != "string" || !o4.test(r) || (l[`--${a}`] = r);
    _c(l);
  });
}
const s4 = { class: "flex items-center gap-0.5" }, r4 = /* @__PURE__ */ L({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", s4, [
      String(e.value) === "mono" ? (t(), n(z, { key: 0 }, [
        a[0] || (a[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        a[1] || (a[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        a[2] || (a[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), n(z, { key: 1 }, [
        a[3] || (a[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        a[4] || (a[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        a[5] || (a[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), i4 = /* @__PURE__ */ L({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), D(aa, {
      code: "AB-1234",
      style: ie(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), d4 = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, u4 = ["aria-selected", "disabled", "title", "onClick"], c4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.field.icons ?? []), i = y(() => typeof a.modelValue == "string" ? a.modelValue : "");
    function d(u) {
      a.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, f) => (t(), n("div", d4, [
      (t(!0), n(z, null, j(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: A(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [
          k(Me),
          i.value === v ? "border-primary bg-primary/10 text-primary" : ""
        ]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (p) => d(v)
      }, c(v), 11, u4))), 128))
    ]));
  }
}), f4 = ["value", "placeholder", "disabled"], m4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => typeof a.modelValue == "string" ? a.modelValue : "");
    function i(d) {
      const u = d.target.value;
      r("update:modelValue", u === "" ? null : u.trim());
    }
    return (d, u) => (t(), n("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: A(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", k(Me)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, f4));
  }
}), p4 = ["aria-label"], v4 = ["disabled", "aria-label", "aria-pressed", "onClick"], g4 = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, h4 = { key: 0 }, b4 = ["id"], y4 = ["fill"], x4 = ["disabled"], k4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => Math.max(1, Math.min(10, Number(a.field.max ?? 5)))), i = y(() => !!a.field.allowHalf), d = y(() => {
      const v = Number(a.modelValue);
      return Number.isFinite(v) ? v : 0;
    });
    function u(v) {
      a.disabled || r("update:modelValue", v);
    }
    function f(v) {
      return d.value >= v ? "full" : i.value && d.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(z, null, j(s.value, (h) => (t(), n("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: ($) => u(h)
      }, [
        (t(), n("svg", g4, [
          f(h) === "half" ? (t(), n("defs", h4, [
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
            ])], 8, b4)
          ])) : x("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, y4)
        ]))
      ], 8, v4))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, x4)) : x("", !0)
    ], 8, p4));
  }
}), $4 = { class: "flex flex-col gap-2" }, w4 = { class: "bg-card rounded-lg border p-4" }, C4 = { class: "text-muted-foreground truncate text-xs" }, S4 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, M4 = /* @__PURE__ */ L({
  __name: "PkSeoPreview",
  props: {
    field: {},
    values: { default: () => ({}) }
  },
  setup(e) {
    const l = e, a = {
      titleMax: 60,
      titleMin: 30,
      descriptionMax: 160,
      descriptionMin: 70
    }, r = y(() => ({ ...a, ...l.field.limits ?? {} })), s = y(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = y(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = y(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = y(() => {
      const w = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return w === "" ? d.value : `${d.value} › ${w.split("/").join(" › ")}`;
    });
    function f(w, C) {
      return w.length <= C ? w : `${w.slice(0, C - 1).trimEnd()}…`;
    }
    const v = y(() => f(s.value, r.value.titleMax)), p = y(() => f(i.value, r.value.descriptionMax));
    function h(w, C, M) {
      return w === 0 ? { tone: "text-muted-foreground", note: "empty" } : w > M ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : w < C ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const $ = y(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), b = y(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (w, C) => (t(), n("div", $4, [
      o("div", w4, [
        o("p", C4, c(u.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, c(v.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", S4, [
        o("span", {
          class: A($.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c($.value.note), 3),
        o("span", {
          class: A(b.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(b.value.note), 3)
      ]),
      C[0] || (C[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), B4 = {
  class: "relative",
  "data-test": "tree-select-field"
}, A4 = ["disabled"], _4 = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, z4 = ["onClick"], P4 = ["onClick"], L4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = K(""), i = K(!1), d = y(() => a.field.options ?? []);
    function u(h, $) {
      return !$ || h.label.toLowerCase().includes($) ? !0 : (h.children ?? []).some((b) => u(b, $));
    }
    const f = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter(($) => u($, h)) : d.value;
    }), v = y(() => {
      const h = ($) => {
        for (const b of $) {
          if (b.value === a.modelValue)
            return b.label;
          const w = h(b.children ?? []);
          if (w)
            return w;
        }
        return null;
      };
      return h(d.value);
    });
    function p(h) {
      a.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, $) => (t(), n("div", B4, [
      o("button", {
        type: "button",
        class: A(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Me)]),
        disabled: e.disabled,
        onClick: $[0] || ($[0] = (b) => i.value = !i.value)
      }, [
        o("span", {
          class: A(v.value ? "" : "text-muted-foreground")
        }, c(v.value ?? "Select…"), 3),
        $[2] || ($[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, A4),
      i.value ? (t(), n("div", _4, [
        e.field.searchable ? ge((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": $[1] || ($[1] = (b) => s.value = b),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [_e, s.value]
        ]) : x("", !0),
        (t(!0), n(z, null, j(f.value, (b) => (t(), n(z, {
          key: String(b.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === b.value ? "bg-accent" : ""]),
            onClick: (w) => p(b.value)
          }, c(b.label), 11, z4),
          (t(!0), n(z, null, j(b.children ?? [], (w) => (t(), n("button", {
            key: String(w.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === w.value ? "bg-accent text-foreground" : ""]),
            onClick: (C) => p(w.value)
          }, c(w.label), 11, P4))), 128))
        ], 64))), 128))
      ])) : x("", !0)
    ]));
  }
});
function O4() {
  xe("radio", fv), xe("toggle-buttons", Nn), xe("checkboxlist", vv), xe("tags", $v), xe("colour", jv), xe("slider", mg), xe("rating", k4), xe("phone", m4), xe("icon-picker", c4), xe("tree-select", L4), xe("visual-select", Mg), xe("markdown", Kp), xe("code", Qp), xe("map", Ev), xe("qrcode", Hv), xe("barcode", Yv), xe("diff", eg), xe("seo-preview", M4), Vt("swatch", Ag), Vt("voucher-code-box", i4), Vt("document-colour-mode", r4);
}
function sa() {
  const e = K(null), l = K(!1);
  let a = null;
  return be(() => {
    if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver > "u" || !e.value) {
      l.value = !0;
      return;
    }
    a = new IntersectionObserver(
      (s) => {
        for (const i of s)
          i.isIntersecting && (l.value = !0, a?.disconnect());
      },
      // A little before it arrives, so the motion finishes as it lands
      // rather than starting once the reader is already looking at it.
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), a.observe(e.value);
  }), ke(() => a?.disconnect()), { el: e, shown: l };
}
const j4 = /* @__PURE__ */ L({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = sa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ie({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), V4 = ["id"], Be = /* @__PURE__ */ L({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: A(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: A(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        I(j4, null, {
          default: O(() => [
            q(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, V4));
  }
}), D4 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, T4 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, I4 = {
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
    return (l, a) => e.title || e.body || e.eyebrow ? (t(), n("div", {
      key: 0,
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", D4, c(e.eyebrow), 1)) : x("", !0),
      e.title ? (t(), n("h2", T4, c(e.title), 1)) : x("", !0),
      e.body ? (t(), n("p", I4, c(e.body), 1)) : x("", !0)
    ], 2)) : x("", !0);
  }
}), E4 = { class: "flex flex-col gap-10" }, F4 = { class: "grid gap-4 md:grid-cols-3" }, N4 = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, R4 = { class: "text-sm font-semibold text-balance" }, U4 = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, H4 = /* @__PURE__ */ L({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", E4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", F4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), D(Ce(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: O(() => [
                  r.meta ? (t(), n("p", N4, c(r.meta), 1)) : x("", !0),
                  o("h3", R4, c(r.title), 1),
                  r.body ? (t(), n("p", U4, c(r.body), 1)) : x("", !0)
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
function K4() {
  const e = K(null);
  let l = null;
  function a(s) {
    if (!l)
      return;
    const i = l.getBoundingClientRect();
    l.style.setProperty("--pk-px", String((s.clientX - i.left) / i.width)), l.style.setProperty("--pk-py", String((s.clientY - i.top) / i.height));
  }
  function r() {
    l?.style.setProperty("--pk-px", "0.5"), l?.style.setProperty("--pk-py", "0.5");
  }
  return be(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const q4 = { class: "pk-tilt-inner relative h-full" }, G4 = /* @__PURE__ */ L({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = K4();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", q4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(a.$slots, "default")
      ])
    ], 512));
  }
}), W4 = { class: "flex flex-col gap-10" }, Z4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, J4 = { class: "text-base font-semibold" }, Y4 = { class: "text-sm text-pretty text-muted-foreground" }, Q4 = /* @__PURE__ */ L({
  __name: "PkBento",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(a) {
      return {
        wide: "sm:col-span-2",
        tall: "sm:row-span-2",
        large: "sm:col-span-2 sm:row-span-2"
      }[a ?? ""] ?? "";
    }
    return (a, r) => (t(), D(Be, null, {
      default: O(() => [
        o("div", W4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Z4, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), D(G4, {
              key: i,
              class: A(l(s.span))
            }, {
              default: O(() => [
                o("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", J4, c(s.title), 1),
                  o("p", Y4, c(s.body), 1)
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
}), X4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, e5 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, t5 = { class: "grid gap-4 text-sm" }, n5 = {
  key: 0,
  class: "grid gap-1"
}, a5 = ["href"], l5 = {
  key: 1,
  class: "grid gap-1"
}, o5 = ["href"], s5 = {
  key: 2,
  class: "grid gap-1"
}, r5 = { class: "text-pretty text-muted-foreground" }, i5 = ["href"], d5 = /* @__PURE__ */ L({
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
    return (l, a) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", X4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", e5, [
            o("dl", t5, [
              e.email ? (t(), n("div", n5, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, a5)
                ])
              ])) : x("", !0),
              e.phone ? (t(), n("div", l5, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, o5)
                ])
              ])) : x("", !0),
              e.address ? (t(), n("div", s5, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", r5, c(e.address), 1)
              ])) : x("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, i5)) : x("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), u5 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, c5 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, f5 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, m5 = ["href"], p5 = /* @__PURE__ */ L({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", u5, [
          o("h2", c5, c(e.title), 1),
          e.body ? (t(), n("p", f5, c(e.body), 1)) : x("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, m5)) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), v5 = { class: "flex flex-col gap-8" }, g5 = { class: "divide-y rounded-lg border" }, h5 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, b5 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, y5 = /* @__PURE__ */ L({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, { narrow: "" }, {
      default: O(() => [
        o("div", v5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", g5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", h5, [
                U(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", b5, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), x5 = { class: "flex flex-col gap-10" }, k5 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, $5 = { class: "text-sm font-semibold" }, w5 = { class: "text-sm text-pretty text-muted-foreground" }, C5 = /* @__PURE__ */ L({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", x5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", k5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", $5, c(r.title), 1),
              o("p", w5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), S5 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, M5 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, B5 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, A5 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, _5 = ["href"], z5 = ["href"], P5 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, L5 = /* @__PURE__ */ L({
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
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", {
          class: A(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", S5, c(e.brand), 1)) : x("", !0),
          e.eyebrow ? (t(), n("p", M5, c(e.eyebrow), 1)) : x("", !0),
          o("h1", {
            class: A(["max-w-3xl font-semibold tracking-tight text-balance", e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"])
          }, c(e.title), 3),
          e.body ? (t(), n("p", B5, c(e.body), 1)) : x("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", A5, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, _5)) : x("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, z5)) : x("", !0)
          ])) : x("", !0),
          e.note ? (t(), n("p", P5, c(e.note), 1)) : x("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), O5 = { class: "flex flex-col items-center gap-6" }, j5 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, V5 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, D5 = /* @__PURE__ */ L({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", O5, [
          e.title ? (t(), n("p", j5, c(e.title), 1)) : x("", !0),
          o("ul", V5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), T5 = { class: "flex flex-col gap-10" }, I5 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, E5 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, F5 = ["aria-pressed"], N5 = ["aria-pressed"], R5 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, U5 = { class: "grid gap-4 md:grid-cols-3" }, H5 = { class: "flex flex-col gap-1" }, K5 = { class: "text-sm font-semibold" }, q5 = { class: "flex items-baseline gap-1" }, G5 = { class: "text-3xl font-semibold tracking-tight" }, W5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, Z5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, J5 = { class: "flex flex-col gap-2 text-sm" }, Y5 = { class: "text-muted-foreground" }, Q5 = ["href"], X5 = /* @__PURE__ */ L({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = K(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", T5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", I5, [
            o("div", E5, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, F5),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, N5)
            ]),
            e.annualNote ? (t(), n("p", R5, c(e.annualNote), 1)) : x("", !0)
          ])) : x("", !0),
          o("ul", U5, [
            (t(!0), n(z, null, j(e.items ?? [], (u, f) => (t(), n("li", {
              key: f,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", H5, [
                o("h3", K5, c(u.name), 1),
                o("p", q5, [
                  o("span", G5, c(s(u)), 1),
                  u.period ? (t(), n("span", W5, c(u.period), 1)) : x("", !0)
                ]),
                u.body ? (t(), n("p", Z5, c(u.body), 1)) : x("", !0)
              ]),
              o("ul", J5, [
                (t(!0), n(z, null, j(u.features ?? [], (v, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", Y5, c(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, Q5)) : x("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function e3() {
  const e = K(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), f = u.height + window.innerHeight, v = f <= 0 ? 0 : (window.innerHeight - u.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(v, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return be(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((f) => {
        s = f.some((v) => v.isIntersecting), s && d();
      }), a.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const t3 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, n3 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, a3 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, l3 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, o3 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, s3 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, r3 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, i3 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, d3 = { class: "ml-3 truncate text-xs text-muted-foreground" }, u3 = { class: "flex" }, c3 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, f3 = { class: "min-w-0 flex-1 p-4" }, m3 = { class: "flex flex-col divide-y rounded-md border" }, p3 = /* @__PURE__ */ L({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = e3();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", t3, [
        o("div", n3, [
          o("div", a3, [
            o("h2", l3, c(e.title), 1),
            e.body ? (t(), n("p", o3, c(e.body), 1)) : x("", !0)
          ]),
          o("div", s3, [
            o("div", r3, [
              o("div", i3, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", d3, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", u3, [
                o("div", c3, [
                  (t(), n(z, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ie({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", f3, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", m3, [
                    (t(!0), n(z, null, j(e.rows, (s) => (t(), n("div", {
                      key: s,
                      class: "pk-showcase-row flex items-center gap-3 px-3 py-2.5",
                      style: ie({ "--pk-row": String(s) })
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
}), v3 = /* @__PURE__ */ L({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = sa(), s = K(0);
    return pe(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), f = (v) => {
        const p = Math.min((v - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), g3 = { class: "flex flex-col gap-10" }, h3 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, b3 = { class: "order-2 text-sm text-muted-foreground" }, y3 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, x3 = /* @__PURE__ */ L({
  __name: "PkStats",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    function l(a) {
      const r = /^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/.exec((a ?? "").trim());
      if (!r)
        return null;
      const s = r[2].includes(".") ? r[2].split(".")[1].length : 0;
      return { prefix: r[1], number: Number(r[2]), suffix: r[3], decimals: s };
    }
    return (a, r) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", g3, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", h3, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", b3, c(s.label), 1),
              o("dd", y3, [
                l(s.value) ? (t(), D(v3, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  U(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), k3 = { class: "flex flex-col gap-10" }, $3 = { class: "grid gap-6 md:grid-cols-3" }, w3 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, C3 = { class: "text-sm font-semibold" }, S3 = { class: "text-sm text-pretty text-muted-foreground" }, M3 = /* @__PURE__ */ L({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", k3, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", $3, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", w3, c(s + 1), 1),
              o("h3", C3, c(r.title), 1),
              o("p", S3, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), B3 = { class: "flex flex-col gap-10" }, A3 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, _3 = ["src"], z3 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, P3 = { class: "min-w-0" }, L3 = { class: "truncate text-sm font-semibold" }, O3 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, j3 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, V3 = /* @__PURE__ */ L({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", B3, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", A3, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, _3)) : (t(), n("span", z3, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", P3, [
                o("h3", L3, c(r.name), 1),
                r.role ? (t(), n("p", O3, c(r.role), 1)) : x("", !0)
              ]),
              r.bio ? (t(), n("p", j3, c(r.bio), 1)) : x("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D3 = { class: "flex flex-col gap-10" }, T3 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, I3 = { class: "flex h-full flex-col gap-4" }, E3 = { class: "text-pretty text-sm leading-relaxed" }, F3 = { class: "mt-auto flex items-center gap-3" }, N3 = ["src"], R3 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, U3 = { class: "min-w-0" }, H3 = { class: "block truncate text-sm font-medium" }, K3 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, q3 = /* @__PURE__ */ L({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: O(() => [
        o("div", D3, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", T3, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("figure", I3, [
                o("blockquote", E3, " “" + c(r.quote) + "” ", 1),
                o("figcaption", F3, [
                  r.avatar ? (t(), n("img", {
                    key: 0,
                    src: r.avatar,
                    alt: "",
                    class: "size-9 shrink-0 rounded-full object-cover"
                  }, null, 8, N3)) : (t(), n("span", R3, c((r.name ?? "?").slice(0, 1)), 1)),
                  o("span", U3, [
                    o("span", H3, c(r.name), 1),
                    r.role ? (t(), n("span", K3, c(r.role), 1)) : x("", !0)
                  ])
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), fS = /* @__PURE__ */ L({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: L5,
      logos: D5,
      features: C5,
      bento: Q4,
      showcase: p3,
      steps: M3,
      stats: x3,
      testimonials: q3,
      team: V3,
      articles: H4,
      contact: d5,
      pricing: X5,
      faq: y5,
      cta: p5
    }, s = y(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, j(s.value, (u) => (t(), D(Ce(u.component), de({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), G3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, mS = /* @__PURE__ */ L({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", G3, [
      o("div", {
        class: A([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: A([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: A([
          "pk-blob absolute top-1/3 left-1/4 size-[30rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-40 dark:opacity-30" : "opacity-20 dark:opacity-10"
        ]),
        style: { background: "radial-gradient(circle at 40% 60%, var(--pk-aurora-3), transparent 70%)", "animation-delay": "-14s" }
      }, null, 2),
      a[0] || (a[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), W3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, pS = /* @__PURE__ */ L({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", W3, [...a[0] || (a[0] = [
      rt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), Z3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, vS = /* @__PURE__ */ L({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", Z3, [...a[0] || (a[0] = [
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
}), J3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, gS = /* @__PURE__ */ L({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", J3, [...a[0] || (a[0] = [
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
O4();
const hS = "0.0.1";
export {
  pn as ACTION_KEY_ICONS,
  Ut as APPEARANCE_STYLE_ID,
  Zf as Alert,
  Jf as AlertDescription,
  Yf as AlertTitle,
  b6 as AppPageFooter,
  j8 as AppearanceDrawer,
  jC as Avatar,
  VC as AvatarFallback,
  DC as AvatarImage,
  ln as BADGE_VARIANTS,
  A8 as BadgeResolver,
  B6 as BarChart,
  TC as Breadcrumb,
  IC as BreadcrumbEllipsis,
  EC as BreadcrumbItem,
  FC as BreadcrumbLink,
  NC as BreadcrumbList,
  RC as BreadcrumbPage,
  UC as BreadcrumbSeparator,
  u8 as BulkActions,
  Qn as CATALOGUE_CONTAINER,
  nm as CATALOGUE_GRID,
  R8 as CATALOGUE_GRID_TIGHT,
  am as CATALOGUE_GRID_TILES,
  i6 as Card,
  d6 as CardAction,
  u6 as CardContent,
  c6 as CardDescription,
  f6 as CardFooter,
  m6 as CardHeader,
  p6 as CardTitle,
  p2 as CartPanel,
  U6 as CatalogBrowser,
  Ky as CatalogCard,
  oa as CatalogFilterSheet,
  dn as CatalogGrid,
  N6 as CatalogInspect,
  pk as CatalogItemDetail,
  R6 as CatalogItemView,
  H6 as CatalogRegister,
  F6 as CatalogTill,
  _b as ChartCard,
  vt as ChartTooltip,
  ei as Checkbox,
  $8 as CheckboxCell,
  w8 as CodeCell,
  gu as ColourCell,
  L6 as ComboChart,
  ni as CreateOptionDialog,
  Zr as CreateOptionError,
  q6 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Zk as DASHBOARD_HIDE_KEY,
  G6 as DashboardShortcuts,
  fo as DataTable,
  YC as Dialog,
  QC as DialogClose,
  XC as DialogContent,
  e6 as DialogDescription,
  t6 as DialogFooter,
  n6 as DialogHeader,
  jm as DialogOverlay,
  a6 as DialogScrollContent,
  l6 as DialogTitle,
  o6 as DialogTrigger,
  xC as DropdownMenu,
  kC as DropdownMenuCheckboxItem,
  $C as DropdownMenuContent,
  wC as DropdownMenuGroup,
  CC as DropdownMenuItem,
  SC as DropdownMenuLabel,
  xS as DropdownMenuPortal,
  MC as DropdownMenuRadioGroup,
  BC as DropdownMenuRadioItem,
  AC as DropdownMenuSeparator,
  _C as DropdownMenuShortcut,
  zC as DropdownMenuSub,
  PC as DropdownMenuSubContent,
  LC as DropdownMenuSubTrigger,
  OC as DropdownMenuTrigger,
  M8 as EditableCell,
  Me as FOCUS_RING,
  c8 as FOCUS_RING_SOFT,
  gn as FOCUS_RING_WITHIN,
  mo as FORM_MEASURE,
  Ge as FormFieldControl,
  O6 as HeatmapChart,
  gl as ICON_ALIASES,
  yt as ICON_PATHS,
  Ue as INPUT_COPY,
  Xr as INPUT_PLACEHOLDER,
  Qr as INPUT_TEXT,
  su as IconCell,
  cu as ImageCell,
  sS as InfoNode,
  _8 as InlineRecordActions,
  sm as JPEG_IMAGE_ERROR,
  C8 as KeyValueCell,
  s6 as Label,
  qh as LineChart,
  W0 as LineItems,
  i8 as MODAL_PANEL,
  d8 as MODAL_PANEL_FORM,
  kt as MODAL_WIDTH,
  h8 as MUTED_COPY,
  bt as MUTED_COPY_SNUG,
  b8 as MUTED_COPY_XS,
  St as MiniStatCard,
  HC as NavigationMenu,
  KC as NavigationMenuContent,
  qC as NavigationMenuIndicator,
  GC as NavigationMenuItem,
  WC as NavigationMenuLink,
  ZC as NavigationMenuList,
  JC as NavigationMenuTrigger,
  Lm as NavigationMenuViewport,
  om as OPAQUE_IMAGE_ERROR,
  En as OVERLAY_FORM_MEASURE,
  nt as PAGE_SHELL,
  s8 as PAGE_SHELL_COMPACT,
  r8 as PAGE_SHELL_STACK,
  rS as PaymentGatewaySettings,
  Hw as PaymentGateways,
  A6 as PieChart,
  F8 as PkAlertError,
  H4 as PkArticles,
  mS as PkAuroraBackdrop,
  We as PkBadge,
  Yv as PkBarcode,
  Q4 as PkBento,
  V8 as PkBottomNav,
  v6 as PkBoundary,
  $6 as PkBuilder,
  ce as PkButton,
  w6 as PkCalendar,
  g6 as PkCard,
  vv as PkCheckboxList,
  aa as PkCodeBox,
  Qp as PkCodeInput,
  jv as PkColourPicker,
  vS as PkConsoleBackdrop,
  d5 as PkContact,
  v3 as PkCountUp,
  p5 as PkCta,
  y6 as PkDeviceFrame,
  eg as PkDiff,
  oh as PkDocument,
  He as PkDropdown,
  pS as PkEditorialBackdrop,
  Ft as PkEmptyState,
  y5 as PkFaq,
  C5 as PkFeatureGrid,
  ze as PkFieldLabel,
  Fn as PkFileUpload,
  Ie as PkHeading,
  L5 as PkHero,
  zi as PkKeyValue,
  fS as PkLandingSections,
  D5 as PkLogoCloud,
  Dv as PkMap,
  Ev as PkMapField,
  Kp as PkMarkdownInput,
  ut as PkModal,
  tn as PkMultiSelect,
  I8 as PkOtpInput,
  E8 as PkPageHeader,
  X6 as PkPasskeyRegister,
  N8 as PkPasswordInput,
  X5 as PkPricing,
  Hv as PkQrCode,
  T0 as PkQtyStepper,
  ys as PkQueryBuilder,
  fv as PkRadioGroup,
  k6 as PkRepeater,
  j4 as PkReveal,
  Fi as PkRichEditor,
  Be as PkSection,
  je as PkSectionHeading,
  x6 as PkSetupWizardCompletion,
  p3 as PkShowcase,
  _k as PkSignaturePad,
  Pe as PkSkeleton,
  At as PkSlideover,
  mg as PkSlider,
  T8 as PkSpinner,
  x3 as PkStats,
  $e as PkStatusBadge,
  Gr as PkStepIndicator,
  M3 as PkSteps,
  gS as PkStudioBackdrop,
  D8 as PkSubNav,
  Ag as PkSwatchPreview,
  $v as PkTagsInput,
  V3 as PkTeam,
  q3 as PkTestimonials,
  we as PkTextInput,
  G4 as PkTiltCard,
  Nn as PkToggleButtons,
  Mg as PkVisualSelect,
  bx as PlanCard,
  I6 as PlanEditor,
  T6 as PlanGrid,
  E6 as PlanPurchaseCard,
  P6 as PolarAreaChart,
  z6 as RadarChart,
  k8 as RatingCell,
  sc as RecordActions,
  eS as RecordForm,
  x8 as RelationCreateDialog,
  m8 as RelationPanel,
  po as SLIDEOVER_BODY,
  vo as SLIDEOVER_WIDTH,
  $y as STATUS_TONES,
  _6 as ScatterChart,
  Rn as SchemaNode,
  V6 as SegmentedBar,
  J6 as SelectionBar,
  Bm as Separator,
  Z6 as SetupChecklist,
  Yn as ShadcnInput,
  nn as Sheet,
  G8 as SheetClose,
  an as SheetContent,
  fm as SheetDescription,
  W8 as SheetFooter,
  mm as SheetHeader,
  pm as SheetTitle,
  Z8 as SheetTrigger,
  Wb as ShortcutsWidget,
  J8 as Sidebar,
  Y8 as SidebarContent,
  Q8 as SidebarFooter,
  X8 as SidebarGroup,
  eC as SidebarGroupAction,
  tC as SidebarGroupContent,
  nC as SidebarGroupLabel,
  aC as SidebarHeader,
  lC as SidebarInput,
  oC as SidebarInset,
  sC as SidebarMenu,
  rC as SidebarMenuAction,
  iC as SidebarMenuBadge,
  uC as SidebarMenuButton,
  cC as SidebarMenuItem,
  fC as SidebarMenuSkeleton,
  mC as SidebarMenuSub,
  pC as SidebarMenuSubButton,
  vC as SidebarMenuSubItem,
  gC as SidebarProvider,
  hC as SidebarRail,
  bC as SidebarSeparator,
  yC as SidebarTrigger,
  K6 as SignatureStudio,
  zt as Sparkline,
  r6 as Spinner,
  j6 as StatCard,
  D6 as StatListChart,
  W6 as StatStrip,
  Je as Switch,
  Xn as TRANSPARENT_IMAGE_HELP,
  Y6 as TablePagination,
  Wo as TableShell,
  Q6 as TableTabs,
  Sr as TableToolbar,
  S8 as TagsCell,
  M6 as ThemeToggle,
  Cm as Tooltip,
  Sm as TooltipContent,
  dC as TooltipProvider,
  Mm as TooltipTrigger,
  la as TrendBadge,
  tS as UnsavedBar,
  Uu as actionColorTone,
  Qf as alertVariants,
  Bc as appearancePayload,
  qn as appearanceVars,
  Ht as applyAppearance,
  cm as assertTransparentImage,
  P8 as bootstrapAppearance,
  Ye as buttonClasses,
  Mt as catalogFiltersActive,
  oe as cn,
  Yr as createOptionActionLabel,
  Jr as createOptionTitle,
  qy as cycleLabel,
  Ee as emptyCatalogFilters,
  dw as entryView,
  Wr as fieldControl,
  y8 as fieldErrorsFromPayload,
  h2 as findExactSku,
  Gy as formatPerkValue,
  Ou as hasBadgeValue,
  lS as hasEntryView,
  p8 as hasFieldControl,
  C6 as hasOptionPreview,
  me as iconPath,
  dm as imageHasTransparency,
  Gn as initializeAppearance,
  sn as isDark,
  un as matchCatalogItem,
  K8 as mergeLayoutItems,
  Om as navigationMenuTriggerStyle,
  pg as optionPreview,
  U8 as packWidgetColumns,
  H8 as parseWidgetId,
  Wy as perkGranted,
  rn as readAppearance,
  Ac as readServerAppearance,
  O4 as registerBuiltInFieldControls,
  aS as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  uw as registeredEntryViews,
  v8 as registeredFieldTypes,
  vg as registeredOptionPreviews,
  z8 as resetAppearanceBootstrapForTests,
  oS as resetEntryViews,
  g8 as resetFieldControls,
  S6 as resetOptionPreviews,
  Te as resolveActionIcon,
  O8 as setAppearancePersister,
  Am as sidebarMenuButtonVariants,
  My as statusBadgeVariant,
  Sy as statusTone,
  L8 as syncAppearanceFromInertiaPage,
  q8 as toPersistedLayout,
  f8 as toUrl,
  Jn as useAppearance,
  iS as useColumnVisibility,
  dS as useColumnWidths,
  uS as useLiveUpdates,
  K4 as usePointer,
  sa as useReveal,
  B8 as useSchemaColumns,
  e3 as useScrollProgress,
  h6 as useShellPageFooter,
  _t as useSidebar,
  cS as useTenantTheme,
  nS as useUnsavedChanges,
  hS as version,
  xn as widgetId
};
//# sourceMappingURL=index.js.map
