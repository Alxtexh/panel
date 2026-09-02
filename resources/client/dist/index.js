import './ui.css';
import { defineComponent as L, useSlots as Gt, openBlock as t, createElementBlock as a, normalizeClass as A, unref as k, renderSlot as q, createElementVNode as o, toDisplayString as c, createCommentVNode as x, computed as y, normalizeStyle as ie, Fragment as z, renderList as j, ref as K, watch as pe, useId as da, withModifiers as he, createTextVNode as R, createVNode as E, createStaticVNode as rt, createBlock as D, createSlots as it, withCtx as O, nextTick as De, onBeforeUnmount as ke, Teleport as ct, Transition as Xe, onMounted as be, withDirectives as ge, vModelText as _e, mergeProps as de, normalizeProps as Le, guardReactiveProps as Ne, resolveDynamicComponent as Ce, resolveComponent as Wt, vModelSelect as Ze, vModelDynamic as ua, defineAsyncComponent as mn, inject as xt, vShow as Ke, withKeys as Tt, onUnmounted as ca, isRef as fa, useTemplateRef as ma, onErrorCaptured as pa, provide as It, reactive as dt, useModel as ft, mergeModels as Fe, markRaw as va, shallowRef as ga, watchEffect as ha } from "vue";
import { useForwardPropsEmits as ye, DialogRoot as _n, DialogOverlay as Zt, DialogPortal as Jt, DialogContent as Yt, DialogClose as et, CheckboxRoot as ba, CheckboxIndicator as ya, SwitchRoot as xa, SwitchThumb as ka, DialogDescription as zn, DialogTitle as Pn, DialogTrigger as Ln, createContext as $a, Primitive as tt, TooltipRoot as wa, TooltipPortal as Ca, TooltipContent as Sa, TooltipArrow as Ma, TooltipProvider as On, TooltipTrigger as Ba, Separator as Aa, DropdownMenuRoot as _a, DropdownMenuCheckboxItem as za, DropdownMenuItemIndicator as jn, DropdownMenuPortal as Pa, DropdownMenuContent as La, DropdownMenuGroup as Oa, useForwardProps as Oe, DropdownMenuItem as ja, DropdownMenuLabel as Va, DropdownMenuRadioGroup as Da, DropdownMenuRadioItem as Ta, DropdownMenuSeparator as Ia, DropdownMenuSub as Ea, DropdownMenuSubContent as Fa, DropdownMenuSubTrigger as Na, DropdownMenuTrigger as Ra, AvatarRoot as Ua, AvatarFallback as Ha, AvatarImage as Ka, NavigationMenuViewport as qa, NavigationMenuRoot as Ga, NavigationMenuContent as Wa, NavigationMenuIndicator as Za, NavigationMenuItem as Ja, NavigationMenuLink as Ya, NavigationMenuList as Qa, NavigationMenuTrigger as Xa, Label as el } from "reka-ui";
import { DropdownMenuPortal as bS } from "reka-ui";
import { X as Qt, Check as Vn, AlertCircle as tl, EyeOff as nl, Eye as al, PanelLeftOpen as ll, PanelLeftClose as ol, Circle as sl, ChevronRight as Dn, MoreHorizontal as rl, ChevronDown as il, Loader2Icon as dl } from "@lucide/vue";
import { reactiveOmit as ve, useVModel as Tn, useMediaQuery as ul, useEventListener as cl, defaultDocument as fl } from "@vueuse/core";
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
function me(e) {
  if (!e)
    return yt.dot;
  const l = vl[e] ?? e;
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
  const n = gl(e.label);
  if (n)
    return me(n);
  if (e.destructive)
    return me("trash");
  const r = e.color ?? "";
  return r && vn[r] ? me(vn[r]) : me("circle");
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
      class: A(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), a("div", hl, [
        q(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: A(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        q(n.$slots, "icon", {}, () => [
          (t(), a("svg", {
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
            }, null, 8, bl)
          ], 2))
        ])
      ], 2)),
      o("div", yl, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), a("p", xl, c(e.description), 1)) : x("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", kl, [
        q(n.$slots, "actions")
      ])) : x("", !0)
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
      style: ie(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), a(z, null, j(s.value, (f) => (t(), a("span", {
        key: f,
        "aria-hidden": "true",
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: ie({
          width: i(f - 1),
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
      const re = X[n.groupBy.key];
      return re == null || re === "" ? "" : String(re);
    }
    function s(X) {
      return n.groupBy ? X === 0 ? !0 : r(n.rows[X]) !== r(n.rows[X - 1]) : !1;
    }
    function i(X) {
      if (X.__groupTitle)
        return String(X.__groupTitle);
      const re = n.groupBy ? X[n.groupBy.key] : null, ae = re == null || re === "" ? "None" : String(re);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? ae : `${n.groupBy.label}: ${ae}`;
    }
    const d = K(/* @__PURE__ */ new Set()), u = K(/* @__PURE__ */ new Set());
    function f(X) {
      return n.groupBy?.collapsible ? d.value.has(X) : !1;
    }
    function v(X) {
      if (!n.groupBy?.collapsible)
        return;
      const re = new Set(u.value);
      re.add(X), u.value = re;
      const ae = new Set(d.value);
      ae.has(X) ? ae.delete(X) : ae.add(X), d.value = ae;
    }
    function p(X) {
      return n.groupBy?.collapsible ? !f(r(n.rows[X])) : !0;
    }
    pe(
      () => n.rows,
      (X) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
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
      const ae = n.rows.map((ue) => ue[n.rowKey]), [fe] = ae.splice(re, 1);
      ae.splice(X, 0, fe), S("reorder", ae);
    }
    const S = l;
    function m(X, re) {
      !n.rowClickable || n.reordering || re.button !== 0 || re.metaKey || re.ctrlKey || re.shiftKey || re.altKey || re.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || S("row-click", X);
    }
    const g = K(null), _ = da(), T = y(() => n.columns.filter((X) => !n.hidden?.has(X.key))), F = y(() => {
      const X = T.value.find((re) => re.sticky);
      return X ? X.key : n.stickyFirst && T.value.length > 0 ? T.value[0].key : null;
    });
    function J(X) {
      return F.value === X.key;
    }
    function N() {
      return n.selectable && !n.reordering ? `${io}px` : "0";
    }
    function G(X) {
      const re = n.columnWidths?.[X.key];
      return typeof re == "number" ? re : X.width;
    }
    function Z(X) {
      const re = G(X), ae = J(X), fe = {};
      return re !== void 0 && (fe.width = `${re}px`, fe.minWidth = `${re}px`, fe.maxWidth = `${re}px`), ae && (fe.left = N()), Object.keys(fe).length ? fe : void 0;
    }
    function W(X) {
      return n.resizable ? X.resizable !== !1 : !1;
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
    const U = y(() => T.value.some((X) => !!X.group)), ee = y(() => {
      const X = [];
      for (const re of T.value) {
        const ae = re.group ?? null, fe = X[X.length - 1];
        fe && fe.label === ae ? fe.span += 1 : X.push({ label: ae, span: 1, key: `${ae ?? "loose"}-${re.key}` });
      }
      return X;
    });
    function P(X) {
      const re = X[n.rowKey];
      return re == null || re === "" ? null : re;
    }
    function Y(X) {
      const re = P(X);
      return re !== null && !!n.selected?.has(re);
    }
    const V = K(null);
    function I(X) {
      return n.rows.findIndex((re) => {
        const ae = P(re);
        return ae !== null && ae === X;
      });
    }
    function te(X, re) {
      const ae = P(X);
      if (ae === null)
        return;
      const fe = re.shiftKey, ue = !!n.selected?.has(ae);
      if (fe && V.value !== null && V.value !== ae) {
        const qe = I(V.value), Re = I(ae);
        if (qe !== -1 && Re !== -1) {
          const lt = Math.min(qe, Re), Pt = Math.max(qe, Re), ia = !ue;
          for (let ht = lt; ht <= Pt; ht++) {
            if (!p(ht))
              continue;
            const Lt = P(n.rows[ht]);
            if (Lt === null)
              continue;
            !!n.selected?.has(Lt) !== ia && S("toggle-row", Lt);
          }
          V.value = ae;
          return;
        }
      }
      S("toggle-row", ae), V.value = ae;
    }
    const le = y(
      () => n.rows.map((X) => P(X)).filter((X) => X !== null)
    ), Q = y(
      () => le.value.length > 0 && le.value.every((X) => n.selected?.has(X))
    ), ne = y(
      () => !Q.value && le.value.some((X) => n.selected?.has(X))
    );
    function se(X) {
      return X.sortKey ?? X.key;
    }
    function Se(X) {
      return n.sort === se(X);
    }
    async function cn(X, re, ae) {
      try {
        await navigator.clipboard.writeText(String(ae)), g.value = `${X}-${re.key}`, setTimeout(() => g.value = null, 1200);
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
      const re = n.summaries?.[X], ae = n.summaryValues?.[X];
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
    return (X, re) => (t(), a("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", wl, [
        o("thead", Cl, [
          U.value ? (t(), a("tr", Sl, [
            e.reordering ? (t(), a("th", Ml)) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Bl)) : x("", !0),
            (t(!0), a(z, null, j(ee.value, (ae) => (t(), a("th", {
              key: ae.key,
              colspan: ae.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(ae.label ?? ""), 9, Al))), 128)),
            X.$slots.actions ? (t(), a("th", _l)) : x("", !0)
          ])) : x("", !0),
          o("tr", zl, [
            e.reordering ? (t(), a("th", Pl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("th", {
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
              }, null, 40, Ll)
            ], 2)) : x("", !0),
            (t(!0), a(z, null, j(T.value, (ae) => (t(), a("th", {
              key: ae.key,
              class: A([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                J(ae) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: ie(Z(ae))
            }, [
              ae.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (fe) => S("sort", se(ae))
              }, [
                R(c(ae.label) + " ", 1),
                Se(ae) ? (t(), a("span", jl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", Vl, "↕"))
              ], 8, Ol)) : (t(), a("span", Dl, c(ae.label), 1)),
              W(ae) ? (t(), a("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${ae.label}`,
                onPointerdown: (fe) => H(ae, fe)
              }, null, 40, Tl)) : x("", !0)
            ], 6))), 128)),
            X.$slots.actions ? (t(), a("th", Il, [...re[2] || (re[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : x("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", El, [
          (t(), a(z, null, j(6, (ae) => o("tr", {
            key: `skel-${ae}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Fl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Nl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            (t(!0), a(z, null, j(T.value, (fe) => (t(), a("td", {
              key: fe.key,
              class: "px-3 py-2.5"
            }, [
              E(Pe, { variant: "text" })
            ]))), 128)),
            X.$slots.actions ? (t(), a("td", Rl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : x("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(z, null, j(e.rows, (ae, fe) => (t(), a(z, {
            key: P(ae) ?? `row-${fe}`
          }, [
            e.groupBy && s(fe) ? (t(), a("tr", Ul, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(ae)),
                  dusk: `group-header-${r(ae) || "none"}`,
                  onClick: (ue) => v(r(ae))
                }, [
                  o("span", ql, c(f(r(ae)) ? "▸" : "▾"), 1),
                  R(" " + c(i(ae)), 1)
                ], 8, Kl)) : (t(), a("span", Gl, c(i(ae)), 1))
              ], 8, Hl)
            ])) : x("", !0),
            p(fe) ? (t(), a("tr", {
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
              e.reordering ? (t(), a("td", Zl, [...re[3] || (re[3] = [
                rt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-3bdfd7b5><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-3bdfd7b5><circle cx="9" cy="6" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="6" r="1.5" data-v-3bdfd7b5></circle><circle cx="9" cy="12" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="12" r="1.5" data-v-3bdfd7b5></circle><circle cx="9" cy="18" r="1.5" data-v-3bdfd7b5></circle><circle cx="15" cy="18" r="1.5" data-v-3bdfd7b5></circle></svg></span>', 1)
              ])])) : x("", !0),
              e.selectable && !e.reordering ? (t(), a("td", {
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
                }, null, 8, Jl)
              ], 2)) : x("", !0),
              (t(!0), a(z, null, j(T.value, (ue) => (t(), a("td", {
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
                  ue.copyable ? (t(), a("span", Yl, [
                    R(c(ae[ue.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ue.label.toLowerCase()}`,
                      onClick: (qe) => cn(String(ae[e.rowKey]), ue, ae[ue.key])
                    }, [
                      o("span", Xl, c(g.value === `${ae[e.rowKey]}-${ue.key}` ? "✓" : "⧉"), 1)
                    ], 8, Ql)
                  ])) : ae[ue.key] == null || ae[ue.key] === "" ? (t(), a("span", eo, "None")) : (t(), a("span", to, c(ae[ue.key]), 1))
                ], !0)
              ], 6))), 128)),
              X.$slots.actions ? (t(), a("td", no, [
                q(X.$slots, "actions", { row: ae }, void 0, !0)
              ])) : x("", !0)
            ], 42, Wl)) : x("", !0)
          ], 64))), 128))
        ], 2)),
        sa.value ? (t(), a("tfoot", ao, [
          o("tr", null, [
            e.selectable ? (t(), a("td", lo)) : x("", !0),
            (t(!0), a(z, null, j(e.columns, (ae) => (t(), a(z, {
              key: `s-${ae.key}`
            }, [
              e.hidden?.has(ae.key) ? x("", !0) : (t(), a("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", ae.cellClass])
              }, [
                fn(ae.key) ? (t(), a(z, { key: 0 }, [
                  o("span", oo, c(fn(ae.key).label), 1),
                  o("span", so, c(ra(ae.key)), 1)
                ], 64)) : x("", !0)
              ], 2))
            ], 64))), 128)),
            X.$slots.actions ? (t(), a("td", ro)) : x("", !0)
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
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, co = /* @__PURE__ */ Bt(uo, [["__scopeId", "data-v-3bdfd7b5"]]), nt = "w-full min-w-0 px-4 py-6 sm:px-6", l8 = "w-full min-w-0 p-3 sm:p-4", o8 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", fo = "w-full max-w-7xl", mo = "px-4 py-4", In = "w-full min-w-0", po = {
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
}, s8 = kt.confirm, r8 = kt.form, vo = ["aria-busy", "aria-label"], go = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, ho = { class: "text-base font-semibold" }, bo = {
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
    const n = e, r = l, s = K(null);
    let i = null;
    const d = K(!1), u = y(() => kt[n.size] ?? kt.confirm);
    function f(h) {
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
      const b = $[0], w = $[$.length - 1];
      h.shiftKey && document.activeElement === b ? (h.preventDefault(), w.focus()) : !h.shiftKey && document.activeElement === w && (h.preventDefault(), b.focus());
    }
    return pe(
      () => n.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", p), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (h, $) => (t(), D(ct, { to: "body" }, [
      E(Xe, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: O(() => [
          e.open ? (t(), a("div", {
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
              o("div", go, [
                o("h2", ho, c(e.title), 1),
                e.description ? (t(), a("p", bo, c(e.description), 1)) : x("", !0)
              ]),
              o("div", {
                class: A([
                  "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4",
                  k(In)
                ])
              }, [
                q(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), a("div", yo, [
                q(h.$slots, "footer")
              ])) : x("", !0)
            ], 10, vo)
          ], 32)) : x("", !0)
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
    const n = e, r = K(!1), s = K(null), i = K(null), d = K({ top: 0, left: 0, minWidth: 0 }), u = K(null);
    let f = null;
    function v(m) {
      !n.dismissOnPanelClick || m.target?.closest("input, select, textarea, label, [data-keep-open]") || w();
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
      if (n.placement === "bottom")
        J = F.bottom + n.offset, J + _.height > window.innerHeight - T && F.top - _.height - n.offset > T && (J = F.top - _.height - n.offset), N = n.align === "end" && !u.value ? F.right - _.width : F.left;
      else {
        J = F.top;
        const G = n.placement === "right", Z = F.right + n.offset + _.width < window.innerWidth - T, W = F.left - n.offset - _.width > T;
        N = (G ? Z || !W : !W && Z) ? F.right + n.offset : F.left - n.offset - _.width;
      }
      N = Math.min(Math.max(T, N), window.innerWidth - _.width - T), J = Math.min(Math.max(T, J), window.innerHeight - _.height - T), d.value = { top: J, left: N, minWidth: Math.max(F.width, xo) };
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
    }), l({ close: w, openAt: b }), (m, g) => (t(), a("div", {
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
        E(Xe, {
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
}, Ro = ["disabled"], i8 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(null), i = K(!1), d = y(() => n.allMatching ? n.total : n.count), u = y(() => d.value !== void 0), f = y(() => u.value && d.value === 0), v = y(() => n.actions.filter((B) => !B.destructive)), p = y(() => n.actions.filter((B) => B.destructive)), h = {
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
    return (B, S) => (t(), a(z, null, [
      E(He, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...S[5] || (S[5] = [
            R(" Bulk actions ", -1),
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
            (t(!0), a(z, null, j(v.value, (m) => (t(), a("button", {
              key: m.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", $(m)]),
              disabled: e.busy,
              onClick: (g) => b(m)
            }, [
              (t(), a("svg", Co, [
                o("path", {
                  d: k(Te)(m)
                }, null, 8, So)
              ])),
              o("span", Mo, c(m.label), 1)
            ], 10, wo))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: S[0] || (S[0] = (m) => i.value = !0)
            }, [
              (t(), a("svg", Ao, [
                o("path", {
                  d: k(me)("download")
                }, null, 8, _o)
              ])),
              S[6] || (S[6] = R(" Export CSV ", -1))
            ], 8, Bo)) : x("", !0),
            p.value.length ? (t(), a("div", zo, [
              (t(!0), a(z, null, j(p.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (g) => b(m)
              }, [
                (t(), a("svg", Lo, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", jo, c(m.label), 1)
              ], 8, Po))), 128))
            ])) : x("", !0)
          ])
        ]),
        _: 1
      }),
      E(ut, {
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
          }, c(s.value?.label), 11, Io)
        ]),
        default: O(() => [
          o("p", Vo, [
            S[7] || (S[7] = R(" This will affect ", -1)),
            o("span", Do, [
              u.value ? (t(), a(z, { key: 1 }, [
                R(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            S[8] || (S[8] = R(" . ", -1))
          ]),
          f.value ? (t(), a("p", To, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : x("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(ut, {
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
          }, " Export CSV ", 8, Ro)
        ]),
        default: O(() => [
          o("p", Eo, [
            S[9] || (S[9] = R(" This will export ", -1)),
            o("span", Fo, [
              u.value ? (t(), a(z, { key: 1 }, [
                R(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            S[10] || (S[10] = R(". ", -1))
          ]),
          f.value ? (t(), a("p", No, " Nothing matches the current filters - there is nothing to export. ")) : x("", !0)
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
        q(l.$slots, "tabs")
      ])) : x("", !0),
      l.$slots.title ? (t(), a("div", Ko, [
        q(l.$slots, "title")
      ])) : x("", !0),
      l.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        q(l.$slots, "toolbar")
      ], 2)) : x("", !0),
      q(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", qo, [
        q(l.$slots, "pagination")
      ])) : x("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", gn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", d8 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Wo = ["aria-expanded"], Zo = ["aria-label", "onClick"], Jo = {
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
    const n = e, r = l, s = K(null), i = K(null), d = K(null), u = K(!1), f = K(""), v = K(0), p = K({ top: 0, left: 0, width: 0 }), h = y(
      () => n.modelValue.map(
        (N) => n.options.find((G) => G.value === N) ?? {
          value: N,
          label: String(N)
        }
      ).filter(Boolean)
    ), $ = y(() => n.searchable ?? n.options.length > 6), b = y(() => {
      const N = new Set(n.modelValue), G = f.value.trim().toLowerCase();
      return n.options.filter((Z) => !N.has(Z.value)).filter((Z) => G ? Z.label.toLowerCase().includes(G) : !0);
    }), w = y(() => n.max !== null && n.modelValue.length >= n.max);
    function C() {
      const N = s.value, G = i.value;
      if (!N || !G)
        return;
      const Z = N.getBoundingClientRect(), W = G.getBoundingClientRect(), H = 8;
      let U = Z.bottom + 4;
      U + W.height > window.innerHeight - H && Z.top - W.height - 4 > H && (U = Z.top - W.height - 4), p.value = {
        top: U,
        left: Math.min(Math.max(H, Z.left), window.innerWidth - Z.width - H),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function M() {
      n.disabled || u.value || (u.value = !0, f.value = "", v.value = 0, await De(), C(), d.value?.focus());
    }
    function B() {
      u.value = !1, f.value = "";
    }
    function S() {
      u.value ? B() : M();
    }
    function m(N) {
      w.value || (r("update:modelValue", [...n.modelValue, N.value]), f.value = "", v.value = 0, De(() => {
        C(), d.value?.focus();
      }));
    }
    function g(N) {
      r(
        "update:modelValue",
        n.modelValue.filter((G) => G !== N)
      ), De(C);
    }
    function _() {
      r("update:modelValue", []), De(C);
    }
    function T(N) {
      if (!n.disabled) {
        if (N.key === "Escape" && u.value) {
          N.stopPropagation(), B();
          return;
        }
        if (N.key === "Backspace" && f.value === "" && n.modelValue.length > 0) {
          g(n.modelValue[n.modelValue.length - 1]);
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
    }), (N, G) => (t(), a("div", {
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
        (t(!0), a(z, null, j(h.value, (Z) => (t(), a("span", {
          key: Z.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(c(Z.label) + " ", 1),
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
          ])], 8, Zo)
        ]))), 128)),
        h.value.length === 0 ? (t(), a("span", Jo, c(e.placeholder), 1)) : x("", !0),
        o("span", Yo, [
          h.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(_, ["stop"])
          }, " Clear ")) : x("", !0),
          (t(), a("svg", {
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
      ], 10, Wo),
      (t(), D(ct, { to: "body" }, [
        E(Xe, {
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
              style: ie({
                top: `${p.value.top}px`,
                left: `${p.value.left}px`,
                width: `${p.value.width}px`
              }),
              role: "listbox"
            }, [
              $.value ? (t(), a("div", Qo, [
                ge(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": G[0] || (G[0] = (Z) => f.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: T
                }, null, 40, Xo), [
                  [_e, f.value]
                ])
              ])) : x("", !0),
              o("div", es, [
                (t(!0), a(z, null, j(b.value, (Z, W) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === v.value,
                  onMouseenter: (H) => v.value = W,
                  onClick: (H) => m(Z)
                }, c(Z.label), 43, ts))), 128)),
                b.value.length === 0 ? (t(), a("p", ns, [
                  w.value ? (t(), a(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), a(z, { key: 1 }, [
                    R("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), a(z, { key: 2 }, [
                    R("Everything is selected.")
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
    return (i, d) => (t(), D(k(_n), de({ "data-slot": "sheet" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
});
function oe(...e) {
  return pl(ml(e));
}
function u8(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const as = /* @__PURE__ */ L({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Zt), de({
      "data-slot": "sheet-overlay",
      class: k(oe)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(n)), {
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
    const n = e, r = l, s = ve(n, "class", "side"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        E(as),
        E(k(Yt), de({
          "data-slot": "sheet-content",
          class: k(oe)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...k(i) }), {
          default: O(() => [
            q(d.$slots, "default"),
            E(k(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                E(k(Qt), { class: "size-4" }),
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
}), ls = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", os = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, ss = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function Ye(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [ls, os[l], ss[n], e.class].filter(Boolean).join(" ");
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
    const l = e, n = y(
      () => Ye({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(Ce(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(n.value)
    }, {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), rs = { class: "flex items-center gap-2" }, is = ["onUpdate:modelValue", "onChange"], ds = ["value"], us = ["onUpdate:modelValue"], cs = ["value"], fs = ["onUpdate:modelValue"], ms = ["onUpdate:modelValue", "multiple"], ps = ["value"], vs = ["onUpdate:modelValue", "type"], gs = ["aria-label", "onClick"], hs = { class: "flex items-center gap-2" }, bs = /* @__PURE__ */ L({
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
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = K(n.modelValue ? structuredClone(n.modelValue) : s());
    pe(
      () => n.modelValue,
      (S) => {
        i.value = S ? structuredClone(S) : s();
      }
    );
    const d = (S) => "rules" in S, u = y(() => Object.keys(n.fields));
    function f(S) {
      const m = S ? n.fields[S]?.kind : void 0;
      return m ? n.operators[m] ?? [] : [];
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
    const C = y(() => n.depth + 1 < n.maxDepth);
    function M() {
      i.value = s(), p(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (S, m) => {
      const g = Wt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", rs, [
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
        (t(!0), a(z, null, j(i.value.rules, (_, T) => (t(), a("div", {
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
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(z, { key: 1 }, [
            ge(o("select", {
              "onUpdate:modelValue": (F) => _.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => w(_)
            }, [
              (t(!0), a(z, null, j(u.value, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, ds))), 128))
            ], 40, is), [
              [Ze, _.field]
            ]),
            ge(o("select", {
              "onUpdate:modelValue": (F) => _.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), a(z, null, j(f(_.field), (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(v[F] ?? F), 9, cs))), 128))
            ], 40, us), [
              [Ze, _.operator]
            ]),
            _.field && e.fields[_.field]?.kind === "boolean" ? ge((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (F) => _.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...m[3] || (m[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, fs)), [
              [Ze, _.value]
            ]) : _.field && e.fields[_.field]?.options?.length ? ge((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (F) => _.value = F,
              multiple: e.fields[_.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), a(z, null, j(e.fields[_.field].options, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(F), 9, ps))), 128))
            ], 40, ms)), [
              [Ze, _.value]
            ]) : ge((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (F) => _.value = F,
              type: _.field && e.fields[_.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, vs)), [
              [ua, _.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(_) ? "group" : "rule"}`,
            onClick: (F) => b(T)
          }, " × ", 8, gs)
        ]))), 128)),
        o("div", hs, [
          E(ce, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...m[4] || (m[4] = [
              R("Add rule", -1)
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
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : x("", !0),
          e.root ? (t(), a(z, { key: 1 }, [
            m[8] || (m[8] = o("span", { class: "flex-1" }, null, -1)),
            E(ce, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: O(() => [...m[6] || (m[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(ce, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: O(() => [...m[7] || (m[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : x("", !0)
        ])
      ], 2);
    };
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
    const n = e, r = l, s = K(!1), i = K(n.search);
    pe(
      () => n.search,
      (V) => {
        V !== i.value && (i.value = V);
      }
    );
    let d;
    pe(i, (V) => {
      clearTimeout(d), d = setTimeout(() => {
        V !== n.search && r("update:search", V);
      }, 250);
    });
    const u = K({ ...n.filters });
    pe(
      () => n.filters,
      (V) => {
        u.value = { ...V };
      },
      { deep: !0 }
    );
    const f = y(
      () => n.filterSchema.filter(
        (V) => n.filters[V.key] !== null && n.filters[V.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), p = y(() => n.search !== "" || f.value > 0), h = y(() => n.indicators.length ? n.indicators : n.filterSchema.filter((V) => n.filters[V.key] !== null && n.filters[V.key] !== void 0).map((V) => ({
      key: V.key,
      label: `${V.label}: ${String(n.filters[V.key])}`,
      removable: !0
    })));
    function $(V) {
      r("group", V);
    }
    function b(V) {
      $(V), s.value = !1;
    }
    function w(V, I) {
      $(V), I();
    }
    function C(V) {
      r("clear-filter", V);
    }
    function M(V) {
      return V.type === "multiselect";
    }
    function B(V) {
      const I = u.value[V.key];
      return Array.isArray(I) ? I : I == null ? [] : [I];
    }
    function S(V) {
      return B(V).filter(
        (I) => typeof I == "string" || typeof I == "number"
      );
    }
    function m(V) {
      return Z(V).flatMap(
        (I) => typeof I.value == "string" || typeof I.value == "number" ? [{ value: I.value, label: I.label }] : []
      );
    }
    function g(V, I) {
      u.value = { ...u.value, [V.key]: I === "" ? null : I };
    }
    function _(V, I) {
      const te = u.value[V.key];
      if (typeof te != "string" || !te.includes(".."))
        return "";
      const [le, Q] = te.split("..");
      return I === "from" ? le ?? "" : Q ?? "";
    }
    function T(V, I, te) {
      const le = I === "from" ? te : _(V, "from"), Q = I === "to" ? te : _(V, "to");
      u.value = {
        ...u.value,
        [V.key]: le && Q ? `${le}..${Q}` : null
      };
    }
    function F(V, I, te) {
      const le = I === "from" ? te : _(V, "from"), Q = I === "to" ? te : _(V, "to");
      u.value = {
        ...u.value,
        [V.key]: le || Q ? `${le}..${Q}` : null
      };
    }
    function J(V) {
      r("apply-filters", { ...u.value }), V();
    }
    function N(V, I) {
      u.value[V] = I, r("apply-filters", { ...u.value });
    }
    function G() {
      u.value = Object.fromEntries(n.filterSchema.map((V) => [V.key, null]));
    }
    function Z(V) {
      return V.type === "boolean" ? [
        { value: !0, label: V.trueLabel ?? "Yes" },
        { value: !1, label: V.falseLabel ?? "No" }
      ] : V.type === "daterange" ? Object.entries(V.presets ?? {}).map(([I, te]) => ({
        value: I,
        label: te
      })) : (V.options ?? []).map(
        (I) => typeof I == "object" && I !== null && "value" in I ? { value: I.value, label: I.label } : { value: I, label: String(I) }
      );
    }
    const W = K(new Set(n.hidden));
    pe(
      () => n.hidden,
      (V) => {
        W.value = new Set(V);
      },
      { deep: !0 }
    );
    function H(V) {
      const I = new Set(W.value);
      I.has(V) ? I.delete(V) : I.add(V), W.value = I, r("apply-columns", [...I]);
    }
    function U() {
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
    return (V, I) => (t(), a("div", ys, [
      o("div", xs, [
        o("div", ks, [
          I[8] || (I[8] = o("svg", {
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
            "onUpdate:modelValue": I[0] || (I[0] = (te) => i.value = te),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A([
              "border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors",
              k(Me)
            ])
          }, null, 10, $s), [
            [_e, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: I[1] || (I[1] = (te) => s.value = !0)
        }, [
          I[9] || (I[9] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          I[10] || (I[10] = R(" Tools ", -1)),
          f.value ? (t(), a("span", ws, c(f.value), 1)) : x("", !0)
        ]),
        E(nn, {
          open: s.value,
          "onUpdate:open": I[3] || (I[3] = (te) => s.value = te)
        }, {
          default: O(() => [
            E(an, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", Cs, [
                  I[15] || (I[15] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, " Filters, columns, and grouping ")
                  ], -1)),
                  o("div", Ss, [
                    e.filterSchema.length ? (t(), a("div", Ms, [
                      o("div", { class: "flex items-center justify-between" }, [
                        I[11] || (I[11] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: G
                        }, " Reset ")
                      ]),
                      (t(!0), a(z, null, j(e.filterSchema, (te) => (t(), a("div", {
                        key: `mobile-${te.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Bs, c(te.label), 1),
                        te.type !== "multiselect" && te.type !== "querybuilder" && te.type !== "daterange" && te.type !== "numberrange" && te.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[te.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (le) => g(
                            te,
                            le.target.value
                          )
                        }, [
                          I[12] || (I[12] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(z, null, j(Z(te), (le) => (t(), a("option", {
                            key: String(le.value),
                            value: le.value
                          }, c(le.label), 9, _s))), 128))
                        ], 40, As)) : x("", !0)
                      ]))), 128))
                    ])) : x("", !0),
                    o("div", zs, [
                      I[13] || (I[13] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ps, [
                        (t(!0), a(z, null, j(e.columns, (te) => (t(), a("button", {
                          key: `mobile-col-${te.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: te.locked,
                          onClick: (le) => H(te.key)
                        }, [
                          o("span", null, c(te.label), 1),
                          W.value.has(te.key) ? x("", !0) : (t(), a("span", Os, "On"))
                        ], 8, Ls))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", js, [
                      I[14] || (I[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Vs, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: I[2] || (I[2] = (te) => b(null))
                        }, " No grouping "),
                        (t(!0), a(z, null, j(e.groups, (te) => (t(), a("button", {
                          key: te.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (le) => b(te.key)
                        }, c(te.label), 9, Ds))), 128))
                      ])
                    ])) : x("", !0)
                  ]),
                  o("div", Ts, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ee
                    }, " Apply filters ", 8, Is)) : x("", !0),
                    p.value ? (t(), a("button", {
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
      o("div", Es, [
        o("div", Fs, [
          I[17] || (I[17] = o("svg", {
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
            "onUpdate:modelValue": I[4] || (I[4] = (te) => i.value = te),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: A([
              "border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors",
              k(Me)
            ])
          }, null, 10, Ns), [
            [_e, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: I[5] || (I[5] = (te) => i.value = "")
          }, [...I[16] || (I[16] = [
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
              I[18] || (I[18] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              f.value ? (t(), a("span", Us, c(f.value), 1)) : x("", !0)
            ], 10, Rs)
          ]),
          panel: O(({ close: te }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              I[19] || (I[19] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: G
              }, " Reset ")
            ]),
            I[22] || (I[22] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Hs, [
              (t(!0), a(z, null, j(e.filterSchema, (le) => (t(), a("div", {
                key: le.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Ks, c(le.label), 1),
                M(le) ? (t(), D(tn, {
                  key: 0,
                  "model-value": S(le),
                  options: m(le),
                  placeholder: `Any ${le.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Q) => u.value[le.key] = Q.length ? Q : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : le.type === "querybuilder" ? (t(), D(bs, {
                  key: 1,
                  "model-value": u.value[le.key] ?? null,
                  fields: le.fields ?? {},
                  operators: le.operators ?? {},
                  "max-depth": le.maxDepth ?? 5,
                  onApply: (Q) => N(le.key, Q)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : le.type === "daterange" ? (t(), a(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[le.key] == "string" && !String(u.value[le.key]).includes("..") ? u.value[le.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Q) => g(le, Q.target.value)
                  }, [
                    I[20] || (I[20] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(z, null, j(Z(le), (Q) => (t(), a("option", {
                      key: String(Q.value),
                      value: Q.value
                    }, c(Q.label), 9, Gs))), 128))
                  ], 40, qs),
                  o("div", Ws, [
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
                    }, null, 40, Zs),
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
                    }, null, 40, Js)
                  ])
                ], 64)) : le.type === "numberrange" ? (t(), a("div", Ys, [
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
                  }, null, 40, Qs),
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
                  }, null, 40, Xs)
                ])) : le.type === "boolean" ? (t(), a("div", er, [
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
                  ], 10, tr),
                  o("span", nr, c(le.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[le.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Q) => g(le, u.value[le.key] === !1 ? null : !1)
                  }, c(le.falseLabel ?? "No") + " only ", 11, ar)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[le.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Q) => g(le, Q.target.value)
                }, [
                  I[21] || (I[21] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(z, null, j(Z(le), (Q) => (t(), a("option", {
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
              onClick: (le) => J(te)
            }, " Apply filters ", 8, sr)
          ]),
          _: 1
        })) : x("", !0),
        E(He, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...I[23] || (I[23] = [
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
            I[26] || (I[26] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", rr, [
              (t(!0), a(z, null, j(e.columns, (te) => (t(), a("button", {
                key: te.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", te.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: te.locked,
                onClick: (le) => H(te.key)
              }, [
                W.value.has(te.key) ? (t(), a("span", ur)) : (t(), a("svg", dr, [...I[24] || (I[24] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + c(te.label), 1)
              ], 10, ir))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: U
              }, [...I[25] || (I[25] = [
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
                R(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), a("div", cr, [
          (t(!0), a(z, null, j(e.layouts, (te) => (t(), a("button", {
            key: te,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === te ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === te,
            "aria-label": te === "cards" ? "Card layout" : "Table layout",
            title: te === "cards" ? "Cards" : "Table",
            onClick: (le) => r("layout", te)
          }, [
            te === "table" ? (t(), a("svg", mr, [...I[27] || (I[27] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), a("svg", pr, [...I[28] || (I[28] = [
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
        ])) : x("", !0),
        e.reorderable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: I[6] || (I[6] = (te) => r("toggle-reorder"))
        }, [...I[29] || (I[29] = [
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
        ])], 10, vr)) : x("", !0),
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
            }, [...I[30] || (I[30] = [
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
          panel: O(({ close: te }) => [
            o("div", hr, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (le) => w(null, te)
              }, " No grouping ", 10, br),
              (t(!0), a(z, null, j(e.groups, (le) => (t(), a("button", {
                key: le.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === le.key ? "text-primary font-medium" : ""]),
                onClick: (Q) => w(le.key, te)
              }, c(le.label), 11, yr))), 128))
            ])
          ]),
          _: 1
        })) : x("", !0),
        p.value ? (t(), a("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: P
        }, " Clear ")) : x("", !0),
        e.loading ? (t(), a("span", xr, "Loading…")) : x("", !0)
      ]),
      h.value.length ? (t(), a("div", kr, [
        (t(!0), a(z, null, j(h.value, (te) => (t(), a("span", {
          key: te.key + te.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${te.key}`
        }, [
          R(c(te.label) + " ", 1),
          te.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${te.label}`,
            onClick: (le) => C(te.key)
          }, [...I[31] || (I[31] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, wr)) : x("", !0)
        ], 8, $r))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: I[7] || (I[7] = (te) => r("clear-filters"))
        }, " Clear all ")) : x("", !0)
      ])) : x("", !0)
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
}, Ir = ["href"], c8 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = Gt(), i = y(() => n.columns.filter(($) => $.type !== "image")), d = y(() => !!s.actions), u = y(() => !!n.title || d.value), f = y(() => n.filterSchema.length > 0), v = y(
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", _r, [
          o("table", zr, [
            o("thead", Pr, [
              o("tr", null, [
                (t(!0), a(z, null, j(i.value, (w) => (t(), a("th", {
                  key: w.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(w.label), 1))), 128))
              ])
            ]),
            o("tbody", Lr, [
              (t(!0), a(z, null, j(e.rows, (w, C) => (t(), a("tr", {
                key: w.id ?? C,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(z, null, j(i.value, (M) => (t(), a("td", {
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
                    e.recordBase && w.id != null && M === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${w.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(p(M, w[M.key])), 9, Or)) : h(w[M.key]) ? (t(), a("span", jr, " None ")) : (t(), a(z, { key: 2 }, [
                      R(c(p(M, w[M.key])), 1)
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
          o("div", Sr, [
            e.title ? (t(), a("h3", Mr, c(e.title), 1)) : x("", !0)
          ]),
          d.value ? (t(), a("div", Br, [
            q($.$slots, "actions")
          ])) : x("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
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
          e.nextCursor ? (t(), a("div", Vr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[6] || (b[6] = (w) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Dr)
          ])) : e.capped ? (t(), a("p", Tr, [
            R(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Ir)) : (t(), a(z, { key: 1 }, [
              R("Open the full list to search or filter the rest.")
            ], 64))
          ])) : x("", !0)
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
    function s(f) {
      return n.failedStep !== null && f === n.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : n.failedStep !== null && f > n.failedStep ? "" : f < n.activeStep ? "bg-primary text-primary-foreground border-primary" : f === n.activeStep ? "border-primary text-primary" : "";
    }
    function i(f) {
      if (n.failedStep !== null) {
        if (f === n.failedStep)
          return "text-destructive font-medium";
        if (f > n.failedStep)
          return "text-muted-foreground/60";
      }
      return f === n.activeStep ? "text-foreground font-medium" : f < n.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(f) {
      return n.failedStep !== null ? f < n.failedStep : f < n.activeStep;
    }
    function u(f) {
      return n.failedStep === f;
    }
    return (f, v) => (t(), a("ol", Er, [
      (t(!0), a(z, null, j(e.steps, (p, h) => (t(), a("li", {
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
              u(h) ? (t(), a("svg", Fr, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", Nr, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(z, { key: 2 }, [
                R(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Rr, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), a("span", Ur, c(p.description), 1)) : x("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", Hr)) : x("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", Kr)) : x("", !0)
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
function f8(e) {
  return mt.has(e);
}
function m8() {
  return [...mt.keys()].sort();
}
function p8() {
  mt.clear();
}
const v8 = "text-sm text-muted-foreground font-normal", g8 = "text-xs text-muted-foreground font-normal", bt = "text-xs text-muted-foreground font-normal leading-snug";
class Wr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function h8(e) {
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
const Yr = "text-foreground font-normal", Qr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Yr} ${Qr}`, Xr = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(ba), de({ "data-slot": "checkbox" }, k(i), {
      class: k(oe)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O((f) => [
        E(k(ya), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            q(d.$slots, "default", Le(Ne(f)), () => [
              E(k(Vn), { class: "size-3.5" })
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
    const n = e, r = l, s = ye(ve(n, "class"), r);
    return (i, d) => (t(), D(k(xa), de({ "data-slot": "switch" }, k(s), {
      class: k(oe)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O(() => [
        E(k(ka), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ei = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, ti = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K({});
    pe(
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
      onClose: u[1] || (u[1] = (f) => r("close"))
    }, {
      footer: O(() => [
        E(ce, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (f) => r("close"))
        }, {
          default: O(() => [...u[2] || (u[2] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ce, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            R(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", ei, c(e.generalError), 1)) : x("", !0),
          (t(!0), a(z, null, j(e.fields, (f) => (t(), D(Ge, {
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
    const n = e, r = l, s = K(null), i = K(!1), d = K(null), u = K(null), f = K(null), v = y(() => n.accept.map((m) => `.${m}`).join(",")), p = y(() => f.value ?? n.modelValue?.url ?? null), h = y(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${$(n.maxKilobytes * 1024)}`);
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
      return n.accept.length && !n.accept.includes(b(m.name)) ? `${b(m.name).toUpperCase() || "That"} files are not accepted here.` : m.size > n.maxKilobytes * 1024 ? `That file is ${$(m.size)}; the limit is ${$(n.maxKilobytes * 1024)}.` : null;
    }
    async function C(m) {
      const g = m?.[0];
      if (!(!g || n.disabled) && (u.value = w(g), !u.value)) {
        M(), n.image && g.type.startsWith("image/") && (f.value = URL.createObjectURL(g)), d.value = 0;
        try {
          const _ = await n.upload(g, (T) => {
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
      const m = n.modelValue;
      M(), u.value = null, r("update:modelValue", null), m && !m.url && n.discard && await n.discard(m.value).catch(() => {
      });
    }
    function S(m) {
      i.value = !1, C(m.dataTransfer?.files ?? null);
    }
    return (m, g) => (t(), a("div", null, [
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
            R(c($(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(z, { key: 0 }, [
              g[4] || (g[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, pi)
            ], 64)) : (t(), a(z, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? x("", !0) : (t(), a("button", {
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
      ])) : (t(), a("label", {
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
            style: ie({ width: `${d.value}%` })
          }, null, 4)
        ])) : x("", !0)
      ], 34)),
      u.value ? (t(), a("p", vi, c(u.value), 1)) : x("", !0)
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
    const d = K(u(n.modelValue));
    function u(C) {
      return C ? Object.entries(C).map(([M, B]) => ({
        uid: i++,
        key: M,
        value: B ?? ""
      })) : [];
    }
    pe(
      () => n.modelValue,
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
    ), $ = y(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function b() {
      $.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function w(C) {
      d.value = d.value.filter((M) => M.uid !== C), v();
    }
    return (C, M) => (t(), a("div", gi, [
      d.value.length ? (t(), a("div", hi, [
        o("div", bi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(z, null, j(d.value, (B) => (t(), a("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", yi, [
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
            }, null, 42, xi), [
              [_e, B.key]
            ]),
            h.value.has(B.key.trim()) ? (t(), a("p", ki, " Letters, numbers, underscores and dashes only. ")) : p.value.has(B.key.trim()) ? (t(), a("p", $i, " Used twice - only the last value will be saved. ")) : x("", !0)
          ]),
          ge(o("input", {
            "onUpdate:modelValue": (S) => B.value = S,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, wi), [
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
          R(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Bi),
        e.maxPairs !== null ? (t(), a("p", Ai, c(d.value.length) + " of " + c(e.maxPairs), 1)) : x("", !0)
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
    const n = e, r = l, s = K(null);
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
    ], u = y(() => d.filter((w) => n.toolbar.includes(w.id))), f = y(() => n.toolbar.includes("link")), v = K(0);
    function p() {
      const w = s.value?.innerHTML ?? "", C = (s.value?.innerText ?? "").trim();
      v.value = C.length;
      const M = C === "" ? null : w;
      i = M, r("update:modelValue", M);
    }
    function h(w) {
      n.disabled || (s.value?.focus(), document.execCommand(w.command, !1, w.argument), p());
    }
    function $() {
      if (n.disabled)
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
      s.value && (s.value.innerHTML = n.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), pe(
      () => n.modelValue,
      (w) => {
        w !== i && s.value && (s.value.innerHTML = w ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (w, C) => (t(), a("div", zi, [
      o("div", Pi, [
        (t(!0), a(z, null, j(u.value, (M) => (t(), a("button", {
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
          (t(), a("svg", Oi, [
            o("path", {
              d: M.path
            }, null, 8, ji)
          ]))
        ], 40, Li))), 128)),
        f.value ? (t(), a("button", {
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
        ])], 40, Vi)) : x("", !0)
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
      }, null, 42, Di),
      e.maxLength !== null ? (t(), a("div", Ti, c(v.value) + " / " + c(e.maxLength), 1)) : x("", !0)
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
    const n = e, r = l, s = y(() => !!n.field.multiple), i = y(() => !!n.field.grouped), d = y(() => !!n.field.hiddenLabels), u = y(() => n.field.inline !== !1), f = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function v(m) {
      return s.value ? f.value.some((g) => g == m.value) : n.modelValue != null && m.value == n.modelValue;
    }
    function p(m) {
      if (!n.disabled) {
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
      return n.field.colors?.[String(m.value)] ?? "primary";
    }
    function $(m) {
      const g = n.field.icons?.[String(m.value)];
      return g ? me(g) : null;
    }
    function b(m) {
      return n.field.tooltips?.[String(m.value)] ?? m.label;
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
        n.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const B = y(() => {
      if (!(u.value || i.value) && n.field.columns && n.field.columns > 1)
        return { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` };
    }), S = y(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (m, g) => (t(), a("div", {
      role: s.value ? "group" : "radiogroup",
      class: A(S.value),
      style: ie(B.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), a(z, null, j(e.options, (_) => (t(), a("label", {
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
        }, null, 40, Ri),
        $(_) ? (t(), a("svg", Ui, [
          o("path", {
            d: $(_)
          }, null, 8, Hi)
        ])) : x("", !0),
        d.value ? x("", !0) : (t(), a("span", Ki, c(_.label), 1))
      ], 10, Ni))), 128)),
      e.options.length === 0 ? (t(), a("p", qi, " Nothing to choose from yet. ")) : x("", !0)
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
    const n = mn(() => import("./PkRepeater-J84jGe3T.js")), r = mn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = K(!1), u = K(""), f = K([]), v = K(!1), p = K(null);
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
    const C = xt("panelPicker", null), M = xt("panelCreateOption", null), B = K(!1), S = K(!1), m = K({}), g = K(null), _ = y(() => Zr(s.field)), T = y(() => Jr(s.field));
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
          ne instanceof Wr ? (m.value = ne.fieldErrors, g.value = Object.keys(ne.fieldErrors).length === 0 ? ne.message : null) : g.value = ne instanceof Error ? ne.message : "Could not create that option.";
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
    function U(Q) {
      i("change", { type: W.value.type ?? null, id: Q });
    }
    function ee(Q) {
      p.value = Q.label, U(Q.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const P = y(() => Gr(s.field.type)), Y = y(
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
    const I = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ue} ${Me}`, te = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ue}`;
    function le(Q) {
      const ne = document.getElementById(`f-${s.field.key}`);
      if (!(ne instanceof HTMLTextAreaElement) && !(ne instanceof HTMLInputElement))
        return;
      const se = ne.selectionStart ?? ne.value.length, Se = ne.selectionEnd ?? se;
      ne.setRangeText(Q, se, Se, "end"), ne.dispatchEvent(new Event("input", { bubbles: !0 })), ne.focus();
    }
    return (Q, ne) => (t(), a(z, null, [
      e.field.type === "hidden" ? (t(), a(z, { key: 0 }, [], 64)) : (t(), a("div", Gi, [
        o("div", Wi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Ji, "*")) : x("", !0)
          ], 10, Zi),
          e.field.hint ? (t(), a("span", {
            key: 0,
            class: A(["flex items-center gap-1", k(bt)])
          }, [
            R(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: ne[0] || (ne[0] = (se) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Yi)) : x("", !0)
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
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(En, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": ne[2] || (ne[2] = (se) => i("change", se))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(k(n), {
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
          "onUpdate:modelValue": ne[3] || (ne[3] = (se) => i("change", se))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "addable", "deletable", "cloneable", "table", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": ne[4] || (ne[4] = (se) => i("change", se))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Ei, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ne[5] || (ne[5] = (se) => i("change", se))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(_i, {
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
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", Qi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(Fn, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": W.value.type ?? null,
            options: Z.value.map((se) => ({ value: se.value, label: se.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[8] || (ne[8] = (se) => H(se == null ? "" : String(se)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), a("select", {
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
            (t(!0), a(z, null, j(Z.value, (se) => (t(), a("option", {
              key: se.value,
              value: se.value
            }, c(se.label), 9, ed))), 128))
          ], 42, Xi)),
          W.value.type && e.searchOptions ? (t(), a("div", td, [
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
            ], 10, nd),
            d.value ? (t(), a("div", ad, [
              ge(o("input", {
                "onUpdate:modelValue": ne[10] || (ne[10] = (se) => u.value = se),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [_e, u.value]
              ]),
              o("div", ld, [
                (t(!0), a(z, null, j(f.value, (se) => (t(), a("button", {
                  key: String(se.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Se) => ee(se)
                }, c(se.label), 9, od))), 128))
              ])
            ])) : x("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: ne[11] || (ne[11] = (se) => d.value = !1)
            })) : x("", !0)
          ])) : x("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", sd, [
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
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(w, ["stop"])
            }, " ✕ ")) : x("", !0)
          ], 10, rd),
          d.value ? (t(), a("div", id, [
            ge(o("input", {
              "onUpdate:modelValue": ne[12] || (ne[12] = (se) => u.value = se),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [_e, u.value]
            ]),
            o("div", dd, [
              v.value ? (t(), a("p", ud, " Searching… ")) : f.value.length === 0 ? (t(), a("p", cd, " No matches ")) : x("", !0),
              (t(!0), a(z, null, j(f.value, (se) => (t(), a("button", {
                key: String(se.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Se) => b(se)
              }, c(se.label), 9, fd))), 128)),
              e.field.createOption && k(M) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                ne[26] || (ne[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                R(" " + c(T.value), 1)
              ])) : x("", !0)
            ])
          ])) : x("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: ne[13] || (ne[13] = (se) => d.value = !1)
          })) : x("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
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
          (t(!0), a(z, null, j(e.options, (se) => (t(), a("option", {
            key: String(se.value),
            value: se.value
          }, c(se.label), 9, pd))), 128))
        ], 42, md)) : e.field.type === "toggle" ? (t(), a("label", vd, [
          E(k(Je), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[15] || (ne[15] = (se) => i("change", se))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(k(bt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), a("label", gd, [
          E(k(Xr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ne[16] || (ne[16] = (se) => i("change", se === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(k(bt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !Y.value ? (t(), a("textarea", {
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
        }, null, 42, hd)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            k(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", bd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ne[18] || (ne[18] = (se) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, yd)) : x("", !0),
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
          }, null, 42, xd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", kd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ne[20] || (ne[20] = (se) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, $d)) : x("", !0)
        ], 2)) : Y.value ? (t(), a("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(gn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", Cd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ne[22] || (ne[22] = (se) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Sd)) : x("", !0),
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
          }, null, 40, Md),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Bd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ne[24] || (ne[24] = (se) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Ad)) : x("", !0)
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
          class: A(I),
          onInput: ne[21] || (ne[21] = (se) => i("change", se.target.value))
        }, null, 40, wd)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", _d, [
          (t(!0), a(z, null, j(e.field.presets, (se) => (t(), a("button", {
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
          }, c(se), 11, zd))), 128))
        ])) : x("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", Pd, [
          (t(!0), a(z, null, j(e.field.chips, (se, Se) => (t(), a("button", {
            key: Se,
            type: "button",
            title: se,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (cn) => le(String(Se))
          }, c(Se), 9, Ld))), 128))
        ])) : x("", !0),
        G.value ? (t(), a("a", {
          key: 18,
          href: G.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Od)) : x("", !0),
        e.error ? (t(), a("p", jd, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", {
          key: 20,
          class: A(k(bt))
        }, c(e.field.help), 3)) : x("", !0)
      ])),
      e.field.createOption && k(M) ? (t(), D(ti, {
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
    const n = e, r = l, s = K(!n.node.collapsed);
    function i() {
      const m = n.node.persistInQueryString;
      if (!m || typeof window > "u")
        return 0;
      const g = new URLSearchParams(window.location.search).get(m), _ = g === null ? NaN : Number.parseInt(g, 10), T = n.node.children?.length ?? 0;
      return Number.isInteger(_) && _ >= 0 && _ < T ? _ : 0;
    }
    const d = K(n.node.component === "tabs" ? i() : 0), u = K(n.node.component === "wizard" ? i() : 0);
    function f(m, g) {
      if (!m || typeof window > "u")
        return;
      const _ = new URL(window.location.href);
      _.searchParams.set(m, String(g)), window.history.replaceState(window.history.state, "", _);
    }
    pe(d, (m) => f(n.node.persistInQueryString, m)), pe(u, (m) => f(n.node.persistInQueryString, m));
    const v = y(
      () => (n.node.children ?? []).map((m) => ({
        label: m.label ?? "",
        description: m.description
      }))
    ), p = y(() => n.depth === 0), h = y(() => {
      const m = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, g = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        m[n.node.align ?? "start"] ?? "items-start",
        g[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), $ = y(() => {
      const m = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return m[n.node.tone ?? "info"] ?? m.info;
    }), b = y(() => {
      const m = n.node.columns ?? 1;
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
      return _(m), g.some((T) => n.errors[T]);
    }
    function B(m) {
      if (m.hidden)
        return !1;
      const g = m.visibleWhen;
      return g ? n.values[g.field] == g.value : !0;
    }
    function S(m) {
      if (n.upload)
        return (g, _) => n.upload(m, g, _);
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
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && B(e.node) ? (t(), a("section", {
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
          o("div", Vd, [
            e.node.icon ? (t(), a("div", Dd, [
              (t(), a("svg", Td, [
                o("path", {
                  d: k(me)(e.node.icon)
                }, null, 8, Id)
              ]))
            ])) : x("", !0),
            o("div", Ed, [
              o("h3", Fd, c(e.node.label), 1),
              e.node.description ? (t(), a("p", Nd, c(e.node.description), 1)) : x("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
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
        s.value ? (t(), a("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [b.value, p.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            class: A(T.span && T.span >= 2 ? "sm:col-span-2" : ""),
            onChange: g[3] || (g[3] = (J, N) => r("change", J, N)),
            onAffixAction: g[4] || (g[4] = (J, N) => r("affix-action", J, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "card" && B(e.node) ? (t(), a("section", Rd, [
        o("header", Ud, [
          o("h3", Hd, c(e.node.title), 1),
          e.node.description ? (t(), a("p", Kd, c(e.node.description), 1)) : x("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
      ])) : e.node.component === "columns" && B(e.node) ? (t(), a("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          class: A(T.component === "column" ? C(T.span) : ""),
          onChange: g[7] || (g[7] = (J, N) => r("change", J, N)),
          onAffixAction: g[8] || (g[8] = (J, N) => r("affix-action", J, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && B(e.node) ? (t(), a("div", qd, [
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
      ])) : e.node.component === "grid" && B(e.node) ? (t(), a("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
      ], 2)) : e.node.component === "flex" && B(e.node) ? (t(), a("div", {
        key: 6,
        class: A(["flex", h.value])
      }, [
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
      ], 2)) : e.node.component === "fieldset" && B(e.node) ? (t(), a("fieldset", Gd, [
        o("legend", Wd, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Zd, c(e.node.description), 1)) : x("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
      ])) : e.node.component === "callout" && B(e.node) ? (t(), a("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", $.value])
      }, [
        e.node.title ? (t(), a("p", Jd, c(e.node.title), 1)) : x("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && B(e.node) ? (t(), a("div", {
        key: 9,
        class: A(
          p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", p.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => (t(), a("button", {
            key: F,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              d.value === F ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (J) => d.value = F
          }, [
            R(c(T.label) + " ", 1),
            M(T) ? (t(), a("span", Qd)) : x("", !0)
          ], 10, Yd))), 128))
        ], 2),
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => ge((t(), a("div", {
          key: F,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, j(T.children ?? [], (J, N) => (t(), D(_, {
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
      ], 2)) : e.node.component === "wizard" && B(e.node) ? (t(), a("div", {
        key: 10,
        class: A(
          p.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        E(qr, {
          class: A(["p-4", p.value ? "border-b" : ""]),
          steps: v.value,
          "active-step": u.value,
          "has-error": (T) => M((e.node.children ?? [])[T]),
          "onUpdate:activeStep": g[19] || (g[19] = (T) => u.value = T)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(z, null, j(e.node.children ?? [], (T, F) => ge((t(), a("div", {
          key: F,
          class: A(["flex flex-col gap-5", p.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(z, null, j(T.children ?? [], (J, N) => (t(), D(_, {
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
          }, " Next ")) : x("", !0)
        ])
      ], 2)) : x("", !0);
    };
  }
}), b8 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K({});
    pe(
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
      onClose: u[2] || (u[2] = (f) => r("close"))
    }, {
      footer: O(() => [
        E(ce, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (f) => r("close"))
        }, {
          default: O(() => [...u[3] || (u[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ce, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: O(() => [
            R(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: O(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), a(z, null, j(e.form?.nodes ?? [], (f, v) => (t(), D(Nn, {
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => n[i.value] ?? n.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, p) => (t(), a("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), a("svg", {
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
        o("path", { d: d.value }, null, 8, au)
      ], 10, nu)),
      o("span", lu, c(f.value), 1)
    ], 8, tu));
  }
}), su = ["aria-label"], ru = ["fill"], y8 = /* @__PURE__ */ L({
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
      (t(!0), a(z, null, j(n.value, (d) => (t(), a("svg", {
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
    const l = e, n = K(!1);
    pe(
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
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (f) => n.value = !0)
      }, null, 40, iu)) : e.fallback === "initials" ? (t(), a(z, { key: 1 }, [
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", du, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : x("", !0)
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
        style: ie({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", mu, c(r.value), 1)) : (t(), a("span", pu, c(r.value), 1))
    ]));
  }
}), gu = { class: "inline-flex items-center" }, hu = ["checked", "aria-label"], bu = { class: "sr-only" }, x8 = /* @__PURE__ */ L({
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
}, k8 = /* @__PURE__ */ L({
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
}, $8 = /* @__PURE__ */ L({
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
      class: A(r.value)
    }, [
      q(s.$slots, "default")
    ], 10, Cu));
  }
}), Mu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Bu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, w8 = /* @__PURE__ */ L({
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
        return d.map((f) => f == null ? "" : String(f).trim()).filter((f) => f !== "");
      if (typeof d == "string") {
        const f = d.trim();
        if (f.startsWith("["))
          try {
            const v = JSON.parse(f);
            if (Array.isArray(v))
              return n(v, u);
          } catch {
          }
        return f.split(u).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(d)];
    }
    const r = y(() => n(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Mu, "None")) : (t(), a("span", Bu, [
      (t(!0), a(z, null, j(s.value, (f) => (t(), D(We, {
        key: f,
        variant: "secondary"
      }, {
        default: O(() => [
          R(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), D(We, {
        key: 0,
        variant: "outline"
      }, {
        default: O(() => [
          R("+" + c(i.value), 1)
        ]),
        _: 1
      })) : x("", !0)
    ]));
  }
}), Au = ["aria-checked", "aria-label", "title", "disabled"], _u = ["value", "placeholder", "disabled"], zu = ["value", "disabled"], Pu = ["value"], C8 = /* @__PURE__ */ L({
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
    function f($) {
      const b = $.target.value;
      b !== String(n.value ?? "") && r("change", b);
    }
    function v($) {
      const w = $.target.value;
      w !== String(n.value ?? "") && r("change", w);
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
      class: A(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(u, ["stop"])
    }, [
      o("span", {
        class: A(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Au)) : e.type === "text" ? (t(), a("input", {
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
    }, null, 40, _u)) : (t(), a("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: b[1] || (b[1] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), a(z, null, j(e.options, (w, C) => (t(), a("option", {
        key: C,
        value: C
      }, c(w), 9, Pu))), 128))
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
function S8(e) {
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
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return ln[f] ?? "outline";
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
}, M8 = /* @__PURE__ */ L({
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
    function f(h) {
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
      onClick: $[0] || ($[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(We, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          R(c(v(i.value) || "-"), 1)
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
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: O(() => [
                R(c(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", Vu, [
              o("path", {
                d: k(me)("chevron-down")
              }, null, 8, Du)
            ]))
          ], 8, ju)
        ]),
        panel: O(({ close: b }) => [
          o("div", Tu, c(d.value), 1),
          (t(!0), a(z, null, j(e.options, (w, C) => (t(), a("button", {
            key: C,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => p(String(C), b)
          }, [
            E(We, {
              variant: f(C),
              class: "capitalize"
            }, {
              default: O(() => [
                R(c(w), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(C) === i.value ? (t(), a("svg", Eu, [
              o("path", {
                d: k(me)("check")
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
    const r = e, s = n, i = K(null), d = K(null), u = y(() => r.groups.flatMap((B) => B.actions)), f = y(() => u.value.filter((B) => !B.destructive)), v = y(() => u.value.filter((B) => B.destructive));
    function p(B) {
      return Ru(B.color);
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
    return l({ openContextMenu: C }), (B, S) => (t(), a("div", Uu, [
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
            (t(), a("svg", Ku, [
              o("path", {
                d: k(me)("more-vertical")
              }, null, 8, qu)
            ]))
          ], 8, Hu)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), a(z, null, j(f.value, (m) => (t(), a(z, {
              key: m.key
            }, [
              m.link ? (t(), a("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", p(m)])
              }, [
                (t(), a("svg", Wu, [
                  o("path", {
                    d: k(Te)(m)
                  }, null, 8, Zu)
                ])),
                o("span", Ju, c(m.label), 1)
              ], 10, Gu)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", p(m)]),
                disabled: e.busy === m.key,
                onClick: (g) => $(m)
              }, [
                (t(), a("svg", {
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
                  }, null, 8, Qu)
                ], 2)),
                o("span", Xu, c(m.label), 1)
              ], 10, Yu))
            ], 64))), 128)),
            v.value.length ? (t(), a("div", ec, [
              (t(!0), a(z, null, j(v.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (g) => $(m)
              }, [
                (t(), a("svg", nc, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, ac)
                ])),
                o("span", lc, c(m.label), 1)
              ], 8, tc))), 128))
            ])) : x("", !0)
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
}, yc = ["d"], xc = { class: "min-w-0 flex-1 truncate" }, kc = ["disabled", "onClick"], $c = ["d"], wc = { class: "min-w-0 flex-1 truncate" }, B8 = /* @__PURE__ */ L({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(null), d = y(() => r.groups.filter((B) => !B.label)), u = y(() => r.groups.filter((B) => B.label)), f = y(() => d.value.flatMap((B) => B.actions)), v = y(() => f.value.filter((B) => !B.destructive)), p = y(() => f.value.filter((B) => B.destructive)), h = y(() => r.groups.every((B) => B.actions.length === 0)), $ = {
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
    return l({ openContextMenu: M }), (B, S) => (t(), a("div", sc, [
      o("div", rc, [
        (t(!0), a(z, null, j([...v.value, ...p.value], (m) => (t(), a(z, {
          key: m.key
        }, [
          m.link ? (t(), a("a", {
            key: 0,
            href: m.url ?? "#",
            class: A(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", b(m)])
          }, [
            (t(), a("svg", dc, [
              o("path", {
                d: k(Te)(m)
              }, null, 8, uc)
            ])),
            o("span", null, c(m.label), 1)
          ], 10, ic)) : (t(), a("button", {
            key: 1,
            type: "button",
            class: A(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", b(m)]),
            disabled: e.busy === m.key,
            onClick: (g) => C(m)
          }, [
            (t(), a("svg", {
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
              }, null, 8, fc)
            ], 2)),
            o("span", null, c(m.label), 1)
          ], 10, cc))
        ], 64))), 128)),
        (t(!0), a(z, null, j(u.value, (m) => (t(), D(He, {
          key: m.label,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", mc, [
              m.icon ? (t(), a("svg", pc, [
                o("path", {
                  d: k(me)(m.icon)
                }, null, 8, vc)
              ])) : x("", !0),
              o("span", null, c(m.label), 1)
            ])
          ]),
          panel: O(() => [
            o("div", gc, [
              (t(!0), a(z, null, j([
                ...m.actions.filter((g) => !g.destructive),
                ...m.actions.filter((g) => g.destructive)
              ], (g) => (t(), a(z, {
                key: g.key
              }, [
                g.link ? (t(), a("a", {
                  key: 0,
                  href: g.url ?? "#",
                  role: "menuitem",
                  class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g.destructive ? "text-destructive" : b(g)])
                }, [
                  (t(), a("svg", bc, [
                    o("path", {
                      d: k(Te)(g)
                    }, null, 8, yc)
                  ])),
                  o("span", xc, c(g.label), 1)
                ], 10, hc)) : (t(), a("button", {
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
                  (t(), a("svg", {
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
}, $t = 12, wt = 20, Cc = [0, 0.25, 0.5, 0.75, 1], on = "alxtexhpanel.appearance", Ae = {
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
const Rn = "alxtexhpanel.appearance.vars", Ut = "pk-appearance";
function at() {
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
  const l = at();
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
function A8() {
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
    return { ...Ae };
  try {
    const e = localStorage.getItem(on);
    if (!e)
      return { ...Ae };
    const l = { ...Ae, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Ae.theme);
    const n = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Ae.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < $t || l.fontSize > wt) && (l.fontSize = Ae.fontSize), l;
  } catch {
    return { ...Ae };
  }
}
function Bc() {
  const e = at();
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
  const l = rn(), n = e ? { ...Ae, ...l, ...e } : { ...Ae, ...l }, r = !Qe, s = Un(n);
  if (Ve.value = n, Qe = !0, e) {
    Hn(n);
    try {
      localStorage.setItem(on, JSON.stringify(n));
    } catch {
    }
  }
  const d = at()?.__panelAppearanceApplied === !0;
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
function _8() {
  qn(Bc());
}
function z8(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && qn(l);
}
let Gn = null;
function P8(e) {
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
  const i = at();
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
    const n = e, r = l, s = K(null);
    let i = null, d = "";
    const u = K(!1), f = y(() => n.width ?? po[n.size]), v = y(
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
      const w = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (w.length === 0)
        return;
      const C = w[0], M = w[w.length - 1];
      b.shiftKey && document.activeElement === C ? (b.preventDefault(), M.focus()) : !b.shiftKey && document.activeElement === M && (b.preventDefault(), C.focus());
    }
    return pe(
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
    }), (b, w) => (t(), D(ct, { to: "body" }, [
      E(Xe, {
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
          }, null, 32)) : x("", !0)
        ]),
        _: 1
      }),
      E(Xe, {
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
            class: A(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", zc, [
              o("div", Pc, [
                o("h2", Lc, c(e.title), 1),
                e.description ? (t(), a("p", Oc, c(e.description), 1)) : x("", !0)
              ]),
              o("div", jc, [
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
                ])], 8, Vc)
              ])
            ]),
            o("div", Dc, [
              o("div", {
                class: A(v.value)
              }, [
                q(b.$slots, "default")
              ], 2)
            ]),
            b.$slots.footer ? (t(), a("footer", Tc, [
              q(b.$slots, "footer")
            ])) : x("", !0)
          ], 10, _c)) : x("", !0)
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
}, qc = { class: "flex flex-col gap-2" }, Gc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Wc = ["aria-pressed", "aria-label", "onClick"], Zc = { class: "text-sm font-semibold" }, Jc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Yc = ["onClick"], Qc = { class: "flex flex-col gap-2" }, Xc = { class: "flex items-center justify-between" }, ef = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, tf = { class: "flex items-center gap-2" }, nf = ["disabled"], af = ["min", "max", "value"], lf = ["disabled"], L8 = /* @__PURE__ */ L({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Zn(), u = K(!1), f = y(() => l.value.sidebarSide === "right"), v = y(() => f.value ? "left" : "right"), p = [
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
    return (B, S) => (t(), a(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: S[0] || (S[0] = (m) => u.value = !0)
      }, [...S[6] || (S[6] = [
        rt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      E(At, {
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
          o("div", Ic, [
            o("section", Ec, [
              S[8] || (S[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", Fc, [
                (t(!0), a(z, null, j(k(s), (m, g) => (t(), a("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: ie({ background: m.value }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).primary === g,
                  onClick: (_) => k(n)({ primary: g })
                }, [
                  k(l).primary === g ? (t(), a("svg", {
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
                ], 12, Nc))), 128))
              ])
            ]),
            o("section", Rc, [
              S[10] || (S[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", Uc, [
                (t(!0), a(z, null, j(k(i), (m, g) => (t(), a("button", {
                  key: g,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: ie({ background: M(m.hue, m.chroma) }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).surface === g,
                  onClick: (_) => k(n)({ surface: g })
                }, [
                  k(l).surface === g ? (t(), a("svg", Kc, [...S[9] || (S[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : x("", !0)
                ], 12, Hc))), 128))
              ])
            ]),
            o("section", qc, [
              S[11] || (S[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Gc, [
                (t(!0), a(z, null, j(k(d), (m) => (t(), a("button", {
                  key: m,
                  type: "button",
                  class: A([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === m,
                  "aria-label": `${m}rem radius`,
                  onClick: (g) => k(n)({ radius: m })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: ie({ borderRadius: `${Math.min(m, 0.5)}rem` })
                  }, null, 4),
                  R(" " + c(m), 1)
                ], 10, Wc))), 128))
              ])
            ]),
            (t(!0), a(z, null, j([
              { label: "Color scheme", key: "theme", options: p },
              { label: "Card style", key: "cardStyle", options: $ },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: b },
              { label: "Content layout", key: "contentLayout", options: w },
              { label: "Menu style", key: "menuStyle", options: C }
            ], (m) => (t(), a("section", {
              key: m.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Zc, c(m.label), 1),
              o("div", Jc, [
                (t(!0), a(z, null, j(m.options, (g) => (t(), a("button", {
                  key: String(g.value),
                  type: "button",
                  class: A([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[m.key] === g.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (_) => k(n)({ [m.key]: g.value })
                }, c(g.label), 11, Yc))), 128))
              ])
            ]))), 128)),
            o("section", Qc, [
              o("div", Xc, [
                S[12] || (S[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", ef, c(k(l).fontSize) + "px", 1)
              ]),
              o("div", tf, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize <= k($t),
                  "aria-label": "Decrease font size",
                  onClick: S[2] || (S[2] = (m) => k(n)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, nf),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k($t),
                  max: k(wt),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: S[3] || (S[3] = (m) => k(n)({
                    fontSize: Number(m.target.value)
                  }))
                }, null, 40, af),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k(wt),
                  "aria-label": "Increase font size",
                  onClick: S[4] || (S[4] = (m) => k(n)({ fontSize: k(l).fontSize + 1 }))
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
}, pf = ["d"], vf = { class: "w-full truncate text-center" }, Ot = 5, O8 = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("nav", of, [
      o("ul", sf, [
        (t(!0), a(z, null, j(s.value, (v) => (t(), a("li", {
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
            (t(), a("svg", df, [
              o("path", {
                d: k(me)(v.icon)
              }, null, 8, uf)
            ])),
            o("span", cf, c(v.title), 1)
          ], 10, rf)
        ]))), 128)),
        i.value ? (t(), a("li", ff, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (v) => r("more"))
          }, [
            (t(), a("svg", mf, [
              o("path", {
                d: k(me)("more-horizontal")
              }, null, 8, pf)
            ])),
            o("span", vf, c(e.moreLabel), 1)
          ])
        ])) : x("", !0)
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
}, Lf = ["d"], j8 = /* @__PURE__ */ L({
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
      const f = r(n.url.split("?")[0]), v = r(u);
      return f === v || f.startsWith(`${v}/`);
    }
    const i = y(
      () => l.items.find((u) => s(u.href)) ?? l.items[0]
    );
    function d(u) {
      return u?.icon ?? l.fallbackIcon;
    }
    return (u, f) => (t(), a("div", gf, [
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
                    d: k(me)(d(i.value))
                  }, null, 8, kf)
                ])),
                o("span", $f, c(i.value?.title), 1)
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
            ], 8, bf)
          ]),
          panel: O(() => [
            o("div", {
              class: "flex flex-col",
              role: "listbox",
              "aria-label": e.ariaLabel
            }, [
              (t(!0), a(z, null, j(e.items, (v) => (t(), D(k(Et), {
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
                  (t(), a("svg", Cf, [
                    o("path", {
                      d: k(me)(d(v))
                    }, null, 8, Sf)
                  ])),
                  o("span", Mf, c(v.title), 1),
                  s(v.href) ? (t(), a("svg", Bf, [
                    o("path", {
                      d: k(me)("check")
                    }, null, 8, Af)
                  ])) : x("", !0)
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
          (t(!0), a(z, null, j(e.items, (v) => (t(), D(k(Et), {
            key: v.href,
            href: v.href,
            class: A([
              k(Ye)({ variant: "ghost" }),
              "w-full justify-start",
              s(v.href) ? "bg-primary/10 text-foreground font-medium ring-1 ring-primary/15" : ""
            ])
          }, {
            default: O(() => [
              (t(), a("svg", Pf, [
                o("path", {
                  d: k(me)(d(v))
                }, null, 8, Lf)
              ])),
              R(" " + c(v.title), 1)
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
      class: A([s, n.class]),
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
      class: A([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      q(l.$slots, "default")
    ], 10, jf));
  }
}), V8 = /* @__PURE__ */ L({
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
      class: A(["size-4 animate-spin", l.$props.class])
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
    const n = e, r = l, s = K(!1), i = K(null), d = K("");
    be(() => {
      n.autofocus && i.value?.focus();
    });
    const u = y(
      () => Array.from({ length: n.length }, (B, S) => n.modelValue[S] ?? "")
    ), f = y(() => Math.min(n.modelValue.length, n.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, n.length);
    }
    function p(B) {
      n.disabled || B.length !== n.length || d.value !== B && (d.value = B, r("complete", B));
    }
    function h(B) {
      const S = v(B);
      S !== n.modelValue && r("update:modelValue", S), p(S);
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
      () => n.modelValue,
      (B) => {
        B.length < n.length ? d.value = "" : p(B);
      }
    );
    let M;
    return be(() => {
      M = window.setInterval(() => {
        if (n.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && w();
      }, 250);
    }), ca(() => {
      M !== void 0 && window.clearInterval(M);
    }), (B, S) => (t(), a("div", Vf, [
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
        onAnimationstart: C,
        onFocus: S[0] || (S[0] = (m) => s.value = !0),
        onBlur: S[1] || (S[1] = (m) => s.value = !1)
      }, null, 40, Df),
      (t(!0), a(z, null, j(u.value, (m, g) => (t(), a("div", {
        key: g,
        "data-slot": "input-otp-slot",
        "data-active": s.value && g === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(c(m) + " ", 1),
        s.value && g === f.value && m === "" ? (t(), a("div", If, [...S[2] || (S[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : x("", !0)
      ], 8, Tf))), 128))
    ]));
  }
}), D8 = /* @__PURE__ */ Bt(Ef, [["__scopeId", "data-v-0fdf60b6"]]), Ff = {
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
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), a("p", Ff, c(e.description), 1)) : x("", !0)
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
}, T8 = /* @__PURE__ */ L({
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
            q(l.$slots, "status")
          ])) : x("", !0)
        ]),
        e.purpose ? (t(), a("p", qf, c(e.purpose), 1)) : x("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", Gf, [
        q(l.$slots, "actions")
      ])) : x("", !0)
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
      class: A(k(oe)(k(Yf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      q(n.$slots, "default")
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
      class: A(
        k(oe)(
          "col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
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
      class: A(k(oe)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      q(n.$slots, "default")
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
), Qf = { class: "list-inside list-disc text-sm" }, I8 = /* @__PURE__ */ L({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(Wf), { variant: "destructive" }, {
      default: O(() => [
        E(k(tl), { class: "size-4" }),
        E(k(Jf), null, {
          default: O(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        E(k(Zf), null, {
          default: O(() => [
            o("ul", Qf, [
              (t(!0), a(z, null, j(n.value, (i, d) => (t(), a("li", { key: d }, c(i), 1))), 128))
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
    return (i, d) => ge((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => fa(s) ? s.value = u : null),
      "data-slot": "input",
      class: A(
        k(oe)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          k(Ue),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [_e, k(s)]
    ]);
  }
}), Xf = { class: "relative" }, em = ["aria-label"], E8 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = K(!1), s = ma("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", Xf, [
      E(k(Jn), de({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(oe)("pr-10", n.class)
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
        r.value ? (t(), D(k(nl), {
          key: 0,
          class: "size-4"
        })) : (t(), D(k(al), {
          key: 1,
          class: "size-4"
        }))
      ], 10, em)
    ]));
  }
}), Yn = "@container min-w-0", tm = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", F8 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", nm = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
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
function N8(e, l) {
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
    s.forEach((u, f) => {
      d[f % n].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    am(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function xn(e, l) {
  return `${e}:${l}`;
}
function R8(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Kt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function U8(e, l, n, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: n }
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
function H8(e) {
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
    for (let f = 3; f < u.length; f += 4)
      if ((u[f] ?? 255) < 255)
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
const K8 = /* @__PURE__ */ L({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), de({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        q(n.$slots, "default")
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
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(zn), de({
      "data-slot": "sheet-description",
      class: k(oe)("text-sm text-muted-foreground font-normal", l.class)
    }, k(n)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q8 = /* @__PURE__ */ L({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: A(k(oe)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      q(n.$slots, "default")
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
      class: A(k(oe)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      q(n.$slots, "default")
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
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Pn), de({
      "data-slot": "sheet-title",
      class: k(oe)("text-foreground font-semibold", l.class)
    }, k(n)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G8 = /* @__PURE__ */ L({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Ln), de({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kn = "sidebar_state", pm = 3600 * 24 * 7, vm = "16rem", gm = "18rem", hm = "3rem", bm = "b", [_t, ym] = $a("Sidebar"), xm = { class: "flex h-full w-full flex-col" }, km = ["data-state", "data-collapsible", "data-variant", "data-side"], $m = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, W8 = /* @__PURE__ */ L({
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
    return (d, u) => e.collapsible === "none" ? (t(), a("div", de({
      key: 0,
      "data-slot": "sidebar",
      class: k(oe)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      q(d.$slots, "default")
    ], 16)) : k(n) ? (t(), D(k(nn), de({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: O(() => [
        E(k(an), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: ie({
            "--sidebar-width": k(gm)
          })
        }, {
          default: O(() => [
            E(fm, { class: "sr-only" }, {
              default: O(() => [
                E(mm, null, {
                  default: O(() => [...u[0] || (u[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(cm, null, {
                  default: O(() => [...u[1] || (u[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", xm, [
              q(d.$slots, "default")
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
        o("div", $m, [
          q(d.$slots, "default")
        ])
      ], 16)
    ], 8, km));
  }
}), Z8 = /* @__PURE__ */ L({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: A(
        k(oe)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), J8 = /* @__PURE__ */ L({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(k(oe)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Y8 = /* @__PURE__ */ L({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(k(oe)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), Q8 = /* @__PURE__ */ L({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(tt), {
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), X8 = /* @__PURE__ */ L({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(k(oe)("w-full text-sm", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ L({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(tt), {
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), tC = /* @__PURE__ */ L({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(k(oe)("flex flex-col gap-2 p-2", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), nC = /* @__PURE__ */ L({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Jn), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(k(oe)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), aC = /* @__PURE__ */ L({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("main", {
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
      q(n.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ L({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(k(oe)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ L({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(tt), {
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), sC = /* @__PURE__ */ L({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
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
      q(n.$slots, "default")
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
    const s = ye(e, l);
    return (i, d) => (t(), D(k(wa), de({ "data-slot": "tooltip" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Ca), null, {
      default: O(() => [
        E(k(Sa), de({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(oe)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: O(() => [
            q(d.$slots, "default"),
            E(k(Ma), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), rC = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(On), Le(Ne(l)), {
      default: O(() => [
        q(n.$slots, "default")
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
    return (n, r) => (t(), D(k(Ba), de({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        q(n.$slots, "default")
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
    return (n, r) => (t(), D(k(tt), de({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: k(oe)(k(Bm)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), iC = /* @__PURE__ */ L({
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
    const l = e, { isMobile: n, state: r } = _t(), s = ve(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(k(wm), { key: 1 }, {
      default: O(() => [
        E(k(Sm), { "as-child": "" }, {
          default: O(() => [
            E($n, Le(Ne({ ...k(s), ...i.$attrs })), {
              default: O(() => [
                q(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(k(Cm), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(n)
        }, {
          default: O(() => [
            typeof e.tooltip == "string" ? (t(), a(z, { key: 0 }, [
              R(c(e.tooltip), 1)
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
}), dC = /* @__PURE__ */ L({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(k(oe)("group/menu-item relative", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), wn = "animate-pulse rounded-md bg-primary/10", uC = /* @__PURE__ */ L({
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
      class: A(k(oe)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: A(k(oe)(wn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : x("", !0),
      o("div", {
        class: A(k(oe)(wn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: ie({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), cC = /* @__PURE__ */ L({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
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
      q(n.$slots, "default")
    ], 2));
  }
}), fC = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(tt), {
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
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), mC = /* @__PURE__ */ L({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(k(oe)("group/menu-sub-item relative", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ L({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !fl?.cookie.includes(`${kn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = ul("(max-width: 767px)"), i = K(!1), d = Tn(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${kn}=${d.value}; path=/; max-age=${pm}`;
    }
    function f(h) {
      i.value = h;
    }
    function v() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    cl("keydown", (h) => {
      h.key === bm && (h.metaKey || h.ctrlKey) && (h.preventDefault(), v());
    });
    const p = y(() => s.value || d.value ? "expanded" : "collapsed");
    return ym({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: v
    }), (h, $) => (t(), D(k(On), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", de({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(vm),
            "--sidebar-width-icon": k(hm)
          },
          class: k(oe)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, h.$attrs), [
          q(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), vC = /* @__PURE__ */ L({
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
      (...i) => k(n) && k(n)(...i))
    }, [
      q(r.$slots, "default")
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
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Aa), de({ "data-slot": "separator" }, k(n), {
      class: k(oe)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), gC = /* @__PURE__ */ L({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Mm), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(k(oe)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), hC = /* @__PURE__ */ L({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = _t();
    return (i, d) => (t(), D(ce, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: A(k(oe)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: O(() => [
        k(n) || k(r) === "collapsed" ? (t(), D(k(ll), { key: 0 })) : (t(), D(k(ol), { key: 1 })),
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
), bC = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(_a), de({ "data-slot": "dropdown-menu" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), Am = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, yC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(za), de({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", Am, [
          E(k(jn), null, {
            default: O(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                E(k(Vn), { class: "size-4" })
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
}), xC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Pa), null, {
      default: O(() => [
        E(k(La), de({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(oe)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
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
}), kC = /* @__PURE__ */ L({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Oa), de({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ L({
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
    const l = e, n = ve(l, "inset", "variant", "class"), r = Oe(n);
    return (s, i) => (t(), D(k(ja), de({
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
}), wC = /* @__PURE__ */ L({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = ve(l, "class", "inset"), r = Oe(n);
    return (s, i) => (t(), D(k(Va), de({
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
}), CC = /* @__PURE__ */ L({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(Da), de({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: O(() => [
        q(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _m = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, SC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Ta), de({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", _m, [
          E(k(jn), null, {
            default: O(() => [
              q(d.$slots, "indicator-icon", {}, () => [
                E(k(sl), { class: "size-2 fill-current" })
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
}), MC = /* @__PURE__ */ L({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Ia), de({ "data-slot": "dropdown-menu-separator" }, k(n), {
      class: k(oe)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), BC = /* @__PURE__ */ L({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(k(oe)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), AC = /* @__PURE__ */ L({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = ye(e, l);
    return (i, d) => (t(), D(k(Ea), de({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), _C = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Fa), de({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(oe)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zC = /* @__PURE__ */ L({
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
    const l = e, n = ve(l, "class", "inset"), r = Oe(n);
    return (s, i) => (t(), D(k(Na), de({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(oe)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        q(s.$slots, "default"),
        E(k(Dn), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), PC = /* @__PURE__ */ L({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Oe(e);
    return (r, s) => (t(), D(k(Ra), de({ "data-slot": "dropdown-menu-trigger" }, k(n)), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), LC = /* @__PURE__ */ L({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Ua), {
      "data-slot": "avatar",
      class: A(k(oe)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), OC = /* @__PURE__ */ L({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Ha), de({ "data-slot": "avatar-fallback" }, k(n), {
      class: k(oe)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jC = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(Ka), de({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VC = /* @__PURE__ */ L({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: A(l.class)
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), DC = /* @__PURE__ */ L({
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
      class: A(k(oe)("flex size-9 items-center justify-center", l.class))
    }, [
      q(n.$slots, "default", {}, () => [
        E(k(rl), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), TC = /* @__PURE__ */ L({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: A(k(oe)("inline-flex items-center gap-1.5", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), IC = /* @__PURE__ */ L({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(tt), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(k(oe)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), EC = /* @__PURE__ */ L({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        k(oe)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ L({
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
      class: A(k(oe)("text-foreground font-normal", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), NC = /* @__PURE__ */ L({
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
      class: A(k(oe)("[&>svg]:size-3.5", l.class))
    }, [
      q(n.$slots, "default", {}, () => [
        E(k(Dn))
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
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), a("div", zm, [
      E(k(qa), de({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(oe)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), RC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class", "viewport"), i = ye(s, r);
    return (d, u) => (t(), D(k(Ga), de({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(oe)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: O((f) => [
        q(d.$slots, "default", Le(Ne(f))),
        e.viewport ? (t(), D(Pm, { key: 0 })) : x("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), UC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Wa), de({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(oe)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), HC = /* @__PURE__ */ L({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Za), de({ "data-slot": "navigation-menu-indicator" }, k(r), {
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
}), KC = /* @__PURE__ */ L({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Ja), de({ "data-slot": "navigation-menu-item" }, k(n), {
      class: k(oe)("relative", l.class)
    }), {
      default: O(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qC = /* @__PURE__ */ L({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Ya), de({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(oe)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        q(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GC = /* @__PURE__ */ L({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Qa), de({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(oe)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WC = /* @__PURE__ */ L({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Xa), de({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(oe)(k(Lm)(), "group", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default"),
        E(k(il), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lm = en(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), ZC = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(_n), de({ "data-slot": "dialog" }, k(s)), {
      default: O((u) => [
        q(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), JC = /* @__PURE__ */ L({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), de({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        q(n.$slots, "default")
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
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(Zt), de({ "data-slot": "dialog-overlay" }, k(n), {
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
}), YC = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        E(Om),
        E(k(Yt), de({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(oe)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
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
                E(k(Qt)),
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
}), QC = /* @__PURE__ */ L({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(zn), de({ "data-slot": "dialog-description" }, k(r), {
      class: k(oe)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XC = /* @__PURE__ */ L({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: A(k(oe)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      q(n.$slots, "default"),
      e.showCloseButton ? (t(), D(k(et), {
        key: 0,
        "as-child": ""
      }, {
        default: O(() => [
          E(ce, { variant: "outline" }, {
            default: O(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : x("", !0)
    ], 2));
  }
}), e6 = /* @__PURE__ */ L({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: A(k(oe)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), t6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = ve(n, "class"), i = ye(s, r);
    return (d, u) => (t(), D(k(Jt), null, {
      default: O(() => [
        E(k(Zt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            E(k(Yt), de({
              class: k(oe)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const v = f.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: O(() => [
                q(d.$slots, "default"),
                E(k(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    E(k(Qt), { class: "w-4 h-4" }),
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
}), n6 = /* @__PURE__ */ L({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Pn), de({ "data-slot": "dialog-title" }, k(r), {
      class: k(oe)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a6 = /* @__PURE__ */ L({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Ln), de({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l6 = /* @__PURE__ */ L({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = ve(l, "class");
    return (r, s) => (t(), D(k(el), de({ "data-slot": "label" }, k(n), {
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
}), o6 = /* @__PURE__ */ L({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(dl), {
      role: "status",
      "aria-label": "Loading",
      class: A(k(oe)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), s6 = /* @__PURE__ */ L({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: A(
        k(oe)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), r6 = /* @__PURE__ */ L({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: A(k(oe)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), i6 = /* @__PURE__ */ L({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: A(k(oe)("px-6", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), d6 = /* @__PURE__ */ L({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: A(k(oe)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), u6 = /* @__PURE__ */ L({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: A(k(oe)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), c6 = /* @__PURE__ */ L({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: A(
        k(oe)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), f6 = /* @__PURE__ */ L({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: A(k(oe)("leading-none font-semibold", l.class))
    }, [
      q(n.$slots, "default")
    ], 2));
  }
}), jm = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Vm = { class: "flex items-start gap-3" }, Dm = { class: "min-w-0 flex-1" }, Tm = { class: "text-foreground text-sm font-medium" }, Im = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, m6 = /* @__PURE__ */ L({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = K(!1), d = K(null), u = K(0);
    pa((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (v, p) => (t(), a("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
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
            d.value ? (t(), a("p", Im, c(d.value), 1)) : x("", !0),
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
              R(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? x("", !0) : q(v.$slots, "default", { key: u.value })
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
}, p6 = /* @__PURE__ */ L({
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
          q(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", Rm, c(e.title), 1)) : x("", !0),
            e.description ? (t(), a("p", Um, c(e.description), 1)) : x("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Hm, [
          q(l.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        q(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Km, [
        q(l.$slots, "footer")
      ])) : x("", !0)
    ]));
  }
}), Xn = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function v6() {
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
}, g6 = /* @__PURE__ */ L({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Xt(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = y(() => {
      const f = n.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = xt(
      Xn,
      y(() => !1)
    ), u = y(() => !l.host && k(d) === !0);
    return (f, v) => u.value ? x("", !0) : (t(), a("footer", qm, [
      o("div", Gm, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", Wm, [
          (t(!0), a(z, null, j(i.value, (p) => (t(), D(k(Et), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              R(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : x("", !0)
      ])
    ]));
  }
}), Zm = { class: "flex shrink-0 flex-col items-center" }, Jm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, h6 = /* @__PURE__ */ L({
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
        class: A(["relative box-content shadow-2xl", r.value]),
        style: ie({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Jm)) : x("", !0),
        o("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
        }, [
          q(i.$slots, "default")
        ], 2)
      ], 6),
      n.value ? (t(), a(z, { key: 0 }, [
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
}), Ym = { class: "flex flex-col gap-6 text-center sm:text-left" }, Qm = { class: "text-foreground text-xl font-semibold" }, Xm = {
  key: 0,
  class: "flex flex-col gap-2"
}, ep = { class: "text-foreground font-medium" }, tp = {
  key: 0,
  class: "text-muted-foreground"
}, np = {
  key: 1,
  class: "flex flex-col gap-2"
}, ap = { class: "flex flex-col gap-1" }, lp = {
  key: 2,
  class: "flex flex-wrap justify-center gap-2 sm:justify-start"
}, b6 = /* @__PURE__ */ L({
  __name: "PkSetupWizardCompletion",
  props: {
    heading: {},
    summary: { default: () => [] },
    nextSteps: { default: () => [] },
    actions: { default: () => [] },
    linkComponent: { default: "a" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Ym, [
      o("h1", Qm, c(e.heading), 1),
      e.summary.length ? (t(), a("ul", Xm, [
        (t(!0), a(z, null, j(e.summary, (r, s) => (t(), a("li", {
          key: s,
          class: "flex items-baseline gap-2 text-sm"
        }, [
          o("span", ep, c(r.label), 1),
          r.detail ? (t(), a("span", tp, "– " + c(r.detail), 1)) : x("", !0)
        ]))), 128))
      ])) : x("", !0),
      e.nextSteps.length ? (t(), a("div", np, [
        n[0] || (n[0] = o("p", { class: "text-foreground text-sm font-medium" }, "Next steps", -1)),
        o("ul", ap, [
          (t(!0), a(z, null, j(e.nextSteps, (r, s) => (t(), a("li", { key: s }, [
            (t(), D(Ce(e.linkComponent), {
              href: r.href,
              class: "text-primary text-sm hover:underline"
            }, {
              default: O(() => [
                R(c(r.label), 1)
              ]),
              _: 2
            }, 1032, ["href"]))
          ]))), 128))
        ])
      ])) : x("", !0),
      e.actions.length ? (t(), a("div", lp, [
        (t(!0), a(z, null, j(e.actions, (r, s) => (t(), D(Ce(e.linkComponent), {
          key: s,
          href: r.href,
          class: A(k(Ye)({ variant: r.primary ? "default" : "outline" }))
        }, {
          default: O(() => [
            R(c(r.label), 1)
          ]),
          _: 2
        }, 1032, ["href", "class"]))), 128))
      ])) : x("", !0)
    ]));
  }
}), op = {
  key: 0,
  class: "flex justify-end"
}, sp = {
  key: 1,
  class: "flex flex-col gap-2"
}, rp = ["onDrop"], ip = ["aria-label", "onDragstart"], dp = ["onClick"], up = { class: "font-medium" }, cp = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, fp = {
  key: 2,
  class: "min-w-0 flex-1"
}, mp = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, pp = ["aria-label", "onClick"], vp = ["disabled", "aria-label", "onClick"], gp = ["disabled", "aria-label", "onClick"], hp = ["disabled", "title", "aria-label", "onClick"], bp = ["disabled", "title", "aria-label", "onClick"], yp = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, xp = ["disabled"], kp = {
  key: 2,
  class: "flex flex-col gap-2"
}, $p = {
  key: 0,
  class: "overflow-x-auto rounded-md border"
}, wp = { class: "w-full text-sm" }, Cp = { class: "bg-muted/40" }, Sp = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Mp = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Bp = ["onDrop"], Ap = {
  key: 0,
  class: "px-2 py-1.5 align-top"
}, _p = ["aria-label", "onDragstart"], zp = { class: "px-2 py-1.5 align-top" }, Pp = { class: "mt-0.5 flex items-center gap-0.5" }, Lp = ["disabled", "aria-label", "onClick"], Op = ["disabled", "aria-label", "onClick"], jp = ["disabled", "title", "aria-label", "onClick"], Vp = ["disabled", "title", "aria-label", "onClick"], Dp = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Tp = ["disabled"], y6 = /* @__PURE__ */ L({
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
    const i = K(d(n.modelValue));
    function d(W) {
      return Array.isArray(W) ? W.map((H) => ({ uid: s++, data: { ...H } })) : [];
    }
    pe(
      () => n.modelValue,
      (W) => {
        JSON.stringify(W ?? null) !== JSON.stringify(u()) && (i.value = d(W));
      }
    );
    function u() {
      const W = [];
      for (const H of i.value) {
        const U = {};
        let ee = !1;
        for (const P of n.children) {
          const Y = H.data[P.key] ?? null;
          U[P.key] = Y, Y !== null && Y !== "" && !(Array.isArray(Y) && Y.length === 0) && (ee = !0);
        }
        ee && W.push(U);
      }
      return W.length ? W : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const v = y(() => n.maxItems !== null && i.value.length >= n.maxItems), p = y(() => n.minItems !== null && i.value.length <= n.minItems), h = y(() => n.children.length === 1);
    function $() {
      if (v.value || n.disabled || !n.addable)
        return;
      const W = {};
      for (const H of n.children)
        W[H.key] = null;
      i.value.push({ uid: s++, data: W });
    }
    function b(W) {
      i.value = i.value.filter((H) => H.uid !== W), f();
    }
    function w(W) {
      if (v.value || n.disabled || !n.cloneable)
        return;
      const H = i.value.findIndex((Y) => Y.uid === W);
      if (H < 0)
        return;
      const U = i.value[H], ee = {};
      for (const Y of n.children) {
        const V = U.data[Y.key];
        ee[Y.key] = Array.isArray(V) ? [...V] : V;
      }
      const P = [...i.value];
      P.splice(H + 1, 0, { uid: s++, data: ee }), i.value = P, f();
    }
    function C(W, H) {
      const U = W + H;
      if (U < 0 || U >= i.value.length)
        return;
      const ee = [...i.value], [P] = ee.splice(W, 1);
      ee.splice(U, 0, P), i.value = ee, f();
    }
    function M(W, H, U) {
      const ee = i.value.find((P) => P.uid === W);
      ee && (ee.data[H] = U, f());
    }
    function B(W, H) {
      return n.errors[`${n.fieldKey}.${W}.${H}`];
    }
    const S = K(/* @__PURE__ */ new Set());
    function m(W) {
      return n.collapsible && S.value.has(W);
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
      const H = n.children[0];
      if (!H)
        return "";
      const U = W.data[H.key];
      if (typeof U != "string" && typeof U != "number")
        return "";
      const ee = String(U).trim();
      return ee === "" || ee.length > 60 ? "" : ee;
    }
    const J = K(null);
    function N(W, H) {
      if (n.disabled) {
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
      const U = J.value;
      if (J.value = null, n.disabled || U === null || U === W)
        return;
      const ee = [...i.value], P = ee.findIndex((I) => I.uid === U), Y = ee.findIndex((I) => I.uid === W);
      if (P < 0 || Y < 0)
        return;
      const [V] = ee.splice(P, 1);
      ee.splice(Y, 0, V), i.value = ee, f();
    }
    return (W, H) => (t(), a(z, null, [
      !e.table && e.collapsible && i.value.length > 1 ? (t(), a("div", op, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: T
        }, c(_.value ? "Expand all" : "Collapse all"), 1)
      ])) : x("", !0),
      e.table ? (t(), a("div", kp, [
        i.value.length ? (t(), a("div", $p, [
          o("table", wp, [
            o("thead", null, [
              o("tr", Cp, [
                e.disabled ? x("", !0) : (t(), a("th", Sp, [...H[9] || (H[9] = [
                  o("span", { class: "sr-only" }, "Reorder", -1)
                ])])),
                (t(!0), a(z, null, j(e.children, (U) => (t(), a("th", {
                  key: U.key,
                  class: "text-muted-foreground border-b px-2 py-1.5 text-left text-xs font-medium"
                }, [
                  R(c(U.label) + " ", 1),
                  U.required ? (t(), a("span", Mp, "*")) : x("", !0)
                ]))), 128)),
                H[10] || (H[10] = o("th", { class: "border-b px-2 py-1.5" }, [
                  o("span", { class: "sr-only" }, "Row actions")
                ], -1))
              ])
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, j(i.value, (U, ee) => (t(), a("tr", {
                key: U.uid,
                class: A(["border-b last:border-b-0", J.value === U.uid ? "opacity-40" : ""]),
                onDragover: H[1] || (H[1] = he(() => {
                }, ["prevent"])),
                onDrop: (P) => Z(U.uid, P)
              }, [
                e.disabled ? x("", !0) : (t(), a("td", Ap, [
                  o("button", {
                    type: "button",
                    class: "text-muted-foreground/60 hover:text-muted-foreground mt-0.5 flex size-6 cursor-grab items-center justify-center active:cursor-grabbing",
                    draggable: "true",
                    "aria-label": `Drag to reorder ${e.itemLabel} ${ee + 1}`,
                    onDragstart: (P) => N(U.uid, P),
                    onDragend: G
                  }, [...H[11] || (H[11] = [
                    rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
                  ])], 40, _p)
                ])),
                (t(!0), a(z, null, j(e.children, (P) => (t(), a("td", {
                  key: P.key,
                  class: "min-w-[8rem] px-2 py-1.5 align-top"
                }, [
                  E(Ge, {
                    field: {
                      ...P,
                      disabled: P.disabled || e.disabled,
                      labelHidden: !0
                    },
                    value: U.data[P.key],
                    error: B(ee, P.key),
                    options: e.childOptions[P.key] ?? [],
                    onChange: (Y) => M(U.uid, P.key, Y)
                  }, null, 8, ["field", "value", "error", "options", "onChange"])
                ]))), 128)),
                o("td", zp, [
                  o("div", Pp, [
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
                    ])], 8, Lp),
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
                    ])], 8, Op),
                    e.cloneable ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || v.value,
                      title: v.value ? `At most ${e.maxItems} allowed` : void 0,
                      "aria-label": `Duplicate ${e.itemLabel} ${ee + 1}`,
                      onClick: (P) => w(U.uid)
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
                    ])], 8, jp)) : x("", !0),
                    e.deletable ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || p.value,
                      title: p.value ? `At least ${e.minItems} required` : void 0,
                      "aria-label": `Remove ${e.itemLabel} ${ee + 1}`,
                      onClick: (P) => b(U.uid)
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
                    ])], 8, Vp)) : x("", !0)
                  ])
                ])
              ], 42, Bp))), 128))
            ])
          ])
        ])) : (t(), a("p", Dp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)),
        !v.value && e.addable ? (t(), a("button", {
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
          R(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, Tp)) : x("", !0)
      ])) : (t(), a("div", sp, [
        (t(!0), a(z, null, j(i.value, (U, ee) => (t(), a("div", {
          key: U.uid,
          class: A(["flex items-start gap-2", J.value === U.uid ? "opacity-40" : ""]),
          onDragover: H[0] || (H[0] = he(() => {
          }, ["prevent"])),
          onDrop: (P) => Z(U.uid, P)
        }, [
          e.disabled ? x("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: A(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${ee + 1}`,
            onDragstart: (P) => N(U.uid, P),
            onDragend: G
          }, [...H[2] || (H[2] = [
            rt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, ip)),
          o("span", {
            class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(ee + 1), 3),
          m(U.uid) ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (P) => g(U.uid)
          }, [
            o("span", up, c(e.itemLabel) + " " + c(ee + 1), 1),
            F(U) ? (t(), a("span", cp, c(F(U)), 1)) : x("", !0)
          ], 8, dp)) : (t(), a("div", fp, [
            h.value ? (t(), D(Ge, {
              key: 0,
              field: {
                ...e.children[0],
                disabled: e.children[0].disabled || e.disabled,
                labelHidden: !0
              },
              value: U.data[e.children[0].key],
              error: B(ee, e.children[0].key),
              options: e.childOptions[e.children[0].key] ?? [],
              onChange: (P) => M(U.uid, e.children[0].key, P)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", mp, [
              (t(!0), a(z, null, j(e.children, (P) => (t(), D(Ge, {
                key: P.key,
                field: { ...P, disabled: P.disabled || e.disabled },
                value: U.data[P.key],
                error: B(ee, P.key),
                options: e.childOptions[P.key] ?? [],
                onChange: (Y) => M(U.uid, P.key, Y)
              }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
            ]))
          ])),
          o("div", {
            class: A(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
          }, [
            e.collapsible ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": m(U.uid) ? `Expand ${e.itemLabel} ${ee + 1}` : `Collapse ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => g(U.uid)
            }, [
              (t(), a("svg", {
                class: A(["size-3.5 transition-transform", m(U.uid) ? "" : "rotate-180"]),
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
            ], 8, pp)) : x("", !0),
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
            ])], 8, vp),
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
            ])], 8, gp),
            e.cloneable ? (t(), a("button", {
              key: 1,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || v.value,
              title: v.value ? `At most ${e.maxItems} allowed` : void 0,
              "aria-label": `Duplicate ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => w(U.uid)
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
            ])], 8, hp)) : x("", !0),
            e.deletable ? (t(), a("button", {
              key: 2,
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || p.value,
              title: p.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${ee + 1}`,
              onClick: (P) => b(U.uid)
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
            ])], 8, bp)) : x("", !0)
          ], 2)
        ], 42, rp))), 128)),
        i.value.length === 0 ? (t(), a("p", yp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : x("", !0),
        !v.value && e.addable ? (t(), a("button", {
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
          R(" Add " + c(e.itemLabel.toLowerCase()), 1)
        ], 8, xp)) : x("", !0)
      ]))
    ], 64));
  }
}), Ip = { class: "space-y-1" }, Ep = { class: "flex items-center gap-1" }, Fp = ["disabled", "title", "aria-label", "onClick"], Np = ["aria-pressed"], Rp = ["id", "value", "rows", "disabled"], Up = ["innerHTML"], Hp = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(!1), i = y(() => n.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, $ = h) {
      const b = document.getElementById(n.id ?? "");
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
      () => (n.toolbar ?? Object.keys(v)).filter((h) => h in v)
    );
    return (h, $) => (t(), a("div", Ip, [
      o("div", Ep, [
        (t(!0), a(z, null, j(p.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          disabled: e.disabled,
          title: b,
          "aria-label": b,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (w) => v[b].run()
        }, c(v[b].label), 9, Fp))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: $[0] || ($[0] = (b) => s.value = !s.value)
        }, " Preview ", 8, Np)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Up)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: $[1] || ($[1] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, Rp))
    ]));
  }
}), Kp = { class: "space-y-1" }, qp = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Gp = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Wp = ["id", "value", "rows", "disabled"], Zp = { class: "text-muted-foreground text-xs font-normal" }, Jp = {
  key: 0,
  class: "text-destructive text-xs"
}, Yp = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(null), i = K(!0), d = y(() => n.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), f = y(() => {
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
      const $ = h.target, b = $.selectionStart, w = $.selectionEnd, C = `${d.value.slice(0, b)}    ${d.value.slice(w)}`;
      r("update:modelValue", C), requestAnimationFrame(() => {
        $.selectionStart = $.selectionEnd = b + 4;
      });
    }
    return (h, $) => (t(), a("div", Kp, [
      o("div", qp, [
        o("div", Gp, [
          (t(!0), a(z, null, j(u.value, (b) => (t(), a("div", { key: b }, c(b), 1))), 128))
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
        }, null, 40, Wp)
      ]),
      o("p", Zp, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), a("p", Jp, c(f.value), 1)) : x("", !0)
    ]));
  }
}), Qp = { class: "space-y-3" }, Xp = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ev = { class: "text-sm font-medium" }, tv = { class: "flex items-center gap-1" }, nv = ["disabled", "onClick"], av = ["disabled", "onClick"], lv = ["disabled", "onClick"], ov = { class: "space-y-3 p-3" }, sv = { class: "flex flex-wrap items-center gap-2" }, rv = ["disabled", "onClick"], iv = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, x6 = /* @__PURE__ */ L({
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
    return ($, b) => (t(), a("div", Qp, [
      (t(!0), a(z, null, j(s.value, (w, C) => (t(), a("div", {
        key: `${w.type}-${C}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Xp, [
          o("span", ev, c(i.value[w.type]?.label ?? w.type), 1),
          o("div", tv, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || C === 0,
              "aria-label": "Move up",
              onClick: (M) => p(C, -1)
            }, " ↑ ", 8, nv),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || C === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => p(C, 1)
            }, " ↓ ", 8, av),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => v(C)
            }, " Remove ", 8, lv)
          ])
        ]),
        o("div", ov, [
          (t(!0), a(z, null, j(i.value[w.type]?.fields ?? [], (M) => (t(), D(Ge, {
            key: M.key,
            field: M,
            value: w.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (B) => h(C, M.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", sv, [
        (t(!0), a(z, null, j(e.blocks, (w) => (t(), a("button", {
          key: w.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (C) => f(w.type)
        }, " + " + c(w.label), 9, rv))), 128)),
        d.value ? (t(), a("span", iv, c(e.maxBlocks) + " is the maximum here. ", 1)) : x("", !0)
      ])
    ]));
  }
}), dv = ["name", "value", "checked", "disabled", "onChange"], uv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, cv = /* @__PURE__ */ L({
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
      class: A(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(z, null, j(e.options, (u) => (t(), a("label", {
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
        }, null, 40, dv),
        R(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", uv, " Nothing to choose from yet. ")) : x("", !0)
    ], 2));
  }
}), fv = ["value", "checked", "disabled", "onChange"], mv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, pv = /* @__PURE__ */ L({
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
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, v) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: ie(u.value)
    }, [
      (t(!0), a(z, null, j(e.options, (p) => (t(), a("label", {
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
        }, null, 40, fv),
        R(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", mv, " Nothing to choose from yet. ")) : x("", !0)
    ], 4));
  }
}), vv = { class: "flex flex-col gap-1.5" }, gv = ["aria-label", "onClick"], hv = ["placeholder", "disabled", "maxlength"], bv = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, yv = ["onClick"], xv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, kv = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(""), i = y(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = y(() => i.value.length >= (n.field.max ?? 25)), u = y(
      () => (n.field.suggestions ?? []).filter(
        (h) => !i.value.some(($) => $.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
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
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (h, $) => (t(), a("div", vv, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(z, null, j(i.value, (b, w) => (t(), a("span", {
          key: `${b}-${w}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(c(b) + " ", 1),
          e.disabled ? x("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${b}`,
            onClick: (C) => v(w)
          }, " × ", 8, gv))
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
        }, null, 40, hv), [
          [_e, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", bv, [
        $[2] || ($[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), a(z, null, j(u.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (w) => f(b)
        }, c(b), 9, yv))), 128))
      ])) : x("", !0),
      d.value ? (t(), a("p", xv, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : x("", !0)
    ]));
  }
}), $v = 4.5, Cn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
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
function wv(e, l, n) {
  if (!Cn.test(e) || !Cn.test(l))
    return e;
  const r = qt(l) > 0.5, s = r ? 0 : 255;
  let i = ea(e);
  for (let d = 0; d <= 20; d++) {
    const u = Cv(i);
    if (ta(u, l) >= n)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Cv(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Sv = { class: "flex flex-col gap-2" }, Mv = { class: "flex items-center gap-2" }, Bv = {
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
}, Av = ["value", "disabled", "aria-label"], _v = ["value", "disabled", "placeholder"], zv = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Pv = ["aria-label", "title", "onClick"], Lv = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Ov = /* @__PURE__ */ L({
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
      const w = b.trim();
      if (w === "")
        return "";
      const C = w.startsWith("#") ? w : `#${w}`;
      return s.test(C) ? C.toLowerCase() : w;
    }
    function f(b) {
      r("update:modelValue", u(b.target.value));
    }
    const v = y(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : ta(i.value, n.field.contrastBackground)), p = y(() => n.field.contrastMinRatio ?? $v), h = y(() => v.value !== null && v.value < p.value);
    function $() {
      n.field.contrastBackground && r(
        "update:modelValue",
        wv(i.value, n.field.contrastBackground, p.value)
      );
    }
    return (b, w) => (t(), a("div", Sv, [
      o("div", Mv, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: w[0] || (w[0] = (C) => r("update:modelValue", C.target.value))
        }, null, 40, Av)) : (t(), a("span", Bv)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, _v)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", zv, [
        (t(!0), a(z, null, j(e.field.presets, (C) => (t(), a("button", {
          key: C,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === C.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: ie({ backgroundColor: C }),
          "aria-label": C,
          title: C,
          onClick: (M) => r("update:modelValue", C.toLowerCase())
        }, null, 14, Pv))), 128))
      ])) : x("", !0),
      h.value ? (t(), a("p", Lv, [
        o("span", null, " This fails contrast at " + c(v.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? x("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: $
        }, " Use a readable shade "))
      ])) : x("", !0)
    ]));
  }
}), jv = ["aria-disabled"], Vv = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(null);
    let i = null, d = null, u = null;
    const f = y(() => {
      const $ = n.modelValue?.[n.latKey], b = n.modelValue?.[n.lngKey];
      return typeof $ == "number" && typeof b == "number" ? { lat: $, lng: b } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const $ = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = $, i = $.map(s.value).setView([f.value.lat, f.value.lng], n.zoom), $.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
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
          ($.label || $.popup) && b.bindPopup(
            `<strong>${$.label ?? ""}</strong>${$.popup ? `<br>${$.popup}` : ""}`
          );
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
    return be(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), pe(
      () => n.modelValue,
      () => h(),
      { deep: !0 }
    ), ($, b) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: ie({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, jv));
  }
}), Dv = { class: "flex flex-col gap-2" }, Tv = { class: "text-muted-foreground text-xs font-normal" }, Iv = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("div", Dv, [
      E(Vv, {
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
      o("p", Tv, [
        R(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), a(z, { key: 0 }, [
          R(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : x("", !0)
      ])
    ]));
  }
}), Ev = { class: "flex flex-col gap-2" }, Fv = ["width", "height"], Nv = ["value", "disabled"], Rv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Uv = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(null), i = y(() => {
      if (n.field.from) {
        const f = n.values?.[n.field.from];
        return f == null ? "" : String(f);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), d = y(() => n.field.size ?? 160);
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
    }), (f, v) => (t(), a("div", Ev, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Fv),
      e.field.from ? (t(), a("p", Rv, "From " + c(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, Nv))
    ]));
  }
}), Hv = { class: "flex flex-col gap-2" }, Kv = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, qv = ["aria-label"], Gv = {
  key: 0,
  class: "text-destructive text-xs"
}, Wv = ["value", "disabled"], Zv = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Jv = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(null), i = K(null), d = y(() => {
      if (n.field.from) {
        const v = n.values?.[n.field.from];
        return v == null ? "" : String(v);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), u = y(() => (n.field.format ?? "CODE128").toUpperCase());
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
    return be(() => {
      f();
    }), pe([d, u], () => {
      f();
    }), (v, p) => (t(), a("div", Hv, [
      o("div", Kv, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, qv))
      ]),
      i.value ? (t(), a("p", Gv, c(i.value), 1)) : x("", !0),
      e.field.from ? (t(), a("p", Zv, " From " + c(e.field.from) + " (" + c(u.value) + ") ", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Wv))
    ]));
  }
}), Yv = { class: "mr-2 inline-block w-3 opacity-60" }, Qv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Xv = /* @__PURE__ */ L({
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
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: ie({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(z, null, j(i.value, (f, v) => (t(), a("div", {
        key: v,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", Yv, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        R(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", Qv, "No differences.")) : x("", !0)
    ], 4));
  }
}), eg = { class: "flex flex-col gap-3" }, tg = { class: "flex items-center justify-between gap-2" }, ng = { class: "text-sm font-medium" }, ag = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, lg = { class: "grid grid-cols-7 gap-1" }, og = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, sg = ["title"], k6 = /* @__PURE__ */ L({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = K(/* @__PURE__ */ new Date()), r = y(() => n.value.getFullYear()), s = y(() => n.value.getMonth()), i = y(
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
      for (let w = 0; w < h; w++)
        b.push({ day: null, key: `pad-${w}`, events: [] });
      for (let w = 1; w <= $; w++) {
        const C = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(w).padStart(2, "0")}`;
        b.push({ day: w, key: C, events: d.value.get(C) ?? [] });
      }
      return b;
    });
    function f() {
      n.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      n.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), a("div", eg, [
      o("div", tg, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", ng, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", ag, [
        (t(), a(z, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ($) => o("span", { key: $ }, c($), 1)), 64))
      ]),
      o("div", lg, [
        (t(!0), a(z, null, j(u.value, ($) => (t(), a("div", {
          key: $.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", $.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          $.day ? (t(), a("p", og, c($.day), 1)) : x("", !0),
          (t(!0), a(z, null, j($.events.slice(0, 3), (b, w) => (t(), a("p", {
            key: `${$.key}-${w}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: b.label
          }, c(b.label), 9, sg))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), rg = { class: "flex items-center gap-3" }, ig = ["min", "max", "step", "value", "disabled", "aria-label"], dg = { class: "flex shrink-0 items-center gap-1" }, ug = ["min", "max", "step", "value", "disabled"], cg = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, fg = /* @__PURE__ */ L({
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
    }), f = y(
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
    return (p, h) => (t(), a("div", rg, [
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
      }, null, 40, ig),
      o("div", dg, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = ($) => v($.target.value))
        }, null, 40, ug),
        e.field.unit ? (t(), a("span", cg, c(e.field.unit), 1)) : x("", !0)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ new Map();
function Vt(e, l) {
  pt.set(e, l);
}
function mg(e) {
  return pt.get(e);
}
function $6(e) {
  return pt.has(e);
}
function pg() {
  return [...pt.keys()].sort();
}
function w6() {
  pt.clear();
}
const vg = ["name", "value", "checked", "disabled", "onChange"], gg = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, hg = { class: "whitespace-nowrap" }, bg = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, yg = ["name", "value", "checked", "disabled", "onChange"], xg = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, kg = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, $g = { class: "text-center text-xs font-medium" }, wg = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Cg = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Sg = /* @__PURE__ */ L({
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
      () => n.field.preview ? mg(n.field.preview) : void 0
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
    function f(v) {
      return n.modelValue != null && v.value == n.modelValue;
    }
    return (v, p) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(z, null, j(e.options, (h) => (t(), a("label", {
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
        }, null, 40, vg),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", gg, [
          (t(), D(Ce(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : x("", !0),
        o("span", hg, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", bg, " Nothing to choose from yet. ")) : x("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), a(z, null, j(e.options, (h) => (t(), a("label", {
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
        }, null, 40, yg),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", xg, [
          s.value ? (t(), D(Ce(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", kg, " no preview ")) : x("", !0)
        ]),
        o("span", $g, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", wg, " Nothing to choose from yet. ")) : x("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", Cg, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(k(pg)().join(", ") || "none") + ". ", 1)
      ])) : x("", !0)
    ], 2));
  }
}), Mg = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Bg = /* @__PURE__ */ L({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Mg, [
      o("span", {
        class: "block size-full",
        style: ie({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Ag = { class: "flex flex-col items-center gap-1 text-center" }, _g = {
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
    return (s, i) => (t(), a("div", Ag, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: ie({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", _g, c(e.caption), 1)) : x("", !0)
    ]));
  }
}), zg = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Pg = { class: "flex items-center gap-3" }, Lg = ["src"], Og = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, jg = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Vg = {
  key: 0,
  class: "text-right text-sm"
}, Dg = { class: "text-neutral-500" }, Tg = { class: "tabular-nums" }, Ig = { key: 1 }, Eg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Fg = { class: "mt-2 font-medium" }, Ng = { key: 2 }, Rg = { class: "w-full text-sm" }, Ug = { class: "w-full py-3 pr-2" }, Hg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Kg = { key: 0 }, qg = ["colspan"], Gg = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Wg = { class: "w-64 text-sm" }, Zg = { class: "tabular-nums" }, Jg = {
  key: 3,
  class: "py-2"
}, Yg = { key: 4 }, Qg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Xg = { class: "mt-2 flex flex-col gap-1 text-sm" }, eh = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, th = { key: 0 }, nh = {
  key: 1,
  class: "mt-1"
}, ah = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, lh = /* @__PURE__ */ L({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function n() {
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
    return (f, v) => (t(), a("article", zg, [
      o("div", Pg, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Lg)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: ie({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(z, null, j(e.document.blocks, (p, h) => (t(), a(z, { key: h }, [
        p.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: ie({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: ie({ color: n() })
            }, c(p.title), 5),
            p.subtitle ? (t(), a("p", Og, c(p.subtitle), 1)) : x("", !0),
            p.reference ? (t(), a("p", jg, c(p.reference), 1)) : x("", !0)
          ]),
          r(p).length ? (t(), a("dl", Vg, [
            (t(!0), a(z, null, j(r(p), ($, b) => (t(), a("div", {
              key: b,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Dg, c($.label), 1),
              o("dd", Tg, c($.value), 1)
            ]))), 128))
          ])) : x("", !0)
        ], 4)) : p.type === "party" ? (t(), a("section", Ig, [
          o("h2", Eg, c(p.heading), 1),
          o("p", Fg, c(p.name), 1),
          (t(!0), a(z, null, j(d(p.lines), ($, b) => (t(), a("p", {
            key: b,
            class: "text-sm text-neutral-600"
          }, c($), 1))), 128))
        ])) : p.type === "lines" ? (t(), a("section", Ng, [
          o("table", Rg, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: ie({ borderColor: n() })
              }, [
                (t(!0), a(z, null, j(d(p.columns), ($, b) => (t(), a("th", {
                  key: b,
                  class: A(["pb-2 font-medium", b > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c($), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(z, null, j(s(p), ($, b) => (t(), a("tr", {
                key: b,
                class: "border-b border-neutral-200"
              }, [
                o("td", Ug, [
                  o("p", null, c($.description), 1),
                  $.detail ? (t(), a("p", Hg, c($.detail), 1)) : x("", !0)
                ]),
                (t(!0), a(z, null, j($.cells, (w, C) => (t(), a("td", {
                  key: C,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(w), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), a("tr", Kg, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, qg)
              ])) : x("", !0)
            ])
          ]),
          i(p).length ? (t(), a("div", Gg, [
            o("dl", Wg, [
              (t(!0), a(z, null, j(i(p), ($, b) => (t(), a("div", {
                key: b,
                class: A([
                  "flex justify-between py-1",
                  $.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: ie($.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: A($.strong ? "" : "text-neutral-600")
                }, c($.label), 3),
                o("dd", Zg, c($.value), 1)
              ], 6))), 128))
            ])
          ])) : x("", !0)
        ])) : p.type === "code" ? (t(), a("section", Jg, [
          E(na, {
            code: u(p.code),
            caption: u(p.caption),
            style: ie(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), a("section", Yg, [
          o("h2", Qg, c(p.heading), 1),
          o("ol", Xg, [
            (t(!0), a(z, null, j(d(p.items), ($, b) => (t(), a("li", {
              key: b,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: ie({ color: n() })
              }, c(b + 1) + ".", 5),
              o("span", null, c($), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), a("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: ie(p.emphasis ? { color: n() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), a("footer", eh, [
          p.text ? (t(), a("p", th, c(p.text), 1)) : x("", !0),
          d(p.contacts).length ? (t(), a("p", nh, c(d(p.contacts).join(" · ")), 1)) : x("", !0)
        ])) : (t(), a("p", ah, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), oh = ["aria-label", "title"], sh = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rh = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, C6 = /* @__PURE__ */ L({
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
      (t(), a("svg", sh, [
        r.value ? (t(), a(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", rh))
      ]))
    ], 8, oh));
  }
}), ih = ["width", "height"], dh = { key: 0 }, uh = ["x1", "x2", "y1", "y2"], ch = ["x", "y"], fh = ["x1", "x2", "y1", "y2"], mh = ["x", "y"], ph = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], vh = ["x", "y", "width", "height", "fill", "fill-opacity"], gh = ["x", "y"], hh = ["x", "y"], bh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, yh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, xh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, kh = { class: "text-xs font-semibold tabular-nums" }, $h = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, wh = { class: "text-muted-foreground" }, Sn = 5.6, S6 = /* @__PURE__ */ L({
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
    function r(P) {
      return n[P] ?? P;
    }
    function s(P, Y) {
      if (!l.thresholds?.length)
        return Y;
      const V = l.thresholds.find((I) => P < I.max);
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
      return p.value.forEach((V, I) => {
        V.points.forEach((te, le) => {
          const ne = Math.max(0, te.value) / T.value * (b.value ? m.value.w : m.value.h), se = (b.value ? S.value.top : S.value.left) + le * F.value + (F.value - J.value) / 2, Se = l.stacked ? 0 : I * N.value;
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
    function U(P) {
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
    return (P, Y) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      $.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: Y[0] || (Y[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", dh, [
            b.value ? (t(), a(z, { key: 0 }, [
              (t(!0), a(z, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: S.value.top,
                y2: S.value.top + m.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, uh))), 128)),
              (t(!0), a(z, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, ch))), 128))
            ], 64)) : (t(), a(z, { key: 1 }, [
              (t(!0), a(z, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.y}`,
                x1: S.value.left,
                x2: d.value - S.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, fh))), 128)),
              (t(!0), a(z, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.y}`,
                x: S.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, mh))), 128))
            ], 64))
          ])) : x("", !0),
          (t(!0), a(z, null, j(h.value, (V, I) => (t(), a("rect", {
            key: `hit-${I}`,
            x: b.value ? S.value.left : S.value.left + I * F.value,
            y: b.value ? S.value.top + I * F.value : S.value.top,
            width: b.value ? m.value.w : F.value,
            height: b.value ? F.value : m.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === I ? 0.4 : 0,
            onMouseenter: (te) => u.value = I
          }, null, 40, ph))), 128)),
          (t(!0), a(z, null, j(G.value, (V, I) => (t(), a("rect", {
            key: `b-${I}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": u.value === null || u.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, vh))), 128)),
          b.value ? (t(!0), a(z, { key: 1 }, j(h.value, (V, I) => ge((t(), a("text", {
            key: `c-${I}`,
            x: S.value.left - 8,
            y: U(I) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(B(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, gh)), [
            [Ke, H(I)]
          ])), 128)) : (t(!0), a(z, { key: 2 }, j(h.value, (V, I) => ge((t(), a("text", {
            key: `c-${I}`,
            x: U(I),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, hh)), [
            [Ke, H(I)]
          ])), 128))
        ], 40, ih)),
        ee.value ? (t(), a("div", bh, [
          o("p", yh, c(ee.value.label), 1),
          (t(!0), a(z, null, j(ee.value.rows, (V, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", xh, c(V.name || "Value"), 1),
            o("span", kh, c(g(V.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend && p.value.length > 1 ? (t(), a("div", $h, [
          (t(!0), a(z, null, j(p.value, (V, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", wh, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Ch = ["width", "height"], Sh = ["id"], Mh = ["stop-color"], Bh = ["stop-color"], Ah = { key: 0 }, _h = ["x1", "x2", "y1", "y2"], zh = ["x", "y"], Ph = ["x", "y"], Lh = ["x1", "x2", "y1", "y2"], Oh = ["d", "fill"], jh = ["d", "stroke", "stroke-dasharray"], Vh = ["cx", "cy", "fill"], Dh = { key: 1 }, Th = ["x1", "x2", "y1", "y2"], Ih = ["cx", "cy", "fill"], Eh = ["x", "y"], Fh = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Nh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Rh = { class: "text-xs font-semibold tabular-nums" }, Uh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Hh = { class: "text-muted-foreground" }, Kh = /* @__PURE__ */ L({
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
    const l = e, n = y(() => v.value.some((P) => P.axis === "right")), r = K(null), s = K(560), i = K(null);
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
      right: l.showAxis && n.value ? 44 : 12,
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
        const Y = P.points.map((I, te) => ({
          ...I,
          x: m(te),
          y: g(I.value, P.axis ?? "left")
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
      const V = [], I = [];
      for (let Q = 0; Q < Y - 1; Q++)
        V[Q] = P[Q + 1].x - P[Q].x, I[Q] = V[Q] === 0 ? 0 : (P[Q + 1].y - P[Q].y) / V[Q];
      const te = [I[0]];
      for (let Q = 1; Q < Y - 1; Q++)
        if (I[Q - 1] * I[Q] <= 0)
          te[Q] = 0;
        else {
          const ne = 2 * V[Q] + V[Q - 1], se = V[Q] + 2 * V[Q - 1];
          te[Q] = (ne + se) / (ne / I[Q - 1] + se / I[Q]);
        }
      te[Y - 1] = I[Y - 2];
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
      const Y = P.currentTarget.getBoundingClientRect(), V = P.clientX - Y.left - $.value.left, I = h.value <= 1 ? 1 : S.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / I)));
    }
    const U = y(() => {
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
      if (!U.value)
        return {};
      const P = U.value.x > s.value * 0.6;
      return {
        left: `${U.value.x}px`,
        top: "8px",
        transform: P ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (P, Y) => (t(), a("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: H,
          onMouseleave: Y[0] || (Y[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(z, null, j(_.value, (V, I) => (t(), a("linearGradient", {
              id: `pk-fill-${k(f)}-${I}`,
              key: I,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, Mh),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, Bh)
            ], 8, Sh))), 128))
          ]),
          e.showAxis ? (t(), a("g", Ah, [
            (t(!0), a(z, null, j(N.value, (V) => (t(), a("line", {
              key: V.y,
              x1: $.value.left,
              x2: s.value - $.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, _h))), 128)),
            (t(!0), a(z, null, j(N.value, (V) => (t(), a("text", {
              key: `t-${V.y}`,
              x: $.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(V.value)), 9, zh))), 128)),
            n.value ? (t(!0), a(z, { key: 0 }, j(G.value, (V) => (t(), a("text", {
              key: `rt-${V.y}`,
              x: s.value - $.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(w(V.value)), 9, Ph))), 128)) : x("", !0)
          ])) : x("", !0),
          (t(!0), a(z, null, j(p.value, (V, I) => ge((t(), a("line", {
            key: `v-${I}`,
            x1: m(I),
            x2: m(I),
            y1: $.value.top,
            y2: $.value.top + S.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Lh)), [
            [Ke, W(I)]
          ])), 128)),
          (t(!0), a(z, null, j(_.value, (V, I) => (t(), a("g", {
            key: `s-${I}`
          }, [
            V.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${k(f)}-${I})`
            }, null, 8, Oh)) : x("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, jh),
            V.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Vh)) : x("", !0)
          ]))), 128)),
          U.value ? (t(), a("g", Dh, [
            o("line", {
              x1: U.value.x,
              x2: U.value.x,
              y1: $.value.top,
              y2: $.value.top + S.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Th),
            (t(!0), a(z, null, j(U.value.rows, (V, I) => (t(), a("circle", {
              key: `d-${I}`,
              cx: U.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Ih))), 128))
          ])) : x("", !0),
          (t(!0), a(z, null, j(p.value, (V, I) => ge((t(), a("text", {
            key: `x-${I}`,
            x: m(I),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, Eh)), [
            [Ke, W(I)]
          ])), 128))
        ], 40, Ch)),
        U.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: ie(ee.value)
        }, [
          o("p", Fh, c(U.value.label), 1),
          (t(!0), a(z, null, j(U.value.rows, (V, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", Nh, c(V.name || "Value"), 1),
            o("span", Rh, c(b(V.value)), 1)
          ]))), 128))
        ], 4)) : x("", !0),
        e.showLegend && v.value.length > 1 ? (t(), a("div", Uh, [
          (t(!0), a(z, null, j(_.value, (V, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: V.color })
            }, null, 4),
            o("span", Hh, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), qh = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Gh = { class: "text-muted-foreground text-[11px] capitalize" }, Wh = { class: "text-sm font-semibold tabular-nums" }, Zh = {
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
    return (l, n) => (t(), a("div", qh, [
      o("p", Gh, c(e.label), 1),
      o("p", Wh, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), a("span", Zh, " (" + c(e.share) + ") ", 1)) : x("", !0)
      ])
    ]));
  }
}), Jh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Yh = ["width", "height", "viewBox", "aria-label"], Qh = ["d", "fill", "fill-opacity", "onMouseenter"], Xh = ["x", "y"], e1 = ["x", "y"], t1 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, n1 = ["onMouseenter"], a1 = { class: "min-w-0 flex-1 truncate capitalize" }, l1 = { class: "tabular-nums font-medium" }, o1 = { class: "text-muted-foreground w-9 text-right tabular-nums" }, M6 = /* @__PURE__ */ L({
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
    ], r = y(() => l.data.reduce((M, B) => M + B.value, 0)), s = K(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(M) {
      return n[M % n.length];
    }
    function v(M) {
      return 1 - Math.min(0.55, Math.floor(M / n.length) * 0.28);
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
    return (M, B) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Jh, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${w(r.value)}`
      }, [
        (t(!0), a(z, null, j(p.value, (S, m) => (t(), a("path", {
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
        }, null, 40, Qh))), 128)),
        e.type === "doughnut" ? (t(), a(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(w(s.value === null ? r.value : p.value[s.value].value)), 9, Xh),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, e1)
        ], 64)) : x("", !0)
      ], 8, Yh)),
      o("ul", t1, [
        (t(!0), a(z, null, j(p.value, (S, m) => (t(), a("li", {
          key: m,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === m ? "bg-muted" : ""]),
          onMouseenter: (g) => s.value = m,
          onMouseleave: B[1] || (B[1] = (g) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: S.colour, opacity: S.opacity })
          }, null, 4),
          o("span", a1, c(S.label), 1),
          o("span", l1, c(w(S.value)), 1),
          o("span", o1, c(C(S.share)), 1)
        ], 42, n1))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(vt, {
        key: 0,
        label: p.value[s.value].label,
        value: w(p.value[s.value].value),
        share: C(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), s1 = ["width", "height", "viewBox", "aria-label"], r1 = { class: "text-border" }, i1 = ["x1", "x2", "y1", "y2", "stroke-dasharray"], d1 = { class: "fill-muted-foreground text-[10px]" }, u1 = ["x", "y"], c1 = ["x", "y"], f1 = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], m1 = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, B6 = /* @__PURE__ */ L({
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
    ), f = (Z, W) => W.color ?? n[Z % n.length], v = y(() => u.value.flatMap((Z) => Z.points)), p = y(() => v.value.some((Z) => typeof Z.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, $ = y(() => Math.max(10, s.value - h.left - h.right)), b = y(() => Math.max(10, l.height - h.top - h.bottom));
    function w(Z) {
      if (Z.length === 0)
        return [0, 1];
      const W = Math.min(...Z), H = Math.max(...Z), U = H - W || Math.abs(H) || 1;
      return [W - U * 0.08, H + U * 0.08];
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
      return Array.from({ length: 5 }, (H, U) => Z + (W - Z) / 4 * U);
    }
    const T = y(() => _(C.value)), F = y(() => _(M.value)), J = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), N = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), G = y(() => {
      if (!i.value)
        return null;
      const Z = u.value[i.value.s], W = Z?.points[i.value.p];
      return W ? { series: Z, point: W } : null;
    });
    return (Z, W) => (t(), a("div", {
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
        o("g", r1, [
          (t(!0), a(z, null, j(F.value, (H, U) => (t(), a("line", {
            key: `gy-${U}`,
            x1: h.left,
            x2: h.left + $.value,
            y1: S(H),
            y2: S(H),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": U === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, i1))), 128))
        ]),
        o("g", d1, [
          (t(!0), a(z, null, j(F.value, (H, U) => (t(), a("text", {
            key: `ty-${U}`,
            x: h.left - 8,
            y: S(H) + 3,
            "text-anchor": "end"
          }, c(N(H)), 9, u1))), 128)),
          (t(!0), a(z, null, j(T.value, (H, U) => (t(), a("text", {
            key: `tx-${U}`,
            x: B(H),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(J(H)), 9, c1))), 128))
        ]),
        (t(!0), a(z, null, j(u.value, (H, U) => (t(), a("g", {
          key: `s-${U}`
        }, [
          (t(!0), a(z, null, j(H.points, (ee, P) => (t(), a("circle", {
            key: `p-${U}-${P}`,
            cx: B(ee.x),
            cy: S(ee.y),
            r: g(ee),
            fill: f(U, H),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(U, H),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== U || i.value.p !== P) ? 0.35 : 1,
            onMouseenter: (Y) => i.value = { s: U, p: P },
            onMouseleave: W[0] || (W[0] = (Y) => i.value = null)
          }, null, 40, f1))), 128))
        ]))), 128))
      ], 8, s1)),
      G.value ? (t(), D(vt, {
        key: 0,
        label: G.value.point.label ?? G.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${J(G.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${N(G.value.point.y)}`,
        share: p.value && G.value.point.r != null ? String(G.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : x("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", m1, [
        (t(!0), a(z, null, j(u.value, (H, U) => (t(), a("span", {
          key: `l-${U}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: ie({ backgroundColor: f(U, H) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + c(H.name), 1)
        ]))), 128))
      ])) : x("", !0)
    ], 512));
  }
}), p1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, v1 = ["width", "height", "viewBox"], g1 = ["points"], h1 = ["x1", "y1", "x2", "y2"], b1 = ["points", "fill", "stroke"], y1 = ["cx", "cy", "fill", "onMouseenter"], x1 = ["x", "y", "text-anchor"], k1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, $1 = { class: "truncate" }, A6 = /* @__PURE__ */ L({
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
      () => l.series.map((S, m) => ({
        ...S,
        color: S.color ?? n[m % n.length]
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
    return (S, m) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", p1, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, j(b.value, (g) => (t(), a("polygon", {
          key: g.f,
          points: g.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, g1))), 128)),
        (t(!0), a(z, null, j(s.value, (g, _) => (t(), a("line", {
          key: `spoke-${_}`,
          x1: u.value,
          y1: u.value,
          x2: h(_, 1).x,
          y2: h(_, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, h1))), 128)),
        (t(!0), a(z, null, j(w.value, (g, _) => (t(), a("g", {
          key: `s-${_}`
        }, [
          o("polygon", {
            points: g.outline,
            fill: g.color,
            "fill-opacity": "0.16",
            stroke: g.color,
            "stroke-width": "2"
          }, null, 8, b1),
          (t(!0), a(z, null, j(g.dots, (T, F) => (t(), a("circle", {
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
          }, null, 40, y1))), 128))
        ]))), 128)),
        (t(!0), a(z, null, j(C.value, (g, _) => (t(), a("text", {
          key: `l-${_}`,
          x: g.x,
          y: g.y,
          "text-anchor": g.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(g.label), 9, x1))), 128))
      ], 8, v1)),
      e.showLegend ? (t(), a("ul", k1, [
        (t(!0), a(z, null, j(r.value, (g, _) => (t(), a("li", {
          key: _,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: g.color })
          }, null, 4),
          o("span", $1, c(g.name), 1)
        ]))), 128))
      ])) : x("", !0),
      M.value ? (t(), D(vt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: B(M.value.value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), w1 = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, C1 = ["width", "height", "viewBox"], S1 = ["cx", "cy", "r"], M1 = ["d", "fill", "fill-opacity", "onMouseenter"], B1 = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, A1 = { class: "min-w-0 flex-1 truncate capitalize" }, _1 = { class: "font-medium tabular-nums" }, _6 = /* @__PURE__ */ L({
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
    ], r = K(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map(($) => Math.max(0, $.value)), 0)), f = y(() => {
      const $ = l.data.length;
      if ($ === 0 || u.value <= 0)
        return [];
      const b = Math.PI * 2 / $;
      return l.data.map((w, C) => {
        const M = Math.sqrt(Math.max(0, w.value) / u.value), B = d.value * M, S = C * b - Math.PI / 2, m = S + b;
        return {
          ...w,
          color: n[C % n.length],
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
    return ($, b) => f.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: ie({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", w1, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(z, null, j(p.value, (w) => (t(), a("circle", {
          key: w,
          cx: i.value,
          cy: i.value,
          r: w,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, S1))), 128)),
        (t(!0), a(z, null, j(f.value, (w, C) => (t(), a("path", {
          key: C,
          d: w.path,
          fill: w.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === C ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = C,
          onMouseleave: b[0] || (b[0] = (M) => r.value = null)
        }, null, 40, M1))), 128))
      ], 8, C1)),
      e.showLegend ? (t(), a("ul", B1, [
        (t(!0), a(z, null, j(f.value, (w, C) => (t(), a("li", {
          key: C,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: ie({ background: w.color })
          }, null, 4),
          o("span", A1, c(w.label), 1),
          o("span", _1, c(h(w.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      r.value !== null ? (t(), D(vt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), z1 = ["width", "height"], P1 = ["x1", "x2", "y1", "y2"], L1 = ["x", "y"], O1 = ["x", "y"], j1 = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], V1 = ["x", "y", "width", "height", "fill", "fill-opacity"], D1 = ["d", "stroke"], T1 = ["cx", "cy", "fill"], I1 = ["x", "y"], E1 = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, F1 = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, N1 = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, R1 = { class: "text-xs font-semibold tabular-nums" }, U1 = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, H1 = { class: "text-muted-foreground" }, z6 = /* @__PURE__ */ L({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    be(() => {
      i = new ResizeObserver((U) => {
        r.value = Math.max(160, U[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = y(
      () => l.bars.map((U, ee) => ({
        ...U,
        color: U.color ?? d[ee % d.length]
      }))
    ), v = y(
      () => l.lines.map((U, ee) => ({
        ...U,
        color: U.color ?? u[ee % u.length]
      }))
    ), p = y(
      () => f.value[0]?.points.map((U) => U.label) ?? v.value[0]?.points.map((U) => U.label) ?? []
    ), h = y(() => p.value.length), $ = y(() => l.lineAxis === "right"), b = y(() => ({
      top: 12,
      right: $.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), w = y(() => ({
      w: Math.max(1, r.value - b.value.left - b.value.right),
      h: Math.max(1, l.height - b.value.top - b.value.bottom)
    }));
    function C(U) {
      const ee = Math.max(...U, 0);
      if (ee <= 0)
        return 1;
      const P = 10 ** Math.floor(Math.log10(ee));
      return ([1, 2, 2.5, 5, 10].find((V) => ee <= V * P) ?? 10) * P;
    }
    const M = y(
      () => C([
        ...f.value.flatMap((U) => U.points.map((ee) => ee.value)),
        ...$.value ? [] : v.value.flatMap((U) => U.points.map((ee) => ee.value))
      ])
    ), B = y(
      () => $.value ? C(v.value.flatMap((U) => U.points.map((ee) => ee.value))) : M.value
    ), S = y(() => w.value.w / Math.max(1, h.value)), m = y(() => S.value * 0.6), g = y(() => m.value / Math.max(1, f.value.length));
    function _(U) {
      return b.value.left + U * S.value + S.value / 2;
    }
    const T = y(
      () => f.value.flatMap(
        (U, ee) => U.points.map((P, Y) => {
          const V = Math.max(0, P.value) / M.value * w.value.h;
          return {
            x: _(Y) - m.value / 2 + ee * g.value,
            y: b.value.top + w.value.h - V,
            w: Math.max(0, g.value - 2),
            h: V,
            color: U.color,
            index: Y,
            name: U.name,
            value: P.value,
            label: P.label
          };
        })
      )
    ), F = y(
      () => v.value.map((U) => {
        const ee = U.points.map((P, Y) => ({
          x: _(Y),
          y: b.value.top + w.value.h - Math.max(0, P.value) / B.value * w.value.h,
          value: P.value
        }));
        return {
          ...U,
          pts: ee,
          d: ee.map((P, Y) => `${Y === 0 ? "M" : "L"}${P.x.toFixed(2)},${P.y.toFixed(2)}`).join(" ")
        };
      })
    ), J = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((U) => ({
        y: b.value.top + w.value.h * U,
        left: M.value * (1 - U),
        right: B.value * (1 - U)
      }))
    ), N = y(() => Math.max(1, Math.ceil(h.value / 10)));
    function G(U) {
      return U === h.value - 1 || U % N.value === 0;
    }
    const Z = (U) => l.format ? l.format(U) : W(U);
    function W(U) {
      return Math.abs(U) >= 1e6 ? `${(U / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(U) >= 1e3 ? `${(U / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(U * 100) / 100);
    }
    const H = y(() => {
      if (s.value === null)
        return null;
      const U = s.value;
      return {
        label: p.value[U],
        rows: [
          ...f.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[U]?.value ?? 0
          })),
          ...v.value.map((ee) => ({
            name: ee.name,
            color: ee.color,
            value: ee.points[U]?.value ?? 0
          }))
        ]
      };
    });
    return (U, ee) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: ee[0] || (ee[0] = (P) => s.value = null)
        }, [
          (t(!0), a(z, null, j(J.value, (P) => (t(), a("line", {
            key: `g-${P.y}`,
            x1: b.value.left,
            x2: r.value - b.value.right,
            y1: P.y,
            y2: P.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, P1))), 128)),
          (t(!0), a(z, null, j(J.value, (P) => (t(), a("text", {
            key: `lt-${P.y}`,
            x: b.value.left - 8,
            y: P.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(P.left)), 9, L1))), 128)),
          $.value ? (t(!0), a(z, { key: 0 }, j(J.value, (P) => (t(), a("text", {
            key: `rt-${P.y}`,
            x: r.value - b.value.right + 8,
            y: P.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(P.right)), 9, O1))), 128)) : x("", !0),
          (t(!0), a(z, null, j(p.value, (P, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: b.value.left + Y * S.value,
            y: b.value.top,
            width: S.value,
            height: w.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === Y ? 0.4 : 0,
            onMouseenter: (V) => s.value = Y
          }, null, 40, j1))), 128)),
          (t(!0), a(z, null, j(T.value, (P, Y) => (t(), a("rect", {
            key: `b-${Y}`,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.color,
            "fill-opacity": s.value === null || s.value === P.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, V1))), 128)),
          (t(!0), a(z, null, j(F.value, (P, Y) => (t(), a("g", {
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
            }, null, 8, D1),
            s.value !== null && P.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: P.pts[s.value].x,
              cy: P.pts[s.value].y,
              r: "4",
              fill: P.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, T1)) : x("", !0)
          ]))), 128)),
          (t(!0), a(z, null, j(p.value, (P, Y) => ge((t(), a("text", {
            key: `x-${Y}`,
            x: _(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(P), 9, I1)), [
            [Ke, G(Y)]
          ])), 128))
        ], 40, z1)),
        H.value ? (t(), a("div", E1, [
          o("p", F1, c(H.value.label), 1),
          (t(!0), a(z, null, j(H.value.rows, (P, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: P.color })
            }, null, 4),
            o("span", N1, c(P.name), 1),
            o("span", R1, c(Z(P.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend ? (t(), a("div", U1, [
          (t(!0), a(z, null, j([...f.value, ...v.value], (P, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: ie({ background: P.color })
            }, null, 4),
            o("span", H1, c(P.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), K1 = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, q1 = { class: "text-muted-foreground" }, G1 = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, W1 = ["width", "height"], Z1 = ["x", "y"], J1 = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Y1 = ["x", "y"], Q1 = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, X1 = { class: "text-[11px] font-medium capitalize" }, eb = { class: "text-muted-foreground text-[11px] capitalize" }, tb = { class: "text-sm font-semibold tabular-nums" }, nb = { class: "text-muted-foreground text-xs font-normal" }, P6 = /* @__PURE__ */ L({
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
    const l = e, n = K(null), r = K(560), s = K(null);
    let i = null;
    be(() => {
      i = new ResizeObserver((m) => {
        r.value = Math.max(160, m[0].contentRect.width);
      }), n.value && i.observe(n.value);
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
    return (m, g) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: ie({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(z, { key: 1 }, [
        o("div", K1, [
          (t(!0), a(z, null, j(e.buckets, (_, T) => (t(), a("span", {
            key: T,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: ie({ background: b(T) })
            }, null, 4),
            o("span", q1, c(_.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), a("p", G1, c(f.value) + " columns - too many to label individually ", 1)) : x("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: g[0] || (g[0] = (_) => s.value = null)
        }, [
          (t(!0), a(z, null, j(e.series, (_, T) => (t(), a("text", {
            key: `r-${T}`,
            x: v.value - 10,
            y: 4 + T * $.value + $.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(_.name), 9, Z1))), 128)),
          (t(!0), a(z, null, j(C.value, (_, T) => (t(), a("rect", {
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
          }, null, 40, J1))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), a(z, { key: 0 }, j(d.value, (_, T) => (t(), a("text", {
            key: `c-${T}`,
            x: v.value + T * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(_), 9, Y1))), 128)) : x("", !0)
        ], 40, W1)),
        B.value ? (t(), a("div", Q1, [
          o("p", X1, c(B.value.label), 1),
          o("p", eb, c(B.value.rowName), 1),
          o("p", tb, [
            R(c(S(B.value.value)) + " ", 1),
            o("span", nb, "(" + c(B.value.bucketLabel) + ")", 1)
          ])
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), ab = ["viewBox"], lb = { key: 0 }, ob = ["id"], sb = ["stop-color"], rb = ["stop-color"], ib = ["d", "fill"], db = ["d", "stroke"], Mn = 100, st = 30, zt = /* @__PURE__ */ L({
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
    return (u, f) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${Mn} ${st}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: ie({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", lb, [
        o("linearGradient", {
          id: `pk-spark-${k(n)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, sb),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, rb)
        ], 8, ob)
      ])) : x("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(n)})`
      }, null, 8, ib)) : x("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, db)
    ], 12, ab)) : x("", !0);
  }
}), ub = { class: "flex items-center gap-1 text-xs" }, cb = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, fb = {
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
    return (d, u) => (t(), a("span", ub, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", cb, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", fb, c(e.comparison), 1)) : x("", !0)
    ]));
  }
}), mb = ["data-collapsed"], pb = { class: "flex flex-wrap items-start justify-between gap-2" }, vb = { class: "flex min-w-0 items-start gap-2" }, gb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hb = ["d"], bb = { class: "min-w-0" }, yb = { class: "text-sm font-medium" }, xb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, kb = { class: "flex shrink-0 items-center gap-1.5" }, $b = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, wb = ["aria-pressed", "onClick"], Cb = ["aria-expanded", "aria-label", "title"], Sb = ["aria-label"], Mb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bb = ["d"], Ab = /* @__PURE__ */ L({
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
    const l = e, n = Gt(), r = K(l.defaultCollapsed), s = y(() => !!l.icon && !n.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", pb, [
        o("div", vb, [
          q(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", gb, [
              o("path", {
                d: k(me)(e.icon)
              }, null, 8, hb)
            ])) : x("", !0)
          ]),
          o("div", bb, [
            o("p", yb, c(e.label), 1),
            e.description ? (t(), a("p", xb, c(e.description), 1)) : x("", !0),
            q(d.$slots, "trend")
          ])
        ]),
        o("div", kb, [
          q(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", $b, [
            (t(!0), a(z, null, j(e.periods, (f) => (t(), a("button", {
              key: f.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (v) => d.$emit("update:period", f.value)
            }, c(f.label), 11, wb))), 128))
          ])) : x("", !0),
          e.collapsible ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (f) => r.value = !r.value)
          }, [
            (t(), a("svg", {
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
          ], 8, Cb)) : x("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), a("svg", Mb, [
              o("path", {
                d: k(me)("eye-off")
              }, null, 8, Bb)
            ]))
          ], 8, Sb)) : x("", !0)
        ])
      ]),
      r.value ? x("", !0) : (t(), a("div", {
        key: 0,
        style: ie(i.value),
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
          style: ie({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : q(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, mb));
  }
}), _b = ["aria-pressed", "aria-label", "title"], zb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Pb = ["d"], Lb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Ob = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, jb = ["href"], Vb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Db = ["d"], Tb = ["aria-label", "onClick"], Ib = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Eb = ["d"], Fb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nb = ["d"], Rb = {
  key: 0,
  class: "flex flex-col gap-1"
}, Ub = ["onClick"], Hb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Kb = ["d"], qb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Gb = /* @__PURE__ */ L({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!1), i = K(!1), d = y(
      () => n.catalog.filter((v) => !n.items.some((p) => p.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        n.items.filter((p) => p.id !== v)
      );
    }
    function f(v) {
      r("update:items", [...n.items, v]), i.value = !1;
    }
    return (v, p) => (t(), a(z, null, [
      E(Ab, {
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
            (t(), a("svg", zb, [
              o("path", {
                d: k(me)(s.value ? "check" : "pencil")
              }, null, 8, Pb)
            ]))
          ], 8, _b)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), a("div", Lb, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            E(ce, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Ob, [
            (t(!0), a(z, null, j(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Vb, [
                  o("path", {
                    d: k(me)(h.icon)
                  }, null, 8, Db)
                ])),
                R(" " + c(h.label), 1)
              ], 8, jb),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: ($) => u(h.id)
              }, [
                (t(), a("svg", Ib, [
                  o("path", {
                    d: k(me)("x")
                  }, null, 8, Eb)
                ]))
              ], 8, Tb)) : x("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", Fb, [
                o("path", {
                  d: k(me)("plus")
                }, null, 8, Nb)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : x("", !0)
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
          E(ce, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          d.value.length ? (t(), a("ul", Rb, [
            (t(!0), a(z, null, j(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: ($) => f(h)
              }, [
                (t(), a("svg", Hb, [
                  o("path", {
                    d: k(me)(h.icon)
                  }, null, 8, Kb)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Ub)
            ]))), 128))
          ])) : (t(), a("p", qb, " Every catalog shortcut is already on the card. "))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Wb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Zb = { class: "flex flex-1 flex-col gap-1 p-4" }, Jb = { class: "text-muted-foreground relative text-xs font-medium" }, Yb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Qb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Xb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, ey = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, L6 = /* @__PURE__ */ L({
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
    return (n, r) => (t(), a("div", Wb, [
      o("div", Zb, [
        o("p", Jb, c(e.label), 1),
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", Yb, " Could not load ")) : (t(), a("span", Qb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(aa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", Xb, c(e.description), 1)) : x("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", ey, [
        E(zt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : x("", !0)
    ]));
  }
}), ty = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, ny = { class: "flex flex-col gap-1 p-4" }, ay = { class: "flex items-start justify-between gap-2" }, ly = { class: "text-sm font-medium" }, oy = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, sy = { class: "mt-1 flex flex-wrap items-center gap-2" }, ry = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, iy = {
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
    return (i, d) => (t(), a("div", ty, [
      o("div", ny, [
        o("div", ay, [
          o("p", ly, c(e.label), 1),
          q(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", oy, c(e.caption), 1)) : x("", !0),
        o("div", sy, [
          e.loading ? (t(), D(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", ry, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : x("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", iy, [
        E(zt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : x("", !0)
    ]));
  }
}), dy = { class: "relative flex flex-col gap-2" }, uy = ["aria-label"], cy = ["onMouseenter"], fy = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, my = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, py = { class: "truncate" }, vy = { class: "text-sm font-semibold tabular-nums" }, O6 = /* @__PURE__ */ L({
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
    ), d = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), u = K(null), f = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), a("div", dy, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: ie({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(z, null, j(i.value, (h, $) => (t(), a("span", {
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
        }, null, 46, cy))), 128))
      ], 12, uy),
      e.showLegend ? (t(), a("div", fy, [
        (t(!0), a(z, null, j(i.value, (h, $) => (t(), a("div", {
          key: $,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", my, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: ie({ background: h.color })
            }, null, 4),
            o("span", py, c(h.label), 1)
          ]),
          o("span", vy, c(d(h.value)), 1)
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
}), gy = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, hy = ["data-heading"], by = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, yy = { class: "text-muted-foreground truncate" }, xy = ["aria-label"], j6 = /* @__PURE__ */ L({
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
    return (i, d) => (t(), a("div", gy, [
      (t(!0), a(z, null, j(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), a("div", by, [
          o("span", yy, c(u.label), 1),
          o("span", {
            class: A(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, c(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), a(z, null, j(u.segments, (f, v) => (t(), a("span", {
            key: v,
            class: A(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: ie({ width: f.width })
          }, null, 6))), 128))
        ], 8, xy)) : x("", !0)
      ], 8, hy))), 128))
    ]));
  }
}), ky = {
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
}, $y = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function wy(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Cy(e, l) {
  return l || (e ? ky[wy(e)] ?? "neutral" : "neutral");
}
function Sy(e, l) {
  return $y[Cy(e, l)];
}
const $e = /* @__PURE__ */ L({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = y(() => Sy(l.status, l.tone));
    return (r, s) => (t(), D(We, {
      variant: n.value,
      class: A(l.class)
    }, {
      default: O(() => [
        q(r.$slots, "default", {}, () => [
          R(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), My = ["data-layout"], By = ["src", "alt"], Ay = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, _y = ["src"], zy = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, Py = ["onMouseenter"], Ly = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, Oy = { class: "min-w-0" }, jy = { class: "truncate text-sm font-medium" }, Vy = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, Dy = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, Ty = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, Iy = { class: "min-w-0" }, Ey = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, Fy = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Ny = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ry = ["d"], Uy = ["aria-label"], Hy = /* @__PURE__ */ L({
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
    return (C, M) => (t(), a("article", {
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
        f.value ? (t(), a("img", {
          key: 0,
          src: f.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, By)) : (t(), a("span", Ay, c(v.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, _y)) : x("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", zy, [
          (t(!0), a(z, null, j(u.value, (B, S) => (t(), a("span", {
            key: S,
            class: A(["size-1.5 rounded-full", S === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (m) => i.value = S
          }, null, 42, Py))), 128))
        ])) : x("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", Ly, [
          o("div", Oy, [
            o("p", jy, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", Vy, c(e.item.caption), 1)) : x("", !0),
            e.item.facts?.length ? (t(), a("p", Dy, c(e.item.facts.join(" · ")), 1)) : x("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : x("", !0)
        ]),
        o("div", Ty, [
          o("div", Iy, [
            e.item.price ? (t(), a("p", Ey, c(e.item.price), 1)) : x("", !0),
            b.value ? (t(), a("p", Fy, c(b.value), 1)) : x("", !0)
          ]),
          $.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: w
          }, [
            (t(), a("svg", Ny, [
              o("path", {
                d: k(me)("cart")
              }, null, 8, Ry)
            ]))
          ])) : x("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: A(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: ie({ width: p.value })
          }, null, 6)
        ], 8, Uy)) : x("", !0)
      ], 2)
    ], 42, My));
  }
});
function Ky(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function qy(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function Gy(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Wy = ["data-featured", "data-recommended"], Zy = { class: "flex flex-col gap-1" }, Jy = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Yy = { key: 0 }, Qy = { key: 1 }, Xy = { key: 2 }, ex = { key: 3 }, tx = { class: "text-sm font-semibold" }, nx = { class: "flex items-baseline gap-1" }, ax = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, lx = { class: "text-muted-foreground text-sm font-normal" }, ox = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, sx = { class: "text-muted-foreground mt-1 text-xs" }, rx = { class: "flex flex-1 flex-col gap-2 text-sm" }, ix = { class: "flex min-w-0 items-start gap-2" }, dx = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ux = ["d"], cx = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fx = ["d"], mx = { class: "capitalize" }, px = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, vx = { class: "text-foreground font-medium" }, gx = { class: "mt-auto flex gap-2 pt-2" }, hx = /* @__PURE__ */ L({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.plan.priceFormatted ?? String(n.plan.price)), i = y(() => !!(n.plan.featured || n.plan.recommended)), d = y(() => {
      const f = n.plan.perks ?? {};
      return Object.entries(f).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: Gy(p.value),
        display: qy(p.value)
      }));
    }), u = y(() => n.plan.extraPerks ?? []);
    return (f, v) => (t(), a("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", Zy, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", Jy, [
          e.plan.recommended ? (t(), a("span", Yy, "Recommended")) : e.plan.featured ? (t(), a("span", Qy, "Featured")) : x("", !0),
          e.plan.trial ? (t(), a("span", Xy, "Trial")) : x("", !0),
          e.plan.active === !1 ? (t(), a("span", ex, "Inactive")) : x("", !0)
        ])) : x("", !0),
        o("h3", tx, c(e.plan.name), 1),
        o("p", nx, [
          o("span", ax, c(s.value), 1),
          o("span", lx, c(k(Ky)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", ox, c(e.plan.shortDescription), 1)) : x("", !0),
        o("p", sx, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", rx, [
        (t(!0), a(z, null, j(d.value, (p) => (t(), a("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", ix, [
            o("span", {
              class: A(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), a("svg", dx, [
                o("path", {
                  d: k(me)("check")
                }, null, 8, ux)
              ])) : (t(), a("svg", cx, [
                o("path", {
                  d: k(me)("x")
                }, null, 8, fx)
              ]))
            ], 2),
            o("span", mx, c(p.label), 1)
          ]),
          p.display ? (t(), a("span", px, c(p.display), 1)) : x("", !0)
        ]))), 128)),
        (t(!0), a(z, null, j(u.value, (p, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", vx, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", gx, [
        E(ce, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: O(() => [...v[2] || (v[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(ce, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: O(() => [...v[3] || (v[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Wy));
  }
}), bx = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, yx = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, xx = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, kx = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, $x = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, V6 = /* @__PURE__ */ L({
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
      class: A(["w-full space-y-6", e.embedded ? "" : k(nt)]),
      "data-slot": "plan-grid"
    }, [
      o("header", bx, [
        o("div", null, [
          e.title ? (t(), a("h1", yx, c(e.title), 1)) : x("", !0),
          e.description ? (t(), a("p", xx, c(e.description), 1)) : x("", !0)
        ]),
        E(ce, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: O(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", kx, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", $x, [
        (t(!0), a(z, null, j(e.plans, (i) => (t(), D(hx, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), wx = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Cx = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Sx = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Mx = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Bx = { class: "space-y-1.5" }, Ax = { class: "space-y-1.5" }, _x = { class: "space-y-1.5" }, zx = { class: "space-y-1.5" }, Px = { class: "space-y-1.5" }, Lx = { class: "flex items-center gap-3 text-sm" }, Ox = { class: "flex items-center gap-3 text-sm" }, jx = { class: "flex items-center gap-3 text-sm" }, Vx = {
  key: 0,
  class: "space-y-1.5"
}, Dx = { class: "flex items-center gap-3 text-sm" }, Tx = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ix = { class: "space-y-1.5" }, Ex = ["value"], Fx = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Nx = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Rx = ["id", "value", "onInput"], Ux = { class: "space-y-2" }, Hx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Kx = ["d"], D6 = /* @__PURE__ */ L({
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
      const m = S ? { ...n(), ...S } : n();
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
    return (S, m) => (t(), a("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : k(nt)]),
      "data-slot": "plan-editor",
      onSubmit: he(C, ["prevent"])
    }, [
      o("header", wx, [
        o("div", null, [
          o("h1", Cx, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          m[13] || (m[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(ce, {
          type: "button",
          variant: "outline",
          onClick: m[0] || (m[0] = (g) => s("cancel"))
        }, {
          default: O(() => [...m[14] || (m[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Sx, [
        o("section", Mx, [
          m[26] || (m[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Bx, [
            E(ze, { for: "plan-name" }, {
              default: O(() => [...m[15] || (m[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": m[1] || (m[1] = (g) => i.name = g),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Ax, [
            E(ze, { for: "plan-short" }, {
              default: O(() => [...m[16] || (m[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": m[2] || (m[2] = (g) => i.shortDescription = g),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", _x, [
            E(ze, { for: "plan-description" }, {
              default: O(() => [...m[17] || (m[17] = [
                R("Plan description", -1)
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
          o("div", zx, [
            E(ze, { for: "plan-days" }, {
              default: O(() => [...m[18] || (m[18] = [
                R("Duration", -1)
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
          o("div", Px, [
            E(ze, { for: "plan-price" }, {
              default: O(() => [...m[20] || (m[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": m[5] || (m[5] = (g) => i.price = Number(g))
            }, null, 8, ["model-value"])
          ]),
          o("label", Lx, [
            E(k(Je), {
              checked: !!i.featured,
              "onUpdate:checked": m[6] || (m[6] = (g) => i.featured = g)
            }, null, 8, ["checked"]),
            m[21] || (m[21] = R(" Featured ", -1))
          ]),
          o("label", Ox, [
            E(k(Je), {
              checked: !!i.recommended,
              "onUpdate:checked": m[7] || (m[7] = (g) => i.recommended = g)
            }, null, 8, ["checked"]),
            m[22] || (m[22] = R(" Recommended ", -1))
          ]),
          o("label", jx, [
            E(k(Je), {
              checked: !!i.trial,
              "onUpdate:checked": m[8] || (m[8] = (g) => i.trial = g)
            }, null, 8, ["checked"]),
            m[23] || (m[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Vx, [
            E(ze, { for: "plan-trial-days" }, {
              default: O(() => [...m[24] || (m[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": m[9] || (m[9] = (g) => i.trialDays = Number(g))
            }, null, 8, ["model-value"])
          ])) : x("", !0),
          o("label", Dx, [
            E(k(Je), {
              checked: i.active !== !1,
              "onUpdate:checked": m[10] || (m[10] = (g) => i.active = g)
            }, null, 8, ["checked"]),
            m[25] || (m[25] = R(" Active ", -1))
          ]),
          E(ce, {
            type: "submit",
            disabled: e.processing
          }, {
            default: O(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Tx, [
          m[33] || (m[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Ix, [
            E(ze, null, {
              default: O(() => [...m[27] || (m[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(tn, {
              modelValue: p.value,
              "onUpdate:modelValue": m[11] || (m[11] = (g) => p.value = g),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(ze, { for: "plan-modules-overview" }, {
              default: O(() => [...m[28] || (m[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(B),
              onInput: m[12] || (m[12] = (g) => f("modules", g.target.value))
            }, null, 40, Ex)
          ]),
          (t(!0), a(z, null, j(e.limits, (g) => (t(), a("div", {
            key: g.key,
            class: "space-y-1.5"
          }, [
            g.kind === "toggle" ? (t(), a("label", Fx, [
              E(k(Je), {
                checked: !!d(g.key, !1),
                "onUpdate:checked": (_) => u(
                  g.key,
                  _,
                  i.perks?.[g.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + c(g.label), 1)
            ])) : (t(), a(z, { key: 1 }, [
              E(ze, {
                for: `plan-limit-${g.key}`
              }, {
                default: O(() => [
                  R(c(g.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              g.hint ? (t(), a("p", Nx, c(g.hint), 1)) : x("", !0),
              E(we, {
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
            E(ze, {
              for: `plan-overview-${g.key}`
            }, {
              default: O(() => [...m[30] || (m[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${g.key}`,
              value: i.perks?.[g.key]?.overview ?? "",
              class: A(B),
              onInput: (_) => f(g.key, _.target.value)
            }, null, 40, Rx)
          ]))), 128)),
          o("div", Ux, [
            m[32] || (m[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(z, null, j(i.extraPerks ?? [], (g, _) => (t(), a("div", {
              key: _,
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
              E(ce, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (T) => w(_)
              }, {
                default: O(() => [
                  (t(), a("svg", Hx, [
                    o("path", {
                      d: k(me)("x")
                    }, null, 8, Kx)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(ce, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: b
            }, {
              default: O(() => [...m[31] || (m[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), qx = ["data-current", "data-recommended"], Gx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, Wx = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, Zx = { class: "text-sm font-semibold" }, Jx = { class: "flex items-baseline gap-1" }, Yx = { class: "text-4xl font-bold tracking-tight tabular-nums" }, Qx = { class: "text-muted-foreground text-sm font-normal" }, Xx = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, e0 = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, t0 = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, n0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, a0 = ["d"], l0 = { class: "text-muted-foreground" }, o0 = {
  key: 3,
  class: "flex-1"
}, s0 = {
  key: 4,
  class: "mt-auto pt-2"
}, T6 = /* @__PURE__ */ L({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.annual && n.plan.annualPrice !== void 0 ? n.plan.annualPriceFormatted ?? String(n.plan.annualPrice) : n.plan.priceFormatted ?? String(n.plan.price)), i = y(() => n.annual && n.plan.annualPrice !== void 0 ? "year" : n.plan.interval ?? "month"), d = y(() => !!n.plan.recommended && !n.plan.current);
    return (u, f) => (t(), a("article", {
      class: A([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), a("span", Gx, " Most popular ")) : e.plan.current ? (t(), a("span", Wx, " Current plan ")) : x("", !0),
      o("header", {
        class: A(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", Zx, c(e.plan.name), 1),
        o("p", Jx, [
          o("span", Yx, c(s.value), 1),
          o("span", Qx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), a("p", Xx, c(e.plan.description), 1)) : x("", !0)
      ], 2),
      e.plan.features?.length ? (t(), a("ul", e0, [
        (t(!0), a(z, null, j(e.plan.features, (v, p) => (t(), a("li", {
          key: p,
          class: "flex items-start gap-2"
        }, [
          o("span", t0, [
            (t(), a("svg", n0, [
              o("path", {
                d: k(me)("check")
              }, null, 8, a0)
            ]))
          ]),
          o("span", l0, c(v), 1)
        ]))), 128))
      ])) : (t(), a("div", o0)),
      e.plan.current ? x("", !0) : (t(), a("footer", s0, [
        E(ce, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: f[0] || (f[0] = (v) => r("choose", e.plan.id))
        }, {
          default: O(() => [
            R(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, qx));
  }
}), r0 = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, i0 = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, d0 = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, u0 = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, c0 = ["d"], f0 = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, m0 = ["aria-pressed"], p0 = ["aria-pressed"], v0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, g0 = ["aria-label"], h0 = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, b0 = ["aria-pressed", "onClick"], y0 = ["aria-label"], x0 = { class: "text-muted-foreground mr-1 text-xs font-medium" }, k0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, $0 = ["data-slot"], w0 = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, C0 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, S0 = { class: "flex items-center gap-2" }, M0 = ["disabled"], B0 = ["disabled"], dn = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(""), i = ft(e, "modelValue"), d = dt({}), u = dt({});
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
      () => n.facets.filter((F) => (F.kind ?? "chips") === "chips")
    ), B = y(() => n.facets.filter((F) => F.kind === "range")), S = y(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), m = K(1);
    pe(
      () => n.items.map((F) => F.key).join(","),
      () => {
        m.value = 1;
      }
    );
    const g = y(() => {
      const F = n.pageSize;
      return !F || F < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / F));
    }), _ = y(() => {
      const F = n.pageSize;
      if (!F || F < 1)
        return n.items;
      const J = (m.value - 1) * F;
      return n.items.slice(J, J + F);
    });
    function T(F) {
      m.value = Math.min(g.value, Math.max(1, F));
    }
    return (F, J) => (t(), a("div", {
      class: A(["flex flex-col gap-4", k(Yn)])
    }, [
      S.value ? (t(), a("div", r0, [
        o("div", i0, [
          e.searchable ? (t(), a("div", d0, [
            (t(), a("svg", u0, [
              o("path", {
                d: k(me)("search")
              }, null, 8, c0)
            ])),
            E(we, {
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
          e.layoutToggle ? (t(), a("div", f0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: J[1] || (J[1] = (N) => i.value = "grid")
            }, " Tiles ", 10, m0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: J[2] || (J[2] = (N) => i.value = "list")
            }, " List ", 10, p0)
          ])) : x("", !0)
        ]),
        M.value.length || B.value.length ? (t(), a("div", v0, [
          (t(!0), a(z, null, j(M.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key
          }, [
            N.label ? (t(), a("span", h0, c(N.label), 1)) : x("", !0),
            (t(!0), a(z, null, j(N.options ?? [], (G) => (t(), a("button", {
              key: G.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[N.key] === G.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[N.key] === G.value ? "true" : "false",
              onClick: (Z) => $(N.key, G.value)
            }, c(G.label), 11, b0))), 128))
          ], 8, g0))), 128)),
          (t(!0), a(z, null, j(B.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key,
            "data-slot": "catalog-range"
          }, [
            o("span", x0, c(N.label ?? N.key), 1),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${N.label ?? N.key} from`,
              "model-value": b(N.key).min,
              "onUpdate:modelValue": (G) => w(N.key, "min", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            J[7] || (J[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            E(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${N.label ?? N.key} to`,
              "model-value": b(N.key).max,
              "onUpdate:modelValue": (G) => w(N.key, "max", String(G))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, y0))), 128))
        ])) : x("", !0)
      ])) : x("", !0),
      e.items.length === 0 ? (t(), a("p", k0, " No matching items. ")) : (t(), a("div", {
        key: 2,
        class: A(i.value === "list" ? "flex flex-col gap-3" : k(nm)),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(z, null, j(_.value, (N) => (t(), D(Hy, {
          key: N.key,
          item: N,
          layout: i.value,
          onSelect: J[3] || (J[3] = (G) => r("select", G)),
          onCart: J[4] || (J[4] = (G) => r("cart", G))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, $0)),
      e.pageSize && g.value > 1 ? (t(), a("div", w0, [
        o("p", C0, " Page " + c(m.value) + " of " + c(g.value), 1),
        o("div", S0, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value <= 1,
            onClick: J[5] || (J[5] = (N) => T(m.value - 1))
          }, " Previous ", 8, M0),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value >= g.value,
            onClick: J[6] || (J[6] = (N) => T(m.value + 1))
          }, " Next ", 8, B0)
        ])
      ])) : x("", !0)
    ], 2));
  }
}), A0 = ["aria-disabled"], _0 = ["disabled"], z0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, P0 = ["d"], L0 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, O0 = ["disabled"], j0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, V0 = ["d"], D0 = /* @__PURE__ */ L({
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
      const f = n.value + u;
      f < e.min || e.max !== null && f > e.max || (n.value = f, u < 0 ? r("decrease", f) : r("increase", f));
    }
    return (u, f) => (t(), a("div", {
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
        (t(), a("svg", z0, [
          o("path", {
            d: k(me)("minus")
          }, null, 8, P0)
        ]))
      ], 8, _0),
      o("span", L0, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (v) => d(1))
      }, [
        (t(), a("svg", j0, [
          o("path", {
            d: k(me)("plus")
          }, null, 8, V0)
        ]))
      ], 8, O0)
    ], 8, A0));
  }
}), T0 = { class: "divide-border flex flex-col divide-y" }, I0 = { class: "min-w-0" }, E0 = { class: "truncate text-sm font-medium" }, F0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, N0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, R0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, U0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, H0 = ["aria-label", "onClick"], K0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, q0 = ["d"], G0 = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", T0, [
      (t(!0), a(z, null, j(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", I0, [
          o("p", E0, c(d.label), 1),
          d.detail ? (t(), a("p", F0, c(d.detail), 1)) : x("", !0)
        ]),
        o("div", N0, [
          e.editable ? (t(), D(D0, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", R0, " ×" + c(d.qty), 1)) : x("", !0),
          d.amount ? (t(), a("span", U0, c(d.amount), 1)) : x("", !0),
          d.status ? (t(), D($e, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : x("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => n("remove", d.key)
          }, [
            (t(), a("svg", K0, [
              o("path", {
                d: k(me)("trash")
              }, null, 8, q0)
            ]))
          ], 8, H0)) : x("", !0)
        ])
      ]))), 128))
    ]));
  }
}), W0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Z0 = { class: "border-b px-4 py-3" }, J0 = { class: "text-sm font-medium" }, Y0 = { class: "flex-1 px-4 py-3" }, Q0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, X0 = { class: "text-foreground block font-medium" }, e2 = { class: "mt-1 block" }, t2 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, n2 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, a2 = { class: "tabular-nums" }, l2 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, o2 = { class: "text-muted-foreground" }, s2 = {
  key: 0,
  class: "tabular-nums"
}, r2 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, i2 = { class: "text-muted-foreground" }, d2 = { class: "tabular-nums" }, u2 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, c2 = { class: "tabular-nums" }, f2 = {
  key: 4,
  class: "pt-1"
}, m2 = /* @__PURE__ */ L({
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
    return (r, s) => (t(), a("aside", W0, [
      o("header", Z0, [
        o("h2", J0, c(e.title), 1)
      ]),
      o("div", Y0, [
        e.items.length === 0 ? (t(), a("p", Q0, [
          o("span", X0, c(e.emptyTitle), 1),
          o("span", e2, c(e.emptyDescription), 1)
        ])) : (t(), D(G0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", t2, [
        e.subtotal ? (t(), a("div", n2, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", a2, c(e.subtotal), 1)
        ])) : x("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", l2, [
          o("span", o2, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", s2, c(e.discount), 1)) : x("", !0),
          q(r.$slots, "discount")
        ])) : x("", !0),
        e.tax ? (t(), a("div", r2, [
          o("span", i2, c(e.taxLabel), 1),
          o("span", d2, c(e.tax), 1)
        ])) : x("", !0),
        e.total ? (t(), a("div", u2, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", c2, c(e.total), 1)
        ])) : x("", !0),
        r.$slots.pay ? (t(), a("div", f2, [
          q(r.$slots, "pay")
        ])) : x("", !0)
      ])) : x("", !0)
    ]));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function p2(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function v2(e, l) {
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
    if (!v2(p2(e, r), s))
      return !1;
  return !0;
}
function g2(e, l) {
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
const h2 = { class: "flex flex-col gap-6" }, b2 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, y2 = { class: "text-sm font-semibold" }, x2 = { class: "flex flex-wrap items-center gap-1.5" }, k2 = ["aria-pressed", "onClick"], $2 = { class: "text-sm font-semibold" }, w2 = { class: "flex flex-wrap items-center gap-1.5" }, C2 = { key: 0 }, la = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(""), i = dt({}), d = dt({}), u = y(
      () => n.facets.filter((g) => (g.kind ?? "chips") === "chips")
    ), f = y(() => n.facets.filter((g) => g.kind === "range"));
    function v(g) {
      return g == null ? "" : String(g);
    }
    function p() {
      s.value = n.applied.query ?? "";
      for (const g of Object.keys(i))
        delete i[g];
      for (const [g, _] of Object.entries(n.applied.selected ?? {}))
        i[g] = _;
      for (const g of Object.keys(d))
        delete d[g];
      for (const [g, _] of Object.entries(n.applied.ranges ?? {}))
        d[g] = { min: v(_.min), max: v(_.max) };
    }
    pe(
      () => n.open,
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
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: $()
      };
    }
    const w = y(() => {
      let g = n.hideSearch || s.value.trim() === "" ? 0 : 1;
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
        n.hideSearch ? { ...Ee(), query: n.applied.query } : Ee()
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
        E(ce, {
          variant: "outline",
          size: "sm",
          onClick: _[1] || (_[1] = (T) => r("close"))
        }, {
          default: O(() => [..._[5] || (_[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        E(ce, {
          size: "sm",
          onClick: S
        }, {
          default: O(() => [
            _[6] || (_[6] = R(" Apply", -1)),
            w.value ? (t(), a("span", C2, " (" + c(w.value) + ")", 1)) : x("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", h2, [
          e.hideSearch ? x("", !0) : (t(), a("label", b2, [
            _[3] || (_[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": _[0] || (_[0] = (T) => s.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(z, null, j(u.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", y2, c(T.label ?? T.key), 1),
            o("div", x2, [
              (t(!0), a(z, null, j(T.options ?? [], (F) => (t(), a("button", {
                key: F.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[T.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[T.key] === F.value ? "true" : "false",
                onClick: (J) => C(T.key, F.value)
              }, c(F.label), 11, k2))), 128))
            ])
          ]))), 128)),
          (t(!0), a(z, null, j(f.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", $2, c(T.label ?? T.key), 1),
            o("div", w2, [
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${T.label ?? T.key} from`,
                "model-value": M(T.key).min,
                "onUpdate:modelValue": (F) => B(T.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              _[4] || (_[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              E(we, {
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
}), S2 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, M2 = { class: "flex flex-col gap-4" }, B2 = { class: "flex flex-wrap items-start justify-between gap-3" }, A2 = { class: "flex items-center gap-2" }, _2 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, I6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(Ee()), i = K(!1), d = ft(e, "cart"), u = K(!1), f = y(
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
    function $(N, G, Z) {
      return {
        ...N,
        qty: G,
        amount: n.formatMoney(Z * G)
      };
    }
    function b(N) {
      const G = g2(n.items, N);
      G && w(G.key);
    }
    function w(N) {
      const G = n.items.find((H) => H.key === N);
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
          amount: n.formatMoney(Z)
        }
      ];
    }
    function C(N, G) {
      const Z = n.items.find((H) => H.key === N), W = h(Z);
      d.value = d.value.map((H) => H.key === N ? $(H, G, W) : H);
    }
    function M(N) {
      d.value = d.value.filter((G) => G.key !== N);
    }
    const B = y(
      () => d.value.reduce((N, G) => {
        const Z = n.items.find((W) => W.key === G.key);
        return N + h(Z) * Number(G.qty ?? 1);
      }, 0)
    ), S = y(
      () => n.discountRate > 0 ? Math.round(B.value * n.discountRate) : 0
    ), m = y(
      () => Math.round((B.value - S.value) * n.taxRate)
    ), g = y(() => d.value.length ? n.formatMoney(B.value) : null), _ = y(
      () => d.value.length && S.value > 0 ? `−${n.formatMoney(S.value)}` : null
    ), T = y(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(m.value) : null
    ), F = y(
      () => d.value.length ? n.formatMoney(B.value - S.value + m.value) : null
    );
    function J() {
      u.value = !0, r("pay", d.value);
    }
    return (N, G) => (t(), a(z, null, [
      o("div", S2, [
        o("section", M2, [
          o("div", B2, [
            E(Ie, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", A2, [
              k(Mt)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: G[0] || (G[0] = (Z) => s.value = {
                  ...k(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : x("", !0),
              e.facets.length > 0 ? (t(), a("button", {
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
                G[6] || (G[6] = R(" Filters ", -1)),
                k(Mt)(s.value) ? (t(), a("span", _2, " on ")) : x("", !0)
              ])) : x("", !0)
            ])
          ]),
          E(dn, {
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
        E(m2, {
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
              E(ce, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: J
              }, {
                default: O(() => [
                  R(c(u.value ? "Paid" : "Pay"), 1)
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
        onClose: G[3] || (G[3] = (Z) => i.value = !1),
        onApply: p,
        onReset: G[4] || (G[4] = (Z) => s.value = { ...k(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), z2 = {
  key: 0,
  class: "flex flex-col gap-5"
}, P2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, L2 = ["src", "alt"], O2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, j2 = ["src"], V2 = { class: "flex items-start justify-between gap-3" }, D2 = { class: "text-lg font-semibold tabular-nums" }, T2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, I2 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, E2 = { class: "grid grid-cols-2 gap-3" }, F2 = { class: "flex flex-col gap-2" }, N2 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, E6 = /* @__PURE__ */ L({
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
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, w) => ({
        label: b,
        value: Math.max(0, Math.round(p + Math.sin(w + h) * p * 0.18))
      }));
    }
    const d = y(() => n.item?.kind === "unit"), u = y(() => {
      const p = n.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), f = y(() => {
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
        e.item ? (t(), a("div", z2, [
          o("div", P2, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, L2)) : x("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", O2, [
            (t(!0), a(z, null, j(e.item.images, ($, b) => (t(), a("img", {
              key: b,
              src: $,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, j2))), 128))
          ])) : x("", !0),
          o("div", V2, [
            o("div", null, [
              o("p", D2, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", T2, c(e.item.stock) + " in stock ", 1)) : x("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", I2, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("div", E2, [
            E(St, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            E(St, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", F2, [
            o("p", N2, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(zt, {
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
}), R2 = { class: "flex flex-col gap-10" }, U2 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, H2 = { class: "flex flex-col gap-3" }, K2 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, q2 = ["src", "alt"], G2 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, W2 = ["aria-label", "aria-pressed", "onClick"], Z2 = ["src"], J2 = { class: "flex flex-col gap-5" }, Y2 = { class: "flex flex-wrap items-start justify-between gap-3" }, Q2 = { class: "min-w-0" }, X2 = { class: "text-2xl font-semibold tracking-tight" }, ek = { class: "text-muted-foreground mt-1 text-sm" }, tk = { class: "text-2xl font-semibold tabular-nums" }, nk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, ak = { class: "grid grid-cols-2 gap-3 text-sm" }, lk = {
  key: 0,
  class: "rounded-lg border p-3"
}, ok = { class: "mt-1 font-medium" }, sk = { class: "rounded-lg border p-3" }, rk = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, ik = { class: "mt-1 font-medium" }, dk = { class: "flex flex-col gap-4" }, uk = { class: "grid gap-4 sm:grid-cols-2" }, ck = { class: "bg-card rounded-lg border p-4" }, fk = { class: "mb-3 text-sm font-medium" }, mk = /* @__PURE__ */ L({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
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
    const d = y(() => n.item.kind === "unit"), u = y(() => {
      const b = [n.item.image, ...n.item.images ?? []].filter(
        (w) => typeof w == "string" && w !== ""
      );
      return [...new Set(b)];
    }), f = K(0), v = y(() => {
      const b = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(n.item.key) % 7);
    }), p = y(() => {
      const b = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(n.item.key) % 5 + 1);
    }), h = y(() => d.value ? p.value : v.value), $ = y(() => !d.value && n.item.status !== "out-of-stock");
    return (b, w) => (t(), a("div", R2, [
      o("div", U2, [
        o("div", H2, [
          o("div", K2, [
            u.value[f.value] ? (t(), a("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, q2)) : x("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", G2, [
            (t(!0), a(z, null, j(u.value, (C, M) => (t(), a("button", {
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
              }, null, 8, Z2)
            ], 10, W2))), 128))
          ])) : x("", !0)
        ]),
        o("div", J2, [
          o("div", Y2, [
            o("div", Q2, [
              o("h1", X2, c(e.item.label), 1),
              o("p", ek, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          o("p", tk, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", nk, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("dl", ak, [
            e.item.sku ? (t(), a("div", lk, [
              w[1] || (w[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", ok, c(e.item.sku), 1)
            ])) : x("", !0),
            o("div", sk, [
              o("dt", rk, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", ik, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          $.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: w[0] || (w[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")) : x("", !0)
        ])
      ]),
      o("section", dk, [
        w[2] || (w[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", uk, [
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
        o("div", ck, [
          o("p", fk, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(Kh, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), pk = ["href"], F6 = /* @__PURE__ */ L({
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
        R(" " + c(e.backLabel), 1)
      ], 8, pk),
      E(mk, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), vk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, gk = ["aria-selected", "onClick"], hk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, bk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, yk = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, xk = ["aria-pressed"], kk = ["aria-pressed"], N6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(n.tabs[0]?.key ?? ""), i = ft(e, "layout"), d = K({}), u = K(!1);
    pe(
      () => n.tabs.map((C) => C.key).join(","),
      (C) => {
        C.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function f(C) {
      return d.value[C] ?? Ee();
    }
    const v = y(
      () => n.tabs.find((C) => C.key === s.value) ?? n.tabs[0] ?? null
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
    return (C, M) => (t(), a(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : k(nt)])
      }, [
        E(Ie, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", vk, [
          (t(!0), a(z, null, j(e.tabs, (B) => (t(), a("button", {
            key: B.key,
            type: "button",
            class: A(["px-3 py-1.5 text-sm transition-colors", s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (S) => s.value = B.key
          }, c(B.label), 11, gk))), 128))
        ])) : x("", !0),
        o("div", hk, [
          E(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (B) => $(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(Mt)(p.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: b
          }, " Clear ")) : x("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), a("button", {
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
            M[9] || (M[9] = R(" Filters ", -1)),
            k(Mt)(p.value) ? (t(), a("span", bk, " on ")) : x("", !0)
          ])) : x("", !0),
          o("div", yk, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, xk),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (B) => i.value = "list")
            }, " List ", 10, kk)
          ])
        ]),
        E(dn, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (B) => r("select", B)),
          onCart: M[6] || (M[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(la, {
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
}), $k = { class: "flex flex-col gap-4" }, wk = { class: "flex flex-col gap-4" }, R6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(Ee()), i = y(
      () => n.cards.filter((d) => un(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : k(nt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", $k, [
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
          onFilter: u[0] || (u[0] = (f) => s.value = f),
          onSelect: u[1] || (u[1] = (f) => r("select", f)),
          onCart: u[2] || (u[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", wk, [
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
          "cell:status": O(({ value: f }) => [
            E($e, {
              status: String(f)
            }, {
              default: O(() => [
                R(c(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), Ck = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Sk = { class: "text-sm font-medium" }, Mk = ["width", "height", "aria-label"], Bk = { class: "flex items-center gap-2" }, Ak = /* @__PURE__ */ L({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(null), i = K(!1);
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
      n.disabled || (i.value = !0, d = f(C), s.value?.setPointerCapture(C.pointerId));
    }
    function p(C) {
      if (!i.value || n.disabled)
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
    }), (C, M) => (t(), a("div", Ck, [
      o("p", Sk, c(e.label), 1),
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
      }, null, 42, Mk),
      o("div", Bk, [
        E(ce, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: $
        }, {
          default: O(() => [...M[0] || (M[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(ce, {
          size: "sm",
          disabled: e.disabled,
          onClick: b
        }, {
          default: O(() => [...M[1] || (M[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), _k = { class: "grid gap-8 lg:grid-cols-2" }, zk = { class: "flex flex-col gap-3" }, Pk = { class: "text-muted-foreground text-xs font-normal" }, Lk = {
  key: 0,
  class: "flex flex-col gap-3"
}, Ok = { class: "flex flex-wrap gap-3" }, jk = ["onClick"], Vk = ["src", "alt"], Dk = {
  key: 1,
  class: "flex flex-col gap-3"
}, Tk = { class: "flex flex-wrap gap-3" }, Ik = ["onClick"], Ek = ["src", "alt"], Fk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Nk = { class: "flex flex-wrap items-center gap-2" }, Rk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Uk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Hk = { class: "flex flex-col gap-2" }, Kk = ["src"], qk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Gk = ["src"], U6 = /* @__PURE__ */ L({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = K([]), r = K([]), s = K(null), i = K(null), d = K(null), u = K(l.documents[0]?.key ?? "");
    function f(C) {
      try {
        const M = localStorage.getItem(C), B = M ? JSON.parse(M) : [];
        return Array.isArray(B) ? B : [];
      } catch {
        return [];
      }
    }
    be(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), pe(
      n,
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
        name: `Signature ${n.value.length + 1}`,
        dataUrl: C
      };
      n.value = [M, ...n.value].slice(0, 8), s.value = M.id;
    }
    async function p(C, M) {
      await um(C), M(40);
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
      () => n.value.find((C) => C.id === s.value)?.dataUrl ?? null
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
    return (C, M) => (t(), a("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : k(nt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", _k, [
        E(Ak, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", zk, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", Pk, c(k(Qn)), 1),
          E(En, {
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = (B) => d.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          E(ce, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: O(() => [...M[1] || (M[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Lk, [
        E(Ie, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Ok, [
          (t(!0), a(z, null, j(n.value, (B) => (t(), a("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (S) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Vk)
          ], 10, jk))), 128))
        ])
      ])) : x("", !0),
      r.value.length ? (t(), a("section", Dk, [
        E(Ie, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", Tk, [
          (t(!0), a(z, null, j(r.value, (B) => (t(), a("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (S) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Ek)
          ], 10, Ik))), 128))
        ])
      ])) : x("", !0),
      e.documents.length ? (t(), a("section", Fk, [
        o("div", Nk, [
          (t(!0), a(z, null, j(e.documents, (B) => (t(), D(ce, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (S) => u.value = B.key
          }, {
            default: O(() => [
              R(c(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Rk, [
          E(lh, {
            document: w.value
          }, null, 8, ["document"]),
          o("div", Uk, [
            o("div", Hk, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              $.value ? (t(), a("img", {
                key: 0,
                src: $.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Kk)) : (t(), a("p", qk, "Draw and save a signature"))
            ]),
            b.value ? (t(), a("img", {
              key: 0,
              src: b.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Gk)) : x("", !0)
          ])
        ])
      ])) : x("", !0)
    ], 2));
  }
}), H6 = "panel.dashboard.hiddenWidgets", Wk = /* @__PURE__ */ Symbol("dashboardHide"), Zk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, K6 = /* @__PURE__ */ L({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = xt(Wk, null), r = K(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = K(!1);
    be(() => {
      if (n?.register("shortcuts", "Shortcuts"), !l.storageKey) {
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
    const i = y(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? x("", !0) : (t(), a("div", Zk, [
      E(Gb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Jk = { class: "flex flex-col gap-3" }, Yk = ["data-slot"], Qk = ["aria-pressed", "aria-label", "title"], Xk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, e$ = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, t$ = { class: "flex h-8 items-center" }, n$ = ["aria-label", "title", "onClick"], a$ = ["aria-label", "title", "onClick"], l$ = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, o$ = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, q6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = K(n.maskable ? !n.hidden : !0), i = K(/* @__PURE__ */ new Set());
    function d(S) {
      return n.maskable && (S.sensitive ?? !0);
    }
    function u(S) {
      return d(S) && !s.value && !i.value.has(S.key);
    }
    const f = y(() => n.segments.some(u)), v = y(() => n.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => p[n.columns] ?? p[4]), $ = y(() => {
      const S = n.columns ?? 4, m = Math.floor(n.segments.length / S) * S;
      return n.segments.slice(0, m);
    }), b = y(() => {
      const S = n.columns ?? 4, m = Math.floor(n.segments.length / S) * S;
      return n.segments.slice(m);
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
        for (const g of n.segments)
          g.key !== S.key && d(g) && m.add(g.key);
      }
      i.value = m, r("toggle", f.value);
    }
    function B(S) {
      return typeof S == "number" ? new Intl.NumberFormat().format(S) : S;
    }
    return (S, m) => (t(), a("div", Jk, [
      (t(!0), a(z, null, j(w.value, (g) => (t(), a("div", {
        key: g.key,
        class: A(["relative shrink-0", g.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": g.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && g.key === w.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: C
        }, [
          (t(), a("svg", Xk, [
            f.value ? (t(), a(z, { key: 0 }, [
              m[0] || (m[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              m[1] || (m[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              m[2] || (m[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              m[3] || (m[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(z, { key: 1 }, [
              m[4] || (m[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              m[5] || (m[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Qk)) : x("", !0),
        o("div", {
          class: A(["grid", [g.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(z, null, j(g.segments, (_) => (t(), a("div", {
            key: _.key,
            class: A(["bg-card flex flex-col gap-2 p-4", g.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", e$, c(_.label), 1),
            o("div", t$, [
              e.loading ? (t(), D(Pe, {
                key: 0,
                variant: "number"
              })) : u(_) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${_.label} hidden. Show it.`,
                title: `Show ${_.label}`,
                onClick: (T) => M(_)
              }, [
                (t(), a(z, null, j(5, (T) => o("span", {
                  key: T,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, n$)) : d(_) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${_.label}, ${B(_.value)}. Hide it.`,
                title: `Hide ${_.label}`,
                onClick: (T) => M(_)
              }, c(B(_.value)), 9, a$)) : (t(), a("span", l$, c(B(_.value)), 1)),
              _.trend && !e.loading && !u(_) ? (t(), D(aa, {
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
            _.caption || _.comparison && _.trend ? (t(), a("p", o$, c(_.caption ?? _.comparison), 1)) : x("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, Yk))), 128))
    ]));
  }
}), s$ = ["aria-label"], r$ = { class: "flex items-center justify-between gap-3" }, i$ = ["aria-valuenow", "aria-label"], d$ = { class: "flex items-center gap-3" }, u$ = { class: "min-w-0 flex-1 text-sm" }, c$ = { class: "font-medium" }, f$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 block text-xs sm:mt-0 sm:inline sm:before:content-[':_']"
}, m$ = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, p$ = { class: "flex items-center justify-between gap-2" }, v$ = { class: "text-sm font-semibold" }, g$ = { class: "flex items-center gap-3" }, h$ = ["href"], b$ = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, y$ = { class: "flex min-w-0 flex-col gap-0.5" }, x$ = { class: "text-sm font-medium" }, k$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, $$ = {
  key: 1,
  class: "flex flex-col gap-2"
}, w$ = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, C$ = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, S$ = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, G6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = y(() => n.items.find((b) => !b.done) ?? null), i = y(() => n.items.filter((b) => b.key !== s.value?.key)), d = y(() => n.items.length), u = y(() => n.items.filter((b) => b.done).length), f = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), v = y(() => {
      const b = n.linkComponent;
      return typeof b == "string" ? b : va(b);
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
    return (b, w) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "flex flex-col gap-2.5 rounded-md border bg-card p-3",
      "aria-label": e.heading
    }, [
      o("div", r$, [
        o("div", {
          class: "flex flex-1 items-center gap-1",
          role: "progressbar",
          "aria-valuenow": f.value,
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-label": `${e.heading}, ${f.value} percent complete`
        }, [
          (t(!0), a(z, null, j(e.items, (C, M) => (t(), a("span", {
            key: C.key,
            class: A(["h-1.5 flex-1 rounded-sm transition-colors duration-300", M < u.value ? "bg-amber-500" : "bg-muted"])
          }, null, 2))), 128))
        ], 8, i$),
        e.skipLabel ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: w[0] || (w[0] = (C) => r("skip"))
        }, c(e.skipLabel), 1)) : x("", !0)
      ]),
      o("div", d$, [
        o("p", u$, [
          o("span", c$, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", f$, c(s.value.detail), 1)) : x("", !0)
        ]),
        s.value?.href ? (t(), D(Ce(v.value), {
          key: 0,
          href: s.value.href,
          class: A(k(h))
        }, {
          default: O(() => [
            R(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : x("", !0)
      ])
    ], 8, s$)) : e.items.length ? (t(), a("section", m$, [
      o("div", p$, [
        o("h2", v$, c(e.heading), 1),
        o("div", g$, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: w[1] || (w[1] = (C) => r("skip"))
          }, c(e.skipLabel), 1)) : x("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, h$)) : x("", !0)
        ])
      ]),
      s.value ? (t(), a("div", b$, [
        w[2] || (w[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", y$, [
          o("p", x$, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", k$, c(s.value.detail), 1)) : x("", !0),
          s.value.href ? (t(), D(Ce(v.value), {
            key: 1,
            href: s.value.href,
            class: A(k(p))
          }, {
            default: O(() => [
              R(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : x("", !0)
        ])
      ])) : x("", !0),
      i.value.length ? (t(), a("ul", $$, [
        (t(!0), a(z, null, j(i.value, (C) => (t(), a("li", {
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
            C.done ? (t(), a("svg", w$, [...w[3] || (w[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : x("", !0)
          ], 2),
          o("div", C$, [
            o("p", {
              class: A(["text-sm", C.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(C.title), 3),
            !C.done && C.detail ? (t(), a("p", S$, c(C.detail), 1)) : x("", !0)
          ]),
          !C.done && C.href ? (t(), D(Ce(v.value), {
            key: 0,
            href: C.href,
            class: A(k($))
          }, {
            default: O(() => [
              R(c(C.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : x("", !0)
        ]))), 128))
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), M$ = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, B$ = { class: "hidden items-center gap-2 md:flex" }, A$ = { class: "md:hidden" }, _$ = { class: "border-b px-4 py-3" }, z$ = { class: "text-muted-foreground text-xs font-normal" }, P$ = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, L$ = { class: "font-medium tabular-nums" }, O$ = { class: "ml-auto flex items-center gap-3" }, W6 = /* @__PURE__ */ L({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = K(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", M$, [
      o("div", B$, [
        q(i.$slots, "actions")
      ]),
      o("div", A$, [
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
                o("div", _$, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", z$, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", P$, [
                  q(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", L$, [
        e.allMatching ? (t(), a(z, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(z, { key: 1 }, [
          R(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", O$, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => n("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : x("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), j$ = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, V$ = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, D$ = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, T$ = ["value"], I$ = ["value"], E$ = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, F$ = ["disabled"], N$ = ["disabled"], R$ = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, U$ = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, H$ = ["disabled"], Z6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = y(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = y(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = y(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (f, v) => (t(), a("div", j$, [
      o("p", V$, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(z, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : x("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", D$, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), a(z, null, j(e.perPageOptions, (p) => (t(), a("option", {
            key: p,
            value: p
          }, c(p), 9, I$))), 128))
        ], 40, T$)
      ])) : x("", !0),
      o("nav", E$, [
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
        ])], 8, F$),
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
        ])], 8, N$),
        o("span", R$, c(e.page), 1),
        u.value !== null ? (t(), a("span", U$, " of " + c(s(u.value)), 1)) : x("", !0),
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
        ])], 8, H$)
      ])
    ]));
  }
}), K$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, q$ = ["aria-current"], G$ = ["title"], W$ = ["aria-current", "onClick"], Z$ = ["title"], J$ = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", K$, [
      o("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, G$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, q$),
      (t(!0), a(z, null, j(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        R(c(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, Z$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, W$))), 128))
    ]));
  }
}), J6 = /* @__PURE__ */ Bt(J$, [["__scopeId", "data-v-3967c945"]]), Y$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Q$ = { class: "grid gap-2" }, X$ = {
  key: 0,
  class: "text-destructive text-sm"
}, ew = { class: "flex gap-2" }, Y6 = /* @__PURE__ */ L({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = K((() => {
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
    })()), i = K(!1), d = ga(null), u = y(() => d.value?.isLoading.value ?? !1), f = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
    be(async () => {
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
      o("div", Q$, [
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
      f.value ? (t(), a("p", X$, c(f.value), 1)) : x("", !0),
      o("div", ew, [
        E(ce, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: O(() => [
            R(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(ce, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: O(() => [...b[5] || (b[5] = [
            R(" Cancel ", -1)
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
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", Y$, " Passkeys are not supported in this browser. "));
  }
}), tw = { class: "pk-form-stack" }, nw = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, Q6 = /* @__PURE__ */ L({
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
      run(f, v) {
        return n.createOption ? n.createOption(f, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => n.nodes.length > 0), i = y(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => n.errors._conflict);
    function u(f) {
      if (n.upload)
        return (v, p) => n.upload(f, v, p);
    }
    return (f, v) => (t(), a("div", tw, [
      d.value ? (t(), a("p", nw, c(d.value), 1)) : x("", !0),
      s.value ? (t(!0), a(z, { key: 1 }, j(e.nodes, (p, h) => (t(), D(Nn, {
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
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(z, null, j(e.fields, (p) => (t(), D(Ge, {
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
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), aw = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, lw = ["disabled"], ow = ["disabled"], sw = ["disabled"], rw = ["disabled"], X6 = /* @__PURE__ */ L({
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
    function f(v, p) {
      const h = v;
      Object.assign(h.style, d, {
        transition: "opacity 150ms ease-in, transform 150ms ease-in"
      }), requestAnimationFrame(() => {
        Object.assign(h.style, i);
      }), setTimeout(p, 150);
    }
    return (v, p) => (t(), D(ct, {
      to: n.value,
      disabled: r.value
    }, [
      E(Xe, {
        css: !1,
        onEnter: u,
        onLeave: f
      }, {
        default: O(() => [
          e.show ? (t(), a("div", {
            key: 0,
            class: A(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: A([
                k(fo),
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
              o("span", aw, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[0] || (p[0] = (h) => v.$emit("discard"))
              }, c(e.discardLabel), 9, lw)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[1] || (p[1] = (h) => v.$emit("cancel"))
              }, c(e.cancelLabel), 9, ow),
              e.extraLabel ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: p[2] || (p[2] = (h) => v.$emit("extra"))
              }, c(e.extraLabel), 9, sw)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: p[3] || (p[3] = (h) => v.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, rw)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function eS(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = K(Dt(e.value)), s = y(() => Dt(e.value) !== r.value);
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
function tS(e, l) {
  gt.set(e, l);
}
function iw(e) {
  return gt.get(e);
}
function nS(e) {
  return gt.has(e);
}
function dw() {
  return [...gt.keys()].sort();
}
function aS() {
  gt.clear();
}
const uw = {
  key: 0,
  class: "flex flex-col gap-1"
}, cw = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, fw = { class: "text-foreground text-sm font-medium" }, mw = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, pw = {
  key: 5,
  class: "max-w-full font-normal"
}, vw = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, gw = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, hw = {
  key: 6,
  class: "font-normal"
}, bw = {
  key: 0,
  class: "divide-y rounded-md border"
}, yw = { class: "text-muted-foreground truncate font-medium" }, xw = { class: "text-foreground col-span-2 break-words" }, kw = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, $w = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, ww = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Cw = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, Sw = ["href"], Mw = { class: "flex min-w-0 items-start gap-2.5" }, Bw = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Aw = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, _w = ["d"], zw = { class: "min-w-0" }, Pw = { class: "flex flex-wrap items-center gap-2" }, Lw = { class: "text-sm font-semibold" }, Ow = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, jw = ["onClick"], lS = /* @__PURE__ */ L({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(!n.node.collapsed), i = K(0), d = y(() => n.depth === 0), u = y(() => {
      const M = n.node.columns ?? (n.node.component === "section" ? 2 : 1);
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
    }, v = y(() => n.node.key ? n.record[n.node.key] : null), p = y(() => {
      const M = v.value;
      return M == null || M === "";
    }), h = y(() => {
      if (p.value)
        return "None";
      const M = Number(v.value);
      if (Number.isNaN(M))
        return "None";
      const B = n.node.divideBy ?? 100, S = M / B, m = n.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: m }).format(S);
      } catch {
        return `${m} ${S.toFixed(2)}`;
      }
    }), $ = y(() => {
      if (p.value)
        return "None";
      const M = v.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[n.node.type]);
      if (n.node.type === "money")
        return h.value;
      let B = String(M);
      return n.node.transform === "upper" && (B = B.toUpperCase()), n.node.transform === "lower" && (B = B.toLowerCase()), [n.node.prefix, B, n.node.suffix].filter(Boolean).join(" ");
    }), b = y(() => {
      const M = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), B = n.node.colors?.[M] ?? n.node.defaultColor ?? "neutral";
      return ln[B] ?? "outline";
    }), w = y(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      return M ? iw(M) : void 0;
    }), C = y(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      if (!M)
        return "ViewEntry has no view name.";
      const B = dw(), S = B.length > 0 ? B.join(", ") : "(none)";
      return `No entry view for [${M}]; registered: ${S}`;
    });
    return (M, B) => {
      const S = Wt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", uw, [
        o("dt", cw, c(e.node.label), 1),
        o("dd", fw, [
          e.node.type === "badge" && k(Lu)(v.value) ? (t(), D(We, {
            key: 0,
            variant: b.value,
            class: "capitalize"
          }, {
            default: O(() => [
              R(c(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", mw, "None")) : e.node.type === "icon" ? (t(), D(ou, {
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
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", pw, [
            e.node.language ? (t(), a("p", vw, c(e.node.language), 1)) : x("", !0),
            o("pre", gw, [
              o("code", null, c(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", hw, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), a("dl", bw, [
              (t(!0), a(z, null, j(v.value, (m, g) => (t(), a("div", {
                key: g,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", yw, c(g), 1),
                o("dd", xw, c(m), 1)
              ]))), 128))
            ])) : (t(), a("span", kw, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", $w, [
            (t(!0), a(z, null, j(Array.isArray(v.value) ? v.value : [], (m, g) => (t(), a("div", {
              key: g,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(z, null, j(e.node.entries ?? [], (_, T) => (t(), D(S, {
                key: T,
                node: _,
                record: m,
                depth: e.depth + 1,
                onAction: B[0] || (B[0] = (F) => r("action", F))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), a("span", ww, "None")) : x("", !0)
          ])) : e.node.type === "money" ? (t(), a("span", {
            key: 8,
            class: A(p.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && w.value ? (t(), D(Ce(w.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: v.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), a("p", Cw, c(C.value), 1)) : e.node.url && !p.value ? (t(), a("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c($.value), 9, Sw)) : (t(), a("span", {
            key: 12,
            class: A([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c($.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: B[1] || (B[1] = (m) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : x("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
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
          o("div", Mw, [
            e.node.icon ? (t(), a("div", Bw, [
              (t(), a("svg", Aw, [
                o("path", {
                  d: k(me)(e.node.icon)
                }, null, 8, _w)
              ]))
            ])) : x("", !0),
            o("div", zw, [
              o("div", Pw, [
                o("h3", Lw, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : x("", !0)
              ]),
              e.node.description ? (t(), a("p", Ow, c(e.node.description), 1)) : x("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (m, g) => (t(), D(S, {
            key: g,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: B[3] || (B[3] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(z, null, j(e.node.children ?? [], (m, g) => (t(), D(S, {
          key: g,
          node: m,
          record: e.record,
          depth: e.depth + 1,
          onAction: B[4] || (B[4] = (_) => r("action", _))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: A(
          d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : ""
        )
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(z, null, j(e.node.children ?? [], (m, g) => (t(), a("button", {
            key: g,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === g ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (_) => i.value = g
          }, c(m.label), 11, jw))), 128))
        ], 2),
        (t(!0), a(z, null, j(e.node.children ?? [], (m, g) => ge((t(), a("div", {
          key: g,
          class: A(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(z, null, j(m.children ?? [], (_, T) => (t(), D(S, {
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
}), Vw = { class: "text-muted-foreground text-sm font-normal" }, Dw = { class: "flex items-start gap-3" }, Tw = { class: "min-w-0 flex-1" }, Iw = { class: "flex flex-wrap items-center gap-2" }, Ew = { class: "truncate text-sm font-medium" }, Fw = { class: "text-muted-foreground mt-0.5 text-xs" }, Nw = { class: "text-muted-foreground text-xs font-normal" }, Rw = { class: "mt-auto flex items-center gap-2" }, Uw = /* @__PURE__ */ L({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = y(() => n.gateways.filter((i) => i.connected).length);
    return (i, d) => (t(), a("div", {
      class: A(["flex flex-col gap-4", k(Yn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", Vw, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(k(tm))
      }, [
        (t(!0), a(z, null, j(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", Dw, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: ie({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", Tw, [
              o("div", Iw, [
                o("h3", Ew, c(u.label), 1),
                E($e, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: O(() => [
                    R(c(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D($e, {
                  key: 0,
                  status: "offered"
                }, {
                  default: O(() => [...d[0] || (d[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D($e, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: O(() => [...d[1] || (d[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...d[2] || (d[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.connected && u.mode ? (t(), D($e, {
                  key: 3,
                  status: u.mode
                }, {
                  default: O(() => [
                    R(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : x("", !0)
              ]),
              o("p", Fw, c(u.caption), 1)
            ])
          ]),
          o("p", Nw, c(u.methods.join(" · ")), 1),
          o("div", Rw, [
            E(ce, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: O(() => [...d[3] || (d[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(ce, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", u.key)
            }, {
              default: O(() => [
                R(c(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), Hw = { class: "flex flex-col gap-6" }, Kw = { class: "relative" }, qw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Gw = ["d"], Ww = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Zw = {
  key: 0,
  class: "flex flex-col gap-4"
}, Jw = { class: "flex flex-wrap items-center gap-2" }, Yw = { class: "text-muted-foreground text-sm font-normal" }, Qw = { class: "flex flex-col gap-1 text-sm" }, Xw = ["value"], e4 = {
  key: 0,
  class: "flex flex-col gap-2"
}, t4 = { class: "flex flex-wrap items-center gap-2" }, n4 = {
  key: 1,
  class: "flex items-center gap-2"
}, oS = /* @__PURE__ */ L({
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
    const l = ft(e, "gateways"), n = K(null), r = K(""), s = y(
      () => l.value.find((b) => b.key === n.value) ?? null
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
      n.value = b;
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
      const w = n.value;
      !w || !l.value.find((M) => M.key === w)?.connected || u(w, { mode: b });
    }
    return (b, w) => (t(), a(z, null, [
      o("div", Hw, [
        E(Ie, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", Kw, [
          (t(), a("svg", qw, [
            o("path", {
              d: k(me)("search")
            }, null, 8, Gw)
          ])),
          E(we, {
            modelValue: r.value,
            "onUpdate:modelValue": w[0] || (w[0] = (C) => r.value = C),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(Uw, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), a("p", Ww, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      E(At, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: w[8] || (w[8] = (C) => n.value = null)
      }, {
        footer: O(() => [
          E(ce, {
            variant: "outline",
            size: "sm",
            onClick: w[6] || (w[6] = (C) => n.value = null)
          }, {
            default: O(() => [...w[21] || (w[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(ce, {
            key: 0,
            size: "sm",
            onClick: w[7] || (w[7] = (C) => v(s.value.key))
          }, {
            default: O(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : x("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), a("div", Zw, [
            o("div", Jw, [
              E($e, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: O(() => [
                  R(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D($e, {
                key: 0,
                status: "offered"
              }, {
                default: O(() => [...w[9] || (w[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D($e, {
                key: 1,
                status: "disabled"
              }, {
                default: O(() => [...w[10] || (w[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.isDefault ? (t(), D($e, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...w[11] || (w[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.connected && s.value.mode ? (t(), D($e, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  R(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : x("", !0)
            ]),
            o("p", Yw, c(s.value.caption), 1),
            o("label", Qw, [
              w[12] || (w[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Xw)
            ]),
            w[20] || (w[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", e4, [
              w[16] || (w[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              w[17] || (w[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", t4, [
                E(ce, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: w[1] || (w[1] = (C) => p(s.value.key, !0))
                }, {
                  default: O(() => [...w[13] || (w[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ce, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: w[2] || (w[2] = (C) => p(s.value.key, !1))
                }, {
                  default: O(() => [...w[14] || (w[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(ce, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: w[3] || (w[3] = (C) => h(s.value.key))
                }, {
                  default: O(() => [...w[15] || (w[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : x("", !0),
            s.value.connected ? (t(), a("div", n4, [
              E(ce, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: w[4] || (w[4] = (C) => $("test"))
              }, {
                default: O(() => [...w[18] || (w[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(ce, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: w[5] || (w[5] = (C) => $("live"))
              }, {
                default: O(() => [...w[19] || (w[19] = [
                  R(" Live ", -1)
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
function sS(e) {
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
  function n(u) {
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
function rS(e) {
  const l = K(An(e));
  be(() => {
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
  function n(i, d) {
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
  return { widths: l, setWidth: n, setWidths: r, reset: s };
}
function iS(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = K(
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
      const U = n.value.find((ee) => ee[r] === W);
      if (!U) {
        d?.(W, H);
        continue;
      }
      Object.assign(U, H), Z.add(W);
    }
    Z.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...Z]), setTimeout(() => {
      const W = new Set(f.value);
      Z.forEach((H) => W.delete(H)), f.value = W;
    }, 1500));
  }
  async function B() {
    if (!(!s || n.value.length === 0)) {
      $?.abort(), $ = new AbortController();
      try {
        const G = n.value.map((H) => H[r]), { records: Z, at: W } = await s(G, b);
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
  return be(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", N));
  }), ke(() => {
    document.removeEventListener("visibilitychange", N), J();
  }), { status: u, recentlyChanged: f, applyPatch: C, flush: M, pollOnce: B };
}
const a4 = /^[a-z0-9-]+$/, l4 = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function dS(e) {
  ha(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !a4.test(n) || typeof r != "string" || !l4.test(r) || (l[`--${n}`] = r);
    Ac(l);
  });
}
const o4 = { class: "flex items-center gap-0.5" }, s4 = /* @__PURE__ */ L({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", o4, [
      String(e.value) === "mono" ? (t(), a(z, { key: 0 }, [
        n[0] || (n[0] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-black" }, null, -1)),
        n[1] || (n[1] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-neutral-500" }, null, -1)),
        n[2] || (n[2] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-white" }, null, -1))
      ], 64)) : (t(), a(z, { key: 1 }, [
        n[3] || (n[3] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-sky-600" }, null, -1)),
        n[4] || (n[4] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-amber-500" }, null, -1)),
        n[5] || (n[5] = o("span", { class: "size-3 rounded-[2px] border border-neutral-400 bg-emerald-600" }, null, -1))
      ], 64))
    ]));
  }
}), r4 = /* @__PURE__ */ L({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), D(na, {
      code: "AB-1234",
      style: ie(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), i4 = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, d4 = ["aria-selected", "disabled", "title", "onClick"], u4 = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("div", i4, [
      (t(!0), a(z, null, j(s.value, (v) => (t(), a("button", {
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
      }, c(v), 11, d4))), 128))
    ]));
  }
}), c4 = ["value", "placeholder", "disabled"], f4 = /* @__PURE__ */ L({
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
      class: A(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", k(Me)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, c4));
  }
}), m4 = ["aria-label"], p4 = ["disabled", "aria-label", "aria-pressed", "onClick"], v4 = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, g4 = { key: 0 }, h4 = ["id"], b4 = ["fill"], y4 = ["disabled"], x4 = /* @__PURE__ */ L({
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
    function f(v) {
      return d.value >= v ? "full" : i.value && d.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), a("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), a(z, null, j(s.value, (h) => (t(), a("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: ($) => u(h)
      }, [
        (t(), a("svg", v4, [
          f(h) === "half" ? (t(), a("defs", g4, [
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
            ])], 8, h4)
          ])) : x("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, b4)
        ]))
      ], 8, p4))), 128)),
      d.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, y4)) : x("", !0)
    ], 8, m4));
  }
}), k4 = { class: "flex flex-col gap-2" }, $4 = { class: "bg-card rounded-lg border p-4" }, w4 = { class: "text-muted-foreground truncate text-xs" }, C4 = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, S4 = /* @__PURE__ */ L({
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
    return (w, C) => (t(), a("div", k4, [
      o("div", $4, [
        o("p", w4, c(u.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, c(v.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", C4, [
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
}), M4 = {
  class: "relative",
  "data-test": "tree-select-field"
}, B4 = ["disabled"], A4 = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, _4 = ["onClick"], z4 = ["onClick"], P4 = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = K(""), i = K(!1), d = y(() => n.field.options ?? []);
    function u(h, $) {
      return !$ || h.label.toLowerCase().includes($) ? !0 : (h.children ?? []).some((b) => u(b, $));
    }
    const f = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter(($) => u($, h)) : d.value;
    }), v = y(() => {
      const h = ($) => {
        for (const b of $) {
          if (b.value === n.modelValue)
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
      n.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, $) => (t(), a("div", M4, [
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
      ], 10, B4),
      i.value ? (t(), a("div", A4, [
        e.field.searchable ? ge((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": $[1] || ($[1] = (b) => s.value = b),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [_e, s.value]
        ]) : x("", !0),
        (t(!0), a(z, null, j(f.value, (b) => (t(), a(z, {
          key: String(b.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === b.value ? "bg-accent" : ""]),
            onClick: (w) => p(b.value)
          }, c(b.label), 11, _4),
          (t(!0), a(z, null, j(b.children ?? [], (w) => (t(), a("button", {
            key: String(w.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === w.value ? "bg-accent text-foreground" : ""]),
            onClick: (C) => p(w.value)
          }, c(w.label), 11, z4))), 128))
        ], 64))), 128))
      ])) : x("", !0)
    ]));
  }
});
function L4() {
  xe("radio", cv), xe("toggle-buttons", Fn), xe("checkboxlist", pv), xe("tags", kv), xe("colour", Ov), xe("slider", fg), xe("rating", x4), xe("phone", f4), xe("icon-picker", u4), xe("tree-select", P4), xe("visual-select", Sg), xe("markdown", Hp), xe("code", Yp), xe("map", Iv), xe("qrcode", Uv), xe("barcode", Jv), xe("diff", Xv), xe("seo-preview", S4), Vt("swatch", Bg), Vt("voucher-code-box", r4), Vt("document-colour-mode", s4);
}
function oa() {
  const e = K(null), l = K(!1);
  let n = null;
  return be(() => {
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
const O4 = /* @__PURE__ */ L({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = oa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: ie({ transitionDelay: `${e.delay}ms` })
    }, [
      q(r.$slots, "default")
    ], 6));
  }
}), j4 = ["id"], Be = /* @__PURE__ */ L({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: A(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: A(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(O4, null, {
          default: O(() => [
            q(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, j4));
  }
}), V4 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, D4 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, T4 = {
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
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", V4, c(e.eyebrow), 1)) : x("", !0),
      e.title ? (t(), a("h2", D4, c(e.title), 1)) : x("", !0),
      e.body ? (t(), a("p", T4, c(e.body), 1)) : x("", !0)
    ], 2)) : x("", !0);
  }
}), I4 = { class: "flex flex-col gap-10" }, E4 = { class: "grid gap-4 md:grid-cols-3" }, F4 = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, N4 = { class: "text-sm font-semibold text-balance" }, R4 = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, U4 = /* @__PURE__ */ L({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", I4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", E4, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", { key: s }, [
              (t(), D(Ce(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: O(() => [
                  r.meta ? (t(), a("p", F4, c(r.meta), 1)) : x("", !0),
                  o("h3", N4, c(r.title), 1),
                  r.body ? (t(), a("p", R4, c(r.body), 1)) : x("", !0)
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
function H4() {
  const e = K(null);
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
  return be(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", n, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", n), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const K4 = { class: "pk-tilt-inner relative h-full" }, q4 = /* @__PURE__ */ L({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = H4();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", K4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        q(n.$slots, "default")
      ])
    ], 512));
  }
}), G4 = { class: "flex flex-col gap-10" }, W4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Z4 = { class: "text-base font-semibold" }, J4 = { class: "text-sm text-pretty text-muted-foreground" }, Y4 = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(Be, null, {
      default: O(() => [
        o("div", G4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", W4, [
            (t(!0), a(z, null, j(e.items ?? [], (s, i) => (t(), D(q4, {
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
                  o("h3", Z4, c(s.title), 1),
                  o("p", J4, c(s.body), 1)
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
}), Q4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, X4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, e5 = { class: "grid gap-4 text-sm" }, t5 = {
  key: 0,
  class: "grid gap-1"
}, n5 = ["href"], a5 = {
  key: 1,
  class: "grid gap-1"
}, l5 = ["href"], o5 = {
  key: 2,
  class: "grid gap-1"
}, s5 = { class: "text-pretty text-muted-foreground" }, r5 = ["href"], i5 = /* @__PURE__ */ L({
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
    return (l, n) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", Q4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", X4, [
            o("dl", e5, [
              e.email ? (t(), a("div", t5, [
                n[0] || (n[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, n5)
                ])
              ])) : x("", !0),
              e.phone ? (t(), a("div", a5, [
                n[1] || (n[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, l5)
                ])
              ])) : x("", !0),
              e.address ? (t(), a("div", o5, [
                n[2] || (n[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", s5, c(e.address), 1)
              ])) : x("", !0)
            ]),
            e.label ? (t(), a("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, r5)) : x("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), d5 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, u5 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, c5 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, f5 = ["href"], m5 = /* @__PURE__ */ L({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", d5, [
          o("h2", u5, c(e.title), 1),
          e.body ? (t(), a("p", c5, c(e.body), 1)) : x("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, f5)) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), p5 = { class: "flex flex-col gap-8" }, v5 = { class: "divide-y rounded-lg border" }, g5 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, h5 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, b5 = /* @__PURE__ */ L({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, { narrow: "" }, {
      default: O(() => [
        o("div", p5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", v5, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", g5, [
                R(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", h5, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), y5 = { class: "flex flex-col gap-10" }, x5 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, k5 = { class: "text-sm font-semibold" }, $5 = { class: "text-sm text-pretty text-muted-foreground" }, w5 = /* @__PURE__ */ L({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", y5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", x5, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", k5, c(r.title), 1),
              o("p", $5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), C5 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, S5 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, M5 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, B5 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, A5 = ["href"], _5 = ["href"], z5 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, P5 = /* @__PURE__ */ L({
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
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", {
          class: A(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), a("p", C5, c(e.brand), 1)) : x("", !0),
          e.eyebrow ? (t(), a("p", S5, c(e.eyebrow), 1)) : x("", !0),
          o("h1", {
            class: A(["max-w-3xl font-semibold tracking-tight text-balance", e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"])
          }, c(e.title), 3),
          e.body ? (t(), a("p", M5, c(e.body), 1)) : x("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", B5, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, A5)) : x("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, _5)) : x("", !0)
          ])) : x("", !0),
          e.note ? (t(), a("p", z5, c(e.note), 1)) : x("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), L5 = { class: "flex flex-col items-center gap-6" }, O5 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, j5 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, V5 = /* @__PURE__ */ L({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", L5, [
          e.title ? (t(), a("p", O5, c(e.title), 1)) : x("", !0),
          o("ul", j5, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D5 = { class: "flex flex-col gap-10" }, T5 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, I5 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, E5 = ["aria-pressed"], F5 = ["aria-pressed"], N5 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, R5 = { class: "grid gap-4 md:grid-cols-3" }, U5 = { class: "flex flex-col gap-1" }, H5 = { class: "text-sm font-semibold" }, K5 = { class: "flex items-baseline gap-1" }, q5 = { class: "text-3xl font-semibold tracking-tight" }, G5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, W5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Z5 = { class: "flex flex-col gap-2 text-sm" }, J5 = { class: "text-muted-foreground" }, Y5 = ["href"], Q5 = /* @__PURE__ */ L({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = K(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", D5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", T5, [
            o("div", I5, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, E5),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, F5)
            ]),
            e.annualNote ? (t(), a("p", N5, c(e.annualNote), 1)) : x("", !0)
          ])) : x("", !0),
          o("ul", R5, [
            (t(!0), a(z, null, j(e.items ?? [], (u, f) => (t(), a("li", {
              key: f,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", U5, [
                o("h3", H5, c(u.name), 1),
                o("p", K5, [
                  o("span", q5, c(s(u)), 1),
                  u.period ? (t(), a("span", G5, c(u.period), 1)) : x("", !0)
                ]),
                u.body ? (t(), a("p", W5, c(u.body), 1)) : x("", !0)
              ]),
              o("ul", Z5, [
                (t(!0), a(z, null, j(u.features ?? [], (v, p) => (t(), a("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", J5, c(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, Y5)) : x("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function X5() {
  const e = K(null);
  let l = null, n = null, r = !1, s = !1;
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
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((f) => {
        s = f.some((v) => v.isIntersecting), s && d();
      }), n.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const e3 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, t3 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, n3 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, a3 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, l3 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, o3 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, s3 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, r3 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, i3 = { class: "ml-3 truncate text-xs text-muted-foreground" }, d3 = { class: "flex" }, u3 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, c3 = { class: "min-w-0 flex-1 p-4" }, f3 = { class: "flex flex-col divide-y rounded-md border" }, m3 = /* @__PURE__ */ L({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = X5();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", e3, [
        o("div", t3, [
          o("div", n3, [
            o("h2", a3, c(e.title), 1),
            e.body ? (t(), a("p", l3, c(e.body), 1)) : x("", !0)
          ]),
          o("div", o3, [
            o("div", s3, [
              o("div", r3, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", i3, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", d3, [
                o("div", u3, [
                  (t(), a(z, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: ie({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", c3, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", f3, [
                    (t(!0), a(z, null, j(e.rows, (s) => (t(), a("div", {
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
}), p3 = /* @__PURE__ */ L({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = oa(), s = K(0);
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
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), v3 = { class: "flex flex-col gap-10" }, g3 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, h3 = { class: "order-2 text-sm text-muted-foreground" }, b3 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, y3 = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(Be, { muted: "" }, {
      default: O(() => [
        o("div", v3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", g3, [
            (t(!0), a(z, null, j(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", h3, c(s.label), 1),
              o("dd", b3, [
                l(s.value) ? (t(), D(p3, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(z, { key: 1 }, [
                  R(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), x3 = { class: "flex flex-col gap-10" }, k3 = { class: "grid gap-6 md:grid-cols-3" }, $3 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, w3 = { class: "text-sm font-semibold" }, C3 = { class: "text-sm text-pretty text-muted-foreground" }, S3 = /* @__PURE__ */ L({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", x3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", k3, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", $3, c(s + 1), 1),
              o("h3", w3, c(r.title), 1),
              o("p", C3, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), M3 = { class: "flex flex-col gap-10" }, B3 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, A3 = ["src"], _3 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, z3 = { class: "min-w-0" }, P3 = { class: "truncate text-sm font-semibold" }, L3 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, O3 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, j3 = /* @__PURE__ */ L({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", M3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", B3, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), a("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, A3)) : (t(), a("span", _3, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", z3, [
                o("h3", P3, c(r.name), 1),
                r.role ? (t(), a("p", L3, c(r.role), 1)) : x("", !0)
              ]),
              r.bio ? (t(), a("p", O3, c(r.bio), 1)) : x("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), V3 = { class: "flex flex-col gap-10" }, D3 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, T3 = { class: "text-pretty text-sm leading-relaxed" }, I3 = { class: "mt-auto flex items-center gap-3" }, E3 = ["src"], F3 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, N3 = { class: "min-w-0" }, R3 = { class: "block truncate text-sm font-medium" }, U3 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, H3 = /* @__PURE__ */ L({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Be, null, {
      default: O(() => [
        o("div", V3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", D3, [
            (t(!0), a(z, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", T3, " “" + c(r.quote) + "” ", 1),
              o("figcaption", I3, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, E3)) : (t(), a("span", F3, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", N3, [
                  o("span", R3, c(r.name), 1),
                  r.role ? (t(), a("span", U3, c(r.role), 1)) : x("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), uS = /* @__PURE__ */ L({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: P5,
      logos: V5,
      features: w5,
      bento: Y4,
      showcase: m3,
      steps: S3,
      stats: y3,
      testimonials: H3,
      team: j3,
      articles: U4,
      contact: i5,
      pricing: Q5,
      faq: b5,
      cta: m5
    }, s = y(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), a(z, null, j(s.value, (u) => (t(), D(Ce(u.component), de({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), K3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, cS = /* @__PURE__ */ L({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", K3, [
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
      n[0] || (n[0] = o("div", {
        class: "absolute inset-0 opacity-[0.15] dark:opacity-[0.08]",
        style: { "background-image": `linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)`, "background-size": "64px 64px", "mask-image": "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)" }
      }, null, -1))
    ]));
  }
}), q3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, fS = /* @__PURE__ */ L({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", q3, [...n[0] || (n[0] = [
      rt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), G3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, mS = /* @__PURE__ */ L({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", G3, [...n[0] || (n[0] = [
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
}), W3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, pS = /* @__PURE__ */ L({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", W3, [...n[0] || (n[0] = [
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
L4();
const vS = "0.0.1";
export {
  pn as ACTION_KEY_ICONS,
  Ut as APPEARANCE_STYLE_ID,
  Wf as Alert,
  Zf as AlertDescription,
  Jf as AlertTitle,
  g6 as AppPageFooter,
  L8 as AppearanceDrawer,
  LC as Avatar,
  OC as AvatarFallback,
  jC as AvatarImage,
  ln as BADGE_VARIANTS,
  M8 as BadgeResolver,
  S6 as BarChart,
  VC as Breadcrumb,
  DC as BreadcrumbEllipsis,
  TC as BreadcrumbItem,
  IC as BreadcrumbLink,
  EC as BreadcrumbList,
  FC as BreadcrumbPage,
  NC as BreadcrumbSeparator,
  i8 as BulkActions,
  Yn as CATALOGUE_CONTAINER,
  tm as CATALOGUE_GRID,
  F8 as CATALOGUE_GRID_TIGHT,
  nm as CATALOGUE_GRID_TILES,
  s6 as Card,
  r6 as CardAction,
  i6 as CardContent,
  d6 as CardDescription,
  u6 as CardFooter,
  c6 as CardHeader,
  f6 as CardTitle,
  m2 as CartPanel,
  N6 as CatalogBrowser,
  Hy as CatalogCard,
  la as CatalogFilterSheet,
  dn as CatalogGrid,
  E6 as CatalogInspect,
  mk as CatalogItemDetail,
  F6 as CatalogItemView,
  R6 as CatalogRegister,
  I6 as CatalogTill,
  Ab as ChartCard,
  vt as ChartTooltip,
  Xr as Checkbox,
  x8 as CheckboxCell,
  k8 as CodeCell,
  vu as ColourCell,
  z6 as ComboChart,
  ti as CreateOptionDialog,
  Wr as CreateOptionError,
  H6 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Wk as DASHBOARD_HIDE_KEY,
  K6 as DashboardShortcuts,
  co as DataTable,
  ZC as Dialog,
  JC as DialogClose,
  YC as DialogContent,
  QC as DialogDescription,
  XC as DialogFooter,
  e6 as DialogHeader,
  Om as DialogOverlay,
  t6 as DialogScrollContent,
  n6 as DialogTitle,
  a6 as DialogTrigger,
  bC as DropdownMenu,
  yC as DropdownMenuCheckboxItem,
  xC as DropdownMenuContent,
  kC as DropdownMenuGroup,
  $C as DropdownMenuItem,
  wC as DropdownMenuLabel,
  bS as DropdownMenuPortal,
  CC as DropdownMenuRadioGroup,
  SC as DropdownMenuRadioItem,
  MC as DropdownMenuSeparator,
  BC as DropdownMenuShortcut,
  AC as DropdownMenuSub,
  _C as DropdownMenuSubContent,
  zC as DropdownMenuSubTrigger,
  PC as DropdownMenuTrigger,
  C8 as EditableCell,
  Me as FOCUS_RING,
  d8 as FOCUS_RING_SOFT,
  gn as FOCUS_RING_WITHIN,
  fo as FORM_MEASURE,
  Ge as FormFieldControl,
  P6 as HeatmapChart,
  vl as ICON_ALIASES,
  yt as ICON_PATHS,
  Ue as INPUT_COPY,
  Qr as INPUT_PLACEHOLDER,
  Yr as INPUT_TEXT,
  ou as IconCell,
  uu as ImageCell,
  lS as InfoNode,
  B8 as InlineRecordActions,
  om as JPEG_IMAGE_ERROR,
  $8 as KeyValueCell,
  l6 as Label,
  Kh as LineChart,
  G0 as LineItems,
  s8 as MODAL_PANEL,
  r8 as MODAL_PANEL_FORM,
  kt as MODAL_WIDTH,
  v8 as MUTED_COPY,
  bt as MUTED_COPY_SNUG,
  g8 as MUTED_COPY_XS,
  St as MiniStatCard,
  RC as NavigationMenu,
  UC as NavigationMenuContent,
  HC as NavigationMenuIndicator,
  KC as NavigationMenuItem,
  qC as NavigationMenuLink,
  GC as NavigationMenuList,
  WC as NavigationMenuTrigger,
  Pm as NavigationMenuViewport,
  lm as OPAQUE_IMAGE_ERROR,
  In as OVERLAY_FORM_MEASURE,
  nt as PAGE_SHELL,
  l8 as PAGE_SHELL_COMPACT,
  o8 as PAGE_SHELL_STACK,
  oS as PaymentGatewaySettings,
  Uw as PaymentGateways,
  M6 as PieChart,
  I8 as PkAlertError,
  U4 as PkArticles,
  cS as PkAuroraBackdrop,
  We as PkBadge,
  Jv as PkBarcode,
  Y4 as PkBento,
  O8 as PkBottomNav,
  m6 as PkBoundary,
  x6 as PkBuilder,
  ce as PkButton,
  k6 as PkCalendar,
  p6 as PkCard,
  pv as PkCheckboxList,
  na as PkCodeBox,
  Yp as PkCodeInput,
  Ov as PkColourPicker,
  mS as PkConsoleBackdrop,
  i5 as PkContact,
  p3 as PkCountUp,
  m5 as PkCta,
  h6 as PkDeviceFrame,
  Xv as PkDiff,
  lh as PkDocument,
  He as PkDropdown,
  fS as PkEditorialBackdrop,
  Ft as PkEmptyState,
  b5 as PkFaq,
  w5 as PkFeatureGrid,
  ze as PkFieldLabel,
  En as PkFileUpload,
  Ie as PkHeading,
  P5 as PkHero,
  _i as PkKeyValue,
  uS as PkLandingSections,
  V5 as PkLogoCloud,
  Vv as PkMap,
  Iv as PkMapField,
  Hp as PkMarkdownInput,
  ut as PkModal,
  tn as PkMultiSelect,
  D8 as PkOtpInput,
  T8 as PkPageHeader,
  Y6 as PkPasskeyRegister,
  E8 as PkPasswordInput,
  Q5 as PkPricing,
  Uv as PkQrCode,
  D0 as PkQtyStepper,
  bs as PkQueryBuilder,
  cv as PkRadioGroup,
  y6 as PkRepeater,
  O4 as PkReveal,
  Ei as PkRichEditor,
  Be as PkSection,
  je as PkSectionHeading,
  b6 as PkSetupWizardCompletion,
  m3 as PkShowcase,
  Ak as PkSignaturePad,
  Pe as PkSkeleton,
  At as PkSlideover,
  fg as PkSlider,
  V8 as PkSpinner,
  y3 as PkStats,
  $e as PkStatusBadge,
  qr as PkStepIndicator,
  S3 as PkSteps,
  pS as PkStudioBackdrop,
  j8 as PkSubNav,
  Bg as PkSwatchPreview,
  kv as PkTagsInput,
  j3 as PkTeam,
  H3 as PkTestimonials,
  we as PkTextInput,
  q4 as PkTiltCard,
  Fn as PkToggleButtons,
  Sg as PkVisualSelect,
  hx as PlanCard,
  D6 as PlanEditor,
  V6 as PlanGrid,
  T6 as PlanPurchaseCard,
  _6 as PolarAreaChart,
  A6 as RadarChart,
  y8 as RatingCell,
  oc as RecordActions,
  Q6 as RecordForm,
  b8 as RelationCreateDialog,
  c8 as RelationPanel,
  mo as SLIDEOVER_BODY,
  po as SLIDEOVER_WIDTH,
  ky as STATUS_TONES,
  B6 as ScatterChart,
  Nn as SchemaNode,
  O6 as SegmentedBar,
  W6 as SelectionBar,
  Mm as Separator,
  G6 as SetupChecklist,
  Jn as ShadcnInput,
  nn as Sheet,
  K8 as SheetClose,
  an as SheetContent,
  cm as SheetDescription,
  q8 as SheetFooter,
  fm as SheetHeader,
  mm as SheetTitle,
  G8 as SheetTrigger,
  Gb as ShortcutsWidget,
  W8 as Sidebar,
  Z8 as SidebarContent,
  J8 as SidebarFooter,
  Y8 as SidebarGroup,
  Q8 as SidebarGroupAction,
  X8 as SidebarGroupContent,
  eC as SidebarGroupLabel,
  tC as SidebarHeader,
  nC as SidebarInput,
  aC as SidebarInset,
  lC as SidebarMenu,
  oC as SidebarMenuAction,
  sC as SidebarMenuBadge,
  iC as SidebarMenuButton,
  dC as SidebarMenuItem,
  uC as SidebarMenuSkeleton,
  cC as SidebarMenuSub,
  fC as SidebarMenuSubButton,
  mC as SidebarMenuSubItem,
  pC as SidebarProvider,
  vC as SidebarRail,
  gC as SidebarSeparator,
  hC as SidebarTrigger,
  U6 as SignatureStudio,
  zt as Sparkline,
  o6 as Spinner,
  L6 as StatCard,
  j6 as StatListChart,
  q6 as StatStrip,
  Je as Switch,
  Qn as TRANSPARENT_IMAGE_HELP,
  Z6 as TablePagination,
  Go as TableShell,
  J6 as TableTabs,
  Cr as TableToolbar,
  w8 as TagsCell,
  C6 as ThemeToggle,
  wm as Tooltip,
  Cm as TooltipContent,
  rC as TooltipProvider,
  Sm as TooltipTrigger,
  aa as TrendBadge,
  X6 as UnsavedBar,
  Ru as actionColorTone,
  Yf as alertVariants,
  Mc as appearancePayload,
  Kn as appearanceVars,
  Ht as applyAppearance,
  um as assertTransparentImage,
  _8 as bootstrapAppearance,
  Ye as buttonClasses,
  Mt as catalogFiltersActive,
  oe as cn,
  Jr as createOptionActionLabel,
  Zr as createOptionTitle,
  Ky as cycleLabel,
  Ee as emptyCatalogFilters,
  iw as entryView,
  Gr as fieldControl,
  h8 as fieldErrorsFromPayload,
  g2 as findExactSku,
  qy as formatPerkValue,
  Lu as hasBadgeValue,
  nS as hasEntryView,
  f8 as hasFieldControl,
  $6 as hasOptionPreview,
  me as iconPath,
  im as imageHasTransparency,
  qn as initializeAppearance,
  sn as isDark,
  un as matchCatalogItem,
  U8 as mergeLayoutItems,
  Lm as navigationMenuTriggerStyle,
  mg as optionPreview,
  N8 as packWidgetColumns,
  R8 as parseWidgetId,
  Gy as perkGranted,
  rn as readAppearance,
  Bc as readServerAppearance,
  L4 as registerBuiltInFieldControls,
  tS as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  dw as registeredEntryViews,
  m8 as registeredFieldTypes,
  pg as registeredOptionPreviews,
  A8 as resetAppearanceBootstrapForTests,
  aS as resetEntryViews,
  p8 as resetFieldControls,
  w6 as resetOptionPreviews,
  Te as resolveActionIcon,
  P8 as setAppearancePersister,
  Bm as sidebarMenuButtonVariants,
  Sy as statusBadgeVariant,
  Cy as statusTone,
  z8 as syncAppearanceFromInertiaPage,
  H8 as toPersistedLayout,
  u8 as toUrl,
  Zn as useAppearance,
  sS as useColumnVisibility,
  rS as useColumnWidths,
  iS as useLiveUpdates,
  H4 as usePointer,
  oa as useReveal,
  S8 as useSchemaColumns,
  X5 as useScrollProgress,
  v6 as useShellPageFooter,
  _t as useSidebar,
  dS as useTenantTheme,
  eS as useUnsavedChanges,
  vS as version,
  xn as widgetId
};
//# sourceMappingURL=index.js.map
