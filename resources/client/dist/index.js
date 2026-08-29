import './ui.css';
import { defineComponent as O, useSlots as qt, openBlock as t, createElementBlock as a, normalizeClass as z, unref as k, renderSlot as K, createElementVNode as o, toDisplayString as c, createCommentVNode as $, computed as x, normalizeStyle as se, Fragment as P, renderList as V, ref as U, watch as me, useId as ra, withModifiers as he, createTextVNode as R, createVNode as I, createStaticVNode as Mt, createBlock as D, createSlots as st, withCtx as L, nextTick as De, onBeforeUnmount as ke, Teleport as dt, Transition as Ye, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Gt, vModelSelect as We, vModelDynamic as ia, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Ne, defineAsyncComponent as cn, inject as yt, vShow as He, withKeys as Tt, onUnmounted as da, isRef as ua, useTemplateRef as ca, onErrorCaptured as fa, provide as Et, reactive as rt, useModel as ut, mergeModels as Fe, markRaw as ma, shallowRef as pa, watchEffect as va } from "vue";
import { useForwardPropsEmits as be, DialogRoot as Mn, DialogOverlay as Wt, DialogPortal as Zt, DialogContent as Jt, DialogClose as Qe, CheckboxRoot as ga, CheckboxIndicator as ha, SwitchRoot as ba, SwitchThumb as ya, DialogDescription as Bn, DialogTitle as _n, DialogTrigger as An, createContext as xa, Primitive as et, TooltipRoot as ka, TooltipPortal as $a, TooltipContent as wa, TooltipArrow as Ca, TooltipProvider as zn, TooltipTrigger as Sa, Separator as Ma, DropdownMenuRoot as Ba, DropdownMenuCheckboxItem as _a, DropdownMenuItemIndicator as Pn, DropdownMenuPortal as Aa, DropdownMenuContent as za, DropdownMenuGroup as Pa, useForwardProps as Le, DropdownMenuItem as Oa, DropdownMenuLabel as La, DropdownMenuRadioGroup as ja, DropdownMenuRadioItem as Va, DropdownMenuSeparator as Da, DropdownMenuSub as Ta, DropdownMenuSubContent as Ea, DropdownMenuSubTrigger as Ia, DropdownMenuTrigger as Fa, AvatarRoot as Na, AvatarFallback as Ra, AvatarImage as Ua, NavigationMenuViewport as Ha, NavigationMenuRoot as Ka, NavigationMenuContent as qa, NavigationMenuIndicator as Ga, NavigationMenuItem as Wa, NavigationMenuLink as Za, NavigationMenuList as Ja, NavigationMenuTrigger as Ya, Label as Xa } from "reka-ui";
import { DropdownMenuPortal as M6 } from "reka-ui";
import { X as Yt, Check as On, AlertCircle as Qa, EyeOff as el, Eye as tl, PanelLeftOpen as nl, PanelLeftClose as al, Circle as ll, ChevronRight as Ln, MoreHorizontal as ol, ChevronDown as sl, Loader2Icon as rl } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as jn, useMediaQuery as il, useEventListener as dl, defaultDocument as ul } from "@vueuse/core";
import { clsx as cl } from "clsx";
import { twMerge as fl } from "tailwind-merge";
import { cva as Xt } from "class-variance-authority";
import { usePage as Vn, Link as ml } from "@inertiajs/vue3";
const ht = {
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
    return ht.dot;
  const l = pl[e] ?? e;
  return ht[l] ?? ht.dot;
}
function Te(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== ht.dot || e.icon === "dot")
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
}, It = /* @__PURE__ */ O({
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
        K(n.$slots, "illustration")
      ])) : (t(), a("div", {
        key: 1,
        class: z(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        K(n.$slots, "icon", {}, () => [
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
        e.description ? (t(), a("p", yl, c(e.description), 1)) : $("", !0)
      ]),
      n.$slots.actions ? (t(), a("div", xl, [
        K(n.$slots, "actions")
      ])) : $("", !0)
    ], 2));
  }
}), kl = ["aria-label"], Pe = /* @__PURE__ */ O({
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
    }, r = x(() => n[l.variant] ?? n.text), s = x(() => Math.max(1, Math.min(l.count, 50)));
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
      (t(!0), a(P, null, V(s.value, (f) => (t(), a("span", {
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
}, Bl = ["colspan"], _l = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Al = { class: "bg-muted/50" }, zl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Pl = ["id", "checked", "indeterminate"], Ol = ["onClick"], Ll = {
  key: 0,
  class: "text-xs"
}, jl = {
  key: 1,
  class: "text-xs opacity-40"
}, Vl = { key: 1 }, Dl = ["aria-label", "onPointerdown"], Tl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, El = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Il = {
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
}, Yl = ["aria-label", "onClick"], Xl = { class: "text-xs" }, Ql = {
  key: 1,
  class: "text-muted-foreground"
}, eo = { key: 2 }, to = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, no = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, ao = { key: 0 }, lo = { class: "text-muted-foreground block text-[10px] font-medium" }, oo = { class: "font-semibold tabular-nums" }, so = { key: 1 }, ro = 40, io = /* @__PURE__ */ O({
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
      const le = n.groupBy ? X[n.groupBy.key] : null, ee = le == null || le === "" ? "None" : String(le);
      return !n.groupBy || n.groupBy.titlePrefixed === !1 ? ee : `${n.groupBy.label}: ${ee}`;
    }
    const d = U(/* @__PURE__ */ new Set()), u = U(/* @__PURE__ */ new Set());
    function f(X) {
      return n.groupBy?.collapsible ? d.value.has(X) : !1;
    }
    function b(X) {
      if (!n.groupBy?.collapsible)
        return;
      const le = new Set(u.value);
      le.add(X), u.value = le;
      const ee = new Set(d.value);
      ee.has(X) ? ee.delete(X) : ee.add(X), d.value = ee;
    }
    function g(X) {
      return n.groupBy?.collapsible ? !f(r(n.rows[X])) : !0;
    }
    me(
      () => n.rows,
      (X) => {
        if (!n.groupBy?.collapsible || !n.collapsedGroupsByDefault)
          return;
        const le = new Set(d.value);
        for (const ee of X) {
          const ue = r(ee);
          ue !== "" && !u.value.has(ue) && le.add(ue);
        }
        d.value = le;
      },
      { immediate: !0 }
    );
    const h = U(null), w = U(null);
    function y(X, le) {
      h.value = X, le.dataTransfer?.setData("text/plain", String(X)), le.dataTransfer && (le.dataTransfer.effectAllowed = "move");
    }
    function C() {
      h.value = null, w.value = null;
    }
    function M(X) {
      return h.value === null || w.value !== X ? "" : h.value > X ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function B(X, le) {
      h.value !== null && (le.preventDefault(), w.value = X);
    }
    function _(X) {
      const le = h.value;
      if (h.value = null, w.value = null, le === null || le === X)
        return;
      const ee = n.rows.map((ie) => ie[n.rowKey]), [ue] = ee.splice(le, 1);
      ee.splice(X, 0, ue), p("reorder", ee);
    }
    const p = l;
    function m(X, le) {
      !n.rowClickable || n.reordering || le.button !== 0 || le.metaKey || le.ctrlKey || le.shiftKey || le.altKey || le.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || p("row-click", X);
    }
    const v = U(null), A = ra(), F = x(() => n.columns.filter((X) => !n.hidden?.has(X.key))), E = x(() => {
      const X = F.value.find((le) => le.sticky);
      return X ? X.key : n.stickyFirst && F.value.length > 0 ? F.value[0].key : null;
    });
    function te(X) {
      return E.value === X.key;
    }
    function H() {
      return n.selectable && !n.reordering ? `${ro}px` : "0";
    }
    function W(X) {
      const le = n.columnWidths?.[X.key];
      return typeof le == "number" ? le : X.width;
    }
    function J(X) {
      const le = W(X), ee = te(X), ue = {};
      return le !== void 0 && (ue.width = `${le}px`, ue.minWidth = `${le}px`, ue.maxWidth = `${le}px`), ee && (ue.left = H()), Object.keys(ue).length ? ue : void 0;
    }
    function Z(X) {
      return n.resizable ? X.resizable !== !1 : !1;
    }
    function G(X, le) {
      if (!Z(X))
        return;
      le.preventDefault(), le.stopPropagation();
      const ee = le.clientX, ue = W(X) ?? 160, ie = le.currentTarget;
      try {
        ie.setPointerCapture(le.pointerId);
      } catch {
      }
      function Ke(at) {
        const Pt = ue + (at.clientX - ee);
        p("resize", X.key, Math.min(1200, Math.max(48, Pt)));
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
    const q = x(() => F.value.some((X) => !!X.group)), N = x(() => {
      const X = [];
      for (const le of F.value) {
        const ee = le.group ?? null, ue = X[X.length - 1];
        ue && ue.label === ee ? ue.span += 1 : X.push({ label: ee, span: 1, key: `${ee ?? "loose"}-${le.key}` });
      }
      return X;
    });
    function S(X) {
      const le = X[n.rowKey];
      return le == null || le === "" ? null : le;
    }
    function T(X) {
      const le = S(X);
      return le !== null && !!n.selected?.has(le);
    }
    const j = U(null);
    function Y(X) {
      return n.rows.findIndex((le) => {
        const ee = S(le);
        return ee !== null && ee === X;
      });
    }
    function ge(X, le) {
      const ee = S(X);
      if (ee === null)
        return;
      const ue = le.shiftKey, ie = !!n.selected?.has(ee);
      if (ue && j.value !== null && j.value !== ee) {
        const Ke = Y(j.value), Re = Y(ee);
        if (Ke !== -1 && Re !== -1) {
          const at = Math.min(Ke, Re), Pt = Math.max(Ke, Re), sa = !ie;
          for (let vt = at; vt <= Pt; vt++) {
            if (!g(vt))
              continue;
            const Ot = S(n.rows[vt]);
            if (Ot === null)
              continue;
            !!n.selected?.has(Ot) !== sa && p("toggle-row", Ot);
          }
          j.value = ee;
          return;
        }
      }
      p("toggle-row", ee), j.value = ee;
    }
    const ye = x(
      () => n.rows.map((X) => S(X)).filter((X) => X !== null)
    ), oe = x(
      () => ye.value.length > 0 && ye.value.every((X) => n.selected?.has(X))
    ), Q = x(
      () => !oe.value && ye.value.some((X) => n.selected?.has(X))
    );
    function ae(X) {
      return X.sortKey ?? X.key;
    }
    function Ce(X) {
      return n.sort === ae(X);
    }
    async function dn(X, le, ee) {
      try {
        await navigator.clipboard.writeText(String(ee)), v.value = `${X}-${le.key}`, setTimeout(() => v.value = null, 1200);
      } catch {
      }
    }
    const la = x(
      () => !!n.summaries && !!n.summaryValues && Object.keys(n.summaries).length > 0
    );
    function un(X) {
      return n.summaries?.[X] ?? null;
    }
    function oa(X) {
      const le = n.summaries?.[X], ee = n.summaryValues?.[X];
      if (!le)
        return "";
      if (ee == null)
        return "None";
      const ue = le.divideBy ? ee / le.divideBy : ee, ie = new Intl.NumberFormat(void 0, {
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
          q.value ? (t(), a("tr", Cl, [
            e.reordering ? (t(), a("th", Sl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", Ml)) : $("", !0),
            (t(!0), a(P, null, V(N.value, (ee) => (t(), a("th", {
              key: ee.key,
              colspan: ee.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(ee.label ?? ""), 9, Bl))), 128)),
            X.$slots.actions ? (t(), a("th", _l)) : $("", !0)
          ])) : $("", !0),
          o("tr", Al, [
            e.reordering ? (t(), a("th", zl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("th", {
              key: 1,
              class: z(["w-10 border-b px-3 py-2.5", E.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${k(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: oe.value,
                indeterminate: Q.value,
                "aria-label": "Select all rows on this page",
                onClick: le[0] || (le[0] = he(() => {
                }, ["stop"])),
                onChange: le[1] || (le[1] = he((ee) => p("toggle-page", !oe.value), ["stop"]))
              }, null, 40, Pl)
            ], 2)) : $("", !0),
            (t(!0), a(P, null, V(F.value, (ee) => (t(), a("th", {
              key: ee.key,
              class: z([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                te(ee) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(J(ee))
            }, [
              ee.sortable ? (t(), a("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => p("sort", ae(ee))
              }, [
                R(c(ee.label) + " ", 1),
                Ce(ee) ? (t(), a("span", Ll, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), a("span", jl, "↕"))
              ], 8, Ol)) : (t(), a("span", Vl, c(ee.label), 1)),
              Z(ee) ? (t(), a("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${ee.label}`,
                onPointerdown: (ue) => G(ee, ue)
              }, null, 40, Dl)) : $("", !0)
            ], 6))), 128)),
            X.$slots.actions ? (t(), a("th", Tl, [...le[2] || (le[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), a("tbody", El, [
          (t(), a(P, null, V(6, (ee) => o("tr", {
            key: `skel-${ee}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), a("td", Il, [
              I(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), a("td", Fl, [
              I(Pe, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            (t(!0), a(P, null, V(F.value, (ue) => (t(), a("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              I(Pe, { variant: "text" })
            ]))), 128)),
            X.$slots.actions ? (t(), a("td", Nl, [
              I(Pe, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : $("", !0)
          ])), 64))
        ])) : (t(), a("tbody", {
          key: 1,
          class: z(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), a(P, null, V(e.rows, (ee, ue) => (t(), a(P, {
            key: S(ee) ?? `row-${ue}`
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
                  "aria-expanded": !f(r(ee)),
                  dusk: `group-header-${r(ee) || "none"}`,
                  onClick: (ie) => b(r(ee))
                }, [
                  o("span", Kl, c(f(r(ee)) ? "▸" : "▾"), 1),
                  R(" " + c(i(ee)), 1)
                ], 8, Hl)) : (t(), a("span", ql, c(i(ee)), 1))
              ], 8, Ul)
            ])) : $("", !0),
            g(ue) ? (t(), a("tr", {
              key: 1,
              class: z(["group pk-row border-b transition-colors hover:bg-muted/50", [
                T(ee) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                h.value === ue ? "opacity-40" : "",
                M(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => y(ue, ie),
              onDragover: (ie) => B(ue, ie),
              onDrop: he((ie) => _(ue), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => p("row-contextmenu", ee, ie),
              onClick: (ie) => m(ee, ie)
            }, [
              e.reordering ? (t(), a("td", Wl, [...le[3] || (le[3] = [
                Mt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), a("td", {
                key: 1,
                class: z(["px-3 py-2", E.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${k(A)}-row-${S(ee) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: S(ee) ?? void 0,
                  checked: T(ee),
                  disabled: S(ee) === null,
                  "aria-label": S(ee) === null ? "This row has no id and cannot be selected" : `Select row ${S(ee)}`,
                  onClick: he((ie) => ge(ee, ie), ["stop"])
                }, null, 8, Zl)
              ], 2)) : $("", !0),
              (t(!0), a(P, null, V(F.value, (ie) => (t(), a("td", {
                key: ie.key,
                class: z(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  te(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: se(J(ie))
              }, [
                K(X.$slots, `cell:${ie.key}`, {
                  row: ee,
                  value: ee[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), a("span", Jl, [
                    R(c(ee[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => dn(String(ee[e.rowKey]), ie, ee[ie.key])
                    }, [
                      o("span", Xl, c(v.value === `${ee[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Yl)
                  ])) : ee[ie.key] == null || ee[ie.key] === "" ? (t(), a("span", Ql, "None")) : (t(), a("span", eo, c(ee[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              X.$slots.actions ? (t(), a("td", to, [
                K(X.$slots, "actions", { row: ee }, void 0, !0)
              ])) : $("", !0)
            ], 42, Gl)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        la.value ? (t(), a("tfoot", no, [
          o("tr", null, [
            e.selectable ? (t(), a("td", ao)) : $("", !0),
            (t(!0), a(P, null, V(e.columns, (ee) => (t(), a(P, {
              key: `s-${ee.key}`
            }, [
              e.hidden?.has(ee.key) ? $("", !0) : (t(), a("td", {
                key: 0,
                class: z(["px-3 py-2 align-top text-sm whitespace-nowrap", ee.cellClass])
              }, [
                un(ee.key) ? (t(), a(P, { key: 0 }, [
                  o("span", lo, c(un(ee.key).label), 1),
                  o("span", oo, c(oa(ee.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            X.$slots.actions ? (t(), a("td", so)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), D(It, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, st({ _: 2 }, [
        X.$slots["clear-filters"] ? {
          name: "actions",
          fn: L(() => [
            K(X.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), D(It, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, st({ _: 2 }, [
        X.$slots["empty-actions"] ? {
          name: "actions",
          fn: L(() => [
            K(X.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : $("", !0)
    ], 2));
  }
}), Bt = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of l)
    n[r] = s;
  return n;
}, uo = /* @__PURE__ */ Bt(io, [["__scopeId", "data-v-c0f7d40f"]]), tt = "w-full min-w-0 px-4 py-6 sm:px-6", p3 = "w-full min-w-0 p-3 sm:p-4", v3 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", co = "w-full max-w-7xl", fo = "px-4 py-4", Dn = "w-full min-w-0", mo = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, lt = "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", xt = {
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
}, g3 = xt.confirm, h3 = xt.form, po = ["aria-busy", "aria-label"], vo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, go = { class: "text-base font-semibold" }, ho = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, bo = {
  key: 0,
  class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3"
}, it = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null);
    let i = null;
    const d = U(!1), u = x(() => xt[n.size] ?? xt.confirm);
    function f(h) {
      d.value = h.target === h.currentTarget;
    }
    function b(h) {
      d.value && h.target === h.currentTarget && !n.busy && r("close"), d.value = !1;
    }
    function g(h) {
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
      const y = w[0], C = w[w.length - 1];
      h.shiftKey && document.activeElement === y ? (h.preventDefault(), C.focus()) : !h.shiftKey && document.activeElement === C && (h.preventDefault(), y.focus());
    }
    return me(
      () => n.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", g), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", g), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", g)), (h, w) => (t(), D(dt, { to: "body" }, [
      I(Ye, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: f,
            onPointerup: b
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
                e.description ? (t(), a("p", ho, c(e.description), 1)) : $("", !0)
              ]),
              o("div", {
                class: z(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", k(Dn)])
              }, [
                K(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), a("div", bo, [
                K(h.$slots, "footer")
              ])) : $("", !0)
            ], 10, po)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), yo = 160, qe = /* @__PURE__ */ O({
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
    const n = e, r = U(!1), s = U(null), i = U(null), d = U({ top: 0, left: 0, minWidth: 0 }), u = U(null);
    let f = null;
    function b(m) {
      !n.dismissOnPanelClick || m.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function g() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await De(), M());
    }
    function h() {
      f = setTimeout(C, 180);
    }
    async function w() {
      u.value = null, r.value = !r.value, r.value && (await De(), M());
    }
    async function y(m, v) {
      u.value = { x: m, y: v }, r.value = !0, await De(), M();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function M() {
      const m = s.value, v = i.value;
      if (!m || !v)
        return;
      const A = v.getBoundingClientRect(), F = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : m.getBoundingClientRect();
      let te, H;
      if (n.placement === "bottom")
        te = E.bottom + n.offset, te + A.height > window.innerHeight - F && E.top - A.height - n.offset > F && (te = E.top - A.height - n.offset), H = n.align === "end" && !u.value ? E.right - A.width : E.left;
      else {
        te = E.top;
        const W = n.placement === "right", J = E.right + n.offset + A.width < window.innerWidth - F, Z = E.left - n.offset - A.width > F;
        H = (W ? J || !Z : !Z && J) ? E.right + n.offset : E.left - n.offset - A.width;
      }
      H = Math.min(Math.max(F, H), window.innerWidth - A.width - F), te = Math.min(Math.max(F, te), window.innerHeight - A.height - F), d.value = { top: te, left: H, minWidth: Math.max(E.width, yo) };
    }
    function B(m) {
      if (!r.value)
        return;
      const v = m.target;
      s.value?.contains(v) || i.value?.contains(v) || (v instanceof Element ? v : v.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function _(m) {
      m.key === "Escape" && r.value && (m.stopPropagation(), C());
    }
    function p() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        M();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", B), document.addEventListener("keydown", _), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", B), document.removeEventListener("keydown", _), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    }), l({ close: C, openAt: y }), (m, v) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: v[2] || (v[2] = (A) => e.hoverable && g()),
      onPointerleave: v[3] || (v[3] = (A) => e.hoverable && h())
    }, [
      o("div", { onClick: w }, [
        K(m.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(dt, { to: "body" }, [
        I(Ye, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
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
              onPointerenter: v[0] || (v[0] = (A) => e.hoverable && g()),
              onPointerleave: v[1] || (v[1] = (A) => e.hoverable && h()),
              onClick: b
            }, [
              K(m.$slots, "panel", { close: C })
            ], 38)) : $("", !0)
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
}, _o = ["d"], Ao = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, zo = ["disabled", "onClick"], Po = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oo = ["d"], Lo = { class: "min-w-0 flex-1 truncate" }, jo = { class: "text-muted-foreground text-sm font-normal" }, Vo = { class: "text-foreground font-medium tabular-nums" }, Do = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, To = ["disabled"], Eo = { class: "text-muted-foreground text-sm font-normal" }, Io = { class: "text-foreground font-medium tabular-nums" }, Fo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, No = ["disabled"], b3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(!1), d = x(() => n.allMatching ? n.total : n.count), u = x(() => d.value !== void 0), f = x(() => u.value && d.value === 0), b = x(() => n.actions.filter((_) => !_.destructive)), g = x(() => n.actions.filter((_) => _.destructive)), h = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function w(_) {
      return h[_.color ?? "gray"] ?? h.gray;
    }
    function y(_) {
      if (_.confirmation) {
        s.value = _;
        return;
      }
      r("run", _.key);
    }
    function C() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function M() {
      i.value = !1, r("export");
    }
    const B = (_) => new Intl.NumberFormat().format(_);
    return (_, p) => (t(), a(P, null, [
      I(qe, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...p[5] || (p[5] = [
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
          ])], 8, xo)
        ]),
        panel: L(() => [
          o("div", ko, [
            (t(!0), a(P, null, V(b.value, (m) => (t(), a("button", {
              key: m.key,
              type: "button",
              role: "menuitem",
              class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", w(m)]),
              disabled: e.busy,
              onClick: (v) => y(m)
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
              onClick: p[0] || (p[0] = (m) => i.value = !0)
            }, [
              (t(), a("svg", Bo, [
                o("path", {
                  d: k(ce)("download")
                }, null, 8, _o)
              ])),
              p[6] || (p[6] = R(" Export CSV ", -1))
            ], 8, Mo)) : $("", !0),
            g.value.length ? (t(), a("div", Ao, [
              (t(!0), a(P, null, V(g.value, (m) => (t(), a("button", {
                key: m.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (v) => y(m)
              }, [
                (t(), a("svg", Po, [
                  o("path", {
                    d: k(Te)({ ...m, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", Lo, c(m.label), 1)
              ], 8, zo))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      I(it, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: p[2] || (p[2] = (m) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[1] || (p[1] = (m) => s.value = null)
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
        default: L(() => [
          o("p", jo, [
            p[7] || (p[7] = R(" This will affect ", -1)),
            o("span", Vo, [
              u.value ? (t(), a(P, { key: 1 }, [
                R(c(B(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            p[8] || (p[8] = R(" . ", -1))
          ]),
          f.value ? (t(), a("p", Do, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      I(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: p[4] || (p[4] = (m) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: p[3] || (p[3] = (m) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || f.value,
            onClick: M
          }, " Export CSV ", 8, No)
        ]),
        default: L(() => [
          o("p", Eo, [
            p[9] || (p[9] = R(" This will export ", -1)),
            o("span", Io, [
              u.value ? (t(), a(P, { key: 1 }, [
                R(c(B(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), a(P, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            p[10] || (p[10] = R(". ", -1))
          ]),
          f.value ? (t(), a("p", Fo, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
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
}, qo = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", Ro, [
      l.$slots.tabs ? (t(), a("div", Uo, [
        K(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.title ? (t(), a("div", Ho, [
        K(l.$slots, "title")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), a("div", {
        key: 2,
        class: z(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        K(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), a("div", Ko, [
        K(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", pn = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", y3 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Go = ["aria-expanded"], Wo = ["aria-label", "onClick"], Zo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Jo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Yo = {
  key: 0,
  class: "border-b p-1"
}, Xo = ["placeholder"], Qo = { class: "max-h-60 overflow-y-auto p-1" }, es = ["aria-selected", "onMouseenter", "onClick"], ts = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Qt = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(null), d = U(null), u = U(!1), f = U(""), b = U(0), g = U({ top: 0, left: 0, width: 0 }), h = x(
      () => n.modelValue.map(
        (H) => n.options.find((W) => W.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), w = x(() => n.searchable ?? n.options.length > 6), y = x(() => {
      const H = new Set(n.modelValue), W = f.value.trim().toLowerCase();
      return n.options.filter((J) => !H.has(J.value)).filter((J) => W ? J.label.toLowerCase().includes(W) : !0);
    }), C = x(() => n.max !== null && n.modelValue.length >= n.max);
    function M() {
      const H = s.value, W = i.value;
      if (!H || !W)
        return;
      const J = H.getBoundingClientRect(), Z = W.getBoundingClientRect(), G = 8;
      let q = J.bottom + 4;
      q + Z.height > window.innerHeight - G && J.top - Z.height - 4 > G && (q = J.top - Z.height - 4), g.value = {
        top: q,
        left: Math.min(Math.max(G, J.left), window.innerWidth - J.width - G),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: J.width
      };
    }
    async function B() {
      n.disabled || u.value || (u.value = !0, f.value = "", b.value = 0, await De(), M(), d.value?.focus());
    }
    function _() {
      u.value = !1, f.value = "";
    }
    function p() {
      u.value ? _() : B();
    }
    function m(H) {
      C.value || (r("update:modelValue", [...n.modelValue, H.value]), f.value = "", b.value = 0, De(() => {
        M(), d.value?.focus();
      }));
    }
    function v(H) {
      r(
        "update:modelValue",
        n.modelValue.filter((W) => W !== H)
      ), De(M);
    }
    function A() {
      r("update:modelValue", []), De(M);
    }
    function F(H) {
      if (!n.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), _();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && n.modelValue.length > 0) {
          v(n.modelValue[n.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), B();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), b.value = Math.min(b.value + 1, y.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), b.value = Math.max(b.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const W = y.value[b.value];
            W && m(W);
          }
        }
      }
    }
    function E(H) {
      if (!u.value)
        return;
      const W = H.target;
      s.value?.contains(W) || i.value?.contains(W) || _();
    }
    function te() {
      u.value && M();
    }
    return me(y, (H) => {
      b.value > H.length - 1 && (b.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ke(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, W) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: F
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
        onClick: p
      }, [
        (t(!0), a(P, null, V(h.value, (J) => (t(), a("span", {
          key: J.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(c(J.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${J.label}`,
            onClick: he((Z) => v(J.value), ["stop"])
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
        h.value.length === 0 ? (t(), a("span", Zo, c(e.placeholder), 1)) : $("", !0),
        o("span", Jo, [
          h.value.length > 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(A, ["stop"])
          }, " Clear ")) : $("", !0),
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
      (t(), D(dt, { to: "body" }, [
        I(Ye, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            u.value ? (t(), a("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              "data-pk-overlay": "",
              class: "bg-popover fixed z-[100] overflow-hidden rounded-md border shadow-lg",
              style: se({
                top: `${g.value.top}px`,
                left: `${g.value.left}px`,
                width: `${g.value.width}px`
              }),
              role: "listbox"
            }, [
              w.value ? (t(), a("div", Yo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": W[0] || (W[0] = (J) => f.value = J),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: F
                }, null, 40, Xo), [
                  [Ae, f.value]
                ])
              ])) : $("", !0),
              o("div", Qo, [
                (t(!0), a(P, null, V(y.value, (J, Z) => (t(), a("button", {
                  key: J.value,
                  type: "button",
                  class: z(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", Z === b.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": Z === b.value,
                  onMouseenter: (G) => b.value = Z,
                  onClick: (G) => m(J)
                }, c(J.label), 43, es))), 128)),
                y.value.length === 0 ? (t(), a("p", ts, [
                  C.value ? (t(), a(P, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), a(P, { key: 1 }, [
                    R("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), a(P, { key: 2 }, [
                    R("Everything is selected.")
                  ], 64))
                ])) : $("", !0)
              ])
            ], 4)) : $("", !0)
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
function bt(e = {}) {
  const l = e.variant ?? "default", n = e.size ?? "default";
  return [ns, as[l], ls[n], e.class].filter(Boolean).join(" ");
}
const de = /* @__PURE__ */ O({
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
    const l = e, n = x(
      () => bt({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(_e(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: z(n.value)
    }, {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), os = { class: "flex items-center gap-2" }, ss = ["onUpdate:modelValue", "onChange"], rs = ["value"], is = ["onUpdate:modelValue"], ds = ["value"], us = ["onUpdate:modelValue"], cs = ["onUpdate:modelValue", "multiple"], fs = ["value"], ms = ["onUpdate:modelValue", "type"], ps = ["aria-label", "onClick"], vs = { class: "flex items-center gap-2" }, gs = /* @__PURE__ */ O({
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
    const n = e, r = l, s = () => ({ logic: "and", rules: [] }), i = U(n.modelValue ? structuredClone(n.modelValue) : s());
    me(
      () => n.modelValue,
      (p) => {
        i.value = p ? structuredClone(p) : s();
      }
    );
    const d = (p) => "rules" in p, u = x(() => Object.keys(n.fields));
    function f(p) {
      const m = p ? n.fields[p]?.kind : void 0;
      return m ? n.operators[m] ?? [] : [];
    }
    const b = {
      is: "is",
      is_not: "is not",
      is_any_of: "is any of",
      is_none_of: "is none of",
      before: "is before",
      after: "is after",
      between: "is between"
    };
    function g() {
      r("update:modelValue", i.value);
    }
    function h() {
      const p = u.value[0];
      i.value.rules.push({
        field: p,
        operator: f(p)[0],
        value: void 0
      }), g();
    }
    function w() {
      i.value.rules.push(s()), g();
    }
    function y(p) {
      i.value.rules.splice(p, 1), g();
    }
    function C(p) {
      p.operator = f(p.field)[0], p.value = void 0, g();
    }
    const M = x(() => n.depth + 1 < n.maxDepth);
    function B() {
      i.value = s(), g(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (p, m) => {
      const v = Gt("PkQueryBuilder", !0);
      return t(), a("div", {
        class: z(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", os, [
          pe(o("select", {
            "onUpdate:modelValue": m[0] || (m[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: g
          }, [...m[1] || (m[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [We, i.value.logic]
          ]),
          m[2] || (m[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), a(P, null, V(i.value.rules, (A, F) => (t(), a("div", {
          key: F,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), D(v, {
            key: 0,
            modelValue: i.value.rules[F],
            "onUpdate:modelValue": [(E) => i.value.rules[F] = E, g],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), a(P, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (E) => A.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => C(A)
            }, [
              (t(!0), a(P, null, V(u.value, (E) => (t(), a("option", {
                key: E,
                value: E
              }, c(e.fields[E].label), 9, rs))), 128))
            ], 40, ss), [
              [We, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (E) => A.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: g
            }, [
              (t(!0), a(P, null, V(f(A.field), (E) => (t(), a("option", {
                key: E,
                value: E
              }, c(b[E] ?? E), 9, ds))), 128))
            ], 40, is), [
              [We, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), a("select", {
              key: 0,
              "onUpdate:modelValue": (E) => A.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: g
            }, [...m[3] || (m[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, us)), [
              [We, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? pe((t(), a("select", {
              key: 1,
              "onUpdate:modelValue": (E) => A.value = E,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: g
            }, [
              (t(!0), a(P, null, V(e.fields[A.field].options, (E) => (t(), a("option", {
                key: E,
                value: E
              }, c(E), 9, fs))), 128))
            ], 40, cs)), [
              [We, A.value]
            ]) : pe((t(), a("input", {
              key: 2,
              "onUpdate:modelValue": (E) => A.value = E,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: g
            }, null, 40, ms)), [
              [ia, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (E) => y(F)
          }, " × ", 8, ps)
        ]))), 128)),
        o("div", vs, [
          I(de, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: L(() => [...m[4] || (m[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          M.value ? (t(), D(de, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: w
          }, {
            default: L(() => [...m[5] || (m[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), a(P, { key: 1 }, [
            m[8] || (m[8] = o("span", { class: "flex-1" }, null, -1)),
            I(de, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: B
            }, {
              default: L(() => [...m[6] || (m[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            I(de, {
              type: "button",
              size: "sm",
              onClick: _
            }, {
              default: L(() => [...m[7] || (m[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), en = /* @__PURE__ */ O({
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
      default: L((u) => [
        K(i.$slots, "default", Oe(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
});
function ne(...e) {
  return fl(cl(e));
}
function x3(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const hs = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Wt), re({
      "data-slot": "sheet-overlay",
      class: k(ne)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(n)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tn = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class", "side"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        I(hs),
        I(k(Jt), re({
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
          default: L(() => [
            K(d.$slots, "default"),
            I(k(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                I(k(Yt), { class: "size-4" }),
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
}, Ms = { class: "text-xs font-medium" }, Bs = ["value", "onChange"], _s = ["value"], As = { class: "mb-4" }, zs = { class: "flex flex-col gap-1" }, Ps = ["disabled", "onClick"], Os = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Ls = {
  key: 1,
  class: "mb-4"
}, js = { class: "flex flex-col gap-1" }, Vs = ["onClick"], Ds = { class: "border-t p-4" }, Ts = ["disabled"], Es = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Is = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Fs = ["placeholder", "title", "aria-label"], Ns = ["aria-label"], Rs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Us = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Hs = { class: "text-xs font-medium" }, Ks = ["value", "onChange"], qs = ["value"], Gs = { class: "grid grid-cols-2 gap-2" }, Ws = ["value", "onChange"], Zs = ["value", "onChange"], Js = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ys = ["value", "onChange"], Xs = ["value", "onChange"], Qs = {
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
}, kr = ["dusk"], $r = ["aria-label", "onClick"], wr = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(!1), i = U(n.search);
    me(
      () => n.search,
      (N) => {
        N !== i.value && (i.value = N);
      }
    );
    let d;
    me(i, (N) => {
      clearTimeout(d), d = setTimeout(() => {
        N !== n.search && r("update:search", N);
      }, 250);
    });
    const u = U({ ...n.filters });
    me(
      () => n.filters,
      (N) => {
        u.value = { ...N };
      },
      { deep: !0 }
    );
    const f = x(
      () => n.filterSchema.filter(
        (N) => n.filters[N.key] !== null && n.filters[N.key] !== void 0
      ).length
    ), b = x(() => JSON.stringify(u.value) !== JSON.stringify(n.filters)), g = x(() => n.search !== "" || f.value > 0), h = x(() => n.indicators.length ? n.indicators : n.filterSchema.filter((N) => n.filters[N.key] !== null && n.filters[N.key] !== void 0).map((N) => ({
      key: N.key,
      label: `${N.label}: ${String(n.filters[N.key])}`,
      removable: !0
    })));
    function w(N) {
      r("group", N);
    }
    function y(N) {
      r("clear-filter", N);
    }
    function C(N) {
      return N.type === "multiselect";
    }
    function M(N) {
      const S = u.value[N.key];
      return Array.isArray(S) ? S : S == null ? [] : [S];
    }
    function B(N) {
      return M(N).filter(
        (S) => typeof S == "string" || typeof S == "number"
      );
    }
    function _(N) {
      return H(N).flatMap(
        (S) => typeof S.value == "string" || typeof S.value == "number" ? [{ value: S.value, label: S.label }] : []
      );
    }
    function p(N, S) {
      u.value = { ...u.value, [N.key]: S === "" ? null : S };
    }
    function m(N, S) {
      const T = u.value[N.key];
      if (typeof T != "string" || !T.includes(".."))
        return "";
      const [j, Y] = T.split("..");
      return S === "from" ? j ?? "" : Y ?? "";
    }
    function v(N, S, T) {
      const j = S === "from" ? T : m(N, "from"), Y = S === "to" ? T : m(N, "to");
      u.value = {
        ...u.value,
        [N.key]: j && Y ? `${j}..${Y}` : null
      };
    }
    function A(N, S, T) {
      const j = S === "from" ? T : m(N, "from"), Y = S === "to" ? T : m(N, "to");
      u.value = {
        ...u.value,
        [N.key]: j || Y ? `${j}..${Y}` : null
      };
    }
    function F(N) {
      r("apply-filters", { ...u.value }), N();
    }
    function E(N, S) {
      u.value[N] = S, r("apply-filters", { ...u.value });
    }
    function te() {
      u.value = Object.fromEntries(n.filterSchema.map((N) => [N.key, null]));
    }
    function H(N) {
      return N.type === "boolean" ? [
        { value: !0, label: N.trueLabel ?? "Yes" },
        { value: !1, label: N.falseLabel ?? "No" }
      ] : N.type === "daterange" ? Object.entries(N.presets ?? {}).map(([S, T]) => ({
        value: S,
        label: T
      })) : (N.options ?? []).map(
        (S) => typeof S == "object" && S !== null && "value" in S ? { value: S.value, label: S.label } : { value: S, label: String(S) }
      );
    }
    const W = U(new Set(n.hidden));
    me(
      () => n.hidden,
      (N) => {
        W.value = new Set(N);
      },
      { deep: !0 }
    );
    function J(N) {
      const S = new Set(W.value);
      S.has(N) ? S.delete(N) : S.add(N), W.value = S, r("apply-columns", [...S]);
    }
    function Z() {
      W.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function G() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function q() {
      i.value = "", r("clear");
    }
    return (N, S) => (t(), a("div", bs, [
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
            "onUpdate:modelValue": S[0] || (S[0] = (T) => i.value = T),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, ks), [
            [Ae, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: S[1] || (S[1] = (T) => s.value = !0)
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
          S[11] || (S[11] = R(" Tools ", -1)),
          f.value ? (t(), a("span", $s, c(f.value), 1)) : $("", !0)
        ]),
        I(en, {
          open: s.value,
          "onUpdate:open": S[4] || (S[4] = (T) => s.value = T)
        }, {
          default: L(() => [
            I(tn, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
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
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), a(P, null, V(e.filterSchema, (T) => (t(), a("div", {
                        key: `mobile-${T.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ms, c(T.label), 1),
                        T.type !== "multiselect" && T.type !== "querybuilder" && T.type !== "daterange" && T.type !== "numberrange" && T.type !== "boolean" ? (t(), a("select", {
                          key: 0,
                          value: u.value[T.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (j) => p(T, j.target.value)
                        }, [
                          S[13] || (S[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), a(P, null, V(H(T), (j) => (t(), a("option", {
                            key: String(j.value),
                            value: j.value
                          }, c(j.label), 9, _s))), 128))
                        ], 40, Bs)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", As, [
                      S[14] || (S[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", zs, [
                        (t(!0), a(P, null, V(e.columns, (T) => (t(), a("button", {
                          key: `mobile-col-${T.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: T.locked,
                          onClick: (j) => J(T.key)
                        }, [
                          o("span", null, c(T.label), 1),
                          W.value.has(T.key) ? $("", !0) : (t(), a("span", Os, "On"))
                        ], 8, Ps))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), a("div", Ls, [
                      S[15] || (S[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", js, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: S[2] || (S[2] = (T) => {
                            w(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), a(P, null, V(e.groups, (T) => (t(), a("button", {
                          key: T.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (j) => {
                            w(T.key), s.value = !1;
                          }
                        }, c(T.label), 9, Vs))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", Ds, [
                    e.filterSchema.length ? (t(), a("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !b.value,
                      onClick: G
                    }, " Apply filters ", 8, Ts)) : $("", !0),
                    g.value ? (t(), a("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: S[3] || (S[3] = (T) => {
                        q(), s.value = !1;
                      })
                    }, " Clear search and filters ")) : $("", !0)
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
        o("div", Is, [
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
            "onUpdate:modelValue": S[5] || (S[5] = (T) => i.value = T),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: z(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, Fs), [
            [Ae, i.value]
          ]),
          i.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: S[6] || (S[6] = (T) => i.value = "")
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
          ])])) : $("", !0)
        ]),
        e.filterSchema.length ? (t(), D(qe, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: L(() => [
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
              f.value ? (t(), a("span", Rs, c(f.value), 1)) : $("", !0)
            ], 10, Ns)
          ]),
          panel: L(({ close: T }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              S[20] || (S[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            S[23] || (S[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Us, [
              (t(!0), a(P, null, V(e.filterSchema, (j) => (t(), a("div", {
                key: j.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Hs, c(j.label), 1),
                C(j) ? (t(), D(Qt, {
                  key: 0,
                  "model-value": B(j),
                  options: _(j),
                  placeholder: `Any ${j.label.toLowerCase()}`,
                  "onUpdate:modelValue": (Y) => u.value[j.key] = Y.length ? Y : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : j.type === "querybuilder" ? (t(), D(gs, {
                  key: 1,
                  "model-value": u.value[j.key] ?? null,
                  fields: j.fields ?? {},
                  operators: j.operators ?? {},
                  "max-depth": j.maxDepth ?? 5,
                  onApply: (Y) => E(j.key, Y)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : j.type === "daterange" ? (t(), a(P, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[j.key] == "string" && !String(u.value[j.key]).includes("..") ? u.value[j.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (Y) => p(j, Y.target.value)
                  }, [
                    S[21] || (S[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), a(P, null, V(H(j), (Y) => (t(), a("option", {
                      key: String(Y.value),
                      value: Y.value
                    }, c(Y.label), 9, qs))), 128))
                  ], 40, Ks),
                  o("div", Gs, [
                    o("input", {
                      type: "date",
                      value: m(j, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => v(
                        j,
                        "from",
                        Y.target.value
                      )
                    }, null, 40, Ws),
                    o("input", {
                      type: "date",
                      value: m(j, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (Y) => v(
                        j,
                        "to",
                        Y.target.value
                      )
                    }, null, 40, Zs)
                  ])
                ], 64)) : j.type === "numberrange" ? (t(), a("div", Js, [
                  o("input", {
                    type: "number",
                    value: m(j, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      j,
                      "from",
                      Y.target.value
                    )
                  }, null, 40, Ys),
                  o("input", {
                    type: "number",
                    value: m(j, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (Y) => A(
                      j,
                      "to",
                      Y.target.value
                    )
                  }, null, 40, Xs)
                ])) : j.type === "boolean" ? (t(), a("div", Qs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[j.key] === !0,
                    class: z([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[j.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (Y) => p(j, u.value[j.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: z(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[j.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, er),
                  o("span", tr, c(j.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: z([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[j.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (Y) => p(j, u.value[j.key] === !1 ? null : !1)
                  }, c(j.falseLabel ?? "No") + " only ", 11, nr)
                ])) : (t(), a("select", {
                  key: 5,
                  value: u.value[j.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (Y) => p(j, Y.target.value)
                }, [
                  S[22] || (S[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), a(P, null, V(H(j), (Y) => (t(), a("option", {
                    key: String(Y.value),
                    value: Y.value
                  }, c(Y.label), 9, lr))), 128))
                ], 40, ar))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !b.value,
              onClick: (j) => F(T)
            }, " Apply filters ", 8, or)
          ]),
          _: 1
        })) : $("", !0),
        I(qe, { "dismiss-on-panel-click": !1 }, {
          trigger: L(() => [...S[24] || (S[24] = [
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
          panel: L(() => [
            S[27] || (S[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", sr, [
              (t(!0), a(P, null, V(e.columns, (T) => (t(), a("button", {
                key: T.key,
                type: "button",
                class: z(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", T.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: T.locked,
                onClick: (j) => J(T.key)
              }, [
                W.value.has(T.key) ? (t(), a("span", dr)) : (t(), a("svg", ir, [...S[25] || (S[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + c(T.label), 1)
              ], 10, rr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: Z
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
                R(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), a("div", ur, [
          (t(!0), a(P, null, V(e.layouts, (T) => (t(), a("button", {
            key: T,
            type: "button",
            class: z(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === T ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === T,
            "aria-label": T === "cards" ? "Card layout" : "Table layout",
            title: T === "cards" ? "Cards" : "Table",
            onClick: (j) => r("layout", T)
          }, [
            T === "table" ? (t(), a("svg", fr, [...S[28] || (S[28] = [
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
        ])) : $("", !0),
        e.reorderable ? (t(), a("button", {
          key: 2,
          type: "button",
          class: z(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: S[7] || (S[7] = (T) => r("toggle-reorder"))
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
        ])], 10, pr)) : $("", !0),
        e.groups.length ? (t(), D(qe, {
          key: 3,
          align: "end"
        }, {
          trigger: L(() => [
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
          panel: L(({ close: T }) => [
            o("div", gr, [
              o("button", {
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (j) => {
                  w(null), T();
                }
              }, " No grouping ", 10, hr),
              (t(!0), a(P, null, V(e.groups, (j) => (t(), a("button", {
                key: j.key,
                type: "button",
                class: z(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === j.key ? "text-primary font-medium" : ""]),
                onClick: (Y) => {
                  w(j.key), T();
                }
              }, c(j.label), 11, br))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        g.value ? (t(), a("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: q
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), a("span", yr, "Loading…")) : $("", !0)
      ]),
      h.value.length ? (t(), a("div", xr, [
        (t(!0), a(P, null, V(h.value, (T) => (t(), a("span", {
          key: T.key + T.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${T.key}`
        }, [
          R(c(T.label) + " ", 1),
          T.removable !== !1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${T.label}`,
            onClick: (j) => y(T.key)
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
          ])], 8, $r)) : $("", !0)
        ], 8, kr))), 128)),
        h.value.length > 1 ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: S[8] || (S[8] = (T) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
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
}, _r = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, Ar = { class: "w-full border-collapse text-sm" }, zr = { class: "bg-muted/40" }, Pr = { class: "divide-y" }, Or = ["href"], Lr = {
  key: 1,
  class: "text-muted-foreground"
}, jr = {
  key: 0,
  class: "flex justify-center"
}, Vr = ["disabled"], Dr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Tr = ["href"], k3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = qt(), i = x(() => n.columns.filter((w) => w.type !== "image")), d = x(() => !!s.actions), u = x(() => !!n.title || d.value), f = x(() => n.filterSchema.length > 0), b = x(
      () => n.columns.map((w) => ({ key: w.key, label: w.label, locked: !0 }))
    );
    function g(w, y) {
      return y == null || y === "" ? "None" : w.type === "date" || w.type === "datetime" ? new Date(String(y)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...w.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof y == "number" ? new Intl.NumberFormat().format(y) : String(y);
    }
    function h(w) {
      return w == null || w === "";
    }
    return (w, y) => (t(), D(qo, null, st({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), a("div", Br, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), D(It, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, st({ _: 2 }, [
          w.$slots.illustration ? {
            name: "illustration",
            fn: L(() => [
              K(w.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          w.$slots["empty-actions"] ? {
            name: "actions",
            fn: L(() => [
              K(w.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), a("div", _r, [
          o("table", Ar, [
            o("thead", zr, [
              o("tr", null, [
                (t(!0), a(P, null, V(i.value, (C) => (t(), a("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", Pr, [
              (t(!0), a(P, null, V(e.rows, (C, M) => (t(), a("tr", {
                key: C.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), a(P, null, V(i.value, (B) => (t(), a("td", {
                  key: B.key,
                  class: z(["px-3 whitespace-nowrap", [
                    B.mono ? "font-mono text-xs" : "",
                    B.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  K(w.$slots, `cell:${B.key}`, {
                    row: C,
                    value: C[B.key],
                    column: B
                  }, () => [
                    e.recordBase && C.id != null && B === i.value[0] ? (t(), a("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(g(B, C[B.key])), 9, Or)) : h(C[B.key]) ? (t(), a("span", Lr, " None ")) : (t(), a(P, { key: 2 }, [
                      R(c(g(B, C[B.key])), 1)
                    ], 64))
                  ])
                ], 2))), 128))
              ]))), 128))
            ])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      u.value ? {
        name: "title",
        fn: L(() => [
          o("div", Cr, [
            e.title ? (t(), a("h3", Sr, c(e.title), 1)) : $("", !0)
          ]),
          d.value ? (t(), a("div", Mr, [
            K(w.$slots, "actions")
          ])) : $("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: L(() => [
          I(wr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: b.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": y[0] || (y[0] = (C) => r("update:search", C)),
            onApplyFilters: y[1] || (y[1] = (C) => r("apply-filters", C)),
            onClearFilters: y[2] || (y[2] = (C) => r("clear-filters")),
            onClearFilter: y[3] || (y[3] = (C) => r("clear-filter", C)),
            onClear: y[4] || (y[4] = (C) => r("clear-filters")),
            onApplyColumns: y[5] || (y[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: L(() => [
          e.nextCursor ? (t(), a("div", jr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: y[6] || (y[6] = (C) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Vr)
          ])) : e.capped ? (t(), a("p", Dr, [
            R(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), a("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Tr)) : (t(), a(P, { key: 1 }, [
              R("Open the full list to search or filter the rest.")
            ], 64))
          ])) : $("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Er = { class: "flex items-center gap-2 overflow-x-auto" }, Ir = {
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
}, Kr = /* @__PURE__ */ O({
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
    return (f, b) => (t(), a("ol", Er, [
      (t(!0), a(P, null, V(e.steps, (g, h) => (t(), a("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(_e(e.interactive ? "button" : "div"), re({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(h)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: h > e.activeStep } : {}, {
          onClick: (w) => e.interactive && h <= e.activeStep && r("update:activeStep", h)
        }), {
          default: L(() => [
            o("span", {
              class: z(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), a("svg", Ir, [...b[0] || (b[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), a("svg", Fr, [...b[1] || (b[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), a(P, { key: 2 }, [
                R(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Nr, [
              o("span", null, c(g.label), 1),
              g.description ? (t(), a("span", Rr, c(g.description), 1)) : $("", !0)
            ]),
            e.hasError(h) ? (t(), a("span", Ur)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), a("span", Hr)) : $("", !0)
      ]))), 128))
    ]));
  }
}), ct = /* @__PURE__ */ new Map();
function xe(e, l) {
  ct.set(e, l);
}
function qr(e) {
  return ct.get(e);
}
function $3(e) {
  return ct.has(e);
}
function w3() {
  return [...ct.keys()].sort();
}
function C3() {
  ct.clear();
}
class Gr extends Error {
  fieldErrors;
  constructor(l, n = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = n;
  }
}
function S3(e) {
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
const M3 = "text-sm text-muted-foreground font-normal", B3 = "text-xs text-muted-foreground font-normal", gt = "text-xs text-muted-foreground font-normal leading-snug", Jr = "text-foreground font-normal", Yr = "placeholder:text-muted-foreground placeholder:font-normal", Ue = `${Jr} ${Yr}`, Xr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Qr = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U({});
    me(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), D(it, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: u[1] || (u[1] = (f) => r("close"))
    }, {
      footer: L(() => [
        I(de, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (f) => r("close"))
        }, {
          default: L(() => [...u[2] || (u[2] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(de, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: L(() => [
            R(c(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), a("p", Xr, c(e.generalError), 1)) : $("", !0),
          (t(!0), a(P, null, V(e.fields, (f) => (t(), D(Xe, {
            key: f.key,
            field: f,
            value: s.value[f.key],
            error: e.errors[f.key],
            processing: e.processing,
            onChange: (b) => s.value[f.key] = b
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), ei = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(ga), re({ "data-slot": "checkbox" }, k(i), {
      class: k(ne)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L((f) => [
        I(k(ha), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            K(d.$slots, "default", Oe(Ne(f)), () => [
              I(k(On), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ze = /* @__PURE__ */ O({
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
    const n = e, r = l, s = be(fe(n, "class"), r);
    return (i, d) => (t(), D(k(ba), re({ "data-slot": "switch" }, k(s), {
      class: k(ne)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: L(() => [
        I(k(ya), {
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
}, Tn = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(!1), d = U(null), u = U(null), f = U(null), b = x(() => n.accept.map((m) => `.${m}`).join(",")), g = x(() => f.value ?? n.modelValue?.url ?? null), h = x(() => `${n.accept.length ? n.accept.join(", ").toUpperCase() : "Any file"} · up to ${w(n.maxKilobytes * 1024)}`);
    function w(m) {
      if (!m)
        return "";
      const v = ["B", "KB", "MB", "GB"];
      let A = m, F = 0;
      for (; A >= 1024 && F < v.length - 1; )
        A /= 1024, F++;
      return `${A.toFixed(A < 10 && F > 0 ? 1 : 0)} ${v[F]}`;
    }
    function y(m) {
      return m.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(m) {
      return n.accept.length && !n.accept.includes(y(m.name)) ? `${y(m.name).toUpperCase() || "That"} files are not accepted here.` : m.size > n.maxKilobytes * 1024 ? `That file is ${w(m.size)}; the limit is ${w(n.maxKilobytes * 1024)}.` : null;
    }
    async function M(m) {
      const v = m?.[0];
      if (!(!v || n.disabled) && (u.value = C(v), !u.value)) {
        B(), n.image && v.type.startsWith("image/") && (f.value = URL.createObjectURL(v)), d.value = 0;
        try {
          const A = await n.upload(v, (F) => {
            d.value = F;
          });
          r("update:modelValue", A);
        } catch (A) {
          u.value = A instanceof Error ? A.message : "The upload failed.", B();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function B() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function _() {
      const m = n.modelValue;
      B(), u.value = null, r("update:modelValue", null), m && !m.url && n.discard && await n.discard(m.value).catch(() => {
      });
    }
    function p(m) {
      i.value = !1, M(m.dataTransfer?.files ?? null);
    }
    return (m, v) => (t(), a("div", null, [
      e.modelValue ? (t(), a("div", ri, [
        e.image && g.value ? (t(), a("img", {
          key: 0,
          src: g.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ii)) : (t(), a("span", di, c(y(e.modelValue.name) || "file"), 1)),
        o("span", ui, [
          o("span", ci, c(e.modelValue.name), 1),
          o("span", fi, [
            R(c(w(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), a(P, { key: 0 }, [
              v[4] || (v[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, mi)
            ], 64)) : (t(), a(P, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? $("", !0) : (t(), a("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: _
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
            o("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), a("label", {
        key: 0,
        class: z(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: v[1] || (v[1] = he((A) => i.value = !0, ["prevent"])),
        onDragleave: v[2] || (v[2] = he((A) => i.value = !1, ["prevent"])),
        onDrop: he(p, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: b.value,
          disabled: e.disabled,
          onChange: v[0] || (v[0] = (A) => M(A.target.files))
        }, null, 40, ti),
        v[3] || (v[3] = o("svg", {
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
        ])) : $("", !0)
      ], 34)),
      u.value ? (t(), a("p", pi, c(u.value), 1)) : $("", !0)
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
}, _i = /* @__PURE__ */ O({
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
    const d = U(u(n.modelValue));
    function u(M) {
      return M ? Object.entries(M).map(([B, _]) => ({
        uid: i++,
        key: B,
        value: _ ?? ""
      })) : [];
    }
    me(
      () => n.modelValue,
      (M) => {
        JSON.stringify(M ?? null) !== JSON.stringify(f()) && (d.value = u(M));
      }
    );
    function f() {
      const M = {};
      for (const B of d.value) {
        const _ = B.key.trim();
        _ !== "" && (M[_] = B.value);
      }
      return Object.keys(M).length ? M : null;
    }
    function b() {
      r("update:modelValue", f());
    }
    const g = x(() => {
      const M = /* @__PURE__ */ new Map();
      for (const B of d.value) {
        const _ = B.key.trim();
        _ !== "" && M.set(_, (M.get(_) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, B]) => B > 1).map(([B]) => B));
    }), h = x(
      () => new Set(
        d.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), w = x(() => n.maxPairs !== null && d.value.length >= n.maxPairs);
    function y() {
      w.value || n.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(M) {
      d.value = d.value.filter((B) => B.uid !== M), b();
    }
    return (M, B) => (t(), a("div", vi, [
      d.value.length ? (t(), a("div", gi, [
        o("div", hi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          B[0] || (B[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), a(P, null, V(d.value, (_) => (t(), a("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", bi, [
            pe(o("input", {
              "onUpdate:modelValue": (p) => _.key = p,
              type: "text",
              class: z([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                g.value.has(_.key.trim()) || h.value.has(_.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: b
            }, null, 42, yi), [
              [Ae, _.key]
            ]),
            h.value.has(_.key.trim()) ? (t(), a("p", xi, " Letters, numbers, underscores and dashes only. ")) : g.value.has(_.key.trim()) ? (t(), a("p", ki, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (p) => _.value = p,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: b
          }, null, 40, $i), [
            [Ae, _.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${_.key || "this entry"}`,
            onClick: (p) => C(_.uid)
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
          ])], 8, wi)
        ]))), 128))
      ])) : (t(), a("p", Ci, " Nothing here yet. ")),
      o("div", Si, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || w.value,
          onClick: y
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
          R(" Add " + c(e.keyLabel.toLowerCase()), 1)
        ], 8, Mi),
        e.maxPairs !== null ? (t(), a("p", Bi, c(d.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), Ai = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, zi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Pi = ["disabled", "title", "aria-label", "onClick"], Oi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Li = ["d"], ji = ["disabled"], Vi = ["contenteditable", "data-placeholder"], Di = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Ti = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null);
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
    ], u = x(() => d.filter((C) => n.toolbar.includes(C.id))), f = x(() => n.toolbar.includes("link")), b = U(0);
    function g() {
      const C = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      b.value = M.length;
      const B = M === "" ? null : C;
      i = B, r("update:modelValue", B);
    }
    function h(C) {
      n.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), g());
    }
    function w() {
      if (n.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), g());
    }
    function y(C) {
      C.preventDefault();
      const M = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), g();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = n.modelValue ?? "", b.value = s.value.innerText.trim().length);
    }), me(
      () => n.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", b.value = s.value.innerText.trim().length);
      }
    ), (C, M) => (t(), a("div", Ai, [
      o("div", zi, [
        (t(!0), a(P, null, V(u.value, (B) => (t(), a("button", {
          key: B.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: B.label,
          "aria-label": B.label,
          onMousedown: M[0] || (M[0] = he(() => {
          }, ["prevent"])),
          onClick: (_) => h(B)
        }, [
          (t(), a("svg", Oi, [
            o("path", {
              d: B.path
            }, null, 8, Li)
          ]))
        ], 40, Pi))), 128)),
        f.value ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: M[1] || (M[1] = he(() => {
          }, ["prevent"])),
          onClick: w
        }, [...M[2] || (M[2] = [
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
        ])], 40, ji)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: z(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: g,
        onBlur: g,
        onPaste: y
      }, null, 42, Vi),
      e.maxLength !== null ? (t(), a("div", Di, c(b.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Ei = /* @__PURE__ */ Bt(Ti, [["__scopeId", "data-v-32c63bc7"]]), Ii = ["role"], Fi = ["title"], Ni = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Ri = {
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
}, En = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => !!n.field.multiple), i = x(() => !!n.field.grouped), d = x(() => !!n.field.hiddenLabels), u = x(() => n.field.inline !== !1), f = x(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function b(m) {
      return s.value ? f.value.some((v) => v == m.value) : n.modelValue != null && m.value == n.modelValue;
    }
    function g(m) {
      if (!n.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            b(m) ? f.value.filter((v) => v != m.value) : [...f.value, m.value]
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
      const v = n.field.icons?.[String(m.value)];
      return v ? ce(v) : null;
    }
    function y(m) {
      return n.field.tooltips?.[String(m.value)] ?? m.label;
    }
    const C = {
      primary: "border-primary bg-primary text-primary-foreground",
      success: "border-success bg-success text-white",
      warning: "border-warning bg-warning text-white",
      danger: "border-destructive bg-destructive text-white",
      info: "border-info bg-info text-white",
      neutral: "border-foreground bg-foreground text-background"
    }, M = {
      primary: "border-input hover:border-primary/60 hover:bg-primary/5",
      success: "border-input hover:border-success/60 hover:bg-success/5",
      warning: "border-input hover:border-warning/60 hover:bg-warning/5",
      danger: "border-input hover:border-destructive/60 hover:bg-destructive/5",
      info: "border-input hover:border-info/60 hover:bg-info/5",
      neutral: "border-input hover:border-foreground/40 hover:bg-muted"
    };
    function B(m) {
      const v = h(m), A = b(m);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? C[v] ?? C.primary : M[v] ?? M.primary,
        n.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const _ = x(() => {
      if (!(u.value || i.value) && n.field.columns && n.field.columns > 1)
        return { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` };
    }), p = x(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (m, v) => (t(), a("div", {
      role: s.value ? "group" : "radiogroup",
      class: z(p.value),
      style: se(_.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), a(P, null, V(e.options, (A) => (t(), a("label", {
        key: String(A.value),
        class: z(B(A)),
        title: y(A)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: A.value,
          checked: b(A),
          disabled: e.disabled,
          "aria-label": d.value ? A.label : void 0,
          onChange: (F) => g(A)
        }, null, 40, Ni),
        w(A) ? (t(), a("svg", Ri, [
          o("path", {
            d: w(A)
          }, null, 8, Ui)
        ])) : $("", !0),
        d.value ? $("", !0) : (t(), a("span", Hi, c(A.label), 1))
      ], 10, Fi))), 128)),
      e.options.length === 0 ? (t(), a("p", Ki, " Nothing to choose from yet. ")) : $("", !0)
    ], 14, Ii));
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
}, Xi = ["id", "value", "disabled"], Qi = ["value"], ed = {
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
}, Bd = ["aria-label", "disabled"], _d = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, Ad = ["disabled", "aria-pressed", "onClick"], zd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Pd = ["title", "disabled", "onClick"], Od = ["href"], Ld = {
  key: 19,
  class: "text-destructive text-xs leading-snug",
  role: "alert"
}, Xe = /* @__PURE__ */ O({
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
    const n = cn(() => import("./PkRepeater-J84jGe3T.js")), r = cn(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = U(!1), u = U(""), f = U([]), b = U(!1), g = U(null);
    let h;
    me(u, (oe) => {
      s.searchOptions && (clearTimeout(h), b.value = !0, h = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(oe);
        } catch {
        } finally {
          b.value = !1;
        }
      }, 200));
    });
    async function w() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, f.value.length === 0 && s.searchOptions)) {
        b.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          b.value = !1;
        }
      }
    }
    function y(oe) {
      g.value = oe.label, i("change", oe.value), d.value = !1, u.value = "";
    }
    function C() {
      g.value = null, i("change", null);
    }
    const M = yt("panelPicker", null), B = yt("panelCreateOption", null), _ = U(!1), p = U(!1), m = U({}), v = U(null), A = x(() => Wr(s.field)), F = x(() => Zr(s.field));
    function E() {
      m.value = {}, v.value = null, _.value = !0, d.value = !1;
    }
    function te() {
      p.value || (_.value = !1, m.value = {}, v.value = null);
    }
    async function H(oe) {
      if (B) {
        p.value = !0, m.value = {}, v.value = null;
        try {
          const Q = await B.run(s.field.key, { ...oe });
          y(Q), _.value = !1;
        } catch (Q) {
          Q instanceof Gr ? (m.value = Q.fieldErrors, v.value = Object.keys(Q.fieldErrors).length === 0 ? Q.message : null) : v.value = Q instanceof Error ? Q.message : "Could not create that option.";
        } finally {
          p.value = !1;
        }
      }
    }
    const W = x(() => {
      if (!s.field.tableSelect || !M?.base)
        return;
      const oe = M.returnUrl || "/";
      return `${M.base}/pick/${s.field.key}?return=${encodeURIComponent(oe)}`;
    }), J = x(() => s.field.morphTo ?? []), Z = x(() => {
      const oe = s.value;
      return oe && typeof oe == "object" && !Array.isArray(oe) ? oe : { type: void 0, id: void 0 };
    });
    function G(oe) {
      i("change", { type: oe || null, id: null });
    }
    function q(oe) {
      i("change", { type: Z.value.type ?? null, id: oe });
    }
    function N(oe) {
      g.value = oe.label, q(oe.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const S = x(() => qr(s.field.type)), T = x(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function j(oe) {
      if (oe) {
        if (oe.copy) {
          const Q = s.value == null ? "" : String(s.value);
          Q !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(Q);
          return;
        }
        if (oe.url && typeof window < "u") {
          window.open(oe.url, "_blank", "noopener,noreferrer");
          return;
        }
        oe.key && i("affix-action", oe.key);
      }
    }
    const Y = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Ue} ${Se}`, ge = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Ue}`;
    function ye(oe) {
      const Q = document.getElementById(`f-${s.field.key}`);
      if (!(Q instanceof HTMLTextAreaElement) && !(Q instanceof HTMLInputElement))
        return;
      const ae = Q.selectionStart ?? Q.value.length, Ce = Q.selectionEnd ?? ae;
      Q.setRangeText(oe, ae, Ce, "end"), Q.dispatchEvent(new Event("input", { bubbles: !0 })), Q.focus();
    }
    return (oe, Q) => (t(), a(P, null, [
      e.field.type === "hidden" ? (t(), a(P, { key: 0 }, [], 64)) : (t(), a("div", qi, [
        o("div", Gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: z(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), a("span", Zi, "*")) : $("", !0)
          ], 10, Wi),
          e.field.hint ? (t(), a("span", {
            key: 0,
            class: z(["flex items-center gap-1", k(gt)])
          }, [
            R(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: Q[0] || (Q[0] = (ae) => j(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Ji)) : $("", !0)
          ], 2)) : $("", !0)
        ]),
        S.value ? (t(), D(_e(S.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[1] || (Q[1] = (ae) => i("change", ae))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Tn, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": Q[2] || (Q[2] = (ae) => i("change", ae))
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
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": Q[3] || (Q[3] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "addable", "deletable", "cloneable", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": Q[4] || (Q[4] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Ei, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[5] || (Q[5] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(_i, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[6] || (Q[6] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Qt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": Q[7] || (Q[7] = (ae) => i("change", ae))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : J.value.length ? (t(), a("div", Yi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(En, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": Z.value.type ?? null,
            options: J.value.map((ae) => ({ value: ae.value, label: ae.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[8] || (Q[8] = (ae) => G(ae == null ? "" : String(ae)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), a("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: Z.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
            onChange: Q[9] || (Q[9] = (ae) => G(ae.target.value))
          }, [
            Q[25] || (Q[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), a(P, null, V(J.value, (ae) => (t(), a("option", {
              key: ae.value,
              value: ae.value
            }, c(ae.label), 9, Qi))), 128))
          ], 42, Xi)),
          Z.value.type && e.searchOptions ? (t(), a("div", ed, [
            o("button", {
              type: "button",
              class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: w
            }, [
              o("span", {
                class: z(g.value || Z.value.id ? "" : "text-muted-foreground")
              }, c(g.value ?? (Z.value.id ? String(Z.value.id) : "Search…")), 3)
            ], 10, td),
            d.value ? (t(), a("div", nd, [
              pe(o("input", {
                "onUpdate:modelValue": Q[10] || (Q[10] = (ae) => u.value = ae),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", ad, [
                (t(!0), a(P, null, V(f.value, (ae) => (t(), a("button", {
                  key: String(ae.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => N(ae)
                }, c(ae.label), 9, ld))), 128))
              ])
            ])) : $("", !0),
            d.value ? (t(), a("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Q[11] || (Q[11] = (ae) => d.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), a("div", od, [
          o("button", {
            type: "button",
            class: z(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: w
          }, [
            o("span", {
              class: z(g.value || e.value ? "" : "text-muted-foreground")
            }, c(g.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), a("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 10, sd),
          d.value ? (t(), a("div", rd, [
            pe(o("input", {
              "onUpdate:modelValue": Q[12] || (Q[12] = (ae) => u.value = ae),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", id, [
              b.value ? (t(), a("p", dd, " Searching… ")) : f.value.length === 0 ? (t(), a("p", ud, " No matches ")) : $("", !0),
              (t(!0), a(P, null, V(f.value, (ae) => (t(), a("button", {
                key: String(ae.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => y(ae)
              }, c(ae.label), 9, cd))), 128)),
              e.field.createOption && k(B) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                Q[26] || (Q[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                R(" " + c(F.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          d.value ? (t(), a("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: Q[13] || (Q[13] = (ae) => d.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), a("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
          onChange: Q[14] || (Q[14] = (ae) => i("change", ae.target.value || null))
        }, [
          Q[27] || (Q[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), a(P, null, V(e.options, (ae) => (t(), a("option", {
            key: String(ae.value),
            value: ae.value
          }, c(ae.label), 9, md))), 128))
        ], 42, fd)) : e.field.type === "toggle" ? (t(), a("label", pd, [
          I(k(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[15] || (Q[15] = (ae) => i("change", ae))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(k(gt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), a("label", vd, [
          I(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[16] || (Q[16] = (ae) => i("change", ae === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: z(k(gt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !T.value ? (t(), a("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: z(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", k(Ue), k(Se)]),
          onInput: Q[17] || (Q[17] = (ae) => i("change", ae.target.value))
        }, null, 42, gd)) : e.field.type === "textarea" ? (t(), a("div", {
          key: 13,
          class: z([
            "border-input flex overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", hd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[18] || (Q[18] = (ae) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, bd)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: z(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", k(Ue)]),
            onInput: Q[19] || (Q[19] = (ae) => i("change", ae.target.value))
          }, null, 42, yd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", xd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[20] || (Q[20] = (ae) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, kd)) : $("", !0)
        ], 2)) : T.value ? (t(), a("div", {
          key: 15,
          class: z([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(pn),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), a("span", wd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[22] || (Q[22] = (ae) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, Cd)) : $("", !0),
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
            class: z(ge),
            onInput: Q[23] || (Q[23] = (ae) => i("change", ae.target.value))
          }, null, 40, Sd),
          e.field.suffix || e.field.suffixIcon ? (t(), a("span", Md, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), a("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[24] || (Q[24] = (ae) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Bd)) : $("", !0)
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
          class: z(Y),
          onInput: Q[21] || (Q[21] = (ae) => i("change", ae.target.value))
        }, null, 40, $d)),
        e.field.type === "number" && e.field.presets?.length ? (t(), a("div", _d, [
          (t(!0), a(P, null, V(e.field.presets, (ae) => (t(), a("button", {
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
          }, c(ae), 11, Ad))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), a("div", zd, [
          (t(!0), a(P, null, V(e.field.chips, (ae, Ce) => (t(), a("button", {
            key: Ce,
            type: "button",
            title: ae,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (dn) => ye(String(Ce))
          }, c(Ce), 9, Pd))), 128))
        ])) : $("", !0),
        W.value ? (t(), a("a", {
          key: 18,
          href: W.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Od)) : $("", !0),
        e.error ? (t(), a("p", Ld, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), a("p", {
          key: 20,
          class: z(k(gt))
        }, c(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && k(B) ? (t(), D(Qr, {
        key: 2,
        open: _.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: p.value,
        errors: m.value,
        "general-error": v.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
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
}, Td = ["d"], Ed = { class: "min-w-0" }, Id = { class: "text-sm font-semibold" }, Fd = {
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
}, Xd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Qd = ["disabled"], In = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(!n.node.collapsed), i = U(0), d = U(0), u = x(
      () => (n.node.children ?? []).map((_) => ({
        label: _.label ?? "",
        description: _.description
      }))
    ), f = x(() => n.depth === 0), b = x(() => {
      const _ = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, p = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        _[n.node.align ?? "start"] ?? "items-start",
        p[n.node.gap ?? "md"] ?? "gap-4",
        n.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), g = x(() => {
      const _ = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return _[n.node.tone ?? "info"] ?? _.info;
    }), h = x(() => {
      const _ = n.node.columns ?? 1;
      return _ >= 3 ? "sm:grid-cols-3" : _ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function w(_) {
      const p = _.children?.length ?? 1;
      return p >= 3 ? "md:grid-cols-3" : p === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function y(_ = 1) {
      return _ >= 4 ? "md:col-span-4" : _ === 3 ? "md:col-span-3" : _ === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function C(_) {
      const p = [], m = (v) => {
        v.component === "field" && v.key && p.push(v.key), v.children?.forEach(m);
      };
      return m(_), p.some((v) => n.errors[v]);
    }
    function M(_) {
      if (_.hidden)
        return !1;
      const p = _.visibleWhen;
      return p ? n.values[p.field] == p.value : !0;
    }
    function B(_) {
      if (n.upload)
        return (p, m) => n.upload(_, p, m);
    }
    return (_, p) => {
      const m = Gt("SchemaNode", !0);
      return e.node.component === "field" && M(e.node) ? (t(), D(Xe, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (v) => e.searchOptions(e.node.key, v) : void 0,
        upload: B(e.node.key),
        discard: e.discard,
        onChange: p[0] || (p[0] = (v) => r("change", e.node.key, v)),
        onAffixAction: p[1] || (p[1] = (v) => r("affix-action", e.node.key, v))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), a("section", {
        key: 1,
        class: z(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: z(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: p[2] || (p[2] = (v) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", jd, [
            e.node.icon ? (t(), a("div", Vd, [
              (t(), a("svg", Dd, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, Td)
              ]))
            ])) : $("", !0),
            o("div", Ed, [
              o("h3", Id, c(e.node.label), 1),
              e.node.description ? (t(), a("p", Fd, c(e.node.description), 1)) : $("", !0)
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
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), a("div", {
          key: 0,
          class: z(["grid grid-cols-1 gap-4", [h.value, f.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
            key: A,
            node: v,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: z(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
            onChange: p[3] || (p[3] = (F, E) => r("change", F, E)),
            onAffixAction: p[4] || (p[4] = (F, E) => r("affix-action", F, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), a("section", Nd, [
        o("header", Rd, [
          o("h3", Ud, c(e.node.title), 1),
          e.node.description ? (t(), a("p", Hd, c(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: z(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
            key: A,
            node: v,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: p[5] || (p[5] = (F, E) => r("change", F, E)),
            onAffixAction: p[6] || (p[6] = (F, E) => r("affix-action", F, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), a("div", {
        key: 3,
        class: z(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
          key: A,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: z(v.component === "column" ? y(v.span) : ""),
          onChange: p[7] || (p[7] = (F, E) => r("change", F, E)),
          onAffixAction: p[8] || (p[8] = (F, E) => r("affix-action", F, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), a("div", Kd, [
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
          key: A,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: p[9] || (p[9] = (F, E) => r("change", F, E)),
          onAffixAction: p[10] || (p[10] = (F, E) => r("affix-action", F, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && M(e.node) ? (t(), a("div", {
        key: 5,
        class: z(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
          key: A,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: p[11] || (p[11] = (F, E) => r("change", F, E)),
          onAffixAction: p[12] || (p[12] = (F, E) => r("affix-action", F, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && M(e.node) ? (t(), a("div", {
        key: 6,
        class: z(["flex", b.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
          key: A,
          node: v,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: p[13] || (p[13] = (F, E) => r("change", F, E)),
          onAffixAction: p[14] || (p[14] = (F, E) => r("affix-action", F, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && M(e.node) ? (t(), a("fieldset", qd, [
        o("legend", Gd, c(e.node.label), 1),
        e.node.description ? (t(), a("p", Wd, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: z(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), D(m, {
            key: A,
            node: v,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: p[15] || (p[15] = (F, E) => r("change", F, E)),
            onAffixAction: p[16] || (p[16] = (F, E) => r("affix-action", F, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && M(e.node) ? (t(), a("div", {
        key: 8,
        role: "note",
        class: z(["rounded-lg border px-4 py-3 text-sm", g.value])
      }, [
        e.node.title ? (t(), a("p", Zd, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && M(e.node) ? (t(), a("div", {
        key: 9,
        class: z(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => (t(), a("button", {
            key: A,
            type: "button",
            class: z([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (F) => i.value = A
          }, [
            R(c(v.label) + " ", 1),
            C(v) ? (t(), a("span", Yd)) : $("", !0)
          ], 10, Jd))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => pe((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(v.children ?? [], (F, E) => (t(), D(m, {
            key: E,
            node: F,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: p[17] || (p[17] = (te, H) => r("change", te, H)),
            onAffixAction: p[18] || (p[18] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && M(e.node) ? (t(), a("div", {
        key: 10,
        class: z(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        I(Kr, {
          class: z(["p-4", f.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (v) => C((e.node.children ?? [])[v]),
          "onUpdate:activeStep": p[19] || (p[19] = (v) => d.value = v)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), a(P, null, V(e.node.children ?? [], (v, A) => pe((t(), a("div", {
          key: A,
          class: z(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(v.children ?? [], (F, E) => (t(), D(m, {
            key: E,
            node: F,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: p[20] || (p[20] = (te, H) => r("change", te, H)),
            onAffixAction: p[21] || (p[21] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, d.value === A]
        ])), 128)),
        o("div", Xd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: p[22] || (p[22] = (v) => d.value--)
          }, " Back ", 8, Qd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: p[23] || (p[23] = (v) => d.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), _3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U({});
    me(
      () => n.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), D(it, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: u[2] || (u[2] = (f) => r("close"))
    }, {
      footer: L(() => [
        I(de, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (f) => r("close"))
        }, {
          default: L(() => [...u[3] || (u[3] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(de, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: L(() => [
            R(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), a(P, null, V(e.form?.nodes ?? [], (f, b) => (t(), D(In, {
            key: b,
            node: f,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (g, h) => s.value[g] = h)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), eu = ["title"], tu = ["aria-label"], nu = ["d"], au = { class: "sr-only" }, lu = /* @__PURE__ */ O({
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
    }, s = x(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = x(() => l.icons[s.value] ?? l.defaultIcon), d = x(() => n[i.value] ?? n.dot), u = x(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = x(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (b, g) => (t(), a("span", {
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
}), ou = ["aria-label"], su = ["fill"], A3 = /* @__PURE__ */ O({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const l = e, n = x(() => Math.max(1, Math.min(10, Number(l.max ?? 5)))), r = x(() => {
      const s = Number(l.value);
      return Number.isFinite(s) ? Math.max(0, Math.min(n.value, s)) : 0;
    });
    return (s, i) => (t(), a("span", {
      class: "inline-flex items-center gap-0.5 text-amber-500",
      "aria-label": `${r.value} of ${n.value}`,
      "data-test": "rating-cell"
    }, [
      (t(!0), a(P, null, V(n.value, (d) => (t(), a("svg", {
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
}, du = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, n = U(!1);
    me(
      () => l.src,
      () => n.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = x(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = x(() => {
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
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), a("svg", iu, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
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
}, pu = /* @__PURE__ */ O({
  __name: "ColourCell",
  props: {
    value: { default: null },
    showValue: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = x(() => {
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
}), vu = { class: "inline-flex items-center" }, gu = ["checked", "aria-label"], hu = { class: "sr-only" }, z3 = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, n = x(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = x(
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
}, P3 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = x(
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
}, O3 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, n = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => n.value === null && e.value != null ? (t(), a("span", xu, c(e.value), 1)) : !n.value || n.value.length === 0 ? (t(), a("span", ku, "—")) : (t(), a("span", $u, c(n.value.length) + " " + c(n.value.length === 1 ? "entry" : "entries"), 1));
  }
}), wu = ["data-variant"], Cu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ge = /* @__PURE__ */ O({
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
    }, r = x(
      () => [Cu, n[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), a("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: z(r.value)
    }, [
      K(s.$slots, "default")
    ], 10, wu));
  }
}), Su = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Mu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, L3 = /* @__PURE__ */ O({
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
            const b = JSON.parse(f);
            if (Array.isArray(b))
              return n(b, u);
          } catch {
          }
        return f.split(u).map((b) => b.trim()).filter((b) => b !== "");
      }
      return [String(d)];
    }
    const r = x(() => n(l.value, l.separator)), s = x(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = x(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), a("span", Su, "None")) : (t(), a("span", Mu, [
      (t(!0), a(P, null, V(s.value, (f) => (t(), D(Ge, {
        key: f,
        variant: "secondary"
      }, {
        default: L(() => [
          R(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), D(Ge, {
        key: 0,
        variant: "outline"
      }, {
        default: L(() => [
          R("+" + c(i.value), 1)
        ]),
        _: 1
      })) : $("", !0)
    ]));
  }
}), Bu = ["aria-checked", "aria-label", "title", "disabled"], _u = ["value", "placeholder", "disabled"], Au = ["value", "disabled"], zu = ["value"], j3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.value === !0 || n.value === 1 || n.value === "1"), i = x(() => n.busy || n.disabled), d = x(
      () => s.value ? n.onLabel ?? "Enabled" : n.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function f(w) {
      const y = w.target.value;
      y !== String(n.value ?? "") && r("change", y);
    }
    function b(w) {
      const C = w.target.value;
      C !== String(n.value ?? "") && r("change", C);
    }
    function g(w) {
      w.target.blur();
    }
    function h(w) {
      const y = w.target;
      y.value = String(n.value ?? ""), y.blur();
    }
    return (w, y) => e.type === "toggle" ? (t(), a("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: z(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(u, ["stop"])
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
      onClick: y[0] || (y[0] = he(() => {
      }, ["stop"])),
      onBlur: b,
      onKeydown: [
        Tt(g, ["enter"]),
        Tt(h, ["esc"])
      ]
    }, null, 40, _u)) : (t(), a("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: y[1] || (y[1] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), a(P, null, V(e.options, (C, M) => (t(), a("option", {
        key: M,
        value: M
      }, c(C), 9, zu))), 128))
    ], 40, Au));
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
function Ou(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function V3(e) {
  const l = x(
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
  ), n = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = n.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return nn[f] ?? "outline";
  }
  return { columns: l, byKey: n, badgeVariant: r };
}
const Lu = ["disabled", "aria-label", "aria-busy"], ju = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vu = ["d"], Du = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Tu = ["disabled", "onClick"], Eu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Iu = ["d"], Fu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, D3 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.busy || n.disabled), i = x(() => String(n.value ?? "")), d = x(() => `Select ${(n.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function f(h) {
      const w = n.colors[u(h)] ?? n.defaultColor ?? "neutral";
      return nn[w] ?? "outline";
    }
    function b(h) {
      return n.options[h] ?? h;
    }
    function g(h, w) {
      if (s.value || h === i.value) {
        w();
        return;
      }
      r("change", h), w();
    }
    return (h, w) => (t(), a("div", {
      onClick: w[0] || (w[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Ge, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          R(c(b(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(qe, {
        key: 0,
        align: "start"
      }, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "inline-flex items-center gap-0.5 rounded-full disabled:opacity-50",
            disabled: s.value,
            "aria-label": d.value,
            "aria-busy": e.busy
          }, [
            I(Ge, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(b(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), a("svg", ju, [
              o("path", {
                d: k(ce)("chevron-down")
              }, null, 8, Vu)
            ]))
          ], 8, Lu)
        ]),
        panel: L(({ close: y }) => [
          o("div", Du, c(d.value), 1),
          (t(!0), a(P, null, V(e.options, (C, M) => (t(), a("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (B) => g(String(M), y)
          }, [
            I(Ge, {
              variant: f(M),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), a("svg", Eu, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, Iu)
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
}, Gu = ["d"], Wu = { class: "min-w-0 flex-1 truncate" }, Zu = ["disabled", "onClick"], Ju = ["d"], Yu = { class: "min-w-0 flex-1 truncate" }, Xu = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Qu = ["disabled", "onClick"], ec = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tc = ["d"], nc = { class: "min-w-0 flex-1 truncate" }, ac = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = U(null), d = U(null), u = x(() => r.groups.flatMap((p) => p.actions)), f = x(() => u.value.filter((p) => !p.destructive)), b = x(() => u.value.filter((p) => p.destructive)), g = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(p) {
      return g[p.color ?? "gray"] ?? g.gray;
    }
    const w = x(() => u.value.length === 0);
    function y(p) {
      s("run", p);
    }
    function C(p) {
      if (r.busy !== p.key) {
        if (p.link) {
          p.url && window.location.assign(p.url);
          return;
        }
        y(p);
      }
    }
    function M(p, m) {
      const v = m.toLowerCase().split("+").map((E) => E.trim()), A = v.at(-1);
      return !A || p.key.toLowerCase() !== A ? !1 : (p.ctrlKey || p.metaKey) === v.includes("mod") && p.shiftKey === v.includes("shift") && p.altKey === v.includes("alt");
    }
    function B(p) {
      w.value || (p.preventDefault(), i.value?.openAt(p.clientX, p.clientY));
    }
    function _(p) {
      const m = u.value.find(
        (te) => (te.keyBindings ?? []).some((H) => M(p, H))
      );
      if (m) {
        p.preventDefault(), C(m);
        return;
      }
      if (p.key !== "ArrowDown" && p.key !== "ArrowUp")
        return;
      const v = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (v.length === 0)
        return;
      p.preventDefault();
      const A = v.indexOf(document.activeElement), F = p.key === "ArrowDown" ? 1 : -1, E = (A + F + v.length) % v.length;
      v[E]?.focus();
    }
    return l({ openContextMenu: B }), (p, m) => (t(), a("div", Nu, [
      w.value ? $("", !0) : (t(), D(qe, {
        key: 0,
        ref_key: "menu",
        ref: i
      }, {
        trigger: L(() => [
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
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: _
          }, [
            (t(!0), a(P, null, V(f.value, (v) => (t(), a(P, {
              key: v.key
            }, [
              v.link ? (t(), a("a", {
                key: 0,
                href: v.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(v)])
              }, [
                (t(), a("svg", qu, [
                  o("path", {
                    d: k(Te)(v)
                  }, null, 8, Gu)
                ])),
                o("span", Wu, c(v.label), 1)
              ], 10, Ku)) : (t(), a("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(v)]),
                disabled: e.busy === v.key,
                onClick: (A) => y(v)
              }, [
                (t(), a("svg", {
                  class: z(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: k(Te)(v)
                  }, null, 8, Ju)
                ], 2)),
                o("span", Yu, c(v.label), 1)
              ], 10, Zu))
            ], 64))), 128)),
            b.value.length ? (t(), a("div", Xu, [
              (t(!0), a(P, null, V(b.value, (v) => (t(), a("button", {
                key: v.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === v.key,
                onClick: (A) => y(v)
              }, [
                (t(), a("svg", ec, [
                  o("path", {
                    d: k(Te)({ ...v, destructive: !0 })
                  }, null, 8, tc)
                ])),
                o("span", nc, c(v.label), 1)
              ], 8, Qu))), 128))
            ])) : $("", !0)
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
}, hc = ["d"], bc = { class: "min-w-0 flex-1 truncate" }, yc = ["disabled", "onClick"], xc = ["d"], kc = { class: "min-w-0 flex-1 truncate" }, T3 = /* @__PURE__ */ O({
  __name: "InlineRecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = U(null), d = x(() => r.groups.filter((_) => !_.label)), u = x(() => r.groups.filter((_) => _.label)), f = x(() => d.value.flatMap((_) => _.actions)), b = x(() => f.value.filter((_) => !_.destructive)), g = x(() => f.value.filter((_) => _.destructive)), h = x(() => r.groups.every((_) => _.actions.length === 0)), w = {
      primary: "text-primary",
      gray: "text-muted-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function y(_) {
      return w[_.color ?? "gray"] ?? w.gray;
    }
    function C(_) {
      s("run", _);
    }
    function M(_) {
      r.busy !== _.key && C(_);
    }
    function B(_) {
      h.value || i.value?.openContextMenu(_);
    }
    return l({ openContextMenu: B }), (_, p) => (t(), a("div", lc, [
      o("div", oc, [
        (t(!0), a(P, null, V([...b.value, ...g.value], (m) => (t(), a(P, {
          key: m.key
        }, [
          m.link ? (t(), a("a", {
            key: 0,
            href: m.url ?? "#",
            class: z(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors", y(m)])
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
            class: z(["hover:bg-accent inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50", y(m)]),
            disabled: e.busy === m.key,
            onClick: (v) => M(m)
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
        (t(!0), a(P, null, V(u.value, (m) => (t(), D(qe, {
          key: m.label,
          align: "end"
        }, {
          trigger: L(() => [
            o("button", cc, [
              m.icon ? (t(), a("svg", fc, [
                o("path", {
                  d: k(ce)(m.icon)
                }, null, 8, mc)
              ])) : $("", !0),
              o("span", null, c(m.label), 1)
            ])
          ]),
          panel: L(() => [
            o("div", pc, [
              (t(!0), a(P, null, V([
                ...m.actions.filter((v) => !v.destructive),
                ...m.actions.filter((v) => v.destructive)
              ], (v) => (t(), a(P, {
                key: v.key
              }, [
                v.link ? (t(), a("a", {
                  key: 0,
                  href: v.url ?? "#",
                  role: "menuitem",
                  class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", v.destructive ? "text-destructive" : y(v)])
                }, [
                  (t(), a("svg", gc, [
                    o("path", {
                      d: k(Te)(v)
                    }, null, 8, hc)
                  ])),
                  o("span", bc, c(v.label), 1)
                ], 10, vc)) : (t(), a("button", {
                  key: 1,
                  type: "button",
                  role: "menuitem",
                  class: z(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", v.destructive ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10" : y(v)]),
                  disabled: e.busy === v.key,
                  onClick: (A) => C(v)
                }, [
                  (t(), a("svg", {
                    class: z(["size-4 shrink-0", e.busy === v.key && "animate-pulse"]),
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "aria-hidden": "true"
                  }, [
                    o("path", {
                      d: k(Te)({ ...v, destructive: v.destructive })
                    }, null, 8, xc)
                  ], 2)),
                  o("span", kc, c(v.label), 1)
                ], 10, yc))
              ], 64))), 128))
            ])
          ]),
          _: 2
        }, 1024))), 128))
      ]),
      I(ac, {
        ref_key: "fallback",
        ref: i,
        class: "sm:hidden",
        groups: e.groups,
        title: e.title,
        busy: e.busy,
        onRun: p[0] || (p[0] = (m) => s("run", m))
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
}, kt = 12, $t = 20, $c = [0, 0.25, 0.5, 0.75, 1], an = "alxtexhpanel.appearance", Be = {
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
}, Ve = U({ ...Be });
let Je = !1;
const Fn = "alxtexhpanel.appearance.vars", Rt = "pk-appearance";
function nt() {
  return typeof window > "u" ? null : window;
}
let wt = null;
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
function E3() {
  Je = !1, wt = null, Ve.value = { ...Be };
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
    return typeof l.fontSize == "string" && (l.fontSize = n[l.fontSize] ?? Be.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < kt || l.fontSize > $t) && (l.fontSize = Be.fontSize), l;
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
  const l = on(), n = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Je, s = Nn(n);
  if (Ve.value = n, Je = !0, e) {
    Rn(n);
    try {
      localStorage.setItem(an, JSON.stringify(n));
    } catch {
    }
  }
  const d = nt()?.__panelAppearanceApplied === !0;
  if (wt !== s) {
    if (r && d && e) {
      wt = s;
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
function I3() {
  Hn(Sc());
}
function F3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Hn(l);
}
let Kn = null;
function N3(e) {
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
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, wc(n), Rn(e), wt = Nn(e);
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
  return ve(() => {
    if (Je || nt()?.__panelAppearanceApplied) {
      Je = !0;
      return;
    }
    Je = !0, Ve.value = on(), Ut(Ve.value);
  }), {
    appearance: x(() => Ve.value),
    set: l,
    reset: n,
    PRIMARY_COLORS: Ft,
    SURFACE_TINTS: Nt,
    FONT_SIZE_MIN: kt,
    FONT_SIZE_MAX: $t,
    RADIUS_OPTIONS: $c
  };
}
const Bc = ["aria-busy", "aria-label"], _c = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, Ac = { class: "min-w-0" }, zc = { class: "text-base font-semibold" }, Pc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Oc = { class: "flex shrink-0 items-center gap-2" }, Lc = ["disabled"], jc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, Vc = {
  key: 0,
  class: "bg-muted/30 flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
}, _t = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null);
    let i = null, d = "";
    const u = U(!1), f = x(() => n.width ?? mo[n.size]), b = x(
      () => [Dn, n.padded ? fo : ""].filter(Boolean).join(" ")
    );
    function g(y) {
      u.value = y.target === y.currentTarget;
    }
    function h(y) {
      u.value && y.target === y.currentTarget && !n.busy && r("close"), u.value = !1;
    }
    function w(y) {
      if (!n.open)
        return;
      if (y.key === "Escape") {
        if (n.busy)
          return;
        y.stopPropagation(), r("close");
        return;
      }
      if (y.key !== "Tab" || !s.value)
        return;
      const C = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (C.length === 0)
        return;
      const M = C[0], B = C[C.length - 1];
      y.shiftKey && document.activeElement === M ? (y.preventDefault(), B.focus()) : !y.shiftKey && document.activeElement === B && (y.preventDefault(), M.focus());
    }
    return me(
      () => n.open,
      async (y) => {
        if (y) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", w), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", w), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = d;
    }), (y, C) => (t(), D(dt, { to: "body" }, [
      I(Ye, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), a("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]",
            onPointerdown: g,
            onPointerup: h
          }, null, 32)) : $("", !0)
        ]),
        _: 1
      }),
      I(Ye, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: L(() => [
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
            o("header", _c, [
              o("div", Ac, [
                o("h2", zc, c(e.title), 1),
                e.description ? (t(), a("p", Pc, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Oc, [
                K(y.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: C[0] || (C[0] = (M) => r("close"))
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
                ])], 8, Lc)
              ])
            ]),
            o("div", jc, [
              o("div", {
                class: z(b.value)
              }, [
                K(y.$slots, "default")
              ], 2)
            ]),
            y.$slots.footer ? (t(), a("footer", Vc, [
              K(y.$slots, "footer")
            ])) : $("", !0)
          ], 10, Bc)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), Dc = { class: "flex flex-col gap-5 px-4 py-4" }, Tc = { class: "flex flex-col gap-2" }, Ec = { class: "grid grid-cols-8 gap-2" }, Ic = ["title", "aria-label", "aria-pressed", "onClick"], Fc = { class: "flex flex-col gap-2" }, Nc = { class: "grid grid-cols-8 gap-2" }, Rc = ["title", "aria-label", "aria-pressed", "onClick"], Uc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Hc = { class: "flex flex-col gap-2" }, Kc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, qc = ["aria-pressed", "aria-label", "onClick"], Gc = { class: "text-sm font-semibold" }, Wc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Zc = ["onClick"], Jc = { class: "flex flex-col gap-2" }, Yc = { class: "flex items-center justify-between" }, Xc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Qc = { class: "flex items-center gap-2" }, ef = ["disabled"], tf = ["min", "max", "value"], nf = ["disabled"], R3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: n, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Gn(), u = U(!1), f = x(() => l.value.sidebarSide === "right"), b = x(() => f.value ? "left" : "right"), g = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], h = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], w = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], y = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], C = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], M = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function B(_, p) {
      return `oklch(0.72 ${p * 3} ${_})`;
    }
    return (_, p) => (t(), a(P, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: p[0] || (p[0] = (m) => u.value = !0)
      }, [...p[6] || (p[6] = [
        Mt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      I(_t, {
        open: u.value,
        title: "Settings",
        side: b.value,
        width: "w-80",
        padded: !1,
        onClose: p[5] || (p[5] = (m) => u.value = !1)
      }, {
        "header-actions": L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: p[1] || (p[1] = //@ts-ignore
            (...m) => k(r) && k(r)(...m))
          }, " Reset ")
        ]),
        default: L(() => [
          o("div", Dc, [
            o("section", Tc, [
              p[8] || (p[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", Ec, [
                (t(!0), a(P, null, V(k(s), (m, v) => (t(), a("button", {
                  key: v,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: m.value }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).primary === v,
                  onClick: (A) => k(n)({ primary: v })
                }, [
                  k(l).primary === v ? (t(), a("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: m.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...p[7] || (p[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : $("", !0)
                ], 12, Ic))), 128))
              ])
            ]),
            o("section", Fc, [
              p[10] || (p[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", Nc, [
                (t(!0), a(P, null, V(k(i), (m, v) => (t(), a("button", {
                  key: v,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: B(m.hue, m.chroma) }),
                  title: m.label,
                  "aria-label": m.label,
                  "aria-pressed": k(l).surface === v,
                  onClick: (A) => k(n)({ surface: v })
                }, [
                  k(l).surface === v ? (t(), a("svg", Uc, [...p[9] || (p[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : $("", !0)
                ], 12, Rc))), 128))
              ])
            ]),
            o("section", Hc, [
              p[11] || (p[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Kc, [
                (t(!0), a(P, null, V(k(d), (m) => (t(), a("button", {
                  key: m,
                  type: "button",
                  class: z([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === m,
                  "aria-label": `${m}rem radius`,
                  onClick: (v) => k(n)({ radius: m })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(m, 0.5)}rem` })
                  }, null, 4),
                  R(" " + c(m), 1)
                ], 10, qc))), 128))
              ])
            ]),
            (t(!0), a(P, null, V([
              { label: "Color scheme", key: "theme", options: g },
              { label: "Card style", key: "cardStyle", options: w },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: y },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: M }
            ], (m) => (t(), a("section", {
              key: m.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", Gc, c(m.label), 1),
              o("div", Wc, [
                (t(!0), a(P, null, V(m.options, (v) => (t(), a("button", {
                  key: String(v.value),
                  type: "button",
                  class: z([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[m.key] === v.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (A) => k(n)({ [m.key]: v.value })
                }, c(v.label), 11, Zc))), 128))
              ])
            ]))), 128)),
            o("section", Jc, [
              o("div", Yc, [
                p[12] || (p[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", Xc, c(k(l).fontSize) + "px", 1)
              ]),
              o("div", Qc, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize <= k(kt),
                  "aria-label": "Decrease font size",
                  onClick: p[2] || (p[2] = (m) => k(n)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, ef),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k(kt),
                  max: k($t),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: p[3] || (p[3] = (m) => k(n)({
                    fontSize: Number(m.target.value)
                  }))
                }, null, 40, tf),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k($t),
                  "aria-label": "Increase font size",
                  onClick: p[4] || (p[4] = (m) => k(n)({ fontSize: k(l).fontSize + 1 }))
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
}, ff = ["d"], mf = { class: "w-full truncate text-center" }, Lt = 5, U3 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(
      () => n.items.length <= Lt ? n.items : n.items.slice(0, Lt - 1)
    ), i = x(() => n.items.length > Lt);
    function d(u) {
      return u === "/" ? n.current === "/" : n.current === u || n.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), a("nav", af, [
      o("ul", lf, [
        (t(!0), a(P, null, V(s.value, (b) => (t(), a("li", {
          key: b.key,
          class: "flex-1"
        }, [
          o("a", {
            href: b.href,
            class: z([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(b.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(b.href) ? "page" : void 0
          }, [
            (t(), a("svg", sf, [
              o("path", {
                d: k(ce)(b.icon)
              }, null, 8, rf)
            ])),
            o("span", df, c(b.title), 1)
          ], 10, of)
        ]))), 128)),
        i.value ? (t(), a("li", uf, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (b) => r("more"))
          }, [
            (t(), a("svg", cf, [
              o("path", {
                d: k(ce)("more-horizontal")
              }, null, 8, ff)
            ])),
            o("span", mf, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), pf = ["value"], we = /* @__PURE__ */ O({
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
}), vf = ["for"], ze = /* @__PURE__ */ O({
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
      K(l.$slots, "default")
    ], 10, vf));
  }
}), H3 = /* @__PURE__ */ O({
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
}, xf = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(!1), i = U(null), d = U("");
    ve(() => {
      n.autofocus && i.value?.focus();
    });
    const u = x(
      () => Array.from({ length: n.length }, (_, p) => n.modelValue[p] ?? "")
    ), f = x(() => Math.min(n.modelValue.length, n.length - 1));
    function b(_) {
      return _.replace(/\D/g, "").slice(0, n.length);
    }
    function g(_) {
      n.disabled || _.length !== n.length || d.value !== _ && (d.value = _, r("complete", _));
    }
    function h(_) {
      const p = b(_);
      p !== n.modelValue && r("update:modelValue", p), g(p);
    }
    function w(_) {
      h(_.target.value);
    }
    function y(_) {
      h(_.target.value);
    }
    function C() {
      h(i.value?.value ?? "");
    }
    function M(_) {
      _.animationName === "pkOtpAutofillStart" && C();
    }
    me(
      () => n.modelValue,
      (_) => {
        _.length < n.length ? d.value = "" : g(_);
      }
    );
    let B;
    return ve(() => {
      B = window.setInterval(() => {
        if (n.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), da(() => {
      B !== void 0 && window.clearInterval(B);
    }), (_, p) => (t(), a("div", gf, [
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
        onChange: y,
        onAnimationstart: M,
        onFocus: p[0] || (p[0] = (m) => s.value = !0),
        onBlur: p[1] || (p[1] = (m) => s.value = !1)
      }, null, 40, hf),
      (t(!0), a(P, null, V(u.value, (m, v) => (t(), a("div", {
        key: v,
        "data-slot": "input-otp-slot",
        "data-active": s.value && v === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(c(m) + " ", 1),
        s.value && v === f.value && m === "" ? (t(), a("div", yf, [...p[2] || (p[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, bf))), 128))
    ]));
  }
}), K3 = /* @__PURE__ */ Bt(xf, [["__scopeId", "data-v-560616ac"]]), kf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ee = /* @__PURE__ */ O({
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
      e.description ? (t(), a("p", kf, c(e.description), 1)) : $("", !0)
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
}, _f = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, q3 = /* @__PURE__ */ O({
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
            K(l.$slots, "status")
          ])) : $("", !0)
        ]),
        e.purpose ? (t(), a("p", Bf, c(e.purpose), 1)) : $("", !0)
      ]),
      l.$slots.actions ? (t(), a("div", _f, [
        K(l.$slots, "actions")
      ])) : $("", !0)
    ]));
  }
}), Af = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), a("div", {
      "data-slot": "alert",
      class: z(k(ne)(k(Of)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(n.$slots, "default")
    ], 2));
  }
}), zf = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Pf = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Of = Xt(
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
), Lf = { class: "list-inside list-disc text-sm" }, G3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, n = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(Af), { variant: "destructive" }, {
      default: L(() => [
        I(k(Qa), { class: "size-4" }),
        I(k(Pf), null, {
          default: L(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        I(k(zf), null, {
          default: L(() => [
            o("ul", Lf, [
              (t(!0), a(P, null, V(n.value, (i, d) => (t(), a("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Wn = /* @__PURE__ */ O({
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
      [Ae, k(s)]
    ]);
  }
}), jf = { class: "relative" }, Vf = ["aria-label"], W3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const n = e, r = U(!1), s = ca("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), a("div", jf, [
      I(k(Wn), re({
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
}), Zn = "@container min-w-0", Df = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", Z3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", Tf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function Ef(e) {
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
function J3(e, l) {
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
    Ef(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function hn(e, l) {
  return `${e}:${l}`;
}
function Y3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Ht(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function X3(e, l, n, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: n }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const b of f.items)
      i.set(hn(f.kind, b.key), {
        kind: f.kind,
        source: b
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const f of r?.widgets ?? []) {
    const b = f.id.toLowerCase(), g = i.get(b);
    g && (u.add(b), d.push({
      id: b,
      kind: g.kind,
      key: g.source.key,
      span: Ht(f.span),
      hidden: !!f.hidden,
      source: g.source
    }));
  }
  for (const f of s)
    for (const b of f.items) {
      const g = hn(f.kind, b.key);
      u.has(g) || d.push({
        id: g,
        kind: f.kind,
        key: b.key,
        span: Ht(b.span),
        hidden: !1,
        source: b
      });
    }
  return d;
}
function Q3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Ht(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Jn = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", If = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", Ff = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
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
    throw new Error(If);
}
const eC = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Qe), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qf = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Bn), re({
      "data-slot": "sheet-description",
      class: k(ne)("text-sm text-muted-foreground font-normal", l.class)
    }, k(n)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Gf = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), Wf = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(_n), re({
      "data-slot": "sheet-title",
      class: k(ne)("text-foreground font-semibold", l.class)
    }, k(n)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nC = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(An), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bn = "sidebar_state", Zf = 3600 * 24 * 7, Jf = "16rem", Yf = "18rem", Xf = "3rem", Qf = "b", [At, em] = xa("Sidebar"), tm = { class: "flex h-full w-full flex-col" }, nm = ["data-state", "data-collapsible", "data-variant", "data-side"], am = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, aC = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, openMobile: s, setOpenMobile: i } = At();
    return (d, u) => e.collapsible === "none" ? (t(), a("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: k(ne)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      K(d.$slots, "default")
    ], 16)) : k(n) ? (t(), D(k(en), re({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: L(() => [
        I(k(tn), {
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
          default: L(() => [
            I(Gf, { class: "sr-only" }, {
              default: L(() => [
                I(Wf, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                I(qf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", tm, [
              K(d.$slots, "default")
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
          K(d.$slots, "default")
        ])
      ], 16)
    ], 8, nm));
  }
}), lC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), rC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), iC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), dC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), uC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), cC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), vC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), lm = /* @__PURE__ */ O({
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
      default: L((u) => [
        K(i.$slots, "default", Oe(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k($a), null, {
      default: L(() => [
        I(k(wa), re({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(ne)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            n.class
          )
        }), {
          default: L(() => [
            K(d.$slots, "default"),
            I(k(Ca), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), gC = /* @__PURE__ */ O({
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
    return (n, r) => (t(), D(k(zn), Oe(Ne(l)), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Sa), re({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yn = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), hC = /* @__PURE__ */ O({
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
    const l = e, { isMobile: n, state: r } = At(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(k(lm), { key: 1 }, {
      default: L(() => [
        I(k(sm), { "as-child": "" }, {
          default: L(() => [
            I(yn, Oe(Ne({ ...k(s), ...i.$attrs })), {
              default: L(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        I(k(om), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(n)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), a(P, { key: 0 }, [
              R(c(e.tooltip), 1)
            ], 64)) : (t(), D(_e(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(yn, Oe(re({ key: 0 }, { ...k(s), ...i.$attrs })), {
      default: L(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), xn = "animate-pulse rounded-md bg-primary/10", yC = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = x(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), a("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: z(k(ne)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), a("div", {
        key: 0,
        class: z(k(ne)(xn, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: z(k(ne)(xn, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": n.value })
      }, null, 6)
    ], 2));
  }
}), xC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), kC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), $C = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), wC = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ul?.cookie.includes(`${bn}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = il("(max-width: 767px)"), i = U(!1), d = jn(n, "open", r, {
      defaultValue: n.defaultOpen ?? !1,
      passive: n.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${bn}=${d.value}; path=/; max-age=${Zf}`;
    }
    function f(h) {
      i.value = h;
    }
    function b() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    dl("keydown", (h) => {
      h.key === Qf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), b());
    });
    const g = x(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return em({
      state: g,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: b
    }), (h, w) => (t(), D(k(zn), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(Jf),
            "--sidebar-width-icon": k(Xf)
          },
          class: k(ne)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            n.class
          )
        }, h.$attrs), [
          K(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), CC = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: n } = At();
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
      K(r.$slots, "default")
    ], 2));
  }
}), rm = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Ma), re({ "data-slot": "separator" }, k(n), {
      class: k(ne)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), SC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), MC = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: n, state: r, toggleSidebar: s } = At();
    return (i, d) => (t(), D(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: z(k(ne)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: L(() => [
        k(n) || k(r) === "collapsed" ? (t(), D(k(nl), { key: 0 })) : (t(), D(k(al), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), im = Xt(
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
), BC = /* @__PURE__ */ O({
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
      default: L((u) => [
        K(i.$slots, "default", Oe(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), dm = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, _C = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(_a), re({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", dm, [
          I(k(Pn), null, {
            default: L(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                I(k(On), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AC = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Aa), null, {
      default: L(() => [
        I(k(za), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ne)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            n.class
          )
        }), {
          default: L(() => [
            K(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), zC = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Pa), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), PC = /* @__PURE__ */ O({
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
    const l = e, n = fe(l, "inset", "variant", "class"), r = Le(n);
    return (s, i) => (t(), D(k(Oa), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, k(r), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), OC = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, n = fe(l, "class", "inset"), r = Le(n);
    return (s, i) => (t(), D(k(La), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, k(r), {
      class: k(ne)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), LC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), um = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, jC = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Va), re({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        o("span", um, [
          I(k(Pn), null, {
            default: L(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                I(k(ll), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VC = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Da), re({ "data-slot": "dropdown-menu-separator" }, k(n), {
      class: k(ne)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), DC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), TC = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(k(Ta), re({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), EC = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Ea), re({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(ne)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        n.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IC = /* @__PURE__ */ O({
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
    const l = e, n = fe(l, "class", "inset"), r = Le(n);
    return (s, i) => (t(), D(k(Ia), re({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(ne)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        K(s.$slots, "default"),
        I(k(Ln), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), FC = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = Le(e);
    return (r, s) => (t(), D(k(Fa), re({ "data-slot": "dropdown-menu-trigger" }, k(n)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), NC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), RC = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Ra), re({ "data-slot": "avatar-fallback" }, k(n), {
      class: k(ne)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), HC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), KC = /* @__PURE__ */ O({
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
      K(n.$slots, "default", {}, () => [
        I(k(ol), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), qC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), GC = /* @__PURE__ */ O({
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
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), WC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), ZC = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), JC = /* @__PURE__ */ O({
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
      K(n.$slots, "default", {}, () => [
        I(k(Ln))
      ])
    ], 2));
  }
}), cm = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, fm = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), a("div", cm, [
      I(k(Ha), re({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(ne)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), YC = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class", "viewport"), i = be(s, r);
    return (d, u) => (t(), D(k(Ka), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(ne)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        n.class
      )
    }), {
      default: L((f) => [
        K(d.$slots, "default", Oe(Ne(f))),
        e.viewport ? (t(), D(fm, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), XC = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(qa), re({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(ne)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        n.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), D(k(Ga), re({ "data-slot": "navigation-menu-indicator" }, k(r), {
      class: k(ne)(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        l.class
      )
    }), {
      default: L(() => [...i[0] || (i[0] = [
        o("div", { class: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" }, null, -1)
      ])]),
      _: 1
    }, 16, ["class"]));
  }
}), e8 = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Wa), re({ "data-slot": "navigation-menu-item" }, k(n), {
      class: k(ne)("relative", l.class)
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t8 = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Za), re({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(ne)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n8 = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), D(k(Ja), re({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(ne)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), a8 = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), D(k(Ya), re({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(ne)(k(mm)(), "group", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default"),
        I(k(sl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mm = Xt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), l8 = /* @__PURE__ */ O({
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
      default: L((u) => [
        K(i.$slots, "default", Oe(Ne(u)))
      ]),
      _: 3
    }, 16));
  }
}), o8 = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(Qe), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Wt), re({ "data-slot": "dialog-overlay" }, k(n), {
      class: k(ne)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        I(pm),
        I(k(Jt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ne)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: L(() => [
            K(d.$slots, "default"),
            e.showCloseButton ? (t(), D(k(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                I(k(Yt)),
                u[0] || (u[0] = o("span", { class: "sr-only" }, "Close", -1))
              ]),
              _: 1
            })) : $("", !0)
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), r8 = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), D(k(Bn), re({ "data-slot": "dialog-description" }, k(r), {
      class: k(ne)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default"),
      e.showCloseButton ? (t(), D(k(Qe), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          I(de, { variant: "outline" }, {
            default: L(() => [...r[0] || (r[0] = [
              R(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), d8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), u8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = fe(n, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        I(k(Wt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            I(k(Jt), re({
              class: k(ne)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const b = f.detail.originalEvent, g = b.target;
                (b.offsetX > g.clientWidth || b.offsetY > g.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                K(d.$slots, "default"),
                I(k(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    I(k(Yt), { class: "w-4 h-4" }),
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
}), c8 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class"), r = Le(n);
    return (s, i) => (t(), D(k(_n), re({ "data-slot": "dialog-title" }, k(r), {
      class: k(ne)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), f8 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (n, r) => (t(), D(k(An), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m8 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, n = fe(l, "class");
    return (r, s) => (t(), D(k(Xa), re({ "data-slot": "label" }, k(n), {
      class: k(ne)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), p8 = /* @__PURE__ */ O({
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
}), v8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), g8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), h8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), b8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), y8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), x8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), k8 = /* @__PURE__ */ O({
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
      K(n.$slots, "default")
    ], 2));
  }
}), vm = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, gm = { class: "flex items-start gap-3" }, hm = { class: "min-w-0 flex-1" }, bm = { class: "text-foreground text-sm font-medium" }, ym = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, $8 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: n }) {
    const r = e, s = n, i = U(!1), d = U(null), u = U(0);
    fa((b) => (console.error(`[PkBoundary] ${r.label} failed to render`, b), i.value = !0, d.value = b instanceof Error ? b.message : null, s("error", b), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (b, g) => (t(), a("div", {
      class: z(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), a("div", vm, [
        o("div", gm, [
          g[1] || (g[1] = o("svg", {
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
            d.value ? (t(), a("p", ym, c(d.value), 1)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: f
            }, [...g[0] || (g[0] = [
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
      ])) : i.value ? $("", !0) : K(b.$slots, "default", { key: u.value })
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
}, w8 = /* @__PURE__ */ O({
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
          K(l.$slots, "header", {}, () => [
            e.title ? (t(), a("h2", wm, c(e.title), 1)) : $("", !0),
            e.description ? (t(), a("p", Cm, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), a("div", Sm, [
          K(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: z(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), a("footer", Mm, [
        K(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), Yn = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function C8() {
  const e = Vn(), l = x(() => e.props.panel?.pageFooter === !0);
  return Et(Yn, l), l;
}
const Bm = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, _m = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, Am = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, S8 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, n = Vn(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => n.props.panel?.brand || n.props.panelBrand || n.props.name || "Panel"), i = x(() => {
      const f = n.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = yt(Yn, x(() => !1)), u = x(() => !l.host && k(d) === !0);
    return (f, b) => u.value ? $("", !0) : (t(), a("footer", Bm, [
      o("div", _m, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), a("nav", Am, [
          (t(!0), a(P, null, V(i.value, (g) => (t(), D(k(ml), {
            key: g.href,
            href: g.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              R(c(g.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), zm = { class: "flex shrink-0 flex-col items-center" }, Pm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, M8 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, n = x(() => l.kind === "laptop"), r = x(
      () => n.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = x(() => n.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), a("div", zm, [
      o("div", {
        class: z(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !n.value ? (t(), a("div", Pm)) : $("", !0),
        o("div", {
          class: z(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
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
      ], 64)) : $("", !0)
    ]));
  }
}), Om = {
  key: 0,
  class: "flex justify-end"
}, Lm = { class: "flex flex-col gap-2" }, jm = ["onDrop"], Vm = ["aria-label", "onDragstart"], Dm = ["onClick"], Tm = { class: "font-medium" }, Em = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, Im = {
  key: 2,
  class: "min-w-0 flex-1"
}, Fm = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Nm = ["aria-label", "onClick"], Rm = ["disabled", "aria-label", "onClick"], Um = ["disabled", "aria-label", "onClick"], Hm = ["disabled", "title", "aria-label", "onClick"], Km = ["disabled", "title", "aria-label", "onClick"], qm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Gm = ["disabled"], B8 = /* @__PURE__ */ O({
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
    disabled: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    fieldKey: {},
    childOptions: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    let s = 0;
    const i = U(d(n.modelValue));
    function d(Z) {
      return Array.isArray(Z) ? Z.map((G) => ({ uid: s++, data: { ...G } })) : [];
    }
    me(
      () => n.modelValue,
      (Z) => {
        JSON.stringify(Z ?? null) !== JSON.stringify(u()) && (i.value = d(Z));
      }
    );
    function u() {
      const Z = [];
      for (const G of i.value) {
        const q = {};
        let N = !1;
        for (const S of n.children) {
          const T = G.data[S.key] ?? null;
          q[S.key] = T, T !== null && T !== "" && !(Array.isArray(T) && T.length === 0) && (N = !0);
        }
        N && Z.push(q);
      }
      return Z.length ? Z : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const b = x(() => n.maxItems !== null && i.value.length >= n.maxItems), g = x(() => n.minItems !== null && i.value.length <= n.minItems), h = x(() => n.children.length === 1);
    function w() {
      if (b.value || n.disabled || !n.addable)
        return;
      const Z = {};
      for (const G of n.children)
        Z[G.key] = null;
      i.value.push({ uid: s++, data: Z });
    }
    function y(Z) {
      i.value = i.value.filter((G) => G.uid !== Z), f();
    }
    function C(Z) {
      if (b.value || n.disabled || !n.cloneable)
        return;
      const G = i.value.findIndex((T) => T.uid === Z);
      if (G < 0)
        return;
      const q = i.value[G], N = {};
      for (const T of n.children) {
        const j = q.data[T.key];
        N[T.key] = Array.isArray(j) ? [...j] : j;
      }
      const S = [...i.value];
      S.splice(G + 1, 0, { uid: s++, data: N }), i.value = S, f();
    }
    function M(Z, G) {
      const q = Z + G;
      if (q < 0 || q >= i.value.length)
        return;
      const N = [...i.value], [S] = N.splice(Z, 1);
      N.splice(q, 0, S), i.value = N, f();
    }
    function B(Z, G, q) {
      const N = i.value.find((S) => S.uid === Z);
      N && (N.data[G] = q, f());
    }
    function _(Z, G) {
      return n.errors[`${n.fieldKey}.${Z}.${G}`];
    }
    const p = U(/* @__PURE__ */ new Set());
    function m(Z) {
      return n.collapsible && p.value.has(Z);
    }
    function v(Z) {
      const G = new Set(p.value);
      G.has(Z) ? G.delete(Z) : G.add(Z), p.value = G;
    }
    const A = x(
      () => i.value.length > 0 && i.value.every((Z) => p.value.has(Z.uid))
    );
    function F() {
      p.value = A.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((Z) => Z.uid));
    }
    function E(Z) {
      const G = n.children[0];
      if (!G)
        return "";
      const q = Z.data[G.key];
      if (typeof q != "string" && typeof q != "number")
        return "";
      const N = String(q).trim();
      return N === "" || N.length > 60 ? "" : N;
    }
    const te = U(null);
    function H(Z, G) {
      if (n.disabled) {
        G.preventDefault();
        return;
      }
      te.value = Z, G.dataTransfer?.setData("text/plain", String(Z)), G.dataTransfer && (G.dataTransfer.effectAllowed = "move");
    }
    function W() {
      te.value = null;
    }
    function J(Z, G) {
      G.preventDefault();
      const q = te.value;
      if (te.value = null, n.disabled || q === null || q === Z)
        return;
      const N = [...i.value], S = N.findIndex((Y) => Y.uid === q), T = N.findIndex((Y) => Y.uid === Z);
      if (S < 0 || T < 0)
        return;
      const [j] = N.splice(S, 1);
      N.splice(T, 0, j), i.value = N, f();
    }
    return (Z, G) => (t(), a(P, null, [
      e.collapsible && i.value.length > 1 ? (t(), a("div", Om, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: F
        }, c(A.value ? "Expand all" : "Collapse all"), 1)
      ])) : $("", !0),
      o("div", Lm, [
        (t(!0), a(P, null, V(i.value, (q, N) => (t(), a("div", {
          key: q.uid,
          class: z(["flex items-start gap-2", te.value === q.uid ? "opacity-40" : ""]),
          onDragover: G[0] || (G[0] = he(() => {
          }, ["prevent"])),
          onDrop: (S) => J(q.uid, S)
        }, [
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: z(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${N + 1}`,
            onDragstart: (S) => H(q.uid, S),
            onDragend: W
          }, [...G[1] || (G[1] = [
            Mt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, Vm)),
          o("span", {
            class: z(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(N + 1), 3),
          m(q.uid) ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (S) => v(q.uid)
          }, [
            o("span", Tm, c(e.itemLabel) + " " + c(N + 1), 1),
            E(q) ? (t(), a("span", Em, c(E(q)), 1)) : $("", !0)
          ], 8, Dm)) : (t(), a("div", Im, [
            h.value ? (t(), D(Xe, {
              key: 0,
              field: {
                ...e.children[0],
                disabled: e.children[0].disabled || e.disabled,
                labelHidden: !0
              },
              value: q.data[e.children[0].key],
              error: _(N, e.children[0].key),
              options: e.childOptions[e.children[0].key] ?? [],
              onChange: (S) => B(q.uid, e.children[0].key, S)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), a("div", Fm, [
              (t(!0), a(P, null, V(e.children, (S) => (t(), D(Xe, {
                key: S.key,
                field: { ...S, disabled: S.disabled || e.disabled },
                value: q.data[S.key],
                error: _(N, S.key),
                options: e.childOptions[S.key] ?? [],
                onChange: (T) => B(q.uid, S.key, T)
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
              "aria-label": m(q.uid) ? `Expand ${e.itemLabel} ${N + 1}` : `Collapse ${e.itemLabel} ${N + 1}`,
              onClick: (S) => v(q.uid)
            }, [
              (t(), a("svg", {
                class: z(["size-3.5 transition-transform", m(q.uid) ? "" : "rotate-180"]),
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [...G[2] || (G[2] = [
                o("path", { d: "m6 9 6 6 6-6" }, null, -1)
              ])], 2))
            ], 8, Nm)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || N === 0,
              "aria-label": `Move ${e.itemLabel} ${N + 1} up`,
              onClick: (S) => M(N, -1)
            }, [...G[3] || (G[3] = [
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
              disabled: e.disabled || N === i.value.length - 1,
              "aria-label": `Move ${e.itemLabel} ${N + 1} down`,
              onClick: (S) => M(N, 1)
            }, [...G[4] || (G[4] = [
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
              disabled: e.disabled || b.value,
              title: b.value ? `At most ${e.maxItems} allowed` : void 0,
              "aria-label": `Duplicate ${e.itemLabel} ${N + 1}`,
              onClick: (S) => C(q.uid)
            }, [...G[5] || (G[5] = [
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
            ])], 8, Hm)) : $("", !0),
            e.deletable ? (t(), a("button", {
              key: 2,
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || g.value,
              title: g.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${N + 1}`,
              onClick: (S) => y(q.uid)
            }, [...G[6] || (G[6] = [
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
            ])], 8, Km)) : $("", !0)
          ], 2)
        ], 42, jm))), 128)),
        i.value.length === 0 ? (t(), a("p", qm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
        !b.value && e.addable ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: w
        }, [
          G[7] || (G[7] = o("svg", {
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
        ], 8, Gm)) : $("", !0)
      ])
    ], 64));
  }
}), Wm = { class: "space-y-1" }, Zm = { class: "flex items-center gap-1" }, Jm = ["disabled", "title", "aria-label", "onClick"], Ym = ["aria-pressed"], Xm = ["id", "value", "rows", "disabled"], Qm = ["innerHTML"], ep = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(!1), i = x(() => n.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = x(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, w = h) {
      const y = document.getElementById(n.id ?? "");
      if (y === null)
        return;
      const C = y.selectionStart, M = y.selectionEnd, B = i.value.slice(C, M);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${B}${w}${i.value.slice(M)}`
      );
    }
    const b = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, g = x(
      () => (n.toolbar ?? Object.keys(b)).filter((h) => h in b)
    );
    return (h, w) => (t(), a("div", Wm, [
      o("div", Zm, [
        (t(!0), a(P, null, V(g.value, (y) => (t(), a("button", {
          key: y,
          type: "button",
          disabled: e.disabled,
          title: y,
          "aria-label": y,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => b[y].run()
        }, c(b[y].label), 9, Jm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: w[0] || (w[0] = (y) => s.value = !s.value)
        }, " Preview ", 8, Ym)
      ]),
      s.value ? (t(), a("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Qm)) : (t(), a("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: w[1] || (w[1] = (y) => r("update:modelValue", y.target.value))
      }, null, 40, Xm))
    ]));
  }
}), tp = { class: "space-y-1" }, np = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, ap = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, lp = ["id", "value", "rows", "disabled"], op = { class: "text-muted-foreground text-xs font-normal" }, sp = {
  key: 0,
  class: "text-destructive text-xs"
}, rp = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(!0), d = x(() => n.modelValue ?? ""), u = x(() => Math.max(d.value.split(`
`).length, 1)), f = x(() => {
      if (n.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (h) {
        return h instanceof Error ? h.message : "Not valid JSON.";
      }
    });
    function b(h) {
      r("update:modelValue", h.target.value);
    }
    function g(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const w = h.target, y = w.selectionStart, C = w.selectionEnd, M = `${d.value.slice(0, y)}    ${d.value.slice(C)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        w.selectionStart = w.selectionEnd = y + 4;
      });
    }
    return (h, w) => (t(), a("div", tp, [
      o("div", np, [
        o("div", ap, [
          (t(!0), a(P, null, V(u.value, (y) => (t(), a("div", { key: y }, c(y), 1))), 128))
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
          onInput: b,
          onKeydown: g
        }, null, 40, lp)
      ]),
      o("p", op, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), a("p", sp, c(f.value), 1)) : $("", !0)
    ]));
  }
}), ip = { class: "space-y-3" }, dp = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, up = { class: "text-sm font-medium" }, cp = { class: "flex items-center gap-1" }, fp = ["disabled", "onClick"], mp = ["disabled", "onClick"], pp = ["disabled", "onClick"], vp = { class: "space-y-3 p-3" }, gp = { class: "flex flex-wrap items-center gap-2" }, hp = ["disabled", "onClick"], bp = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, _8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.modelValue ?? []), i = x(
      () => Object.fromEntries(n.blocks.map((w) => [w.type, w]))
    ), d = x(() => n.maxBlocks !== null && s.value.length >= n.maxBlocks);
    function u(w) {
      r("update:modelValue", w);
    }
    function f(w) {
      d.value || u([...s.value, { type: w, data: {} }]);
    }
    function b(w) {
      u(s.value.filter((y, C) => C !== w));
    }
    function g(w, y) {
      const C = w + y;
      if (C < 0 || C >= s.value.length)
        return;
      const M = [...s.value], [B] = M.splice(w, 1);
      M.splice(C, 0, B), u(M);
    }
    function h(w, y, C) {
      u(
        s.value.map(
          (M, B) => B === w ? { ...M, data: { ...M.data, [y]: C } } : M
        )
      );
    }
    return (w, y) => (t(), a("div", ip, [
      (t(!0), a(P, null, V(s.value, (C, M) => (t(), a("div", {
        key: `${C.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", dp, [
          o("span", up, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", cp, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (B) => g(M, -1)
            }, " ↑ ", 8, fp),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (B) => g(M, 1)
            }, " ↓ ", 8, mp),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (B) => b(M)
            }, " Remove ", 8, pp)
          ])
        ]),
        o("div", vp, [
          (t(!0), a(P, null, V(i.value[C.type]?.fields ?? [], (B) => (t(), D(Xe, {
            key: B.key,
            field: B,
            value: C.data[B.key] ?? null,
            error: e.errors?.[B.key],
            processing: e.disabled,
            onChange: (_) => h(M, B.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", gp, [
        (t(!0), a(P, null, V(e.blocks, (C) => (t(), a("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => f(C.type)
        }, " + " + c(C.label), 9, hp))), 128)),
        d.value ? (t(), a("span", bp, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), yp = ["name", "value", "checked", "disabled", "onChange"], xp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, kp = /* @__PURE__ */ O({
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
      (t(!0), a(P, null, V(e.options, (u) => (t(), a("label", {
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
        }, null, 40, yp),
        R(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", xp, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), $p = ["value", "checked", "disabled", "onChange"], wp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Cp = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    );
    function i(f) {
      return s.value.some((b) => b == f.value);
    }
    function d(f) {
      r(
        "update:modelValue",
        i(f) ? s.value.filter((b) => b != f.value) : [...s.value, f.value]
      );
    }
    const u = x(
      () => n.field.columns && n.field.columns > 1 ? { gridTemplateColumns: `repeat(${n.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, b) => (t(), a("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), a(P, null, V(e.options, (g) => (t(), a("label", {
        key: String(g.value),
        class: z(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: g.value,
          checked: i(g),
          disabled: e.disabled,
          onChange: (h) => d(g)
        }, null, 40, $p),
        R(" " + c(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", wp, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Sp = { class: "flex flex-col gap-1.5" }, Mp = ["aria-label", "onClick"], Bp = ["placeholder", "disabled", "maxlength"], _p = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Ap = ["onClick"], zp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Pp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(""), i = x(
      () => Array.isArray(n.modelValue) ? n.modelValue : []
    ), d = x(() => i.value.length >= (n.field.max ?? 25)), u = x(
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
      if (i.value.some((y) => y.toLowerCase() === w.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, w]), s.value = "";
    }
    function b(h) {
      r(
        "update:modelValue",
        i.value.filter((w, y) => y !== h)
      );
    }
    function g(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && b(i.value.length - 1);
    }
    return (h, w) => (t(), a("div", Sp, [
      o("div", {
        class: z(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), a(P, null, V(i.value, (y, C) => (t(), a("span", {
          key: `${y}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(c(y) + " ", 1),
          e.disabled ? $("", !0) : (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${y}`,
            onClick: (M) => b(C)
          }, " × ", 8, Mp))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (y) => s.value = y),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: g,
          onBlur: w[1] || (w[1] = (y) => f(s.value))
        }, null, 40, Bp), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), a("div", _p, [
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), a(P, null, V(u.value, (y) => (t(), a("button", {
          key: y,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(y)
        }, c(y), 9, Ap))), 128))
      ])) : $("", !0),
      d.value ? (t(), a("p", zp, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), Op = 4.5, kn = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Xn(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function jt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Kt(e) {
  const [l, n, r] = Xn(e);
  return 0.2126 * jt(l) + 0.7152 * jt(n) + 0.0722 * jt(r);
}
function Qn(e, l) {
  const n = Kt(e), r = Kt(l);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Lp(e, l, n) {
  if (!kn.test(e) || !kn.test(l))
    return e;
  const r = Kt(l) > 0.5, s = r ? 0 : 255;
  let i = Xn(e);
  for (let d = 0; d <= 20; d++) {
    const u = jp(i);
    if (Qn(u, l) >= n)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function jp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Vp = { class: "flex flex-col gap-2" }, Dp = { class: "flex items-center gap-2" }, Tp = {
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
}, Ep = ["value", "disabled", "aria-label"], Ip = ["value", "disabled", "placeholder"], Fp = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Np = ["aria-label", "title", "onClick"], Rp = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Up = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = x(() => typeof n.modelValue == "string" ? n.modelValue : ""), d = x(() => s.test(i.value));
    function u(y) {
      const C = y.trim();
      if (C === "")
        return "";
      const M = C.startsWith("#") ? C : `#${C}`;
      return s.test(M) ? M.toLowerCase() : C;
    }
    function f(y) {
      r("update:modelValue", u(y.target.value));
    }
    const b = x(() => !d.value || !n.field.contrastBackground || !s.test(n.field.contrastBackground) ? null : Qn(i.value, n.field.contrastBackground)), g = x(() => n.field.contrastMinRatio ?? Op), h = x(() => b.value !== null && b.value < g.value);
    function w() {
      n.field.contrastBackground && r(
        "update:modelValue",
        Lp(i.value, n.field.contrastBackground, g.value)
      );
    }
    return (y, C) => (t(), a("div", Vp, [
      o("div", Dp, [
        d.value ? (t(), a("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, Ep)) : (t(), a("span", Tp)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, Ip)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), a("div", Fp, [
        (t(!0), a(P, null, V(e.field.presets, (M) => (t(), a("button", {
          key: M,
          type: "button",
          class: z(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (B) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Np))), 128))
      ])) : $("", !0),
      h.value ? (t(), a("p", Rp, [
        o("span", null, " This fails contrast at " + c(b.value.toFixed(1)) + ":1 - it needs at least " + c(g.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), a("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: w
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), Hp = ["aria-disabled"], Kp = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null);
    let i = null, d = null, u = null;
    const f = x(() => {
      const w = n.modelValue?.[n.latKey], y = n.modelValue?.[n.lngKey];
      return typeof w == "number" && typeof y == "number" ? { lat: w, lng: y } : n.center ? n.center : n.markers.length > 0 ? { lat: n.markers[0].lat, lng: n.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function b() {
      if (!s.value || i)
        return;
      const w = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = w, i = w.map(s.value).setView([f.value.lat, f.value.lng], n.zoom), w.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), g(), h(), n.pickable && !n.disabled && i.on("click", (y) => {
        r("update:modelValue", {
          [n.latKey]: Number(y.latlng.lat.toFixed(6)),
          [n.lngKey]: Number(y.latlng.lng.toFixed(6))
        });
      });
    }
    function g() {
      if (!(!i || !u))
        for (const w of n.markers) {
          const y = u.circleMarker([w.lat, w.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (w.label || w.popup) && y.bindPopup(`<strong>${w.label ?? ""}</strong>${w.popup ? `<br>${w.popup}` : ""}`);
        }
    }
    function h() {
      if (!i || !u)
        return;
      const w = n.modelValue?.[n.latKey], y = n.modelValue?.[n.lngKey];
      if (typeof w != "number" || typeof y != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([w, y]) : d = u.circleMarker([w, y], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([w, y], i.getZoom());
    }
    return ve(() => {
      b();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => n.modelValue,
      () => h(),
      { deep: !0 }
    ), (w, y) => (t(), a("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Hp));
  }
}), qp = { class: "flex flex-col gap-2" }, Gp = { class: "text-muted-foreground text-xs font-normal" }, Wp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.modelValue && typeof n.modelValue == "object" ? n.modelValue : null), i = x(() => n.field.latKey ?? "lat"), d = x(() => n.field.lngKey ?? "lng");
    return (u, f) => (t(), a("div", qp, [
      I(Kp, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": f[0] || (f[0] = (b) => r("update:modelValue", b))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", Gp, [
        R(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), a(P, { key: 0 }, [
          R(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), Zp = { class: "flex flex-col gap-2" }, Jp = ["width", "height"], Yp = ["value", "disabled"], Xp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Qp = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = x(() => {
      if (n.field.from) {
        const f = n.values?.[n.field.from];
        return f == null ? "" : String(f);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), d = x(() => n.field.size ?? 160);
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
    return ve(() => {
      u();
    }), me(i, () => {
      u();
    }), (f, b) => (t(), a("div", Zp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Jp),
      e.field.from ? (t(), a("p", Xp, "From " + c(e.field.from), 1)) : (t(), a("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: b[0] || (b[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, Yp))
    ]));
  }
}), ev = { class: "flex flex-col gap-2" }, tv = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, nv = ["aria-label"], av = {
  key: 0,
  class: "text-destructive text-xs"
}, lv = ["value", "disabled"], ov = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, sv = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(null), i = U(null), d = x(() => {
      if (n.field.from) {
        const b = n.values?.[n.field.from];
        return b == null ? "" : String(b);
      }
      return n.modelValue == null ? "" : String(n.modelValue);
    }), u = x(() => (n.field.format ?? "CODE128").toUpperCase());
    async function f() {
      if (!s.value)
        return;
      const b = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (b !== "")
        try {
          const h = (await import("jsbarcode")).default;
          h(s.value, b, {
            format: u.value,
            height: n.field.height ?? 80,
            width: n.field.width ?? 2,
            displayValue: n.field.displayValue !== !1,
            margin: 8,
            background: "#ffffff",
            lineColor: "#0f172a",
            fontSize: 14
          });
        } catch (g) {
          i.value = g instanceof Error ? g.message : "Could not render barcode";
        }
    }
    return ve(() => {
      f();
    }), me([d, u], () => {
      f();
    }), (b, g) => (t(), a("div", ev, [
      o("div", tv, [
        (t(), a("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, nv))
      ]),
      i.value ? (t(), a("p", av, c(i.value), 1)) : $("", !0),
      e.field.from ? (t(), a("p", ov, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), a("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: g[0] || (g[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, lv))
    ]));
  }
}), rv = { class: "mr-2 inline-block w-3 opacity-60" }, iv = {
  key: 0,
  class: "text-muted-foreground p-3"
}, dv = /* @__PURE__ */ O({
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
    const r = x(() => {
      if (l.field.originalKey)
        return n(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return n(d?.original);
    }), s = x(() => {
      if (l.field.modifiedKey)
        return n(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return n(d?.modified);
    }), i = x(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), f = Math.max(d.length, u.length), b = [];
      for (let g = 0; g < f; g++) {
        const h = d[g], w = u[g];
        if (h === w) {
          h !== void 0 && b.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && b.push({ kind: "del", text: h }), w !== void 0 && b.push({ kind: "add", text: w });
      }
      return b;
    });
    return (d, u) => (t(), a("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), a(P, null, V(i.value, (f, b) => (t(), a("div", {
        key: b,
        class: z(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", rv, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        R(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), a("p", iv, "No differences.")) : $("", !0)
    ], 4));
  }
}), uv = { class: "flex flex-col gap-3" }, cv = { class: "flex items-center justify-between gap-2" }, fv = { class: "text-sm font-medium" }, mv = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, pv = { class: "grid grid-cols-7 gap-1" }, vv = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, gv = ["title"], A8 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, n = U(/* @__PURE__ */ new Date()), r = x(() => n.value.getFullYear()), s = x(() => n.value.getMonth()), i = x(
      () => n.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = x(() => {
      const g = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const w = g.get(h.date) ?? [];
        w.push(h), g.set(h.date, w);
      }
      return g;
    }), u = x(() => {
      const h = new Date(r.value, s.value, 1).getDay(), w = new Date(r.value, s.value + 1, 0).getDate(), y = [];
      for (let C = 0; C < h; C++)
        y.push({ day: null, key: `pad-${C}`, events: [] });
      for (let C = 1; C <= w; C++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(C).padStart(2, "0")}`;
        y.push({ day: C, key: M, events: d.value.get(M) ?? [] });
      }
      return y;
    });
    function f() {
      n.value = new Date(r.value, s.value - 1, 1);
    }
    function b() {
      n.value = new Date(r.value, s.value + 1, 1);
    }
    return (g, h) => (t(), a("div", uv, [
      o("div", cv, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", fv, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: b
        }, " Next ")
      ]),
      o("div", mv, [
        (t(), a(P, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (w) => o("span", { key: w }, c(w), 1)), 64))
      ]),
      o("div", pv, [
        (t(!0), a(P, null, V(u.value, (w) => (t(), a("div", {
          key: w.key,
          class: z(["border-border/60 min-h-16 rounded-md border p-1", w.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          w.day ? (t(), a("p", vv, c(w.day), 1)) : $("", !0),
          (t(!0), a(P, null, V(w.events.slice(0, 3), (y, C) => (t(), a("p", {
            key: `${w.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: y.label
          }, c(y.label), 9, gv))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), hv = { class: "flex items-center gap-3" }, bv = ["min", "max", "step", "value", "disabled", "aria-label"], yv = { class: "flex shrink-0 items-center gap-1" }, xv = ["min", "max", "step", "value", "disabled"], kv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, $v = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.field.min ?? 0), i = x(() => n.field.max ?? 100), d = x(() => n.field.step ?? 1), u = x(() => {
      const g = Number(n.modelValue);
      return Number.isFinite(g) ? g : s.value;
    }), f = x(
      () => n.modelValue === null || n.modelValue === void 0 || n.modelValue === ""
    );
    function b(g) {
      if (g === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(g);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (g, h) => (t(), a("div", hv, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: h[0] || (h[0] = (w) => b(w.target.value))
      }, null, 40, bv),
      o("div", yv, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (w) => b(w.target.value))
        }, null, 40, xv),
        e.field.unit ? (t(), a("span", kv, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Vt(e, l) {
  ft.set(e, l);
}
function wv(e) {
  return ft.get(e);
}
function z8(e) {
  return ft.has(e);
}
function Cv() {
  return [...ft.keys()].sort();
}
function P8() {
  ft.clear();
}
const Sv = ["name", "value", "checked", "disabled", "onChange"], Mv = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Bv = { class: "whitespace-nowrap" }, _v = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Av = ["name", "value", "checked", "disabled", "onChange"], zv = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Pv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Ov = { class: "text-center text-xs font-medium" }, Lv = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, jv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Vv = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(
      () => n.field.preview ? wv(n.field.preview) : void 0
    ), i = x(() => !!n.field.preview && !s.value), d = x(() => n.field.layout === "segmented"), u = x(() => {
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
    function f(b) {
      return n.modelValue != null && b.value == n.modelValue;
    }
    return (b, g) => d.value ? (t(), a("div", {
      key: 0,
      role: "radiogroup",
      class: z(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), a(P, null, V(e.options, (h) => (t(), a("label", {
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
        }, null, 40, Sv),
        g[0] || (g[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), a("span", Mv, [
          (t(), D(_e(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", Bv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", _v, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), a("div", {
      key: 1,
      role: "radiogroup",
      class: z(["grid gap-3", u.value])
    }, [
      (t(!0), a(P, null, V(e.options, (h) => (t(), a("label", {
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
        }, null, 40, Av),
        g[1] || (g[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", zv, [
          s.value ? (t(), D(_e(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), a("span", Pv, " no preview ")) : $("", !0)
        ]),
        o("span", Ov, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), a("p", Lv, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), a("p", jv, [
        g[2] || (g[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(k(Cv)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Dv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, Tv = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", Dv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Ev = { class: "flex flex-col items-center gap-1 text-center" }, Iv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, ea = /* @__PURE__ */ O({
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
    const l = e, n = x(() => l.mono ? "#000000" : l.accent), r = x(() => {
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
    return (s, i) => (t(), a("div", Ev, [
      o("div", {
        class: z(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: n.value, color: n.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), a("p", Iv, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Fv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Nv = { class: "flex items-center gap-3" }, Rv = ["src"], Uv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Hv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Kv = {
  key: 0,
  class: "text-right text-sm"
}, qv = { class: "text-neutral-500" }, Gv = { class: "tabular-nums" }, Wv = { key: 1 }, Zv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Jv = { class: "mt-2 font-medium" }, Yv = { key: 2 }, Xv = { class: "w-full text-sm" }, Qv = { class: "w-full py-3 pr-2" }, eg = {
  key: 0,
  class: "text-xs text-neutral-500"
}, tg = { key: 0 }, ng = ["colspan"], ag = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, lg = { class: "w-64 text-sm" }, og = { class: "tabular-nums" }, sg = {
  key: 3,
  class: "py-2"
}, rg = { key: 4 }, ig = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, dg = { class: "mt-2 flex flex-col gap-1 text-sm" }, ug = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, cg = { key: 0 }, fg = {
  key: 1,
  class: "mt-1"
}, mg = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, pg = /* @__PURE__ */ O({
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
    return (f, b) => (t(), a("article", Fv, [
      o("div", Nv, [
        e.document.branding.logoUrl ? (t(), a("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Rv)) : (t(), a("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: n() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), a(P, null, V(e.document.blocks, (g, h) => (t(), a(P, { key: h }, [
        g.type === "header" ? (t(), a("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: n() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: n() })
            }, c(g.title), 5),
            g.subtitle ? (t(), a("p", Uv, c(g.subtitle), 1)) : $("", !0),
            g.reference ? (t(), a("p", Hv, c(g.reference), 1)) : $("", !0)
          ]),
          r(g).length ? (t(), a("dl", Kv, [
            (t(!0), a(P, null, V(r(g), (w, y) => (t(), a("div", {
              key: y,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", qv, c(w.label), 1),
              o("dd", Gv, c(w.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : g.type === "party" ? (t(), a("section", Wv, [
          o("h2", Zv, c(g.heading), 1),
          o("p", Jv, c(g.name), 1),
          (t(!0), a(P, null, V(d(g.lines), (w, y) => (t(), a("p", {
            key: y,
            class: "text-sm text-neutral-600"
          }, c(w), 1))), 128))
        ])) : g.type === "lines" ? (t(), a("section", Yv, [
          o("table", Xv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: n() })
              }, [
                (t(!0), a(P, null, V(d(g.columns), (w, y) => (t(), a("th", {
                  key: y,
                  class: z(["pb-2 font-medium", y > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(w), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), a(P, null, V(s(g), (w, y) => (t(), a("tr", {
                key: y,
                class: "border-b border-neutral-200"
              }, [
                o("td", Qv, [
                  o("p", null, c(w.description), 1),
                  w.detail ? (t(), a("p", eg, c(w.detail), 1)) : $("", !0)
                ]),
                (t(!0), a(P, null, V(w.cells, (C, M) => (t(), a("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(g).length === 0 ? (t(), a("tr", tg, [
                o("td", {
                  colspan: d(g.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(g.empty), 9, ng)
              ])) : $("", !0)
            ])
          ]),
          i(g).length ? (t(), a("div", ag, [
            o("dl", lg, [
              (t(!0), a(P, null, V(i(g), (w, y) => (t(), a("div", {
                key: y,
                class: z([
                  "flex justify-between py-1",
                  w.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(w.strong ? { color: n(), borderColor: n() } : void 0)
              }, [
                o("dt", {
                  class: z(w.strong ? "" : "text-neutral-600")
                }, c(w.label), 3),
                o("dd", og, c(w.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : g.type === "code" ? (t(), a("section", sg, [
          I(ea, {
            code: u(g.code),
            caption: u(g.caption),
            style: se(u(g.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : g.type === "steps" ? (t(), a("section", rg, [
          o("h2", ig, c(g.heading), 1),
          o("ol", dg, [
            (t(!0), a(P, null, V(d(g.items), (w, y) => (t(), a("li", {
              key: y,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: n() })
              }, c(y + 1) + ".", 5),
              o("span", null, c(w), 1)
            ]))), 128))
          ])
        ])) : g.type === "note" ? (t(), a("p", {
          key: 5,
          class: z(["text-sm", g.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(g.emphasis ? { color: n() } : void 0)
        }, c(g.text), 7)) : g.type === "footer" ? (t(), a("footer", ug, [
          g.text ? (t(), a("p", cg, c(g.text), 1)) : $("", !0),
          d(g.contacts).length ? (t(), a("p", fg, c(d(g.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), a("p", mg, " This document contains a “" + c(g.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), vg = ["aria-label", "title"], gg = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hg = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, O8 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: n } = Gn(), r = x(() => l.value.theme === "dark");
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
      (t(), a("svg", gg, [
        r.value ? (t(), a(P, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), a("path", hg))
      ]))
    ], 8, vg));
  }
}), bg = ["width", "height"], yg = { key: 0 }, xg = ["x1", "x2", "y1", "y2"], kg = ["x", "y"], $g = ["x1", "x2", "y1", "y2"], wg = ["x", "y"], Cg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Sg = ["x", "y", "width", "height", "fill", "fill-opacity"], Mg = ["x", "y"], Bg = ["x", "y"], _g = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Ag = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, zg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Pg = { class: "text-xs font-semibold tabular-nums" }, Og = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Lg = { class: "text-muted-foreground" }, $n = 5.6, L8 = /* @__PURE__ */ O({
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
    function s(S, T) {
      if (!l.thresholds?.length)
        return T;
      const j = l.thresholds.find((Y) => S < Y.max);
      return r(j ? j.color : l.aboveColor);
    }
    const i = U(null), d = U(560), u = U(null);
    let f = null;
    ve(() => {
      f = new ResizeObserver((S) => {
        d.value = Math.max(160, S[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ke(() => f?.disconnect());
    const b = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], g = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((T, j) => ({
      ...T,
      color: T.color ?? b[j % b.length]
    }))), h = x(() => g.value[0]?.points.map((S) => S.label) ?? []), w = x(() => h.value.length), y = x(() => l.orientation === "horizontal"), C = x(() => Math.max(0, ...h.value.map((S) => S.length))), M = x(() => {
      if (!y.value)
        return l.showAxis ? 44 : 8;
      const S = C.value * $n + 16;
      return Math.round(Math.min(Math.max(60, S), d.value * 0.4));
    }), B = x(() => Math.max(4, Math.floor((M.value - 16) / $n)));
    function _(S) {
      return S.length <= B.value ? S : `${S.slice(0, B.value - 1)}…`;
    }
    const p = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), m = x(() => ({
      w: Math.max(1, d.value - p.value.left - p.value.right),
      h: Math.max(1, l.height - p.value.top - p.value.bottom)
    })), v = (S) => l.format ? l.format(S) : A(S);
    function A(S) {
      return Math.abs(S) >= 1e6 ? `${(S / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(S) >= 1e3 ? `${(S / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(S * 100) / 100);
    }
    const F = x(() => {
      const S = h.value.map(
        (ge, ye) => l.stacked ? g.value.reduce((oe, Q) => oe + Math.max(0, Q.points[ye]?.value ?? 0), 0) : Math.max(...g.value.map((oe) => oe.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const T = Math.max(...S, 0);
      if (T <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(T));
      return ([1, 2, 2.5, 5, 10].find((ge) => T <= ge * j) ?? 10) * j;
    }), E = x(
      () => (y.value ? m.value.h : m.value.w) / Math.max(1, w.value)
    ), te = x(() => E.value * 0.68), H = x(
      () => l.stacked || g.value.length <= 1 ? te.value : te.value / g.value.length
    ), W = x(() => {
      const S = [], T = new Array(w.value).fill(0);
      return g.value.forEach((j, Y) => {
        j.points.forEach((ge, ye) => {
          const Q = Math.max(0, ge.value) / F.value * (y.value ? m.value.w : m.value.h), ae = (y.value ? p.value.top : p.value.left) + ye * E.value + (E.value - te.value) / 2, Ce = l.stacked ? 0 : Y * H.value;
          S.push(
            y.value ? {
              x: p.value.left + T[ye],
              y: ae + Ce,
              w: Q,
              h: Math.max(0, H.value - 2),
              color: s(ge.value, j.color),
              label: ge.label,
              name: j.name,
              value: ge.value,
              index: ye
            } : {
              x: ae + Ce,
              y: p.value.top + m.value.h - Q - T[ye],
              w: Math.max(0, H.value - 2),
              h: Q,
              color: s(ge.value, j.color),
              label: ge.label,
              name: j.name,
              value: ge.value,
              index: ye
            }
          ), l.stacked && (T[ye] += Q);
        });
      }), S;
    }), J = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        value: F.value * (y.value ? S : 1 - S),
        x: p.value.left + m.value.w * S,
        y: p.value.top + m.value.h * S
      }))
    ), Z = x(() => Math.max(1, Math.ceil(w.value / (y.value ? 14 : 10))));
    function G(S) {
      return S === w.value - 1 || S % Z.value === 0;
    }
    function q(S) {
      return (y.value ? p.value.top : p.value.left) + S * E.value + E.value / 2;
    }
    const N = x(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: g.value.map((S) => ({
        name: S.name,
        color: S.color,
        value: S.points[u.value]?.value ?? 0
      }))
    });
    return (S, T) => (t(), a("div", {
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
          onMouseleave: T[0] || (T[0] = (j) => u.value = null)
        }, [
          e.showAxis ? (t(), a("g", yg, [
            y.value ? (t(), a(P, { key: 0 }, [
              (t(!0), a(P, null, V(J.value, (j) => (t(), a("line", {
                key: `g-${j.x}`,
                x1: j.x,
                x2: j.x,
                y1: p.value.top,
                y2: p.value.top + m.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, xg))), 128)),
              (t(!0), a(P, null, V(J.value, (j) => (t(), a("text", {
                key: `gt-${j.x}`,
                x: j.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, kg))), 128))
            ], 64)) : (t(), a(P, { key: 1 }, [
              (t(!0), a(P, null, V(J.value, (j) => (t(), a("line", {
                key: `g-${j.y}`,
                x1: p.value.left,
                x2: d.value - p.value.right,
                y1: j.y,
                y2: j.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, $g))), 128)),
              (t(!0), a(P, null, V(J.value, (j) => (t(), a("text", {
                key: `gt-${j.y}`,
                x: p.value.left - 8,
                y: j.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, wg))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), a(P, null, V(h.value, (j, Y) => (t(), a("rect", {
            key: `hit-${Y}`,
            x: y.value ? p.value.left : p.value.left + Y * E.value,
            y: y.value ? p.value.top + Y * E.value : p.value.top,
            width: y.value ? m.value.w : E.value,
            height: y.value ? E.value : m.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === Y ? 0.4 : 0,
            onMouseenter: (ge) => u.value = Y
          }, null, 40, Cg))), 128)),
          (t(!0), a(P, null, V(W.value, (j, Y) => (t(), a("rect", {
            key: `b-${Y}`,
            x: j.x,
            y: j.y,
            width: j.w,
            height: j.h,
            fill: j.color,
            "fill-opacity": u.value === null || u.value === j.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Sg))), 128)),
          y.value ? (t(!0), a(P, { key: 1 }, V(h.value, (j, Y) => pe((t(), a("text", {
            key: `c-${Y}`,
            x: p.value.left - 8,
            y: q(Y) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(_(j)) + " ", 1),
            o("title", null, c(j), 1)
          ], 8, Mg)), [
            [He, G(Y)]
          ])), 128)) : (t(!0), a(P, { key: 2 }, V(h.value, (j, Y) => pe((t(), a("text", {
            key: `c-${Y}`,
            x: q(Y),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(j), 9, Bg)), [
            [He, G(Y)]
          ])), 128))
        ], 40, bg)),
        N.value ? (t(), a("div", _g, [
          o("p", Ag, c(N.value.label), 1),
          (t(!0), a(P, null, V(N.value.rows, (j, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", zg, c(j.name || "Value"), 1),
            o("span", Pg, c(v(j.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && g.value.length > 1 ? (t(), a("div", Og, [
          (t(!0), a(P, null, V(g.value, (j, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Lg, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), jg = ["width", "height"], Vg = ["id"], Dg = ["stop-color"], Tg = ["stop-color"], Eg = { key: 0 }, Ig = ["x1", "x2", "y1", "y2"], Fg = ["x", "y"], Ng = ["x", "y"], Rg = ["x1", "x2", "y1", "y2"], Ug = ["d", "fill"], Hg = ["d", "stroke", "stroke-dasharray"], Kg = ["cx", "cy", "fill"], qg = { key: 1 }, Gg = ["x1", "x2", "y1", "y2"], Wg = ["cx", "cy", "fill"], Zg = ["x", "y"], Jg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, Yg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Xg = { class: "text-xs font-semibold tabular-nums" }, Qg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, eh = { class: "text-muted-foreground" }, th = /* @__PURE__ */ O({
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
    const l = e, n = x(() => b.value.some((S) => S.axis === "right")), r = U(null), s = U(560), i = U(null);
    let d = null;
    ve(() => {
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
    ], f = Math.random().toString(36).slice(2, 9), b = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((T, j) => ({
      ...T,
      color: T.color ?? u[j % u.length]
    }))), g = x(() => b.value[0]?.points.map((S) => S.label) ?? []), h = x(() => g.value.length), w = x(() => ({
      top: 12,
      right: l.showAxis && n.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), y = (S) => l.format ? l.format(S) : C(S);
    function C(S) {
      return Math.abs(S) >= 1e6 ? `${(S / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(S) >= 1e3 ? `${(S / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(S * 100) / 100);
    }
    function M(S) {
      const T = Math.max(...S, 0);
      if (T <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(T));
      return ([1, 2, 2.5, 5, 10].find((ge) => T <= ge * j) ?? 10) * j;
    }
    const B = x(
      () => M(
        b.value.filter((S) => S.axis !== "right").flatMap((S) => S.points.map((T) => T.value))
      )
    ), _ = x(
      () => M(
        b.value.filter((S) => S.axis === "right").flatMap((S) => S.points.map((T) => T.value))
      )
    ), p = x(() => ({
      w: Math.max(1, s.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function m(S) {
      return w.value.left + (h.value <= 1 ? 0 : S / (h.value - 1) * p.value.w);
    }
    function v(S, T = "left") {
      const j = T === "right" ? _.value : B.value;
      return w.value.top + p.value.h - S / j * p.value.h;
    }
    const A = x(
      () => b.value.map((S) => {
        const T = S.points.map((Y, ge) => ({
          ...Y,
          x: m(ge),
          y: v(Y.value, S.axis ?? "left")
        })), j = S.stepped ? F(T) : E(T);
        return { ...S, pts: T, line: j, area: te(j, T) };
      })
    );
    function F(S) {
      if (S.length === 0)
        return "";
      let T = `M${S[0].x.toFixed(2)},${S[0].y.toFixed(2)}`;
      for (let j = 1; j < S.length; j++)
        T += ` L${S[j].x.toFixed(2)},${S[j - 1].y.toFixed(2)} L${S[j].x.toFixed(2)},${S[j].y.toFixed(2)}`;
      return T;
    }
    function E(S) {
      const T = S.length;
      if (T === 0)
        return "";
      if (T === 1)
        return `M${S[0].x},${S[0].y}`;
      const j = [], Y = [];
      for (let oe = 0; oe < T - 1; oe++)
        j[oe] = S[oe + 1].x - S[oe].x, Y[oe] = j[oe] === 0 ? 0 : (S[oe + 1].y - S[oe].y) / j[oe];
      const ge = [Y[0]];
      for (let oe = 1; oe < T - 1; oe++)
        if (Y[oe - 1] * Y[oe] <= 0)
          ge[oe] = 0;
        else {
          const Q = 2 * j[oe] + j[oe - 1], ae = j[oe] + 2 * j[oe - 1];
          ge[oe] = (Q + ae) / (Q / Y[oe - 1] + ae / Y[oe]);
        }
      ge[T - 1] = Y[T - 2];
      let ye = `M${S[0].x.toFixed(2)},${S[0].y.toFixed(2)}`;
      for (let oe = 0; oe < T - 1; oe++) {
        const Q = j[oe] / 3;
        ye += ` C${(S[oe].x + Q).toFixed(2)},${(S[oe].y + ge[oe] * Q).toFixed(2)} ${(S[oe + 1].x - Q).toFixed(2)},${(S[oe + 1].y - ge[oe + 1] * Q).toFixed(2)} ${S[oe + 1].x.toFixed(2)},${S[oe + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function te(S, T) {
      if (T.length === 0)
        return "";
      const j = w.value.top + p.value.h;
      return `${S} L${T[T.length - 1].x.toFixed(2)},${j} L${T[0].x.toFixed(2)},${j} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        y: w.value.top + p.value.h * S,
        value: B.value * (1 - S)
      }))
    ), W = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((S) => ({
        y: w.value.top + p.value.h * S,
        value: _.value * (1 - S)
      }))
    ), J = x(() => Math.max(1, Math.ceil(h.value / 8)));
    function Z(S) {
      return S === h.value - 1 || S % J.value === 0;
    }
    function G(S) {
      const T = S.currentTarget.getBoundingClientRect(), j = S.clientX - T.left - w.value.left, Y = h.value <= 1 ? 1 : p.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(j / Y)));
    }
    const q = x(() => {
      if (i.value === null || h.value === 0)
        return null;
      const S = i.value;
      return {
        i: S,
        x: m(S),
        label: g.value[S],
        rows: A.value.map((T) => ({
          name: T.name,
          color: T.color,
          value: T.points[S]?.value ?? 0,
          y: T.pts[S]?.y ?? 0
        }))
      };
    }), N = x(() => {
      if (!q.value)
        return {};
      const S = q.value.x > s.value * 0.6;
      return {
        left: `${q.value.x}px`,
        top: "8px",
        transform: S ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (S, T) => (t(), a("div", {
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
          onMousemove: G,
          onMouseleave: T[0] || (T[0] = (j) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), a(P, null, V(A.value, (j, Y) => (t(), a("linearGradient", {
              id: `pk-fill-${k(f)}-${Y}`,
              key: Y,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": j.color,
                "stop-opacity": "0.25"
              }, null, 8, Dg),
              o("stop", {
                offset: "100%",
                "stop-color": j.color,
                "stop-opacity": "0.01"
              }, null, 8, Tg)
            ], 8, Vg))), 128))
          ]),
          e.showAxis ? (t(), a("g", Eg, [
            (t(!0), a(P, null, V(H.value, (j) => (t(), a("line", {
              key: j.y,
              x1: w.value.left,
              x2: s.value - w.value.right,
              y1: j.y,
              y2: j.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Ig))), 128)),
            (t(!0), a(P, null, V(H.value, (j) => (t(), a("text", {
              key: `t-${j.y}`,
              x: w.value.left - 8,
              y: j.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, Fg))), 128)),
            n.value ? (t(!0), a(P, { key: 0 }, V(W.value, (j) => (t(), a("text", {
              key: `rt-${j.y}`,
              x: s.value - w.value.right + 8,
              y: j.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, Ng))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), a(P, null, V(g.value, (j, Y) => pe((t(), a("line", {
            key: `v-${Y}`,
            x1: m(Y),
            x2: m(Y),
            y1: w.value.top,
            y2: w.value.top + p.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Rg)), [
            [He, Z(Y)]
          ])), 128)),
          (t(!0), a(P, null, V(A.value, (j, Y) => (t(), a("g", {
            key: `s-${Y}`
          }, [
            j.filled ?? e.type === "area" ? (t(), a("path", {
              key: 0,
              d: j.area,
              fill: `url(#pk-fill-${k(f)}-${Y})`
            }, null, 8, Ug)) : $("", !0),
            o("path", {
              d: j.line,
              fill: "none",
              stroke: j.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": j.dashed ? "6 4" : void 0
            }, null, 8, Hg),
            j.pts.length === 1 ? (t(), a("circle", {
              key: 1,
              cx: j.pts[0].x,
              cy: j.pts[0].y,
              r: "3",
              fill: j.color
            }, null, 8, Kg)) : $("", !0)
          ]))), 128)),
          q.value ? (t(), a("g", qg, [
            o("line", {
              x1: q.value.x,
              x2: q.value.x,
              y1: w.value.top,
              y2: w.value.top + p.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Gg),
            (t(!0), a(P, null, V(q.value.rows, (j, Y) => (t(), a("circle", {
              key: `d-${Y}`,
              cx: q.value.x,
              cy: j.y,
              r: "4",
              fill: j.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, Wg))), 128))
          ])) : $("", !0),
          (t(!0), a(P, null, V(g.value, (j, Y) => pe((t(), a("text", {
            key: `x-${Y}`,
            x: m(Y),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(j), 9, Zg)), [
            [He, Z(Y)]
          ])), 128))
        ], 40, jg)),
        q.value ? (t(), a("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(N.value)
        }, [
          o("p", Jg, c(q.value.label), 1),
          (t(!0), a(P, null, V(q.value.rows, (j, Y) => (t(), a("div", {
            key: Y,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Yg, c(j.name || "Value"), 1),
            o("span", Xg, c(y(j.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && b.value.length > 1 ? (t(), a("div", Qg, [
          (t(!0), a(P, null, V(A.value, (j, Y) => (t(), a("span", {
            key: Y,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", eh, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), nh = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, ah = { class: "text-muted-foreground text-[11px] capitalize" }, lh = { class: "text-sm font-semibold tabular-nums" }, oh = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, mt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, n) => (t(), a("div", nh, [
      o("p", ah, c(e.label), 1),
      o("p", lh, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), a("span", oh, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), sh = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, rh = ["width", "height", "viewBox", "aria-label"], ih = ["d", "fill", "fill-opacity", "onMouseenter"], dh = ["x", "y"], uh = ["x", "y"], ch = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, fh = ["onMouseenter"], mh = { class: "min-w-0 flex-1 truncate capitalize" }, ph = { class: "tabular-nums font-medium" }, vh = { class: "text-muted-foreground w-9 text-right tabular-nums" }, j8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((B, _) => B + _.value, 0)), s = U(null), i = x(() => l.height), d = x(() => i.value / 2 - 4), u = x(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(B) {
      return n[B % n.length];
    }
    function b(B) {
      return 1 - Math.min(0.55, Math.floor(B / n.length) * 0.28);
    }
    const g = x(() => {
      if (r.value <= 0)
        return [];
      const B = i.value / 2;
      let _ = -Math.PI / 2;
      return l.data.map((p, m) => {
        const v = p.value / r.value, A = v * Math.PI * 2, F = _, E = _ + A;
        return _ = E, {
          ...p,
          share: v,
          colour: f(m),
          opacity: b(m),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: v >= 0.9999 ? y(B) : w(B, F, E, d.value, u.value)
        };
      });
    });
    function h(B, _, p) {
      return `${(B + Math.cos(_) * p).toFixed(2)},${(B + Math.sin(_) * p).toFixed(2)}`;
    }
    function w(B, _, p, m, v) {
      const A = p - _ > Math.PI ? 1 : 0;
      return v <= 0 ? `M${B},${B} L${h(B, _, m)} A${m},${m} 0 ${A} 1 ${h(B, p, m)} Z` : [
        `M${h(B, _, m)}`,
        `A${m},${m} 0 ${A} 1 ${h(B, p, m)}`,
        `L${h(B, p, v)}`,
        `A${v},${v} 0 ${A} 0 ${h(B, _, v)}`,
        "Z"
      ].join(" ");
    }
    function y(B) {
      const _ = d.value, p = u.value, m = [
        `M${B - _},${B}`,
        `A${_},${_} 0 1 1 ${B + _},${B}`,
        `A${_},${_} 0 1 1 ${B - _},${B}`,
        "Z"
      ];
      return p <= 0 ? m.join(" ") : [
        ...m,
        `M${B - p},${B}`,
        `A${p},${p} 0 1 0 ${B + p},${B}`,
        `A${p},${p} 0 1 0 ${B - p},${B}`,
        "Z"
      ].join(" ");
    }
    const C = (B) => l.format ? l.format(B) : new Intl.NumberFormat().format(B), M = (B) => `${(B * 100).toFixed(B < 0.01 ? 2 : 0)}%`;
    return (B, _) => r.value <= 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", sh, [
      (t(), a("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), a(P, null, V(g.value, (p, m) => (t(), a("path", {
          key: m,
          d: p.path,
          fill: p.colour,
          "fill-opacity": s.value === null || s.value === m ? p.opacity : p.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (v) => s.value = m,
          onMouseleave: _[0] || (_[0] = (v) => s.value = null)
        }, null, 40, ih))), 128)),
        e.type === "doughnut" ? (t(), a(P, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : g.value[s.value].value)), 9, dh),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : g.value[s.value].label), 9, uh)
        ], 64)) : $("", !0)
      ], 8, rh)),
      o("ul", ch, [
        (t(!0), a(P, null, V(g.value, (p, m) => (t(), a("li", {
          key: m,
          class: z(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === m ? "bg-muted" : ""]),
          onMouseenter: (v) => s.value = m,
          onMouseleave: _[1] || (_[1] = (v) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: p.colour, opacity: p.opacity })
          }, null, 4),
          o("span", mh, c(p.label), 1),
          o("span", ph, c(C(p.value)), 1),
          o("span", vh, c(M(p.share)), 1)
        ], 42, fh))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(mt, {
        key: 0,
        label: g.value[s.value].label,
        value: C(g.value[s.value].value),
        share: M(g.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), gh = ["width", "height", "viewBox", "aria-label"], hh = { class: "text-border" }, bh = ["x1", "x2", "y1", "y2", "stroke-dasharray"], yh = { class: "fill-muted-foreground text-[10px]" }, xh = ["x", "y"], kh = ["x", "y"], $h = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], wh = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, V8 = /* @__PURE__ */ O({
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
    ], r = U(null), s = U(560), i = U(null);
    let d = null;
    ve(() => {
      d = new ResizeObserver((J) => {
        const Z = J[0]?.contentRect.width ?? 0;
        Z > 0 && (s.value = Z);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (J, Z) => Z.color ?? n[J % n.length], b = x(() => u.value.flatMap((J) => J.points)), g = x(() => b.value.some((J) => typeof J.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, w = x(() => Math.max(10, s.value - h.left - h.right)), y = x(() => Math.max(10, l.height - h.top - h.bottom));
    function C(J) {
      if (J.length === 0)
        return [0, 1];
      const Z = Math.min(...J), G = Math.max(...J), q = G - Z || Math.abs(G) || 1;
      return [Z - q * 0.08, G + q * 0.08];
    }
    const M = x(() => C(b.value.map((J) => J.x))), B = x(() => C(b.value.map((J) => J.y))), _ = (J) => {
      const [Z, G] = M.value;
      return h.left + (J - Z) / (G - Z) * w.value;
    }, p = (J) => {
      const [Z, G] = B.value;
      return h.top + y.value - (J - Z) / (G - Z) * y.value;
    }, m = x(() => Math.max(...b.value.map((J) => J.r ?? 0), 0));
    function v(J) {
      if (!g.value || !m.value)
        return 4;
      const Z = Math.max(0, J.r ?? 0) / m.value;
      return 3 + Math.sqrt(Z) * (l.maxRadius - 3);
    }
    function A([J, Z]) {
      return Array.from({ length: 5 }, (G, q) => J + (Z - J) / 4 * q);
    }
    const F = x(() => A(M.value)), E = x(() => A(B.value)), te = (J) => l.formatX?.(J) ?? String(Math.round(J * 100) / 100), H = (J) => l.formatY?.(J) ?? String(Math.round(J * 100) / 100), W = x(() => {
      if (!i.value)
        return null;
      const J = u.value[i.value.s], Z = J?.points[i.value.p];
      return Z ? { series: J, point: Z } : null;
    });
    return (J, Z) => (t(), a("div", {
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
        "aria-label": g.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", hh, [
          (t(!0), a(P, null, V(E.value, (G, q) => (t(), a("line", {
            key: `gy-${q}`,
            x1: h.left,
            x2: h.left + w.value,
            y1: p(G),
            y2: p(G),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": q === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, bh))), 128))
        ]),
        o("g", yh, [
          (t(!0), a(P, null, V(E.value, (G, q) => (t(), a("text", {
            key: `ty-${q}`,
            x: h.left - 8,
            y: p(G) + 3,
            "text-anchor": "end"
          }, c(H(G)), 9, xh))), 128)),
          (t(!0), a(P, null, V(F.value, (G, q) => (t(), a("text", {
            key: `tx-${q}`,
            x: _(G),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(te(G)), 9, kh))), 128))
        ]),
        (t(!0), a(P, null, V(u.value, (G, q) => (t(), a("g", {
          key: `s-${q}`
        }, [
          (t(!0), a(P, null, V(G.points, (N, S) => (t(), a("circle", {
            key: `p-${q}-${S}`,
            cx: _(N.x),
            cy: p(N.y),
            r: v(N),
            fill: f(q, G),
            "fill-opacity": g.value ? 0.55 : 0.85,
            stroke: f(q, G),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== q || i.value.p !== S) ? 0.35 : 1,
            onMouseenter: (T) => i.value = { s: q, p: S },
            onMouseleave: Z[0] || (Z[0] = (T) => i.value = null)
          }, null, 40, $h))), 128))
        ]))), 128))
      ], 8, gh)),
      W.value ? (t(), D(mt, {
        key: 0,
        label: W.value.point.label ?? W.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(W.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(W.value.point.y)}`,
        share: g.value && W.value.point.r != null ? String(W.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && u.value.length > 1 ? (t(), a("div", wh, [
        (t(!0), a(P, null, V(u.value, (G, q) => (t(), a("span", {
          key: `l-${q}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: f(q, G) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + c(G.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), Ch = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Sh = ["width", "height", "viewBox"], Mh = ["points"], Bh = ["x1", "y1", "x2", "y2"], _h = ["points", "fill", "stroke"], Ah = ["cx", "cy", "fill", "onMouseenter"], zh = ["x", "y", "text-anchor"], Ph = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Oh = { class: "truncate" }, D8 = /* @__PURE__ */ O({
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
    ], r = x(
      () => l.series.map((p, m) => ({
        ...p,
        color: p.color ?? n[m % n.length]
      }))
    ), s = x(() => r.value[0]?.points.map((p) => p.label) ?? []), i = x(() => s.value.length), d = x(() => l.height), u = x(() => d.value / 2), f = x(() => d.value / 2 - 34), b = x(() => {
      const p = Math.max(...r.value.flatMap((A) => A.points.map((F) => F.value)), 0);
      if (p <= 0)
        return 1;
      const m = 10 ** Math.floor(Math.log10(p));
      return ([1, 2, 2.5, 5, 10].find((A) => p <= A * m) ?? 10) * m;
    });
    function g(p) {
      return p / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(p, m) {
      const v = g(p);
      return {
        x: u.value + Math.cos(v) * f.value * m,
        y: u.value + Math.sin(v) * f.value * m
      };
    }
    function w(p) {
      return Array.from({ length: i.value }, (m, v) => {
        const A = h(v, p);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const y = x(() => [0.25, 0.5, 0.75, 1].map((p) => ({ f: p, points: w(p) }))), C = x(
      () => r.value.map((p) => {
        const m = p.points.map((v) => Math.max(0, v.value) / b.value);
        return {
          name: p.name,
          color: p.color,
          values: p.points,
          outline: m.map((v, A) => {
            const F = h(A, v);
            return `${F.x.toFixed(2)},${F.y.toFixed(2)}`;
          }).join(" "),
          dots: m.map((v, A) => h(A, v))
        };
      })
    ), M = x(
      () => s.value.map((p, m) => {
        const v = g(m), A = u.value + Math.cos(v) * (f.value + 14), F = u.value + Math.sin(v) * (f.value + 14), E = Math.cos(v);
        return {
          label: p,
          x: A,
          y: F + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), B = U(null), _ = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, m) => i.value < 3 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), a("div", Ch, [
      (t(), a("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(y.value, (v) => (t(), a("polygon", {
          key: v.f,
          points: v.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Mh))), 128)),
        (t(!0), a(P, null, V(s.value, (v, A) => (t(), a("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Bh))), 128)),
        (t(!0), a(P, null, V(C.value, (v, A) => (t(), a("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: v.outline,
            fill: v.color,
            "fill-opacity": "0.16",
            stroke: v.color,
            "stroke-width": "2"
          }, null, 8, _h),
          (t(!0), a(P, null, V(v.dots, (F, E) => (t(), a("circle", {
            key: E,
            cx: F.x,
            cy: F.y,
            r: "3",
            fill: v.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => B.value = {
              series: v.name,
              axis: s.value[E],
              value: v.values[E]?.value ?? 0
            },
            onMouseleave: m[0] || (m[0] = (te) => B.value = null)
          }, null, 40, Ah))), 128))
        ]))), 128)),
        (t(!0), a(P, null, V(M.value, (v, A) => (t(), a("text", {
          key: `l-${A}`,
          x: v.x,
          y: v.y,
          "text-anchor": v.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(v.label), 9, zh))), 128))
      ], 8, Sh)),
      e.showLegend ? (t(), a("ul", Ph, [
        (t(!0), a(P, null, V(r.value, (v, A) => (t(), a("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: v.color })
          }, null, 4),
          o("span", Oh, c(v.name), 1)
        ]))), 128))
      ])) : $("", !0),
      B.value ? (t(), D(mt, {
        key: 1,
        label: `${B.value.series} — ${B.value.axis}`,
        value: _(B.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Lh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, jh = ["width", "height", "viewBox"], Vh = ["cx", "cy", "r"], Dh = ["d", "fill", "fill-opacity", "onMouseenter"], Th = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Eh = { class: "min-w-0 flex-1 truncate capitalize" }, Ih = { class: "font-medium tabular-nums" }, T8 = /* @__PURE__ */ O({
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
    ], r = U(null), s = x(() => l.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...l.data.map((w) => Math.max(0, w.value)), 0)), f = x(() => {
      const w = l.data.length;
      if (w === 0 || u.value <= 0)
        return [];
      const y = Math.PI * 2 / w;
      return l.data.map((C, M) => {
        const B = Math.sqrt(Math.max(0, C.value) / u.value), _ = d.value * B, p = M * y - Math.PI / 2, m = p + y;
        return {
          ...C,
          color: n[M % n.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: b(i.value, p, m, _)
        };
      });
    });
    function b(w, y, C, M) {
      if (M <= 0)
        return "";
      if (C - y >= Math.PI * 2 - 1e-6)
        return `M${w - M},${w} A${M},${M} 0 1 1 ${w + M},${w} A${M},${M} 0 1 1 ${w - M},${w} Z`;
      const B = C - y > Math.PI ? 1 : 0, _ = w + Math.cos(y) * M, p = w + Math.sin(y) * M, m = w + Math.cos(C) * M, v = w + Math.sin(C) * M;
      return `M${w},${w} L${_.toFixed(2)},${p.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${B} 1 ${m.toFixed(2)},${v.toFixed(2)} Z`;
    }
    const g = x(() => [0.5, 0.75, 1].map((w) => d.value * w)), h = (w) => l.format ? l.format(w) : new Intl.NumberFormat().format(w);
    return (w, y) => f.value.length === 0 ? (t(), a("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), a("div", Lh, [
      (t(), a("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), a(P, null, V(g.value, (C) => (t(), a("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Vh))), 128)),
        (t(!0), a(P, null, V(f.value, (C, M) => (t(), a("path", {
          key: M,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (B) => r.value = M,
          onMouseleave: y[0] || (y[0] = (B) => r.value = null)
        }, null, 40, Dh))), 128))
      ], 8, jh)),
      e.showLegend ? (t(), a("ul", Th, [
        (t(!0), a(P, null, V(f.value, (C, M) => (t(), a("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", Eh, c(C.label), 1),
          o("span", Ih, c(h(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), D(mt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Fh = ["width", "height"], Nh = ["x1", "x2", "y1", "y2"], Rh = ["x", "y"], Uh = ["x", "y"], Hh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Kh = ["x", "y", "width", "height", "fill", "fill-opacity"], qh = ["d", "stroke"], Gh = ["cx", "cy", "fill"], Wh = ["x", "y"], Zh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Jh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Yh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Xh = { class: "text-xs font-semibold tabular-nums" }, Qh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, eb = { class: "text-muted-foreground" }, E8 = /* @__PURE__ */ O({
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
    const l = e, n = U(null), r = U(560), s = U(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((q) => {
        r.value = Math.max(160, q[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = x(
      () => l.bars.map((q, N) => ({
        ...q,
        color: q.color ?? d[N % d.length]
      }))
    ), b = x(
      () => l.lines.map((q, N) => ({
        ...q,
        color: q.color ?? u[N % u.length]
      }))
    ), g = x(
      () => f.value[0]?.points.map((q) => q.label) ?? b.value[0]?.points.map((q) => q.label) ?? []
    ), h = x(() => g.value.length), w = x(() => l.lineAxis === "right"), y = x(() => ({
      top: 12,
      right: w.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = x(() => ({
      w: Math.max(1, r.value - y.value.left - y.value.right),
      h: Math.max(1, l.height - y.value.top - y.value.bottom)
    }));
    function M(q) {
      const N = Math.max(...q, 0);
      if (N <= 0)
        return 1;
      const S = 10 ** Math.floor(Math.log10(N));
      return ([1, 2, 2.5, 5, 10].find((j) => N <= j * S) ?? 10) * S;
    }
    const B = x(
      () => M([
        ...f.value.flatMap((q) => q.points.map((N) => N.value)),
        ...w.value ? [] : b.value.flatMap((q) => q.points.map((N) => N.value))
      ])
    ), _ = x(
      () => w.value ? M(b.value.flatMap((q) => q.points.map((N) => N.value))) : B.value
    ), p = x(() => C.value.w / Math.max(1, h.value)), m = x(() => p.value * 0.6), v = x(() => m.value / Math.max(1, f.value.length));
    function A(q) {
      return y.value.left + q * p.value + p.value / 2;
    }
    const F = x(
      () => f.value.flatMap(
        (q, N) => q.points.map((S, T) => {
          const j = Math.max(0, S.value) / B.value * C.value.h;
          return {
            x: A(T) - m.value / 2 + N * v.value,
            y: y.value.top + C.value.h - j,
            w: Math.max(0, v.value - 2),
            h: j,
            color: q.color,
            index: T,
            name: q.name,
            value: S.value,
            label: S.label
          };
        })
      )
    ), E = x(
      () => b.value.map((q) => {
        const N = q.points.map((S, T) => ({
          x: A(T),
          y: y.value.top + C.value.h - Math.max(0, S.value) / _.value * C.value.h,
          value: S.value
        }));
        return {
          ...q,
          pts: N,
          d: N.map((S, T) => `${T === 0 ? "M" : "L"}${S.x.toFixed(2)},${S.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((q) => ({
        y: y.value.top + C.value.h * q,
        left: B.value * (1 - q),
        right: _.value * (1 - q)
      }))
    ), H = x(() => Math.max(1, Math.ceil(h.value / 10)));
    function W(q) {
      return q === h.value - 1 || q % H.value === 0;
    }
    const J = (q) => l.format ? l.format(q) : Z(q);
    function Z(q) {
      return Math.abs(q) >= 1e6 ? `${(q / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(q) >= 1e3 ? `${(q / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(q * 100) / 100);
    }
    const G = x(() => {
      if (s.value === null)
        return null;
      const q = s.value;
      return {
        label: g.value[q],
        rows: [
          ...f.value.map((N) => ({
            name: N.name,
            color: N.color,
            value: N.points[q]?.value ?? 0
          })),
          ...b.value.map((N) => ({
            name: N.name,
            color: N.color,
            value: N.points[q]?.value ?? 0
          }))
        ]
      };
    });
    return (q, N) => (t(), a("div", {
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
          onMouseleave: N[0] || (N[0] = (S) => s.value = null)
        }, [
          (t(!0), a(P, null, V(te.value, (S) => (t(), a("line", {
            key: `g-${S.y}`,
            x1: y.value.left,
            x2: r.value - y.value.right,
            y1: S.y,
            y2: S.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Nh))), 128)),
          (t(!0), a(P, null, V(te.value, (S) => (t(), a("text", {
            key: `lt-${S.y}`,
            x: y.value.left - 8,
            y: S.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(Z(S.left)), 9, Rh))), 128)),
          w.value ? (t(!0), a(P, { key: 0 }, V(te.value, (S) => (t(), a("text", {
            key: `rt-${S.y}`,
            x: r.value - y.value.right + 8,
            y: S.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(Z(S.right)), 9, Uh))), 128)) : $("", !0),
          (t(!0), a(P, null, V(g.value, (S, T) => (t(), a("rect", {
            key: `hit-${T}`,
            x: y.value.left + T * p.value,
            y: y.value.top,
            width: p.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === T ? 0.4 : 0,
            onMouseenter: (j) => s.value = T
          }, null, 40, Hh))), 128)),
          (t(!0), a(P, null, V(F.value, (S, T) => (t(), a("rect", {
            key: `b-${T}`,
            x: S.x,
            y: S.y,
            width: S.w,
            height: S.h,
            fill: S.color,
            "fill-opacity": s.value === null || s.value === S.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Kh))), 128)),
          (t(!0), a(P, null, V(E.value, (S, T) => (t(), a("g", {
            key: `l-${T}`
          }, [
            o("path", {
              d: S.d,
              fill: "none",
              stroke: S.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, qh),
            s.value !== null && S.pts[s.value] ? (t(), a("circle", {
              key: 0,
              cx: S.pts[s.value].x,
              cy: S.pts[s.value].y,
              r: "4",
              fill: S.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Gh)) : $("", !0)
          ]))), 128)),
          (t(!0), a(P, null, V(g.value, (S, T) => pe((t(), a("text", {
            key: `x-${T}`,
            x: A(T),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(S), 9, Wh)), [
            [He, W(T)]
          ])), 128))
        ], 40, Fh)),
        G.value ? (t(), a("div", Zh, [
          o("p", Jh, c(G.value.label), 1),
          (t(!0), a(P, null, V(G.value.rows, (S, T) => (t(), a("div", {
            key: T,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: S.color })
            }, null, 4),
            o("span", Yh, c(S.name), 1),
            o("span", Xh, c(J(S.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), a("div", Qh, [
          (t(!0), a(P, null, V([...f.value, ...b.value], (S, T) => (t(), a("span", {
            key: T,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: S.color })
            }, null, 4),
            o("span", eb, c(S.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), tb = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, nb = { class: "text-muted-foreground" }, ab = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, lb = ["width", "height"], ob = ["x", "y"], sb = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], rb = ["x", "y"], ib = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, db = { class: "text-[11px] font-medium capitalize" }, ub = { class: "text-muted-foreground text-[11px] capitalize" }, cb = { class: "text-sm font-semibold tabular-nums" }, fb = { class: "text-muted-foreground text-xs font-normal" }, I8 = /* @__PURE__ */ O({
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
    const l = e, n = U(null), r = U(560), s = U(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((m) => {
        r.value = Math.max(160, m[0].contentRect.width);
      }), n.value && i.observe(n.value);
    }), ke(() => i?.disconnect());
    const d = x(() => l.series[0]?.points.map((m) => m.label) ?? []), u = x(() => l.series.length), f = x(() => d.value.length), b = x(() => Math.min(140, Math.max(60, r.value * 0.16))), g = x(() => Math.max(1, r.value - b.value - 8)), h = x(() => g.value / Math.max(1, f.value)), w = x(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function y(m) {
      if (m === 0)
        return "var(--muted)";
      const v = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(m / v * 100)}%, var(--muted))`;
    }
    function C(m) {
      for (let v = 0; v < l.buckets.length; v++) {
        const A = l.buckets[v].max;
        if (A === void 0 || m < A)
          return v;
      }
      return l.buckets.length - 1;
    }
    const M = x(
      () => l.series.flatMap(
        (m, v) => m.points.map((A, F) => {
          const E = C(A.value);
          return {
            row: v,
            col: F,
            x: b.value + F * h.value,
            y: 4 + v * w.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, w.value - 4),
            colour: y(E),
            label: A.label,
            value: A.value,
            rowName: m.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), B = x(() => h.value < 2), _ = x(() => s.value ? M.value.find((m) => m.row === s.value.row && m.col === s.value.col) ?? null : null), p = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, v) => (t(), a("div", {
      ref_key: "host",
      ref: n,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), a("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), a(P, { key: 1 }, [
        o("div", tb, [
          (t(!0), a(P, null, V(e.buckets, (A, F) => (t(), a("span", {
            key: F,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: y(F) })
            }, null, 4),
            o("span", nb, c(A.label), 1)
          ]))), 128))
        ]),
        B.value ? (t(), a("p", ab, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), a("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: v[0] || (v[0] = (A) => s.value = null)
        }, [
          (t(!0), a(P, null, V(e.series, (A, F) => (t(), a("text", {
            key: `r-${F}`,
            x: b.value - 10,
            y: 4 + F * w.value + w.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(A.name), 9, ob))), 128)),
          (t(!0), a(P, null, V(M.value, (A, F) => (t(), a("rect", {
            key: F,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: A.row, col: A.col }
          }, null, 40, sb))), 128)),
          e.showColumnLabels && !B.value ? (t(!0), a(P, { key: 0 }, V(d.value, (A, F) => (t(), a("text", {
            key: `c-${F}`,
            x: b.value + F * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(A), 9, rb))), 128)) : $("", !0)
        ], 40, lb)),
        _.value ? (t(), a("div", ib, [
          o("p", db, c(_.value.label), 1),
          o("p", ub, c(_.value.rowName), 1),
          o("p", cb, [
            R(c(p(_.value.value)) + " ", 1),
            o("span", fb, "(" + c(_.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), mb = ["viewBox"], pb = { key: 0 }, vb = ["id"], gb = ["stop-color"], hb = ["stop-color"], bb = ["d", "fill"], yb = ["d", "stroke"], wn = 100, ot = 30, zt = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = Math.random().toString(36).slice(2, 9), r = x(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const f = Math.min(...u), g = Math.max(...u) - f || 1;
      return u.map((h, w) => ({
        x: w / (u.length - 1) * wn,
        y: ot - (h - f) / g * (ot - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const b = [], g = [];
      for (let y = 0; y < f - 1; y++)
        b[y] = u[y + 1].x - u[y].x, g[y] = b[y] === 0 ? 0 : (u[y + 1].y - u[y].y) / b[y];
      const h = [g[0]];
      for (let y = 1; y < f - 1; y++)
        if (g[y - 1] * g[y] <= 0)
          h[y] = 0;
        else {
          const C = 2 * b[y] + b[y - 1], M = b[y] + 2 * b[y - 1];
          h[y] = (C + M) / (C / g[y - 1] + M / g[y]);
        }
      h[f - 1] = g[f - 2];
      let w = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let y = 0; y < f - 1; y++) {
        const C = b[y] / 3;
        w += ` C${(u[y].x + C).toFixed(2)},${(u[y].y + h[y] * C).toFixed(2)} ${(u[y + 1].x - C).toFixed(2)},${(u[y + 1].y - h[y + 1] * C).toFixed(2)} ${u[y + 1].x.toFixed(2)},${u[y + 1].y.toFixed(2)}`;
      }
      return w;
    }
    const i = x(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((f, b) => `${b === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), d = x(() => {
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
      e.filled ? (t(), a("defs", pb, [
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
          }, null, 8, gb),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, hb)
        ], 8, vb)
      ])) : $("", !0),
      e.filled ? (t(), a("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(n)})`
      }, null, 8, bb)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, yb)
    ], 12, mb)) : $("", !0);
  }
}), xb = { class: "flex items-center gap-1 text-xs" }, kb = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, $b = {
  key: 0,
  class: "text-muted-foreground truncate"
}, ta = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = x(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = x(
      () => n.value === null ? "text-muted-foreground" : n.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = x(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = x(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), a("span", xb, [
      o("span", {
        class: z(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", kb, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), a("span", $b, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), wb = ["data-collapsed"], Cb = { class: "flex flex-wrap items-start justify-between gap-2" }, Sb = { class: "flex min-w-0 items-start gap-2" }, Mb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bb = ["d"], _b = { class: "min-w-0" }, Ab = { class: "text-sm font-medium" }, zb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Pb = { class: "flex shrink-0 items-center gap-1.5" }, Ob = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Lb = ["aria-pressed", "onClick"], jb = ["aria-expanded", "aria-label", "title"], Vb = ["aria-label"], Db = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Tb = ["d"], Eb = /* @__PURE__ */ O({
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
    const l = e, n = qt(), r = U(l.defaultCollapsed), s = x(() => !!l.icon && !n.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), a("div", {
      class: z(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Cb, [
        o("div", Sb, [
          K(d.$slots, "icon", {}, () => [
            s.value ? (t(), a("svg", Mb, [
              o("path", {
                d: k(ce)(e.icon)
              }, null, 8, Bb)
            ])) : $("", !0)
          ]),
          o("div", _b, [
            o("p", Ab, c(e.label), 1),
            e.description ? (t(), a("p", zb, c(e.description), 1)) : $("", !0),
            K(d.$slots, "trend")
          ])
        ]),
        o("div", Pb, [
          K(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), a("div", Ob, [
            (t(!0), a(P, null, V(e.periods, (f) => (t(), a("button", {
              key: f.value,
              type: "button",
              class: z([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (b) => d.$emit("update:period", f.value)
            }, c(f.label), 11, Lb))), 128))
          ])) : $("", !0),
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
          ], 8, jb)) : $("", !0),
          e.hideable ? (t(), a("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), a("svg", Db, [
              o("path", {
                d: k(ce)("eye-off")
              }, null, 8, Tb)
            ]))
          ], 8, Vb)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), a("div", {
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
        }, " Could not load ", 4)) : K(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, wb));
  }
}), Ib = ["aria-pressed", "aria-label", "title"], Fb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nb = ["d"], Rb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Ub = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Hb = ["href"], Kb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qb = ["d"], Gb = ["aria-label", "onClick"], Wb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zb = ["d"], Jb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yb = ["d"], Xb = {
  key: 0,
  class: "flex flex-col gap-1"
}, Qb = ["onClick"], e1 = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, t1 = ["d"], n1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, a1 = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(!1), i = U(!1), d = x(
      () => n.catalog.filter((b) => !n.items.some((g) => g.id === b.id))
    );
    function u(b) {
      r(
        "update:items",
        n.items.filter((g) => g.id !== b)
      );
    }
    function f(b) {
      r("update:items", [...n.items, b]), i.value = !1;
    }
    return (b, g) => (t(), a(P, null, [
      I(Eb, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: g[3] || (g[3] = (h) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: g[0] || (g[0] = (h) => s.value = !s.value)
          }, [
            (t(), a("svg", Fb, [
              o("path", {
                d: k(ce)(s.value ? "check" : "pencil")
              }, null, 8, Nb)
            ]))
          ], 8, Ib)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), a("div", Rb, [
            g[7] || (g[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            I(de, {
              size: "sm",
              variant: "outline",
              onClick: g[1] || (g[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...g[6] || (g[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), a("div", Ub, [
            (t(!0), a(P, null, V(e.items, (h) => (t(), a("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), a("svg", Kb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, qb)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Hb),
              s.value ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (w) => u(h.id)
              }, [
                (t(), a("svg", Wb, [
                  o("path", {
                    d: k(ce)("x")
                  }, null, 8, Zb)
                ]))
              ], 8, Gb)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), a("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: g[2] || (g[2] = (h) => i.value = !0)
            }, [
              (t(), a("svg", Jb, [
                o("path", {
                  d: k(ce)("plus")
                }, null, 8, Yb)
              ])),
              g[8] || (g[8] = R(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      I(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: g[5] || (g[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          I(de, {
            variant: "outline",
            onClick: g[4] || (g[4] = (h) => i.value = !1)
          }, {
            default: L(() => [...g[9] || (g[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), a("ul", Xb, [
            (t(!0), a(P, null, V(d.value, (h) => (t(), a("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (w) => f(h)
              }, [
                (t(), a("svg", e1, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, t1)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Qb)
            ]))), 128))
          ])) : (t(), a("p", n1, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), l1 = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, o1 = { class: "flex flex-1 flex-col gap-1 p-4" }, s1 = { class: "text-muted-foreground relative text-xs font-medium" }, r1 = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, i1 = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, d1 = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, u1 = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, F8 = /* @__PURE__ */ O({
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
    return (n, r) => (t(), a("div", l1, [
      o("div", o1, [
        o("p", s1, c(e.label), 1),
        e.loading ? (t(), D(Pe, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), a("span", r1, " Could not load ")) : (t(), a("span", i1, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(ta, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), a("p", d1, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), a("div", u1, [
        I(zt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), c1 = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, f1 = { class: "flex flex-col gap-1 p-4" }, m1 = { class: "flex items-start justify-between gap-2" }, p1 = { class: "text-sm font-medium" }, v1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, g1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, h1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, b1 = {
  key: 0,
  class: "-mb-px"
}, Ct = /* @__PURE__ */ O({
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
    const l = e, n = x(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = x(
      () => n.value === null ? "bg-muted text-muted-foreground" : n.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = x(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), a("div", c1, [
      o("div", f1, [
        o("div", m1, [
          o("p", p1, c(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), a("p", v1, c(e.caption), 1)) : $("", !0),
        o("div", g1, [
          e.loading ? (t(), D(Pe, {
            key: 0,
            variant: "number"
          })) : (t(), a("span", h1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), a("span", {
            key: 2,
            class: z(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), a("div", b1, [
        I(zt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), y1 = { class: "relative flex flex-col gap-2" }, x1 = ["aria-label"], k1 = ["onMouseenter"], $1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, w1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, C1 = { class: "truncate" }, S1 = { class: "text-sm font-semibold tabular-nums" }, N8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.segments.reduce((b, g) => b + Math.max(0, g.value), 0)), s = x(() => Math.max(l.total ?? r.value, r.value, 1)), i = x(
      () => l.segments.map((b, g) => {
        const h = Math.max(0, b.value) / s.value;
        return {
          ...b,
          color: b.color ?? n[g % n.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: b.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b), u = U(null), f = (b) => `${(b * 100).toFixed(b > 0 && b < 0.01 ? 1 : 0)}%`;
    return (b, g) => (t(), a("div", y1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), a(P, null, V(i.value, (h, w) => (t(), a("span", {
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
          onMouseenter: (y) => u.value = w,
          onMouseleave: g[0] || (g[0] = (y) => u.value = null)
        }, null, 46, k1))), 128))
      ], 12, x1),
      e.showLegend ? (t(), a("div", $1, [
        (t(!0), a(P, null, V(i.value, (h, w) => (t(), a("div", {
          key: w,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", w1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", C1, c(h.label), 1)
          ]),
          o("span", S1, c(d(h.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      u.value !== null ? (t(), D(mt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), M1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, B1 = ["data-heading"], _1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, A1 = { class: "text-muted-foreground truncate" }, z1 = ["aria-label"], R8 = /* @__PURE__ */ O({
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
    }, s = x(
      () => l.rows.map((i) => {
        if (!i.bar || i.bar.segments.length === 0)
          return { ...i, segments: [] };
        const d = i.bar.segments.reduce((f, b) => f + Math.max(0, b.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
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
    return (i, d) => (t(), a("div", M1, [
      (t(!0), a(P, null, V(s.value, (u) => (t(), a("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), a("div", {
          key: 0,
          class: z(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? n[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), a("div", _1, [
          o("span", A1, c(u.label), 1),
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
          (t(!0), a(P, null, V(u.segments, (f, b) => (t(), a("span", {
            key: b,
            class: z(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, z1)) : $("", !0)
      ], 8, B1))), 128))
    ]));
  }
}), P1 = {
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
}, O1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function L1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function j1(e, l) {
  return l || (e ? P1[L1(e)] ?? "neutral" : "neutral");
}
function V1(e, l) {
  return O1[j1(e, l)];
}
const $e = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, n = x(() => V1(l.status, l.tone));
    return (r, s) => (t(), D(Ge, {
      variant: n.value,
      class: z(l.class)
    }, {
      default: L(() => [
        K(r.$slots, "default", {}, () => [
          R(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), D1 = ["data-layout"], T1 = ["src", "alt"], E1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, I1 = ["src"], F1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, N1 = ["onMouseenter"], R1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, U1 = { class: "min-w-0" }, H1 = { class: "truncate text-sm font-medium" }, K1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, q1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, G1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, W1 = { class: "min-w-0" }, Z1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, J1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Y1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, X1 = ["d"], Q1 = ["aria-label"], ey = /* @__PURE__ */ O({
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
    }, r = e, s = l, i = U(0);
    function d(M) {
      if (typeof M != "string")
        return null;
      const B = M.trim();
      return B === "" ? null : /^(https?:)?\/\//i.test(B) ? B : null;
    }
    const u = x(() => {
      const M = [r.item.image, ...r.item.images ?? []].map(d).filter((B) => B !== null);
      return [...new Set(M)];
    }), f = x(() => u.value[i.value] ?? u.value[0] ?? null), b = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), g = x(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const B = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / B * 100)).toFixed(2)}%`;
    }), h = x(() => u.value.length > 1 ? u.value[1] : null), w = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), y = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, B) => (t(), a("article", {
      "data-slot": "catalog-card",
      class: z(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: B[0] || (B[0] = (_) => s("select", e.item.key)),
      onKeydown: B[1] || (B[1] = Tt(he((_) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: B[2] || (B[2] = (_) => i.value = 0)
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
        }, null, 8, T1)) : (t(), a("span", E1, c(b.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), a("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, I1)) : $("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), a("div", F1, [
          (t(!0), a(P, null, V(u.value, (_, p) => (t(), a("span", {
            key: p,
            class: z(["size-1.5 rounded-full", p === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (m) => i.value = p
          }, null, 42, N1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: z(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", R1, [
          o("div", U1, [
            o("p", H1, c(e.item.label), 1),
            e.item.caption ? (t(), a("p", K1, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), a("p", q1, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), D($e, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", G1, [
          o("div", W1, [
            e.item.price ? (t(), a("p", Z1, c(e.item.price), 1)) : $("", !0),
            y.value ? (t(), a("p", J1, c(y.value), 1)) : $("", !0)
          ]),
          w.value ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), a("svg", Y1, [
              o("path", {
                d: k(ce)("cart")
              }, null, 8, X1)
            ]))
          ])) : $("", !0)
        ]),
        g.value && e.layout === "grid" ? (t(), a("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: z(["block h-full", n[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: g.value })
          }, null, 6)
        ], 8, Q1)) : $("", !0)
      ], 2)
    ], 42, D1));
  }
});
function ty(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function ny(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function ay(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const ly = ["data-featured", "data-recommended"], oy = { class: "flex flex-col gap-1" }, sy = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, ry = { key: 0 }, iy = { key: 1 }, dy = { key: 2 }, uy = { key: 3 }, cy = { class: "text-sm font-semibold" }, fy = { class: "flex items-baseline gap-1" }, my = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, py = { class: "text-muted-foreground text-sm font-normal" }, vy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, gy = { class: "text-muted-foreground mt-1 text-xs" }, hy = { class: "flex flex-1 flex-col gap-2 text-sm" }, by = { class: "flex min-w-0 items-start gap-2" }, yy = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, xy = ["d"], ky = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, $y = ["d"], wy = { class: "capitalize" }, Cy = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, Sy = { class: "text-foreground font-medium" }, My = { class: "mt-auto flex gap-2 pt-2" }, By = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(
      () => n.plan.priceFormatted ?? String(n.plan.price)
    ), i = x(
      () => !!(n.plan.featured || n.plan.recommended)
    ), d = x(() => {
      const f = n.plan.perks ?? {};
      return Object.entries(f).map(([b, g]) => ({
        key: b,
        label: b.replace(/_/g, " "),
        granted: ay(g.value),
        display: ny(g.value)
      }));
    }), u = x(() => n.plan.extraPerks ?? []);
    return (f, b) => (t(), a("article", {
      class: z(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", oy, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), a("p", sy, [
          e.plan.recommended ? (t(), a("span", ry, "Recommended")) : e.plan.featured ? (t(), a("span", iy, "Featured")) : $("", !0),
          e.plan.trial ? (t(), a("span", dy, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), a("span", uy, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", cy, c(e.plan.name), 1),
        o("p", fy, [
          o("span", my, c(s.value), 1),
          o("span", py, c(k(ty)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), a("p", vy, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", gy, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", hy, [
        (t(!0), a(P, null, V(d.value, (g) => (t(), a("li", {
          key: g.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", by, [
            o("span", {
              class: z(["mt-0.5 shrink-0", g.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              g.granted ? (t(), a("svg", yy, [
                o("path", {
                  d: k(ce)("check")
                }, null, 8, xy)
              ])) : (t(), a("svg", ky, [
                o("path", {
                  d: k(ce)("x")
                }, null, 8, $y)
              ]))
            ], 2),
            o("span", wy, c(g.label), 1)
          ]),
          g.display ? (t(), a("span", Cy, c(g.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), a(P, null, V(u.value, (g, h) => (t(), a("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(g.key), 1),
          o("span", Sy, c(g.value), 1)
        ]))), 128))
      ]),
      o("footer", My, [
        I(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: b[0] || (b[0] = (g) => r("edit", e.plan.id))
        }, {
          default: L(() => [...b[2] || (b[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        I(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: b[1] || (b[1] = (g) => r("delete", e.plan.id))
        }, {
          default: L(() => [...b[3] || (b[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, ly));
  }
}), _y = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Ay = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, zy = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Py = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Oy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, U8 = /* @__PURE__ */ O({
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
      o("header", _y, [
        o("div", null, [
          e.title ? (t(), a("h1", Ay, c(e.title), 1)) : $("", !0),
          e.description ? (t(), a("p", zy, c(e.description), 1)) : $("", !0)
        ]),
        I(de, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => n("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), a("p", Py, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), a("div", Oy, [
        (t(!0), a(P, null, V(e.plans, (i) => (t(), D(By, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => n("edit", d)),
          onDelete: s[2] || (s[2] = (d) => n("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), Ly = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, jy = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Vy = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Dy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ty = { class: "space-y-1.5" }, Ey = { class: "space-y-1.5" }, Iy = { class: "space-y-1.5" }, Fy = { class: "space-y-1.5" }, Ny = { class: "space-y-1.5" }, Ry = { class: "flex items-center gap-3 text-sm" }, Uy = { class: "flex items-center gap-3 text-sm" }, Hy = { class: "flex items-center gap-3 text-sm" }, Ky = {
  key: 0,
  class: "space-y-1.5"
}, qy = { class: "flex items-center gap-3 text-sm" }, Gy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Wy = { class: "space-y-1.5" }, Zy = ["value"], Jy = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Yy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Xy = ["id", "value", "onInput"], Qy = { class: "space-y-2" }, ex = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, tx = ["d"], H8 = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = rt(n());
    function d(p, m) {
      const v = i.perks?.[p]?.value;
      return v ?? m;
    }
    function u(p, m, v) {
      const A = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: m,
          overview: v ?? A?.overview ?? ""
        }
      };
    }
    function f(p, m) {
      const v = i.perks?.[p];
      i.perks = {
        ...i.perks ?? {},
        [p]: {
          value: v?.value ?? (p === "modules" ? [] : 0),
          overview: m
        }
      };
    }
    function b(p) {
      const m = p ? { ...n(), ...p } : n();
      i.id = m.id, i.name = m.name, i.shortDescription = m.shortDescription ?? "", i.description = m.description ?? "", i.days = m.days, i.price = m.price, i.featured = m.featured ?? !1, i.recommended = m.recommended ?? !1, i.trial = m.trial ?? !1, i.trialDays = m.trialDays ?? 0, i.active = m.active ?? !0, i.perks = { ...m.perks ?? {} }, i.extraPerks = [...m.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    b(r.plan), me(
      () => r.plan,
      (p) => b(p),
      { deep: !0 }
    );
    const g = x({
      get: () => {
        const p = d("modules", []);
        return Array.isArray(p) ? p.map(String) : [];
      },
      set: (p) => {
        u("modules", w(p.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = x(
      () => r.modules.map((p) => ({ value: p.key, label: p.label }))
    );
    function w(p) {
      const m = Object.fromEntries(r.modules.map((F) => [F.key, F])), v = new Set(p);
      for (const F of r.modules)
        if (!v.has(F.key))
          for (const E of F.children ?? [])
            v.delete(E);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const F of [...v])
          for (const E of m[F]?.requires ?? [])
            v.has(E) || (v.add(E), A = !0);
      }
      return [...v];
    }
    function y() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(p) {
      i.extraPerks = (i.extraPerks ?? []).filter((m, v) => v !== p);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((p) => p.key.trim() !== "")
      });
    }
    const B = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`, _ = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Ue}`;
    return (p, m) => (t(), a("form", {
      class: z(["w-full space-y-6", e.embedded ? "" : k(tt)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", Ly, [
        o("div", null, [
          o("h1", jy, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          m[13] || (m[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        I(de, {
          type: "button",
          variant: "outline",
          onClick: m[0] || (m[0] = (v) => s("cancel"))
        }, {
          default: L(() => [...m[14] || (m[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", Vy, [
        o("section", Dy, [
          m[26] || (m[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Ty, [
            I(ze, { for: "plan-name" }, {
              default: L(() => [...m[15] || (m[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => i.name = v),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", Ey, [
            I(ze, { for: "plan-short" }, {
              default: L(() => [...m[16] || (m[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": m[2] || (m[2] = (v) => i.shortDescription = v),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Iy, [
            I(ze, { for: "plan-description" }, {
              default: L(() => [...m[17] || (m[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": m[3] || (m[3] = (v) => i.description = v),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: z(_)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", Fy, [
            I(ze, { for: "plan-days" }, {
              default: L(() => [...m[18] || (m[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": m[4] || (m[4] = (v) => i.days = v),
              class: z(B)
            }, [...m[19] || (m[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                We,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", Ny, [
            I(ze, { for: "plan-price" }, {
              default: L(() => [...m[20] || (m[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": m[5] || (m[5] = (v) => i.price = Number(v))
            }, null, 8, ["model-value"])
          ]),
          o("label", Ry, [
            I(k(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": m[6] || (m[6] = (v) => i.featured = v)
            }, null, 8, ["checked"]),
            m[21] || (m[21] = R(" Featured ", -1))
          ]),
          o("label", Uy, [
            I(k(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": m[7] || (m[7] = (v) => i.recommended = v)
            }, null, 8, ["checked"]),
            m[22] || (m[22] = R(" Recommended ", -1))
          ]),
          o("label", Hy, [
            I(k(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": m[8] || (m[8] = (v) => i.trial = v)
            }, null, 8, ["checked"]),
            m[23] || (m[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), a("div", Ky, [
            I(ze, { for: "plan-trial-days" }, {
              default: L(() => [...m[24] || (m[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            I(we, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": m[9] || (m[9] = (v) => i.trialDays = Number(v))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", qy, [
            I(k(Ze), {
              checked: i.active !== !1,
              "onUpdate:checked": m[10] || (m[10] = (v) => i.active = v)
            }, null, 8, ["checked"]),
            m[25] || (m[25] = R(" Active ", -1))
          ]),
          I(de, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Gy, [
          m[33] || (m[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Wy, [
            I(ze, null, {
              default: L(() => [...m[27] || (m[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            I(Qt, {
              modelValue: g.value,
              "onUpdate:modelValue": m[11] || (m[11] = (v) => g.value = v),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            I(ze, { for: "plan-modules-overview" }, {
              default: L(() => [...m[28] || (m[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: z(_),
              onInput: m[12] || (m[12] = (v) => f(
                "modules",
                v.target.value
              ))
            }, null, 40, Zy)
          ]),
          (t(!0), a(P, null, V(e.limits, (v) => (t(), a("div", {
            key: v.key,
            class: "space-y-1.5"
          }, [
            v.kind === "toggle" ? (t(), a("label", Jy, [
              I(k(Ze), {
                checked: !!d(v.key, !1),
                "onUpdate:checked": (A) => u(
                  v.key,
                  A,
                  i.perks?.[v.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + c(v.label), 1)
            ])) : (t(), a(P, { key: 1 }, [
              I(ze, {
                for: `plan-limit-${v.key}`
              }, {
                default: L(() => [
                  R(c(v.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              v.hint ? (t(), a("p", Yy, c(v.hint), 1)) : $("", !0),
              I(we, {
                id: `plan-limit-${v.key}`,
                "model-value": Number(d(v.key, 0)),
                type: "number",
                step: v.step ?? 1,
                required: "",
                "onUpdate:modelValue": (A) => u(
                  v.key,
                  Number(A),
                  i.perks?.[v.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              m[29] || (m[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            I(ze, {
              for: `plan-overview-${v.key}`
            }, {
              default: L(() => [...m[30] || (m[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${v.key}`,
              value: i.perks?.[v.key]?.overview ?? "",
              class: z(_),
              onInput: (A) => f(
                v.key,
                A.target.value
              )
            }, null, 40, Xy)
          ]))), 128)),
          o("div", Qy, [
            m[32] || (m[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), a(P, null, V(i.extraPerks ?? [], (v, A) => (t(), a("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              I(we, {
                modelValue: v.key,
                "onUpdate:modelValue": (F) => v.key = F,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(we, {
                modelValue: v.value,
                "onUpdate:modelValue": (F) => v.value = F,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              I(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (F) => C(A)
              }, {
                default: L(() => [
                  (t(), a("svg", ex, [
                    o("path", {
                      d: k(ce)("x")
                    }, null, 8, tx)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            I(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: y
            }, {
              default: L(() => [...m[31] || (m[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), nx = ["data-current", "data-recommended"], ax = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, lx = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, ox = { class: "text-sm font-semibold" }, sx = { class: "flex items-baseline gap-1" }, rx = { class: "text-4xl font-bold tracking-tight tabular-nums" }, ix = { class: "text-muted-foreground text-sm font-normal" }, dx = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, ux = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, cx = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, fx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, mx = ["d"], px = { class: "text-muted-foreground" }, vx = {
  key: 3,
  class: "flex-1"
}, gx = {
  key: 4,
  class: "mt-auto pt-2"
}, K8 = /* @__PURE__ */ O({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.annual && n.plan.annualPrice !== void 0 ? n.plan.annualPriceFormatted ?? String(n.plan.annualPrice) : n.plan.priceFormatted ?? String(n.plan.price)), i = x(() => n.annual && n.plan.annualPrice !== void 0 ? "year" : n.plan.interval ?? "month"), d = x(() => !!n.plan.recommended && !n.plan.current);
    return (u, f) => (t(), a("article", {
      class: z([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), a("span", ax, " Most popular ")) : e.plan.current ? (t(), a("span", lx, " Current plan ")) : $("", !0),
      o("header", {
        class: z(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", ox, c(e.plan.name), 1),
        o("p", sx, [
          o("span", rx, c(s.value), 1),
          o("span", ix, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), a("p", dx, c(e.plan.description), 1)) : $("", !0)
      ], 2),
      e.plan.features?.length ? (t(), a("ul", ux, [
        (t(!0), a(P, null, V(e.plan.features, (b, g) => (t(), a("li", {
          key: g,
          class: "flex items-start gap-2"
        }, [
          o("span", cx, [
            (t(), a("svg", fx, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, mx)
            ]))
          ]),
          o("span", px, c(b), 1)
        ]))), 128))
      ])) : (t(), a("div", vx)),
      e.plan.current ? $("", !0) : (t(), a("footer", gx, [
        I(de, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: f[0] || (f[0] = (b) => r("choose", e.plan.id))
        }, {
          default: L(() => [
            R(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, nx));
  }
}), hx = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, bx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, yx = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, xx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, kx = ["d"], $x = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, wx = ["aria-pressed"], Cx = ["aria-pressed"], Sx = {
  key: 0,
  class: "flex flex-col gap-2"
}, Mx = ["aria-label"], Bx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, _x = ["aria-pressed", "onClick"], Ax = ["aria-label"], zx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Px = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Ox = ["data-slot"], Lx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, jx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Vx = { class: "flex items-center gap-2" }, Dx = ["disabled"], Tx = ["disabled"], sn = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(""), i = ut(e, "modelValue"), d = rt({}), u = rt({});
    me(s, () => h());
    function f(E) {
      const te = E.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function b() {
      const E = {};
      for (const [te, H] of Object.entries(u))
        E[te] = { min: f(H.min), max: f(H.max) };
      return E;
    }
    function g() {
      return { query: s.value, selected: { ...d }, ranges: b() };
    }
    function h() {
      r("filter", g());
    }
    function w(E, te) {
      d[E] = d[E] === te ? null : te, h();
    }
    function y(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function C(E, te, H) {
      const W = u[E] ?? { min: "", max: "" };
      u[E] = { ...W, [te]: H }, h();
    }
    function M(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const B = x(() => n.facets.filter((E) => (E.kind ?? "chips") === "chips")), _ = x(() => n.facets.filter((E) => E.kind === "range")), p = x(
      () => n.searchable || n.facets.length > 0 || n.layoutToggle
    ), m = U(1);
    me(
      () => n.items.map((E) => E.key).join(","),
      () => {
        m.value = 1;
      }
    );
    const v = x(() => {
      const E = n.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(n.items.length / E));
    }), A = x(() => {
      const E = n.pageSize;
      if (!E || E < 1)
        return n.items;
      const te = (m.value - 1) * E;
      return n.items.slice(te, te + E);
    });
    function F(E) {
      m.value = Math.min(v.value, Math.max(1, E));
    }
    return (E, te) => (t(), a("div", {
      class: z(["flex flex-col gap-4", k(Zn)])
    }, [
      p.value ? (t(), a("div", hx, [
        o("div", bx, [
          e.searchable ? (t(), a("div", yx, [
            (t(), a("svg", xx, [
              o("path", {
                d: k(ce)("search")
              }, null, 8, kx)
            ])),
            I(we, {
              modelValue: s.value,
              "onUpdate:modelValue": te[0] || (te[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: M
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          K(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), a("div", $x, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, wx),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, Cx)
          ])) : $("", !0)
        ]),
        B.value.length || _.value.length ? (t(), a("div", Sx, [
          (t(!0), a(P, null, V(B.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), a("span", Bx, c(H.label), 1)) : $("", !0),
            (t(!0), a(P, null, V(H.options ?? [], (W) => (t(), a("button", {
              key: W.value,
              type: "button",
              class: z([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === W.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === W.value ? "true" : "false",
              onClick: (J) => w(H.key, W.value)
            }, c(W.label), 11, _x))), 128))
          ], 8, Mx))), 128)),
          (t(!0), a(P, null, V(_.value, (H) => (t(), a("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", zx, c(H.label ?? H.key), 1),
            I(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": y(H.key).min,
              "onUpdate:modelValue": (W) => C(H.key, "min", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            I(we, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": y(H.key).max,
              "onUpdate:modelValue": (W) => C(H.key, "max", String(W))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Ax))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), a("p", Px, "No matching items.")) : (t(), a("div", {
        key: 2,
        class: z(
          i.value === "list" ? "flex flex-col gap-3" : k(Tf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), a(P, null, V(A.value, (H) => (t(), D(ey, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (W) => r("select", W)),
          onCart: te[4] || (te[4] = (W) => r("cart", W))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Ox)),
      e.pageSize && v.value > 1 ? (t(), a("div", Lx, [
        o("p", jx, " Page " + c(m.value) + " of " + c(v.value), 1),
        o("div", Vx, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value <= 1,
            onClick: te[5] || (te[5] = (H) => F(m.value - 1))
          }, " Previous ", 8, Dx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: m.value >= v.value,
            onClick: te[6] || (te[6] = (H) => F(m.value + 1))
          }, " Next ", 8, Tx)
        ])
      ])) : $("", !0)
    ], 2));
  }
});
function Ie() {
  return { query: "", selected: {}, ranges: {} };
}
function Ex(e, l) {
  const n = e.metrics?.[l];
  if (typeof n == "number" && Number.isFinite(n))
    return n;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Ix(e, l) {
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
    if (!Ix(Ex(e, r), s))
      return !1;
  return !0;
}
function Fx(e, l) {
  const n = l.trim().toLowerCase();
  return n === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === n || i === n;
  }) ?? null;
}
function St(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Nx = { class: "flex flex-col gap-6" }, Rx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Ux = { class: "text-sm font-semibold" }, Hx = { class: "flex flex-wrap items-center gap-1.5" }, Kx = ["aria-pressed", "onClick"], qx = { class: "text-sm font-semibold" }, Gx = { class: "flex flex-wrap items-center gap-1.5" }, Wx = { key: 0 }, na = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(""), i = rt({}), d = rt({}), u = x(
      () => n.facets.filter((v) => (v.kind ?? "chips") === "chips")
    ), f = x(() => n.facets.filter((v) => v.kind === "range"));
    function b(v) {
      return v == null ? "" : String(v);
    }
    function g() {
      s.value = n.applied.query ?? "";
      for (const v of Object.keys(i))
        delete i[v];
      for (const [v, A] of Object.entries(n.applied.selected ?? {}))
        i[v] = A;
      for (const v of Object.keys(d))
        delete d[v];
      for (const [v, A] of Object.entries(n.applied.ranges ?? {}))
        d[v] = { min: b(A.min), max: b(A.max) };
    }
    me(
      () => n.open,
      (v) => {
        v && g();
      }
    );
    function h(v) {
      const A = v.trim();
      if (A === "")
        return null;
      const F = Number(A);
      return Number.isFinite(F) ? F : null;
    }
    function w() {
      const v = {};
      for (const [A, F] of Object.entries(d))
        v[A] = { min: h(F.min), max: h(F.max) };
      return v;
    }
    function y() {
      return {
        query: n.hideSearch ? n.applied.query : s.value,
        selected: { ...i },
        ranges: w()
      };
    }
    const C = x(() => {
      let v = n.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (v += 1);
      for (const A of Object.values(w()))
        (A.min !== null || A.max !== null) && (v += 1);
      return v;
    });
    function M(v, A) {
      i[v] = i[v] === A ? null : A;
    }
    function B(v) {
      return d[v] ?? { min: "", max: "" };
    }
    function _(v, A, F) {
      const E = d[v] ?? { min: "", max: "" };
      d[v] = { ...E, [A]: F };
    }
    function p() {
      r("apply", y());
    }
    function m() {
      s.value = "";
      for (const v of Object.keys(i))
        i[v] = null;
      for (const v of Object.keys(d))
        d[v] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        n.hideSearch ? { ...Ie(), query: n.applied.query } : Ie()
      );
    }
    return (v, A) => (t(), D(_t, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: A[2] || (A[2] = (F) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: m
        }, " Reset all "),
        I(de, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (F) => r("close"))
        }, {
          default: L(() => [...A[5] || (A[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        I(de, {
          size: "sm",
          onClick: p
        }, {
          default: L(() => [
            A[6] || (A[6] = R(" Apply", -1)),
            C.value ? (t(), a("span", Wx, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", Nx, [
          e.hideSearch ? $("", !0) : (t(), a("label", Rx, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            I(we, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (F) => s.value = F),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), a(P, null, V(u.value, (F) => (t(), a("section", {
            key: F.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Ux, c(F.label ?? F.key), 1),
            o("div", Hx, [
              (t(!0), a(P, null, V(F.options ?? [], (E) => (t(), a("button", {
                key: E.value,
                type: "button",
                class: z([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[F.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[F.key] === E.value ? "true" : "false",
                onClick: (te) => M(F.key, E.value)
              }, c(E.label), 11, Kx))), 128))
            ])
          ]))), 128)),
          (t(!0), a(P, null, V(f.value, (F) => (t(), a("section", {
            key: F.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", qx, c(F.label ?? F.key), 1),
            o("div", Gx, [
              I(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${F.label ?? F.key} from`,
                "model-value": B(F.key).min,
                "onUpdate:modelValue": (E) => _(F.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              I(we, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${F.label ?? F.key} to`,
                "model-value": B(F.key).max,
                "onUpdate:modelValue": (E) => _(F.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Zx = ["aria-disabled"], Jx = ["disabled"], Yx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Xx = ["d"], Qx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, e0 = ["disabled"], t0 = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, n0 = ["d"], a0 = /* @__PURE__ */ O({
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
    const n = ut(e, "modelValue"), r = l, s = x(() => n.value <= e.min), i = x(() => e.max !== null && n.value >= e.max);
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
        onClick: f[0] || (f[0] = (b) => d(-1))
      }, [
        (t(), a("svg", Yx, [
          o("path", {
            d: k(ce)("minus")
          }, null, 8, Xx)
        ]))
      ], 8, Jx),
      o("span", Qx, c(n.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (b) => d(1))
      }, [
        (t(), a("svg", t0, [
          o("path", {
            d: k(ce)("plus")
          }, null, 8, n0)
        ]))
      ], 8, e0)
    ], 8, Zx));
  }
}), l0 = { class: "divide-border flex flex-col divide-y" }, o0 = { class: "min-w-0" }, s0 = { class: "truncate text-sm font-medium" }, r0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, i0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, d0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, u0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, c0 = ["aria-label", "onClick"], f0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, m0 = ["d"], p0 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", l0, [
      (t(!0), a(P, null, V(e.items, (d) => (t(), a("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", o0, [
          o("p", s0, c(d.label), 1),
          d.detail ? (t(), a("p", r0, c(d.detail), 1)) : $("", !0)
        ]),
        o("div", i0, [
          e.editable ? (t(), D(a0, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => n("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), a("span", d0, " ×" + c(d.qty), 1)) : $("", !0),
          d.amount ? (t(), a("span", u0, c(d.amount), 1)) : $("", !0),
          d.status ? (t(), D($e, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), a("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => n("remove", d.key)
          }, [
            (t(), a("svg", f0, [
              o("path", {
                d: k(ce)("trash")
              }, null, 8, m0)
            ]))
          ], 8, c0)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), v0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, g0 = { class: "border-b px-4 py-3" }, h0 = { class: "text-sm font-medium" }, b0 = { class: "flex-1 px-4 py-3" }, y0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, x0 = { class: "text-foreground block font-medium" }, k0 = { class: "mt-1 block" }, $0 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, w0 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, C0 = { class: "tabular-nums" }, S0 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, M0 = { class: "text-muted-foreground" }, B0 = {
  key: 0,
  class: "tabular-nums"
}, _0 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, A0 = { class: "text-muted-foreground" }, z0 = { class: "tabular-nums" }, P0 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, O0 = { class: "tabular-nums" }, L0 = {
  key: 4,
  class: "pt-1"
}, j0 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), a("aside", v0, [
      o("header", g0, [
        o("h2", h0, c(e.title), 1)
      ]),
      o("div", b0, [
        e.items.length === 0 ? (t(), a("p", y0, [
          o("span", x0, c(e.emptyTitle), 1),
          o("span", k0, c(e.emptyDescription), 1)
        ])) : (t(), D(p0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => n("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => n("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), a("footer", $0, [
        e.subtotal ? (t(), a("div", w0, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", C0, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), a("div", S0, [
          o("span", M0, c(e.discountLabel), 1),
          e.discount ? (t(), a("span", B0, c(e.discount), 1)) : $("", !0),
          K(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), a("div", _0, [
          o("span", A0, c(e.taxLabel), 1),
          o("span", z0, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), a("div", P0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", O0, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), a("div", L0, [
          K(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), V0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, D0 = { class: "flex flex-col gap-4" }, T0 = { class: "flex flex-wrap items-start justify-between gap-3" }, E0 = { class: "flex items-center gap-2" }, I0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, q8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(Ie()), i = U(!1), d = ut(e, "cart"), u = U(!1), f = x(
      () => n.items.filter((H) => rn(H, s.value))
    );
    function b(H) {
      s.value = { ...s.value, query: H.query };
    }
    function g(H) {
      s.value = {
        ...s.value,
        selected: H.selected,
        ranges: H.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function h(H) {
      return H ? n.parsePrice(H) : 0;
    }
    function w(H, W, J) {
      return {
        ...H,
        qty: W,
        amount: n.formatMoney(J * W)
      };
    }
    function y(H) {
      const W = Fx(n.items, H);
      W && C(W.key);
    }
    function C(H) {
      const W = n.items.find((G) => G.key === H);
      if (!W || W.status === "out-of-stock")
        return;
      u.value = !1;
      const J = h(W);
      if (d.value.find((G) => G.key === H)) {
        d.value = d.value.map(
          (G) => G.key === H ? w(G, Number(G.qty ?? 1) + 1, J) : G
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
          amount: n.formatMoney(J)
        }
      ];
    }
    function M(H, W) {
      const J = n.items.find((G) => G.key === H), Z = h(J);
      d.value = d.value.map(
        (G) => G.key === H ? w(G, W, Z) : G
      );
    }
    function B(H) {
      d.value = d.value.filter((W) => W.key !== H);
    }
    const _ = x(
      () => d.value.reduce((H, W) => {
        const J = n.items.find((Z) => Z.key === W.key);
        return H + h(J) * Number(W.qty ?? 1);
      }, 0)
    ), p = x(
      () => n.discountRate > 0 ? Math.round(_.value * n.discountRate) : 0
    ), m = x(
      () => Math.round((_.value - p.value) * n.taxRate)
    ), v = x(
      () => d.value.length ? n.formatMoney(_.value) : null
    ), A = x(
      () => d.value.length && p.value > 0 ? `−${n.formatMoney(p.value)}` : null
    ), F = x(
      () => d.value.length && n.taxRate > 0 ? n.formatMoney(m.value) : null
    ), E = x(
      () => d.value.length ? n.formatMoney(
        _.value - p.value + m.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, W) => (t(), a(P, null, [
      o("div", V0, [
        o("section", D0, [
          o("div", T0, [
            I(Ee, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", E0, [
              k(St)(s.value) ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: W[0] || (W[0] = (J) => s.value = {
                  ...k(Ie)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: W[1] || (W[1] = (J) => i.value = !0)
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
                W[6] || (W[6] = R(" Filters ", -1)),
                k(St)(s.value) ? (t(), a("span", I0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          I(sn, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: b,
            onSelect: W[2] || (W[2] = (J) => r("select", J)),
            onCart: C,
            onScan: y
          }, null, 8, ["search-placeholder", "items"])
        ]),
        I(j0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: v.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: F.value,
          total: E.value,
          onQty: M,
          onRemove: B
        }, {
          pay: L(() => [
            K(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: te
            }, () => [
              I(de, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: te
              }, {
                default: L(() => [
                  R(c(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      I(na, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: W[3] || (W[3] = (J) => i.value = !1),
        onApply: g,
        onReset: W[4] || (W[4] = (J) => s.value = { ...k(Ie)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), F0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, N0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, R0 = ["src", "alt"], U0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, H0 = ["src"], K0 = { class: "flex items-start justify-between gap-3" }, q0 = { class: "text-lg font-semibold tabular-nums" }, G0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, W0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Z0 = { class: "grid grid-cols-2 gap-3" }, J0 = { class: "flex flex-col gap-2" }, Y0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, G8 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(g) {
      let h = 0;
      for (const w of g)
        h = h * 31 + w.charCodeAt(0) >>> 0;
      return h;
    }
    function i(g, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((y, C) => ({
        label: y,
        value: Math.max(0, Math.round(g + Math.sin(C + h) * g * 0.18))
      }));
    }
    const d = x(() => n.item?.kind === "unit"), u = x(() => {
      const g = n.item;
      if (!g)
        return [];
      const h = g.stock ?? g.progress?.value ?? g.metrics?.price ?? g.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(g.key) % 7);
    }), f = x(() => {
      const g = n.item;
      if (!g)
        return [];
      const h = g.progress?.value ?? (g.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(g.key) % 5 + 1);
    }), b = x(
      () => !!n.item && !d.value && n.item?.status !== "out-of-stock"
    );
    return (g, h) => (t(), D(_t, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (w) => r("close"))
    }, st({
      default: L(() => [
        e.item ? (t(), a("div", F0, [
          o("div", N0, [
            e.item.image ? (t(), a("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, R0)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), a("div", U0, [
            (t(!0), a(P, null, V(e.item.images, (w, y) => (t(), a("img", {
              key: y,
              src: w,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, H0))), 128))
          ])) : $("", !0),
          o("div", K0, [
            o("div", null, [
              o("p", q0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), a("p", G0, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), a("p", W0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", Z0, [
            I(Ct, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            I(Ct, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", J0, [
            o("p", Y0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            I(zt, {
              data: d.value ? f.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      b.value && e.item ? {
        name: "footer",
        fn: L(() => [
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
}), X0 = { class: "flex flex-col gap-10" }, Q0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, ek = { class: "flex flex-col gap-3" }, tk = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, nk = ["src", "alt"], ak = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, lk = ["aria-label", "aria-pressed", "onClick"], ok = ["src"], sk = { class: "flex flex-col gap-5" }, rk = { class: "flex flex-wrap items-start justify-between gap-3" }, ik = { class: "min-w-0" }, dk = { class: "text-2xl font-semibold tracking-tight" }, uk = { class: "text-muted-foreground mt-1 text-sm" }, ck = { class: "text-2xl font-semibold tabular-nums" }, fk = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, mk = { class: "grid grid-cols-2 gap-3 text-sm" }, pk = {
  key: 0,
  class: "rounded-lg border p-3"
}, vk = { class: "mt-1 font-medium" }, gk = { class: "rounded-lg border p-3" }, hk = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, bk = { class: "mt-1 font-medium" }, yk = { class: "flex flex-col gap-4" }, xk = { class: "grid gap-4 sm:grid-cols-2" }, kk = { class: "bg-card rounded-lg border p-4" }, $k = { class: "mb-3 text-sm font-medium" }, wk = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function s(y) {
      let C = 0;
      for (const M of y)
        C = C * 31 + M.charCodeAt(0) >>> 0;
      return C;
    }
    function i(y, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((B, _) => ({
        label: B,
        value: Math.max(0, Math.round(y + Math.sin(_ + C) * y * 0.18))
      }));
    }
    const d = x(() => n.item.kind === "unit"), u = x(() => {
      const y = [n.item.image, ...n.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(y)];
    }), f = U(0), b = x(() => {
      const y = n.item.stock ?? n.item.progress?.value ?? n.item.metrics?.price ?? n.item.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(n.item.key) % 7);
    }), g = x(() => {
      const y = n.item.progress?.value ?? (n.item.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(n.item.key) % 5 + 1);
    }), h = x(() => d.value ? g.value : b.value), w = x(() => !d.value && n.item.status !== "out-of-stock");
    return (y, C) => (t(), a("div", X0, [
      o("div", Q0, [
        o("div", ek, [
          o("div", tk, [
            u.value[f.value] ? (t(), a("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, nk)) : $("", !0)
          ]),
          u.value.length > 1 ? (t(), a("div", ak, [
            (t(!0), a(P, null, V(u.value, (M, B) => (t(), a("button", {
              key: M,
              type: "button",
              class: z(["size-16 shrink-0 overflow-hidden rounded-md border", B === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${B + 1}`,
              "aria-pressed": B === f.value ? "true" : "false",
              onClick: (_) => f.value = B
            }, [
              o("img", {
                src: M,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, ok)
            ], 10, lk))), 128))
          ])) : $("", !0)
        ]),
        o("div", sk, [
          o("div", rk, [
            o("div", ik, [
              o("h1", dk, c(e.item.label), 1),
              o("p", uk, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D($e, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", ck, c(e.item.price), 1),
          e.item.facts?.length ? (t(), a("p", fk, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", mk, [
            e.item.sku ? (t(), a("div", pk, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", vk, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", gk, [
              o("dt", hk, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", bk, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          w.value ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", yk, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", xk, [
          I(Ct, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          I(Ct, {
            label: "Price",
            value: e.item.price ?? "-",
            series: b.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", kk, [
          o("p", $k, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          I(th, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), Ck = ["href"], W8 = /* @__PURE__ */ O({
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
        R(" " + c(e.backLabel), 1)
      ], 8, Ck),
      I(wk, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => n("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Sk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, Mk = ["aria-selected", "onClick"], Bk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, _k = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Ak = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, zk = ["aria-pressed"], Pk = ["aria-pressed"], Z8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(n.tabs[0]?.key ?? ""), i = ut(e, "layout"), d = U({}), u = U(!1);
    me(
      () => n.tabs.map((M) => M.key).join(","),
      (M) => {
        M.split(",").includes(s.value) || (s.value = n.tabs[0]?.key ?? "");
      }
    );
    function f(M) {
      return d.value[M] ?? Ie();
    }
    const b = x(
      () => n.tabs.find((M) => M.key === s.value) ?? n.tabs[0] ?? null
    ), g = x(
      () => b.value ? f(b.value.key) : Ie()
    ), h = x(() => {
      const M = b.value;
      return M ? M.items.filter((B) => rn(B, f(M.key))) : [];
    });
    function w(M) {
      const B = b.value?.key;
      B && (d.value = {
        ...d.value,
        [B]: { ...f(B), query: M }
      });
    }
    function y() {
      const M = b.value?.key;
      M && (d.value = { ...d.value, [M]: Ie() });
    }
    function C(M) {
      const B = b.value?.key;
      B && (d.value = { ...d.value, [B]: M }, u.value = !1);
    }
    return (M, B) => (t(), a(P, null, [
      o("div", {
        class: z(["flex w-full flex-col gap-8", e.embedded ? "" : k(tt)])
      }, [
        I(Ee, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), a("div", Sk, [
          (t(!0), a(P, null, V(e.tabs, (_) => (t(), a("button", {
            key: _.key,
            type: "button",
            class: z([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === _.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === _.key ? "true" : "false",
            onClick: (p) => s.value = _.key
          }, c(_.label), 11, Mk))), 128))
        ])) : $("", !0),
        o("div", Bk, [
          I(we, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": g.value.query,
            type: "search",
            placeholder: b.value?.searchPlaceholder ?? "Search…",
            "aria-label": b.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": B[0] || (B[0] = (_) => w(String(_)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(St)(g.value) ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: y
          }, " Clear ")) : $("", !0),
          (b.value?.facets ?? []).length > 0 ? (t(), a("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: B[1] || (B[1] = (_) => u.value = !0)
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
            B[9] || (B[9] = R(" Filters ", -1)),
            k(St)(g.value) ? (t(), a("span", _k, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", Ak, [
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: B[2] || (B[2] = (_) => i.value = "grid")
            }, " Tiles ", 10, zk),
            o("button", {
              type: "button",
              class: z([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: B[3] || (B[3] = (_) => i.value = "list")
            }, " List ", 10, Pk)
          ])
        ]),
        I(sn, {
          layout: i.value,
          "onUpdate:layout": B[4] || (B[4] = (_) => i.value = _),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: B[5] || (B[5] = (_) => r("select", _)),
          onCart: B[6] || (B[6] = (_) => r("cart", _))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      I(na, {
        open: u.value,
        title: b.value?.filterTitle ?? "Filters",
        "search-placeholder": b.value?.searchPlaceholder ?? "Search…",
        facets: b.value?.facets ?? [],
        applied: g.value,
        onClose: B[7] || (B[7] = (_) => u.value = !1),
        onApply: C,
        onReset: y
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Ok = { class: "flex flex-col gap-4" }, Lk = { class: "flex flex-col gap-4" }, J8 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(Ie()), i = x(
      () => n.cards.filter((d) => rn(d, s.value))
    );
    return (d, u) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      I(Ee, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Ok, [
        I(Ee, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(sn, {
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
      o("section", Lk, [
        I(Ee, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        I(uo, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: f }) => [
            I($e, {
              status: String(f)
            }, {
              default: L(() => [
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
}), jk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Vk = { class: "text-sm font-medium" }, Dk = ["width", "height", "aria-label"], Tk = { class: "flex items-center gap-2" }, Ek = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(null), i = U(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(M) {
      const B = s.value;
      if (!B)
        return null;
      const _ = B.getBoundingClientRect(), p = B.width / _.width, m = B.height / _.height;
      return {
        x: (M.clientX - _.left) * p,
        y: (M.clientY - _.top) * m
      };
    }
    function b(M) {
      n.disabled || (i.value = !0, d = f(M), s.value?.setPointerCapture(M.pointerId));
    }
    function g(M) {
      if (!i.value || n.disabled)
        return;
      const B = u(), _ = f(M);
      !B || !_ || !d || (B.strokeStyle = "#111827", B.lineWidth = 2.4, B.lineCap = "round", B.lineJoin = "round", B.beginPath(), B.moveTo(d.x, d.y), B.lineTo(_.x, _.y), B.stroke(), d = _);
    }
    function h() {
      i.value = !1, d = null;
    }
    function w() {
      const M = s.value, B = u();
      !M || !B || (B.clearRect(0, 0, M.width, M.height), r("clear"));
    }
    function y() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function C() {
      const M = s.value, B = u();
      !M || !B || (B.fillStyle = "#ffffff", B.fillRect(0, 0, M.width, M.height));
    }
    return ve(C), ke(() => {
      i.value = !1;
    }), (M, B) => (t(), a("div", jk, [
      o("p", Vk, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: z(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(b, ["prevent"]),
        onPointermove: he(g, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, Dk),
      o("div", Tk, [
        I(de, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: L(() => [...B[0] || (B[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        I(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: y
        }, {
          default: L(() => [...B[1] || (B[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ik = { class: "grid gap-8 lg:grid-cols-2" }, Fk = { class: "flex flex-col gap-3" }, Nk = { class: "text-muted-foreground text-xs font-normal" }, Rk = {
  key: 0,
  class: "flex flex-col gap-3"
}, Uk = { class: "flex flex-wrap gap-3" }, Hk = ["onClick"], Kk = ["src", "alt"], qk = {
  key: 1,
  class: "flex flex-col gap-3"
}, Gk = { class: "flex flex-wrap gap-3" }, Wk = ["onClick"], Zk = ["src", "alt"], Jk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Yk = { class: "flex flex-wrap items-center gap-2" }, Xk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, Qk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, e2 = { class: "flex flex-col gap-2" }, t2 = ["src"], n2 = {
  key: 1,
  class: "text-sm text-neutral-400"
}, a2 = ["src"], Y8 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, n = U([]), r = U([]), s = U(null), i = U(null), d = U(null), u = U(l.documents[0]?.key ?? "");
    function f(M) {
      try {
        const B = localStorage.getItem(M), _ = B ? JSON.parse(B) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    ve(() => {
      !l.storageKey || typeof localStorage > "u" || (n.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = n.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), me(
      n,
      (M) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(M));
      },
      { deep: !0 }
    ), me(
      r,
      (M) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(M));
      },
      { deep: !0 }
    );
    function b(M) {
      const B = {
        id: `sig-${Date.now()}`,
        name: `Signature ${n.value.length + 1}`,
        dataUrl: M
      };
      n.value = [B, ...n.value].slice(0, 8), s.value = B.id;
    }
    async function g(M, B) {
      await Kf(M), B(40);
      const _ = await new Promise((p, m) => {
        const v = new FileReader();
        v.onload = () => p(String(v.result)), v.onerror = () => m(new Error("Could not read the file")), v.readAsDataURL(M);
      });
      return B(100), { value: _, name: M.name, size: M.size, url: _ };
    }
    function h() {
      const M = d.value?.url ?? d.value?.value;
      if (!M)
        return;
      const B = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: M
      };
      r.value = [B, ...r.value].slice(0, 8), i.value = B.id;
    }
    const w = x(
      () => n.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), y = x(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), C = x(() => {
      const M = l.documents.find((_) => _.key === u.value)?.document ?? l.documents[0]?.document ?? {}, B = {
        ...M?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...M,
        branding: B
      };
    });
    return (M, B) => (t(), a("div", {
      class: z(["flex w-full flex-col gap-10", e.embedded ? "" : k(tt)])
    }, [
      I(Ee, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Ik, [
        I(Ek, {
          label: "Draw a signature",
          onSave: b
        }),
        o("div", Fk, [
          B[2] || (B[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", Nk, c(k(Jn)), 1),
          I(Tn, {
            modelValue: d.value,
            "onUpdate:modelValue": B[0] || (B[0] = (_) => d.value = _),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: g
          }, null, 8, ["modelValue"]),
          I(de, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
          }, {
            default: L(() => [...B[1] || (B[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      n.value.length ? (t(), a("section", Rk, [
        I(Ee, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Uk, [
          (t(!0), a(P, null, V(n.value, (_) => (t(), a("button", {
            key: _.id,
            type: "button",
            class: z(["rounded-md border p-2", _.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => s.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Kk)
          ], 10, Hk))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), a("section", qk, [
        I(Ee, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", Gk, [
          (t(!0), a(P, null, V(r.value, (_) => (t(), a("button", {
            key: _.id,
            type: "button",
            class: z(["rounded-md border p-2", _.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (p) => i.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Zk)
          ], 10, Wk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), a("section", Jk, [
        o("div", Yk, [
          (t(!0), a(P, null, V(e.documents, (_) => (t(), D(de, {
            key: _.key,
            size: "sm",
            variant: u.value === _.key ? "default" : "outline",
            onClick: (p) => u.value = _.key
          }, {
            default: L(() => [
              R(c(_.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Xk, [
          I(pg, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", Qk, [
            o("div", e2, [
              B[3] || (B[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              w.value ? (t(), a("img", {
                key: 0,
                src: w.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, t2)) : (t(), a("p", n2, "Draw and save a signature"))
            ]),
            y.value ? (t(), a("img", {
              key: 0,
              src: y.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, a2)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), X8 = "panel.dashboard.hiddenWidgets", l2 = /* @__PURE__ */ Symbol("dashboardHide"), o2 = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, Q8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, n = yt(l2, null), r = U(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = U(!1);
    ve(() => {
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
    }), me(
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
    const i = x(() => n?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? $("", !0) : (t(), a("div", o2, [
      I(a1, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(n)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), s2 = { class: "flex flex-col gap-3" }, r2 = ["data-slot"], i2 = ["aria-pressed", "aria-label", "title"], d2 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, u2 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, c2 = { class: "flex h-8 items-center" }, f2 = ["aria-label", "title", "onClick"], m2 = ["aria-label", "title", "onClick"], p2 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, v2 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, e6 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = U(n.maskable ? !n.hidden : !0), i = U(/* @__PURE__ */ new Set());
    function d(p) {
      return n.maskable && (p.sensitive ?? !0);
    }
    function u(p) {
      return d(p) && !s.value && !i.value.has(p.key);
    }
    const f = x(() => n.segments.some(u)), b = x(() => n.segments.some(d)), g = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = x(() => g[n.columns] ?? g[4]), w = x(() => {
      const p = n.columns ?? 4, m = Math.floor(n.segments.length / p) * p;
      return n.segments.slice(0, m);
    }), y = x(() => {
      const p = n.columns ?? 4, m = Math.floor(n.segments.length / p) * p;
      return n.segments.slice(m);
    }), C = x(() => {
      const p = [];
      return w.value.length > 0 && p.push({ key: "packed", joined: !0, segments: w.value }), y.value.length > 0 && p.push({ key: "leftover", joined: !1, segments: y.value }), p;
    });
    function M() {
      const p = f.value === !1;
      s.value = !p, i.value = /* @__PURE__ */ new Set(), r("toggle", p);
    }
    function B(p) {
      if (!d(p))
        return;
      const m = new Set(i.value);
      if (u(p))
        m.add(p.key);
      else if (m.delete(p.key), s.value) {
        s.value = !1;
        for (const v of n.segments)
          v.key !== p.key && d(v) && m.add(v.key);
      }
      i.value = m, r("toggle", f.value);
    }
    function _(p) {
      return typeof p == "number" ? new Intl.NumberFormat().format(p) : p;
    }
    return (p, m) => (t(), a("div", s2, [
      (t(!0), a(P, null, V(C.value, (v) => (t(), a("div", {
        key: v.key,
        class: z(["relative shrink-0", v.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": v.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && b.value && v.key === C.value[0]?.key ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: M
        }, [
          (t(), a("svg", d2, [
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
        ], 8, i2)) : $("", !0),
        o("div", {
          class: z(["grid", [v.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), a(P, null, V(v.segments, (A) => (t(), a("div", {
            key: A.key,
            class: z(["bg-card flex flex-col gap-2 p-4", v.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", u2, c(A.label), 1),
            o("div", c2, [
              e.loading ? (t(), D(Pe, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (F) => B(A)
              }, [
                (t(), a(P, null, V(5, (F) => o("span", {
                  key: F,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, f2)) : d(A) ? (t(), a("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${_(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (F) => B(A)
              }, c(_(A.value)), 9, m2)) : (t(), a("span", p2, c(_(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), D(ta, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), D(zt, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            A.caption || A.comparison && A.trend ? (t(), a("p", v2, c(A.caption ?? A.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, r2))), 128))
    ]));
  }
}), g2 = ["aria-label"], h2 = ["aria-valuenow", "aria-label"], b2 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, y2 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, x2 = ["title"], k2 = { class: "font-medium" }, $2 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, w2 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, C2 = { class: "flex items-center justify-between gap-2" }, S2 = { class: "text-sm font-semibold" }, M2 = { class: "flex items-center gap-3" }, B2 = ["href"], _2 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, A2 = { class: "flex min-w-0 flex-col gap-0.5" }, z2 = { class: "text-sm font-medium" }, P2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, O2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, L2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, j2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, V2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, t6 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = x(() => n.items.find((C) => !C.done) ?? null), i = x(() => n.items.filter((C) => C.key !== s.value?.key)), d = x(() => n.items.length), u = x(() => n.items.filter((C) => C.done).length), f = x(() => {
      if (!s.value)
        return d.value;
      const C = n.items.findIndex((M) => M.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), b = x(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), g = x(() => {
      const C = n.linkComponent;
      return typeof C == "string" ? C : ma(C);
    }), h = bt({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), w = bt({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), y = bt({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, M) => e.items.length && e.variant === "onboarding" ? (t(), a("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      o("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": b.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${b.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: se({ width: `${b.value}%` })
        }, null, 4)
      ], 8, h2),
      o("div", b2, [
        o("span", y2, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", k2, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), a("span", $2, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, x2),
        s.value?.href ? (t(), D(_e(g.value), {
          key: 0,
          href: s.value.href,
          class: z(k(w))
        }, {
          default: L(() => [
            R(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), a("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (B) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, g2)) : e.items.length ? (t(), a("section", w2, [
      o("div", C2, [
        o("h2", S2, c(e.heading), 1),
        o("div", M2, [
          e.skipLabel ? (t(), a("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (B) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), a("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, B2)) : $("", !0)
        ])
      ]),
      s.value ? (t(), a("div", _2, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", A2, [
          o("p", z2, c(s.value.title), 1),
          s.value.detail ? (t(), a("p", P2, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), D(_e(g.value), {
            key: 1,
            href: s.value.href,
            class: z(k(h))
          }, {
            default: L(() => [
              R(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), a("ul", O2, [
        (t(!0), a(P, null, V(i.value, (B) => (t(), a("li", {
          key: B.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: z([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              B.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            B.done ? (t(), a("svg", L2, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", j2, [
            o("p", {
              class: z(["text-sm", B.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(B.title), 3),
            !B.done && B.detail ? (t(), a("p", V2, c(B.detail), 1)) : $("", !0)
          ]),
          !B.done && B.href ? (t(), D(_e(g.value), {
            key: 0,
            href: B.href,
            class: z(k(y))
          }, {
            default: L(() => [
              R(c(B.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), D2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, T2 = { class: "hidden items-center gap-2 md:flex" }, E2 = { class: "md:hidden" }, I2 = { class: "border-b px-4 py-3" }, F2 = { class: "text-muted-foreground text-xs font-normal" }, N2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, R2 = { class: "font-medium tabular-nums" }, U2 = { class: "ml-auto flex items-center gap-3" }, n6 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const n = l, r = U(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), a("div", D2, [
      o("div", T2, [
        K(i.$slots, "actions")
      ]),
      o("div", E2, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        I(en, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: L(() => [
            I(tn, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", I2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", F2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", N2, [
                  K(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", R2, [
        e.allMatching ? (t(), a(P, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), a(P, { key: 1 }, [
          R(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", U2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), a("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => n("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => n("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), H2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, K2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, q2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, G2 = ["value"], W2 = ["value"], Z2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, J2 = ["disabled"], Y2 = ["disabled"], X2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, Q2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, e$ = ["disabled"], a6 = /* @__PURE__ */ O({
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
    const n = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = x(() => n.rowsOnPage === 0 ? 0 : (n.page - 1) * n.perPage + 1), d = x(() => (n.page - 1) * n.perPage + n.rowsOnPage), u = x(
      () => n.total === void 0 ? null : Math.max(1, Math.ceil(n.total / n.perPage))
    );
    return (f, b) => (t(), a("div", H2, [
      o("p", K2, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), a(P, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), a("label", q2, [
        b[4] || (b[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: b[0] || (b[0] = (g) => r("update:perPage", Number(g.target.value)))
        }, [
          (t(!0), a(P, null, V(e.perPageOptions, (g) => (t(), a("option", {
            key: g,
            value: g
          }, c(g), 9, W2))), 128))
        ], 40, G2)
      ])) : $("", !0),
      o("nav", Z2, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: b[1] || (b[1] = (g) => r("first"))
        }, [...b[5] || (b[5] = [
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
        ])], 8, J2),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: b[2] || (b[2] = (g) => r("previous"))
        }, [...b[6] || (b[6] = [
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
        ])], 8, Y2),
        o("span", X2, c(e.page), 1),
        u.value !== null ? (t(), a("span", Q2, " of " + c(s(u.value)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: b[3] || (b[3] = (g) => r("next"))
        }, [...b[7] || (b[7] = [
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
        ])], 8, e$)
      ])
    ]));
  }
}), t$ = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, n$ = ["aria-current"], a$ = ["title"], l$ = ["aria-current", "onClick"], o$ = ["title"], s$ = /* @__PURE__ */ O({
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
    return (s, i) => (t(), a("div", t$, [
      o("button", {
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => n("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, a$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, n$),
      (t(!0), a(P, null, V(e.tabs, (d) => (t(), a("button", {
        key: d,
        type: "button",
        class: z([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => n("select", d)
      }, [
        R(c(d) + " ", 1),
        e.counts ? (t(), a("span", {
          key: 0,
          class: z([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, o$)) : (t(), D(Pe, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, l$))), 128))
    ]));
  }
}), l6 = /* @__PURE__ */ Bt(s$, [["__scopeId", "data-v-3967c945"]]), r$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, i$ = { class: "grid gap-2" }, d$ = {
  key: 0,
  class: "text-destructive text-sm"
}, u$ = { class: "flex gap-2" }, o6 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const n = l, s = U((() => {
      const w = navigator.userAgent, y = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: M }) => M.test(w))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: M }) => M.test(w))?.name;
      return [y, C].filter(Boolean).join(" on ") || "";
    })()), i = U(!1), d = pa(null), u = x(() => d.value?.isLoading.value ?? !1), f = x(() => d.value?.error.value ?? null), b = x(() => d.value?.isSupported.value ?? !1);
    ve(async () => {
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
    const g = async (w) => {
      w.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (w, y) => b.value ? i.value ? (t(), a("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: g
    }, [
      o("div", i$, [
        y[3] || (y[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": y[1] || (y[1] = (C) => s.value = C),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Ae, s.value]
        ]),
        y[4] || (y[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), a("p", d$, c(f.value), 1)) : $("", !0),
      o("div", u$, [
        I(de, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: L(() => [
            R(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        I(de, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: L(() => [...y[5] || (y[5] = [
            R(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), D(de, {
      key: 1,
      variant: "outline",
      onClick: y[0] || (y[0] = (C) => i.value = !0)
    }, {
      default: L(() => [...y[2] || (y[2] = [
        R(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), a("p", r$, " Passkeys are not supported in this browser. "));
  }
}), c$ = { class: "pk-form-stack" }, f$ = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, s6 = /* @__PURE__ */ O({
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
    Et("panelPicker", {
      get base() {
        return n.pickerBase ?? "";
      },
      get returnUrl() {
        return n.returnUrl ?? "";
      }
    }), Et("panelCreateOption", {
      run(f, b) {
        return n.createOption ? n.createOption(f, b) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = x(() => n.nodes.length > 0), i = x(() => n.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => n.errors._conflict);
    function u(f) {
      if (n.upload)
        return (b, g) => n.upload(f, b, g);
    }
    return (f, b) => (t(), a("div", c$, [
      d.value ? (t(), a("p", f$, c(d.value), 1)) : $("", !0),
      s.value ? (t(!0), a(P, { key: 1 }, V(e.nodes, (g, h) => (t(), D(In, {
        key: h,
        node: g,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: b[0] || (b[0] = (w, y) => r("change", w, y)),
        onAffixAction: b[1] || (b[1] = (w, y) => r("affix-action", w, y))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), a("div", {
        key: 2,
        class: z(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), a(P, null, V(e.fields, (g) => (t(), D(Xe, {
          key: g.key,
          field: g,
          value: e.modelValue[g.key],
          error: e.errors[g.key],
          errors: e.errors,
          options: e.options[g.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": g.searchable && e.searchOptions ? (h) => e.searchOptions(g.key, h) : void 0,
          upload: u(g.key),
          discard: e.discard,
          class: z(g.span && g.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", g.key, h),
          onAffixAction: (h) => r("affix-action", g.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), m$ = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, p$ = ["disabled"], v$ = ["disabled"], g$ = ["disabled"], h$ = ["disabled"], r6 = /* @__PURE__ */ O({
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
    const l = U(!1);
    ve(() => {
      l.value = !!document.getElementById("pk-main");
    });
    const n = x(() => l.value ? "#pk-main" : "body"), r = x(() => !l.value), s = x(
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4"
    );
    return (i, d) => (t(), D(dt, {
      to: n.value,
      disabled: r.value
    }, [
      I(Ye, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: L(() => [
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
              o("span", m$, c(e.message), 1),
              e.discardLabel ? (t(), a("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, p$)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, v$),
              e.extraLabel ? (t(), a("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("extra"))
              }, c(e.extraLabel), 9, g$)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[3] || (d[3] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, h$)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function i6(e, l = {}) {
  const { warnOnUnload: n = !0 } = l, r = U(Dt(e.value)), s = x(() => Dt(e.value) !== r.value);
  function i() {
    r.value = Dt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(f) {
    s.value && (f.preventDefault(), f.returnValue = "");
  }
  return ve(() => {
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
const pt = /* @__PURE__ */ new Map();
function d6(e, l) {
  pt.set(e, l);
}
function b$(e) {
  return pt.get(e);
}
function u6(e) {
  return pt.has(e);
}
function y$() {
  return [...pt.keys()].sort();
}
function c6() {
  pt.clear();
}
const x$ = {
  key: 0,
  class: "flex flex-col gap-1"
}, k$ = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, $$ = { class: "text-foreground text-sm font-medium" }, w$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, C$ = {
  key: 5,
  class: "max-w-full font-normal"
}, S$ = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, M$ = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, B$ = {
  key: 6,
  class: "font-normal"
}, _$ = {
  key: 0,
  class: "divide-y rounded-md border"
}, A$ = { class: "text-muted-foreground truncate font-medium" }, z$ = { class: "text-foreground col-span-2 break-words" }, P$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, O$ = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, L$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, j$ = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, V$ = ["href"], D$ = { class: "flex min-w-0 items-start gap-2.5" }, T$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, E$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, I$ = ["d"], F$ = { class: "min-w-0" }, N$ = { class: "flex flex-wrap items-center gap-2" }, R$ = { class: "text-sm font-semibold" }, U$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, H$ = ["onClick"], f6 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(!n.node.collapsed), i = U(0), d = x(() => n.depth === 0), u = x(() => {
      const B = n.node.columns ?? (n.node.component === "section" ? 2 : 1);
      return B >= 3 ? "sm:grid-cols-3" : B === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, b = x(() => n.node.key ? n.record[n.node.key] : null), g = x(() => {
      const B = b.value;
      return B == null || B === "";
    }), h = x(() => {
      if (g.value)
        return "None";
      const B = Number(b.value);
      if (Number.isNaN(B))
        return "None";
      const _ = n.node.divideBy ?? 100, p = B / _, m = n.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: m }).format(p);
      } catch {
        return `${m} ${p.toFixed(2)}`;
      }
    }), w = x(() => {
      if (g.value)
        return "None";
      const B = b.value;
      if (n.node.type === "date" || n.node.type === "datetime")
        return new Date(String(B)).toLocaleDateString(void 0, f[n.node.type]);
      if (n.node.type === "money")
        return h.value;
      let _ = String(B);
      return n.node.transform === "upper" && (_ = _.toUpperCase()), n.node.transform === "lower" && (_ = _.toLowerCase()), [n.node.prefix, _, n.node.suffix].filter(Boolean).join(" ");
    }), y = x(() => {
      const B = typeof b.value == "boolean" ? b.value ? "1" : "" : String(b.value), _ = n.node.colors?.[B] ?? n.node.defaultColor ?? "neutral";
      return nn[_] ?? "outline";
    }), C = x(() => {
      const B = typeof n.node.view == "string" ? n.node.view : "";
      return B ? b$(B) : void 0;
    }), M = x(() => {
      const B = typeof n.node.view == "string" ? n.node.view : "";
      if (!B)
        return "ViewEntry has no view name.";
      const _ = y$(), p = _.length > 0 ? _.join(", ") : "(none)";
      return `No entry view for [${B}]; registered: ${p}`;
    });
    return (B, _) => {
      const p = Gt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), a("div", x$, [
        o("dt", k$, c(e.node.label), 1),
        o("dd", $$, [
          e.node.type === "badge" && k(Pu)(b.value) ? (t(), D(Ge, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(c(b.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), a("span", w$, "None")) : e.node.type === "icon" ? (t(), D(lu, {
            key: 2,
            value: b.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), D(du, {
            key: 3,
            src: b.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), D(pu, {
            key: 4,
            value: typeof b.value == "string" ? b.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), a("div", C$, [
            e.node.language ? (t(), a("p", S$, c(e.node.language), 1)) : $("", !0),
            o("pre", M$, [
              o("code", null, c(b.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), a("div", B$, [
            b.value && typeof b.value == "object" && !Array.isArray(b.value) && Object.keys(b.value).length ? (t(), a("dl", _$, [
              (t(!0), a(P, null, V(b.value, (m, v) => (t(), a("div", {
                key: v,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", A$, c(v), 1),
                o("dd", z$, c(m), 1)
              ]))), 128))
            ])) : (t(), a("span", P$, "None"))
          ])) : e.node.type === "repeatable" ? (t(), a("div", O$, [
            (t(!0), a(P, null, V(Array.isArray(b.value) ? b.value : [], (m, v) => (t(), a("div", {
              key: v,
              class: "rounded-md border p-3"
            }, [
              (t(!0), a(P, null, V(e.node.entries ?? [], (A, F) => (t(), D(p, {
                key: F,
                node: A,
                record: m,
                depth: e.depth + 1,
                onAction: _[0] || (_[0] = (E) => r("action", E))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(b.value) || b.value.length === 0 ? (t(), a("span", L$, "None")) : $("", !0)
          ])) : e.node.type === "money" ? (t(), a("span", {
            key: 8,
            class: z(g.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), D(_e(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: b.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), a("p", j$, c(M.value), 1)) : e.node.url && !g.value ? (t(), a("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(w.value), 9, V$)) : (t(), a("span", {
            key: 12,
            class: z([
              g.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(w.value), 3)),
          e.node.action ? (t(), a("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: _[1] || (_[1] = (m) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
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
          onClick: _[2] || (_[2] = (m) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", D$, [
            e.node.icon ? (t(), a("div", T$, [
              (t(), a("svg", E$, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, I$)
              ]))
            ])) : $("", !0),
            o("div", F$, [
              o("div", N$, [
                o("h3", R$, c(e.node.label), 1),
                e.node.status ? (t(), D($e, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), a("p", U$, c(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), a("dl", {
          key: 0,
          class: z(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (m, v) => (t(), D(p, {
            key: v,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[3] || (_[3] = (A) => r("action", A))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), a("dl", {
        key: 2,
        class: z(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), a(P, null, V(e.node.children ?? [], (m, v) => (t(), D(p, {
          key: v,
          node: m,
          record: e.record,
          depth: e.depth + 1,
          onAction: _[4] || (_[4] = (A) => r("action", A))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), a("div", {
        key: 3,
        class: z(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: z(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), a(P, null, V(e.node.children ?? [], (m, v) => (t(), a("button", {
            key: v,
            type: "button",
            class: z([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (A) => i.value = v
          }, c(m.label), 11, H$))), 128))
        ], 2),
        (t(!0), a(P, null, V(e.node.children ?? [], (m, v) => pe((t(), a("div", {
          key: v,
          class: z(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), a(P, null, V(m.children ?? [], (A, F) => (t(), D(p, {
            key: F,
            node: A,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[5] || (_[5] = (E) => r("action", E))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === v]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), K$ = { class: "text-muted-foreground text-sm font-normal" }, q$ = { class: "flex items-start gap-3" }, G$ = { class: "min-w-0 flex-1" }, W$ = { class: "flex flex-wrap items-center gap-2" }, Z$ = { class: "truncate text-sm font-medium" }, J$ = { class: "text-muted-foreground mt-0.5 text-xs" }, Y$ = { class: "text-muted-foreground text-xs font-normal" }, X$ = { class: "mt-auto flex items-center gap-2" }, Q$ = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(
      () => n.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), a("div", {
      class: z(["flex flex-col gap-4", k(Zn)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", K$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: z(k(Df))
      }, [
        (t(!0), a(P, null, V(e.gateways, (u) => (t(), a("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", q$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", G$, [
              o("div", W$, [
                o("h3", Z$, c(u.label), 1),
                I($e, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    R(c(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D($e, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...d[0] || (d[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D($e, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...d[1] || (d[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.isDefault ? (t(), D($e, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...d[2] || (d[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.connected && u.mode ? (t(), D($e, {
                  key: 3,
                  status: u.mode
                }, {
                  default: L(() => [
                    R(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", J$, c(u.caption), 1)
            ])
          ]),
          o("p", Y$, c(u.methods.join(" · ")), 1),
          o("div", X$, [
            I(de, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: L(() => [...d[3] || (d[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            I(de, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", u.key)
            }, {
              default: L(() => [
                R(c(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), ew = { class: "flex flex-col gap-6" }, tw = { class: "relative" }, nw = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, aw = ["d"], lw = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, ow = {
  key: 0,
  class: "flex flex-col gap-4"
}, sw = { class: "flex flex-wrap items-center gap-2" }, rw = { class: "text-muted-foreground text-sm font-normal" }, iw = { class: "flex flex-col gap-1 text-sm" }, dw = ["value"], uw = {
  key: 0,
  class: "flex flex-col gap-2"
}, cw = { class: "flex flex-wrap items-center gap-2" }, fw = {
  key: 1,
  class: "flex items-center gap-2"
}, m6 = /* @__PURE__ */ O({
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
    const l = ut(e, "gateways"), n = U(null), r = U(""), s = x(
      () => l.value.find((y) => y.key === n.value) ?? null
    ), i = x(() => {
      const y = r.value.trim().toLowerCase();
      return y === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(y));
    });
    function d(y) {
      return y.connected && y.enabled !== !1;
    }
    function u(y, C) {
      l.value = l.value.map(
        (M) => M.key === y ? { ...M, ...C } : M
      );
    }
    function f(y) {
      n.value = y;
    }
    function b(y) {
      const C = l.value.find((B) => B.key === y);
      if (!C)
        return;
      const M = !C.connected;
      u(y, {
        connected: M,
        mode: M ? C.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function g(y, C) {
      const M = l.value.find((B) => B.key === y);
      M?.connected && u(y, { enabled: C, isDefault: C ? M.isDefault : !1 });
    }
    function h(y) {
      const C = l.value.find((M) => M.key === y);
      !C || !d(C) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === y
      })));
    }
    function w(y) {
      const C = n.value;
      !C || !l.value.find((B) => B.key === C)?.connected || u(C, { mode: y });
    }
    return (y, C) => (t(), a(P, null, [
      o("div", ew, [
        I(Ee, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", tw, [
          (t(), a("svg", nw, [
            o("path", {
              d: k(ce)("search")
            }, null, 8, aw)
          ])),
          I(we, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (M) => r.value = M),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(Q$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: b
        }, null, 8, ["gateways"])) : (t(), a("p", lw, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      I(_t, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (M) => n.value = null)
      }, {
        footer: L(() => [
          I(de, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (M) => n.value = null)
          }, {
            default: L(() => [...C[21] || (C[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(de, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (M) => b(s.value.key))
          }, {
            default: L(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), a("div", ow, [
            o("div", sw, [
              I($e, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  R(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D($e, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...C[9] || (C[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D($e, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...C[10] || (C[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), D($e, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...C[11] || (C[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), D($e, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  R(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", rw, c(s.value.caption), 1),
            o("label", iw, [
              C[12] || (C[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, dw)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), a("div", uw, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", cw, [
                I(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (M) => g(s.value.key, !0))
                }, {
                  default: L(() => [...C[13] || (C[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (M) => g(s.value.key, !1))
                }, {
                  default: L(() => [...C[14] || (C[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                I(de, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: C[3] || (C[3] = (M) => h(s.value.key))
                }, {
                  default: L(() => [...C[15] || (C[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), a("div", fw, [
              I(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (M) => w("test"))
              }, {
                default: L(() => [...C[18] || (C[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              I(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (M) => w("live"))
              }, {
                default: L(() => [...C[19] || (C[19] = [
                  R(" Live ", -1)
                ])]),
                _: 1
              }, 8, ["variant"])
            ])) : $("", !0)
          ])) : $("", !0)
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
function p6(e) {
  const l = U(Cn(e));
  ve(() => {
    l.value = Cn(e);
  }), me(
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
function v6(e) {
  const l = U(Sn(e));
  ve(() => {
    l.value = Sn(e);
  }), me(
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
function g6(e) {
  const { config: l, rows: n, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = U(
    l.driver === "none" ? "off" : "connecting"
  ), f = U(/* @__PURE__ */ new Set());
  let b = /* @__PURE__ */ new Map(), g, h, w, y = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function M(W, J) {
    b.set(W, { ...b.get(W) ?? {}, ...J }), !g && (g = setTimeout(() => {
      g = void 0, B();
    }, l.batchMs));
  }
  function B() {
    if (b.size === 0)
      return;
    const W = b;
    b = /* @__PURE__ */ new Map();
    const J = /* @__PURE__ */ new Set();
    for (const [Z, G] of W) {
      const q = n.value.find((N) => N[r] === Z);
      if (!q) {
        d?.(Z, G);
        continue;
      }
      Object.assign(q, G), J.add(Z);
    }
    J.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...J]), setTimeout(() => {
      const Z = new Set(f.value);
      J.forEach((G) => Z.delete(G)), f.value = Z;
    }, 1500));
  }
  async function _() {
    if (!(!s || n.value.length === 0)) {
      w?.abort(), w = new AbortController();
      try {
        const W = n.value.map((G) => G[r]), { records: J, at: Z } = await s(W, y);
        y = Z, u.value = "live";
        for (const G of J)
          M(G[r], G);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function p() {
    m(), u.value = "live", h = setInterval(_, l.intervalMs);
  }
  function m() {
    clearInterval(h), h = void 0, w?.abort();
  }
  function v() {
    return window.Echo ?? null;
  }
  function A() {
    const W = v();
    if (!W || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const J = W.private(l.channel);
    for (const Z of l.events)
      J.listen(Z, (G) => {
        G?.[r] !== void 0 && M(G[r], G);
      });
    u.value = "live", W.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), W.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function F() {
    C && (v()?.leave(C), C = null);
  }
  function E() {
    l.driver === "poll" && p(), l.driver === "broadcast" && A();
  }
  function te() {
    m(), F(), clearTimeout(g), g = void 0, b = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (y = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: u, recentlyChanged: f, applyPatch: M, flush: B, pollOnce: _ };
}
const mw = /^[a-z0-9-]+$/, pw = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function h6(e) {
  va(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [n, r] of Object.entries(e.value ?? {}))
      !mw.test(n) || typeof r != "string" || !pw.test(r) || (l[`--${n}`] = r);
    Mc(l);
  });
}
const vw = { class: "flex items-center gap-0.5" }, gw = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, n) => (t(), a("span", vw, [
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
}), hw = /* @__PURE__ */ O({
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
}), bw = { class: "flex flex-col gap-2" }, yw = { class: "bg-card rounded-lg border p-4" }, xw = { class: "text-muted-foreground truncate text-xs" }, kw = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, $w = /* @__PURE__ */ O({
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
    }, r = x(() => ({ ...n, ...l.field.limits ?? {} })), s = x(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = x(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = x(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = x(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? d.value : `${d.value} › ${C.split("/").join(" › ")}`;
    });
    function f(C, M) {
      return C.length <= M ? C : `${C.slice(0, M - 1).trimEnd()}…`;
    }
    const b = x(() => f(s.value, r.value.titleMax)), g = x(() => f(i.value, r.value.descriptionMax));
    function h(C, M, B) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > B ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const w = x(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), y = x(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, M) => (t(), a("div", bw, [
      o("div", yw, [
        o("p", xw, c(u.value), 1),
        o("p", {
          class: z(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", b.value === "" ? "text-muted-foreground italic" : ""])
        }, c(b.value || "Untitled page"), 3),
        o("p", {
          class: z(["text-muted-foreground mt-1 line-clamp-2 text-sm", g.value === "" ? "italic" : ""])
        }, c(g.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", kw, [
        o("span", {
          class: z(w.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(w.value.note), 3),
        o("span", {
          class: z(y.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(y.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), ww = ["value", "placeholder", "disabled"], Cw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => typeof n.modelValue == "string" ? n.modelValue : "");
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
    }, null, 42, ww));
  }
}), Sw = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, Mw = ["aria-selected", "disabled", "title", "onClick"], Bw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => n.field.icons ?? []), i = x(() => typeof n.modelValue == "string" ? n.modelValue : "");
    function d(u) {
      n.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, f) => (t(), a("div", Sw, [
      (t(!0), a(P, null, V(s.value, (b) => (t(), a("button", {
        key: b,
        type: "button",
        role: "option",
        class: z(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [k(Se), i.value === b ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === b,
        disabled: e.disabled,
        title: b,
        onClick: (g) => d(b)
      }, c(b), 11, Mw))), 128))
    ]));
  }
}), _w = {
  class: "relative",
  "data-test": "tree-select-field"
}, Aw = ["disabled"], zw = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, Pw = ["onClick"], Ow = ["onClick"], Lw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = U(""), i = U(!1), d = x(() => n.field.options ?? []);
    function u(h, w) {
      return !w || h.label.toLowerCase().includes(w) ? !0 : (h.children ?? []).some((y) => u(y, w));
    }
    const f = x(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter((w) => u(w, h)) : d.value;
    }), b = x(() => {
      const h = (w) => {
        for (const y of w) {
          if (y.value === n.modelValue)
            return y.label;
          const C = h(y.children ?? []);
          if (C)
            return C;
        }
        return null;
      };
      return h(d.value);
    });
    function g(h) {
      n.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, w) => (t(), a("div", _w, [
      o("button", {
        type: "button",
        class: z(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
        disabled: e.disabled,
        onClick: w[0] || (w[0] = (y) => i.value = !i.value)
      }, [
        o("span", {
          class: z(b.value ? "" : "text-muted-foreground")
        }, c(b.value ?? "Select…"), 3),
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, Aw),
      i.value ? (t(), a("div", zw, [
        e.field.searchable ? pe((t(), a("input", {
          key: 0,
          "onUpdate:modelValue": w[1] || (w[1] = (y) => s.value = y),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), a(P, null, V(f.value, (y) => (t(), a(P, {
          key: String(y.value)
        }, [
          o("button", {
            type: "button",
            class: z(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === y.value ? "bg-accent" : ""]),
            onClick: (C) => g(y.value)
          }, c(y.label), 11, Pw),
          (t(!0), a(P, null, V(y.children ?? [], (C) => (t(), a("button", {
            key: String(C.value),
            type: "button",
            class: z(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => g(C.value)
          }, c(C.label), 11, Ow))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), jw = ["aria-label"], Vw = ["disabled", "aria-label", "aria-pressed", "onClick"], Dw = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, Tw = { key: 0 }, Ew = ["id"], Iw = ["fill"], Fw = ["disabled"], Nw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const n = e, r = l, s = x(() => Math.max(1, Math.min(10, Number(n.field.max ?? 5)))), i = x(() => !!n.field.allowHalf), d = x(() => {
      const b = Number(n.modelValue);
      return Number.isFinite(b) ? b : 0;
    });
    function u(b) {
      n.disabled || r("update:modelValue", b);
    }
    function f(b) {
      return d.value >= b ? "full" : i.value && d.value >= b - 0.5 ? "half" : "empty";
    }
    return (b, g) => (t(), a("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), a(P, null, V(s.value, (h) => (t(), a("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: (w) => u(h)
      }, [
        (t(), a("svg", Dw, [
          f(h) === "half" ? (t(), a("defs", Tw, [
            o("linearGradient", {
              id: `half-${e.field.key}-${h}`,
              x1: "0",
              x2: "1",
              y1: "0",
              y2: "0"
            }, [...g[1] || (g[1] = [
              o("stop", {
                offset: "50%",
                "stop-color": "currentColor"
              }, null, -1),
              o("stop", {
                offset: "50%",
                "stop-color": "transparent",
                "stop-opacity": "1"
              }, null, -1)
            ])], 8, Ew)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, Iw)
        ]))
      ], 8, Vw))), 128)),
      d.value > 0 ? (t(), a("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: g[0] || (g[0] = (h) => u(0))
      }, " Clear ", 8, Fw)) : $("", !0)
    ], 8, jw));
  }
});
function Rw() {
  xe("radio", kp), xe("toggle-buttons", En), xe("checkboxlist", Cp), xe("tags", Pp), xe("colour", Up), xe("slider", $v), xe("rating", Nw), xe("phone", Cw), xe("icon-picker", Bw), xe("tree-select", Lw), xe("visual-select", Vv), xe("markdown", ep), xe("code", rp), xe("map", Wp), xe("qrcode", Qp), xe("barcode", sv), xe("diff", dv), xe("seo-preview", $w), Vt("swatch", Tv), Vt("voucher-code-box", hw), Vt("document-colour-mode", gw);
}
function aa() {
  const e = U(null), l = U(!1);
  let n = null;
  return ve(() => {
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
const Uw = /* @__PURE__ */ O({
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
      K(r.$slots, "default")
    ], 6));
  }
}), Hw = ["id"], Me = /* @__PURE__ */ O({
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
        I(Uw, null, {
          default: L(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Hw));
  }
}), Kw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, qw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Gw = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, je = /* @__PURE__ */ O({
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
      e.eyebrow ? (t(), a("p", Kw, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), a("h2", qw, c(e.title), 1)) : $("", !0),
      e.body ? (t(), a("p", Gw, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), Ww = { class: "flex flex-col gap-10" }, Zw = { class: "grid gap-4 md:grid-cols-3" }, Jw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, Yw = { class: "text-sm font-semibold text-balance" }, Xw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, Qw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", Ww, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Zw, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", { key: s }, [
              (t(), D(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), a("p", Jw, c(r.meta), 1)) : $("", !0),
                  o("h3", Yw, c(r.title), 1),
                  r.body ? (t(), a("p", Xw, c(r.body), 1)) : $("", !0)
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
function e4() {
  const e = U(null);
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
  return ve(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", n, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", n), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const t4 = { class: "pk-tilt-inner relative h-full" }, n4 = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = e4();
    return (n, r) => (t(), a("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", t4, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(n.$slots, "default")
      ])
    ], 512));
  }
}), a4 = { class: "flex flex-col gap-10" }, l4 = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, o4 = { class: "text-base font-semibold" }, s4 = { class: "text-sm text-pretty text-muted-foreground" }, r4 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", a4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", l4, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), D(n4, {
              key: i,
              class: z(l(s.span))
            }, {
              default: L(() => [
                o("div", {
                  class: z([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", o4, c(s.title), 1),
                  o("p", s4, c(s.body), 1)
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
}), i4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, d4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, u4 = { class: "grid gap-4 text-sm" }, c4 = {
  key: 0,
  class: "grid gap-1"
}, f4 = ["href"], m4 = {
  key: 1,
  class: "grid gap-1"
}, p4 = ["href"], v4 = {
  key: 2,
  class: "grid gap-1"
}, g4 = { class: "text-pretty text-muted-foreground" }, h4 = ["href"], b4 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", i4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", d4, [
            o("dl", u4, [
              e.email ? (t(), a("div", c4, [
                n[0] || (n[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, f4)
                ])
              ])) : $("", !0),
              e.phone ? (t(), a("div", m4, [
                n[1] || (n[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, p4)
                ])
              ])) : $("", !0),
              e.address ? (t(), a("div", v4, [
                n[2] || (n[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", g4, c(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), a("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, h4)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), y4 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, x4 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, k4 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, $4 = ["href"], w4 = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", y4, [
          o("h2", x4, c(e.title), 1),
          e.body ? (t(), a("p", k4, c(e.body), 1)) : $("", !0),
          e.label ? (t(), a("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, $4)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), C4 = { class: "flex flex-col gap-8" }, S4 = { class: "divide-y rounded-lg border" }, M4 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, B4 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, _4 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { narrow: "" }, {
      default: L(() => [
        o("div", C4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", S4, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("details", {
              key: s,
              class: "group"
            }, [
              o("summary", M4, [
                R(c(r.question) + " ", 1),
                n[0] || (n[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", B4, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), A4 = { class: "flex flex-col gap-10" }, z4 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, P4 = { class: "text-sm font-semibold" }, O4 = { class: "text-sm text-pretty text-muted-foreground" }, L4 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", A4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", z4, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", P4, c(r.title), 1),
              o("p", O4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), j4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, V4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, D4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, T4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, E4 = ["href"], I4 = ["href"], F4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, N4 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", {
          class: z(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), a("p", j4, c(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), a("p", V4, c(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: z([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), a("p", D4, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), a("div", T4, [
            e.secondaryLabel ? (t(), a("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, E4)) : $("", !0),
            e.primaryLabel ? (t(), a("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, I4)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), a("p", F4, c(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), R4 = { class: "flex flex-col items-center gap-6" }, U4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, H4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, K4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, { muted: "" }, {
      default: L(() => [
        o("div", R4, [
          e.title ? (t(), a("p", U4, c(e.title), 1)) : $("", !0),
          o("ul", H4, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), q4 = { class: "flex flex-col gap-10" }, G4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, W4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, Z4 = ["aria-pressed"], J4 = ["aria-pressed"], Y4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, X4 = { class: "grid gap-4 md:grid-cols-3" }, Q4 = { class: "flex flex-col gap-1" }, e5 = { class: "text-sm font-semibold" }, t5 = { class: "flex items-baseline gap-1" }, n5 = { class: "text-3xl font-semibold tracking-tight" }, a5 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, l5 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, o5 = { class: "flex flex-col gap-2 text-sm" }, s5 = { class: "text-muted-foreground" }, r5 = ["href"], i5 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, n = U(!1), r = x(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return n.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(Me, { muted: "" }, {
      default: L(() => [
        o("div", q4, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), a("div", G4, [
            o("div", W4, [
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !n.value,
                onClick: d[0] || (d[0] = (u) => n.value = !1)
              }, " Monthly ", 10, Z4),
              o("button", {
                type: "button",
                class: z([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  n.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": n.value,
                onClick: d[1] || (d[1] = (u) => n.value = !0)
              }, " Annual ", 10, J4)
            ]),
            e.annualNote ? (t(), a("p", Y4, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", X4, [
            (t(!0), a(P, null, V(e.items ?? [], (u, f) => (t(), a("li", {
              key: f,
              class: z(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", Q4, [
                o("h3", e5, c(u.name), 1),
                o("p", t5, [
                  o("span", n5, c(s(u)), 1),
                  u.period ? (t(), a("span", a5, c(u.period), 1)) : $("", !0)
                ]),
                u.body ? (t(), a("p", l5, c(u.body), 1)) : $("", !0)
              ]),
              o("ul", o5, [
                (t(!0), a(P, null, V(u.features ?? [], (b, g) => (t(), a("li", {
                  key: g,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", s5, c(b.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), a("a", {
                key: 0,
                href: u.href ?? "#",
                class: z([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, r5)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function d5() {
  const e = U(null);
  let l = null, n = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), f = u.height + window.innerHeight, b = f <= 0 ? 0 : (window.innerHeight - u.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(b, 0), 1)));
  }
  function d() {
    r || (r = !0, requestAnimationFrame(i));
  }
  return ve(() => {
    const u = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (e.value) {
      if (l = e.value, u || typeof IntersectionObserver > "u") {
        l.style.setProperty("--pk-progress", "1");
        return;
      }
      l.style.setProperty("--pk-progress", "0"), n = new IntersectionObserver((f) => {
        s = f.some((b) => b.isIntersecting), s && d();
      }), n.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    n?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const u5 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, c5 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, f5 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, m5 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, p5 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, v5 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, g5 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, h5 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, b5 = { class: "ml-3 truncate text-xs text-muted-foreground" }, y5 = { class: "flex" }, x5 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, k5 = { class: "min-w-0 flex-1 p-4" }, $5 = { class: "flex flex-col divide-y rounded-md border" }, w5 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = d5();
    return (n, r) => (t(), a("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", u5, [
        o("div", c5, [
          o("div", f5, [
            o("h2", m5, c(e.title), 1),
            e.body ? (t(), a("p", p5, c(e.body), 1)) : $("", !0)
          ]),
          o("div", v5, [
            o("div", g5, [
              o("div", h5, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", b5, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", y5, [
                o("div", x5, [
                  (t(), a(P, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", k5, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", $5, [
                    (t(!0), a(P, null, V(e.rows, (s) => (t(), a("div", {
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
}), C5 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: n, shown: r } = aa(), s = U(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), f = (b) => {
        const g = Math.min((b - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - g, 3)), g < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, d) => (t(), a("span", {
      ref_key: "el",
      ref: n
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), S5 = { class: "flex flex-col gap-10" }, M5 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, B5 = { class: "order-2 text-sm text-muted-foreground" }, _5 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, A5 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", S5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", M5, [
            (t(!0), a(P, null, V(e.items ?? [], (s, i) => (t(), a("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", B5, c(s.label), 1),
              o("dd", _5, [
                l(s.value) ? (t(), D(C5, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), a(P, { key: 1 }, [
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
}), z5 = { class: "flex flex-col gap-10" }, P5 = { class: "grid gap-6 md:grid-cols-3" }, O5 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, L5 = { class: "text-sm font-semibold" }, j5 = { class: "text-sm text-pretty text-muted-foreground" }, V5 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", z5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", P5, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", O5, c(s + 1), 1),
              o("h3", L5, c(r.title), 1),
              o("p", j5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), D5 = { class: "flex flex-col gap-10" }, T5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, E5 = ["src"], I5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, F5 = { class: "min-w-0" }, N5 = { class: "truncate text-sm font-semibold" }, R5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, U5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, H5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", D5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", T5, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), a("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, E5)) : (t(), a("span", I5, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", F5, [
                o("h3", N5, c(r.name), 1),
                r.role ? (t(), a("p", R5, c(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), a("p", U5, c(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), K5 = { class: "flex flex-col gap-10" }, q5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, G5 = { class: "text-pretty text-sm leading-relaxed" }, W5 = { class: "mt-auto flex items-center gap-3" }, Z5 = ["src"], J5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, Y5 = { class: "min-w-0" }, X5 = { class: "block truncate text-sm font-medium" }, Q5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, e3 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, n) => (t(), D(Me, null, {
      default: L(() => [
        o("div", K5, [
          I(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", q5, [
            (t(!0), a(P, null, V(e.items ?? [], (r, s) => (t(), a("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", G5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", W5, [
                r.avatar ? (t(), a("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, Z5)) : (t(), a("span", J5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", Y5, [
                  o("span", X5, c(r.name), 1),
                  r.role ? (t(), a("span", Q5, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), b6 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const n = e, r = {
      hero: N4,
      logos: K4,
      features: L4,
      bento: r4,
      showcase: w5,
      steps: V5,
      stats: A5,
      testimonials: e3,
      team: H5,
      articles: Qw,
      contact: b4,
      pricing: i5,
      faq: _4,
      cta: w4
    }, s = x(
      () => (n.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && n.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), a(P, null, V(s.value, (u) => (t(), D(_e(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), t3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, y6 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, n) => (t(), a("div", t3, [
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
}), n3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, x6 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", n3, [...n[0] || (n[0] = [
      Mt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), a3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, k6 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", a3, [...n[0] || (n[0] = [
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
}), l3 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, $6 = /* @__PURE__ */ O({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, n) => (t(), a("div", l3, [...n[0] || (n[0] = [
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
Rw();
const w6 = "0.0.1";
export {
  fn as ACTION_KEY_ICONS,
  Rt as APPEARANCE_STYLE_ID,
  Af as Alert,
  zf as AlertDescription,
  Pf as AlertTitle,
  S8 as AppPageFooter,
  R3 as AppearanceDrawer,
  NC as Avatar,
  RC as AvatarFallback,
  UC as AvatarImage,
  nn as BADGE_VARIANTS,
  D3 as BadgeResolver,
  L8 as BarChart,
  HC as Breadcrumb,
  KC as BreadcrumbEllipsis,
  qC as BreadcrumbItem,
  GC as BreadcrumbLink,
  WC as BreadcrumbList,
  ZC as BreadcrumbPage,
  JC as BreadcrumbSeparator,
  b3 as BulkActions,
  Zn as CATALOGUE_CONTAINER,
  Df as CATALOGUE_GRID,
  Z3 as CATALOGUE_GRID_TIGHT,
  Tf as CATALOGUE_GRID_TILES,
  v8 as Card,
  g8 as CardAction,
  h8 as CardContent,
  b8 as CardDescription,
  y8 as CardFooter,
  x8 as CardHeader,
  k8 as CardTitle,
  j0 as CartPanel,
  Z8 as CatalogBrowser,
  ey as CatalogCard,
  na as CatalogFilterSheet,
  sn as CatalogGrid,
  G8 as CatalogInspect,
  wk as CatalogItemDetail,
  W8 as CatalogItemView,
  J8 as CatalogRegister,
  q8 as CatalogTill,
  Eb as ChartCard,
  mt as ChartTooltip,
  ei as Checkbox,
  z3 as CheckboxCell,
  P3 as CodeCell,
  pu as ColourCell,
  E8 as ComboChart,
  Qr as CreateOptionDialog,
  Gr as CreateOptionError,
  X8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  l2 as DASHBOARD_HIDE_KEY,
  Q8 as DashboardShortcuts,
  uo as DataTable,
  l8 as Dialog,
  o8 as DialogClose,
  s8 as DialogContent,
  r8 as DialogDescription,
  i8 as DialogFooter,
  d8 as DialogHeader,
  pm as DialogOverlay,
  u8 as DialogScrollContent,
  c8 as DialogTitle,
  f8 as DialogTrigger,
  BC as DropdownMenu,
  _C as DropdownMenuCheckboxItem,
  AC as DropdownMenuContent,
  zC as DropdownMenuGroup,
  PC as DropdownMenuItem,
  OC as DropdownMenuLabel,
  M6 as DropdownMenuPortal,
  LC as DropdownMenuRadioGroup,
  jC as DropdownMenuRadioItem,
  VC as DropdownMenuSeparator,
  DC as DropdownMenuShortcut,
  TC as DropdownMenuSub,
  EC as DropdownMenuSubContent,
  IC as DropdownMenuSubTrigger,
  FC as DropdownMenuTrigger,
  j3 as EditableCell,
  Se as FOCUS_RING,
  y3 as FOCUS_RING_SOFT,
  pn as FOCUS_RING_WITHIN,
  co as FORM_MEASURE,
  Xe as FormFieldControl,
  I8 as HeatmapChart,
  pl as ICON_ALIASES,
  ht as ICON_PATHS,
  Ue as INPUT_COPY,
  Yr as INPUT_PLACEHOLDER,
  Jr as INPUT_TEXT,
  lu as IconCell,
  du as ImageCell,
  f6 as InfoNode,
  T3 as InlineRecordActions,
  Ff as JPEG_IMAGE_ERROR,
  O3 as KeyValueCell,
  m8 as Label,
  th as LineChart,
  p0 as LineItems,
  g3 as MODAL_PANEL,
  h3 as MODAL_PANEL_FORM,
  xt as MODAL_WIDTH,
  M3 as MUTED_COPY,
  gt as MUTED_COPY_SNUG,
  B3 as MUTED_COPY_XS,
  Ct as MiniStatCard,
  YC as NavigationMenu,
  XC as NavigationMenuContent,
  QC as NavigationMenuIndicator,
  e8 as NavigationMenuItem,
  t8 as NavigationMenuLink,
  n8 as NavigationMenuList,
  a8 as NavigationMenuTrigger,
  fm as NavigationMenuViewport,
  If as OPAQUE_IMAGE_ERROR,
  Dn as OVERLAY_FORM_MEASURE,
  tt as PAGE_SHELL,
  p3 as PAGE_SHELL_COMPACT,
  v3 as PAGE_SHELL_STACK,
  m6 as PaymentGatewaySettings,
  Q$ as PaymentGateways,
  j8 as PieChart,
  G3 as PkAlertError,
  Qw as PkArticles,
  y6 as PkAuroraBackdrop,
  Ge as PkBadge,
  sv as PkBarcode,
  r4 as PkBento,
  U3 as PkBottomNav,
  $8 as PkBoundary,
  _8 as PkBuilder,
  de as PkButton,
  A8 as PkCalendar,
  w8 as PkCard,
  Cp as PkCheckboxList,
  ea as PkCodeBox,
  rp as PkCodeInput,
  Up as PkColourPicker,
  k6 as PkConsoleBackdrop,
  b4 as PkContact,
  C5 as PkCountUp,
  w4 as PkCta,
  M8 as PkDeviceFrame,
  dv as PkDiff,
  pg as PkDocument,
  qe as PkDropdown,
  x6 as PkEditorialBackdrop,
  It as PkEmptyState,
  _4 as PkFaq,
  L4 as PkFeatureGrid,
  ze as PkFieldLabel,
  Tn as PkFileUpload,
  Ee as PkHeading,
  N4 as PkHero,
  _i as PkKeyValue,
  b6 as PkLandingSections,
  K4 as PkLogoCloud,
  Kp as PkMap,
  Wp as PkMapField,
  ep as PkMarkdownInput,
  it as PkModal,
  Qt as PkMultiSelect,
  K3 as PkOtpInput,
  q3 as PkPageHeader,
  o6 as PkPasskeyRegister,
  W3 as PkPasswordInput,
  i5 as PkPricing,
  Qp as PkQrCode,
  a0 as PkQtyStepper,
  gs as PkQueryBuilder,
  kp as PkRadioGroup,
  B8 as PkRepeater,
  Uw as PkReveal,
  Ei as PkRichEditor,
  Me as PkSection,
  je as PkSectionHeading,
  w5 as PkShowcase,
  Ek as PkSignaturePad,
  Pe as PkSkeleton,
  _t as PkSlideover,
  $v as PkSlider,
  H3 as PkSpinner,
  A5 as PkStats,
  $e as PkStatusBadge,
  Kr as PkStepIndicator,
  V5 as PkSteps,
  $6 as PkStudioBackdrop,
  Tv as PkSwatchPreview,
  Pp as PkTagsInput,
  H5 as PkTeam,
  e3 as PkTestimonials,
  we as PkTextInput,
  n4 as PkTiltCard,
  En as PkToggleButtons,
  Vv as PkVisualSelect,
  By as PlanCard,
  H8 as PlanEditor,
  U8 as PlanGrid,
  K8 as PlanPurchaseCard,
  T8 as PolarAreaChart,
  D8 as RadarChart,
  A3 as RatingCell,
  ac as RecordActions,
  s6 as RecordForm,
  _3 as RelationCreateDialog,
  k3 as RelationPanel,
  fo as SLIDEOVER_BODY,
  mo as SLIDEOVER_WIDTH,
  P1 as STATUS_TONES,
  V8 as ScatterChart,
  In as SchemaNode,
  N8 as SegmentedBar,
  n6 as SelectionBar,
  rm as Separator,
  t6 as SetupChecklist,
  Wn as ShadcnInput,
  en as Sheet,
  eC as SheetClose,
  tn as SheetContent,
  qf as SheetDescription,
  tC as SheetFooter,
  Gf as SheetHeader,
  Wf as SheetTitle,
  nC as SheetTrigger,
  a1 as ShortcutsWidget,
  aC as Sidebar,
  lC as SidebarContent,
  oC as SidebarFooter,
  sC as SidebarGroup,
  rC as SidebarGroupAction,
  iC as SidebarGroupContent,
  dC as SidebarGroupLabel,
  uC as SidebarHeader,
  cC as SidebarInput,
  fC as SidebarInset,
  mC as SidebarMenu,
  pC as SidebarMenuAction,
  vC as SidebarMenuBadge,
  hC as SidebarMenuButton,
  bC as SidebarMenuItem,
  yC as SidebarMenuSkeleton,
  xC as SidebarMenuSub,
  kC as SidebarMenuSubButton,
  $C as SidebarMenuSubItem,
  wC as SidebarProvider,
  CC as SidebarRail,
  SC as SidebarSeparator,
  MC as SidebarTrigger,
  Y8 as SignatureStudio,
  zt as Sparkline,
  p8 as Spinner,
  F8 as StatCard,
  R8 as StatListChart,
  e6 as StatStrip,
  Ze as Switch,
  Jn as TRANSPARENT_IMAGE_HELP,
  a6 as TablePagination,
  qo as TableShell,
  l6 as TableTabs,
  wr as TableToolbar,
  L3 as TagsCell,
  O8 as ThemeToggle,
  lm as Tooltip,
  om as TooltipContent,
  gC as TooltipProvider,
  sm as TooltipTrigger,
  ta as TrendBadge,
  r6 as UnsavedBar,
  Of as alertVariants,
  Cc as appearancePayload,
  Un as appearanceVars,
  Ut as applyAppearance,
  Kf as assertTransparentImage,
  I3 as bootstrapAppearance,
  bt as buttonClasses,
  St as catalogFiltersActive,
  ne as cn,
  Zr as createOptionActionLabel,
  Wr as createOptionTitle,
  ty as cycleLabel,
  Ie as emptyCatalogFilters,
  b$ as entryView,
  qr as fieldControl,
  S3 as fieldErrorsFromPayload,
  Fx as findExactSku,
  ny as formatPerkValue,
  Pu as hasBadgeValue,
  u6 as hasEntryView,
  $3 as hasFieldControl,
  z8 as hasOptionPreview,
  ce as iconPath,
  Uf as imageHasTransparency,
  Hn as initializeAppearance,
  ln as isDark,
  rn as matchCatalogItem,
  X3 as mergeLayoutItems,
  mm as navigationMenuTriggerStyle,
  wv as optionPreview,
  J3 as packWidgetColumns,
  Y3 as parseWidgetId,
  ay as perkGranted,
  on as readAppearance,
  Sc as readServerAppearance,
  Rw as registerBuiltInFieldControls,
  d6 as registerEntryView,
  xe as registerFieldControl,
  Vt as registerOptionPreview,
  y$ as registeredEntryViews,
  w3 as registeredFieldTypes,
  Cv as registeredOptionPreviews,
  E3 as resetAppearanceBootstrapForTests,
  c6 as resetEntryViews,
  C3 as resetFieldControls,
  P8 as resetOptionPreviews,
  Te as resolveActionIcon,
  N3 as setAppearancePersister,
  im as sidebarMenuButtonVariants,
  V1 as statusBadgeVariant,
  j1 as statusTone,
  F3 as syncAppearanceFromInertiaPage,
  Q3 as toPersistedLayout,
  x3 as toUrl,
  Gn as useAppearance,
  p6 as useColumnVisibility,
  v6 as useColumnWidths,
  g6 as useLiveUpdates,
  e4 as usePointer,
  aa as useReveal,
  V3 as useSchemaColumns,
  d5 as useScrollProgress,
  C8 as useShellPageFooter,
  At as useSidebar,
  h6 as useTenantTheme,
  i6 as useUnsavedChanges,
  w6 as version,
  hn as widgetId
};
//# sourceMappingURL=index.js.map
