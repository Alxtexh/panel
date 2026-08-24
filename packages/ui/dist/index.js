import './ui.css';
import { defineComponent as O, useSlots as Ft, openBlock as t, createElementBlock as n, normalizeClass as P, unref as x, renderSlot as U, createElementVNode as o, toDisplayString as f, createCommentVNode as $, computed as y, normalizeStyle as se, Fragment as z, renderList as V, ref as R, watch as me, useId as nn, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Nt, createBlock as T, createSlots as rt, withCtx as L, nextTick as Te, onBeforeUnmount as ke, Teleport as Qe, Transition as Ue, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Rt, vModelSelect as We, vModelDynamic as ln, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as sa, inject as ht, vShow as He, onUnmounted as on, isRef as sn, useTemplateRef as rn, onErrorCaptured as dn, provide as Ot, markRaw as ka, withKeys as un, reactive as it, useModel as ut, mergeModels as Ie, shallowRef as cn, watchEffect as fn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as $a, DialogOverlay as Ut, DialogPortal as Ht, DialogContent as Kt, DialogClose as et, CheckboxRoot as mn, CheckboxIndicator as pn, SwitchRoot as vn, SwitchThumb as gn, DialogDescription as wa, DialogTitle as Ca, DialogTrigger as Sa, createContext as hn, Primitive as tt, TooltipRoot as bn, TooltipPortal as yn, TooltipContent as xn, TooltipArrow as kn, TooltipProvider as Ma, TooltipTrigger as $n, Separator as wn, DropdownMenuRoot as Cn, DropdownMenuCheckboxItem as Sn, DropdownMenuItemIndicator as Ba, DropdownMenuPortal as Mn, DropdownMenuContent as Bn, DropdownMenuGroup as _n, useForwardProps as Le, DropdownMenuItem as An, DropdownMenuLabel as Pn, DropdownMenuRadioGroup as zn, DropdownMenuRadioItem as On, DropdownMenuSeparator as Ln, DropdownMenuSub as Vn, DropdownMenuSubContent as jn, DropdownMenuSubTrigger as Tn, DropdownMenuTrigger as Dn, AvatarRoot as En, AvatarFallback as In, AvatarImage as Fn, NavigationMenuViewport as Nn, NavigationMenuRoot as Rn, NavigationMenuContent as Un, NavigationMenuIndicator as Hn, NavigationMenuItem as Kn, NavigationMenuLink as qn, NavigationMenuList as Gn, NavigationMenuTrigger as Wn, Label as Zn } from "reka-ui";
import { DropdownMenuPortal as I8 } from "reka-ui";
import { X as qt, Check as _a, AlertCircle as Jn, EyeOff as Yn, Eye as Xn, PanelLeftOpen as Qn, PanelLeftClose as el, Circle as tl, ChevronRight as Aa, MoreHorizontal as al, ChevronDown as nl, Loader2Icon as ll } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Pa, useMediaQuery as ol, useEventListener as sl, defaultDocument as rl } from "@vueuse/core";
import { clsx as il } from "clsx";
import { twMerge as dl } from "tailwind-merge";
import { cva as Gt } from "class-variance-authority";
import { usePage as za, Link as ul } from "@inertiajs/vue3";
const gt = {
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
}, cl = {
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
}, ra = {
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
}, ia = {
  success: "coins",
  danger: "trash",
  warning: "alert",
  primary: "activity",
  info: "info",
  gray: "circle"
};
function ce(e) {
  if (!e)
    return gt.dot;
  const l = cl[e] ?? e;
  return gt[l] ?? gt.dot;
}
function ot(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== gt.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = ra[l] ?? ra[l.replace(/_/g, "-")];
    if (s)
      return ce(s);
  }
  const a = fl(e.label);
  if (a)
    return ce(a);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && ia[r] ? ce(ia[r]) : ce("circle");
}
function fl(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const ml = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, pl = ["d"], vl = { class: "flex max-w-sm flex-col gap-1" }, gl = {
  key: 0,
  class: "text-sm font-normal"
}, hl = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Lt = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Ft();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      x(l).illustration ? (t(), n("div", ml, [
        U(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: P(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
        "aria-hidden": "true"
      }, [
        U(a.$slots, "icon", {}, () => [
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
              d: x(ce)(e.icon)
            }, null, 8, pl)
          ], 2))
        ])
      ], 2)),
      o("div", vl, [
        o("p", {
          class: P(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, f(e.title), 3),
        e.description ? (t(), n("p", gl, f(e.description), 1)) : $("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", hl, [
        U(a.$slots, "actions")
      ])) : $("", !0)
    ], 2));
  }
}), bl = ["aria-label"], ze = /* @__PURE__ */ O({
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
      style: se(e.height ? { height: `${e.height}px` } : void 0)
    }, [
      (t(!0), n(z, null, V(s.value, (c) => (t(), n("span", {
        key: c,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(c - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, bl));
  }
}), yl = { class: "w-full border-collapse text-sm" }, xl = { class: "bg-background sticky top-0 z-10" }, kl = {
  key: 0,
  class: "bg-muted/40"
}, $l = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, wl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Cl = ["colspan"], Sl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ml = { class: "bg-muted/50" }, Bl = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, _l = ["id", "checked", "indeterminate"], Al = ["onClick"], Pl = {
  key: 0,
  class: "text-xs"
}, zl = {
  key: 1,
  class: "text-xs opacity-40"
}, Ol = { key: 1 }, Ll = ["aria-label", "onPointerdown"], Vl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, jl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Tl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Dl = {
  key: 1,
  class: "px-3 py-2.5"
}, El = {
  key: 2,
  class: "px-2 py-2.5"
}, Il = {
  key: 0,
  class: "bg-muted/40"
}, Fl = ["colspan"], Nl = ["aria-expanded", "dusk", "onClick"], Rl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Ul = {
  key: 1,
  dusk: "group-header"
}, Hl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Kl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, ql = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Gl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Wl = ["aria-label", "onClick"], Zl = { class: "text-xs" }, Jl = {
  key: 1,
  class: "text-muted-foreground"
}, Yl = { key: 2 }, Xl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Ql = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, eo = { key: 0 }, to = { class: "text-muted-foreground block text-[10px] font-medium" }, ao = { class: "font-semibold tabular-nums" }, no = { key: 1 }, lo = 40, oo = /* @__PURE__ */ O({
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
    function r(W) {
      if (!W || !a.groupBy)
        return "";
      if (W.__group !== void 0 && W.__group !== null)
        return String(W.__group);
      const te = W[a.groupBy.key];
      return te == null || te === "" ? "" : String(te);
    }
    function s(W) {
      return a.groupBy ? W === 0 ? !0 : r(a.rows[W]) !== r(a.rows[W - 1]) : !1;
    }
    function i(W) {
      if (W.__groupTitle)
        return String(W.__groupTitle);
      const te = a.groupBy ? W[a.groupBy.key] : null, X = te == null || te === "" ? "None" : String(te);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? X : `${a.groupBy.label}: ${X}`;
    }
    const d = R(/* @__PURE__ */ new Set()), u = R(/* @__PURE__ */ new Set());
    function c(W) {
      return a.groupBy?.collapsible ? d.value.has(W) : !1;
    }
    function v(W) {
      if (!a.groupBy?.collapsible)
        return;
      const te = new Set(u.value);
      te.add(W), u.value = te;
      const X = new Set(d.value);
      X.has(W) ? X.delete(W) : X.add(W), d.value = X;
    }
    function p(W) {
      return a.groupBy?.collapsible ? !c(r(a.rows[W])) : !0;
    }
    me(
      () => a.rows,
      (W) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const te = new Set(d.value);
        for (const X of W) {
          const de = r(X);
          de !== "" && !u.value.has(de) && te.add(de);
        }
        d.value = te;
      },
      { immediate: !0 }
    );
    const g = R(null), C = R(null);
    function b(W, te) {
      g.value = W, te.dataTransfer?.setData("text/plain", String(W)), te.dataTransfer && (te.dataTransfer.effectAllowed = "move");
    }
    function k() {
      g.value = null, C.value = null;
    }
    function M(W) {
      return g.value === null || C.value !== W ? "" : g.value > W ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function S(W, te) {
      g.value !== null && (te.preventDefault(), C.value = W);
    }
    function B(W) {
      const te = g.value;
      if (g.value = null, C.value = null, te === null || te === W)
        return;
      const X = a.rows.map((ie) => ie[a.rowKey]), [de] = X.splice(te, 1);
      X.splice(W, 0, de), m("reorder", X);
    }
    const m = l;
    function h(W, te) {
      !a.rowClickable || a.reordering || te.button !== 0 || te.metaKey || te.ctrlKey || te.shiftKey || te.altKey || te.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", W);
    }
    const w = R(null), A = nn(), E = y(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = y(() => {
      const W = E.value.find((te) => te.sticky);
      return W ? W.key : a.stickyFirst && E.value.length > 0 ? E.value[0].key : null;
    });
    function ae(W) {
      return I.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${lo}px` : "0";
    }
    function K(W) {
      const te = a.columnWidths?.[W.key];
      return typeof te == "number" ? te : W.width;
    }
    function q(W) {
      const te = K(W), X = ae(W), de = {};
      return te !== void 0 && (de.width = `${te}px`, de.minWidth = `${te}px`, de.maxWidth = `${te}px`), X && (de.left = H()), Object.keys(de).length ? de : void 0;
    }
    function oe(W) {
      return a.resizable ? W.resizable !== !1 : !1;
    }
    function ne(W, te) {
      if (!oe(W))
        return;
      te.preventDefault(), te.stopPropagation();
      const X = te.clientX, de = K(W) ?? 160, ie = te.currentTarget;
      try {
        ie.setPointerCapture(te.pointerId);
      } catch {
      }
      function Ke(nt) {
        const Mt = de + (nt.clientX - X);
        m("resize", W.key, Math.min(1200, Math.max(48, Mt)));
      }
      function Ne(nt) {
        try {
          ie.releasePointerCapture(nt.pointerId);
        } catch {
        }
        ie.removeEventListener("pointermove", Ke), ie.removeEventListener("pointerup", Ne), ie.removeEventListener("pointercancel", Ne);
      }
      ie.addEventListener("pointermove", Ke), ie.addEventListener("pointerup", Ne), ie.addEventListener("pointercancel", Ne);
    }
    const Z = y(() => E.value.some((W) => !!W.group)), G = y(() => {
      const W = [];
      for (const te of E.value) {
        const X = te.group ?? null, de = W[W.length - 1];
        de && de.label === X ? de.span += 1 : W.push({ label: X, span: 1, key: `${X ?? "loose"}-${te.key}` });
      }
      return W;
    });
    function _(W) {
      const te = W[a.rowKey];
      return te == null || te === "" ? null : te;
    }
    function F(W) {
      const te = _(W);
      return te !== null && !!a.selected?.has(te);
    }
    const j = R(null);
    function J(W) {
      return a.rows.findIndex((te) => {
        const X = _(te);
        return X !== null && X === W;
      });
    }
    function ge(W, te) {
      const X = _(W);
      if (X === null)
        return;
      const de = te.shiftKey, ie = !!a.selected?.has(X);
      if (de && j.value !== null && j.value !== X) {
        const Ke = J(j.value), Ne = J(X);
        if (Ke !== -1 && Ne !== -1) {
          const nt = Math.min(Ke, Ne), Mt = Math.max(Ke, Ne), an = !ie;
          for (let pt = nt; pt <= Mt; pt++) {
            if (!p(pt))
              continue;
            const Bt = _(a.rows[pt]);
            if (Bt === null)
              continue;
            !!a.selected?.has(Bt) !== an && m("toggle-row", Bt);
          }
          j.value = X;
          return;
        }
      }
      m("toggle-row", X), j.value = X;
    }
    const ye = y(
      () => a.rows.map((W) => _(W)).filter((W) => W !== null)
    ), le = y(
      () => ye.value.length > 0 && ye.value.every((W) => a.selected?.has(W))
    ), Y = y(
      () => !le.value && ye.value.some((W) => a.selected?.has(W))
    );
    function ee(W) {
      return W.sortKey ?? W.key;
    }
    function Ce(W) {
      return a.sort === ee(W);
    }
    async function la(W, te, X) {
      try {
        await navigator.clipboard.writeText(String(X)), w.value = `${W}-${te.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const en = y(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function oa(W) {
      return a.summaries?.[W] ?? null;
    }
    function tn(W) {
      const te = a.summaries?.[W], X = a.summaryValues?.[W];
      if (!te)
        return "";
      if (X == null)
        return "None";
      const de = te.divideBy ? X / te.divideBy : X, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: te.decimals,
        maximumFractionDigits: te.decimals
      }).format(de);
      return `${te.prefix ?? ""}${ie}${te.suffix ?? ""}`;
    }
    return (W, te) => (t(), n("div", {
      class: P(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", yl, [
        o("thead", xl, [
          Z.value ? (t(), n("tr", kl, [
            e.reordering ? (t(), n("th", $l)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", wl)) : $("", !0),
            (t(!0), n(z, null, V(G.value, (X) => (t(), n("th", {
              key: X.key,
              colspan: X.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, f(X.label ?? ""), 9, Cl))), 128)),
            W.$slots.actions ? (t(), n("th", Sl)) : $("", !0)
          ])) : $("", !0),
          o("tr", Ml, [
            e.reordering ? (t(), n("th", Bl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: P(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${x(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: le.value,
                indeterminate: Y.value,
                "aria-label": "Select all rows on this page",
                onClick: te[0] || (te[0] = he(() => {
                }, ["stop"])),
                onChange: te[1] || (te[1] = he((X) => m("toggle-page", !le.value), ["stop"]))
              }, null, 40, _l)
            ], 2)) : $("", !0),
            (t(!0), n(z, null, V(E.value, (X) => (t(), n("th", {
              key: X.key,
              class: P([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                ae(X) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(q(X))
            }, [
              X.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => m("sort", ee(X))
              }, [
                N(f(X.label) + " ", 1),
                Ce(X) ? (t(), n("span", Pl, f(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", zl, "↕"))
              ], 8, Al)) : (t(), n("span", Ol, f(X.label), 1)),
              oe(X) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${X.label}`,
                onPointerdown: (de) => ne(X, de)
              }, null, 40, Ll)) : $("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", Vl, [...te[2] || (te[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", jl, [
          (t(), n(z, null, V(6, (X) => o("tr", {
            key: `skel-${X}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Tl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Dl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            (t(!0), n(z, null, V(E.value, (de) => (t(), n("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              D(ze, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", El, [
              D(ze, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : $("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: P(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, V(e.rows, (X, de) => (t(), n(z, {
            key: _(X) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Il, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !c(r(X)),
                  dusk: `group-header-${r(X) || "none"}`,
                  onClick: (ie) => v(r(X))
                }, [
                  o("span", Rl, f(c(r(X)) ? "▸" : "▾"), 1),
                  N(" " + f(i(X)), 1)
                ], 8, Nl)) : (t(), n("span", Ul, f(i(X)), 1))
              ], 8, Fl)
            ])) : $("", !0),
            p(de) ? (t(), n("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                g.value === de ? "opacity-40" : "",
                M(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => b(de, ie),
              onDragover: (ie) => S(de, ie),
              onDrop: he((ie) => B(de), ["prevent"]),
              onDragend: k,
              onContextmenu: (ie) => m("row-contextmenu", X, ie),
              onClick: (ie) => h(X, ie)
            }, [
              e.reordering ? (t(), n("td", Kl, [...te[3] || (te[3] = [
                Nt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: P(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${x(A)}-row-${_(X) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: _(X) ?? void 0,
                  checked: F(X),
                  disabled: _(X) === null,
                  "aria-label": _(X) === null ? "This row has no id and cannot be selected" : `Select row ${_(X)}`,
                  onClick: he((ie) => ge(X, ie), ["stop"])
                }, null, 8, ql)
              ], 2)) : $("", !0),
              (t(!0), n(z, null, V(E.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: P(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  ae(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: se(q(ie))
              }, [
                U(W.$slots, `cell:${ie.key}`, {
                  row: X,
                  value: X[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), n("span", Gl, [
                    N(f(X[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => la(String(X[e.rowKey]), ie, X[ie.key])
                    }, [
                      o("span", Zl, f(w.value === `${X[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Wl)
                  ])) : X[ie.key] == null || X[ie.key] === "" ? (t(), n("span", Jl, "None")) : (t(), n("span", Yl, f(X[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Xl, [
                U(W.$slots, "actions", { row: X }, void 0, !0)
              ])) : $("", !0)
            ], 42, Hl)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        en.value ? (t(), n("tfoot", Ql, [
          o("tr", null, [
            e.selectable ? (t(), n("td", eo)) : $("", !0),
            (t(!0), n(z, null, V(e.columns, (X) => (t(), n(z, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                oa(X.key) ? (t(), n(z, { key: 0 }, [
                  o("span", to, f(oa(X.key).label), 1),
                  o("span", ao, f(tn(X.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", no)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Lt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, rt({ _: 2 }, [
        W.$slots["clear-filters"] ? {
          name: "actions",
          fn: L(() => [
            U(W.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Lt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, rt({ _: 2 }, [
        W.$slots["empty-actions"] ? {
          name: "actions",
          fn: L(() => [
            U(W.$slots, "empty-actions", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["icon", "title", "description"])) : $("", !0)
    ], 2));
  }
}), wt = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, so = /* @__PURE__ */ wt(oo, [["__scopeId", "data-v-c0f7d40f"]]), Ge = "w-full min-w-0 px-4 py-6 sm:px-6", L5 = "w-full min-w-0 p-3 sm:p-4", V5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", ro = "w-full max-w-7xl", io = "px-4 py-4", Oa = "w-full min-w-0", uo = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, co = "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", fo = "bg-popover text-popover-foreground flex w-full max-w-xl max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", mo = ["aria-busy", "aria-label"], po = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, vo = { class: "text-base font-semibold" }, go = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, ho = {
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
    const a = e, r = l, s = R(null);
    let i = null;
    const d = R(!1), u = y(() => a.size === "form" ? fo : co);
    function c(g) {
      d.value = g.target === g.currentTarget;
    }
    function v(g) {
      d.value && g.target === g.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function p(g) {
      if (!a.open)
        return;
      if (g.key === "Escape" && !a.busy) {
        g.stopPropagation(), r("close");
        return;
      }
      if (g.key !== "Tab" || !s.value)
        return;
      const C = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (C.length === 0)
        return;
      const b = C[0], k = C[C.length - 1];
      g.shiftKey && document.activeElement === b ? (g.preventDefault(), k.focus()) : !g.shiftKey && document.activeElement === k && (g.preventDefault(), b.focus());
    }
    return me(
      () => a.open,
      (g) => {
        g ? (i = document.activeElement, document.addEventListener("keydown", p), Te(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (g, C) => (t(), T(Qe, { to: "body" }, [
      D(Ue, {
        "enter-active-class": "transition duration-100 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-75 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-[8vh] backdrop-blur-sm",
            onPointerdown: c,
            onPointerup: v
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
              o("div", po, [
                o("h2", vo, f(e.title), 1),
                e.description ? (t(), n("p", go, f(e.description), 1)) : $("", !0)
              ]),
              o("div", {
                class: P(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", x(Oa)])
              }, [
                U(g.$slots, "default")
              ], 2),
              g.$slots.footer ? (t(), n("div", ho, [
                U(g.$slots, "footer")
              ])) : $("", !0)
            ], 10, mo)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), bo = 160, Je = /* @__PURE__ */ O({
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
    const a = e, r = R(!1), s = R(null), i = R(null), d = R({ top: 0, left: 0, minWidth: 0 }), u = R(null);
    let c = null;
    function v(h) {
      !a.dismissOnPanelClick || h.target?.closest("input, select, textarea, label, [data-keep-open]") || k();
    }
    async function p() {
      c && (clearTimeout(c), c = null), !r.value && (r.value = !0, await Te(), M());
    }
    function g() {
      c = setTimeout(k, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Te(), M());
    }
    async function b(h, w) {
      u.value = { x: h, y: w }, r.value = !0, await Te(), M();
    }
    function k() {
      r.value = !1, u.value = null;
    }
    function M() {
      const h = s.value, w = i.value;
      if (!h || !w)
        return;
      const A = w.getBoundingClientRect(), E = 8, I = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : h.getBoundingClientRect();
      let ae, H;
      if (a.placement === "bottom")
        ae = I.bottom + a.offset, ae + A.height > window.innerHeight - E && I.top - A.height - a.offset > E && (ae = I.top - A.height - a.offset), H = a.align === "end" && !u.value ? I.right - A.width : I.left;
      else {
        ae = I.top;
        const K = a.placement === "right", q = I.right + a.offset + A.width < window.innerWidth - E, oe = I.left - a.offset - A.width > E;
        H = (K ? q || !oe : !oe && q) ? I.right + a.offset : I.left - a.offset - A.width;
      }
      H = Math.min(Math.max(E, H), window.innerWidth - A.width - E), ae = Math.min(Math.max(E, ae), window.innerHeight - A.height - E), d.value = { top: ae, left: H, minWidth: Math.max(I.width, bo) };
    }
    function S(h) {
      if (!r.value)
        return;
      const w = h.target;
      s.value?.contains(w) || i.value?.contains(w) || (w instanceof Element ? w : w.parentElement)?.closest("[data-pk-overlay]") || k();
    }
    function B(h) {
      h.key === "Escape" && r.value && (h.stopPropagation(), k());
    }
    function m() {
      if (r.value) {
        if (u.value) {
          k();
          return;
        }
        M();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", S), document.addEventListener("keydown", B), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ke(() => {
      c && clearTimeout(c), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", B), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: k, openAt: b }), (h, w) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: w[2] || (w[2] = (A) => e.hoverable && p()),
      onPointerleave: w[3] || (w[3] = (A) => e.hoverable && g())
    }, [
      o("div", { onClick: C }, [
        U(h.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(Qe, { to: "body" }, [
        D(Ue, {
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
              onPointerenter: w[0] || (w[0] = (A) => e.hoverable && p()),
              onPointerleave: w[1] || (w[1] = (A) => e.hoverable && g()),
              onClick: v
            }, [
              U(h.$slots, "panel", { close: k })
            ], 38)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), yo = ["disabled"], xo = { class: "py-0.5" }, ko = ["disabled", "onClick"], $o = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wo = ["d"], Co = { class: "min-w-0 flex-1 truncate" }, So = ["disabled"], Mo = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bo = ["d"], _o = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, Ao = ["disabled", "onClick"], Po = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zo = ["d"], Oo = { class: "min-w-0 flex-1 truncate" }, Lo = { class: "text-muted-foreground text-sm font-normal" }, Vo = { class: "text-foreground font-medium tabular-nums" }, jo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, To = ["disabled"], Do = { class: "text-muted-foreground text-sm font-normal" }, Eo = { class: "text-foreground font-medium tabular-nums" }, Io = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Fo = ["disabled"], j5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = y(() => a.allMatching ? a.total : a.count), u = y(() => d.value !== void 0), c = y(() => u.value && d.value === 0), v = y(() => a.actions.filter((B) => !B.destructive)), p = y(() => a.actions.filter((B) => B.destructive)), g = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(B) {
      return g[B.color ?? "gray"] ?? g.gray;
    }
    function b(B) {
      if (B.confirmation) {
        s.value = B;
        return;
      }
      r("run", B.key);
    }
    function k() {
      s.value && r("run", s.value.key), s.value = null;
    }
    function M() {
      i.value = !1, r("export");
    }
    const S = (B) => new Intl.NumberFormat().format(B);
    return (B, m) => (t(), n(z, null, [
      D(Je, null, {
        trigger: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-50",
            disabled: e.busy,
            "aria-haspopup": "menu"
          }, [...m[5] || (m[5] = [
            N(" Bulk actions ", -1),
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
          ])], 8, yo)
        ]),
        panel: L(() => [
          o("div", xo, [
            (t(!0), n(z, null, V(v.value, (h) => (t(), n("button", {
              key: h.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(h)]),
              disabled: e.busy,
              onClick: (w) => b(h)
            }, [
              (t(), n("svg", $o, [
                o("path", {
                  d: x(ot)(h)
                }, null, 8, wo)
              ])),
              o("span", Co, f(h.label), 1)
            ], 10, ko))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (h) => i.value = !0)
            }, [
              (t(), n("svg", Mo, [
                o("path", {
                  d: x(ce)("download")
                }, null, 8, Bo)
              ])),
              m[6] || (m[6] = N(" Export CSV ", -1))
            ], 8, So)) : $("", !0),
            p.value.length ? (t(), n("div", _o, [
              (t(!0), n(z, null, V(p.value, (h) => (t(), n("button", {
                key: h.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (w) => b(h)
              }, [
                (t(), n("svg", Po, [
                  o("path", {
                    d: x(ot)({ ...h, destructive: !0 })
                  }, null, 8, zo)
                ])),
                o("span", Oo, f(h.label), 1)
              ], 8, Ao))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      D(dt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (h) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (h) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || c.value,
            onClick: k
          }, f(s.value?.label), 11, To)
        ]),
        default: L(() => [
          o("p", Lo, [
            m[7] || (m[7] = N(" This will affect ", -1)),
            o("span", Vo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[8] || (m[8] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", jo, " Nothing matches the current filters - there is nothing to " + f(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(dt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (h) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || c.value,
            onClick: M
          }, " Export CSV ", 8, Fo)
        ]),
        default: L(() => [
          o("p", Do, [
            m[9] || (m[9] = N(" This will export ", -1)),
            o("span", Eo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(f(S(d.value)) + " record" + f(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[10] || (m[10] = N(" . ", -1))
          ]),
          c.value ? (t(), n("p", Io, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), No = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, Ro = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Uo = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Ho = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Ko = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", No, [
      l.$slots.tabs ? (t(), n("div", Ro, [
        U(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.title ? (t(), n("div", Uo, [
        U(l.$slots, "title")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Ho, [
        U(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", da = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", T5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", qo = ["aria-expanded"], Go = ["aria-label", "onClick"], Wo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Zo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Jo = {
  key: 0,
  class: "border-b p-1"
}, Yo = ["placeholder"], Xo = { class: "max-h-60 overflow-y-auto p-1" }, Qo = ["aria-selected", "onMouseenter", "onClick"], es = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Wt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), c = R(""), v = R(0), p = R({ top: 0, left: 0, width: 0 }), g = y(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = y(() => a.searchable ?? a.options.length > 6), b = y(() => {
      const H = new Set(a.modelValue), K = c.value.trim().toLowerCase();
      return a.options.filter((q) => !H.has(q.value)).filter((q) => K ? q.label.toLowerCase().includes(K) : !0);
    }), k = y(() => a.max !== null && a.modelValue.length >= a.max);
    function M() {
      const H = s.value, K = i.value;
      if (!H || !K)
        return;
      const q = H.getBoundingClientRect(), oe = K.getBoundingClientRect(), ne = 8;
      let Z = q.bottom + 4;
      Z + oe.height > window.innerHeight - ne && q.top - oe.height - 4 > ne && (Z = q.top - oe.height - 4), p.value = {
        top: Z,
        left: Math.min(Math.max(ne, q.left), window.innerWidth - q.width - ne),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: q.width
      };
    }
    async function S() {
      a.disabled || u.value || (u.value = !0, c.value = "", v.value = 0, await Te(), M(), d.value?.focus());
    }
    function B() {
      u.value = !1, c.value = "";
    }
    function m() {
      u.value ? B() : S();
    }
    function h(H) {
      k.value || (r("update:modelValue", [...a.modelValue, H.value]), c.value = "", v.value = 0, Te(() => {
        M(), d.value?.focus();
      }));
    }
    function w(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Te(M);
    }
    function A() {
      r("update:modelValue", []), Te(M);
    }
    function E(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), B();
          return;
        }
        if (H.key === "Backspace" && c.value === "" && a.modelValue.length > 0) {
          w(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), S();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), v.value = Math.min(v.value + 1, b.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), v.value = Math.max(v.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = b.value[v.value];
            K && h(K);
          }
        }
      }
    }
    function I(H) {
      if (!u.value)
        return;
      const K = H.target;
      s.value?.contains(K) || i.value?.contains(K) || B();
    }
    function ae() {
      u.value && M();
    }
    return me(b, (H) => {
      v.value > H.length - 1 && (v.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", I), window.addEventListener("scroll", ae, !0), window.addEventListener("resize", ae);
    }), ke(() => {
      document.removeEventListener("pointerdown", I), window.removeEventListener("scroll", ae, !0), window.removeEventListener("resize", ae);
    }), (H, K) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: E
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
        (t(!0), n(z, null, V(g.value, (q) => (t(), n("span", {
          key: q.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(f(q.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${q.label}`,
            onClick: he((oe) => w(q.value), ["stop"])
          }, [...K[1] || (K[1] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "3"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, Go)
        ]))), 128)),
        g.value.length === 0 ? (t(), n("span", Wo, f(e.placeholder), 1)) : $("", !0),
        o("span", Zo, [
          g.value.length > 1 ? (t(), n("button", {
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
          }, [...K[2] || (K[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, qo),
      (t(), T(Qe, { to: "body" }, [
        D(Ue, {
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
              C.value ? (t(), n("div", Jo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (q) => c.value = q),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, Yo), [
                  [Ae, c.value]
                ])
              ])) : $("", !0),
              o("div", Xo, [
                (t(!0), n(z, null, V(b.value, (q, oe) => (t(), n("button", {
                  key: q.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === v.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === v.value,
                  onMouseenter: (ne) => v.value = oe,
                  onClick: (ne) => h(q)
                }, f(q.label), 43, Qo))), 128)),
                b.value.length === 0 ? (t(), n("p", es, [
                  k.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : c.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + f(c.value) + "”.", 1)
                  ], 64)) : (t(), n(z, { key: 2 }, [
                    N("Everything is selected.")
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
}), ts = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", as = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, ns = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function st(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [ts, as[l], ns[a], e.class].filter(Boolean).join(" ");
}
const ue = /* @__PURE__ */ O({
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
      () => st({ variant: l.variant, size: l.size, class: l.class })
    ), r = y(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(_e(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: P(a.value)
    }, {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), ls = { class: "flex items-center gap-2" }, os = ["onUpdate:modelValue", "onChange"], ss = ["value"], rs = ["onUpdate:modelValue"], is = ["value"], ds = ["onUpdate:modelValue"], us = ["onUpdate:modelValue", "multiple"], cs = ["value"], fs = ["onUpdate:modelValue", "type"], ms = ["aria-label", "onClick"], ps = { class: "flex items-center gap-2" }, vs = /* @__PURE__ */ O({
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = R(a.modelValue ? structuredClone(a.modelValue) : s());
    me(
      () => a.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const d = (m) => "rules" in m, u = y(() => Object.keys(a.fields));
    function c(m) {
      const h = m ? a.fields[m]?.kind : void 0;
      return h ? a.operators[h] ?? [] : [];
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
    function g() {
      const m = u.value[0];
      i.value.rules.push({
        field: m,
        operator: c(m)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function b(m) {
      i.value.rules.splice(m, 1), p();
    }
    function k(m) {
      m.operator = c(m.field)[0], m.value = void 0, p();
    }
    const M = y(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), p(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, h) => {
      const w = Rt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", ls, [
          pe(o("select", {
            "onUpdate:modelValue": h[0] || (h[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...h[1] || (h[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [We, i.value.logic]
          ]),
          h[2] || (h[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, V(i.value.rules, (A, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), T(w, {
            key: 0,
            modelValue: i.value.rules[E],
            "onUpdate:modelValue": [(I) => i.value.rules[E] = I, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (I) => A.field = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (I) => k(A)
            }, [
              (t(!0), n(z, null, V(u.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(e.fields[I].label), 9, ss))), 128))
            ], 40, os), [
              [We, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => A.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, V(c(A.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(v[I] ?? I), 9, is))), 128))
            ], 40, rs), [
              [We, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => A.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...h[3] || (h[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, ds)), [
              [We, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => A.value = I,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, V(e.fields[A.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, f(I), 9, cs))), 128))
            ], 40, us)), [
              [We, A.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => A.value = I,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, fs)), [
              [ln, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (I) => b(E)
          }, " × ", 8, ms)
        ]))), 128)),
        o("div", ps, [
          D(ue, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: g
          }, {
            default: L(() => [...h[4] || (h[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          M.value ? (t(), T(ue, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: C
          }, {
            default: L(() => [...h[5] || (h[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            h[8] || (h[8] = o("span", { class: "flex-1" }, null, -1)),
            D(ue, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: L(() => [...h[6] || (h[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(ue, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: L(() => [...h[7] || (h[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), Zt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x($a), re({ "data-slot": "sheet" }, x(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return dl(il(e));
}
function D5(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const gs = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Ut), re({
      "data-slot": "sheet-overlay",
      class: x(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, x(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jt = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Ht), null, {
      default: L(() => [
        D(gs),
        D(x(Kt), re({
          "data-slot": "sheet-content",
          class: x(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...x(i) }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(x(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                D(x(qt), { class: "size-4" }),
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
}), hs = { class: "flex flex-col gap-2" }, bs = { class: "flex items-center gap-2 md:hidden" }, ys = { class: "relative min-w-0 flex-1" }, xs = ["placeholder", "title", "aria-label"], ks = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, $s = { class: "flex max-h-[85vh] flex-col" }, ws = { class: "flex-1 overflow-y-auto px-4 py-3" }, Cs = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Ss = { class: "text-xs font-medium" }, Ms = ["value", "onChange"], Bs = ["value"], _s = { class: "mb-4" }, As = { class: "flex flex-col gap-1" }, Ps = ["disabled", "onClick"], zs = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, Os = {
  key: 1,
  class: "mb-4"
}, Ls = { class: "flex flex-col gap-1" }, Vs = ["onClick"], js = { class: "border-t p-4" }, Ts = ["disabled"], Ds = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Es = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Is = ["placeholder", "title", "aria-label"], Fs = ["aria-label"], Ns = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Rs = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Us = { class: "text-xs font-medium" }, Hs = ["value", "onChange"], Ks = ["value"], qs = { class: "grid grid-cols-2 gap-2" }, Gs = ["value", "onChange"], Ws = ["value", "onChange"], Zs = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Js = ["value", "onChange"], Ys = ["value", "onChange"], Xs = {
  key: 4,
  class: "flex items-center gap-2"
}, Qs = ["aria-checked", "onClick"], er = { class: "text-xs" }, tr = ["onClick"], ar = ["value", "onChange"], nr = ["value"], lr = ["disabled", "onClick"], or = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, sr = ["disabled", "onClick"], rr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ir = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, dr = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, ur = ["aria-pressed", "aria-label", "title", "onClick"], cr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, mr = ["aria-pressed", "aria-label", "title"], pr = ["aria-label", "title"], vr = { class: "flex flex-col gap-0.5 p-1" }, gr = ["onClick"], hr = ["onClick"], br = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, yr = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, xr = ["dusk"], kr = ["aria-label", "onClick"], $r = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = R(a.search);
    me(
      () => a.search,
      (G) => {
        G !== i.value && (i.value = G);
      }
    );
    let d;
    me(i, (G) => {
      clearTimeout(d), d = setTimeout(() => {
        G !== a.search && r("update:search", G);
      }, 250);
    });
    const u = R({ ...a.filters });
    me(
      () => a.filters,
      (G) => {
        u.value = { ...G };
      },
      { deep: !0 }
    );
    const c = y(
      () => a.filterSchema.filter(
        (G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0
      ).length
    ), v = y(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = y(() => a.search !== "" || c.value > 0), g = y(() => a.indicators.length ? a.indicators : a.filterSchema.filter((G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0).map((G) => ({
      key: G.key,
      label: `${G.label}: ${String(a.filters[G.key])}`,
      removable: !0
    })));
    function C(G) {
      r("group", G);
    }
    function b(G) {
      r("clear-filter", G);
    }
    function k(G) {
      return G.type === "multiselect";
    }
    function M(G) {
      const _ = u.value[G.key];
      return Array.isArray(_) ? _ : _ == null ? [] : [_];
    }
    function S(G) {
      return M(G).filter(
        (_) => typeof _ == "string" || typeof _ == "number"
      );
    }
    function B(G) {
      return H(G).flatMap(
        (_) => typeof _.value == "string" || typeof _.value == "number" ? [{ value: _.value, label: _.label }] : []
      );
    }
    function m(G, _) {
      u.value = { ...u.value, [G.key]: _ === "" ? null : _ };
    }
    function h(G, _) {
      const F = u.value[G.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [j, J] = F.split("..");
      return _ === "from" ? j ?? "" : J ?? "";
    }
    function w(G, _, F) {
      const j = _ === "from" ? F : h(G, "from"), J = _ === "to" ? F : h(G, "to");
      u.value = {
        ...u.value,
        [G.key]: j && J ? `${j}..${J}` : null
      };
    }
    function A(G, _, F) {
      const j = _ === "from" ? F : h(G, "from"), J = _ === "to" ? F : h(G, "to");
      u.value = {
        ...u.value,
        [G.key]: j || J ? `${j}..${J}` : null
      };
    }
    function E(G) {
      r("apply-filters", { ...u.value }), G();
    }
    function I(G, _) {
      u.value[G] = _, r("apply-filters", { ...u.value });
    }
    function ae() {
      u.value = Object.fromEntries(a.filterSchema.map((G) => [G.key, null]));
    }
    function H(G) {
      return G.type === "boolean" ? [
        { value: !0, label: G.trueLabel ?? "Yes" },
        { value: !1, label: G.falseLabel ?? "No" }
      ] : G.type === "daterange" ? Object.entries(G.presets ?? {}).map(([_, F]) => ({
        value: _,
        label: F
      })) : (G.options ?? []).map(
        (_) => typeof _ == "object" && _ !== null && "value" in _ ? { value: _.value, label: _.label } : { value: _, label: String(_) }
      );
    }
    const K = R(new Set(a.hidden));
    me(
      () => a.hidden,
      (G) => {
        K.value = new Set(G);
      },
      { deep: !0 }
    );
    function q(G) {
      const _ = new Set(K.value);
      _.has(G) ? _.delete(G) : _.add(G), K.value = _, r("apply-columns", [..._]);
    }
    function oe() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ne() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function Z() {
      i.value = "", r("clear");
    }
    return (G, _) => (t(), n("div", hs, [
      o("div", bs, [
        o("div", ys, [
          _[9] || (_[9] = o("svg", {
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
            "onUpdate:modelValue": _[0] || (_[0] = (F) => i.value = F),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, xs), [
            [Ae, i.value]
          ])
        ]),
        o("button", {
          type: "button",
          dusk: "mobile-table-tools",
          class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm",
          onClick: _[1] || (_[1] = (F) => s.value = !0)
        }, [
          _[10] || (_[10] = o("svg", {
            viewBox: "0 0 24 24",
            class: "size-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
          }, [
            o("path", { d: "M3 5h18M6 12h12M10 19h4" })
          ], -1)),
          _[11] || (_[11] = N(" Tools ", -1)),
          c.value ? (t(), n("span", ks, f(c.value), 1)) : $("", !0)
        ]),
        D(Zt, {
          open: s.value,
          "onUpdate:open": _[4] || (_[4] = (F) => s.value = F)
        }, {
          default: L(() => [
            D(Jt, {
              side: "bottom",
              class: "max-h-[85vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", $s, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", ws, [
                    e.filterSchema.length ? (t(), n("div", Cs, [
                      o("div", { class: "flex items-center justify-between" }, [
                        _[12] || (_[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: ae
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, V(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ss, f(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (j) => m(F, j.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, V(H(F), (j) => (t(), n("option", {
                            key: String(j.value),
                            value: j.value
                          }, f(j.label), 9, Bs))), 128))
                        ], 40, Ms)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", _s, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", As, [
                        (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (j) => q(F.key)
                        }, [
                          o("span", null, f(F.label), 1),
                          K.value.has(F.key) ? $("", !0) : (t(), n("span", zs, "On"))
                        ], 8, Ps))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", Os, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Ls, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: _[2] || (_[2] = (F) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(z, null, V(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (j) => {
                            C(F.key), s.value = !1;
                          }
                        }, f(F.label), 9, Vs))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", js, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !v.value,
                      onClick: ne
                    }, " Apply filters ", 8, Ts)) : $("", !0),
                    p.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: _[3] || (_[3] = (F) => {
                        Z(), s.value = !1;
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
      o("div", Ds, [
        o("div", Es, [
          _[18] || (_[18] = o("svg", {
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
            "onUpdate:modelValue": _[5] || (_[5] = (F) => i.value = F),
            type: "search",
            placeholder: e.searchPlaceholder,
            title: e.searchHint,
            "aria-label": e.searchHint ?? e.searchPlaceholder,
            class: P(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", x(Se)])
          }, null, 10, Is), [
            [Ae, i.value]
          ]),
          i.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2",
            "aria-label": "Clear search",
            onClick: _[6] || (_[6] = (F) => i.value = "")
          }, [..._[17] || (_[17] = [
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
        e.filterSchema.length ? (t(), T(Je, {
          key: 0,
          width: "w-80",
          "dismiss-on-panel-click": !1
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "filters-trigger",
              class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", c.value ? "border-primary text-primary" : ""]),
              "aria-label": c.value ? `Filters (${c.value} active)` : "Filters",
              title: "Filters"
            }, [
              _[19] || (_[19] = o("svg", {
                viewBox: "0 0 24 24",
                class: "size-4",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
              }, [
                o("path", { d: "M3 5h18M6 12h12M10 19h4" })
              ], -1)),
              c.value ? (t(), n("span", Ns, f(c.value), 1)) : $("", !0)
            ], 10, Fs)
          ]),
          panel: L(({ close: F }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              _[20] || (_[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: ae
              }, " Reset ")
            ]),
            _[23] || (_[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Rs, [
              (t(!0), n(z, null, V(e.filterSchema, (j) => (t(), n("div", {
                key: j.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Us, f(j.label), 1),
                k(j) ? (t(), T(Wt, {
                  key: 0,
                  "model-value": S(j),
                  options: B(j),
                  placeholder: `Any ${j.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[j.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : j.type === "querybuilder" ? (t(), T(vs, {
                  key: 1,
                  "model-value": u.value[j.key] ?? null,
                  fields: j.fields ?? {},
                  operators: j.operators ?? {},
                  "max-depth": j.maxDepth ?? 5,
                  onApply: (J) => I(j.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : j.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[j.key] == "string" && !String(u.value[j.key]).includes("..") ? u.value[j.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => m(j, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, V(H(j), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, f(J.label), 9, Ks))), 128))
                  ], 40, Hs),
                  o("div", qs, [
                    o("input", {
                      type: "date",
                      value: h(j, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        j,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Gs),
                    o("input", {
                      type: "date",
                      value: h(j, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        j,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Ws)
                  ])
                ], 64)) : j.type === "numberrange" ? (t(), n("div", Zs, [
                  o("input", {
                    type: "number",
                    value: h(j, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => A(
                      j,
                      "from",
                      J.target.value
                    )
                  }, null, 40, Js),
                  o("input", {
                    type: "number",
                    value: h(j, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => A(
                      j,
                      "to",
                      J.target.value
                    )
                  }, null, 40, Ys)
                ])) : j.type === "boolean" ? (t(), n("div", Xs, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[j.key] === !0,
                    class: P([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[j.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => m(j, u.value[j.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: P(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[j.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Qs),
                  o("span", er, f(j.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[j.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => m(j, u.value[j.key] === !1 ? null : !1)
                  }, f(j.falseLabel ?? "No") + " only ", 11, tr)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[j.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => m(j, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, V(H(j), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, f(J.label), 9, nr))), 128))
                ], 40, ar))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !v.value,
              onClick: (j) => E(F)
            }, " Apply filters ", 8, lr)
          ]),
          _: 1
        })) : $("", !0),
        D(Je, { "dismiss-on-panel-click": !1 }, {
          trigger: L(() => [..._[24] || (_[24] = [
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
            _[27] || (_[27] = o("p", { class: "text-muted-foreground px-3 pt-2.5 pb-1 text-xs font-medium" }, " Toggle columns ", -1)),
            o("div", or, [
              (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (j) => q(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", ir)) : (t(), n("svg", rr, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + f(F.label), 1)
              ], 10, sr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: oe
              }, [..._[26] || (_[26] = [
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
                N(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), n("div", dr, [
          (t(!0), n(z, null, V(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: P(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (j) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", cr, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", fr, [..._[29] || (_[29] = [
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
          ], 10, ur))), 128))
        ])) : $("", !0),
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: P(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
          "aria-pressed": e.reordering,
          "aria-label": e.reordering ? "Finish reordering" : "Reorder records",
          title: e.reordering ? "Finish reordering" : "Reorder records",
          onClick: _[7] || (_[7] = (F) => r("toggle-reorder"))
        }, [..._[30] || (_[30] = [
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
        ])], 10, mr)) : $("", !0),
        e.groups.length ? (t(), T(Je, {
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
            }, [..._[31] || (_[31] = [
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
            ])], 10, pr)
          ]),
          panel: L(({ close: F }) => [
            o("div", vr, [
              o("button", {
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (j) => {
                  C(null), F();
                }
              }, " No grouping ", 10, gr),
              (t(!0), n(z, null, V(e.groups, (j) => (t(), n("button", {
                key: j.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === j.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(j.key), F();
                }
              }, f(j.label), 11, hr))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        p.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), n("span", br, "Loading…")) : $("", !0)
      ]),
      g.value.length ? (t(), n("div", yr, [
        (t(!0), n(z, null, V(g.value, (F) => (t(), n("span", {
          key: F.key + F.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${F.key}`
        }, [
          N(f(F.label) + " ", 1),
          F.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${F.label}`,
            onClick: (j) => b(F.key)
          }, [..._[32] || (_[32] = [
            o("svg", {
              viewBox: "0 0 24 24",
              class: "size-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2.5"
            }, [
              o("path", { d: "M18 6 6 18M6 6l12 12" })
            ], -1)
          ])], 8, kr)) : $("", !0)
        ], 8, xr))), 128)),
        g.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: _[8] || (_[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), wr = { class: "min-w-0" }, Cr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Sr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Mr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, Br = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, _r = { class: "w-full border-collapse text-sm" }, Ar = { class: "bg-muted/40" }, Pr = { class: "divide-y" }, zr = ["href"], Or = {
  key: 1,
  class: "text-muted-foreground"
}, Lr = {
  key: 0,
  class: "flex justify-center"
}, Vr = ["disabled"], jr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Tr = ["href"], E5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Ft(), i = y(() => a.columns.filter((C) => C.type !== "image")), d = y(() => !!s.actions), u = y(() => !!a.title || d.value), c = y(() => a.filterSchema.length > 0), v = y(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, b) {
      return b == null || b === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(b)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof b == "number" ? new Intl.NumberFormat().format(b) : String(b);
    }
    function g(C) {
      return C == null || C === "";
    }
    return (C, b) => (t(), T(Ko, null, rt({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Mr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Lt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, rt({ _: 2 }, [
          C.$slots.illustration ? {
            name: "illustration",
            fn: L(() => [
              U(C.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          C.$slots["empty-actions"] ? {
            name: "actions",
            fn: L(() => [
              U(C.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", Br, [
          o("table", _r, [
            o("thead", Ar, [
              o("tr", null, [
                (t(!0), n(z, null, V(i.value, (k) => (t(), n("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, f(k.label), 1))), 128))
              ])
            ]),
            o("tbody", Pr, [
              (t(!0), n(z, null, V(e.rows, (k, M) => (t(), n("tr", {
                key: k.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, V(i.value, (S) => (t(), n("td", {
                  key: S.key,
                  class: P(["px-3 whitespace-nowrap", [
                    S.mono ? "font-mono text-xs" : "",
                    S.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  U(C.$slots, `cell:${S.key}`, {
                    row: k,
                    value: k[S.key],
                    column: S
                  }, () => [
                    e.recordBase && k.id != null && S === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${k.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, f(p(S, k[S.key])), 9, zr)) : g(k[S.key]) ? (t(), n("span", Or, " None ")) : (t(), n(z, { key: 2 }, [
                      N(f(p(S, k[S.key])), 1)
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
          o("div", wr, [
            e.title ? (t(), n("h3", Cr, f(e.title), 1)) : $("", !0)
          ]),
          d.value ? (t(), n("div", Sr, [
            U(C.$slots, "actions")
          ])) : $("", !0)
        ]),
        key: "0"
      } : void 0,
      c.value ? {
        name: "toolbar",
        fn: L(() => [
          D($r, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: v.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": b[0] || (b[0] = (k) => r("update:search", k)),
            onApplyFilters: b[1] || (b[1] = (k) => r("apply-filters", k)),
            onClearFilters: b[2] || (b[2] = (k) => r("clear-filters")),
            onClearFilter: b[3] || (b[3] = (k) => r("clear-filter", k)),
            onClear: b[4] || (b[4] = (k) => r("clear-filters")),
            onApplyColumns: b[5] || (b[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: L(() => [
          e.nextCursor ? (t(), n("div", Lr, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: b[6] || (b[6] = (k) => r("load", e.nextCursor))
            }, f(e.loading ? "Loading…" : "Load more"), 9, Vr)
          ])) : e.capped ? (t(), n("p", jr, [
            N(" Showing the first " + f(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Tr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : $("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Dr = { class: "flex items-center gap-2 overflow-x-auto" }, Er = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ir = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Fr = { class: "flex flex-col" }, Nr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Rr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Ur = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Hr = /* @__PURE__ */ O({
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
    function s(c) {
      return a.failedStep !== null && c === a.failedStep ? "bg-destructive text-destructive-foreground border-destructive" : a.failedStep !== null && c > a.failedStep ? "" : c < a.activeStep ? "bg-primary text-primary-foreground border-primary" : c === a.activeStep ? "border-primary text-primary" : "";
    }
    function i(c) {
      if (a.failedStep !== null) {
        if (c === a.failedStep)
          return "text-destructive font-medium";
        if (c > a.failedStep)
          return "text-muted-foreground/60";
      }
      return c === a.activeStep ? "text-foreground font-medium" : c < a.activeStep ? "text-muted-foreground hover:text-foreground" : "text-muted-foreground/60";
    }
    function d(c) {
      return a.failedStep !== null ? c < a.failedStep : c < a.activeStep;
    }
    function u(c) {
      return a.failedStep === c;
    }
    return (c, v) => (t(), n("ol", Dr, [
      (t(!0), n(z, null, V(e.steps, (p, g) => (t(), n("li", {
        key: g,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(_e(e.interactive ? "button" : "div"), re({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(g)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: g > e.activeStep } : {}, {
          onClick: (C) => e.interactive && g <= e.activeStep && r("update:activeStep", g)
        }), {
          default: L(() => [
            o("span", {
              class: P(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(g)])
            }, [
              u(g) ? (t(), n("svg", Er, [...v[0] || (v[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(g) ? (t(), n("svg", Ir, [...v[1] || (v[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(f(g + 1), 1)
              ], 64))
            ], 2),
            o("span", Fr, [
              o("span", null, f(p.label), 1),
              p.description ? (t(), n("span", Nr, f(p.description), 1)) : $("", !0)
            ]),
            e.hasError(g) ? (t(), n("span", Rr)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        g < e.steps.length - 1 ? (t(), n("span", Ur)) : $("", !0)
      ]))), 128))
    ]));
  }
}), ct = /* @__PURE__ */ new Map();
function xe(e, l) {
  ct.set(e, l);
}
function Kr(e) {
  return ct.get(e);
}
function I5(e) {
  return ct.has(e);
}
function F5() {
  return [...ct.keys()].sort();
}
function N5() {
  ct.clear();
}
class qr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function R5(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function Gr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Wr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const U5 = "text-sm text-muted-foreground font-normal", H5 = "text-xs text-muted-foreground font-normal", vt = "text-xs text-muted-foreground font-normal leading-snug", Zr = "text-foreground font-normal", Jr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Zr} ${Jr}`, Yr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Xr = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R({});
    me(
      () => a.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(dt, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: u[1] || (u[1] = (c) => r("close"))
    }, {
      footer: L(() => [
        D(ue, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (c) => r("close"))
        }, {
          default: L(() => [...u[2] || (u[2] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          type: "button",
          disabled: e.processing,
          onClick: i
        }, {
          default: L(() => [
            N(f(e.processing ? "Creating…" : "Create"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          e.generalError ? (t(), n("p", Yr, f(e.generalError), 1)) : $("", !0),
          (t(!0), n(z, null, V(e.fields, (c) => (t(), T(Xe, {
            key: c.key,
            field: c,
            value: s.value[c.key],
            error: e.errors[c.key],
            processing: e.processing,
            onChange: (v) => s.value[c.key] = v
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "description", "busy"]));
  }
}), Qr = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(mn), re({ "data-slot": "checkbox" }, x(i), {
      class: x(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((c) => [
        D(x(pn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(d.$slots, "default", Oe(Fe(c)), () => [
              D(x(_a), { class: "size-3.5" })
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
    const a = e, r = l, s = be(fe(a, "class"), r);
    return (i, d) => (t(), T(x(vn), re({ "data-slot": "switch" }, x(s), {
      class: x(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        D(x(gn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), ei = ["accept", "disabled"], ti = { class: "text-sm font-medium" }, ai = { key: 0 }, ni = { key: 1 }, li = { class: "text-muted-foreground text-xs font-normal" }, oi = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, si = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, ri = ["src"], ii = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, di = { class: "min-w-0 flex-1" }, ui = { class: "block truncate text-sm font-medium" }, ci = { class: "text-muted-foreground text-xs font-normal" }, fi = ["href"], mi = {
  key: 2,
  class: "text-destructive mt-1.5 text-xs"
}, La = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), c = R(null), v = y(() => a.accept.map((h) => `.${h}`).join(",")), p = y(() => c.value ?? a.modelValue?.url ?? null), g = y(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(h) {
      if (!h)
        return "";
      const w = ["B", "KB", "MB", "GB"];
      let A = h, E = 0;
      for (; A >= 1024 && E < w.length - 1; )
        A /= 1024, E++;
      return `${A.toFixed(A < 10 && E > 0 ? 1 : 0)} ${w[E]}`;
    }
    function b(h) {
      return h.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(h) {
      return a.accept.length && !a.accept.includes(b(h.name)) ? `${b(h.name).toUpperCase() || "That"} files are not accepted here.` : h.size > a.maxKilobytes * 1024 ? `That file is ${C(h.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(h) {
      const w = h?.[0];
      if (!(!w || a.disabled) && (u.value = k(w), !u.value)) {
        S(), a.image && w.type.startsWith("image/") && (c.value = URL.createObjectURL(w)), d.value = 0;
        try {
          const A = await a.upload(w, (E) => {
            d.value = E;
          });
          r("update:modelValue", A);
        } catch (A) {
          u.value = A instanceof Error ? A.message : "The upload failed.", S();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function S() {
      c.value && URL.revokeObjectURL(c.value), c.value = null;
    }
    async function B() {
      const h = a.modelValue;
      S(), u.value = null, r("update:modelValue", null), h && !h.url && a.discard && await a.discard(h.value).catch(() => {
      });
    }
    function m(h) {
      i.value = !1, M(h.dataTransfer?.files ?? null);
    }
    return (h, w) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", si, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ri)) : (t(), n("span", ii, f(b(e.modelValue.name) || "file"), 1)),
        o("span", di, [
          o("span", ui, f(e.modelValue.name), 1),
          o("span", ci, [
            N(f(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              w[4] || (w[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, fi)
            ], 64)) : (t(), n(z, { key: 1 }, [
              N(" · not saved yet")
            ], 64))
          ])
        ]),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 2,
          type: "button",
          class: "text-muted-foreground hover:text-destructive shrink-0 rounded p-1.5",
          "aria-label": "Remove file",
          onClick: B
        }, [...w[5] || (w[5] = [
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
        onDragover: w[1] || (w[1] = he((A) => i.value = !0, ["prevent"])),
        onDragleave: w[2] || (w[2] = he((A) => i.value = !1, ["prevent"])),
        onDrop: he(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: v.value,
          disabled: e.disabled,
          onChange: w[0] || (w[0] = (A) => M(A.target.files))
        }, null, 40, ei),
        w[3] || (w[3] = o("svg", {
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
        o("span", ti, [
          d.value === null ? (t(), n("span", ai, "Drop a file or click to choose")) : (t(), n("span", ni, "Uploading…"))
        ]),
        o("span", li, f(g.value), 1),
        d.value !== null ? (t(), n("span", oi, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      u.value ? (t(), n("p", mi, f(u.value), 1)) : $("", !0)
    ]));
  }
}), pi = { class: "flex flex-col gap-2" }, vi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, gi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, hi = { class: "flex flex-col gap-1" }, bi = ["onUpdate:modelValue", "disabled", "aria-label"], yi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, xi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, ki = ["onUpdate:modelValue", "disabled", "aria-label"], $i = ["disabled", "aria-label", "onClick"], wi = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, Ci = { class: "flex items-center gap-3" }, Si = ["disabled"], Mi = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Bi = /* @__PURE__ */ O({
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
    const d = R(u(a.modelValue));
    function u(M) {
      return M ? Object.entries(M).map(([S, B]) => ({
        uid: i++,
        key: S,
        value: B ?? ""
      })) : [];
    }
    me(
      () => a.modelValue,
      (M) => {
        JSON.stringify(M ?? null) !== JSON.stringify(c()) && (d.value = u(M));
      }
    );
    function c() {
      const M = {};
      for (const S of d.value) {
        const B = S.key.trim();
        B !== "" && (M[B] = S.value);
      }
      return Object.keys(M).length ? M : null;
    }
    function v() {
      r("update:modelValue", c());
    }
    const p = y(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of d.value) {
        const B = S.key.trim();
        B !== "" && M.set(B, (M.get(B) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), g = y(
      () => new Set(
        d.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), C = y(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function b() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function k(M) {
      d.value = d.value.filter((S) => S.uid !== M), v();
    }
    return (M, S) => (t(), n("div", pi, [
      d.value.length ? (t(), n("div", vi, [
        o("div", gi, [
          o("span", null, f(e.keyLabel), 1),
          o("span", null, f(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, V(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", hi, [
            pe(o("input", {
              "onUpdate:modelValue": (m) => B.key = m,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(B.key.trim()) || g.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: v
            }, null, 42, bi), [
              [Ae, B.key]
            ]),
            g.value.has(B.key.trim()) ? (t(), n("p", yi, " Letters, numbers, underscores and dashes only. ")) : p.value.has(B.key.trim()) ? (t(), n("p", xi, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (m) => B.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: v
          }, null, 40, ki), [
            [Ae, B.value]
          ]),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-40",
            disabled: e.disabled,
            "aria-label": `Remove ${B.key || "this entry"}`,
            onClick: (m) => k(B.uid)
          }, [...S[1] || (S[1] = [
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
          ])], 8, $i)
        ]))), 128))
      ])) : (t(), n("p", wi, " Nothing here yet. ")),
      o("div", Ci, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: b
        }, [
          S[2] || (S[2] = o("svg", {
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
          N(" Add " + f(e.keyLabel.toLowerCase()), 1)
        ], 8, Si),
        e.maxPairs !== null ? (t(), n("p", Mi, f(d.value.length) + " of " + f(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), _i = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, Ai = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Pi = ["disabled", "title", "aria-label", "onClick"], zi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Oi = ["d"], Li = ["disabled"], Vi = ["contenteditable", "data-placeholder"], ji = {
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
    const a = e, r = l, s = R(null);
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
    ], u = y(() => d.filter((k) => a.toolbar.includes(k.id))), c = y(() => a.toolbar.includes("link")), v = R(0);
    function p() {
      const k = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      v.value = M.length;
      const S = M === "" ? null : k;
      i = S, r("update:modelValue", S);
    }
    function g(k) {
      a.disabled || (s.value?.focus(), document.execCommand(k.command, !1, k.argument), p());
    }
    function C() {
      if (a.disabled)
        return;
      const k = window.prompt("Link address");
      k && (s.value?.focus(), document.execCommand("createLink", !1, k), p());
    }
    function b(k) {
      k.preventDefault();
      const M = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), p();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", v.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", v.value = s.value.innerText.trim().length);
      }
    ), (k, M) => (t(), n("div", _i, [
      o("div", Ai, [
        (t(!0), n(z, null, V(u.value, (S) => (t(), n("button", {
          key: S.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: S.label,
          "aria-label": S.label,
          onMousedown: M[0] || (M[0] = he(() => {
          }, ["prevent"])),
          onClick: (B) => g(S)
        }, [
          (t(), n("svg", zi, [
            o("path", {
              d: S.path
            }, null, 8, Oi)
          ]))
        ], 40, Pi))), 128)),
        c.value ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: "Link",
          "aria-label": "Link",
          onMousedown: M[1] || (M[1] = he(() => {
          }, ["prevent"])),
          onClick: C
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
        ])], 40, Li)) : $("", !0)
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
        onPaste: b
      }, null, 42, Vi),
      e.maxLength !== null ? (t(), n("div", ji, f(v.value) + " / " + f(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Di = /* @__PURE__ */ wt(Ti, [["__scopeId", "data-v-32c63bc7"]]), Ei = ["role"], Ii = ["title"], Fi = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Ni = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ri = ["d"], Ui = { key: 1 }, Hi = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Va = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => !!a.field.multiple), i = y(() => !!a.field.grouped), d = y(() => !!a.field.hiddenLabels), u = y(() => a.field.inline !== !1), c = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    );
    function v(h) {
      return s.value ? c.value.some((w) => w == h.value) : a.modelValue != null && h.value == a.modelValue;
    }
    function p(h) {
      if (!a.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            v(h) ? c.value.filter((w) => w != h.value) : [...c.value, h.value]
          );
          return;
        }
        r("update:modelValue", h.value);
      }
    }
    function g(h) {
      return a.field.colors?.[String(h.value)] ?? "primary";
    }
    function C(h) {
      const w = a.field.icons?.[String(h.value)];
      return w ? ce(w) : null;
    }
    function b(h) {
      return a.field.tooltips?.[String(h.value)] ?? h.label;
    }
    const k = {
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
    function S(h) {
      const w = g(h), A = v(h);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? k[w] ?? k.primary : M[w] ?? M.primary,
        a.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const B = y(() => {
      if (!(u.value || i.value) && a.field.columns && a.field.columns > 1)
        return { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` };
    }), m = y(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (h, w) => (t(), n("div", {
      role: s.value ? "group" : "radiogroup",
      class: P(m.value),
      style: se(B.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), n(z, null, V(e.options, (A) => (t(), n("label", {
        key: String(A.value),
        class: P(S(A)),
        title: b(A)
      }, [
        o("input", {
          class: "sr-only",
          type: s.value ? "checkbox" : "radio",
          name: s.value ? void 0 : `f-${e.field.key}`,
          value: A.value,
          checked: v(A),
          disabled: e.disabled,
          "aria-label": d.value ? A.label : void 0,
          onChange: (E) => p(A)
        }, null, 40, Fi),
        C(A) ? (t(), n("svg", Ni, [
          o("path", {
            d: C(A)
          }, null, 8, Ri)
        ])) : $("", !0),
        d.value ? $("", !0) : (t(), n("span", Ui, f(A.label), 1))
      ], 10, Ii))), 128)),
      e.options.length === 0 ? (t(), n("p", Hi, " Nothing to choose from yet. ")) : $("", !0)
    ], 14, Ei));
  }
}), Ki = {
  key: 1,
  class: "flex flex-col gap-2"
}, qi = { class: "flex items-center justify-between gap-2" }, Gi = ["for"], Wi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Zi = ["aria-label", "disabled"], Ji = {
  key: 7,
  class: "flex flex-col gap-2"
}, Yi = ["id", "value", "disabled"], Xi = ["value"], Qi = {
  key: 2,
  class: "relative"
}, ed = ["disabled"], td = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, ad = { class: "max-h-56 overflow-y-auto p-1" }, nd = ["onClick"], ld = {
  key: 8,
  class: "relative"
}, od = ["disabled", "aria-invalid"], sd = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, rd = { class: "max-h-56 overflow-y-auto p-1" }, id = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, dd = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ud = ["onClick"], cd = ["id", "value", "disabled", "aria-invalid"], fd = ["value"], md = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, pd = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, vd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], gd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, hd = ["aria-label", "disabled"], bd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], yd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, xd = ["aria-label", "disabled"], kd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], $d = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, wd = ["aria-label", "disabled"], Cd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], Sd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, Md = ["aria-label", "disabled"], Bd = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, _d = ["disabled", "aria-pressed", "onClick"], Ad = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, Pd = ["title", "disabled", "onClick"], zd = ["href"], Od = {
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
    const a = sa(() => import("./PkRepeater-J84jGe3T.js")), r = sa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), c = R([]), v = R(!1), p = R(null);
    let g;
    me(u, (le) => {
      s.searchOptions && (clearTimeout(g), v.value = !0, g = setTimeout(async () => {
        try {
          c.value = await s.searchOptions(le);
        } catch {
        } finally {
          v.value = !1;
        }
      }, 200));
    });
    async function C() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, c.value.length === 0 && s.searchOptions)) {
        v.value = !0;
        try {
          c.value = await s.searchOptions("");
        } finally {
          v.value = !1;
        }
      }
    }
    function b(le) {
      p.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function k() {
      p.value = null, i("change", null);
    }
    const M = ht("panelPicker", null), S = ht("panelCreateOption", null), B = R(!1), m = R(!1), h = R({}), w = R(null), A = y(() => Gr(s.field)), E = y(() => Wr(s.field));
    function I() {
      h.value = {}, w.value = null, B.value = !0, d.value = !1;
    }
    function ae() {
      m.value || (B.value = !1, h.value = {}, w.value = null);
    }
    async function H(le) {
      if (S) {
        m.value = !0, h.value = {}, w.value = null;
        try {
          const Y = await S.run(s.field.key, { ...le });
          b(Y), B.value = !1;
        } catch (Y) {
          Y instanceof qr ? (h.value = Y.fieldErrors, w.value = Object.keys(Y.fieldErrors).length === 0 ? Y.message : null) : w.value = Y instanceof Error ? Y.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const K = y(() => {
      if (!s.field.tableSelect || !M?.base)
        return;
      const le = M.returnUrl || "/";
      return `${M.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), q = y(() => s.field.morphTo ?? []), oe = y(() => {
      const le = s.value;
      return le && typeof le == "object" && !Array.isArray(le) ? le : { type: void 0, id: void 0 };
    });
    function ne(le) {
      i("change", { type: le || null, id: null });
    }
    function Z(le) {
      i("change", { type: oe.value.type ?? null, id: le });
    }
    function G(le) {
      p.value = le.label, Z(le.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(g));
    const _ = y(() => Kr(s.field.type)), F = y(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function j(le) {
      if (le) {
        if (le.copy) {
          const Y = s.value == null ? "" : String(s.value);
          Y !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(Y);
          return;
        }
        if (le.url && typeof window < "u") {
          window.open(le.url, "_blank", "noopener,noreferrer");
          return;
        }
        le.key && i("affix-action", le.key);
      }
    }
    const J = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Re} ${Se}`, ge = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Re}`;
    function ye(le) {
      const Y = document.getElementById(`f-${s.field.key}`);
      if (!(Y instanceof HTMLTextAreaElement) && !(Y instanceof HTMLInputElement))
        return;
      const ee = Y.selectionStart ?? Y.value.length, Ce = Y.selectionEnd ?? ee;
      Y.setRangeText(le, ee, Ce, "end"), Y.dispatchEvent(new Event("input", { bubbles: !0 })), Y.focus();
    }
    return (le, Y) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Ki, [
        o("div", qi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(f(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Wi, "*")) : $("", !0)
          ], 10, Gi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: P(["flex items-center gap-1", x(vt)])
          }, [
            N(f(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: Y[0] || (Y[0] = (ee) => j(e.field.hintAction))
            }, f(e.field.hintAction.label ?? "⧉"), 9, Zi)) : $("", !0)
          ], 2)) : $("", !0)
        ]),
        _.value ? (t(), T(_e(_.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[1] || (Y[1] = (ee) => i("change", ee))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(La, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": Y[2] || (Y[2] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(x(a), {
          key: 2,
          "model-value": e.value ?? null,
          children: e.field.children ?? [],
          "field-key": e.field.key,
          "item-label": e.field.itemLabel ?? "Item",
          "min-items": e.field.minItems ?? null,
          "max-items": e.field.maxItems ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "child-options": e.childOptions,
          "onUpdate:modelValue": Y[3] || (Y[3] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(x(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": Y[4] || (Y[4] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Di, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[5] || (Y[5] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Bi, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[6] || (Y[6] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Wt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": Y[7] || (Y[7] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : q.value.length ? (t(), n("div", Ji, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), T(Va, {
            key: 0,
            field: { key: `${e.field.key}-type`, grouped: !0, inline: !0 },
            "model-value": oe.value.type ?? null,
            options: q.value.map((ee) => ({ value: ee.value, label: ee.label })),
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[8] || (Y[8] = (ee) => ne(ee == null ? "" : String(ee)))
          }, null, 8, ["field", "model-value", "options", "disabled"])) : (t(), n("select", {
            key: 1,
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Se)]),
            onChange: Y[9] || (Y[9] = (ee) => ne(ee.target.value))
          }, [
            Y[25] || (Y[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, V(q.value, (ee) => (t(), n("option", {
              key: ee.value,
              value: ee.value
            }, f(ee.label), 9, Xi))), 128))
          ], 42, Yi)),
          oe.value.type && e.searchOptions ? (t(), n("div", Qi, [
            o("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: P(p.value || oe.value.id ? "" : "text-muted-foreground")
              }, f(p.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, ed),
            d.value ? (t(), n("div", td, [
              pe(o("input", {
                "onUpdate:modelValue": Y[10] || (Y[10] = (ee) => u.value = ee),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", ad, [
                (t(!0), n(z, null, V(c.value, (ee) => (t(), n("button", {
                  key: String(ee.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => G(ee)
                }, f(ee.label), 9, nd))), 128))
              ])
            ])) : $("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Y[11] || (Y[11] = (ee) => d.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", ld, [
          o("button", {
            type: "button",
            class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: P(p.value || e.value ? "" : "text-muted-foreground")
            }, f(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(k, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 10, od),
          d.value ? (t(), n("div", sd, [
            pe(o("input", {
              "onUpdate:modelValue": Y[12] || (Y[12] = (ee) => u.value = ee),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", rd, [
              v.value ? (t(), n("p", id, " Searching… ")) : c.value.length === 0 ? (t(), n("p", dd, " No matches ")) : $("", !0),
              (t(!0), n(z, null, V(c.value, (ee) => (t(), n("button", {
                key: String(ee.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => b(ee)
              }, f(ee.label), 9, ud))), 128)),
              e.field.createOption && x(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                Y[26] || (Y[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + f(E.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: Y[13] || (Y[13] = (ee) => d.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", x(Se)]),
          onChange: Y[14] || (Y[14] = (ee) => i("change", ee.target.value || null))
        }, [
          Y[27] || (Y[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, V(e.options, (ee) => (t(), n("option", {
            key: String(ee.value),
            value: ee.value
          }, f(ee.label), 9, fd))), 128))
        ], 42, cd)) : e.field.type === "toggle" ? (t(), n("label", md, [
          D(x(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[15] || (Y[15] = (ee) => i("change", ee))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(x(vt))
          }, f(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", pd, [
          D(x(Qr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[16] || (Y[16] = (ee) => i("change", ee === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(x(vt))
          }, f(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: P(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", x(Re), x(Se)]),
          onInput: Y[17] || (Y[17] = (ee) => i("change", ee.target.value))
        }, null, 42, vd)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            x(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", gd, f(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Y[18] || (Y[18] = (ee) => j(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, hd)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: P(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", x(Re)]),
            onInput: Y[19] || (Y[19] = (ee) => i("change", ee.target.value))
          }, null, 42, bd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", yd, f(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[20] || (Y[20] = (ee) => j(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, xd)) : $("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            x(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", $d, f(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: Y[22] || (Y[22] = (ee) => j(e.field.prefixAction))
          }, f(e.field.prefixAction.label ?? "⧉"), 9, wd)) : $("", !0),
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
            onInput: Y[23] || (Y[23] = (ee) => i("change", ee.target.value))
          }, null, 40, Cd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Sd, f(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[24] || (Y[24] = (ee) => j(e.field.suffixAction))
          }, f(e.field.suffixAction.label ?? "⧉"), 9, Md)) : $("", !0)
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
          class: P(J),
          onInput: Y[21] || (Y[21] = (ee) => i("change", ee.target.value))
        }, null, 40, kd)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", Bd, [
          (t(!0), n(z, null, V(e.field.presets, (ee) => (t(), n("button", {
            key: ee,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              x(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ee ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ee
            ),
            onClick: (Ce) => i("change", String(ee))
          }, f(ee), 11, _d))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Ad, [
          (t(!0), n(z, null, V(e.field.chips, (ee, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ee,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (la) => ye(String(Ce))
          }, f(Ce), 9, Pd))), 128))
        ])) : $("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, zd)) : $("", !0),
        e.error ? (t(), n("p", Od, f(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: P(x(vt))
        }, f(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && x(S) ? (t(), T(Xr, {
        key: 2,
        open: B.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: h.value,
        "general-error": w.value,
        onClose: ae,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), Ld = { class: "flex min-w-0 items-start gap-2.5" }, Vd = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, jd = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Td = ["d"], Dd = { class: "min-w-0" }, Ed = { class: "text-sm font-semibold" }, Id = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Fd = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Nd = { class: "border-b px-4 py-3.5 sm:px-5" }, Rd = { class: "text-sm font-semibold" }, Ud = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Hd = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Kd = {
  key: 7,
  class: "flex flex-col gap-3"
}, qd = { class: "text-sm font-medium" }, Gd = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Wd = {
  key: 0,
  class: "mb-1 font-medium"
}, Zd = ["onClick"], Jd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Yd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Xd = ["disabled"], ja = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = R(0), u = y(
      () => (a.node.children ?? []).map((B) => ({
        label: B.label ?? "",
        description: B.description
      }))
    ), c = y(() => a.depth === 0), v = y(() => {
      const B = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      }, m = { sm: "gap-2", md: "gap-4", lg: "gap-6" };
      return [
        B[a.node.align ?? "start"] ?? "items-start",
        m[a.node.gap ?? "md"] ?? "gap-4",
        a.node.wrap === !1 ? "flex-nowrap" : "flex-wrap"
      ];
    }), p = y(() => {
      const B = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return B[a.node.tone ?? "info"] ?? B.info;
    }), g = y(() => {
      const B = a.node.columns ?? 1;
      return B >= 3 ? "sm:grid-cols-3" : B === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(B) {
      const m = B.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function b(B = 1) {
      return B >= 4 ? "md:col-span-4" : B === 3 ? "md:col-span-3" : B === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(B) {
      const m = [], h = (w) => {
        w.component === "field" && w.key && m.push(w.key), w.children?.forEach(h);
      };
      return h(B), m.some((w) => a.errors[w]);
    }
    function M(B) {
      if (B.hidden)
        return !1;
      const m = B.visibleWhen;
      return m ? a.values[m.field] == m.value : !0;
    }
    function S(B) {
      if (a.upload)
        return (m, h) => a.upload(B, m, h);
    }
    return (B, m) => {
      const h = Rt("SchemaNode", !0);
      return e.node.component === "field" && M(e.node) ? (t(), T(Xe, {
        key: 0,
        field: e.node,
        value: e.values[e.node.key],
        values: e.values,
        error: e.errors[e.node.key],
        errors: e.errors,
        options: e.options[e.node.key],
        "child-options": e.options,
        processing: e.processing,
        "search-options": e.node.searchable && e.searchOptions ? (w) => e.searchOptions(e.node.key, w) : void 0,
        upload: S(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = (w) => r("change", e.node.key, w)),
        onAffixAction: m[1] || (m[1] = (w) => r("affix-action", e.node.key, w))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
        key: 1,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: P(["flex items-start justify-between gap-3", [
            c.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = (w) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Ld, [
            e.node.icon ? (t(), n("div", Vd, [
              (t(), n("svg", jd, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, Td)
              ]))
            ])) : $("", !0),
            o("div", Dd, [
              o("h3", Ed, f(e.node.label), 1),
              e.node.description ? (t(), n("p", Id, f(e.node.description), 1)) : $("", !0)
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
          class: P(["grid grid-cols-1 gap-4", [g.value, c.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
            key: A,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: P(w.span && w.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (E, I) => r("change", E, I)),
            onAffixAction: m[4] || (m[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", Fd, [
        o("header", Nd, [
          o("h3", Rd, f(e.node.title), 1),
          e.node.description ? (t(), n("p", Ud, f(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", g.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
            key: A,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[5] || (m[5] = (E, I) => r("change", E, I)),
            onAffixAction: m[6] || (m[6] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: P(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
          key: A,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: P(w.component === "column" ? b(w.span) : ""),
          onChange: m[7] || (m[7] = (E, I) => r("change", E, I)),
          onAffixAction: m[8] || (m[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", Hd, [
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
          key: A,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[9] || (m[9] = (E, I) => r("change", E, I)),
          onAffixAction: m[10] || (m[10] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: P(["grid grid-cols-1 gap-4", g.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
          key: A,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[11] || (m[11] = (E, I) => r("change", E, I)),
          onAffixAction: m[12] || (m[12] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: P(["flex", v.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
          key: A,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[13] || (m[13] = (E, I) => r("change", E, I)),
          onAffixAction: m[14] || (m[14] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Kd, [
        o("legend", qd, f(e.node.label), 1),
        e.node.description ? (t(), n("p", Gd, f(e.node.description), 1)) : $("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", g.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), T(h, {
            key: A,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[15] || (m[15] = (E, I) => r("change", E, I)),
            onAffixAction: m[16] || (m[16] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: P(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", Wd, f(e.node.title), 1)) : $("", !0),
        o("p", null, f(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", c.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => (t(), n("button", {
            key: A,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = A
          }, [
            N(f(w.label) + " ", 1),
            k(w) ? (t(), n("span", Jd)) : $("", !0)
          ], 10, Zd))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(w.children ?? [], (E, I) => (t(), T(h, {
            key: I,
            node: E,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[17] || (m[17] = (ae, H) => r("change", ae, H)),
            onAffixAction: m[18] || (m[18] = (ae, H) => r("affix-action", ae, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: P(c.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(Hr, {
          class: P(["p-4", c.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (w) => k((e.node.children ?? [])[w]),
          "onUpdate:activeStep": m[19] || (m[19] = (w) => d.value = w)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, V(e.node.children ?? [], (w, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", c.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(w.children ?? [], (E, I) => (t(), T(h, {
            key: I,
            node: E,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[20] || (m[20] = (ae, H) => r("change", ae, H)),
            onAffixAction: m[21] || (m[21] = (ae, H) => r("affix-action", ae, H))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)), [
          [He, d.value === A]
        ])), 128)),
        o("div", Yd, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: m[22] || (m[22] = (w) => d.value--)
          }, " Back ", 8, Xd),
          d.value < (e.node.children ?? []).length - 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm transition-opacity hover:opacity-90",
            onClick: m[23] || (m[23] = (w) => d.value++)
          }, " Next ")) : $("", !0)
        ])
      ], 2)) : $("", !0);
    };
  }
}), K5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R({});
    me(
      () => a.open,
      (d) => {
        d && (s.value = {});
      }
    );
    function i() {
      r("submit", { ...s.value });
    }
    return (d, u) => (t(), T(dt, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: u[2] || (u[2] = (c) => r("close"))
    }, {
      footer: L(() => [
        D(ue, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (c) => r("close"))
        }, {
          default: L(() => [...u[3] || (u[3] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.processing,
          onClick: i
        }, {
          default: L(() => [
            N(f(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), n(z, null, V(e.form?.nodes ?? [], (c, v) => (t(), T(ja, {
            key: v,
            node: c,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (p, g) => s.value[p] = g)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Qd = ["title"], eu = ["aria-label"], tu = ["d"], au = { class: "sr-only" }, nu = /* @__PURE__ */ O({
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
    }, s = y(() => typeof l.value == "boolean" ? l.value ? "1" : "" : l.value === null || l.value === void 0 ? "" : String(l.value)), i = y(() => l.icons[s.value] ?? l.defaultIcon), d = y(() => a[i.value] ?? a.dot), u = y(() => r[l.colors[s.value] ?? "neutral"] ?? r.neutral), c = y(() => l.labels[s.value] ?? String(l.value ?? "-"));
    return (v, p) => (t(), n("span", {
      class: "inline-flex items-center",
      title: c.value
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
        "aria-label": c.value
      }, [
        o("path", { d: d.value }, null, 8, tu)
      ], 10, eu)),
      o("span", au, f(c.value), 1)
    ], 8, Qd));
  }
}), lu = ["aria-label"], ou = ["fill"], q5 = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, V(a.value, (d) => (t(), n("svg", {
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
        }, null, 8, ou)
      ]))), 128))
    ], 8, lu));
  }
}), su = ["src"], ru = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, iu = /* @__PURE__ */ O({
  __name: "ImageCell",
  props: {
    src: {},
    fallbackText: {},
    rounded: { type: Boolean, default: !0 },
    size: { default: "md" },
    fallback: { default: "initials" }
  },
  setup(e) {
    const l = e, a = R(!1);
    me(
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
      class: P(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (c) => a.value = !0)
      }, null, 40, su)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(f(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", ru, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), du = {
  key: 0,
  class: "text-muted-foreground"
}, uu = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, cu = {
  key: 0,
  class: "font-mono text-xs"
}, fu = {
  key: 1,
  class: "sr-only"
}, mu = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", du, "-")) : (t(), n("span", uu, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", cu, f(r.value), 1)) : (t(), n("span", fu, f(r.value), 1))
    ]));
  }
}), pu = { class: "inline-flex items-center" }, vu = ["checked", "aria-label"], gu = { class: "sr-only" }, G5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", pu, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, vu),
      o("span", gu, f(r.value), 1)
    ]));
  }
}), hu = {
  key: 0,
  class: "text-muted-foreground"
}, bu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, W5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", bu, f(a.value), 1)) : (t(), n("span", hu, "—"));
  }
}), yu = {
  key: 0,
  class: "font-mono text-xs"
}, xu = {
  key: 1,
  class: "text-muted-foreground"
}, ku = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, Z5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = y(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", yu, f(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", xu, "—")) : (t(), n("span", ku, f(a.value.length) + " " + f(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), $u = ["data-variant"], wu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ O({
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
      () => [wu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: P(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, $u));
  }
}), Cu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Su = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, J5 = /* @__PURE__ */ O({
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
        return d.map((c) => c == null ? "" : String(c).trim()).filter((c) => c !== "");
      if (typeof d == "string") {
        const c = d.trim();
        if (c.startsWith("["))
          try {
            const v = JSON.parse(c);
            if (Array.isArray(v))
              return a(v, u);
          } catch {
          }
        return c.split(u).map((v) => v.trim()).filter((v) => v !== "");
      }
      return [String(d)];
    }
    const r = y(() => a(l.value, l.separator)), s = y(() => l.limit === null || l.limit === void 0 || l.limit < 1 ? r.value : r.value.slice(0, l.limit)), i = y(() => Math.max(0, r.value.length - s.value.length));
    return (d, u) => r.value.length === 0 ? (t(), n("span", Cu, "None")) : (t(), n("span", Su, [
      (t(!0), n(z, null, V(s.value, (c) => (t(), T(qe, {
        key: c,
        variant: "secondary"
      }, {
        default: L(() => [
          N(f(c), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(qe, {
        key: 0,
        variant: "outline"
      }, {
        default: L(() => [
          N("+" + f(i.value), 1)
        ]),
        _: 1
      })) : $("", !0)
    ]));
  }
}), Mu = ["aria-checked", "aria-label", "title", "disabled"], Bu = ["value", "disabled"], _u = ["value"], Y5 = /* @__PURE__ */ O({
  __name: "EditableCell",
  props: {
    type: {},
    value: {},
    options: { default: () => ({}) },
    busy: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    onLabel: { default: null },
    offLabel: { default: null }
  },
  emits: ["change"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(() => a.value === !0 || a.value === 1 || a.value === "1"), i = y(() => a.busy || a.disabled), d = y(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function c(v) {
      const p = v.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (v, p) => e.type === "toggle" ? (t(), n("button", {
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
    ], 10, Mu)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = he(() => {
      }, ["stop"])),
      onChange: c
    }, [
      (t(!0), n(z, null, V(e.options, (g, C) => (t(), n("option", {
        key: C,
        value: C
      }, f(g), 9, _u))), 128))
    ], 40, Bu));
  }
}), Yt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function Au(e) {
  return e != null && e !== "";
}
function Pu(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function X5(e) {
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
      cellClass: Pu(s),
      group: s.group
    }))
  ), a = y(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), c = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Yt[c] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const zu = ["disabled", "aria-label", "aria-busy"], Ou = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lu = ["d"], Vu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, ju = ["disabled", "onClick"], Tu = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Du = ["d"], Eu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, Q5 = /* @__PURE__ */ O({
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
    function u(g) {
      return typeof g == "boolean" ? g ? "1" : "" : String(g ?? "");
    }
    function c(g) {
      const C = a.colors[u(g)] ?? a.defaultColor ?? "neutral";
      return Yt[C] ?? "outline";
    }
    function v(g) {
      return a.options[g] ?? g;
    }
    function p(g, C) {
      if (s.value || g === i.value) {
        C();
        return;
      }
      r("change", g), C();
    }
    return (g, C) => (t(), n("div", {
      onClick: C[0] || (C[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(qe, {
        key: 1,
        variant: c(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          N(f(v(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Je, {
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
            D(qe, {
              variant: c(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                N(f(v(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Ou, [
              o("path", {
                d: x(ce)("chevron-down")
              }, null, 8, Lu)
            ]))
          ], 8, zu)
        ]),
        panel: L(({ close: b }) => [
          o("div", Vu, f(d.value), 1),
          (t(!0), n(z, null, V(e.options, (k, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => p(String(M), b)
          }, [
            D(qe, {
              variant: c(M),
              class: "capitalize"
            }, {
              default: L(() => [
                N(f(k), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", Tu, [
              o("path", {
                d: x(ce)("check")
              }, null, 8, Du)
            ])) : (t(), n("span", Eu))
          ], 8, ju))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), Iu = { class: "flex items-center justify-end" }, Fu = ["aria-label"], Nu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ru = ["d"], Uu = ["href"], Hu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ku = ["d"], qu = { class: "min-w-0 flex-1 truncate" }, Gu = ["disabled", "onClick"], Wu = ["d"], Zu = { class: "min-w-0 flex-1 truncate" }, Ju = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Yu = ["disabled", "onClick"], Xu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qu = ["d"], ec = { class: "min-w-0 flex-1 truncate" }, e3 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = y(() => r.groups.flatMap((S) => S.actions)), c = y(() => u.value.filter((S) => !S.destructive)), v = y(() => u.value.filter((S) => S.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function g(S) {
      return p[S.color ?? "gray"] ?? p.gray;
    }
    const C = y(() => u.value.length === 0);
    function b(S) {
      s("run", S);
    }
    function k(S) {
      C.value || (S.preventDefault(), i.value?.openAt(S.clientX, S.clientY));
    }
    function M(S) {
      if (S.key !== "ArrowDown" && S.key !== "ArrowUp")
        return;
      const B = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (B.length === 0)
        return;
      S.preventDefault();
      const m = B.indexOf(document.activeElement), h = S.key === "ArrowDown" ? 1 : -1, w = (m + h + B.length) % B.length;
      B[w]?.focus();
    }
    return l({ openContextMenu: k }), (S, B) => (t(), n("div", Iu, [
      C.value ? $("", !0) : (t(), T(Je, {
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
            (t(), n("svg", Nu, [
              o("path", {
                d: x(ce)("more-vertical")
              }, null, 8, Ru)
            ]))
          ], 8, Fu)
        ]),
        panel: L(() => [
          o("div", {
            ref_key: "items",
            ref: d,
            class: "py-0.5",
            onKeydown: M
          }, [
            (t(!0), n(z, null, V(c.value, (m) => (t(), n(z, {
              key: m.key
            }, [
              m.link ? (t(), n("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", g(m)])
              }, [
                (t(), n("svg", Hu, [
                  o("path", {
                    d: x(ot)(m)
                  }, null, 8, Ku)
                ])),
                o("span", qu, f(m.label), 1)
              ], 10, Uu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", g(m)]),
                disabled: e.busy === m.key,
                onClick: (h) => b(m)
              }, [
                (t(), n("svg", {
                  class: P(["size-4 shrink-0", e.busy === m.key && "animate-pulse"]),
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  o("path", {
                    d: x(ot)(m)
                  }, null, 8, Wu)
                ], 2)),
                o("span", Zu, f(m.label), 1)
              ], 10, Gu))
            ], 64))), 128)),
            v.value.length ? (t(), n("div", Ju, [
              (t(!0), n(z, null, V(v.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (h) => b(m)
              }, [
                (t(), n("svg", Xu, [
                  o("path", {
                    d: x(ot)({ ...m, destructive: !0 })
                  }, null, 8, Qu)
                ])),
                o("span", ec, f(m.label), 1)
              ], 8, Yu))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), Vt = {
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
}, jt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, bt = 12, yt = 20, tc = [0, 0.25, 0.5, 0.75, 1], Xt = "alxtexhpanel.appearance", Be = {
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
}, je = R({ ...Be });
let Ye = !1;
const Ta = "alxtexhpanel.appearance.vars", Tt = "pk-appearance";
function at() {
  return typeof window > "u" ? null : window;
}
let xt = null;
function Da(e) {
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
function Ea(e) {
  const l = at();
  l && (l.__panelAppearance = { ...e });
}
function ac(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Tt);
  l || (l = document.createElement("style"), l.id = Tt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function t3() {
  Ye = !1, xt = null, je.value = { ...Be };
  const e = at();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(Tt)?.remove();
}
function Qt(e) {
  return e.theme === "dark";
}
const ua = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, ca = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Ia(e) {
  const l = Vt[e.primary] ?? Vt.slate, a = jt[e.surface] ?? jt.neutral, r = a.chroma, s = a.hue, d = Qt(e) ? {
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
    "--pk-row-padding": ua[e.density] ?? ua.comfortable,
    "--pk-form-gap": ca[e.density] ?? ca.comfortable
  };
}
function nc(e) {
  return {
    dark: Qt(e),
    theme: e.theme,
    vars: Ia(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function ea() {
  if (typeof window > "u")
    return { ...Be };
  try {
    const e = localStorage.getItem(Xt);
    if (!e)
      return { ...Be };
    const l = { ...Be, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = Be.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? Be.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < bt || l.fontSize > yt) && (l.fontSize = Be.fontSize), l;
  } catch {
    return { ...Be };
  }
}
function lc() {
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
function Fa(e) {
  const l = ea(), a = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Da(a);
  if (je.value = a, Ye = !0, e) {
    Ea(a);
    try {
      localStorage.setItem(Xt, JSON.stringify(a));
    } catch {
    }
  }
  const d = at()?.__panelAppearanceApplied === !0;
  if (xt !== s) {
    if (r && d && e) {
      xt = s;
      try {
        const u = nc(a);
        localStorage.setItem(Ta, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Dt(a);
  }
}
function a3() {
  Fa(lc());
}
function n3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Fa(l);
}
let Na = null;
function l3(e) {
  Na = e;
}
let Ra = {};
function oc(e) {
  if (Ra = e, !(typeof document > "u") && !ea().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Dt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Ia(e), r = { ...a, ...e.primaryChosen ? {} : Ra }, s = {
    dark: Qt(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, ac(a), Ea(e), xt = Da(e);
  const i = at();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Ta, JSON.stringify(s));
  } catch {
  }
}
function Ua() {
  function e(r) {
    Dt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(Xt, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), Na?.({ ...r, ...s });
  }
  function a() {
    l({ ...Be });
  }
  return ve(() => {
    if (Ye || at()?.__panelAppearanceApplied) {
      Ye = !0;
      return;
    }
    Ye = !0, je.value = ea(), Dt(je.value);
  }), {
    appearance: y(() => je.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: Vt,
    SURFACE_TINTS: jt,
    FONT_SIZE_MIN: bt,
    FONT_SIZE_MAX: yt,
    RADIUS_OPTIONS: tc
  };
}
const sc = { class: "flex items-center justify-between border-b px-4 py-3" }, rc = { class: "flex items-center gap-2" }, ic = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, dc = { class: "flex flex-col gap-2" }, uc = { class: "grid grid-cols-8 gap-2" }, cc = ["title", "aria-label", "aria-pressed", "onClick"], fc = { class: "flex flex-col gap-2" }, mc = { class: "grid grid-cols-8 gap-2" }, pc = ["title", "aria-label", "aria-pressed", "onClick"], vc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, gc = { class: "flex flex-col gap-2" }, hc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, bc = ["aria-pressed", "aria-label", "onClick"], yc = { class: "text-sm font-semibold" }, xc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, kc = ["onClick"], $c = { class: "flex flex-col gap-2" }, wc = { class: "flex items-center justify-between" }, Cc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Sc = { class: "flex items-center gap-2" }, Mc = ["disabled"], Bc = ["min", "max", "value"], _c = ["disabled"], o3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ua(), u = R(!1), c = y(() => l.value.sidebarSide === "right"), v = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], g = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], C = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], b = [
      { value: "full", label: "Full" },
      { value: "centered", label: "Centered" }
    ], k = [
      { value: "collapsible", label: "Collapsible" },
      { value: "drilldown", label: "Drill-down" }
    ];
    function M(S, B) {
      return `oklch(0.72 ${B * 3} ${S})`;
    }
    return (S, B) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: B[0] || (B[0] = (m) => u.value = !0)
      }, [...B[7] || (B[7] = [
        Nt('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      (t(), T(Qe, { to: "body" }, [
        D(Ue, {
          "enter-active-class": "transition duration-150 ease-out",
          "enter-from-class": "opacity-0",
          "leave-active-class": "transition duration-100 ease-in",
          "leave-to-class": "opacity-0"
        }, {
          default: L(() => [
            u.value ? (t(), n("div", {
              key: 0,
              class: "fixed inset-0 z-50 bg-black/30",
              onClick: B[1] || (B[1] = (m) => u.value = !1)
            })) : $("", !0)
          ]),
          _: 1
        }),
        D(Ue, {
          "enter-active-class": "transition duration-200 ease-out",
          "enter-from-class": c.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": c.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            u.value ? (t(), n("aside", {
              key: 0,
              class: P(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", c.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", sc, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", rc, [
                  o("button", {
                    class: "text-muted-foreground text-xs font-normal hover:underline",
                    onClick: B[2] || (B[2] = //@ts-ignore
                    (...m) => x(r) && x(r)(...m))
                  }, " Reset "),
                  o("button", {
                    class: "text-muted-foreground hover:text-foreground",
                    "aria-label": "Close",
                    onClick: B[3] || (B[3] = (m) => u.value = !1)
                  }, [...B[8] || (B[8] = [
                    o("svg", {
                      viewBox: "0 0 24 24",
                      class: "size-4",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2.5"
                    }, [
                      o("path", { d: "M18 6 6 18M6 6l12 12" })
                    ], -1)
                  ])])
                ])
              ]),
              o("div", ic, [
                o("section", dc, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", uc, [
                    (t(!0), n(z, null, V(x(s), (m, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: se({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(l).primary === h,
                      onClick: (w) => x(a)({ primary: h })
                    }, [
                      x(l).primary === h ? (t(), n("svg", {
                        key: 0,
                        viewBox: "0 0 24 24",
                        class: "absolute inset-0 m-auto size-4",
                        style: se({ color: m.foreground }),
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "3.5"
                      }, [...B[10] || (B[10] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])], 4)) : $("", !0)
                    ], 12, cc))), 128))
                  ])
                ]),
                o("section", fc, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", mc, [
                    (t(!0), n(z, null, V(x(i), (m, h) => (t(), n("button", {
                      key: h,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": x(l).surface === h,
                      onClick: (w) => x(a)({ surface: h })
                    }, [
                      x(l).surface === h ? (t(), n("svg", vc, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, pc))), 128))
                  ])
                ]),
                o("section", gc, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", hc, [
                    (t(!0), n(z, null, V(x(d), (m) => (t(), n("button", {
                      key: m,
                      type: "button",
                      class: P([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": x(l).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (h) => x(a)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: se({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      N(" " + f(m), 1)
                    ], 10, bc))), 128))
                  ])
                ]),
                (t(!0), n(z, null, V([
                  { label: "Color scheme", key: "theme", options: v },
                  { label: "Card style", key: "cardStyle", options: g },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: b },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (m) => (t(), n("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", yc, f(m.label), 1),
                  o("div", xc, [
                    (t(!0), n(z, null, V(m.options, (h) => (t(), n("button", {
                      key: String(h.value),
                      type: "button",
                      class: P([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        x(l)[m.key] === h.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (w) => x(a)({ [m.key]: h.value })
                    }, f(h.label), 11, kc))), 128))
                  ])
                ]))), 128)),
                o("section", $c, [
                  o("div", wc, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", Cc, f(x(l).fontSize) + "px", 1)
                  ]),
                  o("div", Sc, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize <= x(bt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (m) => x(a)({ fontSize: x(l).fontSize - 1 }))
                    }, " − ", 8, Mc),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: x(bt),
                      max: x(yt),
                      value: x(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (m) => x(a)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, Bc),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: x(l).fontSize >= x(yt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (m) => x(a)({ fontSize: x(l).fontSize + 1 }))
                    }, " + ", 8, _c)
                  ])
                ])
              ])
            ], 2)) : $("", !0)
          ]),
          _: 1
        }, 8, ["enter-from-class", "leave-to-class"])
      ]))
    ], 64));
  }
}), Ac = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, Pc = { class: "flex items-stretch" }, zc = ["href", "aria-current"], Oc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Lc = ["d"], Vc = { class: "w-full truncate text-center" }, jc = {
  key: 0,
  class: "flex-1"
}, Tc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Dc = ["d"], Ec = { class: "w-full truncate text-center" }, _t = 5, s3 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.items.length <= _t ? a.items : a.items.slice(0, _t - 1)
    ), i = y(() => a.items.length > _t);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, c) => (t(), n("nav", Ac, [
      o("ul", Pc, [
        (t(!0), n(z, null, V(s.value, (v) => (t(), n("li", {
          key: v.key,
          class: "flex-1"
        }, [
          o("a", {
            href: v.href,
            class: P([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(v.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(v.href) ? "page" : void 0
          }, [
            (t(), n("svg", Oc, [
              o("path", {
                d: x(ce)(v.icon)
              }, null, 8, Lc)
            ])),
            o("span", Vc, f(v.title), 1)
          ], 10, zc)
        ]))), 128)),
        i.value ? (t(), n("li", jc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: c[0] || (c[0] = (v) => r("more"))
          }, [
            (t(), n("svg", Tc, [
              o("path", {
                d: x(ce)("more-horizontal")
              }, null, 8, Dc)
            ])),
            o("span", Ec, f(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), Ic = ["value"], $e = /* @__PURE__ */ O({
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
    }, null, 42, Ic));
  }
}), Fc = ["for"], Pe = /* @__PURE__ */ O({
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
      U(l.$slots, "default")
    ], 10, Fc));
  }
}), r3 = /* @__PURE__ */ O({
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
}), Nc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, Rc = ["id", "name", "value", "disabled", "maxlength"], Uc = ["data-active"], Hc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Kc = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = R(null), d = R("");
    ve(() => {
      a.autofocus && i.value?.focus();
    });
    const u = y(
      () => Array.from({ length: a.length }, (B, m) => a.modelValue[m] ?? "")
    ), c = y(() => Math.min(a.modelValue.length, a.length - 1));
    function v(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function p(B) {
      a.disabled || B.length !== a.length || d.value !== B && (d.value = B, r("complete", B));
    }
    function g(B) {
      const m = v(B);
      m !== a.modelValue && r("update:modelValue", m), p(m);
    }
    function C(B) {
      g(B.target.value);
    }
    function b(B) {
      g(B.target.value);
    }
    function k() {
      g(i.value?.value ?? "");
    }
    function M(B) {
      B.animationName === "pkOtpAutofillStart" && k();
    }
    me(
      () => a.modelValue,
      (B) => {
        B.length < a.length ? d.value = "" : p(B);
      }
    );
    let S;
    return ve(() => {
      S = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && k();
      }, 250);
    }), on(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, m) => (t(), n("div", Nc, [
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
        onInput: C,
        onChange: b,
        onAnimationstart: M,
        onFocus: m[0] || (m[0] = (h) => s.value = !0),
        onBlur: m[1] || (m[1] = (h) => s.value = !1)
      }, null, 40, Rc),
      (t(!0), n(z, null, V(u.value, (h, w) => (t(), n("div", {
        key: w,
        "data-slot": "input-otp-slot",
        "data-active": s.value && w === c.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(f(h) + " ", 1),
        s.value && w === c.value && h === "" ? (t(), n("div", Hc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Uc))), 128))
    ]));
  }
}), i3 = /* @__PURE__ */ wt(Kc, [["__scopeId", "data-v-560616ac"]]), qc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, De = /* @__PURE__ */ O({
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
      }, f(e.title), 3),
      e.description ? (t(), n("p", qc, f(e.description), 1)) : $("", !0)
    ], 2));
  }
}), Gc = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Wc = { class: "min-w-0 space-y-1" }, Zc = { class: "flex flex-wrap items-center gap-2.5" }, Jc = { class: "text-2xl font-semibold tracking-tight" }, Yc = {
  key: 0,
  class: "flex items-center gap-2"
}, Xc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Qc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, d3 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", Gc, [
      o("div", Wc, [
        o("div", Zc, [
          o("h1", Jc, f(e.title), 1),
          l.$slots.status ? (t(), n("div", Yc, [
            U(l.$slots, "status")
          ])) : $("", !0)
        ]),
        e.purpose ? (t(), n("p", Xc, f(e.purpose), 1)) : $("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Qc, [
        U(l.$slots, "actions")
      ])) : $("", !0)
    ]));
  }
}), ef = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: P(x(Q)(x(nf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), tf = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: P(x(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), af = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: P(x(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), nf = Gt(
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
), lf = { class: "list-inside list-disc text-sm" }, u3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = y(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(x(ef), { variant: "destructive" }, {
      default: L(() => [
        D(x(Jn), { class: "size-4" }),
        D(x(af), null, {
          default: L(() => [
            N(f(e.title), 1)
          ]),
          _: 1
        }),
        D(x(tf), null, {
          default: L(() => [
            o("ul", lf, [
              (t(!0), n(z, null, V(a.value, (i, d) => (t(), n("li", { key: d }, f(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ha = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Pa(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => pe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => sn(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        x(Q)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          x(Re),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Ae, x(s)]
    ]);
  }
}), of = { class: "relative" }, sf = ["aria-label"], c3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = rn("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", of, [
      D(x(Ha), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: x(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: P(
          x(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(x(Yn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(x(Xn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, sf)
    ]));
  }
}), Ka = "@container min-w-0", rf = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", f3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", df = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function m3(e, l) {
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
    s.forEach((u, c) => {
      d[c % a].push(u);
    }), r.push({ type: "columns", columns: d }), s = [];
  };
  for (const d of e)
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function fa(e, l) {
  return `${e}:${l}`;
}
function p3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Et(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function v3(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const c of s)
    for (const v of c.items)
      i.set(fa(c.kind, v.key), {
        kind: c.kind,
        source: v
      });
  const d = [], u = /* @__PURE__ */ new Set();
  for (const c of r?.widgets ?? []) {
    const v = c.id.toLowerCase(), p = i.get(v);
    p && (u.add(v), d.push({
      id: v,
      kind: p.kind,
      key: p.source.key,
      span: Et(c.span),
      hidden: !!c.hidden,
      source: p.source
    }));
  }
  for (const c of s)
    for (const v of c.items) {
      const p = fa(c.kind, v.key);
      u.has(p) || d.push({
        id: p,
        kind: c.kind,
        key: v.key,
        span: Et(v.span),
        hidden: !1,
        source: v
      });
    }
  return d;
}
function g3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Et(l.span),
      hidden: !!l.hidden
    }))
  };
}
const qa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", uf = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", cf = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function ff(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function mf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function pf(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await vf(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
    r.width = s, r.height = i;
    const d = r.getContext("2d", { willReadFrequently: !0 });
    if (!d)
      return !1;
    d.drawImage(a, 0, 0);
    const { data: u } = d.getImageData(0, 0, s, i);
    for (let c = 3; c < u.length; c += 4)
      if ((u[c] ?? 255) < 255)
        return !0;
    return !1;
  } finally {
    URL.revokeObjectURL(l);
  }
}
function vf(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function gf(e) {
  if (ff(e))
    throw new Error(cf);
  if (!mf(e))
    throw new Error(qa);
  if (!await pf(e))
    throw new Error(uf);
}
const h3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(wa), re({
      "data-slot": "sheet-description",
      class: x(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, x(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), b3 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: P(x(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), bf = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: P(x(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), yf = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Ca), re({
      "data-slot": "sheet-title",
      class: x(Q)("text-foreground font-semibold", l.class)
    }, x(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), y3 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Sa), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ma = "sidebar_state", xf = 3600 * 24 * 7, kf = "16rem", $f = "18rem", wf = "3rem", Cf = "b", [Ct, Sf] = hn("Sidebar"), Mf = { class: "flex h-full w-full flex-col" }, Bf = ["data-state", "data-collapsible", "data-variant", "data-side"], _f = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, x3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = Ct();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: x(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : x(a) ? (t(), T(x(Zt), re({
      key: 1,
      open: x(s)
    }, d.$attrs, { "onUpdate:open": x(i) }), {
      default: L(() => [
        D(x(Jt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": x($f)
          })
        }, {
          default: L(() => [
            D(bf, { class: "sr-only" }, {
              default: L(() => [
                D(yf, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(hf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", Mf, [
              U(d.$slots, "default")
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
      "data-state": x(r),
      "data-collapsible": x(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: P(
          x(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: x(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", _f, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, Bf));
  }
}), k3 = /* @__PURE__ */ O({
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
        x(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), $3 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(x(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), w3 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(x(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), C3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(tt), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        x(Q)(
          "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "after:absolute after:-inset-2 md:after:hidden",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), S3 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(x(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(tt), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        x(Q)(
          // /70 measured at 4.26:1 against the sidebar background - short of the
          // 4.5:1 WCAG AA floor for normal text. /80 measures ~5.6:1.
          "text-sidebar-foreground/80 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-sidebar-ring/50 focus-visible:ring-[3px] [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          l.class
        )
      )
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(x(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _3 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Ha), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(x(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), A3 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: P(
        x(Q)(
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
      U(a.$slots, "default")
    ], 2));
  }
}), P3 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(x(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), z3 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(tt), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: P(
        x(Q)(
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
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
}), O3 = /* @__PURE__ */ O({
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
        x(Q)(
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
      U(a.$slots, "default")
    ], 2));
  }
}), Af = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(bn), re({ "data-slot": "tooltip" }, x(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Pf = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(yn), null, {
      default: L(() => [
        D(x(xn), re({ "data-slot": "tooltip-content" }, { ...x(i), ...d.$attrs }, {
          class: x(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(x(kn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), L3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Ma), Oe(Fe(l)), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zf = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x($n), re({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pa = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(tt), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: x(Q)(x(Lf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), V3 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = Ct(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(x(Af), { key: 1 }, {
      default: L(() => [
        D(x(zf), { "as-child": "" }, {
          default: L(() => [
            D(pa, Oe(Fe({ ...x(s), ...i.$attrs })), {
              default: L(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(x(Pf), {
          side: "right",
          align: "center",
          hidden: x(r) !== "collapsed" || x(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(f(e.tooltip), 1)
            ], 64)) : (t(), T(_e(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(pa, Oe(re({ key: 0 }, { ...x(s), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), j3 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(x(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), va = "animate-pulse rounded-md bg-primary/10", T3 = /* @__PURE__ */ O({
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
      class: P(x(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(x(Q)(va, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: P(x(Q)(va, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), D3 = /* @__PURE__ */ O({
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
        x(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), E3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(tt), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: P(
        x(Q)(
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
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), I3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(x(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), F3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !rl?.cookie.includes(`${ma}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ol("(max-width: 767px)"), i = R(!1), d = Pa(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(g) {
      d.value = g, document.cookie = `${ma}=${d.value}; path=/; max-age=${xf}`;
    }
    function c(g) {
      i.value = g;
    }
    function v() {
      return s.value ? c(!i.value) : u(!d.value);
    }
    sl("keydown", (g) => {
      g.key === Cf && (g.metaKey || g.ctrlKey) && (g.preventDefault(), v());
    });
    const p = y(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return Sf({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: c,
      toggleSidebar: v
    }), (g, C) => (t(), T(x(Ma), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": x(kf),
            "--sidebar-width-icon": x(wf)
          },
          class: x(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, g.$attrs), [
          U(g.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), N3 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = Ct();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: P(
        x(Q)(
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
      (...i) => x(a) && x(a)(...i))
    }, [
      U(r.$slots, "default")
    ], 2));
  }
}), Of = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(x(wn), re({ "data-slot": "separator" }, x(a), {
      class: x(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), R3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Of), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(x(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), U3 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = Ct();
    return (i, d) => (t(), T(ue, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(x(Q)("h-7 w-7", l.class)),
      onClick: x(s)
    }, {
      default: L(() => [
        x(a) || x(r) === "collapsed" ? (t(), T(x(Qn), { key: 0 })) : (t(), T(x(el), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Lf = Gt(
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
), H3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x(Cn), re({ "data-slot": "dropdown-menu" }, x(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Vf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, K3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Sn), re({ "data-slot": "dropdown-menu-checkbox-item" }, x(i), {
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Vf, [
          D(x(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(x(_a), { class: "size-4" })
              ])
            ]),
            _: 3
          })
        ]),
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), q3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Mn), null, {
      default: L(() => [
        D(x(Bn), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(Q)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), G3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(_n), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), W3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(x(An), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, x(r), {
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        l.class
      )
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Z3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), T(x(Pn), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, x(r), {
      class: x(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(x(zn), re({ "data-slot": "dropdown-menu-radio-group" }, x(s)), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Y3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(On), re({ "data-slot": "dropdown-menu-radio-item" }, x(i), {
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", jf, [
          D(x(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(x(tl), { class: "size-2 fill-current" })
              ])
            ]),
            _: 3
          })
        ]),
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Ln), re({ "data-slot": "dropdown-menu-separator" }, x(a), {
      class: x(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), Q3 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(x(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(x(Vn), re({ "data-slot": "dropdown-menu-sub" }, x(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), tC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(jn), re({ "data-slot": "dropdown-menu-sub-content" }, x(i), {
      class: x(Q)(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        a.class
      )
    }), {
      default: L(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aC = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(x(Tn), re({ "data-slot": "dropdown-menu-sub-trigger" }, x(r), {
      "data-inset": e.inset ? "" : void 0,
      class: x(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(x(Aa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), nC = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Le(e);
    return (r, s) => (t(), T(x(Dn), re({ "data-slot": "dropdown-menu-trigger" }, x(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lC = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(En), {
      "data-slot": "avatar",
      class: P(x(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oC = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(In), re({ "data-slot": "avatar-fallback" }, x(a), {
      class: x(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(x(Fn), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rC = /* @__PURE__ */ O({
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
      U(a.$slots, "default")
    ], 2));
  }
}), iC = /* @__PURE__ */ O({
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
      class: P(x(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(x(al), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), dC = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: P(x(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), uC = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(tt), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: P(x(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), cC = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        x(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), fC = /* @__PURE__ */ O({
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
      class: P(x(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
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
      class: P(x(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(x(Aa))
      ])
    ], 2));
  }
}), Tf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Df = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Tf, [
      D(x(Nn), re({ "data-slot": "navigation-menu-viewport" }, x(r), {
        class: x(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), pC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Rn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, x(i), {
      class: x(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((c) => [
        U(d.$slots, "default", Oe(Fe(c))),
        e.viewport ? (t(), T(Df, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), vC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Un), re({ "data-slot": "navigation-menu-content" }, x(i), {
      class: x(Q)(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        a.class
      )
    }), {
      default: L(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(x(Hn), re({ "data-slot": "navigation-menu-indicator" }, x(r), {
      class: x(Q)(
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
}), hC = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Kn), re({ "data-slot": "navigation-menu-item" }, x(a), {
      class: x(Q)("relative", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(qn), re({ "data-slot": "navigation-menu-link" }, x(i), {
      class: x(Q)(
        "data-active:focus:bg-accent data-active:hover:bg-accent data-active:bg-accent/50 data-active:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        U(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yC = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(x(Gn), re({ "data-slot": "navigation-menu-list" }, x(r), {
      class: x(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xC = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(x(Wn), re({ "data-slot": "navigation-menu-trigger" }, x(r), {
      class: x(Q)(x(Ef)(), "group", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(x(nl), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ef = Gt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), kC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(x($a), re({ "data-slot": "dialog" }, x(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(et), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), If = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Ut), re({ "data-slot": "dialog-overlay" }, x(a), {
      class: x(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Ht), null, {
      default: L(() => [
        D(If),
        D(x(Kt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...x(i) }, {
          class: x(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(x(et), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                D(x(qt)),
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
}), CC = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(x(wa), re({ "data-slot": "dialog-description" }, x(r), {
      class: x(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), SC = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: P(x(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(x(et), {
        key: 0,
        "as-child": ""
      }, {
        default: L(() => [
          D(ue, { variant: "outline" }, {
            default: L(() => [...r[0] || (r[0] = [
              N(" Close ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })) : $("", !0)
    ], 2));
  }
}), MC = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: P(x(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), BC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(x(Ht), null, {
      default: L(() => [
        D(x(Ut), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            D(x(Kt), re({
              class: x(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...x(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (c) => {
                const v = c.detail.originalEvent, p = v.target;
                (v.offsetX > p.clientWidth || v.offsetY > p.clientHeight) && c.preventDefault();
              })
            }), {
              default: L(() => [
                U(d.$slots, "default"),
                D(x(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    D(x(qt), { class: "w-4 h-4" }),
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
}), _C = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(x(Ca), re({ "data-slot": "dialog-title" }, x(r), {
      class: x(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AC = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(Sa), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), PC = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(x(Zn), re({ "data-slot": "label" }, x(a), {
      class: x(Q)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        l.class
      )
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(x(ll), {
      role: "status",
      "aria-label": "Loading",
      class: P(x(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), OC = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: P(
        x(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), LC = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: P(x(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), VC = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: P(x(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), jC = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: P(x(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), TC = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: P(x(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), DC = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: P(
        x(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), EC = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: P(x(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Ff = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Nf = { class: "flex items-start gap-3" }, Rf = { class: "min-w-0 flex-1" }, Uf = { class: "text-foreground text-sm font-medium" }, Hf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, IC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    dn((v) => (console.error(`[PkBoundary] ${r.label} failed to render`, v), i.value = !0, d.value = v instanceof Error ? v.message : null, s("error", v), !1));
    function c() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: c }), (v, p) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Ff, [
        o("div", Nf, [
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
          o("div", Rf, [
            o("p", Uf, f(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Hf, f(d.value), 1)) : $("", !0),
            o("button", {
              type: "button",
              class: "text-foreground hover:bg-accent mt-2 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs transition-colors",
              onClick: c
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
              N(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : U(v.$slots, "default", { key: u.value })
    ], 2));
  }
}), Kf = { class: "bg-card rounded-lg border" }, qf = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, Gf = { class: "min-w-0" }, Wf = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Zf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Jf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Yf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, FC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Kf, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", qf, [
        o("div", Gf, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Wf, f(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", Zf, f(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Jf, [
          U(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Yf, [
        U(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), Ga = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function NC() {
  const e = za(), l = y(() => e.props.panel?.pageFooter === !0);
  return Ot(Ga, l), l;
}
const Xf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Qf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, em = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, RC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = za(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = y(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = y(() => {
      const c = a.props.panel;
      return Array.isArray(c?.footerLinks) ? c.footerLinks : [];
    }), d = ht(Ga, y(() => !1)), u = y(() => !l.host && x(d) === !0);
    return (c, v) => u.value ? $("", !0) : (t(), n("footer", Xf, [
      o("div", Qf, [
        o("p", null, "© " + f(x(r)) + " " + f(s.value), 1),
        i.value.length ? (t(), n("nav", em, [
          (t(!0), n(z, null, V(i.value, (p) => (t(), T(x(ul), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              N(f(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), tm = { class: "flex shrink-0 flex-col items-center" }, am = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, UC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", tm, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", am)) : $("", !0),
        o("div", {
          class: P(["size-full overflow-hidden bg-white", s.value])
        }, [
          U(i.$slots, "default")
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
}), nm = { class: "flex flex-col gap-2" }, lm = { class: "min-w-0 flex-1" }, om = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, sm = ["disabled", "aria-label", "onClick"], rm = ["disabled", "aria-label", "onClick"], im = ["disabled", "title", "aria-label", "onClick"], dm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, um = ["disabled"], HC = /* @__PURE__ */ O({
  __name: "PkRepeater",
  props: {
    modelValue: {},
    children: {},
    itemLabel: { default: "Item" },
    minItems: { default: null },
    maxItems: { default: null },
    disabled: { type: Boolean, default: !1 },
    errors: { default: () => ({}) },
    fieldKey: {},
    childOptions: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    let s = 0;
    const i = R(d(a.modelValue));
    function d(B) {
      return Array.isArray(B) ? B.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    me(
      () => a.modelValue,
      (B) => {
        JSON.stringify(B ?? null) !== JSON.stringify(u()) && (i.value = d(B));
      }
    );
    function u() {
      const B = [];
      for (const m of i.value) {
        const h = {};
        let w = !1;
        for (const A of a.children) {
          const E = m.data[A.key] ?? null;
          h[A.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && (w = !0);
        }
        w && B.push(h);
      }
      return B.length ? B : null;
    }
    function c() {
      r("update:modelValue", u());
    }
    const v = y(() => a.maxItems !== null && i.value.length >= a.maxItems), p = y(() => a.minItems !== null && i.value.length <= a.minItems), g = y(() => a.children.length === 1);
    function C() {
      if (v.value || a.disabled)
        return;
      const B = {};
      for (const m of a.children)
        B[m.key] = null;
      i.value.push({ uid: s++, data: B });
    }
    function b(B) {
      i.value = i.value.filter((m) => m.uid !== B), c();
    }
    function k(B, m) {
      const h = B + m;
      if (h < 0 || h >= i.value.length)
        return;
      const w = [...i.value], [A] = w.splice(B, 1);
      w.splice(h, 0, A), i.value = w, c();
    }
    function M(B, m, h) {
      const w = i.value.find((A) => A.uid === B);
      w && (w.data[m] = h, c());
    }
    function S(B, m) {
      return a.errors[`${a.fieldKey}.${B}.${m}`];
    }
    return (B, m) => (t(), n("div", nm, [
      (t(!0), n(z, null, V(i.value, (h, w) => (t(), n("div", {
        key: h.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", g.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, f(w + 1), 3),
        o("div", lm, [
          g.value ? (t(), T(Xe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: h.data[e.children[0].key],
            error: S(w, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => M(h.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", om, [
            (t(!0), n(z, null, V(e.children, (A) => (t(), T(Xe, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: h.data[A.key],
              error: S(w, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (E) => M(h.uid, A.key, E)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: P(["flex shrink-0 items-center gap-0.5", g.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === 0,
            "aria-label": `Move ${e.itemLabel} ${w + 1} up`,
            onClick: (A) => k(w, -1)
          }, [...m[0] || (m[0] = [
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
          ])], 8, sm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${w + 1} down`,
            onClick: (A) => k(w, 1)
          }, [...m[1] || (m[1] = [
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
          ])], 8, rm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${w + 1}`,
            onClick: (A) => b(h.uid)
          }, [...m[2] || (m[2] = [
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
          ])], 8, im)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", dm, " No " + f(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      v.value ? $("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: C
      }, [
        m[3] || (m[3] = o("svg", {
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
        N(" Add " + f(e.itemLabel.toLowerCase()), 1)
      ], 8, um))
    ]));
  }
}), cm = { class: "space-y-1" }, fm = { class: "flex items-center gap-1" }, mm = ["disabled", "title", "aria-label", "onClick"], pm = ["aria-pressed"], vm = ["id", "value", "rows", "disabled"], gm = ["innerHTML"], hm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = y(() => a.modelValue ?? "");
    function d(g) {
      return g.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = y(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function c(g, C = g) {
      const b = document.getElementById(a.id ?? "");
      if (b === null)
        return;
      const k = b.selectionStart, M = b.selectionEnd, S = i.value.slice(k, M);
      r(
        "update:modelValue",
        `${i.value.slice(0, k)}${g}${S}${C}${i.value.slice(M)}`
      );
    }
    const v = {
      bold: { label: "B", run: () => c("**") },
      italic: { label: "I", run: () => c("*") },
      code: { label: "</>", run: () => c("`") },
      heading: { label: "H", run: () => c("## ", "") },
      list: { label: "•", run: () => c("- ", "") },
      link: { label: "🔗", run: () => c("[", "](https://)") }
    }, p = y(
      () => (a.toolbar ?? Object.keys(v)).filter((g) => g in v)
    );
    return (g, C) => (t(), n("div", cm, [
      o("div", fm, [
        (t(!0), n(z, null, V(p.value, (b) => (t(), n("button", {
          key: b,
          type: "button",
          disabled: e.disabled,
          title: b,
          "aria-label": b,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => v[b].run()
        }, f(v[b].label), 9, mm))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (b) => s.value = !s.value)
        }, " Preview ", 8, pm)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, gm)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (b) => r("update:modelValue", b.target.value))
      }, null, 40, vm))
    ]));
  }
}), bm = { class: "space-y-1" }, ym = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, xm = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, km = ["id", "value", "rows", "disabled"], $m = { class: "text-muted-foreground text-xs font-normal" }, wm = {
  key: 0,
  class: "text-destructive text-xs"
}, Cm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!0), d = y(() => a.modelValue ?? ""), u = y(() => Math.max(d.value.split(`
`).length, 1)), c = y(() => {
      if (a.language !== "json" || d.value.trim() === "")
        return null;
      try {
        return JSON.parse(d.value), null;
      } catch (g) {
        return g instanceof Error ? g.message : "Not valid JSON.";
      }
    });
    function v(g) {
      r("update:modelValue", g.target.value);
    }
    function p(g) {
      if (g.key === "Escape") {
        i.value = !1;
        return;
      }
      if (g.key !== "Tab" && (i.value = !0), g.key !== "Tab" || !i.value)
        return;
      g.preventDefault();
      const C = g.target, b = C.selectionStart, k = C.selectionEnd, M = `${d.value.slice(0, b)}    ${d.value.slice(k)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = b + 4;
      });
    }
    return (g, C) => (t(), n("div", bm, [
      o("div", ym, [
        o("div", xm, [
          (t(!0), n(z, null, V(u.value, (b) => (t(), n("div", { key: b }, f(b), 1))), 128))
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
        }, null, 40, km)
      ]),
      o("p", $m, f(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      c.value ? (t(), n("p", wm, f(c.value), 1)) : $("", !0)
    ]));
  }
}), Sm = { class: "space-y-3" }, Mm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Bm = { class: "text-sm font-medium" }, _m = { class: "flex items-center gap-1" }, Am = ["disabled", "onClick"], Pm = ["disabled", "onClick"], zm = ["disabled", "onClick"], Om = { class: "space-y-3 p-3" }, Lm = { class: "flex flex-wrap items-center gap-2" }, Vm = ["disabled", "onClick"], jm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, KC = /* @__PURE__ */ O({
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
      () => Object.fromEntries(a.blocks.map((C) => [C.type, C]))
    ), d = y(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u(C) {
      r("update:modelValue", C);
    }
    function c(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function v(C) {
      u(s.value.filter((b, k) => k !== C));
    }
    function p(C, b) {
      const k = C + b;
      if (k < 0 || k >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(C, 1);
      M.splice(k, 0, S), u(M);
    }
    function g(C, b, k) {
      u(
        s.value.map(
          (M, S) => S === C ? { ...M, data: { ...M.data, [b]: k } } : M
        )
      );
    }
    return (C, b) => (t(), n("div", Sm, [
      (t(!0), n(z, null, V(s.value, (k, M) => (t(), n("div", {
        key: `${k.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", Mm, [
          o("span", Bm, f(i.value[k.type]?.label ?? k.type), 1),
          o("div", _m, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => p(M, -1)
            }, " ↑ ", 8, Am),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => p(M, 1)
            }, " ↓ ", 8, Pm),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => v(M)
            }, " Remove ", 8, zm)
          ])
        ]),
        o("div", Om, [
          (t(!0), n(z, null, V(i.value[k.type]?.fields ?? [], (S) => (t(), T(Xe, {
            key: S.key,
            field: S,
            value: k.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => g(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Lm, [
        (t(!0), n(z, null, V(e.blocks, (k) => (t(), n("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => c(k.type)
        }, " + " + f(k.label), 9, Vm))), 128)),
        d.value ? (t(), n("span", jm, f(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Tm = ["name", "value", "checked", "disabled", "onChange"], Dm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Em = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, V(e.options, (u) => (t(), n("label", {
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
          onChange: (c) => r("update:modelValue", u.value)
        }, null, 40, Tm),
        N(" " + f(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Dm, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Im = ["value", "checked", "disabled", "onChange"], Fm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Nm = /* @__PURE__ */ O({
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
    function i(c) {
      return s.value.some((v) => v == c.value);
    }
    function d(c) {
      r(
        "update:modelValue",
        i(c) ? s.value.filter((v) => v != c.value) : [...s.value, c.value]
      );
    }
    const u = y(
      () => a.field.columns && a.field.columns > 1 ? { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` } : void 0
    );
    return (c, v) => (t(), n("div", {
      class: "grid gap-x-4 gap-y-2",
      style: se(u.value)
    }, [
      (t(!0), n(z, null, V(e.options, (p) => (t(), n("label", {
        key: String(p.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (g) => d(p)
        }, null, 40, Im),
        N(" " + f(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Fm, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Rm = { class: "flex flex-col gap-1.5" }, Um = ["aria-label", "onClick"], Hm = ["placeholder", "disabled", "maxlength"], Km = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, qm = ["onClick"], Gm = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Wm = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = y(
      () => Array.isArray(a.modelValue) ? a.modelValue : []
    ), d = y(() => i.value.length >= (a.field.max ?? 25)), u = y(
      () => (a.field.suggestions ?? []).filter(
        (g) => !i.value.some((C) => C.toLowerCase() === g.toLowerCase())
      )
    );
    function c(g) {
      const C = g.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((b) => b.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function v(g) {
      r(
        "update:modelValue",
        i.value.filter((C, b) => b !== g)
      );
    }
    function p(g) {
      if (g.key === "Enter" || g.key === ",") {
        g.preventDefault(), c(s.value);
        return;
      }
      g.key === "Backspace" && s.value === "" && i.value.length > 0 && v(i.value.length - 1);
    }
    return (g, C) => (t(), n("div", Rm, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, V(i.value, (b, k) => (t(), n("span", {
          key: `${b}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(f(b) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${b}`,
            onClick: (M) => v(k)
          }, " × ", 8, Um))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (b) => s.value = b),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (b) => c(s.value))
        }, null, 40, Hm), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Km, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, V(u.value, (b) => (t(), n("button", {
          key: b,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => c(b)
        }, f(b), 9, qm))), 128))
      ])) : $("", !0),
      d.value ? (t(), n("p", Gm, " That is the maximum of " + f(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), Zm = 4.5, ga = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Wa(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function At(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function It(e) {
  const [l, a, r] = Wa(e);
  return 0.2126 * At(l) + 0.7152 * At(a) + 0.0722 * At(r);
}
function Za(e, l) {
  const a = It(e), r = It(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Jm(e, l, a) {
  if (!ga.test(e) || !ga.test(l))
    return e;
  const r = It(l) > 0.5, s = r ? 0 : 255;
  let i = Wa(e);
  for (let d = 0; d <= 20; d++) {
    const u = Ym(i);
    if (Za(u, l) >= a)
      return u;
    i = i.map((c) => c + (s - c) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Ym(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Xm = { class: "flex flex-col gap-2" }, Qm = { class: "flex items-center gap-2" }, ep = {
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
}, tp = ["value", "disabled", "aria-label"], ap = ["value", "disabled", "placeholder"], np = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, lp = ["aria-label", "title", "onClick"], op = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, sp = /* @__PURE__ */ O({
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
      const k = b.trim();
      if (k === "")
        return "";
      const M = k.startsWith("#") ? k : `#${k}`;
      return s.test(M) ? M.toLowerCase() : k;
    }
    function c(b) {
      r("update:modelValue", u(b.target.value));
    }
    const v = y(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Za(i.value, a.field.contrastBackground)), p = y(() => a.field.contrastMinRatio ?? Zm), g = y(() => v.value !== null && v.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Jm(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (b, k) => (t(), n("div", Xm, [
      o("div", Qm, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, tp)) : (t(), n("span", ep)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: c
        }, null, 40, ap)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", np, [
        (t(!0), n(z, null, V(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, lp))), 128))
      ])) : $("", !0),
      g.value ? (t(), n("p", op, [
        o("span", null, " This fails contrast at " + f(v.value.toFixed(1)) + ":1 - it needs at least " + f(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), rp = ["aria-disabled"], ip = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null);
    let i = null, d = null, u = null;
    const c = y(() => {
      const C = a.modelValue?.[a.latKey], b = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof b == "number" ? { lat: C, lng: b } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function v() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([c.value.lat, c.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), g(), a.pickable && !a.disabled && i.on("click", (b) => {
        r("update:modelValue", {
          [a.latKey]: Number(b.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(b.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const C of a.markers) {
          const b = u.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && b.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function g() {
      if (!i || !u)
        return;
      const C = a.modelValue?.[a.latKey], b = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof b != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([C, b]) : d = u.circleMarker([C, b], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, b], i.getZoom());
    }
    return ve(() => {
      v();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => a.modelValue,
      () => g(),
      { deep: !0 }
    ), (C, b) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, rp));
  }
}), dp = { class: "flex flex-col gap-2" }, up = { class: "text-muted-foreground text-xs font-normal" }, cp = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", dp, [
      D(ip, {
        "model-value": s.value,
        center: e.field.defaultCenter ?? null,
        zoom: e.field.zoom ?? 12,
        height: e.field.height ?? 280,
        "lat-key": i.value,
        "lng-key": d.value,
        disabled: e.disabled,
        pickable: "",
        "onUpdate:modelValue": c[0] || (c[0] = (v) => r("update:modelValue", v))
      }, null, 8, ["model-value", "center", "zoom", "height", "lat-key", "lng-key", "disabled"]),
      o("p", up, [
        N(" Click the map to set " + f(i.value) + " / " + f(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + f(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + f(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), fp = { class: "flex flex-col gap-2" }, mp = ["width", "height"], pp = ["value", "disabled"], vp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, gp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = y(() => {
      if (a.field.from) {
        const c = a.values?.[a.field.from];
        return c == null ? "" : String(c);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), d = y(() => a.field.size ?? 160);
    async function u() {
      if (!s.value)
        return;
      const c = i.value;
      if (c === "") {
        s.value.getContext("2d")?.clearRect(0, 0, d.value, d.value);
        return;
      }
      await (await import("qrcode")).toCanvas(s.value, c, {
        width: d.value,
        margin: 1,
        color: { dark: "#0f172a", light: "#ffffff" }
      });
    }
    return ve(() => {
      u();
    }), me(i, () => {
      u();
    }), (c, v) => (t(), n("div", fp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, mp),
      e.field.from ? (t(), n("p", vp, "From " + f(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: v[0] || (v[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, pp))
    ]));
  }
}), hp = { class: "flex flex-col gap-2" }, bp = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, yp = ["aria-label"], xp = {
  key: 0,
  class: "text-destructive text-xs"
}, kp = ["value", "disabled"], $p = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, wp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = y(() => {
      if (a.field.from) {
        const v = a.values?.[a.field.from];
        return v == null ? "" : String(v);
      }
      return a.modelValue == null ? "" : String(a.modelValue);
    }), u = y(() => (a.field.format ?? "CODE128").toUpperCase());
    async function c() {
      if (!s.value)
        return;
      const v = d.value.trim();
      for (i.value = null; s.value.firstChild; )
        s.value.removeChild(s.value.firstChild);
      if (v !== "")
        try {
          const g = (await import("jsbarcode")).default;
          g(s.value, v, {
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
      c();
    }), me([d, u], () => {
      c();
    }), (v, p) => (t(), n("div", hp, [
      o("div", bp, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, yp))
      ]),
      i.value ? (t(), n("p", xp, f(i.value), 1)) : $("", !0),
      e.field.from ? (t(), n("p", $p, "From " + f(e.field.from) + " (" + f(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (g) => r("update:modelValue", g.target.value))
      }, null, 40, kp))
    ]));
  }
}), Cp = { class: "mr-2 inline-block w-3 opacity-60" }, Sp = {
  key: 0,
  class: "text-muted-foreground p-3"
}, Mp = /* @__PURE__ */ O({
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
`), c = Math.max(d.length, u.length), v = [];
      for (let p = 0; p < c; p++) {
        const g = d[p], C = u[p];
        if (g === C) {
          g !== void 0 && v.push({ kind: "same", text: g });
          continue;
        }
        g !== void 0 && v.push({ kind: "del", text: g }), C !== void 0 && v.push({ kind: "add", text: C });
      }
      return v;
    });
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, V(i.value, (c, v) => (t(), n("div", {
        key: v,
        class: P(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": c.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": c.kind === "add",
          "text-muted-foreground": c.kind === "same"
        }])
      }, [
        o("span", Cp, f(c.kind === "add" ? "+" : c.kind === "del" ? "-" : " "), 1),
        N(" " + f(c.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Sp, "No differences.")) : $("", !0)
    ], 4));
  }
}), Bp = { class: "flex flex-col gap-3" }, _p = { class: "flex items-center justify-between gap-2" }, Ap = { class: "text-sm font-medium" }, Pp = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, zp = { class: "grid grid-cols-7 gap-1" }, Op = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Lp = ["title"], qC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = y(() => a.value.getFullYear()), s = y(() => a.value.getMonth()), i = y(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = y(() => {
      const p = /* @__PURE__ */ new Map();
      for (const g of l.events ?? []) {
        const C = p.get(g.date) ?? [];
        C.push(g), p.set(g.date, C);
      }
      return p;
    }), u = y(() => {
      const g = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), b = [];
      for (let k = 0; k < g; k++)
        b.push({ day: null, key: `pad-${k}`, events: [] });
      for (let k = 1; k <= C; k++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(k).padStart(2, "0")}`;
        b.push({ day: k, key: M, events: d.value.get(M) ?? [] });
      }
      return b;
    });
    function c() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function v() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, g) => (t(), n("div", Bp, [
      o("div", _p, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: c
        }, " Prev "),
        o("p", Ap, f(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: v
        }, " Next ")
      ]),
      o("div", Pp, [
        (t(), n(z, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, f(C), 1)), 64))
      ]),
      o("div", zp, [
        (t(!0), n(z, null, V(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", Op, f(C.day), 1)) : $("", !0),
          (t(!0), n(z, null, V(C.events.slice(0, 3), (b, k) => (t(), n("p", {
            key: `${C.key}-${k}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: b.label
          }, f(b.label), 9, Lp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Vp = { class: "flex items-center gap-3" }, jp = ["min", "max", "step", "value", "disabled", "aria-label"], Tp = { class: "flex shrink-0 items-center gap-1" }, Dp = ["min", "max", "step", "value", "disabled"], Ep = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Ip = /* @__PURE__ */ O({
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
    }), c = y(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function v(p) {
      if (p === "") {
        r("update:modelValue", null);
        return;
      }
      const g = Number(p);
      r("update:modelValue", Number.isFinite(g) ? g : null);
    }
    return (p, g) => (t(), n("div", Vp, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: g[0] || (g[0] = (C) => v(C.target.value))
      }, null, 40, jp),
      o("div", Tp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: c.value ? "" : u.value,
          disabled: e.disabled,
          onInput: g[1] || (g[1] = (C) => v(C.target.value))
        }, null, 40, Dp),
        e.field.unit ? (t(), n("span", Ep, f(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Pt(e, l) {
  ft.set(e, l);
}
function Fp(e) {
  return ft.get(e);
}
function GC(e) {
  return ft.has(e);
}
function Np() {
  return [...ft.keys()].sort();
}
function WC() {
  ft.clear();
}
const Rp = ["name", "value", "checked", "disabled", "onChange"], Up = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Hp = { class: "whitespace-nowrap" }, Kp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, qp = ["name", "value", "checked", "disabled", "onChange"], Gp = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Wp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Zp = { class: "text-center text-xs font-medium" }, Jp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Yp = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Xp = /* @__PURE__ */ O({
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
      () => a.field.preview ? Fp(a.field.preview) : void 0
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
    function c(v) {
      return a.modelValue != null && v.value == a.modelValue;
    }
    return (v, p) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, V(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: P(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          c(g) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: c(g),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", g.value)
        }, null, 40, Rp),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Up, [
          (t(), T(_e(s.value), {
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", Hp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Kp, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, V(e.options, (g) => (t(), n("label", {
        key: String(g.value),
        class: P(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          c(g) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: g.value,
          checked: c(g),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", g.value)
        }, null, 40, qp),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Gp, [
          s.value ? (t(), T(_e(s.value), {
            key: 0,
            value: g.value,
            label: g.label,
            selected: c(g)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Wp, " no preview ")) : $("", !0)
        ]),
        o("span", Zp, f(g.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Jp, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Yp, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, f(e.field.preview), 1),
        N(". Registered: " + f(x(Np)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Qp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, ev = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Qp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), tv = { class: "flex flex-col items-center gap-1 text-center" }, av = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Ja = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", tv, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, f(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", av, f(e.caption), 1)) : $("", !0)
    ]));
  }
}), nv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, lv = { class: "flex items-center gap-3" }, ov = ["src"], sv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, rv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, iv = {
  key: 0,
  class: "text-right text-sm"
}, dv = { class: "text-neutral-500" }, uv = { class: "tabular-nums" }, cv = { key: 1 }, fv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, mv = { class: "mt-2 font-medium" }, pv = { key: 2 }, vv = { class: "w-full text-sm" }, gv = { class: "w-full py-3 pr-2" }, hv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, bv = { key: 0 }, yv = ["colspan"], xv = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, kv = { class: "w-64 text-sm" }, $v = { class: "tabular-nums" }, wv = {
  key: 3,
  class: "py-2"
}, Cv = { key: 4 }, Sv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, Mv = { class: "mt-2 flex flex-col gap-1 text-sm" }, Bv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, _v = { key: 0 }, Av = {
  key: 1,
  class: "mt-1"
}, Pv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, zv = /* @__PURE__ */ O({
  __name: "PkDocument",
  props: {
    document: {}
  },
  setup(e) {
    const l = e;
    function a() {
      return l.document.branding.mono ? "#000000" : l.document.branding.accent;
    }
    function r(c) {
      return c.meta ?? [];
    }
    function s(c) {
      return c.rows ?? [];
    }
    function i(c) {
      return c.totals ?? [];
    }
    function d(c) {
      return c ?? [];
    }
    function u(c) {
      return c ?? "";
    }
    return (c, v) => (t(), n("article", nv, [
      o("div", lv, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, ov)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, f(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, V(e.document.blocks, (p, g) => (t(), n(z, { key: g }, [
        p.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: a() })
            }, f(p.title), 5),
            p.subtitle ? (t(), n("p", sv, f(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), n("p", rv, f(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), n("dl", iv, [
            (t(!0), n(z, null, V(r(p), (C, b) => (t(), n("div", {
              key: b,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", dv, f(C.label), 1),
              o("dd", uv, f(C.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", cv, [
          o("h2", fv, f(p.heading), 1),
          o("p", mv, f(p.name), 1),
          (t(!0), n(z, null, V(d(p.lines), (C, b) => (t(), n("p", {
            key: b,
            class: "text-sm text-neutral-600"
          }, f(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", pv, [
          o("table", vv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, V(d(p.columns), (C, b) => (t(), n("th", {
                  key: b,
                  class: P(["pb-2 font-medium", b > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, f(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, V(s(p), (C, b) => (t(), n("tr", {
                key: b,
                class: "border-b border-neutral-200"
              }, [
                o("td", gv, [
                  o("p", null, f(C.description), 1),
                  C.detail ? (t(), n("p", hv, f(C.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, V(C.cells, (k, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, f(k), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", bv, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, f(p.empty), 9, yv)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", xv, [
            o("dl", kv, [
              (t(!0), n(z, null, V(i(p), (C, b) => (t(), n("div", {
                key: b,
                class: P([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: P(C.strong ? "" : "text-neutral-600")
                }, f(C.label), 3),
                o("dd", $v, f(C.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), n("section", wv, [
          D(Ja, {
            code: u(p.code),
            caption: u(p.caption),
            style: se(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", Cv, [
          o("h2", Sv, f(p.heading), 1),
          o("ol", Mv, [
            (t(!0), n(z, null, V(d(p.items), (C, b) => (t(), n("li", {
              key: b,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, f(b + 1) + ".", 5),
              o("span", null, f(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: P(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: a() } : void 0)
        }, f(p.text), 7)) : p.type === "footer" ? (t(), n("footer", Bv, [
          p.text ? (t(), n("p", _v, f(p.text), 1)) : $("", !0),
          d(p.contacts).length ? (t(), n("p", Av, f(d(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", Pv, " This document contains a “" + f(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Ov = ["aria-label", "title"], Lv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, ZC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ua(), r = y(() => l.value.theme === "dark");
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
      (t(), n("svg", Lv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Vv))
      ]))
    ], 8, Ov));
  }
}), jv = ["width", "height"], Tv = { key: 0 }, Dv = ["x1", "x2", "y1", "y2"], Ev = ["x", "y"], Iv = ["x1", "x2", "y1", "y2"], Fv = ["x", "y"], Nv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Rv = ["x", "y", "width", "height", "fill", "fill-opacity"], Uv = ["x", "y"], Hv = ["x", "y"], Kv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, qv = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Gv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Wv = { class: "text-xs font-semibold tabular-nums" }, Zv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Jv = { class: "text-muted-foreground" }, ha = 5.6, JC = /* @__PURE__ */ O({
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
    function r(_) {
      return a[_] ?? _;
    }
    function s(_, F) {
      if (!l.thresholds?.length)
        return F;
      const j = l.thresholds.find((J) => _ < J.max);
      return r(j ? j.color : l.aboveColor);
    }
    const i = R(null), d = R(560), u = R(null);
    let c = null;
    ve(() => {
      c = new ResizeObserver((_) => {
        d.value = Math.max(160, _[0].contentRect.width);
      }), i.value && c.observe(i.value);
    }), ke(() => c?.disconnect());
    const v = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], p = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? v[j % v.length]
    }))), g = y(() => p.value[0]?.points.map((_) => _.label) ?? []), C = y(() => g.value.length), b = y(() => l.orientation === "horizontal"), k = y(() => Math.max(0, ...g.value.map((_) => _.length))), M = y(() => {
      if (!b.value)
        return l.showAxis ? 44 : 8;
      const _ = k.value * ha + 16;
      return Math.round(Math.min(Math.max(60, _), d.value * 0.4));
    }), S = y(() => Math.max(4, Math.floor((M.value - 16) / ha)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const m = y(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), h = y(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), w = (_) => l.format ? l.format(_) : A(_);
    function A(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const E = y(() => {
      const _ = g.value.map(
        (ge, ye) => l.stacked ? p.value.reduce((le, Y) => le + Math.max(0, Y.points[ye]?.value ?? 0), 0) : Math.max(...p.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }), I = y(
      () => (b.value ? h.value.h : h.value.w) / Math.max(1, C.value)
    ), ae = y(() => I.value * 0.68), H = y(
      () => l.stacked || p.value.length <= 1 ? ae.value : ae.value / p.value.length
    ), K = y(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return p.value.forEach((j, J) => {
        j.points.forEach((ge, ye) => {
          const Y = Math.max(0, ge.value) / E.value * (b.value ? h.value.w : h.value.h), ee = (b.value ? m.value.top : m.value.left) + ye * I.value + (I.value - ae.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            b.value ? {
              x: m.value.left + F[ye],
              y: ee + Ce,
              w: Y,
              h: Math.max(0, H.value - 2),
              color: s(ge.value, j.color),
              label: ge.label,
              name: j.name,
              value: ge.value,
              index: ye
            } : {
              x: ee + Ce,
              y: m.value.top + h.value.h - Y - F[ye],
              w: Math.max(0, H.value - 2),
              h: Y,
              color: s(ge.value, j.color),
              label: ge.label,
              name: j.name,
              value: ge.value,
              index: ye
            }
          ), l.stacked && (F[ye] += Y);
        });
      }), _;
    }), q = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: E.value * (b.value ? _ : 1 - _),
        x: m.value.left + h.value.w * _,
        y: m.value.top + h.value.h * _
      }))
    ), oe = y(() => Math.max(1, Math.ceil(C.value / (b.value ? 14 : 10))));
    function ne(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (b.value ? m.value.top : m.value.left) + _ * I.value + I.value / 2;
    }
    const G = y(() => u.value === null ? null : {
      label: g.value[u.value],
      rows: p.value.map((_) => ({
        name: _.name,
        color: _.color,
        value: _.points[u.value]?.value ?? 0
      }))
    });
    return (_, F) => (t(), n("div", {
      ref_key: "host",
      ref: i,
      class: "relative w-full"
    }, [
      C.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: d.value,
          height: e.height,
          onMouseleave: F[0] || (F[0] = (j) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", Tv, [
            b.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.x}`,
                x1: j.x,
                x2: j.x,
                y1: m.value.top,
                y2: m.value.top + h.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Dv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.x}`,
                x: j.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(j.value)), 9, Ev))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: j.y,
                y2: j.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Iv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.y}`,
                x: m.value.left - 8,
                y: j.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, f(A(j.value)), 9, Fv))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, V(g.value, (j, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: b.value ? m.value.left : m.value.left + J * I.value,
            y: b.value ? m.value.top + J * I.value : m.value.top,
            width: b.value ? h.value.w : I.value,
            height: b.value ? I.value : h.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, Nv))), 128)),
          (t(!0), n(z, null, V(K.value, (j, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: j.x,
            y: j.y,
            width: j.w,
            height: j.h,
            fill: j.color,
            "fill-opacity": u.value === null || u.value === j.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, Rv))), 128)),
          b.value ? (t(!0), n(z, { key: 1 }, V(g.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: m.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(f(B(j)) + " ", 1),
            o("title", null, f(j), 1)
          ], 8, Uv)), [
            [He, ne(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, V(g.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(j), 9, Hv)), [
            [He, ne(J)]
          ])), 128))
        ], 40, jv)),
        G.value ? (t(), n("div", Kv, [
          o("p", qv, f(G.value.label), 1),
          (t(!0), n(z, null, V(G.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Gv, f(j.name || "Value"), 1),
            o("span", Wv, f(w(j.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Zv, [
          (t(!0), n(z, null, V(p.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Jv, f(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Yv = ["width", "height"], Xv = ["id"], Qv = ["stop-color"], eg = ["stop-color"], tg = { key: 0 }, ag = ["x1", "x2", "y1", "y2"], ng = ["x", "y"], lg = ["x", "y"], og = ["x1", "x2", "y1", "y2"], sg = ["d", "fill"], rg = ["d", "stroke", "stroke-dasharray"], ig = ["cx", "cy", "fill"], dg = { key: 1 }, ug = ["x1", "x2", "y1", "y2"], cg = ["cx", "cy", "fill"], fg = ["x", "y"], mg = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, pg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, vg = { class: "text-xs font-semibold tabular-nums" }, gg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, hg = { class: "text-muted-foreground" }, bg = /* @__PURE__ */ O({
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
    const l = e, a = y(() => v.value.some((_) => _.axis === "right")), r = R(null), s = R(560), i = R(null);
    let d = null;
    ve(() => {
      d = new ResizeObserver((_) => {
        s.value = Math.max(160, _[0].contentRect.width);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = [
      "var(--primary)",
      "var(--chart-2)",
      "var(--chart-4)",
      "var(--chart-3)",
      "var(--chart-5)"
    ], c = Math.random().toString(36).slice(2, 9), v = y(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? u[j % u.length]
    }))), p = y(() => v.value[0]?.points.map((_) => _.label) ?? []), g = y(() => p.value.length), C = y(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), b = (_) => l.format ? l.format(_) : k(_);
    function k(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function M(_) {
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }
    const S = y(
      () => M(
        v.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), B = y(
      () => M(
        v.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), m = y(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function h(_) {
      return C.value.left + (g.value <= 1 ? 0 : _ / (g.value - 1) * m.value.w);
    }
    function w(_, F = "left") {
      const j = F === "right" ? B.value : S.value;
      return C.value.top + m.value.h - _ / j * m.value.h;
    }
    const A = y(
      () => v.value.map((_) => {
        const F = _.points.map((J, ge) => ({
          ...J,
          x: h(ge),
          y: w(J.value, _.axis ?? "left")
        })), j = _.stepped ? E(F) : I(F);
        return { ..._, pts: F, line: j, area: ae(j, F) };
      })
    );
    function E(_) {
      if (_.length === 0)
        return "";
      let F = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let j = 1; j < _.length; j++)
        F += ` L${_[j].x.toFixed(2)},${_[j - 1].y.toFixed(2)} L${_[j].x.toFixed(2)},${_[j].y.toFixed(2)}`;
      return F;
    }
    function I(_) {
      const F = _.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${_[0].x},${_[0].y}`;
      const j = [], J = [];
      for (let le = 0; le < F - 1; le++)
        j[le] = _[le + 1].x - _[le].x, J[le] = j[le] === 0 ? 0 : (_[le + 1].y - _[le].y) / j[le];
      const ge = [J[0]];
      for (let le = 1; le < F - 1; le++)
        if (J[le - 1] * J[le] <= 0)
          ge[le] = 0;
        else {
          const Y = 2 * j[le] + j[le - 1], ee = j[le] + 2 * j[le - 1];
          ge[le] = (Y + ee) / (Y / J[le - 1] + ee / J[le]);
        }
      ge[F - 1] = J[F - 2];
      let ye = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const Y = j[le] / 3;
        ye += ` C${(_[le].x + Y).toFixed(2)},${(_[le].y + ge[le] * Y).toFixed(2)} ${(_[le + 1].x - Y).toFixed(2)},${(_[le + 1].y - ge[le + 1] * Y).toFixed(2)} ${_[le + 1].x.toFixed(2)},${_[le + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function ae(_, F) {
      if (F.length === 0)
        return "";
      const j = C.value.top + m.value.h;
      return `${_} L${F[F.length - 1].x.toFixed(2)},${j} L${F[0].x.toFixed(2)},${j} Z`;
    }
    const H = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + m.value.h * _,
        value: S.value * (1 - _)
      }))
    ), K = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + m.value.h * _,
        value: B.value * (1 - _)
      }))
    ), q = y(() => Math.max(1, Math.ceil(g.value / 8)));
    function oe(_) {
      return _ === g.value - 1 || _ % q.value === 0;
    }
    function ne(_) {
      const F = _.currentTarget.getBoundingClientRect(), j = _.clientX - F.left - C.value.left, J = g.value <= 1 ? 1 : m.value.w / (g.value - 1);
      i.value = Math.min(g.value - 1, Math.max(0, Math.round(j / J)));
    }
    const Z = y(() => {
      if (i.value === null || g.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: h(_),
        label: p.value[_],
        rows: A.value.map((F) => ({
          name: F.name,
          color: F.color,
          value: F.points[_]?.value ?? 0,
          y: F.pts[_]?.y ?? 0
        }))
      };
    }), G = y(() => {
      if (!Z.value)
        return {};
      const _ = Z.value.x > s.value * 0.6;
      return {
        left: `${Z.value.x}px`,
        top: "8px",
        transform: _ ? "translateX(-100%) translateX(-12px)" : "translateX(12px)"
      };
    });
    return (_, F) => (t(), n("div", {
      ref_key: "host",
      ref: r,
      class: "relative w-full"
    }, [
      g.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ne,
          onMouseleave: F[0] || (F[0] = (j) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("linearGradient", {
              id: `pk-fill-${x(c)}-${J}`,
              key: J,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": j.color,
                "stop-opacity": "0.25"
              }, null, 8, Qv),
              o("stop", {
                offset: "100%",
                "stop-color": j.color,
                "stop-opacity": "0.01"
              }, null, 8, eg)
            ], 8, Xv))), 128))
          ]),
          e.showAxis ? (t(), n("g", tg, [
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("line", {
              key: j.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: j.y,
              y2: j.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, ag))), 128)),
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("text", {
              key: `t-${j.y}`,
              x: C.value.left - 8,
              y: j.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(j.value)), 9, ng))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, V(K.value, (j) => (t(), n("text", {
              key: `rt-${j.y}`,
              x: s.value - C.value.right + 8,
              y: j.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, f(k(j.value)), 9, lg))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, V(p.value, (j, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: h(J),
            x2: h(J),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, og)), [
            [He, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            j.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: j.area,
              fill: `url(#pk-fill-${x(c)}-${J})`
            }, null, 8, sg)) : $("", !0),
            o("path", {
              d: j.line,
              fill: "none",
              stroke: j.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": j.dashed ? "6 4" : void 0
            }, null, 8, rg),
            j.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: j.pts[0].x,
              cy: j.pts[0].y,
              r: "3",
              fill: j.color
            }, null, 8, ig)) : $("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", dg, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, ug),
            (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: j.y,
              r: "4",
              fill: j.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, cg))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, V(p.value, (j, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: h(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, f(j), 9, fg)), [
            [He, oe(J)]
          ])), 128))
        ], 40, Yv)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(G.value)
        }, [
          o("p", mg, f(Z.value.label), 1),
          (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", pg, f(j.name || "Value"), 1),
            o("span", vg, f(b(j.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", gg, [
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", hg, f(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), yg = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, xg = { class: "text-muted-foreground text-[11px] capitalize" }, kg = { class: "text-sm font-semibold tabular-nums" }, $g = {
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
    return (l, a) => (t(), n("div", yg, [
      o("p", xg, f(e.label), 1),
      o("p", kg, [
        N(f(e.value) + " ", 1),
        e.share ? (t(), n("span", $g, " (" + f(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), wg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Cg = ["width", "height", "viewBox", "aria-label"], Sg = ["d", "fill", "fill-opacity", "onMouseenter"], Mg = ["x", "y"], Bg = ["x", "y"], _g = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Ag = ["onMouseenter"], Pg = { class: "min-w-0 flex-1 truncate capitalize" }, zg = { class: "tabular-nums font-medium" }, Og = { class: "text-muted-foreground w-9 text-right tabular-nums" }, YC = /* @__PURE__ */ O({
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
    ], r = y(() => l.data.reduce((S, B) => S + B.value, 0)), s = R(null), i = y(() => l.height), d = y(() => i.value / 2 - 4), u = y(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function c(S) {
      return a[S % a.length];
    }
    function v(S) {
      return 1 - Math.min(0.55, Math.floor(S / a.length) * 0.28);
    }
    const p = y(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((m, h) => {
        const w = m.value / r.value, A = w * Math.PI * 2, E = B, I = B + A;
        return B = I, {
          ...m,
          share: w,
          colour: c(h),
          opacity: v(h),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: w >= 0.9999 ? b(S) : C(S, E, I, d.value, u.value)
        };
      });
    });
    function g(S, B, m) {
      return `${(S + Math.cos(B) * m).toFixed(2)},${(S + Math.sin(B) * m).toFixed(2)}`;
    }
    function C(S, B, m, h, w) {
      const A = m - B > Math.PI ? 1 : 0;
      return w <= 0 ? `M${S},${S} L${g(S, B, h)} A${h},${h} 0 ${A} 1 ${g(S, m, h)} Z` : [
        `M${g(S, B, h)}`,
        `A${h},${h} 0 ${A} 1 ${g(S, m, h)}`,
        `L${g(S, m, w)}`,
        `A${w},${w} 0 ${A} 0 ${g(S, B, w)}`,
        "Z"
      ].join(" ");
    }
    function b(S) {
      const B = d.value, m = u.value, h = [
        `M${S - B},${S}`,
        `A${B},${B} 0 1 1 ${S + B},${S}`,
        `A${B},${B} 0 1 1 ${S - B},${S}`,
        "Z"
      ];
      return m <= 0 ? h.join(" ") : [
        ...h,
        `M${S - m},${S}`,
        `A${m},${m} 0 1 0 ${S + m},${S}`,
        `A${m},${m} 0 1 0 ${S - m},${S}`,
        "Z"
      ].join(" ");
    }
    const k = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S), M = (S) => `${(S * 100).toFixed(S < 0.01 ? 2 : 0)}%`;
    return (S, B) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", wg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), n(z, null, V(p.value, (m, h) => (t(), n("path", {
          key: h,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === h ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[0] || (B[0] = (w) => s.value = null)
        }, null, 40, Sg))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, f(k(s.value === null ? r.value : p.value[s.value].value)), 9, Mg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(s.value === null ? "Total" : p.value[s.value].label), 9, Bg)
        ], 64)) : $("", !0)
      ], 8, Cg)),
      o("ul", _g, [
        (t(!0), n(z, null, V(p.value, (m, h) => (t(), n("li", {
          key: h,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === h ? "bg-muted" : ""]),
          onMouseenter: (w) => s.value = h,
          onMouseleave: B[1] || (B[1] = (w) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Pg, f(m.label), 1),
          o("span", zg, f(k(m.value)), 1),
          o("span", Og, f(M(m.share)), 1)
        ], 42, Ag))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(mt, {
        key: 0,
        label: p.value[s.value].label,
        value: k(p.value[s.value].value),
        share: M(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Lg = ["width", "height", "viewBox", "aria-label"], Vg = { class: "text-border" }, jg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Tg = { class: "fill-muted-foreground text-[10px]" }, Dg = ["x", "y"], Eg = ["x", "y"], Ig = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Fg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, XC = /* @__PURE__ */ O({
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
    ], r = R(null), s = R(560), i = R(null);
    let d = null;
    ve(() => {
      d = new ResizeObserver((q) => {
        const oe = q[0]?.contentRect.width ?? 0;
        oe > 0 && (s.value = oe);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = y(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), c = (q, oe) => oe.color ?? a[q % a.length], v = y(() => u.value.flatMap((q) => q.points)), p = y(() => v.value.some((q) => typeof q.r == "number")), g = { top: 12, right: 16, bottom: 32, left: 48 }, C = y(() => Math.max(10, s.value - g.left - g.right)), b = y(() => Math.max(10, l.height - g.top - g.bottom));
    function k(q) {
      if (q.length === 0)
        return [0, 1];
      const oe = Math.min(...q), ne = Math.max(...q), Z = ne - oe || Math.abs(ne) || 1;
      return [oe - Z * 0.08, ne + Z * 0.08];
    }
    const M = y(() => k(v.value.map((q) => q.x))), S = y(() => k(v.value.map((q) => q.y))), B = (q) => {
      const [oe, ne] = M.value;
      return g.left + (q - oe) / (ne - oe) * C.value;
    }, m = (q) => {
      const [oe, ne] = S.value;
      return g.top + b.value - (q - oe) / (ne - oe) * b.value;
    }, h = y(() => Math.max(...v.value.map((q) => q.r ?? 0), 0));
    function w(q) {
      if (!p.value || !h.value)
        return 4;
      const oe = Math.max(0, q.r ?? 0) / h.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function A([q, oe]) {
      return Array.from({ length: 5 }, (ne, Z) => q + (oe - q) / 4 * Z);
    }
    const E = y(() => A(M.value)), I = y(() => A(S.value)), ae = (q) => l.formatX?.(q) ?? String(Math.round(q * 100) / 100), H = (q) => l.formatY?.(q) ?? String(Math.round(q * 100) / 100), K = y(() => {
      if (!i.value)
        return null;
      const q = u.value[i.value.s], oe = q?.points[i.value.p];
      return oe ? { series: q, point: oe } : null;
    });
    return (q, oe) => (t(), n("div", {
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
        o("g", Vg, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: g.left,
            x2: g.left + C.value,
            y1: m(ne),
            y2: m(ne),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, jg))), 128))
        ]),
        o("g", Tg, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: g.left - 8,
            y: m(ne) + 3,
            "text-anchor": "end"
          }, f(H(ne)), 9, Dg))), 128)),
          (t(!0), n(z, null, V(E.value, (ne, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ne),
            y: e.height - 10,
            "text-anchor": "middle"
          }, f(ae(ne)), 9, Eg))), 128))
        ]),
        (t(!0), n(z, null, V(u.value, (ne, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, V(ne.points, (G, _) => (t(), n("circle", {
            key: `p-${Z}-${_}`,
            cx: B(G.x),
            cy: m(G.y),
            r: w(G),
            fill: c(Z, ne),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: c(Z, ne),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: _ },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, Ig))), 128))
        ]))), 128))
      ], 8, Lg)),
      K.value ? (t(), T(mt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: p.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", Fg, [
        (t(!0), n(z, null, V(u.value, (ne, Z) => (t(), n("span", {
          key: `l-${Z}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: c(Z, ne) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + f(ne.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), Ng = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Rg = ["width", "height", "viewBox"], Ug = ["points"], Hg = ["x1", "y1", "x2", "y2"], Kg = ["points", "fill", "stroke"], qg = ["cx", "cy", "fill", "onMouseenter"], Gg = ["x", "y", "text-anchor"], Wg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Zg = { class: "truncate" }, QC = /* @__PURE__ */ O({
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
      () => l.series.map((m, h) => ({
        ...m,
        color: m.color ?? a[h % a.length]
      }))
    ), s = y(() => r.value[0]?.points.map((m) => m.label) ?? []), i = y(() => s.value.length), d = y(() => l.height), u = y(() => d.value / 2), c = y(() => d.value / 2 - 34), v = y(() => {
      const m = Math.max(...r.value.flatMap((A) => A.points.map((E) => E.value)), 0);
      if (m <= 0)
        return 1;
      const h = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((A) => m <= A * h) ?? 10) * h;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function g(m, h) {
      const w = p(m);
      return {
        x: u.value + Math.cos(w) * c.value * h,
        y: u.value + Math.sin(w) * c.value * h
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (h, w) => {
        const A = g(w, m);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const b = y(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), k = y(
      () => r.value.map((m) => {
        const h = m.points.map((w) => Math.max(0, w.value) / v.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: h.map((w, A) => {
            const E = g(A, w);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: h.map((w, A) => g(A, w))
        };
      })
    ), M = y(
      () => s.value.map((m, h) => {
        const w = p(h), A = u.value + Math.cos(w) * (c.value + 14), E = u.value + Math.sin(w) * (c.value + 14), I = Math.cos(w);
        return {
          label: m,
          x: A,
          y: E + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, h) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Ng, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(b.value, (w) => (t(), n("polygon", {
          key: w.f,
          points: w.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Ug))), 128)),
        (t(!0), n(z, null, V(s.value, (w, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: g(A, 1).x,
          y2: g(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Hg))), 128)),
        (t(!0), n(z, null, V(k.value, (w, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: w.outline,
            fill: w.color,
            "fill-opacity": "0.16",
            stroke: w.color,
            "stroke-width": "2"
          }, null, 8, Kg),
          (t(!0), n(z, null, V(w.dots, (E, I) => (t(), n("circle", {
            key: I,
            cx: E.x,
            cy: E.y,
            r: "3",
            fill: w.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => S.value = {
              series: w.name,
              axis: s.value[I],
              value: w.values[I]?.value ?? 0
            },
            onMouseleave: h[0] || (h[0] = (ae) => S.value = null)
          }, null, 40, qg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, V(M.value, (w, A) => (t(), n("text", {
          key: `l-${A}`,
          x: w.x,
          y: w.y,
          "text-anchor": w.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, f(w.label), 9, Gg))), 128))
      ], 8, Rg)),
      e.showLegend ? (t(), n("ul", Wg, [
        (t(!0), n(z, null, V(r.value, (w, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: w.color })
          }, null, 4),
          o("span", Zg, f(w.name), 1)
        ]))), 128))
      ])) : $("", !0),
      S.value ? (t(), T(mt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Jg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Yg = ["width", "height", "viewBox"], Xg = ["cx", "cy", "r"], Qg = ["d", "fill", "fill-opacity", "onMouseenter"], eh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, th = { class: "min-w-0 flex-1 truncate capitalize" }, ah = { class: "font-medium tabular-nums" }, e8 = /* @__PURE__ */ O({
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
    ], r = R(null), s = y(() => l.height), i = y(() => s.value / 2), d = y(() => s.value / 2 - 6), u = y(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), c = y(() => {
      const C = l.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const b = Math.PI * 2 / C;
      return l.data.map((k, M) => {
        const S = Math.sqrt(Math.max(0, k.value) / u.value), B = d.value * S, m = M * b - Math.PI / 2, h = m + b;
        return {
          ...k,
          color: a[M % a.length],
          share: u.value === 0 ? 0 : k.value / u.value,
          path: v(i.value, m, h, B)
        };
      });
    });
    function v(C, b, k, M) {
      if (M <= 0)
        return "";
      if (k - b >= Math.PI * 2 - 1e-6)
        return `M${C - M},${C} A${M},${M} 0 1 1 ${C + M},${C} A${M},${M} 0 1 1 ${C - M},${C} Z`;
      const S = k - b > Math.PI ? 1 : 0, B = C + Math.cos(b) * M, m = C + Math.sin(b) * M, h = C + Math.cos(k) * M, w = C + Math.sin(k) * M;
      return `M${C},${C} L${B.toFixed(2)},${m.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${h.toFixed(2)},${w.toFixed(2)} Z`;
    }
    const p = y(() => [0.5, 0.75, 1].map((C) => d.value * C)), g = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, b) => c.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Jg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(p.value, (k) => (t(), n("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Xg))), 128)),
        (t(!0), n(z, null, V(c.value, (k, M) => (t(), n("path", {
          key: M,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: b[0] || (b[0] = (S) => r.value = null)
        }, null, 40, Qg))), 128))
      ], 8, Yg)),
      e.showLegend ? (t(), n("ul", eh, [
        (t(!0), n(z, null, V(c.value, (k, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: k.color })
          }, null, 4),
          o("span", th, f(k.label), 1),
          o("span", ah, f(g(k.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), T(mt, {
        key: 1,
        label: c.value[r.value].label,
        value: g(c.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), nh = ["width", "height"], lh = ["x1", "x2", "y1", "y2"], oh = ["x", "y"], sh = ["x", "y"], rh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], ih = ["x", "y", "width", "height", "fill", "fill-opacity"], dh = ["d", "stroke"], uh = ["cx", "cy", "fill"], ch = ["x", "y"], fh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, mh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, ph = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, vh = { class: "text-xs font-semibold tabular-nums" }, gh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, hh = { class: "text-muted-foreground" }, t8 = /* @__PURE__ */ O({
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
    const l = e, a = R(null), r = R(560), s = R(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((Z) => {
        r.value = Math.max(160, Z[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], c = y(
      () => l.bars.map((Z, G) => ({
        ...Z,
        color: Z.color ?? d[G % d.length]
      }))
    ), v = y(
      () => l.lines.map((Z, G) => ({
        ...Z,
        color: Z.color ?? u[G % u.length]
      }))
    ), p = y(
      () => c.value[0]?.points.map((Z) => Z.label) ?? v.value[0]?.points.map((Z) => Z.label) ?? []
    ), g = y(() => p.value.length), C = y(() => l.lineAxis === "right"), b = y(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = y(() => ({
      w: Math.max(1, r.value - b.value.left - b.value.right),
      h: Math.max(1, l.height - b.value.top - b.value.bottom)
    }));
    function M(Z) {
      const G = Math.max(...Z, 0);
      if (G <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((j) => G <= j * _) ?? 10) * _;
    }
    const S = y(
      () => M([
        ...c.value.flatMap((Z) => Z.points.map((G) => G.value)),
        ...C.value ? [] : v.value.flatMap((Z) => Z.points.map((G) => G.value))
      ])
    ), B = y(
      () => C.value ? M(v.value.flatMap((Z) => Z.points.map((G) => G.value))) : S.value
    ), m = y(() => k.value.w / Math.max(1, g.value)), h = y(() => m.value * 0.6), w = y(() => h.value / Math.max(1, c.value.length));
    function A(Z) {
      return b.value.left + Z * m.value + m.value / 2;
    }
    const E = y(
      () => c.value.flatMap(
        (Z, G) => Z.points.map((_, F) => {
          const j = Math.max(0, _.value) / S.value * k.value.h;
          return {
            x: A(F) - h.value / 2 + G * w.value,
            y: b.value.top + k.value.h - j,
            w: Math.max(0, w.value - 2),
            h: j,
            color: Z.color,
            index: F,
            name: Z.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), I = y(
      () => v.value.map((Z) => {
        const G = Z.points.map((_, F) => ({
          x: A(F),
          y: b.value.top + k.value.h - Math.max(0, _.value) / B.value * k.value.h,
          value: _.value
        }));
        return {
          ...Z,
          pts: G,
          d: G.map((_, F) => `${F === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = y(
      () => [0, 0.25, 0.5, 0.75, 1].map((Z) => ({
        y: b.value.top + k.value.h * Z,
        left: S.value * (1 - Z),
        right: B.value * (1 - Z)
      }))
    ), H = y(() => Math.max(1, Math.ceil(g.value / 10)));
    function K(Z) {
      return Z === g.value - 1 || Z % H.value === 0;
    }
    const q = (Z) => l.format ? l.format(Z) : oe(Z);
    function oe(Z) {
      return Math.abs(Z) >= 1e6 ? `${(Z / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Z) >= 1e3 ? `${(Z / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Z * 100) / 100);
    }
    const ne = y(() => {
      if (s.value === null)
        return null;
      const Z = s.value;
      return {
        label: p.value[Z],
        rows: [
          ...c.value.map((G) => ({
            name: G.name,
            color: G.color,
            value: G.points[Z]?.value ?? 0
          })),
          ...v.value.map((G) => ({
            name: G.name,
            color: G.color,
            value: G.points[Z]?.value ?? 0
          }))
        ]
      };
    });
    return (Z, G) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      g.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: G[0] || (G[0] = (_) => s.value = null)
        }, [
          (t(!0), n(z, null, V(ae.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: b.value.left,
            x2: r.value - b.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, lh))), 128)),
          (t(!0), n(z, null, V(ae.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: b.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.left)), 9, oh))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, V(ae.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - b.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, f(oe(_.right)), 9, sh))), 128)) : $("", !0),
          (t(!0), n(z, null, V(p.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: b.value.left + F * m.value,
            y: b.value.top,
            width: m.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (j) => s.value = F
          }, null, 40, rh))), 128)),
          (t(!0), n(z, null, V(E.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, ih))), 128)),
          (t(!0), n(z, null, V(I.value, (_, F) => (t(), n("g", {
            key: `l-${F}`
          }, [
            o("path", {
              d: _.d,
              fill: "none",
              stroke: _.color,
              "stroke-width": "2.5",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "pointer-events": "none"
            }, null, 8, dh),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, uh)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, V(p.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: A(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, f(_), 9, ch)), [
            [He, K(F)]
          ])), 128))
        ], 40, nh)),
        ne.value ? (t(), n("div", fh, [
          o("p", mh, f(ne.value.label), 1),
          (t(!0), n(z, null, V(ne.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", ph, f(_.name), 1),
            o("span", vh, f(q(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", gh, [
          (t(!0), n(z, null, V([...c.value, ...v.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", hh, f(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), bh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, yh = { class: "text-muted-foreground" }, xh = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, kh = ["width", "height"], $h = ["x", "y"], wh = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Ch = ["x", "y"], Sh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, Mh = { class: "text-[11px] font-medium capitalize" }, Bh = { class: "text-muted-foreground text-[11px] capitalize" }, _h = { class: "text-sm font-semibold tabular-nums" }, Ah = { class: "text-muted-foreground text-xs font-normal" }, a8 = /* @__PURE__ */ O({
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
    const l = e, a = R(null), r = R(560), s = R(null);
    let i = null;
    ve(() => {
      i = new ResizeObserver((h) => {
        r.value = Math.max(160, h[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = y(() => l.series[0]?.points.map((h) => h.label) ?? []), u = y(() => l.series.length), c = y(() => d.value.length), v = y(() => Math.min(140, Math.max(60, r.value * 0.16))), p = y(() => Math.max(1, r.value - v.value - 8)), g = y(() => p.value / Math.max(1, c.value)), C = y(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function b(h) {
      if (h === 0)
        return "var(--muted)";
      const w = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(h / w * 100)}%, var(--muted))`;
    }
    function k(h) {
      for (let w = 0; w < l.buckets.length; w++) {
        const A = l.buckets[w].max;
        if (A === void 0 || h < A)
          return w;
      }
      return l.buckets.length - 1;
    }
    const M = y(
      () => l.series.flatMap(
        (h, w) => h.points.map((A, E) => {
          const I = k(A.value);
          return {
            row: w,
            col: E,
            x: v.value + E * g.value,
            y: 4 + w * C.value,
            w: Math.max(1, g.value - 1),
            h: Math.max(1, C.value - 4),
            colour: b(I),
            label: A.label,
            value: A.value,
            rowName: h.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), S = y(() => g.value < 2), B = y(() => s.value ? M.value.find((h) => h.row === s.value.row && h.col === s.value.col) ?? null : null), m = (h) => l.format ? l.format(h) : new Intl.NumberFormat().format(h);
    return (h, w) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || c.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", bh, [
          (t(!0), n(z, null, V(e.buckets, (A, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: b(E) })
            }, null, 4),
            o("span", yh, f(A.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", xh, f(c.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: w[0] || (w[0] = (A) => s.value = null)
        }, [
          (t(!0), n(z, null, V(e.series, (A, E) => (t(), n("text", {
            key: `r-${E}`,
            x: v.value - 10,
            y: 4 + E * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, f(A.name), 9, $h))), 128)),
          (t(!0), n(z, null, V(M.value, (A, E) => (t(), n("rect", {
            key: E,
            x: A.x,
            y: A.y,
            width: A.w,
            height: A.h,
            fill: A.colour,
            "fill-opacity": s.value === null || s.value.row === A.row && s.value.col === A.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (I) => s.value = { row: A.row, col: A.col }
          }, null, 40, wh))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(z, { key: 0 }, V(d.value, (A, E) => (t(), n("text", {
            key: `c-${E}`,
            x: v.value + E * g.value + g.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, f(A), 9, Ch))), 128)) : $("", !0)
        ], 40, kh)),
        B.value ? (t(), n("div", Sh, [
          o("p", Mh, f(B.value.label), 1),
          o("p", Bh, f(B.value.rowName), 1),
          o("p", _h, [
            N(f(m(B.value.value)) + " ", 1),
            o("span", Ah, "(" + f(B.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Ph = ["viewBox"], zh = { key: 0 }, Oh = ["id"], Lh = ["stop-color"], Vh = ["stop-color"], jh = ["d", "fill"], Th = ["d", "stroke"], ba = 100, lt = 30, St = /* @__PURE__ */ O({
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
      const u = l.data.map((g) => g.value);
      if (u.length < 2)
        return [];
      const c = Math.min(...u), p = Math.max(...u) - c || 1;
      return u.map((g, C) => ({
        x: C / (u.length - 1) * ba,
        y: lt - (g - c) / p * (lt - 4) - 2
      }));
    });
    function s(u) {
      const c = u.length;
      if (c < 2)
        return "";
      const v = [], p = [];
      for (let b = 0; b < c - 1; b++)
        v[b] = u[b + 1].x - u[b].x, p[b] = v[b] === 0 ? 0 : (u[b + 1].y - u[b].y) / v[b];
      const g = [p[0]];
      for (let b = 1; b < c - 1; b++)
        if (p[b - 1] * p[b] <= 0)
          g[b] = 0;
        else {
          const k = 2 * v[b] + v[b - 1], M = v[b] + 2 * v[b - 1];
          g[b] = (k + M) / (k / p[b - 1] + M / p[b]);
        }
      g[c - 1] = p[c - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let b = 0; b < c - 1; b++) {
        const k = v[b] / 3;
        C += ` C${(u[b].x + k).toFixed(2)},${(u[b].y + g[b] * k).toFixed(2)} ${(u[b + 1].x - k).toFixed(2)},${(u[b + 1].y - g[b + 1] * k).toFixed(2)} ${u[b + 1].x.toFixed(2)},${u[b + 1].y.toFixed(2)}`;
      }
      return C;
    }
    const i = y(() => {
      const u = r.value;
      return u.length < 2 ? "" : l.smooth ? s(u) : u.map((c, v) => `${v === 0 ? "M" : "L"}${c.x.toFixed(2)},${c.y.toFixed(2)}`).join(" ");
    }), d = y(() => {
      const u = r.value;
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${lt} L${u[0].x.toFixed(2)},${lt} Z`;
    });
    return (u, c) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${ba} ${lt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", zh, [
        o("linearGradient", {
          id: `pk-spark-${x(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Lh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Vh)
        ], 8, Oh)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${x(a)})`
      }, null, 8, jh)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Th)
    ], 12, Ph)) : $("", !0);
  }
}), Dh = { class: "flex items-center gap-1 text-xs" }, Eh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Ih = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ya = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", Dh, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Eh, f(s.value), 1),
        N(" " + f(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Ih, f(e.comparison), 1)) : $("", !0)
    ]));
  }
}), Fh = ["data-collapsed"], Nh = { class: "flex flex-wrap items-start justify-between gap-2" }, Rh = { class: "flex min-w-0 items-start gap-2" }, Uh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Hh = ["d"], Kh = { class: "min-w-0" }, qh = { class: "text-sm font-medium" }, Gh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Wh = { class: "flex shrink-0 items-center gap-1.5" }, Zh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Jh = ["aria-pressed", "onClick"], Yh = ["aria-expanded", "aria-label", "title"], Xh = ["aria-label"], Qh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, eb = ["d"], tb = /* @__PURE__ */ O({
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
    const l = e, a = Ft(), r = R(l.defaultCollapsed), s = y(() => !!l.icon && !a.icon), i = y(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Nh, [
        o("div", Rh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Uh, [
              o("path", {
                d: x(ce)(e.icon)
              }, null, 8, Hh)
            ])) : $("", !0)
          ]),
          o("div", Kh, [
            o("p", qh, f(e.label), 1),
            e.description ? (t(), n("p", Gh, f(e.description), 1)) : $("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", Wh, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Zh, [
            (t(!0), n(z, null, V(e.periods, (c) => (t(), n("button", {
              key: c.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === c.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === c.value,
              onClick: (v) => d.$emit("update:period", c.value)
            }, f(c.label), 11, Jh))), 128))
          ])) : $("", !0),
          e.collapsible ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-expanded": !r.value,
            "aria-label": r.value ? `Expand ${e.label}` : `Collapse ${e.label}`,
            title: r.value ? "Expand" : "Collapse",
            onClick: u[0] || (u[0] = (c) => r.value = !r.value)
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
          ], 8, Yh)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (c) => d.$emit("hide"))
          }, [
            (t(), n("svg", Qh, [
              o("path", {
                d: x(ce)("eye-off")
              }, null, 8, eb)
            ]))
          ], 8, Xh)) : $("", !0)
        ])
      ]),
      r.value ? $("", !0) : (t(), n("div", {
        key: 0,
        style: se(i.value),
        class: "flex flex-col justify-center",
        "data-slot": "chart-card-body"
      }, [
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "block",
          height: e.bodyHeight
        }, null, 8, ["height"])) : e.error ? (t(), n("p", {
          key: 1,
          class: "text-destructive flex items-center justify-center text-sm",
          style: se({ height: `${e.bodyHeight}px` }),
          role: "alert"
        }, " Could not load ", 4)) : U(d.$slots, "default", {}, void 0, void 0, 2)
      ], 4))
    ], 10, Fh));
  }
}), ab = ["aria-pressed", "aria-label", "title"], nb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lb = ["d"], ob = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, sb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, rb = ["href"], ib = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, db = ["d"], ub = ["aria-label", "onClick"], cb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, fb = ["d"], mb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, pb = ["d"], vb = {
  key: 0,
  class: "flex flex-col gap-1"
}, gb = ["onClick"], hb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bb = ["d"], yb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, xb = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = y(
      () => a.catalog.filter((v) => !a.items.some((p) => p.id === v.id))
    );
    function u(v) {
      r(
        "update:items",
        a.items.filter((p) => p.id !== v)
      );
    }
    function c(v) {
      r("update:items", [...a.items, v]), i.value = !1;
    }
    return (v, p) => (t(), n(z, null, [
      D(tb, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (g) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (g) => s.value = !s.value)
          }, [
            (t(), n("svg", nb, [
              o("path", {
                d: x(ce)(s.value ? "check" : "pencil")
              }, null, 8, lb)
            ]))
          ], 8, ab)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", ob, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (g) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", sb, [
            (t(!0), n(z, null, V(e.items, (g) => (t(), n("div", {
              key: g.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: g.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", ib, [
                  o("path", {
                    d: x(ce)(g.icon)
                  }, null, 8, db)
                ])),
                N(" " + f(g.label), 1)
              ], 8, rb),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${g.label}`,
                onClick: (C) => u(g.id)
              }, [
                (t(), n("svg", cb, [
                  o("path", {
                    d: x(ce)("x")
                  }, null, 8, fb)
                ]))
              ], 8, ub)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (g) => i.value = !0)
            }, [
              (t(), n("svg", mb, [
                o("path", {
                  d: x(ce)("plus")
                }, null, 8, pb)
              ])),
              p[8] || (p[8] = N(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(dt, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: p[5] || (p[5] = (g) => i.value = !1)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            onClick: p[4] || (p[4] = (g) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", vb, [
            (t(!0), n(z, null, V(d.value, (g) => (t(), n("li", {
              key: g.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => c(g)
              }, [
                (t(), n("svg", hb, [
                  o("path", {
                    d: x(ce)(g.icon)
                  }, null, 8, bb)
                ])),
                N(" " + f(g.label), 1)
              ], 8, gb)
            ]))), 128))
          ])) : (t(), n("p", yb, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), kb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, $b = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, wb = { class: "relative w-full max-w-xl" }, Cb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sb = ["d"], Mb = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Bb = ["data-slot"], _b = { class: "px-5 py-4" }, Ab = { class: "mb-3 text-sm font-semibold" }, Pb = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, zb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ob = ["d"], Lb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, n8 = /* @__PURE__ */ O({
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
    const l = e, a = R(""), r = y(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : ka(u);
    }), s = st({
      variant: "ghost",
      size: "sm",
      class: "no-underline justify-start text-foreground"
    });
    function i(u) {
      return u.external === !0 || /^https?:\/\//.test(u.href);
    }
    const d = y(() => {
      const u = a.value.trim().toLowerCase();
      return l.sections.map((c) => ({
        ...c,
        links: u ? c.links.filter((v) => v.label.toLowerCase().includes(u)) : c.links
      })).filter((c) => c.links.length > 0);
    });
    return (u, c) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ge)])
    }, [
      o("header", null, [
        o("h1", kb, f(e.title), 1),
        e.description ? (t(), n("p", $b, f(e.description), 1)) : $("", !0)
      ]),
      o("div", wb, [
        (t(), n("svg", Cb, [
          o("path", {
            d: x(ce)("search")
          }, null, 8, Sb)
        ])),
        D($e, {
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (v) => a.value = v),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), n("div", Mb, [
        (t(!0), n(z, null, V(d.value, (v) => (t(), n("section", {
          key: v.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${v.key}`
        }, [
          o("div", _b, [
            o("h2", Ab, f(v.title), 1),
            o("div", Pb, [
              (t(!0), n(z, null, V(v.links, (p) => (t(), T(_e(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: P(x(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", zb, [
                    o("path", {
                      d: x(ce)(p.icon)
                    }, null, 8, Ob)
                  ])),
                  N(" " + f(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Bb))), 128))
      ])) : (t(), n("p", Lb, ' Nothing matches "' + f(a.value) + '". ', 1))
    ], 2));
  }
}), Vb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, jb = { class: "flex flex-1 flex-col gap-1 p-4" }, Tb = { class: "text-muted-foreground relative text-xs font-medium" }, Db = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Eb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Ib = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Fb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, l8 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Vb, [
      o("div", jb, [
        o("p", Tb, f(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Db, " Could not load ")) : (t(), n("span", Eb, f(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ya, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Ib, f(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Fb, [
        D(St, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), Nb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Rb = { class: "flex flex-col gap-1 p-4" }, Ub = { class: "flex items-start justify-between gap-2" }, Hb = { class: "text-sm font-medium" }, Kb = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, qb = { class: "mt-1 flex flex-wrap items-center gap-2" }, Gb = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Wb = {
  key: 0,
  class: "-mb-px"
}, kt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Nb, [
      o("div", Rb, [
        o("div", Ub, [
          o("p", Hb, f(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Kb, f(e.caption), 1)) : $("", !0),
        o("div", qb, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Gb, f(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, f(e.delta > 0 ? "+" : "") + f(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Wb, [
        D(St, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), Zb = { class: "relative flex flex-col gap-2" }, Jb = ["aria-label"], Yb = ["onMouseenter"], Xb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Qb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, e1 = { class: "truncate" }, t1 = { class: "text-sm font-semibold tabular-nums" }, o8 = /* @__PURE__ */ O({
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
        const g = Math.max(0, v.value) / s.value;
        return {
          ...v,
          color: v.color ?? a[p % a.length],
          share: g,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: v.value > 0 ? `max(2px, ${(g * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (v) => l.format ? l.format(v) : new Intl.NumberFormat().format(v), u = R(null), c = (v) => `${(v * 100).toFixed(v > 0 && v < 0.01 ? 1 : 0)}%`;
    return (v, p) => (t(), n("div", Zb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((g) => `${g.label} ${d(g.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, V(i.value, (g, C) => (t(), n("span", {
          key: C,
          class: P(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: g.width,
            background: g.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (b) => u.value = C,
          onMouseleave: p[0] || (p[0] = (b) => u.value = null)
        }, null, 46, Yb))), 128))
      ], 12, Jb),
      e.showLegend ? (t(), n("div", Xb, [
        (t(!0), n(z, null, V(i.value, (g, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Qb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: g.color })
            }, null, 4),
            o("span", e1, f(g.label), 1)
          ]),
          o("span", t1, f(d(g.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      u.value !== null ? (t(), T(mt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: c(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), a1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, n1 = ["data-heading"], l1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, o1 = { class: "text-muted-foreground truncate" }, s1 = ["aria-label"], s8 = /* @__PURE__ */ O({
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
        const d = i.bar.segments.reduce((c, v) => c + Math.max(0, v.value), 0), u = Math.max(i.bar.total ?? d, d, 1);
        return {
          ...i,
          segments: i.bar.segments.map((c) => ({
            ...c,
            // A visible sliver rather than nothing, for a non-zero value
            // too small to round to a pixel - see `SegmentedBar`.
            width: c.value > 0 ? `max(2px, ${(Math.max(0, c.value) / u * 100).toFixed(2)}%)` : "0px"
          }))
        };
      })
    );
    return (i, d) => (t(), n("div", a1, [
      (t(!0), n(z, null, V(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, f(u.label), 3)) : (t(), n("div", l1, [
          o("span", o1, f(u.label), 1),
          o("span", {
            class: P(["shrink-0 font-medium tabular-nums", u.tone ? a[u.tone] : "text-foreground"])
          }, f(u.value), 3)
        ])),
        u.segments.length ? (t(), n("div", {
          key: 2,
          class: "bg-muted flex h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": u.segments.map((c) => `${c.label} ${c.value}`).join(", ")
        }, [
          (t(!0), n(z, null, V(u.segments, (c, v) => (t(), n("span", {
            key: v,
            class: P(["h-full transition-all", r[c.tone ?? "neutral"]]),
            style: se({ width: c.width })
          }, null, 6))), 128))
        ], 8, s1)) : $("", !0)
      ], 8, n1))), 128))
    ]));
  }
}), r1 = {
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
}, i1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function d1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function u1(e, l) {
  return l || (e ? r1[d1(e)] ?? "neutral" : "neutral");
}
function c1(e, l) {
  return i1[u1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = y(() => c1(l.status, l.tone));
    return (r, s) => (t(), T(qe, {
      variant: a.value,
      class: P(l.class)
    }, {
      default: L(() => [
        U(r.$slots, "default", {}, () => [
          N(f(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), f1 = ["data-layout"], m1 = ["src", "alt"], p1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, v1 = ["src"], g1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, h1 = ["onMouseenter"], b1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, y1 = { class: "min-w-0" }, x1 = { class: "truncate text-sm font-medium" }, k1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, $1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, w1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, C1 = { class: "min-w-0" }, S1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, M1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, B1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, _1 = ["d"], A1 = ["aria-label"], P1 = /* @__PURE__ */ O({
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
    }, r = e, s = l, i = R(0);
    function d(M) {
      if (typeof M != "string")
        return null;
      const S = M.trim();
      return S === "" ? null : /^(https?:)?\/\//i.test(S) ? S : null;
    }
    const u = y(() => {
      const M = [r.item.image, ...r.item.images ?? []].map(d).filter((S) => S !== null);
      return [...new Set(M)];
    }), c = y(() => u.value[i.value] ?? u.value[0] ?? null), v = y(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), p = y(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), g = y(() => u.value.length > 1 ? u.value[1] : null), C = y(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), b = y(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function k(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (B) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = un(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: S[2] || (S[2] = (B) => i.value = 0)
    }, [
      o("div", {
        class: P([
          "bg-muted relative overflow-hidden",
          e.layout === "list" ? "aspect-square w-20 shrink-0 sm:w-24" : "aspect-[4/3] w-full"
        ])
      }, [
        c.value ? (t(), n("img", {
          key: 0,
          src: c.value,
          alt: e.item.label,
          loading: "lazy",
          class: "size-full object-cover"
        }, null, 8, m1)) : (t(), n("span", p1, f(v.value), 1)),
        e.layout === "grid" && g.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: g.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, v1)) : $("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", g1, [
          (t(!0), n(z, null, V(u.value, (B, m) => (t(), n("span", {
            key: m,
            class: P(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (h) => i.value = m
          }, null, 42, h1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", b1, [
          o("div", y1, [
            o("p", x1, f(e.item.label), 1),
            e.item.caption ? (t(), n("p", k1, f(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", $1, f(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", w1, [
          o("div", C1, [
            e.item.price ? (t(), n("p", S1, f(e.item.price), 1)) : $("", !0),
            b.value ? (t(), n("p", M1, f(b.value), 1)) : $("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), n("svg", B1, [
              o("path", {
                d: x(ce)("cart")
              }, null, 8, _1)
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
        ], 8, A1)) : $("", !0)
      ], 2)
    ], 42, f1));
  }
});
function z1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function O1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function L1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const V1 = ["data-featured", "data-recommended"], j1 = { class: "flex flex-col gap-1" }, T1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, D1 = { key: 0 }, E1 = { key: 1 }, I1 = { key: 2 }, F1 = { key: 3 }, N1 = { class: "text-sm font-semibold" }, R1 = { class: "flex items-baseline gap-1" }, U1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, H1 = { class: "text-muted-foreground text-sm font-normal" }, K1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, q1 = { class: "text-muted-foreground mt-1 text-xs" }, G1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, W1 = { class: "flex min-w-0 items-start gap-2" }, Z1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, J1 = ["d"], Y1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, X1 = ["d"], Q1 = { class: "capitalize" }, ey = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, ty = { class: "text-foreground font-medium" }, ay = { class: "mt-auto flex gap-2 pt-2" }, ny = /* @__PURE__ */ O({
  __name: "PlanCard",
  props: {
    plan: {},
    canDelete: { type: Boolean }
  },
  emits: ["edit", "delete"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.plan.priceFormatted ?? String(a.plan.price)
    ), i = y(
      () => !!(a.plan.featured || a.plan.recommended)
    ), d = y(() => {
      const c = a.plan.perks ?? {};
      return Object.entries(c).map(([v, p]) => ({
        key: v,
        label: v.replace(/_/g, " "),
        granted: L1(p.value),
        display: O1(p.value)
      }));
    }), u = y(() => a.plan.extraPerks ?? []);
    return (c, v) => (t(), n("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", j1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", T1, [
          e.plan.recommended ? (t(), n("span", D1, "Recommended")) : e.plan.featured ? (t(), n("span", E1, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", I1, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", F1, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", N1, f(e.plan.name), 1),
        o("p", R1, [
          o("span", U1, f(s.value), 1),
          o("span", H1, f(x(z1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", K1, f(e.plan.shortDescription), 1)) : $("", !0),
        o("p", q1, " Active seats: " + f(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", G1, [
        (t(!0), n(z, null, V(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", W1, [
            o("span", {
              class: P(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", Z1, [
                o("path", {
                  d: x(ce)("check")
                }, null, 8, J1)
              ])) : (t(), n("svg", Y1, [
                o("path", {
                  d: x(ce)("x")
                }, null, 8, X1)
              ]))
            ], 2),
            o("span", Q1, f(p.label), 1)
          ]),
          p.display ? (t(), n("span", ey, f(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, V(u.value, (p, g) => (t(), n("li", {
          key: `extra-${g}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, f(p.key), 1),
          o("span", ty, f(p.value), 1)
        ]))), 128))
      ]),
      o("footer", ay, [
        D(ue, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: v[0] || (v[0] = (p) => r("edit", e.plan.id))
        }, {
          default: L(() => [...v[2] || (v[2] = [
            N(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: v[1] || (v[1] = (p) => r("delete", e.plan.id))
        }, {
          default: L(() => [...v[3] || (v[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, V1));
  }
}), ly = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, oy = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, sy = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, ry = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, iy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, r8 = /* @__PURE__ */ O({
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
      class: P(["w-full space-y-6", e.embedded ? "" : x(Ge)]),
      "data-slot": "plan-grid"
    }, [
      o("header", ly, [
        o("div", null, [
          e.title ? (t(), n("h1", oy, f(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", sy, f(e.description), 1)) : $("", !0)
        ]),
        D(ue, {
          type: "button",
          onClick: s[0] || (s[0] = (i) => a("create"))
        }, {
          default: L(() => [...s[3] || (s[3] = [
            N("Create plan", -1)
          ])]),
          _: 1
        })
      ]),
      e.plans.length === 0 ? (t(), n("p", ry, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", iy, [
        (t(!0), n(z, null, V(e.plans, (i) => (t(), T(ny, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), dy = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, uy = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, cy = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, fy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, my = { class: "space-y-1.5" }, py = { class: "space-y-1.5" }, vy = { class: "space-y-1.5" }, gy = { class: "space-y-1.5" }, hy = { class: "space-y-1.5" }, by = { class: "flex items-center gap-3 text-sm" }, yy = { class: "flex items-center gap-3 text-sm" }, xy = { class: "flex items-center gap-3 text-sm" }, ky = {
  key: 0,
  class: "space-y-1.5"
}, $y = { class: "flex items-center gap-3 text-sm" }, wy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Cy = { class: "space-y-1.5" }, Sy = ["value"], My = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, By = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, _y = ["id", "value", "onInput"], Ay = { class: "space-y-2" }, Py = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, zy = ["d"], i8 = /* @__PURE__ */ O({
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
    function d(m, h) {
      const w = i.perks?.[m]?.value;
      return w ?? h;
    }
    function u(m, h, w) {
      const A = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: h,
          overview: w ?? A?.overview ?? ""
        }
      };
    }
    function c(m, h) {
      const w = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: w?.value ?? (m === "modules" ? [] : 0),
          overview: h
        }
      };
    }
    function v(m) {
      const h = m ? { ...a(), ...m } : a();
      i.id = h.id, i.name = h.name, i.shortDescription = h.shortDescription ?? "", i.description = h.description ?? "", i.days = h.days, i.price = h.price, i.featured = h.featured ?? !1, i.recommended = h.recommended ?? !1, i.trial = h.trial ?? !1, i.trialDays = h.trialDays ?? 0, i.active = h.active ?? !0, i.perks = { ...h.perks ?? {} }, i.extraPerks = [...h.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    v(r.plan), me(
      () => r.plan,
      (m) => v(m),
      { deep: !0 }
    );
    const p = y({
      get: () => {
        const m = d("modules", []);
        return Array.isArray(m) ? m.map(String) : [];
      },
      set: (m) => {
        u("modules", C(m.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), g = y(
      () => r.modules.map((m) => ({ value: m.key, label: m.label }))
    );
    function C(m) {
      const h = Object.fromEntries(r.modules.map((E) => [E.key, E])), w = new Set(m);
      for (const E of r.modules)
        if (!w.has(E.key))
          for (const I of E.children ?? [])
            w.delete(I);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const E of [...w])
          for (const I of h[E]?.requires ?? [])
            w.has(I) || (w.add(I), A = !0);
      }
      return [...w];
    }
    function b() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((h, w) => w !== m);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (m, h) => (t(), n("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : x(Ge)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", dy, [
        o("div", null, [
          o("h1", uy, f(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          h[13] || (h[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(ue, {
          type: "button",
          variant: "outline",
          onClick: h[0] || (h[0] = (w) => s("cancel"))
        }, {
          default: L(() => [...h[14] || (h[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", cy, [
        o("section", fy, [
          h[26] || (h[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", my, [
            D(Pe, { for: "plan-name" }, {
              default: L(() => [...h[15] || (h[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": h[1] || (h[1] = (w) => i.name = w),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", py, [
            D(Pe, { for: "plan-short" }, {
              default: L(() => [...h[16] || (h[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": h[2] || (h[2] = (w) => i.shortDescription = w),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", vy, [
            D(Pe, { for: "plan-description" }, {
              default: L(() => [...h[17] || (h[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": h[3] || (h[3] = (w) => i.description = w),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: P(B)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", gy, [
            D(Pe, { for: "plan-days" }, {
              default: L(() => [...h[18] || (h[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": h[4] || (h[4] = (w) => i.days = w),
              class: P(S)
            }, [...h[19] || (h[19] = [
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
          o("div", hy, [
            D(Pe, { for: "plan-price" }, {
              default: L(() => [...h[20] || (h[20] = [
                N("Price", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-price",
              "model-value": i.price,
              type: "number",
              step: "any",
              required: "",
              "onUpdate:modelValue": h[5] || (h[5] = (w) => i.price = Number(w))
            }, null, 8, ["model-value"])
          ]),
          o("label", by, [
            D(x(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": h[6] || (h[6] = (w) => i.featured = w)
            }, null, 8, ["checked"]),
            h[21] || (h[21] = N(" Featured ", -1))
          ]),
          o("label", yy, [
            D(x(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": h[7] || (h[7] = (w) => i.recommended = w)
            }, null, 8, ["checked"]),
            h[22] || (h[22] = N(" Recommended ", -1))
          ]),
          o("label", xy, [
            D(x(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": h[8] || (h[8] = (w) => i.trial = w)
            }, null, 8, ["checked"]),
            h[23] || (h[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", ky, [
            D(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...h[24] || (h[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": h[9] || (h[9] = (w) => i.trialDays = Number(w))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", $y, [
            D(x(Ze), {
              checked: i.active !== !1,
              "onUpdate:checked": h[10] || (h[10] = (w) => i.active = w)
            }, null, 8, ["checked"]),
            h[25] || (h[25] = N(" Active ", -1))
          ]),
          D(ue, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              N(f(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", wy, [
          h[33] || (h[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Cy, [
            D(Pe, null, {
              default: L(() => [...h[27] || (h[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Wt, {
              modelValue: p.value,
              "onUpdate:modelValue": h[11] || (h[11] = (w) => p.value = w),
              options: g.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...h[28] || (h[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: P(B),
              onInput: h[12] || (h[12] = (w) => c(
                "modules",
                w.target.value
              ))
            }, null, 40, Sy)
          ]),
          (t(!0), n(z, null, V(e.limits, (w) => (t(), n("div", {
            key: w.key,
            class: "space-y-1.5"
          }, [
            w.kind === "toggle" ? (t(), n("label", My, [
              D(x(Ze), {
                checked: !!d(w.key, !1),
                "onUpdate:checked": (A) => u(
                  w.key,
                  A,
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + f(w.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              D(Pe, {
                for: `plan-limit-${w.key}`
              }, {
                default: L(() => [
                  N(f(w.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              w.hint ? (t(), n("p", By, f(w.hint), 1)) : $("", !0),
              D($e, {
                id: `plan-limit-${w.key}`,
                "model-value": Number(d(w.key, 0)),
                type: "number",
                step: w.step ?? 1,
                required: "",
                "onUpdate:modelValue": (A) => u(
                  w.key,
                  Number(A),
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              h[29] || (h[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Pe, {
              for: `plan-overview-${w.key}`
            }, {
              default: L(() => [...h[30] || (h[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${w.key}`,
              value: i.perks?.[w.key]?.overview ?? "",
              class: P(B),
              onInput: (A) => c(
                w.key,
                A.target.value
              )
            }, null, 40, _y)
          ]))), 128)),
          o("div", Ay, [
            h[32] || (h[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, V(i.extraPerks ?? [], (w, A) => (t(), n("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: w.key,
                "onUpdate:modelValue": (E) => w.key = E,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: w.value,
                "onUpdate:modelValue": (E) => w.value = E,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(ue, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (E) => k(A)
              }, {
                default: L(() => [
                  (t(), n("svg", Py, [
                    o("path", {
                      d: x(ce)("x")
                    }, null, 8, zy)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(ue, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: b
            }, {
              default: L(() => [...h[31] || (h[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Oy = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Ly = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Vy = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, jy = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ty = ["d"], Dy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Ey = ["aria-pressed"], Iy = ["aria-pressed"], Fy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ny = ["aria-label"], Ry = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Uy = ["aria-pressed", "onClick"], Hy = ["aria-label"], Ky = { class: "text-muted-foreground mr-1 text-xs font-medium" }, qy = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Gy = ["data-slot"], Wy = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Zy = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Jy = { class: "flex items-center gap-2" }, Yy = ["disabled"], Xy = ["disabled"], ta = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = ut(e, "modelValue"), d = it({}), u = it({});
    me(s, () => g());
    function c(I) {
      const ae = I.trim();
      if (ae === "")
        return null;
      const H = Number(ae);
      return Number.isFinite(H) ? H : null;
    }
    function v() {
      const I = {};
      for (const [ae, H] of Object.entries(u))
        I[ae] = { min: c(H.min), max: c(H.max) };
      return I;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: v() };
    }
    function g() {
      r("filter", p());
    }
    function C(I, ae) {
      d[I] = d[I] === ae ? null : ae, g();
    }
    function b(I) {
      return u[I] ?? { min: "", max: "" };
    }
    function k(I, ae, H) {
      const K = u[I] ?? { min: "", max: "" };
      u[I] = { ...K, [ae]: H }, g();
    }
    function M(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const S = y(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), B = y(() => a.facets.filter((I) => I.kind === "range")), m = y(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), h = R(1);
    me(
      () => a.items.map((I) => I.key).join(","),
      () => {
        h.value = 1;
      }
    );
    const w = y(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), A = y(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const ae = (h.value - 1) * I;
      return a.items.slice(ae, ae + I);
    });
    function E(I) {
      h.value = Math.min(w.value, Math.max(1, I));
    }
    return (I, ae) => (t(), n("div", {
      class: P(["flex flex-col gap-4", x(Ka)])
    }, [
      m.value ? (t(), n("div", Oy, [
        o("div", Ly, [
          e.searchable ? (t(), n("div", Vy, [
            (t(), n("svg", jy, [
              o("path", {
                d: x(ce)("search")
              }, null, 8, Ty)
            ])),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": ae[0] || (ae[0] = (H) => s.value = H),
              type: "search",
              placeholder: e.searchPlaceholder,
              class: "pl-8",
              "aria-label": e.searchPlaceholder,
              autofocus: e.autofocus || void 0,
              onKeydown: M
            }, null, 8, ["modelValue", "placeholder", "aria-label", "autofocus"])
          ])) : $("", !0),
          U(I.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Dy, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ae[1] || (ae[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Ey),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ae[2] || (ae[2] = (H) => i.value = "list")
            }, " List ", 10, Iy)
          ])) : $("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", Fy, [
          (t(!0), n(z, null, V(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Ry, f(H.label), 1)) : $("", !0),
            (t(!0), n(z, null, V(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (q) => C(H.key, K.value)
            }, f(K.label), 11, Uy))), 128))
          ], 8, Ny))), 128)),
          (t(!0), n(z, null, V(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Ky, f(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": b(H.key).min,
              "onUpdate:modelValue": (K) => k(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ae[7] || (ae[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": b(H.key).max,
              "onUpdate:modelValue": (K) => k(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Hy))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", qy, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : x(df)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, V(A.value, (H) => (t(), T(P1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ae[3] || (ae[3] = (K) => r("select", K)),
          onCart: ae[4] || (ae[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Gy)),
      e.pageSize && w.value > 1 ? (t(), n("div", Wy, [
        o("p", Zy, " Page " + f(h.value) + " of " + f(w.value), 1),
        o("div", Jy, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value <= 1,
            onClick: ae[5] || (ae[5] = (H) => E(h.value - 1))
          }, " Previous ", 8, Yy),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: h.value >= w.value,
            onClick: ae[6] || (ae[6] = (H) => E(h.value + 1))
          }, " Next ", 8, Xy)
        ])
      ])) : $("", !0)
    ], 2));
  }
}), Qy = ["aria-busy", "aria-label"], ex = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, tx = { class: "min-w-0" }, ax = { class: "text-base font-semibold" }, nx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, lx = { class: "flex shrink-0 items-center gap-2" }, ox = ["disabled"], sx = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, rx = {
  key: 0,
  class: "bg-muted/30 flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
}, aa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null);
    let i = null, d = "";
    const u = R(!1), c = y(() => a.width ?? uo[a.size]), v = y(
      () => [Oa, a.padded ? io : ""].filter(Boolean).join(" ")
    );
    function p(b) {
      u.value = b.target === b.currentTarget;
    }
    function g(b) {
      u.value && b.target === b.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function C(b) {
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
      const k = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const M = k[0], S = k[k.length - 1];
      b.shiftKey && document.activeElement === M ? (b.preventDefault(), S.focus()) : !b.shiftKey && document.activeElement === S && (b.preventDefault(), M.focus());
    }
    return me(
      () => a.open,
      async (b) => {
        if (b) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", C), await Te(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", C), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = d;
    }), (b, k) => (t(), T(Qe, { to: "body" }, [
      D(Ue, {
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
            onPointerup: g
          }, null, 32)) : $("", !0)
        ]),
        _: 1
      }),
      D(Ue, {
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
            class: P(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [c.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", ex, [
              o("div", tx, [
                o("h2", ax, f(e.title), 1),
                e.description ? (t(), n("p", nx, f(e.description), 1)) : $("", !0)
              ]),
              o("div", lx, [
                U(b.$slots, "header-actions"),
                o("button", {
                  type: "button",
                  class: "text-muted-foreground hover:text-foreground disabled:opacity-50",
                  "aria-label": "Close",
                  disabled: e.busy,
                  onClick: k[0] || (k[0] = (M) => r("close"))
                }, [...k[1] || (k[1] = [
                  o("svg", {
                    viewBox: "0 0 24 24",
                    class: "size-4",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    o("path", { d: "M18 6 6 18M6 6l12 12" })
                  ], -1)
                ])], 8, ox)
              ])
            ]),
            o("div", sx, [
              o("div", {
                class: P(v.value)
              }, [
                U(b.$slots, "default")
              ], 2)
            ]),
            b.$slots.footer ? (t(), n("footer", rx, [
              U(b.$slots, "footer")
            ])) : $("", !0)
          ], 10, Qy)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function ix(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function dx(e, l) {
  return !l || l.min === null && l.max === null ? !0 : !(e === null || l.min !== null && e < l.min || l.max !== null && e > l.max);
}
function na(e, l) {
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
    if (!dx(ix(e, r), s))
      return !1;
  return !0;
}
function ux(e, l) {
  const a = l.trim().toLowerCase();
  return a === "" ? null : e.find((r) => {
    const s = (r.sku ?? "").trim().toLowerCase(), i = r.key.trim().toLowerCase();
    return s === a || i === a;
  }) ?? null;
}
function $t(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const cx = { class: "flex flex-col gap-6" }, fx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, mx = { class: "text-sm font-semibold" }, px = { class: "flex flex-wrap items-center gap-1.5" }, vx = ["aria-pressed", "onClick"], gx = { class: "text-sm font-semibold" }, hx = { class: "flex flex-wrap items-center gap-1.5" }, bx = { key: 0 }, Xa = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = it({}), d = it({}), u = y(
      () => a.facets.filter((w) => (w.kind ?? "chips") === "chips")
    ), c = y(() => a.facets.filter((w) => w.kind === "range"));
    function v(w) {
      return w == null ? "" : String(w);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const w of Object.keys(i))
        delete i[w];
      for (const [w, A] of Object.entries(a.applied.selected ?? {}))
        i[w] = A;
      for (const w of Object.keys(d))
        delete d[w];
      for (const [w, A] of Object.entries(a.applied.ranges ?? {}))
        d[w] = { min: v(A.min), max: v(A.max) };
    }
    me(
      () => a.open,
      (w) => {
        w && p();
      }
    );
    function g(w) {
      const A = w.trim();
      if (A === "")
        return null;
      const E = Number(A);
      return Number.isFinite(E) ? E : null;
    }
    function C() {
      const w = {};
      for (const [A, E] of Object.entries(d))
        w[A] = { min: g(E.min), max: g(E.max) };
      return w;
    }
    function b() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const k = y(() => {
      let w = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const A of Object.values(i))
        A && (w += 1);
      for (const A of Object.values(C()))
        (A.min !== null || A.max !== null) && (w += 1);
      return w;
    });
    function M(w, A) {
      i[w] = i[w] === A ? null : A;
    }
    function S(w) {
      return d[w] ?? { min: "", max: "" };
    }
    function B(w, A, E) {
      const I = d[w] ?? { min: "", max: "" };
      d[w] = { ...I, [A]: E };
    }
    function m() {
      r("apply", b());
    }
    function h() {
      s.value = "";
      for (const w of Object.keys(i))
        i[w] = null;
      for (const w of Object.keys(d))
        d[w] = { min: "", max: "" };
      r("reset"), r(
        "apply",
        a.hideSearch ? { ...Ee(), query: a.applied.query } : Ee()
      );
    }
    return (w, A) => (t(), T(aa, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: A[2] || (A[2] = (E) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: h
        }, " Reset all "),
        D(ue, {
          variant: "outline",
          size: "sm",
          onClick: A[1] || (A[1] = (E) => r("close"))
        }, {
          default: L(() => [...A[5] || (A[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          size: "sm",
          onClick: m
        }, {
          default: L(() => [
            A[6] || (A[6] = N(" Apply", -1)),
            k.value ? (t(), n("span", bx, " (" + f(k.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", cx, [
          e.hideSearch ? $("", !0) : (t(), n("label", fx, [
            A[3] || (A[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": A[0] || (A[0] = (E) => s.value = E),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, V(u.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", mx, f(E.label ?? E.key), 1),
            o("div", px, [
              (t(!0), n(z, null, V(E.options ?? [], (I) => (t(), n("button", {
                key: I.value,
                type: "button",
                class: P([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[E.key] === I.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[E.key] === I.value ? "true" : "false",
                onClick: (ae) => M(E.key, I.value)
              }, f(I.label), 11, vx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, V(c.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", gx, f(E.label ?? E.key), 1),
            o("div", hx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${E.label ?? E.key} from`,
                "model-value": S(E.key).min,
                "onUpdate:modelValue": (I) => B(E.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${E.label ?? E.key} to`,
                "model-value": S(E.key).max,
                "onUpdate:modelValue": (I) => B(E.key, "max", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), yx = ["aria-disabled"], xx = ["disabled"], kx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, $x = ["d"], wx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, Cx = ["disabled"], Sx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Mx = ["d"], Bx = /* @__PURE__ */ O({
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
    const a = ut(e, "modelValue"), r = l, s = y(() => a.value <= e.min), i = y(() => e.max !== null && a.value >= e.max);
    function d(u) {
      if (e.disabled)
        return;
      const c = a.value + u;
      c < e.min || e.max !== null && c > e.max || (a.value = c, u < 0 ? r("decrease", c) : r("increase", c));
    }
    return (u, c) => (t(), n("div", {
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
        onClick: c[0] || (c[0] = (v) => d(-1))
      }, [
        (t(), n("svg", kx, [
          o("path", {
            d: x(ce)("minus")
          }, null, 8, $x)
        ]))
      ], 8, xx),
      o("span", wx, f(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: c[1] || (c[1] = (v) => d(1))
      }, [
        (t(), n("svg", Sx, [
          o("path", {
            d: x(ce)("plus")
          }, null, 8, Mx)
        ]))
      ], 8, Cx)
    ], 8, yx));
  }
}), _x = { class: "divide-border flex flex-col divide-y" }, Ax = { class: "min-w-0" }, Px = { class: "truncate text-sm font-medium" }, zx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Ox = { class: "flex shrink-0 items-center gap-2 text-sm" }, Lx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Vx = {
  key: 2,
  class: "font-medium tabular-nums"
}, jx = ["aria-label", "onClick"], Tx = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Dx = ["d"], Ex = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", _x, [
      (t(!0), n(z, null, V(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", Ax, [
          o("p", Px, f(d.label), 1),
          d.detail ? (t(), n("p", zx, f(d.detail), 1)) : $("", !0)
        ]),
        o("div", Ox, [
          e.editable ? (t(), T(Bx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", Lx, " ×" + f(d.qty), 1)) : $("", !0),
          d.amount ? (t(), n("span", Vx, f(d.amount), 1)) : $("", !0),
          d.status ? (t(), T(we, {
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
            (t(), n("svg", Tx, [
              o("path", {
                d: x(ce)("trash")
              }, null, 8, Dx)
            ]))
          ], 8, jx)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), Ix = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Fx = { class: "border-b px-4 py-3" }, Nx = { class: "text-sm font-medium" }, Rx = { class: "flex-1 px-4 py-3" }, Ux = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Hx = { class: "text-foreground block font-medium" }, Kx = { class: "mt-1 block" }, qx = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Gx = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Wx = { class: "tabular-nums" }, Zx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Jx = { class: "text-muted-foreground" }, Yx = {
  key: 0,
  class: "tabular-nums"
}, Xx = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Qx = { class: "text-muted-foreground" }, e0 = { class: "tabular-nums" }, t0 = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, a0 = { class: "tabular-nums" }, n0 = {
  key: 4,
  class: "pt-1"
}, l0 = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", Ix, [
      o("header", Fx, [
        o("h2", Nx, f(e.title), 1)
      ]),
      o("div", Rx, [
        e.items.length === 0 ? (t(), n("p", Ux, [
          o("span", Hx, f(e.emptyTitle), 1),
          o("span", Kx, f(e.emptyDescription), 1)
        ])) : (t(), T(Ex, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", qx, [
        e.subtotal ? (t(), n("div", Gx, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Wx, f(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Zx, [
          o("span", Jx, f(e.discountLabel), 1),
          e.discount ? (t(), n("span", Yx, f(e.discount), 1)) : $("", !0),
          U(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", Xx, [
          o("span", Qx, f(e.taxLabel), 1),
          o("span", e0, f(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", t0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", a0, f(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), n("div", n0, [
          U(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), o0 = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, s0 = { class: "flex flex-col gap-4" }, r0 = { class: "flex flex-wrap items-start justify-between gap-3" }, i0 = { class: "flex items-center gap-2" }, d0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, d8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = R(!1), d = ut(e, "cart"), u = R(!1), c = y(
      () => a.items.filter((H) => na(H, s.value))
    );
    function v(H) {
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
    function g(H) {
      return H ? a.parsePrice(H) : 0;
    }
    function C(H, K, q) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(q * K)
      };
    }
    function b(H) {
      const K = ux(a.items, H);
      K && k(K.key);
    }
    function k(H) {
      const K = a.items.find((ne) => ne.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      u.value = !1;
      const q = g(K);
      if (d.value.find((ne) => ne.key === H)) {
        d.value = d.value.map(
          (ne) => ne.key === H ? C(ne, Number(ne.qty ?? 1) + 1, q) : ne
        );
        return;
      }
      d.value = [
        ...d.value,
        {
          key: K.key,
          label: K.label,
          detail: K.caption ?? null,
          qty: 1,
          amount: a.formatMoney(q)
        }
      ];
    }
    function M(H, K) {
      const q = a.items.find((ne) => ne.key === H), oe = g(q);
      d.value = d.value.map(
        (ne) => ne.key === H ? C(ne, K, oe) : ne
      );
    }
    function S(H) {
      d.value = d.value.filter((K) => K.key !== H);
    }
    const B = y(
      () => d.value.reduce((H, K) => {
        const q = a.items.find((oe) => oe.key === K.key);
        return H + g(q) * Number(K.qty ?? 1);
      }, 0)
    ), m = y(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), h = y(
      () => Math.round((B.value - m.value) * a.taxRate)
    ), w = y(
      () => d.value.length ? a.formatMoney(B.value) : null
    ), A = y(
      () => d.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), E = y(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(h.value) : null
    ), I = y(
      () => d.value.length ? a.formatMoney(
        B.value - m.value + h.value
      ) : null
    );
    function ae() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(z, null, [
      o("div", o0, [
        o("section", s0, [
          o("div", r0, [
            D(De, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", i0, [
              x($t)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (q) => s.value = {
                  ...x(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: K[1] || (K[1] = (q) => i.value = !0)
              }, [
                K[5] || (K[5] = o("svg", {
                  viewBox: "0 0 24 24",
                  class: "size-4",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2"
                }, [
                  o("path", { d: "M3 5h18M6 12h12M10 19h4" })
                ], -1)),
                K[6] || (K[6] = N(" Filters ", -1)),
                x($t)(s.value) ? (t(), n("span", d0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          D(ta, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: c.value,
            onFilter: v,
            onSelect: K[2] || (K[2] = (q) => r("select", q)),
            onCart: k,
            onScan: b
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(l0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: w.value,
          "discount-label": e.discountLabel,
          discount: A.value,
          "tax-label": e.taxLabel,
          tax: E.value,
          total: I.value,
          onQty: M,
          onRemove: S
        }, {
          pay: L(() => [
            U(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: ae
            }, () => [
              D(ue, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: ae
              }, {
                default: L(() => [
                  N(f(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(Xa, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (q) => i.value = !1),
        onApply: p,
        onReset: K[4] || (K[4] = (q) => s.value = { ...x(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), u0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, c0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, f0 = ["src", "alt"], m0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, p0 = ["src"], v0 = { class: "flex items-start justify-between gap-3" }, g0 = { class: "text-lg font-semibold tabular-nums" }, h0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, b0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, y0 = { class: "grid grid-cols-2 gap-3" }, x0 = { class: "flex flex-col gap-2" }, k0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, u8 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let g = 0;
      for (const C of p)
        g = g * 31 + C.charCodeAt(0) >>> 0;
      return g;
    }
    function i(p, g) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((b, k) => ({
        label: b,
        value: Math.max(0, Math.round(p + Math.sin(k + g) * p * 0.18))
      }));
    }
    const d = y(() => a.item?.kind === "unit"), u = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const g = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(g) || 12, s(p.key) % 7);
    }), c = y(() => {
      const p = a.item;
      if (!p)
        return [];
      const g = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(g) || 20, s(p.key) % 5 + 1);
    }), v = y(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, g) => (t(), T(aa, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: g[1] || (g[1] = (C) => r("close"))
    }, rt({
      default: L(() => [
        e.item ? (t(), n("div", u0, [
          o("div", c0, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, f0)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", m0, [
            (t(!0), n(z, null, V(e.item.images, (C, b) => (t(), n("img", {
              key: b,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, p0))), 128))
          ])) : $("", !0),
          o("div", v0, [
            o("div", null, [
              o("p", g0, f(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", h0, f(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", b0, f(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", y0, [
            D(kt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? c.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D(kt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", x0, [
            o("p", k0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(St, {
              data: d.value ? c.value : u.value,
              height: 72,
              filled: ""
            }, null, 8, ["data"])
          ])
        ])) : $("", !0)
      ]),
      _: 2
    }, [
      v.value && e.item ? {
        name: "footer",
        fn: L(() => [
          o("button", {
            type: "button",
            class: "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
            onClick: g[0] || (g[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), $0 = { class: "flex flex-col gap-10" }, w0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, C0 = { class: "flex flex-col gap-3" }, S0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, M0 = ["src", "alt"], B0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, _0 = ["aria-label", "aria-pressed", "onClick"], A0 = ["src"], P0 = { class: "flex flex-col gap-5" }, z0 = { class: "flex flex-wrap items-start justify-between gap-3" }, O0 = { class: "min-w-0" }, L0 = { class: "text-2xl font-semibold tracking-tight" }, V0 = { class: "text-muted-foreground mt-1 text-sm" }, j0 = { class: "text-2xl font-semibold tabular-nums" }, T0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, D0 = { class: "grid grid-cols-2 gap-3 text-sm" }, E0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, I0 = { class: "mt-1 font-medium" }, F0 = { class: "rounded-lg border p-3" }, N0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, R0 = { class: "mt-1 font-medium" }, U0 = { class: "flex flex-col gap-4" }, H0 = { class: "grid gap-4 sm:grid-cols-2" }, K0 = { class: "bg-card rounded-lg border p-4" }, q0 = { class: "mb-3 text-sm font-medium" }, G0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(b) {
      let k = 0;
      for (const M of b)
        k = k * 31 + M.charCodeAt(0) >>> 0;
      return k;
    }
    function i(b, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, B) => ({
        label: S,
        value: Math.max(0, Math.round(b + Math.sin(B + k) * b * 0.18))
      }));
    }
    const d = y(() => a.item.kind === "unit"), u = y(() => {
      const b = [a.item.image, ...a.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set(b)];
    }), c = R(0), v = y(() => {
      const b = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(b) || 12, s(a.item.key) % 7);
    }), p = y(() => {
      const b = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(b) || 20, s(a.item.key) % 5 + 1);
    }), g = y(() => d.value ? p.value : v.value), C = y(() => !d.value && a.item.status !== "out-of-stock");
    return (b, k) => (t(), n("div", $0, [
      o("div", w0, [
        o("div", C0, [
          o("div", S0, [
            u.value[c.value] ? (t(), n("img", {
              key: 0,
              src: u.value[c.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, M0)) : $("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", B0, [
            (t(!0), n(z, null, V(u.value, (M, S) => (t(), n("button", {
              key: M,
              type: "button",
              class: P(["size-16 shrink-0 overflow-hidden rounded-md border", S === c.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${S + 1}`,
              "aria-pressed": S === c.value ? "true" : "false",
              onClick: (B) => c.value = S
            }, [
              o("img", {
                src: M,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, A0)
            ], 10, _0))), 128))
          ])) : $("", !0)
        ]),
        o("div", P0, [
          o("div", z0, [
            o("div", O0, [
              o("h1", L0, f(e.item.label), 1),
              o("p", V0, f(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", j0, f(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", T0, f(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", D0, [
            e.item.sku ? (t(), n("div", E0, [
              k[1] || (k[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", I0, f(e.item.sku), 1)
            ])) : $("", !0),
            o("div", F0, [
              o("dt", N0, f(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", R0, f(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          C.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: k[0] || (k[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", U0, [
        k[2] || (k[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", H0, [
          D(kt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: g.value
          }, null, 8, ["label", "value", "series"]),
          D(kt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: v.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", K0, [
          o("p", q0, f(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(bg, {
            data: g.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), W0 = ["href"], c8 = /* @__PURE__ */ O({
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
      class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ge)])
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
        N(" " + f(e.backLabel), 1)
      ], 8, W0),
      D(G0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), Z0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, J0 = ["aria-selected", "onClick"], Y0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, X0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, Q0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, ek = ["aria-pressed"], tk = ["aria-pressed"], f8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(a.tabs[0]?.key ?? ""), i = ut(e, "layout"), d = R({}), u = R(!1);
    me(
      () => a.tabs.map((M) => M.key).join(","),
      (M) => {
        M.split(",").includes(s.value) || (s.value = a.tabs[0]?.key ?? "");
      }
    );
    function c(M) {
      return d.value[M] ?? Ee();
    }
    const v = y(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), p = y(
      () => v.value ? c(v.value.key) : Ee()
    ), g = y(() => {
      const M = v.value;
      return M ? M.items.filter((S) => na(S, c(M.key))) : [];
    });
    function C(M) {
      const S = v.value?.key;
      S && (d.value = {
        ...d.value,
        [S]: { ...c(S), query: M }
      });
    }
    function b() {
      const M = v.value?.key;
      M && (d.value = { ...d.value, [M]: Ee() });
    }
    function k(M) {
      const S = v.value?.key;
      S && (d.value = { ...d.value, [S]: M }, u.value = !1);
    }
    return (M, S) => (t(), n(z, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : x(Ge)])
      }, [
        D(De, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", Z0, [
          (t(!0), n(z, null, V(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (m) => s.value = B.key
          }, f(B.label), 11, J0))), 128))
        ])) : $("", !0),
        o("div", Y0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: v.value?.searchPlaceholder ?? "Search…",
            "aria-label": v.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          x($t)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: b
          }, " Clear ")) : $("", !0),
          (v.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: S[1] || (S[1] = (B) => u.value = !0)
          }, [
            S[8] || (S[8] = o("svg", {
              viewBox: "0 0 24 24",
              class: "size-4",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              o("path", { d: "M3 5h18M6 12h12M10 19h4" })
            ], -1)),
            S[9] || (S[9] = N(" Filters ", -1)),
            x($t)(p.value) ? (t(), n("span", X0, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", Q0, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, ek),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, tk)
          ])
        ]),
        D(ta, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: g.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Xa, {
        open: u.value,
        title: v.value?.filterTitle ?? "Filters",
        "search-placeholder": v.value?.searchPlaceholder ?? "Search…",
        facets: v.value?.facets ?? [],
        applied: p.value,
        onClose: S[7] || (S[7] = (B) => u.value = !1),
        onApply: k,
        onReset: b
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), ak = { class: "flex flex-col gap-4" }, nk = { class: "flex flex-col gap-4" }, m8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = y(
      () => a.cards.filter((d) => na(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", ak, [
        D(De, {
          variant: "small",
          title: e.cardsTitle,
          description: e.cardsDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(ta, {
          searchable: "",
          "layout-toggle": "",
          "search-placeholder": e.searchPlaceholder,
          facets: e.facets,
          items: i.value,
          onFilter: u[0] || (u[0] = (c) => s.value = c),
          onSelect: u[1] || (u[1] = (c) => r("select", c)),
          onCart: u[2] || (u[2] = (c) => r("cart", c))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", nk, [
        D(De, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(so, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: c }) => [
            D(we, {
              status: String(c)
            }, {
              default: L(() => [
                N(f(c), 1)
              ]),
              _: 2
            }, 1032, ["status"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "empty-title"])
      ])
    ], 2));
  }
}), lk = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, ok = { class: "text-sm font-medium" }, sk = ["width", "height", "aria-label"], rk = { class: "flex items-center gap-2" }, ik = /* @__PURE__ */ O({
  __name: "PkSignaturePad",
  props: {
    width: { default: 480 },
    height: { default: 160 },
    disabled: { type: Boolean, default: !1 },
    label: { default: "Draw your signature" }
  },
  emits: ["save", "clear"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(null), i = R(!1);
    let d = null;
    function u() {
      return s.value?.getContext("2d") ?? null;
    }
    function c(M) {
      const S = s.value;
      if (!S)
        return null;
      const B = S.getBoundingClientRect(), m = S.width / B.width, h = S.height / B.height;
      return {
        x: (M.clientX - B.left) * m,
        y: (M.clientY - B.top) * h
      };
    }
    function v(M) {
      a.disabled || (i.value = !0, d = c(M), s.value?.setPointerCapture(M.pointerId));
    }
    function p(M) {
      if (!i.value || a.disabled)
        return;
      const S = u(), B = c(M);
      !S || !B || !d || (S.strokeStyle = "#111827", S.lineWidth = 2.4, S.lineCap = "round", S.lineJoin = "round", S.beginPath(), S.moveTo(d.x, d.y), S.lineTo(B.x, B.y), S.stroke(), d = B);
    }
    function g() {
      i.value = !1, d = null;
    }
    function C() {
      const M = s.value, S = u();
      !M || !S || (S.clearRect(0, 0, M.width, M.height), r("clear"));
    }
    function b() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function k() {
      const M = s.value, S = u();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ve(k), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", lk, [
      o("p", ok, f(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(v, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(g, ["prevent"]),
        onPointerleave: he(g, ["prevent"])
      }, null, 42, sk),
      o("div", rk, [
        D(ue, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: C
        }, {
          default: L(() => [...S[0] || (S[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.disabled,
          onClick: b
        }, {
          default: L(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), dk = { class: "grid gap-8 lg:grid-cols-2" }, uk = { class: "flex flex-col gap-3" }, ck = { class: "text-muted-foreground text-xs font-normal" }, fk = {
  key: 0,
  class: "flex flex-col gap-3"
}, mk = { class: "flex flex-wrap gap-3" }, pk = ["onClick"], vk = ["src", "alt"], gk = {
  key: 1,
  class: "flex flex-col gap-3"
}, hk = { class: "flex flex-wrap gap-3" }, bk = ["onClick"], yk = ["src", "alt"], xk = {
  key: 2,
  class: "flex flex-col gap-4"
}, kk = { class: "flex flex-wrap items-center gap-2" }, $k = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, wk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, Ck = { class: "flex flex-col gap-2" }, Sk = ["src"], Mk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, Bk = ["src"], p8 = /* @__PURE__ */ O({
  __name: "SignatureStudio",
  props: {
    title: { default: "Signatures" },
    description: { default: null },
    documents: { default: () => [] },
    storageKey: { default: null },
    embedded: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, a = R([]), r = R([]), s = R(null), i = R(null), d = R(null), u = R(l.documents[0]?.key ?? "");
    function c(M) {
      try {
        const S = localStorage.getItem(M), B = S ? JSON.parse(S) : [];
        return Array.isArray(B) ? B : [];
      } catch {
        return [];
      }
    }
    ve(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = c(`${l.storageKey}.signatures`), r.value = c(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
    }), me(
      a,
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
    function v(M) {
      const S = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: M
      };
      a.value = [S, ...a.value].slice(0, 8), s.value = S.id;
    }
    async function p(M, S) {
      await gf(M), S(40);
      const B = await new Promise((m, h) => {
        const w = new FileReader();
        w.onload = () => m(String(w.result)), w.onerror = () => h(new Error("Could not read the file")), w.readAsDataURL(M);
      });
      return S(100), { value: B, name: M.name, size: M.size, url: B };
    }
    function g() {
      const M = d.value?.url ?? d.value?.value;
      if (!M)
        return;
      const S = {
        id: `stamp-${Date.now()}`,
        name: d.value?.name ?? "Stamp",
        dataUrl: M
      };
      r.value = [S, ...r.value].slice(0, 8), i.value = S.id;
    }
    const C = y(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), b = y(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), k = y(() => {
      const M = l.documents.find((B) => B.key === u.value)?.document ?? l.documents[0]?.document ?? {}, S = {
        ...M?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...M,
        branding: S
      };
    });
    return (M, S) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : x(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", dk, [
        D(ik, {
          label: "Draw a signature",
          onSave: v
        }),
        o("div", uk, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", ck, f(x(qa)), 1),
          D(La, {
            modelValue: d.value,
            "onUpdate:modelValue": S[0] || (S[0] = (B) => d.value = B),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: p
          }, null, 8, ["modelValue"]),
          D(ue, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: g
          }, {
            default: L(() => [...S[1] || (S[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", fk, [
        D(De, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", mk, [
          (t(!0), n(z, null, V(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: P(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, vk)
          ], 10, pk))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), n("section", gk, [
        D(De, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", hk, [
          (t(!0), n(z, null, V(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: P(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, yk)
          ], 10, bk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", xk, [
        o("div", kk, [
          (t(!0), n(z, null, V(e.documents, (B) => (t(), T(ue, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (m) => u.value = B.key
          }, {
            default: L(() => [
              N(f(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", $k, [
          D(zv, {
            document: k.value
          }, null, 8, ["document"]),
          o("div", wk, [
            o("div", Ck, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Sk)) : (t(), n("p", Mk, "Draw and save a signature"))
            ]),
            b.value ? (t(), n("img", {
              key: 0,
              src: b.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Bk)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), v8 = "panel.dashboard.hiddenWidgets", _k = /* @__PURE__ */ Symbol("dashboardHide"), Ak = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, g8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ht(_k, null), r = R(
      l.catalog.filter((d) => l.defaults.includes(d.id))
    ), s = R(!1);
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
            (c) => typeof c?.id == "string" && typeof c.label == "string" && typeof c.href == "string"
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
    const i = y(() => a?.hidden.value.has("shortcuts") ?? !1);
    return (d, u) => i.value ? $("", !0) : (t(), n("div", Ak, [
      D(xb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (c) => r.value = c),
        onHide: u[1] || (u[1] = (c) => x(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), Pk = { class: "flex flex-col gap-3" }, zk = ["data-slot"], Ok = ["aria-pressed", "aria-label", "title"], Lk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, jk = { class: "flex h-8 items-center" }, Tk = ["aria-label", "title", "onClick"], Dk = ["aria-label", "title", "onClick"], Ek = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, Ik = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, h8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(a.maskable ? !a.hidden : !0), i = R(/* @__PURE__ */ new Set());
    function d(m) {
      return a.maskable && (m.sensitive ?? !0);
    }
    function u(m) {
      return d(m) && !s.value && !i.value.has(m.key);
    }
    const c = y(() => a.segments.some(u)), v = y(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, g = y(() => p[a.columns] ?? p[4]), C = y(() => {
      const m = a.columns ?? 4, h = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, h);
    }), b = y(() => {
      const m = a.columns ?? 4, h = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(h);
    }), k = y(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), b.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: b.value }), m;
    });
    function M() {
      const m = c.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function S(m) {
      if (!d(m))
        return;
      const h = new Set(i.value);
      if (u(m))
        h.add(m.key);
      else if (h.delete(m.key), s.value) {
        s.value = !1;
        for (const w of a.segments)
          w.key !== m.key && d(w) && h.add(w.key);
      }
      i.value = h, r("toggle", c.value);
    }
    function B(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, h) => (t(), n("div", Pk, [
      (t(!0), n(z, null, V(k.value, (w) => (t(), n("div", {
        key: w.key,
        class: P(["relative shrink-0", w.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": w.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && v.value && w.key === k.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": c.value,
          "aria-label": c.value ? "Show all values" : "Hide all values",
          title: c.value ? "Show all values" : "Hide all values",
          onClick: M
        }, [
          (t(), n("svg", Lk, [
            c.value ? (t(), n(z, { key: 0 }, [
              h[0] || (h[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              h[1] || (h[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              h[2] || (h[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              h[3] || (h[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              h[4] || (h[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              h[5] || (h[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Ok)) : $("", !0),
        o("div", {
          class: P(["grid", [w.joined ? "gap-px" : "gap-3", g.value]])
        }, [
          (t(!0), n(z, null, V(w.segments, (A) => (t(), n("div", {
            key: A.key,
            class: P(["bg-card flex flex-col gap-2 p-4", w.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Vk, f(A.label), 1),
            o("div", jk, [
              e.loading ? (t(), T(ze, {
                key: 0,
                variant: "number"
              })) : u(A) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${A.label} hidden. Show it.`,
                title: `Show ${A.label}`,
                onClick: (E) => S(A)
              }, [
                (t(), n(z, null, V(5, (E) => o("span", {
                  key: E,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, Tk)) : d(A) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${A.label}, ${B(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (E) => S(A)
              }, f(B(A.value)), 9, Dk)) : (t(), n("span", Ek, f(B(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), T(Ya, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), T(St, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            A.caption || A.comparison && A.trend ? (t(), n("p", Ik, f(A.caption ?? A.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, zk))), 128))
    ]));
  }
}), Fk = ["aria-label"], Nk = ["aria-valuenow", "aria-label"], Rk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Uk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Hk = ["title"], Kk = { class: "font-medium" }, qk = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Gk = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Wk = { class: "flex items-center justify-between gap-2" }, Zk = { class: "text-sm font-semibold" }, Jk = { class: "flex items-center gap-3" }, Yk = ["href"], Xk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Qk = { class: "flex min-w-0 flex-col gap-0.5" }, e2 = { class: "text-sm font-medium" }, t2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, a2 = {
  key: 1,
  class: "flex flex-col gap-2"
}, n2 = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, l2 = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, o2 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, b8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = y(() => a.items.find((k) => !k.done) ?? null), i = y(() => a.items.filter((k) => k.key !== s.value?.key)), d = y(() => a.items.length), u = y(() => a.items.filter((k) => k.done).length), c = y(() => {
      if (!s.value)
        return d.value;
      const k = a.items.findIndex((M) => M.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), v = y(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = y(() => {
      const k = a.linkComponent;
      return typeof k == "string" ? k : ka(k);
    }), g = st({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = st({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), b = st({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (k, M) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
      key: 0,
      class: "overflow-hidden rounded-md border bg-card",
      "aria-label": e.heading
    }, [
      o("div", {
        class: "h-0.5 w-full bg-muted",
        role: "progressbar",
        "aria-valuenow": v.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${v.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: se({ width: `${v.value}%` })
        }, null, 4)
      ], 8, Nk),
      o("div", Rk, [
        o("span", Uk, " Step " + f(c.value) + " of " + f(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Kk, f(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", qk, f(": " + s.value.detail), 1)) : $("", !0)
        ], 8, Hk),
        s.value?.href ? (t(), T(_e(p.value), {
          key: 0,
          href: s.value.href,
          class: P(x(C))
        }, {
          default: L(() => [
            N(f(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (S) => r("skip"))
        }, f(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, Fk)) : e.items.length ? (t(), n("section", Gk, [
      o("div", Wk, [
        o("h2", Zk, f(e.heading), 1),
        o("div", Jk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (S) => r("skip"))
          }, f(e.skipLabel), 1)) : $("", !0),
          e.reportHref ? (t(), n("a", {
            key: 1,
            href: e.reportHref,
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline"
          }, " Full report ", 8, Yk)) : $("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Xk, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Qk, [
          o("p", e2, f(s.value.title), 1),
          s.value.detail ? (t(), n("p", t2, f(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), T(_e(p.value), {
            key: 1,
            href: s.value.href,
            class: P(x(g))
          }, {
            default: L(() => [
              N(f(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), n("ul", a2, [
        (t(!0), n(z, null, V(i.value, (S) => (t(), n("li", {
          key: S.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: P([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              S.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            S.done ? (t(), n("svg", n2, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", l2, [
            o("p", {
              class: P(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, f(S.title), 3),
            !S.done && S.detail ? (t(), n("p", o2, f(S.detail), 1)) : $("", !0)
          ]),
          !S.done && S.href ? (t(), T(_e(p.value), {
            key: 0,
            href: S.href,
            class: P(x(b))
          }, {
            default: L(() => [
              N(f(S.actionLabel || "Open"), 1)
            ]),
            _: 2
          }, 1032, ["href", "class"])) : $("", !0)
        ]))), 128))
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), s2 = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, r2 = { class: "hidden items-center gap-2 md:flex" }, i2 = { class: "md:hidden" }, d2 = { class: "border-b px-4 py-3" }, u2 = { class: "text-muted-foreground text-xs font-normal" }, c2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, f2 = { class: "font-medium tabular-nums" }, m2 = { class: "ml-auto flex items-center gap-3" }, y8 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", s2, [
      o("div", r2, [
        U(i.$slots, "actions")
      ]),
      o("div", i2, [
        o("button", {
          type: "button",
          dusk: "mobile-bulk-actions",
          class: "border-input bg-background hover:bg-accent inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium",
          onClick: d[0] || (d[0] = (u) => r.value = !0)
        }, " Actions "),
        D(Zt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: L(() => [
            D(Jt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", d2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", u2, f(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", c2, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", f2, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + f(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(f(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", m2, [
        !e.allMatching && e.total !== void 0 && e.total > e.count ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-primary text-xs font-medium hover:underline",
          onClick: d[2] || (d[2] = (u) => a("select-all-matching"))
        }, " Select all " + f(s(e.total)), 1)) : $("", !0),
        o("button", {
          type: "button",
          class: "text-destructive text-xs font-medium hover:underline",
          onClick: d[3] || (d[3] = (u) => a("clear"))
        }, " Deselect all ")
      ])
    ]));
  }
}), p2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, v2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, g2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, h2 = ["value"], b2 = ["value"], y2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, x2 = ["disabled"], k2 = ["disabled"], $2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, w2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, C2 = ["disabled"], x8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = (c) => new Intl.NumberFormat().format(c), i = y(() => a.rowsOnPage === 0 ? 0 : (a.page - 1) * a.perPage + 1), d = y(() => (a.page - 1) * a.perPage + a.rowsOnPage), u = y(
      () => a.total === void 0 ? null : Math.max(1, Math.ceil(a.total / a.perPage))
    );
    return (c, v) => (t(), n("div", p2, [
      o("p", v2, [
        N(" Showing " + f(s(i.value)) + "-" + f(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + f(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", g2, [
        v[4] || (v[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: v[0] || (v[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, V(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, f(p), 9, b2))), 128))
        ], 40, h2)
      ])) : $("", !0),
      o("nav", y2, [
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
        ])], 8, x2),
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
        ])], 8, k2),
        o("span", $2, f(e.page), 1),
        u.value !== null ? (t(), n("span", w2, " of " + f(s(u.value)), 1)) : $("", !0),
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
        ])], 8, C2)
      ])
    ]));
  }
}), S2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, M2 = ["aria-current"], B2 = ["title"], _2 = ["aria-current", "onClick"], A2 = ["title"], P2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", S2, [
      o("button", {
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, f(r(e.counts.all ?? 0)), 11, B2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, M2),
      (t(!0), n(z, null, V(e.tabs, (d) => (t(), n("button", {
        key: d,
        type: "button",
        class: P([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === d ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === d ? "page" : void 0,
        onClick: (u) => a("select", d)
      }, [
        N(f(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, f(r(e.counts[d] ?? 0)), 11, A2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, _2))), 128))
    ]));
  }
}), k8 = /* @__PURE__ */ wt(P2, [["__scopeId", "data-v-3967c945"]]), z2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, O2 = { class: "grid gap-2" }, L2 = {
  key: 0,
  class: "text-destructive text-sm"
}, V2 = { class: "flex gap-2" }, $8 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
      const C = navigator.userAgent, b = [
        { pattern: /Edg|Edge/, name: "Edge" },
        { pattern: /OPR|Opera|OPiOS/, name: "Opera" },
        { pattern: /Firefox|FxiOS/, name: "Firefox" },
        { pattern: /Chrome|CriOS/, name: "Chrome" },
        { pattern: /Safari/, name: "Safari" }
      ].find(({ pattern: M }) => M.test(C))?.name, k = [
        { pattern: /iPhone/, name: "iPhone" },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: "iPad" },
        { pattern: /Android/, name: "Android" },
        { pattern: /Mac/, name: "Mac" },
        { pattern: /Windows/, name: "Windows" }
      ].find(({ pattern: M }) => M.test(C))?.name;
      return [b, k].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), d = cn(null), u = y(() => d.value?.isLoading.value ?? !1), c = y(() => d.value?.error.value ?? null), v = y(() => d.value?.isSupported.value ?? !1);
    ve(async () => {
      try {
        const { usePasskeyRegister: C } = await import("@laravel/passkeys/vue");
        d.value = C({
          onSuccess: () => {
            s.value = "", i.value = !1, a("success");
          }
        });
      } catch {
        d.value = null;
      }
    });
    const p = async (C) => {
      C.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, g = () => {
      i.value = !1, s.value = "";
    };
    return (C, b) => v.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", O2, [
        b[3] || (b[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": b[1] || (b[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Ae, s.value]
        ]),
        b[4] || (b[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      c.value ? (t(), n("p", L2, f(c.value), 1)) : $("", !0),
      o("div", V2, [
        D(ue, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: L(() => [
            N(f(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          type: "button",
          variant: "ghost",
          onClick: g
        }, {
          default: L(() => [...b[5] || (b[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(ue, {
      key: 1,
      variant: "outline",
      onClick: b[0] || (b[0] = (k) => i.value = !0)
    }, {
      default: L(() => [...b[2] || (b[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", z2, " Passkeys are not supported in this browser. "));
  }
}), j2 = { class: "pk-form-stack" }, T2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, w8 = /* @__PURE__ */ O({
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
    Ot("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), Ot("panelCreateOption", {
      run(c, v) {
        return a.createOption ? a.createOption(c, v) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = y(() => a.nodes.length > 0), i = y(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = y(() => a.errors._conflict);
    function u(c) {
      if (a.upload)
        return (v, p) => a.upload(c, v, p);
    }
    return (c, v) => (t(), n("div", j2, [
      d.value ? (t(), n("p", T2, f(d.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, V(e.nodes, (p, g) => (t(), T(ja, {
        key: g,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: v[0] || (v[0] = (C, b) => r("change", C, b)),
        onAffixAction: v[1] || (v[1] = (C, b) => r("affix-action", C, b))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: P(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, V(e.fields, (p) => (t(), T(Xe, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (g) => e.searchOptions(p.key, g) : void 0,
          upload: u(p.key),
          discard: e.discard,
          class: P(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (g) => r("change", p.key, g),
          onAffixAction: (g) => r("affix-action", p.key, g)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), D2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, E2 = ["disabled"], I2 = ["disabled"], F2 = ["disabled"], C8 = /* @__PURE__ */ O({
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
    const l = R(!1);
    ve(() => {
      l.value = !!document.getElementById("pk-main");
    });
    const a = y(() => l.value ? "#pk-main" : "body"), r = y(() => !l.value), s = y(
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4"
    );
    return (i, d) => (t(), T(Qe, {
      to: a.value,
      disabled: r.value
    }, [
      D(Ue, {
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
                x(ro),
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
              o("span", D2, f(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, f(e.discardLabel), 9, E2)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, f(e.cancelLabel), 9, I2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, f(e.processing ? "Saving…" : e.saveLabel), 9, F2)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function S8(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(zt(e.value)), s = y(() => zt(e.value) !== r.value);
  function i() {
    r.value = zt(e.value);
  }
  function d() {
    e.value = JSON.parse(r.value);
  }
  function u(c) {
    s.value && (c.preventDefault(), c.returnValue = "");
  }
  return ve(() => {
    a && window.addEventListener("beforeunload", u);
  }), ke(() => {
    window.removeEventListener("beforeunload", u);
  }), { dirty: s, commit: i, discard: d, baseline: r };
}
function zt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const N2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, R2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, U2 = { class: "text-foreground text-sm font-medium" }, H2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, K2 = {
  key: 5,
  class: "max-w-full font-normal"
}, q2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, G2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, W2 = {
  key: 6,
  class: "font-normal"
}, Z2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, J2 = { class: "text-muted-foreground truncate font-medium" }, Y2 = { class: "text-foreground col-span-2 break-words" }, X2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, Q2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, e$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, t$ = ["href"], a$ = { class: "flex min-w-0 items-start gap-2.5" }, n$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, l$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, o$ = ["d"], s$ = { class: "min-w-0" }, r$ = { class: "flex flex-wrap items-center gap-2" }, i$ = { class: "text-sm font-semibold" }, d$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, u$ = ["onClick"], M8 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = y(() => a.depth === 0), u = y(() => {
      const b = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return b >= 3 ? "sm:grid-cols-3" : b === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), c = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, v = y(() => a.node.key ? a.record[a.node.key] : null), p = y(() => {
      const b = v.value;
      return b == null || b === "";
    }), g = y(() => {
      if (p.value)
        return "None";
      const b = v.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(b)).toLocaleDateString(void 0, c[a.node.type]);
      let k = String(b);
      return a.node.transform === "upper" && (k = k.toUpperCase()), a.node.transform === "lower" && (k = k.toLowerCase()), [a.node.prefix, k, a.node.suffix].filter(Boolean).join(" ");
    }), C = y(() => {
      const b = typeof v.value == "boolean" ? v.value ? "1" : "" : String(v.value), k = a.node.colors?.[b] ?? a.node.defaultColor ?? "neutral";
      return Yt[k] ?? "outline";
    });
    return (b, k) => {
      const M = Rt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", N2, [
        o("dt", R2, f(e.node.label), 1),
        o("dd", U2, [
          e.node.type === "badge" && x(Au)(v.value) ? (t(), T(qe, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: L(() => [
              N(f(v.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", H2, "None")) : e.node.type === "icon" ? (t(), T(nu, {
            key: 2,
            value: v.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(iu, {
            key: 3,
            src: v.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(mu, {
            key: 4,
            value: typeof v.value == "string" ? v.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", K2, [
            e.node.language ? (t(), n("p", q2, f(e.node.language), 1)) : $("", !0),
            o("pre", G2, [
              o("code", null, f(v.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", W2, [
            v.value && typeof v.value == "object" && !Array.isArray(v.value) && Object.keys(v.value).length ? (t(), n("dl", Z2, [
              (t(!0), n(z, null, V(v.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", J2, f(B), 1),
                o("dd", Y2, f(S), 1)
              ]))), 128))
            ])) : (t(), n("span", X2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", Q2, [
            (t(!0), n(z, null, V(Array.isArray(v.value) ? v.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, V(e.node.entries ?? [], (m, h) => (t(), T(M, {
                key: h,
                node: m,
                record: S,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = (w) => r("action", w))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(v.value) || v.value.length === 0 ? (t(), n("span", e$, "None")) : $("", !0)
          ])) : e.node.url && !p.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, f(g.value), 9, t$)) : (t(), n("span", {
            key: 9,
            class: P([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, f(g.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: k[1] || (k[1] = (S) => r("action", e.node.action))
          }, f(e.node.action.label), 1)) : $("", !0)
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
          onClick: k[2] || (k[2] = (S) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", a$, [
            e.node.icon ? (t(), n("div", n$, [
              (t(), n("svg", l$, [
                o("path", {
                  d: x(ce)(e.node.icon)
                }, null, 8, o$)
              ]))
            ])) : $("", !0),
            o("div", s$, [
              o("div", r$, [
                o("h3", i$, f(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), n("p", d$, f(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (S, B) => (t(), T(M, {
            key: B,
            node: S,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (m) => r("action", m))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (m) => r("action", m))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: P(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (m) => i.value = B
          }, f(S.label), 11, u$))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(S.children ?? [], (m, h) => (t(), T(M, {
            key: h,
            node: m,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[5] || (k[5] = (w) => r("action", w))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [He, i.value === B]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), c$ = { class: "text-muted-foreground text-sm font-normal" }, f$ = { class: "flex items-start gap-3" }, m$ = { class: "min-w-0 flex-1" }, p$ = { class: "flex flex-wrap items-center gap-2" }, v$ = { class: "truncate text-sm font-medium" }, g$ = { class: "text-muted-foreground mt-0.5 text-xs" }, h$ = { class: "text-muted-foreground text-xs font-normal" }, b$ = { class: "mt-auto flex items-center gap-2" }, y$ = /* @__PURE__ */ O({
  __name: "PaymentGateways",
  props: {
    gateways: {}
  },
  emits: ["configure", "toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = y(
      () => a.gateways.filter((i) => i.connected).length
    );
    return (i, d) => (t(), n("div", {
      class: P(["flex flex-col gap-4", x(Ka)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", c$, f(s.value) + " of " + f(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(x(rf))
      }, [
        (t(!0), n(z, null, V(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", f$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, f(u.mark), 5),
            o("div", m$, [
              o("div", p$, [
                o("h3", v$, f(u.label), 1),
                D(we, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    N(f(u.connected ? "Connected" : "Not connected"), 1)
                  ]),
                  _: 2
                }, 1032, ["status"]),
                u.connected && u.enabled !== !1 ? (t(), T(we, {
                  key: 0,
                  status: "offered"
                }, {
                  default: L(() => [...d[0] || (d[0] = [
                    N(" Offered ", -1)
                  ])]),
                  _: 1
                })) : u.connected ? (t(), T(we, {
                  key: 1,
                  status: "disabled"
                }, {
                  default: L(() => [...d[1] || (d[1] = [
                    N(" Disabled ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.isDefault ? (t(), T(we, {
                  key: 2,
                  status: "default"
                }, {
                  default: L(() => [...d[2] || (d[2] = [
                    N(" Default ", -1)
                  ])]),
                  _: 1
                })) : $("", !0),
                u.connected && u.mode ? (t(), T(we, {
                  key: 3,
                  status: u.mode
                }, {
                  default: L(() => [
                    N(f(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", g$, f(u.caption), 1)
            ])
          ]),
          o("p", h$, f(u.methods.join(" · ")), 1),
          o("div", b$, [
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: (c) => r("configure", u.key)
            }, {
              default: L(() => [...d[3] || (d[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(ue, {
              size: "sm",
              variant: "ghost",
              onClick: (c) => r("toggle", u.key)
            }, {
              default: L(() => [
                N(f(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), x$ = { class: "flex flex-col gap-6" }, k$ = { class: "relative" }, $$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, w$ = ["d"], C$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, S$ = {
  key: 0,
  class: "flex flex-col gap-4"
}, M$ = { class: "flex flex-wrap items-center gap-2" }, B$ = { class: "text-muted-foreground text-sm font-normal" }, _$ = { class: "flex flex-col gap-1 text-sm" }, A$ = ["value"], P$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, z$ = { class: "flex flex-wrap items-center gap-2" }, O$ = {
  key: 1,
  class: "flex items-center gap-2"
}, B8 = /* @__PURE__ */ O({
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
    const l = ut(e, "gateways"), a = R(null), r = R(""), s = y(
      () => l.value.find((b) => b.key === a.value) ?? null
    ), i = y(() => {
      const b = r.value.trim().toLowerCase();
      return b === "" ? l.value : l.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes(b));
    });
    function d(b) {
      return b.connected && b.enabled !== !1;
    }
    function u(b, k) {
      l.value = l.value.map(
        (M) => M.key === b ? { ...M, ...k } : M
      );
    }
    function c(b) {
      a.value = b;
    }
    function v(b) {
      const k = l.value.find((S) => S.key === b);
      if (!k)
        return;
      const M = !k.connected;
      u(b, {
        connected: M,
        mode: M ? k.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function p(b, k) {
      const M = l.value.find((S) => S.key === b);
      M?.connected && u(b, { enabled: k, isDefault: k ? M.isDefault : !1 });
    }
    function g(b) {
      const k = l.value.find((M) => M.key === b);
      !k || !d(k) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === b
      })));
    }
    function C(b) {
      const k = a.value;
      !k || !l.value.find((S) => S.key === k)?.connected || u(k, { mode: b });
    }
    return (b, k) => (t(), n(z, null, [
      o("div", x$, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", k$, [
          (t(), n("svg", $$, [
            o("path", {
              d: x(ce)("search")
            }, null, 8, w$)
          ])),
          D($e, {
            modelValue: r.value,
            "onUpdate:modelValue": k[0] || (k[0] = (M) => r.value = M),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T(y$, {
          key: 0,
          gateways: i.value,
          onConfigure: c,
          onToggle: v
        }, null, 8, ["gateways"])) : (t(), n("p", C$, " No gateways match “" + f(r.value.trim()) + "”. ", 1))
      ]),
      D(aa, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: k[8] || (k[8] = (M) => a.value = null)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            size: "sm",
            onClick: k[6] || (k[6] = (M) => a.value = null)
          }, {
            default: L(() => [...k[21] || (k[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(ue, {
            key: 0,
            size: "sm",
            onClick: k[7] || (k[7] = (M) => v(s.value.key))
          }, {
            default: L(() => [
              N(f(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", S$, [
            o("div", M$, [
              D(we, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  N(f(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(we, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...k[9] || (k[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(we, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...k[10] || (k[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...k[11] || (k[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  N(f(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", B$, f(s.value.caption), 1),
            o("label", _$, [
              k[12] || (k[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, A$)
            ]),
            k[20] || (k[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", P$, [
              k[16] || (k[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", z$, [
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: k[1] || (k[1] = (M) => p(s.value.key, !0))
                }, {
                  default: L(() => [...k[13] || (k[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: k[2] || (k[2] = (M) => p(s.value.key, !1))
                }, {
                  default: L(() => [...k[14] || (k[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: k[3] || (k[3] = (M) => g(s.value.key))
                }, {
                  default: L(() => [...k[15] || (k[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", O$, [
              D(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: k[4] || (k[4] = (M) => C("test"))
              }, {
                default: L(() => [...k[18] || (k[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(ue, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: k[5] || (k[5] = (M) => C("live"))
              }, {
                default: L(() => [...k[19] || (k[19] = [
                  N(" Live ", -1)
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
function ya(e) {
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
function _8(e) {
  const l = R(ya(e));
  ve(() => {
    l.value = ya(e);
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
    const c = new Set(l.value);
    c.has(u) ? c.delete(u) : c.add(u), l.value = c;
  }
  function r(u) {
    const c = new Set(l.value);
    c.add(u), l.value = c;
  }
  function s(u) {
    const c = new Set(l.value);
    c.delete(u), l.value = c;
  }
  function i(u) {
    l.value = new Set(u);
  }
  function d() {
    l.value = /* @__PURE__ */ new Set();
  }
  return { hidden: l, toggle: a, hide: r, show: s, setHidden: i, reset: d };
}
function xa(e) {
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
function A8(e) {
  const l = R(xa(e));
  ve(() => {
    l.value = xa(e);
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
    for (const [u, c] of Object.entries(i))
      typeof c == "number" && c >= 48 && c <= 1200 && (d[u] = Math.round(c));
    l.value = d;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: a, setWidths: r, reset: s };
}
function P8(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = R(
    l.driver === "none" ? "off" : "connecting"
  ), c = R(/* @__PURE__ */ new Set());
  let v = /* @__PURE__ */ new Map(), p, g, C, b = (/* @__PURE__ */ new Date()).toISOString(), k = null;
  function M(K, q) {
    v.set(K, { ...v.get(K) ?? {}, ...q }), !p && (p = setTimeout(() => {
      p = void 0, S();
    }, l.batchMs));
  }
  function S() {
    if (v.size === 0)
      return;
    const K = v;
    v = /* @__PURE__ */ new Map();
    const q = /* @__PURE__ */ new Set();
    for (const [oe, ne] of K) {
      const Z = a.value.find((G) => G[r] === oe);
      if (!Z) {
        d?.(oe, ne);
        continue;
      }
      Object.assign(Z, ne), q.add(oe);
    }
    q.size !== 0 && (c.value = /* @__PURE__ */ new Set([...c.value, ...q]), setTimeout(() => {
      const oe = new Set(c.value);
      q.forEach((ne) => oe.delete(ne)), c.value = oe;
    }, 1500));
  }
  async function B() {
    if (!(!s || a.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const K = a.value.map((ne) => ne[r]), { records: q, at: oe } = await s(K, b);
        b = oe, u.value = "live";
        for (const ne of q)
          M(ne[r], ne);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    h(), u.value = "live", g = setInterval(B, l.intervalMs);
  }
  function h() {
    clearInterval(g), g = void 0, C?.abort();
  }
  function w() {
    return window.Echo ?? null;
  }
  function A() {
    const K = w();
    if (!K || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    k = l.channel;
    const q = K.private(l.channel);
    for (const oe of l.events)
      q.listen(oe, (ne) => {
        ne?.[r] !== void 0 && M(ne[r], ne);
      });
    u.value = "live", K.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), K.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function E() {
    k && (w()?.leave(k), k = null);
  }
  function I() {
    l.driver === "poll" && m(), l.driver === "broadcast" && A();
  }
  function ae() {
    h(), E(), clearTimeout(p), p = void 0, v = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ae(), u.value = "paused") : (b = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), ae();
  }), { status: u, recentlyChanged: c, applyPatch: M, flush: S, pollOnce: B };
}
const L$ = /^[a-z0-9-]+$/, V$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function z8(e) {
  fn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !L$.test(a) || typeof r != "string" || !V$.test(r) || (l[`--${a}`] = r);
    oc(l);
  });
}
const j$ = { class: "flex items-center gap-0.5" }, T$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", j$, [
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
}), D$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Ja, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), E$ = { class: "flex flex-col gap-2" }, I$ = { class: "bg-card rounded-lg border p-4" }, F$ = { class: "text-muted-foreground truncate text-xs" }, N$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, R$ = /* @__PURE__ */ O({
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
      const k = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? d.value : `${d.value} › ${k.split("/").join(" › ")}`;
    });
    function c(k, M) {
      return k.length <= M ? k : `${k.slice(0, M - 1).trimEnd()}…`;
    }
    const v = y(() => c(s.value, r.value.titleMax)), p = y(() => c(i.value, r.value.descriptionMax));
    function g(k, M, S) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = y(
      () => g(s.value.length, r.value.titleMin, r.value.titleMax)
    ), b = y(
      () => g(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, M) => (t(), n("div", E$, [
      o("div", I$, [
        o("p", F$, f(u.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", v.value === "" ? "text-muted-foreground italic" : ""])
        }, f(v.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, f(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", N$, [
        o("span", {
          class: P(C.value.tone)
        }, " Title " + f(s.value.length) + "/" + f(r.value.titleMax) + " · " + f(C.value.note), 3),
        o("span", {
          class: P(b.value.tone)
        }, " Description " + f(i.value.length) + "/" + f(r.value.descriptionMax) + " · " + f(b.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), U$ = ["value", "placeholder", "disabled"], H$ = /* @__PURE__ */ O({
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
      class: P(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", x(Se)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, U$));
  }
}), K$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, q$ = ["aria-selected", "disabled", "title", "onClick"], G$ = /* @__PURE__ */ O({
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
    return (u, c) => (t(), n("div", K$, [
      (t(!0), n(z, null, V(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [x(Se), i.value === v ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === v,
        disabled: e.disabled,
        title: v,
        onClick: (p) => d(v)
      }, f(v), 11, q$))), 128))
    ]));
  }
}), W$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, Z$ = ["disabled"], J$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, Y$ = ["onClick"], X$ = ["onClick"], Q$ = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = R(!1), d = y(() => a.field.options ?? []);
    function u(g, C) {
      return !C || g.label.toLowerCase().includes(C) ? !0 : (g.children ?? []).some((b) => u(b, C));
    }
    const c = y(() => {
      const g = s.value.trim().toLowerCase();
      return g ? d.value.filter((C) => u(C, g)) : d.value;
    }), v = y(() => {
      const g = (C) => {
        for (const b of C) {
          if (b.value === a.modelValue)
            return b.label;
          const k = g(b.children ?? []);
          if (k)
            return k;
        }
        return null;
      };
      return g(d.value);
    });
    function p(g) {
      a.disabled || (r("update:modelValue", g), i.value = !1);
    }
    return (g, C) => (t(), n("div", W$, [
      o("button", {
        type: "button",
        class: P(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", x(Se)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (b) => i.value = !i.value)
      }, [
        o("span", {
          class: P(v.value ? "" : "text-muted-foreground")
        }, f(v.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, Z$),
      i.value ? (t(), n("div", J$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (b) => s.value = b),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), n(z, null, V(c.value, (b) => (t(), n(z, {
          key: String(b.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === b.value ? "bg-accent" : ""]),
            onClick: (k) => p(b.value)
          }, f(b.label), 11, Y$),
          (t(!0), n(z, null, V(b.children ?? [], (k) => (t(), n("button", {
            key: String(k.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === k.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => p(k.value)
          }, f(k.label), 11, X$))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), ew = ["aria-label"], tw = ["disabled", "aria-label", "aria-pressed", "onClick"], aw = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, nw = { key: 0 }, lw = ["id"], ow = ["fill"], sw = ["disabled"], rw = /* @__PURE__ */ O({
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
    function c(v) {
      return d.value >= v ? "full" : i.value && d.value >= v - 0.5 ? "half" : "empty";
    }
    return (v, p) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(z, null, V(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${g} of ${s.value}`,
        "aria-pressed": d.value >= g,
        onClick: (C) => u(g)
      }, [
        (t(), n("svg", aw, [
          c(g) === "half" ? (t(), n("defs", nw, [
            o("linearGradient", {
              id: `half-${e.field.key}-${g}`,
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
            ])], 8, lw)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: c(g) === "full" ? "currentColor" : c(g) === "half" ? `url(#half-${e.field.key}-${g})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, ow)
        ]))
      ], 8, tw))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (g) => u(0))
      }, " Clear ", 8, sw)) : $("", !0)
    ], 8, ew));
  }
});
function iw() {
  xe("radio", Em), xe("toggle-buttons", Va), xe("checkboxlist", Nm), xe("tags", Wm), xe("colour", sp), xe("slider", Ip), xe("rating", rw), xe("phone", H$), xe("icon-picker", G$), xe("tree-select", Q$), xe("visual-select", Xp), xe("markdown", hm), xe("code", Cm), xe("map", cp), xe("qrcode", gp), xe("barcode", wp), xe("diff", Mp), xe("seo-preview", R$), Pt("swatch", ev), Pt("voucher-code-box", D$), Pt("document-colour-mode", T$);
}
function Qa() {
  const e = R(null), l = R(!1);
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
const dw = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Qa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", x(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), uw = ["id"], Me = /* @__PURE__ */ O({
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
        D(dw, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, uw));
  }
}), cw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, fw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, mw = {
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
      e.eyebrow ? (t(), n("p", cw, f(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", fw, f(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", mw, f(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), pw = { class: "flex flex-col gap-10" }, vw = { class: "grid gap-4 md:grid-cols-3" }, gw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, hw = { class: "text-sm font-semibold text-balance" }, bw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, yw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", pw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", vw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", gw, f(r.meta), 1)) : $("", !0),
                  o("h3", hw, f(r.title), 1),
                  r.body ? (t(), n("p", bw, f(r.body), 1)) : $("", !0)
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
function xw() {
  const e = R(null);
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
const kw = { class: "pk-tilt-inner relative h-full" }, $w = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = xw();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", kw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), ww = { class: "flex flex-col gap-10" }, Cw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, Sw = { class: "text-base font-semibold" }, Mw = { class: "text-sm text-pretty text-muted-foreground" }, Bw = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Me, null, {
      default: L(() => [
        o("div", ww, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Cw, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), T($w, {
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
                  o("h3", Sw, f(s.title), 1),
                  o("p", Mw, f(s.body), 1)
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
}), _w = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, Aw = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, Pw = { class: "grid gap-4 text-sm" }, zw = {
  key: 0,
  class: "grid gap-1"
}, Ow = ["href"], Lw = {
  key: 1,
  class: "grid gap-1"
}, Vw = ["href"], jw = {
  key: 2,
  class: "grid gap-1"
}, Tw = { class: "text-pretty text-muted-foreground" }, Dw = ["href"], Ew = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", _w, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Aw, [
            o("dl", Pw, [
              e.email ? (t(), n("div", zw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.email), 9, Ow)
                ])
              ])) : $("", !0),
              e.phone ? (t(), n("div", Lw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, f(e.phone), 9, Vw)
                ])
              ])) : $("", !0),
              e.address ? (t(), n("div", jw, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", Tw, f(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.label), 9, Dw)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Iw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Fw = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Nw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Rw = ["href"], Uw = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", Iw, [
          o("h2", Fw, f(e.title), 1),
          e.body ? (t(), n("p", Nw, f(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, f(e.label), 9, Rw)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Hw = { class: "flex flex-col gap-8" }, Kw = { class: "divide-y rounded-lg border" }, qw = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Gw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Ww = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { narrow: "" }, {
      default: L(() => [
        o("div", Hw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Kw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", qw, [
                N(f(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Gw, f(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Zw = { class: "flex flex-col gap-10" }, Jw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Yw = { class: "text-sm font-semibold" }, Xw = { class: "text-sm text-pretty text-muted-foreground" }, Qw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", Zw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Jw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Yw, f(r.title), 1),
              o("p", Xw, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), e4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, t4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, a4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, n4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, l4 = ["href"], o4 = ["href"], s4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, r4 = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", {
          class: P(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", e4, f(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), n("p", t4, f(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, f(e.title), 3),
          e.body ? (t(), n("p", a4, f(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", n4, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, f(e.secondaryLabel), 9, l4)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, f(e.primaryLabel), 9, o4)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", s4, f(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), i4 = { class: "flex flex-col items-center gap-6" }, d4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, u4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, c4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", i4, [
          e.title ? (t(), n("p", d4, f(e.title), 1)) : $("", !0),
          o("ul", u4, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, f(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), f4 = { class: "flex flex-col gap-10" }, m4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, p4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, v4 = ["aria-pressed"], g4 = ["aria-pressed"], h4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, b4 = { class: "grid gap-4 md:grid-cols-3" }, y4 = { class: "flex flex-col gap-1" }, x4 = { class: "text-sm font-semibold" }, k4 = { class: "flex items-baseline gap-1" }, $4 = { class: "text-3xl font-semibold tracking-tight" }, w4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, C4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, S4 = { class: "flex flex-col gap-2 text-sm" }, M4 = { class: "text-muted-foreground" }, B4 = ["href"], _4 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = R(!1), r = y(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", f4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", m4, [
            o("div", p4, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, v4),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, g4)
            ]),
            e.annualNote ? (t(), n("p", h4, f(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", b4, [
            (t(!0), n(z, null, V(e.items ?? [], (u, c) => (t(), n("li", {
              key: c,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", y4, [
                o("h3", x4, f(u.name), 1),
                o("p", k4, [
                  o("span", $4, f(s(u)), 1),
                  u.period ? (t(), n("span", w4, f(u.period), 1)) : $("", !0)
                ]),
                u.body ? (t(), n("p", C4, f(u.body), 1)) : $("", !0)
              ]),
              o("ul", S4, [
                (t(!0), n(z, null, V(u.features ?? [], (v, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", M4, f(v.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, f(u.label), 11, B4)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function A4() {
  const e = R(null);
  let l = null, a = null, r = !1, s = !1;
  function i() {
    if (r = !1, !l || !s)
      return;
    const u = l.getBoundingClientRect(), c = u.height + window.innerHeight, v = c <= 0 ? 0 : (window.innerHeight - u.top) / c;
    l.style.setProperty("--pk-progress", String(Math.min(Math.max(v, 0), 1)));
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
      l.style.setProperty("--pk-progress", "0"), a = new IntersectionObserver((c) => {
        s = c.some((v) => v.isIntersecting), s && d();
      }), a.observe(l), window.addEventListener("scroll", d, { passive: !0 }), window.addEventListener("resize", d, { passive: !0 }), d();
    }
  }), ke(() => {
    a?.disconnect(), window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), { el: e };
}
const P4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, z4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, O4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, L4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, V4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, j4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, T4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, D4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, E4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, I4 = { class: "flex" }, F4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, N4 = { class: "min-w-0 flex-1 p-4" }, R4 = { class: "flex flex-col divide-y rounded-md border" }, U4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = A4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", P4, [
        o("div", z4, [
          o("div", O4, [
            o("h2", L4, f(e.title), 1),
            e.body ? (t(), n("p", V4, f(e.body), 1)) : $("", !0)
          ]),
          o("div", j4, [
            o("div", T4, [
              o("div", D4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", E4, f(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", I4, [
                o("div", F4, [
                  (t(), n(z, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", N4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", R4, [
                    (t(!0), n(z, null, V(e.rows, (s) => (t(), n("div", {
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
}), H4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Qa(), s = R(0);
    return me(r, (i) => {
      if (!i)
        return;
      if (typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof requestAnimationFrame > "u") {
        s.value = l.to;
        return;
      }
      const u = performance.now(), c = (v) => {
        const p = Math.min((v - u) / l.duration, 1);
        s.value = l.to * (1 - Math.pow(1 - p, 3)), p < 1 ? requestAnimationFrame(c) : s.value = l.to;
      };
      requestAnimationFrame(c);
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, f(e.prefix ?? "") + f(s.value.toFixed(e.decimals)) + f(e.suffix ?? ""), 513));
  }
}), K4 = { class: "flex flex-col gap-10" }, q4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, G4 = { class: "order-2 text-sm text-muted-foreground" }, W4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, Z4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Me, { muted: "" }, {
      default: L(() => [
        o("div", K4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", q4, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", G4, f(s.label), 1),
              o("dd", W4, [
                l(s.value) ? (t(), T(H4, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  N(f(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), J4 = { class: "flex flex-col gap-10" }, Y4 = { class: "grid gap-6 md:grid-cols-3" }, X4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, Q4 = { class: "text-sm font-semibold" }, e5 = { class: "text-sm text-pretty text-muted-foreground" }, t5 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", J4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", Y4, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", X4, f(s + 1), 1),
              o("h3", Q4, f(r.title), 1),
              o("p", e5, f(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), a5 = { class: "flex flex-col gap-10" }, n5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, l5 = ["src"], o5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, s5 = { class: "min-w-0" }, r5 = { class: "truncate text-sm font-semibold" }, i5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, d5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, u5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", a5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", n5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, l5)) : (t(), n("span", o5, f((r.name ?? "?").slice(0, 1)), 1)),
              o("div", s5, [
                o("h3", r5, f(r.name), 1),
                r.role ? (t(), n("p", i5, f(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), n("p", d5, f(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), c5 = { class: "flex flex-col gap-10" }, f5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, m5 = { class: "text-pretty text-sm leading-relaxed" }, p5 = { class: "mt-auto flex items-center gap-3" }, v5 = ["src"], g5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, h5 = { class: "min-w-0" }, b5 = { class: "block truncate text-sm font-medium" }, y5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, x5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Me, null, {
      default: L(() => [
        o("div", c5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", f5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", m5, " “" + f(r.quote) + "” ", 1),
              o("figcaption", p5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, v5)) : (t(), n("span", g5, f((r.name ?? "?").slice(0, 1)), 1)),
                o("span", h5, [
                  o("span", b5, f(r.name), 1),
                  r.role ? (t(), n("span", y5, f(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), O8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: r4,
      logos: c4,
      features: Qw,
      bento: Bw,
      showcase: U4,
      steps: t5,
      stats: Z4,
      testimonials: x5,
      team: u5,
      articles: yw,
      contact: Ew,
      pricing: _4,
      faq: Ww,
      cta: Uw
    }, s = y(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, V(s.value, (u) => (t(), T(_e(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), k5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, L8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", k5, [
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
}), $5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, V8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", $5, [...a[0] || (a[0] = [
      Nt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), w5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, j8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", w5, [...a[0] || (a[0] = [
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
});
iw();
const T8 = "0.0.1";
export {
  ra as ACTION_KEY_ICONS,
  Tt as APPEARANCE_STYLE_ID,
  n8 as AdminDirectory,
  ef as Alert,
  tf as AlertDescription,
  af as AlertTitle,
  RC as AppPageFooter,
  o3 as AppearanceDrawer,
  lC as Avatar,
  oC as AvatarFallback,
  sC as AvatarImage,
  Yt as BADGE_VARIANTS,
  Q5 as BadgeResolver,
  JC as BarChart,
  rC as Breadcrumb,
  iC as BreadcrumbEllipsis,
  dC as BreadcrumbItem,
  uC as BreadcrumbLink,
  cC as BreadcrumbList,
  fC as BreadcrumbPage,
  mC as BreadcrumbSeparator,
  j5 as BulkActions,
  Ka as CATALOGUE_CONTAINER,
  rf as CATALOGUE_GRID,
  f3 as CATALOGUE_GRID_TIGHT,
  df as CATALOGUE_GRID_TILES,
  OC as Card,
  LC as CardAction,
  VC as CardContent,
  jC as CardDescription,
  TC as CardFooter,
  DC as CardHeader,
  EC as CardTitle,
  l0 as CartPanel,
  f8 as CatalogBrowser,
  P1 as CatalogCard,
  Xa as CatalogFilterSheet,
  ta as CatalogGrid,
  u8 as CatalogInspect,
  G0 as CatalogItemDetail,
  c8 as CatalogItemView,
  m8 as CatalogRegister,
  d8 as CatalogTill,
  tb as ChartCard,
  mt as ChartTooltip,
  Qr as Checkbox,
  G5 as CheckboxCell,
  W5 as CodeCell,
  mu as ColourCell,
  t8 as ComboChart,
  Xr as CreateOptionDialog,
  qr as CreateOptionError,
  v8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  _k as DASHBOARD_HIDE_KEY,
  g8 as DashboardShortcuts,
  so as DataTable,
  kC as Dialog,
  $C as DialogClose,
  wC as DialogContent,
  CC as DialogDescription,
  SC as DialogFooter,
  MC as DialogHeader,
  If as DialogOverlay,
  BC as DialogScrollContent,
  _C as DialogTitle,
  AC as DialogTrigger,
  n8 as DirectoryPage,
  H3 as DropdownMenu,
  K3 as DropdownMenuCheckboxItem,
  q3 as DropdownMenuContent,
  G3 as DropdownMenuGroup,
  W3 as DropdownMenuItem,
  Z3 as DropdownMenuLabel,
  I8 as DropdownMenuPortal,
  J3 as DropdownMenuRadioGroup,
  Y3 as DropdownMenuRadioItem,
  X3 as DropdownMenuSeparator,
  Q3 as DropdownMenuShortcut,
  eC as DropdownMenuSub,
  tC as DropdownMenuSubContent,
  aC as DropdownMenuSubTrigger,
  nC as DropdownMenuTrigger,
  Y5 as EditableCell,
  Se as FOCUS_RING,
  T5 as FOCUS_RING_SOFT,
  da as FOCUS_RING_WITHIN,
  ro as FORM_MEASURE,
  Xe as FormFieldControl,
  a8 as HeatmapChart,
  cl as ICON_ALIASES,
  gt as ICON_PATHS,
  Re as INPUT_COPY,
  Jr as INPUT_PLACEHOLDER,
  Zr as INPUT_TEXT,
  nu as IconCell,
  iu as ImageCell,
  M8 as InfoNode,
  cf as JPEG_IMAGE_ERROR,
  Z5 as KeyValueCell,
  PC as Label,
  bg as LineChart,
  Ex as LineItems,
  co as MODAL_PANEL,
  fo as MODAL_PANEL_FORM,
  U5 as MUTED_COPY,
  vt as MUTED_COPY_SNUG,
  H5 as MUTED_COPY_XS,
  kt as MiniStatCard,
  pC as NavigationMenu,
  vC as NavigationMenuContent,
  gC as NavigationMenuIndicator,
  hC as NavigationMenuItem,
  bC as NavigationMenuLink,
  yC as NavigationMenuList,
  xC as NavigationMenuTrigger,
  Df as NavigationMenuViewport,
  uf as OPAQUE_IMAGE_ERROR,
  Oa as OVERLAY_FORM_MEASURE,
  Ge as PAGE_SHELL,
  L5 as PAGE_SHELL_COMPACT,
  V5 as PAGE_SHELL_STACK,
  B8 as PaymentGatewaySettings,
  y$ as PaymentGateways,
  YC as PieChart,
  u3 as PkAlertError,
  yw as PkArticles,
  L8 as PkAuroraBackdrop,
  qe as PkBadge,
  wp as PkBarcode,
  Bw as PkBento,
  s3 as PkBottomNav,
  IC as PkBoundary,
  KC as PkBuilder,
  ue as PkButton,
  qC as PkCalendar,
  FC as PkCard,
  Nm as PkCheckboxList,
  Ja as PkCodeBox,
  Cm as PkCodeInput,
  sp as PkColourPicker,
  j8 as PkConsoleBackdrop,
  Ew as PkContact,
  H4 as PkCountUp,
  Uw as PkCta,
  UC as PkDeviceFrame,
  Mp as PkDiff,
  zv as PkDocument,
  Je as PkDropdown,
  V8 as PkEditorialBackdrop,
  Lt as PkEmptyState,
  Ww as PkFaq,
  Qw as PkFeatureGrid,
  Pe as PkFieldLabel,
  La as PkFileUpload,
  De as PkHeading,
  r4 as PkHero,
  Bi as PkKeyValue,
  O8 as PkLandingSections,
  c4 as PkLogoCloud,
  ip as PkMap,
  cp as PkMapField,
  hm as PkMarkdownInput,
  dt as PkModal,
  Wt as PkMultiSelect,
  i3 as PkOtpInput,
  d3 as PkPageHeader,
  $8 as PkPasskeyRegister,
  c3 as PkPasswordInput,
  _4 as PkPricing,
  gp as PkQrCode,
  Bx as PkQtyStepper,
  vs as PkQueryBuilder,
  Em as PkRadioGroup,
  HC as PkRepeater,
  dw as PkReveal,
  Di as PkRichEditor,
  Me as PkSection,
  Ve as PkSectionHeading,
  U4 as PkShowcase,
  ik as PkSignaturePad,
  ze as PkSkeleton,
  aa as PkSlideover,
  Ip as PkSlider,
  r3 as PkSpinner,
  Z4 as PkStats,
  we as PkStatusBadge,
  Hr as PkStepIndicator,
  t5 as PkSteps,
  ev as PkSwatchPreview,
  Wm as PkTagsInput,
  u5 as PkTeam,
  x5 as PkTestimonials,
  $e as PkTextInput,
  $w as PkTiltCard,
  Va as PkToggleButtons,
  Xp as PkVisualSelect,
  ny as PlanCard,
  i8 as PlanEditor,
  r8 as PlanGrid,
  e8 as PolarAreaChart,
  QC as RadarChart,
  q5 as RatingCell,
  e3 as RecordActions,
  w8 as RecordForm,
  K5 as RelationCreateDialog,
  E5 as RelationPanel,
  io as SLIDEOVER_BODY,
  uo as SLIDEOVER_WIDTH,
  r1 as STATUS_TONES,
  XC as ScatterChart,
  ja as SchemaNode,
  o8 as SegmentedBar,
  y8 as SelectionBar,
  Of as Separator,
  b8 as SetupChecklist,
  Ha as ShadcnInput,
  Zt as Sheet,
  h3 as SheetClose,
  Jt as SheetContent,
  hf as SheetDescription,
  b3 as SheetFooter,
  bf as SheetHeader,
  yf as SheetTitle,
  y3 as SheetTrigger,
  xb as ShortcutsWidget,
  x3 as Sidebar,
  k3 as SidebarContent,
  $3 as SidebarFooter,
  w3 as SidebarGroup,
  C3 as SidebarGroupAction,
  S3 as SidebarGroupContent,
  M3 as SidebarGroupLabel,
  B3 as SidebarHeader,
  _3 as SidebarInput,
  A3 as SidebarInset,
  P3 as SidebarMenu,
  z3 as SidebarMenuAction,
  O3 as SidebarMenuBadge,
  V3 as SidebarMenuButton,
  j3 as SidebarMenuItem,
  T3 as SidebarMenuSkeleton,
  D3 as SidebarMenuSub,
  E3 as SidebarMenuSubButton,
  I3 as SidebarMenuSubItem,
  F3 as SidebarProvider,
  N3 as SidebarRail,
  R3 as SidebarSeparator,
  U3 as SidebarTrigger,
  p8 as SignatureStudio,
  St as Sparkline,
  zC as Spinner,
  l8 as StatCard,
  s8 as StatListChart,
  h8 as StatStrip,
  Ze as Switch,
  qa as TRANSPARENT_IMAGE_HELP,
  x8 as TablePagination,
  Ko as TableShell,
  k8 as TableTabs,
  $r as TableToolbar,
  J5 as TagsCell,
  ZC as ThemeToggle,
  Af as Tooltip,
  Pf as TooltipContent,
  L3 as TooltipProvider,
  zf as TooltipTrigger,
  Ya as TrendBadge,
  C8 as UnsavedBar,
  nf as alertVariants,
  nc as appearancePayload,
  Ia as appearanceVars,
  Dt as applyAppearance,
  gf as assertTransparentImage,
  a3 as bootstrapAppearance,
  st as buttonClasses,
  $t as catalogFiltersActive,
  Q as cn,
  Wr as createOptionActionLabel,
  Gr as createOptionTitle,
  z1 as cycleLabel,
  Ee as emptyCatalogFilters,
  Kr as fieldControl,
  R5 as fieldErrorsFromPayload,
  ux as findExactSku,
  O1 as formatPerkValue,
  Au as hasBadgeValue,
  I5 as hasFieldControl,
  GC as hasOptionPreview,
  ce as iconPath,
  pf as imageHasTransparency,
  Fa as initializeAppearance,
  Qt as isDark,
  na as matchCatalogItem,
  v3 as mergeLayoutItems,
  Ef as navigationMenuTriggerStyle,
  Fp as optionPreview,
  m3 as packWidgetColumns,
  p3 as parseWidgetId,
  L1 as perkGranted,
  ea as readAppearance,
  lc as readServerAppearance,
  iw as registerBuiltInFieldControls,
  xe as registerFieldControl,
  Pt as registerOptionPreview,
  F5 as registeredFieldTypes,
  Np as registeredOptionPreviews,
  t3 as resetAppearanceBootstrapForTests,
  N5 as resetFieldControls,
  WC as resetOptionPreviews,
  ot as resolveActionIcon,
  l3 as setAppearancePersister,
  Lf as sidebarMenuButtonVariants,
  c1 as statusBadgeVariant,
  u1 as statusTone,
  n3 as syncAppearanceFromInertiaPage,
  g3 as toPersistedLayout,
  D5 as toUrl,
  Ua as useAppearance,
  _8 as useColumnVisibility,
  A8 as useColumnWidths,
  P8 as useLiveUpdates,
  xw as usePointer,
  Qa as useReveal,
  X5 as useSchemaColumns,
  A4 as useScrollProgress,
  NC as useShellPageFooter,
  Ct as useSidebar,
  z8 as useTenantTheme,
  S8 as useUnsavedChanges,
  T8 as version,
  fa as widgetId
};
//# sourceMappingURL=index.js.map
