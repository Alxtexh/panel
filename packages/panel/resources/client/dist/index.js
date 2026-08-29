import './ui.css';
import { defineComponent as L, useSlots as qt, openBlock as t, createElementBlock as a, normalizeClass as z, unref as k, renderSlot as G, createElementVNode as o, toDisplayString as c, createCommentVNode as x, computed as y, normalizeStyle as se, Fragment as P, renderList as j, ref as q, watch as fe, useId as ra, withModifiers as ve, createTextVNode as H, createVNode as E, createStaticVNode as st, createBlock as D, createSlots as rt, withCtx as O, nextTick as De, onBeforeUnmount as ke, Teleport as ut, Transition as Qe, onMounted as ge, withDirectives as pe, vModelText as ze, resolveDynamicComponent as Ae, resolveComponent as Gt, vModelSelect as Ze, vModelDynamic as ia, mergeProps as re, normalizeProps as Le, guardReactiveProps as Ne, defineAsyncComponent as cn, inject as xt, vShow as He, withKeys as Tt, onUnmounted as da, isRef as ua, useTemplateRef as ca, onErrorCaptured as fa, provide as It, reactive as it, useModel as ct, mergeModels as Fe, markRaw as ma, shallowRef as pa, watchEffect as va } from "vue";
import { useForwardPropsEmits as be, DialogRoot as Mn, DialogOverlay as Wt, DialogPortal as Zt, DialogContent as Jt, DialogClose as Xe, CheckboxRoot as ga, CheckboxIndicator as ha, SwitchRoot as ba, SwitchThumb as ya, DialogDescription as Bn, DialogTitle as An, DialogTrigger as zn, createContext as xa, Primitive as et, TooltipRoot as ka, TooltipPortal as $a, TooltipContent as wa, TooltipArrow as Ca, TooltipProvider as _n, TooltipTrigger as Sa, Separator as Ma, DropdownMenuRoot as Ba, DropdownMenuCheckboxItem as Aa, DropdownMenuItemIndicator as Pn, DropdownMenuPortal as za, DropdownMenuContent as _a, DropdownMenuGroup as Pa, useForwardProps as Oe, DropdownMenuItem as La, DropdownMenuLabel as Oa, DropdownMenuRadioGroup as ja, DropdownMenuRadioItem as Va, DropdownMenuSeparator as Da, DropdownMenuSub as Ta, DropdownMenuSubContent as Ia, DropdownMenuSubTrigger as Ea, DropdownMenuTrigger as Fa, AvatarRoot as Na, AvatarFallback as Ra, AvatarImage as Ua, NavigationMenuViewport as Ha, NavigationMenuRoot as Ka, NavigationMenuContent as qa, NavigationMenuIndicator as Ga, NavigationMenuItem as Wa, NavigationMenuLink as Za, NavigationMenuList as Ja, NavigationMenuTrigger as Ya, Label as Qa } from "reka-ui";
import { DropdownMenuPortal as U6 } from "reka-ui";
import { X as Yt, Check as Ln, AlertCircle as Xa, EyeOff as el, Eye as tl, PanelLeftOpen as nl, PanelLeftClose as al, Circle as ll, ChevronRight as On, MoreHorizontal as ol, ChevronDown as sl, Loader2Icon as rl } from "@lucide/vue";
import { reactiveOmit as me, useVModel as jn, useMediaQuery as il, useEventListener as dl, defaultDocument as ul } from "@vueuse/core";
import { clsx as cl } from "clsx";
import { twMerge as fl } from "tailwind-merge";
import { cva as Qt } from "class-variance-authority";
import { usePage as Vn, Link as ml } from "@inertiajs/vue3";
const bt = {
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
}, pl = {
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
}, fn = {
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
}, mn = {
  success: "coins",
  danger: "trash",
  warning: "alert",
  primary: "activity",
  info: "info",
  gray: "circle"
};
function ce(e) {
  if (!e)
    return bt.dot;
  const l = pl[e] ?? e;
  return bt[l] ?? bt.dot;
}
function Te(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== bt.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = fn[l] ?? fn[l.replace(/_/g, "-")];
    if (s)
      return ce(s);
  }
  const n = vl(e.label);
  if (n)
    return ce(n);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && mn[r] ? ce(mn[r]) : ce("circle");
}
function vl(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const gl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, hl = ["d"], bl = { class: "flex max-w-sm flex-col gap-1" }, yl = {
  key: 0,
  class: "text-sm font-normal"
}, xl = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Et = /* @__PURE__ */ L({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = qt();
    return (n, r) => (t(), a("div", {
      "data-slot": "empty-state",
      class: z(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), a("div", gl, [
        G(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
            class: z(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: k(ce)(e.icon)
            }, null, 8, hl)
          ], 2))
        ])
      ], 2)),
      o("div", bl, [
        o("p", {
          class: z(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), a("p", yl, c(e.description), 1)) : x("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", xl, [
        G(n.$slots, "actions")
      ])) : x("", !0)
    ], 2));
  }
}), kl = ["aria-label"], Pe = /* @__PURE__ */ L({
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
      (t(!0), a(P, null, j(s.value, (f) => (t(), a("span", {
        key: f,
        "aria-hidden": "true",
        class: z(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, kl));
  }
}), $l = { class: "w-full border-collapse text-sm" }, wl = { class: "bg-background sticky top-0 z-10" }, Cl = {
  key: 0,
  class: "bg-muted/40"
}, Sl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Ml = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Bl = ["colspan"], Al = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, zl = { class: "bg-muted/50" }, _l = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Pl = ["id", "checked", "indeterminate"], Ll = ["onClick"], Ol = {
  key: 0,
  class: "text-xs"
}, jl = {
  key: 1,
  class: "text-xs opacity-40"
}, Vl = { key: 1 }, Dl = ["aria-label", "onPointerdown"], Tl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Il = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, El = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Fl = {
  key: 1,
  class: "px-3 py-2.5"
}, Nl = {
  key: 2,
  class: "px-2 py-2.5"
}, Rl = {
  key: 0,
  class: "bg-muted/40"
}, Ul = ["colspan"], Hl = ["aria-expanded", "dusk", "onClick"], Kl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, ql = {
  key: 1,
  dusk: "group-header"
}, Gl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Wl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Zl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Jl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Yl = ["aria-label", "onClick"], Ql = { class: "text-xs" }, Xl = {
  key: 1,
  class: "text-muted-foreground"
}, eo = { key: 2 }, to = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, no = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, ao = { key: 0 }, lo = { class: "text-muted-foreground block text-[10px] font-medium" }, oo = { class: "font-semibold tabular-nums" }, so = { key: 1 }, ro = 40, io = /* @__PURE__ */ L({
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
    function f(X) {
      return n.groupBy?.collapsible ? d.value.has(X) : !1;
    }
    function g(X) {
      if (!n.groupBy?.collapsible)
        return;
      const le = new Set(u.value);
      le.add(X), u.value = le;
      const te = new Set(d.value);
      te.has(X) ? te.delete(X) : te.add(X), d.value = te;
    }
    function v(X) {
      return n.groupBy?.collapsible ? !f(r(n.rows[X])) : !0;
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
    const h = q(null), w = q(null);
    function b(X, le) {
      h.value = X, le.dataTransfer?.setData("text/plain", String(X)), le.dataTransfer && (le.dataTransfer.effectAllowed = "move");
    }
    function C() {
      h.value = null, w.value = null;
    }
    function B(X) {
      return h.value === null || w.value !== X ? "" : h.value > X ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function M(X, le) {
      h.value !== null && (le.preventDefault(), w.value = X);
    }
    function A(X) {
      const le = h.value;
      if (h.value = null, w.value = null, le === null || le === X)
        return;
      const te = n.rows.map((ie) => ie[n.rowKey]), [ue] = te.splice(le, 1);
      te.splice(X, 0, ue), $("reorder", te);
    }
    const $ = l;
    function m(X, le) {
      !n.rowClickable || n.reordering || le.button !== 0 || le.metaKey || le.ctrlKey || le.shiftKey || le.altKey || le.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || $("row-click", X);
    }
    const p = q(null), _ = ra(), T = y(() => n.columns.filter((X) => !n.hidden?.has(X.key))), F = y(() => {
      const X = T.value.find((le) => le.sticky);
      return X ? X.key : n.stickyFirst && T.value.length > 0 ? T.value[0].key : null;
    });
    function Y(X) {
      return F.value === X.key;
    }
    function N() {
      return n.selectable && !n.reordering ? `${ro}px` : "0";
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
      function Ke(at) {
        const Pt = ue + (at.clientX - te);
        $("resize", X.key, Math.min(1200, Math.max(48, Pt)));
      }
      function Re(at) {
        try {
          ie.releasePointerCapture(at.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", Ke), ie.removeEventListener("pointerup", Re), ie.removeEventListener("pointercancel", Re);
      }
      ie.addEventListener("pointermove", Ke), ie.addEventListener("pointerup", Re), ie.addEventListener("pointercancel", Re);
    }
    const U = y(() => T.value.some((X) => !!X.group)), R = y(() => {
      const X = [];
      for (const le of T.value) {
        const te = le.group ?? null, ue = X[X.length - 1];
        ue && ue.label === te ? ue.span += 1 : X.push({ label: te, span: 1, key: `${te ?? "loose"}-${le.key}` });
      }
      return X;
    });
    function S(X) {
      const le = X[n.rowKey];
      return le == null || le === "" ? null : le;
    }
    function I(X) {
      const le = S(X);
      return le !== null && !!n.selected?.has(le);
    }
    const V = q(null);
    function Q(X) {
      return n.rows.findIndex((le) => {
        const te = S(le);
        return te !== null && te === X;
      });
    }
    function he(X, le) {
      const te = S(X);
      if (te === null)
        return;
      const ue = le.shiftKey, ie = !!n.selected?.has(te);
      if (ue && V.value !== null && V.value !== te) {
        const Ke = Q(V.value), Re = Q(te);
        if (Ke !== -1 && Re !== -1) {
          const at = Math.min(Ke, Re), Pt = Math.max(Ke, Re), sa = !ie;
          for (let gt = at; gt <= Pt; gt++) {
            if (!v(gt))
              continue;
            const Lt = S(n.rows[gt]);
            if (Lt === null)
              continue;
            !!n.selected?.has(Lt) !== sa && $("toggle-row", Lt);
          }
          V.value = te;
          return;
        }
      }
      $("toggle-row", te), V.value = te;
    }
    const ye = y(
      () => n.rows.map((X) => S(X)).filter((X) => X !== null)
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
    async function dn(X, le, te) {
      try {
        await navigator.clipboard.writeText(String(te)), p.value = `${X}-${le.key}`, setTimeout(() => p.value = null, 1200);
      } catch {
      }
    }
    const la = y(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function un(X) {
      return n.summaries?.[X] ?? null;
    }
    function oa(X) {
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
      class: z(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $l, [
        o("thead", wl, [
          U.value ? (t(), a("tr", Cl, [
            e.reordering ? (t(), a("th", Sl)) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Ml)) : x("", !0),
            (t(!0), a(P, null, j(R.value, (te) => (t(), a("th", {
              key: te.key,
              colspan: te.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(te.label ?? ""), 9, Bl))), 128)),
            X.$slots.actions ? (t(), a("th", Al)) : x("", !0)
          ])) : x("", !0),
          o("tr", zl, [
            e.reordering ? (t(), a("th", _l)) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("th", {
              key: 1,
              class: z(["w-10 border-b px-3 py-2.5", F.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${k(_)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: oe.value,
                indeterminate: ee.value,
                "aria-label": "Select all rows on this page",
                onClick: le[0] || (le[0] = ve(() => {
                }, ["stop"])),
                onChange: le[1] || (le[1] = ve((te) => $("toggle-page", !oe.value), ["stop"]))
              }, null, 40, Pl)
            ], 2)) : x("", !0),
            (t(!0), a(P, null, j(T.value, (te) => (t(), a("th", {
              key: te.key,
              class: z([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                Y(te) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(Z(te))
            }, [
              te.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => $("sort", ae(te))
              }, [
                H(c(te.label) + " ", 1),
                Ce(te) ? (t(), a("span", Ol, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", jl, "↕"))
              ], 8, Ll)) : (t(), a("span", Vl, c(te.label), 1)),
              J(te) ? (t(), a("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${te.label}`,
                onPointerdown: (ue) => K(te, ue)
              }, null, 40, Dl)) : x("", !0)
            ], 6))), 128)),
            X.$slots.actions ? (t(), a("th", Tl, [...le[2] || (le[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : x("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", Il, [
          (t(), a(P, null, j(6, (te) => o("tr", {
            key: `skel-${te}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", El, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Fl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : x("", !0),
            (t(!0), a(P, null, j(T.value, (ue) => (t(), a("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              E(Pe, { variant: "text" })
            ]))), 128)),
            X.$slots.actions ? (t(), a("td", Nl, [
              E(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : x("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, j(e.rows, (te, ue) => (t(), a(P, {
            key: S(te) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), a("tr", Rl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), a("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(te)),
                  dusk: `group-header-${r(te) || "none"}`,
                  onClick: (ie) => g(r(te))
                }, [
                  o("span", Kl, c(f(r(te)) ? "▸" : "▾"), 1),
                  H(" " + c(i(te)), 1)
                ], 8, Hl)) : (t(), a("span", ql, c(i(te)), 1))
              ], 8, Ul)
            ])) : x("", !0),
            v(ue) ? (t(), a("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                I(te) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                h.value === ue ? "opacity-40" : "",
                B(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => b(ue, ie),
              onDragover: (ie) => M(ue, ie),
              onDrop: ve((ie) => A(ue), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => $("row-contextmenu", te, ie),
              onClick: (ie) => m(te, ie)
            }, [
              e.reordering ? (t(), a("td", Wl, [...le[3] || (le[3] = [
                st('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : x("", !0),
              e.selectable && !e.reordering ? (t(), a("td", {
                key: 1,
                class: z(["px-3 py-2", F.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${k(_)}-row-${S(te) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: S(te) ?? void 0,
                  checked: I(te),
                  disabled: S(te) === null,
                  "aria-label": S(te) === null ? "This row has no id and cannot be selected" : `Select row ${S(te)}`,
                  onClick: ve((ie) => he(te, ie), ["stop"])
                }, null, 8, Zl)
              ], 2)) : x("", !0),
              (t(!0), a(P, null, j(T.value, (ie) => (t(), a("td", {
                key: ie.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
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
                  ie.copyable ? (t(), a("span", Jl, [
                    H(c(te[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => dn(String(te[e.rowKey]), ie, te[ie.key])
                    }, [
                      o("span", Ql, c(p.value === `${te[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Yl)
                  ])) : te[ie.key] == null || te[ie.key] === "" ? (t(), a("span", Xl, "None")) : (t(), a("span", eo, c(te[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              X.$slots.actions ? (t(), a("td", to, [
                G(X.$slots, "actions", { row: te }, void 0, !0)
              ])) : x("", !0)
            ], 42, Gl)) : x("", !0)
          ], 64))), 128))
        ], 2)),
        la.value ? (t(), a("tfoot", no, [
          o("tr", null, [
            e.selectable ? (t(), a("td", ao)) : x("", !0),
            (t(!0), a(P, null, j(e.columns, (te) => (t(), a(P, {
              key: `s-${te.key}`
            }, [
              e.hidden?.has(te.key) ? x("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", te.cellClass])
              }, [
                un(te.key) ? (t(), a(P, { key: 0 }, [
                  o("span", lo, c(un(te.key).label), 1),
                  o("span", oo, c(oa(te.key)), 1)
                ], 64)) : x("", !0)
              ], 2))
            ], 64))), 128)),
            X.$slots.actions ? (t(), a("td", so)) : x("", !0)
          ])
        ])) : x("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), D(Et, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, rt({ _: 2 }, [
        X.$slots["clear-filters"] ? {
          name: "actions",
          fn: O(() => [
            G(X.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), D(Et, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, rt({ _: 2 }, [
        X.$slots["empty-actions"] ? {
          name: "actions",
          fn: O(() => [
            G(X.$slots, "empty-actions", {}, void 0, !0)
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
}, uo = /* @__PURE__ */ Bt(io, [["__scopeId", "data-v-c0f7d40f"]]), tt = "w-full min-w-0 px-4 py-6 sm:px-6", P3 = "w-full min-w-0 p-3 sm:p-4", L3 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", co = "w-full max-w-7xl", fo = "px-4 py-4", Dn = "w-full min-w-0", mo = {
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
}, O3 = kt.confirm, j3 = kt.form, po = ["aria-busy", "aria-label"], vo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, go = { class: "text-base font-semibold" }, ho = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, bo = {
  key: 0,
  class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3"
}, dt = /* @__PURE__ */ L({
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
    function f(h) {
      d.value = h.target === h.currentTarget;
    }
    function g(h) {
      d.value && h.target === h.currentTarget && !n.busy && r("close"), d.value = !1;
    }
    function v(h) {
      if (!n.open)
        return;
      if (h.key === "Escape" && !n.busy) {
        h.stopPropagation(), r("close");
        return;
      }
      if (h.key !== "Tab" || !s.value)
        return;
      const w = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (w.length === 0)
        return;
      const b = w[0], C = w[w.length - 1];
      h.shiftKey && document.activeElement === b ? (h.preventDefault(), C.focus()) : !h.shiftKey && document.activeElement === C && (h.preventDefault(), b.focus());
    }
    return fe(
      () => n.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", v), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (h, w) => (t(), D(ut, { to: "body" }, [
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
            onPointerdown: f,
            onPointerup: g
          }, [
            o("div", {
              ref_key: "panel",
              ref: s,
              role: "dialog",
              "aria-modal": "true",
              "aria-busy": e.busy ? "true" : void 0,
              "aria-label": e.title,
              class: z(u.value)
            }, [
              o("div", vo, [
                o("h2", go, c(e.title), 1),
                e.description ? (t(), a("p", ho, c(e.description), 1)) : x("", !0)
              ]),
              o("div", {
                class: z(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", k(Dn)])
              }, [
                G(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), a("div", bo, [
                G(h.$slots, "footer")
              ])) : x("", !0)
            ], 10, po)
          ], 32)) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), yo = 160, qe = /* @__PURE__ */ L({
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
    let f = null;
    function g(m) {
      !n.dismissOnPanelClick || m.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function v() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await De(), B());
    }
    function h() {
      f = setTimeout(C, 180);
    }
    async function w() {
      u.value = null, r.value = !r.value, r.value && (await De(), B());
    }
    async function b(m, p) {
      u.value = { x: m, y: p }, r.value = !0, await De(), B();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function B() {
      const m = s.value, p = i.value;
      if (!m || !p)
        return;
      const _ = p.getBoundingClientRect(), T = 8, F = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : m.getBoundingClientRect();
      let Y, N;
      if (n.placement === "bottom")
        Y = F.bottom + n.offset, Y + _.height > window.innerHeight - T && F.top - _.height - n.offset > T && (Y = F.top - _.height - n.offset), N = n.align === "end" && !u.value ? F.right - _.width : F.left;
      else {
        Y = F.top;
        const W = n.placement === "right", Z = F.right + n.offset + _.width < window.innerWidth - T, J = F.left - n.offset - _.width > T;
        N = (W ? Z || !J : !J && Z) ? F.right + n.offset : F.left - n.offset - _.width;
      }
      N = Math.min(Math.max(T, N), window.innerWidth - _.width - T), Y = Math.min(Math.max(T, Y), window.innerHeight - _.height - T), d.value = { top: Y, left: N, minWidth: Math.max(F.width, yo) };
    }
    function M(m) {
      if (!r.value)
        return;
      const p = m.target;
      s.value?.contains(p) || i.value?.contains(p) || (p instanceof Element ? p : p.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function A(m) {
      m.key === "Escape" && r.value && (m.stopPropagation(), C());
    }
    function $() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        B();
      }
    }
    return ge(() => {
      document.addEventListener("pointerdown", M), document.addEventListener("keydown", A), window.addEventListener("scroll", $, !0), window.addEventListener("resize", $);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", A), window.removeEventListener("scroll", $, !0), window.removeEventListener("resize", $);
    }), l({ close: C, openAt: b }), (m, p) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: p[2] || (p[2] = (_) => e.hoverable && v()),
      onPointerleave: p[3] || (p[3] = (_) => e.hoverable && h())
    }, [
      o("div", { onClick: w }, [
        G(m.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(ut, { to: "body" }, [
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
              class: z([
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
              onPointerenter: p[0] || (p[0] = (_) => e.hoverable && v()),
              onPointerleave: p[1] || (p[1] = (_) => e.hoverable && h()),
              onClick: g
            }, [
              G(m.$slots, "panel", { close: C })
            ], 38)) : x("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), xo = ["disabled"], ko = { class: "py-0.5" }, $o = ["disabled", "onClick"], wo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Co = ["d"], So = { class: "min-w-0 flex-1 truncate" }, Mo = ["disabled"], Bo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ao = ["d"], zo = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, _o = ["disabled", "onClick"], Po = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lo = ["d"], Oo = { class: "min-w-0 flex-1 truncate" }, jo = { class: "text-muted-foreground text-sm font-normal" }, Vo = { class: "text-foreground font-medium tabular-nums" }, Do = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, To = ["disabled"], Io = { class: "text-muted-foreground text-sm font-normal" }, Eo = { class: "text-foreground font-medium tabular-nums" }, Fo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, No = ["disabled"], V3 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(null), i = q(!1), d = y(() => n.allMatching ? n.total : n.count), u = y(() => d.value !== void 0), f = y(() => u.value && d.value === 0), g = y(() => n.actions.filter((A) => !A.destructive)), v = y(() => n.actions.filter((A) => A.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function w(A) {
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
    function B() {
      i.value = !1, r("export");
    }
    const M = (A) => new Intl.NumberFormat().format(A);
    return (A, $) => (t(), a(P, null, [
      E(qe, null, {
        trigger: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...$[5] || ($[5] = [
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
          ])], 8, xo)
        ]),
        panel: O(() => [
          o("div", ko, [
            (t(!0), a(P, null, j(g.value, (m) => (t(), a("button", {
              key: m.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", w(m)]),
              disabled: e.busy,
              onClick: (p) => b(m)
            }, [
              (t(), a("svg", wo, [
                o("path", {
                  d: k(Te)(m)
                }, null, 8, Co)
              ])),
              o("span", So, c(m.label), 1)
            ], 10, $o))), 128)),
            e.canExport ? (t(), a("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: $[0] || ($[0] = (m) => i.value = !0)
            }, [
              (t(), a("svg", Bo, [
                o("path", {
                  d: k(ce)("download")
                }, null, 8, Ao)
              ])),
              $[6] || ($[6] = H(" Export CSV ", -1))
            ], 8, Mo)) : x("", !0),
            v.value.length ? (t(), a("div", zo, [
              (t(!0), a(P, null, j(v.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (p) => b(m)
              }, [
                (t(), a("svg", Po, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, Lo)
                ])),
                o("span", Oo, c(m.label), 1)
              ], 8, _o))), 128))
            ])) : x("", !0)
          ])
        ]),
        _: 1
      }),
      E(dt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: $[2] || ($[2] = (m) => s.value = null)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: $[1] || ($[1] = (m) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: z([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || f.value,
            onClick: C
          }, c(s.value?.label), 11, To)
        ]),
        default: O(() => [
          o("p", jo, [
            $[7] || ($[7] = H(" This will affect ", -1)),
            o("span", Vo, [
              u.value ? (t(), a(P, { key: 1 }, [
                H(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                H("…")
              ], 64))
            ]),
            $[8] || ($[8] = H(" . ", -1))
          ]),
          f.value ? (t(), a("p", Do, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : x("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(dt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: $[4] || ($[4] = (m) => i.value = !1)
      }, {
        footer: O(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: $[3] || ($[3] = (m) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || f.value,
            onClick: B
          }, " Export CSV ", 8, No)
        ]),
        default: O(() => [
          o("p", Io, [
            $[9] || ($[9] = H(" This will export ", -1)),
            o("span", Eo, [
              u.value ? (t(), a(P, { key: 1 }, [
                H(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                H("…")
              ], 64))
            ]),
            $[10] || ($[10] = H(". ", -1))
          ]),
          f.value ? (t(), a("p", Fo, " Nothing matches the current filters - there is nothing to export. ")) : x("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Ro = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Uo = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Ho = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Ko = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, qo = /* @__PURE__ */ L({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Ro, [
      l.$slots.tabs ? (t(), a("div", Uo, [
        G(l.$slots, "tabs")
      ])) : x("", !0),
      l.$slots.title ? (t(), a("div", Ho, [
        G(l.$slots, "title")
      ])) : x("", !0),
      l.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        G(l.$slots, "toolbar")
      ], 2)) : x("", !0),
      G(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", Ko, [
        G(l.$slots, "pagination")
      ])) : x("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", pn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", D3 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Go = ["aria-expanded"], Wo = ["aria-label", "onClick"], Zo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Jo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Yo = {
  key: 0,
  class: "border-b p-1"
}, Qo = ["placeholder"], Xo = { class: "max-h-60 overflow-y-auto p-1" }, es = ["aria-selected", "onMouseenter", "onClick"], ts = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Xt = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(null), i = q(null), d = q(null), u = q(!1), f = q(""), g = q(0), v = q({ top: 0, left: 0, width: 0 }), h = y(
      () => n.modelValue.map(
        (N) => n.options.find((W) => W.value === N) ?? {
          value: N,
          label: String(N)
        }
      ).filter(Boolean)
    ), w = y(() => n.searchable ?? n.options.length > 6), b = y(() => {
      const N = new Set(n.modelValue), W = f.value.trim().toLowerCase();
      return n.options.filter((Z) => !N.has(Z.value)).filter((Z) => W ? Z.label.toLowerCase().includes(W) : !0);
    }), C = y(() => n.max !== null && n.modelValue.length >= n.max);
    function B() {
      const N = s.value, W = i.value;
      if (!N || !W)
        return;
      const Z = N.getBoundingClientRect(), J = W.getBoundingClientRect(), K = 8;
      let U = Z.bottom + 4;
      U + J.height > window.innerHeight - K && Z.top - J.height - 4 > K && (U = Z.top - J.height - 4), v.value = {
        top: U,
        left: Math.min(Math.max(K, Z.left), window.innerWidth - Z.width - K),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: Z.width
      };
    }
    async function M() {
      n.disabled || u.value || (u.value = !0, f.value = "", g.value = 0, await De(), B(), d.value?.focus());
    }
    function A() {
      u.value = !1, f.value = "";
    }
    function $() {
      u.value ? A() : M();
    }
    function m(N) {
      C.value || (r("update:modelValue", [...n.modelValue, N.value]), f.value = "", g.value = 0, De(() => {
        B(), d.value?.focus();
      }));
    }
    function p(N) {
      r(
        "update:modelValue",
        n.modelValue.filter((W) => W !== N)
      ), De(B);
    }
    function _() {
      r("update:modelValue", []), De(B);
    }
    function T(N) {
      if (!n.disabled) {
        if (N.key === "Escape" && u.value) {
          N.stopPropagation(), A();
          return;
        }
        if (N.key === "Backspace" && f.value === "" && n.modelValue.length > 0) {
          p(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (N.key === "ArrowDown" || N.key === "Enter")) {
          N.preventDefault(), M();
          return;
        }
        if (u.value) {
          if (N.key === "ArrowDown")
            N.preventDefault(), g.value = Math.min(g.value + 1, b.value.length - 1);
          else if (N.key === "ArrowUp")
            N.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (N.key === "Enter") {
            N.preventDefault();
            const W = b.value[g.value];
            W && m(W);
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
      u.value && B();
    }
    return fe(b, (N) => {
      g.value > N.length - 1 && (g.value = Math.max(0, N.length - 1));
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
        class: z(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: $
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
            onClick: ve((J) => p(Z.value), ["stop"])
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
          ])], 8, Wo)
        ]))), 128)),
        h.value.length === 0 ? (t(), a("span", Zo, c(e.placeholder), 1)) : x("", !0),
        o("span", Jo, [
          h.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: ve(_, ["stop"])
          }, " Clear ")) : x("", !0),
          (t(), a("svg", {
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...W[2] || (W[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Go),
      (t(), D(ut, { to: "body" }, [
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
                top: `${v.value.top}px`,
                left: `${v.value.left}px`,
                width: `${v.value.width}px`
              }),
              role: "listbox"
            }, [
              w.value ? (t(), a("div", Yo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (Z) => f.value = Z),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: T
                }, null, 40, Qo), [
                  [ze, f.value]
                ])
              ])) : x("", !0),
              o("div", Xo, [
                (t(!0), a(P, null, j(b.value, (Z, J) => (t(), a("button", {
                  key: Z.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", J === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": J === g.value,
                  onMouseenter: (K) => g.value = J,
                  onClick: (K) => m(Z)
                }, c(Z.label), 43, es))), 128)),
                b.value.length === 0 ? (t(), a("p", ts, [
                  C.value ? (t(), a(P, { key: 0 }, [
                    H("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), a(P, { key: 1 }, [
                    H("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    H("Everything is selected.")
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
}), ns = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", as = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, ls = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function yt(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [ns, as[l], ls[n], e.class].filter(Boolean).join(" ");
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
      () => yt({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(Ae(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(n.value)
    }, {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), os = { class: "flex items-center gap-2" }, ss = ["onUpdate:modelValue", "onChange"], rs = ["value"], is = ["onUpdate:modelValue"], ds = ["value"], us = ["onUpdate:modelValue"], cs = ["onUpdate:modelValue", "multiple"], fs = ["value"], ms = ["onUpdate:modelValue", "type"], ps = ["aria-label", "onClick"], vs = { class: "flex items-center gap-2" }, gs = /* @__PURE__ */ L({
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
      ($) => {
        i.value = $ ? structuredClone($) : s();
      }
    );
    const d = ($) => "rules" in $, u = y(() => Object.keys(n.fields));
    function f($) {
      const m = $ ? n.fields[$]?.kind : void 0;
      return m ? n.operators[m] ?? [] : [];
    }
    const g = {
      is: "is",
      is_not: "is not",
      is_any_of: "is any of",
      is_none_of: "is none of",
      before: "is before",
      after: "is after",
      between: "is between"
    };
    function v() {
      r("update:modelValue", i.value);
    }
    function h() {
      const $ = u.value[0];
      i.value.rules.push({
        field: $,
        operator: f($)[0],
        value: void 0
      }), v();
    }
    function w() {
      i.value.rules.push(s()), v();
    }
    function b($) {
      i.value.rules.splice($, 1), v();
    }
    function C($) {
      $.operator = f($.field)[0], $.value = void 0, v();
    }
    const B = y(() => n.depth + 1 < n.maxDepth);
    function M() {
      i.value = s(), v(), r("apply", null);
    }
    function A() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return ($, m) => {
      const p = Gt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", os, [
          pe(o("select", {
            "onUpdate:modelValue": m[0] || (m[0] = (_) => i.value.logic = _),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: v
          }, [...m[1] || (m[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ze, i.value.logic]
          ]),
          m[2] || (m[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, j(i.value.rules, (_, T) => (t(), a("div", {
          key: T,
          class: "flex items-start gap-2"
        }, [
          d(_) ? (t(), D(p, {
            key: 0,
            modelValue: i.value.rules[T],
            "onUpdate:modelValue": [(F) => i.value.rules[T] = F, v],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (F) => _.field = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (F) => C(_)
            }, [
              (t(!0), a(P, null, j(u.value, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(e.fields[F].label), 9, rs))), 128))
            ], 40, ss), [
              [Ze, _.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (F) => _.operator = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: v
            }, [
              (t(!0), a(P, null, j(f(_.field), (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(g[F] ?? F), 9, ds))), 128))
            ], 40, is), [
              [Ze, _.operator]
            ]),
            _.field && e.fields[_.field]?.kind === "boolean" ? pe((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (F) => _.value = F,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, [...m[3] || (m[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, us)), [
              [Ze, _.value]
            ]) : _.field && e.fields[_.field]?.options?.length ? pe((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (F) => _.value = F,
              multiple: e.fields[_.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, [
              (t(!0), a(P, null, j(e.fields[_.field].options, (F) => (t(), a("option", {
                key: F,
                value: F
              }, c(F), 9, fs))), 128))
            ], 40, cs)), [
              [Ze, _.value]
            ]) : pe((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (F) => _.value = F,
              type: _.field && e.fields[_.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, null, 40, ms)), [
              [ia, _.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(_) ? "group" : "rule"}`,
            onClick: (F) => b(T)
          }, " × ", 8, ps)
        ]))), 128)),
        o("div", vs, [
          E(de, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: O(() => [...m[4] || (m[4] = [
              H("Add rule", -1)
            ])]),
            _: 1
          }),
          B.value ? (t(), D(de, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: w
          }, {
            default: O(() => [...m[5] || (m[5] = [
              H(" Add group ", -1)
            ])]),
            _: 1
          })) : x("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            m[8] || (m[8] = o("span", { class: "flex-1" }, null, -1)),
            E(de, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: O(() => [...m[6] || (m[6] = [
                H(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(de, {
              type: "button",
              size: "sm",
              onClick: A
            }, {
              default: O(() => [...m[7] || (m[7] = [
                H(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : x("", !0)
        ])
      ], 2);
    };
  }
}), en = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(Mn), re({ "data-slot": "sheet" }, k(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
});
function ne(...e) {
  return fl(cl(e));
}
function T3(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const hs = /* @__PURE__ */ L({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Wt), re({
      "data-slot": "sheet-overlay",
      class: k(ne)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tn = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Zt), null, {
      default: O(() => [
        E(hs),
        E(k(Jt), re({
          "data-slot": "sheet-content",
          class: k(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...d.$attrs, ...k(i) }), {
          default: O(() => [
            G(d.$slots, "default"),
            E(k(Xe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: O(() => [
                E(k(Yt), { class: "size-4" }),
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
}), bs = { class: "flex flex-col gap-2" }, ys = { class: "flex items-center gap-2 md:hidden" }, xs = { class: "relative min-w-0 flex-1" }, ks = ["placeholder", "title", "aria-label"], $s = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, ws = { class: "flex max-h-[85vh] flex-col" }, Cs = { class: "flex-1 overflow-y-auto px-4 py-3" }, Ss = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Ms = { class: "text-xs font-medium" }, Bs = ["value", "onChange"], As = ["value"], zs = { class: "mb-4" }, _s = { class: "flex flex-col gap-1" }, Ps = ["disabled", "onClick"], Ls = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Os = {
  key: 1,
  class: "mb-4"
}, js = { class: "flex flex-col gap-1" }, Vs = ["onClick"], Ds = { class: "border-t p-4" }, Ts = ["disabled"], Is = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Es = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Fs = ["placeholder", "title", "aria-label"], Ns = ["aria-label"], Rs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Us = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Hs = { class: "text-xs font-medium" }, Ks = ["value", "onChange"], qs = ["value"], Gs = { class: "grid grid-cols-2 gap-2" }, Ws = ["value", "onChange"], Zs = ["value", "onChange"], Js = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ys = ["value", "onChange"], Qs = ["value", "onChange"], Xs = {
  key: 4,
  class: "flex items-center gap-2"
}, er = ["aria-checked", "onClick"], tr = { class: "text-xs" }, nr = ["onClick"], ar = ["value", "onChange"], lr = ["value"], or = ["disabled", "onClick"], sr = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, rr = ["disabled", "onClick"], ir = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, dr = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, ur = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, cr = ["aria-pressed", "aria-label", "title", "onClick"], fr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, mr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, pr = ["aria-pressed", "aria-label", "title"], vr = ["aria-label", "title"], gr = { class: "flex flex-col gap-0.5 p-1" }, hr = ["onClick"], br = ["onClick"], yr = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, xr = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, kr = ["dusk"], $r = ["aria-label", "onClick"], wr = /* @__PURE__ */ L({
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
    const f = y(
      () => n.filterSchema.filter(
        (R) => n.filters[R.key] !== null && n.filters[R.key] !== void 0
      ).length
    ), g = y(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), v = y(() => n.search !== "" || f.value > 0), h = y(() => n.indicators.length ? n.indicators : n.filterSchema.filter((R) => n.filters[R.key] !== null && n.filters[R.key] !== void 0).map((R) => ({
      key: R.key,
      label: `${R.label}: ${String(n.filters[R.key])}`,
      removable: !0
    })));
    function w(R) {
      r("group", R);
    }
    function b(R) {
      r("clear-filter", R);
    }
    function C(R) {
      return R.type === "multiselect";
    }
    function B(R) {
      const S = u.value[R.key];
      return Array.isArray(S) ? S : S == null ? [] : [S];
    }
    function M(R) {
      return B(R).filter(
        (S) => typeof S == "string" || typeof S == "number"
      );
    }
    function A(R) {
      return N(R).flatMap(
        (S) => typeof S.value == "string" || typeof S.value == "number" ? [{ value: S.value, label: S.label }] : []
      );
    }
    function $(R, S) {
      u.value = { ...u.value, [R.key]: S === "" ? null : S };
    }
    function m(R, S) {
      const I = u.value[R.key];
      if (typeof I != "string" || !I.includes(".."))
        return "";
      const [V, Q] = I.split("..");
      return S === "from" ? V ?? "" : Q ?? "";
    }
    function p(R, S, I) {
      const V = S === "from" ? I : m(R, "from"), Q = S === "to" ? I : m(R, "to");
      u.value = {
        ...u.value,
        [R.key]: V && Q ? `${V}..${Q}` : null
      };
    }
    function _(R, S, I) {
      const V = S === "from" ? I : m(R, "from"), Q = S === "to" ? I : m(R, "to");
      u.value = {
        ...u.value,
        [R.key]: V || Q ? `${V}..${Q}` : null
      };
    }
    function T(R) {
      r("apply-filters", { ...u.value }), R();
    }
    function F(R, S) {
      u.value[R] = S, r("apply-filters", { ...u.value });
    }
    function Y() {
      u.value = Object.fromEntries(n.filterSchema.map((R) => [R.key, null]));
    }
    function N(R) {
      return R.type === "boolean" ? [
        { value: !0, label: R.trueLabel ?? "Yes" },
        { value: !1, label: R.falseLabel ?? "No" }
      ] : R.type === "daterange" ? Object.entries(R.presets ?? {}).map(([S, I]) => ({
        value: S,
        label: I
      })) : (R.options ?? []).map(
        (S) => typeof S == "object" && S !== null && "value" in S ? { value: S.value, label: S.label } : { value: S, label: String(S) }
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
      const S = new Set(W.value);
      S.has(R) ? S.delete(R) : S.add(R), W.value = S, r("apply-columns", [...S]);
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
    return (R, S) => (t(), a("div", bs, [
      o("div", ys, [
        o("div", xs, [
          S[9] || (S[9] = o("svg", {
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
            "onUpdate:modelValue": S[0] || (S[0] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, ks), [
            [ze, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: S[1] || (S[1] = (I) => s.value = !0)
        }, [
          S[10] || (S[10] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          S[11] || (S[11] = H(" Tools ", -1)),
          f.value ? (t(), a("span", $s, c(f.value), 1)) : x("", !0)
        ]),
        E(en, {
          open: s.value,
          "onUpdate:open": S[4] || (S[4] = (I) => s.value = I)
        }, {
          default: O(() => [
            E(tn, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", ws, [
                  S[16] || (S[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Cs, [
                    e.filterSchema.length ? (t(), a("div", Ss, [
                      o("div", { class: "flex items-center justify-between" }, [
                        S[12] || (S[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: Y
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, j(e.filterSchema, (I) => (t(), a("div", {
                        key: `mobile-${I.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ms, c(I.label), 1),
                        I.type !== "multiselect" && I.type !== "querybuilder" && I.type !== "daterange" && I.type !== "numberrange" && I.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[I.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => $(I, V.target.value)
                        }, [
                          S[13] || (S[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, j(N(I), (V) => (t(), a("option", {
                            key: String(V.value),
                            value: V.value
                          }, c(V.label), 9, As))), 128))
                        ], 40, Bs)) : x("", !0)
                      ]))), 128))
                    ])) : x("", !0),
                    o("div", zs, [
                      S[14] || (S[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", _s, [
                        (t(!0), a(P, null, j(e.columns, (I) => (t(), a("button", {
                          key: `mobile-col-${I.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: I.locked,
                          onClick: (V) => Z(I.key)
                        }, [
                          o("span", null, c(I.label), 1),
                          W.value.has(I.key) ? x("", !0) : (t(), a("span", Ls, "On"))
                        ], 8, Ps))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Os, [
                      S[15] || (S[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", js, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: S[2] || (S[2] = (I) => {
                            w(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, j(e.groups, (I) => (t(), a("button", {
                          key: I.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            w(I.key), s.value = !1;
                          }
                        }, c(I.label), 9, Vs))), 128))
                      ])
                    ])) : x("", !0)
                  ]),
                  o("div", Ds, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: K
                    }, " Apply filters ", 8, Ts)) : x("", !0),
                    v.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: S[3] || (S[3] = (I) => {
                        U(), s.value = !1;
                      })
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
      o("div", Is, [
        o("div", Es, [
          S[18] || (S[18] = o("svg", {
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
            "onUpdate:modelValue": S[5] || (S[5] = (I) => i.value = I),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, Fs), [
            [ze, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: S[6] || (S[6] = (I) => i.value = "")
          }, [...S[17] || (S[17] = [
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
        e.filterSchema.length ? (t(), D(qe, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", f.value ? "border-primary text-primary" : ""]),
              "aria-label": f.value ? `Filters (${f.value} active)` : "Filters",
              title: "Filters"
            }, [
              S[19] || (S[19] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              f.value ? (t(), a("span", Rs, c(f.value), 1)) : x("", !0)
            ], 10, Ns)
          ]),
          panel: O(({ close: I }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              S[20] || (S[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: Y
              }, " Reset ")
            ]),
            S[23] || (S[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Us, [
              (t(!0), a(P, null, j(e.filterSchema, (V) => (t(), a("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Hs, c(V.label), 1),
                C(V) ? (t(), D(Xt, {
                  key: 0,
                  "model-value": M(V),
                  options: A(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Q) => u.value[V.key] = Q.length ? Q : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), D(gs, {
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
                    onChange: (Q) => $(V, Q.target.value)
                  }, [
                    S[21] || (S[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, j(N(V), (Q) => (t(), a("option", {
                      key: String(Q.value),
                      value: Q.value
                    }, c(Q.label), 9, qs))), 128))
                  ], 40, Ks),
                  o("div", Gs, [
                    o("input", {
                      type: "date",
                      value: m(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => p(
                        V,
                        "from",
                        Q.target.value
                      )
                    }, null, 40, Ws),
                    o("input", {
                      type: "date",
                      value: m(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Q) => p(
                        V,
                        "to",
                        Q.target.value
                      )
                    }, null, 40, Zs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), a("div", Js, [
                  o("input", {
                    type: "number",
                    value: m(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => _(
                      V,
                      "from",
                      Q.target.value
                    )
                  }, null, 40, Ys),
                  o("input", {
                    type: "number",
                    value: m(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Q) => _(
                      V,
                      "to",
                      Q.target.value
                    )
                  }, null, 40, Qs)
                ])) : V.type === "boolean" ? (t(), a("div", Xs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Q) => $(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, er),
                  o("span", tr, c(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Q) => $(V, u.value[V.key] === !1 ? null : !1)
                  }, c(V.falseLabel ?? "No") + " only ", 11, nr)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Q) => $(V, Q.target.value)
                }, [
                  S[22] || (S[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, j(N(V), (Q) => (t(), a("option", {
                    key: String(Q.value),
                    value: Q.value
                  }, c(Q.label), 9, lr))), 128))
                ], 40, ar))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (V) => T(I)
            }, " Apply filters ", 8, or)
          ]),
          _: 1
        })) : x("", !0),
        E(qe, { "dismiss-on-panel-click": !1 }, {
          trigger: O(() => [...S[24] || (S[24] = [
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
            S[27] || (S[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", sr, [
              (t(!0), a(P, null, j(e.columns, (I) => (t(), a("button", {
                key: I.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", I.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: I.locked,
                onClick: (V) => Z(I.key)
              }, [
                W.value.has(I.key) ? (t(), a("span", dr)) : (t(), a("svg", ir, [...S[25] || (S[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                H(" " + c(I.label), 1)
              ], 10, rr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: J
              }, [...S[26] || (S[26] = [
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
        e.layouts.length > 1 ? (t(), a("div", ur, [
          (t(!0), a(P, null, j(e.layouts, (I) => (t(), a("button", {
            key: I,
            type: "button",
            class: z(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === I ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === I,
            "aria-label": I === "cards" ? "Card layout" : "Table layout",
            title: I === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", I)
          }, [
            I === "table" ? (t(), a("svg", fr, [...S[28] || (S[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), a("svg", mr, [...S[29] || (S[29] = [
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
          ], 10, cr))), 128))
        ])) : x("", !0),
        e.reorderable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: S[7] || (S[7] = (I) => r("toggle-reorder"))
        }, [...S[30] || (S[30] = [
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
        ])], 10, pr)) : x("", !0),
        e.groups.length ? (t(), D(qe, {
          key: 3,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...S[31] || (S[31] = [
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
            ])], 10, vr)
          ]),
          panel: O(({ close: I }) => [
            o("div", gr, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  w(null), I();
                }
              }, " No grouping ", 10, hr),
              (t(!0), a(P, null, j(e.groups, (V) => (t(), a("button", {
                key: V.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (Q) => {
                  w(V.key), I();
                }
              }, c(V.label), 11, br))), 128))
            ])
          ]),
          _: 1
        })) : x("", !0),
        v.value ? (t(), a("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: U
        }, " Clear ")) : x("", !0),
        e.loading ? (t(), a("span", yr, "Loading…")) : x("", !0)
      ]),
      h.value.length ? (t(), a("div", xr, [
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
          }, [...S[32] || (S[32] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, $r)) : x("", !0)
        ], 8, kr))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: S[8] || (S[8] = (I) => r("clear-filters"))
        }, " Clear all ")) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), Cr = { class: "min-w-0" }, Sr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Mr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Br = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, Ar = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, zr = { class: "w-full border-collapse text-sm" }, _r = { class: "bg-muted/40" }, Pr = { class: "divide-y" }, Lr = ["href"], Or = {
  key: 1,
  class: "text-muted-foreground"
}, jr = {
  key: 0,
  class: "flex justify-center"
}, Vr = ["disabled"], Dr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Tr = ["href"], I3 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = qt(), i = y(() => n.columns.filter((w) => w.type !== "image")), d = y(() => !!s.actions), u = y(() => !!n.title || d.value), f = y(() => n.filterSchema.length > 0), g = y(
      () => n.columns.map((w) => ({ key: w.key, label: w.label, locked: !0 }))
    );
    function v(w, b) {
      return b == null || b === "" ? "None" : w.type === "date" || w.type === "datetime" ? new Date(String(b)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...w.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof b == "number" ? new Intl.NumberFormat().format(b) : String(b);
    }
    function h(w) {
      return w == null || w === "";
    }
    return (w, b) => (t(), D(qo, null, rt({
      default: O(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Br, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), D(Et, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, rt({ _: 2 }, [
          w.$slots.illustration ? {
            name: "illustration",
            fn: O(() => [
              G(w.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          w.$slots["empty-actions"] ? {
            name: "actions",
            fn: O(() => [
              G(w.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", Ar, [
          o("table", zr, [
            o("thead", _r, [
              o("tr", null, [
                (t(!0), a(P, null, j(i.value, (C) => (t(), a("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", Pr, [
              (t(!0), a(P, null, j(e.rows, (C, B) => (t(), a("tr", {
                key: C.id ?? B,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, j(i.value, (M) => (t(), a("td", {
                  key: M.key,
                  class: z(["px-3 whitespace-nowrap", [
                    M.mono ? "font-mono text-xs" : "",
                    M.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  G(w.$slots, `cell:${M.key}`, {
                    row: C,
                    value: C[M.key],
                    column: M
                  }, () => [
                    e.recordBase && C.id != null && M === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(v(M, C[M.key])), 9, Lr)) : h(C[M.key]) ? (t(), a("span", Or, " None ")) : (t(), a(P, { key: 2 }, [
                      H(c(v(M, C[M.key])), 1)
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
          o("div", Cr, [
            e.title ? (t(), a("h3", Sr, c(e.title), 1)) : x("", !0)
          ]),
          d.value ? (t(), a("div", Mr, [
            G(w.$slots, "actions")
          ])) : x("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: O(() => [
          E(wr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
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
          e.nextCursor ? (t(), a("div", jr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[6] || (b[6] = (C) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Vr)
          ])) : e.capped ? (t(), a("p", Dr, [
            H(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Tr)) : (t(), a(P, { key: 1 }, [
              H("Open the full list to search or filter the rest.")
            ], 64))
          ])) : x("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Ir = { class: "flex items-center gap-2 overflow-x-auto" }, Er = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fr = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nr = { class: "flex flex-col" }, Rr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ur = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Hr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Kr = /* @__PURE__ */ L({
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
    return (f, g) => (t(), a("ol", Ir, [
      (t(!0), a(P, null, j(e.steps, (v, h) => (t(), a("li", {
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
          onClick: (w) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: O(() => [
            o("span", {
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), a("svg", Er, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", Fr, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                H(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Nr, [
              o("span", null, c(v.label), 1),
              v.description ? (t(), a("span", Rr, c(v.description), 1)) : x("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", Ur)) : x("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", Hr)) : x("", !0)
      ]))), 128))
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function xe(e, l) {
  ft.set(e, l);
}
function qr(e) {
  return ft.get(e);
}
function E3(e) {
  return ft.has(e);
}
function F3() {
  return [...ft.keys()].sort();
}
function N3() {
  ft.clear();
}
class Gr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function R3(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [n, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[n] = s);
  }
  return l;
}
function Wr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Zr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const U3 = "text-sm text-muted-foreground font-normal", H3 = "text-xs text-muted-foreground font-normal", ht = "text-xs text-muted-foreground font-normal leading-snug", Jr = "text-foreground font-normal", Yr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Jr} ${Yr}`, Qr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Xr = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(dt, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: u[1] || (u[1] = (f) => r("close"))
    }, {
      footer: O(() => [
        E(de, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (f) => r("close"))
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
          e.generalError ? (t(), a("p", Qr, c(e.generalError), 1)) : x("", !0),
          (t(!0), a(P, null, j(e.fields, (f) => (t(), D(Ge, {
            key: f.key,
            field: f,
            value: s.value[f.key],
            error: e.errors[f.key],
            processing: e.processing,
            onChange: (g) => s.value[f.key] = g
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), ei = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(ga), re({ "data-slot": "checkbox" }, k(i), {
      class: k(ne)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O((f) => [
        E(k(ha), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: O(() => [
            G(d.$slots, "default", Le(Ne(f)), () => [
              E(k(Ln), { class: "size-3.5" })
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
    return (i, d) => (t(), D(k(ba), re({ "data-slot": "switch" }, k(s), {
      class: k(ne)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: O(() => [
        E(k(ya), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ti = ["accept", "disabled"], ni = { class: "text-sm font-medium" }, ai = { key: 0 }, li = { key: 1 }, oi = { class: "text-muted-foreground text-xs font-normal" }, si = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, ri = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ii = ["src"], di = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ui = { class: "min-w-0 flex-1" }, ci = { class: "block truncate text-sm font-medium" }, fi = { class: "text-muted-foreground text-xs font-normal" }, mi = ["href"], pi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, Tn = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(null), i = q(!1), d = q(null), u = q(null), f = q(null), g = y(() => n.accept.map((m) => `.${m}`).join(",")), v = y(() => f.value ?? n.modelValue?.url ?? null), h = y(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${w(n.maxKilobytes * 1024)}`);
    function w(m) {
      if (!m)
        return "";
      const p = ["B", "KB", "MB", "GB"];
      let _ = m, T = 0;
      for (; _ >= 1024 && T < p.length - 1; )
        _ /= 1024, T++;
      return `${_.toFixed(_ < 10 && T > 0 ? 1 : 0)} ${p[T]}`;
    }
    function b(m) {
      return m.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(m) {
      return n.accept.length && !n.accept.includes(b(m.name)) ? `${b(m.name).toUpperCase() || "That"} files are not accepted here.` : m.size > n.maxKilobytes * 1024 ? `That file is ${w(m.size)}; the limit is ${w(n.maxKilobytes * 1024)}.` : null;
    }
    async function B(m) {
      const p = m?.[0];
      if (!(!p || n.disabled) && (u.value = C(p), !u.value)) {
        M(), n.image && p.type.startsWith("image/") && (f.value = URL.createObjectURL(p)), d.value = 0;
        try {
          const _ = await n.upload(p, (T) => {
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
    async function A() {
      const m = n.modelValue;
      M(), u.value = null, r("update:modelValue", null), m && !m.url && n.discard && await n.discard(m.value).catch(() => {
      });
    }
    function $(m) {
      i.value = !1, B(m.dataTransfer?.files ?? null);
    }
    return (m, p) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ri, [
        e.image && v.value ? (t(), a("img", {
          key: 0,
          src: v.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ii)) : (t(), a("span", di, c(b(e.modelValue.name) || "file"), 1)),
        o("span", ui, [
          o("span", ci, c(e.modelValue.name), 1),
          o("span", fi, [
            H(c(w(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              p[4] || (p[4] = H(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, mi)
            ], 64)) : (t(), a(P, { key: 1 }, [
              H(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? x("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: A
        }, [...p[5] || (p[5] = [
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
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: p[1] || (p[1] = ve((_) => i.value = !0, ["prevent"])),
        onDragleave: p[2] || (p[2] = ve((_) => i.value = !1, ["prevent"])),
        onDrop: ve($, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: p[0] || (p[0] = (_) => B(_.target.files))
        }, null, 40, ti),
        p[3] || (p[3] = o("svg", {
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
        o("span", ni, [
          d.value === null ? (t(), a("span", ai, "Drop a file or click to choose")) : (t(), a("span", li, "Uploading…"))
        ]),
        o("span", oi, c(h.value), 1),
        d.value !== null ? (t(), a("span", si, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : x("", !0)
      ], 34)),
      u.value ? (t(), a("p", pi, c(u.value), 1)) : x("", !0)
    ]));
  }
}), vi = { class: "flex flex-col gap-2" }, gi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, hi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, bi = { class: "flex flex-col gap-1" }, yi = ["onUpdate:modelValue", "disabled", "aria-label"], xi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, ki = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, $i = ["onUpdate:modelValue", "disabled", "aria-label"], wi = ["disabled", "aria-label", "onClick"], Ci = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Si = { class: "flex items-center gap-3" }, Mi = ["disabled"], Bi = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Ai = /* @__PURE__ */ L({
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
    function u(B) {
      return B ? Object.entries(B).map(([M, A]) => ({
        uid: i++,
        key: M,
        value: A ?? ""
      })) : [];
    }
    fe(
      () => n.modelValue,
      (B) => {
        JSON.stringify(B ?? null) !== JSON.stringify(f()) && (d.value = u(B));
      }
    );
    function f() {
      const B = {};
      for (const M of d.value) {
        const A = M.key.trim();
        A !== "" && (B[A] = M.value);
      }
      return Object.keys(B).length ? B : null;
    }
    function g() {
      r("update:modelValue", f());
    }
    const v = y(() => {
      const B = /* @__PURE__ */ new Map();
      for (const M of d.value) {
        const A = M.key.trim();
        A !== "" && B.set(A, (B.get(A) ?? 0) + 1);
      }
      return new Set([...B.entries()].filter(([, M]) => M > 1).map(([M]) => M));
    }), h = y(
      () => new Set(
        d.value.map((B) => B.key.trim()).filter((B) => B !== "" && !s.test(B))
      )
    ), w = y(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function b() {
      w.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(B) {
      d.value = d.value.filter((M) => M.uid !== B), g();
    }
    return (B, M) => (t(), a("div", vi, [
      d.value.length ? (t(), a("div", gi, [
        o("div", hi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, j(d.value, (A) => (t(), a("div", {
          key: A.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", bi, [
            pe(o("input", {
              "onUpdate:modelValue": ($) => A.key = $,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                v.value.has(A.key.trim()) || h.value.has(A.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, yi), [
              [ze, A.key]
            ]),
            h.value.has(A.key.trim()) ? (t(), a("p", xi, " Letters, numbers, underscores and dashes only. ")) : v.value.has(A.key.trim()) ? (t(), a("p", ki, " Used twice - only the last value will be saved. ")) : x("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": ($) => A.value = $,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, $i), [
            [ze, A.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${A.key || "this entry"}`,
            onClick: ($) => C(A.uid)
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
          ])], 8, wi)
        ]))), 128))
      ])) : (t(), a("p", Ci, " Nothing here yet. ")),
      o("div", Si, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || w.value,
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
          H(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Mi),
        e.maxPairs !== null ? (t(), a("p", Bi, c(d.value.length) + " of " + c(e.maxPairs), 1)) : x("", !0)
      ])
    ]));
  }
}), zi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, _i = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Pi = ["disabled", "title", "aria-label", "onClick"], Li = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oi = ["d"], ji = ["disabled"], Vi = ["contenteditable", "data-placeholder"], Di = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Ti = /* @__PURE__ */ L({
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
    ], u = y(() => d.filter((C) => n.toolbar.includes(C.id))), f = y(() => n.toolbar.includes("link")), g = q(0);
    function v() {
      const C = s.value?.innerHTML ?? "", B = (s.value?.innerText ?? "").trim();
      g.value = B.length;
      const M = B === "" ? null : C;
      i = M, r("update:modelValue", M);
    }
    function h(C) {
      n.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), v());
    }
    function w() {
      if (n.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), v());
    }
    function b(C) {
      C.preventDefault();
      const B = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, B), v();
    }
    return ge(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), fe(
      () => n.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", g.value = s.value.innerText.trim().length);
      }
    ), (C, B) => (t(), a("div", zi, [
      o("div", _i, [
        (t(!0), a(P, null, j(u.value, (M) => (t(), a("button", {
          key: M.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: M.label,
          "aria-label": M.label,
          onMousedown: B[0] || (B[0] = ve(() => {
          }, ["prevent"])),
          onClick: (A) => h(M)
        }, [
          (t(), a("svg", Li, [
            o("path", {
              d: M.path
            }, null, 8, Oi)
          ]))
        ], 40, Pi))), 128)),
        f.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: B[1] || (B[1] = ve(() => {
          }, ["prevent"])),
          onClick: w
        }, [...B[2] || (B[2] = [
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
        ])], 40, ji)) : x("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: z(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: v,
        onBlur: v,
        onPaste: b
      }, null, 42, Vi),
      e.maxLength !== null ? (t(), a("div", Di, c(g.value) + " / " + c(e.maxLength), 1)) : x("", !0)
    ]));
  }
}), Ii = /* @__PURE__ */ Bt(Ti, [["__scopeId", "data-v-32c63bc7"]]), Ei = ["role"], Fi = ["title"], Ni = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Ri = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ui = ["d"], Hi = { key: 1 }, Ki = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, In = /* @__PURE__ */ L({
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
    function g(m) {
      return s.value ? f.value.some((p) => p == m.value) : n.modelValue != null && m.value == n.modelValue;
    }
    function v(m) {
      if (!n.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            g(m) ? f.value.filter((p) => p != m.value) : [...f.value, m.value]
          );
          return;
        }
        r("update:modelValue", m.value);
      }
    }
    function h(m) {
      return n.field.colors?.[String(m.value)] ?? "primary";
    }
    function w(m) {
      const p = n.field.icons?.[String(m.value)];
      return p ? ce(p) : null;
    }
    function b(m) {
      return n.field.tooltips?.[String(m.value)] ?? m.label;
    }
    const C = {
      primary: "border-primary bg-primary text-primary-foreground",
      success: "border-success bg-success text-white",
      warning: "border-warning bg-warning text-white",
      danger: "border-destructive bg-destructive text-white",
      info: "border-info bg-info text-white",
      neutral: "border-foreground bg-foreground text-background"
    }, B = {
      primary: "border-input hover:border-primary/60 hover:bg-primary/5",
      success: "border-input hover:border-success/60 hover:bg-success/5",
      warning: "border-input hover:border-warning/60 hover:bg-warning/5",
      danger: "border-input hover:border-destructive/60 hover:bg-destructive/5",
      info: "border-input hover:border-info/60 hover:bg-info/5",
      neutral: "border-input hover:border-foreground/40 hover:bg-muted"
    };
    function M(m) {
      const p = h(m), _ = g(m);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        _ ? C[p] ?? C.primary : B[p] ?? B.primary,
        n.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const A = y(() => {
      if (!(u.value || i.value) && n.field.columns && n.field.columns > 1)
        return { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` };
    }), $ = y(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (m, p) => (t(), a("div", {
      role: s.value ? "group" : "radiogroup",
      class: z($.value),
      style: se(A.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), a(P, null, j(e.options, (_) => (t(), a("label", {
        key: String(_.value),
        class: z(M(_)),
        title: b(_)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: _.value,
          checked: g(_),
          disabled: e.disabled,
          "aria-label": d.value ? _.label : void 0,
          onChange: (T) => v(_)
        }, null, 40, Ni),
        w(_) ? (t(), a("svg", Ri, [
          o("path", {
            d: w(_)
          }, null, 8, Ui)
        ])) : x("", !0),
        d.value ? x("", !0) : (t(), a("span", Hi, c(_.label), 1))
      ], 10, Fi))), 128)),
      e.options.length === 0 ? (t(), a("p", Ki, " Nothing to choose from yet. ")) : x("", !0)
    ], 14, Ei));
  }
}), qi = {
  key: 1,
  class: "flex flex-col gap-2"
}, Gi = { class: "flex items-center justify-between gap-2" }, Wi = ["for"], Zi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ji = ["aria-label", "disabled"], Yi = {
  key: 7,
  class: "flex flex-col gap-2"
}, Qi = ["id", "value", "disabled"], Xi = ["value"], ed = {
  key: 2,
  class: "relative"
}, td = ["disabled"], nd = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ad = { class: "max-h-56 overflow-y-auto p-1" }, ld = ["onClick"], od = {
  key: 8,
  class: "relative"
}, sd = ["disabled", "aria-invalid"], rd = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, id = { class: "max-h-56 overflow-y-auto p-1" }, dd = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ud = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, cd = ["onClick"], fd = ["id", "value", "disabled", "aria-invalid"], md = ["value"], pd = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, vd = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, gd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], hd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, bd = ["aria-label", "disabled"], yd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], xd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, kd = ["aria-label", "disabled"], $d = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], wd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Cd = ["aria-label", "disabled"], Sd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Md = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Bd = ["aria-label", "disabled"], Ad = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, zd = ["disabled", "aria-pressed", "onClick"], _d = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Pd = ["title", "disabled", "onClick"], Ld = ["href"], Od = {
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
    const n = cn(() => import("./PkRepeater-J84jGe3T.js")), r = cn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = q(!1), u = q(""), f = q([]), g = q(!1), v = q(null);
    let h;
    fe(u, (oe) => {
      s.searchOptions && (clearTimeout(h), g.value = !0, h = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(oe);
        } catch {
        } finally {
          g.value = !1;
        }
      }, 200));
    });
    async function w() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, f.value.length === 0 && s.searchOptions)) {
        g.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          g.value = !1;
        }
      }
    }
    function b(oe) {
      v.value = oe.label, i("change", oe.value), d.value = !1, u.value = "";
    }
    function C() {
      v.value = null, i("change", null);
    }
    const B = xt("panelPicker", null), M = xt("panelCreateOption", null), A = q(!1), $ = q(!1), m = q({}), p = q(null), _ = y(() => Wr(s.field)), T = y(() => Zr(s.field));
    function F() {
      m.value = {}, p.value = null, A.value = !0, d.value = !1;
    }
    function Y() {
      $.value || (A.value = !1, m.value = {}, p.value = null);
    }
    async function N(oe) {
      if (M) {
        $.value = !0, m.value = {}, p.value = null;
        try {
          const ee = await M.run(s.field.key, { ...oe });
          b(ee), A.value = !1;
        } catch (ee) {
          ee instanceof Gr ? (m.value = ee.fieldErrors, p.value = Object.keys(ee.fieldErrors).length === 0 ? ee.message : null) : p.value = ee instanceof Error ? ee.message : "Could not create that option.";
        } finally {
          $.value = !1;
        }
      }
    }
    const W = y(() => {
      if (!s.field.tableSelect || !B?.base)
        return;
      const oe = B.returnUrl || "/";
      return `${B.base}/pick/${s.field.key}?return=${encodeURIComponent(oe)}`;
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
      v.value = oe.label, U(oe.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const S = y(() => qr(s.field.type)), I = y(
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
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", qi, [
        o("div", Gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            H(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Zi, "*")) : x("", !0)
          ], 10, Wi),
          e.field.hint ? (t(), a("span", {
            key: 0,
            class: z(["flex items-center gap-1", k(ht)])
          }, [
            H(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: ee[0] || (ee[0] = (ae) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Ji)) : x("", !0)
          ], 2)) : x("", !0)
        ]),
        S.value ? (t(), D(Ae(S.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[1] || (ee[1] = (ae) => i("change", ae))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Tn, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": ee[2] || (ee[2] = (ae) => i("change", ae))
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
          "onUpdate:modelValue": ee[3] || (ee[3] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "addable", "deletable", "cloneable", "table", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": ee[4] || (ee[4] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Ii, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[5] || (ee[5] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(Ai, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": ee[6] || (ee[6] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Xt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": ee[7] || (ee[7] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : Z.value.length ? (t(), a("div", Yi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(In, {
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
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
            onChange: ee[9] || (ee[9] = (ae) => K(ae.target.value))
          }, [
            ee[25] || (ee[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, j(Z.value, (ae) => (t(), a("option", {
              key: ae.value,
              value: ae.value
            }, c(ae.label), 9, Xi))), 128))
          ], 42, Qi)),
          J.value.type && e.searchOptions ? (t(), a("div", ed, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: w
            }, [
              o("span", {
                class: z(v.value || J.value.id ? "" : "text-muted-foreground")
              }, c(v.value ?? (J.value.id ? String(J.value.id) : "Search…")), 3)
            ], 10, td),
            d.value ? (t(), a("div", nd, [
              pe(o("input", {
                "onUpdate:modelValue": ee[10] || (ee[10] = (ae) => u.value = ae),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [ze, u.value]
              ]),
              o("div", ad, [
                (t(!0), a(P, null, j(f.value, (ae) => (t(), a("button", {
                  key: String(ae.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => R(ae)
                }, c(ae.label), 9, ld))), 128))
              ])
            ])) : x("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: ee[11] || (ee[11] = (ae) => d.value = !1)
            })) : x("", !0)
          ])) : x("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", od, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: w
          }, [
            o("span", {
              class: z(v.value || e.value ? "" : "text-muted-foreground")
            }, c(v.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: ve(C, ["stop"])
            }, " ✕ ")) : x("", !0)
          ], 10, sd),
          d.value ? (t(), a("div", rd, [
            pe(o("input", {
              "onUpdate:modelValue": ee[12] || (ee[12] = (ae) => u.value = ae),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [ze, u.value]
            ]),
            o("div", id, [
              g.value ? (t(), a("p", dd, " Searching… ")) : f.value.length === 0 ? (t(), a("p", ud, " No matches ")) : x("", !0),
              (t(!0), a(P, null, j(f.value, (ae) => (t(), a("button", {
                key: String(ae.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => b(ae)
              }, c(ae.label), 9, cd))), 128)),
              e.field.createOption && k(M) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: F
              }, [
                ee[26] || (ee[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                H(" " + c(T.value), 1)
              ])) : x("", !0)
            ])
          ])) : x("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: ee[13] || (ee[13] = (ae) => d.value = !1)
          })) : x("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
          onChange: ee[14] || (ee[14] = (ae) => i("change", ae.target.value || null))
        }, [
          ee[27] || (ee[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, j(e.options, (ae) => (t(), a("option", {
            key: String(ae.value),
            value: ae.value
          }, c(ae.label), 9, md))), 128))
        ], 42, fd)) : e.field.type === "toggle" ? (t(), a("label", pd, [
          E(k(Je), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ee[15] || (ee[15] = (ae) => i("change", ae))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(k(ht))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), a("label", vd, [
          E(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": ee[16] || (ee[16] = (ae) => i("change", ae === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(k(ht))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !I.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", k(Ue), k(Se)]),
          onInput: ee[17] || (ee[17] = (ae) => i("change", ae.target.value))
        }, null, 42, gd)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", hd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ee[18] || (ee[18] = (ae) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, bd)) : x("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: z(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", k(Ue)]),
            onInput: ee[19] || (ee[19] = (ae) => i("change", ae.target.value))
          }, null, 42, yd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", xd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ee[20] || (ee[20] = (ae) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, kd)) : x("", !0)
        ], 2)) : I.value ? (t(), a("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", wd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : x("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: ee[22] || (ee[22] = (ae) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Cd)) : x("", !0),
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
            class: z(he),
            onInput: ee[23] || (ee[23] = (ae) => i("change", ae.target.value))
          }, null, 40, Sd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Md, c(e.field.suffix ?? e.field.suffixIcon), 1)) : x("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: ee[24] || (ee[24] = (ae) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Bd)) : x("", !0)
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
          class: z(Q),
          onInput: ee[21] || (ee[21] = (ae) => i("change", ae.target.value))
        }, null, 40, $d)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", Ad, [
          (t(!0), a(P, null, j(e.field.presets, (ae) => (t(), a("button", {
            key: ae,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: z([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              k(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ae ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ae
            ),
            onClick: (Ce) => i("change", String(ae))
          }, c(ae), 11, zd))), 128))
        ])) : x("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", _d, [
          (t(!0), a(P, null, j(e.field.chips, (ae, Ce) => (t(), a("button", {
            key: Ce,
            type: "button",
            title: ae,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (dn) => ye(String(Ce))
          }, c(Ce), 9, Pd))), 128))
        ])) : x("", !0),
        W.value ? (t(), a("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Ld)) : x("", !0),
        e.error ? (t(), a("p", Od, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", {
          key: 20,
          class: z(k(ht))
        }, c(e.field.help), 3)) : x("", !0)
      ])),
      e.field.createOption && k(M) ? (t(), D(Xr, {
        key: 2,
        open: A.value,
        title: _.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: $.value,
        errors: m.value,
        "general-error": p.value,
        onClose: Y,
        onSubmit: N
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : x("", !0)
    ], 64));
  }
}), jd = { class: "flex min-w-0 items-start gap-2.5" }, Vd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Dd = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Td = ["d"], Id = { class: "min-w-0" }, Ed = { class: "text-sm font-semibold" }, Fd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Nd = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Rd = { class: "border-b px-4 py-3.5 sm:px-5" }, Ud = { class: "text-sm font-semibold" }, Hd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Kd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, qd = {
  key: 7,
  class: "flex flex-col gap-3"
}, Gd = { class: "text-sm font-medium" }, Wd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Zd = {
  key: 0,
  class: "mb-1 font-medium"
}, Jd = ["onClick"], Yd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Qd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Xd = ["disabled"], En = /* @__PURE__ */ L({
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
      const m = n.node.persistInQueryString;
      if (!m || typeof window > "u")
        return 0;
      const p = new URLSearchParams(window.location.search).get(m), _ = p === null ? NaN : Number.parseInt(p, 10), T = n.node.children?.length ?? 0;
      return Number.isInteger(_) && _ >= 0 && _ < T ? _ : 0;
    }
    const d = q(n.node.component === "tabs" ? i() : 0), u = q(n.node.component === "wizard" ? i() : 0);
    function f(m, p) {
      if (!m || typeof window > "u")
        return;
      const _ = new URL(window.location.href);
      _.searchParams.set(m, String(p)), window.history.replaceState(window.history.state, "", _);
    }
    fe(d, (m) => f(n.node.persistInQueryString, m)), fe(u, (m) => f(n.node.persistInQueryString, m));
    const g = y(
      () => (n.node.children ?? []).map((m) => ({
        label: m.label ?? "",
        description: m.description
      }))
    ), v = y(() => n.depth === 0), h = y(() => {
      const m = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, p = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        m[n.node.align ?? "start"] ?? "items-start",
        p[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), w = y(() => {
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
    function C(m) {
      const p = m.children?.length ?? 1;
      return p >= 3 ? "md:grid-cols-3" : p === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function B(m = 1) {
      return m >= 4 ? "md:col-span-4" : m === 3 ? "md:col-span-3" : m === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function M(m) {
      const p = [], _ = (T) => {
        T.component === "field" && T.key && p.push(T.key), T.children?.forEach(_);
      };
      return _(m), p.some((T) => n.errors[T]);
    }
    function A(m) {
      if (m.hidden)
        return !1;
      const p = m.visibleWhen;
      return p ? n.values[p.field] == p.value : !0;
    }
    function $(m) {
      if (n.upload)
        return (p, _) => n.upload(m, p, _);
    }
    return (m, p) => {
      const _ = Gt("SchemaNode", !0);
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
        upload: $(e.node.key),
        discard: e.discard,
        onChange: p[0] || (p[0] = (T) => r("change", e.node.key, T)),
        onAffixAction: p[1] || (p[1] = (T) => r("affix-action", e.node.key, T))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && A(e.node) ? (t(), a("section", {
        key: 1,
        class: z(v.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            v.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = (T) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", jd, [
            e.node.icon ? (t(), a("div", Vd, [
              (t(), a("svg", Dd, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, Td)
              ]))
            ])) : x("", !0),
            o("div", Id, [
              o("h3", Ed, c(e.node.label), 1),
              e.node.description ? (t(), a("p", Fd, c(e.node.description), 1)) : x("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), a("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: z(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...p[24] || (p[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : x("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [b.value, v.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            class: z(T.span && T.span >= 2 ? "sm:col-span-2" : ""),
            onChange: p[3] || (p[3] = (Y, N) => r("change", Y, N)),
            onAffixAction: p[4] || (p[4] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "card" && A(e.node) ? (t(), a("section", Nd, [
        o("header", Rd, [
          o("h3", Ud, c(e.node.title), 1),
          e.node.description ? (t(), a("p", Hd, c(e.node.description), 1)) : x("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", b.value])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            onChange: p[5] || (p[5] = (Y, N) => r("change", Y, N)),
            onAffixAction: p[6] || (p[6] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && A(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          class: z(T.component === "column" ? B(T.span) : ""),
          onChange: p[7] || (p[7] = (Y, N) => r("change", Y, N)),
          onAffixAction: p[8] || (p[8] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && A(e.node) ? (t(), a("div", Kd, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: p[9] || (p[9] = (Y, N) => r("change", Y, N)),
          onAffixAction: p[10] || (p[10] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && A(e.node) ? (t(), a("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", b.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: p[11] || (p[11] = (Y, N) => r("change", Y, N)),
          onAffixAction: p[12] || (p[12] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && A(e.node) ? (t(), a("div", {
        key: 6,
        class: z(["flex", h.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
          onChange: p[13] || (p[13] = (Y, N) => r("change", Y, N)),
          onAffixAction: p[14] || (p[14] = (Y, N) => r("affix-action", Y, N))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && A(e.node) ? (t(), a("fieldset", qd, [
        o("legend", Gd, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Wd, c(e.node.description), 1)) : x("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", b.value])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), D(_, {
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
            onChange: p[15] || (p[15] = (Y, N) => r("change", Y, N)),
            onAffixAction: p[16] || (p[16] = (Y, N) => r("affix-action", Y, N))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && A(e.node) ? (t(), a("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", w.value])
      }, [
        e.node.title ? (t(), a("p", Zd, c(e.node.title), 1)) : x("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && A(e.node) ? (t(), a("div", {
        key: 9,
        class: z(v.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", v.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => (t(), a("button", {
            key: F,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              d.value === F ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (Y) => d.value = F
          }, [
            H(c(T.label) + " ", 1),
            M(T) ? (t(), a("span", Yd)) : x("", !0)
          ], 10, Jd))), 128))
        ], 2),
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => pe((t(), a("div", {
          key: F,
          class: z(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(T.children ?? [], (Y, N) => (t(), D(_, {
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
            onChange: p[17] || (p[17] = (W, Z) => r("change", W, Z)),
            onAffixAction: p[18] || (p[18] = (W, Z) => r("affix-action", W, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, d.value === F]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && A(e.node) ? (t(), a("div", {
        key: 10,
        class: z(v.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        E(Kr, {
          class: z(["p-4", v.value ? "border-b" : ""]),
          steps: g.value,
          "active-step": u.value,
          "has-error": (T) => M((e.node.children ?? [])[T]),
          "onUpdate:activeStep": p[19] || (p[19] = (T) => u.value = T)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, j(e.node.children ?? [], (T, F) => pe((t(), a("div", {
          key: F,
          class: z(["flex flex-col gap-5", v.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(T.children ?? [], (Y, N) => (t(), D(_, {
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
            onChange: p[20] || (p[20] = (W, Z) => r("change", W, Z)),
            onAffixAction: p[21] || (p[21] = (W, Z) => r("affix-action", W, Z))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, u.value === F]
        ])), 128)),
        o("div", Qd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: u.value === 0,
            onClick: p[22] || (p[22] = (T) => u.value--)
          }, " Back ", 8, Xd),
          u.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = (T) => u.value++)
          }, " Next ")) : x("", !0)
        ])
      ], 2)) : x("", !0);
    };
  }
}), K3 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(dt, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: u[2] || (u[2] = (f) => r("close"))
    }, {
      footer: O(() => [
        E(de, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (f) => r("close"))
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
          (t(!0), a(P, null, j(e.form?.nodes ?? [], (f, g) => (t(), D(En, {
            key: g,
            node: f,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (v, h) => s.value[v] = h)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), eu = ["title"], tu = ["aria-label"], nu = ["d"], au = { class: "sr-only" }, lu = /* @__PURE__ */ L({
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
    return (g, v) => (t(), a("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), a("svg", {
        viewBox: "0 0 24 24",
        class: z(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: d.value }, null, 8, nu)
      ], 10, tu)),
      o("span", au, c(f.value), 1)
    ], 8, eu));
  }
}), ou = ["aria-label"], su = ["fill"], q3 = /* @__PURE__ */ L({
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
        }, null, 8, su)
      ]))), 128))
    ], 8, ou));
  }
}), ru = ["src"], iu = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, du = /* @__PURE__ */ L({
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
      class: z(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !n.value ? (t(), a("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (f) => n.value = !0)
      }, null, 40, ru)) : e.fallback === "initials" ? (t(), a(P, { key: 1 }, [
        H(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", iu, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : x("", !0)
    ], 2));
  }
}), uu = {
  key: 0,
  class: "text-muted-foreground"
}, cu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, fu = {
  key: 0,
  class: "font-mono text-xs"
}, mu = {
  key: 1,
  class: "sr-only"
}, pu = /* @__PURE__ */ L({
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
    return (s, i) => r.value === null ? (t(), a("span", uu, "-")) : (t(), a("span", cu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), a("span", fu, c(r.value), 1)) : (t(), a("span", mu, c(r.value), 1))
    ]));
  }
}), vu = { class: "inline-flex items-center" }, gu = ["checked", "aria-label"], hu = { class: "sr-only" }, G3 = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("span", vu, [
      o("input", {
        type: "checkbox",
        checked: n.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, gu),
      o("span", hu, c(r.value), 1)
    ]));
  }
}), bu = {
  key: 0,
  class: "text-muted-foreground"
}, yu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, W3 = /* @__PURE__ */ L({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => n.value ? (t(), a("code", yu, c(n.value), 1)) : (t(), a("span", bu, "—"));
  }
}), xu = {
  key: 0,
  class: "font-mono text-xs"
}, ku = {
  key: 1,
  class: "text-muted-foreground"
}, $u = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, Z3 = /* @__PURE__ */ L({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", xu, c(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", ku, "—")) : (t(), a("span", $u, c(n.value.length) + " " + c(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), wu = ["data-variant"], Cu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", We = /* @__PURE__ */ L({
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
      () => [Cu, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      G(s.$slots, "default")
    ], 10, wu));
  }
}), Su = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Mu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, J3 = /* @__PURE__ */ L({
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
            const g = JSON.parse(f);
            if (Array.isArray(g))
              return n(g, u);
          } catch {
          }
        return f.split(u).map((g) => g.trim()).filter((g) => g !== "");
      }
      return [String(d)];
    }
    const r = y(() => n(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Su, "None")) : (t(), a("span", Mu, [
      (t(!0), a(P, null, j(s.value, (f) => (t(), D(We, {
        key: f,
        variant: "secondary"
      }, {
        default: O(() => [
          H(c(f), 1)
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
      })) : x("", !0)
    ]));
  }
}), Bu = ["aria-checked", "aria-label", "title", "disabled"], Au = ["value", "placeholder", "disabled"], zu = ["value", "disabled"], _u = ["value"], Y3 = /* @__PURE__ */ L({
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
    function f(w) {
      const b = w.target.value;
      b !== String(n.value ?? "") && r("change", b);
    }
    function g(w) {
      const C = w.target.value;
      C !== String(n.value ?? "") && r("change", C);
    }
    function v(w) {
      w.target.blur();
    }
    function h(w) {
      const b = w.target;
      b.value = String(n.value ?? ""), b.blur();
    }
    return (w, b) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: ve(u, ["stop"])
    }, [
      o("span", {
        class: z(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Bu)) : e.type === "text" ? (t(), a("input", {
      key: 1,
      type: "text",
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      placeholder: e.placeholder ?? void 0,
      disabled: i.value,
      onClick: b[0] || (b[0] = ve(() => {
      }, ["stop"])),
      onBlur: g,
      onKeydown: [
        Tt(v, ["enter"]),
        Tt(h, ["esc"])
      ]
    }, null, 40, Au)) : (t(), a("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: b[1] || (b[1] = ve(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), a(P, null, j(e.options, (C, B) => (t(), a("option", {
        key: B,
        value: B
      }, c(C), 9, _u))), 128))
    ], 40, zu));
  }
}), nn = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Pu(e) {
  return e != null && e !== "";
}
function Lu(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function Q3(e) {
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
      cellClass: Lu(s),
      group: s.group
    }))
  ), n = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return nn[f] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const Ou = ["disabled", "aria-label", "aria-busy"], ju = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vu = ["d"], Du = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Tu = ["disabled", "onClick"], Iu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Eu = ["d"], Fu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, X3 = /* @__PURE__ */ L({
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
      const w = n.colors[u(h)] ?? n.defaultColor ?? "neutral";
      return nn[w] ?? "outline";
    }
    function g(h) {
      return n.options[h] ?? h;
    }
    function v(h, w) {
      if (s.value || h === i.value) {
        w();
        return;
      }
      r("change", h), w();
    }
    return (h, w) => (t(), a("div", {
      onClick: w[0] || (w[0] = ve(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(We, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: O(() => [
          H(c(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(qe, {
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
                H(c(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", ju, [
              o("path", {
                d: k(ce)("chevron-down")
              }, null, 8, Vu)
            ]))
          ], 8, Ou)
        ]),
        panel: O(({ close: b }) => [
          o("div", Du, c(d.value), 1),
          (t(!0), a(P, null, j(e.options, (C, B) => (t(), a("button", {
            key: B,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => v(String(B), b)
          }, [
            E(We, {
              variant: f(B),
              class: "capitalize"
            }, {
              default: O(() => [
                H(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(B) === i.value ? (t(), a("svg", Iu, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, Eu)
            ])) : (t(), a("span", Fu))
          ], 8, Tu))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Nu = { class: "flex items-center justify-end" }, Ru = ["aria-label"], Uu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Hu = ["d"], Ku = ["href"], qu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Gu = ["d"], Wu = { class: "min-w-0 flex-1 truncate" }, Zu = ["disabled", "onClick"], Ju = ["d"], Yu = { class: "min-w-0 flex-1 truncate" }, Qu = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Xu = ["disabled", "onClick"], ec = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tc = ["d"], nc = { class: "min-w-0 flex-1 truncate" }, ac = /* @__PURE__ */ L({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(null), d = q(null), u = y(() => r.groups.flatMap(($) => $.actions)), f = y(() => u.value.filter(($) => !$.destructive)), g = y(() => u.value.filter(($) => $.destructive)), v = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h($) {
      return v[$.color ?? "gray"] ?? v.gray;
    }
    const w = y(() => u.value.length === 0);
    function b($) {
      s("run", $);
    }
    function C($) {
      if (r.busy !== $.key) {
        if ($.link) {
          $.url && window.location.assign($.url);
          return;
        }
        b($);
      }
    }
    function B($, m) {
      const p = m.toLowerCase().split("+").map((F) => F.trim()), _ = p.at(-1);
      return !_ || $.key.toLowerCase() !== _ ? !1 : ($.ctrlKey || $.metaKey) === p.includes("mod") && $.shiftKey === p.includes("shift") && $.altKey === p.includes("alt");
    }
    function M($) {
      w.value || ($.preventDefault(), i.value?.openAt($.clientX, $.clientY));
    }
    function A($) {
      const m = u.value.find(
        (Y) => (Y.keyBindings ?? []).some((N) => B($, N))
      );
      if (m) {
        $.preventDefault(), C(m);
        return;
      }
      if ($.key !== "ArrowDown" && $.key !== "ArrowUp")
        return;
      const p = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (p.length === 0)
        return;
      $.preventDefault();
      const _ = p.indexOf(document.activeElement), T = $.key === "ArrowDown" ? 1 : -1, F = (_ + T + p.length) % p.length;
      p[F]?.focus();
    }
    return l({ openContextMenu: M }), ($, m) => (t(), a("div", Nu, [
      w.value ? x("", !0) : (t(), D(qe, {
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
            (t(), a("svg", Uu, [
              o("path", {
                d: k(ce)("more-vertical")
              }, null, 8, Hu)
            ]))
          ], 8, Ru)
        ]),
        panel: O(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: A
          }, [
            (t(!0), a(P, null, j(f.value, (p) => (t(), a(P, {
              key: p.key
            }, [
              p.link ? (t(), a("a", {
                key: 0,
                href: p.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(p)])
              }, [
                (t(), a("svg", qu, [
                  o("path", {
                    d: k(Te)(p)
                  }, null, 8, Gu)
                ])),
                o("span", Wu, c(p.label), 1)
              ], 10, Ku)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(p)]),
                disabled: e.busy === p.key,
                onClick: (_) => b(p)
              }, [
                (t(), a("svg", {
                  class: z(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: k(Te)(p)
                  }, null, 8, Ju)
                ], 2)),
                o("span", Yu, c(p.label), 1)
              ], 10, Zu))
            ], 64))), 128)),
            g.value.length ? (t(), a("div", Qu, [
              (t(!0), a(P, null, j(g.value, (p) => (t(), a("button", {
                key: p.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === p.key,
                onClick: (_) => b(p)
              }, [
                (t(), a("svg", ec, [
                  o("path", {
                    d: k(Te)({ ...p, destructive: !0 })
                  }, null, 8, tc)
                ])),
                o("span", nc, c(p.label), 1)
              ], 8, Xu))), 128))
            ])) : x("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), lc = { class: "flex items-center justify-end gap-1" }, oc = { class: "hidden items-center gap-1 sm:flex" }, sc = ["href"], rc = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ic = ["d"], dc = ["disabled", "onClick"], uc = ["d"], cc = {
  type: "button",
  class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors",
  "aria-haspopup": "menu"
}, fc = {
  key: 0,
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mc = ["d"], pc = { class: "py-0.5" }, vc = ["href"], gc = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hc = ["d"], bc = { class: "min-w-0 flex-1 truncate" }, yc = ["disabled", "onClick"], xc = ["d"], kc = { class: "min-w-0 flex-1 truncate" }, eC = /* @__PURE__ */ L({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(null), d = y(() => r.groups.filter((A) => !A.label)), u = y(() => r.groups.filter((A) => A.label)), f = y(() => d.value.flatMap((A) => A.actions)), g = y(() => f.value.filter((A) => !A.destructive)), v = y(() => f.value.filter((A) => A.destructive)), h = y(() => r.groups.every((A) => A.actions.length === 0)), w = {
      primary: "text-primary",
      gray: "text-muted-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function b(A) {
      return w[A.color ?? "gray"] ?? w.gray;
    }
    function C(A) {
      s("run", A);
    }
    function B(A) {
      r.busy !== A.key && C(A);
    }
    function M(A) {
      h.value || i.value?.openContextMenu(A);
    }
    return l({ openContextMenu: M }), (A, $) => (t(), a("div", lc, [
      o("div", oc, [
        (t(!0), a(P, null, j([...g.value, ...v.value], (m) => (t(), a(P, {
          key: m.key
        }, [
          m.link ? (t(), a("a", {
            key: 0,
            href: m.url ?? "#",
            class: z(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", b(m)])
          }, [
            (t(), a("svg", rc, [
              o("path", {
                d: k(Te)(m)
              }, null, 8, ic)
            ])),
            o("span", null, c(m.label), 1)
          ], 10, sc)) : (t(), a("button", {
            key: 1,
            type: "button",
            class: z(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", b(m)]),
            disabled: e.busy === m.key,
            onClick: (p) => B(m)
          }, [
            (t(), a("svg", {
              class: z(["size-3.5 shrink-0", e.busy === m.key && "animate-pulse"]),
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
              }, null, 8, uc)
            ], 2)),
            o("span", null, c(m.label), 1)
          ], 10, dc))
        ], 64))), 128)),
        (t(!0), a(P, null, j(u.value, (m) => (t(), D(qe, {
          key: m.label,
          align: "end"
        }, {
          trigger: O(() => [
            o("button", cc, [
              m.icon ? (t(), a("svg", fc, [
                o("path", {
                  d: k(ce)(m.icon)
                }, null, 8, mc)
              ])) : x("", !0),
              o("span", null, c(m.label), 1)
            ])
          ]),
          panel: O(() => [
            o("div", pc, [
              (t(!0), a(P, null, j([
                ...m.actions.filter((p) => !p.destructive),
                ...m.actions.filter((p) => p.destructive)
              ], (p) => (t(), a(P, {
                key: p.key
              }, [
                p.link ? (t(), a("a", {
                  key: 0,
                  href: p.url ?? "#",
                  role: "menuitem",
                  class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", p.destructive ? "text-destructive" : b(p)])
                }, [
                  (t(), a("svg", gc, [
                    o("path", {
                      d: k(Te)(p)
                    }, null, 8, hc)
                  ])),
                  o("span", bc, c(p.label), 1)
                ], 10, vc)) : (t(), a("button", {
                  key: 1,
                  type: "button",
                  role: "menuitem",
                  class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", p.destructive ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10" : b(p)]),
                  disabled: e.busy === p.key,
                  onClick: (_) => C(p)
                }, [
                  (t(), a("svg", {
                    class: z(["size-4 shrink-0", e.busy === p.key && "animate-pulse"]),
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "aria-hidden": "true"
                  }, [
                    o("path", {
                      d: k(Te)({ ...p, destructive: p.destructive })
                    }, null, 8, xc)
                  ], 2)),
                  o("span", kc, c(p.label), 1)
                ], 10, yc))
              ], 64))), 128))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      E(ac, {
        ref_key: "fallback",
        ref: i,
        class: "sm:hidden",
        groups: e.groups,
        title: e.title,
        busy: e.busy,
        onRun: $[0] || ($[0] = (m) => s("run", m))
      }, null, 8, ["groups", "title", "busy"])
    ]));
  }
}), Ft = {
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
}, Nt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, $t = 12, wt = 20, $c = [0, 0.25, 0.5, 0.75, 1], an = "alxtexhpanel.appearance", Be = {
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
const Fn = "alxtexhpanel.appearance.vars", Rt = "pk-appearance";
function nt() {
  return typeof window > "u" ? null : window;
}
let Ct = null;
function Nn(e) {
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
function Rn(e) {
  const l = nt();
  l && (l.__panelAppearance = { ...e });
}
function wc(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Rt);
  l || (l = document.createElement("style"), l.id = Rt, document.head.appendChild(l));
  const n = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${n} }`;
}
function tC() {
  Ye = !1, Ct = null, Ve.value = { ...Be };
  const e = nt();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Rt)?.remove();
}
function ln(e) {
  return e.theme === "dark";
}
const vn = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, gn = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Un(e) {
  const l = Ft[e.primary] ?? Ft.slate, n = Nt[e.surface] ?? Nt.neutral, r = n.chroma, s = n.hue, d = ln(e) ? {
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
    "--pk-row-padding": vn[e.density] ?? vn.comfortable,
    "--pk-form-gap": gn[e.density] ?? gn.comfortable
  };
}
function Cc(e) {
  return {
    dark: ln(e),
    theme: e.theme,
    vars: Un(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function on() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(an);
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
function Sc() {
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
function Hn(e) {
  const l = on(), n = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Nn(n);
  if (Ve.value = n, Ye = !0, e) {
    Rn(n);
    try {
      localStorage.setItem(an, JSON.stringify(n));
    } catch {
    }
  }
  const d = nt()?.__panelAppearanceApplied === !0;
  if (Ct !== s) {
    if (r && d && e) {
      Ct = s;
      try {
        const u = Cc(n);
        localStorage.setItem(Fn, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Ut(n);
  }
}
function nC() {
  Hn(Sc());
}
function aC(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Hn(l);
}
let Kn = null;
function lC(e) {
  Kn = e;
}
let qn = {};
function Mc(e) {
  if (qn = e, !(typeof document > "u") && !on().primaryChosen)
    for (const [l, n] of Object.entries(e))
      document.documentElement.style.setProperty(l, n);
}
function Ut(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, n = Un(e), r = { ...n, ...e.primaryChosen ? {} : qn }, s = {
    dark: ln(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, wc(n), Rn(e), Ct = Nn(e);
  const i = nt();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Fn, JSON.stringify(s));
  } catch {
  }
}
function Gn() {
  function e(r) {
    Ut(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ve.value = { ...Ve.value, ...r, ...s };
    try {
      localStorage.setItem(an, JSON.stringify(Ve.value));
    } catch {
    }
    e(Ve.value), Kn?.({ ...r, ...s });
  }
  function n() {
    l({ ...Be });
  }
  return ge(() => {
    if (Ye || nt()?.__panelAppearanceApplied) {
      Ye = !0;
      return;
    }
    Ye = !0, Ve.value = on(), Ut(Ve.value);
  }), {
    appearance: y(() => Ve.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: Ft,
    SURFACE_TINTS: Nt,
    FONT_SIZE_MIN: $t,
    FONT_SIZE_MAX: wt,
    RADIUS_OPTIONS: $c
  };
}
const Bc = ["aria-busy", "aria-label"], Ac = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, zc = { class: "min-w-0" }, _c = { class: "text-base font-semibold" }, Pc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Lc = { class: "flex shrink-0 items-center gap-2" }, Oc = ["disabled"], jc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, Vc = {
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
    const u = q(!1), f = y(() => n.width ?? mo[n.size]), g = y(
      () => [Dn, n.padded ? fo : ""].filter(Boolean).join(" ")
    );
    function v(b) {
      u.value = b.target === b.currentTarget;
    }
    function h(b) {
      u.value && b.target === b.currentTarget && !n.busy && r("close"), u.value = !1;
    }
    function w(b) {
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
      const B = C[0], M = C[C.length - 1];
      b.shiftKey && document.activeElement === B ? (b.preventDefault(), M.focus()) : !b.shiftKey && document.activeElement === M && (b.preventDefault(), B.focus());
    }
    return fe(
      () => n.open,
      async (b) => {
        if (b) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", w), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", w), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = d;
    }), (b, C) => (t(), D(ut, { to: "body" }, [
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
            onPointerdown: v,
            onPointerup: h
          }, null, 32)) : x("", !0)
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
            class: z(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", Ac, [
              o("div", zc, [
                o("h2", _c, c(e.title), 1),
                e.description ? (t(), a("p", Pc, c(e.description), 1)) : x("", !0)
              ]),
              o("div", Lc, [
                G(b.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: C[0] || (C[0] = (B) => r("close"))
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
                ])], 8, Oc)
              ])
            ]),
            o("div", jc, [
              o("div", {
                class: z(g.value)
              }, [
                G(b.$slots, "default")
              ], 2)
            ]),
            b.$slots.footer ? (t(), a("footer", Vc, [
              G(b.$slots, "footer")
            ])) : x("", !0)
          ], 10, Bc)) : x("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Dc = { class: "flex flex-col gap-5 px-4 py-4" }, Tc = { class: "flex flex-col gap-2" }, Ic = { class: "grid grid-cols-8 gap-2" }, Ec = ["title", "aria-label", "aria-pressed", "onClick"], Fc = { class: "flex flex-col gap-2" }, Nc = { class: "grid grid-cols-8 gap-2" }, Rc = ["title", "aria-label", "aria-pressed", "onClick"], Uc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Hc = { class: "flex flex-col gap-2" }, Kc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, qc = ["aria-pressed", "aria-label", "onClick"], Gc = { class: "text-sm font-semibold" }, Wc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zc = ["onClick"], Jc = { class: "flex flex-col gap-2" }, Yc = { class: "flex items-center justify-between" }, Qc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Xc = { class: "flex items-center gap-2" }, ef = ["disabled"], tf = ["min", "max", "value"], nf = ["disabled"], oC = /* @__PURE__ */ L({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Gn(), u = q(!1), f = y(() => l.value.sidebarSide === "right"), g = y(() => f.value ? "left" : "right"), v = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], h = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], w = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], b = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], B = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function M(A, $) {
      return `oklch(0.72 ${$ * 3} ${A})`;
    }
    return (A, $) => (t(), a(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: $[0] || ($[0] = (m) => u.value = !0)
      }, [...$[6] || ($[6] = [
        st('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      E(At, {
        open: u.value,
        title: "Settings",
        side: g.value,
        width: "w-80",
        padded: !1,
        onClose: $[5] || ($[5] = (m) => u.value = !1)
      }, {
        "header-actions": O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: $[1] || ($[1] = //@ts-ignore
            (...m) => k(r) && k(r)(...m))
          }, " Reset ")
        ]),
        default: O(() => [
          o("div", Dc, [
            o("section", Tc, [
              $[8] || ($[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", Ic, [
                (t(!0), a(P, null, j(k(s), (m, p) => (t(), a("button", {
                  key: p,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: m.value }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).primary === p,
                  onClick: (_) => k(n)({ primary: p })
                }, [
                  k(l).primary === p ? (t(), a("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: m.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...$[7] || ($[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : x("", !0)
                ], 12, Ec))), 128))
              ])
            ]),
            o("section", Fc, [
              $[10] || ($[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", Nc, [
                (t(!0), a(P, null, j(k(i), (m, p) => (t(), a("button", {
                  key: p,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: M(m.hue, m.chroma) }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).surface === p,
                  onClick: (_) => k(n)({ surface: p })
                }, [
                  k(l).surface === p ? (t(), a("svg", Uc, [...$[9] || ($[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : x("", !0)
                ], 12, Rc))), 128))
              ])
            ]),
            o("section", Hc, [
              $[11] || ($[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Kc, [
                (t(!0), a(P, null, j(k(d), (m) => (t(), a("button", {
                  key: m,
                  type: "button",
                  class: z([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === m,
                  "aria-label": `${m}rem radius`,
                  onClick: (p) => k(n)({ radius: m })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(m, 0.5)}rem` })
                  }, null, 4),
                  H(" " + c(m), 1)
                ], 10, qc))), 128))
              ])
            ]),
            (t(!0), a(P, null, j([
              { label: "Color scheme", key: "theme", options: v },
              { label: "Card style", key: "cardStyle", options: w },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: b },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: B }
            ], (m) => (t(), a("section", {
              key: m.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Gc, c(m.label), 1),
              o("div", Wc, [
                (t(!0), a(P, null, j(m.options, (p) => (t(), a("button", {
                  key: String(p.value),
                  type: "button",
                  class: z([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[m.key] === p.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (_) => k(n)({ [m.key]: p.value })
                }, c(p.label), 11, Zc))), 128))
              ])
            ]))), 128)),
            o("section", Jc, [
              o("div", Yc, [
                $[12] || ($[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", Qc, c(k(l).fontSize) + "px", 1)
              ]),
              o("div", Xc, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize <= k($t),
                  "aria-label": "Decrease font size",
                  onClick: $[2] || ($[2] = (m) => k(n)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, ef),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k($t),
                  max: k(wt),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: $[3] || ($[3] = (m) => k(n)({
                    fontSize: Number(m.target.value)
                  }))
                }, null, 40, tf),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k(wt),
                  "aria-label": "Increase font size",
                  onClick: $[4] || ($[4] = (m) => k(n)({ fontSize: k(l).fontSize + 1 }))
                }, " + ", 8, nf)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["open", "side"])
    ], 64));
  }
}), af = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, lf = { class: "flex items-stretch" }, of = ["href", "aria-current"], sf = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rf = ["d"], df = { class: "w-full truncate text-center" }, uf = {
  key: 0,
  class: "flex-1"
}, cf = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ff = ["d"], mf = { class: "w-full truncate text-center" }, Ot = 5, sC = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("nav", af, [
      o("ul", lf, [
        (t(!0), a(P, null, j(s.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex-1"
        }, [
          o("a", {
            href: g.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(g.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(g.href) ? "page" : void 0
          }, [
            (t(), a("svg", sf, [
              o("path", {
                d: k(ce)(g.icon)
              }, null, 8, rf)
            ])),
            o("span", df, c(g.title), 1)
          ], 10, of)
        ]))), 128)),
        i.value ? (t(), a("li", uf, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (g) => r("more"))
          }, [
            (t(), a("svg", cf, [
              o("path", {
                d: k(ce)("more-horizontal")
              }, null, 8, ff)
            ])),
            o("span", mf, c(e.moreLabel), 1)
          ])
        ])) : x("", !0)
      ])
    ]));
  }
}), pf = ["value"], we = /* @__PURE__ */ L({
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
      class: z([s, n.class]),
      onInput: d[0] || (d[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, pf));
  }
}), vf = ["for"], _e = /* @__PURE__ */ L({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, n) => (t(), a("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: z([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      G(l.$slots, "default")
    ], 10, vf));
  }
}), rC = /* @__PURE__ */ L({
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
      class: z(["size-4 animate-spin", l.$props.class])
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
}), gf = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, hf = ["id", "name", "value", "disabled", "maxlength"], bf = ["data-active"], yf = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, xf = /* @__PURE__ */ L({
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
      () => Array.from({ length: n.length }, (A, $) => n.modelValue[$] ?? "")
    ), f = y(() => Math.min(n.modelValue.length, n.length - 1));
    function g(A) {
      return A.replace(/\D/g, "").slice(0, n.length);
    }
    function v(A) {
      n.disabled || A.length !== n.length || d.value !== A && (d.value = A, r("complete", A));
    }
    function h(A) {
      const $ = g(A);
      $ !== n.modelValue && r("update:modelValue", $), v($);
    }
    function w(A) {
      h(A.target.value);
    }
    function b(A) {
      h(A.target.value);
    }
    function C() {
      h(i.value?.value ?? "");
    }
    function B(A) {
      A.animationName === "pkOtpAutofillStart" && C();
    }
    fe(
      () => n.modelValue,
      (A) => {
        A.length < n.length ? d.value = "" : v(A);
      }
    );
    let M;
    return ge(() => {
      M = window.setInterval(() => {
        if (n.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), da(() => {
      M !== void 0 && window.clearInterval(M);
    }), (A, $) => (t(), a("div", gf, [
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
        onInput: w,
        onChange: b,
        onAnimationstart: B,
        onFocus: $[0] || ($[0] = (m) => s.value = !0),
        onBlur: $[1] || ($[1] = (m) => s.value = !1)
      }, null, 40, hf),
      (t(!0), a(P, null, j(u.value, (m, p) => (t(), a("div", {
        key: p,
        "data-slot": "input-otp-slot",
        "data-active": s.value && p === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        H(c(m) + " ", 1),
        s.value && p === f.value && m === "" ? (t(), a("div", yf, [...$[2] || ($[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : x("", !0)
      ], 8, bf))), 128))
    ]));
  }
}), iC = /* @__PURE__ */ Bt(xf, [["__scopeId", "data-v-560616ac"]]), kf = {
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
      class: z(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: z(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), a("p", kf, c(e.description), 1)) : x("", !0)
    ], 2));
  }
}), $f = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, wf = { class: "min-w-0 space-y-1" }, Cf = { class: "flex flex-wrap items-center gap-2.5" }, Sf = { class: "text-2xl font-semibold tracking-tight" }, Mf = {
  key: 0,
  class: "flex items-center gap-2"
}, Bf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Af = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, dC = /* @__PURE__ */ L({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, n) => (t(), a("header", $f, [
      o("div", wf, [
        o("div", Cf, [
          o("h1", Sf, c(e.title), 1),
          l.$slots.status ? (t(), a("div", Mf, [
            G(l.$slots, "status")
          ])) : x("", !0)
        ]),
        e.purpose ? (t(), a("p", Bf, c(e.purpose), 1)) : x("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", Af, [
        G(l.$slots, "actions")
      ])) : x("", !0)
    ]));
  }
}), zf = /* @__PURE__ */ L({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(k(ne)(k(Lf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), _f = /* @__PURE__ */ L({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-description",
      class: z(k(ne)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Pf = /* @__PURE__ */ L({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert-title",
      class: z(k(ne)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Lf = Qt(
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
), Of = { class: "list-inside list-disc text-sm" }, uC = /* @__PURE__ */ L({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(zf), { variant: "destructive" }, {
      default: O(() => [
        E(k(Xa), { class: "size-4" }),
        E(k(Pf), null, {
          default: O(() => [
            H(c(e.title), 1)
          ]),
          _: 1
        }),
        E(k(_f), null, {
          default: O(() => [
            o("ul", Of, [
              (t(!0), a(P, null, j(n.value, (i, d) => (t(), a("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Wn = /* @__PURE__ */ L({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, s = jn(n, "modelValue", l, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (i, d) => pe((t(), a("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => ua(s) ? s.value = u : null),
      "data-slot": "input",
      class: z(
        k(ne)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          k(Ue),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          n.class
        )
      )
    }, null, 2)), [
      [ze, k(s)]
    ]);
  }
}), jf = { class: "relative" }, Vf = ["aria-label"], cC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = q(!1), s = ca("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", jf, [
      E(k(Wn), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(ne)("pr-10", n.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: z(
          k(ne)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), D(k(el), {
          key: 0,
          class: "size-4"
        })) : (t(), D(k(tl), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Vf)
    ]));
  }
}), Zn = "@container min-w-0", Df = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", fC = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Tf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function If(e) {
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
function mC(e, l) {
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
    If(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function hn(e, l) {
  return `${e}:${l}`;
}
function pC(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Ht(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function vC(e, l, n, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: n }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const g of f.items)
      i.set(hn(f.kind, g.key), {
        kind: f.kind,
        source: g
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const f of r?.widgets ?? []) {
    const g = f.id.toLowerCase(), v = i.get(g);
    v && (u.add(g), d.push({
      id: g,
      kind: v.kind,
      key: v.source.key,
      span: Ht(f.span),
      hidden: !!f.hidden,
      source: v.source
    }));
  }
  for (const f of s)
    for (const g of f.items) {
      const v = hn(f.kind, g.key);
      u.has(v) || d.push({
        id: v,
        kind: f.kind,
        key: g.key,
        span: Ht(g.span),
        hidden: !1,
        source: g
      });
    }
  return d;
}
function gC(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Ht(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Jn = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", Ef = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Ff = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function Nf(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/jpeg" || n === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function Rf(e) {
  const l = e.name.toLowerCase(), n = e.type.toLowerCase();
  return n === "image/png" || n === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Uf(e) {
  const l = URL.createObjectURL(e);
  try {
    const n = await Hf(l), r = document.createElement("canvas"), s = Math.max(1, n.naturalWidth), i = Math.max(1, n.naturalHeight);
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
function Hf(e) {
  return new Promise((l, n) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => n(new Error("Could not read that image.")), r.src = e;
  });
}
async function Kf(e) {
  if (Nf(e))
    throw new Error(Ff);
  if (!Rf(e))
    throw new Error(Jn);
  if (!await Uf(e))
    throw new Error(Ef);
}
const hC = /* @__PURE__ */ L({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Xe), re({ "data-slot": "sheet-close" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ L({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Bn), re({
      "data-slot": "sheet-description",
      class: k(ne)("text-sm text-muted-foreground font-normal", l.class)
    }, k(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bC = /* @__PURE__ */ L({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-footer",
      class: z(k(ne)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Gf = /* @__PURE__ */ L({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sheet-header",
      class: z(k(ne)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), Wf = /* @__PURE__ */ L({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(An), re({
      "data-slot": "sheet-title",
      class: k(ne)("text-foreground font-semibold", l.class)
    }, k(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yC = /* @__PURE__ */ L({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(zn), re({ "data-slot": "sheet-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bn = "sidebar_state", Zf = 3600 * 24 * 7, Jf = "16rem", Yf = "18rem", Qf = "3rem", Xf = "b", [zt, em] = xa("Sidebar"), tm = { class: "flex h-full w-full flex-col" }, nm = ["data-state", "data-collapsible", "data-variant", "data-side"], am = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, xC = /* @__PURE__ */ L({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = zt();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: k(ne)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      G(d.$slots, "default")
    ], 16)) : k(n) ? (t(), D(k(en), re({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: O(() => [
        E(k(tn), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": k(Yf)
          })
        }, {
          default: O(() => [
            E(Gf, { class: "sr-only" }, {
              default: O(() => [
                E(Wf, null, {
                  default: O(() => [...u[0] || (u[0] = [
                    H("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(qf, null, {
                  default: O(() => [...u[1] || (u[1] = [
                    H("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", tm, [
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
      "data-state": k(r),
      "data-collapsible": k(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: z(
          k(ne)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: k(ne)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", am, [
          G(d.$slots, "default")
        ])
      ], 16)
    ], 8, nm));
  }
}), kC = /* @__PURE__ */ L({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: z(
        k(ne)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), $C = /* @__PURE__ */ L({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: z(k(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), wC = /* @__PURE__ */ L({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: z(k(ne)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), CC = /* @__PURE__ */ L({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        k(ne)(
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
}), SC = /* @__PURE__ */ L({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: z(k(ne)("w-full text-sm", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), MC = /* @__PURE__ */ L({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: z(
        k(ne)(
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
}), BC = /* @__PURE__ */ L({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: z(k(ne)("flex flex-col gap-2 p-2", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), AC = /* @__PURE__ */ L({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Wn), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: z(k(ne)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), zC = /* @__PURE__ */ L({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("main", {
      "data-slot": "sidebar-inset",
      class: z(
        k(ne)(
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
}), _C = /* @__PURE__ */ L({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: z(k(ne)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), PC = /* @__PURE__ */ L({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: z(
        k(ne)(
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
}), LC = /* @__PURE__ */ L({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: z(
        k(ne)(
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
}), lm = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(ka), re({ "data-slot": "tooltip" }, k(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k($a), null, {
      default: O(() => [
        E(k(wa), re({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(ne)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: O(() => [
            G(d.$slots, "default"),
            E(k(Ca), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), OC = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(_n), Le(Ne(l)), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ L({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Sa), re({ "data-slot": "tooltip-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yn = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: k(ne)(k(im)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), jC = /* @__PURE__ */ L({
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
    const l = e, { isMobile: n, state: r } = zt(), s = me(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(k(lm), { key: 1 }, {
      default: O(() => [
        E(k(sm), { "as-child": "" }, {
          default: O(() => [
            E(yn, Le(Ne({ ...k(s), ...i.$attrs })), {
              default: O(() => [
                G(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(k(om), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(n)
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
    })) : (t(), D(yn, Le(re({ key: 0 }, { ...k(s), ...i.$attrs })), {
      default: O(() => [
        G(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VC = /* @__PURE__ */ L({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: z(k(ne)("group/menu-item relative", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), xn = "animate-pulse rounded-md bg-primary/10", DC = /* @__PURE__ */ L({
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
      class: z(k(ne)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(k(ne)(xn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : x("", !0),
      o("div", {
        class: z(k(ne)(xn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), TC = /* @__PURE__ */ L({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: z(
        k(ne)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), IC = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(et), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: z(
        k(ne)(
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
}), EC = /* @__PURE__ */ L({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: z(k(ne)("group/menu-sub-item relative", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ L({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ul?.cookie.includes(`${bn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = il("(max-width: 767px)"), i = q(!1), d = jn(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${bn}=${d.value}; path=/; max-age=${Zf}`;
    }
    function f(h) {
      i.value = h;
    }
    function g() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    dl("keydown", (h) => {
      h.key === Xf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), g());
    });
    const v = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return em({
      state: v,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: g
    }), (h, w) => (t(), D(k(_n), { "delay-duration": 0 }, {
      default: O(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(Jf),
            "--sidebar-width-icon": k(Qf)
          },
          class: k(ne)(
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
}), NC = /* @__PURE__ */ L({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = zt();
    return (r, s) => (t(), a("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: z(
        k(ne)(
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
      G(r.$slots, "default")
    ], 2));
  }
}), rm = /* @__PURE__ */ L({
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
    return (r, s) => (t(), D(k(Ma), re({ "data-slot": "separator" }, k(n), {
      class: k(ne)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), RC = /* @__PURE__ */ L({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(rm), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: z(k(ne)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), UC = /* @__PURE__ */ L({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = zt();
    return (i, d) => (t(), D(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(k(ne)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: O(() => [
        k(n) || k(r) === "collapsed" ? (t(), D(k(nl), { key: 0 })) : (t(), D(k(al), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), im = Qt(
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
), HC = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(Ba), re({ "data-slot": "dropdown-menu" }, k(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), dm = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, KC = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Aa), re({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", dm, [
          E(k(Pn), null, {
            default: O(() => [
              G(d.$slots, "indicator-icon", {}, () => [
                E(k(Ln), { class: "size-4" })
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
}), qC = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(za), null, {
      default: O(() => [
        E(k(_a), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ne)(
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
}), GC = /* @__PURE__ */ L({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Pa), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), WC = /* @__PURE__ */ L({
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
    return (s, i) => (t(), D(k(La), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, k(r), {
      class: k(ne)(
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
}), ZC = /* @__PURE__ */ L({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = me(l, "class", "inset"), r = Oe(n);
    return (s, i) => (t(), D(k(Oa), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, k(r), {
      class: k(ne)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), JC = /* @__PURE__ */ L({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(k(ja), re({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: O(() => [
        G(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), um = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, YC = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Va), re({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: O(() => [
        o("span", um, [
          E(k(Pn), null, {
            default: O(() => [
              G(d.$slots, "indicator-icon", {}, () => [
                E(k(ll), { class: "size-2 fill-current" })
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
}), QC = /* @__PURE__ */ L({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Da), re({ "data-slot": "dropdown-menu-separator" }, k(n), {
      class: k(ne)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), XC = /* @__PURE__ */ L({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: z(k(ne)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), e8 = /* @__PURE__ */ L({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(k(Ta), re({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), t8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Ia), re({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(ne)(
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
}), n8 = /* @__PURE__ */ L({
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
    return (s, i) => (t(), D(k(Ea), re({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: O(() => [
        G(s.$slots, "default"),
        E(k(On), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), a8 = /* @__PURE__ */ L({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Oe(e);
    return (r, s) => (t(), D(k(Fa), re({ "data-slot": "dropdown-menu-trigger" }, k(n)), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), l8 = /* @__PURE__ */ L({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Na), {
      "data-slot": "avatar",
      class: z(k(ne)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), o8 = /* @__PURE__ */ L({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Ra), re({ "data-slot": "avatar-fallback" }, k(n), {
      class: k(ne)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s8 = /* @__PURE__ */ L({
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
    return (n, r) => (t(), D(k(Ua), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), r8 = /* @__PURE__ */ L({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: z(l.class)
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), i8 = /* @__PURE__ */ L({
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
      class: z(k(ne)("flex size-9 items-center justify-center", l.class))
    }, [
      G(n.$slots, "default", {}, () => [
        E(k(ol), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), d8 = /* @__PURE__ */ L({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("li", {
      "data-slot": "breadcrumb-item",
      class: z(k(ne)("inline-flex items-center gap-1.5", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), u8 = /* @__PURE__ */ L({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(et), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: z(k(ne)("hover:text-foreground transition-colors", l.class))
    }, {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), c8 = /* @__PURE__ */ L({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("ol", {
      "data-slot": "breadcrumb-list",
      class: z(
        k(ne)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), f8 = /* @__PURE__ */ L({
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
      class: z(k(ne)("text-foreground font-normal", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), m8 = /* @__PURE__ */ L({
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
      class: z(k(ne)("[&>svg]:size-3.5", l.class))
    }, [
      G(n.$slots, "default", {}, () => [
        E(k(On))
      ])
    ], 2));
  }
}), cm = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, fm = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", cm, [
      E(k(Ha), re({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(ne)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), p8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Ka), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(ne)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: O((f) => [
        G(d.$slots, "default", Le(Ne(f))),
        e.viewport ? (t(), D(fm, { key: 0 })) : x("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), v8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(qa), re({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(ne)(
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
}), g8 = /* @__PURE__ */ L({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Ga), re({ "data-slot": "navigation-menu-indicator" }, k(r), {
      class: k(ne)(
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
}), h8 = /* @__PURE__ */ L({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Wa), re({ "data-slot": "navigation-menu-item" }, k(n), {
      class: k(ne)("relative", l.class)
    }), {
      default: O(() => [
        G(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Za), re({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(ne)(
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
}), y8 = /* @__PURE__ */ L({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Ja), re({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(ne)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), x8 = /* @__PURE__ */ L({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Ya), re({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(ne)(k(mm)(), "group", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default"),
        E(k(sl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mm = Qt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), k8 = /* @__PURE__ */ L({
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
    return (i, d) => (t(), D(k(Mn), re({ "data-slot": "dialog" }, k(s)), {
      default: O((u) => [
        G(i.$slots, "default", Le(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), $8 = /* @__PURE__ */ L({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Xe), re({ "data-slot": "dialog-close" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ L({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Wt), re({ "data-slot": "dialog-overlay" }, k(n), {
      class: k(ne)(
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
}), w8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Zt), null, {
      default: O(() => [
        E(pm),
        E(k(Jt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: O(() => [
            G(d.$slots, "default"),
            e.showCloseButton ? (t(), D(k(Xe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: O(() => [
                E(k(Yt)),
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
}), C8 = /* @__PURE__ */ L({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(Bn), re({ "data-slot": "dialog-description" }, k(r), {
      class: k(ne)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), S8 = /* @__PURE__ */ L({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-footer",
      class: z(k(ne)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      G(n.$slots, "default"),
      e.showCloseButton ? (t(), D(k(Xe), {
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
      })) : x("", !0)
    ], 2));
  }
}), M8 = /* @__PURE__ */ L({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "dialog-header",
      class: z(k(ne)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), B8 = /* @__PURE__ */ L({
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
    return (d, u) => (t(), D(k(Zt), null, {
      default: O(() => [
        E(k(Wt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: O(() => [
            E(k(Jt), re({
              class: k(ne)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const g = f.detail.originalEvent, v = g.target;
                (g.offsetX > v.clientWidth || g.offsetY > v.clientHeight) && f.preventDefault();
              })
            }), {
              default: O(() => [
                G(d.$slots, "default"),
                E(k(Xe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: O(() => [
                    E(k(Yt), { class: "w-4 h-4" }),
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
}), A8 = /* @__PURE__ */ L({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class"), r = Oe(n);
    return (s, i) => (t(), D(k(An), re({ "data-slot": "dialog-title" }, k(r), {
      class: k(ne)("text-lg leading-none font-semibold", l.class)
    }), {
      default: O(() => [
        G(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), z8 = /* @__PURE__ */ L({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(zn), re({ "data-slot": "dialog-trigger" }, l), {
      default: O(() => [
        G(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _8 = /* @__PURE__ */ L({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = me(l, "class");
    return (r, s) => (t(), D(k(Qa), re({ "data-slot": "label" }, k(n), {
      class: k(ne)(
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
}), P8 = /* @__PURE__ */ L({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(rl), {
      role: "status",
      "aria-label": "Loading",
      class: z(k(ne)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), L8 = /* @__PURE__ */ L({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card",
      class: z(
        k(ne)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), O8 = /* @__PURE__ */ L({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-action",
      class: z(k(ne)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), j8 = /* @__PURE__ */ L({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-content",
      class: z(k(ne)("px-6", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), V8 = /* @__PURE__ */ L({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("p", {
      "data-slot": "card-description",
      class: z(k(ne)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), D8 = /* @__PURE__ */ L({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-footer",
      class: z(k(ne)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), T8 = /* @__PURE__ */ L({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "card-header",
      class: z(
        k(ne)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), I8 = /* @__PURE__ */ L({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("h3", {
      "data-slot": "card-title",
      class: z(k(ne)("leading-none font-semibold", l.class))
    }, [
      G(n.$slots, "default")
    ], 2));
  }
}), vm = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, gm = { class: "flex items-start gap-3" }, hm = { class: "min-w-0 flex-1" }, bm = { class: "text-foreground text-sm font-medium" }, ym = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, E8 = /* @__PURE__ */ L({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = q(!1), d = q(null), u = q(0);
    fa((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (g, v) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", vm, [
        o("div", gm, [
          v[1] || (v[1] = o("svg", {
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
          o("div", hm, [
            o("p", bm, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), a("p", ym, c(d.value), 1)) : x("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
            }, [...v[0] || (v[0] = [
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
      ])) : i.value ? x("", !0) : G(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), xm = { class: "bg-card rounded-lg border" }, km = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, $m = { class: "min-w-0" }, wm = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Cm = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Sm = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Mm = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, F8 = /* @__PURE__ */ L({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, n) => (t(), a("section", xm, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), a("header", km, [
        o("div", $m, [
          G(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", wm, c(e.title), 1)) : x("", !0),
            e.description ? (t(), a("p", Cm, c(e.description), 1)) : x("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Sm, [
          G(l.$slots, "actions")
        ])) : x("", !0)
      ])) : x("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        G(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Mm, [
        G(l.$slots, "footer")
      ])) : x("", !0)
    ]));
  }
}), Yn = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function N8() {
  const e = Vn(), l = y(() => e.props.panel?.pageFooter === !0);
  return It(Yn, l), l;
}
const Bm = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Am = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, zm = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, R8 = /* @__PURE__ */ L({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Vn(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = y(() => {
      const f = n.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = xt(Yn, y(() => !1)), u = y(() => !l.host && k(d) === !0);
    return (f, g) => u.value ? x("", !0) : (t(), a("footer", Bm, [
      o("div", Am, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", zm, [
          (t(!0), a(P, null, j(i.value, (v) => (t(), D(k(ml), {
            key: v.href,
            href: v.href,
            class: "hover:text-foreground"
          }, {
            default: O(() => [
              H(c(v.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : x("", !0)
      ])
    ]));
  }
}), _m = { class: "flex shrink-0 flex-col items-center" }, Pm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, U8 = /* @__PURE__ */ L({
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
    return (i, d) => (t(), a("div", _m, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Pm)) : x("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
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
      ], 64)) : x("", !0)
    ]));
  }
}), Lm = {
  key: 0,
  class: "flex justify-end"
}, Om = {
  key: 1,
  class: "flex flex-col gap-2"
}, jm = ["onDrop"], Vm = ["aria-label", "onDragstart"], Dm = ["onClick"], Tm = { class: "font-medium" }, Im = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, Em = {
  key: 2,
  class: "min-w-0 flex-1"
}, Fm = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Nm = ["aria-label", "onClick"], Rm = ["disabled", "aria-label", "onClick"], Um = ["disabled", "aria-label", "onClick"], Hm = ["disabled", "title", "aria-label", "onClick"], Km = ["disabled", "title", "aria-label", "onClick"], qm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Gm = ["disabled"], Wm = {
  key: 2,
  class: "flex flex-col gap-2"
}, Zm = {
  key: 0,
  class: "overflow-x-auto rounded-md border"
}, Jm = { class: "w-full text-sm" }, Ym = { class: "bg-muted/40" }, Qm = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Xm = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, ep = ["onDrop"], tp = {
  key: 0,
  class: "px-2 py-1.5 align-top"
}, np = ["aria-label", "onDragstart"], ap = { class: "px-2 py-1.5 align-top" }, lp = { class: "mt-0.5 flex items-center gap-0.5" }, op = ["disabled", "aria-label", "onClick"], sp = ["disabled", "aria-label", "onClick"], rp = ["disabled", "title", "aria-label", "onClick"], ip = ["disabled", "title", "aria-label", "onClick"], dp = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, up = ["disabled"], H8 = /* @__PURE__ */ L({
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
        for (const S of n.children) {
          const I = K.data[S.key] ?? null;
          U[S.key] = I, I !== null && I !== "" && !(Array.isArray(I) && I.length === 0) && (R = !0);
        }
        R && J.push(U);
      }
      return J.length ? J : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const g = y(() => n.maxItems !== null && i.value.length >= n.maxItems), v = y(() => n.minItems !== null && i.value.length <= n.minItems), h = y(() => n.children.length === 1);
    function w() {
      if (g.value || n.disabled || !n.addable)
        return;
      const J = {};
      for (const K of n.children)
        J[K.key] = null;
      i.value.push({ uid: s++, data: J });
    }
    function b(J) {
      i.value = i.value.filter((K) => K.uid !== J), f();
    }
    function C(J) {
      if (g.value || n.disabled || !n.cloneable)
        return;
      const K = i.value.findIndex((I) => I.uid === J);
      if (K < 0)
        return;
      const U = i.value[K], R = {};
      for (const I of n.children) {
        const V = U.data[I.key];
        R[I.key] = Array.isArray(V) ? [...V] : V;
      }
      const S = [...i.value];
      S.splice(K + 1, 0, { uid: s++, data: R }), i.value = S, f();
    }
    function B(J, K) {
      const U = J + K;
      if (U < 0 || U >= i.value.length)
        return;
      const R = [...i.value], [S] = R.splice(J, 1);
      R.splice(U, 0, S), i.value = R, f();
    }
    function M(J, K, U) {
      const R = i.value.find((S) => S.uid === J);
      R && (R.data[K] = U, f());
    }
    function A(J, K) {
      return n.errors[`${n.fieldKey}.${J}.${K}`];
    }
    const $ = q(/* @__PURE__ */ new Set());
    function m(J) {
      return n.collapsible && $.value.has(J);
    }
    function p(J) {
      const K = new Set($.value);
      K.has(J) ? K.delete(J) : K.add(J), $.value = K;
    }
    const _ = y(
      () => i.value.length > 0 && i.value.every((J) => $.value.has(J.uid))
    );
    function T() {
      $.value = _.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((J) => J.uid));
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
      const R = [...i.value], S = R.findIndex((Q) => Q.uid === U), I = R.findIndex((Q) => Q.uid === J);
      if (S < 0 || I < 0)
        return;
      const [V] = R.splice(S, 1);
      R.splice(I, 0, V), i.value = R, f();
    }
    return (J, K) => (t(), a(P, null, [
      !e.table && e.collapsible && i.value.length > 1 ? (t(), a("div", Lm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: T
        }, c(_.value ? "Expand all" : "Collapse all"), 1)
      ])) : x("", !0),
      e.table ? (t(), a("div", Wm, [
        i.value.length ? (t(), a("div", Zm, [
          o("table", Jm, [
            o("thead", null, [
              o("tr", Ym, [
                e.disabled ? x("", !0) : (t(), a("th", Qm, [...K[9] || (K[9] = [
                  o("span", { class: "sr-only" }, "Reorder", -1)
                ])])),
                (t(!0), a(P, null, j(e.children, (U) => (t(), a("th", {
                  key: U.key,
                  class: "text-muted-foreground border-b px-2 py-1.5 text-left text-xs font-medium"
                }, [
                  H(c(U.label) + " ", 1),
                  U.required ? (t(), a("span", Xm, "*")) : x("", !0)
                ]))), 128)),
                K[10] || (K[10] = o("th", { class: "border-b px-2 py-1.5" }, [
                  o("span", { class: "sr-only" }, "Row actions")
                ], -1))
              ])
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, j(i.value, (U, R) => (t(), a("tr", {
                key: U.uid,
                class: z(["border-b last:border-b-0", Y.value === U.uid ? "opacity-40" : ""]),
                onDragover: K[1] || (K[1] = ve(() => {
                }, ["prevent"])),
                onDrop: (S) => Z(U.uid, S)
              }, [
                e.disabled ? x("", !0) : (t(), a("td", tp, [
                  o("button", {
                    type: "button",
                    class: "text-muted-foreground/60 hover:text-muted-foreground mt-0.5 flex size-6 cursor-grab items-center justify-center active:cursor-grabbing",
                    draggable: "true",
                    "aria-label": `Drag to reorder ${e.itemLabel} ${R + 1}`,
                    onDragstart: (S) => N(U.uid, S),
                    onDragend: W
                  }, [...K[11] || (K[11] = [
                    st('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
                  ])], 40, np)
                ])),
                (t(!0), a(P, null, j(e.children, (S) => (t(), a("td", {
                  key: S.key,
                  class: "min-w-[8rem] px-2 py-1.5 align-top"
                }, [
                  E(Ge, {
                    field: { ...S, disabled: S.disabled || e.disabled, labelHidden: !0 },
                    value: U.data[S.key],
                    error: A(R, S.key),
                    options: e.childOptions[S.key] ?? [],
                    onChange: (I) => M(U.uid, S.key, I)
                  }, null, 8, ["field", "value", "error", "options", "onChange"])
                ]))), 128)),
                o("td", ap, [
                  o("div", lp, [
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || R === 0,
                      "aria-label": `Move ${e.itemLabel} ${R + 1} up`,
                      onClick: (S) => B(R, -1)
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
                    ])], 8, op),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || R === i.value.length - 1,
                      "aria-label": `Move ${e.itemLabel} ${R + 1} down`,
                      onClick: (S) => B(R, 1)
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
                    ])], 8, sp),
                    e.cloneable ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || g.value,
                      title: g.value ? `At most ${e.maxItems} allowed` : void 0,
                      "aria-label": `Duplicate ${e.itemLabel} ${R + 1}`,
                      onClick: (S) => C(U.uid)
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
                    ])], 8, rp)) : x("", !0),
                    e.deletable ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
                      disabled: e.disabled || v.value,
                      title: v.value ? `At least ${e.minItems} required` : void 0,
                      "aria-label": `Remove ${e.itemLabel} ${R + 1}`,
                      onClick: (S) => b(U.uid)
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
                    ])], 8, ip)) : x("", !0)
                  ])
                ])
              ], 42, ep))), 128))
            ])
          ])
        ])) : (t(), a("p", dp, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)),
        !g.value && e.addable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: w
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
        ], 8, up)) : x("", !0)
      ])) : (t(), a("div", Om, [
        (t(!0), a(P, null, j(i.value, (U, R) => (t(), a("div", {
          key: U.uid,
          class: z(["flex items-start gap-2", Y.value === U.uid ? "opacity-40" : ""]),
          onDragover: K[0] || (K[0] = ve(() => {
          }, ["prevent"])),
          onDrop: (S) => Z(U.uid, S)
        }, [
          e.disabled ? x("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: z(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${R + 1}`,
            onDragstart: (S) => N(U.uid, S),
            onDragend: W
          }, [...K[2] || (K[2] = [
            st('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, Vm)),
          o("span", {
            class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(R + 1), 3),
          m(U.uid) ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (S) => p(U.uid)
          }, [
            o("span", Tm, c(e.itemLabel) + " " + c(R + 1), 1),
            F(U) ? (t(), a("span", Im, c(F(U)), 1)) : x("", !0)
          ], 8, Dm)) : (t(), a("div", Em, [
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
              onChange: (S) => M(U.uid, e.children[0].key, S)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Fm, [
              (t(!0), a(P, null, j(e.children, (S) => (t(), D(Ge, {
                key: S.key,
                field: { ...S, disabled: S.disabled || e.disabled },
                value: U.data[S.key],
                error: A(R, S.key),
                options: e.childOptions[S.key] ?? [],
                onChange: (I) => M(U.uid, S.key, I)
              }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
            ]))
          ])),
          o("div", {
            class: z(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
          }, [
            e.collapsible ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": m(U.uid) ? `Expand ${e.itemLabel} ${R + 1}` : `Collapse ${e.itemLabel} ${R + 1}`,
              onClick: (S) => p(U.uid)
            }, [
              (t(), a("svg", {
                class: z(["size-3.5 transition-transform", m(U.uid) ? "" : "rotate-180"]),
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
            ], 8, Nm)) : x("", !0),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || R === 0,
              "aria-label": `Move ${e.itemLabel} ${R + 1} up`,
              onClick: (S) => B(R, -1)
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
            ])], 8, Rm),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || R === i.value.length - 1,
              "aria-label": `Move ${e.itemLabel} ${R + 1} down`,
              onClick: (S) => B(R, 1)
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
            ])], 8, Um),
            e.cloneable ? (t(), a("button", {
              key: 1,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || g.value,
              title: g.value ? `At most ${e.maxItems} allowed` : void 0,
              "aria-label": `Duplicate ${e.itemLabel} ${R + 1}`,
              onClick: (S) => C(U.uid)
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
            ])], 8, Hm)) : x("", !0),
            e.deletable ? (t(), a("button", {
              key: 2,
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || v.value,
              title: v.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${R + 1}`,
              onClick: (S) => b(U.uid)
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
            ])], 8, Km)) : x("", !0)
          ], 2)
        ], 42, jm))), 128)),
        i.value.length === 0 ? (t(), a("p", qm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : x("", !0),
        !g.value && e.addable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: w
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
        ], 8, Gm)) : x("", !0)
      ]))
    ], 64));
  }
}), cp = { class: "space-y-1" }, fp = { class: "flex items-center gap-1" }, mp = ["disabled", "title", "aria-label", "onClick"], pp = ["aria-pressed"], vp = ["id", "value", "rows", "disabled"], gp = ["innerHTML"], hp = /* @__PURE__ */ L({
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
    function f(h, w = h) {
      const b = document.getElementById(n.id ?? "");
      if (b === null)
        return;
      const C = b.selectionStart, B = b.selectionEnd, M = i.value.slice(C, B);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${M}${w}${i.value.slice(B)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, v = y(
      () => (n.toolbar ?? Object.keys(g)).filter((h) => h in g)
    );
    return (h, w) => (t(), a("div", cp, [
      o("div", fp, [
        (t(!0), a(P, null, j(v.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          disabled: e.disabled,
          title: b,
          "aria-label": b,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => g[b].run()
        }, c(g[b].label), 9, mp))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: w[0] || (w[0] = (b) => s.value = !s.value)
        }, " Preview ", 8, pp)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, gp)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: w[1] || (w[1] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, vp))
    ]));
  }
}), bp = { class: "space-y-1" }, yp = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, xp = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, kp = ["id", "value", "rows", "disabled"], $p = { class: "text-muted-foreground text-xs font-normal" }, wp = {
  key: 0,
  class: "text-destructive text-xs"
}, Cp = /* @__PURE__ */ L({
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
`).length, 1)), f = y(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function g(h) {
      r("update:modelValue", h.target.value);
    }
    function v(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const w = h.target, b = w.selectionStart, C = w.selectionEnd, B = `${d.value.slice(0, b)}    ${d.value.slice(C)}`;
      r("update:modelValue", B), requestAnimationFrame(() => {
        w.selectionStart = w.selectionEnd = b + 4;
      });
    }
    return (h, w) => (t(), a("div", bp, [
      o("div", yp, [
        o("div", xp, [
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
          onInput: g,
          onKeydown: v
        }, null, 40, kp)
      ]),
      o("p", $p, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), a("p", wp, c(f.value), 1)) : x("", !0)
    ]));
  }
}), Sp = { class: "space-y-3" }, Mp = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Bp = { class: "text-sm font-medium" }, Ap = { class: "flex items-center gap-1" }, zp = ["disabled", "onClick"], _p = ["disabled", "onClick"], Pp = ["disabled", "onClick"], Lp = { class: "space-y-3 p-3" }, Op = { class: "flex flex-wrap items-center gap-2" }, jp = ["disabled", "onClick"], Vp = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, K8 = /* @__PURE__ */ L({
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
      () => Object.fromEntries(n.blocks.map((w) => [w.type, w]))
    ), d = y(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u(w) {
      r("update:modelValue", w);
    }
    function f(w) {
      d.value || u([...s.value, { type: w, data: {} }]);
    }
    function g(w) {
      u(s.value.filter((b, C) => C !== w));
    }
    function v(w, b) {
      const C = w + b;
      if (C < 0 || C >= s.value.length)
        return;
      const B = [...s.value], [M] = B.splice(w, 1);
      B.splice(C, 0, M), u(B);
    }
    function h(w, b, C) {
      u(
        s.value.map(
          (B, M) => M === w ? { ...B, data: { ...B.data, [b]: C } } : B
        )
      );
    }
    return (w, b) => (t(), a("div", Sp, [
      (t(!0), a(P, null, j(s.value, (C, B) => (t(), a("div", {
        key: `${C.type}-${B}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Mp, [
          o("span", Bp, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Ap, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || B === 0,
              "aria-label": "Move up",
              onClick: (M) => v(B, -1)
            }, " ↑ ", 8, zp),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || B === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => v(B, 1)
            }, " ↓ ", 8, _p),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => g(B)
            }, " Remove ", 8, Pp)
          ])
        ]),
        o("div", Lp, [
          (t(!0), a(P, null, j(i.value[C.type]?.fields ?? [], (M) => (t(), D(Ge, {
            key: M.key,
            field: M,
            value: C.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (A) => h(B, M.key, A)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Op, [
        (t(!0), a(P, null, j(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (B) => f(C.type)
        }, " + " + c(C.label), 9, jp))), 128)),
        d.value ? (t(), a("span", Vp, c(e.maxBlocks) + " is the maximum here. ", 1)) : x("", !0)
      ])
    ]));
  }
}), Dp = ["name", "value", "checked", "disabled", "onChange"], Tp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ip = /* @__PURE__ */ L({
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
      class: z(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), a(P, null, j(e.options, (u) => (t(), a("label", {
        key: String(u.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", u.value)
        }, null, 40, Dp),
        H(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Tp, " Nothing to choose from yet. ")) : x("", !0)
    ], 2));
  }
}), Ep = ["value", "checked", "disabled", "onChange"], Fp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Np = /* @__PURE__ */ L({
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
      return s.value.some((g) => g == f.value);
    }
    function d(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((g) => g != f.value) : [...s.value, f.value]
      );
    }
    const u = y(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, g) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), a(P, null, j(e.options, (v) => (t(), a("label", {
        key: String(v.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: v.value,
          checked: i(v),
          disabled: e.disabled,
          onChange: (h) => d(v)
        }, null, 40, Ep),
        H(" " + c(v.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Fp, " Nothing to choose from yet. ")) : x("", !0)
    ], 4));
  }
}), Rp = { class: "flex flex-col gap-1.5" }, Up = ["aria-label", "onClick"], Hp = ["placeholder", "disabled", "maxlength"], Kp = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, qp = ["onClick"], Gp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Wp = /* @__PURE__ */ L({
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
        (h) => !i.value.some((w) => w.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
      const w = h.trim().slice(0, n.field.maxLength ?? 40);
      if (w === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((b) => b.toLowerCase() === w.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, w]), s.value = "";
    }
    function g(h) {
      r(
        "update:modelValue",
        i.value.filter((w, b) => b !== h)
      );
    }
    function v(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (h, w) => (t(), a("div", Rp, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, j(i.value, (b, C) => (t(), a("span", {
          key: `${b}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          H(c(b) + " ", 1),
          e.disabled ? x("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${b}`,
            onClick: (B) => g(C)
          }, " × ", 8, Up))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (b) => s.value = b),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: v,
          onBlur: w[1] || (w[1] = (b) => f(s.value))
        }, null, 40, Hp), [
          [ze, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", Kp, [
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), a(P, null, j(u.value, (b) => (t(), a("button", {
          key: b,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(b)
        }, c(b), 9, qp))), 128))
      ])) : x("", !0),
      d.value ? (t(), a("p", Gp, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : x("", !0)
    ]));
  }
}), Zp = 4.5, kn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Qn(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function jt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Kt(e) {
  const [l, n, r] = Qn(e);
  return 0.2126 * jt(l) + 0.7152 * jt(n) + 0.0722 * jt(r);
}
function Xn(e, l) {
  const n = Kt(e), r = Kt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Jp(e, l, n) {
  if (!kn.test(e) || !kn.test(l))
    return e;
  const r = Kt(l) > 0.5, s = r ? 0 : 255;
  let i = Qn(e);
  for (let d = 0; d <= 20; d++) {
    const u = Yp(i);
    if (Xn(u, l) >= n)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Yp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Qp = { class: "flex flex-col gap-2" }, Xp = { class: "flex items-center gap-2" }, ev = {
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
}, tv = ["value", "disabled", "aria-label"], nv = ["value", "disabled", "placeholder"], av = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, lv = ["aria-label", "title", "onClick"], ov = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, sv = /* @__PURE__ */ L({
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
      const B = C.startsWith("#") ? C : `#${C}`;
      return s.test(B) ? B.toLowerCase() : C;
    }
    function f(b) {
      r("update:modelValue", u(b.target.value));
    }
    const g = y(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : Xn(i.value, n.field.contrastBackground)), v = y(() => n.field.contrastMinRatio ?? Zp), h = y(() => g.value !== null && g.value < v.value);
    function w() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Jp(i.value, n.field.contrastBackground, v.value)
      );
    }
    return (b, C) => (t(), a("div", Qp, [
      o("div", Xp, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (B) => r("update:modelValue", B.target.value))
        }, null, 40, tv)) : (t(), a("span", ev)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, nv)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", av, [
        (t(!0), a(P, null, j(e.field.presets, (B) => (t(), a("button", {
          key: B,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === B.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: B }),
          "aria-label": B,
          title: B,
          onClick: (M) => r("update:modelValue", B.toLowerCase())
        }, null, 14, lv))), 128))
      ])) : x("", !0),
      h.value ? (t(), a("p", ov, [
        o("span", null, " This fails contrast at " + c(g.value.toFixed(1)) + ":1 - it needs at least " + c(v.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? x("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: w
        }, " Use a readable shade "))
      ])) : x("", !0)
    ]));
  }
}), rv = ["aria-disabled"], iv = /* @__PURE__ */ L({
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
    const f = y(() => {
      const w = n.modelValue?.[n.latKey], b = n.modelValue?.[n.lngKey];
      return typeof w == "number" && typeof b == "number" ? { lat: w, lng: b } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const w = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = w, i = w.map(s.value).setView([f.value.lat, f.value.lng], n.zoom), w.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), v(), h(), n.pickable && !n.disabled && i.on("click", (b) => {
        r("update:modelValue", {
          [n.latKey]: Number(b.latlng.lat.toFixed(6)),
          [n.lngKey]: Number(b.latlng.lng.toFixed(6))
        });
      });
    }
    function v() {
      if (!(!i || !u))
        for (const w of n.markers) {
          const b = u.circleMarker([w.lat, w.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (w.label || w.popup) && b.bindPopup(`<strong>${w.label ?? ""}</strong>${w.popup ? `<br>${w.popup}` : ""}`);
        }
    }
    function h() {
      if (!i || !u)
        return;
      const w = n.modelValue?.[n.latKey], b = n.modelValue?.[n.lngKey];
      if (typeof w != "number" || typeof b != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([w, b]) : d = u.circleMarker([w, b], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([w, b], i.getZoom());
    }
    return ge(() => {
      g();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), fe(
      () => n.modelValue,
      () => h(),
      { deep: !0 }
    ), (w, b) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, rv));
  }
}), dv = { class: "flex flex-col gap-2" }, uv = { class: "text-muted-foreground text-xs font-normal" }, cv = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("div", dv, [
      E(iv, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": f[0] || (f[0] = (g) => r("update:modelValue", g))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", uv, [
        H(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), a(P, { key: 0 }, [
          H(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : x("", !0)
      ])
    ]));
  }
}), fv = { class: "flex flex-col gap-2" }, mv = ["width", "height"], pv = ["value", "disabled"], vv = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, gv = /* @__PURE__ */ L({
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
    return ge(() => {
      u();
    }), fe(i, () => {
      u();
    }), (f, g) => (t(), a("div", fv, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, mv),
      e.field.from ? (t(), a("p", vv, "From " + c(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (v) => r("update:modelValue", v.target.value))
      }, null, 40, pv))
    ]));
  }
}), hv = { class: "flex flex-col gap-2" }, bv = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, yv = ["aria-label"], xv = {
  key: 0,
  class: "text-destructive text-xs"
}, kv = ["value", "disabled"], $v = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, wv = /* @__PURE__ */ L({
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
        const g = n.values?.[n.field.from];
        return g == null ? "" : String(g);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), u = y(() => (n.field.format ?? "CODE128").toUpperCase());
    async function f() {
      if (!s.value)
        return;
      const g = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (g !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, g, {
            format: u.value,
            height: n.field.height ?? 80,
            width: n.field.width ?? 2,
            displayValue: n.field.displayValue !== !1,
            margin: 8,
            background: "#ffffff",
            lineColor: "#0f172a",
            fontSize: 14
          });
        } catch (v) {
          i.value = v instanceof Error ? v.message : "Could not render barcode";
        }
    }
    return ge(() => {
      f();
    }), fe([d, u], () => {
      f();
    }), (g, v) => (t(), a("div", hv, [
      o("div", bv, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, yv))
      ]),
      i.value ? (t(), a("p", xv, c(i.value), 1)) : x("", !0),
      e.field.from ? (t(), a("p", $v, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: v[0] || (v[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, kv))
    ]));
  }
}), Cv = { class: "mr-2 inline-block w-3 opacity-60" }, Sv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Mv = /* @__PURE__ */ L({
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
`), f = Math.max(d.length, u.length), g = [];
      for (let v = 0; v < f; v++) {
        const h = d[v], w = u[v];
        if (h === w) {
          h !== void 0 && g.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && g.push({ kind: "del", text: h }), w !== void 0 && g.push({ kind: "add", text: w });
      }
      return g;
    });
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(P, null, j(i.value, (f, g) => (t(), a("div", {
        key: g,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", Cv, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        H(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", Sv, "No differences.")) : x("", !0)
    ], 4));
  }
}), Bv = { class: "flex flex-col gap-3" }, Av = { class: "flex items-center justify-between gap-2" }, zv = { class: "text-sm font-medium" }, _v = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Pv = { class: "grid grid-cols-7 gap-1" }, Lv = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Ov = ["title"], q8 = /* @__PURE__ */ L({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = q(/* @__PURE__ */ new Date()), r = y(() => n.value.getFullYear()), s = y(() => n.value.getMonth()), i = y(
      () => n.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const v = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const w = v.get(h.date) ?? [];
        w.push(h), v.set(h.date, w);
      }
      return v;
    }), u = y(() => {
      const h = new Date(r.value, s.value, 1).getDay(), w = new Date(r.value, s.value + 1, 0).getDate(), b = [];
      for (let C = 0; C < h; C++)
        b.push({ day: null, key: `pad-${C}`, events: [] });
      for (let C = 1; C <= w; C++) {
        const B = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(C).padStart(2, "0")}`;
        b.push({ day: C, key: B, events: d.value.get(B) ?? [] });
      }
      return b;
    });
    function f() {
      n.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      n.value = new Date(r.value, s.value + 1, 1);
    }
    return (v, h) => (t(), a("div", Bv, [
      o("div", Av, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", zv, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", _v, [
        (t(), a(P, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (w) => o("span", { key: w }, c(w), 1)), 64))
      ]),
      o("div", Pv, [
        (t(!0), a(P, null, j(u.value, (w) => (t(), a("div", {
          key: w.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", w.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          w.day ? (t(), a("p", Lv, c(w.day), 1)) : x("", !0),
          (t(!0), a(P, null, j(w.events.slice(0, 3), (b, C) => (t(), a("p", {
            key: `${w.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: b.label
          }, c(b.label), 9, Ov))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), jv = { class: "flex items-center gap-3" }, Vv = ["min", "max", "step", "value", "disabled", "aria-label"], Dv = { class: "flex shrink-0 items-center gap-1" }, Tv = ["min", "max", "step", "value", "disabled"], Iv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ev = /* @__PURE__ */ L({
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
      const v = Number(n.modelValue);
      return Number.isFinite(v) ? v : s.value;
    }), f = y(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function g(v) {
      if (v === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(v);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (v, h) => (t(), a("div", jv, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (w) => g(w.target.value))
      }, null, 40, Vv),
      o("div", Dv, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (w) => g(w.target.value))
        }, null, 40, Tv),
        e.field.unit ? (t(), a("span", Iv, c(e.field.unit), 1)) : x("", !0)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ new Map();
function Vt(e, l) {
  mt.set(e, l);
}
function Fv(e) {
  return mt.get(e);
}
function G8(e) {
  return mt.has(e);
}
function Nv() {
  return [...mt.keys()].sort();
}
function W8() {
  mt.clear();
}
const Rv = ["name", "value", "checked", "disabled", "onChange"], Uv = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Hv = { class: "whitespace-nowrap" }, Kv = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, qv = ["name", "value", "checked", "disabled", "onChange"], Gv = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Wv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Zv = { class: "text-center text-xs font-medium" }, Jv = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Yv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Qv = /* @__PURE__ */ L({
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
      () => n.field.preview ? Fv(n.field.preview) : void 0
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
    function f(g) {
      return n.modelValue != null && g.value == n.modelValue;
    }
    return (g, v) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: z(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
          onChange: (w) => r("update:modelValue", h.value)
        }, null, 40, Rv),
        v[0] || (v[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Uv, [
          (t(), D(Ae(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : x("", !0),
        o("span", Hv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Kv, " Nothing to choose from yet. ")) : x("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, j(e.options, (h) => (t(), a("label", {
        key: String(h.value),
        class: z(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
          onChange: (w) => r("update:modelValue", h.value)
        }, null, 40, qv),
        v[1] || (v[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Gv, [
          s.value ? (t(), D(Ae(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Wv, " no preview ")) : x("", !0)
        ]),
        o("span", Zv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Jv, " Nothing to choose from yet. ")) : x("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", Yv, [
        v[2] || (v[2] = H(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        H(". Registered: " + c(k(Nv)().join(", ") || "none") + ". ", 1)
      ])) : x("", !0)
    ], 2));
  }
}), Xv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, eg = /* @__PURE__ */ L({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Xv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), tg = { class: "flex flex-col items-center gap-1 text-center" }, ng = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ea = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", tg, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", ng, c(e.caption), 1)) : x("", !0)
    ]));
  }
}), ag = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, lg = { class: "flex items-center gap-3" }, og = ["src"], sg = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, rg = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, ig = {
  key: 0,
  class: "text-right text-sm"
}, dg = { class: "text-neutral-500" }, ug = { class: "tabular-nums" }, cg = { key: 1 }, fg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, mg = { class: "mt-2 font-medium" }, pg = { key: 2 }, vg = { class: "w-full text-sm" }, gg = { class: "w-full py-3 pr-2" }, hg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, bg = { key: 0 }, yg = ["colspan"], xg = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, kg = { class: "w-64 text-sm" }, $g = { class: "tabular-nums" }, wg = {
  key: 3,
  class: "py-2"
}, Cg = { key: 4 }, Sg = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Mg = { class: "mt-2 flex flex-col gap-1 text-sm" }, Bg = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Ag = { key: 0 }, zg = {
  key: 1,
  class: "mt-1"
}, _g = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Pg = /* @__PURE__ */ L({
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
    return (f, g) => (t(), a("article", ag, [
      o("div", lg, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, og)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, j(e.document.blocks, (v, h) => (t(), a(P, { key: h }, [
        v.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: n() })
            }, c(v.title), 5),
            v.subtitle ? (t(), a("p", sg, c(v.subtitle), 1)) : x("", !0),
            v.reference ? (t(), a("p", rg, c(v.reference), 1)) : x("", !0)
          ]),
          r(v).length ? (t(), a("dl", ig, [
            (t(!0), a(P, null, j(r(v), (w, b) => (t(), a("div", {
              key: b,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", dg, c(w.label), 1),
              o("dd", ug, c(w.value), 1)
            ]))), 128))
          ])) : x("", !0)
        ], 4)) : v.type === "party" ? (t(), a("section", cg, [
          o("h2", fg, c(v.heading), 1),
          o("p", mg, c(v.name), 1),
          (t(!0), a(P, null, j(d(v.lines), (w, b) => (t(), a("p", {
            key: b,
            class: "text-sm text-neutral-600"
          }, c(w), 1))), 128))
        ])) : v.type === "lines" ? (t(), a("section", pg, [
          o("table", vg, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: n() })
              }, [
                (t(!0), a(P, null, j(d(v.columns), (w, b) => (t(), a("th", {
                  key: b,
                  class: z(["pb-2 font-medium", b > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(w), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, j(s(v), (w, b) => (t(), a("tr", {
                key: b,
                class: "border-b border-neutral-200"
              }, [
                o("td", gg, [
                  o("p", null, c(w.description), 1),
                  w.detail ? (t(), a("p", hg, c(w.detail), 1)) : x("", !0)
                ]),
                (t(!0), a(P, null, j(w.cells, (C, B) => (t(), a("td", {
                  key: B,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(v).length === 0 ? (t(), a("tr", bg, [
                o("td", {
                  colspan: d(v.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(v.empty), 9, yg)
              ])) : x("", !0)
            ])
          ]),
          i(v).length ? (t(), a("div", xg, [
            o("dl", kg, [
              (t(!0), a(P, null, j(i(v), (w, b) => (t(), a("div", {
                key: b,
                class: z([
                  "flex justify-between py-1",
                  w.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(w.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: z(w.strong ? "" : "text-neutral-600")
                }, c(w.label), 3),
                o("dd", $g, c(w.value), 1)
              ], 6))), 128))
            ])
          ])) : x("", !0)
        ])) : v.type === "code" ? (t(), a("section", wg, [
          E(ea, {
            code: u(v.code),
            caption: u(v.caption),
            style: se(u(v.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : v.type === "steps" ? (t(), a("section", Cg, [
          o("h2", Sg, c(v.heading), 1),
          o("ol", Mg, [
            (t(!0), a(P, null, j(d(v.items), (w, b) => (t(), a("li", {
              key: b,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: n() })
              }, c(b + 1) + ".", 5),
              o("span", null, c(w), 1)
            ]))), 128))
          ])
        ])) : v.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", v.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(v.emphasis ? { color: n() } : void 0)
        }, c(v.text), 7)) : v.type === "footer" ? (t(), a("footer", Bg, [
          v.text ? (t(), a("p", Ag, c(v.text), 1)) : x("", !0),
          d(v.contacts).length ? (t(), a("p", zg, c(d(v.contacts).join(" · ")), 1)) : x("", !0)
        ])) : (t(), a("p", _g, " This document contains a “" + c(v.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Lg = ["aria-label", "title"], Og = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jg = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, Z8 = /* @__PURE__ */ L({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = Gn(), r = y(() => l.value.theme === "dark");
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
      (t(), a("svg", Og, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", jg))
      ]))
    ], 8, Lg));
  }
}), Vg = ["width", "height"], Dg = { key: 0 }, Tg = ["x1", "x2", "y1", "y2"], Ig = ["x", "y"], Eg = ["x1", "x2", "y1", "y2"], Fg = ["x", "y"], Ng = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Rg = ["x", "y", "width", "height", "fill", "fill-opacity"], Ug = ["x", "y"], Hg = ["x", "y"], Kg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, qg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Gg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wg = { class: "text-xs font-semibold tabular-nums" }, Zg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jg = { class: "text-muted-foreground" }, $n = 5.6, J8 = /* @__PURE__ */ L({
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
    function r(S) {
      return n[S] ?? S;
    }
    function s(S, I) {
      if (!l.thresholds?.length)
        return I;
      const V = l.thresholds.find((Q) => S < Q.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = q(null), d = q(560), u = q(null);
    let f = null;
    ge(() => {
      f = new ResizeObserver((S) => {
        d.value = Math.max(160, S[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ke(() => f?.disconnect());
    const g = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, V) => ({
      ...I,
      color: I.color ?? g[V % g.length]
    }))), h = y(() => v.value[0]?.points.map((S) => S.label) ?? []), w = y(() => h.value.length), b = y(() => l.orientation === "horizontal"), C = y(() => Math.max(0, ...h.value.map((S) => S.length))), B = y(() => {
      if (!b.value)
        return l.showAxis ? 44 : 8;
      const S = C.value * $n + 16;
      return Math.round(Math.min(Math.max(60, S), d.value * 0.4));
    }), M = y(() => Math.max(4, Math.floor((B.value - 16) / $n)));
    function A(S) {
      return S.length <= M.value ? S : `${S.slice(0, M.value - 1)}…`;
    }
    const $ = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: B.value
    })), m = y(() => ({
      w: Math.max(1, d.value - $.value.left - $.value.right),
      h: Math.max(1, l.height - $.value.top - $.value.bottom)
    })), p = (S) => l.format ? l.format(S) : _(S);
    function _(S) {
      return Math.abs(S) >= 1e6 ? `${(S / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(S) >= 1e3 ? `${(S / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(S * 100) / 100);
    }
    const T = y(() => {
      const S = h.value.map(
        (he, ye) => l.stacked ? v.value.reduce((oe, ee) => oe + Math.max(0, ee.points[ye]?.value ?? 0), 0) : Math.max(...v.value.map((oe) => oe.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const I = Math.max(...S, 0);
      if (I <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((he) => I <= he * V) ?? 10) * V;
    }), F = y(
      () => (b.value ? m.value.h : m.value.w) / Math.max(1, w.value)
    ), Y = y(() => F.value * 0.68), N = y(
      () => l.stacked || v.value.length <= 1 ? Y.value : Y.value / v.value.length
    ), W = y(() => {
      const S = [], I = new Array(w.value).fill(0);
      return v.value.forEach((V, Q) => {
        V.points.forEach((he, ye) => {
          const ee = Math.max(0, he.value) / T.value * (b.value ? m.value.w : m.value.h), ae = (b.value ? $.value.top : $.value.left) + ye * F.value + (F.value - Y.value) / 2, Ce = l.stacked ? 0 : Q * N.value;
          S.push(
            b.value ? {
              x: $.value.left + I[ye],
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
              y: $.value.top + m.value.h - ee - I[ye],
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
      }), S;
    }), Z = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        value: T.value * (b.value ? S : 1 - S),
        x: $.value.left + m.value.w * S,
        y: $.value.top + m.value.h * S
      }))
    ), J = y(() => Math.max(1, Math.ceil(w.value / (b.value ? 14 : 10))));
    function K(S) {
      return S === w.value - 1 || S % J.value === 0;
    }
    function U(S) {
      return (b.value ? $.value.top : $.value.left) + S * F.value + F.value / 2;
    }
    const R = y(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: v.value.map((S) => ({
        name: S.name,
        color: S.color,
        value: S.points[u.value]?.value ?? 0
      }))
    });
    return (S, I) => (t(), a("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      w.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        (t(), a("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: I[0] || (I[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", Dg, [
            b.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: $.value.top,
                y2: $.value.top + m.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Tg))), 128)),
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, Ig))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("line", {
                key: `g-${V.y}`,
                x1: $.value.left,
                x2: d.value - $.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Eg))), 128)),
              (t(!0), a(P, null, j(Z.value, (V) => (t(), a("text", {
                key: `gt-${V.y}`,
                x: $.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(_(V.value)), 9, Fg))), 128))
            ], 64))
          ])) : x("", !0),
          (t(!0), a(P, null, j(h.value, (V, Q) => (t(), a("rect", {
            key: `hit-${Q}`,
            x: b.value ? $.value.left : $.value.left + Q * F.value,
            y: b.value ? $.value.top + Q * F.value : $.value.top,
            width: b.value ? m.value.w : F.value,
            height: b.value ? F.value : m.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Q ? 0.4 : 0,
            onMouseenter: (he) => u.value = Q
          }, null, 40, Ng))), 128)),
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
          }, null, 8, Rg))), 128)),
          b.value ? (t(!0), a(P, { key: 1 }, j(h.value, (V, Q) => pe((t(), a("text", {
            key: `c-${Q}`,
            x: $.value.left - 8,
            y: U(Q) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            H(c(A(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, Ug)), [
            [He, K(Q)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, j(h.value, (V, Q) => pe((t(), a("text", {
            key: `c-${Q}`,
            x: U(Q),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, Hg)), [
            [He, K(Q)]
          ])), 128))
        ], 40, Vg)),
        R.value ? (t(), a("div", Kg, [
          o("p", qg, c(R.value.label), 1),
          (t(!0), a(P, null, j(R.value.rows, (V, Q) => (t(), a("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Gg, c(V.name || "Value"), 1),
            o("span", Wg, c(p(V.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend && v.value.length > 1 ? (t(), a("div", Zg, [
          (t(!0), a(P, null, j(v.value, (V, Q) => (t(), a("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Jg, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), Yg = ["width", "height"], Qg = ["id"], Xg = ["stop-color"], eh = ["stop-color"], th = { key: 0 }, nh = ["x1", "x2", "y1", "y2"], ah = ["x", "y"], lh = ["x", "y"], oh = ["x1", "x2", "y1", "y2"], sh = ["d", "fill"], rh = ["d", "stroke", "stroke-dasharray"], ih = ["cx", "cy", "fill"], dh = { key: 1 }, uh = ["x1", "x2", "y1", "y2"], ch = ["cx", "cy", "fill"], fh = ["x", "y"], mh = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, ph = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, vh = { class: "text-xs font-semibold tabular-nums" }, gh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, hh = { class: "text-muted-foreground" }, bh = /* @__PURE__ */ L({
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
    const l = e, n = y(() => g.value.some((S) => S.axis === "right")), r = q(null), s = q(560), i = q(null);
    let d = null;
    ge(() => {
      d = new ResizeObserver((S) => {
        s.value = Math.max(160, S[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), g = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((I, V) => ({
      ...I,
      color: I.color ?? u[V % u.length]
    }))), v = y(() => g.value[0]?.points.map((S) => S.label) ?? []), h = y(() => v.value.length), w = y(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), b = (S) => l.format ? l.format(S) : C(S);
    function C(S) {
      return Math.abs(S) >= 1e6 ? `${(S / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(S) >= 1e3 ? `${(S / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(S * 100) / 100);
    }
    function B(S) {
      const I = Math.max(...S, 0);
      if (I <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(I));
      return ([1, 2, 2.5, 5, 10].find((he) => I <= he * V) ?? 10) * V;
    }
    const M = y(
      () => B(
        g.value.filter((S) => S.axis !== "right").flatMap((S) => S.points.map((I) => I.value))
      )
    ), A = y(
      () => B(
        g.value.filter((S) => S.axis === "right").flatMap((S) => S.points.map((I) => I.value))
      )
    ), $ = y(() => ({
      w: Math.max(1, s.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function m(S) {
      return w.value.left + (h.value <= 1 ? 0 : S / (h.value - 1) * $.value.w);
    }
    function p(S, I = "left") {
      const V = I === "right" ? A.value : M.value;
      return w.value.top + $.value.h - S / V * $.value.h;
    }
    const _ = y(
      () => g.value.map((S) => {
        const I = S.points.map((Q, he) => ({
          ...Q,
          x: m(he),
          y: p(Q.value, S.axis ?? "left")
        })), V = S.stepped ? T(I) : F(I);
        return { ...S, pts: I, line: V, area: Y(V, I) };
      })
    );
    function T(S) {
      if (S.length === 0)
        return "";
      let I = `M${S[0].x.toFixed(2)},${S[0].y.toFixed(2)}`;
      for (let V = 1; V < S.length; V++)
        I += ` L${S[V].x.toFixed(2)},${S[V - 1].y.toFixed(2)} L${S[V].x.toFixed(2)},${S[V].y.toFixed(2)}`;
      return I;
    }
    function F(S) {
      const I = S.length;
      if (I === 0)
        return "";
      if (I === 1)
        return `M${S[0].x},${S[0].y}`;
      const V = [], Q = [];
      for (let oe = 0; oe < I - 1; oe++)
        V[oe] = S[oe + 1].x - S[oe].x, Q[oe] = V[oe] === 0 ? 0 : (S[oe + 1].y - S[oe].y) / V[oe];
      const he = [Q[0]];
      for (let oe = 1; oe < I - 1; oe++)
        if (Q[oe - 1] * Q[oe] <= 0)
          he[oe] = 0;
        else {
          const ee = 2 * V[oe] + V[oe - 1], ae = V[oe] + 2 * V[oe - 1];
          he[oe] = (ee + ae) / (ee / Q[oe - 1] + ae / Q[oe]);
        }
      he[I - 1] = Q[I - 2];
      let ye = `M${S[0].x.toFixed(2)},${S[0].y.toFixed(2)}`;
      for (let oe = 0; oe < I - 1; oe++) {
        const ee = V[oe] / 3;
        ye += ` C${(S[oe].x + ee).toFixed(2)},${(S[oe].y + he[oe] * ee).toFixed(2)} ${(S[oe + 1].x - ee).toFixed(2)},${(S[oe + 1].y - he[oe + 1] * ee).toFixed(2)} ${S[oe + 1].x.toFixed(2)},${S[oe + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function Y(S, I) {
      if (I.length === 0)
        return "";
      const V = w.value.top + $.value.h;
      return `${S} L${I[I.length - 1].x.toFixed(2)},${V} L${I[0].x.toFixed(2)},${V} Z`;
    }
    const N = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        y: w.value.top + $.value.h * S,
        value: M.value * (1 - S)
      }))
    ), W = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        y: w.value.top + $.value.h * S,
        value: A.value * (1 - S)
      }))
    ), Z = y(() => Math.max(1, Math.ceil(h.value / 8)));
    function J(S) {
      return S === h.value - 1 || S % Z.value === 0;
    }
    function K(S) {
      const I = S.currentTarget.getBoundingClientRect(), V = S.clientX - I.left - w.value.left, Q = h.value <= 1 ? 1 : $.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / Q)));
    }
    const U = y(() => {
      if (i.value === null || h.value === 0)
        return null;
      const S = i.value;
      return {
        i: S,
        x: m(S),
        label: v.value[S],
        rows: _.value.map((I) => ({
          name: I.name,
          color: I.color,
          value: I.points[S]?.value ?? 0,
          y: I.pts[S]?.y ?? 0
        }))
      };
    }), R = y(() => {
      if (!U.value)
        return {};
      const S = U.value.x > s.value * 0.6;
      return {
        left: `${U.value.x}px`,
        top: "8px",
        transform: S ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (S, I) => (t(), a("div", {
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
            (t(!0), a(P, null, j(_.value, (V, Q) => (t(), a("linearGradient", {
              id: `pk-fill-${k(f)}-${Q}`,
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
              }, null, 8, Xg),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, eh)
            ], 8, Qg))), 128))
          ]),
          e.showAxis ? (t(), a("g", th, [
            (t(!0), a(P, null, j(N.value, (V) => (t(), a("line", {
              key: V.y,
              x1: w.value.left,
              x2: s.value - w.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, nh))), 128)),
            (t(!0), a(P, null, j(N.value, (V) => (t(), a("text", {
              key: `t-${V.y}`,
              x: w.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, ah))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, j(W.value, (V) => (t(), a("text", {
              key: `rt-${V.y}`,
              x: s.value - w.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, lh))), 128)) : x("", !0)
          ])) : x("", !0),
          (t(!0), a(P, null, j(v.value, (V, Q) => pe((t(), a("line", {
            key: `v-${Q}`,
            x1: m(Q),
            x2: m(Q),
            y1: w.value.top,
            y2: w.value.top + $.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, oh)), [
            [He, J(Q)]
          ])), 128)),
          (t(!0), a(P, null, j(_.value, (V, Q) => (t(), a("g", {
            key: `s-${Q}`
          }, [
            V.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${k(f)}-${Q})`
            }, null, 8, sh)) : x("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, rh),
            V.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, ih)) : x("", !0)
          ]))), 128)),
          U.value ? (t(), a("g", dh, [
            o("line", {
              x1: U.value.x,
              x2: U.value.x,
              y1: w.value.top,
              y2: w.value.top + $.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, uh),
            (t(!0), a(P, null, j(U.value.rows, (V, Q) => (t(), a("circle", {
              key: `d-${Q}`,
              cx: U.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, ch))), 128))
          ])) : x("", !0),
          (t(!0), a(P, null, j(v.value, (V, Q) => pe((t(), a("text", {
            key: `x-${Q}`,
            x: m(Q),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, fh)), [
            [He, J(Q)]
          ])), 128))
        ], 40, Yg)),
        U.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(R.value)
        }, [
          o("p", mh, c(U.value.label), 1),
          (t(!0), a(P, null, j(U.value.rows, (V, Q) => (t(), a("div", {
            key: Q,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", ph, c(V.name || "Value"), 1),
            o("span", vh, c(b(V.value)), 1)
          ]))), 128))
        ], 4)) : x("", !0),
        e.showLegend && g.value.length > 1 ? (t(), a("div", gh, [
          (t(!0), a(P, null, j(_.value, (V, Q) => (t(), a("span", {
            key: Q,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", hh, c(V.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), yh = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, xh = { class: "text-muted-foreground text-[11px] capitalize" }, kh = { class: "text-sm font-semibold tabular-nums" }, $h = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, pt = /* @__PURE__ */ L({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, n) => (t(), a("div", yh, [
      o("p", xh, c(e.label), 1),
      o("p", kh, [
        H(c(e.value) + " ", 1),
        e.share ? (t(), a("span", $h, " (" + c(e.share) + ") ", 1)) : x("", !0)
      ])
    ]));
  }
}), wh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Ch = ["width", "height", "viewBox", "aria-label"], Sh = ["d", "fill", "fill-opacity", "onMouseenter"], Mh = ["x", "y"], Bh = ["x", "y"], Ah = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, zh = ["onMouseenter"], _h = { class: "min-w-0 flex-1 truncate capitalize" }, Ph = { class: "tabular-nums font-medium" }, Lh = { class: "text-muted-foreground w-9 text-right tabular-nums" }, Y8 = /* @__PURE__ */ L({
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
    ], r = y(() => l.data.reduce((M, A) => M + A.value, 0)), s = q(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(M) {
      return n[M % n.length];
    }
    function g(M) {
      return 1 - Math.min(0.55, Math.floor(M / n.length) * 0.28);
    }
    const v = y(() => {
      if (r.value <= 0)
        return [];
      const M = i.value / 2;
      let A = -Math.PI / 2;
      return l.data.map(($, m) => {
        const p = $.value / r.value, _ = p * Math.PI * 2, T = A, F = A + _;
        return A = F, {
          ...$,
          share: p,
          colour: f(m),
          opacity: g(m),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: p >= 0.9999 ? b(M) : w(M, T, F, d.value, u.value)
        };
      });
    });
    function h(M, A, $) {
      return `${(M + Math.cos(A) * $).toFixed(2)},${(M + Math.sin(A) * $).toFixed(2)}`;
    }
    function w(M, A, $, m, p) {
      const _ = $ - A > Math.PI ? 1 : 0;
      return p <= 0 ? `M${M},${M} L${h(M, A, m)} A${m},${m} 0 ${_} 1 ${h(M, $, m)} Z` : [
        `M${h(M, A, m)}`,
        `A${m},${m} 0 ${_} 1 ${h(M, $, m)}`,
        `L${h(M, $, p)}`,
        `A${p},${p} 0 ${_} 0 ${h(M, A, p)}`,
        "Z"
      ].join(" ");
    }
    function b(M) {
      const A = d.value, $ = u.value, m = [
        `M${M - A},${M}`,
        `A${A},${A} 0 1 1 ${M + A},${M}`,
        `A${A},${A} 0 1 1 ${M - A},${M}`,
        "Z"
      ];
      return $ <= 0 ? m.join(" ") : [
        ...m,
        `M${M - $},${M}`,
        `A${$},${$} 0 1 0 ${M + $},${M}`,
        `A${$},${$} 0 1 0 ${M - $},${M}`,
        "Z"
      ].join(" ");
    }
    const C = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M), B = (M) => `${(M * 100).toFixed(M < 0.01 ? 2 : 0)}%`;
    return (M, A) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", wh, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), a(P, null, j(v.value, ($, m) => (t(), a("path", {
          key: m,
          d: $.path,
          fill: $.colour,
          "fill-opacity": s.value === null || s.value === m ? $.opacity : $.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (p) => s.value = m,
          onMouseleave: A[0] || (A[0] = (p) => s.value = null)
        }, null, 40, Sh))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : v.value[s.value].value)), 9, Mh),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : v.value[s.value].label), 9, Bh)
        ], 64)) : x("", !0)
      ], 8, Ch)),
      o("ul", Ah, [
        (t(!0), a(P, null, j(v.value, ($, m) => (t(), a("li", {
          key: m,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === m ? "bg-muted" : ""]),
          onMouseenter: (p) => s.value = m,
          onMouseleave: A[1] || (A[1] = (p) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: $.colour, opacity: $.opacity })
          }, null, 4),
          o("span", _h, c($.label), 1),
          o("span", Ph, c(C($.value)), 1),
          o("span", Lh, c(B($.share)), 1)
        ], 42, zh))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(pt, {
        key: 0,
        label: v.value[s.value].label,
        value: C(v.value[s.value].value),
        share: B(v.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), Oh = ["width", "height", "viewBox", "aria-label"], jh = { class: "text-border" }, Vh = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Dh = { class: "fill-muted-foreground text-[10px]" }, Th = ["x", "y"], Ih = ["x", "y"], Eh = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Fh = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, Q8 = /* @__PURE__ */ L({
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
    ), f = (Z, J) => J.color ?? n[Z % n.length], g = y(() => u.value.flatMap((Z) => Z.points)), v = y(() => g.value.some((Z) => typeof Z.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, w = y(() => Math.max(10, s.value - h.left - h.right)), b = y(() => Math.max(10, l.height - h.top - h.bottom));
    function C(Z) {
      if (Z.length === 0)
        return [0, 1];
      const J = Math.min(...Z), K = Math.max(...Z), U = K - J || Math.abs(K) || 1;
      return [J - U * 0.08, K + U * 0.08];
    }
    const B = y(() => C(g.value.map((Z) => Z.x))), M = y(() => C(g.value.map((Z) => Z.y))), A = (Z) => {
      const [J, K] = B.value;
      return h.left + (Z - J) / (K - J) * w.value;
    }, $ = (Z) => {
      const [J, K] = M.value;
      return h.top + b.value - (Z - J) / (K - J) * b.value;
    }, m = y(() => Math.max(...g.value.map((Z) => Z.r ?? 0), 0));
    function p(Z) {
      if (!v.value || !m.value)
        return 4;
      const J = Math.max(0, Z.r ?? 0) / m.value;
      return 3 + Math.sqrt(J) * (l.maxRadius - 3);
    }
    function _([Z, J]) {
      return Array.from({ length: 5 }, (K, U) => Z + (J - Z) / 4 * U);
    }
    const T = y(() => _(B.value)), F = y(() => _(M.value)), Y = (Z) => l.formatX?.(Z) ?? String(Math.round(Z * 100) / 100), N = (Z) => l.formatY?.(Z) ?? String(Math.round(Z * 100) / 100), W = y(() => {
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
        "aria-label": v.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", jh, [
          (t(!0), a(P, null, j(F.value, (K, U) => (t(), a("line", {
            key: `gy-${U}`,
            x1: h.left,
            x2: h.left + w.value,
            y1: $(K),
            y2: $(K),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": U === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Vh))), 128))
        ]),
        o("g", Dh, [
          (t(!0), a(P, null, j(F.value, (K, U) => (t(), a("text", {
            key: `ty-${U}`,
            x: h.left - 8,
            y: $(K) + 3,
            "text-anchor": "end"
          }, c(N(K)), 9, Th))), 128)),
          (t(!0), a(P, null, j(T.value, (K, U) => (t(), a("text", {
            key: `tx-${U}`,
            x: A(K),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(Y(K)), 9, Ih))), 128))
        ]),
        (t(!0), a(P, null, j(u.value, (K, U) => (t(), a("g", {
          key: `s-${U}`
        }, [
          (t(!0), a(P, null, j(K.points, (R, S) => (t(), a("circle", {
            key: `p-${U}-${S}`,
            cx: A(R.x),
            cy: $(R.y),
            r: p(R),
            fill: f(U, K),
            "fill-opacity": v.value ? 0.55 : 0.85,
            stroke: f(U, K),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== U || i.value.p !== S) ? 0.35 : 1,
            onMouseenter: (I) => i.value = { s: U, p: S },
            onMouseleave: J[0] || (J[0] = (I) => i.value = null)
          }, null, 40, Eh))), 128))
        ]))), 128))
      ], 8, Oh)),
      W.value ? (t(), D(pt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${Y(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${N(W.value.point.y)}`,
        share: v.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : x("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", Fh, [
        (t(!0), a(P, null, j(u.value, (K, U) => (t(), a("span", {
          key: `l-${U}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: f(U, K) }),
            "aria-hidden": "true"
          }, null, 4),
          H(" " + c(K.name), 1)
        ]))), 128))
      ])) : x("", !0)
    ], 512));
  }
}), Nh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Rh = ["width", "height", "viewBox"], Uh = ["points"], Hh = ["x1", "y1", "x2", "y2"], Kh = ["points", "fill", "stroke"], qh = ["cx", "cy", "fill", "onMouseenter"], Gh = ["x", "y", "text-anchor"], Wh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Zh = { class: "truncate" }, X8 = /* @__PURE__ */ L({
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
      () => l.series.map(($, m) => ({
        ...$,
        color: $.color ?? n[m % n.length]
      }))
    ), s = y(() => r.value[0]?.points.map(($) => $.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), f = y(() => d.value / 2 - 34), g = y(() => {
      const $ = Math.max(...r.value.flatMap((_) => _.points.map((T) => T.value)), 0);
      if ($ <= 0)
        return 1;
      const m = 10 ** Math.floor(Math.log10($));
      return ([1, 2, 2.5, 5, 10].find((_) => $ <= _ * m) ?? 10) * m;
    });
    function v($) {
      return $ / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h($, m) {
      const p = v($);
      return {
        x: u.value + Math.cos(p) * f.value * m,
        y: u.value + Math.sin(p) * f.value * m
      };
    }
    function w($) {
      return Array.from({ length: i.value }, (m, p) => {
        const _ = h(p, $);
        return `${_.x.toFixed(2)},${_.y.toFixed(2)}`;
      }).join(" ");
    }
    const b = y(() => [0.25, 0.5, 0.75, 1].map(($) => ({ f: $, points: w($) }))), C = y(
      () => r.value.map(($) => {
        const m = $.points.map((p) => Math.max(0, p.value) / g.value);
        return {
          name: $.name,
          color: $.color,
          values: $.points,
          outline: m.map((p, _) => {
            const T = h(_, p);
            return `${T.x.toFixed(2)},${T.y.toFixed(2)}`;
          }).join(" "),
          dots: m.map((p, _) => h(_, p))
        };
      })
    ), B = y(
      () => s.value.map(($, m) => {
        const p = v(m), _ = u.value + Math.cos(p) * (f.value + 14), T = u.value + Math.sin(p) * (f.value + 14), F = Math.cos(p);
        return {
          label: $,
          x: _,
          y: T + 3,
          anchor: Math.abs(F) < 0.2 ? "middle" : F > 0 ? "start" : "end"
        };
      })
    ), M = q(null), A = ($) => l.format ? l.format($) : new Intl.NumberFormat().format($);
    return ($, m) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Nh, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, j(b.value, (p) => (t(), a("polygon", {
          key: p.f,
          points: p.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Uh))), 128)),
        (t(!0), a(P, null, j(s.value, (p, _) => (t(), a("line", {
          key: `spoke-${_}`,
          x1: u.value,
          y1: u.value,
          x2: h(_, 1).x,
          y2: h(_, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Hh))), 128)),
        (t(!0), a(P, null, j(C.value, (p, _) => (t(), a("g", {
          key: `s-${_}`
        }, [
          o("polygon", {
            points: p.outline,
            fill: p.color,
            "fill-opacity": "0.16",
            stroke: p.color,
            "stroke-width": "2"
          }, null, 8, Kh),
          (t(!0), a(P, null, j(p.dots, (T, F) => (t(), a("circle", {
            key: F,
            cx: T.x,
            cy: T.y,
            r: "3",
            fill: p.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (Y) => M.value = {
              series: p.name,
              axis: s.value[F],
              value: p.values[F]?.value ?? 0
            },
            onMouseleave: m[0] || (m[0] = (Y) => M.value = null)
          }, null, 40, qh))), 128))
        ]))), 128)),
        (t(!0), a(P, null, j(B.value, (p, _) => (t(), a("text", {
          key: `l-${_}`,
          x: p.x,
          y: p.y,
          "text-anchor": p.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(p.label), 9, Gh))), 128))
      ], 8, Rh)),
      e.showLegend ? (t(), a("ul", Wh, [
        (t(!0), a(P, null, j(r.value, (p, _) => (t(), a("li", {
          key: _,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.color })
          }, null, 4),
          o("span", Zh, c(p.name), 1)
        ]))), 128))
      ])) : x("", !0),
      M.value ? (t(), D(pt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: A(M.value.value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), Jh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Yh = ["width", "height", "viewBox"], Qh = ["cx", "cy", "r"], Xh = ["d", "fill", "fill-opacity", "onMouseenter"], eb = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, tb = { class: "min-w-0 flex-1 truncate capitalize" }, nb = { class: "font-medium tabular-nums" }, e6 = /* @__PURE__ */ L({
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
    ], r = q(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map((w) => Math.max(0, w.value)), 0)), f = y(() => {
      const w = l.data.length;
      if (w === 0 || u.value <= 0)
        return [];
      const b = Math.PI * 2 / w;
      return l.data.map((C, B) => {
        const M = Math.sqrt(Math.max(0, C.value) / u.value), A = d.value * M, $ = B * b - Math.PI / 2, m = $ + b;
        return {
          ...C,
          color: n[B % n.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: g(i.value, $, m, A)
        };
      });
    });
    function g(w, b, C, B) {
      if (B <= 0)
        return "";
      if (C - b >= Math.PI * 2 - 1e-6)
        return `M${w - B},${w} A${B},${B} 0 1 1 ${w + B},${w} A${B},${B} 0 1 1 ${w - B},${w} Z`;
      const M = C - b > Math.PI ? 1 : 0, A = w + Math.cos(b) * B, $ = w + Math.sin(b) * B, m = w + Math.cos(C) * B, p = w + Math.sin(C) * B;
      return `M${w},${w} L${A.toFixed(2)},${$.toFixed(2)} A${B.toFixed(2)},${B.toFixed(2)} 0 ${M} 1 ${m.toFixed(2)},${p.toFixed(2)} Z`;
    }
    const v = y(() => [0.5, 0.75, 1].map((w) => d.value * w)), h = (w) => l.format ? l.format(w) : new Intl.NumberFormat().format(w);
    return (w, b) => f.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Jh, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, j(v.value, (C) => (t(), a("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Qh))), 128)),
        (t(!0), a(P, null, j(f.value, (C, B) => (t(), a("path", {
          key: B,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === B ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = B,
          onMouseleave: b[0] || (b[0] = (M) => r.value = null)
        }, null, 40, Xh))), 128))
      ], 8, Yh)),
      e.showLegend ? (t(), a("ul", eb, [
        (t(!0), a(P, null, j(f.value, (C, B) => (t(), a("li", {
          key: B,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", tb, c(C.label), 1),
          o("span", nb, c(h(C.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      r.value !== null ? (t(), D(pt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : x("", !0)
    ]));
  }
}), ab = ["width", "height"], lb = ["x1", "x2", "y1", "y2"], ob = ["x", "y"], sb = ["x", "y"], rb = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], ib = ["x", "y", "width", "height", "fill", "fill-opacity"], db = ["d", "stroke"], ub = ["cx", "cy", "fill"], cb = ["x", "y"], fb = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, mb = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, pb = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, vb = { class: "text-xs font-semibold tabular-nums" }, gb = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, hb = { class: "text-muted-foreground" }, t6 = /* @__PURE__ */ L({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = y(
      () => l.bars.map((U, R) => ({
        ...U,
        color: U.color ?? d[R % d.length]
      }))
    ), g = y(
      () => l.lines.map((U, R) => ({
        ...U,
        color: U.color ?? u[R % u.length]
      }))
    ), v = y(
      () => f.value[0]?.points.map((U) => U.label) ?? g.value[0]?.points.map((U) => U.label) ?? []
    ), h = y(() => v.value.length), w = y(() => l.lineAxis === "right"), b = y(() => ({
      top: 12,
      right: w.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = y(() => ({
      w: Math.max(1, r.value - b.value.left - b.value.right),
      h: Math.max(1, l.height - b.value.top - b.value.bottom)
    }));
    function B(U) {
      const R = Math.max(...U, 0);
      if (R <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(R));
      return ([1, 2, 2.5, 5, 10].find((V) => R <= V * S) ?? 10) * S;
    }
    const M = y(
      () => B([
        ...f.value.flatMap((U) => U.points.map((R) => R.value)),
        ...w.value ? [] : g.value.flatMap((U) => U.points.map((R) => R.value))
      ])
    ), A = y(
      () => w.value ? B(g.value.flatMap((U) => U.points.map((R) => R.value))) : M.value
    ), $ = y(() => C.value.w / Math.max(1, h.value)), m = y(() => $.value * 0.6), p = y(() => m.value / Math.max(1, f.value.length));
    function _(U) {
      return b.value.left + U * $.value + $.value / 2;
    }
    const T = y(
      () => f.value.flatMap(
        (U, R) => U.points.map((S, I) => {
          const V = Math.max(0, S.value) / M.value * C.value.h;
          return {
            x: _(I) - m.value / 2 + R * p.value,
            y: b.value.top + C.value.h - V,
            w: Math.max(0, p.value - 2),
            h: V,
            color: U.color,
            index: I,
            name: U.name,
            value: S.value,
            label: S.label
          };
        })
      )
    ), F = y(
      () => g.value.map((U) => {
        const R = U.points.map((S, I) => ({
          x: _(I),
          y: b.value.top + C.value.h - Math.max(0, S.value) / A.value * C.value.h,
          value: S.value
        }));
        return {
          ...U,
          pts: R,
          d: R.map((S, I) => `${I === 0 ? "M" : "L"}${S.x.toFixed(2)},${S.y.toFixed(2)}`).join(" ")
        };
      })
    ), Y = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((U) => ({
        y: b.value.top + C.value.h * U,
        left: M.value * (1 - U),
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
        label: v.value[U],
        rows: [
          ...f.value.map((R) => ({
            name: R.name,
            color: R.color,
            value: R.points[U]?.value ?? 0
          })),
          ...g.value.map((R) => ({
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
          onMouseleave: R[0] || (R[0] = (S) => s.value = null)
        }, [
          (t(!0), a(P, null, j(Y.value, (S) => (t(), a("line", {
            key: `g-${S.y}`,
            x1: b.value.left,
            x2: r.value - b.value.right,
            y1: S.y,
            y2: S.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, lb))), 128)),
          (t(!0), a(P, null, j(Y.value, (S) => (t(), a("text", {
            key: `lt-${S.y}`,
            x: b.value.left - 8,
            y: S.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(J(S.left)), 9, ob))), 128)),
          w.value ? (t(!0), a(P, { key: 0 }, j(Y.value, (S) => (t(), a("text", {
            key: `rt-${S.y}`,
            x: r.value - b.value.right + 8,
            y: S.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(J(S.right)), 9, sb))), 128)) : x("", !0),
          (t(!0), a(P, null, j(v.value, (S, I) => (t(), a("rect", {
            key: `hit-${I}`,
            x: b.value.left + I * $.value,
            y: b.value.top,
            width: $.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === I ? 0.4 : 0,
            onMouseenter: (V) => s.value = I
          }, null, 40, rb))), 128)),
          (t(!0), a(P, null, j(T.value, (S, I) => (t(), a("rect", {
            key: `b-${I}`,
            x: S.x,
            y: S.y,
            width: S.w,
            height: S.h,
            fill: S.color,
            "fill-opacity": s.value === null || s.value === S.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, ib))), 128)),
          (t(!0), a(P, null, j(F.value, (S, I) => (t(), a("g", {
            key: `l-${I}`
          }, [
            o("path", {
              d: S.d,
              fill: "none",
              stroke: S.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, db),
            s.value !== null && S.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: S.pts[s.value].x,
              cy: S.pts[s.value].y,
              r: "4",
              fill: S.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, ub)) : x("", !0)
          ]))), 128)),
          (t(!0), a(P, null, j(v.value, (S, I) => pe((t(), a("text", {
            key: `x-${I}`,
            x: _(I),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(S), 9, cb)), [
            [He, W(I)]
          ])), 128))
        ], 40, ab)),
        K.value ? (t(), a("div", fb, [
          o("p", mb, c(K.value.label), 1),
          (t(!0), a(P, null, j(K.value.rows, (S, I) => (t(), a("div", {
            key: I,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: S.color })
            }, null, 4),
            o("span", pb, c(S.name), 1),
            o("span", vb, c(Z(S.value)), 1)
          ]))), 128))
        ])) : x("", !0),
        e.showLegend ? (t(), a("div", gb, [
          (t(!0), a(P, null, j([...f.value, ...g.value], (S, I) => (t(), a("span", {
            key: I,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: S.color })
            }, null, 4),
            o("span", hb, c(S.name), 1)
          ]))), 128))
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), bb = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, yb = { class: "text-muted-foreground" }, xb = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, kb = ["width", "height"], $b = ["x", "y"], wb = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Cb = ["x", "y"], Sb = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Mb = { class: "text-[11px] font-medium capitalize" }, Bb = { class: "text-muted-foreground text-[11px] capitalize" }, Ab = { class: "text-sm font-semibold tabular-nums" }, zb = { class: "text-muted-foreground text-xs font-normal" }, n6 = /* @__PURE__ */ L({
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
      i = new ResizeObserver((m) => {
        r.value = Math.max(160, m[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((m) => m.label) ?? []), u = y(() => l.series.length), f = y(() => d.value.length), g = y(() => Math.min(140, Math.max(60, r.value * 0.16))), v = y(() => Math.max(1, r.value - g.value - 8)), h = y(() => v.value / Math.max(1, f.value)), w = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function b(m) {
      if (m === 0)
        return "var(--muted)";
      const p = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(m / p * 100)}%, var(--muted))`;
    }
    function C(m) {
      for (let p = 0; p < l.buckets.length; p++) {
        const _ = l.buckets[p].max;
        if (_ === void 0 || m < _)
          return p;
      }
      return l.buckets.length - 1;
    }
    const B = y(
      () => l.series.flatMap(
        (m, p) => m.points.map((_, T) => {
          const F = C(_.value);
          return {
            row: p,
            col: T,
            x: g.value + T * h.value,
            y: 4 + p * w.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, w.value - 4),
            colour: b(F),
            label: _.label,
            value: _.value,
            rowName: m.name,
            bucketLabel: l.buckets[F].label
          };
        })
      )
    ), M = y(() => h.value < 2), A = y(() => s.value ? B.value.find((m) => m.row === s.value.row && m.col === s.value.col) ?? null : null), $ = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, p) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        o("div", bb, [
          (t(!0), a(P, null, j(e.buckets, (_, T) => (t(), a("span", {
            key: T,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: b(T) })
            }, null, 4),
            o("span", yb, c(_.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), a("p", xb, c(f.value) + " columns - too many to label individually ", 1)) : x("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: p[0] || (p[0] = (_) => s.value = null)
        }, [
          (t(!0), a(P, null, j(e.series, (_, T) => (t(), a("text", {
            key: `r-${T}`,
            x: g.value - 10,
            y: 4 + T * w.value + w.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(_.name), 9, $b))), 128)),
          (t(!0), a(P, null, j(B.value, (_, T) => (t(), a("rect", {
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
          }, null, 40, wb))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), a(P, { key: 0 }, j(d.value, (_, T) => (t(), a("text", {
            key: `c-${T}`,
            x: g.value + T * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(_), 9, Cb))), 128)) : x("", !0)
        ], 40, kb)),
        A.value ? (t(), a("div", Sb, [
          o("p", Mb, c(A.value.label), 1),
          o("p", Bb, c(A.value.rowName), 1),
          o("p", Ab, [
            H(c($(A.value.value)) + " ", 1),
            o("span", zb, "(" + c(A.value.bucketLabel) + ")", 1)
          ])
        ])) : x("", !0)
      ], 64))
    ], 512));
  }
}), _b = ["viewBox"], Pb = { key: 0 }, Lb = ["id"], Ob = ["stop-color"], jb = ["stop-color"], Vb = ["d", "fill"], Db = ["d", "stroke"], wn = 100, ot = 30, _t = /* @__PURE__ */ L({
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
      const f = Math.min(...u), v = Math.max(...u) - f || 1;
      return u.map((h, w) => ({
        x: w / (u.length - 1) * wn,
        y: ot - (h - f) / v * (ot - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const g = [], v = [];
      for (let b = 0; b < f - 1; b++)
        g[b] = u[b + 1].x - u[b].x, v[b] = g[b] === 0 ? 0 : (u[b + 1].y - u[b].y) / g[b];
      const h = [v[0]];
      for (let b = 1; b < f - 1; b++)
        if (v[b - 1] * v[b] <= 0)
          h[b] = 0;
        else {
          const C = 2 * g[b] + g[b - 1], B = g[b] + 2 * g[b - 1];
          h[b] = (C + B) / (C / v[b - 1] + B / v[b]);
        }
      h[f - 1] = v[f - 2];
      let w = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let b = 0; b < f - 1; b++) {
        const C = g[b] / 3;
        w += ` C${(u[b].x + C).toFixed(2)},${(u[b].y + h[b] * C).toFixed(2)} ${(u[b + 1].x - C).toFixed(2)},${(u[b + 1].y - h[b + 1] * C).toFixed(2)} ${u[b + 1].x.toFixed(2)},${u[b + 1].y.toFixed(2)}`;
      }
      return w;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((f, g) => `${g === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${ot} L${u[0].x.toFixed(2)},${ot} Z`;
    });
    return (u, f) => i.value ? (t(), a("svg", {
      key: 0,
      viewBox: `0 0 ${wn} ${ot}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), a("defs", Pb, [
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
          }, null, 8, Ob),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, jb)
        ], 8, Lb)
      ])) : x("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(n)})`
      }, null, 8, Vb)) : x("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Db)
    ], 12, _b)) : x("", !0);
  }
}), Tb = { class: "flex items-center gap-1 text-xs" }, Ib = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Eb = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ta = /* @__PURE__ */ L({
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
    return (d, u) => (t(), a("span", Tb, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Ib, c(s.value), 1),
        H(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", Eb, c(e.comparison), 1)) : x("", !0)
    ]));
  }
}), Fb = ["data-collapsed"], Nb = { class: "flex flex-wrap items-start justify-between gap-2" }, Rb = { class: "flex min-w-0 items-start gap-2" }, Ub = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hb = ["d"], Kb = { class: "min-w-0" }, qb = { class: "text-sm font-medium" }, Gb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Wb = { class: "flex shrink-0 items-center gap-1.5" }, Zb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Jb = ["aria-pressed", "onClick"], Yb = ["aria-expanded", "aria-label", "title"], Qb = ["aria-label"], Xb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, e1 = ["d"], t1 = /* @__PURE__ */ L({
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
    const l = e, n = qt(), r = q(l.defaultCollapsed), s = y(() => !!l.icon && !n.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Nb, [
        o("div", Rb, [
          G(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Ub, [
              o("path", {
                d: k(ce)(e.icon)
              }, null, 8, Hb)
            ])) : x("", !0)
          ]),
          o("div", Kb, [
            o("p", qb, c(e.label), 1),
            e.description ? (t(), a("p", Gb, c(e.description), 1)) : x("", !0),
            G(d.$slots, "trend")
          ])
        ]),
        o("div", Wb, [
          G(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", Zb, [
            (t(!0), a(P, null, j(e.periods, (f) => (t(), a("button", {
              key: f.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (g) => d.$emit("update:period", f.value)
            }, c(f.label), 11, Jb))), 128))
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
              class: z(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, Yb)) : x("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), a("svg", Xb, [
              o("path", {
                d: k(ce)("eye-off")
              }, null, 8, e1)
            ]))
          ], 8, Qb)) : x("", !0)
        ])
      ]),
      r.value ? x("", !0) : (t(), a("div", {
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
    ], 10, Fb));
  }
}), n1 = ["aria-pressed", "aria-label", "title"], a1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, l1 = ["d"], o1 = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, s1 = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, r1 = ["href"], i1 = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, d1 = ["d"], u1 = ["aria-label", "onClick"], c1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, f1 = ["d"], m1 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, p1 = ["d"], v1 = {
  key: 0,
  class: "flex flex-col gap-1"
}, g1 = ["onClick"], h1 = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, b1 = ["d"], y1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, x1 = /* @__PURE__ */ L({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!1), i = q(!1), d = y(
      () => n.catalog.filter((g) => !n.items.some((v) => v.id === g.id))
    );
    function u(g) {
      r(
        "update:items",
        n.items.filter((v) => v.id !== g)
      );
    }
    function f(g) {
      r("update:items", [...n.items, g]), i.value = !1;
    }
    return (g, v) => (t(), a(P, null, [
      E(t1, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: v[3] || (v[3] = (h) => r("hide"))
      }, {
        actions: O(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: v[0] || (v[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", a1, [
              o("path", {
                d: k(ce)(s.value ? "check" : "pencil")
              }, null, 8, l1)
            ]))
          ], 8, n1)
        ]),
        default: O(() => [
          e.items.length === 0 ? (t(), a("div", o1, [
            v[7] || (v[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: v[1] || (v[1] = (h) => i.value = !0)
            }, {
              default: O(() => [...v[6] || (v[6] = [
                H("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", s1, [
            (t(!0), a(P, null, j(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", i1, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, d1)
                ])),
                H(" " + c(h.label), 1)
              ], 8, r1),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (w) => u(h.id)
              }, [
                (t(), a("svg", c1, [
                  o("path", {
                    d: k(ce)("x")
                  }, null, 8, f1)
                ]))
              ], 8, u1)) : x("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: v[2] || (v[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", m1, [
                o("path", {
                  d: k(ce)("plus")
                }, null, 8, p1)
              ])),
              v[8] || (v[8] = H(" Add ", -1))
            ])) : x("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(dt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: v[5] || (v[5] = (h) => i.value = !1)
      }, {
        footer: O(() => [
          E(de, {
            variant: "outline",
            onClick: v[4] || (v[4] = (h) => i.value = !1)
          }, {
            default: O(() => [...v[9] || (v[9] = [
              H("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: O(() => [
          d.value.length ? (t(), a("ul", v1, [
            (t(!0), a(P, null, j(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (w) => f(h)
              }, [
                (t(), a("svg", h1, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, b1)
                ])),
                H(" " + c(h.label), 1)
              ], 8, g1)
            ]))), 128))
          ])) : (t(), a("p", y1, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), k1 = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, $1 = { class: "flex flex-1 flex-col gap-1 p-4" }, w1 = { class: "text-muted-foreground relative text-xs font-medium" }, C1 = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, S1 = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, M1 = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, B1 = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, a6 = /* @__PURE__ */ L({
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
    return (n, r) => (t(), a("div", k1, [
      o("div", $1, [
        o("p", w1, c(e.label), 1),
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", C1, " Could not load ")) : (t(), a("span", S1, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(ta, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", M1, c(e.description), 1)) : x("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", B1, [
        E(_t, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : x("", !0)
    ]));
  }
}), A1 = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, z1 = { class: "flex flex-col gap-1 p-4" }, _1 = { class: "flex items-start justify-between gap-2" }, P1 = { class: "text-sm font-medium" }, L1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, O1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, j1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, V1 = {
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
    return (i, d) => (t(), a("div", A1, [
      o("div", z1, [
        o("div", _1, [
          o("p", P1, c(e.label), 1),
          G(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", L1, c(e.caption), 1)) : x("", !0),
        o("div", O1, [
          e.loading ? (t(), D(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", j1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : x("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", V1, [
        E(_t, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : x("", !0)
    ]));
  }
}), D1 = { class: "relative flex flex-col gap-2" }, T1 = ["aria-label"], I1 = ["onMouseenter"], E1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, F1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, N1 = { class: "truncate" }, R1 = { class: "text-sm font-semibold tabular-nums" }, l6 = /* @__PURE__ */ L({
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
    ], r = y(() => l.segments.reduce((g, v) => g + Math.max(0, v.value), 0)), s = y(() => Math.max(l.total ?? r.value, r.value, 1)), i = y(
      () => l.segments.map((g, v) => {
        const h = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? n[v % n.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = q(null), f = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, v) => (t(), a("div", D1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, j(i.value, (h, w) => (t(), a("span", {
          key: w,
          class: z(["h-full transition-all", [
            w === 0 ? "rounded-l-full" : "",
            w === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === w ? 1 : 0.4
          }),
          onMouseenter: (b) => u.value = w,
          onMouseleave: v[0] || (v[0] = (b) => u.value = null)
        }, null, 46, I1))), 128))
      ], 12, T1),
      e.showLegend ? (t(), a("div", E1, [
        (t(!0), a(P, null, j(i.value, (h, w) => (t(), a("div", {
          key: w,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", F1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", N1, c(h.label), 1)
          ]),
          o("span", R1, c(d(h.value)), 1)
        ]))), 128))
      ])) : x("", !0),
      u.value !== null ? (t(), D(pt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : x("", !0)
    ]));
  }
}), U1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, H1 = ["data-heading"], K1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, q1 = { class: "text-muted-foreground truncate" }, G1 = ["aria-label"], o6 = /* @__PURE__ */ L({
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
        const d = i.bar.segments.reduce((f, g) => f + Math.max(0, g.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), a("div", U1, [
      (t(!0), a(P, null, j(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), a("div", K1, [
          o("span", q1, c(u.label), 1),
          o("span", {
            class: z(["shrink-0 font-medium tabular-nums", u.tone ? n[u.tone] : "text-foreground"])
          }, c(u.value), 3)
        ])),
        u.segments.length ? (t(), a("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), a(P, null, j(u.segments, (f, g) => (t(), a("span", {
            key: g,
            class: z(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, G1)) : x("", !0)
      ], 8, H1))), 128))
    ]));
  }
}), W1 = {
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
}, Z1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function J1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function Y1(e, l) {
  return l || (e ? W1[J1(e)] ?? "neutral" : "neutral");
}
function Q1(e, l) {
  return Z1[Y1(e, l)];
}
const $e = /* @__PURE__ */ L({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = y(() => Q1(l.status, l.tone));
    return (r, s) => (t(), D(We, {
      variant: n.value,
      class: z(l.class)
    }, {
      default: O(() => [
        G(r.$slots, "default", {}, () => [
          H(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), X1 = ["data-layout"], ey = ["src", "alt"], ty = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, ny = ["src"], ay = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, ly = ["onMouseenter"], oy = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, sy = { class: "min-w-0" }, ry = { class: "truncate text-sm font-medium" }, iy = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, dy = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, uy = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, cy = { class: "min-w-0" }, fy = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, my = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, py = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, vy = ["d"], gy = ["aria-label"], hy = /* @__PURE__ */ L({
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
    function d(B) {
      if (typeof B != "string")
        return null;
      const M = B.trim();
      return M === "" ? null : /^(https?:)?\/\//i.test(M) ? M : null;
    }
    const u = y(() => {
      const B = [r.item.image, ...r.item.images ?? []].map(d).filter((M) => M !== null);
      return [...new Set(B)];
    }), f = y(() => u.value[i.value] ?? u.value[0] ?? null), g = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((B) => B[0]?.toUpperCase() ?? "").join("")
    ), v = y(() => {
      const B = r.item.progress;
      if (!B)
        return null;
      const M = Math.max(B.total ?? 100, B.value, 1);
      return `${Math.min(100, Math.max(0, B.value / M * 100)).toFixed(2)}%`;
    }), h = y(() => u.value.length > 1 ? u.value[1] : null), w = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), b = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(B) {
      B.stopPropagation(), s("cart", r.item.key);
    }
    return (B, M) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: M[0] || (M[0] = (A) => s("select", e.item.key)),
      onKeydown: M[1] || (M[1] = Tt(ve((A) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: M[2] || (M[2] = (A) => i.value = 0)
    }, [
      o("div", {
        class: z([
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
        }, null, 8, ey)) : (t(), a("span", ty, c(g.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, ny)) : x("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", ay, [
          (t(!0), a(P, null, j(u.value, (A, $) => (t(), a("span", {
            key: $,
            class: z(["size-1.5 rounded-full", $ === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (m) => i.value = $
          }, null, 42, ly))), 128))
        ])) : x("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", oy, [
          o("div", sy, [
            o("p", ry, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", iy, c(e.item.caption), 1)) : x("", !0),
            e.item.facts?.length ? (t(), a("p", dy, c(e.item.facts.join(" · ")), 1)) : x("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : x("", !0)
        ]),
        o("div", uy, [
          o("div", cy, [
            e.item.price ? (t(), a("p", fy, c(e.item.price), 1)) : x("", !0),
            b.value ? (t(), a("p", my, c(b.value), 1)) : x("", !0)
          ]),
          w.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", py, [
              o("path", {
                d: k(ce)("cart")
              }, null, 8, vy)
            ]))
          ])) : x("", !0)
        ]),
        v.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: z(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: v.value })
          }, null, 6)
        ], 8, gy)) : x("", !0)
      ], 2)
    ], 42, X1));
  }
});
function by(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function yy(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function xy(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const ky = ["data-featured", "data-recommended"], $y = { class: "flex flex-col gap-1" }, wy = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, Cy = { key: 0 }, Sy = { key: 1 }, My = { key: 2 }, By = { key: 3 }, Ay = { class: "text-sm font-semibold" }, zy = { class: "flex items-baseline gap-1" }, _y = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Py = { class: "text-muted-foreground text-sm font-normal" }, Ly = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, Oy = { class: "text-muted-foreground mt-1 text-xs" }, jy = { class: "flex flex-1 flex-col gap-2 text-sm" }, Vy = { class: "flex min-w-0 items-start gap-2" }, Dy = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ty = ["d"], Iy = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Ey = ["d"], Fy = { class: "capitalize" }, Ny = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Ry = { class: "text-foreground font-medium" }, Uy = { class: "mt-auto flex gap-2 pt-2" }, Hy = /* @__PURE__ */ L({
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
      const f = n.plan.perks ?? {};
      return Object.entries(f).map(([g, v]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: xy(v.value),
        display: yy(v.value)
      }));
    }), u = y(() => n.plan.extraPerks ?? []);
    return (f, g) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", $y, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", wy, [
          e.plan.recommended ? (t(), a("span", Cy, "Recommended")) : e.plan.featured ? (t(), a("span", Sy, "Featured")) : x("", !0),
          e.plan.trial ? (t(), a("span", My, "Trial")) : x("", !0),
          e.plan.active === !1 ? (t(), a("span", By, "Inactive")) : x("", !0)
        ])) : x("", !0),
        o("h3", Ay, c(e.plan.name), 1),
        o("p", zy, [
          o("span", _y, c(s.value), 1),
          o("span", Py, c(k(by)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", Ly, c(e.plan.shortDescription), 1)) : x("", !0),
        o("p", Oy, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", jy, [
        (t(!0), a(P, null, j(d.value, (v) => (t(), a("li", {
          key: v.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", Vy, [
            o("span", {
              class: z(["mt-0.5 shrink-0", v.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              v.granted ? (t(), a("svg", Dy, [
                o("path", {
                  d: k(ce)("check")
                }, null, 8, Ty)
              ])) : (t(), a("svg", Iy, [
                o("path", {
                  d: k(ce)("x")
                }, null, 8, Ey)
              ]))
            ], 2),
            o("span", Fy, c(v.label), 1)
          ]),
          v.display ? (t(), a("span", Ny, c(v.display), 1)) : x("", !0)
        ]))), 128)),
        (t(!0), a(P, null, j(u.value, (v, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(v.key), 1),
          o("span", Ry, c(v.value), 1)
        ]))), 128))
      ]),
      o("footer", Uy, [
        E(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (v) => r("edit", e.plan.id))
        }, {
          default: O(() => [...g[2] || (g[2] = [
            H(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (v) => r("delete", e.plan.id))
        }, {
          default: O(() => [...g[3] || (g[3] = [
            H(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, ky));
  }
}), Ky = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, qy = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, Gy = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Wy = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Zy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, s6 = /* @__PURE__ */ L({
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
      class: z(["w-full space-y-6", e.embedded ? "" : k(tt)]),
      "data-slot": "plan-grid"
    }, [
      o("header", Ky, [
        o("div", null, [
          e.title ? (t(), a("h1", qy, c(e.title), 1)) : x("", !0),
          e.description ? (t(), a("p", Gy, c(e.description), 1)) : x("", !0)
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
      e.plans.length === 0 ? (t(), a("p", Wy, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Zy, [
        (t(!0), a(P, null, j(e.plans, (i) => (t(), D(Hy, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Jy = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Yy = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Qy = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Xy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, ex = { class: "space-y-1.5" }, tx = { class: "space-y-1.5" }, nx = { class: "space-y-1.5" }, ax = { class: "space-y-1.5" }, lx = { class: "space-y-1.5" }, ox = { class: "flex items-center gap-3 text-sm" }, sx = { class: "flex items-center gap-3 text-sm" }, rx = { class: "flex items-center gap-3 text-sm" }, ix = {
  key: 0,
  class: "space-y-1.5"
}, dx = { class: "flex items-center gap-3 text-sm" }, ux = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, cx = { class: "space-y-1.5" }, fx = ["value"], mx = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, px = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, vx = ["id", "value", "onInput"], gx = { class: "space-y-2" }, hx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, bx = ["d"], r6 = /* @__PURE__ */ L({
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
    }), r = e, s = l, i = it(n());
    function d($, m) {
      const p = i.perks?.[$]?.value;
      return p ?? m;
    }
    function u($, m, p) {
      const _ = i.perks?.[$];
      i.perks = {
        ...i.perks ?? {},
        [$]: {
          value: m,
          overview: p ?? _?.overview ?? ""
        }
      };
    }
    function f($, m) {
      const p = i.perks?.[$];
      i.perks = {
        ...i.perks ?? {},
        [$]: {
          value: p?.value ?? ($ === "modules" ? [] : 0),
          overview: m
        }
      };
    }
    function g($) {
      const m = $ ? { ...n(), ...$ } : n();
      i.id = m.id, i.name = m.name, i.shortDescription = m.shortDescription ?? "", i.description = m.description ?? "", i.days = m.days, i.price = m.price, i.featured = m.featured ?? !1, i.recommended = m.recommended ?? !1, i.trial = m.trial ?? !1, i.trialDays = m.trialDays ?? 0, i.active = m.active ?? !0, i.perks = { ...m.perks ?? {} }, i.extraPerks = [...m.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    g(r.plan), fe(
      () => r.plan,
      ($) => g($),
      { deep: !0 }
    );
    const v = y({
      get: () => {
        const $ = d("modules", []);
        return Array.isArray($) ? $.map(String) : [];
      },
      set: ($) => {
        u("modules", w($.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = y(
      () => r.modules.map(($) => ({ value: $.key, label: $.label }))
    );
    function w($) {
      const m = Object.fromEntries(r.modules.map((T) => [T.key, T])), p = new Set($);
      for (const T of r.modules)
        if (!p.has(T.key))
          for (const F of T.children ?? [])
            p.delete(F);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (const T of [...p])
          for (const F of m[T]?.requires ?? [])
            p.has(F) || (p.add(F), _ = !0);
      }
      return [...p];
    }
    function b() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C($) {
      i.extraPerks = (i.extraPerks ?? []).filter((m, p) => p !== $);
    }
    function B() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter(($) => $.key.trim() !== "")
      });
    }
    const M = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`, A = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`;
    return ($, m) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : k(tt)]),
      "data-slot": "plan-editor",
      onSubmit: ve(B, ["prevent"])
    }, [
      o("header", Jy, [
        o("div", null, [
          o("h1", Yy, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          m[13] || (m[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(de, {
          type: "button",
          variant: "outline",
          onClick: m[0] || (m[0] = (p) => s("cancel"))
        }, {
          default: O(() => [...m[14] || (m[14] = [
            H("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Qy, [
        o("section", Xy, [
          m[26] || (m[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", ex, [
            E(_e, { for: "plan-name" }, {
              default: O(() => [...m[15] || (m[15] = [
                H("Plan name", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": m[1] || (m[1] = (p) => i.name = p),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", tx, [
            E(_e, { for: "plan-short" }, {
              default: O(() => [...m[16] || (m[16] = [
                H("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": m[2] || (m[2] = (p) => i.shortDescription = p),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", nx, [
            E(_e, { for: "plan-description" }, {
              default: O(() => [...m[17] || (m[17] = [
                H("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": m[3] || (m[3] = (p) => i.description = p),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(A)
            }, null, 512), [
              [ze, i.description]
            ])
          ]),
          o("div", ax, [
            E(_e, { for: "plan-days" }, {
              default: O(() => [...m[18] || (m[18] = [
                H("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": m[4] || (m[4] = (p) => i.days = p),
              class: z(M)
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
          o("div", lx, [
            E(_e, { for: "plan-price" }, {
              default: O(() => [...m[20] || (m[20] = [
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
              "onUpdate:modelValue": m[5] || (m[5] = (p) => i.price = Number(p))
            }, null, 8, ["model-value"])
          ]),
          o("label", ox, [
            E(k(Je), {
              checked: !!i.featured,
              "onUpdate:checked": m[6] || (m[6] = (p) => i.featured = p)
            }, null, 8, ["checked"]),
            m[21] || (m[21] = H(" Featured ", -1))
          ]),
          o("label", sx, [
            E(k(Je), {
              checked: !!i.recommended,
              "onUpdate:checked": m[7] || (m[7] = (p) => i.recommended = p)
            }, null, 8, ["checked"]),
            m[22] || (m[22] = H(" Recommended ", -1))
          ]),
          o("label", rx, [
            E(k(Je), {
              checked: !!i.trial,
              "onUpdate:checked": m[8] || (m[8] = (p) => i.trial = p)
            }, null, 8, ["checked"]),
            m[23] || (m[23] = H(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", ix, [
            E(_e, { for: "plan-trial-days" }, {
              default: O(() => [...m[24] || (m[24] = [
                H("Trial days", -1)
              ])]),
              _: 1
            }),
            E(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": m[9] || (m[9] = (p) => i.trialDays = Number(p))
            }, null, 8, ["model-value"])
          ])) : x("", !0),
          o("label", dx, [
            E(k(Je), {
              checked: i.active !== !1,
              "onUpdate:checked": m[10] || (m[10] = (p) => i.active = p)
            }, null, 8, ["checked"]),
            m[25] || (m[25] = H(" Active ", -1))
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
        o("section", ux, [
          m[33] || (m[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", cx, [
            E(_e, null, {
              default: O(() => [...m[27] || (m[27] = [
                H("Modules access", -1)
              ])]),
              _: 1
            }),
            E(Xt, {
              modelValue: v.value,
              "onUpdate:modelValue": m[11] || (m[11] = (p) => v.value = p),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(_e, { for: "plan-modules-overview" }, {
              default: O(() => [...m[28] || (m[28] = [
                H("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(A),
              onInput: m[12] || (m[12] = (p) => f(
                "modules",
                p.target.value
              ))
            }, null, 40, fx)
          ]),
          (t(!0), a(P, null, j(e.limits, (p) => (t(), a("div", {
            key: p.key,
            class: "space-y-1.5"
          }, [
            p.kind === "toggle" ? (t(), a("label", mx, [
              E(k(Je), {
                checked: !!d(p.key, !1),
                "onUpdate:checked": (_) => u(
                  p.key,
                  _,
                  i.perks?.[p.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              H(" " + c(p.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              E(_e, {
                for: `plan-limit-${p.key}`
              }, {
                default: O(() => [
                  H(c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              p.hint ? (t(), a("p", px, c(p.hint), 1)) : x("", !0),
              E(we, {
                id: `plan-limit-${p.key}`,
                "model-value": Number(d(p.key, 0)),
                type: "number",
                step: p.step ?? 1,
                required: "",
                "onUpdate:modelValue": (_) => u(
                  p.key,
                  Number(_),
                  i.perks?.[p.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              m[29] || (m[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(_e, {
              for: `plan-overview-${p.key}`
            }, {
              default: O(() => [...m[30] || (m[30] = [
                H("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${p.key}`,
              value: i.perks?.[p.key]?.overview ?? "",
              class: z(A),
              onInput: (_) => f(
                p.key,
                _.target.value
              )
            }, null, 40, vx)
          ]))), 128)),
          o("div", gx, [
            m[32] || (m[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, j(i.extraPerks ?? [], (p, _) => (t(), a("div", {
              key: _,
              class: "flex items-center gap-2"
            }, [
              E(we, {
                modelValue: p.key,
                "onUpdate:modelValue": (T) => p.key = T,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(we, {
                modelValue: p.value,
                "onUpdate:modelValue": (T) => p.value = T,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (T) => C(_)
              }, {
                default: O(() => [
                  (t(), a("svg", hx, [
                    o("path", {
                      d: k(ce)("x")
                    }, null, 8, bx)
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
              default: O(() => [...m[31] || (m[31] = [
                H(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), yx = ["data-current", "data-recommended"], xx = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, kx = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, $x = { class: "text-sm font-semibold" }, wx = { class: "flex items-baseline gap-1" }, Cx = { class: "text-4xl font-bold tracking-tight tabular-nums" }, Sx = { class: "text-muted-foreground text-sm font-normal" }, Mx = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, Bx = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, Ax = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, zx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, _x = ["d"], Px = { class: "text-muted-foreground" }, Lx = {
  key: 3,
  class: "flex-1"
}, Ox = {
  key: 4,
  class: "mt-auto pt-2"
}, i6 = /* @__PURE__ */ L({
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
      class: z([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), a("span", xx, " Most popular ")) : e.plan.current ? (t(), a("span", kx, " Current plan ")) : x("", !0),
      o("header", {
        class: z(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", $x, c(e.plan.name), 1),
        o("p", wx, [
          o("span", Cx, c(s.value), 1),
          o("span", Sx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), a("p", Mx, c(e.plan.description), 1)) : x("", !0)
      ], 2),
      e.plan.features?.length ? (t(), a("ul", Bx, [
        (t(!0), a(P, null, j(e.plan.features, (g, v) => (t(), a("li", {
          key: v,
          class: "flex items-start gap-2"
        }, [
          o("span", Ax, [
            (t(), a("svg", zx, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, _x)
            ]))
          ]),
          o("span", Px, c(g), 1)
        ]))), 128))
      ])) : (t(), a("div", Lx)),
      e.plan.current ? x("", !0) : (t(), a("footer", Ox, [
        E(de, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: f[0] || (f[0] = (g) => r("choose", e.plan.id))
        }, {
          default: O(() => [
            H(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, yx));
  }
}), jx = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Vx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Dx = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Tx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ix = ["d"], Ex = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Fx = ["aria-pressed"], Nx = ["aria-pressed"], Rx = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ux = ["aria-label"], Hx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Kx = ["aria-pressed", "onClick"], qx = ["aria-label"], Gx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Wx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Zx = ["data-slot"], Jx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Yx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Qx = { class: "flex items-center gap-2" }, Xx = ["disabled"], e0 = ["disabled"], sn = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(""), i = ct(e, "modelValue"), d = it({}), u = it({});
    fe(s, () => h());
    function f(F) {
      const Y = F.trim();
      if (Y === "")
        return null;
      const N = Number(Y);
      return Number.isFinite(N) ? N : null;
    }
    function g() {
      const F = {};
      for (const [Y, N] of Object.entries(u))
        F[Y] = { min: f(N.min), max: f(N.max) };
      return F;
    }
    function v() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function h() {
      r("filter", v());
    }
    function w(F, Y) {
      d[F] = d[F] === Y ? null : Y, h();
    }
    function b(F) {
      return u[F] ?? { min: "", max: "" };
    }
    function C(F, Y, N) {
      const W = u[F] ?? { min: "", max: "" };
      u[F] = { ...W, [Y]: N }, h();
    }
    function B(F) {
      F.key === "Enter" && (F.preventDefault(), r("scan", s.value.trim()));
    }
    const M = y(() => n.facets.filter((F) => (F.kind ?? "chips") === "chips")), A = y(() => n.facets.filter((F) => F.kind === "range")), $ = y(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), m = q(1);
    fe(
      () => n.items.map((F) => F.key).join(","),
      () => {
        m.value = 1;
      }
    );
    const p = y(() => {
      const F = n.pageSize;
      return !F || F < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / F));
    }), _ = y(() => {
      const F = n.pageSize;
      if (!F || F < 1)
        return n.items;
      const Y = (m.value - 1) * F;
      return n.items.slice(Y, Y + F);
    });
    function T(F) {
      m.value = Math.min(p.value, Math.max(1, F));
    }
    return (F, Y) => (t(), a("div", {
      class: z(["flex flex-col gap-4", k(Zn)])
    }, [
      $.value ? (t(), a("div", jx, [
        o("div", Vx, [
          e.searchable ? (t(), a("div", Dx, [
            (t(), a("svg", Tx, [
              o("path", {
                d: k(ce)("search")
              }, null, 8, Ix)
            ])),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": Y[0] || (Y[0] = (N) => s.value = N),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: B
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : x("", !0),
          G(F.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", Ex, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: Y[1] || (Y[1] = (N) => i.value = "grid")
            }, " Tiles ", 10, Fx),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: Y[2] || (Y[2] = (N) => i.value = "list")
            }, " List ", 10, Nx)
          ])) : x("", !0)
        ]),
        M.value.length || A.value.length ? (t(), a("div", Rx, [
          (t(!0), a(P, null, j(M.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key
          }, [
            N.label ? (t(), a("span", Hx, c(N.label), 1)) : x("", !0),
            (t(!0), a(P, null, j(N.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[N.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[N.key] === W.value ? "true" : "false",
              onClick: (Z) => w(N.key, W.value)
            }, c(W.label), 11, Kx))), 128))
          ], 8, Ux))), 128)),
          (t(!0), a(P, null, j(A.value, (N) => (t(), a("div", {
            key: N.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": N.label ?? N.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Gx, c(N.label ?? N.key), 1),
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
          ], 8, qx))), 128))
        ])) : x("", !0)
      ])) : x("", !0),
      e.items.length === 0 ? (t(), a("p", Wx, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : k(Tf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, j(_.value, (N) => (t(), D(hy, {
          key: N.key,
          item: N,
          layout: i.value,
          onSelect: Y[3] || (Y[3] = (W) => r("select", W)),
          onCart: Y[4] || (Y[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Zx)),
      e.pageSize && p.value > 1 ? (t(), a("div", Jx, [
        o("p", Yx, " Page " + c(m.value) + " of " + c(p.value), 1),
        o("div", Qx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value <= 1,
            onClick: Y[5] || (Y[5] = (N) => T(m.value - 1))
          }, " Previous ", 8, Xx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value >= p.value,
            onClick: Y[6] || (Y[6] = (N) => T(m.value + 1))
          }, " Next ", 8, e0)
        ])
      ])) : x("", !0)
    ], 2));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function t0(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function n0(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function rn(e, l) {
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
    if (!n0(t0(e, r), s))
      return !1;
  return !0;
}
function a0(e, l) {
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
const l0 = { class: "flex flex-col gap-6" }, o0 = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, s0 = { class: "text-sm font-semibold" }, r0 = { class: "flex flex-wrap items-center gap-1.5" }, i0 = ["aria-pressed", "onClick"], d0 = { class: "text-sm font-semibold" }, u0 = { class: "flex flex-wrap items-center gap-1.5" }, c0 = { key: 0 }, na = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(""), i = it({}), d = it({}), u = y(
      () => n.facets.filter((p) => (p.kind ?? "chips") === "chips")
    ), f = y(() => n.facets.filter((p) => p.kind === "range"));
    function g(p) {
      return p == null ? "" : String(p);
    }
    function v() {
      s.value = n.applied.query ?? "";
      for (const p of Object.keys(i))
        delete i[p];
      for (const [p, _] of Object.entries(n.applied.selected ?? {}))
        i[p] = _;
      for (const p of Object.keys(d))
        delete d[p];
      for (const [p, _] of Object.entries(n.applied.ranges ?? {}))
        d[p] = { min: g(_.min), max: g(_.max) };
    }
    fe(
      () => n.open,
      (p) => {
        p && v();
      }
    );
    function h(p) {
      const _ = p.trim();
      if (_ === "")
        return null;
      const T = Number(_);
      return Number.isFinite(T) ? T : null;
    }
    function w() {
      const p = {};
      for (const [_, T] of Object.entries(d))
        p[_] = { min: h(T.min), max: h(T.max) };
      return p;
    }
    function b() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: w()
      };
    }
    const C = y(() => {
      let p = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const _ of Object.values(i))
        _ && (p += 1);
      for (const _ of Object.values(w()))
        (_.min !== null || _.max !== null) && (p += 1);
      return p;
    });
    function B(p, _) {
      i[p] = i[p] === _ ? null : _;
    }
    function M(p) {
      return d[p] ?? { min: "", max: "" };
    }
    function A(p, _, T) {
      const F = d[p] ?? { min: "", max: "" };
      d[p] = { ...F, [_]: T };
    }
    function $() {
      r("apply", b());
    }
    function m() {
      s.value = "";
      for (const p of Object.keys(i))
        i[p] = null;
      for (const p of Object.keys(d))
        d[p] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ...Ee(), query: n.applied.query } : Ee()
      );
    }
    return (p, _) => (t(), D(At, {
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
        E(de, {
          variant: "outline",
          size: "sm",
          onClick: _[1] || (_[1] = (T) => r("close"))
        }, {
          default: O(() => [..._[5] || (_[5] = [
            H("Cancel", -1)
          ])]),
          _: 1
        }),
        E(de, {
          size: "sm",
          onClick: $
        }, {
          default: O(() => [
            _[6] || (_[6] = H(" Apply", -1)),
            C.value ? (t(), a("span", c0, " (" + c(C.value) + ")", 1)) : x("", !0)
          ]),
          _: 1
        })
      ]),
      default: O(() => [
        o("div", l0, [
          e.hideSearch ? x("", !0) : (t(), a("label", o0, [
            _[3] || (_[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E(we, {
              modelValue: s.value,
              "onUpdate:modelValue": _[0] || (_[0] = (T) => s.value = T),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, j(u.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", s0, c(T.label ?? T.key), 1),
            o("div", r0, [
              (t(!0), a(P, null, j(T.options ?? [], (F) => (t(), a("button", {
                key: F.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[T.key] === F.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[T.key] === F.value ? "true" : "false",
                onClick: (Y) => B(T.key, F.value)
              }, c(F.label), 11, i0))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, j(f.value, (T) => (t(), a("section", {
            key: T.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", d0, c(T.label ?? T.key), 1),
            o("div", u0, [
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${T.label ?? T.key} from`,
                "model-value": M(T.key).min,
                "onUpdate:modelValue": (F) => A(T.key, "min", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              _[4] || (_[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              E(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${T.label ?? T.key} to`,
                "model-value": M(T.key).max,
                "onUpdate:modelValue": (F) => A(T.key, "max", String(F))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), f0 = ["aria-disabled"], m0 = ["disabled"], p0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, v0 = ["d"], g0 = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, h0 = ["disabled"], b0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, y0 = ["d"], x0 = /* @__PURE__ */ L({
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
    const n = ct(e, "modelValue"), r = l, s = y(() => n.value <= e.min), i = y(() => e.max !== null && n.value >= e.max);
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
        onClick: f[0] || (f[0] = (g) => d(-1))
      }, [
        (t(), a("svg", p0, [
          o("path", {
            d: k(ce)("minus")
          }, null, 8, v0)
        ]))
      ], 8, m0),
      o("span", g0, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (g) => d(1))
      }, [
        (t(), a("svg", b0, [
          o("path", {
            d: k(ce)("plus")
          }, null, 8, y0)
        ]))
      ], 8, h0)
    ], 8, f0));
  }
}), k0 = { class: "divide-border flex flex-col divide-y" }, $0 = { class: "min-w-0" }, w0 = { class: "truncate text-sm font-medium" }, C0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, S0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, M0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, B0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, A0 = ["aria-label", "onClick"], z0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _0 = ["d"], P0 = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", k0, [
      (t(!0), a(P, null, j(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", $0, [
          o("p", w0, c(d.label), 1),
          d.detail ? (t(), a("p", C0, c(d.detail), 1)) : x("", !0)
        ]),
        o("div", S0, [
          e.editable ? (t(), D(x0, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", M0, " ×" + c(d.qty), 1)) : x("", !0),
          d.amount ? (t(), a("span", B0, c(d.amount), 1)) : x("", !0),
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
            (t(), a("svg", z0, [
              o("path", {
                d: k(ce)("trash")
              }, null, 8, _0)
            ]))
          ], 8, A0)) : x("", !0)
        ])
      ]))), 128))
    ]));
  }
}), L0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, O0 = { class: "border-b px-4 py-3" }, j0 = { class: "text-sm font-medium" }, V0 = { class: "flex-1 px-4 py-3" }, D0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, T0 = { class: "text-foreground block font-medium" }, I0 = { class: "mt-1 block" }, E0 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, F0 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, N0 = { class: "tabular-nums" }, R0 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, U0 = { class: "text-muted-foreground" }, H0 = {
  key: 0,
  class: "tabular-nums"
}, K0 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, q0 = { class: "text-muted-foreground" }, G0 = { class: "tabular-nums" }, W0 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Z0 = { class: "tabular-nums" }, J0 = {
  key: 4,
  class: "pt-1"
}, Y0 = /* @__PURE__ */ L({
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
    return (r, s) => (t(), a("aside", L0, [
      o("header", O0, [
        o("h2", j0, c(e.title), 1)
      ]),
      o("div", V0, [
        e.items.length === 0 ? (t(), a("p", D0, [
          o("span", T0, c(e.emptyTitle), 1),
          o("span", I0, c(e.emptyDescription), 1)
        ])) : (t(), D(P0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", E0, [
        e.subtotal ? (t(), a("div", F0, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", N0, c(e.subtotal), 1)
        ])) : x("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", R0, [
          o("span", U0, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", H0, c(e.discount), 1)) : x("", !0),
          G(r.$slots, "discount")
        ])) : x("", !0),
        e.tax ? (t(), a("div", K0, [
          o("span", q0, c(e.taxLabel), 1),
          o("span", G0, c(e.tax), 1)
        ])) : x("", !0),
        e.total ? (t(), a("div", W0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Z0, c(e.total), 1)
        ])) : x("", !0),
        r.$slots.pay ? (t(), a("div", J0, [
          G(r.$slots, "pay")
        ])) : x("", !0)
      ])) : x("", !0)
    ]));
  }
}), Q0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, X0 = { class: "flex flex-col gap-4" }, ek = { class: "flex flex-wrap items-start justify-between gap-3" }, tk = { class: "flex items-center gap-2" }, nk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, d6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(Ee()), i = q(!1), d = ct(e, "cart"), u = q(!1), f = y(
      () => n.items.filter((N) => rn(N, s.value))
    );
    function g(N) {
      s.value = { ...s.value, query: N.query };
    }
    function v(N) {
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
    function w(N, W, Z) {
      return {
        ...N,
        qty: W,
        amount: n.formatMoney(Z * W)
      };
    }
    function b(N) {
      const W = a0(n.items, N);
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
          (K) => K.key === N ? w(K, Number(K.qty ?? 1) + 1, Z) : K
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
    function B(N, W) {
      const Z = n.items.find((K) => K.key === N), J = h(Z);
      d.value = d.value.map(
        (K) => K.key === N ? w(K, W, J) : K
      );
    }
    function M(N) {
      d.value = d.value.filter((W) => W.key !== N);
    }
    const A = y(
      () => d.value.reduce((N, W) => {
        const Z = n.items.find((J) => J.key === W.key);
        return N + h(Z) * Number(W.qty ?? 1);
      }, 0)
    ), $ = y(
      () => n.discountRate > 0 ? Math.round(A.value * n.discountRate) : 0
    ), m = y(
      () => Math.round((A.value - $.value) * n.taxRate)
    ), p = y(
      () => d.value.length ? n.formatMoney(A.value) : null
    ), _ = y(
      () => d.value.length && $.value > 0 ? `−${n.formatMoney($.value)}` : null
    ), T = y(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(m.value) : null
    ), F = y(
      () => d.value.length ? n.formatMoney(
        A.value - $.value + m.value
      ) : null
    );
    function Y() {
      u.value = !0, r("pay", d.value);
    }
    return (N, W) => (t(), a(P, null, [
      o("div", Q0, [
        o("section", X0, [
          o("div", ek, [
            E(Ie, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", tk, [
              k(Mt)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (Z) => s.value = {
                  ...k(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : x("", !0),
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
                k(Mt)(s.value) ? (t(), a("span", nk, " on ")) : x("", !0)
              ])) : x("", !0)
            ])
          ]),
          E(sn, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: g,
            onSelect: W[2] || (W[2] = (Z) => r("select", Z)),
            onCart: C,
            onScan: b
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(Y0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: p.value,
          "discount-label": e.discountLabel,
          discount: _.value,
          "tax-label": e.taxLabel,
          tax: T.value,
          total: F.value,
          onQty: B,
          onRemove: M
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
      E(na, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (Z) => i.value = !1),
        onApply: v,
        onReset: W[4] || (W[4] = (Z) => s.value = { ...k(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), ak = {
  key: 0,
  class: "flex flex-col gap-5"
}, lk = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, ok = ["src", "alt"], sk = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, rk = ["src"], ik = { class: "flex items-start justify-between gap-3" }, dk = { class: "text-lg font-semibold tabular-nums" }, uk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, ck = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, fk = { class: "grid grid-cols-2 gap-3" }, mk = { class: "flex flex-col gap-2" }, pk = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, u6 = /* @__PURE__ */ L({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(v) {
      let h = 0;
      for (const w of v)
        h = h * 31 + w.charCodeAt(0) >>> 0;
      return h;
    }
    function i(v, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, C) => ({
        label: b,
        value: Math.max(0, Math.round(v + Math.sin(C + h) * v * 0.18))
      }));
    }
    const d = y(() => n.item?.kind === "unit"), u = y(() => {
      const v = n.item;
      if (!v)
        return [];
      const h = v.stock ?? v.progress?.value ?? v.metrics?.price ?? v.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(v.key) % 7);
    }), f = y(() => {
      const v = n.item;
      if (!v)
        return [];
      const h = v.progress?.value ?? (v.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(v.key) % 5 + 1);
    }), g = y(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (v, h) => (t(), D(At, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (w) => r("close"))
    }, rt({
      default: O(() => [
        e.item ? (t(), a("div", ak, [
          o("div", lk, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, ok)) : x("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", sk, [
            (t(!0), a(P, null, j(e.item.images, (w, b) => (t(), a("img", {
              key: b,
              src: w,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, rk))), 128))
          ])) : x("", !0),
          o("div", ik, [
            o("div", null, [
              o("p", dk, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", uk, c(e.item.stock) + " in stock ", 1)) : x("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", ck, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("div", fk, [
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
          o("div", mk, [
            o("p", pk, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(_t, {
              data: d.value ? f.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : x("", !0)
      ]),
      _: 2
    }, [
      g.value && e.item ? {
        name: "footer",
        fn: O(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: h[0] || (h[0] = (w) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), vk = { class: "flex flex-col gap-10" }, gk = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, hk = { class: "flex flex-col gap-3" }, bk = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, yk = ["src", "alt"], xk = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, kk = ["aria-label", "aria-pressed", "onClick"], $k = ["src"], wk = { class: "flex flex-col gap-5" }, Ck = { class: "flex flex-wrap items-start justify-between gap-3" }, Sk = { class: "min-w-0" }, Mk = { class: "text-2xl font-semibold tracking-tight" }, Bk = { class: "text-muted-foreground mt-1 text-sm" }, Ak = { class: "text-2xl font-semibold tabular-nums" }, zk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, _k = { class: "grid grid-cols-2 gap-3 text-sm" }, Pk = {
  key: 0,
  class: "rounded-lg border p-3"
}, Lk = { class: "mt-1 font-medium" }, Ok = { class: "rounded-lg border p-3" }, jk = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, Vk = { class: "mt-1 font-medium" }, Dk = { class: "flex flex-col gap-4" }, Tk = { class: "grid gap-4 sm:grid-cols-2" }, Ik = { class: "bg-card rounded-lg border p-4" }, Ek = { class: "mb-3 text-sm font-medium" }, Fk = /* @__PURE__ */ L({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(b) {
      let C = 0;
      for (const B of b)
        C = C * 31 + B.charCodeAt(0) >>> 0;
      return C;
    }
    function i(b, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((M, A) => ({
        label: M,
        value: Math.max(0, Math.round(b + Math.sin(A + C) * b * 0.18))
      }));
    }
    const d = y(() => n.item.kind === "unit"), u = y(() => {
      const b = [n.item.image, ...n.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(b)];
    }), f = q(0), g = y(() => {
      const b = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(n.item.key) % 7);
    }), v = y(() => {
      const b = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(n.item.key) % 5 + 1);
    }), h = y(() => d.value ? v.value : g.value), w = y(() => !d.value && n.item.status !== "out-of-stock");
    return (b, C) => (t(), a("div", vk, [
      o("div", gk, [
        o("div", hk, [
          o("div", bk, [
            u.value[f.value] ? (t(), a("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, yk)) : x("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", xk, [
            (t(!0), a(P, null, j(u.value, (B, M) => (t(), a("button", {
              key: B,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", M === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${M + 1}`,
              "aria-pressed": M === f.value ? "true" : "false",
              onClick: (A) => f.value = M
            }, [
              o("img", {
                src: B,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, $k)
            ], 10, kk))), 128))
          ])) : x("", !0)
        ]),
        o("div", wk, [
          o("div", Ck, [
            o("div", Sk, [
              o("h1", Mk, c(e.item.label), 1),
              o("p", Bk, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : x("", !0)
          ]),
          o("p", Ak, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", zk, c(e.item.facts.join(" · ")), 1)) : x("", !0),
          o("dl", _k, [
            e.item.sku ? (t(), a("div", Pk, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", Lk, c(e.item.sku), 1)
            ])) : x("", !0),
            o("div", Ok, [
              o("dt", jk, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", Vk, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          w.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (B) => r("cart", e.item.key))
          }, " Add to cart ")) : x("", !0)
        ])
      ]),
      o("section", Dk, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", Tk, [
          E(St, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(St, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", Ik, [
          o("p", Ek, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(bh, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Nk = ["href"], c6 = /* @__PURE__ */ L({
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
      class: z(["flex w-full flex-col gap-8", e.embedded ? "" : k(tt)])
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
      ], 8, Nk),
      E(Fk, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Rk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Uk = ["aria-selected", "onClick"], Hk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, Kk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, qk = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, Gk = ["aria-pressed"], Wk = ["aria-pressed"], f6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = q(n.tabs[0]?.key ?? ""), i = ct(e, "layout"), d = q({}), u = q(!1);
    fe(
      () => n.tabs.map((B) => B.key).join(","),
      (B) => {
        B.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function f(B) {
      return d.value[B] ?? Ee();
    }
    const g = y(
      () => n.tabs.find((B) => B.key === s.value) ?? n.tabs[0] ?? null
    ), v = y(
      () => g.value ? f(g.value.key) : Ee()
    ), h = y(() => {
      const B = g.value;
      return B ? B.items.filter((M) => rn(M, f(B.key))) : [];
    });
    function w(B) {
      const M = g.value?.key;
      M && (d.value = {
        ...d.value,
        [M]: { ...f(M), query: B }
      });
    }
    function b() {
      const B = g.value?.key;
      B && (d.value = { ...d.value, [B]: Ee() });
    }
    function C(B) {
      const M = g.value?.key;
      M && (d.value = { ...d.value, [M]: B }, u.value = !1);
    }
    return (B, M) => (t(), a(P, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : k(tt)])
      }, [
        E(Ie, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", Rk, [
          (t(!0), a(P, null, j(e.tabs, (A) => (t(), a("button", {
            key: A.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === A.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === A.key ? "true" : "false",
            onClick: ($) => s.value = A.key
          }, c(A.label), 11, Uk))), 128))
        ])) : x("", !0),
        o("div", Hk, [
          E(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": v.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (A) => w(String(A)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(Mt)(v.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: b
          }, " Clear ")) : x("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: M[1] || (M[1] = (A) => u.value = !0)
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
            M[9] || (M[9] = H(" Filters ", -1)),
            k(Mt)(v.value) ? (t(), a("span", Kk, " on ")) : x("", !0)
          ])) : x("", !0),
          o("div", qk, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (A) => i.value = "grid")
            }, " Tiles ", 10, Gk),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (A) => i.value = "list")
            }, " List ", 10, Wk)
          ])
        ]),
        E(sn, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (A) => i.value = A),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (A) => r("select", A)),
          onCart: M[6] || (M[6] = (A) => r("cart", A))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(na, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: v.value,
        onClose: M[7] || (M[7] = (A) => u.value = !1),
        onApply: C,
        onReset: b
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Zk = { class: "flex flex-col gap-4" }, Jk = { class: "flex flex-col gap-4" }, m6 = /* @__PURE__ */ L({
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
      () => n.cards.filter((d) => rn(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Zk, [
        E(Ie, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(sn, {
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
      o("section", Jk, [
        E(Ie, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(uo, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": O(({ value: f }) => [
            E($e, {
              status: String(f)
            }, {
              default: O(() => [
                H(c(f), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), Yk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Qk = { class: "text-sm font-medium" }, Xk = ["width", "height", "aria-label"], e2 = { class: "flex items-center gap-2" }, t2 = /* @__PURE__ */ L({
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
    function f(B) {
      const M = s.value;
      if (!M)
        return null;
      const A = M.getBoundingClientRect(), $ = M.width / A.width, m = M.height / A.height;
      return {
        x: (B.clientX - A.left) * $,
        y: (B.clientY - A.top) * m
      };
    }
    function g(B) {
      n.disabled || (i.value = !0, d = f(B), s.value?.setPointerCapture(B.pointerId));
    }
    function v(B) {
      if (!i.value || n.disabled)
        return;
      const M = u(), A = f(B);
      !M || !A || !d || (M.strokeStyle = "#111827", M.lineWidth = 2.4, M.lineCap = "round", M.lineJoin = "round", M.beginPath(), M.moveTo(d.x, d.y), M.lineTo(A.x, A.y), M.stroke(), d = A);
    }
    function h() {
      i.value = !1, d = null;
    }
    function w() {
      const B = s.value, M = u();
      !B || !M || (M.clearRect(0, 0, B.width, B.height), r("clear"));
    }
    function b() {
      const B = s.value;
      B && r("save", B.toDataURL("image/png"));
    }
    function C() {
      const B = s.value, M = u();
      !B || !M || (M.fillStyle = "#ffffff", M.fillRect(0, 0, B.width, B.height));
    }
    return ge(C), ke(() => {
      i.value = !1;
    }), (B, M) => (t(), a("div", Yk, [
      o("p", Qk, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: ve(g, ["prevent"]),
        onPointermove: ve(v, ["prevent"]),
        onPointerup: ve(h, ["prevent"]),
        onPointerleave: ve(h, ["prevent"])
      }, null, 42, Xk),
      o("div", e2, [
        E(de, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: O(() => [...M[0] || (M[0] = [
            H(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: b
        }, {
          default: O(() => [...M[1] || (M[1] = [
            H("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), n2 = { class: "grid gap-8 lg:grid-cols-2" }, a2 = { class: "flex flex-col gap-3" }, l2 = { class: "text-muted-foreground text-xs font-normal" }, o2 = {
  key: 0,
  class: "flex flex-col gap-3"
}, s2 = { class: "flex flex-wrap gap-3" }, r2 = ["onClick"], i2 = ["src", "alt"], d2 = {
  key: 1,
  class: "flex flex-col gap-3"
}, u2 = { class: "flex flex-wrap gap-3" }, c2 = ["onClick"], f2 = ["src", "alt"], m2 = {
  key: 2,
  class: "flex flex-col gap-4"
}, p2 = { class: "flex flex-wrap items-center gap-2" }, v2 = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, g2 = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, h2 = { class: "flex flex-col gap-2" }, b2 = ["src"], y2 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, x2 = ["src"], p6 = /* @__PURE__ */ L({
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
    function f(B) {
      try {
        const M = localStorage.getItem(B), A = M ? JSON.parse(M) : [];
        return Array.isArray(A) ? A : [];
      } catch {
        return [];
      }
    }
    ge(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), fe(
      n,
      (B) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(B));
      },
      { deep: !0 }
    ), fe(
      r,
      (B) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(B));
      },
      { deep: !0 }
    );
    function g(B) {
      const M = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: B
      };
      n.value = [M, ...n.value].slice(0, 8), s.value = M.id;
    }
    async function v(B, M) {
      await Kf(B), M(40);
      const A = await new Promise(($, m) => {
        const p = new FileReader();
        p.onload = () => $(String(p.result)), p.onerror = () => m(new Error("Could not read the file")), p.readAsDataURL(B);
      });
      return M(100), { value: A, name: B.name, size: B.size, url: A };
    }
    function h() {
      const B = d.value?.url ?? d.value?.value;
      if (!B)
        return;
      const M = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: B
      };
      r.value = [M, ...r.value].slice(0, 8), i.value = M.id;
    }
    const w = y(
      () => n.value.find((B) => B.id === s.value)?.dataUrl ?? null
    ), b = y(
      () => r.value.find((B) => B.id === i.value)?.dataUrl ?? null
    ), C = y(() => {
      const B = l.documents.find((A) => A.key === u.value)?.document ?? l.documents[0]?.document ?? {}, M = {
        ...B?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...B,
        branding: M
      };
    });
    return (B, M) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      E(Ie, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", n2, [
        E(t2, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", a2, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", l2, c(k(Jn)), 1),
          E(Tn, {
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = (A) => d.value = A),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: v
          }, null, 8, ["modelValue"]),
          E(de, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: O(() => [...M[1] || (M[1] = [
              H(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", o2, [
        E(Ie, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", s2, [
          (t(!0), a(P, null, j(n.value, (A) => (t(), a("button", {
            key: A.id,
            type: "button",
            class: z(["rounded-md border p-2", A.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: ($) => s.value = A.id
          }, [
            o("img", {
              src: A.dataUrl,
              alt: A.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, i2)
          ], 10, r2))), 128))
        ])
      ])) : x("", !0),
      r.value.length ? (t(), a("section", d2, [
        E(Ie, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", u2, [
          (t(!0), a(P, null, j(r.value, (A) => (t(), a("button", {
            key: A.id,
            type: "button",
            class: z(["rounded-md border p-2", A.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: ($) => i.value = A.id
          }, [
            o("img", {
              src: A.dataUrl,
              alt: A.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, f2)
          ], 10, c2))), 128))
        ])
      ])) : x("", !0),
      e.documents.length ? (t(), a("section", m2, [
        o("div", p2, [
          (t(!0), a(P, null, j(e.documents, (A) => (t(), D(de, {
            key: A.key,
            size: "sm",
            variant: u.value === A.key ? "default" : "outline",
            onClick: ($) => u.value = A.key
          }, {
            default: O(() => [
              H(c(A.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", v2, [
          E(Pg, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", g2, [
            o("div", h2, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              w.value ? (t(), a("img", {
                key: 0,
                src: w.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, b2)) : (t(), a("p", y2, "Draw and save a signature"))
            ]),
            b.value ? (t(), a("img", {
              key: 0,
              src: b.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, x2)) : x("", !0)
          ])
        ])
      ])) : x("", !0)
    ], 2));
  }
}), v6 = "panel.dashboard.hiddenWidgets", k2 = /* @__PURE__ */ Symbol("dashboardHide"), $2 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, g6 = /* @__PURE__ */ L({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = xt(k2, null), r = q(
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
            (f) => typeof f?.id == "string" && typeof f.label == "string" && typeof f.href == "string"
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
    return (d, u) => i.value ? x("", !0) : (t(), a("div", $2, [
      E(x1, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), w2 = { class: "flex flex-col gap-3" }, C2 = ["data-slot"], S2 = ["aria-pressed", "aria-label", "title"], M2 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, B2 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, A2 = { class: "flex h-8 items-center" }, z2 = ["aria-label", "title", "onClick"], _2 = ["aria-label", "title", "onClick"], P2 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, L2 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, h6 = /* @__PURE__ */ L({
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
    function d($) {
      return n.maskable && ($.sensitive ?? !0);
    }
    function u($) {
      return d($) && !s.value && !i.value.has($.key);
    }
    const f = y(() => n.segments.some(u)), g = y(() => n.segments.some(d)), v = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = y(() => v[n.columns] ?? v[4]), w = y(() => {
      const $ = n.columns ?? 4, m = Math.floor(n.segments.length / $) * $;
      return n.segments.slice(0, m);
    }), b = y(() => {
      const $ = n.columns ?? 4, m = Math.floor(n.segments.length / $) * $;
      return n.segments.slice(m);
    }), C = y(() => {
      const $ = [];
      return w.value.length > 0 && $.push({ key: "packed", joined: !0, segments: w.value }), b.value.length > 0 && $.push({ key: "leftover", joined: !1, segments: b.value }), $;
    });
    function B() {
      const $ = f.value === !1;
      s.value = !$, i.value = /* @__PURE__ */ new Set(), r("toggle", $);
    }
    function M($) {
      if (!d($))
        return;
      const m = new Set(i.value);
      if (u($))
        m.add($.key);
      else if (m.delete($.key), s.value) {
        s.value = !1;
        for (const p of n.segments)
          p.key !== $.key && d(p) && m.add(p.key);
      }
      i.value = m, r("toggle", f.value);
    }
    function A($) {
      return typeof $ == "number" ? new Intl.NumberFormat().format($) : $;
    }
    return ($, m) => (t(), a("div", w2, [
      (t(!0), a(P, null, j(C.value, (p) => (t(), a("div", {
        key: p.key,
        class: z(["relative shrink-0", p.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": p.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && p.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: B
        }, [
          (t(), a("svg", M2, [
            f.value ? (t(), a(P, { key: 0 }, [
              m[0] || (m[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              m[1] || (m[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              m[2] || (m[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              m[3] || (m[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), a(P, { key: 1 }, [
              m[4] || (m[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              m[5] || (m[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, S2)) : x("", !0),
        o("div", {
          class: z(["grid", [p.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(P, null, j(p.segments, (_) => (t(), a("div", {
            key: _.key,
            class: z(["bg-card flex flex-col gap-2 p-4", p.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", B2, c(_.label), 1),
            o("div", A2, [
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
                (t(), a(P, null, j(5, (T) => o("span", {
                  key: T,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, z2)) : d(_) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${_.label}, ${A(_.value)}. Hide it.`,
                title: `Hide ${_.label}`,
                onClick: (T) => M(_)
              }, c(A(_.value)), 9, _2)) : (t(), a("span", P2, c(A(_.value)), 1)),
              _.trend && !e.loading && !u(_) ? (t(), D(ta, {
                key: 4,
                direction: _.trend.direction,
                percentage: _.trend.percentage,
                inverted: _.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : x("", !0)
            ]),
            _.sparkline?.length && !e.loading && !u(_) ? (t(), D(_t, {
              key: 0,
              data: _.sparkline,
              height: 24
            }, null, 8, ["data"])) : x("", !0),
            _.caption || _.comparison && _.trend ? (t(), a("p", L2, c(_.caption ?? _.comparison), 1)) : x("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, C2))), 128))
    ]));
  }
}), O2 = ["aria-label"], j2 = ["aria-valuenow", "aria-label"], V2 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, D2 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, T2 = ["title"], I2 = { class: "font-medium" }, E2 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, F2 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, N2 = { class: "flex items-center justify-between gap-2" }, R2 = { class: "text-sm font-semibold" }, U2 = { class: "flex items-center gap-3" }, H2 = ["href"], K2 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, q2 = { class: "flex min-w-0 flex-col gap-0.5" }, G2 = { class: "text-sm font-medium" }, W2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Z2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, J2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Y2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Q2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, b6 = /* @__PURE__ */ L({
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
    const n = e, r = l, s = y(() => n.items.find((C) => !C.done) ?? null), i = y(() => n.items.filter((C) => C.key !== s.value?.key)), d = y(() => n.items.length), u = y(() => n.items.filter((C) => C.done).length), f = y(() => {
      if (!s.value)
        return d.value;
      const C = n.items.findIndex((B) => B.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), g = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), v = y(() => {
      const C = n.linkComponent;
      return typeof C == "string" ? C : ma(C);
    }), h = yt({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), w = yt({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), b = yt({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, B) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      o("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": g.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${g.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: se({ width: `${g.value}%` })
        }, null, 4)
      ], 8, j2),
      o("div", V2, [
        o("span", D2, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", I2, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", E2, c(": " + s.value.detail), 1)) : x("", !0)
        ], 8, T2),
        s.value?.href ? (t(), D(Ae(v.value), {
          key: 0,
          href: s.value.href,
          class: z(k(w))
        }, {
          default: O(() => [
            H(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : x("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: B[0] || (B[0] = (M) => r("skip"))
        }, c(e.skipLabel), 1)) : x("", !0)
      ])
    ], 8, O2)) : e.items.length ? (t(), a("section", F2, [
      o("div", N2, [
        o("h2", R2, c(e.heading), 1),
        o("div", U2, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: B[1] || (B[1] = (M) => r("skip"))
          }, c(e.skipLabel), 1)) : x("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, H2)) : x("", !0)
        ])
      ]),
      s.value ? (t(), a("div", K2, [
        B[2] || (B[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", q2, [
          o("p", G2, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", W2, c(s.value.detail), 1)) : x("", !0),
          s.value.href ? (t(), D(Ae(v.value), {
            key: 1,
            href: s.value.href,
            class: z(k(h))
          }, {
            default: O(() => [
              H(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : x("", !0)
        ])
      ])) : x("", !0),
      i.value.length ? (t(), a("ul", Z2, [
        (t(!0), a(P, null, j(i.value, (M) => (t(), a("li", {
          key: M.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              M.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            M.done ? (t(), a("svg", J2, [...B[3] || (B[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : x("", !0)
          ], 2),
          o("div", Y2, [
            o("p", {
              class: z(["text-sm", M.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(M.title), 3),
            !M.done && M.detail ? (t(), a("p", Q2, c(M.detail), 1)) : x("", !0)
          ]),
          !M.done && M.href ? (t(), D(Ae(v.value), {
            key: 0,
            href: M.href,
            class: z(k(b))
          }, {
            default: O(() => [
              H(c(M.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : x("", !0)
        ]))), 128))
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), X2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, e$ = { class: "hidden items-center gap-2 md:flex" }, t$ = { class: "md:hidden" }, n$ = { class: "border-b px-4 py-3" }, a$ = { class: "text-muted-foreground text-xs font-normal" }, l$ = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, o$ = { class: "font-medium tabular-nums" }, s$ = { class: "ml-auto flex items-center gap-3" }, y6 = /* @__PURE__ */ L({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = q(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", X2, [
      o("div", e$, [
        G(i.$slots, "actions")
      ]),
      o("div", t$, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        E(en, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: O(() => [
            E(tn, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: O(() => [
                o("div", n$, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", a$, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", l$, [
                  G(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", o$, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          H(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          H(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", s$, [
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
}), r$ = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, i$ = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, d$ = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, u$ = ["value"], c$ = ["value"], f$ = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, m$ = ["disabled"], p$ = ["disabled"], v$ = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, g$ = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, h$ = ["disabled"], x6 = /* @__PURE__ */ L({
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
    return (f, g) => (t(), a("div", r$, [
      o("p", i$, [
        H(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          H("of " + c(s(e.total)), 1)
        ], 64)) : x("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", d$, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (v) => r("update:perPage", Number(v.target.value)))
        }, [
          (t(!0), a(P, null, j(e.perPageOptions, (v) => (t(), a("option", {
            key: v,
            value: v
          }, c(v), 9, c$))), 128))
        ], 40, u$)
      ])) : x("", !0),
      o("nav", f$, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: g[1] || (g[1] = (v) => r("first"))
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
            o("path", { d: "m17 18-6-6 6-6M11 18l-6-6 6-6" })
          ], -1)
        ])], 8, m$),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: g[2] || (g[2] = (v) => r("previous"))
        }, [...g[6] || (g[6] = [
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
        ])], 8, p$),
        o("span", v$, c(e.page), 1),
        u.value !== null ? (t(), a("span", g$, " of " + c(s(u.value)), 1)) : x("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: g[3] || (g[3] = (v) => r("next"))
        }, [...g[7] || (g[7] = [
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
        ])], 8, h$)
      ])
    ]));
  }
}), b$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, y$ = ["aria-current"], x$ = ["title"], k$ = ["aria-current", "onClick"], $$ = ["title"], w$ = /* @__PURE__ */ L({
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
    return (s, i) => (t(), a("div", b$, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = H(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, x$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, y$),
      (t(!0), a(P, null, j(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        H(c(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, $$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, k$))), 128))
    ]));
  }
}), k6 = /* @__PURE__ */ Bt(w$, [["__scopeId", "data-v-3967c945"]]), C$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, S$ = { class: "grid gap-2" }, M$ = {
  key: 0,
  class: "text-destructive text-sm"
}, B$ = { class: "flex gap-2" }, $6 = /* @__PURE__ */ L({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = q((() => {
      const w = navigator.userAgent, b = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: B }) => B.test(w))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: B }) => B.test(w))?.name;
      return [b, C].filter(Boolean).join(" on ") || "";
    })()), i = q(!1), d = pa(null), u = y(() => d.value?.isLoading.value ?? !1), f = y(() => d.value?.error.value ?? null), g = y(() => d.value?.isSupported.value ?? !1);
    ge(async () => {
      try {
        const { usePasskeyRegister: w } = await import("@laravel/passkeys/vue");
        d.value = w({
          onSuccess: () => {
            s.value = "", i.value = !1, n("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const v = async (w) => {
      w.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (w, b) => g.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: v
    }, [
      o("div", S$, [
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
          [ze, s.value]
        ]),
        b[4] || (b[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), a("p", M$, c(f.value), 1)) : x("", !0),
      o("div", B$, [
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
    })) : (t(), a("p", C$, " Passkeys are not supported in this browser. "));
  }
}), A$ = { class: "pk-form-stack" }, z$ = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, w6 = /* @__PURE__ */ L({
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
      run(f, g) {
        return n.createOption ? n.createOption(f, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => n.nodes.length > 0), i = y(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => n.errors._conflict);
    function u(f) {
      if (n.upload)
        return (g, v) => n.upload(f, g, v);
    }
    return (f, g) => (t(), a("div", A$, [
      d.value ? (t(), a("p", z$, c(d.value), 1)) : x("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, j(e.nodes, (v, h) => (t(), D(En, {
        key: h,
        node: v,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (w, b) => r("change", w, b)),
        onAffixAction: g[1] || (g[1] = (w, b) => r("affix-action", w, b))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, j(e.fields, (v) => (t(), D(Ge, {
          key: v.key,
          field: v,
          value: e.modelValue[v.key],
          error: e.errors[v.key],
          errors: e.errors,
          options: e.options[v.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": v.searchable && e.searchOptions ? (h) => e.searchOptions(v.key, h) : void 0,
          upload: u(v.key),
          discard: e.discard,
          class: z(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", v.key, h),
          onAffixAction: (h) => r("affix-action", v.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), _$ = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, P$ = ["disabled"], L$ = ["disabled"], O$ = ["disabled"], j$ = ["disabled"], C6 = /* @__PURE__ */ L({
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
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4"
    );
    return (i, d) => (t(), D(ut, {
      to: n.value,
      disabled: r.value
    }, [
      E(Qe, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: O(() => [
          e.show ? (t(), a("div", {
            key: 0,
            class: z(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: z([
                k(co),
                "pointer-events-auto flex items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10"
              ])
            }, [
              d[4] || (d[4] = o("span", {
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
              o("span", _$, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, P$)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, L$),
              e.extraLabel ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("extra"))
              }, c(e.extraLabel), 9, O$)) : x("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[3] || (d[3] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, j$)
            ], 2)
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function S6(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = q(Dt(e.value)), s = y(() => Dt(e.value) !== r.value);
  function i() {
    r.value = Dt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
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
const vt = /* @__PURE__ */ new Map();
function M6(e, l) {
  vt.set(e, l);
}
function V$(e) {
  return vt.get(e);
}
function B6(e) {
  return vt.has(e);
}
function D$() {
  return [...vt.keys()].sort();
}
function A6() {
  vt.clear();
}
const T$ = {
  key: 0,
  class: "flex flex-col gap-1"
}, I$ = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, E$ = { class: "text-foreground text-sm font-medium" }, F$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, N$ = {
  key: 5,
  class: "max-w-full font-normal"
}, R$ = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, U$ = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, H$ = {
  key: 6,
  class: "font-normal"
}, K$ = {
  key: 0,
  class: "divide-y rounded-md border"
}, q$ = { class: "text-muted-foreground truncate font-medium" }, G$ = { class: "text-foreground col-span-2 break-words" }, W$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Z$ = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, J$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, Y$ = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, Q$ = ["href"], X$ = { class: "flex min-w-0 items-start gap-2.5" }, ew = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, tw = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, nw = ["d"], aw = { class: "min-w-0" }, lw = { class: "flex flex-wrap items-center gap-2" }, ow = { class: "text-sm font-semibold" }, sw = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, rw = ["onClick"], z6 = /* @__PURE__ */ L({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = q(!n.node.collapsed), i = q(0), d = y(() => n.depth === 0), u = y(() => {
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
    }, g = y(() => n.node.key ? n.record[n.node.key] : null), v = y(() => {
      const M = g.value;
      return M == null || M === "";
    }), h = y(() => {
      if (v.value)
        return "None";
      const M = Number(g.value);
      if (Number.isNaN(M))
        return "None";
      const A = n.node.divideBy ?? 100, $ = M / A, m = n.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: m }).format($);
      } catch {
        return `${m} ${$.toFixed(2)}`;
      }
    }), w = y(() => {
      if (v.value)
        return "None";
      const M = g.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[n.node.type]);
      if (n.node.type === "money")
        return h.value;
      let A = String(M);
      return n.node.transform === "upper" && (A = A.toUpperCase()), n.node.transform === "lower" && (A = A.toLowerCase()), [n.node.prefix, A, n.node.suffix].filter(Boolean).join(" ");
    }), b = y(() => {
      const M = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), A = n.node.colors?.[M] ?? n.node.defaultColor ?? "neutral";
      return nn[A] ?? "outline";
    }), C = y(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      return M ? V$(M) : void 0;
    }), B = y(() => {
      const M = typeof n.node.view == "string" ? n.node.view : "";
      if (!M)
        return "ViewEntry has no view name.";
      const A = D$(), $ = A.length > 0 ? A.join(", ") : "(none)";
      return `No entry view for [${M}]; registered: ${$}`;
    });
    return (M, A) => {
      const $ = Gt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", T$, [
        o("dt", I$, c(e.node.label), 1),
        o("dd", E$, [
          e.node.type === "badge" && k(Pu)(g.value) ? (t(), D(We, {
            key: 0,
            variant: b.value,
            class: "capitalize"
          }, {
            default: O(() => [
              H(c(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", F$, "None")) : e.node.type === "icon" ? (t(), D(lu, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(du, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(pu, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", N$, [
            e.node.language ? (t(), a("p", R$, c(e.node.language), 1)) : x("", !0),
            o("pre", U$, [
              o("code", null, c(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", H$, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), a("dl", K$, [
              (t(!0), a(P, null, j(g.value, (m, p) => (t(), a("div", {
                key: p,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", q$, c(p), 1),
                o("dd", G$, c(m), 1)
              ]))), 128))
            ])) : (t(), a("span", W$, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", Z$, [
            (t(!0), a(P, null, j(Array.isArray(g.value) ? g.value : [], (m, p) => (t(), a("div", {
              key: p,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, j(e.node.entries ?? [], (_, T) => (t(), D($, {
                key: T,
                node: _,
                record: m,
                depth: e.depth + 1,
                onAction: A[0] || (A[0] = (F) => r("action", F))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), a("span", J$, "None")) : x("", !0)
          ])) : e.node.type === "money" ? (t(), a("span", {
            key: 8,
            class: z(v.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), D(Ae(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: g.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), a("p", Y$, c(B.value), 1)) : e.node.url && !v.value ? (t(), a("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(w.value), 9, Q$)) : (t(), a("span", {
            key: 12,
            class: z([
              v.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(w.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: A[1] || (A[1] = (m) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : x("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), a("section", {
        key: 1,
        class: z(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: A[2] || (A[2] = (m) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", X$, [
            e.node.icon ? (t(), a("div", ew, [
              (t(), a("svg", tw, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, nw)
              ]))
            ])) : x("", !0),
            o("div", aw, [
              o("div", lw, [
                o("h3", ow, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : x("", !0)
              ]),
              e.node.description ? (t(), a("p", sw, c(e.node.description), 1)) : x("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (m, p) => (t(), D($, {
            key: p,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: A[3] || (A[3] = (_) => r("action", _))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : x("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(P, null, j(e.node.children ?? [], (m, p) => (t(), D($, {
          key: p,
          node: m,
          record: e.record,
          depth: e.depth + 1,
          onAction: A[4] || (A[4] = (_) => r("action", _))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, j(e.node.children ?? [], (m, p) => (t(), a("button", {
            key: p,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === p ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (_) => i.value = p
          }, c(m.label), 11, rw))), 128))
        ], 2),
        (t(!0), a(P, null, j(e.node.children ?? [], (m, p) => pe((t(), a("div", {
          key: p,
          class: z(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, j(m.children ?? [], (_, T) => (t(), D($, {
            key: T,
            node: _,
            record: e.record,
            depth: e.depth + 1,
            onAction: A[5] || (A[5] = (F) => r("action", F))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === p]
        ])), 128))
      ], 2)) : x("", !0);
    };
  }
}), iw = { class: "text-muted-foreground text-sm font-normal" }, dw = { class: "flex items-start gap-3" }, uw = { class: "min-w-0 flex-1" }, cw = { class: "flex flex-wrap items-center gap-2" }, fw = { class: "truncate text-sm font-medium" }, mw = { class: "text-muted-foreground mt-0.5 text-xs" }, pw = { class: "text-muted-foreground text-xs font-normal" }, vw = { class: "mt-auto flex items-center gap-2" }, gw = /* @__PURE__ */ L({
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
      class: z(["flex flex-col gap-4", k(Zn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", iw, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(k(Df))
      }, [
        (t(!0), a(P, null, j(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", dw, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", uw, [
              o("div", cw, [
                o("h3", fw, c(u.label), 1),
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
                })) : x("", !0),
                u.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: O(() => [...d[2] || (d[2] = [
                    H(" Default ", -1)
                  ])]),
                  _: 1
                })) : x("", !0),
                u.connected && u.mode ? (t(), D($e, {
                  key: 3,
                  status: u.mode
                }, {
                  default: O(() => [
                    H(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : x("", !0)
              ]),
              o("p", mw, c(u.caption), 1)
            ])
          ]),
          o("p", pw, c(u.methods.join(" · ")), 1),
          o("div", vw, [
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: O(() => [...d[3] || (d[3] = [
                H(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(de, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", u.key)
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
}), hw = { class: "flex flex-col gap-6" }, bw = { class: "relative" }, yw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, xw = ["d"], kw = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, $w = {
  key: 0,
  class: "flex flex-col gap-4"
}, ww = { class: "flex flex-wrap items-center gap-2" }, Cw = { class: "text-muted-foreground text-sm font-normal" }, Sw = { class: "flex flex-col gap-1 text-sm" }, Mw = ["value"], Bw = {
  key: 0,
  class: "flex flex-col gap-2"
}, Aw = { class: "flex flex-wrap items-center gap-2" }, zw = {
  key: 1,
  class: "flex items-center gap-2"
}, _6 = /* @__PURE__ */ L({
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
    const l = ct(e, "gateways"), n = q(null), r = q(""), s = y(
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
        (B) => B.key === b ? { ...B, ...C } : B
      );
    }
    function f(b) {
      n.value = b;
    }
    function g(b) {
      const C = l.value.find((M) => M.key === b);
      if (!C)
        return;
      const B = !C.connected;
      u(b, {
        connected: B,
        mode: B ? C.mode ?? "test" : null,
        enabled: B,
        isDefault: !1
      });
    }
    function v(b, C) {
      const B = l.value.find((M) => M.key === b);
      B?.connected && u(b, { enabled: C, isDefault: C ? B.isDefault : !1 });
    }
    function h(b) {
      const C = l.value.find((B) => B.key === b);
      !C || !d(C) || (l.value = l.value.map((B) => ({
        ...B,
        isDefault: B.key === b
      })));
    }
    function w(b) {
      const C = n.value;
      !C || !l.value.find((M) => M.key === C)?.connected || u(C, { mode: b });
    }
    return (b, C) => (t(), a(P, null, [
      o("div", hw, [
        E(Ie, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", bw, [
          (t(), a("svg", yw, [
            o("path", {
              d: k(ce)("search")
            }, null, 8, xw)
          ])),
          E(we, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (B) => r.value = B),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(gw, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), a("p", kw, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      E(At, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (B) => n.value = null)
      }, {
        footer: O(() => [
          E(de, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (B) => n.value = null)
          }, {
            default: O(() => [...C[21] || (C[21] = [
              H("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(de, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (B) => g(s.value.key))
          }, {
            default: O(() => [
              H(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : x("", !0)
        ]),
        default: O(() => [
          s.value ? (t(), a("div", $w, [
            o("div", ww, [
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
              })) : x("", !0),
              s.value.isDefault ? (t(), D($e, {
                key: 2,
                status: "default"
              }, {
                default: O(() => [...C[11] || (C[11] = [
                  H(" Default ", -1)
                ])]),
                _: 1
              })) : x("", !0),
              s.value.connected && s.value.mode ? (t(), D($e, {
                key: 3,
                status: s.value.mode
              }, {
                default: O(() => [
                  H(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : x("", !0)
            ]),
            o("p", Cw, c(s.value.caption), 1),
            o("label", Sw, [
              C[12] || (C[12] = H(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, Mw)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              H(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", Bw, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", Aw, [
                E(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (B) => v(s.value.key, !0))
                }, {
                  default: O(() => [...C[13] || (C[13] = [
                    H(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (B) => v(s.value.key, !1))
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
                  onClick: C[3] || (C[3] = (B) => h(s.value.key))
                }, {
                  default: O(() => [...C[15] || (C[15] = [
                    H(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : x("", !0),
            s.value.connected ? (t(), a("div", zw, [
              E(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (B) => w("test"))
              }, {
                default: O(() => [...C[18] || (C[18] = [
                  H(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (B) => w("live"))
              }, {
                default: O(() => [...C[19] || (C[19] = [
                  H(" Live ", -1)
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
function Cn(e) {
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
function P6(e) {
  const l = q(Cn(e));
  ge(() => {
    l.value = Cn(e);
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
function Sn(e) {
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
function L6(e) {
  const l = q(Sn(e));
  ge(() => {
    l.value = Sn(e);
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
    for (const [u, f] of Object.entries(i))
      typeof f == "number" && f >= 48 && f <= 1200 && (d[u] = Math.round(f));
    l.value = d;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: n, setWidths: r, reset: s };
}
function O6(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = q(
    l.driver === "none" ? "off" : "connecting"
  ), f = q(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), v, h, w, b = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function B(W, Z) {
    g.set(W, { ...g.get(W) ?? {}, ...Z }), !v && (v = setTimeout(() => {
      v = void 0, M();
    }, l.batchMs));
  }
  function M() {
    if (g.size === 0)
      return;
    const W = g;
    g = /* @__PURE__ */ new Map();
    const Z = /* @__PURE__ */ new Set();
    for (const [J, K] of W) {
      const U = n.value.find((R) => R[r] === J);
      if (!U) {
        d?.(J, K);
        continue;
      }
      Object.assign(U, K), Z.add(J);
    }
    Z.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...Z]), setTimeout(() => {
      const J = new Set(f.value);
      Z.forEach((K) => J.delete(K)), f.value = J;
    }, 1500));
  }
  async function A() {
    if (!(!s || n.value.length === 0)) {
      w?.abort(), w = new AbortController();
      try {
        const W = n.value.map((K) => K[r]), { records: Z, at: J } = await s(W, b);
        b = J, u.value = "live";
        for (const K of Z)
          B(K[r], K);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function $() {
    m(), u.value = "live", h = setInterval(A, l.intervalMs);
  }
  function m() {
    clearInterval(h), h = void 0, w?.abort();
  }
  function p() {
    return window.Echo ?? null;
  }
  function _() {
    const W = p();
    if (!W || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const Z = W.private(l.channel);
    for (const J of l.events)
      Z.listen(J, (K) => {
        K?.[r] !== void 0 && B(K[r], K);
      });
    u.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function T() {
    C && (p()?.leave(C), C = null);
  }
  function F() {
    l.driver === "poll" && $(), l.driver === "broadcast" && _();
  }
  function Y() {
    m(), T(), clearTimeout(v), v = void 0, g = /* @__PURE__ */ new Map();
  }
  function N() {
    l.pauseWhenHidden && (document.hidden ? (Y(), u.value = "paused") : (b = (/* @__PURE__ */ new Date()).toISOString(), F(), i?.()));
  }
  return ge(() => {
    l.driver !== "none" && (F(), l.pauseWhenHidden && document.addEventListener("visibilitychange", N));
  }), ke(() => {
    document.removeEventListener("visibilitychange", N), Y();
  }), { status: u, recentlyChanged: f, applyPatch: B, flush: M, pollOnce: A };
}
const _w = /^[a-z0-9-]+$/, Pw = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function j6(e) {
  va(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !_w.test(n) || typeof r != "string" || !Pw.test(r) || (l[`--${n}`] = r);
    Mc(l);
  });
}
const Lw = { class: "flex items-center gap-0.5" }, Ow = /* @__PURE__ */ L({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Lw, [
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
}), jw = /* @__PURE__ */ L({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), D(ea, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), Vw = { class: "flex flex-col gap-2" }, Dw = { class: "bg-card rounded-lg border p-4" }, Tw = { class: "text-muted-foreground truncate text-xs" }, Iw = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, Ew = /* @__PURE__ */ L({
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
    function f(C, B) {
      return C.length <= B ? C : `${C.slice(0, B - 1).trimEnd()}…`;
    }
    const g = y(() => f(s.value, r.value.titleMax)), v = y(() => f(i.value, r.value.descriptionMax));
    function h(C, B, M) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > M ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < B ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const w = y(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), b = y(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, B) => (t(), a("div", Vw, [
      o("div", Dw, [
        o("p", Tw, c(u.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, c(g.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", v.value === "" ? "italic" : ""])
        }, c(v.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", Iw, [
        o("span", {
          class: z(w.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(w.value.note), 3),
        o("span", {
          class: z(b.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(b.value.note), 3)
      ]),
      B[0] || (B[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), Fw = ["value", "placeholder", "disabled"], Nw = /* @__PURE__ */ L({
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
      class: z(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", k(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, Fw));
  }
}), Rw = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, Uw = ["aria-selected", "disabled", "title", "onClick"], Hw = /* @__PURE__ */ L({
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
    return (u, f) => (t(), a("div", Rw, [
      (t(!0), a(P, null, j(s.value, (g) => (t(), a("button", {
        key: g,
        type: "button",
        role: "option",
        class: z(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [k(Se), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (v) => d(g)
      }, c(g), 11, Uw))), 128))
    ]));
  }
}), Kw = {
  class: "relative",
  "data-test": "tree-select-field"
}, qw = ["disabled"], Gw = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, Ww = ["onClick"], Zw = ["onClick"], Jw = /* @__PURE__ */ L({
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
    function u(h, w) {
      return !w || h.label.toLowerCase().includes(w) ? !0 : (h.children ?? []).some((b) => u(b, w));
    }
    const f = y(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter((w) => u(w, h)) : d.value;
    }), g = y(() => {
      const h = (w) => {
        for (const b of w) {
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
    function v(h) {
      n.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, w) => (t(), a("div", Kw, [
      o("button", {
        type: "button",
        class: z(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
        disabled: e.disabled,
        onClick: w[0] || (w[0] = (b) => i.value = !i.value)
      }, [
        o("span", {
          class: z(g.value ? "" : "text-muted-foreground")
        }, c(g.value ?? "Select…"), 3),
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, qw),
      i.value ? (t(), a("div", Gw, [
        e.field.searchable ? pe((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": w[1] || (w[1] = (b) => s.value = b),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [ze, s.value]
        ]) : x("", !0),
        (t(!0), a(P, null, j(f.value, (b) => (t(), a(P, {
          key: String(b.value)
        }, [
          o("button", {
            type: "button",
            class: z(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === b.value ? "bg-accent" : ""]),
            onClick: (C) => v(b.value)
          }, c(b.label), 11, Ww),
          (t(!0), a(P, null, j(b.children ?? [], (C) => (t(), a("button", {
            key: String(C.value),
            type: "button",
            class: z(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (B) => v(C.value)
          }, c(C.label), 11, Zw))), 128))
        ], 64))), 128))
      ])) : x("", !0)
    ]));
  }
}), Yw = ["aria-label"], Qw = ["disabled", "aria-label", "aria-pressed", "onClick"], Xw = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, e4 = { key: 0 }, t4 = ["id"], n4 = ["fill"], a4 = ["disabled"], l4 = /* @__PURE__ */ L({
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
      const g = Number(n.modelValue);
      return Number.isFinite(g) ? g : 0;
    });
    function u(g) {
      n.disabled || r("update:modelValue", g);
    }
    function f(g) {
      return d.value >= g ? "full" : i.value && d.value >= g - 0.5 ? "half" : "empty";
    }
    return (g, v) => (t(), a("div", {
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
        onClick: (w) => u(h)
      }, [
        (t(), a("svg", Xw, [
          f(h) === "half" ? (t(), a("defs", e4, [
            o("linearGradient", {
              id: `half-${e.field.key}-${h}`,
              x1: "0",
              x2: "1",
              y1: "0",
              y2: "0"
            }, [...v[1] || (v[1] = [
              o("stop", {
                offset: "50%",
                "stop-color": "currentColor"
              }, null, -1),
              o("stop", {
                offset: "50%",
                "stop-color": "transparent",
                "stop-opacity": "1"
              }, null, -1)
            ])], 8, t4)
          ])) : x("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, n4)
        ]))
      ], 8, Qw))), 128)),
      d.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: v[0] || (v[0] = (h) => u(0))
      }, " Clear ", 8, a4)) : x("", !0)
    ], 8, Yw));
  }
});
function o4() {
  xe("radio", Ip), xe("toggle-buttons", In), xe("checkboxlist", Np), xe("tags", Wp), xe("colour", sv), xe("slider", Ev), xe("rating", l4), xe("phone", Nw), xe("icon-picker", Hw), xe("tree-select", Jw), xe("visual-select", Qv), xe("markdown", hp), xe("code", Cp), xe("map", cv), xe("qrcode", gv), xe("barcode", wv), xe("diff", Mv), xe("seo-preview", Ew), Vt("swatch", eg), Vt("voucher-code-box", jw), Vt("document-colour-mode", Ow);
}
function aa() {
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
const s4 = /* @__PURE__ */ L({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: n } = aa();
    return (r, s) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: z(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(n) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      G(r.$slots, "default")
    ], 6));
  }
}), r4 = ["id"], Me = /* @__PURE__ */ L({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, n) => (t(), a("section", {
      id: e.id,
      class: z(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: z(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(s4, null, {
          default: O(() => [
            G(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, r4));
  }
}), i4 = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, d4 = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, u4 = {
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
      class: z(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), a("p", i4, c(e.eyebrow), 1)) : x("", !0),
      e.title ? (t(), a("h2", d4, c(e.title), 1)) : x("", !0),
      e.body ? (t(), a("p", u4, c(e.body), 1)) : x("", !0)
    ], 2)) : x("", !0);
  }
}), c4 = { class: "flex flex-col gap-10" }, f4 = { class: "grid gap-4 md:grid-cols-3" }, m4 = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, p4 = { class: "text-sm font-semibold text-balance" }, v4 = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, g4 = /* @__PURE__ */ L({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", c4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", f4, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", { key: s }, [
              (t(), D(Ae(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: O(() => [
                  r.meta ? (t(), a("p", m4, c(r.meta), 1)) : x("", !0),
                  o("h3", p4, c(r.title), 1),
                  r.body ? (t(), a("p", v4, c(r.body), 1)) : x("", !0)
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
function h4() {
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
const b4 = { class: "pk-tilt-inner relative h-full" }, y4 = /* @__PURE__ */ L({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = h4();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", b4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        G(n.$slots, "default")
      ])
    ], 512));
  }
}), x4 = { class: "flex flex-col gap-10" }, k4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, $4 = { class: "text-base font-semibold" }, w4 = { class: "text-sm text-pretty text-muted-foreground" }, C4 = /* @__PURE__ */ L({
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
        o("div", x4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", k4, [
            (t(!0), a(P, null, j(e.items ?? [], (s, i) => (t(), D(y4, {
              key: i,
              class: z(l(s.span))
            }, {
              default: O(() => [
                o("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", $4, c(s.title), 1),
                  o("p", w4, c(s.body), 1)
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
}), S4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, M4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, B4 = { class: "grid gap-4 text-sm" }, A4 = {
  key: 0,
  class: "grid gap-1"
}, z4 = ["href"], _4 = {
  key: 1,
  class: "grid gap-1"
}, P4 = ["href"], L4 = {
  key: 2,
  class: "grid gap-1"
}, O4 = { class: "text-pretty text-muted-foreground" }, j4 = ["href"], V4 = /* @__PURE__ */ L({
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
        o("div", S4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", M4, [
            o("dl", B4, [
              e.email ? (t(), a("div", A4, [
                n[0] || (n[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, z4)
                ])
              ])) : x("", !0),
              e.phone ? (t(), a("div", _4, [
                n[1] || (n[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, P4)
                ])
              ])) : x("", !0),
              e.address ? (t(), a("div", L4, [
                n[2] || (n[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", O4, c(e.address), 1)
              ])) : x("", !0)
            ]),
            e.label ? (t(), a("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, j4)) : x("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D4 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, T4 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, I4 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, E4 = ["href"], F4 = /* @__PURE__ */ L({
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
        o("div", D4, [
          o("h2", T4, c(e.title), 1),
          e.body ? (t(), a("p", I4, c(e.body), 1)) : x("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, E4)) : x("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), N4 = { class: "flex flex-col gap-8" }, R4 = { class: "divide-y rounded-lg border" }, U4 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, H4 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, K4 = /* @__PURE__ */ L({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { narrow: "" }, {
      default: O(() => [
        o("div", N4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", R4, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", U4, [
                H(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", H4, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), q4 = { class: "flex flex-col gap-10" }, G4 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, W4 = { class: "text-sm font-semibold" }, Z4 = { class: "text-sm text-pretty text-muted-foreground" }, J4 = /* @__PURE__ */ L({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", q4, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", G4, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", W4, c(r.title), 1),
              o("p", Z4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Y4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Q4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, X4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, e5 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, t5 = ["href"], n5 = ["href"], a5 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, l5 = /* @__PURE__ */ L({
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
          class: z(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), a("p", Y4, c(e.brand), 1)) : x("", !0),
          e.eyebrow ? (t(), a("p", Q4, c(e.eyebrow), 1)) : x("", !0),
          o("h1", {
            class: z([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), a("p", X4, c(e.body), 1)) : x("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", e5, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, t5)) : x("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, n5)) : x("", !0)
          ])) : x("", !0),
          e.note ? (t(), a("p", a5, c(e.note), 1)) : x("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), o5 = { class: "flex flex-col items-center gap-6" }, s5 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, r5 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, i5 = /* @__PURE__ */ L({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { muted: "" }, {
      default: O(() => [
        o("div", o5, [
          e.title ? (t(), a("p", s5, c(e.title), 1)) : x("", !0),
          o("ul", r5, [
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
}), d5 = { class: "flex flex-col gap-10" }, u5 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, c5 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, f5 = ["aria-pressed"], m5 = ["aria-pressed"], p5 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, v5 = { class: "grid gap-4 md:grid-cols-3" }, g5 = { class: "flex flex-col gap-1" }, h5 = { class: "text-sm font-semibold" }, b5 = { class: "flex items-baseline gap-1" }, y5 = { class: "text-3xl font-semibold tracking-tight" }, x5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, k5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, $5 = { class: "flex flex-col gap-2 text-sm" }, w5 = { class: "text-muted-foreground" }, C5 = ["href"], S5 = /* @__PURE__ */ L({
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
        o("div", d5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", u5, [
            o("div", c5, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, f5),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, m5)
            ]),
            e.annualNote ? (t(), a("p", p5, c(e.annualNote), 1)) : x("", !0)
          ])) : x("", !0),
          o("ul", v5, [
            (t(!0), a(P, null, j(e.items ?? [], (u, f) => (t(), a("li", {
              key: f,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", g5, [
                o("h3", h5, c(u.name), 1),
                o("p", b5, [
                  o("span", y5, c(s(u)), 1),
                  u.period ? (t(), a("span", x5, c(u.period), 1)) : x("", !0)
                ]),
                u.body ? (t(), a("p", k5, c(u.body), 1)) : x("", !0)
              ]),
              o("ul", $5, [
                (t(!0), a(P, null, j(u.features ?? [], (g, v) => (t(), a("li", {
                  key: v,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", w5, c(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, C5)) : x("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function M5() {
  const e = q(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), f = u.height + window.innerHeight, g = f <= 0 ? 0 : (window.innerHeight - u.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(g, 0), 1)));
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
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((f) => {
        s = f.some((g) => g.isIntersecting), s && d();
      }), n.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const B5 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, A5 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, z5 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, _5 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, P5 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, L5 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, O5 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, j5 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, V5 = { class: "ml-3 truncate text-xs text-muted-foreground" }, D5 = { class: "flex" }, T5 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, I5 = { class: "min-w-0 flex-1 p-4" }, E5 = { class: "flex flex-col divide-y rounded-md border" }, F5 = /* @__PURE__ */ L({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = M5();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", B5, [
        o("div", A5, [
          o("div", z5, [
            o("h2", _5, c(e.title), 1),
            e.body ? (t(), a("p", P5, c(e.body), 1)) : x("", !0)
          ]),
          o("div", L5, [
            o("div", O5, [
              o("div", j5, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", V5, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", D5, [
                o("div", T5, [
                  (t(), a(P, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", I5, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", E5, [
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
}), N5 = /* @__PURE__ */ L({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = aa(), s = q(0);
    return fe(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), f = (g) => {
        const v = Math.min((g - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - v, 3)), v < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), R5 = { class: "flex flex-col gap-10" }, U5 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, H5 = { class: "order-2 text-sm text-muted-foreground" }, K5 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, q5 = /* @__PURE__ */ L({
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
        o("div", R5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", U5, [
            (t(!0), a(P, null, j(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", H5, c(s.label), 1),
              o("dd", K5, [
                l(s.value) ? (t(), D(N5, {
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
}), G5 = { class: "flex flex-col gap-10" }, W5 = { class: "grid gap-6 md:grid-cols-3" }, Z5 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, J5 = { class: "text-sm font-semibold" }, Y5 = { class: "text-sm text-pretty text-muted-foreground" }, Q5 = /* @__PURE__ */ L({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", G5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", W5, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", Z5, c(s + 1), 1),
              o("h3", J5, c(r.title), 1),
              o("p", Y5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), X5 = { class: "flex flex-col gap-10" }, e3 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, t3 = ["src"], n3 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, a3 = { class: "min-w-0" }, l3 = { class: "truncate text-sm font-semibold" }, o3 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, s3 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, r3 = /* @__PURE__ */ L({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", X5, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", e3, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), a("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, t3)) : (t(), a("span", n3, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", a3, [
                o("h3", l3, c(r.name), 1),
                r.role ? (t(), a("p", o3, c(r.role), 1)) : x("", !0)
              ]),
              r.bio ? (t(), a("p", s3, c(r.bio), 1)) : x("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), i3 = { class: "flex flex-col gap-10" }, d3 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, u3 = { class: "text-pretty text-sm leading-relaxed" }, c3 = { class: "mt-auto flex items-center gap-3" }, f3 = ["src"], m3 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, p3 = { class: "min-w-0" }, v3 = { class: "block truncate text-sm font-medium" }, g3 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, h3 = /* @__PURE__ */ L({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: O(() => [
        o("div", i3, [
          E(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", d3, [
            (t(!0), a(P, null, j(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", u3, " “" + c(r.quote) + "” ", 1),
              o("figcaption", c3, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, f3)) : (t(), a("span", m3, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", p3, [
                  o("span", v3, c(r.name), 1),
                  r.role ? (t(), a("span", g3, c(r.role), 1)) : x("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), V6 = /* @__PURE__ */ L({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: l5,
      logos: i5,
      features: J4,
      bento: C4,
      showcase: F5,
      steps: Q5,
      stats: q5,
      testimonials: h3,
      team: r3,
      articles: g4,
      contact: V4,
      pricing: S5,
      faq: K4,
      cta: F4
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
}), b3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, D6 = /* @__PURE__ */ L({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", b3, [
      o("div", {
        class: z([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: z([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: z([
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
}), y3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, T6 = /* @__PURE__ */ L({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", y3, [...n[0] || (n[0] = [
      st('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), x3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, I6 = /* @__PURE__ */ L({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", x3, [...n[0] || (n[0] = [
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
}), k3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, E6 = /* @__PURE__ */ L({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", k3, [...n[0] || (n[0] = [
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
o4();
const F6 = "0.0.1";
export {
  fn as ACTION_KEY_ICONS,
  Rt as APPEARANCE_STYLE_ID,
  zf as Alert,
  _f as AlertDescription,
  Pf as AlertTitle,
  R8 as AppPageFooter,
  oC as AppearanceDrawer,
  l8 as Avatar,
  o8 as AvatarFallback,
  s8 as AvatarImage,
  nn as BADGE_VARIANTS,
  X3 as BadgeResolver,
  J8 as BarChart,
  r8 as Breadcrumb,
  i8 as BreadcrumbEllipsis,
  d8 as BreadcrumbItem,
  u8 as BreadcrumbLink,
  c8 as BreadcrumbList,
  f8 as BreadcrumbPage,
  m8 as BreadcrumbSeparator,
  V3 as BulkActions,
  Zn as CATALOGUE_CONTAINER,
  Df as CATALOGUE_GRID,
  fC as CATALOGUE_GRID_TIGHT,
  Tf as CATALOGUE_GRID_TILES,
  L8 as Card,
  O8 as CardAction,
  j8 as CardContent,
  V8 as CardDescription,
  D8 as CardFooter,
  T8 as CardHeader,
  I8 as CardTitle,
  Y0 as CartPanel,
  f6 as CatalogBrowser,
  hy as CatalogCard,
  na as CatalogFilterSheet,
  sn as CatalogGrid,
  u6 as CatalogInspect,
  Fk as CatalogItemDetail,
  c6 as CatalogItemView,
  m6 as CatalogRegister,
  d6 as CatalogTill,
  t1 as ChartCard,
  pt as ChartTooltip,
  ei as Checkbox,
  G3 as CheckboxCell,
  W3 as CodeCell,
  pu as ColourCell,
  t6 as ComboChart,
  Xr as CreateOptionDialog,
  Gr as CreateOptionError,
  v6 as DASHBOARD_HIDDEN_STORAGE_KEY,
  k2 as DASHBOARD_HIDE_KEY,
  g6 as DashboardShortcuts,
  uo as DataTable,
  k8 as Dialog,
  $8 as DialogClose,
  w8 as DialogContent,
  C8 as DialogDescription,
  S8 as DialogFooter,
  M8 as DialogHeader,
  pm as DialogOverlay,
  B8 as DialogScrollContent,
  A8 as DialogTitle,
  z8 as DialogTrigger,
  HC as DropdownMenu,
  KC as DropdownMenuCheckboxItem,
  qC as DropdownMenuContent,
  GC as DropdownMenuGroup,
  WC as DropdownMenuItem,
  ZC as DropdownMenuLabel,
  U6 as DropdownMenuPortal,
  JC as DropdownMenuRadioGroup,
  YC as DropdownMenuRadioItem,
  QC as DropdownMenuSeparator,
  XC as DropdownMenuShortcut,
  e8 as DropdownMenuSub,
  t8 as DropdownMenuSubContent,
  n8 as DropdownMenuSubTrigger,
  a8 as DropdownMenuTrigger,
  Y3 as EditableCell,
  Se as FOCUS_RING,
  D3 as FOCUS_RING_SOFT,
  pn as FOCUS_RING_WITHIN,
  co as FORM_MEASURE,
  Ge as FormFieldControl,
  n6 as HeatmapChart,
  pl as ICON_ALIASES,
  bt as ICON_PATHS,
  Ue as INPUT_COPY,
  Yr as INPUT_PLACEHOLDER,
  Jr as INPUT_TEXT,
  lu as IconCell,
  du as ImageCell,
  z6 as InfoNode,
  eC as InlineRecordActions,
  Ff as JPEG_IMAGE_ERROR,
  Z3 as KeyValueCell,
  _8 as Label,
  bh as LineChart,
  P0 as LineItems,
  O3 as MODAL_PANEL,
  j3 as MODAL_PANEL_FORM,
  kt as MODAL_WIDTH,
  U3 as MUTED_COPY,
  ht as MUTED_COPY_SNUG,
  H3 as MUTED_COPY_XS,
  St as MiniStatCard,
  p8 as NavigationMenu,
  v8 as NavigationMenuContent,
  g8 as NavigationMenuIndicator,
  h8 as NavigationMenuItem,
  b8 as NavigationMenuLink,
  y8 as NavigationMenuList,
  x8 as NavigationMenuTrigger,
  fm as NavigationMenuViewport,
  Ef as OPAQUE_IMAGE_ERROR,
  Dn as OVERLAY_FORM_MEASURE,
  tt as PAGE_SHELL,
  P3 as PAGE_SHELL_COMPACT,
  L3 as PAGE_SHELL_STACK,
  _6 as PaymentGatewaySettings,
  gw as PaymentGateways,
  Y8 as PieChart,
  uC as PkAlertError,
  g4 as PkArticles,
  D6 as PkAuroraBackdrop,
  We as PkBadge,
  wv as PkBarcode,
  C4 as PkBento,
  sC as PkBottomNav,
  E8 as PkBoundary,
  K8 as PkBuilder,
  de as PkButton,
  q8 as PkCalendar,
  F8 as PkCard,
  Np as PkCheckboxList,
  ea as PkCodeBox,
  Cp as PkCodeInput,
  sv as PkColourPicker,
  I6 as PkConsoleBackdrop,
  V4 as PkContact,
  N5 as PkCountUp,
  F4 as PkCta,
  U8 as PkDeviceFrame,
  Mv as PkDiff,
  Pg as PkDocument,
  qe as PkDropdown,
  T6 as PkEditorialBackdrop,
  Et as PkEmptyState,
  K4 as PkFaq,
  J4 as PkFeatureGrid,
  _e as PkFieldLabel,
  Tn as PkFileUpload,
  Ie as PkHeading,
  l5 as PkHero,
  Ai as PkKeyValue,
  V6 as PkLandingSections,
  i5 as PkLogoCloud,
  iv as PkMap,
  cv as PkMapField,
  hp as PkMarkdownInput,
  dt as PkModal,
  Xt as PkMultiSelect,
  iC as PkOtpInput,
  dC as PkPageHeader,
  $6 as PkPasskeyRegister,
  cC as PkPasswordInput,
  S5 as PkPricing,
  gv as PkQrCode,
  x0 as PkQtyStepper,
  gs as PkQueryBuilder,
  Ip as PkRadioGroup,
  H8 as PkRepeater,
  s4 as PkReveal,
  Ii as PkRichEditor,
  Me as PkSection,
  je as PkSectionHeading,
  F5 as PkShowcase,
  t2 as PkSignaturePad,
  Pe as PkSkeleton,
  At as PkSlideover,
  Ev as PkSlider,
  rC as PkSpinner,
  q5 as PkStats,
  $e as PkStatusBadge,
  Kr as PkStepIndicator,
  Q5 as PkSteps,
  E6 as PkStudioBackdrop,
  eg as PkSwatchPreview,
  Wp as PkTagsInput,
  r3 as PkTeam,
  h3 as PkTestimonials,
  we as PkTextInput,
  y4 as PkTiltCard,
  In as PkToggleButtons,
  Qv as PkVisualSelect,
  Hy as PlanCard,
  r6 as PlanEditor,
  s6 as PlanGrid,
  i6 as PlanPurchaseCard,
  e6 as PolarAreaChart,
  X8 as RadarChart,
  q3 as RatingCell,
  ac as RecordActions,
  w6 as RecordForm,
  K3 as RelationCreateDialog,
  I3 as RelationPanel,
  fo as SLIDEOVER_BODY,
  mo as SLIDEOVER_WIDTH,
  W1 as STATUS_TONES,
  Q8 as ScatterChart,
  En as SchemaNode,
  l6 as SegmentedBar,
  y6 as SelectionBar,
  rm as Separator,
  b6 as SetupChecklist,
  Wn as ShadcnInput,
  en as Sheet,
  hC as SheetClose,
  tn as SheetContent,
  qf as SheetDescription,
  bC as SheetFooter,
  Gf as SheetHeader,
  Wf as SheetTitle,
  yC as SheetTrigger,
  x1 as ShortcutsWidget,
  xC as Sidebar,
  kC as SidebarContent,
  $C as SidebarFooter,
  wC as SidebarGroup,
  CC as SidebarGroupAction,
  SC as SidebarGroupContent,
  MC as SidebarGroupLabel,
  BC as SidebarHeader,
  AC as SidebarInput,
  zC as SidebarInset,
  _C as SidebarMenu,
  PC as SidebarMenuAction,
  LC as SidebarMenuBadge,
  jC as SidebarMenuButton,
  VC as SidebarMenuItem,
  DC as SidebarMenuSkeleton,
  TC as SidebarMenuSub,
  IC as SidebarMenuSubButton,
  EC as SidebarMenuSubItem,
  FC as SidebarProvider,
  NC as SidebarRail,
  RC as SidebarSeparator,
  UC as SidebarTrigger,
  p6 as SignatureStudio,
  _t as Sparkline,
  P8 as Spinner,
  a6 as StatCard,
  o6 as StatListChart,
  h6 as StatStrip,
  Je as Switch,
  Jn as TRANSPARENT_IMAGE_HELP,
  x6 as TablePagination,
  qo as TableShell,
  k6 as TableTabs,
  wr as TableToolbar,
  J3 as TagsCell,
  Z8 as ThemeToggle,
  lm as Tooltip,
  om as TooltipContent,
  OC as TooltipProvider,
  sm as TooltipTrigger,
  ta as TrendBadge,
  C6 as UnsavedBar,
  Lf as alertVariants,
  Cc as appearancePayload,
  Un as appearanceVars,
  Ut as applyAppearance,
  Kf as assertTransparentImage,
  nC as bootstrapAppearance,
  yt as buttonClasses,
  Mt as catalogFiltersActive,
  ne as cn,
  Zr as createOptionActionLabel,
  Wr as createOptionTitle,
  by as cycleLabel,
  Ee as emptyCatalogFilters,
  V$ as entryView,
  qr as fieldControl,
  R3 as fieldErrorsFromPayload,
  a0 as findExactSku,
  yy as formatPerkValue,
  Pu as hasBadgeValue,
  B6 as hasEntryView,
  E3 as hasFieldControl,
  G8 as hasOptionPreview,
  ce as iconPath,
  Uf as imageHasTransparency,
  Hn as initializeAppearance,
  ln as isDark,
  rn as matchCatalogItem,
  vC as mergeLayoutItems,
  mm as navigationMenuTriggerStyle,
  Fv as optionPreview,
  mC as packWidgetColumns,
  pC as parseWidgetId,
  xy as perkGranted,
  on as readAppearance,
  Sc as readServerAppearance,
  o4 as registerBuiltInFieldControls,
  M6 as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  D$ as registeredEntryViews,
  F3 as registeredFieldTypes,
  Nv as registeredOptionPreviews,
  tC as resetAppearanceBootstrapForTests,
  A6 as resetEntryViews,
  N3 as resetFieldControls,
  W8 as resetOptionPreviews,
  Te as resolveActionIcon,
  lC as setAppearancePersister,
  im as sidebarMenuButtonVariants,
  Q1 as statusBadgeVariant,
  Y1 as statusTone,
  aC as syncAppearanceFromInertiaPage,
  gC as toPersistedLayout,
  T3 as toUrl,
  Gn as useAppearance,
  P6 as useColumnVisibility,
  L6 as useColumnWidths,
  O6 as useLiveUpdates,
  h4 as usePointer,
  aa as useReveal,
  Q3 as useSchemaColumns,
  M5 as useScrollProgress,
  N8 as useShellPageFooter,
  zt as useSidebar,
  j6 as useTenantTheme,
  S6 as useUnsavedChanges,
  F6 as version,
  hn as widgetId
};
//# sourceMappingURL=index.js.map
