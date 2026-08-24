import './ui.css';
import { defineComponent as O, useSlots as Ft, openBlock as t, createElementBlock as n, normalizeClass as A, unref as y, renderSlot as U, createElementVNode as o, toDisplayString as c, createCommentVNode as $, computed as x, normalizeStyle as se, Fragment as z, renderList as j, ref as R, watch as me, useId as an, withModifiers as he, createTextVNode as N, createVNode as D, createStaticVNode as Nt, createBlock as T, createSlots as rt, withCtx as L, nextTick as Te, onBeforeUnmount as ke, Teleport as Qe, Transition as Ue, onMounted as ve, withDirectives as pe, vModelText as Ae, resolveDynamicComponent as _e, resolveComponent as Rt, vModelSelect as We, vModelDynamic as nn, mergeProps as re, normalizeProps as Oe, guardReactiveProps as Fe, defineAsyncComponent as sa, inject as ht, vShow as He, onUnmounted as ln, isRef as on, useTemplateRef as sn, onErrorCaptured as rn, provide as Ot, markRaw as ka, withKeys as dn, reactive as it, useModel as ut, mergeModels as Ie, shallowRef as un, watchEffect as cn } from "vue";
import { useForwardPropsEmits as be, DialogRoot as $a, DialogOverlay as Ut, DialogPortal as Ht, DialogContent as Kt, DialogClose as et, CheckboxRoot as fn, CheckboxIndicator as mn, SwitchRoot as pn, SwitchThumb as vn, DialogDescription as wa, DialogTitle as Ca, DialogTrigger as Sa, createContext as gn, Primitive as tt, TooltipRoot as hn, TooltipPortal as bn, TooltipContent as yn, TooltipArrow as xn, TooltipProvider as Ma, TooltipTrigger as kn, Separator as $n, DropdownMenuRoot as wn, DropdownMenuCheckboxItem as Cn, DropdownMenuItemIndicator as Ba, DropdownMenuPortal as Sn, DropdownMenuContent as Mn, DropdownMenuGroup as Bn, useForwardProps as Le, DropdownMenuItem as _n, DropdownMenuLabel as An, DropdownMenuRadioGroup as Pn, DropdownMenuRadioItem as zn, DropdownMenuSeparator as On, DropdownMenuSub as Ln, DropdownMenuSubContent as jn, DropdownMenuSubTrigger as Vn, DropdownMenuTrigger as Tn, AvatarRoot as Dn, AvatarFallback as En, AvatarImage as In, NavigationMenuViewport as Fn, NavigationMenuRoot as Nn, NavigationMenuContent as Rn, NavigationMenuIndicator as Un, NavigationMenuItem as Hn, NavigationMenuLink as Kn, NavigationMenuList as qn, NavigationMenuTrigger as Gn, Label as Wn } from "reka-ui";
import { DropdownMenuPortal as z8 } from "reka-ui";
import { X as qt, Check as _a, AlertCircle as Zn, EyeOff as Jn, Eye as Yn, PanelLeftOpen as Xn, PanelLeftClose as Qn, Circle as el, ChevronRight as Aa, MoreHorizontal as tl, ChevronDown as al, Loader2Icon as nl } from "@lucide/vue";
import { reactiveOmit as fe, useVModel as Pa, useMediaQuery as ll, useEventListener as ol, defaultDocument as sl } from "@vueuse/core";
import { clsx as rl } from "clsx";
import { twMerge as il } from "tailwind-merge";
import { cva as Gt } from "class-variance-authority";
import { usePage as za, Link as dl } from "@inertiajs/vue3";
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
}, ul = {
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
  const l = ul[e] ?? e;
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
  const a = cl(e.label);
  if (a)
    return ce(a);
  if (e.destructive)
    return ce("trash");
  const r = e.color ?? "";
  return r && ia[r] ? ce(ia[r]) : ce("circle");
}
function cl(e) {
  if (!e)
    return null;
  const l = e.toLowerCase();
  return /\b(delete|remove|destroy|trash)\b/.test(l) ? "trash" : /\b(log\s*in|impersonat|sign\s*in\s+as)\b/.test(l) ? "log-in" : /\b(recharge|credit|wallet|top\s*up|topup)\b/.test(l) ? "coins" : /\b(edit|update)\b/.test(l) ? "pencil" : /\b(view|open|show)\b/.test(l) ? "eye" : /\b(restore|undo)\b/.test(l) ? "undo" : /\b(copy|replicate|duplicate)\b/.test(l) ? "copy" : /\b(export|download)\b/.test(l) ? "download" : /\b(suspend|ban|block)\b/.test(l) ? "ban" : /\b(activate|resume|enable)\b/.test(l) ? "play" : null;
}
const fl = {
  key: 0,
  class: "flex max-w-xs items-center justify-center",
  "aria-hidden": "true"
}, ml = ["d"], pl = { class: "flex max-w-sm flex-col gap-1" }, vl = {
  key: 0,
  class: "text-sm font-normal"
}, gl = {
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
      class: A(["text-muted-foreground flex flex-col items-center justify-center text-center", e.compact ? "gap-2 px-4 py-8" : "gap-3 px-6 py-12"]),
      role: "status"
    }, [
      y(l).illustration ? (t(), n("div", fl, [
        U(a.$slots, "illustration")
      ])) : (t(), n("div", {
        key: 1,
        class: A(["bg-muted text-muted-foreground flex items-center justify-center rounded-full", e.compact ? "size-10" : "size-12"]),
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
            class: A(e.compact ? "size-5" : "size-6")
          }, [
            o("path", {
              d: y(ce)(e.icon)
            }, null, 8, ml)
          ], 2))
        ])
      ], 2)),
      o("div", pl, [
        o("p", {
          class: A(["text-foreground font-medium", e.compact ? "text-sm" : "text-base"])
        }, c(e.title), 3),
        e.description ? (t(), n("p", vl, c(e.description), 1)) : $("", !0)
      ]),
      a.$slots.actions ? (t(), n("div", gl, [
        U(a.$slots, "actions")
      ])) : $("", !0)
    ], 2));
  }
}), hl = ["aria-label"], ze = /* @__PURE__ */ O({
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
        class: A(["bg-muted motion-safe:animate-pulse rounded", r.value]),
        style: se({
          width: i(f - 1),
          height: e.height && e.variant === "block" ? `${e.height}px` : void 0
        })
      }, null, 6))), 128))
    ], 12, hl));
  }
}), bl = { class: "w-full border-collapse text-sm" }, yl = { class: "bg-background sticky top-0 z-10" }, xl = {
  key: 0,
  class: "bg-muted/40"
}, kl = {
  key: 0,
  class: "w-8 border-b px-2 py-1.5"
}, $l = {
  key: 1,
  class: "w-10 border-b px-3 py-1.5"
}, wl = ["colspan"], Cl = {
  key: 2,
  class: "pk-actions bg-muted/40 sticky right-0 w-12 border-b border-l px-2 py-1.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Sl = { class: "bg-muted/50" }, Ml = {
  key: 0,
  class: "w-8 border-b px-2 py-2.5"
}, Bl = ["id", "checked", "indeterminate"], _l = ["onClick"], Al = {
  key: 0,
  class: "text-xs"
}, Pl = {
  key: 1,
  class: "text-xs opacity-40"
}, zl = { key: 1 }, Ol = ["aria-label", "onPointerdown"], Ll = {
  key: 2,
  class: "pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, jl = {
  key: 0,
  "data-slot": "table-skeleton",
  class: "transition-opacity"
}, Vl = {
  key: 0,
  class: "w-8 px-2 py-2.5"
}, Tl = {
  key: 1,
  class: "px-3 py-2.5"
}, Dl = {
  key: 2,
  class: "px-2 py-2.5"
}, El = {
  key: 0,
  class: "bg-muted/40"
}, Il = ["colspan"], Fl = ["aria-expanded", "dusk", "onClick"], Nl = {
  class: "text-[9px]",
  "aria-hidden": "true"
}, Rl = {
  key: 1,
  dusk: "group-header"
}, Ul = ["draggable", "onDragstart", "onDragover", "onDrop", "onContextmenu", "onClick"], Hl = {
  key: 0,
  class: "w-8 px-2 py-2 align-middle"
}, Kl = ["id", "value", "checked", "disabled", "aria-label", "onClick"], ql = {
  key: 0,
  class: "inline-flex items-center gap-1.5"
}, Gl = ["aria-label", "onClick"], Wl = { class: "text-xs" }, Zl = {
  key: 1,
  class: "text-muted-foreground"
}, Jl = { key: 2 }, Yl = {
  key: 2,
  class: "pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
}, Xl = {
  key: 2,
  class: "bg-muted/40 border-t-2"
}, Ql = { key: 0 }, eo = { class: "text-muted-foreground block text-[10px] font-medium" }, to = { class: "font-semibold tabular-nums" }, ao = { key: 1 }, no = 40, lo = /* @__PURE__ */ O({
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
      const ee = W[a.groupBy.key];
      return ee == null || ee === "" ? "" : String(ee);
    }
    function s(W) {
      return a.groupBy ? W === 0 ? !0 : r(a.rows[W]) !== r(a.rows[W - 1]) : !1;
    }
    function i(W) {
      if (W.__groupTitle)
        return String(W.__groupTitle);
      const ee = a.groupBy ? W[a.groupBy.key] : null, Y = ee == null || ee === "" ? "None" : String(ee);
      return !a.groupBy || a.groupBy.titlePrefixed === !1 ? Y : `${a.groupBy.label}: ${Y}`;
    }
    const d = R(/* @__PURE__ */ new Set()), u = R(/* @__PURE__ */ new Set());
    function f(W) {
      return a.groupBy?.collapsible ? d.value.has(W) : !1;
    }
    function g(W) {
      if (!a.groupBy?.collapsible)
        return;
      const ee = new Set(u.value);
      ee.add(W), u.value = ee;
      const Y = new Set(d.value);
      Y.has(W) ? Y.delete(W) : Y.add(W), d.value = Y;
    }
    function p(W) {
      return a.groupBy?.collapsible ? !f(r(a.rows[W])) : !0;
    }
    me(
      () => a.rows,
      (W) => {
        if (!a.groupBy?.collapsible || !a.collapsedGroupsByDefault)
          return;
        const ee = new Set(d.value);
        for (const Y of W) {
          const de = r(Y);
          de !== "" && !u.value.has(de) && ee.add(de);
        }
        d.value = ee;
      },
      { immediate: !0 }
    );
    const v = R(null), C = R(null);
    function h(W, ee) {
      v.value = W, ee.dataTransfer?.setData("text/plain", String(W)), ee.dataTransfer && (ee.dataTransfer.effectAllowed = "move");
    }
    function k() {
      v.value = null, C.value = null;
    }
    function M(W) {
      return v.value === null || C.value !== W ? "" : v.value > W ? "border-primary border-t-2" : "border-primary border-b-2";
    }
    function S(W, ee) {
      v.value !== null && (ee.preventDefault(), C.value = W);
    }
    function B(W) {
      const ee = v.value;
      if (v.value = null, C.value = null, ee === null || ee === W)
        return;
      const Y = a.rows.map((ie) => ie[a.rowKey]), [de] = Y.splice(ee, 1);
      Y.splice(W, 0, de), m("reorder", Y);
    }
    const m = l;
    function b(W, ee) {
      !a.rowClickable || a.reordering || ee.button !== 0 || ee.metaKey || ee.ctrlKey || ee.shiftKey || ee.altKey || ee.target?.closest('a, button, input, select, textarea, label, [role="menuitem"]') || (window.getSelection()?.toString().length ?? 0) > 0 || m("row-click", W);
    }
    const w = R(null), P = an(), I = x(() => a.columns.filter((W) => !a.hidden?.has(W.key))), E = x(() => {
      const W = I.value.find((ee) => ee.sticky);
      return W ? W.key : a.stickyFirst && I.value.length > 0 ? I.value[0].key : null;
    });
    function te(W) {
      return E.value === W.key;
    }
    function H() {
      return a.selectable && !a.reordering ? `${no}px` : "0";
    }
    function K(W) {
      const ee = a.columnWidths?.[W.key];
      return typeof ee == "number" ? ee : W.width;
    }
    function G(W) {
      const ee = K(W), Y = te(W), de = {};
      return ee !== void 0 && (de.width = `${ee}px`, de.minWidth = `${ee}px`, de.maxWidth = `${ee}px`), Y && (de.left = H()), Object.keys(de).length ? de : void 0;
    }
    function oe(W) {
      return a.resizable ? W.resizable !== !1 : !1;
    }
    function ae(W, ee) {
      if (!oe(W))
        return;
      ee.preventDefault(), ee.stopPropagation();
      const Y = ee.clientX, de = K(W) ?? 160, ie = ee.currentTarget;
      try {
        ie.setPointerCapture(ee.pointerId);
      } catch {
      }
      function Ke(nt) {
        const Mt = de + (nt.clientX - Y);
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
    const Z = x(() => I.value.some((W) => !!W.group)), q = x(() => {
      const W = [];
      for (const ee of I.value) {
        const Y = ee.group ?? null, de = W[W.length - 1];
        de && de.label === Y ? de.span += 1 : W.push({ label: Y, span: 1, key: `${Y ?? "loose"}-${ee.key}` });
      }
      return W;
    });
    function _(W) {
      const ee = W[a.rowKey];
      return ee == null || ee === "" ? null : ee;
    }
    function F(W) {
      const ee = _(W);
      return ee !== null && !!a.selected?.has(ee);
    }
    const V = R(null);
    function J(W) {
      return a.rows.findIndex((ee) => {
        const Y = _(ee);
        return Y !== null && Y === W;
      });
    }
    function ge(W, ee) {
      const Y = _(W);
      if (Y === null)
        return;
      const de = ee.shiftKey, ie = !!a.selected?.has(Y);
      if (de && V.value !== null && V.value !== Y) {
        const Ke = J(V.value), Ne = J(Y);
        if (Ke !== -1 && Ne !== -1) {
          const nt = Math.min(Ke, Ne), Mt = Math.max(Ke, Ne), tn = !ie;
          for (let pt = nt; pt <= Mt; pt++) {
            if (!p(pt))
              continue;
            const Bt = _(a.rows[pt]);
            if (Bt === null)
              continue;
            !!a.selected?.has(Bt) !== tn && m("toggle-row", Bt);
          }
          V.value = Y;
          return;
        }
      }
      m("toggle-row", Y), V.value = Y;
    }
    const ye = x(
      () => a.rows.map((W) => _(W)).filter((W) => W !== null)
    ), le = x(
      () => ye.value.length > 0 && ye.value.every((W) => a.selected?.has(W))
    ), X = x(
      () => !le.value && ye.value.some((W) => a.selected?.has(W))
    );
    function ne(W) {
      return W.sortKey ?? W.key;
    }
    function Ce(W) {
      return a.sort === ne(W);
    }
    async function la(W, ee, Y) {
      try {
        await navigator.clipboard.writeText(String(Y)), w.value = `${W}-${ee.key}`, setTimeout(() => w.value = null, 1200);
      } catch {
      }
    }
    const Qa = x(
      () => !!a.summaries && !!a.summaryValues && Object.keys(a.summaries).length > 0
    );
    function oa(W) {
      return a.summaries?.[W] ?? null;
    }
    function en(W) {
      const ee = a.summaries?.[W], Y = a.summaryValues?.[W];
      if (!ee)
        return "";
      if (Y == null)
        return "None";
      const de = ee.divideBy ? Y / ee.divideBy : Y, ie = new Intl.NumberFormat(void 0, {
        minimumFractionDigits: ee.decimals,
        maximumFractionDigits: ee.decimals
      }).format(de);
      return `${ee.prefix ?? ""}${ie}${ee.suffix ?? ""}`;
    }
    return (W, ee) => (t(), n("div", {
      class: A(["pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto", e.framed ? "rounded-lg border" : ""])
    }, [
      o("table", bl, [
        o("thead", yl, [
          Z.value ? (t(), n("tr", xl, [
            e.reordering ? (t(), n("th", kl)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", $l)) : $("", !0),
            (t(!0), n(z, null, j(q.value, (Y) => (t(), n("th", {
              key: Y.key,
              colspan: Y.span,
              class: "text-muted-foreground border-b px-3 py-1.5 text-left text-xs font-medium"
            }, c(Y.label ?? ""), 9, wl))), 128)),
            W.$slots.actions ? (t(), n("th", Cl)) : $("", !0)
          ])) : $("", !0),
          o("tr", Sl, [
            e.reordering ? (t(), n("th", Ml)) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("th", {
              key: 1,
              class: A(["w-10 border-b px-3 py-2.5", E.value ? "bg-muted/50 sticky left-0 z-[11]" : ""])
            }, [
              o("input", {
                id: `${y(P)}-page`,
                type: "checkbox",
                class: "accent-primary size-3.5 cursor-pointer align-middle",
                checked: le.value,
                indeterminate: X.value,
                "aria-label": "Select all rows on this page",
                onClick: ee[0] || (ee[0] = he(() => {
                }, ["stop"])),
                onChange: ee[1] || (ee[1] = he((Y) => m("toggle-page", !le.value), ["stop"]))
              }, null, 40, Bl)
            ], 2)) : $("", !0),
            (t(!0), n(z, null, j(I.value, (Y) => (t(), n("th", {
              key: Y.key,
              class: A([
                "text-muted-foreground relative border-b px-3 py-2.5 text-left font-medium whitespace-nowrap",
                te(Y) ? "bg-muted/50 sticky z-[11] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)]" : ""
              ]),
              style: se(G(Y))
            }, [
              Y.sortable ? (t(), n("button", {
                key: 0,
                class: "hover:text-foreground inline-flex items-center gap-1 transition-colors",
                onClick: (de) => m("sort", ne(Y))
              }, [
                N(c(Y.label) + " ", 1),
                Ce(Y) ? (t(), n("span", Al, c(e.direction === "desc" ? "↓" : "↑"), 1)) : (t(), n("span", Pl, "↕"))
              ], 8, _l)) : (t(), n("span", zl, c(Y.label), 1)),
              oe(Y) ? (t(), n("span", {
                key: 2,
                class: "hover:bg-primary/40 absolute top-0 right-0 z-[12] h-full w-1.5 cursor-col-resize",
                role: "separator",
                "aria-orientation": "vertical",
                "aria-label": `Resize ${Y.label}`,
                onPointerdown: (de) => ae(Y, de)
              }, null, 40, Ol)) : $("", !0)
            ], 6))), 128)),
            W.$slots.actions ? (t(), n("th", Ll, [...ee[2] || (ee[2] = [
              o("span", { class: "sr-only" }, "Actions", -1)
            ])])) : $("", !0)
          ])
        ]),
        e.loading && e.rows.length === 0 ? (t(), n("tbody", jl, [
          (t(), n(z, null, j(6, (Y) => o("tr", {
            key: `skel-${Y}`,
            class: "border-b"
          }, [
            e.reordering ? (t(), n("td", Vl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            e.selectable && !e.reordering ? (t(), n("td", Tl, [
              D(ze, {
                variant: "circle",
                class: "!size-4"
              })
            ])) : $("", !0),
            (t(!0), n(z, null, j(I.value, (de) => (t(), n("td", {
              key: de.key,
              class: "px-3 py-2.5"
            }, [
              D(ze, { variant: "text" })
            ]))), 128)),
            W.$slots.actions ? (t(), n("td", Dl, [
              D(ze, {
                variant: "circle",
                class: "!size-4 ml-auto"
              })
            ])) : $("", !0)
          ])), 64))
        ])) : (t(), n("tbody", {
          key: 1,
          class: A(e.loading ? "opacity-50 transition-opacity" : "transition-opacity")
        }, [
          (t(!0), n(z, null, j(e.rows, (Y, de) => (t(), n(z, {
            key: _(Y) ?? `row-${de}`
          }, [
            e.groupBy && s(de) ? (t(), n("tr", El, [
              o("td", {
                colspan: e.columns.length + (e.selectable ? 1 : 0) + (e.reordering ? 1 : 0) + 1,
                class: "text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
              }, [
                e.groupBy.collapsible ? (t(), n("button", {
                  key: 0,
                  type: "button",
                  class: "hover:text-foreground inline-flex items-center gap-1.5",
                  "aria-expanded": !f(r(Y)),
                  dusk: `group-header-${r(Y) || "none"}`,
                  onClick: (ie) => g(r(Y))
                }, [
                  o("span", Nl, c(f(r(Y)) ? "▸" : "▾"), 1),
                  N(" " + c(i(Y)), 1)
                ], 8, Fl)) : (t(), n("span", Rl, c(i(Y)), 1))
              ], 8, Il)
            ])) : $("", !0),
            p(de) ? (t(), n("tr", {
              key: 1,
              class: A(["group pk-row border-b transition-colors hover:bg-muted/50", [
                F(Y) ? "bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]" : e.striped && de % 2 === 1 ? "bg-muted/20" : "",
                v.value === de ? "opacity-40" : "",
                M(de),
                e.reordering ? "cursor-grab active:cursor-grabbing" : "",
                e.rowClickable && !e.reordering ? "cursor-pointer" : ""
              ]]),
              draggable: e.reordering,
              onDragstart: (ie) => h(de, ie),
              onDragover: (ie) => S(de, ie),
              onDrop: he((ie) => B(de), ["prevent"]),
              onDragend: k,
              onContextmenu: (ie) => m("row-contextmenu", Y, ie),
              onClick: (ie) => b(Y, ie)
            }, [
              e.reordering ? (t(), n("td", Hl, [...ee[3] || (ee[3] = [
                Nt('<span class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing" aria-hidden="true" data-v-c0f7d40f><svg class="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-c0f7d40f><circle cx="9" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="6" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="12" r="1.5" data-v-c0f7d40f></circle><circle cx="9" cy="18" r="1.5" data-v-c0f7d40f></circle><circle cx="15" cy="18" r="1.5" data-v-c0f7d40f></circle></svg></span>', 1)
              ])])) : $("", !0),
              e.selectable && !e.reordering ? (t(), n("td", {
                key: 1,
                class: A(["px-3 py-2", E.value ? "bg-background sticky left-0 z-[1] group-hover:bg-muted/50" : ""])
              }, [
                o("input", {
                  id: `${y(P)}-row-${_(Y) ?? de}`,
                  type: "checkbox",
                  class: "accent-primary size-3.5 cursor-pointer align-middle",
                  value: _(Y) ?? void 0,
                  checked: F(Y),
                  disabled: _(Y) === null,
                  "aria-label": _(Y) === null ? "This row has no id and cannot be selected" : `Select row ${_(Y)}`,
                  onClick: he((ie) => ge(Y, ie), ["stop"])
                }, null, 8, Kl)
              ], 2)) : $("", !0),
              (t(!0), n(z, null, j(I.value, (ie) => (t(), n("td", {
                key: ie.key,
                class: A(["px-3 py-2 whitespace-nowrap", [
                  ie.cellClass,
                  te(ie) ? "bg-background sticky z-[1] shadow-[8px_0_8px_-8px_rgb(0_0_0/0.25)] group-hover:bg-muted/50" : ""
                ]]),
                style: se(G(ie))
              }, [
                U(W.$slots, `cell:${ie.key}`, {
                  row: Y,
                  value: Y[ie.key],
                  column: ie
                }, () => [
                  ie.copyable ? (t(), n("span", ql, [
                    N(c(Y[ie.key]) + " ", 1),
                    o("button", {
                      type: "button",
                      class: "text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100",
                      "aria-label": `Copy ${ie.label.toLowerCase()}`,
                      onClick: (Ke) => la(String(Y[e.rowKey]), ie, Y[ie.key])
                    }, [
                      o("span", Wl, c(w.value === `${Y[e.rowKey]}-${ie.key}` ? "✓" : "⧉"), 1)
                    ], 8, Gl)
                  ])) : Y[ie.key] == null || Y[ie.key] === "" ? (t(), n("span", Zl, "None")) : (t(), n("span", Jl, c(Y[ie.key]), 1))
                ], !0)
              ], 6))), 128)),
              W.$slots.actions ? (t(), n("td", Yl, [
                U(W.$slots, "actions", { row: Y }, void 0, !0)
              ])) : $("", !0)
            ], 42, Ul)) : $("", !0)
          ], 64))), 128))
        ], 2)),
        Qa.value ? (t(), n("tfoot", Xl, [
          o("tr", null, [
            e.selectable ? (t(), n("td", Ql)) : $("", !0),
            (t(!0), n(z, null, j(e.columns, (Y) => (t(), n(z, {
              key: `s-${Y.key}`
            }, [
              e.hidden?.has(Y.key) ? $("", !0) : (t(), n("td", {
                key: 0,
                class: A(["px-3 py-2 align-top text-sm whitespace-nowrap", Y.cellClass])
              }, [
                oa(Y.key) ? (t(), n(z, { key: 0 }, [
                  o("span", eo, c(oa(Y.key).label), 1),
                  o("span", to, c(en(Y.key)), 1)
                ], 64)) : $("", !0)
              ], 2))
            ], 64))), 128)),
            W.$slots.actions ? (t(), n("td", ao)) : $("", !0)
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
}, oo = /* @__PURE__ */ wt(lo, [["__scopeId", "data-v-c0f7d40f"]]), Ge = "w-full min-w-0 px-4 py-6 sm:px-6", S5 = "w-full min-w-0 p-3 sm:p-4", M5 = "w-full min-w-0 space-y-6 px-4 py-6 sm:px-6", so = "w-full max-w-7xl", ro = "px-4 py-4", Oa = "w-full min-w-0", io = {
  /** Filters, short lists (~24rem). */
  sm: "w-full max-w-sm",
  /** Notifications, inspect (~28rem). */
  md: "w-full max-w-md",
  /** Secondary action forms (~36rem). */
  lg: "w-full max-w-xl",
  /** Opt-in CRUD slide-over (~42rem). */
  xl: "w-full max-w-2xl"
}, uo = "bg-popover text-popover-foreground flex w-full max-w-lg max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", co = "bg-popover text-popover-foreground flex w-full max-w-xl max-h-[min(85vh,720px)] flex-col overflow-hidden rounded-xl border shadow-2xl", fo = ["aria-busy", "aria-label"], mo = { class: "bg-popover sticky top-0 z-10 shrink-0 border-b px-5 py-4" }, po = { class: "text-base font-semibold" }, vo = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-sm"
}, go = {
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
    const d = R(!1), u = x(() => a.size === "form" ? co : uo);
    function f(v) {
      d.value = v.target === v.currentTarget;
    }
    function g(v) {
      d.value && v.target === v.currentTarget && !a.busy && r("close"), d.value = !1;
    }
    function p(v) {
      if (!a.open)
        return;
      if (v.key === "Escape" && !a.busy) {
        v.stopPropagation(), r("close");
        return;
      }
      if (v.key !== "Tab" || !s.value)
        return;
      const C = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (C.length === 0)
        return;
      const h = C[0], k = C[C.length - 1];
      v.shiftKey && document.activeElement === h ? (v.preventDefault(), k.focus()) : !v.shiftKey && document.activeElement === k && (v.preventDefault(), h.focus());
    }
    return me(
      () => a.open,
      (v) => {
        v ? (i = document.activeElement, document.addEventListener("keydown", p), Te(
          () => s.value?.querySelector("input, select, textarea, button")?.focus()
        )) : (document.removeEventListener("keydown", p), i?.focus(), i = null);
      }
    ), ke(() => document.removeEventListener("keydown", p)), (v, C) => (t(), T(Qe, { to: "body" }, [
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
              class: A(u.value)
            }, [
              o("div", mo, [
                o("h2", po, c(e.title), 1),
                e.description ? (t(), n("p", vo, c(e.description), 1)) : $("", !0)
              ]),
              o("div", {
                class: A(["min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4", y(Oa)])
              }, [
                U(v.$slots, "default")
              ], 2),
              v.$slots.footer ? (t(), n("div", go, [
                U(v.$slots, "footer")
              ])) : $("", !0)
            ], 10, fo)
          ], 32)) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ho = 160, Je = /* @__PURE__ */ O({
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
    function g(b) {
      !a.dismissOnPanelClick || b.target?.closest("input, select, textarea, label, [data-keep-open]") || k();
    }
    async function p() {
      f && (clearTimeout(f), f = null), !r.value && (r.value = !0, await Te(), M());
    }
    function v() {
      f = setTimeout(k, 180);
    }
    async function C() {
      u.value = null, r.value = !r.value, r.value && (await Te(), M());
    }
    async function h(b, w) {
      u.value = { x: b, y: w }, r.value = !0, await Te(), M();
    }
    function k() {
      r.value = !1, u.value = null;
    }
    function M() {
      const b = s.value, w = i.value;
      if (!b || !w)
        return;
      const P = w.getBoundingClientRect(), I = 8, E = u.value ? new DOMRect(u.value.x, u.value.y, 0, 0) : b.getBoundingClientRect();
      let te, H;
      if (a.placement === "bottom")
        te = E.bottom + a.offset, te + P.height > window.innerHeight - I && E.top - P.height - a.offset > I && (te = E.top - P.height - a.offset), H = a.align === "end" && !u.value ? E.right - P.width : E.left;
      else {
        te = E.top;
        const K = a.placement === "right", G = E.right + a.offset + P.width < window.innerWidth - I, oe = E.left - a.offset - P.width > I;
        H = (K ? G || !oe : !oe && G) ? E.right + a.offset : E.left - a.offset - P.width;
      }
      H = Math.min(Math.max(I, H), window.innerWidth - P.width - I), te = Math.min(Math.max(I, te), window.innerHeight - P.height - I), d.value = { top: te, left: H, minWidth: Math.max(E.width, ho) };
    }
    function S(b) {
      if (!r.value)
        return;
      const w = b.target;
      s.value?.contains(w) || i.value?.contains(w) || (w instanceof Element ? w : w.parentElement)?.closest("[data-pk-overlay]") || k();
    }
    function B(b) {
      b.key === "Escape" && r.value && (b.stopPropagation(), k());
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
      f && clearTimeout(f), document.removeEventListener("pointerdown", S), document.removeEventListener("keydown", B), window.removeEventListener("scroll", m, !0), window.removeEventListener("resize", m);
    }), l({ close: k, openAt: h }), (b, w) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative",
      onPointerenter: w[2] || (w[2] = (P) => e.hoverable && p()),
      onPointerleave: w[3] || (w[3] = (P) => e.hoverable && v())
    }, [
      o("div", { onClick: C }, [
        U(b.$slots, "trigger", { open: r.value })
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
              class: A([
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
              onPointerenter: w[0] || (w[0] = (P) => e.hoverable && p()),
              onPointerleave: w[1] || (w[1] = (P) => e.hoverable && v()),
              onClick: g
            }, [
              U(b.$slots, "panel", { close: k })
            ], 38)) : $("", !0)
          ]),
          _: 3
        })
      ]))
    ], 544));
  }
}), bo = ["disabled"], yo = { class: "py-0.5" }, xo = ["disabled", "onClick"], ko = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, $o = ["d"], wo = { class: "min-w-0 flex-1 truncate" }, Co = ["disabled"], So = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mo = ["d"], Bo = {
  key: 1,
  class: "mt-0.5 border-t pt-0.5"
}, _o = ["disabled", "onClick"], Ao = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Po = ["d"], zo = { class: "min-w-0 flex-1 truncate" }, Oo = { class: "text-muted-foreground text-sm font-normal" }, Lo = { class: "text-foreground font-medium tabular-nums" }, jo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Vo = ["disabled"], To = { class: "text-muted-foreground text-sm font-normal" }, Do = { class: "text-foreground font-medium tabular-nums" }, Eo = {
  key: 0,
  class: "text-destructive mt-1 text-xs"
}, Io = ["disabled"], B5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(null), i = R(!1), d = x(() => a.allMatching ? a.total : a.count), u = x(() => d.value !== void 0), f = x(() => u.value && d.value === 0), g = x(() => a.actions.filter((B) => !B.destructive)), p = x(() => a.actions.filter((B) => B.destructive)), v = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function C(B) {
      return v[B.color ?? "gray"] ?? v.gray;
    }
    function h(B) {
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
          ])], 8, bo)
        ]),
        panel: L(() => [
          o("div", yo, [
            (t(!0), n(z, null, j(g.value, (b) => (t(), n("button", {
              key: b.key,
              type: "button",
              role: "menuitem",
              class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", C(b)]),
              disabled: e.busy,
              onClick: (w) => h(b)
            }, [
              (t(), n("svg", ko, [
                o("path", {
                  d: y(ot)(b)
                }, null, 8, $o)
              ])),
              o("span", wo, c(b.label), 1)
            ], 10, xo))), 128)),
            e.canExport ? (t(), n("button", {
              key: 0,
              type: "button",
              role: "menuitem",
              class: "text-foreground hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              disabled: e.busy,
              onClick: m[0] || (m[0] = (b) => i.value = !0)
            }, [
              (t(), n("svg", So, [
                o("path", {
                  d: y(ce)("download")
                }, null, 8, Mo)
              ])),
              m[6] || (m[6] = N(" Export CSV ", -1))
            ], 8, Co)) : $("", !0),
            p.value.length ? (t(), n("div", Bo, [
              (t(!0), n(z, null, j(p.value, (b) => (t(), n("button", {
                key: b.key,
                type: "button",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy,
                onClick: (w) => h(b)
              }, [
                (t(), n("svg", Ao, [
                  o("path", {
                    d: y(ot)({ ...b, destructive: !0 })
                  }, null, 8, Po)
                ])),
                o("span", zo, c(b.label), 1)
              ], 8, _o))), 128))
            ])) : $("", !0)
          ])
        ]),
        _: 1
      }),
      D(dt, {
        open: s.value !== null,
        title: s.value?.label ?? "",
        description: s.value?.confirmation ?? "",
        onClose: m[2] || (m[2] = (b) => s.value = null)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[1] || (m[1] = (b) => s.value = null)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: A([
              "rounded-md px-3 py-1.5 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
              s.value?.destructive ? "bg-destructive text-white hover:opacity-90" : "bg-primary text-primary-foreground hover:opacity-90"
            ]),
            disabled: !u.value || f.value,
            onClick: k
          }, c(s.value?.label), 11, Vo)
        ]),
        default: L(() => [
          o("p", Oo, [
            m[7] || (m[7] = N(" This will affect ", -1)),
            o("span", Lo, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(S(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[8] || (m[8] = N(" . ", -1))
          ]),
          f.value ? (t(), n("p", jo, " Nothing matches the current filters - there is nothing to " + c(s.value?.label?.toLowerCase()) + ". ", 1)) : $("", !0)
        ]),
        _: 1
      }, 8, ["open", "title", "description"]),
      D(dt, {
        open: i.value,
        title: "Export CSV",
        description: "A download link appears once the file is ready.",
        onClose: m[4] || (m[4] = (b) => i.value = !1)
      }, {
        footer: L(() => [
          o("button", {
            type: "button",
            class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm",
            onClick: m[3] || (m[3] = (b) => i.value = !1)
          }, " Cancel "),
          o("button", {
            type: "button",
            class: "bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm font-medium hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
            disabled: !u.value || f.value,
            onClick: M
          }, " Export CSV ", 8, Io)
        ]),
        default: L(() => [
          o("p", To, [
            m[9] || (m[9] = N(" This will export ", -1)),
            o("span", Do, [
              u.value ? (t(), n(z, { key: 1 }, [
                N(c(S(d.value)) + " record" + c(d.value === 1 ? "" : "s"), 1)
              ], 64)) : (t(), n(z, { key: 0 }, [
                N("…")
              ], 64))
            ]),
            m[10] || (m[10] = N(" . ", -1))
          ]),
          f.value ? (t(), n("p", Eo, " Nothing matches the current filters - there is nothing to export. ")) : $("", !0)
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), Fo = { class: "bg-card flex min-h-0 w-full min-w-0 shrink grow-0 flex-col overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" }, No = {
  key: 0,
  class: "shrink-0 border-b px-3 py-2.5 sm:px-4"
}, Ro = {
  key: 1,
  class: "flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-3 py-2.5 sm:px-4"
}, Uo = {
  key: 3,
  class: "shrink-0 border-t px-3 py-2.5 sm:px-4"
}, Ho = /* @__PURE__ */ O({
  __name: "TableShell",
  props: {
    toolbarTint: { default: "none" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", Fo, [
      l.$slots.tabs ? (t(), n("div", No, [
        U(l.$slots, "tabs")
      ])) : $("", !0),
      l.$slots.title ? (t(), n("div", Ro, [
        U(l.$slots, "title")
      ])) : $("", !0),
      l.$slots.toolbar ? (t(), n("div", {
        key: 2,
        class: A(["shrink-0 border-b px-3 py-2.5 sm:px-4", e.toolbarTint === "muted" ? "bg-muted/40" : ""])
      }, [
        U(l.$slots, "toolbar")
      ], 2)) : $("", !0),
      U(l.$slots, "default"),
      l.$slots.pagination ? (t(), n("div", Uo, [
        U(l.$slots, "pagination")
      ])) : $("", !0)
    ]));
  }
}), Me = "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", da = "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]", _5 = "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]", Ko = ["aria-expanded"], qo = ["aria-label", "onClick"], Go = {
  key: 0,
  class: "text-muted-foreground flex-1 text-sm"
}, Wo = { class: "ml-auto flex shrink-0 items-center gap-1" }, Zo = {
  key: 0,
  class: "border-b p-1"
}, Jo = ["placeholder"], Yo = { class: "max-h-60 overflow-y-auto p-1" }, Xo = ["aria-selected", "onMouseenter", "onClick"], Qo = {
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
    const a = e, r = l, s = R(null), i = R(null), d = R(null), u = R(!1), f = R(""), g = R(0), p = R({ top: 0, left: 0, width: 0 }), v = x(
      () => a.modelValue.map(
        (H) => a.options.find((K) => K.value === H) ?? {
          value: H,
          label: String(H)
        }
      ).filter(Boolean)
    ), C = x(() => a.searchable ?? a.options.length > 6), h = x(() => {
      const H = new Set(a.modelValue), K = f.value.trim().toLowerCase();
      return a.options.filter((G) => !H.has(G.value)).filter((G) => K ? G.label.toLowerCase().includes(K) : !0);
    }), k = x(() => a.max !== null && a.modelValue.length >= a.max);
    function M() {
      const H = s.value, K = i.value;
      if (!H || !K)
        return;
      const G = H.getBoundingClientRect(), oe = K.getBoundingClientRect(), ae = 8;
      let Z = G.bottom + 4;
      Z + oe.height > window.innerHeight - ae && G.top - oe.height - 4 > ae && (Z = G.top - oe.height - 4), p.value = {
        top: Z,
        left: Math.min(Math.max(ae, G.left), window.innerWidth - G.width - ae),
        // Matching the trigger's width is what makes it read as one control
        // rather than as a menu that happens to be nearby.
        width: G.width
      };
    }
    async function S() {
      a.disabled || u.value || (u.value = !0, f.value = "", g.value = 0, await Te(), M(), d.value?.focus());
    }
    function B() {
      u.value = !1, f.value = "";
    }
    function m() {
      u.value ? B() : S();
    }
    function b(H) {
      k.value || (r("update:modelValue", [...a.modelValue, H.value]), f.value = "", g.value = 0, Te(() => {
        M(), d.value?.focus();
      }));
    }
    function w(H) {
      r(
        "update:modelValue",
        a.modelValue.filter((K) => K !== H)
      ), Te(M);
    }
    function P() {
      r("update:modelValue", []), Te(M);
    }
    function I(H) {
      if (!a.disabled) {
        if (H.key === "Escape" && u.value) {
          H.stopPropagation(), B();
          return;
        }
        if (H.key === "Backspace" && f.value === "" && a.modelValue.length > 0) {
          w(a.modelValue[a.modelValue.length - 1]);
          return;
        }
        if (!u.value && (H.key === "ArrowDown" || H.key === "Enter")) {
          H.preventDefault(), S();
          return;
        }
        if (u.value) {
          if (H.key === "ArrowDown")
            H.preventDefault(), g.value = Math.min(g.value + 1, h.value.length - 1);
          else if (H.key === "ArrowUp")
            H.preventDefault(), g.value = Math.max(g.value - 1, 0);
          else if (H.key === "Enter") {
            H.preventDefault();
            const K = h.value[g.value];
            K && b(K);
          }
        }
      }
    }
    function E(H) {
      if (!u.value)
        return;
      const K = H.target;
      s.value?.contains(K) || i.value?.contains(K) || B();
    }
    function te() {
      u.value && M();
    }
    return me(h, (H) => {
      g.value > H.length - 1 && (g.value = Math.max(0, H.length - 1));
    }), ve(() => {
      document.addEventListener("pointerdown", E), window.addEventListener("scroll", te, !0), window.addEventListener("resize", te);
    }), ke(() => {
      document.removeEventListener("pointerdown", E), window.removeEventListener("scroll", te, !0), window.removeEventListener("resize", te);
    }), (H, K) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "relative w-full",
      onKeydown: I
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
        onClick: m
      }, [
        (t(!0), n(z, null, j(v.value, (G) => (t(), n("span", {
          key: G.value,
          class: "bg-primary/10 text-primary flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
        }, [
          N(c(G.label) + " ", 1),
          o("button", {
            type: "button",
            class: "hover:text-destructive -mr-0.5 leading-none",
            "aria-label": `Remove ${G.label}`,
            onClick: he((oe) => w(G.value), ["stop"])
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
          ])], 8, qo)
        ]))), 128)),
        v.value.length === 0 ? (t(), n("span", Go, c(e.placeholder), 1)) : $("", !0),
        o("span", Wo, [
          v.value.length > 1 ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground text-xs",
            "aria-label": "Clear all",
            onClick: he(P, ["stop"])
          }, " Clear ")) : $("", !0),
          (t(), n("svg", {
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground size-4 transition-transform", u.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }, [...K[2] || (K[2] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2))
        ])
      ], 10, Ko),
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
              C.value ? (t(), n("div", Zo, [
                pe(o("input", {
                  ref_key: "searchInput",
                  ref: d,
                  "onUpdate:modelValue": K[0] || (K[0] = (G) => f.value = G),
                  type: "text",
                  class: "w-full bg-transparent px-2 py-1.5 text-sm outline-none",
                  placeholder: e.searchPlaceholder,
                  onKeydown: I
                }, null, 40, Jo), [
                  [Ae, f.value]
                ])
              ])) : $("", !0),
              o("div", Yo, [
                (t(!0), n(z, null, j(h.value, (G, oe) => (t(), n("button", {
                  key: G.value,
                  type: "button",
                  class: A(["flex w-full items-center rounded-sm px-2 py-1.5 text-left text-sm transition-colors", oe === g.value ? "bg-accent" : "hover:bg-accent/60"]),
                  role: "option",
                  "aria-selected": oe === g.value,
                  onMouseenter: (ae) => g.value = oe,
                  onClick: (ae) => b(G)
                }, c(G.label), 43, Xo))), 128)),
                h.value.length === 0 ? (t(), n("p", Qo, [
                  k.value ? (t(), n(z, { key: 0 }, [
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
}), es = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", ts = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
  link: "text-primary underline-offset-4 hover:underline"
}, as = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
  icon: "size-9",
  "icon-sm": "size-8",
  "icon-lg": "size-10"
};
function st(e = {}) {
  const l = e.variant ?? "default", a = e.size ?? "default";
  return [es, ts[l], as[a], e.class].filter(Boolean).join(" ");
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
      () => st({ variant: l.variant, size: l.size, class: l.class })
    ), r = x(() => l.as === "button" ? l.type : void 0);
    return (s, i) => (t(), T(_e(e.as), {
      "data-slot": "button",
      "data-variant": e.variant,
      "data-size": e.size,
      type: r.value,
      disabled: e.as === "button" ? e.disabled : void 0,
      "aria-disabled": e.as !== "button" && e.disabled ? "true" : void 0,
      class: A(a.value)
    }, {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-variant", "data-size", "type", "disabled", "aria-disabled", "class"]));
  }
}), ns = { class: "flex items-center gap-2" }, ls = ["onUpdate:modelValue", "onChange"], os = ["value"], ss = ["onUpdate:modelValue"], rs = ["value"], is = ["onUpdate:modelValue"], ds = ["onUpdate:modelValue", "multiple"], us = ["value"], cs = ["onUpdate:modelValue", "type"], fs = ["aria-label", "onClick"], ms = { class: "flex items-center gap-2" }, ps = /* @__PURE__ */ O({
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
      const b = m ? a.fields[m]?.kind : void 0;
      return b ? a.operators[b] ?? [] : [];
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
    function v() {
      const m = u.value[0];
      i.value.rules.push({
        field: m,
        operator: f(m)[0],
        value: void 0
      }), p();
    }
    function C() {
      i.value.rules.push(s()), p();
    }
    function h(m) {
      i.value.rules.splice(m, 1), p();
    }
    function k(m) {
      m.operator = f(m.field)[0], m.value = void 0, p();
    }
    const M = x(() => a.depth + 1 < a.maxDepth);
    function S() {
      i.value = s(), p(), r("apply", null);
    }
    function B() {
      r("apply", i.value.rules.length ? i.value : null);
    }
    return (m, b) => {
      const w = Rt("PkQueryBuilder", !0);
      return t(), n("div", {
        class: A(["flex flex-col gap-2 rounded-lg border p-3", e.depth > 0 ? "bg-muted/30" : "bg-card"])
      }, [
        o("div", ns, [
          pe(o("select", {
            "onUpdate:modelValue": b[0] || (b[0] = (P) => i.value.logic = P),
            class: "border-input bg-background rounded-md border px-2 py-1 text-xs",
            "aria-label": "Match all or any",
            onChange: p
          }, [...b[1] || (b[1] = [
            o("option", { value: "and" }, "Match all", -1),
            o("option", { value: "or" }, "Match any", -1)
          ])], 544), [
            [We, i.value.logic]
          ]),
          b[2] || (b[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "of the following", -1))
        ]),
        (t(!0), n(z, null, j(i.value.rules, (P, I) => (t(), n("div", {
          key: I,
          class: "flex items-start gap-2"
        }, [
          d(P) ? (t(), T(w, {
            key: 0,
            modelValue: i.value.rules[I],
            "onUpdate:modelValue": [(E) => i.value.rules[I] = E, p],
            fields: e.fields,
            operators: e.operators,
            "max-depth": e.maxDepth,
            depth: e.depth + 1,
            root: !1,
            class: "flex-1"
          }, null, 8, ["modelValue", "onUpdate:modelValue", "fields", "operators", "max-depth", "depth"])) : (t(), n(z, { key: 1 }, [
            pe(o("select", {
              "onUpdate:modelValue": (E) => P.field = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Field",
              onChange: (E) => k(P)
            }, [
              (t(!0), n(z, null, j(u.value, (E) => (t(), n("option", {
                key: E,
                value: E
              }, c(e.fields[E].label), 9, os))), 128))
            ], 40, ls), [
              [We, P.field]
            ]),
            pe(o("select", {
              "onUpdate:modelValue": (E) => P.operator = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Operator",
              onChange: p
            }, [
              (t(!0), n(z, null, j(f(P.field), (E) => (t(), n("option", {
                key: E,
                value: E
              }, c(g[E] ?? E), 9, rs))), 128))
            ], 40, ss), [
              [We, P.operator]
            ]),
            P.field && e.fields[P.field]?.kind === "boolean" ? pe((t(), n("select", {
              key: 0,
              "onUpdate:modelValue": (E) => P.value = E,
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [...b[3] || (b[3] = [
              o("option", { value: !0 }, "Yes", -1),
              o("option", { value: !1 }, "No", -1)
            ])], 40, is)), [
              [We, P.value]
            ]) : P.field && e.fields[P.field]?.options?.length ? pe((t(), n("select", {
              key: 1,
              "onUpdate:modelValue": (E) => P.value = E,
              multiple: e.fields[P.field].kind === "multiselect",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, [
              (t(!0), n(z, null, j(e.fields[P.field].options, (E) => (t(), n("option", {
                key: E,
                value: E
              }, c(E), 9, us))), 128))
            ], 40, ds)), [
              [We, P.value]
            ]) : pe((t(), n("input", {
              key: 2,
              "onUpdate:modelValue": (E) => P.value = E,
              type: P.field && e.fields[P.field]?.kind === "daterange" ? "date" : "text",
              class: "border-input bg-background rounded-md border px-2 py-1 text-sm",
              "aria-label": "Value",
              onChange: p
            }, null, 40, cs)), [
              [nn, P.value]
            ])
          ], 64)),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-destructive px-1 py-1 text-sm",
            "aria-label": `Remove ${d(P) ? "group" : "rule"}`,
            onClick: (E) => h(I)
          }, " × ", 8, fs)
        ]))), 128)),
        o("div", ms, [
          D(ue, {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: v
          }, {
            default: L(() => [...b[4] || (b[4] = [
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
            default: L(() => [...b[5] || (b[5] = [
              N(" Add group ", -1)
            ])]),
            _: 1
          })) : $("", !0),
          e.root ? (t(), n(z, { key: 1 }, [
            b[8] || (b[8] = o("span", { class: "flex-1" }, null, -1)),
            D(ue, {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: S
            }, {
              default: L(() => [...b[6] || (b[6] = [
                N(" Clear ", -1)
              ])]),
              _: 1
            }),
            D(ue, {
              type: "button",
              size: "sm",
              onClick: B
            }, {
              default: L(() => [...b[7] || (b[7] = [
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
    return (i, d) => (t(), T(y($a), re({ "data-slot": "sheet" }, y(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
});
function Q(...e) {
  return il(rl(e));
}
function A5(e) {
  return typeof e == "string" ? e : e?.url ?? "";
}
const vs = /* @__PURE__ */ O({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(Ut), re({
      "data-slot": "sheet-overlay",
      class: y(Q)(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        l.class
      )
    }, y(a)), {
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
    return (d, u) => (t(), T(y(Ht), null, {
      default: L(() => [
        D(vs),
        D(y(Kt), re({
          "data-slot": "sheet-content",
          class: y(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            a.class
          )
        }, { ...d.$attrs, ...y(i) }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(y(et), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: L(() => [
                D(y(qt), { class: "size-4" }),
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
}), gs = { class: "flex flex-col gap-2" }, hs = { class: "flex items-center gap-2 md:hidden" }, bs = { class: "relative min-w-0 flex-1" }, ys = ["placeholder", "title", "aria-label"], xs = {
  key: 0,
  class: "bg-primary text-primary-foreground inline-flex size-4 items-center justify-center rounded-full text-[10px]"
}, ks = { class: "flex max-h-[85vh] flex-col" }, $s = { class: "flex-1 overflow-y-auto px-4 py-3" }, ws = {
  key: 0,
  class: "mb-4 flex flex-col gap-3"
}, Cs = { class: "text-xs font-medium" }, Ss = ["value", "onChange"], Ms = ["value"], Bs = { class: "mb-4" }, _s = { class: "flex flex-col gap-1" }, As = ["disabled", "onClick"], Ps = {
  key: 0,
  class: "text-primary ml-auto text-xs"
}, zs = {
  key: 1,
  class: "mb-4"
}, Os = { class: "flex flex-col gap-1" }, Ls = ["onClick"], js = { class: "border-t p-4" }, Vs = ["disabled"], Ts = { class: "hidden flex-wrap items-center justify-end gap-2 md:flex" }, Ds = { class: "relative min-w-0 flex-1 sm:w-72 sm:flex-none" }, Es = ["placeholder", "title", "aria-label"], Is = ["aria-label"], Fs = {
  key: 0,
  class: "bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
}, Ns = { class: "flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3" }, Rs = { class: "text-xs font-medium" }, Us = ["value", "onChange"], Hs = ["value"], Ks = { class: "grid grid-cols-2 gap-2" }, qs = ["value", "onChange"], Gs = ["value", "onChange"], Ws = {
  key: 3,
  class: "grid grid-cols-2 gap-2"
}, Zs = ["value", "onChange"], Js = ["value", "onChange"], Ys = {
  key: 4,
  class: "flex items-center gap-2"
}, Xs = ["aria-checked", "onClick"], Qs = { class: "text-xs" }, er = ["onClick"], tr = ["value", "onChange"], ar = ["value"], nr = ["disabled", "onClick"], lr = { class: "flex max-h-80 flex-col overflow-y-auto py-1" }, or = ["disabled", "onClick"], sr = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4 shrink-0",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, rr = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, ir = {
  key: 1,
  class: "border-input inline-flex shrink-0 overflow-hidden rounded-md border",
  role: "group",
  "aria-label": "Index layout"
}, dr = ["aria-pressed", "aria-label", "title", "onClick"], ur = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, cr = {
  key: 1,
  viewBox: "0 0 24 24",
  class: "size-4",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, fr = ["aria-pressed", "aria-label", "title"], mr = ["aria-label", "title"], pr = { class: "flex flex-col gap-0.5 p-1" }, vr = ["onClick"], gr = ["onClick"], hr = {
  key: 5,
  class: "text-muted-foreground shrink-0 text-xs"
}, br = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5",
  dusk: "filter-indicators"
}, yr = ["dusk"], xr = ["aria-label", "onClick"], kr = /* @__PURE__ */ O({
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
    const u = R({ ...a.filters });
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
    ), g = x(() => JSON.stringify(u.value) !== JSON.stringify(a.filters)), p = x(() => a.search !== "" || f.value > 0), v = x(() => a.indicators.length ? a.indicators : a.filterSchema.filter((q) => a.filters[q.key] !== null && a.filters[q.key] !== void 0).map((q) => ({
      key: q.key,
      label: `${q.label}: ${String(a.filters[q.key])}`,
      removable: !0
    })));
    function C(q) {
      r("group", q);
    }
    function h(q) {
      r("clear-filter", q);
    }
    function k(q) {
      return q.type === "multiselect";
    }
    function M(q) {
      const _ = u.value[q.key];
      return Array.isArray(_) ? _ : _ == null ? [] : [_];
    }
    function S(q) {
      return M(q).filter(
        (_) => typeof _ == "string" || typeof _ == "number"
      );
    }
    function B(q) {
      return H(q).flatMap(
        (_) => typeof _.value == "string" || typeof _.value == "number" ? [{ value: _.value, label: _.label }] : []
      );
    }
    function m(q, _) {
      u.value = { ...u.value, [q.key]: _ === "" ? null : _ };
    }
    function b(q, _) {
      const F = u.value[q.key];
      if (typeof F != "string" || !F.includes(".."))
        return "";
      const [V, J] = F.split("..");
      return _ === "from" ? V ?? "" : J ?? "";
    }
    function w(q, _, F) {
      const V = _ === "from" ? F : b(q, "from"), J = _ === "to" ? F : b(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V && J ? `${V}..${J}` : null
      };
    }
    function P(q, _, F) {
      const V = _ === "from" ? F : b(q, "from"), J = _ === "to" ? F : b(q, "to");
      u.value = {
        ...u.value,
        [q.key]: V || J ? `${V}..${J}` : null
      };
    }
    function I(q) {
      r("apply-filters", { ...u.value }), q();
    }
    function E(q, _) {
      u.value[q] = _, r("apply-filters", { ...u.value });
    }
    function te() {
      u.value = Object.fromEntries(a.filterSchema.map((q) => [q.key, null]));
    }
    function H(q) {
      return q.type === "boolean" ? [
        { value: !0, label: q.trueLabel ?? "Yes" },
        { value: !1, label: q.falseLabel ?? "No" }
      ] : q.type === "daterange" ? Object.entries(q.presets ?? {}).map(([_, F]) => ({
        value: _,
        label: F
      })) : (q.options ?? []).map(
        (_) => typeof _ == "object" && _ !== null && "value" in _ ? { value: _.value, label: _.label } : { value: _, label: String(_) }
      );
    }
    const K = R(new Set(a.hidden));
    me(
      () => a.hidden,
      (q) => {
        K.value = new Set(q);
      },
      { deep: !0 }
    );
    function G(q) {
      const _ = new Set(K.value);
      _.has(q) ? _.delete(q) : _.add(q), K.value = _, r("apply-columns", [..._]);
    }
    function oe() {
      K.value = /* @__PURE__ */ new Set(), r("apply-columns", []);
    }
    function ae() {
      r("apply-filters", { ...u.value }), s.value = !1;
    }
    function Z() {
      i.value = "", r("clear");
    }
    return (q, _) => (t(), n("div", gs, [
      o("div", hs, [
        o("div", bs, [
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
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", y(Me)])
          }, null, 10, ys), [
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
          f.value ? (t(), n("span", xs, c(f.value), 1)) : $("", !0)
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
                o("div", ks, [
                  _[16] || (_[16] = o("div", { class: "border-b px-4 py-3" }, [
                    o("p", { class: "text-sm font-semibold" }, "Table tools"),
                    o("p", { class: "text-muted-foreground text-xs font-normal" }, "Filters, columns, and grouping")
                  ], -1)),
                  o("div", $s, [
                    e.filterSchema.length ? (t(), n("div", ws, [
                      o("div", { class: "flex items-center justify-between" }, [
                        _[12] || (_[12] = o("span", { class: "text-sm font-medium" }, "Filters", -1)),
                        o("button", {
                          class: "text-destructive text-xs hover:underline",
                          onClick: te
                        }, " Reset ")
                      ]),
                      (t(!0), n(z, null, j(e.filterSchema, (F) => (t(), n("div", {
                        key: `mobile-${F.key}`,
                        class: "flex flex-col gap-1.5"
                      }, [
                        o("label", Cs, c(F.label), 1),
                        F.type !== "multiselect" && F.type !== "querybuilder" && F.type !== "daterange" && F.type !== "numberrange" && F.type !== "boolean" ? (t(), n("select", {
                          key: 0,
                          value: u.value[F.key] ?? "",
                          class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                          onChange: (V) => m(F, V.target.value)
                        }, [
                          _[13] || (_[13] = o("option", { value: "" }, "All", -1)),
                          (t(!0), n(z, null, j(H(F), (V) => (t(), n("option", {
                            key: String(V.value),
                            value: V.value
                          }, c(V.label), 9, Ms))), 128))
                        ], 40, Ss)) : $("", !0)
                      ]))), 128))
                    ])) : $("", !0),
                    o("div", Bs, [
                      _[14] || (_[14] = o("p", { class: "mb-2 text-sm font-medium" }, "Columns", -1)),
                      o("div", _s, [
                        (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                          key: `mobile-col-${F.key}`,
                          type: "button",
                          class: "hover:bg-accent flex items-center gap-2 rounded px-2 py-1.5 text-sm",
                          disabled: F.locked,
                          onClick: (V) => G(F.key)
                        }, [
                          o("span", null, c(F.label), 1),
                          K.value.has(F.key) ? $("", !0) : (t(), n("span", Ps, "On"))
                        ], 8, As))), 128))
                      ])
                    ]),
                    e.groups.length ? (t(), n("div", zs, [
                      _[15] || (_[15] = o("p", { class: "mb-2 text-sm font-medium" }, "Grouping", -1)),
                      o("div", Os, [
                        o("button", {
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: _[2] || (_[2] = (F) => {
                            C(null), s.value = !1;
                          })
                        }, " No grouping "),
                        (t(!0), n(z, null, j(e.groups, (F) => (t(), n("button", {
                          key: F.key,
                          type: "button",
                          class: "hover:bg-accent rounded px-2 py-1.5 text-left text-sm",
                          onClick: (V) => {
                            C(F.key), s.value = !1;
                          }
                        }, c(F.label), 9, Ls))), 128))
                      ])
                    ])) : $("", !0)
                  ]),
                  o("div", js, [
                    e.filterSchema.length ? (t(), n("button", {
                      key: 0,
                      type: "button",
                      class: "bg-primary text-primary-foreground hover:bg-primary/90 mb-2 h-9 w-full rounded-md text-sm font-medium disabled:opacity-50",
                      disabled: !g.value,
                      onClick: ae
                    }, " Apply filters ", 8, Vs)) : $("", !0),
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
      o("div", Ts, [
        o("div", Ds, [
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
            class: A(["border-input bg-background h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors", y(Me)])
          }, null, 10, Es), [
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
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", f.value ? "border-primary text-primary" : ""]),
              "aria-label": f.value ? `Filters (${f.value} active)` : "Filters",
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
              f.value ? (t(), n("span", Fs, c(f.value), 1)) : $("", !0)
            ], 10, Is)
          ]),
          panel: L(({ close: F }) => [
            o("div", { class: "flex items-center justify-between px-1 pt-1 pb-2" }, [
              _[20] || (_[20] = o("span", { class: "text-sm font-semibold" }, "Filters", -1)),
              o("button", {
                class: "text-destructive text-xs hover:underline",
                onClick: te
              }, " Reset ")
            ]),
            _[23] || (_[23] = o("p", { class: "text-muted-foreground px-1 pb-3 text-xs" }, " Select one or more - all chosen filters must match. ", -1)),
            o("div", Ns, [
              (t(!0), n(z, null, j(e.filterSchema, (V) => (t(), n("div", {
                key: V.key,
                class: "flex flex-col gap-1.5"
              }, [
                o("label", Rs, c(V.label), 1),
                k(V) ? (t(), T(Wt, {
                  key: 0,
                  "model-value": S(V),
                  options: B(V),
                  placeholder: `Any ${V.label.toLowerCase()}`,
                  "onUpdate:modelValue": (J) => u.value[V.key] = J.length ? J : null
                }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : V.type === "querybuilder" ? (t(), T(ps, {
                  key: 1,
                  "model-value": u.value[V.key] ?? null,
                  fields: V.fields ?? {},
                  operators: V.operators ?? {},
                  "max-depth": V.maxDepth ?? 5,
                  onApply: (J) => E(V.key, J)
                }, null, 8, ["model-value", "fields", "operators", "max-depth", "onApply"])) : V.type === "daterange" ? (t(), n(z, { key: 2 }, [
                  o("select", {
                    value: typeof u.value[V.key] == "string" && !String(u.value[V.key]).includes("..") ? u.value[V.key] : "",
                    class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
                    onChange: (J) => m(V, J.target.value)
                  }, [
                    _[21] || (_[21] = o("option", { value: "" }, "Any time", -1)),
                    (t(!0), n(z, null, j(H(V), (J) => (t(), n("option", {
                      key: String(J.value),
                      value: J.value
                    }, c(J.label), 9, Hs))), 128))
                  ], 40, Us),
                  o("div", Ks, [
                    o("input", {
                      type: "date",
                      value: b(V, "from"),
                      "aria-label": "From",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        V,
                        "from",
                        J.target.value
                      )
                    }, null, 40, qs),
                    o("input", {
                      type: "date",
                      value: b(V, "to"),
                      "aria-label": "To",
                      class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                      onChange: (J) => w(
                        V,
                        "to",
                        J.target.value
                      )
                    }, null, 40, Gs)
                  ])
                ], 64)) : V.type === "numberrange" ? (t(), n("div", Ws, [
                  o("input", {
                    type: "number",
                    value: b(V, "from"),
                    "aria-label": "From",
                    placeholder: "From",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      V,
                      "from",
                      J.target.value
                    )
                  }, null, 40, Zs),
                  o("input", {
                    type: "number",
                    value: b(V, "to"),
                    "aria-label": "To",
                    placeholder: "To",
                    class: "border-input bg-background h-9 rounded-md border px-2 text-xs",
                    onChange: (J) => P(
                      V,
                      "to",
                      J.target.value
                    )
                  }, null, 40, Js)
                ])) : V.type === "boolean" ? (t(), n("div", Ys, [
                  o("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": u.value[V.key] === !0,
                    class: A([
                      "relative h-5 w-9 shrink-0 rounded-full transition-colors",
                      u.value[V.key] === !0 ? "bg-primary" : "bg-muted-foreground/30"
                    ]),
                    onClick: (J) => m(V, u.value[V.key] === !0 ? null : !0)
                  }, [
                    o("span", {
                      class: A(["bg-background absolute top-0.5 size-4 rounded-full transition-all", u.value[V.key] === !0 ? "left-4.5" : "left-0.5"])
                    }, null, 2)
                  ], 10, Xs),
                  o("span", Qs, c(V.trueLabel ?? "Yes"), 1),
                  o("button", {
                    type: "button",
                    class: A([
                      "text-muted-foreground ml-auto text-xs hover:underline",
                      u.value[V.key] === !1 ? "text-primary font-medium" : ""
                    ]),
                    onClick: (J) => m(V, u.value[V.key] === !1 ? null : !1)
                  }, c(V.falseLabel ?? "No") + " only ", 11, er)
                ])) : (t(), n("select", {
                  key: 5,
                  value: u.value[V.key] ?? "",
                  class: "border-input bg-background h-9 rounded-md border px-3 text-sm capitalize",
                  onChange: (J) => m(V, J.target.value)
                }, [
                  _[22] || (_[22] = o("option", { value: "" }, "All", -1)),
                  (t(!0), n(z, null, j(H(V), (J) => (t(), n("option", {
                    key: String(J.value),
                    value: J.value
                  }, c(J.label), 9, ar))), 128))
                ], 40, tr))
              ]))), 128))
            ]),
            o("button", {
              type: "button",
              class: "bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50",
              disabled: !g.value,
              onClick: (V) => I(F)
            }, " Apply filters ", 8, nr)
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
            o("div", lr, [
              (t(!0), n(z, null, j(e.columns, (F) => (t(), n("button", {
                key: F.key,
                type: "button",
                class: A(["hover:bg-accent flex items-center gap-2 px-3 py-1.5 text-sm", F.locked ? "cursor-not-allowed opacity-50" : "cursor-pointer"]),
                disabled: F.locked,
                onClick: (V) => G(F.key)
              }, [
                K.value.has(F.key) ? (t(), n("span", rr)) : (t(), n("svg", sr, [..._[25] || (_[25] = [
                  o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
                ])])),
                N(" " + c(F.label), 1)
              ], 10, or))), 128))
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
        e.layouts.length > 1 ? (t(), n("div", ir, [
          (t(!0), n(z, null, j(e.layouts, (F) => (t(), n("button", {
            key: F,
            type: "button",
            class: A(["hover:bg-accent inline-flex size-9 items-center justify-center transition-colors", e.layout === F ? "bg-accent text-foreground" : "text-muted-foreground"]),
            "aria-pressed": e.layout === F,
            "aria-label": F === "cards" ? "Card layout" : "Table layout",
            title: F === "cards" ? "Cards" : "Table",
            onClick: (V) => r("layout", F)
          }, [
            F === "table" ? (t(), n("svg", ur, [..._[28] || (_[28] = [
              o("path", { d: "M3 5h18M3 12h18M3 19h18" }, null, -1)
            ])])) : (t(), n("svg", cr, [..._[29] || (_[29] = [
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
          ], 10, dr))), 128))
        ])) : $("", !0),
        e.reorderable ? (t(), n("button", {
          key: 2,
          type: "button",
          class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.reordering ? "border-primary text-primary" : ""]),
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
        ])], 10, fr)) : $("", !0),
        e.groups.length ? (t(), T(Je, {
          key: 3,
          align: "end"
        }, {
          trigger: L(() => [
            o("button", {
              type: "button",
              dusk: "group-picker",
              class: A(["border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors", e.groupBy ? "border-primary text-primary" : ""]),
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
            ])], 10, mr)
          ]),
          panel: L(({ close: F }) => [
            o("div", pr, [
              o("button", {
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy ? "" : "text-primary font-medium"]),
                onClick: (V) => {
                  C(null), F();
                }
              }, " No grouping ", 10, vr),
              (t(!0), n(z, null, j(e.groups, (V) => (t(), n("button", {
                key: V.key,
                type: "button",
                class: A(["hover:bg-accent rounded px-2 py-1.5 text-left text-sm", e.groupBy?.key === V.key ? "text-primary font-medium" : ""]),
                onClick: (J) => {
                  C(V.key), F();
                }
              }, c(V.label), 11, gr))), 128))
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
        e.loading ? (t(), n("span", hr, "Loading…")) : $("", !0)
      ]),
      v.value.length ? (t(), n("div", br, [
        (t(!0), n(z, null, j(v.value, (F) => (t(), n("span", {
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
            onClick: (V) => h(F.key)
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
          ])], 8, xr)) : $("", !0)
        ], 8, yr))), 128)),
        v.value.length > 1 ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline",
          dusk: "clear-all-filters",
          onClick: _[8] || (_[8] = (F) => r("clear-filters"))
        }, " Clear all ")) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), $r = { class: "min-w-0" }, wr = {
  key: 0,
  class: "text-sm font-semibold tracking-tight"
}, Cr = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center justify-end gap-2"
}, Sr = {
  key: 0,
  class: "text-muted-foreground px-4 py-10 text-center text-sm"
}, Mr = {
  key: 2,
  class: "pk-scroll w-full overflow-x-auto"
}, Br = { class: "w-full border-collapse text-sm" }, _r = { class: "bg-muted/40" }, Ar = { class: "divide-y" }, Pr = ["href"], zr = {
  key: 1,
  class: "text-muted-foreground"
}, Or = {
  key: 0,
  class: "flex justify-center"
}, Lr = ["disabled"], jr = {
  key: 1,
  class: "text-muted-foreground text-center text-xs"
}, Vr = ["href"], P5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = Ft(), i = x(() => a.columns.filter((C) => C.type !== "image")), d = x(() => !!s.actions), u = x(() => !!a.title || d.value), f = x(() => a.filterSchema.length > 0), g = x(
      () => a.columns.map((C) => ({ key: C.key, label: C.label, locked: !0 }))
    );
    function p(C, h) {
      return h == null || h === "" ? "None" : C.type === "date" || C.type === "datetime" ? new Date(String(h)).toLocaleString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...C.type === "datetime" ? { hour: "2-digit", minute: "2-digit" } : {}
      }) : typeof h == "number" ? new Intl.NumberFormat().format(h) : String(h);
    }
    function v(C) {
      return C == null || C === "";
    }
    return (C, h) => (t(), T(Ho, null, rt({
      default: L(() => [
        e.loading && e.rows.length === 0 ? (t(), n("div", Sr, " Loading… ")) : e.loaded && e.rows.length === 0 ? (t(), T(Lt, {
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
        ]), 1032, ["title", "description"])) : e.rows.length > 0 ? (t(), n("div", Mr, [
          o("table", Br, [
            o("thead", _r, [
              o("tr", null, [
                (t(!0), n(z, null, j(i.value, (k) => (t(), n("th", {
                  key: k.key,
                  class: "text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                }, c(k.label), 1))), 128))
              ])
            ]),
            o("tbody", Ar, [
              (t(!0), n(z, null, j(e.rows, (k, M) => (t(), n("tr", {
                key: k.id ?? M,
                class: "pk-row hover:bg-muted/40 transition-colors"
              }, [
                (t(!0), n(z, null, j(i.value, (S) => (t(), n("td", {
                  key: S.key,
                  class: A(["px-3 whitespace-nowrap", [
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
                    }, c(p(S, k[S.key])), 9, Pr)) : v(k[S.key]) ? (t(), n("span", zr, " None ")) : (t(), n(z, { key: 2 }, [
                      N(c(p(S, k[S.key])), 1)
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
          o("div", $r, [
            e.title ? (t(), n("h3", wr, c(e.title), 1)) : $("", !0)
          ]),
          d.value ? (t(), n("div", Cr, [
            U(C.$slots, "actions")
          ])) : $("", !0)
        ]),
        key: "0"
      } : void 0,
      f.value ? {
        name: "toolbar",
        fn: L(() => [
          D(kr, {
            search: e.search,
            "search-placeholder": "Search related…",
            "filter-schema": e.filterSchema,
            filters: e.filters,
            columns: g.value,
            hidden: /* @__PURE__ */ new Set(),
            loading: e.loading,
            indicators: e.indicators,
            "onUpdate:search": h[0] || (h[0] = (k) => r("update:search", k)),
            onApplyFilters: h[1] || (h[1] = (k) => r("apply-filters", k)),
            onClearFilters: h[2] || (h[2] = (k) => r("clear-filters")),
            onClearFilter: h[3] || (h[3] = (k) => r("clear-filter", k)),
            onClear: h[4] || (h[4] = (k) => r("clear-filters")),
            onApplyColumns: h[5] || (h[5] = () => {
            })
          }, null, 8, ["search", "filter-schema", "filters", "columns", "hidden", "loading", "indicators"])
        ]),
        key: "1"
      } : void 0,
      e.nextCursor || e.capped ? {
        name: "pagination",
        fn: L(() => [
          e.nextCursor ? (t(), n("div", Or, [
            o("button", {
              type: "button",
              class: "bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50",
              disabled: e.loading,
              onClick: h[6] || (h[6] = (k) => r("load", e.nextCursor))
            }, c(e.loading ? "Loading…" : "Load more"), 9, Lr)
          ])) : e.capped ? (t(), n("p", jr, [
            N(" Showing the first " + c(e.rows.length) + ". ", 1),
            e.indexHref ? (t(), n("a", {
              key: 0,
              href: e.indexHref,
              class: "text-foreground underline-offset-2 hover:underline"
            }, " Open the full list ", 8, Vr)) : (t(), n(z, { key: 1 }, [
              N("Open the full list to search or filter the rest.")
            ], 64))
          ])) : $("", !0)
        ]),
        key: "2"
      } : void 0
    ]), 1024));
  }
}), Tr = { class: "flex items-center gap-2 overflow-x-auto" }, Dr = {
  key: 0,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Er = {
  key: 1,
  class: "size-3",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ir = { class: "flex flex-col" }, Fr = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, Nr = {
  key: 0,
  class: "bg-destructive size-1.5 shrink-0 rounded-full",
  "aria-label": "has errors"
}, Rr = {
  key: 0,
  class: "bg-border h-px w-6 shrink-0",
  "aria-hidden": "true"
}, Ur = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("ol", Tr, [
      (t(!0), n(z, null, j(e.steps, (p, v) => (t(), n("li", {
        key: v,
        class: "flex shrink-0 items-center gap-2"
      }, [
        (t(), T(_e(e.interactive ? "button" : "div"), re({
          type: e.interactive ? "button" : void 0,
          class: ["flex items-center gap-2 text-left text-sm", [
            e.interactive ? "transition-colors disabled:cursor-default" : "",
            i(v)
          ]]
        }, { ref_for: !0 }, e.interactive ? { disabled: v > e.activeStep } : {}, {
          onClick: (C) => e.interactive && v <= e.activeStep && r("update:activeStep", v)
        }), {
          default: L(() => [
            o("span", {
              class: A(["flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums", s(v)])
            }, [
              u(v) ? (t(), n("svg", Dr, [...g[0] || (g[0] = [
                o("path", { d: "M18 6 6 18M6 6l12 12" }, null, -1)
              ])])) : d(v) ? (t(), n("svg", Er, [...g[1] || (g[1] = [
                o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
              ])])) : (t(), n(z, { key: 2 }, [
                N(c(v + 1), 1)
              ], 64))
            ], 2),
            o("span", Ir, [
              o("span", null, c(p.label), 1),
              p.description ? (t(), n("span", Fr, c(p.description), 1)) : $("", !0)
            ]),
            e.hasError(v) ? (t(), n("span", Nr)) : $("", !0)
          ]),
          _: 2
        }, 1040, ["type", "class", "onClick"])),
        v < e.steps.length - 1 ? (t(), n("span", Rr)) : $("", !0)
      ]))), 128))
    ]));
  }
}), ct = /* @__PURE__ */ new Map();
function xe(e, l) {
  ct.set(e, l);
}
function Hr(e) {
  return ct.get(e);
}
function z5(e) {
  return ct.has(e);
}
function O5() {
  return [...ct.keys()].sort();
}
function L5() {
  ct.clear();
}
class Kr extends Error {
  fieldErrors;
  constructor(l, a = {}) {
    super(l), this.name = "CreateOptionError", this.fieldErrors = a;
  }
}
function j5(e) {
  if (!e || typeof e != "object")
    return {};
  const l = {};
  for (const [a, r] of Object.entries(e)) {
    const s = Array.isArray(r) ? r[0] : r;
    typeof s == "string" && s !== "" && (l[a] = s);
  }
  return l;
}
function qr(e) {
  if (e.createOptionLabel)
    return e.createOptionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create option";
}
function Gr(e) {
  if (e.createOptionActionLabel)
    return e.createOptionActionLabel;
  const l = e.label.replace(/\s*id$/i, "").trim();
  return l !== "" ? `Create ${l.toLowerCase()}` : "Create new";
}
const V5 = "text-sm text-muted-foreground font-normal", T5 = "text-xs text-muted-foreground font-normal", vt = "text-xs text-muted-foreground font-normal leading-snug", Wr = "text-foreground font-normal", Zr = "placeholder:text-muted-foreground placeholder:font-normal", Re = `${Wr} ${Zr}`, Jr = {
  key: 0,
  class: "text-destructive text-sm",
  role: "alert"
}, Yr = /* @__PURE__ */ O({
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
          e.generalError ? (t(), n("p", Jr, c(e.generalError), 1)) : $("", !0),
          (t(!0), n(z, null, j(e.fields, (f) => (t(), T(Xe, {
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
}), Xr = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(fn), re({ "data-slot": "checkbox" }, y(i), {
      class: y(Q)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L((f) => [
        D(y(mn), {
          "data-slot": "checkbox-indicator",
          class: "grid place-content-center text-current transition-none"
        }, {
          default: L(() => [
            U(d.$slots, "default", Oe(Fe(f)), () => [
              D(y(_a), { class: "size-3.5" })
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
    return (i, d) => (t(), T(y(pn), re({ "data-slot": "switch" }, y(s), {
      class: y(Q)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a.class
      )
    }), {
      default: L(() => [
        D(y(vn), {
          "data-slot": "switch-thumb",
          class: "bg-background pointer-events-none block size-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Qr = ["accept", "disabled"], ei = { class: "text-sm font-medium" }, ti = { key: 0 }, ai = { key: 1 }, ni = { class: "text-muted-foreground text-xs font-normal" }, li = {
  key: 0,
  class: "bg-muted mt-2 h-1 w-40 overflow-hidden rounded-full"
}, oi = {
  key: 1,
  class: "flex items-center gap-3 rounded-lg border p-3"
}, si = ["src"], ri = {
  key: 1,
  class: "bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded text-[10px] font-semibold uppercase"
}, ii = { class: "min-w-0 flex-1" }, di = { class: "block truncate text-sm font-medium" }, ui = { class: "text-muted-foreground text-xs font-normal" }, ci = ["href"], fi = {
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
    const a = e, r = l, s = R(null), i = R(!1), d = R(null), u = R(null), f = R(null), g = x(() => a.accept.map((b) => `.${b}`).join(",")), p = x(() => f.value ?? a.modelValue?.url ?? null), v = x(() => `${a.accept.length ? a.accept.join(", ").toUpperCase() : "Any file"} · up to ${C(a.maxKilobytes * 1024)}`);
    function C(b) {
      if (!b)
        return "";
      const w = ["B", "KB", "MB", "GB"];
      let P = b, I = 0;
      for (; P >= 1024 && I < w.length - 1; )
        P /= 1024, I++;
      return `${P.toFixed(P < 10 && I > 0 ? 1 : 0)} ${w[I]}`;
    }
    function h(b) {
      return b.split(".").pop()?.toLowerCase() ?? "";
    }
    function k(b) {
      return a.accept.length && !a.accept.includes(h(b.name)) ? `${h(b.name).toUpperCase() || "That"} files are not accepted here.` : b.size > a.maxKilobytes * 1024 ? `That file is ${C(b.size)}; the limit is ${C(a.maxKilobytes * 1024)}.` : null;
    }
    async function M(b) {
      const w = b?.[0];
      if (!(!w || a.disabled) && (u.value = k(w), !u.value)) {
        S(), a.image && w.type.startsWith("image/") && (f.value = URL.createObjectURL(w)), d.value = 0;
        try {
          const P = await a.upload(w, (I) => {
            d.value = I;
          });
          r("update:modelValue", P);
        } catch (P) {
          u.value = P instanceof Error ? P.message : "The upload failed.", S();
        } finally {
          d.value = null, s.value && (s.value.value = "");
        }
      }
    }
    function S() {
      f.value && URL.revokeObjectURL(f.value), f.value = null;
    }
    async function B() {
      const b = a.modelValue;
      S(), u.value = null, r("update:modelValue", null), b && !b.url && a.discard && await a.discard(b.value).catch(() => {
      });
    }
    function m(b) {
      i.value = !1, M(b.dataTransfer?.files ?? null);
    }
    return (b, w) => (t(), n("div", null, [
      e.modelValue ? (t(), n("div", oi, [
        e.image && p.value ? (t(), n("img", {
          key: 0,
          src: p.value,
          alt: "",
          class: "bg-muted size-12 shrink-0 rounded object-cover"
        }, null, 8, si)) : (t(), n("span", ri, c(h(e.modelValue.name) || "file"), 1)),
        o("span", ii, [
          o("span", di, c(e.modelValue.name), 1),
          o("span", ui, [
            N(c(C(e.modelValue.size)) + " ", 1),
            e.modelValue.url ? (t(), n(z, { key: 0 }, [
              w[4] || (w[4] = N(" · ", -1)),
              o("a", {
                href: e.modelValue.url,
                class: "hover:underline"
              }, "Download", 8, ci)
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
        class: A(["flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-4 py-6 text-center transition-colors", [
          i.value ? "border-primary bg-primary/5" : "hover:bg-accent/40",
          e.disabled ? "pointer-events-none opacity-50" : ""
        ]]),
        onDragover: w[1] || (w[1] = he((P) => i.value = !0, ["prevent"])),
        onDragleave: w[2] || (w[2] = he((P) => i.value = !1, ["prevent"])),
        onDrop: he(m, ["prevent"])
      }, [
        o("input", {
          ref_key: "input",
          ref: s,
          type: "file",
          class: "sr-only",
          accept: g.value,
          disabled: e.disabled,
          onChange: w[0] || (w[0] = (P) => M(P.target.files))
        }, null, 40, Qr),
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
        o("span", ei, [
          d.value === null ? (t(), n("span", ti, "Drop a file or click to choose")) : (t(), n("span", ai, "Uploading…"))
        ]),
        o("span", ni, c(v.value), 1),
        d.value !== null ? (t(), n("span", li, [
          o("span", {
            class: "bg-primary block h-full transition-[width] duration-150",
            style: se({ width: `${d.value}%` })
          }, null, 4)
        ])) : $("", !0)
      ], 34)),
      u.value ? (t(), n("p", fi, c(u.value), 1)) : $("", !0)
    ]));
  }
}), mi = { class: "flex flex-col gap-2" }, pi = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, vi = { class: "text-muted-foreground grid grid-cols-[1fr_1fr_auto] gap-2 text-xs" }, gi = { class: "flex flex-col gap-1" }, hi = ["onUpdate:modelValue", "disabled", "aria-label"], bi = {
  key: 0,
  class: "text-destructive text-xs",
  role: "alert"
}, yi = {
  key: 1,
  class: "text-destructive text-xs",
  role: "alert"
}, xi = ["onUpdate:modelValue", "disabled", "aria-label"], ki = ["disabled", "aria-label", "onClick"], $i = {
  key: 1,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, wi = { class: "flex items-center gap-3" }, Ci = ["disabled"], Si = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, Mi = /* @__PURE__ */ O({
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
        JSON.stringify(M ?? null) !== JSON.stringify(f()) && (d.value = u(M));
      }
    );
    function f() {
      const M = {};
      for (const S of d.value) {
        const B = S.key.trim();
        B !== "" && (M[B] = S.value);
      }
      return Object.keys(M).length ? M : null;
    }
    function g() {
      r("update:modelValue", f());
    }
    const p = x(() => {
      const M = /* @__PURE__ */ new Map();
      for (const S of d.value) {
        const B = S.key.trim();
        B !== "" && M.set(B, (M.get(B) ?? 0) + 1);
      }
      return new Set([...M.entries()].filter(([, S]) => S > 1).map(([S]) => S));
    }), v = x(
      () => new Set(
        d.value.map((M) => M.key.trim()).filter((M) => M !== "" && !s.test(M))
      )
    ), C = x(() => a.maxPairs !== null && d.value.length >= a.maxPairs);
    function h() {
      C.value || a.disabled || d.value.push({ uid: i++, key: "", value: "" });
    }
    function k(M) {
      d.value = d.value.filter((S) => S.uid !== M), g();
    }
    return (M, S) => (t(), n("div", mi, [
      d.value.length ? (t(), n("div", pi, [
        o("div", vi, [
          o("span", null, c(e.keyLabel), 1),
          o("span", null, c(e.valueLabel), 1),
          S[0] || (S[0] = o("span", { class: "w-7" }, null, -1))
        ]),
        (t(!0), n(z, null, j(d.value, (B) => (t(), n("div", {
          key: B.uid,
          class: "grid grid-cols-[1fr_1fr_auto] items-start gap-2"
        }, [
          o("div", gi, [
            pe(o("input", {
              "onUpdate:modelValue": (m) => B.key = m,
              type: "text",
              class: A([
                "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
                p.value.has(B.key.trim()) || v.value.has(B.key.trim()) ? "border-destructive" : ""
              ]),
              disabled: e.disabled,
              "aria-label": e.keyLabel,
              onInput: g
            }, null, 42, hi), [
              [Ae, B.key]
            ]),
            v.value.has(B.key.trim()) ? (t(), n("p", bi, " Letters, numbers, underscores and dashes only. ")) : p.value.has(B.key.trim()) ? (t(), n("p", yi, " Used twice - only the last value will be saved. ")) : $("", !0)
          ]),
          pe(o("input", {
            "onUpdate:modelValue": (m) => B.value = m,
            type: "text",
            class: "border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
            disabled: e.disabled,
            "aria-label": e.valueLabel,
            onInput: g
          }, null, 40, xi), [
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
          ])], 8, ki)
        ]))), 128))
      ])) : (t(), n("p", $i, " Nothing here yet. ")),
      o("div", wi, [
        o("button", {
          type: "button",
          class: "text-foreground hover:bg-accent inline-flex w-fit items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors disabled:pointer-events-none disabled:opacity-50",
          disabled: e.disabled || C.value,
          onClick: h
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
        ], 8, Ci),
        e.maxPairs !== null ? (t(), n("p", Si, c(d.value.length) + " of " + c(e.maxPairs), 1)) : $("", !0)
      ])
    ]));
  }
}), Bi = { class: "border-input bg-background focus-within:ring-ring overflow-hidden rounded-md border focus-within:ring-2" }, _i = { class: "bg-muted/40 flex flex-wrap items-center gap-0.5 border-b px-1.5 py-1" }, Ai = ["disabled", "title", "aria-label", "onClick"], Pi = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, zi = ["d"], Oi = ["disabled"], Li = ["contenteditable", "data-placeholder"], ji = {
  key: 0,
  class: "text-muted-foreground border-t px-3 py-1 text-right text-xs tabular-nums"
}, Vi = /* @__PURE__ */ O({
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
    ], u = x(() => d.filter((k) => a.toolbar.includes(k.id))), f = x(() => a.toolbar.includes("link")), g = R(0);
    function p() {
      const k = s.value?.innerHTML ?? "", M = (s.value?.innerText ?? "").trim();
      g.value = M.length;
      const S = M === "" ? null : k;
      i = S, r("update:modelValue", S);
    }
    function v(k) {
      a.disabled || (s.value?.focus(), document.execCommand(k.command, !1, k.argument), p());
    }
    function C() {
      if (a.disabled)
        return;
      const k = window.prompt("Link address");
      k && (s.value?.focus(), document.execCommand("createLink", !1, k), p());
    }
    function h(k) {
      k.preventDefault();
      const M = k.clipboardData?.getData("text/plain") ?? "";
      document.execCommand("insertText", !1, M), p();
    }
    return ve(() => {
      s.value && (s.value.innerHTML = a.modelValue ?? "", g.value = s.value.innerText.trim().length);
    }), me(
      () => a.modelValue,
      (k) => {
        k !== i && s.value && (s.value.innerHTML = k ?? "", g.value = s.value.innerText.trim().length);
      }
    ), (k, M) => (t(), n("div", Bi, [
      o("div", _i, [
        (t(!0), n(z, null, j(u.value, (S) => (t(), n("button", {
          key: S.id,
          type: "button",
          class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded transition-colors disabled:opacity-40",
          disabled: e.disabled,
          title: S.label,
          "aria-label": S.label,
          onMousedown: M[0] || (M[0] = he(() => {
          }, ["prevent"])),
          onClick: (B) => v(S)
        }, [
          (t(), n("svg", Pi, [
            o("path", {
              d: S.path
            }, null, 8, zi)
          ]))
        ], 40, Ai))), 128)),
        f.value ? (t(), n("button", {
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
        ])], 40, Oi)) : $("", !0)
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
        onPaste: h
      }, null, 42, Li),
      e.maxLength !== null ? (t(), n("div", ji, c(g.value) + " / " + c(e.maxLength), 1)) : $("", !0)
    ]));
  }
}), Ti = /* @__PURE__ */ wt(Vi, [["__scopeId", "data-v-32c63bc7"]]), Di = {
  key: 1,
  class: "flex flex-col gap-2"
}, Ei = { class: "flex items-center justify-between gap-2" }, Ii = ["for"], Fi = {
  key: 0,
  class: "text-destructive",
  "aria-hidden": "true"
}, Ni = ["aria-label", "disabled"], Ri = {
  key: 7,
  class: "flex flex-col gap-2"
}, Ui = ["id", "value", "disabled"], Hi = ["value"], Ki = {
  key: 0,
  class: "relative"
}, qi = ["disabled"], Gi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Wi = { class: "max-h-56 overflow-y-auto p-1" }, Zi = ["onClick"], Ji = {
  key: 8,
  class: "relative"
}, Yi = ["disabled", "aria-invalid"], Xi = {
  key: 0,
  class: "bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
}, Qi = { class: "max-h-56 overflow-y-auto p-1" }, ed = {
  key: 0,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, td = {
  key: 1,
  class: "text-muted-foreground px-2 py-2 text-xs"
}, ad = ["onClick"], nd = ["id", "value", "disabled", "aria-invalid"], ld = ["value"], od = {
  key: 10,
  class: "flex items-center gap-2 text-sm"
}, sd = {
  key: 11,
  class: "flex items-center gap-2 text-sm"
}, rd = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], id = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, dd = ["aria-label", "disabled"], ud = ["id", "value", "rows", "placeholder", "disabled", "aria-invalid"], cd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, fd = ["aria-label", "disabled"], md = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], pd = {
  key: 0,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, vd = ["aria-label", "disabled"], gd = ["id", "type", "value", "placeholder", "autocomplete", "min", "max", "disabled", "aria-invalid"], hd = {
  key: 2,
  class: "bg-muted text-muted-foreground flex items-center px-2 text-sm"
}, bd = ["aria-label", "disabled"], yd = {
  key: 16,
  class: "flex flex-wrap gap-1.5"
}, xd = ["disabled", "aria-pressed", "onClick"], kd = {
  key: 17,
  class: "flex flex-wrap gap-1.5"
}, $d = ["title", "disabled", "onClick"], wd = ["href"], Cd = {
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
    const a = sa(() => import("./PkRepeater-J84jGe3T.js")), r = sa(() => import("./PkBuilder-DXeyw3Du.js")), s = e, i = l, d = R(!1), u = R(""), f = R([]), g = R(!1), p = R(null);
    let v;
    me(u, (le) => {
      s.searchOptions && (clearTimeout(v), g.value = !0, v = setTimeout(async () => {
        try {
          f.value = await s.searchOptions(le);
        } catch {
        } finally {
          g.value = !1;
        }
      }, 200));
    });
    async function C() {
      if (!(s.processing || s.field.disabled) && (d.value = !0, f.value.length === 0 && s.searchOptions)) {
        g.value = !0;
        try {
          f.value = await s.searchOptions("");
        } finally {
          g.value = !1;
        }
      }
    }
    function h(le) {
      p.value = le.label, i("change", le.value), d.value = !1, u.value = "";
    }
    function k() {
      p.value = null, i("change", null);
    }
    const M = ht("panelPicker", null), S = ht("panelCreateOption", null), B = R(!1), m = R(!1), b = R({}), w = R(null), P = x(() => qr(s.field)), I = x(() => Gr(s.field));
    function E() {
      b.value = {}, w.value = null, B.value = !0, d.value = !1;
    }
    function te() {
      m.value || (B.value = !1, b.value = {}, w.value = null);
    }
    async function H(le) {
      if (S) {
        m.value = !0, b.value = {}, w.value = null;
        try {
          const X = await S.run(s.field.key, { ...le });
          h(X), B.value = !1;
        } catch (X) {
          X instanceof Kr ? (b.value = X.fieldErrors, w.value = Object.keys(X.fieldErrors).length === 0 ? X.message : null) : w.value = X instanceof Error ? X.message : "Could not create that option.";
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
    }), G = x(() => s.field.morphTo ?? []), oe = x(() => {
      const le = s.value;
      return le && typeof le == "object" && !Array.isArray(le) ? le : { type: void 0, id: void 0 };
    });
    function ae(le) {
      i("change", { type: le || null, id: null });
    }
    function Z(le) {
      i("change", { type: oe.value.type ?? null, id: le });
    }
    function q(le) {
      p.value = le.label, Z(le.value), d.value = !1, u.value = "";
    }
    ke(() => clearTimeout(v));
    const _ = x(() => Hr(s.field.type)), F = x(
      () => !!s.field.prefix || !!s.field.suffix || !!s.field.prefixIcon || !!s.field.suffixIcon || !!s.field.prefixAction || !!s.field.suffixAction
    );
    function V(le) {
      if (le) {
        if (le.copy) {
          const X = s.value == null ? "" : String(s.value);
          X !== "" && typeof navigator < "u" && navigator.clipboard && navigator.clipboard.writeText(X);
          return;
        }
        if (le.url && typeof window < "u") {
          window.open(le.url, "_blank", "noopener,noreferrer");
          return;
        }
        le.key && i("affix-action", le.key);
      }
    }
    const J = `border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50 ${Re} ${Me}`, ge = `bg-background h-9 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm focus-visible:ring-0 focus-visible:outline-none disabled:opacity-50 ${Re}`;
    function ye(le) {
      const X = document.getElementById(`f-${s.field.key}`);
      if (!(X instanceof HTMLTextAreaElement) && !(X instanceof HTMLInputElement))
        return;
      const ne = X.selectionStart ?? X.value.length, Ce = X.selectionEnd ?? ne;
      X.setRangeText(le, ne, Ce, "end"), X.dispatchEvent(new Event("input", { bubbles: !0 })), X.focus();
    }
    return (le, X) => (t(), n(z, null, [
      e.field.type === "hidden" ? (t(), n(z, { key: 0 }, [], 64)) : (t(), n("div", Di, [
        o("div", Ei, [
          o("label", {
            for: `f-${e.field.key}`,
            class: A(["text-sm font-medium leading-none", { "sr-only": e.field.labelHidden }])
          }, [
            N(c(e.field.label) + " ", 1),
            e.field.required ? (t(), n("span", Fi, "*")) : $("", !0)
          ], 10, Ii),
          e.field.hint ? (t(), n("span", {
            key: 0,
            class: A(["flex items-center gap-1", y(vt)])
          }, [
            N(c(e.field.hint) + " ", 1),
            e.field.hintAction ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "hover:text-foreground rounded px-1",
              "aria-label": e.field.hintAction.label ?? "Copy",
              disabled: e.field.disabled || e.processing,
              onClick: X[0] || (X[0] = (ne) => V(e.field.hintAction))
            }, c(e.field.hintAction.label ?? "⧉"), 9, Ni)) : $("", !0)
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
          "onUpdate:modelValue": X[1] || (X[1] = (ne) => i("change", ne))
        }, null, 8, ["field", "model-value", "values", "options", "errors", "disabled"])) : e.field.type === "file" && e.upload ? (t(), T(La, {
          key: 1,
          "model-value": e.value ?? null,
          accept: e.field.accept ?? [],
          "max-kilobytes": e.field.maxKilobytes ?? 10240,
          image: e.field.image ?? !1,
          disabled: e.field.disabled || e.processing,
          upload: e.upload,
          discard: e.discard,
          "onUpdate:modelValue": X[2] || (X[2] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "accept", "max-kilobytes", "image", "disabled", "upload", "discard"])) : e.field.type === "repeater" ? (t(), T(y(a), {
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
          "onUpdate:modelValue": X[3] || (X[3] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "children", "field-key", "item-label", "min-items", "max-items", "disabled", "errors", "child-options"])) : e.field.type === "builder" ? (t(), T(y(r), {
          key: 3,
          "model-value": e.value ?? null,
          blocks: e.field.blocks ?? [],
          "max-blocks": e.field.maxBlocks ?? null,
          disabled: e.field.disabled || e.processing,
          errors: e.errors,
          "onUpdate:modelValue": X[4] || (X[4] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "blocks", "max-blocks", "disabled", "errors"])) : e.field.type === "richtext" ? (t(), T(Ti, {
          key: 4,
          "model-value": e.value ?? null,
          toolbar: e.field.toolbar ?? ["bold", "italic", "heading", "list", "link"],
          "max-length": e.field.maxLength ?? null,
          placeholder: e.field.placeholder ?? "Write a note…",
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[5] || (X[5] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "toolbar", "max-length", "placeholder", "disabled"])) : e.field.type === "keyvalue" ? (t(), T(Mi, {
          key: 5,
          "model-value": e.value ?? null,
          "key-label": e.field.keyLabel ?? "Key",
          "value-label": e.field.valueLabel ?? "Value",
          "max-pairs": e.field.maxPairs ?? null,
          disabled: e.field.disabled || e.processing,
          "onUpdate:modelValue": X[6] || (X[6] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "key-label", "value-label", "max-pairs", "disabled"])) : e.field.type === "multiselect" ? (t(), T(Wt, {
          key: 6,
          "model-value": Array.isArray(e.value) ? e.value : [],
          options: e.options ?? [],
          disabled: e.field.disabled || e.processing,
          max: e.field.max ?? null,
          placeholder: e.field.placeholder ?? "Select…",
          "onUpdate:modelValue": X[7] || (X[7] = (ne) => i("change", ne))
        }, null, 8, ["model-value", "options", "disabled", "max", "placeholder"])) : G.value.length ? (t(), n("div", Ri, [
          o("select", {
            id: `f-${e.field.key}-type`,
            value: oe.value.type ?? "",
            disabled: e.field.disabled || e.processing,
            class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", y(Me)]),
            onChange: X[8] || (X[8] = (ne) => ae(ne.target.value))
          }, [
            X[24] || (X[24] = o("option", { value: "" }, "Type", -1)),
            (t(!0), n(z, null, j(G.value, (ne) => (t(), n("option", {
              key: ne.value,
              value: ne.value
            }, c(ne.label), 9, Hi))), 128))
          ], 42, Ui),
          oe.value.type && e.searchOptions ? (t(), n("div", Ki, [
            o("button", {
              type: "button",
              class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", y(Me)]),
              disabled: e.field.disabled || e.processing,
              onClick: C
            }, [
              o("span", {
                class: A(p.value || oe.value.id ? "" : "text-muted-foreground")
              }, c(p.value ?? (oe.value.id ? String(oe.value.id) : "Search…")), 3)
            ], 10, qi),
            d.value ? (t(), n("div", Gi, [
              pe(o("input", {
                "onUpdate:modelValue": X[9] || (X[9] = (ne) => u.value = ne),
                type: "search",
                class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
                placeholder: "Type to search…",
                autofocus: ""
              }, null, 512), [
                [Ae, u.value]
              ]),
              o("div", Wi, [
                (t(!0), n(z, null, j(f.value, (ne) => (t(), n("button", {
                  key: String(ne.value),
                  type: "button",
                  class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                  onClick: (Ce) => q(ne)
                }, c(ne.label), 9, Zi))), 128))
              ])
            ])) : $("", !0),
            d.value ? (t(), n("div", {
              key: 1,
              class: "fixed inset-0 z-40",
              onClick: X[10] || (X[10] = (ne) => d.value = !1)
            })) : $("", !0)
          ])) : $("", !0)
        ])) : e.field.type === "select" && e.searchOptions ? (t(), n("div", Ji, [
          o("button", {
            type: "button",
            class: A(["border-input bg-background flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", y(Me)]),
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            onClick: C
          }, [
            o("span", {
              class: A(p.value || e.value ? "" : "text-muted-foreground")
            }, c(p.value ?? (e.value ? String(e.value) : "Search…")), 3),
            e.value ? (t(), n("span", {
              key: 0,
              class: "text-muted-foreground hover:text-foreground ml-2 text-xs",
              role: "button",
              "aria-label": "Clear selection",
              onClick: he(k, ["stop"])
            }, " ✕ ")) : $("", !0)
          ], 10, Yi),
          d.value ? (t(), n("div", Xi, [
            pe(o("input", {
              "onUpdate:modelValue": X[11] || (X[11] = (ne) => u.value = ne),
              type: "search",
              class: "h-9 w-full border-b bg-transparent px-3 text-sm outline-none",
              placeholder: "Type to search…",
              autofocus: ""
            }, null, 512), [
              [Ae, u.value]
            ]),
            o("div", Qi, [
              g.value ? (t(), n("p", ed, " Searching… ")) : f.value.length === 0 ? (t(), n("p", td, " No matches ")) : $("", !0),
              (t(!0), n(z, null, j(f.value, (ne) => (t(), n("button", {
                key: String(ne.value),
                type: "button",
                class: "hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm",
                onClick: (Ce) => h(ne)
              }, c(ne.label), 9, ad))), 128)),
              e.field.createOption && y(S) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "text-primary hover:bg-accent mt-1 flex w-full items-center gap-1.5 rounded border-t px-2 py-2 text-left text-sm font-medium",
                onClick: E
              }, [
                X[25] || (X[25] = o("span", { "aria-hidden": "true" }, "+", -1)),
                N(" " + c(I.value), 1)
              ])) : $("", !0)
            ])
          ])) : $("", !0),
          d.value ? (t(), n("div", {
            key: 1,
            class: "fixed inset-0 z-40",
            onClick: X[12] || (X[12] = (ne) => d.value = !1)
          })) : $("", !0)
        ])) : e.field.type === "select" ? (t(), n("select", {
          key: 9,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background h-9 rounded-md border px-3 text-sm disabled:opacity-50", y(Me)]),
          onChange: X[13] || (X[13] = (ne) => i("change", ne.target.value || null))
        }, [
          X[26] || (X[26] = o("option", { value: "" }, "-", -1)),
          (t(!0), n(z, null, j(e.options, (ne) => (t(), n("option", {
            key: String(ne.value),
            value: ne.value
          }, c(ne.label), 9, ld))), 128))
        ], 42, nd)) : e.field.type === "toggle" ? (t(), n("label", od, [
          D(y(Ze), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[14] || (X[14] = (ne) => i("change", ne))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(y(vt))
          }, c(e.field.help ?? "Enabled"), 3)
        ])) : e.field.type === "checkbox" ? (t(), n("label", sd, [
          D(y(Xr), {
            id: `f-${e.field.key}`,
            "model-value": !!e.value,
            disabled: e.field.disabled || e.processing,
            "onUpdate:modelValue": X[15] || (X[15] = (ne) => i("change", ne === !0))
          }, null, 8, ["id", "model-value", "disabled"]),
          o("span", {
            class: A(y(vt))
          }, c(e.field.help ?? e.field.label), 3)
        ])) : e.field.type === "textarea" && !F.value ? (t(), n("textarea", {
          key: 12,
          id: `f-${e.field.key}`,
          value: e.value ?? "",
          rows: e.field.rows ?? 3,
          placeholder: e.field.placeholder,
          disabled: e.field.disabled || e.processing,
          "aria-invalid": !!e.error,
          class: A(["border-input bg-background rounded-md border px-3 py-2 text-sm disabled:opacity-50", y(Re), y(Me)]),
          onInput: X[16] || (X[16] = (ne) => i("change", ne.target.value))
        }, null, 42, rd)) : e.field.type === "textarea" ? (t(), n("div", {
          key: 13,
          class: A([
            "border-input flex overflow-hidden rounded-md border",
            y(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", id, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[17] || (X[17] = (ne) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, dd)) : $("", !0),
          o("textarea", {
            id: `f-${e.field.key}`,
            value: e.value ?? "",
            rows: e.field.rows ?? 3,
            placeholder: e.field.placeholder,
            disabled: e.field.disabled || e.processing,
            "aria-invalid": !!e.error,
            class: A(["min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm focus-visible:outline-none", y(Re)]),
            onInput: X[18] || (X[18] = (ne) => i("change", ne.target.value))
          }, null, 42, ud),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", cd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[19] || (X[19] = (ne) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, fd)) : $("", !0)
        ], 2)) : F.value ? (t(), n("div", {
          key: 15,
          class: A([
            "border-input flex h-9 overflow-hidden rounded-md border",
            y(da),
            { "opacity-50": e.field.disabled || e.processing }
          ])
        }, [
          e.field.prefix || e.field.prefixIcon ? (t(), n("span", pd, c(e.field.prefix ?? e.field.prefixIcon), 1)) : $("", !0),
          e.field.prefixAction ? (t(), n("button", {
            key: 1,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.prefixAction.label ?? "Action",
            disabled: e.field.disabled || e.processing,
            onClick: X[21] || (X[21] = (ne) => V(e.field.prefixAction))
          }, c(e.field.prefixAction.label ?? "⧉"), 9, vd)) : $("", !0),
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
            class: A(ge),
            onInput: X[22] || (X[22] = (ne) => i("change", ne.target.value))
          }, null, 40, gd),
          e.field.suffix || e.field.suffixIcon ? (t(), n("span", hd, c(e.field.suffix ?? e.field.suffixIcon), 1)) : $("", !0),
          e.field.suffixAction ? (t(), n("button", {
            key: 3,
            type: "button",
            class: "bg-muted text-muted-foreground hover:text-foreground px-2 text-xs",
            "aria-label": e.field.suffixAction.label ?? "Copy",
            disabled: e.field.disabled || e.processing,
            onClick: X[23] || (X[23] = (ne) => V(e.field.suffixAction))
          }, c(e.field.suffixAction.label ?? "⧉"), 9, bd)) : $("", !0)
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
          class: A(J),
          onInput: X[20] || (X[20] = (ne) => i("change", ne.target.value))
        }, null, 40, md)),
        e.field.type === "number" && e.field.presets?.length ? (t(), n("div", yd, [
          (t(!0), n(z, null, j(e.field.presets, (ne) => (t(), n("button", {
            key: ne,
            type: "button",
            disabled: e.field.disabled || e.processing,
            class: A([
              "rounded-md border px-2.5 py-1 text-xs transition-colors disabled:opacity-50",
              y(Me),
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne ? "border-primary bg-primary/10 text-primary font-medium" : "border-input hover:bg-muted"
            ]),
            "aria-pressed": (
              // eslint-disable-next-line eqeqeq
              e.value != null && e.value == ne
            ),
            onClick: (Ce) => i("change", String(ne))
          }, c(ne), 11, xd))), 128))
        ])) : $("", !0),
        e.field.type === "textarea" && e.field.chips && Object.keys(e.field.chips).length ? (t(), n("div", kd, [
          (t(!0), n(z, null, j(e.field.chips, (ne, Ce) => (t(), n("button", {
            key: Ce,
            type: "button",
            title: ne,
            disabled: e.field.disabled || e.processing,
            class: "border-input hover:bg-muted rounded-md border px-2 py-1 font-mono text-xs transition-colors disabled:opacity-50",
            onClick: (la) => ye(String(Ce))
          }, c(Ce), 9, $d))), 128))
        ])) : $("", !0),
        K.value ? (t(), n("a", {
          key: 18,
          href: K.value,
          class: "text-muted-foreground hover:text-foreground text-xs underline-offset-2 hover:underline"
        }, " Browse ", 8, wd)) : $("", !0),
        e.error ? (t(), n("p", Cd, c(e.error), 1)) : e.field.help && e.field.type !== "toggle" ? (t(), n("p", {
          key: 20,
          class: A(y(vt))
        }, c(e.field.help), 3)) : $("", !0)
      ])),
      e.field.createOption && y(S) ? (t(), T(Yr, {
        key: 2,
        open: B.value,
        title: P.value,
        description: e.field.help ?? void 0,
        fields: e.field.createOption,
        processing: m.value,
        errors: b.value,
        "general-error": w.value,
        onClose: te,
        onSubmit: H
      }, null, 8, ["open", "title", "description", "fields", "processing", "errors", "general-error"])) : $("", !0)
    ], 64));
  }
}), Sd = { class: "flex min-w-0 items-start gap-2.5" }, Md = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, Bd = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, _d = ["d"], Ad = { class: "min-w-0" }, Pd = { class: "text-sm font-semibold" }, zd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Od = {
  key: 2,
  class: "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10"
}, Ld = { class: "border-b px-4 py-3.5 sm:px-5" }, jd = { class: "text-sm font-semibold" }, Vd = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Td = {
  key: 4,
  class: "min-w-0 space-y-4"
}, Dd = {
  key: 7,
  class: "flex flex-col gap-3"
}, Ed = { class: "text-sm font-medium" }, Id = {
  key: 0,
  class: "text-muted-foreground -mt-2 text-sm"
}, Fd = {
  key: 0,
  class: "mb-1 font-medium"
}, Nd = ["onClick"], Rd = {
  key: 0,
  class: "bg-destructive size-1.5 rounded-full",
  "aria-label": "has errors"
}, Ud = { class: "flex items-center justify-between gap-3 border-t p-4" }, Hd = ["disabled"], ja = /* @__PURE__ */ O({
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
      () => (a.node.children ?? []).map((B) => ({
        label: B.label ?? "",
        description: B.description
      }))
    ), f = x(() => a.depth === 0), g = x(() => {
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
    }), p = x(() => {
      const B = {
        info: "border-border bg-muted/50 text-foreground",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200",
        warning: "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200",
        danger: "border-destructive/30 bg-destructive/10 text-destructive"
      };
      return B[a.node.tone ?? "info"] ?? B.info;
    }), v = x(() => {
      const B = a.node.columns ?? 1;
      return B >= 3 ? "sm:grid-cols-3" : B === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
    });
    function C(B) {
      const m = B.children?.length ?? 1;
      return m >= 3 ? "md:grid-cols-3" : m === 2 ? "md:grid-cols-2" : "md:grid-cols-1";
    }
    function h(B = 1) {
      return B >= 4 ? "md:col-span-4" : B === 3 ? "md:col-span-3" : B === 2 ? "md:col-span-2" : "md:col-span-1";
    }
    function k(B) {
      const m = [], b = (w) => {
        w.component === "field" && w.key && m.push(w.key), w.children?.forEach(b);
      };
      return b(B), m.some((w) => a.errors[w]);
    }
    function M(B) {
      if (B.hidden)
        return !1;
      const m = B.visibleWhen;
      return m ? a.values[m.field] == m.value : !0;
    }
    function S(B) {
      if (a.upload)
        return (m, b) => a.upload(B, m, b);
    }
    return (B, m) => {
      const b = Rt("SchemaNode", !0);
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
        class: A(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            f.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: m[2] || (m[2] = (w) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", Sd, [
            e.node.icon ? (t(), n("div", Md, [
              (t(), n("svg", Bd, [
                o("path", {
                  d: y(ce)(e.node.icon)
                }, null, 8, _d)
              ]))
            ])) : $("", !0),
            o("div", Ad, [
              o("h3", Pd, c(e.node.label), 1),
              e.node.description ? (t(), n("p", zd, c(e.node.description), 1)) : $("", !0)
            ])
          ]),
          e.node.collapsible ? (t(), n("svg", {
            key: 0,
            viewBox: "0 0 24 24",
            class: A(["text-muted-foreground mt-0.5 size-4 shrink-0 transition-transform", s.value ? "rotate-180" : ""]),
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2.5"
          }, [...m[24] || (m[24] = [
            o("path", { d: "m6 9 6 6 6-6" }, null, -1)
          ])], 2)) : $("", !0)
        ], 2),
        s.value ? (t(), n("div", {
          key: 0,
          class: A(["grid grid-cols-1 gap-4", [v.value, f.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
            key: P,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            class: A(w.span && w.span >= 2 ? "sm:col-span-2" : ""),
            onChange: m[3] || (m[3] = (I, E) => r("change", I, E)),
            onAffixAction: m[4] || (m[4] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "card" && M(e.node) ? (t(), n("section", Od, [
        o("header", Ld, [
          o("h3", jd, c(e.node.title), 1),
          e.node.description ? (t(), n("p", Vd, c(e.node.description), 1)) : $("", !0)
        ]),
        o("div", {
          class: A(["grid grid-cols-1 gap-4 px-4 py-4", v.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
            key: P,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[5] || (m[5] = (I, E) => r("change", I, E)),
            onAffixAction: m[6] || (m[6] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "columns" && M(e.node) ? (t(), n("div", {
        key: 3,
        class: A(["grid grid-cols-1 gap-4", C(e.node)])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
          key: P,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          class: A(w.component === "column" ? h(w.span) : ""),
          onChange: m[7] || (m[7] = (I, E) => r("change", I, E)),
          onAffixAction: m[8] || (m[8] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth", "class"]))), 128))
      ], 2)) : e.node.component === "column" && M(e.node) ? (t(), n("div", Td, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
          key: P,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[9] || (m[9] = (I, E) => r("change", I, E)),
          onAffixAction: m[10] || (m[10] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ])) : e.node.component === "grid" ? (t(), n("div", {
        key: 5,
        class: A(["grid grid-cols-1 gap-4", v.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
          key: P,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[11] || (m[11] = (I, E) => r("change", I, E)),
          onAffixAction: m[12] || (m[12] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "flex" ? (t(), n("div", {
        key: 6,
        class: A(["flex", g.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
          key: P,
          node: w,
          values: e.values,
          errors: e.errors,
          options: e.options,
          processing: e.processing,
          "search-options": e.searchOptions,
          upload: e.upload,
          discard: e.discard,
          depth: e.depth + 1,
          onChange: m[13] || (m[13] = (I, E) => r("change", I, E)),
          onAffixAction: m[14] || (m[14] = (I, E) => r("affix-action", I, E))
        }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
      ], 2)) : e.node.component === "fieldset" ? (t(), n("fieldset", Dd, [
        o("legend", Ed, c(e.node.label), 1),
        e.node.description ? (t(), n("p", Id, c(e.node.description), 1)) : $("", !0),
        o("div", {
          class: A(["grid grid-cols-1 gap-4", v.value])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), T(b, {
            key: P,
            node: w,
            values: e.values,
            errors: e.errors,
            options: e.options,
            processing: e.processing,
            "search-options": e.searchOptions,
            upload: e.upload,
            discard: e.discard,
            depth: e.depth + 1,
            onChange: m[15] || (m[15] = (I, E) => r("change", I, E)),
            onAffixAction: m[16] || (m[16] = (I, E) => r("affix-action", I, E))
          }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard", "depth"]))), 128))
        ], 2)
      ])) : e.node.component === "callout" ? (t(), n("div", {
        key: 8,
        role: "note",
        class: A(["rounded-lg border px-4 py-3 text-sm", p.value])
      }, [
        e.node.title ? (t(), n("p", Fd, c(e.node.title), 1)) : $("", !0),
        o("p", null, c(e.node.body), 1)
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 9,
        class: A(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", f.value ? "rounded-t-lg border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => (t(), n("button", {
            key: P,
            type: "button",
            class: A([
              "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === P ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (I) => i.value = P
          }, [
            N(c(w.label) + " ", 1),
            k(w) ? (t(), n("span", Rd)) : $("", !0)
          ], 10, Nd))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(w.children ?? [], (I, E) => (t(), T(b, {
            key: E,
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
          [He, i.value === P]
        ])), 128))
      ], 2)) : e.node.component === "wizard" ? (t(), n("div", {
        key: 10,
        class: A(f.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        D(Ur, {
          class: A(["p-4", f.value ? "border-b" : ""]),
          steps: u.value,
          "active-step": d.value,
          "has-error": (w) => k((e.node.children ?? [])[w]),
          "onUpdate:activeStep": m[19] || (m[19] = (w) => d.value = w)
        }, null, 8, ["class", "steps", "active-step", "has-error"]),
        (t(!0), n(z, null, j(e.node.children ?? [], (w, P) => pe((t(), n("div", {
          key: P,
          class: A(["flex flex-col gap-5", f.value ? "p-4" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(w.children ?? [], (I, E) => (t(), T(b, {
            key: E,
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
          [He, d.value === P]
        ])), 128)),
        o("div", Ud, [
          o("button", {
            type: "button",
            class: "text-foreground hover:bg-accent rounded-md border px-3 py-1.5 text-sm transition-colors disabled:pointer-events-none disabled:opacity-40",
            disabled: d.value === 0,
            onClick: m[22] || (m[22] = (w) => d.value--)
          }, " Back ", 8, Hd),
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
}), D5 = /* @__PURE__ */ O({
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
          (t(!0), n(z, null, j(e.form?.nodes ?? [], (f, g) => (t(), T(ja, {
            key: g,
            node: f,
            values: s.value,
            errors: e.errors,
            processing: e.processing,
            options: e.formOptions,
            "search-options": e.searchOptions,
            onChange: u[0] || (u[0] = (p, v) => s.value[p] = v)
          }, null, 8, ["node", "values", "errors", "processing", "options", "search-options"]))), 128))
        ], 32)
      ]),
      _: 1
    }, 8, ["open", "title", "busy"]));
  }
}), Kd = ["title"], qd = ["aria-label"], Gd = ["d"], Wd = { class: "sr-only" }, Zd = /* @__PURE__ */ O({
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
        class: A(["size-4", u.value]),
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        role: "img",
        "aria-label": f.value
      }, [
        o("path", { d: d.value }, null, 8, Gd)
      ], 10, qd)),
      o("span", Wd, c(f.value), 1)
    ], 8, Kd));
  }
}), Jd = ["aria-label"], Yd = ["fill"], E5 = /* @__PURE__ */ O({
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
        }, null, 8, Yd)
      ]))), 128))
    ], 8, Jd));
  }
}), Xd = ["src"], Qd = {
  key: 2,
  viewBox: "0 0 24 24",
  class: "size-1/2",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, eu = /* @__PURE__ */ O({
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
      class: A(["bg-muted text-muted-foreground inline-flex shrink-0 items-center justify-center overflow-hidden text-[10px] font-medium", [r[e.size], e.rounded ? "rounded-full" : "rounded"]])
    }, [
      s.value && !a.value ? (t(), n("img", {
        key: 0,
        src: s.value,
        alt: "",
        loading: "lazy",
        class: "size-full object-cover",
        onError: u[0] || (u[0] = (f) => a.value = !0)
      }, null, 40, Xd)) : e.fallback === "initials" ? (t(), n(z, { key: 1 }, [
        N(c(i.value), 1)
      ], 64)) : e.fallback === "icon" ? (t(), n("svg", Qd, [...u[1] || (u[1] = [
        o("path", { d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" }, null, -1)
      ])])) : $("", !0)
    ], 2));
  }
}), tu = {
  key: 0,
  class: "text-muted-foreground"
}, au = {
  key: 1,
  class: "inline-flex items-center gap-2"
}, nu = {
  key: 0,
  class: "font-mono text-xs"
}, lu = {
  key: 1,
  class: "sr-only"
}, ou = /* @__PURE__ */ O({
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
    return (s, i) => r.value === null ? (t(), n("span", tu, "-")) : (t(), n("span", au, [
      o("span", {
        class: "size-4 shrink-0 rounded border",
        style: se({ backgroundColor: r.value }),
        "aria-hidden": "true"
      }, null, 4),
      e.showValue ? (t(), n("span", nu, c(r.value), 1)) : (t(), n("span", lu, c(r.value), 1))
    ]));
  }
}), su = { class: "inline-flex items-center" }, ru = ["checked", "aria-label"], iu = { class: "sr-only" }, I5 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("span", su, [
      o("input", {
        type: "checkbox",
        checked: a.value,
        disabled: "",
        "aria-readonly": "true",
        "aria-label": r.value,
        class: "border-input text-primary size-4 rounded disabled:opacity-100"
      }, null, 8, ru),
      o("span", iu, c(r.value), 1)
    ]));
  }
}), du = {
  key: 0,
  class: "text-muted-foreground"
}, uu = {
  key: 1,
  class: "block max-w-[28rem] truncate font-mono text-xs"
}, F5 = /* @__PURE__ */ O({
  __name: "CodeCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => String(l.value ?? "").replace(/\s+/g, " ").trim()
    );
    return (r, s) => a.value ? (t(), n("code", uu, c(a.value), 1)) : (t(), n("span", du, "—"));
  }
}), cu = {
  key: 0,
  class: "font-mono text-xs"
}, fu = {
  key: 1,
  class: "text-muted-foreground"
}, mu = {
  key: 2,
  class: "text-muted-foreground text-sm font-normal"
}, N5 = /* @__PURE__ */ O({
  __name: "KeyValueCell",
  props: {
    value: {}
  },
  setup(e) {
    const l = e, a = x(
      () => l.value && typeof l.value == "object" && !Array.isArray(l.value) ? Object.keys(l.value) : null
    );
    return (r, s) => a.value === null && e.value != null ? (t(), n("span", cu, c(e.value), 1)) : !a.value || a.value.length === 0 ? (t(), n("span", fu, "—")) : (t(), n("span", mu, c(a.value.length) + " " + c(a.value.length === 1 ? "entry" : "entries"), 1));
  }
}), pu = ["data-variant"], vu = "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden [&>svg]:size-3 [&>svg]:pointer-events-none", qe = /* @__PURE__ */ O({
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
      () => [vu, a[l.variant], l.class].filter(Boolean).join(" ")
    );
    return (s, i) => (t(), n("span", {
      "data-slot": "badge",
      "data-variant": e.variant,
      class: A(r.value)
    }, [
      U(s.$slots, "default")
    ], 10, pu));
  }
}), gu = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, hu = {
  key: 1,
  class: "inline-flex flex-wrap items-center gap-1"
}, R5 = /* @__PURE__ */ O({
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
    return (d, u) => r.value.length === 0 ? (t(), n("span", gu, "None")) : (t(), n("span", hu, [
      (t(!0), n(z, null, j(s.value, (f) => (t(), T(qe, {
        key: f,
        variant: "secondary"
      }, {
        default: L(() => [
          N(c(f), 1)
        ]),
        _: 2
      }, 1024))), 128)),
      i.value > 0 ? (t(), T(qe, {
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
}), bu = ["aria-checked", "aria-label", "title", "disabled"], yu = ["value", "disabled"], xu = ["value"], U5 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.value === !0 || a.value === 1 || a.value === "1"), i = x(() => a.busy || a.disabled), d = x(
      () => s.value ? a.onLabel ?? "Enabled" : a.offLabel ?? "Disabled"
    );
    function u() {
      i.value || r("change", !s.value);
    }
    function f(g) {
      const p = g.target.value;
      p !== String(a.value ?? "") && r("change", p);
    }
    return (g, p) => e.type === "toggle" ? (t(), n("button", {
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
    ], 10, bu)) : (t(), n("select", {
      key: 1,
      class: "bg-background hover:bg-accent focus:ring-ring w-full min-w-28 rounded-md border px-2 py-1 text-xs transition-colors focus:ring-2 focus:outline-none disabled:opacity-50",
      value: String(e.value ?? ""),
      disabled: i.value,
      onClick: p[0] || (p[0] = he(() => {
      }, ["stop"])),
      onChange: f
    }, [
      (t(!0), n(z, null, j(e.options, (v, C) => (t(), n("option", {
        key: C,
        value: C
      }, c(v), 9, xu))), 128))
    ], 40, yu));
  }
}), Yt = {
  success: "success",
  danger: "destructive",
  warning: "warning",
  info: "info",
  neutral: "outline"
};
function ku(e) {
  return e != null && e !== "";
}
function $u(e) {
  const l = [];
  return e.type === "toggle" || e.type === "select" || e.type === "image" ? (e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" ")) : (e.key === "name" && l.push("font-medium"), e.mono && l.push("font-mono text-xs"), e.muted && l.push("text-muted-foreground"), e.transform === "upper" && l.push("uppercase"), e.transform === "lower" && l.push("lowercase"), e.align === "right" && l.push("text-right"), e.align === "center" && l.push("text-center"), l.join(" "));
}
function H5(e) {
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
      cellClass: $u(s),
      group: s.group
    }))
  ), a = x(() => Object.fromEntries(e.value.map((s) => [s.key, s])));
  function r(s, i) {
    const d = a.value[s];
    if (!d)
      return "outline";
    const u = typeof i == "boolean" ? i ? "1" : "" : String(i), f = d.colors?.[u] ?? d.defaultColor ?? "neutral";
    return Yt[f] ?? "outline";
  }
  return { columns: l, byKey: a, badgeVariant: r };
}
const wu = ["disabled", "aria-label", "aria-busy"], Cu = {
  class: "text-muted-foreground size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Su = ["d"], Mu = { class: "text-muted-foreground px-2 py-1.5 text-xs font-medium" }, Bu = ["disabled", "onClick"], _u = {
  key: 0,
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-label": "Current"
}, Au = ["d"], Pu = {
  key: 1,
  class: "size-4 shrink-0",
  "aria-hidden": "true"
}, K5 = /* @__PURE__ */ O({
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
    function u(v) {
      return typeof v == "boolean" ? v ? "1" : "" : String(v ?? "");
    }
    function f(v) {
      const C = a.colors[u(v)] ?? a.defaultColor ?? "neutral";
      return Yt[C] ?? "outline";
    }
    function g(v) {
      return a.options[v] ?? v;
    }
    function p(v, C) {
      if (s.value || v === i.value) {
        C();
        return;
      }
      r("change", v), C();
    }
    return (v, C) => (t(), n("div", {
      onClick: C[0] || (C[0] = he(() => {
      }, ["stop"]))
    }, [
      e.disabled ? (t(), T(qe, {
        key: 1,
        variant: f(e.value),
        class: "capitalize"
      }, {
        default: L(() => [
          N(c(g(i.value) || "-"), 1)
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
              variant: f(e.value),
              class: "capitalize"
            }, {
              default: L(() => [
                N(c(g(i.value) || "-"), 1)
              ]),
              _: 1
            }, 8, ["variant"]),
            (t(), n("svg", Cu, [
              o("path", {
                d: y(ce)("chevron-down")
              }, null, 8, Su)
            ]))
          ], 8, wu)
        ]),
        panel: L(({ close: h }) => [
          o("div", Mu, c(d.value), 1),
          (t(!0), n(z, null, j(e.options, (k, M) => (t(), n("button", {
            key: M,
            type: "button",
            role: "menuitem",
            class: "hover:bg-accent flex w-full items-center justify-between gap-3 rounded-sm px-2 py-1.5 text-left disabled:opacity-50",
            disabled: s.value,
            onClick: (S) => p(String(M), h)
          }, [
            D(qe, {
              variant: f(M),
              class: "capitalize"
            }, {
              default: L(() => [
                N(c(k), 1)
              ]),
              _: 2
            }, 1032, ["variant"]),
            String(M) === i.value ? (t(), n("svg", _u, [
              o("path", {
                d: y(ce)("check")
              }, null, 8, Au)
            ])) : (t(), n("span", Pu))
          ], 8, Bu))), 128))
        ]),
        _: 1
      }))
    ]));
  }
}), zu = { class: "flex items-center justify-end" }, Ou = ["aria-label"], Lu = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, ju = ["d"], Vu = ["href"], Tu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Du = ["d"], Eu = { class: "min-w-0 flex-1 truncate" }, Iu = ["disabled", "onClick"], Fu = ["d"], Nu = { class: "min-w-0 flex-1 truncate" }, Ru = {
  key: 0,
  class: "mt-0.5 border-t pt-0.5"
}, Uu = ["disabled", "onClick"], Hu = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Ku = ["d"], qu = { class: "min-w-0 flex-1 truncate" }, q5 = /* @__PURE__ */ O({
  __name: "RecordActions",
  props: {
    groups: {},
    title: {},
    busy: { default: null }
  },
  emits: ["run"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(null), d = R(null), u = x(() => r.groups.flatMap((S) => S.actions)), f = x(() => u.value.filter((S) => !S.destructive)), g = x(() => u.value.filter((S) => S.destructive)), p = {
      primary: "text-primary",
      gray: "text-foreground",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-500",
      danger: "text-destructive",
      info: "text-sky-600 dark:text-sky-400"
    };
    function v(S) {
      return p[S.color ?? "gray"] ?? p.gray;
    }
    const C = x(() => u.value.length === 0);
    function h(S) {
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
      const m = B.indexOf(document.activeElement), b = S.key === "ArrowDown" ? 1 : -1, w = (m + b + B.length) % B.length;
      B[w]?.focus();
    }
    return l({ openContextMenu: k }), (S, B) => (t(), n("div", zu, [
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
            (t(), n("svg", Lu, [
              o("path", {
                d: y(ce)("more-vertical")
              }, null, 8, ju)
            ]))
          ], 8, Ou)
        ]),
        panel: L(() => [
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
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none", v(m)])
              }, [
                (t(), n("svg", Tu, [
                  o("path", {
                    d: y(ot)(m)
                  }, null, 8, Du)
                ])),
                o("span", Eu, c(m.label), 1)
              ], 10, Vu)) : (t(), n("button", {
                key: 1,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: A(["hover:bg-accent focus:bg-accent flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50", v(m)]),
                disabled: e.busy === m.key,
                onClick: (b) => h(m)
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
                    d: y(ot)(m)
                  }, null, 8, Fu)
                ], 2)),
                o("span", Nu, c(m.label), 1)
              ], 10, Iu))
            ], 64))), 128)),
            g.value.length ? (t(), n("div", Ru, [
              (t(!0), n(z, null, j(g.value, (m) => (t(), n("button", {
                key: m.key,
                type: "button",
                "data-menu-item": "",
                role: "menuitem",
                class: "text-destructive hover:bg-destructive/10 focus:bg-destructive/10 flex w-full items-center gap-2.5 rounded px-2.5 py-2 text-left text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                disabled: e.busy === m.key,
                onClick: (b) => h(m)
              }, [
                (t(), n("svg", Hu, [
                  o("path", {
                    d: y(ot)({ ...m, destructive: !0 })
                  }, null, 8, Ku)
                ])),
                o("span", qu, c(m.label), 1)
              ], 8, Uu))), 128))
            ])) : $("", !0)
          ], 544)
        ]),
        _: 1
      }, 512))
    ]));
  }
}), jt = {
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
}, Vt = {
  neutral: { label: "Neutral", hue: 0, chroma: 0 },
  slate: { label: "Slate", hue: 260, chroma: 0.012 },
  gray: { label: "Gray", hue: 250, chroma: 6e-3 },
  zinc: { label: "Zinc", hue: 280, chroma: 6e-3 },
  stone: { label: "Stone", hue: 60, chroma: 8e-3 },
  warm: { label: "Warm", hue: 40, chroma: 0.014 },
  cool: { label: "Cool", hue: 220, chroma: 0.014 },
  sand: { label: "Sand", hue: 80, chroma: 0.016 }
}, bt = 12, yt = 20, Gu = [0, 0.25, 0.5, 0.75, 1], Xt = "alxtexhpanel.appearance", Be = {
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
}, Ve = R({ ...Be });
let Ye = !1;
const Va = "alxtexhpanel.appearance.vars", Tt = "pk-appearance";
function at() {
  return typeof window > "u" ? null : window;
}
let xt = null;
function Ta(e) {
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
function Da(e) {
  const l = at();
  l && (l.__panelAppearance = { ...e });
}
function Wu(e) {
  if (typeof document > "u")
    return;
  let l = document.getElementById(Tt);
  l || (l = document.createElement("style"), l.id = Tt, document.head.appendChild(l));
  const a = Object.entries(e).map(([r, s]) => `${r}: ${s};`).join(" ");
  l.textContent = `:root { ${a} }`;
}
function G5() {
  Ye = !1, xt = null, Ve.value = { ...Be };
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
function Ea(e) {
  const l = jt[e.primary] ?? jt.slate, a = Vt[e.surface] ?? Vt.neutral, r = a.chroma, s = a.hue, d = Qt(e) ? {
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
function Zu(e) {
  return {
    dark: Qt(e),
    theme: e.theme,
    vars: Ea(e),
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
function Ju() {
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
function Ia(e) {
  const l = ea(), a = e ? { ...Be, ...l, ...e } : { ...Be, ...l }, r = !Ye, s = Ta(a);
  if (Ve.value = a, Ye = !0, e) {
    Da(a);
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
        const u = Zu(a);
        localStorage.setItem(Va, JSON.stringify(u));
      } catch {
      }
      return;
    }
    Dt(a);
  }
}
function W5() {
  Ia(Ju());
}
function Z5(e) {
  const l = e?.props?.appearance;
  l != null && typeof l == "object" && Ia(l);
}
let Fa = null;
function J5(e) {
  Fa = e;
}
let Na = {};
function Yu(e) {
  if (Na = e, !(typeof document > "u") && !ea().primaryChosen)
    for (const [l, a] of Object.entries(e))
      document.documentElement.style.setProperty(l, a);
}
function Dt(e) {
  if (typeof document > "u")
    return;
  const l = document.documentElement, a = Ea(e), r = { ...a, ...e.primaryChosen ? {} : Na }, s = {
    dark: Qt(e),
    theme: e.theme,
    vars: r,
    sidebar: e.sidebarSide,
    contentLayout: e.contentLayout
  };
  l.classList.toggle("dark", s.dark);
  for (const [d, u] of Object.entries(r))
    l.style.setProperty(d, u);
  l.dataset.sidebar = s.sidebar, l.dataset.contentLayout = s.contentLayout, Wu(a), Da(e), xt = Ta(e);
  const i = at();
  i && (i.__panelAppearanceApplied = !0);
  try {
    localStorage.setItem(Va, JSON.stringify(s));
  } catch {
  }
}
function Ra() {
  function e(r) {
    Dt(r);
  }
  function l(r) {
    const s = r.primary !== void 0 ? { primaryChosen: !0 } : {};
    Ve.value = { ...Ve.value, ...r, ...s };
    try {
      localStorage.setItem(Xt, JSON.stringify(Ve.value));
    } catch {
    }
    e(Ve.value), Fa?.({ ...r, ...s });
  }
  function a() {
    l({ ...Be });
  }
  return ve(() => {
    if (Ye || at()?.__panelAppearanceApplied) {
      Ye = !0;
      return;
    }
    Ye = !0, Ve.value = ea(), Dt(Ve.value);
  }), {
    appearance: x(() => Ve.value),
    set: l,
    reset: a,
    PRIMARY_COLORS: jt,
    SURFACE_TINTS: Vt,
    FONT_SIZE_MIN: bt,
    FONT_SIZE_MAX: yt,
    RADIUS_OPTIONS: Gu
  };
}
const Xu = { class: "flex items-center justify-between border-b px-4 py-3" }, Qu = { class: "flex items-center gap-2" }, ec = { class: "flex flex-col gap-5 overflow-y-auto px-4 py-4" }, tc = { class: "flex flex-col gap-2" }, ac = { class: "grid grid-cols-8 gap-2" }, nc = ["title", "aria-label", "aria-pressed", "onClick"], lc = { class: "flex flex-col gap-2" }, oc = { class: "grid grid-cols-8 gap-2" }, sc = ["title", "aria-label", "aria-pressed", "onClick"], rc = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "absolute inset-0 m-auto size-4 text-black",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3.5"
}, ic = { class: "flex flex-col gap-2" }, dc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, uc = ["aria-pressed", "aria-label", "onClick"], cc = { class: "text-sm font-semibold" }, fc = { class: "bg-muted/50 flex gap-0.5 rounded-md p-0.5" }, mc = ["onClick"], pc = { class: "flex flex-col gap-2" }, vc = { class: "flex items-center justify-between" }, gc = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, hc = { class: "flex items-center gap-2" }, bc = ["disabled"], yc = ["min", "max", "value"], xc = ["disabled"], Y5 = /* @__PURE__ */ O({
  __name: "AppearanceDrawer",
  setup(e) {
    const { appearance: l, set: a, reset: r, PRIMARY_COLORS: s, SURFACE_TINTS: i, RADIUS_OPTIONS: d } = Ra(), u = R(!1), f = x(() => l.value.sidebarSide === "right"), g = [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" }
    ], p = [
      { value: "compact", label: "Compact" },
      { value: "comfortable", label: "Comfortable" },
      { value: "spacious", label: "Spacious" }
    ], v = [
      { value: "transparent", label: "Transparent" },
      { value: "filled", label: "Filled" }
    ], C = [
      { value: "left", label: "Left" },
      { value: "right", label: "Right" },
      { value: "horizontal", label: "Top" }
    ], h = [
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
          "enter-from-class": f.value ? "-translate-x-full" : "translate-x-full",
          "leave-active-class": "transition duration-150 ease-in",
          "leave-to-class": f.value ? "-translate-x-full" : "translate-x-full"
        }, {
          default: L(() => [
            u.value ? (t(), n("aside", {
              key: 0,
              class: A(["bg-background fixed top-0 z-50 flex h-full w-80 flex-col shadow-2xl", f.value ? "left-0 border-r" : "right-0 border-l"]),
              role: "dialog",
              "aria-label": "Appearance settings"
            }, [
              o("header", Xu, [
                B[9] || (B[9] = o("h2", { class: "text-base font-semibold" }, "Settings", -1)),
                o("div", Qu, [
                  o("button", {
                    class: "text-muted-foreground text-xs font-normal hover:underline",
                    onClick: B[2] || (B[2] = //@ts-ignore
                    (...m) => y(r) && y(r)(...m))
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
              o("div", ec, [
                o("section", tc, [
                  B[11] || (B[11] = o("h3", { class: "text-sm font-semibold" }, "Primary", -1)),
                  o("div", ac, [
                    (t(!0), n(z, null, j(y(s), (m, b) => (t(), n("button", {
                      key: b,
                      type: "button",
                      class: "relative size-7 rounded-md transition-transform hover:scale-110",
                      style: se({ background: m.value }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": y(l).primary === b,
                      onClick: (w) => y(a)({ primary: b })
                    }, [
                      y(l).primary === b ? (t(), n("svg", {
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
                    ], 12, nc))), 128))
                  ])
                ]),
                o("section", lc, [
                  B[13] || (B[13] = o("h3", { class: "text-sm font-semibold" }, "Surface", -1)),
                  o("div", oc, [
                    (t(!0), n(z, null, j(y(i), (m, b) => (t(), n("button", {
                      key: b,
                      type: "button",
                      class: "relative size-7 rounded-md border transition-transform hover:scale-110",
                      style: se({ background: M(m.hue, m.chroma) }),
                      title: m.label,
                      "aria-label": m.label,
                      "aria-pressed": y(l).surface === b,
                      onClick: (w) => y(a)({ surface: b })
                    }, [
                      y(l).surface === b ? (t(), n("svg", rc, [...B[12] || (B[12] = [
                        o("path", { d: "m5 13 4 4L19 7" }, null, -1)
                      ])])) : $("", !0)
                    ], 12, sc))), 128))
                  ])
                ]),
                o("section", ic, [
                  B[14] || (B[14] = o("h3", { class: "text-sm font-semibold" }, "Radius", -1)),
                  o("div", dc, [
                    (t(!0), n(z, null, j(y(d), (m) => (t(), n("button", {
                      key: m,
                      type: "button",
                      class: A([
                        "flex flex-1 flex-col items-center gap-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l).radius === m ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      "aria-pressed": y(l).radius === m,
                      "aria-label": `${m}rem radius`,
                      onClick: (b) => y(a)({ radius: m })
                    }, [
                      o("span", {
                        class: "border-foreground/50 block size-4 border-2",
                        style: se({ borderRadius: `${Math.min(m, 0.5)}rem` })
                      }, null, 4),
                      N(" " + c(m), 1)
                    ], 10, uc))), 128))
                  ])
                ]),
                (t(!0), n(z, null, j([
                  { label: "Color scheme", key: "theme", options: g },
                  { label: "Card style", key: "cardStyle", options: v },
                  { label: "Density", key: "density", options: p },
                  { label: "Sidebar", key: "sidebarSide", options: C },
                  { label: "Content layout", key: "contentLayout", options: h },
                  { label: "Menu style", key: "menuStyle", options: k }
                ], (m) => (t(), n("section", {
                  key: m.key,
                  class: "flex flex-col gap-2"
                }, [
                  o("h3", cc, c(m.label), 1),
                  o("div", fc, [
                    (t(!0), n(z, null, j(m.options, (b) => (t(), n("button", {
                      key: String(b.value),
                      type: "button",
                      class: A([
                        "flex-1 rounded px-2 py-1.5 text-xs transition-colors",
                        y(l)[m.key] === b.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
                      ]),
                      onClick: (w) => y(a)({ [m.key]: b.value })
                    }, c(b.label), 11, mc))), 128))
                  ])
                ]))), 128)),
                o("section", pc, [
                  o("div", vc, [
                    B[15] || (B[15] = o("h3", { class: "text-sm font-semibold" }, "Font size", -1)),
                    o("span", gc, c(y(l).fontSize) + "px", 1)
                  ]),
                  o("div", hc, [
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize <= y(bt),
                      "aria-label": "Decrease font size",
                      onClick: B[4] || (B[4] = (m) => y(a)({ fontSize: y(l).fontSize - 1 }))
                    }, " − ", 8, bc),
                    o("input", {
                      type: "range",
                      class: "accent-primary flex-1",
                      min: y(bt),
                      max: y(yt),
                      value: y(l).fontSize,
                      "aria-label": "Font size in pixels",
                      onInput: B[5] || (B[5] = (m) => y(a)({
                        fontSize: Number(m.target.value)
                      }))
                    }, null, 40, yc),
                    o("button", {
                      type: "button",
                      class: "border-input hover:bg-accent size-7 rounded-md border text-sm disabled:opacity-40",
                      disabled: y(l).fontSize >= y(yt),
                      "aria-label": "Increase font size",
                      onClick: B[6] || (B[6] = (m) => y(a)({ fontSize: y(l).fontSize + 1 }))
                    }, " + ", 8, xc)
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
}), kc = {
  class: "bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur sm:hidden",
  "aria-label": "Primary",
  style: { paddingBottom: "env(safe-area-inset-bottom)" }
}, $c = { class: "flex items-stretch" }, wc = ["href", "aria-current"], Cc = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Sc = ["d"], Mc = { class: "w-full truncate text-center" }, Bc = {
  key: 0,
  class: "flex-1"
}, _c = {
  class: "size-5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ac = ["d"], Pc = { class: "w-full truncate text-center" }, _t = 5, X5 = /* @__PURE__ */ O({
  __name: "PkBottomNav",
  props: {
    items: {},
    current: { default: "" },
    moreLabel: { default: "More" }
  },
  emits: ["more"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = x(
      () => a.items.length <= _t ? a.items : a.items.slice(0, _t - 1)
    ), i = x(() => a.items.length > _t);
    function d(u) {
      return u === "/" ? a.current === "/" : a.current === u || a.current.startsWith(`${u}/`);
    }
    return (u, f) => (t(), n("nav", kc, [
      o("ul", $c, [
        (t(!0), n(z, null, j(s.value, (g) => (t(), n("li", {
          key: g.key,
          class: "flex-1"
        }, [
          o("a", {
            href: g.href,
            class: A([
              "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
              d(g.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
            ]),
            "aria-current": d(g.href) ? "page" : void 0
          }, [
            (t(), n("svg", Cc, [
              o("path", {
                d: y(ce)(g.icon)
              }, null, 8, Sc)
            ])),
            o("span", Mc, c(g.title), 1)
          ], 10, wc)
        ]))), 128)),
        i.value ? (t(), n("li", Bc, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:text-foreground flex min-h-14 w-full flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] transition-colors",
            onClick: f[0] || (f[0] = (g) => r("more"))
          }, [
            (t(), n("svg", _c, [
              o("path", {
                d: y(ce)("more-horizontal")
              }, null, 8, Ac)
            ])),
            o("span", Pc, c(e.moreLabel), 1)
          ])
        ])) : $("", !0)
      ])
    ]));
  }
}), zc = ["value"], $e = /* @__PURE__ */ O({
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
      class: A([s, a.class]),
      onInput: d[0] || (d[0] = (u) => r("update:modelValue", u.target.value))
    }, null, 42, zc));
  }
}), Oc = ["for"], Pe = /* @__PURE__ */ O({
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
      U(l.$slots, "default")
    ], 10, Oc));
  }
}), Q5 = /* @__PURE__ */ O({
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
}), Lc = { class: "relative flex items-center gap-2 has-disabled:opacity-50" }, jc = ["id", "name", "value", "disabled", "maxlength"], Vc = ["data-active"], Tc = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
}, Dc = /* @__PURE__ */ O({
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
      () => Array.from({ length: a.length }, (B, m) => a.modelValue[m] ?? "")
    ), f = x(() => Math.min(a.modelValue.length, a.length - 1));
    function g(B) {
      return B.replace(/\D/g, "").slice(0, a.length);
    }
    function p(B) {
      a.disabled || B.length !== a.length || d.value !== B && (d.value = B, r("complete", B));
    }
    function v(B) {
      const m = g(B);
      m !== a.modelValue && r("update:modelValue", m), p(m);
    }
    function C(B) {
      v(B.target.value);
    }
    function h(B) {
      v(B.target.value);
    }
    function k() {
      v(i.value?.value ?? "");
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
    }), ln(() => {
      S !== void 0 && window.clearInterval(S);
    }), (B, m) => (t(), n("div", Lc, [
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
        onChange: h,
        onAnimationstart: M,
        onFocus: m[0] || (m[0] = (b) => s.value = !0),
        onBlur: m[1] || (m[1] = (b) => s.value = !1)
      }, null, 40, jc),
      (t(!0), n(z, null, j(u.value, (b, w) => (t(), n("div", {
        key: w,
        "data-slot": "input-otp-slot",
        "data-active": s.value && w === f.value,
        class: "data-[active=true]:border-ring data-[active=true]:ring-ring/50 border-input dark:bg-input/30 relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]"
      }, [
        N(c(b) + " ", 1),
        s.value && w === f.value && b === "" ? (t(), n("div", Tc, [...m[2] || (m[2] = [
          o("div", { class: "bg-foreground h-4 w-px animate-pulse duration-1000" }, null, -1)
        ])])) : $("", !0)
      ], 8, Vc))), 128))
    ]));
  }
}), e3 = /* @__PURE__ */ wt(Dc, [["__scopeId", "data-v-560616ac"]]), Ec = {
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
      class: A(e.variant === "small" ? "" : "mb-8 space-y-0.5")
    }, [
      o("h2", {
        class: A(
          e.variant === "small" ? "mb-0.5 text-base font-medium" : "text-xl font-semibold tracking-tight"
        )
      }, c(e.title), 3),
      e.description ? (t(), n("p", Ec, c(e.description), 1)) : $("", !0)
    ], 2));
  }
}), Ic = {
  "data-slot": "page-header",
  class: "flex flex-wrap items-start justify-between gap-3"
}, Fc = { class: "min-w-0 space-y-1" }, Nc = { class: "flex flex-wrap items-center gap-2.5" }, Rc = { class: "text-2xl font-semibold tracking-tight" }, Uc = {
  key: 0,
  class: "flex items-center gap-2"
}, Hc = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Kc = {
  key: 0,
  class: "flex shrink-0 flex-wrap items-center gap-2"
}, t3 = /* @__PURE__ */ O({
  __name: "PkPageHeader",
  props: {
    title: {},
    purpose: {}
  },
  setup(e) {
    return (l, a) => (t(), n("header", Ic, [
      o("div", Fc, [
        o("div", Nc, [
          o("h1", Rc, c(e.title), 1),
          l.$slots.status ? (t(), n("div", Uc, [
            U(l.$slots, "status")
          ])) : $("", !0)
        ]),
        e.purpose ? (t(), n("p", Hc, c(e.purpose), 1)) : $("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Kc, [
        U(l.$slots, "actions")
      ])) : $("", !0)
    ]));
  }
}), qc = /* @__PURE__ */ O({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert",
      class: A(y(Q)(y(Zc)({ variant: e.variant }), l.class)),
      role: "alert"
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Gc = /* @__PURE__ */ O({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-description",
      class: A(y(Q)("col-start-2 text-sm font-normal text-muted-foreground [&_p]:leading-relaxed", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Wc = /* @__PURE__ */ O({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "alert-title",
      class: A(y(Q)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Zc = Gt(
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
), Jc = { class: "list-inside list-disc text-sm" }, a3 = /* @__PURE__ */ O({
  __name: "PkAlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(e) {
    const l = e, a = x(() => Array.from(new Set(l.errors)));
    return (r, s) => (t(), T(y(qc), { variant: "destructive" }, {
      default: L(() => [
        D(y(Zn), { class: "size-4" }),
        D(y(Wc), null, {
          default: L(() => [
            N(c(e.title), 1)
          ]),
          _: 1
        }),
        D(y(Gc), null, {
          default: L(() => [
            o("ul", Jc, [
              (t(!0), n(z, null, j(a.value, (i, d) => (t(), n("li", { key: d }, c(i), 1))), 128))
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ua = /* @__PURE__ */ O({
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
      "onUpdate:modelValue": d[0] || (d[0] = (u) => on(s) ? s.value = u : null),
      "data-slot": "input",
      class: A(
        y(Q)(
          "file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          y(Re),
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          a.class
        )
      )
    }, null, 2)), [
      [Ae, y(s)]
    ]);
  }
}), Yc = { class: "relative" }, Xc = ["aria-label"], n3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PkPasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e, { expose: l }) {
    const a = e, r = R(!1), s = sn("inputRef");
    return l({
      $el: s,
      focus: () => s.value?.$el?.focus()
    }), (i, d) => (t(), n("div", Yc, [
      D(y(Ua), re({
        ref_key: "inputRef",
        ref: s,
        type: r.value ? "text" : "password",
        class: y(Q)("pr-10", a.class)
      }, i.$attrs), null, 16, ["type", "class"]),
      o("button", {
        type: "button",
        class: A(
          y(Q)(
            "text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 focus-visible:ring-[3px] focus-visible:outline-none"
          )
        ),
        "aria-label": r.value ? "Hide password" : "Show password",
        tabindex: -1,
        onClick: d[0] || (d[0] = (u) => r.value = !r.value)
      }, [
        r.value ? (t(), T(y(Jn), {
          key: 0,
          class: "size-4"
        })) : (t(), T(y(Yn), {
          key: 1,
          class: "size-4"
        }))
      ], 10, Xc)
    ]));
  }
}), Ha = "@container min-w-0", Qc = "grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3", l3 = "grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3", ef = "grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3";
function o3(e, l) {
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
function fa(e, l) {
  return `${e}:${l}`;
}
function s3(e) {
  const l = /^(stat|chart|table):([a-z0-9_-]+)$/i.exec(e);
  return l ? {
    kind: l[1].toLowerCase(),
    key: l[2]
  } : null;
}
function Et(e, l = 1) {
  return (e ?? l) >= 2 ? 2 : 1;
}
function r3(e, l, a, r) {
  const s = [
    { kind: "stat", items: e },
    { kind: "chart", items: l },
    { kind: "table", items: a }
  ], i = /* @__PURE__ */ new Map();
  for (const f of s)
    for (const g of f.items)
      i.set(fa(f.kind, g.key), {
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
      span: Et(f.span),
      hidden: !!f.hidden,
      source: p.source
    }));
  }
  for (const f of s)
    for (const g of f.items) {
      const p = fa(f.kind, g.key);
      u.has(p) || d.push({
        id: p,
        kind: f.kind,
        key: g.key,
        span: Et(g.span),
        hidden: !1,
        source: g
      });
    }
  return d;
}
function i3(e) {
  return {
    widgets: e.map((l) => ({
      id: l.id.toLowerCase(),
      span: Et(l.span),
      hidden: !!l.hidden
    }))
  };
}
const Ka = "Upload a PNG with a transparent background so it sits on invoices and contracts without a white box.", tf = "This image has no transparent background. Upload a PNG (or WebP) with alpha so it sits on invoices and contracts without a white box.", af = "JPEG files are fully opaque and stamp a white rectangle. Upload a PNG with a transparent background.";
function nf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/jpeg" || a === "image/jpg" || l.endsWith(".jpg") || l.endsWith(".jpeg");
}
function lf(e) {
  const l = e.name.toLowerCase(), a = e.type.toLowerCase();
  return a === "image/png" || a === "image/webp" || l.endsWith(".png") || l.endsWith(".webp");
}
async function of(e) {
  const l = URL.createObjectURL(e);
  try {
    const a = await sf(l), r = document.createElement("canvas"), s = Math.max(1, a.naturalWidth), i = Math.max(1, a.naturalHeight);
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
function sf(e) {
  return new Promise((l, a) => {
    const r = new Image();
    r.onload = () => l(r), r.onerror = () => a(new Error("Could not read that image.")), r.src = e;
  });
}
async function rf(e) {
  if (nf(e))
    throw new Error(af);
  if (!lf(e))
    throw new Error(Ka);
  if (!await of(e))
    throw new Error(tf);
}
const d3 = /* @__PURE__ */ O({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(et), re({ "data-slot": "sheet-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), df = /* @__PURE__ */ O({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(wa), re({
      "data-slot": "sheet-description",
      class: y(Q)("text-sm text-muted-foreground font-normal", l.class)
    }, y(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), u3 = /* @__PURE__ */ O({
  __name: "SheetFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-footer",
      class: A(y(Q)("mt-auto flex flex-col gap-2 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), uf = /* @__PURE__ */ O({
  __name: "SheetHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sheet-header",
      class: A(y(Q)("flex flex-col gap-1.5 p-4", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), cf = /* @__PURE__ */ O({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(Ca), re({
      "data-slot": "sheet-title",
      class: y(Q)("text-foreground font-semibold", l.class)
    }, y(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), c3 = /* @__PURE__ */ O({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Sa), re({ "data-slot": "sheet-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ma = "sidebar_state", ff = 3600 * 24 * 7, mf = "16rem", pf = "18rem", vf = "3rem", gf = "b", [Ct, hf] = gn("Sidebar"), bf = { class: "flex h-full w-full flex-col" }, yf = ["data-state", "data-collapsible", "data-variant", "data-side"], xf = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, f3 = /* @__PURE__ */ O({
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
      class: y(Q)(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        l.class
      )
    }, d.$attrs), [
      U(d.$slots, "default")
    ], 16)) : y(a) ? (t(), T(y(Zt), re({
      key: 1,
      open: y(s)
    }, d.$attrs, { "onUpdate:open": y(i) }), {
      default: L(() => [
        D(y(Jt), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          "data-state": "expanded",
          "data-collapsible": "",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) max-w-none min-w-[16rem] p-0 sm:max-w-none [&>button]:hidden",
          style: se({
            "--sidebar-width": y(pf)
          })
        }, {
          default: L(() => [
            D(uf, { class: "sr-only" }, {
              default: L(() => [
                D(cf, null, {
                  default: L(() => [...u[0] || (u[0] = [
                    N("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                D(df, null, {
                  default: L(() => [...u[1] || (u[1] = [
                    N("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            o("div", bf, [
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
      "data-state": y(r),
      "data-collapsible": y(r) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      o("div", {
        class: A(
          y(Q)(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
          )
        )
      }, null, 2),
      o("div", re({
        class: y(Q)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          l.class
        )
      }, d.$attrs), [
        o("div", xf, [
          U(d.$slots, "default")
        ])
      ], 16)
    ], 8, yf));
  }
}), m3 = /* @__PURE__ */ O({
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
        y(Q)(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), p3 = /* @__PURE__ */ O({
  __name: "SidebarFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: A(y(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), v3 = /* @__PURE__ */ O({
  __name: "SidebarGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: A(y(Q)("relative flex w-full min-w-0 flex-col p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), g3 = /* @__PURE__ */ O({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(tt), {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        y(Q)(
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
}), h3 = /* @__PURE__ */ O({
  __name: "SidebarGroupContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      class: A(y(Q)("w-full text-sm", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), b3 = /* @__PURE__ */ O({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(tt), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: A(
        y(Q)(
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
}), y3 = /* @__PURE__ */ O({
  __name: "SidebarHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: A(y(Q)("flex flex-col gap-2 p-2", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), x3 = /* @__PURE__ */ O({
  __name: "SidebarInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Ua), {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      class: A(y(Q)("bg-background h-8 w-full shadow-none", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), k3 = /* @__PURE__ */ O({
  __name: "SidebarInset",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("main", {
      "data-slot": "sidebar-inset",
      class: A(
        y(Q)(
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
}), $3 = /* @__PURE__ */ O({
  __name: "SidebarMenu",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: A(y(Q)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), w3 = /* @__PURE__ */ O({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(tt), {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      class: A(
        y(Q)(
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
}), C3 = /* @__PURE__ */ O({
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
        y(Q)(
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
}), kf = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(y(hn), re({ "data-slot": "tooltip" }, y(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), $f = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(bn), null, {
      default: L(() => [
        D(y(yn), re({ "data-slot": "tooltip-content" }, { ...y(i), ...d.$attrs }, {
          class: y(Q)(
            "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            D(y(xn), { class: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), S3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(y(Ma), Oe(Fe(l)), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wf = /* @__PURE__ */ O({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(kn), re({ "data-slot": "tooltip-trigger" }, l), {
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
    return (a, r) => (t(), T(y(tt), re({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: y(Q)(y(Sf)({ variant: e.variant, size: e.size }), l.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), M3 = /* @__PURE__ */ O({
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
    return (i, d) => e.tooltip ? (t(), T(y(kf), { key: 1 }, {
      default: L(() => [
        D(y(wf), { "as-child": "" }, {
          default: L(() => [
            D(pa, Oe(Fe({ ...y(s), ...i.$attrs })), {
              default: L(() => [
                U(i.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        D(y($f), {
          side: "right",
          align: "center",
          hidden: y(r) !== "collapsed" || y(a)
        }, {
          default: L(() => [
            typeof e.tooltip == "string" ? (t(), n(z, { key: 0 }, [
              N(c(e.tooltip), 1)
            ], 64)) : (t(), T(_e(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (t(), T(pa, Oe(re({ key: 0 }, { ...y(s), ...i.$attrs })), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "SidebarMenuItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: A(y(Q)("group/menu-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), va = "animate-pulse rounded-md bg-primary/10", _3 = /* @__PURE__ */ O({
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
      class: A(y(Q)("flex h-8 items-center gap-2 rounded-md px-2", l.class))
    }, [
      e.showIcon ? (t(), n("div", {
        key: 0,
        class: A(y(Q)(va, "size-4")),
        "data-sidebar": "menu-skeleton-icon"
      }, null, 2)) : $("", !0),
      o("div", {
        class: A(y(Q)(va, "h-4 max-w-(--skeleton-width) flex-1")),
        "data-sidebar": "menu-skeleton-text",
        style: se({ "--skeleton-width": a.value })
      }, null, 6)
    ], 2));
  }
}), A3 = /* @__PURE__ */ O({
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
        y(Q)(
          "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), P3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(y(tt), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: A(
        y(Q)(
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
}), z3 = /* @__PURE__ */ O({
  __name: "SidebarMenuSubItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: A(y(Q)("group/menu-sub-item relative", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), O3 = /* @__PURE__ */ O({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !sl?.cookie.includes(`${ma}=false`) },
    open: { type: Boolean, default: void 0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = ll("(max-width: 767px)"), i = R(!1), d = Pa(a, "open", r, {
      defaultValue: a.defaultOpen ?? !1,
      passive: a.open === void 0
    });
    function u(v) {
      d.value = v, document.cookie = `${ma}=${d.value}; path=/; max-age=${ff}`;
    }
    function f(v) {
      i.value = v;
    }
    function g() {
      return s.value ? f(!i.value) : u(!d.value);
    }
    ol("keydown", (v) => {
      v.key === gf && (v.metaKey || v.ctrlKey) && (v.preventDefault(), g());
    });
    const p = x(
      () => s.value || d.value ? "expanded" : "collapsed"
    );
    return hf({
      state: p,
      open: d,
      setOpen: u,
      isMobile: s,
      openMobile: i,
      setOpenMobile: f,
      toggleSidebar: g
    }), (v, C) => (t(), T(y(Ma), { "delay-duration": 0 }, {
      default: L(() => [
        o("div", re({
          "data-slot": "sidebar-wrapper",
          style: {
            "--sidebar-width": y(mf),
            "--sidebar-width-icon": y(vf)
          },
          class: y(Q)(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh min-h-svh w-full overflow-hidden",
            a.class
          )
        }, v.$attrs), [
          U(v.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
}), L3 = /* @__PURE__ */ O({
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
      class: A(
        y(Q)(
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
      (...i) => y(a) && y(a)(...i))
    }, [
      U(r.$slots, "default")
    ], 2));
  }
}), Cf = /* @__PURE__ */ O({
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
    return (r, s) => (t(), T(y($n), re({ "data-slot": "separator" }, y(a), {
      class: y(Q)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        l.class
      )
    }), null, 16, ["class"]));
  }
}), j3 = /* @__PURE__ */ O({
  __name: "SidebarSeparator",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Cf), {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      class: A(y(Q)("bg-sidebar-border mx-2 w-auto", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), V3 = /* @__PURE__ */ O({
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
      class: A(y(Q)("h-7 w-7", l.class)),
      onClick: y(s)
    }, {
      default: L(() => [
        y(a) || y(r) === "collapsed" ? (t(), T(y(Xn), { key: 0 })) : (t(), T(y(Qn), { key: 1 })),
        d[0] || (d[0] = o("span", { class: "sr-only" }, "Toggle sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
}), Sf = Gt(
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
), T3 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(y(wn), re({ "data-slot": "dropdown-menu" }, y(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), Mf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, D3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Cn), re({ "data-slot": "dropdown-menu-checkbox-item" }, y(i), {
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Mf, [
          D(y(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(y(_a), { class: "size-4" })
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
}), E3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Sn), null, {
      default: L(() => [
        D(y(Mn), re({ "data-slot": "dropdown-menu-content" }, { ...d.$attrs, ...y(i) }, {
          class: y(Q)(
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
}), I3 = /* @__PURE__ */ O({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Bn), re({ "data-slot": "dropdown-menu-group" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), F3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(y(_n), re({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, y(r), {
      class: y(Q)(
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
}), N3 = /* @__PURE__ */ O({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean }
  },
  setup(e) {
    const l = e, a = fe(l, "class", "inset"), r = Le(a);
    return (s, i) => (t(), T(y(An), re({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, y(r), {
      class: y(Q)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), R3 = /* @__PURE__ */ O({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(y(Pn), re({ "data-slot": "dropdown-menu-radio-group" }, y(s)), {
      default: L(() => [
        U(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bf = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, U3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(zn), re({ "data-slot": "dropdown-menu-radio-item" }, y(i), {
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: L(() => [
        o("span", Bf, [
          D(y(Ba), null, {
            default: L(() => [
              U(d.$slots, "indicator-icon", {}, () => [
                D(y(el), { class: "size-2 fill-current" })
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
}), H3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(On), re({ "data-slot": "dropdown-menu-separator" }, y(a), {
      class: y(Q)("bg-border -mx-1 my-1 h-px", l.class)
    }), null, 16, ["class"]));
  }
}), K3 = /* @__PURE__ */ O({
  __name: "DropdownMenuShortcut",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("span", {
      "data-slot": "dropdown-menu-shortcut",
      class: A(y(Q)("text-muted-foreground ml-auto text-xs tracking-widest", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), q3 = /* @__PURE__ */ O({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: l }) {
    const s = be(e, l);
    return (i, d) => (t(), T(y(Ln), re({ "data-slot": "dropdown-menu-sub" }, y(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), G3 = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(jn), re({ "data-slot": "dropdown-menu-sub-content" }, y(i), {
      class: y(Q)(
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
}), W3 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), T(y(Vn), re({ "data-slot": "dropdown-menu-sub-trigger" }, y(r), {
      "data-inset": e.inset ? "" : void 0,
      class: y(Q)(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground",
        l.class
      )
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(y(Aa), { class: "ml-auto size-4" })
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Z3 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Le(e);
    return (r, s) => (t(), T(y(Tn), re({ "data-slot": "dropdown-menu-trigger" }, y(a)), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), J3 = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Dn), {
      "data-slot": "avatar",
      class: A(y(Q)("relative flex size-8 shrink-0 overflow-hidden rounded-full", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Y3 = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(En), re({ "data-slot": "avatar-fallback" }, y(a), {
      class: y(Q)("bg-muted flex size-full items-center justify-center rounded-full", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), X3 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(y(In), re({ "data-slot": "avatar-image" }, l, { class: "aspect-square size-full" }), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q3 = /* @__PURE__ */ O({
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
      U(a.$slots, "default")
    ], 2));
  }
}), eC = /* @__PURE__ */ O({
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
      class: A(y(Q)("flex size-9 items-center justify-center", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(y(tl), { class: "size-4" })
      ]),
      r[0] || (r[0] = o("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
}), tC = /* @__PURE__ */ O({
  __name: "BreadcrumbItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("li", {
      "data-slot": "breadcrumb-item",
      class: A(y(Q)("inline-flex items-center gap-1.5", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), aC = /* @__PURE__ */ O({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(tt), {
      "data-slot": "breadcrumb-link",
      as: e.as,
      "as-child": e.asChild,
      class: A(y(Q)("hover:text-foreground transition-colors", l.class))
    }, {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), nC = /* @__PURE__ */ O({
  __name: "BreadcrumbList",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("ol", {
      "data-slot": "breadcrumb-list",
      class: A(
        y(Q)(
          "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), lC = /* @__PURE__ */ O({
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
      class: A(y(Q)("text-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), oC = /* @__PURE__ */ O({
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
      class: A(y(Q)("[&>svg]:size-3.5", l.class))
    }, [
      U(a.$slots, "default", {}, () => [
        D(y(Aa))
      ])
    ], 2));
  }
}), _f = { class: "absolute top-full left-0 isolate z-50 flex justify-center" }, Af = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", _f, [
      D(y(Fn), re({ "data-slot": "navigation-menu-viewport" }, y(r), {
        class: y(Q)(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--reka-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--reka-navigation-menu-viewport-width)] left-[var(--reka-navigation-menu-viewport-left)]",
          l.class
        )
      }), null, 16, ["class"])
    ]));
  }
}), sC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Nn), re({
      "data-slot": "navigation-menu",
      "data-viewport": e.viewport
    }, y(i), {
      class: y(Q)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        a.class
      )
    }), {
      default: L((f) => [
        U(d.$slots, "default", Oe(Fe(f))),
        e.viewport ? (t(), T(Af, { key: 0 })) : $("", !0)
      ]),
      _: 3
    }, 16, ["data-viewport", "class"]));
  }
}), rC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Rn), re({ "data-slot": "navigation-menu-content" }, y(i), {
      class: y(Q)(
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
}), iC = /* @__PURE__ */ O({
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(y(Un), re({ "data-slot": "navigation-menu-indicator" }, y(r), {
      class: y(Q)(
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
}), dC = /* @__PURE__ */ O({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(Hn), re({ "data-slot": "navigation-menu-item" }, y(a), {
      class: y(Q)("relative", l.class)
    }), {
      default: L(() => [
        U(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Kn), re({ "data-slot": "navigation-menu-link" }, y(i), {
      class: y(Q)(
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
}), cC = /* @__PURE__ */ O({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(y(qn), re({ "data-slot": "navigation-menu-list" }, y(r), {
      class: y(Q)("group flex flex-1 list-none items-center justify-center gap-1", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fC = /* @__PURE__ */ O({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(y(Gn), re({ "data-slot": "navigation-menu-trigger" }, y(r), {
      class: y(Q)(y(Pf)(), "group", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default"),
        D(y(al), {
          class: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pf = Gt(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
), mC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(y($a), re({ "data-slot": "dialog" }, y(s)), {
      default: L((u) => [
        U(i.$slots, "default", Oe(Fe(u)))
      ]),
      _: 3
    }, 16));
  }
}), pC = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(et), re({ "data-slot": "dialog-close" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zf = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(Ut), re({ "data-slot": "dialog-overlay" }, y(a), {
      class: y(Q)(
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
}), vC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Ht), null, {
      default: L(() => [
        D(zf),
        D(y(Kt), re({ "data-slot": "dialog-content" }, { ...d.$attrs, ...y(i) }, {
          class: y(Q)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: L(() => [
            U(d.$slots, "default"),
            e.showCloseButton ? (t(), T(y(et), {
              key: 0,
              "data-slot": "dialog-close",
              class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            }, {
              default: L(() => [
                D(y(qt)),
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
}), gC = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(y(wa), re({ "data-slot": "dialog-description" }, y(r), {
      class: y(Q)("text-sm text-muted-foreground font-normal", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hC = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-footer",
      class: A(y(Q)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l.class))
    }, [
      U(a.$slots, "default"),
      e.showCloseButton ? (t(), T(y(et), {
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
}), bC = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "dialog-header",
      class: A(y(Q)("flex flex-col gap-2 text-center sm:text-left", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), yC = /* @__PURE__ */ O({
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
    return (d, u) => (t(), T(y(Ht), null, {
      default: L(() => [
        D(y(Ut), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: L(() => [
            D(y(Kt), re({
              class: y(Q)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...d.$attrs, ...y(i) }, {
              onPointerDownOutside: u[0] || (u[0] = (f) => {
                const g = f.detail.originalEvent, p = g.target;
                (g.offsetX > p.clientWidth || g.offsetY > p.clientHeight) && f.preventDefault();
              })
            }), {
              default: L(() => [
                U(d.$slots, "default"),
                D(y(et), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: L(() => [
                    D(y(qt), { class: "w-4 h-4" }),
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
}), xC = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class"), r = Le(a);
    return (s, i) => (t(), T(y(Ca), re({ "data-slot": "dialog-title" }, y(r), {
      class: y(Q)("text-lg leading-none font-semibold", l.class)
    }), {
      default: L(() => [
        U(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kC = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(Sa), re({ "data-slot": "dialog-trigger" }, l), {
      default: L(() => [
        U(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $C = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e, a = fe(l, "class");
    return (r, s) => (t(), T(y(Wn), re({ "data-slot": "label" }, y(a), {
      class: y(Q)(
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
}), wC = /* @__PURE__ */ O({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), T(y(nl), {
      role: "status",
      "aria-label": "Loading",
      class: A(y(Q)("size-4 animate-spin", l.class))
    }, null, 8, ["class"]));
  }
}), CC = /* @__PURE__ */ O({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card",
      class: A(
        y(Q)(
          "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), SC = /* @__PURE__ */ O({
  __name: "CardAction",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-action",
      class: A(y(Q)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), MC = /* @__PURE__ */ O({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-content",
      class: A(y(Q)("px-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), BC = /* @__PURE__ */ O({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("p", {
      "data-slot": "card-description",
      class: A(y(Q)("text-sm text-muted-foreground font-normal", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), _C = /* @__PURE__ */ O({
  __name: "CardFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-footer",
      class: A(y(Q)("flex items-center px-6 [.border-t]:pt-6", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), AC = /* @__PURE__ */ O({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("div", {
      "data-slot": "card-header",
      class: A(
        y(Q)(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          l.class
        )
      )
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), PC = /* @__PURE__ */ O({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const l = e;
    return (a, r) => (t(), n("h3", {
      "data-slot": "card-title",
      class: A(y(Q)("leading-none font-semibold", l.class))
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Of = {
  key: 0,
  class: "border-destructive/30 bg-destructive/5 rounded-lg border border-dashed p-4"
}, Lf = { class: "flex items-start gap-3" }, jf = { class: "min-w-0 flex-1" }, Vf = { class: "text-foreground text-sm font-medium" }, Tf = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, zC = /* @__PURE__ */ O({
  __name: "PkBoundary",
  props: {
    label: { default: "This section" },
    silent: { type: Boolean, default: !1 },
    fill: { type: Boolean, default: !1 }
  },
  emits: ["error"],
  setup(e, { expose: l, emit: a }) {
    const r = e, s = a, i = R(!1), d = R(null), u = R(0);
    rn((g) => (console.error(`[PkBoundary] ${r.label} failed to render`, g), i.value = !0, d.value = g instanceof Error ? g.message : null, s("error", g), !1));
    function f() {
      i.value = !1, d.value = null, u.value++;
    }
    return l({ retry: f }), (g, p) => (t(), n("div", {
      class: A(e.fill ? "h-full [&>*:only-child]:h-full" : void 0)
    }, [
      i.value && !e.silent ? (t(), n("div", Of, [
        o("div", Lf, [
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
          o("div", jf, [
            o("p", Vf, c(e.label) + " could not be displayed ", 1),
            d.value ? (t(), n("p", Tf, c(d.value), 1)) : $("", !0),
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
              N(" Try again ", -1)
            ])])
          ])
        ])
      ])) : i.value ? $("", !0) : U(g.$slots, "default", { key: u.value })
    ], 2));
  }
}), Df = { class: "bg-card rounded-lg border" }, Ef = {
  key: 0,
  class: "flex items-start justify-between gap-4 border-b px-4 py-3"
}, If = { class: "min-w-0" }, Ff = {
  key: 0,
  class: "truncate text-sm font-medium"
}, Nf = {
  key: 1,
  class: "text-muted-foreground mt-0.5 text-sm"
}, Rf = {
  key: 0,
  class: "flex shrink-0 items-center gap-2"
}, Uf = {
  key: 1,
  class: "flex items-center gap-2 border-t px-4 py-3"
}, OC = /* @__PURE__ */ O({
  __name: "PkCard",
  props: {
    title: {},
    description: {},
    padded: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (l, a) => (t(), n("section", Df, [
      e.title || e.description || l.$slots.header || l.$slots.actions ? (t(), n("header", Ef, [
        o("div", If, [
          U(l.$slots, "header", {}, () => [
            e.title ? (t(), n("h2", Ff, c(e.title), 1)) : $("", !0),
            e.description ? (t(), n("p", Nf, c(e.description), 1)) : $("", !0)
          ])
        ]),
        l.$slots.actions ? (t(), n("div", Rf, [
          U(l.$slots, "actions")
        ])) : $("", !0)
      ])) : $("", !0),
      o("div", {
        class: A(e.padded ? "p-4" : "")
      }, [
        U(l.$slots, "default")
      ], 2),
      l.$slots.footer ? (t(), n("footer", Uf, [
        U(l.$slots, "footer")
      ])) : $("", !0)
    ]));
  }
}), qa = /* @__PURE__ */ Symbol("pkPageFooterFromShell");
function LC() {
  const e = za(), l = x(() => e.props.panel?.pageFooter === !0);
  return Ot(qa, l), l;
}
const Hf = {
  key: 0,
  "data-slot": "app-footer",
  class: "mt-auto shrink-0 border-t bg-background px-4 py-3 text-sm text-muted-foreground sm:px-6"
}, Kf = { class: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" }, qf = {
  key: 0,
  class: "flex flex-wrap gap-x-4 gap-y-1",
  "aria-label": "Footer"
}, jC = /* @__PURE__ */ O({
  __name: "AppPageFooter",
  props: {
    host: { type: Boolean }
  },
  setup(e) {
    const l = e, a = za(), r = (/* @__PURE__ */ new Date()).getFullYear(), s = x(() => a.props.panel?.brand || a.props.panelBrand || a.props.name || "Panel"), i = x(() => {
      const f = a.props.panel;
      return Array.isArray(f?.footerLinks) ? f.footerLinks : [];
    }), d = ht(qa, x(() => !1)), u = x(() => !l.host && y(d) === !0);
    return (f, g) => u.value ? $("", !0) : (t(), n("footer", Hf, [
      o("div", Kf, [
        o("p", null, "© " + c(y(r)) + " " + c(s.value), 1),
        i.value.length ? (t(), n("nav", qf, [
          (t(!0), n(z, null, j(i.value, (p) => (t(), T(y(dl), {
            key: p.href,
            href: p.href,
            class: "hover:text-foreground"
          }, {
            default: L(() => [
              N(c(p.label), 1)
            ]),
            _: 2
          }, 1032, ["href"]))), 128))
        ])) : $("", !0)
      ])
    ]));
  }
}), Gf = { class: "flex shrink-0 flex-col items-center" }, Wf = {
  key: 0,
  class: "absolute top-0 left-1/2 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800 dark:bg-neutral-700",
  "aria-hidden": "true"
}, VC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Gf, [
      o("div", {
        class: A(["relative box-content shadow-2xl", r.value]),
        style: se({ width: `${e.width}px`, height: `${e.height}px` })
      }, [
        e.notch && !a.value ? (t(), n("div", Wf)) : $("", !0),
        o("div", {
          class: A(["size-full overflow-hidden bg-white", s.value])
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
}), Zf = { class: "flex flex-col gap-2" }, Jf = { class: "min-w-0 flex-1" }, Yf = {
  key: 1,
  class: "grid grid-cols-1 gap-3 sm:grid-cols-2"
}, Xf = ["disabled", "aria-label", "onClick"], Qf = ["disabled", "aria-label", "onClick"], em = ["disabled", "title", "aria-label", "onClick"], tm = {
  key: 0,
  class: "text-muted-foreground rounded-md border border-dashed px-3 py-4 text-xs"
}, am = ["disabled"], TC = /* @__PURE__ */ O({
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
        const b = {};
        let w = !1;
        for (const P of a.children) {
          const I = m.data[P.key] ?? null;
          b[P.key] = I, I !== null && I !== "" && !(Array.isArray(I) && I.length === 0) && (w = !0);
        }
        w && B.push(b);
      }
      return B.length ? B : null;
    }
    function f() {
      r("update:modelValue", u());
    }
    const g = x(() => a.maxItems !== null && i.value.length >= a.maxItems), p = x(() => a.minItems !== null && i.value.length <= a.minItems), v = x(() => a.children.length === 1);
    function C() {
      if (g.value || a.disabled)
        return;
      const B = {};
      for (const m of a.children)
        B[m.key] = null;
      i.value.push({ uid: s++, data: B });
    }
    function h(B) {
      i.value = i.value.filter((m) => m.uid !== B), f();
    }
    function k(B, m) {
      const b = B + m;
      if (b < 0 || b >= i.value.length)
        return;
      const w = [...i.value], [P] = w.splice(B, 1);
      w.splice(b, 0, P), i.value = w, f();
    }
    function M(B, m, b) {
      const w = i.value.find((P) => P.uid === B);
      w && (w.data[m] = b, f());
    }
    function S(B, m) {
      return a.errors[`${a.fieldKey}.${B}.${m}`];
    }
    return (B, m) => (t(), n("div", Zf, [
      (t(!0), n(z, null, j(i.value, (b, w) => (t(), n("div", {
        key: b.uid,
        class: "flex items-start gap-2"
      }, [
        o("span", {
          class: A(["bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium tabular-nums", v.value ? "mt-1.5" : "mt-0.5"]),
          "aria-hidden": "true"
        }, c(w + 1), 3),
        o("div", Jf, [
          v.value ? (t(), T(Xe, {
            key: 0,
            field: {
              ...e.children[0],
              disabled: e.children[0].disabled || e.disabled,
              labelHidden: !0
            },
            value: b.data[e.children[0].key],
            error: S(w, e.children[0].key),
            options: e.childOptions[e.children[0].key] ?? [],
            onChange: (P) => M(b.uid, e.children[0].key, P)
          }, null, 8, ["field", "value", "error", "options", "onChange"])) : (t(), n("div", Yf, [
            (t(!0), n(z, null, j(e.children, (P) => (t(), T(Xe, {
              key: P.key,
              field: { ...P, disabled: P.disabled || e.disabled },
              value: b.data[P.key],
              error: S(w, P.key),
              options: e.childOptions[P.key] ?? [],
              onChange: (I) => M(b.uid, P.key, I)
            }, null, 8, ["field", "value", "error", "options", "onChange"]))), 128))
          ]))
        ]),
        o("div", {
          class: A(["flex shrink-0 items-center gap-0.5", v.value ? "mt-1" : "mt-0"])
        }, [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === 0,
            "aria-label": `Move ${e.itemLabel} ${w + 1} up`,
            onClick: (P) => k(w, -1)
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
          ])], 8, Xf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || w === i.value.length - 1,
            "aria-label": `Move ${e.itemLabel} ${w + 1} down`,
            onClick: (P) => k(w, 1)
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
          ])], 8, Qf),
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-destructive/10 hover:text-destructive inline-flex size-7 items-center justify-center rounded-md transition-colors disabled:pointer-events-none disabled:opacity-30",
            disabled: e.disabled || p.value,
            title: p.value ? `At least ${e.minItems} required` : void 0,
            "aria-label": `Remove ${e.itemLabel} ${w + 1}`,
            onClick: (P) => h(b.uid)
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
          ])], 8, em)
        ], 2)
      ]))), 128)),
      i.value.length === 0 ? (t(), n("p", tm, " No " + c(e.itemLabel.toLowerCase()) + "s yet. ", 1)) : $("", !0),
      g.value ? $("", !0) : (t(), n("button", {
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
        N(" Add " + c(e.itemLabel.toLowerCase()), 1)
      ], 8, am))
    ]));
  }
}), nm = { class: "space-y-1" }, lm = { class: "flex items-center gap-1" }, om = ["disabled", "title", "aria-label", "onClick"], sm = ["aria-pressed"], rm = ["id", "value", "rows", "disabled"], im = ["innerHTML"], dm = /* @__PURE__ */ O({
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
    function d(v) {
      return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    const u = x(
      () => d(i.value).replace(/^### (.*)$/gm, '<h3 class="font-semibold">$1</h3>').replace(/^## (.*)$/gm, '<h2 class="font-semibold text-lg">$1</h2>').replace(/^# (.*)$/gm, '<h1 class="font-semibold text-xl">$1</h1>').replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+?)\*/g, "$1<em>$2</em>").replace(/`([^`]+?)`/g, '<code class="bg-muted rounded px-1">$1</code>').replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" class="underline">$1</a>').replace(/^[-*] (.*)$/gm, '<li class="ml-4 list-disc">$1</li>').replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>")
    );
    function f(v, C = v) {
      const h = document.getElementById(a.id ?? "");
      if (h === null)
        return;
      const k = h.selectionStart, M = h.selectionEnd, S = i.value.slice(k, M);
      r(
        "update:modelValue",
        `${i.value.slice(0, k)}${v}${S}${C}${i.value.slice(M)}`
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
      () => (a.toolbar ?? Object.keys(g)).filter((v) => v in g)
    );
    return (v, C) => (t(), n("div", nm, [
      o("div", lm, [
        (t(!0), n(z, null, j(p.value, (h) => (t(), n("button", {
          key: h,
          type: "button",
          disabled: e.disabled,
          title: h,
          "aria-label": h,
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-50",
          onClick: (k) => g[h].run()
        }, c(g[h].label), 9, om))), 128)),
        o("button", {
          type: "button",
          class: "hover:bg-accent ml-auto rounded border px-2 py-0.5 text-xs",
          "aria-pressed": s.value,
          onClick: C[0] || (C[0] = (h) => s.value = !s.value)
        }, " Preview ", 8, sm)
      ]),
      s.value ? (t(), n("div", {
        key: 1,
        class: "bg-card min-h-32 rounded-md border px-3 py-2 text-sm",
        innerHTML: u.value
      }, null, 8, im)) : (t(), n("textarea", {
        key: 0,
        id: e.id,
        value: i.value,
        rows: e.rows,
        disabled: e.disabled,
        class: "bg-card w-full resize-y rounded-md border px-3 py-2 font-mono text-sm outline-none",
        onInput: C[1] || (C[1] = (h) => r("update:modelValue", h.target.value))
      }, null, 40, rm))
    ]));
  }
}), um = { class: "space-y-1" }, cm = { class: "bg-card flex overflow-hidden rounded-md border font-mono text-xs" }, fm = {
  "aria-hidden": "true",
  class: "text-muted-foreground bg-muted/40 shrink-0 border-r px-2 py-2 text-right leading-5 select-none"
}, mm = ["id", "value", "rows", "disabled"], pm = { class: "text-muted-foreground text-xs font-normal" }, vm = {
  key: 0,
  class: "text-destructive text-xs"
}, gm = /* @__PURE__ */ O({
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
      } catch (v) {
        return v instanceof Error ? v.message : "Not valid JSON.";
      }
    });
    function g(v) {
      r("update:modelValue", v.target.value);
    }
    function p(v) {
      if (v.key === "Escape") {
        i.value = !1;
        return;
      }
      if (v.key !== "Tab" && (i.value = !0), v.key !== "Tab" || !i.value)
        return;
      v.preventDefault();
      const C = v.target, h = C.selectionStart, k = C.selectionEnd, M = `${d.value.slice(0, h)}    ${d.value.slice(k)}`;
      r("update:modelValue", M), requestAnimationFrame(() => {
        C.selectionStart = C.selectionEnd = h + 4;
      });
    }
    return (v, C) => (t(), n("div", um, [
      o("div", cm, [
        o("div", fm, [
          (t(!0), n(z, null, j(u.value, (h) => (t(), n("div", { key: h }, c(h), 1))), 128))
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
        }, null, 40, mm)
      ]),
      o("p", pm, c(e.language === "plain" ? "Plain text" : e.language.toUpperCase()) + ". Tab indents; press Escape first to move focus out. ", 1),
      f.value ? (t(), n("p", vm, c(f.value), 1)) : $("", !0)
    ]));
  }
}), hm = { class: "space-y-3" }, bm = { class: "flex items-center justify-between gap-2 border-b px-3 py-2" }, ym = { class: "text-sm font-medium" }, xm = { class: "flex items-center gap-1" }, km = ["disabled", "onClick"], $m = ["disabled", "onClick"], wm = ["disabled", "onClick"], Cm = { class: "space-y-3 p-3" }, Sm = { class: "flex flex-wrap items-center gap-2" }, Mm = ["disabled", "onClick"], Bm = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, DC = /* @__PURE__ */ O({
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
      () => Object.fromEntries(a.blocks.map((C) => [C.type, C]))
    ), d = x(() => a.maxBlocks !== null && s.value.length >= a.maxBlocks);
    function u(C) {
      r("update:modelValue", C);
    }
    function f(C) {
      d.value || u([...s.value, { type: C, data: {} }]);
    }
    function g(C) {
      u(s.value.filter((h, k) => k !== C));
    }
    function p(C, h) {
      const k = C + h;
      if (k < 0 || k >= s.value.length)
        return;
      const M = [...s.value], [S] = M.splice(C, 1);
      M.splice(k, 0, S), u(M);
    }
    function v(C, h, k) {
      u(
        s.value.map(
          (M, S) => S === C ? { ...M, data: { ...M.data, [h]: k } } : M
        )
      );
    }
    return (C, h) => (t(), n("div", hm, [
      (t(!0), n(z, null, j(s.value, (k, M) => (t(), n("div", {
        key: `${k.type}-${M}`,
        class: "bg-card rounded-lg border"
      }, [
        o("div", bm, [
          o("span", ym, c(i.value[k.type]?.label ?? k.type), 1),
          o("div", xm, [
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === 0,
              "aria-label": "Move up",
              onClick: (S) => p(M, -1)
            }, " ↑ ", 8, km),
            o("button", {
              type: "button",
              class: "hover:bg-accent rounded border px-2 py-0.5 text-xs disabled:opacity-40",
              disabled: e.disabled || M === s.value.length - 1,
              "aria-label": "Move down",
              onClick: (S) => p(M, 1)
            }, " ↓ ", 8, $m),
            o("button", {
              type: "button",
              class: "text-destructive hover:bg-accent rounded border px-2 py-0.5 text-xs",
              disabled: e.disabled,
              "aria-label": "Remove block",
              onClick: (S) => g(M)
            }, " Remove ", 8, wm)
          ])
        ]),
        o("div", Cm, [
          (t(!0), n(z, null, j(i.value[k.type]?.fields ?? [], (S) => (t(), T(Xe, {
            key: S.key,
            field: S,
            value: k.data[S.key] ?? null,
            error: e.errors?.[S.key],
            processing: e.disabled,
            onChange: (B) => v(M, S.key, B)
          }, null, 8, ["field", "value", "error", "processing", "onChange"]))), 128))
        ])
      ]))), 128)),
      o("div", Sm, [
        (t(!0), n(z, null, j(e.blocks, (k) => (t(), n("button", {
          key: k.type,
          type: "button",
          class: "hover:bg-accent rounded-md border px-2.5 py-1 text-sm disabled:opacity-50",
          disabled: e.disabled || d.value,
          onClick: (M) => f(k.type)
        }, " + " + c(k.label), 9, Mm))), 128)),
        d.value ? (t(), n("span", Bm, c(e.maxBlocks) + " is the maximum here. ", 1)) : $("", !0)
      ])
    ]));
  }
}), _m = ["name", "value", "checked", "disabled", "onChange"], Am = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Pm = /* @__PURE__ */ O({
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
        }, null, 40, _m),
        N(" " + c(u.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Am, " Nothing to choose from yet. ")) : $("", !0)
    ], 2));
  }
}), zm = ["value", "checked", "disabled", "onChange"], Om = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, Lm = /* @__PURE__ */ O({
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
        class: A(["flex items-center gap-2 text-sm", e.disabled ? "opacity-50" : "cursor-pointer"])
      }, [
        o("input", {
          type: "checkbox",
          class: "text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2",
          value: p.value,
          checked: i(p),
          disabled: e.disabled,
          onChange: (v) => d(p)
        }, null, 40, zm),
        N(" " + c(p.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Om, " Nothing to choose from yet. ")) : $("", !0)
    ], 4));
  }
}), jm = { class: "flex flex-col gap-1.5" }, Vm = ["aria-label", "onClick"], Tm = ["placeholder", "disabled", "maxlength"], Dm = {
  key: 0,
  class: "flex flex-wrap items-center gap-1.5"
}, Em = ["onClick"], Im = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, Fm = /* @__PURE__ */ O({
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
        (v) => !i.value.some((C) => C.toLowerCase() === v.toLowerCase())
      )
    );
    function f(v) {
      const C = v.trim().slice(0, a.field.maxLength ?? 40);
      if (C === "" || d.value) {
        s.value = "";
        return;
      }
      if (i.value.some((h) => h.toLowerCase() === C.toLowerCase())) {
        s.value = "";
        return;
      }
      r("update:modelValue", [...i.value, C]), s.value = "";
    }
    function g(v) {
      r(
        "update:modelValue",
        i.value.filter((C, h) => h !== v)
      );
    }
    function p(v) {
      if (v.key === "Enter" || v.key === ",") {
        v.preventDefault(), f(s.value);
        return;
      }
      v.key === "Backspace" && s.value === "" && i.value.length > 0 && g(i.value.length - 1);
    }
    return (v, C) => (t(), n("div", jm, [
      o("div", {
        class: A(["border-input bg-background flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border px-2 py-1.5", e.disabled ? "opacity-50" : ""])
      }, [
        (t(!0), n(z, null, j(i.value, (h, k) => (t(), n("span", {
          key: `${h}-${k}`,
          class: "bg-muted flex items-center gap-1 rounded px-2 py-0.5 text-xs"
        }, [
          N(c(h) + " ", 1),
          e.disabled ? $("", !0) : (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground",
            "aria-label": `Remove ${h}`,
            onClick: (M) => g(k)
          }, " × ", 8, Vm))
        ]))), 128)),
        pe(o("input", {
          "onUpdate:modelValue": C[0] || (C[0] = (h) => s.value = h),
          type: "text",
          class: "min-w-24 flex-1 bg-transparent text-sm outline-none",
          placeholder: d.value ? "" : e.field.placeholder ?? "Add a tag…",
          disabled: e.disabled || d.value,
          maxlength: e.field.maxLength ?? 40,
          onKeydown: p,
          onBlur: C[1] || (C[1] = (h) => f(s.value))
        }, null, 40, Tm), [
          [Ae, s.value]
        ])
      ], 2),
      u.value.length > 0 && !d.value && !e.disabled ? (t(), n("div", Dm, [
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "Suggestions:", -1)),
        (t(!0), n(z, null, j(u.value, (h) => (t(), n("button", {
          key: h,
          type: "button",
          class: "hover:bg-accent rounded border px-2 py-0.5 text-xs",
          onClick: (k) => f(h)
        }, c(h), 9, Em))), 128))
      ])) : $("", !0),
      d.value ? (t(), n("p", Im, " That is the maximum of " + c(e.field.max ?? 25) + " tags. ", 1)) : $("", !0)
    ]));
  }
}), Nm = 4.5, ga = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
function Ga(e) {
  let l = e.replace("#", "");
  return l.length === 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), [parseInt(l.slice(0, 2), 16), parseInt(l.slice(2, 4), 16), parseInt(l.slice(4, 6), 16)];
}
function At(e) {
  const l = e / 255;
  return l <= 0.03928 ? l / 12.92 : ((l + 0.055) / 1.055) ** 2.4;
}
function It(e) {
  const [l, a, r] = Ga(e);
  return 0.2126 * At(l) + 0.7152 * At(a) + 0.0722 * At(r);
}
function Wa(e, l) {
  const a = It(e), r = It(l);
  return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
}
function Rm(e, l, a) {
  if (!ga.test(e) || !ga.test(l))
    return e;
  const r = It(l) > 0.5, s = r ? 0 : 255;
  let i = Ga(e);
  for (let d = 0; d <= 20; d++) {
    const u = Um(i);
    if (Wa(u, l) >= a)
      return u;
    i = i.map((f) => f + (s - f) * 0.15);
  }
  return r ? "#000000" : "#ffffff";
}
function Um(e) {
  return "#" + e.map(
    (l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")
  ).join("");
}
const Hm = { class: "flex flex-col gap-2" }, Km = { class: "flex items-center gap-2" }, qm = {
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
}, Gm = ["value", "disabled", "aria-label"], Wm = ["value", "disabled", "placeholder"], Zm = {
  key: 0,
  class: "flex flex-wrap gap-1.5"
}, Jm = ["aria-label", "title", "onClick"], Ym = {
  key: 1,
  class: "text-amber-600 dark:text-amber-500 flex flex-wrap items-center gap-2 text-xs"
}, Xm = /* @__PURE__ */ O({
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
    function u(h) {
      const k = h.trim();
      if (k === "")
        return "";
      const M = k.startsWith("#") ? k : `#${k}`;
      return s.test(M) ? M.toLowerCase() : k;
    }
    function f(h) {
      r("update:modelValue", u(h.target.value));
    }
    const g = x(() => !d.value || !a.field.contrastBackground || !s.test(a.field.contrastBackground) ? null : Wa(i.value, a.field.contrastBackground)), p = x(() => a.field.contrastMinRatio ?? Nm), v = x(() => g.value !== null && g.value < p.value);
    function C() {
      a.field.contrastBackground && r(
        "update:modelValue",
        Rm(i.value, a.field.contrastBackground, p.value)
      );
    }
    return (h, k) => (t(), n("div", Hm, [
      o("div", Km, [
        d.value ? (t(), n("input", {
          key: 1,
          type: "color",
          class: "border-input size-9 shrink-0 cursor-pointer rounded-md border bg-transparent",
          value: i.value,
          disabled: e.disabled,
          "aria-label": `Colour for ${e.field.key}`,
          onInput: k[0] || (k[0] = (M) => r("update:modelValue", M.target.value))
        }, null, 40, Gm)) : (t(), n("span", qm)),
        o("input", {
          type: "text",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          value: i.value,
          disabled: e.disabled,
          placeholder: e.field.placeholder ?? "#1e90ff",
          spellcheck: "false",
          onInput: f
        }, null, 40, Wm)
      ]),
      (e.field.presets ?? []).length > 0 && !e.disabled ? (t(), n("div", Zm, [
        (t(!0), n(z, null, j(e.field.presets, (M) => (t(), n("button", {
          key: M,
          type: "button",
          class: A(["size-6 rounded border", i.value.toLowerCase() === M.toLowerCase() ? "ring-ring ring-2" : ""]),
          style: se({ backgroundColor: M }),
          "aria-label": M,
          title: M,
          onClick: (S) => r("update:modelValue", M.toLowerCase())
        }, null, 14, Jm))), 128))
      ])) : $("", !0),
      v.value ? (t(), n("p", Ym, [
        o("span", null, " This fails contrast at " + c(g.value.toFixed(1)) + ":1 - it needs at least " + c(p.value.toFixed(1)) + ":1 to stay readable. ", 1),
        e.disabled ? $("", !0) : (t(), n("button", {
          key: 0,
          type: "button",
          class: "font-medium underline underline-offset-2",
          onClick: C
        }, " Use a readable shade "))
      ])) : $("", !0)
    ]));
  }
}), Qm = ["aria-disabled"], ep = /* @__PURE__ */ O({
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
      const C = a.modelValue?.[a.latKey], h = a.modelValue?.[a.lngKey];
      return typeof C == "number" && typeof h == "number" ? { lat: C, lng: h } : a.center ? a.center : a.markers.length > 0 ? { lat: a.markers[0].lat, lng: a.markers[0].lng } : { lat: 0, lng: 0 };
    });
    async function g() {
      if (!s.value || i)
        return;
      const C = await import("leaflet");
      await import("leaflet/dist/leaflet.css"), u = C, i = C.map(s.value).setView([f.value.lat, f.value.lng], a.zoom), C.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19
      }).addTo(i), p(), v(), a.pickable && !a.disabled && i.on("click", (h) => {
        r("update:modelValue", {
          [a.latKey]: Number(h.latlng.lat.toFixed(6)),
          [a.lngKey]: Number(h.latlng.lng.toFixed(6))
        });
      });
    }
    function p() {
      if (!(!i || !u))
        for (const C of a.markers) {
          const h = u.circleMarker([C.lat, C.lng], {
            radius: 7,
            color: "hsl(var(--primary))",
            fillColor: "hsl(var(--primary))",
            fillOpacity: 0.85
          }).addTo(i);
          (C.label || C.popup) && h.bindPopup(`<strong>${C.label ?? ""}</strong>${C.popup ? `<br>${C.popup}` : ""}`);
        }
    }
    function v() {
      if (!i || !u)
        return;
      const C = a.modelValue?.[a.latKey], h = a.modelValue?.[a.lngKey];
      if (typeof C != "number" || typeof h != "number") {
        d && (i.removeLayer(d), d = null);
        return;
      }
      d ? d.setLatLng([C, h]) : d = u.circleMarker([C, h], {
        radius: 8,
        color: "#0f172a",
        fillColor: "#38bdf8",
        fillOpacity: 1,
        weight: 2
      }).addTo(i), i.setView([C, h], i.getZoom());
    }
    return ve(() => {
      g();
    }), ke(() => {
      i?.remove(), i = null, d = null;
    }), me(
      () => a.modelValue,
      () => v(),
      { deep: !0 }
    ), (C, h) => (t(), n("div", {
      ref_key: "root",
      ref: s,
      class: "border-input bg-muted/20 w-full overflow-hidden rounded-md border",
      style: se({ height: `${e.height}px` }),
      "aria-disabled": e.disabled || void 0
    }, null, 12, Qm));
  }
}), tp = { class: "flex flex-col gap-2" }, ap = { class: "text-muted-foreground text-xs font-normal" }, np = /* @__PURE__ */ O({
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
    return (u, f) => (t(), n("div", tp, [
      D(ep, {
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
      o("p", ap, [
        N(" Click the map to set " + c(i.value) + " / " + c(d.value) + " ", 1),
        s.value ? (t(), n(z, { key: 0 }, [
          N(" (" + c(s.value[i.value]?.toFixed?.(5) ?? s.value[i.value]) + ", " + c(s.value[d.value]?.toFixed?.(5) ?? s.value[d.value]) + ") ", 1)
        ], 64)) : $("", !0)
      ])
    ]));
  }
}), lp = { class: "flex flex-col gap-2" }, op = ["width", "height"], sp = ["value", "disabled"], rp = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal"
}, ip = /* @__PURE__ */ O({
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
    }), (f, g) => (t(), n("div", lp, [
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        class: "border-input bg-background rounded-md border",
        width: d.value,
        height: d.value
      }, null, 8, op),
      e.field.from ? (t(), n("p", rp, "From " + c(e.field.from), 1)) : (t(), n("input", {
        key: 0,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "QR payload",
        onInput: g[0] || (g[0] = (p) => r("update:modelValue", p.target.value))
      }, null, 40, sp))
    ]));
  }
}), dp = { class: "flex flex-col gap-2" }, up = { class: "border-input bg-background inline-flex min-h-16 items-center justify-center overflow-x-auto rounded-md border p-2" }, cp = ["aria-label"], fp = {
  key: 0,
  class: "text-destructive text-xs"
}, mp = ["value", "disabled"], pp = {
  key: 2,
  class: "text-muted-foreground text-xs font-normal"
}, vp = /* @__PURE__ */ O({
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
          const v = (await import("jsbarcode")).default;
          v(s.value, g, {
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
    }), (g, p) => (t(), n("div", dp, [
      o("div", up, [
        (t(), n("svg", {
          ref_key: "svg",
          ref: s,
          class: "max-w-full",
          role: "img",
          "aria-label": `Barcode ${u.value}`
        }, null, 8, cp))
      ]),
      i.value ? (t(), n("p", fp, c(i.value), 1)) : $("", !0),
      e.field.from ? (t(), n("p", pp, "From " + c(e.field.from) + " (" + c(u.value) + ")", 1)) : (t(), n("input", {
        key: 1,
        type: "text",
        class: "border-input bg-background h-9 rounded-md border px-3 text-sm",
        value: e.modelValue == null ? "" : String(e.modelValue),
        disabled: e.disabled,
        placeholder: "Barcode value",
        onInput: p[0] || (p[0] = (v) => r("update:modelValue", v.target.value))
      }, null, 40, mp))
    ]));
  }
}), gp = { class: "mr-2 inline-block w-3 opacity-60" }, hp = {
  key: 0,
  class: "text-muted-foreground p-3"
}, bp = /* @__PURE__ */ O({
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
        const v = d[p], C = u[p];
        if (v === C) {
          v !== void 0 && g.push({ kind: "same", text: v });
          continue;
        }
        v !== void 0 && g.push({ kind: "del", text: v }), C !== void 0 && g.push({ kind: "add", text: C });
      }
      return g;
    });
    return (d, u) => (t(), n("div", {
      class: "border-input bg-background overflow-auto rounded-md border font-mono text-xs leading-5",
      style: se({ maxHeight: `${(e.field.rows ?? 12) * 1.25}rem` })
    }, [
      (t(!0), n(z, null, j(i.value, (f, g) => (t(), n("div", {
        key: g,
        class: A(["px-2 whitespace-pre-wrap", {
          "bg-destructive/10 text-destructive": f.kind === "del",
          "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300": f.kind === "add",
          "text-muted-foreground": f.kind === "same"
        }])
      }, [
        o("span", gp, c(f.kind === "add" ? "+" : f.kind === "del" ? "-" : " "), 1),
        N(" " + c(f.text), 1)
      ], 2))), 128)),
      i.value.length === 0 ? (t(), n("p", hp, "No differences.")) : $("", !0)
    ], 4));
  }
}), yp = { class: "flex flex-col gap-3" }, xp = { class: "flex items-center justify-between gap-2" }, kp = { class: "text-sm font-medium" }, $p = { class: "text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase" }, wp = { class: "grid grid-cols-7 gap-1" }, Cp = {
  key: 0,
  class: "text-muted-foreground mb-1 text-[10px]"
}, Sp = ["title"], EC = /* @__PURE__ */ O({
  __name: "PkCalendar",
  props: {
    events: {}
  },
  setup(e) {
    const l = e, a = R(/* @__PURE__ */ new Date()), r = x(() => a.value.getFullYear()), s = x(() => a.value.getMonth()), i = x(
      () => a.value.toLocaleString(void 0, { month: "long", year: "numeric" })
    ), d = x(() => {
      const p = /* @__PURE__ */ new Map();
      for (const v of l.events ?? []) {
        const C = p.get(v.date) ?? [];
        C.push(v), p.set(v.date, C);
      }
      return p;
    }), u = x(() => {
      const v = new Date(r.value, s.value, 1).getDay(), C = new Date(r.value, s.value + 1, 0).getDate(), h = [];
      for (let k = 0; k < v; k++)
        h.push({ day: null, key: `pad-${k}`, events: [] });
      for (let k = 1; k <= C; k++) {
        const M = `${r.value}-${String(s.value + 1).padStart(2, "0")}-${String(k).padStart(2, "0")}`;
        h.push({ day: k, key: M, events: d.value.get(M) ?? [] });
      }
      return h;
    });
    function f() {
      a.value = new Date(r.value, s.value - 1, 1);
    }
    function g() {
      a.value = new Date(r.value, s.value + 1, 1);
    }
    return (p, v) => (t(), n("div", yp, [
      o("div", xp, [
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: f
        }, " Prev "),
        o("p", kp, c(i.value), 1),
        o("button", {
          type: "button",
          class: "text-muted-foreground hover:text-foreground text-sm",
          onClick: g
        }, " Next ")
      ]),
      o("div", $p, [
        (t(), n(z, null, j(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], (C) => o("span", { key: C }, c(C), 1)), 64))
      ]),
      o("div", wp, [
        (t(!0), n(z, null, j(u.value, (C) => (t(), n("div", {
          key: C.key,
          class: A(["border-border/60 min-h-16 rounded-md border p-1", C.day ? "bg-background" : "bg-transparent border-transparent"])
        }, [
          C.day ? (t(), n("p", Cp, c(C.day), 1)) : $("", !0),
          (t(!0), n(z, null, j(C.events.slice(0, 3), (h, k) => (t(), n("p", {
            key: `${C.key}-${k}`,
            class: "bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4",
            title: h.label
          }, c(h.label), 9, Sp))), 128))
        ], 2))), 128))
      ])
    ]));
  }
}), Mp = { class: "flex items-center gap-3" }, Bp = ["min", "max", "step", "value", "disabled", "aria-label"], _p = { class: "flex shrink-0 items-center gap-1" }, Ap = ["min", "max", "step", "value", "disabled"], Pp = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, zp = /* @__PURE__ */ O({
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
      const v = Number(p);
      r("update:modelValue", Number.isFinite(v) ? v : null);
    }
    return (p, v) => (t(), n("div", Mp, [
      o("input", {
        type: "range",
        class: "accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50",
        min: s.value,
        max: i.value,
        step: d.value,
        value: u.value,
        disabled: e.disabled,
        "aria-label": `${e.field.key} value`,
        onInput: v[0] || (v[0] = (C) => g(C.target.value))
      }, null, 40, Bp),
      o("div", _p, [
        o("input", {
          type: "number",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50",
          min: s.value,
          max: i.value,
          step: d.value,
          value: f.value ? "" : u.value,
          disabled: e.disabled,
          onInput: v[1] || (v[1] = (C) => g(C.target.value))
        }, null, 40, Ap),
        e.field.unit ? (t(), n("span", Pp, c(e.field.unit), 1)) : $("", !0)
      ])
    ]));
  }
}), ft = /* @__PURE__ */ new Map();
function Pt(e, l) {
  ft.set(e, l);
}
function Op(e) {
  return ft.get(e);
}
function IC(e) {
  return ft.has(e);
}
function Lp() {
  return [...ft.keys()].sort();
}
function FC() {
  ft.clear();
}
const jp = ["name", "value", "checked", "disabled", "onChange"], Vp = {
  key: 0,
  class: "flex shrink-0 scale-75 items-center",
  "aria-hidden": "true"
}, Tp = { class: "whitespace-nowrap" }, Dp = {
  key: 0,
  class: "text-muted-foreground px-2 py-1 text-xs"
}, Ep = ["name", "value", "checked", "disabled", "onChange"], Ip = {
  class: "bg-muted/40 flex h-16 items-center justify-center overflow-hidden rounded",
  "aria-hidden": "true"
}, Fp = {
  key: 1,
  class: "text-destructive px-1 text-center text-[10px] leading-tight"
}, Np = { class: "text-center text-xs font-medium" }, Rp = {
  key: 0,
  class: "text-muted-foreground col-span-full text-sm"
}, Up = {
  key: 1,
  class: "text-muted-foreground col-span-full text-xs"
}, Hp = /* @__PURE__ */ O({
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
      () => a.field.preview ? Op(a.field.preview) : void 0
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
      class: A(["bg-muted inline-flex w-fit max-w-full items-stretch gap-0.5 rounded-full p-1", e.disabled ? "opacity-50" : ""])
    }, [
      (t(!0), n(z, null, j(e.options, (v) => (t(), n("label", {
        key: String(v.value),
        class: A(["relative flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors", [
          f(v) ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          e.disabled ? "" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: v.value,
          checked: f(v),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", v.value)
        }, null, 40, jp),
        p[0] || (p[0] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-full peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        s.value ? (t(), n("span", Vp, [
          (t(), T(_e(s.value), {
            value: v.value,
            label: v.label,
            selected: f(v)
          }, null, 8, ["value", "label", "selected"]))
        ])) : $("", !0),
        o("span", Tp, c(v.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Dp, " Nothing to choose from yet. ")) : $("", !0)
    ], 2)) : (t(), n("div", {
      key: 1,
      role: "radiogroup",
      class: A(["grid gap-3", u.value])
    }, [
      (t(!0), n(z, null, j(e.options, (v) => (t(), n("label", {
        key: String(v.value),
        class: A(["group relative flex flex-col gap-2 rounded-lg border p-2 transition-colors", [
          f(v) ? "border-primary ring-primary/30 bg-primary/5 ring-2" : "border-border hover:border-muted-foreground/40",
          e.disabled ? "opacity-50" : "cursor-pointer"
        ]])
      }, [
        o("input", {
          type: "radio",
          class: "peer sr-only",
          name: `f-${e.field.key}`,
          value: v.value,
          checked: f(v),
          disabled: e.disabled,
          onChange: (C) => r("update:modelValue", v.value)
        }, null, 40, Ep),
        p[1] || (p[1] = o("span", {
          class: "ring-ring pointer-events-none absolute inset-0 rounded-lg peer-focus-visible:ring-2",
          "aria-hidden": "true"
        }, null, -1)),
        o("span", Ip, [
          s.value ? (t(), T(_e(s.value), {
            key: 0,
            value: v.value,
            label: v.label,
            selected: f(v)
          }, null, 8, ["value", "label", "selected"])) : i.value ? (t(), n("span", Fp, " no preview ")) : $("", !0)
        ]),
        o("span", Np, c(v.label), 1)
      ], 2))), 128)),
      e.options.length === 0 ? (t(), n("p", Rp, " Nothing to choose from yet. ")) : $("", !0),
      i.value && e.options.length > 0 ? (t(), n("p", Up, [
        p[2] || (p[2] = N(" No preview registered for ", -1)),
        o("code", null, c(e.field.preview), 1),
        N(". Registered: " + c(y(Lp)().join(", ") || "none") + ". ", 1)
      ])) : $("", !0)
    ], 2));
  }
}), Kp = {
  class: "border-border size-10 overflow-hidden rounded-md border",
  style: {
    backgroundImage: "linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%), linear-gradient(45deg, rgba(0,0,0,.10) 25%, transparent 25%, transparent 75%, rgba(0,0,0,.10) 75%)",
    backgroundSize: "8px 8px",
    backgroundPosition: "0 0, 4px 4px"
  }
}, qp = /* @__PURE__ */ O({
  __name: "PkSwatchPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", Kp, [
      o("span", {
        class: "block size-full",
        style: se({ backgroundColor: String(e.value) })
      }, null, 4)
    ]));
  }
}), Gp = { class: "flex flex-col items-center gap-1 text-center" }, Wp = {
  key: 0,
  class: "text-xs text-neutral-500"
}, Za = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", Gp, [
      o("div", {
        class: A(["inline-flex items-center justify-center font-mono font-semibold whitespace-nowrap tabular-nums", [
          r.value,
          e.compact ? "px-2 py-1 text-[10px]" : "px-6 py-3 text-xl tracking-[0.2em]"
        ]]),
        style: se({ borderColor: a.value, color: a.value })
      }, c(e.code), 7),
      e.caption && !e.compact ? (t(), n("p", Wp, c(e.caption), 1)) : $("", !0)
    ]));
  }
}), Zp = {
  dusk: "document",
  class: "flex flex-col gap-6 bg-white p-8 text-black"
}, Jp = { class: "flex items-center gap-3" }, Yp = ["src"], Xp = {
  key: 0,
  class: "mt-1 text-sm text-neutral-600"
}, Qp = {
  key: 1,
  class: "mt-1 font-mono text-sm text-neutral-600"
}, ev = {
  key: 0,
  class: "text-right text-sm"
}, tv = { class: "text-neutral-500" }, av = { class: "tabular-nums" }, nv = { key: 1 }, lv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, ov = { class: "mt-2 font-medium" }, sv = { key: 2 }, rv = { class: "w-full text-sm" }, iv = { class: "w-full py-3 pr-2" }, dv = {
  key: 0,
  class: "text-xs text-neutral-500"
}, uv = { key: 0 }, cv = ["colspan"], fv = {
  key: 0,
  class: "mt-6 flex break-inside-avoid justify-end"
}, mv = { class: "w-64 text-sm" }, pv = { class: "tabular-nums" }, vv = {
  key: 3,
  class: "py-2"
}, gv = { key: 4 }, hv = { class: "text-xs font-semibold tracking-wider text-neutral-500 uppercase" }, bv = { class: "mt-2 flex flex-col gap-1 text-sm" }, yv = {
  key: 6,
  class: "mt-auto border-t border-neutral-200 pt-4 text-xs text-neutral-500"
}, xv = { key: 0 }, kv = {
  key: 1,
  class: "mt-1"
}, $v = {
  key: 7,
  class: "rounded border border-dashed border-red-300 p-2 text-xs text-red-600"
}, wv = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("article", Zp, [
      o("div", Jp, [
        e.document.branding.logoUrl ? (t(), n("img", {
          key: 0,
          src: e.document.branding.logoUrl,
          alt: "",
          class: "max-h-10 max-w-40 object-contain"
        }, null, 8, Yp)) : (t(), n("p", {
          key: 1,
          class: "text-lg font-semibold",
          style: se({ color: a() })
        }, c(e.document.branding.company), 5))
      ]),
      (t(!0), n(z, null, j(e.document.blocks, (p, v) => (t(), n(z, { key: v }, [
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
            p.subtitle ? (t(), n("p", Xp, c(p.subtitle), 1)) : $("", !0),
            p.reference ? (t(), n("p", Qp, c(p.reference), 1)) : $("", !0)
          ]),
          r(p).length ? (t(), n("dl", ev, [
            (t(!0), n(z, null, j(r(p), (C, h) => (t(), n("div", {
              key: h,
              class: "flex justify-end gap-4 py-0.5"
            }, [
              o("dt", tv, c(C.label), 1),
              o("dd", av, c(C.value), 1)
            ]))), 128))
          ])) : $("", !0)
        ], 4)) : p.type === "party" ? (t(), n("section", nv, [
          o("h2", lv, c(p.heading), 1),
          o("p", ov, c(p.name), 1),
          (t(!0), n(z, null, j(d(p.lines), (C, h) => (t(), n("p", {
            key: h,
            class: "text-sm text-neutral-600"
          }, c(C), 1))), 128))
        ])) : p.type === "lines" ? (t(), n("section", sv, [
          o("table", rv, [
            o("thead", null, [
              o("tr", {
                class: "border-b-2 text-left",
                style: se({ borderColor: a() })
              }, [
                (t(!0), n(z, null, j(d(p.columns), (C, h) => (t(), n("th", {
                  key: h,
                  class: A(["pb-2 font-medium", h > 0 ? "pl-3 text-right whitespace-nowrap" : ""])
                }, c(C), 3))), 128))
              ], 4)
            ]),
            o("tbody", null, [
              (t(!0), n(z, null, j(s(p), (C, h) => (t(), n("tr", {
                key: h,
                class: "border-b border-neutral-200"
              }, [
                o("td", iv, [
                  o("p", null, c(C.description), 1),
                  C.detail ? (t(), n("p", dv, c(C.detail), 1)) : $("", !0)
                ]),
                (t(!0), n(z, null, j(C.cells, (k, M) => (t(), n("td", {
                  key: M,
                  class: "py-3 pl-3 text-right whitespace-nowrap tabular-nums"
                }, c(k), 1))), 128))
              ]))), 128)),
              s(p).length === 0 ? (t(), n("tr", uv, [
                o("td", {
                  colspan: d(p.columns).length || 1,
                  class: "py-6 text-center text-neutral-500"
                }, c(p.empty), 9, cv)
              ])) : $("", !0)
            ])
          ]),
          i(p).length ? (t(), n("div", fv, [
            o("dl", mv, [
              (t(!0), n(z, null, j(i(p), (C, h) => (t(), n("div", {
                key: h,
                class: A([
                  "flex justify-between py-1",
                  C.strong ? "mt-1 border-t-2 pt-2 text-base font-semibold" : ""
                ]),
                style: se(C.strong ? { color: a(), borderColor: a() } : void 0)
              }, [
                o("dt", {
                  class: A(C.strong ? "" : "text-neutral-600")
                }, c(C.label), 3),
                o("dd", pv, c(C.value), 1)
              ], 6))), 128))
            ])
          ])) : $("", !0)
        ])) : p.type === "code" ? (t(), n("section", vv, [
          D(Za, {
            code: u(p.code),
            caption: u(p.caption),
            style: se(u(p.style)),
            accent: e.document.branding.accent,
            mono: e.document.branding.mono
          }, null, 8, ["code", "caption", "style", "accent", "mono"])
        ])) : p.type === "steps" ? (t(), n("section", gv, [
          o("h2", hv, c(p.heading), 1),
          o("ol", bv, [
            (t(!0), n(z, null, j(d(p.items), (C, h) => (t(), n("li", {
              key: h,
              class: "flex gap-2"
            }, [
              o("span", {
                class: "font-semibold tabular-nums",
                style: se({ color: a() })
              }, c(h + 1) + ".", 5),
              o("span", null, c(C), 1)
            ]))), 128))
          ])
        ])) : p.type === "note" ? (t(), n("p", {
          key: 5,
          class: A(["text-sm", p.emphasis ? "font-medium" : "text-neutral-600"]),
          style: se(p.emphasis ? { color: a() } : void 0)
        }, c(p.text), 7)) : p.type === "footer" ? (t(), n("footer", yv, [
          p.text ? (t(), n("p", xv, c(p.text), 1)) : $("", !0),
          d(p.contacts).length ? (t(), n("p", kv, c(d(p.contacts).join(" · ")), 1)) : $("", !0)
        ])) : (t(), n("p", $v, " This document contains a “" + c(p.type) + "” block, which this version cannot draw. ", 1))
      ], 64))), 128))
    ]));
  }
}), Cv = ["aria-label", "title"], Sv = {
  class: "size-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mv = {
  key: 1,
  d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
}, NC = /* @__PURE__ */ O({
  __name: "ThemeToggle",
  setup(e) {
    const { appearance: l, set: a } = Ra(), r = x(() => l.value.theme === "dark");
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
      (t(), n("svg", Sv, [
        r.value ? (t(), n(z, { key: 0 }, [
          d[0] || (d[0] = o("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }, null, -1)),
          d[1] || (d[1] = o("path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }, null, -1))
        ], 64)) : (t(), n("path", Mv))
      ]))
    ], 8, Cv));
  }
}), Bv = ["width", "height"], _v = { key: 0 }, Av = ["x1", "x2", "y1", "y2"], Pv = ["x", "y"], zv = ["x1", "x2", "y1", "y2"], Ov = ["x", "y"], Lv = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], jv = ["x", "y", "width", "height", "fill", "fill-opacity"], Vv = ["x", "y"], Tv = ["x", "y"], Dv = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-32 rounded-lg border p-2 shadow-lg"
}, Ev = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, Iv = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, Fv = { class: "text-xs font-semibold tabular-nums" }, Nv = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, Rv = { class: "text-muted-foreground" }, ha = 5.6, RC = /* @__PURE__ */ O({
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
      const V = l.thresholds.find((J) => _ < J.max);
      return r(V ? V.color : l.aboveColor);
    }
    const i = R(null), d = R(560), u = R(null);
    let f = null;
    ve(() => {
      f = new ResizeObserver((_) => {
        d.value = Math.max(160, _[0].contentRect.width);
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
    }))), v = x(() => p.value[0]?.points.map((_) => _.label) ?? []), C = x(() => v.value.length), h = x(() => l.orientation === "horizontal"), k = x(() => Math.max(0, ...v.value.map((_) => _.length))), M = x(() => {
      if (!h.value)
        return l.showAxis ? 44 : 8;
      const _ = k.value * ha + 16;
      return Math.round(Math.min(Math.max(60, _), d.value * 0.4));
    }), S = x(() => Math.max(4, Math.floor((M.value - 16) / ha)));
    function B(_) {
      return _.length <= S.value ? _ : `${_.slice(0, S.value - 1)}…`;
    }
    const m = x(() => ({
      top: 12,
      right: 12,
      bottom: 26,
      left: M.value
    })), b = x(() => ({
      w: Math.max(1, d.value - m.value.left - m.value.right),
      h: Math.max(1, l.height - m.value.top - m.value.bottom)
    })), w = (_) => l.format ? l.format(_) : P(_);
    function P(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    const I = x(() => {
      const _ = v.value.map(
        (ge, ye) => l.stacked ? p.value.reduce((le, X) => le + Math.max(0, X.points[ye]?.value ?? 0), 0) : Math.max(...p.value.map((le) => le.points[ye]?.value ?? 0))
      );
      if (l.maxValue)
        return l.maxValue;
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }), E = x(
      () => (h.value ? b.value.h : b.value.w) / Math.max(1, C.value)
    ), te = x(() => E.value * 0.68), H = x(
      () => l.stacked || p.value.length <= 1 ? te.value : te.value / p.value.length
    ), K = x(() => {
      const _ = [], F = new Array(C.value).fill(0);
      return p.value.forEach((V, J) => {
        V.points.forEach((ge, ye) => {
          const X = Math.max(0, ge.value) / I.value * (h.value ? b.value.w : b.value.h), ne = (h.value ? m.value.top : m.value.left) + ye * E.value + (E.value - te.value) / 2, Ce = l.stacked ? 0 : J * H.value;
          _.push(
            h.value ? {
              x: m.value.left + F[ye],
              y: ne + Ce,
              w: X,
              h: Math.max(0, H.value - 2),
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: ye
            } : {
              x: ne + Ce,
              y: m.value.top + b.value.h - X - F[ye],
              w: Math.max(0, H.value - 2),
              h: X,
              color: s(ge.value, V.color),
              label: ge.label,
              name: V.name,
              value: ge.value,
              index: ye
            }
          ), l.stacked && (F[ye] += X);
        });
      }), _;
    }), G = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        value: I.value * (h.value ? _ : 1 - _),
        x: m.value.left + b.value.w * _,
        y: m.value.top + b.value.h * _
      }))
    ), oe = x(() => Math.max(1, Math.ceil(C.value / (h.value ? 14 : 10))));
    function ae(_) {
      return _ === C.value - 1 || _ % oe.value === 0;
    }
    function Z(_) {
      return (h.value ? m.value.top : m.value.left) + _ * E.value + E.value / 2;
    }
    const q = x(() => u.value === null ? null : {
      label: v.value[u.value],
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
          onMouseleave: F[0] || (F[0] = (V) => u.value = null)
        }, [
          e.showAxis ? (t(), n("g", _v, [
            h.value ? (t(), n(z, { key: 0 }, [
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("line", {
                key: `g-${V.x}`,
                x1: V.x,
                x2: V.x,
                y1: m.value.top,
                y2: m.value.top + b.value.h,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, Av))), 128)),
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("text", {
                key: `gt-${V.x}`,
                x: V.x,
                y: e.height - 6,
                "text-anchor": "middle",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(V.value)), 9, Pv))), 128))
            ], 64)) : (t(), n(z, { key: 1 }, [
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("line", {
                key: `g-${V.y}`,
                x1: m.value.left,
                x2: d.value - m.value.right,
                y1: V.y,
                y2: V.y,
                stroke: "var(--border)",
                "stroke-width": "1"
              }, null, 8, zv))), 128)),
              (t(!0), n(z, null, j(G.value, (V) => (t(), n("text", {
                key: `gt-${V.y}`,
                x: m.value.left - 8,
                y: V.y + 3,
                "text-anchor": "end",
                class: "fill-muted-foreground text-[10px] tabular-nums"
              }, c(P(V.value)), 9, Ov))), 128))
            ], 64))
          ])) : $("", !0),
          (t(!0), n(z, null, j(v.value, (V, J) => (t(), n("rect", {
            key: `hit-${J}`,
            x: h.value ? m.value.left : m.value.left + J * E.value,
            y: h.value ? m.value.top + J * E.value : m.value.top,
            width: h.value ? b.value.w : E.value,
            height: h.value ? E.value : b.value.h,
            fill: "var(--muted)",
            "fill-opacity": u.value === J ? 0.4 : 0,
            onMouseenter: (ge) => u.value = J
          }, null, 40, Lv))), 128)),
          (t(!0), n(z, null, j(K.value, (V, J) => (t(), n("rect", {
            key: `b-${J}`,
            x: V.x,
            y: V.y,
            width: V.w,
            height: V.h,
            fill: V.color,
            "fill-opacity": u.value === null || u.value === V.index ? 0.9 : 0.35,
            rx: "3",
            class: "transition-[fill-opacity]",
            "pointer-events": "none"
          }, null, 8, jv))), 128)),
          h.value ? (t(!0), n(z, { key: 1 }, j(v.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: m.value.left - 8,
            y: Z(J) + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px]"
          }, [
            N(c(B(V)) + " ", 1),
            o("title", null, c(V), 1)
          ], 8, Vv)), [
            [He, ae(J)]
          ])), 128)) : (t(!0), n(z, { key: 2 }, j(v.value, (V, J) => pe((t(), n("text", {
            key: `c-${J}`,
            x: Z(J),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(V), 9, Tv)), [
            [He, ae(J)]
          ])), 128))
        ], 40, Bv)),
        q.value ? (t(), n("div", Dv, [
          o("p", Ev, c(q.value.label), 1),
          (t(!0), n(z, null, j(q.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Iv, c(V.name || "Value"), 1),
            o("span", Fv, c(w(V.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend && p.value.length > 1 ? (t(), n("div", Nv, [
          (t(!0), n(z, null, j(p.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", Rv, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), Uv = ["width", "height"], Hv = ["id"], Kv = ["stop-color"], qv = ["stop-color"], Gv = { key: 0 }, Wv = ["x1", "x2", "y1", "y2"], Zv = ["x", "y"], Jv = ["x", "y"], Yv = ["x1", "x2", "y1", "y2"], Xv = ["d", "fill"], Qv = ["d", "stroke", "stroke-dasharray"], eg = ["cx", "cy", "fill"], tg = { key: 1 }, ag = ["x1", "x2", "y1", "y2"], ng = ["cx", "cy", "fill"], lg = ["x", "y"], og = { class: "text-muted-foreground mb-1.5 text-[11px] whitespace-nowrap" }, sg = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, rg = { class: "text-xs font-semibold tabular-nums" }, ig = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, dg = { class: "text-muted-foreground" }, ug = /* @__PURE__ */ O({
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
    const l = e, a = x(() => g.value.some((_) => _.axis === "right")), r = R(null), s = R(560), i = R(null);
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
    ], f = Math.random().toString(36).slice(2, 9), g = x(() => (l.series?.length ? l.series : l.data?.length ? [{ name: "", points: l.data }] : []).map((F, V) => ({
      ...F,
      color: F.color ?? u[V % u.length]
    }))), p = x(() => g.value[0]?.points.map((_) => _.label) ?? []), v = x(() => p.value.length), C = x(() => ({
      top: 12,
      right: l.showAxis && a.value ? 44 : 12,
      bottom: 22,
      // The axis gutter disappears entirely when the axis is hidden, rather than
      // sitting there as dead space.
      left: l.showAxis ? 44 : 8
    })), h = (_) => l.format ? l.format(_) : k(_);
    function k(_) {
      return Math.abs(_) >= 1e6 ? `${(_ / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(_) >= 1e3 ? `${(_ / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(_ * 100) / 100);
    }
    function M(_) {
      const F = Math.max(..._, 0);
      if (F <= 0)
        return 1;
      const V = 10 ** Math.floor(Math.log10(F));
      return ([1, 2, 2.5, 5, 10].find((ge) => F <= ge * V) ?? 10) * V;
    }
    const S = x(
      () => M(
        g.value.filter((_) => _.axis !== "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), B = x(
      () => M(
        g.value.filter((_) => _.axis === "right").flatMap((_) => _.points.map((F) => F.value))
      )
    ), m = x(() => ({
      w: Math.max(1, s.value - C.value.left - C.value.right),
      h: Math.max(1, l.height - C.value.top - C.value.bottom)
    }));
    function b(_) {
      return C.value.left + (v.value <= 1 ? 0 : _ / (v.value - 1) * m.value.w);
    }
    function w(_, F = "left") {
      const V = F === "right" ? B.value : S.value;
      return C.value.top + m.value.h - _ / V * m.value.h;
    }
    const P = x(
      () => g.value.map((_) => {
        const F = _.points.map((J, ge) => ({
          ...J,
          x: b(ge),
          y: w(J.value, _.axis ?? "left")
        })), V = _.stepped ? I(F) : E(F);
        return { ..._, pts: F, line: V, area: te(V, F) };
      })
    );
    function I(_) {
      if (_.length === 0)
        return "";
      let F = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let V = 1; V < _.length; V++)
        F += ` L${_[V].x.toFixed(2)},${_[V - 1].y.toFixed(2)} L${_[V].x.toFixed(2)},${_[V].y.toFixed(2)}`;
      return F;
    }
    function E(_) {
      const F = _.length;
      if (F === 0)
        return "";
      if (F === 1)
        return `M${_[0].x},${_[0].y}`;
      const V = [], J = [];
      for (let le = 0; le < F - 1; le++)
        V[le] = _[le + 1].x - _[le].x, J[le] = V[le] === 0 ? 0 : (_[le + 1].y - _[le].y) / V[le];
      const ge = [J[0]];
      for (let le = 1; le < F - 1; le++)
        if (J[le - 1] * J[le] <= 0)
          ge[le] = 0;
        else {
          const X = 2 * V[le] + V[le - 1], ne = V[le] + 2 * V[le - 1];
          ge[le] = (X + ne) / (X / J[le - 1] + ne / J[le]);
        }
      ge[F - 1] = J[F - 2];
      let ye = `M${_[0].x.toFixed(2)},${_[0].y.toFixed(2)}`;
      for (let le = 0; le < F - 1; le++) {
        const X = V[le] / 3;
        ye += ` C${(_[le].x + X).toFixed(2)},${(_[le].y + ge[le] * X).toFixed(2)} ${(_[le + 1].x - X).toFixed(2)},${(_[le + 1].y - ge[le + 1] * X).toFixed(2)} ${_[le + 1].x.toFixed(2)},${_[le + 1].y.toFixed(2)}`;
      }
      return ye;
    }
    function te(_, F) {
      if (F.length === 0)
        return "";
      const V = C.value.top + m.value.h;
      return `${_} L${F[F.length - 1].x.toFixed(2)},${V} L${F[0].x.toFixed(2)},${V} Z`;
    }
    const H = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + m.value.h * _,
        value: S.value * (1 - _)
      }))
    ), K = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((_) => ({
        y: C.value.top + m.value.h * _,
        value: B.value * (1 - _)
      }))
    ), G = x(() => Math.max(1, Math.ceil(v.value / 8)));
    function oe(_) {
      return _ === v.value - 1 || _ % G.value === 0;
    }
    function ae(_) {
      const F = _.currentTarget.getBoundingClientRect(), V = _.clientX - F.left - C.value.left, J = v.value <= 1 ? 1 : m.value.w / (v.value - 1);
      i.value = Math.min(v.value - 1, Math.max(0, Math.round(V / J)));
    }
    const Z = x(() => {
      if (i.value === null || v.value === 0)
        return null;
      const _ = i.value;
      return {
        i: _,
        x: b(_),
        label: p.value[_],
        rows: P.value.map((F) => ({
          name: F.name,
          color: F.color,
          value: F.points[_]?.value ?? 0,
          y: F.pts[_]?.y ?? 0
        }))
      };
    }), q = x(() => {
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
      v.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: s.value,
          height: e.height,
          class: "overflow-visible",
          onMousemove: ae,
          onMouseleave: F[0] || (F[0] = (V) => i.value = null)
        }, [
          o("defs", null, [
            (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("linearGradient", {
              id: `pk-fill-${y(f)}-${J}`,
              key: J,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1"
            }, [
              o("stop", {
                offset: "0%",
                "stop-color": V.color,
                "stop-opacity": "0.25"
              }, null, 8, Kv),
              o("stop", {
                offset: "100%",
                "stop-color": V.color,
                "stop-opacity": "0.01"
              }, null, 8, qv)
            ], 8, Hv))), 128))
          ]),
          e.showAxis ? (t(), n("g", Gv, [
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("line", {
              key: V.y,
              x1: C.value.left,
              x2: s.value - C.value.right,
              y1: V.y,
              y2: V.y,
              stroke: "var(--border)",
              "stroke-width": "1"
            }, null, 8, Wv))), 128)),
            (t(!0), n(z, null, j(H.value, (V) => (t(), n("text", {
              key: `t-${V.y}`,
              x: C.value.left - 8,
              y: V.y + 3,
              "text-anchor": "end",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(k(V.value)), 9, Zv))), 128)),
            a.value ? (t(!0), n(z, { key: 0 }, j(K.value, (V) => (t(), n("text", {
              key: `rt-${V.y}`,
              x: s.value - C.value.right + 8,
              y: V.y + 3,
              "text-anchor": "start",
              class: "fill-muted-foreground text-[10px] tabular-nums"
            }, c(k(V.value)), 9, Jv))), 128)) : $("", !0)
          ])) : $("", !0),
          (t(!0), n(z, null, j(p.value, (V, J) => pe((t(), n("line", {
            key: `v-${J}`,
            x1: b(J),
            x2: b(J),
            y1: C.value.top,
            y2: C.value.top + m.value.h,
            stroke: "var(--border)",
            "stroke-width": "1",
            "stroke-dasharray": "2 4",
            opacity: "0.7"
          }, null, 8, Yv)), [
            [He, oe(J)]
          ])), 128)),
          (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("g", {
            key: `s-${J}`
          }, [
            V.filled ?? e.type === "area" ? (t(), n("path", {
              key: 0,
              d: V.area,
              fill: `url(#pk-fill-${y(f)}-${J})`
            }, null, 8, Xv)) : $("", !0),
            o("path", {
              d: V.line,
              fill: "none",
              stroke: V.color,
              "stroke-width": "2",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-dasharray": V.dashed ? "6 4" : void 0
            }, null, 8, Qv),
            V.pts.length === 1 ? (t(), n("circle", {
              key: 1,
              cx: V.pts[0].x,
              cy: V.pts[0].y,
              r: "3",
              fill: V.color
            }, null, 8, eg)) : $("", !0)
          ]))), 128)),
          Z.value ? (t(), n("g", tg, [
            o("line", {
              x1: Z.value.x,
              x2: Z.value.x,
              y1: C.value.top,
              y2: C.value.top + m.value.h,
              stroke: "var(--muted-foreground)",
              "stroke-width": "1",
              "stroke-dasharray": "4 3"
            }, null, 8, ag),
            (t(!0), n(z, null, j(Z.value.rows, (V, J) => (t(), n("circle", {
              key: `d-${J}`,
              cx: Z.value.x,
              cy: V.y,
              r: "4",
              fill: V.color,
              stroke: "var(--card)",
              "stroke-width": "2"
            }, null, 8, ng))), 128))
          ])) : $("", !0),
          (t(!0), n(z, null, j(p.value, (V, J) => pe((t(), n("text", {
            key: `x-${J}`,
            x: b(J),
            y: e.height - 6,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px]"
          }, c(V), 9, lg)), [
            [He, oe(J)]
          ])), 128))
        ], 40, Uv)),
        Z.value ? (t(), n("div", {
          key: 0,
          class: "bg-popover pointer-events-none absolute z-10 min-w-36 rounded-lg border p-2 shadow-lg",
          style: se(q.value)
        }, [
          o("p", og, c(Z.value.label), 1),
          (t(!0), n(z, null, j(Z.value.rows, (V, J) => (t(), n("div", {
            key: J,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", sg, c(V.name || "Value"), 1),
            o("span", rg, c(h(V.value)), 1)
          ]))), 128))
        ], 4)) : $("", !0),
        e.showLegend && g.value.length > 1 ? (t(), n("div", ig, [
          (t(!0), n(z, null, j(P.value, (V, J) => (t(), n("span", {
            key: J,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: V.color })
            }, null, 4),
            o("span", dg, c(V.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), cg = { class: "bg-popover pointer-events-none absolute top-2 left-2 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg" }, fg = { class: "text-muted-foreground text-[11px] capitalize" }, mg = { class: "text-sm font-semibold tabular-nums" }, pg = {
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
    return (l, a) => (t(), n("div", cg, [
      o("p", fg, c(e.label), 1),
      o("p", mg, [
        N(c(e.value) + " ", 1),
        e.share ? (t(), n("span", pg, " (" + c(e.share) + ") ", 1)) : $("", !0)
      ])
    ]));
  }
}), vg = {
  key: 1,
  class: "relative flex flex-wrap items-center gap-4 sm:flex-nowrap"
}, gg = ["width", "height", "viewBox", "aria-label"], hg = ["d", "fill", "fill-opacity", "onMouseenter"], bg = ["x", "y"], yg = ["x", "y"], xg = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, kg = ["onMouseenter"], $g = { class: "min-w-0 flex-1 truncate capitalize" }, wg = { class: "tabular-nums font-medium" }, Cg = { class: "text-muted-foreground w-9 text-right tabular-nums" }, UC = /* @__PURE__ */ O({
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
    ], r = x(() => l.data.reduce((S, B) => S + B.value, 0)), s = R(null), i = x(() => l.height), d = x(() => i.value / 2 - 4), u = x(() => l.type === "doughnut" ? d.value * 0.62 : 0);
    function f(S) {
      return a[S % a.length];
    }
    function g(S) {
      return 1 - Math.min(0.55, Math.floor(S / a.length) * 0.28);
    }
    const p = x(() => {
      if (r.value <= 0)
        return [];
      const S = i.value / 2;
      let B = -Math.PI / 2;
      return l.data.map((m, b) => {
        const w = m.value / r.value, P = w * Math.PI * 2, I = B, E = B + P;
        return B = E, {
          ...m,
          share: w,
          colour: f(b),
          opacity: g(b),
          /*
           * The 100% case. An arc from a point back to itself is degenerate
           * and SVG draws nothing, so it is expressed as two half circles.
           */
          path: w >= 0.9999 ? h(S) : C(S, I, E, d.value, u.value)
        };
      });
    });
    function v(S, B, m) {
      return `${(S + Math.cos(B) * m).toFixed(2)},${(S + Math.sin(B) * m).toFixed(2)}`;
    }
    function C(S, B, m, b, w) {
      const P = m - B > Math.PI ? 1 : 0;
      return w <= 0 ? `M${S},${S} L${v(S, B, b)} A${b},${b} 0 ${P} 1 ${v(S, m, b)} Z` : [
        `M${v(S, B, b)}`,
        `A${b},${b} 0 ${P} 1 ${v(S, m, b)}`,
        `L${v(S, m, w)}`,
        `A${w},${w} 0 ${P} 0 ${v(S, B, w)}`,
        "Z"
      ].join(" ");
    }
    function h(S) {
      const B = d.value, m = u.value, b = [
        `M${S - B},${S}`,
        `A${B},${B} 0 1 1 ${S + B},${S}`,
        `A${B},${B} 0 1 1 ${S - B},${S}`,
        "Z"
      ];
      return m <= 0 ? b.join(" ") : [
        ...b,
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
    }, " No data ", 4)) : (t(), n("div", vg, [
      (t(), n("svg", {
        width: i.value,
        height: i.value,
        viewBox: `0 0 ${i.value} ${i.value}`,
        class: "shrink-0",
        role: "img",
        "aria-label": `Total ${k(r.value)}`
      }, [
        (t(!0), n(z, null, j(p.value, (m, b) => (t(), n("path", {
          key: b,
          d: m.path,
          fill: m.colour,
          "fill-opacity": s.value === null || s.value === b ? m.opacity : m.opacity * 0.35,
          "fill-rule": "evenodd",
          stroke: "var(--card)",
          "stroke-width": "2",
          class: "cursor-default transition-[fill-opacity]",
          onMouseenter: (w) => s.value = b,
          onMouseleave: B[0] || (B[0] = (w) => s.value = null)
        }, null, 40, hg))), 128)),
        e.type === "doughnut" ? (t(), n(z, { key: 0 }, [
          o("text", {
            x: i.value / 2,
            y: i.value / 2 - 2,
            "text-anchor": "middle",
            class: "fill-foreground text-base font-semibold tabular-nums"
          }, c(k(s.value === null ? r.value : p.value[s.value].value)), 9, bg),
          o("text", {
            x: i.value / 2,
            y: i.value / 2 + 14,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(s.value === null ? "Total" : p.value[s.value].label), 9, yg)
        ], 64)) : $("", !0)
      ], 8, gg)),
      o("ul", xg, [
        (t(!0), n(z, null, j(p.value, (m, b) => (t(), n("li", {
          key: b,
          class: A(["flex cursor-default items-center gap-2 rounded px-1.5 py-1 text-xs transition-colors", s.value === b ? "bg-muted" : ""]),
          onMouseenter: (w) => s.value = b,
          onMouseleave: B[1] || (B[1] = (w) => s.value = null)
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: m.colour, opacity: m.opacity })
          }, null, 4),
          o("span", $g, c(m.label), 1),
          o("span", wg, c(k(m.value)), 1),
          o("span", Cg, c(M(m.share)), 1)
        ], 42, kg))), 128))
      ]),
      s.value !== null && e.type === "pie" ? (t(), T(mt, {
        key: 0,
        label: p.value[s.value].label,
        value: k(p.value[s.value].value),
        share: M(p.value[s.value].share)
      }, null, 8, ["label", "value", "share"])) : $("", !0)
    ]));
  }
}), Sg = ["width", "height", "viewBox", "aria-label"], Mg = { class: "text-border" }, Bg = ["x1", "x2", "y1", "y2", "stroke-dasharray"], _g = { class: "fill-muted-foreground text-[10px]" }, Ag = ["x", "y"], Pg = ["x", "y"], zg = ["cx", "cy", "r", "fill", "fill-opacity", "stroke", "opacity", "onMouseenter"], Og = {
  key: 1,
  class: "mt-2 flex flex-wrap gap-3"
}, HC = /* @__PURE__ */ O({
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
      d = new ResizeObserver((G) => {
        const oe = G[0]?.contentRect.width ?? 0;
        oe > 0 && (s.value = oe);
      }), r.value && d.observe(r.value);
    }), ke(() => d?.disconnect());
    const u = x(
      () => l.series?.length ? l.series : [{ name: "", points: l.data ?? [] }]
    ), f = (G, oe) => oe.color ?? a[G % a.length], g = x(() => u.value.flatMap((G) => G.points)), p = x(() => g.value.some((G) => typeof G.r == "number")), v = { top: 12, right: 16, bottom: 32, left: 48 }, C = x(() => Math.max(10, s.value - v.left - v.right)), h = x(() => Math.max(10, l.height - v.top - v.bottom));
    function k(G) {
      if (G.length === 0)
        return [0, 1];
      const oe = Math.min(...G), ae = Math.max(...G), Z = ae - oe || Math.abs(ae) || 1;
      return [oe - Z * 0.08, ae + Z * 0.08];
    }
    const M = x(() => k(g.value.map((G) => G.x))), S = x(() => k(g.value.map((G) => G.y))), B = (G) => {
      const [oe, ae] = M.value;
      return v.left + (G - oe) / (ae - oe) * C.value;
    }, m = (G) => {
      const [oe, ae] = S.value;
      return v.top + h.value - (G - oe) / (ae - oe) * h.value;
    }, b = x(() => Math.max(...g.value.map((G) => G.r ?? 0), 0));
    function w(G) {
      if (!p.value || !b.value)
        return 4;
      const oe = Math.max(0, G.r ?? 0) / b.value;
      return 3 + Math.sqrt(oe) * (l.maxRadius - 3);
    }
    function P([G, oe]) {
      return Array.from({ length: 5 }, (ae, Z) => G + (oe - G) / 4 * Z);
    }
    const I = x(() => P(M.value)), E = x(() => P(S.value)), te = (G) => l.formatX?.(G) ?? String(Math.round(G * 100) / 100), H = (G) => l.formatY?.(G) ?? String(Math.round(G * 100) / 100), K = x(() => {
      if (!i.value)
        return null;
      const G = u.value[i.value.s], oe = G?.points[i.value.p];
      return oe ? { series: G, point: oe } : null;
    });
    return (G, oe) => (t(), n("div", {
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
        o("g", Mg, [
          (t(!0), n(z, null, j(E.value, (ae, Z) => (t(), n("line", {
            key: `gy-${Z}`,
            x1: v.left,
            x2: v.left + C.value,
            y1: m(ae),
            y2: m(ae),
            stroke: "currentColor",
            "stroke-width": "1",
            "stroke-dasharray": Z === 0 ? "0" : "3 3",
            opacity: "0.5"
          }, null, 8, Bg))), 128))
        ]),
        o("g", _g, [
          (t(!0), n(z, null, j(E.value, (ae, Z) => (t(), n("text", {
            key: `ty-${Z}`,
            x: v.left - 8,
            y: m(ae) + 3,
            "text-anchor": "end"
          }, c(H(ae)), 9, Ag))), 128)),
          (t(!0), n(z, null, j(I.value, (ae, Z) => (t(), n("text", {
            key: `tx-${Z}`,
            x: B(ae),
            y: e.height - 10,
            "text-anchor": "middle"
          }, c(te(ae)), 9, Pg))), 128))
        ]),
        (t(!0), n(z, null, j(u.value, (ae, Z) => (t(), n("g", {
          key: `s-${Z}`
        }, [
          (t(!0), n(z, null, j(ae.points, (q, _) => (t(), n("circle", {
            key: `p-${Z}-${_}`,
            cx: B(q.x),
            cy: m(q.y),
            r: w(q),
            fill: f(Z, ae),
            "fill-opacity": p.value ? 0.55 : 0.85,
            stroke: f(Z, ae),
            "stroke-width": "1.5",
            class: "cursor-pointer transition-opacity",
            opacity: i.value && (i.value.s !== Z || i.value.p !== _) ? 0.35 : 1,
            onMouseenter: (F) => i.value = { s: Z, p: _ },
            onMouseleave: oe[0] || (oe[0] = (F) => i.value = null)
          }, null, 40, zg))), 128))
        ]))), 128))
      ], 8, Sg)),
      K.value ? (t(), T(mt, {
        key: 0,
        label: K.value.point.label ?? K.value.series.name ?? "Point",
        value: `${e.xLabel ? e.xLabel + " " : ""}${te(K.value.point.x)} · ${e.yLabel ? e.yLabel + " " : ""}${H(K.value.point.y)}`,
        share: p.value && K.value.point.r != null ? String(K.value.point.r) : null
      }, null, 8, ["label", "value", "share"])) : $("", !0),
      e.showLegend && u.value.length > 1 ? (t(), n("div", Og, [
        (t(!0), n(z, null, j(u.value, (ae, Z) => (t(), n("span", {
          key: `l-${Z}`,
          class: "text-muted-foreground flex items-center gap-1.5 text-xs"
        }, [
          o("span", {
            class: "size-2.5 rounded-full",
            style: se({ backgroundColor: f(Z, ae) }),
            "aria-hidden": "true"
          }, null, 4),
          N(" " + c(ae.name), 1)
        ]))), 128))
      ])) : $("", !0)
    ], 512));
  }
}), Lg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, jg = ["width", "height", "viewBox"], Vg = ["points"], Tg = ["x1", "y1", "x2", "y2"], Dg = ["points", "fill", "stroke"], Eg = ["cx", "cy", "fill", "onMouseenter"], Ig = ["x", "y", "text-anchor"], Fg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Ng = { class: "truncate" }, KC = /* @__PURE__ */ O({
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
      () => l.series.map((m, b) => ({
        ...m,
        color: m.color ?? a[b % a.length]
      }))
    ), s = x(() => r.value[0]?.points.map((m) => m.label) ?? []), i = x(() => s.value.length), d = x(() => l.height), u = x(() => d.value / 2), f = x(() => d.value / 2 - 34), g = x(() => {
      const m = Math.max(...r.value.flatMap((P) => P.points.map((I) => I.value)), 0);
      if (m <= 0)
        return 1;
      const b = 10 ** Math.floor(Math.log10(m));
      return ([1, 2, 2.5, 5, 10].find((P) => m <= P * b) ?? 10) * b;
    });
    function p(m) {
      return m / i.value * Math.PI * 2 - Math.PI / 2;
    }
    function v(m, b) {
      const w = p(m);
      return {
        x: u.value + Math.cos(w) * f.value * b,
        y: u.value + Math.sin(w) * f.value * b
      };
    }
    function C(m) {
      return Array.from({ length: i.value }, (b, w) => {
        const P = v(w, m);
        return `${P.x.toFixed(2)},${P.y.toFixed(2)}`;
      }).join(" ");
    }
    const h = x(() => [0.25, 0.5, 0.75, 1].map((m) => ({ f: m, points: C(m) }))), k = x(
      () => r.value.map((m) => {
        const b = m.points.map((w) => Math.max(0, w.value) / g.value);
        return {
          name: m.name,
          color: m.color,
          values: m.points,
          outline: b.map((w, P) => {
            const I = v(P, w);
            return `${I.x.toFixed(2)},${I.y.toFixed(2)}`;
          }).join(" "),
          dots: b.map((w, P) => v(P, w))
        };
      })
    ), M = x(
      () => s.value.map((m, b) => {
        const w = p(b), P = u.value + Math.cos(w) * (f.value + 14), I = u.value + Math.sin(w) * (f.value + 14), E = Math.cos(w);
        return {
          label: m,
          x: P,
          y: I + 3,
          anchor: Math.abs(E) < 0.2 ? "middle" : E > 0 ? "start" : "end"
        };
      })
    ), S = R(null), B = (m) => l.format ? l.format(m) : new Intl.NumberFormat().format(m);
    return (m, b) => i.value < 3 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " A radar needs at least three axes ", 4)) : (t(), n("div", Lg, [
      (t(), n("svg", {
        width: d.value,
        height: d.value,
        viewBox: `0 0 ${d.value} ${d.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(h.value, (w) => (t(), n("polygon", {
          key: w.f,
          points: w.points,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Vg))), 128)),
        (t(!0), n(z, null, j(s.value, (w, P) => (t(), n("line", {
          key: `spoke-${P}`,
          x1: u.value,
          y1: u.value,
          x2: v(P, 1).x,
          y2: v(P, 1).y,
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Tg))), 128)),
        (t(!0), n(z, null, j(k.value, (w, P) => (t(), n("g", {
          key: `s-${P}`
        }, [
          o("polygon", {
            points: w.outline,
            fill: w.color,
            "fill-opacity": "0.16",
            stroke: w.color,
            "stroke-width": "2"
          }, null, 8, Dg),
          (t(!0), n(z, null, j(w.dots, (I, E) => (t(), n("circle", {
            key: E,
            cx: I.x,
            cy: I.y,
            r: "3",
            fill: w.color,
            stroke: "var(--card)",
            "stroke-width": "1.5",
            class: "cursor-default",
            onMouseenter: (te) => S.value = {
              series: w.name,
              axis: s.value[E],
              value: w.values[E]?.value ?? 0
            },
            onMouseleave: b[0] || (b[0] = (te) => S.value = null)
          }, null, 40, Eg))), 128))
        ]))), 128)),
        (t(!0), n(z, null, j(M.value, (w, P) => (t(), n("text", {
          key: `l-${P}`,
          x: w.x,
          y: w.y,
          "text-anchor": w.anchor,
          class: "fill-muted-foreground text-[10px] capitalize"
        }, c(w.label), 9, Ig))), 128))
      ], 8, jg)),
      e.showLegend ? (t(), n("ul", Fg, [
        (t(!0), n(z, null, j(r.value, (w, P) => (t(), n("li", {
          key: P,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: w.color })
          }, null, 4),
          o("span", Ng, c(w.name), 1)
        ]))), 128))
      ])) : $("", !0),
      S.value ? (t(), T(mt, {
        key: 1,
        label: `${S.value.series} — ${S.value.axis}`,
        value: B(S.value.value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Rg = {
  key: 1,
  class: "relative flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap"
}, Ug = ["width", "height", "viewBox"], Hg = ["cx", "cy", "r"], Kg = ["d", "fill", "fill-opacity", "onMouseenter"], qg = {
  key: 0,
  class: "flex min-w-0 flex-col gap-1.5"
}, Gg = { class: "min-w-0 flex-1 truncate capitalize" }, Wg = { class: "font-medium tabular-nums" }, qC = /* @__PURE__ */ O({
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
    ], r = R(null), s = x(() => l.height), i = x(() => s.value / 2), d = x(() => s.value / 2 - 6), u = x(() => Math.max(...l.data.map((C) => Math.max(0, C.value)), 0)), f = x(() => {
      const C = l.data.length;
      if (C === 0 || u.value <= 0)
        return [];
      const h = Math.PI * 2 / C;
      return l.data.map((k, M) => {
        const S = Math.sqrt(Math.max(0, k.value) / u.value), B = d.value * S, m = M * h - Math.PI / 2, b = m + h;
        return {
          ...k,
          color: a[M % a.length],
          share: u.value === 0 ? 0 : k.value / u.value,
          path: g(i.value, m, b, B)
        };
      });
    });
    function g(C, h, k, M) {
      if (M <= 0)
        return "";
      if (k - h >= Math.PI * 2 - 1e-6)
        return `M${C - M},${C} A${M},${M} 0 1 1 ${C + M},${C} A${M},${M} 0 1 1 ${C - M},${C} Z`;
      const S = k - h > Math.PI ? 1 : 0, B = C + Math.cos(h) * M, m = C + Math.sin(h) * M, b = C + Math.cos(k) * M, w = C + Math.sin(k) * M;
      return `M${C},${C} L${B.toFixed(2)},${m.toFixed(2)} A${M.toFixed(2)},${M.toFixed(2)} 0 ${S} 1 ${b.toFixed(2)},${w.toFixed(2)} Z`;
    }
    const p = x(() => [0.5, 0.75, 1].map((C) => d.value * C)), v = (C) => l.format ? l.format(C) : new Intl.NumberFormat().format(C);
    return (C, h) => f.value.length === 0 ? (t(), n("div", {
      key: 0,
      class: "text-muted-foreground flex items-center justify-center text-sm",
      style: se({ height: `${e.height}px` })
    }, " No data ", 4)) : (t(), n("div", Rg, [
      (t(), n("svg", {
        width: s.value,
        height: s.value,
        viewBox: `0 0 ${s.value} ${s.value}`,
        class: "shrink-0"
      }, [
        (t(!0), n(z, null, j(p.value, (k) => (t(), n("circle", {
          key: k,
          cx: i.value,
          cy: i.value,
          r: k,
          fill: "none",
          stroke: "var(--border)",
          "stroke-width": "1"
        }, null, 8, Hg))), 128)),
        (t(!0), n(z, null, j(f.value, (k, M) => (t(), n("path", {
          key: M,
          d: k.path,
          fill: k.color,
          stroke: "var(--card)",
          "stroke-width": "1.5",
          class: "cursor-default transition-opacity",
          "fill-opacity": r.value === null || r.value === M ? 0.75 : 0.3,
          onMouseenter: (S) => r.value = M,
          onMouseleave: h[0] || (h[0] = (S) => r.value = null)
        }, null, 40, Kg))), 128))
      ], 8, Ug)),
      e.showLegend ? (t(), n("ul", qg, [
        (t(!0), n(z, null, j(f.value, (k, M) => (t(), n("li", {
          key: M,
          class: "flex items-center gap-2 text-xs"
        }, [
          o("span", {
            class: "size-2.5 shrink-0 rounded-sm",
            style: se({ background: k.color })
          }, null, 4),
          o("span", Gg, c(k.label), 1),
          o("span", Wg, c(v(k.value)), 1)
        ]))), 128))
      ])) : $("", !0),
      r.value !== null ? (t(), T(mt, {
        key: 1,
        label: f.value[r.value].label,
        value: v(f.value[r.value].value)
      }, null, 8, ["label", "value"])) : $("", !0)
    ]));
  }
}), Zg = ["width", "height"], Jg = ["x1", "x2", "y1", "y2"], Yg = ["x", "y"], Xg = ["x", "y"], Qg = ["x", "y", "width", "height", "fill-opacity", "onMouseenter"], eh = ["x", "y", "width", "height", "fill", "fill-opacity"], th = ["d", "stroke"], ah = ["cx", "cy", "fill"], nh = ["x", "y"], lh = {
  key: 0,
  class: "bg-popover pointer-events-none absolute top-2 right-2 z-10 min-w-36 rounded-lg border p-2 shadow-lg"
}, oh = { class: "text-muted-foreground mb-1 text-[11px] capitalize" }, sh = { class: "text-muted-foreground min-w-0 flex-1 truncate text-[11px]" }, rh = { class: "text-xs font-semibold tabular-nums" }, ih = {
  key: 1,
  class: "mt-2 flex flex-wrap items-center gap-4"
}, dh = { class: "text-muted-foreground" }, GC = /* @__PURE__ */ O({
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
      () => l.bars.map((Z, q) => ({
        ...Z,
        color: Z.color ?? d[q % d.length]
      }))
    ), g = x(
      () => l.lines.map((Z, q) => ({
        ...Z,
        color: Z.color ?? u[q % u.length]
      }))
    ), p = x(
      () => f.value[0]?.points.map((Z) => Z.label) ?? g.value[0]?.points.map((Z) => Z.label) ?? []
    ), v = x(() => p.value.length), C = x(() => l.lineAxis === "right"), h = x(() => ({
      top: 12,
      right: C.value ? 44 : 12,
      bottom: 26,
      left: 44
    })), k = x(() => ({
      w: Math.max(1, r.value - h.value.left - h.value.right),
      h: Math.max(1, l.height - h.value.top - h.value.bottom)
    }));
    function M(Z) {
      const q = Math.max(...Z, 0);
      if (q <= 0)
        return 1;
      const _ = 10 ** Math.floor(Math.log10(q));
      return ([1, 2, 2.5, 5, 10].find((V) => q <= V * _) ?? 10) * _;
    }
    const S = x(
      () => M([
        ...f.value.flatMap((Z) => Z.points.map((q) => q.value)),
        ...C.value ? [] : g.value.flatMap((Z) => Z.points.map((q) => q.value))
      ])
    ), B = x(
      () => C.value ? M(g.value.flatMap((Z) => Z.points.map((q) => q.value))) : S.value
    ), m = x(() => k.value.w / Math.max(1, v.value)), b = x(() => m.value * 0.6), w = x(() => b.value / Math.max(1, f.value.length));
    function P(Z) {
      return h.value.left + Z * m.value + m.value / 2;
    }
    const I = x(
      () => f.value.flatMap(
        (Z, q) => Z.points.map((_, F) => {
          const V = Math.max(0, _.value) / S.value * k.value.h;
          return {
            x: P(F) - b.value / 2 + q * w.value,
            y: h.value.top + k.value.h - V,
            w: Math.max(0, w.value - 2),
            h: V,
            color: Z.color,
            index: F,
            name: Z.name,
            value: _.value,
            label: _.label
          };
        })
      )
    ), E = x(
      () => g.value.map((Z) => {
        const q = Z.points.map((_, F) => ({
          x: P(F),
          y: h.value.top + k.value.h - Math.max(0, _.value) / B.value * k.value.h,
          value: _.value
        }));
        return {
          ...Z,
          pts: q,
          d: q.map((_, F) => `${F === 0 ? "M" : "L"}${_.x.toFixed(2)},${_.y.toFixed(2)}`).join(" ")
        };
      })
    ), te = x(
      () => [0, 0.25, 0.5, 0.75, 1].map((Z) => ({
        y: h.value.top + k.value.h * Z,
        left: S.value * (1 - Z),
        right: B.value * (1 - Z)
      }))
    ), H = x(() => Math.max(1, Math.ceil(v.value / 10)));
    function K(Z) {
      return Z === v.value - 1 || Z % H.value === 0;
    }
    const G = (Z) => l.format ? l.format(Z) : oe(Z);
    function oe(Z) {
      return Math.abs(Z) >= 1e6 ? `${(Z / 1e6).toFixed(1).replace(/\.0$/, "")}m` : Math.abs(Z) >= 1e3 ? `${(Z / 1e3).toFixed(1).replace(/\.0$/, "")}k` : new Intl.NumberFormat().format(Math.round(Z * 100) / 100);
    }
    const ae = x(() => {
      if (s.value === null)
        return null;
      const Z = s.value;
      return {
        label: p.value[Z],
        rows: [
          ...f.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[Z]?.value ?? 0
          })),
          ...g.value.map((q) => ({
            name: q.name,
            color: q.color,
            value: q.points[Z]?.value ?? 0
          }))
        ]
      };
    });
    return (Z, q) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      v.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: q[0] || (q[0] = (_) => s.value = null)
        }, [
          (t(!0), n(z, null, j(te.value, (_) => (t(), n("line", {
            key: `g-${_.y}`,
            x1: h.value.left,
            x2: r.value - h.value.right,
            y1: _.y,
            y2: _.y,
            stroke: "var(--border)",
            "stroke-width": "1"
          }, null, 8, Jg))), 128)),
          (t(!0), n(z, null, j(te.value, (_) => (t(), n("text", {
            key: `lt-${_.y}`,
            x: h.value.left - 8,
            y: _.y + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(_.left)), 9, Yg))), 128)),
          C.value ? (t(!0), n(z, { key: 0 }, j(te.value, (_) => (t(), n("text", {
            key: `rt-${_.y}`,
            x: r.value - h.value.right + 8,
            y: _.y + 3,
            "text-anchor": "start",
            class: "fill-muted-foreground text-[10px] tabular-nums"
          }, c(oe(_.right)), 9, Xg))), 128)) : $("", !0),
          (t(!0), n(z, null, j(p.value, (_, F) => (t(), n("rect", {
            key: `hit-${F}`,
            x: h.value.left + F * m.value,
            y: h.value.top,
            width: m.value,
            height: k.value.h,
            fill: "var(--muted)",
            "fill-opacity": s.value === F ? 0.4 : 0,
            onMouseenter: (V) => s.value = F
          }, null, 40, Qg))), 128)),
          (t(!0), n(z, null, j(I.value, (_, F) => (t(), n("rect", {
            key: `b-${F}`,
            x: _.x,
            y: _.y,
            width: _.w,
            height: _.h,
            fill: _.color,
            "fill-opacity": s.value === null || s.value === _.index ? 0.85 : 0.3,
            rx: "3",
            "pointer-events": "none"
          }, null, 8, eh))), 128)),
          (t(!0), n(z, null, j(E.value, (_, F) => (t(), n("g", {
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
            }, null, 8, th),
            s.value !== null && _.pts[s.value] ? (t(), n("circle", {
              key: 0,
              cx: _.pts[s.value].x,
              cy: _.pts[s.value].y,
              r: "4",
              fill: _.color,
              stroke: "var(--card)",
              "stroke-width": "2",
              "pointer-events": "none"
            }, null, 8, ah)) : $("", !0)
          ]))), 128)),
          (t(!0), n(z, null, j(p.value, (_, F) => pe((t(), n("text", {
            key: `x-${F}`,
            x: P(F),
            y: e.height - 8,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[10px] capitalize"
          }, c(_), 9, nh)), [
            [He, K(F)]
          ])), 128))
        ], 40, Zg)),
        ae.value ? (t(), n("div", lh, [
          o("p", oh, c(ae.value.label), 1),
          (t(!0), n(z, null, j(ae.value.rows, (_, F) => (t(), n("div", {
            key: F,
            class: "flex items-center gap-2 py-0.5"
          }, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", sh, c(_.name), 1),
            o("span", rh, c(G(_.value)), 1)
          ]))), 128))
        ])) : $("", !0),
        e.showLegend ? (t(), n("div", ih, [
          (t(!0), n(z, null, j([...f.value, ...g.value], (_, F) => (t(), n("span", {
            key: F,
            class: "flex items-center gap-1.5 text-xs"
          }, [
            o("span", {
              class: "size-2 rounded-full",
              style: se({ background: _.color })
            }, null, 4),
            o("span", dh, c(_.name), 1)
          ]))), 128))
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), uh = { class: "mb-3 flex flex-wrap items-center justify-center gap-3" }, ch = { class: "text-muted-foreground" }, fh = {
  key: 0,
  class: "text-muted-foreground mb-2 text-center text-xs"
}, mh = ["width", "height"], ph = ["x", "y"], vh = ["x", "y", "width", "height", "fill", "fill-opacity", "onMouseenter"], gh = ["x", "y"], hh = {
  key: 1,
  class: "bg-popover pointer-events-none absolute top-0 right-0 z-10 rounded-lg border px-2.5 py-1.5 shadow-lg"
}, bh = { class: "text-[11px] font-medium capitalize" }, yh = { class: "text-muted-foreground text-[11px] capitalize" }, xh = { class: "text-sm font-semibold tabular-nums" }, kh = { class: "text-muted-foreground text-xs font-normal" }, WC = /* @__PURE__ */ O({
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
      i = new ResizeObserver((b) => {
        r.value = Math.max(160, b[0].contentRect.width);
      }), a.value && i.observe(a.value);
    }), ke(() => i?.disconnect());
    const d = x(() => l.series[0]?.points.map((b) => b.label) ?? []), u = x(() => l.series.length), f = x(() => d.value.length), g = x(() => Math.min(140, Math.max(60, r.value * 0.16))), p = x(() => Math.max(1, r.value - g.value - 8)), v = x(() => p.value / Math.max(1, f.value)), C = x(() => Math.max(1, (l.height - 8) / Math.max(1, u.value)));
    function h(b) {
      if (b === 0)
        return "var(--muted)";
      const w = Math.max(1, l.buckets.length - 1);
      return `color-mix(in oklch, var(--primary) ${Math.round(b / w * 100)}%, var(--muted))`;
    }
    function k(b) {
      for (let w = 0; w < l.buckets.length; w++) {
        const P = l.buckets[w].max;
        if (P === void 0 || b < P)
          return w;
      }
      return l.buckets.length - 1;
    }
    const M = x(
      () => l.series.flatMap(
        (b, w) => b.points.map((P, I) => {
          const E = k(P.value);
          return {
            row: w,
            col: I,
            x: g.value + I * v.value,
            y: 4 + w * C.value,
            w: Math.max(1, v.value - 1),
            h: Math.max(1, C.value - 4),
            colour: h(E),
            label: P.label,
            value: P.value,
            rowName: b.name,
            bucketLabel: l.buckets[E].label
          };
        })
      )
    ), S = x(() => v.value < 2), B = x(() => s.value ? M.value.find((b) => b.row === s.value.row && b.col === s.value.col) ?? null : null), m = (b) => l.format ? l.format(b) : new Intl.NumberFormat().format(b);
    return (b, w) => (t(), n("div", {
      ref_key: "host",
      ref: a,
      class: "relative w-full"
    }, [
      u.value === 0 || f.value === 0 ? (t(), n("div", {
        key: 0,
        class: "text-muted-foreground flex items-center justify-center text-sm",
        style: se({ height: `${e.height}px` })
      }, " No data ", 4)) : (t(), n(z, { key: 1 }, [
        o("div", uh, [
          (t(!0), n(z, null, j(e.buckets, (P, I) => (t(), n("span", {
            key: I,
            class: "flex items-center gap-1.5 text-[11px]"
          }, [
            o("span", {
              class: "size-3 rounded-sm border",
              style: se({ background: h(I) })
            }, null, 4),
            o("span", ch, c(P.label), 1)
          ]))), 128))
        ]),
        S.value ? (t(), n("p", fh, c(f.value) + " columns - too many to label individually ", 1)) : $("", !0),
        (t(), n("svg", {
          width: r.value,
          height: e.height,
          class: "overflow-visible",
          onMouseleave: w[0] || (w[0] = (P) => s.value = null)
        }, [
          (t(!0), n(z, null, j(e.series, (P, I) => (t(), n("text", {
            key: `r-${I}`,
            x: g.value - 10,
            y: 4 + I * C.value + C.value / 2 + 3,
            "text-anchor": "end",
            class: "fill-muted-foreground text-[11px] capitalize"
          }, c(P.name), 9, ph))), 128)),
          (t(!0), n(z, null, j(M.value, (P, I) => (t(), n("rect", {
            key: I,
            x: P.x,
            y: P.y,
            width: P.w,
            height: P.h,
            fill: P.colour,
            "fill-opacity": s.value === null || s.value.row === P.row && s.value.col === P.col ? 1 : 0.55,
            rx: "1",
            class: "transition-[fill-opacity]",
            onMouseenter: (E) => s.value = { row: P.row, col: P.col }
          }, null, 40, vh))), 128)),
          e.showColumnLabels && !S.value ? (t(!0), n(z, { key: 0 }, j(d.value, (P, I) => (t(), n("text", {
            key: `c-${I}`,
            x: g.value + I * v.value + v.value / 2,
            y: e.height - 2,
            "text-anchor": "middle",
            class: "fill-muted-foreground text-[9px]"
          }, c(P), 9, gh))), 128)) : $("", !0)
        ], 40, mh)),
        B.value ? (t(), n("div", hh, [
          o("p", bh, c(B.value.label), 1),
          o("p", yh, c(B.value.rowName), 1),
          o("p", xh, [
            N(c(m(B.value.value)) + " ", 1),
            o("span", kh, "(" + c(B.value.bucketLabel) + ")", 1)
          ])
        ])) : $("", !0)
      ], 64))
    ], 512));
  }
}), $h = ["viewBox"], wh = { key: 0 }, Ch = ["id"], Sh = ["stop-color"], Mh = ["stop-color"], Bh = ["d", "fill"], _h = ["d", "stroke"], ba = 100, lt = 30, St = /* @__PURE__ */ O({
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
      const u = l.data.map((v) => v.value);
      if (u.length < 2)
        return [];
      const f = Math.min(...u), p = Math.max(...u) - f || 1;
      return u.map((v, C) => ({
        x: C / (u.length - 1) * ba,
        y: lt - (v - f) / p * (lt - 4) - 2
      }));
    });
    function s(u) {
      const f = u.length;
      if (f < 2)
        return "";
      const g = [], p = [];
      for (let h = 0; h < f - 1; h++)
        g[h] = u[h + 1].x - u[h].x, p[h] = g[h] === 0 ? 0 : (u[h + 1].y - u[h].y) / g[h];
      const v = [p[0]];
      for (let h = 1; h < f - 1; h++)
        if (p[h - 1] * p[h] <= 0)
          v[h] = 0;
        else {
          const k = 2 * g[h] + g[h - 1], M = g[h] + 2 * g[h - 1];
          v[h] = (k + M) / (k / p[h - 1] + M / p[h]);
        }
      v[f - 1] = p[f - 2];
      let C = `M${u[0].x.toFixed(2)},${u[0].y.toFixed(2)}`;
      for (let h = 0; h < f - 1; h++) {
        const k = g[h] / 3;
        C += ` C${(u[h].x + k).toFixed(2)},${(u[h].y + v[h] * k).toFixed(2)} ${(u[h + 1].x - k).toFixed(2)},${(u[h + 1].y - v[h + 1] * k).toFixed(2)} ${u[h + 1].x.toFixed(2)},${u[h + 1].y.toFixed(2)}`;
      }
      return C;
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
      viewBox: `0 0 ${ba} ${lt}`,
      preserveAspectRatio: "none",
      class: "w-full",
      style: se({ height: `${e.height}px` }),
      "aria-hidden": "true"
    }, [
      e.filled ? (t(), n("defs", wh, [
        o("linearGradient", {
          id: `pk-spark-${y(a)}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1"
        }, [
          o("stop", {
            offset: "0%",
            "stop-color": e.color,
            "stop-opacity": "0.35"
          }, null, 8, Sh),
          o("stop", {
            offset: "100%",
            "stop-color": e.color,
            "stop-opacity": "0"
          }, null, 8, Mh)
        ], 8, Ch)
      ])) : $("", !0),
      e.filled ? (t(), n("path", {
        key: 1,
        d: d.value,
        fill: `url(#pk-spark-${y(a)})`
      }, null, 8, Bh)) : $("", !0),
      o("path", {
        d: i.value,
        fill: "none",
        stroke: e.color,
        "stroke-width": "1.5",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "vector-effect": "non-scaling-stroke"
      }, null, 8, _h)
    ], 12, $h)) : $("", !0);
  }
}), Ah = { class: "flex items-center gap-1 text-xs" }, Ph = {
  "aria-hidden": "true",
  class: "text-[9px]"
}, zh = {
  key: 0,
  class: "text-muted-foreground truncate"
}, Ja = /* @__PURE__ */ O({
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
    return (d, u) => (t(), n("span", Ah, [
      o("span", {
        class: A(["flex items-center gap-0.5 font-medium tabular-nums", r.value])
      }, [
        o("span", Ph, c(s.value), 1),
        N(" " + c(i.value), 1)
      ], 2),
      e.comparison ? (t(), n("span", zh, c(e.comparison), 1)) : $("", !0)
    ]));
  }
}), Oh = ["data-collapsed"], Lh = { class: "flex flex-wrap items-start justify-between gap-2" }, jh = { class: "flex min-w-0 items-start gap-2" }, Vh = {
  key: 0,
  class: "text-muted-foreground mt-0.5 size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Th = ["d"], Dh = { class: "min-w-0" }, Eh = { class: "text-sm font-medium" }, Ih = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Fh = { class: "flex shrink-0 items-center gap-1.5" }, Nh = {
  key: 0,
  class: "bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5",
  role: "group",
  "aria-label": "Period"
}, Rh = ["aria-pressed", "onClick"], Uh = ["aria-expanded", "aria-label", "title"], Hh = ["aria-label"], Kh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, qh = ["d"], Gh = /* @__PURE__ */ O({
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
    const l = e, a = Ft(), r = R(l.defaultCollapsed), s = x(() => !!l.icon && !a.icon), i = x(() => {
      if (!(l.fitBody && !l.loading && !l.error))
        return { minHeight: `${l.bodyHeight}px` };
    });
    return (d, u) => (t(), n("div", {
      class: A(["bg-card flex w-full flex-col self-start rounded-lg border", r.value ? "px-4 py-2" : "gap-3 p-4"]),
      "data-slot": "chart-card",
      "data-collapsed": r.value ? "true" : "false"
    }, [
      o("div", Lh, [
        o("div", jh, [
          U(d.$slots, "icon", {}, () => [
            s.value ? (t(), n("svg", Vh, [
              o("path", {
                d: y(ce)(e.icon)
              }, null, 8, Th)
            ])) : $("", !0)
          ]),
          o("div", Dh, [
            o("p", Eh, c(e.label), 1),
            e.description ? (t(), n("p", Ih, c(e.description), 1)) : $("", !0),
            U(d.$slots, "trend")
          ])
        ]),
        o("div", Fh, [
          U(d.$slots, "actions"),
          e.periods && e.periods.length ? (t(), n("div", Nh, [
            (t(!0), n(z, null, j(e.periods, (f) => (t(), n("button", {
              key: f.value,
              type: "button",
              class: A([
                "rounded px-2 py-1 text-xs transition-colors",
                e.period === f.value ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
              ]),
              "aria-pressed": e.period === f.value,
              onClick: (g) => d.$emit("update:period", f.value)
            }, c(f.label), 11, Rh))), 128))
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
          ], 8, Uh)) : $("", !0),
          e.hideable ? (t(), n("button", {
            key: 2,
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-label": `Hide ${e.label}`,
            title: "Hide",
            onClick: u[1] || (u[1] = (f) => d.$emit("hide"))
          }, [
            (t(), n("svg", Kh, [
              o("path", {
                d: y(ce)("eye-off")
              }, null, 8, qh)
            ]))
          ], 8, Hh)) : $("", !0)
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
    ], 10, Oh));
  }
}), Wh = ["aria-pressed", "aria-label", "title"], Zh = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Jh = ["d"], Yh = {
  key: 0,
  class: "flex flex-col items-start gap-2 py-1",
  "data-slot": "shortcuts-empty"
}, Xh = {
  key: 1,
  class: "flex flex-wrap items-center gap-x-5 gap-y-2"
}, Qh = ["href"], eb = {
  class: "size-3.5 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, tb = ["d"], ab = ["aria-label", "onClick"], nb = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, lb = ["d"], ob = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, sb = ["d"], rb = {
  key: 0,
  class: "flex flex-col gap-1"
}, ib = ["onClick"], db = {
  class: "text-muted-foreground size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, ub = ["d"], cb = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, fb = /* @__PURE__ */ O({
  __name: "ShortcutsWidget",
  props: {
    items: {},
    catalog: {},
    hideable: { type: Boolean, default: !1 }
  },
  emits: ["update:items", "hide"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!1), i = R(!1), d = x(
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
      D(Gh, {
        label: "Shortcuts",
        icon: "star",
        hideable: e.hideable,
        "fit-body": !0,
        "body-height": 72,
        onHide: p[3] || (p[3] = (v) => r("hide"))
      }, {
        actions: L(() => [
          o("button", {
            type: "button",
            class: "text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors",
            "aria-pressed": s.value,
            "aria-label": s.value ? "Done editing shortcuts" : "Edit shortcuts",
            title: s.value ? "Done" : "Edit",
            onClick: p[0] || (p[0] = (v) => s.value = !s.value)
          }, [
            (t(), n("svg", Zh, [
              o("path", {
                d: y(ce)(s.value ? "check" : "pencil")
              }, null, 8, Jh)
            ]))
          ], 8, Wh)
        ]),
        default: L(() => [
          e.items.length === 0 ? (t(), n("div", Yh, [
            p[7] || (p[7] = o("p", { class: "text-muted-foreground text-sm font-normal" }, "No shortcuts yet.", -1)),
            D(ue, {
              size: "sm",
              variant: "outline",
              onClick: p[1] || (p[1] = (v) => i.value = !0)
            }, {
              default: L(() => [...p[6] || (p[6] = [
                N("Add shortcut", -1)
              ])]),
              _: 1
            })
          ])) : (t(), n("div", Xh, [
            (t(!0), n(z, null, j(e.items, (v) => (t(), n("div", {
              key: v.id,
              class: "inline-flex items-center gap-1"
            }, [
              o("a", {
                href: v.href,
                class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline"
              }, [
                (t(), n("svg", eb, [
                  o("path", {
                    d: y(ce)(v.icon)
                  }, null, 8, tb)
                ])),
                N(" " + c(v.label), 1)
              ], 8, Qh),
              s.value ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-destructive rounded p-0.5",
                "aria-label": `Remove ${v.label}`,
                onClick: (C) => u(v.id)
              }, [
                (t(), n("svg", nb, [
                  o("path", {
                    d: y(ce)("x")
                  }, null, 8, lb)
                ]))
              ], 8, ab)) : $("", !0)
            ]))), 128)),
            s.value ? (t(), n("button", {
              key: 0,
              type: "button",
              class: "text-primary inline-flex items-center gap-1.5 text-sm hover:underline",
              onClick: p[2] || (p[2] = (v) => i.value = !0)
            }, [
              (t(), n("svg", ob, [
                o("path", {
                  d: y(ce)("plus")
                }, null, 8, sb)
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
        onClose: p[5] || (p[5] = (v) => i.value = !1)
      }, {
        footer: L(() => [
          D(ue, {
            variant: "outline",
            onClick: p[4] || (p[4] = (v) => i.value = !1)
          }, {
            default: L(() => [...p[9] || (p[9] = [
              N("Cancel", -1)
            ])]),
            _: 1
          })
        ]),
        default: L(() => [
          d.value.length ? (t(), n("ul", rb, [
            (t(!0), n(z, null, j(d.value, (v) => (t(), n("li", {
              key: v.id
            }, [
              o("button", {
                type: "button",
                class: "hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm",
                onClick: (C) => f(v)
              }, [
                (t(), n("svg", db, [
                  o("path", {
                    d: y(ce)(v.icon)
                  }, null, 8, ub)
                ])),
                N(" " + c(v.label), 1)
              ], 8, ib)
            ]))), 128))
          ])) : (t(), n("p", cb, "Every catalog shortcut is already on the card."))
        ]),
        _: 1
      }, 8, ["open"])
    ], 64));
  }
}), mb = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, pb = {
  key: 0,
  class: "text-muted-foreground mt-1 text-sm"
}, vb = { class: "relative w-full max-w-xl" }, gb = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, hb = ["d"], bb = {
  key: 0,
  class: "grid grid-cols-1 gap-6 md:grid-cols-2",
  "data-slot": "directory-sections"
}, yb = ["data-slot"], xb = { class: "px-5 py-4" }, kb = { class: "mb-3 text-sm font-semibold" }, $b = { class: "grid grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))] gap-x-4 gap-y-2.5" }, wb = {
  class: "size-4 shrink-0",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Cb = ["d"], Sb = {
  key: 1,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "directory-empty"
}, ZC = /* @__PURE__ */ O({
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
      return typeof u == "string" ? u : ka(u);
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
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : y(Ge)])
    }, [
      o("header", null, [
        o("h1", mb, c(e.title), 1),
        e.description ? (t(), n("p", pb, c(e.description), 1)) : $("", !0)
      ]),
      o("div", vb, [
        (t(), n("svg", gb, [
          o("path", {
            d: y(ce)("search")
          }, null, 8, hb)
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
      d.value.length ? (t(), n("div", bb, [
        (t(!0), n(z, null, j(d.value, (g) => (t(), n("section", {
          key: g.key,
          class: "bg-card rounded-lg border",
          "data-slot": `directory-section-${g.key}`
        }, [
          o("div", xb, [
            o("h2", kb, c(g.title), 1),
            o("div", $b, [
              (t(!0), n(z, null, j(g.links, (p) => (t(), T(_e(i(p) ? "a" : r.value), {
                key: p.href + p.label,
                href: p.href,
                class: A(y(s)),
                target: i(p) ? "_blank" : void 0,
                rel: i(p) ? "noopener noreferrer" : void 0
              }, {
                default: L(() => [
                  (t(), n("svg", wb, [
                    o("path", {
                      d: y(ce)(p.icon)
                    }, null, 8, Cb)
                  ])),
                  N(" " + c(p.label), 1)
                ]),
                _: 2
              }, 1032, ["href", "class", "target", "rel"]))), 128))
            ])
          ])
        ], 8, yb))), 128))
      ])) : (t(), n("p", Sb, ' Nothing matches "' + c(a.value) + '". ', 1))
    ], 2));
  }
}), Mb = { class: "bg-card flex flex-col overflow-hidden rounded-lg border" }, Bb = { class: "flex flex-1 flex-col gap-1 p-4" }, _b = { class: "text-muted-foreground relative text-xs font-medium" }, Ab = {
  key: 1,
  class: "text-destructive relative flex h-8 items-center text-sm",
  role: "alert"
}, Pb = {
  key: 2,
  class: "relative flex h-8 items-center text-2xl font-semibold tabular-nums"
}, zb = {
  key: 4,
  class: "text-muted-foreground relative text-xs"
}, Ob = {
  key: 0,
  class: "-mb-px",
  "aria-hidden": "true"
}, JC = /* @__PURE__ */ O({
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
    return (a, r) => (t(), n("div", Mb, [
      o("div", Bb, [
        o("p", _b, c(e.label), 1),
        e.loading ? (t(), T(ze, {
          key: 0,
          variant: "number",
          class: "my-1"
        })) : e.error ? (t(), n("span", Ab, " Could not load ")) : (t(), n("span", Pb, c(l(e.value)), 1)),
        e.trend && !e.loading && !e.error ? (t(), T(Ja, {
          key: 3,
          class: "relative",
          direction: e.trend.direction,
          percentage: e.trend.percentage,
          comparison: e.comparison,
          inverted: e.inverted
        }, null, 8, ["direction", "percentage", "comparison", "inverted"])) : e.description ? (t(), n("p", zb, c(e.description), 1)) : $("", !0)
      ]),
      e.sparkline && e.sparkline.length > 1 && !e.loading && !e.error ? (t(), n("div", Ob, [
        D(St, {
          data: e.sparkline,
          height: 44,
          filled: ""
        }, null, 8, ["data"])
      ])) : $("", !0)
    ]));
  }
}), Lb = { class: "bg-card relative flex flex-col overflow-hidden rounded-lg border" }, jb = { class: "flex flex-col gap-1 p-4" }, Vb = { class: "flex items-start justify-between gap-2" }, Tb = { class: "text-sm font-medium" }, Db = {
  key: 0,
  class: "text-muted-foreground font-mono text-xs"
}, Eb = { class: "mt-1 flex flex-wrap items-center gap-2" }, Ib = {
  key: 1,
  class: "text-xl font-semibold tabular-nums"
}, Fb = {
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
    const l = e, a = x(() => l.delta === null || l.delta === 0 ? null : l.inverted ? l.delta < 0 : l.delta > 0), r = x(
      () => a.value === null ? "bg-muted text-muted-foreground" : a.value ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
    ), s = x(
      () => typeof l.value == "number" ? new Intl.NumberFormat().format(l.value) : l.value
    );
    return (i, d) => (t(), n("div", Lb, [
      o("div", jb, [
        o("div", Vb, [
          o("p", Tb, c(e.label), 1),
          U(i.$slots, "menu")
        ]),
        e.caption ? (t(), n("p", Db, c(e.caption), 1)) : $("", !0),
        o("div", Eb, [
          e.loading ? (t(), T(ze, {
            key: 0,
            variant: "number"
          })) : (t(), n("span", Ib, c(s.value), 1)),
          e.delta !== null && !e.loading ? (t(), n("span", {
            key: 2,
            class: A(["rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular-nums", r.value])
          }, c(e.delta > 0 ? "+" : "") + c(e.delta) + "% ", 3)) : $("", !0)
        ])
      ]),
      e.series && e.series.length > 1 && !e.loading ? (t(), n("div", Fb, [
        D(St, {
          data: e.series,
          color: e.color,
          height: 56,
          filled: ""
        }, null, 8, ["data", "color"])
      ])) : $("", !0)
    ]));
  }
}), Nb = { class: "relative flex flex-col gap-2" }, Rb = ["aria-label"], Ub = ["onMouseenter"], Hb = {
  key: 0,
  class: "flex flex-wrap gap-x-6 gap-y-1"
}, Kb = { class: "text-muted-foreground flex items-center gap-1.5 text-xs" }, qb = { class: "truncate" }, Gb = { class: "text-sm font-semibold tabular-nums" }, YC = /* @__PURE__ */ O({
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
        const v = Math.max(0, g.value) / s.value;
        return {
          ...g,
          color: g.color ?? a[p % a.length],
          share: v,
          // A visible sliver rather than nothing, for a non-zero value too
          // small to round to a pixel.
          width: g.value > 0 ? `max(2px, ${(v * 100).toFixed(2)}%)` : "0px"
        };
      })
    ), d = (g) => l.format ? l.format(g) : new Intl.NumberFormat().format(g), u = R(null), f = (g) => `${(g * 100).toFixed(g > 0 && g < 0.01 ? 1 : 0)}%`;
    return (g, p) => (t(), n("div", Nb, [
      o("div", {
        class: "bg-muted flex w-full overflow-hidden rounded-full",
        style: se({ height: `${e.height}px` }),
        role: "img",
        "aria-label": e.segments.map((v) => `${v.label} ${d(v.value)}`).join(", ")
      }, [
        (t(!0), n(z, null, j(i.value, (v, C) => (t(), n("span", {
          key: C,
          class: A(["h-full transition-all", [
            C === 0 ? "rounded-l-full" : "",
            C === i.value.length - 1 && !e.total ? "rounded-r-full" : ""
          ]]),
          style: se({
            width: v.width,
            background: v.color,
            opacity: u.value === null || u.value === C ? 1 : 0.4
          }),
          onMouseenter: (h) => u.value = C,
          onMouseleave: p[0] || (p[0] = (h) => u.value = null)
        }, null, 46, Ub))), 128))
      ], 12, Rb),
      e.showLegend ? (t(), n("div", Hb, [
        (t(!0), n(z, null, j(i.value, (v, C) => (t(), n("div", {
          key: C,
          class: "flex min-w-0 flex-col"
        }, [
          o("span", Kb, [
            o("span", {
              class: "size-2 shrink-0 rounded-full",
              style: se({ background: v.color })
            }, null, 4),
            o("span", qb, c(v.label), 1)
          ]),
          o("span", Gb, c(d(v.value)), 1)
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
}), Wb = {
  class: "divide-border flex flex-col divide-y",
  "data-slot": "stat-list"
}, Zb = ["data-heading"], Jb = {
  key: 1,
  class: "flex items-center justify-between gap-3 text-sm"
}, Yb = { class: "text-muted-foreground truncate" }, Xb = ["aria-label"], XC = /* @__PURE__ */ O({
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
    return (i, d) => (t(), n("div", Wb, [
      (t(!0), n(z, null, j(s.value, (u) => (t(), n("div", {
        key: u.key,
        class: "flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0",
        "data-heading": u.heading ? "true" : void 0
      }, [
        u.heading ? (t(), n("div", {
          key: 0,
          class: A(["pt-1 text-xs font-semibold tracking-wide uppercase", u.tone ? a[u.tone] : "text-muted-foreground"])
        }, c(u.label), 3)) : (t(), n("div", Jb, [
          o("span", Yb, c(u.label), 1),
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
          (t(!0), n(z, null, j(u.segments, (f, g) => (t(), n("span", {
            key: g,
            class: A(["h-full transition-all", r[f.tone ?? "neutral"]]),
            style: se({ width: f.width })
          }, null, 6))), 128))
        ], 8, Xb)) : $("", !0)
      ], 8, Zb))), 128))
    ]));
  }
}), Qb = {
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
}, e1 = {
  success: "success",
  warning: "warning",
  danger: "destructive",
  info: "info",
  neutral: "outline"
};
function t1(e) {
  return e.trim().toLowerCase().replace(/\s+/g, "-");
}
function a1(e, l) {
  return l || (e ? Qb[t1(e)] ?? "neutral" : "neutral");
}
function n1(e, l) {
  return e1[a1(e, l)];
}
const we = /* @__PURE__ */ O({
  __name: "PkStatusBadge",
  props: {
    status: { default: null },
    tone: { default: null },
    class: {}
  },
  setup(e) {
    const l = e, a = x(() => n1(l.status, l.tone));
    return (r, s) => (t(), T(qe, {
      variant: a.value,
      class: A(l.class)
    }, {
      default: L(() => [
        U(r.$slots, "default", {}, () => [
          N(c(e.status), 1)
        ])
      ]),
      _: 3
    }, 8, ["variant", "class"]));
  }
}), l1 = ["data-layout"], o1 = ["src", "alt"], s1 = {
  key: 1,
  class: "text-muted-foreground flex size-full items-center justify-center text-lg font-medium"
}, r1 = ["src"], i1 = {
  key: 3,
  class: "absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1",
  "data-slot": "catalog-dots"
}, d1 = ["onMouseenter"], u1 = { class: "flex min-w-0 flex-1 items-start justify-between gap-2" }, c1 = { class: "min-w-0" }, f1 = { class: "truncate text-sm font-medium" }, m1 = {
  key: 0,
  class: "text-muted-foreground truncate text-xs"
}, p1 = {
  key: 1,
  class: "text-muted-foreground line-clamp-2 text-xs"
}, v1 = { class: "mt-auto flex items-end justify-between gap-2 pt-1" }, g1 = { class: "min-w-0" }, h1 = {
  key: 0,
  class: "text-sm font-semibold tabular-nums"
}, b1 = {
  key: 1,
  class: "text-muted-foreground text-xs font-normal tabular-nums"
}, y1 = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, x1 = ["d"], k1 = ["aria-label"], $1 = /* @__PURE__ */ O({
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
    ), p = x(() => {
      const M = r.item.progress;
      if (!M)
        return null;
      const S = Math.max(M.total ?? 100, M.value, 1);
      return `${Math.min(100, Math.max(0, M.value / S * 100)).toFixed(2)}%`;
    }), v = x(() => u.value.length > 1 ? u.value[1] : null), C = x(
      () => (r.item.kind ?? "product") === "product" && r.item.status !== "out-of-stock"
    ), h = x(() => typeof r.item.stock != "number" ? null : `${r.item.stock} in stock`);
    function k(M) {
      M.stopPropagation(), s("cart", r.item.key);
    }
    return (M, S) => (t(), n("article", {
      "data-slot": "catalog-card",
      class: A(["bg-card hover:bg-muted/40 flex w-full cursor-pointer overflow-hidden rounded-lg border text-left transition-colors", e.layout === "list" ? "flex-row items-stretch" : "flex-col"]),
      "data-layout": e.layout,
      role: "button",
      tabindex: "0",
      onClick: S[0] || (S[0] = (B) => s("select", e.item.key)),
      onKeydown: S[1] || (S[1] = dn(he((B) => s("select", e.item.key), ["prevent"]), ["enter"])),
      onMouseleave: S[2] || (S[2] = (B) => i.value = 0)
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
        }, null, 8, o1)) : (t(), n("span", s1, c(g.value), 1)),
        e.layout === "grid" && v.value && i.value === 0 ? (t(), n("img", {
          key: 2,
          src: v.value,
          alt: "",
          loading: "lazy",
          class: "ring-background pointer-events-none absolute right-1.5 bottom-1.5 size-10 rounded-md object-cover ring-2",
          "data-slot": "catalog-peek"
        }, null, 8, r1)) : $("", !0),
        e.layout === "grid" && u.value.length > 1 ? (t(), n("div", i1, [
          (t(!0), n(z, null, j(u.value, (B, m) => (t(), n("span", {
            key: m,
            class: A(["size-1.5 rounded-full", m === i.value ? "bg-background" : "bg-background/50"]),
            onMouseenter: (b) => i.value = m
          }, null, 42, d1))), 128))
        ])) : $("", !0)
      ], 2),
      o("div", {
        class: A(["flex min-w-0 flex-1", e.layout === "list" ? "items-center gap-3 p-3" : "flex-col gap-1 p-3"])
      }, [
        o("div", u1, [
          o("div", c1, [
            o("p", f1, c(e.item.label), 1),
            e.item.caption ? (t(), n("p", m1, c(e.item.caption), 1)) : $("", !0),
            e.item.facts?.length ? (t(), n("p", p1, c(e.item.facts.join(" · ")), 1)) : $("", !0)
          ]),
          e.item.status ? (t(), T(we, {
            key: 0,
            status: e.item.status,
            tone: e.item.tone
          }, null, 8, ["status", "tone"])) : $("", !0)
        ]),
        o("div", v1, [
          o("div", g1, [
            e.item.price ? (t(), n("p", h1, c(e.item.price), 1)) : $("", !0),
            h.value ? (t(), n("p", b1, c(h.value), 1)) : $("", !0)
          ]),
          C.value ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-foreground hover:bg-muted inline-flex size-8 shrink-0 items-center justify-center rounded-md border",
            "aria-label": "Add to cart",
            "data-slot": "catalog-cart",
            onClick: k
          }, [
            (t(), n("svg", y1, [
              o("path", {
                d: y(ce)("cart")
              }, null, 8, x1)
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
            class: A(["block h-full", a[e.item.progress?.tone ?? "neutral"]]),
            style: se({ width: p.value })
          }, null, 6)
        ], 8, k1)) : $("", !0)
      ], 2)
    ], 42, l1));
  }
});
function w1(e) {
  return e === 30 ? "Per month" : e === 365 ? "Per year" : "Lifetime";
}
function C1(e) {
  return e === !0 || e === !1 ? "" : e === -1 || e === "-1" ? "Unlimited" : Array.isArray(e) ? e.join(", ") : String(e);
}
function S1(e) {
  return e === !1 || e === 0 || e === "0" || e === "" ? !1 : Array.isArray(e) ? e.length > 0 : !0;
}
const M1 = ["data-featured", "data-recommended"], B1 = { class: "flex flex-col gap-1" }, _1 = {
  key: 0,
  class: "text-muted-foreground mb-1 flex flex-wrap gap-2 text-xs font-medium"
}, A1 = { key: 0 }, P1 = { key: 1 }, z1 = { key: 2 }, O1 = { key: 3 }, L1 = { class: "text-sm font-semibold" }, j1 = { class: "flex items-baseline gap-1" }, V1 = { class: "text-3xl font-semibold tracking-tight tabular-nums" }, T1 = { class: "text-muted-foreground text-sm font-normal" }, D1 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal text-pretty"
}, E1 = { class: "text-muted-foreground mt-1 text-xs" }, I1 = { class: "flex flex-1 flex-col gap-2 text-sm" }, F1 = { class: "flex min-w-0 items-start gap-2" }, N1 = {
  key: 0,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, R1 = ["d"], U1 = {
  key: 1,
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, H1 = ["d"], K1 = { class: "capitalize" }, q1 = {
  key: 0,
  class: "text-muted-foreground max-w-[40%] shrink-0 text-end text-xs font-medium"
}, G1 = { class: "text-foreground font-medium" }, W1 = { class: "mt-auto flex gap-2 pt-2" }, Z1 = /* @__PURE__ */ O({
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
        granted: S1(p.value),
        display: C1(p.value)
      }));
    }), u = x(() => a.plan.extraPerks ?? []);
    return (f, g) => (t(), n("article", {
      class: A(["bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6", i.value ? "border-primary shadow-sm" : ""]),
      "data-slot": "plan-card",
      "data-featured": e.plan.featured ? "true" : void 0,
      "data-recommended": e.plan.recommended ? "true" : void 0
    }, [
      o("header", B1, [
        e.plan.recommended || e.plan.featured || e.plan.trial || e.plan.active === !1 ? (t(), n("p", _1, [
          e.plan.recommended ? (t(), n("span", A1, "Recommended")) : e.plan.featured ? (t(), n("span", P1, "Featured")) : $("", !0),
          e.plan.trial ? (t(), n("span", z1, "Trial")) : $("", !0),
          e.plan.active === !1 ? (t(), n("span", O1, "Inactive")) : $("", !0)
        ])) : $("", !0),
        o("h3", L1, c(e.plan.name), 1),
        o("p", j1, [
          o("span", V1, c(s.value), 1),
          o("span", T1, c(y(w1)(e.plan.days)), 1)
        ]),
        e.plan.shortDescription ? (t(), n("p", D1, c(e.plan.shortDescription), 1)) : $("", !0),
        o("p", E1, " Active seats: " + c(e.plan.activeUsers ?? 0), 1)
      ]),
      o("ul", I1, [
        (t(!0), n(z, null, j(d.value, (p) => (t(), n("li", {
          key: p.key,
          class: "flex items-start justify-between gap-3"
        }, [
          o("span", F1, [
            o("span", {
              class: A(["mt-0.5 shrink-0", p.granted ? "text-success" : "text-muted-foreground"]),
              "aria-hidden": "true"
            }, [
              p.granted ? (t(), n("svg", N1, [
                o("path", {
                  d: y(ce)("check")
                }, null, 8, R1)
              ])) : (t(), n("svg", U1, [
                o("path", {
                  d: y(ce)("x")
                }, null, 8, H1)
              ]))
            ], 2),
            o("span", K1, c(p.label), 1)
          ]),
          p.display ? (t(), n("span", q1, c(p.display), 1)) : $("", !0)
        ]))), 128)),
        (t(!0), n(z, null, j(u.value, (p, v) => (t(), n("li", {
          key: `extra-${v}`,
          class: "text-muted-foreground flex justify-between gap-3 text-sm"
        }, [
          o("span", null, c(p.key), 1),
          o("span", G1, c(p.value), 1)
        ]))), 128))
      ]),
      o("footer", W1, [
        D(ue, {
          class: "flex-1",
          variant: "default",
          size: "sm",
          onClick: g[0] || (g[0] = (p) => r("edit", e.plan.id))
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
          onClick: g[1] || (g[1] = (p) => r("delete", e.plan.id))
        }, {
          default: L(() => [...g[3] || (g[3] = [
            N(" Delete ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ], 10, M1));
  }
}), J1 = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, Y1 = {
  key: 0,
  class: "text-xl font-semibold tracking-tight sm:text-2xl"
}, X1 = {
  key: 1,
  class: "text-muted-foreground mt-1 text-sm"
}, Q1 = {
  key: 0,
  class: "text-muted-foreground rounded-lg border border-dashed px-6 py-16 text-center text-sm"
}, ey = {
  key: 1,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
}, QC = /* @__PURE__ */ O({
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
      class: A(["w-full space-y-6", e.embedded ? "" : y(Ge)]),
      "data-slot": "plan-grid"
    }, [
      o("header", J1, [
        o("div", null, [
          e.title ? (t(), n("h1", Y1, c(e.title), 1)) : $("", !0),
          e.description ? (t(), n("p", X1, c(e.description), 1)) : $("", !0)
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
      e.plans.length === 0 ? (t(), n("p", Q1, " No plans yet. Create one to offer organisations a bundle of modules and limits. ")) : (t(), n("div", ey, [
        (t(!0), n(z, null, j(e.plans, (i) => (t(), T(Z1, {
          key: i.id,
          plan: i,
          onEdit: s[1] || (s[1] = (d) => a("edit", d)),
          onDelete: s[2] || (s[2] = (d) => a("delete", d))
        }, null, 8, ["plan"]))), 128))
      ]))
    ], 2));
  }
}), ty = { class: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between" }, ay = { class: "text-xl font-semibold tracking-tight sm:text-2xl" }, ny = { class: "flex flex-col-reverse items-start gap-6 lg:flex-row" }, ly = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, oy = { class: "space-y-1.5" }, sy = { class: "space-y-1.5" }, ry = { class: "space-y-1.5" }, iy = { class: "space-y-1.5" }, dy = { class: "space-y-1.5" }, uy = { class: "flex items-center gap-3 text-sm" }, cy = { class: "flex items-center gap-3 text-sm" }, fy = { class: "flex items-center gap-3 text-sm" }, my = {
  key: 0,
  class: "space-y-1.5"
}, py = { class: "flex items-center gap-3 text-sm" }, vy = { class: "bg-card w-full flex-1 space-y-4 rounded-lg border p-5" }, gy = { class: "space-y-1.5" }, hy = ["value"], by = {
  key: 0,
  class: "flex items-center gap-3 text-sm"
}, yy = {
  key: 0,
  class: "text-muted-foreground text-xs font-normal"
}, xy = ["id", "value", "onInput"], ky = { class: "space-y-2" }, $y = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, wy = ["d"], e8 = /* @__PURE__ */ O({
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
    function d(m, b) {
      const w = i.perks?.[m]?.value;
      return w ?? b;
    }
    function u(m, b, w) {
      const P = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: b,
          overview: w ?? P?.overview ?? ""
        }
      };
    }
    function f(m, b) {
      const w = i.perks?.[m];
      i.perks = {
        ...i.perks ?? {},
        [m]: {
          value: w?.value ?? (m === "modules" ? [] : 0),
          overview: b
        }
      };
    }
    function g(m) {
      const b = m ? { ...a(), ...m } : a();
      i.id = b.id, i.name = b.name, i.shortDescription = b.shortDescription ?? "", i.description = b.description ?? "", i.days = b.days, i.price = b.price, i.featured = b.featured ?? !1, i.recommended = b.recommended ?? !1, i.trial = b.trial ?? !1, i.trialDays = b.trialDays ?? 0, i.active = b.active ?? !0, i.perks = { ...b.perks ?? {} }, i.extraPerks = [...b.extraPerks ?? []], i.perks.modules || u("modules", []);
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
        u("modules", C(m.map(String)), i.perks?.modules?.overview ?? "");
      }
    }), v = x(
      () => r.modules.map((m) => ({ value: m.key, label: m.label }))
    );
    function C(m) {
      const b = Object.fromEntries(r.modules.map((I) => [I.key, I])), w = new Set(m);
      for (const I of r.modules)
        if (!w.has(I.key))
          for (const E of I.children ?? [])
            w.delete(E);
      let P = !0;
      for (; P; ) {
        P = !1;
        for (const I of [...w])
          for (const E of b[I]?.requires ?? [])
            w.has(E) || (w.add(E), P = !0);
      }
      return [...w];
    }
    function h() {
      i.extraPerks = [...i.extraPerks ?? [], { key: "", value: "" }];
    }
    function k(m) {
      i.extraPerks = (i.extraPerks ?? []).filter((b, w) => w !== m);
    }
    function M() {
      s("save", {
        ...i,
        extraPerks: (i.extraPerks ?? []).filter((m) => m.key.trim() !== "")
      });
    }
    const S = `file:text-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`, B = `dark:bg-input/30 border-input min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] ${Re}`;
    return (m, b) => (t(), n("form", {
      class: A(["w-full space-y-6", e.embedded ? "" : y(Ge)]),
      "data-slot": "plan-editor",
      onSubmit: he(M, ["prevent"])
    }, [
      o("header", ty, [
        o("div", null, [
          o("h1", ay, c(e.mode === "edit" ? "Edit plan" : "Create plan"), 1),
          b[13] || (b[13] = o("p", { class: "text-muted-foreground mt-1 text-sm" }, " Plans are organisation-wide. Charge a recurring amount. Perks are modules and numeric limits (-1 is Unlimited). ", -1))
        ]),
        D(ue, {
          type: "button",
          variant: "outline",
          onClick: b[0] || (b[0] = (w) => s("cancel"))
        }, {
          default: L(() => [...b[14] || (b[14] = [
            N("Cancel", -1)
          ])]),
          _: 1
        })
      ]),
      o("div", ny, [
        o("section", ly, [
          b[26] || (b[26] = o("h2", { class: "font-semibold" }, "Plan details", -1)),
          o("div", oy, [
            D(Pe, { for: "plan-name" }, {
              default: L(() => [...b[15] || (b[15] = [
                N("Plan name", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-name",
              modelValue: i.name,
              "onUpdate:modelValue": b[1] || (b[1] = (w) => i.name = w),
              required: ""
            }, null, 8, ["modelValue"])
          ]),
          o("div", sy, [
            D(Pe, { for: "plan-short" }, {
              default: L(() => [...b[16] || (b[16] = [
                N("Short description (optional)", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-short",
              modelValue: i.shortDescription,
              "onUpdate:modelValue": b[2] || (b[2] = (w) => i.shortDescription = w),
              placeholder: "For an organisation getting started"
            }, null, 8, ["modelValue"])
          ]),
          o("div", ry, [
            D(Pe, { for: "plan-description" }, {
              default: L(() => [...b[17] || (b[17] = [
                N("Plan description", -1)
              ])]),
              _: 1
            }),
            pe(o("textarea", {
              id: "plan-description",
              "onUpdate:modelValue": b[3] || (b[3] = (w) => i.description = w),
              required: "",
              placeholder: "Shown on the company-wide catalogue",
              class: A(B)
            }, null, 512), [
              [Ae, i.description]
            ])
          ]),
          o("div", iy, [
            D(Pe, { for: "plan-days" }, {
              default: L(() => [...b[18] || (b[18] = [
                N("Duration", -1)
              ])]),
              _: 1
            }),
            pe(o("select", {
              id: "plan-days",
              "onUpdate:modelValue": b[4] || (b[4] = (w) => i.days = w),
              class: A(S)
            }, [...b[19] || (b[19] = [
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
          o("div", dy, [
            D(Pe, { for: "plan-price" }, {
              default: L(() => [...b[20] || (b[20] = [
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
              "onUpdate:modelValue": b[5] || (b[5] = (w) => i.price = Number(w))
            }, null, 8, ["model-value"])
          ]),
          o("label", uy, [
            D(y(Ze), {
              checked: !!i.featured,
              "onUpdate:checked": b[6] || (b[6] = (w) => i.featured = w)
            }, null, 8, ["checked"]),
            b[21] || (b[21] = N(" Featured ", -1))
          ]),
          o("label", cy, [
            D(y(Ze), {
              checked: !!i.recommended,
              "onUpdate:checked": b[7] || (b[7] = (w) => i.recommended = w)
            }, null, 8, ["checked"]),
            b[22] || (b[22] = N(" Recommended ", -1))
          ]),
          o("label", fy, [
            D(y(Ze), {
              checked: !!i.trial,
              "onUpdate:checked": b[8] || (b[8] = (w) => i.trial = w)
            }, null, 8, ["checked"]),
            b[23] || (b[23] = N(" Offer a trial ", -1))
          ]),
          i.trial ? (t(), n("div", my, [
            D(Pe, { for: "plan-trial-days" }, {
              default: L(() => [...b[24] || (b[24] = [
                N("Trial days", -1)
              ])]),
              _: 1
            }),
            D($e, {
              id: "plan-trial-days",
              "model-value": i.trialDays ?? 0,
              type: "number",
              required: "",
              "onUpdate:modelValue": b[9] || (b[9] = (w) => i.trialDays = Number(w))
            }, null, 8, ["model-value"])
          ])) : $("", !0),
          o("label", py, [
            D(y(Ze), {
              checked: i.active !== !1,
              "onUpdate:checked": b[10] || (b[10] = (w) => i.active = w)
            }, null, 8, ["checked"]),
            b[25] || (b[25] = N(" Active ", -1))
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
        o("section", vy, [
          b[33] || (b[33] = o("h2", { class: "font-semibold" }, "Plan perks", -1)),
          o("div", gy, [
            D(Pe, null, {
              default: L(() => [...b[27] || (b[27] = [
                N("Modules access", -1)
              ])]),
              _: 1
            }),
            D(Wt, {
              modelValue: p.value,
              "onUpdate:modelValue": b[11] || (b[11] = (w) => p.value = w),
              options: v.value,
              placeholder: "Select modules"
            }, null, 8, ["modelValue", "options"]),
            D(Pe, { for: "plan-modules-overview" }, {
              default: L(() => [...b[28] || (b[28] = [
                N("Overview", -1)
              ])]),
              _: 1
            }),
            o("textarea", {
              id: "plan-modules-overview",
              value: i.perks?.modules?.overview ?? "",
              class: A(B),
              onInput: b[12] || (b[12] = (w) => f(
                "modules",
                w.target.value
              ))
            }, null, 40, hy)
          ]),
          (t(!0), n(z, null, j(e.limits, (w) => (t(), n("div", {
            key: w.key,
            class: "space-y-1.5"
          }, [
            w.kind === "toggle" ? (t(), n("label", by, [
              D(y(Ze), {
                checked: !!d(w.key, !1),
                "onUpdate:checked": (P) => u(
                  w.key,
                  P,
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["checked", "onUpdate:checked"]),
              N(" " + c(w.label), 1)
            ])) : (t(), n(z, { key: 1 }, [
              D(Pe, {
                for: `plan-limit-${w.key}`
              }, {
                default: L(() => [
                  N(c(w.label), 1)
                ]),
                _: 2
              }, 1032, ["for"]),
              w.hint ? (t(), n("p", yy, c(w.hint), 1)) : $("", !0),
              D($e, {
                id: `plan-limit-${w.key}`,
                "model-value": Number(d(w.key, 0)),
                type: "number",
                step: w.step ?? 1,
                required: "",
                "onUpdate:modelValue": (P) => u(
                  w.key,
                  Number(P),
                  i.perks?.[w.key]?.overview ?? ""
                )
              }, null, 8, ["id", "model-value", "step", "onUpdate:modelValue"]),
              b[29] || (b[29] = o("p", { class: "text-muted-foreground text-xs font-normal" }, "Use -1 for Unlimited.", -1))
            ], 64)),
            D(Pe, {
              for: `plan-overview-${w.key}`
            }, {
              default: L(() => [...b[30] || (b[30] = [
                N("Overview", -1)
              ])]),
              _: 1
            }, 8, ["for"]),
            o("textarea", {
              id: `plan-overview-${w.key}`,
              value: i.perks?.[w.key]?.overview ?? "",
              class: A(B),
              onInput: (P) => f(
                w.key,
                P.target.value
              )
            }, null, 40, xy)
          ]))), 128)),
          o("div", ky, [
            b[32] || (b[32] = o("p", { class: "text-sm font-semibold" }, "Extra perks", -1)),
            (t(!0), n(z, null, j(i.extraPerks ?? [], (w, P) => (t(), n("div", {
              key: P,
              class: "flex items-center gap-2"
            }, [
              D($e, {
                modelValue: w.key,
                "onUpdate:modelValue": (I) => w.key = I,
                placeholder: "Label"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D($e, {
                modelValue: w.value,
                "onUpdate:modelValue": (I) => w.value = I,
                placeholder: "Value"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              D(ue, {
                type: "button",
                variant: "destructive",
                size: "icon",
                "aria-label": "Remove perk",
                onClick: (I) => k(P)
              }, {
                default: L(() => [
                  (t(), n("svg", $y, [
                    o("path", {
                      d: y(ce)("x")
                    }, null, 8, wy)
                  ]))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            D(ue, {
              type: "button",
              variant: "outline",
              size: "sm",
              onClick: h
            }, {
              default: L(() => [...b[31] || (b[31] = [
                N(" Add extra perk ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])
    ], 34));
  }
}), Cy = {
  key: 0,
  "data-slot": "catalog-toolbar",
  class: "flex flex-col gap-3"
}, Sy = { class: "flex flex-wrap items-center gap-2 sm:flex-nowrap" }, My = {
  key: 0,
  class: "relative min-w-0 max-w-sm flex-1"
}, By = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, _y = ["d"], Ay = {
  key: 1,
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  "data-slot": "catalog-layout",
  role: "group",
  "aria-label": "Layout"
}, Py = ["aria-pressed"], zy = ["aria-pressed"], Oy = {
  key: 0,
  class: "flex flex-col gap-2"
}, Ly = ["aria-label"], jy = {
  key: 0,
  class: "text-muted-foreground mr-1 text-xs font-medium"
}, Vy = ["aria-pressed", "onClick"], Ty = ["aria-label"], Dy = { class: "text-muted-foreground mr-1 text-xs font-medium" }, Ey = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, Iy = ["data-slot"], Fy = {
  key: 3,
  class: "flex items-center justify-between gap-3",
  "data-slot": "catalog-pagination"
}, Ny = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, Ry = { class: "flex items-center gap-2" }, Uy = ["disabled"], Hy = ["disabled"], ta = /* @__PURE__ */ O({
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
    me(s, () => v());
    function f(E) {
      const te = E.trim();
      if (te === "")
        return null;
      const H = Number(te);
      return Number.isFinite(H) ? H : null;
    }
    function g() {
      const E = {};
      for (const [te, H] of Object.entries(u))
        E[te] = { min: f(H.min), max: f(H.max) };
      return E;
    }
    function p() {
      return { query: s.value, selected: { ...d }, ranges: g() };
    }
    function v() {
      r("filter", p());
    }
    function C(E, te) {
      d[E] = d[E] === te ? null : te, v();
    }
    function h(E) {
      return u[E] ?? { min: "", max: "" };
    }
    function k(E, te, H) {
      const K = u[E] ?? { min: "", max: "" };
      u[E] = { ...K, [te]: H }, v();
    }
    function M(E) {
      E.key === "Enter" && (E.preventDefault(), r("scan", s.value.trim()));
    }
    const S = x(() => a.facets.filter((E) => (E.kind ?? "chips") === "chips")), B = x(() => a.facets.filter((E) => E.kind === "range")), m = x(
      () => a.searchable || a.facets.length > 0 || a.layoutToggle
    ), b = R(1);
    me(
      () => a.items.map((E) => E.key).join(","),
      () => {
        b.value = 1;
      }
    );
    const w = x(() => {
      const E = a.pageSize;
      return !E || E < 1 ? 1 : Math.max(1, Math.ceil(a.items.length / E));
    }), P = x(() => {
      const E = a.pageSize;
      if (!E || E < 1)
        return a.items;
      const te = (b.value - 1) * E;
      return a.items.slice(te, te + E);
    });
    function I(E) {
      b.value = Math.min(w.value, Math.max(1, E));
    }
    return (E, te) => (t(), n("div", {
      class: A(["flex flex-col gap-4", y(Ha)])
    }, [
      m.value ? (t(), n("div", Cy, [
        o("div", Sy, [
          e.searchable ? (t(), n("div", My, [
            (t(), n("svg", By, [
              o("path", {
                d: y(ce)("search")
              }, null, 8, _y)
            ])),
            D($e, {
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
          U(E.$slots, "toolbar"),
          e.layoutToggle ? (t(), n("div", Ay, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: te[1] || (te[1] = (H) => i.value = "grid")
            }, " Tiles ", 10, Py),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: te[2] || (te[2] = (H) => i.value = "list")
            }, " List ", 10, zy)
          ])) : $("", !0)
        ]),
        S.value.length || B.value.length ? (t(), n("div", Oy, [
          (t(!0), n(z, null, j(S.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key
          }, [
            H.label ? (t(), n("span", jy, c(H.label), 1)) : $("", !0),
            (t(!0), n(z, null, j(H.options ?? [], (K) => (t(), n("button", {
              key: K.value,
              type: "button",
              class: A([
                "rounded-full border px-2.5 py-1 text-xs transition-colors",
                d[H.key] === K.value ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted/60"
              ]),
              "aria-pressed": d[H.key] === K.value ? "true" : "false",
              onClick: (G) => C(H.key, K.value)
            }, c(K.label), 11, Vy))), 128))
          ], 8, Ly))), 128)),
          (t(!0), n(z, null, j(B.value, (H) => (t(), n("div", {
            key: H.key,
            class: "flex flex-wrap items-center gap-1.5",
            "aria-label": H.label ?? H.key,
            "data-slot": "catalog-range"
          }, [
            o("span", Dy, c(H.label ?? H.key), 1),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "From",
              "aria-label": `${H.label ?? H.key} from`,
              "model-value": h(H.key).min,
              "onUpdate:modelValue": (K) => k(H.key, "min", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
            te[7] || (te[7] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
            D($e, {
              type: "number",
              class: "h-8 w-24 px-2 text-xs",
              placeholder: "To",
              "aria-label": `${H.label ?? H.key} to`,
              "model-value": h(H.key).max,
              "onUpdate:modelValue": (K) => k(H.key, "max", String(K))
            }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
          ], 8, Ty))), 128))
        ])) : $("", !0)
      ])) : $("", !0),
      e.items.length === 0 ? (t(), n("p", Ey, "No matching items.")) : (t(), n("div", {
        key: 2,
        class: A(
          i.value === "list" ? "flex flex-col gap-3" : y(ef)
        ),
        "data-slot": i.value === "list" ? "catalog-list" : "catalog-grid"
      }, [
        (t(!0), n(z, null, j(P.value, (H) => (t(), T($1, {
          key: H.key,
          item: H,
          layout: i.value,
          onSelect: te[3] || (te[3] = (K) => r("select", K)),
          onCart: te[4] || (te[4] = (K) => r("cart", K))
        }, null, 8, ["item", "layout"]))), 128))
      ], 10, Iy)),
      e.pageSize && w.value > 1 ? (t(), n("div", Fy, [
        o("p", Ny, " Page " + c(b.value) + " of " + c(w.value), 1),
        o("div", Ry, [
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: b.value <= 1,
            onClick: te[5] || (te[5] = (H) => I(b.value - 1))
          }, " Previous ", 8, Uy),
          o("button", {
            type: "button",
            class: "rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40",
            disabled: b.value >= w.value,
            onClick: te[6] || (te[6] = (H) => I(b.value + 1))
          }, " Next ", 8, Hy)
        ])
      ])) : $("", !0)
    ], 2));
  }
}), Ky = ["aria-busy", "aria-label"], qy = { class: "bg-background flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3" }, Gy = { class: "min-w-0" }, Wy = { class: "text-base font-semibold" }, Zy = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, Jy = { class: "flex shrink-0 items-center gap-2" }, Yy = ["disabled"], Xy = { class: "min-h-0 flex-1 overflow-y-auto overscroll-contain" }, Qy = {
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
    const u = R(!1), f = x(() => a.width ?? io[a.size]), g = x(
      () => [Oa, a.padded ? ro : ""].filter(Boolean).join(" ")
    );
    function p(h) {
      u.value = h.target === h.currentTarget;
    }
    function v(h) {
      u.value && h.target === h.currentTarget && !a.busy && r("close"), u.value = !1;
    }
    function C(h) {
      if (!a.open)
        return;
      if (h.key === "Escape") {
        if (a.busy)
          return;
        h.stopPropagation(), r("close");
        return;
      }
      if (h.key !== "Tab" || !s.value)
        return;
      const k = s.value.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (k.length === 0)
        return;
      const M = k[0], S = k[k.length - 1];
      h.shiftKey && document.activeElement === M ? (h.preventDefault(), S.focus()) : !h.shiftKey && document.activeElement === S && (h.preventDefault(), M.focus());
    }
    return me(
      () => a.open,
      async (h) => {
        if (h) {
          i = document.activeElement, d = document.body.style.overflow, document.body.style.overflow = "hidden", document.addEventListener("keydown", C), await Te(), s.value?.querySelector("input, button, [tabindex]")?.focus();
          return;
        }
        document.body.style.overflow = d, document.removeEventListener("keydown", C), i?.focus?.(), i = null;
      }
    ), ke(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = d;
    }), (h, k) => (t(), T(Qe, { to: "body" }, [
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
            onPointerup: v
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
            class: A(["bg-background fixed inset-y-0 z-50 flex h-dvh max-h-dvh max-w-full flex-col shadow-2xl", [f.value, e.side === "left" ? "left-0 border-r" : "right-0 border-l"]]),
            role: "dialog",
            "aria-modal": "true",
            "aria-busy": e.busy ? "true" : void 0,
            "aria-label": e.title
          }, [
            o("header", qy, [
              o("div", Gy, [
                o("h2", Wy, c(e.title), 1),
                e.description ? (t(), n("p", Zy, c(e.description), 1)) : $("", !0)
              ]),
              o("div", Jy, [
                U(h.$slots, "header-actions"),
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
                ])], 8, Yy)
              ])
            ]),
            o("div", Xy, [
              o("div", {
                class: A(g.value)
              }, [
                U(h.$slots, "default")
              ], 2)
            ]),
            h.$slots.footer ? (t(), n("footer", Qy, [
              U(h.$slots, "footer")
            ])) : $("", !0)
          ], 10, Ky)) : $("", !0)
        ]),
        _: 3
      }, 8, ["enter-from-class", "leave-to-class"])
    ]));
  }
});
function Ee() {
  return { query: "", selected: {}, ranges: {} };
}
function ex(e, l) {
  const a = e.metrics?.[l];
  if (typeof a == "number" && Number.isFinite(a))
    return a;
  const r = e.facets?.[l];
  if (r == null || r === "")
    return null;
  const s = Number(r);
  return Number.isFinite(s) ? s : null;
}
function tx(e, l) {
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
    if (!tx(ex(e, r), s))
      return !1;
  return !0;
}
function ax(e, l) {
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
const nx = { class: "flex flex-col gap-6" }, lx = {
  key: 0,
  class: "flex flex-col gap-1.5"
}, ox = { class: "text-sm font-semibold" }, sx = { class: "flex flex-wrap items-center gap-1.5" }, rx = ["aria-pressed", "onClick"], ix = { class: "text-sm font-semibold" }, dx = { class: "flex flex-wrap items-center gap-1.5" }, ux = { key: 0 }, Ya = /* @__PURE__ */ O({
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
    const a = e, r = l, s = R(""), i = it({}), d = it({}), u = x(
      () => a.facets.filter((w) => (w.kind ?? "chips") === "chips")
    ), f = x(() => a.facets.filter((w) => w.kind === "range"));
    function g(w) {
      return w == null ? "" : String(w);
    }
    function p() {
      s.value = a.applied.query ?? "";
      for (const w of Object.keys(i))
        delete i[w];
      for (const [w, P] of Object.entries(a.applied.selected ?? {}))
        i[w] = P;
      for (const w of Object.keys(d))
        delete d[w];
      for (const [w, P] of Object.entries(a.applied.ranges ?? {}))
        d[w] = { min: g(P.min), max: g(P.max) };
    }
    me(
      () => a.open,
      (w) => {
        w && p();
      }
    );
    function v(w) {
      const P = w.trim();
      if (P === "")
        return null;
      const I = Number(P);
      return Number.isFinite(I) ? I : null;
    }
    function C() {
      const w = {};
      for (const [P, I] of Object.entries(d))
        w[P] = { min: v(I.min), max: v(I.max) };
      return w;
    }
    function h() {
      return {
        query: a.hideSearch ? a.applied.query : s.value,
        selected: { ...i },
        ranges: C()
      };
    }
    const k = x(() => {
      let w = a.hideSearch || s.value.trim() === "" ? 0 : 1;
      for (const P of Object.values(i))
        P && (w += 1);
      for (const P of Object.values(C()))
        (P.min !== null || P.max !== null) && (w += 1);
      return w;
    });
    function M(w, P) {
      i[w] = i[w] === P ? null : P;
    }
    function S(w) {
      return d[w] ?? { min: "", max: "" };
    }
    function B(w, P, I) {
      const E = d[w] ?? { min: "", max: "" };
      d[w] = { ...E, [P]: I };
    }
    function m() {
      r("apply", h());
    }
    function b() {
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
    return (w, P) => (t(), T(aa, {
      open: e.open,
      title: e.title,
      description: e.description || (e.hideSearch ? "Category and stock for this list" : "Search, categories and ranges for this list"),
      size: "sm",
      onClose: P[2] || (P[2] = (I) => r("close"))
    }, {
      footer: L(() => [
        o("button", {
          type: "button",
          class: "text-muted-foreground mr-auto text-xs hover:underline",
          onClick: b
        }, " Reset all "),
        D(ue, {
          variant: "outline",
          size: "sm",
          onClick: P[1] || (P[1] = (I) => r("close"))
        }, {
          default: L(() => [...P[5] || (P[5] = [
            N("Cancel", -1)
          ])]),
          _: 1
        }),
        D(ue, {
          size: "sm",
          onClick: m
        }, {
          default: L(() => [
            P[6] || (P[6] = N(" Apply", -1)),
            k.value ? (t(), n("span", ux, " (" + c(k.value) + ")", 1)) : $("", !0)
          ]),
          _: 1
        })
      ]),
      default: L(() => [
        o("div", nx, [
          e.hideSearch ? $("", !0) : (t(), n("label", lx, [
            P[3] || (P[3] = o("span", { class: "text-sm font-semibold" }, "Search", -1)),
            D($e, {
              modelValue: s.value,
              "onUpdate:modelValue": P[0] || (P[0] = (I) => s.value = I),
              type: "search",
              placeholder: e.searchPlaceholder,
              "aria-label": e.searchPlaceholder
            }, null, 8, ["modelValue", "placeholder", "aria-label"])
          ])),
          (t(!0), n(z, null, j(u.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", ox, c(I.label ?? I.key), 1),
            o("div", sx, [
              (t(!0), n(z, null, j(I.options ?? [], (E) => (t(), n("button", {
                key: E.value,
                type: "button",
                class: A([
                  "rounded-full border px-2.5 py-1 text-xs transition-colors",
                  i[I.key] === E.value ? "border-foreground bg-foreground text-background" : "bg-background text-foreground hover:bg-muted/60"
                ]),
                "aria-pressed": i[I.key] === E.value ? "true" : "false",
                onClick: (te) => M(I.key, E.value)
              }, c(E.label), 11, rx))), 128))
            ])
          ]))), 128)),
          (t(!0), n(z, null, j(f.value, (I) => (t(), n("section", {
            key: I.key,
            class: "flex flex-col gap-2"
          }, [
            o("h3", ix, c(I.label ?? I.key), 1),
            o("div", dx, [
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "From",
                "aria-label": `${I.label ?? I.key} from`,
                "model-value": S(I.key).min,
                "onUpdate:modelValue": (E) => B(I.key, "min", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"]),
              P[4] || (P[4] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "to", -1)),
              D($e, {
                type: "number",
                class: "h-8 w-24 px-2 text-xs",
                placeholder: "To",
                "aria-label": `${I.label ?? I.key} to`,
                "model-value": S(I.key).max,
                "onUpdate:modelValue": (E) => B(I.key, "max", String(E))
              }, null, 8, ["aria-label", "model-value", "onUpdate:modelValue"])
            ])
          ]))), 128))
        ])
      ]),
      _: 1
    }, 8, ["open", "title", "description"]));
  }
}), cx = ["aria-disabled"], fx = ["disabled"], mx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, px = ["d"], vx = {
  class: "min-w-6 px-1 text-center text-sm tabular-nums",
  "aria-live": "polite"
}, gx = ["disabled"], hx = {
  class: "size-3.5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, bx = ["d"], yx = /* @__PURE__ */ O({
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
        (t(), n("svg", mx, [
          o("path", {
            d: y(ce)("minus")
          }, null, 8, px)
        ]))
      ], 8, fx),
      o("span", vx, c(a.value), 1),
      o("button", {
        type: "button",
        class: "hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40",
        disabled: e.disabled || i.value,
        "aria-label": "Increase quantity",
        onClick: f[1] || (f[1] = (g) => d(1))
      }, [
        (t(), n("svg", hx, [
          o("path", {
            d: y(ce)("plus")
          }, null, 8, bx)
        ]))
      ], 8, gx)
    ], 8, cx));
  }
}), xx = { class: "divide-border flex flex-col divide-y" }, kx = { class: "min-w-0" }, $x = { class: "truncate text-sm font-medium" }, wx = {
  key: 0,
  class: "text-muted-foreground mt-0.5 truncate text-xs"
}, Cx = { class: "flex shrink-0 items-center gap-2 text-sm" }, Sx = {
  key: 1,
  class: "text-muted-foreground tabular-nums"
}, Mx = {
  key: 2,
  class: "font-medium tabular-nums"
}, Bx = ["aria-label", "onClick"], _x = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "aria-hidden": "true"
}, Ax = ["d"], Px = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", xx, [
      (t(!0), n(z, null, j(e.items, (d) => (t(), n("div", {
        key: d.key,
        class: "flex items-start justify-between gap-3 py-2.5 first:pt-0 last:pb-0"
      }, [
        o("div", kx, [
          o("p", $x, c(d.label), 1),
          d.detail ? (t(), n("p", wx, c(d.detail), 1)) : $("", !0)
        ]),
        o("div", Cx, [
          e.editable ? (t(), T(yx, {
            key: 0,
            "model-value": r(d),
            "onUpdate:modelValue": (u) => a("qty", d.key, u)
          }, null, 8, ["model-value", "onUpdate:modelValue"])) : d.qty !== null && d.qty !== void 0 && d.qty !== "" ? (t(), n("span", Sx, " ×" + c(d.qty), 1)) : $("", !0),
          d.amount ? (t(), n("span", Mx, c(d.amount), 1)) : $("", !0),
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
            (t(), n("svg", _x, [
              o("path", {
                d: y(ce)("trash")
              }, null, 8, Ax)
            ]))
          ], 8, Bx)) : $("", !0)
        ])
      ]))), 128))
    ]));
  }
}), zx = {
  "data-slot": "cart-panel",
  class: "bg-card flex flex-col overflow-hidden rounded-lg border"
}, Ox = { class: "border-b px-4 py-3" }, Lx = { class: "text-sm font-medium" }, jx = { class: "flex-1 px-4 py-3" }, Vx = {
  key: 0,
  class: "text-muted-foreground py-8 text-center text-sm",
  "data-slot": "cart-empty"
}, Tx = { class: "text-foreground block font-medium" }, Dx = { class: "mt-1 block" }, Ex = {
  key: 0,
  class: "flex flex-col gap-2 border-t px-4 py-3"
}, Ix = {
  key: 0,
  class: "flex items-center justify-between text-sm"
}, Fx = { class: "tabular-nums" }, Nx = {
  key: 1,
  class: "flex items-center justify-between text-sm",
  "data-slot": "cart-discount"
}, Rx = { class: "text-muted-foreground" }, Ux = {
  key: 0,
  class: "tabular-nums"
}, Hx = {
  key: 2,
  class: "flex items-center justify-between text-sm"
}, Kx = { class: "text-muted-foreground" }, qx = { class: "tabular-nums" }, Gx = {
  key: 3,
  class: "flex items-center justify-between text-sm font-semibold"
}, Wx = { class: "tabular-nums" }, Zx = {
  key: 4,
  class: "pt-1"
}, Jx = /* @__PURE__ */ O({
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
    return (r, s) => (t(), n("aside", zx, [
      o("header", Ox, [
        o("h2", Lx, c(e.title), 1)
      ]),
      o("div", jx, [
        e.items.length === 0 ? (t(), n("p", Vx, [
          o("span", Tx, c(e.emptyTitle), 1),
          o("span", Dx, c(e.emptyDescription), 1)
        ])) : (t(), T(Px, {
          key: 1,
          items: e.items,
          editable: "",
          onQty: s[0] || (s[0] = (i, d) => a("qty", i, d)),
          onRemove: s[1] || (s[1] = (i) => a("remove", i))
        }, null, 8, ["items"]))
      ]),
      e.items.length > 0 ? (t(), n("footer", Ex, [
        e.subtotal ? (t(), n("div", Ix, [
          s[2] || (s[2] = o("span", { class: "text-muted-foreground" }, "Subtotal", -1)),
          o("span", Fx, c(e.subtotal), 1)
        ])) : $("", !0),
        e.discount || r.$slots.discount ? (t(), n("div", Nx, [
          o("span", Rx, c(e.discountLabel), 1),
          e.discount ? (t(), n("span", Ux, c(e.discount), 1)) : $("", !0),
          U(r.$slots, "discount")
        ])) : $("", !0),
        e.tax ? (t(), n("div", Hx, [
          o("span", Kx, c(e.taxLabel), 1),
          o("span", qx, c(e.tax), 1)
        ])) : $("", !0),
        e.total ? (t(), n("div", Gx, [
          s[3] || (s[3] = o("span", null, "Total", -1)),
          o("span", Wx, c(e.total), 1)
        ])) : $("", !0),
        r.$slots.pay ? (t(), n("div", Zx, [
          U(r.$slots, "pay")
        ])) : $("", !0)
      ])) : $("", !0)
    ]));
  }
}), Yx = {
  "data-slot": "catalog-till",
  class: "grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]"
}, Xx = { class: "flex flex-col gap-4" }, Qx = { class: "flex flex-wrap items-start justify-between gap-3" }, e0 = { class: "flex items-center gap-2" }, t0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, t8 = /* @__PURE__ */ O({
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
      () => a.items.filter((H) => na(H, s.value))
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
    function v(H) {
      return H ? a.parsePrice(H) : 0;
    }
    function C(H, K, G) {
      return {
        ...H,
        qty: K,
        amount: a.formatMoney(G * K)
      };
    }
    function h(H) {
      const K = ax(a.items, H);
      K && k(K.key);
    }
    function k(H) {
      const K = a.items.find((ae) => ae.key === H);
      if (!K || K.status === "out-of-stock")
        return;
      u.value = !1;
      const G = v(K);
      if (d.value.find((ae) => ae.key === H)) {
        d.value = d.value.map(
          (ae) => ae.key === H ? C(ae, Number(ae.qty ?? 1) + 1, G) : ae
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
          amount: a.formatMoney(G)
        }
      ];
    }
    function M(H, K) {
      const G = a.items.find((ae) => ae.key === H), oe = v(G);
      d.value = d.value.map(
        (ae) => ae.key === H ? C(ae, K, oe) : ae
      );
    }
    function S(H) {
      d.value = d.value.filter((K) => K.key !== H);
    }
    const B = x(
      () => d.value.reduce((H, K) => {
        const G = a.items.find((oe) => oe.key === K.key);
        return H + v(G) * Number(K.qty ?? 1);
      }, 0)
    ), m = x(
      () => a.discountRate > 0 ? Math.round(B.value * a.discountRate) : 0
    ), b = x(
      () => Math.round((B.value - m.value) * a.taxRate)
    ), w = x(
      () => d.value.length ? a.formatMoney(B.value) : null
    ), P = x(
      () => d.value.length && m.value > 0 ? `−${a.formatMoney(m.value)}` : null
    ), I = x(
      () => d.value.length && a.taxRate > 0 ? a.formatMoney(b.value) : null
    ), E = x(
      () => d.value.length ? a.formatMoney(
        B.value - m.value + b.value
      ) : null
    );
    function te() {
      u.value = !0, r("pay", d.value);
    }
    return (H, K) => (t(), n(z, null, [
      o("div", Yx, [
        o("section", Xx, [
          o("div", Qx, [
            D(De, {
              variant: "small",
              title: e.shelfTitle,
              description: e.shelfDescription ?? void 0
            }, null, 8, ["title", "description"]),
            o("div", e0, [
              y($t)(s.value) ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "text-muted-foreground hover:text-foreground text-xs hover:underline",
                onClick: K[0] || (K[0] = (G) => s.value = {
                  ...y(Ee)(),
                  query: s.value.query
                })
              }, " Clear ")) : $("", !0),
              e.facets.length > 0 ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "relative inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
                onClick: K[1] || (K[1] = (G) => i.value = !0)
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
                y($t)(s.value) ? (t(), n("span", t0, " on ")) : $("", !0)
              ])) : $("", !0)
            ])
          ]),
          D(ta, {
            searchable: "",
            autofocus: "",
            "search-placeholder": e.searchPlaceholder,
            items: f.value,
            onFilter: g,
            onSelect: K[2] || (K[2] = (G) => r("select", G)),
            onCart: k,
            onScan: h
          }, null, 8, ["search-placeholder", "items"])
        ]),
        D(Jx, {
          class: "lg:sticky lg:top-4",
          title: e.cartTitle,
          items: d.value,
          subtotal: w.value,
          "discount-label": e.discountLabel,
          discount: P.value,
          "tax-label": e.taxLabel,
          tax: I.value,
          total: E.value,
          onQty: M,
          onRemove: S
        }, {
          pay: L(() => [
            U(H.$slots, "pay", {
              cart: d.value,
              paid: u.value,
              pay: te
            }, () => [
              D(ue, {
                class: "w-full",
                disabled: d.value.length === 0,
                onClick: te
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
      D(Ya, {
        open: i.value,
        title: "Filter shelf",
        "hide-search": "",
        facets: e.facets,
        applied: s.value,
        onClose: K[3] || (K[3] = (G) => i.value = !1),
        onApply: p,
        onReset: K[4] || (K[4] = (G) => s.value = { ...y(Ee)(), query: s.value.query })
      }, null, 8, ["open", "facets", "applied"])
    ], 64));
  }
}), a0 = {
  key: 0,
  class: "flex flex-col gap-5"
}, n0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg" }, l0 = ["src", "alt"], o0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, s0 = ["src"], r0 = { class: "flex items-start justify-between gap-3" }, i0 = { class: "text-lg font-semibold tabular-nums" }, d0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, u0 = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, c0 = { class: "grid grid-cols-2 gap-3" }, f0 = { class: "flex flex-col gap-2" }, m0 = { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, a8 = /* @__PURE__ */ O({
  __name: "CatalogInspect",
  props: {
    open: { type: Boolean },
    item: {}
  },
  emits: ["close", "cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(p) {
      let v = 0;
      for (const C of p)
        v = v * 31 + C.charCodeAt(0) >>> 0;
      return v;
    }
    function i(p, v) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((h, k) => ({
        label: h,
        value: Math.max(0, Math.round(p + Math.sin(k + v) * p * 0.18))
      }));
    }
    const d = x(() => a.item?.kind === "unit"), u = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const v = p.stock ?? p.progress?.value ?? p.metrics?.price ?? p.metrics?.rent ?? 12;
      return i(Number(v) || 12, s(p.key) % 7);
    }), f = x(() => {
      const p = a.item;
      if (!p)
        return [];
      const v = p.progress?.value ?? (p.status === "occupied" ? 80 : 20);
      return i(Number(v) || 20, s(p.key) % 5 + 1);
    }), g = x(
      () => !!a.item && !d.value && a.item?.status !== "out-of-stock"
    );
    return (p, v) => (t(), T(aa, {
      open: e.open,
      title: e.item?.label ?? "Item",
      description: e.item?.caption ?? e.item?.sku ?? null,
      size: "md",
      onClose: v[1] || (v[1] = (C) => r("close"))
    }, rt({
      default: L(() => [
        e.item ? (t(), n("div", a0, [
          o("div", n0, [
            e.item.image ? (t(), n("img", {
              key: 0,
              src: e.item.image,
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, l0)) : $("", !0)
          ]),
          e.item.images?.length ? (t(), n("div", o0, [
            (t(!0), n(z, null, j(e.item.images, (C, h) => (t(), n("img", {
              key: h,
              src: C,
              alt: "",
              class: "size-16 shrink-0 rounded-md object-cover"
            }, null, 8, s0))), 128))
          ])) : $("", !0),
          o("div", r0, [
            o("div", null, [
              o("p", i0, c(e.item.price), 1),
              typeof e.item.stock == "number" ? (t(), n("p", d0, c(e.item.stock) + " in stock ", 1)) : $("", !0)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          e.item.facts?.length ? (t(), n("p", u0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("div", c0, [
            D(kt, {
              label: d.value ? "Occupancy" : "Stock",
              value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
              series: d.value ? f.value : u.value
            }, null, 8, ["label", "value", "series"]),
            D(kt, {
              label: "Price",
              value: e.item.price ?? "-",
              series: u.value
            }, null, 8, ["value", "series"])
          ]),
          o("div", f0, [
            o("p", m0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
            D(St, {
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
            onClick: v[0] || (v[0] = (C) => r("cart", e.item.key))
          }, " Add to cart ")
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["open", "title", "description"]));
  }
}), p0 = { class: "flex flex-col gap-10" }, v0 = { class: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" }, g0 = { class: "flex flex-col gap-3" }, h0 = { class: "bg-muted aspect-[4/3] overflow-hidden rounded-lg border" }, b0 = ["src", "alt"], y0 = {
  key: 0,
  class: "flex gap-2 overflow-x-auto"
}, x0 = ["aria-label", "aria-pressed", "onClick"], k0 = ["src"], $0 = { class: "flex flex-col gap-5" }, w0 = { class: "flex flex-wrap items-start justify-between gap-3" }, C0 = { class: "min-w-0" }, S0 = { class: "text-2xl font-semibold tracking-tight" }, M0 = { class: "text-muted-foreground mt-1 text-sm" }, B0 = { class: "text-2xl font-semibold tabular-nums" }, _0 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, A0 = { class: "grid grid-cols-2 gap-3 text-sm" }, P0 = {
  key: 0,
  class: "rounded-lg border p-3"
}, z0 = { class: "mt-1 font-medium" }, O0 = { class: "rounded-lg border p-3" }, L0 = { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, j0 = { class: "mt-1 font-medium" }, V0 = { class: "flex flex-col gap-4" }, T0 = { class: "grid gap-4 sm:grid-cols-2" }, D0 = { class: "bg-card rounded-lg border p-4" }, E0 = { class: "mb-3 text-sm font-medium" }, I0 = /* @__PURE__ */ O({
  __name: "CatalogItemDetail",
  props: {
    item: {}
  },
  emits: ["cart"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function s(h) {
      let k = 0;
      for (const M of h)
        k = k * 31 + M.charCodeAt(0) >>> 0;
      return k;
    }
    function i(h, k) {
      return ["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((S, B) => ({
        label: S,
        value: Math.max(0, Math.round(h + Math.sin(B + k) * h * 0.18))
      }));
    }
    const d = x(() => a.item.kind === "unit"), u = x(() => {
      const h = [a.item.image, ...a.item.images ?? []].filter(
        (k) => typeof k == "string" && k !== ""
      );
      return [...new Set(h)];
    }), f = R(0), g = x(() => {
      const h = a.item.stock ?? a.item.progress?.value ?? a.item.metrics?.price ?? a.item.metrics?.rent ?? 12;
      return i(Number(h) || 12, s(a.item.key) % 7);
    }), p = x(() => {
      const h = a.item.progress?.value ?? (a.item.status === "occupied" ? 80 : 20);
      return i(Number(h) || 20, s(a.item.key) % 5 + 1);
    }), v = x(() => d.value ? p.value : g.value), C = x(() => !d.value && a.item.status !== "out-of-stock");
    return (h, k) => (t(), n("div", p0, [
      o("div", v0, [
        o("div", g0, [
          o("div", h0, [
            u.value[f.value] ? (t(), n("img", {
              key: 0,
              src: u.value[f.value],
              alt: e.item.label,
              class: "size-full object-cover"
            }, null, 8, b0)) : $("", !0)
          ]),
          u.value.length > 1 ? (t(), n("div", y0, [
            (t(!0), n(z, null, j(u.value, (M, S) => (t(), n("button", {
              key: M,
              type: "button",
              class: A(["size-16 shrink-0 overflow-hidden rounded-md border", S === f.value ? "ring-2 ring-foreground" : "opacity-80"]),
              "aria-label": `Photo ${S + 1}`,
              "aria-pressed": S === f.value ? "true" : "false",
              onClick: (B) => f.value = S
            }, [
              o("img", {
                src: M,
                alt: "",
                class: "size-full object-cover"
              }, null, 8, k0)
            ], 10, x0))), 128))
          ])) : $("", !0)
        ]),
        o("div", $0, [
          o("div", w0, [
            o("div", C0, [
              o("h1", S0, c(e.item.label), 1),
              o("p", M0, c(e.item.caption ?? e.item.sku), 1)
            ]),
            e.item.status ? (t(), T(we, {
              key: 0,
              status: e.item.status,
              tone: e.item.tone
            }, null, 8, ["status", "tone"])) : $("", !0)
          ]),
          o("p", B0, c(e.item.price), 1),
          e.item.facts?.length ? (t(), n("p", _0, c(e.item.facts.join(" · ")), 1)) : $("", !0),
          o("dl", A0, [
            e.item.sku ? (t(), n("div", P0, [
              k[1] || (k[1] = o("dt", { class: "text-muted-foreground text-xs font-medium tracking-wide uppercase" }, " SKU ", -1)),
              o("dd", z0, c(e.item.sku), 1)
            ])) : $("", !0),
            o("div", O0, [
              o("dt", L0, c(d.value ? "Occupancy" : "Stock"), 1),
              o("dd", j0, c(d.value ? `${e.item.progress?.value ?? 0}%` : `${e.item.stock ?? e.item.progress?.value ?? 0} in stock`), 1)
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
      o("section", V0, [
        k[2] || (k[2] = o("h2", { class: "text-sm font-semibold tracking-wide text-muted-foreground uppercase" }, " Analytics ", -1)),
        o("div", T0, [
          D(kt, {
            label: d.value ? "Occupancy" : "Stock",
            value: d.value ? `${e.item.progress?.value ?? 0}%` : String(e.item.stock ?? e.item.progress?.value ?? 0),
            series: v.value
          }, null, 8, ["label", "value", "series"]),
          D(kt, {
            label: "Price",
            value: e.item.price ?? "-",
            series: g.value
          }, null, 8, ["value", "series"])
        ]),
        o("div", D0, [
          o("p", E0, c(d.value ? "Occupancy, last 6 months" : "Stock movement, last 6 months"), 1),
          D(ug, {
            data: v.value,
            type: "area",
            height: 220
          }, null, 8, ["data"])
        ])
      ])
    ]));
  }
}), F0 = ["href"], n8 = /* @__PURE__ */ O({
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
      class: A(["flex w-full flex-col gap-8", e.embedded ? "" : y(Ge)])
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
      ], 8, F0),
      D(I0, {
        item: e.item,
        onCart: s[0] || (s[0] = (i) => a("cart", i))
      }, null, 8, ["item"])
    ], 2));
  }
}), N0 = {
  key: 0,
  class: "inline-flex w-fit rounded-md border",
  role: "tablist",
  "aria-label": "Catalog section"
}, R0 = ["aria-selected", "onClick"], U0 = {
  class: "flex flex-wrap items-center gap-2 sm:flex-nowrap",
  "data-slot": "catalog-page-toolbar"
}, H0 = {
  key: 0,
  class: "bg-primary text-primary-foreground ml-0.5 rounded-full px-1.5 text-[10px] font-semibold"
}, K0 = {
  class: "ml-auto inline-flex shrink-0 rounded-md border",
  role: "group",
  "aria-label": "Layout"
}, q0 = ["aria-pressed"], G0 = ["aria-pressed"], l8 = /* @__PURE__ */ O({
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
    ), p = x(
      () => g.value ? f(g.value.key) : Ee()
    ), v = x(() => {
      const M = g.value;
      return M ? M.items.filter((S) => na(S, f(M.key))) : [];
    });
    function C(M) {
      const S = g.value?.key;
      S && (d.value = {
        ...d.value,
        [S]: { ...f(S), query: M }
      });
    }
    function h() {
      const M = g.value?.key;
      M && (d.value = { ...d.value, [M]: Ee() });
    }
    function k(M) {
      const S = g.value?.key;
      S && (d.value = { ...d.value, [S]: M }, u.value = !1);
    }
    return (M, S) => (t(), n(z, null, [
      o("div", {
        class: A(["flex w-full flex-col gap-8", e.embedded ? "" : y(Ge)])
      }, [
        D(De, {
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["title", "description"]),
        e.tabs.length > 1 ? (t(), n("div", N0, [
          (t(!0), n(z, null, j(e.tabs, (B) => (t(), n("button", {
            key: B.key,
            type: "button",
            class: A([
              "px-3 py-1.5 text-sm transition-colors",
              s.value === B.key ? "bg-foreground text-background" : "hover:bg-muted/60"
            ]),
            role: "tab",
            "aria-selected": s.value === B.key ? "true" : "false",
            onClick: (m) => s.value = B.key
          }, c(B.label), 11, R0))), 128))
        ])) : $("", !0),
        o("div", U0, [
          D($e, {
            class: "min-w-0 w-full flex-1 sm:max-w-xs",
            "model-value": p.value.query,
            type: "search",
            placeholder: g.value?.searchPlaceholder ?? "Search…",
            "aria-label": g.value?.searchPlaceholder ?? "Search",
            "onUpdate:modelValue": S[0] || (S[0] = (B) => C(String(B)))
          }, null, 8, ["model-value", "placeholder", "aria-label"]),
          y($t)(p.value) ? (t(), n("button", {
            key: 0,
            type: "button",
            class: "text-muted-foreground hover:text-foreground shrink-0 text-xs hover:underline",
            onClick: h
          }, " Clear ")) : $("", !0),
          (g.value?.facets ?? []).length > 0 ? (t(), n("button", {
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
            y($t)(p.value) ? (t(), n("span", H0, " on ")) : $("", !0)
          ])) : $("", !0),
          o("div", K0, [
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "grid" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "grid" ? "true" : "false",
              "aria-label": "Grid",
              onClick: S[2] || (S[2] = (B) => i.value = "grid")
            }, " Tiles ", 10, q0),
            o("button", {
              type: "button",
              class: A([
                "px-2.5 py-1.5 text-xs transition-colors",
                i.value === "list" ? "bg-foreground text-background" : "hover:bg-muted/60"
              ]),
              "aria-pressed": i.value === "list" ? "true" : "false",
              "aria-label": "List",
              onClick: S[3] || (S[3] = (B) => i.value = "list")
            }, " List ", 10, G0)
          ])
        ]),
        D(ta, {
          layout: i.value,
          "onUpdate:layout": S[4] || (S[4] = (B) => i.value = B),
          "page-size": e.pageSize,
          items: v.value,
          onSelect: S[5] || (S[5] = (B) => r("select", B)),
          onCart: S[6] || (S[6] = (B) => r("cart", B))
        }, null, 8, ["layout", "page-size", "items"])
      ], 2),
      D(Ya, {
        open: u.value,
        title: g.value?.filterTitle ?? "Filters",
        "search-placeholder": g.value?.searchPlaceholder ?? "Search…",
        facets: g.value?.facets ?? [],
        applied: p.value,
        onClose: S[7] || (S[7] = (B) => u.value = !1),
        onApply: k,
        onReset: h
      }, null, 8, ["open", "title", "search-placeholder", "facets", "applied"])
    ], 64));
  }
}), W0 = { class: "flex flex-col gap-4" }, Z0 = { class: "flex flex-col gap-4" }, o8 = /* @__PURE__ */ O({
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
      () => a.cards.filter((d) => na(d, s.value))
    );
    return (d, u) => (t(), n("div", {
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : y(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", W0, [
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
          onFilter: u[0] || (u[0] = (f) => s.value = f),
          onSelect: u[1] || (u[1] = (f) => r("select", f)),
          onCart: u[2] || (u[2] = (f) => r("cart", f))
        }, null, 8, ["search-placeholder", "facets", "items"])
      ]),
      o("section", Z0, [
        D(De, {
          variant: "small",
          title: e.tableTitle,
          description: e.tableDescription ?? void 0
        }, null, 8, ["title", "description"]),
        D(oo, {
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
}), J0 = {
  class: "flex flex-col gap-2",
  "data-slot": "signature-pad"
}, Y0 = { class: "text-sm font-medium" }, X0 = ["width", "height", "aria-label"], Q0 = { class: "flex items-center gap-2" }, ek = /* @__PURE__ */ O({
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
      const B = S.getBoundingClientRect(), m = S.width / B.width, b = S.height / B.height;
      return {
        x: (M.clientX - B.left) * m,
        y: (M.clientY - B.top) * b
      };
    }
    function g(M) {
      a.disabled || (i.value = !0, d = f(M), s.value?.setPointerCapture(M.pointerId));
    }
    function p(M) {
      if (!i.value || a.disabled)
        return;
      const S = u(), B = f(M);
      !S || !B || !d || (S.strokeStyle = "#111827", S.lineWidth = 2.4, S.lineCap = "round", S.lineJoin = "round", S.beginPath(), S.moveTo(d.x, d.y), S.lineTo(B.x, B.y), S.stroke(), d = B);
    }
    function v() {
      i.value = !1, d = null;
    }
    function C() {
      const M = s.value, S = u();
      !M || !S || (S.clearRect(0, 0, M.width, M.height), r("clear"));
    }
    function h() {
      const M = s.value;
      M && r("save", M.toDataURL("image/png"));
    }
    function k() {
      const M = s.value, S = u();
      !M || !S || (S.fillStyle = "#ffffff", S.fillRect(0, 0, M.width, M.height));
    }
    return ve(k), ke(() => {
      i.value = !1;
    }), (M, S) => (t(), n("div", J0, [
      o("p", Y0, c(e.label), 1),
      o("canvas", {
        ref_key: "canvas",
        ref: s,
        width: e.width,
        height: e.height,
        class: A(["bg-background w-full max-w-full cursor-crosshair touch-none rounded-md border", e.disabled ? "pointer-events-none opacity-50" : ""]),
        "aria-label": e.label,
        onPointerdown: he(g, ["prevent"]),
        onPointermove: he(p, ["prevent"]),
        onPointerup: he(v, ["prevent"]),
        onPointerleave: he(v, ["prevent"])
      }, null, 42, X0),
      o("div", Q0, [
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
          onClick: h
        }, {
          default: L(() => [...S[1] || (S[1] = [
            N("Save signature", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), tk = { class: "grid gap-8 lg:grid-cols-2" }, ak = { class: "flex flex-col gap-3" }, nk = { class: "text-muted-foreground text-xs font-normal" }, lk = {
  key: 0,
  class: "flex flex-col gap-3"
}, ok = { class: "flex flex-wrap gap-3" }, sk = ["onClick"], rk = ["src", "alt"], ik = {
  key: 1,
  class: "flex flex-col gap-3"
}, dk = { class: "flex flex-wrap gap-3" }, uk = ["onClick"], ck = ["src", "alt"], fk = {
  key: 2,
  class: "flex flex-col gap-4"
}, mk = { class: "flex flex-wrap items-center gap-2" }, pk = { class: "mx-auto w-full max-w-3xl overflow-hidden rounded-lg border shadow-sm" }, vk = { class: "flex items-end justify-between gap-6 bg-white px-8 pb-8 text-black" }, gk = { class: "flex flex-col gap-2" }, hk = ["src"], bk = {
  key: 1,
  class: "text-sm text-neutral-400"
}, yk = ["src"], s8 = /* @__PURE__ */ O({
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
        const S = localStorage.getItem(M), B = S ? JSON.parse(S) : [];
        return Array.isArray(B) ? B : [];
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
    async function p(M, S) {
      await rf(M), S(40);
      const B = await new Promise((m, b) => {
        const w = new FileReader();
        w.onload = () => m(String(w.result)), w.onerror = () => b(new Error("Could not read the file")), w.readAsDataURL(M);
      });
      return S(100), { value: B, name: M.name, size: M.size, url: B };
    }
    function v() {
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
    const C = x(
      () => a.value.find((M) => M.id === s.value)?.dataUrl ?? null
    ), h = x(
      () => r.value.find((M) => M.id === i.value)?.dataUrl ?? null
    ), k = x(() => {
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
      class: A(["flex w-full flex-col gap-10", e.embedded ? "" : y(Ge)])
    }, [
      D(De, {
        title: e.title,
        description: e.description ?? void 0
      }, null, 8, ["title", "description"]),
      o("section", tk, [
        D(ek, {
          label: "Draw a signature",
          onSave: g
        }),
        o("div", ak, [
          S[2] || (S[2] = o("p", { class: "text-sm font-medium" }, "Company logo / stamp", -1)),
          o("p", nk, c(y(Ka)), 1),
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
            onClick: v
          }, {
            default: L(() => [...S[1] || (S[1] = [
              N(" Save as stamp ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      a.value.length ? (t(), n("section", lk, [
        D(De, {
          variant: "small",
          title: "Saved signatures"
        }),
        o("div", ok, [
          (t(!0), n(z, null, j(a.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === s.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => s.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "h-12 w-40 bg-white object-contain"
            }, null, 8, rk)
          ], 10, sk))), 128))
        ])
      ])) : $("", !0),
      r.value.length ? (t(), n("section", ik, [
        D(De, {
          variant: "small",
          title: "Saved stamps"
        }),
        o("div", dk, [
          (t(!0), n(z, null, j(r.value, (B) => (t(), n("button", {
            key: B.id,
            type: "button",
            class: A(["rounded-md border p-2", B.id === i.value ? "ring-ring ring-2" : ""]),
            onClick: (m) => i.value = B.id
          }, [
            o("img", {
              src: B.dataUrl,
              alt: B.name,
              class: "size-16 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,transparent_0%_50%)] bg-[length:12px_12px] object-contain"
            }, null, 8, ck)
          ], 10, uk))), 128))
        ])
      ])) : $("", !0),
      e.documents.length ? (t(), n("section", fk, [
        o("div", mk, [
          (t(!0), n(z, null, j(e.documents, (B) => (t(), T(ue, {
            key: B.key,
            size: "sm",
            variant: u.value === B.key ? "default" : "outline",
            onClick: (m) => u.value = B.key
          }, {
            default: L(() => [
              N(c(B.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "onClick"]))), 128))
        ]),
        o("div", pk, [
          D(wv, {
            document: k.value
          }, null, 8, ["document"]),
          o("div", vk, [
            o("div", gk, [
              S[3] || (S[3] = o("p", { class: "text-xs tracking-wider text-neutral-500 uppercase" }, "Signed", -1)),
              C.value ? (t(), n("img", {
                key: 0,
                src: C.value,
                alt: "Signature",
                class: "h-16 w-48 object-contain"
              }, null, 8, hk)) : (t(), n("p", bk, "Draw and save a signature"))
            ]),
            h.value ? (t(), n("img", {
              key: 0,
              src: h.value,
              alt: "Stamp",
              class: "h-20 w-20 object-contain"
            }, null, 8, yk)) : $("", !0)
          ])
        ])
      ])) : $("", !0)
    ], 2));
  }
}), r8 = "panel.dashboard.hiddenWidgets", xk = /* @__PURE__ */ Symbol("dashboardHide"), kk = {
  key: 0,
  class: "w-full",
  "data-slot": "dashboard-shortcuts"
}, i8 = /* @__PURE__ */ O({
  __name: "DashboardShortcuts",
  props: {
    catalog: {},
    defaults: { default: () => [] },
    storageKey: { default: "panel.dashboard.shortcuts" }
  },
  setup(e) {
    const l = e, a = ht(xk, null), r = R(
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
    return (d, u) => i.value ? $("", !0) : (t(), n("div", kk, [
      D(fb, {
        items: r.value,
        catalog: e.catalog,
        hideable: "",
        "onUpdate:items": u[0] || (u[0] = (f) => r.value = f),
        onHide: u[1] || (u[1] = (f) => y(a)?.hide("shortcuts", "Shortcuts"))
      }, null, 8, ["items", "catalog"])
    ]));
  }
}), $k = { class: "flex flex-col gap-3" }, wk = ["data-slot"], Ck = ["aria-pressed", "aria-label", "title"], Sk = {
  class: "size-4",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, Mk = { class: "text-muted-foreground text-[11px] font-semibold tracking-wider uppercase" }, Bk = { class: "flex h-8 items-center" }, _k = ["aria-label", "title", "onClick"], Ak = ["aria-label", "title", "onClick"], Pk = {
  key: 3,
  class: "truncate text-2xl font-semibold tabular-nums"
}, zk = {
  key: 1,
  class: "text-muted-foreground truncate text-xs"
}, d8 = /* @__PURE__ */ O({
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
    const f = x(() => a.segments.some(u)), g = x(() => a.segments.some(d)), p = {
      2: "grid-cols-2",
      3: "grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    }, v = x(() => p[a.columns] ?? p[4]), C = x(() => {
      const m = a.columns ?? 4, b = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(0, b);
    }), h = x(() => {
      const m = a.columns ?? 4, b = Math.floor(a.segments.length / m) * m;
      return a.segments.slice(b);
    }), k = x(() => {
      const m = [];
      return C.value.length > 0 && m.push({ key: "packed", joined: !0, segments: C.value }), h.value.length > 0 && m.push({ key: "leftover", joined: !1, segments: h.value }), m;
    });
    function M() {
      const m = f.value === !1;
      s.value = !m, i.value = /* @__PURE__ */ new Set(), r("toggle", m);
    }
    function S(m) {
      if (!d(m))
        return;
      const b = new Set(i.value);
      if (u(m))
        b.add(m.key);
      else if (b.delete(m.key), s.value) {
        s.value = !1;
        for (const w of a.segments)
          w.key !== m.key && d(w) && b.add(w.key);
      }
      i.value = b, r("toggle", f.value);
    }
    function B(m) {
      return typeof m == "number" ? new Intl.NumberFormat().format(m) : m;
    }
    return (m, b) => (t(), n("div", $k, [
      (t(!0), n(z, null, j(k.value, (w) => (t(), n("div", {
        key: w.key,
        class: A(["relative shrink-0", w.joined ? "bg-border overflow-hidden rounded-xl border" : ""]),
        "data-slot": w.joined ? "stat-packed" : "stat-leftover"
      }, [
        e.maskable && g.value && w.key === k.value[0]?.key ? (t(), n("button", {
          key: 0,
          type: "button",
          class: "text-muted-foreground hover:text-foreground absolute top-3 right-3 z-10 rounded p-1 transition-colors",
          "aria-pressed": f.value,
          "aria-label": f.value ? "Show all values" : "Hide all values",
          title: f.value ? "Show all values" : "Hide all values",
          onClick: M
        }, [
          (t(), n("svg", Sk, [
            f.value ? (t(), n(z, { key: 0 }, [
              b[0] || (b[0] = o("path", { d: "M10.7 6.2A9 9 0 0 1 12 6c5 0 9 4.5 9 6a12 12 0 0 1-2.2 3" }, null, -1)),
              b[1] || (b[1] = o("path", { d: "M6.6 6.9A13 13 0 0 0 3 12c0 1.5 4 6 9 6a9 9 0 0 0 3.7-.8" }, null, -1)),
              b[2] || (b[2] = o("path", { d: "M9.9 9.9a3 3 0 0 0 4.2 4.2" }, null, -1)),
              b[3] || (b[3] = o("path", { d: "m3 3 18 18" }, null, -1))
            ], 64)) : (t(), n(z, { key: 1 }, [
              b[4] || (b[4] = o("path", { d: "M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" }, null, -1)),
              b[5] || (b[5] = o("circle", {
                cx: "12",
                cy: "12",
                r: "3"
              }, null, -1))
            ], 64))
          ]))
        ], 8, Ck)) : $("", !0),
        o("div", {
          class: A(["grid", [w.joined ? "gap-px" : "gap-3", v.value]])
        }, [
          (t(!0), n(z, null, j(w.segments, (P) => (t(), n("div", {
            key: P.key,
            class: A(["bg-card flex flex-col gap-2 p-4", w.joined ? "" : "overflow-hidden rounded-xl border"])
          }, [
            o("p", Mk, c(P.label), 1),
            o("div", Bk, [
              e.loading ? (t(), T(ze, {
                key: 0,
                variant: "number"
              })) : u(P) ? (t(), n("button", {
                key: 1,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 flex items-center gap-1.5 rounded px-1 py-1 transition-colors",
                "aria-label": `${P.label} hidden. Show it.`,
                title: `Show ${P.label}`,
                onClick: (I) => S(P)
              }, [
                (t(), n(z, null, j(5, (I) => o("span", {
                  key: I,
                  class: "bg-muted-foreground/70 size-1.5 rounded-full"
                })), 64))
              ], 8, _k)) : d(P) ? (t(), n("button", {
                key: 2,
                type: "button",
                class: "hover:bg-muted/60 -mx-1 truncate rounded px-1 text-2xl font-semibold tabular-nums transition-colors",
                "aria-label": `${P.label}, ${B(P.value)}. Hide it.`,
                title: `Hide ${P.label}`,
                onClick: (I) => S(P)
              }, c(B(P.value)), 9, Ak)) : (t(), n("span", Pk, c(B(P.value)), 1)),
              P.trend && !e.loading && !u(P) ? (t(), T(Ja, {
                key: 4,
                direction: P.trend.direction,
                percentage: P.trend.percentage,
                inverted: P.inverted,
                class: "ml-2 shrink-0"
              }, null, 8, ["direction", "percentage", "inverted"])) : $("", !0)
            ]),
            P.sparkline?.length && !e.loading && !u(P) ? (t(), T(St, {
              key: 0,
              data: P.sparkline,
              height: 24
            }, null, 8, ["data"])) : $("", !0),
            P.caption || P.comparison && P.trend ? (t(), n("p", zk, c(P.caption ?? P.comparison), 1)) : $("", !0)
          ], 2))), 128))
        ], 2)
      ], 10, wk))), 128))
    ]));
  }
}), Ok = ["aria-label"], Lk = ["aria-valuenow", "aria-label"], jk = { class: "flex min-h-9 items-center gap-2 px-3 py-1.5 sm:gap-3" }, Vk = { class: "text-muted-foreground shrink-0 text-xs tabular-nums" }, Tk = ["title"], Dk = { class: "font-medium" }, Ek = {
  key: 0,
  class: "text-muted-foreground hidden sm:inline"
}, Ik = {
  key: 1,
  class: "flex flex-col gap-3 rounded-lg border bg-card p-4"
}, Fk = { class: "flex items-center justify-between gap-2" }, Nk = { class: "text-sm font-semibold" }, Rk = { class: "flex items-center gap-3" }, Uk = ["href"], Hk = {
  key: 0,
  class: "flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
}, Kk = { class: "flex min-w-0 flex-col gap-0.5" }, qk = { class: "text-sm font-medium" }, Gk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, Wk = {
  key: 1,
  class: "flex flex-col gap-2"
}, Zk = {
  key: 0,
  viewBox: "0 0 24 24",
  class: "size-3.5",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, Jk = { class: "flex min-w-0 flex-1 flex-col gap-0.5" }, Yk = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, u8 = /* @__PURE__ */ O({
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
    const a = e, r = l, s = x(() => a.items.find((k) => !k.done) ?? null), i = x(() => a.items.filter((k) => k.key !== s.value?.key)), d = x(() => a.items.length), u = x(() => a.items.filter((k) => k.done).length), f = x(() => {
      if (!s.value)
        return d.value;
      const k = a.items.findIndex((M) => M.key === s.value?.key);
      return k >= 0 ? k + 1 : 1;
    }), g = x(
      () => d.value > 0 ? Math.round(u.value / d.value * 100) : 0
    ), p = x(() => {
      const k = a.linkComponent;
      return typeof k == "string" ? k : ka(k);
    }), v = st({
      variant: "default",
      size: "sm",
      class: "no-underline mt-2 self-start"
    }), C = st({
      variant: "default",
      size: "sm",
      class: "no-underline shrink-0"
    }), h = st({
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
        "aria-valuenow": g.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `${e.heading}, ${g.value} percent complete`
      }, [
        o("div", {
          class: "h-full bg-amber-500 transition-[width] duration-300 ease-out",
          style: se({ width: `${g.value}%` })
        }, null, 4)
      ], 8, Lk),
      o("div", jk, [
        o("span", Vk, " Step " + c(f.value) + " of " + c(d.value), 1),
        o("p", {
          class: "min-w-0 flex-1 truncate text-sm",
          title: s.value?.detail || void 0
        }, [
          o("span", Dk, c(s.value ? s.value.title : e.heading), 1),
          s.value?.detail ? (t(), n("span", Ek, c(": " + s.value.detail), 1)) : $("", !0)
        ], 8, Tk),
        s.value?.href ? (t(), T(_e(p.value), {
          key: 0,
          href: s.value.href,
          class: A(y(C))
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
    ], 8, Ok)) : e.items.length ? (t(), n("section", Ik, [
      o("div", Fk, [
        o("h2", Nk, c(e.heading), 1),
        o("div", Rk, [
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
          }, " Full report ", 8, Uk)) : $("", !0)
        ])
      ]),
      s.value ? (t(), n("div", Hk, [
        M[2] || (M[2] = o("span", {
          class: "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500",
          "aria-hidden": "true"
        }, null, -1)),
        o("div", Kk, [
          o("p", qk, c(s.value.title), 1),
          s.value.detail ? (t(), n("p", Gk, c(s.value.detail), 1)) : $("", !0),
          s.value.href ? (t(), T(_e(p.value), {
            key: 1,
            href: s.value.href,
            class: A(y(v))
          }, {
            default: L(() => [
              N(c(s.value.actionLabel || "Open"), 1)
            ]),
            _: 1
          }, 8, ["href", "class"])) : $("", !0)
        ])
      ])) : $("", !0),
      i.value.length ? (t(), n("ul", Wk, [
        (t(!0), n(z, null, j(i.value, (S) => (t(), n("li", {
          key: S.key,
          class: "flex items-start gap-3"
        }, [
          o("span", {
            class: A([
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              S.done ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "border-2 border-amber-500"
            ]),
            "aria-hidden": "true"
          }, [
            S.done ? (t(), n("svg", Zk, [...M[3] || (M[3] = [
              o("path", { d: "M20 6 9 17l-5-5" }, null, -1)
            ])])) : $("", !0)
          ], 2),
          o("div", Jk, [
            o("p", {
              class: A(["text-sm", S.done ? "text-muted-foreground line-through" : "font-medium"])
            }, c(S.title), 3),
            !S.done && S.detail ? (t(), n("p", Yk, c(S.detail), 1)) : $("", !0)
          ]),
          !S.done && S.href ? (t(), T(_e(p.value), {
            key: 0,
            href: S.href,
            class: A(y(h))
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
}), Xk = {
  class: "flex flex-wrap items-center gap-3 text-sm",
  role: "status"
}, Qk = { class: "hidden items-center gap-2 md:flex" }, e2 = { class: "md:hidden" }, t2 = { class: "border-b px-4 py-3" }, a2 = { class: "text-muted-foreground text-xs font-normal" }, n2 = { class: "flex flex-col gap-2 overflow-y-auto p-4" }, l2 = { class: "font-medium tabular-nums" }, o2 = { class: "ml-auto flex items-center gap-3" }, c8 = /* @__PURE__ */ O({
  __name: "SelectionBar",
  props: {
    count: {},
    allMatching: { type: Boolean },
    total: {}
  },
  emits: ["select-all-matching", "clear"],
  setup(e, { emit: l }) {
    const a = l, r = R(!1), s = (i) => new Intl.NumberFormat().format(i);
    return (i, d) => (t(), n("div", Xk, [
      o("div", Qk, [
        U(i.$slots, "actions")
      ]),
      o("div", e2, [
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
                o("div", t2, [
                  d[4] || (d[4] = o("p", { class: "text-sm font-semibold" }, "Bulk actions", -1)),
                  o("p", a2, c(e.allMatching ? "All matching records" : `${s(e.count)} selected`), 1)
                ]),
                o("div", n2, [
                  U(i.$slots, "actions")
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      o("span", l2, [
        e.allMatching ? (t(), n(z, { key: 0 }, [
          N(" All " + c(e.total !== void 0 ? s(e.total) : "") + " records selected ", 1)
        ], 64)) : (t(), n(z, { key: 1 }, [
          N(c(s(e.count)) + " records selected", 1)
        ], 64))
      ]),
      o("div", o2, [
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
}), s2 = { class: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" }, r2 = { class: "text-muted-foreground text-xs font-normal tabular-nums" }, i2 = {
  key: 0,
  class: "text-muted-foreground flex items-center gap-2 text-xs"
}, d2 = ["value"], u2 = ["value"], c2 = {
  class: "flex items-center gap-1",
  "aria-label": "Pagination"
}, f2 = ["disabled"], m2 = ["disabled"], p2 = {
  class: "bg-primary/10 text-primary inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 text-sm font-medium tabular-nums",
  "aria-current": "page"
}, v2 = {
  key: 0,
  class: "text-muted-foreground px-1 text-xs tabular-nums"
}, g2 = ["disabled"], f8 = /* @__PURE__ */ O({
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
    return (f, g) => (t(), n("div", s2, [
      o("p", r2, [
        N(" Showing " + c(s(i.value)) + "-" + c(s(d.value)) + " ", 1),
        e.total !== void 0 ? (t(), n(z, { key: 0 }, [
          N("of " + c(s(e.total)), 1)
        ], 64)) : $("", !0)
      ]),
      e.perPageOptions.length > 1 ? (t(), n("label", i2, [
        g[4] || (g[4] = o("span", null, "Per page", -1)),
        o("select", {
          value: e.perPage,
          class: "border-input bg-background text-foreground h-8 rounded-md border px-2 text-xs",
          onChange: g[0] || (g[0] = (p) => r("update:perPage", Number(p.target.value)))
        }, [
          (t(!0), n(z, null, j(e.perPageOptions, (p) => (t(), n("option", {
            key: p,
            value: p
          }, c(p), 9, u2))), 128))
        ], 40, d2)
      ])) : $("", !0),
      o("nav", c2, [
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
        ])], 8, f2),
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
        ])], 8, m2),
        o("span", p2, c(e.page), 1),
        u.value !== null ? (t(), n("span", v2, " of " + c(s(u.value)), 1)) : $("", !0),
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
        ])], 8, g2)
      ])
    ]));
  }
}), h2 = { class: "pk-tabs bg-muted/40 flex w-fit max-w-full shrink-0 items-center gap-0.5 overflow-x-auto rounded-lg p-1" }, b2 = ["aria-current"], y2 = ["title"], x2 = ["aria-current", "onClick"], k2 = ["title"], $2 = /* @__PURE__ */ O({
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
    return (s, i) => (t(), n("div", h2, [
      o("button", {
        type: "button",
        class: A([
          "flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm capitalize transition-colors",
          e.active === null ? "bg-background text-foreground shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
        ]),
        "aria-current": e.active === null ? "page" : void 0,
        onClick: i[0] || (i[0] = (d) => a("select", null))
      }, [
        i[1] || (i[1] = N(" All ", -1)),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === null ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts.all ?? 0)
        }, c(r(e.counts.all ?? 0)), 11, y2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, b2),
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
        N(c(d) + " ", 1),
        e.counts ? (t(), n("span", {
          key: 0,
          class: A([
            "rounded px-1.5 py-0.5 text-[11px] leading-none tabular-nums",
            e.active === d ? "bg-primary text-primary-foreground" : "bg-muted-foreground/15"
          ]),
          title: new Intl.NumberFormat().format(e.counts[d] ?? 0)
        }, c(r(e.counts[d] ?? 0)), 11, k2)) : (t(), T(ze, {
          key: 1,
          variant: "badge",
          label: "Counting"
        }))
      ], 10, x2))), 128))
    ]));
  }
}), m8 = /* @__PURE__ */ wt($2, [["__scopeId", "data-v-3967c945"]]), w2 = {
  key: 0,
  class: "text-muted-foreground text-sm font-normal"
}, C2 = { class: "grid gap-2" }, S2 = {
  key: 0,
  class: "text-destructive text-sm"
}, M2 = { class: "flex gap-2" }, p8 = /* @__PURE__ */ O({
  __name: "PkPasskeyRegister",
  emits: ["success"],
  setup(e, { emit: l }) {
    const a = l, s = R((() => {
      const C = navigator.userAgent, h = [
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
      return [h, k].filter(Boolean).join(" on ") || "";
    })()), i = R(!1), d = un(null), u = x(() => d.value?.isLoading.value ?? !1), f = x(() => d.value?.error.value ?? null), g = x(() => d.value?.isSupported.value ?? !1);
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
    }, v = () => {
      i.value = !1, s.value = "";
    };
    return (C, h) => g.value ? i.value ? (t(), n("form", {
      key: 2,
      class: "border-border bg-muted/50 space-y-4 rounded-lg border p-4",
      onSubmit: p
    }, [
      o("div", C2, [
        h[3] || (h[3] = o("label", {
          for: "pk-passkey-name",
          class: "text-sm font-medium"
        }, " Passkey name ", -1)),
        pe(o("input", {
          id: "pk-passkey-name",
          "onUpdate:modelValue": h[1] || (h[1] = (k) => s.value = k),
          type: "text",
          autofocus: "",
          placeholder: "e.g. MacBook Pro, iPhone",
          class: "border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
        }, null, 512), [
          [Ae, s.value]
        ]),
        h[4] || (h[4] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " A name helps you identify this passkey later. ", -1))
      ]),
      f.value ? (t(), n("p", S2, c(f.value), 1)) : $("", !0),
      o("div", M2, [
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
          onClick: v
        }, {
          default: L(() => [...h[5] || (h[5] = [
            N(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ], 32)) : (t(), T(ue, {
      key: 1,
      variant: "outline",
      onClick: h[0] || (h[0] = (k) => i.value = !0)
    }, {
      default: L(() => [...h[2] || (h[2] = [
        N(" Add passkey ", -1)
      ])]),
      _: 1
    })) : (t(), n("p", w2, " Passkeys are not supported in this browser. "));
  }
}), B2 = { class: "pk-form-stack" }, _2 = {
  key: 0,
  class: "border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm",
  role: "alert"
}, v8 = /* @__PURE__ */ O({
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
      run(f, g) {
        return a.createOption ? a.createOption(f, g) : Promise.reject(new Error("Create is not available on this field."));
      }
    });
    const r = l, s = x(() => a.nodes.length > 0), i = x(() => a.columns >= 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"), d = x(() => a.errors._conflict);
    function u(f) {
      if (a.upload)
        return (g, p) => a.upload(f, g, p);
    }
    return (f, g) => (t(), n("div", B2, [
      d.value ? (t(), n("p", _2, c(d.value), 1)) : $("", !0),
      s.value ? (t(!0), n(z, { key: 1 }, j(e.nodes, (p, v) => (t(), T(ja, {
        key: v,
        node: p,
        values: e.modelValue,
        errors: e.errors,
        options: e.options,
        processing: e.processing,
        "search-options": e.searchOptions,
        upload: e.upload,
        discard: e.discard,
        onChange: g[0] || (g[0] = (C, h) => r("change", C, h)),
        onAffixAction: g[1] || (g[1] = (C, h) => r("affix-action", C, h))
      }, null, 8, ["node", "values", "errors", "options", "processing", "search-options", "upload", "discard"]))), 128)) : (t(), n("div", {
        key: 2,
        class: A(["grid grid-cols-1 gap-4", i.value])
      }, [
        (t(!0), n(z, null, j(e.fields, (p) => (t(), T(Xe, {
          key: p.key,
          field: p,
          value: e.modelValue[p.key],
          error: e.errors[p.key],
          errors: e.errors,
          options: e.options[p.key],
          "child-options": e.options,
          processing: e.processing,
          "search-options": p.searchable && e.searchOptions ? (v) => e.searchOptions(p.key, v) : void 0,
          upload: u(p.key),
          discard: e.discard,
          class: A(p.span && p.span >= 2 ? "sm:col-span-2" : ""),
          onChange: (v) => r("change", p.key, v),
          onAffixAction: (v) => r("affix-action", p.key, v)
        }, null, 8, ["field", "value", "error", "errors", "options", "child-options", "processing", "search-options", "upload", "discard", "class", "onChange", "onAffixAction"]))), 128))
      ], 2))
    ]));
  }
}), A2 = { class: "min-w-0 flex-1 truncate text-sm font-medium" }, P2 = ["disabled"], z2 = ["disabled"], O2 = ["disabled"], g8 = /* @__PURE__ */ O({
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
            class: A(s.value),
            role: "status",
            "aria-live": "polite",
            "data-slot": "unsaved-bar"
          }, [
            o("div", {
              class: A([
                y(so),
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
              o("span", A2, c(e.message), 1),
              e.discardLabel ? (t(), n("button", {
                key: 0,
                type: "button",
                class: "hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[0] || (d[0] = (u) => i.$emit("discard"))
              }, c(e.discardLabel), 9, P2)) : $("", !0),
              o("button", {
                type: "button",
                class: "bg-muted hover:bg-muted/70 rounded-md px-3 py-1.5 text-sm font-medium transition-colors disabled:opacity-50",
                disabled: e.processing,
                onClick: d[1] || (d[1] = (u) => i.$emit("cancel"))
              }, c(e.cancelLabel), 9, z2),
              o("button", {
                type: "button",
                class: "bg-primary text-primary-foreground rounded-md px-4 py-1.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50",
                disabled: e.processing,
                onClick: d[2] || (d[2] = (u) => i.$emit("save"))
              }, c(e.processing ? "Saving…" : e.saveLabel), 9, O2)
            ], 2)
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ], 8, ["to", "disabled"]));
  }
});
function h8(e, l = {}) {
  const { warnOnUnload: a = !0 } = l, r = R(zt(e.value)), s = x(() => zt(e.value) !== r.value);
  function i() {
    r.value = zt(e.value);
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
function zt(e) {
  return JSON.stringify(e, (l, a) => a === void 0 ? null : a === null || typeof a != "object" || Array.isArray(a) ? a : Object.fromEntries(
    Object.entries(a).sort(([r], [s]) => r.localeCompare(s))
  ));
}
const L2 = {
  key: 0,
  class: "flex flex-col gap-1"
}, j2 = { class: "text-muted-foreground text-[11px] font-medium tracking-wide uppercase" }, V2 = { class: "text-foreground text-sm font-medium" }, T2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, D2 = {
  key: 5,
  class: "max-w-full font-normal"
}, E2 = {
  key: 0,
  class: "text-muted-foreground mb-1 font-mono text-[10px] uppercase"
}, I2 = { class: "bg-muted/50 overflow-x-auto rounded-md border p-3 font-mono text-xs font-normal" }, F2 = {
  key: 6,
  class: "font-normal"
}, N2 = {
  key: 0,
  class: "divide-y rounded-md border"
}, R2 = { class: "text-muted-foreground truncate font-medium" }, U2 = { class: "text-foreground col-span-2 break-words" }, H2 = {
  key: 1,
  class: "text-muted-foreground font-normal"
}, K2 = {
  key: 7,
  class: "flex flex-col gap-3 font-normal"
}, q2 = {
  key: 0,
  class: "text-muted-foreground font-normal"
}, G2 = ["href"], W2 = { class: "flex min-w-0 items-start gap-2.5" }, Z2 = {
  key: 0,
  class: "bg-muted text-muted-foreground mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md",
  "aria-hidden": "true"
}, J2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.75",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "size-3.5"
}, Y2 = ["d"], X2 = { class: "min-w-0" }, Q2 = { class: "flex flex-wrap items-center gap-2" }, e$ = { class: "text-sm font-semibold" }, t$ = {
  key: 0,
  class: "text-muted-foreground mt-0.5 text-xs"
}, a$ = ["onClick"], b8 = /* @__PURE__ */ O({
  __name: "InfoNode",
  props: {
    node: {},
    record: {},
    depth: { default: 0 }
  },
  emits: ["action"],
  setup(e, { emit: l }) {
    const a = e, r = l, s = R(!a.node.collapsed), i = R(0), d = x(() => a.depth === 0), u = x(() => {
      const h = a.node.columns ?? (a.node.component === "section" ? 2 : 1);
      return h >= 3 ? "sm:grid-cols-3" : h === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1";
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
      const h = g.value;
      return h == null || h === "";
    }), v = x(() => {
      if (p.value)
        return "None";
      const h = g.value;
      if (a.node.type === "date" || a.node.type === "datetime")
        return new Date(String(h)).toLocaleDateString(void 0, f[a.node.type]);
      let k = String(h);
      return a.node.transform === "upper" && (k = k.toUpperCase()), a.node.transform === "lower" && (k = k.toLowerCase()), [a.node.prefix, k, a.node.suffix].filter(Boolean).join(" ");
    }), C = x(() => {
      const h = typeof g.value == "boolean" ? g.value ? "1" : "" : String(g.value), k = a.node.colors?.[h] ?? a.node.defaultColor ?? "neutral";
      return Yt[k] ?? "outline";
    });
    return (h, k) => {
      const M = Rt("InfoNode", !0);
      return e.node.component === "entry" ? (t(), n("div", L2, [
        o("dt", j2, c(e.node.label), 1),
        o("dd", V2, [
          e.node.type === "badge" && y(ku)(g.value) ? (t(), T(qe, {
            key: 0,
            variant: C.value,
            class: "capitalize"
          }, {
            default: L(() => [
              N(c(g.value), 1)
            ]),
            _: 1
          }, 8, ["variant"])) : e.node.type === "badge" ? (t(), n("span", T2, "None")) : e.node.type === "icon" ? (t(), T(Zd, {
            key: 2,
            value: g.value,
            icons: e.node.icons,
            colors: e.node.colors,
            labels: e.node.labels,
            "default-icon": e.node.defaultIcon
          }, null, 8, ["value", "icons", "colors", "labels", "default-icon"])) : e.node.type === "image" ? (t(), T(eu, {
            key: 3,
            src: g.value,
            "fallback-text": e.record[e.node.fallbackFrom ?? "name"],
            rounded: e.node.rounded !== !1,
            size: e.node.size ?? "md",
            fallback: e.node.fallback ?? "initials"
          }, null, 8, ["src", "fallback-text", "rounded", "size", "fallback"])) : e.node.type === "color" || e.node.type === "colour" ? (t(), T(ou, {
            key: 4,
            value: typeof g.value == "string" ? g.value : null,
            "show-value": e.node.showValue !== !1
          }, null, 8, ["value", "show-value"])) : e.node.type === "code" ? (t(), n("div", D2, [
            e.node.language ? (t(), n("p", E2, c(e.node.language), 1)) : $("", !0),
            o("pre", I2, [
              o("code", null, c(g.value ?? ""), 1)
            ])
          ])) : e.node.type === "keyvalue" ? (t(), n("div", F2, [
            g.value && typeof g.value == "object" && !Array.isArray(g.value) && Object.keys(g.value).length ? (t(), n("dl", N2, [
              (t(!0), n(z, null, j(g.value, (S, B) => (t(), n("div", {
                key: B,
                class: "grid grid-cols-3 gap-2 px-3 py-2 text-sm"
              }, [
                o("dt", R2, c(B), 1),
                o("dd", U2, c(S), 1)
              ]))), 128))
            ])) : (t(), n("span", H2, "None"))
          ])) : e.node.type === "repeatable" ? (t(), n("div", K2, [
            (t(!0), n(z, null, j(Array.isArray(g.value) ? g.value : [], (S, B) => (t(), n("div", {
              key: B,
              class: "rounded-md border p-3"
            }, [
              (t(!0), n(z, null, j(e.node.entries ?? [], (m, b) => (t(), T(M, {
                key: b,
                node: m,
                record: S,
                depth: e.depth + 1,
                onAction: k[0] || (k[0] = (w) => r("action", w))
              }, null, 8, ["node", "record", "depth"]))), 128))
            ]))), 128)),
            !Array.isArray(g.value) || g.value.length === 0 ? (t(), n("span", q2, "None")) : $("", !0)
          ])) : e.node.url && !p.value ? (t(), n("a", {
            key: 8,
            href: e.node.url,
            class: "text-foreground font-medium underline-offset-2 hover:underline"
          }, c(v.value), 9, G2)) : (t(), n("span", {
            key: 9,
            class: A([
              p.value || e.node.muted ? "text-muted-foreground font-normal" : "",
              e.node.mono ? "font-mono text-xs" : ""
            ])
          }, c(v.value), 3)),
          e.node.action ? (t(), n("button", {
            key: 10,
            type: "button",
            class: "text-muted-foreground hover:text-foreground mt-0.5 text-xs font-normal underline-offset-2 hover:underline",
            onClick: k[1] || (k[1] = (S) => r("action", e.node.action))
          }, c(e.node.action.label), 1)) : $("", !0)
        ])
      ])) : e.node.component === "section" ? (t(), n("section", {
        key: 1,
        class: A(d.value ? "bg-card rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("header", {
          class: A(["flex items-start justify-between gap-3", [
            d.value ? "px-4 py-3.5 sm:px-5" : "pb-2",
            e.node.collapsible ? "cursor-pointer select-none" : ""
          ]]),
          onClick: k[2] || (k[2] = (S) => e.node.collapsible && (s.value = !s.value))
        }, [
          o("div", W2, [
            e.node.icon ? (t(), n("div", Z2, [
              (t(), n("svg", J2, [
                o("path", {
                  d: y(ce)(e.node.icon)
                }, null, 8, Y2)
              ]))
            ])) : $("", !0),
            o("div", X2, [
              o("div", Q2, [
                o("h3", e$, c(e.node.label), 1),
                e.node.status ? (t(), T(we, {
                  key: 0,
                  status: e.node.status,
                  class: "capitalize"
                }, null, 8, ["status"])) : $("", !0)
              ]),
              e.node.description ? (t(), n("p", t$, c(e.node.description), 1)) : $("", !0)
            ])
          ])
        ], 2),
        s.value ? (t(), n("dl", {
          key: 0,
          class: A(["grid grid-cols-1 gap-x-6 gap-y-4", [u.value, d.value ? "border-t px-4 py-4 sm:px-5 sm:py-5" : ""]])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => (t(), T(M, {
            key: B,
            node: S,
            record: e.record,
            depth: e.depth + 1,
            onAction: k[3] || (k[3] = (m) => r("action", m))
          }, null, 8, ["node", "record", "depth"]))), 128))
        ], 2)) : $("", !0)
      ], 2)) : e.node.component === "grid" ? (t(), n("dl", {
        key: 2,
        class: A(["grid grid-cols-1 gap-x-6 gap-y-4", u.value])
      }, [
        (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => (t(), T(M, {
          key: B,
          node: S,
          record: e.record,
          depth: e.depth + 1,
          onAction: k[4] || (k[4] = (m) => r("action", m))
        }, null, 8, ["node", "record", "depth"]))), 128))
      ], 2)) : e.node.component === "tabs" ? (t(), n("div", {
        key: 3,
        class: A(d.value ? "bg-card overflow-hidden rounded-xl border shadow-sm ring-1 ring-black/5 dark:ring-white/10" : "")
      }, [
        o("div", {
          class: A(["bg-muted/30 flex gap-1 overflow-x-auto p-1", d.value ? "border-b" : "rounded-md"])
        }, [
          (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => (t(), n("button", {
            key: B,
            type: "button",
            class: A([
              "shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors",
              i.value === B ? "bg-background text-foreground font-medium shadow-sm" : "text-muted-foreground hover:text-foreground"
            ]),
            onClick: (m) => i.value = B
          }, c(S.label), 11, a$))), 128))
        ], 2),
        (t(!0), n(z, null, j(e.node.children ?? [], (S, B) => pe((t(), n("div", {
          key: B,
          class: A(["flex flex-col gap-5", d.value ? "p-4 sm:p-5" : "pt-4"])
        }, [
          (t(!0), n(z, null, j(S.children ?? [], (m, b) => (t(), T(M, {
            key: b,
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
}), n$ = { class: "text-muted-foreground text-sm font-normal" }, l$ = { class: "flex items-start gap-3" }, o$ = { class: "min-w-0 flex-1" }, s$ = { class: "flex flex-wrap items-center gap-2" }, r$ = { class: "truncate text-sm font-medium" }, i$ = { class: "text-muted-foreground mt-0.5 text-xs" }, d$ = { class: "text-muted-foreground text-xs font-normal" }, u$ = { class: "mt-auto flex items-center gap-2" }, c$ = /* @__PURE__ */ O({
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
      class: A(["flex flex-col gap-4", y(Ha)]),
      "data-slot": "payment-gateways"
    }, [
      o("p", n$, c(s.value) + " of " + c(e.gateways.length) + " connected, showcase only, no live processors. ", 1),
      o("div", {
        class: A(y(Qc))
      }, [
        (t(!0), n(z, null, j(e.gateways, (u) => (t(), n("article", {
          key: u.key,
          class: "bg-background flex flex-col gap-4 rounded-lg border p-4"
        }, [
          o("div", l$, [
            o("span", {
              class: "flex size-11 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white",
              style: se({ background: u.color }),
              "aria-hidden": "true"
            }, c(u.mark), 5),
            o("div", o$, [
              o("div", s$, [
                o("h3", r$, c(u.label), 1),
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
              o("p", i$, c(u.caption), 1)
            ])
          ]),
          o("p", d$, c(u.methods.join(" · ")), 1),
          o("div", u$, [
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
}), f$ = { class: "flex flex-col gap-6" }, m$ = { class: "relative" }, p$ = {
  class: "text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "aria-hidden": "true"
}, v$ = ["d"], g$ = {
  key: 1,
  class: "text-muted-foreground text-sm font-normal"
}, h$ = {
  key: 0,
  class: "flex flex-col gap-4"
}, b$ = { class: "flex flex-wrap items-center gap-2" }, y$ = { class: "text-muted-foreground text-sm font-normal" }, x$ = { class: "flex flex-col gap-1 text-sm" }, k$ = ["value"], $$ = {
  key: 0,
  class: "flex flex-col gap-2"
}, w$ = { class: "flex flex-wrap items-center gap-2" }, C$ = {
  key: 1,
  class: "flex items-center gap-2"
}, y8 = /* @__PURE__ */ O({
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
      () => l.value.find((h) => h.key === a.value) ?? null
    ), i = x(() => {
      const h = r.value.trim().toLowerCase();
      return h === "" ? l.value : l.value.filter((k) => [k.key, k.label, k.caption, ...k.methods].join(" ").toLowerCase().includes(h));
    });
    function d(h) {
      return h.connected && h.enabled !== !1;
    }
    function u(h, k) {
      l.value = l.value.map(
        (M) => M.key === h ? { ...M, ...k } : M
      );
    }
    function f(h) {
      a.value = h;
    }
    function g(h) {
      const k = l.value.find((S) => S.key === h);
      if (!k)
        return;
      const M = !k.connected;
      u(h, {
        connected: M,
        mode: M ? k.mode ?? "test" : null,
        enabled: M,
        isDefault: !1
      });
    }
    function p(h, k) {
      const M = l.value.find((S) => S.key === h);
      M?.connected && u(h, { enabled: k, isDefault: k ? M.isDefault : !1 });
    }
    function v(h) {
      const k = l.value.find((M) => M.key === h);
      !k || !d(k) || (l.value = l.value.map((M) => ({
        ...M,
        isDefault: M.key === h
      })));
    }
    function C(h) {
      const k = a.value;
      !k || !l.value.find((S) => S.key === k)?.connected || u(k, { mode: h });
    }
    return (h, k) => (t(), n(z, null, [
      o("div", f$, [
        D(De, {
          variant: e.headingVariant,
          title: e.title,
          description: e.description ?? void 0
        }, null, 8, ["variant", "title", "description"]),
        o("div", m$, [
          (t(), n("svg", p$, [
            o("path", {
              d: y(ce)("search")
            }, null, 8, v$)
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
        i.value.length > 0 ? (t(), T(c$, {
          key: 0,
          gateways: i.value,
          onConfigure: f,
          onToggle: g
        }, null, 8, ["gateways"])) : (t(), n("p", g$, " No gateways match “" + c(r.value.trim()) + "”. ", 1))
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
            onClick: k[7] || (k[7] = (M) => g(s.value.key))
          }, {
            default: L(() => [
              N(c(s.value.connected ? "Disconnect" : "Mark connected"), 1)
            ]),
            _: 1
          })) : $("", !0)
        ]),
        default: L(() => [
          s.value ? (t(), n("div", h$, [
            o("div", b$, [
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
                  N(c(s.value.mode), 1)
                ]),
                _: 1
              }, 8, ["status"])) : $("", !0)
            ]),
            o("p", y$, c(s.value.caption), 1),
            o("label", x$, [
              k[12] || (k[12] = N(" Display name ", -1)),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                value: s.value.label,
                readonly: ""
              }, null, 8, k$)
            ]),
            k[20] || (k[20] = o("label", { class: "flex flex-col gap-1 text-sm" }, [
              N(" Merchant / till (placeholder) "),
              o("input", {
                class: "border-input h-9 rounded-md border bg-transparent px-3 text-sm",
                placeholder: "Not stored, demo field",
                autocomplete: "off"
              })
            ], -1)),
            s.value.connected ? (t(), n("div", $$, [
              k[16] || (k[16] = o("p", { class: "text-sm font-medium" }, "Checkout", -1)),
              k[17] || (k[17] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " Disabled gateways stay connected but are not offered at checkout. Only one gateway can be the default tender. ", -1)),
              o("div", w$, [
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
                  onClick: k[3] || (k[3] = (M) => v(s.value.key))
                }, {
                  default: L(() => [...k[15] || (k[15] = [
                    N(" Use as default ", -1)
                  ])]),
                  _: 1
                }, 8, ["variant", "disabled"])
              ])
            ])) : $("", !0),
            s.value.connected ? (t(), n("div", C$, [
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
function x8(e) {
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
function k8(e) {
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
    for (const [u, f] of Object.entries(i))
      typeof f == "number" && f >= 48 && f <= 1200 && (d[u] = Math.round(f));
    l.value = d;
  }
  function s() {
    l.value = {};
  }
  return { widths: l, setWidth: a, setWidths: r, reset: s };
}
function $8(e) {
  const { config: l, rows: a, rowKey: r = "id", fetchChanges: s, onResync: i, onInsert: d } = e, u = R(
    l.driver === "none" ? "off" : "connecting"
  ), f = R(/* @__PURE__ */ new Set());
  let g = /* @__PURE__ */ new Map(), p, v, C, h = (/* @__PURE__ */ new Date()).toISOString(), k = null;
  function M(K, G) {
    g.set(K, { ...g.get(K) ?? {}, ...G }), !p && (p = setTimeout(() => {
      p = void 0, S();
    }, l.batchMs));
  }
  function S() {
    if (g.size === 0)
      return;
    const K = g;
    g = /* @__PURE__ */ new Map();
    const G = /* @__PURE__ */ new Set();
    for (const [oe, ae] of K) {
      const Z = a.value.find((q) => q[r] === oe);
      if (!Z) {
        d?.(oe, ae);
        continue;
      }
      Object.assign(Z, ae), G.add(oe);
    }
    G.size !== 0 && (f.value = /* @__PURE__ */ new Set([...f.value, ...G]), setTimeout(() => {
      const oe = new Set(f.value);
      G.forEach((ae) => oe.delete(ae)), f.value = oe;
    }, 1500));
  }
  async function B() {
    if (!(!s || a.value.length === 0)) {
      C?.abort(), C = new AbortController();
      try {
        const K = a.value.map((ae) => ae[r]), { records: G, at: oe } = await s(K, h);
        h = oe, u.value = "live";
        for (const ae of G)
          M(ae[r], ae);
      } catch {
        u.value = "connecting";
      }
    }
  }
  function m() {
    b(), u.value = "live", v = setInterval(B, l.intervalMs);
  }
  function b() {
    clearInterval(v), v = void 0, C?.abort();
  }
  function w() {
    return window.Echo ?? null;
  }
  function P() {
    const K = w();
    if (!K || !l.channel) {
      u.value = "connecting", console.warn("[alxtexhpanel] broadcast driver configured but window.Echo is unavailable.");
      return;
    }
    k = l.channel;
    const G = K.private(l.channel);
    for (const oe of l.events)
      G.listen(oe, (ae) => {
        ae?.[r] !== void 0 && M(ae[r], ae);
      });
    u.value = "live", K.connector?.pusher?.connection?.bind("connected", () => {
      u.value = "live", i?.();
    }), K.connector?.pusher?.connection?.bind("disconnected", () => {
      u.value = "connecting";
    });
  }
  function I() {
    k && (w()?.leave(k), k = null);
  }
  function E() {
    l.driver === "poll" && m(), l.driver === "broadcast" && P();
  }
  function te() {
    b(), I(), clearTimeout(p), p = void 0, g = /* @__PURE__ */ new Map();
  }
  function H() {
    l.pauseWhenHidden && (document.hidden ? (te(), u.value = "paused") : (h = (/* @__PURE__ */ new Date()).toISOString(), E(), i?.()));
  }
  return ve(() => {
    l.driver !== "none" && (E(), l.pauseWhenHidden && document.addEventListener("visibilitychange", H));
  }), ke(() => {
    document.removeEventListener("visibilitychange", H), te();
  }), { status: u, recentlyChanged: f, applyPatch: M, flush: S, pollOnce: B };
}
const S$ = /^[a-z0-9-]+$/, M$ = /^[a-zA-Z0-9\s.,()%#/-]+$/;
function w8(e) {
  cn(() => {
    if (typeof document > "u")
      return;
    const l = {};
    for (const [a, r] of Object.entries(e.value ?? {}))
      !S$.test(a) || typeof r != "string" || !M$.test(r) || (l[`--${a}`] = r);
    Yu(l);
  });
}
const B$ = { class: "flex items-center gap-0.5" }, _$ = /* @__PURE__ */ O({
  __name: "PkColourModePreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), n("span", B$, [
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
}), A$ = /* @__PURE__ */ O({
  __name: "PkVoucherCodeBoxPreview",
  props: {
    value: {},
    label: {},
    selected: { type: Boolean }
  },
  setup(e) {
    return (l, a) => (t(), T(Za, {
      code: "AB-1234",
      style: se(String(e.value)),
      compact: ""
    }, null, 8, ["style"]));
  }
}), P$ = { class: "flex flex-col gap-2" }, z$ = { class: "bg-card rounded-lg border p-4" }, O$ = { class: "text-muted-foreground truncate text-xs" }, L$ = { class: "flex flex-wrap gap-x-4 gap-y-1 text-xs" }, j$ = /* @__PURE__ */ O({
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
      const k = String(l.field.path ?? "/").split("?")[0].replace(/^\/+|\/+$/g, "");
      return k === "" ? d.value : `${d.value} › ${k.split("/").join(" › ")}`;
    });
    function f(k, M) {
      return k.length <= M ? k : `${k.slice(0, M - 1).trimEnd()}…`;
    }
    const g = x(() => f(s.value, r.value.titleMax)), p = x(() => f(i.value, r.value.descriptionMax));
    function v(k, M, S) {
      return k === 0 ? { tone: "text-muted-foreground", note: "empty" } : k > S ? { tone: "text-amber-600 dark:text-amber-400", note: "truncated" } : k < M ? { tone: "text-muted-foreground", note: "short" } : { tone: "text-emerald-600 dark:text-emerald-400", note: "good" };
    }
    const C = x(
      () => v(s.value.length, r.value.titleMin, r.value.titleMax)
    ), h = x(
      () => v(i.value.length, r.value.descriptionMin, r.value.descriptionMax)
    );
    return (k, M) => (t(), n("div", P$, [
      o("div", z$, [
        o("p", O$, c(u.value), 1),
        o("p", {
          class: A(["mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]", g.value === "" ? "text-muted-foreground italic" : ""])
        }, c(g.value || "Untitled page"), 3),
        o("p", {
          class: A(["text-muted-foreground mt-1 line-clamp-2 text-sm", p.value === "" ? "italic" : ""])
        }, c(p.value || "No description. The engine writes its own from the page text, which is usually a mid-sentence fragment."), 3)
      ]),
      o("div", L$, [
        o("span", {
          class: A(C.value.tone)
        }, " Title " + c(s.value.length) + "/" + c(r.value.titleMax) + " · " + c(C.value.note), 3),
        o("span", {
          class: A(h.value.tone)
        }, " Description " + c(i.value.length) + "/" + c(r.value.descriptionMax) + " · " + c(h.value.note), 3)
      ]),
      M[0] || (M[0] = o("p", { class: "text-muted-foreground text-xs font-normal" }, " An approximation. Engines measure pixel width rather than characters, and may rewrite a title they judge unhelpful. ", -1))
    ]));
  }
}), V$ = ["value", "placeholder", "disabled"], T$ = /* @__PURE__ */ O({
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
      class: A(["border-input bg-background h-10 w-full rounded-md border px-3 text-sm", y(Me)]),
      value: s.value,
      placeholder: e.field.placeholder ?? "+254712345678",
      disabled: e.disabled,
      "data-test": "phone-field",
      onInput: i
    }, null, 42, V$));
  }
}), D$ = {
  class: "flex flex-wrap gap-1.5",
  role: "listbox",
  "data-test": "icon-picker-field"
}, E$ = ["aria-selected", "disabled", "title", "onClick"], I$ = /* @__PURE__ */ O({
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
    return (u, f) => (t(), n("div", D$, [
      (t(!0), n(z, null, j(s.value, (g) => (t(), n("button", {
        key: g,
        type: "button",
        role: "option",
        class: A(["border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50", [y(Me), i.value === g ? "border-primary bg-primary/10 text-primary" : ""]]),
        "aria-selected": i.value === g,
        disabled: e.disabled,
        title: g,
        onClick: (p) => d(g)
      }, c(g), 11, E$))), 128))
    ]));
  }
}), F$ = {
  class: "relative",
  "data-test": "tree-select-field"
}, N$ = ["disabled"], R$ = {
  key: 0,
  class: "bg-popover absolute z-40 mt-1 max-h-64 w-full overflow-auto rounded-md border p-1 shadow-md"
}, U$ = ["onClick"], H$ = ["onClick"], K$ = /* @__PURE__ */ O({
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
    function u(v, C) {
      return !C || v.label.toLowerCase().includes(C) ? !0 : (v.children ?? []).some((h) => u(h, C));
    }
    const f = x(() => {
      const v = s.value.trim().toLowerCase();
      return v ? d.value.filter((C) => u(C, v)) : d.value;
    }), g = x(() => {
      const v = (C) => {
        for (const h of C) {
          if (h.value === a.modelValue)
            return h.label;
          const k = v(h.children ?? []);
          if (k)
            return k;
        }
        return null;
      };
      return v(d.value);
    });
    function p(v) {
      a.disabled || (r("update:modelValue", v), i.value = !1);
    }
    return (v, C) => (t(), n("div", F$, [
      o("button", {
        type: "button",
        class: A(["border-input bg-background flex h-10 w-full items-center justify-between rounded-md border px-3 text-left text-sm disabled:opacity-50", y(Me)]),
        disabled: e.disabled,
        onClick: C[0] || (C[0] = (h) => i.value = !i.value)
      }, [
        o("span", {
          class: A(g.value ? "" : "text-muted-foreground")
        }, c(g.value ?? "Select…"), 3),
        C[2] || (C[2] = o("span", { class: "text-muted-foreground text-xs font-normal" }, "▾", -1))
      ], 10, N$),
      i.value ? (t(), n("div", R$, [
        e.field.searchable ? pe((t(), n("input", {
          key: 0,
          "onUpdate:modelValue": C[1] || (C[1] = (h) => s.value = h),
          type: "search",
          class: "border-input mb-1 h-8 w-full rounded border px-2 text-sm",
          placeholder: "Search…"
        }, null, 512)), [
          [Ae, s.value]
        ]) : $("", !0),
        (t(!0), n(z, null, j(f.value, (h) => (t(), n(z, {
          key: String(h.value)
        }, [
          o("button", {
            type: "button",
            class: A(["hover:bg-accent flex w-full rounded px-2 py-1.5 text-left text-sm font-medium", e.modelValue === h.value ? "bg-accent" : ""]),
            onClick: (k) => p(h.value)
          }, c(h.label), 11, U$),
          (t(!0), n(z, null, j(h.children ?? [], (k) => (t(), n("button", {
            key: String(k.value),
            type: "button",
            class: A(["hover:bg-accent text-muted-foreground flex w-full rounded py-1.5 pr-2 pl-6 text-left text-sm", e.modelValue === k.value ? "bg-accent text-foreground" : ""]),
            onClick: (M) => p(k.value)
          }, c(k.label), 11, H$))), 128))
        ], 64))), 128))
      ])) : $("", !0)
    ]));
  }
}), q$ = ["aria-label"], G$ = ["disabled", "aria-label", "aria-pressed", "onClick"], W$ = {
  class: "size-5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, Z$ = { key: 0 }, J$ = ["id"], Y$ = ["fill"], X$ = ["disabled"], Q$ = /* @__PURE__ */ O({
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
      (t(!0), n(z, null, j(s.value, (v) => (t(), n("button", {
        key: v,
        type: "button",
        class: "rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50",
        disabled: e.disabled,
        "aria-label": `${v} of ${s.value}`,
        "aria-pressed": d.value >= v,
        onClick: (C) => u(v)
      }, [
        (t(), n("svg", W$, [
          f(v) === "half" ? (t(), n("defs", Z$, [
            o("linearGradient", {
              id: `half-${e.field.key}-${v}`,
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
            ])], 8, J$)
          ])) : $("", !0),
          o("path", {
            d: "m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z",
            fill: f(v) === "full" ? "currentColor" : f(v) === "half" ? `url(#half-${e.field.key}-${v})` : "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linejoin": "round"
          }, null, 8, Y$)
        ]))
      ], 8, G$))), 128)),
      d.value > 0 ? (t(), n("button", {
        key: 0,
        type: "button",
        class: "text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50",
        disabled: e.disabled,
        onClick: p[0] || (p[0] = (v) => u(0))
      }, " Clear ", 8, X$)) : $("", !0)
    ], 8, q$));
  }
});
function ew() {
  xe("radio", Pm), xe("checkboxlist", Lm), xe("tags", Fm), xe("colour", Xm), xe("slider", zp), xe("rating", Q$), xe("phone", T$), xe("icon-picker", I$), xe("tree-select", K$), xe("visual-select", Hp), xe("markdown", dm), xe("code", gm), xe("map", np), xe("qrcode", ip), xe("barcode", vp), xe("diff", bp), xe("seo-preview", j$), Pt("swatch", qp), Pt("voucher-code-box", A$), Pt("document-colour-mode", _$);
}
function Xa() {
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
const tw = /* @__PURE__ */ O({
  __name: "PkReveal",
  props: {
    delay: { default: 0 }
  },
  setup(e) {
    const { el: l, shown: a } = Xa();
    return (r, s) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: A(["transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none", y(a) ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"]),
      style: se({ transitionDelay: `${e.delay}ms` })
    }, [
      U(r.$slots, "default")
    ], 6));
  }
}), aw = ["id"], Se = /* @__PURE__ */ O({
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
        D(tw, null, {
          default: L(() => [
            U(l.$slots, "default")
          ]),
          _: 3
        })
      ], 2)
    ], 10, aw));
  }
}), nw = {
  key: 0,
  class: "text-xs font-semibold tracking-widest text-primary uppercase"
}, lw = {
  key: 1,
  class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
}, ow = {
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
    return (l, a) => e.title || e.body || e.eyebrow ? (t(), n("div", {
      key: 0,
      class: A(["flex flex-col gap-3", e.centred ? "items-center text-center" : ""])
    }, [
      e.eyebrow ? (t(), n("p", nw, c(e.eyebrow), 1)) : $("", !0),
      e.title ? (t(), n("h2", lw, c(e.title), 1)) : $("", !0),
      e.body ? (t(), n("p", ow, c(e.body), 1)) : $("", !0)
    ], 2)) : $("", !0);
  }
}), sw = { class: "flex flex-col gap-10" }, rw = { class: "grid gap-4 md:grid-cols-3" }, iw = {
  key: 0,
  class: "text-xs font-medium text-muted-foreground"
}, dw = { class: "text-sm font-semibold text-balance" }, uw = {
  key: 1,
  class: "text-pretty text-sm text-muted-foreground"
}, cw = /* @__PURE__ */ O({
  __name: "PkArticles",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", sw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", rw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", { key: s }, [
              (t(), T(_e(r.href ? "a" : "div"), {
                href: r.href || void 0,
                class: "flex h-full flex-col gap-3 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
              }, {
                default: L(() => [
                  r.meta ? (t(), n("p", iw, c(r.meta), 1)) : $("", !0),
                  o("h3", dw, c(r.title), 1),
                  r.body ? (t(), n("p", uw, c(r.body), 1)) : $("", !0)
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
function fw() {
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
const mw = { class: "pk-tilt-inner relative h-full" }, pw = /* @__PURE__ */ O({
  __name: "PkTiltCard",
  setup(e) {
    const { el: l } = fw();
    return (a, r) => (t(), n("div", {
      ref_key: "el",
      ref: l,
      class: "pk-tilt group/tilt"
    }, [
      o("div", mw, [
        r[0] || (r[0] = o("span", {
          class: "pk-tilt-glow pointer-events-none absolute inset-0 rounded-lg",
          "aria-hidden": "true"
        }, null, -1)),
        U(a.$slots, "default")
      ])
    ], 512));
  }
}), vw = { class: "flex flex-col gap-10" }, gw = { class: "grid auto-rows-[minmax(11rem,auto)] gap-4 sm:grid-cols-3" }, hw = { class: "text-base font-semibold" }, bw = { class: "text-sm text-pretty text-muted-foreground" }, yw = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Se, null, {
      default: L(() => [
        o("div", vw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", gw, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), T(pw, {
              key: i,
              class: A(l(s.span))
            }, {
              default: L(() => [
                o("div", {
                  class: A([
                    "flex h-full flex-col justify-end gap-2 overflow-hidden rounded-xl border p-6 transition-shadow duration-300 hover:shadow-lg",
                    s.accent ? "bg-primary/5 border-primary/30 dark:bg-primary/10" : "bg-card"
                  ])
                }, [
                  o("h3", hw, c(s.title), 1),
                  o("p", bw, c(s.body), 1)
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
}), xw = { class: "grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center" }, kw = { class: "flex flex-col gap-4 rounded-xl border bg-card p-6 sm:p-8" }, $w = { class: "grid gap-4 text-sm" }, ww = {
  key: 0,
  class: "grid gap-1"
}, Cw = ["href"], Sw = {
  key: 1,
  class: "grid gap-1"
}, Mw = ["href"], Bw = {
  key: 2,
  class: "grid gap-1"
}, _w = { class: "text-pretty text-muted-foreground" }, Aw = ["href"], Pw = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", xw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", kw, [
            o("dl", $w, [
              e.email ? (t(), n("div", ww, [
                a[0] || (a[0] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Email ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `mailto:${e.email}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.email), 9, Cw)
                ])
              ])) : $("", !0),
              e.phone ? (t(), n("div", Sw, [
                a[1] || (a[1] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Phone ", -1)),
                o("dd", null, [
                  o("a", {
                    href: `tel:${e.phone.replace(/\s+/g, "")}`,
                    class: "font-medium text-foreground underline-offset-4 hover:underline"
                  }, c(e.phone), 9, Mw)
                ])
              ])) : $("", !0),
              e.address ? (t(), n("div", Bw, [
                a[2] || (a[2] = o("dt", { class: "text-xs font-medium uppercase tracking-wide text-muted-foreground" }, " Address ", -1)),
                o("dd", _w, c(e.address), 1)
              ])) : $("", !0)
            ]),
            e.label ? (t(), n("a", {
              key: 0,
              href: e.href ?? (e.email ? `mailto:${e.email}` : "#"),
              class: "inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.label), 9, Aw)) : $("", !0)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), zw = { class: "flex flex-col items-center gap-5 rounded-xl border bg-card px-6 py-12 text-center" }, Ow = { class: "max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, Lw = {
  key: 0,
  class: "max-w-xl text-pretty text-muted-foreground"
}, jw = ["href"], Vw = /* @__PURE__ */ O({
  __name: "PkCta",
  props: {
    title: {},
    body: {},
    label: {},
    href: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", zw, [
          o("h2", Ow, c(e.title), 1),
          e.body ? (t(), n("p", Lw, c(e.body), 1)) : $("", !0),
          e.label ? (t(), n("a", {
            key: 1,
            href: e.href ?? "#",
            class: "inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          }, c(e.label), 9, jw)) : $("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), Tw = { class: "flex flex-col gap-8" }, Dw = { class: "divide-y rounded-lg border" }, Ew = { class: "flex cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50" }, Iw = { class: "px-4 pb-4 text-sm text-pretty text-muted-foreground" }, Fw = /* @__PURE__ */ O({
  __name: "PkFaq",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { narrow: "" }, {
      default: L(() => [
        o("div", Tw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("div", Dw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("details", {
              key: s,
              class: "group"
            }, [
              o("summary", Ew, [
                N(c(r.question) + " ", 1),
                a[0] || (a[0] = o("span", {
                  class: "text-muted-foreground transition-transform group-open:rotate-45",
                  "aria-hidden": "true"
                }, " + ", -1))
              ]),
              o("p", Iw, c(r.answer), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Nw = { class: "flex flex-col gap-10" }, Rw = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }, Uw = { class: "text-sm font-semibold" }, Hw = { class: "text-sm text-pretty text-muted-foreground" }, Kw = /* @__PURE__ */ O({
  __name: "PkFeatureGrid",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", Nw, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Rw, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("h3", Uw, c(r.title), 1),
              o("p", Hw, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), qw = {
  key: 0,
  class: "pk-hero-brand text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
}, Gw = {
  key: 1,
  class: "rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground"
}, Ww = {
  key: 2,
  class: "max-w-2xl text-lg text-pretty text-muted-foreground"
}, Zw = {
  key: 3,
  class: "flex flex-wrap items-center justify-center gap-3"
}, Jw = ["href"], Yw = ["href"], Xw = {
  key: 4,
  class: "text-xs font-normal text-muted-foreground"
}, Qw = /* @__PURE__ */ O({
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
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", {
          class: A(["flex flex-col items-center gap-6 text-center", e.variant === "bleed" ? "min-h-[70vh] justify-center py-8 sm:py-12" : ""])
        }, [
          e.brand ? (t(), n("p", qw, c(e.brand), 1)) : $("", !0),
          e.eyebrow ? (t(), n("p", Gw, c(e.eyebrow), 1)) : $("", !0),
          o("h1", {
            class: A([
              "max-w-3xl font-semibold tracking-tight text-balance",
              e.brand ? "text-2xl sm:text-3xl md:text-4xl" : "text-4xl sm:text-5xl"
            ])
          }, c(e.title), 3),
          e.body ? (t(), n("p", Ww, c(e.body), 1)) : $("", !0),
          e.primaryLabel || e.secondaryLabel ? (t(), n("div", Zw, [
            e.secondaryLabel ? (t(), n("a", {
              key: 0,
              href: e.secondaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md border bg-background px-5 text-sm font-medium transition-colors hover:bg-accent"
            }, c(e.secondaryLabel), 9, Jw)) : $("", !0),
            e.primaryLabel ? (t(), n("a", {
              key: 1,
              href: e.primaryHref ?? "#",
              class: "inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            }, c(e.primaryLabel), 9, Yw)) : $("", !0)
          ])) : $("", !0),
          e.note ? (t(), n("p", Xw, c(e.note), 1)) : $("", !0)
        ], 2)
      ]),
      _: 1
    }));
  }
}), e4 = { class: "flex flex-col items-center gap-6" }, t4 = {
  key: 0,
  class: "text-xs font-medium tracking-widest text-muted-foreground uppercase"
}, a4 = { class: "flex flex-wrap items-center justify-center gap-x-10 gap-y-4" }, n4 = /* @__PURE__ */ O({
  __name: "PkLogoCloud",
  props: {
    title: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", e4, [
          e.title ? (t(), n("p", t4, c(e.title), 1)) : $("", !0),
          o("ul", a4, [
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
}), l4 = { class: "flex flex-col gap-10" }, o4 = {
  key: 0,
  class: "flex items-center justify-center gap-3"
}, s4 = {
  class: "inline-flex rounded-md border bg-background p-1",
  role: "group"
}, r4 = ["aria-pressed"], i4 = ["aria-pressed"], d4 = {
  key: 0,
  class: "text-xs text-muted-foreground font-normal"
}, u4 = { class: "grid gap-4 md:grid-cols-3" }, c4 = { class: "flex flex-col gap-1" }, f4 = { class: "text-sm font-semibold" }, m4 = { class: "flex items-baseline gap-1" }, p4 = { class: "text-3xl font-semibold tracking-tight" }, v4 = {
  key: 0,
  class: "text-sm text-muted-foreground font-normal"
}, g4 = {
  key: 0,
  class: "text-sm text-pretty text-muted-foreground"
}, h4 = { class: "flex flex-col gap-2 text-sm" }, b4 = { class: "text-muted-foreground" }, y4 = ["href"], x4 = /* @__PURE__ */ O({
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
    return (i, d) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", l4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          r.value ? (t(), n("div", o4, [
            o("div", s4, [
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "text-muted-foreground" : "bg-primary text-primary-foreground"
                ]),
                "aria-pressed": !a.value,
                onClick: d[0] || (d[0] = (u) => a.value = !1)
              }, " Monthly ", 10, r4),
              o("button", {
                type: "button",
                class: A([
                  "rounded px-3 py-1.5 text-sm font-medium transition-colors",
                  a.value ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                ]),
                "aria-pressed": a.value,
                onClick: d[1] || (d[1] = (u) => a.value = !0)
              }, " Annual ", 10, i4)
            ]),
            e.annualNote ? (t(), n("p", d4, c(e.annualNote), 1)) : $("", !0)
          ])) : $("", !0),
          o("ul", u4, [
            (t(!0), n(z, null, j(e.items ?? [], (u, f) => (t(), n("li", {
              key: f,
              class: A(["flex flex-col gap-4 rounded-lg border bg-card p-6", u.featured ? "border-primary shadow-sm" : ""])
            }, [
              o("div", c4, [
                o("h3", f4, c(u.name), 1),
                o("p", m4, [
                  o("span", p4, c(s(u)), 1),
                  u.period ? (t(), n("span", v4, c(u.period), 1)) : $("", !0)
                ]),
                u.body ? (t(), n("p", g4, c(u.body), 1)) : $("", !0)
              ]),
              o("ul", h4, [
                (t(!0), n(z, null, j(u.features ?? [], (g, p) => (t(), n("li", {
                  key: p,
                  class: "flex items-start gap-2"
                }, [
                  d[2] || (d[2] = o("span", {
                    class: "mt-0.5 text-success",
                    "aria-hidden": "true"
                  }, "✓", -1)),
                  o("span", b4, c(g.title), 1)
                ]))), 128))
              ]),
              u.label ? (t(), n("a", {
                key: 0,
                href: u.href ?? "#",
                class: A([
                  "mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  u.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border bg-background hover:bg-accent"
                ])
              }, c(u.label), 11, y4)) : $("", !0)
            ], 2))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
});
function k4() {
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
const $4 = { class: "mx-auto h-[190vh] w-full max-w-6xl" }, w4 = { class: "sticky top-[12vh] flex flex-col items-center gap-8" }, C4 = { class: "flex max-w-2xl flex-col items-center gap-3 text-center" }, S4 = { class: "text-2xl font-semibold tracking-tight text-balance sm:text-3xl" }, M4 = {
  key: 0,
  class: "text-pretty text-muted-foreground"
}, B4 = { class: "pk-showcase-stage w-full [perspective:1400px]" }, _4 = { class: "pk-showcase-frame overflow-hidden rounded-xl border bg-card shadow-2xl" }, A4 = { class: "flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5" }, P4 = { class: "ml-3 truncate text-xs text-muted-foreground" }, z4 = { class: "flex" }, O4 = { class: "hidden w-40 shrink-0 flex-col gap-2 border-r p-4 sm:flex" }, L4 = { class: "min-w-0 flex-1 p-4" }, j4 = { class: "flex flex-col divide-y rounded-md border" }, V4 = /* @__PURE__ */ O({
  __name: "PkShowcase",
  props: {
    title: {},
    body: {},
    rows: { default: 6 },
    caption: {}
  },
  setup(e) {
    const { el: l } = k4();
    return (a, r) => (t(), n("section", {
      ref_key: "el",
      ref: l,
      class: "pk-showcase relative w-full px-4 sm:px-6"
    }, [
      o("div", $4, [
        o("div", w4, [
          o("div", C4, [
            o("h2", S4, c(e.title), 1),
            e.body ? (t(), n("p", M4, c(e.body), 1)) : $("", !0)
          ]),
          o("div", B4, [
            o("div", _4, [
              o("div", A4, [
                r[0] || (r[0] = o("span", { class: "size-2.5 rounded-full bg-red-400/70" }, null, -1)),
                r[1] || (r[1] = o("span", { class: "size-2.5 rounded-full bg-amber-400/70" }, null, -1)),
                r[2] || (r[2] = o("span", { class: "size-2.5 rounded-full bg-emerald-400/70" }, null, -1)),
                o("span", P4, c(e.caption ?? "yourpanel.example / records"), 1)
              ]),
              o("div", z4, [
                o("div", O4, [
                  (t(), n(z, null, j(6, (s) => o("span", {
                    key: s,
                    class: "h-2.5 rounded bg-foreground/10",
                    style: se({ width: `${55 + s * 13 % 40}%` })
                  }, null, 4)), 64))
                ]),
                o("div", L4, [
                  r[4] || (r[4] = o("div", { class: "mb-3 flex gap-2" }, [
                    o("span", { class: "h-7 w-28 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "h-7 w-20 rounded-md bg-foreground/[0.07]" }),
                    o("span", { class: "ml-auto h-7 w-24 rounded-md bg-primary/25" })
                  ], -1)),
                  o("div", j4, [
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
}), T4 = /* @__PURE__ */ O({
  __name: "PkCountUp",
  props: {
    to: {},
    prefix: {},
    suffix: {},
    decimals: { default: 0 },
    duration: { default: 1400 }
  },
  setup(e) {
    const l = e, { el: a, shown: r } = Xa(), s = R(0);
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
}), D4 = { class: "flex flex-col gap-10" }, E4 = { class: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4" }, I4 = { class: "order-2 text-sm text-muted-foreground" }, F4 = { class: "order-1 text-3xl font-semibold tracking-tight sm:text-4xl" }, N4 = /* @__PURE__ */ O({
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
    return (a, r) => (t(), T(Se, { muted: "" }, {
      default: L(() => [
        o("div", D4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("dl", E4, [
            (t(!0), n(z, null, j(e.items ?? [], (s, i) => (t(), n("div", {
              key: i,
              class: "flex flex-col items-center gap-1 text-center"
            }, [
              o("dt", I4, c(s.label), 1),
              o("dd", F4, [
                l(s.value) ? (t(), T(T4, {
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
}), R4 = { class: "flex flex-col gap-10" }, U4 = { class: "grid gap-6 md:grid-cols-3" }, H4 = { class: "flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" }, K4 = { class: "text-sm font-semibold" }, q4 = { class: "text-sm text-pretty text-muted-foreground" }, G4 = /* @__PURE__ */ O({
  __name: "PkSteps",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", R4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ol", U4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-2"
            }, [
              o("span", H4, c(s + 1), 1),
              o("h3", K4, c(r.title), 1),
              o("p", q4, c(r.body), 1)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), W4 = { class: "flex flex-col gap-10" }, Z4 = { class: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" }, J4 = ["src"], Y4 = {
  key: 1,
  class: "mx-auto flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold",
  "aria-hidden": "true"
}, X4 = { class: "min-w-0" }, Q4 = { class: "truncate text-sm font-semibold" }, e5 = {
  key: 0,
  class: "truncate text-xs text-muted-foreground"
}, t5 = {
  key: 2,
  class: "text-pretty text-xs text-muted-foreground"
}, a5 = /* @__PURE__ */ O({
  __name: "PkTeam",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", W4, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", Z4, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-3 rounded-lg border bg-card p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              r.avatar ? (t(), n("img", {
                key: 0,
                src: r.avatar,
                alt: "",
                class: "mx-auto size-16 rounded-full object-cover"
              }, null, 8, J4)) : (t(), n("span", Y4, c((r.name ?? "?").slice(0, 1)), 1)),
              o("div", X4, [
                o("h3", Q4, c(r.name), 1),
                r.role ? (t(), n("p", e5, c(r.role), 1)) : $("", !0)
              ]),
              r.bio ? (t(), n("p", t5, c(r.bio), 1)) : $("", !0)
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), n5 = { class: "flex flex-col gap-10" }, l5 = { class: "grid gap-4 md:grid-cols-2 lg:grid-cols-3" }, o5 = { class: "text-pretty text-sm leading-relaxed" }, s5 = { class: "mt-auto flex items-center gap-3" }, r5 = ["src"], i5 = {
  key: 1,
  class: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
  "aria-hidden": "true"
}, d5 = { class: "min-w-0" }, u5 = { class: "block truncate text-sm font-medium" }, c5 = {
  key: 0,
  class: "block truncate text-xs text-muted-foreground"
}, f5 = /* @__PURE__ */ O({
  __name: "PkTestimonials",
  props: {
    title: {},
    body: {},
    items: {}
  },
  setup(e) {
    return (l, a) => (t(), T(Se, null, {
      default: L(() => [
        o("div", n5, [
          D(je, {
            title: e.title,
            body: e.body
          }, null, 8, ["title", "body"]),
          o("ul", l5, [
            (t(!0), n(z, null, j(e.items ?? [], (r, s) => (t(), n("li", {
              key: s,
              class: "flex flex-col gap-4 rounded-lg border bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
            }, [
              o("blockquote", o5, " “" + c(r.quote) + "” ", 1),
              o("figcaption", s5, [
                r.avatar ? (t(), n("img", {
                  key: 0,
                  src: r.avatar,
                  alt: "",
                  class: "size-9 shrink-0 rounded-full object-cover"
                }, null, 8, r5)) : (t(), n("span", i5, c((r.name ?? "?").slice(0, 1)), 1)),
                o("span", d5, [
                  o("span", u5, c(r.name), 1),
                  r.role ? (t(), n("span", c5, c(r.role), 1)) : $("", !0)
                ])
              ])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }));
  }
}), C8 = /* @__PURE__ */ O({
  __name: "PkLandingSections",
  props: {
    sections: {},
    warnOnUnknown: { type: Boolean, default: !1 }
  },
  setup(e, { expose: l }) {
    const a = e, r = {
      hero: Qw,
      logos: n4,
      features: Kw,
      bento: yw,
      showcase: V4,
      steps: G4,
      stats: N4,
      testimonials: f5,
      team: a5,
      articles: cw,
      contact: Pw,
      pricing: x4,
      faq: Fw,
      cta: Vw
    }, s = x(
      () => (a.sections ?? []).map((i, d) => ({
        key: `${i.type}-${d}`,
        component: r[i.type],
        type: i.type,
        data: i.data ?? {}
      })).filter((i) => (!i.component && a.warnOnUnknown && console.warn(`[alxtexhpanel] Unknown landing section "${i.type}" - skipped.`), !!i.component))
    );
    return l({ known: Object.keys(r) }), (i, d) => (t(!0), n(z, null, j(s.value, (u) => (t(), T(_e(u.component), re({
      key: u.key
    }, { ref_for: !0 }, u.data), null, 16))), 128));
  }
}), m5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, S8 = /* @__PURE__ */ O({
  __name: "PkAuroraBackdrop",
  props: {
    intensity: { default: "full" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", m5, [
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
}), p5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, M8 = /* @__PURE__ */ O({
  __name: "PkEditorialBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", p5, [...a[0] || (a[0] = [
      Nt('<div class="pk-wash absolute inset-0"></div><div class="absolute inset-y-0 left-1/2 hidden w-full max-w-3xl -translate-x-1/2 lg:block"><div class="absolute inset-y-0 left-0 w-px bg-foreground/[0.06]"></div><div class="absolute inset-y-0 right-0 w-px bg-foreground/[0.06]"></div></div><div class="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" style="background-image:url(&quot;data:image/svg+xml;utf8,&lt;svg xmlns=&#39;http://www.w3.org/2000/svg&#39; width=&#39;160&#39; height=&#39;160&#39;&gt;&lt;filter id=&#39;n&#39;&gt;&lt;feTurbulence type=&#39;fractalNoise&#39; baseFrequency=&#39;0.85&#39; numOctaves=&#39;3&#39;/&gt;&lt;/filter&gt;&lt;rect width=&#39;160&#39; height=&#39;160&#39; filter=&#39;url(%23n)&#39;/&gt;&lt;/svg&gt;&quot;);"></div>', 3)
    ])]));
  }
}), v5 = {
  class: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
  "aria-hidden": "true"
}, B8 = /* @__PURE__ */ O({
  __name: "PkConsoleBackdrop",
  setup(e) {
    return (l, a) => (t(), n("div", v5, [...a[0] || (a[0] = [
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
ew();
const _8 = "0.0.1";
export {
  ra as ACTION_KEY_ICONS,
  Tt as APPEARANCE_STYLE_ID,
  ZC as AdminDirectory,
  qc as Alert,
  Gc as AlertDescription,
  Wc as AlertTitle,
  jC as AppPageFooter,
  Y5 as AppearanceDrawer,
  J3 as Avatar,
  Y3 as AvatarFallback,
  X3 as AvatarImage,
  Yt as BADGE_VARIANTS,
  K5 as BadgeResolver,
  RC as BarChart,
  Q3 as Breadcrumb,
  eC as BreadcrumbEllipsis,
  tC as BreadcrumbItem,
  aC as BreadcrumbLink,
  nC as BreadcrumbList,
  lC as BreadcrumbPage,
  oC as BreadcrumbSeparator,
  B5 as BulkActions,
  Ha as CATALOGUE_CONTAINER,
  Qc as CATALOGUE_GRID,
  l3 as CATALOGUE_GRID_TIGHT,
  ef as CATALOGUE_GRID_TILES,
  CC as Card,
  SC as CardAction,
  MC as CardContent,
  BC as CardDescription,
  _C as CardFooter,
  AC as CardHeader,
  PC as CardTitle,
  Jx as CartPanel,
  l8 as CatalogBrowser,
  $1 as CatalogCard,
  Ya as CatalogFilterSheet,
  ta as CatalogGrid,
  a8 as CatalogInspect,
  I0 as CatalogItemDetail,
  n8 as CatalogItemView,
  o8 as CatalogRegister,
  t8 as CatalogTill,
  Gh as ChartCard,
  mt as ChartTooltip,
  Xr as Checkbox,
  I5 as CheckboxCell,
  F5 as CodeCell,
  ou as ColourCell,
  GC as ComboChart,
  Yr as CreateOptionDialog,
  Kr as CreateOptionError,
  r8 as DASHBOARD_HIDDEN_STORAGE_KEY,
  xk as DASHBOARD_HIDE_KEY,
  i8 as DashboardShortcuts,
  oo as DataTable,
  mC as Dialog,
  pC as DialogClose,
  vC as DialogContent,
  gC as DialogDescription,
  hC as DialogFooter,
  bC as DialogHeader,
  zf as DialogOverlay,
  yC as DialogScrollContent,
  xC as DialogTitle,
  kC as DialogTrigger,
  ZC as DirectoryPage,
  T3 as DropdownMenu,
  D3 as DropdownMenuCheckboxItem,
  E3 as DropdownMenuContent,
  I3 as DropdownMenuGroup,
  F3 as DropdownMenuItem,
  N3 as DropdownMenuLabel,
  z8 as DropdownMenuPortal,
  R3 as DropdownMenuRadioGroup,
  U3 as DropdownMenuRadioItem,
  H3 as DropdownMenuSeparator,
  K3 as DropdownMenuShortcut,
  q3 as DropdownMenuSub,
  G3 as DropdownMenuSubContent,
  W3 as DropdownMenuSubTrigger,
  Z3 as DropdownMenuTrigger,
  U5 as EditableCell,
  Me as FOCUS_RING,
  _5 as FOCUS_RING_SOFT,
  da as FOCUS_RING_WITHIN,
  so as FORM_MEASURE,
  Xe as FormFieldControl,
  WC as HeatmapChart,
  ul as ICON_ALIASES,
  gt as ICON_PATHS,
  Re as INPUT_COPY,
  Zr as INPUT_PLACEHOLDER,
  Wr as INPUT_TEXT,
  Zd as IconCell,
  eu as ImageCell,
  b8 as InfoNode,
  af as JPEG_IMAGE_ERROR,
  N5 as KeyValueCell,
  $C as Label,
  ug as LineChart,
  Px as LineItems,
  uo as MODAL_PANEL,
  co as MODAL_PANEL_FORM,
  V5 as MUTED_COPY,
  vt as MUTED_COPY_SNUG,
  T5 as MUTED_COPY_XS,
  kt as MiniStatCard,
  sC as NavigationMenu,
  rC as NavigationMenuContent,
  iC as NavigationMenuIndicator,
  dC as NavigationMenuItem,
  uC as NavigationMenuLink,
  cC as NavigationMenuList,
  fC as NavigationMenuTrigger,
  Af as NavigationMenuViewport,
  tf as OPAQUE_IMAGE_ERROR,
  Oa as OVERLAY_FORM_MEASURE,
  Ge as PAGE_SHELL,
  S5 as PAGE_SHELL_COMPACT,
  M5 as PAGE_SHELL_STACK,
  y8 as PaymentGatewaySettings,
  c$ as PaymentGateways,
  UC as PieChart,
  a3 as PkAlertError,
  cw as PkArticles,
  S8 as PkAuroraBackdrop,
  qe as PkBadge,
  vp as PkBarcode,
  yw as PkBento,
  X5 as PkBottomNav,
  zC as PkBoundary,
  DC as PkBuilder,
  ue as PkButton,
  EC as PkCalendar,
  OC as PkCard,
  Lm as PkCheckboxList,
  Za as PkCodeBox,
  gm as PkCodeInput,
  Xm as PkColourPicker,
  B8 as PkConsoleBackdrop,
  Pw as PkContact,
  T4 as PkCountUp,
  Vw as PkCta,
  VC as PkDeviceFrame,
  bp as PkDiff,
  wv as PkDocument,
  Je as PkDropdown,
  M8 as PkEditorialBackdrop,
  Lt as PkEmptyState,
  Fw as PkFaq,
  Kw as PkFeatureGrid,
  Pe as PkFieldLabel,
  La as PkFileUpload,
  De as PkHeading,
  Qw as PkHero,
  Mi as PkKeyValue,
  C8 as PkLandingSections,
  n4 as PkLogoCloud,
  ep as PkMap,
  np as PkMapField,
  dm as PkMarkdownInput,
  dt as PkModal,
  Wt as PkMultiSelect,
  e3 as PkOtpInput,
  t3 as PkPageHeader,
  p8 as PkPasskeyRegister,
  n3 as PkPasswordInput,
  x4 as PkPricing,
  ip as PkQrCode,
  yx as PkQtyStepper,
  ps as PkQueryBuilder,
  Pm as PkRadioGroup,
  TC as PkRepeater,
  tw as PkReveal,
  Ti as PkRichEditor,
  Se as PkSection,
  je as PkSectionHeading,
  V4 as PkShowcase,
  ek as PkSignaturePad,
  ze as PkSkeleton,
  aa as PkSlideover,
  zp as PkSlider,
  Q5 as PkSpinner,
  N4 as PkStats,
  we as PkStatusBadge,
  Ur as PkStepIndicator,
  G4 as PkSteps,
  qp as PkSwatchPreview,
  Fm as PkTagsInput,
  a5 as PkTeam,
  f5 as PkTestimonials,
  $e as PkTextInput,
  pw as PkTiltCard,
  Hp as PkVisualSelect,
  Z1 as PlanCard,
  e8 as PlanEditor,
  QC as PlanGrid,
  qC as PolarAreaChart,
  KC as RadarChart,
  E5 as RatingCell,
  q5 as RecordActions,
  v8 as RecordForm,
  D5 as RelationCreateDialog,
  P5 as RelationPanel,
  ro as SLIDEOVER_BODY,
  io as SLIDEOVER_WIDTH,
  Qb as STATUS_TONES,
  HC as ScatterChart,
  ja as SchemaNode,
  YC as SegmentedBar,
  c8 as SelectionBar,
  Cf as Separator,
  u8 as SetupChecklist,
  Ua as ShadcnInput,
  Zt as Sheet,
  d3 as SheetClose,
  Jt as SheetContent,
  df as SheetDescription,
  u3 as SheetFooter,
  uf as SheetHeader,
  cf as SheetTitle,
  c3 as SheetTrigger,
  fb as ShortcutsWidget,
  f3 as Sidebar,
  m3 as SidebarContent,
  p3 as SidebarFooter,
  v3 as SidebarGroup,
  g3 as SidebarGroupAction,
  h3 as SidebarGroupContent,
  b3 as SidebarGroupLabel,
  y3 as SidebarHeader,
  x3 as SidebarInput,
  k3 as SidebarInset,
  $3 as SidebarMenu,
  w3 as SidebarMenuAction,
  C3 as SidebarMenuBadge,
  M3 as SidebarMenuButton,
  B3 as SidebarMenuItem,
  _3 as SidebarMenuSkeleton,
  A3 as SidebarMenuSub,
  P3 as SidebarMenuSubButton,
  z3 as SidebarMenuSubItem,
  O3 as SidebarProvider,
  L3 as SidebarRail,
  j3 as SidebarSeparator,
  V3 as SidebarTrigger,
  s8 as SignatureStudio,
  St as Sparkline,
  wC as Spinner,
  JC as StatCard,
  XC as StatListChart,
  d8 as StatStrip,
  Ze as Switch,
  Ka as TRANSPARENT_IMAGE_HELP,
  f8 as TablePagination,
  Ho as TableShell,
  m8 as TableTabs,
  kr as TableToolbar,
  R5 as TagsCell,
  NC as ThemeToggle,
  kf as Tooltip,
  $f as TooltipContent,
  S3 as TooltipProvider,
  wf as TooltipTrigger,
  Ja as TrendBadge,
  g8 as UnsavedBar,
  Zc as alertVariants,
  Zu as appearancePayload,
  Ea as appearanceVars,
  Dt as applyAppearance,
  rf as assertTransparentImage,
  W5 as bootstrapAppearance,
  st as buttonClasses,
  $t as catalogFiltersActive,
  Q as cn,
  Gr as createOptionActionLabel,
  qr as createOptionTitle,
  w1 as cycleLabel,
  Ee as emptyCatalogFilters,
  Hr as fieldControl,
  j5 as fieldErrorsFromPayload,
  ax as findExactSku,
  C1 as formatPerkValue,
  ku as hasBadgeValue,
  z5 as hasFieldControl,
  IC as hasOptionPreview,
  ce as iconPath,
  of as imageHasTransparency,
  Ia as initializeAppearance,
  Qt as isDark,
  na as matchCatalogItem,
  r3 as mergeLayoutItems,
  Pf as navigationMenuTriggerStyle,
  Op as optionPreview,
  o3 as packWidgetColumns,
  s3 as parseWidgetId,
  S1 as perkGranted,
  ea as readAppearance,
  Ju as readServerAppearance,
  ew as registerBuiltInFieldControls,
  xe as registerFieldControl,
  Pt as registerOptionPreview,
  O5 as registeredFieldTypes,
  Lp as registeredOptionPreviews,
  G5 as resetAppearanceBootstrapForTests,
  L5 as resetFieldControls,
  FC as resetOptionPreviews,
  ot as resolveActionIcon,
  J5 as setAppearancePersister,
  Sf as sidebarMenuButtonVariants,
  n1 as statusBadgeVariant,
  a1 as statusTone,
  Z5 as syncAppearanceFromInertiaPage,
  i3 as toPersistedLayout,
  A5 as toUrl,
  Ra as useAppearance,
  x8 as useColumnVisibility,
  k8 as useColumnWidths,
  $8 as useLiveUpdates,
  fw as usePointer,
  Xa as useReveal,
  H5 as useSchemaColumns,
  k4 as useScrollProgress,
  LC as useShellPageFooter,
  Ct as useSidebar,
  w8 as useTenantTheme,
  h8 as useUnsavedChanges,
  _8 as version,
  fa as widgetId
};
//# sourceMappingURL=index.js.map
