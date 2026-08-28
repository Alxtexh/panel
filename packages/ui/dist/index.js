import './ui.css';
import { defineComponent as O, useSlots as Ut, openBlock as t, createElementBlock as n, normalizeClass as P, unref as k, renderSlot as U, createElementVNode as o, toDisplayString as c, createCommentVNode as $, computed as x, normalizeStyle as se, Fragment as z, renderList as V, ref as R, watch as me, useId as on, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Ht, createBlock as T, createSlots as st, withCtx as L, nextTick as Te, onBeforeUnmount as ke, Teleport as dt, Transition as Ye, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as Me, resolveComponent as Kt, vModelSelect as Ge, vModelDynamic as sn, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as ia, inject as bt, vShow as Ue, withKeys as Vt, onUnmounted as rn, isRef as dn, useTemplateRef as un, onErrorCaptured as cn, provide as jt, markRaw as wa, reactive as rt, useModel as ut, mergeModels as Ie, shallowRef as fn, watchEffect as mn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as Ca, DialogOverlay as qt, DialogPortal as Gt, DialogContent as Wt, DialogClose as Qe, CheckboxRoot as pn, CheckboxIndicator as vn, SwitchRoot as gn, SwitchThumb as hn, DialogDescription as Sa, DialogTitle as Ma, DialogTrigger as Ba, createContext as bn, Primitive as et, TooltipRoot as yn, TooltipPortal as xn, TooltipContent as kn, TooltipArrow as $n, TooltipProvider as _a, TooltipTrigger as wn, Separator as Cn, DropdownMenuRoot as Sn, DropdownMenuCheckboxItem as Mn, DropdownMenuItemIndicator as Aa, DropdownMenuPortal as Bn, DropdownMenuContent as _n, DropdownMenuGroup as An, useForwardProps as Le, DropdownMenuItem as Pn, DropdownMenuLabel as zn, DropdownMenuRadioGroup as On, DropdownMenuRadioItem as Ln, DropdownMenuSeparator as Vn, DropdownMenuSub as jn, DropdownMenuSubContent as Tn, DropdownMenuSubTrigger as Dn, DropdownMenuTrigger as En, AvatarRoot as In, AvatarFallback as Fn, AvatarImage as Nn, NavigationMenuViewport as Rn, NavigationMenuRoot as Un, NavigationMenuContent as Hn, NavigationMenuIndicator as Kn, NavigationMenuItem as qn, NavigationMenuLink as Gn, NavigationMenuList as Wn, NavigationMenuTrigger as Zn, Label as Jn } from "reka-ui";
import { DropdownMenuPortal as G8 } from "reka-ui";
import { X as Zt, Check as Pa, AlertCircle as Yn, EyeOff as Xn, Eye as Qn, PanelLeftOpen as el, PanelLeftClose as tl, Circle as al, ChevronRight as za, MoreHorizontal as nl, ChevronDown as ll, Loader2Icon as ol } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Oa, useMediaQuery as sl, useEventListener as rl, defaultDocument as il } from "@vueuse/core";
import { clsx as dl } from "clsx";
import { twMerge as ul } from "tailwind-merge";
import { cva as Jt } from "class-variance-authority";
import { usePage as La, Link as cl } from "@inertiajs/vue3";
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
}, fl = {
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
}, da = {
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
}, ua = {
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
  const l = fl[e] ?? e;
  return ht[l] ?? ht.dot;
}
function lt(e) {
  if (e.icon) {
    const s = ce(e.icon);
    if (s !== ht.dot || e.icon === "dot")
      return s;
  }
  const l = (e.key ?? "").trim();
  if (l) {
    const s = da[l] ?? da[l.replace(/_/g, "-")];
    if (s)
      return ce(s);
  }
  const a = ml(e.label);
  if (a)
    return ce(a);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && ua[r] ? ce(ua[r]) : ce("circle");
}
function ml(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const pl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, vl = ["d"], gl = { class: "flex max-w-sm flex-col gap-1" }, hl = {
  key: 0,
  class: "text-sm font-normal"
}, bl = {
  key: 2,
  class: "mt-1 flex flex-wrap items-center justify-center gap-2"
}, Tt = /* @__PURE__ */ O({
  __name: "PkEmptyState",
  props: {
    title: {},
    description: {},
    icon: { default: "package" },
    compact: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = Ut();
    return (a, r) => (t(), n("div", {
      "data-slot": "empty-state",
      class: P(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      k(l).illustration ? (t(), n("div", pl, [
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
              d: k(ce)(e.icon)
            }, null, 8, vl)
          ], 2))
        ])
      ], 2)),
      o("div", gl, [
        o("p", {
          class: P(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), n("p", hl, c(e.description), 1)) : $("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", bl, [
        U(a.$slots, "actions")
      ])) : $("", !0)
    ], 2));
  }
}), yl = ["aria-label"], ze = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, V(s.value, (f) => (t(), n("span", {
        key: f,
        "aria-hidden": "true",
        class: P(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, yl));
  }
}), xl = { class: "w-full border-collapse text-sm" }, kl = { class: "bg-background sticky top-0 z-10" }, $l = {
  key: 0,
  class: "bg-muted/40"
}, wl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, Cl = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, Sl = ["colspan"], Ml = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Bl = { class: "bg-muted/50" }, _l = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Al = ["id", "checked", "indeterminate"], Pl = ["onClick"], zl = {
  key: 0,
  class: "text-xs"
}, Ol = {
  key: 1,
  class: "text-xs opacity-40"
}, Ll = { key: 1 }, Vl = ["aria-label", "onPointerdown"], jl = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Tl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Dl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, El = {
  key: 1,
  class: "px-3 py-2.5"
}, Il = {
  key: 2,
  class: "px-2 py-2.5"
}, Fl = {
  key: 0,
  class: "bg-muted/40"
}, Nl = ["colspan"], Rl = ["aria-expanded", "dusk", "onClick"], Ul = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Hl = {
  key: 1,
  dusk: "group-header"
}, Kl = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], ql = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Gl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], Wl = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Zl = ["aria-label", "onClick"], Jl = { class: "text-xs" }, Yl = {
  key: 1,
  class: "text-muted-foreground"
}, Xl = { key: 2 }, Ql = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, eo = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, to = { key: 0 }, ao = { class: "text-muted-foreground block text-[10px] font-medium" }, no = { class: "font-semibold tabular-nums" }, lo = { key: 1 }, oo = 40, so = /* @__PURE__ */ O({
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
    function f(W) {
      return a.groupBy?.collapsible ? d.value.has(W) : !1;
    }
    function g(W) {
      if (!a.groupBy?.collapsible)
        return;
      const te = new Set(u.value);
      te.add(W), u.value = te;
      const X = new Set(d.value);
      X.has(W) ? X.delete(W) : X.add(W), d.value = X;
    }
    function v(W) {
      return a.groupBy?.collapsible ? !f(r(a.rows[W])) : !0;
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
    const h = R(null), w = R(null);
    function y(W, te) {
      h.value = W, te.dataTransfer?.setData("text/plain", String(W)), te.dataTransfer && (te.dataTransfer.effectAllowed = "move");
    }
    function C() {
      h.value = null, w.value = null;
    }
    function M(W) {
      return h.value === null || w.value !== W ? "" : h.value > W ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function S(W, te) {
      h.value !== null && (te.preventDefault(), w.value = W);
    }
    function _(W) {
      const te = h.value;
      if (h.value = null, w.value = null, te === null || te === W)
        return;
      const X = a.rows.map((ie) => ie[a.rowKey]), [de] = X.splice(te, 1);
      X.splice(W, 0, de), m("reorder", X);
    }
    const m = l;
    function p(W, te) {
      !a.rowClickable || a.reordering || te.button !== 0 || te.metaKey || te.ctrlKey || te.shiftKey || te.altKey || te.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", W);
    }
    const b = R(null), A = on(), E = x(() => a.columns.filter((W) => !a.hidden?.has(W.key))), I = x(() => {
      const W = E.value.find((te) => te.sticky);
      return W ? W.key : a.stickyFirst && E.value.length > 0 ? E.value[0].key : null;
    });
    function ae(W) {
      return I.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${oo}px` : "0";
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
      function He(at) {
        const _t = de + (at.clientX - X);
        m("resize", W.key, Math.min(1200, Math.max(48, _t)));
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
    const Z = x(() => E.value.some((W) => !!W.group)), G = x(() => {
      const W = [];
      for (const te of E.value) {
        const X = te.group ?? null, de = W[W.length - 1];
        de && de.label === X ? de.span += 1 : W.push({ label: X, span: 1, key: `${X ?? "loose"}-${te.key}` });
      }
      return W;
    });
    function B(W) {
      const te = W[a.rowKey];
      return te == null || te === "" ? null : te;
    }
    function F(W) {
      const te = B(W);
      return te !== null && !!a.selected?.has(te);
    }
    const j = R(null);
    function J(W) {
      return a.rows.findIndex((te) => {
        const X = B(te);
        return X !== null && X === W;
      });
    }
    function ge(W, te) {
      const X = B(W);
      if (X === null)
        return;
      const de = te.shiftKey, ie = !!a.selected?.has(X);
      if (de && j.value !== null && j.value !== X) {
        const He = J(j.value), Ne = J(X);
        if (He !== -1 && Ne !== -1) {
          const at = Math.min(He, Ne), _t = Math.max(He, Ne), ln = !ie;
          for (let vt = at; vt <= _t; vt++) {
            if (!v(vt))
              continue;
            const At = B(a.rows[vt]);
            if (At === null)
              continue;
            !!a.selected?.has(At) !== ln && m("toggle-row", At);
          }
          j.value = X;
          return;
        }
      }
      m("toggle-row", X), j.value = X;
    }
    const ye = x(
      () => a.rows.map((W) => B(W)).filter((W) => W !== null)
    ), le = x(
      () => ye.value.length > 0 && ye.value.every((W) => a.selected?.has(W))
    ), Y = x(
      () => !le.value && ye.value.some((W) => a.selected?.has(W))
    );
    function ee(W) {
      return W.sortKey ?? W.key;
    }
    function Ce(W) {
      return a.sort === ee(W);
    }
    async function sa(W, te, X) {
      try {
        await navigator.clipboard.writeText(String(X)), b.value = `${W}-${te.key}`, setTimeout(() => b.value = null, 1200);
      } catch {
      }
    }
    const an = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function ra(W) {
      return a.summaries?.[W] ?? null;
    }
    function nn(W) {
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
      o("table", xl, [
        o("thead", kl, [
          Z.value ? (t(), n("tr", $l, [
            e.reordering ? (t(), n("th", wl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", Cl)) : $("", !0),
            (t(!0), n(z, null, V(G.value, (X) => (t(), n("th", {
              key: X.key,
              colspan: X.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(X.label ?? ""), 9, Sl))), 128)),
            W.$slots.actions ? (t(), n("th", Ml)) : $("", !0)
          ])) : $("", !0),
          o("tr", Bl, [
            e.reordering ? (t(), n("th", _l)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: P(["w-10 border-b px-3 py-2.5", I.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${k(A)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: le.value,
                indeterminate: Y.value,
                "aria-label": "Select all rows on this page",
                onClick: te[0] || (te[0] = he(() => {
                }, ["stop"])),
                onChange: te[1] || (te[1] = he((X) => m("toggle-page", !le.value), ["stop"]))
              }, null, 40, Al)
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
                N(c(X.label) + " ", 1),
                Ce(X) ? (t(), n("span", zl, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Ol, "↕"))
              ], 8, Pl)) : (t(), n("span", Ll, c(X.label), 1)),
              oe(X) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${X.label}`,
                onPointerdown: (de) => ne(X, de)
              }, null, 40, Vl)) : $("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", jl, [...te[2] || (te[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", Tl, [
          (t(), n(z, null, V(6, (X) => o("tr", {
            key: `skel-${X}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Dl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("td", El, [
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
            W.$slots.actions ? (t(), n("td", Il, [
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
            key: B(X) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", Fl, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(X)),
                  dusk: `group-header-${r(X) || "none"}`,
                  onClick: (ie) => g(r(X))
                }, [
                  o("span", Ul, c(f(r(X)) ? "▸" : "▾"), 1),
                  N(" " + c(i(X)), 1)
                ], 8, Rl)) : (t(), n("span", Hl, c(i(X)), 1))
              ], 8, Nl)
            ])) : $("", !0),
            v(de) ? (t(), n("tr", {
              key: 1,
              class: P(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(X) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                h.value === de ? "opacity-40" : "",
                M(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => y(de, ie),
              onDragover: (ie) => S(de, ie),
              onDrop: he((ie) => _(de), ["prevent"]),
              onDragend: C,
              onContextmenu: (ie) => m("row-contextmenu", X, ie),
              onClick: (ie) => p(X, ie)
            }, [
              e.reordering ? (t(), n("td", ql, [...te[3] || (te[3] = [
                Ht('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: P(["px-3 py-2", I.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${k(A)}-row-${B(X) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: B(X) ?? void 0,
                  checked: F(X),
                  disabled: B(X) === null,
                  "aria-label": B(X) === null ? "This row has no id and cannot be selected" : `Select row ${B(X)}`,
                  onClick: he((ie) => ge(X, ie), ["stop"])
                }, null, 8, Gl)
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
                  ie.copyable ? (t(), n("span", Wl, [
                    N(c(X[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (He) => sa(String(X[e.rowKey]), ie, X[ie.key])
                    }, [
                      o("span", Jl, c(b.value === `${X[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Zl)
                  ])) : X[ie.key] == null || X[ie.key] === "" ? (t(), n("span", Yl, "None")) : (t(), n("span", Xl, c(X[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Ql, [
                U(W.$slots, "actions", { row: X }, void 0, !0)
              ])) : $("", !0)
            ], 42, Kl)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        an.value ? (t(), n("tfoot", eo, [
          o("tr", null, [
            e.selectable ? (t(), n("td", to)) : $("", !0),
            (t(!0), n(z, null, V(e.columns, (X) => (t(), n(z, {
              key: `s-${X.key}`
            }, [
              e.hidden?.has(X.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: P(["px-3 py-2 align-top text-sm whitespace-nowrap", X.cellClass])
              }, [
                ra(X.key) ? (t(), n(z, { key: 0 }, [
                  o("span", ao, c(ra(X.key).label), 1),
                  o("span", no, c(nn(X.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", lo)) : $("", !0)
          ])
        ])) : $("", !0)
      ]),
      e.rows.length === 0 && !e.loading && e.filtered ? (t(), T(Tt, {
        key: 0,
        compact: "",
        icon: "search",
        title: "Nothing matches these filters",
        description: "Try clearing filters or searching for something else."
      }, st({ _: 2 }, [
        W.$slots["clear-filters"] ? {
          name: "actions",
          fn: L(() => [
            U(W.$slots, "clear-filters", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0
      ]), 1024)) : e.rows.length === 0 && !e.loading ? (t(), T(Tt, {
        key: 1,
        icon: e.emptyIcon,
        title: e.emptyTitle,
        description: e.emptyHint
      }, st({ _: 2 }, [
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
}), Ct = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, s] of l)
    a[r] = s;
  return a;
}, ro = /* @__PURE__ */ Ct(so, [["__scopeId", "data-v-c0f7d40f"]]), qe = "w-full min-w-0 px-4 py-6 sm:px-6", D5 = "w-full min-w-0 p-3 sm:p-4", E5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", io = "w-full max-w-7xl", uo = "px-4 py-4", Va = "w-full min-w-0", co = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, fo = "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", mo = "bg-popover text-popover-foreground flex w-full max-w-xl max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", po = ["aria-busy", "aria-label"], vo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, go = { class: "text-base font-semibold" }, ho = {
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
    const a = e, r = l, s = R(null);
    let i = null;
    const d = R(!1), u = x(() => a.size === "form" ? mo : fo);
    function f(h) {
      d.value = h.target === h.currentTarget;
    }
    function g(h) {
      d.value && h.target === h.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function v(h) {
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
        h ? (i = document.activeElement, document.addEventListener("keydown", v), Te(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", v), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", v)), (h, w) => (t(), T(dt, { to: "body" }, [
      D(Ye, {
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
                class: P(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", k(Va)])
              }, [
                U(h.$slots, "default")
              ], 2),
              h.$slots.footer ? (t(), n("div", bo, [
                U(h.$slots, "footer")
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
    const a = e, r = R(!1), s = R(null), i = R(null), d = R({ top: 0, left: 0, minWidth: 0 }), u = R(null);
    let f = null;
    function g(p) {
      !a.dismissOnPanelClick || p.target?.closest("input, select, textarea, label, [data-keep-open]") || C();
    }
    async function v() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Te(), M());
    }
    function h() {
      f = setTimeout(C, 180);
    }
    async function w() {
      u.value = null, r.value = !r.value, r.value && (await Te(), M());
    }
    async function y(p, b) {
      u.value = { x: p, y: b }, r.value = !0, await Te(), M();
    }
    function C() {
      r.value = !1, u.value = null;
    }
    function M() {
      const p = s.value, b = i.value;
      if (!p || !b)
        return;
      const A = b.getBoundingClientRect(), E = 8, I = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : p.getBoundingClientRect();
      let ae, H;
      if (a.placement === "bottom")
        ae = I.bottom + a.offset, ae + A.height > window.innerHeight - E && I.top - A.height - a.offset > E && (ae = I.top - A.height - a.offset), H = a.align === "end" && !u.value ? I.right - A.width : I.left;
      else {
        ae = I.top;
        const K = a.placement === "right", q = I.right + a.offset + A.width < window.innerWidth - E, oe = I.left - a.offset - A.width > E;
        H = (K ? q || !oe : !oe && q) ? I.right + a.offset : I.left - a.offset - A.width;
      }
      H = Math.min(Math.max(E, H), window.innerWidth - A.width - E), ae = Math.min(Math.max(E, ae), window.innerHeight - A.height - E), d.value = { top: ae, left: H, minWidth: Math.max(I.width, yo) };
    }
    function S(p) {
      if (!r.value)
        return;
      const b = p.target;
      s.value?.contains(b) || i.value?.contains(b) || (b instanceof Element ? b : b.parentElement)?.closest("[data-pk-overlay]") || C();
    }
    function _(p) {
      p.key === "Escape" && r.value && (p.stopPropagation(), C());
    }
    function m() {
      if (r.value) {
        if (u.value) {
          C();
          return;
        }
        M();
      }
    }
    return ve(() => {
      document.addEventListener("pointerdown", S), document.addEventListener("keydown", _), window.addEventListener("scroll", m, !0), window.addEventListener("resize", m);
    }), ke(() => {
      f && clearTimeout(f), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", _), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: C, openAt: y }), (p, b) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: b[2] || (b[2] = (A) => e.hoverable && v()),
      onPointerleave: b[3] || (b[3] = (A) => e.hoverable && h())
    }, [
      o("div", { onClick: w }, [
        U(p.$slots, "trigger", { open: r.value })
      ]),
      (t(), T(dt, { to: "body" }, [
        D(Ye, {
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
              onPointerenter: b[0] || (b[0] = (A) => e.hoverable && v()),
              onPointerleave: b[1] || (b[1] = (A) => e.hoverable && h()),
              onClick: g
            }, [
              U(p.$slots, "panel", { close: C })
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
}, Oo = ["d"], Lo = { class: "min-w-0 flex-1 truncate" }, Vo = { class: "text-muted-foreground text-sm font-normal" }, jo = { class: "text-foreground font-medium tabular-nums" }, To = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Do = ["disabled"], Eo = { class: "text-muted-foreground text-sm font-normal" }, Io = { class: "text-foreground font-medium tabular-nums" }, Fo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, No = ["disabled"], I5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = x(() => a.allMatching ? a.total : a.count), u = x(() => d.value !== void 0), f = x(() => u.value && d.value === 0), g = x(() => a.actions.filter((_) => !_.destructive)), v = x(() => a.actions.filter((_) => _.destructive)), h = {
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
    const S = (_) => new Intl.NumberFormat().format(_);
    return (_, m) => (t(), n(z, null, [
      D(Ze, null, {
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
          ])], 8, xo)
        ]),
        panel: L(() => [
          o("div", ko, [
            (t(!0), n(z, null, V(g.value, (p) => (t(), n("button", {
              key: p.key,
              type: "button",
              role: "menuitem",
              class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", w(p)]),
              disabled: e.busy,
              onClick: (b) => y(p)
            }, [
              (t(), n("svg", wo, [
                o("path", {
                  d: k(lt)(p)
                }, null, 8, Co)
              ])),
              o("span", So, c(p.label), 1)
            ], 10, $o))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (p) => i.value = !0)
            }, [
              (t(), n("svg", Bo, [
                o("path", {
                  d: k(ce)("download")
                }, null, 8, _o)
              ])),
              m[6] || (m[6] = N(" Export CSV ", -1))
            ], 8, Mo)) : $("", !0),
            v.value.length ? (t(), n("div", Ao, [
              (t(!0), n(z, null, V(v.value, (p) => (t(), n("button", {
                key: p.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (b) => y(p)
              }, [
                (t(), n("svg", zo, [
                  o("path", {
                    d: k(lt)({ ...p, destructive: !0 })
                  }, null, 8, Oo)
                ])),
                o("span", Lo, c(p.label), 1)
              ], 8, Po))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      D(it, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (p) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (p) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: P([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || f.value,
            onClick: C
          }, c(s.value?.label), 11, Do)
        ]),
        default: L(() => [
          o("p", Vo, [
            m[7] || (m[7] = N(" This will affect ", -1)),
            o("span", jo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(S(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[8] || (m[8] = N(" . ", -1))
          ]),
          f.value ? (t(), n("p", To, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(it, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (p) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (p) => i.value = !1)
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
            m[9] || (m[9] = N(" This will export ", -1)),
            o("span", Io, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(S(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[10] || (m[10] = N(" . ", -1))
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
        U(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.title ? (t(), n("div", Ho, [
        U(l.$slots, "title")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: P(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Ko, [
        U(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Se = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ca = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", F5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Go = ["aria-expanded"], Wo = ["aria-label", "onClick"], Zo = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Jo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Yo = {
  key: 0,
  class: "border-b p-1"
}, Xo = ["placeholder"], Qo = { class: "max-h-60 overflow-y-auto p-1" }, es = ["aria-selected", "onMouseenter", "onClick"], ts = {
  key: 0,
  class: "text-muted-foreground px-2 py-3 text-sm"
}, Yt = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), f = R(""), g = R(0), v = R({ top: 0, left: 0, width: 0 }), h = x(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), w = x(() => a.searchable ?? a.options.length > 6), y = x(() => {
      const H = new Set(a.modelValue), K = f.value.trim().toLowerCase();
      return a.options.filter((q) => !H.has(q.value)).filter((q) => K ? q.label.toLowerCase().includes(K) : !0);
    }), C = x(() => a.max !== null && a.modelValue.length >= a.max);
    function M() {
      const H = s.value, K = i.value;
      if (!H || !K)
        return;
      const q = H.getBoundingClientRect(), oe = K.getBoundingClientRect(), ne = 8;
      let Z = q.bottom + 4;
      Z + oe.height > window.innerHeight - ne && q.top - oe.height - 4 > ne && (Z = q.top - oe.height - 4), v.value = {
        top: Z,
        left: Math.min(Math.max(ne, q.left), window.innerWidth - q.width - ne),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: q.width
      };
    }
    async function S() {
      a.disabled || u.value || (u.value = !0, f.value = "", g.value = 0, await Te(), M(), d.value?.focus());
    }
    function _() {
      u.value = !1, f.value = "";
    }
    function m() {
      u.value ? _() : S();
    }
    function p(H) {
      C.value || (r("update:modelValue", [...a.modelValue, H.value]), f.value = "", g.value = 0, Te(() => {
        M(), d.value?.focus();
      }));
    }
    function b(H) {
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
          H.stopPropagation(), _();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          b(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), S();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, y.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = y.value[g.value];
            K && p(K);
          }
        }
      }
    }
    function I(H) {
      if (!u.value)
        return;
      const K = H.target;
      s.value?.contains(K) || i.value?.contains(K) || _();
    }
    function ae() {
      u.value && M();
    }
    return me(y, (H) => {
      g.value > H.length - 1 && (g.value = Math.max(0, H.length - 1));
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
        (t(!0), n(z, null, V(h.value, (q) => (t(), n("span", {
          key: q.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(c(q.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${q.label}`,
            onClick: he((oe) => b(q.value), ["stop"])
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
          }, [...K[2] || (K[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Go),
      (t(), T(dt, { to: "body" }, [
        D(Ye, {
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
                top: `${v.value.top}px`,
                left: `${v.value.left}px`,
                width: `${v.value.width}px`
              }),
              role: "listbox"
            }, [
              w.value ? (t(), n("div", Yo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (q) => f.value = q),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: E
                }, null, 40, Xo), [
                  [Ae, f.value]
                ])
              ])) : $("", !0),
              o("div", Qo, [
                (t(!0), n(z, null, V(y.value, (q, oe) => (t(), n("button", {
                  key: q.value,
                  type: "button",
                  class: P(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === g.value,
                  onMouseenter: (ne) => g.value = oe,
                  onClick: (ne) => p(q)
                }, c(q.label), 43, es))), 128)),
                y.value.length === 0 ? (t(), n("p", ts, [
                  C.value ? (t(), n(z, { key: 0 }, [
                    N("You have selected the maximum.")
                  ], 64)) : f.value ? (t(), n(z, { key: 1 }, [
                    N("Nothing matches “" + c(f.value) + "”.", 1)
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
function ot(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [as, ns[l], ls[a], e.class].filter(Boolean).join(" ");
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
    const l = e, a = x(
      () => ot({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(Me(e.as), {
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
    const a = e, r = l, s = () => ({ logic: "and", rules: [] }), i = R(a.modelValue ? structuredClone(a.modelValue) : s());
    me(
      () => a.modelValue,
      (m) => {
        i.value = m ? structuredClone(m) : s();
      }
    );
    const d = (m) => "rules" in m, u = x(() => Object.keys(a.fields));
    function f(m) {
      const p = m ? a.fields[m]?.kind : void 0;
      return p ? a.operators[p] ?? [] : [];
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
      const m = u.value[0];
      i.value.rules.push({
        field: m,
        operator: f(m)[0],
        value: void 0
      }), v();
    }
    function w() {
      i.value.rules.push(s()), v();
    }
    function y(m) {
      i.value.rules.splice(m, 1), v();
    }
    function C(m) {
      m.operator = f(m.field)[0], m.value = void 0, v();
    }
    const M = x(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), v(), r("apply", null);
    }
    function _() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, p) => {
      const b = Kt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: P(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", os, [
          pe(o("select", {
            "onUpdate:modelValue": p[0] || (p[0] = (A) => i.value.logic = A),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: v
          }, [...p[1] || (p[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [Ge, i.value.logic]
          ]),
          p[2] || (p[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, V(i.value.rules, (A, E) => (t(), n("div", {
          key: E,
          class: "flex items-start gap-2"
        }, [
          d(A) ? (t(), T(b, {
            key: 0,
            modelValue: i.value.rules[E],
            "onUpdate:modelValue": [(I) => i.value.rules[E] = I, v],
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
              onChange: (I) => C(A)
            }, [
              (t(!0), n(z, null, V(u.value, (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(e.fields[I].label), 9, rs))), 128))
            ], 40, ss), [
              [Ge, A.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (I) => A.operator = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: v
            }, [
              (t(!0), n(z, null, V(f(A.field), (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(g[I] ?? I), 9, ds))), 128))
            ], 40, is), [
              [Ge, A.operator]
            ]),
            A.field && e.fields[A.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (I) => A.value = I,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, [...p[3] || (p[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, us)), [
              [Ge, A.value]
            ]) : A.field && e.fields[A.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (I) => A.value = I,
              multiple: e.fields[A.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, [
              (t(!0), n(z, null, V(e.fields[A.field].options, (I) => (t(), n("option", {
                key: I,
                value: I
              }, c(I), 9, fs))), 128))
            ], 40, cs)), [
              [Ge, A.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (I) => A.value = I,
              type: A.field && e.fields[A.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: v
            }, null, 40, ms)), [
              [sn, A.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(A) ? "group" : "rule"}`,
            onClick: (I) => y(E)
          }, " × ", 8, ps)
        ]))), 128)),
        o("div", vs, [
          D(ue, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: h
          }, {
            default: L(() => [...p[4] || (p[4] = [
              N("Add rule", -1)
            ])]),
            _: 1
          }),
          M.value ? (t(), T(ue, {
            key: 0,
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: w
          }, {
            default: L(() => [...p[5] || (p[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            p[8] || (p[8] = o("span", { class: "flex-1" }, null, -1)),
            D(ue, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: L(() => [...p[6] || (p[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(ue, {
              type: "button",
              size: "sm",
              onClick: _
            }, {
              default: L(() => [...p[7] || (p[7] = [
                N(" Apply ", -1)
              ])]),
              _: 1
            })
          ], 64)) : $("", !0)
        ])
      ], 2);
    };
  }
}), Xt = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(k(Ca), re({ "data-slot": "sheet" }, k(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return ul(dl(e));
}
function N5(e) {
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
    return (r, s) => (t(), T(k(qt), re({
      "data-slot": "sheet-overlay",
      class: k(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, k(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Qt = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Gt), null, {
      default: L(() => [
        D(hs),
        D(k(Wt), re({
          "data-slot": "sheet-content",
          class: k(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...k(i) }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(k(Qe), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                D(k(Zt), { class: "size-4" }),
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
}, Vs = { class: "flex flex-col gap-1" }, js = ["onClick"], Ts = { class: "border-t p-4" }, Ds = ["disabled"], Es = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Is = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Fs = ["placeholder", "title", "aria-label"], Ns = ["aria-label"], Rs = {
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
    const f = x(
      () => a.filterSchema.filter(
        (G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0
      ).length
    ), g = x(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), v = x(() => a.search !== "" || f.value > 0), h = x(() => a.indicators.length ? a.indicators : a.filterSchema.filter((G) => a.filters[G.key] !== null && a.filters[G.key] !== void 0).map((G) => ({
      key: G.key,
      label: `${G.label}: ${String(a.filters[G.key])}`,
      removable: !0
    })));
    function w(G) {
      r("group", G);
    }
    function y(G) {
      r("clear-filter", G);
    }
    function C(G) {
      return G.type === "multiselect";
    }
    function M(G) {
      const B = u.value[G.key];
      return Array.isArray(B) ? B : B == null ? [] : [B];
    }
    function S(G) {
      return M(G).filter(
        (B) => typeof B == "string" || typeof B == "number"
      );
    }
    function _(G) {
      return H(G).flatMap(
        (B) => typeof B.value == "string" || typeof B.value == "number" ? [{ value: B.value, label: B.label }] : []
      );
    }
    function m(G, B) {
      u.value = { ...u.value, [G.key]: B === "" ? null : B };
    }
    function p(G, B) {
      const F = u.value[G.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [j, J] = F.split("..");
      return B === "from" ? j ?? "" : J ?? "";
    }
    function b(G, B, F) {
      const j = B === "from" ? F : p(G, "from"), J = B === "to" ? F : p(G, "to");
      u.value = {
        ...u.value,
        [G.key]: j && J ? `${j}..${J}` : null
      };
    }
    function A(G, B, F) {
      const j = B === "from" ? F : p(G, "from"), J = B === "to" ? F : p(G, "to");
      u.value = {
        ...u.value,
        [G.key]: j || J ? `${j}..${J}` : null
      };
    }
    function E(G) {
      r("apply-filters", { ...u.value }), G();
    }
    function I(G, B) {
      u.value[G] = B, r("apply-filters", { ...u.value });
    }
    function ae() {
      u.value = Object.fromEntries(a.filterSchema.map((G) => [G.key, null]));
    }
    function H(G) {
      return G.type === "boolean" ? [
        { value: !0, label: G.trueLabel ?? "Yes" },
        { value: !1, label: G.falseLabel ?? "No" }
      ] : G.type === "daterange" ? Object.entries(G.presets ?? {}).map(([B, F]) => ({
        value: B,
        label: F
      })) : (G.options ?? []).map(
        (B) => typeof B == "object" && B !== null && "value" in B ? { value: B.value, label: B.label } : { value: B, label: String(B) }
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
      const B = new Set(K.value);
      B.has(G) ? B.delete(G) : B.add(G), K.value = B, r("apply-columns", [...B]);
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
    return (G, B) => (t(), n("div", bs, [
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
          B[11] || (B[11] = N(" Tools ", -1)),
          f.value ? (t(), n("span", $s, c(f.value), 1)) : $("", !0)
        ]),
        D(Xt, {
          open: s.value,
          "onUpdate:open": B[4] || (B[4] = (F) => s.value = F)
        }, {
          default: L(() => [
            D(Qt, {
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
                          onClick: ae
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, V(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Ms, c(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (j) => m(F, j.target.value)
                        }, [
                          B[13] || (B[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, V(H(F), (j) => (t(), n("option", {
                            key: String(j.value),
                            value: j.value
                          }, c(j.label), 9, _s))), 128))
                        ], 40, Bs)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", As, [
                      B[14] || (B[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", Ps, [
                        (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (j) => q(F.key)
                        }, [
                          o("span", null, c(F.label), 1),
                          K.value.has(F.key) ? $("", !0) : (t(), n("span", Os, "On"))
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
                        (t(!0), n(z, null, V(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (j) => {
                            w(F.key), s.value = !1;
                          }
                        }, c(F.label), 9, js))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", Ts, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: ne
                    }, " Apply filters ", 8, Ds)) : $("", !0),
                    v.value ? (t(), n("button", {
                      key: 1,
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground w-full text-xs underline-offset-2 hover:underline",
                      onClick: B[3] || (B[3] = (F) => {
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
        e.filterSchema.length ? (t(), T(Ze, {
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
                onClick: ae
              }, " Reset ")
            ]),
            B[23] || (B[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Us, [
              (t(!0), n(z, null, V(e.filterSchema, (j) => (t(), n("div", {
                key: j.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Hs, c(j.label), 1),
                C(j) ? (t(), T(Yt, {
                  key: 0,
                  "model-value": S(j),
                  options: _(j),
                  placeholder: `Any ${j.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[j.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : j.type === "querybuilder" ? (t(), T(gs, {
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
                    B[21] || (B[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, V(H(j), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, c(J.label), 9, qs))), 128))
                  ], 40, Ks),
                  o("div", Gs, [
                    o("input", {
                      type: "date",
                      value: p(j, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => b(
                        j,
                        "from",
                        J.target.value
                      )
                    }, null, 40, Ws),
                    o("input", {
                      type: "date",
                      value: p(j, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => b(
                        j,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Zs)
                  ])
                ], 64)) : j.type === "numberrange" ? (t(), n("div", Js, [
                  o("input", {
                    type: "number",
                    value: p(j, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => A(
                      j,
                      "from",
                      J.target.value
                    )
                  }, null, 40, Ys),
                  o("input", {
                    type: "number",
                    value: p(j, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => A(
                      j,
                      "to",
                      J.target.value
                    )
                  }, null, 40, Xs)
                ])) : j.type === "boolean" ? (t(), n("div", Qs, [
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
                  ], 10, er),
                  o("span", tr, c(j.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: P([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[j.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => m(j, u.value[j.key] === !1 ? null : !1)
                  }, c(j.falseLabel ?? "No") + " only ", 11, ar)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[j.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => m(j, J.target.value)
                }, [
                  B[22] || (B[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, V(H(j), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, c(J.label), 9, lr))), 128))
                ], 40, nr))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (j) => E(F)
            }, " Apply filters ", 8, or)
          ]),
          _: 1
        })) : $("", !0),
        D(Ze, { "dismiss-on-panel-click": !1 }, {
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
              (t(!0), n(z, null, V(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: P(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (j) => q(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", dr)) : (t(), n("svg", ir, [...B[25] || (B[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + c(F.label), 1)
              ], 10, rr))), 128))
            ]),
            o("div", { class: "border-t" }, [
              o("button", {
                type: "button",
                class: "hover:bg-accent flex w-full items-center gap-2 px-3 py-1.5 text-sm",
                onClick: oe
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
                N(" Reset ", -1)
              ])])
            ])
          ]),
          _: 1
        }),
        e.layouts.length > 1 ? (t(), n("div", ur, [
          (t(!0), n(z, null, V(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: P(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (j) => r("layout", F)
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
        e.groups.length ? (t(), T(Ze, {
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
                onClick: (j) => {
                  w(null), F();
                }
              }, " No grouping ", 10, hr),
              (t(!0), n(z, null, V(e.groups, (j) => (t(), n("button", {
                key: j.key,
                type: "button",
                class: P(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === j.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  w(j.key), F();
                }
              }, c(j.label), 11, br))), 128))
            ])
          ]),
          _: 1
        })) : $("", !0),
        v.value ? (t(), n("button", {
          key: 4,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline",
          onClick: Z
        }, " Clear ")) : $("", !0),
        e.loading ? (t(), n("span", yr, "Loading…")) : $("", !0)
      ]),
      h.value.length ? (t(), n("div", xr, [
        (t(!0), n(z, null, V(h.value, (F) => (t(), n("span", {
          key: F.key + F.label,
          class: "border-input bg-muted/60 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
          dusk: `filter-indicator-${F.key}`
        }, [
          N(c(F.label) + " ", 1),
          F.removable !== !1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "hover:text-foreground text-muted-foreground",
            "aria-label": `Clear ${F.label}`,
            onClick: (j) => y(F.key)
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
}, jr = ["disabled"], Tr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Dr = ["href"], R5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Ut(), i = x(() => a.columns.filter((w) => w.type !== "image")), d = x(() => !!s.actions), u = x(() => !!a.title || d.value), f = x(() => a.filterSchema.length > 0), g = x(
      () => a.columns.map((w) => ({ key: w.key, label: w.label, locked: !0 }))
    );
    function v(w, y) {
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
    return (w, y) => (t(), T(qo, null, st({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Br, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Tt, {
          key: 1,
          compact: "",
          icon: "package",
          title: e.emptyTitle,
          description: e.emptyText
        }, st({ _: 2 }, [
          w.$slots.illustration ? {
            name: "illustration",
            fn: L(() => [
              U(w.$slots, "illustration")
            ]),
            key: "0"
          } : void 0,
          w.$slots["empty-actions"] ? {
            name: "actions",
            fn: L(() => [
              U(w.$slots, "empty-actions")
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", _r, [
          o("table", Ar, [
            o("thead", Pr, [
              o("tr", null, [
                (t(!0), n(z, null, V(i.value, (C) => (t(), n("th", {
                  key: C.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(C.label), 1))), 128))
              ])
            ]),
            o("tbody", zr, [
              (t(!0), n(z, null, V(e.rows, (C, M) => (t(), n("tr", {
                key: C.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, V(i.value, (S) => (t(), n("td", {
                  key: S.key,
                  class: P(["px-3 whitespace-nowrap", [
                    S.mono ? "font-mono text-xs" : "",
                    S.muted ? "text-muted-foreground" : ""
                  ]])
                }, [
                  U(w.$slots, `cell:${S.key}`, {
                    row: C,
                    value: C[S.key],
                    column: S
                  }, () => [
                    e.recordBase && C.id != null && S === i.value[0] ? (t(), n("a", {
                      key: 0,
                      href: `${e.recordBase}/${C.id}`,
                      class: "text-foreground underline-offset-2 hover:underline"
                    }, c(v(S, C[S.key])), 9, Or)) : h(C[S.key]) ? (t(), n("span", Lr, " None ")) : (t(), n(z, { key: 2 }, [
                      N(c(v(S, C[S.key])), 1)
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
            U(w.$slots, "actions")
          ])) : $("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: L(() => [
          D(wr, {
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
          ])) : e.capped ? (t(), n("p", Tr, [
            N(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Dr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
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
      (t(!0), n(z, null, V(e.steps, (v, h) => (t(), n("li", {
        key: h,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(Me(e.interactive ? "button" : "div"), re({
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
                N(c(h + 1), 1)
              ], 64))
            ], 2),
            o("span", Nr, [
              o("span", null, c(v.label), 1),
              v.description ? (t(), n("span", Rr, c(v.description), 1)) : $("", !0)
            ]),
            e.hasError(h) ? (t(), n("span", Ur)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        h < e.steps.length - 1 ? (t(), n("span", Hr)) : $("", !0)
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
function U5(e) {
  return ct.has(e);
}
function H5() {
  return [...ct.keys()].sort();
}
function K5() {
  ct.clear();
}
class Gr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function q5(e) {
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
const G5 = "text-sm text-muted-foreground font-normal", W5 = "text-xs text-muted-foreground font-normal", gt = "text-xs text-muted-foreground font-normal leading-snug", Jr = "text-foreground font-normal", Yr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Jr} ${Yr}`, Xr = {
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
    return (d, u) => (t(), T(it, {
      open: e.open,
      title: e.title,
      description: e.description,
      size: "form",
      busy: e.processing,
      onClose: u[1] || (u[1] = (f) => r("close"))
    }, {
      footer: L(() => [
        D(ue, {
          type: "button",
          variant: "outline",
          disabled: e.processing,
          onClick: u[0] || (u[0] = (f) => r("close"))
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
            N(c(e.processing ? "Creating…" : "Create"), 1)
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
          (t(!0), n(z, null, V(e.fields, (f) => (t(), T(Xe, {
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
    return (d, u) => (t(), T(k(pn), re({ "data-slot": "checkbox" }, k(i), {
      class: k(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((f) => [
        D(k(vn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(d.$slots, "default", Oe(Fe(f)), () => [
              D(k(Pa), { class: "size-3.5" })
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
    return (i, d) => (t(), T(k(gn), re({ "data-slot": "switch" }, k(s), {
      class: k(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        D(k(hn), {
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
}, ja = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), f = R(null), g = x(() => a.accept.map((p) => `.${p}`).join(",")), v = x(() => f.value ?? a.modelValue?.url ?? null), h = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${w(a.maxKilobytes * 1024)}`);
    function w(p) {
      if (!p)
        return "";
      const b = ["B", "KB", "MB", "GB"];
      let A = p, E = 0;
      for (; A >= 1024 && E < b.length - 1; )
        A /= 1024, E++;
      return `${A.toFixed(A < 10 && E > 0 ? 1 : 0)} ${b[E]}`;
    }
    function y(p) {
      return p.split(".").pop()?.toLowerCase() ?? "";
    }
    function C(p) {
      return a.accept.length && !a.accept.includes(y(p.name)) ? `${y(p.name).toUpperCase() || "That"} files are not accepted here.` : p.size > a.maxKilobytes * 1024 ? `That file is ${w(p.size)}; the limit is ${w(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(p) {
      const b = p?.[0];
      if (!(!b || a.disabled) && (u.value = C(b), !u.value)) {
        S(), a.image && b.type.startsWith("image/") && (f.value = URL.createObjectURL(b)), d.value = 0;
        try {
          const A = await a.upload(b, (E) => {
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
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function _() {
      const p = a.modelValue;
      S(), u.value = null, r("update:modelValue", null), p && !p.url && a.discard && await a.discard(p.value).catch(() => {
      });
    }
    function m(p) {
      i.value = !1, M(p.dataTransfer?.files ?? null);
    }
    return (p, b) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", ri, [
        e.image && v.value ? (t(), n("img", {
          key: 0,
          src: v.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, ii)) : (t(), n("span", di, c(y(e.modelValue.name) || "file"), 1)),
        o("span", ui, [
          o("span", ci, c(e.modelValue.name), 1),
          o("span", fi, [
            N(c(w(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              b[4] || (b[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, mi)
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
          onChange: b[0] || (b[0] = (A) => M(A.target.files))
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
    const d = R(u(a.modelValue));
    function u(M) {
      return M ? Object.entries(M).map(([S, _]) => ({
        uid: i++,
        key: S,
        value: _ ?? ""
      })) : [];
    }
    me(
      () => a.modelValue,
      (M) => {
        JSON.stringify(M ?? null) !== JSON.stringify(f()) && (d.value = u(M));
      }
    );
    function f() {
      const M = {};
      for (const S of d.value) {
        const _ = S.key.trim();
        _ !== "" && (M[_] = S.value);
      }
      return Object.keys(M).length ? M : null;
    }
    function g() {
      r("update:modelValue", f());
    }
    const v = x(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of d.value) {
        const _ = S.key.trim();
        _ !== "" && M.set(_, (M.get(_) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), h = x(
      () => new Set(
        d.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), w = x(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function y() {
      w.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function C(M) {
      d.value = d.value.filter((S) => S.uid !== M), g();
    }
    return (M, S) => (t(), n("div", vi, [
      d.value.length ? (t(), n("div", gi, [
        o("div", hi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, V(d.value, (_) => (t(), n("div", {
          key: _.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", bi, [
            pe(o("input", {
              "onUpdate:modelValue": (m) => _.key = m,
              type: "text",
              class: P([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                v.value.has(_.key.trim()) || h.value.has(_.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, yi), [
              [Ae, _.key]
            ]),
            h.value.has(_.key.trim()) ? (t(), n("p", xi, " Letters, numbers, underscores and dashes only. ")) : v.value.has(_.key.trim()) ? (t(), n("p", ki, " Used twice - only the last value will be saved. ")) : $("", !0)
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
          N(" Add " + c(e.keyLabel.toLowerCase()), 1)
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
}, Li = ["d"], Vi = ["disabled"], ji = ["contenteditable", "data-placeholder"], Ti = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Di = /* @__PURE__ */ O({
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
    ], u = x(() => d.filter((C) => a.toolbar.includes(C.id))), f = x(() => a.toolbar.includes("link")), g = R(0);
    function v() {
      const C = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      g.value = M.length;
      const S = M === "" ? null : C;
      i = S, r("update:modelValue", S);
    }
    function h(C) {
      a.disabled || (s.value?.focus(), document.execCommand(C.command, !1, C.argument), v());
    }
    function w() {
      if (a.disabled)
        return;
      const C = window.prompt("Link address");
      C && (s.value?.focus(), document.execCommand("createLink", !1, C), v());
    }
    function y(C) {
      C.preventDefault();
      const M = C.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), v();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (C) => {
        C !== i && s.value && (s.value.innerHTML = C ?? "", g.value = s.value.innerText.trim().length);
      }
    ), (C, M) => (t(), n("div", Ai, [
      o("div", Pi, [
        (t(!0), n(z, null, V(u.value, (S) => (t(), n("button", {
          key: S.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: S.label,
          "aria-label": S.label,
          onMousedown: M[0] || (M[0] = he(() => {
          }, ["prevent"])),
          onClick: (_) => h(S)
        }, [
          (t(), n("svg", Oi, [
            o("path", {
              d: S.path
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
        onInput: v,
        onBlur: v,
        onPaste: y
      }, null, 42, ji),
      e.maxLength !== null ? (t(), n("div", Ti, c(g.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Ei = /* @__PURE__ */ Ct(Di, [["__scopeId", "data-v-32c63bc7"]]), Ii = ["role"], Fi = ["title"], Ni = ["type", "name", "value", "checked", "disabled", "aria-label", "onChange"], Ri = {
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
}, Ta = /* @__PURE__ */ O({
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
    function g(p) {
      return s.value ? f.value.some((b) => b == p.value) : a.modelValue != null && p.value == a.modelValue;
    }
    function v(p) {
      if (!a.disabled) {
        if (s.value) {
          r(
            "update:modelValue",
            g(p) ? f.value.filter((b) => b != p.value) : [...f.value, p.value]
          );
          return;
        }
        r("update:modelValue", p.value);
      }
    }
    function h(p) {
      return a.field.colors?.[String(p.value)] ?? "primary";
    }
    function w(p) {
      const b = a.field.icons?.[String(p.value)];
      return b ? ce(b) : null;
    }
    function y(p) {
      return a.field.tooltips?.[String(p.value)] ?? p.label;
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
    function S(p) {
      const b = h(p), A = g(p);
      return [
        Se,
        "inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors",
        i.value ? "rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0" : "rounded-md",
        A ? C[b] ?? C.primary : M[b] ?? M.primary,
        a.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      ].join(" ");
    }
    const _ = x(() => {
      if (!(u.value || i.value) && a.field.columns && a.field.columns > 1)
        return { gridTemplateColumns: `repeat(${a.field.columns}, minmax(0, 1fr))` };
    }), m = x(() => i.value ? "inline-flex flex-wrap" : u.value ? "flex flex-wrap gap-2" : "grid gap-2");
    return (p, b) => (t(), n("div", {
      role: s.value ? "group" : "radiogroup",
      class: P(m.value),
      style: se(_.value),
      "data-test": "toggle-buttons-field"
    }, [
      (t(!0), n(z, null, V(e.options, (A) => (t(), n("label", {
        key: String(A.value),
        class: P(S(A)),
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
          onChange: (E) => v(A)
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
    const a = ia(() => import("./PkRepeater-J84jGe3T.js")), r = ia(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), f = R([]), g = R(!1), v = R(null);
    let h;
    me(u, (le) => {
      s.searchOptions && (clearTimeout(h), g.value = !0, h = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(le);
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
    function y(le) {
      v.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function C() {
      v.value = null, i("change", null);
    }
    const M = bt("panelPicker", null), S = bt("panelCreateOption", null), _ = R(!1), m = R(!1), p = R({}), b = R(null), A = x(() => Wr(s.field)), E = x(() => Zr(s.field));
    function I() {
      p.value = {}, b.value = null, _.value = !0, d.value = !1;
    }
    function ae() {
      m.value || (_.value = !1, p.value = {}, b.value = null);
    }
    async function H(le) {
      if (S) {
        m.value = !0, p.value = {}, b.value = null;
        try {
          const Y = await S.run(s.field.key, { ...le });
          y(Y), _.value = !1;
        } catch (Y) {
          Y instanceof Gr ? (p.value = Y.fieldErrors, b.value = Object.keys(Y.fieldErrors).length === 0 ? Y.message : null) : b.value = Y instanceof Error ? Y.message : "Could not create that option.";
        } finally {
          m.value = !1;
        }
      }
    }
    const K = x(() => {
      if (!s.field.tableSelect || !M?.base)
        return;
      const le = M.returnUrl || "/";
      return `${M.base}/pick/${s.field.key}?return=${encodeURIComponent(le)}`;
    }), q = x(() => s.field.morphTo ?? []), oe = x(() => {
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
      v.value = le.label, Z(le.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(h));
    const B = x(() => qr(s.field.type)), F = x(
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
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", qi, [
        o("div", Gi, [
          o("label", {
            for: `f-${e.field.key}`,
            class: P(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Zi, "*")) : $("", !0)
          ], 10, Wi),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: P(["flex items-center gap-1", k(gt)])
          }, [
            N(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: Y[0] || (Y[0] = (ee) => j(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Ji)) : $("", !0)
          ], 2)) : $("", !0)
        ]),
        B.value ? (t(), T(Me(B.value), {
          key: 0,
          field: e.field,
          "model-value": e.value,
          values: e.values,
          options: e.options,
          errors: e.errors,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[1] || (Y[1] = (ee) => i("change", ee))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(ja, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": Y[2] || (Y[2] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(k(a), {
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
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(k(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": Y[4] || (Y[4] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Ei, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[5] || (Y[5] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(_i, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": Y[6] || (Y[6] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Yt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": Y[7] || (Y[7] = (ee) => i("change", ee))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : q.value.length ? (t(), n("div", Yi, [
          e.field.morphTypeSelect === "toggle-buttons" ? (t(), T(Ta, {
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
            class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
            onChange: Y[9] || (Y[9] = (ee) => ne(ee.target.value))
          }, [
            Y[25] || (Y[25] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, V(q.value, (ee) => (t(), n("option", {
              key: ee.value,
              value: ee.value
            }, c(ee.label), 9, Qi))), 128))
          ], 42, Xi)),
          oe.value.type && e.searchOptions ? (t(), n("div", ed, [
            o("button", {
              type: "button",
              class: P(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", k(Se)]),
              disabled: e.field.disabled || e.processing,
              onClick: w
            }, [
              o("span", {
                class: P(v.value || oe.value.id ? "" : "text-muted-foreground")
              }, c(v.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, td),
            d.value ? (t(), n("div", ad, [
              pe(o("input", {
                "onUpdate:modelValue": Y[10] || (Y[10] = (ee) => u.value = ee),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", nd, [
                (t(!0), n(z, null, V(f.value, (ee) => (t(), n("button", {
                  key: String(ee.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => G(ee)
                }, c(ee.label), 9, ld))), 128))
              ])
            ])) : $("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: Y[11] || (Y[11] = (ee) => d.value = !1)
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
              class: P(v.value || e.value ? "" : "text-muted-foreground")
            }, c(v.value ?? (e.value ? String(e.value) : "Search…")), 3),
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
              "onUpdate:modelValue": Y[12] || (Y[12] = (ee) => u.value = ee),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", id, [
              g.value ? (t(), n("p", dd, " Searching… ")) : f.value.length === 0 ? (t(), n("p", ud, " No matches ")) : $("", !0),
              (t(!0), n(z, null, V(f.value, (ee) => (t(), n("button", {
                key: String(ee.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => y(ee)
              }, c(ee.label), 9, cd))), 128)),
              e.field.createOption && k(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: I
              }, [
                Y[26] || (Y[26] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + c(E.value), 1)
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
          class: P(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", k(Se)]),
          onChange: Y[14] || (Y[14] = (ee) => i("change", ee.target.value || null))
        }, [
          Y[27] || (Y[27] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, V(e.options, (ee) => (t(), n("option", {
            key: String(ee.value),
            value: ee.value
          }, c(ee.label), 9, md))), 128))
        ], 42, fd)) : e.field.type === "toggle" ? (t(), n("label", pd, [
          D(k(We), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[15] || (Y[15] = (ee) => i("change", ee))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(gt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", vd, [
          D(k(ei), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": Y[16] || (Y[16] = (ee) => i("change", ee === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: P(k(gt))
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
          onInput: Y[17] || (Y[17] = (ee) => i("change", ee.target.value))
        }, null, 42, gd)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: P([
            "border-input flex overflow-hidden rounded-md border",
            k(ca),
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
            onClick: Y[18] || (Y[18] = (ee) => j(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, bd)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: P(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", k(Re)]),
            onInput: Y[19] || (Y[19] = (ee) => i("change", ee.target.value))
          }, null, 42, yd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", xd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[20] || (Y[20] = (ee) => j(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, kd)) : $("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: P([
            "border-input flex h-9 overflow-hidden rounded-md border",
            k(ca),
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
            onClick: Y[22] || (Y[22] = (ee) => j(e.field.prefixAction))
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
            onInput: Y[23] || (Y[23] = (ee) => i("change", ee.target.value))
          }, null, 40, Sd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", Md, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: Y[24] || (Y[24] = (ee) => j(e.field.suffixAction))
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
          class: P(J),
          onInput: Y[21] || (Y[21] = (ee) => i("change", ee.target.value))
        }, null, 40, $d)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", _d, [
          (t(!0), n(z, null, V(e.field.presets, (ee) => (t(), n("button", {
            key: ee,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: P([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              k(Se),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ee ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ee
            ),
            onClick: (Ce) => i("change", String(ee))
          }, c(ee), 11, Ad))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", Pd, [
          (t(!0), n(z, null, V(e.field.chips, (ee, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ee,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (sa) => ye(String(Ce))
          }, c(Ce), 9, zd))), 128))
        ])) : $("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, Od)) : $("", !0),
        e.error ? (t(), n("p", Ld, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: P(k(gt))
        }, c(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && k(S) ? (t(), T(Qr, {
        key: 2,
        open: _.value,
        title: A.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: p.value,
        "general-error": b.value,
        onClose: ae,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), Vd = { class: "flex min-w-0 items-start gap-2.5" }, jd = {
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
}, Dd = ["d"], Ed = { class: "min-w-0" }, Id = { class: "text-sm font-semibold" }, Fd = {
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
}, Xd = { class: "flex items-center justify-between gap-3 border-t p-4" }, Qd = ["disabled"], Da = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = R(0), u = x(
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
    }), v = x(() => {
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
      const m = [], p = (b) => {
        b.component === "field" && b.key && m.push(b.key), b.children?.forEach(p);
      };
      return p(_), m.some((b) => a.errors[b]);
    }
    function M(_) {
      if (_.hidden)
        return !1;
      const m = _.visibleWhen;
      return m ? a.values[m.field] == m.value : !0;
    }
    function S(_) {
      if (a.upload)
        return (m, p) => a.upload(_, m, p);
    }
    return (_, m) => {
      const p = Kt("SchemaNode", !0);
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
        "search-options": e.node.searchable && e.searchOptions ? (b) => e.searchOptions(e.node.key, b) : void 0,
        upload: S(e.node.key),
        discard: e.discard,
        onChange: m[0] || (m[0] = (b) => r("change", e.node.key, b)),
        onAffixAction: m[1] || (m[1] = (b) => r("affix-action", e.node.key, b))
      }, null, 8, ["field", "value", "values", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard"])) : e.node.component === "section" && M(e.node) ? (t(), n("section", {
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
              (t(), n("svg", Td, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, Dd)
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
          (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
            onChange: m[3] || (m[3] = (E, I) => r("change", E, I)),
            onAffixAction: m[4] || (m[4] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", Nd, [
        o("header", Rd, [
          o("h3", Ud, c(e.node.title), 1),
          e.node.description ? (t(), n("p", Hd, c(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: P(["grid grid-cols-1 gap-4 px-4 py-4", h.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
            onChange: m[5] || (m[5] = (E, I) => r("change", E, I)),
            onAffixAction: m[6] || (m[6] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: P(["grid grid-cols-1 gap-4", w(e.node)])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
          onChange: m[7] || (m[7] = (E, I) => r("change", E, I)),
          onAffixAction: m[8] || (m[8] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", Kd, [
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
          onChange: m[9] || (m[9] = (E, I) => r("change", E, I)),
          onAffixAction: m[10] || (m[10] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: P(["grid grid-cols-1 gap-4", h.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
          onChange: m[11] || (m[11] = (E, I) => r("change", E, I)),
          onAffixAction: m[12] || (m[12] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: P(["flex", g.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
          onChange: m[13] || (m[13] = (E, I) => r("change", E, I)),
          onAffixAction: m[14] || (m[14] = (E, I) => r("affix-action", E, I))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", qd, [
        o("legend", Gd, c(e.node.label), 1),
        e.node.description ? (t(), n("p", Wd, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: P(["grid grid-cols-1 gap-4", h.value])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), T(p, {
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
            onChange: m[15] || (m[15] = (E, I) => r("change", E, I)),
            onAffixAction: m[16] || (m[16] = (E, I) => r("affix-action", E, I))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: P(["rounded-lg border px-4 py-3 text-sm", v.value])
      }, [
        e.node.title ? (t(), n("p", Zd, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: P(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => (t(), n("button", {
            key: A,
            type: "button",
            class: P([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === A ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (E) => i.value = A
          }, [
            N(c(b.label) + " ", 1),
            C(b) ? (t(), n("span", Yd)) : $("", !0)
          ], 10, Jd))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(b.children ?? [], (E, I) => (t(), T(p, {
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
          [Ue, i.value === A]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: P(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(Kr, {
          class: P(["p-4", f.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (b) => C((e.node.children ?? [])[b]),
          "onUpdate:activeStep": m[19] || (m[19] = (b) => d.value = b)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, V(e.node.children ?? [], (b, A) => pe((t(), n("div", {
          key: A,
          class: P(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(b.children ?? [], (E, I) => (t(), T(p, {
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
}), Z5 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(it, {
      open: e.open,
      title: e.title,
      size: "form",
      busy: e.processing,
      onClose: u[2] || (u[2] = (f) => r("close"))
    }, {
      footer: L(() => [
        D(ue, {
          variant: "ghost",
          size: "sm",
          disabled: e.processing,
          onClick: u[1] || (u[1] = (f) => r("close"))
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
            N(c(e.processing ? "Saving…" : e.title), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      default: L(() => [
        o("form", {
          class: "flex flex-col gap-4",
          onSubmit: he(i, ["prevent"])
        }, [
          (t(!0), n(z, null, V(e.form?.nodes ?? [], (f, g) => (t(), T(Da, {
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
    return (g, v) => (t(), n("span", {
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
}), ou = ["aria-label"], su = ["fill"], J5 = /* @__PURE__ */ O({
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
    const l = e, a = R(!1);
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
        N(c(i.value), 1)
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
}), vu = { class: "inline-flex items-center" }, gu = ["checked", "aria-label"], hu = { class: "sr-only" }, Y5 = /* @__PURE__ */ O({
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
}, X5 = /* @__PURE__ */ O({
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
}, Q5 = /* @__PURE__ */ O({
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
      U(s.$slots, "default")
    ], 10, wu));
  }
}), Su = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Mu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, e3 = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, V(s.value, (f) => (t(), T(Ke, {
        key: f,
        variant: "secondary"
      }, {
        default: L(() => [
          N(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(Ke, {
        key: 0,
        variant: "outline"
      }, {
        default: L(() => [
          N("+" + c(i.value), 1)
        ]),
        _: 1
      })) : $("", !0)
    ]));
  }
}), Bu = ["aria-checked", "aria-label", "title", "disabled"], _u = ["value", "placeholder", "disabled"], Au = ["value", "disabled"], Pu = ["value"], t3 = /* @__PURE__ */ O({
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
    function v(w) {
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
        Vt(v, ["enter"]),
        Vt(h, ["esc"])
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
      (t(!0), n(z, null, V(e.options, (C, M) => (t(), n("option", {
        key: M,
        value: M
      }, c(C), 9, Pu))), 128))
    ], 40, Au));
  }
}), ea = {
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
function a3(e) {
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
    return ea[f] ?? "outline";
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
}, ju = ["d"], Tu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Du = ["disabled", "onClick"], Eu = {
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
}, n3 = /* @__PURE__ */ O({
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
      return ea[w] ?? "outline";
    }
    function g(h) {
      return a.options[h] ?? h;
    }
    function v(h, w) {
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
      e.disabled ? (t(), T(Ke, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          N(c(g(i.value) || "-"), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : (t(), T(Ze, {
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
            D(Ke, {
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                N(c(g(i.value) || "-"), 1)
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
          o("div", Tu, c(d.value), 1),
          (t(!0), n(z, null, V(e.options, (C, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => v(String(M), y)
          }, [
            D(Ke, {
              variant: f(M),
              class: "capitalize"
            }, {
              default: L(() => [
                N(c(C), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", Eu, [
              o("path", {
                d: k(ce)("check")
              }, null, 8, Iu)
            ])) : (t(), n("span", Fu))
          ], 8, Du))), 128))
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
}, tc = ["d"], ac = { class: "min-w-0 flex-1 truncate" }, l3 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = x(() => r.groups.flatMap((S) => S.actions)), f = x(() => u.value.filter((S) => !S.destructive)), g = x(() => u.value.filter((S) => S.destructive)), v = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function h(S) {
      return v[S.color ?? "gray"] ?? v.gray;
    }
    const w = x(() => u.value.length === 0);
    function y(S) {
      s("run", S);
    }
    function C(S) {
      w.value || (S.preventDefault(), i.value?.openAt(S.clientX, S.clientY));
    }
    function M(S) {
      if (S.key !== "ArrowDown" && S.key !== "ArrowUp")
        return;
      const _ = Array.from(
        d.value?.querySelectorAll("[data-menu-item]") ?? []
      );
      if (_.length === 0)
        return;
      S.preventDefault();
      const m = _.indexOf(document.activeElement), p = S.key === "ArrowDown" ? 1 : -1, b = (m + p + _.length) % _.length;
      _[b]?.focus();
    }
    return l({ openContextMenu: C }), (S, _) => (t(), n("div", Nu, [
      w.value ? $("", !0) : (t(), T(Ze, {
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
            onKeydown: M
          }, [
            (t(!0), n(z, null, V(f.value, (m) => (t(), n(z, {
              key: m.key
            }, [
              m.link ? (t(), n("a", {
                key: 0,
                href: m.url ?? "#",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", h(m)])
              }, [
                (t(), n("svg", qu, [
                  o("path", {
                    d: k(lt)(m)
                  }, null, 8, Gu)
                ])),
                o("span", Wu, c(m.label), 1)
              ], 10, Ku)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: P(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", h(m)]),
                disabled: e.busy === m.key,
                onClick: (p) => y(m)
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
                    d: k(lt)(m)
                  }, null, 8, Ju)
                ], 2)),
                o("span", Yu, c(m.label), 1)
              ], 10, Zu))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", Xu, [
              (t(!0), n(z, null, V(g.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (p) => y(m)
              }, [
                (t(), n("svg", ec, [
                  o("path", {
                    d: k(lt)({ ...m, destructive: !0 })
                  }, null, 8, tc)
                ])),
                o("span", ac, c(m.label), 1)
              ], 8, Qu))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), Dt = {
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
}, Et = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, yt = 12, xt = 20, nc = [0, 0.25, 0.5, 0.75, 1], ta = "alxtexhpanel.appearance", _e = {
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
}, je = R({ ..._e });
let Je = !1;
const Ea = "alxtexhpanel.appearance.vars", It = "pk-appearance";
function tt() {
  return typeof window > "u" ? null : window;
}
let kt = null;
function Ia(e) {
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
function Fa(e) {
  const l = tt();
  l && (l.__panelAppearance = { ...e });
}
function lc(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(It);
  l || (l = document.createElement("style"), l.id = It, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function o3() {
  Je = !1, kt = null, je.value = { ..._e };
  const e = tt();
  e && (e.__panelAppearanceApplied = !1), typeof document < "u" && document.getElementById(It)?.remove();
}
function aa(e) {
  return e.theme === "dark";
}
const fa = {
  compact: "0.25rem",
  comfortable: "0.5rem",
  spacious: "0.875rem"
}, ma = {
  compact: "0.75rem",
  comfortable: "1rem",
  spacious: "1.5rem"
};
function Na(e) {
  const l = Dt[e.primary] ?? Dt.slate, a = Et[e.surface] ?? Et.neutral, r = a.chroma, s = a.hue, d = aa(e) ? {
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
    "--pk-row-padding": fa[e.density] ?? fa.comfortable,
    "--pk-form-gap": ma[e.density] ?? ma.comfortable
  };
}
function oc(e) {
  return {
    dark: aa(e),
    theme: e.theme,
    vars: Na(e),
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
}
function na() {
  if (typeof window > "u")
    return { ..._e };
  try {
    const e = localStorage.getItem(ta);
    if (!e)
      return { ..._e };
    const l = { ..._e, ...JSON.parse(e) };
    l.theme === "system" && (l.theme = _e.theme);
    const a = { small: 14, normal: 16, large: 18 };
    return typeof l.fontSize == "string" && (l.fontSize = a[l.fontSize] ?? _e.fontSize), (typeof l.fontSize != "number" || Number.isNaN(l.fontSize) || l.fontSize < yt || l.fontSize > xt) && (l.fontSize = _e.fontSize), l;
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
function Ra(e) {
  const l = na(), a = e ? { ..._e, ...l, ...e } : { ..._e, ...l }, r = !Je, s = Ia(a);
  if (je.value = a, Je = !0, e) {
    Fa(a);
    try {
      localStorage.setItem(ta, JSON.stringify(a));
    } catch {
    }
  }
  const d = tt()?.__panelAppearanceApplied === !0;
  if (kt !== s) {
    if (r && d && e) {
      kt = s;
      try {
        const u = oc(a);
        localStorage.setItem(Ea, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Ft(a);
  }
}
function s3() {
  Ra(sc());
}
function r3(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Ra(l);
}
let Ua = null;
function i3(e) {
  Ua = e;
}
let Ha = {};
function rc(e) {
  if (Ha = e, !(typeof document > "u") && !na().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Ft(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Na(e), r = { ...a, ...e.primaryChosen ? {} : Ha }, s = {
    dark: aa(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, lc(a), Fa(e), kt = Ia(e);
  const i = tt();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Ea, JSON.stringify(s));
  } catch {
  }
}
function Ka() {
  function e(r) {
    Ft(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    je.value = { ...je.value, ...r, ...s };
    try {
      localStorage.setItem(ta, JSON.stringify(je.value));
    } catch {
    }
    e(je.value), Ua?.({ ...r, ...s });
  }
  function a() {
    l({ ..._e });
  }
  return ve(() => {
    if (Je || tt()?.__panelAppearanceApplied) {
      Je = !0;
      return;
    }
    Je = !0, je.value = na(), Ft(je.value);
  }), {
    appearance: x(() => je.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: Dt,
    SURFACE_TINTS: Et,
    FONT_SIZE_MIN: yt,
    FONT_SIZE_MAX: xt,
    RADIUS_OPTIONS: nc
  };
}
const ic = ["aria-busy", "aria-label"], dc = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, uc = { class: "min-w-0" }, cc = { class: "text-base font-semibold" }, fc = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, mc = { class: "flex shrink-0 items-center gap-2" }, pc = ["disabled"], vc = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, gc = {
  key: 0,
  class: "bg-muted/30 flex shrink-0 items-center justify-end gap-2 border-t px-4 py-3"
}, St = /* @__PURE__ */ O({
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
    const u = R(!1), f = x(() => a.width ?? co[a.size]), g = x(
      () => [Va, a.padded ? uo : ""].filter(Boolean).join(" ")
    );
    function v(y) {
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
      const M = C[0], S = C[C.length - 1];
      y.shiftKey && document.activeElement === M ? (y.preventDefault(), S.focus()) : !y.shiftKey && document.activeElement === S && (y.preventDefault(), M.focus());
    }
    return me(
      () => a.open,
      async (y) => {
        if (y) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", w), await Te(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", w), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", w), document.body.style.overflow = d;
    }), (y, C) => (t(), T(dt, { to: "body" }, [
      D(Ye, {
        "enter-active-class": "transition duration-150 ease-out",
        "enter-from-class": "opacity-0",
        "leave-active-class": "transition duration-100 ease-in",
        "leave-to-class": "opacity-0"
      }, {
        default: L(() => [
          e.open ? (t(), n("div", {
            key: 0,
            class: "fixed inset-0 z-50 bg-black/30 backdrop-blur-[1px]",
            onPointerdown: v,
            onPointerup: h
          }, null, 32)) : $("", !0)
        ]),
        _: 1
      }),
      D(Ye, {
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
                U(y.$slots, "header-actions"),
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
                ])], 8, pc)
              ])
            ]),
            o("div", vc, [
              o("div", {
                class: P(g.value)
              }, [
                U(y.$slots, "default")
              ], 2)
            ]),
            y.$slots.footer ? (t(), n("footer", gc, [
              U(y.$slots, "footer")
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
}, Sc = { class: "flex flex-col gap-2" }, Mc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Bc = ["aria-pressed", "aria-label", "onClick"], _c = { class: "text-sm font-semibold" }, Ac = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, Pc = ["onClick"], zc = { class: "flex flex-col gap-2" }, Oc = { class: "flex items-center justify-between" }, Lc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Vc = { class: "flex items-center gap-2" }, jc = ["disabled"], Tc = ["min", "max", "value"], Dc = ["disabled"], d3 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ka(), u = R(!1), f = x(() => l.value.sidebarSide === "right"), g = x(() => f.value ? "left" : "right"), v = [
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
    function S(_, m) {
      return `oklch(0.72 ${m * 3} ${_})`;
    }
    return (_, m) => (t(), n(z, null, [
      o("button", {
        type: "button",
        class: "border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors",
        "aria-label": "Appearance settings",
        title: "Appearance",
        onClick: m[0] || (m[0] = (p) => u.value = !0)
      }, [...m[6] || (m[6] = [
        Ht('<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 1 0-20c5 0 9 3.6 9 8 0 2.2-1.8 4-4 4h-2.2a1.8 1.8 0 0 0-1.3 3 1.8 1.8 0 0 1-1.5 3z"></path><circle cx="7.5" cy="11.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor" stroke="none"></circle><circle cx="15" cy="8.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>', 1)
      ])]),
      D(St, {
        open: u.value,
        title: "Settings",
        side: g.value,
        width: "w-80",
        padded: !1,
        onClose: m[5] || (m[5] = (p) => u.value = !1)
      }, {
        "header-actions": L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground text-xs font-normal hover:underline",
            onClick: m[1] || (m[1] = //@ts-ignore
            (...p) => k(r) && k(r)(...p))
          }, " Reset ")
        ]),
        default: L(() => [
          o("div", hc, [
            o("section", bc, [
              m[8] || (m[8] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
              o("div", yc, [
                (t(!0), n(z, null, V(k(s), (p, b) => (t(), n("button", {
                  key: b,
                  type: "button",
                  class: "relative size-7 rounded-md transition-transform hover:scale-110",
                  style: se({ background: p.value }),
                  title: p.label,
                  "aria-label": p.label,
                  "aria-pressed": k(l).primary === b,
                  onClick: (A) => k(a)({ primary: b })
                }, [
                  k(l).primary === b ? (t(), n("svg", {
                    key: 0,
                    viewBox: "0 0 24 24",
                    class: "absolute inset-0 m-auto size-4",
                    style: se({ color: p.foreground }),
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
                (t(!0), n(z, null, V(k(i), (p, b) => (t(), n("button", {
                  key: b,
                  type: "button",
                  class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                  style: se({ background: S(p.hue, p.chroma) }),
                  title: p.label,
                  "aria-label": p.label,
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
                (t(!0), n(z, null, V(k(d), (p) => (t(), n("button", {
                  key: p,
                  type: "button",
                  class: P([
                    "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l).radius === p ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  "aria-pressed": k(l).radius === p,
                  "aria-label": `${p}rem radius`,
                  onClick: (b) => k(a)({ radius: p })
                }, [
                  o("span", {
                    class: "border-foreground/50 block size-4 border-2",
                    style: se({ borderRadius: `${Math.min(p, 0.5)}rem` })
                  }, null, 4),
                  N(" " + c(p), 1)
                ], 10, Bc))), 128))
              ])
            ]),
            (t(!0), n(z, null, V([
              { label: "Color scheme", key: "theme", options: v },
              { label: "Card style", key: "cardStyle", options: w },
              { label: "Density", key: "density", options: h },
              { label: "Sidebar", key: "sidebarSide", options: y },
              { label: "Content layout", key: "contentLayout", options: C },
              { label: "Menu style", key: "menuStyle", options: M }
            ], (p) => (t(), n("section", {
              key: p.key,
              class: "flex flex-col gap-2"
            }, [
              o("h3", _c, c(p.label), 1),
              o("div", Ac, [
                (t(!0), n(z, null, V(p.options, (b) => (t(), n("button", {
                  key: String(b.value),
                  type: "button",
                  class: P([
                    "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                    k(l)[p.key] === b.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                  ]),
                  onClick: (A) => k(a)({ [p.key]: b.value })
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
                  disabled: k(l).fontSize <= k(yt),
                  "aria-label": "Decrease font size",
                  onClick: m[2] || (m[2] = (p) => k(a)({ fontSize: k(l).fontSize - 1 }))
                }, " − ", 8, jc),
                o("input", {
                  type: "range",
                  class: "accent-primary flex-1",
                  min: k(yt),
                  max: k(xt),
                  value: k(l).fontSize,
                  "aria-label": "Font size in pixels",
                  onInput: m[3] || (m[3] = (p) => k(a)({
                    fontSize: Number(p.target.value)
                  }))
                }, null, 40, Tc),
                o("button", {
                  type: "button",
                  class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                  disabled: k(l).fontSize >= k(xt),
                  "aria-label": "Increase font size",
                  onClick: m[4] || (m[4] = (p) => k(a)({ fontSize: k(l).fontSize + 1 }))
                }, " + ", 8, Dc)
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
}, qc = ["d"], Gc = { class: "w-full truncate text-center" }, Pt = 5, u3 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.items.length <= Pt ? a.items : a.items.slice(0, Pt - 1)
    ), i = x(() => a.items.length > Pt);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), n("nav", Ec, [
      o("ul", Ic, [
        (t(!0), n(z, null, V(s.value, (g) => (t(), n("li", {
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
      U(l.$slots, "default")
    ], 10, Zc));
  }
}), c3 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = R(null), d = R("");
    ve(() => {
      a.autofocus && i.value?.focus();
    });
    const u = x(
      () => Array.from({ length: a.length }, (_, m) => a.modelValue[m] ?? "")
    ), f = x(() => Math.min(a.modelValue.length, a.length - 1));
    function g(_) {
      return _.replace(/\D/g, "").slice(0, a.length);
    }
    function v(_) {
      a.disabled || _.length !== a.length || d.value !== _ && (d.value = _, r("complete", _));
    }
    function h(_) {
      const m = g(_);
      m !== a.modelValue && r("update:modelValue", m), v(m);
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
      () => a.modelValue,
      (_) => {
        _.length < a.length ? d.value = "" : v(_);
      }
    );
    let S;
    return ve(() => {
      S = window.setInterval(() => {
        if (a.disabled || !i.value)
          return;
        (i.value.matches(":-webkit-autofill") || i.value.matches(":autofill") || document.activeElement === i.value) && C();
      }, 250);
    }), rn(() => {
      S !== void 0 && window.clearInterval(S);
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
        onAnimationstart: M,
        onFocus: m[0] || (m[0] = (p) => s.value = !0),
        onBlur: m[1] || (m[1] = (p) => s.value = !1)
      }, null, 40, Yc),
      (t(!0), n(z, null, V(u.value, (p, b) => (t(), n("div", {
        key: b,
        "data-slot": "input-otp-slot",
        "data-active": s.value && b === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(c(p) + " ", 1),
        s.value && b === f.value && p === "" ? (t(), n("div", Qc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Xc))), 128))
    ]));
  }
}), f3 = /* @__PURE__ */ Ct(ef, [["__scopeId", "data-v-560616ac"]]), tf = {
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
}, m3 = /* @__PURE__ */ O({
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
            U(l.$slots, "status")
          ])) : $("", !0)
        ]),
        e.purpose ? (t(), n("p", rf, c(e.purpose), 1)) : $("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", df, [
        U(l.$slots, "actions")
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
      class: P(k(Q)(k(mf)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
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
      class: P(k(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
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
      class: P(k(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), mf = Jt(
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
), pf = { class: "list-inside list-disc text-sm" }, p3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(k(uf), { variant: "destructive" }, {
      default: L(() => [
        D(k(Yn), { class: "size-4" }),
        D(k(ff), null, {
          default: L(() => [
            N(c(e.title), 1)
          ]),
          _: 1
        }),
        D(k(cf), null, {
          default: L(() => [
            o("ul", pf, [
              (t(!0), n(z, null, V(a.value, (i, d) => (t(), n("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), qa = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, s = Oa(a, "modelValue", l, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (i, d) => pe((t(), n("input", {
      "onUpdate:modelValue": d[0] || (d[0] = (u) => dn(s) ? s.value = u : null),
      "data-slot": "input",
      class: P(
        k(Q)(
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
}), vf = { class: "relative" }, gf = ["aria-label"], v3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = un("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", vf, [
      D(k(qa), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: k(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: P(
          k(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(k(Xn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(k(Qn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, gf)
    ]));
  }
}), Ga = "@container min-w-0", hf = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", g3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", bf = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function h3(e, l) {
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
    (d.span ?? 1) >= 2 ? (i(), r.push({ type: "wide", item: d })) : s.push(d);
  return i(), r;
}
function pa(e, l) {
  return `${e}:${l}`;
}
function b3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Nt(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function y3(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const g of f.items)
      i.set(pa(f.kind, g.key), {
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
      span: Nt(f.span),
      hidden: !!f.hidden,
      source: v.source
    }));
  }
  for (const f of s)
    for (const g of f.items) {
      const v = pa(f.kind, g.key);
      u.has(v) || d.push({
        id: v,
        kind: f.kind,
        key: g.key,
        span: Nt(g.span),
        hidden: !1,
        source: g
      });
    }
  return d;
}
function x3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Nt(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Wa = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", yf = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", xf = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function kf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function $f(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function wf(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await Cf(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function Cf(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function Sf(e) {
  if (kf(e))
    throw new Error(xf);
  if (!$f(e))
    throw new Error(Wa);
  if (!await wf(e))
    throw new Error(yf);
}
const k3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(Qe), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mf = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(Sa), re({
      "data-slot": "sheet-description",
      class: k(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, k(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $3 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: P(k(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Bf = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: P(k(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _f = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(Ma), re({
      "data-slot": "sheet-title",
      class: k(Q)("text-foreground font-semibold", l.class)
    }, k(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), w3 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(Ba), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), va = "sidebar_state", Af = 3600 * 24 * 7, Pf = "16rem", zf = "18rem", Of = "3rem", Lf = "b", [Mt, Vf] = bn("Sidebar"), jf = { class: "flex h-full w-full flex-col" }, Tf = ["data-state", "data-collapsible", "data-variant", "data-side"], Df = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, C3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, openMobile: s, setOpenMobile: i } = Mt();
    return (d, u) => e.collapsible === "none" ? (t(), n("div", re({
      key: 0,
      "data-slot": "sidebar",
      class: k(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : k(a) ? (t(), T(k(Xt), re({
      key: 1,
      open: k(s)
    }, d.$attrs, { "onUpdate:open": k(i) }), {
      default: L(() => [
        D(k(Qt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": k(zf)
          })
        }, {
          default: L(() => [
            D(Bf, { class: "sr-only" }, {
              default: L(() => [
                D(_f, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(Mf, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", jf, [
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
      "data-state": k(r),
      "data-collapsible": k(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: P(
          k(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: k(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", Df, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, Tf));
  }
}), S3 = /* @__PURE__ */ O({
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
        k(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), M3 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: P(k(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: P(k(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(et), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        k(Q)(
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
}), A3 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: P(k(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), P3 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(et), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: P(
        k(Q)(
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
}), z3 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: P(k(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O3 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(qa), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: P(k(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), L3 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: P(
        k(Q)(
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
}), V3 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: P(k(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), j3 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(et), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: P(
        k(Q)(
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
}), T3 = /* @__PURE__ */ O({
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
        k(Q)(
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
}), Ef = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(k(yn), re({ "data-slot": "tooltip" }, k(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), If = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(xn), null, {
      default: L(() => [
        D(k(kn), re({ "data-slot": "tooltip-content" }, { ...k(i), ...d.$attrs }, {
          class: k(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(k($n), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), D3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(k(_a), Oe(Fe(l)), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ff = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(wn), re({ "data-slot": "tooltip-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ga = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(k(et), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: k(Q)(k(Rf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), E3 = /* @__PURE__ */ O({
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
    const l = e, { isMobile: a, state: r } = Mt(), s = fe(l, "tooltip");
    return (i, d) => e.tooltip ? (t(), T(k(Ef), { key: 1 }, {
      default: L(() => [
        D(k(Ff), { "as-child": "" }, {
          default: L(() => [
            D(ga, Oe(Fe({ ...k(s), ...i.$attrs })), {
              default: L(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(k(If), {
          side: "right",
          align: "center",
          hidden: k(r) !== "collapsed" || k(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(c(e.tooltip), 1)
            ], 64)) : (t(), T(Me(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(ga, Oe(re({ key: 0 }, { ...k(s), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I3 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: P(k(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), ha = "animate-pulse rounded-md bg-primary/10", F3 = /* @__PURE__ */ O({
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
      class: P(k(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: P(k(Q)(ha, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: P(k(Q)(ha, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), N3 = /* @__PURE__ */ O({
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
        k(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), R3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(k(et), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: P(
        k(Q)(
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
}), U3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: P(k(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), H3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !il?.cookie.includes(`${va}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = sl("(max-width: 767px)"), i = R(!1), d = Oa(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(h) {
      d.value = h, document.cookie = `${va}=${d.value}; path=/; max-age=${Af}`;
    }
    function f(h) {
      i.value = h;
    }
    function g() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    rl("keydown", (h) => {
      h.key === Lf && (h.metaKey || h.ctrlKey) && (h.preventDefault(), g());
    });
    const v = x(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return Vf({
      state: v,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: g
    }), (h, w) => (t(), T(k(_a), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": k(Pf),
            "--sidebar-width-icon": k(Of)
          },
          class: k(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, h.$attrs), [
          U(h.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), K3 = /* @__PURE__ */ O({
  __name: "SidebarRail",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { toggleSidebar: a } = Mt();
    return (r, s) => (t(), n("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: P(
        k(Q)(
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
      U(r.$slots, "default")
    ], 2));
  }
}), Nf = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(k(Cn), re({ "data-slot": "separator" }, k(a), {
      class: k(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), q3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(Nf), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: P(k(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), G3 = /* @__PURE__ */ O({
  __name: "SidebarTrigger",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, { isMobile: a, state: r, toggleSidebar: s } = Mt();
    return (i, d) => (t(), T(ue, {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      class: P(k(Q)("h-7 w-7", l.class)),
      onClick: k(s)
    }, {
      default: L(() => [
        k(a) || k(r) === "collapsed" ? (t(), T(k(el), { key: 0 })) : (t(), T(k(tl), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Rf = Jt(
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
), W3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(k(Sn), re({ "data-slot": "dropdown-menu" }, k(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Uf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Z3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Mn), re({ "data-slot": "dropdown-menu-checkbox-item" }, k(i), {
      class: k(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Uf, [
          D(k(Aa), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(k(Pa), { class: "size-4" })
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
}), J3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Bn), null, {
      default: L(() => [
        D(k(_n), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(Q)(
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
}), Y3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(An), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), X3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(k(Pn), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, k(r), {
      class: k(Q)(
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
}), Q3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), T(k(zn), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, k(r), {
      class: k(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), eC = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(k(On), re({ "data-slot": "dropdown-menu-radio-group" }, k(s)), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, tC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Ln), re({ "data-slot": "dropdown-menu-radio-item" }, k(i), {
      class: k(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Hf, [
          D(k(Aa), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(k(al), { class: "size-2 fill-current" })
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
}), aC = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(Vn), re({ "data-slot": "dropdown-menu-separator" }, k(a), {
      class: k(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), nC = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: P(k(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(k(jn), re({ "data-slot": "dropdown-menu-sub" }, k(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), oC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Tn), re({ "data-slot": "dropdown-menu-sub-content" }, k(i), {
      class: k(Q)(
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
}), sC = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(k(Dn), re({ "data-slot": "dropdown-menu-sub-trigger" }, k(r), {
      "data-inset": e.inset ? "" : void 0,
      class: k(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(k(za), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), rC = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Le(e);
    return (r, s) => (t(), T(k(En), re({ "data-slot": "dropdown-menu-trigger" }, k(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iC = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(In), {
      "data-slot": "avatar",
      class: P(k(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dC = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(Fn), re({ "data-slot": "avatar-fallback" }, k(a), {
      class: k(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(k(Nn), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cC = /* @__PURE__ */ O({
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
}), fC = /* @__PURE__ */ O({
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
      class: P(k(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(k(nl), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), mC = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: P(k(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), pC = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(et), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: P(k(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), vC = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: P(
        k(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), gC = /* @__PURE__ */ O({
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
      class: P(k(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), hC = /* @__PURE__ */ O({
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
      class: P(k(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(k(za))
      ])
    ], 2));
  }
}), Kf = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, qf = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Kf, [
      D(k(Rn), re({ "data-slot": "navigation-menu-viewport" }, k(r), {
        class: k(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), bC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Un), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, k(i), {
      class: k(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((f) => [
        U(d.$slots, "default", Oe(Fe(f))),
        e.viewport ? (t(), T(qf, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), yC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Hn), re({ "data-slot": "navigation-menu-content" }, k(i), {
      class: k(Q)(
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
}), xC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(k(Kn), re({ "data-slot": "navigation-menu-indicator" }, k(r), {
      class: k(Q)(
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
}), kC = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(qn), re({ "data-slot": "navigation-menu-item" }, k(a), {
      class: k(Q)("relative", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $C = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Gn), re({ "data-slot": "navigation-menu-link" }, k(i), {
      class: k(Q)(
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
}), wC = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(k(Wn), re({ "data-slot": "navigation-menu-list" }, k(r), {
      class: k(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CC = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(k(Zn), re({ "data-slot": "navigation-menu-trigger" }, k(r), {
      class: k(Q)(k(Gf)(), "group", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(k(ll), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = Jt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), SC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(k(Ca), re({ "data-slot": "dialog" }, k(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), MC = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(Qe), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(qt), re({ "data-slot": "dialog-overlay" }, k(a), {
      class: k(Q)(
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
}), BC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Gt), null, {
      default: L(() => [
        D(Wf),
        D(k(Wt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...k(i) }, {
          class: k(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(k(Qe), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                D(k(Zt)),
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
}), _C = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(k(Sa), re({ "data-slot": "dialog-description" }, k(r), {
      class: k(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), AC = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: P(k(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(k(Qe), {
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
}), PC = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: P(k(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), zC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(k(Gt), null, {
      default: L(() => [
        D(k(qt), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            D(k(Wt), re({
              class: k(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...k(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const g = f.detail.originalEvent, v = g.target;
                (g.offsetX > v.clientWidth || g.offsetY > v.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                U(d.$slots, "default"),
                D(k(Qe), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    D(k(Zt), { class: "w-4 h-4" }),
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
}), OC = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(k(Ma), re({ "data-slot": "dialog-title" }, k(r), {
      class: k(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LC = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(Ba), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VC = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(k(Jn), re({ "data-slot": "label" }, k(a), {
      class: k(Q)(
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
}), jC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(k(ol), {
      role: "status",
      "aria-label": "Loading",
      class: P(k(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), TC = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: P(
        k(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), DC = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: P(k(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), EC = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: P(k(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), IC = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: P(k(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), FC = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: P(k(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), NC = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: P(
        k(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), RC = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: P(k(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Zf = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Jf = { class: "flex items-start gap-3" }, Yf = { class: "min-w-0 flex-1" }, Xf = { class: "text-foreground text-sm font-medium" }, Qf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, UC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    cn((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (g, v) => (t(), n("div", {
      class: P(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Zf, [
        o("div", Jf, [
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
          o("div", Yf, [
            o("p", Xf, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Qf, c(d.value), 1)) : $("", !0),
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
              N(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : U(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), em = { class: "bg-card rounded-lg border" }, tm = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, am = { class: "min-w-0" }, nm = {
  key: 0,
  class: "truncate text-sm font-medium"
}, lm = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, om = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, sm = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, HC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", em, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", tm, [
        o("div", am, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", nm, c(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", lm, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", om, [
          U(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: P(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", sm, [
        U(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), Za = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function KC() {
  const e = La(), l = x(() => e.props.panel?.pageFooter === !0);
  return jt(Za, l), l;
}
const rm = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, im = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, dm = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, qC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = La(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = x(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = bt(Za, x(() => !1)), u = x(() => !l.host && k(d) === !0);
    return (f, g) => u.value ? $("", !0) : (t(), n("footer", rm, [
      o("div", im, [
        o("p", null, "© " + c(k(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", dm, [
          (t(!0), n(z, null, V(i.value, (v) => (t(), T(k(cl), {
            key: v.href,
            href: v.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              N(c(v.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), um = { class: "flex shrink-0 flex-col items-center" }, cm = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, GC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", um, [
      o("div", {
        class: P(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", cm)) : $("", !0),
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
}), fm = { class: "flex flex-col gap-2" }, mm = { class: "min-w-0 flex-1" }, pm = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, vm = ["disabled", "aria-label", "onClick"], gm = ["disabled", "aria-label", "onClick"], hm = ["disabled", "title", "aria-label", "onClick"], bm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, ym = ["disabled"], WC = /* @__PURE__ */ O({
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
    function d(_) {
      return Array.isArray(_) ? _.map((m) => ({ uid: s++, data: { ...m } })) : [];
    }
    me(
      () => a.modelValue,
      (_) => {
        JSON.stringify(_ ?? null) !== JSON.stringify(u()) && (i.value = d(_));
      }
    );
    function u() {
      const _ = [];
      for (const m of i.value) {
        const p = {};
        let b = !1;
        for (const A of a.children) {
          const E = m.data[A.key] ?? null;
          p[A.key] = E, E !== null && E !== "" && !(Array.isArray(E) && E.length === 0) && (b = !0);
        }
        b && _.push(p);
      }
      return _.length ? _ : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const g = x(() => a.maxItems !== null && i.value.length >= a.maxItems), v = x(() => a.minItems !== null && i.value.length <= a.minItems), h = x(() => a.children.length === 1);
    function w() {
      if (g.value || a.disabled)
        return;
      const _ = {};
      for (const m of a.children)
        _[m.key] = null;
      i.value.push({ uid: s++, data: _ });
    }
    function y(_) {
      i.value = i.value.filter((m) => m.uid !== _), f();
    }
    function C(_, m) {
      const p = _ + m;
      if (p < 0 || p >= i.value.length)
        return;
      const b = [...i.value], [A] = b.splice(_, 1);
      b.splice(p, 0, A), i.value = b, f();
    }
    function M(_, m, p) {
      const b = i.value.find((A) => A.uid === _);
      b && (b.data[m] = p, f());
    }
    function S(_, m) {
      return a.errors[`${a.fieldKey}.${_}.${m}`];
    }
    return (_, m) => (t(), n("div", fm, [
      (t(!0), n(z, null, V(i.value, (p, b) => (t(), n("div", {
        key: p.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: P(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", h.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(b + 1), 3),
        o("div", mm, [
          h.value ? (t(), T(Xe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: p.data[e.children[0].key],
            error: S(b, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (A) => M(p.uid, e.children[0].key, A)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", pm, [
            (t(!0), n(z, null, V(e.children, (A) => (t(), T(Xe, {
              key: A.key,
              field: { ...A, disabled: A.disabled || e.disabled },
              value: p.data[A.key],
              error: S(b, A.key),
              options: e.childOptions[A.key] ?? [],
              onChange: (E) => M(p.uid, A.key, E)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: P(["flex shrink-0 items-center gap-0.5", h.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || b === 0,
            "aria-label": `Move ${e.itemLabel} ${b + 1} up`,
            onClick: (A) => C(b, -1)
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
          ])], 8, vm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || b === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${b + 1} down`,
            onClick: (A) => C(b, 1)
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
          ])], 8, gm),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || v.value,
            title: v.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${b + 1}`,
            onClick: (A) => y(p.uid)
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
          ])], 8, hm)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", bm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      g.value ? $("", !0) : (t(), n("button", {
        key: 1,
        type: "button",
        class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
        disabled: e.disabled,
        onClick: w
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
        N(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, ym))
    ]));
  }
}), xm = { class: "space-y-1" }, km = { class: "flex items-center gap-1" }, $m = ["disabled", "title", "aria-label", "onClick"], wm = ["aria-pressed"], Cm = ["id", "value", "rows", "disabled"], Sm = ["innerHTML"], Mm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(!1), i = x(() => a.modelValue ?? "");
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
      const C = y.selectionStart, M = y.selectionEnd, S = i.value.slice(C, M);
      r(
        "update:modelValue",
        `${i.value.slice(0, C)}${h}${S}${w}${i.value.slice(M)}`
      );
    }
    const g = {
      bold: { label: "B", run: () => f("**") },
      italic: { label: "I", run: () => f("*") },
      code: { label: "</>", run: () => f("`") },
      heading: { label: "H", run: () => f("## ", "") },
      list: { label: "•", run: () => f("- ", "") },
      link: { label: "🔗", run: () => f("[", "](https://)") }
    }, v = x(
      () => (a.toolbar ?? Object.keys(g)).filter((h) => h in g)
    );
    return (h, w) => (t(), n("div", xm, [
      o("div", km, [
        (t(!0), n(z, null, V(v.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          disabled: e.disabled,
          title: y,
          "aria-label": y,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (C) => g[y].run()
        }, c(g[y].label), 9, $m))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: w[0] || (w[0] = (y) => s.value = !s.value)
        }, " Preview ", 8, wm)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, Sm)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: w[1] || (w[1] = (y) => r("update:modelValue", y.target.value))
      }, null, 40, Cm))
    ]));
  }
}), Bm = { class: "space-y-1" }, _m = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, Am = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, Pm = ["id", "value", "rows", "disabled"], zm = { class: "text-muted-foreground text-xs font-normal" }, Om = {
  key: 0,
  class: "text-destructive text-xs"
}, Lm = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!0), d = x(() => a.modelValue ?? ""), u = x(() => Math.max(d.value.split(`
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
    function v(h) {
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
    return (h, w) => (t(), n("div", Bm, [
      o("div", _m, [
        o("div", Am, [
          (t(!0), n(z, null, V(u.value, (y) => (t(), n("div", { key: y }, c(y), 1))), 128))
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
        }, null, 40, Pm)
      ]),
      o("p", zm, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", Om, c(f.value), 1)) : $("", !0)
    ]));
  }
}), Vm = { class: "space-y-3" }, jm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, Tm = { class: "text-sm font-medium" }, Dm = { class: "flex items-center gap-1" }, Em = ["disabled", "onClick"], Im = ["disabled", "onClick"], Fm = ["disabled", "onClick"], Nm = { class: "space-y-3 p-3" }, Rm = { class: "flex flex-wrap items-center gap-2" }, Um = ["disabled", "onClick"], Hm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, ZC = /* @__PURE__ */ O({
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
    function v(w, y) {
      const C = w + y;
      if (C < 0 || C >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(w, 1);
      M.splice(C, 0, S), u(M);
    }
    function h(w, y, C) {
      u(
        s.value.map(
          (M, S) => S === w ? { ...M, data: { ...M.data, [y]: C } } : M
        )
      );
    }
    return (w, y) => (t(), n("div", Vm, [
      (t(!0), n(z, null, V(s.value, (C, M) => (t(), n("div", {
        key: `${C.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", jm, [
          o("span", Tm, c(i.value[C.type]?.label ?? C.type), 1),
          o("div", Dm, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => v(M, -1)
            }, " ↑ ", 8, Em),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => v(M, 1)
            }, " ↓ ", 8, Im),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => g(M)
            }, " Remove ", 8, Fm)
          ])
        ]),
        o("div", Nm, [
          (t(!0), n(z, null, V(i.value[C.type]?.fields ?? [], (S) => (t(), T(Xe, {
            key: S.key,
            field: S,
            value: C.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (_) => h(M, S.key, _)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Rm, [
        (t(!0), n(z, null, V(e.blocks, (C) => (t(), n("button", {
          key: C.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => f(C.type)
        }, " + " + c(C.label), 9, Um))), 128)),
        d.value ? (t(), n("span", Hm, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), Km = ["name", "value", "checked", "disabled", "onChange"], qm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Gm = /* @__PURE__ */ O({
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
          onChange: (f) => r("update:modelValue", u.value)
        }, null, 40, Km),
        N(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", qm, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), Wm = ["value", "checked", "disabled", "onChange"], Zm = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Jm = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, V(e.options, (v) => (t(), n("label", {
        key: String(v.value),
        class: P(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: v.value,
          checked: i(v),
          disabled: e.disabled,
          onChange: (h) => d(v)
        }, null, 40, Wm),
        N(" " + c(v.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Zm, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), Ym = { class: "flex flex-col gap-1.5" }, Xm = ["aria-label", "onClick"], Qm = ["placeholder", "disabled", "maxlength"], ep = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, tp = ["onClick"], ap = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, np = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTagsInput",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = x(
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
    function v(h) {
      if (h.key === "Enter" || h.key === ",") {
        h.preventDefault(), f(s.value);
        return;
      }
      h.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (h, w) => (t(), n("div", Ym, [
      o("div", {
        class: P(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, V(i.value, (y, C) => (t(), n("span", {
          key: `${y}-${C}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(c(y) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${y}`,
            onClick: (M) => g(C)
          }, " × ", 8, Xm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": w[0] || (w[0] = (y) => s.value = y),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: v,
          onBlur: w[1] || (w[1] = (y) => f(s.value))
        }, null, 40, Qm), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", ep, [
        w[2] || (w[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, V(u.value, (y) => (t(), n("button", {
          key: y,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (C) => f(y)
        }, c(y), 9, tp))), 128))
      ])) : $("", !0),
      d.value ? (t(), n("p", ap, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), lp = 4.5, ba = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ja(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function zt(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function Rt(e) {
  const [l, a, r] = Ja(e);
  return 0.2126 * zt(l) + 0.7152 * zt(a) + 0.0722 * zt(r);
}
function Ya(e, l) {
  const a = Rt(e), r = Rt(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function op(e, l, a) {
  if (!ba.test(e) || !ba.test(l))
    return e;
  const r = Rt(l) > 0.5, s = r ? 0 : 255;
  let i = Ja(e);
  for (let d = 0; d <= 20; d++) {
    const u = sp(i);
    if (Ya(u, l) >= a)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function sp(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const rp = { class: "flex flex-col gap-2" }, ip = { class: "flex items-center gap-2" }, dp = {
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
}, up = ["value", "disabled", "aria-label"], cp = ["value", "disabled", "placeholder"], fp = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, mp = ["aria-label", "title", "onClick"], pp = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, vp = /* @__PURE__ */ O({
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
      const M = C.startsWith("#") ? C : `#${C}`;
      return s.test(M) ? M.toLowerCase() : C;
    }
    function f(y) {
      r("update:modelValue", u(y.target.value));
    }
    const g = x(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Ya(i.value, a.field.contrastBackground)), v = x(() => a.field.contrastMinRatio ?? lp), h = x(() => g.value !== null && g.value < v.value);
    function w() {
      a.field.contrastBackground && r(
        "update:modelValue",
        op(i.value, a.field.contrastBackground, v.value)
      );
    }
    return (y, C) => (t(), n("div", rp, [
      o("div", ip, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: C[0] || (C[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, up)) : (t(), n("span", dp)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, cp)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", fp, [
        (t(!0), n(z, null, V(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: P(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, mp))), 128))
      ])) : $("", !0),
      h.value ? (t(), n("p", pp, [
        o("span", null, " This fails contrast at " + c(g.value.toFixed(1)) + ":1 - it needs at least " + c(v.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: w
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), gp = ["aria-disabled"], hp = /* @__PURE__ */ O({
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
      }).addTo(i), v(), h(), a.pickable && !a.disabled && i.on("click", (y) => {
        r("update:modelValue", {
          [a.latKey]: Number(y.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(y.latlng.lng.toFixed(6))
        });
      });
    }
    function v() {
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
    }, null, 12, gp));
  }
}), bp = { class: "flex flex-col gap-2" }, yp = { class: "text-muted-foreground text-xs font-normal" }, xp = /* @__PURE__ */ O({
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
    return (u, f) => (t(), n("div", bp, [
      D(hp, {
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
      o("p", yp, [
        N(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), kp = { class: "flex flex-col gap-2" }, $p = ["width", "height"], wp = ["value", "disabled"], Cp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Sp = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = x(() => {
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
    }), (f, g) => (t(), n("div", kp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, $p),
      e.field.from ? (t(), n("p", Cp, "From " + c(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (v) => r("update:modelValue", v.target.value))
      }, null, 40, wp))
    ]));
  }
}), Mp = { class: "flex flex-col gap-2" }, Bp = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, _p = ["aria-label"], Ap = {
  key: 0,
  class: "text-destructive text-xs"
}, Pp = ["value", "disabled"], zp = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, Op = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(null), d = x(() => {
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
        } catch (v) {
          i.value = v instanceof Error ? v.message : "Could not render barcode";
        }
    }
    return ve(() => {
      f();
    }), me([d, u], () => {
      f();
    }), (g, v) => (t(), n("div", Mp, [
      o("div", Bp, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, _p))
      ]),
      i.value ? (t(), n("p", Ap, c(i.value), 1)) : $("", !0),
      e.field.from ? (t(), n("p", zp, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: v[0] || (v[0] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, Pp))
    ]));
  }
}), Lp = { class: "mr-2 inline-block w-3 opacity-60" }, Vp = {
  key: 0,
  class: "text-muted-foreground p-3"
}, jp = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, V(i.value, (f, g) => (t(), n("div", {
        key: g,
        class: P(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", Lp, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        N(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", Vp, "No differences.")) : $("", !0)
    ], 4));
  }
}), Tp = { class: "flex flex-col gap-3" }, Dp = { class: "flex items-center justify-between gap-2" }, Ep = { class: "text-sm font-medium" }, Ip = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, Fp = { class: "grid grid-cols-7 gap-1" }, Np = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Rp = ["title"], JC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = x(() => a.value.getFullYear()), s = x(() => a.value.getMonth()), i = x(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = x(() => {
      const v = /* @__PURE__ */ new Map();
      for (const h of l.events ?? []) {
        const w = v.get(h.date) ?? [];
        w.push(h), v.set(h.date, w);
      }
      return v;
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
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (v, h) => (t(), n("div", Tp, [
      o("div", Dp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", Ep, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", Ip, [
        (t(), n(z, null, V(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (w) => o("span", { key: w }, c(w), 1)), 64))
      ]),
      o("div", Fp, [
        (t(!0), n(z, null, V(u.value, (w) => (t(), n("div", {
          key: w.key,
          class: P(["border-border/60 min-h-16 rounded-md border p-1", w.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          w.day ? (t(), n("p", Np, c(w.day), 1)) : $("", !0),
          (t(!0), n(z, null, V(w.events.slice(0, 3), (y, C) => (t(), n("p", {
            key: `${w.key}-${C}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: y.label
          }, c(y.label), 9, Rp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Up = { class: "flex items-center gap-3" }, Hp = ["min", "max", "step", "value", "disabled", "aria-label"], Kp = { class: "flex shrink-0 items-center gap-1" }, qp = ["min", "max", "step", "value", "disabled"], Gp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Wp = /* @__PURE__ */ O({
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
      const v = Number(a.modelValue);
      return Number.isFinite(v) ? v : s.value;
    }), f = x(
      () => a.modelValue === null || a.modelValue === void 0 || a.modelValue === ""
    );
    function g(v) {
      if (v === "") {
        r("update:modelValue", null);
        return;
      }
      const h = Number(v);
      r("update:modelValue", Number.isFinite(h) ? h : null);
    }
    return (v, h) => (t(), n("div", Up, [
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
      }, null, 40, Hp),
      o("div", Kp, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: h[1] || (h[1] = (w) => g(w.target.value))
        }, null, 40, qp),
        e.field.unit ? (t(), n("span", Gp, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Ot(e, l) {
  ft.set(e, l);
}
function Zp(e) {
  return ft.get(e);
}
function YC(e) {
  return ft.has(e);
}
function Jp() {
  return [...ft.keys()].sort();
}
function XC() {
  ft.clear();
}
const Yp = ["name", "value", "checked", "disabled", "onChange"], Xp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Qp = { class: "whitespace-nowrap" }, ev = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, tv = ["name", "value", "checked", "disabled", "onChange"], av = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, nv = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, lv = { class: "text-center text-xs font-medium" }, ov = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, sv = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, rv = /* @__PURE__ */ O({
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
      () => a.field.preview ? Zp(a.field.preview) : void 0
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
    return (g, v) => d.value ? (t(), n("div", {
      key: 0,
      role: "radiogroup",
      class: P(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, V(e.options, (h) => (t(), n("label", {
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
        }, null, 40, Yp),
        v[0] || (v[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Xp, [
          (t(), T(Me(s.value), {
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", Qp, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", ev, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: P(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, V(e.options, (h) => (t(), n("label", {
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
        }, null, 40, tv),
        v[1] || (v[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", av, [
          s.value ? (t(), T(Me(s.value), {
            key: 0,
            value: h.value,
            label: h.label,
            selected: f(h)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", nv, " no preview ")) : $("", !0)
        ]),
        o("span", lv, c(h.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", ov, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", sv, [
        v[2] || (v[2] = N(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        N(". Registered: " + c(k(Jp)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), iv = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, dv = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", iv, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), uv = { class: "flex flex-col items-center gap-1 text-center" }, cv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Xa = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", uv, [
      o("div", {
        class: P(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", cv, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), fv = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, mv = { class: "flex items-center gap-3" }, pv = ["src"], vv = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, gv = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, hv = {
  key: 0,
  class: "text-right text-sm"
}, bv = { class: "text-neutral-500" }, yv = { class: "tabular-nums" }, xv = { key: 1 }, kv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, $v = { class: "mt-2 font-medium" }, wv = { key: 2 }, Cv = { class: "w-full text-sm" }, Sv = { class: "w-full py-3 pr-2" }, Mv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Bv = { key: 0 }, _v = ["colspan"], Av = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, Pv = { class: "w-64 text-sm" }, zv = { class: "tabular-nums" }, Ov = {
  key: 3,
  class: "py-2"
}, Lv = { key: 4 }, Vv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, jv = { class: "mt-2 flex flex-col gap-1 text-sm" }, Tv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, Dv = { key: 0 }, Ev = {
  key: 1,
  class: "mt-1"
}, Iv = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, Fv = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("article", fv, [
      o("div", mv, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, pv)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, V(e.document.blocks, (v, h) => (t(), n(z, { key: h }, [
        v.type === "header" ? (t(), n("header", {
          key: 0,
          class: "flex items-start justify-between gap-8 border-b pb-4",
          style: se({ borderColor: a() })
        }, [
          o("div", null, [
            o("h1", {
              class: "text-2xl font-semibold tracking-tight",
              style: se({ color: a() })
            }, c(v.title), 5),
            v.subtitle ? (t(), n("p", vv, c(v.subtitle), 1)) : $("", !0),
            v.reference ? (t(), n("p", gv, c(v.reference), 1)) : $("", !0)
          ]),
          r(v).length ? (t(), n("dl", hv, [
            (t(!0), n(z, null, V(r(v), (w, y) => (t(), n("div", {
              key: y,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", bv, c(w.label), 1),
              o("dd", yv, c(w.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : v.type === "party" ? (t(), n("section", xv, [
          o("h2", kv, c(v.heading), 1),
          o("p", $v, c(v.name), 1),
          (t(!0), n(z, null, V(d(v.lines), (w, y) => (t(), n("p", {
            key: y,
            class: "text-sm text-neutral-600"
          }, c(w), 1))), 128))
        ])) : v.type === "lines" ? (t(), n("section", wv, [
          o("table", Cv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, V(d(v.columns), (w, y) => (t(), n("th", {
                  key: y,
                  class: P(["pb-2 font-medium", y > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(w), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, V(s(v), (w, y) => (t(), n("tr", {
                key: y,
                class: "border-b border-neutral-200"
              }, [
                o("td", Sv, [
                  o("p", null, c(w.description), 1),
                  w.detail ? (t(), n("p", Mv, c(w.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, V(w.cells, (C, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(C), 1))), 128))
              ]))), 128)),
              s(v).length === 0 ? (t(), n("tr", Bv, [
                o("td", {
                  colspan: d(v.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(v.empty), 9, _v)
              ])) : $("", !0)
            ])
          ]),
          i(v).length ? (t(), n("div", Av, [
            o("dl", Pv, [
              (t(!0), n(z, null, V(i(v), (w, y) => (t(), n("div", {
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
                o("dd", zv, c(w.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : v.type === "code" ? (t(), n("section", Ov, [
          D(Xa, {
            code: u(v.code),
            caption: u(v.caption),
            style: se(u(v.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : v.type === "steps" ? (t(), n("section", Lv, [
          o("h2", Vv, c(v.heading), 1),
          o("ol", jv, [
            (t(!0), n(z, null, V(d(v.items), (w, y) => (t(), n("li", {
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
        ])) : v.type === "note" ? (t(), n("p", {
          key: 5,
          class: P(["text-sm", v.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(v.emphasis ? { color: a() } : void 0)
        }, c(v.text), 7)) : v.type === "footer" ? (t(), n("footer", Tv, [
          v.text ? (t(), n("p", Dv, c(v.text), 1)) : $("", !0),
          d(v.contacts).length ? (t(), n("p", Ev, c(d(v.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", Iv, " This document contains a “" + c(v.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Nv = ["aria-label", "title"], Rv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Uv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, QC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ka(), r = x(() => l.value.theme === "dark");
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
      (t(), n("svg", Rv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Uv))
      ]))
    ], 8, Nv));
  }
}), Hv = ["width", "height"], Kv = { key: 0 }, qv = ["x1", "x2", "y1", "y2"], Gv = ["x", "y"], Wv = ["x1", "x2", "y1", "y2"], Zv = ["x", "y"], Jv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], Yv = ["x", "y", "width", "height", "fill", "fill-opacity"], Xv = ["x", "y"], Qv = ["x", "y"], eg = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, tg = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, ag = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, ng = { class: "text-xs font-semibold tabular-nums" }, lg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, og = { class: "text-muted-foreground" }, ya = 5.6, e8 = /* @__PURE__ */ O({
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
      const j = l.thresholds.find((J) => B < J.max);
      return r(j ? j.color : l.aboveColor);
    }
    const i = R(null), d = R(560), u = R(null);
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
    ], v = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? g[j % g.length]
    }))), h = x(() => v.value[0]?.points.map((B) => B.label) ?? []), w = x(() => h.value.length), y = x(() => l.orientation === "horizontal"), C = x(() => Math.max(0, ...h.value.map((B) => B.length))), M = x(() => {
      if (!y.value)
        return l.showAxis ? 44 : 8;
      const B = C.value * ya + 16;
      return Math.round(Math.min(Math.max(60, B), d.value * 0.4));
    }), S = x(() => Math.max(4, Math.floor((M.value - 16) / ya)));
    function _(B) {
      return B.length <= S.value ? B : `${B.slice(0, S.value - 1)}…`;
    }
    const m = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), p = x(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), b = (B) => l.format ? l.format(B) : A(B);
    function A(B) {
      return Math.abs(B) >= 1e6 ? `${(B / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(B) >= 1e3 ? `${(B / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(B * 100) / 100);
    }
    const E = x(() => {
      const B = h.value.map(
        (ge, ye) => l.stacked ? v.value.reduce((le, Y) => le + Math.max(0, Y.points[ye]?.value ?? 0), 0) : Math.max(...v.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }), I = x(
      () => (y.value ? p.value.h : p.value.w) / Math.max(1, w.value)
    ), ae = x(() => I.value * 0.68), H = x(
      () => l.stacked || v.value.length <= 1 ? ae.value : ae.value / v.value.length
    ), K = x(() => {
      const B = [], F = new Array(w.value).fill(0);
      return v.value.forEach((j, J) => {
        j.points.forEach((ge, ye) => {
          const Y = Math.max(0, ge.value) / E.value * (y.value ? p.value.w : p.value.h), ee = (y.value ? m.value.top : m.value.left) + ye * I.value + (I.value - ae.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          B.push(
            y.value ? {
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
              y: m.value.top + p.value.h - Y - F[ye],
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
      }), B;
    }), q = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        value: E.value * (y.value ? B : 1 - B),
        x: m.value.left + p.value.w * B,
        y: m.value.top + p.value.h * B
      }))
    ), oe = x(() => Math.max(1, Math.ceil(w.value / (y.value ? 14 : 10))));
    function ne(B) {
      return B === w.value - 1 || B % oe.value === 0;
    }
    function Z(B) {
      return (y.value ? m.value.top : m.value.left) + B * I.value + I.value / 2;
    }
    const G = x(() => u.value === null ? null : {
      label: h.value[u.value],
      rows: v.value.map((B) => ({
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
          onMouseleave: F[0] || (F[0] = (j) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", Kv, [
            y.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.x}`,
                x1: j.x,
                x2: j.x,
                y1: m.value.top,
                y2: m.value.top + p.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, qv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.x}`,
                x: j.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, Gv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("line", {
                key: `g-${j.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: j.y,
                y2: j.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Wv))), 128)),
              (t(!0), n(z, null, V(q.value, (j) => (t(), n("text", {
                key: `gt-${j.y}`,
                x: m.value.left - 8,
                y: j.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(A(j.value)), 9, Zv))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, V(h.value, (j, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: y.value ? m.value.left : m.value.left + J * I.value,
            y: y.value ? m.value.top + J * I.value : m.value.top,
            width: y.value ? p.value.w : I.value,
            height: y.value ? I.value : p.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, Jv))), 128)),
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
          }, null, 8, Yv))), 128)),
          y.value ? (t(!0), n(z, { key: 1 }, V(h.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: m.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(c(_(j)) + " ", 1),
            o("title", null, c(j), 1)
          ], 8, Xv)), [
            [Ue, ne(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, V(h.value, (j, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(j), 9, Qv)), [
            [Ue, ne(J)]
          ])), 128))
        ], 40, Hv)),
        G.value ? (t(), n("div", eg, [
          o("p", tg, c(G.value.label), 1),
          (t(!0), n(z, null, V(G.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", ag, c(j.name || "Value"), 1),
            o("span", ng, c(b(j.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && v.value.length > 1 ? (t(), n("div", lg, [
          (t(!0), n(z, null, V(v.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", og, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), sg = ["width", "height"], rg = ["id"], ig = ["stop-color"], dg = ["stop-color"], ug = { key: 0 }, cg = ["x1", "x2", "y1", "y2"], fg = ["x", "y"], mg = ["x", "y"], pg = ["x1", "x2", "y1", "y2"], vg = ["d", "fill"], gg = ["d", "stroke", "stroke-dasharray"], hg = ["cx", "cy", "fill"], bg = { key: 1 }, yg = ["x1", "x2", "y1", "y2"], xg = ["cx", "cy", "fill"], kg = ["x", "y"], $g = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, wg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Cg = { class: "text-xs font-semibold tabular-nums" }, Sg = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Mg = { class: "text-muted-foreground" }, Bg = /* @__PURE__ */ O({
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
    const l = e, a = x(() => g.value.some((B) => B.axis === "right")), r = R(null), s = R(560), i = R(null);
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
    ], f = Math.random().toString(36).slice(2, 9), g = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, j) => ({
      ...F,
      color: F.color ?? u[j % u.length]
    }))), v = x(() => g.value[0]?.points.map((B) => B.label) ?? []), h = x(() => v.value.length), w = x(() => ({
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
    function M(B) {
      const F = Math.max(...B, 0);
      if (F <= 0)
        return 1;
      const j = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * j) ?? 10) * j;
    }
    const S = x(
      () => M(
        g.value.filter((B) => B.axis !== "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), _ = x(
      () => M(
        g.value.filter((B) => B.axis === "right").flatMap((B) => B.points.map((F) => F.value))
      )
    ), m = x(() => ({
      w: Math.max(1, s.value - w.value.left - w.value.right),
      h: Math.max(1, l.height - w.value.top - w.value.bottom)
    }));
    function p(B) {
      return w.value.left + (h.value <= 1 ? 0 : B / (h.value - 1) * m.value.w);
    }
    function b(B, F = "left") {
      const j = F === "right" ? _.value : S.value;
      return w.value.top + m.value.h - B / j * m.value.h;
    }
    const A = x(
      () => g.value.map((B) => {
        const F = B.points.map((J, ge) => ({
          ...J,
          x: p(ge),
          y: b(J.value, B.axis ?? "left")
        })), j = B.stepped ? E(F) : I(F);
        return { ...B, pts: F, line: j, area: ae(j, F) };
      })
    );
    function E(B) {
      if (B.length === 0)
        return "";
      let F = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let j = 1; j < B.length; j++)
        F += ` L${B[j].x.toFixed(2)},${B[j - 1].y.toFixed(2)} L${B[j].x.toFixed(2)},${B[j].y.toFixed(2)}`;
      return F;
    }
    function I(B) {
      const F = B.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${B[0].x},${B[0].y}`;
      const j = [], J = [];
      for (let le = 0; le < F - 1; le++)
        j[le] = B[le + 1].x - B[le].x, J[le] = j[le] === 0 ? 0 : (B[le + 1].y - B[le].y) / j[le];
      const ge = [J[0]];
      for (let le = 1; le < F - 1; le++)
        if (J[le - 1] * J[le] <= 0)
          ge[le] = 0;
        else {
          const Y = 2 * j[le] + j[le - 1], ee = j[le] + 2 * j[le - 1];
          ge[le] = (Y + ee) / (Y / J[le - 1] + ee / J[le]);
        }
      ge[F - 1] = J[F - 2];
      let ye = `M${B[0].x.toFixed(2)},${B[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const Y = j[le] / 3;
        ye += ` C${(B[le].x + Y).toFixed(2)},${(B[le].y + ge[le] * Y).toFixed(2)} ${(B[le + 1].x - Y).toFixed(2)},${(B[le + 1].y - ge[le + 1] * Y).toFixed(2)} ${B[le + 1].x.toFixed(2)},${B[le + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function ae(B, F) {
      if (F.length === 0)
        return "";
      const j = w.value.top + m.value.h;
      return `${B} L${F[F.length - 1].x.toFixed(2)},${j} L${F[0].x.toFixed(2)},${j} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + m.value.h * B,
        value: S.value * (1 - B)
      }))
    ), K = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((B) => ({
        y: w.value.top + m.value.h * B,
        value: _.value * (1 - B)
      }))
    ), q = x(() => Math.max(1, Math.ceil(h.value / 8)));
    function oe(B) {
      return B === h.value - 1 || B % q.value === 0;
    }
    function ne(B) {
      const F = B.currentTarget.getBoundingClientRect(), j = B.clientX - F.left - w.value.left, J = h.value <= 1 ? 1 : m.value.w / (h.value - 1);
      i.value = Math.min(h.value - 1, Math.max(0, Math.round(j / J)));
    }
    const Z = x(() => {
      if (i.value === null || h.value === 0)
        return null;
      const B = i.value;
      return {
        i: B,
        x: p(B),
        label: v.value[B],
        rows: A.value.map((F) => ({
          name: F.name,
          color: F.color,
          value: F.points[B]?.value ?? 0,
          y: F.pts[B]?.y ?? 0
        }))
      };
    }), G = x(() => {
      if (!Z.value)
        return {};
      const B = Z.value.x > s.value * 0.6;
      return {
        left: `${Z.value.x}px`,
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
          onMousemove: ne,
          onMouseleave: F[0] || (F[0] = (j) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("linearGradient", {
              id: `pk-fill-${k(f)}-${J}`,
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
              }, null, 8, ig),
              o("stop", {
                offset: "100%",
                "stop-color": j.color,
                "stop-opacity": "0.01"
              }, null, 8, dg)
            ], 8, rg))), 128))
          ]),
          e.showAxis ? (t(), n("g", ug, [
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("line", {
              key: j.y,
              x1: w.value.left,
              x2: s.value - w.value.right,
              y1: j.y,
              y2: j.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, cg))), 128)),
            (t(!0), n(z, null, V(H.value, (j) => (t(), n("text", {
              key: `t-${j.y}`,
              x: w.value.left - 8,
              y: j.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, fg))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, V(K.value, (j) => (t(), n("text", {
              key: `rt-${j.y}`,
              x: s.value - w.value.right + 8,
              y: j.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(C(j.value)), 9, mg))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, V(v.value, (j, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: p(J),
            x2: p(J),
            y1: w.value.top,
            y2: w.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, pg)), [
            [Ue, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            j.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: j.area,
              fill: `url(#pk-fill-${k(f)}-${J})`
            }, null, 8, vg)) : $("", !0),
            o("path", {
              d: j.line,
              fill: "none",
              stroke: j.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": j.dashed ? "6 4" : void 0
            }, null, 8, gg),
            j.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: j.pts[0].x,
              cy: j.pts[0].y,
              r: "3",
              fill: j.color
            }, null, 8, hg)) : $("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", bg, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: w.value.top,
              y2: w.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, yg),
            (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: j.y,
              r: "4",
              fill: j.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, xg))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, V(v.value, (j, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: p(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(j), 9, kg)), [
            [Ue, oe(J)]
          ])), 128))
        ], 40, sg)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(G.value)
        }, [
          o("p", $g, c(Z.value.label), 1),
          (t(!0), n(z, null, V(Z.value.rows, (j, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", wg, c(j.name || "Value"), 1),
            o("span", Cg, c(y(j.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", Sg, [
          (t(!0), n(z, null, V(A.value, (j, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: j.color })
            }, null, 4),
            o("span", Mg, c(j.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), _g = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, Ag = { class: "text-muted-foreground text-[11px] capitalize" }, Pg = { class: "text-sm font-semibold tabular-nums" }, zg = {
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
    return (l, a) => (t(), n("div", _g, [
      o("p", Ag, c(e.label), 1),
      o("p", Pg, [
        N(c(e.value) + " ", 1),
        e.share ? (t(), n("span", zg, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), Og = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, Lg = ["width", "height", "viewBox", "aria-label"], Vg = ["d", "fill", "fill-opacity", "onMouseenter"], jg = ["x", "y"], Tg = ["x", "y"], Dg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Eg = ["onMouseenter"], Ig = { class: "min-w-0 flex-1 truncate capitalize" }, Fg = { class: "tabular-nums font-medium" }, Ng = { class: "text-muted-foreground w-9 text-right tabular-nums" }, t8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((S, _) => S + _.value, 0)), s = R(null), i = x(() => l.height), d = x(() => i.value / 2 - 4), u = x(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(S) {
      return a[S % a.length];
    }
    function g(S) {
      return 1 - Math.min(0.55, Math.floor(S / a.length) * 0.28);
    }
    const v = x(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let _ = -Math.PI / 2;
      return l.data.map((m, p) => {
        const b = m.value / r.value, A = b * Math.PI * 2, E = _, I = _ + A;
        return _ = I, {
          ...m,
          share: b,
          colour: f(p),
          opacity: g(p),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: b >= 0.9999 ? y(S) : w(S, E, I, d.value, u.value)
        };
      });
    });
    function h(S, _, m) {
      return `${(S + Math.cos(_) * m).toFixed(2)},${(S + Math.sin(_) * m).toFixed(2)}`;
    }
    function w(S, _, m, p, b) {
      const A = m - _ > Math.PI ? 1 : 0;
      return b <= 0 ? `M${S},${S} L${h(S, _, p)} A${p},${p} 0 ${A} 1 ${h(S, m, p)} Z` : [
        `M${h(S, _, p)}`,
        `A${p},${p} 0 ${A} 1 ${h(S, m, p)}`,
        `L${h(S, m, b)}`,
        `A${b},${b} 0 ${A} 0 ${h(S, _, b)}`,
        "Z"
      ].join(" ");
    }
    function y(S) {
      const _ = d.value, m = u.value, p = [
        `M${S - _},${S}`,
        `A${_},${_} 0 1 1 ${S + _},${S}`,
        `A${_},${_} 0 1 1 ${S - _},${S}`,
        "Z"
      ];
      return m <= 0 ? p.join(" ") : [
        ...p,
        `M${S - m},${S}`,
        `A${m},${m} 0 1 0 ${S + m},${S}`,
        `A${m},${m} 0 1 0 ${S - m},${S}`,
        "Z"
      ].join(" ");
    }
    const C = (S) => l.format ? l.format(S) : new Intl.NumberFormat().format(S), M = (S) => `${(S * 100).toFixed(S < 0.01 ? 2 : 0)}%`;
    return (S, _) => r.value <= 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Og, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${C(r.value)}`
      }, [
        (t(!0), n(z, null, V(v.value, (m, p) => (t(), n("path", {
          key: p,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === p ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (b) => s.value = p,
          onMouseleave: _[0] || (_[0] = (b) => s.value = null)
        }, null, 40, Vg))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(C(s.value === null ? r.value : v.value[s.value].value)), 9, jg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : v.value[s.value].label), 9, Tg)
        ], 64)) : $("", !0)
      ], 8, Lg)),
      o("ul", Dg, [
        (t(!0), n(z, null, V(v.value, (m, p) => (t(), n("li", {
          key: p,
          class: P(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === p ? "bg-muted" : ""]),
          onMouseenter: (b) => s.value = p,
          onMouseleave: _[1] || (_[1] = (b) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", Ig, c(m.label), 1),
          o("span", Fg, c(C(m.value)), 1),
          o("span", Ng, c(M(m.share)), 1)
        ], 42, Eg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(mt, {
        key: 0,
        label: v.value[s.value].label,
        value: C(v.value[s.value].value),
        share: M(v.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Rg = ["width", "height", "viewBox", "aria-label"], Ug = { class: "text-border" }, Hg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], Kg = { class: "fill-muted-foreground text-[10px]" }, qg = ["x", "y"], Gg = ["x", "y"], Wg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Zg = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, a8 = /* @__PURE__ */ O({
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
    const u = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (q, oe) => oe.color ?? a[q % a.length], g = x(() => u.value.flatMap((q) => q.points)), v = x(() => g.value.some((q) => typeof q.r == "number")), h = { top: 12, right: 16, bottom: 32, left: 48 }, w = x(() => Math.max(10, s.value - h.left - h.right)), y = x(() => Math.max(10, l.height - h.top - h.bottom));
    function C(q) {
      if (q.length === 0)
        return [0, 1];
      const oe = Math.min(...q), ne = Math.max(...q), Z = ne - oe || Math.abs(ne) || 1;
      return [oe - Z * 0.08, ne + Z * 0.08];
    }
    const M = x(() => C(g.value.map((q) => q.x))), S = x(() => C(g.value.map((q) => q.y))), _ = (q) => {
      const [oe, ne] = M.value;
      return h.left + (q - oe) / (ne - oe) * w.value;
    }, m = (q) => {
      const [oe, ne] = S.value;
      return h.top + y.value - (q - oe) / (ne - oe) * y.value;
    }, p = x(() => Math.max(...g.value.map((q) => q.r ?? 0), 0));
    function b(q) {
      if (!v.value || !p.value)
        return 4;
      const oe = Math.max(0, q.r ?? 0) / p.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function A([q, oe]) {
      return Array.from({ length: 5 }, (ne, Z) => q + (oe - q) / 4 * Z);
    }
    const E = x(() => A(M.value)), I = x(() => A(S.value)), ae = (q) => l.formatX?.(q) ?? String(Math.round(q * 100) / 100), H = (q) => l.formatY?.(q) ?? String(Math.round(q * 100) / 100), K = x(() => {
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
        "aria-label": v.value ? "Bubble chart" : "Scatter chart"
      }, [
        o("g", Ug, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: h.left,
            x2: h.left + w.value,
            y1: m(ne),
            y2: m(ne),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Hg))), 128))
        ]),
        o("g", Kg, [
          (t(!0), n(z, null, V(I.value, (ne, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: h.left - 8,
            y: m(ne) + 3,
            "text-anchor": "end"
          }, c(H(ne)), 9, qg))), 128)),
          (t(!0), n(z, null, V(E.value, (ne, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: _(ne),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(ae(ne)), 9, Gg))), 128))
        ]),
        (t(!0), n(z, null, V(u.value, (ne, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, V(ne.points, (G, B) => (t(), n("circle", {
            key: `p-${Z}-${B}`,
            cx: _(G.x),
            cy: m(G.y),
            r: b(G),
            fill: f(Z, ne),
            "fill-opacity": v.value ? 0.55 : 0.85,
            stroke: f(Z, ne),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== B) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: B },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, Wg))), 128))
        ]))), 128))
      ], 8, Rg)),
      K.value ? (t(), T(mt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${ae(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: v.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", Zg, [
        (t(!0), n(z, null, V(u.value, (ne, Z) => (t(), n("span", {
          key: `l-${Z}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: f(Z, ne) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + c(ne.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), Jg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Yg = ["width", "height", "viewBox"], Xg = ["points"], Qg = ["x1", "y1", "x2", "y2"], eh = ["points", "fill", "stroke"], th = ["cx", "cy", "fill", "onMouseenter"], ah = ["x", "y", "text-anchor"], nh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, lh = { class: "truncate" }, n8 = /* @__PURE__ */ O({
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
      () => l.series.map((m, p) => ({
        ...m,
        color: m.color ?? a[p % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((m) => m.label) ?? []), i = x(() => s.value.length), d = x(() => l.height), u = x(() => d.value / 2), f = x(() => d.value / 2 - 34), g = x(() => {
      const m = Math.max(...r.value.flatMap((A) => A.points.map((E) => E.value)), 0);
      if (m <= 0)
        return 1;
      const p = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((A) => m <= A * p) ?? 10) * p;
    });
    function v(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function h(m, p) {
      const b = v(m);
      return {
        x: u.value + Math.cos(b) * f.value * p,
        y: u.value + Math.sin(b) * f.value * p
      };
    }
    function w(m) {
      return Array.from({ length: i.value }, (p, b) => {
        const A = h(b, m);
        return `${A.x.toFixed(2)},${A.y.toFixed(2)}`;
      }).join(" ");
    }
    const y = x(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: w(m) }))), C = x(
      () => r.value.map((m) => {
        const p = m.points.map((b) => Math.max(0, b.value) / g.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: p.map((b, A) => {
            const E = h(A, b);
            return `${E.x.toFixed(2)},${E.y.toFixed(2)}`;
          }).join(" "),
          dots: p.map((b, A) => h(A, b))
        };
      })
    ), M = x(
      () => s.value.map((m, p) => {
        const b = v(p), A = u.value + Math.cos(b) * (f.value + 14), E = u.value + Math.sin(b) * (f.value + 14), I = Math.cos(b);
        return {
          label: m,
          x: A,
          y: E + 3,
          anchor: Math.abs(I) < 0.2 ? "middle" : I > 0 ? "start" : "end"
        };
      })
    ), S = R(null), _ = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, p) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Jg, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(y.value, (b) => (t(), n("polygon", {
          key: b.f,
          points: b.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Xg))), 128)),
        (t(!0), n(z, null, V(s.value, (b, A) => (t(), n("line", {
          key: `spoke-${A}`,
          x1: u.value,
          y1: u.value,
          x2: h(A, 1).x,
          y2: h(A, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Qg))), 128)),
        (t(!0), n(z, null, V(C.value, (b, A) => (t(), n("g", {
          key: `s-${A}`
        }, [
          o("polygon", {
            points: b.outline,
            fill: b.color,
            "fill-opacity": "0.16",
            stroke: b.color,
            "stroke-width": "2"
          }, null, 8, eh),
          (t(!0), n(z, null, V(b.dots, (E, I) => (t(), n("circle", {
            key: I,
            cx: E.x,
            cy: E.y,
            r: "3",
            fill: b.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (ae) => S.value = {
              series: b.name,
              axis: s.value[I],
              value: b.values[I]?.value ?? 0
            },
            onMouseleave: p[0] || (p[0] = (ae) => S.value = null)
          }, null, 40, th))), 128))
        ]))), 128)),
        (t(!0), n(z, null, V(M.value, (b, A) => (t(), n("text", {
          key: `l-${A}`,
          x: b.x,
          y: b.y,
          "text-anchor": b.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(b.label), 9, ah))), 128))
      ], 8, Yg)),
      e.showLegend ? (t(), n("ul", nh, [
        (t(!0), n(z, null, V(r.value, (b, A) => (t(), n("li", {
          key: A,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: b.color })
          }, null, 4),
          o("span", lh, c(b.name), 1)
        ]))), 128))
      ])) : $("", !0),
      S.value ? (t(), T(mt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: _(S.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), oh = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, sh = ["width", "height", "viewBox"], rh = ["cx", "cy", "r"], ih = ["d", "fill", "fill-opacity", "onMouseenter"], dh = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, uh = { class: "min-w-0 flex-1 truncate capitalize" }, ch = { class: "font-medium tabular-nums" }, l8 = /* @__PURE__ */ O({
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
    ], r = R(null), s = x(() => l.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...l.data.map((w) => Math.max(0, w.value)), 0)), f = x(() => {
      const w = l.data.length;
      if (w === 0 || u.value <= 0)
        return [];
      const y = Math.PI * 2 / w;
      return l.data.map((C, M) => {
        const S = Math.sqrt(Math.max(0, C.value) / u.value), _ = d.value * S, m = M * y - Math.PI / 2, p = m + y;
        return {
          ...C,
          color: a[M % a.length],
          share: u.value === 0 ? 0 : C.value / u.value,
          path: g(i.value, m, p, _)
        };
      });
    });
    function g(w, y, C, M) {
      if (M <= 0)
        return "";
      if (C - y >= Math.PI * 2 - 1e-6)
        return `M${w - M},${w} A${M},${M} 0 1 1 ${w + M},${w} A${M},${M} 0 1 1 ${w - M},${w} Z`;
      const S = C - y > Math.PI ? 1 : 0, _ = w + Math.cos(y) * M, m = w + Math.sin(y) * M, p = w + Math.cos(C) * M, b = w + Math.sin(C) * M;
      return `M${w},${w} L${_.toFixed(2)},${m.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${p.toFixed(2)},${b.toFixed(2)} Z`;
    }
    const v = x(() => [0.5, 0.75, 1].map((w) => d.value * w)), h = (w) => l.format ? l.format(w) : new Intl.NumberFormat().format(w);
    return (w, y) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", oh, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, V(v.value, (C) => (t(), n("circle", {
          key: C,
          cx: i.value,
          cy: i.value,
          r: C,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, rh))), 128)),
        (t(!0), n(z, null, V(f.value, (C, M) => (t(), n("path", {
          key: M,
          d: C.path,
          fill: C.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: y[0] || (y[0] = (S) => r.value = null)
        }, null, 40, ih))), 128))
      ], 8, sh)),
      e.showLegend ? (t(), n("ul", dh, [
        (t(!0), n(z, null, V(f.value, (C, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: C.color })
          }, null, 4),
          o("span", uh, c(C.label), 1),
          o("span", ch, c(h(C.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), T(mt, {
        key: 1,
        label: f.value[r.value].label,
        value: h(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), fh = ["width", "height"], mh = ["x1", "x2", "y1", "y2"], ph = ["x", "y"], vh = ["x", "y"], gh = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], hh = ["x", "y", "width", "height", "fill", "fill-opacity"], bh = ["d", "stroke"], yh = ["cx", "cy", "fill"], xh = ["x", "y"], kh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, $h = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, wh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Ch = { class: "text-xs font-semibold tabular-nums" }, Sh = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Mh = { class: "text-muted-foreground" }, o8 = /* @__PURE__ */ O({
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
    const d = ["var(--chart-2)", "var(--chart-4)", "var(--chart-3)"], u = ["var(--primary)", "var(--chart-5)"], f = x(
      () => l.bars.map((Z, G) => ({
        ...Z,
        color: Z.color ?? d[G % d.length]
      }))
    ), g = x(
      () => l.lines.map((Z, G) => ({
        ...Z,
        color: Z.color ?? u[G % u.length]
      }))
    ), v = x(
      () => f.value[0]?.points.map((Z) => Z.label) ?? g.value[0]?.points.map((Z) => Z.label) ?? []
    ), h = x(() => v.value.length), w = x(() => l.lineAxis === "right"), y = x(() => ({
      top: 12,
      right: w.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), C = x(() => ({
      w: Math.max(1, r.value - y.value.left - y.value.right),
      h: Math.max(1, l.height - y.value.top - y.value.bottom)
    }));
    function M(Z) {
      const G = Math.max(...Z, 0);
      if (G <= 0)
        return 1;
      const B = 10 ** Math.floor(Math.log10(G));
      return ([1, 2, 2.5, 5, 10].find((j) => G <= j * B) ?? 10) * B;
    }
    const S = x(
      () => M([
        ...f.value.flatMap((Z) => Z.points.map((G) => G.value)),
        ...w.value ? [] : g.value.flatMap((Z) => Z.points.map((G) => G.value))
      ])
    ), _ = x(
      () => w.value ? M(g.value.flatMap((Z) => Z.points.map((G) => G.value))) : S.value
    ), m = x(() => C.value.w / Math.max(1, h.value)), p = x(() => m.value * 0.6), b = x(() => p.value / Math.max(1, f.value.length));
    function A(Z) {
      return y.value.left + Z * m.value + m.value / 2;
    }
    const E = x(
      () => f.value.flatMap(
        (Z, G) => Z.points.map((B, F) => {
          const j = Math.max(0, B.value) / S.value * C.value.h;
          return {
            x: A(F) - p.value / 2 + G * b.value,
            y: y.value.top + C.value.h - j,
            w: Math.max(0, b.value - 2),
            h: j,
            color: Z.color,
            index: F,
            name: Z.name,
            value: B.value,
            label: B.label
          };
        })
      )
    ), I = x(
      () => g.value.map((Z) => {
        const G = Z.points.map((B, F) => ({
          x: A(F),
          y: y.value.top + C.value.h - Math.max(0, B.value) / _.value * C.value.h,
          value: B.value
        }));
        return {
          ...Z,
          pts: G,
          d: G.map((B, F) => `${F === 0 ? "M" : "L"}${B.x.toFixed(2)},${B.y.toFixed(2)}`).join(" ")
        };
      })
    ), ae = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((Z) => ({
        y: y.value.top + C.value.h * Z,
        left: S.value * (1 - Z),
        right: _.value * (1 - Z)
      }))
    ), H = x(() => Math.max(1, Math.ceil(h.value / 10)));
    function K(Z) {
      return Z === h.value - 1 || Z % H.value === 0;
    }
    const q = (Z) => l.format ? l.format(Z) : oe(Z);
    function oe(Z) {
      return Math.abs(Z) >= 1e6 ? `${(Z / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Z) >= 1e3 ? `${(Z / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Z * 100) / 100);
    }
    const ne = x(() => {
      if (s.value === null)
        return null;
      const Z = s.value;
      return {
        label: v.value[Z],
        rows: [
          ...f.value.map((G) => ({
            name: G.name,
            color: G.color,
            value: G.points[Z]?.value ?? 0
          })),
          ...g.value.map((G) => ({
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
      h.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: G[0] || (G[0] = (B) => s.value = null)
        }, [
          (t(!0), n(z, null, V(ae.value, (B) => (t(), n("line", {
            key: `g-${B.y}`,
            x1: y.value.left,
            x2: r.value - y.value.right,
            y1: B.y,
            y2: B.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, mh))), 128)),
          (t(!0), n(z, null, V(ae.value, (B) => (t(), n("text", {
            key: `lt-${B.y}`,
            x: y.value.left - 8,
            y: B.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(B.left)), 9, ph))), 128)),
          w.value ? (t(!0), n(z, { key: 0 }, V(ae.value, (B) => (t(), n("text", {
            key: `rt-${B.y}`,
            x: r.value - y.value.right + 8,
            y: B.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(B.right)), 9, vh))), 128)) : $("", !0),
          (t(!0), n(z, null, V(v.value, (B, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: y.value.left + F * m.value,
            y: y.value.top,
            width: m.value,
            height: C.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (j) => s.value = F
          }, null, 40, gh))), 128)),
          (t(!0), n(z, null, V(E.value, (B, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: B.x,
            y: B.y,
            width: B.w,
            height: B.h,
            fill: B.color,
            "fill-opacity": s.value === null || s.value === B.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, hh))), 128)),
          (t(!0), n(z, null, V(I.value, (B, F) => (t(), n("g", {
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
            }, null, 8, bh),
            s.value !== null && B.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: B.pts[s.value].x,
              cy: B.pts[s.value].y,
              r: "4",
              fill: B.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, yh)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, V(v.value, (B, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: A(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(B), 9, xh)), [
            [Ue, K(F)]
          ])), 128))
        ], 40, fh)),
        ne.value ? (t(), n("div", kh, [
          o("p", $h, c(ne.value.label), 1),
          (t(!0), n(z, null, V(ne.value.rows, (B, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", wh, c(B.name), 1),
            o("span", Ch, c(q(B.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", Sh, [
          (t(!0), n(z, null, V([...f.value, ...g.value], (B, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: B.color })
            }, null, 4),
            o("span", Mh, c(B.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Bh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, _h = { class: "text-muted-foreground" }, Ah = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, Ph = ["width", "height"], zh = ["x", "y"], Oh = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], Lh = ["x", "y"], Vh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, jh = { class: "text-[11px] font-medium capitalize" }, Th = { class: "text-muted-foreground text-[11px] capitalize" }, Dh = { class: "text-sm font-semibold tabular-nums" }, Eh = { class: "text-muted-foreground text-xs font-normal" }, s8 = /* @__PURE__ */ O({
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
      i = new ResizeObserver((p) => {
        r.value = Math.max(160, p[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = x(() => l.series[0]?.points.map((p) => p.label) ?? []), u = x(() => l.series.length), f = x(() => d.value.length), g = x(() => Math.min(140, Math.max(60, r.value * 0.16))), v = x(() => Math.max(1, r.value - g.value - 8)), h = x(() => v.value / Math.max(1, f.value)), w = x(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function y(p) {
      if (p === 0)
        return "var(--muted)";
      const b = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(p / b * 100)}%, var(--muted))`;
    }
    function C(p) {
      for (let b = 0; b < l.buckets.length; b++) {
        const A = l.buckets[b].max;
        if (A === void 0 || p < A)
          return b;
      }
      return l.buckets.length - 1;
    }
    const M = x(
      () => l.series.flatMap(
        (p, b) => p.points.map((A, E) => {
          const I = C(A.value);
          return {
            row: b,
            col: E,
            x: g.value + E * h.value,
            y: 4 + b * w.value,
            w: Math.max(1, h.value - 1),
            h: Math.max(1, w.value - 4),
            colour: y(I),
            label: A.label,
            value: A.value,
            rowName: p.name,
            bucketLabel: l.buckets[I].label
          };
        })
      )
    ), S = x(() => h.value < 2), _ = x(() => s.value ? M.value.find((p) => p.row === s.value.row && p.col === s.value.col) ?? null : null), m = (p) => l.format ? l.format(p) : new Intl.NumberFormat().format(p);
    return (p, b) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", Bh, [
          (t(!0), n(z, null, V(e.buckets, (A, E) => (t(), n("span", {
            key: E,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: y(E) })
            }, null, 4),
            o("span", _h, c(A.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", Ah, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: b[0] || (b[0] = (A) => s.value = null)
        }, [
          (t(!0), n(z, null, V(e.series, (A, E) => (t(), n("text", {
            key: `r-${E}`,
            x: g.value - 10,
            y: 4 + E * w.value + w.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(A.name), 9, zh))), 128)),
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
          }, null, 40, Oh))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(z, { key: 0 }, V(d.value, (A, E) => (t(), n("text", {
            key: `c-${E}`,
            x: g.value + E * h.value + h.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(A), 9, Lh))), 128)) : $("", !0)
        ], 40, Ph)),
        _.value ? (t(), n("div", Vh, [
          o("p", jh, c(_.value.label), 1),
          o("p", Th, c(_.value.rowName), 1),
          o("p", Dh, [
            N(c(m(_.value.value)) + " ", 1),
            o("span", Eh, "(" + c(_.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Ih = ["viewBox"], Fh = { key: 0 }, Nh = ["id"], Rh = ["stop-color"], Uh = ["stop-color"], Hh = ["d", "fill"], Kh = ["d", "stroke"], xa = 100, nt = 30, Bt = /* @__PURE__ */ O({
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
      const f = Math.min(...u), v = Math.max(...u) - f || 1;
      return u.map((h, w) => ({
        x: w / (u.length - 1) * xa,
        y: nt - (h - f) / v * (nt - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const g = [], v = [];
      for (let y = 0; y < f - 1; y++)
        g[y] = u[y + 1].x - u[y].x, v[y] = g[y] === 0 ? 0 : (u[y + 1].y - u[y].y) / g[y];
      const h = [v[0]];
      for (let y = 1; y < f - 1; y++)
        if (v[y - 1] * v[y] <= 0)
          h[y] = 0;
        else {
          const C = 2 * g[y] + g[y - 1], M = g[y] + 2 * g[y - 1];
          h[y] = (C + M) / (C / v[y - 1] + M / v[y]);
        }
      h[f - 1] = v[f - 2];
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
      return !l.filled || u.length < 2 ? "" : `${i.value} L${u[u.length - 1].x.toFixed(2)},${nt} L${u[0].x.toFixed(2)},${nt} Z`;
    });
    return (u, f) => i.value ? (t(), n("svg", {
      key: 0,
      viewBox: `0 0 ${xa} ${nt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", Fh, [
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
          }, null, 8, Rh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Uh)
        ], 8, Nh)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${k(a)})`
      }, null, 8, Hh)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, Kh)
    ], 12, Ih)) : $("", !0);
  }
}), qh = { class: "flex items-center gap-1 text-xs" }, Gh = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, Wh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Qa = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", qh, [
      o("span", {
        class: P(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Gh, c(s.value), 1),
        N(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", Wh, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), Zh = ["data-collapsed"], Jh = { class: "flex flex-wrap items-start justify-between gap-2" }, Yh = { class: "flex min-w-0 items-start gap-2" }, Xh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Qh = ["d"], eb = { class: "min-w-0" }, tb = { class: "text-sm font-medium" }, ab = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, nb = { class: "flex shrink-0 items-center gap-1.5" }, lb = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, ob = ["aria-pressed", "onClick"], sb = ["aria-expanded", "aria-label", "title"], rb = ["aria-label"], ib = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, db = ["d"], ub = /* @__PURE__ */ O({
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
    const l = e, a = Ut(), r = R(l.defaultCollapsed), s = x(() => !!l.icon && !a.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: P(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Jh, [
        o("div", Yh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Xh, [
              o("path", {
                d: k(ce)(e.icon)
              }, null, 8, Qh)
            ])) : $("", !0)
          ]),
          o("div", eb, [
            o("p", tb, c(e.label), 1),
            e.description ? (t(), n("p", ab, c(e.description), 1)) : $("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", nb, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", lb, [
            (t(!0), n(z, null, V(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: P([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (g) => d.$emit("update:period", f.value)
            }, c(f.label), 11, ob))), 128))
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
          ], 8, sb)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), n("svg", ib, [
              o("path", {
                d: k(ce)("eye-off")
              }, null, 8, db)
            ]))
          ], 8, rb)) : $("", !0)
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
    ], 10, Zh));
  }
}), cb = ["aria-pressed", "aria-label", "title"], fb = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, mb = ["d"], pb = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, vb = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, gb = ["href"], hb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, bb = ["d"], yb = ["aria-label", "onClick"], xb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, kb = ["d"], $b = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, wb = ["d"], Cb = {
  key: 0,
  class: "flex flex-col gap-1"
}, Sb = ["onClick"], Mb = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Bb = ["d"], _b = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Ab = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = x(
      () => a.catalog.filter((g) => !a.items.some((v) => v.id === g.id))
    );
    function u(g) {
      r(
        "update:items",
        a.items.filter((v) => v.id !== g)
      );
    }
    function f(g) {
      r("update:items", [...a.items, g]), i.value = !1;
    }
    return (g, v) => (t(), n(z, null, [
      D(ub, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: v[3] || (v[3] = (h) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: v[0] || (v[0] = (h) => s.value = !s.value)
          }, [
            (t(), n("svg", fb, [
              o("path", {
                d: k(ce)(s.value ? "check" : "pencil")
              }, null, 8, mb)
            ]))
          ], 8, cb)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", pb, [
            v[7] || (v[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: v[1] || (v[1] = (h) => i.value = !0)
            }, {
              default: L(() => [...v[6] || (v[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", vb, [
            (t(!0), n(z, null, V(e.items, (h) => (t(), n("div", {
              key: h.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: h.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", hb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, bb)
                ])),
                N(" " + c(h.label), 1)
              ], 8, gb),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${h.label}`,
                onClick: (w) => u(h.id)
              }, [
                (t(), n("svg", xb, [
                  o("path", {
                    d: k(ce)("x")
                  }, null, 8, kb)
                ]))
              ], 8, yb)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: v[2] || (v[2] = (h) => i.value = !0)
            }, [
              (t(), n("svg", $b, [
                o("path", {
                  d: k(ce)("plus")
                }, null, 8, wb)
              ])),
              v[8] || (v[8] = N(" Add ", -1))
            ])) : $("", !0)
          ]))
        ]),
        _: 1
      }, 8, ["hideable"]),
      D(it, {
        open: i.value,
        title: "Add a shortcut",
        description: "Pick a screen this dashboard already knows.",
        onClose: v[5] || (v[5] = (h) => i.value = !1)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            onClick: v[4] || (v[4] = (h) => i.value = !1)
          }, {
            default: L(() => [...v[9] || (v[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", Cb, [
            (t(!0), n(z, null, V(d.value, (h) => (t(), n("li", {
              key: h.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (w) => f(h)
              }, [
                (t(), n("svg", Mb, [
                  o("path", {
                    d: k(ce)(h.icon)
                  }, null, 8, Bb)
                ])),
                N(" " + c(h.label), 1)
              ], 8, Sb)
            ]))), 128))
          ])) : (t(), n("p", _b, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Pb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, zb = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, Ob = { class: "relative w-full max-w-xl" }, Lb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Vb = ["d"], jb = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, Tb = ["data-slot"], Db = { class: "px-5 py-4" }, Eb = { class: "mb-3 text-sm font-semibold" }, Ib = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, Fb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Nb = ["d"], Rb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, r8 = /* @__PURE__ */ O({
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
    const l = e, a = R(""), r = x(() => {
      const u = l.linkComponent;
      return typeof u == "string" ? u : wa(u);
    }), s = ot({
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
        o("h1", Pb, c(e.title), 1),
        e.description ? (t(), n("p", zb, c(e.description), 1)) : $("", !0)
      ]),
      o("div", Ob, [
        (t(), n("svg", Lb, [
          o("path", {
            d: k(ce)("search")
          }, null, 8, Vb)
        ])),
        D($e, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => a.value = g),
          type: "search",
          class: "h-10 rounded-full pl-9",
          placeholder: e.searchPlaceholder,
          "aria-label": e.searchPlaceholder
        }, null, 8, ["modelValue", "placeholder", "aria-label"])
      ]),
      d.value.length ? (t(), n("div", jb, [
        (t(!0), n(z, null, V(d.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", Db, [
            o("h2", Eb, c(g.title), 1),
            o("div", Ib, [
              (t(!0), n(z, null, V(g.links, (v) => (t(), T(Me(i(v) ? "a" : r.value), {
                key: v.href + v.label,
                href: v.href,
                class: P(k(s)),
                target: i(v) ? "_blank" : void 0,
                rel: i(v) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", Fb, [
                    o("path", {
                      d: k(ce)(v.icon)
                    }, null, 8, Nb)
                  ])),
                  N(" " + c(v.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, Tb))), 128))
      ])) : (t(), n("p", Rb, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), Ub = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Hb = { class: "flex flex-1 flex-col gap-1 p-4" }, Kb = { class: "text-muted-foreground relative text-xs font-medium" }, qb = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Gb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, Wb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Zb = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, i8 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Ub, [
      o("div", Hb, [
        o("p", Kb, c(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", qb, " Could not load ")) : (t(), n("span", Gb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Qa, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", Wb, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Zb, [
        D(Bt, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), Jb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, Yb = { class: "flex flex-col gap-1 p-4" }, Xb = { class: "flex items-start justify-between gap-2" }, Qb = { class: "text-sm font-medium" }, e1 = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, t1 = { class: "mt-1 flex flex-wrap items-center gap-2" }, a1 = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, n1 = {
  key: 0,
  class: "-mb-px"
}, $t = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Jb, [
      o("div", Yb, [
        o("div", Xb, [
          o("p", Qb, c(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", e1, c(e.caption), 1)) : $("", !0),
        o("div", t1, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", a1, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: P(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", n1, [
        D(Bt, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), l1 = { class: "relative flex flex-col gap-2" }, o1 = ["aria-label"], s1 = ["onMouseenter"], r1 = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, i1 = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, d1 = { class: "truncate" }, u1 = { class: "text-sm font-semibold tabular-nums" }, d8 = /* @__PURE__ */ O({
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
    ], r = x(() => l.segments.reduce((g, v) => g + Math.max(0, v.value), 0)), s = x(() => Math.max(l.total ?? r.value, r.value, 1)), i = x(
      () => l.segments.map((g, v) => {
        const h = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? a[v % a.length],
          share: h,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(h * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = R(null), f = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, v) => (t(), n("div", l1, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((h) => `${h.label} ${d(h.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, V(i.value, (h, w) => (t(), n("span", {
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
          onMouseleave: v[0] || (v[0] = (y) => u.value = null)
        }, null, 46, s1))), 128))
      ], 12, o1),
      e.showLegend ? (t(), n("div", r1, [
        (t(!0), n(z, null, V(i.value, (h, w) => (t(), n("div", {
          key: w,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", i1, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: h.color })
            }, null, 4),
            o("span", d1, c(h.label), 1)
          ]),
          o("span", u1, c(d(h.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      u.value !== null ? (t(), T(mt, {
        key: 1,
        label: i.value[u.value].label,
        value: d(i.value[u.value].value),
        share: f(i.value[u.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), c1 = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, f1 = ["data-heading"], m1 = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, p1 = { class: "text-muted-foreground truncate" }, v1 = ["aria-label"], u8 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", c1, [
      (t(!0), n(z, null, V(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: P(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), n("div", m1, [
          o("span", p1, c(u.label), 1),
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
          (t(!0), n(z, null, V(u.segments, (f, g) => (t(), n("span", {
            key: g,
            class: P(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, v1)) : $("", !0)
      ], 8, f1))), 128))
    ]));
  }
}), g1 = {
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
}, h1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function b1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function y1(e, l) {
  return l || (e ? g1[b1(e)] ?? "neutral" : "neutral");
}
function x1(e, l) {
  return h1[y1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = x(() => x1(l.status, l.tone));
    return (r, s) => (t(), T(Ke, {
      variant: a.value,
      class: P(l.class)
    }, {
      default: L(() => [
        U(r.$slots, "default", {}, () => [
          N(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), k1 = ["data-layout"], $1 = ["src", "alt"], w1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, C1 = ["src"], S1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, M1 = ["onMouseenter"], B1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, _1 = { class: "min-w-0" }, A1 = { class: "truncate text-sm font-medium" }, P1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, z1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, O1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, L1 = { class: "min-w-0" }, V1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, j1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, T1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, D1 = ["d"], E1 = ["aria-label"], I1 = /* @__PURE__ */ O({
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
    const u = x(() => {
      const M = [r.item.image, ...r.item.images ?? []].map(d).filter((S) => S !== null);
      return [...new Set(M)];
    }), f = x(() => u.value[i.value] ?? u.value[0] ?? null), g = x(
      () => r.item.label.split(/\s+/).slice(0, 2).map((M) => M[0]?.toUpperCase() ?? "").join("")
    ), v = x(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), h = x(() => u.value.length > 1 ? u.value[1] : null), w = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), y = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function C(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: P(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (_) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = Vt(he((_) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: S[2] || (S[2] = (_) => i.value = 0)
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
        }, null, 8, $1)) : (t(), n("span", w1, c(g.value), 1)),
        e.layout === "grid" && h.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: h.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, C1)) : $("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", S1, [
          (t(!0), n(z, null, V(u.value, (_, m) => (t(), n("span", {
            key: m,
            class: P(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (p) => i.value = m
          }, null, 42, M1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: P(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", B1, [
          o("div", _1, [
            o("p", A1, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", P1, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", z1, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", O1, [
          o("div", L1, [
            e.item.price ? (t(), n("p", V1, c(e.item.price), 1)) : $("", !0),
            y.value ? (t(), n("p", j1, c(y.value), 1)) : $("", !0)
          ]),
          w.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: C
          }, [
            (t(), n("svg", T1, [
              o("path", {
                d: k(ce)("cart")
              }, null, 8, D1)
            ]))
          ])) : $("", !0)
        ]),
        v.value && e.layout === "grid" ? (t(), n("div", {
          key: 0,
          class: "bg-muted mt-1 h-1.5 w-full overflow-hidden rounded-full",
          role: "img",
          "aria-label": `${e.item.label} ${e.item.progress.value}`
        }, [
          o("span", {
            class: P(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: v.value })
          }, null, 6)
        ], 8, E1)) : $("", !0)
      ], 2)
    ], 42, k1));
  }
});
function F1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function N1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function R1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const U1 = ["data-featured", "data-recommended"], H1 = { class: "flex flex-col gap-1" }, K1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, q1 = { key: 0 }, G1 = { key: 1 }, W1 = { key: 2 }, Z1 = { key: 3 }, J1 = { class: "text-sm font-semibold" }, Y1 = { class: "flex items-baseline gap-1" }, X1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, Q1 = { class: "text-muted-foreground text-sm font-normal" }, ey = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, ty = { class: "text-muted-foreground mt-1 text-xs" }, ay = { class: "flex flex-1 flex-col gap-2 text-sm" }, ny = { class: "flex min-w-0 items-start gap-2" }, ly = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, oy = ["d"], sy = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, ry = ["d"], iy = { class: "capitalize" }, dy = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, uy = { class: "text-foreground font-medium" }, cy = { class: "mt-auto flex gap-2 pt-2" }, fy = /* @__PURE__ */ O({
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
      return Object.entries(f).map(([g, v]) => ({
        key: g,
        label: g.replace(/_/g, " "),
        granted: R1(v.value),
        display: N1(v.value)
      }));
    }), u = x(() => a.plan.extraPerks ?? []);
    return (f, g) => (t(), n("article", {
      class: P(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", H1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", K1, [
          e.plan.recommended ? (t(), n("span", q1, "Recommended")) : e.plan.featured ? (t(), n("span", G1, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", W1, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", Z1, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", J1, c(e.plan.name), 1),
        o("p", Y1, [
          o("span", X1, c(s.value), 1),
          o("span", Q1, c(k(F1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", ey, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", ty, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", ay, [
        (t(!0), n(z, null, V(d.value, (v) => (t(), n("li", {
          key: v.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", ny, [
            o("span", {
              class: P(["mt-0.5 shrink-0", v.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              v.granted ? (t(), n("svg", ly, [
                o("path", {
                  d: k(ce)("check")
                }, null, 8, oy)
              ])) : (t(), n("svg", sy, [
                o("path", {
                  d: k(ce)("x")
                }, null, 8, ry)
              ]))
            ], 2),
            o("span", iy, c(v.label), 1)
          ]),
          v.display ? (t(), n("span", dy, c(v.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, V(u.value, (v, h) => (t(), n("li", {
          key: `extra-${h}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(v.key), 1),
          o("span", uy, c(v.value), 1)
        ]))), 128))
      ]),
      o("footer", cy, [
        D(ue, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (v) => r("edit", e.plan.id))
        }, {
          default: L(() => [...g[2] || (g[2] = [
            N(" Edit ", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          class: "flex-1",
          variant: "outline",
          size: "sm",
          disabled: e.canDelete === !1 || (e.plan.activeUsers ?? 0) > 0,
          onClick: g[1] || (g[1] = (v) => r("delete", e.plan.id))
        }, {
          default: L(() => [...g[3] || (g[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, U1));
  }
}), my = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, py = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, vy = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, gy = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, hy = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, c8 = /* @__PURE__ */ O({
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
      o("header", my, [
        o("div", null, [
          e.title ? (t(), n("h1", py, c(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", vy, c(e.description), 1)) : $("", !0)
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
      e.plans.length === 0 ? (t(), n("p", gy, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", hy, [
        (t(!0), n(z, null, V(e.plans, (i) => (t(), T(fy, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), by = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, yy = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, xy = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ky = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, $y = { class: "space-y-1.5" }, wy = { class: "space-y-1.5" }, Cy = { class: "space-y-1.5" }, Sy = { class: "space-y-1.5" }, My = { class: "space-y-1.5" }, By = { class: "flex items-center gap-3 text-sm" }, _y = { class: "flex items-center gap-3 text-sm" }, Ay = { class: "flex items-center gap-3 text-sm" }, Py = {
  key: 0,
  class: "space-y-1.5"
}, zy = { class: "flex items-center gap-3 text-sm" }, Oy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, Ly = { class: "space-y-1.5" }, Vy = ["value"], jy = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, Ty = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Dy = ["id", "value", "onInput"], Ey = { class: "space-y-2" }, Iy = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, Fy = ["d"], f8 = /* @__PURE__ */ O({
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
    }), r = e, s = l, i = rt(a());
    function d(m, p) {
      const b = i.perks?.[m]?.value;
      return b ?? p;
    }
    function u(m, p, b) {
      const A = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: p,
          overview: b ?? A?.overview ?? ""
        }
      };
    }
    function f(m, p) {
      const b = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: b?.value ?? (m === "modules" ? [] : 0),
          overview: p
        }
      };
    }
    function g(m) {
      const p = m ? { ...a(), ...m } : a();
      i.id = p.id, i.name = p.name, i.shortDescription = p.shortDescription ?? "", i.description = p.description ?? "", i.days = p.days, i.price = p.price, i.featured = p.featured ?? !1, i.recommended = p.recommended ?? !1, i.trial = p.trial ?? !1, i.trialDays = p.trialDays ?? 0, i.active = p.active ?? !0, i.perks = { ...p.perks ?? {} }, i.extraPerks = [...p.extraPerks ?? []], i.perks.modules || u("modules", []);
    }
    g(r.plan), me(
      () => r.plan,
      (m) => g(m),
      { deep: !0 }
    );
    const v = x({
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
      const p = Object.fromEntries(r.modules.map((E) => [E.key, E])), b = new Set(m);
      for (const E of r.modules)
        if (!b.has(E.key))
          for (const I of E.children ?? [])
            b.delete(I);
      let A = !0;
      for (; A; ) {
        A = !1;
        for (const E of [...b])
          for (const I of p[E]?.requires ?? [])
            b.has(I) || (b.add(I), A = !0);
      }
      return [...b];
    }
    function y() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function C(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((p, b) => b !== m);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, _ = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (m, p) => (t(), n("form", {
      class: P(["w-full space-y-6", e.embedded ? "" : k(qe)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", by, [
        o("div", null, [
          o("h1", yy, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          p[13] || (p[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(ue, {
          type: "button",
          variant: "outline",
          onClick: p[0] || (p[0] = (b) => s("cancel"))
        }, {
          default: L(() => [...p[14] || (p[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", xy, [
        o("section", ky, [
          p[26] || (p[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", $y, [
            D(Pe, { for: "plan-name" }, {
              default: L(() => [...p[15] || (p[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": p[1] || (p[1] = (b) => i.name = b),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", wy, [
            D(Pe, { for: "plan-short" }, {
              default: L(() => [...p[16] || (p[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": p[2] || (p[2] = (b) => i.shortDescription = b),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", Cy, [
            D(Pe, { for: "plan-description" }, {
              default: L(() => [...p[17] || (p[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": p[3] || (p[3] = (b) => i.description = b),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: P(_)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", Sy, [
            D(Pe, { for: "plan-days" }, {
              default: L(() => [...p[18] || (p[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": p[4] || (p[4] = (b) => i.days = b),
              class: P(S)
            }, [...p[19] || (p[19] = [
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
          o("div", My, [
            D(Pe, { for: "plan-price" }, {
              default: L(() => [...p[20] || (p[20] = [
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
              "onUpdate:modelValue": p[5] || (p[5] = (b) => i.price = Number(b))
            }, null, 8, ["model-value"])
          ]),
          o("label", By, [
            D(k(We), {
              checked: !!i.featured,
              "onUpdate:checked": p[6] || (p[6] = (b) => i.featured = b)
            }, null, 8, ["checked"]),
            p[21] || (p[21] = N(" Featured ", -1))
          ]),
          o("label", _y, [
            D(k(We), {
              checked: !!i.recommended,
              "onUpdate:checked": p[7] || (p[7] = (b) => i.recommended = b)
            }, null, 8, ["checked"]),
            p[22] || (p[22] = N(" Recommended ", -1))
          ]),
          o("label", Ay, [
            D(k(We), {
              checked: !!i.trial,
              "onUpdate:checked": p[8] || (p[8] = (b) => i.trial = b)
            }, null, 8, ["checked"]),
            p[23] || (p[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", Py, [
            D(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...p[24] || (p[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": p[9] || (p[9] = (b) => i.trialDays = Number(b))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", zy, [
            D(k(We), {
              checked: i.active !== !1,
              "onUpdate:checked": p[10] || (p[10] = (b) => i.active = b)
            }, null, 8, ["checked"]),
            p[25] || (p[25] = N(" Active ", -1))
          ]),
          D(ue, {
            type: "submit",
            disabled: e.processing
          }, {
            default: L(() => [
              N(c(e.mode === "edit" ? "Save plan" : "Create plan"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        o("section", Oy, [
          p[33] || (p[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", Ly, [
            D(Pe, null, {
              default: L(() => [...p[27] || (p[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Yt, {
              modelValue: v.value,
              "onUpdate:modelValue": p[11] || (p[11] = (b) => v.value = b),
              options: h.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...p[28] || (p[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: P(_),
              onInput: p[12] || (p[12] = (b) => f(
                "modules",
                b.target.value
              ))
            }, null, 40, Vy)
          ]),
          (t(!0), n(z, null, V(e.limits, (b) => (t(), n("div", {
            key: b.key,
            class: "space-y-1.5"
          }, [
            b.kind === "toggle" ? (t(), n("label", jy, [
              D(k(We), {
                checked: !!d(b.key, !1),
                "onUpdate:checked": (A) => u(
                  b.key,
                  A,
                  i.perks?.[b.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + c(b.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              D(Pe, {
                for: `plan-limit-${b.key}`
              }, {
                default: L(() => [
                  N(c(b.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              b.hint ? (t(), n("p", Ty, c(b.hint), 1)) : $("", !0),
              D($e, {
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
              p[29] || (p[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Pe, {
              for: `plan-overview-${b.key}`
            }, {
              default: L(() => [...p[30] || (p[30] = [
                N("Overview", -1)
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
            }, null, 40, Dy)
          ]))), 128)),
          o("div", Ey, [
            p[32] || (p[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, V(i.extraPerks ?? [], (b, A) => (t(), n("div", {
              key: A,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: b.key,
                "onUpdate:modelValue": (E) => b.key = E,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: b.value,
                "onUpdate:modelValue": (E) => b.value = E,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(ue, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (E) => C(A)
              }, {
                default: L(() => [
                  (t(), n("svg", Iy, [
                    o("path", {
                      d: k(ce)("x")
                    }, null, 8, Fy)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(ue, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: y
            }, {
              default: L(() => [...p[31] || (p[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Ny = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Ry = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, Uy = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, Hy = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ky = ["d"], qy = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Gy = ["aria-pressed"], Wy = ["aria-pressed"], Zy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Jy = ["aria-label"], Yy = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Xy = ["aria-pressed", "onClick"], Qy = ["aria-label"], ex = { class: "text-muted-foreground mr-1 text-xs font-medium" }, tx = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, ax = ["data-slot"], nx = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, lx = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, ox = { class: "flex items-center gap-2" }, sx = ["disabled"], rx = ["disabled"], la = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = ut(e, "modelValue"), d = rt({}), u = rt({});
    me(s, () => h());
    function f(I) {
      const ae = I.trim();
      if (ae === "")
        return null;
      const H = Number(ae);
      return Number.isFinite(H) ? H : null;
    }
    function g() {
      const I = {};
      for (const [ae, H] of Object.entries(u))
        I[ae] = { min: f(H.min), max: f(H.max) };
      return I;
    }
    function v() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function h() {
      r("filter", v());
    }
    function w(I, ae) {
      d[I] = d[I] === ae ? null : ae, h();
    }
    function y(I) {
      return u[I] ?? { min: "", max: "" };
    }
    function C(I, ae, H) {
      const K = u[I] ?? { min: "", max: "" };
      u[I] = { ...K, [ae]: H }, h();
    }
    function M(I) {
      I.key === "Enter" && (I.preventDefault(), r("scan", s.value.trim()));
    }
    const S = x(() => a.facets.filter((I) => (I.kind ?? "chips") === "chips")), _ = x(() => a.facets.filter((I) => I.kind === "range")), m = x(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), p = R(1);
    me(
      () => a.items.map((I) => I.key).join(","),
      () => {
        p.value = 1;
      }
    );
    const b = x(() => {
      const I = a.pageSize;
      return !I || I < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / I));
    }), A = x(() => {
      const I = a.pageSize;
      if (!I || I < 1)
        return a.items;
      const ae = (p.value - 1) * I;
      return a.items.slice(ae, ae + I);
    });
    function E(I) {
      p.value = Math.min(b.value, Math.max(1, I));
    }
    return (I, ae) => (t(), n("div", {
      class: P(["flex flex-col gap-4", k(Ga)])
    }, [
      m.value ? (t(), n("div", Ny, [
        o("div", Ry, [
          e.searchable ? (t(), n("div", Uy, [
            (t(), n("svg", Hy, [
              o("path", {
                d: k(ce)("search")
              }, null, 8, Ky)
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
          e.layoutToggle ? (t(), n("div", qy, [
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: ae[1] || (ae[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Gy),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: ae[2] || (ae[2] = (H) => i.value = "list")
            }, " List ", 10, Wy)
          ])) : $("", !0)
        ]),
        S.value.length || _.value.length ? (t(), n("div", Zy, [
          (t(!0), n(z, null, V(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", Yy, c(H.label), 1)) : $("", !0),
            (t(!0), n(z, null, V(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: P([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (q) => w(H.key, K.value)
            }, c(K.label), 11, Xy))), 128))
          ], 8, Jy))), 128)),
          (t(!0), n(z, null, V(_.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", ex, c(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": y(H.key).min,
              "onUpdate:modelValue": (K) => C(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            ae[7] || (ae[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": y(H.key).max,
              "onUpdate:modelValue": (K) => C(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Qy))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", tx, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: P(
          i.value === "list" ? "flex flex-col gap-3" : k(bf)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, V(A.value, (H) => (t(), T(I1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: ae[3] || (ae[3] = (K) => r("select", K)),
          onCart: ae[4] || (ae[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, ax)),
      e.pageSize && b.value > 1 ? (t(), n("div", nx, [
        o("p", lx, " Page " + c(p.value) + " of " + c(b.value), 1),
        o("div", ox, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: p.value <= 1,
            onClick: ae[5] || (ae[5] = (H) => E(p.value - 1))
          }, " Previous ", 8, sx),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: p.value >= b.value,
            onClick: ae[6] || (ae[6] = (H) => E(p.value + 1))
          }, " Next ", 8, rx)
        ])
      ])) : $("", !0)
    ], 2));
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
function oa(e, l) {
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
function wt(e) {
  return e.query.trim() !== "" || Object.values(e.selected ?? {}).some(Boolean) ? !0 : Object.values(e.ranges ?? {}).some(
    (l) => l.min !== null || l.max !== null
  );
}
const cx = { class: "flex flex-col gap-6" }, fx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, mx = { class: "text-sm font-semibold" }, px = { class: "flex flex-wrap items-center gap-1.5" }, vx = ["aria-pressed", "onClick"], gx = { class: "text-sm font-semibold" }, hx = { class: "flex flex-wrap items-center gap-1.5" }, bx = { key: 0 }, en = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = rt({}), d = rt({}), u = x(
      () => a.facets.filter((b) => (b.kind ?? "chips") === "chips")
    ), f = x(() => a.facets.filter((b) => b.kind === "range"));
    function g(b) {
      return b == null ? "" : String(b);
    }
    function v() {
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
        b && v();
      }
    );
    function h(b) {
      const A = b.trim();
      if (A === "")
        return null;
      const E = Number(A);
      return Number.isFinite(E) ? E : null;
    }
    function w() {
      const b = {};
      for (const [A, E] of Object.entries(d))
        b[A] = { min: h(E.min), max: h(E.max) };
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
    function M(b, A) {
      i[b] = i[b] === A ? null : A;
    }
    function S(b) {
      return d[b] ?? { min: "", max: "" };
    }
    function _(b, A, E) {
      const I = d[b] ?? { min: "", max: "" };
      d[b] = { ...I, [A]: E };
    }
    function m() {
      r("apply", y());
    }
    function p() {
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
    return (b, A) => (t(), T(St, {
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
          onClick: p
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
            C.value ? (t(), n("span", bx, " (" + c(C.value) + ")", 1)) : $("", !0)
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
            o("h3", mx, c(E.label ?? E.key), 1),
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
              }, c(I.label), 11, vx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, V(f.value, (E) => (t(), n("section", {
            key: E.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", gx, c(E.label ?? E.key), 1),
            o("div", hx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${E.label ?? E.key} from`,
                "model-value": S(E.key).min,
                "onUpdate:modelValue": (I) => _(E.key, "min", String(I))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              A[4] || (A[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${E.label ?? E.key} to`,
                "model-value": S(E.key).max,
                "onUpdate:modelValue": (I) => _(E.key, "max", String(I))
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
    const a = ut(e, "modelValue"), r = l, s = x(() => a.value <= e.min), i = x(() => e.max !== null && a.value >= e.max);
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
        (t(), n("svg", kx, [
          o("path", {
            d: k(ce)("minus")
          }, null, 8, $x)
        ]))
      ], 8, xx),
      o("span", wx, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (g) => d(1))
      }, [
        (t(), n("svg", Sx, [
          o("path", {
            d: k(ce)("plus")
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
          o("p", Px, c(d.label), 1),
          d.detail ? (t(), n("p", zx, c(d.detail), 1)) : $("", !0)
        ]),
        o("div", Ox, [
          e.editable ? (t(), T(Bx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", Lx, " ×" + c(d.qty), 1)) : $("", !0),
          d.amount ? (t(), n("span", Vx, c(d.amount), 1)) : $("", !0),
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
                d: k(ce)("trash")
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
        o("h2", Nx, c(e.title), 1)
      ]),
      o("div", Rx, [
        e.items.length === 0 ? (t(), n("p", Ux, [
          o("span", Hx, c(e.emptyTitle), 1),
          o("span", Kx, c(e.emptyDescription), 1)
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
          o("span", Wx, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Zx, [
          o("span", Jx, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", Yx, c(e.discount), 1)) : $("", !0),
          U(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", Xx, [
          o("span", Qx, c(e.taxLabel), 1),
          o("span", e0, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", t0, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", a0, c(e.total), 1)
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
}, m8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = R(!1), d = ut(e, "cart"), u = R(!1), f = x(
      () => a.items.filter((H) => oa(H, s.value))
    );
    function g(H) {
      s.value = { ...s.value, query: H.query };
    }
    function v(H) {
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
    function w(H, K, q) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(q * K)
      };
    }
    function y(H) {
      const K = ux(a.items, H);
      K && C(K.key);
    }
    function C(H) {
      const K = a.items.find((ne) => ne.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      u.value = !1;
      const q = h(K);
      if (d.value.find((ne) => ne.key === H)) {
        d.value = d.value.map(
          (ne) => ne.key === H ? w(ne, Number(ne.qty ?? 1) + 1, q) : ne
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
      const q = a.items.find((ne) => ne.key === H), oe = h(q);
      d.value = d.value.map(
        (ne) => ne.key === H ? w(ne, K, oe) : ne
      );
    }
    function S(H) {
      d.value = d.value.filter((K) => K.key !== H);
    }
    const _ = x(
      () => d.value.reduce((H, K) => {
        const q = a.items.find((oe) => oe.key === K.key);
        return H + h(q) * Number(K.qty ?? 1);
      }, 0)
    ), m = x(
      () => a.discountRate > 0 ? Math.round(_.value * a.discountRate) : 0
    ), p = x(
      () => Math.round((_.value - m.value) * a.taxRate)
    ), b = x(
      () => d.value.length ? a.formatMoney(_.value) : null
    ), A = x(
      () => d.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), E = x(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(p.value) : null
    ), I = x(
      () => d.value.length ? a.formatMoney(
        _.value - m.value + p.value
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
              k(wt)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (q) => s.value = {
                  ...k(Ee)(),
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
                k(wt)(s.value) ? (t(), n("span", d0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          D(la, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: g,
            onSelect: K[2] || (K[2] = (q) => r("select", q)),
            onCart: C,
            onScan: y
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(l0, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: b.value,
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
                  N(c(u.value ? "Paid" : "Pay"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 3
        }, 8, ["title", "items", "subtotal", "discount-label", "discount", "tax-label", "tax", "total"])
      ]),
      D(en, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (q) => i.value = !1),
        onApply: v,
        onReset: K[4] || (K[4] = (q) => s.value = { ...k(Ee)(), query: s.value.query })
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
}, y0 = { class: "grid grid-cols-2 gap-3" }, x0 = { class: "flex flex-col gap-2" }, k0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, p8 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(v) {
      let h = 0;
      for (const w of v)
        h = h * 31 + w.charCodeAt(0) >>> 0;
      return h;
    }
    function i(v, h) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((y, C) => ({
        label: y,
        value: Math.max(0, Math.round(v + Math.sin(C + h) * v * 0.18))
      }));
    }
    const d = x(() => a.item?.kind === "unit"), u = x(() => {
      const v = a.item;
      if (!v)
        return [];
      const h = v.stock ?? v.progress?.value ?? v.metrics?.price ?? v.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(v.key) % 7);
    }), f = x(() => {
      const v = a.item;
      if (!v)
        return [];
      const h = v.progress?.value ?? (v.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(v.key) % 5 + 1);
    }), g = x(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (v, h) => (t(), T(St, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: h[1] || (h[1] = (w) => r("close"))
    }, st({
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
            (t(!0), n(z, null, V(e.item.images, (w, y) => (t(), n("img", {
              key: y,
              src: w,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, p0))), 128))
          ])) : $("", !0),
          o("div", v0, [
            o("div", null, [
              o("p", g0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", h0, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", b0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", y0, [
            D($t, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D($t, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", x0, [
            o("p", k0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(Bt, {
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
    function s(y) {
      let C = 0;
      for (const M of y)
        C = C * 31 + M.charCodeAt(0) >>> 0;
      return C;
    }
    function i(y, C) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, _) => ({
        label: S,
        value: Math.max(0, Math.round(y + Math.sin(_ + C) * y * 0.18))
      }));
    }
    const d = x(() => a.item.kind === "unit"), u = x(() => {
      const y = [a.item.image, ...a.item.images ?? []].filter(
        (C) => typeof C == "string" && C !== ""
      );
      return [...new Set(y)];
    }), f = R(0), g = x(() => {
      const y = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(y) || 12, s(a.item.key) % 7);
    }), v = x(() => {
      const y = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(y) || 20, s(a.item.key) % 5 + 1);
    }), h = x(() => d.value ? v.value : g.value), w = x(() => !d.value && a.item.status !== "out-of-stock");
    return (y, C) => (t(), n("div", $0, [
      o("div", w0, [
        o("div", C0, [
          o("div", S0, [
            u.value[f.value] ? (t(), n("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, M0)) : $("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", B0, [
            (t(!0), n(z, null, V(u.value, (M, S) => (t(), n("button", {
              key: M,
              type: "button",
              class: P(["size-16 shrink-0 overflow-hidden rounded-md border", S === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${S + 1}`,
              "aria-pressed": S === f.value ? "true" : "false",
              onClick: (_) => f.value = S
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
              o("h1", L0, c(e.item.label), 1),
              o("p", V0, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", j0, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", T0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", D0, [
            e.item.sku ? (t(), n("div", E0, [
              C[1] || (C[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", I0, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", F0, [
              o("dt", N0, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", R0, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
            ])
          ]),
          w.value ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md px-4 py-2.5 text-sm font-medium sm:w-auto",
            onClick: C[0] || (C[0] = (M) => r("cart", e.item.key))
          }, " Add to cart ")) : $("", !0)
        ])
      ]),
      o("section", U0, [
        C[2] || (C[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", H0, [
          D($t, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: h.value
          }, null, 8, ["label", "value", "series"]),
          D($t, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", K0, [
          o("p", q0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(Bg, {
            data: h.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), W0 = ["href"], v8 = /* @__PURE__ */ O({
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
        N(" " + c(e.backLabel), 1)
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
}, ek = ["aria-pressed"], tk = ["aria-pressed"], g8 = /* @__PURE__ */ O({
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
    function f(M) {
      return d.value[M] ?? Ee();
    }
    const g = x(
      () => a.tabs.find((M) => M.key === s.value) ?? a.tabs[0] ?? null
    ), v = x(
      () => g.value ? f(g.value.key) : Ee()
    ), h = x(() => {
      const M = g.value;
      return M ? M.items.filter((S) => oa(S, f(M.key))) : [];
    });
    function w(M) {
      const S = g.value?.key;
      S && (d.value = {
        ...d.value,
        [S]: { ...f(S), query: M }
      });
    }
    function y() {
      const M = g.value?.key;
      M && (d.value = { ...d.value, [M]: Ee() });
    }
    function C(M) {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: M }, u.value = !1);
    }
    return (M, S) => (t(), n(z, null, [
      o("div", {
        class: P(["flex w-full flex-col gap-8", e.embedded ? "" : k(qe)])
      }, [
        D(De, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", Z0, [
          (t(!0), n(z, null, V(e.tabs, (_) => (t(), n("button", {
            key: _.key,
            type: "button",
            class: P([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === _.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === _.key ? "true" : "false",
            onClick: (m) => s.value = _.key
          }, c(_.label), 11, J0))), 128))
        ])) : $("", !0),
        o("div", Y0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": v.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (_) => w(String(_)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          k(wt)(v.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: y
          }, " Clear ")) : $("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "relative inline-flex shrink-0 items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
            onClick: S[1] || (S[1] = (_) => u.value = !0)
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
            k(wt)(v.value) ? (t(), n("span", X0, " on ")) : $("", !0)
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
              onClick: S[2] || (S[2] = (_) => i.value = "grid")
            }, " Tiles ", 10, ek),
            o("button", {
              type: "button",
              class: P([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (_) => i.value = "list")
            }, " List ", 10, tk)
          ])
        ]),
        D(la, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (_) => i.value = _),
          "page-size": e.pageSize,
          items: h.value,
          onSelect: S[5] || (S[5] = (_) => r("select", _)),
          onCart: S[6] || (S[6] = (_) => r("cart", _))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(en, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: v.value,
        onClose: S[7] || (S[7] = (_) => u.value = !1),
        onApply: C,
        onReset: y
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), ak = { class: "flex flex-col gap-4" }, nk = { class: "flex flex-col gap-4" }, h8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(Ee()), i = x(
      () => a.cards.filter((d) => oa(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(qe)])
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
        D(la, {
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
      o("section", nk, [
        D(De, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(ro, {
          columns: e.columns,
          rows: e.rows,
          "empty-title": e.emptyTitle
        }, {
          "cell:status": L(({ value: f }) => [
            D(we, {
              status: String(f)
            }, {
              default: L(() => [
                N(c(f), 1)
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
    function f(M) {
      const S = s.value;
      if (!S)
        return null;
      const _ = S.getBoundingClientRect(), m = S.width / _.width, p = S.height / _.height;
      return {
        x: (M.clientX - _.left) * m,
        y: (M.clientY - _.top) * p
      };
    }
    function g(M) {
      a.disabled || (i.value = !0, d = f(M), s.value?.setPointerCapture(M.pointerId));
    }
    function v(M) {
      if (!i.value || a.disabled)
        return;
      const S = u(), _ = f(M);
      !S || !_ || !d || (S.strokeStyle = "#111827", S.lineWidth = 2.4, S.lineCap = "round", S.lineJoin = "round", S.beginPath(), S.moveTo(d.x, d.y), S.lineTo(_.x, _.y), S.stroke(), d = _);
    }
    function h() {
      i.value = !1, d = null;
    }
    function w() {
      const M = s.value, S = u();
      !M || !S || (S.clearRect(0, 0, M.width, M.height), r("clear"));
    }
    function y() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function C() {
      const M = s.value, S = u();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ve(C), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", lk, [
      o("p", ok, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: P(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(g, ["prevent"]),
        onPointermove: he(v, ["prevent"]),
        onPointerup: he(h, ["prevent"]),
        onPointerleave: he(h, ["prevent"])
      }, null, 42, sk),
      o("div", rk, [
        D(ue, {
          variant: "outline",
          size: "sm",
          disabled: e.disabled,
          onClick: w
        }, {
          default: L(() => [...S[0] || (S[0] = [
            N(" Clear ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          size: "sm",
          disabled: e.disabled,
          onClick: y
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
}, Bk = ["src"], b8 = /* @__PURE__ */ O({
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
    function f(M) {
      try {
        const S = localStorage.getItem(M), _ = S ? JSON.parse(S) : [];
        return Array.isArray(_) ? _ : [];
      } catch {
        return [];
      }
    }
    ve(() => {
      !l.storageKey || typeof localStorage > "u" || (a.value = f(`${l.storageKey}.signatures`), r.value = f(`${l.storageKey}.stamps`), s.value = a.value[0]?.id ?? null, i.value = r.value[0]?.id ?? null);
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
    function g(M) {
      const S = {
        id: `sig-${Date.now()}`,
        name: `Signature ${a.value.length + 1}`,
        dataUrl: M
      };
      a.value = [S, ...a.value].slice(0, 8), s.value = S.id;
    }
    async function v(M, S) {
      await Sf(M), S(40);
      const _ = await new Promise((m, p) => {
        const b = new FileReader();
        b.onload = () => m(String(b.result)), b.onerror = () => p(new Error("Could not read the file")), b.readAsDataURL(M);
      });
      return S(100), { value: _, name: M.name, size: M.size, url: _ };
    }
    function h() {
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
    const w = x(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), y = x(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), C = x(() => {
      const M = l.documents.find((_) => _.key === u.value)?.document ?? l.documents[0]?.document ?? {}, S = {
        ...M?.branding ?? {},
        logoUrl: d.value?.url ?? null
      };
      return {
        ...M,
        branding: S
      };
    });
    return (M, S) => (t(), n("div", {
      class: P(["flex w-full flex-col gap-10", e.embedded ? "" : k(qe)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", dk, [
        D(ik, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", uk, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", ck, c(k(Wa)), 1),
          D(ja, {
            modelValue: d.value,
            "onUpdate:modelValue": S[0] || (S[0] = (_) => d.value = _),
            image: "",
            accept: ["png", "webp"],
            "max-kilobytes": 2048,
            upload: v
          }, null, 8, ["modelValue"]),
          D(ue, {
            size: "sm",
            variant: "outline",
            disabled: !d.value,
            onClick: h
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
          (t(!0), n(z, null, V(a.value, (_) => (t(), n("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
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
          (t(!0), n(z, null, V(r.value, (_) => (t(), n("button", {
            key: _.id,
            type: "button",
            class: P(["rounded-md border p-2", _.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = _.id
          }, [
            o("img", {
              src: _.dataUrl,
              alt: _.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, yk)
          ], 10, bk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", xk, [
        o("div", kk, [
          (t(!0), n(z, null, V(e.documents, (_) => (t(), T(ue, {
            key: _.key,
            size: "sm",
            variant: u.value === _.key ? "default" : "outline",
            onClick: (m) => u.value = _.key
          }, {
            default: L(() => [
              N(c(_.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", $k, [
          D(Fv, {
            document: C.value
          }, null, 8, ["document"]),
          o("div", wk, [
            o("div", Ck, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              w.value ? (t(), n("img", {
                key: 0,
                src: w.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, Sk)) : (t(), n("p", Mk, "Draw and save a signature"))
            ]),
            y.value ? (t(), n("img", {
              key: 0,
              src: y.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, Bk)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), y8 = "panel.dashboard.hiddenWidgets", _k = /* @__PURE__ */ Symbol("dashboardHide"), Ak = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, x8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = bt(_k, null), r = R(
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
    return (d, u) => i.value ? $("", !0) : (t(), n("div", Ak, [
      D(Ab, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => k(a)?.hide("shortcuts", "Shortcuts"))
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
}, k8 = /* @__PURE__ */ O({
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
    const f = x(() => a.segments.some(u)), g = x(() => a.segments.some(d)), v = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, h = x(() => v[a.columns] ?? v[4]), w = x(() => {
      const m = a.columns ?? 4, p = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, p);
    }), y = x(() => {
      const m = a.columns ?? 4, p = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(p);
    }), C = x(() => {
      const m = [];
      return w.value.length > 0 && m.push({ key: "packed", joined: !0, segments: w.value }), y.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: y.value }), m;
    });
    function M() {
      const m = f.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function S(m) {
      if (!d(m))
        return;
      const p = new Set(i.value);
      if (u(m))
        p.add(m.key);
      else if (p.delete(m.key), s.value) {
        s.value = !1;
        for (const b of a.segments)
          b.key !== m.key && d(b) && p.add(b.key);
      }
      i.value = p, r("toggle", f.value);
    }
    function _(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, p) => (t(), n("div", Pk, [
      (t(!0), n(z, null, V(C.value, (b) => (t(), n("div", {
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
          onClick: M
        }, [
          (t(), n("svg", Lk, [
            f.value ? (t(), n(z, { key: 0 }, [
              p[0] || (p[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              p[1] || (p[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              p[2] || (p[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              p[3] || (p[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              p[4] || (p[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              p[5] || (p[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Ok)) : $("", !0),
        o("div", {
          class: P(["grid", [b.joined ? "gap-px" : "gap-3", h.value]])
        }, [
          (t(!0), n(z, null, V(b.segments, (A) => (t(), n("div", {
            key: A.key,
            class: P(["bg-card flex flex-col gap-2 p-4", b.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Vk, c(A.label), 1),
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
                "aria-label": `${A.label}, ${_(A.value)}. Hide it.`,
                title: `Hide ${A.label}`,
                onClick: (E) => S(A)
              }, c(_(A.value)), 9, Dk)) : (t(), n("span", Ek, c(_(A.value)), 1)),
              A.trend && !e.loading && !u(A) ? (t(), T(Qa, {
                key: 4,
                direction: A.trend.direction,
                percentage: A.trend.percentage,
                inverted: A.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            A.sparkline?.length && !e.loading && !u(A) ? (t(), T(Bt, {
              key: 0,
              data: A.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            A.caption || A.comparison && A.trend ? (t(), n("p", Ik, c(A.caption ?? A.comparison), 1)) : $("", !0)
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
}, $8 = /* @__PURE__ */ O({
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
      const C = a.items.findIndex((M) => M.key === s.value?.key);
      return C >= 0 ? C + 1 : 1;
    }), g = x(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), v = x(() => {
      const C = a.linkComponent;
      return typeof C == "string" ? C : wa(C);
    }), h = ot({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), w = ot({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), y = ot({
      variant: "outline",
      size: "sm",
      class: "no-underline shrink-0"
    });
    return (C, M) => e.items.length && e.variant === "onboarding" ? (t(), n("section", {
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
      ], 8, Nk),
      o("div", Rk, [
        o("span", Uk, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Kk, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", qk, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, Hk),
        s.value?.href ? (t(), T(Me(v.value), {
          key: 0,
          href: s.value.href,
          class: P(k(w))
        }, {
          default: L(() => [
            N(c(s.value.actionLabel || "Open"), 1)
          ]),
          _: 1
        }, 8, ["href", "class"])) : $("", !0),
        e.skipLabel ? (t(), n("button", {
          key: 1,
          type: "button",
          class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
          onClick: M[0] || (M[0] = (S) => r("skip"))
        }, c(e.skipLabel), 1)) : $("", !0)
      ])
    ], 8, Fk)) : e.items.length ? (t(), n("section", Gk, [
      o("div", Wk, [
        o("h2", Zk, c(e.heading), 1),
        o("div", Jk, [
          e.skipLabel ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-xs text-muted-foreground font-normal hover:text-foreground hover:underline",
            onClick: M[1] || (M[1] = (S) => r("skip"))
          }, c(e.skipLabel), 1)) : $("", !0),
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
          o("p", e2, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", t2, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), T(Me(v.value), {
            key: 1,
            href: s.value.href,
            class: P(k(h))
          }, {
            default: L(() => [
              N(c(s.value.actionLabel || "Open"), 1)
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
            }, c(S.title), 3),
            !S.done && S.detail ? (t(), n("p", o2, c(S.detail), 1)) : $("", !0)
          ]),
          !S.done && S.href ? (t(), T(Me(v.value), {
            key: 0,
            href: S.href,
            class: P(k(y))
          }, {
            default: L(() => [
              N(c(S.actionLabel || "Open"), 1)
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
}, r2 = { class: "hidden items-center gap-2 md:flex" }, i2 = { class: "md:hidden" }, d2 = { class: "border-b px-4 py-3" }, u2 = { class: "text-muted-foreground text-xs font-normal" }, c2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, f2 = { class: "font-medium tabular-nums" }, m2 = { class: "ml-auto flex items-center gap-3" }, w8 = /* @__PURE__ */ O({
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
        D(Xt, {
          open: r.value,
          "onUpdate:open": d[1] || (d[1] = (u) => r.value = u)
        }, {
          default: L(() => [
            D(Qt, {
              side: "bottom",
              class: "max-h-[70vh] gap-0 overflow-hidden p-0"
            }, {
              default: L(() => [
                o("div", d2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", u2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
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
          N(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", m2, [
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
}, C2 = ["disabled"], C8 = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("div", p2, [
      o("p", v2, [
        N(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", g2, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (v) => r("update:perPage", Number(v.target.value)))
        }, [
          (t(!0), n(z, null, V(e.perPageOptions, (v) => (t(), n("option", {
            key: v,
            value: v
          }, c(v), 9, b2))), 128))
        ], 40, h2)
      ])) : $("", !0),
      o("nav", y2, [
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
        ])], 8, x2),
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
        ])], 8, k2),
        o("span", $2, c(e.page), 1),
        u.value !== null ? (t(), n("span", w2, " of " + c(s(u.value)), 1)) : $("", !0),
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
        }, c(r(e.counts.all ?? 0)), 11, B2)) : (t(), T(ze, {
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
        N(c(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: P([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, A2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, _2))), 128))
    ]));
  }
}), S8 = /* @__PURE__ */ Ct(P2, [["__scopeId", "data-v-3967c945"]]), z2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, O2 = { class: "grid gap-2" }, L2 = {
  key: 0,
  class: "text-destructive text-sm"
}, V2 = { class: "flex gap-2" }, M8 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
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
    })()), i = R(!1), d = fn(null), u = x(() => d.value?.isLoading.value ?? !1), f = x(() => d.value?.error.value ?? null), g = x(() => d.value?.isSupported.value ?? !1);
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
    const v = async (w) => {
      w.preventDefault(), !(!s.value.trim() || d.value === null) && await d.value.register(s.value);
    }, h = () => {
      i.value = !1, s.value = "";
    };
    return (w, y) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: v
    }, [
      o("div", O2, [
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
      f.value ? (t(), n("p", L2, c(f.value), 1)) : $("", !0),
      o("div", V2, [
        D(ue, {
          type: "submit",
          disabled: u.value || !s.value.trim()
        }, {
          default: L(() => [
            N(c(u.value ? "Registering…" : "Register passkey"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        D(ue, {
          type: "button",
          variant: "ghost",
          onClick: h
        }, {
          default: L(() => [...y[5] || (y[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(ue, {
      key: 1,
      variant: "outline",
      onClick: y[0] || (y[0] = (C) => i.value = !0)
    }, {
      default: L(() => [...y[2] || (y[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", z2, " Passkeys are not supported in this browser. "));
  }
}), j2 = { class: "pk-form-stack" }, T2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, B8 = /* @__PURE__ */ O({
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
    jt("panelPicker", {
      get base() {
        return a.pickerBase ?? "";
      },
      get returnUrl() {
        return a.returnUrl ?? "";
      }
    }), jt("panelCreateOption", {
      run(f, g) {
        return a.createOption ? a.createOption(f, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => a.errors._conflict);
    function u(f) {
      if (a.upload)
        return (g, v) => a.upload(f, g, v);
    }
    return (f, g) => (t(), n("div", j2, [
      d.value ? (t(), n("p", T2, c(d.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, V(e.nodes, (v, h) => (t(), T(Da, {
        key: h,
        node: v,
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
        (t(!0), n(z, null, V(e.fields, (v) => (t(), T(Xe, {
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
          class: P(v.span && v.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (h) => r("change", v.key, h),
          onAffixAction: (h) => r("affix-action", v.key, h)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), D2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, E2 = ["disabled"], I2 = ["disabled"], F2 = ["disabled"], _8 = /* @__PURE__ */ O({
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
    const a = x(() => l.value ? "#pk-main" : "body"), r = x(() => !l.value), s = x(
      () => l.value ? "pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4" : "pointer-events-none sticky bottom-0 z-30 px-3 pb-3 sm:px-4 sm:pb-4"
    );
    return (i, d) => (t(), T(dt, {
      to: a.value,
      disabled: r.value
    }, [
      D(Ye, {
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
                k(io),
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
              o("span", D2, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, E2)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, I2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, F2)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function A8(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(Lt(e.value)), s = x(() => Lt(e.value) !== r.value);
  function i() {
    r.value = Lt(e.value);
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
function Lt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const pt = /* @__PURE__ */ new Map();
function P8(e, l) {
  pt.set(e, l);
}
function N2(e) {
  return pt.get(e);
}
function z8(e) {
  return pt.has(e);
}
function R2() {
  return [...pt.keys()].sort();
}
function O8() {
  pt.clear();
}
const U2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, H2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, K2 = { class: "text-foreground text-sm font-medium" }, q2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, G2 = {
  key: 5,
  class: "max-w-full font-normal"
}, W2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, Z2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, J2 = {
  key: 6,
  class: "font-normal"
}, Y2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, X2 = { class: "text-muted-foreground truncate font-medium" }, Q2 = { class: "text-foreground col-span-2 break-words" }, e$ = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, t$ = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, a$ = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, n$ = {
  key: 10,
  class: "text-destructive text-xs font-normal",
  "data-testid": "missing-entry-view"
}, l$ = ["href"], o$ = { class: "flex min-w-0 items-start gap-2.5" }, s$ = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, r$ = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, i$ = ["d"], d$ = { class: "min-w-0" }, u$ = { class: "flex flex-wrap items-center gap-2" }, c$ = { class: "text-sm font-semibold" }, f$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, m$ = ["onClick"], L8 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = x(() => a.depth === 0), u = x(() => {
      const S = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return S >= 3 ? "sm:grid-cols-3" : S === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    }), f = {
      date: { year: "numeric", month: "long", day: "numeric" },
      datetime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    }, g = x(() => a.node.key ? a.record[a.node.key] : null), v = x(() => {
      const S = g.value;
      return S == null || S === "";
    }), h = x(() => {
      if (v.value)
        return "None";
      const S = Number(g.value);
      if (Number.isNaN(S))
        return "None";
      const _ = a.node.divideBy ?? 100, m = S / _, p = a.node.currency ?? "USD";
      try {
        return new Intl.NumberFormat(void 0, { style: "currency", currency: p }).format(m);
      } catch {
        return `${p} ${m.toFixed(2)}`;
      }
    }), w = x(() => {
      if (v.value)
        return "None";
      const S = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(S)).toLocaleDateString(void 0, f[a.node.type]);
      if (a.node.type === "money")
        return h.value;
      let _ = String(S);
      return a.node.transform === "upper" && (_ = _.toUpperCase()), a.node.transform === "lower" && (_ = _.toLowerCase()), [a.node.prefix, _, a.node.suffix].filter(Boolean).join(" ");
    }), y = x(() => {
      const S = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), _ = a.node.colors?.[S] ?? a.node.defaultColor ?? "neutral";
      return ea[_] ?? "outline";
    }), C = x(() => {
      const S = typeof a.node.view == "string" ? a.node.view : "";
      return S ? N2(S) : void 0;
    }), M = x(() => {
      const S = typeof a.node.view == "string" ? a.node.view : "";
      if (!S)
        return "ViewEntry has no view name.";
      const _ = R2(), m = _.length > 0 ? _.join(", ") : "(none)";
      return `No entry view for [${S}]; registered: ${m}`;
    });
    return (S, _) => {
      const m = Kt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", U2, [
        o("dt", H2, c(e.node.label), 1),
        o("dd", K2, [
          e.node.type === "badge" && k(zu)(g.value) ? (t(), T(Ke, {
            key: 0,
            variant: y.value,
            class: "capitalize"
          }, {
            default: L(() => [
              N(c(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", q2, "None")) : e.node.type === "icon" ? (t(), T(lu, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(du, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(pu, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", G2, [
            e.node.language ? (t(), n("p", W2, c(e.node.language), 1)) : $("", !0),
            o("pre", Z2, [
              o("code", null, c(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", J2, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", Y2, [
              (t(!0), n(z, null, V(g.value, (p, b) => (t(), n("div", {
                key: b,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", X2, c(b), 1),
                o("dd", Q2, c(p), 1)
              ]))), 128))
            ])) : (t(), n("span", e$, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", t$, [
            (t(!0), n(z, null, V(Array.isArray(g.value) ? g.value : [], (p, b) => (t(), n("div", {
              key: b,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, V(e.node.entries ?? [], (A, E) => (t(), T(m, {
                key: E,
                node: A,
                record: p,
                depth: e.depth + 1,
                onAction: _[0] || (_[0] = (I) => r("action", I))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", a$, "None")) : $("", !0)
          ])) : e.node.type === "money" ? (t(), n("span", {
            key: 8,
            class: P(v.value ? "text-muted-foreground font-normal" : "")
          }, c(h.value), 3)) : e.node.type === "view" && C.value ? (t(), T(Me(C.value), {
            key: 9,
            node: e.node,
            record: e.record,
            value: g.value
          }, null, 8, ["node", "record", "value"])) : e.node.type === "view" ? (t(), n("p", n$, c(M.value), 1)) : e.node.url && !v.value ? (t(), n("a", {
            key: 11,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(w.value), 9, l$)) : (t(), n("span", {
            key: 12,
            class: P([
              v.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(w.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 13,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: _[1] || (_[1] = (p) => r("action", e.node.action))
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
          onClick: _[2] || (_[2] = (p) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", o$, [
            e.node.icon ? (t(), n("div", s$, [
              (t(), n("svg", r$, [
                o("path", {
                  d: k(ce)(e.node.icon)
                }, null, 8, i$)
              ]))
            ])) : $("", !0),
            o("div", d$, [
              o("div", u$, [
                o("h3", c$, c(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), n("p", f$, c(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: P(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, V(e.node.children ?? [], (p, b) => (t(), T(m, {
            key: b,
            node: p,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[3] || (_[3] = (A) => r("action", A))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: P(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, V(e.node.children ?? [], (p, b) => (t(), T(m, {
          key: b,
          node: p,
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
          (t(!0), n(z, null, V(e.node.children ?? [], (p, b) => (t(), n("button", {
            key: b,
            type: "button",
            class: P([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === b ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (A) => i.value = b
          }, c(p.label), 11, m$))), 128))
        ], 2),
        (t(!0), n(z, null, V(e.node.children ?? [], (p, b) => pe((t(), n("div", {
          key: b,
          class: P(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, V(p.children ?? [], (A, E) => (t(), T(m, {
            key: E,
            node: A,
            record: e.record,
            depth: e.depth + 1,
            onAction: _[5] || (_[5] = (I) => r("action", I))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)), [
          [Ue, i.value === b]
        ])), 128))
      ], 2)) : $("", !0);
    };
  }
}), p$ = { class: "text-muted-foreground text-sm font-normal" }, v$ = { class: "flex items-start gap-3" }, g$ = { class: "min-w-0 flex-1" }, h$ = { class: "flex flex-wrap items-center gap-2" }, b$ = { class: "truncate text-sm font-medium" }, y$ = { class: "text-muted-foreground mt-0.5 text-xs" }, x$ = { class: "text-muted-foreground text-xs font-normal" }, k$ = { class: "mt-auto flex items-center gap-2" }, $$ = /* @__PURE__ */ O({
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
      class: P(["flex flex-col gap-4", k(Ga)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", p$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: P(k(hf))
      }, [
        (t(!0), n(z, null, V(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", v$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", g$, [
              o("div", h$, [
                o("h3", b$, c(u.label), 1),
                D(we, {
                  status: u.connected ? "connected" : "disconnected"
                }, {
                  default: L(() => [
                    N(c(u.connected ? "Connected" : "Not connected"), 1)
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
                    N(c(u.mode), 1)
                  ]),
                  _: 2
                }, 1032, ["status"])) : $("", !0)
              ]),
              o("p", y$, c(u.caption), 1)
            ])
          ]),
          o("p", x$, c(u.methods.join(" · ")), 1),
          o("div", k$, [
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: (f) => r("configure", u.key)
            }, {
              default: L(() => [...d[3] || (d[3] = [
                N(" Configure ", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            D(ue, {
              size: "sm",
              variant: "ghost",
              onClick: (f) => r("toggle", u.key)
            }, {
              default: L(() => [
                N(c(u.connected ? "Disconnect" : "Connect"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"])
          ])
        ]))), 128))
      ], 2)
    ], 2));
  }
}), w$ = { class: "flex flex-col gap-6" }, C$ = { class: "relative" }, S$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, M$ = ["d"], B$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, _$ = {
  key: 0,
  class: "flex flex-col gap-4"
}, A$ = { class: "flex flex-wrap items-center gap-2" }, P$ = { class: "text-muted-foreground text-sm font-normal" }, z$ = { class: "flex flex-col gap-1 text-sm" }, O$ = ["value"], L$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, V$ = { class: "flex flex-wrap items-center gap-2" }, j$ = {
  key: 1,
  class: "flex items-center gap-2"
}, V8 = /* @__PURE__ */ O({
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
    const l = ut(e, "gateways"), a = R(null), r = R(""), s = x(
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
        (M) => M.key === y ? { ...M, ...C } : M
      );
    }
    function f(y) {
      a.value = y;
    }
    function g(y) {
      const C = l.value.find((S) => S.key === y);
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
    function v(y, C) {
      const M = l.value.find((S) => S.key === y);
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
      const C = a.value;
      !C || !l.value.find((S) => S.key === C)?.connected || u(C, { mode: y });
    }
    return (y, C) => (t(), n(z, null, [
      o("div", w$, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", C$, [
          (t(), n("svg", S$, [
            o("path", {
              d: k(ce)("search")
            }, null, 8, M$)
          ])),
          D($e, {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (M) => r.value = M),
            type: "search",
            class: "pl-9",
            placeholder: "Search gateways…",
            "aria-label": "Search payment gateways"
          }, null, 8, ["modelValue"])
        ]),
        i.value.length > 0 ? (t(), T($$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", B$, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
      ]),
      D(St, {
        open: s.value !== null,
        title: s.value?.label ?? "Gateway",
        description: "Showcase fields only. Values are not sent anywhere.",
        size: "md",
        onClose: C[8] || (C[8] = (M) => a.value = null)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            size: "sm",
            onClick: C[6] || (C[6] = (M) => a.value = null)
          }, {
            default: L(() => [...C[21] || (C[21] = [
              N("Close", -1)
            ])]),
            _: 1
          }),
          s.value ? (t(), T(ue, {
            key: 0,
            size: "sm",
            onClick: C[7] || (C[7] = (M) => g(s.value.key))
          }, {
            default: L(() => [
              N(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", _$, [
            o("div", A$, [
              D(we, {
                status: s.value.connected ? "connected" : "disconnected"
              }, {
                default: L(() => [
                  N(c(s.value.connected ? "Connected" : "Not connected"), 1)
                ]),
                _: 1
              }, 8, ["status"]),
              s.value.connected && s.value.enabled !== !1 ? (t(), T(we, {
                key: 0,
                status: "offered"
              }, {
                default: L(() => [...C[9] || (C[9] = [
                  N(" Offered ", -1)
                ])]),
                _: 1
              })) : s.value.connected ? (t(), T(we, {
                key: 1,
                status: "disabled"
              }, {
                default: L(() => [...C[10] || (C[10] = [
                  N(" Disabled ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.isDefault ? (t(), T(we, {
                key: 2,
                status: "default"
              }, {
                default: L(() => [...C[11] || (C[11] = [
                  N(" Default ", -1)
                ])]),
                _: 1
              })) : $("", !0),
              s.value.connected && s.value.mode ? (t(), T(we, {
                key: 3,
                status: s.value.mode
              }, {
                default: L(() => [
                  N(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", P$, c(s.value.caption), 1),
            o("label", z$, [
              C[12] || (C[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, O$)
            ]),
            C[20] || (C[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", L$, [
              C[16] || (C[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              C[17] || (C[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", V$, [
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled !== !1 ? "default" : "outline",
                  onClick: C[1] || (C[1] = (M) => v(s.value.key, !0))
                }, {
                  default: L(() => [...C[13] || (C[13] = [
                    N(" Enable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.enabled === !1 ? "default" : "outline",
                  onClick: C[2] || (C[2] = (M) => v(s.value.key, !1))
                }, {
                  default: L(() => [...C[14] || (C[14] = [
                    N(" Disable ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant"]),
                D(ue, {
                  size: "sm",
                  variant: s.value.isDefault ? "default" : "outline",
                  disabled: !d(s.value),
                  onClick: C[3] || (C[3] = (M) => h(s.value.key))
                }, {
                  default: L(() => [...C[15] || (C[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", j$, [
              D(ue, {
                size: "sm",
                variant: s.value.mode === "test" ? "default" : "outline",
                onClick: C[4] || (C[4] = (M) => w("test"))
              }, {
                default: L(() => [...C[18] || (C[18] = [
                  N(" Test ", -1)
                ])]),
                _: 1
              }, 8, ["variant"]),
              D(ue, {
                size: "sm",
                variant: s.value.mode === "live" ? "default" : "outline",
                onClick: C[5] || (C[5] = (M) => w("live"))
              }, {
                default: L(() => [...C[19] || (C[19] = [
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
function ka(e) {
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
function j8(e) {
  const l = R(ka(e));
  ve(() => {
    l.value = ka(e);
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
function $a(e) {
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
function T8(e) {
  const l = R($a(e));
  ve(() => {
    l.value = $a(e);
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
function D8(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = R(
    l.driver === "none" ? "off" : "connecting"
  ), f = R(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), v, h, w, y = (/* @__PURE__ */ new Date()).toISOString(), C = null;
  function M(K, q) {
    g.set(K, { ...g.get(K) ?? {}, ...q }), !v && (v = setTimeout(() => {
      v = void 0, S();
    }, l.batchMs));
  }
  function S() {
    if (g.size === 0)
      return;
    const K = g;
    g = /* @__PURE__ */ new Map();
    const q = /* @__PURE__ */ new Set();
    for (const [oe, ne] of K) {
      const Z = a.value.find((G) => G[r] === oe);
      if (!Z) {
        d?.(oe, ne);
        continue;
      }
      Object.assign(Z, ne), q.add(oe);
    }
    q.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...q]), setTimeout(() => {
      const oe = new Set(f.value);
      q.forEach((ne) => oe.delete(ne)), f.value = oe;
    }, 1500));
  }
  async function _() {
    if (!(!s || a.value.length === 0)) {
      w?.abort(), w = new AbortController();
      try {
        const K = a.value.map((ne) => ne[r]), { records: q, at: oe } = await s(K, y);
        y = oe, u.value = "live";
        for (const ne of q)
          M(ne[r], ne);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    p(), u.value = "live", h = setInterval(_, l.intervalMs);
  }
  function p() {
    clearInterval(h), h = void 0, w?.abort();
  }
  function b() {
    return window.Echo ?? null;
  }
  function A() {
    const K = b();
    if (!K || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    C = l.channel;
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
    C && (b()?.leave(C), C = null);
  }
  function I() {
    l.driver === "poll" && m(), l.driver === "broadcast" && A();
  }
  function ae() {
    p(), E(), clearTimeout(v), v = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (ae(), u.value = "paused") : (y = (/* @__PURE__ */ new Date()).toISOString(), I(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (I(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), ae();
  }), { status: u, recentlyChanged: f, applyPatch: M, flush: S, pollOnce: _ };
}
const T$ = /^[a-z0-9-]+$/, D$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function E8(e) {
  mn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !T$.test(a) || typeof r != "string" || !D$.test(r) || (l[`--${a}`] = r);
    rc(l);
  });
}
const E$ = { class: "flex items-center gap-0.5" }, I$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", E$, [
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
}), F$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Xa, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), N$ = { class: "flex flex-col gap-2" }, R$ = { class: "bg-card rounded-lg border p-4" }, U$ = { class: "text-muted-foreground truncate text-xs" }, H$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, K$ = /* @__PURE__ */ O({
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
    function f(C, M) {
      return C.length <= M ? C : `${C.slice(0, M - 1).trimEnd()}…`;
    }
    const g = x(() => f(s.value, r.value.titleMax)), v = x(() => f(i.value, r.value.descriptionMax));
    function h(C, M, S) {
      return C === 0 ? { tone: "text-muted-foreground", note: "empty" } : C > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : C < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const w = x(
      () => h(s.value.length, r.value.titleMin, r.value.titleMax)
    ), y = x(
      () => h(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (C, M) => (t(), n("div", N$, [
      o("div", R$, [
        o("p", U$, c(u.value), 1),
        o("p", {
          class: P(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, c(g.value || "Untitled page"), 3),
        o("p", {
          class: P(["text-muted-foreground mt-1 line-clamp-2 text-sm", v.value === "" ? "italic" : ""])
        }, c(v.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", H$, [
        o("span", {
          class: P(w.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(w.value.note), 3),
        o("span", {
          class: P(y.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(y.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), q$ = ["value", "placeholder", "disabled"], G$ = /* @__PURE__ */ O({
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
    }, null, 42, q$));
  }
}), W$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, Z$ = ["aria-selected", "disabled", "title", "onClick"], J$ = /* @__PURE__ */ O({
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
    return (u, f) => (t(), n("div", W$, [
      (t(!0), n(z, null, V(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        role: "option",
        class: P(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [k(Se), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (v) => d(g)
      }, c(g), 11, Z$))), 128))
    ]));
  }
}), Y$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, X$ = ["disabled"], Q$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, ew = ["onClick"], tw = ["onClick"], aw = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkTreeSelect",
  props: {
    field: {},
    modelValue: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(""), i = R(!1), d = x(() => a.field.options ?? []);
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
    function v(h) {
      a.disabled || (r("update:modelValue", h), i.value = !1);
    }
    return (h, w) => (t(), n("div", Y$, [
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
      ], 10, X$),
      i.value ? (t(), n("div", Q$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": w[1] || (w[1] = (y) => s.value = y),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), n(z, null, V(f.value, (y) => (t(), n(z, {
          key: String(y.value)
        }, [
          o("button", {
            type: "button",
            class: P(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === y.value ? "bg-accent" : ""]),
            onClick: (C) => v(y.value)
          }, c(y.label), 11, ew),
          (t(!0), n(z, null, V(y.children ?? [], (C) => (t(), n("button", {
            key: String(C.value),
            type: "button",
            class: P(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === C.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => v(C.value)
          }, c(C.label), 11, tw))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), nw = ["aria-label"], lw = ["disabled", "aria-label", "aria-pressed", "onClick"], ow = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, sw = { key: 0 }, rw = ["id"], iw = ["fill"], dw = ["disabled"], uw = /* @__PURE__ */ O({
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
    return (g, v) => (t(), n("div", {
      class: "inline-flex items-center gap-0.5",
      role: "group",
      "aria-label": `Rating out of ${s.value}`,
      "data-test": "rating-field"
    }, [
      (t(!0), n(z, null, V(s.value, (h) => (t(), n("button", {
        key: h,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${h} of ${s.value}`,
        "aria-pressed": d.value >= h,
        onClick: (w) => u(h)
      }, [
        (t(), n("svg", ow, [
          f(h) === "half" ? (t(), n("defs", sw, [
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
            ])], 8, rw)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(h) === "full" ? "currentColor" : f(h) === "half" ? `url(#half-${e.field.key}-${h})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, iw)
        ]))
      ], 8, lw))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: v[0] || (v[0] = (h) => u(0))
      }, " Clear ", 8, dw)) : $("", !0)
    ], 8, nw));
  }
});
function cw() {
  xe("radio", Gm), xe("toggle-buttons", Ta), xe("checkboxlist", Jm), xe("tags", np), xe("colour", vp), xe("slider", Wp), xe("rating", uw), xe("phone", G$), xe("icon-picker", J$), xe("tree-select", aw), xe("visual-select", rv), xe("markdown", Mm), xe("code", Lm), xe("map", xp), xe("qrcode", Sp), xe("barcode", Op), xe("diff", jp), xe("seo-preview", K$), Ot("swatch", dv), Ot("voucher-code-box", F$), Ot("document-colour-mode", I$);
}
function tn() {
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
const fw = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = tn();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: P(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", k(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), mw = ["id"], Be = /* @__PURE__ */ O({
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
        D(fw, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, mw));
  }
}), pw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, vw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, gw = {
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
      e.eyebrow ? (t(), n("p", pw, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", vw, c(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", gw, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), hw = { class: "flex flex-col gap-10" }, bw = { class: "grid gap-4 md:grid-cols-3" }, yw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, xw = { class: "text-sm font-semibold text-balance" }, kw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, $w = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", hw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", bw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(Me(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", yw, c(r.meta), 1)) : $("", !0),
                  o("h3", xw, c(r.title), 1),
                  r.body ? (t(), n("p", kw, c(r.body), 1)) : $("", !0)
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
function ww() {
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
const Cw = { class: "pk-tilt-inner relative h-full" }, Sw = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = ww();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", Cw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), Mw = { class: "flex flex-col gap-10" }, Bw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, _w = { class: "text-base font-semibold" }, Aw = { class: "text-sm text-pretty text-muted-foreground" }, Pw = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Be, null, {
      default: L(() => [
        o("div", Mw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Bw, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), T(Sw, {
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
                  o("h3", _w, c(s.title), 1),
                  o("p", Aw, c(s.body), 1)
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
}), zw = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, Ow = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, Lw = { class: "grid gap-4 text-sm" }, Vw = {
  key: 0,
  class: "grid gap-1"
}, jw = ["href"], Tw = {
  key: 1,
  class: "grid gap-1"
}, Dw = ["href"], Ew = {
  key: 2,
  class: "grid gap-1"
}, Iw = { class: "text-pretty text-muted-foreground" }, Fw = ["href"], Nw = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Be, { muted: "" }, {
      default: L(() => [
        o("div", zw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Ow, [
            o("dl", Lw, [
              e.email ? (t(), n("div", Vw, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, jw)
                ])
              ])) : $("", !0),
              e.phone ? (t(), n("div", Tw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, Dw)
                ])
              ])) : $("", !0),
              e.address ? (t(), n("div", Ew, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", Iw, c(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, Fw)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Uw = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Hw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, Kw = ["href"], qw = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", Rw, [
          o("h2", Uw, c(e.title), 1),
          e.body ? (t(), n("p", Hw, c(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, Kw)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Gw = { class: "flex flex-col gap-8" }, Ww = { class: "divide-y rounded-lg border" }, Zw = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Jw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Yw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, { narrow: "" }, {
      default: L(() => [
        o("div", Gw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Ww, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Zw, [
                N(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Jw, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Xw = { class: "flex flex-col gap-10" }, Qw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, e4 = { class: "text-sm font-semibold" }, t4 = { class: "text-sm text-pretty text-muted-foreground" }, a4 = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", Xw, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Qw, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", e4, c(r.title), 1),
              o("p", t4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), n4 = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, l4 = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, o4 = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, s4 = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, r4 = ["href"], i4 = ["href"], d4 = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, u4 = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", {
          class: P(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", n4, c(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), n("p", l4, c(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: P([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), n("p", o4, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", s4, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, r4)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, i4)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", d4, c(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), c4 = { class: "flex flex-col items-center gap-6" }, f4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, m4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, p4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, { muted: "" }, {
      default: L(() => [
        o("div", c4, [
          e.title ? (t(), n("p", f4, c(e.title), 1)) : $("", !0),
          o("ul", m4, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "text-lg font-semibold text-muted-foreground/70"
            }, c(r.name), 1))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), v4 = { class: "flex flex-col gap-10" }, g4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, h4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, b4 = ["aria-pressed"], y4 = ["aria-pressed"], x4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, k4 = { class: "grid gap-4 md:grid-cols-3" }, $4 = { class: "flex flex-col gap-1" }, w4 = { class: "text-sm font-semibold" }, C4 = { class: "flex items-baseline gap-1" }, S4 = { class: "text-3xl font-semibold tracking-tight" }, M4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, B4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, _4 = { class: "flex flex-col gap-2 text-sm" }, A4 = { class: "text-muted-foreground" }, P4 = ["href"], z4 = /* @__PURE__ */ O({
  __name: "PkPricing",
  props: {
    title: {},
    body: {},
    annualNote: {},
    items: {}
  },
  setup(e) {
    const l = e, a = R(!1), r = x(() => (l.items ?? []).some((i) => !!i.annualPrice));
    function s(i) {
      return a.value && i.annualPrice ? i.annualPrice : i.price;
    }
    return (i, d) => (t(), T(Be, { muted: "" }, {
      default: L(() => [
        o("div", v4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", g4, [
            o("div", h4, [
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, b4),
              o("button", {
                type: "button",
                class: P([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, y4)
            ]),
            e.annualNote ? (t(), n("p", x4, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", k4, [
            (t(!0), n(z, null, V(e.items ?? [], (u, f) => (t(), n("li", {
              key: f,
              class: P(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", $4, [
                o("h3", w4, c(u.name), 1),
                o("p", C4, [
                  o("span", S4, c(s(u)), 1),
                  u.period ? (t(), n("span", M4, c(u.period), 1)) : $("", !0)
                ]),
                u.body ? (t(), n("p", B4, c(u.body), 1)) : $("", !0)
              ]),
              o("ul", _4, [
                (t(!0), n(z, null, V(u.features ?? [], (g, v) => (t(), n("li", {
                  key: v,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", A4, c(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: P([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, P4)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function O4() {
  const e = R(null);
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
const L4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, V4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, j4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, T4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, D4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, E4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, I4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, F4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, N4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, R4 = { class: "flex" }, U4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, H4 = { class: "min-w-0 flex-1 p-4" }, K4 = { class: "flex flex-col divide-y rounded-md border" }, q4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = O4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", L4, [
        o("div", V4, [
          o("div", j4, [
            o("h2", T4, c(e.title), 1),
            e.body ? (t(), n("p", D4, c(e.body), 1)) : $("", !0)
          ]),
          o("div", E4, [
            o("div", I4, [
              o("div", F4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", N4, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", R4, [
                o("div", U4, [
                  (t(), n(z, null, V(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", H4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", K4, [
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
}), G4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = tn(), s = R(0);
    return me(r, (i) => {
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
    }), (i, d) => (t(), n("span", {
      ref_key: "el",
      ref: a
    }, c(e.prefix ?? "") + c(s.value.toFixed(e.decimals)) + c(e.suffix ?? ""), 513));
  }
}), W4 = { class: "flex flex-col gap-10" }, Z4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, J4 = { class: "order-2 text-sm text-muted-foreground" }, Y4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, X4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Be, { muted: "" }, {
      default: L(() => [
        o("div", W4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", Z4, [
            (t(!0), n(z, null, V(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", J4, c(s.label), 1),
              o("dd", Y4, [
                l(s.value) ? (t(), T(G4, {
                  key: 0,
                  to: l(s.value).number,
                  prefix: l(s.value).prefix,
                  suffix: l(s.value).suffix,
                  decimals: l(s.value).decimals
                }, null, 8, ["to", "prefix", "suffix", "decimals"])) : (t(), n(z, { key: 1 }, [
                  N(c(s.value), 1)
                ], 64))
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Q4 = { class: "flex flex-col gap-10" }, e5 = { class: "grid gap-6 md:grid-cols-3" }, t5 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, a5 = { class: "text-sm font-semibold" }, n5 = { class: "text-sm text-pretty text-muted-foreground" }, l5 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", Q4, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", e5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", t5, c(s + 1), 1),
              o("h3", a5, c(r.title), 1),
              o("p", n5, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), o5 = { class: "flex flex-col gap-10" }, s5 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, r5 = ["src"], i5 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, d5 = { class: "min-w-0" }, u5 = { class: "truncate text-sm font-semibold" }, c5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, f5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, m5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", o5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", s5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, r5)) : (t(), n("span", i5, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", d5, [
                o("h3", u5, c(r.name), 1),
                r.role ? (t(), n("p", c5, c(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), n("p", f5, c(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), p5 = { class: "flex flex-col gap-10" }, v5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, g5 = { class: "text-pretty text-sm leading-relaxed" }, h5 = { class: "mt-auto flex items-center gap-3" }, b5 = ["src"], y5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, x5 = { class: "min-w-0" }, k5 = { class: "block truncate text-sm font-medium" }, $5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, w5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Be, null, {
      default: L(() => [
        o("div", p5, [
          D(Ve, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", v5, [
            (t(!0), n(z, null, V(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", g5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", h5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, b5)) : (t(), n("span", y5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", x5, [
                  o("span", k5, c(r.name), 1),
                  r.role ? (t(), n("span", $5, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), I8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: u4,
      logos: p4,
      features: a4,
      bento: Pw,
      showcase: q4,
      steps: l5,
      stats: X4,
      testimonials: w5,
      team: m5,
      articles: $w,
      contact: Nw,
      pricing: z4,
      faq: Yw,
      cta: qw
    }, s = x(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, V(s.value, (u) => (t(), T(Me(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), C5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, F8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", C5, [
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
}), S5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, N8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", S5, [...a[0] || (a[0] = [
      Ht('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), M5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, R8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", M5, [...a[0] || (a[0] = [
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
}), B5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, U8 = /* @__PURE__ */ O({
  __name: "PkStudioBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", B5, [...a[0] || (a[0] = [
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
cw();
const H8 = "0.0.1";
export {
  da as ACTION_KEY_ICONS,
  It as APPEARANCE_STYLE_ID,
  r8 as AdminDirectory,
  uf as Alert,
  cf as AlertDescription,
  ff as AlertTitle,
  qC as AppPageFooter,
  d3 as AppearanceDrawer,
  iC as Avatar,
  dC as AvatarFallback,
  uC as AvatarImage,
  ea as BADGE_VARIANTS,
  n3 as BadgeResolver,
  e8 as BarChart,
  cC as Breadcrumb,
  fC as BreadcrumbEllipsis,
  mC as BreadcrumbItem,
  pC as BreadcrumbLink,
  vC as BreadcrumbList,
  gC as BreadcrumbPage,
  hC as BreadcrumbSeparator,
  I5 as BulkActions,
  Ga as CATALOGUE_CONTAINER,
  hf as CATALOGUE_GRID,
  g3 as CATALOGUE_GRID_TIGHT,
  bf as CATALOGUE_GRID_TILES,
  TC as Card,
  DC as CardAction,
  EC as CardContent,
  IC as CardDescription,
  FC as CardFooter,
  NC as CardHeader,
  RC as CardTitle,
  l0 as CartPanel,
  g8 as CatalogBrowser,
  I1 as CatalogCard,
  en as CatalogFilterSheet,
  la as CatalogGrid,
  p8 as CatalogInspect,
  G0 as CatalogItemDetail,
  v8 as CatalogItemView,
  h8 as CatalogRegister,
  m8 as CatalogTill,
  ub as ChartCard,
  mt as ChartTooltip,
  ei as Checkbox,
  Y5 as CheckboxCell,
  X5 as CodeCell,
  pu as ColourCell,
  o8 as ComboChart,
  Qr as CreateOptionDialog,
  Gr as CreateOptionError,
  y8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  _k as DASHBOARD_HIDE_KEY,
  x8 as DashboardShortcuts,
  ro as DataTable,
  SC as Dialog,
  MC as DialogClose,
  BC as DialogContent,
  _C as DialogDescription,
  AC as DialogFooter,
  PC as DialogHeader,
  Wf as DialogOverlay,
  zC as DialogScrollContent,
  OC as DialogTitle,
  LC as DialogTrigger,
  r8 as DirectoryPage,
  W3 as DropdownMenu,
  Z3 as DropdownMenuCheckboxItem,
  J3 as DropdownMenuContent,
  Y3 as DropdownMenuGroup,
  X3 as DropdownMenuItem,
  Q3 as DropdownMenuLabel,
  G8 as DropdownMenuPortal,
  eC as DropdownMenuRadioGroup,
  tC as DropdownMenuRadioItem,
  aC as DropdownMenuSeparator,
  nC as DropdownMenuShortcut,
  lC as DropdownMenuSub,
  oC as DropdownMenuSubContent,
  sC as DropdownMenuSubTrigger,
  rC as DropdownMenuTrigger,
  t3 as EditableCell,
  Se as FOCUS_RING,
  F5 as FOCUS_RING_SOFT,
  ca as FOCUS_RING_WITHIN,
  io as FORM_MEASURE,
  Xe as FormFieldControl,
  s8 as HeatmapChart,
  fl as ICON_ALIASES,
  ht as ICON_PATHS,
  Re as INPUT_COPY,
  Yr as INPUT_PLACEHOLDER,
  Jr as INPUT_TEXT,
  lu as IconCell,
  du as ImageCell,
  L8 as InfoNode,
  xf as JPEG_IMAGE_ERROR,
  Q5 as KeyValueCell,
  VC as Label,
  Bg as LineChart,
  Ex as LineItems,
  fo as MODAL_PANEL,
  mo as MODAL_PANEL_FORM,
  G5 as MUTED_COPY,
  gt as MUTED_COPY_SNUG,
  W5 as MUTED_COPY_XS,
  $t as MiniStatCard,
  bC as NavigationMenu,
  yC as NavigationMenuContent,
  xC as NavigationMenuIndicator,
  kC as NavigationMenuItem,
  $C as NavigationMenuLink,
  wC as NavigationMenuList,
  CC as NavigationMenuTrigger,
  qf as NavigationMenuViewport,
  yf as OPAQUE_IMAGE_ERROR,
  Va as OVERLAY_FORM_MEASURE,
  qe as PAGE_SHELL,
  D5 as PAGE_SHELL_COMPACT,
  E5 as PAGE_SHELL_STACK,
  V8 as PaymentGatewaySettings,
  $$ as PaymentGateways,
  t8 as PieChart,
  p3 as PkAlertError,
  $w as PkArticles,
  F8 as PkAuroraBackdrop,
  Ke as PkBadge,
  Op as PkBarcode,
  Pw as PkBento,
  u3 as PkBottomNav,
  UC as PkBoundary,
  ZC as PkBuilder,
  ue as PkButton,
  JC as PkCalendar,
  HC as PkCard,
  Jm as PkCheckboxList,
  Xa as PkCodeBox,
  Lm as PkCodeInput,
  vp as PkColourPicker,
  R8 as PkConsoleBackdrop,
  Nw as PkContact,
  G4 as PkCountUp,
  qw as PkCta,
  GC as PkDeviceFrame,
  jp as PkDiff,
  Fv as PkDocument,
  Ze as PkDropdown,
  N8 as PkEditorialBackdrop,
  Tt as PkEmptyState,
  Yw as PkFaq,
  a4 as PkFeatureGrid,
  Pe as PkFieldLabel,
  ja as PkFileUpload,
  De as PkHeading,
  u4 as PkHero,
  _i as PkKeyValue,
  I8 as PkLandingSections,
  p4 as PkLogoCloud,
  hp as PkMap,
  xp as PkMapField,
  Mm as PkMarkdownInput,
  it as PkModal,
  Yt as PkMultiSelect,
  f3 as PkOtpInput,
  m3 as PkPageHeader,
  M8 as PkPasskeyRegister,
  v3 as PkPasswordInput,
  z4 as PkPricing,
  Sp as PkQrCode,
  Bx as PkQtyStepper,
  gs as PkQueryBuilder,
  Gm as PkRadioGroup,
  WC as PkRepeater,
  fw as PkReveal,
  Ei as PkRichEditor,
  Be as PkSection,
  Ve as PkSectionHeading,
  q4 as PkShowcase,
  ik as PkSignaturePad,
  ze as PkSkeleton,
  St as PkSlideover,
  Wp as PkSlider,
  c3 as PkSpinner,
  X4 as PkStats,
  we as PkStatusBadge,
  Kr as PkStepIndicator,
  l5 as PkSteps,
  U8 as PkStudioBackdrop,
  dv as PkSwatchPreview,
  np as PkTagsInput,
  m5 as PkTeam,
  w5 as PkTestimonials,
  $e as PkTextInput,
  Sw as PkTiltCard,
  Ta as PkToggleButtons,
  rv as PkVisualSelect,
  fy as PlanCard,
  f8 as PlanEditor,
  c8 as PlanGrid,
  l8 as PolarAreaChart,
  n8 as RadarChart,
  J5 as RatingCell,
  l3 as RecordActions,
  B8 as RecordForm,
  Z5 as RelationCreateDialog,
  R5 as RelationPanel,
  uo as SLIDEOVER_BODY,
  co as SLIDEOVER_WIDTH,
  g1 as STATUS_TONES,
  a8 as ScatterChart,
  Da as SchemaNode,
  d8 as SegmentedBar,
  w8 as SelectionBar,
  Nf as Separator,
  $8 as SetupChecklist,
  qa as ShadcnInput,
  Xt as Sheet,
  k3 as SheetClose,
  Qt as SheetContent,
  Mf as SheetDescription,
  $3 as SheetFooter,
  Bf as SheetHeader,
  _f as SheetTitle,
  w3 as SheetTrigger,
  Ab as ShortcutsWidget,
  C3 as Sidebar,
  S3 as SidebarContent,
  M3 as SidebarFooter,
  B3 as SidebarGroup,
  _3 as SidebarGroupAction,
  A3 as SidebarGroupContent,
  P3 as SidebarGroupLabel,
  z3 as SidebarHeader,
  O3 as SidebarInput,
  L3 as SidebarInset,
  V3 as SidebarMenu,
  j3 as SidebarMenuAction,
  T3 as SidebarMenuBadge,
  E3 as SidebarMenuButton,
  I3 as SidebarMenuItem,
  F3 as SidebarMenuSkeleton,
  N3 as SidebarMenuSub,
  R3 as SidebarMenuSubButton,
  U3 as SidebarMenuSubItem,
  H3 as SidebarProvider,
  K3 as SidebarRail,
  q3 as SidebarSeparator,
  G3 as SidebarTrigger,
  b8 as SignatureStudio,
  Bt as Sparkline,
  jC as Spinner,
  i8 as StatCard,
  u8 as StatListChart,
  k8 as StatStrip,
  We as Switch,
  Wa as TRANSPARENT_IMAGE_HELP,
  C8 as TablePagination,
  qo as TableShell,
  S8 as TableTabs,
  wr as TableToolbar,
  e3 as TagsCell,
  QC as ThemeToggle,
  Ef as Tooltip,
  If as TooltipContent,
  D3 as TooltipProvider,
  Ff as TooltipTrigger,
  Qa as TrendBadge,
  _8 as UnsavedBar,
  mf as alertVariants,
  oc as appearancePayload,
  Na as appearanceVars,
  Ft as applyAppearance,
  Sf as assertTransparentImage,
  s3 as bootstrapAppearance,
  ot as buttonClasses,
  wt as catalogFiltersActive,
  Q as cn,
  Zr as createOptionActionLabel,
  Wr as createOptionTitle,
  F1 as cycleLabel,
  Ee as emptyCatalogFilters,
  N2 as entryView,
  qr as fieldControl,
  q5 as fieldErrorsFromPayload,
  ux as findExactSku,
  N1 as formatPerkValue,
  zu as hasBadgeValue,
  z8 as hasEntryView,
  U5 as hasFieldControl,
  YC as hasOptionPreview,
  ce as iconPath,
  wf as imageHasTransparency,
  Ra as initializeAppearance,
  aa as isDark,
  oa as matchCatalogItem,
  y3 as mergeLayoutItems,
  Gf as navigationMenuTriggerStyle,
  Zp as optionPreview,
  h3 as packWidgetColumns,
  b3 as parseWidgetId,
  R1 as perkGranted,
  na as readAppearance,
  sc as readServerAppearance,
  cw as registerBuiltInFieldControls,
  P8 as registerEntryView,
  xe as registerFieldControl,
  Ot as registerOptionPreview,
  R2 as registeredEntryViews,
  H5 as registeredFieldTypes,
  Jp as registeredOptionPreviews,
  o3 as resetAppearanceBootstrapForTests,
  O8 as resetEntryViews,
  K5 as resetFieldControls,
  XC as resetOptionPreviews,
  lt as resolveActionIcon,
  i3 as setAppearancePersister,
  Rf as sidebarMenuButtonVariants,
  x1 as statusBadgeVariant,
  y1 as statusTone,
  r3 as syncAppearanceFromInertiaPage,
  x3 as toPersistedLayout,
  N5 as toUrl,
  Ka as useAppearance,
  j8 as useColumnVisibility,
  T8 as useColumnWidths,
  D8 as useLiveUpdates,
  ww as usePointer,
  tn as useReveal,
  a3 as useSchemaColumns,
  O4 as useScrollProgress,
  KC as useShellPageFooter,
  Mt as useSidebar,
  E8 as useTenantTheme,
  A8 as useUnsavedChanges,
  H8 as version,
  pa as widgetId
};
//# sourceMappingURL=index.js.map
