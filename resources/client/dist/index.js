import './ui.css';
import { defineComponent as O, useSlots as qt, openBlock as t, createElementBlock as n, normalizeClass as P, unref as k, renderSlot as K, createElementVNode as o, toDisplayString as c, createCommentVNode as $, computed as x, normalizeStyle as se, Fragment as z, renderList as j, ref as U, watch as me, useId as rn, withModifiers as he, createTextVNode as R, createVNode as E, createStaticVNode as Mt, createBlock as D, createSlots as rt, withCtx as L, nextTick as De, onBeforeUnmount as ke, Teleport as ut, Transition as Ye, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as Me, resolveComponent as Gt, vModelSelect as Ge, vModelDynamic as dn, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as ua, inject as yt, vShow as Ue, withKeys as Tt, onUnmounted as un, isRef as cn, useTemplateRef as fn, onErrorCaptured as mn, provide as Et, markRaw as Sa, reactive as it, useModel as ct, mergeModels as Ie, shallowRef as pn, watchEffect as vn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as Ma, DialogOverlay as Wt, DialogPortal as Zt, DialogContent as Jt, DialogClose as Qe, CheckboxRoot as gn, CheckboxIndicator as hn, SwitchRoot as bn, SwitchThumb as yn, DialogDescription as Ba, DialogTitle as _a, DialogTrigger as Aa, createContext as xn, Primitive as et, TooltipRoot as kn, TooltipPortal as $n, TooltipContent as wn, TooltipArrow as Cn, TooltipProvider as Pa, TooltipTrigger as Sn, Separator as Mn, DropdownMenuRoot as Bn, DropdownMenuCheckboxItem as _n, DropdownMenuItemIndicator as za, DropdownMenuPortal as An, DropdownMenuContent as Pn, DropdownMenuGroup as zn, useForwardProps as Le, DropdownMenuItem as On, DropdownMenuLabel as Ln, DropdownMenuRadioGroup as Vn, DropdownMenuRadioItem as jn, DropdownMenuSeparator as Dn, DropdownMenuSub as Tn, DropdownMenuSubContent as En, DropdownMenuSubTrigger as In, DropdownMenuTrigger as Fn, AvatarRoot as Nn, AvatarFallback as Rn, AvatarImage as Un, NavigationMenuViewport as Hn, NavigationMenuRoot as Kn, NavigationMenuContent as qn, NavigationMenuIndicator as Gn, NavigationMenuItem as Wn, NavigationMenuLink as Zn, NavigationMenuList as Jn, NavigationMenuTrigger as Yn, Label as Xn } from "reka-ui";
import { DropdownMenuPortal as y6 } from "reka-ui";
import { X as Yt, Check as Oa, AlertCircle as Qn, EyeOff as el, Eye as tl, PanelLeftOpen as al, PanelLeftClose as nl, Circle as ll, ChevronRight as La, MoreHorizontal as ol, ChevronDown as sl, Loader2Icon as rl } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Va, useMediaQuery as il, useEventListener as dl, defaultDocument as ul } from "@vueuse/core";
import { clsx as cl } from "clsx";
import { twMerge as fl } from "tailwind-merge";
import { cva as Xt } from "class-variance-authority";
import { usePage as ja, Link as ml } from "@inertiajs/vue3";
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
}, ca = {
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
}, fa = {
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
function ot(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== bt.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = ca[l] ?? ca[l.replace(/_/g, "-")];
    if (s)
      return ce(s);
  }
  const a = vl(e.label);
  if (a)
    return ce(a);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && fa[r] ? ce(fa[r]) : ce("circle");
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
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), n("div", gl, [
        K(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: P(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        K(a.$slots, "icon", {}, () => [
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.75",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: P(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: k(ce)(e.icon)
            }, null, 8, hl)
          ], 2))
        ])
      ], 2)),
      o("div", bl, [
        o("p", {
          class: P(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), n("p", yl, c(e.description), 1)) : $("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", xl, [
        K(a.$slots, "actions")
      ])) : $("", !0)
    ], 2));
  }
}), kl = ["aria-label"], ze = /* @__PURE__ */ O({
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
    }, r = x(() => a[l.variant] ?? a.text), s = x(() => Math.max(1, Math.min(l.count, 50)));
    function i(d) {
      if (!(l.variant !== "text" || s.value === 1))
        return d === s.value - 1 ? "60%" : void 0;
    }
    return (d, u) => (t(), n("div", {
      role: "status",
      "aria-label": e.label,
      "aria-live": "polite",
      class: "flex flex-col gap-2",
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, j(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
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
}, Al = { class: "bg-muted/50" }, Pl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, zl = ["id", "checked", "indeterminate"], Ol = ["onClick"], Ll = {
  key: 0,
  class: "text-xs"
}, Vl = {
  key: 1,
  class: "text-xs opacity-40"
}, jl = { key: 1 }, Dl = ["aria-label", "onPointerdown"], Tl = {
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
}, ao = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, no = { key: 0 }, lo = { class: "text-muted-foreground block text-[10px] font-medium" }, oo = { class: "font-semibold tabular-nums" }, so = { key: 1 }, ro = 40, io = /* @__PURE__ */ O({
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
    function r(Y) {
      if (!Y || !a.groupBy)
        return "";
      if (Y.__group !== void 0 && Y.__group !== null)
        return String(Y.__group);
      const le = Y[a.groupBy.key];
      return le == null || le === "" ? "" : String(le);
    }
    function s(Y) {
      return a.groupBy ? Y === 0 ? !0 : r(a.rows[Y]) !== r(a.rows[Y - 1]) : !1;
    }
    function i(Y) {
      if (Y.__groupTitle)
        return String(Y.__groupTitle);
      const le = a.groupBy ? Y[a.groupBy.key] : null, ee = le == null || le === "" ? "None" : String(le);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? ee : `${a.groupBy.label}: ${ee}`;
    }
    const d = U(/* @__PURE__ */ new Set()), u = U(/* @__PURE__ */ new Set());
    function f(Y) {
      return a.groupBy?.collapsible ? d.value.has(Y) : !1;
    }
    function g(Y) {
      if (!a.groupBy?.collapsible)
        return;
      const le = new Set(u.value);
      le.add(Y), u.value = le;
      const ee = new Set(d.value);
      ee.has(Y) ? ee.delete(Y) : ee.add(Y), d.value = ee;
    }
    function p(Y) {
      return a.groupBy?.collapsible ? !f(r(a.rows[Y])) : !0;
    }
    me(
      () => a.rows,
      (Y) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const le = new Set(d.value);
        for (const ee of Y) {
          const ue = r(ee);
          ue !== "" && !u.value.has(ue) && le.add(ue);
        }
        d.value = le;
      },
      { immediate: !0 }
    );
    const h = U(null), w = U(null);
    function y(Y, le) {
      h.value = Y, le.dataTransfer?.setData("text/plain", String(Y)), le.dataTransfer && (le.dataTransfer.effectAllowed = "move");
    }
    function C() {
      h.value = null, w.value = null;
    }
    function S(Y) {
      return h.value === null || w.value !== Y ? "" : h.value > Y ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function M(Y, le) {
      h.value !== null && (le.preventDefault(), w.value = Y);
    }
    function _(Y) {
      const le = h.value;
      if (h.value = null, w.value = null, le === null || le === Y)
        return;
      const ee = a.rows.map((ie) => ie[a.rowKey]), [ue] = ee.splice(le, 1);
      ee.splice(Y, 0, ue), m("reorder", ee);
    }
    const m = l;
    function v(Y, le) {
      !a.rowClickable || a.reordering || le.button !== 0 || le.metaKey || le.ctrlKey || le.shiftKey || le.altKey || le.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", Y);
    }
    const b = U(null), A = rn(), I = x(() => a.columns.filter((Y) => !a.hidden?.has(Y.key))), T = x(() => {
      const Y = I.value.find((le) => le.sticky);
      return Y ? Y.key : a.stickyFirst && I.value.length > 0 ? I.value[0].key : null;
    });
    function te(Y) {
      return T.value === Y.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${ro}px` : "0";
    }
    function Z(Y) {
      const le = a.columnWidths?.[Y.key];
      return typeof le == "number" ? le : Y.width;
    }
    function N(Y) {
      const le = Z(Y), ee = te(Y), ue = {};
      return le !== void 0 && (ue.width = `${le}px`, ue.minWidth = `${le}px`, ue.maxWidth = `${le}px`), ee && (ue.left = H()), Object.keys(ue).length ? ue : void 0;
    }
    function W(Y) {
      return a.resizable ? Y.resizable !== !1 : !1;
    }
    function J(Y, le) {
      if (!W(Y))
        return;
      le.preventDefault(), le.stopPropagation();
      const ee = le.clientX, ue = Z(Y) ?? 160, ie = le.currentTarget;
      try {
        ie.setPointerCapture(le.pointerId);
      } catch {
      }
      function He(at) {
        const zt = ue + (at.clientX - ee);
        m("resize", Y.key, Math.min(1200, Math.max(48, zt)));
      }
      function Ne(at) {
        try {
          ie.releasePointerCapture(at.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", He), ie.removeEventListener("pointerup", Ne), ie.removeEventListener("pointercancel", Ne);
      }
      ie.addEventListener("pointermove", He), ie.addEventListener("pointerup", Ne), ie.addEventListener("pointercancel", Ne);
    }
    const G = x(() => I.value.some((Y) => !!Y.group)), q = x(() => {
      const Y = [];
      for (const le of I.value) {
        const ee = le.group ?? null, ue = Y[Y.length - 1];
        ue && ue.label === ee ? ue.span += 1 : Y.push({ label: ee, span: 1, key: `${ee ?? "loose"}-${le.key}` });
      }
      return Y;
    });
    function B(Y) {
      const le = Y[a.rowKey];
      return le == null || le === "" ? null : le;
    }
    function F(Y) {
      const le = B(Y);
      return le !== null && !!a.selected?.has(le);
    }
    const V = U(null);
    function X(Y) {
      return a.rows.findIndex((le) => {
        const ee = B(le);
        return ee !== null && ee === Y;
      });
    }
    function ge(Y, le) {
      const ee = B(Y);
      if (ee === null)
        return;
      const ue = le.shiftKey, ie = !!a.selected?.has(ee);
      if (ue && V.value !== null && V.value !== ee) {
        const He = X(V.value), Ne = X(ee);
        if (He !== -1 && Ne !== -1) {
          const at = Math.min(He, Ne), zt = Math.max(He, Ne), sn = !ie;
          for (let gt = at; gt <= zt; gt++) {
            if (!p(gt))
              continue;
            const Ot = B(a.rows[gt]);
            if (Ot === null)
              continue;
            !!a.selected?.has(Ot) !== sn && m("toggle-row", Ot);
          }
          V.value = ee;
          return;
        }
      }
      m("toggle-row", ee), V.value = ee;
    }
    const ye = x(
      () => a.rows.map((Y) => B(Y)).filter((Y) => Y !== null)
    ), oe = x(
      () => ye.value.length > 0 && ye.value.every((Y) => a.selected?.has(Y))
    ), Q = x(
      () => !oe.value && ye.value.some((Y) => a.selected?.has(Y))
    );
    function ne(Y) {
      return Y.sortKey ?? Y.key;
    }
    function Ce(Y) {
      return a.sort === ne(Y);
    }
    async function ia(Y, le, ee) {
      try {
        await navigator.clipboard.writeText(String(ee)), b.value = `${Y}-${le.key}`, setTimeout(() => b.value = null, 1200);
      } catch {
      }
    }
    const ln = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function da(Y) {
      return a.summaries?.[Y] ?? null;
    }
    function on(Y) {
      const le = a.summaries?.[Y], ee = a.summaryValues?.[Y];
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
    return (Y, le) => (t(), n("div", {
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", $l, [
        o("thead", wl, [
          G.value ? (t(), n("tr", Cl, [
            e.reordering ? (t(), n("th", Sl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Ml)) : $("", !0),
            (t(!0), n(z, null, j(q.value, (ee) => (t(), n("th", {
              key: ee.key,
              colspan: ee.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(ee.label ?? ""), 9, Bl))), 128)),
            Y.$slots.actions ? (t(), n("th", _l)) : $("", !0)
          ])) : $("", !0),
          o("tr", Al, [
            e.reordering ? (t(), n("th", Pl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: P(["w-10 border-b px-3 py-2.5", T.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
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
                onChange: le[1] || (le[1] = he((ee) => m("toggle-page", !oe.value), ["stop"]))
              }, null, 40, zl)
            ], 2)) : $("", !0),
            (t(!0), n(z, null, j(I.value, (ee) => (t(), n("th", {
              key: ee.key,
              class: P([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                te(ee) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(N(ee))
            }, [
              ee.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (ue) => m("sort", ne(ee))
              }, [
                R(c(ee.label) + " ", 1),
                Ce(ee) ? (t(), n("span", Ll, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Vl, "↕"))
              ], 8, Ol)) : (t(), n("span", jl, c(ee.label), 1)),
              W(ee) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${ee.label}`,
                onPointerdown: (ue) => J(ee, ue)
              }, null, 40, Dl)) : $("", !0)
            ], 6))), 128)),
            Y.$slots.actions ? (t(), n("th", Tl, [...le[2] || (le[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", El, [
          (t(), n(z, null, j(6, (ee) => o("tr", {
            key: `skel-${ee}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Il, [
              E(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Fl, [
              E(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            (t(!0), n(z, null, j(I.value, (ue) => (t(), n("td", {
              key: ue.key,
              class: "px-3 py-2.5"
            }, [
              E(ze, { variant: "text" })
            ]))), 128)),
            Y.$slots.actions ? (t(), n("td", Nl, [
              E(ze, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : $("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, j(e.rows, (ee, ue) => (t(), n(z, {
            key: B(ee) ?? `row-${ue}`
          }, [
            e.groupBy && s(ue) ? (t(), n("tr", Rl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(ee)),
                  dusk: `group-header-${r(ee) || "none"}`,
                  onClick: (ie) => g(r(ee))
                }, [
                  o("span", Kl, c(f(r(ee)) ? "▸" : "▾"), 1),
                  R(" " + c(i(ee)), 1)
                ], 8, Hl)) : (t(), n("span", ql, c(i(ee)), 1))
              ], 8, Ul)
            ])) : $("", !0),
            p(ue) ? (t(), n("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(ee) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && ue % 2 === 1 ? "bg-muted/20" : "",
                h.value === ue ? "opacity-40" : "",
                S(ue),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => y(ue, ie),
              onDragover: (ie) => M(ue, ie),
              onDrop: he((ie) => _(ue), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => m("row-contextmenu", ee, ie),
              onClick: (ie) => v(ee, ie)
            }, [
              e.reordering ? (t(), n("td", Wl, [...le[3] || (le[3] = [
                Mt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: P(["px-3 py-2", T.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${k(A)}-row-${B(ee) ?? ue}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: B(ee) ?? void 0,
                  checked: F(ee),
                  disabled: B(ee) === null,
                  "aria-label": B(ee) === null ? "This row has no id and cannot be selected" : `Select row ${B(ee)}`,
                  onClick: he((ie) => ge(ee, ie), ["stop"])
                }, null, 8, Zl)
              ], 2)) : $("", !0),
              (t(!0), n(z, null, j(I.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: P(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  te(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: se(N(ie))
              }, [
                K(Y.$slots, `cell:${ie.key}`, {
                  row: ee,
                  value: ee[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), n("span", Jl, [
                    R(c(ee[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (He) => ia(String(ee[e.rowKey]), ie, ee[ie.key])
                    }, [
                      o("span", Xl, c(b.value === `${ee[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Yl)
                  ])) : ee[ie.key] == null || ee[ie.key] === "" ? (t(), n("span", Ql, "None")) : (t(), n("span", eo, c(ee[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              Y.$slots.actions ? (t(), n("td", to, [
                K(Y.$slots, "actions", { row: ee }, void 0, !0)
              ])) : $("", !0)
            ], 42, Gl)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        ln.value ? (t(), n("tfoot", ao, [
          o("tr", null, [
            e.selectable ? (t(), n("td", no)) : $("", !0),
            (t(!0), n(z, null, j(e.columns, (ee) => (t(), n(z, {
              key: `s-${ee.key}`
            }, [
              e.hidden?.has(ee.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", ee.cellClass])
              }, [
                da(ee.key) ? (t(), n(z, { key: 0 }, [
                  o("span", lo, c(da(ee.key).label), 1),
                  o("span", oo, c(on(ee.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            Y.$slots.actions ? (t(), n("td", so)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), D(It, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, rt({ _: 2 }, [
        Y.$slots["clear-filters"] ? {
          name: "actions",
          fn: L(() => [
            K(Y.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), D(It, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, rt({ _: 2 }, [
        Y.$slots["empty-actions"] ? {
          name: "actions",
          fn: L(() => [
            K(Y.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : $("", !0)
    ], 2));
  }
}), Bt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, uo = /* @__PURE__ */ Bt(io, [["__scopeId", "data-v-c0f7d40f"]]), qe = "w-full min-w-0 px-4 py-6 sm:px-6", s3 = "w-full min-w-0 p-3 sm:p-4", r3 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", co = "w-full max-w-7xl", fo = "px-4 py-4", Da = "w-full min-w-0", mo = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, nt = "bg-popover text-popover-foreground flex w-full max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", xt = {
  /** Short confirmations with no fields (~24rem). */
  sm: `${nt} max-w-md`,
  /** The long-standing default: confirmations and short copy (~32rem). */
  confirm: `${nt} max-w-lg`,
  /** Wider than confirm when an action form needs more room than confirm copy (~36rem). */
  form: `${nt} max-w-xl`,
  /** A field stack too wide for `form` without becoming a page (~42rem). */
  lg: `${nt} max-w-2xl`,
  /** The widest dense modal offers - past this, use PkSlideover instead (~56rem). */
  xl: `${nt} max-w-4xl`
}, i3 = xt.confirm, d3 = xt.form, po = ["aria-busy", "aria-label"], vo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, go = { class: "text-base font-semibold" }, ho = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, bo = {
  key: 0,
  class: "bg-muted/30 sticky bottom-0 z-10 flex shrink-0 items-center justify-end gap-2 border-t px-5 py-3"
}, dt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null);
    let i = null;
    const d = U(!1), u = x(() => xt[a.size] ?? xt.confirm);
    function f(h) {
      d.value = h.target === h.currentTarget;
    }
    function g(h) {
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
      const w = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (w.length === 0)
        return;
      const y = w[0], C = w[w.length - 1];
      h.shiftKey && document.activeElement === y ? (h.preventDefault(), C.focus()) : !h.shiftKey && document.activeElement === C && (h.preventDefault(), y.focus());
    }
    return me(
      () => a.open,
      (h) => {
        h ? (i = document.activeElement, document.addEventListener("keydown", p), De(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (h, w) => (t(), D(ut, { to: "body" }, [
      E(Ye, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
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
              class: P(u.value)
            }, [
              o("div", vo, [
                o("h2", go, c(e.title), 1),
                e.description ? (t(), n("p", ho, c(e.description), 1)) : $("", !0)
              ]),
              o("div", {
                class: P(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", k(Da)])
              }, [
                K(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), n("div", bo, [
                K(h.$slots, "footer")
              ])) : $("", !0)
            ], 10, po)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), yo = 160, Ze = /* @__PURE__ */ O({
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
    const a = e, r = U(!1), s = U(null), i = U(null), d = U({ top: 0, left: 0, minWidth: 0 }), u = U(null);
    let f = null;
    function g(v) {
      !a.dismissOnPanelClick || v.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await De(), S());
    }
    function h() {
      f = setTimeout(C, 180);
    }
    async function w() {
      u.value = null, r.value = !r.value, r.value && (await De(), S());
    }
    async function y(v, b) {
      u.value = { x: v, y: b }, r.value = !0, await De(), S();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function S() {
      const v = s.value, b = i.value;
      if (!v || !b)
        return;
      const A = b.getBoundingClientRect(), I = 8, T = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : v.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = T.bottom + a.offset, te + A.height > window.innerHeight - I && T.top - A.height - a.offset > I && (te = T.top - A.height - a.offset), H = a.align === "end" && !u.value ? T.right - A.width : T.left;
      else {
        te = T.top;
        const Z = a.placement === "right", N = T.right + a.offset + A.width < window.innerWidth - I, W = T.left - a.offset - A.width > I;
        H = (Z ? N || !W : !W && N) ? T.right + a.offset : T.left - a.offset - A.width;
      }
      H = Math.min(Math.max(I, H), window.innerWidth - A.width - I), te = Math.min(Math.max(I, te), window.innerHeight - A.height - I), d.value = { top: te, left: H, minWidth: Math.max(T.width, yo) };
    }
    function M(v) {
      if (!r.value)
        return;
      const b = v.target;
      s.value?.contains(b) || i.value?.contains(b) || (b instanceof Element ? b : b.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function _(v) {
      v.key === "Escape" && r.value && (v.stopPropagation(), C());
    }
    function m() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        S();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", M), document.addEventListener("keydown", _), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", M), document.removeEventListener("keydown", _), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: C, openAt: y }), (v, b) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: b[2] || (b[2] = (A) => e.hoverable && p()),
      onPointerleave: b[3] || (b[3] = (A) => e.hoverable && h())
    }, [
      o("div", { onClick: w }, [
        K(v.$slots, "trigger", { open: r.value })
      ]),
      (t(), D(ut, { to: "body" }, [
        E(Ye, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            r.value ? (t(), n("div", {
              key: 0,
              ref_key: "panel",
              ref: i,
              class: P([
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
              onPointerenter: b[0] || (b[0] = (A) => e.hoverable && p()),
              onPointerleave: b[1] || (b[1] = (A) => e.hoverable && h()),
              onClick: g
            }, [
              K(v.$slots, "panel", { close: C })
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
}, Po = ["disabled", "onClick"], zo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oo = ["d"], Lo = { class: "min-w-0 flex-1 truncate" }, Vo = { class: "text-muted-foreground text-sm font-normal" }, jo = { class: "text-foreground font-medium tabular-nums" }, Do = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, To = ["disabled"], Eo = { class: "text-muted-foreground text-sm font-normal" }, Io = { class: "text-foreground font-medium tabular-nums" }, Fo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, No = ["disabled"], u3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null), i = U(!1), d = x(() => a.allMatching ? a.total : a.count), u = x(() => d.value !== void 0), f = x(() => u.value && d.value === 0), g = x(() => a.actions.filter((_) => !_.destructive)), p = x(() => a.actions.filter((_) => _.destructive)), h = {
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
    function S() {
      i.value = !1, r("export");
    }
    const M = (_) => new Intl.NumberFormat().format(_);
    return (_, m) => (t(), n(z, null, [
      E(Ze, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...m[5] || (m[5] = [
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
            (t(!0), n(z, null, j(g.value, (v) => (t(), n("button", {
              key: v.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", w(v)]),
              disabled: e.busy,
              onClick: (b) => y(v)
            }, [
              (t(), n("svg", wo, [
                o("path", {
                  d: k(ot)(v)
                }, null, 8, Co)
              ])),
              o("span", So, c(v.label), 1)
            ], 10, $o))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (v) => i.value = !0)
            }, [
              (t(), n("svg", Bo, [
                o("path", {
                  d: k(ce)("download")
                }, null, 8, _o)
              ])),
              m[6] || (m[6] = R(" Export CSV ", -1))
            ], 8, Mo)) : $("", !0),
            p.value.length ? (t(), n("div", Ao, [
              (t(!0), n(z, null, j(p.value, (v) => (t(), n("button", {
                key: v.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (b) => y(v)
              }, [
                (t(), n("svg", zo, [
                  o("path", {
                    d: k(ot)({ ...v, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", Lo, c(v.label), 1)
              ], 8, Po))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      E(dt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (v) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (v) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || f.value,
            onClick: C
          }, c(s.value?.label), 11, To)
        ]),
        default: L(() => [
          o("p", Vo, [
            m[7] || (m[7] = R(" This will affect ", -1)),
            o("span", jo, [
              u.value ? (t(), n(z, { key: 1 }, [
                R(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[8] || (m[8] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", Do, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      E(dt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (v) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (v) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || f.value,
            onClick: S
          }, " Export CSV ", 8, No)
        ]),
        default: L(() => [
          o("p", Eo, [
            m[9] || (m[9] = R(" This will export ", -1)),
            o("span", Io, [
              u.value ? (t(), n(z, { key: 1 }, [
                R(c(M(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                R("…")
              ], 64))
            ]),
            m[10] || (m[10] = R(" . ", -1))
          ]),
          f.value ? (t(), n("p", Fo, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
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
    return (l, a) => (t(), n("div", Ro, [
      l.$slots.tabs ? (t(), n("div", Uo, [
        K(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.title ? (t(), n("div", Ho, [
        K(l.$slots, "title")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        K(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      K(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Ko, [
        K(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ma = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", c3 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Go = ["aria-expanded"], Wo = ["aria-label", "onClick"], Zo = {
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
    const a = e, r = l, s = U(null), i = U(null), d = U(null), u = U(!1), f = U(""), g = U(0), p = U({ top: 0, left: 0, width: 0 }), h = x(
      () => a.modelValue.map(
        (H) => a.options.find((Z) => Z.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), w = x(() => a.searchable ?? a.options.length > 6), y = x(() => {
      const H = new Set(a.modelValue), Z = f.value.trim().toLowerCase();
      return a.options.filter((N) => !H.has(N.value)).filter((N) => Z ? N.label.toLowerCase().includes(Z) : !0);
    }), C = x(() => a.max !== null && a.modelValue.length >= a.max);
    function S() {
      const H = s.value, Z = i.value;
      if (!H || !Z)
        return;
      const N = H.getBoundingClientRect(), W = Z.getBoundingClientRect(), J = 8;
      let G = N.bottom + 4;
      G + W.height > window.innerHeight - J && N.top - W.height - 4 > J && (G = N.top - W.height - 4), p.value = {
        top: G,
        left: Math.min(Math.max(J, N.left), window.innerWidth - N.width - J),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: N.width
      };
    }
    async function M() {
      a.disabled || u.value || (u.value = !0, f.value = "", g.value = 0, await De(), S(), d.value?.focus());
    }
    function _() {
      u.value = !1, f.value = "";
    }
    function m() {
      u.value ? _() : M();
    }
    function v(H) {
      C.value || (r("update:modelValue", [...a.modelValue, H.value]), f.value = "", g.value = 0, De(() => {
        S(), d.value?.focus();
      }));
    }
    function b(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((Z) => Z !== H)
      ), De(S);
    }
    function A() {
      r("update:modelValue", []), De(S);
    }
    function I(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), _();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          b(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), M();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, y.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const Z = y.value[g.value];
            Z && v(Z);
          }
        }
      }
    }
    function T(H) {
      if (!u.value)
        return;
      const Z = H.target;
      s.value?.contains(Z) || i.value?.contains(Z) || _();
    }
    function te() {
      u.value && S();
    }
    return me(y, (H) => {
      g.value > H.length - 1 && (g.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", T), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ke(() => {
      document.removeEventListener("pointerdown", T), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, Z) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: I
    }, [
      o("div", {
        class: P(["bg-background flex min-h-9 w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5 transition-colors", [
          u.value ? "ring-ring border-ring ring-2" : "hover:border-ring/50",
          e.disabled ? "cursor-not-allowed opacity-50" : ""
        ]]),
        role: "combobox",
        "aria-expanded": u.value,
        "aria-haspopup": "listbox",
        tabindex: "0",
        onClick: m
      }, [
        (t(!0), n(z, null, j(h.value, (N) => (t(), n("span", {
          key: N.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          R(c(N.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${N.label}`,
            onClick: he((W) => b(N.value), ["stop"])
          }, [...Z[1] || (Z[1] = [
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
        h.value.length === 0 ? (t(), n("span", Zo, c(e.placeholder), 1)) : $("", !0),
        o("span", Jo, [
          h.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(A, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...Z[2] || (Z[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Go),
      (t(), D(ut, { to: "body" }, [
        E(Ye, {
          "enter-active-class": "transition duration-100 ease-out",
          "enter-from-class": "opacity-0 scale-95",
          "leave-active-class": "transition duration-75 ease-in",
          "leave-to-class": "opacity-0 scale-95"
        }, {
          default: L(() => [
            u.value ? (t(), n("div", {
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
              w.value ? (t(), n("div", Yo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": Z[0] || (Z[0] = (N) => f.value = N),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: I
                }, null, 40, Xo), [
                  [Ae, f.value]
                ])
              ])) : $("", !0),
              o("div", Qo, [
                (t(!0), n(z, null, j(y.value, (N, W) => (t(), n("button", {
                  key: N.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", W === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": W === g.value,
                  onMouseenter: (J) => g.value = W,
                  onClick: (J) => v(N)
                }, c(N.label), 43, es))), 128)),
                y.value.length === 0 ? (t(), n("p", ts, [
                  C.value ? (t(), n(z, { key: 0 }, [
                    R("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    R("Nothing matches “" + c(f.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
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
}), as = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ns = {
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
function st(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [as, ns[l], ls[a], e.class].filter(Boolean).join(" ");
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
    const l = e, a = x(
      () => st({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), D(Me(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: P(a.value)
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = U(a.modelValue ? structuredClone(a.modelValue) : s());
    me(
      () => a.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const d = (m) => "rules" in m, u = x(() => Object.keys(a.fields));
    function f(m) {
      const v = m ? a.fields[m]?.kind : void 0;
      return v ? a.operators[v] ?? [] : [];
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
    function p() {
      r("update:modelValue", i.value);
    }
    function h() {
      const m = u.value[0];
      i.value.rules.push({
        field: m,
        operator: f(m)[0],
        value: void 0
      }), p();
    }
    function w() {
      i.value.rules.push(s()), p();
    }
    function y(m) {
      i.value.rules.splice(m, 1), p();
    }
    function C(m) {
      m.operator = f(m.field)[0], m.value = void 0, p();
    }
    const S = x(() => a.depth + 1 < a.maxDepth);
    function M() {
      i.value = s(), p(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, v) => {
      const b = Gt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", os, [
          pe(o("select", {
            "onUpdate:modelValue": v[0] || (v[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...v[1] || (v[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ge, i.value.logic]
          ]),
          v[2] || (v[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, j(i.value.rules, (A, I) => (t(), n("div", {
          key: I,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), D(b, {
            key: 0,
            modelValue: i.value.rules[I],
            "onUpdate:modelValue": [(T) => i.value.rules[I] = T, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (T) => A.field = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (T) => C(A)
            }, [
              (t(!0), n(z, null, j(u.value, (T) => (t(), n("option", {
                key: T,
                value: T
              }, c(e.fields[T].label), 9, rs))), 128))
            ], 40, ss), [
              [Ge, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (T) => A.operator = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, j(f(A.field), (T) => (t(), n("option", {
                key: T,
                value: T
              }, c(g[T] ?? T), 9, ds))), 128))
            ], 40, is), [
              [Ge, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (T) => A.value = T,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...v[3] || (v[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, us)), [
              [Ge, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (T) => A.value = T,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, j(e.fields[A.field].options, (T) => (t(), n("option", {
                key: T,
                value: T
              }, c(T), 9, fs))), 128))
            ], 40, cs)), [
              [Ge, A.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (T) => A.value = T,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, ms)), [
              [dn, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (T) => y(I)
          }, " × ", 8, ps)
        ]))), 128)),
        o("div", vs, [
          E(de, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: L(() => [...v[4] || (v[4] = [
              R("Add rule", -1)
            ])]),
            _: 1
          }),
          S.value ? (t(), D(de, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: w
          }, {
            default: L(() => [...v[5] || (v[5] = [
              R(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            v[8] || (v[8] = o("span", { class: "flex-1" }, null, -1)),
            E(de, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: M
            }, {
              default: L(() => [...v[6] || (v[6] = [
                R(" Clear ", -1)
              ])]),
              _: 1
            }),
            E(de, {
              type: "button",
              size: "sm",
              onClick: _
            }, {
              default: L(() => [...v[7] || (v[7] = [
                R(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), ea = /* @__PURE__ */ O({
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
    return (i, d) => (t(), D(k(Ma), re({ "data-slot": "sheet" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function ae(...e) {
  return fl(cl(e));
}
function f3(e) {
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
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Wt), re({
      "data-slot": "sheet-overlay",
      class: k(ae)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(a)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ta = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class", "side"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        E(hs),
        E(k(Jt), re({
          "data-slot": "sheet-content",
          class: k(ae)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...k(i) }), {
          default: L(() => [
            K(d.$slots, "default"),
            E(k(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
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
}, Ms = { class: "text-xs font-medium" }, Bs = ["value", "onChange"], _s = ["value"], As = { class: "mb-4" }, Ps = { class: "flex flex-col gap-1" }, zs = ["disabled", "onClick"], Os = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Ls = {
  key: 1,
  class: "mb-4"
}, Vs = { class: "flex flex-col gap-1" }, js = ["onClick"], Ds = { class: "border-t p-4" }, Ts = ["disabled"], Es = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Is = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Fs = ["placeholder", "title", "aria-label"], Ns = ["aria-label"], Rs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Us = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Hs = { class: "text-xs font-medium" }, Ks = ["value", "onChange"], qs = ["value"], Gs = { class: "grid grid-cols-2 gap-2" }, Ws = ["value", "onChange"], Zs = ["value", "onChange"], Js = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Ys = ["value", "onChange"], Xs = ["value", "onChange"], Qs = {
  key: 4,
  class: "flex items-center gap-2"
}, er = ["aria-checked", "onClick"], tr = { class: "text-xs" }, ar = ["onClick"], nr = ["value", "onChange"], lr = ["value"], or = ["disabled", "onClick"], sr = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, rr = ["disabled", "onClick"], ir = {
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
    const a = e, r = l, s = U(!1), i = U(a.search);
    me(
      () => a.search,
      (q) => {
        q !== i.value && (i.value = q);
      }
    );
    let d;
    me(i, (q) => {
      clearTimeout(d), d = setTimeout(() => {
        q !== a.search && r("update:search", q);
      }, 250);
    });
    const u = U({ ...a.filters });
    me(
      () => a.filters,
      (q) => {
        u.value = { ...q };
      },
      { deep: !0 }
    );
    const f = x(
      () => a.filterSchema.filter(
        (q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0
      ).length
    ), g = x(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = x(() => a.search !== "" || f.value > 0), h = x(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(a.filters[q.key])}`,
      removable: !0
    })));
    function w(q) {
      r("group", q);
    }
    function y(q) {
      r("clear-filter", q);
    }
    function C(q) {
      return q.type === "multiselect";
    }
    function S(q) {
      const B = u.value[q.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function M(q) {
      return S(q).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function _(q) {
      return H(q).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function m(q, B) {
      u.value = { ...u.value, [q.key]: B === "" ? null : B };
    }
    function v(q, B) {
      const F = u.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [V, X] = F.split("..");
      return B === "from" ? V ?? "" : X ?? "";
    }
    function b(q, B, F) {
      const V = B === "from" ? F : v(q, "from"), X = B === "to" ? F : v(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V && X ? `${V}..${X}` : null
      };
    }
    function A(q, B, F) {
      const V = B === "from" ? F : v(q, "from"), X = B === "to" ? F : v(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V || X ? `${V}..${X}` : null
      };
    }
    function I(q) {
      r("apply-filters", { ...u.value }), q();
    }
    function T(q, B) {
      u.value[q] = B, r("apply-filters", { ...u.value });
    }
    function te() {
      u.value = Object.fromEntries(a.filterSchema.map((q) => [q.key, null]));
    }
    function H(q) {
      return q.type === "boolean" ? [
        { value: !0, label: q.trueLabel ?? "Yes" },
        { value: !1, label: q.falseLabel ?? "No" }
      ] : q.type === "daterange" ? Object.entries(q.presets ?? {}).map(([B, F]) => ({
        value: B,
        label: F
      })) : (q.options ?? []).map(
        (B) => typeof B == "object" && B !== null && "value" in B ? { value: B.value, label: B.label } : { value: B, label: String(B) }
      );
    }
    const Z = U(new Set(a.hidden));
    me(
      () => a.hidden,
      (q) => {
        Z.value = new Set(q);
      },
      { deep: !0 }
    );
    function N(q) {
      const B = new Set(Z.value);
      B.has(q) ? B.delete(q) : B.add(q), Z.value = B, r("apply-columns", [...B]);
    }
    function W() {
      Z.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function J() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function G() {
      i.value = "", r("clear");
    }
    return (q, B) => (t(), n("div", bs, [
      o("div", ys, [
        o("div", xs, [
          B[9] || (B[9] = o("svg", {
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
            "onUpdate:modelValue": B[0] || (B[0] = (F) => i.value = F),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, ks), [
            [Ae, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: B[1] || (B[1] = (F) => s.value = !0)
        }, [
          B[10] || (B[10] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          B[11] || (B[11] = R(" Tools ", -1)),
          f.value ? (t(), n("span", $s, c(f.value), 1)) : $("", !0)
        ]),
        E(ea, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (F) => s.value = F)
        }, {
          default: L(() => [
            E(ta, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", ws, [
                  B[16] || (B[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", Cs, [
                    e.filterSchema.length ? (t(), n("div", Ss, [
                      o("div", { class: "flex items-center justify-between" }, [
                        B[12] || (B[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, j(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ms, c(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => m(F, V.target.value)
                        }, [
                          B[13] || (B[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, j(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, c(V.label), 9, _s))), 128))
                        ], 40, Bs)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", As, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ps, [
                        (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => N(F.key)
                        }, [
                          o("span", null, c(F.label), 1),
                          Z.value.has(F.key) ? $("", !0) : (t(), n("span", Os, "On"))
                        ], 8, zs))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", Ls, [
                      B[15] || (B[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Vs, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: B[2] || (B[2] = (F) => {
                            w(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(z, null, j(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            w(F.key), s.value = !1;
                          }
                        }, c(F.label), 9, js))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", Ds, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: J
                    }, " Apply filters ", 8, Ts)) : $("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (F) => {
                        G(), s.value = !1;
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
          B[18] || (B[18] = o("svg", {
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
            "onUpdate:modelValue": B[5] || (B[5] = (F) => i.value = F),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", k(Se)])
          }, null, 10, Fs), [
            [Ae, i.value]
          ]),
          i.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: B[6] || (B[6] = (F) => i.value = "")
          }, [...B[17] || (B[17] = [
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
        e.filterSchema.length ? (t(), D(Ze, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", f.value ? "border-primary text-primary" : ""]),
              "aria-label": f.value ? `Filters (${f.value} active)` : "Filters",
              title: "Filters"
            }, [
              B[19] || (B[19] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              f.value ? (t(), n("span", Rs, c(f.value), 1)) : $("", !0)
            ], 10, Ns)
          ]),
          panel: L(({ close: F }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              B[20] || (B[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            B[23] || (B[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Us, [
              (t(!0), n(z, null, j(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Hs, c(V.label), 1),
                C(V) ? (t(), D(Qt, {
                  key: 0,
                  "model-value": M(V),
                  options: _(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (X) => u.value[V.key] = X.length ? X : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), D(gs, {
                  key: 1,
                  "model-value": u.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (X) => T(V.key, X)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[V.key] == "string" && !String(u.value[V.key]).includes("..") ? u.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (X) => m(V, X.target.value)
                  }, [
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, j(H(V), (X) => (t(), n("option", {
                      key: String(X.value),
                      value: X.value
                    }, c(X.label), 9, qs))), 128))
                  ], 40, Ks),
                  o("div", Gs, [
                    o("input", {
                      type: "date",
                      value: v(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => b(
                        V,
                        "from",
                        X.target.value
                      )
                    }, null, 40, Ws),
                    o("input", {
                      type: "date",
                      value: v(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (X) => b(
                        V,
                        "to",
                        X.target.value
                      )
                    }, null, 40, Zs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Js, [
                  o("input", {
                    type: "number",
                    value: v(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (X) => A(
                      V,
                      "from",
                      X.target.value
                    )
                  }, null, 40, Ys),
                  o("input", {
                    type: "number",
                    value: v(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (X) => A(
                      V,
                      "to",
                      X.target.value
                    )
                  }, null, 40, Xs)
                ])) : V.type === "boolean" ? (t(), n("div", Qs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: P([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (X) => m(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, er),
                  o("span", tr, c(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (X) => m(V, u.value[V.key] === !1 ? null : !1)
                  }, c(V.falseLabel ?? "No") + " only ", 11, ar)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (X) => m(V, X.target.value)
                }, [
                  B[22] || (B[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, j(H(V), (X) => (t(), n("option", {
                    key: String(X.value),
                    value: X.value
                  }, c(X.label), 9, lr))), 128))
                ], 40, nr))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (V) => I(F)
            }, " Apply filters ", 8, or)
          ]),
          _: 1
        })) : $("", !0),
        E(Ze, { "dismiss-on-panel-click": !1 }, {
          trigger: L(() => [...B[24] || (B[24] = [
            o("button", {
              type: "button",
              class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 transition-colors",
              "aria-label": "Toggle columns"
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
              ]),
              o("span", { class: "text-sm" }, "Columns View")
            ], -1)
          ])]),
          panel: L(() => [
            B[27] || (B[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", sr, [
              (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => N(F.key)
              }, [
                Z.value.has(F.key) ? (t(), n("span", dr)) : (t(), n("svg", ir, [...B[25] || (B[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                R(" " + c(F.label), 1)
              ], 10, rr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: W
              }, [...B[26] || (B[26] = [
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
        e.layouts.length > 1 ? (t(), n("div", ur, [
          (t(!0), n(z, null, j(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: P(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", fr, [...B[28] || (B[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", mr, [...B[29] || (B[29] = [
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
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: B[7] || (B[7] = (F) => r("toggle-reorder"))
        }, [...B[30] || (B[30] = [
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
        e.groups.length ? (t(), D(Ze, {
          key: 3,
          align: "end"
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
              "aria-label": e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records",
              title: e.groupBy ? `Grouped by ${e.groupBy.label}` : "Group records"
            }, [...B[31] || (B[31] = [
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
          panel: L(({ close: F }) => [
            o("div", gr, [
              o("button", {
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  w(null), F();
                }
              }, " No grouping ", 10, hr),
              (t(!0), n(z, null, j(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (X) => {
                  w(V.key), F();
                }
              }, c(V.label), 11, br))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        p.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: G
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), n("span", yr, "Loading…")) : $("", !0)
      ]),
      h.value.length ? (t(), n("div", xr, [
        (t(!0), n(z, null, j(h.value, (F) => (t(), n("span", {
          key: F.key + F.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${F.key}`
        }, [
          R(c(F.label) + " ", 1),
          F.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${F.label}`,
            onClick: (V) => y(F.key)
          }, [...B[32] || (B[32] = [
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
        h.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: B[8] || (B[8] = (F) => r("clear-filters"))
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
}, Ar = { class: "w-full border-collapse text-sm" }, Pr = { class: "bg-muted/40" }, zr = { class: "divide-y" }, Or = ["href"], Lr = {
  key: 1,
  class: "text-muted-foreground"
}, Vr = {
  key: 0,
  class: "flex justify-center"
}, jr = ["disabled"], Dr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Tr = ["href"], m3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = qt(), i = x(() => a.columns.filter((w) => w.type !== "image")), d = x(() => !!s.actions), u = x(() => !!a.title || d.value), f = x(() => a.filterSchema.length > 0), g = x(
      () => a.columns.map((w) => ({ key: w.key, label: w.label, locked: !0 }))
    );
    function p(w, y) {
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
    return (w, y) => (t(), D(qo, null, rt({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Br, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), D(It, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, rt({ _: 2 }, [
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", _r, [
          o("table", Ar, [
            o("thead", Pr, [
              o("tr", null, [
                (t(!0), n(z, null, j(i.value, (C) => (t(), n("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", zr, [
              (t(!0), n(z, null, j(e.rows, (C, S) => (t(), n("tr", {
                key: C.id ?? S,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, j(i.value, (M) => (t(), n("td", {
                  key: M.key,
                  class: P(["px-3 whitespace-nowrap", [
                    M.mono ? "font-mono text-xs" : "",
                    M.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  K(w.$slots, `cell:${M.key}`, {
                    row: C,
                    value: C[M.key],
                    column: M
                  }, () => [
                    e.recordBase && C.id != null && M === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(p(M, C[M.key])), 9, Or)) : h(C[M.key]) ? (t(), n("span", Lr, " None ")) : (t(), n(z, { key: 2 }, [
                      R(c(p(M, C[M.key])), 1)
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
            e.title ? (t(), n("h3", Sr, c(e.title), 1)) : $("", !0)
          ]),
          d.value ? (t(), n("div", Mr, [
            K(w.$slots, "actions")
          ])) : $("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: L(() => [
          E(wr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
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
          e.nextCursor ? (t(), n("div", Vr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: y[6] || (y[6] = (C) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, jr)
          ])) : e.capped ? (t(), n("p", Dr, [
            R(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Tr)) : (t(), n(z, { key: 1 }, [
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
    return (f, g) => (t(), n("ol", Er, [
      (t(!0), n(z, null, j(e.steps, (p, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), D(Me(e.interactive ? "button" : "div"), re({
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
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(h)])
            }, [
              u(h) ? (t(), n("svg", Ir, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(h) ? (t(), n("svg", Fr, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                R(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Nr, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), n("span", Rr, c(p.description), 1)) : $("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Ur)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Hr)) : $("", !0)
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
function p3(e) {
  return ft.has(e);
}
function v3() {
  return [...ft.keys()].sort();
}
function g3() {
  ft.clear();
}
class Gr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function h3(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
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
const b3 = "text-sm text-muted-foreground font-normal", y3 = "text-xs text-muted-foreground font-normal", ht = "text-xs text-muted-foreground font-normal leading-snug", Jr = "text-foreground font-normal", Yr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Jr} ${Yr}`, Xr = {
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
    const a = e, r = l, s = U({});
    me(
      () => a.open,
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
      footer: L(() => [
        E(de, {
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
        E(de, {
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
          e.generalError ? (t(), n("p", Xr, c(e.generalError), 1)) : $("", !0),
          (t(!0), n(z, null, j(e.fields, (f) => (t(), D(Xe, {
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(gn), re({ "data-slot": "checkbox" }, k(i), {
      class: k(ae)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((f) => [
        E(k(hn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            K(d.$slots, "default", Oe(Fe(f)), () => [
              E(k(Oa), { class: "size-3.5" })
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), We = /* @__PURE__ */ O({
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
    const a = e, r = l, s = be(fe(a, "class"), r);
    return (i, d) => (t(), D(k(bn), re({ "data-slot": "switch" }, k(s), {
      class: k(ae)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        E(k(yn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ti = ["accept", "disabled"], ai = { class: "text-sm font-medium" }, ni = { key: 0 }, li = { key: 1 }, oi = { class: "text-muted-foreground text-xs font-normal" }, si = {
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
}, Ta = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null), i = U(!1), d = U(null), u = U(null), f = U(null), g = x(() => a.accept.map((v) => `.${v}`).join(",")), p = x(() => f.value ?? a.modelValue?.url ?? null), h = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${w(a.maxKilobytes * 1024)}`);
    function w(v) {
      if (!v)
        return "";
      const b = ["B", "KB", "MB", "GB"];
      let A = v, I = 0;
      for (; A >= 1024 && I < b.length - 1; )
        A /= 1024, I++;
      return `${A.toFixed(A < 10 && I > 0 ? 1 : 0)} ${b[I]}`;
    }
    function y(v) {
      return v.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(v) {
      return a.accept.length && !a.accept.includes(y(v.name)) ? `${y(v.name).toUpperCase() || "That"} files are not accepted here.` : v.size > a.maxKilobytes * 1024 ? `That file is ${w(v.size)}; the limit is ${w(a.maxKilobytes * 1024)}.` : null;
    }
    async function S(v) {
      const b = v?.[0];
      if (!(!b || a.disabled) && (u.value = C(b), !u.value)) {
        M(), a.image && b.type.startsWith("image/") && (f.value = URL.createObjectURL(b)), d.value = 0;
        try {
          const A = await a.upload(b, (I) => {
            d.value = I;
          });
          r("update:modelValue", A);
        } catch (A) {
          u.value = A instanceof Error ? A.message : "The upload failed.", M();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function M() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function _() {
      const v = a.modelValue;
      M(), u.value = null, r("update:modelValue", null), v && !v.url && a.discard && await a.discard(v.value).catch(() => {
      });
    }
    function m(v) {
      i.value = !1, S(v.dataTransfer?.files ?? null);
    }
    return (v, b) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ri, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ii)) : (t(), n("span", di, c(y(e.modelValue.name) || "file"), 1)),
        o("span", ui, [
          o("span", ci, c(e.modelValue.name), 1),
          o("span", fi, [
            R(c(w(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              b[4] || (b[4] = R(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, mi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              R(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: _
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
            o("path", { d: "M18 6 6 18M6 6l12 12" })
          ], -1)
        ])]))
      ])) : (t(), n("label", {
        key: 0,
        class: P(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: b[1] || (b[1] = he((A) => i.value = !0, ["prevent"])),
        onDragleave: b[2] || (b[2] = he((A) => i.value = !1, ["prevent"])),
        onDrop: he(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: b[0] || (b[0] = (A) => S(A.target.files))
        }, null, 40, ti),
        b[3] || (b[3] = o("svg", {
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
          d.value === null ? (t(), n("span", ni, "Drop a file or click to choose")) : (t(), n("span", li, "Uploading…"))
        ]),
        o("span", oi, c(h.value), 1),
        d.value !== null ? (t(), n("span", si, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      u.value ? (t(), n("p", pi, c(u.value), 1)) : $("", !0)
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
    const a = e, r = l, s = /^[A-Za-z0-9_-]{1,64}$/;
    let i = 0;
    const d = U(u(a.modelValue));
    function u(S) {
      return S ? Object.entries(S).map(([M, _]) => ({
        uid: i++,
        key: M,
        value: _ ?? ""
      })) : [];
    }
    me(
      () => a.modelValue,
      (S) => {
        JSON.stringify(S ?? null) !== JSON.stringify(f()) && (d.value = u(S));
      }
    );
    function f() {
      const S = {};
      for (const M of d.value) {
        const _ = M.key.trim();
        _ !== "" && (S[_] = M.value);
      }
      return Object.keys(S).length ? S : null;
    }
    function g() {
      r("update:modelValue", f());
    }
    const p = x(() => {
      const S = /* @__PURE__ */ new Map();
      for (const M of d.value) {
        const _ = M.key.trim();
        _ !== "" && S.set(_, (S.get(_) ?? 0) + 1);
      }
      return new Set([...S.entries()].filter(([, M]) => M > 1).map(([M]) => M));
    }), h = x(
      () => new Set(
        d.value.map((S) => S.key.trim()).filter((S) => S !== "" && !s.test(S))
      )
    ), w = x(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function y() {
      w.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(S) {
      d.value = d.value.filter((M) => M.uid !== S), g();
    }
    return (S, M) => (t(), n("div", vi, [
      d.value.length ? (t(), n("div", gi, [
        o("div", hi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          M[0] || (M[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, j(d.value, (_) => (t(), n("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", bi, [
            pe(o("input", {
              "onUpdate:modelValue": (m) => _.key = m,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(_.key.trim()) || h.value.has(_.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, yi), [
              [Ae, _.key]
            ]),
            h.value.has(_.key.trim()) ? (t(), n("p", xi, " Letters, numbers, underscores and dashes only. ")) : p.value.has(_.key.trim()) ? (t(), n("p", ki, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (m) => _.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, $i), [
            [Ae, _.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${_.key || "this entry"}`,
            onClick: (m) => C(_.uid)
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
      ])) : (t(), n("p", Ci, " Nothing here yet. ")),
      o("div", Si, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || w.value,
          onClick: y
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
        ], 8, Mi),
        e.maxPairs !== null ? (t(), n("p", Bi, c(d.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), Ai = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Pi = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, zi = ["disabled", "title", "aria-label", "onClick"], Oi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Li = ["d"], Vi = ["disabled"], ji = ["contenteditable", "data-placeholder"], Di = {
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
    const a = e, r = l, s = U(null);
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
    ], u = x(() => d.filter((C) => a.toolbar.includes(C.id))), f = x(() => a.toolbar.includes("link")), g = U(0);
    function p() {
      const C = s.value?.innerHTML ?? "", S = (s.value?.innerText ?? "").trim();
      g.value = S.length;
      const M = S === "" ? null : C;
      i = M, r("update:modelValue", M);
    }
    function h(C) {
      a.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), p());
    }
    function w() {
      if (a.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), p());
    }
    function y(C) {
      C.preventDefault();
      const S = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, S), p();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", g.value = s.value.innerText.trim().length);
      }
    ), (C, S) => (t(), n("div", Ai, [
      o("div", Pi, [
        (t(!0), n(z, null, j(u.value, (M) => (t(), n("button", {
          key: M.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: M.label,
          "aria-label": M.label,
          onMousedown: S[0] || (S[0] = he(() => {
          }, ["prevent"])),
          onClick: (_) => h(M)
        }, [
          (t(), n("svg", Oi, [
            o("path", {
              d: M.path
            }, null, 8, Li)
          ]))
        ], 40, zi))), 128)),
        f.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: S[1] || (S[1] = he(() => {
          }, ["prevent"])),
          onClick: w
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
        ])], 40, Vi)) : $("", !0)
      ]),
      o("div", {
        ref_key: "editor",
        ref: s,
        class: P(["pk-prose min-h-28 px-3 py-2 text-sm focus:outline-none", e.disabled ? "pointer-events-none opacity-60" : ""]),
        contenteditable: !e.disabled,
        role: "textbox",
        "aria-multiline": "true",
        "data-placeholder": e.placeholder,
        onInput: p,
        onBlur: p,
        onPaste: y
      }, null, 42, ji),
      e.maxLength !== null ? (t(), n("div", Di, c(g.value) + " / " + c(e.maxLength), 1)) : $("", !0)
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
}, Ea = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => !!a.field.multiple), i = x(() => !!a.field.grouped), d = x(() => !!a.field.hiddenLabels), u = x(() => a.field.inline !== !1), f = x(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function g(v) {
      return s.value ? f.value.some((b) => b == v.value) : a.modelValue != null && v.value == a.modelValue;
    }
    function p(v) {
      if (!a.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            g(v) ? f.value.filter((b) => b != v.value) : [...f.value, v.value]
          );
          return;
        }
        r("update:modelValue", v.value);
      }
    }
    function h(v) {
      return a.field.colors?.[String(v.value)] ?? "primary";
    }
    function w(v) {
      const b = a.field.icons?.[String(v.value)];
      return b ? ce(b) : null;
    }
    function y(v) {
      return a.field.tooltips?.[String(v.value)] ?? v.label;
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
    function M(v) {
      const b = h(v), A = g(v);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? C[b] ?? C.primary : S[b] ?? S.primary,
        a.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const _ = x(() => {
      if (!(u.value || i.value) && a.field.columns && a.field.columns > 1)
        return { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` };
    }), m = x(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (v, b) => (t(), n("div", {
      role: s.value ? "group" : "radiogroup",
      class: P(m.value),
      style: se(_.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), n(z, null, j(e.options, (A) => (t(), n("label", {
        key: String(A.value),
        class: P(M(A)),
        title: y(A)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: A.value,
          checked: g(A),
          disabled: e.disabled,
          "aria-label": d.value ? A.label : void 0,
          onChange: (I) => p(A)
        }, null, 40, Ni),
        w(A) ? (t(), n("svg", Ri, [
          o("path", {
            d: w(A)
          }, null, 8, Ui)
        ])) : $("", !0),
        d.value ? $("", !0) : (t(), n("span", Hi, c(A.label), 1))
      ], 10, Fi))), 128)),
      e.options.length === 0 ? (t(), n("p", Ki, " Nothing to choose from yet. ")) : $("", !0)
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
}, td = ["disabled"], ad = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, nd = { class: "max-h-56 overflow-y-auto p-1" }, ld = ["onClick"], od = {
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
}, Ad = ["disabled", "aria-pressed", "onClick"], Pd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, zd = ["title", "disabled", "onClick"], Od = ["href"], Ld = {
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
    const a = ua(() => import("./PkRepeater-J84jGe3T.js")), r = ua(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = U(!1), u = U(""), f = U([]), g = U(!1), p = U(null);
    let h;
    me(u, (oe) => {
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
    function y(oe) {
      p.value = oe.label, i("change", oe.value), d.value = !1, u.value = "";
    }
    function C() {
      p.value = null, i("change", null);
    }
    const S = yt("panelPicker", null), M = yt("panelCreateOption", null), _ = U(!1), m = U(!1), v = U({}), b = U(null), A = x(() => Wr(s.field)), I = x(() => Zr(s.field));
    function T() {
      v.value = {}, b.value = null, _.value = !0, d.value = !1;
    }
    function te() {
      m.value || (_.value = !1, v.value = {}, b.value = null);
    }
    async function H(oe) {
      if (M) {
        m.value = !0, v.value = {}, b.value = null;
        try {
          const Q = await M.run(s.field.key, { ...oe });
          y(Q), _.value = !1;
        } catch (Q) {
          Q instanceof Gr ? (v.value = Q.fieldErrors, b.value = Object.keys(Q.fieldErrors).length === 0 ? Q.message : null) : b.value = Q instanceof Error ? Q.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const Z = x(() => {
      if (!s.field.tableSelect || !S?.base)
        return;
      const oe = S.returnUrl || "/";
      return `${S.base}/pick/${s.field.key}?return=${encodeURIComponent(oe)}`;
    }), N = x(() => s.field.morphTo ?? []), W = x(() => {
      const oe = s.value;
      return oe && typeof oe == "object" && !Array.isArray(oe) ? oe : { type: void 0, id: void 0 };
    });
    function J(oe) {
      i("change", { type: oe || null, id: null });
    }
    function G(oe) {
      i("change", { type: W.value.type ?? null, id: oe });
    }
    function q(oe) {
      p.value = oe.label, G(oe.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const B = x(() => qr(s.field.type)), F = x(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function V(oe) {
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
    const X = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Re} ${Se}`, ge = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Re}`;
    function ye(oe) {
      const Q = document.getElementById(`f-${s.field.key}`);
      if (!(Q instanceof HTMLTextAreaElement) && !(Q instanceof HTMLInputElement))
        return;
      const ne = Q.selectionStart ?? Q.value.length, Ce = Q.selectionEnd ?? ne;
      Q.setRangeText(oe, ne, Ce, "end"), Q.dispatchEvent(new Event("input", { bubbles: !0 })), Q.focus();
    }
    return (oe, Q) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", qi, [
        o("div", Gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            R(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Zi, "*")) : $("", !0)
          ], 10, Wi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: P(["flex items-center gap-1", k(ht)])
          }, [
            R(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: Q[0] || (Q[0] = (ne) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Ji)) : $("", !0)
          ], 2)) : $("", !0)
        ]),
        B.value ? (t(), D(Me(B.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[1] || (Q[1] = (ne) => i("change", ne))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), D(Ta, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": Q[2] || (Q[2] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), D(k(a), {
          key: 2,
          "model-value": e.value ?? null,
          children: e.field.children ?? [],
          "field-key": e.field.key,
          "item-label": e.field.itemLabel ?? "Item",
          "min-items": e.field.minItems ?? null,
          "max-items": e.field.maxItems ?? null,
          collapsible: e.field.collapsible ?? !1,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": Q[3] || (Q[3] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "collapsible", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), D(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": Q[4] || (Q[4] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), D(Ei, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[5] || (Q[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), D(_i, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Q[6] || (Q[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), D(Qt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": Q[7] || (Q[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : N.value.length ? (t(), n("div", Yi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), D(Ea, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": W.value.type ?? null,
            options: N.value.map((ne) => ({ value: ne.value, label: ne.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[8] || (Q[8] = (ne) => J(ne == null ? "" : String(ne)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), n("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: W.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
            onChange: Q[9] || (Q[9] = (ne) => J(ne.target.value))
          }, [
            Q[25] || (Q[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, j(N.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, c(ne.label), 9, Qi))), 128))
          ], 42, Xi)),
          W.value.type && e.searchOptions ? (t(), n("div", ed, [
            o("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: w
            }, [
              o("span", {
                class: P(p.value || W.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (W.value.id ? String(W.value.id) : "Search…")), 3)
            ], 10, td),
            d.value ? (t(), n("div", ad, [
              pe(o("input", {
                "onUpdate:modelValue": Q[10] || (Q[10] = (ne) => u.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", nd, [
                (t(!0), n(z, null, j(f.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, c(ne.label), 9, ld))), 128))
              ])
            ])) : $("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Q[11] || (Q[11] = (ne) => d.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", od, [
          o("button", {
            type: "button",
            class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: w
          }, [
            o("span", {
              class: P(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(C, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 10, sd),
          d.value ? (t(), n("div", rd, [
            pe(o("input", {
              "onUpdate:modelValue": Q[12] || (Q[12] = (ne) => u.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", id, [
              g.value ? (t(), n("p", dd, " Searching… ")) : f.value.length === 0 ? (t(), n("p", ud, " No matches ")) : $("", !0),
              (t(!0), n(z, null, j(f.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => y(ne)
              }, c(ne.label), 9, cd))), 128)),
              e.field.createOption && k(M) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: T
              }, [
                Q[26] || (Q[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                R(" " + c(I.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: Q[13] || (Q[13] = (ne) => d.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
          onChange: Q[14] || (Q[14] = (ne) => i("change", ne.target.value || null))
        }, [
          Q[27] || (Q[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, j(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, c(ne.label), 9, md))), 128))
        ], 42, fd)) : e.field.type === "toggle" ? (t(), n("label", pd, [
          E(k(We), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[15] || (Q[15] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(ht))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", vd, [
          E(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Q[16] || (Q[16] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(ht))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", k(Re), k(Se)]),
          onInput: Q[17] || (Q[17] = (ne) => i("change", ne.target.value))
        }, null, 42, gd)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            k(ma),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", hd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[18] || (Q[18] = (ne) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, bd)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: P(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", k(Re)]),
            onInput: Q[19] || (Q[19] = (ne) => i("change", ne.target.value))
          }, null, 42, yd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", xd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[20] || (Q[20] = (ne) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, kd)) : $("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(ma),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", wd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Q[22] || (Q[22] = (ne) => V(e.field.prefixAction))
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
            class: P(ge),
            onInput: Q[23] || (Q[23] = (ne) => i("change", ne.target.value))
          }, null, 40, Sd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Md, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Q[24] || (Q[24] = (ne) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, Bd)) : $("", !0)
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
          class: P(X),
          onInput: Q[21] || (Q[21] = (ne) => i("change", ne.target.value))
        }, null, 40, $d)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", _d, [
          (t(!0), n(z, null, j(e.field.presets, (ne) => (t(), n("button", {
            key: ne,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              k(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne
            ),
            onClick: (Ce) => i("change", String(ne))
          }, c(ne), 11, Ad))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Pd, [
          (t(!0), n(z, null, j(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (ia) => ye(String(Ce))
          }, c(Ce), 9, zd))), 128))
        ])) : $("", !0),
        Z.value ? (t(), n("a", {
          key: 18,
          href: Z.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Od)) : $("", !0),
        e.error ? (t(), n("p", Ld, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: P(k(ht))
        }, c(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && k(M) ? (t(), D(Qr, {
        key: 2,
        open: _.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: v.value,
        "general-error": b.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), Vd = { class: "flex min-w-0 items-start gap-2.5" }, jd = {
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
}, Xd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Qd = ["disabled"], Ia = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(!a.node.collapsed), i = U(0), d = U(0), u = x(
      () => (a.node.children ?? []).map((_) => ({
        label: _.label ?? "",
        description: _.description
      }))
    ), f = x(() => a.depth === 0), g = x(() => {
      const _ = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, m = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        _[a.node.align ?? "start"] ?? "items-start",
        m[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = x(() => {
      const _ = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return _[a.node.tone ?? "info"] ?? _.info;
    }), h = x(() => {
      const _ = a.node.columns ?? 1;
      return _ >= 3 ? "sm:grid-cols-3" : _ === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function w(_) {
      const m = _.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function y(_ = 1) {
      return _ >= 4 ? "md:col-span-4" : _ === 3 ? "md:col-span-3" : _ === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function C(_) {
      const m = [], v = (b) => {
        b.component === "field" && b.key && m.push(b.key), b.children?.forEach(v);
      };
      return v(_), m.some((b) => a.errors[b]);
    }
    function S(_) {
      if (_.hidden)
        return !1;
      const m = _.visibleWhen;
      return m ? a.values[m.field] == m.value : !0;
    }
    function M(_) {
      if (a.upload)
        return (m, v) => a.upload(_, m, v);
    }
    return (_, m) => {
      const v = Gt("SchemaNode", !0);
      return e.node.component === "field" && S(e.node) ? (t(), D(Xe, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (b) => e.searchOptions(e.node.key, b) : void 0,
        upload: M(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = (b) => r("change", e.node.key, b)),
        onAffixAction: m[1] || (m[1] = (b) => r("affix-action", e.node.key, b))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && S(e.node) ? (t(), n("section", {
        key: 1,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = (b) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Vd, [
            e.node.icon ? (t(), n("div", jd, [
              (t(), n("svg", Dd, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, Td)
              ]))
            ])) : $("", !0),
            o("div", Ed, [
              o("h3", Id, c(e.node.label), 1),
              e.node.description ? (t(), n("p", Fd, c(e.node.description), 1)) : $("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: P(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...m[24] || (m[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: P(["grid grid-cols-1 gap-4", [h.value, f.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
            key: A,
            node: b,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: P(b.span && b.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (I, T) => r("change", I, T)),
            onAffixAction: m[4] || (m[4] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && S(e.node) ? (t(), n("section", Nd, [
        o("header", Rd, [
          o("h3", Ud, c(e.node.title), 1),
          e.node.description ? (t(), n("p", Hd, c(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
            key: A,
            node: b,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[5] || (m[5] = (I, T) => r("change", I, T)),
            onAffixAction: m[6] || (m[6] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && S(e.node) ? (t(), n("div", {
        key: 3,
        class: P(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
          key: A,
          node: b,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: P(b.component === "column" ? y(b.span) : ""),
          onChange: m[7] || (m[7] = (I, T) => r("change", I, T)),
          onAffixAction: m[8] || (m[8] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && S(e.node) ? (t(), n("div", Kd, [
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
          key: A,
          node: b,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[9] || (m[9] = (I, T) => r("change", I, T)),
          onAffixAction: m[10] || (m[10] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" && S(e.node) ? (t(), n("div", {
        key: 5,
        class: P(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
          key: A,
          node: b,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[11] || (m[11] = (I, T) => r("change", I, T)),
          onAffixAction: m[12] || (m[12] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" && S(e.node) ? (t(), n("div", {
        key: 6,
        class: P(["flex", g.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
          key: A,
          node: b,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[13] || (m[13] = (I, T) => r("change", I, T)),
          onAffixAction: m[14] || (m[14] = (I, T) => r("affix-action", I, T))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" && S(e.node) ? (t(), n("fieldset", qd, [
        o("legend", Gd, c(e.node.label), 1),
        e.node.description ? (t(), n("p", Wd, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), D(v, {
            key: A,
            node: b,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[15] || (m[15] = (I, T) => r("change", I, T)),
            onAffixAction: m[16] || (m[16] = (I, T) => r("affix-action", I, T))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" && S(e.node) ? (t(), n("div", {
        key: 8,
        role: "note",
        class: P(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", Zd, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" && S(e.node) ? (t(), n("div", {
        key: 9,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => (t(), n("button", {
            key: A,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (I) => i.value = A
          }, [
            R(c(b.label) + " ", 1),
            C(b) ? (t(), n("span", Yd)) : $("", !0)
          ], 10, Jd))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(b.children ?? [], (I, T) => (t(), D(v, {
            key: T,
            node: I,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[17] || (m[17] = (te, H) => r("change", te, H)),
            onAffixAction: m[18] || (m[18] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ue, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" && S(e.node) ? (t(), n("div", {
        key: 10,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        E(Kr, {
          class: P(["p-4", f.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (b) => C((e.node.children ?? [])[b]),
          "onUpdate:activeStep": m[19] || (m[19] = (b) => d.value = b)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, j(e.node.children ?? [], (b, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(b.children ?? [], (I, T) => (t(), D(v, {
            key: T,
            node: I,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[20] || (m[20] = (te, H) => r("change", te, H)),
            onAffixAction: m[21] || (m[21] = (te, H) => r("affix-action", te, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [Ue, d.value === A]
        ])), 128)),
        o("div", Xd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: m[22] || (m[22] = (b) => d.value--)
          }, " Back ", 8, Qd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: m[23] || (m[23] = (b) => d.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), x3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U({});
    me(
      () => a.open,
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
      footer: L(() => [
        E(de, {
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
        E(de, {
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
          (t(!0), n(z, null, j(e.form?.nodes ?? [], (f, g) => (t(), D(Ia, {
            key: g,
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
}), eu = ["title"], tu = ["aria-label"], au = ["d"], nu = { class: "sr-only" }, lu = /* @__PURE__ */ O({
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
    }, s = x(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = x(() => l.icons[s.value] ?? l.defaultIcon), d = x(() => a[i.value] ?? a.dot), u = x(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), f = x(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (g, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: f.value
    }, [
      (t(), n("svg", {
        viewBox: "0 0 24 24",
        class: P(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: d.value }, null, 8, au)
      ], 10, tu)),
      o("span", nu, c(f.value), 1)
    ], 8, eu));
  }
}), ou = ["aria-label"], su = ["fill"], k3 = /* @__PURE__ */ O({
  __name: "RatingCell",
  props: {
    value: {},
    max: { default: 5 }
  },
  setup(e) {
    const l = e, a = x(() => Math.max(1, Math.min(10, Number(l.max ?? 5)))), r = x(() => {
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
    const l = e, a = U(!1);
    me(
      () => l.src,
      () => a.value = !1
    );
    const r = { sm: "size-6", md: "size-8", lg: "size-10" }, s = x(() => {
      const d = typeof l.src == "string" ? l.src.trim() : "";
      return d === "" ? null : /^(https?:)?\/\//i.test(d) ? d : null;
    }), i = x(() => {
      const d = typeof l.fallbackText == "string" ? l.fallbackText.trim() : "";
      return d === "" ? "?" : d.split(/\s+/).slice(0, 2).map((u) => u[0]?.toUpperCase() ?? "").join("");
    });
    return (d, u) => (t(), n("span", {
      class: P(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (f) => a.value = !0)
      }, null, 40, ru)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        R(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", iu, [...u[1] || (u[1] = [
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
    const l = e, a = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$|^[a-z]{3,20}$/i, r = x(() => {
      const s = (l.value ?? "").trim();
      return a.test(s) ? s : null;
    });
    return (s, i) => r.value === null ? (t(), n("span", uu, "-")) : (t(), n("span", cu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", fu, c(r.value), 1)) : (t(), n("span", mu, c(r.value), 1))
    ]));
  }
}), vu = { class: "inline-flex items-center" }, gu = ["checked", "aria-label"], hu = { class: "sr-only" }, $3 = /* @__PURE__ */ O({
  __name: "CheckboxCell",
  props: {
    value: {},
    trueLabel: { default: null },
    falseLabel: { default: null }
  },
  setup(e) {
    const l = e, a = x(() => {
      const s = l.value;
      return typeof s == "string" ? s !== "" && s !== "0" && s.toLowerCase() !== "false" : !!s;
    }), r = x(
      () => a.value ? l.trueLabel ?? "Yes" : l.falseLabel ?? "No"
    );
    return (s, i) => (t(), n("span", vu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
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
}, w3 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", yu, c(a.value), 1)) : (t(), n("span", bu, "—"));
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
}, C3 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", xu, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", ku, "—")) : (t(), n("span", $u, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), wu = ["data-variant"], Cu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", Ke = /* @__PURE__ */ O({
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
    }, r = x(
      () => [Cu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
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
}, S3 = /* @__PURE__ */ O({
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
            const g = JSON.parse(f);
            if (Array.isArray(g))
              return a(g, u);
          } catch {
          }
        return f.split(u).map((g) => g.trim()).filter((g) => g !== "");
      }
      return [String(d)];
    }
    const r = x(() => a(l.value, l.separator)), s = x(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = x(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), n("span", Su, "None")) : (t(), n("span", Mu, [
      (t(!0), n(z, null, j(s.value, (f) => (t(), D(Ke, {
        key: f,
        variant: "secondary"
      }, {
        default: L(() => [
          R(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), D(Ke, {
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
}), Bu = ["aria-checked", "aria-label", "title", "disabled"], _u = ["value", "placeholder", "disabled"], Au = ["value", "disabled"], Pu = ["value"], M3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.value === !0 || a.value === 1 || a.value === "1"), i = x(() => a.busy || a.disabled), d = x(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function f(w) {
      const y = w.target.value;
      y !== String(a.value ?? "") && r("change", y);
    }
    function g(w) {
      const C = w.target.value;
      C !== String(a.value ?? "") && r("change", C);
    }
    function p(w) {
      w.target.blur();
    }
    function h(w) {
      const y = w.target;
      y.value = String(a.value ?? ""), y.blur();
    }
    return (w, y) => e.type === "toggle" ? (t(), n("button", {
      key: 0,
      type: "button",
      role: "switch",
      "aria-checked": s.value,
      "aria-label": d.value,
      title: d.value,
      disabled: i.value,
      class: P(["relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors disabled:opacity-50", s.value ? "bg-primary" : "bg-muted-foreground/30"]),
      onClick: he(u, ["stop"])
    }, [
      o("span", {
        class: P(["bg-background size-4 rounded-full shadow-sm transition-transform", s.value ? "translate-x-4.5" : "translate-x-0.5"])
      }, null, 2)
    ], 10, Bu)) : e.type === "text" ? (t(), n("input", {
      key: 1,
      type: "text",
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      placeholder: e.placeholder ?? void 0,
      disabled: i.value,
      onClick: y[0] || (y[0] = he(() => {
      }, ["stop"])),
      onBlur: g,
      onKeydown: [
        Tt(p, ["enter"]),
        Tt(h, ["esc"])
      ]
    }, null, 40, _u)) : (t(), n("select", {
      key: 2,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: y[1] || (y[1] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, j(e.options, (C, S) => (t(), n("option", {
        key: S,
        value: S
      }, c(C), 9, Pu))), 128))
    ], 40, Au));
  }
}), aa = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function zu(e) {
  return e != null && e !== "";
}
function Ou(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function B3(e) {
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
  ), a = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return aa[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const Lu = ["disabled", "aria-label", "aria-busy"], Vu = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ju = ["d"], Du = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Tu = ["disabled", "onClick"], Eu = {
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
}, _3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.busy || a.disabled), i = x(() => String(a.value ?? "")), d = x(() => `Select ${(a.label || "value").trim().toLowerCase()}`);
    function u(h) {
      return typeof h == "boolean" ? h ? "1" : "" : String(h ?? "");
    }
    function f(h) {
      const w = a.colors[u(h)] ?? a.defaultColor ?? "neutral";
      return aa[w] ?? "outline";
    }
    function g(h) {
      return a.options[h] ?? h;
    }
    function p(h, w) {
      if (s.value || h === i.value) {
        w();
        return;
      }
      r("change", h), w();
    }
    return (h, w) => (t(), n("div", {
      onClick: w[0] || (w[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), D(Ke, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          R(c(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), D(Ze, {
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
            E(Ke, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Vu, [
              o("path", {
                d: k(ce)("chevron-down")
              }, null, 8, ju)
            ]))
          ], 8, Lu)
        ]),
        panel: L(({ close: y }) => [
          o("div", Du, c(d.value), 1),
          (t(!0), n(z, null, j(e.options, (C, S) => (t(), n("button", {
            key: S,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (M) => p(String(S), y)
          }, [
            E(Ke, {
              variant: f(S),
              class: "capitalize"
            }, {
              default: L(() => [
                R(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(S) === i.value ? (t(), n("svg", Eu, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, Iu)
            ])) : (t(), n("span", Fu))
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
}, tc = ["d"], ac = { class: "min-w-0 flex-1 truncate" }, A3 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = U(null), d = U(null), u = x(() => r.groups.flatMap((m) => m.actions)), f = x(() => u.value.filter((m) => !m.destructive)), g = x(() => u.value.filter((m) => m.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(m) {
      return p[m.color ?? "gray"] ?? p.gray;
    }
    const w = x(() => u.value.length === 0);
    function y(m) {
      s("run", m);
    }
    function C(m) {
      if (r.busy !== m.key) {
        if (m.link) {
          m.url && window.location.assign(m.url);
          return;
        }
        y(m);
      }
    }
    function S(m, v) {
      const b = v.toLowerCase().split("+").map((T) => T.trim()), A = b.at(-1);
      return !A || m.key.toLowerCase() !== A ? !1 : (m.ctrlKey || m.metaKey) === b.includes("mod") && m.shiftKey === b.includes("shift") && m.altKey === b.includes("alt");
    }
    function M(m) {
      w.value || (m.preventDefault(), i.value?.openAt(m.clientX, m.clientY));
    }
    function _(m) {
      const v = u.value.find(
        (te) => (te.keyBindings ?? []).some((H) => S(m, H))
      );
      if (v) {
        m.preventDefault(), C(v);
        return;
      }
      if (m.key !== "ArrowDown" && m.key !== "ArrowUp")
        return;
      const b = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (b.length === 0)
        return;
      m.preventDefault();
      const A = b.indexOf(document.activeElement), I = m.key === "ArrowDown" ? 1 : -1, T = (A + I + b.length) % b.length;
      b[T]?.focus();
    }
    return l({ openContextMenu: M }), (m, v) => (t(), n("div", Nu, [
      w.value ? $("", !0) : (t(), D(Ze, {
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
            (t(), n("svg", Uu, [
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
            (t(!0), n(z, null, j(f.value, (b) => (t(), n(z, {
              key: b.key
            }, [
              b.link ? (t(), n("a", {
                key: 0,
                href: b.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(b)])
              }, [
                (t(), n("svg", qu, [
                  o("path", {
                    d: k(ot)(b)
                  }, null, 8, Gu)
                ])),
                o("span", Wu, c(b.label), 1)
              ], 10, Ku)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(b)]),
                disabled: e.busy === b.key,
                onClick: (A) => y(b)
              }, [
                (t(), n("svg", {
                  class: P(["size-4 shrink-0", e.busy === b.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: k(ot)(b)
                  }, null, 8, Ju)
                ], 2)),
                o("span", Yu, c(b.label), 1)
              ], 10, Zu))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", Xu, [
              (t(!0), n(z, null, j(g.value, (b) => (t(), n("button", {
                key: b.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === b.key,
                onClick: (A) => y(b)
              }, [
                (t(), n("svg", ec, [
                  o("path", {
                    d: k(ot)({ ...b, destructive: !0 })
                  }, null, 8, tc)
                ])),
                o("span", ac, c(b.label), 1)
              ], 8, Qu))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
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
}, kt = 12, $t = 20, nc = [0, 0.25, 0.5, 0.75, 1], na = "alxtexhpanel.appearance", _e = {
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
}, je = U({ ..._e });
let Je = !1;
const Fa = "alxtexhpanel.appearance.vars", Rt = "pk-appearance";
function tt() {
  return typeof window > "u" ? null : window;
}
let wt = null;
function Na(e) {
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
function Ra(e) {
  const l = tt();
  l && (l.__panelAppearance = { ...e });
}
function lc(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Rt);
  l || (l = document.createElement("style"), l.id = Rt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function P3() {
  Je = !1, wt = null, je.value = { ..._e };
  const e = tt();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Rt)?.remove();
}
function la(e) {
  return e.theme === "dark";
}
const pa = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, va = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Ua(e) {
  const l = Ft[e.primary] ?? Ft.slate, a = Nt[e.surface] ?? Nt.neutral, r = a.chroma, s = a.hue, d = la(e) ? {
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
    "--pk-row-padding": pa[e.density] ?? pa.comfortable,
    "--pk-form-gap": va[e.density] ?? va.comfortable
  };
}
function oc(e) {
  return {
    dark: la(e),
    theme: e.theme,
    vars: Ua(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function oa() {
  if (typeof window > "u")
    return { ..._e };
  try {
    const e = localStorage.getItem(na);
    if (!e)
      return { ..._e };
    const l = { ..._e, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = _e.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? _e.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < kt || l.fontSize > $t) && (l.fontSize = _e.fontSize), l;
  } catch {
    return { ..._e };
  }
}
function sc() {
  const e = tt();
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
function Ha(e) {
  const l = oa(), a = e ? { ..._e, ...l, ...e } : { ..._e, ...l }, r = !Je, s = Na(a);
  if (je.value = a, Je = !0, e) {
    Ra(a);
    try {
      localStorage.setItem(na, JSON.stringify(a));
    } catch {
    }
  }
  const d = tt()?.__panelAppearanceApplied === !0;
  if (wt !== s) {
    if (r && d && e) {
      wt = s;
      try {
        const u = oc(a);
        localStorage.setItem(Fa, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Ut(a);
  }
}
function z3() {
  Ha(sc());
}
function O3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Ha(l);
}
let Ka = null;
function L3(e) {
  Ka = e;
}
let qa = {};
function rc(e) {
  if (qa = e, !(typeof document > "u") && !oa().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Ut(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Ua(e), r = { ...a, ...e.primaryChosen ? {} : qa }, s = {
    dark: la(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, lc(a), Ra(e), wt = Na(e);
  const i = tt();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Fa, JSON.stringify(s));
  } catch {
  }
}
function Ga() {
  function e(r) {
    Ut(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(na, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), Ka?.({ ...r, ...s });
  }
  function a() {
    l({ ..._e });
  }
  return ve(() => {
    if (Je || tt()?.__panelAppearanceApplied) {
      Je = !0;
      return;
    }
    Je = !0, je.value = oa(), Ut(je.value);
  }), {
    appearance: x(() => je.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: Ft,
    SURFACE_TINTS: Nt,
    FONT_SIZE_MIN: kt,
    FONT_SIZE_MAX: $t,
    RADIUS_OPTIONS: nc
  };
}
const ic = ["aria-busy", "aria-label"], dc = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, uc = { class: "min-w-0" }, cc = { class: "text-base font-semibold" }, fc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, mc = { class: "flex shrink-0 items-center gap-2" }, pc = ["disabled"], vc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, gc = {
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
    const a = e, r = l, s = U(null);
    let i = null, d = "";
    const u = U(!1), f = x(() => a.width ?? mo[a.size]), g = x(
      () => [Da, a.padded ? fo : ""].filter(Boolean).join(" ")
    );
    function p(y) {
      u.value = y.target === y.currentTarget;
    }
    function h(y) {
      u.value && y.target === y.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function w(y) {
      if (!a.open)
        return;
      if (y.key === "Escape") {
        if (a.busy)
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
      const S = C[0], M = C[C.length - 1];
      y.shiftKey && document.activeElement === S ? (y.preventDefault(), M.focus()) : !y.shiftKey && document.activeElement === M && (y.preventDefault(), S.focus());
    }
    return me(
      () => a.open,
      async (y) => {
        if (y) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", w), await De(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", w), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = d;
    }), (y, C) => (t(), D(ut, { to: "body" }, [
      E(Ye, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]",
            onPointerdown: p,
            onPointerup: h
          }, null, 32)) : $("", !0)
        ]),
        _: 1
      }),
      E(Ye, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": e.side === "left" ? "-translate-x-full" : "translate-x-full",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": e.side === "left" ? "-translate-x-full" : "translate-x-full"
      }, {
        default: L(() => [
          e.open ? (t(), n("aside", {
            key: 0,
            ref_key: "panel",
            ref: s,
            class: P(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", dc, [
              o("div", uc, [
                o("h2", cc, c(e.title), 1),
                e.description ? (t(), n("p", fc, c(e.description), 1)) : $("", !0)
              ]),
              o("div", mc, [
                K(y.$slots, "header-actions"),
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
                ])], 8, pc)
              ])
            ]),
            o("div", vc, [
              o("div", {
                class: P(g.value)
              }, [
                K(y.$slots, "default")
              ], 2)
            ]),
            y.$slots.footer ? (t(), n("footer", gc, [
              K(y.$slots, "footer")
            ])) : $("", !0)
          ], 10, ic)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
}), hc = { class: "flex flex-col gap-5 px-4 py-4" }, bc = { class: "flex flex-col gap-2" }, yc = { class: "grid grid-cols-8 gap-2" }, xc = ["title", "aria-label", "aria-pressed", "onClick"], kc = { class: "flex flex-col gap-2" }, $c = { class: "grid grid-cols-8 gap-2" }, wc = ["title", "aria-label", "aria-pressed", "onClick"], Cc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, Sc = { class: "flex flex-col gap-2" }, Mc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Bc = ["aria-pressed", "aria-label", "onClick"], _c = { class: "text-sm font-semibold" }, Ac = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Pc = ["onClick"], zc = { class: "flex flex-col gap-2" }, Oc = { class: "flex items-center justify-between" }, Lc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Vc = { class: "flex items-center gap-2" }, jc = ["disabled"], Dc = ["min", "max", "value"], Tc = ["disabled"], V3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ga(), u = U(!1), f = x(() => l.value.sidebarSide === "right"), g = x(() => f.value ? "left" : "right"), p = [
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
    ], S = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function M(_, m) {
      return `oklch(0.72 ${m * 3} ${_})`;
    }
    return (_, m) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: m[0] || (m[0] = (v) => u.value = !0)
      }, [...m[6] || (m[6] = [
        Mt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      E(_t, {
        open: u.value,
        title: "Settings",
        side: g.value,
        width: "w-80",
        padded: !1,
        onClose: m[5] || (m[5] = (v) => u.value = !1)
      }, {
        "header-actions": L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: m[1] || (m[1] = //@ts-ignore
            (...v) => k(r) && k(r)(...v))
          }, " Reset ")
        ]),
        default: L(() => [
          o("div", hc, [
            o("section", bc, [
              m[8] || (m[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", yc, [
                (t(!0), n(z, null, j(k(s), (v, b) => (t(), n("button", {
                  key: b,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: v.value }),
                  title: v.label,
                  "aria-label": v.label,
                  "aria-pressed": k(l).primary === b,
                  onClick: (A) => k(a)({ primary: b })
                }, [
                  k(l).primary === b ? (t(), n("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: v.foreground }),
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3.5"
                  }, [...m[7] || (m[7] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])], 4)) : $("", !0)
                ], 12, xc))), 128))
              ])
            ]),
            o("section", kc, [
              m[10] || (m[10] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
              o("div", $c, [
                (t(!0), n(z, null, j(k(i), (v, b) => (t(), n("button", {
                  key: b,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: M(v.hue, v.chroma) }),
                  title: v.label,
                  "aria-label": v.label,
                  "aria-pressed": k(l).surface === b,
                  onClick: (A) => k(a)({ surface: b })
                }, [
                  k(l).surface === b ? (t(), n("svg", Cc, [...m[9] || (m[9] = [
                    o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                  ])])) : $("", !0)
                ], 12, wc))), 128))
              ])
            ]),
            o("section", Sc, [
              m[11] || (m[11] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
              o("div", Mc, [
                (t(!0), n(z, null, j(k(d), (v) => (t(), n("button", {
                  key: v,
                  type: "button",
                  class: P([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === v ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === v,
                  "aria-label": `${v}rem radius`,
                  onClick: (b) => k(a)({ radius: v })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(v, 0.5)}rem` })
                  }, null, 4),
                  R(" " + c(v), 1)
                ], 10, Bc))), 128))
              ])
            ]),
            (t(!0), n(z, null, j([
              { label: "Color scheme", key: "theme", options: p },
              { label: "Card style", key: "cardStyle", options: w },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: y },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: S }
            ], (v) => (t(), n("section", {
              key: v.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", _c, c(v.label), 1),
              o("div", Ac, [
                (t(!0), n(z, null, j(v.options, (b) => (t(), n("button", {
                  key: String(b.value),
                  type: "button",
                  class: P([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[v.key] === b.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (A) => k(a)({ [v.key]: b.value })
                }, c(b.label), 11, Pc))), 128))
              ])
            ]))), 128)),
            o("section", zc, [
              o("div", Oc, [
                m[12] || (m[12] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                o("span", Lc, c(k(l).fontSize) + "px", 1)
              ]),
              o("div", Vc, [
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize <= k(kt),
                  "aria-label": "Decrease font size",
                  onClick: m[2] || (m[2] = (v) => k(a)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, jc),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k(kt),
                  max: k($t),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: m[3] || (m[3] = (v) => k(a)({
                    fontSize: Number(v.target.value)
                  }))
                }, null, 40, Dc),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k($t),
                  "aria-label": "Increase font size",
                  onClick: m[4] || (m[4] = (v) => k(a)({ fontSize: k(l).fontSize + 1 }))
                }, " + ", 8, Tc)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["open", "side"])
    ], 64));
  }
}), Ec = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Ic = { class: "flex items-stretch" }, Fc = ["href", "aria-current"], Nc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rc = ["d"], Uc = { class: "w-full truncate text-center" }, Hc = {
  key: 0,
  class: "flex-1"
}, Kc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, qc = ["d"], Gc = { class: "w-full truncate text-center" }, Lt = 5, j3 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.items.length <= Lt ? a.items : a.items.slice(0, Lt - 1)
    ), i = x(() => a.items.length > Lt);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), n("nav", Ec, [
      o("ul", Ic, [
        (t(!0), n(z, null, j(s.value, (g) => (t(), n("li", {
          key: g.key,
          class: "flex-1"
        }, [
          o("a", {
            href: g.href,
            class: P([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(g.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(g.href) ? "page" : void 0
          }, [
            (t(), n("svg", Nc, [
              o("path", {
                d: k(ce)(g.icon)
              }, null, 8, Rc)
            ])),
            o("span", Uc, c(g.title), 1)
          ], 10, Fc)
        ]))), 128)),
        i.value ? (t(), n("li", Hc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (g) => r("more"))
          }, [
            (t(), n("svg", Kc, [
              o("path", {
                d: k(ce)("more-horizontal")
              }, null, 8, qc)
            ])),
            o("span", Gc, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Wc = ["value"], $e = /* @__PURE__ */ O({
  __name: "PkTextInput",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = `file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ${Re}`;
    return (i, d) => (t(), n("input", {
      "data-slot": "input",
      value: a.modelValue ?? a.defaultValue,
      class: P([s, a.class]),
      onInput: d[0] || (d[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, Wc));
  }
}), Zc = ["for"], Pe = /* @__PURE__ */ O({
  __name: "PkFieldLabel",
  props: {
    for: {},
    class: {}
  },
  setup(e) {
    return (l, a) => (t(), n("label", {
      "data-slot": "label",
      for: l.$props.for,
      class: P([
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.$props.class
      ])
    }, [
      K(l.$slots, "default")
    ], 10, Zc));
  }
}), D3 = /* @__PURE__ */ O({
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
      class: P(["size-4 animate-spin", l.$props.class])
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
}), Jc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Yc = ["id", "name", "value", "disabled", "maxlength"], Xc = ["data-active"], Qc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, ef = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(!1), i = U(null), d = U("");
    ve(() => {
      a.autofocus && i.value?.focus();
    });
    const u = x(
      () => Array.from({ length: a.length }, (_, m) => a.modelValue[m] ?? "")
    ), f = x(() => Math.min(a.modelValue.length, a.length - 1));
    function g(_) {
      return _.replace(/\D/g, "").slice(0, a.length);
    }
    function p(_) {
      a.disabled || _.length !== a.length || d.value !== _ && (d.value = _, r("complete", _));
    }
    function h(_) {
      const m = g(_);
      m !== a.modelValue && r("update:modelValue", m), p(m);
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
    function S(_) {
      _.animationName === "pkOtpAutofillStart" && C();
    }
    me(
      () => a.modelValue,
      (_) => {
        _.length < a.length ? d.value = "" : p(_);
      }
    );
    let M;
    return ve(() => {
      M = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), un(() => {
      M !== void 0 && window.clearInterval(M);
    }), (_, m) => (t(), n("div", Jc, [
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
        onInput: w,
        onChange: y,
        onAnimationstart: S,
        onFocus: m[0] || (m[0] = (v) => s.value = !0),
        onBlur: m[1] || (m[1] = (v) => s.value = !1)
      }, null, 40, Yc),
      (t(!0), n(z, null, j(u.value, (v, b) => (t(), n("div", {
        key: b,
        "data-slot": "input-otp-slot",
        "data-active": s.value && b === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        R(c(v) + " ", 1),
        s.value && b === f.value && v === "" ? (t(), n("div", Qc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Xc))), 128))
    ]));
  }
}), T3 = /* @__PURE__ */ Bt(ef, [["__scopeId", "data-v-560616ac"]]), tf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Te = /* @__PURE__ */ O({
  __name: "PkHeading",
  props: {
    title: {},
    description: {},
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("header", {
      class: P(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: P(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), n("p", tf, c(e.description), 1)) : $("", !0)
    ], 2));
  }
}), af = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, nf = { class: "min-w-0 space-y-1" }, lf = { class: "flex flex-wrap items-center gap-2.5" }, of = { class: "text-2xl font-semibold tracking-tight" }, sf = {
  key: 0,
  class: "flex items-center gap-2"
}, rf = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, df = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, E3 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", af, [
      o("div", nf, [
        o("div", lf, [
          o("h1", of, c(e.title), 1),
          l.$slots.status ? (t(), n("div", sf, [
            K(l.$slots, "status")
          ])) : $("", !0)
        ]),
        e.purpose ? (t(), n("p", rf, c(e.purpose), 1)) : $("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", df, [
        K(l.$slots, "actions")
      ])) : $("", !0)
    ]));
  }
}), uf = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: P(k(ae)(k(mf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), cf = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: P(k(ae)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), ff = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: P(k(ae)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), mf = Xt(
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
), pf = { class: "list-inside list-disc text-sm" }, I3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), D(k(uf), { variant: "destructive" }, {
      default: L(() => [
        E(k(Qn), { class: "size-4" }),
        E(k(ff), null, {
          default: L(() => [
            R(c(e.title), 1)
          ]),
          _: 1
        }),
        E(k(cf), null, {
          default: L(() => [
            o("ul", pf, [
              (t(!0), n(z, null, j(a.value, (i, d) => (t(), n("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Wa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Va(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => pe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => cn(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        k(ae)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          k(Re),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Ae, k(s)]
    ]);
  }
}), vf = { class: "relative" }, gf = ["aria-label"], F3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = U(!1), s = fn("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", vf, [
      E(k(Wa), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(ae)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: P(
          k(ae)(
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
      ], 10, gf)
    ]));
  }
}), Za = "@container min-w-0", hf = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", N3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", bf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function yf(e) {
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
function R3(e, l) {
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
    yf(d.span) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function ga(e, l) {
  return `${e}:${l}`;
}
function U3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Ht(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function H3(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const g of f.items)
      i.set(ga(f.kind, g.key), {
        kind: f.kind,
        source: g
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const f of r?.widgets ?? []) {
    const g = f.id.toLowerCase(), p = i.get(g);
    p && (u.add(g), d.push({
      id: g,
      kind: p.kind,
      key: p.source.key,
      span: Ht(f.span),
      hidden: !!f.hidden,
      source: p.source
    }));
  }
  for (const f of s)
    for (const g of f.items) {
      const p = ga(f.kind, g.key);
      u.has(p) || d.push({
        id: p,
        kind: f.kind,
        key: g.key,
        span: Ht(g.span),
        hidden: !1,
        source: g
      });
    }
  return d;
}
function K3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Ht(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Ja = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", xf = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", kf = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function $f(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function wf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function Cf(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Sf(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function Sf(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Mf(e) {
  if ($f(e))
    throw new Error(kf);
  if (!wf(e))
    throw new Error(Ja);
  if (!await Cf(e))
    throw new Error(xf);
}
const q3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Qe), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bf = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Ba), re({
      "data-slot": "sheet-description",
      class: k(ae)("text-sm text-muted-foreground font-normal", l.class)
    }, k(a)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), G3 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: P(k(ae)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), _f = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: P(k(ae)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Af = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(_a), re({
      "data-slot": "sheet-title",
      class: k(ae)("text-foreground font-semibold", l.class)
    }, k(a)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), W3 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Aa), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ha = "sidebar_state", Pf = 3600 * 24 * 7, zf = "16rem", Of = "18rem", Lf = "3rem", Vf = "b", [At, jf] = xn("Sidebar"), Df = { class: "flex h-full w-full flex-col" }, Tf = ["data-state", "data-collapsible", "data-variant", "data-side"], Ef = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, Z3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = At();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: k(ae)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      K(d.$slots, "default")
    ], 16)) : k(a) ? (t(), D(k(ea), re({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: L(() => [
        E(k(ta), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": k(Of)
          })
        }, {
          default: L(() => [
            E(_f, { class: "sr-only" }, {
              default: L(() => [
                E(Af, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    R("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                E(Bf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    R("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Df, [
              K(d.$slots, "default")
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
        class: P(
          k(ae)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: k(ae)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", Ef, [
          K(d.$slots, "default")
        ])
      ], 16)
    ], 8, Tf));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "SidebarContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: P(
        k(ae)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Y3 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(k(ae)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), X3 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(k(ae)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Q3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        k(ae)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), eC = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(k(ae)("w-full text-sm", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), tC = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        k(ae)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), aC = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(k(ae)("flex flex-col gap-2 p-2", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), nC = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Wa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(k(ae)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), lC = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: P(
        k(ae)(
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
      K(a.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(k(ae)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), sC = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: P(
        k(ae)(
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), rC = /* @__PURE__ */ O({
  __name: "SidebarMenuBadge",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      class: P(
        k(ae)(
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
      K(a.$slots, "default")
    ], 2));
  }
}), If = /* @__PURE__ */ O({
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
    return (i, d) => (t(), D(k(kn), re({ "data-slot": "tooltip" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Ff = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k($n), null, {
      default: L(() => [
        E(k(wn), re({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(ae)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            K(d.$slots, "default"),
            E(k(Cn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), iC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), D(k(Pa), Oe(Fe(l)), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nf = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Sn), re({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ba = /* @__PURE__ */ O({
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
    return (a, r) => (t(), D(k(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: k(ae)(k(Uf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), dC = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = At(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), D(k(If), { key: 1 }, {
      default: L(() => [
        E(k(Nf), { "as-child": "" }, {
          default: L(() => [
            E(ba, Oe(Fe({ ...k(s), ...i.$attrs })), {
              default: L(() => [
                K(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        E(k(Ff), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              R(c(e.tooltip), 1)
            ], 64)) : (t(), D(Me(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), D(ba, Oe(re({ key: 0 }, { ...k(s), ...i.$attrs })), {
      default: L(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uC = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(k(ae)("group/menu-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), ya = "animate-pulse rounded-md bg-primary/10", cC = /* @__PURE__ */ O({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = x(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, s) => (t(), n("div", {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      class: P(k(ae)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(k(ae)(ya, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: P(k(ae)(ya, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), fC = /* @__PURE__ */ O({
  __name: "SidebarMenuSub",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: P(
        k(ae)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), D(k(et), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: P(
        k(ae)(
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
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), pC = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(k(ae)("group/menu-sub-item relative", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), vC = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !ul?.cookie.includes(`${ha}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = il("(max-width: 767px)"), i = U(!1), d = Va(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${ha}=${d.value}; path=/; max-age=${Pf}`;
    }
    function f(h) {
      i.value = h;
    }
    function g() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    dl("keydown", (h) => {
      h.key === Vf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), g());
    });
    const p = x(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return jf({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: g
    }), (h, w) => (t(), D(k(Pa), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(zf),
            "--sidebar-width-icon": k(Lf)
          },
          class: k(ae)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, h.$attrs), [
          K(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), gC = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = At();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: P(
        k(ae)(
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
      K(r.$slots, "default")
    ], 2));
  }
}), Rf = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Mn), re({ "data-slot": "separator" }, k(a), {
      class: k(ae)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), hC = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Rf), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(k(ae)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bC = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = At();
    return (i, d) => (t(), D(de, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(k(ae)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: L(() => [
        k(a) || k(r) === "collapsed" ? (t(), D(k(al), { key: 0 })) : (t(), D(k(nl), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Uf = Xt(
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
), yC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), D(k(Bn), re({ "data-slot": "dropdown-menu" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Hf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, xC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(_n), re({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(ae)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Hf, [
          E(k(za), null, {
            default: L(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                E(k(Oa), { class: "size-4" })
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
}), kC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(An), null, {
      default: L(() => [
        E(k(Pn), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ae)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
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
}), $C = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(zn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wC = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "inset", "variant", "class"), r = Le(a);
    return (s, i) => (t(), D(k(On), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, k(r), {
      class: k(ae)(
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
}), CC = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), D(k(Ln), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, k(r), {
      class: k(ae)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), SC = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(k(Vn), re({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: L(() => [
        K(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, MC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(jn), re({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(ae)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Kf, [
          E(k(za), null, {
            default: L(() => [
              K(d.$slots, "indicator-icon", {}, () => [
                E(k(ll), { class: "size-2 fill-current" })
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
}), BC = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Dn), re({ "data-slot": "dropdown-menu-separator" }, k(a), {
      class: k(ae)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), _C = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(k(ae)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), AC = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), D(k(Tn), re({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), PC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(En), re({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(ae)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zC = /* @__PURE__ */ O({
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
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), D(k(In), re({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(ae)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        K(s.$slots, "default"),
        E(k(La), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), OC = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Le(e);
    return (r, s) => (t(), D(k(Fn), re({ "data-slot": "dropdown-menu-trigger" }, k(a)), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), LC = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Nn), {
      "data-slot": "avatar",
      class: P(k(ae)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), VC = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Rn), re({ "data-slot": "avatar-fallback" }, k(a), {
      class: k(ae)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), D(k(Un), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), DC = /* @__PURE__ */ O({
  __name: "Breadcrumb",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("nav", {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      class: P(l.class)
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), TC = /* @__PURE__ */ O({
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
      class: P(k(ae)("flex size-9 items-center justify-center", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        E(k(ol), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), EC = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: P(k(ae)("inline-flex items-center gap-1.5", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), IC = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(et), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: P(k(ae)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), FC = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        k(ae)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), NC = /* @__PURE__ */ O({
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
      class: P(k(ae)("text-foreground font-normal", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), RC = /* @__PURE__ */ O({
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
      class: P(k(ae)("[&>svg]:size-3.5", l.class))
    }, [
      K(a.$slots, "default", {}, () => [
        E(k(La))
      ])
    ], 2));
  }
}), qf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Gf = /* @__PURE__ */ O({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    align: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), n("div", qf, [
      E(k(Hn), re({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(ae)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), UC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class", "viewport"), i = be(s, r);
    return (d, u) => (t(), D(k(Kn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(ae)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((f) => [
        K(d.$slots, "default", Oe(Fe(f))),
        e.viewport ? (t(), D(Gf, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), HC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(qn), re({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(ae)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), KC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), D(k(Gn), re({ "data-slot": "navigation-menu-indicator" }, k(r), {
      class: k(ae)(
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
}), qC = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Wn), re({ "data-slot": "navigation-menu-item" }, k(a), {
      class: k(ae)("relative", l.class)
    }), {
      default: L(() => [
        K(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GC = /* @__PURE__ */ O({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Zn), re({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(ae)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        K(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WC = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), D(k(Jn), re({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(ae)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZC = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), D(k(Yn), re({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(ae)(k(Wf)(), "group", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default"),
        E(k(sl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wf = Xt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), JC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), D(k(Ma), re({ "data-slot": "dialog" }, k(s)), {
      default: L((u) => [
        K(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), YC = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Qe), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Wt), re({ "data-slot": "dialog-overlay" }, k(a), {
      class: k(ae)(
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
}), XC = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        E(Zf),
        E(k(Jt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(ae)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
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
                E(k(Yt)),
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
}), QC = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), D(k(Ba), re({ "data-slot": "dialog-description" }, k(r), {
      class: k(ae)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e8 = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: P(k(ae)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      K(a.$slots, "default"),
      e.showCloseButton ? (t(), D(k(Qe), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          E(de, { variant: "outline" }, {
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
}), t8 = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: P(k(ae)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), a8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = fe(a, "class"), i = be(s, r);
    return (d, u) => (t(), D(k(Zt), null, {
      default: L(() => [
        E(k(Wt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            E(k(Jt), re({
              class: k(ae)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const g = f.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                K(d.$slots, "default"),
                E(k(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
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
}), n8 = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), D(k(_a), re({ "data-slot": "dialog-title" }, k(r), {
      class: k(ae)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        K(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l8 = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(Aa), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        K(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), o8 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), D(k(Xn), re({ "data-slot": "label" }, k(a), {
      class: k(ae)(
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
}), s8 = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), D(k(rl), {
      role: "status",
      "aria-label": "Loading",
      class: P(k(ae)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), r8 = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: P(
        k(ae)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), i8 = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: P(k(ae)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), d8 = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: P(k(ae)("px-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), u8 = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: P(k(ae)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), c8 = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: P(k(ae)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), f8 = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: P(
        k(ae)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), m8 = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: P(k(ae)("leading-none font-semibold", l.class))
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), Jf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Yf = { class: "flex items-start gap-3" }, Xf = { class: "min-w-0 flex-1" }, Qf = { class: "text-foreground text-sm font-medium" }, em = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, p8 = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = U(!1), d = U(null), u = U(0);
    mn((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (g, p) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Jf, [
        o("div", Yf, [
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
          o("div", Xf, [
            o("p", Qf, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", em, c(d.value), 1)) : $("", !0),
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
      ])) : i.value ? $("", !0) : K(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), tm = { class: "bg-card rounded-lg border" }, am = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, nm = { class: "min-w-0" }, lm = {
  key: 0,
  class: "truncate text-sm font-medium"
}, om = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, sm = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, rm = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, v8 = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", tm, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", am, [
        o("div", nm, [
          K(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", lm, c(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", om, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", sm, [
          K(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        K(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", rm, [
        K(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), Ya = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function g8() {
  const e = ja(), l = x(() => e.props.panel?.pageFooter === !0);
  return Et(Ya, l), l;
}
const im = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, dm = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, um = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, h8 = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = ja(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = x(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = yt(Ya, x(() => !1)), u = x(() => !l.host && k(d) === !0);
    return (f, g) => u.value ? $("", !0) : (t(), n("footer", im, [
      o("div", dm, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", um, [
          (t(!0), n(z, null, j(i.value, (p) => (t(), D(k(ml), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              R(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), cm = { class: "flex shrink-0 flex-col items-center" }, fm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, b8 = /* @__PURE__ */ O({
  __name: "PkDeviceFrame",
  props: {
    width: { default: 390 },
    height: { default: 844 },
    notch: { type: Boolean, default: !0 },
    kind: { default: "phone" }
  },
  setup(e) {
    const l = e, a = x(() => l.kind === "laptop"), r = x(
      () => a.value ? "rounded-lg border-[6px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700" : "rounded-[2.5rem] border-[10px] border-neutral-800 bg-neutral-800 dark:border-neutral-700 dark:bg-neutral-700"
    ), s = x(() => a.value ? "rounded-sm" : "rounded-[2rem]");
    return (i, d) => (t(), n("div", cm, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", fm)) : $("", !0),
        o("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
        }, [
          K(i.$slots, "default")
        ], 2)
      ], 6),
      a.value ? (t(), n(z, { key: 0 }, [
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
}), mm = {
  key: 0,
  class: "flex justify-end"
}, pm = { class: "flex flex-col gap-2" }, vm = ["onDrop"], gm = ["aria-label", "onDragstart"], hm = ["onClick"], bm = { class: "font-medium" }, ym = {
  key: 0,
  class: "text-muted-foreground ml-2 truncate"
}, xm = {
  key: 2,
  class: "min-w-0 flex-1"
}, km = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, $m = ["aria-label", "onClick"], wm = ["disabled", "aria-label", "onClick"], Cm = ["disabled", "aria-label", "onClick"], Sm = ["disabled", "title", "aria-label", "onClick"], Mm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Bm = ["disabled"], y8 = /* @__PURE__ */ O({
  __name: "PkRepeater",
  props: {
    modelValue: {},
    children: {},
    itemLabel: { default: "Item" },
    minItems: { default: null },
    maxItems: { default: null },
    collapsible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    fieldKey: {},
    childOptions: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    let s = 0;
    const i = U(d(a.modelValue));
    function d(N) {
      return Array.isArray(N) ? N.map((W) => ({ uid: s++, data: { ...W } })) : [];
    }
    me(
      () => a.modelValue,
      (N) => {
        JSON.stringify(N ?? null) !== JSON.stringify(u()) && (i.value = d(N));
      }
    );
    function u() {
      const N = [];
      for (const W of i.value) {
        const J = {};
        let G = !1;
        for (const q of a.children) {
          const B = W.data[q.key] ?? null;
          J[q.key] = B, B !== null && B !== "" && !(Array.isArray(B) && B.length === 0) && (G = !0);
        }
        G && N.push(J);
      }
      return N.length ? N : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const g = x(() => a.maxItems !== null && i.value.length >= a.maxItems), p = x(() => a.minItems !== null && i.value.length <= a.minItems), h = x(() => a.children.length === 1);
    function w() {
      if (g.value || a.disabled)
        return;
      const N = {};
      for (const W of a.children)
        N[W.key] = null;
      i.value.push({ uid: s++, data: N });
    }
    function y(N) {
      i.value = i.value.filter((W) => W.uid !== N), f();
    }
    function C(N, W) {
      const J = N + W;
      if (J < 0 || J >= i.value.length)
        return;
      const G = [...i.value], [q] = G.splice(N, 1);
      G.splice(J, 0, q), i.value = G, f();
    }
    function S(N, W, J) {
      const G = i.value.find((q) => q.uid === N);
      G && (G.data[W] = J, f());
    }
    function M(N, W) {
      return a.errors[`${a.fieldKey}.${N}.${W}`];
    }
    const _ = U(/* @__PURE__ */ new Set());
    function m(N) {
      return a.collapsible && _.value.has(N);
    }
    function v(N) {
      const W = new Set(_.value);
      W.has(N) ? W.delete(N) : W.add(N), _.value = W;
    }
    const b = x(
      () => i.value.length > 0 && i.value.every((N) => _.value.has(N.uid))
    );
    function A() {
      _.value = b.value ? /* @__PURE__ */ new Set() : new Set(i.value.map((N) => N.uid));
    }
    function I(N) {
      const W = a.children[0];
      if (!W)
        return "";
      const J = N.data[W.key];
      if (typeof J != "string" && typeof J != "number")
        return "";
      const G = String(J).trim();
      return G === "" || G.length > 60 ? "" : G;
    }
    const T = U(null);
    function te(N, W) {
      if (a.disabled) {
        W.preventDefault();
        return;
      }
      T.value = N, W.dataTransfer?.setData("text/plain", String(N)), W.dataTransfer && (W.dataTransfer.effectAllowed = "move");
    }
    function H() {
      T.value = null;
    }
    function Z(N, W) {
      W.preventDefault();
      const J = T.value;
      if (T.value = null, a.disabled || J === null || J === N)
        return;
      const G = [...i.value], q = G.findIndex((V) => V.uid === J), B = G.findIndex((V) => V.uid === N);
      if (q < 0 || B < 0)
        return;
      const [F] = G.splice(q, 1);
      G.splice(B, 0, F), i.value = G, f();
    }
    return (N, W) => (t(), n(z, null, [
      e.collapsible && i.value.length > 1 ? (t(), n("div", mm, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs font-medium",
          onClick: A
        }, c(b.value ? "Expand all" : "Collapse all"), 1)
      ])) : $("", !0),
      o("div", pm, [
        (t(!0), n(z, null, j(i.value, (J, G) => (t(), n("div", {
          key: J.uid,
          class: P(["flex items-start gap-2", T.value === J.uid ? "opacity-40" : ""]),
          onDragover: W[0] || (W[0] = he(() => {
          }, ["prevent"])),
          onDrop: (q) => Z(J.uid, q)
        }, [
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: P(["text-muted-foreground/60 hover:text-muted-foreground flex size-6 shrink-0 cursor-grab items-center justify-center active:cursor-grabbing", h.value ? "mt-1.5" : "mt-0.5"]),
            draggable: "true",
            "aria-label": `Drag to reorder ${e.itemLabel} ${G + 1}`,
            onDragstart: (q) => te(J.uid, q),
            onDragend: H
          }, [...W[1] || (W[1] = [
            Mt('<svg class="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.4"></circle><circle cx="15" cy="6" r="1.4"></circle><circle cx="9" cy="12" r="1.4"></circle><circle cx="15" cy="12" r="1.4"></circle><circle cx="9" cy="18" r="1.4"></circle><circle cx="15" cy="18" r="1.4"></circle></svg>', 1)
          ])], 42, gm)),
          o("span", {
            class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
            "aria-hidden": "true"
          }, c(G + 1), 3),
          m(J.uid) ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "hover:bg-accent min-w-0 flex-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors",
            onClick: (q) => v(J.uid)
          }, [
            o("span", bm, c(e.itemLabel) + " " + c(G + 1), 1),
            I(J) ? (t(), n("span", ym, c(I(J)), 1)) : $("", !0)
          ], 8, hm)) : (t(), n("div", xm, [
            h.value ? (t(), D(Xe, {
              key: 0,
              field: {
                ...e.children[0],
                disabled: e.children[0].disabled || e.disabled,
                labelHidden: !0
              },
              value: J.data[e.children[0].key],
              error: M(G, e.children[0].key),
              options: e.childOptions[e.children[0].key] ?? [],
              onChange: (q) => S(J.uid, e.children[0].key, q)
            }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", km, [
              (t(!0), n(z, null, j(e.children, (q) => (t(), D(Xe, {
                key: q.key,
                field: { ...q, disabled: q.disabled || e.disabled },
                value: J.data[q.key],
                error: M(G, q.key),
                options: e.childOptions[q.key] ?? [],
                onChange: (B) => S(J.uid, q.key, B)
              }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
            ]))
          ])),
          o("div", {
            class: P(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
          }, [
            e.collapsible ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors",
              "aria-label": m(J.uid) ? `Expand ${e.itemLabel} ${G + 1}` : `Collapse ${e.itemLabel} ${G + 1}`,
              onClick: (q) => v(J.uid)
            }, [
              (t(), n("svg", {
                class: P(["size-3.5 transition-transform", m(J.uid) ? "" : "rotate-180"]),
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [...W[2] || (W[2] = [
                o("path", { d: "m6 9 6 6 6-6" }, null, -1)
              ])], 2))
            ], 8, $m)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || G === 0,
              "aria-label": `Move ${e.itemLabel} ${G + 1} up`,
              onClick: (q) => C(G, -1)
            }, [...W[3] || (W[3] = [
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
            ])], 8, wm),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || G === i.value.length - 1,
              "aria-label": `Move ${e.itemLabel} ${G + 1} down`,
              onClick: (q) => C(G, 1)
            }, [...W[4] || (W[4] = [
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
            ])], 8, Cm),
            o("button", {
              type: "button",
              class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
              disabled: e.disabled || p.value,
              title: p.value ? `At least ${e.minItems} required` : void 0,
              "aria-label": `Remove ${e.itemLabel} ${G + 1}`,
              onClick: (q) => y(J.uid)
            }, [...W[5] || (W[5] = [
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
            ])], 8, Sm)
          ], 2)
        ], 42, vm))), 128)),
        i.value.length === 0 ? (t(), n("p", Mm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
        g.value ? $("", !0) : (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled,
          onClick: w
        }, [
          W[6] || (W[6] = o("svg", {
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
        ], 8, Bm))
      ])
    ], 64));
  }
}), _m = { class: "space-y-1" }, Am = { class: "flex items-center gap-1" }, Pm = ["disabled", "title", "aria-label", "onClick"], zm = ["aria-pressed"], Om = ["id", "value", "rows", "disabled"], Lm = ["innerHTML"], Vm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(!1), i = x(() => a.modelValue ?? "");
    function d(h) {
      return h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = x(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(h, w = h) {
      const y = document.getElementById(a.id ?? "");
      if (y === null)
        return;
      const C = y.selectionStart, S = y.selectionEnd, M = i.value.slice(C, S);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${M}${w}${i.value.slice(S)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, p = x(
      () => (a.toolbar ?? Object.keys(g)).filter((h) => h in g)
    );
    return (h, w) => (t(), n("div", _m, [
      o("div", Am, [
        (t(!0), n(z, null, j(p.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          disabled: e.disabled,
          title: y,
          "aria-label": y,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => g[y].run()
        }, c(g[y].label), 9, Pm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: w[0] || (w[0] = (y) => s.value = !s.value)
        }, " Preview ", 8, zm)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Lm)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: w[1] || (w[1] = (y) => r("update:modelValue", y.target.value))
      }, null, 40, Om))
    ]));
  }
}), jm = { class: "space-y-1" }, Dm = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Tm = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Em = ["id", "value", "rows", "disabled"], Im = { class: "text-muted-foreground text-xs font-normal" }, Fm = {
  key: 0,
  class: "text-destructive text-xs"
}, Nm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null), i = U(!0), d = x(() => a.modelValue ?? ""), u = x(() => Math.max(d.value.split(`
`).length, 1)), f = x(() => {
      if (a.language !== "json" || d.value.trim() === "")
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
    function p(h) {
      if (h.key === "Escape") {
        i.value = !1;
        return;
      }
      if (h.key !== "Tab" && (i.value = !0), h.key !== "Tab" || !i.value)
        return;
      h.preventDefault();
      const w = h.target, y = w.selectionStart, C = w.selectionEnd, S = `${d.value.slice(0, y)}    ${d.value.slice(C)}`;
      r("update:modelValue", S), requestAnimationFrame(() => {
        w.selectionStart = w.selectionEnd = y + 4;
      });
    }
    return (h, w) => (t(), n("div", jm, [
      o("div", Dm, [
        o("div", Tm, [
          (t(!0), n(z, null, j(u.value, (y) => (t(), n("div", { key: y }, c(y), 1))), 128))
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
          onKeydown: p
        }, null, 40, Em)
      ]),
      o("p", Im, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Fm, c(f.value), 1)) : $("", !0)
    ]));
  }
}), Rm = { class: "space-y-3" }, Um = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Hm = { class: "text-sm font-medium" }, Km = { class: "flex items-center gap-1" }, qm = ["disabled", "onClick"], Gm = ["disabled", "onClick"], Wm = ["disabled", "onClick"], Zm = { class: "space-y-3 p-3" }, Jm = { class: "flex flex-wrap items-center gap-2" }, Ym = ["disabled", "onClick"], Xm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, x8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.modelValue ?? []), i = x(
      () => Object.fromEntries(a.blocks.map((w) => [w.type, w]))
    ), d = x(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u(w) {
      r("update:modelValue", w);
    }
    function f(w) {
      d.value || u([...s.value, { type: w, data: {} }]);
    }
    function g(w) {
      u(s.value.filter((y, C) => C !== w));
    }
    function p(w, y) {
      const C = w + y;
      if (C < 0 || C >= s.value.length)
        return;
      const S = [...s.value], [M] = S.splice(w, 1);
      S.splice(C, 0, M), u(S);
    }
    function h(w, y, C) {
      u(
        s.value.map(
          (S, M) => M === w ? { ...S, data: { ...S.data, [y]: C } } : S
        )
      );
    }
    return (w, y) => (t(), n("div", Rm, [
      (t(!0), n(z, null, j(s.value, (C, S) => (t(), n("div", {
        key: `${C.type}-${S}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Um, [
          o("span", Hm, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Km, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === 0,
              "aria-label": "Move up",
              onClick: (M) => p(S, -1)
            }, " ↑ ", 8, qm),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || S === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (M) => p(S, 1)
            }, " ↓ ", 8, Gm),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (M) => g(S)
            }, " Remove ", 8, Wm)
          ])
        ]),
        o("div", Zm, [
          (t(!0), n(z, null, j(i.value[C.type]?.fields ?? [], (M) => (t(), D(Xe, {
            key: M.key,
            field: M,
            value: C.data[M.key] ?? null,
            error: e.errors?.[M.key],
            processing: e.disabled,
            onChange: (_) => h(S, M.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Jm, [
        (t(!0), n(z, null, j(e.blocks, (C) => (t(), n("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (S) => f(C.type)
        }, " + " + c(C.label), 9, Ym))), 128)),
        d.value ? (t(), n("span", Xm, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Qm = ["name", "value", "checked", "disabled", "onChange"], ep = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, tp = /* @__PURE__ */ O({
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
      class: P(["flex gap-x-4 gap-y-2", e.field.inline ? "flex-row flex-wrap items-center" : "flex-col"])
    }, [
      (t(!0), n(z, null, j(e.options, (u) => (t(), n("label", {
        key: String(u.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "radio",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2",
          name: `f-${e.field.key}`,
          value: u.value,
          checked: s(u),
          disabled: e.disabled,
          onChange: (f) => r("update:modelValue", u.value)
        }, null, 40, Qm),
        R(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", ep, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), ap = ["value", "checked", "disabled", "onChange"], np = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, lp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
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
    const u = x(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (f, g) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), n(z, null, j(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (h) => d(p)
        }, null, 40, ap),
        R(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", np, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), op = { class: "flex flex-col gap-1.5" }, sp = ["aria-label", "onClick"], rp = ["placeholder", "disabled", "maxlength"], ip = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, dp = ["onClick"], up = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, cp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(""), i = x(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = x(() => i.value.length >= (a.field.max ?? 25)), u = x(
      () => (a.field.suggestions ?? []).filter(
        (h) => !i.value.some((w) => w.toLowerCase() === h.toLowerCase())
      )
    );
    function f(h) {
      const w = h.trim().slice(0, a.field.maxLength ?? 40);
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
    function g(h) {
      r(
        "update:modelValue",
        i.value.filter((w, y) => y !== h)
      );
    }
    function p(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (h, w) => (t(), n("div", op, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, j(i.value, (y, C) => (t(), n("span", {
          key: `${y}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          R(c(y) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${y}`,
            onClick: (S) => g(C)
          }, " × ", 8, sp))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (y) => s.value = y),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: w[1] || (w[1] = (y) => f(s.value))
        }, null, 40, rp), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", ip, [
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, j(u.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(y)
        }, c(y), 9, dp))), 128))
      ])) : $("", !0),
      d.value ? (t(), n("p", up, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), fp = 4.5, xa = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Xa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function Vt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Kt(e) {
  const [l, a, r] = Xa(e);
  return 0.2126 * Vt(l) + 0.7152 * Vt(a) + 0.0722 * Vt(r);
}
function Qa(e, l) {
  const a = Kt(e), r = Kt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function mp(e, l, a) {
  if (!xa.test(e) || !xa.test(l))
    return e;
  const r = Kt(l) > 0.5, s = r ? 0 : 255;
  let i = Xa(e);
  for (let d = 0; d <= 20; d++) {
    const u = pp(i);
    if (Qa(u, l) >= a)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function pp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const vp = { class: "flex flex-col gap-2" }, gp = { class: "flex items-center gap-2" }, hp = {
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
}, bp = ["value", "disabled", "aria-label"], yp = ["value", "disabled", "placeholder"], xp = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, kp = ["aria-label", "title", "onClick"], $p = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, wp = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkColourPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, i = x(() => typeof a.modelValue == "string" ? a.modelValue : ""), d = x(() => s.test(i.value));
    function u(y) {
      const C = y.trim();
      if (C === "")
        return "";
      const S = C.startsWith("#") ? C : `#${C}`;
      return s.test(S) ? S.toLowerCase() : C;
    }
    function f(y) {
      r("update:modelValue", u(y.target.value));
    }
    const g = x(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Qa(i.value, a.field.contrastBackground)), p = x(() => a.field.contrastMinRatio ?? fp), h = x(() => g.value !== null && g.value < p.value);
    function w() {
      a.field.contrastBackground && r(
        "update:modelValue",
        mp(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (y, C) => (t(), n("div", vp, [
      o("div", gp, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (S) => r("update:modelValue", S.target.value))
        }, null, 40, bp)) : (t(), n("span", hp)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, yp)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", xp, [
        (t(!0), n(z, null, j(e.field.presets, (S) => (t(), n("button", {
          key: S,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === S.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: S }),
          "aria-label": S,
          title: S,
          onClick: (M) => r("update:modelValue", S.toLowerCase())
        }, null, 14, kp))), 128))
      ])) : $("", !0),
      h.value ? (t(), n("p", $p, [
        o("span", null, " This fails contrast at " + c(g.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: w
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), Cp = ["aria-disabled"], Sp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null);
    let i = null, d = null, u = null;
    const f = x(() => {
      const w = a.modelValue?.[a.latKey], y = a.modelValue?.[a.lngKey];
      return typeof w == "number" && typeof y == "number" ? { lat: w, lng: y } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const w = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = w, i = w.map(s.value).setView([f.value.lat, f.value.lng], a.zoom), w.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), h(), a.pickable && !a.disabled && i.on("click", (y) => {
        r("update:modelValue", {
          [a.latKey]: Number(y.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(y.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const w of a.markers) {
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
      const w = a.modelValue?.[a.latKey], y = a.modelValue?.[a.lngKey];
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
      g();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => a.modelValue,
      () => h(),
      { deep: !0 }
    ), (w, y) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Cp));
  }
}), Mp = { class: "flex flex-col gap-2" }, Bp = { class: "text-muted-foreground text-xs font-normal" }, _p = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkMapField",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.modelValue && typeof a.modelValue == "object" ? a.modelValue : null), i = x(() => a.field.latKey ?? "lat"), d = x(() => a.field.lngKey ?? "lng");
    return (u, f) => (t(), n("div", Mp, [
      E(Sp, {
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
      o("p", Bp, [
        R(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          R(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), Ap = { class: "flex flex-col gap-2" }, Pp = ["width", "height"], zp = ["value", "disabled"], Op = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Lp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null), i = x(() => {
      if (a.field.from) {
        const f = a.values?.[a.field.from];
        return f == null ? "" : String(f);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = x(() => a.field.size ?? 160);
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
    }), (f, g) => (t(), n("div", Ap, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, Pp),
      e.field.from ? (t(), n("p", Op, "From " + c(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, zp))
    ]));
  }
}), Vp = { class: "flex flex-col gap-2" }, jp = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, Dp = ["aria-label"], Tp = {
  key: 0,
  class: "text-destructive text-xs"
}, Ep = ["value", "disabled"], Ip = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Fp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(null), i = U(null), d = x(() => {
      if (a.field.from) {
        const g = a.values?.[a.field.from];
        return g == null ? "" : String(g);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = x(() => (a.field.format ?? "CODE128").toUpperCase());
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
    return ve(() => {
      f();
    }), me([d, u], () => {
      f();
    }), (g, p) => (t(), n("div", Vp, [
      o("div", jp, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, Dp))
      ]),
      i.value ? (t(), n("p", Tp, c(i.value), 1)) : $("", !0),
      e.field.from ? (t(), n("p", Ip, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Ep))
    ]));
  }
}), Np = { class: "mr-2 inline-block w-3 opacity-60" }, Rp = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Up = /* @__PURE__ */ O({
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
    const r = x(() => {
      if (l.field.originalKey)
        return a(l.values?.[l.field.originalKey]);
      const d = l.modelValue;
      return a(d?.original);
    }), s = x(() => {
      if (l.field.modifiedKey)
        return a(l.values?.[l.field.modifiedKey]);
      const d = l.modelValue;
      return a(d?.modified);
    }), i = x(() => {
      const d = r.value.split(`
`), u = s.value.split(`
`), f = Math.max(d.length, u.length), g = [];
      for (let p = 0; p < f; p++) {
        const h = d[p], w = u[p];
        if (h === w) {
          h !== void 0 && g.push({ kind: "same", text: h });
          continue;
        }
        h !== void 0 && g.push({ kind: "del", text: h }), w !== void 0 && g.push({ kind: "add", text: w });
      }
      return g;
    });
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, j(i.value, (f, g) => (t(), n("div", {
        key: g,
        class: P(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", Np, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        R(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Rp, "No differences.")) : $("", !0)
    ], 4));
  }
}), Hp = { class: "flex flex-col gap-3" }, Kp = { class: "flex items-center justify-between gap-2" }, qp = { class: "text-sm font-medium" }, Gp = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Wp = { class: "grid grid-cols-7 gap-1" }, Zp = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Jp = ["title"], k8 = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = U(/* @__PURE__ */ new Date()), r = x(() => a.value.getFullYear()), s = x(() => a.value.getMonth()), i = x(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = x(() => {
      const p = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const w = p.get(h.date) ?? [];
        w.push(h), p.set(h.date, w);
      }
      return p;
    }), u = x(() => {
      const h = new Date(r.value, s.value, 1).getDay(), w = new Date(r.value, s.value + 1, 0).getDate(), y = [];
      for (let C = 0; C < h; C++)
        y.push({ day: null, key: `pad-${C}`, events: [] });
      for (let C = 1; C <= w; C++) {
        const S = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(C).padStart(2, "0")}`;
        y.push({ day: C, key: S, events: d.value.get(S) ?? [] });
      }
      return y;
    });
    function f() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, h) => (t(), n("div", Hp, [
      o("div", Kp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", qp, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", Gp, [
        (t(), n(z, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (w) => o("span", { key: w }, c(w), 1)), 64))
      ]),
      o("div", Wp, [
        (t(!0), n(z, null, j(u.value, (w) => (t(), n("div", {
          key: w.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", w.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          w.day ? (t(), n("p", Zp, c(w.day), 1)) : $("", !0),
          (t(!0), n(z, null, j(w.events.slice(0, 3), (y, C) => (t(), n("p", {
            key: `${w.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: y.label
          }, c(y.label), 9, Jp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Yp = { class: "flex items-center gap-3" }, Xp = ["min", "max", "step", "value", "disabled", "aria-label"], Qp = { class: "flex shrink-0 items-center gap-1" }, ev = ["min", "max", "step", "value", "disabled"], tv = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, av = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkSlider",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.field.min ?? 0), i = x(() => a.field.max ?? 100), d = x(() => a.field.step ?? 1), u = x(() => {
      const p = Number(a.modelValue);
      return Number.isFinite(p) ? p : s.value;
    }), f = x(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function g(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(p);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (p, h) => (t(), n("div", Yp, [
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
      }, null, 40, Xp),
      o("div", Qp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (w) => g(w.target.value))
        }, null, 40, ev),
        e.field.unit ? (t(), n("span", tv, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), mt = /* @__PURE__ */ new Map();
function jt(e, l) {
  mt.set(e, l);
}
function nv(e) {
  return mt.get(e);
}
function $8(e) {
  return mt.has(e);
}
function lv() {
  return [...mt.keys()].sort();
}
function w8() {
  mt.clear();
}
const ov = ["name", "value", "checked", "disabled", "onChange"], sv = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, rv = { class: "whitespace-nowrap" }, iv = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, dv = ["name", "value", "checked", "disabled", "onChange"], uv = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, cv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, fv = { class: "text-center text-xs font-medium" }, mv = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, pv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, vv = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(
      () => a.field.preview ? nv(a.field.preview) : void 0
    ), i = x(() => !!a.field.preview && !s.value), d = x(() => a.field.layout === "segmented"), u = x(() => {
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
    function f(g) {
      return a.modelValue != null && g.value == a.modelValue;
    }
    return (g, p) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, j(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: P(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
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
        }, null, 40, ov),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", sv, [
          (t(), D(Me(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", rv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", iv, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, j(e.options, (h) => (t(), n("label", {
        key: String(h.value),
        class: P(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
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
        }, null, 40, dv),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", uv, [
          s.value ? (t(), D(Me(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", cv, " no preview ")) : $("", !0)
        ]),
        o("span", fv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", mv, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", pv, [
        p[2] || (p[2] = R(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        R(". Registered: " + c(k(lv)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), gv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, hv = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", gv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), bv = { class: "flex flex-col items-center gap-1 text-center" }, yv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, en = /* @__PURE__ */ O({
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
    const l = e, a = x(() => l.mono ? "#000000" : l.accent), r = x(() => {
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
    return (s, i) => (t(), n("div", bv, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", yv, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), xv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, kv = { class: "flex items-center gap-3" }, $v = ["src"], wv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Cv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, Sv = {
  key: 0,
  class: "text-right text-sm"
}, Mv = { class: "text-neutral-500" }, Bv = { class: "tabular-nums" }, _v = { key: 1 }, Av = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Pv = { class: "mt-2 font-medium" }, zv = { key: 2 }, Ov = { class: "w-full text-sm" }, Lv = { class: "w-full py-3 pr-2" }, Vv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, jv = { key: 0 }, Dv = ["colspan"], Tv = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Ev = { class: "w-64 text-sm" }, Iv = { class: "tabular-nums" }, Fv = {
  key: 3,
  class: "py-2"
}, Nv = { key: 4 }, Rv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Uv = { class: "mt-2 flex flex-col gap-1 text-sm" }, Hv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Kv = { key: 0 }, qv = {
  key: 1,
  class: "mt-1"
}, Gv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Wv = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("article", xv, [
      o("div", kv, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, $v)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, j(e.document.blocks, (p, h) => (t(), n(z, { key: h }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: a() })
            }, c(p.title), 5),
            p.subtitle ? (t(), n("p", wv, c(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), n("p", Cv, c(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), n("dl", Sv, [
            (t(!0), n(z, null, j(r(p), (w, y) => (t(), n("div", {
              key: y,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", Mv, c(w.label), 1),
              o("dd", Bv, c(w.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", _v, [
          o("h2", Av, c(p.heading), 1),
          o("p", Pv, c(p.name), 1),
          (t(!0), n(z, null, j(d(p.lines), (w, y) => (t(), n("p", {
            key: y,
            class: "text-sm text-neutral-600"
          }, c(w), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", zv, [
          o("table", Ov, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, j(d(p.columns), (w, y) => (t(), n("th", {
                  key: y,
                  class: P(["pb-2 font-medium", y > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(w), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, j(s(p), (w, y) => (t(), n("tr", {
                key: y,
                class: "border-b border-neutral-200"
              }, [
                o("td", Lv, [
                  o("p", null, c(w.description), 1),
                  w.detail ? (t(), n("p", Vv, c(w.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, j(w.cells, (C, S) => (t(), n("td", {
                  key: S,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", jv, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, Dv)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", Tv, [
            o("dl", Ev, [
              (t(!0), n(z, null, j(i(p), (w, y) => (t(), n("div", {
                key: y,
                class: P([
                  "flex justify-between py-1",
                  w.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(w.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: P(w.strong ? "" : "text-neutral-600")
                }, c(w.label), 3),
                o("dd", Iv, c(w.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), n("section", Fv, [
          E(en, {
            code: u(p.code),
            caption: u(p.caption),
            style: se(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Nv, [
          o("h2", Rv, c(p.heading), 1),
          o("ol", Uv, [
            (t(!0), n(z, null, j(d(p.items), (w, y) => (t(), n("li", {
              key: y,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, c(y + 1) + ".", 5),
              o("span", null, c(w), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: P(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: a() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Hv, [
          p.text ? (t(), n("p", Kv, c(p.text), 1)) : $("", !0),
          d(p.contacts).length ? (t(), n("p", qv, c(d(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", Gv, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Zv = ["aria-label", "title"], Jv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Yv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, C8 = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ga(), r = x(() => l.value.theme === "dark");
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
      (t(), n("svg", Jv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Yv))
      ]))
    ], 8, Zv));
  }
}), Xv = ["width", "height"], Qv = { key: 0 }, eg = ["x1", "x2", "y1", "y2"], tg = ["x", "y"], ag = ["x1", "x2", "y1", "y2"], ng = ["x", "y"], lg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], og = ["x", "y", "width", "height", "fill", "fill-opacity"], sg = ["x", "y"], rg = ["x", "y"], ig = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, dg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, ug = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, cg = { class: "text-xs font-semibold tabular-nums" }, fg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, mg = { class: "text-muted-foreground" }, ka = 5.6, S8 = /* @__PURE__ */ O({
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
    function r(B) {
      return a[B] ?? B;
    }
    function s(B, F) {
      if (!l.thresholds?.length)
        return F;
      const V = l.thresholds.find((X) => B < X.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = U(null), d = U(560), u = U(null);
    let f = null;
    ve(() => {
      f = new ResizeObserver((B) => {
        d.value = Math.max(160, B[0].contentRect.width);
      }), i.value && f.observe(i.value);
    }), ke(() => f?.disconnect());
    const g = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? g[V % g.length]
    }))), h = x(() => p.value[0]?.points.map((B) => B.label) ?? []), w = x(() => h.value.length), y = x(() => l.orientation === "horizontal"), C = x(() => Math.max(0, ...h.value.map((B) => B.length))), S = x(() => {
      if (!y.value)
        return l.showAxis ? 44 : 8;
      const B = C.value * ka + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), M = x(() => Math.max(4, Math.floor((S.value - 16) / ka)));
    function _(B) {
      return B.length <= M.value ? B : `${B.slice(0, M.value - 1)}…`;
    }
    const m = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: S.value
    })), v = x(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), b = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const I = x(() => {
      const B = h.value.map(
        (ge, ye) => l.stacked ? p.value.reduce((oe, Q) => oe + Math.max(0, Q.points[ye]?.value ?? 0), 0) : Math.max(...p.value.map((oe) => oe.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }), T = x(
      () => (y.value ? v.value.h : v.value.w) / Math.max(1, w.value)
    ), te = x(() => T.value * 0.68), H = x(
      () => l.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), Z = x(() => {
      const B = [], F = new Array(w.value).fill(0);
      return p.value.forEach((V, X) => {
        V.points.forEach((ge, ye) => {
          const Q = Math.max(0, ge.value) / I.value * (y.value ? v.value.w : v.value.h), ne = (y.value ? m.value.top : m.value.left) + ye * T.value + (T.value - te.value) / 2, Ce = l.stacked ? 0 : X * H.value;
          B.push(
            y.value ? {
              x: m.value.left + F[ye],
              y: ne + Ce,
              w: Q,
              h: Math.max(0, H.value - 2),
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: ye
            } : {
              x: ne + Ce,
              y: m.value.top + v.value.h - Q - F[ye],
              w: Math.max(0, H.value - 2),
              h: Q,
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: ye
            }
          ), l.stacked && (F[ye] += Q);
        });
      }), B;
    }), N = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: I.value * (y.value ? B : 1 - B),
        x: m.value.left + v.value.w * B,
        y: m.value.top + v.value.h * B
      }))
    ), W = x(() => Math.max(1, Math.ceil(w.value / (y.value ? 14 : 10))));
    function J(B) {
      return B === w.value - 1 || B % W.value === 0;
    }
    function G(B) {
      return (y.value ? m.value.top : m.value.left) + B * T.value + T.value / 2;
    }
    const q = x(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: p.value.map((B) => ({
        name: B.name,
        color: B.color,
        value: B.points[u.value]?.value ?? 0
      }))
    });
    return (B, F) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      w.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: F[0] || (F[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", Qv, [
            y.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, j(N.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: m.value.top,
                y2: m.value.top + v.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, eg))), 128)),
              (t(!0), n(z, null, j(N.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(V.value)), 9, tg))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, j(N.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, ag))), 128)),
              (t(!0), n(z, null, j(N.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: m.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(V.value)), 9, ng))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, j(h.value, (V, X) => (t(), n("rect", {
            key: `hit-${X}`,
            x: y.value ? m.value.left : m.value.left + X * T.value,
            y: y.value ? m.value.top + X * T.value : m.value.top,
            width: y.value ? v.value.w : T.value,
            height: y.value ? T.value : v.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === X ? 0.4 : 0,
            onMouseenter: (ge) => u.value = X
          }, null, 40, lg))), 128)),
          (t(!0), n(z, null, j(Z.value, (V, X) => (t(), n("rect", {
            key: `b-${X}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": u.value === null || u.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, og))), 128)),
          y.value ? (t(!0), n(z, { key: 1 }, j(h.value, (V, X) => pe((t(), n("text", {
            key: `c-${X}`,
            x: m.value.left - 8,
            y: G(X) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            R(c(_(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, sg)), [
            [Ue, J(X)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, j(h.value, (V, X) => pe((t(), n("text", {
            key: `c-${X}`,
            x: G(X),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, rg)), [
            [Ue, J(X)]
          ])), 128))
        ], 40, Xv)),
        q.value ? (t(), n("div", ig, [
          o("p", dg, c(q.value.label), 1),
          (t(!0), n(z, null, j(q.value.rows, (V, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", ug, c(V.name || "Value"), 1),
            o("span", cg, c(b(V.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", fg, [
          (t(!0), n(z, null, j(p.value, (V, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", mg, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), pg = ["width", "height"], vg = ["id"], gg = ["stop-color"], hg = ["stop-color"], bg = { key: 0 }, yg = ["x1", "x2", "y1", "y2"], xg = ["x", "y"], kg = ["x", "y"], $g = ["x1", "x2", "y1", "y2"], wg = ["d", "fill"], Cg = ["d", "stroke", "stroke-dasharray"], Sg = ["cx", "cy", "fill"], Mg = { key: 1 }, Bg = ["x1", "x2", "y1", "y2"], _g = ["cx", "cy", "fill"], Ag = ["x", "y"], Pg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, zg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Og = { class: "text-xs font-semibold tabular-nums" }, Lg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Vg = { class: "text-muted-foreground" }, jg = /* @__PURE__ */ O({
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
    const l = e, a = x(() => g.value.some((B) => B.axis === "right")), r = U(null), s = U(560), i = U(null);
    let d = null;
    ve(() => {
      d = new ResizeObserver((B) => {
        s.value = Math.max(160, B[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], f = Math.random().toString(36).slice(2, 9), g = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? u[V % u.length]
    }))), p = x(() => g.value[0]?.points.map((B) => B.label) ?? []), h = x(() => p.value.length), w = x(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), y = (B) => l.format ? l.format(B) : C(B);
    function C(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    function S(B) {
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }
    const M = x(
      () => S(
        g.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), _ = x(
      () => S(
        g.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), m = x(() => ({
      w: Math.max(1, s.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function v(B) {
      return w.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * m.value.w);
    }
    function b(B, F = "left") {
      const V = F === "right" ? _.value : M.value;
      return w.value.top + m.value.h - B / V * m.value.h;
    }
    const A = x(
      () => g.value.map((B) => {
        const F = B.points.map((X, ge) => ({
          ...X,
          x: v(ge),
          y: b(X.value, B.axis ?? "left")
        })), V = B.stepped ? I(F) : T(F);
        return { ...B, pts: F, line: V, area: te(V, F) };
      })
    );
    function I(B) {
      if (B.length === 0)
        return "";
      let F = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let V = 1; V < B.length; V++)
        F += ` L${B[V].x.toFixed(2)},${B[V - 1].y.toFixed(2)} L${B[V].x.toFixed(2)},${B[V].y.toFixed(2)}`;
      return F;
    }
    function T(B) {
      const F = B.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${B[0].x},${B[0].y}`;
      const V = [], X = [];
      for (let oe = 0; oe < F - 1; oe++)
        V[oe] = B[oe + 1].x - B[oe].x, X[oe] = V[oe] === 0 ? 0 : (B[oe + 1].y - B[oe].y) / V[oe];
      const ge = [X[0]];
      for (let oe = 1; oe < F - 1; oe++)
        if (X[oe - 1] * X[oe] <= 0)
          ge[oe] = 0;
        else {
          const Q = 2 * V[oe] + V[oe - 1], ne = V[oe] + 2 * V[oe - 1];
          ge[oe] = (Q + ne) / (Q / X[oe - 1] + ne / X[oe]);
        }
      ge[F - 1] = X[F - 2];
      let ye = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let oe = 0; oe < F - 1; oe++) {
        const Q = V[oe] / 3;
        ye += ` C${(B[oe].x + Q).toFixed(2)},${(B[oe].y + ge[oe] * Q).toFixed(2)} ${(B[oe + 1].x - Q).toFixed(2)},${(B[oe + 1].y - ge[oe + 1] * Q).toFixed(2)} ${B[oe + 1].x.toFixed(2)},${B[oe + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function te(B, F) {
      if (F.length === 0)
        return "";
      const V = w.value.top + m.value.h;
      return `${B} L${F[F.length - 1].x.toFixed(2)},${V} L${F[0].x.toFixed(2)},${V} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + m.value.h * B,
        value: M.value * (1 - B)
      }))
    ), Z = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + m.value.h * B,
        value: _.value * (1 - B)
      }))
    ), N = x(() => Math.max(1, Math.ceil(h.value / 8)));
    function W(B) {
      return B === h.value - 1 || B % N.value === 0;
    }
    function J(B) {
      const F = B.currentTarget.getBoundingClientRect(), V = B.clientX - F.left - w.value.left, X = h.value <= 1 ? 1 : m.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(V / X)));
    }
    const G = x(() => {
      if (i.value === null || h.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: v(B),
        label: p.value[B],
        rows: A.value.map((F) => ({
          name: F.name,
          color: F.color,
          value: F.points[B]?.value ?? 0,
          y: F.pts[B]?.y ?? 0
        }))
      };
    }), q = x(() => {
      if (!G.value)
        return {};
      const B = G.value.x > s.value * 0.6;
      return {
        left: `${G.value.x}px`,
        top: "8px",
        transform: B ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (B, F) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: J,
          onMouseleave: F[0] || (F[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, j(A.value, (V, X) => (t(), n("linearGradient", {
              id: `pk-fill-${k(f)}-${X}`,
              key: X,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, gg),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, hg)
            ], 8, vg))), 128))
          ]),
          e.showAxis ? (t(), n("g", bg, [
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: w.value.left,
              x2: s.value - w.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, yg))), 128)),
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: w.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, xg))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, j(Z.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - w.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(V.value)), 9, kg))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, j(p.value, (V, X) => pe((t(), n("line", {
            key: `v-${X}`,
            x1: v(X),
            x2: v(X),
            y1: w.value.top,
            y2: w.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, $g)), [
            [Ue, W(X)]
          ])), 128)),
          (t(!0), n(z, null, j(A.value, (V, X) => (t(), n("g", {
            key: `s-${X}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${k(f)}-${X})`
            }, null, 8, wg)) : $("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Cg),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, Sg)) : $("", !0)
          ]))), 128)),
          G.value ? (t(), n("g", Mg, [
            o("line", {
              x1: G.value.x,
              x2: G.value.x,
              y1: w.value.top,
              y2: w.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, Bg),
            (t(!0), n(z, null, j(G.value.rows, (V, X) => (t(), n("circle", {
              key: `d-${X}`,
              cx: G.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, _g))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, j(p.value, (V, X) => pe((t(), n("text", {
            key: `x-${X}`,
            x: v(X),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, Ag)), [
            [Ue, W(X)]
          ])), 128))
        ], 40, pg)),
        G.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", Pg, c(G.value.label), 1),
          (t(!0), n(z, null, j(G.value.rows, (V, X) => (t(), n("div", {
            key: X,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", zg, c(V.name || "Value"), 1),
            o("span", Og, c(y(V.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", Lg, [
          (t(!0), n(z, null, j(A.value, (V, X) => (t(), n("span", {
            key: X,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Vg, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Dg = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Tg = { class: "text-muted-foreground text-[11px] capitalize" }, Eg = { class: "text-sm font-semibold tabular-nums" }, Ig = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, pt = /* @__PURE__ */ O({
  __name: "ChartTooltip",
  props: {
    label: {},
    value: {},
    share: { default: null }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Dg, [
      o("p", Tg, c(e.label), 1),
      o("p", Eg, [
        R(c(e.value) + " ", 1),
        e.share ? (t(), n("span", Ig, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), Fg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Ng = ["width", "height", "viewBox", "aria-label"], Rg = ["d", "fill", "fill-opacity", "onMouseenter"], Ug = ["x", "y"], Hg = ["x", "y"], Kg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, qg = ["onMouseenter"], Gg = { class: "min-w-0 flex-1 truncate capitalize" }, Wg = { class: "tabular-nums font-medium" }, Zg = { class: "text-muted-foreground w-9 text-right tabular-nums" }, M8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((M, _) => M + _.value, 0)), s = U(null), i = x(() => l.height), d = x(() => i.value / 2 - 4), u = x(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(M) {
      return a[M % a.length];
    }
    function g(M) {
      return 1 - Math.min(0.55, Math.floor(M / a.length) * 0.28);
    }
    const p = x(() => {
      if (r.value <= 0)
        return [];
      const M = i.value / 2;
      let _ = -Math.PI / 2;
      return l.data.map((m, v) => {
        const b = m.value / r.value, A = b * Math.PI * 2, I = _, T = _ + A;
        return _ = T, {
          ...m,
          share: b,
          colour: f(v),
          opacity: g(v),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: b >= 0.9999 ? y(M) : w(M, I, T, d.value, u.value)
        };
      });
    });
    function h(M, _, m) {
      return `${(M + Math.cos(_) * m).toFixed(2)},${(M + Math.sin(_) * m).toFixed(2)}`;
    }
    function w(M, _, m, v, b) {
      const A = m - _ > Math.PI ? 1 : 0;
      return b <= 0 ? `M${M},${M} L${h(M, _, v)} A${v},${v} 0 ${A} 1 ${h(M, m, v)} Z` : [
        `M${h(M, _, v)}`,
        `A${v},${v} 0 ${A} 1 ${h(M, m, v)}`,
        `L${h(M, m, b)}`,
        `A${b},${b} 0 ${A} 0 ${h(M, _, b)}`,
        "Z"
      ].join(" ");
    }
    function y(M) {
      const _ = d.value, m = u.value, v = [
        `M${M - _},${M}`,
        `A${_},${_} 0 1 1 ${M + _},${M}`,
        `A${_},${_} 0 1 1 ${M - _},${M}`,
        "Z"
      ];
      return m <= 0 ? v.join(" ") : [
        ...v,
        `M${M - m},${M}`,
        `A${m},${m} 0 1 0 ${M + m},${M}`,
        `A${m},${m} 0 1 0 ${M - m},${M}`,
        "Z"
      ].join(" ");
    }
    const C = (M) => l.format ? l.format(M) : new Intl.NumberFormat().format(M), S = (M) => `${(M * 100).toFixed(M < 0.01 ? 2 : 0)}%`;
    return (M, _) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Fg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), n(z, null, j(p.value, (m, v) => (t(), n("path", {
          key: v,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === v ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (b) => s.value = v,
          onMouseleave: _[0] || (_[0] = (b) => s.value = null)
        }, null, 40, Rg))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : p.value[s.value].value)), 9, Ug),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, Hg)
        ], 64)) : $("", !0)
      ], 8, Ng)),
      o("ul", Kg, [
        (t(!0), n(z, null, j(p.value, (m, v) => (t(), n("li", {
          key: v,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === v ? "bg-muted" : ""]),
          onMouseenter: (b) => s.value = v,
          onMouseleave: _[1] || (_[1] = (b) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Gg, c(m.label), 1),
          o("span", Wg, c(C(m.value)), 1),
          o("span", Zg, c(S(m.share)), 1)
        ], 42, qg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), D(pt, {
        key: 0,
        label: p.value[s.value].label,
        value: C(p.value[s.value].value),
        share: S(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Jg = ["width", "height", "viewBox", "aria-label"], Yg = { class: "text-border" }, Xg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Qg = { class: "fill-muted-foreground text-[10px]" }, eh = ["x", "y"], th = ["x", "y"], ah = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], nh = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, B8 = /* @__PURE__ */ O({
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
    ], r = U(null), s = U(560), i = U(null);
    let d = null;
    ve(() => {
      d = new ResizeObserver((N) => {
        const W = N[0]?.contentRect.width ?? 0;
        W > 0 && (s.value = W);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (N, W) => W.color ?? a[N % a.length], g = x(() => u.value.flatMap((N) => N.points)), p = x(() => g.value.some((N) => typeof N.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, w = x(() => Math.max(10, s.value - h.left - h.right)), y = x(() => Math.max(10, l.height - h.top - h.bottom));
    function C(N) {
      if (N.length === 0)
        return [0, 1];
      const W = Math.min(...N), J = Math.max(...N), G = J - W || Math.abs(J) || 1;
      return [W - G * 0.08, J + G * 0.08];
    }
    const S = x(() => C(g.value.map((N) => N.x))), M = x(() => C(g.value.map((N) => N.y))), _ = (N) => {
      const [W, J] = S.value;
      return h.left + (N - W) / (J - W) * w.value;
    }, m = (N) => {
      const [W, J] = M.value;
      return h.top + y.value - (N - W) / (J - W) * y.value;
    }, v = x(() => Math.max(...g.value.map((N) => N.r ?? 0), 0));
    function b(N) {
      if (!p.value || !v.value)
        return 4;
      const W = Math.max(0, N.r ?? 0) / v.value;
      return 3 + Math.sqrt(W) * (l.maxRadius - 3);
    }
    function A([N, W]) {
      return Array.from({ length: 5 }, (J, G) => N + (W - N) / 4 * G);
    }
    const I = x(() => A(S.value)), T = x(() => A(M.value)), te = (N) => l.formatX?.(N) ?? String(Math.round(N * 100) / 100), H = (N) => l.formatY?.(N) ?? String(Math.round(N * 100) / 100), Z = x(() => {
      if (!i.value)
        return null;
      const N = u.value[i.value.s], W = N?.points[i.value.p];
      return W ? { series: N, point: W } : null;
    });
    return (N, W) => (t(), n("div", {
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
        o("g", Yg, [
          (t(!0), n(z, null, j(T.value, (J, G) => (t(), n("line", {
            key: `gy-${G}`,
            x1: h.left,
            x2: h.left + w.value,
            y1: m(J),
            y2: m(J),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": G === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Xg))), 128))
        ]),
        o("g", Qg, [
          (t(!0), n(z, null, j(T.value, (J, G) => (t(), n("text", {
            key: `ty-${G}`,
            x: h.left - 8,
            y: m(J) + 3,
            "text-anchor": "end"
          }, c(H(J)), 9, eh))), 128)),
          (t(!0), n(z, null, j(I.value, (J, G) => (t(), n("text", {
            key: `tx-${G}`,
            x: _(J),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(te(J)), 9, th))), 128))
        ]),
        (t(!0), n(z, null, j(u.value, (J, G) => (t(), n("g", {
          key: `s-${G}`
        }, [
          (t(!0), n(z, null, j(J.points, (q, B) => (t(), n("circle", {
            key: `p-${G}-${B}`,
            cx: _(q.x),
            cy: m(q.y),
            r: b(q),
            fill: f(G, J),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(G, J),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== G || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: G, p: B },
            onMouseleave: W[0] || (W[0] = (F) => i.value = null)
          }, null, 40, ah))), 128))
        ]))), 128))
      ], 8, Jg)),
      Z.value ? (t(), D(pt, {
        key: 0,
        label: Z.value.point.label ?? Z.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(Z.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(Z.value.point.y)}`,
        share: p.value && Z.value.point.r != null ? String(Z.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", nh, [
        (t(!0), n(z, null, j(u.value, (J, G) => (t(), n("span", {
          key: `l-${G}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: f(G, J) }),
            "aria-hidden": "true"
          }, null, 4),
          R(" " + c(J.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), lh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, oh = ["width", "height", "viewBox"], sh = ["points"], rh = ["x1", "y1", "x2", "y2"], ih = ["points", "fill", "stroke"], dh = ["cx", "cy", "fill", "onMouseenter"], uh = ["x", "y", "text-anchor"], ch = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, fh = { class: "truncate" }, _8 = /* @__PURE__ */ O({
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
    ], r = x(
      () => l.series.map((m, v) => ({
        ...m,
        color: m.color ?? a[v % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((m) => m.label) ?? []), i = x(() => s.value.length), d = x(() => l.height), u = x(() => d.value / 2), f = x(() => d.value / 2 - 34), g = x(() => {
      const m = Math.max(...r.value.flatMap((A) => A.points.map((I) => I.value)), 0);
      if (m <= 0)
        return 1;
      const v = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((A) => m <= A * v) ?? 10) * v;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(m, v) {
      const b = p(m);
      return {
        x: u.value + Math.cos(b) * f.value * v,
        y: u.value + Math.sin(b) * f.value * v
      };
    }
    function w(m) {
      return Array.from({ length: i.value }, (v, b) => {
        const A = h(b, m);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const y = x(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: w(m) }))), C = x(
      () => r.value.map((m) => {
        const v = m.points.map((b) => Math.max(0, b.value) / g.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: v.map((b, A) => {
            const I = h(A, b);
            return `${I.x.toFixed(2)},${I.y.toFixed(2)}`;
          }).join(" "),
          dots: v.map((b, A) => h(A, b))
        };
      })
    ), S = x(
      () => s.value.map((m, v) => {
        const b = p(v), A = u.value + Math.cos(b) * (f.value + 14), I = u.value + Math.sin(b) * (f.value + 14), T = Math.cos(b);
        return {
          label: m,
          x: A,
          y: I + 3,
          anchor: Math.abs(T) < 0.2 ? "middle" : T > 0 ? "start" : "end"
        };
      })
    ), M = U(null), _ = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, v) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", lh, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(y.value, (b) => (t(), n("polygon", {
          key: b.f,
          points: b.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, sh))), 128)),
        (t(!0), n(z, null, j(s.value, (b, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, rh))), 128)),
        (t(!0), n(z, null, j(C.value, (b, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: b.outline,
            fill: b.color,
            "fill-opacity": "0.16",
            stroke: b.color,
            "stroke-width": "2"
          }, null, 8, ih),
          (t(!0), n(z, null, j(b.dots, (I, T) => (t(), n("circle", {
            key: T,
            cx: I.x,
            cy: I.y,
            r: "3",
            fill: b.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => M.value = {
              series: b.name,
              axis: s.value[T],
              value: b.values[T]?.value ?? 0
            },
            onMouseleave: v[0] || (v[0] = (te) => M.value = null)
          }, null, 40, dh))), 128))
        ]))), 128)),
        (t(!0), n(z, null, j(S.value, (b, A) => (t(), n("text", {
          key: `l-${A}`,
          x: b.x,
          y: b.y,
          "text-anchor": b.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(b.label), 9, uh))), 128))
      ], 8, oh)),
      e.showLegend ? (t(), n("ul", ch, [
        (t(!0), n(z, null, j(r.value, (b, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: b.color })
          }, null, 4),
          o("span", fh, c(b.name), 1)
        ]))), 128))
      ])) : $("", !0),
      M.value ? (t(), D(pt, {
        key: 1,
        label: `${M.value.series} — ${M.value.axis}`,
        value: _(M.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), mh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, ph = ["width", "height", "viewBox"], vh = ["cx", "cy", "r"], gh = ["d", "fill", "fill-opacity", "onMouseenter"], hh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, bh = { class: "min-w-0 flex-1 truncate capitalize" }, yh = { class: "font-medium tabular-nums" }, A8 = /* @__PURE__ */ O({
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
    ], r = U(null), s = x(() => l.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...l.data.map((w) => Math.max(0, w.value)), 0)), f = x(() => {
      const w = l.data.length;
      if (w === 0 || u.value <= 0)
        return [];
      const y = Math.PI * 2 / w;
      return l.data.map((C, S) => {
        const M = Math.sqrt(Math.max(0, C.value) / u.value), _ = d.value * M, m = S * y - Math.PI / 2, v = m + y;
        return {
          ...C,
          color: a[S % a.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: g(i.value, m, v, _)
        };
      });
    });
    function g(w, y, C, S) {
      if (S <= 0)
        return "";
      if (C - y >= Math.PI * 2 - 1e-6)
        return `M${w - S},${w} A${S},${S} 0 1 1 ${w + S},${w} A${S},${S} 0 1 1 ${w - S},${w} Z`;
      const M = C - y > Math.PI ? 1 : 0, _ = w + Math.cos(y) * S, m = w + Math.sin(y) * S, v = w + Math.cos(C) * S, b = w + Math.sin(C) * S;
      return `M${w},${w} L${_.toFixed(2)},${m.toFixed(2)} A${S.toFixed(2)},${S.toFixed(2)} 0 ${M} 1 ${v.toFixed(2)},${b.toFixed(2)} Z`;
    }
    const p = x(() => [0.5, 0.75, 1].map((w) => d.value * w)), h = (w) => l.format ? l.format(w) : new Intl.NumberFormat().format(w);
    return (w, y) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", mh, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(p.value, (C) => (t(), n("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, vh))), 128)),
        (t(!0), n(z, null, j(f.value, (C, S) => (t(), n("path", {
          key: S,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === S ? 0.75 : 0.3,
          onMouseenter: (M) => r.value = S,
          onMouseleave: y[0] || (y[0] = (M) => r.value = null)
        }, null, 40, gh))), 128))
      ], 8, ph)),
      e.showLegend ? (t(), n("ul", hh, [
        (t(!0), n(z, null, j(f.value, (C, S) => (t(), n("li", {
          key: S,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", bh, c(C.label), 1),
          o("span", yh, c(h(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), D(pt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), xh = ["width", "height"], kh = ["x1", "x2", "y1", "y2"], $h = ["x", "y"], wh = ["x", "y"], Ch = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Sh = ["x", "y", "width", "height", "fill", "fill-opacity"], Mh = ["d", "stroke"], Bh = ["cx", "cy", "fill"], _h = ["x", "y"], Ah = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, Ph = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, zh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Oh = { class: "text-xs font-semibold tabular-nums" }, Lh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Vh = { class: "text-muted-foreground" }, P8 = /* @__PURE__ */ O({
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
    const l = e, a = U(null), r = U(560), s = U(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((G) => {
        r.value = Math.max(160, G[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = x(
      () => l.bars.map((G, q) => ({
        ...G,
        color: G.color ?? d[q % d.length]
      }))
    ), g = x(
      () => l.lines.map((G, q) => ({
        ...G,
        color: G.color ?? u[q % u.length]
      }))
    ), p = x(
      () => f.value[0]?.points.map((G) => G.label) ?? g.value[0]?.points.map((G) => G.label) ?? []
    ), h = x(() => p.value.length), w = x(() => l.lineAxis === "right"), y = x(() => ({
      top: 12,
      right: w.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = x(() => ({
      w: Math.max(1, r.value - y.value.left - y.value.right),
      h: Math.max(1, l.height - y.value.top - y.value.bottom)
    }));
    function S(G) {
      const q = Math.max(...G, 0);
      if (q <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(q));
      return ([1, 2, 2.5, 5, 10].find((V) => q <= V * B) ?? 10) * B;
    }
    const M = x(
      () => S([
        ...f.value.flatMap((G) => G.points.map((q) => q.value)),
        ...w.value ? [] : g.value.flatMap((G) => G.points.map((q) => q.value))
      ])
    ), _ = x(
      () => w.value ? S(g.value.flatMap((G) => G.points.map((q) => q.value))) : M.value
    ), m = x(() => C.value.w / Math.max(1, h.value)), v = x(() => m.value * 0.6), b = x(() => v.value / Math.max(1, f.value.length));
    function A(G) {
      return y.value.left + G * m.value + m.value / 2;
    }
    const I = x(
      () => f.value.flatMap(
        (G, q) => G.points.map((B, F) => {
          const V = Math.max(0, B.value) / M.value * C.value.h;
          return {
            x: A(F) - v.value / 2 + q * b.value,
            y: y.value.top + C.value.h - V,
            w: Math.max(0, b.value - 2),
            h: V,
            color: G.color,
            index: F,
            name: G.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), T = x(
      () => g.value.map((G) => {
        const q = G.points.map((B, F) => ({
          x: A(F),
          y: y.value.top + C.value.h - Math.max(0, B.value) / _.value * C.value.h,
          value: B.value
        }));
        return {
          ...G,
          pts: q,
          d: q.map((B, F) => `${F === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((G) => ({
        y: y.value.top + C.value.h * G,
        left: M.value * (1 - G),
        right: _.value * (1 - G)
      }))
    ), H = x(() => Math.max(1, Math.ceil(h.value / 10)));
    function Z(G) {
      return G === h.value - 1 || G % H.value === 0;
    }
    const N = (G) => l.format ? l.format(G) : W(G);
    function W(G) {
      return Math.abs(G) >= 1e6 ? `${(G / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(G) >= 1e3 ? `${(G / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(G * 100) / 100);
    }
    const J = x(() => {
      if (s.value === null)
        return null;
      const G = s.value;
      return {
        label: p.value[G],
        rows: [
          ...f.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[G]?.value ?? 0
          })),
          ...g.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[G]?.value ?? 0
          }))
        ]
      };
    });
    return (G, q) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: q[0] || (q[0] = (B) => s.value = null)
        }, [
          (t(!0), n(z, null, j(te.value, (B) => (t(), n("line", {
            key: `g-${B.y}`,
            x1: y.value.left,
            x2: r.value - y.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, kh))), 128)),
          (t(!0), n(z, null, j(te.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: y.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(B.left)), 9, $h))), 128)),
          w.value ? (t(!0), n(z, { key: 0 }, j(te.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - y.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(W(B.right)), 9, wh))), 128)) : $("", !0),
          (t(!0), n(z, null, j(p.value, (B, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: y.value.left + F * m.value,
            y: y.value.top,
            width: m.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Ch))), 128)),
          (t(!0), n(z, null, j(I.value, (B, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, Sh))), 128)),
          (t(!0), n(z, null, j(T.value, (B, F) => (t(), n("g", {
            key: `l-${F}`
          }, [
            o("path", {
              d: B.d,
              fill: "none",
              stroke: B.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, Mh),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, Bh)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, j(p.value, (B, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: A(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(B), 9, _h)), [
            [Ue, Z(F)]
          ])), 128))
        ], 40, xh)),
        J.value ? (t(), n("div", Ah, [
          o("p", Ph, c(J.value.label), 1),
          (t(!0), n(z, null, j(J.value.rows, (B, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", zh, c(B.name), 1),
            o("span", Oh, c(N(B.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", Lh, [
          (t(!0), n(z, null, j([...f.value, ...g.value], (B, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", Vh, c(B.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), jh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, Dh = { class: "text-muted-foreground" }, Th = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Eh = ["width", "height"], Ih = ["x", "y"], Fh = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Nh = ["x", "y"], Rh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Uh = { class: "text-[11px] font-medium capitalize" }, Hh = { class: "text-muted-foreground text-[11px] capitalize" }, Kh = { class: "text-sm font-semibold tabular-nums" }, qh = { class: "text-muted-foreground text-xs font-normal" }, z8 = /* @__PURE__ */ O({
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
    const l = e, a = U(null), r = U(560), s = U(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((v) => {
        r.value = Math.max(160, v[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = x(() => l.series[0]?.points.map((v) => v.label) ?? []), u = x(() => l.series.length), f = x(() => d.value.length), g = x(() => Math.min(140, Math.max(60, r.value * 0.16))), p = x(() => Math.max(1, r.value - g.value - 8)), h = x(() => p.value / Math.max(1, f.value)), w = x(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function y(v) {
      if (v === 0)
        return "var(--muted)";
      const b = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(v / b * 100)}%, var(--muted))`;
    }
    function C(v) {
      for (let b = 0; b < l.buckets.length; b++) {
        const A = l.buckets[b].max;
        if (A === void 0 || v < A)
          return b;
      }
      return l.buckets.length - 1;
    }
    const S = x(
      () => l.series.flatMap(
        (v, b) => v.points.map((A, I) => {
          const T = C(A.value);
          return {
            row: b,
            col: I,
            x: g.value + I * h.value,
            y: 4 + b * w.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, w.value - 4),
            colour: y(T),
            label: A.label,
            value: A.value,
            rowName: v.name,
            bucketLabel: l.buckets[T].label
          };
        })
      )
    ), M = x(() => h.value < 2), _ = x(() => s.value ? S.value.find((v) => v.row === s.value.row && v.col === s.value.col) ?? null : null), m = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v);
    return (v, b) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", jh, [
          (t(!0), n(z, null, j(e.buckets, (A, I) => (t(), n("span", {
            key: I,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: y(I) })
            }, null, 4),
            o("span", Dh, c(A.label), 1)
          ]))), 128))
        ]),
        M.value ? (t(), n("p", Th, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: b[0] || (b[0] = (A) => s.value = null)
        }, [
          (t(!0), n(z, null, j(e.series, (A, I) => (t(), n("text", {
            key: `r-${I}`,
            x: g.value - 10,
            y: 4 + I * w.value + w.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(A.name), 9, Ih))), 128)),
          (t(!0), n(z, null, j(S.value, (A, I) => (t(), n("rect", {
            key: I,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (T) => s.value = { row: A.row, col: A.col }
          }, null, 40, Fh))), 128)),
          e.showColumnLabels && !M.value ? (t(!0), n(z, { key: 0 }, j(d.value, (A, I) => (t(), n("text", {
            key: `c-${I}`,
            x: g.value + I * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(A), 9, Nh))), 128)) : $("", !0)
        ], 40, Eh)),
        _.value ? (t(), n("div", Rh, [
          o("p", Uh, c(_.value.label), 1),
          o("p", Hh, c(_.value.rowName), 1),
          o("p", Kh, [
            R(c(m(_.value.value)) + " ", 1),
            o("span", qh, "(" + c(_.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Gh = ["viewBox"], Wh = { key: 0 }, Zh = ["id"], Jh = ["stop-color"], Yh = ["stop-color"], Xh = ["d", "fill"], Qh = ["d", "stroke"], $a = 100, lt = 30, Pt = /* @__PURE__ */ O({
  __name: "Sparkline",
  props: {
    data: {},
    height: { default: 32 },
    color: { default: "var(--primary)" },
    filled: { type: Boolean, default: !1 },
    smooth: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = Math.random().toString(36).slice(2, 9), r = x(() => {
      const u = l.data.map((h) => h.value);
      if (u.length < 2)
        return [];
      const f = Math.min(...u), p = Math.max(...u) - f || 1;
      return u.map((h, w) => ({
        x: w / (u.length - 1) * $a,
        y: lt - (h - f) / p * (lt - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const g = [], p = [];
      for (let y = 0; y < f - 1; y++)
        g[y] = u[y + 1].x - u[y].x, p[y] = g[y] === 0 ? 0 : (u[y + 1].y - u[y].y) / g[y];
      const h = [p[0]];
      for (let y = 1; y < f - 1; y++)
        if (p[y - 1] * p[y] <= 0)
          h[y] = 0;
        else {
          const C = 2 * g[y] + g[y - 1], S = g[y] + 2 * g[y - 1];
          h[y] = (C + S) / (C / p[y - 1] + S / p[y]);
        }
      h[f - 1] = p[f - 2];
      let w = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let y = 0; y < f - 1; y++) {
        const C = g[y] / 3;
        w += ` C${(u[y].x + C).toFixed(2)},${(u[y].y + h[y] * C).toFixed(2)} ${(u[y + 1].x - C).toFixed(2)},${(u[y + 1].y - h[y + 1] * C).toFixed(2)} ${u[y + 1].x.toFixed(2)},${u[y + 1].y.toFixed(2)}`;
      }
      return w;
    }
    const i = x(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((f, g) => `${g === 0 ? "M" : "L"}${f.x.toFixed(2)},${f.y.toFixed(2)}`).join(" ");
    }), d = x(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${lt} L${u[0].x.toFixed(2)},${lt} Z`;
    });
    return (u, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${$a} ${lt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Wh, [
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
          }, null, 8, Jh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Yh)
        ], 8, Zh)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(a)})`
      }, null, 8, Xh)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Qh)
    ], 12, Gh)) : $("", !0);
  }
}), eb = { class: "flex items-center gap-1 text-xs" }, tb = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, ab = {
  key: 0,
  class: "text-muted-foreground truncate"
}, tn = /* @__PURE__ */ O({
  __name: "TrendBadge",
  props: {
    direction: {},
    percentage: {},
    comparison: {},
    inverted: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = x(() => l.direction === "flat" ? null : l.direction === "new" ? !l.inverted : l.inverted ? l.direction === "down" : l.direction === "up"), r = x(
      () => a.value === null ? "text-muted-foreground" : a.value ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
    ), s = x(
      () => l.direction === "flat" ? "→" : l.direction === "down" ? "▼" : "▲"
    ), i = x(() => l.direction === "new" ? "New" : l.percentage === null ? "-" : `${Math.abs(l.percentage)}%`);
    return (d, u) => (t(), n("span", eb, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", tb, c(s.value), 1),
        R(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", ab, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), nb = ["data-collapsed"], lb = { class: "flex flex-wrap items-start justify-between gap-2" }, ob = { class: "flex min-w-0 items-start gap-2" }, sb = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, rb = ["d"], ib = { class: "min-w-0" }, db = { class: "text-sm font-medium" }, ub = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, cb = { class: "flex shrink-0 items-center gap-1.5" }, fb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, mb = ["aria-pressed", "onClick"], pb = ["aria-expanded", "aria-label", "title"], vb = ["aria-label"], gb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hb = ["d"], bb = /* @__PURE__ */ O({
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
    const l = e, a = qt(), r = U(l.defaultCollapsed), s = x(() => !!l.icon && !a.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", lb, [
        o("div", ob, [
          K(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", sb, [
              o("path", {
                d: k(ce)(e.icon)
              }, null, 8, rb)
            ])) : $("", !0)
          ]),
          o("div", ib, [
            o("p", db, c(e.label), 1),
            e.description ? (t(), n("p", ub, c(e.description), 1)) : $("", !0),
            K(d.$slots, "trend")
          ])
        ]),
        o("div", cb, [
          K(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", fb, [
            (t(!0), n(z, null, j(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (g) => d.$emit("update:period", f.value)
            }, c(f.label), 11, mb))), 128))
          ])) : $("", !0),
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
              class: P(["size-4 transition-transform", r.value ? "" : "rotate-180"]),
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
          ], 8, pb)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), n("svg", gb, [
              o("path", {
                d: k(ce)("eye-off")
              }, null, 8, hb)
            ]))
          ], 8, vb)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), n("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), D(ze, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: se({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : K(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, nb));
  }
}), yb = ["aria-pressed", "aria-label", "title"], xb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kb = ["d"], $b = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, wb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Cb = ["href"], Sb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mb = ["d"], Bb = ["aria-label", "onClick"], _b = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ab = ["d"], Pb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zb = ["d"], Ob = {
  key: 0,
  class: "flex flex-col gap-1"
}, Lb = ["onClick"], Vb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, jb = ["d"], Db = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Tb = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(!1), i = U(!1), d = x(
      () => a.catalog.filter((g) => !a.items.some((p) => p.id === g.id))
    );
    function u(g) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== g)
      );
    }
    function f(g) {
      r("update:items", [...a.items, g]), i.value = !1;
    }
    return (g, p) => (t(), n(z, null, [
      E(bb, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (h) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (h) => s.value = !s.value)
          }, [
            (t(), n("svg", xb, [
              o("path", {
                d: k(ce)(s.value ? "check" : "pencil")
              }, null, 8, kb)
            ]))
          ], 8, yb)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", $b, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                R("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", wb, [
            (t(!0), n(z, null, j(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", Sb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, Mb)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Cb),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (w) => u(h.id)
              }, [
                (t(), n("svg", _b, [
                  o("path", {
                    d: k(ce)("x")
                  }, null, 8, Ab)
                ]))
              ], 8, Bb)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Pb, [
                o("path", {
                  d: k(ce)("plus")
                }, null, 8, zb)
              ])),
              p[8] || (p[8] = R(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      E(dt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          E(de, {
            variant: "outline",
            onClick: p[4] || (p[4] = (h) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              R("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", Ob, [
            (t(!0), n(z, null, j(d.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (w) => f(h)
              }, [
                (t(), n("svg", Vb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, jb)
                ])),
                R(" " + c(h.label), 1)
              ], 8, Lb)
            ]))), 128))
          ])) : (t(), n("p", Db, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Eb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, Ib = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Fb = { class: "relative w-full max-w-xl" }, Nb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Rb = ["d"], Ub = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Hb = ["data-slot"], Kb = { class: "px-5 py-4" }, qb = { class: "mb-3 text-sm font-semibold" }, Gb = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Wb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Zb = ["d"], Jb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, O8 = /* @__PURE__ */ O({
  __name: "DirectoryPage",
  props: {
    title: {},
    description: { default: null },
    searchPlaceholder: { default: "Search" },
    sections: {},
    linkComponent: { default: "a" },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = U(""), r = x(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : Sa(u);
    }), s = st({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = x(() => {
      const u = a.value.trim().toLowerCase();
      return l.sections.map((f) => ({
        ...f,
        links: u ? f.links.filter((g) => g.label.toLowerCase().includes(u)) : f.links
      })).filter((f) => f.links.length > 0);
    });
    return (u, f) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(qe)])
    }, [
      o("header", null, [
        o("h1", Eb, c(e.title), 1),
        e.description ? (t(), n("p", Ib, c(e.description), 1)) : $("", !0)
      ]),
      o("div", Fb, [
        (t(), n("svg", Nb, [
          o("path", {
            d: k(ce)("search")
          }, null, 8, Rb)
        ])),
        E($e, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => a.value = g),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), n("div", Ub, [
        (t(!0), n(z, null, j(d.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", Kb, [
            o("h2", qb, c(g.title), 1),
            o("div", Gb, [
              (t(!0), n(z, null, j(g.links, (p) => (t(), D(Me(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: P(k(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", Wb, [
                    o("path", {
                      d: k(ce)(p.icon)
                    }, null, 8, Zb)
                  ])),
                  R(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Hb))), 128))
      ])) : (t(), n("p", Jb, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), Yb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Xb = { class: "flex flex-1 flex-col gap-1 p-4" }, Qb = { class: "text-muted-foreground relative text-xs font-medium" }, e1 = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, t1 = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, a1 = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, n1 = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, L8 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Yb, [
      o("div", Xb, [
        o("p", Qb, c(e.label), 1),
        e.loading ? (t(), D(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", e1, " Could not load ")) : (t(), n("span", t1, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), D(tn, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", a1, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", n1, [
        E(Pt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), l1 = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, o1 = { class: "flex flex-col gap-1 p-4" }, s1 = { class: "flex items-start justify-between gap-2" }, r1 = { class: "text-sm font-medium" }, i1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, d1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, u1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, c1 = {
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
    const l = e, a = x(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = x(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = x(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", l1, [
      o("div", o1, [
        o("div", s1, [
          o("p", r1, c(e.label), 1),
          K(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", i1, c(e.caption), 1)) : $("", !0),
        o("div", d1, [
          e.loading ? (t(), D(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", u1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", c1, [
        E(Pt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), f1 = { class: "relative flex flex-col gap-2" }, m1 = ["aria-label"], p1 = ["onMouseenter"], v1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, g1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, h1 = { class: "truncate" }, b1 = { class: "text-sm font-semibold tabular-nums" }, V8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.segments.reduce((g, p) => g + Math.max(0, p.value), 0)), s = x(() => Math.max(l.total ?? r.value, r.value, 1)), i = x(
      () => l.segments.map((g, p) => {
        const h = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? a[p % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = U(null), f = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), n("div", f1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, j(i.value, (h, w) => (t(), n("span", {
          key: w,
          class: P(["h-full transition-all", [
            w === 0 ? "rounded-l-full" : "",
            w === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: h.width,
            background: h.color,
            opacity: u.value === null || u.value === w ? 1 : 0.4
          }),
          onMouseenter: (y) => u.value = w,
          onMouseleave: p[0] || (p[0] = (y) => u.value = null)
        }, null, 46, p1))), 128))
      ], 12, m1),
      e.showLegend ? (t(), n("div", v1, [
        (t(!0), n(z, null, j(i.value, (h, w) => (t(), n("div", {
          key: w,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", g1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", h1, c(h.label), 1)
          ]),
          o("span", b1, c(d(h.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      u.value !== null ? (t(), D(pt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), y1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, x1 = ["data-heading"], k1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, $1 = { class: "text-muted-foreground truncate" }, w1 = ["aria-label"], j8 = /* @__PURE__ */ O({
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
    }, s = x(
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
    return (i, d) => (t(), n("div", y1, [
      (t(!0), n(z, null, j(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), n("div", k1, [
          o("span", $1, c(u.label), 1),
          o("span", {
            class: P(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, c(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((f) => `${f.label} ${f.value}`).join(", ")
        }, [
          (t(!0), n(z, null, j(u.segments, (f, g) => (t(), n("span", {
            key: g,
            class: P(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, w1)) : $("", !0)
      ], 8, x1))), 128))
    ]));
  }
}), C1 = {
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
}, S1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function M1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function B1(e, l) {
  return l || (e ? C1[M1(e)] ?? "neutral" : "neutral");
}
function _1(e, l) {
  return S1[B1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = x(() => _1(l.status, l.tone));
    return (r, s) => (t(), D(Ke, {
      variant: a.value,
      class: P(l.class)
    }, {
      default: L(() => [
        K(r.$slots, "default", {}, () => [
          R(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), A1 = ["data-layout"], P1 = ["src", "alt"], z1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, O1 = ["src"], L1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, V1 = ["onMouseenter"], j1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, D1 = { class: "min-w-0" }, T1 = { class: "truncate text-sm font-medium" }, E1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, I1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, F1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, N1 = { class: "min-w-0" }, R1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, U1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, H1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, K1 = ["d"], q1 = ["aria-label"], G1 = /* @__PURE__ */ O({
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
    }, r = e, s = l, i = U(0);
    function d(S) {
      if (typeof S != "string")
        return null;
      const M = S.trim();
      return M === "" ? null : /^(https?:)?\/\//i.test(M) ? M : null;
    }
    const u = x(() => {
      const S = [r.item.image, ...r.item.images ?? []].map(d).filter((M) => M !== null);
      return [...new Set(S)];
    }), f = x(() => u.value[i.value] ?? u.value[0] ?? null), g = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((S) => S[0]?.toUpperCase() ?? "").join("")
    ), p = x(() => {
      const S = r.item.progress;
      if (!S)
        return null;
      const M = Math.max(S.total ?? 100, S.value, 1);
      return `${Math.min(100, Math.max(0, S.value / M * 100)).toFixed(2)}%`;
    }), h = x(() => u.value.length > 1 ? u.value[1] : null), w = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), y = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(S) {
      S.stopPropagation(), s("cart", r.item.key);
    }
    return (S, M) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: M[0] || (M[0] = (_) => s("select", e.item.key)),
      onKeydown: M[1] || (M[1] = Tt(he((_) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: M[2] || (M[2] = (_) => i.value = 0)
    }, [
      o("div", {
        class: P([
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
        }, null, 8, P1)) : (t(), n("span", z1, c(g.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, O1)) : $("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", L1, [
          (t(!0), n(z, null, j(u.value, (_, m) => (t(), n("span", {
            key: m,
            class: P(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (v) => i.value = m
          }, null, 42, V1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", j1, [
          o("div", D1, [
            o("p", T1, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", E1, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", I1, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), D(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", F1, [
          o("div", N1, [
            e.item.price ? (t(), n("p", R1, c(e.item.price), 1)) : $("", !0),
            y.value ? (t(), n("p", U1, c(y.value), 1)) : $("", !0)
          ]),
          w.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), n("svg", H1, [
              o("path", {
                d: k(ce)("cart")
              }, null, 8, K1)
            ]))
          ])) : $("", !0)
        ]),
        p.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: P(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: p.value })
          }, null, 6)
        ], 8, q1)) : $("", !0)
      ], 2)
    ], 42, A1));
  }
});
function W1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function Z1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function J1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const Y1 = ["data-featured", "data-recommended"], X1 = { class: "flex flex-col gap-1" }, Q1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, ey = { key: 0 }, ty = { key: 1 }, ay = { key: 2 }, ny = { key: 3 }, ly = { class: "text-sm font-semibold" }, oy = { class: "flex items-baseline gap-1" }, sy = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, ry = { class: "text-muted-foreground text-sm font-normal" }, iy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, dy = { class: "text-muted-foreground mt-1 text-xs" }, uy = { class: "flex flex-1 flex-col gap-2 text-sm" }, cy = { class: "flex min-w-0 items-start gap-2" }, fy = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, my = ["d"], py = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, vy = ["d"], gy = { class: "capitalize" }, hy = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, by = { class: "text-foreground font-medium" }, yy = { class: "mt-auto flex gap-2 pt-2" }, xy = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.plan.priceFormatted ?? String(a.plan.price)
    ), i = x(
      () => !!(a.plan.featured || a.plan.recommended)
    ), d = x(() => {
      const f = a.plan.perks ?? {};
      return Object.entries(f).map(([g, p]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: J1(p.value),
        display: Z1(p.value)
      }));
    }), u = x(() => a.plan.extraPerks ?? []);
    return (f, g) => (t(), n("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", X1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", Q1, [
          e.plan.recommended ? (t(), n("span", ey, "Recommended")) : e.plan.featured ? (t(), n("span", ty, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", ay, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", ny, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", ly, c(e.plan.name), 1),
        o("p", oy, [
          o("span", sy, c(s.value), 1),
          o("span", ry, c(k(W1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", iy, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", dy, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", uy, [
        (t(!0), n(z, null, j(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", cy, [
            o("span", {
              class: P(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", fy, [
                o("path", {
                  d: k(ce)("check")
                }, null, 8, my)
              ])) : (t(), n("svg", py, [
                o("path", {
                  d: k(ce)("x")
                }, null, 8, vy)
              ]))
            ], 2),
            o("span", gy, c(p.label), 1)
          ]),
          p.display ? (t(), n("span", hy, c(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, j(u.value, (p, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", by, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", yy, [
        E(de, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (p) => r("edit", e.plan.id))
        }, {
          default: L(() => [...g[2] || (g[2] = [
            R(" Edit ", -1)
          ])]),
          _: 1
        }),
        E(de, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (p) => r("delete", e.plan.id))
        }, {
          default: L(() => [...g[3] || (g[3] = [
            R(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, Y1));
  }
}), ky = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, $y = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, wy = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Cy = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, Sy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, D8 = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : k(qe)]),
      "data-slot": "plan-grid"
    }, [
      o("header", ky, [
        o("div", null, [
          e.title ? (t(), n("h1", $y, c(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", wy, c(e.description), 1)) : $("", !0)
        ]),
        E(de, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            R("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", Cy, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", Sy, [
        (t(!0), n(z, null, j(e.plans, (i) => (t(), D(xy, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), My = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, By = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, _y = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, Ay = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Py = { class: "space-y-1.5" }, zy = { class: "space-y-1.5" }, Oy = { class: "space-y-1.5" }, Ly = { class: "space-y-1.5" }, Vy = { class: "space-y-1.5" }, jy = { class: "flex items-center gap-3 text-sm" }, Dy = { class: "flex items-center gap-3 text-sm" }, Ty = { class: "flex items-center gap-3 text-sm" }, Ey = {
  key: 0,
  class: "space-y-1.5"
}, Iy = { class: "flex items-center gap-3 text-sm" }, Fy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ny = { class: "space-y-1.5" }, Ry = ["value"], Uy = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Hy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Ky = ["id", "value", "onInput"], qy = { class: "space-y-2" }, Gy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Wy = ["d"], T8 = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = it(a());
    function d(m, v) {
      const b = i.perks?.[m]?.value;
      return b ?? v;
    }
    function u(m, v, b) {
      const A = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: v,
          overview: b ?? A?.overview ?? ""
        }
      };
    }
    function f(m, v) {
      const b = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: b?.value ?? (m === "modules" ? [] : 0),
          overview: v
        }
      };
    }
    function g(m) {
      const v = m ? { ...a(), ...m } : a();
      i.id = v.id, i.name = v.name, i.shortDescription = v.shortDescription ?? "", i.description = v.description ?? "", i.days = v.days, i.price = v.price, i.featured = v.featured ?? !1, i.recommended = v.recommended ?? !1, i.trial = v.trial ?? !1, i.trialDays = v.trialDays ?? 0, i.active = v.active ?? !0, i.perks = { ...v.perks ?? {} }, i.extraPerks = [...v.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    g(r.plan), me(
      () => r.plan,
      (m) => g(m),
      { deep: !0 }
    );
    const p = x({
      get: () => {
        const m = d("modules", []);
        return Array.isArray(m) ? m.map(String) : [];
      },
      set: (m) => {
        u("modules", w(m.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), h = x(
      () => r.modules.map((m) => ({ value: m.key, label: m.label }))
    );
    function w(m) {
      const v = Object.fromEntries(r.modules.map((I) => [I.key, I])), b = new Set(m);
      for (const I of r.modules)
        if (!b.has(I.key))
          for (const T of I.children ?? [])
            b.delete(T);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const I of [...b])
          for (const T of v[I]?.requires ?? [])
            b.has(T) || (b.add(T), A = !0);
      }
      return [...b];
    }
    function y() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((v, b) => b !== m);
    }
    function S() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const M = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, _ = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (m, v) => (t(), n("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : k(qe)]),
      "data-slot": "plan-editor",
      onSubmit: he(S, ["prevent"])
    }, [
      o("header", My, [
        o("div", null, [
          o("h1", By, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          v[13] || (v[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        E(de, {
          type: "button",
          variant: "outline",
          onClick: v[0] || (v[0] = (b) => s("cancel"))
        }, {
          default: L(() => [...v[14] || (v[14] = [
            R("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", _y, [
        o("section", Ay, [
          v[26] || (v[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", Py, [
            E(Pe, { for: "plan-name" }, {
              default: L(() => [...v[15] || (v[15] = [
                R("Plan name", -1)
              ])]),
              _: 1
            }),
            E($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": v[1] || (v[1] = (b) => i.name = b),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", zy, [
            E(Pe, { for: "plan-short" }, {
              default: L(() => [...v[16] || (v[16] = [
                R("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            E($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": v[2] || (v[2] = (b) => i.shortDescription = b),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Oy, [
            E(Pe, { for: "plan-description" }, {
              default: L(() => [...v[17] || (v[17] = [
                R("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": v[3] || (v[3] = (b) => i.description = b),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: P(_)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", Ly, [
            E(Pe, { for: "plan-days" }, {
              default: L(() => [...v[18] || (v[18] = [
                R("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": v[4] || (v[4] = (b) => i.days = b),
              class: P(M)
            }, [...v[19] || (v[19] = [
              o("option", { value: 30 }, "Monthly", -1),
              o("option", { value: 365 }, "Yearly", -1),
              o("option", { value: 999999 }, "Lifetime", -1)
            ])], 512), [
              [
                Ge,
                i.days,
                void 0,
                { number: !0 }
              ]
            ])
          ]),
          o("div", Vy, [
            E(Pe, { for: "plan-price" }, {
              default: L(() => [...v[20] || (v[20] = [
                R("Price", -1)
              ])]),
              _: 1
            }),
            E($e, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": v[5] || (v[5] = (b) => i.price = Number(b))
            }, null, 8, ["model-value"])
          ]),
          o("label", jy, [
            E(k(We), {
              checked: !!i.featured,
              "onUpdate:checked": v[6] || (v[6] = (b) => i.featured = b)
            }, null, 8, ["checked"]),
            v[21] || (v[21] = R(" Featured ", -1))
          ]),
          o("label", Dy, [
            E(k(We), {
              checked: !!i.recommended,
              "onUpdate:checked": v[7] || (v[7] = (b) => i.recommended = b)
            }, null, 8, ["checked"]),
            v[22] || (v[22] = R(" Recommended ", -1))
          ]),
          o("label", Ty, [
            E(k(We), {
              checked: !!i.trial,
              "onUpdate:checked": v[8] || (v[8] = (b) => i.trial = b)
            }, null, 8, ["checked"]),
            v[23] || (v[23] = R(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", Ey, [
            E(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...v[24] || (v[24] = [
                R("Trial days", -1)
              ])]),
              _: 1
            }),
            E($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": v[9] || (v[9] = (b) => i.trialDays = Number(b))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", Iy, [
            E(k(We), {
              checked: i.active !== !1,
              "onUpdate:checked": v[10] || (v[10] = (b) => i.active = b)
            }, null, 8, ["checked"]),
            v[25] || (v[25] = R(" Active ", -1))
          ]),
          E(de, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              R(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Fy, [
          v[33] || (v[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Ny, [
            E(Pe, null, {
              default: L(() => [...v[27] || (v[27] = [
                R("Modules access", -1)
              ])]),
              _: 1
            }),
            E(Qt, {
              modelValue: p.value,
              "onUpdate:modelValue": v[11] || (v[11] = (b) => p.value = b),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            E(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...v[28] || (v[28] = [
                R("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: P(_),
              onInput: v[12] || (v[12] = (b) => f(
                "modules",
                b.target.value
              ))
            }, null, 40, Ry)
          ]),
          (t(!0), n(z, null, j(e.limits, (b) => (t(), n("div", {
            key: b.key,
            class: "space-y-1.5"
          }, [
            b.kind === "toggle" ? (t(), n("label", Uy, [
              E(k(We), {
                checked: !!d(b.key, !1),
                "onUpdate:checked": (A) => u(
                  b.key,
                  A,
                  i.perks?.[b.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              R(" " + c(b.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              E(Pe, {
                for: `plan-limit-${b.key}`
              }, {
                default: L(() => [
                  R(c(b.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              b.hint ? (t(), n("p", Hy, c(b.hint), 1)) : $("", !0),
              E($e, {
                id: `plan-limit-${b.key}`,
                "model-value": Number(d(b.key, 0)),
                type: "number",
                step: b.step ?? 1,
                required: "",
                "onUpdate:modelValue": (A) => u(
                  b.key,
                  Number(A),
                  i.perks?.[b.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              v[29] || (v[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            E(Pe, {
              for: `plan-overview-${b.key}`
            }, {
              default: L(() => [...v[30] || (v[30] = [
                R("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${b.key}`,
              value: i.perks?.[b.key]?.overview ?? "",
              class: P(_),
              onInput: (A) => f(
                b.key,
                A.target.value
              )
            }, null, 40, Ky)
          ]))), 128)),
          o("div", qy, [
            v[32] || (v[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, j(i.extraPerks ?? [], (b, A) => (t(), n("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              E($e, {
                modelValue: b.key,
                "onUpdate:modelValue": (I) => b.key = I,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E($e, {
                modelValue: b.value,
                "onUpdate:modelValue": (I) => b.value = I,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              E(de, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (I) => C(A)
              }, {
                default: L(() => [
                  (t(), n("svg", Gy, [
                    o("path", {
                      d: k(ce)("x")
                    }, null, 8, Wy)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            E(de, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: y
            }, {
              default: L(() => [...v[31] || (v[31] = [
                R(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Zy = ["data-current", "data-recommended"], Jy = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
}, Yy = {
  key: 1,
  class: "bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
}, Xy = { class: "text-sm font-semibold" }, Qy = { class: "flex items-baseline gap-1" }, ex = { class: "text-4xl font-bold tracking-tight tabular-nums" }, tx = { class: "text-muted-foreground text-sm font-normal" }, ax = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, nx = {
  key: 2,
  class: "flex flex-1 flex-col gap-2 text-sm"
}, lx = {
  class: "text-success mt-0.5 shrink-0",
  "aria-hidden": "true"
}, ox = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, sx = ["d"], rx = { class: "text-muted-foreground" }, ix = {
  key: 3,
  class: "flex-1"
}, dx = {
  key: 4,
  class: "mt-auto pt-2"
}, E8 = /* @__PURE__ */ O({
  __name: "PlanPurchaseCard",
  props: {
    plan: {},
    annual: { type: Boolean, default: !1 },
    processing: { type: Boolean, default: !1 }
  },
  emits: ["choose"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.annual && a.plan.annualPrice !== void 0 ? a.plan.annualPriceFormatted ?? String(a.plan.annualPrice) : a.plan.priceFormatted ?? String(a.plan.price)), i = x(() => a.annual && a.plan.annualPrice !== void 0 ? "year" : a.plan.interval ?? "month"), d = x(() => !!a.plan.recommended && !a.plan.current);
    return (u, f) => (t(), n("article", {
      class: P([
        "bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow",
        d.value ? "border-primary shadow-lg ring-1 ring-primary/20" : e.plan.current ? "border-primary/40" : ""
      ]),
      "data-slot": "plan-purchase-card",
      "data-current": e.plan.current ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      d.value ? (t(), n("span", Jy, " Most popular ")) : e.plan.current ? (t(), n("span", Yy, " Current plan ")) : $("", !0),
      o("header", {
        class: P(["flex flex-col gap-1", d.value || e.plan.current ? "pt-2" : ""])
      }, [
        o("h3", Xy, c(e.plan.name), 1),
        o("p", Qy, [
          o("span", ex, c(s.value), 1),
          o("span", tx, "/ " + c(i.value), 1)
        ]),
        e.plan.description ? (t(), n("p", ax, c(e.plan.description), 1)) : $("", !0)
      ], 2),
      e.plan.features?.length ? (t(), n("ul", nx, [
        (t(!0), n(z, null, j(e.plan.features, (g, p) => (t(), n("li", {
          key: p,
          class: "flex items-start gap-2"
        }, [
          o("span", lx, [
            (t(), n("svg", ox, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, sx)
            ]))
          ]),
          o("span", rx, c(g), 1)
        ]))), 128))
      ])) : (t(), n("div", ix)),
      e.plan.current ? $("", !0) : (t(), n("footer", dx, [
        E(de, {
          class: "w-full",
          variant: d.value ? "default" : "outline",
          size: "sm",
          disabled: e.processing,
          onClick: f[0] || (f[0] = (g) => r("choose", e.plan.id))
        }, {
          default: L(() => [
            R(c(e.processing ? "Redirecting…" : "Choose plan"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"])
      ]))
    ], 10, Zy));
  }
}), ux = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, cx = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, fx = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, mx = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, px = ["d"], vx = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, gx = ["aria-pressed"], hx = ["aria-pressed"], bx = {
  key: 0,
  class: "flex flex-col gap-2"
}, yx = ["aria-label"], xx = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, kx = ["aria-pressed", "onClick"], $x = ["aria-label"], wx = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Cx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Sx = ["data-slot"], Mx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Bx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, _x = { class: "flex items-center gap-2" }, Ax = ["disabled"], Px = ["disabled"], sa = /* @__PURE__ */ O({
  __name: "CatalogGrid",
  props: /* @__PURE__ */ Ie({
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
  emits: /* @__PURE__ */ Ie(["select", "cart", "filter", "scan"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(""), i = ct(e, "modelValue"), d = it({}), u = it({});
    me(s, () => h());
    function f(T) {
      const te = T.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function g() {
      const T = {};
      for (const [te, H] of Object.entries(u))
        T[te] = { min: f(H.min), max: f(H.max) };
      return T;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function h() {
      r("filter", p());
    }
    function w(T, te) {
      d[T] = d[T] === te ? null : te, h();
    }
    function y(T) {
      return u[T] ?? { min: "", max: "" };
    }
    function C(T, te, H) {
      const Z = u[T] ?? { min: "", max: "" };
      u[T] = { ...Z, [te]: H }, h();
    }
    function S(T) {
      T.key === "Enter" && (T.preventDefault(), r("scan", s.value.trim()));
    }
    const M = x(() => a.facets.filter((T) => (T.kind ?? "chips") === "chips")), _ = x(() => a.facets.filter((T) => T.kind === "range")), m = x(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), v = U(1);
    me(
      () => a.items.map((T) => T.key).join(","),
      () => {
        v.value = 1;
      }
    );
    const b = x(() => {
      const T = a.pageSize;
      return !T || T < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / T));
    }), A = x(() => {
      const T = a.pageSize;
      if (!T || T < 1)
        return a.items;
      const te = (v.value - 1) * T;
      return a.items.slice(te, te + T);
    });
    function I(T) {
      v.value = Math.min(b.value, Math.max(1, T));
    }
    return (T, te) => (t(), n("div", {
      class: P(["flex flex-col gap-4", k(Za)])
    }, [
      m.value ? (t(), n("div", ux, [
        o("div", cx, [
          e.searchable ? (t(), n("div", fx, [
            (t(), n("svg", mx, [
              o("path", {
                d: k(ce)("search")
              }, null, 8, px)
            ])),
            E($e, {
              modelValue: s.value,
              "onUpdate:modelValue": te[0] || (te[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: S
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          K(T.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", vx, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, gx),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, hx)
          ])) : $("", !0)
        ]),
        M.value.length || _.value.length ? (t(), n("div", bx, [
          (t(!0), n(z, null, j(M.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", xx, c(H.label), 1)) : $("", !0),
            (t(!0), n(z, null, j(H.options ?? [], (Z) => (t(), n("button", {
              key: Z.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === Z.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === Z.value ? "true" : "false",
              onClick: (N) => w(H.key, Z.value)
            }, c(Z.label), 11, kx))), 128))
          ], 8, yx))), 128)),
          (t(!0), n(z, null, j(_.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", wx, c(H.label ?? H.key), 1),
            E($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": y(H.key).min,
              "onUpdate:modelValue": (Z) => C(H.key, "min", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            E($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": y(H.key).max,
              "onUpdate:modelValue": (Z) => C(H.key, "max", String(Z))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, $x))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", Cx, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : k(bf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, j(A.value, (H) => (t(), D(G1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (Z) => r("select", Z)),
          onCart: te[4] || (te[4] = (Z) => r("cart", Z))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Sx)),
      e.pageSize && b.value > 1 ? (t(), n("div", Mx, [
        o("p", Bx, " Page " + c(v.value) + " of " + c(b.value), 1),
        o("div", _x, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: v.value <= 1,
            onClick: te[5] || (te[5] = (H) => I(v.value - 1))
          }, " Previous ", 8, Ax),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: v.value >= b.value,
            onClick: te[6] || (te[6] = (H) => I(v.value + 1))
          }, " Next ", 8, Px)
        ])
      ])) : $("", !0)
    ], 2));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function zx(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function Ox(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function ra(e, l) {
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
    if (!Ox(zx(e, r), s))
      return !1;
  return !0;
}
function Lx(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function St(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const Vx = { class: "flex flex-col gap-6" }, jx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, Dx = { class: "text-sm font-semibold" }, Tx = { class: "flex flex-wrap items-center gap-1.5" }, Ex = ["aria-pressed", "onClick"], Ix = { class: "text-sm font-semibold" }, Fx = { class: "flex flex-wrap items-center gap-1.5" }, Nx = { key: 0 }, an = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(""), i = it({}), d = it({}), u = x(
      () => a.facets.filter((b) => (b.kind ?? "chips") === "chips")
    ), f = x(() => a.facets.filter((b) => b.kind === "range"));
    function g(b) {
      return b == null ? "" : String(b);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const b of Object.keys(i))
        delete i[b];
      for (const [b, A] of Object.entries(a.applied.selected ?? {}))
        i[b] = A;
      for (const b of Object.keys(d))
        delete d[b];
      for (const [b, A] of Object.entries(a.applied.ranges ?? {}))
        d[b] = { min: g(A.min), max: g(A.max) };
    }
    me(
      () => a.open,
      (b) => {
        b && p();
      }
    );
    function h(b) {
      const A = b.trim();
      if (A === "")
        return null;
      const I = Number(A);
      return Number.isFinite(I) ? I : null;
    }
    function w() {
      const b = {};
      for (const [A, I] of Object.entries(d))
        b[A] = { min: h(I.min), max: h(I.max) };
      return b;
    }
    function y() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: w()
      };
    }
    const C = x(() => {
      let b = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (b += 1);
      for (const A of Object.values(w()))
        (A.min !== null || A.max !== null) && (b += 1);
      return b;
    });
    function S(b, A) {
      i[b] = i[b] === A ? null : A;
    }
    function M(b) {
      return d[b] ?? { min: "", max: "" };
    }
    function _(b, A, I) {
      const T = d[b] ?? { min: "", max: "" };
      d[b] = { ...T, [A]: I };
    }
    function m() {
      r("apply", y());
    }
    function v() {
      s.value = "";
      for (const b of Object.keys(i))
        i[b] = null;
      for (const b of Object.keys(d))
        d[b] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ee(), query: a.applied.query } : Ee()
      );
    }
    return (b, A) => (t(), D(_t, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: A[2] || (A[2] = (I) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: v
        }, " Reset all "),
        E(de, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (I) => r("close"))
        }, {
          default: L(() => [...A[5] || (A[5] = [
            R("Cancel", -1)
          ])]),
          _: 1
        }),
        E(de, {
          size: "sm",
          onClick: m
        }, {
          default: L(() => [
            A[6] || (A[6] = R(" Apply", -1)),
            C.value ? (t(), n("span", Nx, " (" + c(C.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", Vx, [
          e.hideSearch ? $("", !0) : (t(), n("label", jx, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            E($e, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (I) => s.value = I),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, j(u.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Dx, c(I.label ?? I.key), 1),
            o("div", Tx, [
              (t(!0), n(z, null, j(I.options ?? [], (T) => (t(), n("button", {
                key: T.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[I.key] === T.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[I.key] === T.value ? "true" : "false",
                onClick: (te) => S(I.key, T.value)
              }, c(T.label), 11, Ex))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, j(f.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", Ix, c(I.label ?? I.key), 1),
            o("div", Fx, [
              E($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${I.label ?? I.key} from`,
                "model-value": M(I.key).min,
                "onUpdate:modelValue": (T) => _(I.key, "min", String(T))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              E($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${I.label ?? I.key} to`,
                "model-value": M(I.key).max,
                "onUpdate:modelValue": (T) => _(I.key, "max", String(T))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), Rx = ["aria-disabled"], Ux = ["disabled"], Hx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Kx = ["d"], qx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Gx = ["disabled"], Wx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Zx = ["d"], Jx = /* @__PURE__ */ O({
  __name: "PkQtyStepper",
  props: /* @__PURE__ */ Ie({
    min: { default: 1 },
    max: { default: null },
    disabled: { type: Boolean, default: !1 }
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["decrease", "increase"], ["update:modelValue"]),
  setup(e, { emit: l }) {
    const a = ct(e, "modelValue"), r = l, s = x(() => a.value <= e.min), i = x(() => e.max !== null && a.value >= e.max);
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
        onClick: f[0] || (f[0] = (g) => d(-1))
      }, [
        (t(), n("svg", Hx, [
          o("path", {
            d: k(ce)("minus")
          }, null, 8, Kx)
        ]))
      ], 8, Ux),
      o("span", qx, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (g) => d(1))
      }, [
        (t(), n("svg", Wx, [
          o("path", {
            d: k(ce)("plus")
          }, null, 8, Zx)
        ]))
      ], 8, Gx)
    ], 8, Rx));
  }
}), Yx = { class: "divide-border flex flex-col divide-y" }, Xx = { class: "min-w-0" }, Qx = { class: "truncate text-sm font-medium" }, e0 = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, t0 = { class: "flex shrink-0 items-center gap-2 text-sm" }, a0 = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, n0 = {
  key: 2,
  class: "font-medium tabular-nums"
}, l0 = ["aria-label", "onClick"], o0 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, s0 = ["d"], r0 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Yx, [
      (t(!0), n(z, null, j(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Xx, [
          o("p", Qx, c(d.label), 1),
          d.detail ? (t(), n("p", e0, c(d.detail), 1)) : $("", !0)
        ]),
        o("div", t0, [
          e.editable ? (t(), D(Jx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", a0, " ×" + c(d.qty), 1)) : $("", !0),
          d.amount ? (t(), n("span", n0, c(d.amount), 1)) : $("", !0),
          d.status ? (t(), D(we, {
            key: 3,
            status: d.status,
            tone: d.tone
          }, null, 8, ["status", "tone"])) : $("", !0),
          e.editable ? (t(), n("button", {
            key: 4,
            type: "button",
            class: "text-muted-foreground hover:text-destructive inline-flex size-8 items-center justify-center rounded-md",
            "aria-label": `Remove ${d.label}`,
            onClick: (u) => a("remove", d.key)
          }, [
            (t(), n("svg", o0, [
              o("path", {
                d: k(ce)("trash")
              }, null, 8, s0)
            ]))
          ], 8, l0)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), i0 = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, d0 = { class: "border-b px-4 py-3" }, u0 = { class: "text-sm font-medium" }, c0 = { class: "flex-1 px-4 py-3" }, f0 = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, m0 = { class: "text-foreground block font-medium" }, p0 = { class: "mt-1 block" }, v0 = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, g0 = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, h0 = { class: "tabular-nums" }, b0 = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, y0 = { class: "text-muted-foreground" }, x0 = {
  key: 0,
  class: "tabular-nums"
}, k0 = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, $0 = { class: "text-muted-foreground" }, w0 = { class: "tabular-nums" }, C0 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, S0 = { class: "tabular-nums" }, M0 = {
  key: 4,
  class: "pt-1"
}, B0 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", i0, [
      o("header", d0, [
        o("h2", u0, c(e.title), 1)
      ]),
      o("div", c0, [
        e.items.length === 0 ? (t(), n("p", f0, [
          o("span", m0, c(e.emptyTitle), 1),
          o("span", p0, c(e.emptyDescription), 1)
        ])) : (t(), D(r0, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", v0, [
        e.subtotal ? (t(), n("div", g0, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", h0, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", b0, [
          o("span", y0, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", x0, c(e.discount), 1)) : $("", !0),
          K(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", k0, [
          o("span", $0, c(e.taxLabel), 1),
          o("span", w0, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", C0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", S0, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), n("div", M0, [
          K(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), _0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, A0 = { class: "flex flex-col gap-4" }, P0 = { class: "flex flex-wrap items-start justify-between gap-3" }, z0 = { class: "flex items-center gap-2" }, O0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, I8 = /* @__PURE__ */ O({
  __name: "CatalogTill",
  props: /* @__PURE__ */ Ie({
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
  emits: /* @__PURE__ */ Ie(["select", "pay"], ["update:cart"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(Ee()), i = U(!1), d = ct(e, "cart"), u = U(!1), f = x(
      () => a.items.filter((H) => ra(H, s.value))
    );
    function g(H) {
      s.value = { ...s.value, query: H.query };
    }
    function p(H) {
      s.value = {
        ...s.value,
        selected: H.selected,
        ranges: H.ranges,
        query: s.value.query
      }, i.value = !1;
    }
    function h(H) {
      return H ? a.parsePrice(H) : 0;
    }
    function w(H, Z, N) {
      return {
        ...H,
        qty: Z,
        amount: a.formatMoney(N * Z)
      };
    }
    function y(H) {
      const Z = Lx(a.items, H);
      Z && C(Z.key);
    }
    function C(H) {
      const Z = a.items.find((J) => J.key === H);
      if (!Z || Z.status === "out-of-stock")
        return;
      u.value = !1;
      const N = h(Z);
      if (d.value.find((J) => J.key === H)) {
        d.value = d.value.map(
          (J) => J.key === H ? w(J, Number(J.qty ?? 1) + 1, N) : J
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: Z.key,
          label: Z.label,
          detail: Z.caption ?? null,
          qty: 1,
          amount: a.formatMoney(N)
        }
      ];
    }
    function S(H, Z) {
      const N = a.items.find((J) => J.key === H), W = h(N);
      d.value = d.value.map(
        (J) => J.key === H ? w(J, Z, W) : J
      );
    }
    function M(H) {
      d.value = d.value.filter((Z) => Z.key !== H);
    }
    const _ = x(
      () => d.value.reduce((H, Z) => {
        const N = a.items.find((W) => W.key === Z.key);
        return H + h(N) * Number(Z.qty ?? 1);
      }, 0)
    ), m = x(
      () => a.discountRate > 0 ? Math.round(_.value * a.discountRate) : 0
    ), v = x(
      () => Math.round((_.value - m.value) * a.taxRate)
    ), b = x(
      () => d.value.length ? a.formatMoney(_.value) : null
    ), A = x(
      () => d.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), I = x(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(v.value) : null
    ), T = x(
      () => d.value.length ? a.formatMoney(
        _.value - m.value + v.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, Z) => (t(), n(z, null, [
      o("div", _0, [
        o("section", A0, [
          o("div", P0, [
            E(Te, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", z0, [
              k(St)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: Z[0] || (Z[0] = (N) => s.value = {
                  ...k(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: Z[1] || (Z[1] = (N) => i.value = !0)
              }, [
                Z[5] || (Z[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                Z[6] || (Z[6] = R(" Filters ", -1)),
                k(St)(s.value) ? (t(), n("span", O0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          E(sa, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: g,
            onSelect: Z[2] || (Z[2] = (N) => r("select", N)),
            onCart: C,
            onScan: y
          }, null, 8, ["search-placeholder", "items"])
        ]),
        E(B0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: b.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: I.value,
          total: T.value,
          onQty: S,
          onRemove: M
        }, {
          pay: L(() => [
            K(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: te
            }, () => [
              E(de, {
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
      E(an, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: Z[3] || (Z[3] = (N) => i.value = !1),
        onApply: p,
        onReset: Z[4] || (Z[4] = (N) => s.value = { ...k(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), L0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, V0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, j0 = ["src", "alt"], D0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, T0 = ["src"], E0 = { class: "flex items-start justify-between gap-3" }, I0 = { class: "text-lg font-semibold tabular-nums" }, F0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, N0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, R0 = { class: "grid grid-cols-2 gap-3" }, U0 = { class: "flex flex-col gap-2" }, H0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, F8 = /* @__PURE__ */ O({
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
      for (const w of p)
        h = h * 31 + w.charCodeAt(0) >>> 0;
      return h;
    }
    function i(p, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((y, C) => ({
        label: y,
        value: Math.max(0, Math.round(p + Math.sin(C + h) * p * 0.18))
      }));
    }
    const d = x(() => a.item?.kind === "unit"), u = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(p.key) % 7);
    }), f = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const h = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(p.key) % 5 + 1);
    }), g = x(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, h) => (t(), D(_t, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (w) => r("close"))
    }, rt({
      default: L(() => [
        e.item ? (t(), n("div", L0, [
          o("div", V0, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, j0)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", D0, [
            (t(!0), n(z, null, j(e.item.images, (w, y) => (t(), n("img", {
              key: y,
              src: w,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, T0))), 128))
          ])) : $("", !0),
          o("div", E0, [
            o("div", null, [
              o("p", I0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", F0, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), D(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", N0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", R0, [
            E(Ct, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            E(Ct, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", U0, [
            o("p", H0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            E(Pt, {
              data: d.value ? f.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      g.value && e.item ? {
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
}), K0 = { class: "flex flex-col gap-10" }, q0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, G0 = { class: "flex flex-col gap-3" }, W0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, Z0 = ["src", "alt"], J0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, Y0 = ["aria-label", "aria-pressed", "onClick"], X0 = ["src"], Q0 = { class: "flex flex-col gap-5" }, ek = { class: "flex flex-wrap items-start justify-between gap-3" }, tk = { class: "min-w-0" }, ak = { class: "text-2xl font-semibold tracking-tight" }, nk = { class: "text-muted-foreground mt-1 text-sm" }, lk = { class: "text-2xl font-semibold tabular-nums" }, ok = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, sk = { class: "grid grid-cols-2 gap-3 text-sm" }, rk = {
  key: 0,
  class: "rounded-lg border p-3"
}, ik = { class: "mt-1 font-medium" }, dk = { class: "rounded-lg border p-3" }, uk = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, ck = { class: "mt-1 font-medium" }, fk = { class: "flex flex-col gap-4" }, mk = { class: "grid gap-4 sm:grid-cols-2" }, pk = { class: "bg-card rounded-lg border p-4" }, vk = { class: "mb-3 text-sm font-medium" }, gk = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(y) {
      let C = 0;
      for (const S of y)
        C = C * 31 + S.charCodeAt(0) >>> 0;
      return C;
    }
    function i(y, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((M, _) => ({
        label: M,
        value: Math.max(0, Math.round(y + Math.sin(_ + C) * y * 0.18))
      }));
    }
    const d = x(() => a.item.kind === "unit"), u = x(() => {
      const y = [a.item.image, ...a.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(y)];
    }), f = U(0), g = x(() => {
      const y = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(a.item.key) % 7);
    }), p = x(() => {
      const y = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(a.item.key) % 5 + 1);
    }), h = x(() => d.value ? p.value : g.value), w = x(() => !d.value && a.item.status !== "out-of-stock");
    return (y, C) => (t(), n("div", K0, [
      o("div", q0, [
        o("div", G0, [
          o("div", W0, [
            u.value[f.value] ? (t(), n("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, Z0)) : $("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", J0, [
            (t(!0), n(z, null, j(u.value, (S, M) => (t(), n("button", {
              key: S,
              type: "button",
              class: P(["size-16 shrink-0 overflow-hidden rounded-md border", M === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${M + 1}`,
              "aria-pressed": M === f.value ? "true" : "false",
              onClick: (_) => f.value = M
            }, [
              o("img", {
                src: S,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, X0)
            ], 10, Y0))), 128))
          ])) : $("", !0)
        ]),
        o("div", Q0, [
          o("div", ek, [
            o("div", tk, [
              o("h1", ak, c(e.item.label), 1),
              o("p", nk, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), D(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", lk, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", ok, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", sk, [
            e.item.sku ? (t(), n("div", rk, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", ik, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", dk, [
              o("dt", uk, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", ck, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          w.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (S) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", fk, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", mk, [
          E(Ct, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          E(Ct, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", pk, [
          o("p", vk, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          E(jg, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), hk = ["href"], N8 = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(qe)])
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
      ], 8, hk),
      E(gk, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), bk = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, yk = ["aria-selected", "onClick"], xk = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, kk = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, $k = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, wk = ["aria-pressed"], Ck = ["aria-pressed"], R8 = /* @__PURE__ */ O({
  __name: "CatalogBrowser",
  props: /* @__PURE__ */ Ie({
    title: { default: "Catalog" },
    description: { default: null },
    tabs: {},
    pageSize: { default: 8 },
    embedded: { type: Boolean, default: !0 }
  }, {
    layout: { default: "grid" },
    layoutModifiers: {}
  }),
  emits: /* @__PURE__ */ Ie(["select", "cart"], ["update:layout"]),
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(a.tabs[0]?.key ?? ""), i = ct(e, "layout"), d = U({}), u = U(!1);
    me(
      () => a.tabs.map((S) => S.key).join(","),
      (S) => {
        S.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function f(S) {
      return d.value[S] ?? Ee();
    }
    const g = x(
      () => a.tabs.find((S) => S.key === s.value) ?? a.tabs[0] ?? null
    ), p = x(
      () => g.value ? f(g.value.key) : Ee()
    ), h = x(() => {
      const S = g.value;
      return S ? S.items.filter((M) => ra(M, f(S.key))) : [];
    });
    function w(S) {
      const M = g.value?.key;
      M && (d.value = {
        ...d.value,
        [M]: { ...f(M), query: S }
      });
    }
    function y() {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: Ee() });
    }
    function C(S) {
      const M = g.value?.key;
      M && (d.value = { ...d.value, [M]: S }, u.value = !1);
    }
    return (S, M) => (t(), n(z, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(qe)])
      }, [
        E(Te, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", bk, [
          (t(!0), n(z, null, j(e.tabs, (_) => (t(), n("button", {
            key: _.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === _.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === _.key ? "true" : "false",
            onClick: (m) => s.value = _.key
          }, c(_.label), 11, yk))), 128))
        ])) : $("", !0),
        o("div", xk, [
          E($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": M[0] || (M[0] = (_) => w(String(_)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(St)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: y
          }, " Clear ")) : $("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: M[1] || (M[1] = (_) => u.value = !0)
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
            k(St)(p.value) ? (t(), n("span", kk, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", $k, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: M[2] || (M[2] = (_) => i.value = "grid")
            }, " Tiles ", 10, wk),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: M[3] || (M[3] = (_) => i.value = "list")
            }, " List ", 10, Ck)
          ])
        ]),
        E(sa, {
          layout: i.value,
          "onUpdate:layout": M[4] || (M[4] = (_) => i.value = _),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: M[5] || (M[5] = (_) => r("select", _)),
          onCart: M[6] || (M[6] = (_) => r("cart", _))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      E(an, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: M[7] || (M[7] = (_) => u.value = !1),
        onApply: C,
        onReset: y
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), Sk = { class: "flex flex-col gap-4" }, Mk = { class: "flex flex-col gap-4" }, U8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(Ee()), i = x(
      () => a.cards.filter((d) => ra(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(qe)])
    }, [
      E(Te, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Sk, [
        E(Te, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(sa, {
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
      o("section", Mk, [
        E(Te, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        E(uo, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: f }) => [
            E(we, {
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
}), Bk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, _k = { class: "text-sm font-medium" }, Ak = ["width", "height", "aria-label"], Pk = { class: "flex items-center gap-2" }, zk = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(null), i = U(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function f(S) {
      const M = s.value;
      if (!M)
        return null;
      const _ = M.getBoundingClientRect(), m = M.width / _.width, v = M.height / _.height;
      return {
        x: (S.clientX - _.left) * m,
        y: (S.clientY - _.top) * v
      };
    }
    function g(S) {
      a.disabled || (i.value = !0, d = f(S), s.value?.setPointerCapture(S.pointerId));
    }
    function p(S) {
      if (!i.value || a.disabled)
        return;
      const M = u(), _ = f(S);
      !M || !_ || !d || (M.strokeStyle = "#111827", M.lineWidth = 2.4, M.lineCap = "round", M.lineJoin = "round", M.beginPath(), M.moveTo(d.x, d.y), M.lineTo(_.x, _.y), M.stroke(), d = _);
    }
    function h() {
      i.value = !1, d = null;
    }
    function w() {
      const S = s.value, M = u();
      !S || !M || (M.clearRect(0, 0, S.width, S.height), r("clear"));
    }
    function y() {
      const S = s.value;
      S && r("save", S.toDataURL("image/png"));
    }
    function C() {
      const S = s.value, M = u();
      !S || !M || (M.fillStyle = "#ffffff", M.fillRect(0, 0, S.width, S.height));
    }
    return ve(C), ke(() => {
      i.value = !1;
    }), (S, M) => (t(), n("div", Bk, [
      o("p", _k, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(g, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, Ak),
      o("div", Pk, [
        E(de, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: L(() => [...M[0] || (M[0] = [
            R(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
          size: "sm",
          disabled: e.disabled,
          onClick: y
        }, {
          default: L(() => [...M[1] || (M[1] = [
            R("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ok = { class: "grid gap-8 lg:grid-cols-2" }, Lk = { class: "flex flex-col gap-3" }, Vk = { class: "text-muted-foreground text-xs font-normal" }, jk = {
  key: 0,
  class: "flex flex-col gap-3"
}, Dk = { class: "flex flex-wrap gap-3" }, Tk = ["onClick"], Ek = ["src", "alt"], Ik = {
  key: 1,
  class: "flex flex-col gap-3"
}, Fk = { class: "flex flex-wrap gap-3" }, Nk = ["onClick"], Rk = ["src", "alt"], Uk = {
  key: 2,
  class: "flex flex-col gap-4"
}, Hk = { class: "flex flex-wrap items-center gap-2" }, Kk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, qk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Gk = { class: "flex flex-col gap-2" }, Wk = ["src"], Zk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Jk = ["src"], H8 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = U([]), r = U([]), s = U(null), i = U(null), d = U(null), u = U(l.documents[0]?.key ?? "");
    function f(S) {
      try {
        const M = localStorage.getItem(S), _ = M ? JSON.parse(M) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    ve(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), me(
      a,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.signatures`, JSON.stringify(S));
      },
      { deep: !0 }
    ), me(
      r,
      (S) => {
        !l.storageKey || typeof localStorage > "u" || localStorage.setItem(`${l.storageKey}.stamps`, JSON.stringify(S));
      },
      { deep: !0 }
    );
    function g(S) {
      const M = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: S
      };
      a.value = [M, ...a.value].slice(0, 8), s.value = M.id;
    }
    async function p(S, M) {
      await Mf(S), M(40);
      const _ = await new Promise((m, v) => {
        const b = new FileReader();
        b.onload = () => m(String(b.result)), b.onerror = () => v(new Error("Could not read the file")), b.readAsDataURL(S);
      });
      return M(100), { value: _, name: S.name, size: S.size, url: _ };
    }
    function h() {
      const S = d.value?.url ?? d.value?.value;
      if (!S)
        return;
      const M = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: S
      };
      r.value = [M, ...r.value].slice(0, 8), i.value = M.id;
    }
    const w = x(
      () => a.value.find((S) => S.id === s.value)?.dataUrl ?? null
    ), y = x(
      () => r.value.find((S) => S.id === i.value)?.dataUrl ?? null
    ), C = x(() => {
      const S = l.documents.find((_) => _.key === u.value)?.document ?? l.documents[0]?.document ?? {}, M = {
        ...S?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...S,
        branding: M
      };
    });
    return (S, M) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(qe)])
    }, [
      E(Te, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", Ok, [
        E(zk, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", Lk, [
          M[2] || (M[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", Vk, c(k(Ja)), 1),
          E(Ta, {
            modelValue: d.value,
            "onUpdate:modelValue": M[0] || (M[0] = (_) => d.value = _),
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
            default: L(() => [...M[1] || (M[1] = [
              R(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", jk, [
        E(Te, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", Dk, [
          (t(!0), n(z, null, j(a.value, (_) => (t(), n("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, Ek)
          ], 10, Tk))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), n("section", Ik, [
        E(Te, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", Fk, [
          (t(!0), n(z, null, j(r.value, (_) => (t(), n("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, Rk)
          ], 10, Nk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", Uk, [
        o("div", Hk, [
          (t(!0), n(z, null, j(e.documents, (_) => (t(), D(de, {
            key: _.key,
            size: "sm",
            variant: u.value === _.key ? "default" : "outline",
            onClick: (m) => u.value = _.key
          }, {
            default: L(() => [
              R(c(_.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", Kk, [
          E(Wv, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", qk, [
            o("div", Gk, [
              M[3] || (M[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              w.value ? (t(), n("img", {
                key: 0,
                src: w.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Wk)) : (t(), n("p", Zk, "Draw and save a signature"))
            ]),
            y.value ? (t(), n("img", {
              key: 0,
              src: y.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Jk)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), K8 = "panel.dashboard.hiddenWidgets", Yk = /* @__PURE__ */ Symbol("dashboardHide"), Xk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, q8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = yt(Yk, null), r = U(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = U(!1);
    ve(() => {
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
    const i = x(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? $("", !0) : (t(), n("div", Xk, [
      E(Tb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Qk = { class: "flex flex-col gap-3" }, e2 = ["data-slot"], t2 = ["aria-pressed", "aria-label", "title"], a2 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, n2 = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, l2 = { class: "flex h-8 items-center" }, o2 = ["aria-label", "title", "onClick"], s2 = ["aria-label", "title", "onClick"], r2 = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, i2 = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, G8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = U(a.maskable ? !a.hidden : !0), i = U(/* @__PURE__ */ new Set());
    function d(m) {
      return a.maskable && (m.sensitive ?? !0);
    }
    function u(m) {
      return d(m) && !s.value && !i.value.has(m.key);
    }
    const f = x(() => a.segments.some(u)), g = x(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = x(() => p[a.columns] ?? p[4]), w = x(() => {
      const m = a.columns ?? 4, v = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, v);
    }), y = x(() => {
      const m = a.columns ?? 4, v = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(v);
    }), C = x(() => {
      const m = [];
      return w.value.length > 0 && m.push({ key: "packed", joined: !0, segments: w.value }), y.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: y.value }), m;
    });
    function S() {
      const m = f.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function M(m) {
      if (!d(m))
        return;
      const v = new Set(i.value);
      if (u(m))
        v.add(m.key);
      else if (v.delete(m.key), s.value) {
        s.value = !1;
        for (const b of a.segments)
          b.key !== m.key && d(b) && v.add(b.key);
      }
      i.value = v, r("toggle", f.value);
    }
    function _(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, v) => (t(), n("div", Qk, [
      (t(!0), n(z, null, j(C.value, (b) => (t(), n("div", {
        key: b.key,
        class: P(["relative shrink-0", b.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": b.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && b.key === C.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: S
        }, [
          (t(), n("svg", a2, [
            f.value ? (t(), n(z, { key: 0 }, [
              v[0] || (v[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              v[1] || (v[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              v[2] || (v[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              v[3] || (v[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              v[4] || (v[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              v[5] || (v[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, t2)) : $("", !0),
        o("div", {
          class: P(["grid", [b.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, j(b.segments, (A) => (t(), n("div", {
            key: A.key,
            class: P(["bg-card flex flex-col gap-2 p-4", b.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", n2, c(A.label), 1),
            o("div", l2, [
              e.loading ? (t(), D(ze, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (I) => M(A)
              }, [
                (t(), n(z, null, j(5, (I) => o("span", {
                  key: I,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, o2)) : d(A) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${_(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (I) => M(A)
              }, c(_(A.value)), 9, s2)) : (t(), n("span", r2, c(_(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), D(tn, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), D(Pt, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            A.caption || A.comparison && A.trend ? (t(), n("p", i2, c(A.caption ?? A.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, e2))), 128))
    ]));
  }
}), d2 = ["aria-label"], u2 = ["aria-valuenow", "aria-label"], c2 = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, f2 = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, m2 = ["title"], p2 = { class: "font-medium" }, v2 = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, g2 = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, h2 = { class: "flex items-center justify-between gap-2" }, b2 = { class: "text-sm font-semibold" }, y2 = { class: "flex items-center gap-3" }, x2 = ["href"], k2 = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, $2 = { class: "flex min-w-0 flex-col gap-0.5" }, w2 = { class: "text-sm font-medium" }, C2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, S2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, M2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, B2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, _2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, W8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.items.find((C) => !C.done) ?? null), i = x(() => a.items.filter((C) => C.key !== s.value?.key)), d = x(() => a.items.length), u = x(() => a.items.filter((C) => C.done).length), f = x(() => {
      if (!s.value)
        return d.value;
      const C = a.items.findIndex((S) => S.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), g = x(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = x(() => {
      const C = a.linkComponent;
      return typeof C == "string" ? C : Sa(C);
    }), h = st({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), w = st({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), y = st({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, S) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
      ], 8, u2),
      o("div", c2, [
        o("span", f2, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", p2, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", v2, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, m2),
        s.value?.href ? (t(), D(Me(p.value), {
          key: 0,
          href: s.value.href,
          class: P(k(w))
        }, {
          default: L(() => [
            R(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: S[0] || (S[0] = (M) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, d2)) : e.items.length ? (t(), n("section", g2, [
      o("div", h2, [
        o("h2", b2, c(e.heading), 1),
        o("div", y2, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: S[1] || (S[1] = (M) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, x2)) : $("", !0)
        ])
      ]),
      s.value ? (t(), n("div", k2, [
        S[2] || (S[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", $2, [
          o("p", w2, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", C2, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), D(Me(p.value), {
            key: 1,
            href: s.value.href,
            class: P(k(h))
          }, {
            default: L(() => [
              R(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), n("ul", S2, [
        (t(!0), n(z, null, j(i.value, (M) => (t(), n("li", {
          key: M.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: P([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              M.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            M.done ? (t(), n("svg", M2, [...S[3] || (S[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", B2, [
            o("p", {
              class: P(["text-sm", M.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(M.title), 3),
            !M.done && M.detail ? (t(), n("p", _2, c(M.detail), 1)) : $("", !0)
          ]),
          !M.done && M.href ? (t(), D(Me(p.value), {
            key: 0,
            href: M.href,
            class: P(k(y))
          }, {
            default: L(() => [
              R(c(M.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), A2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, P2 = { class: "hidden items-center gap-2 md:flex" }, z2 = { class: "md:hidden" }, O2 = { class: "border-b px-4 py-3" }, L2 = { class: "text-muted-foreground text-xs font-normal" }, V2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, j2 = { class: "font-medium tabular-nums" }, D2 = { class: "ml-auto flex items-center gap-3" }, Z8 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = U(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", A2, [
      o("div", P2, [
        K(i.$slots, "actions")
      ]),
      o("div", z2, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        E(ea, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: L(() => [
            E(ta, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", O2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", L2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", V2, [
                  K(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", j2, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          R(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          R(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", D2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + c(s(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), T2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, E2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, I2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, F2 = ["value"], N2 = ["value"], R2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, U2 = ["disabled"], H2 = ["disabled"], K2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, q2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, G2 = ["disabled"], J8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (f) => new Intl.NumberFormat().format(f), i = x(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = x(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = x(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (f, g) => (t(), n("div", T2, [
      o("p", E2, [
        R(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          R("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", I2, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, j(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, c(p), 9, N2))), 128))
        ], 40, F2)
      ])) : $("", !0),
      o("nav", R2, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "First page",
          title: "First page",
          onClick: g[1] || (g[1] = (p) => r("first"))
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
        ])], 8, U2),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasPrevious || e.loading,
          "aria-label": "Previous page",
          title: "Previous page",
          onClick: g[2] || (g[2] = (p) => r("previous"))
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
        ])], 8, H2),
        o("span", K2, c(e.page), 1),
        u.value !== null ? (t(), n("span", q2, " of " + c(s(u.value)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-8 items-center justify-center rounded-full transition-colors disabled:pointer-events-none disabled:opacity-30",
          disabled: !e.hasNext || e.loading,
          "aria-label": "Next page",
          title: "Next page",
          onClick: g[3] || (g[3] = (p) => r("next"))
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
        ])], 8, G2)
      ])
    ]));
  }
}), W2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, Z2 = ["aria-current"], J2 = ["title"], Y2 = ["aria-current", "onClick"], X2 = ["title"], Q2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", W2, [
      o("button", {
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = R(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, J2)) : (t(), D(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Z2),
      (t(!0), n(z, null, j(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        R(c(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, X2)) : (t(), D(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, Y2))), 128))
    ]));
  }
}), Y8 = /* @__PURE__ */ Bt(Q2, [["__scopeId", "data-v-3967c945"]]), e$ = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, t$ = { class: "grid gap-2" }, a$ = {
  key: 0,
  class: "text-destructive text-sm"
}, n$ = { class: "flex gap-2" }, X8 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = U((() => {
      const w = navigator.userAgent, y = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: S }) => S.test(w))?.name, C = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: S }) => S.test(w))?.name;
      return [y, C].filter(Boolean).join(" on ") || "";
    })()), i = U(!1), d = pn(null), u = x(() => d.value?.isLoading.value ?? !1), f = x(() => d.value?.error.value ?? null), g = x(() => d.value?.isSupported.value ?? !1);
    ve(async () => {
      try {
        const { usePasskeyRegister: w } = await import("@laravel/passkeys/vue");
        d.value = w({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const p = async (w) => {
      w.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (w, y) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", t$, [
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
      f.value ? (t(), n("p", a$, c(f.value), 1)) : $("", !0),
      o("div", n$, [
        E(de, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: L(() => [
            R(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        E(de, {
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
    })) : (t(), n("p", e$, " Passkeys are not supported in this browser. "));
  }
}), l$ = { class: "pk-form-stack" }, o$ = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, Q8 = /* @__PURE__ */ O({
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
    Et("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), Et("panelCreateOption", {
      run(f, g) {
        return a.createOption ? a.createOption(f, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => a.errors._conflict);
    function u(f) {
      if (a.upload)
        return (g, p) => a.upload(f, g, p);
    }
    return (f, g) => (t(), n("div", l$, [
      d.value ? (t(), n("p", o$, c(d.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, j(e.nodes, (p, h) => (t(), D(Ia, {
        key: h,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (w, y) => r("change", w, y)),
        onAffixAction: g[1] || (g[1] = (w, y) => r("affix-action", w, y))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, j(e.fields, (p) => (t(), D(Xe, {
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
          class: P(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", p.key, h),
          onAffixAction: (h) => r("affix-action", p.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), s$ = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, r$ = ["disabled"], i$ = ["disabled"], d$ = ["disabled"], e6 = /* @__PURE__ */ O({
  __name: "UnsavedBar",
  props: {
    show: { type: Boolean },
    processing: { type: Boolean, default: !1 },
    message: { default: "Unsaved changes" },
    saveLabel: { default: "Save" },
    cancelLabel: { default: "Cancel" },
    discardLabel: {}
  },
  emits: ["save", "cancel", "discard"],
  setup(e) {
    const l = U(!1);
    ve(() => {
      l.value = !!document.getElementById("pk-main");
    });
    const a = x(() => l.value ? "#pk-main" : "body"), r = x(() => !l.value), s = x(
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4"
    );
    return (i, d) => (t(), D(ut, {
      to: a.value,
      disabled: r.value
    }, [
      E(Ye, {
        "enter-active-class": "transition duration-200 ease-out",
        "enter-from-class": "translate-y-3 opacity-0",
        "leave-active-class": "transition duration-150 ease-in",
        "leave-to-class": "translate-y-3 opacity-0"
      }, {
        default: L(() => [
          e.show ? (t(), n("div", {
            key: 0,
            class: P(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: P([
                k(co),
                "pointer-events-auto flex items-center gap-3 rounded-xl border bg-card/95 py-2.5 pr-2.5 pl-4 shadow-md ring-1 ring-black/5 backdrop-blur-sm dark:ring-white/10"
              ])
            }, [
              d[3] || (d[3] = o("span", {
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
              o("span", s$, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, r$)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, i$),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, d$)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function t6(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = U(Dt(e.value)), s = x(() => Dt(e.value) !== r.value);
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
const vt = /* @__PURE__ */ new Map();
function a6(e, l) {
  vt.set(e, l);
}
function u$(e) {
  return vt.get(e);
}
function n6(e) {
  return vt.has(e);
}
function c$() {
  return [...vt.keys()].sort();
}
function l6() {
  vt.clear();
}
const f$ = {
  key: 0,
  class: "flex flex-col gap-1"
}, m$ = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, p$ = { class: "text-foreground text-sm font-medium" }, v$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, g$ = {
  key: 5,
  class: "max-w-full font-normal"
}, h$ = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, b$ = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, y$ = {
  key: 6,
  class: "font-normal"
}, x$ = {
  key: 0,
  class: "divide-y rounded-md border"
}, k$ = { class: "text-muted-foreground truncate font-medium" }, $$ = { class: "text-foreground col-span-2 break-words" }, w$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, C$ = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, S$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, M$ = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, B$ = ["href"], _$ = { class: "flex min-w-0 items-start gap-2.5" }, A$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, P$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, z$ = ["d"], O$ = { class: "min-w-0" }, L$ = { class: "flex flex-wrap items-center gap-2" }, V$ = { class: "text-sm font-semibold" }, j$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, D$ = ["onClick"], o6 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(!a.node.collapsed), i = U(0), d = x(() => a.depth === 0), u = x(() => {
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
    }, g = x(() => a.node.key ? a.record[a.node.key] : null), p = x(() => {
      const M = g.value;
      return M == null || M === "";
    }), h = x(() => {
      if (p.value)
        return "None";
      const M = Number(g.value);
      if (Number.isNaN(M))
        return "None";
      const _ = a.node.divideBy ?? 100, m = M / _, v = a.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: v }).format(m);
      } catch {
        return `${v} ${m.toFixed(2)}`;
      }
    }), w = x(() => {
      if (p.value)
        return "None";
      const M = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(M)).toLocaleDateString(void 0, f[a.node.type]);
      if (a.node.type === "money")
        return h.value;
      let _ = String(M);
      return a.node.transform === "upper" && (_ = _.toUpperCase()), a.node.transform === "lower" && (_ = _.toLowerCase()), [a.node.prefix, _, a.node.suffix].filter(Boolean).join(" ");
    }), y = x(() => {
      const M = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), _ = a.node.colors?.[M] ?? a.node.defaultColor ?? "neutral";
      return aa[_] ?? "outline";
    }), C = x(() => {
      const M = typeof a.node.view == "string" ? a.node.view : "";
      return M ? u$(M) : void 0;
    }), S = x(() => {
      const M = typeof a.node.view == "string" ? a.node.view : "";
      if (!M)
        return "ViewEntry has no view name.";
      const _ = c$(), m = _.length > 0 ? _.join(", ") : "(none)";
      return `No entry view for [${M}]; registered: ${m}`;
    });
    return (M, _) => {
      const m = Gt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", f$, [
        o("dt", m$, c(e.node.label), 1),
        o("dd", p$, [
          e.node.type === "badge" && k(zu)(g.value) ? (t(), D(Ke, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: L(() => [
              R(c(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", v$, "None")) : e.node.type === "icon" ? (t(), D(lu, {
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
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", g$, [
            e.node.language ? (t(), n("p", h$, c(e.node.language), 1)) : $("", !0),
            o("pre", b$, [
              o("code", null, c(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", y$, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", x$, [
              (t(!0), n(z, null, j(g.value, (v, b) => (t(), n("div", {
                key: b,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", k$, c(b), 1),
                o("dd", $$, c(v), 1)
              ]))), 128))
            ])) : (t(), n("span", w$, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", C$, [
            (t(!0), n(z, null, j(Array.isArray(g.value) ? g.value : [], (v, b) => (t(), n("div", {
              key: b,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, j(e.node.entries ?? [], (A, I) => (t(), D(m, {
                key: I,
                node: A,
                record: v,
                depth: e.depth + 1,
                onAction: _[0] || (_[0] = (T) => r("action", T))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", S$, "None")) : $("", !0)
          ])) : e.node.type === "money" ? (t(), n("span", {
            key: 8,
            class: P(p.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), D(Me(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: g.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), n("p", M$, c(S.value), 1)) : e.node.url && !p.value ? (t(), n("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(w.value), 9, B$)) : (t(), n("span", {
            key: 12,
            class: P([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(w.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: _[1] || (_[1] = (v) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: P(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: _[2] || (_[2] = (v) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", _$, [
            e.node.icon ? (t(), n("div", A$, [
              (t(), n("svg", P$, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, z$)
              ]))
            ])) : $("", !0),
            o("div", O$, [
              o("div", L$, [
                o("h3", V$, c(e.node.label), 1),
                e.node.status ? (t(), D(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), n("p", j$, c(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (v, b) => (t(), D(m, {
            key: b,
            node: v,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[3] || (_[3] = (A) => r("action", A))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (v, b) => (t(), D(m, {
          key: b,
          node: v,
          record: e.record,
          depth: e.depth + 1,
          onAction: _[4] || (_[4] = (A) => r("action", A))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: P(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (v, b) => (t(), n("button", {
            key: b,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === b ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (A) => i.value = b
          }, c(v.label), 11, D$))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (v, b) => pe((t(), n("div", {
          key: b,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(v.children ?? [], (A, I) => (t(), D(m, {
            key: I,
            node: A,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[5] || (_[5] = (T) => r("action", T))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ue, i.value === b]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), T$ = { class: "text-muted-foreground text-sm font-normal" }, E$ = { class: "flex items-start gap-3" }, I$ = { class: "min-w-0 flex-1" }, F$ = { class: "flex flex-wrap items-center gap-2" }, N$ = { class: "truncate text-sm font-medium" }, R$ = { class: "text-muted-foreground mt-0.5 text-xs" }, U$ = { class: "text-muted-foreground text-xs font-normal" }, H$ = { class: "mt-auto flex items-center gap-2" }, K$ = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), n("div", {
      class: P(["flex flex-col gap-4", k(Za)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", T$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(k(hf))
      }, [
        (t(!0), n(z, null, j(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", E$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", I$, [
              o("div", F$, [
                o("h3", N$, c(u.label), 1),
                E(we, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    R(c(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), D(we, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...d[0] || (d[0] = [
                    R(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), D(we, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...d[1] || (d[1] = [
                    R(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.isDefault ? (t(), D(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...d[2] || (d[2] = [
                    R(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.connected && u.mode ? (t(), D(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: L(() => [
                    R(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", R$, c(u.caption), 1)
            ])
          ]),
          o("p", U$, c(u.methods.join(" · ")), 1),
          o("div", H$, [
            E(de, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: L(() => [...d[3] || (d[3] = [
                R(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            E(de, {
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
}), q$ = { class: "flex flex-col gap-6" }, G$ = { class: "relative" }, W$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Z$ = ["d"], J$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Y$ = {
  key: 0,
  class: "flex flex-col gap-4"
}, X$ = { class: "flex flex-wrap items-center gap-2" }, Q$ = { class: "text-muted-foreground text-sm font-normal" }, ew = { class: "flex flex-col gap-1 text-sm" }, tw = ["value"], aw = {
  key: 0,
  class: "flex flex-col gap-2"
}, nw = { class: "flex flex-wrap items-center gap-2" }, lw = {
  key: 1,
  class: "flex items-center gap-2"
}, s6 = /* @__PURE__ */ O({
  __name: "PaymentGatewaySettings",
  props: /* @__PURE__ */ Ie({
    title: { default: "Payment gateways" },
    description: { default: null },
    headingVariant: { default: "default" }
  }, {
    gateways: { default: () => [] },
    gatewaysModifiers: {}
  }),
  emits: ["update:gateways"],
  setup(e) {
    const l = ct(e, "gateways"), a = U(null), r = U(""), s = x(
      () => l.value.find((y) => y.key === a.value) ?? null
    ), i = x(() => {
      const y = r.value.trim().toLowerCase();
      return y === "" ? l.value : l.value.filter((C) => [C.key, C.label, C.caption, ...C.methods].join(" ").toLowerCase().includes(y));
    });
    function d(y) {
      return y.connected && y.enabled !== !1;
    }
    function u(y, C) {
      l.value = l.value.map(
        (S) => S.key === y ? { ...S, ...C } : S
      );
    }
    function f(y) {
      a.value = y;
    }
    function g(y) {
      const C = l.value.find((M) => M.key === y);
      if (!C)
        return;
      const S = !C.connected;
      u(y, {
        connected: S,
        mode: S ? C.mode ?? "test" : null,
        enabled: S,
        isDefault: !1
      });
    }
    function p(y, C) {
      const S = l.value.find((M) => M.key === y);
      S?.connected && u(y, { enabled: C, isDefault: C ? S.isDefault : !1 });
    }
    function h(y) {
      const C = l.value.find((S) => S.key === y);
      !C || !d(C) || (l.value = l.value.map((S) => ({
        ...S,
        isDefault: S.key === y
      })));
    }
    function w(y) {
      const C = a.value;
      !C || !l.value.find((M) => M.key === C)?.connected || u(C, { mode: y });
    }
    return (y, C) => (t(), n(z, null, [
      o("div", q$, [
        E(Te, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", G$, [
          (t(), n("svg", W$, [
            o("path", {
              d: k(ce)("search")
            }, null, 8, Z$)
          ])),
          E($e, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), D(K$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", J$, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      E(_t, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (S) => a.value = null)
      }, {
        footer: L(() => [
          E(de, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (S) => a.value = null)
          }, {
            default: L(() => [...C[21] || (C[21] = [
              R("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), D(de, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (S) => g(s.value.key))
          }, {
            default: L(() => [
              R(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", Y$, [
            o("div", X$, [
              E(we, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  R(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), D(we, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...C[9] || (C[9] = [
                  R(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), D(we, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...C[10] || (C[10] = [
                  R(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), D(we, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...C[11] || (C[11] = [
                  R(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), D(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  R(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", Q$, c(s.value.caption), 1),
            o("label", ew, [
              C[12] || (C[12] = R(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, tw)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              R(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", aw, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", nw, [
                E(de, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (S) => p(s.value.key, !0))
                }, {
                  default: L(() => [...C[13] || (C[13] = [
                    R(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(de, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (S) => p(s.value.key, !1))
                }, {
                  default: L(() => [...C[14] || (C[14] = [
                    R(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                E(de, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: C[3] || (C[3] = (S) => h(s.value.key))
                }, {
                  default: L(() => [...C[15] || (C[15] = [
                    R(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", lw, [
              E(de, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (S) => w("test"))
              }, {
                default: L(() => [...C[18] || (C[18] = [
                  R(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              E(de, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (S) => w("live"))
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
function wa(e) {
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
function r6(e) {
  const l = U(wa(e));
  ve(() => {
    l.value = wa(e);
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
function Ca(e) {
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
function i6(e) {
  const l = U(Ca(e));
  ve(() => {
    l.value = Ca(e);
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
function d6(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = U(
    l.driver === "none" ? "off" : "connecting"
  ), f = U(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, h, w, y = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function S(Z, N) {
    g.set(Z, { ...g.get(Z) ?? {}, ...N }), !p && (p = setTimeout(() => {
      p = void 0, M();
    }, l.batchMs));
  }
  function M() {
    if (g.size === 0)
      return;
    const Z = g;
    g = /* @__PURE__ */ new Map();
    const N = /* @__PURE__ */ new Set();
    for (const [W, J] of Z) {
      const G = a.value.find((q) => q[r] === W);
      if (!G) {
        d?.(W, J);
        continue;
      }
      Object.assign(G, J), N.add(W);
    }
    N.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...N]), setTimeout(() => {
      const W = new Set(f.value);
      N.forEach((J) => W.delete(J)), f.value = W;
    }, 1500));
  }
  async function _() {
    if (!(!s || a.value.length === 0)) {
      w?.abort(), w = new AbortController();
      try {
        const Z = a.value.map((J) => J[r]), { records: N, at: W } = await s(Z, y);
        y = W, u.value = "live";
        for (const J of N)
          S(J[r], J);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    v(), u.value = "live", h = setInterval(_, l.intervalMs);
  }
  function v() {
    clearInterval(h), h = void 0, w?.abort();
  }
  function b() {
    return window.Echo ?? null;
  }
  function A() {
    const Z = b();
    if (!Z || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
    const N = Z.private(l.channel);
    for (const W of l.events)
      N.listen(W, (J) => {
        J?.[r] !== void 0 && S(J[r], J);
      });
    u.value = "live", Z.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), Z.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function I() {
    C && (b()?.leave(C), C = null);
  }
  function T() {
    l.driver === "poll" && m(), l.driver === "broadcast" && A();
  }
  function te() {
    v(), I(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (y = (/* @__PURE__ */ new Date()).toISOString(), T(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (T(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: u, recentlyChanged: f, applyPatch: S, flush: M, pollOnce: _ };
}
const ow = /^[a-z0-9-]+$/, sw = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function u6(e) {
  vn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !ow.test(a) || typeof r != "string" || !sw.test(r) || (l[`--${a}`] = r);
    rc(l);
  });
}
const rw = { class: "flex items-center gap-0.5" }, iw = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", rw, [
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
}), dw = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), D(en, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), uw = { class: "flex flex-col gap-2" }, cw = { class: "bg-card rounded-lg border p-4" }, fw = { class: "text-muted-foreground truncate text-xs" }, mw = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, pw = /* @__PURE__ */ O({
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
    }, r = x(() => ({ ...a, ...l.field.limits ?? {} })), s = x(
      () => String(l.values[l.field.watch?.title ?? "seo_title"] ?? "").trim()
    ), i = x(
      () => String(l.values[l.field.watch?.description ?? "seo_description"] ?? "").trim()
    ), d = x(
      () => String(l.field.siteUrl ?? "").replace(/^https?:\/\//, "").replace(/\/+$/, "")
    ), u = x(() => {
      const C = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return C === "" ? d.value : `${d.value} › ${C.split("/").join(" › ")}`;
    });
    function f(C, S) {
      return C.length <= S ? C : `${C.slice(0, S - 1).trimEnd()}…`;
    }
    const g = x(() => f(s.value, r.value.titleMax)), p = x(() => f(i.value, r.value.descriptionMax));
    function h(C, S, M) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > M ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < S ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const w = x(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), y = x(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, S) => (t(), n("div", uw, [
      o("div", cw, [
        o("p", fw, c(u.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, c(g.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", mw, [
        o("span", {
          class: P(w.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(w.value.note), 3),
        o("span", {
          class: P(y.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(y.value.note), 3)
      ]),
      S[0] || (S[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), vw = ["value", "placeholder", "disabled"], gw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPhone",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => typeof a.modelValue == "string" ? a.modelValue : "");
    function i(d) {
      const u = d.target.value;
      r("update:modelValue", u === "" ? null : u.trim());
    }
    return (d, u) => (t(), n("input", {
      type: "tel",
      inputmode: "tel",
      autocomplete: "tel",
      class: P(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", k(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, vw));
  }
}), hw = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, bw = ["aria-selected", "disabled", "title", "onClick"], yw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkIconPicker",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => a.field.icons ?? []), i = x(() => typeof a.modelValue == "string" ? a.modelValue : "");
    function d(u) {
      a.disabled || r("update:modelValue", u === i.value ? null : u);
    }
    return (u, f) => (t(), n("div", hw, [
      (t(!0), n(z, null, j(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [k(Se), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (p) => d(g)
      }, c(g), 11, bw))), 128))
    ]));
  }
}), xw = {
  class: "relative",
  "data-test": "tree-select-field"
}, kw = ["disabled"], $w = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, ww = ["onClick"], Cw = ["onClick"], Sw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = U(""), i = U(!1), d = x(() => a.field.options ?? []);
    function u(h, w) {
      return !w || h.label.toLowerCase().includes(w) ? !0 : (h.children ?? []).some((y) => u(y, w));
    }
    const f = x(() => {
      const h = s.value.trim().toLowerCase();
      return h ? d.value.filter((w) => u(w, h)) : d.value;
    }), g = x(() => {
      const h = (w) => {
        for (const y of w) {
          if (y.value === a.modelValue)
            return y.label;
          const C = h(y.children ?? []);
          if (C)
            return C;
        }
        return null;
      };
      return h(d.value);
    });
    function p(h) {
      a.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, w) => (t(), n("div", xw, [
      o("button", {
        type: "button",
        class: P(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
        disabled: e.disabled,
        onClick: w[0] || (w[0] = (y) => i.value = !i.value)
      }, [
        o("span", {
          class: P(g.value ? "" : "text-muted-foreground")
        }, c(g.value ?? "Select…"), 3),
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, kw),
      i.value ? (t(), n("div", $w, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": w[1] || (w[1] = (y) => s.value = y),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), n(z, null, j(f.value, (y) => (t(), n(z, {
          key: String(y.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === y.value ? "bg-accent" : ""]),
            onClick: (C) => p(y.value)
          }, c(y.label), 11, ww),
          (t(!0), n(z, null, j(y.children ?? [], (C) => (t(), n("button", {
            key: String(C.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (S) => p(C.value)
          }, c(C.label), 11, Cw))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), Mw = ["aria-label"], Bw = ["disabled", "aria-label", "aria-pressed", "onClick"], _w = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, Aw = { key: 0 }, Pw = ["id"], zw = ["fill"], Ow = ["disabled"], Lw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkRating",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(() => Math.max(1, Math.min(10, Number(a.field.max ?? 5)))), i = x(() => !!a.field.allowHalf), d = x(() => {
      const g = Number(a.modelValue);
      return Number.isFinite(g) ? g : 0;
    });
    function u(g) {
      a.disabled || r("update:modelValue", g);
    }
    function f(g) {
      return d.value >= g ? "full" : i.value && d.value >= g - 0.5 ? "half" : "empty";
    }
    return (g, p) => (t(), n("div", {
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
        onClick: (w) => u(h)
      }, [
        (t(), n("svg", _w, [
          f(h) === "half" ? (t(), n("defs", Aw, [
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
            ])], 8, Pw)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, zw)
        ]))
      ], 8, Bw))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (h) => u(0))
      }, " Clear ", 8, Ow)) : $("", !0)
    ], 8, Mw));
  }
});
function Vw() {
  xe("radio", tp), xe("toggle-buttons", Ea), xe("checkboxlist", lp), xe("tags", cp), xe("colour", wp), xe("slider", av), xe("rating", Lw), xe("phone", gw), xe("icon-picker", yw), xe("tree-select", Sw), xe("visual-select", vv), xe("markdown", Vm), xe("code", Nm), xe("map", _p), xe("qrcode", Lp), xe("barcode", Fp), xe("diff", Up), xe("seo-preview", pw), jt("swatch", hv), jt("voucher-code-box", dw), jt("document-colour-mode", iw);
}
function nn() {
  const e = U(null), l = U(!1);
  let a = null;
  return ve(() => {
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
const jw = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = nn();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      K(r.$slots, "default")
    ], 6));
  }
}), Dw = ["id"], Be = /* @__PURE__ */ O({
  __name: "PkSection",
  props: {
    muted: { type: Boolean, default: !1 },
    narrow: { type: Boolean, default: !1 },
    id: {}
  },
  setup(e) {
    return (l, a) => (t(), n("section", {
      id: e.id,
      class: P(["w-full px-4 py-16 sm:px-6 sm:py-24", e.muted ? "bg-muted/40" : ""])
    }, [
      o("div", {
        class: P(["mx-auto w-full", e.narrow ? "max-w-3xl" : "max-w-6xl"])
      }, [
        E(jw, null, {
          default: L(() => [
            K(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, Dw));
  }
}), Tw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, Ew = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, Iw = {
  key: 2,
  class: "max-w-2xl text-pretty text-muted-foreground"
}, Ve = /* @__PURE__ */ O({
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
      class: P(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", Tw, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", Ew, c(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", Iw, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), Fw = { class: "flex flex-col gap-10" }, Nw = { class: "grid gap-4 md:grid-cols-3" }, Rw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, Uw = { class: "text-sm font-semibold text-balance" }, Hw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, Kw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", Fw, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Nw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), D(Me(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", Rw, c(r.meta), 1)) : $("", !0),
                  o("h3", Uw, c(r.title), 1),
                  r.body ? (t(), n("p", Hw, c(r.body), 1)) : $("", !0)
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
function qw() {
  const e = U(null);
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
  return ve(() => {
    typeof window < "u" && typeof window.matchMedia == "function" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(hover: hover)").matches) || !e.value || (l = e.value, r(), l.addEventListener("pointermove", a, { passive: !0 }), l.addEventListener("pointerleave", r, { passive: !0 }));
  }), ke(() => {
    l?.removeEventListener("pointermove", a), l?.removeEventListener("pointerleave", r);
  }), { el: e };
}
const Gw = { class: "pk-tilt-inner relative h-full" }, Ww = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = qw();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", Gw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        K(a.$slots, "default")
      ])
    ], 512));
  }
}), Zw = { class: "flex flex-col gap-10" }, Jw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Yw = { class: "text-base font-semibold" }, Xw = { class: "text-sm text-pretty text-muted-foreground" }, Qw = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", Zw, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Jw, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), D(Ww, {
              key: i,
              class: P(l(s.span))
            }, {
              default: L(() => [
                o("div", {
                  class: P([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", Yw, c(s.title), 1),
                  o("p", Xw, c(s.body), 1)
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
}), e4 = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, t4 = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, a4 = { class: "grid gap-4 text-sm" }, n4 = {
  key: 0,
  class: "grid gap-1"
}, l4 = ["href"], o4 = {
  key: 1,
  class: "grid gap-1"
}, s4 = ["href"], r4 = {
  key: 2,
  class: "grid gap-1"
}, i4 = { class: "text-pretty text-muted-foreground" }, d4 = ["href"], u4 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", e4, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", t4, [
            o("dl", a4, [
              e.email ? (t(), n("div", n4, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, l4)
                ])
              ])) : $("", !0),
              e.phone ? (t(), n("div", o4, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, s4)
                ])
              ])) : $("", !0),
              e.address ? (t(), n("div", r4, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", i4, c(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, d4)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), c4 = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, f4 = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, m4 = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, p4 = ["href"], v4 = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", c4, [
          o("h2", f4, c(e.title), 1),
          e.body ? (t(), n("p", m4, c(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, p4)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), g4 = { class: "flex flex-col gap-8" }, h4 = { class: "divide-y rounded-lg border" }, b4 = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, y4 = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, x4 = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, { narrow: "" }, {
      default: L(() => [
        o("div", g4, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", h4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", b4, [
                R(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", y4, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), k4 = { class: "flex flex-col gap-10" }, $4 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, w4 = { class: "text-sm font-semibold" }, C4 = { class: "text-sm text-pretty text-muted-foreground" }, S4 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", k4, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", $4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", w4, c(r.title), 1),
              o("p", C4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), M4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, B4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, _4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, A4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, P4 = ["href"], z4 = ["href"], O4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, L4 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", {
          class: P(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", M4, c(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), n("p", B4, c(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), n("p", _4, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", A4, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, P4)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, z4)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", O4, c(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), V4 = { class: "flex flex-col items-center gap-6" }, j4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, D4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, T4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, { muted: "" }, {
      default: L(() => [
        o("div", V4, [
          e.title ? (t(), n("p", j4, c(e.title), 1)) : $("", !0),
          o("ul", D4, [
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
}), E4 = { class: "flex flex-col gap-10" }, I4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, F4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, N4 = ["aria-pressed"], R4 = ["aria-pressed"], U4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, H4 = { class: "grid gap-4 md:grid-cols-3" }, K4 = { class: "flex flex-col gap-1" }, q4 = { class: "text-sm font-semibold" }, G4 = { class: "flex items-baseline gap-1" }, W4 = { class: "text-3xl font-semibold tracking-tight" }, Z4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, J4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, Y4 = { class: "flex flex-col gap-2 text-sm" }, X4 = { class: "text-muted-foreground" }, Q4 = ["href"], e5 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = U(!1), r = x(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), D(Be, { muted: "" }, {
      default: L(() => [
        o("div", E4, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", I4, [
            o("div", F4, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, N4),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, R4)
            ]),
            e.annualNote ? (t(), n("p", U4, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", H4, [
            (t(!0), n(z, null, j(e.items ?? [], (u, f) => (t(), n("li", {
              key: f,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", K4, [
                o("h3", q4, c(u.name), 1),
                o("p", G4, [
                  o("span", W4, c(s(u)), 1),
                  u.period ? (t(), n("span", Z4, c(u.period), 1)) : $("", !0)
                ]),
                u.body ? (t(), n("p", J4, c(u.body), 1)) : $("", !0)
              ]),
              o("ul", Y4, [
                (t(!0), n(z, null, j(u.features ?? [], (g, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", X4, c(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, Q4)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function t5() {
  const e = U(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), f = u.height + window.innerHeight, g = f <= 0 ? 0 : (window.innerHeight - u.top) / f;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(g, 0), 1)));
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
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((f) => {
        s = f.some((g) => g.isIntersecting), s && d();
      }), a.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const a5 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, n5 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, l5 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, o5 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, s5 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, r5 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, i5 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, d5 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, u5 = { class: "ml-3 truncate text-xs text-muted-foreground" }, c5 = { class: "flex" }, f5 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, m5 = { class: "min-w-0 flex-1 p-4" }, p5 = { class: "flex flex-col divide-y rounded-md border" }, v5 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = t5();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", a5, [
        o("div", n5, [
          o("div", l5, [
            o("h2", o5, c(e.title), 1),
            e.body ? (t(), n("p", s5, c(e.body), 1)) : $("", !0)
          ]),
          o("div", r5, [
            o("div", i5, [
              o("div", d5, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", u5, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", c5, [
                o("div", f5, [
                  (t(), n(z, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", m5, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", p5, [
                    (t(!0), n(z, null, j(e.rows, (s) => (t(), n("div", {
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
}), g5 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = nn(), s = U(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), f = (g) => {
        const p = Math.min((g - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(f) : s.value = l.to;
      };
      requestAnimationFrame(f);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), h5 = { class: "flex flex-col gap-10" }, b5 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, y5 = { class: "order-2 text-sm text-muted-foreground" }, x5 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, k5 = /* @__PURE__ */ O({
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
      default: L(() => [
        o("div", h5, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", b5, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", y5, c(s.label), 1),
              o("dd", x5, [
                l(s.value) ? (t(), D(g5, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
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
}), $5 = { class: "flex flex-col gap-10" }, w5 = { class: "grid gap-6 md:grid-cols-3" }, C5 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, S5 = { class: "text-sm font-semibold" }, M5 = { class: "text-sm text-pretty text-muted-foreground" }, B5 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", $5, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", w5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", C5, c(s + 1), 1),
              o("h3", S5, c(r.title), 1),
              o("p", M5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), _5 = { class: "flex flex-col gap-10" }, A5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, P5 = ["src"], z5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, O5 = { class: "min-w-0" }, L5 = { class: "truncate text-sm font-semibold" }, V5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, j5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, D5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", _5, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", A5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, P5)) : (t(), n("span", z5, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", O5, [
                o("h3", L5, c(r.name), 1),
                r.role ? (t(), n("p", V5, c(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), n("p", j5, c(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), T5 = { class: "flex flex-col gap-10" }, E5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, I5 = { class: "text-pretty text-sm leading-relaxed" }, F5 = { class: "mt-auto flex items-center gap-3" }, N5 = ["src"], R5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, U5 = { class: "min-w-0" }, H5 = { class: "block truncate text-sm font-medium" }, K5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, q5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), D(Be, null, {
      default: L(() => [
        o("div", T5, [
          E(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", E5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", I5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", F5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, N5)) : (t(), n("span", R5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", U5, [
                  o("span", H5, c(r.name), 1),
                  r.role ? (t(), n("span", K5, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), c6 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: L4,
      logos: T4,
      features: S4,
      bento: Qw,
      showcase: v5,
      steps: B5,
      stats: k5,
      testimonials: q5,
      team: D5,
      articles: Kw,
      contact: u4,
      pricing: e5,
      faq: x4,
      cta: v4
    }, s = x(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, j(s.value, (u) => (t(), D(Me(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), G5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, f6 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", G5, [
      o("div", {
        class: P([
          "pk-blob absolute -top-32 -left-24 size-[38rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-60 dark:opacity-40" : "opacity-30 dark:opacity-20"
        ]),
        style: { background: "radial-gradient(circle at 30% 30%, var(--pk-aurora-1), transparent 70%)", "animation-delay": "0s" }
      }, null, 2),
      o("div", {
        class: P([
          "pk-blob absolute -top-16 right-0 size-[32rem] rounded-full blur-3xl",
          e.intensity === "full" ? "opacity-50 dark:opacity-35" : "opacity-25 dark:opacity-15"
        ]),
        style: { background: "radial-gradient(circle at 60% 40%, var(--pk-aurora-2), transparent 70%)", "animation-delay": "-7s" }
      }, null, 2),
      o("div", {
        class: P([
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
}), W5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, m6 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", W5, [...a[0] || (a[0] = [
      Mt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), Z5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, p6 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", Z5, [...a[0] || (a[0] = [
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
}), J5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, v6 = /* @__PURE__ */ O({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", J5, [...a[0] || (a[0] = [
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
Vw();
const g6 = "0.0.1";
export {
  ca as ACTION_KEY_ICONS,
  Rt as APPEARANCE_STYLE_ID,
  O8 as AdminDirectory,
  uf as Alert,
  cf as AlertDescription,
  ff as AlertTitle,
  h8 as AppPageFooter,
  V3 as AppearanceDrawer,
  LC as Avatar,
  VC as AvatarFallback,
  jC as AvatarImage,
  aa as BADGE_VARIANTS,
  _3 as BadgeResolver,
  S8 as BarChart,
  DC as Breadcrumb,
  TC as BreadcrumbEllipsis,
  EC as BreadcrumbItem,
  IC as BreadcrumbLink,
  FC as BreadcrumbList,
  NC as BreadcrumbPage,
  RC as BreadcrumbSeparator,
  u3 as BulkActions,
  Za as CATALOGUE_CONTAINER,
  hf as CATALOGUE_GRID,
  N3 as CATALOGUE_GRID_TIGHT,
  bf as CATALOGUE_GRID_TILES,
  r8 as Card,
  i8 as CardAction,
  d8 as CardContent,
  u8 as CardDescription,
  c8 as CardFooter,
  f8 as CardHeader,
  m8 as CardTitle,
  B0 as CartPanel,
  R8 as CatalogBrowser,
  G1 as CatalogCard,
  an as CatalogFilterSheet,
  sa as CatalogGrid,
  F8 as CatalogInspect,
  gk as CatalogItemDetail,
  N8 as CatalogItemView,
  U8 as CatalogRegister,
  I8 as CatalogTill,
  bb as ChartCard,
  pt as ChartTooltip,
  ei as Checkbox,
  $3 as CheckboxCell,
  w3 as CodeCell,
  pu as ColourCell,
  P8 as ComboChart,
  Qr as CreateOptionDialog,
  Gr as CreateOptionError,
  K8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  Yk as DASHBOARD_HIDE_KEY,
  q8 as DashboardShortcuts,
  uo as DataTable,
  JC as Dialog,
  YC as DialogClose,
  XC as DialogContent,
  QC as DialogDescription,
  e8 as DialogFooter,
  t8 as DialogHeader,
  Zf as DialogOverlay,
  a8 as DialogScrollContent,
  n8 as DialogTitle,
  l8 as DialogTrigger,
  O8 as DirectoryPage,
  yC as DropdownMenu,
  xC as DropdownMenuCheckboxItem,
  kC as DropdownMenuContent,
  $C as DropdownMenuGroup,
  wC as DropdownMenuItem,
  CC as DropdownMenuLabel,
  y6 as DropdownMenuPortal,
  SC as DropdownMenuRadioGroup,
  MC as DropdownMenuRadioItem,
  BC as DropdownMenuSeparator,
  _C as DropdownMenuShortcut,
  AC as DropdownMenuSub,
  PC as DropdownMenuSubContent,
  zC as DropdownMenuSubTrigger,
  OC as DropdownMenuTrigger,
  M3 as EditableCell,
  Se as FOCUS_RING,
  c3 as FOCUS_RING_SOFT,
  ma as FOCUS_RING_WITHIN,
  co as FORM_MEASURE,
  Xe as FormFieldControl,
  z8 as HeatmapChart,
  pl as ICON_ALIASES,
  bt as ICON_PATHS,
  Re as INPUT_COPY,
  Yr as INPUT_PLACEHOLDER,
  Jr as INPUT_TEXT,
  lu as IconCell,
  du as ImageCell,
  o6 as InfoNode,
  kf as JPEG_IMAGE_ERROR,
  C3 as KeyValueCell,
  o8 as Label,
  jg as LineChart,
  r0 as LineItems,
  i3 as MODAL_PANEL,
  d3 as MODAL_PANEL_FORM,
  xt as MODAL_WIDTH,
  b3 as MUTED_COPY,
  ht as MUTED_COPY_SNUG,
  y3 as MUTED_COPY_XS,
  Ct as MiniStatCard,
  UC as NavigationMenu,
  HC as NavigationMenuContent,
  KC as NavigationMenuIndicator,
  qC as NavigationMenuItem,
  GC as NavigationMenuLink,
  WC as NavigationMenuList,
  ZC as NavigationMenuTrigger,
  Gf as NavigationMenuViewport,
  xf as OPAQUE_IMAGE_ERROR,
  Da as OVERLAY_FORM_MEASURE,
  qe as PAGE_SHELL,
  s3 as PAGE_SHELL_COMPACT,
  r3 as PAGE_SHELL_STACK,
  s6 as PaymentGatewaySettings,
  K$ as PaymentGateways,
  M8 as PieChart,
  I3 as PkAlertError,
  Kw as PkArticles,
  f6 as PkAuroraBackdrop,
  Ke as PkBadge,
  Fp as PkBarcode,
  Qw as PkBento,
  j3 as PkBottomNav,
  p8 as PkBoundary,
  x8 as PkBuilder,
  de as PkButton,
  k8 as PkCalendar,
  v8 as PkCard,
  lp as PkCheckboxList,
  en as PkCodeBox,
  Nm as PkCodeInput,
  wp as PkColourPicker,
  p6 as PkConsoleBackdrop,
  u4 as PkContact,
  g5 as PkCountUp,
  v4 as PkCta,
  b8 as PkDeviceFrame,
  Up as PkDiff,
  Wv as PkDocument,
  Ze as PkDropdown,
  m6 as PkEditorialBackdrop,
  It as PkEmptyState,
  x4 as PkFaq,
  S4 as PkFeatureGrid,
  Pe as PkFieldLabel,
  Ta as PkFileUpload,
  Te as PkHeading,
  L4 as PkHero,
  _i as PkKeyValue,
  c6 as PkLandingSections,
  T4 as PkLogoCloud,
  Sp as PkMap,
  _p as PkMapField,
  Vm as PkMarkdownInput,
  dt as PkModal,
  Qt as PkMultiSelect,
  T3 as PkOtpInput,
  E3 as PkPageHeader,
  X8 as PkPasskeyRegister,
  F3 as PkPasswordInput,
  e5 as PkPricing,
  Lp as PkQrCode,
  Jx as PkQtyStepper,
  gs as PkQueryBuilder,
  tp as PkRadioGroup,
  y8 as PkRepeater,
  jw as PkReveal,
  Ei as PkRichEditor,
  Be as PkSection,
  Ve as PkSectionHeading,
  v5 as PkShowcase,
  zk as PkSignaturePad,
  ze as PkSkeleton,
  _t as PkSlideover,
  av as PkSlider,
  D3 as PkSpinner,
  k5 as PkStats,
  we as PkStatusBadge,
  Kr as PkStepIndicator,
  B5 as PkSteps,
  v6 as PkStudioBackdrop,
  hv as PkSwatchPreview,
  cp as PkTagsInput,
  D5 as PkTeam,
  q5 as PkTestimonials,
  $e as PkTextInput,
  Ww as PkTiltCard,
  Ea as PkToggleButtons,
  vv as PkVisualSelect,
  xy as PlanCard,
  T8 as PlanEditor,
  D8 as PlanGrid,
  E8 as PlanPurchaseCard,
  A8 as PolarAreaChart,
  _8 as RadarChart,
  k3 as RatingCell,
  A3 as RecordActions,
  Q8 as RecordForm,
  x3 as RelationCreateDialog,
  m3 as RelationPanel,
  fo as SLIDEOVER_BODY,
  mo as SLIDEOVER_WIDTH,
  C1 as STATUS_TONES,
  B8 as ScatterChart,
  Ia as SchemaNode,
  V8 as SegmentedBar,
  Z8 as SelectionBar,
  Rf as Separator,
  W8 as SetupChecklist,
  Wa as ShadcnInput,
  ea as Sheet,
  q3 as SheetClose,
  ta as SheetContent,
  Bf as SheetDescription,
  G3 as SheetFooter,
  _f as SheetHeader,
  Af as SheetTitle,
  W3 as SheetTrigger,
  Tb as ShortcutsWidget,
  Z3 as Sidebar,
  J3 as SidebarContent,
  Y3 as SidebarFooter,
  X3 as SidebarGroup,
  Q3 as SidebarGroupAction,
  eC as SidebarGroupContent,
  tC as SidebarGroupLabel,
  aC as SidebarHeader,
  nC as SidebarInput,
  lC as SidebarInset,
  oC as SidebarMenu,
  sC as SidebarMenuAction,
  rC as SidebarMenuBadge,
  dC as SidebarMenuButton,
  uC as SidebarMenuItem,
  cC as SidebarMenuSkeleton,
  fC as SidebarMenuSub,
  mC as SidebarMenuSubButton,
  pC as SidebarMenuSubItem,
  vC as SidebarProvider,
  gC as SidebarRail,
  hC as SidebarSeparator,
  bC as SidebarTrigger,
  H8 as SignatureStudio,
  Pt as Sparkline,
  s8 as Spinner,
  L8 as StatCard,
  j8 as StatListChart,
  G8 as StatStrip,
  We as Switch,
  Ja as TRANSPARENT_IMAGE_HELP,
  J8 as TablePagination,
  qo as TableShell,
  Y8 as TableTabs,
  wr as TableToolbar,
  S3 as TagsCell,
  C8 as ThemeToggle,
  If as Tooltip,
  Ff as TooltipContent,
  iC as TooltipProvider,
  Nf as TooltipTrigger,
  tn as TrendBadge,
  e6 as UnsavedBar,
  mf as alertVariants,
  oc as appearancePayload,
  Ua as appearanceVars,
  Ut as applyAppearance,
  Mf as assertTransparentImage,
  z3 as bootstrapAppearance,
  st as buttonClasses,
  St as catalogFiltersActive,
  ae as cn,
  Zr as createOptionActionLabel,
  Wr as createOptionTitle,
  W1 as cycleLabel,
  Ee as emptyCatalogFilters,
  u$ as entryView,
  qr as fieldControl,
  h3 as fieldErrorsFromPayload,
  Lx as findExactSku,
  Z1 as formatPerkValue,
  zu as hasBadgeValue,
  n6 as hasEntryView,
  p3 as hasFieldControl,
  $8 as hasOptionPreview,
  ce as iconPath,
  Cf as imageHasTransparency,
  Ha as initializeAppearance,
  la as isDark,
  ra as matchCatalogItem,
  H3 as mergeLayoutItems,
  Wf as navigationMenuTriggerStyle,
  nv as optionPreview,
  R3 as packWidgetColumns,
  U3 as parseWidgetId,
  J1 as perkGranted,
  oa as readAppearance,
  sc as readServerAppearance,
  Vw as registerBuiltInFieldControls,
  a6 as registerEntryView,
  xe as registerFieldControl,
  jt as registerOptionPreview,
  c$ as registeredEntryViews,
  v3 as registeredFieldTypes,
  lv as registeredOptionPreviews,
  P3 as resetAppearanceBootstrapForTests,
  l6 as resetEntryViews,
  g3 as resetFieldControls,
  w8 as resetOptionPreviews,
  ot as resolveActionIcon,
  L3 as setAppearancePersister,
  Uf as sidebarMenuButtonVariants,
  _1 as statusBadgeVariant,
  B1 as statusTone,
  O3 as syncAppearanceFromInertiaPage,
  K3 as toPersistedLayout,
  f3 as toUrl,
  Ga as useAppearance,
  r6 as useColumnVisibility,
  i6 as useColumnWidths,
  d6 as useLiveUpdates,
  qw as usePointer,
  nn as useReveal,
  B3 as useSchemaColumns,
  t5 as useScrollProgress,
  g8 as useShellPageFooter,
  At as useSidebar,
  u6 as useTenantTheme,
  t6 as useUnsavedChanges,
  g6 as version,
  ga as widgetId
};
//# sourceMappingURL=index.js.map
